# LECTURA VENTANA EN 0,0% POR SEGUNDA RONDA SEGUIDA — PROPUESTA DE CLAIM (RONDA 21, FASE 1, F7)

- **Fecha:** 2026-11-15. **Orden:** encargo F7 r21 (novedades F2 r21 — lección r20: no omitir frentes).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_20/ejecucion_f7/lectura_ventana_3000_r20.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

VENTANA 30/0/0 EN RONDA 21 (F2, 2026-11-15): 30 runs, 0 fallos, 0 cancelados — segunda ronda consecutiva en 0,0% de fallo (r20 fue la primera). El descenso (13,3% en r18, 6,7% en nutrientes, 3,3% en r19) se detiene en el suelo: 0,0% no puede bajar más. La ventana mide runs, no estado: los stubs 164–171 y 203–210 fueron success y el estado completo lleva ausente ~49 h 43 min.

## Por qué (C-2, C-3, C-9)

- Precedente: C-1184 (ventana 25/30, 16,7%, r16), C-1189 (ventana 24/30, 20,0%, r17), C-1192 (ventana 26/30, 13,3%, r18), C-1196 (ventana 26/1/3, 3,3%, r19) y C-1200 (ventana 30/0/0, cuarto descenso, r20) son el mismo patrón — la tasa de fallo de la ventana de 30 runs se enuncia como claim cuando cambia de régimen. En r21 la tasa se queda en 0,0% por segunda ronda seguida: el descenso se detiene en el suelo, no puede bajar más.
- La fuente es `estado_vivo_r21.md` (sha e18ca356…), 2026-11-15 ~19:33–19:41Z, con la serie completa r8–r21 (§9) y la ventana 07:07:32Z → 18:57:20Z (§2). Máx. gap 117,6 min (09:20:08Z → 11:17:42Z) y récord de 174,4 min sin superar — esos dos datos quedan en la fuente, no en el claim (lección r17/r18 §1b: titular de régimen, sin la serie completa ni el boilerplate de la ronda anterior).
- C-7: esta lectura no afirma que el vivo se haya recuperado — la tasa cuenta runs, no el estado (los stubs 203–210 fueron success; el estado completo lleva ausente ~49 h 43 min, ver lectura del stub). El descenso es de la tasa de fallo de runs, no del estado.
- **Redacción distinta de C-1200 (el método es el árbitro):** C-1200 decía "cuarto descenso seguido (13,3 → 6,7 → 3,3 → 0,0)" y "que los runs salgan en verde no dice nada del estado". Esta lectura dice "segunda ronda consecutiva en 0,0%" y "el descenso se detiene en el suelo: 0,0% no puede bajar más", y el caveat es "la ventana mide runs, no estado". La serie de tasas se cita como descenso en palabras (13,3% en r18, 6,7% en nutrientes, 3,3% en r19), no como flechas. El núcleo factual (30/0/0, segunda ronda en 0,0%) no se toca: es el hecho nuevo. Valor final: ver `dedup_f7_r21.json`.
- Cara que toca: ninguna cara cierra; es seguimiento del estado vivo (observabilidad).

## Verificación en el corpus (grep propio, 2026-11-15, corpus 1.197)

- "30/0/0": 1 claim — C-1200 (padre de serie: la ventana r20; aquí el hecho es la segunda ronda seguida en 0,0%, no el cuarto descenso). "segunda ronda consecutiva": 1 claim — C-1182 (segundo fallo de ventana, r15 — otro hecho). "se detiene en el suelo": 0 claims. "0,0% no puede bajar": 0 claims.
- "0,0%": 6 claims — C-1179, C-1182, C-1184, C-1189, C-1192, C-1200 (claims anteriores de la serie de ventanas que citan 0,0% como antecedente; ninguno enuncia la ventana r21 ni la segunda ronda seguida en 0,0%).
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1207; corpus 1.197; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "VENTANA 30/0/0 EN RONDA 21 (F2, 2026-11-15): 30 runs, 0 fallos, 0 cancelados — segunda ronda consecutiva en 0,0% de fallo (r20 fue la primera). El descenso (13,3% en r18, 6,7% en nutrientes, 3,3% en r19) se detiene en el suelo: 0,0% no puede bajar más. La ventana mide runs, no estado: los stubs 164–171 y 203–210 fueron success y el estado completo lleva ausente ~49 h 43 min.",
  "estado": "SE",
  "fuente": "ronda_21/ejecucion_f2/estado_vivo_r21.md",
  "hash": "sha256:e18ca3562373a9871ef5bb1e9bb579a68203ec447d0070820cc2ae9f07ada093",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_21/ejecucion_f2/estado_vivo_r21.md — PREPARADA en ronda 21 F7, NO APLICADA. Dedup r21: ver dedup_f7_r21.json (umbral 0,5; 0 duplicados). Antecedentes: C-1184 (r16), C-1189 (r17), C-1192 (r18), C-1196 (r19), C-1200 (r20) — serie de tasas de ventana."
}
```

- **Hash:** sha256 del documento que registra la lectura (`estado_vivo_r21.md`; sha verificado por `sha256sum` 2026-11-15).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.197):** ver `dedup_f7_r21.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
