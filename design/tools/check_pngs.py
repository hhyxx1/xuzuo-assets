#!/usr/bin/env python3
"""Verify committed 256px PNG icon preview structure, CRC and IDAT stream.
Stdlib only; run at repo root: python design/tools/check_pngs.py
"""
from __future__ import annotations
from pathlib import Path
import struct, zlib, sys
ROOT=Path(__file__).resolve().parents[2]
FILES=[
"design/04-assets/exports/app-icons/lightbearing-preview-256.png",
"design/04-assets/exports/app-icons/framemori-preview-256.png",
"design/04-assets/exports/app-icons/voxcarve-preview-256.png",
"design/04-assets/exports/app-icons/macroloom-preview-256.png"
]
SIGNATURE=b"\x89PNG\r\n\x1a\n"
def check(path:Path):
    d=path.read_bytes()
    if not d.startswith(SIGNATURE):raise ValueError("PNG signature missing")
    o=8;chunks=[];idata=b"";w=h=None;ctype=None
    while o+12<=len(d):
        n=struct.unpack(">I",d[o:o+4])[0]
        typ=d[o+4:o+8];body=d[o+8:o+8+n]
        crc=struct.unpack(">I",d[o+8+n:o+12+n])[0]
        if zlib.crc32(typ+body)&0xffffffff!=crc:raise ValueError(f"CRC mismatch {typ}")
        chunks.append(typ.decode("ascii"))
        if typ==b"IHDR":
            w,h,depth,ctype,_,_,interlace=struct.unpack(">IIBBBBB",body)
            if depth!=8 or ctype!=6 or interlace!=0:raise ValueError("expected 8bit RGBA PNG")
        if typ==b"IDAT":idata+=body
        o+=n+12
        if typ==b"IEND":break
    if not chunks or chunks[-1]!="IEND":raise ValueError("IEND missing")
    if (w,h)!=(256,256):raise ValueError(f"Unexpected dimensions {w}x{h}")
    raw=zlib.decompress(idata)
    if len(raw)!=h*(1+w*4):raise ValueError("Decoded raster size mismatch")
    if any(raw[y*(1+w*4)]!=0 for y in range(h)):raise ValueError("Unexpected row filter")
    return len(d),w,h
def main():
    failed=0
    for rel in FILES:
        p=ROOT/rel
        try:
            size,w,h=check(p)
            print(f"PASS {rel} | {w}x{h} | {size} bytes")
        except Exception as e:
            print(f"FAIL {rel}: {e}",file=sys.stderr)
            failed+=1
    return 1 if failed else 0
if __name__=="__main__":sys.exit(main())
