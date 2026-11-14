# LECTURAS PREPARADAS — RONDA 14, F7 (índice)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r14 §F7.
- **Estado: APLICADA, 2026-11-14.** Las 3 propuestas (C-1177/C-1178/C-1179) entraron al corpus por orden del Jardinero 2026-11-14 01:43 -05 (aplicación automática de decisiones), junto con C-1174/C-1175/C-1176 de F1. Claims 1.168 → 1.174; hash_real 1154 → 1160; provenance 354 → 358; SE 1034 → 1040. Puertas post-absorción: audit exit=0 (ok=344), verify_all exit=1 con exactamente C-001..C-008 (ver `ejecucion_f1/puertas_post_absorcion_auto.txt`).
- **Formato:** mismo que `ronda_13/ejecucion_f7/preparadas_r13.md` (formato `lecturas_canonicas_r10.md`).

## §1. Propuestas (3, SÉ)

| # | Lectura | Archivo | ID proyectado | Dedup máx. (Jaccard, umbral 0,5) |
|---|---|---|---|---|
| 1 | CORR-P32-R14: el Doc 32 existe (el 404 era ID truncado); leído entero, 32 nodos culturales, 0/32 voces; graph JSON ausente en Drive (inventario Vault 24/24); 2 vías r13 agotadas como rutas | `lectura_corr_p32_r14.md` | C-1177 (supone F1 aplicada; si no, reasignar) | 0,1629 vs C-846; 0 pares ≥ 0,5 |
| 2 | Silencio del clúster escritor/monitor: TERMINA (autocura run 7 nuevo, 03:11:47Z); el estado sigue siendo stub (run 204 'unreachable') | `lectura_silencio_termina_r14.md` | C-1178 (supone F1 aplicada; si no, reasignar) | 0,2126 vs C-851; 0 pares ≥ 0,5 |
| 3 | Ventana de 30 runs: 29 éxito / 1 fallo (expand-alcance run 97, 03:47:09Z) — primer fallo desde r8, tasa 3,3% | `lectura_primer_fallo_r14.md` | C-1179 (supone F1 aplicada; si no, reasignar) | 0,2475 vs C-856; 0 pares ≥ 0,5 |

- **Máx. global:** 0,2475. **0 pares ≥ 0,5.** Máx. entre propuestas: 0,2045 (silencio_termina / primer_fallo).
- **Dedup verificado dos veces, idéntico cifra por cifra:** corrida por script (`_dedup_f7_r14.py`) + corrida inline. Salida: `dedup_f7_r14.json`.
- **APLICADA (real, no proyección):** claims 1.168 → 1.174, hash_real 1154 → 1160, provenance 354 → 358, SE 1034 → 1040, IDs C-1177/C-1178/C-1179. La proyección 357 → 359 queda superada por la cifra real: C-1176 comparte fuente con C-1177 (`nombres_fuera_doc_r14.md`, sha corregido `3068b24a…`, antes `5669c1ad…`); las fuentes nuevas son 4 en total para las 6 (ver decisión F1). C-1177 absorbida con los números corregidos 44/12 (CORR-P32-NUM-R14).
- **Proyección si se absorben solas (F1 no aplicada):** claims 1.168 → 1.171, hash_real 1154 → 1157, provenance 354 → 356, SE 1034 → 1037; IDs a reasignar al aplicar (regla de r13: el ID proyectado supone F1 aplicada).

## §1b. Interacción con F1 — C-1176 queda con una cláusula superada (aviso, no reescritura)

La lectura n.º 1 (CORR-P32-R14) corrige la cláusula final del texto de C-1176 tal como está preparado en r13 F7 y re-preparado en r14 F1: "quedan dos vías sin agotar (graph_v10.6_112_nodos.json, 6.252 caracteres, no en local; Doc MIU_PANTEON_32_DETALLADO_ENDPOINTS, 404)". En r14 ambas vías quedan agotadas como rutas: el Doc 32 existe y se leyó entero; el graph JSON no aparece en Drive (inventario exhaustivo + búsquedas por nombre). **Si C-1176 se absorbe tal como está preparada, entraría al corpus con esa cláusula falsa.** Antes de absorberla, su texto necesita la corrección (regla N-01 propuesta: la fuente cambió → el hash sigue a la fuente + nota) o bien absorber C-1176 y la lectura n.º 1 juntas, con esta última supersediendo la cláusula. F7 no reescribe el paquete F1; lo señala aquí y en `lectura_corr_p32_r14.md` para que FASE 2 lo registre y el principal lo decida.

## §2. B1 — sin cambio

`estado_b1_r14.md`: variante preparada no elegida. Archivos intactos (claims.jsonl.nuevo_B1 1.148 líneas, sha 3e745468…, idéntico a r11, r12 y r13; propuestas_ola2_B1.jsonl sha e6ae7f04…). Revivirla seguiría exigiendo revertir B+B2. F1 r14 (C-1174/C-1175/C-1176) no colisiona con sus IDs (C-1144..C-1153, ocupados por B); las propuestas de este frente (C-1177/C-1178/C-1179 proyectadas) tampoco.

## §3. R2-25 y N-01 — no son de este frente

N-14 (vía A adopción canónica) es trabajo de **F6** (T2, en paralelo; al cierre de este frente F6 tiene la declaración de falsador H-SIK r14 escrita y la reproducción de r13 corrida, sin síntesis aún). F7 no la evalúa: sería pisar su rincón. Baseline vigente: juicio r11 — **NO se eleva, queda CONJETURO**; vía B EJECUTADA en r12 — FALLA_F4; borrador de adopción preparado en r13 F6 (`r2_25_via_r13.md`). Si F6 r14 produce un veredicto SÉ, su preparación como claim corresponde a F7 en una continuación o a la ronda siguiente. Lo mismo para N-01 (seguimiento r14 en F6, adendas P10/P9 propuestas, punto abierto sin ocurrencia).

