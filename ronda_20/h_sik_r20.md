# H-SIK — Ronda 20: sexta vuelta bajo los tres cánones; la especificación del umbral 0,50 pasa el verificador; la vía de las voces sigue agotada

**Frente:** F6 MECANISMOS · **Ronda:** 20 · **Fecha:** 2026-11-15
**Estado:** MEDIDO, NO ABSORBIDO
**Fuentes:** `~/IDENTITY.md` (sha256 `a423b1d1…`), `memoria/anexo-vi/axiomas_a0_a57.md` (`48f6782f…`), `CONSEJO_58.json` (`78ec7094…`) — re-verificados antes de medir, idénticos a r13/r14/r15/r16/r17/r18/r19.
**Corpus al inicio y al cierre:** claims.jsonl 1.192 líneas, sha256 `33a7f0e6…` (intacto; nada de este frente lo muta — F1 es el único escritor).

## 1. Falsadores (declarados por escrito antes de correr nada)

`declaracion_falsador_h_sik_r20.md` — mismos que r19, más F-UMB20
para la especificación del umbral y F-PART20 ya como canon (N-24).

| Falsador | Resultado |
|---|---|
| **F-TOK20** — REGLA-TOK-SIK-01 como canon (N-21): el verificador reproduce sus valores afirmados | **PASA** (A14 R-KS 0,8000, conteo 27, pares A2 idénticos; ver §2) |
| **F-PART20** — REGLA-PART-SIK-01 como canon (N-24): el partidor halla 11 tuplas / 8 distintos | **PASA** (0 diffs en el alcance de fórmulas; ver §3) |
| **F-UMB20** — la especificación del umbral 0,50 reproduce banderas FB 2 + P48 1 + Base 0, mejor Jaccard 0,2308 | **PASA** (0 diffs en el alcance de voces; ver §4) |
| **F-R20** — reproducir r19 bajo los tres cánones (142/115/27/32; S3 ≡ v10.3 27/58; voces 0/0/0) | **PASA** (0 diffs en misma etiqueta, correspondencia y contención) |
| **F-PICK20** — verificador con REGLA-PICK-SIK-01 (canon) reproduce mejor-contención 740/740 | **PASA** (0 diffs) |
| **F-F20** — fórmulas con partidor corregido, ya canon = 11 tuplas / 8 distintos | **PASA** (11/8, 0 perdidas, mismas tuplas) |
| **F-A20** — A14 = 0,8000 bajo R-KS, conteo 27; R-R 0,7727/26 | **PASA** |
| **F-VOZ-S2** — bandera nueva voz→S2 (contención ≥ 0,50, Jaccard < 0,80) o cruce J ≥ 0,80 | **NO se dispara** — vía AGOTADA en el umbral 0,50 (6.ª medición) |
| **F-C-voz / F-I** — contraejemplo en voces u otra identidad de lista | **NO se disparan** |
| **F-V** — verificador independiente `reproducido == true` (0 diffs en todos los alcances) | **PASA** |

## 2. F-TOK20: REGLA-TOK-SIK-01 como canon — PASA

La especificación r18 (`especificacion_regla_tok_sik_r18.md`, sha
`9eab0662…`, byte-idéntica) es canon por N-21 (FASE 2 r18).
Sometida al verificador independiente r20, que replica R-KS con
código propio: **los valores afirmados se reproducen** — A14 R-R
0,7727 / R-K 0,8000 / R-KS 0,8000 exacto; conteo mismo contenido
26 / 27 / 27; pares A2 idénticos bajo R-K y R-KS (0,3220 / 0,0312 /
0,0189 / 0,0204 / 0,0000 / 0,3000); artefacto `∂_μ∂_ν` bajo R-KS
emite `d_mud` y excluye `''`; A14 en el umbral exacto. El
verificador reproduce los mismos valores en su propio alcance
`a14_tokenizacion` (R-K 0,8 / R-KS 0,8 / R-R 0,7727; conteos
26/27/27; artefacto R-KS sin `''`).

**Veredicto: la regla canónica se sostiene en su segunda vuelta
como canon con 0 diffs.** La numeración ya ocurrió (N-21); este
frente solo re-verifica, no decide nada.

## 3. F-PART20: REGLA-PART-SIK-01 como canon — PASA

