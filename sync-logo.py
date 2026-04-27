"""
1) Renders the official Mayor Logo.pdf to logo.png
2) Builds logo-hero.png (only gold + bottom black *text* to white; icon shapes stay as in PDF)

Usage:
  python sync-logo.py "C:\\path\\to\\Mayor Logo.pdf"
Or edit DEFAULT_PDF below and run:  python sync-logo.py
"""
from __future__ import annotations

import math
import sys
from pathlib import Path

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parent
LOGO = ROOT / "logo.png"
HERO = ROOT / "logo-hero.png"

# Optional: your PDF path (used if no arg)
DEFAULT_PDF = Path(
    r"c:\Users\Jenny\AppData\Roaming\Cursor\User\workspaceStorage\01bcad20436f31a6f4481f7561f9ff8e\pdfs\8d51a637-2f12-4528-b5a6-e074d84bdbe6\Mayor Logo.pdf"
)

# Gold: text ring can share the same color as a vertical facet of the diamond. Rules:
# - y < Y_MIN: keep (diamond tip + top of aro) — the tip is far from center but must stay gold.
# - y in [Y_MIN, Y_MAX] (ring band): whiten only if d > R_OUTER; inner diamond is often d < R_OUTER, but
#   a central "spine" of the V still has d > R_OUTER, so we also exclude a narrow vertical strip (see below).
GOLD_TO_WHITE_Y_MIN = 201
GOLD_TO_WHITE_Y_MAX = 352
# Ring gold is most often d > ~112 from mark center; inner facets sit below ~110 (with some margin for AA).
GOLD_INNER_MAX_RADIUS = 111.0
# Central column of the V (spine) — same d as the ring, must stay gold.
GOLD_SPINE_X_HALF = 9
GOLD_SPINE_Y0 = 205
GOLD_SPINE_Y1 = 270
# Left/right inner facets: higher d and closer to the vertical center than the ring (e.g. y=220, x=315–360).
# Ring text at the same y is farther sideways (e.g. x=320, y=250) and has a smaller d, so d>128 separates.
GOLD_FACET_D_MIN = 128.0
GOLD_FACET_X_HALF = 50
GOLD_FACET_Y0 = 210
GOLD_FACET_Y1 = 275
# Central vertical rhombus (mustard #A6923E–like): same gold as the word ring, but must all stay
# gold (do not whiten), including slanted flanks (those get d>111 from bbox center, so a narrow
# y band was not enough). The curved ring at the same y sits farther from cx — keep a tight |x| cap.
# y = full span from just below aro to above the bottom diamond tips / before ring dominates sides.
GOLD_RHOMBUS_Y0 = 200
GOLD_RHOMBUS_Y1 = 273
GOLD_RHOMBUS_X_HALF = 56
# Post: recover missed interior gold (d below ~ring floor); ring gold is d ~112+ at same y as text.
GOLD_POST_RESTORE_D_MAX = 108.0


def is_cyan_teal(r: int, g: int, b: int) -> bool:
    if b < 75:
        return False
    if b >= max(r, g) - 10 and (g + b) > 2 * r + 40:
        return True
    if b > 120 and b > r + 35 and g > 50:
        return True
    return False


def is_orange_rust_line(r: int, g: int, b: int) -> bool:
    if r < 115:
        return False
    if r - b > 55 and 25 < g < 130 and b < 100:
        return True
    if r > 145 and 35 < g < 125 and b < 95 and (r - g) > 25:
        return True
    return False


def is_gold_arc_text(r: int, g: int, b: int) -> bool:
    """Curved 'MAYOR EXCELSIOR' ring (not icon grays, not orange)."""
    if not (110 <= r <= 205 and 90 <= g <= 195 and 15 <= b <= 78):
        return False
    if is_orange_rust_line(r, g, b) or is_cyan_teal(r, g, b):
        return False
    s = r + g + b
    spread = max(r, g, b) - min(r, g, b)
    # Icon diamond / V shapes ~ (40, 60, 60) — cool gray, not gold
    if s < 210 and spread < 48 and 32 <= r <= 70 and 38 <= g <= 80 and 38 <= b <= 80:
        return False
    return (r + g) > 1.6 * b + 70


def is_bottom_line_black(r: int, g: int, b: int, y: int) -> bool:
    """Lower horizontal name in black; only in the last rows; skip gray trapezoid fills."""
    if y < 445:
        return False
    s = r + g + b
    if s > 135:
        return False
    if max(r, g, b) > 100:
        return False
    return True


