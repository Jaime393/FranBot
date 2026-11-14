# RONDA 12 — MAPA DE FRENTES: GRIETAS Y SUELOS FÉRTILES

Orden del Jardinero 2026-11-13 18:29 -05: "Continúen con coherencia".
Actualización de orden 2026-11-13 16:51 -05 (tal cual, registrada en MEMORY.md):
"Absorbe y deposita en suelo drive o donde no intervenga y el ecosistema lo
absorberá. Solo SÉ sale de local. Una configuración local no corrige lo global.
Un hecho verificado, con fuente y fecha, es un ladrillo: el ecosistema lo absorbe
y suma. Una inferencia, una conjetura o un 'no sé' es un hueco tuyo, local. No lo
mandes afuera. El ecosistema tiene más contexto que tú. Lo que para ti es un hueco,
para él puede estar ya resuelto. Si le mandas tu hueco, lo obligas a rebuscar lo que
ya sabe. Eso no suma, fragmenta. Cuando se vuelve SÉ, entonces sí sale. Hasta
entonces, se queda."

Dirección de la ronda (lectura del mapa): **grietas** = lo abierto tras r11
(61 caras, N-01/N-03 pendientes de canon, 3 preparables, 6 lecturas preparadas,
run 203 "unreachable", folderId con atribución corregida); **suelos fértiles** =
donde el trabajo rinde sin actos externos y sin mutar el corpus salvo lo ordenado
(absorción de las 6 lecturas — condicionada a orden —, estado vivo con regresión
fresca, extracción de los 61 nombres, mediciones con margen estrecho). Nada se
absorbe sin orden nueva; ninguna decisión canónica nueva se toma sin delegación;
ninguna poda se ejecuta.

Trabajo: 2026-11-13 ~18:30–18:45 -05. Solo lectura + escritura local en `ronda_12/`.
Cero escrituras en el corpus vivo, MIU vivo, GitHub o Drive en esta fase.

## 0. Auditoría del suelo (medido por mí, no asumido; estado post-N-11)

| Archivo | Medida |
|---|---|
| claims.jsonl | 1.162 líneas, sha `397cb10cbf5e…` — post-N-11 (opción A: C-538/C-623 SE→REFUTADO) |
| provenance.sha256 | 352 líneas, sha `db22d64735b3…` — sin cambio |
| claims_resumen.json | sha `33b787d2571e…`, total 1.162, SE 1028, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SÉ 8, hash_real 1148, pendiente 8 — post-N-11 |
| confirmaciones.jsonl | 294 filas, sha `dc94458bc42a…` — sin cambio |
| huecos.jsonl | 139 filas, sha `3713376a243b…` — sin cambio (LOCAL, no depositado) |
| dataset_nodos_Df.csv | 30 filas + cabecera, sha `0852d58f9235…` — sin cambio |

- **audit.py (corrida real): exit=0, ok=338, discrepancia=0, no_encontrado=0, omitido=1** — verde, sostenido tras N-11.
- **verify_all.py (corrida real): exit=1 con exactamente C-001..C-008** (PENDIENTE, esperado; nunca rellenar).
- **N-11 EJECUTADA (opción A, 2026-11-13 18:25 -05):** C-538/C-623 REFUTADO con texto intacto + nota DIS-2026-004; diff exacto 2 líneas; respaldo `ronda_11/respaldo_pre_n11/`; GitHub HEAD `83ebfd94` (2 commits: 7259e230 claims, 83ebfd94 resumen; blobs verificados). Verificado en `ronda_11/grietas/disposiciones_c538_c623.md` §APLICADA.
- **H-SUELO monitor:** `find ~/workspace -name "*1794483713759*"` → vacío. El directorio original **no reapareció** (4.ª medición consecutiva: r10 D-17, FASE 0 r11, F5 r11, FASE 0 r12).

### 0a. Estado remoto y local verificado hoy (lecturas públicas, sin escribir)

