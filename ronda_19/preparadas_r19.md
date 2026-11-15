# LECTURAS PREPARADAS — RONDA 19, F7 (índice)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r19 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_18/ejecucion_f7/preparadas_r18.md` (formato `lecturas_canonicas_r10.md`).
- **Lección H2 FASE 2 r16, APLICADA:** F4 r19 fue re-verificado al cierre de este frente, antes de escribir este índice: entregó 3 archivos (`nombres_fuera_doc_r19.md` f7c3e03c…, `nombres_fuera_doc_r19.jsonl` 98c67f44…, `manifiesto_shas_f4_r19.json` 017550e7… — leídos y registrados en §4). Este frente NO repite el error de r16 (F7 cerró su síntesis sin re-mirar F4).

## §1. Propuestas (3, SÉ)

| # | Lectura | Archivo | ID proyectado | Dedup máx. (Jaccard, umbral 0,5) |
|---|---|---|---|---|
| 1 | REGLA-PART-SIK-01 especificada y verificada (partidor corregido; 11 tuplas / 8 distintos, 0 diffs en el alcance de fórmulas) | `lectura_regla_part_sik_r19.md` | C-1195 | 0,3889 vs C-1191; 0 pares ≥ 0,5 |
| 2 | Ventana 26/1/3 (3,3%): tercer descenso consecutivo; único fallo bot-audit run 40, arrastrado | `lectura_ventana_2613_r19.md` | C-1196 | 0,3651 vs C-1192; 0 pares ≥ 0,5 |
| 3 | Run 207 persiste sin relevo: sin run 208, ausencia ~29 h 37 min; Self-Diagnosis run 143 escribe HEAD ff2f16f8 | `lectura_run207_persiste_r19.md` | C-1197 | 0,3475 vs C-1193; 0 pares ≥ 0,5 |

- **Máx. global:** 0,3889 (solo contra el corpus; ver §1c). **0 pares ≥ 0,5.** Máx. entre propuestas: 0,1569 (regla_part_sik / ventana_2613).
- **Dedup verificado tres veces, idéntico cifra por cifra:** 3 corridas del script (`_dedup_f7_r19.py`), salida byte-idéntica (sha `e22bf8f8…`). Salida: `dedup_f7_r19.json`.
- **Proyección si se absorben las 3 juntas:** claims 1.189 → 1.192, hash_real 1175 → 1178, provenance 366 → 367 (2 entradas nuevas — `especificacion_partidor_r19.md` cubre C-1195, `estado_vivo_r19.md` cubre C-1196+C-1197), SE 1055 → 1058, por_tipo verificacion 315 → 318, por_grieta observabilidad 8 → 10 y grieta "G-NUEVA: retejido_2026-11-12 no integrado en anexo-vi" 20 → 21, audit ok 354 → 356 (+2 fuentes distintas); IDs C-1195/C-1196/C-1197 (corpus 1.189; si otro claim se inscribe antes, reasignar al aplicar).

## §1b. Cercanía al umbral (sin reescritura)

Las 3 lecturas pasaron en su primera redacción. La más cercana al umbral es el partidor (0,3889 vs C-1191): las lecturas de especificación comparten inevitablemente vocabulario de canon (especificada, verificada, texto literal, verificador independiente, 0 diferencias, decisión de FASE 2, patrón N-17), y esta redacción ya aplica la lección de r17/r18 §1b (titular de especificación, no de adopción; el contenido propio — partidor, tuplas, xinablalnrho — domina el texto). Como 0 pares ≥ 0,5, no hay reescritura: el método es el árbitro, y el valor queda registrado tal cual para que FASE 2 lo vea. La ventana (0,3651 vs C-1192) y el run 207 (0,3475 vs C-1193) también aplican la lección r17 (titular de régimen — tercer descenso, persistencia —, sin la serie completa de tasas ni de duraciones pasadas, solo el rango r18–r19).

## §1c. Método de dedup (sin corrección esta ronda)

El script `_dedup_f7_r19.py` es el de r18 con 3 lecturas (método r9: campo claim, NFKD, sin acentos, tokens [a-z0-9]+, umbral 0,5; `_global_max` solo contra el corpus). Ninguna corrida inline esta ronda: las 3 corridas del script son byte-idénticas entre sí (sha `e22bf8f8…`), y eso es la verificación. La lección de r16 §1c (variantes ingenuas que divergen por el guion largo "–" y las marcas combinantes) se aplicó no re-implementando el método.

## §2. B1 — sin cambio

