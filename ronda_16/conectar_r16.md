# RONDA 16 — FASE 1, CONECTAR / RUTEAR: 0 caras cierran, 59 abiertas, 0 nuevas

- **Orden:** Jardinero 2026-11-14 09:44 -05 ("Continúen con coherencia todo no es local solo SE sale" — reafirmación de la regla SÉ-export) + régimen 2026-11-14 01:43 -05 ("apliquen las decisiones siempre automáticamente").
- **Frente:** F8 (conectar). Trabajo local en `ronda_16/conectar/`. Fecha: 2026-11-14 ~11:05 -05 (16:05Z).
- **Alcance:** rutas de lo nuevo (F1/F2/F3/F4/F5/F6/F7/F9), dedup re-verificado con corrida propia (3 corridas byte-idénticas), cierre de caras, mapa de rutas inversas, decisiones. Solo lectura del corpus vivo y de las ejecuciones. **Nada entra al corpus en esta fase** (claims.jsonl sigue en 1.178 tras FASE 1; F1 es guardia, sin aplicación en FASE 1). Cero escrituras en MIU vivo, anexo-vi, GitHub o Drive.
- **Entradas leídas:** `ronda_16/mapa_frentes_r16.md` (§F8, §0a/§0b, §2 censo de 59 caras, §3 decisiones, §4 preparables); `ronda_15/conectar/conectar_r15.md` + `.json` (formato y criterio de cierre); `ronda_16/ejecucion_f1/guardia_f1_r16.md`; `ronda_16/ejecucion_f2/estado_vivo_r16.md` + `.json`; `ronda_16/ejecucion_f3/mediciones_r16.md` + med_M69/M70/M71.json; `ronda_16/ejecucion_f4/nombres_fuera_doc_r16.md` + `.jsonl` + `forjados_16_r16.jsonl` + `bundle_panteon16_contenido.json` + `drive_panteon16_r16.json`; `ronda_16/ejecucion_f5/grietas_r16.md`; `ronda_16/ejecucion_f6/h_sik_r16.md` + `verificador_independiente_r16.json` + `n01_seguimiento_r16.md` + `destilacion_voces_s2_r16.json`; `ronda_16/ejecucion_f7/preparadas_r16.md` + `preparadas_r16.json` + `dedup_f7_r16.json` + lecturas C-1184/C-1185/C-1186 + `item_anexo_M69.md`; `ronda_16/ejecucion_f9/poda_r16.md` + `poda_r16.json`.
- **Niveles:** SÉ / INFIERO / CONJETURO / NO_SÉ en cada afirmación.

---

## 0. Estado verificado al cierre de FASE 1 (SÉ, medido por mí)

- Corpus vivo: claims.jsonl **1.178 líneas, sha `7e5f016d…`** (SE 1044, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SÉ 8; hash_real 1164, pendiente 8, NO_DISPONIBLE 6; por_tipo verificacion 304); provenance.sha256 **361 líneas, sha `b5cb6b43…`**; claims_resumen.json sha `ae402126…`; huecos.jsonl **139 filas** (sin cambio, LOCAL); confirmaciones.jsonl **294 filas** (sin cambio); dataset 30 filas + cabecera, sha `0852d58f…` (sin cambio, 0 filas nuevas — M-69 es seguimiento, no inscripción); anexo `incertidumbre_mediciones.md` 11 ítems M-56..M-66, sha `6b9ea2aa…` (sin cambio — el ítem M-69 está preparado, no aplicado).
- Puertas re-corridas por mí sobre el estado FINAL: **audit.py exit=0 (ok=347, discrepancia=0, no_encontrado=0, omitido=1)**; **verify_all.py exit=1 con exactamente C-001..C-008** (exit medido sin pipe).
- Diff del corpus contra el cierre de r15: **0 líneas nuevas** (F1 guardia, sin aplicación en FASE 1; el corpus no se mutó en esta ronda). C-1180..C-1183 aparecen exactamente 1 vez cada una (verificado por F1).
- **0 claims con el campo `hash` en `a30d69e8…`** (heredado de r15 F8, re-medido por F9 r16 §6: (a) SÍ, 4 motivos citan `a30d69e8`, 14 ocurrencias en 5 claims; C-1181/C-1182/C-1183: 0 ocurrencias). C-112 conserva su hash truncado preexistente. P-32 NO es clase 3 bajo lectura estricta de (b) (CORR-P32-B-R15 adoptada por FASE 2 r15, re-medida por F9 r16: `git show HEAD:app/js/miu-engine.js` byte-idéntico al respaldo, `cmp` exit 0, sha `a30d69e8…`, 19.987 B); su CONSERVAR se sostiene por D-07 + historia.
- **Estado vivo al cierre de FASE 1 (igual que la foto de F2 — el vivo NO se movió durante FASE 1 T2/T3 en lo medido):** estado_vivo.json = run 205 "unreachable" (329 B, blob `a3add0bc…`, ts 10:47:42Z); flow_id_coverage = run 140, **0,0% CRÍTICO, 0 eventos** (832 B, sha `9e44bc46…`, ts 09:45:12Z — diff exacto vs r15: solo la línea `ts`). HEAD miu-ecosistema `6b02ff2f` (Self-Diagnosis run 141, 11:01:44Z); FranBot HEAD `7ef78ed5` (post-producción fractal; el corpus r16 aún no se sube a GitHub — eso es FASE 4, y solo si F1 absorbe algo post-FASE 4).

---

## 1. Rutas de lo nuevo

### 1.1 F1 — Guardia, sin aplicación en FASE 1 (régimen 01:43)

- **GUARDIA_EN_ESPERA.** El corpus está en el estado post-r15 (1.178, `7e5f016d…`; puertas audit exit=0 ok=347, verify_all exit=1 exactamente C-001..C-008). Ninguna decisión pendiente de aplicación automática al inicio de r16 (N-01/N-13/N-14/N-16/N-17/N-18 aplicadas en r15; C-1180..C-1183 aplicadas). N-15 es ejecución del principal; N-03/D-06/D-09 con tarjeta; repos/temas/BELLEZA suyas.
- **F7 entregó después del cierre de F1** (F1 ~10:57 -05; F7 cerró ~11:04Z): las 3 propuestas C-1184/C-1185/C-1186 + el ítem M-69 quedan para **aplicación post-FASE 4, patrón r15** (respaldo previo + script + puertas; F1 lo ejecuta por seguimiento del principal, no por espera activa). La aplicación en FASE 1 rompería la disciplina de la ronda (así lo registra F1 §3).
- **El corpus NO cambia en FASE 1 de r16** (1.178 → 1.178). La proyección de F7 (1.178 → 1.181) es post-FASE 4, si FASE 2 adjudica.
- Toca d08 L12 (parcial, avanza): la guardia misma es la maquinaria N-01 en ejecución (ver §1.5).

