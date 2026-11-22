#!/usr/bin/env python3
"""Malla de orden por intervalos; biblioteca estándar, sin red ni escrituras."""

import argparse
import bisect
import hashlib
from collections import Counter
from decimal import Decimal, localcontext
from fractions import Fraction
from functools import lru_cache
from itertools import combinations
import json
from math import factorial
from pathlib import Path


LIMITE_ESTADOS = 250_000


def medir(nombres, valores, u, posibilidades=False, limite=LIMITE_ESTADOS):
    if not u.is_finite() or u < 0:
        raise ValueError("El semiancho u debe ser finito y no negativo")
    if not all(v.is_finite() for v in valores):
        raise ValueError("Todos los valores deben ser finitos")
    if len(nombres) != len(valores):
        raise ValueError("Se requieren nombres y valores de la misma longitud")
    with localcontext() as ctx:
        datos = [*valores, u]
        ctx.prec = max(28, max(v.adjusted() for v in datos)
                       - min(v.as_tuple().exponent for v in datos) + 4)
        resultado = medir_intervalos([(n, v - u, v + u) for n, v in zip(nombres, valores)],
                                      posibilidades, limite)
        resultado.update(u_semiancho=str(u), umbral_estricto=str(2 * u))
    return resultado


def medir_intervalos(intervalos, posibilidades=False, limite=LIMITE_ESTADOS):
    if not intervalos or len({r[0] for r in intervalos}) != len(intervalos):
        raise ValueError("Se requieren nodos con nombres únicos")
    def finito(v):
        return isinstance(v, Fraction) or (isinstance(v, Decimal) and v.is_finite())
    if not all(isinstance(e, str) and e and finito(a) and finito(b) and a <= b
               for e, a, b in intervalos):
        raise ValueError("Se requieren nombres no vacíos e intervalos finitos con inferior <= superior")
    ordenados = sorted(intervalos, key=lambda r: (r[1], r[2], r[0]))
    etiquetas, izq, der = map(list, zip(*ordenados))
    n = len(izq)
    pares = {(i, j) for i, j in combinations(range(n), 2) if der[i] < izq[j]}
    por_extremos = sum(n - bisect.bisect_right(izq, v) for v in der)
    if len(pares) != por_extremos:
        raise RuntimeError("No coinciden la enumeración y el cálculo por extremos")

    sucesores = [set() for _ in izq]
    previos = [set() for _ in izq]
    for i, j in pares:
        sucesores[i].add(j)
        previos[j].add(i)
    aristas = [(i, j) for i, j in sorted(pares)
               if not any(j in sucesores[k] for k in sucesores[i] if k < j)]
    directos = [set() for _ in izq]
    for i, j in aristas:
        directos[i].add(j)
    cierre = [set() for _ in izq]
    for i in reversed(range(n)):
        for j in directos[i]:
            cierre[i].add(j)
            cierre[i].update(cierre[j])
    if cierre != sucesores:
        raise RuntimeError("Las aristas no reconstruyen todas las comparaciones")

    cadena = []
    for i in sorted(range(n), key=lambda k: (der[k], izq[k], etiquetas[k])):
        if not cadena or der[cadena[-1]] < izq[i]:
            cadena.append(i)
    alturas = []
    for i in range(n):
        alturas.append(1 + max((alturas[j] for j in previos[i]), default=0))
    if len(cadena) != max(alturas):
        raise RuntimeError("No coinciden los dos cálculos de altura máxima")

    activos, antichain = set(), []
    punto = None
    eventos = [(v, 0, i) for i, v in enumerate(izq)] + [(v, 1, i) for i, v in enumerate(der)]
    for v, fin, i in sorted(eventos):  # Intervalos cerrados: alta antes que baja.
        if fin:
            activos.remove(i)
        else:
            activos.add(i)
            if len(activos) > len(antichain):
                antichain, punto = sorted(activos), v
    ancho_directo = max(sum(a <= v <= b for a, b in zip(izq, der)) for v in izq)
    if len(antichain) != ancho_directo:
        raise RuntimeError("No coinciden el barrido y la cuenta directa de solapamientos")

    adyacentes = sum((i, i + 1) in pares for i in range(n - 1))
    resultado = {
        "nodos": n,
        "pares_posibles": n * (n - 1) // 2,
        "comparables": len(pares),
        "incomparables": n * (n - 1) // 2 - len(pares),
        "adyacentes_comparables": adyacentes,
        "aristas_reduccion": len(aristas),
        "altura": len(cadena),
        "cadena_maxima": [etiquetas[i] for i in cadena],
        "anchura": len(antichain),
        "anticadena_maxima": [etiquetas[i] for i in antichain],
        "punto_comun_anticadena": str(punto),
        "rangos_posicion": {e: [1 + len(previos[i]), n - len(sucesores[i])]
                            for i, e in enumerate(etiquetas)},
        "malla": [[etiquetas[i], etiquetas[j]] for i, j in aristas],
    }
    if posibilidades:
        e = contar_ordenes(previos, sucesores, limite)
        resultado["ordenes_compatibles"] = e
        # Dos nodos fijos en el mismo punto nunca pueden distinguirse.
        fijos = [a for a, b in zip(izq, der) if a == b]
        if len(fijos) != len(set(fijos)):
            resultado["ordenes_realizables_sin_empate"] = 0
        else:
            hay_contacto = False
            for i, j in combinations(range(n), 2):
                if der[i] == izq[j]:
                    previos[j].add(i)
                    sucesores[i].add(j)
                    hay_contacto = True
            resultado["ordenes_realizables_sin_empate"] = (
                contar_ordenes(previos, sucesores, limite) if hay_contacto else e)
    return resultado


