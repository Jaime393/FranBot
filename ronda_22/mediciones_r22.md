# F3 Ronda 22 — Mediciones M-87 / M-88 / M-89

**Fecha:** 2026-11-16. **Frente:** F3, ronda 22, FASE 1.
Falsadores declarados POR ESCRITO en
`declaracion_falsadores_r22.md` ANTES de correr ninguna medición
(declaración 2026-11-16T08:17:23Z; los scripts de medición se
escribieron después, 08:17:58Z y siguientes; los JSONs tienen mtime
08:22:31Z porque el verificador independiente reescribió los tres
al final para anotar su resultado, sin tocar los valores medidos).

**Estado de partida y de cierre (verificado):** corpus 1.203 líneas,
sha `fb09179d…` (antes y después: intacto, nada de este frente toca
el corpus); dataset 30 filas + cabecera, sha `0852d58f…` (antes y
después: intacto). Datos: HSall_members.csv (6.201.455 B, sha
`495aee95…`, copia en `datos/` de r22, verificado antes de correr);
runs de autocura y commits del repo (copias en `datos/`, shas en
los JSONs).

## M-87 — d05 L4: pendiente LOG de P2 con exclusión declarada — NO_CONFIRMA (la exclusión no rescata la tendencia log)

- **Resultado:** serie dim2 restaurada: **86 congresos (34..119)**,
  idéntica dígito a dígito a M-84 (86/86 dentro de 0,00005; máx diff
  0,0). El filtro P2 ≥ 0,01 declarado antes de correr excluye
  exactamente **[45, 56, 62, 106]** — verificado desde la serie
  recomputada, igual que lo afirmó FASE 0 (P2: 0,007 / 0,005 /
  0,002 / 0,0). Subserie filtrada: **82 congresos**. Pendiente log
  OLS de ln(P2) contra el índice de congreso: **+0,000395**
  (SE 0,004007; t = 0,0986; p = 0,9217; R² = 0,0001). IC bootstrap
  95% (500 réplicas, semilla 0): **[−0,006890, 0,008327]** — incluye
  0. IC analítico [−0,007568, 0,008358] — incluye 0. → **NO_CONFIRMA**.
- **Lectura — la tercera especificación también da cero:** M-81 se
  bloqueó (log indefinido en P2 = 0); M-84 probó la lineal (≈ 0);
  M-87 prueba la log con la exclusión que el Jardinero ordenó
  seguir — y la pendiente log tampoco es distinguible de 0
  (p = 0,92; R² = 0,0001: el logaritmo no explica nada de la
  varianza). Los tramos lo confirman en log: 34–80 pendiente log
  +0,0338; 81–119 pendiente log −0,0397 — el arco se cierra sobre
  sí mismo también en escala log. La exclusión elimina los 4
  anclajes casi-nulos (incluido el cero exacto del 106) y aun así
  no aparece tendencia: el crecimiento sostenido en dim2 queda
  descartado en sus tres formas (cociente, lineal, log). La cara
  **d05 L4 NO se cierra** (el veredicto es concluyente sobre la
  tendencia, no sobre el mecanismo; la decisión de cierre es de
  F8) — pero ya no queda especificación de tendencia por probar
  en esta serie: la subida 34–80 y la caída 81–119 son el hecho;
  la tendencia no.
- **Verificación independiente:** re-cómputo con pivot_table +
  medianas y np.polyfit (otro camino de código): serie idéntica
  (máx diff 0,0), filtro excluye [45, 56, 62, 106], pendiente log
  0,000395, IC bootstrap con semilla distinta (123)
  [−0,006038, 0,007873] — coincide.

## M-88 — Bloqueo M-77: búsqueda profunda de la fórmula del Pilar 4 — NO_SÉ (0 fórmulas en 13.911 archivos)

- **Resultado:** **0 fórmulas encontradas.** Las 3 copias de
  PILARES_FUNDAMENTALES.md son byte-idénticas (86 l., sha
  `dde9334e…`) y contienen **0 ecuaciones**: la única línea con
  "=" en la sección del Pilar 4 es prosa (la referencia de
  circularidad Y=f(X) y el umbral de muestra N<300=fragil, no la
  métrica). Búsqueda de texto completo sobre ~/workspace:
  **13.911 archivos escaneados** (buscar_m88.py); patrones limpios
  (excluidos los ecos del runtime, CORR-BUSQUEDA-R22): "pilar 4"
  228 hits / 117 archivos; "Sahel" 298 / 134; "colapso" 3.581 /
  598; "predicción de colapsos" 51 / 45; "anticipar colapsos" 5 / 5;
  "29-34" 64 / 44; "30 días" 251 / 184. Ningún hit es una fórmula.
  → **NO_SÉ**.
