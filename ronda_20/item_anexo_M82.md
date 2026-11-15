# ÍTEM DE ANEXO M-82 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 20, FASE 1, F7)

- **Fecha:** 2026-11-15. **Orden:** mapa FASE 0 r20 §F7 ("Ítems del anexo N-16: si F3 produce M-81.., preparar sus ítems para el anexo de incertidumbre") + encargo F7 r20 (ítem de anexo para M-82).
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 18 ítems, sha `23acd4d0…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-78 — CONFIRMA formal (r19, 2026-11-14) — ítem añadido por N-25`).

## M-82 — CONFIRMA (r20, 2026-11-15) — ítem preparado por F7

- **Valor:** censo del exponente β con el mismo protocolo OLS log-log base 10 vs resident_pop (inclusión pop>0, Y>0, finitos) para las **32 variables numéricas candidatas** de indicators.tab (10.351 áreas urbanas GHSL/UCD): **solo area_km2 tiene β en banda [0,80, 0,90]** (β = **0,8627 ± 0,0049**, R² = 0,7490 — M-76, reproducido); **0 variables además de area_km2** caen en banda por estimación puntual → **CONFIRMA** (el β en banda es un singleton). Mediana del censo: β = 0,0083. 8 variables tienen β > 0,90.
- **Falsador:** CONFIRMA si 0 variables además de area_km2 tienen β en banda [0,80, 0,90] por estimación puntual (el β en banda es un singleton); NO_CONFIRMA si ≥ 1 variable más cae en banda (es una familia; la lectura de M-76 se debilita). Declarado en `declaracion_falsadores_r20.md` (2026-11-15T07:06:00Z) antes de correr. **Veredicto:** CONFIRMA (singleton).
- **Matiz — singleton por estimación puntual, con un casi-caso en el borde:** built_up_area_m2 queda fuera de banda por 0,0023 (β = 0,9023 ± 0,0065, IC 95% [0,8896, 0,9150] solapa el borde 0,90). El veredicto sigue el falsador declarado (estimación puntual), y el matiz queda registrado sin cambiarlo: por intervalo, built_up_area_m2 es compatible con la banda. La familia β-en-banda, si existe, es de una sola variable por estimación puntual y de a lo sumo dos por intervalo. Las 7 variables medidas antes se reproducen como control (R² dentro de 0,0005). La cara **d05 L7 NO se cierra** con esta medición (el muro R² sistemático de M-79 y el singleton β de M-82 describen el archivo, no lo resuelven), pero la pregunta "¿singleton o familia?" queda respondida: singleton por estimación puntual.
- **Secundarios (NO decisorios):** 8 variables con β > 0,90 (la más cercana: built_up_area_m2, 0,9023); mediana del censo β = 0,0083; variables con β más alto: street_segment_count 0,9911, intersect_count 0,9876, node_count 0,9828.
- **Lección para la próxima vuelta:** el censo de β agota la pregunta "¿singleton o familia?" por estimación puntual. Una próxima especificación distinta tendría que cambiar el criterio (p. ej. intervalo en vez de puntual, o banda distinta declarada antes de correr) — repetir el censo con el mismo protocolo es repetición, no medición.
- **Fuente:** indicators.tab (mismo archivo que M-52/M-57/M-65/M-68/M-71/M-73/M-76/M-79, 5.538.726 B, sha `7ec636c8…`; copias en `datos/` de r20, verificados antes de correr). **sha_dato:** `92d48f966545e3ac9ac082c9bcab22a66928404fc6ac3fc9b86b8baf9b7a7dbb` (med_M82.json, 15 claves; verificación independiente con pandas + np.polyfit, otro camino de código, idéntica dígito a dígito: 32 variables, máx diff β 0,000047, máx diff R² 0,000050, en banda solo area_km2).
- **¿Da fila?** NO (anotación): refina la línea de escalamiento urbano (ítems M-57/M-65, M-76, M-79) y registra que el β en banda es un singleton por estimación puntual; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L7 (escalamiento urbano) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (censo de β tras el censo de R² de M-79), no cierre.

## Precedente (3)

- **M-57 / M-65** (ítems de escalamiento urbano en el anexo, añadidos en bloque por N-16): M-57 y M-65 miden el escalamiento con el falsador R² (R² > 0,8 en banda; la pierna falla). M-82 es la misma línea (d05 L7) con especificación distinta (censo de β, no de R²): la refina mostrando que el β en banda es un singleton.
- **M-76** (ítem añadido por N-23, r18): primera β en banda (area_km2, β = 0,8627 ± 0,0049, R² = 0,7490) — el muro queda aislado en R². M-82 responde directamente a su pregunta ("¿singleton o familia?") censando las 32 variables.
- **M-79** (ítem añadido por N-26, r19): censo de R² de las 32 variables (0 por encima de 0,8; máximo area_km2 0,7490; el muro es sistemático). M-82 es el censo gemelo en β del mismo archivo y el mismo protocolo.
- **N-18 / N-19 / N-20 / N-22 / N-23 / N-25 / N-26 / N-27** (r15/r16/r17/r18/r19, aplicadas): los ítems M-66, M-69, M-72, M-75, M-76, M-78, M-79, M-80 se añadieron al anexo por decisión numerada por FASE 2, preparados por F7 con el mismo formato. M-82 sigue la misma vía: preparado por F7, añadido solo por decisión.

## Proyección si se añade

Anexo 18 → 19 ítems (M-56..M-80 + M-82); tally CONFIRMA 11 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1 (M-82 es el 11.º CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`). Si se añaden M-82 y M-83 juntos: anexo 18 → 20 ítems; tally CONFIRMA 12 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1.

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
