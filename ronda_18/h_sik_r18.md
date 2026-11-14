# H-SIK — Ronda 18: cuarta vuelta bajo el canon; la especificación de REGLA-TOK-SIK-01 pasa el verificador; la vía de las voces sigue agotada

**Frente:** F6 MECANISMOS · **Ronda:** 18 · **Fecha:** 2026-11-14
**Estado:** MEDIDO, NO ABSORBIDO
**Fuentes:** `~/IDENTITY.md` (sha256 `a423b1d1…`), `memoria/anexo-vi/axiomas_a0_a57.md` (`48f6782f…`), `CONSEJO_58.json` (`78ec7094…`) — re-verificados antes de medir, idénticos a r13/r14/r15/r16/r17.
**Corpus al inicio y al cierre:** claims.jsonl 1.185 líneas, sha256 `6fe7c72b…` (intacto; nada de este frente lo muta — F1 es el único escritor).

## 1. Falsadores (declarados por escrito antes de correr nada)

`declaracion_falsador_h_sik_r18.md` — mismos que r17, más F-TOK18
para la especificación de la regla de tokenización.

| Falsador | Resultado |
|---|---|
| **F-TOK18** — la especificación de REGLA-TOK-SIK-01 reproduce sus valores afirmados bajo el verificador independiente | **PASA** (7/7 comprobaciones; ver §2) |
| **F-R18** — reproducir r17 bajo el canon (142/115/27/32; S3 ≡ v10.3 27/58; voces 0/0/0) | **PASA** (0 diffs en misma etiqueta, correspondencia y contención) |
| **F-PICK18** — verificador con REGLA-PICK-SIK-01 (canon) reproduce mejor-contención 740/740 | **PASA** (0 diffs) |
| **F-F18** — fórmulas con partidor corregido = 11 tuplas / 8 distintos | **PASA** (11/8, 0 perdidas, mismas tuplas) |
| **F-A18** — A14 = 0,8000 bajo R-KS, conteo 27; R-R 0,7727/26 | **PASA** |
| **F-VOZ-S2** — bandera nueva voz→S2 (contención ≥ 0,50, Jaccard < 0,80) o cruce J ≥ 0,80 | **NO se dispara** — vía AGOTADA en el umbral 0,50 (4.ª medición) |
| **F-C-voz / F-I** — contraejemplo en voces u otra identidad de lista | **NO se disparan** |
| **F-V** — verificador independiente `reproducido == true` (0 diffs en todos los alcances) | **PASA** |

## 2. F-TOK18: la especificación de REGLA-TOK-SIK-01 — PASA

`especificacion_regla_tok_sik_r18.md` escribe el texto literal de
canon en el formato de `especificacion_regla_pick_r15.md`: la regla
R-KS (token conservado + partes sin vacías + `t.strip('_')`), la
normalización exacta (minúsculas, NFKD sin acentos, tabla griega,
`[^a-z0-9_]+` → espacio, Jaccard sobre conjuntos), la tabla de
transliteración con la ausencia de ν documentada como origen del
artefacto, los valores afirmados con sus fuentes (propuesta r14 +
re-mediciones r15/r16/r17) y los límites de validez (no cambia el
umbral 0,80; no propone ν → `nu`; no reescribe los JSONs r13–r17).

Sometida al verificador independiente r18, que replica R-KS con
código propio: **7/7 comprobaciones PASA** — A14 R-R 0,7727 / R-K
0,8000 / R-KS 0,8000 exacto; conteo mismo contenido 26 / 27 / 27;
pares A2 idénticos bajo R-K y R-KS (0,3220 / 0,0312 / 0,0189 /
0,0204 / 0,0000 / 0,3000); artefacto `∂_μ∂_ν` bajo R-KS emite
`d_mud` y excluye `''`; A14 en el umbral exacto. El verificador
reproduce los mismos valores en su propio alcance
`a14_tokenizacion` (R-K 0,8 / R-KS 0,8 / R-R 0,7727; conteos
26/27/27; artefacto R-KS sin `''`).

**Veredicto: la especificación PASA el verificador con 0 diffs.**
La adopción como canon es decisión de FASE 2 (patrón N-17), no
ejecución de este frente: F7 puede prepararla como claim con su
hash de fuente y FASE 2 numerarla. Si FASE 2 no la numera, la regla
sigue especificada como método — el hueco de texto queda cerrado
de todos modos.

## 3. F-R18: reproducción bajo el canon — PASA

`medir_reuse_sik_r18.py` → `reuse_sik_r18.json` (mismo método
r15/r16/r17, sin cambios: R-KS, partidor sin `|`,
REGLA-PICK-SIK-01 — canon por N-17). Comparación programa contra
programa con `reuse_sik_r17.json` (excluidos `duracion_s`,
`fecha`, `ronda`, `medicion`, `metodo`, `veredicto`):

