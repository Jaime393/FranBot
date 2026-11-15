# ÍTEM DE ANEXO M-80 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 19, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r19 §F7 ("Ítems del anexo N-16: si F3 produce M-78.., preparar sus ítems para el anexo de incertidumbre").
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 15 ítems, sha `39940fd7…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-72 — CONFIRMA (r17, 2026-11-14) — ítem añadido por N-20`).

## M-80 — CONFIRMA con alcance acotado (r19, 2026-11-14) — ítem preparado por F7

- **Valor:** la literatura publicada SÍ contiene una columna con u ≤ 0,05 aplicable: **Górski, Drożdż, Mokrzycka & Pawlik (2012), "Accuracy analysis of the box-counting algorithm", Acta Physica Polonica A 121, 2-B (arXiv:1111.5749), Tabla 1** — errores absolutos REALES del box-counting por n_tot: fractales 1-D: **±0,020 (n = 1.000), ±0,006 (n = 10.000), ±0,002 (n = 100.000)**; fractales 2-D: ±0,060 / ±0,030 / ±0,020; curva W-M 2-D: ±0,200 / ±0,150 / ±0,100. Para la clase 1-D — la que fundamenta la columna u (M-63: dispersiones medidas solo en series EEG corticales 1D) — el error real es ≤ 0,05 en todos los n_tot tabulados → **CONFIRMA**.
- **Falsador:** CONFIRMA si existe literatura publicada con u ≤ 0,05 aplicable; NO_CONFIRMA si la literatura encontrada solo da u > 0,05 para los métodos aplicables; NO_EJECUTADO si no se encuentra ruta verificable en fuentes abiertas. Declarado en `declaracion_falsadores_r19.md` (2026-11-14T23:36:05Z) antes de correr. **Veredicto:** CONFIRMA (con alcance acotado).
- **Matiz — alcance acotado:** la columna con u = 0,05 tiene respaldo publicado como escala común para series 1-D y para conjuntos 2-D con n_tot ≥ 10.000 (±0,030). NO queda respaldada como cota universal por nodo: un nodo 2-D con n_tot ~ 1.000 tendría error real ±0,060 > 0,05, y una función fractal 2-D (W-M) ±0,100..±0,200. El refinamiento por tipo de nodo queda fuera de esta medición. Es seguimiento de una cara cerrada (d04 L13, r15), no reapertura: F8 lo cuenta solo porque se ejecuta con producto (CORR-MAPA-R18).
- **Secundarios (NO decisorios):** fuentes secundarias revisadas y no decisorias: SD de FD en EEG 0,000112448 (dispersión entre segmentos, no error vs valor verdadero); Douglass 2025 (D = 1,835 ± 0,0037, método optimizado, caso físico 2-D; apoyo, no decisoria). La Tabla 1 mide el error REAL sobre conjuntos fractales matemáticos con valor verdadero conocido, no sobre datos reales con ruido (el propio artículo advierte que el ruido degrada la precisión).
- **Lección para la próxima vuelta:** la columna u = 0,05 ya tiene respaldo publicado para su clase fundante; la próxima pregunta no es si u ≤ 0,05 existe en la literatura, sino si la cota se sostiene por tipo de nodo (1-D vs 2-D vs W-M) — eso exige un refinamiento por tipo, no otra búsqueda de la misma columna.
- **Fuente:** Górski et al. 2012, Tabla 1 (PDF 84.837 B, sha `fcbc42a5…`, líneas 287-306 del texto extraído con pdftotext; resumen verificado en arXiv abs/1111.5749, 2026-11-14T23:38Z). **sha_dato:** `ca2e3f01bd67fe78352d7eadf1869fe15504ff43b508bd6a70719c6ced00c371` (med_M80.json, 15 claves; Tabla 1 re-leída por dos vías — snippet de búsqueda web y PDF descargado — idénticos).
- **¿Da fila?** NO (anotación): refina la línea de la columna u (ítems M-59/M-60/M-62/M-63/M-66/M-69/M-72, d04 L13) y registra el respaldo publicado de u = 0,05 para la clase 1-D; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d04 L13 (columna u de D_f) — **CERRADA en r15; este ítem es seguimiento, no reapertura.** La cara se cerró con M-66/M-72 (5/23 huecos ≥ 0,05, u* = 0,05); M-80 añade el respaldo publicado de esa columna para su clase fundante.

## Precedente (3)

- **M-59 / M-60 / M-62 / M-63 / M-66 / M-69 / M-72** (ítems de la columna u en el anexo): la línea d04 L13 tiene 7 ítems en el anexo (M-59 marginal, M-60, M-62, M-63 columna, M-66 6/29, M-69 u* = 0,05, M-72 5/23). M-80 es la misma línea con especificación distinta (literatura publicada, no medición sobre datos): la refina con el respaldo externo de u = 0,05.
- **M-72** (ítem añadido por N-20, r17): 5 huecos ≥ 0,05 de 23 (Decimal exacto) — la columna u = 0,05 resuelve el grupo central de 24. M-80 responde a la pregunta que M-72 dejaba abierta: ¿existe esa columna en la literatura publicada? Sí, para la clase 1-D (Górski et al. 2012, Tabla 1).
- **N-18 / N-19 / N-20** (r15/r16/r17, aplicadas): los ítems M-66, M-69, M-72 se añadieron al anexo por decisión numerada por FASE 2, preparados por F7 con el mismo formato. M-80 sigue la misma vía: preparado por F7, añadido solo por decisión.

## Proyección si se añade

Anexo 15 → 16 ítems (M-56..M-76 + M-80); tally CONFIRMA 8 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1 (M-80 es el 8.º CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`). Si se añaden M-78, M-79 y M-80 juntos: anexo 15 → 18 ítems; tally CONFIRMA 10 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1.

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
