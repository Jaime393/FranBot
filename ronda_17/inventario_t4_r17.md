# INVENTARIO T-4 — RONDA 17 (F9 PODA, dentro del frente)

- **Herramienta:** `_inventario_r17.py` (adaptado de `_inventario_r16.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r17.json`; diff `_diff_inventario_r17.py` → `diff_inventario_r17.md`.
- **Escaneo:** 2026-11-14T18:50:13Z. Solo lectura. Instantánea de FASE 1 r17 (F1/F2/F3/F5/F6 con entregables; F4/F7 escribiendo en paralelo en `ronda_17/`; el manifiesto es el estado a la hora del escaneo, no un cierre).
- **Base r16:** 5.393 entradas (escaneo 2026-11-14T16:00:23Z).

## Resultado

| Métrica | r16 | r17 | Δ |
|---|---|---|---|
| Archivos | 5.393 | **5.607** | +214 |
| Bytes | 1.533.203.123 | **1.550.690.292** | +17.487.169 |
| Errores de lectura | 0 | **0** | — |

## Diff vs r16

- **OK (mismo sha + tamaño): 5.389**
- **CAMBIO (misma ruta, distinto sha o tamaño): 4**
- **MOVIDO (mismo sha + tamaño, ruta distinta): 0**
- **FALTA (sin gemelo en r17): 0**
- **NUEVO (en r17, no en r16): 214**

### CAMBIO (4, todos explicados)

| Ruta | r16 | r17 | Causa |
|---|---|---|---|
| `ronda_12/afirmaciones_pendientes.md` | 25.357 B, `d770ae2e…` | 29.979 B, `0b056e2b…` | FASE 5 r16 (principal): N-19 + C-1184/C-1185/C-1186 APLICADAS; corrección ok=349 en §21 |
| `memoria/anexo-vi/claims.jsonl` | 981.461 B, `7e5f016d…` | 985.169 B, `fd1df2db…` | Absorción automática r16 post-FASE 4 (N-19 + C-1184/C-1185/C-1186): 1.178 → 1.181 líneas |
| `memoria/anexo-vi/claims_resumen.json` | 17.420 B, `ae402126…` | 17.523 B, `ebaa1e53…` | Regenerado (total 1.181, SE 1047, hash_real 1167) |
| `memoria/anexo-vi/provenance.sha256` | 48.214 B, `b5cb6b43…` | 48.483 B, `728f6770…` | 361 → 363 líneas (2 entradas de la absorción r16) |

Ningún CAMBIO es una desaparición ni una corrupción: los 4 son trabajo documentado de FASE 5 r16 y de la absorción automática r16.

### MOVIDO: 0

Ningún archivo cambió de ruta entre r16 y r17.

### FALTA: 0

- Los 4 `testA–D.err` **NO reaparecieron** (0 en el manifiesto r17, siguen ausentes, sin tercer evento FRÁGIL-02). Ningún archivo nuevo falta. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda.
- `variograma.pyc` sigue ausente (no está en el manifiesto r17); `variograma.py` intacto (6.351 B, sha `f8ec697e…`).

### NUEVO (214): todos dentro de `ronda_16/` o `ronda_17/` (0 fuera)

| Directorio | NUEVO | Contenido |
|---|---|---|
| `ronda_17/ejecucion_f2/` | 84 | 55 payloads heartbeat + 13 raws JSON + lock + scripts F2 r17 + documentos (F2 cerrada) |
| `ronda_16/deposito/` | 17 | scripts+logs FASE 4 r16 (P-55) |
| `ronda_17/ejecucion_f6/` | 15 | F6 r17 |
| `ronda_17/ejecucion_f3/` | 14 | F3 r17 (M-72..M-74) |
| `ronda_16/ejecucion_f7/` | 13 | Absorción r16: script, decisiones, puertas |
| `ronda_17/ejecucion_f7/` | 11 | F7 r17 escribiendo: preparadas + ítem anexo M-72 |
| `ronda_16/ejecucion_f4/` | 8 | F4 r16 |
| `ronda_16/respaldo_pre_absorcion_r16/` | 8 | P-54 |
| `ronda_17/ejecucion_f9/` | 8 | Este frente (F9 r17) |
| `ronda_16/ejecucion_f9/` | 6 | Salidas F9 r16 escritas tras el escaneo T-4 r16 |
| `ronda_16/ejecucion_f1/` | 5 | Absorción r16 |
| `ronda_16/tejido/` | 5 | FASE 3 r16 |
| `ronda_17/ejecucion_f4/` | 5 | F4 r17 escribiendo (forjados re-corridos) |
| `ronda_16/conectar/` | 3 | F8 r16 |
| `ronda_16/verificacion/` | 3 | FASE 2 r16 |
| `ronda_17/ejecucion_f1/` | 2 | F1 r17 |
| `ronda_17/ejecucion_f5/` | 2 | F5 r17 |
| `ronda_16/informe_absorcion_r16.md` | 1 | Informe absorción r16 |
| FASE 0 r17 (4) | 4 | `ESTADO_FASE0.md`, `frentes_r17.json`, `manifiesto_shas_r17_fase0.json`, `mapa_frentes_r17.md` |

Total: 84+17+15+14+13+11+8+8+8+6+5+5+5+3+3+2+2+1+4 = 214. Todos explicados por trabajo posterior al escaneo r16 (FASE 2/3/4 r16, absorción automática r16, FASE 0/FASE 1 r17). Ningún archivo nuevo fuera del tejido.

## Censo `.pyc`

- r16: 18 → r17: 18 (nuevos 0, faltan 0). Ningún `.pyc` nuevo en esta ronda; el patrón de generación de bytecode se detuvo esta ronda (ningún import nuevo con `__pycache__` dentro del tejido escaneado). Los 4 `.pyc` supervivientes de r2/r3 siguen presentes.

ρ(x) > 0. Zvvvvv.
