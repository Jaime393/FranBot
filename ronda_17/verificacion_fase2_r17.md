# VERIFICACIÓN FASE 2 — RONDA 17

- **Fecha:** 2026-11-14. **Verificador:** independiente (no es ningún frente de FASE 1).
- **Alcance:** mapa_frentes_r17.md + entregables de ejecucion_f1/..ejecucion_f9/ + conectar/ + MEMORY.md (bullet RONDA 16) + verificacion_fase2_r16.md (formato).
- **Método:** re-medición independiente, no re-lectura. Re-corrí en vivo estado_vivo.json, flow_id_coverage.json y micelio.yml (G05) al inicio y al final de esta verificación; re-corrí M-72/M-73/M-74 con scripts propios; re-corrí el verificador F6 desde /tmp con W redirigida; re-corrí el dedup F7 con script propio (3 corridas byte-idénticas); re-corrí las puertas del corpus (audit.py, verify_all.py) sin pipes; re-verifiqué F4 (jsonl vs r16, Doc índice, carpeta "10 Panteón"), F9 (condición 1, CORR-MANIFIESTO-HUECOS-R17, tally, T-4, P-32) y F5 (G03 por búsqueda web propia, G01, G04, D-06, D-09, H-SUELO).
- **Dictamen: CONFORME CON HALLAZGOS (5 menores, 0 mayores). Nada bloquea la absorción de C-1187..C-1190 + M-72 (N-20).**

## 1. Manifiestos (todos OK)

| Frente | Manifiesto | Resultado |
|---|---|---|
| FASE 0 | manifiesto_shas_r17_fase0.json | 3/3 OK |
| F1 | manifiesto_shas_f1.json | 1/1 OK |
| F2 | manifiesto_shas_f2.json | 83/83 OK |
| F3 | manifiesto_shas_f3.json | 13/13 OK |
| F4 | manifiesto_shas_f4.json | 4/4 OK |
| F5 | manifiesto_shas_f5.json | 1/1 OK |
| F6 | manifiesto_shas_f6.json | 14/14 OK |
| F7 | manifiesto_shas_f7.json | 10/10 OK |
| F8 | manifiesto_shas_f8_r17.json | 2/2 OK (estructura plana nombre→{sha256,bytes}, sin clave `archivos`) |
| F9 | manifiesto_shas_f9.json | 13/13 OK |

## 2. Lecturas vivas del verificador (horas UTC registradas)

| Lectura | Hora | Resultado | Ordinal |
|---|---|---|---|
| estado_vivo.json (inicio) | 2026-11-14T19:05:06Z | run 206 "unreachable", blob `3e063ce6…`, ts 16:50:21Z — igual que la foto F2 | — |
| flow_id_coverage.json (inicio) | 2026-11-14T19:05:18Z | 0,0%, ts 16:19:54Z (run 141) — igual que la foto F2 | — |
| micelio.yml G05 (inicio) | 2026-11-14T19:05:20Z | blob `8c57e833…` sin cambio | **20.ª** (F5 r17 = 19.ª, 18:36:03Z) |
| folderId `I`/`l` | 2026-11-14T19:09:20Z | `I` existe (miu-ecosistema) / `l` 404 | **19.ª** (F5 r17 = 17.ª 18:36:25Z; F2 r17 = 18.ª 18:39:36Z — ver H1) |
| H-SUELO (find) | 2026-11-14T19:09:22Z | vacío, sin reaparición | **20.ª** (FASE 0 r17 = 18.ª; F5 r17 = 19.ª) |
| estado_vivo.json (cierre) | 2026-11-14T19:12:31Z | run 206, blob `3e063ce6…` — sin cambio durante FASE 2 | — |
| flow_id_coverage.json (cierre) | 2026-11-14T19:12:31Z | 0,0%, ts 16:19:54Z — sin cambio durante FASE 2 | — |

## 3. F3 mediciones — REPRODUCIDAS EXACTAS

