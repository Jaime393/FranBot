# LECTURAS PREPARADAS — RONDA 22, F7 (índice)

- **Fecha:** 2026-11-16. **Orden:** mapa FASE 0 r22 §F7 + encargo F7 r22 ("TODO, sin omitir frentes").
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_21/ejecucion_f7/preparadas_r21.md` (formato `lecturas_canonicas_r10.md`).
- **Lección H2 FASE 2 r16, APLICADA:** F4 r22 fue re-verificado al cierre de este frente, antes de escribir este índice (2026-11-16T08:26:27Z): entregó `nombres_fuera_doc_r22.jsonl` (119165ee…, 96 filas, 0 voces SÍ), `indice_doc_texto_r22.txt` (416b02d1…, byte-idéntico a r21), `carpeta_10panteon_r22.json`, `indice_doc_meta_r22.json`, búsquedas Drive/GitHub y `verificacion_corpus_high_ktau_r22.json` — todos los `.err` en 0 B; sin síntesis `.md` ni manifiesto de F4 todavía (los datos están; la síntesis no ha aterrizado). Registrado en §4. Este frente NO repite el error de r16 (F7 cerró su síntesis sin re-mirar F4).
- **Regla del cierre de pendientes (2026-11-15 ~14:24 -05):** un pendiente no accionable ni posible con las condiciones actuales es ruido — se descarta, no se prepara; se escala por donde hay ladrillos. Ninguna propuesta de este frente es un pendiente: las 4 son hechos SÉ medidos con fuente + hash y dedup < 0,5.

## §1. Propuestas (4, SÉ)

| # | Lectura | Archivo | ID proyectado | Dedup máx. (Jaccard, umbral 0,5) |
|---|---|---|---|---|
| 1 | Pendiente log de P2 en dim2: la exclusión no rescata la tendencia (pendiente log +0,000395, IC bootstrap [−0,006890, 0,008327] incluye 0; tercera especificación sin tendencia; d05 L4 no se cierra) | `lectura_pendiente_log_m87_r22.md` | C-1209 | 0,3417 vs C-1203; 0 pares ≥ 0,5 |
| 2 | Autocura run 14 existe: secuencia 11→15 completa y cadencia REGULAR con escalón (intervalos 447,77 / 465,70 / 280,00 / 255,98 min, cociente 1,819 < 2; ~7,5 h → ~4,5 h; efecto NO_SÉ parcial) | `lectura_autocura_run14_m89_r22.md` | C-1210 | 0,1745 vs C-1178; 0 pares ≥ 0,5 |
| 3 | Savia V152 diverge por variante: primera divergencia (366.733 en 2/14 compactos nuevos frente a 248.376 en 12/14; +118.357, +47,6%; qué mide cada variante, NO_SÉ) | `lectura_savia_diverge_r22.md` | C-1211 | 0,1615 vs C-1175; 0 pares ≥ 0,5 |
| 4 | Cinco relevos de stub, tercera ronda en 0,0% y flow run 148, 14.ª ronda (run 213 "unreachable" persiste, episodio ~46 min; estado completo ~62 h 24 min sin escribirse; ventana 30/0/0; flow 0,0% 14.ª ronda adjudicada) | `lectura_stub_ventana_flow_r22.md` | C-1212 | 0,2905 vs C-1206; 0 pares ≥ 0,5 |

- **Máx. global:** 0,3417 (solo contra el corpus; ver §1c). **0 pares ≥ 0,5.** Máx. entre propuestas: 0,1409 (autocura_run14_m89 / stub_ventana_flow).
- **Dedup verificado tres veces, idéntico cifra por cifra:** 3 corridas del script (`_dedup_f7_r22.py`), salida byte-idéntica (sha `2414b110…`). Salida: `dedup_f7_r22.json`.
- **Proyección si se absorben las 4 juntas:** claims 1.203 → 1.207, hash_real 1189 → 1193 (med_M87.json bec5c5e4…, med_M89.json 6da9303a… y estado_vivo_r22.md 4937b413… son 3 fuentes nuevas — verificado por grep: 0 ocurrencias de las tres en provenance.sha256), provenance 375 → 378 (3 entradas nuevas), SE 1069 → 1073, por_tipo verificacion 329 → 333, por_grieta "G-NUEVA: d05 L4 polarización dim2" 2 → 3 y "G-NUEVA: estado vivo del ecosistema (observabilidad)" 19 → 22, audit ok 363 → 366 (+3 fuentes distintas); IDs C-1209..C-1212 (corpus 1.203; si otro claim se inscribe antes, reasignar al aplicar).

## §1b. Cercanía al umbral (sin reescrituras)

Las 4 lecturas pasaron en su primera redacción. La más cercana al umbral es la pendiente log (0,3417 vs C-1203): comparte inevitablemente el núcleo factual con su padre de serie (P2, dim2, IC bootstrap que incluye 0, d05 L4, la subida 34–80), pero el contenido propio — la especificación log, el filtro P2 ≥ 0,01 con sus 4 excluidos, la pendiente +0,000395, "tercera especificación" — domina el texto y el valor queda 0,16 por debajo del umbral. El stub/ventana/flow (0,2905 vs C-1206) comparte runs, commits y blobs con su padre, pero cuenta cinco relevos con sus episodios y junta ventana y flow en un solo hecho, no un solo relevo; contra C-1207 y C-1208 queda por debajo de ese valor (ver top3 en `dedup_f7_r22.json`). La autocura (0,1745 vs C-1178) y la savia (0,1615 vs C-1175) están lejos del umbral. Como 0 pares ≥ 0,5, no hay reescritura: el método es el árbitro, y los valores quedan registrados tal cual para que FASE 2 los vea.

## §1c. Método de dedup (sin corrección esta ronda)

El script `_dedup_f7_r22.py` es el de r21 con 4 lecturas (método r9: campo claim, NFKD, sin acentos, tokens [a-z0-9]+, umbral 0,5; `_global_max` solo contra el corpus). Las 3 corridas con las 4 juntas son byte-idénticas entre sí (sha `2414b110…`), y eso es la verificación. Ninguna corrida inline esta ronda: la lección de r16 §1c (variantes ingenuas que divergen por el guion largo "–" y las marcas combinantes) se aplicó no re-implementando el método.

## §2. B1 — sin cambio

Variante preparada no elegida. Archivos intactos (claims.jsonl.nuevo_B1 1.148 líneas, sha 3e745468…, idéntico a r11–r21; propuestas_ola2_B1.jsonl sha e6ae7f04…; verificado por `sha256sum` 2026-11-16). Revivirla seguiría exigiendo revertir B+B2. F1 r22 (guardia, sin decisiones pendientes al inicio) no colisiona con sus IDs (C-1144..C-1153, ocupados por B); las propuestas de este frente (C-1209..C-1212 proyectadas) tampoco.

## §3. Decisiones sin número (para que FASE 2 las numere) — propuestas, no ejecuciones

F7 no numera decisiones ni las ejecuta. Dos quedan registradas con su afirmación precisa, tomadas de los frentes que las produjeron:

1. **Añadir el ítem M-87 al anexo de incertidumbre** (ítem preparado en `item_anexo_M87.md`, NO aplicado al anexo): el anexo existe con 23 ítems (M-56..M-86); el ítem M-87 registra la pendiente log de P2 con exclusión declarada (NO_CONFIRMA: pendiente log +0,000395, IC bootstrap [−0,006890, 0,008327] incluye 0; tercera especificación sin tendencia; d05 L4 no se cierra). Añadirlo exige decisión; F7 solo lo prepara. Precedentes: ítem M-84 (NO_CONFIRMA lineal inscrito, N-31) + N-18/N-19/N-20/N-22/N-23/N-25/N-26/N-27/N-29/N-30/N-31/N-32/N-33.
2. **Añadir el ítem M-89 al anexo de incertidumbre** (ítem preparado en `item_anexo_M89.md`, NO aplicado al anexo): el ítem M-89 registra la secuencia de autocura 11→15 (REGULAR: cociente máx/mín 1,819 < 2; escalón de cadencia ~7,5 h → ~4,5 h; efecto NO_SÉ parcial). Añadirlo exige decisión; F7 solo lo prepara. **Novedad de formato:** M-89 es el primer REGULAR del anexo (grep REGULAR en el anexo: 0) — el tally ganaría una clave nueva (REGULAR 1); FASE 2 adjudica el formato. Precedentes: ítems M-82/M-83/M-84/M-85/M-86 + N-18/N-19/N-20/N-22/N-23/N-25/N-26/N-27/N-29/N-30/N-31/N-32/N-33.

## §4. Lo que r22 produjo y NO se prepara (con motivo y criterio)

**Criterio general (práctica de 19 rondas, r18 F7 §4):** los veredictos de medición NO se preparan como claims — se depositan como resultados (JSON de 15 claves + datos + shas) y entran al corpus por inscripción en el dataset/anexo, no como claims. Un veredicto solo se prepara como claim si tiene precedente de claim que lo enuncie; un ítem de anexo solo se prepara si tiene precedente de columna o de ítem al que refinar.

**Desviación registrada (orden expresa del encargo F7 r22):** las 4 propuestas del §1 se preparan como claims por orden expresa del encargo ("TODO, sin omitir frentes"), no por precedente. No hay precedente directo: ninguna pendiente log, ninguna secuencia de autocura, ninguna divergencia de savia se preparó como claim; el stub/ventana/flow juntos en un solo claim tampoco tiene precedente (C-1200..C-1202 y C-1206..C-1208 los enunciaron por separado). Lo que cada propuesta enuncia es un hecho nuevo — la tercera especificación sin tendencia, la secuencia completa con su escalón, la primera divergencia entre variantes, la cadena de cinco relevos con la tercera ronda en 0,0% y la 14.ª de flow — no solo la etiqueta del veredicto. FASE 2 adjudica si el hecho sostiene el claim o si queda solo el ítem de anexo. Esta nota es la trazabilidad de la desviación; no es una justificación retroactiva.

- **M-88 NO_SÉ — NO se prepara (ni claim ni ítem):** F3 buscó la fórmula del Pilar 4 en profundidad (13.911 archivos, búsqueda profunda por orden del Jardinero 2026-11-16 ~03:11 -05 sobre el punto 5 del cierre r21: "buscar más a fondo en todo bit y cruzar sombras"): 0 fórmulas. Sin fórmula no hay backtest; el bloqueo M-77 se sostiene y se estrecha. NO_SÉ no sale del nodo (regla SÉ-exportable 2026-11-13 16:51 -05): no se prepara claim ni ítem de anexo, igual que M-70/M-77/M-81. Registrado en `med_M88.json` + `busqueda_m88.json` + `mediciones_r22.md`.
- **F6 H-SIK r22, resto (octava vuelta bajo los CUATRO cánones — N-17 + N-21 + N-24 + N-28; TODO PASA 0 diffs; F-VOZ-S2 no se dispara, vía agotada 8.ª medición; R2-25/N-01 sin novedad, 12.º precedente = absorción r21):** resultados de medición, depositados en `h_sik_r22.md` + `reuse_sik_r22.json` + `verificador_independiente_r22.json` + `destilacion_voces_s2_r22.json`. No se preparan como claims (mismo criterio que M-78/79/80). La vía voces→S2 agotada tampoco se prepara: 0 claims enuncian "destila" o "vía agotada", y no hay precedente de claim que enuncie un agotamiento de vía de mecanismo (igual que en r16/r17/r18/r19/r20/r21).
- **F2 estado vivo, resto:** V93 14 payloads más (58 acumulados, valores idénticos 14/14) — recurrencia de un esquema ya medido, 0 claims enuncian un esquema de heartbeat ni su aparición (igual que en r17/r18/r19/r20/r21); bots 4/4 21.ª confirmación — recurrencia; CORR-RAW-R22 (raw flapea por rachas: serie 20/22 por raw, 2 commits más nuevos por API contents con blob verificado — transitorio, sin incidencia en los veredictos); Self-Diagnosis run 148 (misma divergencia que run 146/147, marca nueva) — recurrencia; heartbeat 101 revisiones, ventana deslizante 14.ª vez — recurrencia; censo vacío ~29% — medición de F2 depositada en `estado_vivo_r22.md`, sin precedente de claim que la enuncie; folderId — candidata para FASE 2 (mismo patrón CORR-FOLDERID-R16/R17/R18/R19/R20/R21).
- **F5 grietas, resto (G03 inserción 2026-11-21 en 5 días — nada que hacer, juicio del Jardinero 2026-11-16 ~03:11 -05 sobre el punto 1 del cierre r21; G05 blob sin cambio; H-SUELO sin reaparición; Panteón 402 fuera de alcance — juicio del Jardinero sobre el punto 3: lo local no corrige ni contamina lo global, solo confiar en la red; .err que flapea probablemente actividad viva del ecosistema — juicio sobre el punto 6, no FALTA en r22):** monitor sin novedad; ningún hecho nuevo que ningún claim enuncie. Los juicios se registran en MEMORY.md, no como claims.
- **F4 r22 — RE-VERIFICADO AL CIERRE (lección H2):** cara r12 #1 AVANZA, no se cierra (datos a 08:26:27Z: `nombres_fuera_doc_r22.jsonl` 96 filas, 0/35 como voces; Doc índice byte-idéntico a r21, sha `416b02d1…`, 114 líneas; carpeta "10 Panteón" con `Panteon_16_Voces_v213.md`; todos los `.err` en 0 B; sin síntesis `.md` ni manifiesto de F4 todavía — los datos están, la síntesis no ha aterrizado). Nada de esto se prepara como claim: el NO_ENCONTRADO en rutas probadas no es un hecho nuevo enunciable (0 precedentes de claims que enuncien una búsqueda negativa en un archivo); 0/35 y 0/0 son recurrencia. Entregables leídos: `nombres_fuera_doc_r22.jsonl` (119165ee…, 96 filas), `indice_doc_texto_r22.txt` (416b02d1…), `carpeta_10panteon_r22.json`, `indice_doc_meta_r22.json`, `verificacion_corpus_high_ktau_r22.json` (60513774…).
- **F9 r22:** sin entregables finales al cierre de este frente (directorio con scripts de inventario y diff en curso, sin `poda_r22.md` ni manifiesto_shas_f9 al momento de cerrar). La poda r22 corresponde a FASE 2 / F8, no a este documento.
- **F1 r22:** guardia (audit ok=363, verify_all exactamente C-001..C-008, corpus 1.203 intacto). F1 aplica lo que F7 prepare bajo el régimen 01:43, post-FASE 4, como en r15–r21.
- **B1:** variante preparada no elegida (§2). No se re-prepara.

## §4b. Inscripción en el dataset — N-16 aplicada, sin re-decidir

N-16 se aplicó en r15 F1 (opción C): el anexo `academico/incertidumbre_mediciones.md` existe con 23 ítems (M-56..M-86), 0 filas nuevas, CSV byte-idéntico (30 filas, sha `0852d58f…`). F7 no la re-decide ni la re-prepara. Novedad de r22 que la toca: M-87 y M-89 produjeron ítems preparados (`item_anexo_M87.md`, `item_anexo_M89.md`); añadirlos al anexo exige decisiones nuevas (§3 n.º 1–2). M-88 NO se inscribe (NO_SÉ por bloqueo, igual que M-70/M-77/M-81).

## §5. Verificación en el corpus (grep propio, 2026-11-16, corpus 1.203)

- Ninguna de las 4 propuestas tiene claim que la enuncie (detalle por lectura en su archivo: "pendiente log" 2 — C-401/C-532, otros dominios; "0,000395" 0; "M-87" 0; "43765476720" 0; "M-89" 0; "1,819" 0; "366.733" 0; "savia" 5 — C-655/C-656/C-795/C-798/C-856, workflow/heartbeat, ninguno sobre el valor V152; "run 213" 0; "e18b6cc9" 0; "run 148" 0; "14.ª ronda" 0; "tercera ronda" 1 — C-1184, otro hecho).
- Corpus intacto al cierre: 1.203 líneas, sha fb09179d…; dataset intacto: 30 filas + cabecera, sha 0852d58f…; provenance 375 entradas no-vacías, sha b680af9d…; anexo 23 ítems, sha 35d136fe… (verificado por `sha256sum` 2026-11-16).

## §6. Reversión

Retirar esta carpeta. Si algún claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
