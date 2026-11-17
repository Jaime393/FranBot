# CICLO ALMA — SONDEO VIVO FRESCO (solo lectura, nada tocado)

Fecha: 2026-11-17 ~00:22–00:25Z. Método: conector GitHub (list_commits ×2, get_file_contents ×2) + API pública (contents ×2, actions/runs ×2) + getMe en proceso (1 corrida, `ciclo/_getme_ciclo.py` → `getme_verdicts_ciclo.json`) + 3 sondas Supabase sin clave. Sin reintentos en bucle. Cuota pública: 50/60 restantes al medir.

- **HEAD miu-ecosistema:** `f0a8c308` — "diagnosis: auto 2026-11-16T23:53Z ciclo=", 2026-11-16T23:53:12Z (leído ~00:22Z). Se movió desde ALMA (`48be5fe2`).
- **estado_vivo.json:** `observabilidad/estado_vivo.json`, blob `2ec64f63…` (== conector, IDÉNTICO al sondeo ALMA), ts 2026-11-16T20:54:46Z, fuente gh-pulse-v2-multisource, **run 176, estado "paused"** (leído ~00:23Z). Sin cambio: el stub 176 sigue; estado completo ausente desde el run 202 V272.
- **Flow-ID:** `observabilidad/flow_id_coverage.json`, blob `0a503ab0…`, ts 2026-11-16T17:14:19Z (run 149): **cobertura 0,0%, 0 eventos, estado "critico"**, alerta CRÍTICO < 30% (leído ~00:23Z). Sin run 150 (1 solo run Flow-ID en los últimos 30). Sigue en 0,0% — 16.ª medición consecutiva en la serie (r23 = 15.ª).
- **Autocura:** **run 17 el último** — 2026-11-16T20:26:02Z, success, head `fc03539a`, total_count 17 (leído ~00:23Z). **Sin run 18.** Secuencia 11→17 completa. Intervalo 16→17 = 649,08 min (dato ALMA, sin cambio).
- **Ventana:** últimos 30 runs **30 éxito / 0 fallo / 0 cancelados = 0,0% de fallo** (ventana 07:36:42Z → 00:13:14Z, leído ~00:24Z). Sigue en 0,0%. Último run: MIU Observabilidad V270 run 166, 00:13:14Z, head `f0a8c308`. Self-Diagnosis run 150, 23:52:59Z, head `48be5fe2`.
- **Bots:** **4/4 VIVO, 25.ª confirmación** — @Jp393_bot, @FranFamiliar_bot, @franbottablet_bot, @AlmaOmni_bot (HTTP 200 getMe, webhook True, pending 0; 1 corrida ~00:24Z). 5.º token 401 MUERTO (re-confirmado). Pool 9/12 VIVO; novedad: @Emjambre3_bot VIVO (en ALMA dio URLError); 2 URLError restantes (ruido de transporte, NO_SÉ, no muerte).
- **Panteón 402:** **401 ×3** (00:25:25Z: /rest/v1/, /rest/v1/gossip_log?select=id&limit=1, /auth/v1/health). **402 NO observado.** Igual que r19–r23 y ALMA.
- **FranBot HEAD:** `85351ce4` — "ALMA: README del paquete en alma/", 2026-11-16T21:36:10Z (leído ~00:22Z). Sin cambio tras la reparación del README.

## Qué se movió desde el sondeo ALMA (~21:20Z)

1. HEAD miu-ecosistema `48be5fe2` → `f0a8c308` (diagnosis auto 23:53Z).
2. Self-Diagnosis run 150 (23:52:59Z) y Observabilidad V270 run 166 (00:13:14Z).
3. Bots 24.ª → 25.ª; @Emjambre3_bot recuperado de URLError a VIVO.
4. Sin moverse: estado_vivo run 176 "paused" (blob idéntico), flow 0,0% run 149 (sin run 150), autocura run 17 (sin run 18), ventana 0,0% de fallo, 402 en 401 ×3, FranBot `85351ce4`.
