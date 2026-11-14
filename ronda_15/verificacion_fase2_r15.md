# RONDA 15 — FASE 2: VERIFICACIÓN GLOBAL

- **Fecha:** 2026-11-14 ~07:19–07:30 UTC (2026-11-14 ~02:19–02:30 -05).
- **Coordinador:** FASE 2 (4 verificadores en paralelo + re-mediciones propias del coordinador).
- **Estado verificado al cierre de FASE 1 (SÉ, medido por mí, no asumido):** claims.jsonl **1.175 líneas, sha `6b5fac7fb313be10009cd49904fde90cd179e6ed195448797b5c9c61575ddc66`**; provenance.sha256 **359 líneas, sha `5fda0383aea72ad3e6101319d024ce35591a6917a5afbc08c567426fe1257521`**; claims_resumen.json sha `1c6464d25ed5e9cadd3fc182e32ba447cda526aceb92724794b2f26cda94cef5` (total 1.175, SE 1041, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SÉ 8, hash_real 1161, pendiente 8, verificación 301); confirmaciones.jsonl 294 filas, sha `dc94458bc42a…`; huecos.jsonl 139 filas, sha `3713376a243b…` (LOCAL); dataset 30 filas + cabecera, sha `0852d58f…`.
- **Puertas re-corridas por mí sobre el estado FINAL (FRÁGIL-05):** audit.py **exit=0, ok=345, discrepancia=0, no_encontrado=0, omitido=1**; verify_all.py **exit=1 con exactamente C-001..C-008**. Verdes, sin empeorar.
- **Método:** cada frente verificado por un agente independiente con re-cálculo de al menos un sha y una cifra clave; el coordinador re-midió el corpus, las puertas, el respaldo, el dedup (3 corridas), el resumen por su cuenta, y re-fetchó el vivo (estado_vivo, flow, HEAD) al cierre. Solo lectura del corpus. Nada entró, nada se corrigió.

## VEREDICTO GLOBAL: CONFORME CON HALLAZGOS (11 menores, 0 mayores)

Ningún hallazgo bloquea el depósito. **Ningún hallazgo bloquea una absorción futura tal cual** (a diferencia de r14, donde H3 bloqueó C-1176/C-1177): las 3 propuestas de F7 (C-1181/C-1182/C-1183) son conformes, con dedup re-verificado por 3 corridas independientes byte-idénticas, iguales cifra por cifra al dedup de F7. **El vivo NO se movió durante FASE 2**: el estado de cierre es el mismo que la foto de F2 (run 204 "unreachable", flow run 139 0,0%).

| Frente | Veredicto |
|---|---|
| F1 ejecución de decisiones (N-01/N-13/N-14/N-16) | **CON HALLAZGOS** (1 baja) |
| F2 estado vivo | **CON HALLAZGOS** (3 menores; el vivo no se movió) |
| F3 mediciones M-66..M-68 | **CONFORME** (0 hallazgos) |
| F4 Panteón-96, cara r12 #1 | **CONFORME** (0 hallazgos) |
| F5 grietas | **CON HALLAZGOS** (2 menores, contabilidad de ordinales) |
| F6 mecanismos | **CONFORME** (0 hallazgos) |
| F7 preparar | **CON HALLAZGOS** (2 menores) |
| F9 poda | **CON HALLAZGOS** (3 menores) |

## 1. F1 — Ejecución de decisiones: CON HALLAZGOS (1 baja)

