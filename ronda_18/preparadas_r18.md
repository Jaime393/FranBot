# LECTURAS PREPARADAS — RONDA 18, F7 (índice)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r18 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_17/ejecucion_f7/preparadas_r17.md` (formato `lecturas_canonicas_r10.md`).
- **Lección H2 FASE 2 r16, APLICADA:** F4 r18 fue re-verificado al cierre de este frente, antes de escribir este índice: entregó 3 archivos (`nombres_fuera_doc_r18.md` 8df13737…, `nombres_fuera_doc_r18.jsonl` 8a8a04d5…, `manifiesto_shas_f4.json` — leídos y registrados en §4). Este frente NO repite el error de r16 (F7 cerró su síntesis sin re-mirar F4).

## §1. Propuestas (4, SÉ)

| # | Lectura | Archivo | ID proyectado | Dedup máx. (Jaccard, umbral 0,5) |
|---|---|---|---|---|
| 1 | REGLA-TOK-SIK-01 especificada y verificada (R-KS; A14 0,8000 exacto, conteo 27; 7/7 comprobaciones, 0 diffs) | `lectura_regla_tok_sik_r18.md` | C-1191 | 0,2819 vs C-1181; 0 pares ≥ 0,5 |
| 2 | Ventana 26/30 (13,3%): primer descenso tras cuatro escalones seguidos; las tres rachas se rompen; único fallo nuevo bot-audit run 40 | `lectura_ventana_2630_r18.md` | C-1192 | 0,4677 vs C-1189; 0 pares ≥ 0,5 |
| 3 | Run 206 persiste sin relevo: sin run 207, alternancia detenida en 206, ausencia ~26 h 16 min, quinto escalón | `lectura_run206_persiste_r18.md` | C-1193 | 0,4190 vs C-1190; 0 pares ≥ 0,5 |
| 4 | bot_audit.json cambia de población: 12 entradas tg_* → 7 entradas tg_pool_0..6 (pool COORD), 7/7 vivos; el arreglo de FASE 2 r17 queda reflejado | `lectura_bot_audit_poblacion_r18.md` | C-1194 | 0,1840 vs C-1101; 0 pares ≥ 0,5 |

- **Máx. global:** 0,4677 (solo contra el corpus; ver §1c). **0 pares ≥ 0,5.** Máx. entre propuestas: 0,2129 (ventana_2630 / bot_audit_poblacion).
- **Dedup verificado tres veces, idéntico cifra por cifra:** 3 corridas del script (`_dedup_f7_r18.py`), salida byte-idéntica (sha `c4a73a70…`). Salida: `dedup_f7_r18.json`.
- **Proyección si se absorben las 4 juntas:** claims 1.185 → 1.189, hash_real 1171 → 1175, provenance 366 → 368 (2 entradas nuevas — `especificacion_regla_tok_sik_r18.md` cubre C-1191, `estado_vivo_r18.md` cubre C-1192+C-1193+C-1194), SE 1051 → 1055, por_tipo verificacion 311 → 315, por_grieta observabilidad 8 → 11 y grieta "G-NUEVA: retejido_2026-11-12 no integrado en anexo-vi" 20 → 21, audit ok 352 → 354 (+2 fuentes distintas); IDs C-1191/C-1192/C-1193/C-1194 (corpus 1.185; si otro claim se inscribe antes, reasignar al aplicar).

## §1b. Cercanía al umbral (sin reescritura)

Las 4 lecturas pasaron en su primera redacción. La más cercana al umbral es la ventana (0,4677 vs C-1189): los claims de ventana comparten inevitablemente vocabulario de serie (ventana, fallos, runs, rachas, dispatch), y esta redacción ya aplica la lección de r17 §1b (titular distinto — descenso, no escalón de subida —, sin la serie completa de tasas pasadas, solo el rango r14–r17). Como 0 pares ≥ 0,5, no hay reescritura: el método es el árbitro, y el valor queda registrado tal cual para que FASE 2 lo vea. El run 206 (0,4190 vs C-1190) también aplica la lección r17 (titular de persistencia, no de stub nuevo; sin serie de duraciones pasadas ni cadena de alternancia).

## §1c. Método de dedup (sin corrección esta ronda)

