# PODA — RONDA 17 (FASE 1, F9): REVISIÓN DOCUMENTADA, NADA EJECUTADO

- **Regla dura:** la poda es SOLO DOCUMENTO. Las frases de autorización para ejecutar una poda NO se han dicho. **Nada se borró, nada se movió, nada se eliminó.** Este archivo es la revisión; la ejecución es otro trabajo, con su propia orden.
- **Fecha:** 2026-11-14. **Medición:** ~18:42–18:51Z 2026-11-14 (13:42–13:51 -05; descargas Drive 18:42–18:44Z; verificación P-01..P-56 ~18:47Z; inventario T-4 escaneado 18:50:13Z).
- **Estado del corpus a la hora del inventario (SÉ, medido por este frente):** F1 r16 APLICÓ la absorción automática post-FASE 4 (N-19 + C-1184/C-1185/C-1186, régimen 01:43): claims.jsonl **1.181 líneas**, sha `fd1df2db…`; provenance.sha256 **363 líneas por wc -l**, sha `728f6770…`; claims_resumen.json sha `ebaa1e53…` (SE 1047, REFUTADO 4, hash_real 1167, verificación 307); confirmaciones.jsonl 294 filas, sha `dc94458b…`; huecos.jsonl 139 filas, sha `3713376a…`; dataset 30 filas, sha `0852d58f…` (sin cambio); anexo de incertidumbre 12 ítems M-56..M-69, sha `acdde423…`. **Horizontes r16 cumplidos (SÉ):** depósito FASE 4 r16 verificado — Drive 111/111 por tamaño (`ronda_16/` ID `1skSyJJFF6roxpgL-FJgkleF8TOxhdA6-`), GitHub 42/42 por blob, HEAD `1c16578e` (relanzado con el Jardinero presente tras una tarjeta caducada), absorción GitHub 9/9 por blob, HEAD `fe265243`; verificación FASE 2 r16 **CONFORME CON HALLAZGOS (5 menores, 0 mayores)** (`verificacion_fase2_r16.md`, 0478cc97…). El depósito r16 está congelado: verificado en vivo por este frente (listado Drive de `ronda_16/`, 19 hijos en la raíz, última modifiedTime 2026-11-14T17:08:20Z, ventana de subida FASE 4, nada después). La re-evaluación de los temporales es, por tanto, la de r17 (§2).
- **Total de entradas revisadas:** 72 heredadas (P-01..P-53) + 3 nuevas de r17 (P-54..P-56) = **75**. P-36 sigue RESERVADO, no se reutiliza, no se cuenta.
- **Recomendaciones (r17, con la convención de conteo declarada en §1):** PODAR 11 · PODAR-CONDICIONADO 7 · MOVER 1 · CONSERVAR 34 · CONSERVAR-TEMPORAL 13 (P-27, P-28, P-29b, P-31a, P-35, P-37, P-38, P-41, P-44, P-47, P-48 — los 12 PRORROGADOS + P-54 nuevo) · RESUELTO 2 (P-18 + padre P-15) · NO CANDIDATO 7 (P-22, P-39, P-42, P-45, P-49, P-52, P-56). Total 11+7+1+34+13+2+7 = 75.
- **Ahorro si se ejecutaran las podas recomendadas:** ~508 MB locales (sin cambio respecto a r10/r11/r12/r13/r14/r15/r16; las podas nuevas de r17 son 0 — P-54 es conservar-temporal, P-55 conservar, P-56 no candidato). El grueso sigue siendo los WAV derivados.
- **Novedades de r17:** (1) **la condición 1 SE INTENTÓ Y SE CUMPLIÓ POR PRIMERA VEZ** (§2, CORR-COND1-R17): las copias Drive de los temporales se re-verificaron por descarga + comparación de contenido — 60/60 archivos con copia verificados (39 por descarga byte-idéntica + 21 por md5 + contenido JSON completo, ver CORR-DESCARGA-JSON-R17); las 5 copias huecos.jsonl no existen en Drive por regla (huecos nunca sale de local, ver CORR-MANIFIESTO-HUECOS-R17) — excepción documentada, no incumplimiento; P-51 y P-54 no tienen copia Drive (creados post-FASE 4); (2) **la puerta de retiro queda en 2 de 3** (condición 1 y 2 cumplidas; la 3 sigue sin cumplir) — el único bloqueo restante es la autorización, no una medición; los 12 temporales se **PRORROGAN por 6.ª vez** (los 9), 2.ª vez (P-47/P-48) y 1.ª re-evaluación (P-51); (3) **nuevos candidatos P-54..P-56** (§7); (4) **T-4 r17 corrió DENTRO de este frente** (§5): 5.607 archivos, diff vs r16: 5.389 OK / 4 CAMBIO (todos explicados) / 0 MOVIDO / **0 FALTA** / 214 NUEVO (todos en ronda_16/ronda_17); (5) P-18: variograma.pyc sigue ausente; censo `.pyc` 18 → 18 (0 nuevos, 0 faltan); (6) F4 r17 re-corrió las 16 búsquedas de forjados en GitHub (H3 r16 atendida por ese frente, no por este); F7 r17 preparó un ítem de anexo M-72 (no es de este frente; se registra solo como archivo nuevo en el T-4).

## 1. Revisión P-01..P-56 (r16 → r17)

Estado tras FASE 4 r16 (Drive 111/111 + GitHub 42/42, HEAD `1c16578e`; absorción 9/9, HEAD `fe265243`) y tras FASE 1 r17 (F1/F2/F3/F5/F6 con entregables; F4/F7 escribiendo en paralelo; corpus 1.181). "Verificado r17" = existencia + tamaño + sha re-medidos por este frente (script `_verificar_p17.py`, salida `_verificacion_p17.json`: **240/240 OK**, 0 no-OK); "sin cambio" = coincide con el registro r16.

**Convención de conteo (declarada, CORR-TALLY-R15):** una entrada = un ID de candidato, salvo (i) los IDs con sub-entradas (P-11, P-15, P-17, P-23, P-29, P-31), que cuentan por sus sub-entradas y no como ID propio — excepto (ii) el padre P-15, que cuenta además como entrada RESUELTO; (iii) P-13 "PODAR UNA (con puntero)" cuenta como PODAR-CONDICIONADO (el puntero es la condición). Con esta convención la tabla tiene 74 filas para 75 entradas (la diferencia es el padre P-15, sin fila propia), y el tally reproduce exactamente los de r13/r14/r15/r16. El conteo ingenuo por filas (12 PODAR / 6 CONDICIONADO) suma lo mismo (18).

