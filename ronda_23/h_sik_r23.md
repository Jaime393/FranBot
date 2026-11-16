# H-SIK — Ronda 23: novena vuelta bajo los cuatro cánones; el umbral 0,50 pasa su tercera vuelta como canon; la vía de las voces se registra agotada sin ejecutar

**Frente:** F6 MECANISMOS · **Ronda:** 23 · **Fecha:** 2026-11-16
**Estado:** MEDIDO, NO ABSORBIDO
**Fuentes:** `~/IDENTITY.md` (sha256 `a423b1d1…`), `memoria/anexo-vi/axiomas_a0_a57.md` (`48f6782f…`), `CONSEJO_58.json` (`78ec7094…`) — re-verificados antes de medir, idénticos a r13/r14/r15/r16/r17/r18/r19/r20/r21/r22.
**Corpus al inicio y al cierre:** claims.jsonl 1.207 líneas, sha256 `2ac47151…` (intacto; nada de este frente lo muta — F1 es el único escritor).

## 1. Falsadores (declarados por escrito antes de correr nada)

`declaracion_falsador_h_sik_r23.md` — mismos que r22, más F-UMB23
ya en su tercera vuelta como canon (N-28) y el 13.º precedente
R2-25/N-01 = absorción r22. **Novedad de método: F-VOZ-S2 NO SE
EJECUTA en r23** — la vía se registra agotada por 9.ª vez sin
re-corrido del mismo umbral.

| Falsador | Resultado |
|---|---|
| **F-TOK23** — REGLA-TOK-SIK-01 como canon (N-21): el verificador reproduce sus valores afirmados | **PASA** (A14 R-KS 0,8000, conteo 27, pares A2 idénticos; ver §2) |
| **F-PART23** — REGLA-PART-SIK-01 como canon (N-24): el partidor halla 11 tuplas / 8 distintos | **PASA** (0 diffs en el alcance de fórmulas; ver §3) |
| **F-UMB23** — REGLA-UMB-SIK-01 como canon (N-28), tercera vuelta: banderas FB 2 + P48 1 + Base 0, mejor Jaccard 0,2308 | **PASA** (0 diffs en el alcance de voces; ver §4) |
| **F-R23** — reproducir r21/r22 bajo los cuatro cánones (142/115/27/32; S3 ≡ v10.3 27/58; voces 0/0/0) | **PASA** (0 diffs en misma etiqueta, correspondencia y contención) |
| **F-PICK23** — verificador con REGLA-PICK-SIK-01 (canon) reproduce mejor-contención 740/740 | **PASA** (0 diffs) |
| **F-F23** — fórmulas con partidor corregido, ya canon = 11 tuplas / 8 distintos | **PASA** (11/8, 0 perdidas, mismas tuplas) |
| **F-A23** — A14 = 0,8000 bajo R-KS, conteo 27; R-R 0,7727/26 | **PASA** |
| **F-VOZ-S2** — bandera nueva voz→S2 (contención ≥ 0,50, Jaccard < 0,80) o cruce J ≥ 0,80 | **NO SE EJECUTA** — vía AGOTADA en el umbral 0,50 (9.º registro sin re-corrido) |
| **F-C-voz / F-I** — contraejemplo en voces u otra identidad de lista | **NO se disparan** |
| **F-V** — verificador independiente `reproducido == true` (0 diffs en todos los alcances) | **PASA** |

## 2. F-TOK23: REGLA-TOK-SIK-01 como canon — PASA

La especificación r18 (`especificacion_regla_tok_sik_r18.md`, sha
`9eab0662…`, byte-idéntica) es canon por N-21 (FASE 2 r18).
Sometida al verificador independiente r23, que replica R-KS con
código propio: **los valores afirmados se reproducen** — A14 R-R
0,7727 / R-K 0,8000 / R-KS 0,8000 exacto; conteo mismo contenido
26 / 27 / 27; pares A2 idénticos bajo R-K y R-KS (0,3220 / 0,0312 /
0,0189 / 0,0204 / 0,0000 / 0,3000); artefacto `∂_μ∂_ν` bajo R-KS
emite `d_mud` y excluye `''`; A14 en el umbral exacto. El
verificador reproduce los mismos valores en su propio alcance
`a14_tokenizacion` (R-K 0,8 / R-KS 0,8 / R-R 0,7727; conteos
26/27/27; artefacto R-KS sin `''`).

