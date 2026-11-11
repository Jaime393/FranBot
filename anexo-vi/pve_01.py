#!/usr/bin/env python3
"""PVE-01 — Validación de la Ley K_i sin D_f.

Fuente de la fórmula (copia literal, no inventada):
    Vault MIU, "00 Suelo_GRACE_Phi_PVE01.md"
    (Drive, exportado 2026-11-11, ciclo 33;
     ID 1gFjC6VYFJwS-HMEn2mormjFvCJxC2E6s0afwXXEEIa0)
    "PVE-01 — Validación sin D_f /
     Ki=1/(τ·Ξ·c) | T·1.618/(τ·Ξ·c) | T·tanh(τ·Ξ·c)
     solo τ ventana causal 90d + Ξ correlación causal
     I_causal/½Trκ_F sin D_f /
     * 48/48 nodos verificados τ·Ξ·c>1.618 Ki∈banda [0.55,0.62] /
     * Requiere para HUESO #31 circular R²=0.989 validación independiente"

Datos reales usados: serie GRACE TN-14 V3 (C20), 281 filas mensuales
2002-04-01 → 2025-08-01, leída de la hoja
MIU_V98_TN14_V3_2025_REAL_281_FILAS_RIGOR_EPISTEMICO_VALOR_REAL
(Drive, guardada en hidden_files/drive_ciclo34/grace_tn14_v3.json).

LIMITACIONES (honestas, no ocultas):
1. La constante c NO está definida en el documento fuente (ni valor
   ni unidades). El producto P = τ·Ξ·c que el documento reporta
   (rango [1.62, 2.014], mínimo 1.618) no se puede reproducir desde
   τ y Ξ sin fijar c. Este código calcula Ξ desde los datos, reporta
   P con c=1 y reporta el rango de c que haría caer P en el rango
   del documento. No calibra c para que el resultado encaje.
2. El estimador de Ξ es una ELECCIÓN OPERACIONAL documentada aquí:
   autocorrelación a lag τ (3 meses) de la serie C20 sin tendencia.
   El documento define Ξ = I_causal / ½Trκ_F, pero no da el
   procedimiento de cálculo. La autocorrelación es el proxy causal
   más simple y reproducible; no es la definición del documento.
3. La afirmación "48/48 nodos verificados" del documento NO tiene
   artefacto (ni script, ni datos, ni hash, ni log) — ciclo 33.
   Este código NO la verifica ni la reproduce.
4. La columna c20_minus_mean_1e-10 de la hoja NO es consistente con
   (c20 - media de la hoja): error medio 3.74e-10, máx 9.71e-10.
   Se usa SOLO la columna c20_value.
5. La columna lod_ms de la hoja es SINTÉTICA (lod_source lo dice:
   "IERS_EOP_C04_synthetic_correlated..."). Nunca se usa.
6. Regla de parseo de la hoja (verificada ciclo 34): las celdas son
   mantisas de texto con puntos como separadores de miles. Se quita
   el signo, se eliminan TODOS los puntos, se pone el decimal tras
   el primer dígito; c20_value × 1e-4, c20_minus_mean × 1e-10.
   Verificado: media c20 = -0.000484169462243557 (281 valores).

Comparación con D_f (issue MIU #52, verificado en vivo):
    K_i_con_Df = 0.2472 · D_f
    D_f = 2.0 (CSV corales, #48) → K_i = 0.494
    D_f = 2.5 (divisor del documento) → K_i = 0.618

Uso:
    python3 pve_01.py            # demo con datos sintéticos
    python3 pve_01.py <ruta.json>  # ejecuta sobre la serie GRACE V3
"""

import json
import math
import random
import sys

# --- Constantes del documento fuente ---------------------------------------
T = 0.618            # "T 0.618 techo"
INV_T = 1.618        # 1/T según el documento (0.618 * 1.618 = 0.999924)
BANDA_KI = (0.55, 0.62)
P_MIN_DOC = 1.618    # τ·Ξ·c mínimo según el documento
P_RANGO_DOC = (1.62, 2.014)   # rango verificado según el documento
KI_MEAN_DOC = 0.585  # Ki medio según el documento
TAU_DIAS = 90        # ventana causal 90 días
LAG_MESES = 3        # 90 días ≈ 3 pasos mensuales
KI_POR_DF = 0.2472   # K_i = 0.2472 · D_f (MIU #52, verificado en vivo)


# --- Las 3 formas candidatas (copia literal del Vault) ---------------------
def forma_1(P):
    """Ki = 1 / (τ·Ξ·c)."""
    return 1.0 / P


def forma_2(P):
    """Ki = T · 1.618 / (τ·Ξ·c)."""
    return T * INV_T / P


def forma_3(P):
    """Ki = T · tanh(τ·Ξ·c)."""
    return T * math.tanh(P)


FORMAS = {"1": forma_1, "2": forma_2, "3": forma_3}


