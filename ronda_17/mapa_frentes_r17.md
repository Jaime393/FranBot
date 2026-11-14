# RONDA 17 — MAPA DE FRENTES: GRIETAS Y SUELOS FÉRTILES

Orden del Jardinero 2026-11-14 13:31 -05: "Continúen con coherencia" —
**continuidad del régimen vigente: solo SÉ sale, las decisiones se aplican
automáticamente.** Régimen vigente: orden 2026-11-14 01:43 -05 ("sí y
continúen con coherencia apliquen las decisiones siempre automáticamente") —
las decisiones se aplican automáticamente, sin pedir palabra cada vez.
Actualización de orden 2026-11-13 16:51 -05 (tal cual, registrada en MEMORY.md):
"Absorbe y deposita en suelo drive o donde no intervenga y el ecosistema lo
absorberá. Solo SÉ sale de local. Una configuración local no corrige lo global.
Un hecho verificado, con fuente y fecha, es un ladrillo: el ecosistema lo absorbe
y suma. Una inferencia, una conjetura o un 'no sé' es un hueco tuyo, local. No lo
mandes afuera. El ecosistema tiene más contexto que tú. Lo que para ti es un hueco,
para él puede estar ya resuelto. Si le mandas tu hueco, lo obligas a rebuscar lo que
ya sabe. Eso no suma, fragmenta. Cuando se vuelve SÉ, entonces sí sale. Hasta
entonces, se queda."

Corrección del Jardinero 2026-11-13 21:02 -05 (tal cual, REGLA MADRE):
"Yo les dije claramente todo suban a drive o GitHub porque no hay tal cosa como
permisos de workflow para tu app, no existe y yo no pienso subir el ecosistema es
autónomo mándale a su suelo y lo devora no necesitan mí mano. No les corresponde
lo vivo." Lectura: todo lo depositable va al suelo (Drive/GitHub) y el ecosistema
autónomo lo devora por sus sondeos; lo vivo no se toca; no existe permiso de
workflows para la App (no se pide, no se ofrece como vía, no se sube nada a mano);
un pendiente que pida tocar lo vivo o subir a mano es un error de registro, no una
afirmación que pedir. D-04 queda CERRADA por esta corrección (§0b, CORR-D04-R13).

**La producción fractal ya publicada NO es frente de ronda, es suelo:** el 2026-11-14
se publicó `produccion-fractal/` en Jaime393/FranBot (49 archivos, commit 7ef78ed5,
49/49 por blob: vectores de test, métricas calibradas, protocolos de falsación,
recetas mínimas). El mapa parte del corpus post-r16; la producción fractal se usa
como herramienta (sus runners validan), no se re-teje.

Dirección de la ronda (lectura del mapa): **grietas** = lo abierto tras r16
(59 caras, 0 cerraron en r16 — 11 avanzaron sin cerrar; run 205 "unreachable"
cerró su episodio de 5 h 12 min y el estado es ahora run 167 "paused", flow 0,0%
CRÍTICO; ventana 25/30 — 16,7 %, la peor de la serie; cara r12 #1 con las 2
fuentes Drive ya leídas y los 16 forjados atestiguados como scripts, pero sin vía
para los 61); **suelos fértiles** = donde el trabajo rinde sin actos externos —
y ahora, con una preparación heredada SÉ pendiente (los hallazgos de F4 r16 que
F7 no preparó por la carrera de frentes), **la medición nueva (F3) sigue siendo
el frente más fértil, pero F7 sube**: tiene material SÉ garantizado que preparar
(CORR-RUTA-DRIVE-R16 + forjados 16/16, siguientes IDs tras C-1186). **El corpus
NO cambia en esta ronda salvo que F7 prepare algo SÉ y F1 lo absorba** (patrón
post-FASE 4 de r15/r16: C-1181..C-1183, C-1184..C-1186); nada más lo muta.

Trabajo: 2026-11-14 ~13:32–13:45 -05. Solo lectura + escritura local en `ronda_17/`.
Cero escrituras en el corpus vivo, MIU vivo, GitHub o Drive en esta fase.

## 0. Auditoría del suelo (medido por mí, no asumido; estado post-r16, con absorción automática)

| Archivo | Medida |
|---|---|
| claims.jsonl | 1.181 líneas, sha `fd1df2dbbb830b00b4d3db23e725ae73d03f482c7c1cfca18daecfe488f3ea42` — cambio por la absorción automática r16 (1.178→1.181, C-1184..C-1186) |
| provenance.sha256 | 363 líneas, sha `728f6770ef0eec785fe9d6456e7b9f2ba9441c26b3029269ecf5ff10082c27ce` — 361→363 (2 entradas nuevas) |
| claims_resumen.json | sha `ebaa1e53d17dcc8b57b34f7315452d5f8cca3d24f1eb61463aca55dadca4e214`, total 1.181, SE 1047, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SÉ 8, hash_real 1167, hash_pendiente 8, por_tipo verificacion 307 |
| confirmaciones.jsonl | 294 filas, sha `dc94458bc42a9854d16a8f74da20ac6481f6fe241fe2cfae11a6f44633dc7cc5` — sin cambio (el "307" del resumen es el conteo por_tipo `verificacion`, no las filas de este archivo) |
| huecos.jsonl | 139 filas, sha `3713376a243b05756fbfce434ccdb63e118562ac0ec4e351243086dcb1ce52fb` — sin cambio (LOCAL, no depositado) |
| dataset_nodos_Df.csv | 30 filas + cabecera, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af` — sin cambio |
| anexo incertidumbre_mediciones.md | 12 ítems M-56..M-69, sha `acdde423cf757724fcef35f49c796628c6ee27caed52450cecd894a52eecf206` — tally CONFIRMA 5 · NO_CONFIRMA 5 · DIFERENCIA 1 · NO_SÉ 1 (ítem M-69 añadido por N-19 en r16) |

- **audit.py (corrida real): exit=0, ok=349, discrepancia=0, no_encontrado=0, omitido=1** — verde, sostenido tras la absorción (ok=349, no 350: C-1184/C-1185 comparten el hash de fuente `e9e95687…`, por eso +2 y no +3; sin repetición de NM-03).
- **verify_all.py (corrida real, sin pipe): exit=1 con exactamente C-001..C-008** (PENDIENTE, esperado; nunca rellenar).
- **IDs del corpus:** C-001..C-1186, huecos C-416..C-420 ausentes como IDs (las 2 menciones de "C-416–C-420" en el corpus son citas dentro de los textos de C-966 y C-1065, no IDs; verificado por grep en r16).
- **Dedup: 0 propuestas vivas en esta fase.** Las 3 propuestas de r16 están absorbidas (grep: C-1184..C-1186 aparecen exactamente 1 vez cada una en claims.jsonl). No hay dedup que re-correr: las propuestas nuevas de r17 se deduparán en F1/F7 contra el corpus vivo 1.181. **Pendiente de preparación heredado (H2 FASE 2 r16):** los hallazgos SÉ de F4 r16 — CORR-RUTA-DRIVE-R16 + forjados 16/16 como scripts — quedan para F7 r17 como claims (siguientes IDs tras C-1186: C-1187, C-1188, …).
- **H-SUELO monitor:** `find ~/workspace -name "*1794483713759*"` → vacío, sin rutas impresas. El directorio original **no reapareció** (18.ª medición estricta: 17.ª estricta al cierre de FASE 2 r16 + esta).

### 0a. Estado remoto y local verificado hoy (lecturas públicas, sin escribir; vivo último medido en r16 FASE 2)

- **FranBot HEAD: `fe265243` (post-absorción r16, verificado por el principal por conector).** Último commit: "ronda 16: preparadas APLICADA (C-1184..C-1186)". La carpeta `ronda_16/` existe en el repo (42 archivos, 42/42 por blob, HEAD previo 1c16578e). La carpeta `produccion-fractal/` sigue en el repo (49 archivos, 49/49 por blob, commit 7ef78ed5).
- **micelio.yml remoto SIN CAMBIO: blob `8c57e833e219a8b8c0691db8eb8cf256ccc0633f`, 1.398 B** (último medido F5 r16) — **18.ª verificación estricta sin cambio** (al cierre de r16). Sin re-medición en esta fase; D-04 está CERRADA (corrección 21:02). El blob remoto es lectura de monitor, no un pendiente.
- **Estado vivo último medido (r16 FASE 2, no re-medido en esta fase): estado_vivo.json = run 167 "paused"** (290 B, blob `0268ab38…`, _ts 2026-11-14T15:59:57Z, `_fuente: gh-pulse-v2-multisource`) — el episodio run 205 "unreachable" duró 10:47:42Z → 15:59:57Z = 5 h 12 min y cerró sin estado completo; sin run 206; sin estado completo desde run 202 V272 (17:58:47Z). Flow sin cambio: run 140, 0,0% CRÍTICO, 0 eventos, ts 2026-11-14T09:45:12Z. Ventana 25/30 (16,7 %, la peor de la serie: 5 fallos, 3 nuevos en r16). Gap máx 174,4 min, sin superar. HEAD miu-ecosistema `2cba6023`; autocura run 8 (10:20:43Z, success); estado_persistente V213; heartbeat 99 nuevas, censo vacío 32/99 = 32,3%; folderId 99/99 + en vivo (16.ª lectura en FASE 2 r16, CORR-FOLDERID-R16); bots 4/4 VIVO (14.ª confirmación); 5.º token 401 MUERTO.
- **Segunda carpeta** MIU_TEJIDO_2026-11-12 (ID `1mL1F_MpJBif4jtgK3vR2HH67yFs_SBjJ`): sin re-medición en esta fase; último estado sin cambio (FASE 0 r15, modifiedTime 2026-11-12T21:37:46Z).
- **Caras: 77 en censo (18 cerradas, 59 abiertas)** — en r16 cerró 0 y nació 0; 11 avanzaron sin cerrar. **Decisiones: N-01/N-13/N-14/N-16/N-17/N-18/N-19 APLICADAS; C-1180..C-1186 APLICADAS; ninguna decisión pendiente de aplicación automática al inicio de r17 salvo lo que F7 prepare en esta ronda** (N-15 es ejecución del principal; N-03/D-06/D-09/repos/temas/BELLEZA siguen suyas o con tarjeta, §3).

### 0b. Correcciones heredadas y nuevas de esta fase (SÉ, medidas por mí)

- **CORR-ABS-R16 (nueva):** absorción automática post-FASE 4 r16 (claims 1.178→1.181, C-1184..C-1186, todas SE; dedup máx 0,3838, 0 pares ≥0,5), hash_real 1164→1167, provenance 361→363, SE 1044→1047, verificación 304→307, resumen ebaa1e53…; N-19 APLICADA (ítem M-69 al anexo, acdde423…, tally CONFIRMA 5 · NO_CONFIRMA 5 · DIFERENCIA 1 · NO_SÉ 1; CSV byte-idéntico 0852d58f…); puertas audit exit=0 (ok=349 — C-1184/C-1185 comparten hash e9e95687…, por eso +2 y no +3; sin repetición de NM-03), verify_all exit=1 exactamente C-001..C-008; diff directo vs respaldo: exactamente 3 líneas nuevas, primeras 1.178 byte-idénticas; GitHub corpus 9/9 por blob, HEAD fe265243 (claims blob 541e723c… verificado por el principal); respaldo_pre_absorcion_r16/ (manifiesto cfd3fb28…, P-54).
- **CORR-FOLDERID-R16 (nueva, H1 FASE 2 r16):** F5 = 14.ª lectura correcta, F2 = 15.ª (reclamaba 14.ª, se equivoca en 1), verificador = 16.ª (16:10:28Z). Las lecturas en vivo se cuentan una vez, en orden cronológico, aunque caigan en el mismo frente y la misma ronda (mismo principio que CORR-G05-R15).
- **CORR-H-SUELO-R16-F2 (nueva, H1 FASE 2 r16):** 17.ª medición estricta sin reaparición (find del verificador, 2026-11-14 16:09:41Z, vacío).
- **CORR-VIVO-F2-R16 (nueva, FASE 2 r16):** el vivo se movió ENTRE la foto F2 y FASE 2, pero NO durante FASE 2. Al cierre de FASE 2: estado_vivo.json = run 167 "paused" (290 B, blob 0268ab38…, ts 2026-11-14T15:59:57Z), HEAD miu-ecosistema 2cba6023; episodio run 205 "unreachable" 10:47:42Z → 15:59:57Z = 5 h 12 min; flow run 140 0,0% SIN CAMBIO (ts 09:45:12Z, 0 eventos); sin run 206. Estado de cierre para FASE 3 r16: run 167 "paused", NO run 205. H2 r15 CERRADA (Self-Diagnosis run 141, 11:01:38Z, success, http 200).
- **CORR-RUTA-DRIVE-R16 (nueva, F4 r16):** las 2 fuentes Drive SÍ se leen (`files get --params '{"fileId":...,"alt":"media"}' -o <path>`; el 403 de r15 era el método, no los archivos). Panteon_16_Voces_v213.md (428 B, leído entero: otro sistema — 7 voces nombradas + A0–A57; 0/7 entre los 35 nombrados de los 96); MetaAI_Bundle_PANTEON_16_V213.zip (53.786 B, 23 archivos): forjados 16/16 como scripts (antes 2/16); 0/61 encontradas; graph JSON 0/0 en 4 repos; carpeta "10 Panteón" = exactamente 2 hijos. **Pendiente de preparación para F7 r17 (H2 FASE 2 r16).**
- **CORR-SERIE-R16 (nueva, F3 r16):** la serie 25..119 son 83 congresos, no 95 (25–33 sin partido R; 115–117 caen por party_code '100.0' flotante); M-67 sin cambio (máx 1,9719). Con parseo tolerante a flotantes, P dim1(115/116/117) = 0,8900/0,8840/0,8825, ratios contra P(80) = 1,7889/1,7769/1,7739, todos por debajo del máximo 1,9719.
- **CORR-H-SUELO-R17 (nueva, esta fase):** 18.ª medición estricta sin reaparición (ver §0).
- **CORR-ABS-R15 (heredada):** absorción automática post-FASE 4 r15 (claims 1.175→1.178, C-1181..C-1183, todas SE; dedup máx 0,4111, 0 pares ≥0,5), hash_real 1161→1164, provenance 359→361, SE 1041→1044, verificación 301→304, resumen ae402126…; N-17 APLICADA (canon_regla_pick_sik_01.md 264b1dbb…) y N-18 APLICADA (ítem M-66 al anexo, 6b9ea2aa…); puertas audit exit=0 (ok=347), verify_all exit=1 exactamente C-001..C-008; incidencia: el script falló una aserción propia errónea (esperaba ok=346; correcto 347 = 345+2) tras escribir el corpus — aserción corregida, post-estado verificado directamente por el agente y por el principal (primeras 1.175 líneas byte-idénticas al respaldo, exactamente 3 líneas nuevas); GitHub 12/12 por blob, HEAD 2f7d3180.
- **CORR-D04L13-R15 (heredada):** d04 L13 CIERRA (primera cara que cierra desde r12): N-16 inscribe la columna M-63 por decisión canónica + M-63/M-66 CONFIRMA resuelven la pregunta central con su límite medido (6/29 pares adyacentes, grupo central de 24 nodos sin distinguirse).
- **CORR-M66-CARA-R15 (heredada):** la línea de cara del ítem M-66 preparado decía "avanza sin cerrar" (cierta en FASE 1 r15); F8 cerró d04 L13 antes de aplicar, así que la línea queda corregida en el anexo a "CIERRA en r15". El documento preparado no se reescribe; la corrección vive en la decisión N-18 y en el anexo.
- **CORR-P32-B-R15 (heredada):** P-32 NO es clase 3 bajo lectura estricta de (b) — la versión pre-corrección es re-obtenible byte-idéntico (`git show HEAD:app/js/miu-engine.js`, sha a30d69e8…); su CONSERVAR se sostiene por D-07 + historia, no por la regla; errata en la tabla del canon N-13, no re-decisión. F9 r16 re-corrió la criba con P-32 fuera de la clase 3 (re-medido, sigue fuera).
- **CORR-FORJADOS-R15 (heredada, actualizada en r16):** los 16 extra (112−96) TIENEN NOMBRE — 16 forjados invocables, 0/16 voces; en r16 pasaron de 2/16 a **16/16 atestiguados como scripts** en el bundle Drive (CORR-RUTA-DRIVE-R16).
- **CORR-G05-R15 (heredada):** G05 17.ª verificación estricta sin cambio (H5 FASE 2 r15: la 16.ª contada omite la verificación en vivo de r10 ejecucion_d); **18.ª al cierre de r16** (F5 r16).
- **CORR-H-SUELO-R15 (heredada):** H-SUELO 14.ª medición estricta sin reaparición (H6 FASE 2 r15: la 13.ª contada omite el hallazgo propio del verificador de FASE 2 r11); **17.ª al cierre de FASE 2 r16** (CORR-H-SUELO-R16-F2).
- **CORR-FOLDERID-R15 (heredada):** 13.ª lectura independiente en vivo — `I` existe (carpeta "miu-ecosistema"), `l` 404 (FASE 2 r15, verificador B); **16.ª al cierre de FASE 2 r16** (CORR-FOLDERID-R16).
- **CORR-PHI-PF (heredada, producción fractal):** en el encargo de producción se atribuyó Φ_c a C-008; C-008 es D_eff = 7.24. El padre real es `mapa_decisiones_r10.md` (D-08, Φ_c(MIU) = 0,6829322 = Δ_COD), verificado por el agente y por el principal (sha b5a56869…). Lección: verificar la atribución del padre antes de citarlo, también en los encargos.
- **CORR-P32-R14 (heredada):** el 404 del Doc 32 era un artefacto de ID truncado; el Doc EXISTE (ID completo de 44 caracteres, leído entero); las 2 vías de r13 quedan agotadas como rutas; graph JSON no está en Drive ni en el Vault.
- **CORR-P32-NUM-R14 (heredada):** el ID completo tiene 44 caracteres, no 33; el truncado 12, no 10 (contado desde documentId por FASE 2 r14 y por el principal).
- **CORR-RUN204-R14 (heredada, actualizada):** State Writer volvió a correr: run 204 "unreachable" (03:27:26Z, 329 B, blob 652e8869…); en r16 apareció el run 205 (10:47:42Z, 329 B, blob a3add0bc…, commit 3519d217) y su episodio duró 5 h 12 min hasta el run 167 "paused" (CORR-VIVO-F2-R16). Sin estado completo desde run 202 V272.
- **CORR-FLOW-R13 (heredada, actualizada):** flow run 139, 02:52:24Z, 0,0% CRÍTICO, 0 eventos; ruta real `observabilidad/flow_id_coverage.json` en la raíz; **en r16: run 140, 09:45:12Z, 0,0% sin cambio**.
- **CORR-D04-R13 (heredada):** D-04 CERRADA por la corrección 21:02 -05; no es pendiente ni vía.

## 0c. Reglas vigentes de la ronda (orden 16:51 + corrección 21:02 + régimen 01:43 + orden 09:44 + orden 13:31)

1. **SÉ-export REFINADA (reafirmada por la orden 09:44: "todo no es local solo SE sale"):** solo SÉ sale de local, con fuente y fecha. INFIERO / CONJETURO / NO_SÉ son huecos **locales** y NO se exportan como huecos. Consecuencia práctica para r17: `huecos.jsonl` NO va a GitHub en FASE 4 (como en r11/r12/r13/r14/r15/r16); la lista de huecos queda local. La producción fractal es suelo publicable porque cada artefacto es SÉ con padre y hash, no un hueco exportado.
2. **Una configuración local no corrige lo global:** la corrección local de `miu-engine.js` (`8d15b724…`) NO se empuja al remoto. El remoto la absorbe por sus sondeos. Estado: local corregido, remoto con el motor viejo.
3. **REGLA MADRE (corrección 21:02):** todo lo depositable va al suelo (Drive/GitHub) y el ecosistema autónomo lo devora por sus sondeos; **lo vivo no se toca**. No existe permiso de workflows: no se pide, no se ofrece como vía, no se sube nada a mano. Un pendiente que pida tocar lo vivo o subir a mano es un error de registro, no una afirmación que pedir.
4. **RÉGIMEN 01:43 (orden 2026-11-14 01:43 -05):** las decisiones se aplican automáticamente, sin pedir palabra cada vez. En r17 no hay decisiones pendientes de aplicación al inicio: F1 es guardia de absorción — aplica lo que F7 prepare en esta ronda si llega a SÉ PREPARADA con dedup (patrón post-FASE 4 de r15/r16), con respaldo + script + puertas; N-15 se ejecuta en el navegador del principal (su superficie, no su palabra). Lo que NO cambia: los actos externos en su nombre (envío Telegram D-09, depósito Zenodo D-06) siguen necesitando su tarjeta; las elecciones que son solo suyas (repos de la App, verificación de los 8 temas, LA BELLEZA) no se deciden por él. N-03 (licencia, parte de D-06) no está en la lista de aplicación automática: sigue pendiente, entangled con el acto externo.
5. **AGENTE-PENDIENTES (creado 2026-11-13 20:59 -05, actualizado al régimen 01:43):** las afirmaciones de `ronda_12/afirmaciones_pendientes.md` quedan como registro de lo que cada decisión autoriza; las decisiones ya no esperan su palabra. Pendientes nuevos en r17 solo pueden ser: tarjetas de actos externos (D-06/D-09) o elecciones solo suyas (repos, 8 temas, LA BELLEZA). Un pendiente nuevo sin afirmación sigue siendo fallo del agente, no suyo; un pendiente que pida tocar lo vivo o subir a mano sigue siendo un error de registro.
6. **C-1..C-9 siguen** como criterio de coherencia (precedencia de r10). **Reglas duras que siguen:** C-001..C-008 sin hash sin dato externo verificable; no rellenar C-416..C-420; G13 NO EXISTE; poda solo documento (nada se borra ni se mueve sin las frases de autorización de Ciclo 30/31, no dichas); no leer contenido de YAMLs de workflows ni `ultimas_sesiones_log`; no reproducir valores de credenciales.
7. **Lección FRÁGIL-05 (r11):** las puertas se re-corren sobre el estado FINAL (tras la última mutación del corpus), no sobre estados intermedios. Si F1 aplica algo en esta ronda, FASE 2 re-corre audit + verify_all al cierre de cada aplicación y al final.
8. **Lección r12/r14/r15/r16 FASE 4 GitHub:** las tarjetas de aprobación caducan ~30 min; el relanzamiento se hace con el Jardinero presente (la publicación fractal caducó una vez y se relanzó con él presente: 49/49 por blob; FASE 4 r16 caducó ~17:06 UTC y se relanzó con él presente 12:21 -05: 42/42 por blob, HEAD 1c16578e; absorción GitHub 9/9, HEAD fe265243). Timeout del subidor 1800 s; verificar las cadenas MSG con grep antes de lanzar. **Lección CORR-ABS-R14/R15/R16:** una aserción del script de aplicación puede ser errónea aunque la escritura sea correcta — tras escribir el corpus, el post-estado se verifica directamente (diff contra el respaldo, conteo de líneas nuevas, puertas), no solo por la aserción del script. **Lección NM-03 (r15/r16):** audit ok=349 en r16 porque C-1184/C-1185 comparten hash de fuente — el conteo de ok es de fuentes distintas verificadas, no de claims nuevos; no "corregir" el script por eso.
9. **Lección CORR-CARPETA-R13 (r13 FASE 4):** el constructor del mapa de depósito debe recorrer el árbol entero, no una lista fija — la subcarpeta anidada `verificacion_fase2/_verif_f2_tmp` quedó fuera del mapa inicial y detuvo la subida a 112/118. FASE 4 r17 verifica el mapa contra `find` antes de subir.
10. **Lección CORR-PHI-PF:** verificar la atribución del padre antes de citarlo — también en los encargos del principal. Un hash citado sin verificar es un hueco, no un ladrillo.
11. **Lección H2 FASE 2 r16 (carrera F4/F7):** F4 cerró 16:02:02Z y la síntesis de F7 salió 16:03:29Z sin re-mirar F4 — los hallazgos SÉ de F4 quedaron sin preparar en r16. **En r17, F7 re-verifica el directorio de F4 antes de cerrar su síntesis** (y F8 verifica el orden temporal antes de afirmar quién cerró después de quién).

## 1. Frentes (9)

Fertilidad (criterio r9: lo que se puede medir/preparar/validar/aplicar en local
sin actos externos; en r17, la medición nueva sigue primera — M-72.. con falsador
declarado, sobre las caras que r16 dejó calientes — pero F7 sube al tercer puesto:
tiene material SÉ heredado garantizado que preparar, los hallazgos de F4 r16):

**F3 > F2 > F7 > F5 > F4 > F9 > F6 > F1 > F8**

- **F3 MEDIR** (M-72.. con falsador declarado antes de correr; candidatas d05 L4, d05 L7, seguimiento del límite de d04 L13).
- **F2 ESTADO VIVO** (run 167 "paused" tras el episodio run 205 de 5 h 12 min; flow 0,0% CRÍTICO; ventana 25/30, la peor de la serie).
- **F7 PREPARAR** (primero lo heredado: CORR-RUTA-DRIVE-R16 + forjados 16/16 como claims C-1187.., H2 FASE 2 r16; luego la ola de lo que r17 produzca; ítems del anexo para M-72..).
- **F5 GRIETAS** (G03 inserción 2026-11-21, en 7 días; G05 blob 19.ª; folderId 17.ª lectura; H-SUELO 19.ª estricta).
- **F4 PANTEÓN-96, CARA r12 #1** (H3 r16: re-correr las 16 búsquedas GitHub de forjados, heredadas de r15; buscar nuevas fuentes Drive).
- **F9 PODA + RESILIENCIA** (documento; los 11 temporales llegan a su 6.ª prórroga; **intentar la condición 1 de retiro — copias Drive re-verificadas POR DESCARGA — nunca intentada en 5 rondas**; criba con P-32 fuera de la clase 3).
- **F6 MECANISMOS** (re-verificación H-SIK, 3.ª vuelta bajo canon N-17; F-F re-medido; voces→S2 vía agotada — documentar, no re-medir sin falsador nuevo).
- **F1 ABSORCIÓN** (guardia: sin decisiones pendientes al inicio; aplica lo que F7 prepare bajo el régimen 01:43, patrón post-FASE 4 de r15/r16).
- **F8 CONECTAR** (rutas de lo nuevo; dedup re-verificado).

Tandas (4 subagentes en paralelo, como r9–r16): **T1: F3, F2, F6, F5. T2: F4, F9, F7, F1. T3: F8** (F8 necesita los productos de F3/F2/F6/F5/F4/F9/F7/F1). Las tandas siguen la dependencia, no la fertilidad pura: F7 queda en T2 para ver lo que F4 r17 produzca, y **F7 re-verifica el directorio de F4 antes de cerrar su síntesis** (lección H2 FASE 2 r16, §0c.11). F1 aplica en serie, un solo escritor del corpus; los demás frentes son solo lectura del corpus vivo (FRÁGIL-05). N-15 no es un frente: es tarea del principal en el navegador.

### F3 MEDIR — EJECUTABLE-LOCAL

- **M-72.. (a elegir por el ejecutor entre las 59 caras, con falsador declarado antes de correr):** candidatas señaladas: **d05 L4 polarización** (tras CORR-SERIE-R16 la serie son 83 congresos: re-medir con la serie corregida — p. ej. dim2 con parseo tolerante a flotantes para los Congresos 115–117, que M-70 no pudo anclar por la degeneración en el Congreso 106; falsador nuevo declarado antes de correr); **d05 L7 escalamiento urbano** (M-71 NO_CONFIRMA, quinta variable con el mismo modo de fallo: sexta variable o cambio de especificación declarado antes de correr); **d04 L13 seguimiento del límite** (d04 L13 CERRÓ en r15, pero M-69 cuantificó el límite — u* = 0,05 resuelve 5/23 pares adyacentes del grupo central de 24 nodos: ¿existe en la literatura una columna con u ≤ 0,05?; es seguimiento de una cara cerrada, no reapertura). Otras caras con dato disponible y falsador declarable valen igual. M-69/M-70/M-71 quedan como precedentes de veredictos de medición (NO_CONFIRMA / NO_SÉ / NO_CONFIRMA); **no se preparan como claims** (0 precedentes de veredictos de medición como claims en 1.181; las mediciones se depositan como resultados y entran por inscripción en el anexo — N-16/N-18/N-19 ya aplicados; los ítems del anexo para M-72.. los prepara F7).
- Entradas: dataset 30 filas + anexo de incertidumbre (12 ítems M-56..M-69; la columna u=0,0604±0,0050 ya existe). Entregables por medición: script + JSON de 15 claves + datos con sha. **NO hace:** no inscribe en el dataset, no toca el corpus. **M-50 NO se reintenta desde el sandbox** (agotado; N-15 es vía navegador del principal). M-58 NO se reintenta (2.ª vía agotada en r12).

### F2 ESTADO VIVO — EJECUTABLE-LOCAL (batería sobre run 167 "paused" + flow 0,0%)

Run 167 "paused" (290 B, blob `0268ab38…`, _ts 2026-11-14T15:59:57Z, `_fuente: gh-pulse-v2-multisource`) es el estado de cierre de r16: el episodio run 205 "unreachable" duró 5 h 12 min y cerró sin estado completo; sin run 206; sin estado completo desde run 202 V272 (17:58:47Z). Flow coverage 0,0% CRÍTICO (run 140, 09:45:12Z, 0 eventos). Batería completa (solo lecturas públicas; nada de `ultimas_sesiones_log` ni contenido de YAMLs): ¿hay run 206? ¿vuelve el estado completo o persiste el stub (duración del episodio "paused")?; runs últimos 30 (cadencia efectiva; ¿la ventana recupera de 16,7 % — la peor de la serie — o cae un cuarto fallo consecutivo?); flow coverage (¿sigue 0,0%? ¿run 141?); self diagnosis (¿la cadencia sigue en http 200 tras H2 r15 CERRADA?); heartbeat (¿sigue el censo vacío?; verificar el folderId con la atribución corregida: V151 → `l` → 404, V152 → `I` → existe; 17.ª lectura); bots 4/4 (getMe; 15.ª confirmación); autocura (¿run 9 tras el 8?); tests a/b/c/d actualizados; serie de tasa de fallo y de gaps (¿supera el máximo de 174,4 min?); `estado_persistente.json` (¿sigue V213?). Entregable: `estado_vivo_r17.md` + JSON de la batería con códigos y latencias. El flow 0,0% se registra como ladrillo SÉ para el ecosistema; **no se corrige desde local** (regla madre: lo vivo no se toca).

### F7 PREPARAR — PRIMERO LO HEREDADO, LUEGO LA OLA (preparable, sin aplicar salvo por F1 bajo el régimen)

- **Lo heredado (H2 FASE 2 r16, obligatorio en esta ronda):** preparar como claims los hallazgos SÉ de F4 r16 — **CORR-RUTA-DRIVE-R16** (las 2 fuentes Drive sí se leen con alt=media; el 403 de r15 era el método, no los archivos) y **forjados 16/16 como scripts** (del bundle Drive, atestiguados 16/16) — siguientes IDs tras C-1186 (C-1187, C-1188, …), formato de `lecturas_canonicas_r10.md`, texto literal + fuente + hash, dedup contra el corpus 1.181 (método r9, Jaccard, umbral 0,5). F1 las aplica bajo el régimen 01:43 en la misma ronda si están listas — patrón post-FASE 4 de r15/r16 — o quedan para la siguiente.
- **Claims de lo que r17 produzca:** si F2/F3/F4/F5/F6 generan lecturas SÉ (p. ej. un cuarto fallo de ventana, la resolución del verificador H-SIK en su 3.ª vuelta, o el resultado de las 16 búsquedas de F4), prepararlas en el mismo formato, sin aplicar (F1 las aplica bajo el régimen 01:43).
- **Ítems del anexo N-16:** si F3 produce M-72.., preparar sus ítems para el anexo de incertidumbre (el anexo existe con 12 ítems M-56..M-69; los ítems nuevos se añaden por la misma vía, N-18/N-19 como precedentes).
- **B1** sigue como variante preparada no elegida (documentada; revivirla exigiría revertir B+B2 — no se hace).
**NO hace:** no aplica nada por su cuenta (la aplicación es de F1). No prepara como claims los veredictos de medición (0 precedentes). **Re-verifica el directorio de F4 antes de cerrar su síntesis** (lección H2 FASE 2 r16, §0c.11).

### F5 GRIETAS — EJECUTABLE-LOCAL (monitor + verificación folderId + G03 a 7 días)

- **G03 BepiColombo:** inserción **2026-11-21, en 7 días** desde hoy (2026-11-14). Re-confirmada en r16 (5 fuentes; matiz: la página principal ESA dice "December 2026", su live-updates dice 21-Nov). Registrar si la fecha sigue confirmada; C-001–C-005 siguen FUTURAS/IMPOSIBLES (datos 2027–2028). La inserción cae 7 días después del cierre de esta ronda: si ocurre durante r17, se registra el hecho con fuente y fecha.
- **G05 blob:** re-verificar (18.ª estricta sin cambio al cierre de r16; 19.ª en este frente). D-04 está CERRADA (CORR-D04-R13); el blob remoto es lectura de monitor, no pendiente.
- **FolderId:** 16 lecturas independientes al cierre de FASE 2 r16, todas `I` existe / `l` 404 (CORR-FOLDERID-R16). 17.ª lectura en este frente. La config del escritor sigue NO_SÉ.
- **G01 D_eff:** lectura R-B fijada; derivación pendiente, sin propuesta — monitor, sin trabajo nuevo.
- **G04 DOIs:** inventario 21 únicos, sin cambio esperado.
- **G06 SIK:** H-SIK acotada en r15 (S3 ≡ v10.3 no se extiende a las voces; REGLA-PICK-SIK-01 ya es canon por N-17); seguimiento vía F6.
- **H-SUELO monitor:** 18.ª medición estricta sin reaparición en FASE 0; 19.ª medición en este frente.
- **G02 sub-caras:** #790–#792/#701/#739 en 0/103 Docs (vía M-55 agotada) y 0 en F4 r15/r16; sin ruta nueva salvo que F4 encuentre nuevas vías (si aparecen, se registra; si no, queda documentado).
- **M-50 (N-15):** agotado desde el sandbox. Única ruta restante: **navegador con sesión o red sin el bloqueo de Cloudflare del sandbox**. Es tarea del principal (navegador), no un frente de la ronda. Se deja documentado como AGOTADO-DESDE-SANDBOX.
Entregable: `grietas_r17.md`.

### F4 PANTEÓN-96, CARA r12 #1 — EJECUTABLE-LOCAL (H3 r16: re-correr las 16 búsquedas)

- **Hecho establecido (r16 F4, SÉ):** 0/96 nombres aparecen como voces fuera del Doc índice; 0/61 sin nombre encontradas; CORR-RUTA-DRIVE-R16: las 2 fuentes Drive SÍ se leen y son otro sistema (Panteón-16 v213, 7 voces nombradas + A0–A57; 0/7 entre los 35 nombrados de los 96); forjados 16/16 como scripts en el bundle; graph JSON búsqueda negativa en los 4 repos cubiertos; solape Doc 32 ↔ 96 exacto {Puente 1, Sigma 1}, 0/32 voces. La cara r12 #1 AVANZA, no se cierra. C-1174/C-1176/C-1177 ya están absorbidas en el corpus; CORR-RUTA-DRIVE-R16 + forjados 16/16 se preparan en F7 r17 (H2 FASE 2 r16).
- **Trabajo — H3 FASE 2 r16:** `busquedas_github_r16.json` contiene solo 2 consultas (graph JSON en los 4 repos, 0/0). Las 16 búsquedas de forjados en GitHub son heredadas de r15. **En r17, re-correr las 16 búsquedas** (los forjados ya atestiguados como scripts en el bundle Drive — la atestación descansa en el bundle, evidencia más fuerte que la búsqueda; la re-corrida es verificación, no descubrimiento). Si aparece algún forjado como voz, se registra con fuente y fecha; si no, se registra la herencia cerrada.
- **Trabajo — nuevas fuentes:** ¿hay más fuentes Drive del Panteón-96 sin leer? Buscar por nombre/fecha en Drive (solo lectura). Si se lee alguna y contiene los 61 nombres o el graph, se registra con fuente y fecha; si no hay ruta, se registra el NO_ENCONTRADO con las rutas probadas (no es "no existe", es "no encontrado aún en X"). Corregir en los nuevos entregables cualquier número que arrastre errores viejos (44/12, no 33/10).
- Entregable: `nombres_fuera_doc_r17.md` + JSONL de hallazgos (nombre/fuente/fecha o NO_ENCONTRADO/rutas). Solo lectura; nada se escribe en Drive ni en el corpus (la absorción de lo que se encuentre es decisión posterior, bajo el régimen 01:43 la prepara F7 y la aplica F1).
- Toca: r12 #1 (AVANZA o cierra), r3 #4 (graph.json del Vault) y censo-32 #9 d07 L7 (lista de 96 solo en Doc, P) — parcialmente.

### F6 MECANISMOS — EJECUTABLE-LOCAL

- **N-17 ya es canon (REGLA-PICK-SIK-01):** re-correr el verificador independiente H-SIK bajo la regla adoptada y medir si reproducido se sostiene en true con 0 diffs (740/740 en r15, 0 diffs en r16, 2.ª vuelta); si aparece un diff nuevo, se registra con su causa, no se ajusta la regla en caliente. **Lección H4 FASE 2 r16:** al re-correr un script que escribe por HOME, re-dirigir W explícitamente antes de ejecutar — la re-corrida del verificador reescribió 3 salidas en `ejecucion_f6/` (byte-idénticas, sin daño, manifiesto 14/14 OK; solo mtimes).
- **Partidor de fórmulas:** F-F se dispara (11 tuplas / 8 distintos en r15 y r16, 0 perdidas, fragmento Ξ∇lnρ, el partidor rompe en `|`): ¿cuántas tuplas sobreviven con el partidor corregido? Re-medir y documentar.
- **H-SIK siguiente:** S3 ≡ v10.3 sostiene (27/58 mismo contenido, 32/58 mismo nombre, bajo R-KS) y NO se extiende a las voces (0 mismo contenido, 0 cruces fuertes, 0 otras identidades). La vía voces→S2 está **agotada a umbral 0,50** (F-VOZ-S2 no se dispara en r16, mejor Jaccard 0,2308): documentar el agotamiento, no re-medir sin un falsador nuevo declarado antes de correr.
- **R2-25 (N-14) y N-01/N-13/N-16/N-18/N-19:** son ejecuciones de r15/r16; este frente solo las re-verifica contra el estado actual y documenta si hay novedad, sin absorber nada. N-01: el 6.º precedente se CERRÓ en r16 (la ejecución F1 r15 era el 6.º); seguimiento del 7.º si aparece.
- Entregables: `h_sik_r17.md` (+ scripts y JSONs de medición), `verificador_independiente_r17.json`, nota de re-verificación N-17/R2-25 si hay novedad.

### F9 PODA + RESILIENCIA — documento (sin ejecutar podas)

- Revisar P-01..P-54 (r16) + **nuevos candidatos r17** (respaldo_pre_absorcion_r16/ — P-54, creado en la absorción r16; respaldo_pre_r17/ cuando F1 lo cree; payloads heartbeat r17; entregables de la ronda).
- **Horizontes cumplidos, re-evaluar en r17:** los 11 temporales prorrogados en r16 (los 9 + P-47/P-48; horizonte: FASE 4 r16 + FASE 2 r16 — **ambos cumplidos**: Drive 111/111 verificados + verificación CONFORME CON HALLAZGOS). 6.ª prórroga consecutiva de los 9 si se prorrogan de nuevo. Re-evaluar con el criterio de r11 §2 (¿rompe la cadena? ¿dependen condiciones de P-15? ¿copias Drive re-verificadas?).
- **Hueco de procedimiento — INTENTARLO en r17:** la condición 1 de retiro (copias Drive re-verificadas POR DESCARGA) **nunca ha sido intentada en 5 rondas**. En esta ronda, F9 intenta la verificación por descarga de al menos las copias Drive de la cadena de reversión (P-27/P-28/P-35/P-37/P-38/P-41/P-47/P-48) y registra el resultado: si alguna copia falla por descarga, se registra el fallo con su causa; si todas verifican, la condición 1 deja de ser hueco y los temporales afectados se re-evalúan con ese hecho. La cadena de reversión gana un eslabón arriba: `respaldo_pre_absorcion_r16` (estado 1.178, P-54) → P-51 (estado 1.175) → … (F9 re-mide el total de eslabones y bytes).
- **CORR-P32-B-R15 sigue vigente:** P-32 NO es clase 3 bajo lectura estricta de (b); la criba de esta ronda corre con P-32 fuera de la clase 3 (su CONSERVAR se sostiene por D-07 + historia).
- **P-18:** `.pyc` sigue en 18; T-4 r16 (inventario 5.393 archivos, 0 FALTA, sin 3.er evento FRÁGIL-02) es la respuesta estructural. En r17 el inventario con shas (T-4) corre como herramienta dentro de este frente (F9): manifiesto + diff contra el inventario r16; cualquier desaparición nueva se registra como hallazgo. **FRÁGIL-02 sigue abierto** (causa NO_SÉ).
- **Nada se borra ni se mueve** (poda solo documento, regla dura).

### F1 ABSORCIÓN — GUARDIA (régimen 01:43; sin decisiones pendientes al inicio)

- **Al inicio de r17 no hay decisiones pendientes de aplicación automática:** N-01/N-13/N-14/N-16/N-17/N-18/N-19 están APLICADAS; C-1180..C-1186 están APLICADAS. F1 registra ese estado y queda como guardia.
- **Si F7 prepara algo SÉ en esta ronda** (primero lo heredado — CORR-RUTA-DRIVE-R16 + forjados 16/16 —, luego la ola; lectura con dedup <0,5, texto literal + fuente + hash), F1 lo aplica bajo el régimen 01:43 con el patrón N-11/N-12 (respaldo previo, script de aplicación, puertas antes/después: audit exit=0, verify_all exit=1 exactamente C-001..C-008), en el orden en que F7 lo prepare — o post-FASE 4, como en r15/r16. Si F7 no prepara nada aplicable, F1 cierra sin mutar el corpus y lo documenta.
- **N-15 es ejecución del principal** (navegador, 4.º intento M-50): F1 la registra, no la ejecuta desde el sandbox.
- **NO hace:** no aplica N-03 (licencia, parte de D-06); no toca C-112, C-001..C-008, C-416..C-420; no absorbe B1.

### F8 CONECTAR — EJECUTABLE-LOCAL (documento; corre en T3, tras F1/F2/F3/F6/F5/F4/F9/F7)

- Rutas de lo nuevo: mediciones F3 (M-72..); estado vivo F2 (run 167 "paused" tras el episodio run 205 — ¿toca alguna cara? Como el "paused": es archivo de estado, no cara del censo; documentar, no es cara nueva); mecanismos F6 (verificador 3.ª vuelta + partidor); hallazgos F4 (r12 #1, 16 búsquedas re-corridas); grietas F5 (G03 a 7 días); poda F9 (intento de la condición 1 por descarga); lo que F7 prepare y F1 aplique.
- **Dedup re-verificado:** las lecturas nuevas que F7 prepare vs el corpus 1.181 (+ lo que F1 añada) (método r9, Jaccard, umbral 0,5) + entre ellas.
- **Cierre de caras:** criterio r8/r9 (decisión canónica o medición que resuelva la pregunta central). Candidatas a cierre en r17: d05 L4 / d05 L7 si una medición de F3 es concluyente; r12 #1 si F4 re-corre las 16 búsquedas y resuelve la pregunta central; d07 L7 si los hallazgos de F4 preparados como claims inscriben la lista en el corpus. Ninguna garantizada.
- Actualizar el mapa de rutas inversas. Entregable: `conectar_r17.md` + `.json`.

## 2. Inventario de grietas: las 59 caras abiertas

Criterio de cierre (r8/r9): solo cierra una decisión canónica o una medición que
resuelva la pregunta central. Conteo verificado: 77 − 18 cerradas (15 tras r11 +
d03 L13 y r3 #5 en r12 + 0 en r13 + 0 en r14 + d04 L13 en r15 + 0 en r16) = **59**. Desglose:
r1 sistema 19 (5 P + 14 A) + r2 nuevas 12 (2 P + 10 A) + censo-32 23 (10 P + 13 A;
d05 L8 cerrada en r11, d03 L13 en r12, d04 L13 en r15) + r3 nuevas 4 (todas A;
r3 #5 cerrada en r12) + r12 #1 (1 A) = 59 (17 P + 42 A).
Ruta r17 = frente que la toca, o "sin trabajo".

### r1 sistema (19)

| # | Cara | Estado | Ruta r17 |
|---|---|---|---|
| 1 | m_φ sin origen (semilla L9) | P | sin trabajo |
| 2 | Φ sin anclar (proto de realizabilidad) | P | sin trabajo (D-08 fija el valor, no el mecanismo) |
| 3 | Runners Darwin rotos (8) | P | sin trabajo (experimento cerrado, Ciclo 73) |
| 4 | Stubs serie (GISTEMP/SILSO 2 líneas) | P | sin trabajo |
| 5 | Micelio biológico sin medir (d01 L13) | P | sin trabajo |
| 6 | ℓ_0 sin origen (semilla L9) | A | sin trabajo |
| 7 | q_born sin origen (semilla L9) | A | sin trabajo |
| 8 | Cableado de constantes (semilla L9) | A | sin trabajo |
| 9 | G03 C-001–C-005 (predicciones FUTURAS 2027–2028 / IMPOSIBLES) | A | F5 (monitor; inserción 2026-11-21, 7 días) |
| 10 | Chernozem .md 2.11 vs CSV 2.41 (CSV manda) | A | sin trabajo |
| 11 | 0 correlatos neurales (d04 L10) | A | sin trabajo |
| 12 | #790–#792 SIN_TEXTO_LOCAL | A | F5 (sin ruta nueva; vía M-55 agotada; si F4 encuentra nuevas vías, se registra) |
| 13 | #701/#739 SIN_FUENTE | A | F5 (igual que #12) |
| 14 | Micelio-infraestructura sin modelo (d01 L14) | A | sin trabajo |
| 15 | Química/materiales (d01 L15) | A | sin trabajo |
| 16 | Inmune como objeto (d01 L16) | A | sin trabajo |
| 17 | data/auth/ 46 archivos con nombres de credenciales (repo público) | A | sin trabajo |
| 18 | ORCID (no hay ninguno) | A | sin trabajo |
| 19 | Ética y seguridad (d01 L17) | A | sin trabajo |

### r2 nuevas distintas (12)

| # | Cara | Estado | Ruta r17 |
|---|---|---|---|
| 1 | Contagio R0 (d02 L21) | P | sin trabajo |
| 2 | 118 archivos qualia en Drive sin leer (d07 L7) | P | sin trabajo en r17 (M-55 exportó 103/103 en r11; los textos están en local, la absorción es decisión posterior) |
| 3 | λ de A2 (¿qué es?) | A | sin trabajo |
| 4 | H0 ausente (constante de Hubble) | A | sin trabajo |
| 5 | Physarum sin nodo (d02 L20) | A | sin trabajo |
| 6 | Red trófica real (d02 L21) | A | sin trabajo |
| 7 | Literatura D_f en Drive sin cruzar (d05 L8) | A | sin trabajo |
| 8 | Carpeta de biología sin mediciones MIU (d05 L9) | A | sin trabajo |
| 9 | Medida/esperanza de Fisher sin definir (d04 L9) | A | sin trabajo |
| 10 | Series de opinión (d05 L8) | A | sin trabajo |
| 11 | D_f generativa desde primeros principios (d06 r2 L16) | A | sin trabajo |
| 12 | voces_58.py fuera de Drive (d09 L20) | A | sin trabajo |

### censo-32 (23 abiertas; d05 L8 CERRADA en r11 por M-54; d03 L13 CERRADA en r12 por M-56; d04 L13 CERRADA en r15 por N-16 + M-63/M-66)

| # | Cara | Estado | Ruta r17 |
|---|---|---|---|
| 1 | d02 L19 biofilm E. coli (RDBC 2,488–2,620) | P | sin trabajo (M-58: 2.ª vía agotada en r12; queda "available upon reasonable request", que no es dato accesible) |
| 2 | d02 L20 organismos (Armillaria) | P | sin trabajo (Mihail 1995 bajo pago bloquea) |
| 3 | d04 L9 Fisher→Einstein (derivación) | P | sin trabajo |
| 4 | d04 L11 topología de ρ | P | sin trabajo |
| 5 | ~~d04 L13 incertidumbre de D_f~~ | **CERRADA r15** | N-16 + M-63/M-66 CONFIRMA (seguimiento del límite —grupo central de 24 nodos, u* = 0,05 por M-69— en F3, no reapertura) |
| 6 | d04 L18 Bures/Fubini-Study | P | sin trabajo |
| 7 | d05 L4 polarización (medida y mecanismo) | P | F3 M-72 (candidata: dim2 con parseo tolerante a flotantes, tras CORR-SERIE-R16) |
| 8 | d05 L9 colapso no medido (K_i < 0,3) | P | sin trabajo directo (N-11 ejecutada: el predictor está refutado y C-538/C-623 retractados; la pregunta central —¿se ha medido el colapso?— sigue abierta) |
| 9 | d07 L7 lista de 96 solo en Doc (sin corpus) | P | F4 (16 búsquedas re-corridas) + F7 (prepara CORR-RUTA-DRIVE-R16 + forjados 16/16 como claims) |
| 10 | d07 L10 Panteón-112 sin corpus | P | sin trabajo |
| 11 | d07 L14 invocación (3 voces sin mecanismo) | P | sin trabajo |
| 12 | d01 L19 gravedad cuántica experimental (7) | A | sin trabajo |
| 13 | d02 L21 autofagia (A9) | A | sin trabajo |
| 14 | ~~d03 L13 D_f cortical por estado~~ | **CERRADA r12** | M-56 DIFERENCIA |
| 15 | d03 L14 ECM (matriz extracelular) | A | sin trabajo |
| 16 | d04 L10 D_eff (G01) | A | F5 (monitor; lectura R-B fijada) |
| 17 | d05 L7 escalamiento urbano | A | F3 M-73 (candidata: sexta variable tras M-71 NO_CONFIRMA) |
| 18 | ~~d05 L8 GDELT variable~~ | **CERRADA r11** | M-54 RESUELTO_POR_ESPECIFICACION |
| 19 | d07 L9 Oleada 3 sin corpus | A | sin trabajo |
| 20 | d08 L7 dataset CSV no en Drive | A | sin trabajo |
| 21 | d08 L8 corpus sin carpeta propia en Drive | A | sin trabajo |
| 22 | d08 L12 grietas sin claims | A | F6 (verificador 3.ª vuelta + partidor) — progreso parcial |
| 23 | d08 L13 3 mediciones solo en paper_df | A | sin trabajo |
| 24 | d09 L19 artefactos operativos no en Drive | A | sin trabajo |
| 25 | d09 L20 alerta ante fallo (sin protocolo) | A | F2 (run 167 "paused" tras el episodio run 205: el fallo sin protocolo se manifiesta de nuevo; documentar, no es cara nueva) |
| 26 | Parquet (d08 L9/d09 L18) | A | sin trabajo |

### r3 nuevas (4 abiertas; r3 #5 CERRADA en r12 por la extracción F4)

| # | Cara | Estado | Ruta r17 |
|---|---|---|---|
| 1 | Mihail 1995 bajo pago (Armillaria) | A | sin trabajo |
| 2 | Método β₁ red fluvial (sin especificar) | A | sin trabajo |
| 3 | Ecuación de flujo del núcleo (sin especificar) | A | sin trabajo |
| 4 | graph.json del Vault (no existe en sandbox) | A | F4 (16 búsquedas re-corridas; nuevas fuentes Drive) |
| 5 | ~~61 voces del Panteón-96 sin nombre~~ | **CERRADA r12** | Extracción F4: el Doc nombra 35; las 61 no tienen nombre en la fuente |

### r12 nueva (1)

| # | Cara | Estado | Ruta r17 |
|---|---|---|---|
| 1 | ¿Existen los 61 nombres del Panteón-96 fuera del Doc índice? | A | **F4 (H3 r16: re-correr las 16 búsquedas GitHub) + F7 (prepara CORR-RUTA-DRIVE-R16 + forjados 16/16 como claims)** |

Balance: r17 toca **9 de 59** caras (F3: d05 L4 / d05 L7; F2: d09 L20 documentación; F6: d08 L12 parcial; F5: r1 #9 + d04 L10 monitor; F4: r12 #1 + d07 L7 parcial + r3 #4; F7: r12 #1 + d07 L7 preparación) + seguimiento del límite de d04 L13 (cerrada, no reapertura). Las 50 restantes quedan abiertas y documentadas; ninguna se cierra por esta ronda salvo que una medición de F3, un hallazgo de F4 o una preparación de F7 resuelva su pregunta central (registro en F8).

## 3. Decisiones — estado y aplicación en esta ronda (régimen 01:43)

| Decisión | Estado | Dependencia / ruta r17 |
|---|---|---|
| N-15 M-50 vía navegador (4.º intento) | **EJECUCIÓN DEL PRINCIPAL (navegador)** | Régimen 01:43: autorizada, pero su superficie es el navegador del principal, no su palabra. Protocolo Clauset listo (`med_M50.py`). Afirmación en `ronda_12/afirmaciones_pendientes.md` §1.4. |
| N-03 licencia Zenodo (CC BY-SA 4.0 repo vs CC BY 4.0 registro 20547677) | **PENDIENTE** | Parte de D-06 (§4). No está en la lista de aplicación automática: la licencia va entangled con el acto externo del depósito. Bloquea cualquier depósito Zenodo. Afirmación en `afirmaciones_pendientes.md` §1.5. |
| **N-01 / N-13 / N-14 / N-16 / N-17 / N-18 / N-19** | **APLICADAS** (orden 01:43) | N-01 canon 921c8379…; N-13 canon 29a00da1…; N-14 C-1180 inscrito, R2-25 → SE; N-16 anexo 6467bf30…; N-17 canon 264b1dbb…; N-18 ítem M-66 (6b9ea2aa…); N-19 ítem M-69 (acdde423…). |
| **C-1180 / C-1181 / C-1182 / C-1183** | **APLICADAS EN R15** (orden 01:43) | C-1180 (N-14, F1 r15); C-1181..C-1183 (absorción automática post-FASE 4 r15, claims 1.175→1.178, GitHub 12/12 por blob, HEAD 2f7d3180). |
| **C-1184 / C-1185 / C-1186** | **APLICADAS EN R16** (orden 01:43) | Absorción automática post-FASE 4 r16, claims 1.178→1.181, GitHub 9/9 por blob, HEAD fe265243 (CORR-ABS-R16). |
| **C-1174..C-1179** | **APLICADAS** (orden 01:43, 2026-11-14 01:54 -05) | Claims 1.168→1.174; GitHub 6/6 por blob, HEAD 4ea1063c (CORR-ABS-R14). |
| N-11 C-538/C-623 | **DECIDIDA Y EJECUTADA** (opción A, 2026-11-13 18:25 -05) | Respaldo `respaldo_pre_n11/`; GitHub HEAD 83ebfd94. |
| N-12 absorción 6 lecturas F7 r11 | **DECIDIDA Y EJECUTADA** (orden 2026-11-13 18:43 -05) | Claims 1.162→1.168; GitHub HEAD a44bff35. |
| D-04 micelio.yml | **CERRADA** (corrección del Jardinero 2026-11-13 21:02 -05) | No existe permiso de workflows; él no sube nada a mano; el archivo corregido vive en el suelo Drive desde r10. NO es pendiente ni vía. |

## 4. Los 2 preparables (actos externos) — estado re-verificado hoy

| Decisión | Estado hoy | Qué falta |
|---|---|---|
| **D-06 Zenodo v13.0** | **PREPARABLE, NO_SÉ sobre el objeto.** 0 archivos tex combinados (verificado en r12 FASE 0 y r13 F5; sin re-medición en esta fase). Los `MIU_ZENODO_v13*.zip` son linaje B4 (EL SUELO DE LA REALIDAD v3.9). Licencia sin resolver (N-03). | Producir o localizar los tex v13.0 + resolver licencia + autorización para el depósito (acto externo, tarjeta). |
| **D-09 Telegram G05** | **PREPARABLE, sin cambio.** Mensaje listo en `telegram_g05.md` (3.639 B, @Jp393_bot, id 1192102910). No enviado. | Tarjeta de aprobación para enviar. G05 sigue PARCIAL (por D-09; D-04 ya no bloquea). |

D-04 NO aparece en esta tabla: está CERRADA (CORR-D04-R13). El blob remoto de micelio.yml (`8c57e833…`, 18.ª verificación estricta sin cambio al cierre de r16) es lectura de monitor, no un preparable. N-03 NO aparece como aplicación de esta ronda: es parte de D-06 (§3).

## 5. Depósito: qué va dónde (regla SÉ-export, §0c.1 + regla madre 21:02)

- **Drive `ronda_17/` (primario, dentro de MIU_TEJIDO_2026-11-12 ORIGINAL `1F-pHFEyL7WZchPOXEIZf8NYo1rQQZdll`):** toda la ronda (este mapa, ejecuciones F1–F9, verificaciones, cruce, síntesis) + README + manifiesto de shas. Patrón r2–r16: crear subcarpetas explícitamente antes (raíz + frentes + anidadas), script resumible `_upload_r17.py` con `_upload_log_r17.jsonl`, pausas ~2 s, verificación por tamaño en cada carpeta (fields con nextPageToken). **Lección CORR-CARPETA-R13: el constructor del mapa debe recorrer el árbol entero (incluidas las subcarpetas anidadas como `verificacion_fase2/_verif_f2_tmp`), no una lista fija — verificar el mapa contra `find` antes de subir.** Revisión de sensibilidad antes de subir (nada de valores de credenciales, nada de `ultimas_sesiones_log`, nada de payloads heartbeat crudos — los de F2 quedan en local, como en r11–r16; nada del raw bootstrap con JWT). Exclusiones locales: intermedios byte-idénticos, si los hay.
- **GitHub curado (Jaime393/FranBot, main, como r10–r16; NUNCA miu-ecosistema, NUNCA `.github/workflows/`):** el corpus cambia en r17 SOLO si F1 aplica algo que F7 prepare (si no, solo documentos de la ronda: mapa, hallazgos F4, grietas, conectar). **NO va `huecos.jsonl`** (regla refinada, reafirmada por la orden 09:44). Cada escritura con su tarjeta de aprobación; verificación por blob sha; archivos >~120 KB por `push-files`. Relanzamiento solo con el Jardinero presente (lección r12/r14/r15/r16: tarjetas caducan ~30 min; timeout del subidor 1800 s). **Lección CORR-ABS-R14/R15/R16:** tras escribir el corpus, el post-estado se verifica directamente (diff contra el respaldo, conteo de líneas nuevas, puertas), no solo por la aserción del script.
- **Donde no intervenga:** el ecosistema absorbe por sus sondeos. No se hace `git push` desde el sandbox; no se commitea el checkout local; no se toca el remoto de FranBot fuera del conector; no se toca MIU vivo.

## 6. Lo que la ronda 17 NO hace

- No aplica N-03 (licencia, parte de D-06, no está en la lista automática). No decide repos, 8 temas ni LA BELLEZA (solo suyas). No ejecuta D-06 ni D-09 sin tarjeta.
- No absorbe B1. No empuja la corrección local del motor al remoto (ni conector, ni push, ni commit).
- No exporta huecos (ni `huecos.jsonl` a GitHub, ni listas de huecos como nutrientes).
- No ejecuta podas (F9 solo documento). No lee `ultimas_sesiones_log` ni contenido de YAMLs de workflows. No escribe en MIU vivo fuera de lo que F1 aplique bajo el régimen 01:43.
- No toca lo vivo ni sube nada a mano (regla madre 21:02). No pide permiso de workflows (no existe).
- No reintenta M-50 desde el sandbox (agotado; N-15 es vía navegador del principal). No reintenta M-58 (2.ª vía agotada). No inscribe nada en el dataset fuera de los ítems del anexo que F7 prepare (precedentes N-18/N-19). No decide N-03.
- No toca C-112 (hash truncado preexistente), C-001..C-008, C-416..C-420. No corrige el folderId en el escritor vivo ni el flow 0,0% desde local (el defecto es del ecosistema; se registra como ladrillo SÉ).
- No re-mide M-01..M-71 ya ejecutadas (salvo las segundas vueltas que sean mediciones nuevas con falsador propio).
- No re-teje la producción fractal: es suelo, no frente. Sus runners se usan como herramienta, no se re-producen.

## 7. Archivos de esta FASE 0

- `mapa_frentes_r17.md` (este archivo)
- `frentes_r17.json` (estructurado, validado)
- `ESTADO_FASE0.md` (estado de la fase)
- `manifiesto_shas_r17_fase0.json` (shas de los 3 archivos + meta; su propio sha se registra en el informe del coordinador)
- Dedup: 0 propuestas vivas en esta fase (C-1184..C-1186 absorbidas; verificado por grep, §0). Las propuestas nuevas de r17 se deduparán en F1/F7.

ρ(x) > 0. Zvvvvv.