def contar_ordenes(previos, sucesores, limite=LIMITE_ESTADOS):
    """Cuenta órdenes totales de nodos etiquetados por prefijos válidos.

    Si dos nodos tienen los mismos predecesores y sucesores, se guarda
    un contador por clase, no un estado por combinación de etiquetas.
    """
    grupos = {}
    for i, (a, b) in enumerate(zip(previos, sucesores)):
        grupos.setdefault((frozenset(a), frozenset(b)), []).append(i)
    clases = list(grupos.values())
    clase = {i: k for k, miembros in enumerate(clases) for i in miembros}
    requisitos = [tuple(sorted({clase[j] for j in previos[miembros[0]]}))
                  for miembros in clases]
    estados = 0

    @lru_cache(maxsize=None)
    def contar(restan):
        nonlocal estados
        estados += 1
        if estados > limite:
            raise ValueError("El conteo exacto superó el límite de estados")
        pendientes = [k for k, cantidad in enumerate(restan) if cantidad]
        elegibles = [k for k in pendientes if all(restan[j] == 0 for j in requisitos[k])]
        if len(elegibles) == len(pendientes):
            return factorial(sum(restan))
        total = 0
        for k in elegibles:
            nuevo = restan[:k] + (restan[k] - 1,) + restan[k + 1:]
            total += restan[k] * contar(nuevo)
        return total

    try:
        return contar(tuple(map(len, clases)))
    finally:
        contar.cache_clear()


def fronteras(nombres, valores, posibilidades=False, limite=LIMITE_ESTADOS):
    if not valores or not all(v.is_finite() for v in valores):
        raise ValueError("La curva exige valores finitos y al menos un nodo")
    with localcontext() as ctx:
        ctx.prec = max(28, max(v.adjusted() for v in valores)
                       - min(v.as_tuple().exponent for v in valores) + 4)
        x = sorted(valores)
        cortes = Counter((b - a) / 2 for a, b in combinations(x, 2))
    escenarios = [Decimal(0)] + sorted(t for t in cortes if t > 0)
    esperados = sum(n for t, n in cortes.items() if t > 0)
    filas = []
    for i, u in enumerate(escenarios):
        perdidos = cortes[u] if u > 0 else 0
        esperados -= perdidos
        r = medir(nombres, valores, u, posibilidades, limite)
        if r["comparables"] != esperados:
            raise RuntimeError("La curva de fronteras no coincide con la malla reconstruida")
        fila = {
            "u_desde_incluido": str(u),
            "u_hasta_excluido": str(escenarios[i + 1]) if i + 1 < len(escenarios) else None,
            "pares_que_se_pierden_al_entrar": perdidos,
        }
        for k in ("comparables", "adyacentes_comparables", "altura", "anchura", "ordenes_compatibles"):
            if k in r:
                fila[k] = r[k]
        if posibilidades:
            fila["ordenes_realizables_sin_empate_en_frontera"] = r["ordenes_realizables_sin_empate"]
            if filas:
                anterior = filas[-1]["ordenes_compatibles"]
                if fila["ordenes_compatibles"] <= anterior:
                    raise RuntimeError("Quitar una comparación no aumentó los órdenes compatibles")
                if r["ordenes_realizables_sin_empate"] != anterior:
                    raise RuntimeError("El conteo estricto no coincide con el límite izquierdo")
        filas.append(fila)
    return {"pares_con_valor_identico": cortes[Decimal(0)], "tramos": filas}