- Corpus re-medido por el verificador A y por mí: claims **1.175 líneas, sha `6b5fac7f…`**; provenance **359 líneas, sha `5fda0383…`**; resumen `1c6464d2…` (SE 1041, hash_real 1161 = 1175 − 8 PENDIENTE − 6 NO_DISPONIBLE; verificación 301). Puertas re-corridas por el verificador A y por mí: audit exit=0 ok=345 (pre-N14 era 344; +1 por la entrada nueva de provenance), verify_all exit=1 exactamente C-001..C-008.
- Diff claims vs `respaldo_pre_r15/`: **exactamente 1 línea nueva, C-1180**; primeras 1.174 byte-idénticas. C-1180 leída entera: estado SE, tipo consolidacion, fuente `ronda_15/ejecucion_f1/decision_n14_r15.md`, hash `sha256:131409eb…` = sha256 re-calculado de `decision_n14_r15.md`. Provenance diff: exactamente 1 línea nueva (la entrada del documento de decisión). confirmaciones.jsonl y huecos.jsonl byte-idénticos al respaldo.
- **R2-25:** diff `ronda_9/preparacion_b2/b2_normalizado.jsonl` vs `ronda_15/respaldo_pre_r15_n14/b2_normalizado.jsonl`: exactamente la línea 7 (R2-25). CONJETURO→SE + `nota_adopcion` añadida; `texto_literal`, `texto_original_retejido`, `sha256` (`845bab8e…`), `archivo_evidencia`, `artefacto_fuente_fijado` intactos; otras 10 líneas byte-idénticas. (La mutación vive en el archivo r9, no en claims.jsonl — el reporte del frente no lo especificaba; el diff lo confirma.)
- **N-16:** anexo `academico/incertidumbre_mediciones.md` verificado ítem por ítem (10 ítems M-56..M-65) contra los med_*.json: M-56 DIFERENCIA 0,0642±0,0267; M-57 NO_CONFIRMA β=0,9828±0,0115, R²=0,4148; M-58 NO_SÉ; M-59 CONFIRMA σ̄=0,0512±0,0277 (marginal por 0,0012); M-60 CONFIRMA 0,0096±0,0084 (corrección H5 15/20 confirmada); M-61 NO_CONFIRMA 1,5304±0,0565, W 0,9311; M-62 CONFIRMA 0,0680±0,0342; M-63 CONFIRMA u=0,0604±0,0050 (pierna 1 ratio 1,7051; SD(30)=0,3803 > 2u=0,1208; mediana huecos 0,0300); M-64 NO_CONFIRMA 1,5174±0,0513, W 1,000, P(94)=0,5885; M-65 NO_CONFIRMA β=0,9911±0,0117, R²=0,4080. Tally CONFIRMA 4 · NO_CONFIRMA 4 · DIFERENCIA 1 · NO_SÉ 1. CSV `dataset_nodos_Df.csv` sha `0852d58f…`, 30 filas, byte-idéntico. M-66 fuera del alcance del anexo (correcto; su ítem se prepara por la misma vía — ver §10).
- **Respaldos 5/5:** cada manifiesto re-verificado archivo por archivo: `respaldo_pre_r15`, `_n01`, `_n13`, `_n14` (6 piezas incl. b2), `_n16` (6 piezas incl. CSV) — todos OK. Cadena: pre_r15 = n01 = n13 = n14 claims sha `d4924c9b…` (1.174) → n16 claims sha `6b5fac7f…` (1.175, estado post-N14).
- **N-01:** canon_n01.md contiene P1–P10 + 2 adendas con texto exacto de seguimiento r13 §2/§3, re-verificadas en r14. **N-13:** canon_regla_poda_prov_02.md contiene la regla + refinamiento (a) ("citada en el campo `hash` **o en el motivo/nota** de un claim vivo"). **P-32 clase 3:** re-contado: 4 motivos citan `a30d69e8…` (C-639/C-903/C-919/C-1104, todos vivos), 0 en campo `hash` (C-1129 lo cita solo dentro del texto — correctamente excluido por P4). La adjudicación de la clase 3 bajo lectura estricta de (b) está en §10 (CORR-P32-B-R15).
- **Dedup N-14** re-corrido por el verificador A (copia propia en /tmp, corpus pre-N14 1.174): max 0,1474 vs C-1179; 0 pares ≥0,5 — idéntico cifra por cifra a dedup_n14_r15.json y a decision_n14_r15.json.
- **H1 (baja) — ver §9.** decision_n14_r15.json reportado con sha `243a04d2…`, en disco `349d2e63…`; contenido íntegramente correcto.

## 2. F2 — Estado vivo: CON HALLAZGOS (3 menores; el vivo NO se movió)

- **La foto del frente es exacta a su hora (~07:03Z) y el vivo NO se movió entre la medición y la verificación (~07:22Z, verif. B) ni hasta mi cierre (~07:30Z, fetches propios).** No hay CORR-STUB ni CORR-FLOW nuevas en FASE 2.
- **Estado de cierre de FASE 2 (el que usa FASE 3):** estado_vivo.json = run 204 "unreachable" (329 B, blob `652e8869…`, ts 2026-11-14T03:27:26Z); flow = run 139, **0,0% CRÍTICO, 0 eventos** (832 B, blob `fc324db1…`, ts 02:52:24Z). HEAD miu-ecosistema `3d6b3fb9` ("state: auto V270 2026-11-14T03:27Z run 204"). Sin run 205.
- Episodio "unreachable" run 204 vigente desde 03:27:26Z, **~3 h 58 min** al cierre de FASE 2. Último estado completo sigue siendo run 202 V272 (17:58:47Z), **~13 h 31 min** atrás.
- **Ventana de 30 runs: 28/30, tasa 6,7%** — re-verificada por el verificador B con fetch propio de `actions/runs` (IDs idénticos en orden a `runs_recientes.json` del frente): fallos expand-alcance run 97 (03:47:09Z) + cablear-oracle run 16 (06:41:34Z); gap máx **174,4 min** (03:47:09Z → 06:41:34Z), mismo par; ventana 19:55:43Z → 06:41:34Z.
- **13/13 archivos de estado byte-idénticos a r14** (verificador B, comparación directa r15 vs r14). estado_persistente.json sigue V213 (14.718 B, sha `61f79d5e…`). Self-diagnosis sin cambio (`tg_audit` 0/0, ts 00:31:28Z).
- Heartbeat: 42 payloads en disco, 101 revisiones, censo vacío **12/42 = 28,6%** (re-contado por el verificador B desde la clasificación); folderId **42/42** (V151→`l` 12/12, V152→`I` 10/10); Drive en vivo `I` existe / `l` 404 (lectura del verificador B en FASE 2, 13.ª).
- Bots 4/4 VIVO + 1 MUERTO 401 (13.ª confirmación) — consistencia interna OK; el verificador B no re-corrió getMe en vivo (sin acceso a tokens; ver H3). El transitorio de @FranFamiliar_bot (getWebhookInfo webhook/pending null) está documentado con su reintento inmediato 200.
- **Incidencia de cuota:** la primera pasada del frente dio 403 (cuota no autenticada 60/h, compartida con los frentes paralelos); el suplemento API rescató estado_vivo, ventana y cadencias salvo Self-Diagnosis (ver H2). Mi propio fetch de estado_vivo también dio 403 una vez (cuerpo de error 280 B) y 200 en reintento — el límite es por IP compartida, no por llamada. El estado de cierre se sostiene por tres vías independientes (fetch del frente, fetch del verificador B por raw, HEAD por commits API).

