# F3 Ronda 19 — Mediciones M-78 / M-79 / M-80

**Fecha:** 2026-11-14. **Frente:** F3, ronda 19, FASE 1.
Falsadores declarados POR ESCRITO en
`declaracion_falsadores_r19.md` ANTES de correr ninguna medición
(declaración 2026-11-14T23:36:05Z; mtime del archivo 23:36:15Z;
los JSONs tienen mtime posterior, 23:36:51Z y siguientes).

**Estado de partida y de cierre (verificado):** corpus 1.189 líneas,
sha `1b0a2b21…` (antes y después: intacto, nada de este frente toca
el corpus); dataset 30 filas + cabecera, sha `0852d58f…` (antes y
después: intacto). Datos: HSall_members.csv (6.201.455 B, sha
`495aee95…`) e indicators.tab (5.538.726 B, sha `7ec636c8…`),
copias en `datos/` de r19, verificados antes de correr.

## M-78 — d05 L4: polarización en dim2 con filtro de ancla (P2 ≥ 0,01) — CONFIRMA (formal; el umbral no discrimina en dim2)

- **Resultado:** serie dim2 restaurada: **86 congresos (34..119)**;
  filtro P2 ≥ 0,01 excluye 4 congresos (45, 56, 62, 106);
  ancla filtrada por regla argmin: **Congreso 60, P2 = 0,0185**;
  **cociente máximo filtrado = 50,1351** (Congreso 80, P2 = 0,9275);
  **IC bootstrap 95% [38,0194, 95,3462]** (500 réplicas, semilla 0),
  excluye 2 → **CONFIRMA** según el falsador declarado.
- **Lectura — el CONFIRMA sobrevive al filtro, pero el umbral no
  discrimina en dim2:** el ancla filtrada sigue siendo pequeña
  (12× bajo la mediana de la serie, 0,226; en M-75 era 113×).
  El cociente es un extremo máx/mín con sesgo de selección: el
  ancla es el mínimo de la serie por regla. El bootstrap del
  cociente temporal P2(119)/P2(ancla) lo delata: punto 6,7027,
  pero mediana bootstrap 2,9032, IQR [1,798, 5,8571], solo el
  70,14% de las réplicas supera 2 (499/500 válidas; 1 excluida
  por denominador 0 exacto). La SD bootstrap del cociente
  secundario (1,35e15) está dominada por 1-2 réplicas con
  denominador casi nulo y no se interpreta; la dispersión
  interpretable es la mediana y el IQR. Cualquier ancla por
  debajo de 0,46 da cociente > 2 (máx/mediana solo ya es 4,10):
  en dim2 el umbral >2 se supera por el rango histórico propio
  de la serie —dim2 parte de casi cero en el siglo XIX y llega
  a 0,9275— no por un crecimiento que el umbral distinga. La
  cara **d05 L4 NO se cierra** con esta medición (el veredicto
  es formal; la pregunta central —si el umbral >2 se transfiere
  a dim2 como prueba de crecimiento— queda respondida en
  negativo por el propio diseño: el umbral no discrimina).
- **Verificación independiente:** re-cómputo con pandas groupby
  + medianas (otro camino de código): 86 congresos, ancla 60
  (P2 0,0185), cociente 50,1351, ratio 119 = 6,7027 — idéntico
  dígito a dígito. Bootstrap independiente con semilla 1 (otra
  corriente): IC 95% [37,6042, 97,9487], excluye 2.

## M-79 — d05 L7: escalamiento urbano, censo de R² (32 variables) — CONFIRMA (muro sistemático)

- **Resultado:** censo con el mismo protocolo (OLS log-log base
  10 vs resident_pop, inclusión pop>0, Y>0, finitos) para las
  **32 variables numéricas candidatas** de indicators.tab:
  **0 variables superan R² > 0,8; 0 alcanzan R² ≥ 0,90** →
  **CONFIRMA** (el muro es sistemático). Máximo del censo:
  **area_km2, R² = 0,7490** (M-76, reproducido); segundo:
  built_up_area_m2, R² = 0,6519; tercero: length_total,
  R² = 0,6037 (M-52, reproducido). Mediana del censo:
  R² = 0,0321. Solo 1 variable entre 0,7 y 0,8.
- **Lectura:** las 7 variables medidas antes se reproducen como
  control (M-52 0,6037, M-57 0,4148, M-65 0,408, M-68 0,402,
  M-71 0,3974, M-73 0,3989, M-76 0,7490 — todas dentro de
  0,0005). Ninguna de las 25 variables nuevas supera 0,65:
  el muro R² no era un accidente de la familia viaria ni del
  área — ninguna variable del archivo escala con R² alto. El
  techo del archivo es 0,7490. La cara d05 L7 no se cierra
  (el muro se confirma como sistemático, no se resuelve), pero
  la pregunta "¿es el muro universal dentro del archivo?" queda
  respondida: sí, 0/32 por encima de 0,8.
