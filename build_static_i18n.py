#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SuperCode IDE - 10-Language Physical Static Pre-Rendering Builder (build_static_i18n.py)
Compiles the 10-language dictionaries from i18n_extended.js and index.html into 63 physical
static HTML files across 9 language subdirectories (/zh/, /es/, /ja/, /de/, /fr/, /ko/, /pt/, /hi/, /ru/),
while keeping the 7 English master pages at the root directory (/).
Also updates hreflang clusters, sitemap.xml, and sitemap.txt for Wave-1 Googlebot instant indexing.
"""

import os
import re
import json
from datetime import date

# ==================== ADJUSTABLE CONFIGURATION ====================
SITE_DIR = "."
BASE_DOMAIN = "https://supercode-ide.github.io"
LASTMOD_DATE = date.today().strftime("%Y-%m-%d")

# 9 Non-English Target Subdirectory Languages (English 'en' stays at root '/')
TARGET_SUBDIR_LANGS = ["zh", "es", "ja", "de", "fr", "ko", "pt", "hi", "ru"]
ALL_LANGS = ["en"] + TARGET_SUBDIR_LANGS

HREFLANG_CODE_MAP = {
    "en": "en",
    "zh": "zh-Hans",
    "es": "es",
    "ja": "ja",
    "de": "de",
    "fr": "fr",
    "ko": "ko",
    "pt": "pt",
    "hi": "hi",
    "ru": "ru"
}

PAGE_KEY_MAP = {
    "index.html": "index",
    "code-editor.html": "code_editor",
    "python-ide.html": "python_ide",
    "cpp-ide.html": "cpp_ide",
    "java-ide.html": "java_ide",
    "web-ide.html": "web_ide",
    "git-client.html": "git_client"
}

SITE_PAGES = list(PAGE_KEY_MAP.keys())
UPDATE_ROOT_HREFLANG_TO_STATIC_DIRS = True
UPDATE_SITEMAPS_TO_STATIC_DIRS = True


def to_ascii_html_entities(text):
    """Convert any non-ASCII characters (ord >= 128) into &#NNNN; HTML numeric entities."""
    if not text:
        return ""
    out = []
    for ch in text:
        code = ord(ch)
        if code >= 128:
            out.append(f"&#{code};")
        else:
            out.append(ch)
    return "".join(out)


def extract_js_json_object(js_text, marker_str):
    """Extract a balanced JSON/JS object literal {...} following marker_str."""
    idx = js_text.find(marker_str)
    if idx == -1:
        raise ValueError(f"Marker not found: {marker_str}")
    brace_start = js_text.find("{", idx + len(marker_str))
    if brace_start == -1:
        raise ValueError(f"Opening brace not found after: {marker_str}")

    depth = 0
    in_str = False
    str_char = ""
    escaped = False

    for pos in range(brace_start, len(js_text)):
        ch = js_text[pos]
        if in_str:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == str_char:
                in_str = False
        else:
            if ch in ('"', "'"):
                in_str = True
                str_char = ch
            elif ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    raw_obj = js_text[brace_start:pos + 1]
                    return json.loads(raw_obj)
    raise ValueError(f"Unbalanced braces for marker: {marker_str}")


def extract_index_inline_i18n(index_html_text):
    """Extract built-in en, es, zh dictionaries from index.html's window.I18N object."""
    marker = "window.I18N ="
    idx = index_html_text.find(marker)
    if idx == -1:
        return {}
    brace_start = index_html_text.find("{", idx)
    depth = 0
    in_str = False
    str_char = ""
    escaped = False
    end_pos = -1
    for pos in range(brace_start, len(index_html_text)):
        ch = index_html_text[pos]
        if in_str:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == str_char:
                in_str = False
        else:
            if ch in ('"', "'"):
                in_str = True
                str_char = ch
            elif ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    end_pos = pos + 1
                    break
    if end_pos == -1:
        return {}

    raw_js = index_html_text[brace_start:end_pos]
    # Parse each language block (en, es, zh) and its key: 'value' pairs
    result = {"en": {}, "es": {}, "zh": {}}
    for lang in ["en", "es", "zh"]:
        lang_match = re.search(rf"\b{lang}\s*:\s*\{{(.*?)\n\s*\}}", raw_js, re.DOTALL)
        if not lang_match:
            continue
        block = lang_match.group(1)
        for kv in re.finditer(r"(\w+)\s*:\s*'((?:\\'|[^'])*)'", block):
            k = kv.group(1)
            v_raw = kv.group(2).replace("\\'", "'")
            # Decode \uXXXX escapes
            v_decoded = re.sub(
                r"\\u([0-9a-fA-F]{4})",
                lambda m: chr(int(m.group(1), 16)),
                v_raw
            )
            result[lang][k] = v_decoded
    return result


