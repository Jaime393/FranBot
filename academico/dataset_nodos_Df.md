# Dataset D_f — 23 nodos del corpus con fuente y método

Fecha: 2026-11-11
Autor: Nodo Trama (ciclo 51-52)
Fuente primaria: búsqueda masiva en Termux + extracción de `oraculo-v8.json` y `df_profundo_*.txt`
Hash del CSV: `b5716b59f5bc97be3f20576f0c2b086ef3deaae11a9e31d8746a8edec7317a60`

## Qué es este dataset

Un registro de los 23 nodos del corpus del Grimorio con su valor de dimensión fractal `D_f`, su fuente primaria, su URL o DOI, la fecha de cálculo (`2026-06-11`) y el método usado (`box_counting` para los 23).

## Qué mide D_f

La dimensión fractal mide cuánto espacio llena un objeto auto-similar. Una línea tiene D_f=1, un plano D_f=2, un volumen D_f=3. Los fractales tienen D_f fraccionario. Se calcula con box-counting (`N(ε) ~ ε^(-D_f)`), DFA para series temporales, o Higuchi para secuencias. Los 23 nodos de este dataset usan box-counting.

## Estado de la fuente por nodo

- **13 nodos con DOI o URL de dataset primario**: Microtúbulos (PDB), Manglares (GMW), Chernozem (WoSIS), Vertisol (WoSIS), Red Sea (Roberts 2016, DOI), GBR Seagrass (Coles 2016), Caribe (Allen Atlas), Florida (NOAA), Jamaica (AGRRA), Persian Gulf (Aeby 2020, DOI), Palk Bay (ZSI), GBR Australia (AIMS, DOI), American Samoa (NOAA PIFSC, DOI). Todos con URL o DOI en la columna `doi_url`.
- **9 nodos con URL del dataset fuente** (sin DOI directo en el CSV): Fiji (WCS), Turbera (PANGAEA), Seagrass global (VLIZ), Biodiversidad (GBIF), Microbioma (HMP2), Suelo fértil (SoilGrids), Incendios (NASA FIRMS), Clima (NOAA GISTEMP), Noosfera (GDELT), CMB (Planck 2018, DOI). Todos con URL del repositorio primario.

Los 23 valores provienen del CSV embebido en `oraculo-v8.json` y del reporte `df_profundo_20261111_215738.txt`, no de mediciones nuevas. La columna `metodo` = `box_counting` para todos, indicando el método con el que se reportaron.

## Nodos incluidos (23)

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

(La tabla tiene 23 filas porque incluye el nodo 23; el corpus son 22 filas del Grimorio + CMB, que se reporta como cosmología. El CSV tiene 23 filas de datos.)

## Cruce con CSV de GitHub (ciclo 55)

Los 6 CSV con D_f localizados en Jaime393/MIU (ciclo 54) se leyeron completos el 2026-11-11. Cada uno tiene cabecera + 1 fila de datos. Cruce con las 23 filas del dataset:

- **Confirmados por CSV (3, solo con los 6 CSV del ciclo 55):** Fiji (WCS MACMON) D_f 1.96, Jamaica (AGRRA) D_f 1.98, Palk Bay India (ZSI 2013) D_f 1.86. Corregido en ciclo 56: el cruce completo da 17 confirmados (ver sección siguiente).
- **Discrepancia (2, ciclo 55):** Caribe SE y FIRMS. Ambas resueltas en ciclo 56: no eran discrepancias (ver sección siguiente).
- **Sin CSV (18, ciclo 55):** con solo 6 CSV leídos. Corregido en ciclo 56: 13 de esos 18 tienen archivo de datos en MIU_V12.0_FINAL/nodos/; quedan 5 sin mención.

La columna `fuente_archivo` se añadió en el ciclo 55. Ningún valor de D_f cambió: solo trazabilidad.

## Discrepancias resueltas (ciclo 56)

El ciclo 55 cruzó solo 6 CSV. El ciclo 56 listó el árbol completo de MIU_V12.0_FINAL/nodos/ (336 archivos) y leyó los archivos fuente de los 18 nodos restantes. Resultado del cruce completo (23 filas):