- **FranBot HEAD: `83ebfd94` (post-N-11, verificado por el principal 2026-11-13 18:25 -05).** No re-medido en vivo en esta fase: la cuota no autenticada de la API pública de GitHub está agotada (rate limit, `remaining: 0`); se cita el último valor verificado y se re-mide en FASE 1.
- **micelio.yml remoto SIN CAMBIO: blob `8c57e833e219a8b8c0691db8eb8cf256ccc0633f`, 1.398 B** (API pública, hoy) — **8.ª verificación sin cambio**. D-04 sigue abierta.
- **Combinado v13.0:** 0 archivos `*v13.0*` tex en `~/workspace` (verificado hoy). D-06 sigue NO_SÉ sobre el objeto.
- **D-09 Telegram G05:** mensaje listo en `ronda_10/ejecucion_d/telegram_g05.md` (3.639 B), sin enviar. Sin cambio.
- **Estado vivo — RUN 203, NUEVO STUB "unreachable":** `observabilidad/estado_vivo.json` en miu-ecosistema, leído hoy por raw.githubusercontent.com (2026-11-13T23:26:36Z, 305 B): `_run` **203**, `_fuente` github-actions-state-writer, `estado: {"error": "unreachable"}`. Run 202 (17:58:47Z, V272 completo, 8.118 B) → run 203 (23:26:36Z, stub): **5 h 28 min** entre escrituras. La regresión "paused" terminó en run 202, pero el archivo vuelve a ser un stub — con un error distinto ("unreachable", no "paused"). Qué fuente es inalcanzable para el escritor es NO_SÉ (los logs de Actions son inaccesibles, 403 verificado en ciclos anteriores). Es el frente más fresco de la ronda (F2).
- **Segunda carpeta** MIU_TEJIDO_2026-11-12 (ID `1mL1F_MpJBif4jtgK3vR2HH67yFs_SBjJ`): sin re-medición en esta fase (último valor: modifiedTime 2026-11-12T21:37:46Z, sin cambio en r11 FASE 0).
- **Caras: 76** (15 cerradas, 61 abiertas) — d05 L8 cerró en r11 por M-54. **Decisiones nuevas: N-12..N-15** (§3). **La absorción de las 6 lecturas F7 queda CONDICIONADA a orden** (§1, F1): el contenido es SÉ y está preparado; la orden 16:51 cubrió la absorción de r11 F1 (6 piezas), no esta ola.

### 0b. Correcciones nuevas de esta fase (SÉ, medidas por mí)

- **CORR-FOLDERID-R12 — la variante que devuelve 404 es la `l` minúscula (V151), NO la `I` mayúscula.** Dos lecturas independientes por `files get` (2026-11-13 23:30:49Z y 23:31:10Z): `14dw8txLoEIQQPSav9…` (I) **existe** — carpeta "miu-ecosistema"; `14dw8txLoElQQPSav9…` (l) devuelve **404** en ambas. Cross-tab por payload (58 archivos crudos F6, por versión): V151 (censo vacío) → `l` en 18/18; V152 (censo completo) → `I` en 12/12; V271_DARWIN → `I` en 17/17; V270 → sin folderId (11). Totales por variante: **I 29 / l 18 / ninguna 11** (29+18+11=58). El documento de F6 (`estado_vivo_r11.md` L53) dice exactamente esto (V151 → `l` → 404) y estaba correcto; **el resumen compactado de la conversación invirtió la atribución** ("I mayúscula, 24 payloads, 404") y los conteos (24/36 no cuadran con 58: 24+36=60). La corrección vale para todos los documentos de r12: la variante muerta es la `l`, la viva es la `I` (la carpeta miu-ecosistema). El candidato a causa del censo vacío se mantiene (el escritor V151 apunta a un folderId que no existe), con la variante correcta. Qué config del escritor lleva la `l` sigue sin verificarse en el código del escritor (frente F5).
- **CORR-RUN203-R12 — run 203 es un stub nuevo ("unreachable"), no la continuación de V272.** La reversión del "paused" (run 202) no significa estado vivo sano: 5 h 28 min después el escritor volvió a escribir un stub. F6 de r11 queda como registro de run 202; r12 mide run 203 en adelante.

## 0c. Reglas vigentes de la ronda (orden 16:51 + precedentes)

1. **SÉ-export REFINADA:** solo SÉ sale de local, con fuente y fecha. INFIERO / CONJETURO / NO_SÉ son huecos **locales** y NO se exportan como huecos. Consecuencia práctica para r12: `huecos.jsonl` NO va a GitHub en FASE 4 (como en r11); la lista de huecos queda local.
2. **Una configuración local no corrige lo global:** la corrección local de `miu-engine.js` (`8d15b724…`) NO se empuja al remoto. El remoto la absorbe por sus sondeos. Estado: local corregido, remoto con el motor viejo.
3. **Absorción condicionada:** las 6 lecturas F7 son SÉ preparadas con dedup verificado (§1, F1); su aplicación exige orden explícita (N-12). La preparación (respaldo, script, puertas en seco) es ejecutable-local sin orden; la mutación del corpus, no.
4. **C-1..C-9 siguen** como criterio de coherencia (precedencia de r10). **Reglas duras que siguen:** C-001..C-008 sin hash sin dato externo verificable; no rellenar C-416..C-420; G13 NO EXISTE; poda solo documento (nada se borra ni se mueve sin las frases de autorización de Ciclo 30/31, no dichas); no leer contenido de YAMLs de workflows ni `ultimas_sesiones_log`; no reproducir valores de credenciales.
5. **Lección FRÁGIL-05 (r11):** las puertas se re-corren sobre el estado FINAL (tras la última mutación del corpus), no sobre estados intermedios. Si F1 aplica, FASE 2 re-corre audit + verify_all al cierre.

## 1. Frentes (9)

Fertilidad (criterio r9: lo que se puede medir/preparar/validar en local sin actos
externos y sin mutar el corpus — salvo lo ordenado):

