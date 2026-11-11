#!/usr/bin/env python3
"""D_f 2D por box-counting sobre los sitios de muestreo de praderas marinas GBR (Coles et al. 2016).
Entrada: academico/evidence/seagrass_gbr/GBR_NESP-TWQ-3-1_JCU_Seagrass_1984-2014_Site-surveys.shp
(eAtlas, UUID 77998615-bbab-4270-bcb1-96c46f56f85a, NESP TWQ 3.1, TropWATER JCU, 1984-2014).
Metodo: se leen los puntos (lon, lat) del .shp con struct puro (sin librerias GIS);
proyeccion equirectangular a km (x = lon*111.32*cos(lat_media), y = lat*110.57);
box-counting 2D con tamanos log-espaciados; D_f = pendiente de log N vs log(1/eps).
Sin red, sin claves, solo lectura local."""
import struct, math, os, json, sys
import numpy as np

SHP = os.path.join(os.path.dirname(__file__), 'seagrass_gbr',
                   'GBR_NESP-TWQ-3-1_JCU_Seagrass_1984-2014_Site-surveys.shp')

def leer_puntos_shp(path):
    with open(path, 'rb') as f:
        data = f.read()
    assert data[:4] == b'\x00\x00\x27\x0a', 'no es un .shp valido'
    shape_type = struct.unpack('<i', data[32:36])[0]
    assert shape_type == 1, f'tipo de forma {shape_type}, se esperaba 1 (punto)'
    pts = []
    off = 100
    while off + 28 <= len(data):
        rec_no, content_len = struct.unpack('>ii', data[off:off+8])
        st = struct.unpack('<i', data[off+8:off+12])[0]
        if st == 1:
            x, y = struct.unpack('<dd', data[off+12:off+28])
            pts.append((x, y))
        off += 8 + content_len * 2
    return np.array(pts)

def box_counting_2d(coords, sizes):
    counts = []
    for eps in sizes:
        idx = np.floor(coords / eps).astype(np.int64)
        counts.append(len(np.unique(idx, axis=0)))
    return np.array(counts)

if __name__ == '__main__':
    lonlat = leer_puntos_shp(SHP)
    lat_med = math.radians(lonlat[:, 1].mean())
    xy = np.column_stack((lonlat[:, 0] * 111.32 * math.cos(lat_med),
                          lonlat[:, 1] * 110.57))
    ext = xy.max(axis=0) - xy.min(axis=0)
    print(f'puntos={len(xy)} lon=[{lonlat[:,0].min():.2f},{lonlat[:,0].max():.2f}] lat=[{lonlat[:,1].min():.2f},{lonlat[:,1].max():.2f}] extension_km={np.round(ext,1)}', file=sys.stderr)
    sizes = np.logspace(np.log10(0.5), np.log10(min(ext) / 2.0), 12)
    counts = box_counting_2d(xy, sizes)
    mask = (counts < len(xy)) & (counts > 1)
    x = np.log(1.0 / sizes[mask]); y = np.log(counts[mask])
    coef = np.polyfit(x, y, 1)
    pred = np.polyval(coef, x)
    r2 = 1 - np.sum((y - pred) ** 2) / np.sum((y - y.mean()) ** 2)
    out = {'fuente': 'https://eatlas.org.au/data/uuid/77998615-bbab-4270-bcb1-96c46f56f85a',
           'archivo': 'GBR_NESP-TWQ-3-1_JCU_Seagrass_1984-2014_Site-surveys.shp',
           'n_puntos': int(len(xy)), 'D_f': round(float(coef[0]), 4), 'R2': round(float(r2), 4),
           'n_escalas_ajuste': int(mask.sum()), 'eps_min_km': round(float(sizes[mask][0]), 3),
           'eps_max_km': round(float(sizes[mask][-1]), 1), 'dataset_D_f': 2.03}
    print(json.dumps(out, indent=1, ensure_ascii=False))
