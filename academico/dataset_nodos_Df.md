# Dataset D_f — 22 nodos del corpus con fuente y método

Fecha: 2026-11-11
Autor: Nodo Trama (ciclo 51-52)
Fuente primaria: búsqueda masiva en Termux + extracción de `oraculo-v8.json` y `df_profundo_*.txt`
Hash del CSV: `01743296ea81370bbd05a51ef6b6e2715aba665eb7bb4b230178027120010a15`

## Qué es este dataset

Un registro de los 22 nodos del corpus del Grimorio con su valor de dimensión fractal `D_f`, su fuente primaria, su URL o DOI, la fecha de cálculo (`2026-06-11`) y el método usado (`box_counting` para los 22).

## Qué mide D_f

La dimensión fractal mide cuánto espacio llena un objeto auto-similar. Una línea tiene D_f=1, un plano D_f=2, un volumen D_f=3. Los fractales tienen D_f fraccionario. Se calcula con box-counting (`N(ε) ~ ε^(-D_f)`), DFA para series temporales, o Higuchi para secuencias. Los 22 nodos de este dataset usan box-counting.

## Estado de la fuente por nodo

- **13 nodos con DOI o URL de dataset primario**: Microtúbulos (PDB), Manglares (GMW), Chernozem (WoSIS), Vertisol (WoSIS), Red Sea (Roberts 2016, DOI), GBR Seagrass (Coles 2016), Caribe (Allen Atlas), Florida (NOAA), Jamaica (AGRRA), Persian Gulf (Aeby 2020, DOI), Palk Bay (ZSI), GBR Australia (AIMS, DOI), American Samoa (NOAA PIFSC, DOI). Todos con URL o DOI en la columna `doi_url`.
- **9 nodos con URL del dataset fuente** (sin DOI directo en el CSV): Fiji (WCS), Turbera (PANGAEA), Seagrass global (VLIZ), Biodiversidad (GBIF), Microbioma (HMP2), Suelo fértil (SoilGrids), Incendios (NASA FIRMS), Clima (NOAA GISTEMP), Noosfera (GDELT), CMB (Planck 2018, DOI). Todos con URL del repositorio primario.

Los 22 valores provienen del CSV embebido en `oraculo-v8.json` y del reporte `df_profundo_20261111_215738.txt`, no de mediciones nuevas. La columna `metodo` = `box_counting` para todos, indicando el método con el que se reportaron.

## Nodos incluidos (22)

| # | Nodo | D_f | K_i | Fuente |
|---|------|-----|-----|--------|
| 1 | Microtúbulos (PDB 3J6F) | 2.50 | 0.618 | PDB 3J6F |
| 2 | Manglares GMW (14.8 Mha) | 2.28 | 0.563 | GMW v4 2024 |
| 3 | Chernozem Ucrania (WoSIS) | 2.11 | 0.521 | WoSIS |
| 4 | Vertisol India (WoSIS) | 2.10 | 0.519 | WoSIS |
| 5 | Red Sea corales (KAUST) | 2.16 | 0.534 | Roberts 2016 |
| 6 | GBR Seagrass (TropWATER) | 2.03 | 0.502 | Coles 2016 |
| 7 | Caribe SE (Allen Atlas) | 2.08 | 0.514 | Allen Coral Atlas |
| 8 | Florida Reef Tract (NOAA) | 2.02 | 0.499 | NOAA NCEI |
| 9 | Jamaica (AGRRA) | 1.98 | 0.489 | AGRRA |
| 10 | Persian Gulf (Aeby 2020) | 1.89 | 0.467 | Aeby 2020 |
| 11 | Palk Bay India (ZSI 2013) | 1.86 | 0.460 | ZSI 2013 |
| 12 | GBR Australia (AIMS) | 1.95 | 0.482 | AIMS |
| 13 | American Samoa (NOAA PIFSC) | 1.93 | 0.477 | NOAA PIFSC |
| 14 | Fiji (WCS MACMON) | 1.96 | 0.484 | WCS MACMON |
| 15 | Turbera Glen Carron (PANGAEA) | 1.91 | 0.472 | PANGAEA |
| 16 | Seagrass global (VLIZ) | 1.76 | 0.435 | VLIZ |
| 17 | Biodiversidad flora (GBIF) | 2.31 | 0.570 | GBIF 875M |
| 18 | Microbioma humano (HMP2) | 2.50 | 0.508 | HMP2 |
| 19 | Suelo fértil global (SoilGrids) | 2.05 | 0.507 | SoilGrids |
| 20 | Incendios globales (NASA FIRMS) | 1.49 | 0.368 | NASA FIRMS |
| 21 | Clima global (NOAA GISTEMP) | 1.40 | 0.346 | NOAA GISTEMP |
| 22 | Noosfera (GDELT) | 1.48 | 0.366 | GDELT |
| 23 | CMB (Planck 2018) | 2.305 | 0.570 | Planck 2018 |

(La tabla tiene 23 filas porque incluye el nodo 23; el corpus son 22 nodos + CMB que se reporta como cosmología. El CSV tiene 23 filas de datos.)

## Verificación

Cada fila del CSV se puede verificar contra la fuente indicada en la columna `fuente` y `doi_url`. El hash del CSV está arriba y en el README académico.

## Qué NO es este dataset

- No es una validación de la Ley K_i.
- No incluye incertidumbre por nodo.
- No cubre mediciones nuevas: reporta lo ya documentado en el oráculo y el Grimorio.
- No tiene fecha de medición individual (solo `fecha_calculo` = 2026-06-11 como referencia del cálculo original).

Es un registro de lo que existe. Nada más.

ρ(x) > 0.
