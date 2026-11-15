# F3 Ronda 21 — Mediciones M-84 / M-85 / M-86

**Fecha:** 2026-11-15. **Frente:** F3, ronda 21, FASE 1.
Falsadores declarados POR ESCRITO en
`declaracion_falsadores_r21.md` ANTES de correr ninguna medición
(declaración 2026-11-15T19:33:00Z; mtime del archivo 19:32:58Z;
los JSONs tienen mtime posterior, 19:33:48Z y siguientes; el
verificador independiente anotó su resultado después, sin tocar
los valores medidos).

**Estado de partida y de cierre (verificado):** corpus 1.197 líneas,
sha `7c689fef…` (antes y después: intacto, nada de este frente toca
el corpus); dataset 30 filas + cabecera, sha `0852d58f…` (antes y
después: intacto). Datos: HSall_members.csv (6.201.455 B, sha
`495aee95…`) e indicators.tab (5.538.726 B, sha `7ec636c8…`),
copias en `datos/` de r21, verificados antes de correr.

## M-84 — d05 L4: polarización en dim2, pendiente LINEAL de P2 — NO_CONFIRMA (no hay tendencia lineal; la serie es un arco)

- **Resultado:** serie dim2 restaurada: **86 congresos (34..119)**,
  idéntica dígito a dígito a M-78/M-81 (máx diff 0,0). Pendiente
  lineal OLS de P2 contra el índice de congreso: **−0,000001**
  (SE 0,000960; t = −0,0015; p = 0,9988; R² = 0,0000). IC bootstrap
  95% (500 réplicas, semilla 0): **[−0,001364, 0,001661]** — incluye
  0. IC analítico [−0,001877, 0,001874] — incluye 0. → **NO_CONFIRMA**.
- **Lectura — la subida y la caída se cancelan exactamente:** la
  serie NO es monótona: P2(34) = 0,607 (ya alta al inicio), sube
  hasta P2(máx) = 0,9275 en el Congreso 80 y cae a P2(119) = 0,124.
  Tramo 34–80: pendiente +0,007744; tramo 81–119: pendiente
  −0,015666. La pendiente lineal sobre el rango completo es cero
  hasta la sexta cifra porque el arco se cierra sobre sí mismo.
  Esto resuelve la pregunta que M-75/M-78 dejaron abierta
  ("¿tendencia o extremo?") para la forma lineal: NO hay tendencia
  lineal; los cocientes máximos (463,75 en M-75; 50,1351 en M-78)
  medían la razón entre un ancla casi-cero (Congreso 62, P2 =
  0,002; Congreso 60, P2 = 0,0185) y un pico, no un crecimiento
  sostenido — el punto de partida ya era 0,607. El cero exacto
  del Congreso 106 (P2 = 0,0) entra como punto válido: la
  especificación lineal no se bloquea donde la log se bloqueó
  (M-81). La cara **d05 L4 NO se cierra** (el veredicto es
  concluyente sobre la forma lineal, no sobre el mecanismo; la
  decisión de cierre es de F8) — pero la forma "crecimiento
  sostenido" queda descartada: la subida 34–80 existe y la caída
  81–119 también; juntas no hacen tendencia.
- **Verificación independiente:** re-cómputo con pivot_table +
  medianas y np.polyfit (otro camino de código): serie idéntica
  (máx diff 0,0 vs medida y vs M-81), pendiente −0,000001,
  IC bootstrap con semilla distinta (123) [−0,001330, 0,001581] —
  coincide.

## M-85 — d05 L7: borde de banda de built_up_area_m2, bootstrap por pares — CONFIRMA (el borde NO se resuelve; el singleton se sostiene)

- **Resultado:** built_up_area_m2, mismo protocolo OLS log-log de
  M-82 (n = 10.351): β = **0,9023** ± 0,0065, R² = 0,6519. IC
  bootstrap 95% (2.000 réplicas, semilla 0): **[0,8896, 0,9142]**
  — **contiene 0,90**. IC analítico [0,8896, 0,9150]. Fracción de
  réplicas bootstrap con β < 0,90: **0,3495** (la misma fracción
  cae dentro de [0,80, 0,90], porque el borde inferior del IC,
  0,8896, está muy por encima de 0,80). Control: area_km2 β =
  0,8627 ± 0,0049 — reproduce M-76/M-82 exacto. → **CONFIRMA**
  (el IC no queda entero dentro de la banda; el singleton
  area_km2 se sostiene).