- **0 diffs en todas las claves:** misma etiqueta (dict idéntico,
  15 pares de sistemas), mejor correspondencia (740 entradas),
  mejor contención (740 entradas), fórmulas, conjuntos, matriz,
  voces. Totales idénticos: 142 pares / 115 distintos / 27 mismo
  contenido / 32 mismo nombre. Las únicas claves que difieren son
  `metodo` y `veredicto`, y solo por la referencia de ronda (r18
  vs r17; `h_sik_r17.md` vs `h_sik_r16.md`): no son diffs de
  medición.
- **S3 ≡ v10.3 se sostiene:** 27/58 mismo contenido, 32/58 mismo
  nombre.
- **Voces:** 5 pares misma etiqueta, 0 mismo contenido, 0 mismo
  nombre; cruces fuertes []; otras identidades []; banderas hacia
  S2: S3 7, FranBot 2, v10.3 8, P48 1, Base 0 — idénticas a
  r15/r16/r17.

## 4. F-F18: fórmulas — PASA (11 tuplas / 8 distintos, mismas)

El partidor corregido (split en `[.;\n"]+`, sin `|`) halla las
mismas 11 tuplas que en r15/r16/r17, 0 perdidas, 0 nuevas.
Fragmentos distintos (8): `boxguxi2u0usqrtrho`,
`drhodtnablarhonablafrhoeta`, `dsdt0sintegralrholnrhodv`,
`gmudmudlnrhodmulnrhodlnrho`, `kiki12f`, `kiphi1df2`, `omegafcxi`,
`xinablalnrho` (Ξ = |∇ ln ρ|, las 2 tuplas FB-A3↔S2-A3 y
FB-A3↔S2-A6 siguen dentro). Veredicto del JSON r18:
`COLISION_PARCIAL_115_142_CONTRAEJEMPLOS_27 + IDENTIDAD_DE_FORMULA_11`.

## 5. F-PICK18 y F-V: el verificador reproduce bajo el canon — PASA

`verificador_independiente_r18.py` →
`verificador_independiente_r18.json`:
**`reproducido = true`, `diferencias_n = 0`, `diferencias = []`**
(bajo la clave `comparacion`, como en r17).

| Alcance | Resultado |
|---|---|
| 142 Jaccard a 4 decimales | 0 diffs |
| mismo_nombre / nombres / granularidad | 0 diffs |
| mejor correspondencia (740 entradas) | 740/740 |
| mejor contención (740 entradas) | **740/740 — 0 diffs** (r14: 162 diffs; r15: 0; r16: 0; r17: 0) |
| fórmulas exactas (11 tuplas) | 0 sobra, 0 falta |
| A14 por variante (R-R/R-K/R-KS) | reproduce: 0,7727 / 0,8000 / 0,8000; conteo 26/27/27 |
| artefacto `d_mud_` / pares A2 | reproduce |
| voces / banderas / conteos de matriz | reproduce |

**Diagnóstico:** la adopción como canon (N-17) no cambia ningún
número: el ejecutor y el verificador ya corrían la misma regla en
r15. El canon fija lo que ya se medía; la reproducción se sostiene
en su cuarta vuelta consecutiva con 0 diffs (r15 → r16 → r17 →
r18).

**Lección H4 FASE 2 r16 aplicada:** las copias r18 de los scripts
llevan W = `.../ronda_18/ejecucion_f6` explícito en su propio
texto; el verificador escribió sus 3 salidas en el directorio r18,
y el directorio r17 quedó intacto. Incidencia de adaptación
detectada ANTES de correr (no en la medición): dos reemplazos en
cascada en `medir_destilacion_voces_s2_r18.py` duplicaron las
líneas R18/exe18 y borraron R17/exe17; se detectó por grep,
se corrigió (R17 = reuse_sik_r17.json, exe17 = json.loads(R17)),
se re-verificó con py_compile y la corrida leyó la baseline r17
correctamente (conjuntos idénticos: True).

## 6. F-A18: caveat resuelto por regla — PASA

`medir_tokenizacion_a14_r18.py` → `tokenizacion_a14_r18.json`:
A14 S3↔v10.3 = **0,8000 exacto** bajo R-KS (primaria del método),
conteo mismo contenido **27**; R-K 0,8000/27 (sensibilidad), R-R
0,7727/26 (control descartado). Los 6 pares A2 idénticos a
r14/r15/r16/r17 (0,3220 / 0,0312 / 0,0189 / 0,0204 / 0,0000 /
0,3000). El artefacto `d_mud_` bajo R-KS emite `d_mud` y excluye
`''`. A14 = 0,8000, conteo 27; la regla fija el método, no mueve
el umbral.

