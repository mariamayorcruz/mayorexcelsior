"""Copy the ChatGPT hero logo from Cursor assets into ./assets/mayor-logo-3d.png.

On Windows, Cursor may store chat images as reparse/placeholder files: cmd/Python
copy often fails, but Node's fs.copyFileSync usually works. Run from project root:

  python sync-chat-logo.py
"""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT_DIR = ROOT / "assets"
OUT = OUT_DIR / "mayor-logo-3d.png"

CURSOR_ASSETS = Path(
    r"C:\Users\Jenny\.cursor\projects\c-Users-Jenny-Desktop-Mayor-Excelsior\assets"
)


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    if not CURSOR_ASSETS.is_dir():
        print("Cursor assets folder not found:", CURSOR_ASSETS)
        return 1
    matches = sorted(CURSOR_ASSETS.glob("*ChatGPT_Image_Apr_26*Editado*.png"))
    if not matches:
        matches = sorted(p for p in CURSOR_ASSETS.glob("*.png") if "Editado" in p.name)
    if not matches:
        print("No matching PNG in", CURSOR_ASSETS)
        return 1
    src = matches[0]
    src_js = json.dumps(str(src.resolve()).replace("\\", "/"))
    out_js = json.dumps(str(OUT.resolve()).replace("\\", "/"))
    node = f"const fs=require('fs');fs.copyFileSync({src_js},{out_js});"
    r = subprocess.run(
        ["node", "-e", node],
        cwd=str(ROOT),
        capture_output=True,
        text=True,
    )
    if r.returncode != 0:
        print(r.stderr or r.stdout or "node copy failed")
        return r.returncode
    print("Copied to", OUT, f"({OUT.stat().st_size} bytes) from", src.name)
    return 0


if __name__ == "__main__":
    sys.exit(main())
