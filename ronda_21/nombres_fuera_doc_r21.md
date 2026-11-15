# RONDA 21 — FASE 1 F4 — ¿Existen los 61 nombres del Panteón-96 fuera del Doc índice? (9.ª vuelta: SIN re-corrida rutinaria de las 16 búsquedas)

**Fecha de ejecución:** 2026-11-15 (búsquedas Drive por nombre 19:43:42–19:44:04Z; consultas GitHub de atestación 19:44:56–19:44:57Z; Doc índice re-leído 19:45:10–19:45:21Z; carpeta «10 Panteón» listada 19:45:34Z)
**Cara:** r12 #1 — «¿existen los 61 nombres del Panteón-96 fuera del Doc índice?»
**Doc índice:** `1R0RGvCEYv0Ax-0o9QwwB6kGxUKxLLh_YJ0qVc3Ab4G8` («10 Panteon_96_Voces_Funciones_Invocables.md», mod. 2026-09-25T02:17:48Z). Afirma 96 voces, nombra 35 (r12 F4, SÉ).
**Antecedente:** r20 F4 (atestación operativa byte-idéntica a r15; H1 r17: los totales crudos suben solo por auto-indexación; candidato `.graph` leído, 0/35). **En r21 NO se re-corren las 16 búsquedas por rutina** (la re-corrida r17 ya cerró H3; repetir sin cambio de índice es repetición — H1 r17). Vale solo: (a) buscar nuevas fuentes Drive por nombre/fecha; (b) verificar si el índice de search_code cambió de forma que altere la atestación operativa.

## Veredicto

**La cara AVANZA, no se cierra.**

- **0/61:** ningún nombre de los 61 sin nombre en el Doc aparece fuera como voz del Panteón-96, ni como nombre en ninguna fuente nueva. **0 nombres nuevos** fuera de los 35.
- **3 archivos nuevos en la búsqueda `Panteon` que NO son depósitos propios de ronda — examinados, NO son fuentes del Panteón-96:** `CHK_229_20261115_slots_gas_panteon.json` (checkpoint GAS, 18:29:04Z), `CHK_231_20261115_panteon_groq_bloqueos.json` (checkpoint Groq/bloqueos, 18:52:53Z) y `panteon_crons_backup_20261115.json` (respaldo de 114 cron jobs, 18:52:53Z). Contenido leído por `files get alt=media` y clasificado (`fuentes_nuevas_panteon_r21.json`): 0/35 nombres como palabra completa en los 3 (las coincidencias de subcadena son «ecosistema»/«Panteon»); el único «96» es el jobid 196; 0 listas de voces. Son archivos operativos del ecosistema vivo, no fuentes del Panteón-96. Su contenido íntegro NO se guarda en el árbol de la ronda (regla: no reproducir valores de credenciales); solo metadatos + veredicto.
- **0 fuentes Drive nuevas del Panteón-96:** `graph` 33 → 34 (+1 = depósito propio FASE 4 r20) y `Voces` 20 → 23 (+3 = depósitos propios FASE 4 r20). `Panteon` total paginado 105 (ver CORR-PANTEON-TOTAL-R21): diff por ID contra r20 +5 / −0 — los 5 son los 2 depósitos propios FASE 4 r20 + los 3 operativos de arriba.
- **Atestación operativa SIN CAMBIO:** parche_phi_lengua 2, validar_grace 2 (los mismos 2 de r15/r16/r17/r18/r19/r20); los otros 14 forjados no se re-corrieron por rutina (encargo r21). Los totales crudos suben solo por auto-indexación (r20 ya indexada): parche 29 → 34, validar 28 → 33; los 5 nuevos en cada uno son documentos de `ronda_20/`.
- **Graph JSON:** 0/0 por séptima ronda consecutiva (r15, r16, r17, r18, r19, r20, r21) en los 4 repos cubiertos.
- **Doc índice re-verificado:** texto byte-idéntico al crudo de r12 (7.783 caracteres, sha256 `416b02d184497408d6d62b30a17e2b3094c09f71b2c24255e5fc95c649498713`, mismo revisionId `AHj4eMTX2hoCs1YCjPGzXe7uyVJe6O5qLW0j8CzhW0ckOml6FOFDWRIOUHF_dgh8MTOJy27SdiaAejvT1Usw0nhoVt3egYlkzr5CR5v233I`). **Sigue 35 nombrados / 61 sin nombre.**
- **Carpeta «10 Panteón»:** exactamente 2 hijos, sin cambio vs r16/r17/r18/r19/r20 (el .md del Panteón-16 y el Doc índice). Ningún Doc nuevo, ningún graph JSON aquí.

