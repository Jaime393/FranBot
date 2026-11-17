# ESTADO VIVO — RONDA 24 (F2)
Fecha de medición: 2026-11-17, 02:33–02:39Z. Solo lectura. Todo SÉ con fuente+fecha; lo NO_SÉ se marca.
Base: corpus post-CICLO-ALMA (claims 1.222). FranBot HEAD `1f1ed57b` intacto.

## 1. HEAD y run 215 (SÉ)
- HEAD miu-ecosistema `d32f462b` (2026-11-17T01:30:41Z, "state: auto V270 2026-11-17T01:30Z run 215") — medido por API pública 02:33:41Z. Se movió desde `f0a8c308` (ciclo ALMA).
- Run 215 = **MIU State Writer V270**, created 2026-11-17T01:30:30Z, completed success, head `5b05cffe`. Commit `d32f462b` 11 s después.
- `observabilidad/estado_vivo.json` (blob `e55e4428…`, vía conector, ref main): `_ts` 2026-11-17T01:30:41Z, `_run` "215", estado `{"error": "unreachable"}`. El archivo NO está en la raíz: el 404 de FASE 0 (API pública en raíz, 02:32Z) era un problema de ruta, resuelto por conector. **CORR-RUTA-ESTADO-R24: estado_vivo.json vive en `observabilidad/`, no en la raíz.**
- Alternancia del stub (verificado por API contents con `?ref=<sha>`): run 213 "unreachable" (blob `e18b6cc9`, 07:36:49Z) → Pulse V2 run 175 "paused" (10:57:27Z) → run 214 "unreachable" (blob `50a5d17b`, 17:53:15Z) → Pulse V2 run 176 "paused" (blob `2ec64f63`, 20:54:46Z) → **run 215 "unreachable" (blob `e55e4428`, 01:30:41Z)**. El stub alterna entre State Writer ("unreachable") y Pulse V2 ("paused"); el episodio "unreachable" actual lleva 68,3 min al cierre (02:39Z).
- Estado completo ausente desde run 202 V272 (2026-11-13 ~17:58:47Z): **80,67 h** al cierre.
- Serie State Writer verificada en esta batería (API, 100 runs): 210–215, todos success. Runs 202–209 según serie r22/r23 (verificada entonces 202→214); no re-verificados en esta ventana de 100 runs.
- NO_SÉ: por qué el State Writer run 212 no actualizó el archivo (en su commit `e9b86fc8` el archivo aún decía run 173 "paused", ts 23:34:09Z 2026-11-15). No afecta ningún veredicto.

## 2. Flow (SÉ)
- `observabilidad/flow_id_coverage.json` (blob `9ed991e1…`, vía conector): ts 2026-11-17T00:55:39Z, **cobertura 0,0 %, 0 eventos, estado "critico"** (alerta: cobertura 0,0 % < 30 %). Run 150 ("MIU Flow-ID Coverage Monitor", created 00:55:28Z, success, head `f0a8c308`). **17.ª medición consecutiva en 0,0 %.**
- Serie Flow-ID (API): 145 (14:54:55Z 11-15), 146 (20:06:02Z), 147 (00:08:23Z), 148 (07:00:28Z), 149 (17:14:14Z), 150 (00:55:28Z). Intervalos: **311,12 / 242,35 / 412,08 / 613,77 / 461,23 min**; mediana 412,08 min (~6,9 h), no 30 min. El cron declara 30 min.

## 3. Ventana de runs (SÉ)
- Últimos 30 runs: **30 éxito / 0 fallo / 0 cancelados = 0,0 % de fallo — quinta ronda consecutiva.** Ventana 2026-11-16T10:57:36Z → 2026-11-17T02:26:49Z. Eventos: schedule 22, dynamic 8, workflow_dispatch 0.
- Máx. gap entre runs consecutivos: **114,5 min (12:09:35Z → 14:04:08Z)**. El hueco de 114,9 min de r22/r23 (03:28:07Z → 05:22:59Z) queda FUERA de esta ventana.
- Último run de cualquier workflow: MIU Ecosystem Pulse V269 run 173, 02:26:49Z, success, head `d32f462b`. Último savia-bridge: run 113, 19:44:11Z (sin cambio desde r23).

