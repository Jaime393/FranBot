# LECTURA REGLA-PICK-SIK-01 — PROPUESTA DE CLAIM (RONDA 15, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r15 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_14/ejecucion_f7/lectura_primer_fallo_r14.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

REGLA-PICK-SIK-01 ESPECIFICADA Y VERIFICADA (ronda 15, F6, 2026-11-14): la regla de pick de mejor-contención quedó especificada por escrito (maximiza max(c1,c2) sin redondear, con desempate por orden de inserción, comparación sin redondear contra el mejor redondeado, y None si el máximo es 0,0); el verificador independiente r15 reproduce la mejor-contención 740/740 con 0 diferencias en todos los alcances (en r14: reproducido=false, 164 diffs). El hueco H7 de FASE 2 r14 queda cerrado por especificación. Caveat: la especificación es de método, no canon — la adopción como canon es una decisión pendiente de numerar (FASE 2); los números publicados no cambian (el ejecutor ya ejecutaba esta regla en código desde r12).

## Por qué (C-2, C-3, C-9)

- Precedente: las lecturas de verificación se preparan como claims cuando enuncian un hecho nuevo con fuente y fecha (C-1177 CORR-P32-R14: un hallazgo de verificación). Lo nuevo aquí es doble y verificable por terceros: (a) la regla de pick existe ahora por escrito (`especificacion_regla_pick_r15.md`, sha fee21d76…); (b) el verificador independiente r15 la replica exactamente y reproduce 740/740 con 0 diffs (`verificador_independiente_r15.json`, sha aa0ff430…, `comparacion.reproducido: true`, `diferencias_n: 0`), donde r14 daba reproducido=false con 164 diffs (162 mejor-contención por regla de pick sin especificar + 2 fórmulas).
- La divergencia r14 era definicional, no de medición: el ejecutor maximizaba max(c1,c2) con desempate al primero en orden de inserción y comparación sin redondear contra el mejor almacenado redondeado; el verificador maximizaba solo c1 con desempate ascendente. El verificador r14 probó 13 reglas alternativas (mejor: 111 diffs) sin dar con la del ejecutor. La especificación r15 escribe la regla del ejecutor; no cambia ningún número publicado, solo hace explícito lo que el código hacía (F6 §2).
- C-7: esta lectura no afirma que la regla sea canon: la especificación es de método y la adopción como canon es una decisión pendiente de numerar (FASE 2 / conectar). El caveat forma parte del texto. Tampoco afirma que el caveat A14 desaparezca por esta regla: A14 (26 o 27 según tokenización) se resuelve por REGLA-TOK-SIK-01 (R-KS), no por la regla de pick — queda registrado en el verificador r15 (A14 = 0,8000, conteo 27 bajo R-KS).
- Cara que toca: d08 L12 (G06, mecanismo de validación) — avanza sin cerrar (la regla cierra H7 como hueco de método; G06 sigue abierta como grieta).

## Verificación en el corpus (grep propio, 2026-11-14, corpus 1.175)

- "REGLA-PICK": 0 claims. "740/740": 0 claims. "reproducido": 0 claims. "especificación" (con acento) y "especificacion": 0 claims sobre el pick SIK.
- "H7": 1 claim (C-598) — falso positivo (cita de Vicsek 1990, Physica A 167:315-321; la coincidencia es el substring "167", no el hallazgo H7 de FASE 2 r14).
- "164 diffs": 0 claims. "mejor-contención" / "mejor-contencion": 0 claims.
- "G-NUEVA: retejido_2026-11-12 no integrado en anexo-vi": 19 claims (entre ellos C-1180, la adopción N-14 del procedimiento de verificación) — la grieta es la misma familia que la de C-1180: las listas SIK viven en el retejido.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1181; F1 r15 ya aplicó C-1180, corpus 1.175; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "REGLA-PICK-SIK-01 ESPECIFICADA Y VERIFICADA (ronda 15, F6, 2026-11-14): la regla de pick de mejor-contención quedó especificada por escrito (maximiza max(c1,c2) sin redondear, con desempate por orden de inserción, comparación sin redondear contra el mejor redondeado, y None si el máximo es 0,0); el verificador independiente r15 reproduce la mejor-contención 740/740 con 0 diferencias en todos los alcances (en r14: reproducido=false, 164 diffs). El hueco H7 de FASE 2 r14 queda cerrado por especificación. Caveat: la especificación es de método, no canon — la adopción como canon es una decisión pendiente de numerar (FASE 2); los números publicados no cambian (el ejecutor ya ejecutaba esta regla en código desde r12).",
  "estado": "SE",
  "fuente": "ronda_15/ejecucion_f6/especificacion_regla_pick_r15.md",
  "hash": "sha256:fee21d760787d22e2d1ef48093b9821cf800a051a5e16a6e0d827ee0920dff54",
  "grieta": "G-NUEVA: retejido_2026-11-12 no integrado en anexo-vi",
  "motivo": "origen: ronda_15/ejecucion_f6/especificacion_regla_pick_r15.md + verificador_independiente_r15.json — PREPARADA en ronda 15 F7, NO APLICADA. Dedup r15: ver dedup_f7_r15.json (umbral 0,5; 0 duplicados). Antecedentes: H7 de FASE 2 r14 (regla de pick sin especificar; verificador r14 reproducido=false, 164 diffs); F6 r15 especifica la regla y el verificador reproduce 740/740. La adopción como canon es una decisión pendiente de numerar (FASE 2)."
}
```

- **Hash:** sha256 del documento que registra la lectura (`especificacion_regla_pick_r15.md`; sha verificado por `sha256sum` 2026-11-14). Segunda fuente: `verificador_independiente_r15.json` (sha aa0ff4302f19763c2bed57b7dec3054f98cca6bc6113498fc0d36f139fc1e8e8).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.175):** ver `dedup_f7_r15.json` (corrida por script + corrida inline, idénticas cifra por cifra).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