## Conteo

| | n |
|---|---|
| Filas totales (`nombres_fuera_doc_r21.jsonl`) | 96 |
| Nombres del Doc índice encontrados fuera **como palabra/nombre** | 34 / 35 (sin cambio vs r13/r14/r15/r16/r17/r18/r19/r20 — heredado de r20, no re-verificado en r21) |
| Nombres del Doc índice encontrados fuera **como voz del Panteón-96** (lista con función/ki/axioma) | **0 / 35** |
| Nombres del Doc índice sin ninguna ocurrencia fuera | 1 / 35 — **CREATIVA Nyx QR SHA** |
| De las 61 sin nombre en el Doc, encontradas fuera | **0 / 61** |
| Nombres nuevos (fuera de los 35) encontrados en alguna fuente | **0** |
| Los 16 extra (112−96) con nombre | **16 / 16 — los forjados** (CORR-FORJADOS-R15) |
| De los 16 forjados, voces del Panteón-96 | **0 / 16** |
| De los 16 forjados, con script en el bundle v213 (r16) | **16 / 16** |
| De los 16 forjados, con archivo operativo en GitHub (atestación r21) | **2 / 16** — parche_phi_lengua, validar_grace (los mismos 2 de r15; no re-corrida rutinaria en r21) |

## (a) Búsqueda de fuentes Drive nuevas (por nombre/fecha, solo lectura)

Método: `drive files list` con `name contains` (2026-11-15 19:43:42–19:44:04Z), campos id/nombre/mimeType/modifiedTime/size + nextPageToken. Criterio de novedad: modificado después de la última búsqueda (r20, 2026-11-15 ~07:51Z) y fuera de los depósitos propios de ronda. Diff por ID contra los listados r20: 0 eliminados en las 3 búsquedas.

| Consulta | Total | Novedad |
|---|---|---|
| `name contains 'Panteon'` | **105** (página 1: 100 + página 2: 5; r20: 100 en primera página, total no paginado) | **3 archivos operativos nuevos, 0 fuentes del Panteón-96** — `CHK_229_20261115_slots_gas_panteon.json` (4.012 B, 18:29:04Z), `CHK_231_20261115_panteon_groq_bloqueos.json` (3.748 B, 18:52:53Z), `panteon_crons_backup_20261115.json` (9.923 B, 18:52:53Z); los otros 2 añadidos son depósitos propios de FASE 4 r20 (`carpeta_10panteon_r20.json`, `drive_busqueda_Panteon_r20.json`, mod. 2026-11-15T08:32Z) |
| `name contains 'graph'` | 34 (r20: 33) | 0 — el único añadido es depósito propio de FASE 4 r20 (`drive_busqueda_graph_r20.json`, mod. 2026-11-15T08:32Z); lo más reciente no propio sigue siendo el Doc graph112 (2026-09-25, ya conocido) |
| `name contains 'Voces'` | 23 (r20: 20) | 0 — los 3 añadidos son depósitos propios de FASE 4 r20 (`drive_busqueda_Voces_r20.json`, `destilacion_voces_s2_r20.json`, `medir_destilacion_voces_s2_r20.py`, mod. 2026-11-15T08:32–08:33Z); lo más reciente no propio sigue siendo el Doc índice (2026-09-25) y el manifiesto Vault 112 (2026-09-25) |

