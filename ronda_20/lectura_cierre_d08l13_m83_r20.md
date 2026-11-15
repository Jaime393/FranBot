# LECTURA CIERRE DE d08 L13 — PROPUESTA DE CLAIM (RONDA 20, FASE 1, F7)

- **Fecha:** 2026-11-15. **Orden:** mapa FASE 0 r20 §F7 + encargo F7 r20 (claim por M-83 CONFIRMA; el claim registra el cierre).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_19/ejecucion_f7/lectura_regla_part_sik_r19.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

CIERRE DE d08 L13 — VERIFICACIÓN M-83 (ronda 20, F3, 2026-11-15): el hash de paper_df.md citado por C-791 y C-944 (sha256:304a41bf…) coincide byte a byte con el archivo local, y las 3 mediciones que solo vivían en ese documento — topografía andina SRTM D_f 2,20, dosel amazónico GLAD D_f 2,79, porosidad SoilGrids bdod D_f 2,82 — quedan verificadas en el corpus con fuente + hash; siguen fuera del dataset CSV (0 coincidencias) por exclusión deliberada (fuera de banda). La cara d08 L13 CIERRA — primera cara que cierra desde d04 L13 en r15.

## Por qué (C-2, C-3, C-9)

- La medición es M-83 (`med_M83.json`, 15 claves, sha c80b15b7…): verificación en tres pasos (búsqueda literal por alias en claims.jsonl + sha256sum directo de paper_df.md + 0 coincidencias en el dataset CSV); falsador declarado en `declaracion_falsadores_r20.md` (2026-11-15T07:06:00Z) antes de correr: CONFIRMA si las 3 son verificables en el corpus con fuente + hash — la cara cierra. Resultado: 3/3 verificables → CONFIRMA. Verificación independiente por re-búsqueda con grep -n y sha256sum directo: C-791 1 vez, C-944 1 vez; 'topografía andina' 2 líneas, 'dosel' 2, 'bdod' 2 (las 2 son C-791 y C-944 en cada caso); sha local = hash citado; dataset CSV 0 coincidencias — idéntico. Control: las 3 están en mediciones_informe.md (ciclo 74, M1/M2/M5).
- El cierre es por verificación, no por re-medición: el hueco era de existencia en el corpus, no de medida — los D_f 2,20/2,79/2,82 se toman como publicados, sin re-correrlos. Que las 3 estén en el corpus no las convierte en filas del dataset: la distinción 32/29 se preserva por orden (C-944 la registra explícitamente) y el dataset sigue en 30 filas.
- C-7: esta lectura no inscribe las 3 mediciones en el dataset CSV (siguen fuera por exclusión deliberada) ni re-mide sus D_f. El ítem de anexo M-83, preparado aparte, registra el cierre en el anexo (precedentes N-18/N-19/N-20/N-22/N-23/N-25/N-26/N-27). Tampoco re-decide la exclusión fuera de banda: la registra.
- Nota de criterio (para FASE 2): la práctica de 17 rondas (r18 F7 §4, mapa r20 §F3) dice que los veredictos de medición NO se preparan como claims. Este claim se prepara por **orden expresa del encargo F7 r20** ("claim por M-83 CONFIRMA… el claim registra el cierre"), no por precedente: el cierre de d04 L13 en r15 no quedó registrado como claim propio (se cerró por N-16 + M-63/M-66, sin claim de cierre). Lo que enuncia es un evento del corpus (una cara que se cierra, la primera desde r15), no solo la etiqueta del veredicto. FASE 2 adjudica si el evento sostiene el claim o si queda solo el ítem de anexo.
- Cara que toca: d08 L13 (3 mediciones solo en paper_df) — **CERRADA en r20**. Caras cerradas: 18 → 19 si FASE 2 adopta; abiertas 59 → 58.

## Verificación en el corpus (grep propio, 2026-11-15, corpus 1.192)

- "M-83": 0 claims. "d08 L13 CIERRA": 0 claims. "304a41bf": 2 claims (C-791, C-944 — los dos claims que citan el hash; este claim registra la verificación del hash, no lo cita por primera vez). "SRTM": 2 claims (C-791, C-944). "GLAD": 2 claims (C-791, C-944). "bdod": 2 claims (C-791, C-944). "primera cara que cierra": 0 claims.
- Falsos positivos revisados: "d08 L13" 2 claims (C-570, C-1134 — menciones genéricas de la cara en conteos de huecos/conflictos, ninguna sobre las 3 mediciones ni su verificación). C-791 y C-944 son los padres de contenido (nombran las 3 con sus D_f y citan paper_df.md); este claim no duplica su enunciado — registra la verificación byte a byte del hash y el cierre de la cara, hechos que ninguno de los dos enuncia (ver dedup: el método es el árbitro).
- **Conclusión: la lectura no tiene claim que enuncie la verificación ni el cierre. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1199; corpus 1.192; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "CIERRE DE d08 L13 — VERIFICACIÓN M-83 (ronda 20, F3, 2026-11-15): el hash de paper_df.md citado por C-791 y C-944 (sha256:304a41bf…) coincide byte a byte con el archivo local, y las 3 mediciones que solo vivían en ese documento — topografía andina SRTM D_f 2,20, dosel amazónico GLAD D_f 2,79, porosidad SoilGrids bdod D_f 2,82 — quedan verificadas en el corpus con fuente + hash; siguen fuera del dataset CSV (0 coincidencias) por exclusión deliberada (fuera de banda). La cara d08 L13 CIERRA — primera cara que cierra desde d04 L13 en r15.",
  "estado": "SE",
  "fuente": "ronda_20/ejecucion_f3/med_M83.json",
  "hash": "sha256:c80b15b74bdf06f07ab093e40752593685554ea4ac2667ced42e7dd59f47e41f",
  "grieta": "G-NUEVA: tejido_2026-11-12 no integrado en anexo-vi",
  "motivo": "origen: ronda_20/ejecucion_f3/med_M83.json + mediciones_r20.md — PREPARADA en ronda 20 F7, NO APLICADA. Dedup r20: ver dedup_f7_r20.json (umbral 0,5; 0 duplicados). Padres de contenido: C-791 y C-944 (nombran las 3 mediciones y citan paper_df.md con hash 304a41bf…); este claim registra la verificación byte a byte del hash y el cierre de la cara. Sin precedente directo de claim de cierre de cara — orden expresa del encargo F7 r20, FASE 2 adjudica."
}
```

- **Hash:** sha256 del documento que registra la medición (`med_M83.json`; sha verificado por `sha256sum` 2026-11-15). El hash verificado (paper_df.md, 304a41bf…) va citado dentro del texto del claim, como en C-791/C-944.
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.192):** ver `dedup_f7_r20.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
