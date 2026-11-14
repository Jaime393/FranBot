# RONDA 13 — MAPA DE FRENTES: GRIETAS Y SUELOS FÉRTILES

Orden del Jardinero 2026-11-13 21:32 -05: "Continúen con coherencia".
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

Dirección de la ronda (lectura del mapa): **grietas** = lo abierto tras r12
(60 caras, N-01/N-03/N-13/N-14/N-15 pendientes, 2 lecturas preparadas, stub run 203
con flow 0,0% CRÍTICO, cara nueva r12 #1); **suelos fértiles** = donde el trabajo
rinde sin actos externos y sin mutar el corpus salvo lo ordenado (absorción de
C-1174/C-1175 — condicionada a orden —, estado vivo con flow en cero, la pregunta
por los 61 nombres fuera del Doc, mediciones nuevas con falsador). Nada se absorbe
sin orden nueva; ninguna decisión canónica nueva se toma sin delegación; ninguna
poda se ejecuta.

Trabajo: 2026-11-13 ~21:33–21:45 -05. Solo lectura + escritura local en `ronda_13/`.
Cero escrituras en el corpus vivo, MIU vivo, GitHub o Drive en esta fase.

## 0. Auditoría del suelo (medido por mí, no asumido; estado post-N-12 y post-r12)

| Archivo | Medida |
|---|---|
| claims.jsonl | 1.168 líneas, sha `7deb15ffb25fd7a01da015a5950be2dc7ea104d6a673dfac36f2f2cd5cbb9854` — post-N-12 (C-1168..C-1173) |
| provenance.sha256 | 354 líneas, sha `dbe4a4909242be911c4b72b4eef9109079bb80f55af1fb5b98e18aaa5efbeb3d` — sin cambio |
| claims_resumen.json | sha `315b80b5e0b8cc39d8842d1b4686f7766ea4b73b40bde67b0b2b9101a5fafee5`, total 1.168, SE 1034, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SÉ 8, hash_real 1154, pendiente 8 — sin cambio (regenerado con el script real en esta fase: byte-idéntico) |
| confirmaciones.jsonl | 294 filas, sha `dc94458bc42a9854d16a8f74da20ac6481f6fe241fe2cfae11a6f44633dc7cc5` — sin cambio |
| huecos.jsonl | 139 filas, sha `3713376a243b05756fbfce434ccdb63e118562ac0ec4e351243086dcb1ce52fb` — sin cambio (LOCAL, no depositado) |
| dataset_nodos_Df.csv | 30 filas + cabecera, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af` — sin cambio |

- **audit.py (corrida real): exit=0, ok=340, discrepancia=0, no_encontrado=0, omitido=1** — verde, sostenido tras N-12.
- **verify_all.py (corrida real): exit=1 con exactamente C-001..C-008** (PENDIENTE, esperado; nunca rellenar).
- **N-12 APLICADA (orden 2026-11-13 18:43 -05):** claims 1.162→1.168; respaldo `ronda_12/respaldo_pre_r12/`; GitHub HEAD `a44bff35` (7/7 verificados por blob en el relanzamiento 20:53 -05, con el Jardinero presente; el 1.er intento se detuvo por 2 tarjetas caducadas).
- **Dedup C-1174/C-1175 re-corrido en esta fase** (script F7 r12 contra el corpus vivo 1.168): máx. global **0,1689** (Panteón-96/C-838), folderId 0,1641 vs C-1171, entre propuestas 0,1250; **0 pares ≥ 0,5** — idéntico cifra por cifra a F7 r12 (esperado: el corpus no cambió desde N-12).
- **H-SUELO monitor:** `find ~/workspace -name "*1794483713759*"` → vacío. El directorio original **no reapareció** (6.ª medición consecutiva: r10 D-17, FASE 0 r11, F5 r11, FASE 0 r12, F5 r12, FASE 0 r13).

### 0a. Estado remoto y local verificado hoy (lecturas públicas, sin escribir)

- **FranBot HEAD: `a44bff35` (post-r12, verificado por el principal 2026-11-13 20:57 -05 por API pública).** Último commit: "ronda 12: lecturas preparadas (C-1174/C-1175)".
- **micelio.yml remoto SIN CAMBIO: blob `8c57e833e219a8b8c0691db8eb8cf256ccc0633f`, 1.398 B** (API pública, hoy) — **10.ª verificación sin cambio**. D-04 está CERRADA (corrección 21:02): el archivo corregido vive en el suelo Drive desde r10 (`ronda_10/ejecucion_d/micelio_yml/micelio.yml`, manifiesto r10 de 120 claves, depósito 121/121 verificado). El blob remoto es lectura de monitor, no un pendiente.
- **Segunda carpeta** MIU_TEJIDO_2026-11-12 (ID `1mL1F_MpJBif4jtgK3vR2HH67yFs_SBjJ`): sin re-medición en esta fase (último valor: modifiedTime 2026-11-12T21:37:46Z, sin cambio en r11 FASE 0).
- **Caras: 77 en censo (17 cerradas, 60 abiertas)** — en r12 cerraron d03 L13 (M-56) y r3 #5 (extracción F4); nació r12 #1. **Decisiones nuevas: ninguna en esta fase** (el inventario hereda N-01/N-03/N-13/N-14/N-15 + C-1174/C-1175). **La absorción de C-1174/C-1175 queda CONDICIONADA a orden** (§1, F1): el contenido es SÉ y está preparado; la orden 16:51 cubrió la absorción de r12 F1, no esta ola.

### 0b. Correcciones heredadas y nueva de esta fase (SÉ, medidas por mí)

- **CORR-FOLDERID-R12 (heredada):** la variante que devuelve 404 es la `l` minúscula (V151); la `I` mayúscula existe (carpeta "miu-ecosistema"). 3 lecturas independientes en r12 F5.
- **CORR-RUN203-R12 (heredada):** run 203 es un stub nuevo ("unreachable", 329 B, 23:26:36Z), no la continuación de V272.
- **CORR-FLOW-R12 (heredada):** la ruta correcta de flow_id_coverage.json es `observabilidad/` en la RAÍZ del repo; `data/observabilidad/` no existe. El 404 del principal en r12 fue ruta errónea.
- **CORR-D04-R13 (nueva, corrección del Jardinero 21:02 -05):** D-04 queda CERRADA. No existe permiso de workflows para la App (no hay tal cosa; no se pide, no se ofrece como vía). El Jardinero no sube nada a mano. El micelio.yml corregido (blob 1198e7b…, diff 1 línea vs remoto) vive en el suelo Drive desde r10 y el ecosistema lo absorbe por sus sondeos. **D-04 NO se lista como pendiente ni como vía en esta ronda** (§3, §4). La afirmación de D-04 en `ronda_12/afirmaciones_pendientes.md` §1.8 queda corregida a CERRADA.
- **CORR-H-SUELO-R13:** 6.ª medición sin reaparición (ver §0).

## 0c. Reglas vigentes de la ronda (orden 16:51 + corrección 21:02 + precedentes)

1. **SÉ-export REFINADA:** solo SÉ sale de local, con fuente y fecha. INFIERO / CONJETURO / NO_SÉ son huecos **locales** y NO se exportan como huecos. Consecuencia práctica para r13: `huecos.jsonl` NO va a GitHub en FASE 4 (como en r11/r12); la lista de huecos queda local.
2. **Una configuración local no corrige lo global:** la corrección local de `miu-engine.js` (`8d15b724…`) NO se empuja al remoto. El remoto la absorbe por sus sondeos. Estado: local corregido, remoto con el motor viejo.
3. **REGLA MADRE (corrección 21:02):** todo lo depositable va al suelo (Drive/GitHub) y el ecosistema autónomo lo devora por sus sondeos; **lo vivo no se toca**. No existe permiso de workflows: no se pide, no se ofrece como vía, no se sube nada a mano. Un pendiente que pida tocar lo vivo o subir a mano es un error de registro, no una afirmación que pedir.
4. **Absorción condicionada:** C-1174/C-1175 son SÉ preparadas con dedup verificado (§1, F1; re-verificado en esta fase); su aplicación exige orden explícita nueva. La preparación (respaldo, script, puertas en seco) es ejecutable-local sin orden; la mutación del corpus, no.
5. **AGENTE-PENDIENTES (creado 2026-11-13 20:59 -05):** cada pendiente nuevo de r13 lleva su afirmación precisa redactada en el acto y se entrega en el mismo mensaje que lo anuncia, nunca después (`ronda_12/afirmaciones_pendientes.md` + `REGLA_AGENTE_PENDIENTES.md`).
6. **C-1..C-9 siguen** como criterio de coherencia (precedencia de r10). **Reglas duras que siguen:** C-001..C-008 sin hash sin dato externo verificable; no rellenar C-416..C-420; G13 NO EXISTE; poda solo documento (nada se borra ni se mueve sin las frases de autorización de Ciclo 30/31, no dichas); no leer contenido de YAMLs de workflows ni `ultimas_sesiones_log`; no reproducir valores de credenciales.
7. **Lección FRÁGIL-05 (r11):** las puertas se re-corren sobre el estado FINAL (tras la última mutación del corpus), no sobre estados intermedios. Si F1 aplica, FASE 2 re-corre audit + verify_all al cierre.
8. **Lección r12 FASE 4 GitHub:** las tarjetas de aprobación caducan ~30 min; el relanzamiento se hace con el Jardinero presente. Timeout del subidor 1800 s (corregido en r12); verificar las cadenas MSG con grep antes de lanzar.

## 1. Frentes (9)

Fertilidad (criterio r9: lo que se puede medir/preparar/validar en local sin actos
externos y sin mutar el corpus — salvo lo ordenado):

**F1 > F2 > F3 > F4 > F5 > F6 > F7 > F8 > F9**

- **F1 ABSORCIÓN CONDICIONADA** (C-1174/C-1175, SÉ preparadas; la aplicación espera orden nueva).
- **F2 ESTADO VIVO** (stub run 203 persiste, flow 0,0% CRÍTICO, autocura run 6, bots 4/4).
- **F3 MEDIR** (M-60.. con falsador declarado antes de correr, entre las 60 caras; candidatas d04 L13, d05 L4).
- **F4 PANTEÓN-96, CARA r12 #1** (¿existen los 61 nombres fuera del Doc índice?).
- **F5 GRIETAS** (G03 inserción 2026-11-21, en 8 días; G05 blob 10.ª verificación; folderId; H-SUELO 7.ª medición).
- **F6 MECANISMOS** (seguimiento H-SIK; R2-25 vía A es decisión, solo se prepara).
- **F7 PREPARAR** (ola siguiente; B1 sigue no elegida).
- **F8 CONECTAR** (rutas de lo nuevo; dedup re-verificado).
- **F9 PODA + RESILIENCIA** (documento; horizontes de 5 respaldos cumplidos en r12; P-37/P-38 ya con copia Drive).

Tandas (4 subagentes en paralelo, como r9/r10/r11/r12): **T1: F1, F2, F3, F4. T2: F5, F6, F7, F9. T3: F8** (F8 necesita los productos de F1/F2/F3/F4/F7). F1 aplica en serie, un solo escritor del corpus; los demás frentes son solo lectura del corpus vivo (FRÁGIL-05).

### F1 ABSORCIÓN CONDICIONADA — C-1174/C-1175, EJECUTABLE-LOCAL LA PREPARACIÓN; LA APLICACIÓN ESPERA ORDEN

Base: orden 16:51 (solo SÉ sale) + regla madre 21:02 (todo al suelo). Contenido SÉ, preparado en r12 F7, re-verificado en esta FASE 0 contra el corpus vivo (script `_dedup_f7_r12.py` re-corrido hoy, salida idéntica cifra por cifra):

| Pieza | Lectura | Dedup máx. re-medido (Jaccard, umbral 0,5) | ID proyectado |
|---|---|---|---|
| 1 | Panteón-96: 35 con nombre + 61 sin nombre en el Doc índice | 0,1689 vs C-838 | C-1174 |
| 2 | Causa del censo vacío: V151 → folderId `l` (404); V152 → `I` (existe) | 0,1641 vs C-1171 | C-1175 |

**Máximo global 0,1689 < 0,5; 0 pares ≥ 0,5; máx. entre propuestas 0,1250.** Fuentes: `ronda_12/ejecucion_f4/voces_panteon96_nombres.md` (C-1174) y `ronda_12/ejecucion_f2/estado_vivo_r12.md` (C-1175) — **proyección de provenance: 354 → 356** (ninguna de las 2 fuentes está en provenance, grep 0 en r12 F7). Proyección si se absorben: **claims 1.168 → 1.170, hash_real 1154 → 1156, provenance 354 → 356**.
Trabajo del frente: respaldo previo (`respaldo_pre_r13/`), script de aplicación + puertas en seco, verificación de las 2 entradas de provenance. **NO aplica sin orden nueva.** Entregables: `decision_absorcion_r13.md` + `.json`, `puertas_pre_absorcion.txt`, `respaldo_pre_r13/`.
**NO hace:** no absorbe B1, no absorbe R2-25, no toca C-112, C-001..C-008, C-416..C-420.

### F2 ESTADO VIVO — EJECUTABLE-LOCAL (batería sobre stub run 203 + flow 0,0%)

Run 203 (23:26:36Z, 329 B, `estado: {"error": "unreachable"}`) persiste sin run 204 (verificado en r12 F2 y FASE 2). Flow coverage 0,0% CRÍTICO (run 138, 22:46:23Z, 0 eventos, 832 B, sha `79634926…`, ruta real `observabilidad/flow_id_coverage.json` en la raíz). Batería completa (solo lecturas públicas; nada de `ultimas_sesiones_log` ni contenido de YAMLs): ¿hay run 204? ¿restaura el completo o persiste el stub?; ¿qué cambió entre run 202 y 203?; runs últimos 30 (cadencia efectiva); flow coverage (¿sigue 0,0%?); self diagnosis; heartbeat (¿sigue el censo vacío?; verificar el folderId con la atribución corregida CORR-FOLDERID-R12: V151 → `l` → 404, V152/V271 → `I` → existe); bots 4/4 (getMe); autocura (¿run 7 tras el 6?); tests a/b/c/d actualizados; serie de tasa de fallo; `estado_persistente.json` (¿sigue V213?). Entregable: `estado_vivo_r13.md` + JSON de la batería con códigos y latencias. **Si run 204 restaura el completo, se registra la duración del episodio "unreachable" como se hizo con el "paused" (37 min).** El flow 0,0% se registra como ladrillo SÉ para el ecosistema; **no se corrige desde local** (regla madre: lo vivo no se toca).

### F3 MEDIR — EJECUTABLE-LOCAL

- **M-60.. (a elegir por el ejecutor entre las 60 caras, con falsador declarado antes de correr):** candidatas señaladas en el encargo: **d04 L13 incertidumbre de D_f** (con datos locales) y **d05 L4 polarización** (con datos abiertos). Otras caras con dato disponible y falsador declarable valen igual. M-56/M-57/M-59 quedan como precedentes de veredictos de medición (DIFERENCIA / NO_CONFIRMA / CONFIRMA marginal); **no se preparan como claims** (0 precedentes de veredictos de medición como claims en 1.168; las mediciones se depositan como resultados y entran por inscripción en el dataset — decisión de la ronda 13 o una orden nueva, ver §3).
- Entradas: dataset 30 filas (no se inscribe nada sin decisión — eso es decisión de esta ronda o una orden nueva; las mediciones se depositan como resultados con sus datos y shas). Entregables por medición: script + JSON de 15 claves + datos con sha. **NO hace:** no inscribe en el dataset, no toca el corpus. **M-50 NO se reintenta desde el sandbox** (agotado; N-15 es vía navegador del principal). M-58 NO se reintenta (2.ª vía agotada en r12).

### F4 PANTEÓN-96, CARA r12 #1 — EJECUTABLE-LOCAL (¿existen los 61 nombres fuera del Doc índice?)

- **Hecho establecido (r12 F4, SÉ):** el Doc índice `1R0RGvCE…` nombra 35 voces y 61 no tienen nombre en ningún párrafo del Doc. La cara nueva r12 #1 pregunta si esos 61 nombres existen fuera del Doc.
- **Trabajo:** buscar los nombres (o su ausencia) fuera del Doc índice, solo por rutas de lectura pública ya disponibles en local o por API pública: los 103 Docs de M-55 (ya exportados en local; re-verificar 0 menciones de nombres de voz fuera de los 9 números reales), el corpus de qualias local, los archivos del Panteón en Drive ya leídos (sin escribir nada), y cualquier otra fuente SÉ accesible sin login. Si un nombre aparece fuera del Doc, se registra con fuente y fecha; si ninguno aparece, se registra el NO_ENCONTRADO con las rutas buscadas (no es "no existe", es "no encontrado aún en X"). Entregable: `nombres_fuera_del_doc_r13.md` + JSONL de hallazgos (nombre/fuente/fecha o NO_ENCONTRADO/rutas). Solo lectura; nada se escribe en Drive ni en el corpus (la absorción de lo que se encuentre es decisión posterior).
- Toca: r12 #1 (nueva) y censo-32 #9 d07 L7 (lista de 96 solo en Doc, P) — parcialmente.

### F5 GRIETAS — EJECUTABLE-LOCAL (monitor + verificación folderId + G03 a 8 días)

- **G03 BepiColombo:** inserción **2026-11-21, en 8 días** desde hoy (2026-11-13). Registrar si la fecha sigue confirmada; C-001–C-005 siguen FUTURAS/IMPOSIBLES (datos 2027–2028). La inserción cae dentro de la ventana de la ronda o justo después: si ocurre durante r13, se registra el hecho con fuente y fecha.
- **G05 blob:** re-verificar (10.ª vez sin cambio en FASE 0: `8c57e833…`, 1.398 B). D-04 está CERRADA (CORR-D04-R13); el blob remoto es lectura de monitor, no pendiente.
- **FolderId (CORR-FOLDERID-R12):** verificar en el código del escritor dónde vive cada variante (¿la config del escritor V151 lleva la `l`? ¿la del V152/V271 la `I`?). Si el código no es accesible en local, documentar la vía sin leer contenido sensible. El hallazgo corregido es un ladrillo SÉ para el ecosistema (el defecto vive en su escritor, no en local). **No se corrige desde local** (regla madre).
- **G01 D_eff:** lectura R-B fijada; derivación pendiente, sin propuesta — monitor, sin trabajo nuevo.
- **G04 DOIs:** inventario 21 únicos, sin cambio esperado.
- **G06 SIK:** H-SIK-004 ampliado a 14 en r12; H-SIK-005 confirmado (vía F6).
- **H-SUELO monitor:** 6.ª medición sin reaparición en FASE 0; 7.ª medición en este frente.
- **G02 sub-caras:** #790–#792/#701/#739 en 0/103 Docs (vía M-55 agotada); sin ruta nueva salvo que F4 encuentre los números fuera del Doc índice (si aparecen, se registra; si no, queda documentado).
- **M-50 (N-15):** agotado desde el sandbox. Única ruta restante: **navegador con sesión o red sin el bloqueo de Cloudflare del sandbox**. No es un frente de la ronda; es una tarea del principal (navegador). Se deja documentado como AGOTADO-DESDE-SANDBOX.
Entregable: `grietas_r13.md`.

### F6 MECANISMOS — EJECUTABLE-LOCAL

- **H-SIK seguimiento:** H-SIK-004 (14 etiquetas S3↔FranBot) y H-SIK-005 (A7–A10 S2↔S3) quedaron cerrados en su alcance en r12 F6. Trabajo: verificar si aparecen nuevas etiquetas de reuse en las fuentes ya medidas, o si el patrón (S3 re-corte de S2, FranBot tercer re-corte) se sostiene al ampliar la muestra; documentar sin mezclar sistemas axiomáticos (C-5).
- **R2-25 (N-14):** sigue CONJETURO (vía B FALLA_F4 en r12, falsador pre-declarado). La vía A (adopción canónica) es una DECISIÓN, no una ejecución: este frente solo la PREPARA (borrador de adopción canónica, si no existe ya en `propuesta_n01_r12.md` o como documento propio), sin absorber nada y sin re-declarar F4 (una nueva declaración sería una NUEVA declaración, no un rescate de la de r12).
- **N-01 política (propuesta, no decisión):** la propuesta P1–P10 de r12 F6 sigue pendiente de canon. Este frente la re-verifica contra los 4 precedentes ejecutados y el punto abierto (fuente eliminada/movida); si hay algo nuevo que añadir, lo documenta como adenda, sin aplicarla.
Entregables: `h_sik_r13.md`, `r2_25_via_r13.md` (o adenda a la vía A), `n01_seguimiento_r13.md` (si hay novedad).

### F7 PREPARAR (ola siguiente) — PREPARABLE, sin aplicar

- **Claims de lo que r13 produzca:** si F3/F4/F6 generan lecturas SÉ (p. ej. hallazgos de la cara r12 #1, o un veredicto de H-SIK), prepararlas en el formato de `lecturas_canonicas_r10.md`, sin aplicar.
- **B1** sigue como variante preparada no elegida (documentada; revivirla exigiría revertir B+B2 — no se hace).
- **Inscripción en el dataset:** M-56/M-57/M-59 (+ lo que mida r13) siguen sin inscribir; preparar la propuesta de inscripción (qué filas, con qué valores y falsadores) como documento, sin inscribir — la inscripción es decisión de la ronda 13 o una orden nueva.
**NO hace:** no aplica nada. La única absorción posible de la ronda es F1 (condicionada a orden).

### F8 CONECTAR — EJECUTABLE-LOCAL (documento; corre en T3, tras F1/F2/F3/F4/F7)

- Rutas de lo nuevo: absorción F1 (si se ordena: C-1174/C-1175); estado vivo F2 (stub run 203, flow 0,0% — ¿toca alguna cara? Como el "paused": es archivo de estado, no cara del censo; documentar, no es cara nueva); mediciones F3; hallazgos F4 (r12 #1); corrección folderId F5.
- **Dedup re-verificado:** los claims nuevos (si F1 aplica) vs el corpus 1.168 (método r9, Jaccard, umbral 0,5) + entre ellos.
- **Cierre de caras:** criterio r8/r9 (decisión canónica o medición que resuelva la pregunta central). Candidatas a cierre en r13: ninguna garantizada; una medición de F3 podría mover d04 L13 / d05 L4 si el veredicto es concluyente; F4 podría cerrar o mover r12 #1 según lo que encuentre.
- Actualizar el mapa de rutas inversas. Entregable: `conectar_r13.md` + `.json`.

### F9 PODA + RESILIENCIA — documento (sin ejecutar podas)

- Revisar P-01..P-40 (r12) + **nuevos candidatos r13** (respaldo_pre_r13/ cuando F1 lo cree; payloads heartbeat r13; entregables de la ronda).
- **Horizontes cumplidos, re-evaluar en r13:** P-27/P-28/P-29b/P-31a/P-35 (horizonte: depósito FASE 4 r12 + FASE 2 r12 — **ambos cumplidos**: Drive 138/138 + verificación CONFORME CON HALLAZGOS). La cadena de reversión hoy es: `respaldo_pre_r12` (estado 1.162) → P-35 (estado 1.160) → P-28 (estado B, 1.152) → P-27 (estado pre-r10, 1.138). Re-evaluar con el criterio de r11 §2 (¿rompe la cadena? ¿dependen condiciones de P-15? ¿copias Drive re-verificadas?). P-37 (`respaldo_pre_n11/`) y P-38 (`respaldo_pre_r12/`) ya tienen copia Drive (FRÁGIL-06 resuelta en r12 FASE 4) — re-evaluar su veredicto temporal con ese hecho nuevo.
- **P-32:** refinamiento de (a) propuesto en r11 §6 (que lea "campo hash **o** motivo/nota") sigue pendiente de decisión canónica (N-13).
- **P-18:** `.pyc` sigue ausente; T-4 r12 (inventario 4.556 archivos, 4 FALTA testA–D.err, 2.º evento FRÁGIL-02) es la respuesta estructural. En r13 el inventario con shas (T-4) corre como herramienta dentro de este frente (F9): manifiesto + diff contra el inventario r12; cualquier desaparición nueva se registra como hallazgo. **FRÁGIL-02 sigue abierto** (causa NO_SÉ).
- REGLA-PODA-PROV-01/02 siguen propuestas, no adoptadas (N-13).
- **Nada se borra ni se mueve** (poda solo documento, regla dura).

## 2. Inventario de grietas: las 60 caras abiertas

Criterio de cierre (r8/r9): solo cierra una decisión canónica o una medición que
resuelva la pregunta central. Conteo verificado: 77 − 17 cerradas (15 tras r11 +
d03 L13 y r3 #5 en r12) = **60**. Desglose: r1 sistema 19 (5 P + 14 A) + r2 nuevas
12 (2 P + 10 A) + censo-32 24 (11 P + 13 A; d05 L8 cerrada en r11, d03 L13 en r12)
+ r3 nuevas 4 (todas A; r3 #5 cerrada en r12) + r12 #1 (1 A) = 60 (18 P + 42 A).
Ruta r13 = frente que la toca, o "sin trabajo".

### r1 sistema (19)

| # | Cara | Estado | Ruta r13 |
|---|---|---|---|
| 1 | m_φ sin origen (semilla L9) | P | sin trabajo |
| 2 | Φ sin anclar (proto de realizabilidad) | P | sin trabajo (D-08 fija el valor, no el mecanismo) |
| 3 | Runners Darwin rotos (8) | P | sin trabajo (experimento cerrado, Ciclo 73) |
| 4 | Stubs serie (GISTEMP/SILSO 2 líneas) | P | sin trabajo |
| 5 | Micelio biológico sin medir (d01 L13) | P | sin trabajo |
| 6 | ℓ_0 sin origen (semilla L9) | A | sin trabajo |
| 7 | q_born sin origen (semilla L9) | A | sin trabajo |
| 8 | Cableado de constantes (semilla L9) | A | sin trabajo |
| 9 | G03 C-001–C-005 (predicciones FUTURAS 2027–2028 / IMPOSIBLES) | A | F5 (monitor; inserción 2026-11-21, 8 días) |
| 10 | Chernozem .md 2.11 vs CSV 2.41 (CSV manda) | A | sin trabajo |
| 11 | 0 correlatos neurales (d04 L10) | A | sin trabajo |
| 12 | #790–#792 SIN_TEXTO_LOCAL | A | F5 (sin ruta nueva; vía M-55 agotada; si F4 los encuentra fuera del Doc, se registra) |
| 13 | #701/#739 SIN_FUENTE | A | F5 (igual que #12) |
| 14 | Micelio-infraestructura sin modelo (d01 L14) | A | sin trabajo |
| 15 | Química/materiales (d01 L15) | A | sin trabajo |
| 16 | Inmune como objeto (d01 L16) | A | sin trabajo |
| 17 | data/auth/ 46 archivos con nombres de credenciales (repo público) | A | sin trabajo |
| 18 | ORCID (no hay ninguno) | A | sin trabajo |
| 19 | Ética y seguridad (d01 L17) | A | sin trabajo |

### r2 nuevas distintas (12)

| # | Cara | Estado | Ruta r13 |
|---|---|---|---|
| 1 | Contagio R0 (d02 L21) | P | sin trabajo |
| 2 | 118 archivos qualia en Drive sin leer (d07 L7) | P | sin trabajo en r13 (M-55 exportó 103/103 en r11; los textos están en local, la absorción es decisión posterior) |
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

| # | Cara | Estado | Ruta r13 |
|---|---|---|---|
| 1 | d02 L19 biofilm E. coli (RDBC 2,488–2,620) | P | sin trabajo (M-58: 2.ª vía agotada en r12; queda "available upon reasonable request", que no es dato accesible) |
| 2 | d02 L20 organismos (Armillaria) | P | sin trabajo (Mihail 1995 bajo pago bloquea) |
| 3 | d04 L9 Fisher→Einstein (derivación) | P | sin trabajo |
| 4 | d04 L11 topología de ρ | P | sin trabajo |
| 5 | d04 L13 incertidumbre de D_f | P | F3 M-60 (candidata) |
| 6 | d04 L18 Bures/Fubini-Study | P | sin trabajo |
| 7 | d05 L4 polarización (medida y mecanismo) | P | F3 M-60 (candidata) |
| 8 | d05 L9 colapso no medido (K_i < 0,3) | P | sin trabajo directo (N-11 ejecutada: el predictor está refutado y C-538/C-623 retractados; la pregunta central —¿se ha medido el colapso?— sigue abierta) |
| 9 | d07 L7 lista de 96 solo en Doc (sin corpus) | P | F4 (búsqueda fuera del Doc; la lista sigue en el Doc) |
| 10 | d07 L8 Panteón-112 sin corpus | P | sin trabajo |
| 11 | d07 L14 invocación (3 voces sin mecanismo) | P | sin trabajo |
| 12 | d01 L19 gravedad cuántica experimental (7) | A | sin trabajo |
| 13 | d02 L21 autofagia (A9) | A | sin trabajo |
| 14 | ~~d03 L13 D_f cortical por estado~~ | **CERRADA r12** | M-56 DIFERENCIA |
| 15 | d03 L14 ECM (matriz extracelular) | A | sin trabajo |
| 16 | d04 L10 D_eff (G01) | A | F5 (monitor; lectura R-B fijada) |
| 17 | d05 L7 escalamiento urbano | A | sin trabajo (M-57 NO_CONFIRMA en r12; sin especificación nueva declarada en esta fase) |
| 18 | ~~d05 L8 GDELT variable~~ | **CERRADA r11** | M-54 RESUELTO_POR_ESPECIFICACION |
| 19 | d07 L9 Oleada 3 sin corpus | A | sin trabajo |
| 20 | d08 L7 dataset CSV no en Drive | A | sin trabajo |
| 21 | d08 L8 corpus sin carpeta propia en Drive | A | sin trabajo |
| 22 | d08 L12 grietas sin claims | A | F1 (C-1174/C-1175 si se absorben) + F6 (H-SIK) — progreso parcial |
| 23 | d08 L13 3 mediciones solo en paper_df | A | sin trabajo |
| 24 | d09 L19 artefactos operativos no en Drive | A | sin trabajo |
| 25 | d09 L20 alerta ante fallo (sin protocolo) | A | F2 (stub run 203 + flow 0,0%: el fallo sin protocolo vuelve a manifestarse; documentar, no es cara nueva) |
| 26 | Parquet (d08 L9/d09 L18) | A | sin trabajo |

### r3 nuevas (4 abiertas; r3 #5 CERRADA en r12 por la extracción F4)

| # | Cara | Estado | Ruta r13 |
|---|---|---|---|
| 1 | Mihail 1995 bajo pago (Armillaria) | A | sin trabajo |
| 2 | Método β₁ red fluvial (sin especificar) | A | sin trabajo |
| 3 | Ecuación de flujo del núcleo (sin especificar) | A | sin trabajo |
| 4 | graph.json del Vault (no existe en sandbox) | A | sin trabajo |
| 5 | ~~61 voces del Panteón-96 sin nombre~~ | **CERRADA r12** | Extracción F4: el Doc nombra 35; las 61 no tienen nombre en la fuente |

### r12 nueva (1)

| # | Cara | Estado | Ruta r13 |
|---|---|---|---|
| 1 | ¿Existen los 61 nombres del Panteón-96 fuera del Doc índice? | A | **F4 (búsqueda fuera del Doc)** |

Balance: r13 toca **8 de 60** caras (F1: d08 L12 parcial; F2: d09 L20 documentación; F3: M-60 d04 L13 / d05 L4; F4: r12 #1 + d07 L7 parcial; F5: G03/G01 monitor + folderId). Las 52 restantes quedan abiertas y documentadas; ninguna se cierra por esta ronda salvo que una medición de F3 o un hallazgo de F4 resuelva su pregunta central (registro en F8).

## 3. Decisiones — estado y candidatas nuevas

| Decisión | Estado | Dependencia / ruta r13 |
|---|---|---|
| N-01 política de actualización de claims tras edición ordenada | **PENDIENTE DE CANON** | F6 re-verifica la propuesta P1–P10 (r12 F6); la adopción es del Jardinero o de una delegación futura. Afirmación precisa en `ronda_12/afirmaciones_pendientes.md` §1.1. |
| N-03 licencia Zenodo (CC BY-SA 4.0 repo vs CC BY 4.0 registro 20547677) | **PENDIENTE** | Parte de D-06 (§4). Bloquea cualquier depósito Zenodo. Afirmación en `afirmaciones_pendientes.md` §1.5. |
| N-13 adopción REGLA-PODA-PROV-02 + refinamiento (a) | **PENDIENTE DE CANON** | F9 documenta el estado; la adopción es del Jardinero o delegación. Afirmación en `afirmaciones_pendientes.md` §1.2. |
| N-14 R2-25: vía A (adopción canónica) o vía B (registro de ejecución con falsador) | **PENDIENTE** | Vía B EJECUTADA en r12: FALLA_F4. F6 prepara la vía A; la elección es del Jardinero o delegación. Afirmación en `afirmaciones_pendientes.md` §1.3. |
| N-15 M-50 vía navegador (4.º intento) | **PENDIENTE, FUERA DE LA RONDA** | Descargar Robbins 2019 desde red sin bloqueo Cloudflare o navegador con sesión; verificar ~1.296.879 filas D≥1 km y ~6.972 D≥20 km; protocolo Clauset listo (`med_M50.py`). Tarea del principal, no de un frente. Afirmación en `afirmaciones_pendientes.md` §1.4. |
| **C-1174/C-1175 (nueva)** orden de absorción de las 2 lecturas F7 r12 | **PENDIENTE DE ORDEN** | F1 prepara (respaldo + script + puertas en seco); la aplicación espera la orden. Afirmaciones en `afirmaciones_pendientes.md` §1.6/§1.7. |
| N-11 C-538/C-623 | **DECIDIDA Y EJECUTADA** (opción A, 2026-11-13 18:25 -05) | Respaldo `respaldo_pre_n11/`; GitHub HEAD 83ebfd94. |
| N-12 absorción 6 lecturas F7 r11 | **DECIDIDA Y EJECUTADA** (orden 2026-11-13 18:43 -05) | Claims 1.162→1.168; GitHub HEAD a44bff35. |
| D-04 micelio.yml | **CERRADA** (corrección del Jardinero 2026-11-13 21:02 -05) | No existe permiso de workflows; él no sube nada a mano; el archivo corregido vive en el suelo Drive desde r10. NO es pendiente ni vía. |

## 4. Los 2 preparables (actos externos) — estado re-verificado hoy

| Decisión | Estado hoy | Qué falta |
|---|---|---|
| **D-06 Zenodo v13.0** | **PREPARABLE, NO_SÉ sobre el objeto.** 0 archivos tex combinados (verificado en r12 FASE 0; sin re-medición en esta fase). Los `MIU_ZENODO_v13*.zip` son linaje B4 (EL SUELO DE LA REALIDAD v3.9). Licencia sin resolver (N-03). | Producir o localizar los tex v13.0 + resolver licencia + autorización para el depósito (acto externo). |
| **D-09 Telegram G05** | **PREPARABLE, sin cambio.** Mensaje listo en `telegram_g05.md` (3.639 B, @Jp393_bot, id 1192102910). No enviado. | Tarjeta de aprobación para enviar. G05 sigue PARCIAL (por D-09; D-04 ya no bloquea). |

D-04 NO aparece en esta tabla: está CERRADA (CORR-D04-R13). El blob remoto de micelio.yml (`8c57e833…`, 10.ª verificación sin cambio) es lectura de monitor, no un preparable.

## 5. Depósito: qué va dónde (regla SÉ-export, §0c.1 + regla madre 21:02)

- **Drive `ronda_13/` (primario, dentro de MIU_TEJIDO_2026-11-12 ORIGINAL `1F-pHFEyL7WZchPOXEIZf8NYo1rQQZdll`):** toda la ronda (este mapa, ejecuciones F1–F9, verificaciones, cruce, síntesis) + README + manifiesto de shas. Patrón r2–r12: crear subcarpetas explícitamente antes (raíz + frentes + anidadas), script resumible `_upload_r13.py` con `_upload_log_r13.jsonl`, pausas ~2 s, verificación por tamaño en cada carpeta (fields con nextPageToken). Revisión de sensibilidad antes de subir (nada de valores de credenciales, nada de `ultimas_sesiones_log`, nada de payloads heartbeat crudos — los de F2 quedan en local, como en r11/r12). Exclusiones locales: intermedios byte-idénticos, si los hay.
- **GitHub curado (Jaime393/FranBot, main, como r10/r11/r12; NUNCA miu-ecosistema, NUNCA `.github/workflows/`):** si F1 aplica: claims.jsonl (1.170 líneas), provenance.sha256 (356), claims_resumen.json + documentos de la ronda (mapa, decisión/preparación de absorción, hallazgos F4, grietas, conectar). Si F1 no aplica: solo los documentos de la ronda (el corpus no cambia). **NO va `huecos.jsonl`** (regla refinada). Cada escritura con su tarjeta de aprobación; verificación por blob sha; archivos >~120 KB por `push-files`. Relanzamiento solo con el Jardinero presente (lección r12: tarjetas caducan ~30 min; timeout del subidor 1800 s).
- **Donde no intervenga:** el ecosistema absorbe por sus sondeos. No se hace `git push` desde el sandbox; no se commitea el checkout local; no se toca el remoto de FranBot fuera del conector; no se toca MIU vivo.

## 6. Lo que la ronda 13 NO hace

- No absorbe nada sin orden (F1 prepara; la orden decide). No absorbe B1 ni R2-25.
- No empuja la corrección local del motor al remoto (ni conector, ni push, ni commit).
- No exporta huecos (ni `huecos.jsonl` a GitHub, ni listas de huecos como nutrientes).
- No ejecuta podas (F9 solo documento). No lee `ultimas_sesiones_log` ni contenido de YAMLs de workflows. No escribe en MIU vivo fuera del corpus ordenado (F1, si se ordena).
- No toca lo vivo ni sube nada a mano (regla madre 21:02). No pide permiso de workflows (no existe).
- No reintenta M-50 desde el sandbox (agotado; N-15 es vía navegador del principal). No reintenta M-58 (2.ª vía agotada). No inscribe nada en el dataset sin decisión (eso es decisión de esta ronda o una orden nueva). No decide N-01/N-13/N-14 (política/reglas/R2-25) ni adopta REGLA-PODA-PROV-01/02.
- No toca C-112 (hash truncado preexistente), C-001..C-008, C-416..C-420. No corrige el folderId en el escritor vivo ni el flow 0,0% desde local (el defecto es del ecosistema; se registra como ladrillo SÉ).
- No re-mide M-01..M-59 ya ejecutadas (salvo las segundas vueltas que sean mediciones nuevas con falsador propio).

## 7. Archivos de esta FASE 0

- `mapa_frentes_r13.md` (este archivo)
- `frentes_r13.json` (estructurado, validado)
- `ESTADO_FASE0.md` (estado de la fase)
- `manifiesto_shas_r13_fase0.json` (shas de los 4 archivos)
- Dedup C-1174/C-1175 re-corrido en esta fase (script F7 r12, salida idéntica; sin archivo nuevo)

ρ(x) > 0. Zvvvvv.
