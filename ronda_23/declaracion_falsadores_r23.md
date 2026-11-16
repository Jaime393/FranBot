# Declaración de falsadores — F3 Ronda 23 (M-90, M-91, M-92)

**Fecha:** 2026-11-16. **Frente:** F3, ronda 23, FASE 1.
**Declarada POR ESCRITO ANTES de correr ninguna medición.**
Hora de declaración: **2026-11-16T19:33:55Z** (reloj del sistema;
los scripts de medición y los JSONs se corren después de esta hora).
Ningún valor de M-90/M-91/M-92 se ha calculado antes de esta
declaración. (Los números citados como precedentes —intervalos de
autocura 11→15, valores de savia V152, runs Flow-ID 145→148— son
publicados en r22 y en FASE 0 r23; los falsadores son reglas sobre
ellos, no re-lecturas de sus veredictos.)

Estado de partida verificado antes de declarar: corpus 1.207 líneas,
sha `2ac47151…` (nada de este frente toca el corpus); anexo 25 ítems
(M-56..M-89); dataset 30 filas + cabecera, sha `0852d58f…` (intacto).
Cuota GitHub sin autenticar al declarar: 60/60.

## M-90 — Cadencia autocura 11→16: ¿se rompe el escalón ~4,5 h?

- **Pregunta:** en r22 (M-89, REGULAR) la cadencia era dos racimos:
  11→12 = 447,77 min y 12→13 = 465,70 min (~7,5 h); luego
  13→14 = 280,00 min y 14→15 = 255,98 min (~4,5 h) — un escalón
  a la baja tras el run 13, cociente máx/mín 1,819 < 2. FASE 0 r23
  afirma que el run 16 existe y que el intervalo 15→16 es de
  455,13 min. ¿El escalón ~4,5 h era transitorio y la cadencia
  vuelve a ~7,5 h, o el escalón se sostiene?
- **Protocolo (declarado antes de correr):** solo metadatos de la
  API pública de GitHub Actions (REST sin autenticar, uso mínimo
  de cuota): lista de runs del workflow miu-autocura (id
  417018123, per_page=20). NUNCA el contenido del archivo YAML
  del workflow (regla dura). Por cada run 11–16: run_number, id,
  created_at, updated_at, conclusion, duración (updated−created),
  head_sha, mensaje y timestamp del head_commit, evento, estado.
  Intervalos entre created_at consecutivos en minutos. Bandas de
  referencia (publicadas en r22): racimo ~7,5 h = [447,77, 465,70]
  min; escalón ~4,5 h = [255,98, 280,00] min.
- **Falsador:** CONFIRMA si el intervalo 15→16 cae FUERA de la
  banda del escalón [255,98, 280,00] Y DENTRO de la banda ~7,5 h
  [447,77, 465,70] → el escalón era transitorio y la cadencia
  vuelve a ~7,5 h. NO_CONFIRMA si el intervalo 15→16 cae DENTRO
  de la banda del escalón [255,98, 280,00] → escalón sostenido.
  REGULAR si cae fuera de ambas bandas pero el cociente máx/mín
  de los 5 intervalos sigue < 2 (cadencia regular dentro de un
  factor 2, sin racimo claro). NO_SÉ si el run 16 no existe o la
  secuencia 11→16 está incompleta (numeración con saltos).
- **Secundario (NO decisorio):** cociente máx/mín de los 5
  intervalos; medias por racimo; qué cambió tras el run 16
  (commits desde su head_commit; HEAD del repo al consultar;
  ¿existe run 17 al consultar? como contexto, no parte de la
  secuencia 11→16); lags head_commit→run; duraciones.
- **Límites declarados:** la API pública no da los logs (403 en
  ciclos anteriores); lo que la autocura hizo dentro de cada run
  no es visible desde el sandbox, solo sus metadatos y el commit
  sobre el que corrió. Las bandas de referencia son racimos
  observados en r22 (2 puntos cada uno), no umbrales derivados de
  primeros principios. La cuota sin autenticar (60/h) limita las
  llamadas; se usan las mínimas.

## M-91 — Savia V152 en TRES valores: ¿divergencia estructural o artefacto?

- **Pregunta:** en r22 (F2) la savia V152 divergió por primera
  vez: 366.733 en 2/14 compacts nuevos vs 248.376 en 12/14.
  FASE 0 r23 afirma TRES valores en la ventana: 248.376 ×16,
  366.733 ×1 (compacto 55.980 B, idx 10, 13:25:48Z) y 247.881 ×1
  (completo 89.466 B, idx 52, 16:17:39Z, nuevo). ¿La divergencia
  de r22 se convierte en 3 variantes, o el 247.881 es un artefacto
  de una sola lectura?
