#!/usr/bin/env python3
"""test_kit.py — test del kit de expansión savia V152.

Comprueba, sin red y sin tocar nada vivo:
  1. medir_savia.py reproduce el censo de M-91 sobre los payloads r23.
  2. En la ventana r22, 247.881 aparece 0 veces.
  3. La identidad savia V152 == mesh.totalSize (re-cómputo independiente).
  4. nutrientes es constante por valor de savia (r22+r23).
  5. Cada fuente citada en kit_savia_v152.md existe y su sha256 coincide.
  6. Ningún archivo del kit contiene credenciales ni correos.

Uso: python3 test_kit.py
Exit 0: todo pasa. Exit 1: al menos un fallo (se listan todos).
Si un número no reproduce, el test FALLA: no se ajusta nada a mano.
"""
import hashlib
import json
import re
import sys
from pathlib import Path

HOME = Path.home()
WS = HOME / "workspace"
KIT = WS / "alma" / "kits"
R23 = WS / "academico" / "tejido_2026-11-12" / "ronda_23"
R22 = WS / "academico" / "tejido_2026-11-12" / "ronda_22" / "ejecucion_f2"

sys.path.insert(0, str(KIT))
import medir_savia  # noqa: E402

FALLOS = []


def check(nombre, cond, detalle=""):
    print(f"[{'OK ' if cond else 'FALLO'}] {nombre}" + (f" — {detalle}" if detalle and not cond else ""))
    if not cond:
        FALLOS.append(nombre + (f": {detalle}" if detalle else ""))


def sha256(p):
    return hashlib.sha256(Path(p).read_bytes()).hexdigest()