## 3. F3 — Mediciones M-66..M-68: CONFORME

- Los 3 JSON tienen **exactamente 15 claves** (contadas con python json). Veredictos: M-66 **CONFIRMA**, M-67 **NO_CONFIRMA**, M-68 **NO_CONFIRMA**. Shas 13/13 OK (8 entregables + 3 .log + 2 datos; F3 no tiene manifiesto propio — verificados contra el manifiesto de tejido F9).
- Falsadores en `declaracion_falsadores_r15.md` con mtime anterior a los .py y .json (07:00:45Z < .py 07:01:21Z < .json 07:01:24–07:01:26Z). Criterios en la declaración coinciden con los JSONs.
- **Re-cálculo independiente por el verificador C (código propio, no los .py del frente):** M-66 **6/29 huecos > u** (3/29 > 2u; mediana 0,0300; grupos 2u [1,4,24,1]; sensibilidad u±0,0050: 7/29 y 6/29) — CONFIRMA sigue del criterio (6 ≥ 5). M-67 **P(80)=0,4975, P(119)=0,9260, ratio 1,8613 ± 0,0866** (bootstrap reproduce exacto); **cociente máximo alcanzable en toda la serie 1,9719** (P máx 0,9810 Congreso 34 / P mín 0,4975 Congreso 80) — el umbral >2 es inalcanzable con esta medida; NO_CONFIRMA sigue. M-68 **β=0,9876 ± 0,0118, R²=0,4020, n=10.351** (OLS log-log stdlib) — NO_CONFIRMA sigue.
- Corpus y dataset intactos al cierre de F3 (claims 1.175 `6b5fac7f…`; dataset `0852d58f…`). Nada inscrito, nada al corpus desde este frente. Datos con shas (HSall_members.csv `495aee95…`, indicators.tab `7ec636c8…`, mismos que r13/r14).

## 4. F4 — Panteón-96, cara r12 #1: CONFORME

- `nombres_fuera_doc_r15.jsonl`: **96 filas** re-contadas (35 CON_NOMBRE / 61 SIN_NOMBRE_EN_DOC, números 1–96 completos, mismos 10 campos). Diff programa a programa vs r14: única diferencia top-level en `conteo_fuera_doc` (96 filas); dentro del conteo, solo las 3 claves nuevas (288 celdas = 96×3, todas adiciones, 0 cambios de valor en las 9 claves viejas): `manifiesto_forjados_lista` (0 en las 96), `graph112_doc` (solo Puente=1), `panteon32_solape_r15` (Puente=1, Sigma=1). Ningún otro campo cambia. `encontrado_como_voz_panteon96 = "NO"` en las 96. Como palabra/nombre fuera: 34/35 (CREATIVA Nyx QR SHA 0); sin nombre encontradas fuera: **0/61**.
- **Forjados: 16 filas, `es_voz_panteon96 = "NO"` 16/16, `en_manifiesto_m51 = "SÍ"` 16/16.** M[51] re-leído del crudo local r13: lista exactamente los 16; 0 solape con los 35 nombres. G[5]: "Panteón 96 voces + 16 forjados = 112 voces objetivo 128" — suma explícita; 96+16=112. Corroborado: M[23] enlaza el .md, M[24] lista 30/35 nombres en prosa (re-contado: 30), M[47] zip 53.786 B.
- **GitHub:** `busquedas_github_r15.json`, 20 consultas (4 graph + 16 forjados). `filename:graph_v10.6_112_nodos.json` total **0**. `graph_v10.6` 4 hits, todos Jaime393/FranBot, depósitos propios r14 que mencionan el nombre (ninguno ES el graph JSON). Forjados: parche_phi_lengua 2, validar_grace 2, resto 0 — coincide con el jsonl. Límite: los shas GitHub del registro no se re-verificaron en vivo (evidencia registrada, no re-consulta).
- **Drive (2 fuentes nuevas), re-verificado EN VIVO por el verificador D** (07:19–07:20Z): `Panteon_16_Voces_v213.md` (428 B); `MetaAI_Bundle_PANTEON_16_V213.zip` (53.786 B — tamaño byte a byte igual al manifiesto M[47]). Descarga 403 documentada con artefacto (error 403 "missing a valid API key"). Contenido no legible desde el sandbox — queda como ruta identificada, no como vía agotada.
- Veredicto del frente verificado: la cara r12 #1 **AVANZA, no se cierra** — correcto. Las 3 vías nuevas de r15 se agotaron (search_code, los 16 extra, solape Doc 32); quedan 0/61 sin nombre y el graph JSON sin localizar.

