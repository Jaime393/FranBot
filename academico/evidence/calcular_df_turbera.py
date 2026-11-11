#!/usr/bin/env python3
"""D_f por DFA sobre la serie de profundidad del testigo de turba Glen Carron (PANGAEA 927872).
Entrada: academico/evidence/turbera/glen_carron_geochem.tsv (Anderson 2021, PANGAEA,
DOI 10.1594/PANGAEA.927872; 1241 puntos; Depth, DBD, TC, TN vs profundidad 0.04-3.68 m).
Metodo: DFA (Detrended Fluctuation Analysis, Peng et al. 1994) sobre cada serie 1D
ordenada por profundidad: se integra la serie centrada, se divide en ventanas de
tamano s, se elimina la tendencia lineal en cada ventana, se calcula la fluctuacion
RMS F(s); H = pendiente de log F vs log s; D_f = 2 - H (dimension fractal de la serie).
Sin red, sin claves, solo lectura local."""
import numpy as np, json, os, sys

TSV = os.path.join(os.path.dirname(__file__), 'turbera', 'glen_carron_geochem.tsv')

def leer_series(path):
    rows = []
    with open(path) as f:
        lines = f.readlines()
    hdr = None
    for i, ln in enumerate(lines):
        if ln.startswith('Depth sed'):
            hdr = ln.rstrip('\n').split('\t')
            start = i + 1
            break
    for ln in lines[start:]:
        if not ln.strip():
            continue
        parts = ln.rstrip('\n').split('\t')
        if len(parts) < 5:
            continue
        try:
            rows.append([float(x) for x in parts[:5]])
        except ValueError:
            continue
    arr = np.array(rows)
    return hdr, arr

def dfa(x, sizes):
    x = x - x.mean()
    y = np.cumsum(x)
    F = []
    for s in sizes:
        n = len(y) // s
        if n < 2:
            F.append(np.nan); continue
        yy = y[:n * s].reshape(n, s)
        t = np.arange(s)
        # eliminar tendencia lineal por ventana
        A = np.vstack([t, np.ones(s)]).T
        coef, *_ = np.linalg.lstsq(A, yy.T, rcond=None)
        trend = (A @ coef).T
        F.append(float(np.sqrt(np.mean((yy - trend) ** 2))))
    return np.array(F)

if __name__ == '__main__':
    hdr, arr = leer_series(TSV)
    print(f'filas={len(arr)} columnas={hdr}', file=sys.stderr)
    sizes = np.unique(np.logspace(np.log10(8), np.log10(90), 10).astype(int))
    out = {'fuente': 'https://doi.org/10.1594/PANGAEA.927872',
           'dataset': 'Geochemistry of Glen Carron peat core from Wales (Anderson 2021, PANGAEA)',
           'n_filas': int(len(arr)), 'dataset_D_f': 1.91, 'series': {}}
    for j, nombre in enumerate(['Depth', 'Samp_thick', 'DBD', 'TC', 'TN']):
        if j == 0 or j == 1:
            continue
        x = arr[:, j]
        x = x[np.isfinite(x)]
        F = dfa(x, sizes)
        mask = np.isfinite(F) & (F > 0)
        lx = np.log(sizes[mask]); ly = np.log(F[mask])
        H = float(np.polyfit(lx, ly, 1)[0])
        pred = np.polyval([H, np.polyfit(lx, ly, 1)[1]], lx)
        r2 = 1 - np.sum((ly - pred) ** 2) / np.sum((ly - ly.mean()) ** 2)
        out['series'][nombre] = {'H': round(H, 4), 'D_f_2_menos_H': round(2 - H, 4),
                                 'R2': round(float(r2), 4), 'n_puntos': int(len(x))}
    print(json.dumps(out, indent=1, ensure_ascii=False))
