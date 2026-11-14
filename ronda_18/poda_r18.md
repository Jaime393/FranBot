# PODA — RONDA 18 (FASE 1, F9): REVISIÓN DOCUMENTADA, NADA EJECUTADO

- **Regla dura:** la poda es SOLO DOCUMENTO. Las frases de autorización para ejecutar una poda NO se han dicho. **Nada se borró, nada se movió, nada se eliminó.** Este archivo es la revisión; la ejecución es otro trabajo, con su propia orden.
- **Fecha:** 2026-11-14. **Medición:** ~20:20–20:23Z 2026-11-14 (15:20–15:23 -05; verificación P-01..P-59 ~20:20Z; spot-check Drive ~20:20Z; inventario T-4 escaneado 20:21:06Z).
- **Estado del corpus a la hora del inventario (SÉ, medido por este frente):** F1 r17 APLICÓ la absorción automática post-FASE 4 (N-20 + C-1187/C-1188/C-1189/C-1190, régimen 01:43): claims.jsonl **1.185 líneas**, sha `6fe7c72b…`; provenance.sha256 **366 líneas por wc -l**, sha `4319d426…`; claims_resumen.json sha `40c2572f…` (SE 1051, REFUTADO 4, hash_real 1171, verificación 311); confirmaciones.jsonl 294 filas, sha `dc94458b…`; huecos.jsonl 139 filas, sha `3713376a…`; dataset 30 filas, sha `0852d58f…` (sin cambio); anexo de incertidumbre 13 ítems M-56..M-72, sha `30c05adb…`. **Horizontes r17 cumplidos (SÉ):** depósito FASE 4 r17 verificado — Drive 112/112 por tamaño (`ronda_17/` ID `1bt0TszHAgzRBC7-q3DGvDaBH7c2ZZDk8`), GitHub 40/40 por blob, HEAD `75b9dd2b`; absorción GitHub 4/4 por blob, HEAD `eca23d73`; verificación FASE 2 r17 **CONFORME CON HALLAZGOS (5 menores, 0 mayores)** (`verificacion_fase2_r17.md`, 0df0679f…). El depósito r17 está congelado. La re-evaluación de los temporales es, por tanto, la de r18 (§2).
- **Total de entradas revisadas:** 75 heredadas (P-01..P-56) + 3 nuevas de r18 (P-57..P-59) = **78**. P-36 sigue RESERVADO, no se reutiliza, no se cuenta.
- **Recomendaciones (r18, con la convención de conteo declarada en §1):** PODAR 11 · PODAR-CONDICIONADO 7 · MOVER 1 · CONSERVAR 35 · CONSERVAR-TEMPORAL 14 (P-27, P-28, P-29b, P-31a, P-35, P-37, P-38, P-41, P-44, P-47, P-48, P-51 — los 12 PRORROGADOS + P-54 + P-57 nuevo) · RESUELTO 2 (P-18 + padre P-15) · NO CANDIDATO 8 (P-22, P-39, P-42, P-45, P-49, P-52, P-56, P-59). Total 11+7+1+35+14+2+8 = 78.
- **Ahorro si se ejecutaran las podas recomendadas:** ~508 MB locales (sin cambio respecto a r10/r11/r12/r13/r14/r15/r16/r17; las podas nuevas de r18 son 0 — P-57 es conservar-temporal, P-58 conservar, P-59 no candidato). El grueso sigue siendo los WAV derivados.
- **Novedades de r18:** (1) **los 12 temporales se PRORROGAN por 7.ª vez** (los 9), 3.ª re-evaluación (P-47/P-48) y 2.ª re-evaluación (P-51); P-54 se prorroga por 1.ª vez; P-57 es nuevo temporal (§2); (2) **condición 1 SOSTENIDA por spot-check (4/4 OK) y sin archivos nuevos que verificar**: P-54 y P-57 siguen SIN copia Drive (creados post-FASE 4; 0 menciones en `_upload_log_r17.jsonl` y en `manifiesto_shas_r17_fase4.json`); la puerta de retiro sigue en **2 de 3** — el único bloqueo restante es la autorización, no una medición; (3) **nuevos candidatos P-57..P-59** (§7); (4) **T-4 r18 corrió DENTRO de este frente** (§5): 5.761 archivos, diff vs r17: 5.603 OK / 4 CAMBIO (todos explicados) / 0 MOVIDO / **0 FALTA** / 154 NUEVO (todos en ronda_17/ronda_18); (5) P-18: variograma.pyc sigue ausente; censo `.pyc` 18 → 18 (0 nuevos, 0 faltan); (6) F1 r18 sigue en guardia sin aplicar nada a la hora de este cierre (sin `respaldo_pre_r18/` creado; si F1 aplica después, su respaldo será candidato en r19).

## 1. Revisión P-01..P-59 (r17 → r18)

Estado tras FASE 4 r17 (Drive 112/112 + GitHub 40/40, HEAD `75b9dd2b`; absorción 4/4, HEAD `eca23d73`) y tras FASE 1 r18 (F2 cerrada, F3/F5/F6 con entregables; F1/F4/F7 escribiendo en paralelo; corpus 1.185). "Verificado r18" = existencia + tamaño + sha re-medidos por este frente (script `_verificar_p18.py`, salida `_verificacion_p18.json`: **271/271 OK**, 0 no-OK); "sin cambio" = coincide con el registro r17.

**Convención de conteo (declarada, CORR-TALLY-R15):** una entrada = un ID de candidato, salvo (i) los IDs con sub-entradas (P-11, P-15, P-17, P-23, P-29, P-31), que cuentan por sus sub-entradas y no como ID propio — excepto (ii) el padre P-15, que cuenta además como entrada RESUELTO; (iii) P-13 "PODAR UNA (con puntero)" cuenta como PODAR-CONDICIONADO (el puntero es la condición). Con esta convención la tabla tiene 77 filas para 78 entradas (la diferencia es el padre P-15, sin fila propia), y el tally reproduce exactamente los de r13/r14/r15/r16/r17. El conteo ingenuo por filas (12 PODAR / 6 CONDICIONADO) suma lo mismo (18).