- **Lectura — el bloqueo se estrecha, no se mueve:** M-77 (r18) ya
  dijo que la fórmula no está en el documento fuente. M-88 lo
  extiende a todo bit y sombras: 62 documentos vecinos
  localizados (axiomas, P48, Libro, v10.3, v14, base, franbot),
  tex del Grimorio v4 (2 copias: "colapso" solo poético, "Sahel"
  0 hits), PILARES_CONJETURA.md y pilares_integrados.md (Pilar 4
  "sin claim correspondiente"). Tres candidatos evaluados y
  descartados: (1) **K_i⁻ = K_i·(1−2f)**, umbral <0,3 (axioma A22),
  única fórmula del corpus ligada a colapso — pero
  PILARES_FUNDAMENTALES.md no la nombra, ningún documento la
  presenta como LA métrica del Pilar 4, y DIS-2026-004 la REFUTÓ
  como predictor de colapso (5/5, r11); (2)
  **franbot/abs-oraculo-v8.json**: "Kᵢ⁻ anticipó el conflicto del
  Sahel Central con 30 días de antelación" — afirmación narrativa
  en un artefacto del oráculo, sin fórmula, sin datos, sin
  protocolo, contradicha por DIS-2026-004; (3) **C-475 (INFIERO)**:
  la señal de Scheffer como contraparte medible PROPUESTA del
  umbral K_i⁻<0,3, "que hoy no tiene ninguna operacionalización"
  — propuesta, no fórmula. El propio protocolo de falsación de
  C-053 (producción fractal, 2026-11-14) ya anticipaba este
  resultado: "Si no está → BLOQUEADO: registrar la búsqueda y
  detenerse. Sin fórmula no hay backtest." M-88 es ese registro.
  M-77 sigue bloqueado; las opciones se limitan, como dijo el
  Jardinero: o la fórmula existe fuera del workspace local o no
  existe.
- **Verificación independiente:** re-lectura de las 3 copias (shas
  idénticos `dde9334e…`); las 4 frases de la sección del Pilar 4
  registradas por M-77 aparecen íntegras en la sección actual;
  ecuaciones que definan la métrica de colapso: 0 — coincide.

## M-89 — Secuencia de autocura 11→15: cadencia y efecto — REGULAR (cociente 1,819 < 2; con escalón a la baja)

- **Resultado:** **el run 14 EXISTE** (id 43765476720, created
  2026-11-15T21:45:50Z, updated 21:46:02Z, 12 s, success, event
  schedule, head 35d30ec2 — "state: auto V270 2026-11-15T20:46Z
  run 211"). La secuencia 11→15 está completa, sin saltos; FASE 0
  no lo había verificado porque caía fuera de su ventana de 30
  runs. Intervalos (created→created): 11→12 = **447,77 min**
  (7 h 27 m); 12→13 = **465,70 min** (7 h 45 m); 13→14 =
  **280,00 min** (4 h 40 m); 14→15 = **255,98 min** (4 h 15 m).
  Cociente máx/mín = **1,819 < 2** → **REGULAR** por el criterio
  declarado. Duraciones 9–12 s; conclusiones 5/5 success; eventos
  5/5 schedule. Ningún run 16 existía al consultar (~08:19Z,
  total_count 15).
- **Lectura — regular dentro de un factor 2, pero con escalón:**
  los intervalos forman dos racimos: ~7,5 h (11→12, 12→13) y
  ~4,5 h (13→14, 14→15); la cadencia se acorta tras el run 13
  (media 456,7 min → 268,0 min; cociente entre medias 1,70). El
  intervalo 10→11 (contexto) fue 264,92 min — del orden del
  segundo racimo. **Efecto:** cada run 11–15 corrió sobre el
  último commit "state: auto V270" del State Writer (runs 208–212;
  lag head_commit→run de 42,05 a 80,07 min). En la ventana
  2026-11-15T00:00Z→consulta hay 23 commits y NINGUNO es de la
  autocura: todos son state, monitor flow_id, diagnosis o pulse-v2.
  La autocura no dejó ningún commit propio verificable. **NO_SÉ
  parcial** sobre lo que hizo dentro de cada run (10–12 s, todos
  success): sin los logs (403) no es visible. Tras el run 15 el
  vivo siguió: state run 213 (commit c9c926d9, 07:36:49Z) ya existe.
- **Verificación independiente:** re-cómputo de intervalos, lags y
  cociente desde la copia local (otro camino de código): intervalos
  idénticos, cociente 1,819, lags y duraciones idénticos,
  conclusiones 5/5 success — coincide.

## Tally y precedentes

- **M-87 NO_CONFIRMA** (d05 L4, tercera especificación sin
  tendencia: cociente M-75/M-78, lineal M-84, log M-87).
- **M-88 NO_SÉ** (bloqueo M-77 sostenido y estrechado; 0 fórmulas
  en 13.911 archivos; candidatos K_i⁻ / oráculo-Sahel / Scheffer
  descartados con causa).
- **M-89 REGULAR** (autocura 11→15 completa: run 14 EXISTE;
  cociente 1,819; escalón a la baja tras el run 13; sin commits
  propios de autocura en la ventana).
- Anexo: M-87 y M-89 son ítems inscribibles (SÉ con números);
  M-88 NO se inscribe (NO_SÉ por bloqueo, igual que M-70/M-77/
  M-81). Próximo ítem anexo: **M-90**.
- Verificación independiente 3/3 True
  (verificar_m87_m88_m89.py); JSONs de exactamente 15 claves
  (assert en cada script).