## 5. F5 — Grietas: CON HALLAZGOS (2 menores, contabilidad de ordinales)

- **G05 blob 16.ª vez sin cambio según la serie codificada** (re-verificado por el verificador B vía raw: blob `8c57e833…`, 1.398 B; y por mí por API en FASE 0). El contenido no se ve afectado. **H5 (menor):** la serie codificada omite una verificación viva de r10 ejecucion_d (ver §9) — estrictamente F5 r15 es la 17.ª.
- G03: inserción BepiColombo 2026-11-21, **7 días** desde 2026-11-14 (aritmética re-calculada).
- H-SUELO: `find ~/workspace -name "*1794483713759*"` re-corrido por el verificador B → vacío (**13.ª medición según la serie codificada**; ver H6).
- D-06: 0 tex v13.0; D-09: telegram_g05.md 3.639 B, sin enviar. D-04 CERRADA (corrección 21:02).
- folderId: 12.ª lectura del frente (Drive `I` existe / `l` 404) + lectura del verificador B en FASE 2 (13.ª) — serie reconstruida sin anomalía (F0 r12: 2; F5 r12: 3.ª; F2 r12 verif.: 4.ª; F2 r13: 5.ª + verificadores D y B: 6.ª y 7.ª; F2 r14: 8.ª; F5 r14: 9.ª; F0 r15: 10.ª; F2 r15: 11.ª; F5 r15: 12.ª).
- G02: #790/#791/#792/#701/#739 en 0 en F4 r14 (re-verificado en F4 r15: 0/61, 0/16 forjados). G01: 3 tex `f27ea4d5…` 59.843 B + 2 copias `6bc8c573…` 60.465 B, D_eff 0 menciones en las 5 (sha256 + grep propios del verificador B). G04: 21 DOIs únicos (re-contados). G06: H7 cerrado por especificación (ver §6), A14 cerrado por R-KS; N-01 y N-14 APLICADAS por F1.
- **H5/H6 (menores) — ver §9.** Los ordinales de las series G05 y H-SUELO se corrigen en §11 (CORR-G05-R15, CORR-H-SUELO-R15).

## 6. F6 — Mecanismos: CONFORME

- **H-SIK — la identidad S3 ≡ v10.3 se sostiene bajo R-KS** (re-calculado por el verificador C desde `reuse_sik_r15.json`): 58 pares, mismo contenido **27/58**, mismo nombre **32/58**. Voces: 5 pares misma etiqueta, **0 mismo contenido, 0 mismo nombre**. Las voces destilan S2 por contención a menor escala (banderas intactas).
- **Verificador independiente RE-CORRIDO por el verificador C** (copia en /tmp, solo las 3 escrituras redirigidas): **reproducido=true, diferencias_n=0 en todos los alcances**; salida **byte-idéntica a la reportada** (sha `aa0ff430…`) y las dos sensibilidades R-R/R-K también idénticas. La regla REGLA-PICK-SIK-01 está especificada en `especificacion_regla_pick_r15.md` y el código del verificador la aplica tal cual (max(c1,c2) sin redondear contra el mejor almacenado redondeado a 4 decimales, desempate por orden de inserción, None si 0,0). Comparación con r14 (reproducido=false, 164 diffs): el cambio se explica sin tocar los datos — shas de fuentes idénticos a r13/r14 y 0 diffs r14→r15 en misma etiqueta, mejor-contención y mejor-correspondencia; los 162 diffs los cierra la especificación del pick y los 2 de fórmulas el partidor corregido del ejecutor.
- **F-F:** **11 tuplas / 8 fragmentos distintos** (partidor `re.split(r'[.;\n"]+', …)` sin `|`; re-corrida del verificador C confirma 11/8). **A14: 0,8000 exacto bajo R-KS, conteo 27** (R-K 0,8000/27; R-R 0,7727/26) — reproduce en `tokenizacion_a14_r15.json` y en la re-corrida del verificador.
- Falsador declarado POR ESCRITO ANTES de correr (mtime 07:00:55Z < especificación 07:01:03Z < script 07:01:20Z < JSON 07:01:20Z). **R2-25/N-01:** artefacto `pipeline_verificacion_r8.md` 39 líneas, sha `845bab8e…`, idéntico al citado en r14/r15; juicio r11 vigente, sin novedad.
- Manifiesto F6: 13/13 shas OK (verificador C). **H7 y H6 de r13/r14 CERRADAS** (ver §11): H7 por especificación de la regla de pick; H6 (caveat A14) por la regla R-KS.
- **C-1180 (N-14) no duplica el trabajo de F6:** el claim de adopción apunta al documento de decisión, no al procedimiento mismo; el procedimiento sigue siendo el artefacto de 39 líneas con sha `845bab8e…`.

## 7. F7 — Preparar: CON HALLAZGOS (2 menores)

