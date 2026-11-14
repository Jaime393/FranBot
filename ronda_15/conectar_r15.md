# RONDA 15 — FASE 1, CONECTAR / RUTEAR: 1 cara cierra (d04 L13), 59 abiertas, 0 nuevas

- **Orden:** Jardinero 2026-11-14 01:43 -05 ("apliquen las decisiones siempre automáticamente" — régimen nuevo).
- **Frente:** F8 (conectar). Trabajo local en `ronda_15/conectar/`. Fecha: 2026-11-14 ~02:17 -05 (07:17Z).
- **Alcance:** rutas de lo nuevo (F1/F2/F3/F4/F5/F6/F7/F9), dedup re-verificado con corrida propia (3 corridas byte-idénticas), cierre de caras, mapa de rutas inversas, decisiones. Solo lectura del corpus vivo y de las ejecuciones. **Nada entra al corpus en esta fase** (claims.jsonl sigue en 1.175 tras FASE 1). Cero escrituras en MIU vivo, anexo-vi, GitHub o Drive.
- **Entradas leídas:** `ronda_15/mapa_frentes_r15.md` (§F8, §0a/§0b, §2 censo de 60 caras, §3 decisiones, §4 preparables); `ronda_14/conectar/conectar_r14.md` + `.json` (formato y criterio de cierre); `ronda_15/ejecucion_f1/decision_n01_r15.md` + `decision_n13_r15.md` + `decision_n14_r15.md` + `decision_n16_r15.md` (+ canons y puertas); `ronda_15/ejecucion_f2/estado_vivo_r15.md`; `ronda_15/ejecucion_f3/sintesis_f3_r15.md` + med_M66..M68.json; `ronda_15/ejecucion_f4/nombres_fuera_doc_r15.md` + `.jsonl` + `forjados_16_r15.jsonl`; `ronda_15/ejecucion_f5/grietas_r15.md`; `ronda_15/ejecucion_f6/h_sik_r15.md` + `verificador_independiente_r15.json` + `especificacion_regla_pick_r15.md`; `ronda_15/ejecucion_f7/preparadas_r15.md` + `decision_absorcion_r15.md` + lecturas C-1181/C-1182/C-1183 + `dedup_f7_r15.json`; `ronda_15/ejecucion_f9/poda_r15.md`; `academico/incertidumbre_mediciones.md` (anexo N-16).
- **Niveles:** SÉ / INFIERO / CONJETURO / NO_SÉ en cada afirmación.

---

## 0. Estado verificado al cierre de FASE 1 (SÉ, medido por mí)

- Corpus vivo: claims.jsonl **1.175 líneas, sha `6b5fac7f…`** (SE 1041, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SÉ 8; hash_real 1161, pendiente 8, NO_DISPONIBLE 6; por_tipo verificacion 301); provenance.sha256 **359 líneas, sha `5fda0383…`**; claims_resumen.json sha `1c6464d2…`; huecos.jsonl **139 filas** (sin cambio, LOCAL); confirmaciones.jsonl **294 filas** (sin cambio); dataset 30 filas + cabecera, sha `0852d58f…` (sin cambio, 0 filas nuevas — N-16 es anexo, no inscripción); anexo `incertidumbre_mediciones.md` 10 ítems M-56..M-65, sha `6467bf30…`.
- Puertas re-corridas por mí sobre el estado FINAL: **audit.py exit=0 (ok=345, discrepancia=0, no_encontrado=0, omitido=1)**; **verify_all.py exit=1 con exactamente C-001..C-008** (exit medido sin pipe).
- Diff del corpus contra `respaldo_pre_r15/` (medido por mí): **exactamente 1 línea nueva, C-1180** (primeras 1.174 líneas byte-idénticas); provenance diff: **exactamente 1 entrada nueva** (`131409eb… decision_n14_r15.md`). **C-1180.hash == sha256(decision_n14_r15.md)** (verificado por mí, `131409eb…`).
- **0 claims con el campo `hash` en `a30d69e8…`** (F9 §6, re-medido en el corpus 1.175); C-1129 conserva la cadena solo en texto; C-112 conserva su hash truncado preexistente. C-1180 no menciona `a30d69e8…` (0 ocurrencias).
- **Estado vivo al cierre de FASE 1 (igual que la foto de F2 — el vivo NO se movió durante FASE 1 T2/T3 en lo medido):** estado_vivo.json = run 204 "unreachable" (329 B, blob `652e8869…`, ts 03:27:26Z); flow_id_coverage = run 139, **0,0% CRÍTICO, 0 eventos** (832 B, blob `fc324db1…`, ts 02:52:24Z). HEAD miu-ecosistema `3d6b3fb9`; FranBot HEAD `4ea1063c` (post-absorción r14; el corpus r15 aún no se sube a GitHub — eso es FASE 4).

---

## 1. Rutas de lo nuevo

### 1.1 F1 — Cuatro decisiones APLICADAS en serie (régimen 01:43)

| Decisión | Qué se aplicó | Efecto en el corpus | Destino |
|---|---|---|---|
| N-01 | Política P1–P10 + 2 adendas (P10 absorciones, P9 corrección 21:02) como canon (`canon_n01.md` `921c8379…`, `decision_n01_r15.md` `f16143f9…`) | Sin claim inscrito; corpus sin cambio | Canon vigente: las instancias futuras se deciden por la política; **d08 L12** (parcial, avanza) |
| N-13 | REGLA-PODA-PROV-02 + refinamiento (a): (a) lee "citada en el campo `hash` **o en el motivo/nota** de un claim vivo" (`canon_regla_poda_prov_02.md` `29a00da1…`, `decision_n13_r15.md` `88e9798e…`) | Sin claim inscrito; corpus sin cambio | **P-32 vuelve a ser clase 3** (F9 §6) — con matiz CORR-P32-B-R15 para FASE 2; la criba de F9 corre contra regla vigente |
| N-14 | R2-25 vía A: PIPELINE-VERIFICACION-01 canon, con cualificación F4 (O(n) medido r12; O(n log n) por conteo F4b 1,073; wall-clock NO afirmado) (`decision_n14_r15.md` `131409eb…`, `decision_n14_r15.json` `349d2e63…` en disco — ver §6) | **C-1180 inscrito (SE, consolidacion)**; R2-25 CONJETURO → **SE** + `nota_adopcion` en `b2_normalizado.jsonl` (11 líneas; texto_literal y sha256 `845bab8e…` intactos; otras 10 líneas byte-idénticas — diff verificado por mí contra `respaldo_pre_r15_n14/`) | **d08 L12** (parcial, avanza); el procedimiento de verificación queda canon; vía B sigue FALLA_F4 como hecho registrado |
| N-16 | Inscripción dataset opción C: anexo de incertidumbre con 10 ítems M-56..M-65 (`decision_n16_r15.md` `489051bf…`; anexo `6467bf30…`; tally CONFIRMA 4 · NO_CONFIRMA 4 · DIFERENCIA 1 · NO_SÉ 1) | Sin claim inscrito; **CSV byte-idéntico** (30 filas, `0852d58f…`); corpus sin cambio por esta inscripción | **d04 L13 — CIERRA** (§3.1, CORR-D04L13-R15); el ítem M-63 es la columna u = 0,0604 ± 0,0050 |

