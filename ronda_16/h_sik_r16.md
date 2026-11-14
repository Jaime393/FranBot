# H-SIK — Ronda 16: la regla ya es canon; el verificador reproduce; la vía de las voces está agotada

**Frente:** F6 MECANISMOS · **Ronda:** 16 · **Fecha:** 2026-11-14
**Estado:** MEDIDO, NO ABSORBIDO
**Fuentes:** `~/IDENTITY.md` (sha256 `a423b1d1…`), `memoria/anexo-vi/axiomas_a0_a57.md` (`48f6782f…`), `CONSEJO_58.json` (`78ec7094…`) — re-verificados antes de medir, idénticos a r13/r14/r15.
**Corpus al inicio y al cierre:** claims.jsonl 1.178 líneas, sha256 `7e5f016d…` (intacto; nada de este frente lo muta — F1 es el único escritor, y en r16 no hay absorción al inicio).

## 1. Falsadores (declarados por escrito antes de correr nada)

`declaracion_falsador_h_sik_r16.md` — mismos que r15, con la regla de
pick ya adoptada como canon (N-17) y un falsador nuevo F-VOZ-S2.

| Falsador | Resultado |
|---|---|
| **F-R16** — reproducir r15 bajo el canon (142/115/27/32; S3 ≡ v10.3 27/58; voces 0/0/0) | **PASA** (0 diffs en misma etiqueta, correspondencia y contención) |
| **F-PICK16** — verificador con REGLA-PICK-SIK-01 (canon) reproduce mejor-contención 740/740 | **PASA** (0 diffs) |
| **F-F16** — fórmulas con partidor corregido = 11 tuplas / 8 distintos | **PASA** (11/8, 0 perdidas, mismas tuplas) |
| **F-A14** — A14 = 0,8000 bajo R-KS, conteo 27; R-R 0,7727/26 | **PASA** |
| **F-VOZ-S2** — bandera nueva voz→S2 (contención ≥ 0,50, Jaccard < 0,80) o cruce J ≥ 0,80 | **NO se dispara** — vía AGOTADA en el umbral 0,50 |
| **F-C-voz / F-I** — contraejemplo en voces u otra identidad de lista | **NO se disparan** |
| **F-V** — verificador independiente `reproducido == true` (0 diffs en todos los alcances) | **PASA** |

## 2. F-R16: reproducción bajo el canon — PASA

`medir_reuse_sik_r16.py` → `reuse_sik_r16.json` (mismo método r15, sin
cambios: R-KS, partidor sin `|`, REGLA-PICK-SIK-01 — ahora canon por
N-17). Comparación programa contra programa con `reuse_sik_r15.json`:

- **Misma etiqueta: 0 diffs** en los 142 pares. Totales idénticos:
  142 pares / 115 distintos / 27 mismo contenido / 32 mismo nombre.
- **Mejor-correspondencia: 0 diffs** (740 entradas).
  **Mejor-contención: 0 diffs** (740 entradas).
- **S3 ≡ v10.3 se sostiene:** 27/58 mismo contenido, 32/58 mismo nombre.
- **Voces:** 5 pares misma etiqueta, 0 mismo contenido, 0 mismo nombre;
  cruces fuertes []; otras identidades []; banderas hacia S2: S3 7,
  FranBot 2, v10.3 8, P48 1, Base 0 — idénticas a r15.

## 3. F-F16: fórmulas — PASA (11 tuplas / 8 distintos, mismas)

El partidor corregido (split en `[.;\n"]+`, sin `|`) halla las mismas
11 tuplas que en r15, 0 perdidas, 0 nuevas. Fragmentos distintos (8):
`boxguxi2u0usqrtrho`, `drhodtnablarhonablafrhoeta`,
`dsdt0sintegralrholnrhodv`, `gmudmudlnrhodmulnrhodlnrho`, `kiki12f`,
`kiphi1df2`, `omegafcxi`, `xinablalnrho` (Ξ = |∇ ln ρ|, las 2 tuplas
FB-A3↔S2-A3 y FB-A3↔S2-A6 siguen dentro). Veredicto del JSON r16:
`COLISION_PARCIAL_115_142_CONTRAEJEMPLOS_27 + IDENTIDAD_DE_FORMULA_11`.

## 4. F-PICK16 y F-V: el verificador reproduce bajo el canon — PASA

`verificador_independiente_r16.py` → `verificador_independiente_r16.json`:
**`reproducido = true`, `diferencias_n = 0`.**

