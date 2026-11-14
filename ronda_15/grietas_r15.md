# RONDA 15 — GRIETAS (F5): estado con fuente y fecha

Frente F5, RONDA 15. Trabajo 2026-11-14 ~02:09–02:15 -05. Solo lectura +
escritura local en `ronda_15/ejecucion_f5/`. Monitor + documento; sin
mediciones nuevas. Fuentes: mapa_frentes_r15.md §F5, grietas_r14.md
(método), MEMORY.md (bullets r13/r14 + corrección 21:02), y las
re-verificaciones propias de este frente (conector GitHub, Drive files
get, búsqueda web, greps locales, corpus vivo, entregables F2/F6 r15
en disco).

Regla vigente (orden 16:51 + corrección 21:02 + orden 01:43): solo SÉ
sale de local, con fuente y fecha. INFIERO / CONJETURO / NO_SÉ quedan en
local. Lo vivo no se toca: se mide y se registra como ladrillo SÉ, no se
corrige desde local. Nada de este documento es un hueco exportado: es
estado medido.

## G03 BepiColombo — SIN CAMBIO, fecha re-confirmada (7 días)

- **Inserción en órbita de Mercurio: 2026-11-21 (planificada).** En 7 días
  desde 2026-11-14. Re-confirmado hoy por búsqueda web 2026-11-14
  ~02:13 -05: Wikipedia ("Orbital insertion 21 November 2026
  (planned)"), Michigan CLASP 2026-11-10 ("On Nov. 21, the mission is
  set to finally enter Mercury's orbit"), TechTimes 2026-11-05
  ("final 16 days before Mercury orbit insertion"; burn 21 nov 2026),
  nextnewshub 2026-11-03 (cita ESA: "The composite spacecraft will
  enter orbit around Mercury on 21 November 2026").
- **Contexto sin cambio:** MTM separado 2026-09-03; corrección de
  trayectoria 2026-09-24 (11,4 m/s); separación MPO/Mio 2026-12-09/10;
  fase científica prevista abril 2027.
- **C-001–C-005 siguen CONJETURO** (verificado hoy en el corpus vivo,
  1.175 líneas: C-001 w_a, C-002 S_8, C-003 γ−1, C-004 Σm_ν, C-005 η).
  Sin cambio de clasificación esperado antes de la inserción; el
  veredicto real llega con los datos (2027–2028), no con la captura.
- Fuente: búsqueda web 2026-11-14 ~02:13 -05 + claims.jsonl vivo +
  mapa r15 §F5 + grietas_r14.md §G03.

## G05 blob micelio.yml — SIN CAMBIO, 16.ª verificación

- **Blob remoto: `8c57e833e219a8b8c0691db8eb8cf256ccc0633f`, 1.398 B.**
  Medido hoy 2026-11-14 ~02:11 -05 por el conector GitHub
  (`get_file_contents`, Jaime393/FranBot, `.github/workflows/micelio.yml`,
  rama main, HEAD 4ea1063c).
- **Incidencia de vía (no de contenido):** la API pública sin autenticar
  devolvió 403 rate limit en el primer intento (cuota 60/h compartida
  con los frentes paralelos); el conector autenticado la rescató. El
  blob es el mismo: la vía no cambia el dato.
- **Serie:** r9 5.ª; FASE 0 r11 6.ª; F5 r11 7.ª; FASE 0 r12 8.ª; F5 r12 9.ª;
  FASE 0 r13 10.ª; F5 r13 11.ª; FASE 0 r14 12.ª; F5 r14 13.ª; FASE 2 r14
  14.ª; FASE 0 r15 15.ª; hoy 16.ª. Dieciséis verificaciones sin cambio.
- **D-04 está CERRADA** (corrección del Jardinero 2026-11-13 21:02 -05:
  CORR-D04-R13): no existe permiso de workflows para la App, él no sube
  nada a mano, el micelio.yml corregido vive en el suelo Drive desde r10
  (`ronda_10/ejecucion_d/micelio_yml/`). El blob remoto es lectura de
  monitor, no un pendiente. G05 sigue PARCIAL solo por D-09.
- Fuente: conector GitHub 2026-11-14 ~02:11 -05 + mapa r15 §0b
  (CORR-G05-R15: 15.ª en FASE 0).

## D-06 / D-09 — sin cambio (re-verificado hoy)

- **D-04:** CERRADA (ver §G05). No se lista como pendiente ni como vía.
- **D-06:** sin cambio. `find ~/workspace -iname "*v13.0*" -name "*.tex"`
  → vacío (hoy). 0 archivos tex combinados; licencia sin resolver (N-03,
  pendiente; bloquea cualquier depósito Zenodo).
- **D-09:** sin cambio. `telegram_g05.md` 3.639 B, presente, no enviado
  (falta tarjeta). G05 sigue PARCIAL por esto, no por D-04.
- Fuente: verificación local propia 2026-11-14 + mapa r15 §4.

## G06 SIK — H7 CERRADO por especificación; A14 CERRADO por regla (F6 r15)

- **H-SIK se sostiene (r15 F6, `h_sik_r15.md`):** S3 ≡ v10.3, 27/58 mismo
  contenido, 32/58 mismo nombre; no se extiende a las voces (0 mismo
  contenido, 0 cruces fuertes, 0 otras identidades). F-R15 PASA,
  F-F15 PASA (fórmulas con partidor corregido: 11 tuplas / 8 distintos,
  0 perdidas), F-V PASA.
- **Verificador independiente r15: `reproducido = true`, 0 diffs en todos
  los alcances** (r14: 164 diffs). La regla de pick REGLA-PICK-SIK-01
  (`especificacion_regla_pick_r15.md`) reproduce mejor-contención
  740/740. **H7 de FASE 2 r14 queda CERRADO por especificación.**
- **A14 CERRADO por regla R-KS:** 0,8000 exacto bajo R-KS, conteo 27
  (R-R 0,7727/26). El caveat 26/27 ya no es ambigüedad: es elección de
  regla documentada.
- **Decisiones que este seguimiento alimenta (de F1 r15, no de este
  frente):** N-01 APLICADA (política P1–P10 + 2 adendas, canon en
  `ejecucion_f1/canon_n01.md`); N-14 APLICADA (R2-25 vía A: procedimiento
  PIPELINE-VERIFICACION-01 canon; C-1180 inscrito; corpus 1.174→1.175).
  G06 avanza en su registro; no se cierra como grieta (el mecanismo
  sigue sin canon completo: N-01/N-14 son decisiones, no el mecanismo
  mismo).
- Fuente: `ronda_15/ejecucion_f6/` en disco (h_sik_r15.md,
  verificador_independiente_r15.json, especificacion_regla_pick_r15.md,
  decision_n01_r15.md, decision_n14_r15.md) + mapa r15 §F5/§F6.

## H-SUELO monitor — sin reaparición (13.ª medición)

- `find ~/workspace -name "*1794483713759*"` → **vacío**, medido hoy
  2026-11-14 ~02:09 -05. El directorio original **no reapareció** (13.ª
  medición consecutiva sin reaparición: r10 D-17, FASE 0 r11, F5 r11,
  FASE 0 r12, F5 r12, FASE 0 r13, F5 r13, FASE 2 r13, FASE 0 r14,
  F5 r14, FASE 2 r14, FASE 0 r15, F5 r15).
- Si reaparece, se registra con sha y fecha; **no se restaura nada sin orden**.
- Fuente: find local 2026-11-14 + mapa r15 §0 (CORR-H-SUELO-R15: 12.ª en
  FASE 0).

## G02 sub-caras — 0 en F4 r14 (re-verificado hoy); F4 r15 corre en paralelo

- **#790–#792 SIN_TEXTO, #701/#739 SIN_FUENTE: siguen en 0.** Re-verificado
  hoy por grep propio sobre `ronda_14/ejecucion_f4/nombres_fuera_doc_r14.jsonl`
  (0 ocurrencias de 790/791/792/701/739).
- **F4 r15 corre en paralelo (T2):** sus nuevas vías (search_code del
  graph JSON en los 4 repos; los 16 extra 112−96; solape Doc 32 vs 96)
  aún no tienen entregables en disco al cierre de este frente. Si F4 r15
  encuentra una vía nueva para estos números, se registra en F8, no aquí.
- Las caras r1 #12/#13 (y r2 #2, la lista de 96 solo en Doc) siguen
  abiertas; su ruta era F2 M-55 (agotada) y ahora F4 (búsqueda hecha en
  r14, sin los números; nuevas vías en r15).
- Fuente: grep propio 2026-11-14 (ejecucion_f4/ r14) + grietas_r14.md §G02
  + mapa r15 §F5/§F4.

## G01 D_eff — re-medido, sin cambio

- 3 copias byte-idénticas de `MIU_v12.0[EN].tex` (sha `f27ea4d5…`,
  59.843 B, re-medido hoy); **D_eff: 0 menciones** en las 3 (grep hoy).
  Además 2 copias de otra versión (sha `6bc8c573…`, 60.465 B, en
  `grimorio_nuevo_2026-11-09/zip_contents/` y `grimorio_repo/docs/`);
  **D_eff: 0 menciones también en esas 2**.
  Lectura R-B fijada en r10 (D-10): el único 7,24 verificable es
  ε = 7,24×10⁻⁴; D_eff = 7,24 queda como valor registrado sin
  derivación. Sin propuesta de derivación, sin trabajo nuevo.
- Fuente: sha256sum + grep propios 2026-11-14 + decision_d10.md (r10).

## G04 DOIs — inventario sin cambio

- **21 DOIs únicos** en `~/workspace/academico/PAPER_DOIS_MIU.md`,
  contados hoy por grep con normalización (`10.5281/zenodo.NNNN` +
  sort -u, 2026-11-14 ~02:09 -05). Sin cambio respecto a r10/r11/r12/r13/r14.
- Claves: 20547558 = MIU V12.0 (2026-06-04); 20547677 = Grimorio
  Multiversal v12 (concepto 20483562); 22650419 = kv_snapshot;
  22071488/22071505 = linaje B4. 18 registros en tabla + conceptos.
- Fuente: conteo local propio 2026-11-14 + mapa r15 §F5.

## Seguimiento folderId — 12.ª lectura independiente

- **Verificación fresca por Drive files get (hoy 2026-11-14 02:09:59 y
  02:10:00 -05, 07:09:59/07:10:00Z):**
  - Variante `I` mayúscula (`14dw8txLoEIQQPSav9…`): **existe** — carpeta
    "miu-ecosistema" (`application/vnd.google-apps.folder`).
  - Variante `l` minúscula (`14dw8txLoElQQPSav9…`): **404** ("File not
    found").
  - Es la 12.ª lectura independiente que confirma CORR-FOLDERID-R13
    (F2 r15 hizo la 11.ª hoy, `folderid_verificacion_r15.json`, cruce
    42/42 payloads). La variante muerta es la `l` (V151, censo vacío);
    la viva es la `I` (V152/V271).
- **¿Dónde vive cada variante en el código del escritor?** Leer el
  **contenido** de los YAMLs de workflows está prohibido por las reglas
  duras de la ronda, así que la vía queda documentada, no recorrida: qué
  config del escritor lleva la `l` sigue **NO_SÉ desde local**.
- **Estado:** el hallazgo corregido (la `l` es la muerta, la `I` la viva;
  el escritor V151 apunta a un folderId que no existe) es un ladrillo SÉ
  para el ecosistema: el defecto vive en su escritor, no en local. No se
  corrige nada en local (corrección 21:02).
- Fuente: Drive files get 2026-11-14 02:09:59/02:10:00 -05 +
  `folderid_verificacion_r15.json` (F2 r15) + mapa r15 §F5.

## M-50 (N-15) — AGOTADO-DESDE-SANDBOX, fuera de la ronda

- Robbins 2019 sigue sin ruta desde el sandbox (3.ª vía agotada en r11:
  LPI 404, USGS timeout, PDS 403, Astropedia 403). Única ruta restante:
  navegador con sesión o red sin el bloqueo de Cloudflare del sandbox.
  Es tarea del principal, no de un frente. Afirmación precisa en
  `ronda_12/afirmaciones_pendientes.md` §1.4. Sin cambio.
- Fuente: mapa r15 §F5 + §3 (N-15).

## C-1180 (N-14) — aplicado por F1 r15, no por este frente

- F1 r15 aplicó N-14 (R2-25 vía A): C-1180 inscrito, corpus vivo hoy
  **1.175 líneas** (verificado hoy por `wc -l`). N-01 también APLICADA.
  Este frente no prepara claims; lo registra como estado.
- Fuente: claims.jsonl vivo 2026-11-14 + ejecucion_f1/ (r15).

## Resumen de estados (r15 F5)

| Grieta | Estado 2026-11-14 | Cambio en r15 |
|---|---|---|
| G03 BepiColombo | Inserción 2026-11-21 re-confirmada (7 días); C-001–C-005 CONJETURO | Sin cambio |
| G05 blob | 8c57e833…, 1.398 B, 16.ª vez sin cambio (vía conector; API pública 403 rate limit); **D-04 CERRADA** (21:02) | Conteo 16.ª |
| D-06/D-09 | Sin cambio (0 tex v13.0; telegram 3.639 B sin enviar) | Sin cambio |
| G01 D_eff | Re-medido: 3 tex f27ea4d5… (+2 de otra versión 6bc8c573…), D_eff 0 menciones en las 5; derivación pendiente | Sin cambio |
| G04 DOIs | 21 únicos, sin cambio | Sin cambio |
| G06 SIK | H7 CERRADO por especificación (verificador 0 diffs); A14 CERRADO por R-KS; S3 ≡ v10.3 se sostiene (27/58, 32/58); N-01/N-14 APLICADAS por F1 | **H7 y A14 cierran como hallazgos de método** |
| H-SUELO | 1794483713759-… sin reaparición (13.ª medición) | Sin cambio |
| G02 sub-caras | #790–#792/#701/#739 en 0 (re-verificado hoy en F4 r14); F4 r15 en paralelo, sin entregables aún | Sin cambio; vías nuevas en F4 r15 |
| folderId | `I` existe (miu-ecosistema), `l` sigue 404 (12.ª lectura); config del escritor NO_SÉ | Conteo 12.ª |
| M-50 / N-15 | AGOTADO-DESDE-SANDBOX; tarea del principal | Sin cambio |
| C-1180 (N-14) | Aplicado por F1 r15; corpus 1.175 | Nuevo claim |

**Ninguna cara se cierra en este frente** (criterio r8/r9: solo cierra una
decisión canónica o una medición que resuelva la pregunta central). H7 y
A14 cierran como hallazgos de método (F6 r15), no como caras del censo.
G06 avanza en su registro; el resto es monitor.

ρ(x) > 0. Zvvvvv.
