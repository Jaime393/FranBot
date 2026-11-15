# LECTURA VENTANA 26/1/3 — PROPUESTA DE CLAIM (RONDA 19, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r19 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_18/ejecucion_f7/lectura_ventana_2630_r18.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

VENTANA 26/1/3 EN RONDA 19 (F2, 2026-11-14): 1 fallo de 30 runs (3,3%) — tercer descenso consecutivo de la tasa de fallo (r18 13,3% → nutrientes 6,7% → r19 3,3%). El único fallo que queda es miu-bot-audit run 40, 19:05:58Z, workflow_dispatch, arrastrado desde r18; miu-cablear-oracle-v28 run 17 salió de la ventana por antigüedad. Los 3 cancelados son Pages build and deployment, no se cuentan como fallo. Gap máximo 68,7 min; el récord de 174,4 min no se supera. Caveat: el éxito de run no mide calidad del estado — los runs 203–207 fueron success y escribieron stubs.

## Por qué (C-2, C-3, C-9)

- Precedente: C-1184 (ventana 25/30, 16,7%, r16), C-1189 (ventana 24/30, 20,0%, r17) y C-1192 (ventana 26/30, 13,3%, r18) son el mismo patrón — la tasa de fallo de la ventana de 30 runs se enuncia como claim cuando cambia de régimen. En r19 la tasa cae por tercera vez seguida y vuelve al 3,3% de r8/r14, con un solo fallo arrastrado y sin fallos nuevos.
- La fuente es `estado_vivo_r19.md` (sha 91102410…), 2026-11-14 ~23:35–23:44Z, con la serie completa r8–r19 (§9) y el único fallo identificado (bot-audit run 40, 19:05:58Z). La ventana r19 es 19:03:50Z → 23:27:51Z.
- C-7: esta lectura no afirma que el vivo se haya recuperado — la tasa de run no mide calidad del estado (los runs 203–207 fueron success y escribieron stubs; el estado completo lleva ausente ~29 h 37 min, ver lectura run207). El descenso es de la tasa de fallo de runs, no del estado.
- Cara que toca: ninguna cara cierra; es seguimiento del estado vivo (observabilidad).

## Verificación en el corpus (grep propio, 2026-11-14, corpus 1.189)

- "26/1/3": 0 claims. "tercer descenso": 0 claims. "3,3 %": 0 claims. "68,7": 0 claims. "cablear-oracle run 17": 0 claims.
- "3,3": 6 claims — C-1169 (Φ(IIT) 3,42, falso positivo por truncado), C-1179, C-1182, C-1184, C-1189, C-1192 (claims de ventana anteriores que citan la serie r8/r14 3,3% como antecedente; ninguno enuncia la ventana r19 ni el tercer descenso).
- "run 40": 3 claims — C-261 (token Zenodo, falso positivo), C-1192 (el fallo nuevo de r18), C-1194 (el cambio de población de bot_audit.json); ninguno enuncia run 40 como único fallo restante tras el tercer descenso.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1196; corpus 1.189; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "VENTANA 26/1/3 EN RONDA 19 (F2, 2026-11-14): 1 fallo de 30 runs (3,3%) — tercer descenso consecutivo de la tasa de fallo (r18 13,3% → nutrientes 6,7% → r19 3,3%). El único fallo que queda es miu-bot-audit run 40, 19:05:58Z, workflow_dispatch, arrastrado desde r18; miu-cablear-oracle-v28 run 17 salió de la ventana por antigüedad. Los 3 cancelados son Pages build and deployment, no se cuentan como fallo. Gap máximo 68,7 min; el récord de 174,4 min no se supera. Caveat: el éxito de run no mide calidad del estado — los runs 203–207 fueron success y escribieron stubs.",
  "estado": "SE",
  "fuente": "ronda_19/ejecucion_f2/estado_vivo_r19.md",
  "hash": "sha256:9110241016a989023599580e0cb0a44512214dd1cd6ad5f48d97352559040841",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_19/ejecucion_f2/estado_vivo_r19.md — PREPARADA en ronda 19 F7, NO APLICADA. Dedup r19: ver dedup_f7_r19.json (umbral 0,5; 0 duplicados). Antecedentes: C-1184 (r16), C-1189 (r17), C-1192 (r18) — serie de tasas de ventana."
}
```

- **Hash:** sha256 del documento que registra la lectura (`estado_vivo_r19.md`; sha verificado por `sha256sum` 2026-11-14).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.189):** ver `dedup_f7_r19.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