def ki_con_df(d_f):
    """K_i con D_f, ruta circular (MIU #52)."""
    return KI_POR_DF * d_f


# --- Parseo de la hoja GRACE V3 (regla verificada ciclo 34) ----------------
def parse_celda(texto, escala):
    """Mantisa de texto con puntos como separadores de miles.

    Quita el signo, elimina todos los puntos, decimal tras el primer
    dígito; multiplica por la escala (1e-4 para c20_value,
    1e-10 para c20_minus_mean_1e-10).
    """
    s = str(texto).strip()
    if not s:
        return None
    signo = -1.0 if s.startswith("-") else 1.0
    digitos = s.lstrip("+-").replace(".", "").replace(",", "")
    if not digitos.isdigit():
        return None
    mantisa = float(digitos[0] + "." + digitos[1:]) if len(digitos) > 1 else float(digitos)
    return signo * mantisa * escala


def cargar_grace_json(ruta):
    """Lee el JSON guardado de la hoja TN-14 V3. Devuelve [(fecha, c20)]."""
    with open(ruta, "r", encoding="utf-8") as f:
        doc = json.load(f)
    filas = doc["values"]
    cabecera = filas[0]
    i_fecha = cabecera.index("date")
    i_c20 = cabecera.index("c20_value")
    serie = []
    for fila in filas[1:]:
        if len(fila) <= i_c20:
            continue
        v = parse_celda(fila[i_c20], 1e-4)
        if v is not None:
            serie.append((fila[i_fecha], v))
    return serie


# --- Estimador operacional de Ξ --------------------------------------------
def _sin_tendencia(valores):
    """Resta el ajuste lineal (mínimos cuadrados, stdlib)."""
    n = len(valores)
    xs = list(range(n))
    mx = sum(xs) / n
    my = sum(valores) / n
    num = sum((x - mx) * (y - my) for x, y in zip(xs, valores))
    den = sum((x - mx) ** 2 for x in xs)
    pendiente = num / den if den else 0.0
    return [y - (my + pendiente * (x - mx)) for x, y in zip(xs, valores)]


def medir_xi(serie, lag=LAG_MESES):
    """Ξ operacional: autocorrelación a lag τ de la serie sin tendencia.

    Proxy causal documentado como elección operacional (ver cabecera,
    limitación 2). Devuelve un número en [-1, 1].
    """
    valores = _sin_tendencia([v for _, v in serie])
    n = len(valores)
    media = sum(valores) / n
    var = sum((v - media) ** 2 for v in valores)
    if var == 0:
        return 0.0
    cov = sum((valores[i] - media) * (valores[i + lag] - media)
              for i in range(n - lag))
    return cov / var


# --- Medición PVE-01 ---------------------------------------------------------
def medir_pve01(datos, forma="todas"):
    """Mide K_i sin D_f.

    datos: dict con "P" (producto τ·Ξ·c ya medido) o "serie"
        (lista de (fecha, valor) de la que se estima Ξ).
    forma: "1", "2", "3" o "todas".
    Devuelve dict con Xi, P (con c=1 si viene de serie), Ki por forma,
    en_banda por forma, y el rango de c compatible con el documento.
    """
    if "P" in datos:
        P = float(datos["P"])
        xi = datos.get("Xi")
        c_rango = None
    elif "serie" in datos:
        xi = medir_xi(datos["serie"])
        # P con c=1: τ en días × Ξ (unidades: días; ver limitación 1).
        P = TAU_DIAS * xi
        # c que haría caer P en el rango del documento: c = P_doc / (τ·Ξ).
        if xi and xi > 0:
            c_rango = (P_RANGO_DOC[0] / (TAU_DIAS * xi),
                       P_RANGO_DOC[1] / (TAU_DIAS * xi))
        else:
            c_rango = None
    else:
        raise ValueError("datos debe traer 'P' o 'serie'")

    formas_pedidas = FORMAS if forma == "todas" else {forma: FORMAS[forma]}
    ki = {k: fn(P) for k, fn in formas_pedidas.items()}
    en_banda = {k: BANDA_KI[0] <= v <= BANDA_KI[1] for k, v in ki.items()}
    return {"Xi": xi, "P_c1": P, "c_rango_doc": c_rango,
            "Ki": ki, "en_banda": en_banda}


def evaluar_rango_doc(forma="todas"):
    """Evalúa las 3 formas sobre el rango P del documento [1.62, 2.014]."""
    puntos = [P_RANGO_DOC[0],
              (P_RANGO_DOC[0] + P_RANGO_DOC[1]) / 2.0,
              P_RANGO_DOC[1]]
    formas_pedidas = FORMAS if forma == "todas" else {forma: FORMAS[forma]}
    out = {}
    for k, fn in formas_pedidas.items():
        vals = [fn(p) for p in puntos]
        out[k] = {"min": min(vals), "medio": sum(vals) / len(vals),
                  "max": max(vals),
                  "en_banda_todo_rango": all(BANDA_KI[0] <= v <= BANDA_KI[1]
                                             for v in vals)}
    return out


