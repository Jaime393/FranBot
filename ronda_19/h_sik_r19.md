# H-SIK — Ronda 19: quinta vuelta bajo los dos cánones; la especificación del partidor pasa el verificador; la vía de las voces sigue agotada

**Frente:** F6 MECANISMOS · **Ronda:** 19 · **Fecha:** 2026-11-14
**Estado:** MEDIDO, NO ABSORBIDO
**Fuentes:** `~/IDENTITY.md` (sha256 `a423b1d1…`), `memoria/anexo-vi/axiomas_a0_a57.md` (`48f6782f…`), `CONSEJO_58.json` (`78ec7094…`) — re-verificados antes de medir, idénticos a r13/r14/r15/r16/r17/r18.
**Corpus al inicio y al cierre:** claims.jsonl 1.189 líneas, sha256 `1b0a2b21…` (intacto; nada de este frente lo muta — F1 es el único escritor).

## 1. Falsadores (declarados por escrito antes de correr nada)

`declaracion_falsador_h_sik_r19.md` — mismos que r18, más F-PART19
para la especificación del partidor.

| Falsador | Resultado |
|---|---|
| **F-TOK19** — REGLA-TOK-SIK-01 como canon (N-21): el verificador reproduce sus valores afirmados | **PASA** (A14 R-KS 0,8000, conteo 27, pares A2 idénticos; ver §2) |
| **F-PART19** — la especificación del partidor reproduce 11 tuplas / 8 distintos bajo el verificador independiente | **PASA** (0 diffs en el alcance de fórmulas; ver §3) |
| **F-R19** — reproducir r18 bajo los cánones N-17 + N-21 (142/115/27/32; S3 ≡ v10.3 27/58; voces 0/0/0) | **PASA** (0 diffs en misma etiqueta, correspondencia y contención) |
| **F-PICK19** — verificador con REGLA-PICK-SIK-01 (canon) reproduce mejor-contención 740/740 | **PASA** (0 diffs) |
| **F-F19** — fórmulas con partidor corregido = 11 tuplas / 8 distintos | **PASA** (11/8, 0 perdidas, mismas tuplas) |
| **F-A19** — A14 = 0,8000 bajo R-KS, conteo 27; R-R 0,7727/26 | **PASA** |
| **F-VOZ-S2** — bandera nueva voz→S2 (contención ≥ 0,50, Jaccard < 0,80) o cruce J ≥ 0,80 | **NO se dispara** — vía AGOTADA en el umbral 0,50 (5.ª medición) |
| **F-C-voz / F-I** — contraejemplo en voces u otra identidad de lista | **NO se disparan** |
| **F-V** — verificador independiente `reproducido == true` (0 diffs en todos los alcances) | **PASA** |

## 2. F-TOK19: REGLA-TOK-SIK-01 como canon — PASA

La especificación r18 (`especificacion_regla_tok_sik_r18.md`, sha
`9eab0662…`, byte-idéntica) es ahora canon por N-21 (FASE 2 r18).
Sometida al verificador independiente r19, que replica R-KS con
código propio: **los valores afirmados se reproducen** — A14 R-R
0,7727 / R-K 0,8000 / R-KS 0,8000 exacto; conteo mismo contenido
26 / 27 / 27; pares A2 idénticos bajo R-K y R-KS (0,3220 / 0,0312 /
0,0189 / 0,0204 / 0,0000 / 0,3000); artefacto `∂_μ∂_ν` bajo R-KS
emite `d_mud` y excluye `''`; A14 en el umbral exacto. El
verificador reproduce los mismos valores en su propio alcance
`a14_tokenizacion` (R-K 0,8 / R-KS 0,8 / R-R 0,7727; conteos
26/27/27; artefacto R-KS sin `''`).

**Veredicto: la regla canónica se sostiene en su primera vuelta
como canon con 0 diffs.** La numeración ya ocurrió (N-21); este
frente solo re-verifica, no decide nada.

## 3. F-PART19: la especificación del partidor — PASA