El script `_dedup_f7_r18.py` es el de r17 con 4 lecturas (método r9: campo claim, NFKD, sin acentos, tokens [a-z0-9]+, umbral 0,5; `_global_max` solo contra el corpus). Ninguna corrida inline esta ronda: las 3 corridas del script son byte-idénticas entre sí (sha `c4a73a70…`), y eso es la verificación. La lección de r16 §1c (variantes ingenuas que divergen por el guion largo "–" y las marcas combinantes) se aplicó no re-implementando el método.

## §2. B1 — sin cambio

`estado_b1_r18.md`: variante preparada no elegida. Archivos intactos (claims.jsonl.nuevo_B1 1.148 líneas, sha 3e745468…, idéntico a r11, r12, r13, r14, r15, r16 y r17; propuestas_ola2_B1.jsonl sha e6ae7f04…). Revivirla seguiría exigiendo revertir B+B2. F1 r18 (guardia, sin decisiones pendientes al inicio) no colisiona con sus IDs (C-1144..C-1153, ocupados por B); las propuestas de este frente (C-1191/C-1192/C-1193/C-1194 proyectadas) tampoco.

## §3. Decisiones sin número (para que FASE 2 las numere) — propuestas, no ejecuciones

F7 no numera decisiones ni las ejecuta. Tres quedan registradas con su afirmación precisa, tomadas de los frentes que las produjeron:

1. **Adoptar la regla de tokenización R-KS como canon SIK** (especificación en `especificacion_regla_tok_sik_r18.md`, claim preparado C-1191): afirmación precisa propuesta — "Adopto la regla de tokenización R-KS para las mediciones SIK: el token se conserva con sus partes, se excluyen las partes vacías y se emite además la forma sin '_' en los extremos." Autoriza que las mediciones SIK futuras usen R-KS como tokenización canónica del método; el caveat A14 queda resuelto por regla (A14 = 0,8000, conteo 27). Patrón N-17 (C-1181 → N-17). Si no se adopta, la regla sigue especificada como método sin canon (como en r15/r16/r17).
2. **Añadir el ítem M-75 al anexo de incertidumbre** (ítem preparado en `item_anexo_M75.md`, NO aplicado al anexo): el anexo existe con 13 ítems (M-56..M-72); el ítem M-75 registra la primera CONFIRMA formal de la línea d05 L4 (dim2, ancla casi-degenerada, cociente máx 463,75) y que el umbral >2 no se transfiere a dim2. Añadirlo exige decisión; F7 solo lo prepara. Precedentes: ítems M-61/M-64 (polarización dim1) + N-19 (M-69) + N-20 (M-72).
3. **Añadir el ítem M-76 al anexo de incertidumbre** (ítem preparado en `item_anexo_M76.md`, NO aplicado al anexo): el ítem M-76 registra la séptima variable de escalamiento urbano (β = 0,8627 en banda por primera vez, R² = 0,7490; el muro queda aislado en la pierna R²). Añadirlo exige decisión; F7 solo lo prepara. Precedentes: ítems M-57/M-65 (escalamiento urbano) + N-19 (M-69) + N-20 (M-72).

## §4. Lo que r18 produjo y NO se prepara (con motivo y criterio)

**Criterio general (práctica de 16 rondas, r17 F7 §4):** los veredictos de medición NO se preparan como claims — se depositan como resultados (JSON de 15 claves + datos + shas) y entran al corpus por inscripción en el dataset/anexo, no como claims. Un veredicto solo se prepara como claim si tiene precedente de claim que lo enuncie; un ítem de anexo solo se prepara si tiene precedente de columna o de ítem al que refinar.