- **Verificación independiente:** re-cómputo con pandas +
  np.polyfit (otro camino de código): 32 variables, 0
  diferencias ≥ 0,0005 en R², n > 0,8 = 0, n ≥ 0,9 = 0,
  máximo area_km2 0,749 — idéntico dígito a dígito.

## M-80 — d04 L13: seguimiento del límite en la literatura — CONFIRMA (con alcance acotado)

- **Resultado:** la literatura publicada SÍ contiene una columna
  con u ≤ 0,05 aplicable: **Górski, Drożdż, Mokrzycka & Pawlik
  (2012), "Accuracy analysis of the box-counting algorithm",
  Acta Physica Polonica A 121, 2-B (arXiv:1111.5749), Tabla 1**
  — errores absolutos REALES del box-counting por n_tot:
  fractales 1-D: **±0,020 (n = 1.000), ±0,006 (n = 10.000),
  ±0,002 (n = 100.000)**; fractales 2-D: ±0,060 / ±0,030 /
  ±0,020; curva W-M 2-D: ±0,200 / ±0,150 / ±0,100. Para la
  clase 1-D —la que fundamenta la columna u (M-63: dispersiones
  medidas solo en series EEG corticales 1D)— el error real es
  ≤ 0,05 en todos los n_tot tabulados → **CONFIRMA**.
- **Lectura — alcance acotado:** la columna con u = 0,05 tiene
  respaldo publicado como escala común para series 1-D y para
  conjuntos 2-D con n_tot ≥ 10.000 (±0,030). NO queda respaldada
  como cota universal por nodo: un nodo 2-D con n_tot ~ 1.000
  tendría error real ±0,060 > 0,05, y una función fractal 2-D
  (W-M) ±0,100..±0,200. El refinamiento por tipo de nodo queda
  fuera de esta medición. Es seguimiento de una cara cerrada
  (d04 L13, r15), no reapertura: F8 lo cuenta solo porque se
  ejecuta con producto (CORR-MAPA-R18).
- **Verificación independiente:** Tabla 1 re-leída por dos vías:
  (1) snippet de búsqueda web; (2) PDF descargado con curl y
  extraído con pdftotext (84.837 B, sha `fcbc42a5…`, líneas
  287-306) — idénticos. Resumen verificado en arXiv
  abs/1111.5749 (2026-11-14T23:38Z). Fuentes secundarias
  revisadas y no decisorias: SD de FD en EEG 0,000112448
  (dispersión entre segmentos, no error vs valor verdadero);
  Douglass 2025 (D = 1,835 ± 0,0037, método optimizado).

## Tally y precedentes

- **Veredictos r19: CONFIRMA 3 (M-78 formal, M-79 muro
  sistemático, M-80 con alcance acotado).** Serie F3: r12 M-56
  DIFERENCIA / M-57 NO_CONFIRMA / M-58 NO_SÉ / M-59 CONFIRMA;
  r13 M-60 CONFIRMA / M-61 NO_CONFIRMA / M-62 CONFIRMA; r14
  M-63 CONFIRMA / M-64 NO_CONFIRMA / M-65 NO_CONFIRMA; r15 M-66
  CONFIRMA / M-67 NO_CONFIRMA / M-68 NO_CONFIRMA; r16 M-69
  NO_CONFIRMA / M-70 NO_SÉ / M-71 NO_CONFIRMA; r17 M-72
  CONFIRMA / M-73 NO_CONFIRMA / M-74 NO_CONFIRMA; r18 M-75
  CONFIRMA / M-76 NO_CONFIRMA / M-77 NO_SÉ; **r19 M-78
  CONFIRMA / M-79 CONFIRMA / M-80 CONFIRMA**.
- **No se preparan como claims** (0 precedentes de veredictos de
  medición como claims en 1.189; las mediciones se depositan como
  resultados y entran por inscripción en el anexo — los ítems del
  anexo para M-78.. los prepara F7, precedente N-18/N-19/N-20/
  N-22/N-23).
- **Caras tocadas:** d05 L4 (M-78: CONFIRMA formal con filtro de
  ancla; el umbral no discrimina en dim2; la cara NO se cierra);
  d05 L7 (M-79: censo 0/32 por encima de 0,8; muro sistemático;
  la cara NO se cierra); d04 L13 (M-80: literatura con u ≤ 0,05
  para la clase 1-D; seguimiento ejecutado con producto).

ρ(x) > 0. Zvvvvv.
