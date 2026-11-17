#!/usr/bin/env python3
"""CICLO ALMA — CORR-ESTADO-SE: reparar el estado de los 11 claims nuevos.

Incidente: absorb_ciclo_alma.py copió `estado` literal de las propuestas
("SÉ" con acento). La convención del corpus es "SE" sin acento
(C-1213..C-1216 de r23 usan "SE"; los 1.211 preexistentes, todos "SE").
resumen_claims.py agrupa literal, así que el resumen partió SE 1077 +
SÉ 11 en vez de SE 1088 y el assert del script falló DESPUÉS de escribir
claims/provenance/anexo/resumen (assert pelado, sin restauración).
El script NO llegó a las puertas: no se corrieron audit/verify_all post.

Reparación: estado "SÉ" -> "SE" SOLO en las 11 líneas nuevas
(posiciones 1212-1222), con la misma serialización del script
(json.dumps ensure_ascii=False). Las primeras 1.211 líneas quedan
byte-idénticas al respaldo. Después se re-corre el resumen y las puertas.
"""
import json, hashlib, subprocess, sys
from pathlib import Path

BASE = Path.home() / "workspace"
ANEXO = BASE / "memoria" / "anexo-vi"
RESP = BASE / "academico" / "tejido_2026-11-12" / "ronda_23" / "respaldo_pre_absorcion_ciclo_alma"

def sha(p):
    return hashlib.sha256(Path(p).read_bytes()).hexdigest()

cp = ANEXO / "claims.jsonl"
raw = open(cp, encoding="utf-8", newline="").read()
lines = raw.split("\n")
assert lines[-1] == "" and len(lines) - 1 == 1222, f"claims: {len(lines)-1} != 1222"
body = lines[:-1]
pre = open(RESP / "claims.jsonl", encoding="utf-8", newline="").read().split("\n")[:-1]
assert len(pre) == 1211
for i, (a, b) in enumerate(zip(pre, body[:1211])):
    assert a == b, f"línea {i+1} cambió (no es una de las 11 nuevas)"

objs = [json.loads(ln) for ln in body]
for k, o in enumerate(objs[1211:]):
    assert o["id"] == ["C-1217", "C-1218", "C-1219", "C-1220", "C-1221", "C-1222",
                       "C-1223", "C-1224", "C-1225", "C-1226", "C-1227"][k], o["id"]
    assert o["estado"] == "SÉ", (o["id"], o["estado"])
    o["estado"] = "SE"
    assert json.dumps(o, ensure_ascii=False) != body[1211 + k]  # cambió solo el estado

new_text = "\n".join(json.dumps(o, ensure_ascii=False) for o in objs) + "\n"
open(cp, "w", encoding="utf-8", newline="").write(new_text)

# verificación: diff exacto vs respaldo + estados
post = open(cp, encoding="utf-8", newline="").read().split("\n")[:-1]
assert len(post) == 1222
for i, (a, b) in enumerate(zip(pre, post[:1211])):
    assert a == b, f"línea {i+1} cambió tras la reparación"
from collections import Counter
est = Counter(json.loads(ln)["estado"] for ln in post)
assert est == {"CONJETURO": 22, "INFIERO": 100, "SE": 1088, "REFUTADO": 4, "NO_SE": 8}, dict(est)
print("claims.jsonl reparado: 11 estados SÉ->SE; primeras 1.211 byte-idénticas.")
print("claims.jsonl sha:", sha(cp))

# resumen
r = subprocess.run([sys.executable, str(ANEXO / "resumen_claims.py")], capture_output=True, text=True)
assert r.returncode == 0, f"resumen exit={r.returncode}: {r.stderr}"
res = json.loads(open(ANEXO / "claims_resumen.json", encoding="utf-8").read())
assert res["total"] == 1222 and res["hash_real"] == 1208 and res["hash_pendiente"] == 8, res
assert res["por_estado"]["SE"] == 1088, res["por_estado"]
assert "SÉ" not in res["por_estado"], res["por_estado"]
assert res["por_tipo"]["verificacion"] == 348, res["por_tipo"]
assert res["por_grieta"]["G-NUEVA: producción ALMA (FranBot v8.1)"] == 10, res["por_grieta"]
assert res["por_grieta"]["G-NUEVA: estado vivo del ecosistema (observabilidad)"] == 27, res["por_grieta"]
print("resumen OK: total 1222, SE 1088, hash_real 1208, verificacion 348.")
print("claims_resumen.json sha:", sha(ANEXO / "claims_resumen.json"))
