# Literatura externa al MIU — 2026-11-11

Fecha: 2026-11-11. Ciclo 54. Consultas públicas sin token (Zenodo, GitHub, Crossref) y búsqueda de código con el conector del chat.

## Corpus DOI del autor (Zenodo)

La consulta por nombre de creador **sí funciona**: el fallo HTTP 400 de los ciclos 44, 47 y 53 no era la sintaxis, era el tamaño de página. El error exacto de la API: "Page size cannot be greater than 25. Please use authenticated requests to increase the limit to 100." Todas las variantes del ciclo 54 usaban `size=50`; con `size=25` todas devuelven HTTP 200.

Variantes probadas (ciclo 54, sin token):

| Variante | Consulta | HTTP | Hits |
|---|---|---|---|
| V1 | q=Vicente+Gabancho | 200 | 13.301 (ruido: cualquier registro con "Vicente" o "Gabancho") |
| V3 | creators.name:"Gabancho" | 200 | 19 (10 del autor, 9 de otros Gabancho) |
| V3b | creators.name:"Vicente Gabancho" | 200 | 10 (todos del autor) |
| V4 | title:"Monismo Informacional Unificado" | 200 | 0 |
| V5 | q=monismo+informacional | 200 | 1.523 (ruido: monismo filosófico) |
| V6 | communities?q=MIU | 200 | 1.025 (comunidades genéricas, sin relación) |
| V2 | ORCID | — | sin ORCID en claims.jsonl; no ejecutada |

**Hallazgo: la búsqueda por nombre es incompleta.** V3b devuelve 10 registros del autor; el corpus conocido por DOI directo y versiones de concepto tiene 18. Los 8 que no aparecen en la búsqueda por nombre:

| DOI | Título | Fecha | Creador |
|---|---|---|---|
| 10.5281/zenodo.19338257 | Unified Framework for General Relativity, Quantum Mechanics, Thermodynamics, the Standard Model, and the Emergence of Fundamental Constants | 2026-03-30 | Vicente Gabancho, Juan Diego |
| 10.5281/zenodo.20279680 | Monismo Informacional Unificado (MIU) – Edición completa | 2026-05-19 | Vicente Gabancho, Juan Diego |
| 10.5281/zenodo.20483338 | Monismo Informacional Unificado (MIU) – MIU-v1.6: Zero-Parameter Cosmology from Quantum Critical Dynamics | 2026-05-29 | Vicente Gabancho, Juan Diego |
| 10.5281/zenodo.20483563 | Grimorium Universalis | 2026-06-01 | Vicente Gabancho, Juan Diego |
| 10.5281/zenodo.20499945 | Grimorio Multiversal | 2026-06-01 | Vicente Gabancho, Juan Diego |
| 10.5281/zenodo.20547558 | Monismo Informacional Unificado (MIU) – MIU V12.0 - Modelo Integrado Unificado con Capa de Conciencia | 2026-06-04 | Vicente Gabancho, Juan Diego |
| 10.5281/zenodo.22071488 | MIU v4.0 EL SUELO DE LA REALIDAD B1-B5 CERRADOS Kτ 0.3381/0.3934 α 3 vías 16 caps Φ_Red 22.2→23.0 Superseding V12 | 2026-08-23 | Jaime, Fran MIU Ecosistema |
| 10.5281/zenodo.22071505 | MIU v4.0 EL SUELO DE LA REALIDAD v13.2 CON ARCHIVO B1-B5 CERRADOS Kτ 0.3381/0.3934 α 3 vías Φ_Red 23.0 | 2026-08-23 | Jaime, Fran MIU Ecosistema |

Los 10 que sí aparecen en V3b (todos en el corpus conocido, 0 nuevos): 19320946, 19373289, 19705899, 19723044, 20191874, 20200753, 20436104, 20547677, 21351630, 22650419.

**Conclusión: ningún registro nuevo del autor.** El corpus sigue en 18 (17 publicaciones + 1 dataset), conocido por DOI directo y versiones de concepto (PAPER_DOIS_MIU.md, ciclo 49). La búsqueda por nombre no puede completarlo: devuelve 10 de 18. Evidencia: academico/evidence/zenodo_query_ok.json (variante V3, 19 hits).

## Repos públicos del autor con posible D_f

Total de repos públicos: 232 (API users/Jaime393, 3 páginas). Búsqueda de código con el conector del chat (search_code, 13 consultas: contenido D_f/fractal/box_counting/higuchi/df_profundo/boxcount y ruta df/fractal/dimension/higuchi/boxcount/medicion/nodo).