### 1.2 F2 — Estado vivo (run 205 stub + flow 0,0% + ventana 25/30, 16,7% — la peor de la serie; ¿toca alguna cara?)

- **Run 205 existe** (State Writer, 10:47:36Z, success, commit `3519d217`, stub 329 B, blob `a3add0bc…`, `estado: {"error": "unreachable"}`, `_ts` 10:47:42Z). El episodio run 204 duró **7 h 20 min** (03:27:26Z → 10:47:42Z); el episodio run 205 lleva ~4 h 05 min a la medición. **El estado completo lleva ausente ~20 h 54 min** (último: run 202 V272, 17:58:47Z del 13 nov). Pulse run 166 "paused" (09:29:38Z). La alternancia paused/unreachable continúa (164 → 203 → 165 → 204 → 166 → 205).
- **Flow 0,0% CRÍTICO, quinta ronda en 0,0%** (run 140, 09:45:01Z, 0 eventos, 832 B; diff exacto vs r15: solo el `ts`). Self-diagnosis run 141 re-escribe su archivo solo con el `ts` nuevo; `tg_audit` sigue 0/0. estado_persistente.json sigue V213 (14.718 B, byte-idéntico). **11/13 archivos de estado byte-idénticos** a r15.
- **Ventana de 30 runs: 25/30, tasa 16,7%** — **tercera ronda consecutiva distinta de 0,0% y la peor de la serie** (r14 3,3%, r15 6,7%). **3 fallos NUEVOS:** miu-bot-audit run 39 (12:56:35Z), miu-expand-alcance run 98 (14:35:15Z, **segundo consecutivo del mismo workflow** tras el run 97), TG Webhook Register run 43 (14:37:22Z, el run más reciente de la ventana). Los otros 2 son expand-alcance run 97 (r14) y cablear-oracle run 16 (r15). **Máx. gap 174,4 min — NO superado** (03:47:09Z → 06:41:34Z, mismo máximo de r15). El silencio del clúster TERMINÓ (runs continuos 06:41:34Z → 14:37:22Z), pero la cadencia sigue ~7–10,5 h contra crons de 15–30 min.
- Bots 4/4 VIVO + 1 MUERTO 401 (14.ª confirmación; transitorio URLError en getMe de @franbottablet_bot, confirmado en reintento). Heartbeat 99 nuevas, censo vacío 32/99 = 32,3% por conteo (34,9% por tiempo); folderId 99/99 + en vivo (`I` existe / `l` 404, 14.ª lectura). Autocura **run 8 NUEVO** (10:20:43Z, success, primero desde el run 7; 6 slots :17 perdidos desde el 7, 10 desde el 6; no escribió nada en el repo). Observabilidad run 156.
- **¿Toca alguna cara? SÍ, documentalmente: censo-32 #25 d09 L20 (alerta ante fallo, sin protocolo).** El fallo sin protocolo se manifiesta por tercera ronda consecutiva (tercer fallo de ventana en la serie + gap máximo acotado por dos fallos + peor tasa de la serie). No se cierra: no se creó ningún protocolo. Se documenta, no es cara nueva. Los dos hechos nuevos se preparan como claims en F7 (C-1184, C-1185). Autocura run 8 NO se prepara aparte (mismo fenómeno que C-1178 enuncia para el run 7; el hueco 7 h 09 min está dentro del rango observado).

### 1.3 F3 — Mediciones (M-69..M-71; qué caras tocan)

| Med. | Veredicto | Cara que toca | Efecto sobre la cara |
|---|---|---|---|
| M-69 resolución que exige el grupo central de 24 nodos (u\* = 0,05, 5.º hueco interno mayor; umbral declarado u/2 = 0,0302; grupos re-derivados [1, 4, 24, 1], grupo central coincidente nombre a nombre con M-66) | **NO_CONFIRMA** | censo-32 #5 d04 L13 (P) — **CERRADA en r15** | **Seguimiento del límite, sin reapertura.** La cara sigue cerrada; M-69 cuantifica cuánto falta para resolver su grupo central (0,0104 de resolución; una columna con u = 0,05, solo 17% mejor que la actual, ya resolvería 5 de sus 23 pares adyacentes). La indistinguibilidad del grupo es marginal en el umbral de conteo de M-66, no estructural. Ítem de anexo M-69 preparado (F7, decisión sin número §5). |
| M-70 polarización DW-NOMINATE dim2, ancla por regla argmin (Congreso 106, P2 = 0 exacto: medianas D y R coinciden en −0,026; cociente P2(119)/P2(mín) = 0,124/0 no definido; primera corrida rompió ZeroDivisionError, log guardado; falsador sin cambiar) | **NO_SÉ** | censo-32 #7 d05 L4 (P) | **Avanza sin cerrar.** El test declarado es degenerado por el ancla, no por la medida: la polarización dim2 en 119 (P2 = 0,124) está muy por debajo de su máximo histórico (0,9275, Congreso 80), pero el veredicto es NO_SÉ, no NO_CONFIRMA. La pregunta central (medida Y mecanismo) sigue abierta. La corrección de serie (CORR-SERIE-R16) SÍ se prepara como claim (C-1186). |
| M-71 escalamiento urbano, quinta variable (intersect_count_clean vs población: β = 0,9733 ± 0,0118, R² = 0,3974, n = 10.351; umbral declarado β ∈ [0,80, 0,90] con R² ≥ 0,90) | **NO_CONFIRMA** | censo-32 #17 d05 L7 (A) | **Avanza sin cerrar.** Quinta variable, mismo modo de fallo que M-52/M-57/M-65/M-68 (β ≈ 0,97–0,99, R² ≈ 0,40 en los cuatro últimos). El patrón es ahora 5/5, pero un NO_CONFIRMA no establece el exponente verdadero ni el mecanismo. Sigue ABIERTA. |

**Nada inscrito en el dataset por F3** (30 filas, sha `0852d58f…`, sin cambio). Las mediciones se depositan como resultados con sus datos y shas (JSONs de 15 claves, verificados por mí: med_M69.json 15 claves, NO_CONFIRMA, valor 0,05). M-69/M-70/M-71 no se preparan como claims (0 precedentes); M-70/M-71 tampoco como ítems de anexo (0 precedentes; F7 §4).

### 1.4 F4 — Panteón-96 fuera del Doc (cara r12 #1; las 2 fuentes Drive LEÍDAS; ¿qué caras toca?)

