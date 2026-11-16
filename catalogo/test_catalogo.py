#!/usr/bin/env python3
"""Test del catálogo vivo ALMA VII. Stdlib, sin red.

Exige:
- 100 entradas sembradas (49 producción fractal + 15 nutrientes +
  32 ronda_23 + 4 corpus).
- 0 NO_VERIFICADO entre las entradas citadas como verificadas.
- Cada entrada con todos los campos del esquema y sha256 de 64 hex.
- leer_catalogo.py verify con exit 0 (cada artefacto existe en disco
  y su sha256 coincide con la procedencia registrada).

Uso: python3 test_catalogo.py   (exit 0 = pasa, 1 = falla)
"""
import json
import re
import subprocess
import sys
from pathlib import Path

BASE = Path(__file__).resolve().parent
CATALOGO = BASE / "catalogo_vivo.json"
LECTOR = BASE / "leer_catalogo.py"

ESPERADO = {
    "produccion-fractal": 49,
    "nutrientes-2026-11-14": 15,
    "ronda_23": 32,
    "corpus": 4,
}

CAMPOS = ("id", "nombre", "grupo", "que_es", "para_quien", "test",
          "semilla", "fallos", "procedencia", "verificado", "github")
SHA_RE = re.compile(r"^[0-9a-f]{64}$")


def falla(msg):
    print(f"FALLO: {msg}")
    return False


def main():
    ok = True
    c = json.loads(CATALOGO.read_text(encoding="utf-8"))
    entradas = c["entradas"]

    if c["total_entradas"] != len(entradas):
        ok = falla(f"total_entradas {c['total_entradas']} != len {len(entradas)}")
    if len(entradas) != 100:
        ok = falla(f"entradas {len(entradas)} != 100")

    from collections import Counter
    por_grupo = Counter(e["grupo"] for e in entradas)
    for g, n in ESPERADO.items():
        if por_grupo[g] != n:
            ok = falla(f"grupo {g}: {por_grupo[g]} != {n}")

    for e in entradas:
        for campo in CAMPOS:
            if campo not in e:
                ok = falla(f"{e.get('id', '?')}: falta campo {campo}")
        sha = e["procedencia"].get("sha256")
        if not sha or not SHA_RE.match(sha):
            ok = falla(f"{e['id']}: sha256 inválido ({sha})")
        if e["para_quien"] not in ("humano", "nodo", "ambos"):
            ok = falla(f"{e['id']}: para_quien inválido ({e['para_quien']})")

    no_ver = [e["id"] for e in entradas if not e["verificado"]]
    if no_ver:
        ok = falla(f"NO_VERIFICADO: {no_ver}")
    if c["no_verificadas"]:
        ok = falla(f"catálogo declara no_verificadas: {c['no_verificadas']}")
    if c["verificadas"] != len(entradas):
        ok = falla(f"verificadas {c['verificadas']} != {len(entradas)}")

    r = subprocess.run([sys.executable, str(LECTOR), "verify"],
                       capture_output=True, text=True)
    print(r.stdout.strip())
    if r.returncode != 0:
        ok = falla(f"leer_catalogo.py verify exit={r.returncode}")

    if ok:
        print(f"TEST OK: {len(entradas)} entradas, 0 NO_VERIFICADO, "
              f"lector verify exit=0")
        return 0
    print("TEST FALLIDO")
    return 1


if __name__ == "__main__":
    sys.exit(main())