- **M-72 CONFIRMA** (script propio `/tmp/verif_f2_r17/m72_indep.py`, Decimal exacto): control M-66 6/29 idéntico; grupos [1,4,24,1]; huecos ≥ 0,05: **5**; estrictos > 0,05: 4; sensibilidad [5,5,4]; grupo central conjunto-idéntico a M-66/M-69 (única diferencia de orden: dos nodos empatados en D_f = 2,50, Microbioma humano vs Microtúbulos, ordenados por nombre vs orden CSV; ningún número cambia).
- **M-73 NO_CONFIRMA** (script propio): β = 0,9757 ± 0,0118, R² = 0,3989, n = 10.351, intercepto −2,1024 — 6.ª variable, mismo modo de fallo.
- **M-74 NO_CONFIRMA** (script propio, protocolo House-only del frente): int() 83, float() 86, diferencia exactamente {115,116,117}; ancla Congreso 80, P = 0,4975; máx 1,9719; P(119)/P(80) = 1,8613 ± 0,0866, idéntico a M-67; P(115/116/117) = 0,8900/0,8840/0,8825.
- Falsadores antes que JSONs: `declaracion_falsadores_r17.md` 18:37:09Z; JSONs 18:38:12Z / 18:38:13Z / 18:38:17Z. JSONs con exactamente 15 claves.
- Nota de método (heredada, no error del frente): el máx P (1,9719) está en el Congreso 34, con muy pocos republicanos (n_rep pequeño, House-only) — quirk de protocolo heredado de M-61/M-64/M-67. Excluirlo solo bajaría el máx a 1,8613; el veredicto no cambia.
- Corpus/dataset intactos al cierre de F3 (1.181, `fd1df2db…`; dataset `0852d58f…`).

## 4. F2 estado vivo — FOTO VERIFICADA

- Ventana 24/30 = 20,0% re-contada desde `runs_recientes.json`: exactamente 30 runs, 6 fallos con nombres/horas/eventos coincidentes (bot-audit 39, expand-alcance 98, TG Webhook 43 — de r16 — + TG Webhook 44, expand-alcance 99, cablear-oracle 17). Peor de la serie (r16 16,7%); 4.ª ronda consecutiva ≠ 0,0%. Expand-alcance falla 3× seguidas (97/98/99).
- Run 206 "unreachable" (16:50:21Z, stub 329 B, blob `3e063ce6…`); episodio run 205 duró 6 h 03 min; estado completo ausente ~24 h 38 min (último run 202 V272, 2026-11-13T17:58:47Z). Flow run 141 (16:19:50Z) 0,0% sexta ronda. HEAD `ce4d1070` (Self-Diagnosis run 142, 17:24:18Z). Autocura run 9 nuevo (17:03:57Z). estado_persistente sigue V213.
- Heartbeat re-contado: 55 filas nuevas (V271 15, V151 14, V270 10, V152 9, **V93 7**); censo vacío 14/55 = 25,5%. V93: esquema nuevo (7 payloads, ~30 min, plano, escritor Vercel miu-autonomo-v92, 9 nodos, savia 920, phi 31,847, rho 0,687).
- Bots 4/4 VIVO 15.ª confirmación; 5.º token 401 MUERTO (ver H4: no re-corrido en vivo por el verificador).
- folderId: ver H1. Cuota 55/60 → 60/60 (reset ~18:37Z), 0 HTTP 403.
- Payloads heartbeat + `raw_r17_observabilidad_bootstrap_V270.json` (JWT anon) quedan en local, excluidos del depósito — correcto.

## 5. F6 mecanismos — VERIFICADOR RE-CORRIDO, 0 DIFFS

- Re-corrí `verificador_independiente_r17.py` desde `/tmp/verif_f2_r17/f6/` (W redirigida; cero escrituras en `ejecucion_f6/`): **reproducido = true, diferencias_n = 0**; salidas byte-idénticas a las del frente (3/3 shas: verificador `87b4e03a…`, sensibilidad R-K `ab7f6675…`, R-R `78895687…`). Totales 142/115/27/32; S3 ≡ v10.3 (27/58 mismo contenido, 32/58 mismo nombre); A14 0,8000 exacto (conteo 27); F-F 11 tuplas / 8 distintos.
- F-VOZ-S2 NO se dispara — vía agotada a umbral 0,50, **3.ª medición** (banderas idénticas r16 = r17: FB 2, P48 1, Base 0; mejor Jaccard 0,2308). R2-25/N-01 sin novedad (b2 línea 7 sigue SE; 7.º precedente = absorción r16, registrado como ocurrencia cerrada; sin repetición de NM-03).
- Falsador H-SIK 18:36:51Z antes que el verificador (script 18:37:06Z, salida 18:37:27Z). Dir r16 intacto (mtimes 16:10:33Z = re-corrida propia de FASE 2 r16, H4 r16; nada tocado en r17).
- REGLA-TOK-SIK-01 sigue como método, no canon — adjudicación en §10.1.

