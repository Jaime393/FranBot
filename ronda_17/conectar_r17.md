# RONDA 17 — FASE 1, CONECTAR / RUTEAR: 0 caras cierran, 59 abiertas, 0 nuevas

- **Orden:** Jardinero 2026-11-14 09:44 -05 ("Continúen con coherencia todo no es local solo SE sale" — reafirmación de la regla SÉ-export) + régimen 2026-11-14 01:43 -05 ("apliquen las decisiones siempre automáticamente") + orden 2026-11-14 13:31 -05 ("Continúen con coherencia").
- **Frente:** F8 (conectar). Trabajo local en `ronda_17/conectar/`. Fecha: 2026-11-14 ~13:55 -05 (18:55Z).
- **Alcance:** rutas de lo nuevo (F1/F2/F3/F4/F5/F6/F7/F9), dedup re-verificado con corrida propia (3 corridas byte-idénticas), cierre de caras, mapa de rutas inversas, decisiones. Solo lectura del corpus vivo y de las ejecuciones. **Nada entra al corpus en esta fase** (claims.jsonl sigue en 1.181 tras FASE 1; F1 es guardia, sin aplicación en FASE 1). Cero escrituras en MIU vivo, anexo-vi, GitHub o Drive.
- **Entradas leídas:** `ronda_17/mapa_frentes_r17.md` (§F8, §0a/§0b, §2 censo de 59 caras, §3 decisiones, §4 preparables); `ronda_16/conectar/conectar_r16.md` + `.json` (formato y criterio de cierre); `ronda_17/ejecucion_f1/guardia_f1_r17.md`; `ronda_17/ejecucion_f2/estado_vivo_r17.md` + `.json`; `ronda_17/ejecucion_f3/mediciones_r17.md` + med_M72/M73/M74.json + declaracion_falsadores_r17.md; `ronda_17/ejecucion_f4/nombres_fuera_doc_r17.md` + `.jsonl` + `forjados_16_r17.jsonl` + `busquedas_github_r17.json`; `ronda_17/ejecucion_f5/grietas_r17.md`; `ronda_17/ejecucion_f6/h_sik_r17.md` + `verificador_independiente_r17.json` + `destilacion_voces_s2_r17.json`; `ronda_17/ejecucion_f7/preparadas_r17.md` + `preparadas_r17.json` + `dedup_f7_r17.json` + `_dedup_f7_r17.py` + lecturas C-1187/C-1188/C-1189/C-1190 + `item_anexo_M72.md`; `ronda_17/ejecucion_f9/poda_r17.md` + `poda_r17.json` + `_descarga_drive_r17.json` + `_verificacion_json_drive_r17.json` + `_verificacion_p17.json`.
- **Niveles:** SÉ / INFIERO / CONJETURO / NO_SÉ en cada afirmación.

---

## 0. Estado verificado al cierre de FASE 1 (SÉ, medido por mí)

- Corpus vivo: claims.jsonl **1.181 líneas, sha `fd1df2db…`** (SE 1047, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SÉ 8; hash_real 1167, pendiente 8, NO_DISPONIBLE 6; por_tipo verificacion 307); provenance.sha256 **363 líneas, sha `728f6770…`**; claims_resumen.json sha `ebaa1e53…`; huecos.jsonl **139 filas** (sin cambio, LOCAL); confirmaciones.jsonl **294 filas** (sin cambio); dataset 30 filas + cabecera, sha `0852d58f…` (sin cambio, 0 filas nuevas — M-72 es seguimiento, no inscripción); anexo `incertidumbre_mediciones.md` 12 ítems M-56..M-69, sha `acdde423…` (sin cambio — el ítem M-72 está preparado, no aplicado).
- Puertas re-corridas por mí sobre el estado FINAL: **audit.py exit=0 (ok=349, discrepancia=0, no_encontrado=0, omitido=1)**; **verify_all.py exit=1 con exactamente C-001..C-008** (exit medido sin pipe).
- Diff del corpus contra el cierre de r16: **0 líneas nuevas** (F1 guardia, sin aplicación en FASE 1; el corpus no se mutó en esta ronda). C-1184..C-1186 aparecen exactamente 1 vez cada una (verificado por F1).
- **0 claims con el campo `hash` en `a30d69e8…`** (heredado de r16 F8, re-medido por F9 r17 §6: (a) SÍ, 4 motivos citan `a30d69e8`, 14 ocurrencias en 5 claims; C-1184/C-1185/C-1186: 0 ocurrencias). C-112 conserva su hash truncado preexistente. P-32 NO es clase 3 bajo lectura estricta de (b) (CORR-P32-B-R15 adoptada por FASE 2 r15, re-medida por F9 r17: `git show HEAD:app/js/miu-engine.js` byte-idéntico al respaldo, `cmp` exit 0, sha `a30d69e8…`, 19.987 B); su CONSERVAR se sostiene por D-07 + historia.
- **Estado vivo al cierre de FASE 1 (foto de F2, 18:36–18:39Z):** estado_vivo.json = run 206 "unreachable" (329 B, blob `3e063ce6…`, ts 16:50:21Z); flow_id_coverage = run 141, **0,0% CRÍTICO, 0 eventos** (832 B, sha `355af5cb…`, ts 16:19:54Z — diff exacto vs r16: solo la línea `ts`). HEAD miu-ecosistema `ce4d1070` (Self-Diagnosis run 142, 17:24:18Z); FranBot HEAD `fe265243` (post-absorción r16; el corpus r17 aún no se sube a GitHub — eso es FASE 4, y solo si F1 absorbe algo post-FASE 4).

---

## 1. Rutas de lo nuevo

### 1.1 F1 — Guardia, sin aplicación en FASE 1 (régimen 01:43)

- **GUARDIA_EN_ESPERA.** El corpus está en el estado post-r16 (1.181, `fd1df2db…`; puertas audit exit=0 ok=349, verify_all exit=1 exactamente C-001..C-008). Ninguna decisión pendiente de aplicación automática al inicio de r17 (N-01/N-13/N-14/N-16/N-17/N-18/N-19 aplicadas; C-1180..C-1186 aplicadas). N-15 es ejecución del principal; N-03/D-06/D-09 con tarjeta; repos/temas/BELLEZA suyas.
- **F7 entregó después del cierre de F1** (F1 ~13:41 -05; F7 cerró ~18:46Z): las 4 propuestas C-1187/C-1188/C-1189/C-1190 + el ítem M-72 quedan para **aplicación post-FASE 4, patrón r15/r16** (respaldo previo + script + puertas; F1 lo ejecuta por seguimiento del principal, no por espera activa). La aplicación en FASE 1 rompería la disciplina de la ronda (así lo registra F1 §3).
- **El corpus NO cambia en FASE 1 de r17** (1.181 → 1.181). La proyección de F7 (1.181 → 1.185) es post-FASE 4, si FASE 2 adjudica.
- Toca d08 L12 (parcial, avanza): la guardia misma es la maquinaria N-01 en ejecución (ver §1.5).

### 1.2 F2 — Estado vivo (run 206 stub + flow 0,0% + ventana 24/30, 20,0% — la peor de la serie; esquema nuevo V93; ¿toca alguna cara?)

