#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SuperCode IDE - 70-Page Physical Static Matrix Verifier & README Link Upgrader
1. Audits all 70 physical HTML files (7 root English + 63 localized subdirectory pages)
   to verify Wave-1 static <title>, <html lang>, self-referencing <link rel="canonical">,
   Quad-Core @graph JSON-LD, and ../i18n_extended.js path binding.
2. Upgrades README.md multilingual links from ?lang=xx to physical /<lang>/ static URLs.
"""

import os
import re
import sys
import json

# ==================== ADJUSTABLE CONFIGURATION ====================
SITE_DIR = "."
BASE_DOMAIN = "https://supercode-ide.github.io"
SUBDIR_LANGS = ["zh", "es", "ja", "de", "fr", "ko", "pt", "hi", "ru"]
ALL_LANGS = ["en"] + SUBDIR_LANGS

SITE_PAGES = [
    "index.html",
    "code-editor.html",
    "python-ide.html",
    "cpp-ide.html",
    "java-ide.html",
    "web-ide.html",
    "git-client.html"
]

UPGRADE_README_LINKS = True


def expected_static_canonical(filename, lang):
    """Calculate the exact expected self-referencing canonical URL for any of the 70 pages."""
    clean_file = "" if filename == "index.html" else filename
    if lang == "en":
        return f"{BASE_DOMAIN}/{clean_file}" if clean_file else f"{BASE_DOMAIN}/"
    return f"{BASE_DOMAIN}/{lang}/{clean_file}" if clean_file else f"{BASE_DOMAIN}/{lang}/"


def audit_single_static_page(filepath, filename, lang):
    """Verify a single physical HTML page (root or subdirectory) for Wave-1 static SEO compliance."""
    if not os.path.exists(filepath):
        return False, f"File missing: {filepath}"

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    issues = []

    # 1. Verify pure UTF-8 / ASCII safety (no \u00A0 or \uFFFD)
    if "\u00a0" in content or "\ufffd" in content:
        issues.append("Contains forbidden \\u00A0 or corrupted \\uFFFD character")

    # 2. Verify non-empty <title>
    title_match = re.search(r"<title[^>]*>(.*?)</title>", content, re.IGNORECASE | re.DOTALL)
    if not title_match or not title_match.group(1).strip():
        issues.append("Missing or empty <title>")

    # 3. Verify self-referencing <link rel="canonical">
    canon_match = re.search(
        r'<link\b[^>]*?\brel=["\']canonical["\'][^>]*?\bhref=["\']([^"\']+)["\']',
        content,
        re.IGNORECASE
    )
    exp_canon = expected_static_canonical(filename, lang)
    if not canon_match:
        issues.append("Missing <link rel='canonical'>")
    elif canon_match.group(1).strip() != exp_canon:
        issues.append(f"Canonical mismatch: found '{canon_match.group(1)}' vs expected '{exp_canon}'")

    # 4. Verify subdirectory script reference & static lock
    if lang != "en":
        if 'src="../i18n_extended.js"' not in content:
            issues.append("Missing relative '../i18n_extended.js' script reference")
        if f'window.__SUPERCODE_STATIC_LANG__="{lang}"' not in content:
            issues.append(f"Missing __SUPERCODE_STATIC_LANG__='{lang}' lock")
    else:
        if 'src="i18n_extended.js"' not in content:
            issues.append("Missing 'i18n_extended.js' script reference")

    # 5. Verify Quad-Core @graph JSON-LD presence
    if '"@graph"' not in content or '"SoftwareApplication"' not in content:
        issues.append("Missing Quad-Core @graph JSON-LD")

    if issues:
        return False, f"{filepath}: " + " | ".join(issues)
    return True, "OK"


def upgrade_readme_to_static_urls():
    """Upgrade ?lang=xx links inside README.md to physical /<lang>/ static URLs."""
    readme_path = os.path.join(SITE_DIR, "README.md")
    if not os.path.exists(readme_path):
        return 0

    with open(readme_path, "r", encoding="utf-8") as f:
        text = f.read()

    original = text
    # Pattern 1: https://supercode-ide.github.io/?lang=xx -> https://supercode-ide.github.io/xx/
    text = re.sub(
        r"https://supercode-ide\.github\.io/\?lang=([a-z]{2})",
        r"https://supercode-ide.github.io/\1/",
        text
    )
    # Pattern 2: https://supercode-ide.github.io/page.html?lang=xx -> https://supercode-ide.github.io/xx/page.html
    text = re.sub(
        r"https://supercode-ide\.github\.io/([a-z0-9\-]+\.html)\?lang=([a-z]{2})",
        r"https://supercode-ide.github.io/\2/\1",
        text
    )

    if text != original:
        with open(readme_path, "w", encoding="utf-8", newline="\n") as f:
            f.write(text)
        return 1
    return 0


def run_70_static_verification():
    print("=" * 90)
    print("SUPERCODE 70-PAGE PHYSICAL STATIC MATRIX AUDITOR & README LINK UPGRADER")
    print("=" * 90)

    total_pages = 0
    passed_pages = 0
    failed_details = []

    for lang in ALL_LANGS:
        lang_passed = 0
        for filename in SITE_PAGES:
            total_pages += 1
            if lang == "en":
                filepath = os.path.join(SITE_DIR, filename)
            else:
                filepath = os.path.join(SITE_DIR, lang, filename)

            ok, msg = audit_single_static_page(filepath, filename, lang)
            if ok:
                passed_pages += 1
                lang_passed += 1
            else:
                failed_details.append(msg)

        folder_label = "/ (Root English)" if lang == "en" else f"/{lang}/ (Static Subdir)"
        sample_canon = expected_static_canonical("python-ide.html", lang)
        status_tag = "[PASS 7/7]" if lang_passed == 7 else f"[FAIL {lang_passed}/7]"
        print(f"{status_tag} {folder_label:<22} -> Canonical Verified (e.g., {sample_canon})")

    print("-" * 90)

    if UPGRADE_README_LINKS:
        upgraded = upgrade_readme_to_static_urls()
        if upgraded:
            print("[README]   Upgraded README.md multilingual links from '?lang=xx' to '/<lang>/' static URLs.")
        else:
            print("[README]   README.md multilingual static links verified.")

    print("=" * 90)
    print(f"STATIC MATRIX SUMMARY: {passed_pages}/{total_pages} physical HTML files passed Wave-1 SEO verification.")
    if failed_details:
        for err in failed_details:
            print(f"  [ERROR] {err}")
        print("=" * 90)
        return 1

    print("STATUS: 100% WAVE-1 READY! Run 'git add .', 'git commit', and 'git push' to deploy all 70 pages.")
    print("=" * 90)
    return 0


if __name__ == "__main__":
    sys.exit(run_70_static_verification())