**Veredicto: la regla canónica se sostiene en su quinta vuelta
como canon con 0 diffs.** La numeración ya ocurrió (N-21); este
frente solo re-verifica, no decide nada.

## 3. F-PART23: REGLA-PART-SIK-01 como canon — PASA

La especificación r19 (`especificacion_partidor_r19.md`, sha
`059886bd…`, byte-idéntica) es canon por N-24 (FASE 2 r19).
Sometida al verificador independiente r23: **la tabla de 11 tuplas
de la especificación es idéntica al JSON medido**
(`reuse_sik_r23.json`, comprobado programa contra programa), y el
verificador reproduce 11 tuplas / 8 fragmentos distintos con
**0 diffs en el alcance de fórmulas** (0 sobra, 0 falta).

**Veredicto: la regla canónica se sostiene en su cuarta vuelta
como canon con 0 diffs.** La numeración ya ocurrió (N-24); este
frente solo re-verifica, no decide nada.

## 4. F-UMB23: REGLA-UMB-SIK-01 como canon, tercera vuelta — PASA

La especificación r20 (`especificacion_umbral_sik_r20.md`, sha
`248d4ac3…`, byte-idéntica) es canon por N-28 (FASE 2 r20; canon
`canon_regla_umb_sik_01.md`, sha `8cc2f706…`). El umbral 0,50 se
verifica con sus 4 hashes de origen, todos re-verificados hoy:
origen `medir_reuse_sik_r12_reproduccion.py` `f5e31977…`;
dictado heredado `medir_reuse_sik_r19.py` `62ec2136…`; aplicación
a las voces `medir_destilacion_voces_s2_r19.py` `8b57bad3…`;
criterio en prosa `declaracion_falsador_h_sik_r13.md`
`831e61dd…`. El límite honesto consta: 0,50 es convención de
método r12, no derivación de primeros principios.
Sometida al verificador independiente r23: **las 3 banderas y los
top-Jaccard de la especificación se reproducen con 0 diffs en el
alcance de voces** (banderas S2: S3 7, v10.3 8, FranBot 2, P48 1,
Base 0; mejor Jaccard FB 0,2308, P48 0,0923, Base 0,1341).

**Veredicto: el canon se sostiene en su tercera vuelta como canon
con 0 diffs.** La numeración ya ocurrió (N-28); este frente solo
re-verifica, no decide nada.

## 5. F-R23: reproducción bajo los cuatro cánones — PASA

`medir_reuse_sik_r23.py` → `reuse_sik_r23.json` (mismo método
r15/r16/r17/r18/r19/r20/r21/r22, sin cambios: R-KS, partidor sin `|`,
REGLA-PICK-SIK-01 — canon por N-17; REGLA-TOK-SIK-01 — canon por
N-21; REGLA-PART-SIK-01 — canon por N-24; REGLA-UMB-SIK-01 —
canon por N-28). Comparación programa contra programa con
`reuse_sik_r22.json` (excluidos `duracion_s`, `fecha`, `ronda`,
`medicion`, `metodo`, `veredicto`):

- **0 diffs en todas las claves:** misma etiqueta (dict idéntico,
  15 pares de sistemas), mejor correspondencia (740 entradas),
  mejor contención (740 entradas), fórmulas, conjuntos, matriz,
  voces. Totales idénticos: 142 pares / 115 distintos / 27 mismo
  contenido / 32 mismo nombre. Las únicas claves que difieren son
  `metodo` y `veredicto`, y solo por la referencia de ronda (r23
  vs r22; `h_sik_r22.md` vs `h_sik_r21.md`): no son diffs de
  medición.
- **S3 ≡ v10.3 se sostiene:** 27/58 mismo contenido, 32/58 mismo
  nombre.
- **Voces:** 5 pares misma etiqueta, 0 mismo contenido, 0 mismo
  nombre; cruces fuertes []; otras identidades []; banderas hacia
  S2: S3 7, FranBot 2, v10.3 8, P48 1, Base 0 — idénticas a
  r15/r16/r17/r18/r19/r20/r21/r22.

## 6. F-F23: fórmulas — PASA (11 tuplas / 8 distintos, mismas)