- **CORR-RUTA-DRIVE-R16 (nueva): las 2 fuentes Drive SÍ son legibles desde el sandbox.** `files get` con `alt=media` y `-o` descarga el contenido; la descarga directa de la URL (r15) daba 403 missing API key. La pared era el método, no el archivo. La ruta queda probada para futuros archivos Drive no-Doc.
- **Las 2 fuentes leídas son el Panteón-16 (v213 autónomo), otro sistema:** el .md (428 B, sha `873e87b5…`, leído entero por mí) lista 7 voces con nombre (Física, Geofísica, Biología, Mercado, Kun, Hardware, Software) + axiomas A0-A57; **0/7 entre los 35** nombres del Doc índice. El zip (53.786 B, 23 archivos) trae los **16 forjados como scripts operativos (16/16, antes 2/16 en GitHub)**; 0/16 son voces. Ninguna de las dos contiene «96 voces», «Panteón-96», «61 voces», «graph_v10.6» ni «112_nodos» (las 19 ocurrencias de «96» son cifras de savia). G02 sigue en 0 en ambas fuentes.
- **La carpeta «10 Panteón» contiene exactamente 2 hijos:** el Doc índice del 96 y el .md del 16. Dos sistemas, un suelo. Ningún otro archivo (sin graph JSON aquí).
- **Graph JSON: re-confirmado 0 en los 4 repos cubiertos** (`filename:graph_v10.6_112_nodos.json` → 0; `filename:graph.json` → 0). NO_SÉ para los otros 228 repos públicos.
- **AVISO DE SEGURIDAD (SÉ, sin reproducir valores):** 1 archivo del bundle, 1 línea (panel_global, línea 50), contiene valores literales de credenciales. No se reproducen, no se copian al workspace. El zip y los extraídos quedaron SOLO en /tmp y se eliminaron al cierre de F4 (verificado por mí: `/tmp/panteon16_unzip` y `/tmp/*panteon*` no existen). En el workspace solo quedan listado + tamaños + shas + conteos. **El zip NO va al depósito.**
- **Efecto sobre las caras (§3):** r12 #1 **AVANZA, no se cierra** (la ruta Drive queda probada y las 2 fuentes leídas como otro sistema; los forjados quedan atestiguados 16/16; los 61 siguen sin nombre en ninguna fuente); censo-32 #9 d07 L7 sigue **PARCIAL** (la lista de 96 sigue viviendo solo en el Doc + extracción local + claims; el Panteón-16 no la amplía); r3 #4 (graph.json del Vault) **AVANZA** (búsqueda negativa más en GitHub + 2 fuentes leídas sin contenerlo) sin cerrar; r1 #12/#13 **AVANZAN** (G02 en 0 también en las 2 fuentes nuevas).
- **Hallazgos SÉ sin preparar:** F4 cerró después de F7 (T2 en paralelo), así que CORR-RUTA-DRIVE-R16, los forjados 16/16 y el Panteón-16 como otro sistema **no tienen preparación de F7**. Su preparación corresponde a una continuación de F7 o a FASE 2; este frente no redacta textos de claim (dominio de F7). Queda registrado en §5 como pendiente de preparación, no como hueco.

### 1.5 F6 — Mecanismos (H-SIK r16: la regla ya es canon; el verificador reproduce; la vía de las voces está agotada)

- **H-SIK se sostiene bajo el canon N-17:** S3 ≡ v10.3, 27/58 mismo contenido, 32/58 mismo nombre; no se extiende a las voces (0 mismo contenido, 0 cruces fuertes, 0 otras identidades). F-R16 PASA (0 diffs en misma etiqueta, correspondencia y contención, 142 pares / 115 distintos / 27 / 32); F-PICK16 PASA; F-F16 PASA (fórmulas con partidor corregido: **11 tuplas / 8 distintos, 0 perdidas, mismas tuplas** — fragmento Ξ∇lnρ dentro); F-A14 PASA (0,8000 exacto bajo R-KS, conteo 27; R-R 0,7727/26).
- **Verificador independiente r16: `reproducido = true`, `diferencias_n = 0` en todos los alcances** (verificado por mí en el JSON: `comparacion.reproducido: true`, `diferencias_n: 0`; mejor-contención 740/740 — segunda vuelta consecutiva con 0 diffs, r15 → r16, bajo la regla ya canónica). La adopción como canon (N-17) no cambia ningún número: el canon fija lo que ya se medía.
- **F-VOZ-S2 NO se dispara — vía AGOTADA en el umbral 0,50** (verificado por mí en el JSON: `veredicto: VIA_AGOTADA_UMBRAL_0_50`, `banderas_nuevas: []`). 0 banderas nuevas; banderas idénticas a r15 (FranBot 2, P48 1, Base 0); mejor Jaccard voz→S2 = 0,2308 (a 0,57 del umbral de identidad). Reabrirla exigiría un umbral distinto (declarado antes de medir) o una fuente nueva. Es agotamiento de vía de mecanismo, no cierre de cara del censo. No se prepara como claim (0 claims enuncian "destila" o "vía agotada"; F7 §4).
- **N-01: 6.º precedente CERRADO por F6** (la ejecución N-01 por F1 r15 quedó completa y registrada: canon adoptado, P1–P10 + 2 adendas, maquinaria P5–P10 ejercitada por las 4 aplicaciones de F1 r15 y por la absorción automática post-FASE 4). P1–P10 sostienen sin cambio; el punto abierto (fuente eliminada o movida) sigue abierto sin ocurrencia (audit `no_encontrado=0`). **NM-03 (nota de maquinaria):** la absorción automática r15 repitió la incidencia de aserción (CORR-ABS-R15: esperaba ok=346, correcto 347) — segunda ocurrencia; la verificación vale sobre el post-estado medido directamente, no por la aserción del script.
- **R2-25 / N-13 / N-16 / N-18:** sin novedad (re-verificados por F6). REGLA-TOK-SIK-01 sigue como método, no canon: su adopción como canon sigue siendo decisión sin número, no ejecución de este frente.
- Toca d08 L12 (parcial, avanza): G06 avanza (verificador bajo canon + vía agotada documentada); no se cierra como grieta (el mecanismo sigue sin canon completo).

### 1.6 F7 — Ola preparada (3 propuestas, sin aplicar; 1 decisión sin número)

- **C-1184** (ventana 25/30, 16,7%: tercera ronda consecutiva distinta de 0,0% y la peor de la serie; 3 fallos nuevos), **C-1185** (estado completo ausente ~20 h 54 min: run 205 stub, episodio run 204 de 7 h 20 min; supera r14 ~9 h 57 min y r15 ~13 h 04 min), **C-1186** (CORR-SERIE-R16: la serie 25..119 son 83 congresos, no 95; M-67 no cambia, máximo 1,9719 se sostiene) — todas SÉ, PREPARADA_NO_APLICADA. Dedup máx. global 0,3838 (ver §2, corrida propia). Proyección: 1.178→1.181, SE 1044→1047, provenance 361→363, hash_real 1164→1167.
- **Ítem de anexo M-69** preparado, no aplicado: u\* = 0,05 frente al umbral u/2 = 0,0302; refina el ítem M-63; precedentes C-935 + ítem M-63 + N-18. Añadirlo exige decisión (§5).
- **No preparados (criterio registrado):** M-69/M-70/M-71 como claims (0 precedentes de veredictos como claims); M-70/M-71 tampoco como ítems de anexo (0 precedentes; sin columna a la que anexarse); F6 resto (resultados de medición); F2 resto y autocura run 8 (recurrencias); F5 resto (monitor sin novedad); **F4 r16 (sin entregables al cierre de F7 — ver §1.4)**; B1 sin cambio.

