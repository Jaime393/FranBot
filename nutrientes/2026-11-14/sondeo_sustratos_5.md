# N-S1 — SONDEO SUSTRATOS NOMBRADOS (5) — 2026-11-14

- **Fecha de medición:** 2026-11-14 ~22:05–22:09Z (17:05–17:09 -05).
- **Alcance:** solo lectura. GET público (malla GAS/Workers/Vercel), Drive API de lectura (revisiones del heartbeat canónico), API pública de GitHub sin auth, PostgREST Supabase con JWT anon emparejado por `ref` (uso transitorio en proceso; archivos temporales borrados tras el uso, verificado; ningún valor en este informe). Nada escrito en lo vivo: ni GitHub miu-ecosistema, ni Drive MIU_ABSORBIDO, ni Supabase.
- **Referencias:** `digest_format_nutriente.md` (Ciclo 32), `CONTEXTO_PERSISTENTE.md` §4, `devouring-2026-11-06.md` (veredicto sustratos), `ronda_18/ejecucion_f2/estado_vivo_r18.md` (foto viva 2026-11-14 20:14–20:17Z).
- **Catálogo vivo re-leído:** Substrate_Catalog (hoja Orchestrator, 2026-11-14 ~22:08Z) sigue listando EXACTAMENTE los 5 sustratos: google_apps_script (active), cloudflare_worker (active), vercel (degraded), deno_deploy (active), supabase (active). Ningún sexto nombre.
- **Cuota GitHub pública al medir:** 53/60 restantes (~22:06Z).

## 1. google_apps_script — SÉ VIVO

- **Malla (sonda_malla.py, 2026-11-14T22:05:38Z):** 4/7 rutas `/exec` VIVO con marca de tiempo en cuerpo — GAS-J 200 (vive:true, phi=2881.542922060099, fresco), GAS-C 200, GAS-ROUTER (V153) 200, GAS-APORTES (v270) 200. GAS-D 404 (igual que en la corrida 2026-11-09). GAS-A 404 y GAS-B 404 (medidos 22:06:53Z, primera medición de A/B en una corrida; los IDs salen del texto del PDF del Orquestador, prefijos AKfycbxav / AKfycbxQF).
- **Heartbeat canónico (Drive doc MIU_HEARTBEAT_ESTADO_CANONICO.json, modificado 2026-11-14T21:58:34Z):** censo de las 30 revisiones desde 20:13:34Z (última de r18) hasta 21:57:38Z — V151 8, V152 6, V271_DARWIN 7, V270 5, V93 3, 1 revisión ya no existe al descargarla (Drive 404 notFound, artefacto de la lista). El escritor GAS (V270, nodo_gas_gas_e1b747e1) firma 5 payloads, último ts 21:43:33Z; V271_DARWIN 7, último ts 21:57:37Z; el payload vigente al leer (21:58:33Z) es V271_DARWIN (phi 4883440, rho 333, tag V94 99103063…).
- **Cambio vs r18 F2:** ninguno estructural. El escritor GAS sigue disparando con cadencia de minutos; D/A/B siguen 404.
- **NO re-sondeado:** URL canónica GAS TOTP v5 (el archivo data/auth no se abre por regla vigente) — sigue NO_SÉ, igual que en devouring-2026-11-06.

## 2. cloudflare_worker — SÉ VIVO

- **Malla (2026-11-14T22:05:38Z):** 8/8 rutas `/health` 200 con marca de tiempo en cuerpo — 7 mesh-v270 (tabletonephantom, franchescopalacios9, jaimepvicente + 4 miu-beacon) y miu-tablero.jaimepvicente. Latencias 594–973 ms. Sin 429, sin 5xx, sin timeouts.
- **Cambio vs 2026-11-09:** ninguno. Los 8 estaban vivos en la corrida de 24 rutas del 2026-11-09 09:18:11Z y siguen vivos.
- **NO re-sondeado:** tokens CF por API (exigen valores; muertos 403/401 el 2026-11-06 según `miu_api_direct` §5, sin medición nueva). D1 `miu-log` sigue fuera de alcance.

## 3. vercel — SÉ VIVO (rótulo `degraded` del catálogo persiste; el comportamiento mide vivo)

- **Malla (2026-11-14T22:05:38Z):** 8/9 proyectos 200 en `/api/health` con marca de tiempo — miu-capacidades, miu-bridge-v1, miu-auto-v1, miu-teclado-v1, miu-peru-v1, miu-autonomo-v92, miu-ai-relay-v215, miu-global-1. oracle-ask-v32 404 en `/api/health` y en raíz (igual que 2026-11-09).
- **CAMBIO vs línea base 2026-11-06:** **miu-global-1 ahora responde 200** en `/api/health` (ok:true, marca de tiempo). En la línea base era "muerto en todas las rutas probadas". Es el único proyecto Vercel que cambia de estado en esta medición.
- **Directo v92 (2026-11-14T22:05:13Z):** `GET /api/health` 200, cuerpo con `ts: 2026-11-14T22:05:13.547Z` (eco fresco, no rancio); raíz 200 con la misma marca. Versión V92.
- **Escritor V93 (Vercel miu-autonomo-v92) — PERSISTE:** 3 payloads nuevos en el censo de revisiones del heartbeat — 20:37:54Z, 21:07:41Z, 21:37:42Z (cadencia ~30 min exacta). 16 claves, valores idénticos a r17 en 3/3 (savia 920, phi 31.847, rho 0.687, n_nodos 9, entropia 583, patrones 32). **Total acumulado: 13 payloads** (10 en r18 + 3 aquí).
- **Catálogo vivo (22:08Z):** vercel sigue rotulado `degraded` — el rótulo no se mueve aunque 8/9 proyectos respondan 200.