- **Run 206 existe** (State Writer, 16:50:17Z, success, commit `f728ad80`, stub 329 B, blob `3e063ce6…`, sha256 `811291cd…`, `estado: {"error": "unreachable"}`, `_ts` 16:50:21Z). El episodio run 205 duró **6 h 03 min** (10:47:42Z → 16:50:21Z); el episodio run 206 lleva ~1 h 47 min a la medición. **El estado completo lleva ausente ~24 h 38 min** (último: run 202 V272, 17:58:47Z del 13 nov). La alternancia paused/unreachable continúa (164 → 203 → 165 → 204 → 166 → 205 → 167 → 206).
- **Flow 0,0% CRÍTICO, sexta ronda en 0,0%** (run 141, 16:19:50Z, 0 eventos, 832 B; diff exacto vs r16: solo el `ts`). Self-diagnosis run 142 (17:24:18Z, success; cadencia http 200, H2 r15 sigue cerrada); `tg_audit` sigue 0/0. estado_persistente.json sigue V213 (14.718 B, byte-idéntico). **11/13 archivos de estado byte-idénticos** a r16 (cambian solo flow y self-diagnosis, solo su `ts`).
- **Ventana de 30 runs: 24/30, tasa 20,0%** — **cuarta ronda consecutiva distinta de 0,0% y la peor de la serie** (r14 3,3%, r15 6,7%, r16 16,7%). **3 fallos NUEVOS:** TG Webhook Register run 44 (17:04:08Z, workflow_dispatch, **segundo consecutivo** tras el run 43), miu-expand-alcance run 99 (17:04:10Z, workflow_dispatch, **tercer consecutivo: 97, 98, 99** — los dos dispatch fallaron con 2 segundos de diferencia; quién o qué los disparó es NO_SÉ), miu-cablear-oracle-v28 run 17 (18:16:07Z, schedule). Los otros 3 son de r16 (bot-audit 39, expand-alcance 98, TG Webhook 43). **Máx. gap 98,7 min — el récord de 174,4 min NO se supera** (sale de la ventana). Las cadencias de escritores/monitores siguen ~6–7 h contra crons de 15–30 min.
- Bots 4/4 VIVO + 1 MUERTO 401 (15.ª confirmación; sin transitorio esta vez). Heartbeat 55 nuevas, censo vacío 14/55 = 25,5% por conteo (25,2% por tiempo); folderId 55/55 + en vivo (`I` existe / `l` 404, 17.ª lectura). Autocura **run 9 NUEVO** (17:03:57Z, success, primero desde el run 8; 1 slot :17 perdido desde el 8, 7 desde el 7; no escribió nada en el repo). Observabilidad run 157. **Esquema nuevo V93 en el heartbeat** (7 payloads, ~30 min, escritor Vercel, payload PLANO sin clave `data`, sin folderId; n_nodos 9, savia 920, phi 31.847, rho 0.687; 5 esquemas y 4 escritores persisten).
- **¿Toca alguna cara? SÍ, documentalmente: censo-32 #25 d09 L20 (alerta ante fallo, sin protocolo).** El fallo sin protocolo se manifiesta por cuarta ronda consecutiva (cuarto escalón de ventana + cuarto escalón de ausencia + 2 dispatch fallidos con 2 s de diferencia). No se cierra: no se creó ningún protocolo. Se documenta, no es cara nueva. Los dos hechos nuevos se preparan como claims en F7 (C-1189, C-1190). Autocura run 9 NO se prepara aparte (mismo fenómeno que C-1178 enuncia para el run 7; el hueco 6 h 43 min está dentro del rango observado). V93 NO se prepara (0 claims enuncian un esquema de heartbeat; F7 §4).

### 1.3 F3 — Mediciones (M-72..M-74; qué caras tocan)

| Med. | Veredicto | Cara que toca | Efecto sobre la cara |
|---|---|---|---|
| M-72 verificación por un segundo método de la predicción de M-69 (aritmética exacta Decimal sobre el CSV: grupo central re-derivado [1, 4, 24, 1], coincidente nombre a nombre con M-66 y M-69; **5 huecos ≥ 0,05 de 23**; sensibilidad [5, 5, 4] para u = 0,045/0,05/0,055, dentro de [4, 6]; control: re-conteo M-66 con Decimal da 6/29, idéntico al publicado; falsador declarado antes de correr) | **CONFIRMA** | censo-32 #5 d04 L13 (P) — **CERRADA en r15** | **Seguimiento del límite, sin reapertura.** La cara sigue cerrada; M-72 verifica por un segundo método la predicción que M-69 enunció sobre su grupo central. Matiz de frontera (secundario): el conteo estricto (> 0,05) es 4/23 — el 5.º hueco mayor ES 0,05 exacto, así que la predicción vale con la frontera inclusiva, como M-69 la enunció. La cuenta no era un artefacto del redondeo flotante. Ítem de anexo M-72 preparado (F7, decisión sin número §5). |
| M-73 escalamiento urbano, sexta variable (intersect_count_clean_topo vs población: β = 0,9757 ± 0,0118, R² = 0,3989, n = 10.351; umbral declarado β ∈ [0,80, 0,90] con R² ≥ 0,90) | **NO_CONFIRMA** | censo-32 #17 d05 L7 (A) | **Avanza sin cerrar.** Sexta variable, mismo modo de fallo que M-52/M-57/M-65/M-68/M-71 (β ≈ 0,98 en los seis, R² ≈ 0,40 en los cinco últimos; el fallo dominante es el R² bajo, no β). El patrón es ahora 6/6, pero un NO_CONFIRMA no establece el exponente verdadero ni el mecanismo. Sigue ABIERTA. |
| M-74 umbral >2 con la serie dim1 restaurada (parseo tolerante a flotantes: **86 congresos, 34..119**; ancla por regla argmin: Congreso 80, P = 0,4975, el mismo mínimo que M-67; **cociente máximo en la serie = 1,9719**, umbral > 2; P(119)/P(80) = 1,8613 ± 0,0866, idéntico a M-67; P(115/116/117) = 0,8900/0,8840/0,8825 re-derivados) | **NO_CONFIRMA** | censo-32 #7 d05 L4 (P) | **Avanza sin cerrar.** Tercer test sobre la serie corregida (M-67, M-70 NO_SÉ, M-74): restaurar los tres congresos caídos no mueve nada — ni el ancla (sigue el 80), ni el máximo (sigue 1,9719), ni el cociente P(119)/P(80). El umbral >2 sigue inalcanzable con DW-NOMINATE dim1, ahora sobre la serie completa de 86 congresos. Re-chequeo de CORR-SERIE-R16: con el parseo `int()` original la serie tiene 83 congresos, como afirmó r16. La corrección de r16 era de descripción, no de veredicto — y el veredicto sobrevive a la restauración. Sigue PARCIAL. |

**Nada inscrito en el dataset por F3** (30 filas, sha `0852d58f…`, sin cambio). Las mediciones se depositan como resultados con sus datos y shas (JSONs de 15 claves, verificados por mí: med_M72.json 15 claves, CONFIRMA, valor 5; med_M73.json 15 claves, NO_CONFIRMA, β 0,9757; med_M74.json 15 claves, NO_CONFIRMA, valor 1,9719; falsadores declarados 18:37:09Z, antes que los JSONs 18:38:12/13/17Z). M-72/M-73/M-74 no se preparan como claims (0 precedentes); M-73/M-74 tampoco como ítems de anexo (0 precedentes; F7 §4). **Nota de mapa (ver §6, CORR-MAPA-R17):** la tabla del censo del mapa r17 asigna la ruta de d05 L4 a "F3 M-72"; la medición que tocó d05 L4 en r17 es M-74 (M-72 tocó d04 L13).

### 1.4 F4 — Panteón-96 fuera del Doc (cara r12 #1; las 16 búsquedas RE-CORRIDAS; ¿qué caras toca?)