**Límite de cobertura: la búsqueda solo devuelve resultados de 4 repos** (Jaime393/MIU, Jaime393/FranBot, Jaime393/FranBot-Private, Jaime393/miu-portable-skills), los accesibles por la App instalada. Los otros 228 repos no son buscables por esta vía. Repos con al menos un archivo cuyo nombre o ruta casa con los términos: 3 (MIU, FranBot, FranBot-Private).

Búsquedas por contenido (total_count): D_f 493, fractal 122, box_counting 2, higuchi 13, df_profundo 0, boxcount 1. Búsquedas por ruta (total_count): df 12, fractal 3, dimension 1, higuchi 0, boxcount 0, medicion 0, nodo 346 (solo página 1 de 100 leída; unión de rutas distintas: 112).

Falsos positivos de los términos: "df" casa con "cloudflare"; "nodo" casa con "zenodo" y con la carpeta nodos/corales.

Candidatos inspeccionados (cabecera: primera línea o primeros 500 bytes, repo Jaime393/MIU, rama main):

| Archivo | Tamaño | Clasificación | Cabecera literal |
|---|---|---|---|
| MIU_V12.0_FINAL/nodos/clima/firms_df_Ki.csv | 103 B | CANDIDATO_CSV_CON_DF | Variable,D_f,K_i,Source,DOI_URL |
| MIU_V12.0_FINAL/nodos/corales/reef_conteos_miu.csv | 129 B | CANDIDATO_CSV_CON_DF | Variable,class,n_poligonos,Year,D_f,K_i,Source,DOI_URL |
| MIU_V12.0_FINAL/nodos/corales/fiji_wcs_macmon.csv | 221 B | CANDIDATO_CSV_CON_DF | Region,Country,Source,Authors,Data_Type,C_viva_percent,D_f,K_i_measured,K_i_law,DOI_URL,Notes,Date_Accessed |
| MIU_V12.0_FINAL/nodos/corales/jamaica_agrra.csv | 223 B | CANDIDATO_CSV_CON_DF | Region,Country,Source,Authors,Data_Type,C_viva_percent,D_f,K_i_measured,K_i_law,DOI_URL,Notes,Date_Accessed |
| MIU_V12.0_FINAL/nodos/corales/palk_bay_zsi2013.csv | 207 B | CANDIDATO_CSV_CON_DF | Region,Country,Source,Authors,Data_Type,C_viva_percent,D_f,K_i_measured,K_i_law,DOI_URL,Notes,Date_Accessed |
| MIU_V12.0_FINAL/nodos/corales/allen_atlas_site_013.csv | 207 B | CANDIDATO_CSV_CON_DF | Region,Country,Source,Authors,Data_Type,C_viva_percent,D_f,K_i_measured,K_i_law,DOI_URL,Notes,Date_Accessed |
| MIU_V12.0_FINAL/codigo/df_from_dbd.py | 1.544 B | CANDIDATO_PY_CON_DF | def box_counting_3d(dbd_array, scales=[1,2,4,8,16,32]) |
| MIU_V12.0_FINAL/codigo/df_from_firms.py | 1.243 B | CANDIDATO_PY_CON_DF | def box_count_2d(coords, box_sizes) — "Box-counting para D_f" |
| nodos/nodo_amazonia.py | 8.631 B | CANDIDATO_PY_CON_DF | "Calcula la dimensionalidad fractal (D_f) de las alertas de deforestación (DETER/INPE)" |
| MIU_V12.0_FINAL/nodos/corales/stats/statistics.csv | 696 B | NO_CANDIDATO | class_type,class_name,cover_fraction,cover_sqkm (sin D_f) |
| tools/df_calculator.js | 1.247 B | NO_CANDIDATO (JS) | MIU D_f Calculator — Power-Law Fitting Tool; function powerLawFit(xArr, yArr) |
| benchmarks/df/README.md | 483 B | NO_CANDIDATO | "Crear un benchmark D_f reproducible por tipo de objeto" |
| validation/df_benchmark/README.md | 481 B | NO_CANDIDATO | "Implementar un benchmark D_f por tipo de objeto" |
| docs/D_f_BIBLIOGRAPHY.md | 5.367 B | NO_CANDIDATO (bibliografía) | "# D_f — Bibliografía Validada de Dimensión Fractal y Métodos Relacionados" |

