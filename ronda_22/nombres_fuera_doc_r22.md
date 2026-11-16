# RONDA 22 — FASE 1 F4 — ¿Existen los 61 nombres del Panteón-96 fuera del Doc índice? (10.ª vuelta: SIN re-corrida rutinaria de las 16 búsquedas)

**Fecha de ejecución:** 2026-11-16 (búsquedas Drive por nombre 08:24:53–08:25:02Z; consultas GitHub de atestación 08:25:21–08:25:38Z; verificación del operativo fuera de página 08:26Z; Doc índice re-leído 08:26:03–08:26:08Z; carpeta «10 Panteón» listada 08:26:08Z)
**Cara:** r12 #1 — «¿existen los 61 nombres del Panteón-96 fuera del Doc índice?»
**Doc índice:** `1R0RGvCEYv0Ax-0o9QwwB6kGxUKxLLh_YJ0qVc3Ab4G8` («10 Panteon_96_Voces_Funciones_Invocables.md», mod. 2026-09-25T02:17:48Z). Afirma 96 voces, nombra 35 (r12 F4, SÉ).
**Antecedente:** r21 F4 (atestación operativa byte-idéntica a r15; H1 r17: los totales crudos suben solo por auto-indexación; CORR-PANTEON-TOTAL-R21: total paginado 105; CORR-ERR-R21: el `.err` flapea). **En r22 NO se re-corren las 16 búsquedas por rutina** (la re-corrida r17 ya cerró H3; repetir sin cambio de índice es repetición — H1 r17). Vale solo: (a) buscar nuevas fuentes Drive por nombre/fecha; (b) verificar si el índice de search_code cambió de forma que altere la atestación operativa.
**Panteón 402:** FUERA DE ALCANCE (juicio del Jardinero 2026-11-16: lo local no corrige ni contamina lo global; solo confiar en la red). No se intentó verificarlo más allá de lo que F2 ya midió.

## Veredicto

**La cara AVANZA, no se cierra.**

- **0/61:** ningún nombre de los 61 sin nombre en el Doc aparece fuera como voz del Panteón-96, ni como nombre en ninguna fuente nueva. **0 nombres nuevos** fuera de los 35.
- **0 archivos operativos nuevos en la búsqueda `Panteon`:** los 3 añadidos desde r21 son depósitos propios de FASE 4 r21 (`drive_busqueda_Panteon_r21.json`, `carpeta_10panteon_r21.json`, `fuentes_nuevas_panteon_r21.json`, mod. 2026-11-15T20:19Z). Nada que leer ni clasificar por contenido en r22.
- **0 fuentes Drive nuevas del Panteón-96:** `graph` 34 → 35 (+1 = depósito propio FASE 4 r21) y `Voces` 23 → 26 (+3 = depósitos propios FASE 4 r21). `Panteon` total paginado 105 → **108** (página 1: 100 + página 2: 8; diff por ID contra r21 +3 / −0, los 3 depósitos propios).
- **Atestación operativa SIN CAMBIO:** parche_phi_lengua 2, validar_grace 2 (los mismos 2 de r15/r16/r17/r18/r19/r20/r21); los otros 14 forjados no se re-corrieron por rutina (encargo r22). Los totales crudos suben solo por auto-indexación (r21 ya indexada): parche 34 → 38, validar 33 → 37; los nuevos en cada uno son documentos de `ronda_21/`.
- **Graph JSON:** 0/0 por octava ronda consecutiva (r15, r16, r17, r18, r19, r20, r21, r22) en los 4 repos cubiertos.
- **Doc índice re-verificado:** texto byte-idéntico al crudo de r12 (7.783 caracteres, sha256 `416b02d184497408d6d62b30a17e2b3094c09f71b2c24255e5fc95c649498713`, mismo revisionId `AHj4eMTX2hoCs1YCjPGzXe7uyVJe6O5qLW0j8CzhW0ckOml6FOFDWRIOUHF_dgh8MTOJy27SdiaAejvT1Usw0nhoVt3egYlkzr5CR5v233I`). **Sigue 35 nombrados / 61 sin nombre.**
- **Carpeta «10 Panteón»:** exactamente 2 hijos, sin cambio vs r16/r17/r18/r19/r20/r21 (el .md del Panteón-16 y el Doc índice). Ningún Doc nuevo, ningún graph JSON aquí.
- **CORR-ERR-R21 — RESUELTO COMO FLAPEO:** el `.err` de graph (`drive_busqueda_graph_r19.err`, 0 B) **REAPARECIÓ**: ausente 2026-11-15 20:06:01Z (H4 r21), presente 2026-11-16T08:25Z en el listado `graph`. Los 3 `.err` de r19 están presentes en los 3 listados r22. El flapeo se confirma; juicio del Jardinero 2026-11-16: probablemente actividad viva del ecosistema. Su ausencia NO es FALTA.