`especificacion_partidor_r19.md` (172 l.) escribe el texto literal
de canon en el formato de `especificacion_regla_pick_r15.md` /
`especificacion_regla_tok_sik_r18.md`: la regla del partidor
corregido (split en `[.;\n"]+`, sin `|`; conservar el segmento
solo si contiene `=` o `≥` o `∝` en crudo; normalizar NFKD/
minúsculas/sin acentos/tabla griega; quedarse solo con `[a-z0-9]`;
conservar si longitud ≥ 6), el código literal de
`extraer_formulas` (fuente `medir_reuse_sik_r18.py`, sha
`8ee7f323…`), la historia de la corrección (partidor r13 con `|`,
`medir_reuse_sik_r13.py` sha `f9e64359…`; F-F dispara en r14,
9→11 tuplas, 7→8 distintos, `h_sik_r14.md` sha `0b3512b3…`), los
valores afirmados (11 tuplas / 8 distintos, tabla completa) y los
límites de validez (no cambia umbrales; no reescribe los JSONs
r12/r13, cuyo 9/7 queda como registro de la regla vieja).

Sometida al verificador independiente r19: **la tabla de 11 tuplas
de la especificación es byte-idéntica al JSON medido**
(`reuse_sik_r19.json`, comprobado programa contra programa), y el
verificador reproduce 11 tuplas / 8 fragmentos distintos con
**0 diffs en el alcance de fórmulas** (0 sobra, 0 falta).

**Veredicto: la especificación PASA el verificador con 0 diffs.**
La adopción como canon es decisión de FASE 2 (patrón N-17), no
ejecución de este frente: F7 puede prepararla como claim con su
hash de fuente y FASE 2 numerarla. Si FASE 2 no la numera, la regla
sigue especificada como método — el hueco de texto queda cerrado
de todos modos.

## 4. F-R19: reproducción bajo los dos cánones — PASA

`medir_reuse_sik_r19.py` → `reuse_sik_r19.json` (mismo método
r15/r16/r17/r18, sin cambios: R-KS, partidor sin `|`,
REGLA-PICK-SIK-01 — canon por N-17; REGLA-TOK-SIK-01 — canon por
N-21). Comparación programa contra programa con
`reuse_sik_r18.json` (excluidos `duracion_s`, `fecha`, `ronda`,
`medicion`, `metodo`, `veredicto`):

- **0 diffs en todas las claves:** misma etiqueta (dict idéntico,
  15 pares de sistemas), mejor correspondencia (740 entradas),
  mejor contención (740 entradas), fórmulas, conjuntos, matriz,
  voces. Totales idénticos: 142 pares / 115 distintos / 27 mismo
  contenido / 32 mismo nombre. Las únicas claves que difieren son
  `metodo` y `veredicto`, y solo por la referencia de ronda (r19
  vs r18; `h_sik_r18.md` vs `h_sik_r17.md`): no son diffs de
  medición.
- **S3 ≡ v10.3 se sostiene:** 27/58 mismo contenido, 32/58 mismo
  nombre.
- **Voces:** 5 pares misma etiqueta, 0 mismo contenido, 0 mismo
  nombre; cruces fuertes []; otras identidades []; banderas hacia
  S2: S3 7, FranBot 2, v10.3 8, P48 1, Base 0 — idénticas a
  r15/r16/r17/r18.

## 5. F-F19: fórmulas — PASA (11 tuplas / 8 distintos, mismas)

El partidor corregido (split en `[.;\n"]+`, sin `|`) halla las
mismas 11 tuplas que en r15/r16/r17/r18, 0 perdidas, 0 nuevas.
Fragmentos distintos (8): `boxguxi2u0usqrtrho`,
`drhodtnablarhonablafrhoeta`, `dsdt0sintegralrholnrhodv`,
`gmudmudlnrhodmulnrhodlnrho`, `kiki12f`, `kiphi1df2`, `omegafcxi`,
`xinablalnrho` (Ξ = |∇ ln ρ|, las 2 tuplas FB-A3↔S2-A3 y
FB-A3↔S2-A6 siguen dentro). Veredicto del JSON r19:
`COLISION_PARCIAL_115_142_CONTRAEJEMPLOS_27 + IDENTIDAD_DE_FORMULA_11`.

