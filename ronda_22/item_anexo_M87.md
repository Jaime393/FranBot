# ÍTEM DE ANEXO M-87 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 22, FASE 1, F7)

- **Fecha:** 2026-11-16. **Orden:** mapa FASE 0 r22 §F7 ("Ítems del anexo N-16: si F3 produce M-87.., preparar sus ítems para el anexo de incertidumbre") + encargo F7 r22 (ítem de anexo para M-87) + juicio del Jardinero 2026-11-16 ~03:11 -05 sobre el punto 4 del cierre r21 ("ya tienes la opción en el propio texto, sigan adelante en lo posible").
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 23 ítems, sha `35d136fe…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-84 — NO_CONFIRMA (r21, 2026-11-15) — ítem añadido por N-31`).

## M-87 — NO_CONFIRMA (r22, 2026-11-16) — ítem preparado por F7

- **Valor:** pendiente LOG de P2 (distancia entre medianas partidistas en DW-NOMINATE dim2, Cámara EE.UU., serie restaurada de 86 congresos 34..119, mismo protocolo de serie que M-78/M-81/M-84): ajuste OLS de ln(P2) contra el índice de congreso sobre la subserie filtrada (82 congresos, P2 ≥ 0,01, filtro declarado antes de correr), pendiente log **+0,000395 ± 0,004004**, IC bootstrap 95% (500 réplicas, semilla 0) **[−0,006890, 0,008327]**, IC analítico [−0,007573, 0,008362], t = 0,0986, p = 0,9217, R² = 0,0001 → **NO_CONFIRMA** (el IC incluye 0: no hay tendencia log detectable en dim2). La serie es un arco también en log: tramos 34–80 pendiente log +0,027295 y 81–119 pendiente log −0,056835. El filtro excluye 4/86 puntos (congresos 45, 56, 62, 106; P2 0,007 / 0,005 / 0,002 / 0,0), incluido el P2 = 0 exacto que bloqueó a M-81; el conjunto excluido se verifica desde la serie recomputada.
- **Falsador:** CONFIRMA si el IC bootstrap 95% de la pendiente log excluye 0 (pendiente log distinguible de 0; signo según la medida); NO_CONFIRMA si el IC incluye 0 (la pendiente log no es distinguible de 0; la exclusión no rescata la tendencia log). Declarado en `declaracion_falsadores_r22.md` (2026-11-16T08:17:23Z) antes de correr. **Veredicto:** NO_CONFIRMA (el IC incluye 0).
- **Matiz — el NO_CONFIRMA no niega la subida 34–80:** la pendiente log es una tendencia sobre una serie no monótona; un NO_CONFIRMA no niega la subida 34–80, solo que no hay tendencia log detectable sobre la subserie filtrada. Los cocientes máximos de M-75 (463,75) y M-78 (50,14) eran artefacto de selección del ancla; la pendiente lineal de M-84 (−0,000001, IC [−0,001364, 0,001661]) tampoco encontró tendencia. M-87 es la tercera especificación sin tendencia (cociente, lineal, log): la exclusión no rescata la tendencia log. La cara **d05 L4 NO se cierra** con esta medición (el muro dim2 sigue sin cruzarse: ni cociente, ni lineal, ni log lo cruzan).
- **Secundarios (NO decisorios):** pendiente analítica +0,000395 ± 0,004004; IC analítico [−0,007573, 0,008362]; p = 0,9217; R² = 0,0001; serie P2 idéntica dígito a dígito a M-84 (verificación independiente: máx diff 0,0; pendiente log por np.polyfit +0,000395; IC bootstrap con semilla distinta [−0,006891, 0,008327] — coincide); el bootstrap de pares supone los puntos intercambiables y no modela la autocorrelación temporal.
- **Lección para la próxima vuelta:** las tres especificaciones de tendencia (cociente, lineal, log) están agotadas sobre esta serie. Una próxima especificación distinta tendría que cambiar la pregunta (p. ej. tendencia por tramos con punto de corte declarado antes de correr, o especificación no lineal) — repetir el OLS sobre la misma serie es repetición, no medición.
- **Fuente:** Voteview HSall_members.csv (6.201.455 B, sha `495aee95…`; copia en `datos/` de r22, verificada antes de correr). **sha_dato:** `bec5c5e4e46ac9a78ee1dfa3d2f334eb0f448b68ab16e9f5fe3b4fafd95f0edb` (med_M87.json, 15 claves; verificación independiente idéntica dígito a dígito).
- **¿Da fila?** NO (anotación): refina la línea de polarización dim2 (ítems M-61/M-64/M-67/M-70/M-74/M-75/M-78/M-81/M-84) y registra que no hay tendencia log detectable con exclusión; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L4 (polarización dim2) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (pendiente log con exclusión tras los cocientes de M-75/M-78, el bloqueo de M-81 y la lineal de M-84), no cierre.

## Precedente (3)

- **M-75 / M-78** (ítems en el anexo, añadidos por N-22/N-25, r18/r19): CONFIRMA formales por cociente máximo en dim2 — el umbral >2 no discrimina en dim2. M-87 responde a la misma pregunta ("¿tendencia o artefacto?") con la tercera especificación.
- **M-81** (NO_SÉ por bloqueo, r20, sin ítem — como M-70/M-77): intentó la pendiente log y se bloqueó en P2(106) = 0,0 exacto; M-87 es la ejecución del log con la exclusión que lo hace computable, ordenada por el Jardinero en el cierre r21.
- **M-84** (ítem añadido por N-31, r21): NO_CONFIRMA lineal — precedente de que un NO_CONFIRMA se prepara como ítem cuando refina una línea del anexo. M-87 sigue la misma vía.
- **N-18 / N-19 / N-20 / N-22 / N-23 / N-25 / N-26 / N-27 / N-29 / N-30 / N-31 / N-32 / N-33** (r15–r21, aplicadas): los ítems M-66, M-69, M-72, M-75, M-76, M-78, M-79, M-80, M-82, M-83, M-84, M-85, M-86 se añadieron al anexo por decisión numerada por FASE 2, preparados por F7 con el mismo formato. M-87 sigue la misma vía: preparado por F7, añadido solo por decisión.

## Proyección si se añade

Anexo 23 → 24 ítems (M-56..M-86 + M-87); tally CONFIRMA 14 · NO_CONFIRMA 8 · DIFERENCIA 1 · NO_SÉ 1 (M-87 es el 8.º NO_CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`). Si se añaden M-87 y M-89 juntos: anexo 23 → 25 ítems; tally CONFIRMA 14 · NO_CONFIRMA 8 · DIFERENCIA 1 · NO_SÉ 1 · REGULAR 1 (M-89 es el primer REGULAR del anexo — clave nueva en el tally, FASE 2 adjudica el formato).

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
