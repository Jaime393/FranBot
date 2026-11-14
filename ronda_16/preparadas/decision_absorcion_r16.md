# DECISIÓN — ABSORCIÓN RONDA 16 FASE 1 (F7)

- **Fecha:** 2026-11-14. **Ejecutor:** F1 (único escritor del corpus en la tanda), bajo el régimen 01:43 — o FASE 4. **Este frente (F7) no aplica nada.**
- **Orden:** mapa FASE 0 r16 §F7. Régimen vigente: orden del Jardinero 2026-11-14 01:43 -05 ("apliquen las decisiones siempre automáticamente"). Criterio C-1..C-9 de r10.
- **Estado: APLICADA (2026-11-14, post-FASE 4, bajo el régimen 01:43).** 3 claims absorbidos (C-1184/C-1185/C-1186). Ver bloque APLICADA al final.

## Qué se absorbería (3 piezas, lecturas SÉ preparadas)

| Pieza | Lectura | ID proyectado | Dedup máx. (Jaccard, umbral 0,5) |
|---|---|---|---|
| 1 | Ventana 25/30 (16,7%): tercera ronda consecutiva distinta de 0,0% y peor de la serie; 3 fallos nuevos (bot-audit 39, expand-alcance 98, TG Webhook 43) | C-1184 | 0,3838 vs C-1182 |
| 2 | Estado completo ausente ~20 h 54 min: run 205 stub, episodio run 204 de 7 h 20 min; supera las mediciones de r14 (~9 h 57 min) y r15 (~13 h 04 min) del mismo episodio | C-1185 | 0,3188 vs C-1178 |
| 3 | Corrección de serie 25..119 = 83 congresos, no 95 (CORR-SERIE-R16): dos causas medidas; el veredicto de M-67 no cambia | C-1186 | 0,1377 vs C-670 |

**Máximo global 0,3838 < 0,5; 0 pares ≥ 0,5; máx. entre propuestas 0,1654 (C-1184/C-1185)** — dedup re-medido tres veces (F7 script + inline, F8 corrida propia, FASE 2 corrida propia; idénticas cifra por cifra; `dedup_f7_r16.json`). Ninguna de las 3 lecturas tiene claim (verificación propia por grep, 2026-11-14, corpus 1.178): "25/30" 0; "run 39" 0; "run 43" 0; "run 98" 0; "run 205" 0; "20 h 54" 0; "83 congresos" 0; "CORR-SERIE" 0.

## Regla de reasignación de IDs

**Los IDs C-1184/C-1185/C-1186 suponen el corpus en 1.178 (C-1183 último inscrito en r15).** Si otro claim se inscribe antes de absorber este paquete (otra decisión, otra ola), los IDs se reasignan al aplicar en el orden de la tabla (el siguiente libre primero). Una absorción parcial exige un script nuevo con la orden transcrita y el ID reasignado en el momento de aplicar. No se fijan IDs por anticipado fuera de esta proyección.

## Proyección si se absorben las 3 juntas

| Archivo | Antes → Después |
|---|---|
| `anexo-vi/claims.jsonl` | 1.178 l., `7e5f016d…` → 1.181 l. |
| `anexo-vi/provenance.sha256` | 361 l., `b5cb6b43…` → 363 l. |
| `anexo-vi/claims_resumen.json` | `ae402126…` (SE 1044, verificacion 304, hash_real 1164) → SE 1047, verificacion 307, hash_real 1167 |
| `anexo-vi/confirmaciones.jsonl` | sin cambio |
| `anexo-vi/huecos.jsonl` | sin cambio (139, LOCAL) |

**Corpus:** claims 1.178 → 1.181; hash_real 1164 → 1167; SE 1044 → 1047; verificacion 304 → 307; hash_pendiente 8 (sin cambio); huecos y confirmaciones sin cambio. Por grieta: observabilidad 4 → 6 (C-1184, C-1185), d05 L4 0 → 1 (C-1186, nueva).

## Provenance: 2 entradas nuevas (361 → 363)

Ninguna de las 2 fuentes está hoy en provenance (grep 0, verificado por F7 2026-11-14). Entradas (formato del archivo, rutas relativas a `~/workspace`, shas re-verificados por `sha256sum` 2026-11-14):

