# LECTURA CENSO DE β — SINGLETON — PROPUESTA DE CLAIM (RONDA 20, FASE 1, F7)

- **Fecha:** 2026-11-15. **Orden:** mapa FASE 0 r20 §F7 + encargo F7 r20 (claim por M-82 CONFIRMA).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_19/ejecucion_f7/lectura_regla_part_sik_r19.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

CENSO DE β EN ESCALAMIENTO URBANO — SINGLETON (ronda 20, F3, 2026-11-15): de las 32 variables numéricas candidatas de indicators.tab, solo area_km2 tiene β en banda [0,80, 0,90] (β = 0,8627 ± 0,0049, R² = 0,7490, n = 10.351, OLS log-log vs resident_pop); 0 variables además de area_km2 caen en banda por estimación puntual — el β en banda es un singleton. Matiz: built_up_area_m2 queda en el borde (β = 0,9023 ± 0,0065, IC 95% [0,8896, 0,9150] solapa 0,90), compatible con la banda por intervalo; la familia β-en-banda, si existe, es de a lo sumo dos. M-82 CONFIRMA, falsador declarado antes de correr; d05 L7 no se cierra (el muro R² sistemático de M-79 persiste).

## Por qué (C-2, C-3, C-9)

- La medición es M-82 (`med_M82.json`, 15 claves, sha 92d48f96…): censo con el mismo protocolo OLS log-log de M-52/M-57/M-65/M-68/M-71/M-73/M-76/M-79 para TODAS las variables de indicators.tab (no el R², sino el exponente); falsador declarado en `declaracion_falsadores_r20.md` (2026-11-15T07:06:00Z) antes de correr: CONFIRMA si 0 variables además de area_km2 tienen β en banda; NO_CONFIRMA si ≥ 1 más cae en banda. Resultado: 0 además de area_km2 → CONFIRMA. Verificación independiente con pandas + np.polyfit (otro camino de código): 32 variables, máx diff β 0,000047, máx diff R² 0,000050, en banda solo area_km2 — idéntico dígito a dígito. Mediana del censo: β = 0,0083; 8 variables con β > 0,90.
- La lectura responde a la pregunta que M-76 dejó abierta ("¿singleton o familia?"): M-76 aisló el muro en R² con la primera β en banda (area_km2, β = 0,8627); M-79 censó R² (0/32 por encima de 0,8, muro sistemático); M-82 censa β y responde: singleton por estimación puntual. La cara d05 L7 NO se cierra — el censo describe el archivo, no resuelve el escalamiento — y el claim lo dice explícitamente.
- C-7: esta lectura no cierra d05 L7 ni inscribe nada en el dataset (el ítem de anexo M-82, preparado aparte, es la vía de inscripción, precedentes N-18/N-19/N-20/N-22/N-23/N-25/N-26/N-27). Tampoco re-decide el criterio de banda [0,80, 0,90] ni el protocolo OLS log-log: ambos son heredados de M-52..M-79 sin cambio.
- Nota de criterio (para FASE 2): la práctica de 17 rondas (r18 F7 §4, mapa r20 §F3) dice que los veredictos de medición NO se preparan como claims — se depositan como resultados y entran por el anexo. Este claim se prepara por **orden expresa del encargo F7 r20** ("claim por M-82 CONFIRMA"), no por precedente: no hay precedente directo de un censo como claim. Lo que enuncia es un hecho nuevo sobre el archivo (el singleton, 0/32 además de area_km2), no solo la etiqueta del veredicto. FASE 2 adjudica si el hecho sostiene el claim o si queda solo el ítem de anexo.
- Cara que toca: d05 L7 (escalamiento urbano) — ABIERTA. El censo la describe, no la cierra.

## Verificación en el corpus (grep propio, 2026-11-15, corpus 1.192)

- "area_km2": 0 claims. "censo de β": 0 claims. "singleton": 0 claims. "built_up_area_m2": 0 claims. "0,8627": 0 claims. "M-82": 0 claims.
- Falsos positivos revisados: "beta" 11 claims (C-031, C-524, C-526, C-530, C-544, C-545, C-546, C-629, C-1021, C-1111 + 1 más) — todos sobre parámetros beta de simulaciones (sim_01, PAE-01, Higuchi 1/f^beta) o menciones genéricas, ninguno sobre el exponente β de escalamiento urbano; "escalamiento urbano" 1 claim (C-471, Bettencourt et al. 2007, la ley de potencia como conocimiento nuevo — no censa β ni nombra area_km2).
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1198; corpus 1.192; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "CENSO DE β EN ESCALAMIENTO URBANO — SINGLETON (ronda 20, F3, 2026-11-15): de las 32 variables numéricas candidatas de indicators.tab, solo area_km2 tiene β en banda [0,80, 0,90] (β = 0,8627 ± 0,0049, R² = 0,7490, n = 10.351, OLS log-log vs resident_pop); 0 variables además de area_km2 caen en banda por estimación puntual — el β en banda es un singleton. Matiz: built_up_area_m2 queda en el borde (β = 0,9023 ± 0,0065, IC 95% [0,8896, 0,9150] solapa 0,90), compatible con la banda por intervalo; la familia β-en-banda, si existe, es de a lo sumo dos. M-82 CONFIRMA, falsador declarado antes de correr; d05 L7 no se cierra (el muro R² sistemático de M-79 persiste).",
  "estado": "SE",
  "fuente": "ronda_20/ejecucion_f3/med_M82.json",
  "hash": "sha256:92d48f966545e3ac9ac082c9bcab22a66928404fc6ac3fc9b86b8baf9b7a7dbb",
  "grieta": "G-NUEVA: d05 L7 escalamiento urbano",
  "motivo": "origen: ronda_20/ejecucion_f3/med_M82.json + mediciones_r20.md — PREPARADA en ronda 20 F7, NO APLICADA. Dedup r20: ver dedup_f7_r20.json (umbral 0,5; 0 duplicados). Precedentes de línea: ítems M-57/M-65/M-76/M-79 en el anexo (escalamiento urbano); sin precedente directo de censo como claim — orden expresa del encargo F7 r20, FASE 2 adjudica."
}
```

- **Hash:** sha256 del documento que registra la medición (`med_M82.json`; sha verificado por `sha256sum` 2026-11-15).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.192):** ver `dedup_f7_r20.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
