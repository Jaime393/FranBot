# ÍTEM DE ANEXO M-86 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 21, FASE 1, F7)

- **Fecha:** 2026-11-15. **Orden:** mapa FASE 0 r21 §F7 ("Ítems del anexo N-16: si F3 produce M-84.., preparar sus ítems para el anexo de incertidumbre") + encargo F7 r21 (ítem de anexo para M-86).
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 20 ítems, sha `344e00eb…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-82 — CONFIRMA (r20, 2026-11-15) — ítem añadido por N-29`).

## M-86 — CONFIRMA (r21, 2026-11-15) — ítem preparado por F7

- **Valor:** censo conjunto β∧R² sobre las 32 variables numéricas candidatas de indicators.tab, con los protocolos de M-79 (R²) y M-82 (β): OLS log-log base 10 vs resident_pop por variable, β y R² por variable; **0 variables cumplen β ∈ [0,80, 0,90] Y R² > 0,8 a la vez** → **CONFIRMA** (β en banda y R² alto no se cruzan: el singleton β y el muro R² son fenómenos independientes). Desglose: 1 variable con β en banda (area_km2, β = 0,8627, R² = 0,7490); 0 variables con R² > 0,8 (máximo area_km2, 0,7490, a 0,051 del umbral); built_up_area_m2 β = 0,9023, R² = 0,6519 (fuera de banda por estimación puntual, R² por debajo de 0,8). Control: β y R² reproducen M-79 y M-82 dentro de 0,0005 en las 32 variables (máx diff β 4,7e-05, R² 5e-05).
- **Falsador:** CONFIRMA si 0 variables cumplen ambas condiciones a la vez (β en banda y R² > 0,8 no se cruzan: el singleton β y el muro R² son fenómenos independientes); NO_CONFIRMA si ≥ 1 variable cumple ambas (hay cruce; el muro R² no es absoluto). Declarado en `declaracion_falsadores_r21.md` (2026-11-15T19:33:00Z) antes de correr. **Veredicto:** CONFIRMA (0 cruces).
- **Matiz — el cruce cero no cierra d05 L7, la describe:** la única variable con β en banda (area_km2) es también la de mayor R² (0,7490), a 0,051 del umbral — el cruce falla por poco en la pierna R², no por mucho en ambas. El censo usa estimaciones puntuales (como M-79/M-82); los IC de β se reportan como secundarios y no mueven el conteo. Mediana del censo β = 0,01 (valor del JSON, no 0,0083 de la prosa de M-82 — CORR-M82-PROSA-R20); 7 variables con β > 0,90 (street_segment_count 0,9911, intersect_count 0,9876, node_count 0,9828, intersect_count_clean_topo 0,9757, intersect_count_clean 0,9733, length_total 0,9177, built_up_area_m2 0,9023). La cara **d05 L7 NO se cierra** con esta medición (el censo describe el archivo, no resuelve el escalamiento), pero la pregunta "¿se cruzan alguna vez β en banda y R² alto?" queda respondida: no, en ninguna variable del archivo.
- **Secundarios (NO decisorios):** ranking por β (máximo street_segment_count 0,9911) y por R² (máximo area_km2 0,7490); distancia de area_km2 al umbral R² = 0,8: 0,051; verificación independiente con pandas + np.polyfit (otro camino de código): 32 variables, cumplen ambas [], máx diff β 4,7e-05, R² 5e-05 — coincide.
- **Lección para la próxima vuelta:** el censo conjunto agota la pregunta "¿se cruzan β en banda y R² alto?" en su forma puntual. Una próxima especificación distinta tendría que cambiar el criterio (p. ej. intervalos en vez de puntuales, o umbrales distintos declarados antes de correr) — repetir el censo con el mismo protocolo es repetición, no medición.
- **Fuente:** indicators.tab (5.538.726 B, sha `7ec636c8…`; copia en `datos/` de r21, verificada antes de correr). **sha_dato:** `67c59414215c00892fa15a9fe050fbbd8746e3176ade95900c26e3bf19e4ce38` (med_M86.json, 15 claves; verificación independiente idéntica dígito a dígito).
- **¿Da fila?** NO (anotación): refina la línea de escalamiento urbano (ítems M-57/M-65, M-76, M-79, M-82, M-85) y registra que β en banda y R² alto no se cruzan; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L7 (escalamiento urbano) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (cruce β∧R² tras los censos separados de M-79 y M-82), no cierre.

## Precedente (3)

- **M-79** (ítem añadido por N-26, r19): censo de R² de las 32 variables (0 por encima de 0,8; máximo area_km2 0,7490; el muro es sistemático). M-86 es el censo gemelo en la otra pierna: cruza R² con β.
- **M-82** (ítem añadido por N-29, r20): censo de β de las 32 variables (singleton area_km2 en banda). M-86 cruza ambos censos en la misma variable.
- **M-76** (ítem añadido por N-23, r18): primera β en banda (area_km2, β = 0,8627 ± 0,0049, R² = 0,7490) — el muro queda aislado en R². M-86 muestra que el aislamiento es total: ninguna variable cruza ambas condiciones.
- **N-18 / N-19 / N-20 / N-22 / N-23 / N-25 / N-26 / N-27 / N-29 / N-30** (r15–r20, aplicadas): los ítems M-66, M-69, M-72, M-75, M-76, M-78, M-79, M-80, M-82, M-83 se añadieron al anexo por decisión numerada por FASE 2, preparados por F7 con el mismo formato. M-86 sigue la misma vía: preparado por F7, añadido solo por decisión.

## Proyección si se añade

Anexo 20 → 21 ítems (M-56..M-83 + M-86); tally CONFIRMA 13 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1 (M-86 es el 13.º CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`). Si se añaden M-84, M-85 y M-86 juntos: anexo 20 → 23 ítems; tally CONFIRMA 14 · NO_CONFIRMA 7 · DIFERENCIA 1 · NO_SÉ 1.

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