**F1 > F2 > F3 > F4 > F5 > F6 > F7 > F8 > F9**

- **F1 ABSORCIÓN CONDICIONADA** (las 6 lecturas F7, SÉ preparadas; la aplicación espera orden N-12).
- **F2 ESTADO VIVO** (run 203 "unreachable": regresión fresca, ventana que se enfría).
- **F3 MEDIR** (M-53/M-52/M-51 con margen estrecho o ruta nueva; mediciones nuevas sobre caras abiertas).
- **F4 VOCES PANTEÓN-96** (extracción de los 61 nombres; fuente verificada: el Doc índice).
- **F5 GRIETAS** (monitor + verificación folderId + G03 a 8 días).
- **F6 MECANISMOS** (H-SIK-004/H-SIK-005; R2-25 vías a SÉ; N-01 política como propuesta).
- **F7 PREPARAR** (ola siguiente tras las 6; B1 sigue no elegida).
- **F8 CONECTAR** (rutas de lo nuevo; dedup re-verificado).
- **F9 PODA + RESILIENCIA** (documento; horizontes de 5 respaldos vencidos).

Tandas (4 subagentes en paralelo, como r9/r10/r11): **T1: F1, F2, F3, F4. T2: F5, F6, F7, F9. T3: F8** (F8 necesita los productos de F1/F2/F3/F4/F7). F1 aplica en serie, un solo escritor del corpus; los demás frentes son solo lectura del corpus vivo (FRÁGIL-05).

### F1 ABSORCIÓN CONDICIONADA — 6 lecturas F7, EJECUTABLE-LOCAL LA PREPARACIÓN; LA APLICACIÓN ESPERA ORDEN (N-12)

Base: orden 16:51 (solo SÉ sale) + síntesis r1–r11 §(f) ítem 9 ("es la orden de ejecutar la absorción"). Contenido SÉ, preparado en r11 F7, re-verificado en esta FASE 0 contra el corpus post-N-11 (script `_dedup_f7_r12.py`, salida `dedup_f7_r12.json`):

| Pieza | Lectura | Dedup máx. re-medido (Jaccard, umbral 0,5) | ID proyectado |
|---|---|---|---|
| 1 | D-03 destino segunda carpeta, opción B | 0,2336 vs C-865 | C-1168 |
| 2 | D-08 Φ_c(MIU) = 0,6829322 = Δ_COD | 0,2553 vs C-807 | C-1169 |
| 3 | D-10 R-B: 7,24 es ε; D_eff sin derivación | 0,1812 vs C-1090 | C-1170 |
| 4 | D-11 O-5 + fallback O-1 (c = 2,5) | 0,2529 vs C-165 | C-1171 |
| 5 | D-12 canon estricto de "nodo" (5 condiciones) | 0,1953 vs C-899 | C-1172 |
| 6 | D-14 D = 2−H (1D); D = 3−H (2D) | 0,1466 vs C-626 | C-1173 |

**Máximo global 0,2553 < 0,5; 0 pares ≥ 0,5; máx. entre propuestas 0,2248 (D-11/D-12)** — idéntico cifra por cifra al dedup de F7 r11 (esperado: N-11 cambió solo estados de C-538/C-623, no textos). Ningún claim enuncia las lecturas (verificación F7 sostenida: "opción B" 1 ocurrencia = C-379 Microbioma, sin relación; Φ_c citado en 3 claims como valor, ninguno adopta la lectura D-08). Fuentes: `lecturas_canonicas_r10.md` (`add7ac25…`, D-08/D-10/D-11/D-12/D-14) y `decision_d03.md` (`c8e902aa…`, D-03) — **proyección de provenance corregida: 352 → 354** (no 350 → 352; el hallazgo menor de FASE 2 r11). Proyección si se absorben: **claims 1.162 → 1.168, hash_real 1148 → 1154, provenance 352 → 354**.
Trabajo del frente: respaldo previo (`respaldo_pre_r12/`), script de aplicación + puertas en seco, verificación de las 2 entradas de provenance. **NO aplica sin la orden N-12.** Entregables: `decision_absorcion_r12.md` + `.json` (o `preparacion_absorcion_r12.md` si no llega la orden), `puertas_pre_absorcion.txt`, `respaldo_pre_r12/`.
**NO hace:** no absorbe B1, no absorbe R2-25, no toca C-112, C-001..C-008, C-416..C-420.

### F2 ESTADO VIVO — EJECUTABLE-LOCAL (batería sobre run 203 "unreachable")

