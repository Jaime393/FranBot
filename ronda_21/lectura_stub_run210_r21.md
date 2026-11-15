# LECTURA TRES RELEVOS DE STUB Y LA AUSENCIA PASA DE 49 HORAS — PROPUESTA DE CLAIM (RONDA 21, FASE 1, F7)

- **Fecha:** 2026-11-15. **Orden:** encargo F7 r21 (novedades F2 r21 — lección r20: no omitir frentes; continuación innecesaria si se prepara todo en el acto).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_20/ejecucion_f7/lectura_stub_paused_r20.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

TRES RELEVOS DE STUB Y LA AUSENCIA PASA DE 49 HORAS (ronda 21, F2, 2026-11-15): desde FASE 2 r20 el archivo de estado cambió de escritor tres veces — run 209 "unreachable" (08:08:13Z, episodio 6 h 13 min), Pulse V2 run 171 "paused" (14:21:03Z, episodio 1 h 25 min) y State Writer run 210 "unreachable" (15:45:46Z, commit 85c3d72d, blob be29c5b7…, episodio ~3 h 56 min al cierre); sin run 211. El último estado completo sigue siendo el run 202 V272 del 13 de noviembre: la ausencia llega a ~49 h 43 min. Novedad: autocura vuelve a correr — runs 12 (09:20:08Z) y 13 (17:05:50Z) tras cinco rondas sin run nuevo salvo el 11; Self-Diagnosis run 146 escribe el HEAD 5d9a196e. El relevo de escritores no devuelve el estado: el vacío sigue.

## Por qué (C-2, C-3, C-9)

- Precedente: C-1190 (run 206, stub nuevo, r17), C-1193 (run 206 persiste sin relevo, r18), C-1197 (run 207 persiste sin relevo, r19) y C-1201 (run 208 "unreachable" relevado por run 170 "paused", r20) son el mismo patrón — el stub del State Writer se enuncia como claim cuando aparece, cuando persiste y cuando alterna. En r21 el hecho nuevo es triple: tres relevos desde FASE 2 r20 (209 → 171 → 210), la ausencia que pasa de 49 h, y autocura que vuelve a correr (runs 12 y 13) tras cinco rondas sin run nuevo salvo el 11.
- La fuente es `estado_vivo_r21.md` (sha e18ca356…), 2026-11-15 ~19:33–19:41Z, con la serie run 202 → 210 (§1) y los runs de Self-Diagnosis y autocura (§2, §6). El blob del stub actual es be29c5b7… (byte-idéntico a la lectura de FASE 0 r21). La serie completa run 202 → 210 fue re-medida por raw en 15/17 commits (los 2 más nuevos por API contents con blob verificado, por lag de CDN — sin incidencia CORR-RAW nueva).
- C-7: esta lectura no afirma la causa del stub — qué fuente es inalcanzable para el escritor es NO_SÉ (logs de Actions inaccesibles, 403 verificado en ciclos anteriores). Tampoco afirma que el repo esté muerto: los commits y runs continúan (último commit 18:04:50Z, último run 18:57:20Z); lo que no se escribe es el estado completo. Autocura runs 12 y 13 se registran como dato nuevo (no como claim propio: 0 precedentes de claims que enuncien runs aislados de autocura, igual que Self-Diagnosis run 144 en r20); ningún run de autocura escribió nada en el repo, qué hizo fuera es NO_SÉ.
- **Redacción distinta de C-1201 (el método es el árbitro):** C-1201 contaba un solo relevo (208 → 170) con la frase de ausencia, el silencio ("hay actividad") y el cierre ("dos escritores, dos sentinelas, mismo vacío"). Esta lectura cuenta tres relevos con sus episodios, la ausencia en horas (~49 h 43 min) y la novedad de autocura; el cierre es otro ("el relevo de escritores no devuelve el estado"). El núcleo factual (runs, commits, blobs, episodios) no se toca: es el hecho nuevo. Valor final: ver `dedup_f7_r21.json`.
- Cara que toca: ninguna cara cierra; es seguimiento del estado vivo (observabilidad).

## Verificación en el corpus (grep propio, 2026-11-15, corpus 1.197)

- "run 210": 0 claims. "run 211": 0 claims. "run 171": 0 claims. "be29c5b7": 0 claims. "49 h": 0 claims. "85c3d72d": 0 claims. "5d9a196e": 0 claims.
- "autocura run 13": 0 claims. "autocura run 12": 0 claims. "tres relevos": 0 claims.
- "paused": 9 claims — C-568, C-654, C-793, C-905, C-1178, C-1185, C-1190, C-1193, C-1201 (stubs "paused" de runs anteriores — 161, 205/206, 170 —, silencio del clúster r14, ausencia ~20 h 54 min r16; ninguno enuncia el run 171 "paused" de r21 ni los tres relevos).
- **Conclusión: la lectura no tiene claim. Se prepara este (tras verificar el dedup; valor final en `dedup_f7_r21.json`).**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1206; corpus 1.197; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "TRES RELEVOS DE STUB Y LA AUSENCIA PASA DE 49 HORAS (ronda 21, F2, 2026-11-15): desde FASE 2 r20 el archivo de estado cambió de escritor tres veces — run 209 \"unreachable\" (08:08:13Z, episodio 6 h 13 min), Pulse V2 run 171 \"paused\" (14:21:03Z, episodio 1 h 25 min) y State Writer run 210 \"unreachable\" (15:45:46Z, commit 85c3d72d, blob be29c5b7…, episodio ~3 h 56 min al cierre); sin run 211. El último estado completo sigue siendo el run 202 V272 del 13 de noviembre: la ausencia llega a ~49 h 43 min. Novedad: autocura vuelve a correr — runs 12 (09:20:08Z) y 13 (17:05:50Z) tras cinco rondas sin run nuevo salvo el 11; Self-Diagnosis run 146 escribe el HEAD 5d9a196e. El relevo de escritores no devuelve el estado: el vacío sigue.",
  "estado": "SE",
  "fuente": "ronda_21/ejecucion_f2/estado_vivo_r21.md",
  "hash": "sha256:e18ca3562373a9871ef5bb1e9bb579a68203ec447d0070820cc2ae9f07ada093",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_21/ejecucion_f2/estado_vivo_r21.md — PREPARADA en ronda 21 F7, NO APLICADA. Dedup r21: ver dedup_f7_r21.json (umbral 0,5; 0 duplicados). Antecedentes: C-1190 (run 206 nuevo, r17), C-1193 (run 206 persiste, r18), C-1197 (run 207 persiste, r19), C-1201 (relevo 208 → 170, r20) — serie de stubs del State Writer."
}
```

- **Hash:** sha256 del documento que registra la lectura (`estado_vivo_r21.md`; sha verificado por `sha256sum` 2026-11-15).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.197):** ver `dedup_f7_r21.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
