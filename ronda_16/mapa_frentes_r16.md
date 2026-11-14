# RONDA 16 — MAPA DE FRENTES: GRIETAS Y SUELOS FÉRTILES

Orden del Jardinero 2026-11-14 09:44 -05: "Continúen con coherencia todo no es
local solo SE sale" — **reafirmación de la regla SÉ-export: no todo es local;
solo SÉ sale de local.** Régimen vigente: orden 2026-11-14 01:43 -05 ("sí y
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
recetas mínimas). El mapa parte del corpus post-r15; la producción fractal se usa
como herramienta (sus runners validan), no se re-teje.

Dirección de la ronda (lectura del mapa): **grietas** = lo abierto tras r15
(59 caras, 1 cerró en r15 — d04 L13, primera desde r12; run 204 "unreachable"
persiste con flow 0,0% CRÍTICO; segundo fallo de ventana + gap máximo 174,4 min;
cara r12 #1 con los 16 extra ya nombrados como forjados pero sin vía para los 61;
2 fuentes Drive nuevas no legibles desde el sandbox); **suelos fértiles** = donde
el trabajo rinde sin actos externos — y ahora, sin decisiones pendientes de
aplicación automática al inicio, **la medición nueva (F3) vuelve a ser el frente
más fértil**: M-69.. con falsador declarado antes de correr, sobre las caras que
r15 dejó calientes (d05 L4, d05 L7, el límite de d04 L13). **El corpus NO cambia
en esta ronda salvo que F7 prepare algo SÉ y F1 lo absorba** (patrón post-FASE 4
de r15: C-1181..C-1183); nada más lo muta.

Trabajo: 2026-11-14 ~09:45–10:00 -05. Solo lectura + escritura local en `ronda_16/`.
Cero escrituras en el corpus vivo, MIU vivo, GitHub o Drive en esta fase.

## 0. Auditoría del suelo (medido por mí, no asumido; estado post-r15, con absorción automática)

