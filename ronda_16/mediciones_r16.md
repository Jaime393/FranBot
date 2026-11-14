# F3 Ronda 16 — Mediciones M-69 / M-70 / M-71

**Fecha:** 2026-11-14. **Frente:** F3, ronda 16, FASE 1.
Falsadores declarados POR ESCRITO en
`declaracion_falsadores_r16.md` ANTES de correr ninguna medición.

**Estado de partida y de cierre (verificado):** corpus 1.178 líneas,
sha `7e5f016d…` (antes y después: intacto, nada de este frente toca
el corpus); dataset 30 filas + cabecera, sha `0852d58f…` (antes y
después: intacto). Datos: HSall_members.csv (6.201.455 B, sha
`495aee95…`) e indicators.tab (5.538.726 B, sha `7ec636c8…`),
copias en `datos/` de r16, verificados antes de correr.

## M-69 — d04 L13: qué resolución separa el grupo central — NO_CONFIRMA

- **Resultado:** u\* = **0,05** (5.º hueco interno mayor del grupo
  central de 24 nodos). Umbral declarado: u/2 = 0,0302. Como
  0,05 ≥ 0,0302 → **NO_CONFIRMA**.
- **Medido:** grupos por huecos > 2u = [1, 4, 24, 1] (re-derivados
  del dataset; el grupo central coincide nombre a nombre con los
  24 nodos de M-66). Huecos internos (23): > u solo 3, > u/2 son 8,
  mediana 0,02, máximo 0,1. Rango D_f del grupo: 1,76..2,50.
- **Lectura:** el grupo central NO exige duplicar la resolución de
  la columna actual. Una columna con u = 0,05 — solo un 17% mejor
  que la actual (0,0604) — ya resolvería 5 de sus 23 pares
  adyacentes. La indistinguibilidad del grupo es marginal en el
  umbral de conteo de M-66, no estructural. (M-66 decía: 3/23
  huecos internos superan u; M-69 cuantifica cuánto falta: 0,0104
  de resolución.)
- **Verificación independiente:** re-cómputo aparte del script
  (grupos [1, 4, 24, 1], u\* = 0,05) — idéntico.

## M-70 — d05 L4: polarización en DW-NOMINATE dim2 — NO_SÉ

- **Resultado:** el falsador declarado NO es evaluable. El ancla
  por regla (argmin P2 sobre la serie) es el **Congreso 106, con
  P2 = 0 exacto** (medianas D y R coinciden en −0,026 en dim2,
  a 10 decimales). El cociente P2(119)/P2(mín) = 0,124/0 no tiene
  valor finito. **Veredicto: NO_SÉ** (causa exacta: división por
  cero en el ancla; el bootstrap tampoco es ejecutable por la
  misma causa).
- **Medido (serie dim2 completa, 83 congresos):** P2(119) =
  0,124 (D n=223, R n=227); W2(119)/W2(106) = 0,9282 (la segunda
  pierna pasaría, pero sin primera pierna no hay veredicto);
  P2 máximo 0,9275 (Congreso 80). Nota cualitativa (NO decisoria):
  la polarización dim2 en 119 está muy por debajo de su máximo
  histórico — no hay duplicación a la vista — pero el test
  declarado es la razón al mínimo, y ese test es degenerado;
  por eso el veredicto es NO_SÉ y no NO_CONFIRMA.
- **Incidencia:** la primera corrida rompió con ZeroDivisionError
  en el cociente (log guardado en `med_M70_crash.log`). El script
  se corrigió con una guarda de ancla degenerada (registra ratio
  NO_DEFINIDO y veredicto NO_SÉ); **el falsador no cambió**.
  La segunda corrida completó y produjo `med_M70.json`.
- **CORR-SERIE-R16 (corrección de precedente):** la "serie
  25..119" de M-64/M-67 (dim1) y de M-70 (dim2) cubre **83
  congresos**, no 95. Dos causas: (a) los Congresos 25–33 no
  tienen partido R (party_code 200 ausente: congresos
  pre-sistema de partidos); (b) los Congresos **115–117 se caen
  por el parseo** — su party_code viene como cadena flotante
  ('100.0'/'200.0') y el `int()` del protocolo M-61/M-64/M-67
  (replicado aquí) descarta esas filas con ValueError. La serie
  dim1 de M-67 también tiene 83 congresos (34..119) y tampoco
  incluye 115–117. **El veredicto de M-67 no cambia:** medidos
  aparte con parseo tolerante a flotantes, P dim1(115/116/117) =
  0,8900/0,8840/0,8825, ratios vs P(80) = 1,7889/1,7769/1,7739,
  todos por debajo del máximo publicado 1,9719. El máximo
  alcanzable 1,9719 se sostiene; lo que se corrige es la
  descripción de la serie (83 congresos medidos, no 95).

## M-71 — d05 L7: escalamiento urbano, quinta variable — NO_CONFIRMA

- **Resultado:** Y = intersect_count_clean vs resident_pop:
  **β = 0,9733 ± 0,0118, R² = 0,3974, n = 10.351** (todas las
  filas incluidas: pop>0 e intersect_count_clean>0 en las 10.351).
  Umbral declarado: β ∈ [0,80, 0,90] con R² ≥ 0,90. β fuera de
  banda y R² muy por debajo → **NO_CONFIRMA**.
- **Lectura:** quinta variable, mismo modo de fallo que M-52
  (length_total, R²=0,6037), M-57 (node_count, R²=0,4148), M-65
  (street_segment_count, R²=0,4080) y M-68 (intersect_count,
  R²=0,4020): β ≈ 0,99 en los cinco casos y R² ≈ 0,40 en los
  cuatro últimos. El fallo dominante es el R² bajo, no β.
  intersect_count_clean (0,9733) es el β más bajo de la serie
  después de M-52, pero sigue fuera de [0,80, 0,90].
- **Verificación independiente:** re-cómputo con numpy (sin
  pandas): n=10.351, β=0,9733, R²=0,3974 — idéntico.

## Tally y precedentes

- **Veredictos r16: NO_CONFIRMA 2 (M-69, M-71) · NO_SÉ 1 (M-70) ·
  CONFIRMA 0.** Serie F3: r12 M-56 DIFERENCIA / M-57 NO_CONFIRMA /
  M-58 NO_SÉ / M-59 CONFIRMA; r13 M-60 CONFIRMA / M-61 NO_CONFIRMA /
  M-62 CONFIRMA; r14 M-63 CONFIRMA / M-64 NO_CONFIRMA / M-65
  NO_CONFIRMA; r15 M-66 CONFIRMA / M-67 NO_CONFIRMA / M-68
  NO_CONFIRMA; r16 M-69 NO_CONFIRMA / M-70 NO_SÉ / M-71
  NO_CONFIRMA.
- **No se preparan como claims** (0 precedentes de veredictos de
  medición como claims en 1.178; las mediciones se depositan como
  resultados y entran por inscripción en el anexo — los ítems del
  anexo para M-69.. los prepara F7, precedente N-18).
- **Caras tocadas:** d04 L13 (seguimiento del límite, sin
  reapertura: la cara sigue cerrada; M-69 mide cuánto falta para
  resolver su grupo central); d05 L4 (dim2: test degenerado,
  NO_SÉ); d05 L7 (quinta variable, mismo modo de fallo).

ρ(x) > 0. Zvvvvv.
