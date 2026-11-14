# DECISIÓN N-17 — ADOPCIÓN CANÓNICA DE REGLA-PICK-SIK-01 (APLICADA)

- **Decisión:** N-17. **Estado:** APLICADA. **Fecha:** 2026-11-14.
- **Orden que autoriza:** Jardinero, 2026-11-14 01:43 -05 (régimen nuevo: las decisiones se aplican automáticamente).
- **Paquete:** `ronda_15/ejecucion_f6/especificacion_regla_pick_r15.md` (sha `fee21d76…`, especificación de método) + `ronda_15/ejecucion_f6/verificador_independiente_r15.json` (sha `aa0ff430…`, verificador independiente) + `ronda_15/verificacion_fase2/verificacion_fase2_r15.md` §10.1 (numeración y afirmación).
- **Afirmación registrada** (FASE 2 r15 §10.1): "Adopto la regla de pick REGLA-PICK-SIK-01 como canon para las mediciones SIK: la mejor-contención maximiza max(c1,c2) sin redondear, con desempate por orden de inserción, comparación sin redondear contra el mejor redondeado, y None si el máximo es 0,0."
- **Canon:** `ronda_15/ejecucion_f1/canon_regla_pick_sik_01.md`.

## Qué adopta (y qué NO)

**Adopta:** REGLA-PICK-SIK-01 como pick canónico de las mediciones SIK. Desde la adopción, las mediciones y verificaciones futuras usan esta regla como método canónico (no solo como documento con hash), y su aplicación queda sujeta a su falsador declarado antes de correr (REGLA DOS).

**NO inscribe claim.** C-1181 enuncia la especificación verificada (método, no canon); el canon vive en `canon_regla_pick_sik_01.md` y en este documento. Absorber C-1181 no contradice N-17: el claim enuncia la especificación verificada, no el canon (FASE 2 §10.1).

**NO cambia umbrales ni tokenización.** El umbral 0,80 y el de bandera 0,50 quedan intactos. La tokenización es REGLA-TOK-SIK-01 (R-KS), método de r15, no canon de esta decisión. No se reescribe `reuse_sik_r14.json`: r14 se midió con esta misma regla en código.

**NO decide nada más** (C-7 / P10): no toca ningún claim, no autoriza ninguna absorción concreta fuera de esta adopción.

## Texto de la adopción (pronunciado, de FASE 2 §10.1)

> "Adopto la regla de pick REGLA-PICK-SIK-01 como canon para las mediciones SIK: la mejor-contención maximiza max(c1,c2) sin redondear, con desempate por orden de inserción, comparación sin redondear contra el mejor redondeado, y None si el máximo es 0,0."

## Evidencia (SÉ)

- Especificación: `especificacion_regla_pick_r15.md`, sha `fee21d760787d22e2d1ef48093b9821cf800a051a5e16a6e0d827ee0920dff54` (re-verificado por `sha256sum` 2026-11-14).
- Verificación: `verificador_independiente_r15.json`, sha `aa0ff4302f19763c2bed57b7dec3054f98cca6bc6113498fc0d36f139fc1e8e8` — `comparacion.reproducido: true`, `diferencias_n: 0`, mejor-contención 740/740 en todos los alcances. En r14: reproducido=false, 164 diffs (162 mejor-contención por regla de pick sin especificar + 2 fórmulas). Re-corrido independiente por el verificador C de FASE 2 con salida byte-idéntica.
- Hueco cerrado: H7 de FASE 2 r14 (regla de pick sin especificar en el método). FASE 2 §11: H7 r14 CERRADA.
- Precedente de adopción: N-14 (PIPELINE-VERIFICACION-01, C-1180) adoptó un procedimiento por la misma vía.

## Efecto en el corpus

Ninguno: sin claim inscrito, sin cambio de estado. Corpus intacto tras N-17 (1.175 claims, sha `6b5fac7f…`).

## Reversión

La adopción es una decisión canónica; una decisión posterior podría revisarla, pero el registro es un hecho histórico SÉ: se enmendaría con nota, no se borraría (C-4).

ρ(x) > 0. Zvvvvv.