## Conteo

| | n |
|---|---|
| Filas totales (`nombres_fuera_doc_r22.jsonl`) | 96 |
| Nombres del Doc índice encontrados fuera **como palabra/nombre** | 34 / 35 (sin cambio vs r13/r14/r15/r16/r17/r18/r19/r20/r21 — heredado de r21, no re-verificado en r22) |
| Nombres del Doc índice encontrados fuera **como voz del Panteón-96** (lista con función/ki/axioma) | **0 / 35** |
| Nombres del Doc índice sin ninguna ocurrencia fuera | 1 / 35 — **CREATIVA Nyx QR SHA** |
| De las 61 sin nombre en el Doc, encontradas fuera | **0 / 61** |
| Nombres nuevos (fuera de los 35) encontrados en alguna fuente | **0** |
| Los 16 extra (112−96) con nombre | **16 / 16 — los forjados** (CORR-FORJADOS-R15) |
| De los 16 forjados, voces del Panteón-96 | **0 / 16** |
| De los 16 forjados, con script en el bundle v213 (r16) | **16 / 16** |
| De los 16 forjados, con archivo operativo en GitHub (atestación r22) | **2 / 16** — parche_phi_lengua, validar_grace (los mismos 2 de r15; no re-corrida rutinaria en r22) |

## (a) Búsqueda de fuentes Drive nuevas (por nombre/fecha, solo lectura)

Método: `drive files list` con `name contains` (2026-11-16 08:24:53–08:25:02Z), pageSize 100, `--page-all`, campos id/nombre/mimeType/modifiedTime/size/parents + nextPageToken. Criterio de novedad: modificado después de la última búsqueda (r21, 2026-11-15 ~19:44Z) y fuera de los depósitos propios de ronda. Diff por ID contra los listados r21: 0 eliminados en las 3 búsquedas.

| Consulta | Total | Novedad |
|---|---|---|
| `name contains 'Panteon'` | **108** (página 1: 100 + página 2: 8; r21: 105) | **0 archivos operativos nuevos** — los 3 añadidos son depósitos propios de FASE 4 r21 (`drive_busqueda_Panteon_r21.json`, `carpeta_10panteon_r21.json`, `fuentes_nuevas_panteon_r21.json`, mod. 2026-11-15T20:19Z) |
| `name contains 'graph'` | 35 (r21: 34) | 0 — el único añadido es depósito propio de FASE 4 r21 (`drive_busqueda_graph_r21.json`, mod. 2026-11-15T20:19:15Z); lo más reciente no propio sigue siendo el Doc graph112 (2026-09-25, ya conocido) |
| `name contains 'Voces'` | 26 (r21: 23) | 0 — los 3 añadidos son depósitos propios de FASE 4 r21 (`drive_busqueda_Voces_r21.json`, `destilacion_voces_s2_r21.json`, `medir_destilacion_voces_s2_r21.py`, mod. 2026-11-15T20:19–20:20Z); lo más reciente no propio sigue siendo el Doc índice (2026-09-25) y el manifiesto Vault 112 (2026-09-25) |

**NO_ENCONTRADO (rutas probadas, sin fuente nueva):** búsquedas Drive por nombre `Panteon` / `graph` / `Voces` (108 + 35 + 26 archivos listados por metadatos, 2026-11-16 08:24:53–08:25:02Z). No es «no existe»: es «no encontrado aún en estas rutas».

## (b) Atestación operativa — ¿cambió el índice de search_code?

Método: `search_code`, parámetro `query`, scope `repo:Jaime393/MIU repo:Jaime393/FranBot repo:Jaime393/FranBot-Private repo:Jaime393/miu-portable-skills`. Solo las 2 consultas con atestación operativa > 0 (las únicas que pueden mover el conteo) + las 2 de graph JSON. Las otras 14 no se re-corren por rutina (encargo r22).