## 6. F4 Panteón-96 — RE-CORRIDO

- 18 consultas search_code, 18:42:01–18:43:07Z, hora UTC por consulta; totales crudos [5×14, 6, 12, 11, 0, 0] — la subida es solo por documentos de rondas 15–16 ahora indexados que se mencionan a sí mismos (H1 r17, método: el número comparable es el operativo, no el crudo).
- `nombres_fuera_doc_r17.jsonl`: 96 filas, byte-idénticas a r16 salvo la clave anidada nueva `conteo_fuera_doc.doc_indice_r17` (96/96 con solo esa clave nueva; 0 diferencias reales). 35 nombrados / 61 sin nombre; 0/61 encontradas; 0/35 como voces. Cara r12 #1 AVANZA, no cierra.
- Forjados: operativo 4 (2+2) idéntico a r15/r16; 0/16 voces. H3 FASE 2 r16 CERRADA (16 búsquedas re-corridas en r17).
- Doc índice verificado en vivo por mí (2026-11-14T19:09:18Z): 8.230 B, modifiedTime 2026-09-25T02:17:48Z, sin cambio. Carpeta "10 Panteón": exactamente 2 hijos. Graph JSON 0/0 tercera ronda consecutiva.
- Bundle zip NO re-abierto (higiene: 1 línea con valores literales de credenciales) — correcto.

## 7. F5 grietas — SPOT-CHECKS PROPIOS

- G03: re-confirmado por búsqueda web propia (2026-11-14): inserción 2026-11-21 (planificada); el matiz ESA diciembre-vs-21-nov está presente en las fuentes (página principal "December 2026", live-updates 21-nov). 7 días.
- G05: blob `8c57e833…` 19.ª (F5, 18:36:03Z) y **20.ª** (mía, 19:05:20Z), sin cambio.
- H-SUELO: 18.ª (FASE 0 r17), 19.ª (F5), **20.ª** (mía, 19:09:22Z, find vacío).
- G01: D_eff 0 en `GRIMOIRE_V12.0[ES].tex` (grep propio). G04: 21 DOIs únicos re-contados. D-06: 0 archivos tex v13.0 (find propio). D-09: `telegram_g05.md` 3.639 B presente, no enviado. G02: 0 ocurrencias (re-verificación grep de F5). M-50/N-15 AGOTADO-DESDE-SANDBOX.
- folderId: ver H1. 0 caras cierran.

## 8. F9 poda — CONDICIÓN 1 SOSTENIDA (con matiz de grado)

- Tally re-contado desde `poda_r17.json`: 11+7+1+34+13+2+7 = **75** (74 filas + padre P-15 como RESUELTO sin fila, convención CORR-TALLY-R15). Temporales: 12 prorrogados (los 9 por 6.ª vez; P-47/P-48 2.ª; P-51 1.ª re-evaluación) + P-54 nuevo. Cadena: 16 eslabones, 19.712.089 B. Verificación P-01..P-56: 240/240 OK.
- **Condición 1 (CORR-COND1-R17): CUMPLIDA por primera vez.** `_descarga_drive_r17.json`: n=67, ok=39 byte-idénticos, diferente=21, sin_id=5, error_descarga=0, local_ausente=0, sin_copia_drive=2 (P-51, P-54). Los 21 "DIFERENTE" son exactamente los archivos JSON con sha_drive `e3b0c442…` (vacío) — quirk CORR-DESCARGA-JSON-R17: el CLI devuelve 0 bytes en `-o` para `application/json`; `_verificacion_json_drive_r17.json` los verifica 21/21 por md5 + contenido JSON parseado por stdout (grado OK_MD5_Y_CONTENIDO, distinto del byte-idéntico). **Total con copia verificada por contenido: 60/60.** Las 5 copias huecos.jsonl no existen en Drive por regla (ver abajo). P-51/P-54 no tienen copia Drive (creados post-FASE 4) — condición no aplicable, registrado como tal.
- Matiz de grado (no bloquea): la condición 1 como está escrita dice "por descarga". Los 21 JSON se verificaron por contenido obtenido en la misma llamada `files get` (stdout), no por descarga byte a byte. La sustancia — la copia Drive coincide con el local — está establecida en los 60; el grado difiere en 21. La puerta de retiro queda en 2 de 3 (falta solo la autorización, condición 3); ningún temporal se retira en r17 — correcto.
- **CORR-MANIFIESTO-HUECOS-R17 confirmada en vivo por mí:** carpeta Drive `respaldo_pre_r15/` (ID `1k63dDAH9gTj2vxCRJud5BIKgtcW0jjYC`) contiene exactamente 5 archivos (claims, resumen, confirmaciones, manifiesto, provenance), ningún `huecos.jsonl`; logs de subida r11–r15: 0 menciones de "huecos"; manifiestos fase4 listan `huecos.jsonl` 1× en r11–r14 y 5× en r15 (respaldo principal + 4 dirs por decisión). El manifiesto sobreestima el depósito en 1 archivo por respaldo principal (5 en total, r11–r15). Ningún veredicto de depósito cambia (las verificaciones FASE 4 contaron lo subido).
- T-4 r17: 5.607 archivos, 1.550.690.292 B; diff 5.389 OK / 4 CAMBIO (todos explicados) / 0 MOVIDO / 0 FALTA / 214 NUEVO (todos en ronda_16/ronda_17). `.pyc` 18→18.
- P-32 sigue NO clase 3: `git show HEAD:app/js/miu-engine.js` 19.987 B, sha256 `a30d69e8…`, byte-idéntico al respaldo; 0 ocurrencias en el campo hash de claims vivos.

