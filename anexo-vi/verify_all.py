#!/usr/bin/env python3
"""
verify_all.py v3 — Verificacion de claims por tipo y estado.
Reglas:
  - estado REFUTADO: pasa siempre (rechazo documentado, no pendiente).
  - estado NO_SE: pasa siempre (carencia declarada, no pendiente).
  - tipo "provenance" con estado SE: requiere hash sha256 real (no PENDIENTE ni NO_DISPONIBLE).
  - tipo "prediccion" (o sin tipo) con estado SE/INFIERO/CONJETURO: requiere hash real.
  - fuente vacia o estado vacio: falla siempre.
No valida fisica. Valida que cada claim este en un estado coherente con su hash.
"""
import json, sys
from pathlib import Path

CLAIMS = Path(__file__).parent / "claims.jsonl"

def cargar_claims():
    claims = []
    with open(CLAIMS) as f:
        for line in f:
            line = line.strip()
            if line:
                claims.append(json.loads(line))
    return claims

def hash_real(h):
    if not isinstance(h, str):
        return False
    if not h.startswith("sha256:"):
        return False
    if "PENDIENTE" in h:
        return False
    if "NO_DISPONIBLE" in h:
        return False
    return True

def verificar(claims):
    fallos = []
    for c in claims:
        cid = c.get("id", "SIN_ID")
        tipo = c.get("tipo", "prediccion")
        estado = c.get("estado", "")
        h = c.get("hash", "")
        if not c.get("fuente"):
            fallos.append(f"{cid} ({tipo}/{estado}): sin fuente")
            continue
        if not estado:
            fallos.append(f"{cid} ({tipo}): sin estado epistémico")
            continue
        # Estados que no requieren hash real
        if estado in ("REFUTADO", "NO_SE"):
            continue
        # Estados que sí requieren hash real
        if estado in ("SE", "INFIERO", "CONJETURO"):
            if hash_real(h):
                continue
            fallos.append(f"{cid} ({tipo}/{estado}): hash no reproducible ({h})")
        else:
            fallos.append(f"{cid} ({tipo}/{estado}): estado no reconocido")
    return fallos

if __name__ == "__main__":
    claims = cargar_claims()
    fallos = verificar(claims)
    if fallos:
        print("❌ FALLOS:")
        for f in fallos:
            print("  -", f)
        sys.exit(1)
    print(f"✅ {len(claims)} claims verificados.")
    sys.exit(0)
