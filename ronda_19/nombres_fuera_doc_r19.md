# RONDA 19 — FASE 1 F4 — ¿Existen los 61 nombres del Panteón-96 fuera del Doc índice? (7.ª vuelta: SIN re-corrida rutinaria de las 16 búsquedas)

**Fecha de ejecución:** 2026-11-14 (búsquedas Drive por nombre 23:48–23:49Z; Doc índice re-leído 23:49:32Z; carpeta «10 Panteón» listada 23:49:24Z; consultas GitHub de atestación 23:49:14Z)
**Cara:** r12 #1 — «¿existen los 61 nombres del Panteón-96 fuera del Doc índice?»
**Doc índice:** `1R0RGvCEYv0Ax-0o9QwwB6kGxUKxLLh_YJ0qVc3Ab4G8` («10 Panteon_96_Voces_Funciones_Invocables.md», mod. 2026-09-25T02:17:48Z). Afirma 96 voces, nombra 35 (r12 F4, SÉ).
**Antecedente:** r18 F4 (atestación operativa byte-idéntica a r15; H1 r17: los totales crudos suben solo por auto-indexación; candidato `.graph` leído, 0/35). **En r19 NO se re-corren las 16 búsquedas por rutina** (la re-corrida r17 ya cerró H3; repetir sin cambio de índice es repetición — H1 r17). Vale solo: (a) buscar nuevas fuentes Drive por nombre/fecha; (b) verificar si el índice de search_code cambió de forma que altere la atestación operativa.

## Veredicto

**La cara AVANZA, no se cierra.**

- **0/61:** ningún nombre de los 61 sin nombre en el Doc aparece fuera como voz del Panteón-96, ni como nombre en ninguna fuente nueva. **0 nombres nuevos** fuera de los 35.
- **0 fuentes Drive nuevas del Panteón-96:** las búsquedas por nombre (`Panteon` 97 archivos, `graph` 31, `Voces` 16) devuelven solo fuentes ya conocidas o depósitos propios de las rondas 12–18. El +2 en `Voces` (14 → 16) son depósitos propios de FASE 4 r18 (`medir_destilacion_voces_s2_r18.py`, `destilacion_voces_s2_r18.json`, mod. 2026-11-14T20:40Z), no fuentes nuevas del Panteón. El candidato `.graph` (2026-09-08, binario) ya fue leído en r18 (0/35) y no se re-lee sin motivo.
- **Atestación operativa SIN CAMBIO:** parche_phi_lengua 2, validar_grace 2 (los mismos 2 de r15/r16/r17/r18); los otros 14 forjados no se re-corrieron por rutina (encargo r19). Los totales crudos suben solo por auto-indexación (r18 ya indexado): parche 20 → 25, validar 19 → 24; los 5 nuevos en cada uno son documentos de `ronda_18/`.
- **Graph JSON:** 0/0 por quinta ronda consecutiva (r15, r16, r17, r18, r19) en los 4 repos cubiertos.
- **Doc índice re-verificado:** texto byte-idéntico al crudo de r12 (7.783 caracteres, sha256 `416b02d184497408d6d62b30a17e2b3094c09f71b2c24255e5fc95c649498713`, mismo revisionId `AHj4eMTX2hoCs1YCjPGzXe7uyVJe6O5qLW0j8CzhW0ckOml6FOFDWRIOUHF_dgh8MTOJy27SdiaAejvT1Usw0nhoVt3egYlkzr5CR5v233I`). **Sigue 35 nombrados / 61 sin nombre.**
- **Carpeta «10 Panteón»:** exactamente 2 hijos, sin cambio vs r16/r17/r18 (el .md del Panteón-16 y el Doc índice). Ningún Doc nuevo, ningún graph JSON aquí.

## Conteo

