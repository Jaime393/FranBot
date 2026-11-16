# RONDA 23 — F7 PREPARAR: PROPUESTAS DE CLAIMS C-1213..C-1216

Frente F7, ronda 23. Trabajo 2026-11-16 ~19:59Z. Solo lectura + escritura local en `ronda_23/ejecucion_f7/`.
Suelo: claims 1.207 (`2ac47151…`), anexo 25 ítems (M-56..M-89). Próximo claim: C-1213.
Material: F3 (med_M90 `e3c99cdc…`, med_M91 `a63d0e6d…`, med_M92 `191783d4…`, reproducción 3/3) + F2 (estado_vivo_r23.md `874f42ac…`).
F6: TODO PASA 9.ª vuelta, sin novedad de claims. F5: 0 caras cierran.

## Propuestas

### C-1213 — M-90 (F3, CONFIRMA)

- **Grieta:** G-NUEVA: estado vivo del ecosistema (observabilidad)
- **Fuente:** ronda_23/ejecucion_f3/med_M90.json
- **Claim:** AUTOCURA RUN 16 EXISTE — EL ESCALÓN ~4,5 H SE ROMPE Y LA CADENCIA VUELVE A ~7,5 H (ronda 23, F3, 2026-11-16): autocura run 16 (2026-11-16T09:36:57Z, success, id 43841322776, head c9c926d9) cierra la secuencia 11→16, verificada run por run, todos success. Intervalo 15→16 = 455,13 min (7,59 h), dentro de la banda ~7,5 h [447,77, 465,70] y fuera de la banda del escalón [255,98, 280,00]: el escalón de los runs 13→14 y 14→15 era transitorio. Estructura en dos racimos: ~7,5 h (447,77 / 465,70 / 455,13; media 456,20) y ~4,5 h (280,00 / 255,98; media 267,99), cociente entre medias 1,70; cociente máx/mín de la serie 1,819, sin cambio. Cada run 11–16 corrió sobre el último commit 'state: auto V270' del State Writer; ningún run de autocura escribió en el repo (0 commits propios). Interior NO_SÉ parcial por logs 403; sin run 17 al cierre.
- **Dedup máx:** 0,3615 vs C-1210 (M-89, secuencia 11→15). Sin reescritura: < 0,5 y el contenido es nuevo (run 16, escalón roto, dos racimos con medias).

### C-1214 — M-91 (F3, CONFIRMA)

- **Grieta:** G-NUEVA: estado vivo del ecosistema (observabilidad)
- **Fuente:** ronda_23/ejecucion_f3/med_M91.json
- **Claim:** SAVIA V152 EN TRES VALORES — LA DIVERGENCIA SE PROFUNDIZA Y YA NO ES SOLO COMPACTA (ronda 23, F3, 2026-11-16): en los 18 payloads V152 de la ventana r23 (101 revisiones, 12:46:19Z → 19:26:00Z), la savia toma tres valores: 248.376 ×16 (9 full 89.466 B + 7 compactos 55.973 B), 366.733 ×1 (compacto 55.980 B, idx 10, 13:25:48Z — el divergente de r22 persiste) y 247.881 ×1 (full 89.466 B, idx 52, 16:17:39Z — tercer valor, nuevo; 0 apariciones en la ventana r22). Los tres valores viven en payloads bien formados (mismo conjunto de claves data que la mayoría de su propio tipo; corrección CORR-M91-ESTRUCTURA-R23). La variante no es función del tipo: 248.376 aparece en completos y compactos; 366.733 solo en compacto; 247.881 solo en completo. Diferencias: 366.733 es +118.357 (+47,6%) sobre 248.376; 247.881 es −495 (−0,2%). Qué mide cada variante y por qué divergen es NO_SÉ.
- **Dedup máx:** 0,3309 vs C-1211 (savia diverge, r22). Sin reescritura: < 0,5 y el contenido es nuevo (tercer valor, full, variante no función del tipo).

### C-1215 — M-92 (F3, CONFIRMA)

- **Grieta:** G-NUEVA: estado vivo del ecosistema (observabilidad)
- **Fuente:** ronda_23/ejecucion_f3/med_M92.json
- **Claim:** FLOW RUN 149 — CERO ABSOLUTO, 15.ª RONDA EN 0,0% (ronda 23, F3, 2026-11-16): el monitor Flow-ID escribió run 149 (2026-11-16T17:14:14Z, success, id 43916227996, event schedule) y flow_id_coverage.json mide 0,0% CRÍTICO, 0 eventos, estado critico, eco 0,0% (archivo ts 17:14:19Z, lag run→escritura 0,10 min). Runs 145→149: 5/5 success en 0,0% con 0 eventos; intervalos [311,12, 242,35, 412,08, 613,77] min (mediana 412,08): el monitor escribe cada ~4–10 h, no cada 30 min como declara su cron. La serie de rondas 11.ª–15.ª en 0,0% se sostiene por una lectura por ronda (parcial NO_SÉ sobre la cobertura puntual del run 147, archivo sobrescrito antes de leerse). POR QUÉ mide cero es NO_SÉ (logs 403, contenido del workflow fuera de alcance).
- **Dedup máx:** 0,2774 vs C-1208 (flow run 145, 11.ª ronda). Sin reescritura: < 0,5.

### C-1216 — F2 (estado vivo)