## 9. F7 preparar — DEDUP RE-CORRIDO POR MÍ, CIFRA POR CIFRA

- Script propio `/tmp/verif_f2_r17/dedup_f2_r17.py` (método r9, campo `claim`, NFKD, sin acentos, tokens `[a-z0-9]+`, umbral 0,5), **3 corridas byte-idénticas** (sha `10fa42c3…`):
  - C-1187 CORR-RUTA-DRIVE-R16: **0,1702** vs C-1177, 0 pares ≥ 0,5.
  - C-1188 forjados 16/16: **0,3926** vs C-641, 0 pares ≥ 0,5.
  - C-1189 ventana 24/30 20,0%: **0,4336** vs C-1184, 0 pares ≥ 0,5.
  - C-1190 run 206 + ausencia ~24 h 38 min: **0,3217** vs C-1185, 0 pares ≥ 0,5.
  - Entre propuestas: máx **0,2357** (C-1187/C-1188); global **0,4336**.
- Idéntico a F7 (`dedup_f7_r17.json`) y a F8 (salida `2fb5f2cc…`): tres corridas independientes, mismas cifras. El incidente de la primera redacción de C-1190 (0,5047 vs C-1185) está documentado y resuelto por reescritura (otro titular, sin serie de duraciones, sin cadena de alternancia → 0,3217).
- Hashes de fuente re-verificados por mí con `sha256sum`: C-1187 = `8bf838b9…` (drive_panteon16_r16.json); C-1188 = `a95eadf4…` (bundle_panteon16_contenido.json); C-1189/C-1190 = `70d56cff…` (estado_vivo_r17.md, fuente compartida — legítimo, como C-1184/C-1185 en r16).
- Ítem anexo M-72 preparado con 3 precedentes (C-935 + N-18 + N-19); proyección anexo 12 → 13 ítems, tally CONFIRMA 6 · NO_CONFIRMA 5 · DIFERENCIA 1 · NO_SÉ 1. M-73/M-74 no preparados (0 precedentes) — correcto. Lección H2 r16 aplicada: F4 r17 re-verificado al cierre antes de escribir el índice (5 archivos, mismos shas).
- Proyección si se absorben las 4: claims 1.181 → 1.185, hash_real 1167 → 1171, provenance 363 → 366, SE 1047 → 1051, verificación 307 → 311.

## 10. F1 guardia + F8 conectar

