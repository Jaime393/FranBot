# ÍTEM DE ANEXO M-89 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 22, FASE 1, F7)

- **Fecha:** 2026-11-16. **Orden:** mapa FASE 0 r22 §F7 ("Ítems del anexo N-16: si F3 produce M-89.., preparar sus ítems para el anexo de incertidumbre") + encargo F7 r22 (ítem de anexo para M-89).
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 23 ítems, sha `35d136fe…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-84 — NO_CONFIRMA (r21, 2026-11-15) — ítem añadido por N-31`).

## M-89 — REGULAR (r22, 2026-11-16) — ítem preparado por F7

- **Valor:** secuencia de autocura 11→15 (workflow miu-autocura, id 417018123): run 14 EXISTE (2026-11-15T21:45:50Z, success, id 43765476720, duración 9,0 s, head 35d30ec2 = commit del State Writer run 211) y run 15 EXISTE (2026-11-16T02:01:49Z, success, id 43789672353, duración 10,0 s, head c331af1e = commit run 212). Secuencia completa verificada run por run (11: 01:52:22Z; 12: 09:20:08Z; 13: 17:05:50Z; 14: 21:45:50Z; 15: 02:01:49Z), todos success, duraciones 9–12 s. Intervalos: 11→12 = 447,77 min; 12→13 = 465,70 min; 13→14 = 280,00 min; 14→15 = 255,98 min; cociente máx/mín **1,819 < 2** → **REGULAR** (criterio declarado: cadencia REGULAR si el cociente máx/mín de los intervalos < 2). Sin run 16 al cierre (6 h 21 min desde el 15).
- **Falsador:** cadencia REGULAR si el cociente máx/mín de los intervalos < 2 (todos los intervalos dentro de un factor 2 entre sí); IRREGULAR en caso contrario. La existencia del run 14 se establece como SÉ desde la API (existe con su timestamp, o falta en la secuencia). Efecto: head_commit por run; si los runs no dejan rastro verificable de cambio de estado más allá de sus propios metadatos → NO_SÉ parcial con el alcance exacto. Declarado en `declaracion_falsadores_r22.md` (2026-11-16T08:17:23Z) antes de correr. **Veredicto:** REGULAR (cociente 1,819 < 2); efecto NO_SÉ parcial (ningún run dejó rastro verificable de cambio de estado más allá de sus propios metadatos).
- **Matiz — REGULAR con escalón:** la cadencia es REGULAR por el criterio (todos los intervalos dentro de un factor 2), pero no es estacionaria: hay un escalón a la baja de ~7,5 h (447,77 y 465,70 min) a ~4,5 h (280,00 y 255,98 min). Dos intervalos largos seguidos de dos cortos — no una aceleración continua. El criterio < 2 no distingue el escalón; el ítem lo registra para que la próxima vuelta lo vea. El efecto queda acotado con precisión: lo que hizo cada run dentro de sus 10–12 s no es visible sin los logs (403); eso es NO_SÉ parcial con el alcance exacto, no una negación de efecto.
- **Secundarios (NO decisorios):** verificación independiente (otro camino de código, desde datos/autocura_runs_2026-11-16.json): intervalos [447,77, 465,70, 280,00, 255,98], cociente 1,819, lags [42,05, 71,92, 80,07, 59,35, 79,48], duraciones [9,0, 9,0, 10,0, 12,0, 10,0], conclusiones 5/5 success — coincide. Cada run corre sobre el HEAD del State Writer vigente (run 14 sobre 35d30ec2; run 15 sobre c331af1e). Igual que en r13–r21, ningún run de autocura escribió nada en el repo.
- **Lección para la próxima vuelta:** la secuencia 11→15 cierra el hueco que r21 dejó (11→13 con el 14 pendiente). La próxima vuelta mide si el escalón se sostiene (intervalos ~4,5 h) o si vuelve a ~7,5 h — y si aparece el run 16. El criterio < 2 debería acompañarse del registro del escalón, como hace este ítem.
- **Fuente:** API pública de GitHub, runs del workflow miu-autocura (sin auth). **sha_dato:** `6da9303acbb60ec4f4063ed333a5b6ee6b8fbf579c7e21dfe370790faa519d1c` (med_M89.json, 15 claves; verificación independiente coincide 5/5).
- **¿Da fila?** NO (anotación): registra la cadencia y la existencia de runs de un workflow del vivo; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** ninguna cara del censo d08 — es observabilidad del vivo. Este ítem es seguimiento del vivo (la autocura volvió a correr y acelera), no cierre de cara.

## Precedente (2)

- **M-89 es el primer REGULAR del anexo:** ningún ítem M-56..M-86 lleva el veredicto REGULAR (grep REGULAR en el anexo: 0). El tally ganaría una clave nueva (REGULAR 1) si se añade — FASE 2 adjudica el formato del tally.
- **Runs 6–13** (r13–r21, registrados como datos dentro de claims de estado vivo, nunca como ítem de anexo): la autocura estuvo estancada en el run 11 durante cinco rondas (r16–r20) y volvió con los runs 12 y 13 en r21. M-89 es la primera medición F3 con JSON de 15 claves sobre la autocura; el ítem es la vía de inscripción de esa medición.
- **N-18 / N-19 / N-20 / N-22 / N-23 / N-25 / N-26 / N-27 / N-29 / N-30 / N-31 / N-32 / N-33** (r15–r21, aplicadas): los ítems M-66, M-69, M-72, M-75, M-76, M-78, M-79, M-80, M-82, M-83, M-84, M-85, M-86 se añadieron al anexo por decisión numerada por FASE 2, preparados por F7 con el mismo formato. M-89 sigue la misma vía: preparado por F7, añadido solo por decisión.

## Proyección si se añade

Anexo 23 → 24 ítems (M-56..M-86 + M-89); tally CONFIRMA 14 · NO_CONFIRMA 7 · DIFERENCIA 1 · NO_SÉ 1 · REGULAR 1 (M-89 es el primer REGULAR). CSV byte-idéntico (30 filas, sha `0852d58f…`). Si se añaden M-87 y M-89 juntos: anexo 23 → 25 ítems; tally CONFIRMA 14 · NO_CONFIRMA 8 · DIFERENCIA 1 · NO_SÉ 1 · REGULAR 1.

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
