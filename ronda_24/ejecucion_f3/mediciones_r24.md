# MEDICIONES F3 — RONDA 24 (M-96, M-97, M-98)

**Fecha:** 2026-11-17. **Frente:** F3, FASE 1. **Base:** corpus 1.222
claims (post-CICLO-ALMA), anexo 31 ítems (M-56..M-95).

**Falsadores declarados ANTES de correr** en
`declaracion_falsadores_r24.md` (hora declarada 2026-11-17T02:34:08Z,
mtime del archivo 02:34:25Z tras corregir la hora a su valor real;
primer dato descargado 02:34:39Z; JSONs escritos 02:36:01Z — el
orden declaración → datos → veredictos se sostiene por mtime).
**Verificación independiente:** `verificar_m96_m97_m98.py`, 19/19
checks, 3/3 veredictos reproducidos por otro camino de código
(incluye el kit ALMA `medir_savia.py` sobre los 34 payloads).

**Cuota GitHub:** 52/60 al declarar; reset de hora entre medias
(59/60 tras la primera llamada); la llamada /contents al archivo
flow NO dio 403 en esta ronda (blob verificado por API contents).
**Credenciales:** `grep eyJ` sobre `datos/` = 0. Payloads raw SOLO
en local.

## M-96 — NO_CONFIRMA — el cuarto valor 248.372 NO persiste

- Ventana nueva: 34 revisiones del heartbeat canónico posteriores
  al corte del ciclo ALMA (2026-11-17T00:17:58Z), 00:27:14Z →
  02:28:33Z, 0 errores de descarga. V152: **6 payloads, todos
  248.376 ×6** (3 completos 89.466 B + 3 compactos 55.973 B), bien
  formados por tipo.
- **248.372 ×0, 366.733 ×0, 247.881 ×0.** El cuarto valor, visto
  1/11 en el ciclo ALMA, no reaparece en 6/6 V152 nuevos. Tampoco
  reaparece el 366.733 (1/11 en el ciclo): la ventana nueva es de
  UN SOLO valor. Los tres valores divergentes del ciclo (247.881,
  366.733, 248.372) quedan en 0 en esta ventana — cada uno fue un
  transitorio de una sola ventana, no un régimen.
- savia == mesh.totalSize: **6/6** en esta ventana, **35/35
  acumulado** (r23 18 + ciclo 11 + r24 6). La identidad se sostiene
  sin excepciones.
- Censo vacío: 20/34 payloads sin savia (58,8% por conteo) — el más
  alto de las ventanas medidas (r23: 55/101 = 54,5%; ciclo: 40/71
  = 56,3%). Control, no decisorio.

## M-97 — NO_SÉ — el run 18 no existe todavía

- Autocura total_count = 17 al medir. Último run: **17**
  (2026-11-16T20:26:02Z, success, head fc03539a). **No hay run 18.**
- Tiempo transcurrido desde el run 17 al medir: **370,0 min** —
  dentro del rango de cadencia observada (255,98–649,08 min): la
  ausencia es compatible con la cadencia, no es una rotura.
  NO_SÉ por bloqueo de medición, no por refutación.
- Serie de intervalos 11→17 (sin cambio): 447,77 / 465,70 /
  280,00 / 255,98 / 455,13 / **649,08** min. El intervalo 16→17
  sigue siendo el mayor de la serie; cociente máx/mín 2,536
  (649,08/255,98) — el cociente ya supera 2 por el alargamiento
  16→17, registrado en el ciclo ALMA.

## M-98 — CONFIRMA — flow run 150: 17.ª medición en 0,0%

- Run **150 existe** (2026-11-17T00:55:28Z, success, schedule).
  Archivo `observabilidad/flow_id_coverage.json` ts 00:55:39Z
  (lag run→escritura 0,2 min): **cobertura 0,0%, 0 eventos**,
  estado critico, eco 0,0%, alerta 'CRITICO: cobertura flow_id
  0.0% < 30%'. Blob por API contents: `9ed991e11649` (ruta
  observabilidad/ — el 404 de FASE 0 r24 era en raíz, no en esta
  ruta).
- Runs 146→150: 5/5 success. Intervalos: 242,35 / 412,08 /
  613,77 / **461,23** min (mín 242,35, máx 613,77, mediana 436,66):
  el monitor escribe cada ~4–10 h, no cada 30 min como declara su
  cron — mismo patrón que en r12–r23.
- **17.ª medición consecutiva en 0,0%**: cero absoluto, sin un
  solo evento en la muestra.
- NO_SÉ parcial (heredado de r23): la cobertura puntual del run
  147 nunca se leyó (archivo sobrescrito antes de que ninguna
  ronda lo leyera). El veredicto CONFIRMA descansa en el archivo
  actual (run 150) + una lectura por ronda en la serie, no en una
  lectura individual del 147.

## Archivos

- `declaracion_falsadores_r24.md` — falsadores, hora 02:34:08Z.
- `med_M96.json`, `med_M97.json`, `med_M98.json` — 15 claves c/u.
- `medir_m96_m97_m98.py` — script de medición.
- `verificar_m96_m97_m98.py` — verificación independiente (19/19).
- `datos/` — 34 payloads heartbeat r24 + copias API (autocura,
  flow, commits, flow file). SOLO LOCAL (payloads raw).
- `manifiesto_shas_r24_f3.json` — shas de los entregables.
