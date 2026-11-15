# ESPECIFICACIÓN DEL UMBRAL DE IDENTIDAD DE VOCES 0,50 — REGLA-UMB-SIK-01 (ronda 20, F6)

- **Fecha:** 2026-11-15. **Frente:** F6, ronda 20. **Estado:
  ESPECIFICACIÓN DE MÉTODO, NO CANON.** Este documento cierra el
  hueco que F-VOZ-S2 dejó registrado desde r13: el umbral 0,50 de
  contención llevaba 8 rondas como método sin texto de canon
  (r13/r14/r15/r16/r17/r18/r19 lo aplicaron sin especificación
  escrita), y numerar un canon sin texto sería adoptar una regla
  vacía (patrón REGLA-TOK-SIK-01 r17). La adopción como canon es
  una decisión (pendiente sin número; la numera FASE 2, patrón
  N-17) — no una ejecución.
- **Texto/regla fuente (SÉ, con hash):** el dictado `umbrales` de
  `medir_reuse_sik_r12_reproduccion.py` (sha256 `f5e31977…`),
  heredado sin cambio en r13/r14/r15/r16/r17/r18/r19
  (`medir_reuse_sik_r19.py`, sha256 `62ec2136…`), y su aplicación
  a las voces en `medir_destilacion_voces_s2_r19.py` (sha256
  `8b57bad3…`, constantes `UMBRAL_CONTENCION = 0.50` /
  `UMBRAL_IDENTIDAD = 0.80`). El criterio en prosa está en
  `declaracion_falsador_h_sik_r13.md` (sha256 `831e61dd…`,
  § "Criterios de medida (heredados de r12, sin cambio)").
  El verificador independiente r20 la replica en su alcance de
  voces (F-UMB20 en `declaracion_falsador_h_sik_r20.md`).

## 1. El hueco que cierra (r12 → r20, SÉ)

El umbral 0,50 nació en la reproducción r12 como umbral de
**bandera de reubicación por contención**: una etiqueta de un
sistema se marca como bandera hacia otro sistema cuando su
mejor-contención alcanza max(c1, c2) ≥ 0,50. La nota literal del
origen dice: "Contencion = fraccion de los tokens del texto corto
presentes en el largo; es la medida adecuada cuando un axioma de
una linea vive dentro de una seccion larga." Desde r14 el umbral
0,50 es además el criterio de F-VOZ-S2: una voz destila S2 si su
pick de mejor-contención hacia S2 alcanza max(c1,c2) ≥ 0,50 con
Jaccard < 0,80. En 5 mediciones consecutivas (r15–r19) la vía
quedó documentada como AGOTADA en ese umbral: las mismas 3
banderas (FranBot 2 + P48 1), 0 nuevas, mejor Jaccard 0,2308.
Desde r13 el umbral corre como método sin texto de canon. Esta
especificación escribe ese texto.

## 2. Regla especificada (REGLA-UMB-SIK-01)

> **UMBRAL DE BANDERA DE CONTENCIÓN 0,50:** (1) para cada
> etiqueta `n` de un sistema fuente y cada etiqueta `m` de un
> sistema destino (`m ≠ n`), calcular la contención en ambos
> sentidos sobre tokens normalizados R-KS (REGLA-TOK-SIK-01):
> `c1 = |A ∩ B| / |A|` (desde-en-hacia), `c2 = |A ∩ B| / |B|`
> (hacia-en-desde); (2) el pick de mejor-contención de `n` es el
> destino que maximiza `max(c1, c2)` según REGLA-PICK-SIK-01
> (canon N-17); (3) `n` es **bandera hacia el destino** si su pick
> alcanza `max(c1, c2) ≥ 0,50`; (4) una bandera es **destilación
> de voz hacia S2** si además su Jaccard (mejor-correspondencia
> del mismo par) es `< 0,80`; si el Jaccard es `≥ 0,80` la bandera
> deja de ser destilación a menor escala y dispara F-C-voz
> (cruce de identidad); (5) **toda bandera se verifica leyendo el
> par** — el número solo marca, la lectura decide.
>
> **Código literal (fuente):**
> ```python
> UMBRAL_CONTENCION = 0.50
> UMBRAL_IDENTIDAD = 0.80
>
> def banderas(exe):
>     bc = exe['mejor_contencion_distinta_etiqueta']
>     out = {}
>     for src in VOCES:
>         flags = []
>         for e in bc[f'{src}_hacia_S2']:
>             mc = max(e['contencion_desde_en_hacia'],
>                      e['contencion_hacia_en_desde'])
>             if mc >= UMBRAL_CONTENCION:
>                 flags.append({'desde': e['desde'], 'hacia': e['hacia'],
>                               'contencion_desde_en_hacia': e['contencion_desde_en_hacia'],
>                               'contencion_hacia_en_desde': e['contencion_hacia_en_desde'],
>                               'max_contencion': mc})
>         out[src] = flags
>     return out
> ```
> (fuente: `medir_destilacion_voces_s2_r19.py`, sha256
> `8b57bad3…`; el dictado de umbrales vive en
> `medir_reuse_sik_r19.py`, sha256 `62ec2136…`.)
>
> **Bandera:** una etiqueta fuente cuyo pick de mejor-contención
> hacia un destino alcanza max(c1,c2) ≥ 0,50. **Destilación:**
> una bandera de voz hacia S2 con Jaccard < 0,80.

