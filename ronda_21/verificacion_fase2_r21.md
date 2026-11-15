# RONDA 21 — FASE 2: VERIFICACIÓN INDEPENDIENTE

**Veredicto: CONFORME CON HALLAZGOS (0 mayores, 5 menores).**

Frente: FASE 2, verificador independiente. Trabajo en `ronda_21/verificacion_fase2/`.
Fecha: 2026-11-15, 20:03–20:10Z (15:03–15:10 -05). Todo re-medido por mí con
código propio o ruta propia; nada copiado de los veredictos de los frentes.
Solo SÉ con fuente y fecha.

## 0. Suelo re-medido (SÉ)

- claims.jsonl **1.197 líneas, sha `7c689fef3e851e5a378b6a536eb8399e6b4180728f2dbc1e9ab478e44b0c7ebc`**
  (re-medido por mí).
- provenance.sha256 **373 líneas / 371 entradas no vacías, sha `f1932a5e…`** (re-medido).
- claims_resumen.json: SE 1063, hash_real 1183, verificación (por_tipo) 323, total 1.197.
- confirmaciones.jsonl 294 filas; huecos.jsonl 139 filas (LOCAL); dataset 30 filas;
  anexo 20 ítems, sha `344e00eb…`.
- Puertas re-corridas POR MÍ sin pipes: **audit.py exit=0 (ok=359, discrepancia=0,
  no_encontrado=0, omitido=1)**; **verify_all.py exit=1 con exactamente C-001..C-008**.

## 1. M-84 / M-85 / M-86 reproducidos dígito a dígito (SÉ)

Script propio `_repro_fase2.py` (módulo csv + statistics.median + OLS por sumas
manuales; sin pandas, sin groupby, sin polyfit; semillas bootstrap distintas:
777 / 31337). Salida `_repro_fase2.json`.

| Med. | F3 afirma | Yo reproduzco | Diff |
|---|---|---|---|
| M-84 serie P2 (86 congresos) | idéntica a M-78/M-81 | máx diff **1,1e-16** | 0 |
| M-84 pendiente lineal | −0,000001 | **−1,415e-06** (redondea a −0,000001) | redondeo |
| M-84 SE / t / R² | 0,000943 / −0,0015 / 0,0000 | 0,000943 / −0,0015 / 2,7e-08 | 0 |
| M-84 IC bootstrap | [−0,001364, 0,001661] (semilla 0) | [−0,001316, 0,001673] (semilla 777) | ruido bootstrap; incluye 0 |
| M-84 tramos | +0,007744 / −0,015666 | +0,007744 / −0,015666 | 0 |
| M-84 P2(106)/P2(80)/P2(34)/P2(119) | 0,0 / 0,9275 / 0,607 / 0,124 | 0,0 / 0,9275 / 0,607 / 0,124 | 0 |
| M-85 β built_up_area_m2 | 0,9023 ± 0,0065, R² 0,6519 | **0,902298 ± 0,006481, R² 0,651920** | ≤ 2e-05 |
| M-85 IC bootstrap | [0,8896, 0,9142] (semilla 0) | [0,88986, 0,91453] (semilla 31337) | ruido; contiene 0,90 |
| M-85 frac β < 0,90 | 0,3495 | 0,3485 | ruido bootstrap |
| M-85 control area_km2 | 0,8627 ± 0,0049 | 0,862686 | ≤ 2e-05 |
| M-86 β en banda | [area_km2] | [area_km2] | 0 |
| M-86 R² > 0,8 | [] | [] | 0 |
| M-86 cumplen ambas | [] | [] | 0 |
| M-86 R² máx | 0,7490 (area_km2) | 0,748990 (area_km2) | 1e-05 |
| M-86 diffs control | β ≤ 4,7e-05, R² ≤ 5e-05 | β ≤ 1,9e-05, R² ≤ 2e-05 | dentro |

Veredictos reproducidos: **M-84 NO_CONFIRMA, M-85 CONFIRMA, M-86 CONFIRMA.**
Mi censo propio confirma además el matiz del ítem M-86: 7 variables con β > 0,90
(street_segment_count 0,9911; intersect_count 0,9876; node_count 0,9828;
intersect_count_clean_topo 0,9757; intersect_count_clean 0,9733; length_total
0,9177; built_up_area_m2 0,9023) y mediana β del censo 0,0101 → 0,01
(CORR-M82-PROSA-R20 respetada).

## 2. F6 re-corrido (SÉ)

