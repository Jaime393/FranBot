# INVENTARIO T-4 — RONDA 23 (F9 PODA, dentro del frente)

- **Herramienta:** `_inventario_r23.py` (adaptado de `_inventario_r22.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r23.json`; diff `_diff_inventario_r23.py` → `diff_inventario_r23.md`.
- **Escaneo:** 2026-11-16T20:00:34Z. Solo lectura. Instantánea de FASE 1 r23 (F2/F3/F5/F6 cerradas; F7/F4/F1 escribiendo en paralelo en `ronda_23/`; el manifiesto es el estado a la hora del escaneo, no un cierre).
- **Base r22:** 6.805 entradas (escaneo 2026-11-16T08:27:15Z).

## Resultado

| Métrica | r22 | r23 | Δ |
|---|---|---|---|
| Archivos | 6.805 | **7.203** | +398 |
| Bytes | 1.651.054.424 | **1.660.913.715** | +9.859.291 |
| Errores de lectura | 0 | **0** | — |

## Diff vs r22

- **OK (mismo sha + tamaño): 6.801**
- **CAMBIO (misma ruta, distinto sha o tamaño): 4**
- **MOVIDO (mismo sha + tamaño, ruta distinta): 0**
- **FALTA (sin gemelo en r23): 0**
- **NUEVO (en r23, no en r22): 398**

### CAMBIO (4, todos explicados)

| Ruta | r22 | r23 | Causa |
|---|---|---|---|
| `ronda_12/afirmaciones_pendientes.md` | 63.845 B, `47bcac93…` | 71.177 B, `1b595aac…` | FASE 5 r22 (principal): N-34/N-35 + C-1209..C-1212 APLICADAS; §37 nueva |
| `memoria/anexo-vi/claims.jsonl` | 1.012.350 B, `fb09179d…` | 1.017.701 B, `2ac47151…` | Absorción automática r22 post-FASE 4 (N-34/N-35 + C-1209..C-1212): 1.203 → 1.207 líneas |
| `memoria/anexo-vi/claims_resumen.json` | 17.878 B, `76312918…` | 17.934 B, `f183622a…` | Regenerado (total 1.207, SE 1073, hash_real 1193) |
| `memoria/anexo-vi/provenance.sha256` | 50.391 B, `b680af9d…` | 50.784 B, `ac91a28e…` | 377 → 380 líneas (3 entradas de la absorción r22; CORR-PROV-R17: 378 entradas + 2 vacías internas) |

Ningún CAMBIO es una desaparición ni una corrupción: los 4 son trabajo documentado de FASE 5 r22 y de la absorción automática r22.

### MOVIDO: 0

Ningún archivo cambió de ruta entre r22 y r23.

### FALTA: 0

Ningún archivo del manifiesto r22 falta. Los `.err` de F4 r22 nunca entraron en ningún manifiesto (existían en disco ~08:25Z 2026-11-16 y ya no estaban en el escaneo T-4 r22, 08:27:15Z); los `.err` de F4 r23 (11) **SÍ están en el manifiesto r23** (presentes a la hora del escaneo, 20:00:34Z) — el flapeo se observa en ambas direcciones. Los 4 `testA–D.err` **NO reaparecieron** (0 en el manifiesto r23, siguen ausentes, sin evento nuevo FRÁGIL-02). Los 3 `.err` de F4 r19 (`drive_busqueda_Panteon_r19.err`, `drive_busqueda_Voces_r19.err`, `drive_busqueda_graph_r19.err`) son preexistentes, registros de búsqueda de F4 sin relación con FRÁGIL-02. El único `.err` con "test" preexistente sigue siendo `ronda_11/ejecucion_f6/_hb_test_get.err`, sin relación con FRÁGIL-02. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda. Total `.err` en el manifiesto r23: 28.

### NUEVO (398, todos dentro de ronda_22/ o ronda_23/)

| Directorio | N |
|---|---|
| `ronda_22/absorcion/` | 13 |
| `ronda_22/deposito/` (P-73) | 19 |
| `ronda_22/ejecucion_f8/` | 8 |
| `ronda_22/ejecucion_f9/` | 10 |
| `ronda_22/evaluacion_github_drive/` | 1 |
| `ronda_22/fase2/` | 4 |
| `ronda_22/fase3/` | 8 |
| `ronda_22/fase5/` | 2 |
| `ronda_22/respaldo_pre_absorcion_r22/` (P-72) | 8 |
| `ronda_23/` (raíz) | 115 |
| `ronda_23/ejecucion_f1/` | 2 |
| `ronda_23/ejecucion_f2/` | 136 |
| `ronda_23/ejecucion_f3/` | 13 |
| `ronda_23/ejecucion_f4/` | 29 |
| `ronda_23/ejecucion_f5/` | 2 |
| `ronda_23/ejecucion_f6/` | 16 |
| `ronda_23/ejecucion_f7/` | 7 |
| `ronda_23/ejecucion_f9/` | 5 |

Todos explicados por trabajo posterior al escaneo r22 (FASE 2/3/4 r22, absorción automática r22, FASE 5 r22, subida del corpus a GitHub, FASE 0/FASE 1 r23). Ningún archivo nuevo fuera del tejido. La raíz de `ronda_23/` incluye los 101 payloads huérfanos de heartbeat (P-75, duplicado del registro canónico P-74).

### Censo .pyc: r22 19 → r23 19 (nuevos 0, faltan 0)

- 0 `.pyc` nuevos; 0 faltan.
- `variograma.pyc` sigue ausente (no está en el manifiesto r23).