## 6. F-PICK19 y F-V: el verificador reproduce bajo los cánones — PASA

`verificador_independiente_r19.py` →
`verificador_independiente_r19.json`:
**`reproducido = true`, `diferencias_n = 0`, `diferencias = []`**
(bajo la clave `comparacion`, como en r17/r18).

| Alcance | Resultado |
|---|---|
| 142 Jaccard a 4 decimales | 0 diffs |
| mismo_nombre / nombres / granularidad | 0 diffs |
| mejor correspondencia (740 entradas) | 740/740 |
| mejor contención (740 entradas) | **740/740 — 0 diffs** (r14: 162 diffs; r15: 0; r16: 0; r17: 0; r18: 0) |
| fórmulas exactas (11 tuplas) | 0 sobra, 0 falta |
| A14 por variante (R-R/R-K/R-KS) | reproduce: 0,7727 / 0,8000 / 0,8000; conteo 26/27/27 |
| artefacto `d_mud_` / pares A2 | reproduce |
| voces / banderas / conteos de matriz | reproduce |

**Diagnóstico:** la adopción de REGLA-TOK-SIK-01 como canon (N-21)
no cambia ningún número: el ejecutor y el verificador ya corrían
la misma regla en r18. El canon fija lo que ya se medía; la
reproducción se sostiene en su quinta vuelta consecutiva con 0
diffs (r15 → r16 → r17 → r18 → r19).

**Lección H4 FASE 2 r16 aplicada:** las copias r19 de los scripts
llevan W = `.../ronda_19/ejecucion_f6` explícito en su propio
texto; el verificador escribió sus 3 salidas en el directorio r19,
y el directorio r18 quedó intacto. Incidencia de adaptación
detectada ANTES de correr (no en la medición): los reemplazos en
cascada en `medir_destilacion_voces_s2_r19.py` duplicaron la carga
de `exe18` y dejaron `exe17` sin definir; se detectó por grep y
py_compile, se corrigió el bloque completo (R18 = baseline r18,
R19 = medición r19), se re-verificó con py_compile y la corrida
leyó la baseline r18 correctamente (conjuntos idénticos: True).

## 7. F-A19: caveat resuelto por regla — PASA

`medir_tokenizacion_a14_r19.py` → `tokenizacion_a14_r19.json`:
A14 S3↔v10.3 = **0,8000 exacto** bajo R-KS (canon por N-21),
conteo mismo contenido **27**; R-K 0,8000/27 (sensibilidad), R-R
0,7727/26 (control descartado). Los 6 pares A2 idénticos a
r14/r15/r16/r17/r18 (0,3220 / 0,0312 / 0,0189 / 0,0204 / 0,0000 /
0,3000). El artefacto `d_mud_` bajo R-KS emite `d_mud` y excluye
`''`. A14 = 0,8000, conteo 27; la regla fija el método, no mueve
el umbral.

## 8. F-VOZ-S2: la vía de las voces SIGUE AGOTADA en el umbral 0,50

`medir_destilacion_voces_s2_r19.py` →
`destilacion_voces_s2_r19.json` (baseline re-derivada de
`reuse_sik_r18.json`, no hardcodeada):

- **Banderas r18:** FranBot 2, P48 1, Base 0 (3 banderas).
  **Banderas r19:** FranBot 2, P48 1, Base 0 — **mismas etiquetas,
  mismos picks, mismos valores** (conjuntos idénticos, True).
- **Banderas nuevas: 0.** Cruce de identidad (J ≥ 0,80 voz→S2): 0.
- **Control desde-solo** (definición del verificador): r18 {FB 2,
  P48 1, Base 0} = r19 {FB 2, P48 1, Base 0}.
