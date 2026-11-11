"""Periodo dominante de la serie C20 (GRACE TN-14 V3) — ciclo 38.

Stdlib only. Carga hidden_files/drive_ciclo34/grace_tn14_v3.json,
usa la columna c20_value (real; la columna lod es sintética y la
columna c20_minus_mean es inconsistente — ciclo 34).

Métodos:
  - parse_celda: misma regla verificada del ciclo 34 (mantisa con
    puntos de miles; decimal tras el primer dígito; ×1e-4).
  - detrending: resta de la media + resta de tendencia lineal.
  - autocorrelación: lags 1..60 meses, normalizada por lag 0.
  - DFT: potencia |X(f)|² para periodos 2..60 meses (frecuencias
    k/N, N=281). El periodo dominante es el de mayor potencia
    (excluyendo la tendencia, ya restada).

Uso: python3 c20_periodo.py
"""
import json
import math
import sys

RUTA = "hidden_files/drive_ciclo34/grace_tn14_v3.json"


def parse_celda(txt):
    txt = str(txt).strip()
    if not txt:
        return None
    neg = txt.startswith("-")
    txt = txt.lstrip("+-").replace(".", "")
    mantisa = float(txt[0] + "." + txt[1:])
    return -mantisa if neg else mantisa


def cargar(ruta=RUTA):
    d = json.load(open(ruta, encoding="utf-8"))
    filas = d["values"][1:]
    fechas, c20 = [], []
    for f in filas:
        v = parse_celda(f[3])
        if v is None:
            continue
        fechas.append(f[0])
        c20.append(v * 1e-4)
    return fechas, c20


def detrend(x):
    n = len(x)
    media = sum(x) / n
    # tendencia lineal por mínimos cuadrados
    sx = sum(range(n))
    sxx = sum(i * i for i in range(n))
    sxy = sum(i * (v - media) for i, v in enumerate(x))
    den = n * sxx - sx * sx
    b = (n * sxy - sx * sum(v - media for v in x)) / den if den else 0.0
    a = media - b * (sx / n)
    return [v - (a + b * i) for i, v in enumerate(x)]


def autocorr(x, max_lag=60):
    n = len(x)
    media = sum(x) / n
    var = sum((v - media) ** 2 for v in x)
    out = []
    for lag in range(1, max_lag + 1):
        cov = sum((x[i] - media) * (x[i + lag] - media)
                  for i in range(n - lag))
        out.append((lag, cov / var))
    return out


def dft_periodos(x, min_p=2, max_p=60):
    n = len(x)
    res = []
    for p in range(min_p, max_p + 1):
        f = 1.0 / p
        re = sum(v * math.cos(-2 * math.pi * f * i) for i, v in enumerate(x))
        im = sum(v * math.sin(-2 * math.pi * f * i) for i, v in enumerate(x))
        res.append((p, (re * re + im * im) / n))
    res.sort(key=lambda t: -t[1])
    return res


def main():
    fechas, c20 = cargar()
    n = len(c20)
    media = sum(c20) / n
    desv = math.sqrt(sum((v - media) ** 2 for v in c20) / n)
    print(f"n={n} fechas {fechas[0]} a {fechas[-1]}")
    print(f"c20 media={media:.15e} desv={desv:.3e} "
          f"min={min(c20):.15e} max={max(c20):.15e}")
    x = detrend(c20)
    ac = autocorr(x)
    print("autocorrelación (lag meses, r) top 5:")
    for lag, r in sorted(ac, key=lambda t: -t[1])[:5]:
        print(f"  lag {lag}: r={r:.4f}")
    print("autocorrelación en lags 6/12/24:")
    for lag, r in ac:
        if lag in (6, 12, 24):
            print(f"  lag {lag}: r={r:.4f}")
    esp = dft_periodos(x)
    print("DFT potencia top 5 (periodo meses, potencia):")
    for p, pot in esp[:5]:
        print(f"  P={p} meses: {pot:.3e}")
    print(f"periodo dominante DFT: {esp[0][0]} meses")
    return 0


if __name__ == "__main__":
    sys.exit(main())