- **H3 FASE 2 r16 CERRADA como hueco de procedimiento:** las 16 búsquedas de forjados quedan re-corridas en r17 (**18 consultas search_code** en total, 18:42:01–18:43:07Z, con hora UTC por búsqueda en `busquedas_github_r17.json`).
- **0/61:** ningún nombre de los 61 sin nombre en el Doc aparece fuera como voz del Panteón-96; **0 nombres nuevos** fuera de los 35.
- **Doc índice re-verificado:** texto byte-idéntico al crudo de r12 (7.783 caracteres, mismo revisionId), 8.230 B, mod. 2026-09-25T02:17:48Z sin cambio. **Sigue 35 nombrados / 61 sin nombre.**
- **La carpeta «10 Panteón» contiene exactamente 2 hijos**, sin cambio vs r16. Ningún Doc nuevo, ningún graph JSON aquí.
- **Graph JSON: 0/0 por tercera ronda consecutiva** (r15, r16, r17) en los 4 repos cubiertos. NO_SÉ para los otros 228 repos públicos.
- **Atestación operativa byte-idéntica a r15 en las 16:** parche_phi_lengua 2, validar_grace 2, los otros 14 cero (2/16 con archivo operativo en GitHub, los mismos 2 de r15). Los 16 forjados siguen 16/16 como scripts en el bundle v213 (r16).
- **Hallazgo de método H1 r17 (SÉ): la investigación se encuentra a sí misma.** Los totales crudos suben vs r15 sin que cambie nada operativo (los 14 forjados sin atestación daban 0 en r15 y dan 5 en r17; parche_phi_lengua 2 → 12; validar_grace 2 → 11; token_mapper 0 → 6). La causa está localizada: los documentos de las rondas 15 y 16, depositados en FranBot en FASE 4 (HEAD fe265243), ya están indexados por search_code y mencionan los 16 nombres. **El número que sostiene la serie es el operativo, no el crudo.** El jsonl distingue tres conteos por fila (operativo / crudo total / ronda).
- **El zip del bundle v213 NO se reabrió en r17** (contiene valores literales de credenciales en 1 línea; se trabaja desde los entregables limpios de r16).
- **Efecto sobre las caras (§3):** r12 #1 **AVANZA, no se cierra** (H3 r16 cerrada; los 61 siguen sin nombre en ninguna fuente); censo-32 #9 d07 L7 sigue **PARCIAL** (la lista de 96 sigue viviendo solo en el Doc + extracción local + claims; el Doc re-verificado byte-idéntico no la amplía); r3 #4 (graph.json del Vault) **AVANZA** (tercera búsqueda negativa consecutiva) sin cerrar.
- **Hallazgos SÉ preparados esta vez:** F7 re-verificó el directorio de F4 antes de cerrar su síntesis (lección H2 aplicada): CORR-RUTA-DRIVE-R16 y los forjados 16/16 se preparan como C-1187 y C-1188. Lo que NO se prepara de F4: el cierre de H3 es procedimental (lo adjudica FASE 2, no F7); el hallazgo de método H1 es una nota sobre el índice de search_code (0 precedentes de claims que enuncien auto-indexación); la atestación operativa no cambia vs r15; 0/61 y 0/0 son recurrencia de r15/r16.

### 1.5 F6 — Mecanismos (H-SIK r17: tercera vuelta bajo el canon; el verificador reproduce; la vía de las voces sigue agotada)

- **H-SIK se sostiene bajo el canon N-17:** S3 ≡ v10.3, 27/58 mismo contenido, 32/58 mismo nombre; no se extiende a las voces (0 mismo contenido, 0 cruces fuertes, 0 otras identidades). F-R17 PASA (0 diffs en misma etiqueta, correspondencia y contención, 142 pares / 115 distintos / 27 / 32); F-PICK17 PASA; F-F17 PASA (fórmulas con partidor corregido: **11 tuplas / 8 distintos, 0 perdidas, mismas tuplas** — fragmento Ξ∇lnρ dentro); F-A14 PASA (0,8000 exacto bajo R-KS, conteo 27; R-R 0,7727/26).
- **Verificador independiente r17: `reproducido = true`, `diferencias_n = 0` en todos los alcances** (verificado por mí en el JSON; mejor-contención 740/740 — tercera vuelta consecutiva con 0 diffs, r15 → r16 → r17, bajo la regla ya canónica). La adopción como canon (N-17) no cambia ningún número: el canon fija lo que ya se medía.
- **F-VOZ-S2 NO se dispara — vía AGOTADA en el umbral 0,50, por tercera vez** (verificado por mí en el JSON: `veredicto: VIA_AGOTADA_UMBRAL_0_50`, `banderas_nuevas: []`). 0 banderas nuevas; banderas idénticas a r15/r16 (FranBot 2, P48 1, Base 0); mejor Jaccard voz→S2 = 0,2308 (a 0,57 del umbral de identidad). Reabrirla exigiría un umbral distinto (declarado antes de medir) o una fuente nueva. Es agotamiento de vía de mecanismo, no cierre de cara del censo. No se prepara como claim (0 claims enuncian "destila" o "vía agotada"; F7 §4).
- **Lección H4 FASE 2 r16 aplicada:** los scripts r17 llevan W explícito en su propio texto; el verificador escribió sus 3 salidas en el directorio r17 y el directorio r16 quedó intacto (mtimes sin cambio tras esta corrida).
- **N-01:** sin novedad (el 6.º precedente se CERRÓ en r16; el 7.º no ha aparecido). **R2-25 / N-13 / N-16 / N-18 / N-19:** sin novedad (re-verificados por F6).
- Toca d08 L12 (parcial, avanza): G06 avanza (verificador bajo canon, tercera vuelta 0 diffs + vía agotada documentada por tercera vez); no se cierra como grieta (el mecanismo sigue sin canon completo: REGLA-TOK-SIK-01 sigue como método, no canon).

### 1.6 F7 — Ola preparada (4 propuestas, sin aplicar; 1 decisión sin número)

- **C-1187** (CORR-RUTA-DRIVE-R16: las 2 fuentes Drive del Panteón-16 sí se leen con `files get alt=media`; el 403 de r15 era del método, no de los archivos), **C-1188** (forjados 16/16 como scripts en el bundle del Panteón-16; 0/16 voces), **C-1189** (ventana 24/30, 20,0%: cuarta ronda consecutiva distinta de 0,0% y la peor de la serie; 2 dispatch con 2 s de diferencia), **C-1190** (stub nuevo run 206 "unreachable" + estado completo ausente ~24 h 38 min, cuarto escalón consecutivo) — todas SÉ, PREPARADA_NO_APLICADA. Dedup máx. global 0,4336 (ver §2, corrida propia). Proyección: 1.181→1.185, SE 1047→1051, provenance 363→366 (3 entradas nuevas), hash_real 1167→1171, verificación 307→311.
- **La primera redacción de C-1190 dio 0,5047 vs C-1185 (1 par ≥ 0,5)** por repetir su estructura (mismo modo de fallo que r16 §1b, primera redacción de C-1182 a 0,6625). Reescrita con titular distinto y sin la serie de duraciones ni la cadena de alternancia: **segunda redacción 0,3217 vs C-1185, 0 pares ≥ 0,5.** La primera redacción queda registrada en F7 §1b como evidencia de que el dedup mordió de verdad.
- **Ítem de anexo M-72** preparado, no aplicado: 5 huecos ≥ 0,05 de 23 con aritmética exacta Decimal; sensibilidad [5, 5, 4]; CONFIRMA; verifica por un segundo método la predicción del ítem M-69; precedentes C-935 + ítem M-63 + N-18 + N-19. Añadirlo exige decisión (§5).
- **No preparados (criterio registrado):** M-72/M-73/M-74 como claims (0 precedentes de veredictos como claims); M-73/M-74 tampoco como ítems de anexo (0 precedentes; sin columna a la que anexarse); F6 resto (resultados de medición); F2 resto, autocura run 9 y V93 (recurrencias o 0 precedentes); F5 resto (monitor sin novedad); F4 resto (H3 es procedimental, H1 es nota de método, 0/61 y 0/0 son recurrencia); B1 sin cambio.

