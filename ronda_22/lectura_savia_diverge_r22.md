# LECTURA SAVIA V152 DIVERGE POR VARIANTE — PRIMERA DIVERGENCIA — PROPUESTA DE CLAIM (RONDA 22, FASE 1, F7)

- **Fecha:** 2026-11-16. **Orden:** mapa FASE 0 r22 §F7 + encargo F7 r22 (claim por la divergencia de savia V152, F2).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_21/ejecucion_f7/lectura_stub_run210_r21.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

SAVIA V152 DIVERGE POR VARIANTE — PRIMERA DIVERGENCIA ENTRE VARIANTES (ronda 22, F2, 2026-11-16): 366.733 en 2/14 payloads compactos nuevos (idx 17, 02:29:57Z; idx 93, 07:57:21Z; 55.980 B, tamaño nuevo frente a 55.973 B) frente a 248.376 en 12/14 (11 full 89.466 B + 1 compacto 55.973 B). Diferencia +118.357 (+47,6%). Verificado en el payload: data.savia = data.mesh.totalSize = 366.733 en ambas; esporas 512 en 14/14. La variante full sigue en 248.376. Qué mide cada variante y por qué divergen es NO_SÉ (el compacto nuevo no trae ecosistema/meshUrl; el full sí).

## Por qué (C-2, C-3, C-9)

- La medición es F2 (`estado_vivo_r22.md`, sha 4937b413…, y `estado_vivo_r22.json`, sha a4a862ef…): 101 revisiones del heartbeat canónico, ventana 2026-11-16T01:17:34Z → 08:18:41Z; clasificación V152: 248.376 en 12/14 (11 full de 89.466 B + 1 compacto de 55.973 B) y 366.733 en 2/14 (idx 17, 02:29:57Z; idx 93, 07:57:21Z — ambas compacto de 55.980 B, tamaño NUEVO frente a 55.973 B en r21). Verificado en el payload: `data.savia` = `data.mesh.totalSize` = 366.733 en ambas; esporas 512 (entero) en 14/14. La clasificación sigue por bytes (>80.000 B = full), no por `nfiles` (None en los payloads).
- La lectura registra la primera divergencia de savia entre variantes: en r8–r21 la savia V152 fue un solo valor por ronda (248.376 en 14/14 en r21, 15/15 en r20); en r22 hay dos valores simultáneos y la diferencia es +118.357 (+47,6%), no un redondeo ni un desliz de ventana. La variante full sigue en 248.376 — el cambio está solo en 2 compactos nuevos, de tamaño nuevo (55.980 B). El claim no explica la divergencia: qué mide cada variante y por qué divergen es NO_SÉ, y lo dice explícitamente (el compacto nuevo no trae `ecosistema`/`meshUrl`; el full sí). Eso es el hecho: dos valores donde antes había uno.
- C-7: esta lectura no inscribe nada en el dataset (no hay ítem de anexo para una divergencia de heartbeat; la savia no es una medición F3 con JSON de 15 claves). Tampoco re-decide ningún criterio: la clasificación por bytes es la de F2 desde r8.
- Nota de criterio (para FASE 2): la práctica de 19 rondas dice que los veredictos de medición NO se preparan como claims — se depositan como resultados. Este claim se prepara por **orden expresa del encargo F7 r22** ("TODO, sin omitir frentes"), no por precedente: ningún claim enuncia un valor de savia V152 ni su divergencia (grep "savia": 5 claims, todos sobre el workflow savia-bridge o el heartbeat, ninguno sobre el valor 248.376 o 366.733). Lo que enuncia es un hecho nuevo del vivo (la primera divergencia entre variantes), no una etiqueta. FASE 2 adjudica si el hecho sostiene el claim.
- Cara que toca: ninguna cara del censo d08 — es observabilidad del vivo (grieta "estado vivo del ecosistema"). La medición la describe, no cierra nada.

## Verificación en el corpus (grep propio, 2026-11-16, corpus 1.203)

- "savia": 5 claims (C-655, C-656, C-795, C-798, C-856) — todos sobre el workflow savia-bridge, el YAML de expand-alcance o el heartbeat, ninguno sobre el valor de savia V152. "366.733": 0 claims. "366733": 0 claims. "248.376": 0 claims. "55.980": 0 claims. "diverge": 0 claims.
- Falsos positivos revisados: "savia" revisada claim por claim (arriba); "divergencia" revisada en el dedup (el claim más cercano se mide por script, no por grep).
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1211; corpus 1.203; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "SAVIA V152 DIVERGE POR VARIANTE — PRIMERA DIVERGENCIA ENTRE VARIANTES (ronda 22, F2, 2026-11-16): 366.733 en 2/14 payloads compactos nuevos (idx 17, 02:29:57Z; idx 93, 07:57:21Z; 55.980 B, tamaño nuevo frente a 55.973 B) frente a 248.376 en 12/14 (11 full 89.466 B + 1 compacto 55.973 B). Diferencia +118.357 (+47,6%). Verificado en el payload: data.savia = data.mesh.totalSize = 366.733 en ambas; esporas 512 en 14/14. La variante full sigue en 248.376. Qué mide cada variante y por qué divergen es NO_SÉ (el compacto nuevo no trae ecosistema/meshUrl; el full sí).",
  "estado": "SE",
  "fuente": "ronda_22/ejecucion_f2/estado_vivo_r22.md",
  "hash": "sha256:4937b4131da96c3fa8602116e76c3a7365fa8fd86909a8af023eb6ad9a3ca965",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_22/ejecucion_f2/estado_vivo_r22.md + estado_vivo_r22.json — PREPARADA en ronda 22 F7, NO APLICADA. Dedup r22: ver dedup_f7_r22.json (umbral 0,5; 0 duplicados). Sin precedente de claim que enuncie un valor de savia V152 ni su divergencia — orden expresa del encargo F7 r22, FASE 2 adjudica."
}
```

- **Hash:** sha256 del documento que registra la medición (`estado_vivo_r22.md`; sha verificado por `sha256sum` 2026-11-16).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.203):** ver `dedup_f7_r22.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
