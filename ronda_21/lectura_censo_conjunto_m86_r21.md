# LECTURA CENSO CONJUNTO β∧R² — CERO CRUCES — PROPUESTA DE CLAIM (RONDA 21, FASE 1, F7)

- **Fecha:** 2026-11-15. **Orden:** mapa FASE 0 r21 §F7 + encargo F7 r21 (claim por M-86 CONFIRMA).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_20/ejecucion_f7/lectura_censo_beta_m82_r20.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

CENSO CONJUNTO β∧R² — CERO CRUCES (ronda 21, F3, 2026-11-15): de las 32 variables de indicators.tab, 1 tiene β en banda [0,80, 0,90] (area_km2, β = 0,8627, R² = 0,7490) y 0 tienen R² > 0,8 (máximo area_km2, 0,7490, a 0,051 del umbral) — 0 variables cumplen ambas condiciones a la vez. El singleton β y el muro R² son fenómenos independientes: no se cruzan en ninguna variable del archivo. M-86 CONFIRMA; d05 L7 no se cierra.

## Por qué (C-2, C-3, C-9)

- La medición es M-86 (`med_M86.json`, 15 claves, sha 67c59414…): censo conjunto con los protocolos ya publicados — para cada una de las 32 variables de indicators.tab, OLS log-log base 10 vs resident_pop, β y R² por variable; se cuenta cuántas cumplen β ∈ [0,80, 0,90] Y R² > 0,8 a la vez. Falsador declarado en `declaracion_falsadores_r21.md` (2026-11-15T19:33:00Z) antes de correr: CONFIRMA si 0 cumplen ambas; NO_CONFIRMA si ≥ 1 cumple ambas. Resultado: 0 → CONFIRMA. Control: β y R² reproducen M-79 y M-82 dentro de 0,0005 en las 32 variables (máx diff β 4,7e-05, R² 5e-05). Verificación independiente con pandas + np.polyfit (otro camino de código): 32 variables, cumplen ambas [], máx diff β 4,7e-05, R² 5e-05 — coincide.
- La lectura responde a la pregunta que M-79 y M-82 dejaron abierta por separado: M-79 censó R² (0/32 por encima de 0,8, muro sistemático) y M-82 censó β (singleton area_km2 en banda). Nadie había cruzado ambas condiciones en la misma variable. M-86 lo hace y el cruce es cero: la única variable con β en banda (area_km2) queda a 0,051 del umbral R², y la variable con mayor R² es esa misma. El singleton β y el muro R² no son dos caras de un mismo fenómeno: son independientes. La cara d05 L7 NO se cierra — el censo describe el archivo, no resuelve el escalamiento — y el claim lo dice explícitamente.
- C-7: esta lectura no inscribe nada en el dataset (el ítem de anexo M-86, preparado aparte, es la vía de inscripción, precedentes N-18/N-19/N-20/N-22/N-23/N-25/N-26/N-27/N-28/N-29/N-30). Tampoco re-decide el criterio de banda ni el umbral R² > 0,8: ambos son heredados de M-79/M-82 sin cambio.
- Nota de criterio (para FASE 2): la práctica de 18 rondas dice que los veredictos de medición NO se preparan como claims. Este claim se prepara por **orden expresa del encargo F7 r21** ("TODO, sin omitir frentes"), no por precedente. Lo que enuncia es un hecho nuevo sobre el archivo (el cruce cero entre dos censos ya publicados), no solo la etiqueta del veredicto. FASE 2 adjudica si el hecho sostiene el claim o si queda solo el ítem de anexo.
- Cara que toca: d05 L7 (escalamiento urbano) — ABIERTA. El censo la describe, no la cierra.

## Verificación en el corpus (grep propio, 2026-11-15, corpus 1.197)

- "cumplen ambas": 0 claims. "beta en banda y R2": 0 claims. "M-86": 0 claims. "0,7490": 1 claim — C-1198 (padre de contenido: el censo M-82 nombra el R² de area_km2, sin cruzar con el umbral 0,8).
- Falsos positivos revisados: "cruce" 17 claims (C-512, C-522, C-523, C-609, C-633, C-647, C-970, C-973, C-1006, C-1015, C-1022, C-1031, C-1039, C-1112, C-1118, C-1174, C-1175) — todos sobre cruces de otro dominio (cruces de series, cruces de dominios, cruces de caminos), ninguno sobre β∧R² en indicators.tab; "32 variables" revisada en el dedup (el claim más cercano se mide por script).
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1205; corpus 1.197; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "CENSO CONJUNTO β∧R² — CERO CRUCES (ronda 21, F3, 2026-11-15): de las 32 variables de indicators.tab, 1 tiene β en banda [0,80, 0,90] (area_km2, β = 0,8627, R² = 0,7490) y 0 tienen R² > 0,8 (máximo area_km2, 0,7490, a 0,051 del umbral) — 0 variables cumplen ambas condiciones a la vez. El singleton β y el muro R² son fenómenos independientes: no se cruzan en ninguna variable del archivo. M-86 CONFIRMA; d05 L7 no se cierra.",
  "estado": "SE",
  "fuente": "ronda_21/ejecucion_f3/med_M86.json",
  "hash": "sha256:67c59414215c00892fa15a9fe050fbbd8746e3176ade95900c26e3bf19e4ce38",
  "grieta": "G-NUEVA: d05 L7 escalamiento urbano",
  "motivo": "origen: ronda_21/ejecucion_f3/med_M86.json + mediciones_r21.md — PREPARADA en ronda 21 F7, NO APLICADA. Dedup r21: ver dedup_f7_r21.json (umbral 0,5; 0 duplicados). Precedentes de línea: M-79 (censo R²) + M-82 (censo β); sin precedente directo de censo conjunto como claim — orden expresa del encargo F7 r21, FASE 2 adjudica."
}
```

- **Hash:** sha256 del documento que registra la medición (`med_M86.json`; sha verificado por `sha256sum` 2026-11-15).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.197):** ver `dedup_f7_r21.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
