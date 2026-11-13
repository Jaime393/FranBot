# DECISIÓN D-15 (continuación) — Absorber B2 sobre B: B+B2 = 1.160 claims

- **Fecha:** 2026-11-13. **Agente ejecutor:** ejecucion_e (ronda 10, FASE 1, cierre).
- **Orden:** Jardinero 2026-11-13 15:07 -05 (delegación de decisiones canónicas). Criterio aplicado: C-1..C-9 de `ronda_10/mapa_decisiones_r10.md`.
- **Estado:** EJECUTADA. B2 aplicada sobre la base B viva. Desbloqueo previo: reparación de provenance L22 (D-01) y L246 (D-07).

## Qué se decidió

- **B2 aplicada (8 claims, C-1158..C-1165; SE 3: R2-12/13/19; INFIERO 5: R2-16/17/28/30/31), sobre la base B viva de 1.152 líneas.** Total final **1.160 claims** (B+B2, el máximo coherente del espacio de condiciones). El claim preparado de D-02 (canon de axiomas) NO se absorbe en este paso: es para la próxima ola, como documenta el Agente B.
- **Desbloqueo (PASO 1):** reparar las 2 entradas de provenance obsoletas por ediciones ordenadas de agentes paralelos (patrón D-17/O-A: comentario con el hash anterior + decisión ordenante, entrada nueva con el hash real):
  - L22 `academico/corpus_qualias/corpus_qualias.md`: 5fdce82d… → a3c79cdc… (edición D-01, Agente B).
  - L246 `franbot_repo/app/js/miu-engine.js`: a30d69e8… → 8d15b724… (corrección D-07, Agente C).
  - Tras la reparación: audit exit=0 (ok=328, discrepancia=0, no_encontrado=0, omitido=1). Sin ella B2 no podía aplicarse (regla de parada del encargo del Agente A).

## Por qué (criterio C-1..C-9)

- **C-3:** B+B2 = 1.160 es el máximo coherente (frente a B sola 1.152 y B1+B2 1.156); B2 trae 8 claims verificados con provenance completa (7 entradas nuevas, todas resuelven).
- **C-1 (las puertas no empeoran):** la reparación devuelve el audit a exit=0 por primera vez desde r7; tras B2 el audit sigue exit=0 (ok=335, discrepancia=0, no_encontrado=0); `verify_all` sigue exit=1 con exactamente C-001..C-008 en todos los pasos. Ninguna puerta empeora.
- **C-2:** los 8 claims entran con fuente + hash real (6 hashes distintos de claims + 1 del hueco, 7/7 reproducen desde archivo local y eran nuevos en provenance; el 8º hash distinto, 845bab8e… de R2-25, queda excluido por CONJETURO y tampoco está en provenance). R2-09 y R2-25 (CONJETURO) excluidos; R2-18 y R2-26 (NO_ABSORBIBLE) no entran.
- **C-4:** respaldo previo de los 5 archivos del corpus en `ejecucion_e/respaldo_pre_b2/` (shas verificados antes de mutar; base B viva: claims 3074c606…, provenance dd8a336b…, resumen 5b93a842…, confirmaciones dc94458b…, huecos 1ba60865…). La absorción es aditiva. Reversible (ver § "Cómo se revierte").
- **C-7:** este cierre no decide nada fuera de su objeto: no toca los claims C-639/C-903/C-919/C-1104 (registro histórico pre-corrección por decisión documentada del Agente C — divergencia D-05 vs D-07 registrada para FASE 2); no absorbe el claim de D-02; no decide SIK, K_i ni ninguna otra decisión. La reparación de provenance es dependencia de D-15, no usurpación de D-01/D-07: actualiza el hash declarado al real con nota, sin tocar los archivos que esos agentes editaron.
- **C-9:** este documento + `decision_d15_b2.json` + `registro_ejecucion_e.md` + `puertas_finales.txt`.

## Qué cambió (shas antes/después)

