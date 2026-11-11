# C20 — escala temporal y definición de c (ciclo 38)

Fecha: 2026-11-11. Código: `c20_periodo.py` (stdlib: autocorrelación
+ DFT). Datos: GRACE TN-14 V3, 281 filas mensuales 2002-04 → 2025-08.

## A1 — Columnas y qué es c20

17 columnas: date, mjd, year_fraction, c20_value,
c20_minus_mean_1e-10, c20_sigma_1e-10, c30_value,
c30_minus_mean_1e-10, c30_sigma_1e-10, c21_sigma_1e-10,
s21_sigma_1e-10, c22_sigma_1e-10, s22_sigma_1e-10, lod_ms,
lod_source, source, doi.

c20 es el coeficiente gravitacional de Stokes de grado 2, orden 0
(C20 = −J2/√5, armónico zonal de la Tierra). Valores (columna
c20_value, real; lod es sintética y c20_minus_mean es inconsistente
— ciclo 34): media −0.000484169462243557, desviación 6.363e-11,
mín −0.000484169603317581, máx −0.000484169281248238.

## A2 — Período dominante: NO HAY

- Autocorrelación (serie sin media ni tendencia lineal): lag 1
  r=0.8851, lag 2 0.7902, lag 3 0.7100 (= Ξ medido en ciclo 34:
  consistencia), lag 6 0.5022, lag 12 0.1190, lag 24 −0.0745.
  Decae monótonamente: deriva lenta, no oscilación. La componente
  anual es débil (lag 12: r=0.119).
- DFT (potencia, periodos 2–60 meses): top 5 = P=57 (6.955e-20),
  56 (6.879e-20), 42 (6.777e-20), 58 (6.635e-20), 55 (6.460e-20).
  Los 5 están dentro del 8%: no hay pico agudo. La potencia en
  P=12 meses es el 8.3% del máximo. El "máximo formal" (57 meses)
  es la cola de baja frecuencia de la deriva, no un periodo real.

**No hay periodo dominante.** La serie C20 (V3) es deriva lenta +
ruido, sin componente periódica estable. Por tanto no existe una
definición de `c` basada en el periodo de C20.

## A3 — Candidatos (calculados con datos reales, τ=1 ventana, Ξ=0.71)

- **c = 1/C20 (literal, valor del coeficiente):** C20 media =
  −0.000484169462243557 → c = −2065.39. Ki = −0.618. En banda: NO.
  Además es un error de categoría: C20 es un coeficiente, no un
  periodo; 1/C20 no es una escala de tiempo. Ki negativo carece
  de sentido para una coherencia en [0, 0.618].
- **c = 1/P con P=57 meses formal (19 ventanas):** c = 0.0526,
  Ki = 0.0231. En banda: NO.
- **c = P/τ_ventana con P=57 meses (19):** c = 19, Ki = 0.618000
  (saturado). En banda: SÍ — **pero RECHAZADO**: P=57 meses no es
  un periodo real (ver A2). Usarlo sería ajustar ruido al
  resultado deseado. Lo mismo para c = P·Ξ = 13.49 → Ki = 0.618000
  (saturado, rechazado por la misma razón).
- Referencia: si el periodo fuera anual (12 meses = 4 ventanas):
  c=1/4 → Ki=0.1086 (no banda); c=4 → Ki=0.6138 (banda). Pero el
  periodo NO es anual (lag 12: r=0.119; DFT P=12: 8.3% del máx).

## A4 — Decisión

**`c` no se puede definir desde C20.** No hay periodo dominante;
el máximo formal de la DFT es deriva, no periodo; el único
candidato literal (1/C20) da Ki negativo. **G09 sigue
parcialmente cerrada.** La última oportunidad de definir `c`
sin ajustarlo (ciclo 38) no dio definición: el resultado es que
la ley K_i no se confirma por esta vía, y queda documentado así.
