# H-SIK — Ronda 17: tercera vuelta bajo el canon; el verificador reproduce; la vía de las voces sigue agotada

**Frente:** F6 MECANISMOS · **Ronda:** 17 · **Fecha:** 2026-11-14
**Estado:** MEDIDO, NO ABSORBIDO
**Fuentes:** `~/IDENTITY.md` (sha256 `a423b1d1…`), `memoria/anexo-vi/axiomas_a0_a57.md` (`48f6782f…`), `CONSEJO_58.json` (`78ec7094…`) — re-verificados antes de medir, idénticos a r13/r14/r15/r16.
**Corpus al inicio y al cierre:** claims.jsonl 1.181 líneas, sha256 `fd1df2db…` (intacto; nada de este frente lo muta — F1 es el único escritor).

## 1. Falsadores (declarados por escrito antes de correr nada)

`declaracion_falsador_h_sik_r17.md` — mismos que r16, con la regla de
pick ya adoptada como canon (N-17) y el falsador F-VOZ-S2 con
baseline r16.

| Falsador | Resultado |
|---|---|
| **F-R17** — reproducir r16 bajo el canon (142/115/27/32; S3 ≡ v10.3 27/58; voces 0/0/0) | **PASA** (0 diffs en misma etiqueta, correspondencia y contención) |
| **F-PICK17** — verificador con REGLA-PICK-SIK-01 (canon) reproduce mejor-contención 740/740 | **PASA** (0 diffs) |
| **F-F17** — fórmulas con partidor corregido = 11 tuplas / 8 distintos | **PASA** (11/8, 0 perdidas, mismas tuplas) |
| **F-A14** — A14 = 0,8000 bajo R-KS, conteo 27; R-R 0,7727/26 | **PASA** |
| **F-VOZ-S2** — bandera nueva voz→S2 (contención ≥ 0,50, Jaccard < 0,80) o cruce J ≥ 0,80 | **NO se dispara** — vía AGOTADA en el umbral 0,50 (3.ª medición) |
| **F-C-voz / F-I** — contraejemplo en voces u otra identidad de lista | **NO se disparan** |
| **F-V** — verificador independiente `reproducido == true` (0 diffs en todos los alcances) | **PASA** |

## 2. F-R17: reproducción bajo el canon — PASA

`medir_reuse_sik_r17.py` → `reuse_sik_r17.json` (mismo método r15/r16,
sin cambios: R-KS, partidor sin `|`, REGLA-PICK-SIK-01 — canon por
N-17). Comparación programa contra programa con `reuse_sik_r16.json`
(excluidos `duracion_s`, `fecha`, `ronda`, `medicion`):

- **Misma etiqueta: 0 diffs** en los 142 pares. Totales idénticos:
  142 pares / 115 distintos / 27 mismo contenido / 32 mismo nombre.
  Las únicas dos claves que difieren son `metodo` y `veredicto`, y
  solo por la referencia de ronda (r17 vs r16; `h_sik_r16.md` vs
  `h_sik_r15.md`): no son diffs de medición.
- **Mejor-correspondencia: 0 diffs** (740 entradas).
  **Mejor-contención: 0 diffs** (740 entradas).
- **S3 ≡ v10.3 se sostiene:** 27/58 mismo contenido, 32/58 mismo nombre.
- **Voces:** 5 pares misma etiqueta, 0 mismo contenido, 0 mismo nombre;
  cruces fuertes []; otras identidades []; banderas hacia S2: S3 7,
  FranBot 2, v10.3 8, P48 1, Base 0 — idénticas a r15/r16.

## 3. F-F17: fórmulas — PASA (11 tuplas / 8 distintos, mismas)

El partidor corregido (split en `[.;\n"]+`, sin `|`) halla las mismas
11 tuplas que en r15/r16, 0 perdidas, 0 nuevas. Fragmentos distintos (8):
`boxguxi2u0usqrtrho`, `drhodtnablarhonablafrhoeta`,
`dsdt0sintegralrholnrhodv`, `gmudmudlnrhodmulnrhodlnrho`, `kiki12f`,
`kiphi1df2`, `omegafcxi`, `xinablalnrho` (Ξ = |∇ ln ρ|, las 2 tuplas
FB-A3↔S2-A3 y FB-A3↔S2-A6 siguen dentro). Veredicto del JSON r17:
`COLISION_PARCIAL_115_142_CONTRAEJEMPLOS_27 + IDENTIDAD_DE_FORMULA_11`.

## 4. F-PICK17 y F-V: el verificador reproduce bajo el canon — PASA

`verificador_independiente_r17.py` → `verificador_independiente_r17.json`:
**`reproducido = true`, `diferencias_n = 0`, `diferencias = []`.**