- **F1:** corpus intacto, sin mutación. Puertas re-corridas por mí sobre el estado final: `audit.py` exit=0 (ok=349, discrepancia=0, no_encontrado=0, omitido=1); `verify_all.py` exit=1 con exactamente C-001..C-008. claims.jsonl 1.181 líneas, sha `fd1df2db…`; provenance 363, sha `728f6770…`; resumen `ebaa1e53…` (SE 1047, hash_real 1167, verificación 307). C-1184/C-1185/C-1186 exactamente 1 vez cada uno; C-112 con hash truncado intacto (`sha256:5e30073cf29b`); C-416..C-420 ausentes. Confirmaciones 294 filas, huecos 139 (local).
- **F8:** 0 caras cierran, 59 abiertas, 0 nuevas; balance 77 censo / 18 cerradas / 59 abiertas (17 P + 42 A); 11 avanzan sin cerrar. d04 L13 sigue cerrada (M-72 es seguimiento, no reapertura). Dedup re-verificado por F8 e idéntico al mío (§9). CORR-MAPA-R17 adjudicada en H2. Nutrición FASE 4: Drive `ronda_17/` árbol completo; GitHub conjunto curado (corpus solo si F1 absorbe post-FASE 4; anexo solo si FASE 2 numera M-72).

## 11. Hallazgos

### H1 (menor) — CORR-FOLDERID-R17: F2 reclama la 17.ª lectura; es la 18.ª
F5 r17 leyó `I` existe / `l` 404 a las 18:36:25Z = **17.ª**. F2 r17 leyó lo mismo a las 18:39:36Z (`folderid_verificacion_r17.json`, `files get` en vivo) y la reclama como "17.ª" — es la **18.ª**. Misma clase que H1 r16 (F2 reclamaba 14.ª y era 15.ª). La nota de F5 que desestima la lectura de F2 ("solo registra la variante desde los payloads, no es lectura en vivo") es incorrecta: la lectura de F2 es en vivo, solo con ordinal 18, no 17. Serie: FASE 2 r16 16.ª (16:10:28Z) → F5 r17 17.ª (18:36:25Z) → F2 r17 18.ª (18:39:36Z) → verificador 19.ª (19:09:20Z).

### H2 (menor) — CORR-MAPA-R17: F8 tiene razón; el mapa tiene 2 errores
(a) Mapa L265 asigna d05 L4 a "F3 M-72": incorrecto — M-72 tocó d04 L13 (seguimiento del límite); d05 L4 la tocó **M-74**. (b) Mapa L302 dice "r17 toca 9 de 59": **F8 cuenta 11** — añade r1 #12/#13 por la re-verificación grep de G02 de F5 (0 ocurrencias, contenido nuevo medido en r17), mismo criterio que las 11 de r16. El mapa debe corregirse en FASE 3, no re-escribirse.

### H3 (menor) — La tabla de resto de la condición 1 omite P-54
`poda_r17.md` L123, fila Total: el resto dice "5 huecos + 8 de P-51". P-54 (`respaldo_pre_absorcion_r16/`, 8 archivos, también sin copia Drive) falta del resto. El dato subyacente es correcto (`_descarga_drive_r17.json`, sin_copia_drive: P-51 + P-54); solo el texto de la tabla subestima el resto en 8 archivos. Sin cambio de veredicto.

### H4 (menor, limitación permanente) — Bots no re-corridos en vivo por el verificador
Heredada de H5 r16: sin acceso a tokens por diseño, el 4/4 VIVO 15.ª de F2 descansa en `getme_verdicts_2026-11-14_r17.json`. El vivo se movió durante FASE 2 con arreglos del bot-audit (ver H5): el ecosistema mismo reporta 7/7 vivos en el commit 2b90b592 — eso no cambia la foto de F2, pero la 15.ª confirmación no fue re-medida en vivo aquí.

### H5 (menor) — El vivo se movió DURANTE FASE 2 (HEAD, no los archivos de estado)
Entre mi primera lectura (19:05:06Z) y el cierre (19:12:31Z), HEAD miu-ecosistema pasó de `c26ed969` (19:03:56Z) a **`2b90b592`** ("bot audit 2026-11-14: 7/7 vivos", miu-action, 19:09:27Z), vía `995cc678` (19:09:00Z, Jaime393: "fix: miu-bot-audit lee siempre el pool tg_bots_pool del COORD") y `efa2ffa7` (CHK-216: "fix: miu-bot-audit lee tokens TG del COORD cuando el Panteon esta caido; con el Panteon en 402 el audit reportaba 0/0 bots; respaldo: tg_* individuales y pool tg_bots_pool (7 tokens) del COORD"). Es la respuesta viva al fallo bot-audit run 39 de la ventana F2 y al 402 del Panteón (`tpfiybpguuxskitszhmk`, en exceed_egress_quota hasta ~26-nov, commit 36f676af 19:03:32Z). **estado_vivo.json (run 206, blob `3e063ce6…`) y flow (0,0%, run 141) no cambiaron durante FASE 2.** Ninguna medición de ningún frente queda invalidada: las fotos son fotos; el movimiento es de commits de arreglo, no de los archivos medidos.