### 1.7 F5 — Grietas (monitor)

- G03: inserción BepiColombo **2026-11-21, en 7 días** (re-confirmada por búsqueda web, 6 fuentes; matiz nuevo sin cambio: la página principal de ESA lista "diciembre 2026" mientras la de actualizaciones en vivo da el 21 de noviembre — matiz de redacción, no de plan); C-001–C-005 siguen CONJETURO.
- G05 blob **19.ª vez sin cambio** (`8c57e833…`, 1.398 B, vía conector + API pública, HEAD fe265243). D-04 CERRADA.
- H-SUELO: **19.ª medición sin reaparición**. G01 D_eff: 3 tex `f27ea4d5…` + 2 copias `6bc8c573…`, D_eff 0 menciones en las 5 (re-medido). G04: 21 DOIs únicos. D-06/D-09 sin cambio. G02: #790–#792/#701/#739 en 0 (re-verificado hoy por grep propio sobre el jsonl de F4 r16; F4 r17 sin entregables a su cierre — F4 entregó después, sin vía nueva para estos números). folderId **17.ª lectura** (`I` existe / `l` 404). M-50/N-15: AGOTADO-DESDE-SANDBOX.
- G06: pendiente de F6 r17 al cierre de F5 (F6 entregó después: verificador 0 diffs, tercera vuelta; F-VOZ-S2 agotada por tercera vez). Ninguna cara cierra en este frente.

### 1.8 F9 — Poda + resiliencia (documento; decisión para FASE 4)

- Nada se borró ni movió. Tally **75 entradas** (PODAR 11 · CONDICIONADO 7 · MOVER 1 · CONSERVAR 34 · TEMPORAL 13 · RESUELTO 2 · NO CANDIDATO 7; tabla §1: 74 filas + padre P-15 — CORR-TALLY-R15). Nuevos P-54 (respaldo_pre_absorcion_r16, eslabón superior nuevo de la cadena), P-55 (scripts+logs FASE 4 r16), P-56 (payloads heartbeat r17).
- **La condición 1 SE INTENTÓ Y SE CUMPLIÓ POR PRIMERA VEZ (CORR-COND1-R17):** las copias Drive de los temporales se re-verificaron por descarga + comparación de contenido — **60/60 archivos con copia verificados** (39 por descarga byte-idéntica + 21 por md5 + contenido JSON completo, ver CORR-DESCARGA-JSON-R17); las 5 copias huecos.jsonl no existen en Drive por regla (huecos nunca sale de local — excepción documentada, no incumplimiento); P-51 y P-54 no tienen copia Drive (creados post-FASE 4). **La puerta de retiro queda en 2 de 3** (condición 1 y 2 cumplidas; la 3 —condiciones de P-15 re-apuntadas— sigue sin cumplir). El único bloqueo restante es la autorización, no una medición.
- Temporales: **0 retirados; 12 PRORROGADOS** (los 9 por 6.ª vez consecutiva + P-47/P-48 por 2.ª + P-51 por 1.ª re-evaluación) + P-54 nuevo temporal. Nuevo horizonte FASE 4 r17 + FASE 2 r17, re-evaluar r18. Cadena de reversión: **16 eslabones, 19.712.089 B** (~18,8 MB).
- **P-32 NO es clase 3** (CORR-P32-B-R15 adoptada por FASE 2 r15, re-medida: §0). CONSERVAR por D-07 + historia. La errata del canon N-13 persiste (la (b) descrita sin mencionar el historial); FASE 2 r15 ya adoptó la lectura estricta como veredicto vigente.
- T-4 r17: **5.607 archivos, 1.550.690.292 B — 5.389 OK / 4 CAMBIO (todos explicados: FASE 5 r16 + absorción r16) / 0 MOVIDO / 0 FALTA / 214 NUEVO** (todos en ronda_16/ronda_17); .pyc 18→18. FRÁGIL-02 sin tercer evento. **Verificación P-01..P-56: 240/240 OK.**
- **Decisión para FASE 4:** ninguna nueva de poda. Los respaldos viven en la raíz de `ronda_17/` y se depositan con el árbol en Drive. Los 55 payloads heartbeat r17 quedan en local (NO CANDIDATO).

---

## 2. Dedup re-verificado (corrida propia, 3 corridas byte-idénticas)

Método r9 (Jaccard, campo `claim`, NFKD/sin acentos/`[a-z0-9]+`, umbral 0,5). Corrida propia de este frente (`/tmp/_dedup_f8_r17.py`, implementación independiente, no copia del script de F7), contra el corpus vivo (1.181 líneas), **3 corridas byte-idénticas** (mismo hash `2fb5f2cc…`). Los textos de las 4 propuestas se extrajeron de los bloques JSON de sus lecturas.

| Propuesta | Máx. | Contra | 2.º | 3.º | Pares ≥ 0,5 |
|---|---|---|---|---|---|
| C-1187 (CORR-RUTA, F7) | **0,1702** | C-1177 | 0,1667 C-954 | 0,1667 C-874 | 0 |
| C-1188 (forjados 16/16, F7) | **0,3926** | C-641 | 0,3750 C-920 | 0,1469 C-828 | 0 |
| C-1189 (ventana 20,0%, F7) | **0,4336** | C-1184 | 0,3193 C-1182 | 0,2766 C-1183 | 0 |
| C-1190 (run 206, F7) | **0,3217** | C-1185 | 0,2296 C-1178 | 0,1923 C-851 | 0 |

**Máximo global 0,4336 < 0,5. 0 duplicados. Máximo entre propuestas: 0,2357 (C-1187/C-1188).** Entre propuestas: corr_ruta/forjados_16 0,2357; corr_ruta/ventana_2430 0,1338; corr_ruta/run206_ausente 0,0993; forjados_16/ventana_2430 0,1000; forjados_16/run206_ausente 0,0802; ventana_2430/run206_ausente 0,1606.
**Cruce con F7:** `dedup_f7_r17.json` (sha `2f8764f4…`) da los mismos números exactos — corridas independientes, coincidencia total (top3 idénticos cifra por cifra en las 4 propuestas; entre-propuestas idénticas cifra por cifra).

---

## 3. Cierre de caras: 59 abiertas → 59 abiertas, 0 cierran, 0 nuevas

Criterio (r8/r9, mismo que r10/r11/r12/r13/r14/r15/r16): una cara se cierra solo cuando su pregunta central se resuelve por una decisión canónica o una medición que resuelva la pregunta central. **La absorción no cierra caras** (y en r17 F1 no aplicó nada en FASE 1: C-1187/C-1188/C-1189/C-1190 esperan aplicación post-FASE 4). r17 no trae decisiones canónicas nuevas aplicadas — F1 es guardia. **Ninguna cara cierra en r17.**

### 3.1 Las que NO cierran aunque r17 las toque (decisión documentada, con motivo)