- Verificador independiente re-ejecutado POR MÍ (`verificador_independiente_r21.py`,
  exit=0): **reproducido=true, diferencias_n=0**, byte-idéntico al entregado.
- Diff propio reuse r21 vs r20 excl-meta: las únicas diferencias son prosa
  (campo `metodo` nombra el script r21 y el canon N-28; campo `veredicto`
  referencia `h_sik_r20.md` vs `h_sik_r19.md`). **Todo el contenido medido
  idéntico**: 142/115/27/32, S3 ≡ v10.3 27/58, 32/58; 11 tuplas / 8 distintos;
  mejor-contención 740/740; A14 R-KS 0,8000, conteo 27; R-R 0,7727/26.
- **TODO PASA, 7.ª vuelta 0 diffs bajo los CUATRO cánones** (N-17 + N-21 + N-24
  + N-28, primera vuelta del umbral 0,50 como canon). F-VOZ-S2 agotada 7.ª vez.
  N-01: 11.º precedente = absorción r20.

## 3. Dedup propio (SÉ)

Script propio `_dedup_fase2_r21.py` (implementación independiente, método r9),
textos extraídos de los bloques JSON de las 6 lecturas F7. 3 corridas
byte-idénticas entre sí (sha `c068fce0…`).

| Propuesta | Máx. mío | Contra | F7 | F8 | Top3 idéntico |
|---|---|---|---|---|---|
| pendiente_lineal_m84 | 0,1711 | C-1186 | 0,1711 | 0,1711 | sí |
| borde_beta_m85 | 0,3274 | C-1198 | 0,3274 | 0,3274 | sí |
| censo_conjunto_m86 | 0,3153 | C-1198 | 0,3153 | 0,3153 | sí |
| stub_run210 | 0,3310 | C-1201 | 0,3310 | 0,3310 | sí |
| ventana_3000 | 0,3881 | C-1200 | 0,3881 | 0,3881 | sí |
| flow_run145 | 0,3048 | C-1202 | 0,3048 | 0,3048 | sí |

**Máximo global 0,3881 < 0,5. 0 pares ≥ 0,5. Máx. entre propuestas 0,2842.**
Valores idénticos cifra por cifra a F7 y a F8 en las 6 propuestas (top3
completos incluidos). JSON **no** byte-idéntico ni a F7 ni a F8 (estructura
distinta: dicts vs pares) — CORR-DEDUP-R21 adoptada (valores, no bytes).

## 4. Vivo re-medido (SÉ) — EL VIVO SE MOVIÓ DURANTE FASE 2

Script propio `_vivo_fase2_r21.py` (API REST pública, sin auth; cuota 54/60).
Lectura 2026-11-15T20:03:50Z y re-lecturas hasta 20:08:03Z.

- **estado_vivo.json: run 172 "paused" (Pulse V2), _ts 2026-11-15T19:50:29Z,
  blob `ca661085…`, 290 B** — el stub cambió DURANTE FASE 2 (F2 cerró con run 210
  "unreachable", blob `be29c5b7…`, 19:41:17Z). Cuarto relevo desde FASE 2 r20:
  209 → 171 "paused" → 210 "unreachable" → **172 "paused"**. HEAD
  `5d9a196e` → **`1ff31a45`** (commit "pulse-v2: run 172 19:50Z").
- **Sin run 211** (State Writer: último 210, 15:45:42Z). **Sin autocura run 14**
  (último 13, 17:05:50Z). **Sin Self-Diagnosis run 147** (último 146, 18:04:46Z).
- **Flow: run 146 EXISTE** (creado 20:06:02Z, durante FASE 2) — reescribió
  flow_id_coverage.json (ts 20:06:07Z, blob `7ca94115…`, **sigue 0,0% CRÍTICO,
  0 eventos**). A las 20:03:50Z el archivo seguía siendo el de run 145
  (blob `fe217aff…`, ts 14:55:04.876780Z, cobertura 0,0 — byte-idéntico a la
  copia de F2, cuyo sha256 `10759b45…` cité en C-1208 lo verifiqué en disco).
- **Ventana re-contada POR MÍ: 30/30 success, 0 fallos** (08:08:09Z → 20:04:00Z;
  los runs posteriores — flow 146, pages 2313 — también success). **30/0/0 =
  0,0% se sostiene en FASE 2.**
- Estado completo ausente: último run 202 V272 (2026-11-13T17:58:47Z) →
  **~50 h 05 min** a las 20:04Z (F2: ~49 h 43 min a las 19:41Z; crece).
