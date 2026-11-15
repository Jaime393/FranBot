# RONDA 21 — GRIETAS (F5): estado con fuente y fecha

Frente F5, RONDA 21. Trabajo 2026-11-15 19:32:29–19:33:34Z (14:32–14:33 -05).
Solo lectura + escritura local en `ronda_21/ejecucion_f5/`. Monitor +
documento; sin mediciones nuevas. Fuentes: mapa_frentes_r21.md §F5,
grietas_r20.md (método), ESTADO_FASE0 r21, y las re-verificaciones propias
de este frente (conector GitHub — solo SHA del blob —, Drive files get,
búsqueda web, greps locales, corpus vivo).

Regla vigente (orden 16:51 + corrección 21:02 + orden 01:43 + cierre de
pendientes 2026-11-15 ~14:24 -05): solo SÉ sale de local, con fuente y
fecha. INFIERO / CONJETURO / NO_SÉ quedan en local. Lo vivo no se toca:
se mide y se registra como ladrillo SÉ, no se corrige desde local. Nada
de este documento es un hueco exportado: es estado medido. El contenido
del workflow micelio.yml no se reproduce (regla dura): se mide solo por
blob SHA + tamaño (metadatos). **Regla nueva del cierre de pendientes
(2026-11-15 ~14:24 -05, palabras del Jardinero): un pendiente que no es
accionable ni posible con las condiciones actuales es solo ruido — se
descarta; se escala por donde sí hay ladrillos.** No se preparan
pendientes que dependan de aprobación para trabajo que falta (lección
D-06); una carencia local no se exporta como hueco del ecosistema
(lección N-15).

Ordinales heredados de FASE 0 r21 (2026-11-15T19:28:28–44Z): H-SUELO
30.ª, G05 29.ª, folderId 31.ª. Las lecturas de este frente son las
siguientes en orden cronológico: H-SUELO 31.ª (19:32:29–31Z), G05 30.ª
(19:32:53–55Z), folderId 32.ª (19:32:53–54Z).

## G03 BepiColombo — SIN CAMBIO, fecha re-confirmada (6 días)