- **M-75 CONFIRMA como claim:** NO se prepara como claim (veredicto de medición, 0 precedentes de veredictos como claims). SÍ se prepara su **ítem de anexo** (`item_anexo_M75.md`): refina la línea de polarización con ítems en el anexo (M-61/M-64, dim1) — primera CONFIRMA formal de d05 L4; el umbral >2 no se transfiere a dim2. La cara d05 L4 NO se cierra.
- **M-76 NO_CONFIRMA como claim:** NO se prepara como claim (veredicto de medición, 0 precedentes). SÍ se prepara su **ítem de anexo** (`item_anexo_M76.md`): refina la línea de escalamiento urbano con ítems en el anexo (M-57/M-65) — primera β en banda; el muro queda aislado en la pierna R². Distinción vs M-71/M-73 (sin ítem): M-71 y M-73 repetían el mismo modo de fallo en ambas piernas; M-76 rompe el patrón en una pierna. La cara d05 L7 NO se cierra.
- **M-77 NO_SÉ:** NO se prepara — ni como claim ni como ítem de anexo. 0 precedentes: el protocolo de falsación de Pilar 4 se detiene en el paso 1 porque la fórmula no existe en `PILARES_FUNDAMENTALES.md` (86 líneas, sha dde9334e…; 0 fórmulas, 0 umbrales, 0 variables del Sahel); el bloqueo es del claim C-053 tal como está escrito, no de la búsqueda. Sin columna ni ítem al que refinar. Igual que M-70 en r16 (NO_SÉ sin ítem). Un NO_SÉ por bloqueo no refuta la métrica; registra que la predicción no se puede probar con lo citado. Queda depositado en `med_M77.json`.
- **F6 H-SIK r18, resto (F-R18 PASA 0 diffs, 4.ª vuelta bajo el canon N-17; F-PICK18 PASA 0 diffs; F-F18 PASA 11 tuplas / 8 distintos; F-A18 PASA 0,8000 exacto, conteo 27; F-VOZ-S2 no se dispara, vía agotada en 0,50 por 4.ª vez; N-01 8.º precedente = absorción r17):** resultados de medición, depositados en `h_sik_r18.md` + `reuse_sik_r18.json` + `verificador_independiente_r18.json` + `tokenizacion_a14_r18.json` + `destilacion_voces_s2_r18.json`. No se preparan como claims (mismo criterio que M-75/76/77). La vía voces→S2 agotada tampoco se prepara: 0 claims enuncian "destila" o "vía agotada", y no hay precedente de claim que enuncie un agotamiento de vía de mecanismo (igual que en r16/r17). Lo que SÍ se prepara de F6 es la especificación de REGLA-TOK-SIK-01 (§1 n.º 1): tiene precedente directo (C-1181 → N-17) y el verificador la reproduce 7/7 con 0 diffs.
- **F2 estado vivo, resto (flow 0,0% run 141, séptima ronda en 0,0%; tg_audit 0/0 run 142; bots 4/4 16.ª confirmación; estado_persistente V213; folderId 20.ª lectura; heartbeat 6/27 vacío, 22,2%; autocura sin run 10; V93 persiste, 3 payloads más, 10 acumulados):** todo es recurrencia de fenómenos ya enunciados como claims, salvo el V93 — y el V93 tampoco se prepara: es una medición de F2 (esquema de heartbeat, escritor Vercel, ~30 min), depositada en `estado_vivo_r18.md`; 0 claims enuncian un esquema de heartbeat ni su aparición, y no hay precedente de claim que enuncie un esquema nuevo (igual que en r17). **Autocura sin run 10** (último run 9, 17:03:57Z; 2 slots :17 perdidos desde el run 9, 14 desde el run 7): no se prepara aparte — es el mismo fenómeno que C-1178 enuncia para el run 7; el hueco crece dentro del rango ya observado. Lo que SÍ se prepara de F2 son las tres novedades que ningún claim enuncia (§1 n.º 2, 3 y 4): la ventana 26/30 (13,3%, primer descenso), el run 206 que persiste sin relevo, y el cambio de población de bot_audit.json.
- **F5 grietas, resto (G03 inserción 2026-11-21 sin cambio, 7 días; G05 blob 21.ª sin cambio; H-SUELO 22.ª sin reaparición; folderId 20.ª; G01 D_eff 0 en 5 tex; G04 21 DOIs; D-06/D-09 sin cambio):** monitor sin novedad; ningún hecho nuevo que ningún claim enuncie.
- **F4 r18 — RE-VERIFICADO AL CIERRE (lección H2):** cara r12 #1 AVANZA, no se cierra (0/61 encontradas; 0 fuentes Drive nuevas — búsquedas `Panteon`/`graph`/`Voces` 97+31+14, solo conocidas o depósitos propios; candidato `.graph` 2026-09-08 leído: binario, 0/35 nombres; 2 carpetas «graph» con artefactos Kaldi; Doc índice byte-idéntico, 35 nombrados / 61 sin nombre; carpeta "10 Panteón" exactamente 2 hijos; graph JSON 0/0 por cuarta ronda consecutiva; atestación operativa sin cambio — parche 2, validar 2; los totales crudos suben solo por auto-indexación de r17, H1 r17 4.ª confirmación). Nada de esto se prepara como claim: el NO_ENCONTRADO en rutas probadas no es un hecho nuevo enunciable (0 precedentes de claims que enuncien una búsqueda negativa en un archivo); la atestación operativa no cambia vs r15/r16/r17; 0/61 y 0/0 son recurrencia. Entregables leídos: `nombres_fuera_doc_r18.md` (8df13737…), `nombres_fuera_doc_r18.jsonl` (8a8a04d5…), `manifiesto_shas_f4.json`.
- **F9 r18:** sin entregables finales al cierre de este frente (directorio con scripts de inventario y diff en curso, sin manifiesto_shas_f9.json). La poda r18 corresponde a FASE 2 / F8, no a este documento.
- **F1 r18:** guardia verificada (`guardia_f1_r18.md`, 2026-11-14T20:18:37Z): corpus 1.185 intacto (6fe7c72b…), audit ok=352, verify_all exactamente C-001..C-008, sin decisiones pendientes de aplicación automática al inicio. F1 aplica lo que F7 prepare bajo el régimen 01:43, post-FASE 4, como en r15/r16/r17.
- **N-15 (M-50 vía navegador):** tarea del principal, fuera de la ronda. No se prepara nada.
- **B1:** variante preparada no elegida (§2). No se re-prepara.

