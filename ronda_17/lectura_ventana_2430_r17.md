# LECTURA VENTANA 24/30 (20,0%) — PROPUESTA DE CLAIM (RONDA 17, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r17 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_16/ejecucion_f7/lectura_ventana_167_r16.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

VENTANA 24/30 EN RONDA 17 (F2, 2026-11-14): 6 fallos de 30 runs (20,0%), cuarta ronda consecutiva distinta de 0,0% y la peor de la serie (r14 3,3%, r15 6,7%, r16 16,7%). Lo nuevo: dos fallos por workflow_dispatch con 2 segundos de diferencia — TG Webhook Register run 44 (17:04:08Z, segundo consecutivo tras el run 43) y miu-expand-alcance run 99 (17:04:10Z, tercero consecutivo: 97, 98, 99); quién o qué los disparó es NO_SÉ. Tercer fallo nuevo: miu-cablear-oracle-v28 run 17 (18:16:07Z, schedule). Los 3 fallos restantes se heredan de r16 (bot-audit 39, expand-alcance 98, TG Webhook 43). El gap máximo entre runs consecutivos baja a 98,7 min; el récord de 174,4 min sale de la ventana.

## Por qué (C-2, C-3, C-9)

- Precedente: el corpus inscribe cada escalón de la serie de ventanas como claim (C-1179: primer fallo, r14; C-1182: segundo fallo, r15; C-1184: ventana 25/30, 16,7%, r16). Lo nuevo aquí es el cuarto escalón consecutivo y el peor de la serie (20,0%), con un fenómeno que ningún claim enuncia: dos fallos por workflow_dispatch con 2 segundos de diferencia, y el tercer fallo consecutivo del mismo workflow (expand-alcance 97, 98, 99).
- La fuente es la medición F2 r17 (`estado_vivo_r17.md`, sha 70d56cff…; `runs_recientes.json`), 2026-11-14 ~18:36–18:39Z, ventana 09:45:14Z → 18:22:19Z. La tasa cuenta runs; los runs success escribieron stubs (los runs 164–167, 203–206 fueron success y escribieron stubs), así que la tasa no mide la calidad del estado.
- C-7: esta lectura no afirma qué falló dentro de cada workflow: los logs de Actions son inaccesibles (403 verificado en ciclos anteriores). Tampoco afirma quién disparó los dos dispatch: es NO_SÉ. El gap máximo de 98,7 min no supera el récord de 174,4 min; la cadencia anómala de los escritores (~6–7 h contra crons de 15–30 min) sigue, pero es el mismo fenómeno de r16, no un extremo nuevo.
- Cara que toca: d09 L20 (ventana de runs) — la ventana empeora un escalón más; la cara sigue abierta.

## Verificación en el corpus (grep propio, 2026-11-14, corpus 1.181)

- "24/30": 0 claims. "20,0": 2 claims — falsos positivos (tasas de otros fenómenos, no de la ventana de runs). "run 44": 0 claims. "run 99": 0 claims. "run 17": 0 claims. "workflow_dispatch": 3 claims — C-567 (ráfagas manuales de Self-Diagnosis, runs 128–133), C-857 (censo del workflow expand-alcance), C-1101 (run de bot-audit); ninguno sobre los dispatch fallidos de r17 ni sobre fallos consecutivos. "97, 98, 99": 0 claims. "98,7": 0 claims.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1189; corpus 1.181; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "VENTANA 24/30 EN RONDA 17 (F2, 2026-11-14): 6 fallos de 30 runs (20,0%), cuarta ronda consecutiva distinta de 0,0% y la peor de la serie (r14 3,3%, r15 6,7%, r16 16,7%). Lo nuevo: dos fallos por workflow_dispatch con 2 segundos de diferencia — TG Webhook Register run 44 (17:04:08Z, segundo consecutivo tras el run 43) y miu-expand-alcance run 99 (17:04:10Z, tercero consecutivo: 97, 98, 99); quién o qué los disparó es NO_SÉ. Tercer fallo nuevo: miu-cablear-oracle-v28 run 17 (18:16:07Z, schedule). Los 3 fallos restantes se heredan de r16 (bot-audit 39, expand-alcance 98, TG Webhook 43). El gap máximo entre runs consecutivos baja a 98,7 min; el récord de 174,4 min sale de la ventana.",
  "estado": "SE",
  "fuente": "ronda_17/ejecucion_f2/estado_vivo_r17.md",
  "hash": "sha256:70d56cff5a985e9677abce9db8f381d59d9a2c26a5f5c1fcd3c7da63a0286cfe",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_17/ejecucion_f2/estado_vivo_r17.md + runs_recientes.json — PREPARADA en ronda 17 F7, NO APLICADA. Dedup r17: ver dedup_f7_r17.json (umbral 0,5; 0 duplicados). Antecedentes: C-1184 (ventana 25/30, 16,7%, r16), C-1182 (segundo fallo, r15), C-1179 (primer fallo, r14)."
}
```

- **Hash:** sha256 del documento que registra la lectura (`estado_vivo_r17.md`; sha verificado por `sha256sum` 2026-11-14).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.181):** ver `dedup_f7_r17.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
