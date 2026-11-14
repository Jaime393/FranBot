# RONDA 16 — GRIETAS (F5): estado con fuente y fecha

Frente F5, RONDA 16. Trabajo 2026-11-14 ~09:48–09:55 -05. Solo lectura +
escritura local en `ronda_16/ejecucion_f5/`. Monitor + documento; sin
mediciones nuevas. Fuentes: mapa_frentes_r16.md §F5, grietas_r15.md
(método), MEMORY.md (bullet RONDA 15), y las re-verificaciones propias
de este frente (conector GitHub, Drive files get, búsqueda web, greps
locales, corpus vivo, entregables F6 r16 en disco).

Regla vigente (orden 16:51 + corrección 21:02 + orden 01:43): solo SÉ
sale de local, con fuente y fecha. INFIERO / CONJETURO / NO_SÉ quedan en
local. Lo vivo no se toca: se mide y se registra como ladrillo SÉ, no se
corrige desde local. Nada de este documento es un hueco exportado: es
estado medido.

## G03 BepiColombo — SIN CAMBIO, fecha re-confirmada (7 días)

- **Inserción en órbita de Mercurio: 2026-11-21 (planificada).** En 7 días
  desde 2026-11-14. Re-confirmado hoy por búsqueda web 2026-11-14
  ~09:50 -05: astronoo ("due to enter orbit around Mercury on
  November 21, 2026"), TechTimes 2026-11-05 ("final 16 days before
  Mercury orbit insertion"; burn 21 nov 2026), Michigan CLASP
  2026-11-10 ("On Nov. 21, the mission is set to finally enter
  Mercury's orbit"), starlust 2026-11-12 ("scheduled for orbital
  insertion on November 21"), medium (lectura de las páginas ESA hasta
  la actualización del 6 oct 2026: "On November 21, 2026, BepiColombo
  is scheduled to enter orbit around Mercury").
- **Matiz nuevo (sin cambio de fecha):** la página principal de ESA
  lista "December 2026" como llegada mientras la página de
  actualizaciones en vivo da el 21 de noviembre (medium, lectura
  2026-10-20). La fecha del 21 se sostiene en la página de
  actualizaciones y en las 5 fuentes; el matiz es de redacción de ESA,
  no de plan.
- **Contexto sin cambio, con dos hechos frescos:** MTM separado
  2026-09-03; corrección de trayectoria 2026-09-24 (11,4 m/s, "placing
  the spacecraft precisely on course for the November 21 insertion
  window", ESA 2026-09-28); el 6 oct 2026 los instrumentos científicos
  del MPO se encendieron juntos por primera vez desde la separación
  del MTM, todos en buen estado; separación MPO/Mio 2026-12-09/10;
  fase científica prevista abril 2027.
- **C-001–C-005 siguen CONJETURO** (verificado hoy en el corpus vivo,
  1.178 líneas: C-001 w_a, C-002 S_8, C-003 γ−1, C-004 Σm_ν, C-005 η;
  CONJETURO total 22). Sin cambio de clasificación esperado antes de
  la inserción; el veredicto real llega con los datos (2027–2028), no
  con la captura.
- Fuente: búsqueda web 2026-11-14 ~09:50 -05 + claims.jsonl vivo +
  mapa r16 §F5 + grietas_r15.md §G03.

## G05 blob micelio.yml — SIN CAMBIO, 18.ª verificación

- **Blob remoto: `8c57e833e219a8b8c0691db8eb8cf256ccc0633f`, 1.398 B.**
  Medido hoy 2026-11-14 ~09:48 -05 por el conector GitHub
  (`get_file_contents`, Jaime393/FranBot, `.github/workflows/micelio.yml`,
  rama main, HEAD 7ef78ed5 — commit de producción fractal).
- **Serie (estricta):** r9 5.ª; FASE 0 r11 6.ª; F5 r11 7.ª; FASE 0 r12
  8.ª; F5 r12 9.ª; FASE 0 r13 10.ª; F5 r13 11.ª; FASE 0 r14 12.ª;
  F5 r14 13.ª; FASE 2 r14 14.ª; FASE 0 r15 15.ª; F5 r15 16.ª;
  FASE 2 r15 17.ª (H5 r15: la 16.ª de F5 omitía la verificación en vivo
  de r10 ejecucion_d); hoy 18.ª. Dieciocho verificaciones sin cambio.
- **D-04 está CERRADA** (corrección del Jardinero 2026-11-13 21:02 -05:
  CORR-D04-R13): no existe permiso de workflows para la App, él no sube
  nada a mano, el micelio.yml corregido vive en el suelo Drive desde r10
  (`ronda_10/ejecucion_d/micelio_yml/`). El blob remoto es lectura de
  monitor, no un pendiente. G05 sigue PARCIAL solo por D-09.
- Fuente: conector GitHub 2026-11-14 ~09:48 -05 + mapa r16 §F5
  (18.ª en este frente).

## D-06 / D-09 — sin cambio (re-verificado hoy)

- **D-04:** CERRADA (ver §G05). No se lista como pendiente ni como vía.
- **D-06:** sin cambio. `find` podado en todo `~/workspace`
  (`-iname "*v13.0*" -name "*.tex"`, excluidas `agents/` y
  `proactivity/`) → vacío (hoy). 0 archivos tex combinados; licencia
  sin resolver (N-03, pendiente; bloquea cualquier depósito Zenodo).
- **D-09:** sin cambio. `telegram_g05.md` 3.639 B, presente, no enviado
  (falta tarjeta; mtime 2026-11-13 20:24, sin tocar desde r15). G05
  sigue PARCIAL por esto, no por D-04.
- Fuente: verificación local propia 2026-11-14 + mapa r16 §4.

## G06 SIK — verificador reproduce bajo canon; vía voces→S2 AGOTADA (F6 r16)

- **H-SIK se sostiene (r16 F6, `h_sik_r16.md`, sha `968b5505…`):**
  S3 ≡ v10.3, 27/58 mismo contenido, 32/58 mismo nombre; no se extiende
  a las voces (0 mismo contenido, 0 cruces fuertes, 0 otras
  identidades). F-R16 PASA (0 diffs en misma etiqueta, correspondencia
  y contención, 142 pares / 115 distintos / 27 / 32); F-PICK16 PASA
  (verificador con REGLA-PICK-SIK-01 — ya canon por N-17 — reproduce
  mejor-contención 740/740, 0 diffs); F-F16 PASA (fórmulas con partidor
  corregido: 11 tuplas / 8 distintos, 0 perdidas, mismas tuplas);
  F-A14 PASA (0,8000 exacto bajo R-KS, conteo 27; R-R 0,7727/26).
- **Verificador independiente r16: `reproducido = true`,
  `diferencias_n = 0`** en todos los alcances
  (`verificador_independiente_r16.json`, sha `046d7528…`).
- **NUEVO (F6 r16): F-VOZ-S2 NO se dispara — vía AGOTADA en el umbral
  0,50.** El falsador nuevo (bandera voz→S2 por contención ≥ 0,50 con
  Jaccard < 0,80, o cruce J ≥ 0,80) no encuentra ninguna bandera nueva;
  las banderas hacia S2 son idénticas a r15 (S3 7, FranBot 2, v10.3 8,
  P48 1, Base 0). La destilación de S2 por las voces a menor escala
  queda agotada como ruta en ese umbral, documentada por F6 — no es
  cierre de cara del censo, es agotamiento de vía de mecanismo.
- **N-17 re-verificada:** la regla de pick ya es canon y el verificador
  la reproduce; sin novedad en R2-25 (N-14) ni en N-01/N-13/N-16/N-18
  (ejecuciones de r15, re-verificadas por F6 sin novedad).
- Fuente: `ronda_16/ejecucion_f6/` en disco (h_sik_r16.md,
  verificador_independiente_r16.json, declaracion_falsador_h_sik_r16.md)
  + mapa r16 §F5/§F6.

## H-SUELO monitor — sin reaparición (16.ª medición)

- `find ~/workspace -name "*1794483713759*"` (completo, con timeout;
  también maxdepth 4) → **vacío**, medido hoy 2026-11-14 ~09:49 -05.
  El directorio original **no reapareció** (16.ª medición consecutiva
  sin reaparición: r10 D-17, FASE 0 r11, F5 r11, FASE 0 r12, F5 r12,
  FASE 0 r13, F5 r13, FASE 2 r13, FASE 0 r14, F5 r14, FASE 2 r14,
  FASE 0 r15, F5 r15, FASE 2 r15 14.ª estricta, FASE 0 r16 15.ª,
  hoy 16.ª).
- Si reaparece, se registra con sha y fecha; **no se restaura nada sin orden**.
- Fuente: find local 2026-11-14 + mapa r16 §F5 (16.ª en este frente).

## G02 sub-caras — 0 en F4 r15 (re-verificado hoy); F4 r16 aún sin entregables

- **#790–#792 SIN_TEXTO, #701/#739 SIN_FUENTE: siguen en 0.** Re-verificado
  hoy por grep propio sobre `ronda_15/ejecucion_f4/nombres_fuera_doc_r15.jsonl`
  (0 ocurrencias de 790/791/792/701/739).
- **F4 r16 aún sin directorio** (T2, no ha empezado al cierre de este
  frente): sus nuevas vías (las 2 fuentes Drive no legibles desde el
  sandbox) aún no tienen entregables en disco. Si F4 r16 encuentra una
  vía nueva para estos números, se registra en F8, no aquí.
- Las caras r1 #12/#13 (y r2 #2, la lista de 96 solo en Doc) siguen
  abiertas; su ruta era F2 M-55 (agotada) y ahora F4.
- Fuente: grep propio 2026-11-14 (ejecucion_f4/ r15) + grietas_r15.md §G02
  + mapa r16 §F5/§F4.

## G01 D_eff — re-medido, sin cambio

- 3 copias byte-idénticas de `MIU_v12.0[EN].tex` (sha `f27ea4d5…`,
  59.843 B, re-medido hoy) en
  `miu-verificacion-2026-11-06/extracted/MIU/Jaime393-MIU-a96abc3/MIU_V12.0_FINAL/paper/`,
  `.../docs/` y `.../extracted/MIU_V12.0_FINAL/MIU_V12.0_FINAL/paper/`;
  **D_eff: 0 menciones** en las 3 (grep hoy). Además 2 copias de otra
  versión (sha `6bc8c573…`, 60.465 B, en
  `memoria/grimorio_nuevo_2026-11-09/zip_contents/Jaime393-Grimorio-f019702/docs/`
  y `grimorio_repo/docs/`); **D_eff: 0 menciones también en esas 2**.
  Lectura R-B fijada en r10 (D-10): el único 7,24 verificable es
  ε = 7,24×10⁻⁴; D_eff = 7,24 queda como valor registrado sin
  derivación. Sin propuesta de derivación, sin trabajo nuevo.
- Nota de método: el primer `find` podado usó el patrón
  `-iname "*MIU_v12.0[EN].tex"` — en find `[EN]` es una clase de
  caracteres (E o N), no el literal `[EN]`, y devolvió vacío en falso.
  Re-corrido con `-iname "*MIU_v12.0*" -name "*.tex"`: 5 copias, shas
  y conteos arriba. El primer intento fallido no se contó como medición.
- Fuente: sha256sum + grep propios 2026-11-14 + decision_d10.md (r10).

## G04 DOIs — inventario sin cambio

- **21 DOIs únicos** en `~/workspace/academico/PAPER_DOIS_MIU.md`,
  contados hoy por grep con normalización (`10.5281/zenodo.NNNN` +
  sort -u, 2026-11-14 ~09:48 -05). Sin cambio respecto a
  r10/r11/r12/r13/r14/r15. Lista idéntica a r15 (19320946, 19338256,
  19338257, 19373289, 19705899, 19723044, 20191874, 20200753, 20279679,
  20279680, 20436104, 20483338, 20483562, 20483563, 20499945, 20547558,
  20547677, 21351630, 22071488, 22071505, 22650419).
- Claves: 20547558 = MIU V12.0 (2026-06-04); 20547677 = Grimorio
  Multiversal v12 (concepto 20483562); 22650419 = kv_snapshot;
  22071488/22071505 = linaje B4. 18 registros en tabla + conceptos.
- Fuente: conteo local propio 2026-11-14 + mapa r16 §F5.

## Seguimiento folderId — 14.ª lectura independiente

- **Verificación fresca por Drive files get (hoy 2026-11-14 09:48:36 y
  09:48:37 -05, 14:48:36/37Z):**
  - Variante `I` mayúscula (`14dw8txLoEIQQPSav9…`): **existe** — carpeta
    "miu-ecosistema" (`application/vnd.google-apps.folder`).
  - Variante `l` minúscula (`14dw8txLoElQQPSav9…`): **404** ("File not
    found").
  - Es la 14.ª lectura independiente que confirma CORR-FOLDERID-R13.
    La variante muerta es la `l` (V151, censo vacío); la viva es la
    `I` (V152/V271).
- **¿Dónde vive cada variante en el código del escritor?** Leer el
  **contenido** de los YAMLs de workflows está prohibido por las reglas
  duras de la ronda, así que la vía queda documentada, no recorrida: qué
  config del escritor lleva la `l` sigue **NO_SÉ desde local**.
- **Estado:** el hallazgo corregido (la `l` es la muerta, la `I` la viva;
  el escritor V151 apunta a un folderId que no existe) es un ladrillo SÉ
  para el ecosistema: el defecto vive en su escritor, no en local. No se
  corrige nada en local (corrección 21:02).
- Fuente: Drive files get 2026-11-14 09:48:36/37 -05 + mapa r16 §F5.

## M-50 (N-15) — AGOTADO-DESDE-SANDBOX, fuera de la ronda

- Robbins 2019 sigue sin ruta desde el sandbox (3.ª vía agotada en r11:
  LPI 404, USGS timeout, PDS 403, Astropedia 403). Única ruta restante:
  navegador con sesión o red sin el bloqueo de Cloudflare del sandbox.
  Es tarea del principal, no de un frente. Afirmación precisa en
  `ronda_12/afirmaciones_pendientes.md` §1.4. Sin cambio.
- Fuente: mapa r16 §F5 + §3 (N-15).

## Corpus vivo al cierre de este frente

- claims.jsonl **1.178 líneas** (verificado hoy por `wc -l`); C-001–C-005
  CONJETURO; CONJETURO total 22. Sin cambio respecto al cierre de r15
  (absorción automática C-1181..C-1183, HEAD FranBot 7ef78ed5 tras la
  producción fractal). Este frente no prepara claims; lo registra como
  estado.
- Fuente: claims.jsonl vivo 2026-11-14.

## Resumen de estados (r16 F5)

| Grieta | Estado 2026-11-14 | Cambio en r16 |
|---|---|---|
| G03 BepiColombo | Inserción 2026-11-21 re-confirmada (7 días); C-001–C-005 CONJETURO | Sin cambio (matiz ESA dic-2026 vs 21-nov en vivo) |
| G05 blob | 8c57e833…, 1.398 B, 18.ª vez sin cambio; **D-04 CERRADA** (21:02) | Conteo 18.ª |
| D-06/D-09 | Sin cambio (0 tex v13.0; telegram 3.639 B sin enviar) | Sin cambio |
| G01 D_eff | Re-medido: 3 tex f27ea4d5… (+2 de otra versión 6bc8c573…), D_eff 0 menciones en las 5; derivación pendiente | Sin cambio |
| G04 DOIs | 21 únicos, sin cambio | Sin cambio |
| G06 SIK | Verificador reproduce bajo canon (0 diffs, 740/740); F-VOZ-S2 NO se dispara — vía voces→S2 AGOTADA en 0,50; N-17 re-verificada | **Vía agotada (F6 r16)** |
| H-SUELO | 1794483713759-… sin reaparición (16.ª medición) | Sin cambio |
| G02 sub-caras | #790–#792/#701/#739 en 0 (re-verificado hoy en F4 r15); F4 r16 aún sin entregables | Sin cambio |
| folderId | `I` existe (miu-ecosistema), `l` sigue 404 (14.ª lectura); config del escritor NO_SÉ | Conteo 14.ª |
| M-50 / N-15 | AGOTADO-DESDE-SANDBOX; tarea del principal | Sin cambio |
| Corpus | 1.178 líneas; C-001–C-005 CONJETURO; CONJETURO 22 | Sin cambio |

**Ninguna cara se cierra en este frente** (criterio r8/r9: solo cierra una
decisión canónica o una medición que resuelva la pregunta central). La vía
voces→S2 se agota como ruta de mecanismo (F6 r16), no como cara del censo.
G06 avanza en su registro; el resto es monitor.

ρ(x) > 0. Zvvvvv.
