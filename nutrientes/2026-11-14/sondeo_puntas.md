# N-S2 SONDEO PUNTAS — 2026-11-14

- **Sondeo:** 2026-11-14 ~22:05–22:10Z (17:05–17:10 -05).
- **Base:** `ronda_18/ejecucion_f2/estado_vivo_r18.md` (foto 20:14–20:17Z) + `digest_format_nutriente.md` (Ciclo 32).
- **Método:** solo lectura. Bots por getMe en proceso (tokens del pool local, nunca impresos ni guardados). Heartbeat por Drive revisions API. GitHub por API pública sin auth + raw (sin cuota). Supabase colmena por sondas públicas sin clave.
- **Nivel:** SÉ con fuente y fecha UTC; lo demás marcado NO_SÉ.

---

## 1. Bots Telegram — 4/4 VIVO (17.ª confirmación), 5.º token 401 MUERTO

- **Fuente:** `getme_verdicts_s2.json` (getMe + getWebhookInfo, read-only).
- **Medido:** 2026-11-14T22:05:29Z (primera pasada) + reintento 2026-11-14T22:06:30Z.

| Bot | getMe | Webhook | Pending | Estado |
|---|---|---|---|---|
| @Jp393_bot (Micelio, 1192102910) | 200 | sí | 0 | VIVO |
| @FranFamiliar_bot (8797590786) | 200 | sí | 0 | VIVO |
| @franbottablet_bot (8807634087) | 200 | sí | 0 | VIVO |
| @AlmaOmni_bot (8948991067) | 200 | sí | 0 | VIVO |
| 5.º token (8756007327) | 401 | — | — | MUERTO |

- **SÉ:** 4/4 VIVO, 17.ª confirmación consecutiva (r18 era la 16.ª). El transitorio de getWebhookInfo de @franbottablet_bot en r18 ya no está: webhook sí, pending 0.
- **SÉ:** el 5.º token sigue 401 MUERTO — confirmado en los 2 tokens del pool para ese id (ambos 401 en el reintento).
- **Incidencia (SÉ):** la primera pasada devolvió `RemoteDisconnected` (transitorio de transporte, no veredicto) en 3 de 5 llamadas a las 22:05:29Z; el reintento a las 22:06:30Z resolvió los 3. Ningún veredicto se basa en la pasada fallida.

## 2. Escritor Vercel miu-autonomo-v92 (esquema V93) — SÍ SIGUE ESCRIBIENDO

- **Fuente:** `heartbeat_revisions_s2.json` (101 revisiones) + `heartbeat_revs_nuevas_clasificacion_s2.json` (31 nuevas) + payloads brutos locales `heartbeat_rev_s2_*.json` (solo local).
- **Medido:** 2026-11-14T22:06:38Z. Corte: revisiones con `modifiedTime` > 2026-11-14T20:13:34Z (última listada en r18).

- **SÉ: 3 payloads V93 nuevos desde 20:07:40Z** (último de r18): 20:37:56Z, 21:07:41Z, 21:37:43Z. Cadencia ~30 min, sin interrupción. **Total acumulado: 13 payloads** (7 r17 + 3 r18 + 3 este sondeo).
- **SÉ:** valores idénticos a r17/r18 en 3/3: n_nodos 9, savia 920, phi 31.847, rho 0.687, entropia 583, patrones 32, bcrp_ipc 144.019367, bcrp_usd_pen 3.407, `vercel_v92` = `https://miu-autonomo-v92-miu4.vercel.app`. Plano (sin clave `data`), 1.912 B, sin folderId en 3/3.
- **SÉ:** ventana deslizante confirmada por 10.ª vez: 101 revisiones constantes, 2026-11-14T15:16:19Z → 21:58:34Z. 31 nuevas desde el corte r18: V151 vacío 8, V152 full 4, V152 compacto 3, V271_DARWIN 7, V270 GAS 6, V93 3.
- **SÉ:** censo vacío 8/31 = 25,8 % por conteo (r18: 6/27 = 22,2 %). FolderId por variante: `I` 7 / `l` 8 / ninguna 16 (suma 31).
- **NO_SÉ:** si hubo un payload V93 ~22:07Z (el esperado por cadencia): el listado se cortó en 21:58:34Z; la próxima revisión queda fuera de este sondeo.