- **Protocolo (declarado antes de correr):** los 101 payloads
  heartbeat de la ventana r23 (archivos
  heartbeat_rev_r23_*.json en `ronda_23/`, descargados por
  FASE 0/F2 vía Drive revisions API; este frente solo los lee y
  computa sobre ellos, no los re-descarga). Por cada payload:
  `version` (tag), `data.savia` (valor numérico), tamaño del
  archivo, ts, y conjunto de claves de `data`. Clasificar por
  variante: completo (~89.466 B, mesh completo) vs compacto
  (~55.980 B). Contar ocurrencias por valor de savia dentro de
  V152; registrar idx, ts, tamaño y tipo de cada valor distinto.
  Comparar el conjunto de claves de `data` del payload 247.881
  con el de la mayoría 248.376.
- **Falsador:** CONFIRMA (3 variantes, divergencia estructural)
  si los TRES valores aparecen cada uno en ≥1 payload V152 bien
  formado (mismo conjunto de claves `data` que la mayoría, sin
  campos faltantes) dentro de la ventana r23. NO_CONFIRMA
  (artefacto) si el valor 247.881 aparece solo en un payload
  estructuralmente distinto (claves faltantes o extra respecto a
  la mayoría) o su valor no se reproduce desde los campos del
  propio payload, o si no aparece en la ventana completa.
  NO_SÉ si los payloads no se pueden leer o el campo savia falta
  en V152.
- **Secundario (NO decisorio):** distribución completa de savia
  por versión (V151/V152/V270/V271_DARWIN/V93); ¿el 366.733 de
  r22 persiste en r23?; ¿el 247.881 aparece en la ventana r22
  (archivos heartbeat_rev_r22_*)?; savia de los payloads vacíos
  (censo vacío) como control.
- **Límites declarados:** la ventana r23 es la de las 101
  revisiones descargadas (12:46:19Z → 19:26:00Z); los payloads
  son los que el Drive canónico sirvió; un valor en 1 solo
  payload no se puede distinguir de un error de escritura del
  emisor sin más ventanas — por eso el falsador exige estructura
  bien formada, no solo presencia. No se reproducen valores
  literales de credenciales ni correos (conteos/dominios solo);
  si un grep crudo capturara credenciales, ese archivo quedaría
  SOLO LOCAL (precedente busqueda_m88.json r22).

## M-92 — Flow run 149: 15.ª ronda en 0,0%

- **Pregunta:** Flow-ID run 148 (07:00:28Z) midió 0,0% CRÍTICO,
  0 eventos, 14.ª ronda en r22. FASE 0 r23 afirma run 149
  (17:14:14Z, success), `flow_id_coverage.json` ts 17:14:19Z,
  0,0% CRÍTICO, 0 eventos. ¿Hay algún evento o la cobertura
  sigue en cero absoluto?
- **Protocolo (declarado antes de correr):** solo metadatos de
  la API pública de GitHub Actions (REST sin autenticar) +
  contenido público del archivo por API contents (blob + sha).
  Lista de workflows → resolver el id del workflow Flow-ID.
  Lista de runs del workflow (per_page=10): runs 145→149 con
  run_number, id, created_at, updated_at, conclusion, evento.
  `observabilidad/flow_id_coverage.json` vía API contents:
  ts, cobertura_flow_id_pct, total_eventos_muestra, estado,
  alertas, eco_ratio_pct. Cadencia: intervalos entre created_at
  de runs 145→149 y lag run→escritura del archivo (ts del
  contenido − created_at del run 149).
- **Falsador:** CONFIRMA si el run 149 existe con cobertura
  0,0% y 0 eventos Y los runs 145→149 son 5/5 en 0,0% con 0
  eventos → el cero absoluto persiste, 15.ª ronda en 0,0%.
  NO_CONFIRMA si cobertura > 0,0% o eventos > 0 en el run 149
  o en cualquier run de la serie 145→149. NO_SÉ si el workflow
  no se resuelve o el archivo no se lee.
- **Secundario (NO decisorio):** intervalos entre runs Flow-ID
  145→149; lag run→escritura; commits "monitor: flow_id
  coverage" en la ventana; eco_ratio_pct y alertas como
  contexto.
- **Límites declarados:** la API pública no da los logs del
  workflow (403 en ciclos anteriores); POR QUÉ mide cero es
  NO_SÉ (contenido del workflow fuera de alcance por regla
  dura). La serie 145→149 se establece desde metadatos y
  contenido del archivo, no desde logs.