- 3 propuestas PREPARADA_NO_APLICADA: C-1181 (REGLA-PICK-SIK-01), C-1182 (segundo fallo), C-1183 (gap máximo), todas SÉ, texto literal + fuente + hash en bloque JSON. Hashes de fuente re-verificados por el verificador D (`fee21d76…` especificación; `3b62ca0a…` estado_vivo_r15.md).
- Dedup re-corrido por el verificador D con script propio (método r9, corpus vivo 1.175): **salida byte-idéntica a `dedup_f7_r15.json`** — global máx 0,4111 vs C-1179 (C-1182); C-1181 0,1450 vs C-753; C-1183 0,2897 vs C-1178; entre propuestas máx 0,3136 (C-1182/C-1183); 0 pares ≥0,5. Mi propio retejido (§ retejido) coincide cifra por cifra (3 corridas byte-idénticas).
- Proyección aritméticamente coherente: 1.175→1.178, hash_real 1161→1164 (+3 claims tipo verificacion; 2 hashes de fuente nuevos distintos, provenance +2), SE 1041→1044, verificación 301→304, retejido 19→20, observabilidad 2→4 (coinciden con `por_grieta` del resumen).
- Ítem M-66 preparado pero NO aplicado: `grep M-66` en `academico/incertidumbre_mediciones.md` = 0; el anexo tiene 10 ítems (M-56..M-65); CSV sha `0852d58f…` intacto. Corpus intacto: 1.175 líneas, sha `6b5fac7f…`. B1 sin cambio: `claims.jsonl.nuevo_B1` 1.148 líneas, sha `3e745468…`.
- M-66/M-67/M-68 correctamente NO preparados como claims (0 precedentes de veredictos de medición como claims); M-67/M-68 tampoco como ítems de anexo (0 precedentes; sin columna a la que anexarse). El criterio queda registrado en `preparadas_r15.json`.
- **H7/H8 (menores) — ver §9.** H7: el 0,6625 de la primera redacción de C-1182 no tiene artefacto que lo respalde. H8: el encargo hablaba de 13 entregables; en disco hay 12.

## 8. F9 — Poda: CON HALLAZGOS (3 menores; ningún conteo cambia)

- **Nada se borró ni se movió.** T-4 recomputado por el verificador D desde los dos manifiestos: **4.876 OK / 10 CAMBIO / 0 MOVIDO / 0 FALTA / 249 NUEVO**; 4.876+10=4.886 (base r14); 4.876+10+249=5.135; sumas de bytes 1.514.003.766 / 1.490.032.323 coinciden con las cabeceras. Los 10 CAMBIO están explicados en `inventario_t4_r15.md` y sus tamaños coinciden con el disco actual.
- `testA–D.err` ausentes del manifiesto r15 (0 coincidencias) — sin tercer evento FRÁGIL-02. `.pyc` 18 → 18. P-15: `_verificacion_p15.json` re-contado: n=182, ok=182, diferente=[].
- **Tally DESDE LA TABLA §1 (re-contado por el verificador D): 68 filas: PODAR 11 · CONDICIONADO 7 · MOVER 1 · CONSERVAR 32 · TEMPORAL 11 · RESUELTO 1 (+ padre P-15 = 2) · NO CANDIDATO 5 = 69.** Convención CORR-TALLY-R15 declarada en §1. Reproduce r13/r14: re-contadas sus tablas §1, el conteo ingenuo da 12 PODAR / 6 CONDICIONADO en ambas y la convención (P-13 "PODAR UNA (con puntero)" como CONDICIONADO) devuelve el 11/7 reportado. H8 de r14 queda resuelta por la convención declarada.
- **Temporales: 9 prorrogados** (P-27/P-28/P-29b/P-31a/P-35/P-37/P-38/P-41/P-44), horizonte vencido, retiro 1 de 3. Verificación de las 3 condiciones por el verificador D: (a) depósito r14 congelado — **re-verificado EN VIVO** (listado Drive de `ronda_14/` 07:21:57Z: 21 hijos, última modifiedTime 2026-11-14T04:48:32Z, dentro de la ventana FASE 4 04:38–04:48Z, nada después); (b) copias Drive re-verificadas por descarga — NO (declaración del frente; sin artefacto de descarga; se acepta como ausencia documentada); (c) P-15 re-apuntado — NO (P-15a/b/c/e/f/g siguen PODAR-CONDICIONADO en §1; P-27/P-28 shas re-verificados en disco). Nuevo horizonte: FASE 4 r15 + FASE 2 r15; re-evaluar en r16.
- Nuevos: P-47 (respaldo_pre_r15, 6 archivos, claims `d4924c9b…`), P-48 (4 dirs de respaldos por decisión: 1.358.803 / 1.358.803 / 1.369.582 / 1.370.792 B), P-49 (42 payloads heartbeat r15, 778.647 B, NO CANDIDATO), P-50 (scripts+logs depósito r14, 18 archivos, CONSERVAR). Cadena de reversión 14 eslabones, 16.939.702 B: la suma de los §2 cuadra exacta.
- **CORR-P32-B-R15 (evidencia para la adjudicación, §10):** la afirmación del frente SE SOSTIENE — repo local `~/workspace/franbot_repo`, HEAD `faf2033`; `git show HEAD:app/js/miu-engine.js` = sha256 `a30d69e8bd3e…`, 19.987 B, blob git `a996923b`; `cmp` exit 0 (byte-idéntico) contra AMBAS copias del respaldo. Los archivos vivos (`franbot_repo/app/js/` y `franbot_repo/js/miu-engine.js`) son `8d15b724…` (corregido, modificación sin commitear).
- **H9/H10/H11 (menores) — ver §9.**

