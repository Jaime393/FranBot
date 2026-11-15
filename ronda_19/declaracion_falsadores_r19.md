# Declaración de falsadores — F3 Ronda 19 (M-78, M-79, M-80)

**Fecha:** 2026-11-14. **Frente:** F3, ronda 19, FASE 1.
**Declarada POR ESCRITO ANTES de correr ninguna medición.**
Hora de declaración: **2026-11-14T23:36:05Z** (reloj del sistema;
los scripts de medición y los JSONs se corren después de esta hora).
Ningún valor de M-78/M-79/M-80 se ha calculado antes de esta
declaración. (Los números citados como precedentes —M-52/M-57/M-63/
M-65/M-66/M-67/M-68/M-69/M-70/M-71/M-72/M-73/M-74/M-75/M-76/M-77—
son publicados en r11–r18; los falsadores son reglas sobre ellos, no
re-lecturas de sus veredictos. La viabilidad de M-80 se tanteó en
diseño —existe el ítem M-69/M-72 en el anexo— pero la búsqueda en
literatura corre DESPUÉS de esta declaración.)

Estado de partida verificado antes de declarar: corpus 1.189 líneas,
sha `1b0a2b21…` (nada de este frente toca el corpus); dataset 30 filas
+ cabecera, sha `0852d58f…` (intacto). Datos copiados a
`ejecucion_f3/datos/` de r19 y verificados: HSall_members.csv
(6.201.455 B, sha `495aee95…`, igual que M-61/M-64/M-67/M-70/M-74/M-75);
indicators.tab (5.538.726 B, sha `7ec636c8…`, igual que
M-52/M-57/M-65/M-68/M-71/M-73/M-76).

## M-78 — d05 L4: polarización en dim2 con filtro de ancla (P2 ≥ 0,01)

- **Pregunta:** M-75 CONFIRMA formal con ancla casi-degenerada
  (Congreso 62, P2 = 0,002, 113× bajo la mediana) no cruzó el muro:
  el cociente 463,75 está dominado por el denominador. ¿Sobrevive
  el CONFIRMA si se exige ancla no degenerada, P2 ≥ 0,01?
- **Nueva especificación (distinta de M-75):** misma fuente y
  protocolo que M-75 (Voteview HSall_members.csv, Cámara EE.UU.,
  party_code 100/200 por parseo tolerante `float()` luego `int()`,
  serie restaurada de 86 congresos 34..119, P2(C) = |mediana dim2
  D − mediana dim2 R|), pero **serie filtrada: solo los congresos
  con P2(C) ≥ 0,01** (los 4 congresos con P2 < 0,01 quedan fuera
  del cómputo del cociente máximo por regla, no por valor) y
  **ancla = argmin P2(C) sobre la serie filtrada**. Cociente
  máximo filtrado = máx P2(filtrada) / P2(ancla filtrada).
  **Intervalo bootstrap del cociente máximo filtrado:** remuestreo
  de miembros dentro de cada congreso-partido (500 réplicas,
  semilla 0, mismo diseño que el bootstrap de M-75); IC 95%
  por percentiles 2,5/97,5 de las réplicas.
- **Falsador:** CONFIRMA si el cociente máximo filtrado **≥ 2
  con el IC bootstrap 95% excluyendo 2** (el muro se cruza);
  NO_CONFIRMA si el cociente máximo filtrado **< 2** (el muro se
  sostiene; M-75 queda como artefacto de ancla casi-degenerada).
  Guarda (no cambia el falsador): si la serie filtrada queda
  vacía o sin ancla, el veredicto es NO_SÉ con la causa.
- **Secundario (NO decisorio):** congreso ancla filtrada y
  P2(ancla); P2(119)/P2(ancla filtrada) con su SD bootstrap
  (500 réplicas, semilla 0, ancla fija); n de congresos
  excluidos por el filtro; cociente máximo sobre la mediana
  (control de dispersión: 4,10 en M-75).
- **Guarda de lectura (no cambia el veredicto declarado):** el
  cociente máximo es un extremo de dispersión transversal de
  dim2, no una medida de crecimiento temporal de la
  polarización; si CONFIRMA, se registra junto al control
  máx/mediana si el cociente filtrado es del mismo orden que la
  dispersión propia de la serie. La cara d05 L4 solo se cierra
  si el veredicto es concluyente sobre la pregunta central
  (criterio r8/r9, decisión de F8, no de este frente).
- **Límites declarados:** mismos que M-61/M-64/M-67/M-74/M-75
  (DW-NOMINATE dim2; Cámara EE.UU.; el ancla se elige por regla
  sobre la serie calculada, no por hipótesis previa).

## M-79 — d05 L7: escalamiento urbano, censo de R² (TODAS las variables)