- **Lectura — el borde es borde, y el bootstrap lo confirma:**
  la estimación puntual sigue fuera por 0,0023 y el intervalo
  bootstrap, aunque más estrecho que el analítico en el extremo
  superior (0,9142 vs 0,9150), sigue solapando 0,90. En el 34,95%
  de las réplicas β cae dentro de la banda — built_up_area_m2 es
  compatible con la banda por intervalo, pero el criterio
  declarado (IC entero dentro de [0,80, 0,90]) no se cumple: el
  borde no se resuelve hacia dentro. La familia β-en-banda, si
  existe, sigue siendo de una sola variable por estimación
  puntual y de a lo sumo dos por intervalo (M-82, intacto). La
  cara d05 L7 NO se cierra.
- **Verificación independiente:** re-cómputo con pandas +
  np.polyfit (otro camino de código): β 0,9023, R² 0,6519,
  IC bootstrap con semilla distinta (7) [0,8890, 0,9143] —
  coincide.

## M-86 — cruce β∧R²: censo conjunto sobre las 32 variables — CONFIRMA (0 cruces; son fenómenos independientes)

- **Resultado:** censo conjunto con los protocolos M-79 (R²) y
  M-82 (β) para las 32 variables: **0 variables cumplen β ∈
  [0,80, 0,90] Y R² > 0,8 a la vez**. Variables con β en banda:
  1 (area_km2). Variables con R² > 0,8: **0** (R² máximo del
  censo: 0,7490, area_km2). La más cercana al cruce es area_km2
  misma: β en banda pero R² = 0,7490, a 0,051 del umbral 0,8.
  Control: β y R² reproducen M-79/M-82 dentro de 0,0005 en las
  32 variables (máx diff β 0,000047, máx diff R² 0,000050). →
  **CONFIRMA**.
- **Lectura — el muro R² es absoluto en este archivo:** ninguna
  variable alcanza R² > 0,8, así que el cruce es imposible por
  construcción del censo, no solo por azar: el máximo R² (0,7490)
  es el de la única variable con β en banda. El singleton β y el
  muro R² son fenómenos independientes — ni siquiera comparten
  una variable. La cara d05 L7 NO se cierra (el muro describe el
  archivo, no lo resuelve), pero la pregunta "¿alguna variable
  cruza ambas?" queda respondida: ninguna, y el R² máximo del
  archivo está 0,051 por debajo del umbral.
- **Verificación independiente:** re-cómputo con pandas +
  np.polyfit (otro camino de código): 32 variables, 0 cumplen
  ambas, máx diff β 0,000047, máx diff R² 0,000050 — coincide.

## Tally y precedentes

- **Veredictos r21: NO_CONFIRMA 1 (M-84, pendiente lineal cero)
/ CONFIRMA 2 (M-85 borde sin resolver, M-86 cero cruces).**
  Serie F3: r12 M-56 DIFERENCIA / M-57 NO_CONFIRMA / M-58 NO_SÉ /
  M-59 CONFIRMA; r13 M-60 CONFIRMA / M-61 NO_CONFIRMA / M-62
  CONFIRMA; r14 M-63 CONFIRMA / M-64 NO_CONFIRMA / M-65
  NO_CONFIRMA; r15 M-66 CONFIRMA / M-67 NO_CONFIRMA / M-68
  NO_CONFIRMA; r16 M-69 NO_CONFIRMA / M-70 NO_SÉ / M-71
  NO_CONFIRMA; r17 M-72 CONFIRMA / M-73 NO_CONFIRMA / M-74
  NO_CONFIRMA; r18 M-75 CONFIRMA / M-76 NO_CONFIRMA / M-77
  NO_SÉ; r19 M-78 CONFIRMA / M-79 CONFIRMA / M-80 CONFIRMA;
  r20 M-81 NO_SÉ / M-82 CONFIRMA / M-83 CONFIRMA; **r21 M-84
  NO_CONFIRMA / M-85 CONFIRMA / M-86 CONFIRMA**.
- **No se preparan como claims** (0 precedentes de veredictos de
  medición como claims en 1.197; las mediciones se depositan como
  resultados y entran por inscripción en el anexo — los ítems del
  anexo para M-84.. los prepara F7, precedente N-18/N-19/N-20/
  N-22/N-23/N-25/N-26/N-27/N-29/N-30).
- **Caras tocadas:** d05 L4 (M-84: NO_CONFIRMA, pendiente lineal
  −0,000001, IC incluye 0; la serie es un arco, no una tendencia;
  la cara NO se cierra); d05 L7 (M-85: CONFIRMA, borde sin
  resolver; M-86: CONFIRMA, 0 cruces β∧R²; la cara NO se cierra).

ρ(x) > 0. Zvvvvv.
