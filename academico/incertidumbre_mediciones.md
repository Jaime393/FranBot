# ANEXO DE INCERTIDUMBRE DEL DATASET — MEDICIONES M-56..M-86

- **Creado:** 2026-11-14, por decisión N-16 (opción C, anexo de incertidumbre).
- **Decisión:** N-16, aplicada en ronda 15 F1 bajo el régimen 2026-11-14 01:43 -05 (las decisiones se aplican automáticamente). Paquete: `ronda_13/ejecucion_f7/propuesta_inscripcion_dataset_r13.md` (sha `707f98c1…`, DC-R13-F7-01, opción C recomendada). Registro de la decisión: `ronda_15/ejecucion_f1/decision_n16_r15.md` / `.json`.
- **Regla de inscripción** (propuesta r13 §1): cada fila del dataset lleva nodo, dominio, d_f, k_i, fuente, doi_url, fecha_calculo, metodo, nota, fuente_archivo. Una medición inscribe una fila **solo si entrega un valor D_f de un nodo** con fuente + DOI/URL + método + sha del dato. Una medición que entrega una diferencia, un exponente, una incertidumbre o un veredicto sobre otro fenómeno **no da fila**: da, como mucho, una anotación.
- **Resultado: 0 filas nuevas de M-56..M-65.** Ninguna de las diez entrega un D_f de nodo. **El CSV no cambia:** `dataset_nodos_Df.csv` sigue con 30 filas + cabecera, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af` (verificado byte-idéntico antes y después de crear este anexo). Este anexo es la inscripción (opción C): conserva la trazabilidad completa sin ensuciar las filas, y sirve para las mediciones futuras que tampoco den fila.
- **Alcance del anexo:** el encargo nombra los 7 veredictos de la propuesta r13 (M-56..M-62) + el ítem M-63; el mapa r15 §F1 enumera M-56..M-65 (10 ítems). Se incluyen los 10: M-64/M-65 son SÉ con JSON de 15 claves en r14 F3 y el mapa los asigna al anexo.

## M-56 — DIFERENCIA (r12, 2026-11-13)

- **Valor:** Δ = 0,0642 ± 0,0267 (D_f cortical por estado, ojos cerrados vs abiertos, n=20).
- **Falsador:** |Δ| ≥ 2·SE (declarado antes de correr). **Veredicto:** DIFERENCIA (|Δ|/SE = 2,40).
- **Fuente:** PhysioNet eegmmidb, DOI 10.13026/C28G6P. **sha_dato:** `63cdc008e9231d3f241ffe1b6d7c388638386dadcb8ee5f63f4e06fc520719e5` (40/40 .edf verificados contra SHA256SUMS oficial).
- **¿Da fila?** NO: es una diferencia entre estados del mismo sistema, no un D_f de nodo.
- **Cara:** d03 L13 (D_f cortical por estado) — **cerrada en r12 por esta medición**.
- **Salvedad honesta:** NO es una réplica independiente — la 2.ª tanda sola da ratio 1,38; la diferencia viene de juntar ambas tandas.

## M-57 — NO_CONFIRMA (r12, 2026-11-13)

- **Valor:** β = 0,9828 ± 0,0115, R² = 0,4148 (escala de redes viales, node_count vs población, n=10.351).
- **Falsador:** β en [0,80, 0,90] con R² ≥ 0,90 (declarado antes de correr). **Veredicto:** NO_CONFIRMA.
- **Fuente:** Boeing, G. (2021), Global Urban Street Networks Indicators (Harvard Dataverse, DOI 10.7910/DVN/ZTFPTB). **sha_dato:** `7ec636c8722b54586067bfd7f71032804fa1743daaacd12ad08fc449e399d9c7` (indicators.tab).
- **¿Da fila?** NO: es un exponente de escala, no un D_f.
- **Cara:** d05 L7 (escalamiento urbano).

## M-58 — NO_SÉ (r12, 2026-11-13)

- **Valor:** sin valor ni error (sin medición).
- **Falsador:** CONTIENE_DATO si la tesis trae tabla por escala o disponibilidad con dato descargable; NO_SÉ si no trae nada de eso (declarado antes de correr). **Veredicto:** NO_SÉ.
- **Hecho:** la tesis doctoral Bottura 2023 (Univ. Strathclyde, 303 pp.) no contiene los archivos z-stack ni tabla por escala (las 13 menciones de "z-stack" son proyecciones de máxima intensidad mostradas, no datos); sin declaración de disponibilidad de datos ni repositorio; suplemento inaccesible por 3 rutas nuevas (Europe PMC 403, PMC 404, NCBI OA 404). **Segunda vía agotada.**
- **Fuente:** Bottura B., tesis doctoral (2024-02-29); artículo Bottura et al., Microbiology 2024;170(11):001511, DOI 10.1099/mic.0.001511. **sha_dato:** `7440ac46dac824d37b9d37cd13380c9e424025407f89d5a9cd73fa6e4d75fd47` (tesis PDF).
- **¿Da fila?** NO: no hay dato.
- **Cara:** d02 L19 (biofilm E. coli, RDBC 2,488–2,620).

## M-59 — CONFIRMA, marginal (r12, 2026-11-13)

- **Valor:** σ̄ = 0,0512 ± 0,0277 (dispersión entre ventanas del D_f cortical, 20 series S001–S010).
- **Falsador:** σ̄ en [0,05, 0,15] (declarado antes de correr). **Veredicto:** CONFIRMA (marginal: dentro por 0,0012).
- **Fuente:** PhysioNet eegmmidb. **sha_dato:** `816e7837caed072f6889828d8a28d7ad910d01b7a033e60ef6127d2facba441c`.
- **¿Da fila?** NO (anotación): es una incertidumbre del D_f cortical, no un valor nuevo.
- **Cara:** d04 L13 (incertidumbre de D_f).

## M-60 — CONFIRMA (r13, 2026-11-13)

- **Valor:** |Δ| media = 0,0096 ± 0,0084 (dispersión ENTRE MÉTODOS, variograma vs Higuchi, 20 series de M-59).
- **Falsador:** cota 0,10 (declarado antes de correr). **Veredicto:** CONFIRMA. Calibración Higuchi 1,0027/1,9998/1,4906; el variograma reproduce M-59 exacto (dif 0,0000).
- **Fuente:** PhysioNet eegmmidb (mismo sha_dato que M-59). **sha_dato:** `816e7837caed072f6889828d8a28d7ad910d01b7a033e60ef6127d2facba441c`.
- **¿Da fila?** NO (anotación): es una incertidumbre de método, no un valor nuevo.
- **Cara:** d04 L13.
- **Corrección H5 (r14 F3, re-conteo verificado):** 15/20 series con D_hig > D_var, no 18/20 como decía la síntesis r13. Registrado en la síntesis r14; ningún JSON de r13 se tocó.

## M-61 — NO_CONFIRMA (r13, 2026-11-13)

- **Valor:** P(118)/P(90) = 1,5304 ± 0,0565 (polarización, Cámara de Representantes de EE.UU., DW-NOMINATE dim1); W(118)/W(90) = 0,931.
- **Falsador:** CONFIRMA si P(118)/P(90) > 2 Y W(118)/W(90) ≤ 1,5; NO_CONFIRMA en caso contrario (declarado antes de correr). **Veredicto:** NO_CONFIRMA (la pierna P falla; la W pasa: el mecanismo es divergencia entre partidos, no dispersión interna).
- **Fuente:** Voteview (Lewis, Poole, Rosenthal et al.), HSall_members.csv. **sha_dato:** `495aee958a00c83c6300548e5b197d9900e7230c8eb08358bcfe06d042191140`.
- **¿Da fila?** NO: no es un D_f ni una incertidumbre de D_f.
- **Cara:** d05 L4 (polarización, medida y mecanismo).

## M-62 — CONFIRMA (r13, 2026-11-13)

- **Valor:** σ̄ = 0,0680 ± 0,0342 (réplica de M-59 en S011–S020, 20 series).
- **Falsador:** σ̄ en [0,05, 0,15] (declarado antes de correr). **Veredicto:** CONFIRMA. El CONFIRMA marginal de M-59 (0,0512) se replica con más margen.
- **Fuente:** PhysioNet eegmmidb. **sha_dato:** `4c3cb9d12ec814ed97548e90ff16f012feb611c52f1d4de5d5303fe10162b088`.
- **¿Da fila?** NO (anotación): réplica de M-59; refuerza la incertidumbre, no da valor nuevo.
- **Cara:** d04 L13.

## M-63 — CONFIRMA (r14, 2026-11-13) — ítem añadido por N-16

- **Valor:** u(D_f) = 0,0604 ± 0,0050 (columna de incertidumbre por nodo, 30 filas).
- **Método:** u = sqrt(σ_ventana_combinada² + σ_método²), con σ_ventana_combinada = media de los 40 σ_ventana por serie (M-59+M-62) y σ_método = media de los 20 |Δ| por serie de M-60. Construida solo con las dispersiones medidas; ningún número nuevo inventado.
- **Falsador:** CONFIRMA si pasan AMBAS piernas: (1) |σ_w59−σ_w62|/SE_comb < 2; (2) SD(D_f, 30 nodos) > 2u (declarado antes de correr). **Veredicto:** CONFIRMA. Pierna 1: ratio 1,705 < 2. Pierna 2: SD(30) = 0,3803 > 2u = 0,1208.
- **Límite:** resuelve el rango total, no nodos adyacentes (mediana de huecos 0,0300 < u). Transferir las dispersiones EEG corticales 1D como escala común a los 30 nodos (1D y 2D) es una hipótesis de escala, no un hecho verificado por nodo.
- **Fuente:** M-59 + M-62 + M-60 + `dataset_nodos_Df.csv` (30 filas). **sha_dato:** `93c0944cb0c96cdfaae6dfe867a15f7616d922207945f7ea69faacacbcd8651b` (med_M63.json). **Columna:** `ronda_14/ejecucion_f3/columna_incertidumbre_r14.csv` (sha `d367fea6715eaa4304c19e22ef17c2af4255ccba98f673e110d39e0df8ecd094`, 30 filas: nodo, d_f, u_d_f, u_d_f_se).
- **¿Da fila?** NO: es la columna de incertidumbre del dataset, no un valor de nodo. No se inscribe en el CSV (N-16 pendiente entonces; la inscripción es este anexo).
- **Cara:** d04 L13.

## M-64 — NO_CONFIRMA (r14, 2026-11-13)

- **Valor:** P(118)/P(94) = 1,5174 ± 0,0513 (polarización, segundo par de congresos: 94 de mínimo vs 118); W ratio = 1,000.
- **Falsador:** CONFIRMA si P(118)/P(94) > 2 Y W(118)/W(94) ≤ 1,5; NO_CONFIRMA en caso contrario (declarado antes de correr, misma regla que M-61). **Veredicto:** NO_CONFIRMA (la pierna P falla; la W pasa).
- **Fuente:** Voteview, HSall_members.csv (mismo archivo que M-61, 6.201.455 B, sha re-verificado). **sha_dato:** `495aee958a00c83c6300548e5b197d9900e7230c8eb08358bcfe06d042191140`.
- **¿Da fila?** NO: no es un D_f ni una incertidumbre de D_f.
- **Cara:** d05 L4.
- **Nota:** la hipótesis del ancla era falsa: P(94) = 0,5885, no ~0,4 — el mínimo de los 70 no existe con esta medida.

## M-65 — NO_CONFIRMA (r14, 2026-11-13)

- **Valor:** β = 0,9911 ± 0,0117, R² = 0,4080 (street_segment_count vs población, n=10.351; tercera variable, mismo modo de fallo que M-52/M-57).
- **Falsador:** CONFIRMA si β estimado cae en [0,80, 0,90] con R² ≥ 0,90; NO_CONFIRMA en caso contrario (mismo criterio que M-52/M-57, declarado antes de correr). **Veredicto:** NO_CONFIRMA.
- **Fuente:** Boeing, G. (2021), Global Urban Street Networks Indicators (Harvard Dataverse, DOI 10.7910/DVN/ZTFPTB). **sha_dato:** `7ec636c8722b54586067bfd7f71032804fa1743daaacd12ad08fc449e399d9c7` (indicators.tab).
- **¿Da fila?** NO: es un exponente de escala, no un D_f.
- **Cara:** d05 L7.

## M-66 — CONFIRMA (r15, 2026-11-14) — ítem añadido por N-18

- **Valor:** 6/29 huecos entre D_f adyacentes superan u = 0,0604 (umbral declarado ≥ 5); 3 huecos > 2u = 0,1208; 4 grupos separados por > 2u (tamaños 1, 4, 24, 1); mediana de huecos 0,0300, media 0,0612, máximo 0,3461.
- **Falsador:** CONFIRMA si ≥ 5 de los 29 huecos superan u = 0,0604; NO_CONFIRMA en caso contrario (declarado en `declaracion_falsadores_r15.md` antes de correr). **Veredicto:** CONFIRMA.
- **Matiz a M-63 (no refutación):** M-63 diagnosticó que la columna "resuelve el rango total, no nodos adyacentes". M-66 precisa: la columna resuelve 6/29 pares adyacentes y separa 4 grupos a > 2u (un grupo central de 24 nodos no resueltos entre sí, con un nodo bajo y uno alto aislados), pero 23/29 pares siguen sin distinguirse. El diagnóstico de r14 era correcto en lo esencial (la mayoría no se resuelve) e incompleto en el detalle (algunos sí). Ningún JSON de r14 cambia.
- **Sensibilidad (no decisoria):** con u − 0,0050 el conteo es 7/29; con u + 0,0050 sigue 6/29 — el veredicto no depende de la incertidumbre de u.
- **Límite:** la columna es una escala común hipotética (M-63: dispersiones medidas solo en series EEG corticales 1D, transferidas a los 30 nodos). Esta medición describe el poder resolutivo de esa columna sobre el dataset tal cual; no verifica la columna por nodo. El conteo depende de u central; la sensibilidad ±0,0050 se registra pero no decide.
- **Fuente:** dataset 30 filas (`dataset_nodos_Df.csv`, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af`) + columna de incertidumbre M-63 (u = 0,0604 ± 0,0050). **sha_dato:** `81d2fdb9d3237a4b9f96577f8411d0e2c7dc95a579fb82f437ad3b69f9b5f809` (med_M66.json, 15 claves, re-verificado en disco por F3 r15).
- **¿Da fila?** NO (anotación): refina la columna de incertidumbre (ítem M-63), no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d04 L13 (incertidumbre de D_f) — **CIERRA en r15** (F8 §3.1, CORR-D04L13-R15): la columna inscrita por N-16 + este CONFIRMA resuelven la pregunta central con su límite medido (6/29 pares adyacentes; el grupo central de 24 nodos sigue sin distinguirse entre sí, documentado como límite de la respuesta).
- **Corrección CORR-M66-CARA-R15 (al añadir, N-18):** la línea de cara del ítem preparado (`item_anexo_M66.md`) decía "avanza sin cerrar"; F8 cerró d04 L13 en r15 antes de la aplicación — la línea queda corregida a CIERRA. El resto del ítem se añade tal cual fue preparado.