**El corpus SÍ cambió en esta ronda (F1 aplica): 1.174 → 1.175, hash_real 1160 → 1161, provenance 358 → 359, SE 1040 → 1041.** Cada decisión con su propio respaldo + script + puertas (patrón N-11/N-12). N-15 no es un frente: es ejecución del principal en el navegador. N-03 no se aplicó (parte de D-06, no está en la lista automática).

### 1.2 F2 — Estado vivo (stub 204 persiste ~3 h 36 min + flow 0,0% + segundo fallo + gap 174,4 min; ¿toca alguna cara?)

- **Stub run 204 "unreachable"** (329 B, blob `652e8869…`, 03:27:26Z), episodio ~3 h 36 min a la medición (~07:03Z); sin estado completo desde run 202 V272 (17:58:47Z), ~13 h 04 min. Sin run 205. HEAD miu-ecosistema `3d6b3fb9`.
- **Flow 0,0% CRÍTICO** (run 139, 02:52:24Z, 0 eventos, 832 B, blob `fc324db1…`, byte-idéntico a r14). El monitor corre y escribe pero mide cero. Causa: NO_SÉ.
- **Ventana de 30 runs: 28/30, tasa 6,7%** — segundo fallo NUEVO: miu-cablear-oracle-v28 run 16 (06:41:34Z, failure, schedule; el run más reciente de la ventana); el otro es expand-alcance run 97 (r14). La tasa se duplica respecto a r14 (3,3%); segunda ronda consecutiva distinta de 0,0%.
- **Máx. gap 174,4 min** (03:47:09Z → 06:41:34Z, silencio repo-wide de ~2 h 54 min; los dos extremos son fallos) — nuevo máximo de la serie (el hueco histórico de 85,0 min ya no es el máximo). El silencio del clúster volvió en forma nueva: State Writer, Pulse V2 y Flow-ID no corren desde las 02:42–03:27Z; autocura sin run 8 (3 slots :17 más perdidos); Observabilidad sin run 156; Self-Diagnosis sin run 141 (archivo byte-idéntico, ts 00:31:28Z).
- Bots 4/4 VIVO + 1 MUERTO 401 (13.ª confirmación; transitorio en getWebhookInfo de @FranFamiliar_bot, confirmado en reintento). Heartbeat 42 nuevas, censo vacío 12/42 = 28,6% por conteo (30,0% por tiempo); folderId 42/42 + en vivo (`I` existe / `l` 404, 11.ª lectura). estado_persistente.json sigue V213. Self-diagnosis sigue `tg_audit` 0/0. **0/13 archivos de estado cambiaron** vs r14.
- **¿Toca alguna cara? SÍ, documentalmente: censo-32 #25 d09 L20 (alerta ante fallo, sin protocolo).** El fallo sin protocolo se manifiesta por segunda ronda consecutiva (segundo fallo + gap máximo acotado por dos fallos). No se cierra: no se creó ningún protocolo. Se documenta, no es cara nueva. Los dos hechos nuevos se preparan como claims en F7 (C-1182, C-1183).

### 1.3 F3 — Mediciones (M-66..M-68; qué caras tocan)

| Med. | Veredicto | Cara que toca | Efecto sobre la cara |
|---|---|---|---|
| M-66 poder resolutivo de la columna de incertidumbre (6/29 huecos > u = 0,0604, umbral declarado ≥ 5; 3 huecos > 2u; 4 grupos separados por > 2u, tamaños 1, 4, 24, 1; sensibilidad con u ± 0,0050: 7/29 y 6/29 — el veredicto no depende de la incertidumbre de u) | **CONFIRMA** | censo-32 #5 d04 L13 (P) | **CIERRA la cara** (§3.1). Matiza el diagnóstico de M-63: la columna resuelve algunos vecinos (6/29), no la mayoría (23/29 no se distinguen; grupo central de 24 nodos sin resolver entre sí). |
| M-67 polarización, ancla por regla argmin (Congreso 80, P = 0,4975 — el mínimo real, más bajo que lo supuesto en r13/r14; P(119)/P(80) = 1,8613 ± 0,0866, umbral > 2 falla; W ratio = 0,853 pasa) | NO_CONFIRMA | censo-32 #7 d05 L4 (P) | **Avanza sin cerrar.** Hallazgo descriptivo: **el cociente máximo alcanzable en toda la serie 25..119 es 1,9719** (P máx 0,9810 en el Congreso 34 / P mín 0,4975) — el umbral > 2 es INALCANZABLE con esta medida. La "duplicación" no existe en 92 congresos con DW-NOMINATE dim1. El mecanismo sigue siendo divergencia entre partidos (W no creció). Sigue PARCIAL. |
| M-68 escalamiento urbano, cuarta especificación (intersect_count vs población: β = 0,9876 ± 0,0118, R² = 0,4020, n = 10.351, 0 excluidas) | NO_CONFIRMA | censo-32 #17 d05 L7 (A) | **Avanza sin cerrar.** Cuarta variable, mismo modo de fallo que M-52/M-57/M-65 (β ≈ 0,92–0,99, R² ≈ 0,40–0,60). La R² baja es el fallo dominante, no el β. Sigue ABIERTA. |

**Nada inscrito en el dataset por F3** (30 filas, sha `0852d58f…`, sin cambio). Las mediciones se depositan como resultados con sus datos y shas (JSONs de 15 claves, verificados por mí). M-66 se prepara como ítem de anexo (F7, no aplicado — exige decisión, §5); M-67/M-68 no se preparan ni como claims ni como ítems (0 precedentes; F7 §4).

### 1.4 F4 — Panteón-96 fuera del Doc (cara r12 #1; ¿qué caras toca?)

