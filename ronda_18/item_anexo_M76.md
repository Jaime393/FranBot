# ÍTEM DE ANEXO M-76 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 18, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r18 §F7 ("Ítems del anexo N-16: si F3 produce M-75.., preparar sus ítems para el anexo de incertidumbre").
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 13 ítems M-56..M-72, sha `30c05adb…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-72 — CONFIRMA (r17, 2026-11-14) — ítem añadido por N-20`).

## M-76 — NO_CONFIRMA (r18, 2026-11-14) — ítem preparado por F7

- **Valor:** Y = area_km2 vs resident_pop: **β = 0,8627 ± 0,0049, R² = 0,7490, n = 10.351** (las 10.351 filas incluidas). Umbral declarado: β ∈ [0,80, 0,90] con R² ≥ 0,90. β EN banda pero R² muy por debajo → **NO_CONFIRMA**.
- **Falsador:** CONFIRMA si β estimado cae en [0,80, 0,90] con R² ≥ 0,90; NO_CONFIRMA en caso contrario (mismo criterio que M-52/M-57, declarado antes de correr). **Veredicto:** NO_CONFIRMA.
- **Matiz — primera β en banda; el muro queda aislado en una sola pierna:** séptima variable, mismo veredicto por la misma pierna — pero con novedad: es la **primera variable con β dentro de [0,80, 0,90]** (las seis anteriores: 0,9177–0,9911). El área sí escala con el exponente que pide la ley; lo que no escala es la varianza explicada: R² = 0,7490, lejos de 0,90. El fallo dominante sigue siendo el R² bajo, no β — ahora con β ya en banda, el muro queda aislado en una sola pierna.
- **Fuente:** datos de escalamiento urbano (indicators.tab, sha `7ec636c8…`, copia en `datos/` de r18, verificada antes de correr). **sha_dato:** `74cc8abf21db198571a521a3008407314ba10ae2517f615be8ad884e0b23cd18` (med_M76.json, 15 claves; verificación independiente con pandas, otro camino de código, idéntica: n = 10.351, β = 0,8627, R² = 0,7490).
- **¿Da fila?** NO (anotación): refina la línea de escalamiento urbano (ítems M-57/M-65, mismo falsador β/R²); no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L7 (escalamiento urbano) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta, no cierre.

## Precedente (3)

- **M-57 / M-65** (ítems de escalamiento urbano en el anexo, añadidos en bloque por N-16): M-57 (2.ª variable) y M-65 (5.ª variable) miden el escalamiento con el mismo falsador β ∈ [0,80, 0,90] con R² ≥ 0,90. M-76 es la 7.ª variable de la misma línea y la primera con β en banda: refina la línea aislando el muro en la pierna R².
- **N-19** (r16, aplicada): el ítem M-69 se añadió al anexo por decisión numerada por FASE 2, preparado por F7 con el mismo formato.
- **N-20** (r17, aplicada): el ítem M-72 se añadió al anexo por la misma vía en r17. M-76 sigue la misma vía: preparado por F7, añadido solo por decisión.
- **Distinción vs M-71/M-73 (sin ítem):** M-71 (r16) y M-73 (r17) se denegaron como ítems por ser otra variable con el mismo modo de fallo en ambas piernas (β fuera de banda Y R² bajo). M-76 rompe ese patrón en una pierna: β entra en banda por primera vez. Por eso este ítem se prepara y M-77 no (ver `preparadas_r18.md` §4).

## Proyección si se añade

Anexo 13 → 14 ítems (M-56..M-72 + M-76); tally CONFIRMA 6 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1 (M-76 es el 6.º NO_CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`). Si se añaden M-75 y M-76 juntos: anexo 13 → 15 ítems; tally CONFIRMA 7 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1.

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
