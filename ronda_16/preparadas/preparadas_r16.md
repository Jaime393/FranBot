# LECTURAS PREPARADAS — RONDA 16, F7 (índice)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r16 §F7.
- **Estado: APLICADA (2026-11-14, post-FASE 4, bajo el régimen 01:43).** C-1184/C-1185/C-1186 absorbidos (claims 1.178 → 1.181, hash_real 1164 → 1167, provenance 361 → 363, SE 1044 → 1047); N-19 (ítem M-69 al anexo) aplicada en la misma tanda. Ver `decision_absorcion_r16.md` (bloque APLICADA) y `ejecucion_f1/decision_n19_r16.md`. La copia en Drive queda como el snapshot FASE 4.
- **Formato:** mismo que `ronda_15/ejecucion_f7/preparadas_r15.md` (formato `lecturas_canonicas_r10.md`).

## §1. Propuestas (3, SÉ)

| # | Lectura | Archivo | ID proyectado | Dedup máx. (Jaccard, umbral 0,5) |
|---|---|---|---|---|
| 1 | Ventana 25/30 (16,7%): tercera ronda consecutiva distinta de 0,0% y peor de la serie; 3 fallos nuevos (bot-audit 39, expand-alcance 98, TG Webhook 43) | `lectura_ventana_167_r16.md` | C-1184 | 0,3838 vs C-1182; 0 pares ≥ 0,5 |
| 2 | Estado completo ausente ~20 h 54 min: run 205 stub, episodio run 204 de 7 h 20 min; supera las mediciones de r14 (~9 h 57 min) y r15 (~13 h 04 min) del mismo episodio | `lectura_estado_completo_ausente_r16.md` | C-1185 | 0,3188 vs C-1178; 0 pares ≥ 0,5 |
| 3 | CORR-SERIE-R16: la serie 25..119 son 83 congresos, no 95 (25–33 sin R; 115–117 caen por parseo flotante); M-67 no cambia (máximo 1,9719 se sostiene) | `lectura_corr_serie_r16.md` | C-1186 | 0,1377 vs C-670; 0 pares ≥ 0,5 |

- **Máx. global:** 0,3838 (solo contra el corpus; ver §1c). **0 pares ≥ 0,5.** Máx. entre propuestas: 0,1654 (ventana_167 / estado_completo_ausente).
- **Dedup verificado dos veces, idéntico cifra por cifra:** corrida por script (`_dedup_f7_r16.py`) + corrida inline corregida (ver §1c). Salida: `dedup_f7_r16.json`.
- **Proyección si se absorben las 3 juntas:** claims 1.178 → 1.181, hash_real 1164 → 1167, provenance 361 → 363 (2 entradas nuevas — `estado_vivo_r16.md` cubre C-1184+C-1185, `mediciones_r16.md` cubre C-1186), SE 1044 → 1047, por_tipo verificacion 304 → 307, por_grieta observabilidad 4 → 6 y grieta nueva "G-NUEVA: d05 L4 polarización (medida y mecanismo)" 0 → 1; IDs C-1184/C-1185/C-1186 (corpus 1.178; si otro claim se inscribe antes, reasignar al aplicar).

## §1b. Interacción con F1 — ninguna reescritura forzada

Las tres lecturas pasaron el dedup en su primera redacción (máx. 0,3838). No hizo falta reescribir ninguna: la estructura de cada texto se escribió distinta de su antecedente más cercano (C-1182 para la ventana, C-1178 para el estado completo, C-1177 como formato de corrección para la serie), con el caveat en forma corta y distinta en la n.º 1 y sin caveat repetido en la n.º 2 y n.º 3. La lección de r15 §1b (primera redacción de C-1182 a 0,6625 por repetir estructura + caveat largo de C-1179) se aplicó antes de escribir, no después de medir.

## §1c. Corrección del método inline de dedup (método, no números)

La primera corrida inline (implementación ingenua con `.encode('ascii', 'ignore')`) dio 0,3838 / 0,3212 / 0,1367: dos cifras distintas del script (estado_completo_ausente 0,3188; corr_serie 0,1377). Causa medida: el guion largo "–" (U+2013) — al eliminarlo, "25–33" se pegaba en "2533" y "115–117" en "115117" (tokens falsos que no existen en el método r9). Una segunda variante inline (sustituir no-ASCII por espacio) dio 0,3762 / 0,3262 / 0,1277: peor — partía "opción" en "opcio"+"n" al convertir la marca combinante en espacio. La versión correcta (quitar marcas combinantes como el script, y partir por todo lo que no sea [a-z0-9]) da **0,3838 / 0,3188 / 0,1377, idénticas cifra por cifra al script**. Lección: el método r9 (script `_dedup_f7_r16.py`) es la referencia; una re-implementación inline solo verifica si reproduce su tokenización exacta, guiones incluidos. Las dos corridas fallidas no se borran del registro: son la evidencia de que la verificación independiente fue real y no una copia.

