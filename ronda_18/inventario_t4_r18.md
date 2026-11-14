# INVENTARIO T-4 — RONDA 18 (F9 PODA, dentro del frente)

- **Herramienta:** `_inventario_r18.py` (adaptado de `_inventario_r17.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r18.json`; diff `_diff_inventario_r18.py` → `diff_inventario_r18.md`.
- **Escaneo:** 2026-11-14T20:21:06Z. Solo lectura. Instantánea de FASE 1 r18 (F2 cerrada; F3/F5/F6 con entregables; F1/F4/F7 escribiendo en paralelo en `ronda_18/`; el manifiesto es el estado a la hora del escaneo, no un cierre).
- **Base r17:** 5.607 entradas (escaneo 2026-11-14T18:50:13Z).

## Resultado

| Métrica | r17 | r18 | Δ |
|---|---|---|---|
| Archivos | 5.607 | **5.761** | +154 |
| Bytes | 1.550.690.292 | **1.567.566.178** | +16.875.886 |
| Errores de lectura | 0 | **0** | — |

## Diff vs r17

- **OK (mismo sha + tamaño): 5.603**
- **CAMBIO (misma ruta, distinto sha o tamaño): 4**
- **MOVIDO (mismo sha + tamaño, ruta distinta): 0**
- **FALTA (sin gemelo en r18): 0**
- **NUEVO (en r18, no en r17): 154**

### CAMBIO (4, todos explicados)

| Ruta | r17 | r18 | Causa |
|---|---|---|---|
| `ronda_12/afirmaciones_pendientes.md` | 29.979 B, `0b056e2b…` | 36.107 B, `3dbd6bbd…` | FASE 5 r17 (principal): N-20 + C-1187/C-1188/C-1189/C-1190 APLICADAS; §§23–25 nuevas |
| `memoria/anexo-vi/claims.jsonl` | 985.169 B, `fd1df2db…` | 990.555 B, `6fe7c72b…` | Absorción automática r17 post-FASE 4 (N-20 + C-1187/C-1188/C-1189/C-1190): 1.181 → 1.185 líneas |
| `memoria/anexo-vi/claims_resumen.json` | 17.523 B, `ebaa1e53…` | 17.579 B, `40c2572f…` | Regenerado (total 1.185, SE 1051, hash_real 1171) |
| `memoria/anexo-vi/provenance.sha256` | 48.483 B, `728f6770…` | 48.907 B, `4319d426…` | 363 → 366 líneas (3 entradas de la absorción r17; CORR-PROV-R17: 364 entradas + 2 vacías internas) |

Ningún CAMBIO es una desaparición ni una corrupción: los 4 son trabajo documentado de FASE 5 r17 y de la absorción automática r17.

### MOVIDO: 0

Ningún archivo cambió de ruta entre r17 y r18.

### FALTA: 0

- Los 4 `testA–D.err` **NO reaparecieron** (0 en el manifiesto r18, siguen ausentes, sin tercer evento FRÁGIL-02). El único `.err` con "test" en el manifiesto es el preexistente `ronda_11/ejecucion_f6/_hb_test_get.err`, sin relación con FRÁGIL-02. Ningún archivo nuevo falta. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda.
- `variograma.pyc` sigue ausente (no está en el manifiesto r18); `variograma.py` intacto (6.351 B, sha `f8ec697e…`).

### NUEVO (154): todos dentro de `ronda_17/` o `ronda_18/` (0 fuera)

| Directorio | NUEVO | Contenido |
|---|---|---|
| `ronda_18/ejecucion_f2/` | 57 | 27 payloads heartbeat + 12 raws JSON + lock + scripts F2 r18 + documentos (F2 cerrada) |
| `ronda_18/ejecucion_f6/` | 16 | F6 r18 |
| `ronda_17/deposito/` | 15 | scripts+logs FASE 4 r17 (P-58) |
| `ronda_18/ejecucion_f3/` | 9 | F3 r18 |
| `ronda_17/respaldo_pre_absorcion_r17/` | 8 | P-57 |
| `ronda_17/ejecucion_f9/` | 6 | Salidas F9 r17 escritas tras el escaneo T-4 r17 |
| `ronda_18/ejecucion_f9/` | 6 | Este frente (F9 r18) |
| `ronda_17/ejecucion_f1/` | 5 | Absorción r17 |
| `ronda_17/tejido_cruzado/` | 5 | FASE 3 r17 |
| `ronda_18/ejecucion_f7/` | 4 | F7 r18 escribiendo |
| `ronda_17/conectar/` | 3 | F8 r17 |
| `ronda_17/verificacion_fase2/` | 3 | FASE 2 r17 |
| `ronda_18/ejecucion_f4/` | 3 | F4 r18 escribiendo |
| `ronda_18/ejecucion_f1/` | 2 | Guardia F1 r18 |
| `ronda_18/ejecucion_f3/datos/` | 2 | Datos F3 r18 |
| `ronda_18/ejecucion_f5/` | 2 | F5 r18 |
| `ronda_17/README.md` | 1 | README de la ronda 17 |
| `ronda_17/absorcion_r17.md` | 1 | Informe de absorción r17 |
| `ronda_17/ejecucion_f7/` | 1 | F7 r17 (archivo escrito tras el escaneo T-4 r17) |
| `ronda_17/manifiesto_shas_absorcion_r17.json` | 1 | Manifiesto de absorción r17 |
| FASE 0 r18 | 4 | mapa_frentes_r18.md, frentes_r18.json, ESTADO_FASE0.md, manifiesto_shas_r18_fase0.json |

Todos explicados por trabajo posterior al escaneo r17 (FASE 2/3/4 r17, absorción automática r17, FASE 5 r17, FASE 0/FASE 1 r18). Ningún archivo nuevo fuera del tejido. Detalle completo en `diff_inventario_r18.md` (lista de los 154 con tamaño y sha).

### Censo `.pyc`: r17 18 → r18 18 (nuevos 0, faltan 0)

Ningún `.pyc` nuevo en esta ronda; `variograma.pyc` sigue ausente (no está en el manifiesto r18).
