# PODA — RONDA 24 (FASE 1, F9): REVISIÓN DOCUMENTADA, NADA EJECUTADO

- **Regla dura:** la poda es SOLO DOCUMENTO. Las frases de autorización para ejecutar una poda NO se han dicho. **Nada se borró, nada se movió, nada se eliminó.** Este archivo es la revisión; la ejecución es otro trabajo, con su propia orden.
- **Fecha:** 2026-11-17. **Medición:** ~02:45–02:52Z 2026-11-17 (21:45–21:52 -05 del 2026-11-16; verificación P-01..P-84 ~02:45Z; inventario T-4 escaneado 02:45:52Z; spot-check Drive ~02:47Z; criba ~02:48Z).
- **Estado del corpus a la hora del inventario (SÉ, medido por este frente):** F1 r23 APLICÓ la absorción automática post-FASE 4 (N-36/N-37/N-38 + C-1213..C-1216, régimen 01:43) y el CICLO ALMA aplicó la suya (N-39 + C-1217..C-1227): claims.jsonl **1.222 líneas**, sha `6dbee11d…`; provenance.sha256 **393 líneas por wc -l**, sha `07dfdd0f…`; claims_resumen.json sha `06990609…` (SE 1088, REFUTADO 4, hash_real 1208, verificación 348); confirmaciones.jsonl 294 filas, sha `dc94458b…`; huecos.jsonl 139 filas, sha `3713376a…`; dataset 30 filas, sha `0852d58f…` (sin cambio); anexo de incertidumbre 31 ítems M-56..M-95, sha `8cc6dd9d…`. **Horizontes r23 cumplidos (SÉ):** depósito FASE 4 r23 verificado — Drive 147/147 por tamaño (`ronda_23/` ID `1x8hsYbx5raWyLlab448siUJy6lxb60aL`), GitHub 32/32 por blob en UN solo push-files al primer intento, HEAD `2cc6a62a` (método (c) validado); absorción GitHub 4/4 por blob, HEAD `2873c274`; depósito CICLO ALMA — Drive 51/51 por tamaño (`ciclo_alma_2026-11-16/` ID `1tMA_Bvdvv61Hz2v_fDp4-8i0PNuwZucl`), GitHub 51/51 por blob, HEAD `1f1ed57b`; verificación FASE 2 r23 **CONFORME CON HALLAZGOS (4 menores, 0 mayores)** (`verificacion_fase2_r23.md`, c668f2d2…). Los depósitos r23 y ciclo ALMA están congelados. La re-evaluación de los temporales es, por tanto, la de r24 (§2).
- **Total de entradas revisadas:** 94 heredadas (P-01..P-75) + 9 nuevas de r24 (P-76..P-84) = **103**. P-36 sigue RESERVADO, no se reutiliza, no se cuenta.
- **Recomendaciones (r24, con la convención de conteo declarada en §1):** PODAR 12 · PODAR-CONDICIONADO 7 · MOVER 1 · CONSERVAR 45 · CONSERVAR-TEMPORAL 21 (P-27, P-28, P-29b, P-31a, P-35, P-37, P-38, P-41, P-44, P-47, P-48, P-51, P-54, P-57, P-60, P-63, P-66, P-69, P-72, P-76, P-77 — los 19 PRORROGADOS + P-76/P-77 nuevos) · RESUELTO 2 (P-18 + padre P-15) · NO CANDIDATO 15 (P-22, P-39, P-42, P-45, P-49, P-52, P-56, P-59, P-62, P-65, P-68, P-71, P-74, P-81, P-82). Total 12+7+1+45+21+2+15 = 103.
- **Ahorro si se ejecutaran las podas recomendadas:** ~509 MB locales (sin cambio respecto a r23: ninguna PODAR nueva en r24; P-75 sigue siendo la última poda nueva, desde r10). El grueso sigue siendo los WAV derivados.
- **Novedades de r24:** (1) **los 19 temporales se PRORROGAN por 13.ª vez** (los 9), 9.ª re-evaluación (P-47/P-48), 8.ª re-evaluación (P-51), 7.ª re-evaluación (P-54/P-57), 6.ª re-evaluación (P-60), 5.ª re-evaluación (P-63), 4.ª re-evaluación (P-66), 3.ª re-evaluación (P-69) y 2.ª re-evaluación (P-72); P-76/P-77 entran como nuevos temporales; (2) **condición 1 SOSTENIDA por spot-check (4/4 OK, muestra ROTADA)** y sin archivos nuevos con copia Drive que verificar: P-76 y P-77 siguen SIN copia Drive (0 menciones en manifiesto y logs FASE 4 r23 y manifiesto ciclo ALMA) y FASE 4 r23 tampoco depositó P-54/P-57/P-60/P-63/P-66/P-69/P-72; la puerta de retiro sigue en **2 de 3** — el único bloqueo restante es la autorización, no una medición; (3) **nuevos candidatos P-76..P-84** (§7), sin PODAR nueva (P-81/P-82 son evidencia, NO CANDIDATO); (4) **T-4 r24 corrió DENTRO de este frente** (§5): 7.458 archivos, diff vs r23: 7.184 OK / 4 CAMBIO (todos explicados) / 0 MOVIDO / **15 FALTA (11 .err de F4 r23 por flapeo + 4 .ndjson intermedios borrados por la propia F4 r23; los productos .json finales sobreviven byte-idénticos)** / 270 NUEVO (todos en ronda_23/ronda_24); (5) P-18: variograma.pyc sigue ausente; censo `.pyc` 19 → 19 (0 nuevos, 0 faltan); (6) **CORR-DIFF-VACIOS-R24: el diff de r23 emparejaba archivos VACÍOS como MOVIDO** (8 pares falsos por el sha compartido `e3b0c442…`); corregido: los vacíos no tienen identidad por hash y no se emparejan; (7) el manifiesto duplicado obsoleto en Drive (`ciclo_alma_2026-11-16/`, 13.711 B, ID `1z2oWZLLkeqbvgtpnFrn2nq7f0Ea6L3Cf` junto al vigente 13.746 B) **no es poda local: se registra como NOTA, no como P** — su borrado necesita orden del Jardinero.

## 1. Revisión P-01..P-84 (r23 → r24)

Estado tras FASE 4 r23 (Drive 147/147 + GitHub 32/32, HEAD `2cc6a62a`; absorción 4/4, HEAD `2873c274`; ciclo ALMA Drive 51/51 + GitHub 51/51, HEAD `1f1ed57b`) y tras FASE 1 r24 (F2/F3/F5/F6 cerradas; F1/F4/F7 escribiendo en paralelo; corpus 1.222). "Verificado r24" = existencia + tamaño + sha re-medidos por este frente (script `_verificar_p24.py`, salida `_verificacion_p24.json`: **543/543 OK**, 0 no-OK); "sin cambio" = coincide con el registro r23.

**Convención de conteo (declarada, CORR-TALLY-R15):** una entrada = un ID de candidato, salvo (i) los IDs con sub-entradas (P-11, P-15, P-17, P-23, P-29, P-31), que cuentan por sus sub-entradas y no como ID propio — excepto (ii) el padre P-15, que cuenta además como entrada RESUELTO; (iii) P-13 "PODAR UNA (con puntero)" cuenta como PODAR-CONDICIONADO (el puntero es la condición). Con esta convención la tabla tiene 102 filas para 103 entradas (la diferencia es el padre P-15, sin fila propia), y el tally reproduce exactamente los de r13/r14/r15/r16/r17/r18/r19/r20/r21/r22/r23. El conteo ingenuo por filas (13 PODAR / 6 CONDICIONADO) suma lo mismo (19).