## §4b. Inscripción en el dataset — N-16 aplicada, sin re-decidir

N-16 se aplicó en r15 F1 (opción C): el anexo `academico/incertidumbre_mediciones.md` existe con 13 ítems (M-56..M-72), 0 filas nuevas, CSV byte-idéntico (30 filas, sha 0852d58f…). F7 no la re-decide ni la re-prepara. Novedad de r18 que la toca: M-75 y M-76 produjeron ítems preparados (`item_anexo_M75.md`, `item_anexo_M76.md`); añadirlos al anexo exige decisiones nuevas (§3 n.º 2 y 3). M-77 no tiene ítem preparado (§4).

## §5. Verificación en el corpus (grep propio, 2026-11-14, corpus 1.185)

- Ninguna de las 4 propuestas tiene claim que la enuncie (detalle por lectura en su archivo: "tokeniz" 0; "R-KS" 0; "A14" 0; "0,8000" 0; "26/30" 0; "13,3" 0; "run 207" 0; "run 168" 0; "26 h 16" 0; "tg_pool" 0; "pool COORD" 0; "7/7 vivos" 0; "CHK-216" 0).
- Falsos positivos revisados: "token" 56 claims (tokens de Telegram / nombres de secretos, no tokenización SIK); "∂_μ∂_ν" 1 claim (C-824, la métrica de Fisher como fórmula, no el artefacto d_mud_); "Jaccard" 4 claims (C-547, C-829, C-996, C-997; ninguno sobre R-KS ni A14); "20,0" 1 claim (C-1189, la tasa de r17); "run 40" 1 claim (C-261, otro run 40); "bot_audit.json" 11 claims (estados anteriores del archivo); "bot.audit" 19 claims (runs y fallos anteriores); "12 entradas" 2 claims (C-744, C-752, el archivo con 12 entradas en 2026-11-12); "0/0 vivos" 2 claims (C-493, C-744; ninguno sobre la secuencia r18); "run 206" 1 claim (C-1190, el stub nuevo de r17 — esta lectura es su persistencia sin relevo); "24 h 38" 1 claim (C-1190; aquí es ~26 h 16 min); "f728ad80" 1 claim (C-1190, el mismo commit; el hecho nuevo es que sigue sin relevo).
- Corpus intacto al cierre: 1.185 líneas, sha 6fe7c72b…; dataset intacto: 30 filas + cabecera, sha 0852d58f…; provenance 366 líneas, sha 4319d426…; anexo 13 ítems, sha 30c05adb… (verificado por `sha256sum` 2026-11-14).

## §6. Reversión

Retirar esta carpeta. Si algún claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
