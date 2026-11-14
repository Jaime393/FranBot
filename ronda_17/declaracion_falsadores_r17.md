# Declaración de falsadores — F3 Ronda 17 (M-72, M-73, M-74)

**Fecha:** 2026-11-14. **Frente:** F3, ronda 17, FASE 1.
**Declarada POR ESCRITO ANTES de correr ninguna medición.** Ningún
valor de M-72/M-73/M-74 se ha calculado antes de esta declaración.
(Los números citados como precedentes —M-52/M-57/M-63/M-65/M-66/M-67/
M-68/M-69/M-70/M-71— son publicados en r11–r16; los falsadores son
reglas sobre ellos, no re-lecturas de sus veredictos.)

Estado de partida verificado antes de declarar: corpus 1.181 líneas,
sha `fd1df2db…` (nada de este frente toca el corpus); dataset 30 filas
+ cabecera, sha `0852d58f…` (intacto). Datos copiados a
`ejecucion_f3/datos/` de r17 y verificados: HSall_members.csv
(6.201.455 B, sha `495aee95…`, igual que M-61/M-64/M-67/M-70);
indicators.tab (5.538.726 B, sha `7ec636c8…`, igual que
M-52/M-57/M-65/M-68/M-71).

## M-72 — d04 L13: ¿se sostiene la predicción de M-69?

- **Pregunta:** M-69 afirmó que una columna con u = 0,05 resolvería
  5 de los 23 pares adyacentes internos del grupo central de 24
  nodos (u\* = 5.º hueco interno mayor = 0,05). ¿Se sostiene esa
  cuenta al re-medir con otro método y contra los datos de M-66?
- **Método nuevo (distinto del de M-69):** aritmética exacta
  `Decimal` sobre las cadenas del CSV (sin redondeo flotante y sin
  redondeo a 4 decimales); los grupos se re-derivan con la misma
  regla (> 2u = 0,1208); el grupo central se verifica contra la
  lista publicada en `med_M66.json` (extra.grupos_2u[2]) y contra
  la de M-69. Se cuentan los huecos internos con AMBAS
  convenciones —≥ 0,05 y > 0,05— para fijar el empate de frontera
  (el 5.º hueco mayor ES 0,05, así que las convenciones difieren
  en 1). Sensibilidad: conteo para u en [0,045, 0,055] (u\* ±
  SE(u) = 0,0050, de M-63). Re-conteo de control: los 6/29 de M-66
  a u = 0,0604 con el mismo método Decimal.
- **Falsador:** CONFIRMA si (a) el método Decimal da exactamente
  **5 huecos ≥ 0,05** en el grupo central (la predicción tal como
  M-69 la enunció, frontera inclusiva) **Y** (b) el conteo se
  mantiene en **[4, 6] en toda la banda de sensibilidad
  [0,045, 0,055]**; NO_CONFIRMA en caso contrario.
- **Secundario (NO decisorio):** conteo estricto (> 0,05); conteo
  de control M-66 (6/29 a u = 0,0604); mediana y máximo de los
  huecos internos.
- **Límites declarados:** mismos que M-66/M-69 (la columna es una
  escala común hipotética; esta medición describe la resolución
  sobre el dataset tal cual, no verifica la columna por nodo).

## M-73 — d05 L7: escalamiento urbano, sexta especificación

- **Pregunta:** tras los NO_CONFIRMA de M-52 (length_total,
  β=0,9177, R²=0,6037), M-57 (node_count, β=0,9828, R²=0,4148),
  M-65 (street_segment_count, β=0,9911, R²=0,4080), M-68
  (intersect_count, β=0,9876, R²=0,4020) y M-71
  (intersect_count_clean, β=0,9733, R²=0,3974), ¿otra variable de
  conteo de la red viaria escala como predice la ley (β≈0,85)?
