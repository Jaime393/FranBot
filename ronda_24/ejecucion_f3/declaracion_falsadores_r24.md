# Declaración de falsadores — F3 Ronda 24 (M-96, M-97, M-98)

**Fecha:** 2026-11-17. **Frente:** F3, ronda 24, FASE 1.
**Declarada POR ESCRITO ANTES de correr ninguna medición.**
Hora de declaración: **2026-11-17T02:34:08Z** (reloj del sistema;
los scripts de medición y los JSONs se corren después de esta hora).
Ningún valor de M-96/M-97/M-98 se ha calculado antes de esta
declaración. (Los números citados como precedentes —censo fresco del
ciclo ALMA: 248.376 ×9 / 366.733 ×1 / 248.372 ×1 / 247.881 ×0 en 11
V152; autocura run 17 2026-11-16T20:26:02Z, intervalo 16→17 =
649,08 min; flow run 149 0,0% 16.ª medición— son publicados en el
ciclo ALMA y en FASE 0 r24; los falsadores son reglas sobre ellos,
no re-lecturas de sus veredictos.)

Estado de partida verificado antes de declarar: corpus 1.222 líneas,
sha `6dbee11d…` (nada de este frente toca el corpus); anexo 31 ítems
(M-56..M-95); dataset 30 filas + cabecera, sha `0852d58f…` (intacto).
Corte de la ventana nueva: 2026-11-17T00:17:58Z (último payload del
ciclo ALMA).

## M-96 — ¿Persiste el cuarto valor 248.372?

- **Pregunta:** en el censo fresco del ciclo ALMA (71 payloads,
  11 V152) apareció un cuarto valor de savia, 248.372 ×1 (compacto
  55.973 B, 23:26:43Z), con mecanismo medido (rotación del rodante
  V151, −4 B), mientras 247.881 quedó en 0/11. ¿El cuarto valor
  persiste en la ventana nueva o fue un transitorio de un solo
  payload?
- **Protocolo (declarado antes de correr):** revisiones nuevas del
  heartbeat canónico (Drive ID 1cjBDCgK1lyyRgG5EEBSYk9P609oMzjlR)
  posteriores al corte 2026-11-17T00:17:58Z, descargadas vía Drive
  revisions API (patrón `_cosechar.py` del ciclo ALMA), SOLO en
  local (`ejecucion_f3/datos/heartbeat_rev_r24_*.json`). Por cada
  payload: `version`, `data.savia`, tamaño, ts, conjunto de claves
  de `data`. Tipo completo (>80.000 B) vs compacto (>40.000 B).
  Comparación de claves por TIPO (CORR-M91-ESTRUCTURA-R23: cada
  valor contra la mayoría de su propio tipo, nunca contra la
  mayoría global). Savia vs `mesh.totalSize` por payload V152.
- **Falsador:** CONFIRMA (persiste) si el valor 248.372 aparece en
  ≥1 payload V152 bien formado (mismo conjunto de claves `data`
  que la mayoría de su propio tipo) dentro de la ventana nueva.
  NO_CONFIRMA (no persiste) si aparece 0 veces. NO_SÉ si no se
  pueden descargar las revisiones o el campo savia falta en V152.
- **Secundario (NO decisorio):** conteo completo por valor
  (248.376 / 366.733 / 247.881 / 248.372 / ¿nuevo?); ¿reaparece
  247.881?; savia vs totalSize n/n; distribución por versión;
  payloads vacíos como control.
- **Límites declarados:** la ventana es la de las revisiones
  nuevas que el Drive canónico sirva; un valor en 1 solo payload
  no distingue error de escritura de régimen sin más ventanas.
  No se reproducen credenciales ni correos (conteos solo).

## M-97 — Autocura 17→18: ¿existe run 18? ¿cadencia?

