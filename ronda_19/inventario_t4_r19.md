# INVENTARIO T-4 — RONDA 19 (F9 PODA, dentro del frente)

- **Herramienta:** `_inventario_r19.py` (adaptado de `_inventario_r18.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r19.json`; diff `_diff_inventario_r19.py` → `diff_inventario_r19.md`.
- **Escaneo:** 2026-11-14T23:50:09Z. Solo lectura. Instantánea de FASE 1 r19 (F2/F3/F5/F6 cerradas; F7/F4/F1 escribiendo en paralelo en `ronda_19/`; el manifiesto es el estado a la hora del escaneo, no un cierre).
- **Base r18:** 5.761 entradas (escaneo 2026-11-14T20:21:06Z).

## Resultado

| Métrica | r18 | r19 | Δ |
|---|---|---|---|
| Archivos | 5.761 | **5.952** | +191 |
| Bytes | 1.567.566.178 | **1.585.006.479** | +17.440.301 |
| Errores de lectura | 0 | **0** | — |

## Diff vs r18

- **OK (mismo sha + tamaño): 5.757**
- **CAMBIO (misma ruta, distinto sha o tamaño): 4**
- **MOVIDO (mismo sha + tamaño, ruta distinta): 0**
- **FALTA (sin gemelo en r19): 0**
- **NUEVO (en r19, no en r18): 191**

### CAMBIO (4, todos explicados)

| Ruta | r18 | r19 | Causa |
|---|---|---|---|
| `ronda_12/afirmaciones_pendientes.md` | 36.107 B, `3dbd6bbd…` | 43.412 B, `ceab0ef6…` | FASE 5 r18 (principal): N-21/N-22/N-23 + C-1191..C-1194 APLICADAS; §§26–28 nuevas |
| `memoria/anexo-vi/claims.jsonl` | 990.555 B, `6fe7c72b…` | 995.923 B, `1b0a2b21…` | Absorción automática r18 post-FASE 4 (N-21/N-22/N-23 + C-1191/C-1192/C-1193/C-1194): 1.185 → 1.189 líneas |
| `memoria/anexo-vi/claims_resumen.json` | 17.579 B, `40c2572f…` | 17.636 B, `aff4c5d9…` | Regenerado (total 1.189, SE 1055, hash_real 1175) |
| `memoria/anexo-vi/provenance.sha256` | 48.907 B, `4319d426…` | 49.194 B, `940ff3df…` | 366 → 368 líneas (2 entradas de la absorción r18; CORR-PROV-R17: 366 entradas + 2 vacías internas) |

Ningún CAMBIO es una desaparición ni una corrupción: los 4 son trabajo documentado de FASE 5 r18 y de la absorción automática r18.

### MOVIDO: 0

Ningún archivo cambió de ruta entre r18 y r19.

### FALTA: 0

- Los 4 `testA–D.err` **NO reaparecieron** (0 en el manifiesto r19, siguen ausentes, sin tercer evento FRÁGIL-02). El único `.err` con "test" en el manifiesto es el preexistente `ronda_11/ejecucion_f6/_hb_test_get.err`, sin relación con FRÁGIL-02. Ningún archivo nuevo falta. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda.

### NUEVO (191, todos dentro de ronda_18/ o ronda_19/)

| Directorio | N |
|---|---|
| `ronda_18/deposito/` (P-61) | 15 |
| `ronda_18/respaldo_pre_absorcion_r18/` (P-60) | 8 |
| `ronda_18/absorcion/` | 9 |
| `ronda_18/ejecucion_f7/` | 9 |
| `ronda_18/ejecucion_f8/` | 8 |
| `ronda_18/ejecucion_f9/` | 6 |
| `ronda_18/tejido_cruzado/` | 5 |
| `ronda_18/verificacion_fase2/` | 5 |
| `ronda_18/README.md` | 1 |
| `ronda_19/ejecucion_f2/` | 59 |
| `ronda_19/ejecucion_f6/` | 16 |
| `ronda_19/ejecucion_f4/` | 17 |
| `ronda_19/ejecucion_f3/` | 13 |
| `ronda_19/ejecucion_f9/` | 7 |
| `ronda_19/ejecucion_f7/` | 5 |
| `ronda_19/ejecucion_f1/` | 2 |
| `ronda_19/ejecucion_f5/` | 2 |
| `ronda_19/ESTADO_FASE0.md` | 1 |
| `ronda_19/frentes_r19.json` | 1 |
| `ronda_19/manifiesto_shas_r19_fase0.json` | 1 |
| `ronda_19/mapa_frentes_r19.md` | 1 |

Todos explicados por trabajo posterior al escaneo r18 (FASE 2/3/4 r18, absorción automática r18, FASE 5 r18, FASE 0/FASE 1 r19). Ningún archivo nuevo fuera del tejido. Detalle completo en `diff_inventario_r19.md` (lista de los 191 con tamaño y sha).

### Censo `.pyc`: r18 18 → r19 18 (nuevos 0, faltan 0)

Ningún `.pyc` nuevo en esta ronda; `variograma.pyc` sigue ausente (no está en el manifiesto r19).
