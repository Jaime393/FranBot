# ESPECIFICACIÓN DE LA REGLA DE TOKENIZACIÓN — REGLA-TOK-SIK-01 (ronda 18, F6)

- **Fecha:** 2026-11-14. **Frente:** F6, ronda 18. **Estado:
  ESPECIFICACIÓN DE MÉTODO, NO CANON.** Este documento cierra el
  hueco que FASE 2 r17 dejó registrado (§10.1 de
  `verificacion_fase2_r17.md` y §25 de `afirmaciones_pendientes.md`):
  REGLA-TOK-SIK-01 llevaba 3 rondas como propuesta heredada sin
  texto de canon, y numerar un canon sin texto sería adoptar una
  regla vacía. La adopción como canon es una decisión (pendiente sin
  número; la numera FASE 2, patrón N-17) — no una ejecución.
- **Medición que la sustenta:** `medir_tokenizacion_a14_r14.py` →
  `tokenizacion_a14_r14.json` (propuesta r14) y las re-mediciones
  r15/r16/r17 (`tokenizacion_a14_r15.json` / `r16` / `r17`, stdlib,
  solo lectura; fuentes re-verificadas por sha: IDENTITY.md
  `a423b1d1…`, axiomas_a0_a57.md `48f6782f…`, CONSEJO_58.json
  `78ec7094…`). El verificador independiente r18 la replica
  exactamente (falsador F-TOK18 en
  `declaracion_falsador_h_sik_r18.md`).

## 1. El hueco que cierra (r13 §8, SÉ)

S3-A14 ↔ v10.3-A14 ("Emergencia sin diseñador", mismo nombre en
ambas) da Jaccard 0,7727 con la tokenización de reemplazo y 0,8000
exacto con la del ejecutor — cruzando el umbral 0,80. El conteo de
mismo contenido es 26 o 27 según la lectura. El veredicto (colisión
parcial 115/142, S3 ≡ v10.3) se sostiene en ambas; el número exacto
depende del detalle. La cláusula del método era: "los tokens con '_'
se parten también por '_'". "También" es además, no en lugar de —
pero la cláusula no decía qué hacer con las partes vacías ni con
los '_' en los extremos. La propuesta r14 midió las lecturas y
propuso R-KS; r15/r16/r17 la aplicaron como método sin texto de
canon. Esta especificación escribe ese texto.

## 2. Regla especificada (REGLA-TOK-SIK-01)

> **R-KS (keep+strip):** (1) normalizar como hasta ahora; (2)
> conservar el token entero; (3) añadir sus partes por '_',
> excluyendo las vacías; (4) añadir además `t.strip('_')` cuando
> difiera del token.
>
> **Normalización (paso 1, exacta):** minúsculas; NFKD y eliminación
> de marcas combinantes (sin acentos); transliteración griega según
> la tabla del §3; sustitución de todo lo que no sea `[a-z0-9_]` por
> espacio; división por espacios. La similitud es Jaccard sobre
> **conjuntos** de tokens (no multiconjuntos): |A ∩ B| / |A ∪ B|;
> si ambos conjuntos son vacíos, 1,0; si solo uno lo es, 0,0.
>
> **Variantes descartadas, fijadas por esta regla:** R-R
> (reemplazo: el token se sustituye por sus partes, vacías
> excluidas) queda DESCARTADA como variante del método — pierde la
> información de que `k_i` es un símbolo, no dos sueltos. R-K
> (keep con '': token + partes incluida la cadena vacía) queda
> como SENSIBILIDAD, no como primaria: sus números coinciden con
> R-KS en este corpus, pero admite `''` como token. R-K0 (keep sin
> strip) es una lectura intermedia del verificador r13, sin uso.

**Por qué esta y no otra:**
- Conserva el token literal (la información: `k_i` es un símbolo).
- Excluye el token vacío `''` por regla, no por accidente de
  implementación.
- Emite la forma limpia `d_mud` del artefacto `∂_μ∂_ν`.
- Medido: no cambia ningún número publicado de r13/r14/r15/r16/r17
  — A14 sigue 0,8000 exacto, el conteo sigue 27, los 6 pares A2 son
  idénticos al ejecutor. Adoptar R-KS hace explícita la regla; no
  reescribe la medición.

## 3. Tabla de transliteración y artefacto (parte de la regla)

Tabla griega/símbolos aplicada en el paso 1 (orden: minúsculas,
NFKD, esta tabla, luego `[^a-z0-9_]+` → espacio):

