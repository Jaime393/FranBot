#!/usr/bin/env python3
"""Runner de vectores de test firmados — producción fractal, frente A.
Solo stdlib. Carga los 4 vectores, ejecuta cada prueba, imprime una
línea PASS/FAIL por check. Exit 0 si todo pasa, 1 si algo falla.
Uso: python3 run_vectores.py
"""
import hashlib
import json
import os
import re
import sys

BASE = os.path.dirname(os.path.abspath(__file__))
CHECKS = []  # (nombre, ok, detalle)


def check(nombre, ok, detalle=""):
    CHECKS.append((nombre, bool(ok), detalle))
    print(("PASS " if ok else "FAIL ") + nombre + ((" — " + detalle) if detalle else ""))


def load(nombre):
    with open(os.path.join(BASE, nombre), encoding="utf-8") as f:
        return json.load(f)


# ---------------------------------------------------------------- measure
def run_measure(v):
    fx = v["fixture"]
    const = fx["constantes"]
    phi = const["phi_inverso"]
    tol = const["tolerancia"]
    fac = const["factor_dataset"]

    def k_i(inputs):
        d_f, l_corr, l_0 = inputs["d_f"], inputs["l_corr"], inputs["l_0"]
        if inputs["metodo"] == "exacto":
            return phi * (d_f / 2.5) * (l_corr / l_0)
        if inputs["metodo"] == "dataset":
            return fac * d_f * (l_corr / l_0)
        return None

    for caso in fx["casos"]:
        got = k_i(caso["inputs"])
        exp = caso["expected"]
        check("measure:" + caso["id"] + ":k_i", got is not None and abs(got - exp["k_i"]) <= tol,
              f"got={got} expected={exp['k_i']}")
        if "colapso" in exp:
            check("measure:" + caso["id"] + ":colapso",
                  (got < const["umbral_colapso_ki"]) == exp["colapso"], f"k_i={got}")
        if "en_banda" in exp:
            lo, hi = const["banda_ki"]
            check("measure:" + caso["id"] + ":en_banda",
                  (lo <= got <= hi) == exp["en_banda"], f"k_i={got}")
    # I3: correspondencia de bordes con tolerancia 1e-4
    lo_df, hi_df = const["banda_df"]
    lo_ki, hi_ki = const["banda_ki"]
    check("measure:I3:banda_inf", abs(fac * lo_df - lo_ki) <= 1e-4,
          f"|{fac * lo_df} - {lo_ki}| = {abs(fac * lo_df - lo_ki):.2e}")
    check("measure:I3:banda_sup", abs(fac * hi_df - hi_ki) <= 1e-4,
          f"|{fac * hi_df} - {hi_ki}| = {abs(fac * hi_df - hi_ki):.2e}")
    # I5: brecha exacta vs dataset < 1e-4 para D_f <= 2.6
    gap = abs(phi / 2.5 - fac) * 2.41
    check("measure:I5:brecha", gap < 1e-4, f"gap={gap:.3e}")
    # presupuesto: tamaño real <= declarado
    size = os.path.getsize(os.path.join(BASE, "vector_measure.json"))
    check("measure:presupuesto_bytes", size <= v["presupuesto"]["almacenamiento_bytes"],
          f"{size} <= {v['presupuesto']['almacenamiento_bytes']}")


# ---------------------------------------------------------------- validate
def run_validate(v):
    fx = v["fixture"]
    esquema = fx["esquema"]

    def validar(reg):
        errores = []
        if not isinstance(reg, dict):
            return "INVALIDO", ["registro_no_objeto"]
        for clave in esquema["claves_requeridas"]:
            if clave not in reg:
                errores.append("falta_clave:" + clave)
        if "estado" in reg and reg["estado"] not in esquema["estados_validos"]:
            errores.append("estado_invalido")
        if "hash" in reg:
            h = reg["hash"]
            if h in ("sha256:PENDIENTE", "sha256:NO_DISPONIBLE"):
                pass
            elif isinstance(h, str) and h.startswith("sha256:") and re.fullmatch(r"[0-9a-f]+", h[7:]):
                pass
            elif isinstance(h, str) and not h.startswith("sha256:"):
                errores.append("hash_sin_prefijo")
            else:
                errores.append("hash_malformado")
        return ("VALIDO" if not errores else "INVALIDO"), errores

    exp = fx["expected"]
    for nombre, reg in (("registro_valido", fx["registro_valido"]),
                        ("registro_invalido", fx["registro_invalido"])):
        veredicto, errores = validar(reg)
        e = exp[nombre]
        check("validate:" + nombre + ":veredicto", veredicto == e["veredicto"],
              f"got={veredicto} expected={e['veredicto']}")
        check("validate:" + nombre + ":errores", sorted(errores) == sorted(e["errores"]),
              f"got={sorted(errores)} expected={sorted(e['errores'])}")
    # V4: PENDIENTE y NO_DISPONIBLE son formatos válidos
    for h in ("sha256:PENDIENTE", "sha256:NO_DISPONIBLE"):
        reg = dict(fx["registro_valido"], hash=h)
        veredicto, _ = validar(reg)
        check("validate:V4:" + h.split(":")[1], veredicto == "VALIDO", f"got={veredicto}")
    size = os.path.getsize(os.path.join(BASE, "vector_validate.json"))
    check("validate:presupuesto_bytes", size <= v["presupuesto"]["almacenamiento_bytes"],
          f"{size} <= {v['presupuesto']['almacenamiento_bytes']}")


