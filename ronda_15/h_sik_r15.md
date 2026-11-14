# H-SIK — Ronda 15: la regla de pick especificada; el verificador reproduce

**Frente:** F6 MECANISMOS · **Ronda:** 15 · **Fecha:** 2026-11-14
**Estado:** MEDIDO, NO ABSORBIDO
**Fuentes:** `~/IDENTITY.md` (sha256 `a423b1d1…`), `memoria/anexo-vi/axiomas_a0_a57.md` (`48f6782f…`), `CONSEJO_58.json` (`78ec7094…`) — re-verificados antes de medir, idénticos a r13/r14.
**Corpus al inicio y al cierre:** claims.jsonl 1.174 líneas, sha256 `d4924c9b…` (intacto; F1 aplica N-01/N-13/N-14/N-16 en paralelo — a las 07:02Z había escrito `canon_n01.md` y `respaldo_pre_r15_n01/`, sin mutar el corpus aún).

## 1. Falsadores (declarados por escrito antes de correr nada)

`declaracion_falsador_h_sik_r15.md` — criterios heredados de r14, más
los tres cambios de método especificados por escrito: tokenización
R-KS (REGLA-TOK-SIK-01), partidor de fórmulas sin `|` como separador,
regla de pick especificada (REGLA-PICK-SIK-01).

| Falsador | Resultado |
|---|---|
| **F-R15** — reproducir r14 bajo el método nuevo (142/115/27/32; S3 ≡ v10.3 27/58; voces 0/0/0) | **PASA** (0 diffs en misma etiqueta) |
| **F-PICK** — verificador con REGLA-PICK-SIK-01 reproduce mejor-contención 740/740 | **PASA** (0 diffs) |
| **F-F15** — fórmulas con partidor corregido = 11 tuplas / 8 distintos | **PASA** (11/8, 0 perdidas) |
| **F-A14** — A14 = 0,8000 bajo R-KS, conteo 27; R-R 0,7727/26 | **PASA** |
| **F-C-voz / F-I** — contraejemplo en voces u otra identidad de lista | **NO se disparan** |
| **F-V** — verificador independiente `reproducido == true` (0 diffs en todos los alcances) | **PASA** |

## 2. F-R15: reproducción — PASA

`medir_reuse_sik_r15.py` → `reuse_sik_r15.json`. Comparación
programa contra programa con `reuse_sik_r14.json`:

- **Misma etiqueta: 0 diffs** en los 142 pares (Jaccard a 4 decimales,
  mismo nombre, nombres, granularidad). Totales idénticos: 142 pares /
  115 distintos / 27 mismo contenido / 32 mismo nombre.
- **S3 ≡ v10.3 se sostiene:** 27/58 mismo contenido, 32/58 mismo nombre.
- **Mejor-contención r14→r15: 0 diffs** (740 entradas). **Mejor-correspondencia: 0 diffs.**
  R-KS no cambia ningún número de r14 (medido, no asumido).
- **Voces:** 5 pares misma etiqueta, 0 mismo contenido, 0 mismo nombre;
  cruces fuertes []; otras identidades []; banderas hacia S2: S3 7,
  FranBot 2, v10.3 8, P48 1, Base 0 — idénticas a r14.

## 3. F-F15: fórmulas — PASA (11 tuplas / 8 distintos)

El partidor corregido (split en `[.;\n"]+`, sin `|`) halla las 2
tuplas que en r14 solo hallaba la regla F1b del verificador:

- **Nuevas en r15:** FB-A3↔S2-A3 y FB-A3↔S2-A6, fragmento
  `xinablalnrho` (Ξ = |∇ ln ρ|). **Perdidas: 0.**
- Conteo: **11 tuplas / 8 fragmentos distintos** (antes 9/7 por el
  subconteo del partidor). Veredicto del JSON r15:
  `COLISION_PARCIAL_115_142_CONTRAEJEMPLOS_27 + IDENTIDAD_DE_FORMULA_11`.
