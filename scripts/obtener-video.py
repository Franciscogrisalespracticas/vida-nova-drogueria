#!/usr/bin/env python3
"""Descarga el video autorizado de Higgsfield y valida su cabecera MP4."""
from pathlib import Path
from urllib.request import Request, urlopen
import sys

URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_3JqEIprqH4SQJJRfXrUUYOR2pFm/hf_20261110_123949_357e4326-f1b6-4cfa-a87f-db8d4e01145d.mp4'
DEST = Path(__file__).resolve().parents[1] / 'public' / 'videos' / 'hero-pharmacy.mp4'
TEMP = DEST.with_suffix('.mp4.part')
try:
    DEST.parent.mkdir(parents=True, exist_ok=True)
    with urlopen(Request(URL, headers={'User-Agent': 'Mozilla/5.0'}), timeout=45) as response, TEMP.open('wb') as output:
        while chunk := response.read(1024 * 1024):
            output.write(chunk)
    with TEMP.open('rb') as f:
        header = f.read(32)
    if TEMP.stat().st_size < 100_000 or b'ftyp' not in header:
        raise ValueError('La respuesta no parece un MP4 valido')
    TEMP.replace(DEST)
    print(f'Video incorporado: {DEST} ({DEST.stat().st_size:,} bytes)')
except Exception as error:
    TEMP.unlink(missing_ok=True)
    print(f'No se pudo descargar el video: {error}', file=sys.stderr)
    sys.exit(1)