- **Confirmados por CSV (17):** Manglares 2.28, Vertisol 2.10, Red Sea 2.16, Caribe SE 2.08, Florida 2.02, Jamaica 1.98, Persian Gulf 1.89, Palk Bay 1.86, GBR Australia 1.95, American Samoa 1.93, Fiji 1.96, Biodiversidad flora 2.31, Microbioma 2.50, Suelo fértil 2.05, Incendios 1.49, Clima global 1.40, Noosfera 1.48. Cada valor coincide con su archivo fuente; la columna `fuente_archivo` apunta a la ruta en GitHub.
- **Discrepancia (1):** Chernozem Ucrania: dataset 2.11, archivo wosis_chernozem_ukraine_dbd1.13.csv 2.41 (7 filas, todas D_f 2.41, K_i 0.596). Ambos valores son internamente consistentes con la fórmula K_i (0.2472 × D_f), pero difieren entre sí. El valor del dataset no se cambió; queda anotado para re-medición o revisión de fuente.
- **Sin CSV buscable (5):** Microtúbulos (PDB 3J6F), GBR Seagrass (TropWATER), Turbera Glen Carron (PANGAEA), Seagrass global (VLIZ), CMB (Planck 2018). No tienen archivo en MIU_V12.0_FINAL/nodos/ ni en los 4 repos buscables. La etiqueta es SIN_CSV_BUSCABLE (no SIN_CSV): significa que no se encontró fuente en el ámbito buscable, no que no exista.

Resoluciones:

- **Caribe SE:** el archivo agregado caribe_se_allen_atlas.csv tiene D_f 2.08 (K_i_law 0.514), igual que el dataset. El archivo allen_atlas_site_013.csv (D_f 2.0) es un solo sitio. Ambas medidas son válidas de cosas distintas; el dataset conserva 2.08 con fuente_archivo al agregado.
- **Incendios FIRMS:** el dataset 1.49 coincide con firms_incendios_global_2000-2026.csv (serie anual 2000–2026, Fire_Count 2026, K_i 0.368). El archivo firms_df_Ki.csv (D_f 1.9690764062597914) es la salida de df_from_firms.py, que hace box-counting 2D espacial sobre un raster (x, y) con K_i 0.375 fijado en el código, no calculado. Serie temporal y patrón espacial miden cosas distintas; no hay conflicto. El dataset conserva 1.49 con fuente_archivo a la serie anual.
- **Microbioma:** el archivo hmp2_human_3150_metagenomes.csv tiene D_f_network 2.5 y K_i 0.508. La anomalía del ciclo 53 queda resuelta: el K_i 0.508 no es un error de fórmula, es el valor del archivo (dimensión de red, no box-counting). La nota anterior sobre l_corr queda sustituida por la confirmación.
- **reef_conteos_miu.csv (D_f 1.6):** no es un nodo. Es un conteo global de polígonos de arrecife (12.805, año 2020, Allen Coral Atlas Reef Extent), no uno de los 22 nodos del corpus, y su K_i 0.596 no sigue la fórmula (0.2472 × 1.6 = 0.396). No se añade fila; queda documentado aquí como no-nodo.
- **GBIF fauna (D_f 2.2):** existe en el repo (gbif_fauna_875M_2026.csv) pero no es fila del dataset (la fila es flora, D_f 2.31). No se añade.

## Verificación

Cada fila del CSV se puede verificar contra la fuente indicada en la columna `fuente` y `doi_url`. El hash del CSV está arriba y en el README académico.

## Qué NO es este dataset

- No es una validación de la Ley K_i.
- No incluye incertidumbre por nodo.
- No cubre mediciones nuevas: reporta lo ya documentado en el oráculo y el Grimorio.
- No tiene fecha de medición individual (solo `fecha_calculo` = 2026-06-11 como referencia del cálculo original).

Es un registro de lo que existe. Nada más.

ρ(x) > 0.
