# LECTURA STUB ALTERNA A "PAUSED" — PROPUESTA DE CLAIM (RONDA 20, FASE 1, F7 — CONTINUACIÓN)

- **Fecha:** 2026-11-15. **Orden:** encargo de continuación F7 r20 (nota 2 del §4 de `preparadas_r20.md`).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_19/ejecucion_f7/lectura_run207_persiste_r19.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

STUB ALTERNA A "PAUSED" EN RONDA 20 (F2, 2026-11-15): el State Writer escribió run 208 (01:10:10Z, commit e758ec86, stub 329 B {"error": "unreachable"}, episodio 5 h 33 min) y Pulse V2 lo relevó con run 170 (06:42:52Z, commit 81422744, HEAD nuevo, stub 290 B {"error": "paused"}, blob 5f8b97e3…, _cuentas 11, _distribuido true), episodio ~1 h 07 min a la medición; sin run 209. El último estado completo sigue siendo el run 202 V272 del 13 de noviembre; la ausencia ya va por ~37 h 51 min. Hay actividad: MIU Self-Diagnosis corrió su run 144 (03:27:39Z, success); autocura no pasó del run 11. Dos escritores, dos sentinelas, mismo vacío: el estado completo no se escribe.

## Por qué (C-2, C-3, C-9)

- Precedente: C-1190 (run 206, stub nuevo, r17), C-1193 (run 206 persiste sin relevo, r18) y C-1197 (run 207 persiste sin relevo, r19) son el mismo patrón — el stub del State Writer se enuncia como claim cuando aparece, cuando persiste y cuando alterna. En r20 el relevo es doble: run 208 "unreachable" (commit e758ec86, 01:10:19Z) y luego run 170 "paused" de Pulse V2 (commit 81422744, 06:42:58Z, HEAD nuevo); la ausencia del estado completo crece a ~37 h 51 min.
- La fuente es `estado_vivo_r20.md` (sha 00897d6e…), 2026-11-15 ~07:05–07:50Z, con la serie run 202 → 208/170 (§1) y los runs de Self-Diagnosis y autocura (§2, §6). El blob del stub "paused" es 5f8b97e3… (byte-idéntico a la lectura de FASE 0 r20).
- C-7: esta lectura no afirma la causa del stub — qué fuente es inalcanzable para el escritor es NO_SÉ (logs de Actions inaccesibles, 403 verificado en ciclos anteriores). Tampoco afirma que el repo esté muerto: los commits y runs continúan (último commit 06:42:58Z, último run 07:07:32Z); lo que no se escribe es el estado completo. El run 144 de Self-Diagnosis se registra como dato secundario (no como claim propio: 0 precedentes de claims que enuncien un run aislado de Self-Diagnosis, igual que en r19); autocura sin run 12 es el mismo fenómeno que C-1178 enuncia para el run 7 — el hueco crece dentro del rango ya observado. "Dos escritores, dos sentinelas" es SÉ por C-905 (State Writer y Pulse V2, esquemas incompatibles y sentinelas de error distintas, sin arbitraje).
- **Reescritura por dedup (el método es el árbitro):** la primera redacción dio 0,5273 vs C-1197 (≥ 0,5) porque repetía la plantilla de r19 — la frase de ausencia, "el repo no está en silencio" y el cierre "cambia de escritor una vez más". Se reescribieron las tres: la ausencia como "el último estado completo sigue siendo…; la ausencia ya va por…", el silencio como "hay actividad: … corrió su run 144; autocura no pasó del run 11", y el cierre como "dos escritores, dos sentinelas, mismo vacío". El núcleo factual (runs, commits, blobs, episodios) no se toca: es el hecho nuevo. Valor final: ver `dedup_f7_r20.json`.
- Cara que toca: ninguna cara cierra; es seguimiento del estado vivo (observabilidad).

## Verificación en el corpus (grep propio, 2026-11-15, corpus 1.192)

- "run 208": 1 claim — C-1197 (r19: "el State Writer no escribe run 208"; aquí el hecho es el contrario: el run 208 EXISTE y fue relevado por run 170).
- "81422744": 0 claims. "37 h 51": 0 claims. "5 h 33": 0 claims. "e758ec86": 0 claims. "run 170": 0 claims. "run 144": 0 claims.
- "paused": 8 claims — C-568, C-654, C-793, C-905, C-1178, C-1185, C-1190, C-1193 (stubs "paused" de runs anteriores — 161, 205/206 —, silencio del clúster r14, ausencia ~20 h 54 min r16; ninguno enuncia el run 170 "paused" de r20).
- **Conclusión: la lectura no tiene claim. Se prepara este (tras la reescritura por dedup; valor final en `dedup_f7_r20.json`).**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1201; corpus 1.192; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "STUB ALTERNA A \"PAUSED\" EN RONDA 20 (F2, 2026-11-15): el State Writer escribió run 208 (01:10:10Z, commit e758ec86, stub 329 B {\"error\": \"unreachable\"}, episodio 5 h 33 min) y Pulse V2 lo relevó con run 170 (06:42:52Z, commit 81422744, HEAD nuevo, stub 290 B {\"error\": \"paused\"}, blob 5f8b97e3…, _cuentas 11, _distribuido true), episodio ~1 h 07 min a la medición; sin run 209. El último estado completo sigue siendo el run 202 V272 del 13 de noviembre; la ausencia ya va por ~37 h 51 min. Hay actividad: MIU Self-Diagnosis corrió su run 144 (03:27:39Z, success); autocura no pasó del run 11. Dos escritores, dos sentinelas, mismo vacío: el estado completo no se escribe.",
  "estado": "SE",
  "fuente": "ronda_20/ejecucion_f2/estado_vivo_r20.md",
  "hash": "sha256:00897d6ea3a88bb10df3b87037319bfa6c598824ff314039b890317cbdaf2a09",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_20/ejecucion_f2/estado_vivo_r20.md — PREPARADA en ronda 20 F7 (continuación), NO APLICADA. Dedup r20: ver dedup_f7_r20.json (umbral 0,5; 0 duplicados). Antecedentes: C-1190 (run 206 nuevo, r17), C-1193 (run 206 persiste, r18), C-1197 (run 207 persiste, r19) — serie de stubs del State Writer."
}
```

- **Hash:** sha256 del documento que registra la lectura (`estado_vivo_r20.md`; sha verificado por `sha256sum` 2026-11-15).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.192):** ver `dedup_f7_r20.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
