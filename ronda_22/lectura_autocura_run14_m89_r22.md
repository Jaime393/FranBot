# LECTURA AUTOCURA RUN 14 — LA SECUENCIA 11→15 QUEDA COMPLETA — PROPUESTA DE CLAIM (RONDA 22, FASE 1, F7)

- **Fecha:** 2026-11-16. **Orden:** mapa FASE 0 r22 §F7 + encargo F7 r22 (claim por M-89 REGULAR).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_21/ejecucion_f7/lectura_stub_run210_r21.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

AUTOCURA RUN 14 EXISTE — LA SECUENCIA 11→15 QUEDA COMPLETA Y LA CADENCIA SE ACORTA (ronda 22, F3, 2026-11-16): autocura run 14 (2026-11-15T21:45:50Z, success, id 43765476720, head 35d30ec2) y run 15 (2026-11-16T02:01:49Z, success) cierran la secuencia 11→15, verificada run por run, todos success. Intervalos 447,77 / 465,70 / 280,00 / 255,98 min, cociente máx/mín 1,819 < 2 — cadencia REGULAR, con escalón a la baja de ~7,5 h a ~4,5 h. Ningún run dejó rastro verificable de cambio de estado más allá de sus propios metadatos (el efecto queda NO_SÉ parcial con ese alcance exacto).

## Por qué (C-2, C-3, C-9)

- La medición es M-89 (`med_M89.json`, 15 claves, sha 6da9303a…): workflow miu-autocura (id 417018123), 15 runs en total; run 14 EXISTE (created_at 2026-11-15T21:45:50Z, id 43765476720, status completed, conclusion success, event schedule, duración 9,0 s, head_sha 35d30ec2 = commit del State Writer run 211) y run 15 EXISTE (02:01:49Z, id 43789672353, duración 10,0 s, head c331af1e = commit run 212). La secuencia 11→15 queda completa y verificada run por run (11: 01:52:22Z; 12: 09:20:08Z; 13: 17:05:50Z; 14: 21:45:50Z; 15: 02:01:49Z), todos success, duraciones 9–12 s. Intervalos: 11→12 = 447,77 min; 12→13 = 465,70 min; 13→14 = 280,00 min; 14→15 = 255,98 min; cociente máx/mín 1,819 < 2 → REGULAR por el criterio declarado. Verificación independiente (otro camino de código, desde datos/autocura_runs_2026-11-16.json): intervalos, cociente 1,819, lags y duraciones coinciden 5/5. Falsador declarado en `declaracion_falsadores_r22.md` (2026-11-16T08:17:23Z) antes de correr.
- La lectura registra dos hechos nuevos: (a) el run 14 EXISTE — en r21 la autocura había vuelto con los runs 12 y 13 tras cinco rondas estancada en el 11, y la secuencia quedaba incompleta (11→13 con hueco 14); r22 cierra la secuencia 11→15. (b) La cadencia se acorta con un escalón: ~7,5 h (447,77 y 465,70 min) → ~4,5 h (280,00 y 255,98 min). El escalón no es una aceleración continua: dos intervalos largos seguidos de dos cortos. El efecto queda acotado con precisión: ningún run dejó rastro verificable de cambio de estado más allá de sus propios metadatos — lo que hizo dentro de cada run (10–12 s) no es visible sin los logs (403); eso es NO_SÉ parcial con el alcance exacto, no una negación de efecto.
- C-7: esta lectura no inscribe nada en el dataset (el ítem de anexo M-89, preparado aparte, es la vía de inscripción, precedentes N-18/N-19/N-20/N-22/N-23/N-25/N-26/N-27/N-29/N-30/N-31/N-32/N-33). Tampoco re-decide ningún criterio: el umbral de regularidad (cociente < 2) es el declarado por F3 en esta ronda.
- Nota de criterio (para FASE 2): la práctica de 19 rondas dice que los veredictos de medición NO se preparan como claims — se depositan como resultados y entran por el anexo. Este claim se prepara por **orden expresa del encargo F7 r22** ("TODO, sin omitir frentes"), no por precedente: no hay precedente directo de una secuencia de autocura como claim (los runs 6–13 se registraron como datos dentro de claims de estado vivo, nunca como hecho propio). Lo que enuncia es un hecho nuevo (la secuencia completa 11→15 y el escalón de cadencia), no solo la etiqueta REGULAR. FASE 2 adjudica si el hecho sostiene el claim o si queda solo el ítem de anexo.
- Cara que toca: ninguna cara del censo d08 — es observabilidad del vivo (grieta "estado vivo del ecosistema"). La medición la describe, no cierra nada.

## Verificación en el corpus (grep propio, 2026-11-16, corpus 1.203)

- "run 14": 7 claims — todos "run 14x" (run 144, 145, 146, 147, 148: claims de flow y de estado), ninguno sobre autocura run 14. "43765476720": 0 claims. "M-89": 0 claims. "1,819": 0 claims. "447,77": 0 claims. "secuencia 11": 0 claims.
- Falsos positivos revisados: "autocura" aparece en claims de estado vivo (runs 6–13 como datos dentro de C-1206 y anteriores), ninguno enuncia la secuencia 11→15 ni el escalón de cadencia; el claim más cercano se mide por script (dedup), no por grep.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1210; corpus 1.203; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "AUTOCURA RUN 14 EXISTE — LA SECUENCIA 11→15 QUEDA COMPLETA Y LA CADENCIA SE ACORTA (ronda 22, F3, 2026-11-16): autocura run 14 (2026-11-15T21:45:50Z, success, id 43765476720, head 35d30ec2) y run 15 (2026-11-16T02:01:49Z, success) cierran la secuencia 11→15, verificada run por run, todos success. Intervalos 447,77 / 465,70 / 280,00 / 255,98 min, cociente máx/mín 1,819 < 2 — cadencia REGULAR, con escalón a la baja de ~7,5 h a ~4,5 h. Ningún run dejó rastro verificable de cambio de estado más allá de sus propios metadatos (el efecto queda NO_SÉ parcial con ese alcance exacto).",
  "estado": "SE",
  "fuente": "ronda_22/ejecucion_f3/med_M89.json",
  "hash": "sha256:6da9303acbb60ec4f4063ed333a5b6ee6b8fbf579c7e21dfe370790faa519d1c",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_22/ejecucion_f3/med_M89.json + mediciones_r22.md — PREPARADA en ronda 22 F7, NO APLICADA. Dedup r22: ver dedup_f7_r22.json (umbral 0,5; 0 duplicados). Precedentes de línea: runs 6–13 registrados como datos dentro de claims de estado vivo (C-1206 y anteriores), nunca como hecho propio; sin precedente directo de secuencia de autocura como claim — orden expresa del encargo F7 r22, FASE 2 adjudica."
}
```

- **Hash:** sha256 del documento que registra la medición (`med_M89.json`; sha verificado por `sha256sum` 2026-11-16).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.203):** ver `dedup_f7_r22.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
