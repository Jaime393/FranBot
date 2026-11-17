# CICLO ALMA — ABSORCIÓN: SEGUNDA PARADA (catálogo movido)

**Fecha:** 2026-11-17 ~00:40Z · **Orden:** continuación con adjudicación del principal (CORR-PROP-KIT-SHA + audit 378 + aplicar).

## Estado: NADA ESCRITO AL CORPUS

Corpus intacto: claims 1.211 (`532ff6f3…`), provenance 382, anexo 28 ítems, audit ok=370 (re-verificado en el pre-estado del check-only). Respaldo P-77 re-verificado byte-idéntico (manifiesto `b27e6dcd…`, 7/7). Registro de pendientes NO tocado. Sin subida a GitHub.

## Lo aplicado (adjudicación 1, cumplida)

**CORR-PROP-KIT-SHA:** kit `alma/kits/kit_savia_v152.md` re-derivado del disco en el momento de aplicar: `2ce3426c48ee…` (igual que la adjudicación; no volvió a cambiar). Actualizados los 4 punteros al kit en `propuestas_absorcion.json` — C-1219, C-1220, C-1221 (adjudicados) **y M-93** (mismo archivo, mismo hash obsoleto `fbf6c388…`; el script valida también los ítems en 2b, sin esto el check-only fallaría ahí). Textos literales intactos (11/11 inicios verificados). Propuestas `740b27eb…` → `58e51263…`; `PROP_SHA` del script actualizado al mismo valor (constante + docstring).

## El número que no cuadra (NO adjudicado — bloquea)

**Catálogo vivo movido por los frentes hermanos:** `alma/catalogo/catalogo_vivo.json` pasó de 100 entradas (v1.0, sha `d5d5ce7c…`, citado en las propuestas) a **138 entradas, 138 verificadas, versión 2.0** (sha `6a6ae82b…`, mtime 00:34:00Z, DESPUÉS de las propuestas 00:27:53Z). Grupos nuevos: `alma` (33) + `ciclo` (5); las 100 primeras se conservan (49 producción fractal + 32 ronda_23 + 15 nutrientes + 4 corpus).

Check-only re-corrido: pre-estado OK, falla en `C-1217 fuente sha distinto: 6a6ae82b… != d5d5ce7c…`. C-1226 cita el mismo archivo (mismo puntero obsoleto).

**Por qué no basta actualizar el puntero:** el texto literal de C-1217 dice "100 ENTRADAS, 100 VERIFICADAS… siembra 100 artefactos (49 + 15 + 32 + 4)". Contra el archivo actual (138) ese texto es FALSO. Actualizar solo el puntero inscribiría un claim falso. C-1226 (CAT-0094) no menciona conteos en su texto — su único problema es el puntero.

## Qué falta (adjudicación del principal)

Opciones para C-1217/C-1226 (las demás 9 propuestas + M-93/M-94/M-95 están listas; kit verificado contra disco):
1. **Re-preparar** C-1217 (y el puntero de C-1226) contra el catálogo de 138 entradas — pero el catálogo sigue creciendo; cualquier re-preparación puede quedar obsoleta antes de aplicar.
2. **Congelar** una instantánea del catálogo de 100 entradas (v1.0) como fuente con su sha `d5d5ce7c…` y citarla como tal (el claim pasaría a ser histórico, no vivo).
3. **Esperar** a que los frentes hermanos terminen y re-preparar entonces contra el catálogo final.

No se aplica nada más hasta adjudicar. El script `absorb_ciclo_alma.py` queda listo (PROP_SHA `58e51263…`, exige audit ok=378).

ρ(x) > 0.