## 12. Adjudicaciones (§10.1)

### N-20 — Añadir el ítem M-72 al anexo de incertidumbre — ADOPTADA
- **Afirmación:** "Añadan el ítem M-72 al anexo de incertidumbre."
- **Autoriza:** añadir al anexo (`academico/incertidumbre_mediciones.md`) el ítem M-72 preparado por F7 r17 (CONFIRMA: 5 huecos ≥ 0,05 de 23 con aritmética exacta Decimal; sensibilidad [5, 5, 4]; verifica por un segundo método la predicción de M-69).
- **Precedentes:** C-935 + N-18 (M-66) + N-19 (M-69). Proyección: anexo 12 → 13 ítems (M-56..M-72); tally CONFIRMA 6 · NO_CONFIRMA 5 · DIFERENCIA 1 · NO_SÉ 1; CSV byte-idéntico.
- **Aplica:** F1 bajo el régimen 01:43, junto con C-1187..C-1190. Respaldo previo con el siguiente ID libre de poda (después de P-56): P-57.

### REGLA-TOK-SIK-01 — NO se numera en r17; queda como propuesta heredada
F6 §7 la deja como método, no canon, y en r17 no se escribió ninguna especificación de canon (a diferencia de REGLA-PICK-SIK-01 en r15, que traía especificación `fee21d76…` + canon). Numerar un canon sin texto sería adoptar una regla vacía. Queda como propuesta heredada para una ronda futura en la que F6 escriba la especificación. No bloquea nada.

### C-1187..C-1190 — CONFORMES, sin bloqueo
Dedup re-verificado cifra por cifra (§9), hashes de fuente re-verificados (§9), 0 pares ≥ 0,5. Se absorben por F1 bajo el régimen 01:43. Nota de conteo para las puertas post-absorción: C-1189/C-1190 comparten fuente (`estado_vivo_r17.md`), así que audit ok sube +3 (349 → 352), no +4. Proyección: claims 1.185, hash_real 1171, provenance 366, SE 1051, verificación 311.

### Pendientes que NO cambian
N-15 (M-50 cuarto intento por navegador — tarea del principal, fuera de las rondas), N-03, D-06, D-09 (tarjetas), elección de repos de la App de GitHub, verificación de los 8 temas, LA BELLEZA — siguen pendientes de Jardinero o de su tarjeta; nada de esto se decide aquí.

### Correcciones de registro (no son decisiones numeradas)
- CORR-FOLDERID-R17 (H1): F5 r17 = 17.ª, F2 r17 = 18.ª, verificador = 19.ª.
- CORR-MAPA-R17 (H2): d05 L4 = M-74 (no M-72); r17 toca 11 caras, no 9.
- CORR-G05-R17: 19.ª (F5) / 20.ª (verificador). CORR-H-SUELO-R17: 18.ª (FASE 0) / 19.ª (F5) / 20.ª (verificador).
- CORR-COND1-R17: condición 1 cumplida 60/60 por contenido (39 byte-idénticos + 21 por md5+contenido JSON); grado distinto registrado.
- CORR-MANIFIESTO-HUECOS-R17: manifiestos fase4 r11–r15 sobreestiman el depósito en 1 archivo por respaldo principal (5 en total); los logs tienen 0 "huecos" y las carpetas Drive 5 archivos sin huecos.
- CORR-DESCARGA-JSON-R17: el CLI devuelve 0 bytes en `-o` para `application/json`; el contenido viene por stdout (md5 + JSON parseado).

## 13. Cierre

- **Dictamen: CONFORME CON HALLAZGOS (5 menores, 0 mayores).**
- Nada bloquea la absorción de C-1187..C-1190 + M-72 (N-20).
- Vivo al cierre de FASE 2 (2026-11-14T19:12:31Z): run 206 "unreachable" (blob `3e063ce6…`); flow 0,0% (run 141); HEAD `2b90b592` (bot-audit 7/7, arreglo COORD 19:09:27Z).
- Series de conteo al cierre: G05 20.ª, H-SUELO 20.ª, folderId 19.ª, bots 15.ª (F2, no re-medida en vivo aquí).

ρ(x) > 0. Zvvvvv.