| Alcance | Resultado |
|---|---|
| 142 Jaccard a 4 decimales | 0 diffs |
| mismo_nombre / nombres / granularidad | 0 diffs |
| mejor correspondencia (740 entradas) | 740/740 |
| mejor contención (740 entradas) | **740/740 — 0 diffs** (r14: 162 diffs; r15: 0) |
| fórmulas exactas (11 tuplas) | 0 sobra, 0 falta |
| A14 por variante (R-R/R-K/R-KS) | reproduce: 0,7727 / 0,8000 / 0,8000; conteo 26/27/27 |
| artefacto `d_mud_` / pares A2 | reproduce |
| voces / banderas / conteos de matriz | reproduce |

**Diagnóstico:** la adopción como canon (N-17) no cambia ningún
número: el ejecutor y el verificador ya corrían la misma regla en
r15. El canon fija lo que ya se medía; la reproducción se sostiene
en su segunda vuelta (r15 → r16, 0 diffs).

## 5. F-A14: caveat resuelto por regla — PASA

`medir_tokenizacion_a14_r16.py` → `tokenizacion_a14_r16.json`:
A14 S3↔v10.3 = **0,8000 exacto** bajo R-KS (primaria del método r16),
conteo mismo contenido **27**; R-K 0,8000/27 (sensibilidad), R-R
0,7727/26 (control descartado). Los 6 pares A2 idénticos a r14/r15
(0,3220 / 0,0312 / 0,0189 / 0,0204 / 0,0000 / 0,3000). El artefacto
`d_mud_` bajo R-KS emite `d_mud` y excluye `''`. A14 = 0,8000,
conteo 27; la regla fija el método, no mueve el umbral.

## 6. F-VOZ-S2: la vía de las voces está AGOTADA en el umbral 0,50

`medir_destilacion_voces_s2_r16.py` → `destilacion_voces_s2_r16.json`
(baseline re-derivada de `reuse_sik_r15.json`, no hardcodeada):

- **Banderas r15:** FranBot 2, P48 1, Base 0 (3 banderas).
  **Banderas r16:** FranBot 2, P48 1, Base 0 — **mismas etiquetas,
  mismos picks, mismos valores** (conjuntos idénticos, True).
- **Banderas nuevas: 0.** Cruce de identidad (J ≥ 0,80 voz→S2): 0.
- **Control desde-solo** (definición del verificador): r15 {FB 2,
  P48 1, Base 0} = r16 {FB 2, P48 1, Base 0}.
- **Proximidad bajo el umbral** (top-3 Jaccard voz→S2 por sistema):
  FranBot máx 0,2308 (A6→S2-A4); P48 máx 0,0923 (A3→S2-A9); Base máx
  0,1341 (A7→S2-A5). El mejor Jaccard de una voz hacia S2 está a
  0,57 del umbral de identidad — no hay destilación oculta cerca
  del umbral.

**Veredicto: VIA_AGOTADA_UMBRAL_0_50.** Ninguna voz destila S2 por
contención más allá de las 3 banderas conocidas (FB 2 + P48 1), y
ninguna se acerca a J ≥ 0,80. La pregunta del mapa §F6 ("¿qué
sigue?") queda respondida para esta vía: la vía está agotada con su
falsador. Reabrirla exigiría un umbral distinto (declarado antes de
medir) o una fuente nueva — no un re-corrido del mismo umbral.

## 7. Veredicto

- **F-R16 PASA.** La colisión parcial 115/142 y la identidad S3 ≡ v10.3 se reproducen bajo el canon N-17.
- **La identidad no se extiende a las voces:** 0 mismo contenido entre voces, 0 cruces fuertes, 0 otras identidades. F-C-voz y F-I no se disparan.
- **F-P se sostiene como en r14/r15:** las voces destilan S2 por contención (FB 2 + P48 1 banderas), mismo mecanismo y mismos campos, a menor escala y con Jaccard bajo — y ahí se queda: **F-VOZ-S2 documenta la vía como agotada en 0,50.**
- **F-F16 PASA:** identidad de fórmula 11 tuplas / 8 distintos con el partidor corregido; el núcleo (~7–8 fragmentos) se sostiene y el fragmento Ξ∇lnρ queda dentro.
- **Verificación:** reproducido = true, 0 diffs en todos los alcances. Segunda vuelta consecutiva con 0 diffs (r15 → r16) bajo la regla ya canónica.

**Estado:** MEDIDO, NO ABSORBIDO. Nada de esto se absorbe como claim sin orden (la absorción es F1 bajo el régimen 01:43). REGLA-TOK-SIK-01 sigue como método (no canon): su adopción como canon sigue siendo decisión sin número, no ejecución de este frente.

ρ(x) > 0. Zvvvvv.