La especificación r19 (`especificacion_partidor_r19.md`, sha
`059886bd…`, byte-idéntica) es canon por N-24 (FASE 2 r19).
Sometida al verificador independiente r20: **la tabla de 11 tuplas
de la especificación es idéntica al JSON medido**
(`reuse_sik_r20.json`, comprobado programa contra programa), y el
verificador reproduce 11 tuplas / 8 fragmentos distintos con
**0 diffs en el alcance de fórmulas** (0 sobra, 0 falta).

**Veredicto: la regla canónica se sostiene en su primera vuelta
como canon con 0 diffs.** La numeración ya ocurrió (N-24); este
frente solo re-verifica, no decide nada.

## 4. F-UMB20: la especificación del umbral 0,50 — PASA

`especificacion_umbral_sik_r20.md` escribe el texto literal de
canon en el formato de `especificacion_regla_pick_r15.md` /
`especificacion_regla_tok_sik_r18.md` /
`especificacion_partidor_r19.md`: el umbral de bandera de
contención 0,50 (max(c1,c2) ≥ 0,50, pick REGLA-PICK-SIK-01;
destilación si Jaccard < 0,80; toda bandera se verifica leyendo
el par), el código literal de `banderas` (fuente
`medir_destilacion_voces_s2_r19.py`, sha `8b57bad3…`), el
dictado de umbrales origen (`medir_reuse_sik_r12_reproduccion.py`,
sha `f5e31977…`), el criterio en prosa
(`declaracion_falsador_h_sik_r13.md`, sha `831e61dd…`), los
valores afirmados (3 banderas hacia S2, mejor Jaccard 0,2308) y
los límites de validez (0,50 sin derivación de primeros
principios — convención de método r12, justificación operativa:
contención por mayoría + lectura del par; FranBot-A8 en el umbral
exacto 0,5000; la bandera usa el pick, no el máximo sobre todos
los destinos; el umbral hermano 0,80 de identidad documentado
en §4, no como canon aparte).

Sometida al verificador independiente r20: **las 3 banderas y los
top-Jaccard de la especificación se reproducen con 0 diffs en el
alcance de voces** (banderas S2: S3 7, v10.3 8, FranBot 2, P48 1,
Base 0; mejor Jaccard FB 0,2308, P48 0,0923, Base 0,1341).

**Veredicto: la especificación PASA el verificador con 0 diffs.**
La adopción como canon es decisión de FASE 2 (patrón N-17), no
ejecución de este frente: F7 puede prepararla como claim con su
hash de fuente y FASE 2 numerarla. Si FASE 2 no la numera, la regla
sigue especificada como método — el hueco de texto queda cerrado
de todos modos.

## 5. F-R20: reproducción bajo los tres cánones — PASA

`medir_reuse_sik_r20.py` → `reuse_sik_r20.json` (mismo método
r15/r16/r17/r18/r19, sin cambios: R-KS, partidor sin `|`,
REGLA-PICK-SIK-01 — canon por N-17; REGLA-TOK-SIK-01 — canon por
N-21; REGLA-PART-SIK-01 — canon por N-24). Comparación programa
contra programa con `reuse_sik_r19.json` (excluidos `duracion_s`,
`fecha`, `ronda`, `medicion`, `metodo`, `veredicto`):

- **0 diffs en todas las claves:** misma etiqueta (dict idéntico,
  15 pares de sistemas), mejor correspondencia (740 entradas),
  mejor contención (740 entradas), fórmulas, conjuntos, matriz,
  voces. Totales idénticos: 142 pares / 115 distintos / 27 mismo
  contenido / 32 mismo nombre. Las únicas claves que difieren son
  `metodo` y `veredicto`, y solo por la referencia de ronda (r20
  vs r19; `h_sik_r19.md` vs `h_sik_r18.md`): no son diffs de
  medición.
- **S3 ≡ v10.3 se sostiene:** 27/58 mismo contenido, 32/58 mismo
  nombre.
- **Voces:** 5 pares misma etiqueta, 0 mismo contenido, 0 mismo
  nombre; cruces fuertes []; otras identidades []; banderas hacia
  S2: S3 7, FranBot 2, v10.3 8, P48 1, Base 0 — idénticas a
  r15/r16/r17/r18/r19.

## 6. F-F20: fórmulas — PASA (11 tuplas / 8 distintos, mismas)