## 4. deno_deploy — NO_SÉ (sin endpoint que sondear)

- **Catálogo vivo (22:08Z):** deno_deploy figura `active`, deploy_api `needs_deno_token`. Es un estado declarado en la hoja, no una medición viva; el catálogo no trae URL de despliegue, solo la base `api.deno.com`.
- **Buscado (2026-11-14 ~22:08Z):** GitHub code search `deno` en Jaime393/miu-ecosistema = 0 resultados; en Jaime393/MIU = 1 archivo (`estado/NODOS_4D_V276_codigo.md`) con un fragmento de código `Deno.serve(...)`, sin URL de despliegue; grep local en `user/files/` + repo-clone por `deno.dev` / `deno.com` = 0 archivos.
- **Veredicto:** NO_SÉ — no existe ninguna URL de despliegue Deno que GETear desde el sandbox. Igual que CARENCIAS.md #25. El `active` del catálogo no es evidencia de vida.

## 5. supabase — SÉ MIXTO (coord vivo, colmena 402, dieguito degradado)

Medido 2026-11-14T22:07:53Z por PostgREST (`gossip_log`, conteo + fila más nueva), JWT anon emparejado por `ref` del token (regla `miu_api_direct` §1).

- **coord (`fepyzxwyneervidlybvi`) — VIVO, fresco:** 3.524 filas (HTTP 206, Content-Range 0-0/3524); fila más nueva id 4236, ts 2026-11-14T21:57:40Z, tipo heartbeat — 10 min antes de la medición. Crece desde 2.716 filas (8 nov 2026).
- **colmena (`tpfiybpguuxskitszhmk`) — 402, sin lectura posible:** HTTP 402 `exceed_egress_quota` en conteo y en fila más nueva. Misma violación que r18 F2 (Panteón 402 hasta ~26-nov). No hay conteo nuevo.
- **dieguito (`qtmcbqsahdomgsxgsaxi`) — DEGRADADO (transporte, no auth):** `RemoteDisconnected` (el extremo cierra la conexión sin responder) en 2 intentos, en 2 corridas (22:07:53Z y 22:08:01Z). Un JWT inválido devolvería 401 JSON, no un corte; coord respondió el mismo minuto con el mismo método, así que no es la red del sandbox. Causa NO_SÉ. No es veredicto de muerte: es no-respuesta repetida del endpoint.

## Cambios vs la foto r18 F2 (20:14–20:17Z) — SÉ

- **RUN 207 EXISTE.** Commit `1717f147` 2026-11-14T21:03:57Z ("state: auto V270 2026-11-14T21:03Z run 207"). `estado_vivo.json` blob nuevo `395bc5ad…` (antes `3e063ce6…`, run 206) — sigue stub `{"error": "unreachable"}`. El episodio run 206 duró ~4 h 13 min (16:50:21Z → 21:03:57Z); el episodio run 207 lleva ~1 h 06 min a las 22:09Z. Estado completo ausente desde run 202 (17:58:47Z 13 nov) → **~28 h 10 min** a las 22:09Z.
- **La alternancia paused/unreachable se reanuda:** Pulse V2 run 168, commit `dacae6be` 20:35:58Z.
- **Flow sigue 0,0% CRÍTICO:** commit `a7d0cfbd` 20:51:05Z, `flow_id_coverage.json` blob `ef978259…`, cobertura 0,0%, 0 eventos, estado critico. Mismo valor, marca más nueva.
- **HEAD miu-ecosistema se movió:** `2b90b592` (r18) → `1717f147` (21:03:57Z).
- **Heartbeat:** 30 revisiones nuevas desde 20:13:34Z; V93 +3 (total 13); V270/V271/V151/V152 todos disparando.
- **Bots:** no re-sondeados en esta pasada (16.ª confirmación en r18 F2, 20:16Z).

## Archivos de esta carpeta

- `sondeo_sustratos_5.md` (este informe), `malla_s1_2026-11-14.json` (corrida sonda_malla.py: 23 rutas, 22:05:38Z), `manifiesto_sondeo_s1.json`, `hb_censo_ids.txt` + `hb_censo_01..30.json` (censo de revisiones del heartbeat 20:13:34Z–21:57:38Z), `hb_rev_1..8.json` (muestra previa), `heartbeat_stdout_2026-11-14.json` (payload vigente 21:58:33Z).
- **Nota:** los payloads brutos del heartbeat quedan solo en local (excluidos de cualquier depósito, como en r18 F2). Los payloads V93 contienen un `nodo_origen` (cuenta Gmail): la dirección NO se reproduce en este informe, solo su dominio.
- Temp files con JWT (`/tmp/nut_s1_claves*.json`, `/tmp/nut_s1_sb*.py`) borrados tras el uso; borrado verificado (`ls` = no existe).

ρ(x) > 0. Zvvvvv.