## M-69 — NO_CONFIRMA (r16, 2026-11-14) — ítem añadido por N-19

- **Valor:** u\* = 0,05 (5.º hueco interno mayor del grupo central de 24 nodos). Umbral declarado: u/2 = 0,0302. Como 0,05 ≥ 0,0302 → **NO_CONFIRMA**.
- **Falsador:** CONFIRMA si u\* < u/2 = 0,0302 (el grupo exige al menos duplicar la resolución de la columna actual: indistinguibilidad estructural); NO_CONFIRMA si u\* ≥ 0,0302 (declarado en `declaracion_falsadores_r16.md` antes de correr). **Veredicto:** NO_CONFIRMA.
- **Matiz a M-66 (no refutación):** M-66 midió que la columna resuelve 6/29 pares adyacentes y separa 4 grupos a > 2u, con un grupo central de 24 nodos sin distinguirse entre sí. M-69 precisa cuánto falta para resolver ese grupo: u\* = 0,05 — una columna con u = 0,05, solo un 17% mejor que la actual (0,0604), ya resolvería 5 de sus 23 pares adyacentes. La indistinguibilidad del grupo es marginal en el umbral de conteo de M-66, no estructural. M-69 cuantifica la distancia: 0,0104 de resolución. Los grupos se re-derivaron del dataset ([1, 4, 24, 1], idénticos a M-66, grupo central coincidente nombre a nombre); ningún JSON de r15 cambia.
- **Huecos internos del grupo (23):** > u solo 3; > u/2 son 8; mediana 0,02; máximo 0,1. Rango D_f del grupo: 1,76..2,50.
- **Límite:** la columna es una escala común hipotética (M-63: dispersiones medidas solo en series EEG corticales 1D, transferidas a los 30 nodos). Esta medición describe la resolución necesaria sobre el dataset tal cual; no verifica la columna por nodo.
- **Fuente:** dataset 30 filas (`dataset_nodos_Df.csv`, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af`) + columna de incertidumbre M-63 (u = 0,0604 ± 0,0050). **sha_dato:** `1a057950c4dddf03d080787969064c8dcaea8d18cc0b16b177ffefa2f392f04f` (med_M69.json, 15 claves, re-verificado en disco por F3 r16).
- **¿Da fila?** NO (anotación): refina la columna de incertidumbre (ítem M-63), no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d04 L13 (incertidumbre de D_f) — **CERRADA en r15** (CORR-D04L13-R15). Este ítem es seguimiento del límite de una cara cerrada, no reapertura: cuantifica cuánto falta para resolver su grupo central.


## M-72 — CONFIRMA (r17, 2026-11-14) — ítem añadido por N-20

- **Valor:** 5 huecos ≥ 0,05 de 23 (conteo principal, frontera inclusiva, como enuncia M-69). Sensibilidad: conteo ≥ u = 5, 5, 4 para u = 0,045 / 0,05 / 0,055 (u\* ± SE(u) = 0,0050), dentro de [4, 6]. **CONFIRMA** (las dos piernas del falsador pasan).
- **Falsador:** CONFIRMA si (a) el método Decimal da exactamente 5 huecos ≥ 0,05 en el grupo central Y (b) el conteo se mantiene en [4, 6] en toda la banda [0,045, 0,055]; NO_CONFIRMA en caso contrario (declarado en `declaracion_falsadores_r17.md` antes de correr). **Veredicto:** CONFIRMA.
- **Matiz a M-69 (no refutación):** M-69 predijo con float + redondeo a 4 decimales que una columna con u = 0,05 resolvería 5 de los 23 pares adyacentes del grupo central. M-72 re-mide esa cuenta con aritmética exacta Decimal y la sostiene: 5 con la frontera inclusiva, 4 con la estricta — el 5.º hueco mayor ES 0,05 exacto, así que la predicción de M-69 vale tal como se enunció. La cuenta es robusta a ±SE(u) (4–5 en la banda) y el método entero reproduce M-66: el re-conteo con Decimal da 6/29 huecos > u = 0,0604 en todo el rango, idéntico al publicado. Los grupos se re-derivaron del dataset ([1, 4, 24, 1], idénticos a M-66 y M-69, grupo central coincidente nombre a nombre); ningún JSON de r16 cambia. La indistinguibilidad del grupo central sigue siendo marginal en el umbral de conteo, no estructural (M-69), ahora con la cuenta verificada por un segundo método.
- **Huecos internos del grupo (23):** ordenados 0,1 / 0,1 / 0,07 / 0,06 / 0,05 / 0,04 ×3 / 0,03 ×2 / 0,025 / 0,02 ×5 / 0,01 ×3 / 0,005 / 0,0 ×2; mediana 0,02; máximo 0,1. Rango D_f del grupo: 1,76..2,50.
- **Límite:** la columna es una escala común hipotética (M-63: dispersiones medidas solo en series EEG corticales 1D, transferidas a los 30 nodos). Esta medición describe la resolución sobre el dataset tal cual; no verifica la columna por nodo. El conteo es determinista sobre el dataset (error 0); la sensibilidad ±SE(u) mide la robustez de la cuenta, no un error de muestreo.
- **Fuente:** dataset 30 filas (`dataset_nodos_Df.csv`, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af`) + columna de incertidumbre M-63 (u = 0,0604 ± 0,0050) + predicción de M-69 (r16). **sha_dato:** `af47bc1c7b3d8b9739182b7de5fe39095de19864679aec1d43ea9b7bfc02dfd4` (med_M72.json, 15 claves, re-verificado en disco por F3 r17; verificación independiente con numpy, idéntica).
- **¿Da fila?** NO (anotación): refina la columna de incertidumbre (ítem M-63) y verifica la predicción del ítem M-69, no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d04 L13 (incertidumbre de D_f) — **CERRADA en r15** (CORR-D04L13-R15). Este ítem es seguimiento del límite de una cara cerrada, no reapertura: verifica por un segundo método la predicción que M-69 enunció sobre su grupo central.