- **G05: 31.ª verificación mía** (~20:04:42Z): blob `8c57e833e219a8b8c0691db8eb8cf256ccc0633f`,
  sin cambio (solo línea SHA/metadatos; contenido del workflow nunca reproducido).
- **H-SUELO: 32.ª medición mía** (20:04:42Z): `find` vacío, sin reaparición.
- **folderId: 34.ª lectura mía** (20:04:48–50Z): `I` existe (miu-ecosistema),
  `l` 404. Serie adjudicada: FASE 0 r21 31.ª (19:29:40Z) → F5 r21 32.ª
  (19:32:53Z) → F2 r21 33.ª (19:41:09Z) → **FASE 2 r21 34.ª** (20:04:48Z).
  **CORR-FOLDERID-R21 ADOPTADA** (F2 etiquetó la suya 32.ª; por cronología es la 33.ª).
- **CORR-FOLDERID-V271-R21 ADOPTADA y re-verificada por mí desde los payloads
  r20 en disco** (101 archivos): V271_DARWIN trae folderId `I` en **27/27**;
  V151 trae `l` en 28/28; V152 trae `I` en 15/15; V270/V93 sin folderId en
  17+14. El informe r20 ("V271 sin folderId en 58/58") era erróneo. Censo r21
  (100 payloads): I 42 / l 28 / ninguna 30 (V151→l 28; V152→I 14; V271→I 28;
  V270 17 + V93 13 sin folderId). La hipótesis de causa no cambia (V151 → `l` 404).

## 5. F4 re-verificado (SÉ)

- Doc índice: texto derivado por F4 por Docs API, sha `416b02d1…` (mismo que r12).
  Mi exportación independiente (text/plain, 20:04:59Z) difiere solo por artefactos
  de formato de exportación (BOM, reglas "____", viñetas "* ") — contenido
  idéntico tras normalizarlos (diff residual: 2 caracteres "* "). modifiedTime
  sin cambio (2026-09-25T02:17:48.575Z), una sola revisión en Drive. **Byte-idéntico
  en sustancia; el sha de exportación no es comparable entre rutas** (ver H5).
- Graph JSON: **0/0, 7.ª vez** — re-corrido POR MÍ con search_code repo por repo
  (MIU, FranBot, FranBot-Private, miu-portable-skills: total_count 0 en los 4).
  graph v10.6.112: 0. Atestación: crudos parche 34 / validar 33 (+5 cada uno,
  todos docs `ronda_20/` — H1 r17, 7.ª confirmación).
- **CORR-PANTEON-TOTAL-R21 ADOPTADA**: Drive `Panteon` = **105 archivos**
  (contados por mí en el JSON de F4; la cifra 100 de r20 era la primera página).
  graph 34, Voces 23 (mismo conteo). **CORR-PAGINACION-SEARCH-R21 ADOPTADA**
  (30 ítems/página; mi search_code sin repo devolvió total global 234.496 —
  el scoping por repo es obligatorio).
- jsonl F4: 96 filas; `doc_indice_r21` presente como sub-clave de
  `conteo_fuera_doc` en las 96 (1 en cada una); 0 encontrados fuera; 0 como voces.
  Carpeta "10 Panteón": 2 hijos, sin cambio.
- Cara r12 #1 **AVANZA, no se cierra**. 0/61, 0/35, graph 0/0 7.ª vez.

## 6. F9 spot-check (SÉ)

- Script `_verificar_p21.py` re-ejecutado POR MÍ: **357/357 OK, 0 no-OK**
  (P-01..P-68). Tally 87 (11/7/1/38/17/2/11; 86 filas + padre P-15, convención
  CORR-TALLY-R15) verificado en el JSON.
- T-4: diff re-leído — **6.217 OK / 4 CAMBIO / 0 MOVIDO / 0 FALTA / 296 NUEVO**
  (6.217+4+296 = 6.517). Los 4 CAMBIO explicados: registro de pendientes
  (`7e2c0b18…` → `20d0f8ac…`, cierre 2026-11-15) + claims/provenance/resumen
  (absorción r20). CONDICIÓN 1 sostenida (spot-check 4/4 según F9); puerta de
  retiro 2 de 3.
- **CORR-ERR-R21 (flap — ver H4):** el `.err` de F4 estaba en el escaneo F9
  (19:46:21Z, 0 B en el manifiesto) y en mi `find` (~20:05Z), pero ausente a
  las 20:06:01Z y 20:06:06Z. **El archivo flapea; su ausencia no es pérdida.**