**CORR-PANTEON-TOTAL-R21 (nueva):** el «100» de r20 era la primera página, no un total verificado (el archivo r20 no guarda nextPageToken). En r21 se paginó por primera vez: total completo 105. Las comparaciones de totales entre rondas anteriores son diffs de primera página, no totales completos; el diff por ID (+5/−0) sí es exacto. Los 5 IDs que en un primer diff de página 1 parecían «eliminados» (fix_gossip_panteon_v214.sh, 2 NEI_JARDINERO, 2 REFUERZO_PANTEON_V1.jsonl) están en la página 2 — no hubo borrados.

**NO_ENCONTRADO (rutas probadas, sin fuente nueva):** búsquedas Drive por nombre `Panteon` / `graph` / `Voces` (105 + 34 + 23 archivos listados por metadatos, 2026-11-15 19:43:42–19:44:04Z). No es «no existe»: es «no encontrado aún en estas rutas».

## (b) Atestación operativa — ¿cambió el índice de search_code?

Método: `search_code`, parámetro `query`, scope `repo:Jaime393/MIU repo:Jaime393/FranBot repo:Jaime393/FranBot-Private repo:Jaime393/miu-portable-skills`. Solo las 2 consultas con atestación operativa > 0 (las únicas que pueden mover el conteo) + las 2 de graph JSON. Las otras 14 no se re-corren por rutina (encargo r21).

| # | Consulta | Hora UTC | Total crudo r20 → r21 | Operativo r21 | Clasificación de los nuevos |
|---|---|---|---|---|---|
| 1 | parche_phi_lengua | 19:44:57Z | 29 → **34** | **2** (los mismos: `Jaime393/MIU estado/miu-agent-toolkit/README.md`, `Jaime393/MIU estado/corpus_high_ktau_v275.jsonl`) | 5 nuevos, todos documentos de `ronda_20/` |
| 2 | validar_grace | 19:44:57Z | 28 → **33** | **2** (los mismos: `Jaime393/FranBot anexo-vi/evidence/C-171_busqueda_c.txt`, `Jaime393/FranBot academico/TABLA_FISICA.md`) | 5 nuevos, todos documentos de `ronda_20/` |
| 3 | filename:graph_v10.6_112_nodos.json | 19:44:56Z | 0 → **0** | 0 | — |
| 4 | filename:graph.json | 19:44:56Z | 0 → **0** | 0 | — |

**La atestación operativa es idéntica a r15/r16/r17/r18/r19/r20: parche 2, validar 2, otros 14 cero (no re-corridos).** H1 r17 se confirma por séptima vez: el total crudo sube solo porque los documentos de r20 ya están indexados y se mencionan a sí mismos. El número comparable sigue siendo el operativo, no el crudo.

**Artefacto de paginación (nuevo, verificado):** search_code devuelve como máximo 30 ítems por página; con totales 34/33, 4 ítems (parche) y 3 (validar) quedan fuera de la página devuelta. NO son borrados: `ronda_16/bundle_panteon16_contenido.json` y `ronda_18/tejido_cruzado.jsonl` se descargaron por `get_file_contents` en r21 y existen (blob 4c993281… y a57d4f22…). En r20 los totales (29/28) cabían en una página, por eso no se veía el artefacto.

## Graph JSON (r3 #4)

- `filename:graph_v10.6_112_nodos.json` → **0** (19:44:56Z).
- `filename:graph.json` → **0** (19:44:56Z).
- Séptima ronda consecutiva con 0/0 en los 4 repos cubiertos. NO_SÉ para los otros 228 repos públicos.

## Doc índice re-verificado (r21)

