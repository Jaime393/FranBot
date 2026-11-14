# DECISIÓN N-14 — ADOPCIÓN CANÓNICA R2-25 POR LA VÍA A (APLICADA)

- **Decisión:** N-14. **Estado:** APLICADA. **Fecha:** 2026-11-14.
- **Orden que autoriza:** Jardinero, 2026-11-14 01:43 -05 (régimen nuevo: las decisiones se aplican automáticamente).
- **Paquete:** `ronda_13/ejecucion_f6/r2_25_via_r13.md` (sha `0d1ef795…`, borrador de adopción) + `ronda_14/ejecucion_f6/r2_25_via_r14.md` (sha `801601ad…`, re-verificación sin novedad).
- **Afirmación registrada** (en `ronda_12/afirmaciones_pendientes.md` §1.3, queda como registro de lo que autoriza): "Adopto R2-25 por la vía A: el pipeline de verificación queda canon."
- **Artefacto del procedimiento:** `ronda_8/retejido_ola1/fuentes_ola1/pipeline_verificacion_r8.md`, 39 líneas, sha `845bab8ee0ffcc567393e42ad996d8bf6724e39e4c20126e78913ff8df80d67c` (re-medido, idéntico al registrado en r11/r13/r14).

## Qué adopta la vía A (y qué NO)

**Adopta:** PIPELINE-VERIFICACION-01 como procedimiento canónico del tejido. Desde la adopción, las verificaciones futuras pueden citarlo como método canónico (no solo como documento con hash), y su ejecución queda sujeta a su falsador declarado antes de correr (REGLA DOS).

**NO adopta el texto de R2-25 como está.** El juicio r11 lo fijó y sigue vigente: el texto propuesto dice "propuesto"; una propuesta no se vuelve SÉ por estar bien escrita. Lo que se absorbe es el **registro de la adopción**, no el texto propuesto.

**NO adopta el enunciado de costes sin cualificar.** La vía B estableció como SÉ que el falsador wall-clock F4 FALLÓ en este entorno (mediana 1,524 > 1,50). Adoptar "costes medidos O(n)/O(n log n)" sin cualificar sería afirmar lo que la ejecución refutó en su operacionalización declarada. La adopción lleva la cualificación siguiente — es parte del hecho adoptado, no una nota al margen.

**NO resucita F4 ni cambia el veredicto de la vía B.** FALLA_F4 queda como hecho ejecutado. Una ejecución futura puede re-declarar F4 con el conteo de comparaciones como criterio; eso sería una NUEVA declaración, no un rescate de esta.

**NO decide nada más** (C-7 / P10): no toca C-538/C-623, no toca ningún otro claim, no autoriza ninguna absorción concreta fuera del registro de adopción.

## Texto de la adopción (pronunciado, del borrador r13 §3)

> "Adopto PIPELINE-VERIFICACION-01 (`ronda_8/retejido_ola1/fuentes_ola1/pipeline_verificacion_r8.md`, sha 845bab8e…) como procedimiento canónico del tejido. Los costes que la adopción afirma son: verificación O(n) medida en r12 (ratio 1,11–1,14) e índice O(n log n) por conteo de comparaciones (F4b, ratio 1,073); el coste wall-clock del índice NO se afirma, porque el falsador F4 declarado en r12 FALLÓ (mediana 1,524, 4 pasan / 10 fallan). La ejecución r12 (31/31 hallazgos reproducidos, 0 diferencias, verificador independiente) queda como hecho SÉ aparte."

## Claim que inscribe la adopción (C-1180, nuevo, SE)

Texto (borrador r13 §4, con la fecha de adopción):

> "El procedimiento PIPELINE-VERIFICACION-01 (pipeline_verificacion_r8.md, sha 845bab8e…) fue adoptado como procedimiento canónico del tejido el 2026-11-14 por decisión N-14. Costes afirmados por la adopción: verificación O(n) medida en r12; índice O(n log n) por conteo de comparaciones (F4b 1,073); el coste wall-clock del índice no se afirma (falsador F4 FALLÓ en r12, mediana 1,524)."