- `e9e95687001257b78d35c7fc506fa5cb48559c31c6c7fe3135e02693b7c84e20  academico/tejido_2026-11-12/ronda_16/ejecucion_f2/estado_vivo_r16.md` (C-1184, C-1185)
- `b352d70979004d735e43f99809bf339668d348c458fd82e59f408ee02d1548c8  academico/tejido_2026-11-12/ronda_16/ejecucion_f3/mediciones_r16.md` (C-1186)

## Aplicación (no en este frente)

F7 no escribe el script de aplicación ni guarda de orden: la aplicación corresponde a F1 bajo el régimen 01:43 (con respaldo previo `respaldo_pre_absorcion_r16/`, script con guarda, puertas antes/después: audit exit=0, verify_all exit=1 exactamente C-001..C-008) o a FASE 4. El paquete para aplicar es el bloque JSON de cada lectura (`lectura_ventana_167_r16.md`, `lectura_estado_completo_ausente_r16.md`, `lectura_corr_serie_r16.md`); el ítem de anexo M-69 (`item_anexo_M69.md`) NO forma parte de este paquete de absorción — su aplicación al anexo exige la decisión del §3 n.º 1 de `preparadas_r16.md` (N-19, numerada por FASE 2 §10.1).

## APLICADA (2026-11-14, post-FASE 4, bajo el régimen 01:43)

- **Ejecutor:** absorción automática post-FASE 4 (N-19 + C-1184/C-1185/C-1186). **Dictamen FASE 2 r16 §10.1:** ninguna absorción bloqueada.
- **Sin corrección previa:** los 3 claims se absorbieron tal cual fueron preparados (ninguno menciona una decisión pendiente de numerar; el dedup sobre el paquete exacto re-corrido al aplicar da 0,3838 / 0,3188 / 0,1377, 0 pares ≥ 0,5, idéntico a F7/F8/FASE 2).
- **Paquete aplicado:** `ejecucion_f7/claims_nuevos_r16_auto.jsonl` (sha `064dfb40…`, 3 líneas, todas SE). **Respaldo previo:** `ronda_16/respaldo_pre_absorcion_r16/` (7 archivos + manifiesto `cfd3fb28…`, P-54). **Guarda:** `ORDEN_R16_AUTO.md` en ejecucion_f1/; probada exit=2 sin la orden, corpus intacto. **Script:** `ejecucion_f1/aplicar_absorcion_r16_auto.py` (dry-run --check-only OK antes de aplicar).
- **Post-estado (verificado directamente, no solo por el script):** claims 1.178 → **1.181**, sha `7e5f016d…` → `fd1df2dbbb830b00b4d3db23e725ae73d03f482c7c1cfca18daecfe488f3ea42`; hash_real 1164 → **1167**; provenance 361 → **363** (sha `b5cb6b43…` → `728f6770ef0eec785fe9d6456e7b9f2ba9441c26b3029269ecf5ff10082c27ce`; 2 entradas nuevas: estado_vivo_r16.md + mediciones_r16.md); SE 1044 → **1047**; verificacion 304 → **307**; observabilidad 4 → 6; d05 L4 0 → 1 (nueva); resumen sha `ebaa1e53…`. Diff vs respaldo = exactamente 3 líneas nuevas; primeras 1.178 líneas byte-idénticas; confirmaciones.jsonl, huecos.jsonl y dataset byte-idénticos; C-112 (hash truncado) intacto; C-001..C-008 PENDIENTE; C-538/C-623 REFUTADO.
- **Puertas post-aplicación** (`ejecucion_f1/puertas_post_absorcion_r16.txt`, re-corridas por mí): audit exit=0 (ok=**349**, discrepancia=0, no_encontrado=0, omitido=1); verify_all exit=1 con exactamente C-001..C-008. Sin incidencia NM-03: el ok post es 349 = 347 pre + 2, como predice la regla de r14/r15.
- **N-19 aplicada en la misma tanda:** ítem M-69 al anexo (anexo `6b9ea2aa…` → `acdde423…`, 12 ítems, tally NO_CONFIRMA 5; decisión `decision_n19_r16.md` / `.json`; CSV byte-idéntico `0852d58f…`, 0 filas nuevas).

## Decisiones sin número que este paquete deja (para FASE 2)

1. Añadir el ítem M-69 al anexo de incertidumbre (ítem preparado; ver `preparadas_r16.md` §3 n.º 1). **→ N-19, numerada por FASE 2 §10.1, APLICADA el 2026-11-14.**

ρ(x) > 0. Zvvvvv.