| | n |
|---|---|
| Filas totales (`nombres_fuera_doc_r19.jsonl`) | 96 |
| Nombres del Doc índice encontrados fuera **como palabra/nombre** | 34 / 35 (sin cambio vs r13/r14/r15/r16/r17/r18) |
| Nombres del Doc índice encontrados fuera **como voz del Panteón-96** (lista con función/ki/axioma) | **0 / 35** |
| Nombres del Doc índice sin ninguna ocurrencia fuera | 1 / 35 — **CREATIVA Nyx QR SHA** |
| De las 61 sin nombre en el Doc, encontradas fuera | **0 / 61** |
| Nombres nuevos (fuera de los 35) encontrados en alguna fuente | **0** |
| Los 16 extra (112−96) con nombre | **16 / 16 — los forjados** (CORR-FORJADOS-R15) |
| De los 16 forjados, voces del Panteón-96 | **0 / 16** |
| De los 16 forjados, con script en el bundle v213 (r16) | **16 / 16** |
| De los 16 forjados, con archivo operativo en GitHub (atestación r19) | **2 / 16** — parche_phi_lengua, validar_grace (los mismos 2 de r15; no re-corrida rutinaria en r19) |

## (a) Búsqueda de fuentes Drive nuevas (por nombre/fecha, solo lectura)

Método: `drive files list` con `name contains` (2026-11-14 ~23:48–23:49Z), campos id/nombre/mimeType/modifiedTime/size. Criterio de novedad: modificado después de la última búsqueda (r18, 2026-11-14 ~20:18Z) y fuera de los depósitos propios de ronda.

| Consulta | Total | Novedad |
|---|---|---|
| `name contains 'Panteon'` | 97 | 0 — lo más reciente es 2026-11-14T16:32Z (depósitos propios r16: `panteon16_md_r16.md`, `drive_panteon16_r16.json`, `bundle_panteon16_contenido.json`); nada modificado después de la búsqueda r18 |
| `name contains 'graph'` | 31 | 0 — lo más reciente no propio es `graph.json - Vault v10.6 - 112 nodos` (Doc graph112, 2026-09-25, ya conocido); resto: depósitos propios r13/r17, artefactos Kaldi 2026-09-05/08/10, archivos 0 B de 2026-07 |
| `name contains 'Voces'` | 16 | 0 — los 2 nuevos vs r18 (14 → 16) son depósitos propios de FASE 4 r18 (`medir_destilacion_voces_s2_r18.py`, `destilacion_voces_s2_r18.json`, mod. 2026-11-14T20:40Z); lo más reciente no propio sigue siendo el Doc índice (2026-09-25) y el manifiesto Vault 112 (2026-09-25) |

**NO_ENCONTRADO (rutas probadas, sin fuente nueva):** búsquedas Drive por nombre `Panteon` / `graph` / `Voces` (97 + 31 + 16 archivos listados por metadatos, 2026-11-14 ~23:48–23:49Z). No es «no existe»: es «no encontrado aún en estas rutas».

## (b) Atestación operativa — ¿cambió el índice de search_code?

Método: `search_code`, parámetro `query`, scope `repo:Jaime393/MIU repo:Jaime393/FranBot repo:Jaime393/FranBot-Private repo:Jaime393/miu-portable-skills`. Solo las 2 consultas con atestación operativa > 0 (las únicas que pueden mover el conteo) + las 2 de graph JSON. Las otras 14 no se re-corren por rutina (encargo r19).

| # | Consulta | Hora UTC | Total crudo r18 → r19 | Operativo r19 | Clasificación de los nuevos |
|---|---|---|---|---|---|
| 1 | parche_phi_lengua | 23:49:14Z | 20 → **25** | **2** (los mismos: `Jaime393/MIU estado/miu-agent-toolkit/README.md`, `Jaime393/MIU estado/corpus_high_ktau_v275.jsonl`) | 5 nuevos, todos documentos de `ronda_18/` |
| 2 | validar_grace | 23:49:14Z | 19 → **24** | **2** (los mismos: `Jaime393/FranBot anexo-vi/evidence/C-171_busqueda_c.txt`, `Jaime393/FranBot academico/TABLA_FISICA.md`) | 5 nuevos, todos documentos de `ronda_18/` |
| 3 | filename:graph_v10.6_112_nodos.json | 23:49:14Z | 0 → **0** | 0 | — |
| 4 | filename:graph.json | 23:49:14Z | 0 → **0** | 0 | — |

