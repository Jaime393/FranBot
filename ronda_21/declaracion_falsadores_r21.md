# Declaración de falsadores — F3 Ronda 21 (M-84, M-85, M-86)

**Fecha:** 2026-11-15. **Frente:** F3, ronda 21, FASE 1.
**Declarada POR ESCRITO ANTES de correr ninguna medición.**
Hora de declaración: **2026-11-15T19:33:00Z** (reloj del sistema;
los scripts de medición y los JSONs se corren después de esta hora).
Ningún valor de M-84/M-85/M-86 se ha calculado antes de esta
declaración. (Los números citados como precedentes —M-52/M-57/M-63/
M-65/M-66/M-67/M-68/M-69/M-70/M-71/M-72/M-73/M-74/M-75/M-76/M-77/
M-78/M-79/M-80/M-81/M-82/M-83— son publicados en r11–r20; los
falsadores son reglas sobre ellos, no re-lecturas de sus veredictos.)

Estado de partida verificado antes de declarar: corpus 1.197 líneas,
sha `7c689fef…` (nada de este frente toca el corpus); dataset 30 filas
+ cabecera, sha `0852d58f…` (intacto). Datos copiados a
`ejecucion_f3/datos/` de r21 y verificados: HSall_members.csv
(6.201.455 B, sha `495aee95…`, igual que M-61/M-64/M-67/M-70/M-74/
M-75/M-78/M-81); indicators.tab (5.538.726 B, sha `7ec636c8…`, igual
que M-52/M-57/M-65/M-68/M-71/M-73/M-76/M-79/M-82).

## M-84 — d05 L4: polarización en dim2, pendiente LINEAL de P2 (nueva especificación)

- **Pregunta:** M-75/M-78 CONFIRMA formales por cociente máximo no
  cruzaron el muro (el umbral >2 no discrimina en dim2: cualquier
  ancla bajo 0,46 da cociente > 2; el bootstrap temporal de M-78
  cruza 2, mediana 2,90, solo 70,14% > 2). M-81 intentó la
  pendiente log y se bloqueó: P2 = 0,0 exacto en el Congreso 106
  (medianas −0,026 = −0,026) hace ln indefinido. ¿Es el crecimiento
  de P2 una tendencia temporal lineal o un extremo de selección del
  rango histórico? La pendiente LINEAL no usa logaritmo: el cero
  exacto del Congreso 106 es un punto válido de la serie, no un
  bloqueo. Esta es la especificación que M-81 dejó como candidata.
- **Nueva especificación (distinta de M-75/M-78/M-81):** misma fuente
  y protocolo de serie que M-78/M-81 (Voteview HSall_members.csv,
  Cámara EE.UU., party_code 100/200 por parseo tolerante `float()`
  luego `int()`, serie restaurada de 86 congresos 34..119, P2(C) =
  |mediana dim2 D − mediana dim2 R|), pero en vez de un cociente
  máximo o un log: **ajuste OLS de P2 contra el índice de congreso**
  (86 puntos, x = número de congreso 34..119) y **IC bootstrap 95%
  de la pendiente** por remuestreo de pares (congreso, P2), 500
  réplicas, semilla 0, percentiles 2,5/97,5 (mismo bootstrap que
  M-81, sin log).
- **Falsador:** CONFIRMA si el IC bootstrap 95% de la pendiente
  **excluye 0 con pendiente > 0** (hay tendencia lineal creciente
  detectable en dim2; el cociente máximo no es solo artefacto de
  selección); NO_CONFIRMA si el IC bootstrap 95% **incluye 0**
  (no hay tendencia lineal detectable en dim2 sobre el rango
  completo; el cociente máximo sigue siendo artefacto de
  selección del rango histórico).
  Guarda (no cambia el falsador): la pendiente lineal no usa log,
  así que ningún P2 = 0 bloquea; si la serie quedara vacía, NO_SÉ
  con la causa.
- **Secundario (NO decisorio):** pendiente OLS analítica ± SE,
  IC analítico 95%, p-valor t, R² del ajuste; pendientes por
  tramo (34–80 y 81–119) como contexto descriptivo; P2(119) y
  P2(máx) como controles; la serie P2 completa (debe ser idéntica
  dígito a dígito a M-78/M-81: 86/86 dentro de 0,00005).
- **Guarda de lectura (no cambia el veredicto declarado):** la
  pendiente lineal es una tendencia sobre una serie no monótona
  (sube hasta el Congreso 80 y baja después); un NO_CONFIRMA no
  niega la subida 34–80, solo que no hay tendencia lineal
  detectable sobre el rango completo. La cara d05 L4 solo se
  cierra si el veredicto es concluyente sobre la pregunta
  central (criterio r8/r9, decisión de F8, no de este frente).
- **Límites declarados:** mismos que M-61/M-64/M-67/M-74/M-75/
  M-78/M-81 (DW-NOMINATE dim2; Cámara EE.UU.); el bootstrap de
  pares supone los 86 puntos intercambiables y no modela la
  autocorrelación temporal — por eso se acompaña del IC analítico
  y de los tramos como controles, sin cambiar el falsador.

