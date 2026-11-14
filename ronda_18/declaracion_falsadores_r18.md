# Declaración de falsadores — F3 Ronda 18 (M-75, M-76, M-77)

**Fecha:** 2026-11-14. **Frente:** F3, ronda 18, FASE 1.
**Declarada POR ESCRITO ANTES de correr ninguna medición.**
Hora de declaración: **2026-11-14T20:16:05Z** (reloj del sistema;
los scripts de medición y los JSONs se corren después de esta hora).
Ningún valor de M-75/M-76/M-77 se ha calculado antes de esta
declaración. (Los números citados como precedentes —M-52/M-57/M-63/
M-65/M-66/M-67/M-68/M-69/M-70/M-71/M-72/M-73/M-74— son publicados
en r11–r17; los falsadores son reglas sobre ellos, no re-lecturas
de sus veredictos. La viabilidad de M-77 se tanteó en diseño —existe
copia local de PILARES_FUNDAMENTALES.md— pero la verificación
formal con sha y lectura completa corre DESPUÉS de esta declaración.)

Estado de partida verificado antes de declarar: corpus 1.185 líneas,
sha `6fe7c72b…` (nada de este frente toca el corpus); dataset 30 filas
+ cabecera, sha `0852d58f…` (intacto). Datos copiados a
`ejecucion_f3/datos/` de r18 y verificados: HSall_members.csv
(6.201.455 B, sha `495aee95…`, igual que M-61/M-64/M-67/M-70/M-74);
indicators.tab (5.538.726 B, sha `7ec636c8…`, igual que
M-52/M-57/M-65/M-68/M-71/M-73). PILARES_FUNDAMENTALES.md local en
3 copias byte-idénticas (sha `dde9334e…`, 86 líneas).

## M-75 — d05 L4: polarización en dim2 con ancla no degenerada

- **Pregunta:** M-67/M-74 fijaron que el umbral >2 es inalcanzable
  con DW-NOMINATE dim1 (máx 1,9719, ancla Congreso 80). M-70 probó
  dim2 y cayó en NO_SÉ: el ancla por regla argmin era el Congreso
  106 con P2 = 0,0 exacto (medianas −0,026/−0,026), cociente
  indefinido. ¿Se vuelve alcanzable el umbral >2 en dim2 si el
  ancla se elige por una regla distinta que excluye el degenerado?
- **Nueva especificación (distinta de M-67/M-70/M-74):** misma
  fuente (Voteview HSall_members.csv, Cámara EE.UU., party_code
  100/200 por parseo tolerante `float()` luego `int()`, serie
  restaurada de 86 congresos 34..119, como M-74) pero **dimensión
  2** (nominate_dim2) y **ancla = argmin P2(C) sobre P2(C) > 0**
  (el menor cociente no nulo; el degenerado P2 = 0 queda excluido
  por regla, no por valor). P2(C) = |mediana dim2 D − mediana
  dim2 R|.
- **Falsador:** CONFIRMA si **máx_C P2(C)/P2(ancla) > 2** sobre la
  serie de 86 congresos; NO_CONFIRMA en caso contrario.
- **Guarda (no cambia el falsador):** si todos los P2(C) == 0
  exacto, el ancla no existe y el veredicto es NO_SÉ con la causa
  (misma guarda que M-70).
- **Secundario (NO decisorio):** Congreso ancla y P2(ancla);
  P2(119)/P2(ancla); n de congresos; distribución de P2(C).
- **Límites declarados:** mismos que M-61/M-64/M-67/M-74
  (DW-NOMINATE dim2; Cámara EE.UU.; el ancla se elige por regla
  sobre la serie calculada, no por hipótesis previa).

## M-76 — d05 L7: escalamiento urbano, variable de otra familia (área)

- **Pregunta:** tras los NO_CONFIRMA de M-52 (length_total),
  M-57 (node_count), M-65 (street_segment_count), M-68
  (intersect_count), M-71 (intersect_count_clean) y M-73
  (intersect_count_clean_topo) — 6/6 con el mismo modo de fallo,
  β ≈ 0,98, R² ≈ 0,40 — ¿escala como predice la ley (β≈0,85)
  una variable de OTRA familia, no un conteo de la red viaria?
