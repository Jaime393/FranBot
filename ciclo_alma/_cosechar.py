#!/usr/bin/env python3
"""CICLO ALMA — COSECHA SAVIA FRESCA: lista revisiones del heartbeat canónico
posteriores a la ventana r23 (corte 2026-11-16T19:28:35Z) y las descarga.
Solo lectura. Payloads brutos SOLO en local (~/workspace/alma/ciclo/cosecha/)."""
import json, subprocess, time, os

OUT = "/home/hatch/workspace/alma/ciclo"
COSECHA = os.path.join(OUT, "cosecha")
FID = "1cjBDCgK1lyyRgG5EEBSYk9P609oMzjlR"
CORTE_R23 = "2026-11-16T19:28:35Z"

os.makedirs(COSECHA, exist_ok=True)

def cli(args):
    p = subprocess.run(["hatch_gws_cli"] + args, capture_output=True, text=True, timeout=120)
    if p.returncode != 0:
        raise RuntimeError(f"CLI rc={p.returncode}: {p.stderr[:300]}")
    dec = json.JSONDecoder()
    obj, _ = dec.raw_decode(p.stdout.strip())
    return obj

all_revs = []
page_token = None
while True:
    params = {"fileId": FID, "pageSize": 100}
    if page_token:
        params["pageToken"] = page_token
    obj = cli(["drive", "revisions", "list", "--params", json.dumps(params), "--format", "json"])
    revs = obj.get("revisions", [])
    all_revs.extend(revs)
    print(f"pagina: {len(revs)} revisiones, total {len(all_revs)}")
    page_token = obj.get("nextPageToken")
    if not page_token:
        break
    time.sleep(1)

json.dump(all_revs, open(f"{OUT}/heartbeat_revisions_frescas.json", "w"), indent=2, ensure_ascii=False)
nuevas = [r for r in all_revs if r.get("modifiedTime", "") > CORTE_R23]
json.dump(nuevas, open(f"{OUT}/heartbeat_revs_nuevas.json", "w"), indent=2, ensure_ascii=False)
print(f"TOTAL: {len(all_revs)} revisiones")
print(f"ventana: {all_revs[0]['modifiedTime']} -> {all_revs[-1]['modifiedTime']}")
print(f"NUEVAS desde r23 (>{CORTE_R23}): {len(nuevas)}")

def descarga(rev):
    params = {"fileId": FID, "revisionId": rev["id"], "alt": "media"}
    p = subprocess.run(["hatch_gws_cli", "drive", "revisions", "get", "--params",
                        json.dumps(params), "--format", "json"],
                       capture_output=True, text=True, timeout=120)
    if p.returncode != 0:
        return None, f"rc={p.returncode}: {p.stderr[:200]}"
    dec = json.JSONDecoder()
    try:
        obj, _ = dec.raw_decode(p.stdout.strip())
    except Exception as e:
        return None, f"parse: {e}: {p.stdout[:200]}"
    return obj, None

clas = []
for i, rev in enumerate(nuevas):
    ts = rev["modifiedTime"].replace(":", "").replace("-", "").replace(".", "")
    fn = f"heartbeat_rev_rciclo_{i:02d}_{ts[:15]}Z.json"
    fp = os.path.join(COSECHA, fn)
    if os.path.exists(fp):
        print(f"{i} {rev['modifiedTime']} YA EXISTE, salto")
        clas.append({"idx": i, "file": fn, "modifiedTime": rev["modifiedTime"],
                     "revisionId": rev["id"], "ya_existia": True})
        continue
    obj, err = descarga(rev)
    if obj is None:
        print(f"{i} {rev['modifiedTime']} ERROR {err}")
        clas.append({"idx": i, "modifiedTime": rev["modifiedTime"], "revisionId": rev["id"], "error": err})
        continue
    raw = json.dumps(obj, ensure_ascii=False).encode()
    open(fp, "wb").write(raw)
    data = obj.get("data") if isinstance(obj.get("data"), dict) else {}
    clas.append({"idx": i, "file": fn, "modifiedTime": rev["modifiedTime"], "revisionId": rev["id"],
                 "bytes": len(raw), "version": obj.get("version"),
                 "savia": data.get("savia")})
    if i % 20 == 0:
        print(f"  {i}/{len(nuevas)}")
    time.sleep(0.3)

json.dump(clas, open(f"{OUT}/heartbeat_revs_nuevas_clasificacion.json", "w"), indent=2, ensure_ascii=False)
from collections import Counter
print("versiones:", Counter(str(c.get("version")) for c in clas if "error" not in c))
print("errores:", sum(1 for c in clas if "error" in c))
print("OK cosecha")