| Símbolo | Emite | Símbolo | Emite | Símbolo | Emite |
|---|---|---|---|---|---|
| φ, Φ | phi | ρ | rho | τ | tau |
| Ξ, ξ | xi | κ | kappa | η | eta |
| Δ | delta | ∇ | nabla | μ | mu |
| α | alpha | λ | lambda | ω | omega |
| ε | epsilon | γ | gamma | Σ, σ | sigma |
| ∫ | integral | ℓ | l | ∞ | inf |
| ∧ | and | ∨ | or | ∝ | prop |
| ∂ | d | □ | box | √ | sqrt |

**ν NO está en la tabla** — esa ausencia es el origen del
artefacto: el texto `∂_μ∂_ν` (métrica de Fisher, solo en S2-A2 y
FranBot-A2) normaliza a `d_mud_`: ν se pierde, dejando '_' final.
Bajo R-KS el token `d_mud_` emite `d_mud_`, `d`, `mud` y `d_mud`
(por strip), y excluye `''`. Bajo R-K emite además `''`.

## 4. Valores que la especificación afirma (medidos, no opinados)

| Medida | R-R | R-K | R-KS |
|---|---|---|---|
| A14 S3↔v10.3 | 0,7727 | 0,8000 | **0,8000 exacto** |
| Conteo mismo contenido (J ≥ 0,80) | 26 | 27 | **27** |
| Pares A2 (6, S2/FB/S3/v10.3) | difiere en 5 de 6 | 0,3220 / 0,0312 / 0,0189 / 0,0204 / 0,0000 / 0,3000 | **idénticos a R-K** |
| Artefacto `∂_μ∂_ν` | `d`, `mud` | `d`, `mud`, `''`, `d_mud_` | `d`, `mud`, `d_mud`, `d_mud_` (sin `''`) |

Fuentes: propuesta r14 (§1, medido en r14); re-medido idéntico en
r15 (`tokenizacion_a14_r15.json`), r16 y r17
(`tokenizacion_a14_r17.json`: A14 R-KS 0,8000, conteo 27; R-R
0,7727/26). El falsador F-TOK18 exige que el verificador
independiente r18 reproduzca estos valores con 0 diffs; si diverge
cualquiera, la especificación NO pasa y la regla queda como
propuesta heredada.

## 5. Límites de validez

- La regla rige la tokenización de las mediciones SIK sobre las
  fuentes S2 (IDENTITY.md §§I–X), S3 (tabla L58–L115 de
  axiomas_a0_a57.md), FranBot / P48 / Base (CONSEJO_58.json) y
  v10.3 (axiomas_v10_3 + A0/A5 como voces). No rige otros corpus.
- No cambia el umbral 0,80 ni el de bandera 0,50 / 0,20. A14 queda
  EN EL UMBRAL EXACTO (0,8000) también bajo R-KS — la regla fija el
  método, no mueve el umbral para que el conteo salga 27. El
  umbral exacto sigue siendo un caveat del valor, no del método.
- El artefacto `''` es numéricamente inerte en este corpus porque
  aparece simétricamente en ambos textos de cada par con A2 — la
  exclusión es por regla (una cadena vacía no nombra nada), no
  porque mueva un número.
- No se reescriben `reuse_sik_r13.json` … `reuse_sik_r17.json`:
  se midieron con R-K y sus números son los mismos bajo R-KS
  (medido). La regla rige las mediciones futuras y la verificación
  r18.

**Lo que NO especifica:**
- No propone transliterar ν → `nu`. Eso eliminaría el artefacto en
  origen (`d_mud_` → `d_mu`, `d_nu`), pero cambiaría los valores A2
  sin medir: queda como limpieza futura, a medir antes de adoptar.
- No cambia el partidor de fórmulas (eso es F-F, split en
  `[.;\n"]+` sin `|`) ni la regla de pick (REGLA-PICK-SIK-01,
  canon por N-17).
- No decide qué cuenta como "mismo contenido": eso lo decide el
  umbral 0,80, no esta regla.

## 6. Decisión propuesta (sin número; la numera FASE 2)

- **Afirmación precisa propuesta (para el registro de pendientes):**
  "Adopto la regla de tokenización R-KS para las mediciones SIK: el
  token se conserva con sus partes, se excluyen las partes vacías y
  se emite además la forma sin '_' en los extremos."
- **Qué autoriza:** que las mediciones SIK futuras usen R-KS como
  tokenización canónica del método; el caveat A14 queda resuelto por
  regla (A14 = 0,8000, conteo 27) y deja de citarse como caveat.
- **Si no se adopta:** las mediciones siguen con R-KS como método
  sin canon (como en r15/r16/r17), el caveat A14 se sigue citando
  en cada medición, y R-R sigue descartada solo por nota, no por
  regla.

ρ(x) > 0. Zvvvvv.
