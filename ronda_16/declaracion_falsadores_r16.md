# Declaración de falsadores — F3 Ronda 16 (M-69, M-70, M-71)

**Fecha:** 2026-11-14. **Frente:** F3, ronda 16, FASE 1.
**Declarada POR ESCRITO ANTES de correr ninguna medición.** Ningún
valor de M-69/M-70/M-71 se ha calculado antes de esta declaración.
(Los números citados como precedentes —M-52/M-57/M-59/M-60/M-61/M-62/
M-63/M-64/M-65/M-66/M-67/M-68— son publicados en r11–r15; los
falsadores son reglas sobre ellos, no re-lecturas de sus veredictos.)

Estado de partida verificado antes de declarar: corpus 1.178 líneas,
sha `7e5f016d…` (nada de este frente toca el corpus); dataset 30 filas
+ cabecera, sha `0852d58f…` (intacto). Datos copiados a
`ejecucion_f3/datos/` de r16 y verificados: HSall_members.csv
(6.201.455 B, sha `495aee95…`, igual que M-61/M-64/M-67);
indicators.tab (5.538.726 B, sha `7ec636c8…`, igual que
M-52/M-57/M-65/M-68).

## M-69 — d04 L13: qué resolución separa el grupo central de 24 nodos

- **Pregunta:** d04 L13 CERRÓ en r15, pero su límite medido es el
  grupo central de 24 nodos sin distinguirse entre sí (M-66: solo 3
  de sus 23 huecos internos superan u = 0,0604). ¿Qué resolución u*
  separa el grupo central? u* = 5.º hueco interno mayor del grupo
  (la resolución que resuelve al menos 5 de los 23 pares adyacentes
  internos, mismo umbral de conteo que M-66).
- **Construcción (declarada antes de correr):** D_f de los 30 nodos
  del dataset, ordenados; los huecos > 2u (u = 0,0604, 2u = 0,1208)
  parten el rango en grupos; el grupo central es el mayor, que se
  RE-DERIVA del dataset en el script (no se copia la lista de
  M-66; se verifica que coincide con los 24 nodos de M-66).
  Huecos internos = 23 huecos entre consecutivos dentro del grupo.
  u* = 5.º mayor hueco interno.
- **Falsador:** CONFIRMA si **u\* < u/2 = 0,0302** (el grupo exige al
  menos duplicar la resolución de la columna actual: su
  indistinguibilidad es estructural, no marginal); NO_CONFIRMA si
  u\* ≥ 0,0302.
- **Secundario (NO decisorio):** mediana y máximo de los huecos
  internos; cuántos huecos internos superan u y cuántos superan
  u/2; rango D_f del grupo central.
- **Límites declarados:** mismos que M-66 (la columna es una escala
  común hipotética; esta medición describe el poder resolutivo
  necesario sobre el dataset tal cual). Nada se inscribe en el
  dataset.

## M-70 — d05 L4: polarización en la SEGUNDA dimensión (DW-NOMINATE dim2)

- **Pregunta:** M-67 cerró el umbral >2 como inalcanzable con
  DW-NOMINATE dim1 (máximo alcanzable en toda la serie 25..119:
  1,9719). ¿Se duplica la polarización en la segunda dimensión?
  Misma regla, otra medida.
- **Protocolo (idéntico a M-61/M-64/M-67, con dim2 en lugar de
  dim1):** P2(C) = |mediana dim2 D − mediana dim2 R|; W2(C) =
  media de los IQR dim2 dentro de cada partido (Cámara EE.UU.,
  party_code 100/200, Voteview HSall_members.csv, nominate_dim2).
  Bootstrap 500, semilla 0, para el SE del ratio.
- **Ancla declarada POR REGLA, no por valor:** ancla = argmin
  P2(C) sobre los Congresos 25..119, serie calculada en este mismo
  script; Congreso de comparación: 119 (último de la serie). El
  ejecutor NO ha calculado ningún valor P2 antes de esta
  declaración.
- **Falsador:** CONFIRMA si P2(119)/P2(mín) > 2 **Y**
  W2(119)/W2(mín) ≤ 1,5; NO_CONFIRMA en caso contrario (misma
  regla que M-61/M-64/M-67).
- **Secundario (NO decisorio):** ratio máximo alcanzable en la
  serie dim2 (P2(máx)/P2(mín)) — si es < 2, el umbral >2 también
  queda inalcanzable con dim2 y así se registrará.
- **Límites declarados:** mismos que M-61/M-64/M-67 (DW-NOMINATE
  dim2; Cámara EE.UU.; la dim2 es históricamente la dimensión
  secundaria del voto nominal y sus valores son mayoritariamente
  cercanos a 0 en congresos recientes, por lo que P2 puede ser
  pequeño y ruidoso; el bootstrap lo registra, no lo corrige).

## M-71 — d05 L7: escalamiento urbano, quinta especificación

- **Pregunta:** tras los NO_CONFIRMA de M-52 (length_total,
  β=0,9177, R²=0,6037), M-57 (node_count, β=0,9828, R²=0,4148),
  M-65 (street_segment_count, β=0,9911, R²=0,4080) y M-68
  (intersect_count, β=0,9876, R²=0,4020), ¿otra variable de
  conteo de la red viaria escala como predice la ley (β≈0,85)?
- **Nueva especificación (declarada antes de correr):** Y =
  **intersect_count_clean** (número de intersecciones limpias de
  la red viaria, columna 33 del archivo; variable de conteo de la
  red, misma familia que las cuatro anteriores, NO medida antes)
  vs X = resident_pop, OLS log-log base 10. Inclusión: todas las
  áreas con resident_pop>0, intersect_count_clean>0 y valores
  finitos (sin umbral adicional; mismo criterio de inclusión que
  M-52/M-57/M-65/M-68, otra variable Y).
- **Falsador:** CONFIRMA si β estimado cae en [0,80, 0,90] con
  R²≥0,90; NO_CONFIRMA en caso contrario (mismos umbrales que
  M-52/M-57/M-65/M-68, declarados antes de correr).
- **Dato:** indicators.tab (`ejecucion_f3/datos/` de r16,
  5.538.726 B, sha `7ec636c8…` verificado antes de correr).
- **Límites declarados:** mismos que M-57/M-65/M-68 (población
  2015 UCD frente a red OSM enero 2021; cobertura OSM desigual;
  ciudad = área urbana GHSL/UCD; OLS log-log supone errores
  homocedásticos en log-log).

ρ(x) > 0. Zvvvvv.