def build_static_url(filename, lang):
    """Return the canonical static URL for a given page and language."""
    clean_file = "" if filename == "index.html" else filename
    if lang == "en":
        return f"{BASE_DOMAIN}/{clean_file}" if clean_file else f"{BASE_DOMAIN}/"
    else:
        return f"{BASE_DOMAIN}/{lang}/{clean_file}" if clean_file else f"{BASE_DOMAIN}/{lang}/"


def build_hreflang_cluster_html(filename):
    """Generate the 11-line <link rel='alternate' hreflang='...'> block for static directories."""
    lines = [
        f'  <link rel="alternate" hreflang="x-default" href="{build_static_url(filename, "en")}">'
    ]
    for lang in ALL_LANGS:
        hl_code = HREFLANG_CODE_MAP[lang]
        url = build_static_url(filename, lang)
        lines.append(f'  <link rel="alternate" hreflang="{hl_code}" href="{url}">')
    return "\n".join(lines)


def replace_data_i18n_content(html_text, merged_dict):
    """Replace innerHTML of elements carrying data-i18n='key' with localized HTML-entity-safe text."""
    pattern = re.compile(
        r'(<([a-zA-Z0-9]+)\b[^>]*?\bdata-i18n=["\']([a-zA-Z0-9_]+)["\'][^>]*>)(.*?)(</\2>)',
        re.DOTALL
    )

    def repl(match):
        open_tag, tag_name, key, old_inner, close_tag = match.groups()
        if key in merged_dict and merged_dict[key]:
            new_inner = to_ascii_html_entities(merged_dict[key])
            return f"{open_tag}{new_inner}{close_tag}"
        return match.group(0)

    return pattern.sub(repl, html_text)