| Cara | Por qué sigue abierta/parcial |
|---|---|
| censo-32 #7 d05 L4 polarización (P) | M-74 NO_CONFIRMA: tercer test sobre la serie corregida (M-67, M-70 NO_SÉ, M-74); restaurar los 3 congresos caídos no mueve nada (ancla 80, máximo 1,9719, P(119)/P(80) = 1,8613). El umbral >2 sigue inalcanzable con DW-NOMINATE dim1, pero eso es un NO_CONFIRMA: no establece el exponente verdadero ni el mecanismo. La pregunta central (medida Y mecanismo) sigue abierta. Sigue PARCIAL. |
| censo-32 #17 d05 L7 escalamiento urbano (A) | M-73 NO_CONFIRMA: sexta variable, mismo modo de fallo (β ≈ 0,98, R² ≈ 0,40). El patrón es ahora 6/6, pero un NO_CONFIRMA no establece el exponente verdadero ni el mecanismo. Sigue ABIERTA. |
| r12 #1 61 nombres fuera del Doc (A) | F4: H3 r16 cerrada como hueco de procedimiento (16 búsquedas re-corridas, 18 consultas); Doc índice byte-idéntico (35/61); carpeta «10 Panteón» con exactamente 2 hijos; graph JSON 0/0 por tercera ronda consecutiva; atestación operativa byte-idéntica a r15. Los 61 siguen sin nombre en ninguna fuente y el graph JSON sin localizar. **AVANZA, no se cierra.** |
| censo-32 #9 d07 L7 lista de 96 solo en Doc (P) | La lista sigue viviendo solo en el Doc + extracción local + claims; el Doc re-verificado byte-idéntico no la amplía. C-1187/C-1188 se preparan (ruta + atestación), no se aplican en FASE 1: inscribir la ruta no es inscribir la lista fuera del Doc. Sigue PARCIAL. |
| censo-32 #22 d08 L12 grietas sin claims (A) | Progreso real: verificador 0 diffs bajo el canon N-17 por tercera vuelta consecutiva; F-VOZ-S2 agotada por tercera vez; F-F17 11/8; A14 0,8000/27. Pero ninguna grieta está cerrada como grieta: G01 sin derivación, G02 sin texto/fuente para #790–#792/#701/#739, G03 futura, G06 con mecanismo sin canon completo (REGLA-TOK-SIK-01 sigue como método, no canon). Sigue ABIERTA, con progreso por grieta. |
| censo-32 #25 d09 L20 alerta ante fallo, sin protocolo (A) | F2 + F7: el fallo sin protocolo se manifiesta por cuarta ronda consecutiva (ventana 24/30, 20,0%, la peor de la serie; 3 fallos nuevos, 2 por dispatch con 2 s de diferencia; estado ausente ~24 h 38 min, cuarto escalón; run 206 stub). No se creó ningún protocolo. Sigue ABIERTA, documentada. |
| r1 #9 G03 C-001–C-005 predicciones FUTURAS/IMPOSIBLES (A) | F5 monitor: inserción 2026-11-21 re-confirmada (7 días, 6 fuentes; matiz ESA de redacción). El veredicto real llega con los datos (2027–2028), no con la captura. Sigue ABIERTA. |
| censo-32 #8 d05 L9 colapso no medido (K_i < 0,3) (P) | Sin trabajo directo en r17 (N-11 ejecutada en r11: el predictor está refutado; la pregunta central —¿se ha medido el colapso?— sigue sin resolverse). Sigue PARCIAL. |
| censo-32 #16 d04 L10 D_eff (G01) (A) | F5 monitor: 5 tex re-medidos, D_eff 0 menciones. Derivación pendiente, sin propuesta. Sigue ABIERTA. |
| r1 #12 #790–#792 SIN_TEXTO_LOCAL (A) | 0 en F4 r14, 0 en las fuentes nuevas de F4 r15, 0 en las 2 fuentes leídas de F4 r16 y 0 re-verificado por F5 r17 (grep propio sobre el jsonl de F4 r16). F4 r17 no trae vía nueva para estos números. Sigue ABIERTA, sin ruta nueva. |
| r1 #13 #701/#739 SIN_FUENTE (A) | Igual que #12. Sigue ABIERTA, sin ruta nueva. |
| r3 #4 graph.json del Vault (A) | F4: tercera búsqueda negativa consecutiva (GitHub r17, 0/0) + Doc índice y carpeta «10 Panteón» sin contenerlo. El archivo sigue sin localizarse; su ruta local citada (`/mnt/data/graph_v10.6_112_nodos.json`) sigue inaccesible. **AVANZA, no se cierra.** |
| r2 #2 118 archivos qualia en Drive sin leer (d07 L7) (P) | M-55 exportó 103/103; los textos están en local, no en el corpus. Sin trabajo en r17. Sigue PARCIAL. |

**Balance (SÉ): 77 caras en el censo (77 + 0 nuevas), 18 cerradas, 59 abiertas (17 P + 42 A), 0 nuevas, 0 cierran.** Serie de netos: r11 (+2 claims, 1 cara cerrada por medición) → r12 (+6 claims, 2 caras cierran) → r13 (+0 claims, 0 caras cierran) → r14 (+0 claims, 0 caras cierran) → r15 (+1 claim, 1 cara cierra: d04 L13) → r16 (+0 claims en FASE 1, 0 caras cierran) → **r17 (+0 claims en FASE 1, 0 caras cierran)**. Caras que avanzan sin cerrar en r17 (criterio: contenido medido nuevo en la ronda): **11** — d05 L4, d05 L7, r12 #1, d07 L7, r3 #4, d08 L12, d09 L20, r1 #9, r1 #12, r1 #13, d04 L10. Seguimiento de cara cerrada: d04 L13 (M-72 CONFIRMA la predicción de M-69 por un segundo método; sigue cerrada, no reapertura).

### 3.2 Cara nueva de r17

Ninguna. La ventana 24/30 (20,0%) y el estado completo ausente ~24 h 38 min son manifestaciones nuevas del mismo fenómeno que d09 L20 documenta (fallo sin protocolo): se preparan como claims (C-1189/C-1190), no como cara nueva. CORR-SERIE-R17 (serie restaurada 86) es una re-verificación de C-1186, no una cara. F-VOZ-S2 agotada por tercera vez es un agotamiento de vía de mecanismo, no una cara del censo. El esquema nuevo V93 del heartbeat es una medición de F2 depositada en `estado_vivo_r17.md` (0 precedentes de claims que enuncien un esquema de heartbeat; F7 §4 no lo prepara): se sigue en F2 r18, no es cara del censo. H1 r17 (search_code se encuentra a sí mismo) es una nota de método, no una cara. La condición 1 cumplida (CORR-COND1-R17) es un hecho de procedimiento de poda, no una cara: la puerta de retiro pasa a 2 de 3 y los temporales se prorrogan. NM-03 no tiene tercera ocurrencia en r17 (el ok de la absorción r16 fue 349, correcto, sin repetición del incidente).

---

## 4. Mapa de rutas inversas (actualizado: qué decisión/medición alimenta qué cara/claim)