## §4. Lo que r14 produjo y NO se prepara como claim (con motivo)

- **M-63 CONFIRMA, M-64 NO_CONFIRMA, M-65 NO_CONFIRMA (F3):** veredictos SÉ con falsador pre-declarado y datos con sha — pero en 1.168 claims **no hay precedente de veredictos de medición como claims** (grep: "M-63|M-64|M-65" 0; "NO_CONFIRMA" 0). La práctica de 13 rondas es que las mediciones se depositan como resultados (JSON de 15 claves + datos + shas) y entran al corpus por **inscripción en el dataset** — cuya propuesta ya existe (N-16, opciones A/B/C, recomendada C; ver §4b), no como claims.
- **H5 — re-conteo M-60, 18/20 → 15/20 (F3):** corrección de un DOCUMENTO (la síntesis M-60 de r13), no de un claim: el veredicto M-60 no es claim y la cifra 18/20 no aparece en ningún claim. Se registra en F3 r14 (`sintesis_f3_r14.md`, `declaracion_falsadores_r14.md`); no hay nada que corregir en el corpus. No se prepara.
- **M-64, hipótesis del ancla falsa (P(94) = 0,5885, no ~0,4):** la hipótesis estaba escrita en documentos de r13, no en un claim. No hay claim que corregir. No se prepara.
- **M-63, columna de incertidumbre (u = 0,0604 ± 0,0050, 30 nodos):** es un RESULTADO (`columna_incertidumbre_r14.csv`), no una inscripción y no un claim. Entra — si se decide — por N-16 (ver §4b). No se prepara.
- **F2 estado vivo, resto (stub run 204 como fenómeno, flow 0,0% run 139, tg_audit 0/0, bots 4/4 12.ª confirmación, estado_persistente V213, folderId 8.ª lectura, heartbeat 6/21 vacío):** todo es recurrencia de fenómenos ya enunciados como claims: stub "unreachable" (C-792/C-851/C-1098), flow 0,0% crítico (C-794/C-852/C-1098), tg_audit 0/0 (C-853/C-906), bifurcación (C-924/C-1004), folderId (C-1175, preparada en F1 r14). Los números de r14 son nuevos; el fenómeno, no. Mismo criterio que r12 F7 §4 y r13 F7 §4. Lo que SÍ se prepara de F2 son las dos novedades que ningún claim enuncia (§1 n.º 2 y 3): el fin del silencio con autocura run 7 ("autocura": 0 claims) y el primer fallo desde r8 (precedente C-856: fallos de runs concretos sí son claims).
- **F4 r14, resto (V83–V89 cerrados por título, discrepancia de conteo del Vault 240 vs 157):** los Docs V83–V89 son un cierre por título, no una lectura con sustancia; la discrepancia de conteo del Vault queda con causa NO_SÉ (hueco local, no sale). No se prepara.
- **F5 grietas:** al cierre de este frente F5 sigue corriendo (directorio vacío); por el precedente de r12/r13 es monitor puro. Si produce una lectura SÉ, su preparación corresponde a una continuación o a la ronda siguiente.
- **F6 H-SIK r14:** medición en curso (declaración de falsador + reproducción de r13), síntesis pendiente al cierre de este frente (ver §3). Si su veredicto es SÉ, su preparación corresponde a una continuación o a la ronda siguiente — no se anticipa sin el producto.
- **C-1174/C-1175/C-1176:** ya preparadas en F1 r14 (PREPARADO, script con guarda de orden). No se duplican.

## §4b. Inscripción en el dataset — N-16 sigue, sin re-decidir

La propuesta con opciones A/B/C ya existe (N-16, recomendada C; `ronda_13/ejecucion_f7/propuesta_inscripcion_dataset_r13.md`, DC-R13-F7-01). F7 no la re-decide ni la re-prepara. Novedad de r14 que la toca: M-63 produjo `columna_incertidumbre_r14.csv` (u = 0,0604 ± 0,0050, escala común para los 30 nodos, resultado NO inscripción) — bajo la opción C, el anexo de incertidumbre crecería en un ítem (la columna + los veredictos M-63/M-64/M-65); el conjunto de opciones no cambia. M-63/M-64/M-65 siguen sin inscribir sin decisión (dataset 30 filas, sha 0852d58f…, verificado al cierre).

## §5. Verificación en el corpus (grep propio, 2026-11-14, corpus 1.168)

- Ninguna de las 3 propuestas tiene claim que la enuncie (detalle por lectura en su archivo: "CORR-P32" 0; "ENDPOINTS" 0; "graph_v10.6" 0; "autocura" 0; "run 97" 0; "primer fallo" 0; "silencio del clúster" 0).
- "404": 14 claims, ninguno sobre el Doc 32. "tasa de fallo": 2 claims (C-856, C-999, ventanas r2/r3). "3,3": 1 claim (C-227, falso positivo). "29/30": 1 claim (C-1169, falso positivo). "silencio": 11 claims, episodios r3/r4 y viejos. "expand-alcance": 12 claims, otros runs.
- Corpus intacto al cierre: 1.168 líneas, sha 7deb15ff…; dataset intacto: 30 filas + cabecera, sha 0852d58f…

## §6. Reversión

Retirar esta carpeta. Si algún claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