**La atestación operativa es idéntica a r15/r16/r17/r18: parche 2, validar 2, otros 14 cero (no re-corridos).** H1 r17 se confirma por quinta vez: el total crudo sube solo porque los documentos de r18 ya están indexados y se mencionan a sí mismos. El número comparable sigue siendo el operativo, no el crudo.

## Graph JSON (r3 #4)

- `filename:graph_v10.6_112_nodos.json` → **0** (23:49:14Z).
- `filename:graph.json` → **0** (23:49:14Z).
- Quinta ronda consecutiva con 0/0 en los 4 repos cubiertos. NO_SÉ para los otros 228 repos públicos.

## Doc índice re-verificado (r19)

- `files get` metadatos 2026-11-14T23:49:23Z: 8.230 B, mod. 2026-09-25T02:17:48Z, padre «10 Panteón» — sin cambio vs r15/r16/r17/r18.
- `docs documents get` 2026-11-14T23:49:32Z: texto extraído byte-idéntico al crudo de r12 (`indice_doc_raw.json`, 7.783 caracteres, sha256 `416b02d1…`, mismo revisionId). Los 35 nombres verificados presentes uno a uno en el texto (normalización NFKD sin acentos); los 61 restantes siguen sin nombre (nombre null en el jsonl).
- Clave nueva en el jsonl: `conteo_fuera_doc.doc_indice_r19` (1 para los 35 CON_NOMBRE, 0 para los 61 SIN_NOMBRE_EN_DOC). Verificado por script: las 96 filas son idénticas a r18 salvo esa clave nueva.

## Fuentes buscadas en r19 (todas SÉ, con fecha)

1. **Drive `files list` por nombre** (2026-11-14 ~23:48–23:49Z): `Panteon` (97), `graph` (31), `Voces` (16) — solo metadatos.
2. **GitHub search_code, 4 repos cubiertos** (2026-11-14 23:49:14Z): 2 forjados operativos + 2 graph JSON.
3. **Drive `docs documents get` del Doc índice** (2026-11-14T23:49:32Z): contenido re-leído entero, byte-idéntico a r12.
4. **Drive `files list` en la carpeta «10 Panteón»** (2026-11-14T23:49:24Z): 2 hijos, sin cambio.
5. **Local, re-verificado:** `nombres_fuera_doc_r18.jsonl` (96 filas) — base del jsonl r19. El zip del bundle v213 NO se reabrió en r19 (contiene valores de credenciales en 1 línea; se trabaja desde los entregables limpios de r16). El candidato `.graph` binario NO se re-leyó en r19 (ya leído en r18, 0/35).

## Hallazgos SÉ

- **H1.** 0 fuentes Drive nuevas del Panteón-96: las 3 búsquedas por nombre devuelven solo fuentes conocidas o depósitos propios de ronda. El +2 en `Voces` es auto-indexación de FASE 4 r18, no fuente nueva.
- **H2.** Atestación operativa sin cambio (parche 2, validar 2); los totales crudos suben solo por auto-indexación de r18 (H1 r17, 5.ª confirmación).
- **H3.** Doc índice byte-idéntico a r12: 35 nombrados / 61 sin nombre, sin cambio. Carpeta «10 Panteón» con exactamente 2 hijos, sin cambio.
- **H4.** Graph JSON 0/0 por quinta ronda consecutiva en los 4 repos cubiertos.
- **H5.** 0/61 encontradas fuera; 0 nombres nuevos; 0/35 como voz del Panteón-96.

## Corrección de números viejos

