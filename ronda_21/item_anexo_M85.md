# ÍTEM DE ANEXO M-85 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 21, FASE 1, F7)

- **Fecha:** 2026-11-15. **Orden:** mapa FASE 0 r21 §F7 ("Ítems del anexo N-16: si F3 produce M-84.., preparar sus ítems para el anexo de incertidumbre") + encargo F7 r21 (ítem de anexo para M-85).
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 20 ítems, sha `344e00eb…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-82 — CONFIRMA (r20, 2026-11-15) — ítem añadido por N-29`).

## M-85 — CONFIRMA (r21, 2026-11-15) — ítem preparado por F7

- **Valor:** re-estimación bootstrap por pares (2.000 réplicas, semilla 0) del exponente β de built_up_area_m2, mismo protocolo OLS log-log base 10 vs resident_pop que M-82 (n = 10.351): β = **0,9023 ± 0,0065**, IC bootstrap 95% **[0,8896, 0,9142]**, IC analítico [0,8896, 0,9150], R² = 0,6519 → **CONFIRMA** (el IC bootstrap contiene 0,90: el borde no se resuelve hacia dentro de la banda; el singleton area_km2 se sostiene). Fracciones bootstrap: 34,95% de las réplicas con β < 0,90 (y dentro de la banda [0,80, 0,90]); 65,05% con β > 0,90. Control: area_km2 re-medida con el mismo protocolo reproduce M-76/M-82 (0,8627 ± 0,0049 dentro de 0,0005).
- **Falsador:** la proposición bajo prueba es el singleton de M-82 (built_up_area_m2 NO es segundo en banda). CONFIRMA si el IC bootstrap 95% de β contiene 0,90 o queda entero por encima de 0,90 (el borde no se resuelve hacia dentro de la banda; el singleton area_km2 se sostiene); NO_CONFIRMA si el IC queda entero dentro de [0,80, 0,90] (β en banda por intervalo: built_up_area_m2 es segundo en banda y el singleton se rompe). Declarado en `declaracion_falsadores_r21.md` (2026-11-15T19:33:00Z) antes de correr. **Veredicto:** CONFIRMA (el IC contiene 0,90).
- **Matiz — el singleton se sostiene por intervalo, no por punto:** un IC que contenga 0,90 no mueve β de 0,9023 — el borde sigue siendo borde. Por estimación puntual built_up_area_m2 sigue fuera (0,0023 por encima del borde); por intervalo es compatible con la banda (34,95% de las réplicas dentro). El singleton de M-82 se sostiene, pero su fuerza es ahora intervalar: la familia β-en-banda, si existe, es de a lo sumo dos, y el segundo miembro es compatible con la banda solo en un tercio de las réplicas. La cara **d05 L7 NO se cierra** con esta medición (el borde es borde, no respuesta), pero la pregunta "¿se resuelve el borde con bootstrap?" queda respondida: no se resuelve.
- **Secundarios (NO decisorios):** β ± SE analítico 0,9023 ± 0,0065; IC analítico [0,8896, 0,9150]; R² = 0,6519; mediana bootstrap de β 0,9024; distancia de β al borde 0,90: 0,0023; verificación independiente con pandas + np.polyfit (otro camino de código): β 0,9023, R² 0,6519, IC bootstrap con semilla distinta [0,889, 0,9143] — coincide.
- **Lección para la próxima vuelta:** el bootstrap agota la pregunta "¿se resuelve el borde?" en su forma intervalar. Una próxima especificación distinta tendría que cambiar el criterio (p. ej. banda distinta declarada antes de correr, o un estimador distinto de OLS log-log) — repetir el bootstrap con más réplicas es repetición, no medición.
- **Fuente:** indicators.tab (5.538.726 B, sha `7ec636c8…`; copia en `datos/` de r21, verificada antes de correr). **sha_dato:** `ef5fcac520b90381140ebb026dc59b1ee2f66130398d8d5b365841d523e3d613` (med_M85.json, 15 claves; verificación independiente idéntica dígito a dígito).
- **¿Da fila?** NO (anotación): refina la línea de escalamiento urbano (ítems M-57/M-65, M-76, M-79, M-82) y registra que el borde no se resuelve por intervalo; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L7 (escalamiento urbano) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (borde β tras el singleton de M-82), no cierre.

## Precedente (3)

- **M-82** (ítem añadido por N-29, r20): censo de β de las 32 variables — singleton por estimación puntual (solo area_km2 en banda), con el matiz del borde (built_up_area_m2 β = 0,9023, IC analítico solapa 0,90). M-85 responde directamente a ese matiz ("¿se resuelve el borde?") con el IC bootstrap.
- **M-76** (ítem añadido por N-23, r18): primera β en banda (area_km2, β = 0,8627 ± 0,0049, R² = 0,7490) — el muro queda aislado en R². El control de M-85 reproduce este valor dentro de 0,0005.
- **M-79** (ítem añadido por N-26, r19): censo de R² de las 32 variables (0 por encima de 0,8; máximo area_km2 0,7490; el muro es sistemático). M-85 es la re-estimación por intervalo del borde que el censo β de M-82 dejó abierto.
- **N-18 / N-19 / N-20 / N-22 / N-23 / N-25 / N-26 / N-27 / N-29 / N-30** (r15–r20, aplicadas): los ítems M-66, M-69, M-72, M-75, M-76, M-78, M-79, M-80, M-82, M-83 se añadieron al anexo por decisión numerada por FASE 2, preparados por F7 con el mismo formato. M-85 sigue la misma vía: preparado por F7, añadido solo por decisión.

## Proyección si se añade

Anexo 20 → 21 ítems (M-56..M-83 + M-85); tally CONFIRMA 13 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1 (M-85 es el 13.º CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`). Si se añaden M-84, M-85 y M-86 juntos: anexo 20 → 23 ítems; tally CONFIRMA 14 · NO_CONFIRMA 7 · DIFERENCIA 1 · NO_SÉ 1.

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