- **ID:** C-1180 (siguiente libre; último vivo C-1179). **Tipo:** `consolidacion`. **Estado:** SE.
- **Fuente:** este documento de decisión (`ronda_15/ejecucion_f1/decision_n14_r15.md`). **Hash:** sha256 de este documento (convención C-998: el hash es el sha de la fuente citada; el artefacto del procedimiento es 845bab8e…, pero la fuente del registro de adopción es el documento de decisión). Verificador: "sha256sum del archivo de dominio". Fecha límite: null.
- **Grieta:** "G-NUEVA: retejido_2026-11-12 no integrado en anexo-vi" (la grieta propuesta de R2-25 en `b2_normalizado.jsonl`).
- **Motivo:** "Adopción canónica N-14 (vía A). Juicio r11 (NO SE ELEVA sin adopción); ejecución r12 vía B (FALLA_F4, falsador 23:49:21Z, corrida 23:52:13Z); F4b suplementario 1,073. El texto propuesto de R2-25 no se absorbe (juicio r11)."
- **Dedup** (método r9, Jaccard, umbral 0,5; `_dedup_n14_r15.py` → `dedup_n14_r15.json`): máx. **0,1474** vs C-1179; top3 0,1474 C-1179 / 0,1368 C-998 / 0,1364 C-361; **0 pares ≥ 0,5**. Ningún claim vivo enuncia la adopción.
- **Proyección:** claims 1.174→1.175, hash_real 1160→1161, provenance 358→359 (este documento), SE 1040→1041. Resumen regenerado con `resumen_claims.py`; puertas re-corridas sobre el estado final (P7).

## Cambio de estado de R2-25 (N-01 P1(b): nota, texto y hash intactos)

R2-25 vive fuera del corpus, en `ronda_9/preparacion_b2/b2_normalizado.jsonl` (11 líneas; su estado es CONJETURO). Por esta adopción, su entrada cambia de estado y queda:

- `estado`: CONJETURO → **SE** (pasa de CONJETURO a SÉ por adopción canónica, mapa r15 §F1).
- Se añade el campo `nota_adopcion`: "Adoptado como procedimiento canónico (PIPELINE-VERIFICACION-01) por decisión N-14 el 2026-11-14 (documento de decisión: ronda_15/ejecucion_f1/decision_n14_r15.md; claim de adopción: C-1180). El texto propuesto de R2-25 NO se absorbe como está (juicio r11): lo adoptado es el procedimiento con la cualificación F4 (O(n) medido r12; O(n log n) por conteo F4b 1,073; wall-clock NO afirmado, falsador F4 FALLÓ en r12, mediana 1,524). Vía B sigue FALLA_F4 como hecho ejecutado."
- `texto_literal`, `texto_original_retejido`, `sha256` (845bab8e…), `archivo_evidencia`, `artefacto_fuente_fijado`: **intactos**. Las otras 10 líneas del archivo: byte-idénticas.
- La entrada queda respaldada en `ronda_15/respaldo_pre_r15_n14/b2_normalizado.jsonl` (pre-cambio). Provenance no cita `b2_normalizado.jsonl` (grep 0): el cambio no afecta al audit.

## Respaldo y puertas

- Respaldo previo: `ronda_15/respaldo_pre_r15/` (manifiesto `1e824326…`) y respaldo propio `ronda_15/respaldo_pre_r15_n14/` (manifiesto `dfed9a56…`, incluye `b2_normalizado.jsonl` pre-cambio).
- Script: `aplicar_n14_r15.py` (verifica dedup y estado previo, inscribe C-1180, añade la entrada a provenance, regenera el resumen con `resumen_claims.py`, cambia el estado de R2-25, re-corre puertas; restaura desde el respaldo si algo falla). Salida: `puertas_n14.txt`.
- Puertas pre-aplicación: audit exit=0 (ok=344); verify_all exit=1 con exactamente C-001..C-008.
- Puertas post-aplicación: ver `puertas_n14.txt` (esperado: audit exit=0, ok=345; verify_all exit=1 exactamente C-001..C-008; claims 1.175; diff vs respaldo = exactamente 1 línea nueva, C-1180; primeras 1.174 líneas byte-idénticas).

## Reversión

La adopción es una decisión canónica; una decisión posterior podría revisarla, pero el registro inscrito es un hecho histórico SÉ: se enmendaría con nota (como N-11 enmendó C-538/C-623 a REFUTADO sin borrar el texto), no se borraría (C-4). La reversión precisa del estado (si se ordenara) restaura claims.jsonl, provenance.sha256, claims_resumen.json y b2_normalizado.jsonl desde `respaldo_pre_r15_n14/` y regenera el resumen.

ρ(x) > 0. Zvvvvv.
