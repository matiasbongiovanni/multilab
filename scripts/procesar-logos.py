#!/usr/bin/env python3
"""
Extrae logos del Google Doc, remueve fondo blanco y recolorea a gris oscuro #374151.
Guarda PNGs transparentes en public/clientes/.
"""

import re
import base64
import urllib.request
from pathlib import Path
from PIL import Image
import io

DARK_GRAY = (55, 65, 81, 255)  # #374151

CLIENTS_WITH_LOGO = [
    "adolfo-cassaro",
    "alimentacion-del-centro",
    "canteras-diquecito",
    "clinica-reyes-giobellina",
    "ledesma",
    "servicios-radio-tv-unc",
    "maderas-misioneras",
    "peri",
    "silcar",
    "export-pack",
    "ferrus",
]

DOC_URL = (
    "https://docs.google.com/document/d/"
    "1d6pEdX2HtanwGijg28PkenEAakwjVr0HiaZq2iGf6EA/export?format=html"
)

OUTPUT_DIR = Path(__file__).parent.parent / "public" / "clientes"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def remove_bg_and_recolor(img_bytes: bytes, slug: str) -> None:
    img = Image.open(io.BytesIO(img_bytes)).convert("RGBA")
    data = img.load()
    width, height = img.size
    for y in range(height):
        for x in range(width):
            r, g, b, a = data[x, y]
            # Pixels near white → transparent
            if r > 230 and g > 230 and b > 230:
                data[x, y] = (0, 0, 0, 0)
            else:
                # Non-background → dark gray
                data[x, y] = DARK_GRAY
    # Crop to content
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    out_path = OUTPUT_DIR / f"{slug}.png"
    img.save(out_path, "PNG")
    print(f"  ✓ {out_path}")


def main():
    print("Descargando doc…")
    req = urllib.request.Request(DOC_URL, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode("utf-8", errors="replace")

    pattern = r'src="data:image/[^;]+;base64,([^"]+)"'
    b64_list = re.findall(pattern, html)
    print(f"Imágenes encontradas: {len(b64_list)}")

    for i, (slug, b64) in enumerate(zip(CLIENTS_WITH_LOGO, b64_list)):
        print(f"[{i+1}] {slug}")
        try:
            img_bytes = base64.b64decode(b64)
            remove_bg_and_recolor(img_bytes, slug)
        except Exception as e:
            print(f"  ✗ Error: {e}")

    print("\nDone.")


if __name__ == "__main__":
    main()
