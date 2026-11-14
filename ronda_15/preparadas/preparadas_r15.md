# LECTURAS PREPARADAS — RONDA 15, F7 (índice)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r15 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4 (ver `decision_absorcion_r15.md`); este frente no aplica nada.
- **Formato:** mismo que `ronda_14/ejecucion_f7/preparadas_r14.md` (formato `lecturas_canonicas_r10.md`).

## §1. Propuestas (3, SÉ)

| # | Lectura | Archivo | ID proyectado | Dedup máx. (Jaccard, umbral 0,5) |
|---|---|---|---|---|
| 1 | REGLA-PICK-SIK-01 especificada y verificada: el verificador independiente r15 reproduce la mejor-contención 740/740 con 0 diffs (r14: reproducido=false, 164 diffs); H7 cerrado por especificación; la especificación es de método, no canon | `lectura_regla_pick_r15.md` | C-1181 | 0,1450 vs C-753; 0 pares ≥ 0,5 |
| 2 | Segundo fallo en la ventana de 30 runs: miu-cablear-oracle-v28 run 16, 06:41:34Z, failure — ventana 28/30, tasa 6,7% (r14: 3,3%) | `lectura_segundo_fallo_r15.md` | C-1182 | 0,4111 vs C-1179; 0 pares ≥ 0,5 |
| 3 | Gap máximo entre runs consecutivos: 174,4 min (03:47:09Z → 06:41:34Z), silencio repo-wide cuyos dos extremos son fallos; el hueco histórico de 85,0 min ya no es el máximo | `lectura_gap_maximo_r15.md` | C-1183 | 0,2897 vs C-1178; 0 pares ≥ 0,5 |

- **Máx. global:** 0,4111 (corregido: solo contra el corpus; ver §1c). **0 pares ≥ 0,5.** Máx. entre propuestas: 0,3136 (segundo_fallo / gap_maximo).
- **Dedup verificado dos veces, idéntico cifra por cifra:** corrida por script (`_dedup_f7_r15.py`) + corrida inline. Salida: `dedup_f7_r15.json`.
- **Proyección si se absorben las 3 juntas:** claims 1.175 → 1.178, hash_real 1161 → 1164, provenance 359 → 361 (2 entradas nuevas — `estado_vivo_r15.md` cubre C-1182+C-1183), SE 1041 → 1044, por_tipo verificacion 301 → 304, por_grieta retejido 19 → 20 y observabilidad 2 → 4; IDs C-1181/C-1182/C-1183 (F1 r15 ya aplicó C-1180; si otro claim se inscribe antes, reasignar al aplicar).

## §1b. Interacción con F1 — la primera redacción de C-1182 fallaba el dedup (aviso, no reescritura ajena)

La primera redacción de la lectura n.º 2 daba dedup 0,6625 contra C-1179 (1 par ≥ 0,5): el texto repetía la estructura y el caveat largo de C-1179 casi token por token. No se forzó: se reescribió el texto (nueva estructura, caveat en forma corta) y el dedup quedó en 0,4111 contra C-1179, 0 pares ≥ 0,5. El caveat largo vive en C-1179, que comparte la ventana y la serie; la forma corta está en el texto de C-1182 y la justificación en su archivo. La reescritura es de este frente, sobre su propia lectura; ningún paquete de F1 se tocó.

## §1c. Corrección del script de dedup heredado (método, no números)

El script heredado de r13/r14 calculaba `_global_max` sobre `out.values()`, incluyendo `_entre_propuestas` (que también tiene clave `max`). En r14 el error no movió el número (entre-propuestas 0,2045 < global 0,2475). En r15 el script corregido define `_global_max` solo contra el corpus; el máximo entre propuestas se reporta por separado. Con la definición corregida: global 0,4111; entre propuestas 0,3136. (Si se aplicara la definición vieja, el global seguiría siendo 0,4111 — el entre-propuestas es menor — pero la definición vieja es incorrecta y queda corregida aquí.)

## §2. B1 — sin cambio