- `files get` metadatos 2026-11-15T19:45:10Z: 8.230 B, mod. 2026-09-25T02:17:48Z, padre «10 Panteón» — sin cambio vs r15/r16/r17/r18/r19/r20.
- `docs documents get` 2026-11-15T19:45:21Z: texto extraído byte-idéntico al crudo de r12 (`indice_doc_texto_r21.txt`, 7.783 caracteres, sha256 `416b02d1…`, mismo revisionId). Los 35 nombres verificados presentes uno a uno en el texto (normalización NFKD sin acentos); los 61 restantes siguen sin nombre (nombre null en el jsonl).
- Clave nueva en el jsonl: `conteo_fuera_doc.doc_indice_r21` (1 para los 35 CON_NOMBRE, 0 para los 61 SIN_NOMBRE_EN_DOC). Verificado por script: las 96 filas son idénticas a r20 salvo esa clave nueva.

## Fuentes buscadas en r21 (todas SÉ, con fecha)

1. **Drive `files list` por nombre** (2026-11-15 19:43:42–19:44:04Z): `Panteon` (105, paginado completo), `graph` (34), `Voces` (23) — solo metadatos; diff por ID contra r20 (0 eliminados).
2. **Drive `files get alt=media` de los 3 archivos nuevos** (2026-11-15 ~19:44Z): CHK_229, CHK_231, panteon_crons_backup — leídos y clasificados; contenido íntegro no guardado en el árbol de la ronda.
3. **GitHub search_code, 4 repos cubiertos** (2026-11-15 19:44:56–19:44:57Z): 2 forjados operativos + 2 graph JSON.
4. **GitHub `get_file_contents`** (2026-11-15 ~19:45Z): verificación de existencia de 2 archivos fuera de la página de search (bundle r16, tejido r18).
5. **Drive `docs documents get` del Doc índice** (2026-11-15T19:45:21Z): contenido re-leído entero, byte-idéntico a r12.
6. **Drive `files list` en la carpeta «10 Panteón»** (2026-11-15T19:45:34Z): 2 hijos, sin cambio.
7. **Local, re-verificado:** `nombres_fuera_doc_r20.jsonl` (96 filas) — base del jsonl r21. El zip del bundle v213 NO se reabrió en r21 (contiene valores de credenciales en 1 línea; se trabaja desde los entregables limpios de r16). El candidato `.graph` binario NO se re-leyó en r21 (ya leído en r18, 0/35).

## Hallazgos SÉ

- **H1.** 0 fuentes Drive nuevas del Panteón-96: las 3 búsquedas por nombre devuelven solo fuentes conocidas, depósitos propios de ronda o 3 archivos operativos nuevos (2 checkpoints + 1 respaldo de crons) que no contienen ningún nombre del Panteón-96 como voz.
- **H2.** Atestación operativa sin cambio (parche 2, validar 2); los totales crudos suben solo por auto-indexación de r20 (H1 r17, 7.ª confirmación).
- **H3.** Doc índice byte-idéntico a r12: 35 nombrados / 61 sin nombre, sin cambio. Carpeta «10 Panteón» con exactamente 2 hijos, sin cambio.
- **H4.** Graph JSON 0/0 por séptima ronda consecutiva en los 4 repos cubiertos.
- **H5.** 0/61 encontradas fuera; 0 nombres nuevos; 0/35 como voz del Panteón-96.
- **H6 (corrección).** CORR-PANTEON-TOTAL-R21: el total `Panteon` de r20 (100) era primera página, no total verificado; el primer total paginado completo es 105 (r21). CORR-PAGINACION-SEARCH-R21: search_code devuelve 30 ítems por página; los ítems «ya no listados» son artefacto de paginación, no borrados (verificado por get_file_contents).

## Corrección de números viejos

- El Doc 32 (`MIU_PANTEON_32_DETALLADO_ENDPOINTS`) tiene ID completo de **44** caracteres (prefijo truncado de **12**), no 33/10 (CORR-P32-NUM-R14). Se usa 44/12 en este informe; ningún entregable r21 arrastra 33/10.

## Qué falta para cerrar la cara