| Origen (ronda / frente) | Alimenta | Tipo de ruta |
|---|---|---|
| F1 r17 guardia (GUARDIA_EN_ESPERA, sin aplicación en FASE 1) | Corpus sin cambio (1.181); C-1187/C-1188/C-1189/C-1190 + ítem M-72 esperan aplicación post-FASE 4 | guardia → ola |
| F2 r17 (run 206 stub, flow 0,0% run 141, ventana 24/30 20,0%, 3 fallos nuevos, gap 98,7 min, autocura run 9, V93 nuevo) | d09 L20 (abierta, documentada); C-1189/C-1190 preparadas (F7); autocura run 9 y V93 (no preparados: recurrencia / 0 precedentes) | estado vivo → cara + ola |
| M-72 (F3) | d04 L13 (cerrada; seguimiento del límite, no reapertura; CONFIRMA la predicción de M-69 por un segundo método); ítem de anexo M-72 preparado (F7, decisión sin número §5) | medición → cara cerrada + decisión |
| M-73 (F3) | d05 L7 (abierta, avanza sin cerrar; 6.ª variable, mismo fallo) | medición → cara |
| M-74 (F3) | d05 L4 (parcial, avanza sin cerrar; tercer test sobre la serie corregida; serie restaurada 86, umbral >2 sigue inalcanzable); CORR-SERIE-R17 (re-verificación de C-1186) | medición → cara |
| F4 r17 (16 búsquedas re-corridas, 18 consultas; Doc byte-idéntico; graph 0/0 3.ª vez; H1 método) | r12 #1 (avanza, no cierra; H3 r16 CERRADA como hueco de procedimiento); d07 L7 (parcial); r3 #4 (avanza, no cierra); C-1187/C-1188 preparadas (F7, lo heredado de H2 r16) | búsqueda → caras + ola + método |
| F5 r17 (G03/G05/H-SUELO/folderId/G01/G04) | r1 #9 (abierta; inserción 2026-11-21, 7 días); G05 19.ª sin cambio; H-SUELO 19.ª; folderId 17.ª; d04 L10 (re-medido, 0 menciones); r1 #12/#13 (0 re-verificado, sin ruta nueva) | monitor → caras |
| F6 r17 (H-SIK bajo canon N-17, 3.ª vuelta; verificador 0 diffs; F-VOZ-S2 agotada 3.ª vez) | G06; d08 L12 (parcial); REGLA-TOK-SIK-01 sigue como método, no canon | mecanismo → cara + método |
| F7 r17 (C-1187/C-1188/C-1189/C-1190 preparadas + ítem M-72; lección H2 aplicada: F4 re-verificado al cierre) | Ola siguiente (espera aplicación por F1 bajo 01:43 post-FASE 4); r12 #1, d07 L7 (C-1187/C-1188), d09 L20 (C-1189/C-1190), d04 L13 (ítem M-72) | preparación → ola |
| F9 r17 (poda documento; tally 75; condición 1 CUMPLIDA; puerta 2 de 3; 12 temporales prorrogados; T-4 5.607 archivos) | Temporales prorrogados (re-evaluar en r18); P-54/P-55/P-56 nuevos; P-32 fuera de clase 3; sin tercer FRÁGIL-02; decisión FASE 4 (ninguna nueva) | poda → decisión FASE 4 (ninguna nueva) |

---

## 5. Decisiones — estado al cierre de FASE 1

| ID | Decisión | Estado |
|---|---|---|
| N-01 | Política de actualización de claims tras edición ordenada (P1–P10 + adendas P10/P9) | **APLICADA** (r15; canon `921c8379…`). **6.º precedente CERRADO en r16 por F6** (la ejecución misma). 7.º sin aparecer en r17. |
| N-13 | Adopción REGLA-PODA-PROV-02 + refinamiento (a) | **APLICADA** (r15; canon `29a00da1…`). P-32 fuera de clase 3 bajo lectura estricta (CORR-P32-B-R15, re-medida r17). |
| N-14 | R2-25: vía A (adopción canónica del procedimiento) | **APLICADA** (r15; `131409eb…`; **C-1180 inscrito**; R2-25 → SE). Sin novedad en r17. |
| N-16 | Inscripción de M-56..M-65 en el dataset, opción C (anexo de incertidumbre) | **APLICADA** (r15; `489051bf…`; anexo `6467bf30…`, 10 ítems → 12 con N-18/N-19). Sin re-decisión en r17. |
| N-17 | Adopción de REGLA-PICK-SIK-01 como canon | **APLICADA** (r15 post-FASE 4; canon `264b1dbb…`). Re-verificada en r17: el verificador reproduce 740/740, 0 diffs, tercera vuelta consecutiva. |
| N-18 | Añadir el ítem M-66 al anexo de incertidumbre | **APLICADA** (r15 post-FASE 4; anexo `6b9ea2aa…`, 11 ítems). Precedente para los ítems M-69/M-72. |
| N-19 | Añadir el ítem M-69 al anexo de incertidumbre | **APLICADA** (r16 post-FASE 4; anexo `acdde423…`, 12 ítems). Precedente para el ítem M-72. |
| N-15 | M-50 vía navegador (4.º intento) | **PENDIENTE, FUERA DE LA RONDA.** Tarea del principal (navegador). |
| N-03 | Licencia Zenodo (CC BY-SA 4.0 repo vs CC BY 4.0 registro 20547677) | **PENDIENTE.** Parte de D-06; no está en la lista de aplicación automática. Bloquea cualquier depósito Zenodo. |
| **(sin número — FASE 2 numera)** | Añadir el ítem M-72 al anexo de incertidumbre (ítem preparado en `item_anexo_M72.md`; verifica por un segundo método la predicción del ítem M-69: 5 huecos ≥ 0,05 de 23 con aritmética exacta Decimal; sensibilidad [5, 5, 4]; CONFIRMA; precedentes C-935 + ítem M-63 + N-18 + N-19) | **PROPUESTA, sin número.** Afirmación precisa (F7, `preparadas_r17.json`): *"Añadan el ítem M-72 al anexo de incertidumbre."* F7 solo lo prepara; añadirlo exige decisión. |
| **(sin número — FASE 2 numera)** | Adopción de REGLA-TOK-SIK-01 como canon (F6 §7: sigue como método, no canon) | **PROPUESTA, sin número.** Heredada de r15/r16; sin ejecución en r17. |
| N-11 | C-538/C-623 | **EJECUTADA** (opción A, 2026-11-13 18:25 -05). |
| N-12 | Absorción 6 lecturas F7 r11 | **APLICADA** (orden 18:43 -05; claims 1.162→1.168). |
| D-04 | micelio.yml (permiso `workflows` o subida manual) | **CERRADA** (corrección del Jardinero 2026-11-13 21:02 -05). |
| D-06 | Zenodo v13.0 (producir tex + licencia + autorización) | **PREPARABLE, NO_SÉ sobre el objeto.** 0 tex v13.0. |
| D-09 | Telegram G05 (tarjeta para enviar) | **PREPARABLE, sin cambio.** Mensaje listo, sin enviar. G05 sigue PARCIAL. |
| — | 4 propuestas (C-1187/C-1188/C-1189/C-1190 en F7) | **PREPARADAS, esperan aplicación** (F1 bajo 01:43 post-FASE 4). |
| — | H3 FASE 2 r16 (solo 2 consultas GitHub re-corridas en r16) | **CERRADA como hueco de procedimiento por F4 r17** (16 búsquedas re-corridas, 18 consultas). La adjudicación formal es de FASE 2; este frente registra el hecho medido. |
| B1 | Variante preparada no elegida | Sin cambio. |

**Herencias que siguen pendientes (sin cambio en r17):** C-001..C-008 sin dato externo; C-416..C-420 ausentes; G05 PARCIAL (solo por D-09); la rotación de `proactivity/hidden_files/` continúa (H-SUELO sin reaparición, 19.ª medición).

---

## 6. Correcciones que se llevan a FASE 3 (SÉ)