| ID | Candidato | Estado r17 | Veredicto r17 |
|---|---|---|---|
| P-01 | WAV 44k M-06 (344.565.658 B) | Verificado r17: sha `8c5673ae…` idéntico | PODAR (sin cambio) |
| P-02 | WAV 22k M-06 (172.282.922 B) | Verificado r17: sha `90c16686…` idéntico | PODAR (sin cambio) |
| P-03 | billboard_lab/ 890 archivos + tarball 1.556.690 B | Verificado r17: 890 archivos; tarball sha `78c07c6a…` idéntico | CONSERVAR (sin cambio) |
| P-04 | README viejo Drive (5.750 B) | Sin re-verificación en vivo en r17 (frente local, como r10/r11/r12/r13/r14/r15/r16) | PODAR (sin cambio) |
| P-05 | 80 archivos raíz Drive ronda_6/ | Sin re-verificación en vivo en r17 | MOVER (sin cambio) |
| P-06 | DUP-01..05 (4.977 B) | Verificado r17: tamaño idéntico | CONSERVAR (sin cambio) |
| P-07 | DUP-06 (8.385 B) | Verificado r17: tamaño idéntico | CONSERVAR (sin cambio) |
| P-08 | wir tarball 284.831 B ↔ 70 TSV | Verificado r17: 70 TSV | CONSERVAR ambas (sin cambio) |
| P-09 | ucdp_brd_261.zip (39.816 B) | Verificado r17: contenido interno sha `b34ecb57…` idéntico | PODAR el zip (sin cambio) |
| P-10 | Respaldos r5/r7, FIRMS, claims | Verificado r17: FIRMS sha `48a327d3…` idéntico; respaldos en `ronda_5/respaldo_pre_r5/` (3 archivos) y `ronda_7/respaldo_pre_r7/` (4 archivos) | CONSERVAR (sin cambio) |
| P-11a | _upload_log_r7.jsonl (16.668 B) | Verificado r17: tamaño idéntico | CONSERVAR (registro) |
| P-11b | _upload_r7.log (14.266 B) | Verificado r17: tamaño idéntico | PODAR (redundante) |
| P-11c | _upload_r7.py (2.095 B) | Verificado r17: tamaño idéntico | CONSERVAR (patrón) |
| P-12 | euclid pdf r7↔r8 (2×2.699.386 B) | Verificado r17: sha `d3737995…` en ambas | CONSERVAR ambas (sin cambio) |
| P-13 | DESI DR2 duplicado en r8 (2×12.175.089 B) | Verificado r17: sha `1e82f26e…` en ambas | PODAR-CONDICIONADO — PODAR UNA (con puntero); ver §1 convención |
| P-14 | reexport_drive/ 27 archivos | Verificado r17: `diff -r` exit 0, 27/27 | CONSERVAR (sin cambio) |
| P-15a | claims.jsonl.nuevo_B (939.546 B) | Verificado r17: sha `3760a19c…` idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15b | provenance nuevo_B (44.587 B) | Verificado r17: tamaño idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15c | claims_resumen nuevo_B (16.551 B) | Verificado r17: sha `5b93a842…` idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15d | claims.jsonl.nuevo_B1 (936.190 B) | Verificado r17: sha `3e745468…` idéntico | CONSERVAR (sin cambio) |
| P-15e | provenance nuevo_B1 (44.429 B) | Verificado r17: tamaño idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15f | claims_resumen nuevo_B1 (16.494 B) | Verificado r17: tamaño idéntico | PODAR-CONDICIONADO (sin cambio) |
| P-15g | confirmaciones/huecos B/B1 (4×) | Verificado r17: tamaños idénticos (2.253 / 2.753 B) | PODAR-CONDICIONADO (sin cambio) |
| P-15h | resto preparacion_ola2/ | Conteo verificado r17; sin re-verificación individual; sin evidencia de cambio | CONSERVAR (sin cambio) |
| P-16 | Datos F2, estado_vivo, prep. r8 | Existencia verificada r17 (3 directorios); sin re-verificación individual; sin evidencia de cambio | CONSERVAR (sin cambio) |
| P-17a | _upload_log_r8.jsonl (26.243 B) | Verificado r17: tamaño idéntico | CONSERVAR (registro) |
| P-17b | _upload_stdout_r8.log (19.396 B) | Verificado r17: tamaño idéntico | PODAR (redundante) |
| P-17c | _upload_r8.py (2.796 B) | Verificado r17: tamaño idéntico | CONSERVAR (patrón) |
| P-17d | _drive_folders_r8.json (775 B) | Verificado r17: tamaño idéntico | CONSERVAR (registro) |
| P-18 | __pycache__/variograma .pyc | Sigue ausente (ver §5); variograma.py sha `f8ec697e…` intacto | RESUELTO POR DESAPARICIÓN (sin cambio) |
| P-19 | Par Robbins (parquet + zip, 17,5 MB) | Verificado r17: parquet sha `0b7365cd…`; zip sha `0b8fe6fe…` | CONSERVAR ambos (sin cambio; (b) verificada r11: NO clase 3) |
| P-20 | GHCN inventario + estaciones (48 MB) | Verificado r17: shas `3d7378c3…` / `437ee87f…` idénticos | CONSERVAR (sin cambio) |
| P-21 | runs_recientes raw ↔ procesado | Verificado r17: 446.576 / 412.765 B idénticos | CONSERVAR ambas (sin cambio) |
| P-22 | heartbeat_rev_r9_*.json (23) | Verificado r17: 23 archivos presentes | NO CANDIDATO (sin cambio) |
| P-23a | raw_r9_*.json (8) | Verificado r17: 8 archivos | CONSERVAR (sin cambio) |
| P-23b | raw_r9_.miu_ciclo.lock (6 B) | Verificado r17: presente, 6 B | PODAR (sin cambio) |
| P-24 | herramientas/ r9 (21 archivos) | Verificado r17: 21 archivos (recursivo) | CONSERVAR (sin cambio) |
| P-25 | mecanismos/ r9 (12 archivos) | Verificado r17: 12 archivos | CONSERVAR (sin cambio) |
| P-26 | Datos M-46..M-49 + scripts | Verificado r17: Essen 20 .krn / 0 .sha256; quijote 2.168.392 B; GHCN 13 .dly | CONSERVAR (sin cambio) |
| P-27 | respaldo_pre_r10/ (5 archivos) | Verificado r17: shas idénticos + **copia Drive re-verificada por descarga (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-28 | respaldo_pre_b2/ (5 archivos) | Verificado r17: shas idénticos + **copia Drive re-verificada por descarga (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-29a | GRIMORIO pre-D-05 (47.452 B) | Verificado r17: sha `58d7d64b…` idéntico | CONSERVAR (sin cambio) |
| P-29b | corpus pre-reparación D-05 (3 archivos) | Verificado r17: shas idénticos + **copia Drive re-verificada por descarga (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-30 | nuevo_B2_sobre_B ×2 (997.603 B) | Verificado r17: shas `fd54545a…` / `6fa9c67f…` idénticos | PODAR (sin cambio; contenido hoy en 3 sitios, ver §7 r11) |
| P-31a | corpus_qualias.antes_d01 (42.266 B) | Verificado r17: sha `5fdce82d…` idéntico + **copia Drive re-verificada por descarga (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-31b | qualias_sin_fuente.csv.antes_d01 (151.217 B) | Verificado r17: sha `9075e7a9…` idéntico | PODAR (sin cambio) |
| P-31c | consolidado+índice .antes_d02 (7.468 B) | Verificado r17: shas `5e30073c…` / `9e937235…` idénticos | PODAR (sin cambio) |
| P-31d | disensos .antes_d16 (3 archivos, 15.954 B) | Verificado r17: shas `bacda342…` / `1d0f7387…` / `15865a5a…` idénticos | PODAR (sin cambio) |
| P-31e | segunda_carpeta_listado (14.747 B) | Verificado r17: sha `9032137e…` idéntico | CONSERVAR (sin cambio) |
| P-31f | v105 export (1.094 B) | Verificado r17: sha `9617fae5…` idéntico | CONSERVAR (sin cambio) |
| P-32 | ejecucion_c/respaldo/ (4 archivos) | Verificado r17: motor `a30d69e8…` ×2, medir_nodos `4c4f3042…`, manifiesto `1e0a6987…`; fundamento re-medido bajo lectura ESTRICTA, ver §6 | CONSERVAR — **ya NO por clase 3** (CORR-P32-B-R15 adoptada FASE 2 r15); por D-07 + historia |
| P-33 | scripts E + puertas (4 archivos) | Verificado r17: tamaños idénticos (`puertas_despues.txt` en `ejecucion_a/`, 109.913 B) | CONSERVAR (sin cambio) |
| P-34 | micelio_yml paquete (1.392 B) | Verificado r17: sha `17de8000…` idéntico | CONSERVAR (sin cambio) |
| P-35 | respaldo_pre_r11/ (5+1 archivos) | Verificado r17: shas idénticos + **copia Drive re-verificada por descarga (ver §2)**; total 1.331.487 B | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-37 | respaldo_pre_n11/ (2+1 archivos) | Verificado r17: shas idénticos + **copia Drive re-verificada por descarga (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-38 | respaldo_pre_r12/ (5+1 archivos) | Verificado r17: shas idénticos + **copia Drive re-verificada por descarga (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-39 | heartbeat_rev_r12_*.json (23) | Verificado r17: 23 archivos presentes | NO CANDIDATO (evidencia) |
| P-40 | _upload_n11.py + _upload_n11.jsonl | Verificado r17: tamaños idénticos (6.041 / 2.227 B) | CONSERVAR (patrón + registro) |
| P-41 | respaldo_pre_r13/ (5+1 archivos) | Verificado r17: shas idénticos + **copia Drive re-verificada por descarga (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-42 | heartbeat_rev_r13_*.json (41) | Verificado r17: 41 archivos presentes | NO CANDIDATO (evidencia) |
| P-43 | scripts+logs depósito FASE 4 r12 (5 archivos) | Verificado r17: tamaños idénticos | CONSERVAR (patrón + registro) |
| P-44 | respaldo_pre_r14/ (5+1 archivos) | Verificado r17: shas idénticos + **copia Drive re-verificada por descarga (ver §2)**; **reversión viva de la absorción r14** (aplicada 2026-11-14, 1.168→1.174) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2) |
| P-45 | heartbeat_rev_r14_*.json (21) | Verificado r17: 21 archivos presentes | NO CANDIDATO (evidencia) |
| P-46 | scripts+logs depósito FASE 4 r13 (7 archivos) | Verificado r17: tamaños idénticos | CONSERVAR (patrón + registro) |
| P-47 | respaldo_pre_r15/ (5+1 archivos) | Verificado r17: shas idénticos + **copia Drive re-verificada por descarga (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, segunda re-evaluación) |
| P-48 | respaldos por decisión r15 (4 dirs) | Verificado r17: shas idénticos + **copia Drive re-verificada por descarga (ver §2)** | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, segunda re-evaluación) |
| P-49 | heartbeat_rev_r15_*.json (42) | Verificado r17: 42 archivos presentes | NO CANDIDATO (evidencia) |
| P-50 | scripts+logs depósito FASE 4 r14 (18 archivos) | Verificado r17: tamaños idénticos | CONSERVAR (patrón + registro) |
| P-51 | respaldo_pre_absorcion_r15/ (7+1 archivos) | Verificado r17: shas idénticos; **SIN copia Drive** (ver §2) | CONSERVAR-TEMPORAL → **PRORROGADO** (§2, primera re-evaluación) |
| P-52 | heartbeat_rev_r16_*.json (99) + raw_r16_*.json (12) + lock (6 B) | Verificado r17: 99 + 12 + lock presentes | NO CANDIDATO (evidencia) |
| P-53 | scripts+logs depósito FASE 4 r15 (18 archivos) | Verificado r17: tamaños + shas contra la línea base r16 (18/18) | CONSERVAR (patrón + registro) |
| P-54 | respaldo_pre_absorcion_r16/ (7+1 archivos) | NUEVO r17, verificado (§7) | CONSERVAR-TEMPORAL |
| P-55 | scripts+logs depósito FASE 4 r16 (17 archivos) | NUEVO r17, verificado (§7) | CONSERVAR (patrón + registro) |
| P-56 | heartbeat_rev_r17_*.json (55) + raw_r17_*.json (13) + lock (6 B) | NUEVO r17, contado (§7) | NO CANDIDATO (evidencia) |


## 2. Los 12 respaldos temporales: horizonte vencido de nuevo, PRORROGA (no retiro) — pero la puerta pasa a 2 de 3

**Condición de vencimiento (r16):** depósito FASE 4 r16 verificado + FASE 2 r16 cerrada. Ambas se cumplieron (Drive 111/111 por tamaño; GitHub 42/42 por blob, HEAD `1c16578e`; absorción 9/9 por blob, HEAD `fe265243`; verificación global FASE 2 CONFORME CON HALLAZGOS, 5 menores, 0 mayores). El horizonte, por tanto, **venció**. La re-evaluación es documental: ¿se conservan, se retiran con nota, o se prorrogan?

### 2.1 La condición 1, intentada por primera vez en 6 rondas: CUMPLIDA (CORR-COND1-R17)

**Método (SÉ, ejecutado por este frente, 2026-11-14 18:42–18:44Z):** para cada archivo temporal con copia Drive, su fileId se tomó del `_upload_log_rN.jsonl` del depósito que lo subió; el contenido se descargó con `files get --params '{"fileId":...,"alt":"media"}' -o /tmp/...` y se comparó su sha256 con el local (script `_descargar_drive_r17.py`, salida `_descarga_drive_r17.json`). Las descargas van a /tmp (efímero); nada se escribió en Drive ni en local.

**Resultado del primer pase (65 archivos en alcance): 39 OK_BYTE_IDENTICO, 21 DIFERENTE, 5 SIN_ID, 0 ERROR_DESCARGA, 0 LOCAL_AUSENTE.** Los 21 "DIFERENTE" no eran diferencias reales: las 21 descargas devolvieron **0 bytes** (sha `e3b0c442…`, vacío). Todas eran archivos `application/json` (`claims_resumen.json` ×11, `manifiesto_shas.json` ×10). Ver CORR-DESCARGA-JSON-R17 (§9): el CLI vuelca el contenido JSON en stdout en vez de escribirlo en `-o`.

**Segundo pase (script `_verificar_json_drive_r17.py`, salida `_verificacion_json_drive_r17.json`): 21/21 OK_MD5_Y_CONTENIDO, 0 DIFERENTE_CONFIRMADO.** Dos canales por archivo: (A) `md5Checksum` de metadatos Drive == md5 local y mismo tamaño; (B) el stdout de `files get alt=media` parseado como JSON == el JSON local parseado (verificado en un archivo de control antes de correr el pase: stdout sin `retrieved_at` == local, exacto).

**Resultado final de la condición 1: 60/60 archivos con copia Drive verificados por contenido** (39 por descarga byte-idéntica + 21 por md5 + contenido JSON completo); 0 diferencias reales; 0 errores de descarga. Desglose por temporal:

| Respaldo | Archivos con copia | Descarga byte-idéntica | md5 + contenido JSON | Sin copia Drive |
|---|---|---|---|---|
| P-27 `respaldo_pre_r10/` | 5 | 4 (claims, provenance, confirmaciones, huecos) | 1 (resumen) | 0 |
| P-28 `respaldo_pre_b2/` | 5 | 4 | 1 (resumen) | 0 |
| P-29b `ejecucion_d/respaldo/` (3 de corpus) | 3 | 3 | 0 | 0 |
| P-31a `corpus_qualias.antes_d01` | 1 | 1 | 0 | 0 |
| P-35 `respaldo_pre_r11/` | 5 de 6 | 3 (claims, provenance, confirmaciones) | 2 (resumen, manifiesto) | 1 (huecos, por regla) |
| P-37 `respaldo_pre_n11/` | 3 | 2 (claims, manifiesto .txt) | 1 (resumen) | 0 |
| P-38 `respaldo_pre_r12/` | 5 de 6 | 3 | 2 (resumen, manifiesto) | 1 (huecos, por regla) |
| P-41 `respaldo_pre_r13/` | 5 de 6 | 3 | 2 (resumen, manifiesto) | 1 (huecos, por regla) |
| P-44 `respaldo_pre_r14/` | 5 de 6 | 3 | 2 (resumen, manifiesto) | 1 (huecos, por regla) |
| P-47 `respaldo_pre_r15/` | 5 de 6 | 3 | 2 (resumen, manifiesto) | 1 (huecos, por regla) |
| P-48 `respaldo_pre_r15_n01/n13/n14/n16/` (4 dirs) | 18 | 10 (claims ×4, provenance ×4, b2, dataset) | 8 (resumen ×4, manifiesto ×4) | 0 |
| P-51 `respaldo_pre_absorcion_r15/` | 0 de 8 | — | — | 8 (sin copia Drive) |
| **Total** | **60 de 65** | **39** | **21** | **5 huecos + 8 de P-51** |

**Las 5 copias huecos.jsonl no existen en Drive por regla, no por accidente (CORR-MANIFIESTO-HUECOS-R17, §9):** los depósitos r11–r15 excluyeron `huecos.jsonl` de la subida (la regla SÉ-export: huecos nunca sale de local, orden 2026-11-13 16:51). Verificado en vivo por este frente: cada carpeta `respaldo_pre_r1[1-5]/` en Drive contiene exactamente 5 archivos (claims, resumen, confirmaciones, manifiesto, provenance) y **ningún** `huecos.jsonl`; los logs de subida r11–r15 tienen 0 menciones de "huecos". Los manifiestos fase4 r11–r15, en cambio, sí listan `huecos.jsonl` (planificado, no subido): el manifiesto sobreestima el depósito en ese archivo. En r10 sí se subió huecos (anterior a la regla): los 2 huecos de P-27/P-28 se descargaron byte-idénticos. La excepción huecos es, por tanto, **inaplicable** a la condición 1, no incumplida: no hay copia que re-verificar porque la regla prohíbe que exista.

**P-51 y P-54 no tienen copia Drive:** creados post-FASE 4 (P-51 durante la absorción r15, P-54 durante la absorción r16). Su contenido de corpus está en GitHub (P-51: HEAD `1f108ef8`; P-54: HEAD `fe265243`), pero el paquete con manifiesto es solo local. Para ellos la condición 1 sigue sin ser aplicable; se registra como tal, no como verificada.

**Verificación r17 de los 12 directorios (SÉ, re-medido por este frente, `_verificacion_p17.json` 240/240 OK):** los 12 están intactos, con todos los shas de r16 (P-51 con los de su primera medición). Tabla de referencia (shas ya registrados en r16 §2; sin cambio):

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

### 2.2 Condiciones de retiro fijadas en r12 §2 — estado en r17 (SÉ)

| Condición de retiro (r12) | Estado r17 |
|---|---|
| Copias Drive re-verificadas por descarga | **CUMPLIDA (primera vez).** 60/60 archivos con copia verificados por contenido (§2.1). Excepciones documentadas: 5 huecos sin copia por regla (inaplicable); P-51/P-54 sin copia por creación post-FASE 4 (inaplicable por ahora). El hueco de procedimiento de 5 rondas **queda cerrado**. |
| Depósito r16 congelado | **Cumplida.** FASE 4 r16 cerrada; nada más se escribió en `ronda_16/` de Drive tras el cierre — verificado en vivo por este frente (listado Drive 2026-11-14 ~18:49Z: 19 hijos en la raíz, última modifiedTime 2026-11-14T17:08:20Z, ventana de subida FASE 4). (El depósito r15 sigue congelado, como en r16.) |
| Condiciones de P-15 re-apuntadas (o podas condicionadas ejecutadas antes) | **NO cumplida.** P-15a/b/c/e/f/g siguen apuntando a `respaldo_pre_r10/` y `respaldo_pre_b2/` como fuentes de reconstrucción; ninguna poda condicionada se ha ejecutado (falta la autorización). |

**2 de 3 cumplidas → no se retira.** Recomendación documentada: **PRORROGAR los 12, con nuevo horizonte explícito.** Lo que cambia respecto a r12–r16: el hueco de procedimiento está cerrado y el único bloqueo restante es la autorización (condición 3), no una medición. Ninguna medición futura puede desbloquear el retiro: solo la re-apuntación de P-15 o la ejecución de las podas condicionadas, y ambas necesitan las frases del Jardinero. Razones, en orden:
1. **La cadena de reversión es ahora de 16 eslabones y sigue creciendo.** F1 r16 añadió P-54 (estado 1.178, pre-absorción automática r16) encima de P-51, que dejó de ser preventivo: es la reversión de F1 r16 (N-19 + C-1184/C-1185/C-1186). La cadena completa: P-54 (1.178) → P-51 (1.175) → P-47 (1.174) → P-44 (1.168) → P-41 (1.168) → P-38 (1.162 post-N-11) → P-37 (1.162 pre-N-11) → P-35 (1.160) → P-28 (estado B, 1.152) → P-27 (estado pre-r10, 1.138), con P-29b (D-05) y P-31a (D-01) como ramas, y P-48 como haz paralelo por decisión (sus 4 dirs: _n01/_n13 estado 1.174, _n14 estado 1.174 + b2 con R2-25 SE, _n16 estado 1.175 post-N-14). Retirar eslabones intermedios ahora rompería la cadena en plena ronda, con FASE 4 r17 todavía pendiente.
2. **La condición 1 cumplida cambia el argumento, no el veredicto.** En r16 la razón 2 era que las copias Drive "siguen sin estar re-verificadas por descarga" — eso ya no es cierto: las copias existen Y están re-verificadas por contenido. Lo que sigue siendo cierto es que retirar los temporales dejaría la reversión de F1 r11/r12/r13/r14/r15 dependiendo solo de las copias de Drive (ahora auditadas) en vez de tener además el local. La cadena local sigue valiendo más que la suma de sus copias.
3. **Las condiciones de P-15 dependen de P-27/P-28.** Retirarlos dejaría los PODAR-CONDICIONADO sin fuentes de reconstrucción; habría que re-apuntarlas a Drive, y eso es exactamente la condición 3, que no está cumplida.
4. **P-29b y P-31a no tienen otro respaldo local.** La reversión de D-05 (15 claims + 4 huecos + L249) vive solo en P-29b; la de D-01 (qualias pre-canon) solo en P-31a. Sus copias Drive existen y ahora están verificadas por descarga, pero la reversión documentada en las decisiones apunta a las rutas locales.
5. **P-35 no puede retirarse mientras P-30 siga pendiente.** El contenido de P-35 es byte-idéntico al de P-30 (r11 §7: sobrevive en 3 sitios — P-30, P-35, Drive r10). P-30 está recomendado PODAR sin ejecutar. Retirar P-35 dejaría la reversión de F1 r11 dependiendo de un archivo marcado para poda.
6. **P-51 y P-54 no tienen copia Drive.** P-51 es el único temporal sin respaldo externo (su contenido de corpus está en GitHub, HEAD `1f108ef8`, pero el paquete con manifiesto es solo local); P-54 igual (GitHub HEAD `fe265243`). Retirarlos dejaría sin reversión documentada a las dos últimas absorciones automáticas.
7. **El coste sigue siendo despreciable:** los 16 eslabones de la cadena (12 temporales + P-48 con 4 dirs + P-54) suman **19.712.089 B** (~18,8 MB). La poda de estos archivos no es una poda de espacio; es una poda de orden, y el orden que aportan como cadena de reversión vale más.

**Nuevo horizonte (explícito):** conservar hasta que (a) el depósito FASE 4 de r17 esté verificado en Drive y (b) la verificación de FASE 2 de r17 cierre sin discrepancias. Re-evaluar en r18. Condición de retiro en r18, si se propone entonces: copias Drive re-verificadas por descarga (ya cumplida, re-verificar solo lo nuevo: P-54 si FASE 4 r17 lo deposita) + depósito r17 congelado + condiciones de P-15 re-apuntadas (o ejecutadas las podas condicionadas antes). **Nota de procedimiento:** la condición 1 ya no es el bloqueo; si FASE 4 r17 deposita P-54, su copia Drive queda lista para re-verificar en r18.

## 3. P-19: sin cambio — (b) verificada en r11, no re-descargada en r17

- El test de 2 partes de REGLA-PODA-PROV-02 quedó completo en r11: (a) SÍ, (b) NO (zip re-descargado byte-idéntico, 13.210.556 B, sha `0b8fe6fe…`) → **NO es clase 3**. En r12/r13/r14/r15/r16/r17 no se re-descarga (la verificación r11 es la vigente; re-descargar cada ronda no añade nada).
- Verificado r17: parquet sha `0b7365cd…` (4.322.672 B) y zip sha `0b8fe6fe…` (13.210.556 B), idénticos a r9/r10/r11/r12/r13/r14/r15/r16. Veredicto CONSERVAR ambos, por trazabilidad (falso espejo de M-50), sin cambio.

## 4. P-36 fantasma: sin cambio — RESERVADO, no se reutiliza

- La identificación (P-36 = P-23b, por aritmética 997.603+174.639+6=1.172.248 exacto + unicidad del 6 B) y la decisión (RESERVADO) se sostienen sin cambio. P-23b verificado r17: presente, 6 B. El siguiente candidato nuevo tras P-35 es P-37 (asignado en r12); P-41/P-42/P-43 se asignan en r13, P-44/P-45/P-46 en r14, P-47/P-48/P-49/P-50 en r15, P-51/P-52/P-53 en r16 y P-54/P-55/P-56 en §7 en el orden del encargo de este frente. No se reutiliza P-36.

## 5. P-18 + T-4 r17: el inventario corrió DENTRO de este frente

### 5.1 P-18: sigue RESUELTO POR DESAPARICIÓN; causa sigue NO_SÉ

- **Estado r17 (SÉ):** `ronda_9/mecanismos/__pycache__/` sigue sin existir; el `.pyc` de variograma sigue ausente. `variograma.py` intacto (6.351 B, sha `f8ec697e…`, idéntico a r9/r10/r11/r12/r13/r14/r15/r16). Los 4 `.pyc` supervivientes de r2/r3 siguen presentes (censo T-4, §5.2).
- **Causa de la desaparición: sigue NO_SÉ.** Ninguna evidencia nueva en disco. La ventana sigue siendo ~18:00Z–20:30Z 2026-11-13.

### 5.2 T-4 r17 (inventario con shas, dentro de F9)

- **Herramienta:** `_inventario_r17.py` (adaptado de `_inventario_r16.py`, rutas y etiquetas verificadas una a una antes de correr, lección r15 §9), salida `manifiesto_tejido_r17.json`, diff `_diff_inventario_r17.py` → `diff_inventario_r17.md`. Escaneo 2026-11-14T18:50:13Z. Solo lectura. Instantánea de FASE 1 r17 (F1/F2/F3/F5/F6 con entregables; F4/F7 escribiendo en paralelo en ronda_17/; el manifiesto es el estado a la hora del escaneo, no un cierre).
- **Resultado:** **5.607 archivos, 1.550.690.292 B, 0 errores de lectura** (r16: 5.393 archivos, 1.533.203.123 B). Diff contra el manifiesto r16 (5.393 entradas): **5.389 OK / 4 CAMBIO / 0 MOVIDO / 0 FALTA / 214 NUEVO**.
- **CAMBIO (4, todos explicados — ninguno es una desaparición ni una corrupción):**
  1. `ronda_12/afirmaciones_pendientes.md` 25.357 → 29.979 B (sha `d770ae2e…` → `0b056e2b…`): FASE 5 r16 (principal): N-19 + C-1184/C-1185/C-1186 APLICADAS, 7/7 aserciones + corrección ok=349 en §21.
  2. `memoria/anexo-vi/claims.jsonl` 981.461 → 985.169 B (sha `7e5f016d…` → `fd1df2db…`): absorción automática r16 post-FASE 4 (N-19 + C-1184/C-1185/C-1186). 1.178 → 1.181 líneas.
  3. `memoria/anexo-vi/claims_resumen.json` 17.420 → 17.523 B (sha `ae402126…` → `ebaa1e53…`): regenerado (total 1.181, SE 1047, hash_real 1167).
  4. `memoria/anexo-vi/provenance.sha256` 48.214 → 48.483 B (sha `b5cb6b43…` → `728f6770…`): 361 → 363 líneas (2 entradas de la absorción r16).
- **MOVIDO: 0.** Ningún archivo cambió de ruta entre r16 y r17.
- **FALTA: 0.** **Los 4 `testA–D.err` NO reaparecieron** (0 en el manifiesto r17, siguen ausentes, sin tercer evento FRÁGIL-02), y **ningún archivo nuevo falta**: no hay tercer evento de desaparición. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin evento nuevo en esta ronda.
- **NUEVO (214):** todos dentro de `ronda_16/` o `ronda_17/` (0 fuera). Desglose: `ronda_17/ejecucion_f2/` 84 (55 payloads heartbeat + 13 raws JSON + lock + scripts F2 r17 + documentos), `ronda_16/deposito/` 17 (scripts+logs FASE 4 r16, P-55), `ronda_17/ejecucion_f6/` 15, `ronda_17/ejecucion_f3/` 14, `ronda_16/ejecucion_f7/` 13 (absorción r16: script, decisiones, puertas), `ronda_17/ejecucion_f7/` 11 (F7 r17 escribiendo: preparadas + ítem M-72), `ronda_16/ejecucion_f4/` 8, `ronda_16/respaldo_pre_absorcion_r16/` 8 (P-54), `ronda_17/ejecucion_f9/` 8 (este frente), `ronda_16/ejecucion_f9/` 6 (salidas F9 r16 escritas tras el escaneo T-4 r16), `ronda_16/ejecucion_f1/` 5 (absorción r16), `ronda_16/tejido/` 5 (FASE 3 r16), `ronda_17/ejecucion_f4/` 5 (F4 r17 escribiendo: forjados re-corridos), `ronda_16/conectar/` 3 (F8 r16), `ronda_16/verificacion/` 3 (FASE 2 r16), `ronda_17/ejecucion_f1/` 2, `ronda_17/ejecucion_f5/` 2, `ronda_16/informe_absorcion_r16.md` 1, FASE 0 r17 (4). Todos explicados por trabajo posterior al escaneo r16 (FASE 2/3/4 r16, absorción automática r16, FASE 0/FASE 1 r17). Ningún archivo nuevo fuera del tejido. Detalle completo en `inventario_t4_r17.md`.
- **Censo `.pyc`: r16 18 → r17 18 (nuevos 0, faltan 0).** Ningún `.pyc` nuevo en esta ronda; `variograma.pyc` sigue ausente (no está en el manifiesto r17). El patrón de generación de bytecode se detuvo esta ronda (ningún import nuevo con `__pycache__` dentro del tejido escaneado).

## 6. P-32 y la clase 3: re-medido bajo la lectura ESTRICTA (CORR-P32-B-R15, adoptada FASE 2 r15)

**Hecho (SÉ, medido por este frente en el corpus vivo, estado 1.181):** ningún campo `hash` de ningún claim vivo cita `a30d69e8…` (0 ocurrencias en campo hash — igual que tras F1 r11, F1 r12, F1 r13, F1 r14, F1 r15 y F1 r16). El hash viejo sobrevive en **14 ocurrencias en 5 claims** (motivo y/o texto): C-639 ×4, C-903 ×4 (motivo + texto), C-919 ×3, C-1104 ×2, C-1129 ×1 (solo texto). En provenance: 1 ocurrencia (comentario L247, reparación D-07) y `8d15b724…` 1 ocurrencia (entrada L248, motor corregido). Los claims nuevos C-1184/C-1185/C-1186 (absorción r16) NO mencionan `a30d69e8…` (0 ocurrencias); el paquete absorbido r15 (`claims_nuevos_r15_auto.jsonl`, C-1181..C-1183) tampoco (0 ocurrencias, re-verificado en r16).

**Aplicación de la regla ADOPTADA (canon N-13, `canon_regla_poda_prov_02.md`), con la corrección adoptada:**
- **(a) SÍ:** 4 motivos de claims vivos (C-639/C-903/C-919/C-1104) citan `a30d69e8…` en motivo/nota de reparación; 0 en campo `hash`. Re-medido hoy por grep sobre claims.jsonl 1.181.
- **(b) NO bajo la lectura estricta adoptada (CORR-P32-B-R15, FASE 2 r15):** los bytes pre-corrección (sha256 `a30d69e8…`, 19.987 B) **sí son re-obtenibles byte-idénticos desde el historial git local** — `git show HEAD:app/js/miu-engine.js` (commit `faf2033`) es byte-idéntico al respaldo (`cmp` exit 0; sha256 `a30d69e8bd3e9327a6063813ee8833e5efb613f7812aea1f328b50b34e351c4b`, 19.987 B; re-medido por este frente en r17, check `P-32-git-head` OK en `_verificacion_p17.json`). La lectura de la adopción ("archivos del checkout vivo") queda sustituida por la lectura estricta ("archivos vivos + historial"), que FASE 2 r15 adoptó.
- **Veredicto: P-32 NO es clase 3.** Su CONSERVAR se sostiene por reversión de D-07 + historia citada en motivo (como en r10–r16), no por la regla. Sin cambio de veredicto respecto a r10–r16; cambia su fundamento, y el cambio es ahora el vigente (no un matiz pendiente).
- **Errata del canon N-13:** la tabla del canon sigue con la errata señalada en CORR-P32-B-R15 (la (b) descrita como "archivos vivos" sin mencionar el historial). Este frente no re-decide el canon: registra que la errata persiste y que FASE 2 r15 ya adoptó la lectura estricta como veredicto vigente.

## 7. Nuevos candidatos de r17: P-54..P-56

Solo de lo generado por la ronda 16 tardía (absorción post-FASE 4, depósito FASE 4) y la ronda 17. Los entregables de las ejecuciones (decisiones, registros, ESTADOs, paquetes) NO son candidatos: son el registro de la ronda. Solo sus respaldos, sus payloads y sus registros de subida.

### P-54 — `ronda_16/respaldo_pre_absorcion_r16/` (7 archivos + manifiesto, 1.388.355 B) — CONSERVAR-TEMPORAL

- **Qué es:** el snapshot del corpus antes de la absorción automática post-FASE 4 r16 (estado 1.178, post-F1 r16): claims.jsonl 981.461 B (1.178 líneas, sha `7e5f016d…`), provenance.sha256 48.214 B (361 líneas, sha `b5cb6b43…`), claims_resumen.json 17.420 B (sha `ae402126…`), confirmaciones.jsonl 169.361 B (294 filas, sha `dc94458b…`), huecos.jsonl 147.057 B (139 filas, sha `3713376a…`), incertidumbre_mediciones.md 13.291 B (sha `6b9ea2aa…`, 11 ítems M-56..M-66), dataset_nodos_Df.csv 10.748 B (sha `0852d58f…`), más `manifiesto_shas.json` (sha verificado contra el manifiesto: 7/7 archivos coinciden; el manifiesto declara `poda_id: P-54`). Shas verificados por este frente (`_verificacion_p17.json`, P-54-*).
- **Por qué TEMPORAL y no PODAR:** es el ancla de reversión de la absorción automática r16 (N-19 + C-1184/C-1185/C-1186) y el eslabón superior nuevo de la cadena (§2). Podarlo ahora dejaría sin reversión a 3 claims y 1 decisión aplicadas en esta ronda.
- **Nota:** su contenido de claims difiere de P-51 (estado 1.178 vs 1.175: +C-1180 de N-14, ítem M-66 de N-18 y N-19 pendiente). **Sin copia Drive** (0 menciones en `manifiesto_shas_r16_fase4.json` y en `_upload_log_r16.jsonl`): su contenido de corpus está en GitHub (HEAD `fe265243`, 9/9 por blob), pero el paquete con manifiesto es solo local.
- **Horizonte explícito:** conservar hasta que (a) el depósito FASE 4 de r17 esté verificado en Drive y (b) la verificación de FASE 2 de r17 cierre sin discrepancias. Re-evaluar en r18.
- **Criba:** ruta `respaldo_pre_absorcion_r16` 0 ocurrencias en provenance; shas `7e5f016d…` / `ae402126…` / `b5cb6b43…` 0 ocurrencias (ver §8). No citado (la criba busca citas, no identidades). Lo protege ser la reversión.

### P-55 — scripts+logs del depósito FASE 4 r16 (17 archivos, 112.492 B) — CONSERVAR

- **Qué es:** en `ronda_16/deposito/` (17 archivos): `_construir_manifiesto_r16.py` (3.652 B) + `_crear_carpetas_r16.py` (3.137 B) + `_drive_folders_r16.json` (760 B) + `_push_claims_paths_absorcion.txt` (22 B) + `_push_grandes_paths.txt` (102 B) + `_upload_github_r16.jsonl` (17.895 B, 40 subidas GitHub verificadas por blob) + `_upload_github_r16.log` (5.282 B) + `_upload_github_r16.py` (9.187 B) + `_upload_github_r16_absorcion.jsonl` (4.162 B, 9 subidas de absorción verificadas por blob) + `_upload_github_r16_absorcion.py` (6.990 B) + `_upload_log_r16.jsonl` (21.608 B, 108 subidas Drive verificadas) + `_upload_r16.log` (8.246 B) + `_upload_r16.py` (2.137 B) + `_verificar_r16.py` (2.996 B) + `manifiesto_shas_r16_fase4.json` (17.618 B) + `verificacion_deposito_r16.md` (8.582 B) + `verificacion_remota_r16.json` (116 B). Shas registrados por este frente como línea base para r18 (`_verificacion_p17.json`, P-55-*).
- **Por qué CONSERVAR:** patrón reutilizable (como P-11c/P-17c/P-40/P-43/P-46/P-50/P-53) + registro de depósito (como P-11a/P-17a/P-40/P-43/P-46/P-50/P-53). El constructor de carpetas con mapa recorrido del árbol entero (lección CORR-CARPETA-R13) es el patrón vigente para r17; el relanzamiento GitHub con tarjeta caducada (0/42 → 42/42 con el Jardinero presente) queda registrado en `_upload_github_r16.log`.
- **Criba:** rutas `_upload_r16` / `_upload_github_r16` / `_crear_carpetas_r16` / `_verificar_r16` / `_construir_manifiesto_r16` 0 ocurrencias en provenance. No citados; los protege ser registro.

### P-56 — `ronda_17/ejecucion_f2/heartbeat_rev_r17_*.json` (55) + `raw_r17_*.json` (13) + lock (6 B) — NO CANDIDATO

- **Qué es:** los payloads crudos de heartbeat descargados por F2 r17 (55 archivos; F2 cerrada, conteo final verificado contra `estado_vivo_r17.md`: 55 nuevas) + 13 raws JSON de estado + `raw_r17_.miu_ciclo.lock` (6 B).
- **Por qué NO CANDIDATO:** evidencia, como P-22 (los 23 de r9), P-39 (los 23 de r12), P-42 (los 41 de r13), P-45 (los 21 de r14), P-49 (los 42 de r15) y P-52 (los 99 de r16). Son el único registro persistente de la serie que T-2 necesita. Se conservan en local y se siguen **excluyendo del depósito** (como los anteriores). No entran en los conteos de poda.
- **Nota de sensibilidad:** `raw_r17_observabilidad_bootstrap_V270.json` contiene un JWT anon (byte-idéntico al de r15/r16) → EXCLUIR del depósito, como en r15/r16 (aviso de F2 r17).

## 8. REGLA-PODA-PROV-01/02: PROV-02 ADOPTADA (N-13); PROV-01 sigue práctica, no canon

- **Estado:** REGLA-PODA-PROV-02 (clase 3, con el refinamiento de (a) — "campo `hash` **o motivo/nota**") fue **ADOPTADA** en r15 F1 (decisión N-13, canon `ronda_15/ejecucion_f1/canon_regla_poda_prov_02.md`, orden 01:43). La criba de esta ronda corre contra la regla vigente, no contra una propuesta. REGLA-PODA-PROV-01 (criba contra provenance) **no** fue adoptada (la decisión N-13 decide solo su objeto, PROV-02 + refinamiento): sigue como práctica documentada aplicada en F9 desde r8, no como norma.
- **Criba re-corrida en r17 bajo la regla adoptada (SÉ):** greps contra el provenance vivo (363 líneas por wc -l, sha `728f6770…`): rutas `respaldo_pre_r10`, `respaldo_pre_b2`, `pre_reparacion_d05`, `pre_d05`, `ejecucion_b/respaldo`, `ejecucion_c/respaldo`, `ejecucion_e`, `nuevo_B2_sobre_B`, `respaldo_pre_r11`, `respaldo_pre_n11`, `respaldo_pre_r12`, `_upload_n11`, `respaldo_pre_r13`, `_upload_r12`, `upload_one_r12`, `respaldo_pre_r14`, `_upload_r13`, `upload_one_r13`, `_crear_carpetas_r13`, `_verificar_r13`, `respaldo_pre_r15`, `respaldo_pre_r15_n01`, `respaldo_pre_r15_n13`, `respaldo_pre_r15_n14`, `respaldo_pre_r15_n16`, `respaldo_pre_absorcion_r15`, `respaldo_pre_absorcion_r16`, `_upload_r16`, `_upload_github_r16`, `_crear_carpetas_r16`, `_verificar_r16` — **0 ocurrencias en todos**. Por hash: `9265d81f…`, `3074c606…`, `cdbaac93…`, `58d7d64b…`, `fd54545a…`, `397cb10c…`, `b80c38a6…`, `7deb15ff…`, `33b787d2…`, `315b80b5…`, `dbe4a490…`, `d4924c9b…`, `49f1a17e…`, `1ff77190…`, `6b5fac7f…`, `1c6464d2…`, `5fda0383…`, `fd1df2db…`, `ebaa1e53…`, `728f6770…`, `acdde423…`, `cfd3fb28…` — **0 ocurrencias en todos**. Las únicas ocurrencias de hash en la criba siguen siendo las de archivos vivos ya conocidas: `5fdce82d…` 1 (comentario L22, reparación D-01), `8d15b724…` 1 (entrada L248, motor corregido), `0cf743ca…` 1 (entrada L251, GRIMORIO corregido), `a30d69e8…` 1 (comentario L247, reparación D-07), `131409eb…` 1 (entrada L359, documento de decisión N-14).
- **Consecuencia:** la criba no cambia ninguna recomendación de r17, como en r8/r9/r10/r11/r12/r13/r14/r15/r16. Ningún candidato es archivo-evidencia en el sentido de la regla propuesta (PROV-01); P-32 **ya no es clase 3** por PROV-02 adoptada bajo lectura estricta (§6).
- **Qué faltaría para adoptar REGLA-PODA-PROV-01 (documentado, no decidido):** (1) decisión canónica; (2) automatizar la criba: T-3 (`auditor_suelo.py`) podría ganar un modo `--criba-poda <ruta>`; hoy la criba es manual. La clase 3 no se automatiza con greps: exige verificar (b) por archivo (como se hizo en r11 para P-19 y en r15 §6 / r16 §6 / r17 §6 para P-32); (3) registrar dónde corre la criba: antes de proponer cualquier poda, en el frente de poda de cada ronda, con su salida guardada junto a `poda_rN.md`. El punto (2) de r10 — verificar (b) para P-19 — **queda cerrado desde r11 (§3)**.

## 9. Correcciones al registro de rondas anteriores (encontradas por este frente)

- **CORR-COND1-R17 (puerta de retiro, primera vez cumplida):** la condición 1 de retiro ("copias Drive re-verificadas por descarga", fijada en r12) se cumple por primera vez en r17: 60/60 archivos con copia Drive verificados por contenido (39 por descarga byte-idéntica + 21 por md5 + contenido JSON completo). El hueco de procedimiento de 5 rondas (r12–r16) queda cerrado. La puerta de retiro pasa de 1 de 3 a 2 de 3; el único bloqueo restante es la condición 3 (autorización).
- **CORR-DESCARGA-JSON-R17 (método, no disco):** el GWS CLI (`hatch_gws_cli drive files get --params '{"fileId":...,"alt":"media"}' -o <path>`) devuelve **0 bytes** en `-o` para archivos con mimeType `application/json` (`claims_resumen.json`, `manifiesto_shas.json`): el CLI parsea la respuesta como JSON de API y vuelca el contenido en stdout (con el bloque `retrieved_at`) en vez de escribirlo en el archivo. Verificado: el stdout sin `retrieved_at` es exactamente igual al JSON local parseado, y el `md5Checksum` de metadatos Drive coincide con el md5 local. La verificación de esos 21 archivos se hizo por md5 + contenido JSON completo (script `_verificar_json_drive_r17.py`, 21/21 OK), no por descarga byte a byte; se registran como `OK_MD5_Y_CONTENIDO`, distintos de los 39 `OK_BYTE_IDENTICO`. Lección: para archivos JSON en Drive, verificar por md5 de metadatos + stdout, no por el archivo `-o`.
- **CORR-MANIFIESTO-HUECOS-R17 (registro, no disco):** los manifiestos fase4 r11–r15 listan `huecos.jsonl` dentro de cada `respaldo_pre_r1[1-5]/` como si estuviera depositado, pero los logs de subida r11–r15 tienen 0 menciones de "huecos" y las carpetas Drive contienen exactamente 5 archivos (sin huecos). La subida excluyó `huecos.jsonl` por la regla SÉ-export (orden 2026-11-13 16:51: huecos nunca sale de local); el manifiesto, construido antes de subir, no refleja la exclusión. En r10 sí se subió huecos (anterior a la regla) y sus 2 copias se descargaron byte-idénticas. El manifiesto fase4 sobreestima el depósito en 1 archivo por respaldo (5 en total, r11–r15). No cambia ningún veredicto de depósito (las verificaciones FASE 4 contaron lo subido), pero el registro queda corregido aquí.
- **CORR-CADENA-R17 (conteo):** la cadena de reversión es de 16 eslabones y 19.712.089 B (~18,8 MB): 12 temporales + P-48 con 4 dirs + P-54. En r16 eran 15 eslabones y 18.323.734 B.
- **P-37 (precisión de depósito):** su copia Drive no se subió en el depósito r11 (0 menciones de `respaldo_pre_n11` en `_upload_log_r11.jsonl`): se subió en el depósito r12 desde `ronda_12/respaldo_pre_n11/` (4 entradas en el log r12, claims sha `b80c38a6…`). El directorio local `ronda_12/respaldo_pre_n11/` es byte-idéntico al canónico `ronda_11/respaldo_pre_n11/` en los 3 archivos de corpus (diff -r: solo `NOTA_ORIGEN.md` extra en r12). La verificación por descarga de P-37 se hizo contra esa copia r12.
- **P-53 (método):** en r17 se verifica contra la línea base registrada en r16 (`_verificacion_p16.json`, 18 archivos con tamaño + sha), no re-registrándola. 18/18 OK.
- **P-32 (conteo de ocurrencias):** total preciso 14 en 5 claims, sin cambio en r17 (C-1184/C-1185/C-1186 no lo mencionan: 0 ocurrencias).
- **P-15h/P-16 (alcance de la verificación):** conteo/existencia verificados en r17; sin re-verificación individual por archivo, como en r11/r12/r13/r14/r15/r16. Sin evidencia de cambio.

## 10. Resumen

| ID | Candidato | Tamaño | Recomendación r17 | Ejecución |
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
| P-18 | __pycache__/variograma .pyc | 8,7 KB | RESUELTO POR DESAPARICIÓN | — (causa NO_SÉ; T-4 r17 corrido: 0 FALTA nuevos, ver §5) |
| P-19 | Par Robbins (parquet + zip) | 17,5 MB | CONSERVAR ambos | — ((b) verificada r11: NO clase 3) |
| P-20 | GHCN inventario + estaciones | 48 MB | CONSERVAR | — |
| P-21 | runs_recientes raw ↔ procesado | 859 KB | CONSERVAR ambas | — |
| P-22 | heartbeat_rev_r9_*.json (23) | 446 KB | NO CANDIDATO (evidencia) | — |
| P-23a | raw_r9_*.json (8) | ~7 KB | CONSERVAR | — |
| P-23b | raw_r9_.miu_ciclo.lock | 6 B | PODAR | Local, con orden |
| P-24 | herramientas/ (21 archivos) | 55 KB | CONSERVAR | — |
| P-25 | mecanismos/ (12 archivos) | 57 KB | CONSERVAR | — |
| P-26 | Datos M-46..M-49 + scripts | ~10 MB | CONSERVAR | — |
| P-27 | respaldo_pre_r10/ (5) | 1,24 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-28 | respaldo_pre_b2/ (5) | 1,26 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-29a | GRIMORIO pre-D-05 | 47 KB | CONSERVAR | — |
| P-29b | corpus pre-reparación D-05 (3) | 1,08 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-30 | nuevo_B2_sobre_B ×2 | 998 KB | PODAR | Local, con orden |
| P-31a | corpus_qualias.antes_d01 | 42 KB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-31b | qualias_sin_fuente.csv.antes_d01 | 151 KB | PODAR | Local, con orden |
| P-31c | consolidado+indice .antes_d02 | 7,5 KB | PODAR | Local, con orden |
| P-31d | disensos .antes_d16 (3) | 16 KB | PODAR | Local, con orden |
| P-31e | segunda_carpeta_listado | 15 KB | CONSERVAR | — |
| P-31f | v105 export | 1 KB | CONSERVAR | — |
| P-32 | ejecucion_c/respaldo/ (4) | 45 KB | CONSERVAR | — (fundamento: D-07 + historia; ya NO clase 3, ver §6) |
| P-33 | scripts E + puertas (4) | 287 KB | CONSERVAR | — |
| P-34 | micelio_yml paquete | 1,4 KB | CONSERVAR | — |
| P-35 | respaldo_pre_r11/ (5+1) | 1,27 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-37 | respaldo_pre_n11/ (2+1) | 973 KB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-38 | respaldo_pre_r12/ (5+1) | 1,28 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-39 | heartbeat_rev_r12_*.json (23) | 446 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-40 | _upload_n11.py + .jsonl | 8,3 KB | CONSERVAR (patrón + registro) | — |
| P-41 | respaldo_pre_r13/ (5+1) | 1,29 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-42 | heartbeat_rev_r13_*.json (41) | 706 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-43 | scripts+logs depósito r12 (5) | 44,6 KB | CONSERVAR (patrón + registro) | — |
| P-44 | respaldo_pre_r14/ (5+1) | 1,29 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-45 | heartbeat_rev_r14_*.json (21) | 380 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-46 | scripts+logs depósito r13 (7) | 46,8 KB | CONSERVAR (patrón + registro) | — |
| P-47 | respaldo_pre_r15/ (5+1) | 1,30 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-48 | respaldos por decisión r15 (4 dirs) | 5,21 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-49 | heartbeat_rev_r15_*.json (42) | 761 KB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-50 | scripts+logs depósito r14 (18) | 158 KB | CONSERVAR (patrón + registro) | — |
| P-51 | respaldo_pre_absorcion_r15/ (7+1) | 1,32 MB | CONSERVAR-TEMPORAL → PRORROGADO | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-52 | heartbeat_rev_r16_*.json (99) + raws (12+lock) | 1,76 MB | NO CANDIDATO (evidencia) | — (excluir del depósito) |
| P-53 | scripts+logs depósito r15 (18) | 135 KB | CONSERVAR (patrón + registro) | — |
| P-54 | respaldo_pre_absorcion_r16/ (7+1) | 1,32 MB | CONSERVAR-TEMPORAL | Hasta FASE 4 r17 + FASE 2 r17; r18 |
| P-55 | scripts+logs depósito r16 (17) | 110 KB | CONSERVAR (patrón + registro) | — |
| P-56 | heartbeat_rev_r17_*.json (55) + raws (13+lock) | 776.863 B | NO CANDIDATO (evidencia) | — (excluir del depósito) |

Nada de lo anterior se ejecutó. La poda que se ejecute lo hará otro trabajo, con las frases de autorización dichas por el Jardinero. La regla REGLA-PODA-PROV-02 es canon adoptado (N-13, r15); REGLA-PODA-PROV-01 sigue siendo práctica documentada, no norma adoptada. La clase 3 ya no protege P-32 bajo la lectura estricta adoptada por FASE 2 r15 (CORR-P32-B-R15); su CONSERVAR se sostiene por D-07 + historia. **La condición 1 de retiro se cumple por primera vez en r17 (CORR-COND1-R17): las copias Drive de los temporales están re-verificadas por contenido; la puerta de retiro queda en 2 de 3 y el único bloqueo restante es la autorización (condición 3).**

ρ(x) > 0. Zvvvvv.