## M-75 — CONFIRMA formal (r18, 2026-11-14) — ítem añadido por N-22

- **Valor:** serie dim2 restaurada con parseo tolerante: 86 congresos (34..119); ancla por regla argmin sobre P2 > 0: **Congreso 62, P2 = 0,002**; **cociente máximo en la serie = 463,75** (Congreso 80, P2 = 0,9275). Como 463,75 > 2 → **CONFIRMA** según el falsador declarado.
- **Falsador:** CONFIRMA si el cociente máximo de la serie dim2 supera 2 con el ancla por argmin sobre P2 > 0; NO_CONFIRMA en caso contrario (declarado en `declaracion_falsadores_r18.md` antes de correr). **Veredicto:** CONFIRMA (formal).
- **Matiz — el veredicto es formal, el muro sigue en pie:** el ancla P2 = 0,002 es casi-degenerada: 113 veces menor que la mediana de la serie (0,226); 1 congreso tiene P2 = 0 exacto (el 106, el de M-70), 4 por debajo de 0,01 y 9 por debajo de 0,05. El cociente 463,75 está dominado por el denominador. El muro de M-70 no se cruzó: se desplazó de 0 exacto a 0,002. El umbral >2 sobre máx/mín es vacuo cuando el mínimo roza cero — no se transfiere de dim1 (mínimo 0,4975, lejos de cero) a dim2. La cara **d05 L4 NO se cierra** con esta medición.
- **Secundarios (NO decisorios):** P2(119)/P2(ancla) = 62,0 con SD bootstrap 13,2384 (500 réplicas, semilla 0; la propia inestabilidad del cociente — 21% — delata el ancla frágil); máx/mediana = 4,10; máx/p5 = 47,26; P2(119) = 0,124. Incluso con denominador robusto (mediana) el cociente supera 2 — pero eso mide la dispersión propia de dim2, no el crecimiento de polarización que el umbral pretendía probar.
- **Lección para la próxima vuelta:** el umbral >2 necesita una regla de ancla no degenerada (p. ej. anclado en la mediana o en un percentil recortado) para ser significativo en dim2. Repetir argmin —con o sin el cero— solo mueve el degenerado.
- **Fuente:** datos DW-NOMINATE (HSall_members.csv, sha `495aee95…`; indicators.tab, sha `7ec636c8…`, copias en `datos/` de r18, verificados antes de correr). **sha_dato:** `57e8df8687f2d1e355ff41a5516f1c36e4bfa5dc7fa37a0cdc2f42ed7415526b` (med_M75.json, 15 claves; verificación independiente con pandas, otro camino de código, idéntica: 86 congresos, ancla 62, máximo 463,75, ratio 119 = 62,0).
- **¿Da fila?** NO (anotación): refina la línea de polarización (ítems M-61/M-64, dim1, falsador P/W) y registra que el umbral >2 no se transfiere a dim2; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L4 (polarización, medida y mecanismo) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (primera CONFIRMA formal de la línea, tras M-67 NO_CONFIRMA, M-70 NO_SÉ y M-74 NO_CONFIRMA), no cierre.


