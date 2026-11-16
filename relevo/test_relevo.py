#!/usr/bin/env python3
"""Test de relevo del kit del subidor FASE 4, método (c) (ALMA, idea VI).

Verifica que el kit `relevo/kit_relevo_fase4.md` cita solo archivos que
existen y procedimientos verificados en r23. Solo lectura: no sube
nada, no toca lo vivo. Solo stdlib. Un solo fallo -> exit 1.

Comprueba:
  1. Todas las rutas citadas en el kit existen en disco.
  2. El log _upload_github_r23.jsonl dice HEAD 2cc6a62a…, 32/32
     VERIFICADO, con los blobs de síntesis (1553e1c3) y verificador
     (056a9c7e).
  3. El paths-file está NUL-delimitado, termina en NUL, tiene 32
     entradas y coincide con el log.
  4. El staging tiene 32 archivos y cada blob coincide con su entrada
     del log.

Uso: python3 test_relevo.py
"""

import hashlib
import json
import re
import sys
from pathlib import Path

BASE = Path.home() / "workspace" / "academico" / "tejido_2026-11-12" / "ronda_23"
FASE4 = BASE / "fase4"
KIT = Path(__file__).resolve().parent / "kit_relevo_fase4.md"

HEAD_R23 = "2cc6a62a1900ffc48b4eec17be90341647893594"
BLOB_SINTESIS = "1553e1c3"
BLOB_VERIFICADOR = "056a9c7e"


def blob8(ruta):
    datos = Path(ruta).read_bytes()
    return hashlib.sha1(b"blob " + str(len(datos)).encode() + b"\x00" + datos).hexdigest()[:8]


def main():
    fallos = []
    total = [0]

    def ok(cond, msg):
        total[0] += 1
        print(("OK " if cond else "FALLO ") + msg)
        if not cond:
            fallos.append(msg)

    # 1. Rutas citadas en el kit.
    texto_kit = KIT.read_text(encoding="utf-8")
    rutas = sorted(set(re.findall(r"`(ronda_23/[^`\s]+)`", texto_kit)))
    rutas = [r for r in rutas if "<" not in r and ">" not in r and "…" not in r]
    for ruta in rutas:
        ok((BASE.parent / ruta).exists() if ruta.startswith("ronda_23/") else False,
           f"existe {ruta}")
    print(f"rutas citadas en el kit: {len(rutas)}")

    # 2. Log de la subida (JSON pretty-print: se parsea el documento entero).
    log = json.loads((FASE4 / "_upload_github_r23.jsonl").read_text(encoding="utf-8"))
    ok(log["head"][0] == HEAD_R23, f"HEAD del log es 2cc6a62a… ({log['head'][0][:8]})")
    ok(log["head"][1] == "ronda 23: FASE 4 curado (32 archivos, metodo c)",
       "mensaje del HEAD es el de r23")
    ok(log["verificados"] == 32 and log["total"] == 32, "log dice 32/32")
    items = log["items"]
    ok(len(items) == 32, f"items del log: {len(items)}")
    ok(all(i["status"] == "VERIFICADO" for i in items), "todos VERIFICADO")
    ok(all(i["blob_local"] == i["blob_remoto"] for i in items),
       "blob_local == blob_remoto en los 32")
    por_repo = {i["repo"]: i for i in items}
    ok(por_repo.get("ronda_23/fase3/sintesis_integrada_r1_r23.md", {}).get("blob_local") == BLOB_SINTESIS,
       "blob de la síntesis en el log: 1553e1c3")
    ok(por_repo.get("ronda_23/ejecucion_f6/verificador_independiente_r23.json", {}).get("blob_local") == BLOB_VERIFICADOR,
       "blob del verificador en el log: 056a9c7e")

    # 3. Paths-file.
    paths_bytes = (FASE4 / "_push_r23_paths.txt").read_bytes()
    ok(paths_bytes.endswith(b"\x00"), "paths-file termina en NUL")
    entradas = [p for p in paths_bytes.decode("utf-8").split("\x00") if p]
    ok(len(entradas) == 32, f"paths-file: {len(entradas)} entradas")
    ok(set(entradas) == set(por_repo), "paths-file coincide con el log")

    # 4. Staging.
    staging = sorted((FASE4 / "staging_github").rglob("*"))
    staging_files = [p for p in staging if p.is_file()]
    ok(len(staging_files) == 32, f"staging: {len(staging_files)} archivos")
    for repo, item in por_repo.items():
        staged = FASE4 / "staging_github" / repo
        if not staged.exists():
            ok(False, f"staging falta {repo}")
            continue
        ok(blob8(staged) == item["blob_local"], f"staging {repo}: blob {item['blob_local']}")

    print(f"test_relevo: {total[0] - len(fallos)}/{total[0]} comprobaciones PASS")
    return 1 if fallos else 0


if __name__ == "__main__":
    sys.exit(main())