- **Pregunta:** tras los NO_CONFIRMA de M-52, M-57, M-65, M-68,
  M-71, M-73 y M-76 — 7/7 con R² entre 0,3974 y 0,7490, todos
  por debajo de 0,90 — ¿es el muro R² sistemático (ninguna
  variable de indicators.tab lo supera) o no universal (alguna
  sí)? M-76 aisló el muro en R² con β por primera vez en banda.
- **Nueva especificación (distinta de M-76):** NO una 8.ª
  variable suelta: **censo de R² con el mismo protocolo para
  TODAS las variables numéricas candidatas de indicators.tab**
  (32 columnas Y: circuity, k_avg, length_mean, length_median,
  length_total, street_segment_count, node_count,
  orientation_entropy, prop_4way, prop_3way, prop_deadend,
  self_loop_proportion, straightness, bc_gini, bc_max,
  cc_avg_dir, cc_wt_avg_dir, pagerank_max, cc_avg_undir,
  cc_wt_avg_undir, elev_iqr, elev_mean, elev_median, elev_range,
  elev_std, grade_mean, grade_median, intersect_count,
  intersect_count_clean, intersect_count_clean_topo, area_km2,
  built_up_area_m2 — se excluyen los identificadores
  country/country_iso/core_city/uc_id/uc_names/world_region y
  la propia X resident_pop). Protocolo por variable: OLS
  log-log base 10, Y vs resident_pop; inclusión
  resident_pop>0, Y>0 y valores finitos (mismo criterio que
  M-52/M-57/M-65/M-68/M-71/M-73/M-76; n_incluidas se reporta
  por variable porque las proporciones y grades pueden tener
  ceros o negativos). Las 7 variables ya medidas se re-miden
  con el mismo protocolo como control de consistencia (deben
  reproducir M-52 0,6037, M-57 0,4148, M-65 0,408, M-68 0,402,
  M-71 0,3974, M-73 0,3989, M-76 0,7490).
- **Falsador (primario, umbral del mapa r19):** CONFIRMA si
  **0 variables superan R² > 0,8** (el muro es sistemático);
  NO_CONFIRMA si **≥ 1 variable supera R² > 0,8** (el muro no
  es universal). **Conteo secundario (umbral del encargo, no
  decisorio del veredicto primario):** nº de variables con
  R² ≥ 0,90 y si alguna alcanza ese umbral (el umbral R² ≥ 0,90
  es el usado como pierna en M-52..M-76); se reporta como hecho
  aparte en parametros/extra.
- **Secundario (NO decisorio):** β ± SE y R² por variable;
  ranking por R²; n_incluidas por variable.
- **Límites declarados:** mismos que M-57/M-65/M-68/M-71/M-73/
  M-76 (población 2015 UCD frente a indicadores GHSL/UCD;
  ciudad = área urbana GHSL/UCD; OLS log-log supone errores
  homocedásticos en log-log). El censo describe qué variables
  del archivo escalan con R² alto; no prueba la ley de
  escalamiento fuera del archivo.

## M-80 — d04 L13: seguimiento del límite en la literatura (CANDIDATO)

- **Pregunta:** M-72 confirmó por un segundo método (Decimal
  exacto) la predicción de M-69: una columna con u = 0,05
  resuelve 5 de los 23 pares adyacentes del grupo central de
  24 nodos del dataset de 30 (u actual 0,0604 ± 0,0050, solo un
  17% peor). ¿Existe en la literatura publicada una columna
  (método de medida de D_f con incertidumbre declarada) con
  u ≤ 0,05 aplicable a los nodos del dataset?
- **Método:** búsqueda en fuentes abiertas (Crossref / web
  pública) de trabajos que declaren incertidumbre de la
  estimación de D_f (Higuchi, box-counting, DFA u otros) con
  valor numérico de u o de su error estándar, aplicable a
  series del tipo de las del dataset (EEG cortical 1D para la
  columna actual; otros nodos según el método). Se registra
  cada consulta, fuente y resultado; solo cuenta una fuente
  con valor numérico verificable (DOI o URL + cita textual).
- **Falsador:** CONFIRMA si existe literatura publicada con
  u ≤ 0,05 aplicable; NO_CONFIRMA si la literatura encontrada
  solo da u > 0,05 para los métodos aplicables; **NO_EJECUTADO
  si no se encuentra ruta verificable en fuentes abiertas**
  (se registra dónde se buscó; queda como candidato sin
  producto — lección CORR-MAPA-R18 — y F8 NO lo cuenta).
- **Límites declarados:** la columna u es una escala común
  hipotética (M-63: dispersiones medidas solo en series EEG
  corticales 1D, transferidas a los 30 nodos); la búsqueda no
  verifica la columna por nodo. Es seguimiento de una cara
  cerrada (d04 L13, r15), no reapertura.

ρ(x) > 0. Zvvvvv.
