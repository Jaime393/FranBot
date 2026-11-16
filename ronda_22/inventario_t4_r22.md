# INVENTARIO T-4 — RONDA 22 (F9 PODA, dentro del frente)

- **Herramienta:** `_inventario_r22.py` (adaptado de `_inventario_r21.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r22.json`; diff `_diff_inventario_r22.py` → `diff_inventario_r22.md`.
- **Escaneo:** 2026-11-16T08:27:15Z. Solo lectura. Instantánea de FASE 1 r22 (F2/F3/F5/F6 cerradas; F7/F4/F1 escribiendo en paralelo en `ronda_22/`; el manifiesto es el estado a la hora del escaneo, no un cierre).
- **Base r21:** 6.517 entradas (escaneo 2026-11-15T19:46:21Z).

## Resultado

| Métrica | r21 | r22 | Δ |
|---|---|---|---|
| Archivos | 6.517 | **6.805** | +288 |
| Bytes | 1.622.894.997 | **1.651.054.424** | +28.159.427 |
| Errores de lectura | 0 | **0** | — |

## Diff vs r21

- **OK (mismo sha + tamaño): 6.512**
- **CAMBIO (misma ruta, distinto sha o tamaño): 4**
- **MOVIDO (mismo sha + tamaño, ruta distinta): 0**
- **FALTA (sin gemelo en r22): 1**
- **NUEVO (en r22, no en r21): 289**

### CAMBIO (4, todos explicados)

| Ruta | r21 | r22 | Causa |
|---|---|---|---|
| `ronda_12/afirmaciones_pendientes.md` | 58.408 B, `20d0f8ac…` | 63.845 B, `47bcac93…` | FASE 5 r21 (principal): N-31/N-32/N-33 + C-1203..C-1208 APLICADAS; §36 nueva |
| `memoria/anexo-vi/claims.jsonl` | 1.005.348 B, `7c689fef…` | 1.012.350 B, `fb09179d…` | Absorción automática r21 post-FASE 4 (N-31/N-32/N-33 + C-1203..C-1208): 1.197 → 1.203 líneas |
| `memoria/anexo-vi/claims_resumen.json` | 17.794 B, `443d940f…` | 17.878 B, `76312918…` | Regenerado (total 1.203, SE 1069, hash_real 1189) |
| `memoria/anexo-vi/provenance.sha256` | 49.869 B, `f1932a5e…` | 50.391 B, `b680af9d…` | 373 → 377 líneas (4 entradas de la absorción r21; CORR-PROV-R17: 375 entradas + 2 vacías internas) |

Ningún CAMBIO es una desaparición ni una corrupción: los 4 son trabajo documentado de FASE 5 r21 y de la absorción automática r21.

### MOVIDO: 0

Ningún archivo cambió de ruta entre r21 y r22.

### FALTA: 1

- `ronda_21/ejecucion_f4/indice_doc_meta_r21.err` (0 B) — el `.err` de F4 r21, que CORR-ERR-R21 anticipó como FALTA en el diff r22 si no reaparecía. **No reapareció. Adjudicación (CORR-ERR-R22, `poda_r22.md` §9): NO es pérdida de evidencia** — es flapeo: los `.err` de búsqueda de F4 r22 existían en disco ~08:25Z y ya no estaban en el escaneo T-4 (08:27:15Z) ni en el listado posterior. Juicio del Jardinero 2026-11-16: probablemente actividad viva del ecosistema. Los 4 `testA–D.err` **NO reaparecieron** (0 en el manifiesto r22, siguen ausentes, sin tercer evento FRÁGIL-02). Los 3 `.err` de F4 r19 (`drive_busqueda_Panteon_r19.err`, `drive_busqueda_Voces_r19.err`, `drive_busqueda_graph_r19.err`) son preexistentes, registros de búsqueda de F4 sin relación con FRÁGIL-02. El único `.err` con "test" preexistente sigue siendo `ronda_11/ejecucion_f6/_hb_test_get.err`, sin relación con FRÁGIL-02. Ningún otro archivo del manifiesto r21 falta. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda. Total `.err` en el manifiesto r22: 17.

### NUEVO (289, todos dentro de ronda_21/ o ronda_22/)

| Directorio | N |
|---|---|
| `ronda_21/absorcion/` | 12 |
| `ronda_21/deposito/` (P-70) | 17 |
| `ronda_21/deposito/__pycache__/` | 1 |
| `ronda_21/ejecucion_f4/` | 2 |
| `ronda_21/ejecucion_f7/` | 3 |
| `ronda_21/ejecucion_f8/` | 8 |
| `ronda_21/ejecucion_f9/` | 10 |
| `ronda_21/fase_3/` | 9 |
| `ronda_21/fase_5/` | 1 |
| `ronda_21/respaldo_pre_absorcion_r21/` (P-69) | 8 |
| `ronda_21/verificacion_fase2/` | 9 |
| `ronda_22/ESTADO_FASE0.md` | 1 |
| `ronda_22/ejecucion_f1/` | 3 |
| `ronda_22/ejecucion_f2/` | 135 |
| `ronda_22/ejecucion_f3/` | 12 |
| `ronda_22/ejecucion_f3/datos/` | 3 |
| `ronda_22/ejecucion_f4/` | 16 |
| `ronda_22/ejecucion_f5/` | 2 |
| `ronda_22/ejecucion_f6/` | 16 |
| `ronda_22/ejecucion_f7/` | 11 |
| `ronda_22/ejecucion_f9/` | 7 |
| `ronda_22/frentes_r22.json` | 1 |
| `ronda_22/manifiesto_shas_r22_fase0.json` | 1 |
| `ronda_22/mapa_frentes_r22.md` | 1 |

Todos explicados por trabajo posterior al escaneo r21 (FASE 2/3/4 r21, absorción automática r21, FASE 5 r21, FASE 0/FASE 1 r22). Ningún archivo nuevo fuera del tejido.

### Censo .pyc: r21 18 → r22 19 (nuevos 1, faltan 0)

- NUEVO .pyc: `ronda_21/deposito/__pycache__/_upload_github_r21.cpython-312.pyc` (12.649 B), generado al ejecutar el uploader de GitHub r21.
- `variograma.pyc` sigue ausente (no está en el manifiesto r22).