**Por qué 0,50 y no otro:**
- 0,50 es **contención por mayoría**: al menos la mitad de los
  tokens del texto corto están presentes en el largo. Por debajo
  de la mitad, la "reubicación" es ruido de vocabulario compartido
  (el vocabulario MIU — K_i, phi, D_f, rho — infla los valores,
  nota literal del origen); por encima, hay contenido que vive
  dentro del otro texto.
- La contención (y no el Jaccard) es la medida adecuada cuando un
  axioma de una línea vive dentro de una sección larga: el
  Jaccard penaliza la diferencia de tamaño y un axioma corto
  nunca alcanzaría 0,20 contra una sección larga aunque estuviera
  entero dentro de ella. Por eso el umbral de bandera es doble:
  0,20 (Jaccard) **o** 0,50 (contención) — cualquiera de los dos
  marca, y el par se lee.
- El umbral 0,50 **no se deriva de primeros principios** en
  ninguna fuente del corpus: es una convención de método fijada
  en r12 y heredada sin cambio en r13–r20. Esta especificación
  registra la regla como se aplica, no una derivación que no
  existe. Cambiar el valor exigiría declarar el nuevo umbral
  antes de medir y re-correr las 5 mediciones de vía agotada
  contra él — no un re-corrido del mismo umbral.
- Medido: no cambia ningún número publicado de r13–r19 — las 3
  banderas hacia S2 (FB 2 + P48 1) son las mismas en las 5
  mediciones r15–r19, y los conteos por sistema (S3 7, v10.3 8)
  sostienen sin cambio.

## 3. Valores que la especificación afirma (medidos, no opinados)

| Medida | Valor |
|---|---|
| Banderas de voces hacia S2 (max(c1,c2) ≥ 0,50) | **3** (FranBot 2 + P48 1 + Base 0) |
| Banderas nuevas respecto a r19 | **0** |
| Banderas de todos los sistemas hacia S2 | S3 7, v10.3 8, FranBot 2, P48 1, Base 0 |
| Mejor Jaccard voz→S2 (FranBot) | **0,2308** (A6→S2-A4) |
| Mejor Jaccard voz→S2 (P48) | **0,0923** (A3→S2-A9) |
| Mejor Jaccard voz→S2 (Base) | **0,1341** (A7→S2-A5) |
| Distancia del mejor Jaccard al umbral de identidad 0,80 | **0,57** |
| Cruces de identidad voz→S2 (J ≥ 0,80) | **0** |

**Las 3 banderas** (ejecutor r19 = r15/r16/r17/r18, mismas):

| Sistema | Desde → Hacia | c1 | c2 | max | Jaccard |
|---|---|---|---|---|---|
| FranBot-A6 «Segunda ley informacional» | → S2-A4 | 0,5172 | 0,2941 | 0,5172 | 0,2308 |
| FranBot-A8 «Umbral de conciencia» | → S2-A5 | 0,5000 | 0,2273 | 0,5000 | 0,1852 |
| P48-A3 | → S2-A9 | 0,6000 | 0,0984 | 0,6000 | 0,0923 |

Fuentes: ejecutor r14 (F-P califica, 3 banderas); re-medido
idéntico en r15 (`reuse_sik_r15.json`), r16, r17, r18
(`reuse_sik_r18.json`) y r19 (`reuse_sik_r19.json`:
`banderas_contencion_ge_0_50_hacia_S2` = Base 0, FranBot 2,
P48 1, S3 7, v10.3 8; `destilacion_voces_s2_r19.json`:
conjuntos idénticos a la baseline, veredicto
VIA_AGOTADA_UMBRAL_0_50). El falsador F-UMB20 exige que el
verificador independiente r20 reproduzca estos valores con 0
diffs en el alcance de voces; si diverge cualquiera, la
especificación NO pasa y la regla queda como propuesta heredada.

