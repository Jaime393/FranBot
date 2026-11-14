# CANON — REGLA-PICK-SIK-01 (adoptada por decisión N-17, ronda 15, 2026-11-14)

- **Decisión:** N-17 (numerada por FASE 2 r15 §10.1). **Estado:** CANON VIGENTE desde 2026-11-14.
- **Orden que autoriza:** Jardinero, 2026-11-14 01:43 -05 (régimen nuevo: las decisiones se aplican automáticamente).
- **Afirmación registrada** (FASE 2 r15 §10.1): "Adopto la regla de pick REGLA-PICK-SIK-01 como canon para las mediciones SIK: la mejor-contención maximiza max(c1,c2) sin redondear, con desempate por orden de inserción, comparación sin redondear contra el mejor redondeado, y None si el máximo es 0,0."
- **Documento de decisión:** `ronda_15/ejecucion_f1/decision_n17_r15.md`.
- **Especificación de origen:** `ronda_15/ejecucion_f6/especificacion_regla_pick_r15.md`, sha `fee21d760787d22e2d1ef48093b9821cf800a051a5e16a6e0d827ee0920dff54` (re-verificado por `sha256sum` 2026-11-14).
- **Evidencia de verificación:** `ronda_15/ejecucion_f6/verificador_independiente_r15.json`, sha `aa0ff4302f19763c2bed57b7dec3054f98cca6bc6113498fc0d36f139fc1e8e8` — `comparacion.reproducido: true`, `diferencias_n: 0`, mejor-contención 740/740 en todos los alcances (en r14: reproducido=false, 164 diffs). Re-corrido de forma independiente por el verificador C de FASE 2 con salida byte-idéntica.

## La regla (texto canónico, de la especificación F6 r15 §2)

> **Mejor-contención:** para cada etiqueta origen `n` y cada candidato destino `m ≠ n`, sean c1 = contención(src→dst) y c2 = contención(dst→src), ambas SIN redondear. El pick maximiza `max(c1, c2)`. Un candidato reemplaza al mejor vigente solo si `max(c1, c2) > max(mejor_c1_almacenado, mejor_c2_almacenado)`, donde los valores almacenados son `round(c1, 4)` y `round(c2, 4)` del candidato vigente. Desempate: primer candidato en orden de inserción del sistema destino. Si ningún candidato cumple `max(c1, c2) > 0.0`, el pick es None con ambas contenciones 0.0.
>
> **Mejor-correspondencia:** maximizar el Jaccard SIN redondear; desempate primer candidato en orden de inserción; None cuando el mejor Jaccard es 0.0.
>
> **Orden de inserción del sistema destino** (orden de construcción del script de medición): S2 1..10 (secciones I–X); S3 orden de la tabla de axiomas_a0_a57.md (A0..A57 en orden de aparición); FranBot / P48 / Base orden de las claves en CONSEJO_58.json; v10.3 orden de `axiomas_v10_3` con A0 y A5 añadidos AL FINAL (son voces, no axiomas de la lista).

## Qué autoriza

- Que las mediciones SIK futuras usen esta regla como pick canónico del método, sin re-derivarla del código en cada verificación.
- El hueco H7 de FASE 2 r14 (regla de pick sin especificar) queda cerrado por especificación y por adopción canónica.

## Qué NO decide (C-7 / P10)

- No cambia el umbral 0,80 ni el de bandera 0,50.
- No cambia la tokenización: eso es REGLA-TOK-SIK-01 (R-KS), aplicada en r15 como método, no adoptada aquí como canon.
- No reescribe `reuse_sik_r14.json`: r14 se midió con esta misma regla en código; la especificación rige las mediciones futuras y la verificación r15.
- No afirma que la regla sea la única posible: es la regla que el ejecutor ya ejecutaba (código r12/r13/r14); especificarla no cambia ningún número publicado, solo hace explícito lo que el código hacía.
- No inscribe claim: C-1181 enuncia la especificación verificada (método, no canon); el canon vive en este documento y en el de decisión.

## Reversión

La adopción es una decisión canónica; una decisión posterior podría revisarla, pero el registro es un hecho histórico SÉ: se enmendaría con nota (como N-11 enmendó C-538/C-623 a REFUTADO sin borrar el texto), no se borraría (C-4).

ρ(x) > 0. Zvvvvv.