def umbral_orden(nombres, valores, orden):
    """Semiancho mínimo para realizar una permutación concreta."""
    if (not isinstance(orden, list) or not all(isinstance(n, str) for n in orden)
            or len(orden) != len(nombres) or set(orden) != set(nombres)):
        raise ValueError("--orden debe contener cada nombre exactamente una vez")
    centro = dict(zip(nombres, valores))
    with localcontext() as ctx:
        ctx.prec = max(28, max(v.adjusted() for v in valores)
                       - min(v.as_tuple().exponent for v in valores) + 4)
        previo = None
        brecha = None
        testigo = None
        for nombre in orden:
            x = centro[nombre]
            if previo is not None:
                delta = centro[previo] - x
                if brecha is None or delta > brecha:
                    brecha, testigo = delta, [previo, nombre]
            if previo is None or x > centro[previo]:
                previo = nombre
        cerrado_estricto = brecha is None or brecha < 0
        umbral = Decimal(0) if cerrado_estricto else brecha / 2
    return {
        "orden": orden,
        "u_minimo_compatible_incluido": str(umbral) if umbral else "0",
        "u_minimo_sin_empate_incluido": cerrado_estricto,
        "par_limitante": None if cerrado_estricto else testigo,
    }


def perfil_escala(nombres, centros, bases, escalas, curva=False, orden=None,
                  posibilidades=False, limite=LIMITE_ESTADOS):
    """Escala común multiplicativa sobre semianchos distintos y exactos."""
    if not (len(nombres) == len(centros) == len(bases) and len(nombres) > 0):
        raise ValueError("Se requieren las mismas cantidades de nodos, centros y semianchos base")
    if any(w < 0 for w in bases) or any(t < 0 for t in escalas):
        raise ValueError("Los semianchos base y factores de escala deben ser no negativos")

    def medir_t(t):
        r = medir_intervalos([(n, x - t * w, x + t * w)
                              for n, x, w in zip(nombres, centros, bases)], posibilidades, limite)
        r["factor_escala"] = str(t)
        return r

    salida = {"resultados": [medir_t(t) for t in escalas]}
    if curva:
        cortes = Counter()
        fijos = 0
        iguales = 0
        empate_permanente = False
        for i, j in combinations(range(len(nombres)), 2):
            delta, peso = abs(centros[i] - centros[j]), bases[i] + bases[j]
            if not delta:
                iguales += 1
                empate_permanente |= not peso
            elif peso:
                cortes[delta / peso] += 1
            else:
                fijos += 1
        puntos = [Fraction(0), *sorted(cortes)]
        tramos = []
        esperados = fijos + sum(cortes.values())
        for i, t in enumerate(puntos):
            esperados -= cortes[t]
            r = medir_t(t)
            if esperados != r["comparables"]:
                raise RuntimeError("Los umbrales ponderados no coinciden con las comparaciones")
            fila = {
                "t_desde_incluido": str(t),
                "t_hasta_excluido": str(puntos[i + 1]) if i + 1 < len(puntos) else None,
                "pares_que_se_pierden_al_entrar": cortes[t],
            }
            for k in ("comparables", "altura", "anchura", "ordenes_compatibles"):
                if k in r:
                    fila[k] = r[k]
            if posibilidades:
                estricto = r["ordenes_realizables_sin_empate"]
                fila["ordenes_realizables_sin_empate_en_frontera"] = estricto
                if tramos:
                    anterior = tramos[-1]["ordenes_compatibles"]
                    if (r["ordenes_compatibles"] <= anterior
                            or estricto != (0 if empate_permanente else anterior)):
                        raise RuntimeError("La transición de órdenes ponderados no es consistente")
            tramos.append(fila)
        salida["fronteras_escala_ponderada"] = {
            "pares_con_centro_identico": iguales,
            "pares_comparables_para_toda_escala": fijos,
            "empate_permanente": empate_permanente,
            "tramos": tramos,
        }
    if orden is not None:
        if (not isinstance(orden, list) or not all(isinstance(n, str) for n in orden)
                or len(orden) != len(nombres) or set(orden) != set(nombres)):
            raise ValueError("--orden debe contener cada nombre exactamente una vez")
        datos = dict(zip(nombres, zip(centros, bases)))
        t_min, limitante = Fraction(0), None
        imposible, fijo = None, None
        for a, b in combinations(orden, 2):
            x, w = datos[a]
            y, v = datos[b]
            delta, peso = x - y, w + v
            if delta < 0:
                continue
            if peso:
                t = delta / peso
                if t > t_min or (t == t_min and limitante is None):
                    t_min, limitante = t, [a, b]
            elif delta > 0:
                imposible = [a, b]
            else:
                fijo = [a, b]
        salida["umbral_del_orden"] = {
            "orden": orden,
            "t_minimo_compatible_incluido": None if imposible else str(t_min),
            "realizable_sin_empate": imposible is None and fijo is None,
            "t_minimo_sin_empate_incluido": (limitante is None if imposible is None
                                             and fijo is None else None),
            "par_limitante": imposible or fijo or limitante,
        }
    return salida