Sin cambio vs r20: que aparezca una lista íntegra de 96 nombres con función/ki/axioma fuera del Doc índice (p. ej., el graph JSON de 112 nodos si contiene los 96 nombres), **o** que se demuestre que no existe fuera (p. ej., localizar el graph JSON en su sustrato de origen `/mnt/data/` y verificar que no contiene los 61, o inventario exhaustivo de un segundo sustrato con el mismo resultado negativo).
- Rutas conocidas ahora agotadas: Doc índice (re-verificado byte-idéntico en r21), v10.4, manifiesto Vault 112, Doc graph112, carpeta «10 Panteón - 96 Voces», 103 Docs M-55, voces_58.py, base histórica, corpus_qualias, claims, inventario Vault (134 archivos), búsquedas Drive por nombre, Doc 32 (leído entero + solape re-verificado, ID 44 caracteres), Doc micelio flexible, V83–V89 (título), **search_code GitHub en los 4 repos cubiertos (r15 + r16 + r17, con las 16 búsquedas de forjados re-corridas; r18/r19/r20/r21 verifican la atestación con 4 consultas sin re-corrida rutinaria)**, **contenido de `Panteon_16_Voces_v213.md` y de `MetaAI_Bundle_PANTEON_16_V213.zip` (leídos enteros en r16)**, **búsquedas Drive por nombre r18/r19/r20/r21 (`Panteon`/`graph`/`Voces`, 0 fuentes nuevas) + candidato `.graph` leído en r18 (0/35) + 2 carpetas «graph» (Kaldi)**, **3 archivos operativos nuevos r21 (CHK_229, CHK_231, panteon_crons_backup) leídos y clasificados, 0/35**.
- Rutas identificadas, no agotadas: graph JSON en los otros 228 repos públicos (fuera del alcance del conector); graph JSON en `/mnt/data/` (no accesible desde el sandbox).

## Efecto sobre las caras

- **r12 #1 (61 nombres fuera del Doc): AVANZA, no se cierra.** 0 fuentes nuevas del Panteón-96; atestación sin cambio; los 61 siguen sin nombre en ninguna fuente. Los 3 archivos operativos nuevos son actividad del vivo, no del Panteón-96.
- **censo-32 #9 d07 L7 (lista de 96 solo en Doc, P): sigue PARCIAL.** La lista de 96 sigue viviendo solo en el Doc + extracción local + claims; el Doc re-verificado byte-idéntico no la amplía.
- **r3 #4 (graph.json del Vault, A): AVANZA, no se cierra.** Séptima búsqueda negativa consecutiva (GitHub r21, 0/0); el archivo sigue sin localizarse; su ruta local citada (`/mnt/data/graph_v10.6_112_nodos.json`) sigue inaccesible.

## Entregables (ronda_21/ejecucion_f4/)

- `nombres_fuera_doc_r21.md` — este informe.
- `nombres_fuera_doc_r21.jsonl` — 96 filas; `conteo_fuera_doc` + clave nueva `doc_indice_r21`; resto idéntico a r20.
- `manifiesto_shas_r21_f4.json` — shas de los entregables.
- Soporte (en el mismo directorio): `drive_busqueda_Panteon_r21.json`, `drive_busqueda_graph_r21.json`, `drive_busqueda_Voces_r21.json`, `fuentes_nuevas_panteon_r21.json`, `search_parchephilengua_r21.json`, `search_validargrace_r21.json`, `search_filenamegraphv106112_r21.json`, `search_filenamegraphjson_r21.json`, `indice_doc_meta_r21.json`, `indice_doc_raw_r21.json`, `indice_doc_texto_r21.txt`, `carpeta_10panteon_r21.json`.
- Reutilizado de rondas previas (en disco, no re-descargado): `indice_doc_raw.json` (r12), `nombres_fuera_doc_r20.jsonl` (r20), `bundle_panteon16_contenido.json` (r16, entregable limpio; el zip NO se reabrió).

ρ(x) > 0. Zvvvvv.