## §2. B1 — sin cambio

`estado_b1_r16.md`: variante preparada no elegida. Archivos intactos (claims.jsonl.nuevo_B1 1.148 líneas, sha 3e745468…, idéntico a r11, r12, r13, r14 y r15; propuestas_ola2_B1.jsonl sha e6ae7f04…). Revivirla seguiría exigiendo revertir B+B2. F1 r16 (guardia, sin decisiones pendientes al inicio) no colisiona con sus IDs (C-1144..C-1153, ocupados por B); las propuestas de este frente (C-1184/C-1185/C-1186 proyectadas) tampoco.

## §3. Decisiones sin número (para que FASE 2 las numere) — propuestas, no ejecuciones

F7 no numera decisiones ni las ejecuta. Una queda registrada con su afirmación precisa, tomada del frente que la produjo:

1. **Añadir el ítem M-69 al anexo de incertidumbre** (ítem preparado en `item_anexo_M69.md`, NO aplicado al anexo): el anexo existe con 11 ítems (M-56..M-66); el ítem M-69 refina el ítem M-63 (la resolución que exige el grupo central de 24 nodos: u\* = 0,05 frente al umbral u/2 = 0,0302; NO_CONFIRMA). Añadirlo exige decisión; F7 solo lo prepara. Precedentes: C-935 + ítem M-63 + N-18 (el ítem M-66 se añadió por la misma vía en r15).

## §4. Lo que r16 produjo y NO se prepara (con motivo y criterio)

**Criterio general (práctica de 14 rondas, r15 F7 §4):** los veredictos de medición NO se preparan como claims — se depositan como resultados (JSON de 15 claves + datos + shas) y entran al corpus por inscripción en el dataset/anexo, no como claims. Un veredicto solo se prepara como claim si tiene precedente de claim que lo enuncie; un ítem de anexo solo se prepara si tiene precedente de columna o de ítem al que refinar.

- **M-69 NO_CONFIRMA como claim:** NO se prepara como claim (veredicto de medición, 0 precedentes de veredictos como claims). SÍ se prepara su **ítem de anexo** (`item_anexo_M69.md`): tiene 2 precedentes de columna/ítem — **C-935** (claim HUECO, SE: "el dataset no tiene columna de incertidumbre para D_f") + el ítem M-63 en el anexo (la columna construida por M-63, u = 0,0604 ± 0,0050) + **N-18** (el ítem M-66 se añadió por la misma vía en r15). M-69 mide la resolución que exige el grupo central de esa columna y refina su ítem.
- **M-70 NO_SÉ:** NO se prepara — ni como claim ni como ítem de anexo. 0 precedentes: 0 claims mencionan M-70, el Congreso 106 como ancla, o P2 = 0 exacto en dim2; ninguna columna a la que anexarse (la polarización dim2 no es la columna de incertidumbre). El hallazgo (ancla degenerada: medianas D y R coinciden en −0,026, cociente no definido) es un resultado de medición, depositado en `med_M70.json` (con su `med_M70_crash.log`); no entra al corpus por esta vía. Su corrección de serie (CORR-SERIE-R16) SÍ se prepara como claim (§1 n.º 3): es una corrección de precedente, no un veredicto.
- **M-71 NO_CONFIRMA:** NO se prepara — ni como claim ni como ítem de anexo. 0 precedentes: 0 claims mencionan M-71 o intersect_count_clean; ninguna columna a la que anexarse. Quinta variable del mismo archivo con el mismo modo de fallo (β = 0,9733, R² = 0,3974); el resultado queda depositado en `med_M71.json`. Igual que M-70: extender el anexo exigiría una decisión nueva, que F7 no propone.
- **Nota honesta sobre M-70/M-71:** el anexo sí contiene ítems de veredictos de las mismas series (M-61/M-64 polarización, M-57/M-65 escalamiento urbano) — pero entraron por decisión N-16 bajo la enumeración del mapa r15 §F1 (M-56..M-65). Esa es una vía de decisión, no un precedente de preparación por F7: F7 no extiende el anexo por su cuenta. Si FASE 2 juzga que la serie debe continuar, que numere la decisión; este frente no la propone.
- **F6 H-SIK r16, resto (identidad S3 ≡ v10.3 sostiene 27/58 mismo contenido, 32/58 mismo nombre; F-F sigue disparada 11 tuplas / 8 distintos; A14 0,8000 exacto, conteo 27 bajo R-KS; verificador reproduce 740/740 bajo el canon N-17, 0 diffs, segunda vuelta consecutiva):** resultados de medición, depositados en `h_sik_r16.md` + `reuse_sik_r16.json` + `verificador_independiente_r16.json` + `tokenizacion_a14_r16.json`. No se preparan como claims (mismo criterio que M-69/70/71). La vía voces→S2 **AGOTADA en 0,50** (F-VOZ-S2 no se dispara: 0 banderas nuevas, mejor Jaccard 0,2308) tampoco se prepara como claim: es un resultado de medición con su falsador, depositado en `destilacion_voces_s2_r16.json`; 0 claims enuncian "destila" o "vía agotada", y no hay precedente de claim que enuncie un agotamiento de vía de mecanismo. Reabrirla exigiría un umbral distinto (declarado antes de medir) o una fuente nueva, como documenta F6.
- **F2 estado vivo, resto (flow 0,0% run 140, quinta ronda en 0,0%; tg_audit 0/0 run 141; bots 4/4 14.ª confirmación; estado_persistente V213; folderId 14.ª lectura; heartbeat 32/99 vacío; autocura run 8):** todo es recurrencia de fenómenos ya enunciados como claims: stub "unreachable" (C-792/C-851/C-1098/C-1178), flow 0,0% crítico (C-794/C-852/C-1098), tg_audit 0/0 (C-853/C-906), bifurcación (C-924/C-1004), folderId (C-1175), autocura run 7 (C-1178). Los números de r16 son nuevos; el fenómeno, no. Mismo criterio que r12/r13/r14/r15 F7 §4. Lo que SÍ se prepara de F2 son las dos novedades que ningún claim enuncia (§1 n.º 1 y 2): la ventana 25/30 (16,7%) y el estado completo ausente ~20 h 54 min. **Autocura run 8** (10:20:43Z, success, primero desde el run 7): no se prepara aparte — es el mismo fenómeno que C-1178 enuncia para el run 7; el hueco entre runs 7 y 8 (7 h 09 min) está dentro del rango ya observado (run 4→5: 7 h 03 min) y los slots :17 perdidos (6 desde el run 7, 10 desde el run 6) son el mismo episodio creciendo, no un extremo nuevo.
- **F5 grietas, resto (G03 inserción 2026-11-21 re-confirmada; G05 blob 18.ª sin cambio; H-SUELO 16.ª sin reaparición; G01 0 menciones D_eff; G04 21 DOIs; D-06/D-09 sin cambio):** monitor sin novedad; ningún hecho nuevo que ningún claim enuncie. El matiz ESA ("diciembre 2026" en la página principal vs 21-nov en la de actualizaciones) es de redacción, no de plan: no se prepara.
- **F4 r16:** sin entregables al cierre de este frente (T2 en paralelo; F4 aún no ha entregado). Si F4 produce hallazgos SÉ (las 2 fuentes Drive), su preparación corresponde a F8 o a una continuación de este frente, no a este documento.
- **N-15 (M-50 vía navegador):** tarea del principal, fuera de la ronda. No se prepara nada.
- **B1:** variante preparada no elegida (§2). No se re-prepara.