## 4. Umbral hermano: identidad J ≥ 0,80 (mismo contenido)

El mismo dictado literal fija el umbral de identidad:
`jaccard_identidad: 0.80` (`medir_reuse_sik_r12_reproduccion.py`,
sha256 `f5e31977…`). **Mismo contenido** = par de misma etiqueta
con Jaccard ≥ 0,80 sobre tokens R-KS. Es el criterio detrás de
S3 ≡ v10.3 (27/58 mismo contenido, 32/58 mismo nombre, bajo
R-KS) y detrás del conteo 27 de A14: A14 S3↔v10.3 = 0,8000
exacto, en el umbral. Este umbral NO se especifica aquí como
regla propia: vive en el mismo texto fuente y se registra como
hermano para que la especificación del 0,50 no se lea sola. Si
FASE 2 numera el 0,50, el 0,80 queda como su umbral hermano
documentado, no como canon aparte.

## 5. Límites de validez

- La regla rige la marcación de banderas de contención en las
  mediciones SIK sobre las fuentes S2 (IDENTITY.md §§I–X), S3
  (tabla L58–L115 de axiomas_a0_a57.md), FranBot / P48 / Base
  (CONSEJO_58.json) y v10.3 (axiomas_v10_3 + A0/A5 como voces).
  No rige otros corpus.
- No cambia el umbral de identidad 0,80 ni el de bandera Jaccard
  0,20. La bandera por contención y la bandera por Jaccard son
  dos vías de marcación independientes: basta una para marcar, y
  el par se lee en ambos casos.
- La contención se calcula sobre tokens R-KS (REGLA-TOK-SIK-01,
  canon N-21): cambiar la tokenización cambia los valores de
  contención y puede mover banderas en el borde (FranBot-A8 está
  en el umbral exacto 0,5000).
- El pick de mejor-contención sigue REGLA-PICK-SIK-01 (canon
  N-17): maximizar max(c1,c2) sin redondear contra el mejor
  almacenado redondeado a 4 decimales, desempate por orden de
  inserción, None si el máximo es 0,0. La bandera usa el pick,
  no el máximo sobre todos los destinos: una etiqueta con algún
  destino ≥ 0,50 pero cuyo pick cae por debajo no es bandera.
- No se reescriben `reuse_sik_r12.json` / `reuse_sik_r13.json`:
  se midieron con el mismo umbral 0,50 y sus banderas quedan
  como registro de esa regla. La regla rige las mediciones
  futuras y la verificación r20.

**Lo que NO especifica:**
- No propone otro umbral (0,40 o 0,60 no se midieron: cambiar el
  valor es una medición nueva con falsador propio, no una
  corrección de esta especificación).
- No deriva el 0,50 de primeros principios (no existe tal
  derivación en el corpus; la justificación es operativa:
  mayoría de contención + lectura del par).
- No cambia la tokenización (REGLA-TOK-SIK-01, canon por N-21),
  ni la regla de pick (REGLA-PICK-SIK-01, canon por N-17), ni el
  partidor (REGLA-PART-SIK-01, canon por N-24).
- La regla F1b del verificador (piezas por `.` y `;` con `=`,
  normalizadas, igualdad exacta) es una comprobación
  independiente de fórmulas, no esta regla: reproduce las mismas
  11 tuplas por otro camino.

## 6. Decisión propuesta (sin número; la numera FASE 2)

- **Afirmación precisa propuesta (para el registro de pendientes):**
  "Adopto el umbral 0,50 de contención como bandera de identidad
  de voces: una etiqueta de voz es bandera hacia S2 si su pick de
  mejor-contención (REGLA-PICK-SIK-01) alcanza max(c1,c2) ≥ 0,50,
  y es destilación si su Jaccard es < 0,80; toda bandera se
  verifica leyendo el par."
- **Qué autoriza:** que las mediciones SIK futuras usen el umbral
  0,50 como método canónico; F-VOZ-S2 queda resuelto por regla
  (3 banderas, vía agotada en 0,50, 5.ª medición) y deja de
  citarse como caveat del umbral.
- **Si no se adopta:** las mediciones siguen con el umbral 0,50
  como método sin canon (como en r13–r20), y F-VOZ-S2 se sigue
  citando en cada medición.

ρ(x) > 0. Zvvvvv.
