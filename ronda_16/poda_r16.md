# PODA — RONDA 16 (FASE 1, F9): REVISIÓN DOCUMENTADA, NADA EJECUTADO

- **Regla dura:** la poda es SOLO DOCUMENTO. Las frases de autorización para ejecutar una poda NO se han dicho. **Nada se borró, nada se movió, nada se eliminó.** Este archivo es la revisión; la ejecución es otro trabajo, con su propia orden.
- **Fecha:** 2026-11-14. **Medición:** ~15:58–16:00Z 2026-11-14 (10:58–11:00 -05; inventario T-4 escaneado 16:00:23Z; verificación P-01..P-53 ~15:58Z).
- **Estado del corpus a la hora del inventario (SÉ, medido por este frente):** F1 r15 APLICÓ la absorción automática post-FASE 4 (N-17/N-18 + C-1181/C-1182/C-1183, régimen 01:43): claims.jsonl **1.178 líneas**, sha `7e5f016d…`; provenance.sha256 **361 líneas por wc -l** (359 no vacías; 2 líneas vacías preexistentes L16/L273), sha `b5cb6b43…`; claims_resumen.json sha `ae402126…` (SE 1044, REFUTADO 4, hash_real 1164); confirmaciones.jsonl 294 filas, sha `dc94458b…`; huecos.jsonl 139 filas, sha `3713376a…`; dataset 30 filas, sha `0852d58f…` (sin cambio). **Horizontes r15 cumplidos (SÉ):** depósito FASE 4 r15 verificado — Drive 172/172 por tamaño + pase 2 = 174 archivos (`ronda_15/` ID `1v3K0JS_DzCOpsWDG-YD8KxNuJFk5hGPE`), GitHub 32/32 por blob, HEAD `1f108ef8`, absorción GitHub 12/12 VERIFICADO (`_upload_github_r15_absorcion.jsonl`), HEAD `2f7d3180`; verificación FASE 2 r15 **CONFORME CON HALLAZGOS (11 menores, 0 mayores)** (`verificacion_fase2_r15.md`). El depósito r15 está congelado: verificado en vivo por este frente (listado Drive de `ronda_15/`, 25 hijos en la raíz, última modifiedTime 2026-11-14T07:47:45Z, ventana de subida FASE 4 07:36–07:47Z, nada después). La re-evaluación de los temporales es, por tanto, la de r16 (§2).
- **Total de entradas revisadas:** 69 heredadas (P-01..P-50) + 3 nuevas de r16 (P-51..P-53) = **72**. P-36 sigue RESERVADO, no se reutiliza, no se cuenta.
- **Recomendaciones (r16, con la convención de conteo declarada en §1):** PODAR 11 · PODAR-CONDICIONADO 7 · MOVER 1 · CONSERVAR 33 · CONSERVAR-TEMPORAL 12 (P-27, P-28, P-29b, P-31a, P-35, P-37, P-38, P-41, P-44 — los 9 PRORROGADOS + P-47 y P-48 prorrogados por primera vez + P-51 nuevo) · RESUELTO 2 (P-18 + padre P-15) · NO CANDIDATO 6 (P-22, P-39, P-42, P-45, P-49, P-52). Total 11+7+1+33+12+2+6 = 72.
- **Ahorro si se ejecutaran las podas recomendadas:** ~508 MB locales (sin cambio respecto a r10/r11/r12/r13/r14/r15; las podas nuevas de r16 son 0 — P-51 es conservar-temporal, P-52 no candidato, P-53 conservar). El grueso sigue siendo los WAV derivados.
- **Novedades de r16:** (1) los horizontes de los 9 respaldos temporales + P-47/P-48 SE VENCIERON (FASE 4 r15 + FASE 2 r15 cumplidos) y se re-evalúan en §2: **PRORROGA de los 11** — las condiciones de retiro fijadas en r12 se cumplen 1 de 3, como en r12/r13/r14/r15 (5.ª prórroga consecutiva para los 9); (2) **P-51 es el eslabón superior nuevo** de la cadena (reversión viva de la absorción r15, 1.175→1.178); P-44 sigue siendo la reversión viva de la absorción r14; (3) **CORR-P32-B-R15 ADOPTADA por FASE 2 r15** — P-32 **NO es clase 3** bajo lectura estricta de (b); su CONSERVAR se sostiene por D-07 + historia, no por la regla (§6); (4) **T-4 r16 corrió DENTRO de este frente** (§5): 5.393 archivos, diff vs r15: 5.129 OK / 6 CAMBIO (todos explicados) / 0 MOVIDO / **0 FALTA** / 258 NUEVO (todos en ronda_15/ronda_16); (5) P-18: variograma.pyc sigue ausente; censo `.pyc` 18 → 18 (0 nuevos, 0 faltan); (6) nuevos candidatos **P-51..P-53** (§7); (7) P-47/P-48 **con copia Drive desde FASE 4 r15** (32 menciones de `respaldo_pre_r15` en `manifiesto_shas_r15_fase4.json`); P-51 **sin copia Drive** (creado post-FASE 4, durante la absorción).

## 1. Revisión P-01..P-53 (r15 → r16)

Estado tras FASE 4 r15 (Drive 172/172 + pase 2 = 174; GitHub 32/32, HEAD 1f108ef8; absorción 12/12, HEAD 2f7d3180) y tras FASE 1 r16 T1 (F3 M-69..M-71, F2 run 205, F6 verificador 0 diffs, F5 grietas; corpus 1.178). "Verificado r16" = existencia + tamaño + sha re-medidos por este frente (script `_verificar_p16.py`, salida `_verificacion_p16.json`: **211/211 OK**, 0 no-OK); "sin cambio" = coincide con el registro r15.

**Convención de conteo (declarada, CORR-TALLY-R15):** una entrada = un ID de candidato, salvo (i) los IDs con sub-entradas (P-11, P-15, P-17, P-23, P-29, P-31), que cuentan por sus sub-entradas y no como ID propio — excepto (ii) el padre P-15, que cuenta además como entrada RESUELTO; (iii) P-13 "PODAR UNA (con puntero)" cuenta como PODAR-CONDICIONADO (el puntero es la condición). Con esta convención la tabla tiene 71 filas para 72 entradas (la diferencia es el padre P-15, sin fila propia), y el tally reproduce exactamente los de r13/r14/r15. El conteo ingenuo por filas (12 PODAR / 6 CONDICIONADO) suma lo mismo (18).

