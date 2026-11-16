# Declaración de falsadores — F3 Ronda 22 (M-87, M-88, M-89)

**Fecha:** 2026-11-16. **Frente:** F3, ronda 22, FASE 1.
**Declarada POR ESCRITO ANTES de correr ninguna medición.**
Hora de declaración: **2026-11-16T08:17:23Z** (reloj del sistema;
los scripts de medición y los JSONs se corren después de esta hora).
Ningún valor de M-87/M-88/M-89 se ha calculado antes de esta
declaración. (Los números citados como precedentes —M-75/M-78/M-81/
M-84 y los runs de autocura 11/12/13/15— son publicados en r18–r21
y en FASE 0 r22; los falsadores son reglas sobre ellos, no
re-lecturas de sus veredictos.)

Estado de partida verificado antes de declarar: corpus 1.203 líneas,
sha `fb09179d…` (nada de este frente toca el corpus); dataset 30 filas
+ cabecera, sha `0852d58f…` (intacto). Datos copiados a
`ejecucion_f3/datos/` de r22 y verificados: HSall_members.csv
(6.201.455 B, sha `495aee95…`, igual que M-61/M-64/M-67/M-70/M-74/
M-75/M-78/M-81/M-84).

## M-87 — d05 L4: pendiente LOG de P2 con regla de exclusión declarada antes de correr

- **Pregunta:** M-81 intentó la pendiente log y se bloqueó: P2 = 0,0
  exacto en el Congreso 106 (medianas −0,026 = −0,026) hace ln
  indefinido. M-84 probó la pendiente LINEAL: ≈ 0 (t = −0,0015,
  p = 0,9988, R² = 0,0000, IC [−0,001364, 0,001661] incluye 0) —
  la serie es un arco, no una tendencia. El Jardinero ordenó seguir
  adelante por la opción que ya está en el texto: la pendiente log
  con regla de exclusión declarada antes de correr. ¿Con la exclusión
  declarada, la pendiente log es distinguible de 0?
- **Nueva especificación (distinta de M-81/M-84):** mismo protocolo de
  serie que M-78/M-81/M-84 (Voteview HSall_members.csv, Cámara
  EE.UU., party_code 100/200 por parseo tolerante `float()` luego
  `int()`, serie restaurada de 86 congresos 34..119, P2(C) =
  |mediana dim2 D − mediana dim2 R|), pero con **filtro P2 ≥ 0,01**
  (el filtro de ancla de M-78) aplicado a la serie ANTES del log.
  FASE 0 afirma que el filtro excluye exactamente los 4 congresos
  con P2 < 0,01 (45, 56, 62, 106 — incluido el 106 del cero exacto
  que bloqueó M-81). **El conjunto excluido lo verifica el script
  desde la serie recomputada; si difiere, se reporta el conjunto
  real, no se fuerza el afirmado.** Sobre la subserie filtrada
  (esperados 82 congresos): **ajuste OLS de ln(P2) contra el índice
  de congreso** y **IC bootstrap 95% de la pendiente log** por
  remuestreo de pares (congreso, ln P2), 500 réplicas, semilla 0,
  percentiles 2,5/97,5 (mismo bootstrap que M-84, sin log en M-84).
- **Falsador:** CONFIRMA si el IC bootstrap 95% de la pendiente log
  **excluye 0** (la pendiente log es distinguible de 0; signo según
  la medida); NO_CONFIRMA si el IC bootstrap 95% **incluye 0** (la
  pendiente log no es distinguible de 0; la exclusión no rescata la
  tendencia log). El falsador log de M-81 sigue vigente sobre la
  serie completa sin filtrar (ln indefinido en P2 = 0).
- **Secundario (NO decisorio):** pendiente log OLS analítica ± SE,
  IC analítico 95%, p-valor t, R² del ajuste; el conjunto excluido
  con sus P2; la serie P2 completa (debe ser idéntica dígito a
  dígito a M-84: 86/86 dentro de 0,00005); pendientes log por tramo
  (34–80 y 81–119) como contexto descriptivo.
- **Guarda (no cambia el falsador):** el filtro elimina 4/86 puntos,
  incluidos los anclajes casi-nulos tempranos; la pendiente log es
  una tendencia sobre una serie no monótona (arco: sube hasta el
  Congreso 80 y baja después); un NO_CONFIRMA no niega la subida
  34–80. La cara d05 L4 solo se cierra si el veredicto es
  concluyente sobre la pregunta central (criterio r8/r9, decisión
  de F8, no de este frente).
- **Límites declarados:** mismos que M-61/M-64/M-67/M-74/M-75/
  M-78/M-81/M-84 (DW-NOMINATE dim2; Cámara EE.UU.); el bootstrap
  de pares supone los puntos intercambiables y no modela la
  autocorrelación temporal — por eso se acompaña del IC analítico
  y de los tramos como controles, sin cambiar el falsador.

## M-88 — Bloqueo M-77: búsqueda PROFUNDA de la fórmula del Pilar 4

