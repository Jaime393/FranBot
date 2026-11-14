# LECTURA BOT_AUDIT.JSON CAMBIA DE POBLACIÓN — PROPUESTA DE CLAIM (RONDA 18, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r18 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_17/ejecucion_f7/lectura_ventana_2430_r17.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

BOT_AUDIT.JSON CAMBIA DE POBLACIÓN (ronda 18, F2, 2026-11-14): resultados/bot_audit.json pasa de 12 entradas con claves tg_* (fuente Panteón) a 7 entradas con claves tg_pool_0..6 (pool COORD), las 7 vivo: true. La secuencia lo explica: el run 40 de bot-audit falla 19:05:58Z; el commit 68efb281 escribe 'bot audit 2026-11-14: 0/0 vivos'; los commits efa2ffa7 (CHK-216) y 995cc678 hacen que bot-audit lea siempre el pool tg_bots_pool del COORD cuando el Panteón está caído; los runs 41/42/43 salen en success y el HEAD 2b90b592 registra 'bot audit 2026-11-14: 7/7 vivos'. El arreglo que el vivo hizo durante FASE 2 r17 queda reflejado en el archivo. Los 5 bots que salen del archivo (@Familiarestwo_bot, @Panteonmiu_bot, @Colmenapanteon_bot, @FranMiu_bot, @Colmenamiu_bot) estaban en el archivo r17 y no están en el pool COORD. El Panteón sigue en exceed_egress_quota (402) hasta ~26-nov.

## Por qué (C-2, C-3, C-9)

- Precedente: el corpus inscribe los cambios de población del archivo de auditoría de bots como claims (C-744: bot_audit.json existe con 12 entradas, todas vivo:true; C-494: 8 bots vivos más allá de los 4 heredados). Lo nuevo aquí es el cambio de población y de fuente: 12 → 7 entradas, claves tg_* → tg_pool_0..6, y el arreglo COORD (CHK-216) que lo causa — ningún claim enuncia el pool COORD como fuente de bot-audit.
- La fuente es la medición F2 r18 (`estado_vivo_r18.md`, sha e09feada…; `raw_r18_resultados_bot_audit.json`, 952 B, sha 92a96cd3… vs b1ff8a6a… en r17), 2026-11-14 ~20:14–20:17Z. El diff es exacto: 12 entradas → 7 entradas; los 7 son @franbottablet_bot, @AlmaOmni_bot, @FranFamiliar_bot, @Jp393_bot, @Emjambre3_bot, @FranShell_Bot, @Miceliomiu_bot.
- C-7: esta lectura no afirma que el pool COORD sea la fuente correcta a largo plazo: es el respaldo que el vivo activó mientras el Panteón está en 402; el horizonte ~26-nov es el medido en r17, sin cambio de fecha medido en esta ronda. Tampoco afirma que los 5 bots que salen estén muertos: salen del archivo porque no están en el pool COORD, no porque su getMe falle (los 4 heredados siguen 4/4 VIVO, 16.ª confirmación).
- Cara que toca: d09 L20 (estado vivo) — el arreglo del vivo se refleja en un archivo de estado; la cara sigue abierta.

## Verificación en el corpus (grep propio, 2026-11-14, corpus 1.185)

- "tg_pool": 0 claims. "pool COORD": 0 claims. "7/7 vivos": 0 claims. "12 entradas": 2 claims — C-744 y C-752 (el archivo con 12 entradas en 2026-11-12; esta lectura es el cambio a 7 entradas en r18). "CHK-216": 0 claims. "68efb281": 0 claims. "995cc678": 0 claims. "efa2ffa7": 0 claims. "0/0 vivos": 2 claims — C-493 (fallback sin_datos) y C-744 (primer commit 0/0 vivos, 2026-11-12); ninguno sobre la secuencia r18.
- Falsos positivos revisados: "bot_audit.json": 11 claims — todos sobre estados anteriores del archivo (12 entradas, 12/12 vivos, fallback sin_datos) o sobre su YAML; ninguno sobre el cambio 12 → 7 ni sobre el pool COORD; "bot.audit" (ambas grafías): 19 claims — todos sobre runs, fallos y estados anteriores del archivo; ninguno sobre el cambio 12 → 7 ni sobre el pool COORD.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1194; corpus 1.185; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "BOT_AUDIT.JSON CAMBIA DE POBLACIÓN (ronda 18, F2, 2026-11-14): resultados/bot_audit.json pasa de 12 entradas con claves tg_* (fuente Panteón) a 7 entradas con claves tg_pool_0..6 (pool COORD), las 7 vivo: true. La secuencia lo explica: el run 40 de bot-audit falla 19:05:58Z; el commit 68efb281 escribe 'bot audit 2026-11-14: 0/0 vivos'; los commits efa2ffa7 (CHK-216) y 995cc678 hacen que bot-audit lea siempre el pool tg_bots_pool del COORD cuando el Panteón está caído; los runs 41/42/43 salen en success y el HEAD 2b90b592 registra 'bot audit 2026-11-14: 7/7 vivos'. El arreglo que el vivo hizo durante FASE 2 r17 queda reflejado en el archivo. Los 5 bots que salen del archivo (@Familiarestwo_bot, @Panteonmiu_bot, @Colmenapanteon_bot, @FranMiu_bot, @Colmenamiu_bot) estaban en el archivo r17 y no están en el pool COORD. El Panteón sigue en exceed_egress_quota (402) hasta ~26-nov.",
  "estado": "SE",
  "fuente": "ronda_18/ejecucion_f2/estado_vivo_r18.md",
  "hash": "sha256:e09feadaa21ab5b63357a107da4b242fff18a5b497829f1f1b8f9a8ce2828f06",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_18/ejecucion_f2/estado_vivo_r18.md + raw_r18_resultados_bot_audit.json — PREPARADA en ronda 18 F7, NO APLICADA. Dedup r18: ver dedup_f7_r18.json (umbral 0,5; 0 duplicados). Antecedentes: C-744 (bot_audit.json con 12 entradas, 2026-11-12), C-494 (8 bots más allá de los 4 heredados)."
}
```

- **Hash:** sha256 del documento que registra la lectura (`estado_vivo_r18.md`; sha verificado por `sha256sum` 2026-11-14).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.185):** ver `dedup_f7_r18.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