`estado_b1_r19.md`: variante preparada no elegida. Archivos intactos (claims.jsonl.nuevo_B1 1.148 líneas, sha 3e745468…, idéntico a r11, r12, r13, r14, r15, r16, r17 y r18; propuestas_ola2_B1.jsonl sha e6ae7f04…). Revivirla seguiría exigiendo revertir B+B2. F1 r19 (guardia, sin decisiones pendientes al inicio) no colisiona con sus IDs (C-1144..C-1153, ocupados por B); las propuestas de este frente (C-1195/C-1196/C-1197 proyectadas) tampoco.

## §3. Decisiones sin número (para que FASE 2 las numere) — propuestas, no ejecuciones

F7 no numera decisiones ni las ejecuta. Cuatro quedan registradas con su afirmación precisa, tomadas de los frentes que las produjeron:

1. **Adoptar el partidor corregido de fórmulas como canon SIK** (especificación en `especificacion_partidor_r19.md`, claim preparado C-1195): afirmación precisa propuesta — "Adopto el partidor corregido de fórmulas para las mediciones SIK: se parte en `[.;\n\"]+` sin `|`, se conserva el segmento solo si contiene `=` o `≥` o `∝` en crudo, se normaliza como la tokenización y se conserva el fragmento solo si su longitud es ≥ 6." Autoriza que las mediciones SIK futuras usen el partidor corregido como método canónico; F-F queda resuelto por regla (11 tuplas / 8 distintos). Patrón N-17 (C-1181 → N-17) y N-21 (C-1191 → N-21). Si no se adopta, la regla sigue especificada como método sin canon (como en r14–r19).
2. **Añadir el ítem M-78 al anexo de incertidumbre** (ítem preparado en `item_anexo_M78.md`, NO aplicado al anexo): el anexo existe con 15 ítems (M-56..M-76); el ítem M-78 registra la segunda CONFIRMA formal de la línea d05 L4 (dim2 con filtro de ancla P2 ≥ 0,01, cociente 50,1351, IC [38,02, 95,35]) y que el umbral >2 no discrimina en dim2. Añadirlo exige decisión; F7 solo lo prepara. Precedentes: ítems M-61/M-64 (polarización dim1) + M-75 (dim2 sin filtro) + N-19 (M-69) + N-20 (M-72) + N-22 (M-75).
3. **Añadir el ítem M-79 al anexo de incertidumbre** (ítem preparado en `item_anexo_M79.md`, NO aplicado al anexo): el ítem M-79 registra el censo de R² de las 32 variables (0 por encima de 0,8; máximo area_km2 0,7490; el muro es sistemático). Añadirlo exige decisión; F7 solo lo prepara. Precedentes: ítems M-57/M-65 (escalamiento urbano) + M-76 (primera β en banda) + N-19 (M-69) + N-20 (M-72) + N-23 (M-76).
4. **Añadir el ítem M-80 al anexo de incertidumbre** (ítem preparado en `item_anexo_M80.md`, NO aplicado al anexo): el ítem M-80 registra el respaldo publicado de u = 0,05 para la clase 1-D (Górski et al. 2012, Tabla 1: ±0,020 a n = 1.000), con alcance acotado (2-D con n_tot ~1.000 da ±0,060; W-M 2-D ±0,100..±0,200). Es seguimiento de una cara cerrada (d04 L13, r15), no reapertura. Añadirlo exige decisión; F7 solo lo prepara. Precedentes: ítems M-59/M-60/M-62/M-63/M-66/M-69/M-72 (columna u) + N-18 (M-66) + N-19 (M-69) + N-20 (M-72).

## §4. Lo que r19 produjo y NO se prepara (con motivo y criterio)

**Criterio general (práctica de 17 rondas, r18 F7 §4):** los veredictos de medición NO se preparan como claims — se depositan como resultados (JSON de 15 claves + datos + shas) y entran al corpus por inscripción en el dataset/anexo, no como claims. Un veredicto solo se prepara como claim si tiene precedente de claim que lo enuncie; un ítem de anexo solo se prepara si tiene precedente de columna o de ítem al que refinar.