def pre_render_localized_html(raw_html, filename, lang, page_dict, common_dict):
    """Transform a root English HTML template into a localized static HTML page for /<lang>/<filename>."""
    html = raw_html
    merged = {}
    merged.update(common_dict)
    merged.update(page_dict)

    html_lang = merged.get("htmlLang", HREFLANG_CODE_MAP.get(lang, lang))
    canonical_url = build_static_url(filename, lang)
    meta_title = to_ascii_html_entities(merged.get("metaTitle", ""))
    meta_desc = to_ascii_html_entities(merged.get("metaDesc", ""))

    # 1. Update <html lang="...">
    html = re.sub(
        r'<html\s+lang=["\'][^"\']*["\']',
        f'<html lang="{html_lang}" data-static-lang="{lang}"',
        html,
        count=1
    )

    # 2. Update <title>
    if meta_title:
        html = re.sub(
            r'(<title[^>]*>)(.*?)(</title>)',
            lambda m: f"{m.group(1)}{meta_title}{m.group(3)}",
            html,
            count=1,
            flags=re.DOTALL
        )

    # 3. Update <meta name="description">
    if meta_desc:
        html = re.sub(
            r'(<meta\b[^>]*?\bname=["\']description["\'][^>]*?\bcontent=["\'])([^"\']*)(["\'][^>]*>)',
            lambda m: f"{m.group(1)}{meta_desc}{m.group(3)}",
            html,
            count=1
        )

    # 4. Update OpenGraph & Twitter titles/descriptions/URLs
    if meta_title:
        html = re.sub(
            r'(<meta\b[^>]*?\bproperty=["\']og:title["\'][^>]*?\bcontent=["\'])([^"\']*)(["\'][^>]*>)',
            lambda m: f"{m.group(1)}{meta_title}{m.group(3)}",
            html,
            count=1
        )
        html = re.sub(
            r'(<meta\b[^>]*?\bname=["\']twitter:title["\'][^>]*?\bcontent=["\'])([^"\']*)(["\'][^>]*>)',
            lambda m: f"{m.group(1)}{meta_title}{m.group(3)}",
            html,
            count=1
        )
    if meta_desc:
        html = re.sub(
            r'(<meta\b[^>]*?\bproperty=["\']og:description["\'][^>]*?\bcontent=["\'])([^"\']*)(["\'][^>]*>)',
            lambda m: f"{m.group(1)}{meta_desc}{m.group(3)}",
            html,
            count=1
        )
        html = re.sub(
            r'(<meta\b[^>]*?\bname=["\']twitter:description["\'][^>]*?\bcontent=["\'])([^"\']*)(["\'][^>]*>)',
            lambda m: f"{m.group(1)}{meta_desc}{m.group(3)}",
            html,
            count=1
        )

    html = re.sub(
        r'(<meta\b[^>]*?\bproperty=["\']og:url["\'][^>]*?\bcontent=["\'])([^"\']*)(["\'][^>]*>)',
        lambda m: f"{m.group(1)}{canonical_url}{m.group(3)}",
        html,
        count=1
    )

    # 5. Update Self-Referencing <link rel="canonical">
    html = re.sub(
        r'(<link\b[^>]*?\brel=["\']canonical["\'][^>]*?\bhref=["\'])([^"\']*)(["\'][^>]*>)',
        lambda m: f"{m.group(1)}{canonical_url}{m.group(3)}",
        html,
        count=1
    )

    # 6. Replace hreflang cluster with static directory URLs
    html = re.sub(
        r'(\s*<link\s+rel=["\']alternate["\']\s+hreflang=["\'][^"\']+["\']\s+href=["\'][^"\']+["\']>\s*)+',
        "\n" + build_hreflang_cluster_html(filename) + "\n",
        html,
        count=1
    )

    # 7. Pre-render all [data-i18n="..."] elements in <body>
    html = replace_data_i18n_content(html, merged)

    # 8. Update language trigger button label (e.g., EN -> HI / PT / RU)
    trigger_label = "&#20013;&#25991;" if lang == "zh" else lang.upper()
    html = re.sub(
        r'(<span\s+id=["\']langTriggerText["\']>)(.*?)(</span>)',
        lambda m: f"{m.group(1)}{trigger_label}{m.group(3)}",
        html,
        count=1
    )

    # 9. Fix script src="i18n_extended.js" -> src="../i18n_extended.js" for subdirectory depth
    # Also inject a lightweight static-lock pre-script so client JS preserves the static canonical URL
    static_lock_script = (
        f'<script>window.__SUPERCODE_STATIC_LANG__="{lang}";'
        f'window.__SUPERCODE_STATIC_CANONICAL__="{canonical_url}";</script>\n  '
        f'<script src="../i18n_extended.js"></script>'
    )
    html = html.replace('<script src="i18n_extended.js"></script>', static_lock_script)

    return html