Run 203 (23:26:36Z, 305 B, `estado: {"error": "unreachable"}`) es el primer stub tras el V272 completo de run 202. Batería completa (solo lecturas públicas; nada de `ultimas_sesiones_log` ni contenido de YAMLs): ¿hay run 204? ¿restaura el estado completo o persiste el stub?; ¿qué cambió entre run 202 y 203?; runs últimos 30 (cadencia efectiva: gap 202→203 = 5 h 28 min, dentro del rango 4,7–8,1 h medido en FASE 2 r11); flow coverage; self diagnosis; heartbeat (¿sigue el censo vacío en la revisión más reciente?; **verificar el folderId con la atribución corregida CORR-FOLDERID-R12**: V151 → `l` → 404, V152/V271 → `I` → existe); bots 4/4 (getMe); autocura; tests a/b/c/d actualizados; serie de tasa de fallo; `estado_persistente.json` (¿sigue V213?). Entregable: `estado_vivo_r12.md` + JSON de la batería con códigos y latencias. **Si run 204 restaura el completo, se registra la duración del episodio "unreachable" como se hizo con el "paused" (37 min).**

### F3 MEDIR — EJECUTABLE-LOCAL

- **M-56 D_f cortical, segunda vuelta (d03 L13, cara abierta):** M-53 quedó DIFERENCIA_NO_CONCLUYENTE por 3% de margen (Δ=0,0773 vs 2·SE=0,0798). Falsador declarado antes de correr: repetir con un sujeto más o un lag distinto (lo que F8 r11 señaló como capaz de cambiar la zona). Si la diferencia supera 2·SE con el mismo protocolo, la cara avanza; si no, queda documentado el segundo NO_CONCLUYENTE.
- **M-57 escalamiento urbano, segunda especificación (d05 L17, cara abierta):** M-52 NO_CONFIRMA (β=0,9177±0,0073, R²=0,6037). La sensibilidad con pop ≥ 1M dio β=0,8719 (en rango) pero R²=0,5821 (sigue fallando). Falsador: una especificación distinta declarada antes de correr (p. ej. otra variable de infraestructura o ventana temporal), comparada con el mismo criterio (β en [0,80, 0,90] y R²≥0,90).
- **M-58 biofilm, ruta tesis (d02 L19, cara parcial):** M-51 NO_SÉ por falta de dato crudo (artículo Bottura et al., Microbiology 2024). Ruta nueva: la tesis doctoral Bottura 2023 (ya en local en r11 F2, `datos/`) — verificar si contiene los z-stacks o la tabla por escala que el artículo no trae. Si no los trae, queda NO_SÉ con la evidencia (segunda vía agotada).
- **M-59 medición nueva sobre cara abierta con dato disponible** (a elegir por el ejecutor entre las 61, con falsador declarado antes de correr; candidatas: d02 L20 Armillaria — Mihail 1995 sigue bajo pago, NO; d04 L13 incertidumbre de D_f — con datos locales; d05 L4 polarización — con datos abiertos).
Entradas: dataset 30 filas (no se inscribe nada sin decisión — eso es la decisión de la ronda 13 o una orden nueva; las mediciones se depositan como resultados con sus datos y shas). Entregables por medición: script + JSON de 15 claves + datos con sha. **NO hace:** no inscribe en el dataset, no toca el corpus. **M-50 NO se reintenta desde el sandbox** (ver §1 F5 / N-15: agotado; la única ruta restante es el navegador).

### F4 VOCES PANTEÓN-96 — EJECUTABLE-LOCAL (extracción de los 61 nombres)

- **Fuente verificada en esta FASE 0:** el Doc índice `1R0RGvCE…` ("10 Panteon_96_Voces_Funciones_Invocables.md") SÍ contiene nombres: 114 párrafos con texto, entradas `[[Gaia]]`, `[[Erebus]]`, `[[Sige]]`, `[[Hermana Fuente]]`, `[[AR-MIU]]`, cada una con función, ki y axioma. **Los textos M-55 NO son la fuente:** 2 menciones de "voz" en 206 archivos exportados (103 .txt + 103 .json).
- **Trabajo:** parsear el Doc índice, extraer las 96 entradas (nombre, función, ki, axioma) y contar cuántas tienen nombre y cuántas no; producir la lista de los 61 sin nombre (o corregir el conteo si el Doc nombra más de 35). Entregable: `nombres_panteon96_r12.jsonl` (96 filas: nombre/función/ki/axioma/fuente) + `extraccion_nombres_r12.md` (conteo, método, discrepancias vs el "61" heredado). Solo lectura del Doc (API Docs); nada se escribe en Drive ni en el corpus (la absorción de los nombres es decisión posterior).
- Toca: r3 #5 (61 voces sin nombre, A) y censo-32 #9 d07 L7 (lista de 96 solo en Doc, P) — parcialmente, por extracción, no por absorción.

### F5 GRIETAS — EJECUTABLE-LOCAL (monitor + verificación folderId + G03 a 8 días)