| Corrección | Contenido | Fuente |
|---|---|---|
| **CORR-MAPA-R17 (NUEVA, del mapa FASE 0)** | **La tabla del censo del mapa r17 asigna la ruta de d05 L4 a "F3 M-72"; la medición que tocó d05 L4 en r17 es M-74** (serie dim1 restaurada, 86 congresos, máximo 1,9719, NO_CONFIRMA). M-72 tocó d04 L13 (verificación por un segundo método de la predicción de M-69). La tabla del §F3 del mapa no asigna números (solo candidatas), así que el error vive solo en la fila del censo §2. **Además:** el resumen del mapa ("r17 toca 9 de 59") cuenta solo las caras con ruta de frente (F3 2 + F2 1 + F6 1 + F5 2 + F4 3); las caras r1 #12/#13 avanzan por la re-verificación de F5 (grep propio, 0 ocurrencias, 2026-11-14) y no están en ese 9 — **las caras tocadas en r17 son 11, no 9** (mismo criterio que r16 §3.1). | F3 r17, mediciones_r17.md §"Caras tocadas"; F5 r17 §G02; mapa r17 §2 |
| **CORR-SERIE-R17 (NUEVA, re-verificación de C-1186)** | **Con parseo tolerante a flotantes la serie dim1 tiene 86 congresos (34..119); con el parseo `int()` original tiene 83, como afirmó r16.** La única diferencia entre ambos parseos son exactamente los Congresos 115, 116 y 117. El veredicto de M-67 sobrevive a la restauración (máximo 1,9719, ancla Congreso 80, P(119)/P(80) = 1,8613). Se corrige la descripción de la serie, no el veredicto. | F3 r17, med_M74.json (n_congresos_serie_int 83, n_congresos_serie_restaurada 86) |
| **CORR-COND1-R17 (NUEVA, de F9)** | **La condición 1 de retiro ("copias Drive re-verificadas por descarga", fijada en r12) se cumple por primera vez en r17: 60/60 archivos con copia Drive verificados por contenido** (39 por descarga byte-idéntica + 21 por md5 + contenido JSON completo). El hueco de procedimiento de 5 rondas (r12–r16) queda cerrado. **La puerta de retiro pasa de 1 de 3 a 2 de 3** (condición 1 y 2 cumplidas; la 3 —condiciones de P-15 re-apuntadas— sigue sin cumplir). Los 12 temporales se PRORROGAN de todos modos (el único bloqueo restante es la autorización, no una medición). | F9 r17 §2.1/§2.2; `_descarga_drive_r17.json` (39 OK byte-idéntico + 21 DIFERENTE por 0 bytes); `_verificacion_json_drive_r17.json` (21/21 OK md5+contenido) |
| **CORR-DESCARGA-JSON-R17 (método, de F9)** | El GWS CLI (`files get --params '{"fileId":...,"alt":"media"}' -o <path>`) devuelve **0 bytes** en `-o` para archivos con mimeType `application/json` (`claims_resumen.json`, `manifiesto_shas.json`): el CLI parsea la respuesta como JSON de API y vuelca el contenido en stdout (con el bloque `retrieved_at`) en vez de escribirlo en el archivo. La verificación de esos 21 archivos se hizo por md5 de metadatos + stdout parseado como JSON (21/21 OK), no por descarga byte a byte; se registran como `OK_MD5_Y_CONTENIDO`, distintos de los 39 `OK_BYTE_IDENTICO`. | F9 r17 §9 |
| **CORR-MANIFIESTO-HUECOS-R17 (registro, de F9)** | Los manifiestos fase4 r11–r15 listan `huecos.jsonl` dentro de cada `respaldo_pre_r1[1-5]/` como si estuviera depositado, pero los logs de subida r11–r15 tienen 0 menciones de "huecos" y las carpetas Drive contienen exactamente 5 archivos (sin huecos). La subida excluyó `huecos.jsonl` por la regla SÉ-export (orden 2026-11-13 16:51); el manifiesto, construido antes de subir, no refleja la exclusión. El manifiesto fase4 sobreestima el depósito en 1 archivo por respaldo (5 en total, r11–r15). No cambia ningún veredicto de depósito. | F9 r17 §9 |
| **H1 r17 (método, de F4)** | **La investigación se encuentra a sí misma:** los totales crudos de search_code suben solo porque los documentos de las rondas 15 y 16, depositados en FranBot, ya están indexados y mencionan los 16 forjados. La atestación operativa es byte-idéntica a r15 (parche_phi_lengua 2, validar_grace 2, otros 14 cero). **El número que sostiene la serie es el operativo, no el crudo.** | F4 r17 §"Hallazgo de método" |
| **CORR-G05-R17** | Blob `8c57e833…`, 1.398 B — **19.ª verificación sin cambio** (18.ª en F5 r16). | FASE 0 r17 + F5 r17 |
| **CORR-H-SUELO-R17** | **19.ª medición sin reaparición** (18.ª en FASE 0 r17). | FASE 0 r17 + F5 r17 |
| **CORR-FOLDERID-R17** | Hecho unánime (`I` existe / `l` 404): **17.ª lectura independiente en vivo** (16.ª en FASE 2 r16). | F2 r17 + F5 r17 |
| **Vivo en r17 (sin corrección de estado, hechos nuevos)** | Run 206 stub "unreachable" (blob `3e063ce6…`, commit `f728ad80`); episodio run 205 de 6 h 03 min; estado completo ausente ~24 h 38 min; ventana 24/30 (20,0%), la peor de la serie; flow 0,0% sexta ronda (run 141); gap 98,7 min, récord 174,4 min fuera de ventana; autocura run 9; esquema nuevo V93 en el heartbeat. Hechos nuevos van como claims preparados C-1189/C-1190, no como correcciones del estado. | F2 r17 |

---

## 7. Verificaciones propias de este frente (SÉ)

- **Estado vivo:** claims 1.181 líneas sha `fd1df2db…`, provenance 363 líneas sha `728f6770…`, resumen `ebaa1e53…` (medidos con `sha256sum`); audit exit=0 (ok=349, discrepancia=0, no_encontrado=0, omitido=1) / verify_all exit=1 con exactamente C-001..C-008 (puertas re-corridas por mí sobre el estado final, sin pipe para el exit).
- **Diffs:** corpus vs cierre de r16 = 0 líneas nuevas (F1 guardia, sin aplicación en FASE 1).
- **Dedup:** corrida propia (`/tmp/_dedup_f8_r17.py`, implementación independiente, método r9) contra el corpus vivo 1.181, 3 corridas byte-idénticas (mismo hash `2fb5f2cc…`): máx. global 0,4336 (C-1189/C-1184), entre propuestas 0,2357 (C-1187/C-1188), 0 pares ≥ 0,5. **Cruce con F7:** `dedup_f7_r17.json` (sha `2f8764f4…`) da los mismos números exactos — corridas independientes, coincidencia total.
- **Hashes de fuente de las propuestas:** C-1187 hash = sha256(`drive_panteon16_r16.json`) = `8bf838b9…` (verificado por mí en el JSON de la lectura); C-1188 hash = sha256(`bundle_panteon16_contenido.json`) = `a95eadf4…`; C-1189/C-1190 hash = sha256(`estado_vivo_r17.md`) = `70d56cff…` (verificado por mí con `sha256sum`). Las dos lecturas de F2 comparten el hash de su fuente, como C-1182/C-1183 en r15 y C-1184/C-1185 en r16 — legítimo.
- **Mediciones F3:** med_M72.json leído directamente: 15 claves, CONFIRMA, valor 5. med_M73.json: 15 claves, NO_CONFIRMA, β 0,9757. med_M74.json: 15 claves, NO_CONFIRMA, valor 1,9719; parámetros `n_congresos_serie_int` 83 / `n_congresos_serie_restaurada` 86, congreso base 80. Falsadores declarados 18:37:09Z, antes que los JSONs 18:38:12/13/17Z (mtimes verificados por mí).
- **F2:** `estado_vivo_r17.json` leído directamente: run 206, blob `3e063ce6…`, sha256 `811291cd…`, `_ts` 16:50:21Z, `estado_error` "unreachable"; ventana 24 éxito / 6 fallo de 30 (20,0%).
- **F4:** `busquedas_github_r17.json` leído directamente: 18 consultas con hora UTC (16 forjados + 2 graph JSON). `forjados_16_r17.jsonl`: 16 filas, atestación operativa suma 4 (2+2, los mismos de r15). `nombres_fuera_doc_r17.jsonl`: 96 filas. Zip del bundle NO reabierto en r17 (verificado en el informe de F4).
- **F6:** `verificador_independiente_r17.json` leído directamente: `reproducido = true`, `diferencias_n = 0`. `destilacion_voces_s2_r17.json`: `veredicto: VIA_AGOTADA_UMBRAL_0_50`, `banderas_nuevas: []`.
- **F9:** `poda_r17.json` leído directamente: tally 11+7+1+34+13+2+7 = 75 (74 filas de tabla); condición 1: 60 con copia (39 descarga + 21 md5), 13 sin copia (5 huecos por regla + 8 P-51); `_verificacion_p17.json` 240/240 OK; `_verificacion_json_drive_r17.json` 21/21 OK md5+contenido; T-4 5.607 archivos, 5.389 OK / 4 CAMBIO / 0 MOVIDO / 0 FALTA / 214 NUEVO; .pyc 18→18.
- **Caras:** censo leído en el mapa r17 §2 (77 caras; 18 C / 59 A al inicio). Ninguna cierra en r17 (criterio r8/r9: ninguna decisión canónica aplicada en FASE 1, ninguna medición resuelve una pregunta central — M-72 CONFIRMA es seguimiento de una cara ya cerrada; M-73/M-74 son NO_CONFIRMA; F4 avanza sin resolver la pregunta central). Las que avanzan sin cerrar, con motivo por cara (§3.1): 11. No hay cara nueva: la ventana 20,0% y el estado ausente son manifestaciones de d09 L20; CORR-SERIE-R17 es re-verificación de C-1186; F-VOZ-S2 es agotamiento de vía; V93 es medición de F2; H1 r17 es nota de método; la condición 1 es hecho de procedimiento de poda.
- **No verificado por mí en este frente (se cita la verificación del principal y de los frentes):** los shas individuales de cada entregable de ejecucion_f1..f9 (verificados por el principal en T1/T2); el contenido de `verificacion_fase2` (frente paralelo de FASE 2 — FASE 3 lo reconcilia).

