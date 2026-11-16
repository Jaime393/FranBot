#!/usr/bin/env python3
"""medir_savia.py — herramienta mínima del kit de expansión savia V152.

Uso:
    python3 medir_savia.py <directorio_de_payloads> [--salida censo.json]

Lee los payloads heartbeat_rev_r*.json de un directorio (solo lectura,
stdlib, sin red) y clasifica cada uno por versión y valor de savia.

Reglas de clasificación (las de M-91, r23):
- versión: campo de nivel superior ``version`` (V151, V152, V270, V93,
  V271_DARWIN, ...).
- savia: ``data.savia``; ``None`` si falta (payload vacío de savia).
- tipo de payload V152: ``completo`` si ``data`` trae ``ecosistema`` y
  ``meshUrl``; ``compacto`` si no los trae (CORR-M91-ESTRUCTURA-R23:
  la comparación de claves es POR TIPO, no contra la mayoría global).
- bien formado (solo V152): el conjunto de claves de ``data`` del
  payload coincide con el de la mayoría de su propio tipo.

Salida: JSON con el censo completo + resumen en stdout.
Exit 0 si el directorio se leyó entero; exit 2 si no hay payloads.
"""
import glob
import json
import os
import sys
from collections import Counter


def clasificar_tipo(data):
    """completo / compacto según las claves de data (M-91)."""
    if not isinstance(data, dict):
        return None
    if "ecosistema" in data and "meshUrl" in data:
        return "completo"
    return "compacto"


def medir(directorio):
    patron = os.path.join(directorio, "heartbeat_rev_r*.json")
    archivos = sorted(glob.glob(patron))
    if not archivos:
        return None
    distribucion = {}
    vacios = 0
    v152 = {}
    for ruta in archivos:
        nombre = os.path.basename(ruta)
        size = os.path.getsize(ruta)
        with open(ruta, encoding="utf-8") as f:
            d = json.load(f)
        version = d.get("version")
        data = d.get("data") if isinstance(d.get("data"), dict) else {}
        savia = data.get("savia")
        ts = d.get("ts") or data.get("timestamp")  # M-91 usa el ts de nivel superior
        distribucion.setdefault(str(version), Counter())[str(savia)] += 1
        if savia is None:
            vacios += 1
            continue
        if str(version) == "V152":
            tipo = clasificar_tipo(data)
            entrada = v152.setdefault(str(savia), {
                "n": 0,
                "tipos": Counter(),
                "sizes_B": [],
                "archivos": [],
                "claves_data": Counter(),
            })
            entrada["n"] += 1
            entrada["tipos"][tipo] += 1
            entrada["sizes_B"].append(size)
            entrada["archivos"].append({
                "archivo": nombre,
                "ts": ts,
                "size_B": size,
                "tipo": tipo,
                "nodeId": data.get("nodeId"),
            })
            entrada["claves_data"][tuple(sorted(data.keys()))] += 1
    # Bien formado: claves == mayoría de su propio tipo (dentro de V152).
    for valor, entrada in v152.items():
        mayorias = {}
        for tipo in ("completo", "compacto"):
            claves_tipo = Counter()
            for ruta in archivos:
                with open(ruta, encoding="utf-8") as f:
                    d = json.load(f)
                if str(d.get("version")) != "V152":
                    continue
                data = d.get("data") if isinstance(d.get("data"), dict) else {}
                if data.get("savia") is None or str(data.get("savia")) != valor:
                    continue
                if clasificar_tipo(data) == tipo:
                    claves_tipo[tuple(sorted(data.keys()))] += 1
            if claves_tipo:
                mayorias[tipo] = claves_tipo.most_common(1)[0][0]
        bien = True
        for a in entrada["archivos"]:
            with open(os.path.join(directorio, a["archivo"]), encoding="utf-8") as f:
                d = json.load(f)
            data = d.get("data") if isinstance(d.get("data"), dict) else {}
            if tuple(sorted(data.keys())) != mayorias.get(a["tipo"]):
                bien = False
        entrada["bien_formado_por_tipo"] = bien
        entrada["tipos"] = dict(entrada["tipos"])
        entrada["claves_data"] = {",".join(k): n for k, n in entrada["claves_data"].items()}
    return {
        "directorio": os.path.abspath(directorio),
        "n_total": len(archivos),
        "n_vacios_savia": vacios,
        "distribucion_savia_por_version": {
            v: dict(c) for v, c in sorted(distribucion.items())
        },
        "v152": v152,
    }


def main():
    if len(sys.argv) < 2:
        print("Uso: python3 medir_savia.py <directorio> [--salida censo.json]")
        sys.exit(2)
    directorio = sys.argv[1]
    salida = None
    if "--salida" in sys.argv:
        salida = sys.argv[sys.argv.index("--salida") + 1]
    censo = medir(directorio)
    if censo is None:
        print(f"SIN PAYLOADS: no hay heartbeat_rev_r*.json en {directorio}")
        sys.exit(2)
    if salida:
        with open(salida, "w", encoding="utf-8") as f:
            json.dump(censo, f, ensure_ascii=False, indent=2)
    print(f"directorio: {censo['directorio']}")
    print(f"payloads: {censo['n_total']}  vacíos de savia: {censo['n_vacios_savia']}")
    for version, dist in censo["distribucion_savia_por_version"].items():
        print(f"  {version}: {dist}")
    for valor in sorted(censo["v152"]):
        e = censo["v152"][valor]
        print(f"  V152 savia {valor}: n={e['n']} tipos={e['tipos']} "
              f"sizes={sorted(set(e['sizes_B']))} bien_formado={e['bien_formado_por_tipo']}")
        for a in e["archivos"]:
            print(f"    - {a['archivo']} ts={a['ts']} {a['size_B']} B {a['tipo']}")


if __name__ == "__main__":
    main()