- **G03 BepiColombo:** inserción **2026-11-21, en 8 días** desde hoy (2026-11-13). Registrar si la fecha sigue confirmada; C-001–C-005 siguen FUTURAS/IMPOSIBLES (datos 2027–2028). La inserción cae dentro de la ventana de la ronda o justo después: si ocurre durante r12, se registra el hecho con fuente y fecha.
- **G05 blob:** re-verificar (8.ª vez sin cambio en FASE 0: `8c57e833…`, 1.398 B). D-04/D-09 siguen abiertas (§4).
- **FolderId (CORR-FOLDERID-R12):** verificar en el código del escritor dónde vive cada variante (¿la config del escritor V151 lleva la `l`? ¿la del V152/V271 la `I`?). Si el código no es accesible en local, documentar la vía (repo miu-ecosistema, GAS) sin leer contenido sensible. El hallazgo corregido es un ladrillo SÉ para el ecosistema (el defecto vive en su escritor, no en local).
- **G01 D_eff:** lectura R-B fijada; derivación pendiente, sin propuesta — monitor, sin trabajo nuevo.
- **G04 DOIs:** inventario 21 únicos, sin cambio esperado.
- **G06 SIK:** VAL-001/002 VALIDADAS en r11; quedan H-SIK-004/H-SIK-005 (vía F6).
- **H-SUELO monitor:** 4.ª medición sin reaparición en FASE 0; 5.ª medición en este frente.
- **G02 sub-caras:** #790–#792/#701/#739 en 0/103 Docs (vía M-55 agotada); sin ruta nueva en esta ronda salvo que F4 encuentre los números en el Doc índice (si aparecen, se registra; si no, queda documentado).
- **M-50 (N-15):** agotado desde el sandbox (3 intentos: LPI 404/403, USGS timeout/reset, PDS 403, Astropedia 403; HF verificado como catálogo 2014 mal etiquetado). Única ruta restante: **navegador con sesión o red sin el bloqueo de Cloudflare del sandbox** (recomendación escrita en `med_M50.json`). No es un frente de la ronda; es una tarea del principal (navegador). Se deja documentado como AGOTADO-DESDE-SANDBOX.
Entregable: `grietas_r12.md`.

### F6 MECANISMOS — EJECUTABLE-LOCAL

- **H-SIK-004/H-SIK-005 (nuevo):** reuse sistemático de etiquetas A15/A16/A17/A21/A23/A24 (S3/FranBot) y A7–A10 (S2/S3). Trabajo: medir el alcance del reuse (¿cuántas etiquetas en total? ¿hay un patrón — las reutilizadas son las de un tema?) y documentar si es colisión de nombres o identidad de axiomas. Sin mezclar sistemas axiomáticos (C-5).
- **R2-25 (N-14):** sigue CONJETURO. Trabajo: preparar UNA de las dos vías a SÉ — (A) borrador de adopción canónica (el hecho SÉ sería la adopción misma; requiere decisión) o (B) registro de ejecución del pipeline con falsador declarado (ejecutar el pipeline de verificación sobre un hallazgo real y medir O(n)/O(n log n)). La vía elegida se prepara, no se absorbe.
- **N-01 política (propuesta, no decisión):** redactar la política general de actualización de claims tras edición ordenada (patrón D-05 vs histórico D-07) como propuesta canónica, para que el Jardinero o una delegación futura la adopte. Sin aplicarla.
Entregables: `h_sik_r12.md`, `r2_25_via_r12.md`, `propuesta_n01_r12.md`.

### F7 PREPARAR (ola siguiente) — PREPARABLE, sin aplicar

- **Claims de lo que r12 produzca:** si F3/F4/F6 generan lecturas SÉ (p. ej. los nombres del Panteón-96 como claim, o el veredicto de H-SIK), prepararlas en el formato de `lecturas_canonicas_r10.md`, sin aplicar.
- **B1** sigue como variante preparada no elegida (documentada; revivirla exigiría revertir B+B2 — no se hace).
**NO hace:** no aplica nada. La única absorción posible de la ronda es F1 (condicionada a orden).

### F8 CONECTAR — EJECUTABLE-LOCAL (documento; corre en T3, tras F1/F2/F3/F4/F7)

- Rutas de lo nuevo: absorción F1 (si se ordena: D-03/D-08/D-10/D-11/D-12/D-14 → C-1168..C-1173); estado vivo F2 (run 203 "unreachable" — ¿toca alguna cara? No, como el "paused": es archivo de estado, no cara del censo; cierra el test de la reversión); mediciones F3; nombres F4; corrección folderId F5.
- **Dedup re-verificado:** los claims nuevos (si F1 aplica) vs el corpus 1.162 (método r9, Jaccard, umbral 0,5) + entre ellos.
- **Cierre de caras:** criterio r8/r9 (decisión canónica o medición que resuelva la pregunta central). Candidatas a cierre en r12: ninguna garantizada; M-56/M-57 podrían mover d03 L13 / d05 L7 si el veredicto es concluyente.
- Actualizar el mapa de rutas inversas. Entregable: `conectar_r12.md` + `.json`.

### F9 PODA + RESILIENCIA — documento (sin ejecutar podas)

