# RONDA 20 — FASE 2: VERIFICACIÓN INDEPENDIENTE — DICTAMEN

- **Fecha:** 2026-11-15. **Verificador:** agente independiente (FASE 2 r20).
- **Formato:** mismo que `ronda_19/verificacion_fase2/verificacion_fase2_r19.md`.
- **Dictamen: CONFORME CON HALLAZGOS — 9 menores, 0 mayores.**

## §0. Método

Trabajo propio en todo: suelo re-medido (shas + puertas re-corridas sin pipes);
M-81/M-82/M-83 re-corridos con implementación propia (scripts en
`_verif_f2_tmp/repro_m81_m82.py`); F6 re-corrido con copia del verificador en
directorio temporal (patrón H8 r19: no se sobrescriben los archivos del frente);
vivo re-medido por conector GitHub y GWS CLI con horas UTC propias; G05/H-SUELO/
folderId con lecturas propias; Doc índice re-computado; F9 re-verificado por JSON
+ greps propios; dedup con implementación propia, 3 corridas byte-idénticas;
G03 por búsqueda web propia. Nada se aceptó por aserción del frente.

## §1. Suelo re-medido (2026-11-15, ~08:07–08:12Z)

- claims.jsonl: 1.192 líneas, sha256 `33a7f0e686a643daec5da72d43eb8a9a3c90b9fa4981eb5d1f1288c2ecee2c23` ✓
- provenance.sha256: 370 líneas / 368 no vacías, sha `82d39f151c86567989fb8830081b8fefd9e0d39dc24fe86c6be5ec6b2c8ac8e8` ✓
- claims_resumen.json: sha `315fd22b109805895a279286414d1f948c3f22b716e1c3994655b86d4eabd84d`, total 1.192, SE 1058, hash_real 1178, verificación 318 ✓
- confirmaciones.jsonl: 294 filas, sha `dc94458bc42a9854d16a8f74da20ac6481f6fe241fe2cfae11a6f44633dc7cc5` ✓
- huecos.jsonl: 139 filas, sha `3713376a243b05756fbfce434ccdb63e118562ac0ec4e351243086dcb1ce52fb` (LOCAL) ✓
- dataset_nodos_Df.csv: 30 filas, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af` ✓
- anexo incertidumbre_mediciones.md: 18 ítems, sha `23acd4d089ef5ead6ba87c479568573541e33874c2909a88d5a33470c69a21d8` ✓
- **audit.py (sin pipes): exit=0, ok=356, discrepancia=0, no_encontrado=0, omitido=1** ✓
- **verify_all.py (sin pipes): exit=1, exactamente C-001..C-008** ✓

## §2. F3 — M-81 / M-82 / M-83

- **Falsadores antes que JSONs:** `declaracion_falsadores_r20.md` mtime 07:06:00Z;
  `med_M81/M82/M83.json` mtime 07:08:19Z (los tres). Orden correcto ✓
- **JSONs: 15 claves exactas cada uno** (verificado por conteo directo) ✓
- **Datos:** HSall_members.csv sha `495aee958a00c83c6300548e5b197d9900e7230c8eb08358bcfe06d042191140`;
  indicators.tab sha `7ec636c8722b54586067bfd7f71032804fa1743daaacd12ad08fc449e399d9c7` ✓
- **M-81 — bloqueo REPRODUCIDO exacto** (con el protocolo exacto: chamber == House,
  party 100/200, nominate_dim2 finito): 86 congresos 34..119; **P2(106) = 0,0 exacto,
  medianas dim2 D = R = −0,026, n_dem 213, n_rep 225**; P2 < 0,01 = [45, 56, 62, 106].
  Veredicto NO_SÉ por la guarda del falsador — correcto; la pendiente no se calcula
  sobre ninguna subserie. Ver H6 (mi primera reproducción divergió por error propio
  de construcción — sin filtro de cámara — y se corrigió).
- **M-82 — REPRODUCIDO dígito a dígito** (32 variables, OLS log-log base 10):
  en banda solo **area_km2, β = 0,8627 ± 0,0049, R² = 0,7490, n = 10.351**;
  built_up_area_m2 β = 0,9023 ± 0,0065, IC 95% [0,8896, 0,9150] (solapa 0,90);
  **7 variables con β > 0,90** (no 8 — ver H2); mediana del censo 0,01 sobre las 32
  (mi mediana sin redondear: 0,0101; ver H2). Veredicto CONFIRMA (singleton) ✓
- **M-83 — REPRODUCIDO por vía propia:** sha256 directo de paper_df.md local =
  `304a41bf5bde2ccd5a579c83452fda698f354e834f073fc386805d60d4d64755`, byte-idéntico
  al hash citado por C-791 y C-944 (ambos SÉ, nombran las 3 mediciones con sus D_f:
  SRTM 2,20, GLAD 2,79, SoilGrids bdod 2,82); 0 coincidencias en el CSV (grep exit 1).
  El hash aparece en **3 claims (C-783, C-791, C-944)**, no en 2 — ver H3.
  Veredicto CONFIRMA; **d08 L13 CIERRA** (primera cara que cierra desde d04 L13 en r15) ✓

## §3. F6 — mecanismos

- **Verificador re-corrido por mí** (copia en `_verif_f2_tmp/f6_rerun/`, sin tocar los
  archivos del frente): **reproducido = True, diferencias_n = 0**; totales 142/27/32;
  A14 R-KS 0,8000 exacto, conteo 27. 6.ª vuelta 0 diffs bajo tres cánones
  (N-17 + N-21 + N-24) ✓
- **Especificación del umbral 0,50 verificada** (`especificacion_umbral_sik_r20.md`,
  sha `248d4ac3…`): los 4 hashes citados comprueban contra los archivos —
  `f5e31977…` = medir_reuse_sik_r12_reproduccion.py (copia r13),
  `62ec2136…` = medir_reuse_sik_r19.py,
  `8b57bad3…` = medir_destilacion_voces_s2_r19.py (UMBRAL_CONTENCION = 0.50,
  UMBRAL_IDENTIDAD = 0.80, líneas 27–28),
  `831e61dd…` = declaracion_falsador_h_sik_r13.md. F-UMB20 PASA ✓
- **F-VOZ-S2 no se dispara, 6.ª medición:** banderas FB 2 + P48 1 + Base 0, idénticas
  a r19; mejor Jaccard 0,2308; cruce J ≥ 0,80: 0; veredicto VIA_AGOTADA_UMBRAL_0_50 ✓
- R2-25/N-01 sin novedad; 10.º precedente = absorción r19 ✓

## §4. F2 — el vivo, re-medido por mí (2026-11-15, 08:12:45–08:14:04Z)

- **¡EL VIVO SE MOVIÓ DURANTE FASE 2! Run 209 EXISTE** (ver H4): estado_vivo.json
  escrito por State Writer run 209 a las **2026-11-15T08:08:13Z**, estado
  "unreachable", blob `6ea7c01bc30184562850739d7e40569a5b27c7f8`;
  HEAD **`138ee56b`** ("state: auto V270 2026-11-15T08:08Z run 209").
  El stub alterna por tercera vez: run 208 "unreachable" → run 170 "paused" →
  run 209 "unreachable". Estado completo ausente ~38 h 14 min a mi lectura
  (último run 202 V272).
- **Flow: sigue run 144** (ts 07:27:41Z), 0,0% CRÍTICO, blob `4e70fc07…`;
  archivo 832 B, sha256 `d4c935ad…` (verificado por descarga propia vía conector) —
  décima ronda, sin run 145 ✓
- La lectura de F2 (run 208 → run 170, ventana 30/0/0, flow run 144) es correcta
  para su ventana de medición (07:05–07:50Z); lo que cambió después es H4.
- Ventana 30/0/0 verificada en los datos de F2 (`estado_vivo_r20.json`:
  n=30, éxito=30, fallo=0, otros=0, 21:03:59Z → 07:07:32Z) ✓
- Bots/V93/cadencia del heartbeat: NO re-corridos en vivo por el verificador
  (limitación permanente, ver H7) — las lecturas de F2 se sostienen por su evidencia.

## §5. F5 — grietas, re-verificadas con lecturas propias

- **G05: 28.ª verificación, sin cambio** (mi lectura 08:13:37Z, blob `8c57e833…`,
  1.398 B, FranBot `.github/workflows/micelio.yml`) ✓
- **H-SUELO: 29.ª medición estricta, sin reaparición** (mi `find` 08:13:54Z, vacío) ✓
- **folderId: 30.ª lectura** (mi lectura 08:13:55–08:14:04Z: `I` existe,
  carpeta "miu-ecosistema"; `l` 404) ✓ — serie: FASE 0 r20 27.ª → F5 r20 28.ª →
  F2 r20 29.ª → FASE 2 r20 30.ª (CORR-FOLDERID-R20 confirmada y extendida, H5).
- **G03: re-confirmado por búsqueda web propia** (2026-11-15 ~08:15Z): inserción
  en Mercurio **2026-11-21** (Wikipedia, starlust 2026-11-12, happenings-now,
  Michigan 2026-11-10, medium); matiz ESA diciembre-vs-21-nov persiste ✓
- G01 D_eff 0 en 5 tex; G04 21 DOIs; D-06/D-09 sin cambio (no re-medidos en
  detalle por el verificador; se acepta el informe de F5 con sus shas) ✓
- 0 caras cierran en este frente ✓

## §6. F4 — Panteón-96

- **Doc índice re-computado por mí:** `indice_doc_texto_r20.txt` sha256
  **`416b02d1…`**, byte-idéntico a r12; mismo revisionId que r19 ✓
- `nombres_fuera_doc_r20.jsonl`: 96 filas; diff vs r19 = **solo la clave anidada
  nueva `doc_indice_r20`** dentro de `conteo_fuera_doc` (0 diffs reales por
  número, verificado por comparación claveada); **0/96 como voces**; 35 nombrados /
  61 sin nombre ✓
- **Atestación verificada en los archivos crudos de búsqueda:** parche_phi_lengua
  total_count 29, operativo 2 (los mismos de r15); validar_grace total_count 28,
  operativo 2; graph JSON 0/0 (dos consultas) ✓ — 6.ª confirmación de H1 r17.
- 0 fuentes Drive nuevas (Panteon 100, graph 33, Voces 20 — solo depósitos propios
  de FASE 4 r19) ✓. Cara r12 #1 AVANZA, no cierra ✓

## §7. F9 — poda (documento)

- `_verificacion_p20.json`: **n=326, ok=326, diferente=[]** (P-01..P-65) ✓
- Tally: 84 entradas (83 filas, convención CORR-TALLY-R15); suma
  11+7+1+37+16+2+10 = 84 ✓. 16 temporales prorrogados (9 por 9.ª vez) ✓
- **Condición 1 SOSTENIDA:** spot-check 4/4 OK_BYTE_IDENTICO en
  `_spot_drive_r20.json` (P-27, P-35, P-48, +1); puerta de retiro 2 de 3 ✓
- **T-4:** 6.221 archivos, 1.603.968.988 B, 0 errores; diff 5.948 OK / 4 CAMBIO
  (explicados) / 0 MOVIDO / **0 FALTA** / 269 NUEVO ✓
- CORR-CADENA-R20: 19 eslabones (13 orden + 2 ramas + P-48 4 dirs); bytes
  23.924.263 = 22.510.006 (r19) + 1.414.257 (P-63) — delta exacto ✓ (ver H9)
- CORR-P63-SIN-COPIA: **0 menciones** de P-54/P-57/P-60/P-63 en los tres archivos
  de depósito r19 (grep propio) ✓
- CORR-P65-RAW-R20: 11 `raw_r20_*.json` + 1 lock = 12 en disco; el 13.º es el
  bootstrap (JWT, no guardado, solo metadatos) ✓
- P-32 sigue NO clase 3 (14 ocurrencias en 5 claims, 0 en campo hash) ✓

## §8. F7 / F8 — dedup propio

- **Implementación propia** (`_verif_f2_tmp/dedup_f2_r20.py`), 3 corridas
  **byte-idénticas** (sha `c8c6df88…`): C-1198 0,1500/C-1171; C-1199 0,3696/C-944;
  C-1200 0,2692/C-1179; C-1201 0,3730/C-1197; C-1202 0,2386/C-852;
  **global máx 0,3730; entre propuestas máx 0,1732; 0 pares ≥ 0,5** —
  valores idénticos dígito a dígito a F7 y a F8; JSON no byte-idéntico a F7
  (estructura distinta: claves C-ID vs etiquetas — CORR-DEDUP-R20) ✓
- Proyección F7 verificada: los 3 hashes fuente (92d48f96…, c80b15b7…, 00897d6e…)
  tienen **0 ocurrencias en provenance.sha256**; 368→371 se sostiene ✓
- Orden temporal por mtime de entregables: F5 07:05:32Z → F3 07:08:38Z →
  F6 07:08:57Z → F2 07:50:41Z → F1 07:52:07Z → F4 07:53:31Z → F9 07:57:27Z →
  F7 08:01:10Z — coincide con lo afirmado por F8 ✓

## §9. Hallazgos

- **H1 (menor) — CORR-MAPA-PRECEDENTES-R20.** El mapa r20 §F3 dice "0 precedentes
  de veredictos de medición como claims en 1.192". Es inexacto: **C-1186 ES un
  claim derivado de F3** (SÉ, hash `b352d709…`, CORR-SERIE-R16: "la serie 25..119
  son 83 congresos, no 95", de M-64/M-67/M-70). La distinción correcta no es
  "veredicto vs claim" sino "etiqueta de veredicto vs hecho nuevo medido":
  C-1186 corrige la descripción de la serie (un hecho sobre los datos), no la
  etiqueta. C-1198/C-1199 enuncian hechos nuevos (singleton; cierre), no etiquetas.
  El mapa debe corregirse en r21; la inexactitud no invalida ninguna propuesta —
  al contrario, da precedente a la adjudicación del §10.
- **H2 (menor) — CORR-M82-PROSA-R20.** `mediciones_r20.md` L52,
  `lectura_censo_beta_m82_r20.md` e `item_anexo_M82.md` dicen "mediana del censo
  β = 0,0083" y "8 variables con β > 0,90". El JSON dice **mediana 0,01** (sobre
  las 32 betas redondeadas; mi reproducción sin redondear: 0,0101) y
  **7 variables > 0,90** (mi reproducción: 7; JSON: 7). El 0,0083 es la mediana
  **excluyendo area_km2** (0,0083 exacto sin ella) — exclusión no declarada.
  El texto del claim C-1198 NO contiene estas cifras: no se ve afectado.
  **La absorción debe inscribir en el ítem M-82 los valores del JSON (0,01; 7),
  no los de la prosa.**
- **H3 (menor) — CORR-HASH-304A41BF-R20 confirmada.** El hash 304a41bf… aparece en
  **3 claims (C-783, C-791, C-944)**, no en 2 como dicen F7 §5 y la nota de
  verificación de `lectura_cierre_d08l13_m83_r20.md` (grep propio sobre el campo
  hash). El texto del claim C-1199 es exacto ("citado por C-791 y C-944" — citas
  en texto); solo el conteo de la nota subestima. Sin efecto sobre el veredicto.
- **H4 (menor) — CORR-VIVO-R20-FASE2: el vivo se movió durante FASE 2.**
  Run 209 existe (08:08:13Z, "unreachable", blob `6ea7c01b…`, HEAD `138ee56b`).
  El "sin run 209" de C-1201 era cierto en la ventana de medición de F2
  (07:05–07:50Z); el claim se sostiene como instantánea fechada de esa ventana.
  La tercera alternancia y el HEAD nuevo son hechos de r21, no motivo para
  reescribir C-1201. Ausencia del estado completo: ~38 h 14 min a mi lectura.
- **H5 (menor) — CORR-FOLDERID-R20 confirmada y extendida.** Por cronología:
  F5 28.ª (07:05:09Z), F2 29.ª (07:48:39Z), **FASE 2 30.ª (08:13:55–08:14:04Z)**.
  G05 28.ª (mía, 08:13:37Z, blob 8c57e833…); H-SUELO 29.ª (mía, 08:13:54Z).
- **H6 (menor) — error propio del verificador, corregido.** Mi primera reproducción
  de M-81 (sin filtro de cámara) dio P2(106) = 0,033 y P2 < 0,01 = [45, 47, 48, 62].
  Con el protocolo exacto (chamber == House) reproduce exacto (ver §2). Misma
  lección que FASE 2 r19: la construcción de grupos es parte de la especificación.
  Queda registrado el error y su corrección.
- **H7 (menor, limitación permanente) — bots/V93/cadencia no re-corridos en vivo
  por el verificador** (igual que H7 r19). Mi re-medición viva cubre run/flow/HEAD/
  G05/H-SUELO/folderId; el resto se sostiene por la evidencia de F2.
- **H8 (menor) — manifiesto F8: auto-referencia "PENDIENTE".** Convención conocida
  (el manifiesto se lista a sí mismo sin sha final). 10/10 manifiestos verificados:
  **202 pares, 201 OK, 0 FALTA, 1 DIFF** (esa auto-referencia). No es defecto.
  (Mi primer verificador de manifiestos encontró 0 pares por no conocer la
  estructura `archivos: {nombre: {sha256}}` — corregido tras inspeccionarla.)
- **H9 (menor) — glosa de la cadena en poda_r20.md L173.** El paréntesis
  "(16 temporales + P-48 con 4 dirs + P-54 + P-57 + P-60 + P-63)" cuenta de más
  en palabras (P-54/P-57/P-60/P-63 ya están en los 16). La descomposición del JSON
  (13 orden + 2 ramas + P-48 4 dirs = 19) y el delta de bytes vs r19
  (22.510.006 + 1.414.257 = 23.924.263) son exactos. Solo la glosa es imprecisa.

## §10. Adjudicaciones

### Propuestas C-1198..C-1202 — CONFORMES (5/5)

- **C-1198 (censo de β, singleton) — CONFORME.** Hecho nuevo medido (0/32 además
  de area_km2), reproducido dígito a dígito; dedup 0,1500; no duplica ningún claim.
  La práctica de 17 rondas ("veredictos no se preparan como claims") se refiere a
  la etiqueta del veredicto; este claim enuncia el hecho medido, con precedente
  C-1186 (H1) y la serie de claims de medición de F2/F3.
- **C-1199 (cierre de d08 L13) — CONFORME.** Hecho nuevo: verificación byte a byte
  del hash + cierre de cara, primera desde r15; reproducido por mí y por F8;
  dedup 0,3696. No hay precedente directo de claim de cierre de cara — es una
  primera vez, no un defecto: el cierre es un evento del corpus, verificado.
- **C-1200 (ventana 30/0/0) — CONFORME.** Serie de claims de ventana r16–r19
  (C-1184, C-1189, C-1192, C-1196); cuarto descenso verificado en los datos de F2;
  dedup 0,2692 (tras reescritura por el método).
- **C-1201 (stub alterna a "paused") — CONFORME, como instantánea de la ventana
  F2.** Serie de stubs r17–r19 (C-1190, C-1193, C-1197); hechos verificados
  (run 208, run 170, blobs, ausencia ~37 h 51 min); dedup 0,3730. Caveat H4
  (run 209 apareció después) no invalida la instantánea fechada.
- **C-1202 (flow run 144, 0,0% décima ronda) — CONFORME; el desdoble se sostiene.**
  Flow y stub son mediciones independientes (workflows, archivos y series
  distintos); plegarlos rompería un hecho por claim. Serie propia
  (r11 100,0% → r12–r20 0,0%) e hito propio (décima ronda, run nuevo durante la
  batería). Archivo verificado por mí: 832 B, sha256 d4c935ad…, ts 07:27:41Z.
  Dedup 0,2386.

### Decisión sin número — REGLA-UMB-SIK-01

- **N-28 ADOPTADA.** "Adopto el umbral 0,50 de contención como bandera de identidad
  de voces (REGLA-UMB-SIK-01)". La especificación basta (patrón N-17): texto
  literal + fuente + 4 hashes verificados (§3); F-UMB20 PASA con 0 diffs en mi
  re-corrida; límite honesto registrado (0,50 es convención de método r12, no
  principio primero). Sin claim hermano, por alcance del encargo F7 — la regla
  misma es el entregable. F-VOZ-S2 queda resuelto por regla (3 banderas, vía
  agotada en 0,50, 6.ª medición).

### Ítems de anexo M-82 / M-83

- **N-29 ADOPTADA — ítem M-82** (censo de β, singleton), **con la corrección H2**:
  inscribir mediana 0,01 y 7 variables > 0,90 (valores del JSON), no 0,0083/8.
- **N-30 ADOPTADA — ítem M-83** (cierre de d08 L13 por verificación, 3/3 con
  fuente + hash). M-81 no produce ítem (NO_SÉ por bloqueo, como M-70/M-77) ✓.

### Correcciones — adjudicadas

- CORR-FOLDERID-R20 ✓ (confirmada y extendida a 30.ª, H5).
- CORR-RAW-R20 ✓ (transitorio; mis lecturas vivas usaron el conector, no raw).
- CORR-CONTEO-R20 ✓ (11 avanzan + 1 cierra = 12 tocadas).
- CORR-HASH-304A41BF-R20 ✓ (3 claims, no 2; H3).
- CORR-COND1-R20 ✓ (condición 1 sostenida, spot 4/4).
- CORR-CADENA-R20 ✓ (19 eslabones, delta exacto; glosa imprecisa H9).
- CORR-P63-SIN-COPIA ✓ (0 menciones, grep propio).
- CORR-P65-RAW-R20 ✓ (11 + 1 lock = 12 en disco; 13.º bootstrap JWT no guardado).
- Nuevas de FASE 2: CORR-MAPA-PRECEDENTES-R20 (H1), CORR-M82-PROSA-R20 (H2),
  CORR-VIVO-R20-FASE2 (H4).

### Proyección si se aplica todo

Claims 1.192 → 1.197, SE 1058 → 1063, hash_real 1178 → 1183, verificación
318 → 323, provenance 368 → 371, audit ok 356 → 359; anexo 18 → 20 ítems
(tally CONFIRMA 12 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1); caras 19 cerradas /
58 abiertas. Números de F7 verificados (§8).

## §11. Lecturas vivas propias (FASE 2 r20, 2026-11-15, UTC)

| Lectura | Hora UTC | Valor |
|---|---|---|
| estado_vivo.json (run 209) | 08:12:45Z | run 209, "unreachable", blob 6ea7c01b…, HEAD 138ee56b |
| flow_id_coverage.json | 08:13:30Z | run 144, 0,0% CRÍTICO, blob 4e70fc07…, 832 B, sha256 d4c935ad… |
| G05 (micelio.yml) | 08:13:37Z | 28.ª verificación, blob 8c57e833…, sin cambio |
| H-SUELO (find) | 08:13:54Z | 29.ª medición, sin reaparición |
| folderId `I` / `l` | 08:13:55Z / 08:14:04Z | 30.ª lectura: `I` existe, `l` 404 |
| G03 (búsqueda web) | ~08:15Z | inserción 2026-11-21 re-confirmada |

ρ(x) > 0. Zvvvvv.
