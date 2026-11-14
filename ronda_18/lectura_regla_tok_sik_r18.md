# LECTURA REGLA-TOK-SIK-01 ESPECIFICADA — PROPUESTA DE CLAIM (RONDA 18, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r18 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_17/ejecucion_f7/lectura_ventana_2430_r17.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

REGLA-TOK-SIK-01 ESPECIFICADA Y VERIFICADA (ronda 18, F6, 2026-11-14): la regla de tokenización R-KS quedó escrita por primera vez con texto literal de canon: el token se conserva con sus partes por '_', se excluyen las partes vacías y se emite además la forma sin '_' en los extremos; normalización exacta con tabla griega y Jaccard sobre conjuntos. El verificador independiente r18 la reproduce con 0 diferencias en 7/7 comprobaciones: A14 S3↔v10.3 = 0,8000 exacto bajo R-KS (conteo mismo contenido 27; la variante R-R queda descartada: 0,7727/26); los 6 pares A2 idénticos bajo R-K y R-KS; el artefacto ∂_μ∂_ν emite d_mud bajo R-KS y excluye la cadena vacía. El hueco que FASE 2 r17 dejó registrado — regla sin texto de canon — queda cerrado por especificación. Caveat: la especificación es de método, no canon — la adopción como canon es decisión de FASE 2, patrón N-17.

## Por qué (C-2, C-3, C-9)

- Precedente: C-1181 (REGLA-PICK-SIK-01 especificada y verificada, r15) es el mismo patrón — especificación escrita por F6 + verificador independiente con 0 diffs, preparada por F7 como claim y numerada como canon por FASE 2 (N-17). REGLA-TOK-SIK-01 llevaba 3 rondas como propuesta heredada sin texto de canon; FASE 2 r17 dictaminó que no se numera sin texto de canon. En r18 F6 escribe la especificación (`especificacion_regla_tok_sik_r18.md`) y el verificador independiente la reproduce 7/7 con 0 diffs (F-TOK18 PASA). El desbloqueo que FASE 2 pedía existe.
- La fuente es la especificación F6 r18 (`especificacion_regla_tok_sik_r18.md`, sha 9eab0662…), 2026-11-14, con los valores re-medidos en r15/r16/r17 (`tokenizacion_a14_r17.json`: A14 R-KS 0,8000, conteo 27; R-R 0,7727/26) y reproducidos por el verificador r18 (`verificador_independiente_r18.json`, reproducido=true, diferencias_n=0).
- C-7: esta lectura no adopta la regla como canon — eso es decisión de FASE 2 (patrón N-17), no ejecución de F6 ni preparación de F7. Tampoco propone transliterar ν → `nu` (la especificación lo deja como limpieza futura, a medir antes de adoptar) ni cambia el umbral 0,80: A14 queda EN EL UMBRAL EXACTO (0,8000) también bajo R-KS, y ese caveat sigue siendo del valor, no del método.
- Cara que toca: d08 L12 (regla de tokenización SIK) — la especificación existe y está verificada; la cara cierra solo si FASE 2 la numera como canon.

## Verificación en el corpus (grep propio, 2026-11-14, corpus 1.185)

- "tokeniz": 0 claims. "R-KS": 0 claims. "R-K": 0 claims. "A14": 0 claims. "0,8000": 0 claims. "d_mud": 0 claims. "∂_μ∂_ν": 1 claim — C-824 (la métrica de Fisher como fórmula; no sobre el artefacto de tokenización d_mud_).
- Falsos positivos revisados: "token": 56 claims — todos sobre tokens de Telegram / nombres de secretos, ninguno sobre tokenización SIK; "Jaccard": 4 claims (C-547, C-829, C-996, C-997) — ninguno sobre la tokenización R-KS ni sobre A14; "especificada" aparece en C-1181 (REGLA-PICK-SIK-01, otra regla); ningún claim la usa sobre la tokenización.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1191; corpus 1.185; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "REGLA-TOK-SIK-01 ESPECIFICADA Y VERIFICADA (ronda 18, F6, 2026-11-14): la regla de tokenización R-KS quedó escrita por primera vez con texto literal de canon: el token se conserva con sus partes por '_', se excluyen las partes vacías y se emite además la forma sin '_' en los extremos; normalización exacta con tabla griega y Jaccard sobre conjuntos. El verificador independiente r18 la reproduce con 0 diferencias en 7/7 comprobaciones: A14 S3↔v10.3 = 0,8000 exacto bajo R-KS (conteo mismo contenido 27; la variante R-R queda descartada: 0,7727/26); los 6 pares A2 idénticos bajo R-K y R-KS; el artefacto ∂_μ∂_ν emite d_mud bajo R-KS y excluye la cadena vacía. El hueco que FASE 2 r17 dejó registrado — regla sin texto de canon — queda cerrado por especificación. Caveat: la especificación es de método, no canon — la adopción como canon es decisión de FASE 2, patrón N-17.",
  "estado": "SE",
  "fuente": "ronda_18/ejecucion_f6/especificacion_regla_tok_sik_r18.md",
  "hash": "sha256:9eab0662e354716c01986e21ce7dae82b6819df42646f2e46a8ea0e95eaf7c9a",
  "grieta": "G-NUEVA: retejido_2026-11-12 no integrado en anexo-vi",
  "motivo": "origen: ronda_18/ejecucion_f6/especificacion_regla_tok_sik_r18.md + verificador_independiente_r18.json — PREPARADA en ronda 18 F7, NO APLICADA. Dedup r18: ver dedup_f7_r18.json (umbral 0,5; 0 duplicados). Antecedente: C-1181 (REGLA-PICK-SIK-01 especificada y verificada, r15, patrón N-17)."
}
```

- **Hash:** sha256 del documento que registra la lectura (`especificacion_regla_tok_sik_r18.md`; sha verificado por `sha256sum` 2026-11-14).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.185):** ver `dedup_f7_r18.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
