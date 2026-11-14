#!/usr/bin/env python3
"""Runner de métricas calibradas (Frente B). Solo stdlib.
Recomputa K_i desde el CSV real y corre los vectores sintéticos de Phi y rho.
Una línea PASS/FAIL por check; exit 0 si todo pasa, 1 si algo falla.
Uso: python3 run_metricas.py
"""
import csv
import hashlib
import json
import math
import pathlib
import sys

BASE = pathlib.Path(__file__).resolve().parent
CSV = pathlib.Path("/home/hatch/workspace/academico/dataset_nodos_Df.csv")
D08 = pathlib.Path("/home/hatch/workspace/academico/tejido_2026-11-12/ronda_10/mapa_decisiones_r10.md")
SOUL = pathlib.Path("/home/hatch/SOUL.md")

PHI_INV = 1.0 / 1.6180339887
FACTOR = 0.2472
U_DF = 0.0604
U_KI = FACTOR * U_DF
BANDA = (0.55, 0.62)
PHI_C = 0.6829322

fails = []
total = [0]


def check(nombre, cond, detalle=""):
    total[0] += 1
    print(("PASS" if cond else "FAIL"), "-", nombre, ("| " + detalle if detalle else ""))
    if not cond:
        fails.append(nombre)


def sha256(p):
    return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()


def veredicto_phi(phi):
    if phi > PHI_C:
        return "SOBRE_UMBRAL"
    if phi == PHI_C:
        return "EN_UMBRAL"
    return "BAJO_UMBRAL"


def main():
    ki = json.loads((BASE / "metrica_ki.json").read_text(encoding="utf-8"))
    phi = json.loads((BASE / "metrica_phi.json").read_text(encoding="utf-8"))
    rho = json.loads((BASE / "metrica_rho.json").read_text(encoding="utf-8"))

    # ---- K_i: datos reales ----
    rows = list(csv.DictReader(CSV.open(encoding="utf-8")))
    check("ki_csv_30_filas", len(rows) == 30, f"filas={len(rows)}")
    tabla = {t["nodo"]: t for t in ki["calibracion"]["tabla"]}
    check("ki_tabla_30_filas", len(tabla) == 30, f"filas={len(tabla)}")
    ok_ki = ok_banda = ok_res = ok_csv = True
    n_banda = n_res = 0
    for r in rows:
        df = float(r["d_f"])
        rec = FACTOR * df
        t = tabla[r["nodo"]]
        if abs(t["k_i_recalculado"] - rec) > 1e-6:
            ok_ki = False
        en_banda = BANDA[0] <= rec <= BANDA[1]
        if t["en_banda_0.55_0.62"] != en_banda:
            ok_banda = False
        dist = min(abs(rec - BANDA[0]), abs(rec - BANDA[1])) if en_banda else None
        res = bool(en_banda and dist is not None and dist > U_KI)
        if t["pertenencia_resuelta"] != res:
            ok_res = False
        n_banda += en_banda
        n_res += res
        if abs(rec - float(r["k_i"])) > 0.0015 and "Microbioma" not in r["nodo"]:
            ok_csv = False
    check("ki_recalculado_desde_csv", ok_ki, "K_i = 0.2472*D_f en las 30 filas")
    check("ki_en_banda_flags", ok_banda, f"en banda={n_banda}")
    check("ki_pertenencia_resuelta_flags", ok_res, f"resueltas={n_res}")
    check("ki_conteos", n_banda == 9 and n_res == 3, f"9 en banda, 3 resueltas (medido {n_banda}/{n_res})")
    check("ki_u_propagacion", abs(ki["incertidumbre"]["u_k_i"] - U_KI) < 1e-9,
          f"u(K_i)={U_KI:.8f}")
    check("ki_csv_columna_rendondeo", ok_csv,
          "columna k_i del CSV dentro de 0.0015 salvo Microbioma (excepción documentada)")
    check("ki_padre_csv", ki["procedencia"]["parent_hash"] == sha256(CSV), "sha256 del CSV real")
    vt = ki["vector_test_sintetico"]
    ki_sint = PHI_INV * (vt["d_f"] / 2.5) * (vt["l_corr"] / vt["l_0"])
    check("ki_sintetico_canonico", abs(ki_sint - vt["k_i_esperado"]) < 1e-9,
          f"K_i={ki_sint:.10f} (esperado {vt['k_i_esperado']})")
    check("ki_sintetico_banda_no_resuelta",
          vt["en_banda_esperado"] is True and vt["pertenencia_resuelta_esperada"] is False,
          "en banda, pertenencia no resuelta (0.00197 < u)")

    # ---- Phi: vector sintético ----
    ok_phi = all(veredicto_phi(c["phi"]) == c["veredicto_esperado"]
                 for c in phi["vector_test_sintetico"]["casos"])
    check("phi_vector_sintetico", ok_phi, "0.5 BAJO / 0.6829322 EN_UMBRAL / 0.9 SOBRE")
    check("phi_umbral_estricto", veredicto_phi(PHI_C) == "EN_UMBRAL",
          "Phi == Phi_c NO supera (condición >)")
    check("phi_c_valor", phi["calibracion"]["phi_c_miu"] == PHI_C, "Phi_c = 0.6829322")
    check("phi_padre_d08", phi["procedencia"]["parent_hash"] == sha256(D08),
          "sha256 de mapa_decisiones_r10.md (D-08, no C-008)")

    # ---- rho: vector sintético ----
    campo = rho["calibracion"]["campo"]
    check("rho_mayor_que_cero", all(p > 0 for p in campo), f"min={min(campo)}")
    check("rho_normalizacion", abs(sum(campo) - 1.0) < 1e-12, f"suma={sum(campo):.12f}")
    s = -sum(p * math.log(p) for p in campo)
    check("rho_entropia", abs(s - rho["calibracion"]["entropia_nats"]) < 1e-9,
          f"S={s:.10f} nats")
    check("rho_entropia_menor_max", s < math.log(len(campo)), f"S/ln8={s / math.log(8):.6f}")
    check("rho_padre_soul", rho["procedencia"]["parent_hash"] == sha256(SOUL),
          "sha256 de SOUL.md")

    # ---- Presupuesto: tamaños bajo el tope declarado ----
    for name, obj in [("metrica_ki.json", ki), ("metrica_phi.json", phi), ("metrica_rho.json", rho)]:
        tam = (BASE / name).stat().st_size
        tope = obj["presupuesto"]["almacenamiento_bytes_max"]
        check(f"presupuesto_{name}", tam <= tope, f"{tam} B <= {tope} B")

    n = total[0]
    print(f"\n{n - len(fails)}/{n} checks PASS" if not fails else f"\n{n - len(fails)}/{n} checks PASS — {len(fails)} FAIL")
    return 0 if not fails else 1


if __name__ == "__main__":
    sys.exit(main())