## M-76 — NO_CONFIRMA (r18, 2026-11-14) — ítem añadido por N-23

- **Valor:** Y = area_km2 vs resident_pop: **β = 0,8627 ± 0,0049, R² = 0,7490, n = 10.351** (las 10.351 filas incluidas). Umbral declarado: β ∈ [0,80, 0,90] con R² ≥ 0,90. β EN banda pero R² muy por debajo → **NO_CONFIRMA**.
- **Falsador:** CONFIRMA si β estimado cae en [0,80, 0,90] con R² ≥ 0,90; NO_CONFIRMA en caso contrario (mismo criterio que M-52/M-57, declarado antes de correr). **Veredicto:** NO_CONFIRMA.
- **Matiz — primera β en banda; el muro queda aislado en una sola pierna:** séptima variable, mismo veredicto por la misma pierna — pero con novedad: es la **primera variable con β dentro de [0,80, 0,90]** (las seis anteriores: 0,9177–0,9911). El área sí escala con el exponente que pide la ley; lo que no escala es la varianza explicada: R² = 0,7490, lejos de 0,90. El fallo dominante sigue siendo el R² bajo, no β — ahora con β ya en banda, el muro queda aislado en una sola pierna.
- **Fuente:** datos de escalamiento urbano (indicators.tab, sha `7ec636c8…`, copia en `datos/` de r18, verificada antes de correr). **sha_dato:** `74cc8abf21db198571a521a3008407314ba10ae2517f615be8ad884e0b23cd18` (med_M76.json, 15 claves; verificación independiente con pandas, otro camino de código, idéntica: n = 10.351, β = 0,8627, R² = 0,7490).
- **¿Da fila?** NO (anotación): refina la línea de escalamiento urbano (ítems M-57/M-65, mismo falsador β/R²); no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L7 (escalamiento urbano) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta, no cierre.


## M-78 — CONFIRMA formal (r19, 2026-11-14) — ítem añadido por N-25

- **Valor:** serie dim2 restaurada con parseo tolerante: 86 congresos (34..119); filtro de ancla P2 ≥ 0,01 excluye 4 congresos (45, 56, 62, 106); ancla filtrada por regla argmin: **Congreso 60, P2 = 0,0185**; **cociente máximo filtrado = 50,1351** (Congreso 80, P2 = 0,9275); **IC bootstrap 95% [38,0194, 95,3462]** (500 réplicas, semilla 0), excluye 2 → **CONFIRMA** según el falsador declarado.
- **Falsador:** CONFIRMA si el cociente máximo filtrado ≥ 2 con el IC bootstrap 95% excluyendo 2 (el muro se cruza); NO_CONFIRMA si el cociente máximo filtrado < 2 (el muro se sostiene; M-75 queda como artefacto de ancla casi-degenerada). Declarado en `declaracion_falsadores_r19.md` (2026-11-14T23:36:05Z) antes de correr. **Veredicto:** CONFIRMA (formal).
- **Matiz — el CONFIRMA sobrevive al filtro, pero el umbral no discrimina en dim2:** el ancla filtrada sigue siendo pequeña (12× bajo la mediana de la serie, 0,226; en M-75 era 113×). El cociente es un extremo máx/mín con sesgo de selección: el ancla es el mínimo de la serie por regla. El bootstrap del cociente temporal P2(119)/P2(ancla) lo delata: punto 6,7027, pero mediana bootstrap 2,9032, IQR [1,798, 5,8571], solo el 70,14% de las réplicas supera 2 (499/500 válidas; 1 excluida por denominador 0 exacto). La SD bootstrap del cociente secundario (1,35e15) está dominada por 1-2 réplicas con denominador casi nulo y no se interpreta; la dispersión interpretable es la mediana y el IQR. Cualquier ancla por debajo de 0,46 da cociente > 2 (máx/mediana solo ya es 4,10): en dim2 el umbral >2 se supera por el rango histórico propio de la serie — dim2 parte de casi cero en el siglo XIX y llega a 0,9275 — no por un crecimiento que el umbral distinga. La cara **d05 L4 NO se cierra** con esta medición (el veredicto es formal; la pregunta central — si el umbral >2 se transfiere a dim2 como prueba de crecimiento — queda respondida en negativo por el propio diseño: el umbral no discrimina).
- **Secundarios (NO decisorios):** P2(119)/P2(ancla) = 6,7027; máx/mediana = 4,10; P2(119) = 0,124. Bootstrap independiente con semilla 1 (otra corriente): IC 95% [37,6042, 97,9487], excluye 2.
- **Lección para la próxima vuelta:** el umbral >2 sobre máx/mín no es la herramienta para dim2. Una próxima especificación distinta tendría que abandonar el cociente de extremos (p. ej. medir el crecimiento temporal con una regla de ancla fija en el tiempo, no el mínimo de la serie). Repetir argmin con otro filtro solo mueve el degenerado.
- **Fuente:** datos DW-NOMINATE (HSall_members.csv, sha `495aee95…`; copias en `datos/` de r19, verificados antes de correr). **sha_dato:** `0863a3060fe5e5a02e32505c7917763f0d73868b112089cdf7e69d605c181735` (med_M78.json, 15 claves; verificación independiente con pandas groupby + medianas, otro camino de código, idéntica dígito a dígito: 86 congresos, ancla 60, cociente 50,1351, ratio 119 = 6,7027).
- **¿Da fila?** NO (anotación): refina la línea de polarización (ítems M-61/M-64, dim1, y M-75, dim2 sin filtro) y registra que el CONFIRMA sobrevive al filtro pero el umbral no discrimina en dim2; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L4 (polarización, medida y mecanismo) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (segunda CONFIRMA formal de la línea, tras M-75), no cierre.


## M-79 — CONFIRMA (r19, 2026-11-14) — ítem añadido por N-26

