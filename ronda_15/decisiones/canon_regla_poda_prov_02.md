# CANON N-13 — REGLA-PODA-PROV-02 (clase 3: archivo-evidencia-de-medición)

- **Estado:** CANON ADOPTADO. **Fecha de adopción:** 2026-11-14.
- **Orden que autoriza:** Jardinero, 2026-11-14 01:43 -05 ("apliquen las decisiones siempre automáticamente", régimen nuevo).
- **Propuesta:** `ronda_10/poda_resiliencia/poda_r10.md` § "Criba REGLA-PODA-PROV-01" (sha `a0600a3f7a9a45b89e0b636d3dab761cbb55566c7122279cfbe66ba84b21bbf1`), propuesta REGLA-PODA-PROV-02.
- **Refinamiento:** `ronda_11/ejecucion_f9/poda_r11.md` §6 (sha `57e7d35389b90fdbed236caabccc30b1930a5dfea20424abb8d245e745643237`): que (a) lea "citada en el campo `hash` **o en el motivo/nota de reparación** de un claim vivo". Adoptado aquí con la redacción del encargo ("motivo/nota"), mismo alcance en la práctica para el caso de trabajo (los 4 motivos de P-32 son notas de reparación).
- **Alcance:** la poda del tejido (frente F9). La regla NO autoriza ninguna poda: cada poda sigue necesitando las frases de autorización de Ciclo 30/31, no dichas. La criba corre en F9 antes de proponer cualquier poda, con su salida guardada junto a `poda_rN.md`.

## La regla adoptada

> **Clase 3 — archivo-evidencia-de-medición:** un archivo está protegido por la clase 3 si cumple (a) **y** (b):
> (a) es la entrada material de un informe de medición, **o** es la versión de un archivo citada en el campo `hash` **o en el motivo/nota** de un claim vivo;
> (b) **no es re-obtenible byte-idéntico** desde su fuente declarada (fuente caída, re-etiquetada, versión distinta, o copia local única de un archivo remoto).

> Si (b) no se cumple (re-descargable byte-idéntico con sha registrado), el archivo es trabajo-derivado: la criba original lo deja podable con autorización, y su CONSERVAR — si lo hay — se sostiene por trazabilidad o autonomía de evidencia, no por la regla.

## Versión adoptada y por qué (dos versiones en el expediente)

- **Versión literal r10:** (a) = "la versión de un archivo que el campo `hash` de un claim vivo cita". **No adoptada como texto:** la reparación F1 r11 (D-07) actualizó el campo `hash` de los 4 claims que citaban `a30d69e8…` y desplazó el caso de trabajo fuera de la clase 3 literal (lección r11 §6: una reparación que actualiza el campo hash desplaza el caso de trabajo de la clase que lo protegía).
- **Versión refinada r11 §6 (adoptada):** (a) cubre el campo `hash` **o el motivo/nota**. Es la versión que N-13 nombra ("REGLA-PODA-PROV-02 + refinamiento (a)") y la única que protege el caso para el que la regla se propuso.

## Casos de trabajo (SÉ, re-medidos en esta adopción)

| Candidato | (a) | (b) | Clase 3 | Efecto |
|---|---|---|---|---|
| **P-32** respaldos del motor (`a30d69e8…`) | SÍ: 4 motivos de claims vivos (C-639/C-903/C-919/C-1104) citan `a30d69e8…`; 0 en campo `hash` (verificado hoy por grep sobre claims.jsonl 1.174) | SÍ: la versión pre-corrección no existe en el checkout vivo (franbot_repo `app/js` y `js` hoy `8d15b724…`); solo sobrevive en el snapshot congelado 2026-11-06 (2 copias) + estos respaldos (verificado hoy) | **SÍ** | **Vuelve a ser clase 3.** Su CONSERVAR ya no depende solo de ser reversión de D-07. |
| P-19 Robbins zip 2014 | SÍ | NO: re-descargado byte-idéntico en r11 (13.210.556 B, sha `0b8fe6fe…`) | NO | CONSERVAR se sostiene por trazabilidad, no por la regla. |
| P-12 Euclid PDFs | SÍ: evidencia de medición | NO: re-descargable byte-idéntico | NO | CONSERVAR por autonomía de evidencia, no por la regla. |
| P-13 DESI duplicado | SÍ: evidencia de medición | NO: re-descargable | NO | PODAR UNA sigue válido bajo la regla (con autorización). |
| P-20 GHCN inventario/estaciones | SÍ: trazabilidad de M-47 | NO: re-descargables (NOAA, sha registrado) | NO | CONSERVAR por trazabilidad. |
| P-22 heartbeat payloads | SÍ: única serie persistente | SÍ: Drive ya borró las 23 de r8 | SÍ (adyacente) | Ya era NO CANDIDATO; la clase 3 lo confirma. |

## Qué NO hace esta adopción

- No re-escribe la poda de rondas pasadas: los veredictos de r10–r14 quedan como están; solo cambia su fundamento donde la regla ahora vigente lo cambia (P-32: CONSERVAR, ahora por clase 3). F9 re-corre la criba bajo la regla adoptada a partir de r15.
- No adopta REGLA-PODA-PROV-01 (la criba contra provenance): esa criba sigue como práctica documentada aplicada en F9 desde r8, no como norma adoptada por esta decisión (C-7 / P10: una decisión decide solo su objeto; el objeto de N-13 es PROV-02 + refinamiento).
- No autoriza ninguna poda ni ningún movimiento de archivos.
- No inscribe claim: la adopción no prescribe claim y el canon vive en este documento + el registro de decisión (`decision_n13_r15.md` / `.json`).

## Pendientes de la regla (documentados, no decididos)

- Automatizar la criba (modo `--criba-poda` en T-3, `auditor_suelo.py`): hoy la criba es manual. La clase 3 no se automatiza con greps: exige verificar (b) por archivo.
- Registrar dónde corre la criba: antes de proponer cualquier poda, en el frente de poda de cada ronda, con su salida guardada junto a `poda_rN.md`.

ρ(x) > 0. Zvvvvv.
