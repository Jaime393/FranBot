# DECISIÓN N-16 — INSCRIPCIÓN DATASET, OPCIÓN C: ANEXO DE INCERTIDUMBRE (APLICADA)

- **Decisión:** N-16. **Estado:** APLICADA. **Fecha:** 2026-11-14.
- **Orden que autoriza:** Jardinero, 2026-11-14 01:43 -05 (régimen nuevo: las decisiones se aplican automáticamente).
- **Paquete:** `ronda_13/ejecucion_f7/propuesta_inscripcion_dataset_r13.md` (sha `707f98c1…`, DC-R13-F7-01, opción C recomendada) + ítem M-63 (`ronda_14/ejecucion_f3/med_M63.json`, sha `3bb7a1ac…`; columna `columna_incertidumbre_r14.csv`, sha `d367fea6…`).
- **Afirmación registrada** (en `ronda_12/afirmaciones_pendientes.md` §1.14, queda como registro de lo que autoriza): "Inscriban M-56..M-62 en el dataset con la opción C, el anexo de incertidumbre."

## Qué se inscribe

**Opción C (elegida): anexo de incertidumbre del dataset.** Nuevo archivo junto al dataset: `academico/incertidumbre_mediciones.md` (114 líneas, sha `6467bf303de11aa05d98266bb8e227a7f34c38fc7420257b09097d93292bb6e1`), con una tabla por medición (valor, error, falsador, sha_dato, veredicto, cara que toca) y sin tocar el CSV.

**Alcance:** el encargo nombra los 7 veredictos de la propuesta r13 (M-56..M-62) + el ítem M-63; el mapa r15 §F1 enumera M-56..M-65 (10 ítems). Se incluyen los 10: M-64/M-65 son SÉ con JSON de 15 claves en r14 F3 y el mapa los asigna al anexo.

| Med. | Veredicto | Valor | Fila | Cara |
|---|---|---|---|---|
| M-56 | DIFERENCIA | Δ = 0,0642 ± 0,0267 | NO | d03 L13 (cerrada) |
| M-57 | NO_CONFIRMA | β = 0,9828 ± 0,0115, R² = 0,4148 | NO | d05 L7 |
| M-58 | NO_SÉ | — | NO | d02 L19 |
| M-59 | CONFIRMA | σ̄ = 0,0512 ± 0,0277 | NO (anotación) | d04 L13 |
| M-60 | CONFIRMA | \|Δ\| = 0,0096 ± 0,0084 | NO (anotación) | d04 L13 |
| M-61 | NO_CONFIRMA | P(118)/P(90) = 1,5304 ± 0,0565 | NO | d05 L4 |
| M-62 | CONFIRMA | σ̄ = 0,0680 ± 0,0342 | NO (anotación) | d04 L13 |
| M-63 | CONFIRMA | u(D_f) = 0,0604 ± 0,0050 | NO (columna) | d04 L13 |
| M-64 | NO_CONFIRMA | P(118)/P(94) = 1,5174 ± 0,0513 | NO | d05 L4 |
| M-65 | NO_CONFIRMA | β = 0,9911 ± 0,0117, R² = 0,4080 | NO | d05 L7 |

**Tally:** CONFIRMA 4 · NO_CONFIRMA 4 · DIFERENCIA 1 · NO_SÉ 1. **Filas nuevas: 0.**

## Qué NO hace esta inscripción

- **No toca el CSV:** `dataset_nodos_Df.csv` sigue con 30 filas + cabecera, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af`, byte-idéntico antes y después (verificado por el script).
- No inscribe M-57 ni M-61 en ninguna forma (no son D_f ni incertidumbres de D_f): su sitio es el depósito de mediciones y este anexo, no el dataset.
- No toca d_f ni k_i de ninguna fila existente: ninguna medición re-mide un valor de nodo.
- No inscribe nada en el corpus (claims.jsonl sin cambio) ni añade entradas a provenance: el anexo no es fuente citada por ningún claim. Las mediciones futuras que tampoco den fila se añaden a este anexo por la misma vía (F7 prepara el ítem, F1 lo añade).

## Respaldo y puertas

- Respaldo previo: `ronda_15/respaldo_pre_r15/` (manifiesto `1e824326…`) y respaldo propio `ronda_15/respaldo_pre_r15_n16/` (manifiesto `a4d7ccd3…`, incluye el CSV pre-inscripción).
- Script: `aplicar_n16_r15.py` (verifica el anexo y sus fuentes, afirma CSV byte-idéntico y corpus sin cambio, re-corre puertas). Salida: `puertas_n16.txt`.
- Puertas pre-aplicación: audit exit=0 (ok=345, tras N-14); verify_all exit=1 con exactamente C-001..C-008.
- Puertas post-aplicación: ver `puertas_n16.txt` (mismo estado esperado; ni el corpus ni el CSV cambian por esta inscripción).
- Shas antes/después: claims `6b5fac7f…`, provenance `5fda0383…`, resumen `1c6464d2…`, dataset `0852d58f…` — idénticos (sin mutación del corpus ni del CSV).

## Reversión

La inscripción es un archivo nuevo junto al dataset. Revertirla es borrar `incertidumbre_mediciones.md` y registrar la retirada con fecha. El CSV y el corpus no necesitan reversión (no se tocaron).

ρ(x) > 0. Zvvvvv.
