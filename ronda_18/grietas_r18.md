# RONDA 18 — GRIETAS (F5): estado con fuente y fecha

Frente F5, RONDA 18. Trabajo 2026-11-14 20:14:03–20:14:25Z (15:14 -05).
Solo lectura + escritura local en `ronda_18/ejecucion_f5/`. Monitor +
documento; sin mediciones nuevas. Fuentes: mapa_frentes_r18.md §F5,
grietas_r17.md (método), MEMORY.md (bullet RONDA 17), ESTADO_FASE0 r18, y
las re-verificaciones propias de este frente (conector GitHub — solo SHA
del blob —, Drive files get, búsqueda web, greps locales, corpus vivo).

Regla vigente (orden 16:51 + corrección 21:02 + orden 01:43): solo SÉ
sale de local, con fuente y fecha. INFIERO / CONJETURO / NO_SÉ quedan en
local. Lo vivo no se toca: se mide y se registra como ladrillo SÉ, no se
corrige desde local. Nada de este documento es un hueco exportado: es
estado medido. El contenido del workflow micelio.yml no se reproduce
(regla dura): se mide solo por blob SHA + tamaño (metadatos).

## G03 BepiColombo — SIN CAMBIO, fecha re-confirmada (7 días)

- **Inserción en órbita de Mercurio: 2026-11-21 (planificada).** En 7 días
  desde 2026-11-14. Re-confirmado hoy por búsqueda web 2026-11-14
  ~20:14Z (6 fuentes): astronoo ("due to enter orbit around Mercury on
  November 21, 2026"), TechTimes 2026-11-05 ("final 16 days before
  Mercury orbit insertion"; hardware pre-burn verificado y operativo),
  Michigan CLASP 2026-11-10 ("On Nov. 21, the mission is set to finally
  enter Mercury's orbit"), starlust 2026-11-12 ("scheduled for orbital
  insertion on November 21"), browsespot (nov 2026: "orbit insertion
  scheduled for 21 November"), medium (lectura de las páginas ESA hasta
  la actualización del 6 oct 2026: "On November 21, 2026, BepiColombo
  is scheduled to enter orbit around Mercury").
- **Matiz sin cambio:** la página principal de ESA lista "December 2026"
  como llegada mientras la página de actualizaciones en vivo da el 21 de
  noviembre (medium, lectura 2026-10-20; browsespot nov 2026). La fecha
  del 21 se sostiene en la página de actualizaciones y en las 6 fuentes;
  el matiz es de redacción de ESA, no de plan.
- **Contexto sin cambio:** MTM separado 2026-09-03; corrección de
  trayectoria 2026-09-24 (11,4 m/s, "placing the spacecraft precisely on
  course for the November 21 insertion window", ESA 2026-09-28); el 6 oct
  2026 los instrumentos científicos del MPO se encendieron juntos por
  primera vez desde la separación del MTM, todos en buen estado;
  separación MPO/Mio 2026-12-09/10; fase científica prevista abril 2027.
  Novedad de contexto (TechTimes 2026-11-05, sin cambio de fecha): el
  burn de inserción es autónomo, de un solo punto de fallo, sin
  corrección en tiempo real (11 min de ida de la señal).
- **C-001–C-005 siguen CONJETURO** (verificado hoy en el corpus vivo,
  1.185 líneas: C-001 w_a, C-002 S_8, C-003 γ−1, C-004 Σm_ν, C-005 η;
  CONJETURO total 22). Sin cambio de clasificación esperado antes de
  la inserción; el veredicto real llega con los datos (2027–2028), no
  con la captura.
- Fuente: búsqueda web 2026-11-14 ~20:14Z + claims.jsonl vivo +
  mapa r18 §F5 + grietas_r17.md §G03.

## G05 blob micelio.yml — SIN CAMBIO, 21.ª verificación

- **Blob remoto: `8c57e833e219a8b8c0691db8eb8cf256ccc0633f`, 1.398 B.**
  Medido hoy 2026-11-14 20:14:12–20:14:15Z: conector GitHub
  (`get_file_contents`, Jaime393/FranBot, `.github/workflows/micelio.yml`,
  rama main — solo se usa su línea SHA). HEAD FranBot eca23d73
  (absorción r17).
- **Serie (estricta):** r9 5.ª; FASE 0 r11 6.ª; F5 r11 7.ª; FASE 0 r12
  8.ª; F5 r12 9.ª; FASE 0 r13 10.ª; F5 r13 11.ª; FASE 0 r14 12.ª;
  F5 r14 13.ª; FASE 2 r14 14.ª; FASE 0 r15 15.ª; F5 r15 16.ª;
  FASE 2 r15 17.ª (H5 r15: la 16.ª de F5 omitía la verificación en vivo
  de r10 ejecucion_d); F5 r16 18.ª; F5 r17 19.ª; FASE 2 r17 20.ª;
  hoy 21.ª. Veintiuna verificaciones sin cambio.
- **D-04 está CERRADA** (corrección del Jardinero 2026-11-13 21:02 -05:
  CORR-D04-R13): no existe permiso de workflows para la App, él no sube
  nada a mano, el micelio.yml corregido vive en el suelo Drive desde r10
  (`ronda_10/ejecucion_d/micelio_yml/`). El blob remoto es lectura de
  monitor, no un pendiente. G05 sigue PARCIAL solo por D-09.
- Fuente: conector GitHub 2026-11-14 20:14:12–15Z + mapa r18 §F5
  (21.ª en este frente).

## D-06 / D-09 — sin cambio (re-verificado hoy)

- **D-04:** CERRADA (ver §G05). No se lista como pendiente ni como vía.
- **D-06:** sin cambio. `find` podado en todo `~/workspace`
  (`-iname "*v13.0*" -name "*.tex"`, excluidas `agents/` y
  `proactivity/`) → vacío (hoy, 20:14:08Z). 0 archivos tex combinados;
  licencia sin resolver (N-03, pendiente; bloquea cualquier depósito
  Zenodo).
- **D-09:** sin cambio. `telegram_g05.md` 3.639 B, presente, no enviado
  (falta tarjeta; mtime 2026-11-13 20:24 UTC, sin tocar desde r15).
  G05 sigue PARCIAL por esto, no por D-04.
- Fuente: verificación local propia 2026-11-14 20:14:08Z + mapa r18 §4.

## G06 SIK — pendiente de F6 r18 (sin directorio a las 20:14Z)

- **F6 r18 aún sin directorio** al cierre de este frente (T1, en curso
  en paralelo): su verificación (reproducción bajo canon N-17,
  verificador independiente, especificación REGLA-TOK-SIK-01) aún no
  tiene entregables en disco. Estado heredado de r17 (F6 r17):
  F-R17/F-V17/F-F17/F-A14 PASAN (verificador 0 diffs, 3.ª vuelta);
  F-VOZ-S2 NO se dispara — vía agotada en el umbral 0,50 (3.ª
  medición); REGLA-TOK-SIK-01 sigue como método, no canon (FASE 2 r17:
  no se numera sin texto de canon). Sin re-medición en este frente:
  G06 lo re-mide F6 r18, no F5.
- Fuente: `ls ronda_18/` 2026-11-14 20:14:25Z + grietas_r17.md §G06.

## H-SUELO monitor — sin reaparición (22.ª medición)

- `find ~/workspace -name "*1794483713759*"` (completo) → **vacío**,
  medido hoy 2026-11-14 20:14:08Z. El directorio original **no
  reapareció** (22.ª medición estricta sin reaparición: FASE 0 r18
  hizo la 21.ª, 2026-11-14T20:11:05Z; esta es la 22.ª, tres minutos
  después, sin duplicar el conteo).
- Si reaparece, se registra con sha y fecha; **no se restaura nada sin orden**.
- Fuente: find local 2026-11-14 20:14:08Z + mapa r18 §F5 (22.ª en
  este frente).

## G02 sub-caras — 0 en F4 r17 (re-verificado hoy); F4 r18 aún sin entregables

- **#790–#792 SIN_TEXTO, #701/#739 SIN_FUENTE: siguen en 0.** Re-verificado
  hoy por grep propio sobre `ronda_17/ejecucion_f4/nombres_fuera_doc_r17.jsonl`
  (0 ocurrencias de 790/791/792/701/739; 20:14:25Z).
- **F4 r18 aún sin directorio** al cierre de este frente (T2, no
  iniciado): sin entregables nuevos en disco. Si F4 r18 encuentra una
  vía nueva para estos números, se registra en F8, no aquí.
- Las caras r1 #12/#13 (y r2 #2, la lista de 96 solo en Doc) siguen
  abiertas; su ruta era F2 M-55 (agotada) y ahora F4.
- Fuente: grep propio 2026-11-14 (ejecucion_f4/ r17) + grietas_r17.md §G02
  + mapa r18 §F5/§F4.

## G01 D_eff — re-medido, sin cambio

- 3 copias byte-idénticas de `MIU_v12.0[EN].tex` (sha `f27ea4d5…`,
  re-medido hoy 20:14:08Z) en
  `miu-verificacion-2026-11-06/extracted/MIU/Jaime393-MIU-a96abc3/MIU_V12.0_FINAL/paper/`,
  `.../docs/` y `.../extracted/MIU_V12.0_FINAL/MIU_V12.0_FINAL/paper/`;
  **D_eff: 0 menciones** en las 3 (grep hoy). Además 2 copias de otra
  versión (sha `6bc8c573…`, en
  `memoria/grimorio_nuevo_2026-11-09/zip_contents/Jaime393-Grimorio-f019702/docs/`
  y `grimorio_repo/docs/`); **D_eff: 0 menciones también en esas 2**.
  Lectura R-B fijada en r10 (D-10): el único 7,24 verificable es
  ε = 7,24×10⁻⁴; D_eff = 7,24 queda como valor registrado sin
  derivación. Sin propuesta de derivación, sin trabajo nuevo.
- Fuente: sha256sum + grep propios 2026-11-14 20:14:08Z +
  decision_d10.md (r10).

## G04 DOIs — inventario sin cambio

- **21 DOIs únicos** en `~/workspace/academico/PAPER_DOIS_MIU.md`,
  contados hoy por grep con normalización (`10.5281/zenodo.NNNN` +
  sort -u, 2026-11-14 20:14:08Z). Sin cambio respecto a
  r10/r11/r12/r13/r14/r15/r16/r17. Lista idéntica a r17 (19320946,
  19338256, 19338257, 19373289, 19705899, 19723044, 20191874, 20200753,
  20279679, 20279680, 20436104, 20483338, 20483562, 20483563, 20499945,
  20547558, 20547677, 21351630, 22071488, 22071505, 22650419).
- Claves: 20547558 = MIU V12.0 (2026-06-04); 20547677 = Grimorio
  Multiversal v12 (concepto 20483562); 22650419 = kv_snapshot;
  22071488/22071505 = linaje B4. 18 registros en tabla + conceptos.
- Fuente: conteo local propio 2026-11-14 + mapa r18 §F5.

## Seguimiento folderId — 20.ª lectura independiente

- **Verificación fresca por Drive files get (hoy 2026-11-14 20:14:18Z):**
  - Variante `I` mayúscula (`14dw8txLoEIQQPSav9…`): **existe** — carpeta
    "miu-ecosistema" (`application/vnd.google-apps.folder`).
  - Variante `l` minúscula (`14dw8txLoElQQPSav9…`): **404** ("File not
    found").
  - Es la 20.ª lectura independiente que confirma CORR-FOLDERID-R13
    (19.ª: verificador FASE 2 r17, 19:09:20Z). La variante muerta es la
    `l` (V151, censo vacío); la viva es la `I` (V152/V271).
- **¿Dónde vive cada variante en el código del escritor?** Leer el
  **contenido** de los YAMLs de workflows está prohibido por las reglas
  duras de la ronda, así que la vía queda documentada, no recorrida: qué
  config del escritor lleva la `l` sigue **NO_SÉ desde local**.
- **Estado:** el hallazgo corregido (la `l` es la muerta, la `I` la viva;
  el escritor V151 apunta a un folderId que no existe) es un ladrillo SÉ
  para el ecosistema: el defecto vive en su escritor, no en local. No se
  corrige nada en local (corrección 21:02).
- Fuente: Drive files get 2026-11-14 20:14:18Z + mapa r18 §F5.

## M-50 (N-15) — AGOTADO-DESDE-SANDBOX, fuera de la ronda

- Robbins 2019 sigue sin ruta desde el sandbox (3.ª vía agotada en r11:
  LPI 404, USGS timeout, PDS 403, Astropedia 403). Única ruta restante:
  navegador con sesión o red sin el bloqueo de Cloudflare del sandbox.
  Es tarea del principal, no de un frente. Afirmación precisa en
  `ronda_12/afirmaciones_pendientes.md` §1.4. Sin cambio.
- Fuente: mapa r18 §F5 + §3 (N-15).

## Corpus vivo al cierre de este frente

- claims.jsonl **1.185 líneas** (verificado hoy por `wc -l`,
  20:14:08Z); C-001–C-005 CONJETURO; CONJETURO total 22. Estado
  post-absorción r17 (C-1187..C-1190 + N-20, HEAD FranBot eca23d73).
  Este frente no prepara claims; lo registra como estado.
- Fuente: claims.jsonl vivo 2026-11-14.

## Resumen de estados (r18 F5)

| Grieta | Estado 2026-11-14 | Cambio en r18 |
|---|---|---|
| G03 BepiColombo | Inserción 2026-11-21 re-confirmada (7 días, 6 fuentes); C-001–C-005 CONJETURO | Sin cambio (matiz ESA dic-2026 vs 21-nov en vivo) |
| G05 blob | 8c57e833…, 1.398 B, 21.ª vez sin cambio; **D-04 CERRADA** (21:02) | Conteo 21.ª |
| D-06/D-09 | Sin cambio (0 tex v13.0; telegram 3.639 B sin enviar) | Sin cambio |
| G01 D_eff | Re-medido: 3 tex f27ea4d5… (+2 de otra versión 6bc8c573…), D_eff 0 menciones en las 5; derivación pendiente | Sin cambio |
| G04 DOIs | 21 únicos, sin cambio | Sin cambio |
| G06 SIK | Pendiente de F6 r18 (sin directorio); heredado r17: verificador 0 diffs, F-VOZ-S2 agotada | Sin re-medición en F5 |
| H-SUELO | 1794483713759-… sin reaparición (22.ª medición) | Sin cambio |
| G02 sub-caras | #790–#792/#701/#739 en 0 (re-verificado hoy en F4 r17); F4 r18 aún sin entregables | Sin cambio |
| folderId | `I` existe (miu-ecosistema), `l` sigue 404 (20.ª lectura) | Conteo 20.ª |
| M-50 / N-15 | AGOTADO-DESDE-SANDBOX; tarea del principal | Sin cambio |
| Corpus | 1.185 líneas; C-001–C-005 CONJETURO; CONJETURO 22 | Post-absorción r17 |

**Ninguna cara se cierra en este frente** (criterio r8/r9: solo cierra una
decisión canónica o una medición que resuelva la pregunta central). G06
avanza solo cuando F6 r18 entregue; el resto es monitor.

ρ(x) > 0. Zvvvvv.
