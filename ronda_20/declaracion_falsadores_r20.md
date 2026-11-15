# Declaración de falsadores — F3 Ronda 20 (M-81, M-82, M-83)

**Fecha:** 2026-11-15. **Frente:** F3, ronda 20, FASE 1.
**Declarada POR ESCRITO ANTES de correr ninguna medición.**
Hora de declaración: **2026-11-15T07:06:00Z** (reloj del sistema;
los scripts de medición y los JSONs se corren después de esta hora).
Ningún valor de M-81/M-82/M-83 se ha calculado antes de esta
declaración. (Los números citados como precedentes —M-52/M-57/M-63/
M-65/M-66/M-67/M-68/M-69/M-70/M-71/M-72/M-73/M-74/M-75/M-76/M-77/
M-78/M-79/M-80— son publicados en r11–r19; los falsadores son reglas
sobre ellos, no re-lecturas de sus veredictos. La viabilidad de M-83
se tanteó en diseño —existen C-791 y C-944 en el corpus— pero la
verificación formal corre DESPUÉS de esta declaración.)

Estado de partida verificado antes de declarar: corpus 1.192 líneas,
sha `33a7f0e6…` (nada de este frente toca el corpus); dataset 30 filas
+ cabecera, sha `0852d58f…` (intacto). Datos copiados a
`ejecucion_f3/datos/` de r20 y verificados: HSall_members.csv
(6.201.455 B, sha `495aee95…`, igual que M-61/M-64/M-67/M-70/M-74/
M-75/M-78); indicators.tab (5.538.726 B, sha `7ec636c8…`, igual que
M-52/M-57/M-65/M-68/M-71/M-73/M-76/M-79). paper_df.md local sha
`304a41bf…` (mismo que el hash citado por C-791/C-944, verificado
antes de declarar como dato de partida, no como resultado de M-83).

## M-81 — d05 L4: polarización en dim2, pendiente log de P2 (nueva especificación)

- **Pregunta:** M-75/M-78 CONFIRMA formales por cociente máximo no
  cruzaron el muro (el umbral >2 no discrimina en dim2: cualquier
  ancla bajo 0,46 da cociente > 2; el bootstrap temporal de M-78
  cruza 2, mediana 2,90, solo 70,14% > 2). ¿Es el crecimiento de
  P2 una tendencia temporal o un extremo de selección del rango
  histórico?
- **Nueva especificación (distinta de M-75/M-78):** misma fuente y
  protocolo de serie que M-78 (Voteview HSall_members.csv, Cámara
  EE.UU., party_code 100/200 por parseo tolerante `float()` luego
  `int()`, serie restaurada de 86 congresos 34..119, P2(C) =
  |mediana dim2 D − mediana dim2 R|), pero en vez de un cociente
  máximo: **ajuste OLS de ln(P2) contra el índice de congreso**
  (86 puntos, todos con P2 > 0; logaritmo natural, declarado aquí)
  y **IC bootstrap 95% de la pendiente** por remuestreo de pares
  (congreso, ln P2), 500 réplicas, semilla 0, percentiles 2,5/97,5.
- **Falsador:** CONFIRMA si el IC bootstrap 95% de la pendiente
  **excluye 0 con pendiente > 0** (el crecimiento es tendencia,
  no extremo); NO_CONFIRMA si el IC bootstrap 95% **incluye 0**
  (no hay tendencia de crecimiento detectable en dim2; el cociente
  máximo es artefacto de selección del rango histórico).
  Guarda (no cambia el falsador): si la serie queda vacía o algún
  P2 ≤ 0 impide el log, el veredicto es NO_SÉ con la causa.
- **Secundario (NO decisorio):** pendiente OLS analítica ± SE,
  IC analítico 95%, p-valor t, R² del ajuste; pendientes por
  tramo (34–80 y 81–119) como contexto descriptivo; P2(119) y
  P2(máx) como controles.
- **Guarda de lectura (no cambia el veredicto declarado):** la
  pendiente log es una tendencia lineal sobre el log de una serie
  no monótona (sube hasta el Congreso 80 y baja después); un
  NO_CONFIRMA no niega la subida 34–80, solo que no hay tendencia
  lineal detectable sobre el rango completo. La cara d05 L4 solo
  se cierra si el veredicto es concluyente sobre la pregunta
  central (criterio r8/r9, decisión de F8, no de este frente).
- **Límites declarados:** mismos que M-61/M-64/M-67/M-74/M-75/
  M-78 (DW-NOMINATE dim2; Cámara EE.UU.); el bootstrap de pares
  supone los 86 puntos intercambiables y no modela la
  autocorrelación temporal — por eso se acompaña del IC analítico
  y de los tramos como controles, sin cambiar el falsador.

