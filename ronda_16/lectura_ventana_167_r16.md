# LECTURA VENTANA 25/30 (16,7%) — PROPUESTA DE CLAIM (RONDA 16, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r16 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_15/ejecucion_f7/lectura_segundo_fallo_r15.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

VENTANA 25/30 (16,7% DE FALLOS, RONDA 16, F2, 2026-11-14): tercera ronda consecutiva distinta de 0,0% y la peor de la serie — r8 3,3%, r14 3,3%, r15 6,7%. A los 2 fallos de r15 se suman 3 nuevos, failure y schedule: miu-bot-audit run 39, 12:56:35Z; miu-expand-alcance run 98, 14:35:15Z, segundo consecutivo del mismo workflow tras el run 97; TG Webhook Register run 43, 14:37:22Z, que cierra la ventana. Bot-audit y TG Webhook no figuraban en la ventana de r15. La tasa cuenta runs; no califica el estado que escriben.

## Por qué (C-2, C-3, C-9)

- Precedente: el corpus ya enuncia fallos de runs concretos como claims (C-856: expand-alcance run 91, failure, 2026-11-13T03:49:36Z; C-1179: expand-alcance run 97, primer fallo desde r8; C-1182: cablear-oracle-v28 run 16, segundo fallo). Lo nuevo aquí son los 3 fallos concretos (bot-audit 39, expand-alcance 98, TG Webhook 43) y el hecho de serie (tercera ronda consecutiva distinta de 0,0%; la tasa sube de 6,7% a 16,7%, la peor de la serie; expand-alcance falla dos veces seguidas, 97 y 98; dos workflows —bot-audit y TG Webhook— entran por primera vez en la ventana de fallos).
- La fuente es la batería F2 r16 (`estado_vivo_r16.md`, sha e9e95687…; `runs_recientes.json`), medida 2026-11-14 ~14:48–14:53Z por API pública. Qué falló dentro de cada workflow es NO_SÉ (logs inaccesibles) y queda fuera del texto del claim. La ventana cubre 02:31:20Z → 14:37:22Z (schedule 23, dynamic 7, igual composición que r14/r15).
- C-7: esta lectura no afirma que el fallo sea grave ni que la tasa vaya a seguir en 16,7%: son 5 runs de 30. El caveat va en forma corta y distinta de C-1182 ("La tasa cuenta runs; no califica el estado que escriben"); la forma larga vive en C-1179, que comparte la ventana y la serie.
- Cara que toca: d09 L20 (alerta ante fallo, sin protocolo) — documenta sin cerrar (el fallo sin protocolo se manifiesta por tercera ronda consecutiva; no se creó ningún protocolo).

## Verificación en el corpus (grep propio, 2026-11-14, corpus 1.178)

- "25/30": 0 claims. "16,7": 4 claims — C-657, C-664, C-1017, C-1020 (tasas HUECO de censos r3/r4, ninguna sobre la ventana de runs). "run 39": 0 claims. "run 43": 0 claims. "run 98": 0 claims. "expand-alcance run 98": 0 claims. "bot-audit": 7 claims — C-493, C-563, C-565, C-567, C-655, C-745, C-947 (cadencia, fallback, ráfagas manuales 28–35, censo de workflows; ninguno sobre el run 39). "TG Webhook": 1 claim — C-745 (censo de workflows; no sobre el run 43).
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1184; corpus 1.178; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "VENTANA 25/30 (16,7% DE FALLOS, RONDA 16, F2, 2026-11-14): tercera ronda consecutiva distinta de 0,0% y la peor de la serie — r8 3,3%, r14 3,3%, r15 6,7%. A los 2 fallos de r15 se suman 3 nuevos, failure y schedule: miu-bot-audit run 39, 12:56:35Z; miu-expand-alcance run 98, 14:35:15Z, segundo consecutivo del mismo workflow tras el run 97; TG Webhook Register run 43, 14:37:22Z, que cierra la ventana. Bot-audit y TG Webhook no figuraban en la ventana de r15. La tasa cuenta runs; no califica el estado que escriben.",
  "estado": "SE",
  "fuente": "ronda_16/ejecucion_f2/estado_vivo_r16.md",
  "hash": "sha256:e9e95687001257b78d35c7fc506fa5cb48559c31c6c7fe3135e02693b7c84e20",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_16/ejecucion_f2/estado_vivo_r16.md + runs_recientes.json — PREPARADA en ronda 16 F7, NO APLICADA. Dedup r16: ver dedup_f7_r16.json (umbral 0,5; 0 duplicados). Antecedentes: C-1182 (segundo fallo, cablear-oracle run 16), C-1179 (primer fallo, expand-alcance run 97), C-856 (expand-alcance run 91, failure)."
}
```

- **Hash:** sha256 del documento que registra la lectura (`estado_vivo_r16.md`; sha verificado por `sha256sum` 2026-11-14).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.178):** ver `dedup_f7_r16.json` (corrida por script + corrida inline, idénticas cifra por cifra).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