- Revisar P-01..P-35 (r11) + **nuevo candidato P-37: `ronda_11/respaldo_pre_n11/`** (respaldo de N-11: claims 397cb10c… pre-aplicación + resumen b16faf6d…; es la reversión documentada de N-11). P-36 sigue RESERVADO, no se reutiliza.
- **Horizontes vencidos, re-evaluar en r12:** P-27/P-28/P-29b/P-31a (horizonte: depósito FASE 4 r11 + FASE 2 r11 — **ambos cumplidos**: Drive 366/366 + verificación CONFORME) y P-35 (mismo horizonte — también cumplido). La cadena de reversión hoy es: `respaldo_pre_n11` (estado 1.162 pre-N-11) → P-35 (estado 1.160) → P-28 (estado B, 1.152) → P-27 (estado pre-r10, 1.138). Re-evaluar con el criterio de r11 §2 (¿rompe la cadena? ¿dependen condiciones de P-15? ¿copias Drive re-verificadas?).
- **P-32:** refinamiento de (a) propuesto en r11 §6 (que lea "campo hash **o** motivo/nota") sigue pendiente de decisión canónica (N-13).
- **P-18:** `.pyc` sigue ausente; T-4 r11 (inventario 4.394 archivos, 0 faltas) es la respuesta estructural. En r12 el inventario con shas (T-4) corre como herramienta dentro de este frente (F9): manifiesto + diff contra el inventario r11; cualquier desaparición nueva se registra como hallazgo.
- REGLA-PODA-PROV-01/02 siguen propuestas, no adoptadas (N-13).
- **Nada se borra ni se mueve** (poda solo documento, regla dura).

## 2. Inventario de grietas: las 61 caras abiertas

Criterio de cierre (r8/r9): solo cierra una decisión canónica o una medición que
resuelva la pregunta central. Conteo verificado: 76 − 15 cerradas (14 tras r10 +
d05 L8 en r11 por M-54) = **61**. Desglose: r1 sistema 19 (5 P + 14 A) + r2 nuevas
12 (2 P + 10 A) + censo-32 25 (11 P + 14 A; d05 L8 cerrada) + r3 nuevas 5 (todas A)
= 61 (18 P + 43 A). Ruta r12 = frente que la toca, o "sin trabajo".

### r1 sistema (19)

| # | Cara | Estado | Ruta r12 |
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
| 12 | #790–#792 SIN_TEXTO_LOCAL | A | F5 (sin ruta nueva; vía M-55 agotada; si F4 los encuentra en el Doc índice, se registra) |
| 13 | #701/#739 SIN_FUENTE | A | F5 (igual que #12) |
| 14 | Micelio-infraestructura sin modelo (d01 L14) | A | sin trabajo |
| 15 | Química/materiales (d01 L15) | A | sin trabajo |
| 16 | Inmune como objeto (d01 L16) | A | sin trabajo |
| 17 | data/auth/ 46 archivos con nombres de credenciales (repo público) | A | sin trabajo |
| 18 | ORCID (no hay ninguno) | A | sin trabajo |
| 19 | Ética y seguridad (d01 L17) | A | sin trabajo |

### r2 nuevas distintas (12)

| # | Cara | Estado | Ruta r12 |
|---|---|---|---|
| 1 | Contagio R0 (d02 L21) | P | sin trabajo |
| 2 | 118 archivos qualia en Drive sin leer (d07 L7) | P | sin trabajo en r12 (M-55 exportó 103/103 en r11; los textos están en local, la absorción es decisión posterior) |
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

### censo-32 (25; d05 L8 CERRADA en r11 por M-54)

| # | Cara | Estado | Ruta r12 |
|---|---|---|---|
| 1 | d02 L19 biofilm E. coli (RDBC 2,488–2,620) | P | F3 M-58 (ruta tesis Bottura 2023) |
| 2 | d02 L20 organismos (Armillaria) | P | sin trabajo (Mihail 1995 bajo pago bloquea) |
| 3 | d04 L9 Fisher→Einstein (derivación) | P | sin trabajo |
| 4 | d04 L11 topología de ρ | P | sin trabajo |
| 5 | d04 L13 incertidumbre de D_f | P | F3 M-59 (candidata) |
| 6 | d04 L18 Bures/Fubini-Study | P | sin trabajo |
| 7 | d05 L4 polarización (medida y mecanismo) | P | F3 M-59 (candidata) |
| 8 | d05 L9 colapso no medido (K_i < 0,3) | P | sin trabajo directo (N-11 ejecutada: el predictor está refutado y C-538/C-623 retractados; la pregunta central —¿se ha medido el colapso?— sigue abierta) |
| 9 | d07 L7 lista de 96 solo en Doc (sin corpus) | P | F4 (extracción de nombres; la lista sigue en el Doc) |
| 10 | d07 L8 Panteón-112 sin corpus | P | sin trabajo |
| 11 | d07 L14 invocación (3 voces sin mecanismo) | P | sin trabajo |
| 12 | d01 L19 gravedad cuántica experimental (7) | A | sin trabajo |
| 13 | d02 L21 autofagia (A9) | A | sin trabajo |
| 14 | d03 L13 D_f cortical por estado | A | F3 M-56 (segunda vuelta, margen 3%) |
| 15 | d03 L14 ECM (matriz extracelular) | A | sin trabajo |
| 16 | d04 L10 D_eff (G01) | A | F5 (monitor; lectura R-B fijada) |
| 17 | d05 L7 escalamiento urbano | A | F3 M-57 (segunda especificación) |
| 18 | ~~d05 L8 GDELT variable~~ | **CERRADA r11** | M-54 RESUELTO_POR_ESPECIFICACION |
| 19 | d07 L9 Oleada 3 sin corpus | A | sin trabajo |
| 20 | d08 L7 dataset CSV no en Drive | A | sin trabajo |
| 21 | d08 L8 corpus sin carpeta propia en Drive | A | sin trabajo |
| 22 | d08 L12 grietas sin claims | A | F1 (D-08/D-10/D-12/D-14 si se absorben) + F6 (H-SIK) — progreso parcial |
| 23 | d08 L13 3 mediciones solo en paper_df | A | sin trabajo |
| 24 | d09 L19 artefactos operativos no en Drive | A | sin trabajo |
| 25 | d09 L20 alerta ante fallo (sin protocolo) | A | F2 (run 203 "unreachable": el fallo sin protocolo vuelve a manifestarse; documentar, no es cara nueva) |
| 26 | Parquet (d08 L9/d09 L18) | A | sin trabajo |