- **Pregunta:** run 17 existe (2026-11-16T20:26:02Z, success,
  head fc03539a); el intervalo 16→17 = 649,08 min salió de la
  banda ~7,5 h [447,77, 465,70] — cadencia que se alarga. ¿Existe
  ya el run 18? Si existe, ¿el intervalo 17→18 vuelve a la banda
  ~7,5 h, se queda cerca de 649,08, o es un nuevo régimen?
- **Protocolo (declarado antes de correr):** solo metadatos de la
  API pública de GitHub Actions (REST sin autenticar, uso mínimo
  de cuota): lista de runs del workflow miu-autocura (id
  417018123, per_page=20). NUNCA el contenido del archivo YAML
  del workflow (regla dura). Por cada run 11–18: run_number, id,
  created_at, updated_at, conclusion, duración, head_sha, mensaje
  y timestamp del head_commit, evento. Intervalos entre created_at
  consecutivos en minutos.
- **Falsador:** CONFIRMA si el run 18 existe Y el intervalo 17→18
  cae DENTRO de [400, 700] min (cadencia no rota: ni ~7,5 h ni
  649 min se rompen como régimen). NO_CONFIRMA si el intervalo
  17→18 cae FUERA de [400, 700] min (cadencia rota de nuevo).
  NO_SÉ si el run 18 no existe todavía al consultar (se registra
  el último run medido y el tiempo transcurrido desde el run 17).
- **Secundario (NO decisorio):** serie completa de intervalos
  11→18; cociente máx/mín; lags head_commit→run; duraciones;
  ¿existe run 19 al consultar? (contexto, no parte de la
  secuencia).
- **Límites declarados:** la API pública no da los logs (403 en
  ciclos anteriores); lo que la autocura hizo dentro de cada run
  no es visible, solo metadatos. Las bandas son racimos
  observados, no umbrales de primeros principios.

## M-98 — Flow run 150: ¿17.ª medición en 0,0%?

- **Pregunta:** flow run 149 (17:14:14Z) midió 0,0% CRÍTICO,
  0 eventos — 16.ª medición en cero (ciclo ALMA, sondeo fresco).
  ¿El run 150 existe y la cobertura sigue en cero absoluto?
- **Protocolo (declarado antes de correr):** solo metadatos de
  la API pública de GitHub Actions (REST sin autenticar) +
  contenido público del archivo por API contents o raw (blob +
  sha). Lista de runs del workflow MIU Flow-ID Coverage Monitor
  (id 375168071, per_page=10): runs 146→150 con run_number, id,
  created_at, updated_at, conclusion, evento.
  `observabilidad/flow_id_coverage.json` vía API contents (ruta
  observabilidad/, NO raíz — FASE 0 r24 reportó 404 en raíz) o
  raw.githubusercontent.com si /contents da 403 de cuota: ts,
  cobertura_flow_id_pct, total_eventos_muestra, estado, alertas,
  eco_ratio_pct. Cadencia: intervalos entre created_at de runs
  146→150 y lag run→escritura del archivo.
- **Falsador:** CONFIRMA si el run 150 existe con cobertura 0,0%
  y 0 eventos Y los runs 146→150 son 5/5 en 0,0% con 0 eventos →
  el cero absoluto persiste, 17.ª medición en 0,0%.
  NO_CONFIRMA si cobertura > 0,0% o eventos > 0 en el run 150 o
  en cualquier run de la serie 146→150. NO_SÉ si el workflow no
  se resuelve o el archivo no se lee.
- **Secundario (NO decisorio):** intervalos entre runs Flow-ID
  146→150; lag run→escritura; commits "monitor: flow_id
  coverage" en la ventana; eco_ratio_pct y alertas como contexto.
- **Límites declarados:** la API pública no da los logs del
  workflow (403 en ciclos anteriores); POR QUÉ mide cero es
  NO_SÉ (contenido del workflow fuera de alcance por regla
  dura). La serie 146→150 se establece desde metadatos y
  contenido del archivo, no desde logs. Si la cuota 403 corta
  una llamada, se re-mide tras el reset (CORR-CUOTA-R23).