def patch_i18n_router_for_static_dirs(js_path):
    """
    Upgrade i18n_extended.js so that:
    1. It respects window.__SUPERCODE_STATIC_LANG__ and path-based /<lang>/ subdirectories.
    2. It preserves the self-referencing static canonical URL without overwriting it with ?lang=xx.
    3. Clicking a language in the Modal smoothly navigates to the static directory URL when in a subdir.
    """
    with open(js_path, "r", encoding="utf-8") as f:
        js = f.read()

    if "__SUPERCODE_STATIC_LANG__" in js:
        return False

    # 1. Enhance detectInitialLanguage() to prioritize __SUPERCODE_STATIC_LANG__
    old_detect = "function detectInitialLanguage() {"
    new_detect = (
        "function detectInitialLanguage() {\n"
        "    if (window.__SUPERCODE_STATIC_LANG__) { return window.__SUPERCODE_STATIC_LANG__; }"
    )
    js = js.replace(old_detect, new_detect, 1)

    # 2. Enhance buildCanonicalUrl() to return __SUPERCODE_STATIC_CANONICAL__ if on matching static page
    old_canon = "function buildCanonicalUrl(filename, lang) {"
    new_canon = (
        "function buildCanonicalUrl(filename, lang) {\n"
        "    if (window.__SUPERCODE_STATIC_CANONICAL__ && window.__SUPERCODE_STATIC_LANG__ === lang) {\n"
        "      return window.__SUPERCODE_STATIC_CANONICAL__;\n"
        "    }"
    )
    js = js.replace(old_canon, new_canon, 1)

    # 3. Keep internal links clean (no ?lang=xx needed) when already inside /<lang>/ static directory
    old_link_rewrite = "var nextHref = basePart + (validLang === 'en' ? '' : '?lang=' + validLang) + hashPart;"
    new_link_rewrite = "var nextHref = basePart + ((validLang === 'en' || window.__SUPERCODE_STATIC_LANG__ === validLang) ? '' : '?lang=' + validLang) + hashPart;"
    js = js.replace(old_link_rewrite, new_link_rewrite, 1)

    # 4. Prevent replaceState from appending ?lang=xx when already inside /<lang>/ static directory
    old_replace = "if (window.history && window.history.replaceState) {"
    new_replace = "if (window.history && window.history.replaceState && !window.__SUPERCODE_STATIC_LANG__) {"
    js = js.replace(old_replace, new_replace, 1)

    with open(js_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(js)
    return True


def generate_static_sitemaps():
    """Regenerate sitemap.xml and sitemap.txt with all 70 static URLs."""
    xml_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ]
    txt_lines = []

    for filename in SITE_PAGES:
        for lang in ALL_LANGS:
            loc = build_static_url(filename, lang)
            txt_lines.append(loc)
            if filename == "index.html" and lang == "en":
                prio = "1.0"
                freq = "daily"
            elif filename == "index.html" or (filename == "code-editor.html" and lang == "en"):
                prio = "0.95"
                freq = "daily" if filename == "index.html" else "weekly"
            elif lang == "en" or filename == "code-editor.html":
                prio = "0.9"
                freq = "weekly"
            else:
                prio = "0.85"
                freq = "weekly"

            xml_lines.extend([
                "    <url>",
                f"        <loc>{loc}</loc>",
                f"        <lastmod>{LASTMOD_DATE}</lastmod>",
                f"        <changefreq>{freq}</changefreq>",
                f"        <priority>{prio}</priority>",
                "    </url>"
            ])

    xml_lines.append("</urlset>")

    with open(os.path.join(SITE_DIR, "sitemap.xml"), "w", encoding="utf-8", newline="\n") as xf:
        xf.write("\n".join(xml_lines) + "\n")

    with open(os.path.join(SITE_DIR, "sitemap.txt"), "w", encoding="utf-8", newline="\n") as tf:
        tf.write("\n".join(txt_lines) + "\n")

    return len(txt_lines)