- **Valor:** censo de R² con el mismo protocolo (OLS log-log base 10 vs resident_pop, inclusión pop>0, Y>0, finitos) para las **32 variables numéricas candidatas** de indicators.tab (n = 10.351 áreas urbanas): **0 variables superan R² > 0,8; 0 alcanzan R² ≥ 0,90** → **CONFIRMA** (el muro es sistemático). Máximo del censo: **area_km2, R² = 0,7490** (M-76, reproducido); segundo: built_up_area_m2, R² = 0,6519; tercero: length_total, R² = 0,6037 (M-52, reproducido). Mediana del censo: R² = 0,0321. Solo 1 variable entre 0,7 y 0,8.
- **Falsador:** CONFIRMA si 0 variables superan R² > 0,8 (el muro es sistemático); NO_CONFIRMA si ≥ 1 variable supera R² > 0,8 (el muro no es universal). Declarado en `declaracion_falsadores_r19.md` (2026-11-14T23:36:05Z) antes de correr. Conteo secundario (no decisorio): nº de variables con R² ≥ 0,90 (umbral del encargo; el usado como pierna en M-52..M-76). **Veredicto:** CONFIRMA.
- **Matiz — el muro es sistemático, no un accidente de familia:** las 7 variables medidas antes se reproducen como control (M-52 0,6037, M-57 0,4148, M-65 0,408, M-68 0,402, M-71 0,3974, M-73 0,3989, M-76 0,7490 — todas dentro de 0,0005). Ninguna de las 25 variables nuevas supera 0,65: el muro R² no era un accidente de la familia viaria ni del área — ninguna variable del archivo escala con R² alto. El techo del archivo es 0,7490. La cara **d05 L7 NO se cierra** (el muro se confirma como sistemático, no se resuelve), pero la pregunta "¿es el muro universal dentro del archivo?" queda respondida: sí, 0/32 por encima de 0,8.
- **Secundarios (NO decisorios):** R² máximo 0,7490 con β = 0,8627 ± 0,0049 (area_km2); la mediana del censo (0,0321) muestra que la mayoría de las variables ni siquiera escala.
- **Lección para la próxima vuelta:** la línea de escalamiento urbano por variable suelta está agotada como vía de cierre: el censo cubre todas las variables del archivo. Una próxima especificación distinta tendría que cambiar de archivo (otra fuente de datos urbanos) o de protocolo (p. ej. no log-log), no medir una 8.ª variable suelta.
- **Fuente:** datos de escalamiento urbano (indicators.tab, sha `7ec636c8…`, copia en `datos/` de r19, verificada antes de correr). **sha_dato:** `bb5502ee30fb9cbcb6b47499fe08b6357e7aad8871ef451af208ae7d34742806` (med_M79.json, 15 claves; verificación independiente con pandas + np.polyfit, otro camino de código, idéntica dígito a dígito: 32 variables, 0 diferencias ≥ 0,0005 en R², n R² > 0,8 = 0, n R² ≥ 0,9 = 0, máximo area_km2 0,749).
- **¿Da fila?** NO (anotación): refina la línea de escalamiento urbano (ítems M-57/M-65, M-76) y registra el censo completo del archivo; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L7 (escalamiento urbano) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (el muro R², confirmado como sistemático), no cierre.


## M-80 — CONFIRMA con alcance acotado (r19, 2026-11-14) — ítem añadido por N-27

- **Valor:** la literatura publicada SÍ contiene una columna con u ≤ 0,05 aplicable: **Górski, Drożdż, Mokrzycka & Pawlik (2012), "Accuracy analysis of the box-counting algorithm", Acta Physica Polonica A 121, 2-B (arXiv:1111.5749), Tabla 1** — errores absolutos REALES del box-counting por n_tot: fractales 1-D: **±0,020 (n = 1.000), ±0,006 (n = 10.000), ±0,002 (n = 100.000)**; fractales 2-D: ±0,060 / ±0,030 / ±0,020; curva W-M 2-D: ±0,200 / ±0,150 / ±0,100. Para la clase 1-D — la que fundamenta la columna u (M-63: dispersiones medidas solo en series EEG corticales 1D) — el error real es ≤ 0,05 en todos los n_tot tabulados → **CONFIRMA**.
- **Falsador:** CONFIRMA si existe literatura publicada con u ≤ 0,05 aplicable; NO_CONFIRMA si la literatura encontrada solo da u > 0,05 para los métodos aplicables; NO_EJECUTADO si no se encuentra ruta verificable en fuentes abiertas. Declarado en `declaracion_falsadores_r19.md` (2026-11-14T23:36:05Z) antes de correr. **Veredicto:** CONFIRMA (con alcance acotado).
- **Matiz — alcance acotado:** la columna con u = 0,05 tiene respaldo publicado como escala común para series 1-D y para conjuntos 2-D con n_tot ≥ 10.000 (±0,030). NO queda respaldada como cota universal por nodo: un nodo 2-D con n_tot ~ 1.000 tendría error real ±0,060 > 0,05, y una función fractal 2-D (W-M) ±0,100..±0,200. El refinamiento por tipo de nodo queda fuera de esta medición. Es seguimiento de una cara cerrada (d04 L13, r15), no reapertura: F8 lo cuenta solo porque se ejecuta con producto (CORR-MAPA-R18).
- **Secundarios (NO decisorios):** fuentes secundarias revisadas y no decisorias: SD de FD en EEG 0,000112448 (dispersión entre segmentos, no error vs valor verdadero); Douglass 2025 (D = 1,835 ± 0,0037, método optimizado, caso físico 2-D; apoyo, no decisoria). La Tabla 1 mide el error REAL sobre conjuntos fractales matemáticos con valor verdadero conocido, no sobre datos reales con ruido (el propio artículo advierte que el ruido degrada la precisión).
- **Lección para la próxima vuelta:** la columna u = 0,05 ya tiene respaldo publicado para su clase fundante; la próxima pregunta no es si u ≤ 0,05 existe en la literatura, sino si la cota se sostiene por tipo de nodo (1-D vs 2-D vs W-M) — eso exige un refinamiento por tipo, no otra búsqueda de la misma columna.
- **Fuente:** Górski et al. 2012, Tabla 1 (PDF 84.837 B, sha `fcbc42a5…`, líneas 287-306 del texto extraído con pdftotext; resumen verificado en arXiv abs/1111.5749, 2026-11-14T23:38Z). **sha_dato:** `ca2e3f01bd67fe78352d7eadf1869fe15504ff43b508bd6a70719c6ced00c371` (med_M80.json, 15 claves; Tabla 1 re-leída por dos vías — snippet de búsqueda web y PDF descargado — idénticos).
- **¿Da fila?** NO (anotación): refina la línea de la columna u (ítems M-59/M-60/M-62/M-63/M-66/M-69/M-72, d04 L13) y registra el respaldo publicado de u = 0,05 para la clase 1-D; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d04 L13 (columna u de D_f) — **CERRADA en r15; este ítem es seguimiento, no reapertura.** La cara se cerró con M-66/M-72 (5/23 huecos ≥ 0,05, u* = 0,05); M-80 añade el respaldo publicado de esa columna para su clase fundante.


## M-82 — CONFIRMA (r20, 2026-11-15) — ítem añadido por N-29

