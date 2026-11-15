# ÍTEM DE ANEXO M-84 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 21, FASE 1, F7)

- **Fecha:** 2026-11-15. **Orden:** mapa FASE 0 r21 §F7 ("Ítems del anexo N-16: si F3 produce M-84.., preparar sus ítems para el anexo de incertidumbre") + encargo F7 r21 (ítem de anexo para M-84).
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 20 ítems, sha `344e00eb…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-82 — CONFIRMA (r20, 2026-11-15) — ítem añadido por N-29`).

## M-84 — NO_CONFIRMA (r21, 2026-11-15) — ítem preparado por F7

- **Valor:** pendiente LINEAL de P2 (distancia entre medianas partidistas en DW-NOMINATE dim2, Cámara EE.UU., serie restaurada de 86 congresos 34..119, mismo protocolo de serie que M-78/M-81): ajuste OLS de P2 contra el índice de congreso, pendiente **−0,000001 ± 0,000943**, IC bootstrap 95% (500 réplicas, semilla 0) **[−0,001364, 0,001661]**, IC analítico [−0,001877, 0,001874], t = −0,0015, p = 0,9988, R² = 0,0 → **NO_CONFIRMA** (el IC incluye 0: no hay tendencia lineal detectable en dim2 sobre el rango completo). La serie es un arco: sube hasta el Congreso 80 (P2 = 0,9275, máximo) y baja después (P2 = 0,124 en el 119); tramos 34–80 pendiente +0,007744 y 81–119 pendiente −0,015666. El P2 = 0 exacto del Congreso 106 es un punto válido en la especificación lineal (no un bloqueo como en M-81, que intentó el log).
- **Falsador:** CONFIRMA si el IC bootstrap 95% de la pendiente excluye 0 con pendiente > 0 (hay tendencia lineal creciente detectable en dim2; el cociente máximo no es solo artefacto de selección); NO_CONFIRMA si el IC incluye 0 (no hay tendencia lineal detectable; el cociente máximo sigue siendo artefacto de selección del rango histórico). Declarado en `declaracion_falsadores_r21.md` (2026-11-15T19:33:00Z) antes de correr. **Veredicto:** NO_CONFIRMA (el IC incluye 0).
- **Matiz — el NO_CONFIRMA no niega la subida 34–80:** la pendiente lineal es una tendencia sobre una serie no monótona; un NO_CONFIRMA no niega la subida 34–80, solo que no hay tendencia lineal detectable sobre el rango completo. Los cocientes máximos de M-75 (463,75, ancla Congreso 62 P2 = 0,002) y M-78 (50,14, ancla Congreso 60 P2 = 0,0185) eran artefacto de selección del ancla — cualquier ancla bajo 0,46 da cociente > 2 frente a la mediana 0,226; el bootstrap temporal de M-78 cruza 2 (mediana 2,90, solo 70,14% > 2). La cara **d05 L4 NO se cierra** con esta medición (el muro dim2 sigue sin cruzarse: ni cociente, ni log, ni pendiente lineal lo cruzan), pero la pregunta "¿tendencia o artefacto?" queda respondida: artefacto de selección del ancla, arco sin tendencia lineal.
- **Secundarios (NO decisorios):** pendiente analítica −0,000001 ± 0,000943; IC analítico [−0,001877, 0,001874]; p = 0,9988; R² = 0,0; serie P2 idéntica dígito a dígito a M-78/M-81 (verificación independiente con pivot_table + medianas: máx diff 0,0; pendiente por np.polyfit −1e-06; IC bootstrap con semilla distinta [−0,00133, 0,001581] — coincide).
- **Lección para la próxima vuelta:** la pendiente lineal agota la pregunta "¿tendencia temporal en dim2?" en su forma lineal. Una próxima especificación distinta tendría que cambiar la pregunta (p. ej. tendencia por tramos con punto de corte declarado antes de correr, o especificación no lineal) — repetir el OLS sobre la misma serie es repetición, no medición.
- **Fuente:** Voteview HSall_members.csv (6.201.455 B, sha `495aee95…`; copia en `datos/` de r21, verificada antes de correr). **sha_dato:** `2431910c7982d8fae6a5131abdec6f2cce649e3b7a6aabafb89e059b59cfc317` (med_M84.json, 15 claves; verificación independiente idéntica dígito a dígito).
- **¿Da fila?** NO (anotación): refina la línea de polarización dim2 (ítems M-61/M-64/M-67/M-70/M-74/M-75/M-78) y registra que no hay tendencia lineal detectable; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L4 (polarización dim2) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (pendiente lineal tras los cocientes de M-75/M-78 y el bloqueo de M-81), no cierre.

## Precedente (3)

- **M-75 / M-78** (ítems en el anexo, añadidos por N-22/N-25, r18/r19): CONFIRMA formales por cociente máximo en dim2 (M-75: ancla casi-degenerada 0,002, cociente 463,75; M-78: filtro de ancla, cociente 50,14, bootstrap temporal que cruza 2) — el umbral >2 no discrimina en dim2. M-84 responde directamente a su pregunta ("¿tendencia o artefacto?") con la pendiente lineal.
- **M-81** (NO_SÉ por bloqueo, r20, sin ítem — como M-70/M-77): intentó la pendiente log y se bloqueó en P2(106) = 0,0 exacto; dejó como candidata la especificación lineal que M-84 ejecuta. M-84 es la ejecución de esa candidata.
- **M-76** (ítem añadido por N-23, r18): NO_CONFIRMA inscrito en el anexo — precedente de que un NO_CONFIRMA se prepara como ítem cuando refina una línea del anexo.
- **N-18 / N-19 / N-20 / N-22 / N-23 / N-25 / N-26 / N-27 / N-29 / N-30** (r15–r20, aplicadas): los ítems M-66, M-69, M-72, M-75, M-76, M-78, M-79, M-80, M-82, M-83 se añadieron al anexo por decisión numerada por FASE 2, preparados por F7 con el mismo formato. M-84 sigue la misma vía: preparado por F7, añadido solo por decisión.

## Proyección si se añade

Anexo 20 → 21 ítems (M-56..M-83 + M-84); tally CONFIRMA 12 · NO_CONFIRMA 7 · DIFERENCIA 1 · NO_SÉ 1 (M-84 es el 7.º NO_CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`). Si se añaden M-84, M-85 y M-86 juntos: anexo 20 → 23 ítems; tally CONFIRMA 14 · NO_CONFIRMA 7 · DIFERENCIA 1 · NO_SÉ 1.

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