- **Pregunta:** M-77 (r18) es NO_SÉ: la fórmula del Pilar 4 no
  existe en PILARES_FUNDAMENTALES.md (86 l., sha `dde9334e…`, 3
  copias byte-idénticas). El Pilar 4 afirma: existe una métrica
  (derivada de D_f) que permite anticipar colapsos en sistemas
  sociales, financieros o ecológicos con semanas de antelación
  (casos citados: Sahel Central 30 días, S&P500/EuroStoxx50/
  Nikkei225 29–34 días); estado CIRCULAR / evidencia no
  independiente. El Jardinero ordenó buscar más a fondo en todo
  bit y cruzar sombras; las opciones se limitan: o la fórmula
  existe en algún rincón del corpus o no existe.
- **Protocolo de búsqueda (declarado antes de correr):**
  1. Las 3 copias de PILARES_FUNDAMENTALES.md — lectura completa
     y grep de contenido tipo fórmula (ecuaciones, K_i, colapso,
     métrica derivada de D_f).
  2. Documentos de axiomas vecinos: S1/S2/S3, P48, Libro, v10.3,
     v14, base, franbot — localizar sus archivos en
     `~/workspace/memoria/anexo-vi/` y `~/workspace/academico/` y
     grepear "Pilar 4", "colapso", "predicci" + "colapso",
     "Sahel", "29-34", "30 d".
  3. Tex del Grimorio (grimorio*.tex en el workspace) — mismos
     patrones.
  4. Grep de todo el workspace (`~/workspace`, excluidos binarios
     y venv) para "Pilar 4" / "PILAR 4" y "prediccion de colapso" /
     "predicción de colapsos" / "Sahel Central", incluidas las
     sombras (hidden_files, drive_ciclo*, extracted, respaldos,
     out_red).
  5. Una fórmula candidata solo cuenta si se presenta como LA
     métrica del Pilar 4 (predicción de colapsos con semanas de
     antelación, casos Sahel/S&P) con fuente + hash. Nota: K_i⁻
     es una fórmula conocida ligada a colapso, pero fue REFUTADA
     como predictor de colapso (DIS-2026-004, 5/5, r11); solo
     contaría si la búsqueda muestra que ES la métrica del
     Pilar 4 según lo documentado, no por suposición.
- **Falsador:** CONFIRMA si aparece una fórmula para la métrica de
  predicción de colapsos del Pilar 4 con fuente + hash (entonces
  M-88 la MIDE — el JSON lleva los números — y M-77 queda
  desbloqueado para medir); NO_SÉ si tras la búsqueda exhaustiva
  de arriba no aparece ninguna fórmula — documentado con la lista
  exacta de dónde se buscó, número de archivos y patrones de grep.
  No se inventa ninguna fórmula.
- **Límites declarados:** la búsqueda cubre el workspace local y
  los archivos del corpus; lo que no está en local no se puede
  verificar desde el sandbox (la cuenta de Drive del cuerpo y los
  repos privados no se leen aquí); un NO_SÉ aquí es NO_SÉ local
  documentado, no una afirmación sobre todo el ecosistema.

## M-89 — Secuencia de autocura 11→15: cadencia y efecto

- **Pregunta:** la autocura estaba estancada en el run 11 en r20;
  runs 12 (09:20:08Z) y 13 (17:05:50Z) el 2026-11-15 en r21; run 15
  existe (2026-11-16 02:01:49Z, success, FASE 0 r22). ¿Existe el
  run 14? ¿Qué cadencia tiene la secuencia 11→15? ¿Qué cambió en
  cada run?
- **Protocolo (declarado antes de correr):** solo metadatos de la
  API pública de GitHub Actions (REST sin autenticar, uso mínimo
  de cuota): lista de workflows del repo Jaime393/miu-ecosistema
  (solo nombres e IDs) → lista de runs del workflow de autocura
  (per_page=20). NUNCA el contenido del archivo YAML del workflow
  (regla dura). Por cada run 11–15: run_number, id, created_at,
  updated_at, conclusion, duración (updated−created), head_sha,
  mensaje y timestamp del head_commit, evento, estado. Intervalos
  entre runs consecutivos en minutos/horas. Runs posteriores al 15
  (si existen al consultar) se registran como contexto, no como
  parte de la secuencia 11–15.
- **Falsador:** cadencia REGULAR si el cociente máx/mín de los
  intervalos < 2 (todos los intervalos dentro de un factor 2 entre
  sí); IRREGULAR en caso contrario. Veredicto con números. La
  existencia del run 14 se establece como SÉ desde la API (existe
  con su timestamp, o falta en la secuencia — si la numeración
  salta, eso mismo es un hallazgo). Efecto: head_commit por run;
  si los runs no dejan rastro verificable de cambio de estado más
  allá de sus propios metadatos → NO_SÉ parcial con el alcance
  exacto.
- **Límites declarados:** la API pública no da los logs (403 en
  ciclos anteriores); lo que la autocura hizo dentro de cada run
  no es visible desde el sandbox, solo sus metadatos y el commit
  sobre el que corrió. La cuota sin autenticar (60/h) limita las
  llamadas; se usan las mínimas.