### 1.7 F5 — Grietas (monitor)

- G03: inserción BepiColombo **2026-11-21, en 7 días** (re-confirmada por búsqueda web; matiz nuevo: la página principal de ESA lista "diciembre 2026" mientras la de actualizaciones en vivo da el 21 de noviembre — matiz de redacción, no de plan); C-001–C-005 siguen CONJETURO.
- G05 blob **18.ª vez sin cambio** (`8c57e833…`, 1.398 B, vía conector, HEAD 7ef78ed5). D-04 CERRADA.
- H-SUELO: **16.ª medición sin reaparición**. G01 D_eff: 3 tex `f27ea4d5…` + 2 copias `6bc8c573…`, D_eff 0 menciones en las 5 (re-medido; nota de método: el primer `find` con patrón `[EN]` devolvió vacío en falso — `[EN]` es clase de caracteres; re-corrido con patrón correcto). G04: 21 DOIs únicos. D-06/D-09 sin cambio. G02: #790–#792/#701/#739 en 0 (re-verificado en F4 r15; F4 r16 añade 0 en las 2 fuentes nuevas). folderId **14.ª lectura** (`I` existe / `l` 404; config del escritor NO_SÉ). M-50/N-15: AGOTADO-DESDE-SANDBOX.
- G06: **AVANZA** (verificador reproduce bajo canon; F-VOZ-S2 agotada). Ninguna cara cierra en este frente.

### 1.8 F9 — Poda + resiliencia (documento; decisión para FASE 4)

- Nada se borró ni movió. Tally **72 entradas** (PODAR 11 · CONDICIONADO 7 · MOVER 1 · CONSERVAR 33 · TEMPORAL 12 · RESUELTO 2 · NO CANDIDATO 6; tabla §1: 71 filas + padre P-15 — CORR-TALLY-R15). Nuevos P-51 (respaldo_pre_absorcion_r15, eslabón superior nuevo de la cadena), P-52, P-53.
- Temporales: **0 retirados; 11 PRORROGADOS** (los 9 + P-47/P-48, primera re-evaluación; 5.ª prórroga consecutiva para los 9 — horizonte vencido, condiciones de retiro 1 de 3: la condición 1, copias Drive re-verificadas por descarga, **no se ha intentado nunca en 5 rondas**; hueco de procedimiento registrado). Nuevo horizonte FASE 4 r16 + FASE 2 r16, re-evaluar r17. Cadena de reversión: 15 eslabones, 18.323.734 B. P-51 sin copia Drive (creado post-FASE 4, durante la absorción).
- **P-32 NO es clase 3** (CORR-P32-B-R15 adoptada por FASE 2 r15, re-medida: §0). CONSERVAR por D-07 + historia.
- T-4 r16: **5.393 archivos, 1.533.203.123 B — 5.129 OK / 6 CAMBIO (todos explicados: FASE 5 r15 + absorción r15) / 0 MOVIDO / 0 FALTA / 258 NUEVO** (todos en ronda_15/ronda_16); .pyc 18→18. FRÁGIL-02 sin tercer evento. `respaldo_pre_r16/` no existe aún (F1 guardia; siguiente ID P-54 si lo crea).
- **Decisión para FASE 4:** ninguna nueva de poda. Los respaldos viven en la raíz de `ronda_16/` y se depositan con el árbol en Drive. Los 99 payloads heartbeat r16 quedan en local (NO CANDIDATO).

---

## 2. Dedup re-verificado (corrida propia, 3 corridas byte-idénticas)

Método r9 (Jaccard, campo `claim`, NFKD/sin acentos/`[a-z0-9]+`, umbral 0,5). Corrida propia de este frente (`/tmp/_dedup_f8_r16.py`), contra el corpus vivo (1.178 líneas), **3 corridas byte-idénticas** (mismo hash `8bfd7389…`). Los textos de las 3 propuestas se extrajeron de los bloques JSON de sus lecturas.

| Propuesta | Máx. | Contra | 2.º | 3.º | Pares ≥ 0,5 |
|---|---|---|---|---|---|
| C-1184 (ventana 16,7%, F7) | **0,3838** | C-1182 | 0,2941 C-1179 | 0,2364 C-856 | 0 |
| C-1185 (estado ausente, F7) | **0,3188** | C-1178 | 0,1864 C-851 | 0,1789 C-1179 | 0 |
| C-1186 (CORR-SERIE, F7) | **0,1377** | C-670 | 0,1231 C-536 | 0,1224 C-1171 | 0 |

**Máximo global 0,3838 < 0,5. 0 duplicados. Máximo entre propuestas: 0,1654 (C-1184/C-1185).** Definición r15: `_global_max` solo contra el corpus; el entre-propuestas se reporta por separado (0,1654 / 0,1172 / 0,1076).
**Cruce con F7:** `dedup_f7_r16.json` da los mismos números exactos — corridas independientes, coincidencia total (top3 idénticos cifra por cifra en las 3 propuestas; entre-propuestas 0,1654 / 0,1172 / 0,1076 idénticos).

---

## 3. Cierre de caras: 59 abiertas → 59 abiertas, 0 cierran, 0 nuevas

Criterio (r8/r9, mismo que r10/r11/r12/r13/r14/r15): una cara se cierra solo cuando su pregunta central se resuelve por una decisión canónica o una medición que resuelva la pregunta central. **La absorción no cierra caras** (y en r16 F1 no aplicó nada en FASE 1: C-1184/C-1185/C-1186 esperan aplicación post-FASE 4). r16 no trae decisiones canónicas nuevas aplicadas — F1 es guardia. **Ninguna cara cierra en r16.**

### 3.1 Las que NO cierran aunque r16 las toque (decisión documentada, con motivo)