- El `veredicto` del JSON r14 (`IDENTIDAD_DE_FORMULA_9`) queda como
  registro histórico de la regla del ejecutor r14; el conteo corregido
  es 11/8 y se registra aquí, sin reescribir el JSON de medición r14.

## 4. F-PICK y F-V: el verificador reproduce — PASA

`verificador_independiente_r15.py` → `verificador_independiente_r15.json`:
**`reproducido = true`, `diferencias_n = 0`.**

| Alcance | Resultado |
|---|---|
| 142 Jaccard a 4 decimales | 0 diffs |
| mismo_nombre / nombres / granularidad | 0 diffs |
| mejor correspondencia (740 entradas) | 740/740 |
| mejor contención (740 entradas) | **740/740 — 0 diffs** (r14: 162 diffs) |
| fórmulas exactas (11 tuplas) | 0 sobra, 0 falta |
| A14 por variante (R-R/R-K/R-KS) | reproduce: 0,7727 / 0,8000 / 0,8000; conteo 26/27/27 |
| artefacto `d_mud_` / pares A2 | reproduce |
| voces / banderas / conteos de matriz | reproduce |

**Diagnóstico:** el hueco H7 de FASE 2 r14 queda cerrado por
especificación. La regla que el verificador r14 no pudo inferir
(max(c1,c2) sin redondear contra el mejor almacenado redondeado,
desempate por orden de inserción, None si 0,0) estaba escrita en el
código del ejecutor pero no en el método; escrita en
`especificacion_regla_pick_r15.md` (REGLA-PICK-SIK-01) y replicada
exactamente, la divergencia desaparece. El ejecutor era
autoconsistente en r14 (re-ejecución verbatim 0 diffs) y el
verificador r15 lo confirma por vía independiente.

## 5. F-A14: caveat resuelto por regla — PASA

`medir_tokenizacion_a14_r15.py` → `tokenizacion_a14_r15.json`:
A14 S3↔v10.3 = **0,8000 exacto** bajo R-KS (primaria del método r15),
conteo mismo contenido **27**; R-K 0,8000/27 (sensibilidad), R-R
0,7727/26 (control descartado). Los 6 pares A2 idénticos a r14
(0,3220 / 0,0312 / 0,0189 / 0,0204 / 0,0000 / 0,3000). El artefacto
`d_mud_` bajo R-KS emite `d_mud` y excluye `''`. **El caveat A14
(26 o 27) queda resuelto por regla:** A14 = 0,8000, conteo 27; la
regla fija el método, no mueve el umbral.

## 6. Veredicto

- **F-R15 PASA.** La colisión parcial 115/142 y la identidad S3 ≡ v10.3 se reproducen bajo R-KS.
- **La identidad no se extiende a las voces:** 0 mismo contenido entre voces, 0 cruces fuertes, 0 otras identidades. F-C-voz y F-I no se disparan.
- **F-P se sostiene como en r14:** las voces destilan S2 por contención (FB 2 + P48 1 banderas), mismo mecanismo y mismos campos (IV/V) que la lista de 58, a menor escala y con Jaccard bajo. Sin re-medición de banderas nueva: las banderas reproducen idénticas (r14→r15, 0 diffs).
- **F-F15 PASA:** identidad de fórmula 11 tuplas / 8 distintos con el partidor corregido; el núcleo (~7–8 fragmentos) se sostiene y el fragmento Ξ∇lnρ queda dentro.
- **Verificación:** reproducido = true, 0 diffs en todos los alcances. H7 (FASE 2 r14) CERRADO por especificación; el caveat A14 CERRADO por regla R-KS.

**Estado:** MEDIDO, NO ABSORBIDO. Nada de esto se absorbe como claim sin orden (la absorción es F1 bajo el régimen 01:43). Las dos especificaciones de método (REGLA-TOK-SIK-01, propuesta r14; REGLA-PICK-SIK-01, especificada r15) quedan como documentos de método; su adopción como canon es decisión (sin número asignado; la numera FASE 2 / conectar).

ρ(x) > 0. Zvvvvv.