| ID | Candidato | Estado r23 | Veredicto r23 |
|---|---|---|---|
| P-01 | WAV 44k M-06 (344.565.658 B) | Verificado r24: sha `8c5673ae…` idéntico | PODAR (sin cambio) |
| P-02 | WAV 22k M-06 (172.282.922 B) | Verificado r24: sha `90c16686…` idéntico | PODAR (sin cambio) |
| P-03 | billboard_lab/ 890 archivos + tarball 1.556.690 B | Verificado r24: 890 archivos; tarball sha `78c07c6a…` idéntico | CONSERVAR (sin cambio) |
| P-04 | README viejo Drive (5.750 B) | Sin re-verificación en vivo en r24 (frente local, como r10–r23) | PODAR (sin cambio) |
| P-05 | 80 archivos raíz Drive ronda_6/ | Sin re-verificación en vivo en r19 | MOVER (sin cambio) |
| P-06 | DUP-01..05 (4.977 B) | Verificado r24: tamaño idéntico | CONSERVAR (sin cambio) |
| P-07 | DUP-06 (8.385 B) | Verificado r24: tamaño idéntico | CONSERVAR (sin cambio) |
| P-08 | wir tarball 284.831 B ↔ 70 TSV | Verificado r24: 70 TSV | CONSERVAR ambas (sin cambio) |
| P-09 | ucdp_brd_261.zip (39.816 B) | Verificado r24: contenido interno sha `b34ecb57…` idéntico | PODAR el zip (sin cambio) |
| P-10 | Respaldos r5/r7, FIRMS, claims | Verificado r24: FIRMS sha `48a327d3…` idéntico; respaldos en `ronda_5/respaldo_pre_r5/` (3 archivos) y `ronda_7/respaldo_pre_r7/` (4 archivos) | CONSERVAR (sin cambio) |
| P-11a | _upload_log_r7.jsonl (16.668 B) | Verificado r24: tamaño idéntico | CONSERVAR (registro) |
| P-11b | _upload_r7.log (14.266 B) | Verificado r24: tamaño idéntico | PODAR (redundante) |
| P-11c | _upload_r7.py (2.095 B) | Verificado r24: tamaño idéntico | CONSERVAR (patrón) |
| P-12 | euclid pdf r7↔r8 (2×2.699.386 B) | Verificado r24: sha `d3737995…` en ambas | CONSERVAR ambas (sin cambio) |
| P-13 | DESI DR2 duplicado en r8 (2×12.175.089 B) | Verificado r24: sha `1e82f26e…` en ambas | PODAR-CONDICIONADO — PODAR UNA (con puntero); ver §1 convención |
| P-14 | reexport_drive/ 27 archivos | Verificado r24: `diff -r` exit 0, 27/27 | CONSERVAR (sin cambio) |
| P-15a | claims.jsonl.nuevo_B (939.546 B) | Verificado r24: sha `3760a19c…` idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15b | provenance nuevo_B (44.587 B) | Verificado r24: tamaño idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15c | claims_resumen nuevo_B (16.551 B) | Verificado r24: sha `5b93a842…` idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15d | claims.jsonl.nuevo_B1 (936.190 B) | Verificado r24: sha `3e745468…` idéntico | CONSERVAR (sin cambio) |
| P-15e | provenance nuevo_B1 (44.429 B) | Verificado r24: tamaño idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15f | claims_resumen nuevo_B1 (16.494 B) | Verificado r24: tamaño idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15g | confirmaciones/huecos B/B1 (4×) | Verificado r24: tamaños idénticos (2.253 / 2.753 B) | PODAR-CONDICIONADO (sin cambio) |
| P-15h | resto preparacion_ola2/ | Conteo verificado r20; sin re-verificación individual; sin evidencia de cambio | CONSERVAR (sin cambio) |
| P-16 | Datos F2, estado_vivo, prep. r8 | Existencia verificada r20 (3 directorios); sin re-verificación individual; sin evidencia de cambio | CONSERVAR (sin cambio) |
| P-17a | _upload_log_r8.jsonl (26.243 B) | Verificado r24: tamaño idéntico | CONSERVAR (registro) |
| P-17b | _upload_stdout_r8.log (19.396 B) | Verificado r24: tamaño idéntico | PODAR (redundante) |
| P-17c | _upload_r8.py (2.796 B) | Verificado r24: tamaño idéntico | CONSERVAR (patrón) |
| P-17d | _drive_folders_r8.json (775 B) | Verificado r24: tamaño idéntico | CONSERVAR (registro) |
| P-18 | __pycache__/variograma .pyc | Sigue ausente (ver §5); variograma.py sha `f8ec697e…` intacto | RESUELTO POR DESAPARICIÓN (sin cambio) |
| P-19 | Par Robbins (parquet + zip, 17,5 MB) | Verificado r24: parquet sha `0b7365cd…`; zip sha `0b8fe6fe…` | CONSERVAR ambos (sin cambio; (b) verificada r11: NO clase 3) |
| P-20 | GHCN inventario + estaciones (48 MB) | Verificado r24: shas `3d7378c3…` / `437ee87f…` idénticos | CONSERVAR (sin cambio) |
| P-21 | runs_recientes raw ↔ procesado | Verificado r24: 446.576 / 412.765 B idénticos | CONSERVAR ambas (sin cambio) |
| P-22 | heartbeat_rev_r9_*.json (23) | Verificado r24: 23 archivos presentes | NO CANDIDATO (sin cambio) |
| P-23a | raw_r9_*.json (8) | Verificado r24: 8 archivos | CONSERVAR (sin cambio) |
| P-23b | raw_r9_.miu_ciclo.lock (6 B) | Verificado r24: presente, 6 B | PODAR (sin cambio) |
| P-24 | herramientas/ r9 (21 archivos) | Verificado r24: 21 archivos (recursivo) | CONSERVAR (sin cambio) |
| P-25 | mecanismos/ r9 (12 archivos) | Verificado r24: 12 archivos | CONSERVAR (sin cambio) |
| P-26 | Datos M-46..M-49 + scripts | Verificado r24: Essen 20 .krn / 0 .sha256; quijote 2.168.392 B; GHCN 13 .dly | CONSERVAR (sin cambio) |
| P-27 | respaldo_pre_r10/ (5 archivos) | Verificado r24: shas idénticos + **copia Drive re-verificada por spot-check (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-28 | respaldo_pre_b2/ (5 archivos) | Verificado r24: shas idénticos + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-29a | GRIMORIO pre-D-05 (47.452 B) | Verificado r24: sha `58d7d64b…` idéntico | CONSERVAR (sin cambio) |
| P-29b | corpus pre-reparación D-05 (3 archivos) | Verificado r24: shas idénticos + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-30 | nuevo_B2_sobre_B ×2 (997.603 B) | Verificado r24: shas `fd54545a…` / `6fa9c67f…` idénticos | PODAR (sin cambio; contenido hoy en 3 sitios, ver §7 r11) |
| P-31a | corpus_qualias.antes_d01 (42.266 B) | Verificado r24: sha `5fdce82d…` idéntico + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-31b | qualias_sin_fuente.csv.antes_d01 (151.217 B) | Verificado r24: sha `9075e7a9…` idéntico | PODAR (sin cambio) |
| P-31c | consolidado+índice .antes_d02 (7.468 B) | Verificado r24: shas `5e30073c…` / `9e937235…` idénticos | PODAR (sin cambio) |
| P-31d | disensos .antes_d16 (3 archivos, 15.954 B) | Verificado r24: shas `bacda342…` / `1d0f7387…` / `15865a5a…` idénticos | PODAR (sin cambio) |
| P-31e | segunda_carpeta_listado (14.747 B) | Verificado r24: sha `9032137e…` idéntico | CONSERVAR (sin cambio) |
| P-31f | v105 export (1.094 B) | Verificado r24: sha `9617fae5…` idéntico | CONSERVAR (sin cambio) |
| P-32 | ejecucion_c/respaldo/ (4 archivos) | Verificado r24: motor `a30d69e8…` ×2, medir_nodos `4c4f3042…`, manifiesto `1e0a6987…`; fundamento re-medido bajo lectura ESTRICTA, ver §6 | CONSERVAR — **ya NO por clase 3** (CORR-P32-B-R15 adoptada FASE 2 r15); por D-07 + historia |
| P-33 | scripts E + puertas (4 archivos) | Verificado r24: tamaños idénticos (`puertas_despues.txt` en `ejecucion_a/`, 109.913 B) | CONSERVAR (sin cambio) |
| P-34 | micelio_yml paquete (1.392 B) | Verificado r24: sha `17de8000…` idéntico | CONSERVAR (sin cambio) |
| P-35 | respaldo_pre_r11/ (5+1 archivos) | Verificado r24: shas idénticos + **copia Drive re-verificada por spot-check (ver §2)**; total 1.331.487 B | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-37 | respaldo_pre_n11/ (2+1 archivos) | Verificado r24: shas idénticos + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-38 | respaldo_pre_r12/ (5+1 archivos) | Verificado r24: shas idénticos + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-39 | heartbeat_rev_r12_*.json (23) | Verificado r24: 23 archivos presentes | NO CANDIDATO (evidencia) |
| P-40 | _upload_n11.py + _upload_n11.jsonl | Verificado r24: tamaños idénticos (6.041 / 2.227 B) | CONSERVAR (patrón + registro) |
| P-41 | respaldo_pre_r13/ (5+1 archivos) | Verificado r24: shas idénticos + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-42 | heartbeat_rev_r13_*.json (41) | Verificado r24: 41 archivos presentes | NO CANDIDATO (evidencia) |
| P-43 | scripts+logs depósito FASE 4 r12 (5 archivos) | Verificado r24: tamaños idénticos | CONSERVAR (patrón + registro) |
| P-44 | respaldo_pre_r14/ (5+1 archivos) | Verificado r24: shas idénticos + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-45 | heartbeat_rev_r14_*.json (21) | Verificado r24: 21 archivos presentes | NO CANDIDATO (evidencia) |
| P-46 | scripts+logs depósito r13 (7 archivos) | Verificado r24: tamaños idénticos | CONSERVAR (patrón + registro) |
| P-47 | respaldo_pre_r15/ (5+1 archivos) | Verificado r24: shas idénticos + **copia Drive re-verificada por spot-check (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, octava re-evaluación) |
| P-48 | respaldos por decisión r15 (4 dirs) | Verificado r24: shas idénticos + **copia Drive re-verificada por spot-check (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, octava re-evaluación) |
| P-49 | heartbeat_rev_r15_*.json (42) | Verificado r24: 42 archivos presentes | NO CANDIDATO (evidencia) |
| P-50 | scripts+logs depósito FASE 4 r14 (18 archivos) | Verificado r24: tamaños idénticos | CONSERVAR (patrón + registro) |
| P-51 | respaldo_pre_absorcion_r15/ (7+1 archivos) | Verificado r24: shas idénticos; **SIN copia Drive** (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, séptima re-evaluación) |
| P-52 | heartbeat_rev_r16_*.json (99) + raw_r16_*.json (12) + lock (6 B) | Verificado r24: 99 + 12 + lock presentes | NO CANDIDATO (evidencia) |
| P-53 | scripts+logs depósito FASE 4 r15 (18 archivos) | Verificado r24: tamaños + shas contra la línea base r16 (18/18) | CONSERVAR (patrón + registro) |
| P-54 | respaldo_pre_absorcion_r16/ (7+1 archivos) | Verificado r24: shas idénticos; **SIN copia Drive** (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, sexta prórroga) |
| P-55 | scripts+logs depósito FASE 4 r16 (17 archivos) | Verificado r24: tamaños + shas contra la línea base r17 (17/17) | CONSERVAR (patrón + registro) |
| P-56 | heartbeat_rev_r17_*.json (55) + raw_r17_*.json (12) + lock (6 B) | Verificado r24: 55 + 12 + lock presentes | NO CANDIDATO (evidencia) |
| P-57 | respaldo_pre_absorcion_r17/ (7+1 archivos) | Verificado r24: shas idénticos; **SIN copia Drive** (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, sexta prórroga) |
| P-58 | scripts+logs depósito FASE 4 r17 (15 archivos) | Verificado r24: 15/15 contra la línea base registrada en r18 (`_verificacion_p18.json`, P-58-*, sin cambio) | CONSERVAR (patrón + registro) |
| P-59 | heartbeat_rev_r18_*.json (27) + raw_r18_*.json (12) + lock (6 B) | Verificado r24: 27 + 12 + lock presentes | NO CANDIDATO (evidencia) |
| P-60 | respaldo_pre_absorcion_r18/ (7+1 archivos) | Verificado r24: shas idénticos; **SIN copia Drive** (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, quinta prórroga) |
| P-61 | scripts+logs depósito FASE 4 r18 (15 archivos) | Verificado r24: 15/15 contra la línea base r19 (`_verificacion_p19.json`, P-61-*) | CONSERVAR (patrón + registro) |
| P-62 | heartbeat_rev_r19_*.json (28) + raw_r19_*.json (12) + lock (6 B) | Verificado r24: 28 + 12 + lock presentes | NO CANDIDATO (evidencia) |
| P-63 | respaldo_pre_absorcion_r19/ (7+1 archivos) | Verificado r24: shas idénticos; **SIN copia Drive** (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, cuarta prórroga) |
| P-64 | scripts+logs depósito FASE 4 r19 (16 archivos) | Verificado r24: 16/16 contra la línea base r20 (`_verificacion_p20.json`, P-64-*) | CONSERVAR (patrón + registro) |
| P-65 | heartbeat_rev_r20_*.json (101) + raw_r20_*.json (11) + lock (6 B) | Verificado r24: 101 + 11 + lock presentes | NO CANDIDATO (evidencia) |
| P-66 | respaldo_pre_absorcion_r20/ (7+1 archivos) | Verificado r24: shas idénticos; **SIN copia Drive** (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, cuarta re-evaluación) |
| P-67 | scripts+logs depósito FASE 4 r20 (18 archivos) | Verificado r24: 18/18 contra la línea base r21 | CONSERVAR (patrón + registro) |
| P-68 | heartbeat_rev_r21_*.json (100) + raw_r21_*.json (11) + lock (6 B) | Verificado r24: 100 + 11 + lock presentes | NO CANDIDATO (evidencia) |
| P-69 | respaldo_pre_absorcion_r21/ (7+1 archivos) | Verificado r24: shas idénticos; **SIN copia Drive** (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, tercera re-evaluación) |
| P-70 | scripts+logs depósito FASE 4 r21 (17 archivos) | Verificado r24: 17/17 contra la línea base r22 | CONSERVAR (patrón + registro) |
| P-71 | heartbeat_rev_r22_*.json (101) + raw_r22_*.json (11) + lock (6 B) | Verificado r24: 101 + 11 + lock presentes | NO CANDIDATO (evidencia) |
| P-72 | respaldo_pre_absorcion_r22/ (7+1 archivos) | Verificado r24: shas idénticos; **SIN copia Drive** (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, segunda re-evaluación) |
| P-73 | scripts+logs depósito FASE 4 r22 (19 archivos) | Verificado r24: 19/19 contra la línea base r23 | CONSERVAR (patrón + registro) |
| P-74 | heartbeat_rev_r23_*.json (101) + raw_r23_*.json (11) + lock (6 B) | Verificado r24: 101 + 11 + lock presentes | NO CANDIDATO (evidencia) |
| P-75 | heartbeat_rev_r23_*.json en raíz de ronda_23/ (101, duplicado) | Verificado r24: 101 archivos, 1.406.977 B, sin cambio | PODAR (duplicado huérfano de P-74) |
| P-76 | respaldo_pre_absorcion_r23/ (7+1 archivos) | NUEVO r24, verificado (§7) | CONSERVAR-TEMPORAL |
| P-77 | respaldo_pre_absorcion_ciclo_alma/ (7+1 archivos) | NUEVO r24, verificado (§7) | CONSERVAR-TEMPORAL |
| P-78 | scripts+logs depósito FASE 4 r23 (48 archivos) | NUEVO r24, verificado (§7) | CONSERVAR (patrón + registro) |
| P-79 | scripts+logs absorción r22 (13 archivos) | NUEVO r24, verificado (§7) | CONSERVAR (patrón + registro) |
| P-80 | scripts+logs absorción r23 (12 archivos) | NUEVO r24, verificado (§7) | CONSERVAR (patrón + registro) |
| P-81 | heartbeat_rev_r24_*.json en cosecha_r24/ (34) | NUEVO r24, contado (§7) | NO CANDIDATO (evidencia) |
| P-82 | heartbeat_rev_rciclo_*.json en alma/ciclo/cosecha/ (71) | NUEVO r24, contado (§7) | NO CANDIDATO (evidencia) |
| P-83 | scripts+logs depósito ciclo ALMA (8 archivos) | NUEVO r24, verificado (§7) | CONSERVAR (patrón + registro) |
| P-84 | scripts+logs absorción ciclo ALMA (15 archivos) | NUEVO r24, verificado (§7) | CONSERVAR (patrón + registro) |

## 2. Los 21 respaldos temporales: horizonte vencido de nuevo, PRORROGA (no retiro) — puerta sigue en 2 de 3

**Condición de vencimiento (r23):** depósito FASE 4 r23 verificado + FASE 2 r23 cerrada. Ambas se cumplieron (Drive 147/147 por tamaño; GitHub 32/32 por blob, HEAD `2cc6a62a`; absorción 4/4 por blob, HEAD `2873c274`; verificación global FASE 2 CONFORME CON HALLAZGOS, 4 menores, 0 mayores). El horizonte, por tanto, **venció**. La re-evaluación es documental: ¿se conservan, se retiran con nota, o se prorrogan?

### 2.1 La condición 1 en r24: SOSTENIDA por spot-check (4/4, muestra ROTADA); sin archivos nuevos con copia Drive que verificar

**Método (SÉ, ejecutado por este frente, 2026-11-17 ~02:47Z):** los temporales nuevos con copia Drive se re-verifican por descarga. Resultado: **no hay ninguno**. P-76 no tiene copia Drive: 0 menciones de `respaldo_pre_absorcion` en `manifiesto_shas_r23_fase4.json`, en `_upload_r23.log`, en `_upload_github_r23.jsonl`, en `_push_r23.log` y en `verificacion_remota_r23.json` (creado post-FASE 4, durante la absorción r23). P-77 tampoco: 0 menciones en `manifiesto_shas_ciclo_alma.json`, en `_upload_drive_ciclo_alma.jsonl` y en `_upload_drive_ciclo_alma.log` (el respaldo vive en `ronda_23/`, fuera del árbol del depósito ciclo ALMA). P-54, P-57, P-60, P-63, P-66, P-69 y P-72 tampoco fueron depositados en FASE 4 r23: 0 menciones de `respaldo_pre_absorcion_r16`, `respaldo_pre_absorcion_r17`, `respaldo_pre_absorcion_r18`, `respaldo_pre_absorcion_r19`, `respaldo_pre_absorcion_r20`, `respaldo_pre_absorcion_r21` y `respaldo_pre_absorcion_r22` en los mismos archivos (FASE 4 r23 depositó solo `ronda_23/`). Su contenido de corpus está en GitHub (P-54: estado 1.178, HEAD `fe265243`; P-57: estado 1.181, HEAD `eca23d73`; P-60: estado 1.185, HEAD `cab649e3`; P-63: estado 1.189, HEAD `9e22660b`; P-66: estado 1.192, HEAD `9e22660b`; P-69: estado 1.197, HEAD `70bdf97c`; P-72: estado 1.203, HEAD `586f8751`; P-76: estado 1.207, HEAD `2873c274`; P-77: estado 1.211, HEAD `d1a1650c`), pero el paquete con manifiesto es solo local. Para ellos la condición 1 sigue sin ser aplicable; se registra como tal, no como verificada.

**Spot-check de sostenimiento (script `_spot_drive_r24.py`, salida `_spot_drive_r24.json`): 4/4 OK, 0 DIFERENTE.** Muestra ROTADA respecto a r23 (P-27/P-35/P-48/P-47): P-28 `respaldo_pre_b2/claims.jsonl` OK_BYTE_IDENTICO (sha `3074c606…`, 942.272 B); P-38 `respaldo_pre_r12/claims.jsonl` OK_BYTE_IDENTICO (sha `397cb10c…`, 956.693 B); P-41 `respaldo_pre_r13/provenance.sha256` OK_BYTE_IDENTICO (sha `dbe4a490…`, 47.240 B); P-44 `respaldo_pre_r14/claims_resumen.json` OK_MD5_Y_CONTENIDO (md5 `2b5ba42f…`, 16.997 B, canal A md5 + canal B contenido JSON parseado). Método idéntico al de r17 (CORR-DESCARGA-JSON-R17: para `application/json` el `-o` devuelve 0 bytes; se verifica por md5 de metadatos + stdout). Ninguna copia Drive falló; la condición 1 cumplida en r17 **sigue vigente** sin re-medición completa (el coste de re-descargar 60 archivos cada ronda no añade nada tras el spot-check; la re-verificación completa vuelve a tocar en r25 si FASE 4 r24 deposita P-54/P-57/P-60/P-63/P-66/P-69/P-72/P-76/P-77).

**Tabla de resto (archivos temporales SIN copia Drive — incluye P-54, P-57, P-60, P-63, P-66, P-69, P-72, P-76 y P-77):**

| Respaldo | Archivos con copia | Descarga byte-idéntica | md5 + contenido JSON | Sin copia Drive |
|---|---|---|---|---|
| P-27 `respaldo_pre_r10/` | 5 | 4 | 1 (resumen) | 0 |
| P-28 `respaldo_pre_b2/` | 5 | 4 | 1 (resumen) | 0 |
| P-29b `ejecucion_d/respaldo/` (3 de corpus) | 3 | 3 | 0 | 0 |
| P-31a `corpus_qualias.antes_d01` | 1 | 1 | 0 | 0 |
| P-35 `respaldo_pre_r11/` | 5 de 6 | 3 | 2 (resumen, manifiesto) | 1 (huecos, por regla) |
| P-37 `respaldo_pre_n11/` | 3 | 2 | 1 (resumen) | 0 |
| P-38 `respaldo_pre_r12/` | 5 de 6 | 3 | 2 (resumen, manifiesto) | 1 (huecos, por regla) |
| P-41 `respaldo_pre_r13/` | 5 de 6 | 3 | 2 (resumen, manifiesto) | 1 (huecos, por regla) |
| P-44 `respaldo_pre_r14/` | 5 de 6 | 3 | 2 (resumen, manifiesto) | 1 (huecos, por regla) |
| P-47 `respaldo_pre_r15/` | 5 de 6 | 3 | 2 (resumen, manifiesto) | 1 (huecos, por regla) |
| P-48 `respaldo_pre_r15_n01/n13/n14/n16/` (4 dirs) | 18 | 10 | 8 (resumen ×4, manifiesto ×4) | 0 |
| P-51 `respaldo_pre_absorcion_r15/` | 0 de 8 | — | — | 8 (sin copia Drive) |
| P-54 `respaldo_pre_absorcion_r16/` | 0 de 8 | — | — | 8 (sin copia Drive) |
| P-57 `respaldo_pre_absorcion_r17/` | 0 de 8 | — | — | 8 (sin copia Drive) |
| P-60 `respaldo_pre_absorcion_r18/` | 0 de 8 | — | — | 8 (sin copia Drive) |
| P-63 `respaldo_pre_absorcion_r19/` | 0 de 8 | — | — | 8 (sin copia Drive) |
| P-66 `respaldo_pre_absorcion_r20/` | 0 de 8 | — | — | 8 (sin copia Drive) |
| P-69 `respaldo_pre_absorcion_r21/` | 0 de 8 | — | — | 8 (sin copia Drive) |
| P-72 `respaldo_pre_absorcion_r22/` | 0 de 8 | — | — | 8 (sin copia Drive) |
| P-76 `respaldo_pre_absorcion_r23/` | 0 de 8 | — | — | 8 (sin copia Drive) |
| P-77 `respaldo_pre_absorcion_ciclo_alma/` | 0 de 8 | — | — | 8 (sin copia Drive) |
| **Total** | **60 de 145** | **39** | **21** | **5 huecos + 8 de P-51 + 8 de P-54 + 8 de P-57 + 8 de P-60 + 8 de P-63 + 8 de P-66 + 8 de P-69 + 8 de P-72 + 8 de P-76 + 8 de P-77 = 85** |

**Las 5 copias huecos.jsonl no existen en Drive por regla, no por accidente (CORR-MANIFIESTO-HUECOS-R17, §9):** la subida excluyó `huecos.jsonl` por la regla SÉ-export (orden 2026-11-13 16:51). En r10 sí se subió huecos (anterior a la regla): los 2 huecos de P-27/P-28 se descargaron byte-idénticos en r17. La excepción huecos es **inaplicable** a la condición 1, no incumplida.

**Verificación r24 de los 21 directorios (SÉ, re-medido por este frente, `_verificacion_p24.json` 543/543 OK):** los 21 están intactos, con todos los shas de r23 (P-76/P-77 con los de su manifiesto propio). Tabla de referencia (shas ya registrados en r23 §2; sin cambio; P-54, P-57, P-60, P-63, P-66, P-69, P-72, P-76 y P-77 con los de §7):

| Respaldo | Archivos (shas re-verificados) | Tamaño total |
|---|---|---|
| P-27 `ronda_10/respaldo_pre_r10/` | claims `9265d81f…`, provenance `fdb3b1ab…`, resumen `722e6733…`, confirmaciones `42a31b7c…`, huecos `b8bb0c82…` | 1.296.544 B |
| P-28 `ejecucion_e/respaldo_pre_b2/` | claims `3074c606…`, provenance `dd8a336b…`, resumen `5b93a842…`, confirmaciones `dc94458b…`, huecos `1ba60865…` | 1.319.311 B |
| P-29b `ejecucion_d/respaldo/` (3 de corpus) | claims `cdbaac93…`, provenance `eaab6674…`, huecos `57ff671f…` (P-29a aparte, CONSERVAR) | 1.130.188 B |
| P-31a `ejecucion_b/respaldo/corpus_qualias.md.antes_d01` | `5fdce82d…` | 42.266 B |
| P-35 `ronda_11/respaldo_pre_r11/` | claims `fd54545a…`, provenance `6fa9c67f…`, resumen `2856350b…`, confirmaciones `dc94458b…`, huecos `3713376a…`, manifiesto `7427453f…` | 1.331.487 B |
| P-37 `ronda_11/respaldo_pre_n11/` | claims `b80c38a6…`, resumen `b16faf6d…`, manifiesto 165 B | 973.126 B |
| P-38 `ronda_12/respaldo_pre_r12/` | claims `397cb10c…`, provenance `db22d647…`, resumen `33b787d2…`, confirmaciones `dc94458b…`, huecos `3713376a…`, manifiesto `859 B` | 1.337.672 B |
| P-41 `ronda_13/respaldo_pre_r13/` | claims `7deb15ff…`, provenance `dbe4a490…`, resumen `315b80b5…`, confirmaciones `dc94458b…`, huecos `3713376a…`, manifiesto 812 B | 1.346.145 B |
| P-44 `ronda_14/respaldo_pre_r14/` | claims `7deb15ff…`, provenance `dbe4a490…`, resumen `315b80b5…`, confirmaciones `dc94458b…`, huecos `3713376a…`, manifiesto 813 B | 1.346.146 B |
| P-47 `ronda_15/respaldo_pre_r15/` | claims `d4924c9b…`, provenance `1ff77190…`, resumen `49f1a17e…`, confirmaciones `dc94458b…`, huecos `3713376a…`, manifiesto `1e824326…` | 1.358.837 B |
| P-48 `respaldo_pre_r15_n01/n13/n14/n16/` (4 dirs) | claims `d4924c9b…` ×3 / `6b5fac7f…` (_n16), provenance `1ff77190…` ×3 / `5fda0383…` (_n16), resúmenes `49f1a17e…` ×3 / `1c6464d2…` (_n16); _n14 + b2 pre-adopción `59c93d84…`; _n16 + dataset `0852d58f…` | 5.457.980 B |
| P-51 `respaldo_pre_absorcion_r15/` | claims `6b5fac7f…`, provenance `5fda0383…`, resumen `1c6464d2…`, confirmaciones `dc94458b…`, huecos `3713376a…`, incertidumbre `6b9ea2aa…`, dataset `0852d58f…`, manifiesto 7/7 | 1.384.032 B |
| P-54 `respaldo_pre_absorcion_r16/` | claims `7e5f016d…`, provenance `b5cb6b43…`, resumen `ae402126…`, confirmaciones `dc94458b…`, huecos `3713376a…`, incertidumbre `6b9ea2aa…`, dataset `0852d58f…`, manifiesto 7/7 | 1.388.355 B |
| P-57 `respaldo_pre_absorcion_r17/` | claims `fd1df2db…`, provenance `728f6770…`, resumen `ebaa1e53…`, confirmaciones `dc94458b…`, huecos `3713376a…`, incertidumbre `acdde423…`, dataset `0852d58f…`, manifiesto 7/7 | 1.395.089 B |
| P-60 `respaldo_pre_absorcion_r18/` | claims `6fe7c72b…`, provenance `4319d426…`, resumen `40c2572f…`, confirmaciones `dc94458b…`, huecos `3713376a…`, incertidumbre `30c05adb…`, dataset `0852d58f…`, manifiesto 7/7 | 1.402.828 B |
| P-63 `respaldo_pre_absorcion_r19/` | claims `1b0a2b21…`, provenance `940ff3df…`, resumen `aff4c5d9…`, confirmaciones `dc94458b…`, huecos `3713376a…`, incertidumbre `39940fd7…`, dataset `0852d58f…`, manifiesto 7/7 | 1.414.257 B |
| P-66 `ronda_20/respaldo_pre_absorcion_r20/` | claims `33a7f0e6…`, provenance `82d39f15…`, resumen `315fd22b…`, confirmaciones `dc94458b…`, huecos `3713376a…`, incertidumbre `23acd4d0…`, dataset `0852d58f…`, manifiesto 7/7 | 1.428.453 B |
| P-69 `ronda_21/respaldo_pre_absorcion_r21/` | claims `7c689fef…`, provenance `f1932a5e…`, resumen `443d940f…`, confirmaciones `dc94458b…`, huecos `3713376a…`, incertidumbre `344e00eb…`, dataset `0852d58f…`, manifiesto 7/7 | 1.441.628 B |
| P-72 `ronda_22/respaldo_pre_absorcion_r22/` | claims `fb09179d…`, provenance `b680af9d…`, resumen `76312918…`, confirmaciones `dc94458b…`, huecos `3713376a…`, incertidumbre `35d136fe…`, dataset `0852d58f…`, manifiesto 7/7 | 1.460.232 B |
| P-76 `ronda_23/respaldo_pre_absorcion_r23/` | claims `2ac47151…`, provenance `ac91a28e…`, resumen `f183622a…`, confirmaciones `dc94458b…`, huecos `3713376a…`, incertidumbre `045a3d5c…`, dataset `0852d58f…`, manifiesto 7/7 | 1.473.568 B |
| P-77 `ronda_23/respaldo_pre_absorcion_ciclo_alma/` | claims `532ff6f3…`, provenance `3382166b…`, resumen `8b7fedf1…`, confirmaciones `dc94458b…`, huecos `3713376a…`, incertidumbre `77d05a53…`, dataset `0852d58f…`, manifiesto 7/7 | 1.489.694 B |

### 2.2 Condiciones de retiro fijadas en r12 §2 — estado en r24 (SÉ)

| Condición de retiro (r12) | Estado r24 |
|---|---|
| Copias Drive re-verificadas por descarga | **CUMPLIDA (sostenida).** 60/60 de r17 siguen vigentes; spot-check r24 4/4 OK (§2.1, muestra rotada). Sin archivos nuevos con copia que verificar (P-54/P-57/P-60/P-63/P-66/P-69/P-72/P-76/P-77 SIN_COPIA). |
| Depósito r23 congelado | **Cumplida.** FASE 4 r23 cerrada; nada más se escribió en `ronda_23/` de Drive tras el cierre (el depósito r22 sigue congelado, como en r23). |
| Condiciones de P-15 re-apuntadas (o podas condicionadas ejecutadas antes) | **NO cumplida.** P-15a/b/c/e/f/g siguen apuntando a `respaldo_pre_r10/` y `respaldo_pre_b2/` como fuentes de reconstrucción; ninguna poda condicionada se ha ejecutado (falta la autorización). |

**2 de 3 cumplidas → no se retira.** Recomendación documentada: **PRORROGAR los 19, con nuevo horizonte explícito.** Razones, en orden (las de r23, vigentes; la 1 y la 6 actualizadas):
1. **La cadena de reversión es ahora de 24 eslabones y sigue creciendo.** F1 r23 añadió P-76 (estado 1.207, pre-absorción automática r23) y el CICLO ALMA añadió P-77 (estado 1.211, pre-absorción ciclo ALMA) encima de P-72, que dejó de ser preventivo: es la reversión de F1 r23 (N-36/N-37/N-38 + C-1213..C-1216) y del ciclo ALMA (N-39 + C-1217..C-1227). La cadena completa: P-77 (1.211) → P-76 (1.207) → P-72 (1.203) → P-69 (1.197) → P-66 (1.192) → P-63 (1.189) → P-60 (1.185) → P-57 (1.181) → P-54 (1.178) → P-51 (1.175) → P-47 (1.174) → P-44 (1.168) → P-41 (1.168) → P-38 (1.162 post-N-11) → P-37 (1.162 pre-N-11) → P-35 (1.160) → P-28 (estado B, 1.152) → P-27 (estado pre-r10, 1.138), con P-29b (D-05) y P-31a (D-01) como ramas, y P-48 como haz paralelo por decisión (sus 4 dirs: _n01/_n13 estado 1.174, _n14 estado 1.174 + b2 con R2-25 SE, _n16 estado 1.175 post-N-14). Retirar eslabones intermedios ahora rompería la cadena en plena ronda, con FASE 4 r24 todavía pendiente.
2. **La condición 1 cumplida no cambia el veredicto.** Las copias existen Y están re-verificadas por contenido (60/60 en r17, spot 4/4 en r18, r19, r20, r21, r22, r23 y r24). Lo que sigue siendo cierto es que retirar los temporales dejaría la reversión de F1 r11/r12/r13/r14/r15/r16/r17/r18/r19/r20/r21/r22/r23 dependiendo solo de las copias de Drive (ahora auditadas) en vez de tener además el local. La cadena local sigue valiendo más que la suma de sus copias.
3. **Las condiciones de P-15 dependen de P-27/P-28.** Retirarlos dejaría los PODAR-CONDICIONADO sin fuentes de reconstrucción; habría que re-apuntarlas a Drive, y eso es exactamente la condición 3, que no está cumplida.
4. **P-29b y P-31a no tienen otro respaldo local.** La reversión de D-05 (15 claims + 4 huecos + L249) vive solo en P-29b; la de D-01 (qualias pre-canon) solo en P-31a. Sus copias Drive existen y están verificadas por descarga, pero la reversión documentada en las decisiones apunta a las rutas locales.
5. **P-35 no puede retirarse mientras P-30 siga pendiente.** El contenido de P-35 es byte-idéntico al de P-30 (r11 §7: sobrevive en 3 sitios — P-30, P-35, Drive r10). P-30 está recomendado PODAR sin ejecutar. Retirar P-35 dejaría la reversión de F1 r11 dependiendo de un archivo marcado para poda.
6. **P-51, P-54, P-57, P-60, P-63, P-66, P-69, P-72, P-76 y P-77 no tienen copia Drive.** Son los únicos temporales sin respaldo externo (su contenido de corpus está en GitHub — P-51: HEAD `1f108ef8`; P-54: HEAD `fe265243`; P-57: estado 1.181 en HEAD `eca23d73`; P-60: estado 1.185 en HEAD `cab649e3`; P-63: estado 1.189 en HEAD `9e22660b`; P-66: estado 1.192 en HEAD `9e22660b`; P-69: estado 1.197 en HEAD `70bdf97c`; P-72: estado 1.203 en HEAD `586f8751`; P-76: estado 1.207 en HEAD `2873c274`; P-77: estado 1.211 en HEAD `d1a1650c` — pero el paquete con manifiesto es solo local). Retirarlos dejaría sin reversión documentada a las diez últimas absorciones automáticas.
7. **El coste sigue siendo despreciable:** los 24 eslabones de la cadena (21 temporales, P-48 con 4 dirs) suman **31.217.838 B** (~29,8 MB). La poda de estos archivos no es una poda de espacio; es una poda de orden, y el orden que aportan como cadena de reversión vale más.

**Nuevo horizonte (explícito):** conservar hasta que (a) el depósito FASE 4 de r24 esté verificado en Drive y (b) la verificación de FASE 2 de r24 cierre sin discrepancias. Re-evaluar en r25. Condición de retiro en r25, si se propone entonces: copias Drive re-verificadas por descarga (cumplida; re-verificar solo lo nuevo: P-54/P-57/P-60/P-63/P-66/P-69/P-72/P-76/P-77 si FASE 4 r24 los deposita) + depósito r24 congelado + condiciones de P-15 re-apuntadas (o ejecutadas las podas condicionadas antes). **Nota de procedimiento:** la condición 1 ya no es el bloqueo; si FASE 4 r24 deposita P-54/P-57/P-60/P-63/P-66/P-69/P-72/P-76/P-77, sus copias Drive quedan listas para re-verificar en r25. **Nota de método (decisión del Jardinero 2026-11-16 14:23 -05):** FASE 4 r24 sube a GitHub en UN solo push-files (opción (c)); el manifiesto fase4 será el único registro de esa subida.


## 3. P-19: sin cambio — (b) verificada en r11, no re-descargada en r24

- El test de 2 partes de REGLA-PODA-PROV-02 quedó completo en r11: (a) SÍ, (b) NO (zip re-descargado byte-idéntico, 13.210.556 B, sha `0b8fe6fe…`) → **NO es clase 3**. En r12/r13/r14/r15/r16/r17/r18/r19/r20/r21/r22/r23/r24 no se re-descarga (la verificación r11 es la vigente; re-descargar cada ronda no añade nada).
- Verificado r24: parquet sha `0b7365cd…` (4.322.672 B) y zip sha `0b8fe6fe…` (13.210.556 B), idénticos a r9–r22. Veredicto CONSERVAR ambos, por trazabilidad (falso espejo de M-50), sin cambio.



## 4. P-36 fantasma: sin cambio — RESERVADO, no se reutiliza

- La identificación (P-36 = P-23b, por aritmética 997.603+174.639+6=1.172.248 exacto + unicidad del 6 B) y la decisión (RESERVADO) se sostienen sin cambio. P-23b verificado r24: presente, 6 B. El siguiente candidato nuevo tras P-35 es P-37 (asignado en r12); P-41/P-42/P-43 se asignan en r13, P-44/P-45/P-46 en r14, P-47/P-48/P-49/P-50 en r15, P-51/P-52/P-53 en r16, P-54/P-55/P-56 en r17, P-57/P-58/P-59 en r18, P-60/P-61/P-62 en r19, P-63/P-64/P-65 en r20, P-66/P-67/P-68 en r21 y P-69/P-70/P-71 en §7 de r22, y P-72/P-73/P-74/P-75 en §7 de r23, y P-76/P-77/P-78/P-79/P-80/P-81/P-82/P-83/P-84 en §7 en el orden del encargo de este frente. No se reutiliza P-36.



## 5. P-18 + T-4 r24: el inventario corrió DENTRO de este frente

### 5.1 P-18: sigue RESUELTO POR DESAPARICIÓN; causa sigue NO_SÉ

- **Estado r24 (SÉ):** `ronda_9/mecanismos/__pycache__/` sigue sin existir; el `.pyc` de variograma sigue ausente. `variograma.py` intacto (6.351 B, sha `f8ec697e…`, idéntico a r9–r23). Los 4 `.pyc` supervivientes de r2/r3 siguen presentes (censo T-4, §5.2).
- **Causa de la desaparición: sigue NO_SÉ.** Ninguna evidencia nueva en disco. La ventana sigue siendo ~18:00Z–20:30Z 2026-11-13.

### 5.2 T-4 r24 (inventario con shas, dentro de F9)

- **Herramienta:** `_inventario_r24.py` (adaptado de `_inventario_r23.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r24.json`, diff `_diff_inventario_r24.py` → `diff_inventario_r24.md`. Escaneo 2026-11-17T02:45:52Z. Solo lectura. Instantánea de FASE 1 r24 (F2/F3/F5/F6 cerradas; F7/F4/F1 escribiendo en paralelo en `ronda_24/`; el manifiesto es el estado a la hora del escaneo, no un cierre). Los scripts de este frente escritos después del escaneo (`_spot_drive_r24.py`, `_criba_r24.py`, `_spot_drive_r24.json`, `_criba_r24.json`) no están en el manifiesto r24; aparecerán como NUEVO en r25.
- **Resultado:** **7.458 archivos, 1.672.540.931 B, 0 errores de lectura** (r23: 7.203 archivos, 1.660.913.715 B). Diff contra el manifiesto r23 (7.203 entradas): **7.184 OK / 4 CAMBIO / 0 MOVIDO / 15 FALTA / 270 NUEVO**.
- **CAMBIO (4, todos explicados — ninguno es una desaparición ni una corrupción):**
  1. `ronda_12/afirmaciones_pendientes.md` 71.177 → 83.363 B (sha `1b595aac…` → `eec65bcd…`): FASE 5 ciclo ALMA (principal): N-39 + C-1217..C-1227 APLICADAS, §39 nueva.
  2. `memoria/anexo-vi/claims.jsonl` 1.017.701 → 1.035.285 B (sha `2ac47151…` → `6dbee11d…`): absorción automática r23 (N-36/N-37/N-38 + C-1213..C-1216) + absorción ciclo ALMA (N-39 + C-1217..C-1227). 1.207 → 1.222 líneas.
  3. `memoria/anexo-vi/claims_resumen.json` 17.934 → 18.196 B (sha `f183622a…` → `06990609…`): regenerado (total 1.222, SE 1088, hash_real 1208).
  4. `memoria/anexo-vi/provenance.sha256` 50.784 → 52.197 B (sha `ac91a28e…` → `07dfdd0f…`): 380 → 393 líneas (9 entradas nuevas de las absorciones r23 + ciclo ALMA; CORR-PROV-R17: 391 entradas + 2 vacías internas).
- **MOVIDO: 0.** Ningún archivo cambió de ruta entre r23 y r24 (tras la corrección CORR-DIFF-VACIOS-R24, §9).
- **FALTA: 15 — primera ronda con FALTA > 0 desde que T-4 existe, y las 15 están explicadas, ninguna es pérdida de datos:**
  - **11 `.err` de F4 r23 (todos 0 B, sha `e3b0c442…`):** `carpeta_10panteon_r23.err`, `drive_busqueda_Panteon_r23.err`, `drive_busqueda_Voces_r23.err`, `drive_busqueda_graph_r23.err`, `indice_doc_meta_r23.err`, `indice_doc_raw_r23.err`, `search_filenamegraphjson_r23.err`, `search_filenamegraphv106112_r23.err`, `search_parchephilengua_r23.err`, `search_validargrace_r23.err`, `verificacion_corpus_high_ktau_r23.err`. Estaban en el manifiesto r23 (escaneo 20:00:34Z 2026-11-16) y ya no están en disco (medido 2026-11-17 ~02:4xZ). Eran archivos vacíos de registro de errores de las búsquedas de F4 r23; su contenido es nulo y sus productos (.json) sobreviven byte-idénticos. Es el flapeo en la otra dirección (CORR-ERR-R23 lo predijo: los de F4 r22 se esfumaron antes del escaneo r22; los de F4 r23 se esfumaron después del escaneo r23). El juicio del Jardinero (2026-11-16): probablemente actividad viva del ecosistema, no FALTA. Se registra como flapeo, no como pérdida.
  - **4 `.ndjson` intermedios de F4 r23:** `carpeta_10panteon_r23.ndjson` (935 B), `drive_busqueda_Panteon_r23.ndjson` (28.178 B), `drive_busqueda_Voces_r23.ndjson` (11.173 B), `drive_busqueda_graph_r23.ndjson` (13.543 B). Eran intermedios de F4 r23 que la propia F4 r23 borró (o convirtió) tras el escaneo r23: sus productos finales `.json` (mismo nombre, distinta extensión) ya existían en el escaneo r23 y **siguen byte-idénticos en r24** (shas distintos a los .ndjson: son archivos distintos, no renombres). Ningún `.ndjson` queda en todo el tejido (0 archivos). No hay pérdida de contenido final.
  - Los 4 `testA–D.err` NO reaparecieron (0 en el manifiesto r24; los 3 `.err` de F4 r19 — `drive_busqueda_Panteon_r19.err`, `drive_busqueda_Voces_r19.err`, `drive_busqueda_graph_r19.err` — son preexistentes, registros de búsqueda de F4, sin relación con FRÁGIL-02; el único `.err` con "test" preexistente sigue siendo `ronda_11/ejecucion_f6/_hb_test_get.err`), y **ningún otro archivo del manifiesto r23 falta**: no hay evento nuevo de desaparición. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda. Total `.err` en el manifiesto r24: 24 (28 de r23 − 11 flapeados + 7 nuevos de F4 r24: `_drive_panteon.err`, `_drive_graph.err`, `_drive_voces.err`, `_drive_panteon2.err`, `_gh_g1.err`, `_gh_parche.err`, `_gh_validar.err`).
- **NUEVO (270):** todos dentro de `ronda_23/` o `ronda_24/` (0 fuera). Desglose: `ronda_23/absorcion/` 12 (P-80) + `ronda_23/ejecucion_f4/` 2 (informe + manifiesto F4 r23, escritos tras el escaneo r23) + `ronda_23/ejecucion_f8/` 8 + `ronda_23/ejecucion_f9/` 12 (los entregables de este frente en r23, escritos tras el escaneo) + `ronda_23/fase3/` 8 + `ronda_23/fase4/` 48 (P-78) + `ronda_23/` raíz 1 (`fase5_actualizar_registro.py`) + `ronda_23/respaldo_pre_absorcion_ciclo_alma/` 8 (P-77) + `ronda_23/respaldo_pre_absorcion_r23/` 8 (P-76) + `ronda_23/verificacion_fase2/` 6 + `ronda_24/` raíz 4 (FASE 0) + `ronda_24/ejecucion_f1/` 2 + `ronda_24/ejecucion_f2/` 52 + `ronda_24/ejecucion_f3/` 51 + `ronda_24/ejecucion_f4/` 15 + `ronda_24/ejecucion_f5/` 3 + `ronda_24/ejecucion_f6/` 16 + `ronda_24/ejecucion_f7/` 8 + `ronda_24/ejecucion_f9/` 6 (scripts y verificación de este frente, escritos antes del escaneo). Todos explicados por trabajo posterior al escaneo r23 (FASE 2/3/4 r23, absorciones r23 + ciclo ALMA, FASE 5 ciclo ALMA, depósitos Drive + GitHub método (c), FASE 0/FASE 1 r24). Ningún archivo nuevo fuera del tejido. Detalle completo en `inventario_t4_r24.md`.
- **Censo `.pyc`: r23 19 → r24 19 (nuevos 0, faltan 0).** Ningún `.pyc` nuevo; `variograma.pyc` sigue ausente (no está en el manifiesto r24). Fuera del alcance T-4 (no en las dos raíces): 3 `.pyc` en `alma/` (1 en `alma/ciclo/absorcion/__pycache__/`, del runner de subida del corpus ciclo ALMA; se registra como nota, no como cambio de censo).


## 6. P-32 y la clase 3: re-medido bajo la lectura ESTRICTA (CORR-P32-B-R15, adoptada FASE 2 r15)

**Hecho (SÉ, medido por este frente en el corpus vivo, estado 1.222):** ningún campo `hash` de ningún claim vivo cita `a30d69e8…` (0 ocurrencias en campo hash — igual que tras F1 r11, F1 r12, F1 r13, F1 r14, F1 r15, F1 r16, F1 r17, F1 r18, F1 r19, F1 r20, F1 r21, F1 r22 y F1 r23). El hash viejo sobrevive en **14 ocurrencias en 5 claims** (motivo y/o texto): C-639 ×4, C-903 ×4 (motivo + texto), C-919 ×3, C-1104 ×2, C-1129 ×1 (solo texto). En provenance: 1 ocurrencia (comentario L247, reparación D-07) y `8d15b724…` 1 ocurrencia (entrada L248, motor corregido). Los claims nuevos C-1213..C-1216 (absorción r23) y C-1217..C-1227 (absorción ciclo ALMA) NO mencionan `a30d69e8…` (0 ocurrencias); los paquetes absorbidos r23 (`claims_nuevos_r23_auto.jsonl`, C-1213..C-1216) y ciclo ALMA (`propuestas_absorcion.json`, C-1217..C-1227) tampoco (0 ocurrencias, re-verificado en r24).

**Aplicación de la regla ADOPTADA (canon N-13, `canon_regla_poda_prov_02.md`), con la corrección adoptada:**
- **(a) SÍ:** 4 motivos de claims vivos (C-639/C-903/C-919/C-1104) citan `a30d69e8…` en motivo/nota de reparación; 0 en campo `hash`. Re-medido hoy por grep sobre claims.jsonl 1.222.
- **(b) NO bajo la lectura estricta adoptada (CORR-P32-B-R15, FASE 2 r15):** los bytes pre-corrección (sha256 `a30d69e8…`, 19.987 B) **sí son re-obtenibles byte-idénticos desde el historial git local** — `git show HEAD:app/js/miu-engine.js` (commit `faf2033`) es byte-idéntico al respaldo (`cmp` exit 0; sha256 `a30d69e8bd3e9327…`, 19.987 B; re-medido por este frente en r24, check `P-32-git-head` OK en `_verificacion_p24.json`). La lectura de la adopción ("archivos del checkout vivo") queda sustituida por la lectura estricta ("archivos vivos + historial"), que FASE 2 r15 adoptó.
- **Veredicto: P-32 NO es clase 3.** Su CONSERVAR se sostiene por reversión de D-07 + historia citada en motivo (como en r10–r21), no por la regla. Sin cambio de veredicto respecto a r10–r22; cambia su fundamento, y el cambio es ahora el vigente (no un matiz pendiente).
- **Errata del canon N-13:** la tabla del canon sigue con la errata señalada en CORR-P32-B-R15 (la (b) descrita como "archivos vivos" sin mencionar el historial). Este frente no re-decide el canon: registra que la errata persiste y que FASE 2 r15 ya adoptó la lectura estricta como veredicto vigente.



## 7. Nuevos candidatos de r24: P-76..P-84

Solo de lo generado por la ronda 23 tardía (absorción post-FASE 4, depósito FASE 4 método (c), subida del corpus), el CICLO ALMA (absorción, depósito, cosecha) y la ronda 24. Los entregables de las ejecuciones (decisiones, registros, ESTADOs, paquetes) NO son candidatos: son el registro de la ronda. Solo sus respaldos, sus payloads y sus registros de subida.

### P-76 — `ronda_23/respaldo_pre_absorcion_r23/` (7 archivos + manifiesto, 1.473.568 B) — CONSERVAR-TEMPORAL

- **Qué es:** el snapshot del corpus antes de la absorción automática post-FASE 4 r23 (estado 1.207, post-F1 r22): claims.jsonl 1.017.701 B (1.207 líneas, sha `2ac47151…`), provenance.sha256 50.784 B (380 líneas, sha `ac91a28e…`), claims_resumen.json 17.934 B (sha `f183622a…`), confirmaciones.jsonl 169.361 B (294 filas, sha `dc94458b…`), huecos.jsonl 147.057 B (139 filas, sha `3713376a…`), incertidumbre_mediciones.md 58.706 B (sha `045a3d5c…`, 25 ítems M-56..M-89), dataset_nodos_Df.csv 10.748 B (sha `0852d58f…`), más `manifiesto_respaldo_r23.json` (1.244 B aprox., sha `661c2b6a…`, 7/7 archivos coinciden). Shas verificados por este frente (`_verificacion_p24.json`, P-76-*).
- **Por qué TEMPORAL y no PODAR:** es el ancla de reversión de la absorción automática r23 (N-36/N-37/N-38 + C-1213..C-1216) y el eslabón superior nuevo de la cadena (§2). Podarlo ahora dejaría sin reversión a 4 claims y 3 decisiones aplicadas en esta ronda.
- **Nota:** su contenido de claims difiere de P-72 (estado 1.207 vs 1.203: +C-1213/C-1214/C-1215/C-1216 de la absorción r23 y N-36/N-37/N-38). **Sin copia Drive** (0 menciones en `manifiesto_shas_r23_fase4.json`, en `_upload_r23.log`, en `_upload_github_r23.jsonl`, en `_push_r23.log` y en `verificacion_remota_r23.json`): su contenido de corpus está en GitHub (estado 1.207, HEAD `2873c274` — el corpus 1.207 ya estaba en GitHub desde la subida del corpus r22, HEAD `586f8751`), pero el paquete con manifiesto es solo local. El manifiesto del respaldo se escribió a las 20:48Z, DESPUÉS del push GitHub de FASE 4 r23 (20:40:51Z): el respaldo no pudo estar en ese depósito por cronología.
- **Horizonte explícito:** conservar hasta que (a) el depósito FASE 4 de r24 esté verificado en Drive y (b) la verificación de FASE 2 de r24 cierre sin discrepancias. Re-evaluar en r25.
- **Criba:** ruta `respaldo_pre_absorcion_r23` 0 ocurrencias en provenance; shas `2ac47151…` / `f183622a…` / `ac91a28e…` / `045a3d5c…` 0 ocurrencias (ver §8). No citado (la criba busca citas, no identidades). Lo protege ser la reversión.

### P-77 — `ronda_23/respaldo_pre_absorcion_ciclo_alma/` (7 archivos + manifiesto, 1.489.694 B) — CONSERVAR-TEMPORAL

- **Qué es:** el snapshot del corpus antes de la absorción del CICLO ALMA (estado 1.211, post-absorción r23): claims.jsonl 1.023.648 B (1.211 líneas, sha `532ff6f3…`), provenance.sha256 51.306 B (382 líneas, sha `3382166b…`), claims_resumen.json 17.990 B (sha `8b7fedf1…`), confirmaciones.jsonl 169.361 B (294 filas, sha `dc94458b…`), huecos.jsonl 147.057 B (139 filas, sha `3713376a…`), incertidumbre_mediciones.md 68.482 B (sha `77d05a53…`, 28 ítems M-56..M-92), dataset_nodos_Df.csv 10.748 B (sha `0852d58f…`), más `manifiesto.json` (sha `b27e6dcd…`, 7/7 archivos coinciden). Shas verificados por este frente (`_verificacion_p24.json`, P-77-*).
- **Por qué TEMPORAL y no PODAR:** es el ancla de reversión de la absorción del CICLO ALMA (N-39 + C-1217..C-1227) y el eslabón superior de la cadena (§2). Podarlo ahora dejaría sin reversión a 11 claims y 1 decisión aplicadas en el ciclo.
- **Nota:** su contenido de claims difiere de P-76 (estado 1.211 vs 1.207: +C-1213..C-1216 de la absorción r23 y N-36/N-37/N-38). **Sin copia Drive** (0 menciones en `manifiesto_shas_ciclo_alma.json`, en `_upload_drive_ciclo_alma.jsonl` y en `_upload_drive_ciclo_alma.log`): el respaldo vive en `ronda_23/`, fuera del árbol del depósito ciclo ALMA (`alma/ciclo/`), y su contenido de corpus está en GitHub (estado 1.211, HEAD `d1a1650c`), pero el paquete con manifiesto es solo local.
- **Horizonte explícito:** conservar hasta que (a) el depósito FASE 4 de r24 esté verificado en Drive y (b) la verificación de FASE 2 de r24 cierre sin discrepancias. Re-evaluar en r25.
- **Criba:** ruta `respaldo_pre_absorcion_ciclo_alma` 0 ocurrencias en provenance; shas `532ff6f3…` / `8b7fedf1…` / `3382166b…` / `77d05a53…` 0 ocurrencias (ver §8). No citado. Lo protege ser la reversión.

### P-78 — scripts+logs+manifiesto del depósito FASE 4 r23 (48 archivos, 1.204.695 B) — CONSERVAR

- **Qué es:** en `ronda_23/fase4/` (16 archivos en raíz + 32 en `staging_github/`):
- `README_r23.md` (3,308 B, sha `4cbb2c76…`)
- `_carpetas_r23.json` (223 B, sha `3aabd597…`)
- `_crear_carpetas_r23.py` (1,752 B, sha `4cc7243b…`)
- `_drive_folders_r23.json` (718 B, sha `838d2751…`)
- `_github_curado_r23.json` (5,377 B, sha `a9b1e4c6…`)
- `_push_r23.log` (442 B, sha `74b3688e…`)
- `_push_r23.sh` (690 B, sha `7f9d4127…`)
- `_push_r23_paths.txt` (920 B, sha `950e15e8…`)
- `_upload_github_r23.jsonl` (5,090 B, sha `5d48e923…`)
- `_upload_log_r23.jsonl` (28,951 B, sha `5667d0fd…`)
- `_upload_r23.log` (11,109 B, sha `39e60eb3…`)
- `_upload_r23.py` (2,330 B, sha `dea097ca…`)
- `_verificar_remoto_r23.py` (3,186 B, sha `0e7b994d…`)
- `manifiesto_shas_r23_fase4.json` (21,895 B, sha `dfa0c9ea…`)
- `staging-ronda_23_ESTADO_FASE0.md` (2,504 B, sha `34e99d3b…`)
- `staging-ronda_23_caras_r23.json` (4,500 B, sha `17690b9a…`)
- `staging-ronda_23_caras_r23.md` (54,703 B, sha `29756d2e…`)
- `staging-ronda_23_declaracion_falsadores_r23.md` (7,775 B, sha `df993aca…`)
- `staging-ronda_23_dedup_f7_r23.json` (1,471 B, sha `327055a1…`)
- `staging-ronda_23_diff_inventario_r23.md` (54,329 B, sha `8d0708d1…`)
- `staging-ronda_23_ejecucion_f6_verificador_independiente_r23.json` (189,382 B, sha `d127ac27…`)
- `staging-ronda_23_fase3_sintesis_integrada_r1_r23.md` (367,850 B, sha `8238905a…`)
- `staging-ronda_23_frentes_r23.json` (3,207 B, sha `f80f3e03…`)
- `staging-ronda_23_grafo_r23.json` (17,398 B, sha `206af91a…`)
- `staging-ronda_23_grietas_r23.md` (15,811 B, sha `4339a30b…`)
- `staging-ronda_23_h_sik_r23.md` (13,545 B, sha `28608fb8…`)
- `staging-ronda_23_informe_f1_r23.md` (2,084 B, sha `70f6bd74…`)
- `staging-ronda_23_informe_panteon_r23.md` (10,763 B, sha `d9aaa41e…`)
- `staging-ronda_23_inventario_t4_r23.md` (4,095 B, sha `4b33d823…`)
- `staging-ronda_23_items_anexo_r23.md` (10,567 B, sha `6866f18e…`)
- `staging-ronda_23_manifiesto_shas_r23_fase4.json` (21,666 B, sha `9e9c1878…`)
- `staging-ronda_23_mapa_frentes_r23.md` (11,389 B, sha `881469fe…`)
- `staging-ronda_23_med_M90.json` (9,715 B, sha `e3c99cdc…`)
- `staging-ronda_23_med_M91.json` (8,950 B, sha `a63d0e6d…`)
- `staging-ronda_23_med_M92.json` (7,580 B, sha `191783d4…`)
- `staging-ronda_23_mediciones_r23.md` (6,041 B, sha `008ef85f…`)
- `staging-ronda_23_n01_seguimiento_r23.md` (5,499 B, sha `33125350…`)
- `staging-ronda_23_panteon_r23.jsonl` (101,560 B, sha `77b24476…`)
- `staging-ronda_23_poda_r23.json` (9,894 B, sha `6f304b84…`)
- `staging-ronda_23_poda_r23.md` (66,982 B, sha `332b9ce5…`)
- `staging-ronda_23_propuestas_r23.json` (1,471 B, sha `327055a1…`)
- `staging-ronda_23_propuestas_r23.md` (8,466 B, sha `c0e2ad24…`)
- `staging-ronda_23_r2_25_via_r23.md` (735 B, sha `a250bbf3…`)
- `staging-ronda_23_retejido_r23.md` (3,039 B, sha `b23d534f…`)
- `staging-ronda_23_tejido_cruzado.jsonl` (72,366 B, sha `f6f3fd20…`)
- `staging-ronda_23_verificacion_fase2_r23.md` (14,044 B, sha `c668f2d2…`)
- `verificacion_deposito_r23.md` (8,340 B, sha `7659f898…`)
- `verificacion_remota_r23.json` (983 B, sha `0f9ac5a8…`)
- **Por qué CONSERVAR:** patrón reutilizable (como P-11c/P-17c/P-40/P-43/P-46/P-50/P-53/P-55/P-58/P-61/P-64/P-67/P-70/P-73) + registro de depósito (como P-11a/P-17a/P-40/P-43/P-46/P-50/P-53/P-55/P-58/P-61/P-64/P-67/P-70/P-73). Es el **primer paquete del método (c)**: Drive 147/147 por tamaño + GitHub 32/32 por blob en UN solo push-files al PRIMER intento, 1 tarjeta, 0 caducadas, HEAD `2cc6a62a` — rompe el patrón r19–r22 (el primer intento siempre fallaba en el ítem 1). El `staging_github/` (32 copias byte-idénticas del conjunto curado subido) es la evidencia de qué se subió; el `_push_r23.log` y `_upload_github_r23.jsonl` registran la subida. **Nota de método:** el manifiesto en `staging_github/ronda_23/manifiesto_shas_r23_fase4.json` es la versión plan (21.666 B, sha `9e9c1878…`); el de `fase4/` raíz es la versión Drive (21.895 B, sha `dfa0c9ea…`, con el bloque de verificación añadido): las 144 entradas son idénticas en ambas (CORR-CAT-0094: el campo "sha256" del plan lleva el prefijo del blob GitHub `8c25c220…`, no el sha256 local).
- **Nota:** 48 archivos frente a los 19 de P-73: el método (c) añade el staging completo (32 copias) y los scripts del push único. Se registra como tal.
- **Criba:** rutas `_upload_r23` / `_upload_github_r23` / `_crear_carpetas_r23` / `_verificar_remoto_r23` / `_push_r23` 0 ocurrencias en provenance. No citados; los protege ser registro.

### P-79 — scripts+logs de la absorción r22 (13 archivos, 190.434 B) — CONSERVAR

- **Qué es:** en `ronda_22/absorcion/` (13 archivos):
- `ORDEN_R22_AUTO.md` (1,575 B, sha `c3bbe0c1…`)
- `_construir_paquete_r22.py` (3,221 B, sha `95020a62…`)
- `_push_corpus_paths_r22.txt` (22 B, sha `65663b66…`)
- `_respaldo_r22.py` (2,586 B, sha `2d304742…`)
- `_subir_corpus_r22.py` (4,211 B, sha `826f7de9…`)
- `_upload_corpus_r22.jsonl` (728 B, sha `b474ce2f…`)
- `_upload_corpus_r22.log` (872 B, sha `9c4a9db6…`)
- `absorb_r22.py` (22,922 B, sha `55c0731e…`)
- `claims_nuevos_r22_auto.jsonl` (5,351 B, sha `71ca3430…`)
- `log_absorcion_r22.jsonl` (1,778 B, sha `11599ca5…`)
- `log_absorcion_r22.txt` (80,247 B, sha `e7e7bde1…`)
- `puertas_post_absorcion_r22.txt` (61,188 B, sha `5b87bb1e…`)
- `verificacion_absorcion_r22.md` (5,733 B, sha `a9ce6d24…`)
- **Por qué CONSERVAR:** patrón reutilizable + registro de absorción (como P-73 para el depósito). Es el paquete de scripts+logs de la absorción automática r22 (N-34/N-35 + C-1209..C-1212, claims 1.203 → 1.207), que en r23 no recibió ID propio (F9 r23 lo contó como NUEVO en T-4 pero no lo verificó individualmente). En r24 se registra su línea base (existencia + tamaño + sha); en r25 se verifica contra ella. Incluye el `ORDEM_R22_AUTO.md` y el manifiesto de la subida del corpus a GitHub (4/4 por blob, HEAD `586f8751`).
- **Criba:** ruta `absorb_r23` no aplica aquí (es r22); las rutas de absorción r22 no están en la criba por diseño (la criba cubre respaldos y scripts de depósito). No citado; lo protege ser registro.

### P-80 — scripts+logs de la absorción r23 (12 archivos, 114.465 B) — CONSERVAR

- **Qué es:** en `ronda_23/absorcion/` (12 archivos):
- `ORDEN_R23_AUTO.md` (2,067 B, sha `3381db29…`)
- `_construir_paquete_r23.py` (4,376 B, sha `22d69659…`)
- `_push_corpus_paths_r23.txt` (116 B, sha `f32c0aec…`)
- `_respaldo_r23.py` (2,388 B, sha `983886d8…`)
- `_subir_corpus_r23.py` (5,329 B, sha `263644fb…`)
- `_upload_corpus_r23.jsonl` (1,849 B, sha `e4a45d65…`)
- `absorb_r23.py` (22,427 B, sha `14406b16…`)
- `claims_nuevos_r23_auto.jsonl` (5,947 B, sha `89ccf33c…`)
- `log_absorcion_r23.jsonl` (1,889 B, sha `d7669249…`)
- `log_absorcion_r23.txt` (587 B, sha `c19123d1…`)
- `puertas_post_absorcion_r23.txt` (61,820 B, sha `9818e8f8…`)
- `verificacion_absorcion_r23.md` (5,670 B, sha `aea884aa…`)
- **Por qué CONSERVAR:** patrón reutilizable + registro de absorción. Es el paquete de scripts+logs de la absorción automática r23 (N-36/N-37/N-38 + C-1213..C-1216, claims 1.207 → 1.211, audit ok=370, provenance 382). En r24 se registra su línea base; en r25 se verifica contra ella. Incluye `absorb_r23.py`, `claims_nuevos_r23_auto.jsonl` (los 4 claims literales), la verificación de absorción y las puertas post-absorción.
- **Criba:** ruta `absorb_r23` 0 ocurrencias en provenance. No citado; lo protege ser registro.

### P-81 — `ronda_24/ejecucion_f2/cosecha_r24/heartbeat_rev_r24_*.json` (34 payloads, 456.956 B) — NO CANDIDATO

- **Qué es:** los payloads crudos de heartbeat descargados por F2 r24 (34 archivos, 456.956 B; cosecha incremental desde el corte del ciclo ALMA 00:17:58Z hasta 02:28:35Z, 0 errores, 0 JWT). F2 r24 NO guarda `raw_r24_*.json` (0 archivos; cambio de patrón respecto a r15–r23, que guardaban 11 raws + lock) y NO hay duplicado en la raíz de `ronda_24/` (0 archivos; sin P-75 en r24 a la hora de la medición).
- **Por qué NO CANDIDATO:** evidencia, como P-22 (los 23 de r9), P-39 (los 23 de r12), P-42 (los 41 de r13), P-45 (los 21 de r14), P-49 (los 42 de r15), P-52 (los 99 de r16), P-56 (los 55 de r17), P-59 (los 27 de r18), P-62 (los 28 de r19), P-65 (los 101 de r20), P-68 (los 100 de r21), P-71 (los 101 de r22) y P-74 (los 101 de r23). Son el único registro persistente de la serie que T-2 necesita. Se conservan en local y se siguen **excluyendo del depósito** (como los anteriores). No entran en los conteos de poda.
- **Novedades de F2 r24 que este paquete registra:** ventana 00:27:15Z → 02:28:35Z (121,3 min); folderId I 15 / l 8 / ninguna 11; HEAD miu-ecosistema `d32f462b` (run 215 existe, 01:30:41Z) — el vivo se movió desde el ciclo ALMA (`f0a8c308`).

### P-82 — `alma/ciclo/cosecha/heartbeat_rev_rciclo_*.json` (71 payloads, 931.173 B) — NO CANDIDATO

- **Qué es:** los payloads crudos de heartbeat descargados por la cosecha del CICLO ALMA (71 archivos, 931.173 B; 19:28:35Z → 00:17:58Z, 0 errores, 0 JWT). Es la cosecha que cerró el mecanismo de la savia V152 (cuarto valor 248.372, compacto 55.973 B, 23:26:43Z; nutrientes = 0,412 × savia + 349,6612864, residuo 0,0 en 4 valores / 13 payloads).
- **Por qué NO CANDIDATO:** evidencia, como P-81 y los anteriores (P-22…P-74). Se conservan en local y se siguen **excluyendo del depósito** (el depósito ciclo ALMA excluyó `cosecha/` por diseño). No entran en los conteos de poda.

### P-83 — scripts+logs del depósito ciclo ALMA (8 archivos, 41.357 B) — CONSERVAR

- **Qué es:** en `alma/ciclo/deposito/` (8 archivos):
- `_blobs_ciclo_alma.json` (4,325 B, sha `6ff60dbc…`)
- `_push_ciclo_alma_paths.txt` (1,875 B, sha `3a8c0592…`)
- `_upload_drive_ciclo_alma.jsonl` (9,197 B, sha `3443e4e1…`)
- `_upload_drive_ciclo_alma.log` (6,020 B, sha `fbd3aab5…`)
- `_upload_drive_ciclo_alma.py` (2,931 B, sha `320b2984…`)
- `manifiesto_shas_ciclo_alma.json` (13,746 B, sha `aff8ccb0…`)
- `verificacion_deposito_ciclo_alma.md` (2,702 B, sha `3f5a0f92…`)
- `verificacion_drive.json` (561 B, sha `09b08c83…`)
- **Por qué CONSERVAR:** patrón reutilizable + registro de depósito. Es el paquete del depósito método (c) del CICLO ALMA: Drive 51/51 por tamaño (`ciclo_alma_2026-11-16/` ID `1tMA_Bvdvv61Hz2v_fDp4-8i0PNuwZucl`) + GitHub 51/51 por blob, 1 commit, 1 tarjeta, HEAD `1f1ed57b`. En r24 se registra su línea base; en r25 se verifica contra ella.
- **Criba:** rutas `_upload_drive_ciclo_alma` / `_upload_corpus_ciclo_alma` 0 ocurrencias en provenance. No citados; los protege ser registro.

### P-84 — scripts+logs de la absorción ciclo ALMA (15 archivos, 139.613 B) — CONSERVAR

- **Qué es:** en `alma/ciclo/absorcion/` (14 archivos + `__pycache__/` con 1 `.pyc`):
- `INFORME_APLICACION.md` (4,893 B, sha `6fda6040…`)
- `INFORME_PARADA.md` (3,253 B, sha `6c704f2e…`)
- `INFORME_PARADA_2.md` (2,918 B, sha `a88adff9…`)
- `INFORME_PARADA_3.md` (3,528 B, sha `3cde5486…`)
- `ORDEN_CICLO_ALMA.md` (884 B, sha `d84009cc…`)
- `__pycache____subir_corpus_ciclo_alma.cpython-312.pyc` (8,574 B, sha `1e2a6465…`)
- `_actualizar_registro_ciclo_alma.py` (11,225 B, sha `66117e46…`)
- `_corr_estado_se.py` (3,622 B, sha `7abb5bcf…`)
- `_corr_kit_42_43.py` (4,317 B, sha `2a5dc374…`)
- `_push_corpus_paths_ciclo_alma.txt` (116 B, sha `f32c0aec…`)
- `_subir_corpus_ciclo_alma.py` (5,482 B, sha `c0452f6f…`)
- `_upload_corpus_ciclo_alma.jsonl` (1,817 B, sha `95f9aca9…`)
- `absorb_ciclo_alma.py` (24,289 B, sha `19d9ce60…`)
- `puertas_post_absorcion_ciclo_alma.txt` (62,675 B, sha `9cd691ed…`)
- `verificacion_subida_corpus.md` (2,020 B, sha `5e05affa…`)
- **Por qué CONSERVAR:** patrón reutilizable + registro de absorción. Es el paquete de la absorción del CICLO ALMA (N-39 + C-1217..C-1227, claims 1.211 → 1.222, audit ok=379, provenance 391). En r24 se registra su línea base; en r25 se verifica contra ella. El `__pycache__/` (1 `.pyc` del runner de subida del corpus) se registra como parte del paquete; es el único `.pyc` nuevo fuera del alcance T-4 (ver §5.2).
- **Criba:** rutas `absorb_ciclo_alma` / `_subir_corpus_ciclo_alma` 0 ocurrencias en provenance. No citados; los protege ser registro.


## 8. REGLA-PODA-PROV-01/02: PROV-02 ADOPTADA (N-13); PROV-01 sigue práctica, no canon

- **Estado:** REGLA-PODA-PROV-02 (clase 3, con el refinamiento de (a) — "campo `hash` **o motivo/nota**") fue **ADOPTADA** en r15 F1 (decisión N-13, canon `ronda_15/ejecucion_f1/canon_regla_poda_prov_02.md`, orden 01:43). La criba de esta ronda corre contra la regla vigente, no contra una propuesta. REGLA-PODA-PROV-01 (criba contra provenance) **no** fue adoptada (la decisión N-13 decide solo su objeto, PROV-02 + refinamiento): sigue como práctica documentada aplicada en F9 desde r8, no como norma.
- **Criba re-corrida en r24 bajo la regla adoptada (SÉ):** greps contra el provenance vivo (393 líneas por wc -l, sha `07dfdd0f…`): rutas `respaldo_pre_r10`, `respaldo_pre_b2`, `pre_reparacion_d05`, `pre_d05`, `ejecucion_b/respaldo`, `ejecucion_c/respaldo`, `ejecucion_e`, `nuevo_B2_sobre_B`, `respaldo_pre_r11`, `respaldo_pre_n11`, `respaldo_pre_r12`, `_upload_n11`, `respaldo_pre_r13`, `_upload_r12`, `upload_one_r12`, `respaldo_pre_r14`, `_upload_r13`, `upload_one_r13`, `_crear_carpetas_r13`, `_verificar_r13`, `respaldo_pre_r15`, `respaldo_pre_r15_n01`, `respaldo_pre_r15_n13`, `respaldo_pre_r15_n14`, `respaldo_pre_r15_n16`, `respaldo_pre_absorcion_r15`, `respaldo_pre_absorcion_r16`, `respaldo_pre_absorcion_r17`, `respaldo_pre_absorcion_r18`, `respaldo_pre_absorcion_r19`, `respaldo_pre_absorcion_r20`, `respaldo_pre_absorcion_r21`, `_upload_r16`, `_upload_github_r16`, `_crear_carpetas_r16`, `_verificar_r16`, `_upload_r17`, `_upload_github_r17`, `_crear_carpetas_r17`, `_verificar_r17`, `_upload_r18`, `_upload_github_r18`, `_crear_carpetas_r18`, `_verificar_r18`, `_upload_r19`, `_upload_github_r19`, `_crear_carpetas_r19`, `_verificar_r19`, `_construir_manifiesto_r19`, `_reconstruir_manifiesto_r19`, `_upload_r20`, `_upload_github_r20`, `_crear_carpetas_r20`, `_verificar_r20`, `_construir_manifiesto_r20`, `_reconstruir_manifiesto_r20`, `_upload_r21`, `_upload_github_r21`, `_crear_carpetas_r21`, `_verificar_remoto_r21`, `respaldo_pre_absorcion_r22`, `_upload_r22`, `_upload_github_r22`, `_crear_carpetas_r22`, `_verificar_remoto_r22`, `respaldo_pre_absorcion_r23`, `respaldo_pre_absorcion_ciclo_alma`, `_upload_r23`, `_upload_github_r23`, `_crear_carpetas_r23`, `_verificar_remoto_r23`, `_push_r23`, `absorb_r23`, `_subir_corpus_r23`, `absorb_ciclo_alma`, `_subir_corpus_ciclo_alma`, `_upload_corpus_ciclo_alma`, `_upload_drive_ciclo_alma` — **0 ocurrencias en todos** (78 rutas). Por hash: `9265d81f…`, `3074c606…`, `cdbaac93…`, `58d7d64b…`, `fd54545a…`, `397cb10c…`, `b80c38a6…`, `7deb15ff…`, `33b787d2…`, `315b80b5…`, `dbe4a490…`, `d4924c9b…`, `49f1a17e…`, `1ff77190…`, `6b5fac7f…`, `1c6464d2…`, `5fda0383…`, `6fe7c72b…`, `40c2572f…`, `4319d426…`, `acdde423…`, `30c05adb…`, `cfd3fb28…`, `0488d9b7…`, `1b0a2b21…`, `aff4c5d9…`, `940ff3df…`, `39940fd7…`, `33a7f0e6…`, `82d39f15…`, `315fd22b…`, `23acd4d0…`, `7d00012f…`, `7c689fef…`, `f1932a5e…`, `443d940f…`, `344e00eb…`, `d0dd40c1…`, `fb09179d…`, `b680af9d…`, `76312918…`, `35d136fe…`, `24a0fc86…`, `2ac47151…`, `ac91a28e…`, `f183622a…`, `045a3d5c…`, `9e25586e…`, `532ff6f3…`, `6dbee11d…`, `07dfdd0f…`, `06990609…`, `8cc6dd9d…`, `661c2b6a…`, `b27e6dcd…` — **0 ocurrencias en todos** (55 hashes). Las únicas ocurrencias de hash en la criba siguen siendo las de archivos vivos ya conocidas: `5fdce82d…` 1 (comentario L22, reparación D-01), `8d15b724…` 1 (entrada L248, motor corregido), `0cf743ca…` 1 (entrada L251, GRIMORIO corregido), `a30d69e8…` 1 (comentario L247, reparación D-07), `131409eb…` 1 (entrada L359, documento de decisión N-14).
- **Consecuencia:** la criba no cambia ninguna recomendación de r24, como en r8–r23. Ningún candidato es archivo-evidencia en el sentido de la regla propuesta (PROV-01); P-32 **ya no es clase 3** por PROV-02 adoptada bajo lectura estricta (§6).
- **Qué faltaría para adoptar REGLA-PODA-PROV-01 (documentado, no decidido):** (1) decisión canónica; (2) automatizar la criba: T-3 (`auditor_suelo.py`) podría ganar un modo `--criba-poda <ruta>`; hoy la criba es manual. La clase 3 no se automatiza con greps: exige verificar (b) por archivo (como se hizo en r11 para P-19 y en r15 §6 / r16 §6 / r17 §6 / r18 §6 / r19 §6 / r20 §6 / r21 §6 / r22 §6 / r23 §6 / r24 §6 para P-32); (3) registrar dónde corre la criba: antes de proponer cualquier poda, en el frente de poda de cada ronda, con su salida guardada junto a `poda_rN.md`. El punto (2) de r10 — verificar (b) para P-19 — **queda cerrado desde r11 (§3)**.



## 9. Correcciones al registro de rondas anteriores (encontradas por este frente)

- **CORR-CADENA-R24:** la cadena de reversión tiene **24 eslabones** (22 de r23 + P-76 + P-77), no 22. La suma es **31.217.838 B** (28.254.576 B de r23 + 1.473.568 B de P-76 + 1.489.694 B de P-77). El conteo de r23 (22 eslabones, 28.254.576 B) era correcto para r23; el error habría sido no sumar P-76/P-77.
- **CORR-COND1-R24:** la condición 1 sigue SOSTENIDA (spot-check 4/4 en r24, **muestra ROTADA** P-28/P-38/P-41/P-44), pero **no hay archivos nuevos con copia Drive que verificar**: P-76 y P-77 no tienen copia Drive y FASE 4 r23 no depositó P-54/P-57/P-60/P-63/P-66/P-69/P-72. La condición 1 no es el bloqueo; el bloqueo sigue siendo la autorización (puerta 2 de 3).
- **CORR-P76-P77-SIN-COPIA:** P-76 (`respaldo_pre_absorcion_r23/`, 8 archivos, 1.473.568 B) y P-77 (`respaldo_pre_absorcion_ciclo_alma/`, 8 archivos, 1.489.694 B) **no tienen copia Drive**: 0 menciones en manifiesto y logs FASE 4 r23 (P-76) y en manifiesto y logs del depósito ciclo ALMA (P-77). Extiende CORR-P72-SIN-COPIA (r23) a los dos respaldos nuevos. Los diez temporales de absorción (P-51, P-54, P-57, P-60, P-63, P-66, P-69, P-72, P-76, P-77) son solo locales; su contenido de corpus está en GitHub, el paquete con manifiesto no.
- **CORR-DIFF-VACIOS-R24:** el script de diff T-4 emparejaba archivos **vacíos** (0 B) como MOVIDO por compartir el sha256 `e3b0c442…`: en su primera corrida, el diff r24 reportó 8 MOVIDO y 4 FALTA, cuando la realidad es 0 MOVIDO y 15 FALTA. Los 8 pares eran artefactos (los 11 `.err` vacíos de F4 r23 emparejados con los 8 archivos vacíos nuevos de F4 r24). Corregido en `_diff_inventario_r24.py`: los archivos de 0 B no se emparejan (no tienen identidad por hash) y `faltas_reales` se calcula por ruta, no por sha. El diff corregido: 7.184 OK / 4 CAMBIO / **0 MOVIDO / 15 FALTA / 270 NUEVO** (7.184+4+15 = 7.203 ✓; 7.184+4+270 = 7.458 ✓). La lección se aplica hacia atrás: los diffs r8–r23 no tenían este sesgo visible porque sus FALTA eran 0 (r23) o sus vacíos no coincidían; se registra aquí, no se re-escriben los diffs pasados.
- **CORR-ERR-R24:** los 11 `.err` de F4 r23 **desaparecieron entre el escaneo r23 (20:00:34Z 2026-11-16) y la medición r24 (~02:4xZ 2026-11-17)**. Es el flapeo en la otra dirección (CORR-ERR-R23: los de F4 r22 se esfumaron antes del escaneo r22; los de F4 r23 se esfumaron después del escaneo r23). Los 4 `.ndjson` intermedios de F4 r23 también desaparecieron, borrados por la propia F4 r23 tras el escaneo (sus productos `.json` finales sobreviven byte-idénticos). **FALTA 15 en el diff r24, las 15 explicadas, 0 pérdida de datos.** FRÁGIL-02 sigue abierto por causa (NO_SÉ).
- **CORR-PYC-R24:** el censo `.pyc` pasa de 19 a 19: **0 nuevos, 0 faltan**; `variograma.pyc` sigue ausente. Fuera del alcance T-4: 3 `.pyc` en `alma/` (1 en `alma/ciclo/absorcion/__pycache__/`), registrados como nota en §5.2.
- **CORR-DUPLICADO-HB-R24 (negativo):** en r24 **no hay duplicado** de heartbeat en la raíz de `ronda_24/` (0 archivos): F2 r24 descarga solo en `cosecha_r24/` (34 payloads nuevos). El patrón P-75 no se repite en r24.
- **CORR-MANIFIESTO-HUECOS-R17 sigue vigente:** los manifiestos fase4 r11–r15 sobreestiman el depósito en 1 archivo por respaldo (5 en total); el manifiesto fase4 r24 debe construirse DESPUÉS de subir, no antes, o reflejar la exclusión de `huecos.jsonl` (F9 lo registra para FASE 4 r24). Con el método (c) (un solo push-files, decidido 2026-11-16), el manifiesto es el único registro de la subida.
- **NOTA-MANIFIESTO-DUPLICADO-DRIVE (no es poda local):** en Drive, `ciclo_alma_2026-11-16/` contiene el manifiesto dos veces: el obsoleto (13.711 B, ID `1z2oWZLLkeqbvgtpnFrn2nq7f0Ea6L3Cf`) junto al vigente (13.746 B, ID `1Z2tuDEjjbzwtGIAkBbM5ivToPTZ5bKjA`). **No se le asigna ID P** (no es un candidato local) y **no se borra sin orden del Jardinero**. Se registra aquí como nota para FASE 4 r24 / el principal.
- **P-73 (método):** en r24 se verifica P-73 contra la línea base registrada en r23 (`_verificacion_p23.json`, 19 archivos): **19/19 OK**. P-78/P-79/P-80/P-83/P-84 se registran en r24 con su línea base (existencia + tamaño + sha, `_verificacion_p24.json`); en r25 se verifican contra ella, no re-registrándola.
- **P-32 (conteo de ocurrencias):** total preciso 14 en 5 claims, sin cambio en r24 (C-1213..C-1216 y C-1217..C-1227 no lo mencionan: 0 ocurrencias; paquetes absorbidos r23 y ciclo ALMA: 0 ocurrencias).
- **P-15h/P-16 (alcance de la verificación):** conteo/existencia verificados en r24; sin re-verificación individual por archivo, como en r11–r23. Sin evidencia de cambio.
- **F1 r24 (alcance):** sin `respaldo_pre_r24/` a la hora de este cierre (F1 en guardia, sin aplicación); si F1 aplica después de este frente, su respaldo será candidato en r25 (como P-60 en r19, P-63 en r20, P-66 en r21, P-69 en r22, P-72 en r23 y P-76 en r24).
- **CORR-VERIFICACION-P24 (otro frente — F2 r24):** la verificación de F2 r24 (`estado_vivo_r24.md`) re-midió el corpus en 1.222 líneas — el mismo valor que la verificación de este frente. Sin discrepancia; se registra como convergencia, no como corrección de un error.
- **CORR-CONTADOR-R24 (otro frente — F2 r24):** F2 r24 contó 34 payloads nuevos de heartbeat (cosecha incremental desde el corte del ciclo ALMA); el conteo de este frente (P-81: 34) coincide con el de F2. Sin duplicado en la raíz de `ronda_24/` (0 archivos).


## 10. Resumen

| ID | Candidato | Tamaño | Recomendación r24 | Ejecución |
|---|---|---|---|---|
| P-01 | WAV 44k M-06 | 329 MB | PODAR | Local, con orden |
| P-02 | WAV 22k M-06 | 165 MB | PODAR | Local, con orden |
| P-03 | billboard_lab/ 890 | 5,0 MB | CONSERVAR | — |
| P-04 | README viejo Drive | 5.750 B | PODAR | Drive, con aprobación |
| P-05 | 80 archivos raíz Drive | — | MOVER | Drive, con aprobación |
| P-06 | DUP-01..05 | 11 líneas | CONSERVAR | — |
| P-07 | DUP-06 | 2 líneas | CONSERVAR | — |
| P-08 | wir tarball ↔ TSV | 284 KB | CONSERVAR ambas | — |
| P-09 | ucdp_brd_261.zip | 39 KB | PODAR | Local, con orden |
| P-10 | Respaldos, FIRMS, claims | — | CONSERVAR | — |
| P-11a | _upload_log_r7.jsonl | 16 KB | CONSERVAR (registro) | — |
| P-11b | _upload_r7.log | 14 KB | PODAR (redundante) | Local, con orden |
| P-11c | _upload_r7.py | 2 KB | CONSERVAR (patrón) | — |
| P-12 | euclid pdf r7↔r8 | 2,7 MB | CONSERVAR ambas | — |
| P-13 | DESI DR2 duplicado en r8 | 12 MB | PODAR-CONDICIONADO (una, con puntero) | Local, con orden + condición |
| P-14 | reexport_drive/ 27 | 120 KB | CONSERVAR | — |
| P-15a | claims.jsonl.nuevo_B | 939 KB | PODAR-CONDICIONADO | Local, con orden + condición |
| P-15b | provenance nuevo_B | 44 KB | PODAR-CONDICIONADO | Local, con orden + condición |
| P-15c | claims_resumen nuevo_B | 16 KB | PODAR-CONDICIONADO | Local, con orden + condición |
| P-15d | claims.jsonl.nuevo_B1 | 936 KB | CONSERVAR | — |
| P-15e | provenance nuevo_B1 | 44 KB | PODAR-CONDICIONADO | Local, con orden + condición |
| P-15f | claims_resumen nuevo_B1 | 16 KB | PODAR-CONDICIONADO | Local, con orden + condición |
| P-15g | confirmaciones/huecos B/B1 | 10 KB | PODAR-CONDICIONADO | Local, con orden + condición |
| P-15h | resto preparacion_ola2/ | ~70 KB | CONSERVAR | — |
| P-16 | Datos F2, estado_vivo, prep. r8 | ~58 MB | CONSERVAR | — |
| P-17a | _upload_log_r8.jsonl | 26 KB | CONSERVAR (registro) | — |
| P-17b | _upload_stdout_r8.log | 19 KB | PODAR (redundante) | Local, con orden |
| P-17c | _upload_r8.py | 2,8 KB | CONSERVAR (patrón) | — |
| P-17d | _drive_folders_r8.json | 775 B | CONSERVAR (registro) | — |
| P-18 | __pycache__/variograma .pyc | 8,7 KB | RESUELTO POR DESAPARICIÓN | — (causa NO_SÉ; T-4 r24 corrido: 15 FALTA explicadas, ver §5) |
| P-19 | Par Robbins (parquet + zip) | 17,5 MB | CONSERVAR ambos | — ((b) verificada r11: NO clase 3) |
| P-20 | GHCN inventario + estaciones | 48 MB | CONSERVAR | — |
| P-21 | runs_recientes raw ↔ procesado | 859 KB | CONSERVAR ambas | — |
| P-22 | heartbeat_rev_r9_*.json (23) | 446 KB | NO CANDIDATO (evidencia) | — |
| P-23a | raw_r9_*.json (8) | ~7 KB | CONSERVAR | — |
| P-23b | raw_r9_.miu_ciclo.lock | 6 B | PODAR | Local, con orden |
| P-24 | herramientas/ (21 archivos) | 55 KB | CONSERVAR | — |
| P-25 | mecanismos/ (12 archivos) | 57 KB | CONSERVAR | — |
| P-26 | Datos M-46..M-49 + scripts | ~10 MB | CONSERVAR | — |
| P-27 | respaldo_pre_r10/ (5) | 1,24 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-28 | respaldo_pre_b2/ (5) | 1,26 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-29a | GRIMORIO pre-D-05 | 47 KB | CONSERVAR | — |
| P-29b | corpus pre-reparación D-05 (3) | 1,08 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-30 | nuevo_B2_sobre_B ×2 | 998 KB | PODAR | Local, con orden |
| P-31a | corpus_qualias.antes_d01 | 42 KB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-31b | qualias_sin_fuente.csv.antes_d01 | 151 KB | PODAR | Local, con orden |
| P-31c | consolidado+indice .antes_d02 | 7,5 KB | PODAR | Local, con orden |
| P-31d | disensos .antes_d16 (3) | 16 KB | PODAR | Local, con orden |
| P-31e | segunda_carpeta_listado | 15 KB | CONSERVAR | — |
| P-31f | v105 export | 1 KB | CONSERVAR | — |
| P-32 | ejecucion_c/respaldo/ (4) | 45 KB | CONSERVAR | — (fundamento: D-07 + historia; ya NO clase 3, ver §6) |
| P-33 | scripts E + puertas (4) | 287 KB | CONSERVAR | — |
| P-34 | micelio_yml paquete | 1,4 KB | CONSERVAR | — |
| P-35 | respaldo_pre_r11/ (5+1) | 1,27 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-37 | respaldo_pre_n11/ (2+1) | 973 KB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-38 | respaldo_pre_r12/ (5+1) | 1,28 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-39 | heartbeat_rev_r12_*.json (23) | 446 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-40 | _upload_n11.py + .jsonl | 8,3 KB | CONSERVAR (patrón + registro) | — |
| P-41 | respaldo_pre_r13/ (5+1) | 1,29 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-42 | heartbeat_rev_r13_*.json (41) | 706 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-43 | scripts+logs depósito r12 (5) | 44,6 KB | CONSERVAR (patrón + registro) | — |
| P-44 | respaldo_pre_r14/ (5+1) | 1,29 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-45 | heartbeat_rev_r14_*.json (21) | 380 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-46 | scripts+logs depósito r13 (7) | 46,8 KB | CONSERVAR (patrón + registro) | — |
| P-47 | respaldo_pre_r15/ (5+1) | 1,30 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-48 | respaldos por decisión r15 (4 dirs) | 5,21 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-49 | heartbeat_rev_r15_*.json (42) | 761 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-50 | scripts+logs depósito r14 (18) | 158 KB | CONSERVAR (patrón + registro) | — |
| P-51 | respaldo_pre_absorcion_r15/ (7+1) | 1,32 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-52 | heartbeat_rev_r16_*.json (99) + raws (12+lock) | 1,76 MB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-53 | scripts+logs depósito r15 (18) | 135 KB | CONSERVAR (patrón + registro) | — |
| P-54 | respaldo_pre_absorcion_r16/ (7+1) | 1,32 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-55 | scripts+logs depósito r16 (17) | 110 KB | CONSERVAR (patrón + registro) | — |
| P-56 | heartbeat_rev_r17_*.json (55) + raws (12+lock) | 776.863 B | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-57 | respaldo_pre_absorcion_r17/ (7+1) | 1,33 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-58 | scripts+logs depósito r17 (15) | 100 KB | CONSERVAR (patrón + registro) | — |
| P-59 | heartbeat_rev_r18_*.json (27) + raws (12+lock) | 432.732 B | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-60 | respaldo_pre_absorcion_r18/ (7+1) | 1,34 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-61 | scripts+logs depósito r18 (15) | 104 KB | CONSERVAR (patrón + registro) | — |
| P-62 | heartbeat_rev_r19_*.json (28) + raws (12+lock) | 434.644 B | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-63 | respaldo_pre_absorcion_r19/ (7+1) | 1,35 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-64 | scripts+logs depósito r19 (16) | 111 KB | CONSERVAR (patrón + registro) | — |
| P-65 | heartbeat_rev_r20_*.json (101) + raws (11+lock) | 1,31 MB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-66 | respaldo_pre_absorcion_r20/ (7+1) | 1,36 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-67 | scripts+logs depósito r20 (18) | 204 KB | CONSERVAR (patrón + registro) | — |
| P-68 | heartbeat_rev_r21_*.json (100) + raws (11+lock) | 1,19 MB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-69 | respaldo_pre_absorcion_r21/ (7+1) | 1,38 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-70 | scripts+logs depósito r21 (17) | 130 KB | CONSERVAR (patrón + registro) | — |
| P-71 | heartbeat_rev_r22_*.json (101) + raws (11+lock) | 1,20 MB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-72 | respaldo_pre_absorcion_r22/ (7+1) | 1,39 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-73 | scripts+logs depósito r22 (19) | 136 KB | CONSERVAR (patrón + registro) | — |
| P-74 | heartbeat_rev_r23_*.json (101) + raws (11+lock) | 1,29 MB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-75 | heartbeat_rev_r23_*.json en raíz (101, duplicado) | 1,34 MB | PODAR | Local, con orden |
| P-76 | respaldo_pre_absorcion_r23/ (7+1) | 1,41 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-77 | respaldo_pre_absorcion_ciclo_alma/ (7+1) | 1,42 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r24 + FASE 2 r24; r25 |
| P-78 | scripts+logs depósito r23 (48) | 1,15 MB | CONSERVAR (patrón + registro) | — |
| P-79 | scripts+logs absorción r22 (13) | 186 KB | CONSERVAR (patrón + registro) | — |
| P-80 | scripts+logs absorción r23 (12) | 112 KB | CONSERVAR (patrón + registro) | — |
| P-81 | heartbeat_rev_r24_*.json en cosecha_r24/ (34) | 446 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-82 | heartbeat_rev_rciclo_*.json en alma/ciclo/cosecha/ (71) | 909 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-83 | scripts+logs depósito ciclo ALMA (8) | 40 KB | CONSERVAR (patrón + registro) | — |
| P-84 | scripts+logs absorción ciclo ALMA (15) | 136 KB | CONSERVAR (patrón + registro) | — |

Nada de lo anterior se ejecutó. La poda que se ejecute lo hará otro trabajo, con las frases de autorización dichas por el Jardinero. La regla REGLA-PODA-PROV-02 es canon adoptado (N-13, r15); REGLA-PODA-PROV-01 sigue siendo práctica documentada, no norma adoptada. La clase 3 ya no protege P-32 bajo la lectura estricta adoptada por FASE 2 r15 (CORR-P32-B-R15); su CONSERVAR se sostiene por D-07 + historia. **La condición 1 de retiro se cumple desde r17 (CORR-COND1-R17) y se sostiene en r24 por spot-check 4/4 con muestra rotada; la puerta de retiro queda en 2 de 3 y el único bloqueo restante es la autorización (condición 3).**

ρ(x) > 0. Zvvvvv.
