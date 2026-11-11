#!/usr/bin/env python3
"""D_f 3D por box-counting sobre la estructura 3J6F (microtubulos, PDB).
Entrada: academico/evidence/microtubulos/3J6F.pdb (RCSB, Alushin et al. 2014, Cell 157:1117).
Metodo: atomos CA (traza del esqueleto, estandar para dimension fractal de proteinas);
box-counting 3D con tamanos log-espaciados; D_f = pendiente de log N vs log(1/eps).
Tambien se calcula con todos los atomos pesados (ATOM, sin H) como contraste.
Sin red, sin claves, solo lectura local. Salida en stdout (JSON)."""
import numpy as np, json, sys, os

PDB = os.path.join(os.path.dirname(__file__), 'microtubulos', '3J6F.pdb')

def leer_coords(path, solo_ca=True):
    pts = []
    with open(path) as f:
        for line in f:
            if not line.startswith('ATOM'):
                continue
            nombre = line[12:16].strip()
            if solo_ca and nombre != 'CA':
                continue
            if not solo_ca and nombre.startswith('H'):
                continue
            x, y, z = float(line[30:38]), float(line[38:46]), float(line[46:54])
            pts.append((x, y, z))
    return np.array(pts)

def box_counting_3d(coords, sizes):
    counts = []
    for eps in sizes:
        idx = np.floor(coords / eps).astype(np.int64)
        n = len(np.unique(idx, axis=0))
        counts.append(n)
    return np.array(counts)

def df_fit(coords, label):
    ext = coords.max(axis=0) - coords.min(axis=0)
    print(f'{label}: n={len(coords)} puntos, extension={np.round(ext,1)} A', file=sys.stderr)
    lo, hi = 1.0, min(ext) / 2.0
    sizes = np.logspace(np.log10(lo), np.log10(hi), 12)
    counts = box_counting_3d(coords, sizes)
    x = np.log(1.0 / sizes); y = np.log(counts)
    # ajuste solo donde N no esta saturado (N < n y N > 1)
    mask = (counts < len(coords)) & (counts > 1)
    coef = np.polyfit(x[mask], y[mask], 1)
    pred = np.polyval(coef, x[mask])
    ss_res = float(np.sum((y[mask] - pred) ** 2)); ss_tot = float(np.sum((y[mask] - y[mask].mean()) ** 2))
    r2 = 1 - ss_res / ss_tot
    return {'label': label, 'n_puntos': int(len(coords)), 'D_f': round(float(coef[0]), 4),
            'R2': round(float(r2), 4), 'n_escalas_ajuste': int(mask.sum()),
            'eps_min': round(float(sizes[mask][0]), 2), 'eps_max': round(float(sizes[mask][-1]), 2),
            'extension_A': [round(float(v), 1) for v in ext]}

if __name__ == '__main__':
    ca = leer_coords(PDB, solo_ca=True)
    all_at = leer_coords(PDB, solo_ca=False)
    out = {'fuente': 'https://files.rcsb.org/download/3J6F.pdb',
           'estructura': 'MINIMIZED AVERAGE STRUCTURE OF GDP-BOUND DYNAMIC MICROTUBULES (Alushin et al. 2014, Cell 157:1117)',
           'resultados': [df_fit(ca, 'CA'), df_fit(all_at, 'todos_atomos_pesados')],
           'dataset_D_f': 2.50}
    print(json.dumps(out, indent=1, ensure_ascii=False))
