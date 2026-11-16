#!/usr/bin/env python3
"""Lector del catálogo vivo ALMA VII. Stdlib, sin red.

Uso:
  python3 leer_catalogo.py                  # lista todas las entradas
  python3 leer_catalogo.py --para-quien nodo|ambos|humano
  python3 leer_catalogo.py --grupo ronda_23|corpus|produccion-fractal|nutrientes-2026-11-14
  python3 leer_catalogo.py show CAT-0001    # ficha completa de una entrada
  python3 leer_catalogo.py verify           # verifica cada artefacto en disco:
                                            # existe y su sha256 coincide.
                                            # Exit 0 solo si todo cuadra.

La verificación lee la procedencia de cada entrada (fuente + sha256) y
la comprueba contra el disco. Un artefacto ausente o con sha distinto
se marca NO_VERIFICADO y la salida es distinta de 0.
"""
import argparse
import hashlib
import json
import sys
from pathlib import Path

WS = Path.home() / "workspace"
CATALOGO = Path(__file__).resolve().parent / "catalogo_vivo.json"


def sha256(p):
    return hashlib.sha256(Path(p).read_bytes()).hexdigest()


def cargar():
    with open(CATALOGO, encoding="utf-8") as f:
        return json.load(f)


def verificar(catalogo):
    problemas = []
    ok = 0
    for e in catalogo["entradas"]:
        ruta = WS / e["procedencia"]["fuente"]
        sha_esperado = e["procedencia"]["sha256"]
        if not ruta.exists():
            problemas.append((e["id"], "AUSENTE", str(ruta)))
            continue
        real = sha256(ruta)
        if real != sha_esperado:
            problemas.append((e["id"], "SHA_DISTINTO",
                              f"esperado {sha_esperado[:8]}…, disco {real[:8]}…"))
            continue
        if not e["verificado"]:
            problemas.append((e["id"], "NO_VERIFICADO",
                              "la entrada se sembró sin verificar"))
            continue
        ok += 1
    return ok, problemas


def main():
    ap = argparse.ArgumentParser(description="Lector del catálogo vivo ALMA VII")
    ap.add_argument("cmd", nargs="?", default="list",
                    choices=["list", "show", "verify"])
    ap.add_argument("arg", nargs="?")
    ap.add_argument("--para-quien", choices=["humano", "nodo", "ambos"])
    ap.add_argument("--grupo")
    args = ap.parse_args()

    catalogo = cargar()
    entradas = catalogo["entradas"]

    if args.cmd == "verify":
        ok, problemas = verificar(catalogo)
        print(f"verificados: {ok}/{len(entradas)}")
        for eid, kind, det in problemas:
            print(f"NO_VERIFICADO {eid} [{kind}] {det}")
        total_ok = (ok == len(entradas)
                    and catalogo["total_entradas"] == len(entradas)
                    and not catalogo["no_verificadas"])
        if total_ok:
            print("TODO CUADRA")
            return 0
        print("NO CUADRA")
        return 1

    if args.cmd == "show":
        if not args.arg:
            print("falta el id (p. ej. CAT-0001)", file=sys.stderr)
            return 2
        for e in entradas:
            if e["id"] == args.arg:
                print(json.dumps(e, ensure_ascii=False, indent=1))
                return 0
        print(f"no existe {args.arg}", file=sys.stderr)
        return 2

    # list
    if args.para_quien:
        entradas = [e for e in entradas if e["para_quien"] == args.para_quien]
    if args.grupo:
        entradas = [e for e in entradas if e["grupo"] == args.grupo]
    for e in entradas:
        marca = "" if e["verificado"] else " [NO_VERIFICADO]"
        print(f"{e['id']} [{e['grupo']}] ({e['para_quien']}) {e['nombre']}{marca}")
        print(f"    {e['que_es']}")
    print(f"--- {len(entradas)} entradas ---")
    return 0


if __name__ == "__main__":
    sys.exit(main())
