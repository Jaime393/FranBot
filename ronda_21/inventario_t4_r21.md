# INVENTARIO T-4 — RONDA 21 (F9 PODA, dentro del frente)

- **Herramienta:** `_inventario_r21.py` (adaptado de `_inventario_r20.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r21.json`; diff `_diff_inventario_r21.py` → `diff_inventario_r21.md`.
- **Escaneo:** 2026-11-15T19:46:21Z. Solo lectura. Instantánea de FASE 1 r21 (F2/F3/F5/F6 cerradas; F7/F4/F1 escribiendo en paralelo en `ronda_21/`; el manifiesto es el estado a la hora del escaneo, no un cierre).
- **Base r20:** 6.221 entradas (escaneo 2026-11-15T07:53:18Z).

## Resultado

| Métrica | r20 | r21 | Δ |
|---|---|---|---|
| Archivos | 6.221 | **6.517** | +296 |
| Bytes | 1.603.968.988 | **1.622.894.997** | +18.926.009 |
| Errores de lectura | 0 | **0** | — |

## Diff vs r20

- **OK (mismo sha + tamaño): 6.217**
- **CAMBIO (misma ruta, distinto sha o tamaño): 4**
- **MOVIDO (mismo sha + tamaño, ruta distinta): 0**
- **FALTA (sin gemelo en r21): 0**
- **NUEVO (en r21, no en r20): 296**

### CAMBIO (4, todos explicados)

| Ruta | r20 | r21 | Causa |
|---|---|---|---|
| `ronda_12/afirmaciones_pendientes.md` | 49.829 B, `7e2c0b18…` | 58.408 B, `20d0f8ac…` | FASE 5 r20 (principal): N-28/N-29/N-30 + C-1198..C-1202 APLICADAS; §§32–34 nuevas (+ CORR-CONTEO-APLICADAS-R20) + cierre de pendientes §35 (7 cerrados por orden 2026-11-15 ~14:24 -05; 0 pendientes) |
| `memoria/anexo-vi/claims.jsonl` | 999.657 B, `33a7f0e6…` | 1.005.348 B, `7c689fef…` | Absorción automática r20 post-FASE 4 (N-28/N-29/N-30 + C-1198..C-1202): 1.192 → 1.197 líneas |
| `memoria/anexo-vi/claims_resumen.json` | 17.678 B, `315fd22b…` | 17.794 B, `443d940f…` | Regenerado (total 1.197, SE 1063, hash_real 1183) |
| `memoria/anexo-vi/provenance.sha256` | 49.476 B, `82d39f15…` | 49.869 B, `f1932a5e…` | 370 → 373 líneas (3 entradas de la absorción r20; CORR-PROV-R17: 371 entradas + 2 vacías internas) |

Ningún CAMBIO es una desaparición ni una corrupción: los 4 son trabajo documentado de FASE 5 r20, del cierre de pendientes 2026-11-15 y de la absorción automática r20.

### MOVIDO: 0

Ningún archivo cambió de ruta entre r20 y r21.

### FALTA: 0

- Los 4 `testA–D.err` **NO reaparecieron** (0 en el manifiesto r21, siguen ausentes, sin tercer evento FRÁGIL-02). Los 3 `.err` de F4 r19 (`drive_busqueda_Panteon_r19.err`, `drive_busqueda_Voces_r19.err`, `drive_busqueda_graph_r19.err`) son preexistentes, registros de búsqueda de F4 sin relación con FRÁGIL-02. El único `.err` nuevo del escaneo, `ronda_21/ejecucion_f4/indice_doc_meta_r21.err` (0 B), ya no está en disco a la hora de escribir (desaparecido tras el escaneo, causa NO_SÉ; CORR-ERR-R21 en `poda_r21.md` §9). El único `.err` con "test" preexistente sigue siendo `ronda_11/ejecucion_f6/_hb_test_get.err`, sin relación con FRÁGIL-02. Ningún archivo del manifiesto r20 falta. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda. Total `.err` en el manifiesto r21: 18.

### NUEVO (296, todos dentro de ronda_20/ o ronda_21/)

| Directorio | N |
|---|---|
| `ronda_20/README_r20.md` | 1 |
| `ronda_20/absorcion/` | 12 |
| `ronda_20/deposito/` (P-67) | 18 |
| `ronda_20/ejecucion_f1/` | 2 |
| `ronda_20/ejecucion_f4/` | 2 |
| `ronda_20/ejecucion_f7/` | 13 |
| `ronda_20/ejecucion_f8/` | 5 |
| `ronda_20/ejecucion_f9/` | 12 |
| `ronda_20/ejecucion_fase3/` | 7 |
| `ronda_20/ejecucion_fase5/` | 2 |
| `ronda_20/respaldo_pre_absorcion_r20/` (P-66) | 8 |
| `ronda_20/verificacion_fase2/` | 11 |
| `ronda_21/ESTADO_FASE0.md` | 1 |
| `ronda_21/frentes_r21.json` | 1 |
| `ronda_21/manifiesto_shas_r21_fase0.json` | 1 |
| `ronda_21/mapa_frentes_r21.md` | 1 |
| `ronda_21/ejecucion_f1/` | 4 |
| `ronda_21/ejecucion_f2/` | 132 |
| `ronda_21/ejecucion_f3/` | 12 |
| `ronda_21/ejecucion_f4/` | 14 |
| `ronda_21/ejecucion_f5/` | 2 |
| `ronda_21/ejecucion_f6/` | 16 |
| `ronda_21/ejecucion_f7/` | 11 |
| `ronda_21/ejecucion_f9/` | 8 |

Todos explicados por trabajo posterior al escaneo r20 (FASE 2/3/4 r20, absorción automática r20, FASE 5 r20, cierre de pendientes 2026-11-15, FASE 0/FASE 1 r21). Ningún archivo nuevo fuera del tejido. Detalle completo en `diff_inventario_r21.md` (lista de los 296 con tamaño y sha).

### Censo `.pyc`: r20 18 → r21 18 (nuevos 0, faltan 0)

Ningún `.pyc` nuevo en esta ronda; `variograma.pyc` sigue ausente (no está en el manifiesto r21).