def run_static_i18n_build():
    print("=" * 88)
    print("SUPERCODE 10-LANGUAGE PHYSICAL STATIC PRE-RENDERING BUILDER (WAVE-1 SEO ENGINE)")
    print("=" * 88)

    i18n_js_path = os.path.join(SITE_DIR, "i18n_extended.js")
    index_html_path = os.path.join(SITE_DIR, "index.html")

    if not os.path.exists(i18n_js_path) or not os.path.exists(index_html_path):
        print("[FAIL] Missing i18n_extended.js or index.html in current directory.")
        return 1

    with open(i18n_js_path, "r", encoding="utf-8") as f:
        i18n_js_text = f.read()

    with open(index_html_path, "r", encoding="utf-8") as f:
        index_html_text = f.read()

    # 1. Extract Dictionaries
    common_ui = extract_js_json_object(i18n_js_text, "var COMMON_UI =")
    i18n_extended = extract_js_json_object(i18n_js_text, "window.I18N_EXTENDED =")
    subpage_i18n = extract_js_json_object(i18n_js_text, "window.SUPERCODE_PAGE_I18N =")
    index_inline_i18n = extract_index_inline_i18n(index_html_text)

    # Merge index dictionaries (en, es, zh + 7 extended langs)
    index_all_langs = {}
    index_all_langs.update(index_inline_i18n)
    index_all_langs.update(i18n_extended)

    print(f"[DICT OK] Loaded COMMON_UI ({len(common_ui)} langs), INDEX ({len(index_all_langs)} langs), SUBPAGES ({len(subpage_i18n)} pages)")

    # 2. Upgrade i18n_extended.js router for static subdirectory awareness
    patched = patch_i18n_router_for_static_dirs(i18n_js_path)
    if patched:
        print("[ROUTER]  Upgraded i18n_extended.js with Static Subdirectory Canonical Lock.")

    # 3. Pre-render 63 Physical Static HTML Pages across 9 Language Subdirectories
    generated_count = 0
    for filename in SITE_PAGES:
        src_path = os.path.join(SITE_DIR, filename)
        if not os.path.exists(src_path):
            print(f"[WARN] Skipping missing template: {filename}")
            continue

        with open(src_path, "r", encoding="utf-8") as pf:
            raw_html = pf.read()

        # Optionally update root English page hreflang cluster to point to static /<lang>/ URLs
        if UPDATE_ROOT_HREFLANG_TO_STATIC_DIRS:
            updated_root_html = re.sub(
                r'(\s*<link\s+rel=["\']alternate["\']\s+hreflang=["\'][^"\']+["\']\s+href=["\'][^"\']+["\']>\s*)+',
                "\n" + build_hreflang_cluster_html(filename) + "\n",
                raw_html,
                count=1
            )
            # Also make index.html inline script respect __SUPERCODE_STATIC_LANG__
            if filename == "index.html" and "__SUPERCODE_STATIC_LANG__" not in updated_root_html:
                updated_root_html = updated_root_html.replace(
                    "document.getElementById('og-url').setAttribute('content', dict.canonical);",
                    "document.getElementById('og-url').setAttribute('content', window.__SUPERCODE_STATIC_CANONICAL__ || dict.canonical);"
                )
                updated_root_html = updated_root_html.replace(
                    "document.getElementById('canonical-link').setAttribute('href', dict.canonical);",
                    "document.getElementById('canonical-link').setAttribute('href', window.__SUPERCODE_STATIC_CANONICAL__ || dict.canonical);"
                )
                updated_root_html = updated_root_html.replace(
                    "if (window.history && window.history.replaceState) {",
                    "if (window.history && window.history.replaceState && !window.__SUPERCODE_STATIC_LANG__) {"
                )
            if updated_root_html != raw_html:
                with open(src_path, "w", encoding="utf-8", newline="\n") as wf:
                    wf.write(updated_root_html)
                raw_html = updated_root_html

        page_key = PAGE_KEY_MAP[filename]
        for lang in TARGET_SUBDIR_LANGS:
            lang_dir = os.path.join(SITE_DIR, lang)
            os.makedirs(lang_dir, exist_ok=True)

            common_dict = common_ui.get(lang, {})
            if page_key == "index":
                page_dict = index_all_langs.get(lang, {})
            else:
                page_dict = subpage_i18n.get(page_key, {}).get(lang, {})

            localized_html = pre_render_localized_html(raw_html, filename, lang, page_dict, common_dict)
            out_path = os.path.join(lang_dir, filename)
            with open(out_path, "w", encoding="utf-8", newline="\n") as out_f:
                out_f.write(localized_html)
            generated_count += 1

    print(f"[BUILD]   Successfully compiled {generated_count} physical static HTML files across 9 language folders:")
    print("          " + ", ".join([f"/{l}/ (7 pages)" for l in TARGET_SUBDIR_LANGS]))

    # 4. Update sitemap.xml & sitemap.txt to 70 static URLs
    if UPDATE_SITEMAPS_TO_STATIC_DIRS:
        total_urls = generate_static_sitemaps()
        print(f"[SITEMAP] Updated sitemap.xml & sitemap.txt with {total_urls} static physical URLs.")

    print("=" * 88)
    print("DONE! All 70 URLs (7 root English + 63 localized static pages) are ready for Wave-1 indexing.")
    print("=" * 88)
    return 0


if __name__ == "__main__":
    run_static_i18n_build()
