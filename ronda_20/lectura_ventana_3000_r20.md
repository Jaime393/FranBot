# LECTURA VENTANA 30/0/0 — PROPUESTA DE CLAIM (RONDA 20, FASE 1, F7 — CONTINUACIÓN)

- **Fecha:** 2026-11-15. **Orden:** encargo de continuación F7 r20 (nota 2 del §4 de `preparadas_r20.md`).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_19/ejecucion_f7/lectura_ventana_2613_r19.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

VENTANA 30/0/0 EN RONDA 20 (F2, 2026-11-15): 30 runs, 0 fallos, 0 cancelados — cuarto descenso seguido (13,3 → 6,7 → 3,3 → 0,0). Que los runs salgan en verde no dice nada del estado: los stubs 164–170 y 203–208 también fueron success.

## Por qué (C-2, C-3, C-9)

- Precedente: C-1184 (ventana 25/30, 16,7%, r16), C-1189 (ventana 24/30, 20,0%, r17), C-1192 (ventana 26/30, 13,3%, r18) y C-1196 (ventana 26/1/3, 3,3%, r19) son el mismo patrón — la tasa de fallo de la ventana de 30 runs se enuncia como claim cuando cambia de régimen. En r20 la tasa llega a 0,0% por cuarta vez seguida en descenso y vuelve al 0,0% de r9/r11/r12/r13, con cero fallos y cero cancelados.
- La fuente es `estado_vivo_r20.md` (sha 00897d6e…), 2026-11-15 ~07:05–07:50Z, con la serie completa r8–r20 (§9) y la ventana 21:03:59Z → 07:07:32Z (§2). Bot-audit run 44 (21:27:35Z, workflow_dispatch) es success; bot-audit run 40 salió de la ventana por antigüedad; gap máximo 117,4 min y récord de 174,4 min sin superar — esos tres datos quedan en la fuente, no en el claim (lección r17/r18 §1b: titular de régimen, sin la serie completa ni el boilerplate de la ronda anterior).
- C-7: esta lectura no afirma que el vivo se haya recuperado — la tasa cuenta runs, no el estado (los stubs 203–208 fueron success; el estado completo lleva ausente ~37 h 51 min, ver lectura del stub). El descenso es de la tasa de fallo de runs, no del estado.
- **Reescritura por dedup (el método es el árbitro):** la primera redacción dio 0,5532 vs C-1196 (≥ 0,5) porque repetía la plantilla de r19 — serie con etiquetas, salida de run 40, gap/récord y el caveat literal. Se reescribió con la lección r17/r18 §1b: solo el rango de tasas sin etiquetas de ronda, sin gap/récord ni run 40, caveat reformulado ("salgan en verde"). Valor final: ver `dedup_f7_r20.json`.
- Cara que toca: ninguna cara cierra; es seguimiento del estado vivo (observabilidad).

## Verificación en el corpus (grep propio, 2026-11-15, corpus 1.192)

- "30/0/0": 0 claims. "cuarto descenso": 0 claims. "0,0 %": 0 claims. "salgan en verde": 0 claims.
- "0,0%": 5 claims — C-1179, C-1182, C-1184, C-1189, C-1192 (claims anteriores de la serie de ventanas que citan 0,0% como antecedente; ninguno enuncia la ventana r20 ni el cuarto descenso).
- "cuarto": 5 claims — C-667, C-1016, C-1102, C-1190 (cuarto valor, cuatro arbitrajes, ARBITRAJE 1a, run 206 cuarto stub) + 1 fuera del campo claim (C-568, motivo); ninguno dice "cuarto descenso".
- **Conclusión: la lectura no tiene claim. Se prepara este (tras la reescritura por dedup; valor final en `dedup_f7_r20.json`).**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1200; corpus 1.192; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "VENTANA 30/0/0 EN RONDA 20 (F2, 2026-11-15): 30 runs, 0 fallos, 0 cancelados — cuarto descenso seguido (13,3 → 6,7 → 3,3 → 0,0). Que los runs salgan en verde no dice nada del estado: los stubs 164–170 y 203–208 también fueron success.",
  "estado": "SE",
  "fuente": "ronda_20/ejecucion_f2/estado_vivo_r20.md",
  "hash": "sha256:00897d6ea3a88bb10df3b87037319bfa6c598824ff314039b890317cbdaf2a09",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_20/ejecucion_f2/estado_vivo_r20.md — PREPARADA en ronda 20 F7 (continuación), NO APLICADA. Dedup r20: ver dedup_f7_r20.json (umbral 0,5; 0 duplicados). Antecedentes: C-1184 (r16), C-1189 (r17), C-1192 (r18), C-1196 (r19) — serie de tasas de ventana."
}
```

- **Hash:** sha256 del documento que registra la lectura (`estado_vivo_r20.md`; sha verificado por `sha256sum` 2026-11-15).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.192):** ver `dedup_f7_r20.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
