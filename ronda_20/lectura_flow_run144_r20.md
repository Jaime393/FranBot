# LECTURA FLOW RUN 144, 0,0% DÉCIMA RONDA — PROPUESTA DE CLAIM (RONDA 20, FASE 1, F7 — CONTINUACIÓN)

- **Fecha:** 2026-11-15. **Orden:** encargo de continuación F7 r20 (nota 2 del §4 de `preparadas_r20.md`); el encargo ofrecía plegar flow en el claim del stub — se parte en claim propio, justificación abajo.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_19/ejecucion_f7/lectura_ventana_2613_r19.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

FLOW RUN 144, 0,0% DÉCIMA RONDA (F2, 2026-11-15): el monitor Flow-ID escribió run 144 (07:27:32Z, success, durante la batería) y flow_id_coverage.json mide 0,0% CRÍTICO — décima ronda consecutiva en 0,0% (r11 100,0% → r12–r20 0,0%), 0 eventos en la muestra, estado critico. Archivo 832 B, sha256 d4c935ad… (ts 2026-11-15T07:27:41Z), distinto del de r19 (501f1112…): el monitor corre y escribe, pero mide 0 eventos. Causa NO_SÉ.

## Por qué (C-2, C-3, C-9)

- **Por qué claim propio y no plegado en el stub:** flow y stub son mediciones independientes — workflows distintos (Flow-ID Monitor vs State Writer / Pulse V2), archivos distintos (`flow_id_coverage.json` vs `estado_vivo.json`), series distintas. El stub alterna de escritor; el flow persiste en 0,0% por décima ronda con un run nuevo escrito DURANTE la batería (07:27:32Z). Plegarlos en un solo claim mezclaría dos hechos independientes en un texto y rompería la disciplina de un hecho por claim. Precedente de la distinción: en r19 el run 143 de Self-Diagnosis se plegó como dato secundario en la lectura del run 207 porque era un run aislado sin serie propia; el flow SÍ tiene serie propia (r11 100,0% → r12–r20 0,0%) y un hito propio (décima ronda). FASE 2 adjudica el desdoble.
- Precedente: C-794 (flow cae de 100,0 a 0,0 el 2026-11-13) enunció la CAÍDA; este claim enuncia la PERSISTENCIA en la décima ronda con un run nuevo que re-escribe el archivo (sha d4c935ad… vs 501f1112… en r19). C-852 enunció el 0,0% byte-idéntico a ronda 2; aquí el archivo CAMBIA (nueva ts, nuevo sha) y sigue midiendo 0 eventos.
- La fuente es `estado_vivo_r20.md` (sha 00897d6e…), 2026-11-15 ~07:05–07:50Z, §3 (archivo cambiado 2/13; serie de flow r11–r20) y §2 (run 144, 07:27:32Z, durante la batería).
- C-7: esta lectura no afirma la causa del 0,0% — es NO_SÉ (logs de Actions inaccesibles). Tampoco afirma que el monitor esté caído: corre y escribe (run 144, success, archivo con ts nueva); lo que mide es 0 eventos en la muestra. El 0,0 con muestra 0 es ambiguo por el YAML (C-794): si la vista no tiene eventos, el monitor no puede distinguir "sin flujo" de "sin muestra".
- Cara que toca: ninguna cara cierra; es seguimiento del estado vivo (observabilidad). La cara d09 L20 (alerta ante fallo sin protocolo) sigue sin protocolo: el fallo se manifiesta de nuevo y solo se registra.

## Verificación en el corpus (grep propio, 2026-11-15, corpus 1.192)

- "run 144": 0 claims. "décima ronda": 0 claims. "d4c935ad": 0 claims. "501f1112": 0 claims.
- "décima": 1 claim — C-780 (las 10 voces del Doc Panteón-96; nada sobre flow).
- "flow_id": 7 claims — C-653 (última cobertura no-cero 100,0), C-749 (24,0 → 100,0), C-794 (caída a 0,0 el 2026-11-13), C-852 (0,0 byte-idéntico a ronda 2), C-1098, C-1099 (archivos byte-idénticos a ronda 3) + C-568 (solo en el campo motivo, no en el claim). Ninguno enuncia el run 144 ni la décima ronda en 0,0%.
- "cobertura flow": 1 claim — C-653 (silencios medidos; última cobertura no-cero 100,0); no enuncia el 0,0% de r20.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1202; corpus 1.192; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "FLOW RUN 144, 0,0% DÉCIMA RONDA (F2, 2026-11-15): el monitor Flow-ID escribió run 144 (07:27:32Z, success, durante la batería) y flow_id_coverage.json mide 0,0% CRÍTICO — décima ronda consecutiva en 0,0% (r11 100,0% → r12–r20 0,0%), 0 eventos en la muestra, estado critico. Archivo 832 B, sha256 d4c935ad… (ts 2026-11-15T07:27:41Z), distinto del de r19 (501f1112…): el monitor corre y escribe, pero mide 0 eventos. Causa NO_SÉ.",
  "estado": "SE",
  "fuente": "ronda_20/ejecucion_f2/estado_vivo_r20.md",
  "hash": "sha256:00897d6ea3a88bb10df3b87037319bfa6c598824ff314039b890317cbdaf2a09",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_20/ejecucion_f2/estado_vivo_r20.md — PREPARADA en ronda 20 F7 (continuación), NO APLICADA. Dedup r20: ver dedup_f7_r20.json (umbral 0,5; 0 duplicados). Antecedentes: C-794 (caída a 0,0, 2026-11-13), C-852 (0,0 byte-idéntico a ronda 2) — serie de cobertura flow."
}
```

- **Hash:** sha256 del documento que registra la lectura (`estado_vivo_r20.md`; sha verificado por `sha256sum` 2026-11-15).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.192):** ver `dedup_f7_r20.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
