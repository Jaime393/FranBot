# F3 Ronda 17 — Mediciones M-72 / M-73 / M-74

**Fecha:** 2026-11-14. **Frente:** F3, ronda 17, FASE 1.
Falsadores declarados POR ESCRITO en
`declaracion_falsadores_r17.md` ANTES de correr ninguna medición
(mtime 18:37:09Z; los JSONs tienen mtime 18:38:12Z/18:38:13Z/18:38:17Z).

**Estado de partida y de cierre (verificado):** corpus 1.181 líneas,
sha `fd1df2db…` (antes y después: intacto, nada de este frente toca
el corpus); dataset 30 filas + cabecera, sha `0852d58f…` (antes y
después: intacto). Datos: HSall_members.csv (6.201.455 B, sha
`495aee95…`) e indicators.tab (5.538.726 B, sha `7ec636c8…`),
copias en `datos/` de r17, verificados antes de correr.

## M-72 — d04 L13: ¿se sostiene la predicción de M-69? — CONFIRMA

- **Resultado:** con aritmética exacta `Decimal` sobre las cadenas
  del CSV, el grupo central re-derivado es el mismo ([1, 4, 24, 1];
  coincide nombre a nombre con M-66 y con M-69) y el conteo es
  **5 huecos ≥ 0,05 de 23**. Sensibilidad: conteo ≥ u = 5, 5, 4
  para u = 0,045 / 0,05 / 0,055 (u\* ± SE(u) = 0,0050), dentro de
  [4, 6]. **CONFIRMA** (las dos piernas del falsador pasan).
- **Empate de frontera (secundario):** el conteo estricto (> 0,05)
  es 4/23 — el 5.º hueco mayor ES 0,05 exacto, así que la
  predicción de M-69 ("resolvería 5") vale con la frontera
  inclusiva y no con la estricta. La predicción se sostiene tal
  como M-69 la enunció.
- **Control:** el re-conteo de M-66 con el método Decimal da 6/29
  huecos > u = 0,0604 en todo el rango — idéntico al publicado.
- **Lectura:** la cuenta de M-69 no era un artefacto del redondeo
  flotante ni del redondeo a 4 decimales. El "5" es robusto a
  ±SE(u) (4–5 en la banda) y el método entero reproduce M-66.
  La indistinguibilidad del grupo central sigue siendo marginal
  en el umbral de conteo, no estructural (M-69), ahora con la
  cuenta verificada por un segundo método.
- **Verificación independiente:** re-cómputo con numpy (sin
  Decimal, sin pandas): grupos [1, 4, 24, 1], ≥0,05: 5, >0,05: 4,
  sensibilidad [5, 5, 4], control 6/29, grupo == M-66 — idéntico.

## M-73 — d05 L7: escalamiento urbano, sexta variable — NO_CONFIRMA

- **Resultado:** Y = intersect_count_clean_topo vs resident_pop:
  **β = 0,9757 ± 0,0118, R² = 0,3989, n = 10.351** (todas las
  filas incluidas: pop>0 e intersect_count_clean_topo>0 en las
  10.351). Umbral declarado: β ∈ [0,80, 0,90] con R² ≥ 0,90. β
  fuera de banda y R² muy por debajo → **NO_CONFIRMA**.
- **Lectura:** sexta variable, mismo modo de fallo que M-52
  (length_total, R²=0,6037), M-57 (node_count, R²=0,4148), M-65
  (street_segment_count, R²=0,4080), M-68 (intersect_count,
  R²=0,4020) y M-71 (intersect_count_clean, R²=0,3974): β ≈ 0,98
  en los seis casos y R² ≈ 0,40 en los cinco últimos. El fallo
  dominante es el R² bajo, no β. intersect_count_clean_topo
  (0,9757) es el segundo β más bajo de la serie después de M-52,
  pero sigue fuera de [0,80, 0,90].
- **Verificación independiente:** re-cómputo con numpy (sin
  pandas): n=10.351, β=0,9757, R²=0,3989 — idéntico.

## M-74 — d05 L4: ¿el umbral >2 sigue inalcanzable con la serie dim1 restaurada (86 congresos)? — NO_CONFIRMA

- **Resultado:** serie dim1 restaurada con parseo tolerante a
  flotantes: **86 congresos (34..119)**; ancla por regla argmin:
  **Congreso 80, P = 0,4975** (el mismo mínimo que M-67);
  **cociente máximo en la serie = 1,9719** (umbral > 2). Como
  1,9719 ≤ 2 → **NO_CONFIRMA**.
- **Secundarios:** P(119)/P(80) = 1,8613 ± 0,0866 (bootstrap 500,
  semilla 0) — idéntico a M-67; W(119)/W(80) = 0,8528; P(115) =
  0,8900, P(116) = 0,8840, P(117) = 0,8825 — los tres valores que
  r16 afirmó aparte, aquí re-derivados.
- **Re-chequeo de CORR-SERIE-R16:** con el parseo `int()`
  original la serie tiene **83 congresos** (34..119, sin 115–117),
  como afirmó r16. La única diferencia entre ambos parseos son
  exactamente los Congresos 115, 116 y 117.
- **Lectura:** restaurar los tres congresos caídos no mueve
  nada: ni el ancla (sigue el 80), ni el máximo (sigue 1,9719),
  ni el cociente P(119)/P(80) (sigue 1,8613). El umbral >2 sigue
  inalcanzable con DW-NOMINATE dim1, ahora sobre la serie
  completa de 86 congresos. La corrección de r16 era de
  descripción, no de veredicto — y el veredicto sobrevive a la
  restauración.
- **Verificación independiente:** re-cómputo con pandas
  (parseo float): 86 congresos, mínimo Congreso 80 (0,4975),
  cociente máximo 1,9719, P(119)/P(80) = 1,8613, P(115/116/117)
  = 0,8900/0,8840/0,8825 — idéntico. Conteo crudo con csv:
  92 congresos con parseo int() y 95 con parseo float antes de
  exigir ambos partidos; la diferencia es exactamente
  {115, 116, 117}; al exigir D y R presentes quedan 83 y 86.

## Tally y precedentes

- **Veredictos r17: CONFIRMA 1 (M-72) · NO_CONFIRMA 2 (M-73, M-74) ·
  NO_SÉ 0.** Serie F3: r12 M-56 DIFERENCIA / M-57 NO_CONFIRMA /
  M-58 NO_SÉ / M-59 CONFIRMA; r13 M-60 CONFIRMA / M-61 NO_CONFIRMA /
  M-62 CONFIRMA; r14 M-63 CONFIRMA / M-64 NO_CONFIRMA / M-65
  NO_CONFIRMA; r15 M-66 CONFIRMA / M-67 NO_CONFIRMA / M-68
  NO_CONFIRMA; r16 M-69 NO_CONFIRMA / M-70 NO_SÉ / M-71
  NO_CONFIRMA; r17 M-72 CONFIRMA / M-73 NO_CONFIRMA / M-74
  NO_CONFIRMA.
- **No se preparan como claims** (0 precedentes de veredictos de
  medición como claims en 1.181; las mediciones se depositan como
  resultados y entran por inscripción en el anexo — los ítems del
  anexo para M-72.. los prepara F7, precedente N-18/N-19).
- **Caras tocadas:** d04 L13 (seguimiento del límite, sin
  reapertura: la cara sigue cerrada; M-72 verifica la predicción
  de M-69 por un segundo método); d05 L7 (sexta variable, mismo
  modo de fallo); d05 L4 (tercer test sobre la serie corregida:
  el umbral >2 sigue inalcanzable con la serie restaurada).

ρ(x) > 0. Zvvvvv.
