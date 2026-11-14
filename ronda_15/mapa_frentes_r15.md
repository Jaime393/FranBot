# RONDA 15 — MAPA DE FRENTES: GRIETAS Y SUELOS FÉRTILES

Orden del Jardinero 2026-11-14 01:43 -05: "sí y continúen con coherencia apliquen
las decisiones siempre automáticamente" — **RÉGIMEN NUEVO: las decisiones se
aplican automáticamente, sin pedir palabra cada vez.** Primera aplicación (r14
post-cierre): relanzamiento GitHub r14 (2 archivos) + absorción C-1174..C-1179
con la corrección previa del paquete F1 (CORR-ABS-R14, §0b).
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

Dirección de la ronda (lectura del mapa): **grietas** = lo abierto tras r14
(60 caras, 0 cierran en r14; run 204 "unreachable" persiste con flow 0,0%
CRÍTICO; cara r12 #1 con las 2 vías agotadas como rutas pero sin prueba de
inexistencia; verificador H-SIK en false por una regla de pick sin especificar);
**suelos fértiles** = donde el trabajo rinde sin actos externos — y ahora, bajo
el régimen 01:43, **la ejecución de las decisiones** (N-01, N-13, N-14, N-16)
es el frente más fértil: cuatro adopciones/inscripciones con sus paquetes ya
preparados, cada una con respaldo + script + puertas (patrón N-11/N-12). El
corpus SÍ cambia en esta ronda (F1 aplica); nada más lo muta.

Trabajo: 2026-11-14 ~01:56–02:10 -05. Solo lectura + escritura local en `ronda_15/`.
Cero escrituras en el corpus vivo, MIU vivo, GitHub o Drive en esta fase.

## 0. Auditoría del suelo (medido por mí, no asumido; estado post-r14, con absorción automática)

