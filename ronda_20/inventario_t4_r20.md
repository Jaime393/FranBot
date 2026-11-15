# INVENTARIO T-4 — RONDA 20 (F9 PODA, dentro del frente)

- **Herramienta:** `_inventario_r20.py` (adaptado de `_inventario_r19.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r20.json`; diff `_diff_inventario_r20.py` → `diff_inventario_r20.md`.
- **Escaneo:** 2026-11-15T07:53:18Z. Solo lectura. Instantánea de FASE 1 r20 (F2/F3/F5/F6 cerradas; F7/F4/F1 escribiendo en paralelo en `ronda_20/`; el manifiesto es el estado a la hora del escaneo, no un cierre).
- **Base r19:** 5.952 entradas (escaneo 2026-11-14T23:50:09Z).

## Resultado

| Métrica | r19 | r20 | Δ |
|---|---|---|---|
| Archivos | 5.952 | **6.221** | +269 |
| Bytes | 1.585.006.479 | **1.603.968.988** | +18.962.509 |
| Errores de lectura | 0 | **0** | — |

## Diff vs r19

- **OK (mismo sha + tamaño): 5.948**
- **CAMBIO (misma ruta, distinto sha o tamaño): 4**
- **MOVIDO (mismo sha + tamaño, ruta distinta): 0**
- **FALTA (sin gemelo en r20): 0**
- **NUEVO (en r20, no en r19): 269**

### CAMBIO (4, todos explicados)

| Ruta | r19 | r20 | Causa |
|---|---|---|---|
| `ronda_12/afirmaciones_pendientes.md` | 43.412 B, `ceab0ef6…` | 49.829 B, `7e2c0b18…` | FASE 5 r19 (principal): N-24/N-25/N-26/N-27 + C-1195..C-1197 APLICADAS; §§29–31 nuevas (+ CORR-CONTEO-APLICADAS-R19) |
| `memoria/anexo-vi/claims.jsonl` | 995.923 B, `1b0a2b21…` | 999.657 B, `33a7f0e6…` | Absorción automática r19 post-FASE 4 (N-24/N-25/N-26/N-27 + C-1195/C-1196/C-1197): 1.189 → 1.192 líneas |
| `memoria/anexo-vi/claims_resumen.json` | 17.636 B, `aff4c5d9…` | 17.678 B, `315fd22b…` | Regenerado (total 1.192, SE 1058, hash_real 1178) |
| `memoria/anexo-vi/provenance.sha256` | 49.194 B, `940ff3df…` | 49.476 B, `82d39f15…` | 368 → 370 líneas (2 entradas de la absorción r19; CORR-PROV-R17: 368 entradas + 2 vacías internas) |

Ningún CAMBIO es una desaparición ni una corrupción: los 4 son trabajo documentado de FASE 5 r19 y de la absorción automática r19.

### MOVIDO: 0

Ningún archivo cambió de ruta entre r19 y r20.

### FALTA: 0

- Los 4 `testA–D.err` **NO reaparecieron** (0 en el manifiesto r20, siguen ausentes, sin tercer evento FRÁGIL-02). Los 3 `.err` nuevos son de F4 r19 (`drive_busqueda_Panteon_r19.err`, `drive_busqueda_Voces_r19.err`, `drive_busqueda_graph_r19.err`), registros de búsqueda de F4 sin relación con FRÁGIL-02. El único `.err` con "test" preexistente sigue siendo `ronda_11/ejecucion_f6/_hb_test_get.err`, sin relación con FRÁGIL-02. Ningún archivo nuevo falta. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda.

### NUEVO (269, todos dentro de ronda_19/ o ronda_20/)

| Directorio | N |
|---|---|
| `ronda_19/absorcion/` | 11 |
| `ronda_19/deposito/` (P-64) | 16 |
| `ronda_19/ejecucion_f7/` | 7 |
| `ronda_19/ejecucion_f8/` | 5 |
| `ronda_19/ejecucion_f9/` | 7 |
| `ronda_19/ejecucion_fase3/` | 7 |
| `ronda_19/respaldo_pre_absorcion_r19/` (P-63) | 8 |
| `ronda_19/verificacion_fase2/` | 19 |
| `ronda_20/ejecucion_f2/` | 133 |
| `ronda_20/ejecucion_f6/` | 16 |
| `ronda_20/ejecucion_f3/` | 12 |
| `ronda_20/ejecucion_f4/` | 12 |
| `ronda_20/ejecucion_f1/` | 4 |
| `ronda_20/ejecucion_f5/` | 2 |
| `ronda_20/ejecucion_f9/` | 6 |
| `ronda_20/ESTADO_FASE0.md` | 1 |
| `ronda_20/frentes_r20.json` | 1 |
| `ronda_20/manifiesto_shas_r20_fase0.json` | 1 |
| `ronda_20/mapa_frentes_r20.md` | 1 |

Todos explicados por trabajo posterior al escaneo r19 (FASE 2/3/4 r19, absorción automática r19, FASE 5 r19, FASE 0/FASE 1 r20). Ningún archivo nuevo fuera del tejido. Detalle completo en `diff_inventario_r20.md` (lista de los 269 con tamaño y sha).

### Censo `.pyc`: r19 18 → r20 18 (nuevos 0, faltan 0)

Ningún `.pyc` nuevo en esta ronda; `variograma.pyc` sigue ausente (no está en el manifiesto r20).