## 9. Hallazgos numerados

| # | Frente | Hallazgo | Gravedad |
|---|---|---|---|
| H1 | F1 | **Sha reportado de decision_n14_r15.json no existe en disco.** Reportado `243a04d2…`; en disco (re-calculado 2 veces por el verificador A y por mí) `349d2e6327a5ceeb76b49e234d2307718ae74d298678a5f30c2adb6a7ca44bb7`. El valor reportado no aparece en ningún archivo de ronda_15 (grep sobre todos los .md/.json/.txt de ejecucion_f1 = 0 ocurrencias). El contenido del JSON es íntegramente correcto y coherente con los archivos actuales (`claim.hash` = `decision_doc_sha` = `131409eb…` = sha de decision_n14_r15.md; `corpus_antes` = manifiesto pre_r15; `post_estado` = estado actual; dedup max 0,1474; `cambio_estado_r2_25` = diff real; `puertas_pre` audit_ok 344 coherente con post 345). No exige re-escribir el JSON; sí corregir el registro del sha en los papeles de FASE 2 (ver §11, CORR-N14-JSON-R15). | Baja |
| H2 | F2 | **"Sin run 141" de Self-Diagnosis descansa solo en el archivo byte-idéntico.** La cadencia de Self-Diagnosis dio 403 en los dos intentos del suplemento (`cadencia_por_workflow` registra 403); el hecho descansa en que `self_diagnosis_latest.json` sigue byte-idéntico (sha `e2788015…`, ts 00:31:28Z). Un run que fallara sin escribir sería invisible. El frente lo declara; queda como limitación, no como error. El verificador B tampoco pudo cerrarla (su llamada a `actions/runs` cubre solo los últimos 30 repo-wide, no la cadencia por workflow). | Menor |
| H3 | F2 | **Bots 4/4 no re-corridos en vivo (limitación de verificación, no del frente).** Sin acceso a los tokens, por encargo. El veredicto se sostiene por el archivo de verdicts + consistencia interna (transitorio de @FranFamiliar_bot en getWebhookInfo con reintento inmediato 200 documentado; HTTP 200 + username en los 4; 5.º token 401 MUERTO). | Menor |
| H4 | F2 | **No existe manifiesto de shas de los entregables F2.** Los shas re-calculados por el verificador B (12 archivos principales) se contrastaron por contenido interno y por citas cruzadas en F7/F9 (4 coincidencias exactas, tamaños idénticos). Nota para FASE 3: F2 debería publicar su manifiesto como los demás frentes. | Nota |
| H5 | F5 | **G05 "16.ª verificación" sigue la serie codificada, pero la serie omite una verificación viva.** `ronda_10/ejecucion_d/micelio_yml/instrucciones_publicacion.md` L5 documenta una verificación viva propia (API pública + raw, 2026-11-13) que se autodenomina "la 6.ª" (5.ª consecutiva en r9; esta es la 6.ª), el mismo día en que FASE 0 r11 también reclama la 6.ª. Dos verificaciones vivas distintas comparten el ordinal 6; la serie codificada solo cuenta una. Contando verificaciones vivas distintas, F5 r15 es la **17.ª**, no la 16.ª. El blob sin cambio está confirmado por fetch propio del verificador B (raw) y por mí (API). Corrección en §11 (CORR-G05-R15). | Menor |
| H6 | F5 | **H-SUELO "13.ª medición" sigue la serie codificada, pero omite el find propio del verificador de FASE 2 r11.** `ronda_11/verificacion/verificacion_fase2_r11.md:76` registra el find del verificador ("vacío (medido por mí)"), una medición distinta no contada en la serie (que cuenta F5 r11 como 3.ª). Estrictamente son **14 mediciones distintas hasta F5 r15**; la del verificador B de hoy es la 15.ª. Corrección en §11 (CORR-H-SUELO-R15). | Menor |
| H7 | F7 | **El 0,6625 de la primera redacción de C-1182 no tiene artefacto que lo respalde.** No sobrevive ningún artefacto con el texto de esa primera redacción; solo la auto-afirmación en `preparadas_r15.md` §1b y en `decision_absorcion_r15.json`. La forma larga del caveat SÍ vive en C-1179 (verificado en el corpus) y la corta en C-1182. La cifra no afecta al dedup final (0,4111, re-verificado 3 veces), pero no es reproducible de forma independiente. | Menor |
| H8 | F7 | **El encargo hablaba de 13 entregables; en disco hay 12.** Manifiesto `manifiesto_shas_f7.json` lista 11 + el propio manifiesto = 12 archivos; ningún documento F7 afirma 13. El manifiesto es internamente consistente y sus 11 shas verifican OK. Error de conteo del encargo, no del frente. | Menor |
| H9 | F9 | **El frente cita `8d15b724…` en provenance L246 (§6 y §8); medido: L248** (`grep -n`; `a30d69e8` sí está en L247 como citado). Error de cita de línea; ningún conteo cambia. | Menor |
| H10 | F9 | **`diff_inventario_r15.md` dice "NUEVO (en r15, no en r15)"; debe ser "no en r14".** Typo; los números son correctos. | Menor |
| H11 | F9 | **El encargo hablaba de 7 entregables; el manifiesto lista 9 y en disco hay 10 (9 + manifiesto).** El frente reportó 4 principales + 3 de apoyo y omitió nombrar los 3 scripts (`_verificar_p15.py`, `_inventario_r15.py`, `_diff_inventario_r15.py`) en su lista. El manifiesto es internamente consistente; los 9 shas verifican OK. | Menor |