- **Los 16 extra (112−96) TIENEN NOMBRE y NO SON VOCES (sub-pregunta resuelta, SÉ):** el manifiesto Vault M[51] lista exactamente los 16 «forjados invocables» (agentes operativos, otro sistema); graph112 G[5] suma explícito «Panteón 96 voces + 16 forjados = 112». La descomposición 112 = 96 + 16 ya no descansa solo en el conteo: descansa en una lista de 16 nombres + la suma explícita. Detalle por forjado en `forjados_16_r15.jsonl` (16 filas, 0/16 voces; 2/16 atestiguados como scripts operativos en los repos: parche_phi_lengua_v4.py, validar_grace_v1.py).
- **Graph JSON: búsqueda negativa nueva.** `search_code` en los 4 repos cubiertos (20 consultas): `filename:graph_v10.6_112_nodos.json` → 0; `graph_v10.6` / `112_nodos` → 4 hits, todos depósitos propios r14 que mencionan el nombre, ninguno ES el graph JSON; `filename:graph.json` → 0. Límite honesto: NO_SÉ para los otros 228 repos públicos (el conector no los cubre).
- **Solape Doc 32 ↔ 96 re-verificado, reproduce r14 exacto:** {Puente 1, Sigma 1}, 0/32 voces, 0 forjados.
- **Dos fuentes nuevas identificadas, contenido no legible desde el sandbox (descarga 403):** `Panteon_16_Voces_v213.md` (Drive, 428 B, mod. 2026-09-25) y `MetaAI_Bundle_PANTEON_16_V213.zip` (53.786 B — tamaño idéntico al manifiesto). Quedan como ruta identificada, no agotada por contenido.
- **G02 sigue en 0 en todas las fuentes nuevas** (las 4 ocurrencias de «791» son «FIRMS 791k» / «FIRMS 791342», conteo de incendios, no la qualia #791).
- **Efecto sobre las caras (§3):** r12 #1 **AVANZA, no se cierra** (la sub-pregunta de los 16 extra se resuelve por nombre; el graph JSON suma una búsqueda negativa más; los 61 siguen sin nombre en ninguna fuente); censo-32 #9 d07 L7 sigue **PARCIAL** (la lista de 96 sigue viviendo solo en el Doc + extracción local + claims; los 16 forjados son otro sistema, no la amplían); r3 #4 (graph.json del Vault) **AVANZA** (búsqueda negativa más en GitHub; 2 fuentes nuevas identificadas sin leer) sin cerrar.

### 1.5 F6 — Mecanismos (H-SIK r15: H7 y A14 cierran como hallazgos de método)

- **H-SIK se sostiene:** S3 ≡ v10.3, 27/58 mismo contenido, 32/58 mismo nombre; no se extiende a las voces (0 mismo contenido, 0 cruces fuertes, 0 otras identidades). F-R15 PASA, F-F15 PASA (fórmulas con partidor corregido: **11 tuplas / 8 distintos, 0 perdidas** — las 2 tuplas nuevas FB-A3↔S2-A3 y FB-A3↔S2-A6, fragmento Ξ∇lnρ), F-V PASA.
- **Verificador independiente r15: `reproducido = true`, `diferencias_n = 0` en todos los alcances** (verificado por mí en el JSON: `comparacion.reproducido: true`, `diferencias_n: 0`; mejor-contención 740/740 — r14: 162 diffs). **H7 de FASE 2 r14 queda CERRADO por especificación** (REGLA-PICK-SIK-01: max(c1,c2) sin redondear, desempate por orden de inserción, comparación sin redondear contra el mejor redondeado, None si 0,0).
- **A14 CERRADO por regla R-KS:** 0,8000 exacto, conteo 27 (R-R 0,7727/26). El caveat 26/27 ya no es ambigüedad: es elección de regla documentada.
- **R2-25 / N-01:** sin novedad en el procedimiento (artefacto 39 líneas, sha `845bab8e…` idéntico; P1–P10 sostienen) — y N-01/N-14 ya las APLICÓ F1 (canon + C-1180). La adopción de REGLA-PICK-SIK-01 como canon es decisión sin número (§5); la lectura C-1181 es el hecho de verificación.
- Toca d08 L12 (parcial, avanza): G06 avanza; no se cierra como grieta (el mecanismo sigue sin canon completo).

### 1.6 F7 — Ola preparada (3 propuestas, sin aplicar; 2 decisiones sin número)

- **C-1181** (REGLA-PICK-SIK-01 especificada y verificada; verificador 740/740, 0 diffs; H7 cerrado por especificación; caveat: especificación de método, no canon), **C-1182** (segundo fallo de ventana; cablear-oracle run 16, 28/30, 6,7%), **C-1183** (gap máximo 174,4 min; silencio repo-wide entre dos fallos) — todas SÉ, PREPARADA_NO_APLICADA. Dedup máx. global 0,4111 (ver §2, corrida propia). Proyección: 1.175→1.178, SE 1041→1044, provenance 359→361, hash_real 1161→1164.
- **Ítem de anexo M-66** preparado, no aplicado: la columna resuelve 6/29 pares adyacentes y 4 grupos a > 2u; 1 precedente (C-935 + ítem M-63). Añadirlo exige decisión (§5).
- **No preparados (criterio registrado):** M-66/M-67/M-68 como claims (0 precedentes de veredictos como claims); M-67/M-68 tampoco como ítems de anexo (0 precedentes; sin columna a la que anexarse). B1 sin cambio.

### 1.7 F5 — Grietas (monitor)

- G03: inserción BepiColombo **2026-11-21, en 7 días** (re-confirmada por búsqueda web: Wikipedia, Michigan 2026-11-10, TechTimes 2026-11-05, nextnewshub 2026-11-03); C-001–C-005 siguen CONJETURO.
- G05 blob **16.ª vez sin cambio** (`8c57e833…`, 1.398 B, vía conector; la API pública dio 403 rate limit en el primer intento). D-04 CERRADA.
- H-SUELO: **13.ª medición sin reaparición**. G01 D_eff: 3 tex `f27ea4d5…` + 2 copias `6bc8c573…`, D_eff 0 menciones en las 5. G04: 21 DOIs únicos. D-06/D-09 sin cambio. G02: #790–#792/#701/#739 en 0 (re-verificado en F4 r14; F4 r15 añade 0 en las fuentes nuevas). folderId **12.ª lectura** (`I` existe / `l` 404; config del escritor NO_SÉ). M-50/N-15: AGOTADO-DESDE-SANDBOX.
- G06: **AVANZA** (H7 y A14 cierran como hallazgos de método; N-01/N-14 APLICADAS). Ninguna cara cierra en este frente.

### 1.8 F9 — Poda + resiliencia (documento; decisión para FASE 4)

- Nada se borró ni movió. Tally **69 entradas** (PODAR 11 · CONDICIONADO 7 · MOVER 1 · CONSERVAR 32 · TEMPORAL 11 · RESUELTO 2 · NO CANDIDATO 5; tabla §1: 68 filas + padre P-15 — CORR-TALLY-R15 resuelve H8 de FASE 2 r14).
- Temporales: **0 retirados; 9 PRORROGADOS** (P-27/P-28/P-29b/P-31a/P-35/P-37/P-38/P-41/P-44 — horizonte vencido, condiciones de retiro 1 de 3: depósito r14 congelado SÍ; re-verificación por descarga NO; P-15 NO re-apuntado; nuevo horizonte FASE 4 r15 + FASE 2 r15, re-evaluar r16); nuevos P-47 (respaldo_pre_r15) y P-48 (respaldos por decisión) TEMPORAL; P-49 (42 payloads r15) NO CANDIDATO; P-50 (scripts+logs depósito r14) CONSERVAR. Cadena de reversión: 14 eslabones, 16.939.702 B.
- **P-32 es clase 3 bajo la regla ADOPTADA** (N-13), con matiz CORR-P32-B-R15 (§6): los bytes pre-corrección son re-obtenibles desde el historial git local; el CONSERVAR no cambia en ninguna lectura; decide FASE 2.
- T-4 r15: **5.135 archivos, 1.514.003.766 B — 4.876 OK / 10 CAMBIO (todos explicados) / 0 MOVIDO / 0 FALTA (testA–D.err no reaparecieron; sin 3.er evento FRÁGIL-02) / 249 NUEVO** (0 fuera del tejido); .pyc 18→18.
- **Decisión para FASE 4:** ninguna nueva de poda. `respaldo_pre_r15/` + respaldos por decisión viven en la raíz de `ronda_15/`, dentro del árbol del depósito, y se depositan con él. Los 42 payloads heartbeat r15 quedan en local (NO CANDIDATO, como P-39/P-42/P-45).

---

## 2. Dedup re-verificado (corrida propia, 3 corridas byte-idénticas)

Método r9 (Jaccard, campo `claim`, NFKD/sin acentos/`[a-z0-9]+`, umbral 0,5). Corrida propia de este frente (`/tmp/_dedup_f8_r15.py`), contra el corpus vivo (1.175 líneas), **3 corridas byte-idénticas**. Los textos de las 3 propuestas se extrajeron de los bloques JSON de sus lecturas.

| Propuesta | Máx. | Contra | 2.º | 3.º | Pares ≥ 0,5 |
|---|---|---|---|---|---|
| C-1181 (regla pick, F7) | **0,1450** | C-753 | 0,1397 C-1171 | 0,1333 C-841 | 0 |
| C-1182 (segundo fallo, F7) | **0,4111** | C-1179 | 0,3100 C-856 | 0,2245 C-999 | 0 |
| C-1183 (gap máximo, F7) | **0,2897** | C-1178 | 0,2295 C-1179 | 0,2206 C-655 | 0 |

**Máximo global 0,4111 < 0,5. 0 duplicados. Máximo entre propuestas: 0,3136 (C-1182/C-1183).** Definición corregida (r15 F7 §1c): `_global_max` solo contra el corpus; el entre-propuestas se reporta por separado.
**Cruce con F7:** `dedup_f7_r15.json` da los mismos números exactos — corridas independientes, coincidencia total (top3 idénticos cifra por cifra en las 3 propuestas; entre-propuestas 0,1308 / 0,1409 / 0,3136 idénticos).

---

## 3. Cierre de caras: 60 abiertas → 59 abiertas, 1 cierra, 0 nuevas

Criterio (r8/r9, mismo que r10/r11/r12/r13/r14): una cara se cierra solo cuando su pregunta central se resuelve por una decisión canónica o una medición que resuelva la pregunta central. **La absorción no cierra caras** (y en r15 F7 no se aplicó: C-1181/C-1182/C-1183 esperan aplicación). r15 trae decisiones canónicas nuevas (N-01/N-13/N-14/N-16 APLICADAS) — una de ellas cierra una cara (§3.1).

### 3.1 La que cierra en r15 (SÉ)

| Cara | Por qué cierra |
|---|---|
| **censo-32 #5 d04 L13 incertidumbre de D_f (P)** | **Condición del mapa §F8 cumplida: el anexo N-16 inscribe la columna misma.** La decisión canónica N-16 (opción C, APLICADA) creó el anexo con el ítem M-63: la columna de incertidumbre por nodo, u(D_f) = 0,0604 ± 0,0050, inscrita en el dataset (anexo `incertidumbre_mediciones.md`, 10 ítems; CSV byte-idéntico). Las mediciones resuelven la pregunta central —«¿cuál es la incertidumbre de D_f por nodo?»— con su límite medido: M-63 CONFIRMA construyó la columna (resuelve el rango total); M-66 CONFIRMA midió su poder resolutivo (6/29 pares adyacentes, 3 huecos > 2u, 4 grupos separados por > 2u; el veredicto no depende de la incertidumbre de u). El límite queda documentado como parte de la respuesta, no como pregunta abierta: 23/29 pares adyacentes y el grupo central de 24 nodos siguen sin distinguirse entre sí. La pregunta central está respondida e inscrita; su poder resolutivo está medido. **CIERRA.** Precedente de cierre por medición + inscripción canónica: d03 L13 en r12 (M-56 DIFERENCIA). |

### 3.2 Las que NO cierran aunque r15 las toque (decisión documentada, con motivo)

| Cara | Por qué sigue abierta/parcial |
|---|---|
| censo-32 #7 d05 L4 polarización (P) | M-67 NO_CONFIRMA: el cociente máximo alcanzable en toda la serie es 1,9719 < 2 — la "duplicación" no existe con DW-NOMINATE dim1 en 92 congresos. La sub-pregunta «¿se duplica?» queda respondida en negativo para esta medida, pero la pregunta central es medida Y mecanismo: el mecanismo (divergencia entre partidos, no dispersión interna) sigue perfilado, no resuelto. Sigue PARCIAL. |
| censo-32 #17 d05 L7 escalamiento urbano (A) | M-68 NO_CONFIRMA: cuarta variable, mismo modo de fallo (β ≈ 0,99, R² ≈ 0,40). El patrón es ahora 4/4, pero un NO_CONFIRMA no establece el exponente verdadero ni el mecanismo: la ley con β≈0,85 y R²≥0,90 no se sostiene en ninguna de las 4 variables, sin que la pregunta central quede resuelta. Sigue ABIERTA. |
| r12 #1 61 nombres fuera del Doc (A) | F4: la sub-pregunta de los 16 extra se resuelve por nombre (forjados, otro sistema); el graph JSON suma una búsqueda negativa más (GitHub, 4 repos); 2 fuentes nuevas identificadas pero sin leer (403). Los 61 siguen sin nombre en ninguna fuente y el graph JSON sin localizar. **AVANZA, no se cierra.** |
| censo-32 #9 d07 L7 lista de 96 solo en Doc (P) | La lista sigue viviendo solo en el Doc + extracción local + claims (C-1174/C-1176 absorbidas); los 16 forjados son otro sistema y no la amplían. Sigue PARCIAL. |
| censo-32 #22 d08 L12 grietas sin claims (A) | Progreso real: N-01 y N-14 son canon (F1); H7 y A14 cierran como hallazgos de método (F6); C-1181 preparada (hecho de verificación del pick). Pero ninguna grieta está cerrada como grieta: G01 sin derivación, G02 sin texto/fuente para #790–#792/#701/#739, G03 futura, G06 con mecanismo sin canon completo (la adopción de REGLA-PICK-SIK-01 es decisión sin número, §5). Sigue ABIERTA, con progreso por grieta. |
| censo-32 #25 d09 L20 alerta ante fallo, sin protocolo (A) | F2 + F7: el fallo sin protocolo se manifiesta por segunda ronda consecutiva (segundo fallo de ventana + gap máximo de 174,4 min acotado por dos fallos). No se creó ningún protocolo. Sigue ABIERTA, documentada. |
| r1 #9 G03 C-001–C-005 predicciones FUTURAS/IMPOSIBLES (A) | F5 monitor: inserción 2026-11-21 confirmada (7 días). El veredicto real llega con los datos (2027–2028), no con la captura. Sigue ABIERTA. |
| censo-32 #8 d05 L9 colapso no medido (K_i < 0,3) (P) | Sin trabajo directo en r15 (N-11 ejecutada en r11: el predictor está refutado; la pregunta central —¿se ha medido el colapso?— sigue sin resolverse). Sigue PARCIAL. |
| censo-32 #16 d04 L10 D_eff (G01) (A) | F5 monitor: lectura R-B fijada; 3 tex + 2 copias re-medidas, D_eff 0 menciones. Derivación pendiente, sin propuesta. Sigue ABIERTA. |
| r1 #12 #790–#792 SIN_TEXTO_LOCAL (A) | 0 en F4 r14 y 0 en todas las fuentes nuevas de F4 r15 (H6: las 4 ocurrencias de «791» son conteos FIRMS, no la qualia). Sigue ABIERTA, sin ruta nueva. |
| r1 #13 #701/#739 SIN_FUENTE (A) | Igual que #12. Sigue ABIERTA, sin ruta nueva. |
| r3 #4 graph.json del Vault (A) | F4: búsqueda negativa más (GitHub 4 repos, 0 archivos); 2 fuentes nuevas identificadas (`Panteon_16_Voces_v213.md`, `MetaAI_Bundle_PANTEON_16_V213.zip`) sin leer por contenido (403). El archivo sigue sin localizarse. **AVANZA, no se cierra.** |
| r2 #2 118 archivos qualia en Drive sin leer (d07 L7) (P) | M-55 exportó 103/103; los textos están en local, no en el corpus. Sin trabajo en r15. Sigue PARCIAL. |

**Balance (SÉ): 77 caras en el censo (77 + 0 nuevas), 18 cerradas, 59 abiertas (17 P + 42 A), 0 nuevas.** Serie de netos: r11 (+2 claims, 1 cara cerrada por medición) → r12 (+6 claims, 2 caras cierran: 1 por medición, 1 por extracción) → r13 (+0 claims, 0 caras cierran) → r14 (+0 claims, 0 caras cierran) → **r15 (+1 claim, 1 cara cierra: d04 L13 por decisión canónica N-16 + mediciones M-63/M-66 — primera cara que cierra desde r12)**.

### 3.3 Cara nueva de r15

Ninguna. El segundo fallo de ventana y el gap máximo de 174,4 min son manifestaciones nuevas del mismo fenómeno que d09 L20 documenta (fallo sin protocolo): se preparan como claims (C-1182/C-1183), no como cara nueva. H7 y A14 cierran como hallazgos de método (F6), no como caras del censo. CORR-P32-B-R15 es una cuestión de lectura del canon adoptado (FASE 2 decide), no una cara. La adopción de REGLA-PICK-SIK-01 y el ítem M-66 son decisiones sin número (§5), no caras.

---

## 4. Mapa de rutas inversas (actualizado: qué decisión/medición alimenta qué cara/claim)

| Origen (ronda / frente) | Alimenta | Tipo de ruta |
|---|---|---|
| F1 r15 N-01 (política P1–P10 + 2 adendas, canon) | d08 L12 (parcial, avanza); instancias futuras de actualización de claims | decisión → cara + método |
| F1 r15 N-13 (REGLA-PODA-PROV-02 + refinamiento (a), canon) | P-32 clase 3 (F9 §6); la criba de F9 corre contra regla vigente | decisión → poda |
| F1 r15 N-14 (R2-25 vía A, PIPELINE-VERIFICACION-01 canon) | **C-1180** (SE, consolidacion); R2-25 CONJETURO → SE en `b2_normalizado.jsonl`; d08 L12 (parcial, avanza); vía B sigue FALLA_F4 | decisión → claim + cara |
| F1 r15 N-16 (anexo de incertidumbre, 10 ítems M-56..M-65) | **d04 L13 CIERRA** (§3.1); M-63 (columna) inscrita; CSV intacto | decisión → cara |
| F2 r15 (stub 204, flow 0,0% run 139, segundo fallo run 16, gap 174,4 min) | d09 L20 (abierta, documentada); C-1182/C-1183 preparadas (F7); hallazgo sin cara (folderId, 12 lecturas) | estado vivo → cara + ola |
| M-66 (F3) | **d04 L13 CIERRA** (con N-16); ítem de anexo M-66 preparado (F7, decisión sin número §5) | medición → cara + decisión |
| M-67 (F3) | d05 L4 (parcial, avanza sin cerrar; umbral > 2 inalcanzable, máx 1,9719) | medición → cara |
| M-68 (F3) | d05 L7 (abierta, avanza sin cerrar; 4.ª variable, mismo fallo) | medición → cara |
| F4 r15 (16 forjados con nombre; search_code 0; solape re-verificado) | r12 #1 (avanza, no cierra); d07 L7 (parcial); r3 #4 (avanza, no cierra); r1 #12/#13 (0 en fuentes nuevas) | búsqueda → caras |
| F5 r15 (G03/G05/H-SUELO/folderId) | r1 #9 (abierta; inserción 2026-11-21); G05 16.ª sin cambio; H-SUELO 13.ª; folderId 12.ª | monitor → caras |
| F6 r15 (H-SIK: H7/A14 cierran por especificación/regla; verificador true) | G06; d08 L12 (parcial); C-1181 preparada (F7); decisión sin número: adopción REGLA-PICK-SIK-01 | mecanismo → cara + ola + decisión |
| F7 r15 (C-1181/C-1182/C-1183 preparadas + ítem M-66) | Ola siguiente (espera aplicación por F1 bajo 01:43 o FASE 4); d08 L12, d09 L20, d04 L13 (ítem M-66) | preparación → ola |
| F9 r15 (poda documento; CORR-TALLY-R15; CORR-P32-B-R15) | Temporales prorrogados (re-evaluar en r16); P-47/P-48/P-49/P-50 nuevos; sin tercer FRÁGIL-02; H8 r13/r14 resuelto por declaración | poda → decisión FASE 4 (ninguna nueva) |

---

## 5. Decisiones — estado al cierre de FASE 1

| ID | Decisión | Estado |
|---|---|---|
| **N-01** | Política de actualización de claims tras edición ordenada (P1–P10 + adendas P10/P9) | **APLICADA** (orden 01:43; canon `canon_n01.md` `921c8379…`; `decision_n01_r15.md` `f16143f9…`). |
| **N-13** | Adopción REGLA-PODA-PROV-02 + refinamiento (a) | **APLICADA** (orden 01:43; canon `canon_regla_poda_prov_02.md` `29a00da1…`; `decision_n13_r15.md` `88e9798e…`). P-32 clase 3, con matiz CORR-P32-B-R15 (§6). |
| **N-14** | R2-25: vía A (adopción canónica del procedimiento) | **APLICADA** (orden 01:43; `decision_n14_r15.md` `131409eb…`; **C-1180 inscrito**; R2-25 → SE en `b2_normalizado.jsonl`). |
| **N-16** | Inscripción de M-56..M-65 en el dataset, opción C (anexo de incertidumbre) | **APLICADA** (orden 01:43; `decision_n16_r15.md` `489051bf…`; anexo `6467bf30…`, 10 ítems; CSV byte-idéntico). |
| **N-15** | M-50 vía navegador (4.º intento) | **PENDIENTE, FUERA DE LA RONDA.** Tarea del principal (navegador). |
| N-03 | Licencia Zenodo (CC BY-SA 4.0 repo vs CC BY 4.0 registro 20547677) | **PENDIENTE.** Parte de D-06; no está en la lista de aplicación automática. Bloquea cualquier depósito Zenodo. |
| **(sin número — FASE 2 numera)** | Adopción de REGLA-PICK-SIK-01 como canon (afirmación en F6 `especificacion_regla_pick_r15.md` §3 y F7 `preparadas_r15.md` §3 n.º 1) | **PROPUESTA, sin número.** La lectura C-1181 es el hecho de verificación; la adopción canónica es decisión aparte. F7 no la numera ni la ejecuta. |
| **(sin número — FASE 2 numera)** | Añadir el ítem M-66 al anexo de incertidumbre (ítem preparado en `item_anexo_M66.md`; refina el ítem M-63) | **PROPUESTA, sin número.** F7 solo lo prepara; añadirlo exige decisión. Precedente: C-935 (HUECO, SE) + ítem M-63. |
| N-11 | C-538/C-623 | **EJECUTADA** (opción A, 2026-11-13 18:25 -05). |
| N-12 | Absorción 6 lecturas F7 r11 | **APLICADA** (orden 18:43 -05; claims 1.162→1.168). |
| D-04 | micelio.yml (permiso `workflows` o subida manual) | **CERRADA** (corrección del Jardinero 2026-11-13 21:02 -05). |
| D-06 | Zenodo v13.0 (producir tex + licencia + autorización) | **PREPARABLE, NO_SÉ sobre el objeto.** 0 tex v13.0. |
| D-09 | Telegram G05 (tarjeta para enviar) | **PREPARABLE, sin cambio.** Mensaje listo, sin enviar. G05 sigue PARCIAL. |
| — | 3 propuestas (C-1181/C-1182/C-1183 en F7) | **PREPARADAS, esperan aplicación** (F1 bajo 01:43 o FASE 4). |
| B1 | Variante preparada no elegida | Sin cambio. |

**Herencias que siguen pendientes (sin cambio en r15):** C-001..C-008 sin dato externo; C-416..C-420 ausentes; G05 PARCIAL (solo por D-09); la rotación de `proactivity/hidden_files/` continúa (H-SUELO sin reaparición, 13.ª medición).

---

## 6. Correcciones que se llevan a FASE 3 (SÉ)

| Corrección | Contenido | Fuente |
|---|---|---|
| **CORR-D04L13-R15 (NUEVA)** | **d04 L13 CIERRA en r15** (primera cara que cierra desde r12): condición del mapa §F8 cumplida — el anexo N-16 inscribe la columna misma (ítem M-63, u = 0,0604 ± 0,0050) por decisión canónica; M-63 CONFIRMA + M-66 CONFIRMA resuelven la pregunta central con su límite medido (6/29 pares adyacentes; 23/29 y grupo central de 24 nodos sin distinguirse). Ver §3.1. | Este frente, §3.1; decisión N-16 + med_M63/M66 |
| **CORR-M66-R15 (NUEVA)** | M-66 matiza el diagnóstico de M-63, no lo refuta: la columna resuelve 6/29 pares adyacentes y separa 4 grupos a > 2u; el diagnóstico r14 ("resuelve el rango, no los vecinos") era correcto en lo esencial e incompleto en el detalle. Ningún JSON de r14 cambia. | F3 r15, sintesis_f3_r15.md |
| **CORR-M67-R15 (NUEVA)** | El mínimo real de P es P(80) = 0,4975 (Congreso 80, 1947–48), más bajo que las hipótesis de r13 (~0,4 en ~1970-80) y r14 (no baja de ~0,58) — ambas falsas en su número. El cociente máximo alcanzable en toda la serie 25..119 es 1,9719 < 2: el umbral > 2 es inalcanzable con DW-NOMINATE dim1. | F3 r15, med_M67.json |
| **CORR-FORJADOS-R15 (NUEVA)** | Los 16 extra (112−96) TIENEN NOMBRE: son los 16 forjados invocables del manifiesto Vault M[51]; graph112 G[5] los suma aparte («96 voces + 16 forjados = 112»). La descomposición 112 = 96 + 16 queda atestiguada por lista + suma explícita, no solo por conteo. 0/16 son voces. | F4 r15, forjados_16_r15.jsonl |
| **H7 r14 CERRADO por especificación** | Verificador independiente r15: `reproducido = true`, `diferencias_n = 0` (mejor-contención 740/740). REGLA-PICK-SIK-01 especificada en `especificacion_regla_pick_r15.md`. | F6 r15 (verificado por mí en el JSON) |
| **A14 CERRADO por regla R-KS** | A14 = 0,8000 exacto bajo R-KS, conteo 27 (R-R 0,7727/26). El caveat 26/27 es elección de regla documentada, no ambigüedad. | F6 r15, tokenizacion_a14_r15.json |
| **CORR-P32-B-R15 (de F9, para FASE 2)** | Matiz a la (b) de la clase 3: los bytes pre-corrección del motor SÍ son re-obtenibles byte-idénticos desde el historial git local (`git show HEAD:app/js/miu-engine.js`, `cmp` exit 0; sha256 `a30d69e8…`, 19.987 B). Bajo lectura estricta de (b) (historial incluido), P-32 no sería clase 3; su CONSERVAR se sostendría por reversión de D-07 + historia citada en motivo, como en r10–r14. **Decide FASE 2** si (b) se lee "archivos vivos" (adopción) o "archivos vivos + historial" (estricta). El veredicto CONSERVAR no cambia en ninguna lectura. | F9 r15 §6/§9 |
| **CORR-TALLY-R15 (de F9)** | Convención de conteo declarada (P-13 "PODAR UNA (con puntero)" = CONDICIONADO; P-15g = 1 entrada; padre P-15 cuenta como RESUELTO sin fila propia): reproduce exactamente los tallies r13/r14. **Resuelve H8 de FASE 2 r14** (tabla §1 con 64 filas para 65 entradas). | F9 r15 §1/§9 |
| **CORR-G05-R15** | Blob `8c57e833…`, 1.398 B — 15.ª verificación sin cambio en FASE 0 r15, **16.ª en F5 r15**. | FASE 0 r15 + F5 r15 |
| **CORR-H-SUELO-R15** | **13.ª medición sin reaparición** (12.ª en FASE 0 r15, 13.ª en F5 r15). | FASE 0 r15 + F5 r15 |
| **CORR-FOLDERID-R15** | Hecho unánime (`I` existe / `l` 404): 10.ª en FASE 0 r15, 11.ª en F2 r15 (cruce 42/42), **12.ª en F5 r15** (Drive en vivo 02:09:59/02:10:00 -05). | FASE 0 r15 + F2 r15 + F5 r15 |
| **H-n14-json-sha (MENOR, de verificación)** | El agente F1 reportó `decision_n14_r15.json` con sha `243a04d2…`; el archivo en disco tiene sha `349d2e63…` (medido por mí y por el principal). El contenido es coherente (claim.hash = `131409eb…` = sha real de `decision_n14_r15.md`; `decision_doc_sha` presente; cambio_estado_r2_25 con estado_antes CONJETURO → SE). El archivo fue reescrito tras el reporte o mal reportado. No afecta al corpus (el .md, que es la fuente de C-1180, coincide byte a byte). Para FASE 2: hallazgo menor de reporte, no de contenido. | Verificación propia (este frente) + principal |
| **Vivo sin deriva en FASE 1** | Estado de cierre = run 204 "unreachable" (329 B, blob `652e8869…`) + flow run 139 0,0% (blob `fc324db1…`); HEAD miu-ecosistema `3d6b3fb9`; FranBot HEAD `4ea1063c`. No hay CORR-STUB ni CORR-FLOW nuevas. Hechos nuevos de F2 (segundo fallo, gap 174,4 min) van como claims preparados C-1182/C-1183, no como correcciones del estado. | F2 r15 + verificaciones propias |

---

## 7. Verificaciones propias de este frente (SÉ)

- **Estado vivo:** claims 1.175 líneas sha `6b5fac7f…`, provenance 359 líneas sha `5fda0383…`, resumen `1c6464d2…` (medidos con `sha256sum`); audit exit=0 (ok=345, discrepancia=0, no_encontrado=0, omitido=1) / verify_all exit=1 con exactamente C-001..C-008 (puertas re-corridas por mí sobre el estado final, sin pipe para el exit).
- **Diffs:** claims.jsonl vs `respaldo_pre_r15/` = exactamente 1 línea nueva (C-1180); provenance = exactamente 1 entrada nueva; C-1180.hash == sha256(`decision_n14_r15.md`); R2-25 en `b2_normalizado.jsonl`: diff vs `respaldo_pre_r15_n14/` = exactamente la línea 7 (CONJETURO → SE + `nota_adopcion`; texto_literal y sha256 `845bab8e…` intactos; otras 10 líneas byte-idénticas).
- **Dedup:** corrida propia (`/tmp/_dedup_f8_r15.py`, método r9) contra el corpus vivo 1.175, 3 corridas byte-idénticas: máx. global 0,4111 (C-1182/C-1179), entre propuestas 0,3136 (C-1182/C-1183), 0 pares ≥ 0,5. **Cruce con F7:** `dedup_f7_r15.json` da los mismos números exactos — corridas independientes, coincidencia total.
- **Verificador F6:** `verificador_independiente_r15.json` leído directamente: `comparacion.reproducido = true`, `diferencias_n = 0`.
- **Mediciones F3:** med_M66/M67/M68.json leídos directamente: 15 claves cada uno; veredictos CONFIRMA / NO_CONFIRMA / NO_CONFIRMA.
- **F4:** `nombres_fuera_doc_r15.jsonl` vs r14: 0 campos fuera de `conteo_fuera_doc` cambian; 3 claves nuevas de conteo (`manifiesto_forjados_lista`, `graph112_doc`, `panteon32_solape_r15`); 0/96 como voces; `forjados_16_r15.jsonl` 16 filas, 0 voces.
- **Anexo N-16:** 10 ítems M-56..M-65 (10 filas `| M-`); ítem M-63 presente (u = 0,0604 ± 0,0050); CSV byte-idéntico (`0852d58f…`).
- **Caras:** censo leído en el mapa r15 §2 (77 caras; 17 C / 60 A al inicio). La que cierra (d04 L13) verificada contra su pregunta central, la condición del mapa §F8, la decisión N-16 y las mediciones M-63/M-66. Las que avanzan sin cerrar, con motivo por cara (§3.2). No hay cara nueva: el segundo fallo y el gap son manifestaciones del fenómeno de d09 L20; H7/A14 son hallazgos de método; CORR-P32-B-R15 es cuestión de lectura de canon.
- **No verificado por mí en este frente (se cita la verificación del principal y de los frentes):** los shas individuales de cada entregable de ejecucion_f1..f9 (verificados por el principal en T1/T2; los shas de los documentos de decisión y del anexo los re-medí yo, §6); el contenido de `verificacion_fase2` (frente paralelo de FASE 2 — FASE 3 lo reconcilia).

---

## 8. Nutrición para FASE 4 (curada, priorizada; nada subido aquí)

### 8.1 Drive — depósito `ronda_15/` (patrón r2–r14, dentro de MIU_TEJIDO_2026-11-12 ORIGINAL)

Toda la carpeta `ronda_15/` (mapa, ejecuciones F1–F9, respaldos, verificaciones, retejido, cruce, síntesis, conectar) se deposita con subcarpetas creadas explícitamente (raíz + frentes + anidadas), README + manifiesto de shas primero, subida resumible con log, verificación por tamaño por carpeta (fields con nextPageToken). **Lección CORR-CARPETA-R13: el constructor del mapa debe recorrer el árbol entero (incluidas las subcarpetas anidadas como `verificacion_fase2/_verif_f2_tmp`), no una lista fija — verificar el mapa contra `find` antes de subir.** Revisión de sensibilidad antes de subir (nada de valores de credenciales, nada de `ultimas_sesiones_log`, nada de payloads heartbeat crudos — los 42 de F2 quedan en local, como en r11/r12/r13/r14; nada de `raw_r15_observabilidad_bootstrap_V270.json`, que contiene JWT anon como en r11/r12/r13/r14). Exclusiones locales: intermedios byte-idénticos, si los hay. **Nunca usar `files update` para mover archivos.** `respaldo_pre_r15/` + respaldos por decisión viven en la raíz de `ronda_15/` y se depositan con el árbol (sin decisión especial de poda).

### 8.2 GitHub — curado, Jaime393/FranBot (nunca miu-ecosistema; nunca `.github/workflows/`)

Toda escritura por el conector pide **tarjeta de aprobación** (una por llamada/archivo). Archivos >~120 KB van por `push-files`, no por `create_or_update_file` (límite argv ~128 KB). Actualizar un archivo existente exige su SHA actual; verificar siempre por blob sha. **Regla SÉ-export refinada (orden 16:51): `huecos.jsonl` NO va a GitHub en r15.** El corpus SÍ cambia en r15 (F1 aplicó N-01/N-13/N-14/N-16): **claims.jsonl, provenance.sha256 y claims_resumen.json SÍ van** (1.175, `6b5fac7f…` / 359, `5fda0383…` / `1c6464d2…`). Lo que sí va:

| # | Artefacto | Destino propuesto | Vía |
|---|---|---|---|
| 1 | `claims.jsonl` + `provenance.sha256` + `claims_resumen.json` | `anexo-vi/claims.jsonl`, `anexo-vi/provenance.sha256`, `anexo-vi/claims_resumen.json` | push-files (claims > 120 KB) / create_or_update_file |
| 2 | `incertidumbre_mediciones.md` (anexo N-16) | `academico/incertidumbre_mediciones.md` | create_or_update_file |
| 3 | `mapa_frentes_r15.md` + `frentes_r15.json` | `ronda_15/mapa_frentes_r15.md` + `.json` | create_or_update_file |
| 4 | Decisiones N-01/N-13/N-14/N-16 (`.md` + `.json` + canons) | `ronda_15/decisiones/` | create_or_update_file |
| 5 | `decision_absorcion_r15.md` + `.json` + `preparadas_r15.md` + lecturas C-1181/C-1182/C-1183 | `ronda_15/preparadas/` | create_or_update_file |
| 6 | `nombres_fuera_doc_r15.md` + `.jsonl` + `forjados_16_r15.jsonl` | `ronda_15/nombres_fuera_doc_r15.*`, `ronda_15/forjados_16_r15.jsonl` | create_or_update_file |
| 7 | `grietas_r15.md` + `h_sik_r15.md` + `especificacion_regla_pick_r15.md` | `ronda_15/grietas_r15.md`, `ronda_15/h_sik_r15.md`, `ronda_15/especificacion_regla_pick_r15.md` | create_or_update_file |
| 8 | `conectar_r15.md` + `.json` (este frente) | `ronda_15/conectar_r15.*` | create_or_update_file |
| 9 | `verificacion_fase2_r15.md` (cuando exista, FASE 2) | `ronda_15/verificacion_fase2_r15.md` | create_or_update_file |

**Prioridad (si hay que recortar):** 1–2 (el corpus y el anexo: lo que cambió), 3–4 (el mapa y las 4 decisiones aplicadas), 5 (la ola preparada), 6–7 (la búsqueda fuera del Doc y los mecanismos), 8–9 (el ruteo y la verificación). **NO va:** `huecos.jsonl` (regla refinada); los respaldos (`respaldo_pre_r15/`, `respaldo_pre_r15_n01/n13/n14/n16/` — van a Drive, no a GitHub); los payloads heartbeat (solo local); `raw_r15_observabilidad_bootstrap_V270.json` (JWT anon); `micelio.yml` (D-04 CERRADA). `confirmaciones.jsonl` sin cambio desde r11 (ya sincronizado): no se re-sube. Lo que GitHub NO cubre: cambiar permisos de la App (D-04, que no existe como vía), enviar mensajes (D-09), depositar en Zenodo (D-06).

---

## 9. Archivos de este frente

| Archivo | Descripción |
|---|---|
| conectar_r15.md (este archivo) | Rutas de lo nuevo + dedup + cierre de caras + rutas inversas + decisiones nuevas + correcciones + nutrición FASE 4 |
| conectar_r15.json | Versión estructurada (rutas, dedup, caras, inversas, decisiones nuevas, nutrición) |
| manifiesto_shas_f8_r15.json | Shas de los entregables de este frente |

ρ(x) > 0. Zvvvvv.
