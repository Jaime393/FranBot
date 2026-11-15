# ESPECIFICACIÓN DEL PARTIDOR DE FÓRMULAS — REGLA-PART-SIK-01 (ronda 19, F6)

- **Fecha:** 2026-11-14. **Frente:** F6, ronda 19. **Estado:
  ESPECIFICACIÓN DE MÉTODO, NO CANON.** Este documento cierra el
  hueco que F-F dejó registrado desde r14: el partidor de fórmulas
  llevaba 5 rondas como método sin texto de canon (r14/r15/r16/r17/
  r18 lo aplicaron sin especificación escrita), y numerar un canon
  sin texto sería adoptar una regla vacía (patrón REGLA-TOK-SIK-01
  r17). La adopción como canon es una decisión (pendiente sin
  número; la numera FASE 2, patrón N-17) — no una ejecución.
- **Texto/regla fuente (SÉ, con hash):** la función
  `extraer_formulas` de `medir_reuse_sik_r18.py`
  (sha256 `8ee7f323…`), aplicada sin cambio en r14/r15/r16/r17/r18/
  r19. La corrección que la produjo está registrada en
  `h_sik_r14.md` (sha256 `0b3512b3…`, §F-F): el partidor original de
  r13 (`medir_reuse_sik_r13.py`, sha256 `f9e64359…`) partía también
  en `|`. El verificador independiente r19 la replica en su alcance
  de fórmulas (F-PART19 en `declaracion_falsador_h_sik_r19.md`).

## 1. El hueco que cierra (r13 → r14, SÉ)

El partidor original (r12/r13) partía el texto en
`[.;|\n"]+` — con `|` como separador. La fórmula
`Ξ = |∇ ln ρ|` se rompía en `|` y su fragmento
`xinablalnrho` no se hallaba: los conteos 9 tuplas / 7 distintos
de r12/r13 eran un subconteo por esta limitación del partidor,
no un error de los textos (h_sik_r14.md). En r14, **F-F se
disparó**: identidad de fórmula 9 → 11 tuplas, 7 → 8 distintos
(fragmento Ξ∇lnρ). El conteo corregido es 11/8 y se registra
desde r14 sin reescribir los JSONs de medición r12/r13 (su
`IDENTIDAD_DE_FORMULA_9` queda como registro de la regla vieja).
Desde r14 el partidor corregido corre como método sin texto de
canon. Esta especificación escribe ese texto.

## 2. Regla especificada (REGLA-PART-SIK-01)

> **PARTIDOR CORREGIDO:** (1) partir el texto en segmentos con
> el separador `[.;\n"]+` — punto, punto y coma, salto de línea,
> comilla doble — **sin `|`**; (2) conservar un segmento solo si
> contiene `=` o `≥` o `∝` **en crudo** (antes de normalizar);
> (3) normalizar el segmento: minúsculas, NFKD y eliminación de
> marcas combinantes (sin acentos), transliteración griega según
> la misma tabla de REGLA-TOK-SIK-01 §3; (4) quedarse solo con
> `[a-z0-9]` (todo lo demás se elimina); (5) conservar el
> fragmento solo si su longitud es ≥ 6.
>
> **Código literal (fuente):**
> ```python
> def extraer_formulas(texto):
>     segs = re.split(r'[.;\n"]+', texto)
>     out = set()
>     for s in segs:
>         if '=' in s or '≥' in s or '∝' in s:
>             t = unicodedata.normalize('NFKD', s.lower())
>             t = ''.join(c for c in t if not unicodedata.combining(c))
>             t = ''.join(GREEK.get(c, c) for c in t)
>             t = re.sub(r'[^a-z0-9]+', '', t)
>             if len(t) >= 6:
>                 out.add(t)
>     return out
> ```
>
> **Fragmento compartido:** la misma cadena normalizada en dos
> sistemas (cualquier etiqueta). **Tupla:** un par ordenado de
> etiquetas (sistema_A-etiqueta_A, sistema_B-etiqueta_B) con ≥ 1
> fragmento compartido; la tupla lista sus fragmentos (máximo 3
> en el JSON del ejecutor, todos en el del verificador).

**Por qué esta y no otra:**
- Sin `|`, `Ξ = |∇ ln ρ|` sobrevive como un solo segmento y su
  fragmento `xinablalnrho` se halla (las 2 tuplas FB-A3↔S2-A3 y
  FB-A3↔S2-A6, que solo hallaba el verificador r13/r14 con su
  regla propia, ahora las halla el ejecutor).
- El filtro `=`/`≥`/`∝` en crudo es lo que hace que el partidor
  halle fórmulas y no prosa: un segmento sin operador no es
  fórmula aunque contenga símbolos.
- La longitud ≥ 6 excluye residuos de 1–5 caracteres que no
  nombran ninguna fórmula.
- Medido: no cambia ningún número publicado de r14/r15/r16/r17/
  r18 — 11 tuplas / 8 distintos en las 5 rondas, mismas tuplas.

## 3. Valores que la especificación afirma (medidos, no opinados)

