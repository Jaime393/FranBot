# LECTURA REGLA-PART-SIK-01 ESPECIFICADA — PROPUESTA DE CLAIM (RONDA 19, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r19 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_18/ejecucion_f7/lectura_regla_tok_sik_r18.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

REGLA-PART-SIK-01 ESPECIFICADA Y VERIFICADA (ronda 19, F6, 2026-11-14): el partidor corregido de fórmulas quedó escrito por primera vez con texto literal de canon: se parte en [.;\n"]+ sin '|', se conserva el segmento solo si contiene '=' o '≥' o '∝' en crudo, se normaliza como la tokenización y se conserva el fragmento solo si su longitud es ≥ 6. El verificador independiente r19 reproduce sus valores afirmados con 0 diferencias en el alcance de fórmulas: 11 tuplas / 8 fragmentos distintos, mismas tuplas que en r15/r16/r17/r18, 0 perdidas, 0 nuevas; las 2 tuplas que dependen del '|' (fragmento xinablalnrho, Ξ = |∇ ln ρ|) las halla ahora el ejecutor. El hueco que F-F dejó registrado desde r14 — partidor sin texto de canon — queda cerrado por especificación. Caveat: la especificación es de método, no canon — la adopción como canon es decisión de FASE 2, patrón N-17.

## Por qué (C-2, C-3, C-9)

- Precedente: C-1181 (REGLA-PICK-SIK-01 especificada y verificada, r15) y C-1191 (REGLA-TOK-SIK-01 especificada y verificada, r18) son el mismo patrón — especificación escrita por F6 + verificador independiente con 0 diffs, preparada por F7 como claim y numerada como canon por FASE 2 (N-17, N-21). REGLA-PART-SIK-01 llevaba 5 rondas como método sin texto de canon (r14/r15/r16/r17/r18 lo aplicaron sin especificación escrita); el mapa r19 pedía escribirla como candidato a especificar. En r19 F6 escribe la especificación (`especificacion_partidor_r19.md`, 172 l.) y el verificador independiente la reproduce con 0 diffs en el alcance de fórmulas (F-PART19 PASA). El desbloqueo que el mapa pedía existe.
- La fuente es la especificación F6 r19 (`especificacion_partidor_r19.md`, sha 059886bd…), 2026-11-14, con el código literal de `extraer_formulas` (fuente `medir_reuse_sik_r18.py`, sha 8ee7f323…) y los valores re-medidos idénticos en r15/r16/r17/r18/r19 (`reuse_sik_r19.json`: 11 tuplas, 8 distintos, 0 sobra, 0 falta) y reproducidos por el verificador r19 (`verificador_independiente_r19.json`, reproducido=true, diferencias_n=0).
- C-7: esta lectura no adopta la regla como canon — eso es decisión de FASE 2 (patrón N-17), no ejecución de F6 ni preparación de F7. Tampoco propone transliterar ν → `nu` (la especificación lo deja como limpieza futura, a medir antes de adoptar) ni cambia el umbral 0,80 ni el de bandera 0,50 / 0,20: la identidad de fórmula (11/8) es un conteo exacto, no un umbral.
- Cara que toca: d08 L12 (regla del partidor SIK) — la especificación existe y está verificada; la cara cierra solo si FASE 2 la numera como canon.

## Verificación en el corpus (grep propio, 2026-11-14, corpus 1.189)

- "partidor": 0 claims. "PART-SIK": 0 claims. "11 tuplas": 0 claims. "tuplas": 0 claims. "fragmento": 0 claims. "xinablalnrho": 0 claims. "extraer_formulas": 0 claims.
- Falsos positivos revisados: ninguno — los 7 patrones dan 0. La palabra "fórmula" aparece en claims sobre otras fórmulas (p. ej. la métrica de Fisher, C-824), ninguna sobre el partidor de extracción SIK.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1195; corpus 1.189; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "REGLA-PART-SIK-01 ESPECIFICADA Y VERIFICADA (ronda 19, F6, 2026-11-14): el partidor corregido de fórmulas quedó escrito por primera vez con texto literal de canon: se parte en [.;\n\"]+ sin '|', se conserva el segmento solo si contiene '=' o '≥' o '∝' en crudo, se normaliza como la tokenización y se conserva el fragmento solo si su longitud es ≥ 6. El verificador independiente r19 reproduce sus valores afirmados con 0 diferencias en el alcance de fórmulas: 11 tuplas / 8 fragmentos distintos, mismas tuplas que en r15/r16/r17/r18, 0 perdidas, 0 nuevas; las 2 tuplas que dependen del '|' (fragmento xinablalnrho, Ξ = |∇ ln ρ|) las halla ahora el ejecutor. El hueco que F-F dejó registrado desde r14 — partidor sin texto de canon — queda cerrado por especificación. Caveat: la especificación es de método, no canon — la adopción como canon es decisión de FASE 2, patrón N-17.",
  "estado": "SE",
  "fuente": "ronda_19/ejecucion_f6/especificacion_partidor_r19.md",
  "hash": "sha256:059886bdc45cc4eaff4be129f2796f8d61053db125b6ec14383b972b632ead15",
  "grieta": "G-NUEVA: retejido_2026-11-12 no integrado en anexo-vi",
  "motivo": "origen: ronda_19/ejecucion_f6/especificacion_partidor_r19.md + verificador_independiente_r19.json — PREPARADA en ronda 19 F7, NO APLICADA. Dedup r19: ver dedup_f7_r19.json (umbral 0,5; 0 duplicados). Antecedentes: C-1181 (REGLA-PICK-SIK-01, r15, patrón N-17) y C-1191 (REGLA-TOK-SIK-01, r18, patrón N-21)."
}
```

- **Hash:** sha256 del documento que registra la lectura (`especificacion_partidor_r19.md`; sha verificado por `sha256sum` 2026-11-14).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.189):** ver `dedup_f7_r19.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