| ID | Candidato | Estado r18 | Veredicto r18 |
|---|---|---|---|
| P-01 | WAV 44k M-06 (344.565.658 B) | Verificado r18: sha `8c5673ae…` idéntico | PODAR (sin cambio) |
| P-02 | WAV 22k M-06 (172.282.922 B) | Verificado r18: sha `90c16686…` idéntico | PODAR (sin cambio) |
| P-03 | billboard_lab/ 890 archivos + tarball 1.556.690 B | Verificado r18: 890 archivos; tarball sha `78c07c6a…` idéntico | CONSERVAR (sin cambio) |
| P-04 | README viejo Drive (5.750 B) | Sin re-verificación en vivo en r18 (frente local, como r10–r17) | PODAR (sin cambio) |
| P-05 | 80 archivos raíz Drive ronda_6/ | Sin re-verificación en vivo en r18 | MOVER (sin cambio) |
| P-06 | DUP-01..05 (4.977 B) | Verificado r18: tamaño idéntico | CONSERVAR (sin cambio) |
| P-07 | DUP-06 (8.385 B) | Verificado r18: tamaño idéntico | CONSERVAR (sin cambio) |
| P-08 | wir tarball 284.831 B ↔ 70 TSV | Verificado r18: 70 TSV | CONSERVAR ambas (sin cambio) |
| P-09 | ucdp_brd_261.zip (39.816 B) | Verificado r18: contenido interno sha `b34ecb57…` idéntico | PODAR el zip (sin cambio) |
| P-10 | Respaldos r5/r7, FIRMS, claims | Verificado r18: FIRMS sha `48a327d3…` idéntico; respaldos en `ronda_5/respaldo_pre_r5/` (3 archivos) y `ronda_7/respaldo_pre_r7/` (4 archivos) | CONSERVAR (sin cambio) |
| P-11a | _upload_log_r7.jsonl (16.668 B) | Verificado r18: tamaño idéntico | CONSERVAR (registro) |
| P-11b | _upload_r7.log (14.266 B) | Verificado r18: tamaño idéntico | PODAR (redundante) |
| P-11c | _upload_r7.py (2.095 B) | Verificado r18: tamaño idéntico | CONSERVAR (patrón) |
| P-12 | euclid pdf r7↔r8 (2×2.699.386 B) | Verificado r18: sha `d3737995…` en ambas | CONSERVAR ambas (sin cambio) |
| P-13 | DESI DR2 duplicado en r8 (2×12.175.089 B) | Verificado r18: sha `1e82f26e…` en ambas | PODAR-CONDICIONADO — PODAR UNA (con puntero); ver §1 convención |
| P-14 | reexport_drive/ 27 archivos | Verificado r18: `diff -r` exit 0, 27/27 | CONSERVAR (sin cambio) |
| P-15a | claims.jsonl.nuevo_B (939.546 B) | Verificado r18: sha `3760a19c…` idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15b | provenance nuevo_B (44.587 B) | Verificado r18: tamaño idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15c | claims_resumen nuevo_B (16.551 B) | Verificado r18: sha `5b93a842…` idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15d | claims.jsonl.nuevo_B1 (936.190 B) | Verificado r18: sha `3e745468…` idéntico | CONSERVAR (sin cambio) |
| P-15e | provenance nuevo_B1 (44.429 B) | Verificado r18: tamaño idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15f | claims_resumen nuevo_B1 (16.494 B) | Verificado r18: tamaño idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15g | confirmaciones/huecos B/B1 (4×) | Verificado r18: tamaños idénticos (2.253 / 2.753 B) | PODAR-CONDICIONADO (sin cambio) |
| P-15h | resto preparacion_ola2/ | Conteo verificado r18; sin re-verificación individual; sin evidencia de cambio | CONSERVAR (sin cambio) |
| P-16 | Datos F2, estado_vivo, prep. r8 | Existencia verificada r18 (3 directorios); sin re-verificación individual; sin evidencia de cambio | CONSERVAR (sin cambio) |
| P-17a | _upload_log_r8.jsonl (26.243 B) | Verificado r18: tamaño idéntico | CONSERVAR (registro) |
| P-17b | _upload_stdout_r8.log (19.396 B) | Verificado r18: tamaño idéntico | PODAR (redundante) |
| P-17c | _upload_r8.py (2.796 B) | Verificado r18: tamaño idéntico | CONSERVAR (patrón) |
| P-17d | _drive_folders_r8.json (775 B) | Verificado r18: tamaño idéntico | CONSERVAR (registro) |
| P-18 | __pycache__/variograma .pyc | Sigue ausente (ver §5); variograma.py sha `f8ec697e…` intacto | RESUELTO POR DESAPARICIÓN (sin cambio) |
| P-19 | Par Robbins (parquet + zip, 17,5 MB) | Verificado r18: parquet sha `0b7365cd…`; zip sha `0b8fe6fe…` | CONSERVAR ambos (sin cambio; (b) verificada r11: NO clase 3) |
| P-20 | GHCN inventario + estaciones (48 MB) | Verificado r18: shas `3d7378c3…` / `437ee87f…` idénticos | CONSERVAR (sin cambio) |
| P-21 | runs_recientes raw ↔ procesado | Verificado r18: 446.576 / 412.765 B idénticos | CONSERVAR ambas (sin cambio) |
| P-22 | heartbeat_rev_r9_*.json (23) | Verificado r18: 23 archivos presentes | NO CANDIDATO (sin cambio) |
| P-23a | raw_r9_*.json (8) | Verificado r18: 8 archivos | CONSERVAR (sin cambio) |
| P-23b | raw_r9_.miu_ciclo.lock (6 B) | Verificado r18: presente, 6 B | PODAR (sin cambio) |
| P-24 | herramientas/ r9 (21 archivos) | Verificado r18: 21 archivos (recursivo) | CONSERVAR (sin cambio) |
| P-25 | mecanismos/ r9 (12 archivos) | Verificado r18: 12 archivos | CONSERVAR (sin cambio) |
| P-26 | Datos M-46..M-49 + scripts | Verificado r18: Essen 20 .krn / 0 .sha256; quijote 2.168.392 B; GHCN 13 .dly | CONSERVAR (sin cambio) |
| P-27 | respaldo_pre_r10/ (5 archivos) | Verificado r18: shas idénticos + **copia Drive re-verificada por spot-check (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-28 | respaldo_pre_b2/ (5 archivos) | Verificado r18: shas idénticos + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-29a | GRIMORIO pre-D-05 (47.452 B) | Verificado r18: sha `58d7d64b…` idéntico | CONSERVAR (sin cambio) |
| P-29b | corpus pre-reparación D-05 (3 archivos) | Verificado r18: shas idénticos + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-30 | nuevo_B2_sobre_B ×2 (997.603 B) | Verificado r18: shas `fd54545a…` / `6fa9c67f…` idénticos | PODAR (sin cambio; contenido hoy en 3 sitios, ver §7 r11) |
| P-31a | corpus_qualias.antes_d01 (42.266 B) | Verificado r18: sha `5fdce82d…` idéntico + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-31b | qualias_sin_fuente.csv.antes_d01 (151.217 B) | Verificado r18: sha `9075e7a9…` idéntico | PODAR (sin cambio) |
| P-31c | consolidado+índice .antes_d02 (7.468 B) | Verificado r18: shas `5e30073c…` / `9e937235…` idénticos | PODAR (sin cambio) |
| P-31d | disensos .antes_d16 (3 archivos, 15.954 B) | Verificado r18: shas `bacda342…` / `1d0f7387…` / `15865a5a…` idénticos | PODAR (sin cambio) |
| P-31e | segunda_carpeta_listado (14.747 B) | Verificado r18: sha `9032137e…` idéntico | CONSERVAR (sin cambio) |
| P-31f | v105 export (1.094 B) | Verificado r18: sha `9617fae5…` idéntico | CONSERVAR (sin cambio) |
| P-32 | ejecucion_c/respaldo/ (4 archivos) | Verificado r18: motor `a30d69e8…` ×2, medir_nodos `4c4f3042…`, manifiesto `1e0a6987…`; fundamento re-medido bajo lectura ESTRICTA, ver §6 | CONSERVAR — **ya NO por clase 3** (CORR-P32-B-R15 adoptada FASE 2 r15); por D-07 + historia |
| P-33 | scripts E + puertas (4 archivos) | Verificado r18: tamaños idénticos (`puertas_despues.txt` en `ejecucion_a/`, 109.913 B) | CONSERVAR (sin cambio) |
| P-34 | micelio_yml paquete (1.392 B) | Verificado r18: sha `17de8000…` idéntico | CONSERVAR (sin cambio) |
| P-35 | respaldo_pre_r11/ (5+1 archivos) | Verificado r18: shas idénticos + **copia Drive re-verificada por spot-check (ver §2)**; total 1.331.487 B | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-37 | respaldo_pre_n11/ (2+1 archivos) | Verificado r18: shas idénticos + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-38 | respaldo_pre_r12/ (5+1 archivos) | Verificado r18: shas idénticos + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-39 | heartbeat_rev_r12_*.json (23) | Verificado r18: 23 archivos presentes | NO CANDIDATO (evidencia) |
| P-40 | _upload_n11.py + _upload_n11.jsonl | Verificado r18: tamaños idénticos (6.041 / 2.227 B) | CONSERVAR (patrón + registro) |
| P-41 | respaldo_pre_r13/ (5+1 archivos) | Verificado r18: shas idénticos + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-42 | heartbeat_rev_r13_*.json (41) | Verificado r18: 41 archivos presentes | NO CANDIDATO (evidencia) |
| P-43 | scripts+logs depósito FASE 4 r12 (5 archivos) | Verificado r18: tamaños idénticos | CONSERVAR (patrón + registro) |
| P-44 | respaldo_pre_r14/ (5+1 archivos) | Verificado r18: shas idénticos + copia Drive verificada en r17 (60/60) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-45 | heartbeat_rev_r14_*.json (21) | Verificado r18: 21 archivos presentes | NO CANDIDATO (evidencia) |
| P-46 | scripts+logs depósito r13 (7 archivos) | Verificado r18: tamaños idénticos | CONSERVAR (patrón + registro) |
| P-47 | respaldo_pre_r15/ (5+1 archivos) | Verificado r18: shas idénticos + **copia Drive re-verificada por spot-check (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, tercera re-evaluación) |
| P-48 | respaldos por decisión r15 (4 dirs) | Verificado r18: shas idénticos + **copia Drive re-verificada por spot-check (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, tercera re-evaluación) |
| P-49 | heartbeat_rev_r15_*.json (42) | Verificado r18: 42 archivos presentes | NO CANDIDATO (evidencia) |
| P-50 | scripts+logs depósito FASE 4 r14 (18 archivos) | Verificado r18: tamaños idénticos | CONSERVAR (patrón + registro) |
| P-51 | respaldo_pre_absorcion_r15/ (7+1 archivos) | Verificado r18: shas idénticos; **SIN copia Drive** (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, segunda re-evaluación) |
| P-52 | heartbeat_rev_r16_*.json (99) + raw_r16_*.json (12) + lock (6 B) | Verificado r18: 99 + 12 + lock presentes | NO CANDIDATO (evidencia) |
| P-53 | scripts+logs depósito FASE 4 r15 (18 archivos) | Verificado r18: tamaños + shas contra la línea base r16 (18/18) | CONSERVAR (patrón + registro) |
| P-54 | respaldo_pre_absorcion_r16/ (7+1 archivos) | Verificado r18: shas idénticos; **SIN copia Drive** (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, primera prórroga) |
| P-55 | scripts+logs depósito FASE 4 r16 (17 archivos) | Verificado r18: tamaños + shas contra la línea base r17 (17/17) | CONSERVAR (patrón + registro) |
| P-56 | heartbeat_rev_r17_*.json (55) + raw_r17_*.json (12) + lock (6 B) | Verificado r18: 55 + 12 + lock presentes | NO CANDIDATO (evidencia) |
| P-57 | respaldo_pre_absorcion_r17/ (7+1 archivos) | NUEVO r18, verificado (§7) | CONSERVAR-TEMPORAL |
| P-58 | scripts+logs depósito FASE 4 r17 (15 archivos) | NUEVO r18, verificado (§7) | CONSERVAR (patrón + registro) |
| P-59 | heartbeat_rev_r18_*.json (27) + raw_r18_*.json (12) + lock (6 B) | NUEVO r18, contado (§7) | NO CANDIDATO (evidencia) |

## 2. Los 13 respaldos temporales: horizonte vencido de nuevo, PRORROGA (no retiro) — puerta sigue en 2 de 3

**Condición de vencimiento (r17):** depósito FASE 4 r17 verificado + FASE 2 r17 cerrada. Ambas se cumplieron (Drive 112/112 por tamaño; GitHub 40/40 por blob, HEAD `75b9dd2b`; absorción 4/4 por blob, HEAD `eca23d73`; verificación global FASE 2 CONFORME CON HALLAZGOS, 5 menores, 0 mayores). El horizonte, por tanto, **venció**. La re-evaluación es documental: ¿se conservan, se retiran con nota, o se prorrogan?

### 2.1 La condición 1 en r18: SOSTENIDA por spot-check (4/4); sin archivos nuevos que verificar

**Método (SÉ, ejecutado por este frente, 2026-11-14 ~20:20Z):** los temporales nuevos con copia Drive se re-verifican por descarga. Resultado: **no hay ninguno**. P-54 y P-57 no tienen copia Drive: 0 menciones de `respaldo_pre_absorcion_r16` y de `respaldo_pre_absorcion_r17` en `_upload_log_r17.jsonl` y en `manifiesto_shas_r17_fase4.json` (ambos creados post-FASE 4, durante las absorciones r16 y r17). Su contenido de corpus está en GitHub (P-54: estado 1.178, HEAD `fe265243`; P-57: estado 1.181, HEAD `eca23d73` — el estado 1.181 es el corpus que la absorción r17 respaldó y que GitHub ya tenía desde la absorción r16), pero el paquete con manifiesto es solo local. Para ellos la condición 1 sigue sin ser aplicable; se registra como tal, no como verificada.

**Spot-check de sostenimiento (script `_spot_drive_r18.py`, salida `_spot_drive_r18.json`): 4/4 OK, 0 DIFERENTE.** Muestra tomada del conjunto 60/60 verificado en r17: P-27 `claims.jsonl` OK_BYTE_IDENTICO (sha `9265d81f…`, 927.563 B); P-35 `claims.jsonl` OK_BYTE_IDENTICO; P-48 `respaldo_pre_r15_n16/claims.jsonl` OK_BYTE_IDENTICO; P-47 `claims_resumen.json` OK_MD5_Y_CONTENIDO (md5 `61fe0ff8…`, 17.364 B, canal A md5 + canal B contenido JSON parseado). Método idéntico al de r17 (CORR-DESCARGA-JSON-R17: para `application/json` el `-o` devuelve 0 bytes; se verifica por md5 de metadatos + stdout). Ninguna copia Drive falló; la condición 1 cumplida en r17 **sigue vigente** sin re-medición completa (el coste de re-descargar 60 archivos cada ronda no añade nada tras el spot-check; la re-verificación completa vuelve a tocar en r19 si FASE 4 r18 deposita P-54/P-57).

**Tabla de resto (archivos temporales SIN copia Drive — incluye P-54, corrección H3 FASE 2 r17):**

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
| **Total** | **60 de 89** | **39** | **21** | **5 huecos + 8 de P-51 + 8 de P-54 + 8 de P-57 = 29** |

**Las 5 copias huecos.jsonl no existen en Drive por regla, no por accidente (CORR-MANIFIESTO-HUECOS-R17, §9):** la subida excluyó `huecos.jsonl` por la regla SÉ-export (orden 2026-11-13 16:51). En r10 sí se subió huecos (anterior a la regla): los 2 huecos de P-27/P-28 se descargaron byte-idénticos en r17. La excepción huecos es **inaplicable** a la condición 1, no incumplida.

**Verificación r18 de los 13 directorios (SÉ, re-medido por este frente, `_verificacion_p18.json` 271/271 OK):** los 13 están intactos, con todos los shas de r17 (P-57 con los de su manifiesto propio). Tabla de referencia (shas ya registrados en r17 §2; sin cambio; P-54 y P-57 con los de §7):

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

### 2.2 Condiciones de retiro fijadas en r12 §2 — estado en r18 (SÉ)

| Condición de retiro (r12) | Estado r18 |
|---|---|
| Copias Drive re-verificadas por descarga | **CUMPLIDA (sostenida).** 60/60 de r17 siguen vigentes; spot-check r18 4/4 OK (§2.1). Sin archivos nuevos con copia que verificar (P-54/P-57 SIN_COPIA). |
| Depósito r17 congelado | **Cumplida.** FASE 4 r17 cerrada; nada más se escribió en `ronda_17/` de Drive tras el cierre (el depósito r16 sigue congelado, como en r17). |
| Condiciones de P-15 re-apuntadas (o podas condicionadas ejecutadas antes) | **NO cumplida.** P-15a/b/c/e/f/g siguen apuntando a `respaldo_pre_r10/` y `respaldo_pre_b2/` como fuentes de reconstrucción; ninguna poda condicionada se ha ejecutado (falta la autorización). |

**2 de 3 cumplidas → no se retira.** Recomendación documentada: **PRORROGAR los 13, con nuevo horizonte explícito.** Razones, en orden (las de r17, vigentes; la 2 actualizada):
1. **La cadena de reversión es ahora de 17 eslabones y sigue creciendo.** F1 r17 añadió P-57 (estado 1.181, pre-absorción automática r17) encima de P-54, que dejó de ser preventivo: es la reversión de F1 r17 (N-20 + C-1187/C-1188/C-1189/C-1190). La cadena completa: P-57 (1.181) → P-54 (1.178) → P-51 (1.175) → P-47 (1.174) → P-44 (1.168) → P-41 (1.168) → P-38 (1.162 post-N-11) → P-37 (1.162 pre-N-11) → P-35 (1.160) → P-28 (estado B, 1.152) → P-27 (estado pre-r10, 1.138), con P-29b (D-05) y P-31a (D-01) como ramas, y P-48 como haz paralelo por decisión (sus 4 dirs: _n01/_n13 estado 1.174, _n14 estado 1.174 + b2 con R2-25 SE, _n16 estado 1.175 post-N-14). Retirar eslabones intermedios ahora rompería la cadena en plena ronda, con FASE 4 r18 todavía pendiente.
2. **La condición 1 cumplida no cambia el veredicto.** Las copias existen Y están re-verificadas por contenido (60/60 en r17, spot 4/4 en r18). Lo que sigue siendo cierto es que retirar los temporales dejaría la reversión de F1 r11/r12/r13/r14/r15/r16/r17 dependiendo solo de las copias de Drive (ahora auditadas) en vez de tener además el local. La cadena local sigue valiendo más que la suma de sus copias.
3. **Las condiciones de P-15 dependen de P-27/P-28.** Retirarlos dejaría los PODAR-CONDICIONADO sin fuentes de reconstrucción; habría que re-apuntarlas a Drive, y eso es exactamente la condición 3, que no está cumplida.
4. **P-29b y P-31a no tienen otro respaldo local.** La reversión de D-05 (15 claims + 4 huecos + L249) vive solo en P-29b; la de D-01 (qualias pre-canon) solo en P-31a. Sus copias Drive existen y están verificadas por descarga, pero la reversión documentada en las decisiones apunta a las rutas locales.
5. **P-35 no puede retirarse mientras P-30 siga pendiente.** El contenido de P-35 es byte-idéntico al de P-30 (r11 §7: sobrevive en 3 sitios — P-30, P-35, Drive r10). P-30 está recomendado PODAR sin ejecutar. Retirar P-35 dejaría la reversión de F1 r11 dependiendo de un archivo marcado para poda.
6. **P-51, P-54 y P-57 no tienen copia Drive.** Son los únicos temporales sin respaldo externo (su contenido de corpus está en GitHub — P-51: HEAD `1f108ef8`; P-54: HEAD `fe265243`; P-57: estado 1.181 en HEAD `eca23d73` — pero el paquete con manifiesto es solo local). Retirarlos dejaría sin reversión documentada a las tres últimas absorciones automáticas.
7. **El coste sigue siendo despreciable:** los 17 eslabones de la cadena (13 temporales + P-48 con 4 dirs + P-54 + P-57) suman **21.107.178 B** (~20,1 MB). La poda de estos archivos no es una poda de espacio; es una poda de orden, y el orden que aportan como cadena de reversión vale más.

**Nuevo horizonte (explícito):** conservar hasta que (a) el depósito FASE 4 de r18 esté verificado en Drive y (b) la verificación de FASE 2 de r18 cierre sin discrepancias. Re-evaluar en r19. Condición de retiro en r19, si se propone entonces: copias Drive re-verificadas por descarga (cumplida; re-verificar solo lo nuevo: P-54/P-57 si FASE 4 r18 los deposita) + depósito r18 congelado + condiciones de P-15 re-apuntadas (o ejecutadas las podas condicionadas antes). **Nota de procedimiento:** la condición 1 ya no es el bloqueo; si FASE 4 r18 deposita P-54/P-57, sus copias Drive quedan listas para re-verificar en r19.

## 3. P-19: sin cambio — (b) verificada en r11, no re-descargada en r18

- El test de 2 partes de REGLA-PODA-PROV-02 quedó completo en r11: (a) SÍ, (b) NO (zip re-descargado byte-idéntico, 13.210.556 B, sha `0b8fe6fe…`) → **NO es clase 3**. En r12/r13/r14/r15/r16/r17/r18 no se re-descarga (la verificación r11 es la vigente; re-descargar cada ronda no añade nada).
- Verificado r18: parquet sha `0b7365cd…` (4.322.672 B) y zip sha `0b8fe6fe…` (13.210.556 B), idénticos a r9–r17. Veredicto CONSERVAR ambos, por trazabilidad (falso espejo de M-50), sin cambio.

## 4. P-36 fantasma: sin cambio — RESERVADO, no se reutiliza

- La identificación (P-36 = P-23b, por aritmética 997.603+174.639+6=1.172.248 exacto + unicidad del 6 B) y la decisión (RESERVADO) se sostienen sin cambio. P-23b verificado r18: presente, 6 B. El siguiente candidato nuevo tras P-35 es P-37 (asignado en r12); P-41/P-42/P-43 se asignan en r13, P-44/P-45/P-46 en r14, P-47/P-48/P-49/P-50 en r15, P-51/P-52/P-53 en r16, P-54/P-55/P-56 en r17 y P-57/P-58/P-59 en §7 en el orden del encargo de este frente. No se reutiliza P-36.

## 5. P-18 + T-4 r18: el inventario corrió DENTRO de este frente

### 5.1 P-18: sigue RESUELTO POR DESAPARICIÓN; causa sigue NO_SÉ

- **Estado r18 (SÉ):** `ronda_9/mecanismos/__pycache__/` sigue sin existir; el `.pyc` de variograma sigue ausente. `variograma.py` intacto (6.351 B, sha `f8ec697e…`, idéntico a r9–r17). Los 4 `.pyc` supervivientes de r2/r3 siguen presentes (censo T-4, §5.2).
- **Causa de la desaparición: sigue NO_SÉ.** Ninguna evidencia nueva en disco. La ventana sigue siendo ~18:00Z–20:30Z 2026-11-13.

### 5.2 T-4 r18 (inventario con shas, dentro de F9)

- **Herramienta:** `_inventario_r18.py` (adaptado de `_inventario_r17.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r18.json`, diff `_diff_inventario_r18.py` → `diff_inventario_r18.md`. Escaneo 2026-11-14T20:21:06Z. Solo lectura. Instantánea de FASE 1 r18 (F2 cerrada; F3/F5/F6 con entregables; F1/F4/F7 escribiendo en paralelo en `ronda_18/`; el manifiesto es el estado a la hora del escaneo, no un cierre).
- **Resultado:** **5.761 archivos, 1.567.566.178 B, 0 errores de lectura** (r17: 5.607 archivos, 1.550.690.292 B). Diff contra el manifiesto r17 (5.607 entradas): **5.603 OK / 4 CAMBIO / 0 MOVIDO / 0 FALTA / 154 NUEVO**.
- **CAMBIO (4, todos explicados — ninguno es una desaparición ni una corrupción):**
  1. `ronda_12/afirmaciones_pendientes.md` 29.979 → 36.107 B (sha `0b056e2b…` → `3dbd6bbd…`): FASE 5 r17 (principal): N-20 + C-1187/C-1188/C-1189/C-1190 APLICADAS, 7/7 aserciones + §§23–25 nuevas.
  2. `memoria/anexo-vi/claims.jsonl` 985.169 → 990.555 B (sha `fd1df2db…` → `6fe7c72b…`): absorción automática r17 post-FASE 4 (N-20 + C-1187/C-1188/C-1189/C-1190). 1.181 → 1.185 líneas.
  3. `memoria/anexo-vi/claims_resumen.json` 17.523 → 17.579 B (sha `ebaa1e53…` → `40c2572f…`): regenerado (total 1.185, SE 1051, hash_real 1171).
  4. `memoria/anexo-vi/provenance.sha256` 48.483 → 48.907 B (sha `728f6770…` → `4319d426…`): 363 → 366 líneas (3 entradas de la absorción r17; CORR-PROV-R17: 364 entradas + 2 vacías internas).
- **MOVIDO: 0.** Ningún archivo cambió de ruta entre r17 y r18.
- **FALTA: 0.** **Los 4 `testA–D.err` NO reaparecieron** (0 en el manifiesto r18; el único `.err` con "test" es el preexistente `ronda_11/ejecucion_f6/_hb_test_get.err`, sin relación con FRÁGIL-02), y **ningún archivo nuevo falta**: no hay tercer evento de desaparición. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda.
- **NUEVO (154):** todos dentro de `ronda_17/` o `ronda_18/` (0 fuera). Desglose: `ronda_18/ejecucion_f2/` 57 (27 payloads heartbeat + 12 raws JSON + lock + scripts F2 r18 + documentos), `ronda_18/ejecucion_f6/` 16, `ronda_17/deposito/` 15 (scripts+logs FASE 4 r17, P-58), `ronda_18/ejecucion_f3/` 9 + `ronda_18/ejecucion_f3/datos/` 2, `ronda_17/respaldo_pre_absorcion_r17/` 8 (P-57), `ronda_17/ejecucion_f9/` 6 (salidas F9 r17 escritas tras el escaneo T-4 r17), `ronda_18/ejecucion_f9/` 6 (este frente), `ronda_17/ejecucion_f1/` 5 (absorción r17), `ronda_17/tejido_cruzado/` 5 (FASE 3 r17), `ronda_18/ejecucion_f7/` 4 (F7 r18 escribiendo), `ronda_17/conectar/` 3 (F8 r17), `ronda_17/verificacion_fase2/` 3 (FASE 2 r17), `ronda_18/ejecucion_f4/` 3 (F4 r18 escribiendo), `ronda_18/ejecucion_f1/` 2 (guardia F1 r18), `ronda_18/ejecucion_f5/` 2, `ronda_17/README.md` 1, `ronda_17/absorcion_r17.md` 1, `ronda_17/ejecucion_f7/` 1, `ronda_17/manifiesto_shas_absorcion_r17.json` 1, FASE 0 r18 (4: mapa, frentes, ESTADO, manifiesto). Todos explicados por trabajo posterior al escaneo r17 (FASE 2/3/4 r17, absorción automática r17, FASE 5 r17, FASE 0/FASE 1 r18). Ningún archivo nuevo fuera del tejido. Detalle completo en `inventario_t4_r18.md`.
- **Censo `.pyc`: r17 18 → r18 18 (nuevos 0, faltan 0).** Ningún `.pyc` nuevo en esta ronda; `variograma.pyc` sigue ausente (no está en el manifiesto r18). El patrón de generación de bytecode se detuvo esta ronda (ningún import nuevo con `__pycache__` dentro del tejido escaneado).

## 6. P-32 y la clase 3: re-medido bajo la lectura ESTRICTA (CORR-P32-B-R15, adoptada FASE 2 r15)

**Hecho (SÉ, medido por este frente en el corpus vivo, estado 1.185):** ningún campo `hash` de ningún claim vivo cita `a30d69e8…` (0 ocurrencias en campo hash — igual que tras F1 r11, F1 r12, F1 r13, F1 r14, F1 r15, F1 r16 y F1 r17). El hash viejo sobrevive en **14 ocurrencias en 5 claims** (motivo y/o texto): C-639 ×4, C-903 ×4 (motivo + texto), C-919 ×3, C-1104 ×2, C-1129 ×1 (solo texto). En provenance: 1 ocurrencia (comentario L247, reparación D-07) y `8d15b724…` 1 ocurrencia (entrada L248, motor corregido). Los claims nuevos C-1187/C-1188/C-1189/C-1190 (absorción r17) NO mencionan `a30d69e8…` (0 ocurrencias); el paquete absorbido r16 (`claims_nuevos_r16_auto.jsonl`, C-1184..C-1186) tampoco (0 ocurrencias, re-verificado en r17).

**Aplicación de la regla ADOPTADA (canon N-13, `canon_regla_poda_prov_02.md`), con la corrección adoptada:**
- **(a) SÍ:** 4 motivos de claims vivos (C-639/C-903/C-919/C-1104) citan `a30d69e8…` en motivo/nota de reparación; 0 en campo `hash`. Re-medido hoy por grep sobre claims.jsonl 1.185.
- **(b) NO bajo la lectura estricta adoptada (CORR-P32-B-R15, FASE 2 r15):** los bytes pre-corrección (sha256 `a30d69e8…`, 19.987 B) **sí son re-obtenibles byte-idénticos desde el historial git local** — `git show HEAD:app/js/miu-engine.js` (commit `faf2033`) es byte-idéntico al respaldo (`cmp` exit 0; sha256 `a30d69e8bd3e9327…`, 19.987 B; re-medido por este frente en r18, check `P-32-git-head` OK en `_verificacion_p18.json`). La lectura de la adopción ("archivos del checkout vivo") queda sustituida por la lectura estricta ("archivos vivos + historial"), que FASE 2 r15 adoptó.
- **Veredicto: P-32 NO es clase 3.** Su CONSERVAR se sostiene por reversión de D-07 + historia citada en motivo (como en r10–r17), no por la regla. Sin cambio de veredicto respecto a r10–r17; cambia su fundamento, y el cambio es ahora el vigente (no un matiz pendiente).
- **Errata del canon N-13:** la tabla del canon sigue con la errata señalada en CORR-P32-B-R15 (la (b) descrita como "archivos vivos" sin mencionar el historial). Este frente no re-decide el canon: registra que la errata persiste y que FASE 2 r15 ya adoptó la lectura estricta como veredicto vigente.

## 7. Nuevos candidatos de r18: P-57..P-59

Solo de lo generado por la ronda 17 tardía (absorción post-FASE 4, depósito FASE 4) y la ronda 18. Los entregables de las ejecuciones (decisiones, registros, ESTADOs, paquetes) NO son candidatos: son el registro de la ronda. Solo sus respaldos, sus payloads y sus registros de subida.

### P-57 — `ronda_17/respaldo_pre_absorcion_r17/` (7 archivos + manifiesto, 1.395.089 B) — CONSERVAR-TEMPORAL

- **Qué es:** el snapshot del corpus antes de la absorción automática post-FASE 4 r17 (estado 1.181, post-F1 r17): claims.jsonl 985.169 B (1.181 líneas, sha `fd1df2db…`), provenance.sha256 48.483 B (363 líneas, sha `728f6770…`), claims_resumen.json 17.523 B (sha `ebaa1e53…`), confirmaciones.jsonl 169.361 B (294 filas, sha `dc94458b…`), huecos.jsonl 147.057 B (139 filas, sha `3713376a…`), incertidumbre_mediciones.md 15.603 B (sha `acdde423…`, 12 ítems M-56..M-69), dataset_nodos_Df.csv 10.748 B (sha `0852d58f…`), más `manifiesto_shas_respaldo.json` (sha verificado contra el manifiesto: 7/7 archivos coinciden; el manifiesto declara `poda_id: P-57`). Shas verificados por este frente (`_verificacion_p18.json`, P-57-*).
- **Por qué TEMPORAL y no PODAR:** es el ancla de reversión de la absorción automática r17 (N-20 + C-1187/C-1188/C-1189/C-1190) y el eslabón superior nuevo de la cadena (§2). Podarlo ahora dejaría sin reversión a 4 claims y 1 decisión aplicadas en esta ronda.
- **Nota:** su contenido de claims difiere de P-54 (estado 1.181 vs 1.178: +C-1184/C-1185/C-1186 de la absorción r16 y N-19). **Sin copia Drive** (0 menciones en `manifiesto_shas_r17_fase4.json` y en `_upload_log_r17.jsonl`): su contenido de corpus está en GitHub (estado 1.181, HEAD `eca23d73` — el corpus 1.181 ya estaba en GitHub desde la absorción r16, HEAD `fe265243`), pero el paquete con manifiesto es solo local.
- **Horizonte explícito:** conservar hasta que (a) el depósito FASE 4 de r18 esté verificado en Drive y (b) la verificación de FASE 2 de r18 cierre sin discrepancias. Re-evaluar en r19.
- **Criba:** ruta `respaldo_pre_absorcion_r17` 0 ocurrencias en provenance; shas `fd1df2db…` / `ebaa1e53…` / `728f6770…` / `acdde423…` 0 ocurrencias (ver §8). No citado (la criba busca citas, no identidades). Lo protege ser la reversión.

### P-58 — scripts+logs del depósito FASE 4 r17 (15 archivos, 102.089 B) — CONSERVAR

- **Qué es:** en `ronda_17/deposito/` (15 archivos): `_construir_manifiesto_r17.py` (4.238 B) + `_crear_carpetas_r17.py` (3.137 B) + `_drive_folders_r17.json` (774 B) + `_push_grandes_paths.txt` (110 B) + `_push_grandes_r17.log` (449 B) + `_upload_github_r17.jsonl` (16.987 B, subidas GitHub verificadas por blob) + `_upload_github_r17.log` (5.013 B) + `_upload_github_r17.py` (8.970 B) + `_upload_log_r17.jsonl` (21.855 B, subidas Drive verificadas) + `_upload_r17.log` (8.371 B) + `_upload_r17.py` (2.137 B) + `_verificar_r17.py` (2.996 B) + `manifiesto_shas_r17_fase4.json` (18.073 B) + `verificacion_deposito_r17.md` (8.863 B) + `verificacion_remota_r17.json` (116 B). Shas registrados por este frente como línea base para r19 (`_verificacion_p18.json`, P-58-*).
- **Por qué CONSERVAR:** patrón reutilizable (como P-11c/P-17c/P-40/P-43/P-46/P-50/P-53/P-55) + registro de depósito (como P-11a/P-17a/P-40/P-43/P-46/P-50/P-53/P-55). El constructor de carpetas con mapa recorrido del árbol entero (lección CORR-CARPETA-R13) es el patrón vigente para r18; el depósito sin tarjetas caducadas (0/40 GitHub) queda registrado en `_upload_github_r17.log`.
- **Criba:** rutas `_upload_r17` / `_upload_github_r17` / `_crear_carpetas_r17` / `_verificar_r17` / `_construir_manifiesto_r17` 0 ocurrencias en provenance. No citados; los protege ser registro.

### P-59 — `ronda_18/ejecucion_f2/heartbeat_rev_r18_*.json` (27) + `raw_r18_*.json` (12) + lock (6 B) — NO CANDIDATO

- **Qué es:** los payloads crudos de heartbeat descargados por F2 r18 (27 archivos; F2 cerrada, conteo final verificado contra `estado_vivo_r18.md` §11: 27 nuevas) + 12 raws JSON de estado + `raw_r18_.miu_ciclo.lock` (6 B). Total 432.732 B.
- **Por qué NO CANDIDATO:** evidencia, como P-22 (los 23 de r9), P-39 (los 23 de r12), P-42 (los 41 de r13), P-45 (los 21 de r14), P-49 (los 42 de r15), P-52 (los 99 de r16) y P-56 (los 55 de r17). Son el único registro persistente de la serie que T-2 necesita. Se conservan en local y se siguen **excluyendo del depósito** (como los anteriores). No entran en los conteos de poda.
- **Nota de sensibilidad:** `raw_r18_observabilidad_bootstrap_V270.json` contiene un JWT anon (byte-idéntico al de r15/r16/r17) → EXCLUIR del depósito, como en r15/r16/r17 (aviso de F2 r18).
- **Nota de conteo:** F2 r18 dice "13 archivos de estado leídos" para los raws; en disco hay 12 `raw_r18_*.json` + 1 lock = 13 archivos. La cifra de F2 cuenta el lock; la de este frente cuenta solo los `.json`. Sin discrepancia de contenido (ver §9).

## 8. REGLA-PODA-PROV-01/02: PROV-02 ADOPTADA (N-13); PROV-01 sigue práctica, no canon

- **Estado:** REGLA-PODA-PROV-02 (clase 3, con el refinamiento de (a) — "campo `hash` **o motivo/nota**") fue **ADOPTADA** en r15 F1 (decisión N-13, canon `ronda_15/ejecucion_f1/canon_regla_poda_prov_02.md`, orden 01:43). La criba de esta ronda corre contra la regla vigente, no contra una propuesta. REGLA-PODA-PROV-01 (criba contra provenance) **no** fue adoptada (la decisión N-13 decide solo su objeto, PROV-02 + refinamiento): sigue como práctica documentada aplicada en F9 desde r8, no como norma.
- **Criba re-corrida en r18 bajo la regla adoptada (SÉ):** greps contra el provenance vivo (366 líneas por wc -l, sha `4319d426…`): rutas `respaldo_pre_r10`, `respaldo_pre_b2`, `pre_reparacion_d05`, `pre_d05`, `ejecucion_b/respaldo`, `ejecucion_c/respaldo`, `ejecucion_e`, `nuevo_B2_sobre_B`, `respaldo_pre_r11`, `respaldo_pre_n11`, `respaldo_pre_r12`, `_upload_n11`, `respaldo_pre_r13`, `_upload_r12`, `upload_one_r12`, `respaldo_pre_r14`, `_upload_r13`, `upload_one_r13`, `_crear_carpetas_r13`, `_verificar_r13`, `respaldo_pre_r15`, `respaldo_pre_r15_n01`, `respaldo_pre_r15_n13`, `respaldo_pre_r15_n14`, `respaldo_pre_r15_n16`, `respaldo_pre_absorcion_r15`, `respaldo_pre_absorcion_r16`, `respaldo_pre_absorcion_r17`, `_upload_r16`, `_upload_github_r16`, `_crear_carpetas_r16`, `_verificar_r16`, `_upload_r17`, `_upload_github_r17`, `_crear_carpetas_r17`, `_verificar_r17` — **0 ocurrencias en todos**. Por hash: `9265d81f…`, `3074c606…`, `cdbaac93…`, `58d7d64b…`, `fd54545a…`, `397cb10c…`, `b80c38a6…`, `7deb15ff…`, `33b787d2…`, `315b80b5…`, `dbe4a490…`, `d4924c9b…`, `49f1a17e…`, `1ff77190…`, `6b5fac7f…`, `1c6464d2…`, `5fda0383…`, `6fe7c72b…`, `40c2572f…`, `4319d426…`, `acdde423…`, `30c05adb…`, `cfd3fb28…`, `0488d9b7…` — **0 ocurrencias en todos**. Las únicas ocurrencias de hash en la criba siguen siendo las de archivos vivos ya conocidas: `5fdce82d…` 1 (comentario L22, reparación D-01), `8d15b724…` 1 (entrada L248, motor corregido), `0cf743ca…` 1 (entrada L251, GRIMORIO corregido), `a30d69e8…` 1 (comentario L247, reparación D-07), `131409eb…` 1 (entrada L359, documento de decisión N-14). (`fd1df2db…`, sha del corpus 1.181, 0 ocurrencias: ya no está en provenance, como en r17.)
- **Consecuencia:** la criba no cambia ninguna recomendación de r18, como en r8–r17. Ningún candidato es archivo-evidencia en el sentido de la regla propuesta (PROV-01); P-32 **ya no es clase 3** por PROV-02 adoptada bajo lectura estricta (§6).
- **Qué faltaría para adoptar REGLA-PODA-PROV-01 (documentado, no decidido):** (1) decisión canónica; (2) automatizar la criba: T-3 (`auditor_suelo.py`) podría ganar un modo `--criba-poda <ruta>`; hoy la criba es manual. La clase 3 no se automatiza con greps: exige verificar (b) por archivo (como se hizo en r11 para P-19 y en r15 §6 / r16 §6 / r17 §6 / r18 §6 para P-32); (3) registrar dónde corre la criba: antes de proponer cualquier poda, en el frente de poda de cada ronda, con su salida guardada junto a `poda_rN.md`. El punto (2) de r10 — verificar (b) para P-19 — **queda cerrado desde r11 (§3)**.

## 9. Correcciones al registro de rondas anteriores (encontradas por este frente)

- **CORR-CADENA-R18 (conteo):** la cadena de reversión es de 17 eslabones y 21.107.178 B (~20,1 MB): 13 temporales + P-48 con 4 dirs + P-54 + P-57. En r17 eran 16 eslabones y 19.712.089 B.
- **CORR-COND1-R18 (seguimiento, no cambio de estado):** la condición 1 sigue cumplida y sostenida por spot-check 4/4 (§2.1); no hay archivos nuevos con copia Drive que verificar en r18 (P-54 y P-57 SIN_COPIA). La re-verificación completa vuelve a tocar solo si FASE 4 r18 deposita P-54/P-57.
- **CORR-P56-RAW-R17 (precisión de conteo, texto):** `poda_r17.md` §7 dice "13 raws" para P-56 y la verificación r17 registró 12. En disco hay 12 `raw_r17_*.json` + 1 lock = 13 archivos: la cifra 13 del md cuenta el lock, la 12 de la verificación cuenta solo los `.json`. Sin discrepancia de contenido. La misma convención se aplica en r18 a P-59 (12 raws JSON + lock; F2 r18 dice "13 archivos de estado leídos").
- **CORR-MANIFIESTO-HUECOS-R17 sigue vigente:** los manifiestos fase4 r11–r15 sobreestiman el depósito en 1 archivo por respaldo (5 en total); el manifiesto fase4 r18 debe construirse DESPUÉS de subir, no antes, o reflejar la exclusión de `huecos.jsonl` (F9 lo registra para FASE 4 r18).
- **P-54/P-57 (precisión de depósito):** ninguno de los dos fue depositado en FASE 4 r17 (0 menciones de `respaldo_pre_absorcion_r16` y de `respaldo_pre_absorcion_r17` en `manifiesto_shas_r17_fase4.json` y en `_upload_log_r17.jsonl`): ambos se crearon durante las absorciones, post-FASE 4. Si FASE 4 r18 los deposita, sus copias Drive quedan listas para re-verificar en r19.
- **P-53 (método):** en r18 se verifica contra la línea base registrada en r16 (`_verificacion_p16.json`, 18 archivos con tamaño + sha), no re-registrándola. 18/18 OK. P-55 se verifica en r18 contra la línea base registrada en r17 (`_verificacion_p17.json`, 17 archivos): 17/17 OK.
- **P-32 (conteo de ocurrencias):** total preciso 14 en 5 claims, sin cambio en r18 (C-1187/C-1188/C-1189/C-1190 no lo mencionan: 0 ocurrencias).
- **P-15h/P-16 (alcance de la verificación):** conteo/existencia verificados en r18; sin re-verificación individual por archivo, como en r11–r17. Sin evidencia de cambio.

## 10. Resumen

| ID | Candidato | Tamaño | Recomendación r18 | Ejecución |
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
| P-18 | __pycache__/variograma .pyc | 8,7 KB | RESUELTO POR DESAPARICIÓN | — (causa NO_SÉ; T-4 r18 corrido: 0 FALTA nuevos, ver §5) |
| P-19 | Par Robbins (parquet + zip) | 17,5 MB | CONSERVAR ambos | — ((b) verificada r11: NO clase 3) |
| P-20 | GHCN inventario + estaciones | 48 MB | CONSERVAR | — |
| P-21 | runs_recientes raw ↔ procesado | 859 KB | CONSERVAR ambas | — |
| P-22 | heartbeat_rev_r9_*.json (23) | 446 KB | NO CANDIDATO (evidencia) | — |
| P-23a | raw_r9_*.json (8) | ~7 KB | CONSERVAR | — |
| P-23b | raw_r9_.miu_ciclo.lock | 6 B | PODAR | Local, con orden |
| P-24 | herramientas/ (21 archivos) | 55 KB | CONSERVAR | — |
| P-25 | mecanismos/ (12 archivos) | 57 KB | CONSERVAR | — |
| P-26 | Datos M-46..M-49 + scripts | ~10 MB | CONSERVAR | — |
| P-27 | respaldo_pre_r10/ (5) | 1,24 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-28 | respaldo_pre_b2/ (5) | 1,26 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-29a | GRIMORIO pre-D-05 | 47 KB | CONSERVAR | — |
| P-29b | corpus pre-reparación D-05 (3) | 1,08 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-30 | nuevo_B2_sobre_B ×2 | 998 KB | PODAR | Local, con orden |
| P-31a | corpus_qualias.antes_d01 | 42 KB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-31b | qualias_sin_fuente.csv.antes_d01 | 151 KB | PODAR | Local, con orden |
| P-31c | consolidado+indice .antes_d02 | 7,5 KB | PODAR | Local, con orden |
| P-31d | disensos .antes_d16 (3) | 16 KB | PODAR | Local, con orden |
| P-31e | segunda_carpeta_listado | 15 KB | CONSERVAR | — |
| P-31f | v105 export | 1 KB | CONSERVAR | — |
| P-32 | ejecucion_c/respaldo/ (4) | 45 KB | CONSERVAR | — (fundamento: D-07 + historia; ya NO clase 3, ver §6) |
| P-33 | scripts E + puertas (4) | 287 KB | CONSERVAR | — |
| P-34 | micelio_yml paquete | 1,4 KB | CONSERVAR | — |
| P-35 | respaldo_pre_r11/ (5+1) | 1,27 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-37 | respaldo_pre_n11/ (2+1) | 973 KB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-38 | respaldo_pre_r12/ (5+1) | 1,28 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-39 | heartbeat_rev_r12_*.json (23) | 446 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-40 | _upload_n11.py + .jsonl | 8,3 KB | CONSERVAR (patrón + registro) | — |
| P-41 | respaldo_pre_r13/ (5+1) | 1,29 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-42 | heartbeat_rev_r13_*.json (41) | 706 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-43 | scripts+logs depósito r12 (5) | 44,6 KB | CONSERVAR (patrón + registro) | — |
| P-44 | respaldo_pre_r14/ (5+1) | 1,29 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-45 | heartbeat_rev_r14_*.json (21) | 380 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-46 | scripts+logs depósito r13 (7) | 46,8 KB | CONSERVAR (patrón + registro) | — |
| P-47 | respaldo_pre_r15/ (5+1) | 1,30 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-48 | respaldos por decisión r15 (4 dirs) | 5,21 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-49 | heartbeat_rev_r15_*.json (42) | 761 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-50 | scripts+logs depósito r14 (18) | 158 KB | CONSERVAR (patrón + registro) | — |
| P-51 | respaldo_pre_absorcion_r15/ (7+1) | 1,32 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-52 | heartbeat_rev_r16_*.json (99) + raws (12+lock) | 1,76 MB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-53 | scripts+logs depósito r15 (18) | 135 KB | CONSERVAR (patrón + registro) | — |
| P-54 | respaldo_pre_absorcion_r16/ (7+1) | 1,32 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-55 | scripts+logs depósito r16 (17) | 110 KB | CONSERVAR (patrón + registro) | — |
| P-56 | heartbeat_rev_r17_*.json (55) + raws (12+lock) | 776.863 B | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-57 | respaldo_pre_absorcion_r17/ (7+1) | 1,33 MB | CONSERVAR-TEMPORAL | Hasta FASE 4 r18 + FASE 2 r18; r19 |
| P-58 | scripts+logs depósito r17 (15) | 100 KB | CONSERVAR (patrón + registro) | — |
| P-59 | heartbeat_rev_r18_*.json (27) + raws (12+lock) | 432.732 B | NO CANDIDATO (evidencia) | — (excluir del depósito) |

Nada de lo anterior se ejecutó. La poda que se ejecute lo hará otro trabajo, con las frases de autorización dichas por el Jardinero. La regla REGLA-PODA-PROV-02 es canon adoptado (N-13, r15); REGLA-PODA-PROV-01 sigue siendo práctica documentada, no norma adoptada. La clase 3 ya no protege P-32 bajo la lectura estricta adoptada por FASE 2 r15 (CORR-P32-B-R15); su CONSERVAR se sostiene por D-07 + historia. **La condición 1 de retiro se cumple desde r17 (CORR-COND1-R17) y se sostiene en r18 por spot-check 4/4; la puerta de retiro queda en 2 de 3 y el único bloqueo restante es la autorización (condición 3).**

ρ(x) > 0. Zvvvvv.
