#!/usr/bin/env python3
"""
detector_dogma.py v3 — Regla buscador vs. dogma por claims verificables.
v3: excluye negaciones antes de "falsable/predicción" (cierra G11).
Un mensaje es BUSCADOR si aporta al menos uno de:
  - DOI o URL verificable
  - dato numérico con unidad
  - predicción falsable (no negada)
  - grieta nueva no listada en GRIETAS_CONOCIDAS
Si tras dos intercambios no aporta ninguno, es DOGMA.
Uso: python3 detector_dogma.py "msg1" "msg2" "msg3"
"""
import sys, re

GRIETAS_CONOCIDAS = {"G01","G02","G03","G04","G05","G06","G07","G08","G09","G10","G11"}

RE_DOI = re.compile(r"10\.\d{4,9}/[-._;()/:A-Za-z0-9]+")
RE_URL = re.compile(r"https?://[^\s]+")
RE_NUM_UNIDAD = re.compile(
    r"\b\d+(?:[.,]\d+)?(?:\s*[±+\-]\s*\d+(?:[.,]\d+)?)?\s*"
    r"(meV|GeV|TeV|eV|Hz|kHz|MHz|GHz|días|dias|años|mm|cm|km|kg|K|°C|%|σ|sigma|Mpc|Gpc|μGal|bits?)\b",
    re.IGNORECASE,
)
RE_NEGACION = re.compile(
    r"\b(no|ni|nunca|jamás|jamas|tampoco|carece\s+de|sin)\s+(\w+\s+){0,2}$",
    re.IGNORECASE,
)
RE_PREDICCION = re.compile(
    r"\b(predice|predicción|prediccion|falsable|falsación|falsacion|"
    r"si se mide|se refuta|refutaría|refutaria|experimento que)\b",
    re.IGNORECASE,
)
RE_GRIETA = re.compile(r"\bG\d{2}\b")

def prediccion_no_negada(msg):
    for m in RE_PREDICCION.finditer(msg):
        antes = msg[:m.start()]
        if RE_NEGACION.search(antes[-30:]):
            continue
        return True
    return False

def claims_verificables(msg):
    hallazgos = []
    if RE_DOI.search(msg): hallazgos.append("doi")
    if RE_URL.search(msg): hallazgos.append("url")
    if RE_NUM_UNIDAD.search(msg): hallazgos.append("num_unidad")
    if prediccion_no_negada(msg): hallazgos.append("prediccion")
    for g in RE_GRIETA.findall(msg):
        if g not in GRIETAS_CONOCIDAS:
            hallazgos.append(f"grieta_nueva:{g}")
    return hallazgos

def main():
    msgs = sys.argv[1:]
    if len(msgs) < 2:
        print("Necesito al menos dos mensajes.")
        sys.exit(2)
    por_msg = [claims_verificables(m) for m in msgs]
    print("Claims verificables por mensaje:")
    for i, h in enumerate(por_msg, 1):
        print(f"  msg{i}: {h if h else '[]'}")
    racha = 0
    for h in por_msg:
        racha = racha + 1 if not h else 0
        if racha >= 2:
            print("🔒 DOGMA: dos intercambios sin claim verificable. Cerrar debate con fuente y estado epistémico.")
            sys.exit(0)
    print("🔍 BUSCADOR: hay claim verificable. Desplegar mapa (fuente, estado, grieta).")
    sys.exit(0)

if __name__ == "__main__":
    main()