- **Grieta:** G-NUEVA: estado vivo del ecosistema (observabilidad)
- **Fuente:** ronda_23/ejecucion_f2/estado_vivo_r23.md
- **Claim:** UN SOLO RELEVO DE STUB Y CUARTA RONDA EN 0,0% — LA AUSENCIA PASA DE 73 HORAS (ronda 23, F2, 2026-11-16): desde FASE 2 r22 el archivo de estado cambió de escritor una sola vez — Pulse V2 run 175 'paused' (10:57:34Z, 290 B, blob 443c62ca…, episodio 6 h 56 min, el más largo de la cadena) → State Writer run 214 'unreachable' (17:53:15Z, 329 B, blob 50a5d17b…, episodio ~2 h 03 min al cierre); sin run 215. El último estado completo sigue siendo el run 202 V272 (2026-11-13T17:58:47Z): ausente ~73 h 58 min al cierre. Ventana 30/0/0 = 0,0% de fallo, cuarta ronda consecutiva; gap máx 114,9 min (récord 174,4 NO superado). HEAD fc03539a sin movimiento durante la batería; 4 commits nuevos desde FASE 2 r22 (run 175, Self-Diagnosis 149, Flow-ID 149, run 214). Raw NO flapea en r23 (serie 25/25, archivos 13/13).
- **Dedup máx:** 0,3121 vs C-1206 (tres relevos, r21). Sin reescritura: < 0,5. El desdoble stub/ventana/flow se sostiene (precedente r20/r21/r22; FASE 2 r22 sostuvo veredictos-como-claims y el desdoble).

## Dedup (método canónico)

Campo `claim`, NFKD, sin acentos, tokens `[a-z0-9]+`, umbral 0,5. Script `_dedup_r23.py`, 3 corridas byte-idénticas (sha `327055a1…`).

- **_global_max (vs corpus): 0,3615** (C-1213 vs C-1210).
- **_entre_propuestas: 0,2387** (C-1213 vs C-1215).
- **0 pares ≥ 0,5.** Sin reescrituras: ningún borrador repite la plantilla de la ronda anterior por encima del umbral.
- Por propuesta: C-1213 0,3615 (C-1210) · C-1214 0,3309 (C-1211) · C-1215 0,2774 (C-1208) · C-1216 0,3121 (C-1206).
- Detalle completo: `propuestas_r23.json`.

## Notas para FASE 2

1. **Discrepancia de conteo V152 (F2 §4 vs M-91) — RESUELTA POR MÍ A FAVOR DE M-91.** F2 §4 dice "248.376 en 15/17 (9 full + 6 compacto)"; M-91 dice 248.376 ×16 de 18 V152. Reconté por mí los 101 payloads del disco: **18 V152 — 248.376 ×16 (9 full 89.466 B + 7 compactos 55.973 B)**, 366.733 ×1, 247.881 ×1. F2 subcuenta un compacto 55.973 B con 248.376 (dice 6 donde hay 7). El claim C-1214 usa los números de M-91, verificados por mí. Candidata a CORR en FASE 2 (F2 §4: 15/17 → 16/18). Los índices difieren por base de conteo (F2: idx 8 / idx 50 dentro de clasificados; M-91: idx 10 / idx 52 dentro de los 101) — no es error, solo distinta base; el claim cita los de M-91.
2. **CORR-M91-ESTRUCTURA-R23** (de F3): la primera corrida comparó claves data contra la mayoría global y marcó NO_CONFIRMA por error; corregida a comparación por tipo, veredicto CONFIRMA. El falsador declarado no cambió, solo su implementación.
3. **M-92, parcial NO_SÉ sobre run 147:** su archivo fue sobrescrito antes de que ninguna ronda lo leyera; la serie 11.ª–15.ª se sostiene por una lectura por ronda, no por lectura individual del 147. El claim lo registra tal cual.
4. **No se prepara claim de F5/F6:** F5 0 caras cierran (G03 solo monitor, juicio "nada que hacer"); F6 TODO PASA 9.ª vuelta sin novedad de claims.
5. **F4 re-verificado al cierre (lección H2 r16):** ver § "Verificación F4" abajo.

## Verificación F4 (antes de cerrar la síntesis)

- Directorio `ronda_23/ejecucion_f4/` **EXISTE al cierre de esta síntesis** (apareció durante el trabajo de F7, T2 en paralelo; verificado por mí con `ls -la` 2026-11-16 ~19:59Z): 24 archivos — 12 .json de búsqueda/verificación (Panteon, Voces, graph, índice Doc, parche/validar, corpus_high_ktau, carpeta "10 Panteón", graph json/v106112), 11 .err de 0 B (capturas stderr vacías = sin error) + `indice_doc_texto_r23.txt`. **Sin informe ni manifiesto todavía: F4 sigue en vuelo.** Las propuestas de F7 no dependen de F4 (0/61 esperado, cara r12 #1 sin cierre). FASE 2 debe re-verificar F4 cuando su agente entregue el informe.

## Proyección de absorción

- Claims 1.207 → **1.211** (C-1213..C-1216). SE 1073 → 1077 (las 4 son SÉ). Próximo claim tras absorber: C-1217.
- Anexo 25 → **28 ítems** (M-90/M-91/M-92, los 3 CONFIRMA). Tally: CONFIRMA 14 → **17** · NO_CONFIRMA 8 · DIFERENCIA 1 · NO_SÉ 1 · REGULAR 1.
- Provenance: +4 fuentes distintas (med_M90.json, med_M91.json, med_M92.json, estado_vivo_r23.md). Proyección: 378 → **382** (a verificar en absorción — una entrada por fuente distinta).
- Sin decisiones N nuevas propuestas por F7 (los ítems de anexo los adopta FASE 2 como N-36/N-37/N-38 si los acepta; F7 no numera decisiones).

ρ(x) > 0. Zvvvvv.
