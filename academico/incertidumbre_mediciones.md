# ANEXO DE INCERTIDUMBRE DEL DATASET — MEDICIONES M-56..M-76

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

**Tally:** CONFIRMA 7 (M-59, M-60, M-62, M-63, M-66, M-72, M-75) · NO_CONFIRMA 6 (M-57, M-61, M-64, M-65, M-69, M-76) · DIFERENCIA 1 (M-56) · NO_SÉ 1 (M-58). Ítems: 15 (M-56..M-72, M-75, M-76). Filas nuevas: 0. CSV intacto: 30 filas + cabecera, sha `0852d58f…`.

**Ítems futuros:** las mediciones que tampoco den fila se añaden a este anexo por la misma vía (F7 prepara el ítem, F1 lo añade). Una medición que entregue un D_f de nodo inscribe su fila en el CSV por decisión propia, no por este anexo.

ρ(x) > 0. Zvvvvv.