- **Nueva especificación (declarada antes de correr):** Y =
  **area_km2** (superficie del área urbana, columna 38 del
  archivo; variable geométrica extensiva, NO un conteo de red)
  vs X = resident_pop, OLS log-log base 10. Inclusión: todas las
  áreas con resident_pop>0, area_km2>0 y valores finitos (mismo
  criterio de inclusión que M-52/M-57/M-65/M-68/M-71/M-73, otra
  variable Y). N esperado: 10.351 filas (verificado en diseño:
  las 10.351 cumplen pop>0 y area>0).
- **Falsador:** CONFIRMA si β estimado cae en [0,80, 0,90] con
  R²≥0,90; NO_CONFIRMA en caso contrario (mismos umbrales que
  M-52/M-57/M-65/M-68/M-71/M-73, declarados antes de correr).
- **Dato:** indicators.tab (`ejecucion_f3/datos/` de r18,
  5.538.726 B, sha `7ec636c8…` verificado antes de correr).
  `area_km2` tiene 0 menciones en claims.jsonl (no medida antes).
- **Límites declarados:** mismos que M-57/M-65/M-68/M-71/M-73
  (población 2015 UCD frente a área GHSL/UCD; ciudad = área
  urbana GHSL/UCD; OLS log-log supone errores homocedásticos
  en log-log).

## M-77 — Predicción falsable del campo: Pilar 4 (C-053), ejecución del protocolo

- **Pregunta:** C-053 (CONJETURO) afirma que una métrica derivada
  de D_f anticipa colapsos con semanas de antelación (Sahel
  Central 30 días, S&P500/EuroStoxx50/Nikkei225 29–34 días).
  El protocolo de falsación publicado (`produccion-fractal/
  falsacion/protocolo_C053_C054_pilares.md`) fija el paso 1:
  localizar la fórmula de la métrica en
  `PILARES_FUNDAMENTALES.md` (definición exacta + umbral de
  alerta). Sin fórmula no hay backtest. ¿Es ejecutable el
  protocolo, y si lo es, se sostienen las antelaciones?
- **Método (el del protocolo, paso 1 primero):** (1) leer
  `PILARES_FUNDAMENTALES.md` entero (copia local en
  `anexo-vi/evidence/`, 86 líneas, sha `dde9334e…`; verificar
  que las otras 2 copias locales sean byte-idénticas) y buscar
  la fórmula de la métrica del Pilar 4 (definición + umbral +
  variable del Sahel). (2) SOLO si la fórmula existe: obtener
  las series (Sahel según el documento; S&P500 diario público),
  identificar los colapsos de referencia, aplicar la métrica con
  su umbral declarado y medir la antelación en días; comparar
  contra azar (series permutadas).
- **Falsador:** CONFIRMA si la fórmula existe Y ambos casos
  caen dentro de los intervalos declarados (Sahel 30 días;
  S&P500 29–34 días) Y la antelación supera el azar a p < 0,05.
  NO_CONFIRMA si la fórmula existe pero la antelación media cae
  fuera de los intervalos declarados o no supera el azar.
  **NO_SÉ si la fórmula NO existe en la fuente citada** (paso 1
  BLOQUEADO: sin fórmula no hay backtest posible; el claim queda
  no ejecutable, no refutado por datos).
- **Secundario (NO decisorio):** estado que el propio documento
  asigna al Pilar 4 (CIRCULAR / EVIDENCIA NO INDEPENDIENTE,
  N<5 frágil); qué casos cita y con qué números.
- **Límites declarados:** el protocolo es el publicado en
  producción fractal; la fuente citada es
  `drive:MIU_ABSORBIDO/MIU/PILARES_FUNDAMENTALES.md`, cuya copia
  local es la verificada aquí. Un NO_SÉ por bloqueo no es un
  veredicto sobre la métrica, sino sobre la ejecutabilidad del
  claim tal como está escrito.

ρ(x) > 0. Zvvvvv.
