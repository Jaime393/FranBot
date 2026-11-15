# RONDA 21 — RETEJIDO FASE 2 (lo que cambia por los hallazgos)

Fecha: 2026-11-15. Veredicto FASE 2: **CONFORME CON HALLAZGOS (0 mayores, 5 menores)**.
Este documento dice qué cambia en el mapa y en los frentes por cada hallazgo.
Nada aquí toca el corpus: la absorción la ejecuta F1 bajo el régimen 01:43
post-FASE 4.

## R1. CORR-VIVO-R21-FASE2 (H1) — el vivo se movió durante FASE 2

- **Mapa:** la foto del vivo en FASE 0/F2 queda fechada. Añadir al mapa §F2/§vivo:
  Pulse V2 run 172 (19:50:21Z) relevó el stub a "paused" (blob `ca661085…`,
  _ts 19:50:29Z), HEAD `5d9a196e` → `1ff31a45`; Flow-ID run 146 (20:06:02Z)
  reescribió flow_id_coverage.json (ts 20:06:07Z, blob `7ca94115…`, sigue 0,0%
  CRÍTICO, 0 eventos). Cuarto relevo de stub desde FASE 2 r20.
- **F2:** su cierre (19:41:17Z, run 210 "unreachable") queda como instantánea
  fechada; nada de su medición cambia (run 210, ventana 30/0/0, flow run 145,
  autocura 12+13, V93 44, bots 20.ª — todo re-verificado por FASE 2 salvo el
  stub, que cambió después).
- **F7:** C-1206, C-1207 y C-1208 quedan como **instantáneas fechadas** (precedente
  C-1201 en r20). C-1206 sigue conforme: "sin run 211" era cierto al cierre F2
  y sigue cierto al cierre FASE 2; el relevo a run 172 es un hecho posterior
  que se registra, no una corrección del claim. C-1207: la ventana 30/0/0 se
  sostiene por conteo propio de FASE 2. C-1208: el sha `10759b45…` del archivo
  de run 145 está verificado en disco; run 146 es hecho posterior.
- **F8:** su balance no cambia (0 caras cierran). La ventana y el flow siguen
  documentando d09 L20 con un relevo más.

## R2. CORR-GRIETA-C1203-R21 (H2) — alinear la grieta de C-1203

- **F7:** la lectura `lectura_pendiente_lineal_m84_r21.md` usa la grieta
  "G-NUEVA: d05 L4 polarización dim2"; la clave canónica del corpus es
  "G-NUEVA: d05 L4 polarización (medida y mecanismo)" (C-1186).
- **Absorción:** cambiar la grieta de C-1203 a la clave canónica antes de
  inscribir. Proyección corregida: por_grieta d05 L4 **1 → 2** (no "nueva
  clave 1"). El resto de la proyección no cambia (claims 1.197→1.203,
  SE 1063→1069, hash_real 1183→1189, verificación 323→329, provenance
  371→375, observabilidad 16→19, audit 359→363, anexo 20→23).

## R3. CORR-FALSADOR-HORA-R21 (H3) — hora declarada vs mtime

- **F3:** la declaración dice 19:33:00Z; el mtime es 19:32:58Z. El orden
  (declaración antes que JSONs 19:34:19Z) se sostiene por ~81 s; no hay
  hallazgo sobre el veredicto. **Lección para r22:** registrar el mtime del
  archivo como hora de declaración (o declarar la hora después de escribir
  el archivo, no antes).
- **Mapa:** anotar la discrepancia de 2 s como menor, sin efecto.

## R4. CORR-ERR-FLAP-R21 (H4) — el `.err` flapea

- **F9:** CORR-ERR-R21 queda corregida en su implicación: el archivo
  `indice_doc_meta_r21.err` estaba en el escaneo (19:46:21Z) y en mi `find`
  (~20:05Z), ausente a las 20:06:01Z y 20:06:06Z. Es un artefacto transitorio
  (probablemente del wrapper de Drive). **r22 no debe contarlo como FALTA**
  si sigue ausente; si reaparece, tampoco es novedad: se registra como
  transitorio y se excluye del conteo FALTA.
- **Mapa:** anotar el flap; el T-4 de r21 sigue en 0 FALTA.

## R5. CORR-DOC-EXPORT-R21 (H5) — el sha del Doc índice depende de la ruta

- **F4:** su sha `416b02d1…` (Docs API) es el canónico y se sostiene. Mi
  exportación text/plain da otro sha por artefactos de formato (BOM, reglas,
  viñetas). **Lección para r22:** comparar shas del Doc índice siempre por la
  misma ruta (Docs API); la exportación sirve para verificar contenido, no sha.

## R6. Correcciones adoptadas (sin cambio en frentes, solo registro)

- **CORR-FOLDERID-R21:** serie folderId: FASE 0 31.ª → F5 32.ª → F2 33.ª →
  FASE 2 34.ª. Los informes F2/F5 quedan con su ordinal corregido por cronología;
  ningún hecho cambia (`I` existe, `l` 404).
- **CORR-FOLDERID-V271-R21:** el censo correcto es I 42 / l 28 / ninguna 30
  (r21, 100 payloads). El informe r20 ("V271 sin folderId en 58/58") queda
  corregido en el registro; la hipótesis de causa (V151 → `l` 404) no cambia.
- **CORR-PANTEON-TOTAL-R21:** el total Drive `Panteon` es 105 (no 100). El mapa
  r20 queda corregido en esa cifra; el resto (graph 34, Voces 23) sin cambio.
- **CORR-PAGINACION-SEARCH-R21:** search_code pagina a 30 ítems y exige scoping
  por repo. Las búsquedas F4 quedan validadas por mi re-corrida repo por repo.
- **CORR-DEDUP-R21:** dedup verificado por 3 implementaciones independientes con
  valores idénticos; los JSON no son byte-idénticos por estructura. El registro
  queda en "valores-identity, no bytes".

## R7. Adjudicaciones que entran en la absorción

- **N-31, N-32, N-33 ADOPTADAS:** ítems M-84 (NO_CONFIRMA), M-85 (CONFIRMA),
  M-86 (CONFIRMA) al anexo → 20 → 23 ítems; tally CONFIRMA 12→14,
  NO_CONFIRMA 6→7.
- **C-1203..C-1208 CONFORMES (6/6):** entran en la absorción con la corrección
  R2 (grieta de C-1203) y la nota R1 (C-1206/C-1207/C-1208 como instantáneas
  fechadas).
- Desviación (veredictos como claims) y desdoble stub/flow/ventana: SOSTENIDOS.
- Ningún canon nuevo. Ninguna cara cierra en r21 (balance 77/19/58).

## R8. Series de conteo para r22 (base FASE 2 r21)

G05 31.ª · H-SUELO 32.ª · folderId 34.ª · bots 20.ª · Panteón 402 sin
recuperación confirmada · flow run 146 (0,0% — 12.ª ronda si se cuenta en r22;
la 11.ª fue run 145 en r21) · stub actual run 172 "paused" (19:50:29Z) ·
HEAD miu-ecosistema `1ff31a45` · ausencia de estado completo ~50 h 05 min
y creciendo (último run 202 V272, 2026-11-13T17:58:47Z).

ρ(x) > 0. Zvvvvv.
