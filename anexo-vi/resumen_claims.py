#!/usr/bin/env python3
"""
resumen_claims.py — Resumen de claims por estado y por tipo.
Lee memoria/anexo-vi/claims.jsonl y escribe memoria/anexo-vi/claims_resumen.json.
No modifica claims. Solo resume.
"""
import json
from pathlib import Path
from collections import Counter

BASE = Path(__file__).parent
CLAIMS = BASE / "claims.jsonl"
OUT = BASE / "claims_resumen.json"

def main():
    claims = []
    with open(CLAIMS) as f:
        for line in f:
            line = line.strip()
            if line:
                claims.append(json.loads(line))
    por_estado = Counter(c.get("estado", "SIN_ESTADO") for c in claims)
    por_tipo = Counter(c.get("tipo", "prediccion") for c in claims)
    por_grieta = Counter(c.get("grieta", "SIN_GRIETA") for c in claims)
    hash_pendiente = sum(1 for c in claims if "PENDIENTE" in c.get("hash", ""))
    hash_real = sum(1 for c in claims if c.get("hash", "").startswith("sha256:") and "PENDIENTE" not in c.get("hash", "") and "NO_DISPONIBLE" not in c.get("hash", ""))
    resumen = {
        "total": len(claims),
        "por_estado": dict(por_estado),
        "por_tipo": dict(por_tipo),
        "por_grieta": dict(por_grieta),
        "hash_real": hash_real,
        "hash_pendiente": hash_pendiente,
        "ids": [c.get("id") for c in claims],
    }
    with open(OUT, "w") as f:
        json.dump(resumen, f, indent=2, ensure_ascii=False)
    print(f"✅ Resumen escrito en {OUT}")
    print(json.dumps(resumen, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()
