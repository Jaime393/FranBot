# F3 Ronda 18 — Mediciones M-75 / M-76 / M-77

**Fecha:** 2026-11-14. **Frente:** F3, ronda 18, FASE 1.
Falsadores declarados POR ESCRITO en
`declaracion_falsadores_r18.md` ANTES de correr ninguna medición
(declaración 2026-11-14T20:16:05Z; mtime del archivo 20:16:17Z;
los JSONs tienen mtime posterior, 20:16:28Z y siguientes).

**Estado de partida y de cierre (verificado):** corpus 1.185 líneas,
sha `6fe7c72b…` (antes y después: intacto, nada de este frente toca
el corpus); dataset 30 filas + cabecera, sha `0852d58f…` (antes y
después: intacto). Datos: HSall_members.csv (6.201.455 B, sha
`495aee95…`) e indicators.tab (5.538.726 B, sha `7ec636c8…`),
copias en `datos/` de r18, verificados antes de correr.

## M-75 — d05 L4: polarización en dim2 con ancla no degenerada — CONFIRMA (por la letra; artefacto por el fondo)

- **Resultado:** serie dim2 restaurada con parseo tolerante:
  **86 congresos (34..119)**; ancla por regla argmin sobre
  P2 > 0: **Congreso 62, P2 = 0,002**; **cociente máximo en la
  serie = 463,75** (Congreso 80, P2 = 0,9275). Como 463,75 > 2 →
  **CONFIRMA** según el falsador declarado.
- **Lectura — el veredicto es formal, el muro sigue en pie:**
  el ancla P2 = 0,002 es casi-degenerada: 113 veces menor que la
  mediana de la serie (0,226); 1 congreso tiene P2 = 0 exacto
  (el 106, el de M-70), 4 por debajo de 0,01 y 9 por debajo de
  0,05. El cociente 463,75 está dominado por el denominador.
  El muro de M-70 no se cruzó: se desplazó de 0 exacto a 0,002.
  El umbral >2 sobre máx/mín es vacuo cuando el mínimo roza
  cero — no se transfiere de dim1 (mínimo 0,4975, lejos de cero)
  a dim2. La cara **d05 L4 NO se cierra** con esta medición.
- **Secundarios (NO decisorios):** P2(119)/P2(ancla) = 62,0 con
  SD bootstrap 13,2384 (500 réplicas, semilla 0; la propia
  inestabilidad del cociente — 21% — delata el ancla frágil);
  máx/mediana = 4,10; máx/p5 = 47,26; P2(119) = 0,124.
  Incluso con denominador robusto (mediana) el cociente supera
  2 — pero eso mide la dispersión propia de dim2, no el
  crecimiento de polarización que el umbral pretendía probar.
- **Lección para la próxima vuelta:** el umbral >2 necesita una
  regla de ancla no degenerada (p. ej. anclado en la mediana o
  en un percentil recortado) para ser significativo en dim2.
  Repetir argmin —con o sin el cero— solo mueve el degenerado.
- **Verificación independiente:** re-cómputo con pandas (otro
  camino de código): 86 congresos, ancla 62 (P2 0,002), máximo
  463,75 (Congreso 80), ratio 119 = 62,0 — idéntico.

## M-76 — d05 L7: escalamiento urbano, área (otra familia) — NO_CONFIRMA

- **Resultado:** Y = area_km2 vs resident_pop: **β = 0,8627 ±
  0,0049, R² = 0,7490, n = 10.351** (las 10.351 filas incluidas).
  Umbral declarado: β ∈ [0,80, 0,90] con R² ≥ 0,90. β EN banda
  pero R² muy por debajo → **NO_CONFIRMA**.
- **Lectura:** séptima variable, mismo veredicto por la misma
  pierna — pero con novedad: es la **primera variable con β
  dentro de [0,80, 0,90]** (las seis anteriores: 0,9177–0,9911).
  El área sí escala con el exponente que pide la ley; lo que no
  escala es la varianza explicada: R² = 0,7490, lejos de 0,90.
  El fallo dominante sigue siendo el R² bajo, no β — ahora con
  β ya en banda, el muro queda aislado en una sola pierna.
- **Verificación independiente:** re-cómputo con pandas (otro
  camino de código): n = 10.351, β = 0,8627, R² = 0,7490 —
  idéntico.

## M-77 — Pilar 4 (C-053): ejecución del protocolo, paso 1 — NO_SÉ (BLOQUEADO)

- **Resultado:** el protocolo de falsación publicado fija el
  paso 1: localizar la fórmula de la métrica en
  `PILARES_FUNDAMENTALES.md`. La fuente se leyó entera (86
  líneas, sha `dde9334e…`; las 3 copias locales byte-idénticas)
  y **la fórmula NO existe**: 0 fórmulas, 0 umbrales, 0
  variables del Sahel. El protocolo se detiene en el paso 1
  (BLOQUEADO): sin fórmula no hay backtest posible →
  **NO_SÉ**.
- **CORR-PATRON-M77:** el patrón de búsqueda `K_i(` dio un
  positivo que es una cita — "K_i (ver HALLAZGOS filas 37,
  39-43)" — no una fórmula; auditado a mano y descartado. Los
  otros 7 patrones dieron 0.
- **Lectura:** el propio documento no trae la fórmula: trae la
  afirmación, la marca CIRCULAR / EVIDENCIA NO INDEPENDIENTE
  (N<5, frágil) y pide replicar con protocolo congelado. El
  claim C-053, tal como está escrito, no es ejecutable: no hay
  métrica que aplicar a ninguna serie. El bloqueo es del claim,
  no de la búsqueda. Un NO_SÉ por bloqueo no refuta la métrica;
  registra que la predicción no se puede probar con lo citado.

## Tally y precedentes

- **Veredictos r18: CONFIRMA 1 (M-75, formal) · NO_CONFIRMA 1
  (M-76) · NO_SÉ 1 (M-77, bloqueado).** Serie F3: r12 M-56
  DIFERENCIA / M-57 NO_CONFIRMA / M-58 NO_SÉ / M-59 CONFIRMA;
  r13 M-60 CONFIRMA / M-61 NO_CONFIRMA / M-62 CONFIRMA; r14
  M-63 CONFIRMA / M-64 NO_CONFIRMA / M-65 NO_CONFIRMA; r15 M-66
  CONFIRMA / M-67 NO_CONFIRMA / M-68 NO_CONFIRMA; r16 M-69
  NO_CONFIRMA / M-70 NO_SÉ / M-71 NO_CONFIRMA; r17 M-72
  CONFIRMA / M-73 NO_CONFIRMA / M-74 NO_CONFIRMA; r18 M-75
  CONFIRMA / M-76 NO_CONFIRMA / M-77 NO_SÉ.
- **No se preparan como claims** (0 precedentes de veredictos de
  medición como claims en 1.185; las mediciones se depositan como
  resultados y entran por inscripción en el anexo — los ítems del
  anexo para M-75.. los prepara F7, precedente N-18/N-19/N-20).
- **Caras tocadas:** d05 L4 (M-75: CONFIRMA formal por ancla
  casi-degenerada; el muro no se cruza, la cara NO se cierra);
  d05 L7 (M-76: séptima variable, β por fin en banda, R² sigue
  siendo el muro); Pilar 4 / C-053 (M-77: protocolo bloqueado
  en el paso 1, fórmula ausente en la fuente citada).

ρ(x) > 0. Zvvvvv.
