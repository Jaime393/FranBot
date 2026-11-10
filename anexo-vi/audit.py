#!/usr/bin/env python3
"""
audit.py v3 — Auditoria real de provenance.sha256.
v3 corrige los dos defectos de v2:
  - glob.escape(nombre) para que [ES], paréntesis y otros metacaracteres no rompan rglob.
  - orden de búsqueda explícito: repo -> drive -> workspace root -> recursión con escape.
Acepta hashes con prefijo "sha256:", "repo:", "drive:", o hex puro sin prefijo.
EXIT=0 SOLO si comparó al menos 1 hash y no hubo discrepancias ni no_encontrados.
EXIT=1 si hay discrepancias o no_encontrados.
EXIT=3 si no comparó ningún hash (auditoria vacua).
No valida predicciones. Solo integridad de fuente.
"""
import hashlib, sys, glob
from pathlib import Path

BASE = Path.home() / "workspace"
PROV = BASE / "memoria" / "anexo-vi" / "provenance.sha256"
REPO = BASE / "grimorio_repo"
DRIVE = BASE / "memoria" / "grimorio_nuevo_2026-11-09"

def sha256_file(p):
    h = hashlib.sha256()
    h.update(p.read_bytes())
    return h.hexdigest()

def normalizar_hash(h_decl):
    if h_decl in ("VACIO_0_BYTES", "NO_PRESENTE"):
        return None
    s = h_decl.strip()
    for pref in ("sha256:", "repo:", "drive:"):
        if s.startswith(pref):
            return s[len(pref):].lower()
    if len(s) == 64 and all(c in "0123456789abcdefABCDEF" for c in s):
        return s.lower()
    return None

def localizar(nombre):
    # 1) repo
    p = REPO / nombre
    if p.is_file():
        return p
    # 2) drive
    p = DRIVE / nombre
    if p.is_file():
        return p
    # 3) workspace root
    p = BASE / nombre
    if p.is_file():
        return p
    # 4) recursión con escape (para nombres con [ ] ( ) etc.)
    if BASE.exists():
        patron = str(BASE / "**" / glob.escape(nombre))
        for cand in glob.glob(patron, recursive=True):
            cp = Path(cand)
            if cp.is_file():
                return cp
    return None

def main():
    if not PROV.exists():
        print("NO_EXISTE provenance.sha256")
        sys.exit(2)
    ok = dis = no = omit = 0
    for line in PROV.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        partes = line.split(None, 1)
        if len(partes) != 2:
            continue
        h_decl, nombre = partes[0], partes[1].strip()
        hex_decl = normalizar_hash(h_decl)
        if hex_decl is None:
            omit += 1
            print(f"OMITIDO  {nombre}  ({h_decl})")
            continue
        p = localizar(nombre)
        if not p:
            no += 1
            print(f"NO_ENCONTRADO  {nombre}")
            continue
        real = sha256_file(p)
        if real.lower() == hex_decl:
            ok += 1
            print(f"OK  {nombre}  ({p})")
        else:
            dis += 1
            print(f"DISCREPANCIA  {nombre}")
            print(f"  declarado: {hex_decl}")
            print(f"  real:      {real}")
            print(f"  ruta:      {p}")
    print(f"\nRESUMEN: ok={ok} discrepancia={dis} no_encontrado={no} omitido={omit}")
    if dis > 0 or no > 0:
        sys.exit(1)
    if ok == 0:
        print("AUDITORIA VACUA: 0 hashes comparados.")
        sys.exit(3)
    sys.exit(0)

if __name__ == "__main__":
    main()