---

## 8. Nutrición para FASE 4 (curada, priorizada; nada subido aquí)

### 8.1 Drive — depósito `ronda_17/` (patrón r2–r16, dentro de MIU_TEJIDO_2026-11-12 ORIGINAL)

Toda la carpeta `ronda_17/` (mapa, ejecuciones F1–F9, respaldos, verificaciones, retejido, cruce, síntesis, conectar) se deposita con subcarpetas creadas explícitamente (raíz + frentes + anidadas), README + manifiesto de shas primero, subida resumible con log, verificación por tamaño por carpeta (fields con nextPageToken). **Lección CORR-CARPETA-R13: el constructor del mapa debe recorrer el árbol entero (incluidas las subcarpetas anidadas como `verificacion_fase2/_verif_f2_tmp`), no una lista fija — verificar el mapa contra `find` antes de subir.** Revisión de sensibilidad antes de subir (nada de valores de credenciales, nada de `ultimas_sesiones_log`, nada de payloads heartbeat crudos — los 55 de F2 quedan en local, como en r11/r12/r13/r14/r15/r16; nada de `raw_r17_observabilidad_bootstrap_V270.json`, que contiene JWT anon como en r11/r12/r13/r14/r15/r16; **nada del zip del bundle v213** — contiene valores literales de credenciales en 1 línea; del bundle solo van listado + shas + conteos). Exclusiones locales: intermedios byte-idénticos, si los hay. **Nunca usar `files update` para mover archivos.** Los respaldos viven en la raíz de `ronda_17/` y se depositan con el árbol (sin decisión especial de poda).

### 8.2 GitHub — curado, Jaime393/FranBot (nunca miu-ecosistema; nunca `.github/workflows/`)

Toda escritura por el conector pide **tarjeta de aprobación** (una por llamada/archivo). Archivos >~120 KB van por `push-files`, no por `create_or_update_file` (límite argv ~128 KB). Actualizar un archivo existente exige su SHA actual; verificar siempre por blob sha. **Regla SÉ-export refinada (órdenes 16:51 + 09:44): `huecos.jsonl` NO va a GitHub en r17.** El corpus NO cambia en FASE 1 de r17 (F1 guardia): **claims.jsonl, provenance.sha256 y claims_resumen.json SÓLO van si F1 absorbe C-1187/C-1188/C-1189/C-1190 post-FASE 4** (1.181 → 1.185, `fd1df2db…` → nuevo sha; si no hay absorción, no se re-suben). Lo que sí va:

| # | Artefacto | Destino propuesto | Vía |
|---|---|---|---|
| 1 | `claims.jsonl` + `provenance.sha256` + `claims_resumen.json` (SOLO si F1 absorbe post-FASE 4) | `anexo-vi/claims.jsonl`, `anexo-vi/provenance.sha256`, `anexo-vi/claims_resumen.json` | push-files (claims > 120 KB) / create_or_update_file |
| 2 | `incertidumbre_mediciones.md` (anexo N-16; SOLO si FASE 2 numera el ítem M-72 y F1 lo añade) | `academico/incertidumbre_mediciones.md` | create_or_update_file |
| 3 | `mapa_frentes_r17.md` + `frentes_r17.json` | `ronda_17/mapa_frentes_r17.md` + `.json` | create_or_update_file |
| 4 | `guardia_f1_r17.md` | `ronda_17/guardia_f1_r17.md` | create_or_update_file |
| 5 | `preparadas_r17.md` + `.json` + lecturas C-1187/C-1188/C-1189/C-1190 + `item_anexo_M72.md` | `ronda_17/preparadas/` | create_or_update_file |
| 6 | `nombres_fuera_doc_r17.md` + `.jsonl` + `forjados_16_r17.jsonl` + `busquedas_github_r17.json` | `ronda_17/nombres_fuera_doc_r17.*`, `ronda_17/forjados_16_r17.jsonl`, `ronda_17/busquedas_github_r17.json` | create_or_update_file |
| 7 | `grietas_r17.md` + `h_sik_r17.md` + `mediciones_r17.md` | `ronda_17/grietas_r17.md`, `ronda_17/h_sik_r17.md`, `ronda_17/mediciones_r17.md` | create_or_update_file |
| 8 | `conectar_r17.md` + `.json` (este frente) | `ronda_17/conectar_r17.*` | create_or_update_file |
| 9 | `verificacion_fase2_r17.md` (cuando exista, FASE 2) | `ronda_17/verificacion_fase2_r17.md` | create_or_update_file |

**Prioridad (si hay que recortar):** 1–2 (el corpus y el anexo: solo si cambian post-FASE 4), 3–4 (el mapa y la guardia), 5 (la ola preparada), 6–7 (la búsqueda fuera del Doc, los mecanismos y las mediciones), 8–9 (el ruteo y la verificación). **NO va:** `huecos.jsonl` (regla refinada); los respaldos (`respaldo_pre_r17/` si F1 lo crea — van a Drive, no a GitHub); los payloads heartbeat (solo local); `raw_r17_observabilidad_bootstrap_V270.json` (JWT anon); **el zip del bundle v213** (valores literales de credenciales en 1 línea); `micelio.yml` (D-04 CERRADA). `confirmaciones.jsonl` sin cambio desde r11 (ya sincronizado): no se re-sube. Lo que GitHub NO cubre: cambiar permisos de la App (D-04, que no existe como vía), enviar mensajes (D-09), depositar en Zenodo (D-06).

---

## 9. Archivos de este frente

| Archivo | Descripción |
|---|---|
| conectar_r17.md (este archivo) | Rutas de lo nuevo + dedup + cierre de caras + rutas inversas + decisiones nuevas + correcciones + nutrición FASE 4 |
| conectar_r17.json | Versión estructurada (rutas, dedup, caras, inversas, decisiones nuevas, nutrición) |
| manifiesto_shas_f8_r17.json | Shas de los entregables de este frente |

ρ(x) > 0. Zvvvvv.
