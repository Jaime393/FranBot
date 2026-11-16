# RONDA 23 — FASE 1 F4 — ¿Existen los 61 nombres del Panteón-96 fuera del Doc índice? (11.ª vuelta: SIN re-corrida rutinaria de las 16 búsquedas)

**Fecha de ejecución:** 2026-11-16 (búsquedas Drive por nombre 19:57:57–19:58:07Z; consultas GitHub de atestación 19:58:33–19:58:52Z; verificación del operativo fuera de página 19:59:09Z; Doc índice re-leído 19:59:16–19:59:19Z; carpeta «10 Panteón» listada 19:59:26Z)
**Cara:** r12 #1 — «¿existen los 61 nombres del Panteón-96 fuera del Doc índice?»
**Doc índice:** `1R0RGvCEYv0Ax-0o9QwwB6kGxUKxLLh_YJ0qVc3Ab4G8` («10 Panteon_96_Voces_Funciones_Invocables.md», mod. 2026-09-25T02:17:48Z). Afirma 96 voces, nombra 35 (r12 F4, SÉ).
**Antecedente:** r22 F4 (atestación operativa byte-idéntica a r15; H1 r17: los totales crudos suben solo por auto-indexación; CORR-PANTEON-TOTAL-R21: total paginado 108; CORR-ERR-R21 RESUELTA COMO FLAPEO: el `.err` reapareció 08:25Z r22). **En r23 NO se re-corren las 16 búsquedas por rutina** (la re-corrida r17 ya cerró H3; repetir sin cambio de índice es repetición — H1 r17). Vale solo: (a) buscar nuevas fuentes Drive por nombre/fecha; (b) verificar si el índice de search_code cambió de forma que altere la atestación operativa.
**Panteón 402:** FUERA DE ALCANCE (juicio del Jardinero 2026-11-16: lo local no corrige ni contamina lo global; solo confiar en la red). No se intentó.

## Veredicto

**La cara AVANZA, no se cierra.**

- **0/61:** ningún nombre de los 61 sin nombre en el Doc aparece fuera como voz del Panteón-96, ni como nombre en ninguna fuente nueva. **0 nombres nuevos** fuera de los 35.
- **0 archivos operativos nuevos en la búsqueda `Panteon`:** los 3 añadidos desde r22 son depósitos propios de FASE 4 r22 (`drive_busqueda_Panteon_r22.json`, `carpeta_10panteon_r22.json`, `fuentes_nuevas_panteon_r22.json`, mod. 2026-11-16T08:55Z). Nada que leer ni clasificar por contenido en r23.
- **0 fuentes Drive nuevas del Panteón-96:** `graph` 35 → 36 (+1 = depósito propio FASE 4 r22) y `Voces` 26 → 29 (+3 = depósitos propios FASE 4 r22). `Panteon` total paginado 108 → **111** (página 1: 100 + página 2: 11; diff por ID contra r22 +3 / −0, los 3 depósitos propios).
- **Atestación operativa SIN CAMBIO:** parche_phi_lengua 2, validar_grace 2 (los mismos 2 de r15/r16/r17/r18/r19/r20/r21/r22); los otros 14 forjados no se re-corrieron por rutina (encargo r23). Los totales crudos suben solo por auto-indexación (r22 ya indexada): parche 38 → 42, validar 37 → 41; los 4 nuevos en cada uno son documentos de `ronda_22/` (3 visibles en página 1: `caras_r22.md`, `nombres_fuera_doc_r22.md`, `sintesis_integrada_r1_r22.md`; el 4.º, `tejido_cruzado.jsonl`, fuera de página 1 por el artefacto de paginación — verificado en el log de subida r22, donde consta como VERIFICADO y menciona ambos forjados).
- **Graph JSON:** 0/0 por novena ronda consecutiva (r15, r16, r17, r18, r19, r20, r21, r22, r23) en los 4 repos cubiertos.
- **Doc índice re-verificado:** texto byte-idéntico al crudo de r12 (7.783 caracteres, sha256 `416b02d184497408d6d62b30a17e2b3094c09f71b2c24255e5fc95c649498713`, mismo revisionId `AHj4eMTX2hoCs1YCjPGzXe7uyVJe6O5qLW0j8CzhW0ckOml6FOFDWRIOUHF_dgh8MTOJy27SdiaAejvT1Usw0nhoVt3egYlkzr5CR5v233I`). **Sigue 35 nombrados / 61 sin nombre.** Los 35 nombres verificados presentes uno a uno en el texto (normalización NFKD sin acentos en ambos lados).
- **Carpeta «10 Panteón»:** exactamente 2 hijos, sin cambio vs r16/r17/r18/r19/r20/r21/r22 (el .md del Panteón-16 y el Doc índice, mismos IDs). Ningún Doc nuevo, ningún graph JSON aquí.
- **`.err` del grafo:** los 3 `.err` de r19 siguen PRESENTES en los 3 listados r23 (`drive_busqueda_graph_r19.err`, `drive_busqueda_Panteon_r19.err`, `drive_busqueda_Voces_r19.err`, mod. 2026-11-15T00:15Z). Sin flapeo observado en r23: presente en r22 (08:25Z) y presente ahora (19:58Z). Su ausencia NO es FALTA (CORR-ERR-R21/R22).