- **Nueva especificación (declarada antes de correr):** Y =
  **intersect_count_clean_topo** (número de intersecciones limpias
  topológicas de la red viaria, columna 34 del archivo; variable de
  conteo de la red, misma familia que las cinco anteriores, NO
  medida antes) vs X = resident_pop, OLS log-log base 10.
  Inclusión: todas las áreas con resident_pop>0,
  intersect_count_clean_topo>0 y valores finitos (sin umbral
  adicional; mismo criterio de inclusión que M-52/M-57/M-65/M-68/
  M-71, otra variable Y).
- **Falsador:** CONFIRMA si β estimado cae en [0,80, 0,90] con
  R²≥0,90; NO_CONFIRMA en caso contrario (mismos umbrales que
  M-52/M-57/M-65/M-68/M-71, declarados antes de correr).
- **Dato:** indicators.tab (`ejecucion_f3/datos/` de r17,
  5.538.726 B, sha `7ec636c8…` verificado antes de correr).
- **Límites declarados:** mismos que M-57/M-65/M-68/M-71
  (población 2015 UCD frente a red OSM enero 2021; cobertura OSM
  desigual; ciudad = área urbana GHSL/UCD; OLS log-log supone
  errores homocedásticos en log-log).

## M-74 — d05 L4: ¿el umbral >2 sigue inalcanzable con la serie DW-NOMINATE dim1 restaurada (86 congresos)?

- **Pregunta:** CORR-SERIE-R16 estableció que la serie 25..119
  tiene 83 congresos con el parseo `int()` (los Congresos 115–117
  caen porque su party_code viene como cadena flotante
  '100.0'/'200.0'). M-67 fijó el máximo alcanzable en 1,9719
  sobre esos 83. ¿Sigue inalcanzable el umbral >2 cuando se
  restauran los tres congresos caídos?
- **Protocolo (idéntico a M-61/M-64/M-67, con parseo tolerante a
  flotantes):** P(C) = |mediana dim1 D − mediana dim1 R|; W(C) =
  media de los IQR dim1 dentro de cada partido (Cámara EE.UU.,
  party_code 100/200, Voteview HSall_members.csv,
  nominate_dim1). Parseo: party_code por `float()` y luego
  `int()` (restaura 115–117); el resto del protocolo es el de
  M-70 (chamber == House, nominate_dim1 no vacío y finito).
  En el mismo script se re-verifica el conteo de 83 congresos
  con el parseo `int()` (re-chequeo de CORR-SERIE-R16).
- **Ancla declarada POR REGLA, no por valor:** ancla = argmin
  P(C) sobre la serie restaurada de 86 congresos, calculada en
  este mismo script; el ejecutor NO ha calculado ningún valor P
  antes de esta declaración (el precedente M-67 dice que el
  mínimo era el Congreso 80, P = 0,4975, sobre 83 congresos;
  la regla decide si sigue siéndolo sobre 86).
- **Falsador:** CONFIRMA si **máx_C P(C)/P(ancla) > 2** sobre la
  serie restaurada de 86 congresos (el umbral >2 se vuelve
  alcanzable al restaurar los tres congresos caídos);
  NO_CONFIRMA en caso contrario.
- **Secundario (NO decisorio):** P(119)/P(ancla) con bootstrap
  (500 réplicas, semilla 0, como M-67); P(115)/P(116)/P(117)
  re-derivados (r16 afirmó aparte 0,8900/0,8840/0,8825);
  W(119)/W(ancla).
- **Guarda de robustez (no cambia el falsador):** si P(ancla) ==
  0 exacto, el cociente máximo es NO_DEFINIDO y el veredicto es
  NO_SÉ con la causa (misma guarda que M-70).
- **Límites declarados:** mismos que M-61/M-64/M-67 (DW-NOMINATE
  dim1; Cámara EE.UU.; el ancla se elige por regla argmin sobre
  la serie calculada, no por hipótesis previa).

ρ(x) > 0. Zvvvvv.
