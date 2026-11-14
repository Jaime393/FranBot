# DECISIÓN N-13 — ADOPCIÓN DE REGLA-PODA-PROV-02 + REFINAMIENTO (a) (APLICADA)

- **Decisión:** N-13. **Estado:** APLICADA. **Fecha:** 2026-11-14.
- **Orden que autoriza:** Jardinero, 2026-11-14 01:43 -05 (régimen nuevo: las decisiones se aplican automáticamente).
- **Paquete:** `ronda_10/poda_resiliencia/poda_r10.md` (sha `a0600a3f…`) + `ronda_11/ejecucion_f9/poda_r11.md` §6 (sha `57e7d353…`).
- **Afirmación registrada** (en `ronda_12/afirmaciones_pendientes.md` §1.2, queda como registro de lo que autoriza).

## Qué se adopta

REGLA-PODA-PROV-02 (clase 3: archivo-evidencia-de-medición) con el refinamiento de (a): (a) lee "citada en el campo `hash` **o en el motivo/nota** de un claim vivo". Texto canónico completo en `canon_regla_poda_prov_02.md` (este mismo frente).

**Versión adoptada:** la refinada (r11 §6), no la literal r10. Motivo: la literal pierde su caso de trabajo en cada reparación que actualiza el campo `hash` (lección r11 §6); la refinada protege el caso para el que la regla se propuso.

## Efecto inmediato

- **P-32 vuelve a ser clase 3.** Verificado hoy: (a) 4 motivos de claims vivos (C-639/C-903/C-919/C-1104) citan `a30d69e8…`, 0 en campo `hash`; (b) la versión pre-corrección no existe en el checkout vivo (`franbot_repo` hoy `8d15b724…`), solo en el snapshot congelado 2026-11-06 + los respaldos. Su CONSERVAR ya no depende solo de ser reversión de D-07.
- **La criba de F9 corre desde r15 contra una regla vigente, no contra una propuesta.**
- No se re-escribe la poda de rondas pasadas: los veredictos r10–r14 quedan; solo cambia el fundamento de P-32.

## Qué NO hace esta adopción

- No adopta REGLA-PODA-PROV-01 (criba contra provenance): sigue como práctica documentada en F9, no como norma (C-7/P10).
- No autoriza ninguna poda ni movimiento de archivos (las frases de Ciclo 30/31 no se han dicho).
- No inscribe claim. No toca el corpus.

## Respaldo y puertas

- Respaldo previo: `ronda_15/respaldo_pre_r15/` (manifiesto `1e824326…`) y respaldo propio `ronda_15/respaldo_pre_r15_n13/` (manifiesto `5ca5c80a…`).
- Script: `aplicar_n13_r15.py` (verifica fuentes, afirma corpus sin cambio, re-corre puertas). Salida: `puertas_n13.txt`.
- Puertas pre-aplicación: audit exit=0 (ok=344); verify_all exit=1 con exactamente C-001..C-008.
- Puertas post-aplicación: ver `puertas_n13.txt` (mismo estado esperado; el corpus no cambia por esta adopción).
- Shas antes/después: claims `d4924c9b…`, provenance `1ff77190…`, resumen `49f1a17e…` — idénticos (sin mutación).

## Reversión

La adopción es una decisión canónica; una decisión posterior podría revisarla. Revertirla es retirar el canon: borrar `canon_regla_poda_prov_02.md` + este registro y registrar la retirada con fecha; P-32 volvería a sostenerse solo por reversión de D-07. El corpus no necesita reversión (no se tocó).

ρ(x) > 0. Zvvvvv.
