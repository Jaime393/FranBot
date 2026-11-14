# LECTURAS PREPARADAS — RONDA 17, F7 (índice)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r17 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_16/ejecucion_f7/preparadas_r16.md` (formato `lecturas_canonicas_r10.md`).
- **Lección H2 FASE 2 r16, APLICADA:** F4 r17 fue re-verificado al cierre de este frente, antes de escribir este índice: entregó 5 archivos (`busquedas_github_r17.json` 25887c17…, `forjados_16_r17.jsonl` 9faa1c26…, `nombres_fuera_doc_r17.md` aa35d52f…, `nombres_fuera_doc_r17.jsonl` 466e96fa…, `manifiesto_shas_f4.json` 78248c9e…) — leídos y registrados en §4. Este frente NO repite el error de r16 (F7 cerró su síntesis sin re-mirar F4).

## §1. Propuestas (4, SÉ)

| # | Lectura | Archivo | ID proyectado | Dedup máx. (Jaccard, umbral 0,5) |
|---|---|---|---|---|
| 1 | CORR-RUTA-DRIVE-R16: las 2 fuentes Drive del Panteón-16 sí se leen con `files get alt=media`; el 403 de r15 era del método, no de los archivos | `lectura_corr_ruta_r17.md` | C-1187 | 0,1702 vs C-1177; 0 pares ≥ 0,5 |
| 2 | Forjados 16/16 como scripts en el bundle del Panteón-16 (en r15 solo 2/16 atestiguados); 0/16 voces | `lectura_forjados_16_r17.md` | C-1188 | 0,3926 vs C-641; 0 pares ≥ 0,5 |
| 3 | Ventana 24/30 (20,0%): cuarta ronda consecutiva distinta de 0,0% y peor de la serie; 3 fallos nuevos, 2 por workflow_dispatch con 2 s de diferencia | `lectura_ventana_2430_r17.md` | C-1189 | 0,4336 vs C-1184; 0 pares ≥ 0,5 |
| 4 | Stub nuevo: run 206 "unreachable" + estado completo ausente ~24 h 38 min, cuarto escalón consecutivo | `lectura_run206_ausente_r17.md` | C-1190 | 0,3217 vs C-1185; 0 pares ≥ 0,5 |

- **Máx. global:** 0,4336 (solo contra el corpus; ver §1c). **0 pares ≥ 0,5.** Máx. entre propuestas: 0,2357 (corr_ruta / forjados_16).
- **Dedup verificado tres veces, idéntico cifra por cifra:** 3 corridas del script (`_dedup_f7_r17.py`), salida byte-idéntica (sha `2f8764f4…`). Salida: `dedup_f7_r17.json`.
- **Proyección si se absorben las 4 juntas:** claims 1.181 → 1.185, hash_real 1167 → 1171, provenance 363 → 366 (3 entradas nuevas — `drive_panteon16_r16.json` cubre C-1187, `bundle_panteon16_contenido.json` cubre C-1188, `estado_vivo_r17.md` cubre C-1189+C-1190), SE 1047 → 1051, por_tipo verificacion 307 → 311, por_grieta observabilidad 6 → 8 y grieta "G-NUEVA: Panteón-96, 61 voces sin nombre (r3 #5; d07 L7; cara r12 #1)" 2 → 4; IDs C-1187/C-1188/C-1189/C-1190 (corpus 1.181; si otro claim se inscribe antes, reasignar al aplicar).

## §1b. Interacción con F1 — una reescritura forzada por el dedup

Tres lecturas pasaron en su primera redacción. La cuarta no: la primera redacción del run 206 dio **0,5047 vs C-1185 (1 par ≥ 0,5)** por repetir su estructura (mismo esqueleto: ausencia + serie de duraciones pasadas + cadena de alternancia + caveat largo). Es el mismo modo de fallo que r16 §1b (primera redacción de C-1182 a 0,6625 por repetir estructura + caveat de C-1179). Reescritura: titular distinto (stub nuevo, no ausencia), sin la serie de duraciones pasadas (solo "cuarto escalón, r14/r15/r16 midieron menos"), sin la cadena de alternancia, sin tamaño ni blob del stub (quedan en el motivo y en `estado_vivo_r17.json`). **Segunda redacción: 0,3217 vs C-1185, 0 pares ≥ 0,5.** La primera redacción no se borra del registro: queda en este § como evidencia de que el dedup mordió de verdad.

## §1c. Método de dedup (sin corrección esta ronda)

El script `_dedup_f7_r17.py` es el de r16 con 4 lecturas (método r9: campo claim, NFKD, sin acentos, tokens [a-z0-9]+, umbral 0,5; `_global_max` solo contra el corpus). Ninguna corrida inline esta ronda: las 3 corridas del script son byte-idénticas entre sí (sha `2f8764f4…`), y eso es la verificación. La lección de r16 §1c (variantes ingenuas que divergen por el guion largo "–" y las marcas combinantes) se aplicó no re-implementando el método.