`estado_b1_r15.md`: variante preparada no elegida. Archivos intactos (claims.jsonl.nuevo_B1 1.148 líneas, sha 3e745468…, idéntico a r11, r12, r13 y r14; propuestas_ola2_B1.jsonl sha e6ae7f04…). Revivirla seguiría exigiendo revertir B+B2. F1 r15 (N-01/N-13/N-14/N-16, C-1180) no colisiona con sus IDs (C-1144..C-1153, ocupados por B); las propuestas de este frente (C-1181/C-1182/C-1183 proyectadas) tampoco.

## §3. Decisiones sin número (para que FASE 2 las numere) — propuestas, no ejecuciones

F7 no numera decisiones ni las ejecuta. Dos quedan registradas con su afirmación precisa, tomadas de los frentes que las produjeron:

1. **Adopción de REGLA-PICK-SIK-01 como canon** (propuesta en F6 r15, `especificacion_regla_pick_r15.md` §3): "Adopto la regla de pick REGLA-PICK-SIK-01 para las mediciones SIK: la mejor-contención maximiza max(c1,c2) con desempate por orden de inserción, comparación sin redondear contra el mejor redondeado, y None cuando el máximo es 0,0." Qué autoriza: que las mediciones SIK futuras usen esta regla como pick canónico del método; el hueco H7 queda cerrado por especificación y el verificador independiente reproduce 740/740. La lectura n.º 1 de este frente (C-1181) es el hecho de verificación; la adopción canónica es una decisión aparte (el claim de adopción, si se decide, se prepara al aplicar, como C-1180 para N-14).
2. **Añadir el ítem M-66 al anexo de incertidumbre** (ítem preparado en `item_anexo_M66.md`, NO aplicado al anexo): el anexo lo creó F1 r15 por N-16 (opción C) con 10 ítems (M-56..M-65); el ítem M-66 refina el ítem M-63 (la columna resuelve 6/29 pares adyacentes, 4 grupos a > 2u). Añadirlo exige decisión; F7 solo lo prepara.

## §4. Lo que r15 produjo y NO se prepara (con motivo y criterio)

**Criterio general (práctica de 13 rondas, r14 F7 §4):** los veredictos de medición NO se preparan como claims — se depositan como resultados (JSON de 15 claves + datos + shas) y entran al corpus por inscripción en el dataset/anexo, no como claims. Un veredicto solo se prepara como claim si tiene precedente de claim que lo enuncie; un ítem de anexo solo se prepara si tiene precedente de columna o de ítem al que refinar.