- **M-78 CONFIRMA como claim:** NO se prepara como claim (veredicto de medición, 0 precedentes de veredictos como claims). SÍ se prepara su **ítem de anexo** (`item_anexo_M78.md`): refina la línea de polarización con ítems en el anexo (M-61/M-64, dim1, y M-75, dim2 sin filtro) — segunda CONFIRMA formal de d05 L4; el umbral >2 no discrimina en dim2. La cara d05 L4 NO se cierra.
- **M-79 CONFIRMA como claim:** NO se prepara como claim (veredicto de medición, 0 precedentes). SÍ se prepara su **ítem de anexo** (`item_anexo_M79.md`): refina la línea de escalamiento urbano con ítems en el anexo (M-57/M-65, M-76) — censo de las 32 variables, muro sistemático. Distinción vs M-71/M-73 (sin ítem): M-71 y M-73 repetían el mismo modo de fallo en ambas piernas; M-79 censa TODAS las variables y responde a la aislación de M-76. La cara d05 L7 NO se cierra.
- **M-80 CONFIRMA como claim:** NO se prepara como claim (veredicto de medición, 0 precedentes). SÍ se prepara su **ítem de anexo** (`item_anexo_M80.md`): refina la línea de la columna u con ítems en el anexo (M-59/M-60/M-62/M-63/M-66/M-69/M-72) — respaldo publicado de u = 0,05 para la clase 1-D. Es seguimiento de una cara cerrada (d04 L13), no reapertura; F8 lo cuenta solo porque se ejecuta con producto (CORR-MAPA-R18).
- **F6 H-SIK r19, resto (F-TOK19 PASA, canon N-21 en su primera vuelta con 0 diffs; F-R19 PASA 0 diffs, 5.ª vuelta; F-PICK19 PASA 0 diffs; F-F19 PASA 11/8; F-A19 PASA 0,8000/27; F-VOZ-S2 no se dispara, vía agotada en 0,50 por 5.ª vez; N-01 9.º precedente = absorción r18):** resultados de medición, depositados en `h_sik_r19.md` + `reuse_sik_r19.json` + `verificador_independiente_r19.json` + `tokenizacion_a14_r19.json` + `destilacion_voces_s2_r19.json`. No se preparan como claims (mismo criterio que M-78/79/80). La vía voces→S2 agotada tampoco se prepara: 0 claims enuncian "destila" o "vía agotada", y no hay precedente de claim que enuncie un agotamiento de vía de mecanismo (igual que en r16/r17/r18). Lo que SÍ se prepara de F6 es la especificación de REGLA-PART-SIK-01 (§1 n.º 1): tiene precedente directo (C-1181 → N-17, C-1191 → N-21) y el verificador la reproduce con 0 diffs en el alcance de fórmulas.
- **F2 estado vivo, resto (flow 0,0% run 142, novena ronda en 0,0%; tg_audit 0/0 run 143; bots 4/4 18.ª confirmación; estado_persistente V213; folderId 24.ª lectura en F5 / 24.ª en F2 — ver CORR-FOLDERID-R19 en §4b; heartbeat 6/28 vacío, 21,4%; autocura sin run 11; V93 persiste, 4 payloads más, 17 acumulados; CORR-RAW-R19):** todo es recurrencia de fenómenos ya enunciados como claims, salvo el V93 — y el V93 tampoco se prepara: es una medición de F2 (esquema de heartbeat, escritor Vercel, ~30 min), depositada en `estado_vivo_r19.md`; 0 claims enuncian un esquema de heartbeat ni su aparición, y no hay precedente de claim que enuncie un esquema nuevo (igual que en r17/r18). **Autocura sin run 11** (último run 10, 21:27:27Z; 2 slots :17 perdidos desde el run 10, 16 desde el run 7): no se prepara aparte — es el mismo fenómeno que C-1178 enuncia para el run 7; el hueco crece dentro del rango ya observado. **Self-Diagnosis run 143** no se prepara como claim propio: 0 precedentes de claims que enuncien un run aislado de Self-Diagnosis; se registra como dato secundario dentro de la lectura run207 (§1 n.º 3), porque explica el HEAD nuevo ff2f16f8. Lo que SÍ se prepara de F2 son las dos novedades que ningún claim enuncia (§1 n.º 2 y 3): la ventana 26/1/3 (3,3%, tercer descenso) y el run 207 que persiste sin relevo.
- **F5 grietas, resto (G03 inserción 2026-11-21 sin cambio, 7 días; G05 blob 24.ª sin cambio; H-SUELO 25.ª sin reaparición; folderId 24.ª; G01 D_eff 0 en 5 tex; G04 21 DOIs; D-06/D-09 sin cambio):** monitor sin novedad; ningún hecho nuevo que ningún claim enuncie.
- **F4 r19 — RE-VERIFICADO AL CIERRE (lección H2):** cara r12 #1 AVANZA, no se cierra (0/61 encontradas; 0 fuentes Drive nuevas — búsquedas `Panteon`/`graph`/`Voces` 97+31+16, solo conocidas o depósitos propios; el +2 en `Voces` son depósitos propios de FASE 4 r18; atestación operativa sin cambio — parche 2, validar 2; los totales crudos suben solo por auto-indexación de r18, H1 r17 5.ª confirmación; graph JSON 0/0 por quinta ronda consecutiva; Doc índice byte-idéntico, 35 nombrados / 61 sin nombre; carpeta "10 Panteón" exactamente 2 hijos). Nada de esto se prepara como claim: el NO_ENCONTRADO en rutas probadas no es un hecho nuevo enunciable (0 precedentes de claims que enuncien una búsqueda negativa en un archivo); la atestación operativa no cambia vs r15/r16/r17/r18; 0/61 y 0/0 son recurrencia. Entregables leídos: `nombres_fuera_doc_r19.md` (f7c3e03c…), `nombres_fuera_doc_r19.jsonl` (98c67f44…), `manifiesto_shas_f4_r19.json` (017550e7…).
- **F9 r19:** sin entregables finales al cierre de este frente (directorio con scripts de inventario y diff en curso — `diff_inventario_r19.md`, `manifiesto_tejido_r19.json` — sin `poda_r19.md` ni manifiesto_shas_f9). La poda r19 corresponde a FASE 2 / F8, no a este documento.
- **F1 r19:** guardia verificada (`guardia_f1_r19.md`, 2026-11-14T23:48:56Z): corpus 1.189 intacto (1b0a2b21…), audit ok=354, verify_all exactamente C-001..C-008, sin decisiones pendientes de aplicación automática al inicio. F1 aplica lo que F7 prepare bajo el régimen 01:43, post-FASE 4, como en r15/r16/r17/r18.
- **N-15 (M-50 vía navegador):** tarea del principal, fuera de la ronda. No se prepara nada.
- **B1:** variante preparada no elegida (§2). No se re-prepara.