## §2. B1 — sin cambio

`estado_b1_r17.md`: variante preparada no elegida. Archivos intactos (claims.jsonl.nuevo_B1 1.148 líneas, sha 3e745468…, idéntico a r11, r12, r13, r14, r15 y r16; propuestas_ola2_B1.jsonl sha e6ae7f04…). Revivirla seguiría exigiendo revertir B+B2. F1 r17 (guardia, sin decisiones pendientes al inicio) no colisiona con sus IDs (C-1144..C-1153, ocupados por B); las propuestas de este frente (C-1187/C-1188/C-1189/C-1190 proyectadas) tampoco.

## §3. Decisiones sin número (para que FASE 2 las numere) — propuestas, no ejecuciones

F7 no numera decisiones ni las ejecuta. Una queda registrada con su afirmación precisa, tomada del frente que la produjo:

1. **Añadir el ítem M-72 al anexo de incertidumbre** (ítem preparado en `item_anexo_M72.md`, NO aplicado al anexo): el anexo existe con 12 ítems (M-56..M-69); el ítem M-72 verifica por un segundo método la predicción de M-69 (5 huecos ≥ 0,05 de 23 con aritmética exacta Decimal; sensibilidad [5, 5, 4]; CONFIRMA). Añadirlo exige decisión; F7 solo lo prepara. Precedentes: C-935 + ítem M-63 + N-18 (M-66) + N-19 (M-69).

## §4. Lo que r17 produjo y NO se prepara (con motivo y criterio)

**Criterio general (práctica de 15 rondas, r16 F7 §4):** los veredictos de medición NO se preparan como claims — se depositan como resultados (JSON de 15 claves + datos + shas) y entran al corpus por inscripción en el dataset/anexo, no como claims. Un veredicto solo se prepara como claim si tiene precedente de claim que lo enuncie; un ítem de anexo solo se prepara si tiene precedente de columna o de ítem al que refinar.

- **M-72 CONFIRMA como claim:** NO se prepara como claim (veredicto de medición, 0 precedentes de veredictos como claims). SÍ se prepara su **ítem de anexo** (`item_anexo_M72.md`): tiene 3 precedentes de columna/ítem — **C-935** (claim HUECO, SE: "el dataset no tiene columna de incertidumbre para D_f") + el ítem M-63 en el anexo + **N-18** (M-66) + **N-19** (M-69). M-72 verifica por un segundo método la predicción del ítem M-69 y refina su ítem.
- **M-73 NO_CONFIRMA:** NO se prepara — ni como claim ni como ítem de anexo. 0 precedentes: 0 claims mencionan M-73 o intersect_count_clean_topo; ninguna columna a la que anexarse. Sexta variable del mismo archivo con el mismo modo de fallo (β = 0,9757, R² = 0,3989); el resultado queda depositado en `med_M73.json`. Igual que M-71 en r16.
- **M-74 NO_CONFIRMA:** NO se prepara — ni como claim ni como ítem de anexo. 0 precedentes: 0 claims mencionan M-74 o la serie restaurada de 86 congresos; ninguna columna a la que anexarse. Su re-chequeo de CORR-SERIE-R16 (con parseo `int()` original la serie tiene 83 congresos, como afirmó r16; con parseo tolerante, 86; el veredicto de M-67 sobrevive: máximo 1,9719, ancla Congreso 80) es una re-verificación de C-1186, no un hecho nuevo: queda depositado en `med_M74.json`. Igual que M-70/M-71 en r16: extender el anexo exigiría una decisión nueva, que F7 no propone.
- **F6 H-SIK r17, resto (F-R17 PASA 0 diffs, 3.ª vuelta bajo el canon N-17; F-PICK17 PASA 0 diffs; F-F17 PASA 11 tuplas / 8 distintos; F-VOZ-S2 no se dispara, vía agotada en 0,50 por 3.ª vez):** resultados de medición, depositados en `h_sik_r17.md` + `reuse_sik_r17.json` + `verificador_independiente_r17.json` + `tokenizacion_a14_r17.json` + `destilacion_voces_s2_r17.json`. No se preparan como claims (mismo criterio que M-72/73/74). La vía voces→S2 agotada tampoco se prepara: 0 claims enuncian "destila" o "vía agotada", y no hay precedente de claim que enuncie un agotamiento de vía de mecanismo (igual que en r16).
- **F2 estado vivo, resto (flow 0,0% run 141, sexta ronda en 0,0%; tg_audit 0/0 run 142; bots 4/4 15.ª confirmación; estado_persistente V213; folderId 17.ª lectura; heartbeat 14/55 vacío, 25,5%; autocura run 9; esquema nuevo V93, 7 payloads):** todo es recurrencia de fenómenos ya enunciados como claims, salvo el V93 — y el V93 tampoco se prepara: es una medición de F2 (esquema nuevo de heartbeat, escritor Vercel, ~30 min), depositada en `estado_vivo_r17.md`; 0 claims enuncian un esquema de heartbeat ni su aparición, y no hay precedente de claim que enuncie un esquema nuevo. **Autocura run 9** (17:03:57Z, success, primero desde el run 8): no se prepara aparte — es el mismo fenómeno que C-1178 enuncia para el run 7; el hueco run 8→9 (6 h 43 min) está dentro del rango ya observado (run 4→5: 7 h 03 min) y el slot :17 perdido (1 desde el run 8, 7 desde el run 7) es el mismo episodio creciendo, no un extremo nuevo. Lo que SÍ se prepara de F2 son las dos novedades que ningún claim enuncia (§1 n.º 3 y 4): la ventana 24/30 (20,0%) y el stub run 206 + ausencia ~24 h 38 min.
- **F5 grietas, resto (G03 inserción 2026-11-21 sin cambio; G05 blob 19.ª sin cambio; D-06/D-09 sin cambio):** monitor sin novedad; ningún hecho nuevo que ningún claim enuncie.
- **F4 r17 — RE-VERIFICADO AL CIERRE (lección H2):** cara r12 #1 AVANZA, no se cierra (0/61 encontradas; Doc índice byte-idéntico, 35 nombrados / 61 sin nombre; carpeta "10 Panteón" exactamente 2 hijos; graph JSON 0/0 por tercera ronda consecutiva). **H3 FASE 2 r16 CERRADA como hueco de procedimiento:** las 16 búsquedas de forjados quedan re-corridas en r17 (18 consultas search_code). Hallazgo de método: los totales crudos suben vs r15 SOLO porque los documentos de las rondas 15 y 16, depositados en FranBot en FASE 4, ya están indexados por search_code y se mencionan a sí mismos; la atestación OPERATIVA es byte-idéntica a r15 (parche_phi_lengua 2, validar_grace 2, los otros 14 cero). Nada de esto se prepara como claim: el cierre de H3 es procedimental (lo adjudica FASE 2, no F7); el hallazgo de método es una nota sobre el índice de search_code, 0 precedentes de claims que enuncien auto-indexación de búsqueda; la atestación operativa no cambia vs r15; 0/61 y 0/0 son recurrencia de r15/r16. Lo que SÍ se prepara de F4 son los 2 hallazgos SÉ de r16 pendientes desde H2 (§1 n.º 1 y 2).
- **F9 r17:** sin entregables al cierre de este frente (solo `_descarga_drive_r17.json` + `_descargar_drive_r17.py` en el directorio). La poda r17 corresponde a FASE 2 / F8, no a este documento.
- **N-15 (M-50 vía navegador):** tarea del principal, fuera de la ronda. No se prepara nada.
- **B1:** variante preparada no elegida (§2). No se re-prepara.