def integrar_m66(m72, posibilidades=False, limite=LIMITE_ESTADOS):
    """Deriva cotas de 30 nodos de los controles M-66 incluidos en M-72."""
    p, extra = m72["parametros"], m72["extra"]
    u = Decimal(p["u_columna_M63"])
    tamaños = p["tamanos_grupos_2u"]
    valores = sorted(Decimal(v) for v in extra["d_f_grupo_central"])
    internos = [b - a for a, b in zip(valores, valores[1:])]
    cortes = len(tamaños) - 1
    if (tamaños != [1, 4, 24, 1] or len(valores) != 24 or u <= 0
            or any(g > 2 * u for g in internos)
            or p["control_M66_conteo_mayor_u_total"] != cortes + sum(g > u for g in internos)):
        raise ValueError("La partición o los controles no permiten esta derivación M-66/M-72")
    central = medir(extra["nodos_grupo_central"], extra["d_f_grupo_central"], u, posibilidades, limite)
    entre_grupos = sum(a * b for a, b in combinations(tamaños, 2))
    base = central["comparables"] + entre_grupos
    resultado = {
        "u_semiancho": str(u),
        "tamanos_grupos": tamaños,
        "pares_posibles": sum(tamaños) * (sum(tamaños) - 1) // 2,
        "comparables_entre_grupos": entre_grupos,
        "comparables_en_grupo_central": central["comparables"],
        "comparables_totales_cota": [base, base + 1],
        "adyacentes_comparables": cortes,
        "altura_cota": [central["altura"] + 3, central["altura"] + 4],
        "anchura": max(central["anchura"], 4),
    }
    if posibilidades:
        e = central["ordenes_compatibles"]
        resultado["casos_ordenes_compatibles"] = [
            {"comparables": base, "ordenes_compatibles": 24 * e},
            {"comparables": base + 1, "ordenes_compatibles": 12 * e},
        ]
    return resultado


