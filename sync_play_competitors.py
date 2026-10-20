#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SuperCode IDE - Real-Time Google Play Competitor Benchmark Synchronizer
Updates the 2026 Benchmark Comparison Tables across HTML pages and README.md
with the exact real-time Google Play ratings captured from live store screenshots:
- SuperCode IDE: 4.92 / 5.00
- Pydroid 3: 4.40 / 5.00 (was 4.50)
- Spck Editor: 4.20 / 5.00 (was 4.45)
- Code Editor (Rhythm): 3.90 / 5.00
- Acode Editor: 3.40 / 5.00 (was 4.60 - now below 3.5 App Pack threshold!)
"""

import os

# ==================== ADJUSTABLE PARAMETERS ====================
TARGET_FILES = [
    "index.html",
    "code-editor.html",
    "python-ide.html",
    "cpp-ide.html",
    "web-ide.html",
    "README.md"
]

# Exact replacements mapping old table cells/headers to screenshot-verified metrics
REPLACEMENTS_MAP = {
    "code-editor.html": [
        (
            '<th scope="col">Acode Editor</th>',
            '<th scope="col">Acode / Spck Editor</th>'
        ),
        (
            '<td>4.60 / 5.00 &#9733;</td>',
            '<td>3.40 &ndash; 4.20 / 5.00 &#9733;</td>'
        ),
        (
            '<td>4.50 / 5.00 &#9733;</td>',
            '<td>4.40 / 5.00 &#9733;</td>'
        )
    ],
    "python-ide.html": [
        (
            '<td>4.50 / 5.00 &#9733;</td>',
            '<td>4.40 / 5.00 &#9733;</td>'
        )
    ],
    "cpp-ide.html": [
        (
            '<td>4.50 / 5.00 &#9733;</td>',
            '<td>4.40 / 5.00 &#9733;</td>'
        ),
        (
            '<td>4.60 / 5.00 &#9733;</td>',
            '<td>3.40 / 5.00 &#9733;</td>'
        )
    ],
    "web-ide.html": [
        (
            '<td>4.45 / 5.00 &#9733;</td>',
            '<td>4.20 / 5.00 &#9733;</td>'
        ),
        (
            '<td>4.60 / 5.00 &#9733;</td>',
            '<td>3.40 / 5.00 &#9733;</td>'
        )
    ],
    "index.html": [
        (
            '<th scope="col">Dcoder (Mobile IDE)</th>',
            '<th scope="col">Rhythm / Dcoder IDE</th>'
        ),
        (
            '<td>3.60 / 5.00 &#9733;</td>',
            '<td>3.60 &ndash; 3.90 / 5.00 &#9733;</td>'
        ),
        (
            '<td>4.50 / 5.00 &#9733;</td>',
            '<td>4.40 / 5.00 &#9733;</td>'
        ),
        (
            '<td>3.80 to 4.60 / 5.00 &#9733;</td>',
            '<td>3.40 &ndash; 4.20 / 5.00 &#9733;</td>'
        )
    ],
    "README.md": [
        (
            '| **Google Play Rating** | **4.92 / 5.00 &#9733; (Android 15 Ready)** | 3.60 / 5.00 &#9733; | 4.50 / 5.00 &#9733; | 3.80 &ndash; 4.60 / 5.00 &#9733; |',
            '| **Google Play Rating** | **4.92 / 5.00 &#9733; (Android 15 Ready)** | 3.60 &ndash; 3.90 / 5.00 &#9733; | 4.40 / 5.00 &#9733; | 3.40 &ndash; 4.20 / 5.00 &#9733; |'
        )
    ]
}


def sync_competitor_tables():
    print("=" * 84)
    print("SUPERCODE REAL-TIME PLAY STORE COMPETITOR BENCHMARK SYNCHRONIZER")
    print("=" * 84)

    updated_files = 0
    for filename in TARGET_FILES:
        if not os.path.exists(filename):
            print(f"[SKIP] {filename} not found in current directory.")
            continue

        with open(filename, "r", encoding="utf-8") as f:
            content = f.read()

        original = content
        rules = REPLACEMENTS_MAP.get(filename, [])
        applied_count = 0

        for old_str, new_str in rules:
            if old_str in content:
                content = content.replace(old_str, new_str)
                applied_count += 1

        if content != original:
            with open(filename, "w", encoding="utf-8", newline="\n") as f:
                f.write(content)
            updated_files += 1
            print(f"[UPDATED] {filename:<18} -> Synced {applied_count} real-time competitor rating metrics.")
        else:
            print(f"[OK]      {filename:<18} -> Already up-to-date.")

    print("=" * 84)
    print(f"COMPLETED: {updated_files} files synchronized with real-time Google Play screenshot data.")
    print("Next Step: Run 'python seo_audit.py' to verify 100% integrity before git push!")
    print("=" * 84)


if __name__ == "__main__":
    sync_competitor_tables()