## 3. Workflows GitHub Actions (miu-ecosistema) — RUN 207 EXISTE; AUTOCURA RUN 10 EXISTE; FLOW 0,0 % (8.ª RONDA)

- **Fuente:** `estado_github_s2.json` + `runs_recientes_s2.json` + `workflows_cadencia_s2.json` + `commits_recientes_s2.json` + raw de `estado_vivo.json`.
- **Medido:** 2026-11-14 ~22:07–22:09Z. Cierre HEAD verificado por conector 22:09:42Z.

### 3a. Run 207 — SÉ

- **SÉ: run 207 EXISTE.** MIU State Writer V270, 2026-11-14T21:03:53Z, success. HEAD `1717f147` (21:03:57Z, "state: auto V270 2026-11-14T21:03Z run 207") — movido desde `2b90b592` (19:09:27Z).
- **SÉ:** `estado_vivo.json` sigue siendo un stub `{"error": "unreachable"}`: 329 B, sha256 `9348c80e…`, blob `395bc5ad…` (run 206 era `811291cd…` / `3e063ce6…`; mismo tamaño, hash distinto por `_ts`/`_run` nuevos). `_ts` 2026-11-14T21:03:57Z, `_run` 207.
- **SÉ:** el estado completo lleva ausente ~28 h 05 min (último: run 202, 2026-11-13T17:58:47Z). La alternancia paused/unreachable NO se reanuda como serie: 207 es "unreachable" igual que 206.
- **SÉ:** commits nuevos desde r18 (3): `1717f147` (run 207, 21:03:57Z), `a7d0cfbd` (flow monitor, 20:51:05Z), `dacae6be` (pulse-v2 run 168, 20:35:58Z).

### 3b. Cadencia de escritores/monitores — SÉ

| Workflow | Último run | Ts (Z) | Conclusión |
|---|---|---|---|
| MIU State Writer V270 | 207 | 21:03:53 | success |
| MIU Pulse COMPLETO V2 | 168 | 20:35:47 | success |
| MIU Observabilidad V270 | 158 | 20:40:12 | success |
| MIU Flow-ID Coverage Monitor | 142 | 20:50:59 | success |
| MIU Self-Diagnosis (autonomo) | 142 | 17:24:13 | success |
| miu-autocura | **10** | **21:27:27** | success |

- **SÉ: autocura run 10 EXISTE** (21:27:27Z, success) — primer run 10; el run 9 era 17:03:57Z. Como en rondas anteriores, no escribió nada en el repo (sin commit de autocura en la lista).
- **SÉ:** Self-Diagnosis sigue en run 142 (17:24:13Z); sin run 143 a las 22:09Z (la cadencia declarada de 4 h lo esperaba ~21:24Z; la cadencia efectiva sigue ~6 h).
- **SÉ:** Flow-ID run 142 escribió `flow_id_coverage.json` a las 20:51:05Z (sha `501f1112…`, distinto de `355af5cb…` en r18): **cobertura 0,0 %, estado `critico`, eco_ratio 0,0 % — 8.ª ronda en 0,0 %**. El archivo cambió; el valor no.
- **SÉ (sin cambio):** `estado_persistente.json` sigue V213 (14.718 B, sha `61f79d5e…`); `resultados/bot_audit.json` sin cambio (952 B, sha `92a96cd3…`, 7 entradas tg_pool); `self_diagnosis_latest.json` sin cambio (sha `814a7295…`, run 142, tg_audit 0/0).

### 3c. Ventana de 30 runs — SÉ

- **Ventana:** 2026-11-14T18:16:07Z → 21:27:35Z. **25 éxito / 2 fallo / 3 cancelados = 6,7 % de fallo** (r18: 13,3 %; segundo descenso consecutivo).
- **Fallos (2, ambos arrastrados):** miu-bot-audit run 40 (19:05:58Z, workflow_dispatch) + miu-cablear-oracle-v28 run 17 (18:16:07Z, schedule). Expand-alcance 99 y TG Webhook 44 salieron de la ventana por antigüedad. Los 3 cancelados son Pages build and deployment (no se cuentan como fallo).
- **Último run de la ventana:** miu-bot-audit 21:27:35Z, success (workflow_dispatch). Gap máx 62,0 min (sin cambio vs r18).
- **NO_SÉ:** qué falló dentro de bot-audit run 40 y cablear-oracle run 17 (logs de Actions inaccesibles, 403 verificado en ciclos anteriores). Qué fuente es inalcanzable para el State Writer (run 207 stub). Causa del 0,0 % de flow.