## §4b. Inscripción en el dataset — N-16 aplicada, sin re-decidir

N-16 se aplicó en r15 F1 (opción C): el anexo `academico/incertidumbre_mediciones.md` existe con 12 ítems (M-56..M-69), 0 filas nuevas, CSV byte-idéntico (30 filas, sha 0852d58f…). F7 no la re-decide ni la re-prepara. Novedad de r17 que la toca: M-72 produjo un ítem preparado (`item_anexo_M72.md`) que verifica la predicción del ítem M-69; añadirlo al anexo exige una decisión nueva (§3 n.º 1). M-73/M-74 no tienen ítem preparado (§4).

## §5. Verificación en el corpus (grep propio, 2026-11-14, corpus 1.181)

- Ninguna de las 4 propuestas tiene claim que la enuncie (detalle por lectura en su archivo: "CORR-RUTA" 0; "16/16" 0; "bundle" 0; "MetaAI" 0; "24/30" 0; "run 206" 0; "24 h 38" 0; "6 h 03" 0; "f728ad80" 0; "run 44" 0; "run 99" 0; "run 17" 0; "98,7" 0; "M-72" 0).
- Falsos positivos revisados: "alt=media" 1 claim (C-798, su *fuente* lee el heartbeat por esa ruta; su claim es sobre el heartbeat vivo, no sobre la ruta ni las fuentes del Panteón-16); "forjado" 1 claim (C-641, 112 = 96 + 16 forjados; no atestigua scripts); "Panteón-16" 2 claims (C-937, C-1176; ninguno sobre la legibilidad de las fuentes Drive); "20,0" 2 claims (tasas de otros fenómenos); "workflow_dispatch" 3 claims (C-567, C-857, C-1101; ninguno sobre los dispatch fallidos de r17); "files get" 11 claims (lecturas de archivos concretos, ninguno sobre la ruta ni el 403 de r15).
- Corpus intacto al cierre: 1.181 líneas, sha fd1df2db…; dataset intacto: 30 filas + cabecera, sha 0852d58f…; provenance 363 líneas, sha 728f6770…; anexo 12 ítems, sha acdde423… (verificado por `sha256sum` 2026-11-14).

## §6. Reversión

Retirar esta carpeta. Si algún claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