def should_become_white(
    r: int, g: int, b: int, a: int, y: int, x: int, cx: float, cy: float
) -> bool:
    if a < 8:
        return False
    if is_cyan_teal(r, g, b) or is_orange_rust_line(r, g, b):
        return False
    # Gold: outer word ring → white; inner diamond + central spine (same gold as ring) stay colored.
    if (
        GOLD_TO_WHITE_Y_MIN <= y <= GOLD_TO_WHITE_Y_MAX
        and is_gold_arc_text(r, g, b)
    ):
        d = math.hypot(x - cx, y - cy)
        in_spine = (
            abs(x - cx) <= GOLD_SPINE_X_HALF
            and GOLD_SPINE_Y0 <= y <= GOLD_SPINE_Y1
        )
        in_inner_facet = (
            GOLD_FACET_Y0 <= y <= GOLD_FACET_Y1
            and d >= GOLD_FACET_D_MIN
            and abs(x - cx) <= GOLD_FACET_X_HALF
        )
        in_central_rhombus = (
            GOLD_RHOMBUS_Y0 <= y <= GOLD_RHOMBUS_Y1
            and abs(x - cx) <= GOLD_RHOMBUS_X_HALF
        )
        if d > GOLD_INNER_MAX_RADIUS and not in_spine and not in_inner_facet and not in_central_rhombus:
            return True
    if is_bottom_line_black(r, g, b, y):
        return True
    return False


def hero_rgba(
    r: int, g: int, b: int, a: int, y: int, x: int, cx: float, cy: float
) -> tuple[int, int, int, int]:
    """Single pass: white for wordmark, never mutate PIL buffer twice."""
    if a < 8:
        return (r, g, b, a)
    w = should_become_white(r, g, b, a, y, x, cx, cy)
    if w:
        # Undo tiny interior ring pixels misclassified as text (d below ring, ~112+ on sides).
        if (
            y < 430
            and is_gold_arc_text(r, g, b)
            and math.hypot(x - cx, y - cy) < GOLD_POST_RESTORE_D_MAX
        ):
            return (r, g, b, a)
        return (255, 255, 255, a)
    return (r, g, b, a)


def render_pdf_to_logo(pdf_path: Path) -> None:
    doc = fitz.open(str(pdf_path))
    try:
        page = doc[0]
        mat = fitz.Matrix(2, 2)
        pix = page.get_pixmap(matrix=mat, alpha=True)
        pix.save(str(LOGO))
        print(f"Wrote {LOGO} ({pix.width}×{pix.height}) from {pdf_path.name}")
    finally:
        doc.close()


def _mark_center_from_alpha(im: Image.Image) -> tuple[float, float]:
    """Center of opaque bbox (emblem), not the full canvas — matches the ring geometry."""
    w, h = im.size
    min_x, min_y = w, h
    max_x, max_y = 0, 0
    px = im.load()
    for y in range(h):
        for x in range(w):
            if px[x, y][3] > 20:
                if x < min_x:
                    min_x = x
                if y < min_y:
                    min_y = y
                if x > max_x:
                    max_x = x
                if y > max_y:
                    max_y = y
    if max_x < min_x:
        return w / 2, h / 2
    return (min_x + max_x) / 2, (min_y + max_y) / 2


def build_hero() -> None:
    im = Image.open(LOGO).convert("RGBA")
    w, h = im.size
    cx, cy = _mark_center_from_alpha(im)
    out_data = []
    px = im.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            out_data.append(hero_rgba(r, g, b, a, y, x, cx, cy))
    out = Image.new("RGBA", (w, h))
    out.putdata(out_data)
    out.save(HERO, optimize=True)
    print(
        f"Wrote {HERO} (center=({cx:.1f},{cy:.1f}), "
        f"outer gold + bottom text to white, inner gold kept)"
    )


def main() -> None:
    if len(sys.argv) > 1 and sys.argv[1] == "--hero-only":
        if not LOGO.is_file():
            raise SystemExit(f"Missing {LOGO} — add logo.png or run without --hero-only")
        build_hero()
        return
    pdf = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_PDF
    if not pdf.is_file():
        raise SystemExit(f"PDF not found: {pdf}")
    render_pdf_to_logo(pdf)
    build_hero()


if __name__ == "__main__":
    main()