- **Valor:** censo del exponente β con el mismo protocolo OLS log-log base 10 vs resident_pop (inclusión pop>0, Y>0, finitos) para las **32 variables numéricas candidatas** de indicators.tab (10.351 áreas urbanas GHSL/UCD): **solo area_km2 tiene β en banda [0,80, 0,90]** (β = **0,8627 ± 0,0049**, R² = 0,7490 — M-76, reproducido); **0 variables además de area_km2** caen en banda por estimación puntual → **CONFIRMA** (el β en banda es un singleton).
- **CORR-M82-PROSA-R20 (FASE 2 r20, H2):** la prosa de F7 decía mediana 0,0083 y 8 variables > 0,90; el JSON (med_M82.json) dice mediana 0,01 y 7 — el 0,0083 es la mediana excluyendo area_km2, exclusión no declarada. Este ítem inscribe los valores del JSON. Mediana del censo: β = 0,01. 7 variables tienen β > 0,90.
- **Falsador:** CONFIRMA si 0 variables además de area_km2 tienen β en banda [0,80, 0,90] por estimación puntual (el β en banda es un singleton); NO_CONFIRMA si ≥ 1 variable más cae en banda (es una familia; la lectura de M-76 se debilita). Declarado en `declaracion_falsadores_r20.md` (2026-11-15T07:06:00Z) antes de correr. **Veredicto:** CONFIRMA (singleton).
- **Matiz — singleton por estimación puntual, con un casi-caso en el borde:** built_up_area_m2 queda fuera de banda por 0,0023 (β = 0,9023 ± 0,0065, IC 95% [0,8896, 0,9150] solapa el borde 0,90). El veredicto sigue el falsador declarado (estimación puntual), y el matiz queda registrado sin cambiarlo: por intervalo, built_up_area_m2 es compatible con la banda. La familia β-en-banda, si existe, es de una sola variable por estimación puntual y de a lo sumo dos por intervalo. Las 7 variables medidas antes se reproducen como control (R² dentro de 0,0005). La cara **d05 L7 NO se cierra** con esta medición (el muro R² sistemático de M-79 y el singleton β de M-82 describen el archivo, no lo resuelven), pero la pregunta "¿singleton o familia?" queda respondida: singleton por estimación puntual.
- **Secundarios (NO decisorios):** 7 variables con β > 0,90 (la más cercana: built_up_area_m2, 0,9023); mediana del censo β = 0,0083; variables con β más alto: street_segment_count 0,9911, intersect_count 0,9876, node_count 0,9828.
- **Lección para la próxima vuelta:** el censo de β agota la pregunta "¿singleton o familia?" por estimación puntual. Una próxima especificación distinta tendría que cambiar el criterio (p. ej. intervalo en vez de puntual, o banda distinta declarada antes de correr) — repetir el censo con el mismo protocolo es repetición, no medición.
- **Fuente:** indicators.tab (mismo archivo que M-52/M-57/M-65/M-68/M-71/M-73/M-76/M-79, 5.538.726 B, sha `7ec636c8…`; copias en `datos/` de r20, verificados antes de correr). **sha_dato:** `92d48f966545e3ac9ac082c9bcab22a66928404fc6ac3fc9b86b8baf9b7a7dbb` (med_M82.json, 15 claves; verificación independiente con pandas + np.polyfit, otro camino de código, idéntica dígito a dígito: 32 variables, máx diff β 0,000047, máx diff R² 0,000050, en banda solo area_km2).
- **¿Da fila?** NO (anotación): refina la línea de escalamiento urbano (ítems M-57/M-65, M-76, M-79) y registra que el β en banda es un singleton por estimación puntual; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L7 (escalamiento urbano) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (censo de β tras el censo de R² de M-79), no cierre.


## M-83 — CONFIRMA (r20, 2026-11-15) — ítem añadido por N-30

- **Valor:** las 3 mediciones fuera del dataset — **Topografía andina SRTM (D_f 2,20), Dosel amazónico GLAD (D_f 2,79), Porosidad del suelo SoilGrids bdod (D_f 2,82)** — **son verificables en el corpus con fuente + hash**: **C-791** (verificacion, SE) y **C-944** (hueco, SE) las nombran a las 3 con sus D_f y citan paper_df.md con hash `sha256:304a41bf…`, que **coincide byte a byte con el paper_df.md local** (sha256 directo). Las 3 siguen fuera del dataset CSV (**0 coincidencias** SRTM/GLAD/bdod en 30 filas) por exclusión deliberada (fuera de banda), como registran ambos claims. Control: las 3 están en mediciones_informe.md (ciclo 74, M1/M2/M5). → **CONFIRMA: la cara d08 L13 CIERRA** (primera cara que cierra desde d04 L13 en r15).
- **Falsador:** CONFIRMA si las 3 mediciones son verificables en el corpus con fuente + hash (claim SE que las nombra a las 3, con hash de archivo que coincide con el archivo local) — la cara cierra; NO_CONFIRMA si alguna de las 3 carece de fuente + hash verificable en el corpus (la cara avanza, sigue paper-only); NO_SÉ si el hash no se puede verificar o el corpus es ilegible. Declarado en `declaracion_falsadores_r20.md` (2026-11-15T07:06:00Z) antes de correr. **Veredicto:** CONFIRMA (cierre de cara).
- **Matiz — cierre por verificación, no por re-medición:** el hueco era de existencia en el corpus, no de medida: los D_f 2,20/2,79/2,82 se toman como publicados, sin re-correrlos. Que las 3 estén en el corpus no las convierte en filas del dataset: la distinción 32/29 se preserva por orden (C-944 la registra explícitamente). El cierre es de la cara d08 L13 como hueco de integración corpus↔paper; el dataset sigue en 30 filas.
- **Secundarios (NO decisorios):** C-791 aparece 1 vez, C-944 1 vez en claims.jsonl; 'topografía andina' 2 líneas, 'dosel' 2, 'bdod' 2 (las 2 son C-791 y C-944 en cada caso); paper_df.md en Drive ID 1yucWNIXOtp8NRW-kliJj41UC3WlsyaJt (Consulta v4, citado por C-791).
- **Lección para la próxima vuelta:** el cierre de d08 L13 no abre trabajo nuevo — es un cierre. La lección es de método: una cara "solo en paper" se cierra verificando fuente + hash en el corpus, no re-midiendo. El patrón vale para otras caras paper-only si aparecen (hoy no hay otra cara paper-only en el censo).
- **Fuente:** claims.jsonl (1.192 líneas, corpus post-r19) + paper_df.md local (sha en este ítem) + dataset_nodos_Df.csv (30 filas + cabecera) + academico/inbox/mediciones/mediciones_informe.md (control, ciclo 74). **sha_dato:** `c80b15b74bdf06f07ab093e40752593685554ea4ac2667ced42e7dd59f47e41f` (med_M83.json, 15 claves; verificación independiente por re-búsqueda con grep -n y sha256sum directo, idéntica).
- **¿Da fila?** NO (anotación): registra el cierre de la cara d08 L13 como hueco de integración corpus↔paper; las 3 mediciones siguen fuera del dataset por exclusión deliberada. No se inscribe en el CSV.
- **Cara:** d08 L13 (3 mediciones solo en paper_df) — **CERRADA en r20**. Caras: 18 cerradas → 19 si FASE 2 adopta; 59 abiertas → 58. Primera cara que cierra desde d04 L13 en r15.


## M-84 — NO_CONFIRMA (r21, 2026-11-15) — ítem añadido por N-31