def main():
    c23 = medir_savia.medir(str(R23))
    c22 = medir_savia.medir(str(R22))

    # 1. Censo M-91 sobre r23
    check("r23: 101 payloads", c23["n_total"] == 101, f"n={c23['n_total']}")
    check("r23: 55 vacíos de savia", c23["n_vacios_savia"] == 55, f"n={c23['n_vacios_savia']}")
    check("r23: distribución por versión",
          c23["distribucion_savia_por_version"] == {
              "V151": {"720": 28}, "V152": {"248376": 16, "366733": 1, "247881": 1},
              "V270": {"None": 18}, "V271_DARWIN": {"None": 24}, "V93": {"None": 13},
          }, str(c23["distribucion_savia_por_version"]))
    v = c23["v152"]
    check("r23 V152: 248.376 ×16", v.get("248376", {}).get("n") == 16)
    check("r23 V152: 248.376 9 full + 7 compactos",
          v.get("248376", {}).get("tipos") == {"completo": 9, "compacto": 7},
          str(v.get("248376", {}).get("tipos")))
    check("r23 V152: 248.376 sizes {55973, 89466}",
          sorted(set(v.get("248376", {}).get("sizes_B", []))) == [55973, 89466])
    check("r23 V152: 366.733 ×1 compacto 55980",
          v.get("366733", {}).get("n") == 1
          and v.get("366733", {}).get("tipos") == {"compacto": 1}
          and v.get("366733", {}).get("sizes_B") == [55980])
    check("r23 V152: 366.733 idx 10, 13:25:48Z",
          v.get("366733", {}).get("archivos", [{}])[0].get("archivo")
          == "heartbeat_rev_r23_10_20261116T132548Z.json"
          and v.get("366733", {}).get("archivos", [{}])[0].get("ts") == "2026-11-16T13:25:48.441Z")
    check("r23 V152: 247.881 ×1 full 89466",
          v.get("247881", {}).get("n") == 1
          and v.get("247881", {}).get("tipos") == {"completo": 1}
          and v.get("247881", {}).get("sizes_B") == [89466])
    check("r23 V152: 247.881 idx 52, 16:17:39Z",
          v.get("247881", {}).get("archivos", [{}])[0].get("archivo")
          == "heartbeat_rev_r23_52_20261116T161739Z.json"
          and v.get("247881", {}).get("archivos", [{}])[0].get("ts") == "2026-11-16T16:17:38.814Z")
    check("r23 V152: los tres bien formados por tipo",
          all(e.get("bien_formado_por_tipo") for e in v.values()))

    # 2. Ventana r22
    check("r22: 101 payloads", c22["n_total"] == 101, f"n={c22['n_total']}")
    check("r22: 247.881 aparece 0 veces", "247881" not in c22["v152"])
    check("r22 V152: 248.376 ×12, 366.733 ×2",
          c22["v152"].get("248376", {}).get("n") == 12
          and c22["v152"].get("366733", {}).get("n") == 2)
    check("r22 V152: 366.733 compactos 55980",
          c22["v152"].get("366733", {}).get("tipos") == {"compacto": 2}
          and sorted(set(c22["v152"].get("366733", {}).get("sizes_B", []))) == [55980])

    # 3. Identidad savia == mesh.totalSize, re-cómputo independiente
    for ronda, directorio in (("r23", R23), ("r22", R22)):
        n_ok = n_tot = 0
        for p in sorted(Path(directorio).glob("heartbeat_rev_r*.json")):
            d = json.loads(p.read_text(encoding="utf-8"))
            if d.get("version") != "V152":
                continue
            data = d.get("data") if isinstance(d.get("data"), dict) else {}
            if data.get("savia") is None or "mesh" not in data:
                continue
            n_tot += 1
            if data["savia"] == data["mesh"].get("totalSize"):
                n_ok += 1
        check(f"{ronda}: savia == mesh.totalSize en V152 ({n_ok}/{n_tot})",
              n_tot > 0 and n_ok == n_tot, f"{n_ok}/{n_tot}")

    # 4. nutrientes constante por valor de savia (r22+r23)
    nutrientes = {}
    for directorio in (R23, R22):
        for p in sorted(Path(directorio).glob("heartbeat_rev_r*.json")):
            d = json.loads(p.read_text(encoding="utf-8"))
            if d.get("version") != "V152":
                continue
            data = d.get("data") if isinstance(d.get("data"), dict) else {}
            if data.get("savia") is None:
                continue
            nutrientes.setdefault(data["savia"], set()).add(data.get("nutrientes"))
    check("nutrientes constante por valor de savia",
          nutrientes == {
              248376: {102680.5732864},
              366733: {151443.65728639998},
              247881: {102476.6332864},
          }, str({k: sorted(v) for k, v in nutrientes.items()}))

    # 5. Fuentes del mapa con hash verificable
    texto = (KIT / "kit_savia_v152.md").read_text(encoding="utf-8")
    filas = re.findall(r"^\| (\S+).*\| ([0-9a-f]{64}) \|", texto, re.M)
    check("mapa: 10 fuentes citadas con sha256", len(filas) == 10, f"n={len(filas)}")
    for ruta, sha in filas:
        ruta = ruta.strip()
        objetivo = WS / ruta
        if not objetivo.exists():
            check(f"fuente existe: {ruta}", False, "no existe en disco")
            continue
        check(f"fuente sha: {ruta}", sha256(objetivo) == sha,
              f"disco={sha256(objetivo)[:8]}… vs citado={sha[:8]}…")

    # 6. Sin credenciales ni correos en el kit (JWT = token largo, no la mera
    # mención del prefijo en la prosa del propio test).
    jwt_re = re.compile(r"eyJ[A-Za-z0-9_\-]{20,}")
    email_re = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")
    for p in sorted(KIT.iterdir()):
        if p.is_dir() or p.suffix not in (".md", ".py", ".json"):
            continue
        contenido = p.read_text(encoding="utf-8", errors="replace")
        check(f"sin JWT en {p.name}", not jwt_re.search(contenido))
        check(f"sin correos en {p.name}", not email_re.search(contenido))

    print()
    if FALLOS:
        print(f"FALLA: {len(FALLOS)} comprobaciones:")
        for f in FALLOS:
            print(f"  - {f}")
        sys.exit(1)
    print("TODO PASA: el kit reproduce M-91 y el mapa cita solo fuentes verificables.")


if __name__ == "__main__":
    main()