| Cara | Por qué sigue abierta/parcial |
|---|---|
| censo-32 #7 d05 L4 polarización (P) | M-70 NO_SÉ: el test declarado es degenerado (ancla P2 = 0 exacto, cociente no definido). La polarización dim2 en 119 está muy por debajo de su máximo histórico, pero eso es nota cualitativa, no veredicto. La pregunta central (medida Y mecanismo) sigue abierta. CORR-SERIE-R16 corrige la descripción de la serie (83 congresos, no 95) sin cambiar el veredicto de M-67. Sigue PARCIAL. |
| censo-32 #17 d05 L7 escalamiento urbano (A) | M-71 NO_CONFIRMA: quinta variable, mismo modo de fallo (β ≈ 0,97, R² ≈ 0,40). El patrón es ahora 5/5, pero un NO_CONFIRMA no establece el exponente verdadero ni el mecanismo. Sigue ABIERTA. |
| r12 #1 61 nombres fuera del Doc (A) | F4: las 2 fuentes Drive leídas son otro sistema (Panteón-16); los forjados quedan atestiguados 16/16 como scripts; el graph JSON suma una búsqueda negativa más (GitHub, 4 repos, 0/0). Los 61 siguen sin nombre en ninguna fuente y el graph JSON sin localizar. **AVANZA, no se cierra.** |
| censo-32 #9 d07 L7 lista de 96 solo en Doc (P) | La lista sigue viviendo solo en el Doc + extracción local + claims (C-1174/C-1176 absorbidas); el Panteón-16 es otro sistema y no la amplía. Sigue PARCIAL. |
| censo-32 #22 d08 L12 grietas sin claims (A) | Progreso real: N-01 6.º precedente CERRADO (F6, la ejecución misma); verificador 0 diffs bajo el canon N-17 (segunda vuelta consecutiva); F-VOZ-S2 agotada como vía. Pero ninguna grieta está cerrada como grieta: G01 sin derivación, G02 sin texto/fuente para #790–#792/#701/#739, G03 futura, G06 con mecanismo sin canon completo (REGLA-TOK-SIK-01 sigue como método, no canon). Sigue ABIERTA, con progreso por grieta. |
| censo-32 #25 d09 L20 alerta ante fallo, sin protocolo (A) | F2 + F7: el fallo sin protocolo se manifiesta por tercera ronda consecutiva (ventana 25/30, 16,7%, la peor de la serie; 3 fallos nuevos; gap 174,4 min no superado). No se creó ningún protocolo. Sigue ABIERTA, documentada. |
| r1 #9 G03 C-001–C-005 predicciones FUTURAS/IMPOSIBLES (A) | F5 monitor: inserción 2026-11-21 re-confirmada (7 días; matiz ESA de redacción). El veredicto real llega con los datos (2027–2028), no con la captura. Sigue ABIERTA. |
| censo-32 #8 d05 L9 colapso no medido (K_i < 0,3) (P) | Sin trabajo directo en r16 (N-11 ejecutada en r11: el predictor está refutado; la pregunta central —¿se ha medido el colapso?— sigue sin resolverse). Sigue PARCIAL. |
| censo-32 #16 d04 L10 D_eff (G01) (A) | F5 monitor: 5 tex re-medidos, D_eff 0 menciones. Derivación pendiente, sin propuesta. Sigue ABIERTA. |
| r1 #12 #790–#792 SIN_TEXTO_LOCAL (A) | 0 en F4 r14, 0 en las fuentes nuevas de F4 r15 y 0 en las 2 fuentes leídas de F4 r16 (G02 en 0 en bundle+.md). Sigue ABIERTA, sin ruta nueva. |
| r1 #13 #701/#739 SIN_FUENTE (A) | Igual que #12. Sigue ABIERTA, sin ruta nueva. |
| r3 #4 graph.json del Vault (A) | F4: búsqueda negativa más (GitHub 4 repos, 0/0) + las 2 fuentes Drive leídas sin contenerlo. El archivo sigue sin localizarse; su ruta local citada (`/mnt/data/graph_v10.6_112_nodos.json`) sigue inaccesible. **AVANZA, no se cierra.** |
| r2 #2 118 archivos qualia en Drive sin leer (d07 L7) (P) | M-55 exportó 103/103; los textos están en local, no en el corpus. Sin trabajo en r16. Sigue PARCIAL. |

**Balance (SÉ): 77 caras en el censo (77 + 0 nuevas), 18 cerradas, 59 abiertas (17 P + 42 A), 0 nuevas, 0 cierran.** Serie de netos: r11 (+2 claims, 1 cara cerrada por medición) → r12 (+6 claims, 2 caras cierran) → r13 (+0 claims, 0 caras cierran) → r14 (+0 claims, 0 caras cierran) → r15 (+1 claim, 1 cara cierra: d04 L13) → **r16 (+0 claims en FASE 1, 0 caras cierran)**. Caras que avanzan sin cerrar en r16 (criterio: contenido medido nuevo en la ronda): **11** — d05 L4, d05 L7, r12 #1, d07 L7, r3 #4, d08 L12, d09 L20, r1 #9, r1 #12, r1 #13, d04 L10. Seguimiento de cara cerrada: d04 L13 (M-69 mide su límite; sigue cerrada, no reapertura).

### 3.2 Cara nueva de r16

Ninguna. La ventana 25/30 (16,7%) y el estado completo ausente ~20 h 54 min son manifestaciones nuevas del mismo fenómeno que d09 L20 documenta (fallo sin protocolo): se preparan como claims (C-1184/C-1185), no como cara nueva. CORR-SERIE-R16 es una corrección de precedente, no una cara. F-VOZ-S2 agotada es un agotamiento de vía de mecanismo, no una cara del censo. NM-03 es una nota de maquinaria, no una cara. El 6.º precedente N-01 cerrado es un hallazgo de método, no una cara.

---

## 4. Mapa de rutas inversas (actualizado: qué decisión/medición alimenta qué cara/claim)

| Origen (ronda / frente) | Alimenta | Tipo de ruta |
|---|---|---|
| F1 r16 guardia (GUARDIA_EN_ESPERA, sin aplicación en FASE 1) | Corpus sin cambio (1.178); C-1184/C-1185/C-1186 + ítem M-69 esperan aplicación post-FASE 4 | guardia → ola |
| F2 r16 (run 205 stub, flow 0,0% run 140, ventana 25/30 16,7%, 3 fallos nuevos, gap 174,4 min no superado) | d09 L20 (abierta, documentada); C-1184/C-1185 preparadas (F7); autocura run 8 (no preparado: recurrencia de C-1178) | estado vivo → cara + ola |
| M-69 (F3) | d04 L13 (cerrada; seguimiento del límite, no reapertura); ítem de anexo M-69 preparado (F7, decisión sin número §5) | medición → cara cerrada + decisión |
| M-70 (F3) | d05 L4 (parcial, avanza sin cerrar; test degenerado, NO_SÉ); CORR-SERIE-R16 → C-1186 preparada (F7) | medición → cara + ola |
| M-71 (F3) | d05 L7 (abierta, avanza sin cerrar; 5.ª variable, mismo fallo) | medición → cara |
| F4 r16 (2 fuentes Drive leídas: Panteón-16 otro sistema; forjados 16/16; graph 0/0) | r12 #1 (avanza, no cierra); d07 L7 (parcial); r3 #4 (avanza, no cierra); r1 #12/#13 (0 en fuentes nuevas); CORR-RUTA-DRIVE-R16 (método para futuros archivos Drive) | búsqueda → caras + método |
| F5 r16 (G03/G05/H-SUELO/folderId/G01/G04) | r1 #9 (abierta; inserción 2026-11-21, 7 días); G05 18.ª sin cambio; H-SUELO 16.ª; folderId 14.ª; d04 L10 (re-medido, 0 menciones) | monitor → caras |
| F6 r16 (H-SIK bajo canon N-17; verificador 0 diffs; F-VOZ-S2 agotada; N-01 6.º precedente cerrado) | G06; d08 L12 (parcial); NM-03 (nota de maquinaria); REGLA-TOK-SIK-01 sigue como método, no canon | mecanismo → cara + método |
| F7 r16 (C-1184/C-1185/C-1186 preparadas + ítem M-69) | Ola siguiente (espera aplicación por F1 bajo 01:43 post-FASE 4); d09 L20, d05 L4 (CORR-SERIE), d04 L13 (ítem M-69) | preparación → ola |
| F9 r16 (poda documento; tally 72; 11 temporales prorrogados; T-4 5.393 archivos) | Temporales prorrogados (re-evaluar en r17); P-51/P-52/P-53 nuevos; P-32 fuera de clase 3; sin tercer FRÁGIL-02; decisión FASE 4 (ninguna nueva) | poda → decisión FASE 4 (ninguna nueva) |