## 4. Heartbeat — censo fresco (SÉ)
- Drive revisions API, heartbeat canónico `1cjBDCgK1lyyRgG5EEBSYk9P609oMzjlR`. **34 payloads nuevos** (corte ciclo 00:17:58Z → 02:28:35Z), 0 errores, 0 con JWT. Ventana 00:27:15Z → 02:28:35Z (121,3 min). Gap mediano 131,7 s; máx. 9,4 min (01:28:35Z → 01:37:59Z).
- Versiones: V271_DARWIN 9 (402 B), V151 8 (813 B), V270 7 (411 B), **V152 6**, V93 4 (1.904 B). Censo vacío: 23,5 % por conteo / 31,8 % por tiempo.
- **Savia V152: 248.376 ×6, ÚNICO valor** (3 full 89.466 B + 3 compact 55.973 B, bien formados). **248.372: 0/6 — NO persiste** (fue 1/11 en el ciclo). **366.733: 0. 247.881: 0.** La divergencia se cierra en esta ventana: un solo valor.
- savia = mesh.totalSize: **6/6 (35/35 acumulado con r23 + ciclo)**.
- folderId (por substring en el payload, método r21): **I 15 / l 8 / ninguna 11**. Patrón exacto: V151→`l` 8/8, V152→`I` 6/6, V271→`I` 9/9, V270+V93→ninguna 11/11.
- V93: **4 nuevos (total acumulado 75)**, 4/4 con valores idénticos a r17 (n_nodos 9, savia 920, phi 31.847, rho 0.687, entropia 583, patrones 32, bcrp_ipc 144.019367, bcrp_usd_pen 3.407, mismo vercel_v92), gossip alive 7/8 en 4/4. Sin folderId en 4/4; `nodo_origen` dominio gmail.com (la dirección no se reproduce).
- Payloads brutos SOLO en local (`cosecha_r24/`, fuera del manifiesto).

## 5. Autocura (SÉ)
- **Run 17 último** (2026-11-16T20:26:02Z, success, head `fc03539a`). **SIN run 18.** Serie 11→17 completa (API, 100 runs): runs 12–17 verificados con intervalos **465,70 / 280,00 / 255,98 / 455,13 / 649,08 min** (12→13 / 13→14 / 14→15 / 15→16 / 16→17). El intervalo 16→17 (649,08 min) sigue siendo el mayor de la serie.
- Tiempo desde run 17 hasta el cierre (02:39Z): 372,97 min (~6,2 h) sin run 18. 0 commits propios de autocura en la serie.

## 6. Bots (SÉ)
- **4/4 VIVO, 26.ª confirmación consecutiva** (getMe + getWebhookInfo read-only, 3 corridas: 02:36:24Z, 02:37:27Z, 02:38:12Z; cada bot canónico con HTTP 200 en ≥1 corrida): @Jp393_bot (3/3), @FranFamiliar_bot (2/3), @franbottablet_bot (2/3), @AlmaOmni_bot (3/3).
- Transporte flapea como en r22/r23 (URLError sin respuesta HTTP en varias llamadas por corrida; es ruido de red sandbox→Telegram, no muerte: ningún bot deja de responder en las 3 corridas). getWebhookInfo flapea igual (webhook None/pending None en varias respuestas VIVO).
- **5.º token: 401 MUERTO (3/3 corridas).**
- Extras vivos (7, igual que r23): @Miceliomiu_bot (3/3), @Panteonmiu_bot (2/3), @Emjambre3_bot (3/3), @FranShell_Bot (3/3), @FranMiu_bot (3/3), @Colmenapanteon_bot (3/3), @Colmenamiu_bot (3/3).