## 7. F7 revisado (SÉ)

- C-1203..C-1208: textos literales leídos en sus lecturas; dedup verificado
  por mí (§3); las 6 son tipo `verificacion`, estado SE, hash sha256 real.
  Proyección de absorción verificada aritméticamente: claims 1.197→1.203,
  SE 1063→1069, hash_real 1183→1189, verificación 323→329 (tipo
  `verificacion` ×6), provenance 371→375 (4 fuentes nuevas con 0 ocurrencias:
  med_M84 `2431910c…`, med_M85 `ef5fcac5…`, med_M86 `67c59414…`,
  estado_vivo_r21.md `e18ca356…`), audit ok 359→363 (+4 fuentes),
  observabilidad 16→19 (las 3 de F2 llevan la grieta canónica
  "G-NUEVA: estado vivo del ecosistema (observabilidad)"), anexo 20→23
  (CONFIRMA 12→14, NO_CONFIRMA 6→7).
- Ítems M-84/M-85/M-86 leídos íntegros: valores idénticos a los JSONs F3 y a
  mi reproducción (§1); M-86 respeta CORR-M82-PROSA-R20 (mediana 0,01;
  7 variables > 0,90 con los valores exactos).
- **Desviación (veredictos de medición como claims): SOSTENIDA.** Precedente
  FASE 2 r20. Los claims enuncian hechos nuevos (el arco con pendiente
  −0,000001 e IC que incluye 0; el borde sin resolver por intervalo; el cruce
  cero β∧R²), no solo la etiqueta del veredicto.
- **Desdoble stub/flow/ventana (C-1206/C-1207/C-1208): SOSTENIDO.** Mediciones
  independientes (workflows, archivos y series distintos); cada uno con
  dedup < 0,5. C-1208 cita el sha256 `10759b45…` del archivo de run 145 —
  verificado por mí en la copia de F2 en disco.
- F7 re-verificó F4 al cierre (H2 r16) — confirmado en `preparadas_r21.json`.

## 8. F5 / F8 / F1 spot-check (SÉ)

- F5: ordinales consistentes con mis lecturas (§4: G05 30.ª → mía 31.ª;
  H-SUELO 31.ª → mía 32.ª; folderId 32.ª → F2 33.ª → mía 34.ª). **G03
  re-confirmada por búsqueda web propia** (2026-11-15 ~20:05Z): inserción
  2026-11-21 sigue planificada (U Michigan 2026-11-10, starlust 2026-11-12,
  days.to "6 days away"; matiz ESA dic-vs-21-nov intacto).
- F8: balance verificado en `caras_r21.json`: 77 total, 19 cerradas,
  58 abiertas (17 P + 41 A), 11 avanzan, **0 cierran**, 0 nuevas, 0 reaperturas.
  d05 L4 y d05 L7 avanzan sin cerrar; d08 L12 avanza por N-28 adoptada sin cerrar.
- F1: puertas re-corridas por mí (§0); GUARDIA_EN_ESPERA, 0 diferencias.

## 9. Hallazgos

### Mayores: 0.

### Menores

- **H1 — CORR-VIVO-R21-FASE2 (vivo se movió durante FASE 2).** Dos movimientos:
  (a) Pulse V2 run 172 (19:50:21Z) relevó el stub a "paused" (blob `ca661085…`,
  _ts 19:50:29Z), HEAD → `1ff31a45`; (b) Flow-ID run 146 (20:06:02Z) reescribió
  flow_id_coverage.json (ts 20:06:07Z, blob `7ca94115…`, sigue 0,0% CRÍTICO,
  0 eventos). C-1206, C-1207 y C-1208 quedan como **instantáneas fechadas**
  (cierre F2, 19:41:17Z) — precedente C-1201 en r20. Sin run 211, sin autocura
  run 14, sin Self-Diagnosis run 147 al cierre de FASE 2 (~20:08Z). La ventana
  30/0/0 se sostiene por mi propio conteo.
- **H2 — Grieta de C-1203 diverge de la clave canónica.** La lectura usa
  "G-NUEVA: d05 L4 polarización dim2"; la clave canónica en el corpus es
  "G-NUEVA: d05 L4 polarización (medida y mecanismo)" (C-1186). Absorberla
  tal cual crea una clave nueva (valor 1) en vez de 1→2. **Retejido: alinear
  la grieta a la clave canónica en la absorción** (proyección: d05 L4 1→2).