| Medida | Valor |
|---|---|
| Tuplas de fórmula (pares con ≥ 1 fragmento compartido) | **11** |
| Fragmentos distintos compartidos | **8** |
| Tuplas que dependen del `\|` (fragmento `xinablalnrho`) | **2** (FB-A3↔S2-A3, FB-A3↔S2-A6) |
| Tuplas perdidas respecto a r15/r16/r17/r18 | **0** |
| Tuplas nuevas respecto a r15/r16/r17/r18 | **0** |

**Las 11 tuplas** (ejecutor r19 = r15/r16/r17/r18, mismas):

| Par | Fragmento(s) |
|---|---|
| FranBot-A2 ↔ S2-A2 | `gmudmudlnrhodmulnrhodlnrho` |
| FranBot-A3 ↔ S2-A3 | `xinablalnrho` |
| FranBot-A3 ↔ S2-A6 | `xinablalnrho` |
| FranBot-A4 ↔ S3-A4 | `boxguxi2u0usqrtrho` |
| FranBot-A5 ↔ S2-A4 | `drhodtnablarhonablafrhoeta` |
| FranBot-A5 ↔ S3-A5 | `drhodtnablarhonablafrhoeta` |
| FranBot-A6 ↔ S2-A4 | `dsdt0sintegralrholnrhodv` |
| FranBot-A23 ↔ S2-A7 | `kiki12f` |
| S2-A3 ↔ S3-A19 | `omegafcxi` |
| S2-A4 ↔ S3-A5 | `drhodtnablarhonablafrhoeta` |
| S2-A7 ↔ S3-A10 | `kiphi1df2` |

**Los 8 fragmentos distintos:** `boxguxi2u0usqrtrho`,
`drhodtnablarhonablafrhoeta`, `dsdt0sintegralrholnrhodv`,
`gmudmudlnrhodmulnrhodlnrho`, `kiki12f`, `kiphi1df2`,
`omegafcxi`, `xinablalnrho` (Ξ = |∇ ln ρ|, dentro).

Fuentes: ejecutor r14 (F-F dispara, 9→11); re-medido idéntico
en r15 (`reuse_sik_r15.json`), r16, r17, r18
(`reuse_sik_r18.json`: 11 tuplas, 8 distintos) y r19
(`reuse_sik_r19.json`: 11 tuplas, 8 distintos, 0 sobra, 0
falta). El falsador F-PART19 exige que el verificador
independiente r19 reproduzca estos valores con 0 diffs en el
alcance de fórmulas; si diverge cualquiera, la especificación
NO pasa y la regla queda como propuesta heredada.

## 4. Límites de validez

- La regla rige la extracción de fórmulas de las mediciones SIK
  sobre las fuentes S2 (IDENTITY.md §§I–X), S3 (tabla L58–L115 de
  axiomas_a0_a57.md), FranBot / P48 / Base (CONSEJO_58.json) y
  v10.3 (axiomas_v10_3 + A0/A5 como voces). No rige otros corpus.
- No cambia el umbral 0,80 ni el de bandera 0,50 / 0,20. La
  identidad de fórmula (11/8) es un conteo exacto, no un umbral.
- La tabla griega es la misma de REGLA-TOK-SIK-01 §3: los
  símbolos que no están en la tabla (ν entre ellos) se pierden
  en el strip a `[a-z0-9]`, sin transliterar. Eso es una
  limitación compartida con la tokenización, no un defecto
  propio del partidor.
- El filtro en crudo (`=`/`≥`/`∝` antes de normalizar) significa
  que una fórmula escrita sin operador visible en el segmento
  (p. ej. partida por el propio `;` que la separa) no se halla:
  el partidor halla fórmulas por segmento, no por texto.
- No se reescriben `reuse_sik_r12.json` / `reuse_sik_r13.json`:
  se midieron con el partidor viejo (con `|`) y su 9/7 queda
  como registro de esa regla. La regla rige las mediciones
  futuras y la verificación r19.

**Lo que NO especifica:**
- No propone otro separador (`,` o `:` no parten: un segmento
  con `,` sigue entero hasta el siguiente `.`/`;`/salto/`"`).
- No propone transliterar ν → `nu` (eso es limpieza futura de
  la tokenización, a medir antes de adoptar).
- No cambia la tokenización (REGLA-TOK-SIK-01, canon por N-21)
  ni la regla de pick (REGLA-PICK-SIK-01, canon por N-17).
- La regla F1b del verificador (piezas por `.` y `;` con `=`,
  normalizadas, igualdad exacta) es una comprobación
  independiente, no esta regla: reproduce las mismas 11 tuplas
  por otro camino.

## 5. Decisión propuesta (sin número; la numera FASE 2)

- **Afirmación precisa propuesta (para el registro de pendientes):**
  "Adopto el partidor corregido de fórmulas para las mediciones
  SIK: se parte en `[.;\n\"]+` sin `|`, se conserva el segmento
  solo si contiene `=` o `≥` o `∝` en crudo, se normaliza como la
  tokenización y se conserva el fragmento solo si su longitud es
  ≥ 6."
- **Qué autoriza:** que las mediciones SIK futuras usen el
  partidor corregido como método canónico; F-F queda resuelto por
  regla (11 tuplas / 8 distintos) y deja de citarse como caveat
  del partidor.
- **Si no se adopta:** las mediciones siguen con el partidor
  corregido como método sin canon (como en r14–r19), y F-F se
  sigue citando en cada medición.

ρ(x) > 0. Zvvvvv.