El partidor corregido (split en `[.;\n\"]+`, sin `|`) halla las
mismas 11 tuplas que en r15/r16/r17/r18/r19/r20/r21/r22, 0 perdidas, 0 nuevas.
Fragmentos distintos (8): `boxguxi2u0usqrtrho`,
`drhodtnablarhonablafrhoeta`, `dsdt0sintegralrholnrhodv`,
`gmudmudlnrhodmulnrhodlnrho`, `kiki12f`, `kiphi1df2`, `omegafcxi`,
`xinablalnrho` (Ξ = |∇ ln ρ|, las 2 tuplas FB-A3↔S2-A3 y
FB-A3↔S2-A6 siguen dentro). Veredicto del JSON r23:
`COLISION_PARCIAL_115_142_CONTRAEJEMPLOS_27 + IDENTIDAD_DE_FORMULA_11`.

## 7. F-PICK23 y F-V: el verificador reproduce bajo los cánones — PASA

`verificador_independiente_r23.py` →
`verificador_independiente_r23.json`:
**`reproducido = true`, `diferencias_n = 0`, `diferencias = []`**
(bajo la clave `comparacion`, como en r17/r18/r19/r20/r21/r22).

| Alcance | Resultado |
|---|---|
| 142 Jaccard a 4 decimales | 0 diffs |
| mismo_nombre / nombres / granularidad | 0 diffs |
| mejor correspondencia (740 entradas) | 740/740 |
| mejor contención (740 entradas) | **740/740 — 0 diffs** (r14: 162 diffs; r15: 0; r16: 0; r17: 0; r18: 0; r19: 0; r20: 0; r21: 0; r22: 0) |
| fórmulas exactas (11 tuplas) | 0 sobra, 0 falta |
| A14 por variante (R-R/R-K/R-KS) | reproduce: 0,7727 / 0,8000 / 0,8000; conteo 26/27/27 |
| artefacto `d_mud_` / pares A2 | reproduce |
| voces / banderas / conteos de matriz | reproduce |

**Diagnóstico:** ningún canon cambió desde r22; el ejecutor y el
verificador corren el mismo método. La reproducción se sostiene en
su novena vuelta consecutiva con 0 diffs (r15 → r16 → r17 → r18 →
r19 → r20 → r21 → r22 → r23).

**Lección H4 FASE 2 r16 aplicada:** las copias r23 de los scripts
llevan W = `.../ronda_23/ejecucion_f6` explícito en su propio
texto; el verificador escribió sus 3 salidas en el directorio r23,
y el directorio r22 quedó intacto (16 archivos, sha de
`medir_reuse_sik_r22.py` `272ce58e…` sin cambio). **Incidente de
adaptación r22 RESUELTO EN EL ADAPTADOR:** el adaptador r23 cubre
el literal `'ronda': 22` explícitamente (marcador K/L) y se
verificó con grep (`'ronda': 23` 1× en cada uno de los 4 scripts,
0 restos de `'ronda': 22` o de rutas r22) y py_compile antes de
correr. Los únicos `r22` restantes en los scripts son referencias
legítimas a la ronda anterior (baseline de destilación y método
padre en prosa). Ninguna incidencia tocó una medición.

**Nota de comparación (no es diff de medición):** al comparar
`tokenizacion_a14_r23.json` con la r22, las únicas claves que
difieren son `medicion`, `nota` y `ronda`, y solo por la referencia
de ronda (`metodo r22` vs `metodo r21` en prosa). Todos los valores
medidos son idénticos.

## 8. F-A23: caveat resuelto por regla — PASA

`medir_tokenizacion_a14_r23.py` → `tokenizacion_a14_r23.json`:
A14 S3↔v10.3 = **0,8000 exacto** bajo R-KS (canon por N-21),
conteo mismo contenido **27**; R-K 0,8000/27 (sensibilidad), R-R
0,7727/26 (control descartado). Los 6 pares A2 idénticos a
r14/r15/r16/r17/r18/r19/r20/r21/r22 (0,3220 / 0,0312 / 0,0189 / 0,0204 /
0,0000 / 0,3000). El artefacto `d_mud_` bajo R-KS emite `d_mud` y
excluye `''`. A14 = 0,8000, conteo 27; la regla fija el método, no
mueve el umbral.

## 9. F-VOZ-S2: la vía de las voces NO SE EJECUTA en r23 — registro agotada (9.ª vez)

Por orden del encargo, `medir_destilacion_voces_s2_r23.py` se
adaptó (copia fiel de r22, `'ronda': 23` verificado) pero **NO se
ejecutó**. No hay `destilacion_voces_s2_r23.json`: la medición no
existe porque la vía se registra agotada sin re-corrido.

