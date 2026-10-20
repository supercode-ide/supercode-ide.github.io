#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SuperCode Official Website Industrial SEO 2.0, @graph JSON-LD & I18n Auditor
Verifies HTML metadata, Quad-Core @graph JSON-LD, Position #0 Featured Snippets,
Benchmark Comparison Tables, Interactive Sandboxes, .well-known/assetlinks.json,
i18n_extended.js Speculation Rules, app-ads.txt, and 70-URL multilingual sitemaps.
"""

import os
import re
import sys
import json

# ==================== ADJUSTABLE CONFIGURATION ====================
SITE_DIR = "."
EXPECTED_DOMAIN = "https://supercode-ide.github.io"
EXPECTED_PACKAGE_ID = "com.phoenixglobal.supercodeeditor"
EXPECTED_ADMOB_PUB = "pub-1171858697665004"
EXPECTED_SHA256_PREFIX = "36:80:13:43:"
EXPECTED_LANGS = ["en", "zh", "es", "ja", "de", "fr", "ko", "pt", "hi", "ru"]

STRICT_MULTILINGUAL_SITEMAP = True
STRICT_SEO_20_CHECKS = True

SITE_PAGES = [
    "index.html",
    "code-editor.html",
    "python-ide.html",
    "cpp-ide.html",
    "java-ide.html",
    "web-ide.html",
    "git-client.html"
]


def check_balanced_block_comments(text, section_name):
    """Ensure every /* has a matching */ to prevent swallowed CSS/JS blocks."""
    opens = len(re.findall(r"/\*", text))
    closes = len(re.findall(r"\*/", text))
    if opens != closes:
        return f"{section_name} has unbalanced /* */ comments (open={opens}, close={closes})"
    return None


def validate_quad_graph_json_ld(parsed_json):
    """
    Validate On-Page SEO 2.0 Quad-Core @graph JSON-LD structure:
    1. SoftwareApplication / MobileApplication / WebApplication (+ offers & aggregateRating)
    2. BreadcrumbList
    3. HowTo
    4. FAQPage
    """
    errors = []
    if "@graph" not in parsed_json or not isinstance(parsed_json["@graph"], list):
        return ["Missing '@graph' array in JSON-LD (not upgraded to Quad-Core @graph)"]

    graph_items = parsed_json["@graph"]
    found_types = set()
    app_node = None

    for node in graph_items:
        if not isinstance(node, dict):
            continue
        node_type = node.get("@type")
        if isinstance(node_type, list):
            for t in node_type:
                found_types.add(t)
            if "SoftwareApplication" in node_type:
                app_node = node
        elif isinstance(node_type, str):
            found_types.add(node_type)
            if node_type == "SoftwareApplication":
                app_node = node

    required_entities = ["SoftwareApplication", "BreadcrumbList", "HowTo", "FAQPage"]
    for req in required_entities:
        if req not in found_types:
            errors.append(f"JSON-LD @graph missing '{req}' entity")

    if app_node:
        offers = app_node.get("offers", {})
        if not isinstance(offers, dict) or "price" not in offers or "priceCurrency" not in offers:
            errors.append("SoftwareApplication missing valid 'offers' (price & priceCurrency)")
        rating = app_node.get("aggregateRating", {})
        if not isinstance(rating, dict) or str(rating.get("ratingValue")) != "4.92":
            errors.append("SoftwareApplication missing aggregateRating.ratingValue == '4.92'")

    return errors


def audit_html_file(filepath):
    """Audit a single HTML file for SEO 1.0 + SEO 2.0, JSON-LD, hreflang, and encoding safety."""
    if not os.path.exists(filepath):
        return False, f"[FAIL] File missing: {filepath}"

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    issues = []
    warnings = []

    # 0. Check for forbidden non-breaking spaces (\u00A0) or replacement chars (\uFFFD)
    if "\u00a0" in content:
        issues.append("Contains forbidden non-breaking space (\\u00A0)")
    if "\ufffd" in content:
        issues.append("Contains corrupted Unicode replacement character (\\uFFFD)")

    # 1. Check <title> tag
    title_match = re.search(r"<title[^>]*>(.*?)</title>", content, re.IGNORECASE | re.DOTALL)
    if not title_match or not title_match.group(1).strip():
        issues.append("Missing or empty <title> tag")
        title_text = "N/A"
    else:
        title_text = title_match.group(1).strip()

    # 2. Check Meta Description (>= 50 chars)
    desc_match = re.search(
        r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']',
        content,
        re.IGNORECASE
    )
    if not desc_match or len(desc_match.group(1).strip()) < 50:
        issues.append("Meta description missing or shorter than 50 chars")

    # 3. Check Google Play App Deep Link
    if f"app-id={EXPECTED_PACKAGE_ID}" not in content:
        issues.append(f"Missing Google Play meta (app-id={EXPECTED_PACKAGE_ID})")

    # 4. Check Favicon reference
    if 'href="/favicon.svg"' not in content:
        issues.append('Missing href="/favicon.svg"')

    # 5. Check 10-Language hreflang Cluster
    hreflang_matches = re.findall(
        r'<link[^>]*rel=["\']alternate["\'][^>]*hreflang=["\'](.*?)["\']',
        content,
        re.IGNORECASE
    )
    if len(hreflang_matches) < 10:
        issues.append(f"Incomplete hreflang cluster (found {len(hreflang_matches)}, expected >= 10)")

    # 6. Check i18n_extended.js inclusion
    if 'src="i18n_extended.js"' not in content:
        issues.append('Missing <script src="i18n_extended.js"></script>')

    # 7. Check CSS & JS block comment balance
    style_blocks = re.findall(r"<style[^>]*>(.*?)</style>", content, re.IGNORECASE | re.DOTALL)
    for sb in style_blocks:
        err = check_balanced_block_comments(sb, "CSS <style>")
        if err:
            issues.append(err)

    # 8. Validate Schema.org JSON-LD blocks (Syntax + Quad-Core @graph)
    json_ld_matches = re.findall(
        r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
        content,
        re.IGNORECASE | re.DOTALL
    )
    if not json_ld_matches:
        issues.append("Missing Schema.org JSON-LD script block")
    else:
        for block in json_ld_matches:
            try:
                parsed = json.loads(block.strip())
                if not isinstance(parsed, dict):
                    issues.append("JSON-LD root must be a JSON object {...}")
                else:
                    graph_errs = validate_quad_graph_json_ld(parsed)
                    if graph_errs:
                        if STRICT_SEO_20_CHECKS:
                            issues.extend(graph_errs)
                        else:
                            warnings.extend(graph_errs)
            except json.JSONDecodeError as e:
                issues.append(f"JSON-LD syntax error: {e}")

    # 9. On-Page SEO 2.0 Check: Position #0 Featured Snippet Definition (.snippet-definition)
    snippet_match = re.search(
        r'<p[^>]*class=["\'][^"\']*snippet-definition[^"\']*["\'][^>]*>(.*?)</p>',
        content,
        re.IGNORECASE | re.DOTALL
    )
    if not snippet_match:
        msg = "Missing Position #0 Featured Snippet (<p class=\"snippet-definition\">)"
        if STRICT_SEO_20_CHECKS:
            issues.append(msg)
        else:
            warnings.append(msg)
    else:
        plain_snippet = re.sub(r"<[^>]+>", "", snippet_match.group(1)).strip()
        word_count = len(plain_snippet.split())
        if word_count < 25 or word_count > 85:
            warnings.append(f"Snippet word count ({word_count} words) outside optimal 35-65 range")

    # 10. On-Page SEO 2.0 Check: Google Table Snippet (.obsidian-benchmark-table)
    if "obsidian-benchmark-table" not in content:
        msg = "Missing 2026 Benchmark Comparison Table (<table class=\"obsidian-benchmark-table\">)"
        if STRICT_SEO_20_CHECKS:
            issues.append(msg)
        else:
            warnings.append(msg)

    # 11. On-Page SEO 2.0 Check: Interactive Code Sandbox (Dwell Time Booster)
    has_sandbox = ("ide-workbench" in content) or ("carbon-sandbox-container" in content)
    if not has_sandbox:
        msg = "Missing Interactive Code Sandbox (.ide-workbench or .carbon-sandbox-container)"
        if STRICT_SEO_20_CHECKS:
            issues.append(msg)
        else:
            warnings.append(msg)

    if issues:
        return False, f"[FAIL] {filepath} -> " + " | ".join(issues)

    warn_suffix = f" (Warnings: {' | '.join(warnings)})" if warnings else ""
    return True, f"[PASS] {filepath:<16} -> SEO 2.0 Verified (@graph + Snippet#0 + Table + Sandbox) | {title_text[:34]}...{warn_suffix}"


def audit_assetlinks():
    """Verify .well-known/assetlinks.json for Android Digital Asset Links Two-Way Association."""
    asset_path = os.path.join(SITE_DIR, ".well-known", "assetlinks.json")
    if not os.path.exists(asset_path):
        return False, "[FAIL] .well-known/assetlinks.json -> File missing! Two-Way App Links will not verify."

    try:
        with open(asset_path, "r", encoding="utf-8") as af:
            data = json.load(af)
    except Exception as e:
        return False, f"[FAIL] .well-known/assetlinks.json -> Invalid JSON syntax: {e}"

    if not isinstance(data, list) or len(data) == 0:
        return False, "[FAIL] .well-known/assetlinks.json -> Root must be a non-empty JSON array [...]"

    first = data[0]
    target = first.get("target", {})
    pkg = target.get("package_name")
    fingerprints = target.get("sha256_cert_fingerprints", [])

    if pkg != EXPECTED_PACKAGE_ID:
        return False, f"[FAIL] .well-known/assetlinks.json -> Package mismatch ({pkg} != {EXPECTED_PACKAGE_ID})"

    if not fingerprints or any("REPLACE_WITH" in fp for fp in fingerprints):
        return False, "[FAIL] .well-known/assetlinks.json -> Contains unreplaced placeholder SHA-256 fingerprint!"

    has_expected_fp = any(fp.startswith(EXPECTED_SHA256_PREFIX) for fp in fingerprints)
    if not has_expected_fp:
        return False, f"[WARN] .well-known/assetlinks.json -> Fingerprint does not start with {EXPECTED_SHA256_PREFIX}"

    return True, f"[PASS] .well-known/assetlinks.json -> Digital Asset Links verified ({pkg} | SHA-256 OK)"


def run_full_seo_audit():
    print("=" * 88)
    print("SUPERCODE OFFICIAL WEBSITE - INDUSTRIAL ON-PAGE SEO 2.0 & FULL-STACK AUDITOR")
    print("=" * 88)

    passed_html = 0
    total_checks_ok = True

    # 1. Audit all 7 HTML Landing Pages
    for page in SITE_PAGES:
        full_path = os.path.join(SITE_DIR, page)
        ok, msg = audit_html_file(full_path)
        print(msg)
        if ok:
            passed_html += 1
        else:
            total_checks_ok = False

    print("-" * 88)

    # 2. Audit i18n_extended.js (10-Language Dictionary + Speculation Rules Prerender)
    i18n_path = os.path.join(SITE_DIR, "i18n_extended.js")
    if os.path.exists(i18n_path):
        with open(i18n_path, "r", encoding="utf-8") as jf:
            js_content = jf.read()
        comment_err = check_balanced_block_comments(js_content, "i18n_extended.js")
        has_router = "SuperCodeI18nRouter" in js_content
        has_speculation = "speculationrules" in js_content
        if comment_err:
            print(f"[FAIL] i18n_extended.js -> {comment_err}")
            total_checks_ok = False
        elif not has_router:
            print("[FAIL] i18n_extended.js -> Missing SuperCodeI18nRouter global engine")
            total_checks_ok = False
        elif not has_speculation:
            print("[WARN] i18n_extended.js -> Missing Chrome 'speculationrules' 0ms prerender booster")
        else:
            print("[PASS] i18n_extended.js -> 10-Language router, balanced comments & 0ms Speculation Rules verified")
    else:
        print("[FAIL] Missing i18n_extended.js")
        total_checks_ok = False

    # 3. Audit .well-known/assetlinks.json (Android Digital Asset Links)
    asset_ok, asset_msg = audit_assetlinks()
    print(asset_msg)
    if not asset_ok:
        total_checks_ok = False

    # 4. Audit sitemap.xml & sitemap.txt (70 Multilingual URLs)
    sitemap_xml_path = os.path.join(SITE_DIR, "sitemap.xml")
    expected_url_count = len(SITE_PAGES) * len(EXPECTED_LANGS) if STRICT_MULTILINGUAL_SITEMAP else len(SITE_PAGES)
    if os.path.exists(sitemap_xml_path):
        with open(sitemap_xml_path, "r", encoding="utf-8") as sf:
            sm_content = sf.read()
        loc_count = len(re.findall(r"<loc>(.*?)</loc>", sm_content))
        if "\u00a0" in sm_content:
            print("[FAIL] sitemap.xml -> Contains forbidden \\u00A0 characters")
            total_checks_ok = False
        elif loc_count < expected_url_count:
            print(f"[WARN] sitemap.xml -> Has {loc_count} URLs (target multilingual matrix: {expected_url_count} URLs)")
        else:
            print(f"[PASS] sitemap.xml      -> Verified ({loc_count} multilingual URLs, clean encoding)")
    else:
        print("[FAIL] Missing sitemap.xml")
        total_checks_ok = False

    sitemap_txt_path = os.path.join(SITE_DIR, "sitemap.txt")
    if os.path.exists(sitemap_txt_path):
        with open(sitemap_txt_path, "r", encoding="utf-8") as stf:
            txt_lines = [line.strip() for line in stf.readlines() if line.strip()]
        if len(txt_lines) >= expected_url_count:
            print(f"[PASS] sitemap.txt      -> Verified ({len(txt_lines)} plain-text URLs)")
        else:
            print(f"[WARN] sitemap.txt      -> Has {len(txt_lines)} URLs (expected {expected_url_count})")
    else:
        print("[WARN] Missing sitemap.txt")

    # 5. Audit app-ads.txt, robots.txt, .nojekyll, and favicon.svg
    ads_path = os.path.join(SITE_DIR, "app-ads.txt")
    if os.path.exists(ads_path):
        with open(ads_path, "r", encoding="utf-8") as af:
            ads_content = af.read()
        if EXPECTED_ADMOB_PUB in ads_content:
            print(f"[PASS] app-ads.txt      -> Verified ({EXPECTED_ADMOB_PUB})")
        else:
            print("[FAIL] app-ads.txt      -> Missing expected AdMob publisher ID")
            total_checks_ok = False
    else:
        print("[FAIL] Missing app-ads.txt")
        total_checks_ok = False

    aux_files = ["robots.txt", ".nojekyll", "favicon.svg"]
    missing_aux = [f for f in aux_files if not os.path.exists(os.path.join(SITE_DIR, f))]
    if missing_aux:
        print(f"[WARN] Auxiliary files missing: {', '.join(missing_aux)}")
    else:
        print("[PASS] Auxiliary assets -> robots.txt, .nojekyll & favicon.svg verified")

    print("=" * 88)
    print(f"FINAL SUMMARY: {passed_html}/{len(SITE_PAGES)} HTML pages passed 100% of On-Page SEO 2.0 checks.")
    if passed_html == len(SITE_PAGES) and total_checks_ok:
        print("STATUS: ALL SYSTEMS GO! Ready for git commit & push to supercode-ide.github.io.")
        print("=" * 88)
        return 0
    else:
        print("STATUS: ACTION REQUIRED. Please review the [FAIL] items listed above.")
        print("=" * 88)
        return 1


if __name__ == "__main__":
    sys.exit(run_full_seo_audit())