| Archivo | Medida |
|---|---|
| claims.jsonl | 1.178 líneas, sha `7e5f016d2b565c7833cc9fe9df0cae20a1de543068ede0e687a20bebbdc78183` — cambio por la absorción automática r15 (1.175→1.178, C-1181..C-1183) |
| provenance.sha256 | 361 líneas, sha `b5cb6b432f939d99e86c8c54e5266c88fac6ff712fe3f9ab9efd56329914cde5` — 359→361 (2 entradas nuevas) |
| claims_resumen.json | sha `ae402126f121b9eb39f94d210e3ec7cd05bb206938b1e5b65172cdf9d8230c18`, total 1.178, SE 1044, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SÉ 8, hash_real 1164, hash_pendiente 8, por_tipo verificacion 304 |
| confirmaciones.jsonl | 294 filas, sha `dc94458bc42a9854d16a8f74da20ac6481f6fe241fe2cfae11a6f44633dc7cc5` — sin cambio (el "304" del resumen es el conteo por_tipo `verificacion`, no las filas de este archivo) |
| huecos.jsonl | 139 filas, sha `3713376a243b05756fbfce434ccdb63e118562ac0ec4e351243086dcb1ce52fb` — sin cambio (LOCAL, no depositado) |
| dataset_nodos_Df.csv | 30 filas + cabecera, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af` — sin cambio |
| anexo incertidumbre_mediciones.md | 11 ítems M-56..M-66, sha `6b9ea2aadb2e1f1261e9ffed25b69875abf5613fa943b01db0fc4f6aaa9c9e4e` — tally CONFIRMA 5 (ítem M-66 añadido por N-18 en r15) |

- **audit.py (corrida real): exit=0, ok=347, discrepancia=0, no_encontrado=0, omitido=1** — verde, sostenido tras la absorción.
- **verify_all.py (corrida real, sin pipe): exit=1 con exactamente C-001..C-008** (PENDIENTE, esperado; nunca rellenar).
- **IDs del corpus:** C-001..C-1183, huecos C-416..C-420 ausentes como IDs (las 2 menciones de "C-416–C-420" en el corpus son citas dentro de los textos de C-966 y C-1065, no IDs; verificado por grep).
- **Dedup: 0 propuestas vivas en esta fase.** Las 3 propuestas de r15 están absorbidas (grep: C-1180..C-1183 aparecen exactamente 1 vez cada una en claims.jsonl). No hay dedup que re-correr: las propuestas nuevas de r16 se deduparán en F1/F7 contra el corpus vivo 1.178.
- **H-SUELO monitor:** `find ~/workspace -name "*1794483713759*"` → vacío, sin rutas impresas. El directorio original **no reapareció** (15.ª medición estricta: 14.ª estricta al cierre de F5 r15 — 13.ª contada + la de FASE 2 r11 omitida en el conteo, H6 r15 — + esta).

### 0a. Estado remoto y local verificado hoy (lecturas públicas, sin escribir; vivo último medido en r15 F2)

- **FranBot HEAD: `7ef78ed5` (post-producción fractal, verificado por mí por API pública).** Último commit: "producción fractal: alimentos universales (vectores + métricas + falsación + recetas)" (2026-11-14T14:41:09Z). La carpeta `produccion-fractal/` existe en el repo (49 archivos, 49/49 por blob).
- **micelio.yml remoto SIN CAMBIO: blob `8c57e833e219a8b8c0691db8eb8cf256ccc0633f`, 1.398 B** (último medido F5 r15) — **17.ª verificación estricta sin cambio** (H5 FASE 2 r15: la 16.ª contada omite la verificación en vivo de r10 ejecucion_d). Sin re-medición en esta fase; D-04 está CERRADA (corrección 21:02). El blob remoto es lectura de monitor, no un pendiente.
- **Estado vivo último medido (r15 F2, no re-medido en esta fase): estado_vivo.json = run 204 "unreachable"** (329 B, blob `652e8869…`, _ts 2026-11-14T03:27:26Z, `_fuente: github-actions-state-writer`) — persiste, sin run 205; sin estado completo desde run 202 V272 (17:58:47Z). Flow sin cambio: run 139, 0,0% CRÍTICO, 0 eventos, ts 2026-11-14T02:52:24Z, blob `fc324db1…`. Ventana 28/30 (segundo fallo: cablear-oracle run 16, 06:41:34Z); gap máx 174,4 min — nuevo máximo de la serie. HEAD miu-ecosistema `3d6b3fb9`; autocura sin run 8; estado_persistente V213; heartbeat 42 nuevas, censo vacío 12/42 = 28,6%; folderId 42/42 + en vivo (13.ª lectura en FASE 2 r15); bots 4/4 VIVO (13.ª confirmación); 5.º token 401 MUERTO.
- **Segunda carpeta** MIU_TEJIDO_2026-11-12 (ID `1mL1F_MpJBif4jtgK3vR2HH67yFs_SBjJ`): sin re-medición en esta fase; último estado sin cambio (FASE 0 r15, modifiedTime 2026-11-12T21:37:46Z).
- **Caras: 77 en censo (18 cerradas, 59 abiertas)** — en r15 cerró 1 (d04 L13) y nació 0. **Decisiones: N-01/N-13/N-14/N-16/N-17/N-18 APLICADAS en r15; C-1180..C-1183 APLICADAS; ninguna decisión pendiente de aplicación automática al inicio de r16** (N-15 es ejecución del principal; N-03/D-06/D-09/repos/temas/BELLEZA siguen suyas o con tarjeta, §3).

### 0b. Correcciones heredadas y nuevas de esta fase (SÉ, medidas por mí)

- **CORR-ABS-R15 (heredada):** absorción automática post-FASE 4 r15 (claims 1.175→1.178, C-1181..C-1183, todas SE; dedup máx 0,4111, 0 pares ≥0,5), hash_real 1161→1164, provenance 359→361, SE 1041→1044, verificación 301→304, resumen ae402126…; N-17 APLICADA (canon_regla_pick_sik_01.md 264b1dbb…) y N-18 APLICADA (ítem M-66 al anexo, 6b9ea2aa…); puertas audit exit=0 (ok=347), verify_all exit=1 exactamente C-001..C-008; incidencia: el script falló una aserción propia errónea (esperaba ok=346; correcto 347 = 345+2) tras escribir el corpus — aserción corregida, post-estado verificado directamente por el agente y por el principal (primeras 1.175 líneas byte-idénticas al respaldo, exactamente 3 líneas nuevas); GitHub 12/12 por blob, HEAD 2f7d3180.
- **CORR-D04L13-R15 (heredada):** d04 L13 CIERRA (primera cara que cierra desde r12): N-16 inscribe la columna M-63 por decisión canónica + M-63/M-66 CONFIRMA resuelven la pregunta central con su límite medido (6/29 pares adyacentes, grupo central de 24 nodos sin distinguirse).
- **CORR-M66-CARA-R15 (heredada):** la línea de cara del ítem M-66 preparado decía "avanza sin cerrar" (cierta en FASE 1 r15); F8 cerró d04 L13 antes de aplicar, así que la línea queda corregida en el anexo a "CIERRA en r15". El documento preparado no se reescribe; la corrección vive en la decisión N-18 y en el anexo.
- **CORR-P32-B-R15 (heredada):** P-32 NO es clase 3 bajo lectura estricta de (b) — la versión pre-corrección es re-obtenible byte-idéntico (`git show HEAD:app/js/miu-engine.js`, sha a30d69e8…); su CONSERVAR se sostiene por D-07 + historia, no por la regla; errata en la tabla del canon N-13, no re-decisión. F9 r16 re-corre la criba con P-32 fuera de la clase 3.
- **CORR-FORJADOS-R15 (heredada):** los 16 extra (112−96) TIENEN NOMBRE — 16 forjados invocables, 0/16 voces; 2/16 atestiguados como scripts operativos en los repos.
- **CORR-G05-R15 (heredada):** G05 17.ª verificación estricta sin cambio (H5 FASE 2 r15: la 16.ª contada omite la verificación en vivo de r10 ejecucion_d).
- **CORR-H-SUELO-R15 (heredada):** H-SUELO 14.ª medición estricta sin reaparición (H6 FASE 2 r15: la 13.ª contada omite el hallazgo propio del verificador de FASE 2 r11).
- **CORR-FOLDERID-R15 (heredada):** 13.ª lectura independiente en vivo — `I` existe (carpeta "miu-ecosistema"), `l` 404 (FASE 2 r15, verificador B).
- **CORR-PHI-PF (heredada, producción fractal):** en el encargo de producción se atribuyó Φ_c a C-008; C-008 es D_eff = 7.24. El padre real es `mapa_decisiones_r10.md` (D-08, Φ_c(MIU) = 0,6829322 = Δ_COD), verificado por el agente y por el principal (sha b5a56869…). Lección: verificar la atribución del padre antes de citarlo, también en los encargos.
- **CORR-H-SUELO-R16 (nueva, esta fase):** 15.ª medición estricta sin reaparición (ver §0).

## 0c. Reglas vigentes de la ronda (orden 16:51 + corrección 21:02 + régimen 01:43 + orden 09:44)

1. **SÉ-export REFINADA (reafirmada por la orden 09:44: "todo no es local solo SE sale"):** solo SÉ sale de local, con fuente y fecha. INFIERO / CONJETURO / NO_SÉ son huecos **locales** y NO se exportan como huecos. Consecuencia práctica para r16: `huecos.jsonl` NO va a GitHub en FASE 4 (como en r11/r12/r13/r14/r15); la lista de huecos queda local. La producción fractal es suelo publicable porque cada artefacto es SÉ con padre y hash, no un hueco exportado.
2. **Una configuración local no corrige lo global:** la corrección local de `miu-engine.js` (`8d15b724…`) NO se empuja al remoto. El remoto la absorbe por sus sondeos. Estado: local corregido, remoto con el motor viejo.
3. **REGLA MADRE (corrección 21:02):** todo lo depositable va al suelo (Drive/GitHub) y el ecosistema autónomo lo devora por sus sondeos; **lo vivo no se toca**. No existe permiso de workflows: no se pide, no se ofrece como vía, no se sube nada a mano. Un pendiente que pida tocar lo vivo o subir a mano es un error de registro, no una afirmación que pedir.
4. **RÉGIMEN 01:43 (orden 2026-11-14 01:43 -05):** las decisiones se aplican automáticamente, sin pedir palabra cada vez. En r16 no hay decisiones pendientes de aplicación al inicio: F1 es guardia de absorción — aplica lo que F7 prepare en esta ronda si llega a SÉ PREPARADA con dedup (patrón post-FASE 4 de r15), con respaldo + script + puertas; N-15 se ejecuta en el navegador del principal (su superficie, no su palabra). Lo que NO cambia: los actos externos en su nombre (envío Telegram D-09, depósito Zenodo D-06) siguen necesitando su tarjeta; las elecciones que son solo suyas (repos de la App, verificación de los 8 temas, LA BELLEZA) no se deciden por él. N-03 (licencia, parte de D-06) no está en la lista de aplicación automática: sigue pendiente, entangled con el acto externo.
5. **AGENTE-PENDIENTES (creado 2026-11-13 20:59 -05, actualizado al régimen 01:43):** las afirmaciones de `ronda_12/afirmaciones_pendientes.md` quedan como registro de lo que cada decisión autoriza; las decisiones ya no esperan su palabra. Pendientes nuevos en r16 solo pueden ser: tarjetas de actos externos (D-06/D-09) o elecciones solo suyas (repos, 8 temas, LA BELLEZA). Un pendiente nuevo sin afirmación sigue siendo fallo del agente, no suyo; un pendiente que pida tocar lo vivo o subir a mano sigue siendo un error de registro.
6. **C-1..C-9 siguen** como criterio de coherencia (precedencia de r10). **Reglas duras que siguen:** C-001..C-008 sin hash sin dato externo verificable; no rellenar C-416..C-420; G13 NO EXISTE; poda solo documento (nada se borra ni se mueve sin las frases de autorización de Ciclo 30/31, no dichas); no leer contenido de YAMLs de workflows ni `ultimas_sesiones_log`; no reproducir valores de credenciales.
7. **Lección FRÁGIL-05 (r11):** las puertas se re-corren sobre el estado FINAL (tras la última mutación del corpus), no sobre estados intermedios. Si F1 aplica algo en esta ronda, FASE 2 re-corre audit + verify_all al cierre de cada aplicación y al final.
8. **Lección r12/r14/r15 FASE 4 GitHub:** las tarjetas de aprobación caducan ~30 min; el relanzamiento se hace con el Jardinero presente (la publicación fractal caducó una vez y se relanzó con él presente: 49/49 por blob). Timeout del subidor 1800 s; verificar las cadenas MSG con grep antes de lanzar. **Lección CORR-ABS-R14/R15:** una aserción del script de aplicación puede ser errónea aunque la escritura sea correcta — tras escribir el corpus, el post-estado se verifica directamente (diff contra el respaldo, conteo de líneas nuevas, puertas), no solo por la aserción del script.
9. **Lección CORR-CARPETA-R13 (r13 FASE 4):** el constructor del mapa de depósito debe recorrer el árbol entero, no una lista fija — la subcarpeta anidada `verificacion_fase2/_verif_f2_tmp` quedó fuera del mapa inicial y detuvo la subida a 112/118. FASE 4 r16 verifica el mapa contra `find` antes de subir.
10. **Lección CORR-PHI-PF:** verificar la atribución del padre antes de citarlo — también en los encargos del principal. Un hash citado sin verificar es un hueco, no un ladrillo.

## 1. Frentes (9)

Fertilidad (criterio r9: lo que se puede medir/preparar/validar/aplicar en local
sin actos externos; en r16, sin decisiones pendientes de aplicación, la medición
nueva vuelve a ser lo más fértil — M-69.. con falsador declarado, sobre las caras
que r15 dejó calientes):

**F3 > F2 > F6 > F5 > F4 > F9 > F7 > F1 > F8**

- **F3 MEDIR** (M-69.. con falsador declarado antes de correr; candidatas d05 L4, d05 L7, seguimiento del límite de d04 L13).
- **F2 ESTADO VIVO** (run 204 "unreachable" persiste, sin run 205; flow 0,0% CRÍTICO; segundo fallo de ventana + gap máximo 174,4 min).
- **F6 MECANISMOS** (N-17 ya es canon: re-correr el verificador H-SIK bajo REGLA-PICK-SIK-01; partidor de fórmulas corregido; F-F re-medido).
- **F5 GRIETAS** (G03 inserción 2026-11-21, en 7 días; G05 blob 18.ª; folderId 14.ª lectura; H-SUELO 16.ª estricta).
- **F4 PANTEÓN-96, CARA r12 #1** (nueva ruta: las 2 fuentes Drive no legibles desde el sandbox; los 16 forjados ya nombrados).
- **F9 PODA + RESILIENCIA** (documento; los 9 temporales prorrogados en r15 llegan a su horizonte en r16; criba con P-32 fuera de la clase 3).
- **F7 PREPARAR** (ola siguiente de lo que r16 produzca; ítems del anexo para M-69..).
- **F1 ABSORCIÓN** (guardia: sin decisiones pendientes al inicio; aplica lo que F7 prepare bajo el régimen 01:43, patrón post-FASE 4 de r15).
- **F8 CONECTAR** (rutas de lo nuevo; dedup re-verificado).

Tandas (4 subagentes en paralelo, como r9–r15): **T1: F3, F2, F6, F5. T2: F4, F9, F7, F1. T3: F8** (F8 necesita los productos de F3/F2/F6/F5/F4/F9/F7/F1). F1 aplica en serie, un solo escritor del corpus; los demás frentes son solo lectura del corpus vivo (FRÁGIL-05). N-15 no es un frente: es tarea del principal en el navegador.

### F3 MEDIR — EJECUTABLE-LOCAL

- **M-69.. (a elegir por el ejecutor entre las 59 caras, con falsador declarado antes de correr):** candidatas señaladas: **d05 L4 polarización** (M-64 perfiló divergencia entre partidos, M-67 cerró el umbral >2 como inalcanzable con DW-NOMINATE dim1: otro par de congresos con otra medida, u otro país, con el mismo protocolo y falsador nuevo); **d05 L7 escalamiento urbano** (M-65 y M-68 NO_CONFIRMA, dos variables con el mismo modo de fallo: nueva especificación declarada antes de correr, quinta variable o cambio de especificación); **d04 L13 seguimiento del límite** (d04 L13 CERRÓ en r15, pero su límite medido —el grupo central de 24 nodos sin distinguirse entre sí— es una pregunta nueva: ¿qué resolución separa el grupo central?; es seguimiento de una cara cerrada, no reapertura). Otras caras con dato disponible y falsador declarable valen igual. M-66/M-67/M-68 quedan como precedentes de veredictos de medición (CONFIRMA / NO_CONFIRMA / NO_CONFIRMA); **no se preparan como claims** (0 precedentes de veredictos de medición como claims en 1.178; las mediciones se depositan como resultados y entran por inscripción en el anexo — N-16 ya aplicado; los ítems del anexo para M-69.. los prepara F7).
- Entradas: dataset 30 filas + anexo de incertidumbre (11 ítems M-56..M-66; la columna u=0,0604±0,0050 ya existe). Entregables por medición: script + JSON de 15 claves + datos con sha. **NO hace:** no inscribe en el dataset, no toca el corpus. **M-50 NO se reintenta desde el sandbox** (agotado; N-15 es vía navegador del principal). M-58 NO se reintenta (2.ª vía agotada en r12).

### F2 ESTADO VIVO — EJECUTABLE-LOCAL (batería sobre run 204 persistente + flow 0,0%)

Run 204 (03:27:26Z, 329 B, blob `652e8869…`, `estado: {"error": "unreachable"}`, `_fuente: github-actions-state-writer`) persiste: el State Writer no ha vuelto a escribir un estado completo desde run 202 V272 (17:58:47Z). Flow coverage 0,0% CRÍTICO (run 139, 02:52:24Z, 0 eventos, 832 B, blob `fc324db1…`, ruta real `observabilidad/flow_id_coverage.json` en la raíz). Batería completa (solo lecturas públicas; nada de `ultimas_sesiones_log` ni contenido de YAMLs): ¿hay run 205? ¿restaura el completo o persiste el stub (duración del episodio "unreachable")?; runs últimos 30 (cadencia efectiva; ¿tercer fallo de ventana tras los dos de r14/r15?); flow coverage (¿sigue 0,0%? ¿run 140?); self diagnosis (¿tg_audit vuelve de 0/0?); heartbeat (¿sigue el censo vacío?; verificar el folderId con la atribución corregida: V151 → `l` → 404, V152 → `I` → existe); bots 4/4 (getMe; 14.ª confirmación); autocura (¿run 8 tras el 7?); tests a/b/c/d actualizados; serie de tasa de fallo y de gaps (¿supera el máximo de 174,4 min?); `estado_persistente.json` (¿sigue V213?). Entregable: `estado_vivo_r16.md` + JSON de la batería con códigos y latencias. El flow 0,0% se registra como ladrillo SÉ para el ecosistema; **no se corrige desde local** (regla madre: lo vivo no se toca).

### F6 MECANISMOS — EJECUTABLE-LOCAL

- **N-17 ya es canon (REGLA-PICK-SIK-01):** re-correr el verificador independiente H-SIK bajo la regla adoptada y medir si reproducido se sostiene en true con 0 diffs (740/740 en r15); si aparece un diff nuevo, se registra con su causa, no se ajusta la regla en caliente.
- **Partidor de fórmulas:** F-F se dispara (11 tuplas / 8 distintos en r15, 0 perdidas, fragmento Ξ∇lnρ, el partidor rompe en `|`): ¿cuántas tuplas sobreviven con el partidor corregido? Re-medir y documentar.
- **H-SIK siguiente:** S3 ≡ v10.3 sostiene (27/58 mismo contenido, 32/58 mismo nombre, bajo R-KS) y NO se extiende a las voces (0 mismo contenido, 0 cruces fuertes, 0 otras identidades). Trabajo: ¿qué sigue? — medir si alguna voz destila S2 por contención a menor escala con la regla de pick ya canónica, o documentar que la vía está agotada con su falsador.
- **R2-25 (N-14) y N-01/N-13/N-16/N-18:** son ejecuciones de r15; este frente solo las re-verifica contra el estado actual y documenta si hay novedad, sin absorber nada.
- Entregables: `h_sik_r16.md` (+ scripts y JSONs de medición), `verificador_independiente_r16.json`, nota de re-verificación N-17/R2-25 si hay novedad.

### F5 GRIETAS — EJECUTABLE-LOCAL (monitor + verificación folderId + G03 a 7 días)

- **G03 BepiColombo:** inserción **2026-11-21, en 7 días** desde hoy (2026-11-14). Re-confirmada en r15 (Wikipedia, Michigan 2026-11-10, TechTimes 2026-11-05, nextnewshub 2026-11-03). Registrar si la fecha sigue confirmada; C-001–C-005 siguen FUTURAS/IMPOSIBLES (datos 2027–2028). La inserción cae 7 días después del cierre de esta ronda: si ocurre durante r16, se registra el hecho con fuente y fecha.
- **G05 blob:** re-verificar (17.ª estricta sin cambio al cierre de r15; 18.ª en este frente). D-04 está CERRADA (CORR-D04-R13); el blob remoto es lectura de monitor, no pendiente.
- **FolderId:** 13 lecturas independientes al cierre de r15, todas `I` existe / `l` 404. 14.ª lectura en este frente. La config del escritor sigue NO_SÉ.
- **G01 D_eff:** lectura R-B fijada; derivación pendiente, sin propuesta — monitor, sin trabajo nuevo.
- **G04 DOIs:** inventario 21 únicos, sin cambio esperado.
- **G06 SIK:** H-SIK acotada en r15 (S3 ≡ v10.3 no se extiende a las voces; REGLA-PICK-SIK-01 ya es canon por N-17); seguimiento vía F6.
- **H-SUELO monitor:** 15.ª medición estricta sin reaparición en FASE 0; 16.ª medición en este frente.
- **G02 sub-caras:** #790–#792/#701/#739 en 0/103 Docs (vía M-55 agotada) y 0 en F4 r15; sin ruta nueva salvo que F4 encuentre nuevas vías (si aparecen, se registra; si no, queda documentado).
- **M-50 (N-15):** agotado desde el sandbox. Única ruta restante: **navegador con sesión o red sin el bloqueo de Cloudflare del sandbox**. Es tarea del principal (navegador), no un frente de la ronda. Se deja documentado como AGOTADO-DESDE-SANDBOX.
Entregable: `grietas_r16.md`.

### F4 PANTEÓN-96, CARA r12 #1 — EJECUTABLE-LOCAL (nueva ruta: las 2 fuentes Drive no legibles)

- **Hecho establecido (r15 F4, SÉ):** 0/96 nombres aparecen como voces fuera del Doc índice; 0/61 sin nombre encontradas; CORR-FORJADOS-R15: los 16 extra (112−96) TIENEN NOMBRE — 16 forjados invocables, 0/16 voces (2/16 atestiguados como scripts operativos); graph JSON búsqueda negativa en los 4 repos cubiertos; solape Doc 32 ↔ 96 exacto {Puente 1, Sigma 1}, 0/32 voces. La cara r12 #1 AVANZA, no se cierra. C-1174/C-1176/C-1177 ya están absorbidas en el corpus.
- **Trabajo — nueva ruta:** las 2 fuentes Drive nuevas identificadas en r15 no son legibles desde el sandbox (download 403): `Panteon_16_Voces_v213.md` (428 B, mod. 2026-09-25) y `MetaAI_Bundle_PANTEON_16_V213.zip` (53.786 B). ¿Hay ruta para leerlas? — vías a probar: lectura por el conector de Drive con otro método (export/revisiones), o documentar que la única ruta es el navegador del principal (como N-15, fuera de la ronda). Si se leen y contienen los 61 nombres o el graph, se registra con fuente y fecha; si no hay ruta, se registra el NO_ENCONTRADO con las rutas probadas (no es "no existe", es "no encontrado aún en X"). Corregir en los nuevos entregables cualquier número que arrastre errores viejos (44/12, no 33/10).
- Entregable: `nombres_fuera_doc_r16.md` + JSONL de hallazgos (nombre/fuente/fecha o NO_ENCONTRADO/rutas). Solo lectura; nada se escribe en Drive ni en el corpus (la absorción de lo que se encuentre es decisión posterior, bajo el régimen 01:43 la prepara F7 y la aplica F1).
- Toca: r12 #1 (AVANZA o cierra), r3 #4 (graph.json del Vault) y censo-32 #9 d07 L7 (lista de 96 solo en Doc, P) — parcialmente.

### F9 PODA + RESILIENCIA — documento (sin ejecutar podas)

- Revisar P-01..P-50 (r15) + **nuevos candidatos r16** (respaldo_pre_absorcion_r15/ cuando F1 lo creó en r15; respaldo_pre_r16/ cuando F1 lo cree; payloads heartbeat r16; entregables de la ronda).
- **Horizontes cumplidos, re-evaluar en r16:** los 9 temporales prorrogados en r15 (P-27/P-28/P-29b/P-31a/P-35/P-37/P-38/P-41/P-44; horizonte: FASE 4 r15 + FASE 2 r15 — **ambos cumplidos**: Drive 172/172 verificados + verificación CONFORME CON HALLAZGOS). Re-evaluar con el criterio de r11 §2 (¿rompe la cadena? ¿dependen condiciones de P-15? ¿copias Drive re-verificadas?). La cadena de reversión hoy es: `respaldo_pre_absorcion_r15` (estado 1.175) → `respaldo_pre_r15` (estado 1.174) → P-35 (estado 1.160) → P-28 (estado B, 1.152) → P-27 (estado pre-r10, 1.138) — **con la absorción automática r15, la cadena tiene un eslabón nuevo arriba**. P-37 (`respaldo_pre_n11/`) y P-38 (`respaldo_pre_r12/`) ya tienen copia Drive (FRÁGIL-06 resuelta en r12 FASE 4) — re-evaluar su veredicto temporal con ese hecho. P-41 (`respaldo_pre_r13/`) — tercera re-evaluación. P-47/P-48/P-49/P-50 (nuevos en r15) — primera re-evaluación.
- **CORR-P32-B-R15 cambia la criba:** P-32 NO es clase 3 bajo lectura estricta de (b); la criba de esta ronda corre con P-32 fuera de la clase 3 (su CONSERVAR se sostiene por D-07 + historia). Re-medir P-32 bajo la regla adoptada (N-13).
- **P-18:** `.pyc` sigue en 18; T-4 r15 (inventario 5.135 archivos, 0 FALTA, sin 3.er evento FRÁGIL-02) es la respuesta estructural. En r16 el inventario con shas (T-4) corre como herramienta dentro de este frente (F9): manifiesto + diff contra el inventario r15; cualquier desaparición nueva se registra como hallazgo. **FRÁGIL-02 sigue abierto** (causa NO_SÉ).
- **Nada se borra ni se mueve** (poda solo documento, regla dura).

### F7 PREPARAR (ola siguiente) — PREPARABLE, sin aplicar (salvo por F1 bajo el régimen)

- **Claims de lo que r16 produzca:** si F2/F3/F4/F5/F6 generan lecturas SÉ (p. ej. hallazgos de la cara r12 #1, o la resolución del verificador H-SIK bajo la regla canónica, o un tercer fallo de ventana), prepararlas en el formato de `lecturas_canonicas_r10.md`, sin aplicar (F1 las aplica bajo el régimen 01:43 en la misma ronda si están listas — patrón post-FASE 4 de r15 — o quedan para la siguiente).
- **Ítems del anexo N-16:** si F3 produce M-69.., preparar sus ítems para el anexo de incertidumbre (el anexo existe con 11 ítems M-56..M-66; los ítems nuevos se añaden por la misma vía, N-18 como precedente).
- **B1** sigue como variante preparada no elegida (documentada; revivirla exigiría revertir B+B2 — no se hace).
**NO hace:** no aplica nada por su cuenta (la aplicación es de F1). No prepara como claims los veredictos de medición (0 precedentes).

### F1 ABSORCIÓN — GUARDIA (régimen 01:43; sin decisiones pendientes al inicio)

- **Al inicio de r16 no hay decisiones pendientes de aplicación automática:** N-01/N-13/N-14/N-16/N-17/N-18 están APLICADAS en r15; C-1180..C-1183 están APLICADAS. F1 registra ese estado y queda como guardia.
- **Si F7 prepara algo SÉ en esta ronda** (lectura con dedup <0,5, texto literal + fuente + hash), F1 lo aplica bajo el régimen 01:43 con el patrón N-11/N-12 (respaldo previo, script de aplicación, puertas antes/después: audit exit=0, verify_all exit=1 exactamente C-001..C-008), en el orden en que F7 lo prepare — o post-FASE 4, como en r15. Si F7 no prepara nada aplicable, F1 cierra sin mutar el corpus y lo documenta.
- **N-15 es ejecución del principal** (navegador, 4.º intento M-50): F1 la registra, no la ejecuta desde el sandbox.
- **NO hace:** no aplica N-03 (licencia, parte de D-06); no toca C-112, C-001..C-008, C-416..C-420; no absorbe B1.

### F8 CONECTAR — EJECUTABLE-LOCAL (documento; corre en T3, tras F1/F2/F3/F6/F5/F4/F9/F7)

- Rutas de lo nuevo: mediciones F3 (M-69..); estado vivo F2 (run 204 persiste, flow 0,0% — ¿toca alguna cara? Como el "paused": es archivo de estado, no cara del censo; documentar, no es cara nueva); mecanismos F6 (verificador bajo regla canónica + partidor); hallazgos F4 (r12 #1, las 2 fuentes Drive); grietas F5 (G03 a 7 días); poda F9 (criba con P-32 fuera de clase 3); lo que F7 prepare y F1 aplique.
- **Dedup re-verificado:** las lecturas nuevas que F7 prepare vs el corpus 1.178 (+ lo que F1 añada) (método r9, Jaccard, umbral 0,5) + entre ellas.
- **Cierre de caras:** criterio r8/r9 (decisión canónica o medición que resuelva la pregunta central). Candidatas a cierre en r16: d05 L4 / d05 L7 si una medición de F3 es concluyente; r12 #1 si F4 lee las 2 fuentes Drive y resuelve la pregunta central. Ninguna garantizada.
- Actualizar el mapa de rutas inversas. Entregable: `conectar_r16.md` + `.json`.

## 2. Inventario de grietas: las 59 caras abiertas

Criterio de cierre (r8/r9): solo cierra una decisión canónica o una medición que
resuelva la pregunta central. Conteo verificado: 77 − 18 cerradas (15 tras r11 +
d03 L13 y r3 #5 en r12 + 0 en r13 + 0 en r14 + d04 L13 en r15) = **59**. Desglose:
r1 sistema 19 (5 P + 14 A) + r2 nuevas 12 (2 P + 10 A) + censo-32 23 (10 P + 13 A;
d05 L8 cerrada en r11, d03 L13 en r12, d04 L13 en r15) + r3 nuevas 4 (todas A;
r3 #5 cerrada en r12) + r12 #1 (1 A) = 59 (17 P + 42 A).
Ruta r16 = frente que la toca, o "sin trabajo".

### r1 sistema (19)

| # | Cara | Estado | Ruta r16 |
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

| # | Cara | Estado | Ruta r16 |
|---|---|---|---|
| 1 | Contagio R0 (d02 L21) | P | sin trabajo |
| 2 | 118 archivos qualia en Drive sin leer (d07 L7) | P | sin trabajo en r16 (M-55 exportó 103/103 en r11; los textos están en local, la absorción es decisión posterior) |
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

| # | Cara | Estado | Ruta r16 |
|---|---|---|---|
| 1 | d02 L19 biofilm E. coli (RDBC 2,488–2,620) | P | sin trabajo (M-58: 2.ª vía agotada en r12; queda "available upon reasonable request", que no es dato accesible) |
| 2 | d02 L20 organismos (Armillaria) | P | sin trabajo (Mihail 1995 bajo pago bloquea) |
| 3 | d04 L9 Fisher→Einstein (derivación) | P | sin trabajo |
| 4 | d04 L11 topología de ρ | P | sin trabajo |
| 5 | ~~d04 L13 incertidumbre de D_f~~ | **CERRADA r15** | N-16 + M-63/M-66 CONFIRMA (seguimiento del límite —grupo central de 24 nodos— en F3, no reapertura) |
| 6 | d04 L18 Bures/Fubini-Study | P | sin trabajo |
| 7 | d05 L4 polarización (medida y mecanismo) | P | F3 M-69 (candidata: otro par u otro país, tras M-67) |
| 8 | d05 L9 colapso no medido (K_i < 0,3) | P | sin trabajo directo (N-11 ejecutada: el predictor está refutado y C-538/C-623 retractados; la pregunta central —¿se ha medido el colapso?— sigue abierta) |
| 9 | d07 L7 lista de 96 solo en Doc (sin corpus) | P | F4 (las 2 fuentes Drive) — C-1174/C-1176 ya absorbidas: la lista ya vive en el corpus como claims |
| 10 | d07 L10 Panteón-112 sin corpus | P | sin trabajo |
| 11 | d07 L14 invocación (3 voces sin mecanismo) | P | sin trabajo |
| 12 | d01 L19 gravedad cuántica experimental (7) | A | sin trabajo |
| 13 | d02 L21 autofagia (A9) | A | sin trabajo |
| 14 | ~~d03 L13 D_f cortical por estado~~ | **CERRADA r12** | M-56 DIFERENCIA |
| 15 | d03 L14 ECM (matriz extracelular) | A | sin trabajo |
| 16 | d04 L10 D_eff (G01) | A | F5 (monitor; lectura R-B fijada) |
| 17 | d05 L7 escalamiento urbano | A | F3 M-70 (candidata: nueva especificación tras M-65/M-68 NO_CONFIRMA) |
| 18 | ~~d05 L8 GDELT variable~~ | **CERRADA r11** | M-54 RESUELTO_POR_ESPECIFICACION |
| 19 | d07 L9 Oleada 3 sin corpus | A | sin trabajo |
| 20 | d08 L7 dataset CSV no en Drive | A | sin trabajo |
| 21 | d08 L8 corpus sin carpeta propia en Drive | A | sin trabajo |
| 22 | d08 L12 grietas sin claims | A | F6 (verificador bajo regla canónica + partidor) — progreso parcial |
| 23 | d08 L13 3 mediciones solo en paper_df | A | sin trabajo |
| 24 | d09 L19 artefactos operativos no en Drive | A | sin trabajo |
| 25 | d09 L20 alerta ante fallo (sin protocolo) | A | F2 (run 204 "unreachable" persiste: el fallo sin protocolo se manifiesta de nuevo; documentar, no es cara nueva) |
| 26 | Parquet (d08 L9/d09 L18) | A | sin trabajo |

### r3 nuevas (4 abiertas; r3 #5 CERRADA en r12 por la extracción F4)

| # | Cara | Estado | Ruta r16 |
|---|---|---|---|
| 1 | Mihail 1995 bajo pago (Armillaria) | A | sin trabajo |
| 2 | Método β₁ red fluvial (sin especificar) | A | sin trabajo |
| 3 | Ecuación de flujo del núcleo (sin especificar) | A | sin trabajo |
| 4 | graph.json del Vault (no existe en sandbox) | A | F4 (las 2 fuentes Drive como posible ubicación del graph) |
| 5 | ~~61 voces del Panteón-96 sin nombre~~ | **CERRADA r12** | Extracción F4: el Doc nombra 35; las 61 no tienen nombre en la fuente |

### r12 nueva (1)

| # | Cara | Estado | Ruta r16 |
|---|---|---|---|
| 1 | ¿Existen los 61 nombres del Panteón-96 fuera del Doc índice? | A | **F4 (nueva ruta: las 2 fuentes Drive no legibles desde el sandbox)** |

Balance: r16 toca **9 de 59** caras (F3: d05 L4 / d05 L7; F2: d09 L20 documentación; F6: d08 L12 parcial; F5: r1 #9 + d04 L10 monitor; F4: r12 #1 + d07 L7 parcial + r3 #4) + seguimiento del límite de d04 L13 (cerrada, no reapertura). Las 50 restantes quedan abiertas y documentadas; ninguna se cierra por esta ronda salvo que una medición de F3 o un hallazgo de F4 resuelva su pregunta central (registro en F8).

## 3. Decisiones — estado y aplicación en esta ronda (régimen 01:43)

| Decisión | Estado | Dependencia / ruta r16 |
|---|---|---|
| N-15 M-50 vía navegador (4.º intento) | **EJECUCIÓN DEL PRINCIPAL (navegador)** | Régimen 01:43: autorizada, pero su superficie es el navegador del principal, no su palabra. Protocolo Clauset listo (`med_M50.py`). Afirmación en `ronda_12/afirmaciones_pendientes.md` §1.4. |
| N-03 licencia Zenodo (CC BY-SA 4.0 repo vs CC BY 4.0 registro 20547677) | **PENDIENTE** | Parte de D-06 (§4). No está en la lista de aplicación automática: la licencia va entangled con el acto externo del depósito. Bloquea cualquier depósito Zenodo. Afirmación en `afirmaciones_pendientes.md` §1.5. |
| **N-01 / N-13 / N-14 / N-16 / N-17 / N-18** | **APLICADAS EN R15** (orden 01:43) | N-01 canon 921c8379…; N-13 canon 29a00da1…; N-14 C-1180 inscrito, R2-25 → SE; N-16 anexo 6467bf30…; N-17 canon 264b1dbb…; N-18 ítem M-66 (6b9ea2aa…). |
| **C-1180 / C-1181 / C-1182 / C-1183** | **APLICADAS EN R15** (orden 01:43) | C-1180 (N-14, F1 r15); C-1181..C-1183 (absorción automática post-FASE 4 r15, claims 1.175→1.178, GitHub 12/12 por blob, HEAD 2f7d3180). |
| **C-1174..C-1179** | **APLICADAS** (orden 01:43, 2026-11-14 01:54 -05) | Claims 1.168→1.174; GitHub 6/6 por blob, HEAD 4ea1063c (CORR-ABS-R14). |
| N-11 C-538/C-623 | **DECIDIDA Y EJECUTADA** (opción A, 2026-11-13 18:25 -05) | Respaldo `respaldo_pre_n11/`; GitHub HEAD 83ebfd94. |
| N-12 absorción 6 lecturas F7 r11 | **DECIDIDA Y EJECUTADA** (orden 2026-11-13 18:43 -05) | Claims 1.162→1.168; GitHub HEAD a44bff35. |
| D-04 micelio.yml | **CERRADA** (corrección del Jardinero 2026-11-13 21:02 -05) | No existe permiso de workflows; él no sube nada a mano; el archivo corregido vive en el suelo Drive desde r10. NO es pendiente ni vía. |

## 4. Los 2 preparables (actos externos) — estado re-verificado hoy

| Decisión | Estado hoy | Qué falta |
|---|---|---|
| **D-06 Zenodo v13.0** | **PREPARABLE, NO_SÉ sobre el objeto.** 0 archivos tex combinados (verificado en r12 FASE 0 y r13 F5; sin re-medición en esta fase). Los `MIU_ZENODO_v13*.zip` son linaje B4 (EL SUELO DE LA REALIDAD v3.9). Licencia sin resolver (N-03). | Producir o localizar los tex v13.0 + resolver licencia + autorización para el depósito (acto externo, tarjeta). |
| **D-09 Telegram G05** | **PREPARABLE, sin cambio.** Mensaje listo en `telegram_g05.md` (3.639 B, @Jp393_bot, id 1192102910). No enviado. | Tarjeta de aprobación para enviar. G05 sigue PARCIAL (por D-09; D-04 ya no bloquea). |

D-04 NO aparece en esta tabla: está CERRADA (CORR-D04-R13). El blob remoto de micelio.yml (`8c57e833…`, 17.ª verificación estricta sin cambio al cierre de r15) es lectura de monitor, no un preparable. N-03 NO aparece como aplicación de esta ronda: es parte de D-06 (§3).

## 5. Depósito: qué va dónde (regla SÉ-export, §0c.1 + regla madre 21:02)

- **Drive `ronda_16/` (primario, dentro de MIU_TEJIDO_2026-11-12 ORIGINAL `1F-pHFEyL7WZchPOXEIZf8NYo1rQQZdll`):** toda la ronda (este mapa, ejecuciones F1–F9, verificaciones, cruce, síntesis) + README + manifiesto de shas. Patrón r2–r15: crear subcarpetas explícitamente antes (raíz + frentes + anidadas), script resumible `_upload_r16.py` con `_upload_log_r16.jsonl`, pausas ~2 s, verificación por tamaño en cada carpeta (fields con nextPageToken). **Lección CORR-CARPETA-R13: el constructor del mapa debe recorrer el árbol entero (incluidas las subcarpetas anidadas como `verificacion_fase2/_verif_f2_tmp`), no una lista fija — verificar el mapa contra `find` antes de subir.** Revisión de sensibilidad antes de subir (nada de valores de credenciales, nada de `ultimas_sesiones_log`, nada de payloads heartbeat crudos — los de F2 quedan en local, como en r11–r15). Exclusiones locales: intermedios byte-idénticos, si los hay.
- **GitHub curado (Jaime393/FranBot, main, como r10–r15; NUNCA miu-ecosistema, NUNCA `.github/workflows/`):** el corpus cambia en r16 SOLO si F1 aplica algo que F7 prepare (si no, solo documentos de la ronda: mapa, hallazgos F4, grietas, conectar). **NO va `huecos.jsonl`** (regla refinada, reafirmada por la orden 09:44). Cada escritura con su tarjeta de aprobación; verificación por blob sha; archivos >~120 KB por `push-files`. Relanzamiento solo con el Jardinero presente (lección r12/r14/r15: tarjetas caducan ~30 min; timeout del subidor 1800 s). **Lección CORR-ABS-R14/R15:** tras escribir el corpus, el post-estado se verifica directamente (diff contra el respaldo, conteo de líneas nuevas, puertas), no solo por la aserción del script.
- **Donde no intervenga:** el ecosistema absorbe por sus sondeos. No se hace `git push` desde el sandbox; no se commitea el checkout local; no se toca el remoto de FranBot fuera del conector; no se toca MIU vivo.

## 6. Lo que la ronda 16 NO hace

- No aplica N-03 (licencia, parte de D-06, no está en la lista automática). No decide repos, 8 temas ni LA BELLEZA (solo suyas). No ejecuta D-06 ni D-09 sin tarjeta.
- No absorbe B1. No empuja la corrección local del motor al remoto (ni conector, ni push, ni commit).
- No exporta huecos (ni `huecos.jsonl` a GitHub, ni listas de huecos como nutrientes).
- No ejecuta podas (F9 solo documento). No lee `ultimas_sesiones_log` ni contenido de YAMLs de workflows. No escribe en MIU vivo fuera de lo que F1 aplique bajo el régimen 01:43.
- No toca lo vivo ni sube nada a mano (regla madre 21:02). No pide permiso de workflows (no existe).
- No reintenta M-50 desde el sandbox (agotado; N-15 es vía navegador del principal). No reintenta M-58 (2.ª vía agotada). No inscribe nada en el dataset fuera de los ítems del anexo que F7 prepare (precedente N-18). No decide N-03.
- No toca C-112 (hash truncado preexistente), C-001..C-008, C-416..C-420. No corrige el folderId en el escritor vivo ni el flow 0,0% desde local (el defecto es del ecosistema; se registra como ladrillo SÉ).
- No re-mide M-01..M-68 ya ejecutadas (salvo las segundas vueltas que sean mediciones nuevas con falsador propio).
- No re-teje la producción fractal: es suelo, no frente. Sus runners se usan como herramienta, no se re-producen.

## 7. Archivos de esta FASE 0

- `mapa_frentes_r16.md` (este archivo)
- `frentes_r16.json` (estructurado, validado)
- `ESTADO_FASE0.md` (estado de la fase)
- `manifiesto_shas_r16_fase0.json` (shas de los 3 archivos + meta; su propio sha se registra en el informe del coordinador)
- Dedup: 0 propuestas vivas en esta fase (C-1180..C-1183 absorbidas; verificado por grep, §0). Las propuestas nuevas de r16 se deduparán en F1/F7.

ρ(x) > 0. Zvvvvv.