- El Doc 32 (`MIU_PANTEON_32_DETALLADO_ENDPOINTS`) tiene ID completo de **44** caracteres (prefijo truncado de **12**), no 33/10 (CORR-P32-NUM-R14). Se usa 44/12 en este informe; ningún entregable r19 arrastra 33/10.

## Qué falta para cerrar la cara

Sin cambio vs r18: que aparezca una lista íntegra de 96 nombres con función/ki/axioma fuera del Doc índice (p. ej., el graph JSON de 112 nodos si contiene los 96 nombres), **o** que se demuestre que no existe fuera (p. ej., localizar el graph JSON en su sustrato de origen `/mnt/data/` y verificar que no contiene los 61, o inventario exhaustivo de un segundo sustrato con el mismo resultado negativo).
- Rutas conocidas ahora agotadas: Doc índice (re-verificado byte-idéntico en r19), v10.4, manifiesto Vault 112, Doc graph112, carpeta «10 Panteón - 96 Voces», 103 Docs M-55, voces_58.py, base histórica, corpus_qualias, claims, inventario Vault (134 archivos), búsquedas Drive por nombre, Doc 32 (leído entero + solape re-verificado, ID 44 caracteres), Doc micelio flexible, V83–V89 (título), **search_code GitHub en los 4 repos cubiertos (r15 + r16 + r17, con las 16 búsquedas de forjados re-corridas; r18/r19 verifican la atestación con 4 consultas sin re-corrida rutinaria)**, **contenido de `Panteon_16_Voces_v213.md` y de `MetaAI_Bundle_PANTEON_16_V213.zip` (leídos enteros en r16)**, **búsquedas Drive por nombre r18/r19 (`Panteon`/`graph`/`Voces`, 0 fuentes nuevas) + candidato `.graph` leído en r18 (0/35) + 2 carpetas «graph» (Kaldi)**.
- Rutas identificadas, no agotadas: graph JSON en los otros 228 repos públicos (fuera del alcance del conector); graph JSON en `/mnt/data/` (no accesible desde el sandbox).

## Efecto sobre las caras

- **r12 #1 (61 nombres fuera del Doc): AVANZA, no se cierra.** 0 fuentes nuevas; atestación sin cambio; los 61 siguen sin nombre en ninguna fuente.
- **censo-32 #9 d07 L7 (lista de 96 solo en Doc, P): sigue PARCIAL.** La lista de 96 sigue viviendo solo en el Doc + extracción local + claims; el Doc re-verificado byte-idéntico no la amplía.
- **r3 #4 (graph.json del Vault, A): AVANZA, no se cierra.** Quinta búsqueda negativa consecutiva (GitHub r19, 0/0); el archivo sigue sin localizarse; su ruta local citada (`/mnt/data/graph_v10.6_112_nodos.json`) sigue inaccesible.

## Entregables (ronda_19/ejecucion_f4/)

- `nombres_fuera_doc_r19.md` — este informe.
- `nombres_fuera_doc_r19.jsonl` — 96 filas; `conteo_fuera_doc` + clave nueva `doc_indice_r19`; resto idéntico a r18.
- `manifiesto_shas_f4_r19.json` — shas de los entregables.
- Soporte (en el mismo directorio): `drive_busqueda_Panteon_r19.json`, `drive_busqueda_graph_r19.json`, `drive_busqueda_Voces_r19.json`, `search_parchephilengua_r19.json`, `search_validargrace_r19.json`, `search_filenamegraphv106112_r19.json`, `search_filenamegraphjson_r19.json`, `indice_doc_meta_r19.json`, `indice_doc_raw_r19.json`, `indice_doc_texto_r19.txt`, `carpeta_10panteon_r19.json`.
- Reutilizado de rondas previas (en disco, no re-descargado): `indice_doc_raw.json` (r12), `nombres_fuera_doc_r18.jsonl` (r18), `bundle_panteon16_contenido.json` (r16, entregable limpio; el zip NO se reabrió).

ρ(x) > 0. Zvvvvv.