Conteos: CSV con D_f 6, JSON con D_f 0, PY con D_f 3. Los 6 CSV y los 3 PY están en Jaime393/MIU, carpeta MIU_V12.0_FINAL (datos de nodos y código) y nodos/. Los archivos CSV de corales (Fiji, Jamaica, Palk Bay, Allen Atlas) y el de FIRMS corresponden a filas del dataset academico/dataset_nodos_Df.csv (23 filas): son las fuentes de datos en GitHub, no en Termux. No se leyó el contenido completo de ningún CSV: solo cabeceras. Los demás archivos allen_atlas_site_*.csv comparten carpeta y nombre; solo la cabecera de site_013 está verificada.

## CSV reales con D_f en GitHub (ciclo 55)

Leídos completos el 2026-11-11 desde Jaime393/MIU (rama main). Cada CSV tiene cabecera + 1 fila de datos.

| CSV | Ruta | Filas | Columna D_f | D_f únicos | Corrobora dataset |
|---|---|---|---|---|---|
| fiji_wcs_macmon.csv | MIU_V12.0_FINAL/nodos/corales/fiji_wcs_macmon.csv | 1 | D_f | 1.96 | sí (Fiji 1.96) |
| jamaica_agrra.csv | MIU_V12.0_FINAL/nodos/corales/jamaica_agrra.csv | 1 | D_f | 1.98 | sí (Jamaica 1.98) |
| palk_bay_zsi2013.csv | MIU_V12.0_FINAL/nodos/corales/palk_bay_zsi2013.csv | 1 | D_f | 1.86 | sí (Palk Bay 1.86) |
| allen_atlas_site_013.csv | MIU_V12.0_FINAL/nodos/corales/allen_atlas_site_013.csv | 1 | D_f | 2.0 | parcial (dataset Caribe SE 2.08; el archivo es un solo sitio, no el agregado) |
| reef_conteos_miu.csv | MIU_V12.0_FINAL/nodos/corales/reef_conteos_miu.csv | 1 | D_f | 1.6 | no (ninguna fila del dataset tiene D_f 1.6; 12.805 polígonos, 2020) |
| firms_df_Ki.csv | MIU_V12.0_FINAL/nodos/clima/firms_df_Ki.csv | 1 | D_f | 1.9690764062597914 | no (dataset Incendios 1.49; discrepancia anotada, valor sin tocar) |

Cruce total: 3 confirmados, 2 discrepancias, 18 sin CSV. Ningún valor del dataset cambió.

## Citas al MIU en Crossref

Resultado: 0 citas. Crossref devuelve 20 resultados para 'Monismo Informacional Unificado'; ninguno cita el MIU (monismo filosófico: anómalo, semántico, estético, transcendentalista). Ciclo 53.

## Papers recientes sobre D_f 2024-2026

Consultas Crossref por tema (fractal dimension + tema, desde 2024-01-01, 5 por tema). DOIs únicos: 6. Ninguno corrobora un valor D_f concreto del dataset.

| DOI | Título | ¿Corrobora algún D_f del dataset? |
|---|---|---|
| 10.33140/jsndc.04.02.07 | Fractal Dimension of (q,β) Generalized Rényian Entropy, Rq with Potential Fractal Dimension Applications to Smart Cities | No |
| 10.20944/preprints202404.0353.v1 | Fractal Dimension of Generalized Rényian Entropy With Potential Fractal Dimension Applications to Smart Cities | No |
| 10.1016/b978-0-443-44470-8.00006-9 | Fractal dimension of soil pores | No |
| 10.3390/fractalfract8100583 | Fractal Analysis and Fractal Dimension in Materials Chemistry | No |
| 10.1016/b978-0-443-44470-8.00007-0 | Fractal dimension of soil particle fragmentation | No |
| 10.1201/9781003761099-16 | Fractal Dimension Analysis of Soil for Flow Studies | No |

## Lo que NO aparece

- Crossref no devuelve papers que citen el MIU (20 resultados, 0 relevantes).
- Los 6 DOIs de D_f 2024-2026 no corroboran los valores del dataset.
- La búsqueda Zenodo por nombre de creador devuelve solo 10 de los 18 registros conocidos del autor; 0 registros nuevos.
- La búsqueda de código cubre 4 de los 232 repos (los accesibles por la App); los otros 228 no se exploraron por esta vía.
- Ningún archivo JSON con D_f en los repos buscables.

ρ(x) > 0.
