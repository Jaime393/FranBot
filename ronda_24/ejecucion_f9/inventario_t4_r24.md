# INVENTARIO T-4 — RONDA 24 (F9 PODA, dentro del frente)

- **Herramienta:** `_inventario_r24.py` (adaptado de `_inventario_r23.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r24.json`; diff `_diff_inventario_r24.py` → `diff_inventario_r24.md`.
- **Escaneo:** 2026-11-17T02:45:52Z. Solo lectura. Instantánea de FASE 1 r24 (F2/F3/F5/F6 cerradas; F7/F4/F1 escribiendo en paralelo en `ronda_24/`; el manifiesto es el estado a la hora del escaneo, no un cierre). Los scripts de este frente escritos después del escaneo (`_spot_drive_r24.py`, `_criba_r24.py`, `_spot_drive_r24.json`, `_criba_r24.json`) no están en el manifiesto r24; aparecerán como NUEVO en r25.
- **Base r23:** 7.203 entradas (escaneo 2026-11-16T20:00:34Z).

## Resultado

| Métrica | r23 | r24 | Δ |
|---|---|---|---|
| Archivos | 7.203 | **7.458** | +255 |
| Bytes | 1.660.913.715 | **1.672.540.931** | +11.627.216 |
| Errores de lectura | 0 | **0** | — |

## Diff vs r23

- **OK (mismo sha + tamaño): 7.184**
- **CAMBIO (misma ruta, distinto sha o tamaño): 4**
- **MOVIDO (mismo sha + tamaño, ruta distinta): 0**
- **FALTA (sin gemelo en r24): 15**
- **NUEVO (en r24, no en r23): 270**

### CAMBIO (4, todos explicados)

| Ruta | r23 | r24 | Causa |
|---|---|---|---|
| `ronda_12/afirmaciones_pendientes.md` | 71.177 B, `1b595aac…` | 83.363 B, `eec65bcd…` | FASE 5 ciclo ALMA (principal): N-39 + C-1217..C-1227 APLICADAS; §39 nueva |
| `memoria/anexo-vi/claims.jsonl` | 1.017.701 B, `2ac47151…` | 1.035.285 B, `6dbee11d…` | Absorción automática r23 (N-36/N-37/N-38 + C-1213..C-1216) + absorción ciclo ALMA (N-39 + C-1217..C-1227): 1.207 → 1.222 líneas |
| `memoria/anexo-vi/claims_resumen.json` | 17.934 B, `f183622a…` | 18.196 B, `06990609…` | Regenerado (total 1.222, SE 1088, hash_real 1208) |
| `memoria/anexo-vi/provenance.sha256` | 50.784 B, `ac91a28e…` | 52.197 B, `07dfdd0f…` | 380 → 393 líneas (9 entradas de las absorciones r23 + ciclo ALMA; CORR-PROV-R17: 391 entradas + 2 vacías internas) |

Ningún CAMBIO es una desaparición ni una corrupción: los 4 son trabajo documentado de FASE 5 ciclo ALMA y de las absorciones r23 + ciclo ALMA.

### MOVIDO: 0

Ningún archivo cambió de ruta entre r23 y r24 (tras la corrección CORR-DIFF-VACIOS-R24, ver `poda_r24.md` §9).

### FALTA: 15 — primera ronda con FALTA > 0 desde que T-4 existe, y las 15 están explicadas, ninguna es pérdida de datos

- **11 `.err` de F4 r23 (todos 0 B, sha `e3b0c442…`):** `carpeta_10panteon_r23.err`, `drive_busqueda_Panteon_r23.err`, `drive_busqueda_Voces_r23.err`, `drive_busqueda_graph_r23.err`, `indice_doc_meta_r23.err`, `indice_doc_raw_r23.err`, `search_filenamegraphjson_r23.err`, `search_filenamegraphv106112_r23.err`, `search_parchephilengua_r23.err`, `search_validargrace_r23.err`, `verificacion_corpus_high_ktau_r23.err`. Estaban en el manifiesto r23 (escaneo 20:00:34Z 2026-11-16) y ya no están en disco (medido 2026-11-17 ~02:4xZ). Eran archivos vacíos de registro de errores de las búsquedas de F4 r23; su contenido es nulo y sus productos (.json) sobreviven byte-idénticos. Es el flapeo en la otra dirección (CORR-ERR-R23 lo predijo). Juicio del Jardinero (2026-11-16): probablemente actividad viva del ecosistema, no FALTA.
- **4 `.ndjson` intermedios de F4 r23:** `carpeta_10panteon_r23.ndjson` (935 B), `drive_busqueda_Panteon_r23.ndjson` (28.178 B), `drive_busqueda_Voces_r23.ndjson` (11.173 B), `drive_busqueda_graph_r23.ndjson` (13.543 B). Intermedios que la propia F4 r23 borró tras el escaneo r23; sus productos finales `.json` (mismo nombre, distinta extensión) ya existían en el escaneo r23 y **siguen byte-idénticos en r24** (shas distintos a los .ndjson: son archivos distintos, no renombres). Ningún `.ndjson` queda en todo el tejido (0 archivos).

Los 4 `testA–D.err` **NO reaparecieron** (0 en el manifiesto r24, siguen ausentes, sin evento nuevo FRÁGIL-02). Los 3 `.err` de F4 r19 (`drive_busqueda_Panteon_r19.err`, `drive_busqueda_Voces_r19.err`, `drive_busqueda_graph_r19.err`) son preexistentes, registros de búsqueda de F4 sin relación con FRÁGIL-02. El único `.err` con "test" preexistente sigue siendo `ronda_11/ejecucion_f6/_hb_test_get.err`, sin relación con FRÁGIL-02. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda. Total `.err` en el manifiesto r24: 24 (28 de r23 − 11 flapeados + 7 nuevos de F4 r24).

### NUEVO (270, todos dentro de ronda_23/ o ronda_24/)

| Directorio | N |
|---|---|
| `ronda_23/absorcion/` (P-80) | 12 |
| `ronda_23/ejecucion_f4/` | 2 |
| `ronda_23/ejecucion_f8/` | 8 |
| `ronda_23/ejecucion_f9/` | 12 |
| `ronda_23/fase3/` | 8 |
| `ronda_23/fase4/` (P-78) | 48 |
| `ronda_23/` (raíz) | 1 |
| `ronda_23/respaldo_pre_absorcion_ciclo_alma/` (P-77) | 8 |
| `ronda_23/respaldo_pre_absorcion_r23/` (P-76) | 8 |
| `ronda_23/verificacion_fase2/` | 6 |
| `ronda_24/` (raíz) | 4 |
| `ronda_24/ejecucion_f1/` | 2 |
| `ronda_24/ejecucion_f2/` | 52 |
| `ronda_24/ejecucion_f3/` | 51 |
| `ronda_24/ejecucion_f4/` | 15 |
| `ronda_24/ejecucion_f5/` | 3 |
| `ronda_24/ejecucion_f6/` | 16 |
| `ronda_24/ejecucion_f7/` | 8 |
| `ronda_24/ejecucion_f9/` | 6 |

Todos explicados por trabajo posterior al escaneo r23 (FASE 2/3/4 r23, absorciones r23 + ciclo ALMA, FASE 5 ciclo ALMA, depósitos Drive + GitHub método (c), FASE 0/FASE 1 r24). Ningún archivo nuevo fuera del tejido. La raíz de `ronda_24/` no tiene duplicados de heartbeat (0 archivos; sin P-75 en r24).

### Censo .pyc: r23 19 → r24 19 (nuevos 0, faltan 0)

- 0 `.pyc` nuevos; 0 faltan.
- `variograma.pyc` sigue ausente (no está en el manifiesto r24).
- Fuera del alcance T-4: 3 `.pyc` en `alma/` (1 en `alma/ciclo/absorcion/__pycache__/`), registrados como nota en `poda_r24.md` §5.2.