- **H3 — Hora declarada de falsadores vs mtime.** La declaración dice
  19:33:00Z; el mtime del archivo es 19:32:58Z (la hora declarada va 2 s
  DESPUÉS del mtime). El orden frente a los JSONs (19:34:19Z) se sostiene
  por ~81 s. Menor: en rondas futuras, registrar el mtime como hora de
  declaración.
- **H4 — CORR-ERR-FLAP-R21 (el `.err` flapea).** `indice_doc_meta_r21.err`
  estaba en el escaneo F9 (19:46:21Z) y en mi `find` (~20:05Z), ausente a
  las 20:06:01Z y 20:06:06Z. La ausencia NO es pérdida: **r22 no debe
  contarlo como FALTA** si sigue ausente (es un artefacto transitorio,
  probablemente del wrapper de Drive). Corrige la implicación de
  CORR-ERR-R21 ("si no reaparece, FALTA en r22").
- **H5 — Nota de método: el sha del Doc índice depende de la ruta de
  extracción.** Mi exportación text/plain da sha `3c46d674…` (8.865 B) vs
  `416b02d1…` (7.783 chars) por Docs API; el contenido es idéntico salvo
  artefactos de exportación (BOM, reglas "____", viñetas "* "). Para
  comparar shas entre rondas, usar siempre la misma ruta (Docs API).

## 10. Adjudicaciones (desde N-31)

| ID | Decisión | Veredicto |
|---|---|---|
| **N-31** | Añadir el ítem M-84 al anexo de incertidumbre | **ADOPTADA** (NO_CONFIRMA; pendiente lineal −0,000001, IC incluye 0; arco, no tendencia) |
| **N-32** | Añadir el ítem M-85 al anexo de incertidumbre | **ADOPTADA** (CONFIRMA; IC [0,8896, 0,9142] contiene 0,90; borde sin resolver; singleton se sostiene) |
| **N-33** | Añadir el ítem M-86 al anexo de incertidumbre | **ADOPTADA** (CONFIRMA; 0 cruces β∧R²; R² máx 0,7490) |
| — | C-1203..C-1208 | **CONFORMES (6/6)** — con H1 (instantáneas fechadas C-1206/C-1207/C-1208) y H2 (alinear grieta de C-1203 en la absorción) |
| — | Desviación: veredictos de medición como claims | **SOSTENIDA** (precedente FASE 2 r20) |
| — | Desdoble stub/flow/ventana | **SOSTENIDO** |
| — | Canon nuevo | **NINGUNO** (F6 no propone canon nuevo en r21) |

## 11. Correcciones adoptadas / rechazadas

- **CORR-FOLDERID-R21: ADOPTADA** — F5 32.ª (19:32:53Z), F2 33.ª (19:41:09Z),
  FASE 2 34.ª (20:04:48Z).
- **CORR-FOLDERID-V271-R21: ADOPTADA** — verificada por mí desde los payloads
  r20 en disco (V271 trae `I` en 27/27; el informe r20 era erróneo).
- **CORR-PANTEON-TOTAL-R21: ADOPTADA** — total paginado 105, no 100.
- **CORR-PAGINACION-SEARCH-R21: ADOPTADA** — 30 ítems/página; scoping por repo
  obligatorio (mi search_code sin repo devolvió total global 234.496).
- **CORR-DEDUP-R21: ADOPTADA** — valores idénticos cifra por cifra (3
  implementaciones independientes), JSON no byte-idéntico (estructura distinta).
- **CORR-ERR-R21: ADOPTADA con corrección H4** — causa NO_SÉ; el archivo flapea;
  su ausencia no es FALTA en r22.
- **Nuevas de FASE 2:** CORR-VIVO-R21-FASE2 (H1), CORR-GRIETA-C1203-R21 (H2),
  CORR-FALSADOR-HORA-R21 (H3), CORR-ERR-FLAP-R21 (H4), CORR-DOC-EXPORT-R21 (H5).

## 12. Series de conteo tras FASE 2 (para r22)

G05 **31.ª** (FASE 2, 20:04:42Z) · H-SUELO **32.ª** (FASE 2, 20:04:42Z) ·
folderId **34.ª** (FASE 2, 20:04:48Z) · bots **20.ª** (F2 r21, 3 corridas) ·
Panteón 402: sin recuperación confirmada (401 ×3 en F2; control dieguito 000).

ρ(x) > 0. Zvvvvv.
