# CICLO ALMA — ABSORCIÓN AL CORPUS: PARADA EN CHECK-ONLY (sin escribir al corpus)

**Fecha:** 2026-11-17 ~00:33Z · **Orden:** Jardinero 2026-11-16 ~19:23 -05 ("absorbe") + régimen 01:43.

## Estado: NADA ESCRITO AL CORPUS

El script `absorb_ciclo_alma.py --check-only` falló en la validación de
fuentes ANTES de escribir nada. El corpus sigue en 1.211 claims
(`532ff6f3…`), provenance 382, anexo 28 ítems, audit ok=370 (re-verificado
por mí en pre-estado). Lo único hecho y verificado:

- **Respaldo P-77 COMPLETO:** `ronda_23/respaldo_pre_absorcion_ciclo_alma/`
  (7 archivos byte-idénticos + manifiesto `b27e6dcd…`).
- **Pre-estado verificado:** claims 1.211, provenance 382 no-vacías
  (370 OK + 1 omitido + 11 comentarios), audit ok=370 exit 0,
  verify_all exit 1 exactamente C-001..C-008.
- **8 fuentes:** 7/8 shas coinciden con las propuestas; 1/8 NO.

## El número que no cuadra

`alma/kits/kit_savia_v152.md` — las propuestas C-1219/C-1220/C-1221 citan
`fbf6c388…`, pero el disco trae `2ce3426c…` (12.223 B). Causa: la corrección
CORR-KIT-FILES0 (registrada en las propias propuestas y en
`preparar_absorcion.md`) editó el kit a las 00:31:51Z, DESPUÉS de escribir
`propuestas_absorcion.json` (00:27:53Z, sha `740b27eb…`). El frente hermano
actualizó además `kits/manifiesto_shas.json` a `2ce3426c…` (00:32:20Z): la
corrección es coherente y asentada en el kit. Los TEXTOS de los 11 claims
no se ven afectados; solo el puntero hash de las 3 propuestas del kit está
obsoleto. Aplicar con el hash viejo rompería audit (DISCREPANCIA en
provenance) — por eso el script se negó.

## El suelo se mueve: frentes hermanos activos en paralelo

Archivos ALMA modificados durante esta absorción (00:25–00:32Z):
`puentes/tablon/R-001.json` (¡primera RESPUESTA del tablón!),
`puentes/test_tablon.py`, `ciclo/nutrientes/NUT-2026-11-16-001..005.json`,
`ciclo/conecta_siembra.md`, `ciclo/_integrar.py`, `alma/README.md`,
`kits/kit_savia_v152.md`, `kits/manifiesto_shas.json`. El ciclo sigue
produciendo mientras yo absorbía.

## Corrección propuesta (para adjudicar, no aplicada por mí)

**CORR-PROP-KIT-SHA:** actualizar `fuente_sha256` a `2ce3426c…` en C-1219,
C-1220 y C-1221 dentro de `propuestas_absorcion.json` (valor recomputado
del disco por mí, no inventado), registrar el nuevo sha de propuestas, y
re-correr el check-only. Textos literales intactos; grietas y motivos
según el script (grieta ALMA ×10, grieta observabilidad ×1 para C-1225).

## Segunda discrepancia (en el encargo, no en el corpus)

El encargo paso 3 dice "audit ok debe ser 370+11=381", pero su paso 2 fija
UNA ENTRADA POR FUENTE DISTINTA (precedente r22 adjudicado: provenance
378 no 379; FASE 2 r23 lo confirmó). Las 11 propuestas usan 8 fuentes
distintas → provenance 382→390 y **audit ok 370→378, no 381**. El script
exige 378. No se inventan entradas duplicadas para llegar a 381.

## Qué falta (cuando se adjudique)

1. Adjudicar CORR-PROP-KIT-SHA (o esperar a que los frentes hermanos
   terminen y re-preparar propuestas).
2. Re-correr `absorb_ciclo_alma.py` (check-only → real).
3. Subir el corpus a GitHub (método c, UN push-files, 4/4 por blob).
4. Actualizar el registro (§39, 0 + 69 + 8 + 5).

ρ(x) > 0.
