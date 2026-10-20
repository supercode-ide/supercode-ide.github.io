#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SuperCode IDE - Automated Git Repository Initializer & Deployer
Fixes 'fatal: not a git repository (.git)' by initializing Git in web-supercode,
linking the remote GitHub Pages repository, and pushing the verified SEO 2.0 files.
"""

import os
import subprocess

# ==================== ADJUSTABLE PARAMETERS ====================
GITHUB_REPO_URL = "https://github.com/supercode-ide/supercode-ide.github.io.git"
BRANCH_NAME = "main"
COMMIT_MESSAGE = "chore(benchmark): sync real-time Google Play competitor ratings"

# Files that only exist for local testing and should NOT be pushed if you want a clean repo
IGNORE_PATTERNS = [
    "__pycache__/",
    "*.pyc"
]


def run_cmd(cmd_list):
    """Run a shell command and print its output clearly."""
    print(f">>> Running: {' '.join(cmd_list)}")
    result = subprocess.run(cmd_list, capture_output=True, text=True, encoding="utf-8", errors="replace")
    if result.stdout.strip():
        print(result.stdout.strip())
    if result.stderr.strip():
        print(result.stderr.strip())
    return result.returncode


def init_and_push():
    print("=" * 80)
    print("SUPERCODE GIT REPOSITORY INITIALIZER & ONE-CLICK DEPLOYER")
    print("=" * 80)

    # 1. Initialize .git folder if missing
    if not os.path.exists(".git"):
        print("[STEP 1] Initializing local .git repository...")
        run_cmd(["git", "init"])
        run_cmd(["git", "branch", "-M", BRANCH_NAME])
    else:
        print("[STEP 1] .git repository already exists.")

    # 2. Configure remote origin URL
    print(f"[STEP 2] Linking remote GitHub repository: {GITHUB_REPO_URL}")
    remotes = subprocess.run(["git", "remote"], capture_output=True, text=True).stdout.split()
    if "origin" in remotes:
        run_cmd(["git", "remote", "set-url", "origin", GITHUB_REPO_URL])
    else:
        run_cmd(["git", "remote", "add", "origin", GITHUB_REPO_URL])

    # 3. Stage all files and commit
    print("[STEP 3] Staging and committing updated SEO 2.0 files...")
    run_cmd(["git", "add", "."])
    run_cmd(["git", "commit", "-m", COMMIT_MESSAGE])

    # 4. Pull rebase or push to GitHub Pages
    print(f"[STEP 4] Pushing to GitHub ({BRANCH_NAME})...")
    code = run_cmd(["git", "push", "-u", "origin", BRANCH_NAME, "--force"])

    print("=" * 80)
    if code == 0:
        print("[SUCCESS] All files have been pushed to GitHub Pages!")
    else:
        print("[INFO] If a GitHub sign-in window popped up, complete sign-in and re-run this script.")
    print("=" * 80)


if __name__ == "__main__":
    init_and_push()