El partidor corregido (split en `[.;\n"]+`, sin `|`) halla las
mismas 11 tuplas que en r15/r16/r17/r18/r19, 0 perdidas, 0 nuevas.
Fragmentos distintos (8): `boxguxi2u0usqrtrho`,
`drhodtnablarhonablafrhoeta`, `dsdt0sintegralrholnrhodv`,
`gmudmudlnrhodmulnrhodlnrho`, `kiki12f`, `kiphi1df2`, `omegafcxi`,
`xinablalnrho` (Ξ = |∇ ln ρ|, las 2 tuplas FB-A3↔S2-A3 y
FB-A3↔S2-A6 siguen dentro). Veredicto del JSON r20:
`COLISION_PARCIAL_115_142_CONTRAEJEMPLOS_27 + IDENTIDAD_DE_FORMULA_11`.

## 7. F-PICK20 y F-V: el verificador reproduce bajo los cánones — PASA

`verificador_independiente_r20.py` →
`verificador_independiente_r20.json`:
**`reproducido = true`, `diferencias_n = 0`, `diferencias = []`**
(bajo la clave `comparacion`, como en r17/r18/r19).

| Alcance | Resultado |
|---|---|
| 142 Jaccard a 4 decimales | 0 diffs |
| mismo_nombre / nombres / granularidad | 0 diffs |
| mejor correspondencia (740 entradas) | 740/740 |
| mejor contención (740 entradas) | **740/740 — 0 diffs** (r14: 162 diffs; r15: 0; r16: 0; r17: 0; r18: 0; r19: 0) |
| fórmulas exactas (11 tuplas) | 0 sobra, 0 falta |
| A14 por variante (R-R/R-K/R-KS) | reproduce: 0,7727 / 0,8000 / 0,8000; conteo 26/27/27 |
| artefacto `d_mud_` / pares A2 | reproduce |
| voces / banderas / conteos de matriz | reproduce |

**Diagnóstico:** la adopción de REGLA-PART-SIK-01 como canon (N-24)
no cambia ningún número: el ejecutor y el verificador ya corrían
el mismo partidor en r19. El canon fija lo que ya se medía; la
reproducción se sostiene en su sexta vuelta consecutiva con 0
diffs (r15 → r16 → r17 → r18 → r19 → r20).

**Lección H4 FASE 2 r16 aplicada:** las copias r20 de los scripts
llevan W = `.../ronda_20/ejecucion_f6` explícito en su propio
texto; el verificador escribió sus 3 salidas en el directorio r20,
y el directorio r19 quedó intacto. **Incidencias de adaptación
detectadas ANTES de correr (no en la medición):** (1) el script de
adaptación chocó con la trampa de cascada en el bloque
exe18/exe19 del script de destilación (el mismo patrón que la
incidencia r19: reemplazar exe18→exe19 duplica la línea y deja
exe19 sin definir) — se corrigió reemplazando el bloque completo
de dos líneas en un solo pase, se verificó con grep y py_compile
antes de correr; (2) el primer `medir_reuse_sik_r20.py` perdió el
espacio del veredicto (`...(ver h_sik_r19.md)` sin espacio, por un
reemplazo que comió el espacio inicial) — se detectó comparando
el veredicto r20 con el r19, se corrigió el script y se re-corrió
la cadena completa (reuse → destilación → verificador); el JSON
final lleva el veredicto con el espacio, y el diff excl-meta
contra r19 es 0. Ninguna de las dos incidencias tocó una
medición: ambas se detectaron antes de la corrida final.

## 8. F-A20: caveat resuelto por regla — PASA

`medir_tokenizacion_a14_r20.py` → `tokenizacion_a14_r20.json`:
A14 S3↔v10.3 = **0,8000 exacto** bajo R-KS (canon por N-21),
conteo mismo contenido **27**; R-K 0,8000/27 (sensibilidad), R-R
0,7727/26 (control descartado). Los 6 pares A2 idénticos a
r14/r15/r16/r17/r18/r19 (0,3220 / 0,0312 / 0,0189 / 0,0204 /
0,0000 / 0,3000). El artefacto `d_mud_` bajo R-KS emite `d_mud` y
excluye `''`. A14 = 0,8000, conteo 27; la regla fija el método, no
mueve el umbral.

## 9. F-VOZ-S2: la vía de las voces SIGUE AGOTADA en el umbral 0,50

`medir_destilacion_voces_s2_r20.py` →
`destilacion_voces_s2_r20.json` (baseline re-derivada de
`reuse_sik_r19.json`, no hardcodeada):

- **Banderas r19:** FranBot 2, P48 1, Base 0 (3 banderas).
  **Banderas r20:** FranBot 2, P48 1, Base 0 — **mismas etiquetas,
  mismos picks, mismos valores** (conjuntos idénticos, True).