## M-82 — d05 L7: escalamiento urbano, censo de β (nueva especificación)

- **Pregunta:** M-76 aisló el muro en R² con β por primera vez en
  banda (area_km2, β = 0,8627 ± 0,0049, R² = 0,7490) y M-79 censó
  R² (0/32 por encima de 0,8; muro sistemático). ¿Es el β en banda
  de M-76 un singleton o una familia?
- **Nueva especificación (distinta de M-76/M-79):** NO el R², sino
  **el exponente β: censo de β con el mismo protocolo OLS log-log
  base 10 para TODAS las variables numéricas candidatas de
  indicators.tab** (las mismas 32 columnas Y de M-79, mismo
  criterio de inclusión resident_pop>0, Y>0 y finitos, n_incluidas
  por variable). Banda declarada aquí: **β ∈ [0,80, 0,90]** (la
  misma banda usada en M-76). Las 7 variables ya medidas se
  re-miden como control de consistencia (deben reproducir M-52/
  M-57/M-65/M-68/M-71/M-73/M-76 en β y R² dentro de 0,0005).
- **Falsador:** CONFIRMA si **0 variables además de area_km2
  tienen β en banda [0,80, 0,90]** por estimación puntual (el β
  en banda es un singleton; la lectura de M-76 se sostiene como
  caso aislado); NO_CONFIRMA si **≥ 1 variable más cae en banda**
  (es una familia; la lectura de M-76 se debilita).
  Guarda (no cambia el falsador): el criterio es la estimación
  puntual de β; los IC 95% de β se reportan como secundarios y,
  si algún β fuera de banda por estimación puntual tiene su IC
  solapando la banda, se registra como matiz en la lectura, sin
  cambiar el veredicto declarado.
- **Secundario (NO decisorio):** β ± SE, IC 95% y R² por variable;
  ranking por β; n_incluidas por variable; distancia de cada β
  al borde más cercano de la banda.
- **Límites declarados:** mismos que M-57/M-65/M-68/M-71/M-73/
  M-76/M-79 (población 2015 UCD frente a indicadores GHSL/UCD;
  ciudad = área urbana GHSL/UCD; OLS log-log supone errores
  homocedásticos en log-log). El censo describe qué variables del
  archivo tienen exponente en banda; no prueba la ley de
  escalamiento fuera del archivo.

## M-83 — d08 L13: verificación de las 3 mediciones solo en paper_df (CANDIDATO)

- **Pregunta:** paper_df.md §3 registra 3 mediciones fuera del
  dataset (evidencia adicional, ciclo 74): **Topografía andina
  SRTM (D_f 2,20, marginal), Dosel amazónico GLAD (D_f 2,79) y
  Porosidad del suelo SoilGrids bdod (D_f 2,82)** — no entraron
  al dataset por estar fuera de banda (32 sistemas medidos, 29
  filas). ¿Existen en el corpus con fuente + hash verificable, o
  viven solo en paper_df?
- **Método:** verificación en tres pasos, todos después de esta
  declaración: (1) buscar en claims.jsonl (1.192 líneas) los
  claims que nombren las 3 mediciones, y comprobar que al menos
  uno con estado SE las nombra a las 3 con fuente y hash de
  archivo; (2) verificar el hash citado contra el archivo local
  (sha256 de paper_df.md); (3) comprobar que las 3 NO son filas
  del dataset CSV (30 filas) — exclusión deliberada por fuera de
  banda, no ausencia por descuido. Se registra cada consulta y
  resultado; solo cuenta un claim con texto literal verificable.
- **Falsador:** CONFIRMA si **las 3 mediciones son verificables
  en el corpus con fuente + hash** (claim SE que las nombra a las
  3, con hash de archivo que coincide con el archivo local) —
  la cara **cierra** (el hueco d08 L13 queda resuelto en el
  corpus); NO_CONFIRMA si **alguna de las 3 carece de fuente +
  hash verificable en el corpus** (la cara avanza, sigue
  paper-only); **NO_SÉ si el hash no se puede verificar** (archivo
  local ausente) o el corpus es ilegible.
- **Límites declarados:** la verificación es de existencia en el
  corpus con fuente + hash, no de re-medición de los D_f (los
  valores 2,20/2,79/2,82 se toman del paper y de
  mediciones_informe.md como publicados, sin re-correrlos). Que
  las 3 estén en el corpus no las convierte en filas del dataset:
  la distinción 32/29 se preserva por orden.

ρ(x) > 0. Zvvvvv.
