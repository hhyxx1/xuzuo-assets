#!/usr/bin/env python3
"""SVG source -> PNG / WebP exports, for review, NOT direct store publication.
Usage:
  python design/tools/export-assets.py --dry-run
  python design/tools/export-assets.py --format png [--category onboarding]
Dependencies for render mode: pip install cairosvg pillow
"""
from __future__ import annotations
import argparse, hashlib, json
from pathlib import Path
from datetime import datetime, timezone

ROOT=Path(__file__).resolve().parents[2]
ASSETS=ROOT/"design"/"04-assets"
MANIFEST=ASSETS/"manifests"/"assets.json"
OUTPUT=ASSETS/"exports"/"auto"

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument("--dry-run",action="store_true")
    parser.add_argument("--format",choices=["png","webp"],default="png")
    parser.add_argument("--category",default=None,help="only one manifest category")
    parser.add_argument("--max",type=int,default=0,help="limit outputs for an experimental run")
    args=parser.parse_args()
    data=json.loads(MANIFEST.read_text(encoding="utf-8"))
    items=[x for x in data["assets"] if x["category"]!="ui-icon" or args.category=="ui-icon"]
    if args.category:
        items=[x for x in items if x["category"]==args.category]
    if args.max:items=items[:args.max]
    print(f"Preparing {len(items)} export(s) to {OUTPUT}, format={args.format}, dry={args.dry_run}")
    if not args.dry_run:
        try:
            import cairosvg
            from PIL import Image
        except ImportError as e:
            raise SystemExit("Install dependencies: python -m pip install cairosvg pillow") from e
    results=[]
    for a in items:
        src=ROOT/a["path"]
        if not src.exists():raise SystemExit(f"Missing source SVG: {src}")
        target=OUTPUT/a["app"]/a["category"]/(src.stem+"."+args.format)
        if args.dry_run:
            print(f"DRY {src.relative_to(ROOT)} -> {target.relative_to(ROOT)}")
            continue
        target.parent.mkdir(parents=True,exist_ok=True)
        width,height=int(a["width"]),int(a["height"])
        raw=cairosvg.svg2png(url=str(src),output_width=width,output_height=height)
        from io import BytesIO
        with Image.open(BytesIO(raw)) as im:
            rgba=im.convert("RGBA")
            if args.format=="png":
                rgba.save(target,format="PNG",optimize=True)
            else:
                rgba.save(target,format="WEBP",quality=90,method=6)
        blob=target.read_bytes()
        results.append({
            "source":a["path"],
            "target":str(target.relative_to(ROOT)).replace("\\","/"),
            "width":width,"height":height,"format":args.format,
            "bytes":len(blob),
            "source_sha256":hashlib.sha256(src.read_bytes()).hexdigest(),
            "output_sha256":hashlib.sha256(blob).hexdigest(),
            "approval":"NOT_REVIEWED"
        })
        print(f"OK {target.relative_to(ROOT)} ({len(blob)} B)")
    if not args.dry_run:
        OUTPUT.mkdir(parents=True,exist_ok=True)
        out=OUTPUT/f"manifest-{args.format}.json"
        out.write_text(json.dumps({
            "generated_at":datetime.now(timezone.utc).isoformat(),
            "status":"NOT_REVIEWED",
            "outputs":results
        },ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
        print(f"Wrote {out}")
if __name__=="__main__":
    main()
