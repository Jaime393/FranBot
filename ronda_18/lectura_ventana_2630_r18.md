# LECTURA VENTANA 26/30 (13,3%) — PROPUESTA DE CLAIM (RONDA 18, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r18 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_17/ejecucion_f7/lectura_ventana_2430_r17.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

VENTANA 26/30 EN RONDA 18 (F2, 2026-11-14): 4 fallos de 30 runs (13,3%) — primer descenso tras cuatro escalones seguidos de subida (r14–r17, hasta 20,0%). Lo nuevo: las tres rachas de fallo se rompen — expand-alcance corre 100 y 101 en success tras 97/98/99; TG Webhook corre 45 en success tras 43/44; cablear-oracle corre 18 en success tras 16/17. El único fallo nuevo es miu-bot-audit run 40 (19:05:58Z, workflow_dispatch); los otros 3 se heredan de r17. El gap máximo entre runs consecutivos baja a 62,0 min; el récord de 174,4 min sigue fuera de la ventana. La tasa cuenta runs; no califica el estado que escriben.

## Por qué (C-2, C-3, C-9)

- Precedente: el corpus inscribe cada escalón de la serie de ventanas como claim (C-1179: primer fallo, r14; C-1182: segundo fallo, r15; C-1184: ventana 25/30, 16,7%, r16; C-1189: ventana 24/30, 20,0%, r17). Lo nuevo aquí no es otro escalón de subida sino el primer descenso: 13,3% tras cuatro subidas seguidas, con las tres rachas de fallo rotas en la misma ventana y un solo fallo nuevo.
- La fuente es la medición F2 r18 (`estado_vivo_r18.md`, sha e09feada…; `runs_recientes.json`), 2026-11-14 ~20:14–20:17Z, ventana 16:04:05Z → 20:11:40Z. La tasa cuenta runs; los runs success escribieron stubs (los runs 164–167, 203–206 fueron success y escribieron stubs), así que la tasa no mide la calidad del estado.
- C-7: esta lectura no afirma qué falló dentro de bot-audit run 40: los logs de Actions son inaccesibles (403 verificado en ciclos anteriores). Tampoco afirma que la recuperación sea tendencia: es un solo descenso tras cuatro subidas; la serie sigue en 13,3%, no en 0,0%. El gap máximo de 62,0 min no supera el récord de 174,4 min; la cadencia anómala de los escritores (~6–7 h contra crons de 15–30 min) sigue, pero es el mismo fenómeno de r16/r17, no un extremo nuevo.
- Cara que toca: d09 L20 (ventana de runs) — la ventana recupera un escalón; la cara sigue abierta.

## Verificación en el corpus (grep propio, 2026-11-14, corpus 1.185)

- "26/30": 0 claims. "13,3": 0 claims. "run 40": 1 claim — C-261, falso positivo (otro run 40, otro workflow). "run 100": 0 claims. "run 101": 0 claims. "run 45": 0 claims. "run 18": 0 claims. "97/98/99": 0 claims. "43/44": 0 claims. "16/17": 0 claims. "62,0": 0 claims.
- Falsos positivos revisados: "workflow_dispatch": 3 claims (C-567, C-857, C-1101; ninguno sobre el run 40 de bot-audit ni sobre rachas rotas); "20,0": 1 claim — C-1189 (la tasa de r17; esta lectura es 13,3%).
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1192; corpus 1.185; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "VENTANA 26/30 EN RONDA 18 (F2, 2026-11-14): 4 fallos de 30 runs (13,3%) — primer descenso tras cuatro escalones seguidos de subida (r14–r17, hasta 20,0%). Lo nuevo: las tres rachas de fallo se rompen — expand-alcance corre 100 y 101 en success tras 97/98/99; TG Webhook corre 45 en success tras 43/44; cablear-oracle corre 18 en success tras 16/17. El único fallo nuevo es miu-bot-audit run 40 (19:05:58Z, workflow_dispatch); los otros 3 se heredan de r17. El gap máximo entre runs consecutivos baja a 62,0 min; el récord de 174,4 min sigue fuera de la ventana. La tasa cuenta runs; no califica el estado que escriben.",
  "estado": "SE",
  "fuente": "ronda_18/ejecucion_f2/estado_vivo_r18.md",
  "hash": "sha256:e09feadaa21ab5b63357a107da4b242fff18a5b497829f1f1b8f9a8ce2828f06",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_18/ejecucion_f2/estado_vivo_r18.md + runs_recientes.json — PREPARADA en ronda 18 F7, NO APLICADA. Dedup r18: ver dedup_f7_r18.json (umbral 0,5; 0 duplicados). Antecedentes: C-1189 (ventana 24/30, 20,0%, r17), C-1184 (ventana 25/30, 16,7%, r16), C-1182 (segundo fallo, r15), C-1179 (primer fallo, r14)."
}
```

- **Hash:** sha256 del documento que registra la lectura (`estado_vivo_r18.md`; sha verificado por `sha256sum` 2026-11-14).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.185):** ver `dedup_f7_r18.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
