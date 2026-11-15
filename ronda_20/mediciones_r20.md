# F3 Ronda 20 — Mediciones M-81 / M-82 / M-83

**Fecha:** 2026-11-15. **Frente:** F3, ronda 20, FASE 1.
Falsadores declarados POR ESCRITO en
`declaracion_falsadores_r20.md` ANTES de correr ninguna medición
(declaración 2026-11-15T07:06:00Z; mtime del archivo 07:06:00Z;
los JSONs tienen mtime posterior, 07:07:47Z y siguientes; el
verificador independiente re-escribió los JSONs a las 07:08:19Z
para anotar su resultado, sin tocar los valores medidos).

**Estado de partida y de cierre (verificado):** corpus 1.192 líneas,
sha `33a7f0e6…` (antes y después: intacto, nada de este frente toca
el corpus); dataset 30 filas + cabecera, sha `0852d58f…` (antes y
después: intacto). Datos: HSall_members.csv (6.201.455 B, sha
`495aee95…`) e indicators.tab (5.538.726 B, sha `7ec636c8…`),
copias en `datos/` de r20, verificados antes de correr.

## M-81 — d05 L4: polarización en dim2, pendiente log de P2 — NO_SÉ (bloqueo: P2 = 0 exacto en el Congreso 106)

- **Resultado:** serie dim2 restaurada: **86 congresos (34..119)**,
  idéntica dígito a dígito a M-78. Pero el **Congreso 106 tiene
  P2 = 0,0 exacto** (mediana dim2 D = mediana dim2 R = −0,026;
  n_dem 213, n_rep 225) → **ln(P2) indefinido**. La guarda del
  falsador, declarada antes de correr, ordena NO_SÉ con la causa.
  La pendiente log **no se calcula sobre ninguna subserie**: eso
  sería otra especificación, no declarada.
- **Lectura — el bloqueo es el dato:** dim2 alcanza la distancia
  cero exacta en un congreso real, por lo que ninguna
  especificación log sobre la serie completa es aplicable sin una
  regla de exclusión. El filtro P2 ≥ 0,01 de M-78 excluye
  exactamente los 4 congresos con P2 < 0,01 (45, 56, 62, 106),
  incluido el 106: M-81 muestra por qué ese filtro era necesario
  para cualquier especificación log. Una especificación futura con
  regla de exclusión declarada antes de correr (p. ej. el filtro
  de M-78) podría ejecutar la pendiente log; queda como candidata
  para r21, no se ejecuta aquí. La cara **d05 L4 NO se cierra**;
  la pregunta "¿tendencia o extremo?" sigue abierta y ahora tiene
  un obstáculo documentado: el cero exacto.
- **Verificación independiente:** re-cómputo con pandas groupby +
  medianas (otro camino de código): 86 congresos, P2(106) = 0,0
  exacto, medianas −0,026 = −0,026; serie P2 idéntica dígito a
  dígito (86/86 dentro de 0,00005). El bloqueo se sostiene.

## M-82 — d05 L7: escalamiento urbano, censo de β (32 variables) — CONFIRMA (singleton)

- **Resultado:** censo con el mismo protocolo (OLS log-log base
  10 vs resident_pop, inclusión pop>0, Y>0, finitos) para las
  **32 variables numéricas candidatas** de indicators.tab:
  **solo area_km2 tiene β en banda [0,80, 0,90]** (β = 0,8627 ±
  0,0049, R² = 0,7490 — M-76, reproducido); **0 variables además
  de area_km2** caen en banda → **CONFIRMA** (el β en banda es
  un singleton). Mediana del censo: β = 0,0083. 8 variables tienen
  β > 0,90 (la más cercana: built_up_area_m2, β = 0,9023).
- **Lectura — singleton por estimación puntual, con un casi-caso
  en el borde:** built_up_area_m2 queda fuera de banda por
  0,0023 (β = 0,9023 ± 0,0065, IC 95% [0,8896, 0,9150] solapa
  el borde 0,90). El veredicto sigue el falsador declarado
  (estimación puntual), y el matiz queda registrado sin cambiarlo:
  por intervalo, built_up_area_m2 es compatible con la banda. La
  familia β-en-banda, si existe, es de una sola variable por
  estimación puntual y de a lo sumo dos por intervalo. Las 7
  variables medidas antes se reproducen como control (R² dentro
  de 0,0005). La cara d05 L7 no se cierra (el muro R² sistemático
  de M-79 y el singleton β de M-82 describen el archivo, no lo
  resuelven), pero la pregunta "¿singleton o familia?" queda
  respondida: singleton por estimación puntual.