## §4b. Inscripción en el dataset — N-16 aplicada, sin re-decidir

N-16 se aplicó en r15 F1 (opción C): el anexo `academico/incertidumbre_mediciones.md` existe con 11 ítems (M-56..M-66), 0 filas nuevas, CSV byte-idéntico (30 filas, sha 0852d58f…). F7 no la re-decide ni la re-prepara. Novedad de r16 que la toca: M-69 produjo un ítem preparado (`item_anexo_M69.md`) que refina el ítem M-63; añadirlo al anexo exige una decisión nueva (§3 n.º 1). M-70/M-71 no tienen ítem preparado (§4).

## §5. Verificación en el corpus (grep propio, 2026-11-14, corpus 1.178)

- Ninguna de las 3 propuestas tiene claim que la enuncie (detalle por lectura en su archivo: "25/30" 0; "run 39" 0; "run 43" 0; "run 98" 0; "run 205" 0; "20 h 54" 0; "7 h 20" 0; "3519d217" 0; "83 congresos" 0; "Congreso" 0; "DW-NOMINATE" 0; "Voteview" 0; "1,9719" 0; "CORR-SERIE" 0).
- "16,7": 4 claims (C-657, C-664, C-1017, C-1020 — tasas HUECO r3/r4, falsos positivos). "bot-audit": 7 claims (ninguno sobre el run 39). "TG Webhook": 1 claim (C-745, censo de workflows). "ausente": 10 claims (falsos positivos; ninguno sobre la ausencia del estado completo). "9 h 57": 1 claim (C-1178, la medición r14 del mismo episodio). "100.0": 11 claims (todos porcentajes de cobertura flow_id; ninguno sobre party_code).
- Corpus intacto al cierre: 1.178 líneas, sha 7e5f016d…; dataset intacto: 30 filas + cabecera, sha 0852d58f…; provenance 361 líneas, sha b5cb6b43… (verificado por `sha256sum` 2026-11-14).

## §6. Reversión

Retirar esta carpeta. Si algún claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