---

## 5. Decisiones — estado al cierre de FASE 1

| ID | Decisión | Estado |
|---|---|---|
| N-01 | Política de actualización de claims tras edición ordenada (P1–P10 + adendas P10/P9) | **APLICADA** (r15; canon `921c8379…`). **6.º precedente CERRADO en r16 por F6** (la ejecución misma). |
| N-13 | Adopción REGLA-PODA-PROV-02 + refinamiento (a) | **APLICADA** (r15; canon `29a00da1…`). P-32 fuera de clase 3 bajo lectura estricta (CORR-P32-B-R15, re-medida r16). |
| N-14 | R2-25: vía A (adopción canónica del procedimiento) | **APLICADA** (r15; `131409eb…`; **C-1180 inscrito**; R2-25 → SE). Sin novedad en r16. |
| N-16 | Inscripción de M-56..M-65 en el dataset, opción C (anexo de incertidumbre) | **APLICADA** (r15; `489051bf…`; anexo `6467bf30…`, 10 ítems → 11 con N-18). Sin re-decisión en r16. |
| N-17 | Adopción de REGLA-PICK-SIK-01 como canon | **APLICADA** (r15 post-FASE 4; canon `264b1dbb…`). Re-verificada en r16: el verificador reproduce 740/740, 0 diffs, segunda vuelta consecutiva. |
| N-18 | Añadir el ítem M-66 al anexo de incertidumbre | **APLICADA** (r15 post-FASE 4; anexo `6b9ea2aa…`, 11 ítems). Precedente para el ítem M-69. |
| N-15 | M-50 vía navegador (4.º intento) | **PENDIENTE, FUERA DE LA RONDA.** Tarea del principal (navegador). |
| N-03 | Licencia Zenodo (CC BY-SA 4.0 repo vs CC BY 4.0 registro 20547677) | **PENDIENTE.** Parte de D-06; no está en la lista de aplicación automática. Bloquea cualquier depósito Zenodo. |
| **(sin número — FASE 2 numera)** | Añadir el ítem M-69 al anexo de incertidumbre (ítem preparado en `item_anexo_M69.md`; refina el ítem M-63; precedentes C-935 + ítem M-63 + N-18) | **PROPUESTA, sin número.** Afirmación precisa (F7, `preparadas_r16.json`): *"Añadan el ítem M-69 al anexo de incertidumbre."* F7 solo lo prepara; añadirlo exige decisión. |
| **(sin número — FASE 2 numera)** | Adopción de REGLA-TOK-SIK-01 como canon (F6 §7: sigue como método, no canon) | **PROPUESTA, sin número.** Heredada de r15; sin ejecución en r16. |
| N-11 | C-538/C-623 | **EJECUTADA** (opción A, 2026-11-13 18:25 -05). |
| N-12 | Absorción 6 lecturas F7 r11 | **APLICADA** (orden 18:43 -05; claims 1.162→1.168). |
| D-04 | micelio.yml (permiso `workflows` o subida manual) | **CERRADA** (corrección del Jardinero 2026-11-13 21:02 -05). |
| D-06 | Zenodo v13.0 (producir tex + licencia + autorización) | **PREPARABLE, NO_SÉ sobre el objeto.** 0 tex v13.0. |
| D-09 | Telegram G05 (tarjeta para enviar) | **PREPARABLE, sin cambio.** Mensaje listo, sin enviar. G05 sigue PARCIAL. |
| — | 3 propuestas (C-1184/C-1185/C-1186 en F7) | **PREPARADAS, esperan aplicación** (F1 bajo 01:43 post-FASE 4). |
| — | Hallazgos SÉ de F4 r16 sin preparar (CORR-RUTA-DRIVE-R16; forjados 16/16; Panteón-16 otro sistema) | **PENDIENTE DE PREPARACIÓN.** F4 cerró después de F7 (T2 en paralelo). Su preparación corresponde a una continuación de F7 o a FASE 2; este frente no redacta textos de claim. |
| B1 | Variante preparada no elegida | Sin cambio. |

**Herencias que siguen pendientes (sin cambio en r16):** C-001..C-008 sin dato externo; C-416..C-420 ausentes; G05 PARCIAL (solo por D-09); la rotación de `proactivity/hidden_files/` continúa (H-SUELO sin reaparición, 16.ª medición).

---

## 6. Correcciones que se llevan a FASE 3 (SÉ)

