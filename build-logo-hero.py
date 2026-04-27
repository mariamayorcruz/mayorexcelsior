"""
Regenera solo logo-hero.png a partir de logo.png (letras blancas, acentos de color).
Para volver a exportar desde el PDF:  python sync-logo.py
"""
from __future__ import annotations

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent

if __name__ == "__main__":
    subprocess.check_call([sys.executable, str(ROOT / "sync-logo.py"), "--hero-only"])
