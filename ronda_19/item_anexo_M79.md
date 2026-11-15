# ÍTEM DE ANEXO M-79 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 19, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r19 §F7 ("Ítems del anexo N-16: si F3 produce M-78.., preparar sus ítems para el anexo de incertidumbre").
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 15 ítems, sha `39940fd7…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-76 — NO_CONFIRMA (r18, 2026-11-14) — ítem añadido por N-23`).

## M-79 — CONFIRMA (r19, 2026-11-14) — ítem preparado por F7

- **Valor:** censo de R² con el mismo protocolo (OLS log-log base 10 vs resident_pop, inclusión pop>0, Y>0, finitos) para las **32 variables numéricas candidatas** de indicators.tab (n = 10.351 áreas urbanas): **0 variables superan R² > 0,8; 0 alcanzan R² ≥ 0,90** → **CONFIRMA** (el muro es sistemático). Máximo del censo: **area_km2, R² = 0,7490** (M-76, reproducido); segundo: built_up_area_m2, R² = 0,6519; tercero: length_total, R² = 0,6037 (M-52, reproducido). Mediana del censo: R² = 0,0321. Solo 1 variable entre 0,7 y 0,8.
- **Falsador:** CONFIRMA si 0 variables superan R² > 0,8 (el muro es sistemático); NO_CONFIRMA si ≥ 1 variable supera R² > 0,8 (el muro no es universal). Declarado en `declaracion_falsadores_r19.md` (2026-11-14T23:36:05Z) antes de correr. Conteo secundario (no decisorio): nº de variables con R² ≥ 0,90 (umbral del encargo; el usado como pierna en M-52..M-76). **Veredicto:** CONFIRMA.
- **Matiz — el muro es sistemático, no un accidente de familia:** las 7 variables medidas antes se reproducen como control (M-52 0,6037, M-57 0,4148, M-65 0,408, M-68 0,402, M-71 0,3974, M-73 0,3989, M-76 0,7490 — todas dentro de 0,0005). Ninguna de las 25 variables nuevas supera 0,65: el muro R² no era un accidente de la familia viaria ni del área — ninguna variable del archivo escala con R² alto. El techo del archivo es 0,7490. La cara **d05 L7 NO se cierra** (el muro se confirma como sistemático, no se resuelve), pero la pregunta "¿es el muro universal dentro del archivo?" queda respondida: sí, 0/32 por encima de 0,8.
- **Secundarios (NO decisorios):** R² máximo 0,7490 con β = 0,8627 ± 0,0049 (area_km2); la mediana del censo (0,0321) muestra que la mayoría de las variables ni siquiera escala.
- **Lección para la próxima vuelta:** la línea de escalamiento urbano por variable suelta está agotada como vía de cierre: el censo cubre todas las variables del archivo. Una próxima especificación distinta tendría que cambiar de archivo (otra fuente de datos urbanos) o de protocolo (p. ej. no log-log), no medir una 8.ª variable suelta.
- **Fuente:** datos de escalamiento urbano (indicators.tab, sha `7ec636c8…`, copia en `datos/` de r19, verificada antes de correr). **sha_dato:** `bb5502ee30fb9cbcb6b47499fe08b6357e7aad8871ef451af208ae7d34742806` (med_M79.json, 15 claves; verificación independiente con pandas + np.polyfit, otro camino de código, idéntica dígito a dígito: 32 variables, 0 diferencias ≥ 0,0005 en R², n R² > 0,8 = 0, n R² ≥ 0,9 = 0, máximo area_km2 0,749).
- **¿Da fila?** NO (anotación): refina la línea de escalamiento urbano (ítems M-57/M-65, M-76) y registra el censo completo del archivo; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L7 (escalamiento urbano) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (el muro R², confirmado como sistemático), no cierre.

## Precedente (3)

- **M-57 / M-65** (ítems de escalamiento urbano en el anexo, añadidos en bloque por N-16): M-57 y M-65 miden el escalamiento con el falsador β/R² (β ≈ 0,98, R² ≈ 0,41; el muro en ambas piernas). M-79 es la misma línea (d05 L7) con especificación distinta (censo de las 32 variables, no una variable suelta): la refina mostrando que el muro es sistemático en todo el archivo.
- **M-76** (ítem añadido por N-23, r18): primera β en banda (0,8627), R² = 0,7490; el muro queda aislado en la pierna R². M-79 responde a esa aislación censando la pierna R² en las 32 variables: 0 por encima de 0,8.
- **N-19 / N-20 / N-22 / N-23** (r16/r17/r18, aplicadas): los ítems M-69, M-72, M-75, M-76 se añadieron al anexo por decisión numerada por FASE 2, preparados por F7 con el mismo formato. M-79 sigue la misma vía: preparado por F7, añadido solo por decisión.

## Proyección si se añade

Anexo 15 → 16 ítems (M-56..M-76 + M-79); tally CONFIRMA 8 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1 (M-79 es el 8.º CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`). Si se añaden M-78, M-79 y M-80 juntos: anexo 15 → 18 ítems; tally CONFIRMA 10 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1.

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