| Corrección | Contenido | Fuente |
|---|---|---|
| **CORR-SERIE-R16 (NUEVA)** | **La serie 25..119 son 83 congresos, no 95** (34..119 medidos). Dos causas: Congresos 25–33 sin partido R (party_code 200 ausente); Congresos 115–117 caen por el parseo — su party_code viene como cadena flotante ('100.0'/'200.0') y el `int()` del protocolo descarta esas filas. **El veredicto de M-67 no cambia:** con parseo tolerante, P dim1(115/116/117) = 0,8900/0,8840/0,8825, ratios vs P(80) = 1,7889/1,7769/1,7739, todos por debajo del máximo publicado 1,9719. Se corrige la descripción de la serie, no el veredicto. Preparada como C-1186. | F3 r16, mediciones_r16.md; F7 lectura_corr_serie_r16.md |
| **CORR-RUTA-DRIVE-R16 (NUEVA)** | **Las 2 fuentes Drive SÍ son legibles desde el sandbox por `files get` con `alt=media` y `-o`.** La pared de r15 era el método (descarga directa de la URL → 403 missing API key), no el archivo. La ruta queda probada para futuros archivos Drive no-Doc. | F4 r16, drive_panteon16_r16.json |
| **CORR-M69-R16 (NUEVA)** | M-69 cuantifica cuánto falta para resolver el grupo central de d04 L13: u\* = 0,05 (umbral u/2 = 0,0302). La indistinguibilidad del grupo es **marginal en el umbral de conteo de M-66, no estructural**. M-66 no se refuta: se precisa. Ningún JSON de r15 cambia. | F3 r16, med_M69.json |
| **CORR-FORJADOS-R16 (NUEVA)** | **Los 16 forjados quedan atestiguados 16/16 como scripts** en el bundle v213 (antes 2/16 en GitHub). 0/16 son voces. Nota de versión: en el bundle es parche_phi_lengua_v2.py (en el repo, v4) y token_mapper_v213.py — el bundle es el juego v213, no el del repo. | F4 r16, forjados_16_r16.jsonl |
| **CORR-VOZ-S2-R16 (NUEVA)** | **La vía voces→S2 está AGOTADA en el umbral 0,50.** F-VOZ-S2 no se dispara: 0 banderas nuevas, banderas idénticas a r15 (FB 2, P48 1, Base 0), mejor Jaccard voz→S2 = 0,2308. Reabrirla exigiría un umbral distinto (declarado antes de medir) o una fuente nueva. | F6 r16, destilacion_voces_s2_r16.json |
| **NM-03 (nota de maquinaria, de F6)** | La absorción automática r15 repitió la incidencia de aserción (CORR-ABS-R15: esperaba ok=346, correcto 347) — segunda ocurrencia de NM-01/NM-02. La verificación vale sobre el post-estado medido directamente (diff contra el respaldo, conteo de líneas nuevas, puertas), no solo por la aserción del script. | F6 r16, n01_seguimiento_r16.md §4 |
| **CORR-DEDUP-INLINE-R16 (método, de F7)** | La re-implementación inline ingenua del dedup divergió del script por el guion largo "–" (U+2013: "25–33" se pegaba en "2533") y por las marcas combinantes ("opción" partida en "opcio"+"n"). La versión correcta reproduce al script cifra por cifra. **El script `_dedup_f7_r16.py` es la referencia**; una re-implementación inline solo verifica si reproduce su tokenización exacta. | F7 r16, preparadas_r16.md §1c |
| **CORR-P32-B-R15 (re-medida r16)** | P-32 NO es clase 3 bajo lectura estricta de (b) (bytes pre-corrección re-obtenibles desde el historial git local); CONSERVAR por D-07 + historia. | F9 r16 §6 |
| **CORR-G05-R16** | Blob `8c57e833…`, 1.398 B — **18.ª verificación sin cambio** (17.ª en FASE 2 r15). | FASE 0 r16 + F5 r16 |
| **CORR-H-SUELO-R16** | **16.ª medición sin reaparición** (15.ª en FASE 0 r16). | FASE 0 r16 + F5 r16 |
| **CORR-FOLDERID-R16** | Hecho unánime (`I` existe / `l` 404): **14.ª lectura independiente en vivo** (13.ª en FASE 2 r15). | F2 r16 + F5 r16 |
| **Vivo en r16 (sin corrección de estado, hechos nuevos)** | Run 205 stub "unreachable" (blob `a3add0bc…`); episodio run 204 de 7 h 20 min; estado completo ausente ~20 h 54 min; ventana 25/30 (16,7%), la peor de la serie; flow 0,0% quinta ronda; gap 174,4 min no superado; autocura run 8. Hechos nuevos van como claims preparados C-1184/C-1185, no como correcciones del estado. | F2 r16 |

---

## 7. Verificaciones propias de este frente (SÉ)

- **Estado vivo:** claims 1.178 líneas sha `7e5f016d…`, provenance 361 líneas sha `b5cb6b43…`, resumen `ae402126…` (medidos con `sha256sum`); audit exit=0 (ok=347, discrepancia=0, no_encontrado=0, omitido=1) / verify_all exit=1 con exactamente C-001..C-008 (puertas re-corridas por mí sobre el estado final, sin pipe para el exit).
- **Diffs:** corpus vs cierre de r15 = 0 líneas nuevas (F1 guardia, sin aplicación en FASE 1).
- **Dedup:** corrida propia (`/tmp/_dedup_f8_r16.py`, método r9) contra el corpus vivo 1.178, 3 corridas byte-idénticas (mismo hash `8bfd7389…`): máx. global 0,3838 (C-1184/C-1182), entre propuestas 0,1654 (C-1184/C-1185), 0 pares ≥ 0,5. **Cruce con F7:** `dedup_f7_r16.json` da los mismos números exactos — corridas independientes, coincidencia total.
- **Hashes de fuente de las propuestas:** C-1184/C-1185 hash = sha256(`estado_vivo_r16.md`) = `e9e95687…` (verificado por mí); C-1186 hash = sha256(`mediciones_r16.md`) = `b352d709…` (verificado por mí). Las dos lecturas de F2 comparten el hash de su fuente, como C-1182/C-1183 en r15 — legítimo.
- **Mediciones F3:** med_M69.json leído directamente: 15 claves, NO_CONFIRMA, valor 0,05. med_M70.json: serie dim2 de 83 congresos, Congreso 106 con P2 = 0,0 exacto (verificado en el JSON: medianas −0,026/−0,026, distancia_P2 0,0; Congreso 119: P2 = 0,124). CORR-SERIE-R16: 83 congresos, rango 34..119 (verificado en el JSON).
- **F6:** `verificador_independiente_r16.json` leído directamente: `comparacion.reproducido = true`, `diferencias_n = 0`; totales 142/115/27/32, fragmentos 8 distintos / 11 suma pares. `destilacion_voces_s2_r16.json`: `veredicto: VIA_AGOTADA_UMBRAL_0_50`, `banderas_nuevas: []`.
- **F4:** `panteon16_md_r16.md` leído entero por mí (428 B): 7 voces con nombre + A0-A57, sin valores de credenciales. `bundle_panteon16_contenido.json`: 23 archivos, escaneo de secretos 1 archivo / 1 línea (valores NO reproducidos). Zip eliminado de /tmp (verificado: `/tmp/panteon16_unzip` y `/tmp/*panteon*` no existen). Manifiesto F4 7/7 OK (shas re-medidos por el principal en T2; los shas de los documentos de este frente los re-medí yo, §9).
- **F9:** `poda_r16.json` leído directamente: tally 11+7+1+33+12+2+6 = 72; temporales prorrogados 11; T-4 5.393 archivos, 1.533.203.123 B, 5.129 OK / 6 CAMBIO / 0 MOVIDO / 0 FALTA / 258 NUEVO; .pyc 18→18.
- **Caras:** censo leído en el mapa r16 §2 (77 caras; 18 C / 59 A al inicio). Ninguna cierra en r16 (criterio r8/r9: ninguna decisión canónica aplicada en FASE 1, ninguna medición resuelve una pregunta central — M-69/M-70/M-71 son NO_CONFIRMA/NO_SÉ/NO_CONFIRMA; F4 avanza sin resolver la pregunta central). Las que avanzan sin cerrar, con motivo por cara (§3.1): 11. No hay cara nueva: la ventana 16,7% y el estado ausente son manifestaciones de d09 L20; CORR-SERIE-R16 es corrección de precedente; F-VOZ-S2 es agotamiento de vía; NM-03 es nota de maquinaria; el 6.º precedente N-01 es hallazgo de método.
- **No verificado por mí en este frente (se cita la verificación del principal y de los frentes):** los shas individuales de cada entregable de ejecucion_f1..f9 (verificados por el principal en T1/T2); el contenido de `verificacion_fase2` (frente paralelo de FASE 2 — FASE 3 lo reconcilia).