- **Valor:** pendiente LINEAL de P2 (distancia entre medianas partidistas en DW-NOMINATE dim2, Cámara EE.UU., serie restaurada de 86 congresos 34..119, mismo protocolo de serie que M-78/M-81): ajuste OLS de P2 contra el índice de congreso, pendiente **−0,000001 ± 0,000943**, IC bootstrap 95% (500 réplicas, semilla 0) **[−0,001364, 0,001661]**, IC analítico [−0,001877, 0,001874], t = −0,0015, p = 0,9988, R² = 0,0 → **NO_CONFIRMA** (el IC incluye 0: no hay tendencia lineal detectable en dim2 sobre el rango completo). La serie es un arco: sube hasta el Congreso 80 (P2 = 0,9275, máximo) y baja después (P2 = 0,124 en el 119); tramos 34–80 pendiente +0,007744 y 81–119 pendiente −0,015666. El P2 = 0 exacto del Congreso 106 es un punto válido en la especificación lineal (no un bloqueo como en M-81, que intentó el log).
- **Falsador:** CONFIRMA si el IC bootstrap 95% de la pendiente excluye 0 con pendiente > 0 (hay tendencia lineal creciente detectable en dim2; el cociente máximo no es solo artefacto de selección); NO_CONFIRMA si el IC incluye 0 (no hay tendencia lineal detectable; el cociente máximo sigue siendo artefacto de selección del rango histórico). Declarado en `declaracion_falsadores_r21.md` (2026-11-15T19:33:00Z) antes de correr. **Veredicto:** NO_CONFIRMA (el IC incluye 0).
- **Matiz — el NO_CONFIRMA no niega la subida 34–80:** la pendiente lineal es una tendencia sobre una serie no monótona; un NO_CONFIRMA no niega la subida 34–80, solo que no hay tendencia lineal detectable sobre el rango completo. Los cocientes máximos de M-75 (463,75, ancla Congreso 62 P2 = 0,002) y M-78 (50,14, ancla Congreso 60 P2 = 0,0185) eran artefacto de selección del ancla — cualquier ancla bajo 0,46 da cociente > 2 frente a la mediana 0,226; el bootstrap temporal de M-78 cruza 2 (mediana 2,90, solo 70,14% > 2). La cara **d05 L4 NO se cierra** con esta medición (el muro dim2 sigue sin cruzarse: ni cociente, ni log, ni pendiente lineal lo cruzan), pero la pregunta "¿tendencia o artefacto?" queda respondida: artefacto de selección del ancla, arco sin tendencia lineal.
- **Secundarios (NO decisorios):** pendiente analítica −0,000001 ± 0,000943; IC analítico [−0,001877, 0,001874]; p = 0,9988; R² = 0,0; serie P2 idéntica dígito a dígito a M-78/M-81 (verificación independiente con pivot_table + medianas: máx diff 0,0; pendiente por np.polyfit −1e-06; IC bootstrap con semilla distinta [−0,00133, 0,001581] — coincide).
- **Lección para la próxima vuelta:** la pendiente lineal agota la pregunta "¿tendencia temporal en dim2?" en su forma lineal. Una próxima especificación distinta tendría que cambiar la pregunta (p. ej. tendencia por tramos con punto de corte declarado antes de correr, o especificación no lineal) — repetir el OLS sobre la misma serie es repetición, no medición.
- **Fuente:** Voteview HSall_members.csv (6.201.455 B, sha `495aee95…`; copia en `datos/` de r21, verificada antes de correr). **sha_dato:** `2431910c7982d8fae6a5131abdec6f2cce649e3b7a6aabafb89e059b59cfc317` (med_M84.json, 15 claves; verificación independiente idéntica dígito a dígito).
- **¿Da fila?** NO (anotación): refina la línea de polarización dim2 (ítems M-61/M-64/M-67/M-70/M-74/M-75/M-78) y registra que no hay tendencia lineal detectable; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L4 (polarización dim2) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (pendiente lineal tras los cocientes de M-75/M-78 y el bloqueo de M-81), no cierre.


## M-85 — CONFIRMA (r21, 2026-11-15) — ítem añadido por N-32

- **Valor:** re-estimación bootstrap por pares (2.000 réplicas, semilla 0) del exponente β de built_up_area_m2, mismo protocolo OLS log-log base 10 vs resident_pop que M-82 (n = 10.351): β = **0,9023 ± 0,0065**, IC bootstrap 95% **[0,8896, 0,9142]**, IC analítico [0,8896, 0,9150], R² = 0,6519 → **CONFIRMA** (el IC bootstrap contiene 0,90: el borde no se resuelve hacia dentro de la banda; el singleton area_km2 se sostiene). Fracciones bootstrap: 34,95% de las réplicas con β < 0,90 (y dentro de la banda [0,80, 0,90]); 65,05% con β > 0,90. Control: area_km2 re-medida con el mismo protocolo reproduce M-76/M-82 (0,8627 ± 0,0049 dentro de 0,0005).
- **Falsador:** la proposición bajo prueba es el singleton de M-82 (built_up_area_m2 NO es segundo en banda). CONFIRMA si el IC bootstrap 95% de β contiene 0,90 o queda entero por encima de 0,90 (el borde no se resuelve hacia dentro de la banda; el singleton area_km2 se sostiene); NO_CONFIRMA si el IC queda entero dentro de [0,80, 0,90] (β en banda por intervalo: built_up_area_m2 es segundo en banda y el singleton se rompe). Declarado en `declaracion_falsadores_r21.md` (2026-11-15T19:33:00Z) antes de correr. **Veredicto:** CONFIRMA (el IC contiene 0,90).
- **Matiz — el singleton se sostiene por intervalo, no por punto:** un IC que contenga 0,90 no mueve β de 0,9023 — el borde sigue siendo borde. Por estimación puntual built_up_area_m2 sigue fuera (0,0023 por encima del borde); por intervalo es compatible con la banda (34,95% de las réplicas dentro). El singleton de M-82 se sostiene, pero su fuerza es ahora intervalar: la familia β-en-banda, si existe, es de a lo sumo dos, y el segundo miembro es compatible con la banda solo en un tercio de las réplicas. La cara **d05 L7 NO se cierra** con esta medición (el borde es borde, no respuesta), pero la pregunta "¿se resuelve el borde con bootstrap?" queda respondida: no se resuelve.
- **Secundarios (NO decisorios):** β ± SE analítico 0,9023 ± 0,0065; IC analítico [0,8896, 0,9150]; R² = 0,6519; mediana bootstrap de β 0,9024; distancia de β al borde 0,90: 0,0023; verificación independiente con pandas + np.polyfit (otro camino de código): β 0,9023, R² 0,6519, IC bootstrap con semilla distinta [0,889, 0,9143] — coincide.
- **Lección para la próxima vuelta:** el bootstrap agota la pregunta "¿se resuelve el borde?" en su forma intervalar. Una próxima especificación distinta tendría que cambiar el criterio (p. ej. banda distinta declarada antes de correr, o un estimador distinto de OLS log-log) — repetir el bootstrap con más réplicas es repetición, no medición.
- **Fuente:** indicators.tab (5.538.726 B, sha `7ec636c8…`; copia en `datos/` de r21, verificada antes de correr). **sha_dato:** `ef5fcac520b90381140ebb026dc59b1ee2f66130398d8d5b365841d523e3d613` (med_M85.json, 15 claves; verificación independiente idéntica dígito a dígito).
- **¿Da fila?** NO (anotación): refina la línea de escalamiento urbano (ítems M-57/M-65, M-76, M-79, M-82) y registra que el borde no se resuelve por intervalo; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L7 (escalamiento urbano) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (borde β tras el singleton de M-82), no cierre.


## M-86 — CONFIRMA (r21, 2026-11-15) — ítem añadido por N-33