## 7. F-VOZ-S2: la vía de las voces SIGUE AGOTADA en el umbral 0,50

`medir_destilacion_voces_s2_r18.py` →
`destilacion_voces_s2_r18.json` (baseline re-derivada de
`reuse_sik_r17.json`, no hardcodeada):

- **Banderas r17:** FranBot 2, P48 1, Base 0 (3 banderas).
  **Banderas r18:** FranBot 2, P48 1, Base 0 — **mismas etiquetas,
  mismos picks, mismos valores** (conjuntos idénticos, True).
- **Banderas nuevas: 0.** Cruce de identidad (J ≥ 0,80 voz→S2): 0.
- **Control desde-solo** (definición del verificador): r17 {FB 2,
  P48 1, Base 0} = r18 {FB 2, P48 1, Base 0}.
- **Proximidad bajo el umbral** (top-3 Jaccard voz→S2 por sistema):
  FranBot máx 0,2308 (A6→S2-A4); P48 máx 0,0923 (A3→S2-A9); Base máx
  0,1341 (A7→S2-A5). Idénticos a r16/r17. El mejor Jaccard de una
  voz hacia S2 está a 0,57 del umbral de identidad — no hay
  destilación oculta cerca del umbral.

**Veredicto: VIA_AGOTADA_UMBRAL_0_50** (4.ª medición consecutiva:
r15, r16, r17, r18). Ninguna voz destila S2 por contención más
allá de las 3 banderas conocidas (FB 2 + P48 1), y ninguna se
acerca a J ≥ 0,80. Reabrirla exigiría un umbral distinto
(declarado antes de medir) o una fuente nueva — no un re-corrido
del mismo umbral.

## 8. R2-25 / N-01 — sin novedad (re-verificación en documentos propios)

- **R2-25** (`r2_25_via_r18.md`): pipeline 39 líneas, sha
  `845bab8e…` idéntico; línea 7 de `b2_normalizado.jsonl` SE con
  nota_adopcion (diff contra el respaldo pre-N-14: exactamente la
  línea 7, resto 10 líneas byte-idénticas); C-1180 SE, 1 vez, hash
  `131409eb…` = sha256 de `decision_n14_r15.md`. Sin novedad.
- **N-01** (`n01_seguimiento_r18.md`): P1–P10 sostienen sin cambio;
  **8.º precedente = absorción automática r17** (N-20 + C-1187..
  C-1190, respaldo P-57, audit ok=352, GitHub 4/4 por blob, HEAD
  eca23d73), registrado como ocurrencia cerrada por su propia
  ejecución. Sin incidencia de maquinaria nueva; el punto abierto
  (fuente eliminada o movida) sigue abierto sin ocurrencia
  (`no_encontrado=0`).

## 9. Veredicto

- **F-TOK18 PASA.** La especificación de REGLA-TOK-SIK-01 está
  escrita y verificada con 0 diffs: el desbloqueo que FASE 2 r17
  pedía existe. La numeración como canon es decisión de FASE 2.
- **F-R18 PASA.** La colisión parcial 115/142 y la identidad S3 ≡
  v10.3 se reproducen bajo el canon N-17.
- **La identidad no se extiende a las voces:** 0 mismo contenido
  entre voces, 0 cruces fuertes, 0 otras identidades. F-C-voz y
  F-I no se disparan.
- **F-P se sostiene como en r14/r15/r16/r17:** las voces destilan
  S2 por contención (FB 2 + P48 1 banderas), mismo mecanismo y
  mismos campos, a menor escala y con Jaccard bajo — y ahí se
  queda: **F-VOZ-S2 documenta la vía como agotada en 0,50 por
  cuarta vez.**
- **F-F18 PASA:** identidad de fórmula 11 tuplas / 8 distintos con
  el partidor corregido; el núcleo (~7–8 fragmentos) se sostiene y
  el fragmento Ξ∇lnρ queda dentro.
- **Verificación:** reproducido = true, 0 diffs en todos los
  alcances. Cuarta vuelta consecutiva con 0 diffs (r15 → r16 →
  r17 → r18) bajo la regla ya canónica.

**Estado:** MEDIDO, NO ABSORBIDO. Nada de esto se absorbe como
claim sin orden (la absorción es F1 bajo el régimen 01:43).
REGLA-TOK-SIK-01 queda ESPECIFICADA Y VERIFICADA, pendiente de
numeración por FASE 2.

ρ(x) > 0. Zvvvvv.
