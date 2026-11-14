# ESPECIFICACIÓN DE LA REGLA DE PICK — REGLA-PICK-SIK-01 (ronda 15, F6)

- **Fecha:** 2026-11-14. **Frente:** F6, ronda 15. **Estado:
  ESPECIFICACIÓN DE MÉTODO, NO CANON.** Este documento cierra el
  hueco H7 de FASE 2 r14 (la regla de pick de mejor-contención no
  estaba especificada en el método) escribiéndola antes de medir.
  La adopción como canon es una decisión (pendiente sin número; la
  numera FASE 2 / conectar) — no una ejecución.
- **Medición que la aplica:** `medir_reuse_sik_r15.py` →
  `reuse_sik_r15.json` (ejecutor) y `verificador_independiente_r15.py`
  → `verificador_independiente_r15.json` (verificador independiente,
  que la replica exactamente). Falsador F-PICK en
  `declaracion_falsador_h_sik_r15.md`: el verificador reproduce la
  mejor-contención 740/740.

## 1. El hueco que cierra (r14, SÉ)

El verificador independiente r14 dio `reproducido: false` con 164
diffs: 162 en mejor-contención + 2 en fórmulas. Diagnóstico verificado
por el ejecutor r14 (§7 de `h_sik_r14.md`): la divergencia era
definicional, no de medición — el ejecutor maximizaba `max(c1, c2)`
con desempate al primero en orden de inserción y comparación sin
redondear contra el mejor almacenado redondeado; el verificador
maximizaba solo `c1` con desempate al primero en orden ascendente.
El verificador probó 13 reglas alternativas (mejor: 111 diffs) sin
dar con la del ejecutor. Los 142 Jaccard, la correspondencia 740/740,
las banderas hacia S2 y A14 reproducían.

## 2. Regla especificada (REGLA-PICK-SIK-01)

> **Mejor-contención:** para cada etiqueta origen `n` y cada
> candidato destino `m ≠ n`, sean c1 = contención(src→dst) y
> c2 = contención(dst→src), ambas SIN redondear. El pick maximiza
> `max(c1, c2)`. Un candidato reemplaza al mejor vigente solo si
> `max(c1, c2) > max(mejor_c1_almacenado, mejor_c2_almacenado)`,
> donde los valores almacenados son `round(c1, 4)` y `round(c2, 4)`
> del candidato vigente. Desempate: primer candidato en orden de
> inserción del sistema destino. Si ningún candidato cumple
> `max(c1, c2) > 0.0`, el pick es None con ambas contenciones 0.0.
>
> **Mejor-correspondencia:** maximizar el Jaccard SIN redondear;
> desempate primer candidato en orden de inserción; None cuando el
> mejor Jaccard es 0.0.
>
> **Orden de inserción del sistema destino** (orden de construcción
> del script de medición): S2 1..10 (secciones I–X); S3 orden de la
> tabla de axiomas_a0_a57.md (A0..A57 en orden de aparición); FranBot /
> P48 / Base orden de las claves en CONSEJO_58.json; v10.3 orden de
> `axiomas_v10_3` con A0 y A5 añadidos AL FINAL (son voces, no
> axiomas de la lista).

**Por qué esta y no otra:**
- Es la regla que el ejecutor ya ejecutaba (código r12/r13/r14):
  especificarla no cambia ningún número publicado, solo hace
  explícito lo que el código hacía.
- El desempate por inserción (no ascendente) es necesario porque
  v10.3-A0 y v10.3-A5 se añaden al final: en orden ascendente irían
  primero y los empates se resolverían distinto.
- La comparación sin redondear contra el mejor redondeado es el
  detalle que mueve picks en el 5.º decimal; sin especificarlo, dos
  implementaciones honestas divergen.
- El `None` cuando el máximo es 0.0 evita picks vacíos: un pick con
  contención 0.0 no nombra nada.

**Lo que NO especifica:**
- No cambia el umbral 0,80 ni el de bandera 0,50. No cambia la
  tokenización (eso es REGLA-TOK-SIK-01, R-KS, aplicada en r15 como
  método). No reescribe `reuse_sik_r14.json`: r14 se midió con esta
  misma regla en código; la especificación rige las mediciones
  futuras y la verificación r15.

## 3. Decisión propuesta (sin número; la numera FASE 2)

- **Afirmación precisa propuesta (para el registro de pendientes):**
  "Adopto la regla de pick REGLA-PICK-SIK-01 para las mediciones SIK:
  la mejor-contención maximiza max(c1,c2) con desempate por orden de
  inserción, comparación sin redondear contra el mejor redondeado, y
  None cuando el máximo es 0,0."
- **Qué autoriza:** que las mediciones SIK futuras usen esta regla
  como pick canónico del método; el hueco H7 queda cerrado por
  especificación y el verificador independiente reproduce 740/740.
- **Si no se adopta:** la regla queda especificada en el método de
  r15 como documento de medición, y cada verificador futuro debe
  re-derivarla del código; el hueco se sigue citando.

ρ(x) > 0. Zvvvvv.