### r3 nuevas (5)

| # | Cara | Estado | Ruta r12 |
|---|---|---|---|
| 1 | Mihail 1995 bajo pago (Armillaria) | A | sin trabajo |
| 2 | Método β₁ red fluvial (sin especificar) | A | sin trabajo |
| 3 | Ecuación de flujo del núcleo (sin especificar) | A | sin trabajo |
| 4 | graph.json del Vault (no existe en sandbox) | A | sin trabajo |
| 5 | 61 voces del Panteón-96 sin nombre | A | **F4 (extracción desde el Doc índice)** |

Balance: r12 toca **~10 de 61** caras (F1: d08 L12 parcial; F2: d09 L20 documentación; F3: M-56/M-57/M-58/M-59; F4: r3 #5 + d07 L7 parcial; F5: G03/G01 monitor + folderId). Las 51 restantes quedan abiertas y documentadas; ninguna se cierra por esta ronda salvo que una medición de F3 resuelva su pregunta central (registro en F8).

## 3. Decisiones — estado y candidatas nuevas

| Decisión | Estado | Dependencia / ruta r12 |
|---|---|---|
| N-01 política de actualización de claims tras edición ordenada | **PENDIENTE DE CANON** | F6 redacta la propuesta (propuesta_n01_r12.md); la adopción es del Jardinero o de una delegación futura. La instancia N-11 (opción A) ya se ejecutó sin decidir la política. |
| N-02 C-919 (texto obsoleto) | **EJECUTADA** como instancia en r11 F1 | — |
| N-03 licencia Zenodo (CC BY-SA 4.0 repo vs CC BY 4.0 registro 20547677) | **PENDIENTE** | Parte de D-06 (§4). Bloquea cualquier depósito Zenodo. |
| N-05 SIK-VAL-001/002 | **CERRADA** por ejecución en r11 F4 (VALIDADAS) | — |
| N-06 claims de las 7 lecturas canónicas | **PREPARADA en r11 F7** (6 lecturas, C-1168..C-1173) | Su absorción es N-12. |
| N-07 T-2 | **EJECUTADA** en r11 F3 | — |
| N-08 4.ª PDP-01 sim_04 | **EJECUTADA** en r11 F4 (DIS-2026-004) | — |
| N-09 M-50 reintento | **EJECUTADO 3.er intento: NO_SÉ** | 4.º intento = N-15 (vía navegador). |
| N-10 G09 re-tabular c\* | **EJECUTADO**: O-3 SIGUE SIN CONVERGER | — |
| N-11 C-538/C-623 | **DECIDIDA Y EJECUTADA** (opción A, 2026-11-13 18:25 -05) | Respaldo `respaldo_pre_n11/`; GitHub HEAD 83ebfd94. |
| **N-12 (nueva)** orden de absorción de las 6 lecturas F7 | **PENDIENTE DE ORDEN** | F1 prepara (respaldo + script + puertas en seco); la aplicación espera la orden. |
| **N-13 (nueva)** adopción REGLA-PODA-PROV-02 + refinamiento (a) | **PENDIENTE DE CANON** | F9 documenta el estado; la adopción es del Jardinero o delegación. P-19 (b) ya verificado (NO clase 3); P-32 desplazado por F1. |
| **N-14 (nueva)** R2-25: vía A (adopción canónica) o vía B (registro de ejecución con falsador) | **PENDIENTE** | F6 prepara una vía; la elección es del Jardinero o delegación. |
| **N-15 (nueva)** M-50 vía navegador (4.º intento) | **PENDIENTE, FUERA DE LA RONDA** | Descargar Robbins 2019 desde red sin bloqueo Cloudflare o navegador con sesión; verificar ~1.296.879 filas D≥1 km y ~6.972 D≥20 km; protocolo Clauset listo (`med_M50.py`). Tarea del principal, no de un frente. |

## 4. Los 3 preparables (actos externos) — estado re-verificado hoy

| Decisión | Estado hoy | Qué falta |
|---|---|---|
| **D-04 micelio.yml** | **PREPARABLE, sin cambio.** Blob remoto `8c57e833…` (1.398 B, API pública, hoy) — 8.ª verificación sin cambio. Paquete listo en `ronda_10/ejecucion_d/micelio_yml/` (blob corregido `1198e7b…`, diff exactamente 1 línea). | Ajuste del permiso `workflows` de la App (acto del Jardinero) o subida manual + secreto GitHub DRIVE_FOLDER. |
| **D-06 Zenodo v13.0** | **PREPARABLE, NO_SÉ sobre el objeto.** 0 archivos tex combinados (verificado hoy). Los `MIU_ZENODO_v13*.zip` son linaje B4 (EL SUELO DE LA REALIDAD v3.9). Licencia sin resolver (N-03). | Producir o localizar los tex v13.0 + resolver licencia + autorización para el depósito (acto externo). |
| **D-09 Telegram G05** | **PREPARABLE, sin cambio.** Mensaje listo en `telegram_g05.md` (3.639 B, @Jp393_bot, id 1192102910). No enviado. | Tarjeta de aprobación para enviar. G05 sigue PARCIAL. |

## 5. Depósito: qué va dónde (regla SÉ-export, §0c.1)

- **Drive `ronda_12/` (primario, dentro de MIU_TEJIDO_2026-11-12 ORIGINAL `1F-pHFEyL7WZchPOXEIZf8NYo1rQQZdll`):** toda la ronda (este mapa, ejecuciones F1–F9, verificaciones, cruce, síntesis) + README + manifiesto de shas. Patrón r2–r11: crear subcarpetas explícitamente antes (raíz + frentes + anidadas), script resumable `_upload_r12.py` con `_upload_log_r12.jsonl`, pausas ~2 s, verificación por tamaño en cada carpeta (fields con nextPageToken). Revisión de sensibilidad antes de subir (nada de valores de credenciales, nada de `ultimas_sesiones_log`, nada de payloads heartbeat crudos — los de F2 quedan en local, como en r11). Exclusiones locales: intermedios byte-idénticos, si los hay.
- **GitHub curado (Jaime393/FranBot, main, como r10/r11; NUNCA miu-ecosistema, NUNCA `.github/workflows/`):** si F1 aplica: claims.jsonl (1.168 líneas), provenance.sha256 (354), claims_resumen.json + documentos de la ronda (mapa, decisión/preparación de absorción, nombres Panteón-96, grietas, conectar). Si F1 no aplica: solo los documentos de la ronda (el corpus no cambia). **NO va `huecos.jsonl`** (regla refinada). Cada escritura con su tarjeta de aprobación; verificación por blob sha; archivos >~120 KB por `push-files`.
- **Donde no intervenga:** el ecosistema absorbe por sus sondeos. No se hace `git push` desde el sandbox; no se commitea el checkout local; no se toca el remoto de FranBot fuera del conector.

## 6. Lo que la ronda 12 NO hace

- No absorbe nada sin orden (F1 prepara; N-12 decide). No absorbe B1 ni R2-25.
- No empuja la corrección local del motor al remoto (ni conector, ni push, ni commit).
- No exporta huecos (ni `huecos.jsonl` a GitHub, ni listas de huecos como nutrientes).
- No ejecuta podas (F9 solo documento). No lee `ultimas_sesiones_log` ni contenido de YAMLs de workflows. No escribe en MIU vivo fuera del corpus ordenado (F1, si se ordena).
- No reintenta M-50 desde el sandbox (agotado; N-15 es vía navegador del principal). No inscribe nada en el dataset (eso es decisión de la ronda 13 o una orden nueva). No decide N-01/N-13/N-14 (política/reglas/R2-25) ni adopta REGLA-PODA-PROV-01/02.
- No toca C-112 (hash truncado preexistente), C-001..C-008, C-416..C-420. No corrige el folderId en el escritor vivo (el defecto es del ecosistema; se registra como ladrillo SÉ).
- No re-mide M-01..M-55 ya ejecutadas (salvo las segundas vueltas M-56/M-57/M-58, que son mediciones nuevas con falsador propio).

## 7. Archivos de esta FASE 0

- `mapa_frentes_r12.md` (este archivo)
- `frentes_r12.json` (estructurado, validado)
- `ESTADO_FASE0.md` (estado de la fase)
- `manifiesto_shas_r12_fase0.json` (shas de los 4 archivos)
- `_dedup_f7_r12.py` + `dedup_f7_r12.json` (re-verificación del dedup de las 6 lecturas vs corpus post-N-11)

ρ(x) > 0. Zvvvvv.