## Conteo

| | n |
|---|---|
| Filas totales (`panteon_r23.jsonl`) | 96 |
| Nombres del Doc índice encontrados fuera **como palabra/nombre** | 34 / 35 (sin cambio vs r13/r14/r15/r16/r17/r18/r19/r20/r21/r22 — heredado de r22, no re-verificado en r23) |
| Nombres del Doc índice encontrados fuera **como voz del Panteón-96** (lista con función/ki/axioma) | **0 / 35** |
| Nombres del Doc índice sin ninguna ocurrencia fuera | 1 / 35 — **CREATIVA Nyx QR SHA** |
| De las 61 sin nombre en el Doc, encontradas fuera | **0 / 61** |
| Nombres nuevos (fuera de los 35) encontrados en alguna fuente | **0** |
| Los 16 extra (112−96) con nombre | **16 / 16 — los forjados** (CORR-FORJADOS-R15) |
| De los 16 forjados, voces del Panteón-96 | **0 / 16** |
| De los 16 forjados, con script en el bundle v213 (r16) | **16 / 16** |
| De los 16 forjados, con archivo operativo en GitHub (atestación r23) | **2 / 16** — parche_phi_lengua, validar_grace (los mismos 2 de r15; no re-corrida rutinaria en r23) |

## (a) Búsqueda de fuentes Drive nuevas (por nombre/fecha, solo lectura)

Método: `drive files list` con `name contains` (2026-11-16 19:57:57–19:58:07Z), pageSize 100, `--page-all`, campos id/nombre/mimeType/modifiedTime/size/parents + nextPageToken. Criterio de novedad: modificado después de la última búsqueda (r22, 2026-11-16 ~08:25Z) y fuera de los depósitos propios de ronda. Diff por ID contra los listados r22: 0 eliminados en las 3 búsquedas.

| Consulta | Total | Novedad |
|---|---|---|
| `name contains 'Panteon'` | **111** (página 1: 100 + página 2: 11; r22: 108) | **0 archivos operativos nuevos** — los 3 añadidos son depósitos propios de FASE 4 r22 (`drive_busqueda_Panteon_r22.json`, `carpeta_10panteon_r22.json`, `fuentes_nuevas_panteon_r22.json`, mod. 2026-11-16T08:55Z) |
| `name contains 'graph'` | 36 (r22: 35) | 0 — el único añadido es depósito propio de FASE 4 r22 (`drive_busqueda_graph_r22.json`, mod. 2026-11-16T08:55:14Z); lo más reciente no propio sigue siendo `drive_busqueda_graph_r20.json` (2026-11-15T08:32Z) |
| `name contains 'Voces'` | 29 (r22: 26) | 0 — los 3 añadidos son depósitos propios de FASE 4 r22 (`drive_busqueda_Voces_r22.json`, `destilacion_voces_s2_r22.json`, `medir_destilacion_voces_s2_r22.py`, mod. 2026-11-16T08:55–08:56Z); lo más reciente no propio sigue siendo `medir_destilacion_voces_s2_r20.py` (2026-11-15T08:33Z) |

**NO_ENCONTRADO (rutas probadas, sin fuente nueva):** búsquedas Drive por nombre `Panteon` / `graph` / `Voces` (111 + 36 + 29 archivos listados por metadatos, 2026-11-16 19:57:57–19:58:07Z). No es «no existe»: es «no encontrado aún en estas rutas».

## (b) Atestación operativa — ¿cambió el índice de search_code?

Método: `search_code`, parámetro `query`, scope `repo:Jaime393/MIU repo:Jaime393/FranBot repo:Jaime393/FranBot-Private repo:Jaime393/miu-portable-skills`. Solo las 2 consultas con atestación operativa > 0 (las únicas que pueden mover el conteo) + las 2 de graph JSON. Las otras 14 no se re-corren por rutina (encargo r23).