# --- Ejecución sobre GRACE real ----------------------------------------------
def ejecutar_grace(ruta):
    serie = cargar_grace_json(ruta)
    valores = [v for _, v in serie]
    n = len(valores)
    media = sum(valores) / n
    var = sum((v - media) ** 2 for v in valores) / n
    res = {
        "n": n,
        "primera_fecha": serie[0][0],
        "ultima_fecha": serie[-1][0],
        "c20_media": media,
        "c20_stdev": math.sqrt(var),
        "c20_min": min(valores),
        "c20_max": max(valores),
        "medicion": medir_pve01({"serie": serie}),
        "rango_doc": evaluar_rango_doc(),
        "ki_con_df_2.0": ki_con_df(2.0),
        "ki_con_df_2.5": ki_con_df(2.5),
    }
    # Diferencia: forma 3 (la única en banda en todo el rango del doc)
    # media sobre el rango doc vs K_i con D_f.
    ki3_medio = res["rango_doc"]["3"]["medio"]
    res["diferencia_pct_vs_df2.0"] = 100.0 * (ki3_medio - res["ki_con_df_2.0"]) / res["ki_con_df_2.0"]
    res["diferencia_pct_vs_df2.5"] = 100.0 * (ki3_medio - res["ki_con_df_2.5"]) / res["ki_con_df_2.5"]
    res["diferencia_pct_vs_doc"] = 100.0 * (ki3_medio - KI_MEAN_DOC) / KI_MEAN_DOC
    return res


def demo():
    """Datos sintéticos: serie mensual con tendencia + ciclo anual + ruido."""
    rng = random.Random(34)
    serie = []
    for i in range(120):
        v = -0.000484 + 0.00000002 * math.sin(2 * math.pi * i / 12.0) \
            + rng.gauss(0, 0.00000001)
        serie.append((f"2000-{(i % 12) + 1:02d}", v))
    med = medir_pve01({"serie": serie})
    print("DEMO sintética (120 meses, seno anual + ruido, semilla 34)")
    print(f"  Xi (autocorr lag 3, sin tendencia) = {med['Xi']:.4f}")
    print(f"  P con c=1 (tau*Xi) = {med['P_c1']:.4f}")
    print(f"  c para caer en rango doc [1.62, 2.014] = {med['c_rango_doc']}")
    for k in ("1", "2", "3"):
        p_mid = sum(P_RANGO_DOC) / 2.0
        print(f"  forma {k} en P medio doc ({p_mid:.3f}): "
              f"Ki = {FORMAS[k](p_mid):.4f} "
              f"(banda [0.55, 0.62]: {'SÍ' if BANDA_KI[0] <= FORMAS[k](p_mid) <= BANDA_KI[1] else 'NO'})")
    print("  PVE-01 implementado, pendiente de datos reales para ejecución.")
    return med


def main(argv):
    if len(argv) == 1:
        demo()
        return 0
    res = ejecutar_grace(argv[1])
    print("PVE-01 — ejecución sobre GRACE TN-14 V3 (serie real)")
    print(f"  n = {res['n']} filas, {res['primera_fecha']} → {res['ultima_fecha']}")
    print(f"  c20 media = {res['c20_media']:.17g}")
    print(f"  c20 stdev = {res['c20_stdev']:.6g}  min = {res['c20_min']:.17g}  max = {res['c20_max']:.17g}")
    med = res["medicion"]
    print(f"  Xi medido (autocorr lag 3, sin tendencia) = {med['Xi']:.4f}")
    print(f"  P con c=1 (90 * Xi) = {med['P_c1']:.4f}")
    print(f"  c para caer en rango doc [1.62, 2.014] = "
          f"[{med['c_rango_doc'][0]:.6f}, {med['c_rango_doc'][1]:.6f}] /día")
    print("  Formas sobre el rango P del documento [1.62, 2.014]:")
    for k in ("1", "2", "3"):
        r = res["rango_doc"][k]
        print(f"    forma {k}: Ki min {r['min']:.4f} medio {r['medio']:.4f} "
              f"max {r['max']:.4f} — en banda en TODO el rango: "
              f"{'SÍ' if r['en_banda_todo_rango'] else 'NO'}")
    print(f"  Ki con D_f: D_f=2.0 → {res['ki_con_df_2.0']:.4f} ; "
          f"D_f=2.5 → {res['ki_con_df_2.5']:.4f}")
    print(f"  Forma 3 media ({res['rango_doc']['3']['medio']:.4f}) vs D_f=2.0: "
          f"{res['diferencia_pct_vs_df2.0']:+.1f}%")
    print(f"  Forma 3 media vs D_f=2.5: {res['diferencia_pct_vs_df2.5']:+.1f}%")
    print(f"  Forma 3 media vs Ki medio del doc (0.585): "
          f"{res['diferencia_pct_vs_doc']:+.1f}%")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
