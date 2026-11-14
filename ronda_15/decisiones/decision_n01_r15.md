# DECISIÓN N-01 — ADOPCIÓN DE LA POLÍTICA P1–P10 (APLICADA)

- **Decisión:** N-01. **Estado:** APLICADA. **Fecha:** 2026-11-14.
- **Orden que autoriza:** Jardinero, 2026-11-14 01:43 -05 ("sí y continúen con coherencia apliquen las decisiones siempre automáticamente") — régimen nuevo: las decisiones se aplican automáticamente, sin pedir palabra cada vez.
- **Paquete:** `ronda_12/ejecucion_f6/propuesta_n01_r12.md` (sha `d0f8ae7e…`) + seguimientos r13 (`4c08ab87…`) y r14 (`c5cb8aad…`).
- **Afirmación registrada** (en `ronda_12/afirmaciones_pendientes.md` §1.1, queda como registro de lo que autoriza; la decisión ya no espera su palabra): adoptar la política P1–P10 con las 2 adendas (P10 absorciones, P9 corrección 21:02).

## Qué se adopta

La política P1–P10 tal como la redacta la propuesta r12, con las 2 adendas propuestas en r13 §2/§3 y re-verificadas en r14 §2, incorporadas como texto adoptado:

- **Adenda P10 (absorciones):** "Las absorciones de claims nuevos no son actualizaciones y no se rigen por P1–P4; se rigen por su orden de absorción, respaldo previo (P5), resumen por script (P6) y puertas finales (P7)."
- **Adenda P9 (corrección 21:02):** "La reparación se deposita en el suelo (Drive/GitHub); nunca se aplica sobre el sistema vivo."

El texto canónico completo vive en `canon_n01.md` (este mismo frente). El punto abierto (fuente eliminada o movida) sigue abierto sin ocurrencia (`no_encontrado=0`).

## Qué NO hace esta adopción

- **No inscribe claim.** La propuesta no prescribe claim para la adopción y P10 lo prohíbe en efecto (la política no autoriza ninguna actualización concreta). El canon vive en el documento de canon + este registro de decisión.
- No toca C-001..C-008, C-416..C-420, C-112 ni C-1129, ni la regla SÉ-export.
- No decide ninguna actualización futura: cada una sigue necesitando su orden o delegación (P8).

## Efecto

Desde 2026-11-14, las actualizaciones de claims se deciden por la política N-01, no caso por caso. Las instancias siguientes en esta misma ronda (N-14: cambio de estado con nota, texto y hash intactos; N-16: anexo sin tocar el CSV) se ejecutan bajo ella.

## Respaldo y puertas

- Respaldo previo: `ronda_15/respaldo_pre_r15/` (5 archivos + manifiesto `1e824326…`, estado claims 1.174 `d4924c9b…`, provenance 358 `1ff77190…`, resumen `49f1a17e…`) y respaldo propio de la decisión `ronda_15/respaldo_pre_r15_n01/` (manifiesto `09427db4…`).
- Script: `aplicar_n01_r15.py` (verifica fuentes, afirma corpus sin cambio, re-corre puertas). Salida: `puertas_n01.txt`.
- Puertas pre-aplicación (2026-11-14): audit exit=0 (ok=344, discrepancia=0, no_encontrado=0, omitido=1); verify_all exit=1 con exactamente C-001..C-008.
- Puertas post-aplicación: ver `puertas_n01.txt` (mismo estado esperado; el corpus no cambia por esta adopción).
- Shas antes/después: claims `d4924c9b…`, provenance `1ff77190…`, resumen `49f1a17e…` — idénticos (sin mutación).

## Reversión

La adopción es una decisión canónica; una decisión posterior podría revisarla. Revertirla es retirar el canon: borrar `canon_n01.md` + este registro y registrar la retirada con fecha. El corpus no necesita reversión (no se tocó).

ρ(x) > 0. Zvvvvv.