## M-85 — d05 L7: borde de banda de built_up_area_m2, re-estimación con bootstrap (nueva especificación)

- **Pregunta:** M-82 CONFIRMA el singleton β por estimación
  puntual (solo area_km2 en banda [0,80, 0,90]; built_up_area_m2
  β = 0,9023 ± 0,0065, IC analítico [0,8896, 0,9150] solapa el
  borde 0,90 por 0,0023). ¿Se resuelve el borde con bootstrap por
  pares, o sigue al borde?
- **Nueva especificación (distinta de M-82):** mismo protocolo OLS
  log-log base 10 de M-82 (Y = built_up_area_m2 vs X =
  resident_pop; inclusión resident_pop>0, Y>0 y finitos;
  n = 10.351), pero el estadístico decisorio es el **IC bootstrap
  95% de β por remuestreo de pares** (log10 X, log10 Y), 2.000
  réplicas, semilla 0, percentiles 2,5/97,5 (más réplicas que
  M-81 porque el borde exige resolución fina). Se reportan además
  la fracción de réplicas bootstrap con β < 0,90 y la fracción con
  β dentro de [0,80, 0,90].
- **Falsador:** la proposición bajo prueba es el singleton de
  M-82 (built_up_area_m2 NO es segundo en banda). CONFIRMA si el
  IC bootstrap 95% de β **contiene 0,90 o queda entero por encima
  de 0,90** (el borde no se resuelve hacia dentro de la banda;
  built_up_area_m2 sigue fuera por estimación puntual y el
  singleton area_km2 se sostiene); NO_CONFIRMA si el IC
  bootstrap 95% queda **entero dentro de [0,80, 0,90]**
  (β en banda por intervalo: built_up_area_m2 es segundo en
  banda y el singleton se rompe).
  Guarda (no cambia el falsador): el criterio es el intervalo
  bootstrap declarado; el IC analítico se reporta como
  secundario. Un IC que contenga 0,90 no mueve β de 0,9023: el
  borde sigue siendo borde, y el matiz queda registrado sin
  cambiar el veredicto declarado.
- **Secundario (NO decisorio):** β ± SE analítico, IC analítico
  95%, R², n_incluidas; β de area_km2 re-medido como control
  (debe reproducir M-76/M-82: 0,8627 ± 0,0049 dentro de 0,0005).
- **Límites declarados:** mismos que M-57/M-65/M-68/M-71/M-73/
  M-76/M-79/M-82 (población 2015 UCD frente a indicadores
  GHSL/UCD; ciudad = área urbana GHSL/UCD; OLS log-log supone
  errores homocedásticos en log-log). El bootstrap de pares
  supone las 10.351 áreas intercambiables; con n grande el
  remuestreo es estable.

## M-86 — cruce β∧R²: censo conjunto sobre las 32 variables (nueva especificación)

- **Pregunta:** M-79 censó R² (0/32 por encima de 0,8; muro
  sistemático) y M-82 censó β (singleton area_km2 en banda).
  ¿Se cruzan alguna vez β en banda y R² alto en la misma
  variable, o son fenómenos independientes?
- **Nueva especificación (distinta de M-79/M-82):** censo conjunto
  con los protocolos ya publicados: para CADA una de las 32
  variables numéricas candidatas de indicators.tab (las mismas 32
  de M-79/M-82, mismo criterio de inclusión resident_pop>0, Y>0
  y finitos, n_incluidas por variable), OLS log-log base 10 vs
  resident_pop; se registra β y R² por variable y se cuenta
  cuántas cumplen **β ∈ [0,80, 0,90] Y R² > 0,8 a la vez**.
  Control: los β y R² deben reproducir M-79 (R²) y M-82 (β)
  dentro de 0,0005 en las 32 variables.
- **Falsador:** CONFIRMA si **0 variables cumplen ambas
  condiciones a la vez** (β en banda y R² > 0,8 no se cruzan:
  el singleton β y el muro R² son fenómenos independientes);
  NO_CONFIRMA si **≥ 1 variable cumple ambas** (hay cruce; el
  muro R² no es absoluto y la familia β-en-banda tiene al menos
  un miembro con ajuste fuerte).
  Guarda (no cambia el falsador): el criterio usa las estimaciones
  puntuales de β y R², como M-79/M-82; los IC de β se reportan
  como secundarios y no mueven el conteo.
- **Secundario (NO decisorio):** ranking por β y por R²; la
  variable con mayor R² entre las de β en banda; distancia de
  area_km2 al umbral R² = 0,8.
- **Límites declarados:** mismos que M-79/M-82 (el censo describe
  qué variables del archivo cumplen ambas condiciones; no prueba
  la ley de escalamiento fuera del archivo).

ρ(x) > 0. Zvvvvv.