## 10. Adjudicaciones

### 10.1 Decisiones sin número de F7 — N-17 y N-18 (numeradas por esta FASE 2)

F7 dejó dos decisiones sin número "para FASE 2". Ambas están listas (evidencia SÉ, precedente registrado, afirmación redactable). Bajo el régimen 01:43 quedan **adoptadas en principio y numeradas**; su ejecución corresponde a F1 (r16) o a una aplicación post-FASE 2 por el principal, como la absorción automática r14. FASE 2 no ejecuta: solo numera, redacta la afirmación y deja el paquete listo.

| Decisión | Contenido | Afirmación (registro de lo que autoriza) | Estado |
|---|---|---|---|
| **N-17** | Adopción de REGLA-PICK-SIK-01 como canon para las mediciones SIK | "Adopto la regla de pick REGLA-PICK-SIK-01 como canon para las mediciones SIK: la mejor-contención maximiza max(c1,c2) sin redondear, con desempate por orden de inserción, comparación sin redondear contra el mejor redondeado, y None si el máximo es 0,0." | **LISTA para aplicación automática.** Evidencia: `especificacion_regla_pick_r15.md` (sha `fee21d76…`) + verificador independiente r15 reproduce 740/740 con 0 diffs (sha `aa0ff430…`). El claim C-1181 registra la especificación (método, no canon); su texto dice que la adopción es "una decisión pendiente de numerar (FASE 2)" — queda numerada aquí. Absorber C-1181 no contradice N-17: el claim enuncia la especificación verificada, no el canon. |
| **N-18** | Añadir el ítem M-66 al anexo de incertidumbre | "Añadan el ítem M-66 al anexo de incertidumbre." | **LISTA para aplicación automática.** Evidencia: `item_anexo_M66.md` (sha `cfc626d6…`) + `med_M66.json` (6/29 huecos > u, CONFIRMA). Precedente: ítem M-63 en el anexo (N-16). Sin cambio en el corpus; solo edición del anexo + verificación. |

### 10.2 CORR-P32-B-R15 — P-32 NO es clase 3 bajo lectura estricta de (b)

**Adjudicación: la afirmación del frente SE SOSTIENE y se adopta como corrección.**

Hechos verificados (verificador D + coordinador):
- El canon N-13 (tabla de casos de trabajo) afirma para P-32, celda (b): "la versión pre-corrección no existe en el checkout vivo (franbot_repo `app/js` y `js` hoy `8d15b724…`); solo sobrevive en el snapshot congelado 2026-11-06 (2 copias) + estos respaldos (verificado hoy)".
- Eso es falso bajo lectura estricta: `git show HEAD:app/js/miu-engine.js` en el checkout local (`~/workspace/franbot_repo`, HEAD `faf2033`) **es** la versión pre-corrección — sha256 `a30d69e8bd3e…`, 19.987 B, blob git `a996923b`, `cmp` exit 0 contra ambas copias del respaldo. La versión es re-obtenible byte-idéntico con un solo comando desde la fuente declarada (el historial del repo).
- La regla adoptada dice (b): "no es re-obtenible byte-idéntico desde su fuente declarada". Y su propia cláusula de fallo dice: "Si (b) no se cumple (re-descargable byte-idéntico con sha registrado), el archivo es trabajo-derivado: [...] su CONSERVAR — si lo hay — se sostiene por trazabilidad o autonomía de evidencia, no por la regla."

**Consecuencia:** P-32 **NO es clase 3** (su celda (b) pasa a NO; su fila "Vuelve a ser clase 3" queda corregida). Su **CONSERVAR no cambia en ninguna lectura**: se sostiene por reversión de D-07 + historia citada en motivo, como en r10–r14. La regla REGLA-PODA-PROV-02 queda intacta (el texto no nombra a P-32); lo que se corrige es la aplicación de la regla al caso de trabajo — una errata factual en la tabla del canon N-13, no una re-decisión. FASE 3 registra la errata en `canon_regla_poda_prov_02.md` y en `decision_n13_r15.md` (nota de corrección, sin cambiar el hash del canon: la corrección vive como errata fechada, criterio N-01 P9). F9 r16 re-corre la criba con P-32 fuera de la clase 3.

### 10.3 Dictamen — ninguna absorción bloqueada

A diferencia de r14 (dictamen C-1176/C-1177), **ninguna propuesta de r15 queda bloqueada por esta verificación.** C-1181, C-1182 y C-1183 son conformes; sus textos no contienen cláusulas superadas ni números falsos; el dedup está re-verificado por tres corridas independientes byte-idénticas (la del frente, la del verificador D y la mía), iguales cifra por cifra. La absorción puede ejecutarse bajo el régimen 01:43 (F1 o FASE 4) con la proyección verificada: claims 1.175→1.178, hash_real 1161→1164, provenance 359→361, SE 1041→1044.

