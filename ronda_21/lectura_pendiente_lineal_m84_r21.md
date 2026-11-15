# LECTURA PENDIENTE LINEAL DE P2 — ARCO, NO TENDENCIA — PROPUESTA DE CLAIM (RONDA 21, FASE 1, F7)

- **Fecha:** 2026-11-15. **Orden:** mapa FASE 0 r21 §F7 + encargo F7 r21 (claim por M-84 NO_CONFIRMA).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_20/ejecucion_f7/lectura_censo_beta_m82_r20.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

PENDIENTE LINEAL DE P2 EN DIM2 — ARCO, NO TENDENCIA (ronda 21, F3, 2026-11-15): OLS de P2 contra el índice de congreso, 86 congresos 34..119 (DW-NOMINATE dim2, Cámara EE.UU.): pendiente −0,000001, IC bootstrap 95% [−0,001364, 0,001661] que incluye 0 — no hay tendencia lineal detectable en dim2 sobre el rango completo. La serie sube hasta el Congreso 80 (P2 = 0,9275) y baja después (P2 = 0,124 en el 119): es un arco, no una recta. Los cocientes máximos de M-75 (463,75) y M-78 (50,14) eran artefacto de selección del ancla — anclas de 0,002 y 0,0185 frente a la mediana 0,226. M-84 NO_CONFIRMA; d05 L4 no se cierra (la subida 34–80 no se niega, solo que no hay tendencia lineal en el rango completo).

## Por qué (C-2, C-3, C-9)

- La medición es M-84 (`med_M84.json`, 15 claves, sha 2431910c…): misma serie de 86 congresos que M-78/M-81 (P2 idéntica dígito a dígito a M-81, máx diff 0,0 en la verificación independiente), pero con especificación nueva: ajuste OLS de P2 contra el índice de congreso, sin logaritmo — el P2 = 0 exacto del Congreso 106 es un punto válido, no el bloqueo que detuvo a M-81. Falsador declarado en `declaracion_falsadores_r21.md` (2026-11-15T19:33:00Z) antes de correr: CONFIRMA si el IC bootstrap 95% excluye 0 con pendiente > 0; NO_CONFIRMA si incluye 0. Resultado: incluye 0 → NO_CONFIRMA. Secundarios: pendiente analítica −0,000001 ± 0,000943, IC analítico [−0,001877, 0,001874], t = −0,0015, p = 0,9988, R² = 0,0; tramos 34–80 pendiente +0,007744 y 81–119 pendiente −0,015666.
- La lectura responde a la pregunta que M-75/M-78/M-81 dejaron abierta: M-75 y M-78 dieron CONFIRMA formales por cociente máximo sin cruzar el muro (el umbral >2 no discrimina en dim2: cualquier ancla bajo 0,46 da cociente > 2; el bootstrap temporal de M-78 cruza 2, mediana 2,90, solo 70,14% > 2); M-81 intentó la pendiente log y se bloqueó en el cero exacto. M-84 usa la pendiente lineal — la especificación que M-81 dejó como candidata — y el veredicto es NO_CONFIRMA: el crecimiento de P2 no es una tendencia lineal, es un arco con máximo en el Congreso 80. La cara d05 L4 NO se cierra — el NO_CONFIRMA no niega la subida 34–80, solo que no hay tendencia lineal detectable en el rango completo — y el claim lo dice explícitamente.
- C-7: esta lectura no inscribe nada en el dataset (el ítem de anexo M-84, preparado aparte, es la vía de inscripción, precedentes N-18/N-19/N-20/N-22/N-23/N-25/N-26/N-27/N-28/N-29/N-30). Tampoco re-decide el criterio de banda ni el protocolo de serie: ambos son heredados de M-78/M-81 sin cambio.
- Nota de criterio (para FASE 2): la práctica de 18 rondas dice que los veredictos de medición NO se preparan como claims — se depositan como resultados y entran por el anexo. Este claim se prepara por **orden expresa del encargo F7 r21** ("TODO, sin omitir frentes"), no por precedente: no hay precedente directo de una pendiente lineal como claim. Lo que enuncia es un hecho nuevo sobre la serie (el arco, pendiente −0,000001 con IC que incluye 0), no solo la etiqueta del veredicto. FASE 2 adjudica si el hecho sostiene el claim o si queda solo el ítem de anexo.
- Cara que toca: d05 L4 (polarización dim2) — ABIERTA. La medición la describe, no la cierra.

## Verificación en el corpus (grep propio, 2026-11-15, corpus 1.197)

- "pendiente lineal": 0 claims. "0,000001": 0 claims. "P2 = -0": 0 claims. "M-84": 0 claims. "463,75": 0 claims. "50,14": 0 claims.
- Falsos positivos revisados: "arco" 8 claims (C-320, C-472, C-730, C-867, C-1022, C-1074, C-1082, C-1165) — todos sobre arcos de otro dominio (arcos de círculo, arcos narrativos, arcos de red), ninguno sobre la forma de la serie P2 en dim2; "tendencia" revisada en el dedup (el claim más cercano se mide por script, no por grep).
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1203; corpus 1.197; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "PENDIENTE LINEAL DE P2 EN DIM2 — ARCO, NO TENDENCIA (ronda 21, F3, 2026-11-15): OLS de P2 contra el índice de congreso, 86 congresos 34..119 (DW-NOMINATE dim2, Cámara EE.UU.): pendiente −0,000001, IC bootstrap 95% [−0,001364, 0,001661] que incluye 0 — no hay tendencia lineal detectable en dim2 sobre el rango completo. La serie sube hasta el Congreso 80 (P2 = 0,9275) y baja después (P2 = 0,124 en el 119): es un arco, no una recta. Los cocientes máximos de M-75 (463,75) y M-78 (50,14) eran artefacto de selección del ancla — anclas de 0,002 y 0,0185 frente a la mediana 0,226. M-84 NO_CONFIRMA; d05 L4 no se cierra (la subida 34–80 no se niega, solo que no hay tendencia lineal en el rango completo).",
  "estado": "SE",
  "fuente": "ronda_21/ejecucion_f3/med_M84.json",
  "hash": "sha256:2431910c7982d8fae6a5131abdec6f2cce649e3b7a6aabafb89e059b59cfc317",
  "grieta": "G-NUEVA: d05 L4 polarización dim2",
  "motivo": "origen: ronda_21/ejecucion_f3/med_M84.json + mediciones_r21.md — PREPARADA en ronda 21 F7, NO APLICADA. Dedup r21: ver dedup_f7_r21.json (umbral 0,5; 0 duplicados). Precedentes de línea: M-75/M-78 (CONFIRMA formales por cociente), M-81 (NO_SÉ por bloqueo del log); sin precedente directo de pendiente lineal como claim — orden expresa del encargo F7 r21, FASE 2 adjudica."
}
```

- **Hash:** sha256 del documento que registra la medición (`med_M84.json`; sha verificado por `sha256sum` 2026-11-15).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.197):** ver `dedup_f7_r21.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
