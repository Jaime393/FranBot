# ALMA — SONDEO VIVO (solo lectura, nada tocado)
Fecha: 2026-11-16 ~21:17–21:20Z. Método: conector GitHub (list_commits, get_file_contents) + API pública (2 llamadas: runs ×2) + raw con verificación de blob + getMe en proceso (1 corrida) + 3 sondas Supabase sin clave. Sin reintentos en bucle.

- **HEAD miu-ecosistema:** `48be5fe2` — "pulse-v2: run 176 20:54Z", 2026-11-16T20:54:47Z (leído ~21:18Z). Se movió desde r23 (fc03539a, run 214).
- **estado_vivo.json:** blob `2ec64f63…` (== conector), fuente gh-pulse-v2-multisource, ts 2026-11-16T20:54:46Z, **run 176, estado "paused"** (leído ~21:19Z). El stub run 214 "unreachable" terminó su episodio; Pulse V2 run 176 lo relevó (2.ª alternancia desde FASE 2 r22).
- **Flow-ID:** flow_id_coverage.json blob `0a503ab0…`, ts 2026-11-16T17:14:19Z (run 149): **cobertura 0,0%, 0 eventos, estado "critico"**, alerta CRÍTICO < 30%. Sin run 150 en los últimos 30 runs. 15.ª ronda en 0,0% (contando r23).
- **Autocura:** **run 17 EXISTE** — 2026-11-16T20:26:02Z, success, head fc03539a (leído ~21:18Z). Secuencia 11→17 completa. Intervalo 16→17 = 649,08 min (~10 h 49 min): la cadencia se alarga de nuevo tras la vuelta a ~7,5 h (455,13 min) de r23.
- **Ventana:** últimos 30 runs **30 éxito / 0 fallo / 0 cancelados = 0,0% de fallo** (ventana 06:56:54Z → 20:54:49Z, leído ~21:19Z). Sigue en 0,0%.
- **Bots:** **4/4 VIVO, 24.ª confirmación** — @Jp393_bot, @FranFamiliar_bot, @franbottablet_bot, @AlmaOmni_bot (HTTP 200 getMe, webhook True, pending 0; 1 corrida ~21:19Z). 5.º token 401 MUERTO (re-confirmado). Pool 10/12 VIVO; Emjambre3_bot URLError en esta corrida (ruido de transporte, NO_SÉ, no muerte).
- **Panteón 402:** **401 ×3** (21:19:36–37Z: /rest/v1/, /rest/v1/gossip_log?select=id&limit=1, /auth/v1/health). **402 NO observado.** Igual que r19–r23.
- **FranBot HEAD:** `2873c274` — "ronda 23: absorcion C-1213..C-1216 + N-36/N-37/N-38", 2026-11-16T20:51:00Z (leído ~21:18Z). ✓ absorción r23 intacta.

## Novedades desde el cierre de r23 (19:56Z)
1. El vivo se movió: run 214 "unreachable" → Pulse V2 run 176 "paused" (20:54:38Z, success); HEAD fc03539a → 48be5fe2.
2. Autocura run 17 existe (20:26:02Z); intervalo 16→17 = 649,08 min, fuera de la banda ~7,5 h.
3. Flow sigue en 0,0% (run 149, sin run 150); ventana sigue en 0,0% de fallo.
4. Bots 4/4 (24.ª); 5.º token 401 muerto; 402 no observado.