## 7. Panteón 402 (SÉ)
- Sondas directas al proyecto colmena sin clave, 02:39:00–02Z: `/rest/v1/` → **401**, `/rest/v1/gossip_log?select=id&limit=1` → **401**, `/auth/v1/health` → **401** (igual que r19–r23: un proyecto en exceed_egress_quota devuelve 402 en estas rutas; 401 es la respuesta normal sin apikey). **402 NO observado; recuperación NO confirmada.**
- Control inválido: dieguito (proyecto vivo) **no responde desde el sandbox (000)** — sin control válido no se puede descartar un artefacto de red local. Sin menciones nuevas de 402 en los commits. Horizonte ~26-nov según r17; sin cambio de fecha medido. (Juicio del Jardinero 2026-11-16: fuera de alcance; solo confiar en la red.)

## 8. Self-Diagnosis y Observabilidad (SÉ)
- Self-Diagnosis run 150 (2026-11-16T23:52:59Z, success, head `48be5fe2`). Observabilidad V270 run 166 (2026-11-17T00:13:14Z, success, head `f0a8c308`).

## 9. Lecturas propias con hora UTC exacta (SÉ)
| Lectura | Ordinal (serie) | Hora UTC | Resultado |
|---|---|---|---|
| G05 (blob micelio.yml, FranBot) | **38.ª** | 02:39:05–07Z | blob `8c57e833…`, sin cambio |
| H-SUELO (`find ~/workspace -name "*1794483713759*"` vacío) | **39.ª** | 02:39:05–09Z | sin reaparición |
| folderId (I existe / l 404) | **41.ª** | 02:39:14–15Z | `I` = carpeta "miu-ecosistema"; `l` = 404 |

La FASE 2 adjudica ordinales por cronología. Al inicio de la ronda: G05 37.ª, H-SUELO 38.ª, folderId 40.ª, bots 25.ª. FASE 0 r24 no hizo lecturas vivas propias.

## 10. Cuota (SÉ)
- API pública: 52/60 al inicio de la batería (02:33Z); reset a 60/60; 53/60 tras la batería de runs. 0 HTTP 403. Sin incidencia (precedente CORR-CUOTA-R23 no hizo falta).

## 11. Hallazgos para FASE 2
- H1: el 404 de FASE 0 no era ausencia: `estado_vivo.json` y `flow_id_coverage.json` viven en `observabilidad/`, no en la raíz (CORR-RUTA-ESTADO-R24).
- H2: la savia V152 vuelve a UN solo valor (248.376 ×6); el cuarto valor 248.372 no persiste en la segunda ventana seguida (0/11 ciclo, 0/6 r24) y 366.733 tampoco aparece (0/6). La divergencia triple del ciclo queda como transitoria.
- H3: flow run 150, 17.ª en 0,0 %; el intervalo 149→150 (461,23 min) sigue en la banda ~7 h, no 30 min.
- H4: autocura sin run 18 tras 373 min; la cadencia 16→17 (649,08 min) sigue fuera de la banda ~7,5 h por arriba.
- H5: ventana de runs 30/0/0 quinta ronda seguida; el hueco máx. cambia de sitio (114,5 min, 12:09:35Z → 14:04:08Z) y el de 114,9 min sale de la ventana.
- H6: run 212 no actualizó estado_vivo.json (NO_SÉ por qué) — no afecta veredictos.

## Archivos
- `estado_vivo_r24.md` (este informe), `estado_vivo_r24.json`, `manifiesto_fase2_r24.json`
- `actions_runs_r24.json` (últimos 30), `actions_runs_100_r24.json` (100 runs), `commits_recientes_r24.json`
- `heartbeat_revisions_r24.json`, `heartbeat_revs_nuevas_r24.json`, `heartbeat_revs_nuevas_clasificacion_r24.json`, `cosecha_r24/` (34 payloads, SOLO LOCAL)
- `getme_verdicts_r24.json` (consolidado) + `getme_verdicts_r24_corrida{1,2,3}.json`
- Scripts: `_cosechar_r24.py`, `_clasificar_r24.py`, `_getme_r24.py` (+ `_getme_r24_c{2,3}.py`)