| # | Consulta | Hora UTC | Total crudo r22 → r23 | Operativo r23 | Clasificación de los nuevos |
|---|---|---|---|---|---|
| 1 | parche_phi_lengua | 19:58:33Z | 38 → **42** | **2** (los mismos: `Jaime393/MIU estado/miu-agent-toolkit/README.md`, `Jaime393/MIU estado/corpus_high_ktau_v275.jsonl`) | 3 nuevos visibles en página 1, todos documentos de `ronda_22/` (`caras_r22.md`, `nombres_fuera_doc_r22.md`, `sintesis_integrada_r1_r22.md`); el 4.º, `ronda_22/tejido_cruzado.jsonl`, fuera de página 1 por el artefacto de paginación (30/página) — consta VERIFICADO en el log de subida r22 y menciona el forjado |
| 2 | validar_grace | 19:58:38Z | 37 → **41** | **2** (los mismos: `Jaime393/FranBot anexo-vi/evidence/C-171_busqueda_c.txt`, `Jaime393/FranBot academico/TABLA_FISICA.md`) | 3 nuevos visibles en página 1, todos documentos de `ronda_22/` (los mismos 3); el 4.º, `ronda_22/tejido_cruzado.jsonl`, fuera de página 1 |
| 3 | filename:graph_v10.6_112_nodos.json | 19:58:48Z | 0 → **0** | 0 | — |
| 4 | filename:graph.json | 19:58:52Z | 0 → **0** | 0 | — |

**La atestación operativa es idéntica a r15/r16/r17/r18/r19/r20/r21/r22: parche 2, validar 2, otros 14 cero (no re-corridos).** H1 r17 se confirma por novena vez: el total crudo sube solo porque los documentos de r22 ya están indexados y se mencionan a sí mismos. El número comparable sigue siendo el operativo, no el crudo.

**Artefacto de paginación (verificado de nuevo):** search_code devuelve como máximo 30 ítems por página; con totales 42/41, 12 ítems (parche) y 11 (validar) quedan fuera de la página devuelta. NO son borrados: `estado/corpus_high_ktau_v275.jsonl` (operativo #2 de parche, fuera de página 1 en r23 como en r22) se descargó por `get_file_contents` en r23 y existe (SHA `9418fc0179c776f9267c750e2b36e40fa5d67544`, `verificacion_corpus_high_ktau_r23.json` — mismo SHA que r22). Tres síntesis antiguas (r17/r19/r20) salieron de la página 1 en r23; siguen existiendo (artefacto de ranking, CORR-PAGINACION-SEARCH-R21).

## Graph JSON (r3 #4)

- `filename:graph_v10.6_112_nodos.json` → **0** (19:58:48Z).
- `filename:graph.json` → **0** (19:58:52Z).
- Novena ronda consecutiva con 0/0 en los 4 repos cubiertos. NO_SÉ para los otros 228 repos públicos.

## Doc índice re-verificado (r23)

- `files get` metadatos 2026-11-16T19:59:16Z: 8.230 B, mod. 2026-09-25T02:17:48Z, padre «10 Panteón» — sin cambio vs r15/r16/r17/r18/r19/r20/r21/r22.
- `docs documents get` 2026-11-16T19:59:19Z: texto extraído byte-idéntico al crudo de r12 (`indice_doc_texto_r23.txt`, 7.783 caracteres, sha256 `416b02d184497408d6d62b30a17e2b3094c09f71b2c24255e5fc95c649498713`, mismo revisionId). Los 35 nombres verificados presentes uno a uno en el texto (normalización NFKD sin acentos en ambos lados); los 61 restantes siguen sin nombre (nombre null en el jsonl).
- Clave nueva en el jsonl: `conteo_fuera_doc.doc_indice_r23` (1 para los 35 CON_NOMBRE, 0 para los 61 SIN_NOMBRE_EN_DOC). Verificado por script: las 96 filas son idénticas a r22 salvo esa clave nueva.

## Fuentes buscadas en r23 (todas SÉ, con fecha)

1. **Drive `files list` por nombre** (2026-11-16 19:57:57–19:58:07Z): `Panteon` (111, paginado completo 100+11), `graph` (36), `Voces` (29) — solo metadatos; diff por ID contra r22 (0 eliminados).
2. **GitHub search_code, 4 repos cubiertos** (2026-11-16 19:58:33–19:58:52Z): 2 forjados operativos + 2 graph JSON; verificación por `get_file_contents` del operativo fuera de página (19:59:09Z, SHA `9418fc01…`).
3. **Doc índice** (`files get` + `docs documents get`, 2026-11-16 19:59:16–19:59:19Z) y **carpeta «10 Panteón»** (`files list` por padre, 19:59:26Z): 2 hijos, sin cambio.