- **Inserción en órbita de Mercurio: 2026-11-21 (planificada).** En 6 días
  desde 2026-11-15. Re-confirmado hoy por búsqueda web 2026-11-15
  ~19:33Z (8 fuentes frescas): happenings-now (crawl hace 1 día:
  "ESA and Japan's JAXA have pencilled in November 21 2026 for the
  combined spacecraft to enter orbit"), U Michigan CLASP 2026-11-10
  ("On Nov. 21, the mission is set to finally enter Mercury's orbit"),
  starlust 2026-11-12 ("scheduled for orbital insertion on November
  21"), nanowerk 2026-11-11 ("scheduled to enter Mercury's orbit on
  Nov. 21"), daltondaily / Space.com hace 19 h ("due to enter orbit
  around Mercury on November 21"), medium (lectura de las páginas ESA
  hasta la actualización del 6 oct 2026: "On November 21, 2026,
  BepiColombo is scheduled to enter orbit around Mercury"), browsespot
  nov 2026 ("orbit insertion scheduled for 21 November"), ESA timeline
  ("MPO+Mio enter Mercury orbit: 21 November 2026").
- **Matiz sin cambio:** la página principal de ESA lista "December 2026"
  como llegada mientras la página de actualizaciones en vivo da el 21 de
  noviembre (medium, lectura 2026-10-20; browsespot nov 2026; skyflux
  2026-10-26). La fecha del 21 se sostiene en la página de
  actualizaciones, en el timeline de ESA y en las 8 fuentes; el matiz es
  de redacción de ESA, no de plan.
- **Contexto sin cambio:** MTM separado 2026-09-03; corrección de
  trayectoria 2026-09-24 (11,4 m/s, "placing the spacecraft precisely on
  course for the November 21 insertion window", ESA 2026-09-28); el 6 oct
  2026 los instrumentos científicos del MPO se encendieron juntos por
  primera vez desde la separación del MTM, todos en buen estado;
  separación MPO/Mio 2026-12-09/10; eyección del sunshield MOSIF
  2026-12-16; fase científica prevista 6 abril 2027 (ESA timeline).
  Burn de inserción autónomo, de un solo punto de fallo, sin corrección
  en tiempo real (11 min de ida de la señal).
- **C-001–C-005 siguen CONJETURO** (verificado en el corpus vivo,
  1.197 líneas al cierre de este frente; CONJETURO total 22). Sin cambio
  de clasificación esperado antes de la inserción; el veredicto real
  llega con los datos (2027–2028), no con la captura.
- Fuente: búsqueda web 2026-11-15 ~19:33Z + claims.jsonl vivo +
  mapa r21 §F5 + grietas_r20.md §G03.

## G05 blob micelio.yml — SIN CAMBIO, 30.ª verificación

- **Blob remoto: `8c57e833e219a8b8c0691db8eb8cf256ccc0633f`, 1.398 B.**
  Medido hoy 2026-11-15 19:32:53–19:32:55Z: conector GitHub
  (`get_file_contents`, Jaime393/FranBot, `.github/workflows/micelio.yml`,
  rama main — solo se usa su línea SHA). HEAD FranBot 95f815f7
  (absorción r20).
- **Serie (estricta):** r9 5.ª; FASE 0 r11 6.ª; F5 r11 7.ª; FASE 0 r12
  8.ª; F5 r12 9.ª; FASE 0 r13 10.ª; F5 r13 11.ª; FASE 0 r14 12.ª;
  F5 r14 13.ª; FASE 2 r14 14.ª; FASE 0 r15 15.ª; F5 r15 16.ª;
  FASE 2 r15 17.ª (H5 r15: la 16.ª de F5 omitía la verificación en vivo
  de r10 ejecucion_d); F5 r16 18.ª; F5 r17 19.ª; FASE 2 r17 20.ª;
  F5 r18 21.ª; FASE 2 r18 22.ª; FASE 0 r19 23.ª (23:31:42Z);
  F5 r19 24.ª (23:35:12Z); FASE 2 r19 25.ª (~23:55Z); FASE 0 r20
  26.ª (06:59:43Z); F5 r20 27.ª (07:05:02Z); FASE 2 r20 28.ª (~08:13Z);
  FASE 0 r21 29.ª (19:29:30Z); hoy 30.ª. Treinta verificaciones sin cambio.
- **D-04 está CERRADA** (corrección del Jardinero 2026-11-13 21:02 -05:
  CORR-D04-R13): no existe permiso de workflows para la App, él no sube
  nada a mano, el micelio.yml corregido vive en el suelo Drive desde r10
  (`ronda_10/ejecucion_d/micelio_yml/`). El blob remoto es lectura de
  monitor, no un pendiente. G05 sigue PARCIAL como cara solo por D-09
  (la cadena bot → chat nunca se probó), pero D-09 ya no espera tarjeta
  suya (ver §D-06/D-09): es trabajo del enjambre/global.
- Fuente: conector GitHub 2026-11-15 19:32:53–55Z + mapa r21 §F5
  (30.ª en este frente).

## D-06 / D-09 — CERRADAS como pendientes suyos (orden 2026-11-15 ~14:24 -05)

- **D-04:** CERRADA (ver §G05). No se lista como pendiente ni como vía.
- **D-06:** CERRADA como pendiente de aprobación por orden directa del
  Jardinero (2026-11-15 ~14:24 -05): DESCARTABLE como está escrita — no
  falta aprobación, falta TRABAJO (el combinado v13.0 no existe como
  archivo único). Re-verificado hoy: `find` podado en todo `~/workspace`
  (`-iname "*v13.0*" -name "*.tex"`, excluidas `agents/` y
  `proactivity/`) → vacío (hoy, 19:32:29Z). 0 archivos tex combinados.
  Queda como carencia de trabajo, no como pendiente de aprobación; no se
  reabre. Licencia (N-03) tampoco espera su palabra: la autorización es
  externa y emerge; si alguien la pide, otro nodo responde.
- **D-09:** CERRADA como pendiente suya por la misma orden: la prueba G05
  es trabajo y dominio del enjambre/global; los nodos no ven ni la
  décima parte ni pueden hacer login. Re-verificado hoy: `telegram_g05.md`
  3.639 B, presente, no enviado (sha256 `32999ef8…`, mtime 2026-11-13
  20:24:12Z, sin tocar desde r15). G05 sigue PARCIAL como cara, no como
  pendiente: la cadena bot → chat sigue sin probarse de extremo a
  extremo, y la prueba no espera tarjeta suya.
- **Registro al cierre de este frente:** 0 pendientes con afirmación +
  46 aplicadas + 8 cerradas (D-04 + las 7 del cierre 2026-11-15) + 5 que
  no necesitan orden (`afirmaciones_pendientes.md`, sha `20d0f8ac…`,
  §35). Los 2 archivos de temas nuevos están en el suelo Drive
  (MIU_TEJIDO_2026-11-12): TEMAS_MIU_NUEVOS.md 18.000 B ID
  `10UJV89L39zo-9UjH_gsLmOB6-oKx3yGA`; DIOSES_DEVORADOR_NUEVOS.md
  9.095 B ID `1tbrtumfpa3Jqo-XAiqieTV6cVMhUbTcZ`.
- Fuente: orden 2026-11-15 ~14:24 -05 + verificación local propia
  2026-11-15 19:32:29Z + mapa r21 §F5.

## G06 SIK — pendiente de F6 r21 (directorio vacío a las 19:32Z)

- **F6 r21 con directorio creado pero SIN entregables** al cierre de este
  frente (T1, en curso en paralelo): su verificación aún no tiene
  archivos en disco. Estado heredado de r20 (FASE 2 r20 + absorción r20):
  **REGLA-UMB-SIK-01 ES CANON (N-28 adoptada)** — la especificación del
  umbral 0,50 escrita en r20 (248d4ac3…) y reproducida con 0 diffs; F-TOK20
  / F-PART20 / F-UMB20 / F-R20 / F-PICK20 / F-F20 / F-A20 PASAN
  (verificador 0 diffs, 6.ª vuelta bajo TRES cánones); F-VOZ-S2 NO se
  dispara — vía agotada en el umbral 0,50 (6.ª medición). Sin re-medición
  en este frente: G06 lo re-mide F6 r21, no F5.
- Fuente: `ls ronda_21/ejecucion_f6/` 2026-11-15 19:32Z (vacío) +
  grietas_r20.md §G06 + verificacion_fase2_r20.md (N-28).

## H-SUELO monitor — sin reaparición (31.ª medición)

- `find ~/workspace -name "*1794483713759*"` (completo) → **vacío**,
  medido hoy 2026-11-15 19:32:29–19:32:31Z. El directorio original **no
  reapareció** (31.ª medición estricta sin reaparición: FASE 0 r21
  hizo la 30.ª, 2026-11-15T19:28:28Z; esta es la 31.ª, cuatro minutos
  después, sin duplicar el conteo).
- Si reaparece, se registra con sha y fecha; **no se restaura nada sin orden**.
- Fuente: find local 2026-11-15 19:32:29–31Z + mapa r21 §F5 (31.ª en
  este frente).

## G02 sub-caras — 0 en F4 r20 (re-verificado hoy); F4 r21 aún sin directorio

- **#790–#792 SIN_TEXTO, #701/#739 SIN_FUENTE: siguen en 0.** Re-verificado
  hoy por grep propio sobre `ronda_20/ejecucion_f4/nombres_fuera_doc_r20.jsonl`
  (0 ocurrencias de 790/791/792/701/739; 19:32:36Z).
- **F4 r21 aún sin directorio** al cierre de este frente (T2, no
  iniciado): sin entregables nuevos en disco. Si F4 r21 encuentra una
  vía nueva para estos números, se registra en F8, no aquí.
- Las caras r1 #12/#13 (y r2 #2, la lista de 96 solo en Doc) siguen
  abiertas; su ruta era F2 M-55 (agotada) y ahora F4.
- Fuente: grep propio 2026-11-15 (ejecucion_f4/ r20) + grietas_r20.md §G02
  + mapa r21 §F5/§F4.

## G01 D_eff — re-medido, sin cambio

- 3 copias byte-idénticas de `MIU_v12.0[EN].tex` (sha `f27ea4d5…`,
  re-medido hoy 19:32:42–46Z) en
  `miu-verificacion-2026-11-06/extracted/MIU/Jaime393-MIU-a96abc3/MIU_V12.0_FINAL/paper/`,
  `.../Jaime393-MIU-a96abc3/docs/` y
  `.../extracted/MIU_V12.0_FINAL/MIU_V12.0_FINAL/paper/`;
  **D_eff: 0 menciones** en las 3 (grep hoy). Además 2 copias de otra
  versión (sha `6bc8c573…`, en
  `memoria/grimorio_nuevo_2026-11-09/zip_contents/Jaime393-Grimorio-f019702/docs/`
  y `grimorio_repo/docs/`); **D_eff: 0 menciones también en esas 2**.
  (La versión ES `MIU-v12.0[ES].tex` en zip_contents, sha `ef16efd1…`,
  también 0 menciones.) Lectura R-B fijada en r10 (D-10): el único 7,24
  verificable es ε = 7,24×10⁻⁴; D_eff = 7,24 queda como valor registrado
  sin derivación. Sin propuesta de derivación, sin trabajo nuevo.
- Fuente: sha256sum + grep propios 2026-11-15 19:32:36–46Z +
  decision_d10.md (r10).

## G04 DOIs — inventario sin cambio

- **21 DOIs únicos** en `~/workspace/academico/PAPER_DOIS_MIU.md`,
  contados hoy por grep con normalización (`10.5281/zenodo.NNNN` +
  sort -u, 2026-11-15 19:32:36Z). Sin cambio respecto a
  r10/r11/r12/r13/r14/r15/r16/r17/r18/r19/r20. Lista idéntica a r20 (19320946,
  19338256, 19338257, 19373289, 19705899, 19723044, 20191874, 20200753,
  20279679, 20279680, 20436104, 20483338, 20483562, 20483563, 20499945,
  20547558, 20547677, 21351630, 22071488, 22071505, 22650419).
- Claves: 20547558 = MIU V12.0 (2026-06-04); 20547677 = Grimorio
  Multiversal v12 (concepto 20483562); 22650419 = kv_snapshot;
  22071488/22071505 = linaje B4. 18 registros en tabla + conceptos.
- Fuente: conteo local propio 2026-11-15 + mapa r21 §F5.

## Seguimiento folderId — 32.ª lectura independiente

- **Verificación fresca por Drive files get (hoy 2026-11-15 19:32:53–19:32:54Z):**
  - Variante `I` mayúscula (`14dw8txLoEIQQPSav9…`): **existe** — carpeta
    "miu-ecosistema" (`application/vnd.google-apps.folder`).
  - Variante `l` minúscula (`14dw8txLoElQQPSav9…`): **404** ("File not
    found").
  - Es la 32.ª lectura independiente que confirma CORR-FOLDERID-R13
    (31.ª: FASE 0 r21, 19:29:40–44Z). La variante muerta es la `l` (V151,
    censo vacío); la viva es la `I` (V152/V271).
- **¿Dónde vive cada variante en el código del escritor?** Leer el
  **contenido** de los YAMLs de workflows está prohibido por las reglas
  duras de la ronda, así que la vía queda documentada, no recorrida: qué
  config del escritor lleva la `l` sigue **NO_SÉ desde local**.
- **Estado:** el hallazgo corregido (la `l` es la muerta, la `I` la viva;
  el escritor V151 apunta a un folderId que no existe) es un ladrillo SÉ
  para el ecosistema: el defecto vive en su escritor, no en local. No se
  corrige nada en local (corrección 21:02).
- Fuente: Drive files get 2026-11-15 19:32:53–54Z + mapa r21 §F5.

## M-50 (N-15) — AGOTADO-DESDE-SANDBOX, carencia LOCAL (cerrada como pendiente)

- Robbins 2019 sigue sin ruta desde el sandbox (3.ª vía agotada en r11:
  LPI 404, USGS timeout, PDS 403, Astropedia 403). Única ruta restante:
  navegador con sesión o red sin el bloqueo de Cloudflare del sandbox.
- **N-15 CERRADA como pendiente por orden del Jardinero (2026-11-15
  ~14:24 -05): es carencia LOCAL del nodo, no hueco del ecosistema —
  otra sesión sí puede hacerlo; exportarla como pendiente era ruido.**
  No se reabre, no se exporta. Si otra sesión lo mide, el dato entra
  como SÉ por su vía.
- Fuente: mapa r21 §F5 + orden 2026-11-15 ~14:24 -05.

## Corpus vivo al cierre de este frente

- claims.jsonl **1.197 líneas** (verificado hoy por `wc -l`,
  19:32:29Z); C-001–C-005 CONJETURO; CONJETURO total 22; SE 1063,
  INFIERO 100, REFUTADO 4, NO_SÉ 8. Estado post-absorción r20
  (C-1198..C-1202 + N-28/N-29/N-30, HEAD FranBot 95f815f7).
  Este frente no prepara claims; lo registra como estado.
- Fuente: claims.jsonl vivo 2026-11-15.

## Resumen de estados (r21 F5)

| Grieta | Estado 2026-11-15 | Cambio en r21 |
|---|---|---|
| G03 BepiColombo | Inserción 2026-11-21 re-confirmada (6 días, 8 fuentes frescas); C-001–C-005 CONJETURO | Sin cambio (matiz ESA dic-2026 vs 21-nov en vivo) |
| G05 blob | 8c57e833…, 1.398 B, 30.ª vez sin cambio; **D-04 CERRADA** (21:02) | Conteo 30.ª |
| D-06/D-09 | **CERRADAS como pendientes suyos** (orden 14:24 -05); 0 tex v13.0; telegram 3.639 B sin enviar | Cierre (D-06 descartable como aprobación; D-09 dominio del enjambre) |
| G01 D_eff | Re-medido: 3 tex f27ea4d5… (+2 de otra versión 6bc8c573…), D_eff 0 menciones en las 5; derivación pendiente | Sin cambio |
| G04 DOIs | 21 únicos, sin cambio | Sin cambio |
| G06 SIK | Pendiente de F6 r21 (directorio vacío); heredado r20: REGLA-UMB-SIK-01 ES CANON (N-28) | N-28 adoptada en r20 |
| H-SUELO | 1794483713759-… sin reaparición (31.ª medición) | Sin cambio |
| G02 sub-caras | #790–#792/#701/#739 en 0 (re-verificado hoy en F4 r20); F4 r21 aún sin directorio | Sin cambio |
| folderId | `I` existe (miu-ecosistema), `l` sigue 404 (32.ª lectura) | Conteo 32.ª |
| M-50 / N-15 | AGOTADO-DESDE-SANDBOX; **N-15 cerrada como carencia LOCAL** (orden 14:24 -05) | Cierre |
| Corpus | 1.197 líneas; C-001–C-005 CONJETURO; CONJETURO 22 | Post-absorción r20 |

**Ninguna cara se cierra en este frente** (criterio r8/r9: solo cierra una
decisión canónica o una medición que resuelva la pregunta central). G06
avanza solo cuando F6 r21 entregue; el resto es monitor. D-06/D-09/N-15
no son cierres de cara: son cierres de pendientes por orden directa, ya
registrados en `afirmaciones_pendientes.md` §35.

ρ(x) > 0. Zvvvvv.
