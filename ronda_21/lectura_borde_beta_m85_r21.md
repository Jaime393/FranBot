# LECTURA BORDE DE β SIN RESOLVER — PROPUESTA DE CLAIM (RONDA 21, FASE 1, F7)

- **Fecha:** 2026-11-15. **Orden:** mapa FASE 0 r21 §F7 + encargo F7 r21 (claim por M-85 CONFIRMA).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_20/ejecucion_f7/lectura_censo_beta_m82_r20.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

BORDE DE β DE BUILT_UP_AREA_M2 SIN RESOLVER (ronda 21, F3, 2026-11-15): re-estimación bootstrap por pares (2.000 réplicas) del exponente de built_up_area_m2: β = 0,9023, IC bootstrap 95% [0,8896, 0,9142] que contiene 0,90 — el borde no se resuelve hacia dentro de la banda [0,80, 0,90]; 65,05% de las réplicas caen por encima de 0,90 y 34,95% dentro de la banda. El singleton de area_km2 (β = 0,8627 ± 0,0049) se sostiene: built_up_area_m2 sigue fuera por estimación puntual. M-85 CONFIRMA; d05 L7 no se cierra.

## Por qué (C-2, C-3, C-9)

- La medición es M-85 (`med_M85.json`, 15 claves, sha ef5fcac5…): mismo protocolo OLS log-log de M-82 (Y = built_up_area_m2 vs resident_pop, n = 10.351), pero el estadístico decisorio es el IC bootstrap 95% por remuestreo de pares, no la estimación puntual. Falsador declarado en `declaracion_falsadores_r21.md` (2026-11-15T19:33:00Z) antes de correr: CONFIRMA si el IC contiene 0,90 o queda entero por encima (el borde no se resuelve; el singleton se sostiene); NO_CONFIRMA si el IC queda entero dentro de la banda (segundo en banda; el singleton se rompe). Resultado: el IC contiene 0,90 → CONFIRMA. Control: area_km2 re-medida con el mismo protocolo reproduce M-76/M-82 (0,8627 ± 0,0049 dentro de 0,0005). Verificación independiente con pandas + np.polyfit (otro camino de código): β 0,9023, R² 0,6519, IC bootstrap con semilla distinta [0,889, 0,9143] — coincide.
- La lectura responde a la pregunta que M-82 dejó abierta en su matiz: el singleton era "por estimación puntual" con un casi-caso en el borde (β = 0,9023, a 0,0023 del borde, IC analítico solapando 0,90). M-85 re-estima con bootstrap — la especificación que el borde exige — y el borde sigue sin resolverse: el IC bootstrap también contiene 0,90. El singleton se sostiene, pero por intervalo, no por punto: 34,95% de las réplicas caen dentro de la banda. La cara d05 L7 NO se cierra — el borde es borde, no respuesta — y el claim lo dice explícitamente.
- C-7: esta lectura no inscribe nada en el dataset (el ítem de anexo M-85, preparado aparte, es la vía de inscripción, precedentes N-18/N-19/N-20/N-22/N-23/N-25/N-26/N-27/N-28/N-29/N-30). Tampoco re-decide el criterio de banda [0,80, 0,90] ni el protocolo OLS log-log: ambos son heredados de M-82 sin cambio.
- Nota de criterio (para FASE 2): la práctica de 18 rondas dice que los veredictos de medición NO se preparan como claims. Este claim se prepara por **orden expresa del encargo F7 r21** ("TODO, sin omitir frentes"), no por precedente. Lo que enuncia es un hecho nuevo sobre el archivo (el IC bootstrap que contiene 0,90 y las fracciones 65,05/34,95), no solo la etiqueta del veredicto. FASE 2 adjudica si el hecho sostiene el claim o si queda solo el ítem de anexo.
- Cara que toca: d05 L7 (escalamiento urbano) — ABIERTA. La medición la describe, no la cierra.

## Verificación en el corpus (grep propio, 2026-11-15, corpus 1.197)

- "0,9023": 1 claim — C-1198 (padre de contenido: el censo M-82 nombra el valor, sin IC bootstrap ni fracciones). "bootstrap": 0 claims sobre β (el bootstrap temporal de M-78 es de cocientes, no de β). "M-85": 0 claims. "65,05": 0 claims. "34,95": 0 claims.
- Falsos positivos revisados: "built_up_area_m2" 1 claim (C-1198, padre); "singleton" 1 claim (C-1198, padre); "area_km2" 1 claim (C-1198, padre) — C-1198 es el censo por estimación puntual; esta lectura es la re-estimación por intervalo del borde que ese censo dejó abierto.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1204; corpus 1.197; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "BORDE DE β DE BUILT_UP_AREA_M2 SIN RESOLVER (ronda 21, F3, 2026-11-15): re-estimación bootstrap por pares (2.000 réplicas) del exponente de built_up_area_m2: β = 0,9023, IC bootstrap 95% [0,8896, 0,9142] que contiene 0,90 — el borde no se resuelve hacia dentro de la banda [0,80, 0,90]; 65,05% de las réplicas caen por encima de 0,90 y 34,95% dentro de la banda. El singleton de area_km2 (β = 0,8627 ± 0,0049) se sostiene: built_up_area_m2 sigue fuera por estimación puntual. M-85 CONFIRMA; d05 L7 no se cierra.",
  "estado": "SE",
  "fuente": "ronda_21/ejecucion_f3/med_M85.json",
  "hash": "sha256:ef5fcac520b90381140ebb026dc59b1ee2f66130398d8d5b365841d523e3d613",
  "grieta": "G-NUEVA: d05 L7 escalamiento urbano",
  "motivo": "origen: ronda_21/ejecucion_f3/med_M85.json + mediciones_r21.md — PREPARADA en ronda 21 F7, NO APLICADA. Dedup r21: ver dedup_f7_r21.json (umbral 0,5; 0 duplicados). Precedentes de línea: M-82 (singleton por estimación puntual, borde con matiz); sin precedente directo de re-estimación bootstrap como claim — orden expresa del encargo F7 r21, FASE 2 adjudica."
}
```

- **Hash:** sha256 del documento que registra la medición (`med_M85.json`; sha verificado por `sha256sum` 2026-11-15).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.197):** ver `dedup_f7_r21.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