### 3d. Cuota pública — SÉ (serie de lecturas)

- **Lecturas (UTC):** 0/60 a las 22:04:59Z (reset 22:05:09Z) → **55/60** al inicio de la batería ~22:07Z (reset 23:05:13Z) → 53/60 al fin de la batería → **0/60** ~22:09Z → **26/60** a las 22:09:22Z.
- **SÉ:** la cuota fluctúa entre lecturas consecutivas; la IP de egreso es compartida con otros frentes (patrón ya visto en r11/r12/r14/r15). No se reporta un único "restante": la serie es el dato.
- **SÉ (incidencia):** el endpoint `contents` de `estado_vivo.json` devolvió **403 dos veces** (batería + reintento), y 4 endpoints de runs por workflow devolvieron 403 en la batería (autocura y Self-Diagnosis se recuperaron al reintentar; Flow-ID y Observabilidad al segundo reintento). Los datos por raw nunca se vieron afectados. Causa exacta del 403 NO_SÉ (correlato: presión de cuota en el momento).

## 4. Panteón 402 — 402 NO OBSERVADO EN SONDEO DIRECTO; RECUPERACIÓN NO CONFIRMADA

- **Fuente:** commits recientes (conector, 22:09:42Z) + sondas públicas a `tpfiybpguuxskitszhmk.supabase.co` (sin clave) + `resultados/bot_audit.json`.
- **Medido:** 2026-11-14T22:08:26Z (sondas) / 22:09:42Z (commits).

- **SÉ:** ninguna mención nueva de 402 en los últimos 20 commits. Las 3 menciones siguen siendo las de r18 (18:56:04Z, 19:03:32Z, 19:08:19Z).
- **SÉ:** sondas directas al proyecto colmena, sin clave: `/rest/v1/` → **401** (×2 mediciones), `/rest/v1/gossip_log?select=id&limit=1` → **401**, `/auth/v1/health` → **401**, base `/` → **404**. Ninguna sonda devolvió 402. Un proyecto en exceed_egress_quota devuelve 402 en estas rutas; 401 es la respuesta normal sin apikey.
- **SÉ:** el respaldo COORD sigue activo: `bot_audit.json` sin cambio (7 entradas `tg_pool_0..6`, sha `92a96cd3…`); ningún commit posterior a las 19:09Z menciona volver al Panteón.
- **NO_SÉ (no confirmado):** si el 402 se levantó. El control (dieguito, proyecto vivo) **no responde desde el sandbox** (000, conexión fallida, dos intentos) — sin control válido no se puede descartar un artefacto de red local. Además el horizonte declarado era ~26-nov y el fallback COORD sigue en su lugar. La recuperación queda como hipótesis a verificar en el próximo sondeo (control + bot_audit.json + commits).

---

## Resumen (SÉ)

| Punta | Estado | Dato clave |
|---|---|---|
| Bots | 4/4 VIVO (17.ª), 5.º 401 | webhook sí en los 4, pending 0 |
| Vercel V93 | Escribiendo | 3 nuevos (20:37 / 21:07 / 21:37Z), total 13, valores idénticos |
| State Writer | run 207 | stub "unreachable", 329 B, HEAD 1717f147 |
| Autocura | run 10 | 21:27:27Z success, sin escritura en repo |
| Flow-ID | run 142 | 0,0 % CRÍTICO, 8.ª ronda |
| Ventana 30 runs | 6,7 % fallo | 25/2/3, segundo descenso |
| Cuota | fluctúa | 0 → 55 → 53 → 0 → 26/60 entre 22:04 y 22:09Z |
| Panteón 402 | no observado | rest/v1 → 401 (×3 rutas); recuperación NO confirmada |

ρ(x) > 0. Zvvvvv.