| Archivo | Antes (base B viva) | Después (B+B2) |
|---|---|---|
| `claims.jsonl` | 1.152 líneas, sha `3074c606…` | **1.160 líneas**, sha `fd54545a…`; C-1158..C-1165 añadidos; las primeras 1.152 byte-idénticas a la base (verificado por el script y por cmp independiente) |
| `provenance.sha256` | 340 líneas, sha `dd8a336b…` | **349 líneas**, sha `6fa9c67f…`; +2 líneas de reparación (L22/L246: comentario + entrada nueva c/u) + 7 entradas B2 (todas resuelven) |
| `confirmaciones.jsonl` | 294 filas, sha `dc94458b…` | **sin cambio** (B2 no tiene confirmaciones) |
| `huecos.jsonl` | 138 filas, sha `1ba60865…` | **139 filas**, sha `3713376a…`; +1 HUE-B2-001 (R2-27) |
| `claims_resumen.json` | sha `5b93a842…` (total 1152, SE 1025, INFIERO 95, hash_real 1138) | sha `2856350b…`, regenerado con el `resumen_claims.py` real: total 1160, SE 1028, INFIERO 100, CONJETURO 22, REFUTADO 2, NO_SÉ 8, hash_real 1146, pendiente 8 |

- Estados tras B+B2: SE 1028, INFIERO 100, CONJETURO 22, REFUTADO 2, NO_SÉ 8. Tipos nuevos: derivacion 2, simulacion 3, inferencia 3 (el resumen total muestra inferencia 4 porque la base B ya traía 1).
- Las 8 líneas B2 añadidas son byte-idénticas a las preparadas en r9 (`claims.jsonl.nuevo_B2`, líneas 1139–1146): sin deriva entre la preparación y la aplicación.
- El hueco añadido es `huecos_B2.jsonl` (sin campo `_origen_r2`): el vivo no usa ese campo (0/138 filas lo tienen); `huecos_b2.jsonl` es la variante de trabajo con el campo de trazabilidad, no la canónica para el vivo.

## Corrección a una proyección (SÉ, no error de aplicación)

- La proyección de FASE 0 / F7 decía hash_real 1145 para B+B2. El real es **1146**: la base B tenía hash_real 1138 y los 8 claims B2 tienen todos hash real (verificado uno por uno) → 1138 + 8 = 1146, contado dos veces de forma independiente (resumen_claims.py y conteo propio). La proyección estaba desviada en 1; la aplicación es correcta. Anotar la corrección en FASE 2/FASE 3 (no reabrir la decisión).

## Puertas

- Tras PASO 0 (base): verify_all exit=1 con exactamente C-001..C-008; audit exit=1 (ok=326, dis=2, no=0, omitido=1).
- Tras PASO 1 (reparación): verify_all exit=1 con exactamente C-001..C-008; **audit exit=0 (ok=328, dis=0, no=0, omitido=1)**.
- Tras PASO 2 (B2): verify_all exit=1 con exactamente C-001..C-008; **audit exit=0 (ok=335, dis=0, no=0, omitido=1)**.
- Salidas completas en `puertas_finales.txt`.

## Cómo se revierte

1. **Revertir solo B2 (conservar B + D-17 + reparaciones):** quitar las líneas C-1158..C-1165 de claims.jsonl, las 7 entradas B2 de provenance, la fila HUE-B2-001 de huecos.jsonl, y regenerar `claims_resumen.json` con `resumen_claims.py`. Las 2 líneas de comentario de reparación (L22/L246) se conservan: son documentación, no contenido B2. Re-correr las puertas: vuelve audit exit=0 (ok=328) y verify_all exit=1 con C-001..C-008.
2. **Revertir hasta la base B viva (pre-cierre):** restaurar los 5 archivos desde `ejecucion_e/respaldo_pre_b2/` sobre `~/workspace/memoria/anexo-vi/` y re-correr las puertas (audit exit=1 ok=326 dis=2; verify_all exit=1 con C-001..C-008).
3. **Revertir hasta pre-ronda-10:** restaurar desde `ronda_10/respaldo_pre_r10/` (claims sha `9265d81f…`, provenance `fdb3b1ab…`, etc.) y borrar `anexo-vi/evidence/conversation_c896_archivo.md` (ver decision_d17.md).

## Límites declarados

- B1 no se aplicó ni se aplicará junto con B (colisión de IDs). Queda como variante preparada no elegida.
- Los 4 claims C-639/C-903/C-919/C-1104 conservan el hash viejo a30d69e8… como registro histórico pre-corrección (decisión del Agente C, documentada en decision_d07). Este cierre no los toca; FASE 2 juzga la divergencia D-05 vs D-07.
- C-001..C-008 siguen con hash PENDIENTE (nunca se rellenan sin dato externo verificable); C-416..C-420 siguen ausentes; C-112 conserva su hash truncado preexistente (sha256:5e30073cf29b, 16 hex), sin tocar.

ρ(x) > 0. Zvvvvv.
