# F3 — Mediciones Ronda 23 (M-90, M-91, M-92)

**Fecha:** 2026-11-16. **Frente:** F3, ronda 23, FASE 1.
**Falsadores declarados:** `declaracion_falsadores_r23.md`,
2026-11-16T19:33:55Z (mtime 19:34:06Z) — ANTES de correr.
**JSONs:** 19:35:50Z. **Reproducción independiente:** 3/3 True
(`verificar_m90_m91_m92.py`, exit 0).

Suelo: corpus 1.207 líneas (sha `2ac47151…`), anexo 25 ítems
(M-56..M-89). Nada de este frente toca el corpus.

## Resumen

| Medición | Pregunta | Veredicto |
|---|---|---|
| M-90 | ¿Se rompe el escalón ~4,5 h de autocura? | **CONFIRMA** — el escalón era transitorio |
| M-91 | ¿Savia V152 en 3 variantes o artefacto? | **CONFIRMA** — 3 variantes, divergencia estructural |
| M-92 | ¿Flow run 149: algún evento o cero absoluto? | **CONFIRMA** — cero absoluto, 15.ª ronda |

## M-90 — Cadencia autocura 11→16: el escalón se rompe (CONFIRMA)

- Secuencia 11→16 completa, sin saltos; todos success, event
  schedule; duraciones 9,0 / 9,0 / 10,0 / 12,0 / 10,0 / 10,0 s.
- Intervalos (min): 447,77 / 465,70 / 280,00 / 255,98 / **455,13**.
- El intervalo 15→16 = 455,13 min (7 h 35 m) cae DENTRO de la
  banda ~7,5 h [447,77, 465,70] y FUERA de la banda del escalón
  [255,98, 280,00] → CONFIRMA por el falsador declarado: el
  escalón ~4,5 h (runs 13→14 y 14→15) era transitorio; la
  cadencia vuelve al racimo ~7,5 h.
- Tres racimos: ~7,5 h (447,77 / 465,70 / 455,13; media 456,20)
  y ~4,5 h (280,00 / 255,98; media 267,99); cociente entre
  medias 1,70. Cociente global máx/mín = 1,819 (idéntico al de
  r22: ni el máx 465,70 ni el mín 255,98 cambiaron).
- Run 16: created 2026-11-16T09:36:57Z (id en el JSON),
  head c9c926d9 (state run 213, 07:36:49Z), lag head→run 120,13
  min (el mayor de la secuencia: 42,05 / 71,92 / 80,07 / 59,35 /
  79,48 / 120,13).
- Efecto: 0 commits propios de autocura en la ventana; tras el
  head del run 16 hay 4 commits (state run 214, monitor flow,
  diagnosis, pulse-v2). Interior NO_SÉ parcial por logs 403.
- Sin run 17 al consultar (total_count 16).

## M-91 — Savia V152 en TRES valores: divergencia estructural (CONFIRMA)

- Ventana r23: 101 payloads. V152: 18 payloads —
  **248.376 ×16, 366.733 ×1, 247.881 ×1**.
- Los tres valores viven en payloads bien formados (mismo
  conjunto de claves `data` que la mayoría de su propio tipo):
  247.881 en completo (89.466 B, idx 52, 16:17:39Z);
  366.733 en compacto (55.980 B, idx 10, 13:25:48Z — el
  divergente de r22 persiste); 248.376 en completos y compactos.
- El 247.881 es nuevo en r23: **0 archivos** de la ventana r22
  lo contienen. La divergencia de r22 (2 variantes) se convierte
  en 3 variantes: estructural, no artefacto de una sola lectura.
- Control: la variante no es función del tipo (248.376 aparece
  en ambos tipos). V151: savia 720 ×28. V270/V271_DARWIN/V93:
  sin savia (55 payloads, censo vacío).
- CORR-M91-ESTRUCTURA-R23: la primera corrida del script
  comparó las claves contra la mayoría GLOBAL de 248.376 y
  marcó NO_CONFIRMA por error — los 248.376 mezclan completos
  (con `ecosistema` + `meshUrl`) y compactos (sin ellos).
  Corregido a comparación por tipo; el falsador declarado no
  cambia. Con la corrección, los tres valores son bien formados
  y el veredicto es CONFIRMA. El error quedó registrado en el
  JSON (`extra.corr_m91_estructura_r23`).

## M-92 — Flow run 149: cero absoluto, 15.ª ronda (CONFIRMA)

- Run 149 existe: id en JSON, 2026-11-16T17:14:14Z, success,
  event schedule. Archivo `flow_id_coverage.json` ts
  17:14:19.773803Z (lag run→escritura 0,1 min): cobertura
  **0,0%**, **0 eventos**, estado critico, eco 0,0%, alerta
  "CRITICO: cobertura flow_id 0.0% < 30%".
- Runs 145→149: 5/5 success, schedule. Intervalos (min):
  311,12 / 242,35 / 412,08 / 613,77 (mín 242,35, máx 613,77,
  mediana 361,72): el monitor escribe cada ~4–10 h (mediana
  ~6 h), no cada 30 min como declara su cron.
- La 15.ª ronda consecutiva en 0,0% queda confirmada.
- Incidencia: la llamada /contents al archivo devolvió 403
  rate limit (cuota 60/h compartida por los frentes T1 en
  paralelo). El contenido se verificó por
  raw.githubusercontent.com: 832 B, sha256 `9e689a07…`,
  byte-idéntico al copiado por FASE 0 vía API contents
  (blob `0a503ab0…`). El blob remoto por API contents no se
  re-verificó en esta medición (límite declarado en el JSON).
- NO_SÉ parcial: la cobertura puntual del run 147 no se leyó
  nunca (su archivo fue sobrescrito antes de que ninguna ronda
  lo leyera); runs 145/146 medidos en 0,0% en r21, 148 en r22,
  149 aquí. El veredicto descansa en el archivo actual + la
  serie de rondas, no en una lectura individual del 147.
- POR QUÉ mide cero sigue siendo NO_SÉ (logs 403, contenido
  del workflow fuera de alcance por regla dura).

## Verificación independiente

`verificar_m90_m91_m92.py` (otro camino de código, desde las
copias locales en `datos/` y los 101 payloads): M-90 intervalos
[447,77, 465,70, 280,00, 255,98, 455,13], cociente 1,819;
M-91 conteo {248376: 16, 366733: 1, 247881: 1}, bien formados
por tipo True, r22 con 247881 = 0; M-92 intervalos [311,12,
242,35, 412,08, 613,77], cobertura 0,0, eventos 0, lag 0,1.
**Reproducción 3/3 True.**

## Archivos

- `declaracion_falsadores_r23.md` — 2026-11-16T19:33:55Z
- `med_M90.json`, `med_M91.json`, `med_M92.json` — 15 claves c/u
- `medir_m90_m91_m92.py` — medición
- `verificar_m90_m91_m92.py` — verificación independiente
- `datos/` — autocura_runs_2026-11-16.json,
  flow_runs_2026-11-16.json, workflows_2026-11-16.json,
  commits_2026-11-16.json, flow_id_coverage_r23.json
- `manifiesto_shas_r23_f3.json`

## Consecuencias para F7/F8

- M-90 CONFIRMA y M-91 CONFIRMA y M-92 CONFIRMA son
  inscribibles en el anexo (ítems M-90, M-91, M-92) y
  preparables como claims (desde C-1213). M-90 toca la cara
  d09 L20 (cadencia autocura) y M-92 también (flow 15.ª
  ronda); M-91 toca la divergencia de savia (cara F2).
- Ninguna cara se cierra desde este frente (decisión de F8).