# ---------------------------------------------------------------- attest
def run_attest(v):
    fx = v["fixture"]

    def atestar(parent_hash, artifact_bytes):
        return hashlib.sha256((parent_hash + "\n" + artifact_bytes).encode("utf-8")).hexdigest()

    got = atestar(fx["parent_hash"], fx["artifact_bytes"])
    check("attest:A1:sha_coincide", got == fx["expected"]["attestation_sha"],
          f"got={got[:12]}… expected={fx['expected']['attestation_sha'][:12]}…")
    # A2: el registro corrupto no verifica
    reg = fx["registro_corrupto"]
    check("attest:A2:corrupto_rechazado",
          atestar(reg["parent_hash"], reg["artifact"]) != reg["attestation_sha"],
          "sha de ceros rechazado")
    # A3/A4/A5 sobre el registro esperado
    r = fx["expected"]["registro"]
    check("attest:A3:author_presente", isinstance(r.get("author"), str) and len(r["author"]) > 0,
          f"author={r.get('author')}")
    check("attest:A4:timestamp_iso", isinstance(r.get("timestamp"), str) and r["timestamp"].endswith("Z"),
          f"timestamp={r.get('timestamp')}")
    check("attest:A5:parent_hex64", bool(re.fullmatch(r"[0-9a-f]{64}", r["parent_hash"])),
          "parent_hash hex 64")
    size = os.path.getsize(os.path.join(BASE, "vector_attest.json"))
    check("attest:presupuesto_bytes", size <= v["presupuesto"]["almacenamiento_bytes"],
          f"{size} <= {v['presupuesto']['almacenamiento_bytes']}")


# ---------------------------------------------------------------- route
def run_route(v):
    fx = v["fixture"]
    tabla = {fila["tarea"]: fila for fila in fx["tabla"]}

    def enrutar(tarea):
        if not isinstance(tarea, str) or tarea not in tabla:
            return "NO_SÉ", []
        fila = tabla[tarea]
        return fila["esencia"], fila["inputs_requeridos"]

    for caso in fx["casos"]:
        esencia, inputs = enrutar(caso["tarea"])
        exp = caso["expected"]
        check("route:" + repr(caso["tarea"]) + ":esencia", esencia == exp["esencia"],
              f"got={esencia} expected={exp['esencia']}")
        check("route:" + repr(caso["tarea"]) + ":inputs", inputs == exp["inputs_requeridos"],
              f"got={inputs} expected={exp['inputs_requeridos']}")
    # R1: una esencia por tarea conocida = la tabla no tiene tareas duplicadas
    check("route:R1:sin_duplicados", len(fx["tabla"]) == len({f["tarea"] for f in fx["tabla"]}),
          "tareas únicas")
    # R4: inputs no vacíos y distintos por esencia
    conjuntos = [tuple(f["inputs_requeridos"]) for f in fx["tabla"]]
    check("route:R4:inputs_no_vacios_distintos",
          all(len(c) > 0 for c in conjuntos) and len(set(conjuntos)) == len(conjuntos),
          str(conjuntos))
    # R5: publish -> route
    check("route:R5:publish_es_route", tabla["publish"]["esencia"] == "route",
          f"publish -> {tabla['publish']['esencia']}")
    size = os.path.getsize(os.path.join(BASE, "vector_route.json"))
    check("route:presupuesto_bytes", size <= v["presupuesto"]["almacenamiento_bytes"],
          f"{size} <= {v['presupuesto']['almacenamiento_bytes']}")


def main():
    for nombre, fn in (("vector_measure.json", run_measure),
                       ("vector_validate.json", run_validate),
                       ("vector_attest.json", run_attest),
                       ("vector_route.json", run_route)):
        try:
            fn(load(nombre))
        except Exception as e:  # noqa: BLE001 — un vector roto es un FAIL, no un crash
            check(nombre + ":carga", False, f"{type(e).__name__}: {e}")
    fails = [c for c in CHECKS if not c[1]]
    print(f"\n{len(CHECKS) - len(fails)}/{len(CHECKS)} checks PASS")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