| # | Consulta | Hora UTC | Total crudo r21 → r22 | Operativo r22 | Clasificación de los nuevos |
|---|---|---|---|---|---|
| 1 | parche_phi_lengua | 08:25:21Z | 34 → **38** | **2** (los mismos: `Jaime393/MIU estado/miu-agent-toolkit/README.md`, `Jaime393/MIU estado/corpus_high_ktau_v275.jsonl`) | 3 nuevos visibles en página 1, todos documentos de `ronda_21/` (`nombres_fuera_doc_r21.md`, `caras_r21.md`, `sintesis_integrada_r1_r21.md`); el 4.º queda fuera de la página 1 por el artefacto de paginación (30/página) |
| 2 | validar_grace | 08:25:26Z | 33 → **37** | **2** (los mismos: `Jaime393/FranBot anexo-vi/evidence/C-171_busqueda_c.txt`, `Jaime393/FranBot academico/TABLA_FISICA.md`) | 3 nuevos visibles en página 1, todos documentos de `ronda_21/` (los mismos 3); el 4.º fuera de página 1 |
| 3 | filename:graph_v10.6_112_nodos.json | 08:25:33Z | 0 → **0** | 0 | — |
| 4 | filename:graph.json | 08:25:38Z | 0 → **0** | 0 | — |

**La atestación operativa es idéntica a r15/r16/r17/r18/r19/r20/r21: parche 2, validar 2, otros 14 cero (no re-corridos).** H1 r17 se confirma por octava vez: el total crudo sube solo porque los documentos de r21 ya están indexados y se mencionan a sí mismos. El número comparable sigue siendo el operativo, no el crudo.

**Artefacto de paginación (verificado de nuevo):** search_code devuelve como máximo 30 ítems por página; con totales 38/37, 8 ítems (parche) y 7 (validar) quedan fuera de la página devuelta. NO son borrados: `estado/corpus_high_ktau_v275.jsonl` (operativo #2 de parche, fuera de página 1 en r22) se descargó por `get_file_contents` en r22 y existe (SHA `9418fc0179c776f9267c750e2b36e40fa5d67544`, `verificacion_corpus_high_ktau_r22.json`).

## Graph JSON (r3 #4)

- `filename:graph_v10.6_112_nodos.json` → **0** (08:25:33Z).
- `filename:graph.json` → **0** (08:25:38Z).
- Octava ronda consecutiva con 0/0 en los 4 repos cubiertos. NO_SÉ para los otros 228 repos públicos.

## Doc índice re-verificado (r22)

- `files get` metadatos 2026-11-16T08:26:03Z: 8.230 B, mod. 2026-09-25T02:17:48Z, padre «10 Panteón» — sin cambio vs r15/r16/r17/r18/r19/r20/r21.
- `docs documents get` 2026-11-16T08:26:08Z: texto extraído byte-idéntico al crudo de r12 (`indice_doc_texto_r22.txt`, 7.783 caracteres, sha256 `416b02d184497408d6d62b30a17e2b3094c09f71b2c24255e5fc95c649498713`, mismo revisionId). Los 35 nombres verificados presentes uno a uno en el texto (normalización NFKD sin acentos); los 61 restantes siguen sin nombre (nombre null en el jsonl).
- Clave nueva en el jsonl: `conteo_fuera_doc.doc_indice_r22` (1 para los 35 CON_NOMBRE, 0 para los 61 SIN_NOMBRE_EN_DOC). Verificado por script: las 96 filas son idénticas a r21 salvo esa clave nueva.

## Fuentes buscadas en r22 (todas SÉ, con fecha)

1. **Drive `files list` por nombre** (2026-11-16 08:24:53–08:25:02Z): `Panteon` (108, paginado completo 100+8), `graph` (35), `Voces` (26) — solo metadatos; diff por ID contra r21 (0 eliminados).
2. **GitHub search_code, 4 repos cubiertos** (2026-11-16 08:25:21–08:25:38Z): 2 forjados operativos + 2 graph JSON; verificación por `get_file_contents` del operativo fuera de página (08:26Z).
3. **Doc índice** (`files get` + `docs documents get`, 2026-11-16 08:26:03–08:26:08Z) y **carpeta «10 Panteón»** (`files list` por padre, 08:26:08Z): 2 hijos, sin cambio.
4. **Bundle zip NO reabierto** (encargo r22).