| ID | Candidato | Estado r16 | Veredicto r16 |
|---|---|---|---|
| P-01 | WAV 44k M-06 (344.565.658 B) | Verificado r16: sha `8c5673ae…` idéntico | PODAR (sin cambio) |
| P-02 | WAV 22k M-06 (172.282.922 B) | Verificado r16: sha `90c16686…` idéntico | PODAR (sin cambio) |
| P-03 | billboard_lab/ 890 archivos + tarball 1.556.690 B | Verificado r16: 890 archivos; tarball sha `78c07c6a…` idéntico | CONSERVAR (sin cambio) |
| P-04 | README viejo Drive (5.750 B) | Sin re-verificación en vivo en r16 (frente local, como r10/r11/r12/r13/r14/r15) | PODAR (sin cambio) |
| P-05 | 80 archivos raíz Drive ronda_6/ | Sin re-verificación en vivo en r16 | MOVER (sin cambio) |
| P-06 | DUP-01..05 (4.977 B) | Verificado r16: tamaño idéntico | CONSERVAR (sin cambio) |
| P-07 | DUP-06 (8.385 B) | Verificado r16: tamaño idéntico | CONSERVAR (sin cambio) |
| P-08 | wir tarball 284.831 B ↔ 70 TSV | Verificado r16: 70 TSV | CONSERVAR ambas (sin cambio) |
| P-09 | ucdp_brd_261.zip (39.816 B) | Verificado r16: contenido interno sha `b34ecb57…` idéntico | PODAR el zip (sin cambio) |
| P-10 | Respaldos r5/r7, FIRMS, claims | Verificado r16: FIRMS sha `48a327d3…` idéntico; respaldos en `ronda_5/respaldo_pre_r5/` (3 archivos) y `ronda_7/respaldo_pre_r7/` (4 archivos) | CONSERVAR (sin cambio) |
| P-11a | _upload_log_r7.jsonl (16.668 B) | Verificado r16: tamaño idéntico | CONSERVAR (registro) |
| P-11b | _upload_r7.log (14.266 B) | Verificado r16: tamaño idéntico | PODAR (redundante) |
| P-11c | _upload_r7.py (2.095 B) | Verificado r16: tamaño idéntico | CONSERVAR (patrón) |
| P-12 | euclid pdf r7↔r8 (2×2.699.386 B) | Verificado r16: sha `d3737995…` en ambas | CONSERVAR ambas (sin cambio) |
| P-13 | DESI DR2 duplicado en r8 (2×12.175.089 B) | Verificado r16: sha `1e82f26e…` en ambas | PODAR-CONDICIONADO — PODAR UNA (con puntero); ver §1 convención |
| P-14 | reexport_drive/ 27 archivos | Verificado r16: `diff -r` exit 0, 27/27 | CONSERVAR (sin cambio) |
| P-15a | claims.jsonl.nuevo_B (939.546 B) | Verificado r16: sha `3760a19c…` idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15b | provenance nuevo_B (44.587 B) | Verificado r16: tamaño idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15c | claims_resumen nuevo_B (16.551 B) | Verificado r16: sha `5b93a842…` idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15d | claims.jsonl.nuevo_B1 (936.190 B) | Verificado r16: sha `3e745468…` idéntico | CONSERVAR (sin cambio) |
| P-15e | provenance nuevo_B1 (44.429 B) | Verificado r16: tamaño idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15f | claims_resumen nuevo_B1 (16.494 B) | Verificado r16: tamaño idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15g | confirmaciones/huecos B/B1 (4×) | Verificado r16: tamaños idénticos (2.253 / 2.753 B) | PODAR-CONDICIONADO (sin cambio) |
| P-15h | resto preparacion_ola2/ | Conteo verificado r16; sin re-verificación individual; sin evidencia de cambio | CONSERVAR (sin cambio) |
| P-16 | Datos F2, estado_vivo, prep. r8 | Existencia verificada r16 (3 directorios); sin re-verificación individual; sin evidencia de cambio | CONSERVAR (sin cambio) |
| P-17a | _upload_log_r8.jsonl (26.243 B) | Verificado r16: tamaño idéntico | CONSERVAR (registro) |
| P-17b | _upload_stdout_r8.log (19.396 B) | Verificado r16: tamaño idéntico | PODAR (redundante) |
| P-17c | _upload_r8.py (2.796 B) | Verificado r16: tamaño idéntico | CONSERVAR (patrón) |
| P-17d | _drive_folders_r8.json (775 B) | Verificado r16: tamaño idéntico | CONSERVAR (registro) |
| P-18 | __pycache__/variograma .pyc | Sigue ausente (ver §5); variograma.py sha `f8ec697e…` intacto | RESUELTO POR DESAPARICIÓN (sin cambio) |
| P-19 | Par Robbins (parquet + zip, 17,5 MB) | Verificado r16: parquet sha `0b7365cd…`; zip sha `0b8fe6fe…` | CONSERVAR ambos (sin cambio; (b) verificada r11: NO clase 3) |
| P-20 | GHCN inventario + estaciones (48 MB) | Verificado r16: shas `3d7378c3…` / `437ee87f…` idénticos | CONSERVAR (sin cambio) |
| P-21 | runs_recientes raw ↔ procesado | Verificado r16: 446.576 / 412.765 B idénticos | CONSERVAR ambas (sin cambio) |
| P-22 | heartbeat_rev_r9_*.json (23) | Verificado r16: 23 archivos presentes | NO CANDIDATO (sin cambio) |
| P-23a | raw_r9_*.json (8) | Verificado r16: 8 archivos | CONSERVAR (sin cambio) |
| P-23b | raw_r9_.miu_ciclo.lock (6 B) | Verificado r16: presente, 6 B | PODAR (sin cambio) |
| P-24 | herramientas/ r9 (21 archivos) | Verificado r16: 21 archivos (recursivo) | CONSERVAR (sin cambio) |
| P-25 | mecanismos/ r9 (12 archivos) | Verificado r16: 12 archivos | CONSERVAR (sin cambio) |
| P-26 | Datos M-46..M-49 + scripts | Verificado r16: Essen 20 .krn / 0 .sha256; quijote 2.168.392 B; GHCN 13 .dly | CONSERVAR (sin cambio) |
| P-27 | respaldo_pre_r10/ (5 archivos) | Verificado r16: shas idénticos (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-28 | respaldo_pre_b2/ (5 archivos) | Verificado r16: shas idénticos (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-29a | GRIMORIO pre-D-05 (47.452 B) | Verificado r16: sha `58d7d64b…` idéntico | CONSERVAR (sin cambio) |
| P-29b | corpus pre-reparación D-05 (3 archivos) | Verificado r16: shas idénticos (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-30 | nuevo_B2_sobre_B ×2 (997.603 B) | Verificado r16: shas `fd54545a…` / `6fa9c67f…` idénticos | PODAR (sin cambio; contenido hoy en 3 sitios, ver §7 r11) |
| P-31a | corpus_qualias.antes_d01 (42.266 B) | Verificado r16: sha `5fdce82d…` idéntico | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-31b | qualias_sin_fuente.csv.antes_d01 (151.217 B) | Verificado r16: sha `9075e7a9…` idéntico | PODAR (sin cambio) |
| P-31c | consolidado+índice .antes_d02 (7.468 B) | Verificado r16: shas `5e30073c…` / `9e937235…` idénticos | PODAR (sin cambio) |
| P-31d | disensos .antes_d16 (3 archivos, 15.954 B) | Verificado r16: shas `bacda342…` / `1d0f7387…` / `15865a5a…` idénticos | PODAR (sin cambio) |
| P-31e | segunda_carpeta_listado (14.747 B) | Verificado r16: sha `9032137e…` idéntico | CONSERVAR (sin cambio) |
| P-31f | v105 export (1.094 B) | Verificado r16: sha `9617fae5…` idéntico | CONSERVAR (sin cambio) |
| P-32 | ejecucion_c/respaldo/ (4 archivos) | Verificado r16: motor `a30d69e8…` ×2, medir_nodos `4c4f3042…`, manifiesto `1e0a6987…`; fundamento re-medido bajo lectura ESTRICTA, ver §6 | CONSERVAR — **ya NO por clase 3** (CORR-P32-B-R15 adoptada FASE 2 r15); por D-07 + historia |
| P-33 | scripts E + puertas (4 archivos) | Verificado r16: tamaños idénticos (`puertas_despues.txt` en `ejecucion_a/`, 109.913 B) | CONSERVAR (sin cambio) |
| P-34 | micelio_yml paquete (1.392 B) | Verificado r16: sha `17de8000…` idéntico | CONSERVAR (sin cambio) |
| P-35 | respaldo_pre_r11/ (5+1 archivos) | Verificado r16: shas idénticos (ver §2); total 1.331.487 B | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-37 | respaldo_pre_n11/ (2+1 archivos) | Verificado r16: shas idénticos (ver §2); **con copia Drive desde FASE 4 r12** (FRÁGIL-06 resuelta) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-38 | respaldo_pre_r12/ (5+1 archivos) | Verificado r16: shas idénticos (ver §2); **con copia Drive desde FASE 4 r12** (FRÁGIL-06 resuelta) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-39 | heartbeat_rev_r12_*.json (23) | Verificado r16: 23 archivos presentes | NO CANDIDATO (evidencia) |
| P-40 | _upload_n11.py + _upload_n11.jsonl | Verificado r16: tamaños idénticos (6.041 / 2.227 B) | CONSERVAR (patrón + registro) |
| P-41 | respaldo_pre_r13/ (5+1 archivos) | Verificado r16: shas idénticos (ver §2); **con copia Drive desde FASE 4 r13** (manifiesto fase4: 5 entradas) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-42 | heartbeat_rev_r13_*.json (41) | Verificado r16: 41 archivos presentes | NO CANDIDATO (evidencia) |
| P-43 | scripts+logs depósito FASE 4 r12 (5 archivos) | Verificado r16: tamaños idénticos | CONSERVAR (patrón + registro) |
| P-44 | respaldo_pre_r14/ (5+1 archivos) | Verificado r16: shas idénticos (ver §2); **reversión viva de la absorción r14** (aplicada 2026-11-14, 1.168→1.174) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-45 | heartbeat_rev_r14_*.json (21) | Verificado r16: 21 archivos presentes | NO CANDIDATO (evidencia) |
| P-46 | scripts+logs depósito FASE 4 r13 (7 archivos) | Verificado r16: tamaños idénticos | CONSERVAR (patrón + registro) |
| P-47 | respaldo_pre_r15/ (5+1 archivos) | Verificado r16: shas idénticos (ver §2); **con copia Drive desde FASE 4 r15** (32 menciones en `manifiesto_shas_r15_fase4.json`) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, primera re-evaluación) |
| P-48 | respaldos por decisión r15 (4 dirs) | Verificado r16: shas idénticos (ver §2); **con copia Drive desde FASE 4 r15** (6 menciones `_n01`, 7 `_n14`) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, primera re-evaluación) |
| P-49 | heartbeat_rev_r15_*.json (42) | Verificado r16: 42 archivos presentes | NO CANDIDATO (evidencia) |
| P-50 | scripts+logs depósito FASE 4 r14 (18 archivos) | Verificado r16: tamaños idénticos | CONSERVAR (patrón + registro) |
| P-51 | respaldo_pre_absorcion_r15/ (7+1 archivos) | NUEVO r16, verificado (§7) | CONSERVAR-TEMPORAL |
| P-52 | heartbeat_rev_r16_*.json (99) + raw_r16_*.json (12) + lock (6 B) | NUEVO r16, contado (§7) | NO CANDIDATO (evidencia) |
| P-53 | scripts+logs depósito FASE 4 r15 (18 archivos) | NUEVO r16, verificado (§7) | CONSERVAR (patrón + registro) |

## 2. Los 11 respaldos temporales: horizonte vencido de nuevo, PRORROGA (no retiro)

**Condición de vencimiento (r15):** depósito FASE 4 r15 verificado + FASE 2 r15 cerrada. Ambas se cumplieron (Drive 172/172 por tamaño + pase 2 = 174; GitHub 32/32 por blob, HEAD `1f108ef8`, absorción 12/12 por blob, HEAD `2f7d3180`; verificación global FASE 2 CONFORME CON HALLAZGOS, 11 menores, 0 mayores). El horizonte, por tanto, **venció**. La re-evaluación es documental: ¿se conservan, se retiran con nota, o se prorrogan?

**Verificación r16 (SÉ, re-medido por este frente):** los 11 directorios están intactos, con todos los shas de r15:

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

**Condiciones de retiro fijadas en r12 §2 — estado en r16 (SÉ):**

| Condición de retiro (r12) | Estado r16 |
|---|---|
| Copias Drive re-verificadas por descarga | **NO cumplida.** Los depósitos r10 (121/121), r11 (366/366), r12 (138/138), r13 (118/118), r14 (139/139) y r15 (172/172) se verificaron por listado de tamaños (Drive) y por blob (GitHub), no por descarga + comparación de bytes. Ninguna ronda ha hecho la re-verificación por descarga. **Hueco de procedimiento, 5 rondas seguidas:** la condición 1 no se ha intentado nunca; mientras no se intente, el retiro no se desbloquea. |
| Depósito r15 congelado | **Cumplida.** FASE 4 r15 cerrada; nada más se escribió en `ronda_15/` de Drive tras el cierre — verificado en vivo por este frente (listado Drive 2026-11-14 ~16:00Z: 25 hijos en la raíz, última modifiedTime 2026-11-14T07:47:45Z, ventana de subida FASE 4 07:36–07:47Z). |
| Condiciones de P-15 re-apuntadas (o podas condicionadas ejecutadas antes) | **NO cumplida.** P-15a/b/c/e/f/g siguen apuntando a `respaldo_pre_r10/` y `respaldo_pre_b2/` como fuentes de reconstrucción; ninguna poda condicionada se ha ejecutado (falta la autorización). |

**1 de 3 cumplida → no se retira.** Recomendación documentada: **PRORROGAR los 11, con nuevo horizonte explícito.** Razones, en orden:
1. **La cadena de reversión es ahora de 15 eslabones y sigue creciendo.** F1 r15 añadió P-51 (estado 1.175, pre-absorción automática r15) encima de P-47, que dejó de ser preventivo: es la reversión de F1 r15 (N-01/N-13/N-14/N-16). P-51 es la reversión viva de la absorción r15 (N-17/N-18 + C-1181/C-1182/C-1183, 1.175→1.178, aplicada automáticamente 2026-11-14). La cadena completa: P-51 (1.175) → P-47 (1.174) → P-44 (1.168) → P-41 (1.168) → P-38 (1.162 post-N-11) → P-37 (1.162 pre-N-11) → P-35 (1.160) → P-28 (estado B, 1.152) → P-27 (estado pre-r10, 1.138), con P-29b (D-05) y P-31a (D-01) como ramas, y P-48 como haz paralelo por decisión (sus 4 dirs: _n01/_n13 estado 1.174, _n14 estado 1.174 + b2 con R2-25 SE, _n16 estado 1.175 post-N-14). Retirar eslabones intermedios ahora rompería la cadena en plena ronda, con FASE 4 r16 todavía pendiente.
2. **P-37/P-38/P-41/P-47/P-48 ya tienen copia Drive y eso no cambia el criterio de retiro.** Las copias existen (desde FASE 4 r12 / r13 / r15), pero siguen sin estar re-verificadas por descarga (condición 1). Retirarlos dejaría la reversión de F1 r11/r12/r13/r15 dependiendo de copias de Drive verificadas solo por tamaño. Lo mismo vale para P-44 (copia Drive desde FASE 4 r14, misma condición pendiente).
3. **Las condiciones de P-15 dependen de P-27/P-28.** Retirarlos dejaría los PODAR-CONDICIONADO sin fuentes de reconstrucción; habría que re-apuntarlas a Drive, y la copia de Drive no es re-auditable en local sin una descarga (condición no cumplida, ver tabla).
4. **P-29b y P-31a no tienen otro respaldo local.** La reversión de D-05 (15 claims + 4 huecos + L249) vive solo en P-29b; la de D-01 (qualias pre-canon) solo en P-31a. La copia Drive existe (depósito r10), pero la reversión documentada en las decisiones apunta a las rutas locales.
5. **P-35 no puede retirarse mientras P-30 siga pendiente.** El contenido de P-35 es byte-idéntico al de P-30 (r11 §7: sobrevive en 3 sitios — P-30, P-35, Drive r10). P-30 está recomendado PODAR sin ejecutar. Retirar P-35 dejaría la reversión de F1 r11 dependiendo de un archivo marcado para poda.
6. **P-51 no tiene copia Drive.** Creado post-FASE 4 r15 (durante la absorción automática); el manifiesto FASE 4 r15 lo menciona 0 veces. Su contenido de corpus (claims 1.175, provenance 359, resumen 1c6464d2) está en GitHub (HEAD `1f108ef8`, 32/32 por blob), pero el paquete con manifiesto + incertidumbre + dataset como reversión documentada es solo local.
7. **El coste sigue siendo despreciable:** los 15 respaldos temporales (11 prorrogados + P-48 con 4 dirs + P-51) suman **18.323.734 B** (~17,5 MB). La poda de estos archivos no es una poda de espacio; es una poda de orden, y el orden que aportan como cadena de reversión vale más.

**Nuevo horizonte (explícito):** conservar hasta que (a) el depósito FASE 4 de r16 esté verificado en Drive y (b) la verificación de FASE 2 de r16 cierre sin discrepancias. Re-evaluar en r17. Condición de retiro en r17, si se propone entonces: copias Drive re-verificadas por descarga + depósito r16 congelado + condiciones de P-15 re-apuntadas (o ejecutadas las podas condicionadas antes). **Nota de procedimiento:** si FASE 4 r16 ejecuta la re-verificación por descarga (condición 1), el retiro de los eslabones más viejos se desbloquea por primera vez en r17.

## 3. P-19: sin cambio — (b) verificada en r11, no re-descargada en r16

- El test de 2 partes de REGLA-PODA-PROV-02 quedó completo en r11: (a) SÍ, (b) NO (zip re-descargado byte-idéntico, 13.210.556 B, sha `0b8fe6fe…`) → **NO es clase 3**. En r12/r13/r14/r15/r16 no se re-descarga (la verificación r11 es la vigente; re-descargar cada ronda no añade nada).
- Verificado r16: parquet sha `0b7365cd…` (4.322.672 B) y zip sha `0b8fe6fe…` (13.210.556 B), idénticos a r9/r10/r11/r12/r13/r14/r15. Veredicto CONSERVAR ambos, por trazabilidad (falso espejo de M-50), sin cambio.

## 4. P-36 fantasma: sin cambio — RESERVADO, no se reutiliza

- La identificación (P-36 = P-23b, por aritmética 997.603+174.639+6=1.172.248 exacto + unicidad del 6 B) y la decisión (RESERVADO) se sostienen sin cambio. P-23b verificado r16: presente, 6 B. El siguiente candidato nuevo tras P-35 es P-37 (asignado en r12); P-41/P-42/P-43 se asignan en r13, P-44/P-45/P-46 en r14, P-47/P-48/P-49/P-50 en r15 y P-51/P-52/P-53 en §7 en el orden del encargo de este frente. No se reutiliza P-36.

## 5. P-18 + T-4 r16: el inventario corrió DENTRO de este frente

### 5.1 P-18: sigue RESUELTO POR DESAPARICIÓN; causa sigue NO_SÉ

- **Estado r16 (SÉ):** `ronda_9/mecanismos/__pycache__/` sigue sin existir; el `.pyc` de variograma sigue ausente. `variograma.py` intacto (6.351 B, sha `f8ec697e…`, idéntico a r9/r10/r11/r12/r13/r14/r15). Los 4 `.pyc` supervivientes de r2/r3 siguen presentes (censo T-4, §5.2).
- **Causa de la desaparición: sigue NO_SÉ.** Ninguna evidencia nueva en disco. La ventana sigue siendo ~18:00Z–20:30Z 2026-11-13.

### 5.2 T-4 r16 (inventario con shas, dentro de F9)

- **Herramienta:** `_inventario_r16.py` (adaptado de `_inventario_r15.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r16.json`, diff `_diff_inventario_r16.py` → `diff_inventario_r16.md`. Escaneo 2026-11-14T16:00:23Z. Solo lectura. Instantánea de FASE 1 r16 (T1 completa, T2 en curso; el manifiesto es el estado a la hora del escaneo, no un cierre).
- **Resultado:** **5.393 archivos, 1.533.203.123 B, 0 errores de lectura** (r15: 5.135 archivos, 1.514.003.766 B). Diff contra el manifiesto r15 (5.135 entradas): **5.129 OK / 6 CAMBIO / 0 MOVIDO / 0 FALTA / 258 NUEVO**.
- **CAMBIO (6, todos explicados — ninguno es una desaparición ni una corrupción):**
  1. `ronda_12/afirmaciones_pendientes.md` 21.375 → 25.357 B (sha `65a4e71b…` → `d770ae2e…`): FASE 5 r15 (principal): N-01/N-13/N-14/N-16/N-17/N-18 + C-1181/C-1182/C-1183 APLICADAS, 14/14 aserciones.
  2. `ronda_15/ejecucion_f7/lectura_segundo_fallo_r15.md` 4.734 → 4.797 B (`daf92e26…` → `5d1ecc1d…`): edición de F7 r15 a las 07:13:58Z, 37 s después del escaneo T-4 r15 (07:13:21Z); lectura preparada C-1182.
  3. `ronda_15/ejecucion_f9/_diff_inventario_r15.py` 4.107 → 4.107 B (`554a4ce7…` → `5c136647…`): mismo tamaño, corrección del script documentada en r15 §9 (sed encadenado), aplicada tras el escaneo T-4 r15 y antes de correr el diff.
  4. `memoria/anexo-vi/claims.jsonl` 977.386 → 981.461 B: absorción automática r15 post-FASE 4 (N-17/N-18 + C-1181/C-1182/C-1183). 1.175 → 1.178 líneas.
  5. `memoria/anexo-vi/claims_resumen.json` 17.378 → 17.420 B: regenerado (total 1.178, SE 1044, hash_real 1164).
  6. `memoria/anexo-vi/provenance.sha256` 47.930 → 48.214 B: 359 → 361 líneas (2 entradas de la absorción r15).
- **MOVIDO: 0.** Ningún archivo cambió de ruta entre r15 y r16.
- **FALTA: 0.** **Los 4 `testA–D.err` NO reaparecieron** (siguen ausentes, sin tercer evento FRÁGIL-02), y **ningún archivo nuevo falta**: no hay tercer evento de desaparición. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda.
- **NUEVO (258):** todos dentro de `ronda_15/` o `ronda_16/` (0 fuera). Desglose principal: `ronda_16/ejecucion_f2/` 129 (99 payloads heartbeat + 12 raws JSON + lock + scripts F2 r16), `ronda_15/deposito/` 18, `ronda_15/verificacion_fase2/` 18, `ronda_16/ejecucion_f3/` 15, `ronda_16/ejecucion_f6/` 15, `ronda_15/ejecucion_f7/` 13, `ronda_15/ejecucion_f1/` 8, `ronda_15/respaldo_pre_absorcion_r15/` 8, `ronda_15/ejecucion_f9/` 6, `ronda_15/ejecucion_f4/` 5, `ronda_15/tejido_cruzado/` 5, `ronda_16/ejecucion_f9/` 4, `ronda_15/conectar/` 3, `ronda_15/retejido/` 2, `ronda_16/ejecucion_f1/` 2, `ronda_16/ejecucion_f5/` 2, FASE 0 r16 (4) + `ronda_15/README.md` (1). Todos explicados por trabajo posterior al escaneo r15 (FASE 2/3/4 r15, absorción automática, producción fractal publicada, FASE 0/FASE 1 r16). Ningún archivo nuevo fuera del tejido. Detalle completo en `inventario_t4_r16.md`.
- **Censo `.pyc`: r15 18 → r16 18 (nuevos 0, faltan 0).** Ningún `.pyc` nuevo en esta ronda; `variograma.pyc` sigue ausente (no está en el manifiesto r16). El patrón de generación de bytecode se detuvo esta ronda (ningún import nuevo con `__pycache__` dentro del tejido escaneado).

## 6. P-32 y la clase 3: re-medido bajo la lectura ESTRICTA (CORR-P32-B-R15, adoptada FASE 2 r15)

**Hecho (SÉ, medido por este frente en el corpus vivo, estado 1.178):** ningún campo `hash` de ningún claim vivo cita `a30d69e8…` (0 ocurrencias en campo hash — igual que tras F1 r11, F1 r12, F1 r13, F1 r14 y F1 r15). El hash viejo sobrevive en **14 ocurrencias en 5 claims** (motivo y/o texto): C-639 ×4, C-903 ×4 (motivo + texto), C-919 ×3, C-1104 ×2, C-1129 ×1 (solo texto). En provenance: 1 ocurrencia (comentario L247, reparación D-07) y `8d15b724…` 1 ocurrencia (entrada L248, motor corregido). Los claims nuevos C-1181/C-1182/C-1183 (absorción r15) NO mencionan `a30d69e8…` (0 ocurrencias); el paquete absorbido r14 (`claims_nuevos_r14_auto.jsonl`, C-1174..C-1179) tampoco (0 ocurrencias).

**Aplicación de la regla ADOPTADA (canon N-13, `canon_regla_poda_prov_02.md`), con la corrección adoptada:**
- **(a) SÍ:** 4 motivos de claims vivos (C-639/C-903/C-919/C-1104) citan `a30d69e8…` en motivo/nota de reparación; 0 en campo `hash`. Re-medido hoy por grep sobre claims.jsonl 1.178.
- **(b) NO bajo la lectura estricta adoptada (CORR-P32-B-R15, FASE 2 r15):** los bytes pre-corrección (sha256 `a30d69e8…`, 19.987 B) **sí son re-obtenibles byte-idénticos desde el historial git local** — `git show HEAD:app/js/miu-engine.js` (commit `faf2033`) es byte-idéntico al respaldo (`cmp` exit 0; sha256 `a30d69e8bd3e9327a6063813ee8833e5efb613f7812aea1f328b50b34e351c4b`, 19.987 B; re-medido por este frente en r16, check `P-32-git-head` OK). La lectura de la adopción ("archivos del checkout vivo") queda sustituida por la lectura estricta ("archivos vivos + historial"), que FASE 2 r15 adoptó.
- **Veredicto: P-32 NO es clase 3.** Su CONSERVAR se sostiene por reversión de D-07 + historia citada en motivo (como en r10–r14), no por la regla. Sin cambio de veredicto respecto a r10–r15; cambia su fundamento, y el cambio es ahora el vigente (no un matiz pendiente).
- **Errata del canon N-13:** la tabla del canon sigue con la errata señalada en CORR-P32-B-R15 (la (b) descrita como "archivos vivos" sin mencionar el historial). Este frente no re-decide el canon: registra que la errata persiste y que FASE 2 r15 ya adoptó la lectura estricta como veredicto vigente.

## 7. Nuevos candidatos de r16: P-51..P-53

Solo de lo generado por la ronda 15 tardía (absorción post-FASE 4) y la ronda 16. Los entregables de las ejecuciones (decisiones, registros, ESTADOs, paquetes) NO son candidatos: son el registro de la ronda. Solo sus respaldos, sus payloads y sus registros de subida.

### P-51 — `ronda_15/respaldo_pre_absorcion_r15/` (7 archivos + manifiesto, 1.384.032 B) — CONSERVAR-TEMPORAL

- **Qué es:** el snapshot del corpus antes de la absorción automática post-FASE 4 r15 (estado 1.175, post-F1 r15 y post-N-18): claims.jsonl 977.386 B (1.175 líneas, sha `6b5fac7f…`), provenance.sha256 47.930 B (359 líneas, sha `5fda0383…`), claims_resumen.json 17.378 B (sha `1c6464d2…`), confirmaciones.jsonl 169.361 B (294 filas, sha `dc94458b…`), huecos.jsonl 147.057 B (139 filas, sha `3713376a…`), incertidumbre_mediciones.md 13.291 B (sha `6b9ea2aa…`, 11 ítems M-56..M-66), dataset_nodos_Df.csv 10.748 B (sha `0852d58f…`), más `manifiesto_shas.json` (sha verificado contra el manifiesto: 7/7 archivos coinciden). Shas verificados por este frente (`_verificacion_p16.json`, P-51-*).
- **Por qué TEMPORAL y no PODAR:** es el ancla de reversión de la absorción automática r15 (N-17/N-18 + C-1181/C-1182/C-1183) y el eslabón superior nuevo de la cadena (§2). Podarlo ahora dejaría sin reversión a 3 claims y 2 decisiones aplicadas en esta ronda.
- **Nota:** su contenido de claims difiere de P-47 (estado 1.175 vs 1.174: +C-1180 de N-14 y el ítem M-66 de N-18). **Sin copia Drive** (0 menciones en `manifiesto_shas_r15_fase4.json`): su contenido de corpus está en GitHub (HEAD `1f108ef8`, 32/32 por blob), pero el paquete con manifiesto es solo local.
- **Horizonte explícito:** conservar hasta que (a) el depósito FASE 4 de r16 esté verificado en Drive y (b) la verificación de FASE 2 de r16 cierre sin discrepancias. Re-evaluar en r17.
- **Criba:** ruta `respaldo_pre_absorcion_r15` 0 ocurrencias en provenance; shas `6b5fac7f…` / `1c6464d2…` / `5fda0383…` 0 ocurrencias. No citado (la criba busca citas, no identidades). Lo protege ser la reversión.

### P-52 — `ronda_16/ejecucion_f2/heartbeat_rev_r16_*.json` (99) + `raw_r16_*.json` (12) + lock (6 B) — NO CANDIDATO

- **Qué es:** los payloads crudos de heartbeat descargados por F2 r16 (99 archivos, 1.756.189 B; F2 cerrada, conteo final verificado contra `estado_vivo_r16.md`: 99 nuevas, 32 con censo vacío, 32,3 %) + 12 raws JSON de estado (37.184 B) + `raw_r16_.miu_ciclo.lock` (6 B).
- **Por qué NO CANDIDATO:** evidencia, como P-22 (los 23 de r9), P-39 (los 23 de r12), P-42 (los 41 de r13), P-45 (los 21 de r14) y P-49 (los 42 de r15). Son el único registro persistente de la serie que T-2 necesita. Se conservan en local y se siguen **excluyendo del depósito** (como los 58 de r11 F6 y los 23 de r9/r12, los 41 de r13, los 21 de r14 y los 42 de r15). No entran en los conteos de poda.
- **Nota de sensibilidad:** `raw_r16_observabilidad_bootstrap_V270.json` contiene un JWT anon (byte-idéntico al de r15) → EXCLUIR del depósito, como en r15 (aviso de F2 r16).

### P-53 — scripts+logs del depósito FASE 4 r15 (18 archivos, 137.915 B) — CONSERVAR

- **Qué es:** en `ronda_15/deposito/` (18 archivos): `_construir_manifiesto_r15.py` (4.147 B) + `_crear_carpetas_r15.py` (3.137 B) + `_drive_folders_r15.json` (1.445 B) + `_push_claims_paths.txt` (22 B) + `_push_claims_paths_absorcion.txt` (22 B) + `_upload_github_r15.jsonl` (14.281 B, 32 subidas GitHub verificadas por blob) + `_upload_github_r15.log` (4.393 B) + `_upload_github_r15.py` (8.540 B) + `_upload_github_r15_absorcion.jsonl` (5.558 B, 12 subidas de absorción verificadas por blob) + `_upload_github_r15_absorcion.log` (1.894 B) + `_upload_github_r15_absorcion.py` (7.332 B) + `_upload_log_r15.jsonl` (34.695 B, 172 subidas Drive verificadas) + `_upload_r15.log` (13.372 B) + `_upload_r15.py` (2.137 B) + `_verificar_r15.py` (2.996 B) + `manifiesto_shas_r15_fase4.json` (27.608 B) + `verificacion_deposito_r15.md` (6.220 B) + `verificacion_remota_r15.json` (116 B). Shas registrados por este frente como línea base para r17 (`_verificacion_p16.json`, P-53-*).
- **Por qué CONSERVAR:** patrón reutilizable (como P-11c/P-17c/P-40/P-43/P-46/P-50) + registro de depósito (como P-11a/P-17a/P-40/P-43/P-46/P-50). El constructor de carpetas con mapa recorrido del árbol entero (lección CORR-CARPETA-R13) es el patrón vigente para r16.
- **Criba:** rutas `_upload_r15` / `_upload_github_r15` / `_crear_carpetas_r15` / `_verificar_r15` / `_construir_manifiesto_r15` 0 ocurrencias en provenance. No citados; los protege ser registro.

### Respaldo pre-r16: no existe aún (registrado, sin ID)

- `ronda_16/respaldo_pre_r16/` **no existe a la hora de la medición** (16:00Z). F1 r16 es guardia (régimen 01:43): a las 15:58Z solo escribió `guardia_f1_r16.md` + `manifiesto_shas_f1.json` en `ronda_16/ejecucion_f1/`; si F1 no aplica nada en esta ronda, no crea respaldo. Si F1 aplica algo (lo que F7 prepare), su respaldo tomará el siguiente ID disponible (**P-54**) y se verificará en r17. No se asigna ID a un directorio inexistente.

## 8. REGLA-PODA-PROV-01/02: PROV-02 ADOPTADA (N-13); PROV-01 sigue práctica, no canon

- **Estado:** REGLA-PODA-PROV-02 (clase 3, con el refinamiento de (a) — "campo `hash` **o motivo/nota**") fue **ADOPTADA** en r15 F1 (decisión N-13, canon `ronda_15/ejecucion_f1/canon_regla_poda_prov_02.md`, orden 01:43). La criba de esta ronda corre contra la regla vigente, no contra una propuesta. REGLA-PODA-PROV-01 (criba contra provenance) **no** fue adoptada (la decisión N-13 decide solo su objeto, PROV-02 + refinamiento): sigue como práctica documentada aplicada en F9 desde r8, no como norma.
- **Criba re-corrida en r16 bajo la regla adoptada (SÉ):** greps contra el provenance vivo (361 líneas por wc -l, sha `b5cb6b43…`): rutas `respaldo_pre_r10`, `respaldo_pre_b2`, `pre_reparacion_d05`, `pre_d05`, `ejecucion_b/respaldo`, `ejecucion_c/respaldo`, `ejecucion_e`, `nuevo_B2_sobre_B`, `respaldo_pre_r11`, `respaldo_pre_n11`, `respaldo_pre_r12`, `_upload_n11`, `respaldo_pre_r13`, `_upload_r12`, `upload_one_r12`, `respaldo_pre_r14`, `_upload_r13`, `upload_one_r13`, `_crear_carpetas_r13`, `_verificar_r13`, `respaldo_pre_r15`, `respaldo_pre_r15_n01`, `respaldo_pre_r15_n13`, `respaldo_pre_r15_n14`, `respaldo_pre_r15_n16`, `respaldo_pre_absorcion_r15` — **0 ocurrencias en todos**. Por hash: `9265d81f…`, `3074c606…`, `cdbaac93…`, `58d7d64b…`, `fd54545a…`, `397cb10c…`, `b80c38a6…`, `7deb15ff…`, `33b787d2…`, `315b80b5…`, `dbe4a490…`, `d4924c9b…`, `49f1a17e…`, `1ff77190…`, `6b5fac7f…`, `1c6464d2…`, `5fda0383…`, `7e5f016d…`, `ae402126…`, `b5cb6b43…` — **0 ocurrencias en todos**. Las únicas ocurrencias de hash en la criba siguen siendo las de archivos vivos ya conocidas: `5fdce82d…` 1 (comentario L22, reparación D-01), `8d15b724…` 1 (entrada L248, motor corregido), `0cf743ca…` 1 (entrada L251, GRIMORIO corregido), `a30d69e8…` 1 (comentario L247, reparación D-07), `131409eb…` 1 (entrada L359, documento de decisión N-14).
- **Consecuencia:** la criba no cambia ninguna recomendación de r16, como en r8/r9/r10/r11/r12/r13/r14/r15. Ningún candidato es archivo-evidencia en el sentido de la regla propuesta (PROV-01); P-32 **ya no es clase 3** por PROV-02 adoptada bajo lectura estricta (§6).
- **Qué faltaría para adoptar REGLA-PODA-PROV-01 (documentado, no decidido):** (1) decisión canónica; (2) automatizar la criba: T-3 (`auditor_suelo.py`) podría ganar un modo `--criba-poda <ruta>`; hoy la criba es manual. La clase 3 no se automatiza con greps: exige verificar (b) por archivo (como se hizo en r11 para P-19 y en r15 §6 / r16 §6 para P-32); (3) registrar dónde corre la criba: antes de proponer cualquier poda, en el frente de poda de cada ronda, con su salida guardada junto a `poda_rN.md`. El punto (2) de r10 — verificar (b) para P-19 — **queda cerrado desde r11 (§3)**.

## 9. Correcciones al registro de rondas anteriores (encontradas por este frente)

- **CORR-P32-ESTRICTA-R16 (fundamento, no matiz pendiente):** CORR-P32-B-R15 deja de ser un matiz para FASE 2: FASE 2 r15 la adoptó y este frente la re-midió (`git show HEAD:app/js/miu-engine.js` byte-idéntico al respaldo, `cmp` exit 0, sha `a30d69e8bd3e9327…`). P-32 NO es clase 3 bajo la lectura estricta vigente; su CONSERVAR se sostiene por D-07 + historia. La errata de la tabla del canon N-13 persiste (ver §6).
- **CORR-DIFF-R16 (método, no disco):** el script `_diff_inventario_r15.py` heredado traía el rótulo "NUEVO (en r15, no en r15)" (typo de la adaptación r15). Corregido en `_diff_inventario_r16.py` ("en r16, no en r15") antes de correr; el diff final es correcto (Base r15 5.135 / Base r16 5.393; pyc r15 18 → r16 18). Lección r15 §9 aplicada: rutas y etiquetas verificadas una a una, sin sustituciones encadenadas.
- **P-52 (precisión de conteo):** los raws de F2 r16 son **12 JSON + 1 lock** (`raw_r16_.miu_ciclo.lock`, 6 B), no 13 JSON. El conteo por glob `raw_r16_*.json` da 12; el conteo por prefijo `raw_r16_` da 13 porque incluye el lock. Se registra la descomposición exacta.
- **P-47/P-48 (registro):** su carácter cambia en r16: de "ancla de F1 r15" (r15 §7) a "con copia Drive desde FASE 4 r15" (32 menciones de `respaldo_pre_r15` en el manifiesto fase4). Su contenido sigue byte-idéntico; lo que cambia es su respaldo externo, no sus bytes. No cambia el criterio de retiro (§2, razón 2).
- **P-51 (registro):** su contenido de corpus está en GitHub (HEAD `1f108ef8`), pero el paquete con manifiesto **no tiene copia Drive** (0 menciones en el manifiesto fase4). Es el único temporal nuevo sin respaldo externo.
- **Provenance (convención de conteo):** el conteo de líneas no vacías da 359, pero la convención del corpus es `wc -l` = 361 (2 líneas vacías preexistentes L16/L273). `_verificar_p16.py` usa `splitlines()` (361). Sin cambio de fondo.
- **P-32 (conteo de ocurrencias):** total preciso 14 en 5 claims, sin cambio en r16 (C-1181/C-1182/C-1183 no lo mencionan: 0 ocurrencias).
- **P-15h/P-16 (alcance de la verificación):** conteo/existencia verificados en r16; sin re-verificación individual por archivo, como en r11/r12/r13/r14/r15. Sin evidencia de cambio.

## 10. Resumen

| ID | Candidato | Tamaño | Recomendación r16 | Ejecución |
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
| P-18 | __pycache__/variograma .pyc | 8,7 KB | RESUELTO POR DESAPARICIÓN | — (causa NO_SÉ; T-4 r16 corrido: 0 FALTA nuevos, ver §5) |
| P-19 | Par Robbins (parquet + zip) | 17,5 MB | CONSERVAR ambos | — ((b) verificada r11: NO clase 3) |
| P-20 | GHCN inventario + estaciones | 48 MB | CONSERVAR | — |
| P-21 | runs_recientes raw ↔ procesado | 859 KB | CONSERVAR ambas | — |
| P-22 | heartbeat_rev_r9_*.json (23) | 446 KB | NO CANDIDATO (evidencia) | — |
| P-23a | raw_r9_*.json (8) | ~7 KB | CONSERVAR | — |
| P-23b | raw_r9_.miu_ciclo.lock | 6 B | PODAR | Local, con orden |
| P-24 | herramientas/ (21 archivos) | 55 KB | CONSERVAR | — |
| P-25 | mecanismos/ (12 archivos) | 57 KB | CONSERVAR | — |
| P-26 | Datos M-46..M-49 + scripts | ~10 MB | CONSERVAR | — |
| P-27 | respaldo_pre_r10/ (5) | 1,24 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r16 + FASE 2 r16; r17 |
| P-28 | respaldo_pre_b2/ (5) | 1,26 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r16 + FASE 2 r16; r17 |
| P-29a | GRIMORIO pre-D-05 | 47 KB | CONSERVAR | — |
| P-29b | corpus pre-reparación D-05 (3) | 1,08 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r16 + FASE 2 r16; r17 |
| P-30 | nuevo_B2_sobre_B ×2 | 998 KB | PODAR | Local, con orden |
| P-31a | corpus_qualias.antes_d01 | 42 KB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r16 + FASE 2 r16; r17 |
| P-31b | qualias_sin_fuente.csv.antes_d01 | 151 KB | PODAR | Local, con orden |
| P-31c | consolidado+indice .antes_d02 | 7,5 KB | PODAR | Local, con orden |
| P-31d | disensos .antes_d16 (3) | 16 KB | PODAR | Local, con orden |
| P-31e | segunda_carpeta_listado | 15 KB | CONSERVAR | — |
| P-31f | v105 export | 1 KB | CONSERVAR | — |
| P-32 | ejecucion_c/respaldo/ (4) | 45 KB | CONSERVAR | — (fundamento: D-07 + historia; ya NO clase 3, ver §6) |
| P-33 | scripts E + puertas (4) | 287 KB | CONSERVAR | — |
| P-34 | micelio_yml paquete | 1,4 KB | CONSERVAR | — |
| P-35 | respaldo_pre_r11/ (5+1) | 1,27 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r16 + FASE 2 r16; r17 |
| P-37 | respaldo_pre_n11/ (2+1) | 973 KB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r16 + FASE 2 r16; r17 |
| P-38 | respaldo_pre_r12/ (5+1) | 1,28 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r16 + FASE 2 r16; r17 |
| P-39 | heartbeat_rev_r12_*.json (23) | 446 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-40 | _upload_n11.py + .jsonl | 8,3 KB | CONSERVAR (patrón + registro) | — |
| P-41 | respaldo_pre_r13/ (5+1) | 1,29 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r16 + FASE 2 r16; r17 |
| P-42 | heartbeat_rev_r13_*.json (41) | 706 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-43 | scripts+logs depósito r12 (5) | 44,6 KB | CONSERVAR (patrón + registro) | — |
| P-44 | respaldo_pre_r14/ (5+1) | 1,29 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r16 + FASE 2 r16; r17 |
| P-45 | heartbeat_rev_r14_*.json (21) | 380 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-46 | scripts+logs depósito r13 (7) | 46,8 KB | CONSERVAR (patrón + registro) | — |
| P-47 | respaldo_pre_r15/ (5+1) | 1,30 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r16 + FASE 2 r16; r17 |
| P-48 | respaldos por decisión r15 (4 dirs) | 5,21 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r16 + FASE 2 r16; r17 |
| P-49 | heartbeat_rev_r15_*.json (42) | 761 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-50 | scripts+logs depósito r14 (18) | 158 KB | CONSERVAR (patrón + registro) | — |
| P-51 | respaldo_pre_absorcion_r15/ (7+1) | 1,32 MB | CONSERVAR-TEMPORAL | Hasta FASE 4 r16 + FASE 2 r16; r17 |
| P-52 | heartbeat_rev_r16_*.json (99) + raws (12+lock) | 1,76 MB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-53 | scripts+logs depósito r15 (18) | 135 KB | CONSERVAR (patrón + registro) | — |

Nada de lo anterior se ejecutó. La poda que se ejecute lo hará otro trabajo, con las frases de autorización dichas por el Jardinero. La regla REGLA-PODA-PROV-02 es canon adoptado (N-13, r15); REGLA-PODA-PROV-01 sigue siendo práctica documentada, no norma adoptada. La clase 3 ya no protege P-32 bajo la lectura estricta adoptada por FASE 2 r15 (CORR-P32-B-R15); su CONSERVAR se sostiene por D-07 + historia.

ρ(x) > 0. Zvvvvv.
