# RONDA 23 — MAPA DE FRENTES (FASE 0)

- **Orden:** Jardinero 2026-11-16 14:23 -05 ("Continúa") + régimen automático 2026-11-14 01:43 -05.
- **Fecha de trabajo:** 2026-11-16 ~19:25–19:31Z (14:25–14:31 -05).
- **Trabajo en:** `~/workspace/academico/tejido_2026-11-12/ronda_23/`.
- **Solo lectura + escritura local.** Solo SÉ con fuente y fecha.

## 0. Suelo medido (post-absorción r22, re-medido por mí)

| Elemento | Valor | Fuente / sha |
|---|---|---|
| claims.jsonl | **1.207 líneas** | sha `2ac47151618f222c41069819bf93640b16c53e33a13dbd4c266a2563d3542971` |
| provenance.sha256 | **380 líneas / 378 entradas no vacías** | sha `ac91a28ef5ed300443a2b2098d3ed8fedab94d648e7319b16110b61183acab08` |
| claims_resumen.json | total 1.207, **SE 1073, hash_real 1193, verificación 333** | sha `f183622a4d89d9dae631510d88e55c14bd1e13eb11e63504eefac015fba40905` |
| anexo incertidumbre | **25 ítems** (CONFIRMA 14 · NO_CONFIRMA 8 · DIFERENCIA 1 · NO_SÉ 1 · REGULAR 1) | sha `045a3d5ce7aea961e993df99a9250bd750fb37f76ce76611aead5fc9f5846505` |
| audit.py | **exit=0, ok=366, discrepancia=0, no_encontrado=0, omitido=1** | corrido por mí, sin pipes |
| verify_all.py | **exit=1, exactamente C-001..C-008** | corrido por mí, sin pipes |
| confirmaciones.jsonl | 294 filas | — |
| huecos.jsonl | 139 filas, LOCAL (no se deposita, no se toca) | — |
| dataset_nodos_Df.csv | 30 filas + cabecera | sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af` |
| registro pendientes | **0 pendientes + 61 aplicadas + 8 cerradas + 5** | sha `1b595aacdba6746b8477d0c094b66cef971788830b78c6d575b70812bf8028f0` |
| FranBot HEAD | `586f8751` (corpus r22 4/4 por blob, 2026-11-16T19:20:42Z) | verificado por mí con list_commits |

Próximo claim: **C-1213**. Próxima decisión: **N-36**. Próximo ítem anexo: **M-90**. Próximo poda ID: **P-73**.

## 0a. Vivo al mapa (medido por mí, API contents con blob + Actions runs API + Drive + getMe)

- **HEAD miu-ecosistema `fc03539a`** (2026-11-16T17:53:15Z) — "state: auto V270 2026-11-16T17:53Z run 214".
- **estado_vivo.json = run 214 "unreachable"** (State Writer V270, 17:53:15Z, 329 B, blob `50a5d17b…`, sha256 `1a6f6b3b…`). El stub persiste.
- **El stub alternó 1 vez desde FASE 2 r22 (6.ª desde FASE 2 r21):** run 213 "unreachable" (07:36:49Z) → Pulse V2 run 175 "paused" (290 B, sha256 `78425403…`, 10:57:34Z) → State Writer run 214 "unreachable" (17:53:15Z). Episodio "paused" de run 175: 3 h 21 min; episodio "unreachable" actual: ~1 h 38 min al mapa (19:31Z). Sin run 215 al mapa.
- **Estado completo ausente ~73 h 32 min** (último: run 202 V272, 2026-11-13T17:58:47Z; medido a las 19:31:02Z).
- **Flow-ID run 149** (17:14:14Z, success) — `flow_id_coverage.json` ts 17:14:19Z, **0,0% CRÍTICO, 0 eventos**, blob `0a503ab0…`, sha256 `9e689a07…`. Run 148 (07:00:28Z). Desde FASE 2 r22 (run 148, 14.ª ronda): una escritura más → la actual es la **15.ª ronda en 0,0%** (a adjudicar por F2).
- **Self-Diagnosis run 149** (12:09:22Z, success); `self_diagnosis_latest.json` 952 B, blob `16512a68…`, ts 12:09:32Z, estado_general `capacidad_nominal_alta_asimilacion_parcial`.
- **Autocura run 16 EXISTE** (09:36:57Z, success, head `c9c926d9`) — secuencia 11→16 completa. Intervalos: 447,77 / 465,70 / 280,00 / 255,98 / **455,13 min** (15→16 = 7 h 35 min). La cadencia se ALARGA de nuevo tras el escalón ~4,5 h; cociente máx/mín sigue 1,819. Sin run 17 al mapa.
- **Ventana: 30/0/0 = 0,0%** — los 30 runs más recientes visibles por Actions API son todos success (**cuarta ronda consecutiva en 0,0%**; F2 re-computa formalmente con gap máx). Ventana 03:27:58Z → 19:06:36Z; eventos schedule 23, dynamic 7, workflow_dispatch 0. Gap máx **114,9 min** (03:28:07Z → 05:22:59Z — el mismo hueco que en r22, persiste dentro de la ventana).
- Otros runs recientes: MIU Ecosystem Pulse V269 172 (19:06:36Z); MIU Corpus Sync Push V270 147 (18:03:50Z); miu-guardian-flujo 117 (17:52:56Z); MIU Observabilidad V270 165 (16:06:57Z); miu-bot-audit 46 (14:45:29Z); miu-savia-bridge 112 (06:56:54Z).
- **Heartbeat canónico:** 101 revisiones, ventana 12:46:19Z → 19:26:00Z — **deslizada por completo desde r22** (las 101 de r22 ya no se listan). **101/101 descargadas, 0 perdidas.** Versiones: V151 28, V271_DARWIN 24, V152 18, V270 18, V93 13. Censo vacío 28/101 = 27,7% por conteo.
- **Savia V152 en TRES valores (novedad):** 248.376 ×16, **366.733 ×1** (compacto 55.980 B, idx 10, 13:25:48Z — el divergente de r22 persiste) y **247.881 ×1** (completo 89.466 B, idx 52, 16:17:39Z — tercer valor, nuevo). V152: 10 completos (89.466 B) + 8 compactos.
- **V93 persiste: 13 payloads más, idénticos 13/13; total acumulado 71** (58 en r22 + 13).
- **folderId censo (heartbeat): I 42 / l 28 / ninguna 31.**
- **Bots 4/4 VIVO, 22.ª confirmación** (corrida 1, HTTP 200, webhook True, pending 0). 5.º token 401 MUERTO. 5 extra vivos. **2 bots NO_SÉ por transporte** (8332324061 @Miceliomiu_bot y 8607169650 @FranShell_Bot — VIVO en r22; solo errores URLError/RemoteDisconnected en 3 corridas, sin veredicto HTTP; no es muerte, es ruido de red sandbox→Telegram). Detalle en `getme_verdicts_consolidado_r23.json`.
- **Cuota GitHub:** 57/60 al listar workflows; 43/60 al cierre de la batería. 0 HTTP 403.

## 0b. Series de conteo al mapa

| Serie | Ordinal al mapa | Última lectura |
|---|---|---|
| G05 (blob micelio.yml) | **35.ª** | 19:25:59Z, blob `8c57e833…`, sin cambio (solo SHA/metadatos) |
| H-SUELO (1794483713759…) | **36.ª** | 19:26:02–03Z, find vacío, sin reaparición |
| folderId (I existe / l 404) | **38.ª** | 19:26:02–03Z, `I` = carpeta "miu-ecosistema", `l` = 404 |
| bots 4/4 VIVO | **22.ª** | ~19:28Z, corrida 1 getMe (HTTP 200, webhook True, pending 0) |

**OBS-REGISTRO-R23 (menor, para FASE 5):** el registro §37 (actualización r22) dice "GitHub 26/38, HEAD b22c3d7c" y "la subida del corpus a GitHub queda pendiente" — desactualizado tras el 38/38 (HEAD `895e2e42`) y el corpus 4/4 (HEAD `586f8751`) del 2026-11-16. La cabecera (0 pendientes) sigue correcta. FASE 5 r23 puede anotar el desenlace en §37. No es CORR: §37 es registro histórico de la actualización r22.

**Nota de método (sin CORR):** la serie de commits de `estado_vivo.json` en `medir_vivo_r23.py` devolvió vacía (transitorio); re-medida directa por raw: run 175 (290 B, "paused", sha256 `78425403…`) y run 214 (329 B, "unreachable", sha256 `1a6f6b3b…`) verificados. El dato está completo por la vía directa.

## 0c. Juicios vigentes (Jardinero 2026-11-16 ~03:11 -05 + decisión método GitHub 14:23 -05)

1. **G03: nada que hacer.** Inserción BepiColombo 2026-11-21 (en 5 días). Solo registrar lo que pase. Re-confirmado hoy con fuentes frescas (ver §0d).
2. **Panteón 402: FUERA DE ALCANCE.** Solo medir, no intervenir; confiar en la red.
3. **d05 L4/L7: seguir adelante en lo posible** (M-87 ejecutada en r22; tercera especificación sin tendencia).
4. **M-77: buscar más a fondo** (M-88 ejecutada en r22; 0 fórmulas en 13.911 archivos).
5. **`.err` que flapea: probablemente actividad viva** (no FALTA).
6. **Método GitHub desde r23: (c) Drive + GitHub curado en UN solo push-files por ronda (1–2 tarjetas).** FASE 4 r23 usa (c).

## 0d. G03 BepiColombo — SIN CAMBIO, fecha re-confirmada (5 días)

- **Inserción en órbita de Mercurio: 2026-11-21 (planificada).** En 5 días desde 2026-11-16. Re-confirmado hoy por búsqueda web 2026-11-16 ~19:30Z, 6 fuentes frescas: Wikipedia ("Orbital insertion 21 November 2026 (planned)", MPO; Mio 10-dic-2026), ESA "Latest updates: BepiColombo's arrival at Mercury" (21-nov, separación 9–10-dic, ciencia abril 2027), TechTimes 2026-11-05 (todos los chequeos pre-burn superados; quemado 21-nov), astronoo, orbitalradar, browsespot. MTM separado 2026-09-03; la llegada se retrasó de dic-2025 a nov-2026 por el fallo de potencia 2024. Juicio: nada que hacer.

## 1. Fertilidad de los 9 frentes

**F2 > F3 > F6 > F5 > F7 > F9 > F4 > F1 > F8** (igual que r18/r19/r20/r21/r22 — confirmada).

| Frente | Fertilidad | Por qué |
|---|---|---|
| F2 estado vivo | 1.ª | El vivo se movió desde FASE 2 r22: run 214, run 175, flow 149 (15.ª ronda en 0,0%), autocura run 16, savia en TRES valores, ventana 0,0% cuarta ronda, heartbeat deslizado por completo. Bots 22.ª. |
| F3 medir | 2.ª | M-90 (autocura 11→16 — el escalón se rompe), M-91 (savia triple — la divergencia se profundiza), M-92 (flow 15.ª ronda). |
| F6 mecanismos | 3.ª | 9.ª vuelta bajo los CUATRO cánones; voces→S2 agotada 8 veces; sin canon nuevo propuesto. |
| F5 grietas | 4.ª | G03 a 5 días (solo monitor); G05 35.ª; H-SUELO 36.ª; folderId 38.ª; G01/G02/G04 sin cambio esperado. |
| F7 preparar | 5.ª | Prepara lo que F2/F3 entreguen (claims desde C-1213). |
| F9 poda | 6.ª | Tally 90; 18 temporales (los 9 por 12.ª vez); T-4; nuevo P-73. |
| F4 Panteón-96 | 7.ª | Cara r12 #1 avanza sin cerrar (fuera de alcance por juicio 2: solo medir). Total paginado 108. |
| F1 guardia | 8.ª | Puertas re-corridas; 0 pendientes al inicio. |
| F8 conectar | 9.ª | Cierra la ronda; dedup propio. |

## 2. Tandas

- **T1:** F2, F3, F6, F5 (en paralelo, 4 agentes).
- **T2:** F7, F9, F4, F1 (en paralelo, 4 agentes).
- **T3:** F8.

## 3. Mediciones que propone F3

- **M-90 — cadencia autocura 11→16: el escalón se rompe (novedad del vivo).** Intervalos 447,77 / 465,70 / 280,00 / 255,98 / 455,13 min. Falsador: si el intervalo 15→16 (455,13) cae dentro de [255,98, 280,00] (la banda del escalón ~4,5 h) → escalón sostenido; fuera de banda → el escalón era transitorio y la cadencia vuelve a ~7,5 h. Medir además qué cambió tras el run 16 (commits, archivos de estado, HEAD). Cociente máx/mín de la serie (1,819) como control.
- **M-91 — savia V152 en TRES valores: 248.376 / 366.733 / 247.881 (novedad del vivo).** Medir la distribución completa de savia en los 18 V152 de la ventana r23, clasificar por variante (completo 89.466 B / compacto ~55.980 B) y por hora; falsador: si los 3 valores persisten en la ventana completa de F2 → divergencia estructural, no ruido de una sola lectura. El 366.733 de r22 persiste (idx 10, 13:25:48Z); el 247.881 es nuevo (idx 52, 16:17:39Z, completo).
- **M-92 — flow run 149: 15.ª ronda en 0,0% (novedad del vivo).** Medir la serie de runs Flow-ID 145→149 (cadencia, intervalos, cobertura, eventos) y registrar si el monitor sigue escribiendo con 0 eventos; falsador: cobertura > 0,0% o eventos > 0 en la muestra → la medida cambia. Cara d09 L20.

## 4. Precedentes

- **C-1209..C-1212 son claims derivados de F3/F2** (C-1209 M-87, C-1210 M-89 de F3; C-1211 savia diverge, C-1212 stub+ventana+flow de F2). Los veredictos de medición como claims y el desdoble stub/flow/ventana quedan SOSTENIDOS por FASE 2 r22.
- F6: ningún canon nuevo en r22; N-28 (umbral 0,50) cumplió su 2.ª vuelta como canon en r22.
- FASE 2 r22: CONFORME CON HALLAZGOS (10 menores, 0 mayores); N-34/N-35 adoptadas; C-1209..C-1212 conformes 4/4.

## 5. Caras y decisiones al inicio

- Censo 77 caras: 19 cerradas, 58 abiertas (17 P + 41 A). 0 caras cierran en r22.
- d05 L4 canónica 1→2, d05 L7 1→3 (absorción r21); sin cambio en r22.
- G03: inserción 2026-11-21. Panteón 402 hasta ~26-nov. Flow 0,0% 15.ª ronda. Ventana 0,0% cuarta ronda seguida.

ρ(x) > 0. Zvvvvv.