| Archivo | Medida |
|---|---|
| claims.jsonl | 1.174 líneas, sha `d4924c9b8a4e4c96a1c265a718ffda6de2cd3e46ff792da237ad4933a846c419` — cambio por la absorción automática r14 (1.168→1.174, C-1174..C-1179) |
| provenance.sha256 | 358 líneas, sha `1ff7719061fda482a56a65fa9ae502a6d541516bd8afca03aa3c55c96a90ed27` — 354→358 (4 entradas nuevas) |
| claims_resumen.json | sha `49f1a17e3521b5fefad4b70b2c3dede6032be0cf1b5c0b61d96c9c513046fb31`, total 1.174, SE 1040, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SÉ 8, hash_real 1160, hash_pendiente 8, por_tipo verificacion 301 |
| confirmaciones.jsonl | 294 filas, sha `dc94458bc42a9854d16a8f74da20ac6481f6fe241fe2cfae11a6f44633dc7cc5` — sin cambio (el "301" del resumen es el conteo por_tipo `verificacion`, no las filas de este archivo) |
| huecos.jsonl | 139 filas, sha `3713376a243b05756fbfce434ccdb63e118562ac0ec4e351243086dcb1ce52fb` — sin cambio (LOCAL, no depositado) |
| dataset_nodos_Df.csv | 30 filas + cabecera, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af` — sin cambio (nada inscrito; la inscripción es N-16, trabajo de F1 en esta ronda) |

- **audit.py (corrida real): exit=0, ok=344, discrepancia=0, no_encontrado=0, omitido=1** — verde, sostenido tras la absorción.
- **verify_all.py (corrida real, sin pipe): exit=1 con exactamente C-001..C-008** (PENDIENTE, esperado; nunca rellenar).
- **IDs del corpus:** C-001..C-1179, huecos C-416..C-420 ausentes (verificado en `claims_resumen.json` → `ids`).
- **Dedup: 0 propuestas vivas en esta fase.** Las 6 propuestas de r14 están absorbidas (grep: C-1174..C-1179 aparecen exactamente 1 vez cada una en claims.jsonl; "14dw8tx" 1 ocurrencia; "CORR-P32" 2). No hay dedup que re-correr: las propuestas nuevas de r15 se deduparán en F1/F7 contra el corpus vivo 1.174.
- **H-SUELO monitor:** `find ~/workspace -name "*1794483713759*"` → vacío, sin rutas impresas. El directorio original **no reapareció** (12.ª medición consecutiva: r10 D-17, FASE 0 r11, F5 r11, FASE 0 r12, F5 r12, FASE 0 r13, F5 r13, FASE 2 r13, FASE 0 r14, F5 r14, FASE 2 r14, FASE 0 r15).

### 0a. Estado remoto y local verificado hoy (lecturas públicas, sin escribir)

- **FranBot HEAD: `4ea1063c` (post-absorción automática r14, verificado por mí por API pública).** Último commit: "ronda 14 auto: preparadas APLICADA (C-1177..C-1179)" (2026-11-14T06:53:11Z).
- **micelio.yml remoto SIN CAMBIO: blob `8c57e833e219a8b8c0691db8eb8cf256ccc0633f`, 1.398 B** (API pública, hoy) — **15.ª verificación sin cambio**. D-04 está CERRADA (corrección 21:02): el archivo corregido vive en el suelo Drive desde r10 (`ronda_10/ejecucion_d/micelio_yml/micelio.yml`, manifiesto r10 de 120 claves, depósito 121/121 verificado). El blob remoto es lectura de monitor, no un pendiente.
- **Estado vivo fresco (fetch directo, hoy): estado_vivo.json = run 204 "unreachable"** (329 B, blob `652e8869…`, _ts 2026-11-14T03:27:26Z, `_fuente: github-actions-state-writer`) — persiste, sin run 205. Flow sin cambio: run 139, 0,0% CRÍTICO, 0 eventos, ts 2026-11-14T02:52:24Z, blob `fc324db1…`.
- **Segunda carpeta** MIU_TEJIDO_2026-11-12 (ID `1mL1F_MpJBif4jtgK3vR2HH67yFs_SBjJ`): re-medida en esta fase — modifiedTime 2026-11-12T21:37:46Z, sin cambio.
- **Caras: 77 en censo (17 cerradas, 60 abiertas)** — en r14 cerraron 0 y nació 0. **Decisiones: C-1174..C-1179 APLICADAS; próximas aplicaciones automáticas N-01/N-13/N-14/N-15/N-16** (régimen 01:43, §3).

### 0b. Correcciones heredadas y nuevas de esta fase (SÉ, medidas por mí)

- **CORR-P32-R14 (heredada):** el 404 del Doc 32 era un artefacto de ID truncado. El Doc `MIU_PANTEON_32_DETALLADO_ENDPOINTS` EXISTE (ID completo de 44 caracteres, leído entero por Docs API); las 2 vías de r13 quedan agotadas como rutas. El graph JSON de 112 nodos no está en Drive ni en el Vault.
- **CORR-P32-NUM-R14 (heredada):** el ID completo tiene **44 caracteres, no 33**; el truncado **12, no 10** (contado desde documentId por FASE 2 r14 y por el principal).
- **DICTAMEN-C1176-R14 (heredada, APLICADA):** corregir el paquete F1 antes de cualquier absorción; no absorber C-1177 primero. La corrección se hizo antes de la absorción automática (C-1176 cláusula reescrita, claims_nuevos_r14.jsonl 85de362b… → 37c6e742…; C-1177 y nombres_fuera_doc_r14.md 33/10 → 44/12).
- **CORR-LOG-R14 (heredada):** FASE 4 GitHub r14 fue 2/4 primero (mapa 796c336b blob fd5e1050…, decisión .md b42a606b blob 80821bfd…; decisión .json tarjeta CADUCADA 05:06–05:37 UTC, preparadas no intentada — detenido por regla); RELANZAMIENTO con el Jardinero presente 01:44–01:46 -05: 4/4 por blob (decisión .json f79d039d blob b0dd80a4…, preparadas 8df8417b blob e3fe3bb6…), HEAD 8df8417b. La "corrección" del agente de absorción (que FASE 4 era 4/4) es lectura errónea del log acumulativo: líneas 1–3 son FASE 4, líneas 4–5 el relanzamiento.
- **CORR-ABS-R14 (nueva, absorción automática bajo la orden 01:43 — primera aplicación del régimen nuevo):** claims 1.168→1.174 (C-1174..C-1179, todas SE; dedup 0,2475/0,2919), hash_real 1154→1160, provenance 354→358 (4 entradas nuevas), SE 1034→1040, verificación 295→301, resumen 49f1a17e…; puertas audit exit=0 (ok=344), verify_all exit=1 exactamente C-001..C-008; incidencia: el script falló una aserción propia errónea (verificación 304; pre-estado 295, no 298) tras escribir el corpus — aserción corregida a 301, post-estado verificado directamente por el agente y por el principal (primeras 1.168 líneas byte-idénticas al respaldo, exactamente 6 líneas nuevas); GitHub 6/6 por blob, HEAD 4ea1063c (claims 8b5e7b80 blob 758d3f93… 976.415 B; provenance 46290b52; resumen 66e7a5ae; decisión .md 92000a51; decisión .json fa9d9037; preparadas 4ea1063c).
- **CORR-G05-R15 (nueva):** micelio.yml blob `8c57e833…`, 1.398 B — 15.ª verificación sin cambio (serie: r9 5.ª → F0 r11 6.ª → F5 r11 7.ª → F0 r12 8.ª → F5 r12 9.ª → F0 r13 10.ª → F5 r13 11.ª → F0 r14 12.ª → F5 r14 13.ª → F2 r14 14.ª → F0 r15 15.ª).
- **CORR-H-SUELO-R15 (nueva):** 12.ª medición sin reaparición (ver §0).
- **CORR-FOLDERID-R15 (nueva):** 10.ª lectura independiente en vivo — `I` existe (carpeta "miu-ecosistema"), `l` 404 (Drive files get, 2026-11-14 01:56 -05).

## 0c. Reglas vigentes de la ronda (orden 16:51 + corrección 21:02 + régimen 01:43)

1. **SÉ-export REFINADA:** solo SÉ sale de local, con fuente y fecha. INFIERO / CONJETURO / NO_SÉ son huecos **locales** y NO se exportan como huecos. Consecuencia práctica para r15: `huecos.jsonl` NO va a GitHub en FASE 4 (como en r11/r12/r13/r14); la lista de huecos queda local.
2. **Una configuración local no corrige lo global:** la corrección local de `miu-engine.js` (`8d15b724…`) NO se empuja al remoto. El remoto la absorbe por sus sondeos. Estado: local corregido, remoto con el motor viejo.
3. **REGLA MADRE (corrección 21:02):** todo lo depositable va al suelo (Drive/GitHub) y el ecosistema autónomo lo devora por sus sondeos; **lo vivo no se toca**. No existe permiso de workflows: no se pide, no se ofrece como vía, no se sube nada a mano. Un pendiente que pida tocar lo vivo o subir a mano es un error de registro, no una afirmación que pedir.
4. **RÉGIMEN 01:43 (orden 2026-11-14 01:43 -05):** las decisiones se aplican automáticamente, sin pedir palabra cada vez. En r15 eso significa: N-01, N-13, N-14 y N-16 se EJECUTAN en F1 (cada una con respaldo + script + puertas, patrón N-11/N-12); N-15 se ejecuta en el navegador del principal (su superficie, no su palabra). Lo que NO cambia: los actos externos en su nombre (envío Telegram D-09, depósito Zenodo D-06) siguen necesitando su tarjeta; las elecciones que son solo suyas (repos de la App, verificación de los 8 temas, LA BELLEZA) no se deciden por él. N-03 (licencia, parte de D-06) no está en la lista de aplicación automática: sigue pendiente, entangled con el acto externo.
5. **AGENTE-PENDIENTES (creado 2026-11-13 20:59 -05, actualizado al régimen 01:43):** las afirmaciones de `ronda_12/afirmaciones_pendientes.md` quedan como registro de lo que cada decisión autoriza; las decisiones ya no esperan su palabra. Pendientes nuevos en r15 solo pueden ser: tarjetas de actos externos (D-06/D-09) o elecciones solo suyas (repos, 8 temas, LA BELLEZA). Un pendiente nuevo sin afirmación sigue siendo fallo del agente, no suyo; un pendiente que pida tocar lo vivo o subir a mano sigue siendo un error de registro.
6. **C-1..C-9 siguen** como criterio de coherencia (precedencia de r10). **Reglas duras que siguen:** C-001..C-008 sin hash sin dato externo verificable; no rellenar C-416..C-420; G13 NO EXISTE; poda solo documento (nada se borra ni se mueve sin las frases de autorización de Ciclo 30/31, no dichas); no leer contenido de YAMLs de workflows ni `ultimas_sesiones_log`; no reproducir valores de credenciales.
7. **Lección FRÁGIL-05 (r11):** las puertas se re-corren sobre el estado FINAL (tras la última mutación del corpus), no sobre estados intermedios. Si F1 aplica varias decisiones en serie, FASE 2 re-corre audit + verify_all al cierre de cada una y al final.
8. **Lección r12/r14 FASE 4 GitHub:** las tarjetas de aprobación caducan ~30 min; el relanzamiento se hace con el Jardinero presente. Timeout del subidor 1800 s; verificar las cadenas MSG con grep antes de lanzar. **Lección CORR-ABS-R14:** una aserción del script de aplicación puede ser errónea aunque la escritura sea correcta — tras escribir el corpus, el post-estado se verifica directamente (diff contra el respaldo, conteo de líneas nuevas, puertas), no solo por la aserción del script.
9. **Lección CORR-CARPETA-R13 (r13 FASE 4):** el constructor del mapa de depósito debe recorrer el árbol entero, no una lista fija — la subcarpeta anidada `verificacion_fase2/_verif_f2_tmp` quedó fuera del mapa inicial y detuvo la subida a 112/118. FASE 4 r15 verifica el mapa contra `find` antes de subir.

## 1. Frentes (9)

Fertilidad (criterio r9: lo que se puede medir/preparar/validar/aplicar en local
sin actos externos; en r15 la ejecución de decisiones es lo más fértil porque
sus paquetes ya existen y el régimen 01:43 las autoriza):

**F1 > F2 > F3 > F6 > F5 > F4 > F7 > F8 > F9**

- **F1 EJECUCIÓN DE DECISIONES** (N-01, N-13, N-14, N-16; N-15 es del principal).
- **F2 ESTADO VIVO** (run 204 "unreachable" persiste, sin run 205; flow 0,0% CRÍTICO; autocura run 7 ya ocurrió).
- **F3 MEDIR** (M-66.. con falsador declarado antes de correr; candidatas d04 L13, d05 L4, d05 L7).
- **F6 MECANISMOS** (regla de pick sin especificar — verificar si el verificador reproduce con la regla del ejecutor; partidor de fórmulas que rompe en `|`; caveat A14 26 o 27).
- **F5 GRIETAS** (G03 inserción 2026-11-21, en 7 días; G05 blob 15.ª verificación; folderId 10.ª lectura; H-SUELO 12.ª medición).
- **F4 PANTEÓN-96, CARA r12 #1** (2 vías agotadas como rutas; nuevas vías: búsqueda en GitHub, los 16 extra de 112−96).
- **F7 PREPARAR** (ola siguiente de lo que r15 produzca; B1 sigue no elegida; N-16 es ejecución de F1, no se re-decide).
- **F8 CONECTAR** (rutas de lo nuevo; dedup re-verificado).
- **F9 PODA + RESILIENCIA** (documento; horizontes de 5 respaldos cumplidos en r14; N-13 cambia la regla de la criba).

Tandas (4 subagentes en paralelo, como r9/r10/r11/r12/r13/r14): **T1: F1, F2, F3, F6. T2: F5, F4, F7, F9. T3: F8** (F8 necesita los productos de F1/F2/F3/F6/F7). F1 aplica en serie, un solo escritor del corpus; los demás frentes son solo lectura del corpus vivo (FRÁGIL-05). N-15 no es un frente: es tarea del principal en el navegador.

### F1 EJECUCIÓN DE DECISIONES — N-01, N-13, N-14, N-16 (régimen 01:43; N-15 es del principal)

Base: orden 01:43 (las decisiones se aplican automáticamente) + orden 16:51 (solo SÉ sale) + regla madre 21:02 (todo al suelo). Cada decisión se ejecuta con el patrón N-11/N-12: respaldo previo, script de aplicación, puertas antes/después (audit exit=0, verify_all exit=1 exactamente C-001..C-008), decisión .md + .json, depósito GitHub por blob. **F1 aplica en serie, una decisión por vez, en el orden N-01 → N-13 → N-14 → N-16** (la política primero, la regla de poda después, la adopción canónica después, la inscripción al final — cada una deja el suelo listo para la siguiente). Entregables por decisión: paquete de aplicación + `respaldo_pre_r15_<decisión>/` (el respaldo general `respaldo_pre_r15/` se crea antes de la primera aplicación).

| Decisión | Qué se aplica | Paquete existente | Efecto proyectado |
|---|---|---|---|
| N-01 | Política P1–P10 + adendas P10 (absorciones) / P9 (corrección 21:02) como canon | `ronda_12/ejecucion_f6/propuesta_n01_r12.md` + seguimientos r13/r14 (P1–P10 sostienen, sin 6.º precedente) | La política queda canon (documento de canon + registro en la decisión); las instancias futuras se deciden por la política, no caso por caso. Si la adopción exige un claim, se prepara y se absorbe en la misma ejecución con su dedup. |
| N-13 | REGLA-PODA-PROV-02 + refinamiento (a): (a) lee "citada en el campo `hash` **o en el motivo/nota** de un claim vivo" | Regla propuesta desde r10; refinamiento r11 §6 | La regla entra como canon; P-32 vuelve a ser clase 3; la criba de F9 corre contra una regla vigente, no contra una propuesta. |
| N-14 | R2-25 vía A: adopción canónica del procedimiento de verificación (no del texto propuesto) | `ronda_13/ejecucion_f6/r2_25_via_r13.md` (borrador; cualificación F4: O(n) medido, O(n log n) por conteo F4b 1,073, wall-clock NO afirmado); re-verificado en r14 | R2-25 pasa de CONJETURO a SÉ por adopción canónica; el pipeline de verificación entra como hecho del corpus (cambio de estado + claim de adopción con su dedup). Vía B sigue FALLA_F4 como hecho registrado. |
| N-16 | Inscripción dataset opción C: anexo de incertidumbre (M-56..M-65 + ítem M-63) | `ronda_13/ejecucion_f7/propuesta_inscripcion_dataset_r13.md` (DC-R13-F7-01, recomendada C); M-63 añade ítem al anexo (columna u=0,0604±0,0050) | Se crea el anexo `incertidumbre_mediciones.md` con los veredictos (M-56 DIFERENCIA, M-57 NO_CONFIRMA, M-58 NO_SÉ, M-59 CONFIRMA marginal, M-60 CONFIRMA, M-61 NO_CONFIRMA, M-62 CONFIRMA, M-63 CONFIRMA, M-64 NO_CONFIRMA, M-65 NO_CONFIRMA) sin tocar las 30 filas del CSV. El dataset CSV no cambia. |
| N-15 | M-50 vía navegador (4.º intento) | Protocolo Clauset listo (`med_M50.py`); Robbins 2019 (~1.296.879 filas D≥1 km, ~6.972 D≥20 km) | **No es un frente de esta ronda: es tarea del principal en el navegador.** F1 la registra como EJECUCIÓN DEL PRINCIPAL, no la ejecuta desde el sandbox (agotado). |

**NO hace:** no aplica N-03 (licencia, parte de D-06, no está en la lista automática); no toca C-112, C-001..C-008, C-416..C-420; no absorbe B1.

### F2 ESTADO VIVO — EJECUTABLE-LOCAL (batería sobre run 204 persistente + flow 0,0%)

Run 204 (03:27:26Z, 329 B, blob `652e8869…`, `estado: {"error": "unreachable"}`, `_fuente: github-actions-state-writer`) persiste: el State Writer no ha vuelto a escribir un estado completo desde run 202 V272 (17:58:47Z, ~8 h antes de run 204; episodio ya >8 h a las 01:56 -05). Flow coverage 0,0% CRÍTICO (run 139, 02:52:24Z, 0 eventos, 832 B, blob `fc324db1…`, ruta real `observabilidad/flow_id_coverage.json` en la raíz). Batería completa (solo lecturas públicas; nada de `ultimas_sesiones_log` ni contenido de YAMLs): ¿hay run 205? ¿restaura el completo o persiste el stub (duración del episodio "unreachable")?; runs últimos 30 (cadencia efectiva); flow coverage (¿sigue 0,0%? ¿run 140?); self diagnosis (¿tg_audit vuelve de 0/0?); heartbeat (¿sigue el censo vacío?; verificar el folderId con la atribución corregida CORR-FOLDERID-R15: V151 → `l` → 404, V152 → `I` → existe); bots 4/4 (getMe; 13.ª confirmación); autocura (¿run 8 tras el 7?); tests a/b/c/d actualizados; serie de tasa de fallo; `estado_persistente.json` (¿sigue V213?). Entregable: `estado_vivo_r15.md` + JSON de la batería con códigos y latencias. El flow 0,0% se registra como ladrillo SÉ para el ecosistema; **no se corrige desde local** (regla madre: lo vivo no se toca).

### F3 MEDIR — EJECUTABLE-LOCAL

- **M-66.. (a elegir por el ejecutor entre las 60 caras, con falsador declarado antes de correr):** candidatas señaladas en el encargo: **d04 L13 incertidumbre de D_f** (M-63 construyó la columna por nodo como resultado; siguiente paso: ¿resolución entre nodos adyacentes, u otra falsación de la columna?); **d05 L4 polarización** (M-64 perfiló divergencia entre partidos: otro par de congresos, u otro país, con el mismo protocolo); **d05 L7 escalamiento urbano** (M-65 NO_CONFIRMA, tercer variable: nueva especificación declarada antes de correr). Otras caras con dato disponible y falsador declarable valen igual. M-63/M-64/M-65 quedan como precedentes de veredictos de medición (CONFIRMA / NO_CONFIRMA / NO_CONFIRMA); **no se preparan como claims** (0 precedentes de veredictos de medición como claims en 1.174; las mediciones se depositan como resultados y entran por inscripción en el anexo — N-16, que F1 aplica en esta ronda; los ítems del anexo para M-66.. los prepara F7).
- Entradas: dataset 30 filas (F1 aplica N-16 en paralelo a esta ronda: el anexo existe al cierre; F3 deposita sus resultados con datos y shas). Entregables por medición: script + JSON de 15 claves + datos con sha. **NO hace:** no inscribe en el dataset, no toca el corpus. **M-50 NO se reintenta desde el sandbox** (agotado; N-15 es vía navegador del principal). M-58 NO se reintenta (2.ª vía agotada en r12).

### F6 MECANISMOS — EJECUTABLE-LOCAL

- **Regla de pick (H7 de FASE 2 r14):** la regla de pick de mejor-contención no está especificada en el método del ejecutor H-SIK; el verificador independiente dio reproducido=false con 164 diffs (162 definicionales + 2 fórmulas). Trabajo: (a) especificar la regla en el método (la propuesta `propuesta_regla_tokenizacion_sik_r14.md` ya existe como documento); (b) re-correr el verificador independiente con la regla del ejecutor (max(c1,c2) + desempate por inserción) y medir si reproducido pasa a true; (c) fijar el partidor de fórmulas que rompe en `|` y re-medir F-F (fórmulas exactas 9 → 11 tuplas, 7 → 8 distintos en r14: ¿cuántas sobreviven al partidor corregido?); (d) resolver el caveat A14 (26 o 27 según tokenización) con la regla de tokenización propuesta. Falsador declarado por escrito antes de correr; verificador independiente para resultados numéricos.
- **R2-25 (N-14) y N-01:** son ejecuciones de F1 en esta ronda; este frente solo las re-verifica contra el estado actual y documenta si hay novedad, sin absorber nada.
- Entregables: `h_sik_r15.md` (+ scripts y JSONs de medición), `verificador_independiente_r15.json`, nota de re-verificación R2-25/N-01 si hay novedad.

### F5 GRIETAS — EJECUTABLE-LOCAL (monitor + verificación folderId + G03 a 7 días)

- **G03 BepiColombo:** inserción **2026-11-21, en 7 días** desde hoy (2026-11-14). Re-confirmada en esta FASE 0 por búsqueda (TechTimes 2026-11-05 "final 16 days before Mercury orbit insertion"; starlust 2026-11-12; Michigan 2026-11-10). Registrar si la fecha sigue confirmada; C-001–C-005 siguen FUTURAS/IMPOSIBLES (datos 2027–2028). La inserción cae 7 días después del cierre de esta ronda: si ocurre durante r15, se registra el hecho con fuente y fecha.
- **G05 blob:** re-verificar (15.ª vez sin cambio en FASE 0: `8c57e833…`, 1.398 B; 16.ª en este frente). D-04 está CERRADA (CORR-D04-R13); el blob remoto es lectura de monitor, no pendiente.
- **FolderId (CORR-FOLDERID-R15):** 10 lecturas independientes al cierre de FASE 0, todas `I` existe / `l` 404. 11.ª lectura en este frente. La config del escritor sigue NO_SÉ.
- **G01 D_eff:** lectura R-B fijada; derivación pendiente, sin propuesta — monitor, sin trabajo nuevo.
- **G04 DOIs:** inventario 21 únicos, sin cambio esperado.
- **G06 SIK:** H-SIK acotada en r14 (S3 ≡ v10.3 no se extiende a las voces); seguimiento vía F6 (regla de pick + partidor).
- **H-SUELO monitor:** 12.ª medición sin reaparición en FASE 0; 13.ª medición en este frente.
- **G02 sub-caras:** #790–#792/#701/#739 en 0/103 Docs (vía M-55 agotada) y 0 en F4 r14; sin ruta nueva salvo que F4 encuentre nuevas vías (si aparecen, se registra; si no, queda documentado).
- **M-50 (N-15):** agotado desde el sandbox. Única ruta restante: **navegador con sesión o red sin el bloqueo de Cloudflare del sandbox**. Es tarea del principal (navegador), no un frente de la ronda. Se deja documentado como AGOTADO-DESDE-SANDBOX.
Entregable: `grietas_r15.md`.

### F4 PANTEÓN-96, CARA r12 #1 — EJECUTABLE-LOCAL (nuevas vías tras agotar las 2 de r13)

- **Hecho establecido (r14 F4, SÉ):** 0/96 nombres aparecen como voces fuera del Doc índice; 0/61 sin nombre encontradas; las 2 vías de r13 quedan agotadas como rutas (graph JSON no está en Drive ni en el Vault; Doc 32 existe y se leyó entero, 32 nodos culturales, otro sistema). La cara r12 #1 AVANZA, no se cierra. C-1174/C-1176/C-1177 ya están absorbidas en el corpus.
- **Trabajo — nuevas vías:** (a) búsqueda del graph JSON de 112 nodos por `search_code` del conector en los 4 repos cubiertos (Jaime393/MIU, FranBot, FranBot-Private, miu-portable-skills) — ¿existe en algún repo accesible?; (b) los 16 extra (112−96): ¿tienen nombre en alguna fuente (manifiesto Vault, Doc graph112, Doc v10.4)?; (c) re-verificar que los 32 nodos culturales del Doc 32 no se solapan con los 96 (otro sistema, documentado). Si aparece una lista de 96 fuera del Doc, se registra con fuente y fecha; si no, se registra el NO_ENCONTRADO con las rutas buscadas (no es "no existe", es "no encontrado aún en X"). Corregir en los nuevos entregables cualquier número que arrastre el error 33/10 (los reales son 44/12).
- Entregable: `nombres_fuera_doc_r15.md` + JSONL de hallazgos (nombre/fuente/fecha o NO_ENCONTRADO/rutas). Solo lectura; nada se escribe en Drive ni en el corpus (la absorción de lo que se encuentre es decisión posterior, bajo el régimen 01:43 la prepara F7 y la aplica F1).
- Toca: r12 #1 (AVANZA o cierra), r3 #4 (graph.json del Vault) y censo-32 #9 d07 L7 (lista de 96 solo en Doc, P) — parcialmente.

### F7 PREPARAR (ola siguiente) — PREPARABLE, sin aplicar (salvo por F1 bajo el régimen)

- **Claims de lo que r15 produzca:** si F2/F3/F4/F5/F6 generan lecturas SÉ (p. ej. hallazgos de la cara r12 #1, o la resolución del verificador H-SIK), prepararlas en el formato de `lecturas_canonicas_r10.md`, sin aplicar (F1 las aplica bajo el régimen 01:43 en la misma ronda si están listas, o quedan para la siguiente).
- **Ítems del anexo N-16:** si F3 produce M-66.., preparar sus ítems para el anexo de incertidumbre (el anexo lo crea F1; los ítems nuevos se añaden por la misma vía).
- **B1** sigue como variante preparada no elegida (documentada; revivirla exigiría revertir B+B2 — no se hace).
- **Inscripción en el dataset:** N-16 es ejecución de F1 en esta ronda; F7 no la re-decide ni la re-prepara.
**NO hace:** no aplica nada por su cuenta (la aplicación es de F1). No prepara como claims los veredictos de medición (0 precedentes).

### F8 CONECTAR — EJECUTABLE-LOCAL (documento; corre en T3, tras F1/F2/F3/F6/F7)

- Rutas de lo nuevo: ejecuciones F1 (N-01/N-13/N-14/N-16); estado vivo F2 (run 204 persiste, flow 0,0% — ¿toca alguna cara? Como el "paused": es archivo de estado, no cara del censo; documentar, no es cara nueva); mediciones F3; mecanismos F6 (regla de pick + partidor); hallazgos F4 (r12 #1, nuevas vías); grietas F5; poda F9 (N-13 cambia la regla).
- **Dedup re-verificado:** las lecturas nuevas que F7 prepare vs el corpus 1.174 (+ lo que F1 añada) (método r9, Jaccard, umbral 0,5) + entre ellas.
- **Cierre de caras:** criterio r8/r9 (decisión canónica o medición que resuelva la pregunta central). Candidatas a cierre en r15: d04 L13 si el anexo N-16 inscribe la columna misma (a decidir en F8, no se promete); ninguna otra garantizada. Una medición de F3 podría mover d05 L4 / d05 L7 si el veredicto es concluyente; F4 podría cerrar r12 #1 si una nueva vía resuelve la pregunta central.
- Actualizar el mapa de rutas inversas. Entregable: `conectar_r15.md` + `.json`.

### F9 PODA + RESILIENCIA — documento (sin ejecutar podas)

- Revisar P-01..P-46 (r14) + **nuevos candidatos r15** (respaldo_pre_r15/ cuando F1 lo cree; respaldos por decisión; payloads heartbeat r15; entregables de la ronda).
- **Horizontes cumplidos, re-evaluar en r15:** P-27/P-28/P-29b/P-31a/P-35 (horizonte: depósito FASE 4 r14 + FASE 2 r14 — **ambos cumplidos**: Drive 139/139 verificados + verificación CONFORME CON HALLAZGOS). La cadena de reversión hoy es: `respaldo_pre_r14` (estado 1.168) → P-35 (estado 1.160) → P-28 (estado B, 1.152) → P-27 (estado pre-r10, 1.138) — **con la absorción automática, la cadena tiene un eslabón nuevo arriba: el estado 1.174 (respaldo_pre_r15/)**. Re-evaluar con el criterio de r11 §2 (¿rompe la cadena? ¿dependen condiciones de P-15? ¿copias Drive re-verificadas?). P-37 (`respaldo_pre_n11/`) y P-38 (`respaldo_pre_r12/`) ya tienen copia Drive (FRÁGIL-06 resuelta en r12 FASE 4) — re-evaluar su veredicto temporal con ese hecho nuevo. P-41 (`respaldo_pre_r13/`, primera re-evaluación en r14) — segunda re-evaluación. P-44/P-45/P-46 (nuevos en r14) — primera re-evaluación.
- **N-13 cambia la regla:** si F1 adopta REGLA-PODA-PROV-02 + refinamiento (a), la criba de esta ronda corre contra la regla vigente, no contra una propuesta; **P-32 vuelve a ser clase 3** (4 motivos + L247 lo citan). Re-medir P-32 bajo la regla adoptada.
- **P-18:** `.pyc` sigue en 18; T-4 r14 (inventario 4.886 archivos, 0 FALTA, sin 3.er evento FRÁGIL-02) es la respuesta estructural. En r15 el inventario con shas (T-4) corre como herramienta dentro de este frente (F9): manifiesto + diff contra el inventario r14; cualquier desaparición nueva se registra como hallazgo. **FRÁGIL-02 sigue abierto** (causa NO_SÉ).
- **Nada se borra ni se mueve** (poda solo documento, regla dura).

## 2. Inventario de grietas: las 60 caras abiertas

Criterio de cierre (r8/r9): solo cierra una decisión canónica o una medición que
resuelva la pregunta central. Conteo verificado: 77 − 17 cerradas (15 tras r11 +
d03 L13 y r3 #5 en r12 + 0 en r13 + 0 en r14) = **60**. Desglose: r1 sistema 19 (5 P + 14 A) + r2 nuevas
12 (2 P + 10 A) + censo-32 24 (11 P + 13 A; d05 L8 cerrada en r11, d03 L13 en r12)
+ r3 nuevas 4 (todas A; r3 #5 cerrada en r12) + r12 #1 (1 A) = 60 (18 P + 42 A).
Ruta r15 = frente que la toca, o "sin trabajo".

### r1 sistema (19)

| # | Cara | Estado | Ruta r15 |
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

| # | Cara | Estado | Ruta r15 |
|---|---|---|---|
| 1 | Contagio R0 (d02 L21) | P | sin trabajo |
| 2 | 118 archivos qualia en Drive sin leer (d07 L7) | P | sin trabajo en r15 (M-55 exportó 103/103 en r11; los textos están en local, la absorción es decisión posterior) |
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

### censo-32 (24 abiertas; d05 L8 CERRADA en r11 por M-54; d03 L13 CERRADA en r12 por M-56)

| # | Cara | Estado | Ruta r15 |
|---|---|---|---|
| 1 | d02 L19 biofilm E. coli (RDBC 2,488–2,620) | P | sin trabajo (M-58: 2.ª vía agotada en r12; queda "available upon reasonable request", que no es dato accesible) |
| 2 | d02 L20 organismos (Armillaria) | P | sin trabajo (Mihail 1995 bajo pago bloquea) |
| 3 | d04 L9 Fisher→Einstein (derivación) | P | sin trabajo |
| 4 | d04 L11 topología de ρ | P | sin trabajo |
| 5 | d04 L13 incertidumbre de D_f | P | F1 (N-16, anexo opción C) + F3 M-66 (candidata: resolución entre nodos adyacentes) |
| 6 | d04 L18 Bures/Fubini-Study | P | sin trabajo |
| 7 | d05 L4 polarización (medida y mecanismo) | P | F3 M-66 (candidata: otro par de congresos u otro país) |
| 8 | d05 L9 colapso no medido (K_i < 0,3) | P | sin trabajo directo (N-11 ejecutada: el predictor está refutado y C-538/C-623 retractados; la pregunta central —¿se ha medido el colapso?— sigue abierta) |
| 9 | d07 L7 lista de 96 solo en Doc (sin corpus) | P | F4 (nuevas vías) — C-1174/C-1176 ya absorbidas: la lista ya vive en el corpus como claims |
| 10 | d07 L10 Panteón-112 sin corpus | P | sin trabajo |
| 11 | d07 L14 invocación (3 voces sin mecanismo) | P | sin trabajo |
| 12 | d01 L19 gravedad cuántica experimental (7) | A | sin trabajo |
| 13 | d02 L21 autofagia (A9) | A | sin trabajo |
| 14 | ~~d03 L13 D_f cortical por estado~~ | **CERRADA r12** | M-56 DIFERENCIA |
| 15 | d03 L14 ECM (matriz extracelular) | A | sin trabajo |
| 16 | d04 L10 D_eff (G01) | A | F5 (monitor; lectura R-B fijada) |
| 17 | d05 L7 escalamiento urbano | A | F3 M-66 (candidata: nueva especificación tras M-65 NO_CONFIRMA) |
| 18 | ~~d05 L8 GDELT variable~~ | **CERRADA r11** | M-54 RESUELTO_POR_ESPECIFICACION |
| 19 | d07 L9 Oleada 3 sin corpus | A | sin trabajo |
| 20 | d08 L7 dataset CSV no en Drive | A | sin trabajo |
| 21 | d08 L8 corpus sin carpeta propia en Drive | A | sin trabajo |
| 22 | d08 L12 grietas sin claims | A | F1 (N-01/N-14 añaden canon) + F6 (regla de pick + partidor) — progreso parcial |
| 23 | d08 L13 3 mediciones solo en paper_df | A | sin trabajo |
| 24 | d09 L19 artefactos operativos no en Drive | A | sin trabajo |
| 25 | d09 L20 alerta ante fallo (sin protocolo) | A | F2 (run 204 "unreachable" persiste: el fallo sin protocolo se manifiesta de nuevo; documentar, no es cara nueva) |
| 26 | Parquet (d08 L9/d09 L18) | A | sin trabajo |

### r3 nuevas (4 abiertas; r3 #5 CERRADA en r12 por la extracción F4)

| # | Cara | Estado | Ruta r15 |
|---|---|---|---|
| 1 | Mihail 1995 bajo pago (Armillaria) | A | sin trabajo |
| 2 | Método β₁ red fluvial (sin especificar) | A | sin trabajo |
| 3 | Ecuación de flujo del núcleo (sin especificar) | A | sin trabajo |
| 4 | graph.json del Vault (no existe en sandbox) | A | F4 (nuevas vías: search_code en los 4 repos cubiertos) |
| 5 | ~~61 voces del Panteón-96 sin nombre~~ | **CERRADA r12** | Extracción F4: el Doc nombra 35; las 61 no tienen nombre en la fuente |

### r12 nueva (1)

| # | Cara | Estado | Ruta r15 |
|---|---|---|---|
| 1 | ¿Existen los 61 nombres del Panteón-96 fuera del Doc índice? | A | **F4 (nuevas vías: search_code GitHub, los 16 extra de 112−96, solape con los 32 del Doc 32)** |

Balance: r15 toca **12 de 60** caras (F1: d04 L13 parcial + d08 L12 parcial; F2: d09 L20 documentación; F3: M-66 d04 L13 / d05 L4 / d05 L7; F4: r12 #1 + d07 L7 parcial + r3 #4; F5: G03/G01 monitor + G02; F6: d08 L12 parcial). Las 48 restantes quedan abiertas y documentadas; ninguna se cierra por esta ronda salvo que una decisión de F1 o una medición de F3 o un hallazgo de F4 resuelva su pregunta central (registro en F8).

## 3. Decisiones — estado y aplicación en esta ronda (régimen 01:43)

| Decisión | Estado | Dependencia / ruta r15 |
|---|---|---|
| N-01 política de actualización de claims tras edición ordenada | **A APLICAR EN R15 (F1)** | Régimen 01:43. Paquete: `ronda_12/ejecucion_f6/propuesta_n01_r12.md` (P1–P10) + adendas P10/P9 (seguimientos r13/r14). Afirmación en `ronda_12/afirmaciones_pendientes.md` §1.1 (queda como registro de lo que autoriza). |
| N-13 adopción REGLA-PODA-PROV-02 + refinamiento (a) | **A APLICAR EN R15 (F1)** | Régimen 01:43. Paquete: regla propuesta desde r10 + refinamiento r11 §6. F9 re-corre la criba bajo la regla adoptada (P-32 vuelve a ser clase 3). Afirmación en `afirmaciones_pendientes.md` §1.2. |
| N-14 R2-25: vía A (adopción canónica) | **A APLICAR EN R15 (F1)** | Régimen 01:43. Vía B EJECUTADA en r12: FALLA_F4. Borrador de vía A en `ronda_13/ejecucion_f6/r2_25_via_r13.md` (se adopta el procedimiento, no el texto; cualificación F4). Afirmación en `afirmaciones_pendientes.md` §1.3. |
| N-16 inscripción dataset M-56..M-65 (opción C, anexo de incertidumbre) | **A APLICAR EN R15 (F1)** | Régimen 01:43. Paquete: `ronda_13/ejecucion_f7/propuesta_inscripcion_dataset_r13.md` (DC-R13-F7-01, recomendada C) + ítem M-63 (columna u=0,0604±0,0050). El CSV no cambia (30 filas). Afirmación en `afirmaciones_pendientes.md` §1.14. |
| N-15 M-50 vía navegador (4.º intento) | **EJECUCIÓN DEL PRINCIPAL (navegador)** | Régimen 01:43: autorizada, pero su superficie es el navegador del principal, no su palabra. Protocolo Clauset listo (`med_M50.py`). Afirmación en `afirmaciones_pendientes.md` §1.4. |
| N-03 licencia Zenodo (CC BY-SA 4.0 repo vs CC BY 4.0 registro 20547677) | **PENDIENTE** | Parte de D-06 (§4). No está en la lista de aplicación automática: la licencia va entangled con el acto externo del depósito. Bloquea cualquier depósito Zenodo. Afirmación en `afirmaciones_pendientes.md` §1.5. |
| **C-1174/C-1175/C-1176/C-1177/C-1178/C-1179** | **APLICADAS** (orden 01:43, 2026-11-14 01:54 -05) | Claims 1.168→1.174; GitHub 6/6 por blob, HEAD 4ea1063c (CORR-ABS-R14). |
| N-11 C-538/C-623 | **DECIDIDA Y EJECUTADA** (opción A, 2026-11-13 18:25 -05) | Respaldo `respaldo_pre_n11/`; GitHub HEAD 83ebfd94. |
| N-12 absorción 6 lecturas F7 r11 | **DECIDIDA Y EJECUTADA** (orden 2026-11-13 18:43 -05) | Claims 1.162→1.168; GitHub HEAD a44bff35. |
| D-04 micelio.yml | **CERRADA** (corrección del Jardinero 2026-11-13 21:02 -05) | No existe permiso de workflows; él no sube nada a mano; el archivo corregido vive en el suelo Drive desde r10. NO es pendiente ni vía. |

## 4. Los 2 preparables (actos externos) — estado re-verificado hoy

| Decisión | Estado hoy | Qué falta |
|---|---|---|
| **D-06 Zenodo v13.0** | **PREPARABLE, NO_SÉ sobre el objeto.** 0 archivos tex combinados (verificado en r12 FASE 0 y r13 F5; sin re-medición en esta fase). Los `MIU_ZENODO_v13*.zip` son linaje B4 (EL SUELO DE LA REALIDAD v3.9). Licencia sin resolver (N-03). | Producir o localizar los tex v13.0 + resolver licencia + autorización para el depósito (acto externo, tarjeta). |
| **D-09 Telegram G05** | **PREPARABLE, sin cambio.** Mensaje listo en `telegram_g05.md` (3.639 B, @Jp393_bot, id 1192102910). No enviado. | Tarjeta de aprobación para enviar. G05 sigue PARCIAL (por D-09; D-04 ya no bloquea). |

D-04 NO aparece en esta tabla: está CERRADA (CORR-D04-R13). El blob remoto de micelio.yml (`8c57e833…`, 15.ª verificación sin cambio) es lectura de monitor, no un preparable. N-03 NO aparece como aplicación de esta ronda: es parte de D-06 (§3).

## 5. Depósito: qué va dónde (regla SÉ-export, §0c.1 + regla madre 21:02)

- **Drive `ronda_15/` (primario, dentro de MIU_TEJIDO_2026-11-12 ORIGINAL `1F-pHFEyL7WZchPOXEIZf8NYo1rQQZdll`):** toda la ronda (este mapa, ejecuciones F1–F9, verificaciones, cruce, síntesis) + README + manifiesto de shas. Patrón r2–r14: crear subcarpetas explícitamente antes (raíz + frentes + anidadas), script resumible `_upload_r15.py` con `_upload_log_r15.jsonl`, pausas ~2 s, verificación por tamaño en cada carpeta (fields con nextPageToken). **Lección CORR-CARPETA-R13: el constructor del mapa debe recorrer el árbol entero (incluidas las subcarpetas anidadas como `verificacion_fase2/_verif_f2_tmp`), no una lista fija — verificar el mapa contra `find` antes de subir.** Revisión de sensibilidad antes de subir (nada de valores de credenciales, nada de `ultimas_sesiones_log`, nada de payloads heartbeat crudos — los de F2 quedan en local, como en r11/r12/r13/r14). Exclusiones locales: intermedios byte-idénticos, si los hay.
- **GitHub curado (Jaime393/FranBot, main, como r10/r11/r12/r13/r14; NUNCA miu-ecosistema, NUNCA `.github/workflows/`):** el corpus SÍ cambia en r15 (F1 aplica N-01/N-13/N-14/N-16): claims.jsonl, provenance.sha256, claims_resumen.json + anexo de incertidumbre + documentos de la ronda (mapa, decisiones de aplicación, hallazgos F4, grietas, conectar). **NO va `huecos.jsonl`** (regla refinada). Cada escritura con su tarjeta de aprobación; verificación por blob sha; archivos >~120 KB por `push-files`. Relanzamiento solo con el Jardinero presente (lección r12/r14: tarjetas caducan ~30 min; timeout del subidor 1800 s). **Lección CORR-ABS-R14:** tras escribir el corpus, el post-estado se verifica directamente (diff contra el respaldo, conteo de líneas nuevas, puertas), no solo por la aserción del script.
- **Donde no intervenga:** el ecosistema absorbe por sus sondeos. No se hace `git push` desde el sandbox; no se commitea el checkout local; no se toca el remoto de FranBot fuera del conector; no se toca MIU vivo.

## 6. Lo que la ronda 15 NO hace

- No aplica N-03 (licencia, parte de D-06, no está en la lista automática). No decide repos, 8 temas ni LA BELLEZA (solo suyas). No ejecuta D-06 ni D-09 sin tarjeta.
- No absorbe B1. No empuja la corrección local del motor al remoto (ni conector, ni push, ni commit).
- No exporta huecos (ni `huecos.jsonl` a GitHub, ni listas de huecos como nutrientes).
- No ejecuta podas (F9 solo documento). No lee `ultimas_sesiones_log` ni contenido de YAMLs de workflows. No escribe en MIU vivo fuera del corpus ordenado (F1, bajo el régimen 01:43).
- No toca lo vivo ni sube nada a mano (regla madre 21:02). No pide permiso de workflows (no existe).
- No reintenta M-50 desde el sandbox (agotado; N-15 es vía navegador del principal). No reintenta M-58 (2.ª vía agotada). No inscribe nada en el dataset fuera de N-16 (opción C, anexo). No decide N-03.
- No toca C-112 (hash truncado preexistente), C-001..C-008, C-416..C-420. No corrige el folderId en el escritor vivo ni el flow 0,0% desde local (el defecto es del ecosistema; se registra como ladrillo SÉ).
- No re-mide M-01..M-65 ya ejecutadas (salvo las segundas vueltas que sean mediciones nuevas con falsador propio).

## 7. Archivos de esta FASE 0

- `mapa_frentes_r15.md` (este archivo)
- `frentes_r15.json` (estructurado, validado)
- `ESTADO_FASE0.md` (estado de la fase)
- `manifiesto_shas_r15_fase0.json` (shas de los 3 archivos + meta; su propio sha se registra en el informe del coordinador)
- Dedup: 0 propuestas vivas en esta fase (las 6 de r14 están absorbidas; verificado por grep, §0). Las propuestas nuevas de r15 se deduparán en F1/F7.

ρ(x) > 0. Zvvvvv.