- **Valor:** censo conjunto β∧R² sobre las 32 variables numéricas candidatas de indicators.tab, con los protocolos de M-79 (R²) y M-82 (β): OLS log-log base 10 vs resident_pop por variable, β y R² por variable; **0 variables cumplen β ∈ [0,80, 0,90] Y R² > 0,8 a la vez** → **CONFIRMA** (β en banda y R² alto no se cruzan: el singleton β y el muro R² son fenómenos independientes). Desglose: 1 variable con β en banda (area_km2, β = 0,8627, R² = 0,7490); 0 variables con R² > 0,8 (máximo area_km2, 0,7490, a 0,051 del umbral); built_up_area_m2 β = 0,9023, R² = 0,6519 (fuera de banda por estimación puntual, R² por debajo de 0,8). Control: β y R² reproducen M-79 y M-82 dentro de 0,0005 en las 32 variables (máx diff β 4,7e-05, R² 5e-05).
- **Falsador:** CONFIRMA si 0 variables cumplen ambas condiciones a la vez (β en banda y R² > 0,8 no se cruzan: el singleton β y el muro R² son fenómenos independientes); NO_CONFIRMA si ≥ 1 variable cumple ambas (hay cruce; el muro R² no es absoluto). Declarado en `declaracion_falsadores_r21.md` (2026-11-15T19:33:00Z) antes de correr. **Veredicto:** CONFIRMA (0 cruces).
- **Matiz — el cruce cero no cierra d05 L7, la describe:** la única variable con β en banda (area_km2) es también la de mayor R² (0,7490), a 0,051 del umbral — el cruce falla por poco en la pierna R², no por mucho en ambas. El censo usa estimaciones puntuales (como M-79/M-82); los IC de β se reportan como secundarios y no mueven el conteo. Mediana del censo β = 0,01 (valor del JSON, no 0,0083 de la prosa de M-82 — CORR-M82-PROSA-R20); 7 variables con β > 0,90 (street_segment_count 0,9911, intersect_count 0,9876, node_count 0,9828, intersect_count_clean_topo 0,9757, intersect_count_clean 0,9733, length_total 0,9177, built_up_area_m2 0,9023). La cara **d05 L7 NO se cierra** con esta medición (el censo describe el archivo, no resuelve el escalamiento), pero la pregunta "¿se cruzan alguna vez β en banda y R² alto?" queda respondida: no, en ninguna variable del archivo.
- **Secundarios (NO decisorios):** ranking por β (máximo street_segment_count 0,9911) y por R² (máximo area_km2 0,7490); distancia de area_km2 al umbral R² = 0,8: 0,051; verificación independiente con pandas + np.polyfit (otro camino de código): 32 variables, cumplen ambas [], máx diff β 4,7e-05, R² 5e-05 — coincide.
- **Lección para la próxima vuelta:** el censo conjunto agota la pregunta "¿se cruzan β en banda y R² alto?" en su forma puntual. Una próxima especificación distinta tendría que cambiar el criterio (p. ej. intervalos en vez de puntuales, o umbrales distintos declarados antes de correr) — repetir el censo con el mismo protocolo es repetición, no medición.
- **Fuente:** indicators.tab (5.538.726 B, sha `7ec636c8…`; copia en `datos/` de r21, verificada antes de correr). **sha_dato:** `67c59414215c00892fa15a9fe050fbbd8746e3176ade95900c26e3bf19e4ce38` (med_M86.json, 15 claves; verificación independiente idéntica dígito a dígito).
- **¿Da fila?** NO (anotación): refina la línea de escalamiento urbano (ítems M-57/M-65, M-76, M-79, M-82, M-85) y registra que β en banda y R² alto no se cruzan; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L7 (escalamiento urbano) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (cruce β∧R² tras los censos separados de M-79 y M-82), no cierre.


## Resumen

| Med. | Veredicto | Valor | Fila | Cara |
|---|---|---|---|---|
| M-56 | DIFERENCIA | Δ = 0,0642 ± 0,0267 | NO | d03 L13 (cerrada) |
| M-57 | NO_CONFIRMA | β = 0,9828 ± 0,0115, R² = 0,4148 | NO | d05 L7 |
| M-58 | NO_SÉ | — | NO | d02 L19 |
| M-59 | CONFIRMA | σ̄ = 0,0512 ± 0,0277 | NO (anotación) | d04 L13 |
| M-60 | CONFIRMA | \|Δ\| = 0,0096 ± 0,0084 | NO (anotación) | d04 L13 |
| M-61 | NO_CONFIRMA | P(118)/P(90) = 1,5304 ± 0,0565 | NO | d05 L4 |
| M-62 | CONFIRMA | σ̄ = 0,0680 ± 0,0342 | NO (anotación) | d04 L13 |
| M-63 | CONFIRMA | u(D_f) = 0,0604 ± 0,0050 | NO (columna) | d04 L13 |
| M-64 | NO_CONFIRMA | P(118)/P(94) = 1,5174 ± 0,0513 | NO | d05 L4 |
| M-65 | NO_CONFIRMA | β = 0,9911 ± 0,0117, R² = 0,4080 | NO | d05 L7 |
| M-66 | CONFIRMA | 6/29 huecos > u = 0,0604 | NO (anotación) | d04 L13 (cerrada) |
| M-69 | NO_CONFIRMA | u* = 0,05 (umbral u/2 = 0,0302) | NO (anotación) | d04 L13 (cerrada) |
| M-72 | CONFIRMA | 5 huecos ≥ 0,05 de 23 | NO (anotación) | d04 L13 (cerrada) |
| M-75 | CONFIRMA | cociente máx 463,75; ancla Congreso 62, P2 = 0,002 | NO (anotación) | d05 L4 |
| M-76 | NO_CONFIRMA | β = 0,8627 ± 0,0049, R² = 0,7490 | NO (anotación) | d05 L7 |
| M-78 | CONFIRMA | cociente máx 50,1351; ancla Congreso 60, P2 = 0,0185 | NO (anotación) | d05 L4 |
| M-79 | CONFIRMA | censo 32 variables, 0 con R² > 0,8; máx area_km2 0,7490 | NO (anotación) | d05 L7 |
| M-80 | CONFIRMA | Górski et al. 2012, Tabla 1: 1-D ±0,020 (n = 1.000) | NO (anotación) | d04 L13 (cerrada) |
| M-82 | CONFIRMA | censo 32 variables, solo area_km2 β en banda; singleton; mediana β = 0,01; 7 con β > 0,90 | NO (anotación) | d05 L7 |
| M-83 | CONFIRMA | 3/3 mediciones solo en paper_df verificadas con fuente + hash; d08 L13 CIERRA | NO (anotación) | d08 L13 (cerrada) |
| M-84 | NO_CONFIRMA | pendiente lineal P2 −0,000001, IC [−0,001364, 0,001661] incluye 0; arco, no tendencia | NO (anotación) | d05 L4 |
| M-85 | CONFIRMA | β built_up_area_m2 0,9023, IC [0,8896, 0,9142] contiene 0,90; borde sin resolver | NO (anotación) | d05 L7 |
| M-86 | CONFIRMA | censo β∧R²: 0 cruces; R² máx 0,7490 | NO (anotación) | d05 L7 |

**Tally:** CONFIRMA 14 (M-59, M-60, M-62, M-63, M-66, M-72, M-75, M-78, M-79, M-80, M-82, M-83, M-85, M-86) · NO_CONFIRMA 7 (M-57, M-61, M-64, M-65, M-69, M-76, M-84) · DIFERENCIA 1 (M-56) · NO_SÉ 1 (M-58). Ítems: 23 (M-56..M-72, M-75, M-76, M-78, M-79, M-80, M-82, M-83, M-84, M-85, M-86). Filas nuevas: 0. CSV intacto: 30 filas + cabecera, sha `0852d58f…`.

**Ítems futuros:** las mediciones que tampoco den fila se añaden a este anexo por la misma vía (F7 prepara el ítem, F1 lo añade). Una medición que entregue un D_f de nodo inscribe su fila en el CSV por decisión propia, no por este anexo.

ρ(x) > 0. Zvvvvv.