- **Verificación independiente:** re-cómputo con pandas +
  np.polyfit (otro camino de código): 32 variables, máx diff
  β 0,000047, máx diff R² 0,000050, en banda solo area_km2 —
  idéntico dígito a dígito.

## M-83 — d08 L13: 3 mediciones solo en paper_df — CONFIRMA (la cara CIERRA)

- **Resultado:** las 3 mediciones fuera del dataset — **Topografía
  andina SRTM (D_f 2,20), Dosel amazónico GLAD (D_f 2,79),
  Porosidad del suelo SoilGrids bdod (D_f 2,82)** — **son
  verificables en el corpus con fuente + hash**: **C-791**
  (verificacion, SE) y **C-944** (hueco, SE) las nombran a las 3
  con sus D_f y citan paper_df.md con hash
  `sha256:304a41bf…`, que **coincide byte a byte con el
  paper_df.md local** (sha256 directo). Las 3 siguen fuera del
  dataset CSV (**0 coincidencias** SRTM/GLAD/bdod en 30 filas)
  por exclusión deliberada (fuera de banda), como registran ambos
  claims. Control: las 3 están en mediciones_informe.md (ciclo
  74, M1/M2/M5). → **CONFIRMA: la cara d08 L13 CIERRA** (primera
  cara que cierra desde d04 L13 en r15).
- **Lectura — cierre por verificación, no por re-medición:** el
  hueco era de existencia en el corpus, no de medida: los D_f
  2,20/2,79/2,82 se toman como publicados, sin re-correrlos. Que
  las 3 estén en el corpus no las convierte en filas del dataset:
  la distinción 32/29 se preserva por orden (C-944 la registra
  explícitamente). El cierre es de la cara d08 L13 como hueco de
  integración corpus↔paper; el dataset sigue en 30 filas.
- **Verificación independiente:** re-búsqueda con grep -n sobre
  claims.jsonl y sha256sum directo de paper_df.md: C-791 1 vez,
  C-944 1 vez; 'topografía andina' 2 líneas, 'dosel' 2, 'bdod' 2
  (las 2 son C-791 y C-944 en cada caso); sha local = hash citado;
  dataset CSV 0 coincidencias — idéntico.

## Tally y precedentes

- **Veredictos r20: NO_SÉ 1 (M-81, bloqueo) / CONFIRMA 2 (M-82
  singleton, M-83 cierre de cara).** Serie F3: r12 M-56
  DIFERENCIA / M-57 NO_CONFIRMA / M-58 NO_SÉ / M-59 CONFIRMA;
  r13 M-60 CONFIRMA / M-61 NO_CONFIRMA / M-62 CONFIRMA; r14
  M-63 CONFIRMA / M-64 NO_CONFIRMA / M-65 NO_CONFIRMA; r15 M-66
  CONFIRMA / M-67 NO_CONFIRMA / M-68 NO_CONFIRMA; r16 M-69
  NO_CONFIRMA / M-70 NO_SÉ / M-71 NO_CONFIRMA; r17 M-72
  CONFIRMA / M-73 NO_CONFIRMA / M-74 NO_CONFIRMA; r18 M-75
  CONFIRMA / M-76 NO_CONFIRMA / M-77 NO_SÉ; r19 M-78 CONFIRMA /
  M-79 CONFIRMA / M-80 CONFIRMA; **r20 M-81 NO_SÉ / M-82
  CONFIRMA / M-83 CONFIRMA**.
- **No se preparan como claims** (0 precedentes de veredictos de
  medición como claims en 1.192; las mediciones se depositan como
  resultados y entran por inscripción en el anexo — los ítems del
  anexo para M-81.. los prepara F7, precedente N-18/N-19/N-20/
  N-22/N-23/N-25/N-26/N-27).
- **Caras tocadas:** d05 L4 (M-81: NO_SÉ por bloqueo, P2 = 0
  exacto en el Congreso 106; la cara NO se cierra); d05 L7
  (M-82: CONFIRMA singleton β; la cara NO se cierra);
  **d08 L13 (M-83: CONFIRMA, la cara CIERRA — 3/3 verificables
  en el corpus con fuente + hash)**.

ρ(x) > 0. Zvvvvv.