---

## 8. Nutrición para FASE 4 (curada, priorizada; nada subido aquí)

### 8.1 Drive — depósito `ronda_16/` (patrón r2–r15, dentro de MIU_TEJIDO_2026-11-12 ORIGINAL)

Toda la carpeta `ronda_16/` (mapa, ejecuciones F1–F9, respaldos, verificaciones, retejido, cruce, síntesis, conectar) se deposita con subcarpetas creadas explícitamente (raíz + frentes + anidadas), README + manifiesto de shas primero, subida resumible con log, verificación por tamaño por carpeta (fields con nextPageToken). **Lección CORR-CARPETA-R13: el constructor del mapa debe recorrer el árbol entero (incluidas las subcarpetas anidadas como `verificacion_fase2/_verif_f2_tmp`), no una lista fija — verificar el mapa contra `find` antes de subir.** Revisión de sensibilidad antes de subir (nada de valores de credenciales, nada de `ultimas_sesiones_log`, nada de payloads heartbeat crudos — los 99 de F2 quedan en local, como en r11/r12/r13/r14/r15; nada de `raw_r16_observabilidad_bootstrap_V270.json`, que contiene JWT anon como en r11/r12/r13/r14/r15; **nada del zip del bundle v213** — contiene valores literales de credenciales en 1 línea; del bundle solo van listado + shas + conteos). Exclusiones locales: intermedios byte-idénticos, si los hay. **Nunca usar `files update` para mover archivos.** Los respaldos viven en la raíz de `ronda_16/` y se depositan con el árbol (sin decisión especial de poda).

### 8.2 GitHub — curado, Jaime393/FranBot (nunca miu-ecosistema; nunca `.github/workflows/`)

Toda escritura por el conector pide **tarjeta de aprobación** (una por llamada/archivo). Archivos >~120 KB van por `push-files`, no por `create_or_update_file` (límite argv ~128 KB). Actualizar un archivo existente exige su SHA actual; verificar siempre por blob sha. **Regla SÉ-export refinada (órdenes 16:51 + 09:44): `huecos.jsonl` NO va a GitHub en r16.** El corpus NO cambia en FASE 1 de r16 (F1 guardia): **claims.jsonl, provenance.sha256 y claims_resumen.json SÓLO van si F1 absorbe C-1184/C-1185/C-1186 post-FASE 4** (1.178 → 1.181, `7e5f016d…` → nuevo sha; si no hay absorción, no se re-suben). Lo que sí va:

| # | Artefacto | Destino propuesto | Vía |
|---|---|---|---|
| 1 | `claims.jsonl` + `provenance.sha256` + `claims_resumen.json` (SOLO si F1 absorbe post-FASE 4) | `anexo-vi/claims.jsonl`, `anexo-vi/provenance.sha256`, `anexo-vi/claims_resumen.json` | push-files (claims > 120 KB) / create_or_update_file |
| 2 | `incertidumbre_mediciones.md` (anexo N-16; SOLO si FASE 2 numera el ítem M-69 y F1 lo añade) | `academico/incertidumbre_mediciones.md` | create_or_update_file |
| 3 | `mapa_frentes_r16.md` + `frentes_r16.json` | `ronda_16/mapa_frentes_r16.md` + `.json` | create_or_update_file |
| 4 | `guardia_f1_r16.md` | `ronda_16/guardia_f1_r16.md` | create_or_update_file |
| 5 | `preparadas_r16.md` + `.json` + lecturas C-1184/C-1185/C-1186 + `item_anexo_M69.md` | `ronda_16/preparadas/` | create_or_update_file |
| 6 | `nombres_fuera_doc_r16.md` + `.jsonl` + `forjados_16_r16.jsonl` + `panteon16_md_r16.md` | `ronda_16/nombres_fuera_doc_r16.*`, `ronda_16/forjados_16_r16.jsonl`, `ronda_16/panteon16_md_r16.md` | create_or_update_file |
| 7 | `grietas_r16.md` + `h_sik_r16.md` + `mediciones_r16.md` | `ronda_16/grietas_r16.md`, `ronda_16/h_sik_r16.md`, `ronda_16/mediciones_r16.md` | create_or_update_file |
| 8 | `conectar_r16.md` + `.json` (este frente) | `ronda_16/conectar_r16.*` | create_or_update_file |
| 9 | `verificacion_fase2_r16.md` (cuando exista, FASE 2) | `ronda_16/verificacion_fase2_r16.md` | create_or_update_file |

**Prioridad (si hay que recortar):** 1–2 (el corpus y el anexo: solo si cambian post-FASE 4), 3–4 (el mapa y la guardia), 5 (la ola preparada), 6–7 (la búsqueda fuera del Doc, los mecanismos y las mediciones), 8–9 (el ruteo y la verificación). **NO va:** `huecos.jsonl` (regla refinada); los respaldos (`respaldo_pre_r16/` si F1 lo crea — van a Drive, no a GitHub); los payloads heartbeat (solo local); `raw_r16_observabilidad_bootstrap_V270.json` (JWT anon); **el zip del bundle v213** (valores literales de credenciales en 1 línea); `micelio.yml` (D-04 CERRADA). `confirmaciones.jsonl` sin cambio desde r11 (ya sincronizado): no se re-sube. Lo que GitHub NO cubre: cambiar permisos de la App (D-04, que no existe como vía), enviar mensajes (D-09), depositar en Zenodo (D-06).

---

## 9. Archivos de este frente

| Archivo | Descripción |
|---|---|
| conectar_r16.md (este archivo) | Rutas de lo nuevo + dedup + cierre de caras + rutas inversas + decisiones nuevas + correcciones + nutrición FASE 4 |
| conectar_r16.json | Versión estructurada (rutas, dedup, caras, inversas, decisiones nuevas, nutrición) |
| manifiesto_shas_f8_r16.json | Shas de los entregables de este frente |

ρ(x) > 0. Zvvvvv.