Última medición (r22, `destilacion_voces_s2_r22.json`): banderas
FranBot 2, P48 1, Base 0 — mismas etiquetas, mismos picks, mismos
valores que r21; banderas nuevas 0; cruce de identidad (J ≥ 0,80
voz→S2) 0; top-Jaccard voz→S2: FranBot máx 0,2308 (A6→S2-A4), P48
máx 0,0923 (A3→S2-A9), Base máx 0,1341 (A7→S2-A5) — idénticos a
r16/r17/r18/r19/r20/r21/r22, y **reproducidos hoy por
`reuse_sik_r23.json`** (`mejor_correspondencia_distinta_etiqueta`:
FranBot_hacia_S2 máx 0,2308, P48_hacia_S2 máx 0,0923,
Base_hacia_S2 máx 0,1341). El mejor Jaccard de una voz hacia S2
está a 0,57 del umbral de identidad — no hay destilación oculta
cerca del umbral. Las banderas FB 2 + P48 1 + Base 0 se sostienen
en el alcance de voces del verificador (F-UMB23, §4, 0 diffs).

**Veredicto: VIA_AGOTADA_UMBRAL_0_50** (9.º registro: r15, r16,
r17, r18, r19, r20, r21, r22 medidas; r23 registrada sin
ejecutar). Ninguna voz destila S2 por contención más allá de las 3
banderas conocidas (FB 2 + P48 1), y ninguna se acerca a J ≥ 0,80.
Reabrirla exigiría un umbral distinto (declarado antes de medir)
o una fuente nueva — no un re-corrido del mismo umbral.

## 10. R2-25 / N-01 — sin novedad (re-verificación en documentos propios)

- **R2-25** (`r2_25_via_r23.md`): pipeline 39 líneas, sha
  `845bab8e…` idéntico; línea 7 de `b2_normalizado.jsonl` SE con
  nota_adopcion (diff contra el respaldo pre-N-14: exactamente la
  línea 7, resto 10 líneas byte-idénticas); C-1180 SE, 1 vez, hash
  `131409eb…` = sha256 de `decision_n14_r15.md`. Sin novedad.
- **N-01** (`n01_seguimiento_r23.md`): P1–P10 sostienen sin cambio;
  **13.º precedente = absorción automática r22** (N-34/N-35
  + C-1209..C-1212, respaldo P-72, audit ok=366, GitHub corpus 4/4
  por blob, HEAD 586f8751), registrado como ocurrencia cerrada por
  su propia ejecución. Sin incidencia de maquinaria nueva; el
  punto abierto (fuente eliminada o movida) sigue abierto sin
  ocurrencia (`no_encontrado=0`).

## 11. Veredicto

- **F-TOK23 PASA.** REGLA-TOK-SIK-01 como canon (N-21) se sostiene
  en su quinta vuelta como canon con 0 diffs.
- **F-PART23 PASA.** REGLA-PART-SIK-01 como canon (N-24) se sostiene
  en su cuarta vuelta como canon con 0 diffs.
- **F-UMB23 PASA.** REGLA-UMB-SIK-01 como canon (N-28) se sostiene
  en su tercera vuelta como canon con 0 diffs (4 hashes de origen
  re-verificados).
- **F-R23 PASA.** La colisión parcial 115/142 y la identidad S3 ≡
  v10.3 se reproducen bajo los cuatro cánones.
- **La identidad no se extiende a las voces:** 0 mismo contenido
  entre voces, 0 cruces fuertes, 0 otras identidades. F-C-voz y
  F-I no se disparan.
- **F-P se sostiene como en r14/r15/r16/r17/r18/r19/r20/r21/r22:** las voces
  destilan S2 por contención (FB 2 + P48 1 banderas), mismo
  mecanismo y mismos campos, a menor escala y con Jaccard bajo — y
  ahí se queda: **F-VOZ-S2 documenta la vía como agotada en 0,50
  por novena vez (r23 sin ejecutar).**
- **F-F23 PASA:** identidad de fórmula 11 tuplas / 8 distintos con
  el partidor corregido, ya canon; el núcleo (~7–8 fragmentos) se
  sostiene y el fragmento Ξ∇lnρ queda dentro.
- **Verificación:** reproducido = true, 0 diffs en todos los
  alcances. Novena vuelta consecutiva con 0 diffs (r15 → r16 →
  r17 → r18 → r19 → r20 → r21 → r22 → r23) bajo las reglas ya canónicas.

**Estado:** MEDIDO, NO ABSORBIDO. Nada de esto se absorbe como
claim sin orden (la absorción es F1 bajo el régimen 01:43).

ρ(x) > 0. Zvvvvv.