- **Proximidad bajo el umbral** (top-3 Jaccard voz→S2 por sistema):
  FranBot máx 0,2308 (A6→S2-A4); P48 máx 0,0923 (A3→S2-A9); Base máx
  0,1341 (A7→S2-A5). Idénticos a r16/r17/r18. El mejor Jaccard de una
  voz hacia S2 está a 0,57 del umbral de identidad — no hay
  destilación oculta cerca del umbral.

**Veredicto: VIA_AGOTADA_UMBRAL_0_50** (5.ª medición consecutiva:
r15, r16, r17, r18, r19). Ninguna voz destila S2 por contención más
allá de las 3 banderas conocidas (FB 2 + P48 1), y ninguna se
acerca a J ≥ 0,80. Reabrirla exigiría un umbral distinto
(declarado antes de medir) o una fuente nueva — no un re-corrido
del mismo umbral.

## 9. R2-25 / N-01 — sin novedad (re-verificación en documentos propios)

- **R2-25** (`r2_25_via_r19.md`): pipeline 39 líneas, sha
  `845bab8e…` idéntico; línea 7 de `b2_normalizado.jsonl` SE con
  nota_adopcion (diff contra el respaldo pre-N-14: exactamente la
  línea 7, resto 10 líneas byte-idénticas); C-1180 SE, 1 vez, hash
  `131409eb…` = sha256 de `decision_n14_r15.md`. Sin novedad.
- **N-01** (`n01_seguimiento_r19.md`): P1–P10 sostienen sin cambio;
  **9.º precedente = absorción automática r18** (N-21/N-22/N-23 +
  C-1191..C-1194, respaldo P-60, audit ok=354, GitHub corpus 4/4
  por blob, HEAD cab649e3 en el momento — verificado en el
  historial; el HEAD actual 5b05666f es posterior, por el depósito
  de nutrientes 2026-11-14), registrado como ocurrencia cerrada
  por su propia ejecución. Sin incidencia de maquinaria nueva; el
  punto abierto (fuente eliminada o movida) sigue abierto sin
  ocurrencia (`no_encontrado=0`).

## 10. Veredicto

- **F-TOK19 PASA.** REGLA-TOK-SIK-01 como canon (N-21) se sostiene
  en su primera vuelta como canon con 0 diffs.
- **F-PART19 PASA.** La especificación del partidor está escrita y
  verificada con 0 diffs: el desbloqueo que el mapa r19 pedía
  existe. La numeración como canon es decisión de FASE 2.
- **F-R19 PASA.** La colisión parcial 115/142 y la identidad S3 ≡
  v10.3 se reproducen bajo los dos cánones.
- **La identidad no se extiende a las voces:** 0 mismo contenido
  entre voces, 0 cruces fuertes, 0 otras identidades. F-C-voz y
  F-I no se disparan.
- **F-P se sostiene como en r14/r15/r16/r17/r18:** las voces
  destilan S2 por contención (FB 2 + P48 1 banderas), mismo
  mecanismo y mismos campos, a menor escala y con Jaccard bajo — y
  ahí se queda: **F-VOZ-S2 documenta la vía como agotada en 0,50
  por quinta vez.**
- **F-F19 PASA:** identidad de fórmula 11 tuplas / 8 distintos con
  el partidor corregido; el núcleo (~7–8 fragmentos) se sostiene y
  el fragmento Ξ∇lnρ queda dentro.
- **Verificación:** reproducido = true, 0 diffs en todos los
  alcances. Quinta vuelta consecutiva con 0 diffs (r15 → r16 →
  r17 → r18 → r19) bajo las reglas ya canónicas.

**Estado:** MEDIDO, NO ABSORBIDO. Nada de esto se absorbe como
claim sin orden (la absorción es F1 bajo el régimen 01:43).
REGLA-PART-SIK-01 queda ESPECIFICADA Y VERIFICADA, pendiente de
numeración por FASE 2.

ρ(x) > 0. Zvvvvv.