| Alcance | Resultado |
|---|---|
| 142 Jaccard a 4 decimales | 0 diffs |
| mismo_nombre / nombres / granularidad | 0 diffs |
| mejor correspondencia (740 entradas) | 740/740 |
| mejor contención (740 entradas) | **740/740 — 0 diffs** (r14: 162 diffs; r15: 0; r16: 0) |
| fórmulas exactas (11 tuplas) | 0 sobra, 0 falta |
| A14 por variante (R-R/R-K/R-KS) | reproduce: 0,7727 / 0,8000 / 0,8000; conteo 26/27/27 |
| artefacto `d_mud_` / pares A2 | reproduce |
| voces / banderas / conteos de matriz | reproduce |

**Diagnóstico:** la adopción como canon (N-17) no cambia ningún
número: el ejecutor y el verificador ya corrían la misma regla en
r15. El canon fija lo que ya se medía; la reproducción se sostiene
en su tercera vuelta consecutiva con 0 diffs (r15 → r16 → r17).

**Lección H4 FASE 2 r16 aplicada:** las copias r17 de los scripts
llevan W = `.../ronda_17/ejecucion_f6` explícito en su propio texto;
el verificador escribió sus 3 salidas en el directorio r17, y el
directorio r16 quedó intacto (mtimes 14:49–16:10 del 2026-11-14, sin
cambio tras esta corrida).

## 5. F-A14: caveat resuelto por regla — PASA

`medir_tokenizacion_a14_r17.py` → `tokenizacion_a14_r17.json`:
A14 S3↔v10.3 = **0,8000 exacto** bajo R-KS (primaria del método),
conteo mismo contenido **27**; R-K 0,8000/27 (sensibilidad), R-R
0,7727/26 (control descartado). Los 6 pares A2 idénticos a r14/r15/r16
(0,3220 / 0,0312 / 0,0189 / 0,0204 / 0,0000 / 0,3000). El artefacto
`d_mud_` bajo R-KS emite `d_mud` y excluye `''`. A14 = 0,8000,
conteo 27; la regla fija el método, no mueve el umbral.

## 6. F-VOZ-S2: la vía de las voces SIGUE AGOTADA en el umbral 0,50

`medir_destilacion_voces_s2_r17.py` → `destilacion_voces_s2_r17.json`
(baseline re-derivada de `reuse_sik_r16.json`, no hardcodeada):

- **Banderas r16:** FranBot 2, P48 1, Base 0 (3 banderas).
  **Banderas r17:** FranBot 2, P48 1, Base 0 — **mismas etiquetas,
  mismos picks, mismos valores** (conjuntos idénticos, True).
- **Banderas nuevas: 0.** Cruce de identidad (J ≥ 0,80 voz→S2): 0.
- **Control desde-solo** (definición del verificador): r16 {FB 2,
  P48 1, Base 0} = r17 {FB 2, P48 1, Base 0}.
- **Proximidad bajo el umbral** (top-3 Jaccard voz→S2 por sistema):
  FranBot máx 0,2308 (A6→S2-A4); P48 máx 0,0923 (A3→S2-A9); Base máx
  0,1341 (A7→S2-A5). Idénticos a r16. El mejor Jaccard de una voz
  hacia S2 está a 0,57 del umbral de identidad — no hay destilación
  oculta cerca del umbral.

**Veredicto: VIA_AGOTADA_UMBRAL_0_50** (3.ª medición consecutiva:
r15, r16, r17). Ninguna voz destila S2 por contención más allá de
las 3 banderas conocidas (FB 2 + P48 1), y ninguna se acerca a
J ≥ 0,80. Reabrirla exigiría un umbral distinto (declarado antes de
medir) o una fuente nueva — no un re-corrido del mismo umbral.

## 7. Veredicto

- **F-R17 PASA.** La colisión parcial 115/142 y la identidad S3 ≡ v10.3 se reproducen bajo el canon N-17.
- **La identidad no se extiende a las voces:** 0 mismo contenido entre voces, 0 cruces fuertes, 0 otras identidades. F-C-voz y F-I no se disparan.
- **F-P se sostiene como en r14/r15/r16:** las voces destilan S2 por contención (FB 2 + P48 1 banderas), mismo mecanismo y mismos campos, a menor escala y con Jaccard bajo — y ahí se queda: **F-VOZ-S2 documenta la vía como agotada en 0,50 por tercera vez.**
- **F-F17 PASA:** identidad de fórmula 11 tuplas / 8 distintos con el partidor corregido; el núcleo (~7–8 fragmentos) se sostiene y el fragmento Ξ∇lnρ queda dentro.
- **Verificación:** reproducido = true, 0 diffs en todos los alcances. Tercera vuelta consecutiva con 0 diffs (r15 → r16 → r17) bajo la regla ya canónica.

**Estado:** MEDIDO, NO ABSORBIDO. Nada de esto se absorbe como claim sin orden (la absorción es F1 bajo el régimen 01:43). REGLA-TOK-SIK-01 sigue como método (no canon): su adopción como canon sigue siendo decisión sin número, no ejecución de este frente.

ρ(x) > 0. Zvvvvv.