def json_exacto(valor):
    """Preserva los conteos de órdenes en lectores limitados a IEEE 754."""
    if isinstance(valor, dict):
        return {k: str(v) if k.startswith("ordenes_") and type(v) is int else json_exacto(v)
                for k, v in valor.items()}
    if isinstance(valor, list):
        return [json_exacto(v) for v in valor]
    return valor


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("entrada", type=Path, help="JSON M-72, nodos y valores, o intervalos por nodo")
    parser.add_argument("--u", nargs="+", type=Decimal)
    parser.add_argument("--escala", nargs="+", type=Fraction,
                        help="Factores exactos para semianchos_base, p. ej. 0 1/3 1")
    parser.add_argument("--sha256", help="SHA-256 esperado de la entrada, si se conoce")
    parser.add_argument("--resumen", action="store_true", help="No incluir listas de nodos o aristas")
    parser.add_argument("--integrar-m66", action="store_true", help="Derivar cotas del conjunto de 30")
    parser.add_argument("--posibilidades", action="store_true", help="Contar órdenes totales compatibles")
    parser.add_argument("--fronteras", action="store_true", help="Enumerar todos los tramos de semiancho común")
    parser.add_argument("--orden", type=Path, help="JSON con la permutación de nombres para calcular su semiancho mínimo")
    parser.add_argument("--limite-estados", type=int, default=LIMITE_ESTADOS,
                        help="Máximo de estados por conteo exacto")
    args = parser.parse_args()
    if args.limite_estados < 1:
        parser.error("--limite-estados debe ser positivo")
    try:
        raw = args.entrada.read_bytes()
        sha = hashlib.sha256(raw).hexdigest()
        if args.sha256 and sha != args.sha256.lower():
            parser.error(f"SHA-256 distinto: {sha}")
        obj = json.loads(raw, parse_float=Decimal)
        if "semianchos_base" in obj:
            if args.u is not None or args.integrar_m66:
                parser.error("Para semianchos_base usa --escala, sin --integrar-m66")
            orden = json.loads(args.orden.read_bytes()) if args.orden else None
            salida = perfil_escala(obj["nodos"], list(map(Fraction, obj["valores"])),
                                   list(map(Fraction, obj["semianchos_base"])),
                                   args.escala or [Fraction(0), Fraction(1)], args.fronteras,
                                   orden, args.posibilidades, args.limite_estados)
            salida["sha256_entrada"] = sha
            imprimir(salida, args.resumen)
            return
        if args.escala is not None:
            parser.error("--escala necesita la clave semianchos_base en la entrada")
        if "intervalos" in obj:
            if args.u is not None or args.fronteras or args.orden:
                parser.error("--u, --fronteras y --orden no se aplican a intervalos fijos")
            resultados = [medir_intervalos([
                (r["nodo"], Decimal(r["inferior"]), Decimal(r["superior"]))
                for r in obj["intervalos"]], args.posibilidades, args.limite_estados)]
        else:
            if "extra" in obj:
                nombres = obj["extra"]["nodos_grupo_central"]
                valores = obj["extra"]["d_f_grupo_central"]
            else:
                nombres, valores = obj["nodos"], obj["valores"]
            escenarios = args.u or list(map(Decimal, ("0.0554", "0.0604", "0.0654")))
            valores = [Decimal(v) for v in valores]
            resultados = [medir(nombres, valores, u, args.posibilidades, args.limite_estados)
                          for u in escenarios]
        salida = {"sha256_entrada": sha, "resultados": resultados}
        if args.fronteras:
            salida["fronteras_semiancho_comun"] = fronteras(nombres, valores, args.posibilidades,
                                                           args.limite_estados)
        if args.orden:
            salida["umbral_del_orden"] = umbral_orden(nombres, valores, json.loads(args.orden.read_bytes()))
        if args.integrar_m66:
            salida["integracion_m66_m72"] = integrar_m66(obj, args.posibilidades, args.limite_estados)
    except (OSError, KeyError, TypeError, ValueError, ArithmeticError, RecursionError) as exc:
        parser.error(str(exc))
    imprimir(salida, args.resumen)


def imprimir(salida, resumen):
    if resumen:
        for entrada in salida["resultados"]:
            for k in ("malla", "cadena_maxima", "anticadena_maxima", "rangos_posicion"):
                del entrada[k]
    print(json.dumps(json_exacto(salida), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
