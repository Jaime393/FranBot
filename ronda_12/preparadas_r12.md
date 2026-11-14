# LECTURAS PREPARADAS — RONDA 12, F7 (índice)

- **Fecha:** 2026-11-13. **Orden:** mapa FASE 0 r12 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus (corpus vivo verificado al cierre: 1.168 líneas, sha 7deb15ff…). La única absorción de la ronda es F1 (C-1168..C-1173, N-12 ordenada y aplicada 2026-11-13 18:43 -05, verificada por mí: claims 7deb15ff…, provenance dbe4a490…, resumen 315b80b5…, audit ok=340).
- **Formato:** mismo que `ronda_11/ejecucion_f7/preparadas_r11.md` (formato `lecturas_canonicas_r10.md`).

## §1. Propuestas (2, todas SÉ)

| # | Lectura | Archivo | ID proyectado | Dedup máx. (Jaccard, umbral 0,5) |
|---|---|---|---|---|
| 1 | Extracción Panteón-96 (F4): 35 con nombre + 61 sin nombre, con metadatos por voz; D3, D4, cruce M-55 | `lectura_panteon96_r12.md` | C-1174 | 0,1689 vs C-838; 0 pares ≥ 0,5 |
| 2 | Causa del censo vacío del heartbeat (F2): escritor V151 → folderId `l` (404); V152 → `I` (existe) | `lectura_folderid_r12.md` | C-1175 | 0,1641 vs C-1171; 0 pares ≥ 0,5 |

- **Máx. entre propuestas:** 0,1250. **Máx. global:** 0,1689. **0 pares ≥ 0,5.**
- **Dedup verificado dos veces, idéntico cifra por cifra:** corrida inline previa + `_dedup_f7_r12.py` (extracción del bloque JSON de cada lectura, método r9 = FASE 0 r12). Salida: `dedup_f7_r12.json` (la copia inline queda en `dedup_f7_r12_inline.json`).
- **Proyección si se absorben:** claims 1.168 → 1.170, hash_real 1154 → 1156, provenance 354 → 356 (las 2 fuentes —`voces_panteon96_nombres.md` 528f6535…, `estado_vivo_r12.md` 5496f883…— no están en provenance hoy, verificado por grep: 0 ocurrencias), SE 1034 → 1036.

## §2. B1 — sin cambio

`estado_b1_r12.md`: variante preparada no elegida. Archivo intacto (1.148 líneas, sha 3e745468…, idéntico a r11). Revivirla seguiría exigiendo revertir B+B2. F1 r12 (C-1168..C-1173) no colisiona con sus IDs (C-1144..C-1153, ocupados por B).

## §3. R2-25 — no es de este frente

N-14 (vía A adopción canónica o vía B registro de ejecución con falsador) es trabajo de **F6** (T2, en paralelo; entregable `r2_25_via_r12.md`). F7 no la evalúa: sería pisar su rincón. Baseline vigente: juicio r11 (`ronda_11/ejecucion_f7/juicio_r2_25.md`) — **NO se eleva, queda CONJETURO**; el artefacto existe intacto (sha 845bab8e…), falta la adopción canónica o un registro de ejecución con falsador declarado.

## §4. Lo que r12 produjo y NO se prepara como claim (con motivo)

- **M-56 DIFERENCIA, M-57 NO_CONFIRMA, M-59 CONFIRMA (F3):** veredictos SÉ con falsador pre-declarado y datos con sha — pero en 1.168 claims **no hay precedente de veredictos de medición como claims** (grep: "M-56|M-57|M-59" 0; "NO_CONFIRMA" 0; "M-5x/M-4x" solo falsos positivos C-819/C-1172). La práctica de 11 rondas es que las mediciones se depositan como resultados (JSON de 15 claves + datos + shas) y entran al corpus por **inscripción en el dataset**, que es decisión de la ronda 13 o de una orden nueva (mapa r12 §F3). Prepararlas como claims inventaría una vía de absorción sin decisión. Se documenta el juicio para que el principal lo vea y lo revierta si quiere.
- **M-58 NO_SÉ (F3):** segunda vía agotada (tesis Bottura sin z-stacks; suplemento inaccesible por 3 rutas). Es un hueco local por la regla SÉ refinada (orden 16:51): no se prepara, no sale.
- **Episodio run 203 "unreachable" (F2):** el fenómeno ya está enunciado como claim (C-792 run 200, C-851, C-1098 — mismo stub, mismo tamaño 329 B). El run 203 es una recurrencia del síntoma, no una lectura nueva; y es transitorio (si run 204 restaura, el hecho caduca). No se prepara. Lo durable del frente —la causa folderId— sí se prepara (§1, pieza 2).
- **H-SIK-004/H-SIK-005 (F6):** veredicto pendiente de F6 (T2, en paralelo). Si F6 lo produce como lectura SÉ, su preparación como claim corresponde a F7 en una continuación o a la ronda siguiente — no se anticipa sin el producto.

## §5. Verificación en el corpus (grep propio, 2026-11-13, corpus 1.168 post-N-12)

- Ninguna de las 2 lecturas tiene claim que la enuncie (detalle por lectura en su archivo: "M-55" 0 claims; "16 nuevas" 0; "Pensador Abstracto" 4 incidentales; "folderId"/"14dw8tx" 0; síntoma stubs 7 menciones, causa 0).
- Corpus intacto al cierre: 1.168 líneas, sha 7deb15ff…; audit exit=0 (ok=340) re-corrido por mí tras N-12.

## §6. Reversión

Retirar esta carpeta. Si algún claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