- **Banderas nuevas: 0.** Cruce de identidad (J ≥ 0,80 voz→S2): 0.
- **Control desde-solo** (definición del verificador): r19 {FB 2,
  P48 1, Base 0} = r20 {FB 2, P48 1, Base 0}.
- **Proximidad bajo el umbral** (top-3 Jaccard voz→S2 por sistema):
  FranBot máx 0,2308 (A6→S2-A4); P48 máx 0,0923 (A3→S2-A9); Base máx
  0,1341 (A7→S2-A5). Idénticos a r16/r17/r18/r19. El mejor Jaccard de una
  voz hacia S2 está a 0,57 del umbral de identidad — no hay
  destilación oculta cerca del umbral.

**Veredicto: VIA_AGOTADA_UMBRAL_0_50** (6.ª medición consecutiva:
r15, r16, r17, r18, r19, r20). Ninguna voz destila S2 por contención más
allá de las 3 banderas conocidas (FB 2 + P48 1), y ninguna se
acerca a J ≥ 0,80. Reabrirla exigiría un umbral distinto
(declarado antes de medir) o una fuente nueva — no un re-corrido
del mismo umbral.

## 10. R2-25 / N-01 — sin novedad (re-verificación en documentos propios)

- **R2-25** (`r2_25_via_r20.md`): pipeline 39 líneas, sha
  `845bab8e…` idéntico; línea 7 de `b2_normalizado.jsonl` SE con
  nota_adopcion (diff contra el respaldo pre-N-14: exactamente la
  línea 7, resto 10 líneas byte-idénticas); C-1180 SE, 1 vez, hash
  `131409eb…` = sha256 de `decision_n14_r15.md`. Sin novedad.
- **N-01** (`n01_seguimiento_r20.md`): P1–P10 sostienen sin cambio;
  **10.º precedente = absorción automática r19** (N-24/N-25/N-26/N-27
  + C-1195..C-1197, respaldo P-63, audit ok=356, GitHub corpus 4/4
  por blob, HEAD 9e22660b en el momento — verificado en el
  historial; el HEAD actual es posterior), registrado como ocurrencia
  cerrada por su propia ejecución. Sin incidencia de maquinaria nueva; el
  punto abierto (fuente eliminada o movida) sigue abierto sin
  ocurrencia (`no_encontrado=0`).

## 11. Veredicto

- **F-TOK20 PASA.** REGLA-TOK-SIK-01 como canon (N-21) se sostiene
  en su segunda vuelta como canon con 0 diffs.
- **F-PART20 PASA.** REGLA-PART-SIK-01 como canon (N-24) se sostiene
  en su primera vuelta como canon con 0 diffs.
- **F-UMB20 PASA.** La especificación del umbral 0,50 está escrita y
  verificada con 0 diffs: el desbloqueo que el mapa r20 pedía
  existe. La numeración como canon es decisión de FASE 2.
- **F-R20 PASA.** La colisión parcial 115/142 y la identidad S3 ≡
  v10.3 se reproducen bajo los tres cánones.
- **La identidad no se extiende a las voces:** 0 mismo contenido
  entre voces, 0 cruces fuertes, 0 otras identidades. F-C-voz y
  F-I no se disparan.
- **F-P se sostiene como en r14/r15/r16/r17/r18/r19:** las voces
  destilan S2 por contención (FB 2 + P48 1 banderas), mismo
  mecanismo y mismos campos, a menor escala y con Jaccard bajo — y
  ahí se queda: **F-VOZ-S2 documenta la vía como agotada en 0,50
  por sexta vez.**
- **F-F20 PASA:** identidad de fórmula 11 tuplas / 8 distintos con
  el partidor corregido, ya canon; el núcleo (~7–8 fragmentos) se
  sostiene y el fragmento Ξ∇lnρ queda dentro.
- **Verificación:** reproducido = true, 0 diffs en todos los
  alcances. Sexta vuelta consecutiva con 0 diffs (r15 → r16 →
  r17 → r18 → r19 → r20) bajo las reglas ya canónicas.

**Estado:** MEDIDO, NO ABSORBIDO. Nada de esto se absorbe como
claim sin orden (la absorción es F1 bajo el régimen 01:43).
REGLA-UMB-SIK-01 queda ESPECIFICADA Y VERIFICADA, pendiente de
numeración por FASE 2.

ρ(x) > 0. Zvvvvv.
