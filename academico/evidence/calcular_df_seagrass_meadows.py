#!/usr/bin/env python3
"""D_f 2D por box-counting sobre las praderas marinas GBR como areas rellenas (Coles et al. 2016).
Entrada: academico/evidence/seagrass_gbr/meadows/commondata/gda94/NESP_MEADOWS_FINAL_GBRWHA.shp
(eAtlas, UUID 77998615-bbab-4270-bcb1-96c46f56f85a; 1.169 praderas, 1984-2014).
Metodo: se leen los poligonos del .shp con struct puro; proyeccion equirectangular a km;
relleno por scanline: una celda esta ocupada si su centro cae dentro de alguna pradera;
box-counting 2D con tamanos log-espaciados; D_f = pendiente de log N vs log(1/eps).
Se reporta el ajuste en todo el rango y en el regimen fino (eps 0.5-5 km, donde las
praderas se ven como areas). Sin red, sin claves, solo lectura local."""
import struct, math, os, json, sys
import numpy as np

SHP = os.path.join(os.path.dirname(__file__), 'seagrass_gbr', 'meadows', 'commondata', 'gda94',
                   'NESP_MEADOWS_FINAL_GBRWHA.shp')

def leer_poligonos(path):
    with open(path, 'rb') as f:
        data = f.read()
    assert data[:4] == b'\x00\x00\x27\x0a', 'no es un .shp valido'
    rings = []
    off = 100
    n_poly = 0
    while off + 44 <= len(data):
        rec_no, content_len = struct.unpack('>ii', data[off:off+8])
        st = struct.unpack('<i', data[off+8:off+12])[0]
        if st != 5:
            off += 8 + content_len * 2
            continue
        n_poly += 1
        # contenido poligono: ShapeType(4) + Box(32) + NumParts(4) + NumPoints(4) + Parts + Points
        nparts, npoints = struct.unpack('<ii', data[off+44:off+52])
        parts = struct.unpack('<%di' % nparts, data[off+52:off+52+4*nparts])
        pts_off = off + 52 + 4 * nparts
        pts = np.array(struct.unpack('<%dd' % (2 * npoints), data[pts_off:pts_off+16*npoints])).reshape(-1, 2)
        for i in range(nparts):
            a = parts[i]; b = parts[i+1] if i+1 < nparts else npoints
            rings.append(pts[a:b])
        off += 8 + content_len * 2
    return rings, n_poly

def contar_celdas(rings_km, eps, bbox):
    x0, y0, x1, y1 = bbox
    nx = max(1, int((x1 - x0) / eps)); ny = max(1, int((y1 - y0) / eps))
    xs = x0 + (np.arange(nx) + 0.5) * eps
    total = 0
    # aristas de todos los anillos
    EX1, EY1, EX2, EY2 = [], [], [], []
    for r in rings_km:
        EX1.append(r[:-1, 0]); EY1.append(r[:-1, 1]); EX2.append(r[1:, 0]); EY2.append(r[1:, 1])
    ex1 = np.concatenate(EX1); ey1 = np.concatenate(EY1); ex2 = np.concatenate(EX2); ey2 = np.concatenate(EY2)
    for j in range(ny):
        y = y0 + (j + 0.5) * eps
        m = ((ey1 <= y) & (ey2 > y)) | ((ey2 <= y) & (ey1 > y))
        if not m.any():
            continue
        xi = ex1[m] + (y - ey1[m]) * (ex2[m] - ex1[m]) / (ey2[m] - ey1[m])
        xi.sort()
        # intervalos por pares (regla par-impar)
        for k in range(0, len(xi) - 1, 2):
            total += int(np.sum((xs >= xi[k]) & (xs <= xi[k+1])))
    return total

if __name__ == '__main__':
    rings, n_poly = leer_poligonos(SHP)
    lat_med = math.radians(np.concatenate([r[:, 1] for r in rings]).mean())
    rings_km = []
    for r in rings:
        rings_km.append(np.column_stack((r[:, 0] * 111.32 * math.cos(lat_med), r[:, 1] * 110.57)))
    allpts = np.concatenate(rings_km)
    bbox = (allpts[:, 0].min(), allpts[:, 1].min(), allpts[:, 0].max(), allpts[:, 1].max())
    n_vert = sum(len(r) for r in rings_km)
    print(f'poligonos={n_poly} anillos={len(rings_km)} vertices={n_vert} bbox_km={np.round([bbox[2]-bbox[0], bbox[3]-bbox[1]],1)}', file=sys.stderr)
    sizes = np.array([0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256], dtype=float)
    counts = np.array([contar_celdas(rings_km, e, bbox) for e in sizes])
    print('eps_km:', sizes.tolist(), file=sys.stderr)
    print('N:', counts.tolist(), file=sys.stderr)
    def fit(mask, label):
        x = np.log(1.0 / sizes[mask]); y = np.log(counts[mask])
        c = np.polyfit(x, y, 1)
        pred = np.polyval(c, x)
        r2 = 1 - np.sum((y - pred) ** 2) / np.sum((y - y.mean()) ** 2)
        return {'regimen': label, 'D_f': round(float(c[0]), 4), 'R2': round(float(r2), 4),
                'n_escalas': int(mask.sum()), 'eps_km': [round(float(s), 2) for s in sizes[mask]]}
    mask_all = (counts > 1)
    mask_fino = (sizes <= 5) & (counts > 1)
    out = {'fuente': 'https://eatlas.org.au/data/uuid/77998615-bbab-4270-bcb1-96c46f56f85a',
           'archivo': 'NESP_MEADOWS_FINAL_GBRWHA.shp (1.169 praderas)',
           'n_poligonos': n_poly, 'n_vertices': int(n_vert), 'dataset_D_f': 2.03,
           'ajustes': [fit(mask_all, 'todo_rango'), fit(mask_fino, 'fino_0.5-5km')]}
    print(json.dumps(out, indent=1, ensure_ascii=False))
