# LECTURA CORRECCIÓN DE SERIE 25..119 = 83 CONGRESOS — PROPUESTA DE CLAIM (RONDA 16, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r16 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_14/ejecucion_f7/lectura_corr_p32_r14.md` (corrección de precedente, formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

CORRECCIÓN DE SERIE — LA SERIE 25..119 SON 83 CONGRESOS, NO 95 (ronda 16, F3, 2026-11-14, CORR-SERIE-R16): la serie de M-64/M-67 (DW-NOMINATE dim1, Voteview) y M-70 (dim2) cubre 83 congresos, 34..119. Dos causas: los Congresos 25–33 no tienen partido R (party_code 200 ausente, congresos pre-sistema de partidos); los Congresos 115–117 se caen por el parseo — su party_code viene como cadena flotante ('100.0'/'200.0') y el int() del protocolo M-61/M-64/M-67 descarta esas filas. El veredicto de M-67 no cambia: con parseo tolerante a flotantes, P dim1(115/116/117) = 0,8900/0,8840/0,8825 y los ratios contra P(80) = 1,7889/1,7769/1,7739, todos por debajo del máximo publicado 1,9719. Se corrige la descripción de la serie, no el veredicto.

## Por qué (C-2, C-3, C-9)

- Precedente: el corpus ya inscribe correcciones de precedente como claims (C-1177: CORR-P32-R14 — el Doc 32 existe; el 404 era un artefacto de ID truncado). Lo nuevo aquí es la corrección del conteo de la serie Voteview usada por M-64/M-67/M-70, con sus dos causas medidas y la verificación de que el veredicto de M-67 se sostiene (los tres congresos recuperados con parseo tolerante dan ratios 1,77–1,79, por debajo del máximo 1,9719).
- La fuente es la medición F3 r16 (`mediciones_r16.md`, sha b352d709…; `med_M70.json`, sha c958e5fa…), 2026-11-14, con los datos HSall_members.csv (6.201.455 B, sha 495aee95…) en `datos/` de r16. La serie dim1 de M-67 tiene también 83 congresos (34..119) y tampoco incluye 115–117: la corrección alcanza a M-64/M-67, no solo a M-70.
- C-7: esta lectura no afirma que el protocolo con int() sea incorrecto en general: descarta filas con party_code flotante, y ese descarte es el que se documenta. Tampoco reabre M-67: su veredicto (umbral > 2 inalcanzable, máximo 1,9719) se re-verificó aparte y se sostiene.
- Cara que toca: d05 L4 (polarización, medida y mecanismo) — documenta la corrección del protocolo sin cerrar (M-70 fue NO_SÉ por ancla degenerada; la pregunta central de d05 L4 sigue abierta).

## Verificación en el corpus (grep propio, 2026-11-14, corpus 1.178)

- "83 congresos": 0 claims. "Congreso": 0 claims. "congreso": 0 claims. "DW-NOMINATE": 0 claims. "Voteview": 0 claims. "dim1": 0 claims. "1,9719": 0 claims. "P(80)": 0 claims. "polarización": 0 claims. "CORR-SERIE": 0 claims. "115–117": 0 claims. "100.0": 11 claims — C-653, C-749, C-794, C-852 y otros (todos porcentajes de cobertura flow_id, 100.0%; ninguno sobre party_code).
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1186; corpus 1.178; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "CORRECCIÓN DE SERIE — LA SERIE 25..119 SON 83 CONGRESOS, NO 95 (ronda 16, F3, 2026-11-14, CORR-SERIE-R16): la serie de M-64/M-67 (DW-NOMINATE dim1, Voteview) y M-70 (dim2) cubre 83 congresos, 34..119. Dos causas: los Congresos 25–33 no tienen partido R (party_code 200 ausente, congresos pre-sistema de partidos); los Congresos 115–117 se caen por el parseo — su party_code viene como cadena flotante ('100.0'/'200.0') y el int() del protocolo M-61/M-64/M-67 descarta esas filas. El veredicto de M-67 no cambia: con parseo tolerante a flotantes, P dim1(115/116/117) = 0,8900/0,8840/0,8825 y los ratios contra P(80) = 1,7889/1,7769/1,7739, todos por debajo del máximo publicado 1,9719. Se corrige la descripción de la serie, no el veredicto.",
  "estado": "SE",
  "fuente": "ronda_16/ejecucion_f3/mediciones_r16.md",
  "hash": "sha256:b352d70979004d735e43f99809bf339668d348c458fd82e59f408ee02d1548c8",
  "grieta": "G-NUEVA: d05 L4 polarización (medida y mecanismo)",
  "motivo": "origen: ronda_16/ejecucion_f3/mediciones_r16.md + med_M70.json — PREPARADA en ronda 16 F7, NO APLICADA. Dedup r16: ver dedup_f7_r16.json (umbral 0,5; 0 duplicados). Antecedente: C-1177 (CORR-P32-R14, corrección de precedente como claim)."
}
```

- **Hash:** sha256 del documento que registra la lectura (`mediciones_r16.md`; sha verificado por `sha256sum` 2026-11-14).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.178):** ver `dedup_f7_r16.json` (corrida por script + corrida inline, idénticas cifra por cifra).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
