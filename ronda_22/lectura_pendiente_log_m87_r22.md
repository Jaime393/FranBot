# LECTURA PENDIENTE LOG DE P2 — LA EXCLUSIÓN NO RESCATA LA TENDENCIA — PROPUESTA DE CLAIM (RONDA 22, FASE 1, F7)

- **Fecha:** 2026-11-16. **Orden:** mapa FASE 0 r22 §F7 + encargo F7 r22 (claim por M-87 NO_CONFIRMA) + juicio del Jardinero 2026-11-16 ~03:11 -05 sobre el punto 4 del cierre r21 ("ya tienes la opción en el propio texto, sigan adelante en lo posible": la pendiente log con regla de exclusión declarada antes de correr, candidata para r22).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_21/ejecucion_f7/lectura_pendiente_lineal_m84_r21.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

PENDIENTE LOG DE P2 EN DIM2 — LA EXCLUSIÓN NO RESCATA LA TENDENCIA (ronda 22, F3, 2026-11-16): OLS de ln(P2) contra el índice de congreso, 82 congresos filtrados (P2 ≥ 0,01, filtro declarado antes de correr; excluidos 45, 56, 62 y 106, incluido el P2 = 0,0 exacto): pendiente log +0,000395, IC bootstrap 95% [−0,006890, 0,008327] que incluye 0 — no hay tendencia log detectable en dim2. Tercera especificación sin tendencia (cociente M-75/M-78, lineal M-84, log M-87); d05 L4 no se cierra (la subida 34–80 no se niega, solo que ninguna de las tres especificaciones la convierte en tendencia).

## Por qué (C-2, C-3, C-9)

- La medición es M-87 (`med_M87.json`, 15 claves, sha bec5c5e4…): misma serie de 86 congresos que M-78/M-81/M-84 (P2 idéntica dígito a dígito a M-84, máx diff 0,0 en la verificación independiente), con la especificación que el Jardinero ordenó en el cierre r21: el filtro de ancla de M-78 (P2 ≥ 0,01) declarado ANTES de correr, aplicado a la pendiente log que M-81 no pudo correr por el cero exacto. El conjunto excluido (45, 56, 62, 106; P2 0,007 / 0,005 / 0,002 / 0,0) se verifica desde la serie recomputada. Falsador declarado en `declaracion_falsadores_r22.md` (2026-11-16T08:17:23Z) antes de correr: CONFIRMA si el IC bootstrap 95% de la pendiente log excluye 0; NO_CONFIRMA si incluye 0. Resultado: incluye 0 → NO_CONFIRMA. Secundarios: pendiente analítica +0,000395 ± 0,004004, IC analítico [−0,007573, 0,008362], t = 0,0986, p = 0,9217, R² = 0,0001; tramos 34–80 pendiente log +0,027295 y 81–119 pendiente log −0,056835 (el arco se sostiene en log).
- La lectura responde a la pregunta que M-81 dejó bloqueada y M-84 dejó abierta: M-81 intentó la pendiente log sobre la serie completa y se bloqueó en ln indefinido (P2(106) = 0,0); M-84 ejecutó la lineal y dio NO_CONFIRMA, con el log como candidata pendiente. M-87 ejecuta el log con la exclusión que lo hace computable — y el veredicto sigue siendo NO_CONFIRMA: la exclusión no rescata la tendencia log. Es la tercera especificación sin tendencia (cociente, lineal, log). La cara d05 L4 NO se cierra — el NO_CONFIRMA no niega la subida 34–80, solo que ninguna de las tres especificaciones la convierte en tendencia — y el claim lo dice explícitamente.
- C-7: esta lectura no inscribe nada en el dataset (el ítem de anexo M-87, preparado aparte, es la vía de inscripción, precedentes N-18/N-19/N-20/N-22/N-23/N-25/N-26/N-27/N-29/N-30/N-31/N-32/N-33). Tampoco re-decide el criterio de banda ni el protocolo de serie: ambos son heredados de M-78/M-81/M-84 sin cambio.
- Nota de criterio (para FASE 2): la práctica de 19 rondas dice que los veredictos de medición NO se preparan como claims — se depositan como resultados y entran por el anexo. Este claim se prepara por **orden expresa del encargo F7 r22** ("TODO, sin omitir frentes") + el juicio del Jardinero sobre el punto 4 del cierre r21, no por precedente: no hay precedente directo de una pendiente log como claim. Lo que enuncia es un hecho nuevo sobre la serie (la tercera especificación sin tendencia, pendiente log +0,000395 con IC que incluye 0), no solo la etiqueta del veredicto. FASE 2 adjudica si el hecho sostiene el claim o si queda solo el ítem de anexo.
- Cara que toca: d05 L4 (polarización dim2) — ABIERTA. La medición la describe, no la cierra.

## Verificación en el corpus (grep propio, 2026-11-16, corpus 1.203)

- "pendiente log": 2 claims (C-401, C-532) — ambos sobre otros dominios (código de box-counting; método D2 de Grassberger-Procaccia), ninguno sobre la pendiente log de P2 en dim2. "0,000395": 0 claims. "M-87": 0 claims. "0,008327": 0 claims.
- Falsos positivos revisados: "log" aparece en claims de código y de métodos, ninguno sobre la serie P2; el claim más cercano se mide por script (dedup), no por grep.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1209; corpus 1.203; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "PENDIENTE LOG DE P2 EN DIM2 — LA EXCLUSIÓN NO RESCATA LA TENDENCIA (ronda 22, F3, 2026-11-16): OLS de ln(P2) contra el índice de congreso, 82 congresos filtrados (P2 ≥ 0,01, filtro declarado antes de correr; excluidos 45, 56, 62 y 106, incluido el P2 = 0,0 exacto): pendiente log +0,000395, IC bootstrap 95% [−0,006890, 0,008327] que incluye 0 — no hay tendencia log detectable en dim2. Tercera especificación sin tendencia (cociente M-75/M-78, lineal M-84, log M-87); d05 L4 no se cierra (la subida 34–80 no se niega, solo que ninguna de las tres especificaciones la convierte en tendencia).",
  "estado": "SE",
  "fuente": "ronda_22/ejecucion_f3/med_M87.json",
  "hash": "sha256:bec5c5e4e46ac9a78ee1dfa3d2f334eb0f448b68ab16e9f5fe3b4fafd95f0edb",
  "grieta": "G-NUEVA: d05 L4 polarización dim2",
  "motivo": "origen: ronda_22/ejecucion_f3/med_M87.json + mediciones_r22.md — PREPARADA en ronda 22 F7, NO APLICADA. Dedup r22: ver dedup_f7_r22.json (umbral 0,5; 0 duplicados). Precedentes de línea: M-75/M-78 (CONFIRMA formales por cociente), M-81 (NO_SÉ por bloqueo del log), M-84 (NO_CONFIRMA lineal); sin precedente directo de pendiente log como claim — orden expresa del encargo F7 r22 + juicio del Jardinero 2026-11-16 sobre el punto 4 del cierre r21, FASE 2 adjudica."
}
```

- **Hash:** sha256 del documento que registra la medición (`med_M87.json`; sha verificado por `sha256sum` 2026-11-16).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.203):** ver `dedup_f7_r22.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