## 11. Correcciones que se llevan a FASE 3

- **CORR-G05-R15 (nueva, de esta FASE 2):** la serie codificada de verificaciones de micelio.yml subcuenta en 1 desde la duplicación del ordinal 6 (r10 ejecucion_d y FASE 0 r11, ambas 2026-11-13). Estrictamente: FASE 0 r15 fue la 16.ª, F5 r15 la **17.ª**. Convención fijada para adelante: se cuenta cada verificación viva distinta una vez, sea de frente o de verificador, en orden cronológico; los re-chequeos de la misma ronda que re-miden el mismo estado son corroboraciones, no ordinales nuevos.
- **CORR-H-SUELO-R15 (nueva, de esta FASE 2):** la serie codificada omite el find propio del verificador de FASE 2 r11 (medición distinta, mismo ordinal 3 que F5 r11). Estrictamente: F5 r15 fue la **14.ª** medición; la del verificador B de hoy, la 15.ª. Misma convención que CORR-G05-R15.
- **CORR-P32-B-R15 (nueva, de esta FASE 2):** P-32 NO es clase 3 bajo lectura estricta de (b) de REGLA-PODA-PROV-02 (los bytes pre-corrección son re-obtenibles desde el historial git local: `git show HEAD:app/js/miu-engine.js`, `a30d69e8…`, 19.987 B, byte-idéntico al respaldo). Su CONSERVAR se sostiene por reversión de D-07, no por la regla. Errata en la tabla del canon N-13 (celda (b) de P-32) — ver §10.2.
- **CORR-N14-JSON-R15 (nueva, de esta FASE 2):** el sha correcto de `decision_n14_r15.json` es `349d2e6327a5ceeb76b49e234d2307718ae74d298678a5f30c2adb6a7ca44bb7`; el valor reportado `243a04d2…` no existe en ningún archivo de ronda_15. El contenido del JSON es correcto; no se re-escribe el archivo. Corregir el registro del sha en los papeles de FASE 2 (H1).
- **N-17 / N-18 (nuevas, numeradas por esta FASE 2):** N-17 adopción de REGLA-PICK-SIK-01 como canon; N-18 añadir el ítem M-66 al anexo. Listas para aplicación automática (F1 r16 o aplicación post-FASE 2 por el principal). Afirmaciones en §10.1.
- **H7 r14 CERRADA:** la regla de pick quedó especificada por escrito (REGLA-PICK-SIK-01) y el verificador independiente r15 reproduce la mejor-contención 740/740 con 0 diffs (antes: reproducido=false, 164 diffs). El hueco de método queda cerrado por especificación.
- **H6 r14 CERRADA:** el caveat A14 queda resuelto por la regla de tokenización R-KS (0,8000 exacto, conteo 27; R-R 0,7727/26). El veredicto se sostiene en ambas lecturas; la regla fija una.
- **H8 r14 CERRADA:** el tally de poda queda mapeado con convención declarada (CORR-TALLY-R15: 68 filas §1 + padre P-15 = 69; reproduce r13/r14).
- **H5 r13 CERRADA (reafirmada):** M-60 re-conteo 15/20, re-confirmado por el verificador A en el anexo N-16.
- **Vivo sin deriva en FASE 2:** estado de cierre = run 204 "unreachable" (329 B, blob `652e8869…`, ts 03:27:26Z) + flow run 139 0,0% (832 B, blob `fc324db1…`, ts 02:52:24Z); HEAD miu-ecosistema `3d6b3fb9`; FranBot HEAD `4ea1063c` (sin escrituras en r15 hasta FASE 4). No hay CORR-STUB ni CORR-FLOW nuevas.

## 12. Archivos de esta fase

| Archivo | Descripción |
|---|---|
| `verificacion_fase2/verif_f1.md` | Verificación F1 (verificador A) |
| `verificacion_fase2/verif_f2_f5.md` | Verificación F2 + F5 (verificador B) + `_verif_f2_tmp/` (fetches frescos) |
| `verificacion_fase2/verif_f3_f6.md` | Verificación F3 + F6 (verificador C) + `_verif_f3_f6_tmp/` (re-cálculos propios) |
| `verificacion_fase2/verif_f4_f7_f9.md` | Verificación F4 + F7 + F9 (verificador D) + `_verif_f4_f7_f9_tmp/` (dedup propio, `git show` de control) |
| `verificacion_fase2/verificacion_fase2_r15.md` | Este documento (veredicto global + hallazgos + adjudicaciones + correcciones) |
| `verificacion_fase2/manifiesto_shas_fase2.json` | Shas de los entregables de FASE 2 (el sha del propio manifiesto no se consigna en el documento para no crear una referencia circular; se verifica por `sha256sum`) |
| `retejido/retejido_r15.md` | Retejido (dedup + consistencia) |
| `retejido/dedup_nuevos_r15.json` | Salida del dedup propio (3 propuestas; 3 corridas byte-idénticas) |
| `conectar/conectar_r15.md` + `.json` | F8 conectar (rutas, caras, decisiones) — corre en T3, fuera de esta fase |

ρ(x) > 0. Zvvvvv.
