# LECTURAS PREPARADAS — RONDA 13, F7 (índice)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r13 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus (corpus vivo verificado al cierre: 1.168 líneas, sha 7deb15ff…). La única absorción posible de la ronda es F1 (C-1174/C-1175, condicionada a orden nueva).
- **Formato:** mismo que `ronda_12/ejecucion_f7/preparadas_r12.md` (formato `lecturas_canonicas_r10.md`).

## §1. Propuestas (1, SÉ)

| # | Lectura | Archivo | ID proyectado | Dedup máx. (Jaccard, umbral 0,5) |
|---|---|---|---|---|
| 1 | Panteón-96 fuera del Doc índice (F4): 0/96 como voces fuera; 0/61 encontradas; 2.ª atestación del conteo 96 (v10.4); carpeta Drive vacía; M-55 re-verificado con regla estricta | `lectura_panteon96_fueradoc_r13.md` | C-1176 (supone F1 aplicada; si no, reasignar) | 0,1761 vs C-936; 0 pares ≥ 0,5 |

- **Máx. global:** 0,1761. **0 pares ≥ 0,5.** Una sola propuesta (sin pares entre propuestas).
- **Dedup verificado dos veces, idéntico cifra por cifra:** corrida inline previa + `_dedup_f7_r13.py` (extracción del bloque JSON de la lectura, método r9). Salida: `dedup_f7_r13.json`.
- **Proyección si se absorbe (sola, F1 no aplicada):** claims 1.168 → 1.169, hash_real 1154 → 1155, provenance 354 → 355 (la fuente —`nombres_fuera_doc_r13.md` 024e52c3…— no está en provenance hoy, verificado por grep: 0 ocurrencias), SE 1034 → 1035.
- **Proyección si se absorbe tras F1 (C-1174/C-1175 aplicadas):** claims 1.170 → 1.171, hash_real 1156 → 1157, provenance 356 → 357, SE 1036 → 1037, ID C-1176.

## §2. B1 — sin cambio

`estado_b1_r13.md`: variante preparada no elegida. Archivos intactos (claims.jsonl.nuevo_B1 1.148 líneas, sha 3e745468…, idéntico a r11 y r12; propuestas_ola2_B1.jsonl sha e6ae7f04…). Revivirla seguiría exigiendo revertir B+B2. F1 r13 (C-1174/C-1175) no colisiona con sus IDs (C-1144..C-1153, ocupados por B); la propuesta de este frente (C-1176 proyectada) tampoco.

## §3. R2-25 — no es de este frente

N-14 (vía A adopción canónica o vía B registro de ejecución con falsador) es trabajo de **F6** (T2, en paralelo; en el momento de cerrar este frente F6 tiene la declaración de falsador H-SIK r13 escrita y la medición `reuse_sik_r13.json` corrida, sin síntesis aún). F7 no la evalúa: sería pisar su rincón. Baseline vigente: juicio r11 (`ronda_11/ejecucion_f7/juicio_r2_25.md`) — **NO se eleva, queda CONJETURO**; vía B EJECUTADA en r12 — FALLA_F4. Si F6 r13 produce un veredicto SÉ, su preparación como claim corresponde a F7 en una continuación o a la ronda siguiente.

## §4. Lo que r13 produjo y NO se prepara como claim (con motivo)

- **M-60 CONFIRMA, M-61 NO_CONFIRMA, M-62 CONFIRMA (F3):** veredictos SÉ con falsador pre-declarado y datos con sha — pero en 1.168 claims **no hay precedente de veredictos de medición como claims** (grep: "M-60|M-61|M-62" 0; "NO_CONFIRMA" 0). La práctica de 12 rondas es que las mediciones se depositan como resultados (JSON de 15 claves + datos + shas) y entran al corpus por **inscripción en el dataset** — cuya propuesta se prepara como documento en `propuesta_inscripcion_dataset_r13.md` (0 filas nuevas de M-56..M-62; opciones A/B/C, sin elegir), no como claims.
- **F2 estado vivo (stub run 203, flow 0,0 %, tg_audit 0/0, silencio del clúster, bifurcación, 5.º token 401, bots 4/4):** todo es recurrencia de fenómenos ya enunciados como claims: stub "unreachable" (C-792/C-851/C-1098), flow 0,0 % crítico (C-794/C-852/C-1098), tg_audit 0/0 (C-853/C-906), silencio de escritores con slots perdidos (C-1000/C-1001/C-1006), bifurcación de la cadena viva (C-924/C-1004), 5.º token 401 MUERTO (C-650). Los números de r13 son nuevos; el fenómeno, no. Mismo criterio que r12 F7 §4 con el episodio run 203. No se prepara.
- **F5 grietas:** monitor puro, todo sin cambio (G03 inserción 2026-11-21; G05 blob 11.ª vez sin cambio; folderId 5.ª lectura confirmando CORR-FOLDERID-R12 — que ya es C-1175, preparada en F1 r13; H-SUELO 7.ª medición sin reaparición; G02 vías agotadas). Ninguna lectura nueva. No se prepara.
- **F4 r13, los 8 nombres extra de la base histórica** (Kairos, Anti-Colmena, Nexus, Forja, Analista-Z, Heredera Eco, Colmena Omega, Pensador Abstracto): F4 los excluye explícitamente (H4: otro sistema, 28 filas, sin '96'). No se promueven. No se prepara.
- **F6 H-SIK r13:** medición corrida, síntesis pendiente al cierre de este frente (ver §3). Si su veredicto es SÉ, su preparación corresponde a una continuación o a la ronda siguiente — no se anticipa sin el producto.
- **C-1174/C-1175:** ya preparadas en F1 r13 (PREPARADO, script con guarda de orden). No se duplican.

## §5. Verificación en el corpus (grep propio, 2026-11-14, corpus 1.168)

- Ninguna de las propuestas tiene claim que la enuncie (detalle por lectura en su archivo: "fuera del Doc" 0; "0/96" 0; "v10.4" 2 menciones del texto de Qualia #738, no del Doc; "CREATIVA Nyx" 3 menciones en el Doc o espejos locales, no 0 ocurrencias fuera).
- Corpus intacto al cierre: 1.168 líneas, sha 7deb15ff…; dataset intacto: 30 filas + cabecera, sha 0852d58f…

## §6. Reversión

Retirar esta carpeta. Si algún claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