## §4b. Inscripción en el dataset — N-16 aplicada, sin re-decidir

N-16 se aplicó en r15 F1 (opción C): el anexo `academico/incertidumbre_mediciones.md` existe con 15 ítems (M-56..M-76), 0 filas nuevas, CSV byte-idéntico (30 filas, sha 0852d58f…). F7 no la re-decide ni la re-prepara. Novedad de r19 que la toca: M-78, M-79 y M-80 produjeron ítems preparados (`item_anexo_M78.md`, `item_anexo_M79.md`, `item_anexo_M80.md`); añadirlos al anexo exige decisiones nuevas (§3 n.º 2, 3 y 4).

## §4c. CORR-FOLDERID-R19 (candidata, para FASE 2)

F5 r19 y F2 r19 etiquetan AMBAS su lectura de folderId como "24.ª": F5 la hizo 2026-11-14T23:35:13–14Z (grietas_r19.md §folderId) y F2 la hizo 2026-11-14T23:35:31Z (estado_vivo_r19.md §4: "24.ª lectura independiente en vivo; FASE 0 r19 hizo la 23.ª a las 23:31:38Z"). Por cronología (F5 23:35:13Z < F2 23:35:31Z), la 24.ª es la de F5 y la de F2 es la **25.ª**. Es el mismo patrón que CORR-FOLDERID-R18 (F5 y F2 etiquetaron ambas "20.ª"; FASE 2 adjudicó por cronología). FASE 2 adjudica el ordinal; ningún hecho cambia (la variante `I` existe, la `l` 404, en ambas lecturas).

## §5. Verificación en el corpus (grep propio, 2026-11-14, corpus 1.189)

- Ninguna de las 3 propuestas tiene claim que la enuncie (detalle por lectura en su archivo: "partidor" 0; "PART-SIK" 0; "11 tuplas" 0; "xinablalnrho" 0; "26/1/3" 0; "tercer descenso" 0; "3,3 %" 0; "run 207" 1 — C-1193, que dice que el run 207 NO se escribe; "run 208" 0; "run 143" 0; "ff2f16f8" 0; "1717f147" 0).
- Falsos positivos revisados: "3,3" 6 claims (C-1169 Φ(IIT) 3,42 por truncado; C-1179/C-1182/C-1184/C-1189/C-1192, claims de ventana anteriores que citan la serie r8/r14 3,3% como antecedente); "29 h" 2 claims (C-510, C-816, Posidonia); "run 40" 3 claims (C-261 Zenodo; C-1192 fallo nuevo r18; C-1194 población bot_audit); "Self-Diagnosis" 4 claims (C-563, C-567, C-745, C-1183; ninguno sobre el run 143).
- Corpus intacto al cierre: 1.189 líneas, sha 1b0a2b21…; dataset intacto: 30 filas + cabecera, sha 0852d58f…; provenance 368 líneas, sha 940ff3df…; anexo 15 ítems, sha 39940fd7… (verificado por `sha256sum` 2026-11-14); audit.py exit=0 (ok=354, discrepancia=0, no_encontrado=0, omitido=1), corrido por mí sin pipes.

## §6. Reversión

Retirar esta carpeta. Si algún claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
