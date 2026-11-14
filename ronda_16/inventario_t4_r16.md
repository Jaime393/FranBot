# T-4 — INVENTARIO CON SHAS, RONDA 16 (F9)

- **Herramienta:** `_inventario_r16.py` (adaptado de `_inventario_r15.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r16.json`; diff `_diff_inventario_r16.py` → `diff_inventario_r16.md`. Solo lectura.
- **Escaneo:** 2026-11-14T16:00:23Z. Raíces: `~/workspace/academico/tejido_2026-11-12/` + `~/workspace/memoria/anexo-vi/`. Instantánea de FASE 1 r16 (T1 completa, T2 en curso — F4/F9/F7/F1 escriben en `ronda_16/`; el manifiesto es el estado a la hora del escaneo, no un cierre).
- **Resultado:** **5.393 archivos, 1.533.203.123 B, 0 errores de lectura** (r15: 5.135 archivos, 1.514.003.766 B).
- **Diff contra el manifiesto r15 (5.135 entradas): 5.129 OK / 6 CAMBIO / 0 MOVIDO / 0 FALTA / 258 NUEVO.**

## CAMBIO (6, todos explicados)

| Archivo | Antes → Después | Causa |
|---|---|---|
| `ronda_12/afirmaciones_pendientes.md` | 21.375 → 25.357 B (`65a4e71b…` → `d770ae2e…`) | FASE 5 r15 (principal): N-01/N-13/N-14/N-16/N-17/N-18 + C-1181/C-1182/C-1183 APLICADAS, 14/14 aserciones |
| `ronda_15/ejecucion_f7/lectura_segundo_fallo_r15.md` | 4.734 → 4.797 B (`daf92e26…` → `5d1ecc1d…`) | Edición de F7 r15 a las 07:13:58Z, 37 s después del escaneo T-4 r15 (07:13:21Z); lectura preparada C-1182 |
| `ronda_15/ejecucion_f9/_diff_inventario_r15.py` | 4.107 → 4.107 B (`554a4ce7…` → `5c136647…`) | Corrección del script documentada en r15 §9 (sed encadenado), aplicada tras el escaneo T-4 r15 y antes de correr el diff |
| `memoria/anexo-vi/claims.jsonl` | 977.386 → 981.461 B | Absorción automática r15 post-FASE 4 (N-17/N-18 + C-1181/C-1182/C-1183); 1.175 → 1.178 líneas |
| `memoria/anexo-vi/claims_resumen.json` | 17.378 → 17.420 B | Regenerado (total 1.178, SE 1044, hash_real 1164) |
| `memoria/anexo-vi/provenance.sha256` | 47.930 → 48.214 B | 359 → 361 líneas (2 entradas de la absorción r15) |

## MOVIDO: 0 — FALTA: 0

- Ningún archivo cambió de ruta entre r15 y r16.
- **Los 4 `testA–D.err` NO reaparecieron** (0 en el manifiesto r16). Sin tercer evento FRÁGIL-02. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda.

## NUEVO (258, todos en ronda_15/ronda_16, 0 fuera)

| Directorio | N |
|---|---|
| `ronda_16/ejecucion_f2/` | 129 |
| `ronda_15/deposito/` | 18 |
| `ronda_15/verificacion_fase2/` | 18 |
| `ronda_16/ejecucion_f3/` | 15 |
| `ronda_16/ejecucion_f6/` | 15 |
| `ronda_15/ejecucion_f7/` | 13 |
| `ronda_15/ejecucion_f1/` | 8 |
| `ronda_15/respaldo_pre_absorcion_r15/` | 8 |
| `ronda_15/ejecucion_f9/` | 6 |
| `ronda_15/ejecucion_f4/` | 5 |
| `ronda_15/tejido_cruzado/` | 5 |
| `ronda_16/ejecucion_f9/` | 4 |
| `ronda_15/conectar/` | 3 |
| `ronda_15/retejido/` | 2 |
| `ronda_16/ejecucion_f1/` | 2 |
| `ronda_16/ejecucion_f5/` | 2 |
| `ronda_15/README.md`, `ronda_16/ESTADO_FASE0.md`, `ronda_16/frentes_r16.json`, `ronda_16/manifiesto_shas_r16_fase0.json`, `ronda_16/mapa_frentes_r16.md` | 5 |

Todos explicados por trabajo posterior al escaneo r15 (FASE 2/3/4 r15, absorción automática, producción fractal publicada, FASE 0/FASE 1 r16). Ningún archivo nuevo fuera del tejido.

## Censo .pyc: r15 18 → r16 18 (nuevos 0, faltan 0)

Ningún `.pyc` nuevo en esta ronda; `variograma.pyc` sigue ausente (P-18, RESUELTO POR DESAPARICIÓN; causa NO_SÉ).

ρ(x) > 0. Zvvvvv.