- **M-66 CONFIRMA como claim:** NO se prepara como claim (veredicto de medición, 0 precedentes de veredictos como claims). SÍ se prepara su **ítem de anexo** (`item_anexo_M66.md`): tiene 1 precedente de columna de incertidumbre — **C-935** (claim HUECO, SE: "el dataset no tiene columna de incertidumbre para D_f") + el ítem M-63 en el anexo (la columna construida por M-63, u = 0,0604 ± 0,0050). M-66 mide el poder resolutivo de esa columna y refina su ítem.
- **M-67 NO_CONFIRMA:** NO se prepara — ni como claim ni como ítem de anexo. 0 precedentes: 0 claims mencionan M-67, el Congreso 80 como ancla, o el cociente máximo 1,9719; ninguna columna a la que anexarse (la polarización no es la columna de incertidumbre). El hallazgo descriptivo (el umbral > 2 es inalcanzable en toda la serie 25..119 con DW-NOMINATE dim1) es un resultado de medición, depositado en `med_M67.json`; no entra al corpus por esta vía. Extender el anexo a veredictos nuevos exigiría una decisión nueva, que F7 no propone.
- **M-68 NO_CONFIRMA:** NO se prepara — ni como claim ni como ítem de anexo. 0 precedentes: 0 claims mencionan M-68 o intersect_count; ninguna columna a la que anexarse. Cuarta variable del mismo archivo con el mismo modo de fallo (β ≈ 0,99, R² ≈ 0,40); el resultado queda depositado en `med_M68.json`. Igual que M-67: extender el anexo exigiría una decisión nueva, que F7 no propone.
- **Nota honesta sobre M-67/M-68:** el anexo sí contiene ítems de veredictos de las mismas series (M-61/M-64 polarización, M-57/M-65 escalamiento urbano) — pero entraron por decisión N-16 bajo la enumeración del mapa r15 §F1 (M-56..M-65). Esa es una vía de decisión, no un precedente de preparación por F7: F7 no extiende el anexo por su cuenta. Si FASE 2 juzga que la serie debe continuar, que numere la decisión; este frente no la propone.
- **F6 H-SIK r15, resto (identidad S3 ≡ v10.3 sostiene 27/58 mismo contenido, 32/58 mismo nombre; F-F sigue disparada 11 tuplas / 8 distintos con el partidor corregido; A14 resuelto por regla: 0,8000 exacto, conteo 27 bajo R-KS):** resultados de medición, depositados en `h_sik_r15.md` + `reuse_sik_r15.json` + `verificador_independiente_r15.json` + `tokenizacion_a14_r15.json`. No se preparan como claims (mismo criterio que M-66/67/68). La forma preparada de "la resolución del verificador H-SIK" (mapa §F7) es la lectura n.º 1 (C-1181): la especificación de la regla de pick y su verificación 740/740.
- **F2 estado vivo, resto (stub run 204 persiste ~3 h 36 min, sin estado completo ~13 h 04 min; flow 0,0% run 139; tg_audit 0/0; bots 4/4 13.ª confirmación; estado_persistente V213; folderId 11.ª lectura; heartbeat 12/42 vacío; autocura sin run 8):** todo es recurrencia de fenómenos ya enunciados como claims: stub "unreachable" (C-792/C-851/C-1098/C-1178), flow 0,0% crítico (C-794/C-852/C-1098), tg_audit 0/0 (C-853/C-906), bifurcación (C-924/C-1004), folderId (C-1175), autocura run 7 (C-1178). Los números de r15 son nuevos; el fenómeno, no. Mismo criterio que r12/r13/r14 F7 §4. Lo que SÍ se prepara de F2 son las dos novedades que ningún claim enuncia (§1 n.º 2 y 3): el segundo fallo de ventana (cablear-oracle run 16) y el gap máximo de 174,4 min.
- **F1 r15 (N-01/N-13/N-14/N-16, C-1180):** ya aplicadas por F1 bajo el régimen 01:43. No se duplican. La adopción de REGLA-PICK-SIK-01 y el ítem M-66 quedan como decisiones sin número (§3), no como trabajo de F1 en esta tanda.
- **N-15 (M-50 vía navegador):** tarea del principal, fuera de la ronda. No se prepara nada.
- **B1:** variante preparada no elegida (§2). No se re-prepara.

## §4b. Inscripción en el dataset — N-16 aplicada, sin re-decidir

N-16 se aplicó en r15 F1 (opción C): el anexo `academico/incertidumbre_mediciones.md` existe con 10 ítems (M-56..M-65), 0 filas nuevas, CSV byte-idéntico (30 filas, sha 0852d58f…). F7 no la re-decide ni la re-prepara. Novedad de r15 que la toca: M-66 produjo un ítem preparado (`item_anexo_M66.md`) que refina el ítem M-63; añadirlo al anexo exige una decisión nueva (§3 n.º 2). M-67/M-68 no tienen ítem preparado (§4).

## §5. Verificación en el corpus (grep propio, 2026-11-14, corpus 1.175)

- Ninguna de las 3 propuestas tiene claim que la enuncie (detalle por lectura en su archivo: "REGLA-PICK" 0; "740/740" 0; "cablear-oracle-v28 run 16" 0; "segundo fallo" 0; "174,4" 0; "85,0" 0; "gap máximo" 0).
- "H7": 1 claim (C-598, falso positivo — cita de Vicsek 1990). "cablear-oracle": 4 claims (C-655, C-795, C-796, C-856 — otros runs; ninguno sobre el run 16). "gap": 14 claims (cadencias, slots, falsos positivos; ninguno sobre un gap máximo repo-wide). "6/29": 2 claims (C-1009, C-1088 — falsos positivos, 26/29 y 28/29). "M-66"/"M-67"/"M-68"/"M-63": 0 claims. "columna de incertidumbre": 1 claim (C-935, el hueco — el precedente de M-66).
- Corpus intacto al cierre: 1.175 líneas, sha 6b5fac7f…; dataset intacto: 30 filas + cabecera, sha 0852d58f…; provenance 359 líneas, sha 5fda0383… (verificado por `sha256sum` 2026-11-14).

## §6. Reversión

Retirar esta carpeta. Si algún claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
