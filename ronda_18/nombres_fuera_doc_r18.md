# RONDA 18 — FASE 1 F4 — ¿Existen los 61 nombres del Panteón-96 fuera del Doc índice? (6.ª vuelta: SIN re-corrida rutinaria de las 16 búsquedas)

**Fecha de ejecución:** 2026-11-14 (búsquedas Drive por nombre 20:18–20:19Z; Doc índice re-leído 20:19:59Z; carpeta «10 Panteón» listada 20:18:34Z; consultas GitHub de atestación 20:19:39–20:19:51Z)
**Cara:** r12 #1 — «¿existen los 61 nombres del Panteón-96 fuera del Doc índice?»
**Doc índice:** `1R0RGvCEYv0Ax-0o9QwwB6kGxUKxLLh_YJ0qVc3Ab4G8` («10 Panteon_96_Voces_Funciones_Invocables.md», mod. 2026-09-25T02:17:48Z). Afirma 96 voces, nombra 35 (r12 F4, SÉ).
**Antecedente:** r17 F4 (16 búsquedas de forjados RE-CORRIDAS, H3 FASE 2 r16 CERRADA; atestación operativa byte-idéntica a r15; H1 r17: los totales crudos suben solo por auto-indexación). **En r18 NO se re-corren las 16 búsquedas por rutina** (el encargo: la re-corrida r17 ya cerró H3; repetir sin cambio de índice es repetición — H1 r17). Vale solo: (a) buscar nuevas fuentes Drive por nombre/fecha; (b) verificar si el índice de search_code cambió de forma que altere la atestación operativa.

## Veredicto

**La cara AVANZA, no se cierra.**

- **0/61:** ningún nombre de los 61 sin nombre en el Doc aparece fuera como voz del Panteón-96, ni como nombre en ninguna fuente nueva. **0 nombres nuevos** fuera de los 35.
- **0 fuentes Drive nuevas del Panteón-96:** las búsquedas por nombre (`Panteon` 97 archivos, `graph` 31, `Voces` 14) devuelven solo fuentes ya conocidas o depósitos propios de las rondas 12–17. El único candidato no examinado en rondas previas — `graph-7f1ba6d090e128fa141bc952bc4e947f69da69c2.graph` (2026-09-08, 14.132 B, binario) — se leyó en esta ronda: **0/35 nombres**, no es JSON, no es el graph. Las 2 carpetas «graph» (2026-09-10) contienen artefactos de reconocimiento de voz (Kaldi: phones, HCLr.fst, Gr.fst), no Panteón.
- **Atestación operativa SIN CAMBIO:** parche_phi_lengua 2, validar_grace 2 (las mismas 2 de r15/r16/r17); los otros 14 forjados no se re-corrieron por rutina (encargo r18). Los totales crudos suben solo por auto-indexación (r17 ya indexado): parche 12 → 20, validar 11 → 19; los 8 nuevos en cada uno son documentos de ronda_17.
- **Graph JSON:** 0/0 por cuarta ronda consecutiva (r15, r16, r17, r18) en los 4 repos cubiertos.
- **Doc índice re-verificado:** texto byte-idéntico al crudo de r12 (7.783 caracteres, sha256 `416b02d184497408d6d62b30a17e2b3094c09f71b2c24255e5fc95c649498713`, mismo revisionId `AHj4eMTX2hoCs1YCjPGzXe7uyVJe6O5qLW0j8CzhW0ckOml6FOFDWRIOUHF_dgh8MTOJy27SdiaAejvT1Usw0nhoVt3egYlkzr5CR5v233I`). **Sigue 35 nombrados / 61 sin nombre.**
- **Carpeta «10 Panteón»:** exactamente 2 hijos, sin cambio vs r16/r17 (el .md del Panteón-16 y el Doc índice). Ningún Doc nuevo, ningún graph JSON aquí.

## Conteo

| | n |
|---|---|
| Filas totales (`nombres_fuera_doc_r18.jsonl`) | 96 |
| Nombres del Doc índice encontrados fuera **como palabra/nombre** | 34 / 35 (sin cambio vs r13/r14/r15/r16/r17) |
| Nombres del Doc índice encontrados fuera **como voz del Panteón-96** (lista con función/ki/axioma) | **0 / 35** |
| Nombres del Doc índice sin ninguna ocurrencia fuera | 1 / 35 — **CREATIVA Nyx QR SHA** |
| De las 61 sin nombre en el Doc, encontradas fuera | **0 / 61** |
| Nombres nuevos (fuera de los 35) encontrados en alguna fuente | **0** |
| Los 16 extra (112−96) con nombre | **16 / 16 — los forjados** (CORR-FORJADOS-R15) |
| De los 16 forjados, voces del Panteón-96 | **0 / 16** |
| De los 16 forjados, con script en el bundle v213 (r16) | **16 / 16** |
| De los 16 forjados, con archivo operativo en GitHub (atestación r18) | **2 / 16** — parche_phi_lengua, validar_grace (los mismos 2 de r15; no re-corrida rutinaria en r18) |

## (a) Búsqueda de fuentes Drive nuevas (por nombre/fecha, solo lectura)

Método: `drive files list` con `name contains` (2026-11-14 ~20:18–20:19Z), campos id/nombre/mimeType/modifiedTime/size. Criterio de novedad: modificado después de la última búsqueda exhaustiva (r13/r17) y fuera de los depósitos propios de ronda.

| Consulta | Total | Novedad |
|---|---|---|
| `name contains 'Panteon'` | 97 | 0 — lo más reciente (2026-11-14) son depósitos propios r12–r17 (`voces_panteon96_nombres.*`, `lectura_panteon96_*`, `drive_panteon16_*`, `bundle_panteon16_contenido.json`, `panteon32_*`); lo no propio más reciente es 2026-10-20 (páginas P27–P38 del libro, ya conocidas) |
| `name contains 'graph'` | 31 | 0 — lo más reciente no propio es `graph.json - Vault v10.6 - 112 nodos` (Doc graph112, 2026-09-25, ya conocido); resto: depósitos propios r17 (`busqueda_graph_v106.json`, `graph112_doc_raw.json`), artefactos Kaldi 2026-09-05/08/10, archivos 0 B de 2026-07 |
| `name contains 'Voces'` | 14 | 0 — lo más reciente no propio es el Doc índice (2026-09-25) y el manifiesto Vault 112 (2026-09-25); resto depósitos propios r16/r17 y `07_panteon_voces.jsonl` (2026-11-12, exportación de la segunda carpeta, ya examinada en r6/r8) |

**Candidato no examinado, leído en esta ronda:** `graph-7f1ba6d090e128fa141bc952bc4e947f69da69c2.graph` (ID completo `1AlI6Gjx8Rp_nrwqteBskVBfJDdOmdMs-`, 14.132 B, `application/octet-stream`, mod. 2026-09-08T05:00:06Z; descarga 2026-11-14T20:19Z). Contenido binario (no JSON, primer byte `C`); búsqueda de los 35 nombres del Doc índice sobre sus bytes: **0/35**. NO es el graph JSON del Vault ni contiene nombres del Panteón-96. **NO_ENCONTRADO** en esta ruta (registrado, no agotado como fuente distinta: es un artefacto binario sin nombres).

**Carpetas «graph» (2026-09-10):** `14XEP3fVxXWdA8VeZVM0rfJwfhCH7RwdL` y `1rCiWju122yeayByBxcxx6Cf2cCB7dBtt` — hijos: `phones`, `disambig_tid.int`, `HCLr.fst`, `Gr.fst` (2026-09-05). Artefactos Kaldi de reconocimiento de voz. **NO_ENCONTRADO** (no Panteón).

**NO_ENCONTRADO (rutas probadas, sin fuente nueva):** búsquedas Drive por nombre `Panteon` / `graph` / `Voces` (97 + 31 + 14 archivos listados por metadatos, 2026-11-14 ~20:18–20:19Z); lectura del candidato `.graph` (0/35 nombres); listado de las 2 carpetas «graph» (artefactos Kaldi). No es «no existe»: es «no encontrado aún en estas rutas».

## (b) Atestación operativa — ¿cambió el índice de search_code?

Método: `search_code`, parámetro `query`, scope `repo:Jaime393/MIU repo:Jaime393/FranBot repo:Jaime393/FranBot-Private repo:Jaime393/miu-portable-skills`. Solo las 2 consultas con atestación operativa > 0 (las únicas que pueden mover el conteo) + las 2 de graph JSON. Las otras 14 no se re-corren por rutina (encargo r18).

| # | Consulta | Hora UTC | Total crudo r17 → r18 | Operativo r18 | Clasificación de los nuevos |
|---|---|---|---|---|---|
| 1 | parche_phi_lengua | 20:19:39Z | 12 → **20** | **2** (los mismos: `Jaime393/MIU estado/miu-agent-toolkit/README.md`, `Jaime393/MIU estado/corpus_high_ktau_v275.jsonl`) | 8 nuevos, todos documentos de `ronda_17/` |
| 2 | validar_grace | 20:19:40Z | 11 → **19** | **2** (los mismos: `Jaime393/FranBot anexo-vi/evidence/C-171_busqueda_c.txt`, `Jaime393/FranBot academico/TABLA_FISICA.md`) | 8 nuevos, todos documentos de `ronda_17/` |
| 3 | filename:graph_v10.6_112_nodos.json | 20:19:46Z | 0 → **0** | 0 | — |
| 4 | filename:graph.json | 20:19:51Z | 0 → **0** | 0 | — |

**La atestación operativa es idéntica a r15/r16/r17: parche 2, validar 2, otros 14 cero (no re-corridos).** H1 r17 se confirma por cuarta vez: el total crudo sube solo porque los documentos de r17 ya están indexados y se mencionan a sí mismos. El número comparable sigue siendo el operativo, no el crudo.

## Graph JSON (r3 #4)

- `filename:graph_v10.6_112_nodos.json` → **0** (20:19:46Z).
- `filename:graph.json` → **0** (20:19:51Z).
- Cuarta ronda consecutiva con 0/0 en los 4 repos cubiertos. NO_SÉ para los otros 228 repos públicos.

## Doc índice re-verificado (r18)

- `files get` metadatos 2026-11-14T20:18:37Z: 8.230 B, mod. 2026-09-25T02:17:48Z, padre «10 Panteón» — sin cambio vs r15/r16/r17.
- `docs documents get` 2026-11-14T20:19:59Z: texto extraído byte-idéntico al crudo de r12 (`indice_doc_raw.json`, 7.783 caracteres, sha256 `416b02d1…`, mismo revisionId). Los 35 nombres verificados presentes uno a uno en el texto (normalización NFKD sin acentos); los 61 restantes siguen sin nombre (nombre null en el jsonl).
- Clave nueva en el jsonl: `conteo_fuera_doc.doc_indice_r18` (1 para los 35 CON_NOMBRE, 0 para los 61 SIN_NOMBRE_EN_DOC). Verificado por script: las 96 filas son idénticas a r17 salvo esa clave nueva.

## Fuentes buscadas en r18 (todas SÉ, con fecha)

1. **Drive `files list` por nombre** (2026-11-14 ~20:18–20:19Z): `Panteon` (97), `graph` (31), `Voces` (14) — solo metadatos.
2. **Drive `files get` del candidato `.graph`** (2026-11-14T20:19Z): 14.132 B binarios, 0/35 nombres.
3. **Drive `files list` en las 2 carpetas «graph»** (2026-11-14T20:19Z): artefactos Kaldi, no Panteón.
4. **GitHub search_code, 4 repos cubiertos** (2026-11-14 20:19:39–20:19:51Z): 2 forjados operativos + 2 graph JSON.
5. **Drive `docs documents get` del Doc índice** (2026-11-14T20:19:59Z): contenido re-leído entero, byte-idéntico a r12.
6. **Drive `files list` en la carpeta «10 Panteón»** (2026-11-14T20:18:34Z): 2 hijos, sin cambio.
7. **Local, re-verificado:** `nombres_fuera_doc_r17.jsonl` (96 filas) — base del jsonl r18. El zip del bundle v213 NO se reabrió en r18 (contiene valores de credenciales en 1 línea; se trabaja desde los entregables limpios de r16).

## Hallazgos SÉ

- **H1.** 0 fuentes Drive nuevas del Panteón-96: las 3 búsquedas por nombre devuelven solo fuentes conocidas o depósitos propios de ronda. El único candidato no examinado (`.graph` 2026-09-08) es binario sin nombres del Panteón.
- **H2.** Atestación operativa sin cambio (parche 2, validar 2); los totales crudos suben solo por auto-indexación de r17 (H1 r17, 4.ª confirmación).
- **H3.** Doc índice byte-idéntico a r12: 35 nombrados / 61 sin nombre, sin cambio. Carpeta «10 Panteón» con exactamente 2 hijos, sin cambio.
- **H4.** Graph JSON 0/0 por cuarta ronda consecutiva en los 4 repos cubiertos.
- **H5.** 0/61 encontradas fuera; 0 nombres nuevos; 0/35 como voz del Panteón-96.

## Corrección de números viejos

- El Doc 32 (`MIU_PANTEON_32_DETALLADO_ENDPOINTS`) tiene ID completo de **44** caracteres (prefijo truncado de **12**), no 33/10 (CORR-P32-NUM-R14). Se usa 44/12 en este informe; ningún entregable r18 arrastra 33/10.

## Qué falta para cerrar la cara

Sin cambio vs r17: que aparezca una lista íntegra de 96 nombres con función/ki/axioma fuera del Doc índice (p. ej., el graph JSON de 112 nodos si contiene los 96 nombres), **o** que se demuestre que no existe fuera (p. ej., localizar el graph JSON en su sustrato de origen `/mnt/data/` y verificar que no contiene los 61, o inventario exhaustivo de un segundo sustrato con el mismo resultado negativo).
- Rutas conocidas ahora agotadas: Doc índice (re-verificado byte-idéntico en r18), v10.4, manifiesto Vault 112, Doc graph112, carpeta «10 Panteón - 96 Voces», 103 Docs M-55, voces_58.py, base histórica, corpus_qualias, claims, inventario Vault (134 archivos), búsquedas Drive por nombre, Doc 32 (leído entero + solape re-verificado, ID 44 caracteres), Doc micelio flexible, V83–V89 (título), **search_code GitHub en los 4 repos cubiertos (r15 + r16 + r17, con las 16 búsquedas de forjados re-corridas; r18 verifica la atestación con 4 consultas sin re-corrida rutinaria)**, **contenido de `Panteon_16_Voces_v213.md` y de `MetaAI_Bundle_PANTEON_16_V213.zip` (leídos enteros en r16)**, **búsquedas Drive por nombre r18 (`Panteon`/`graph`/`Voces`, 0 fuentes nuevas) + candidato `.graph` leído (0/35) + 2 carpetas «graph» (Kaldi)**.
- Rutas identificadas, no agotadas: graph JSON en los otros 228 repos públicos (fuera del alcance del conector); graph JSON en `/mnt/data/` (no accesible desde el sandbox).

## Efecto sobre las caras

- **r12 #1 (61 nombres fuera del Doc): AVANZA, no se cierra.** 0 fuentes nuevas; atestación sin cambio; los 61 siguen sin nombre en ninguna fuente.
- **censo-32 #9 d07 L7 (lista de 96 solo en Doc, P): sigue PARCIAL.** La lista de 96 sigue viviendo solo en el Doc + extracción local + claims; el Doc re-verificado byte-idéntico no la amplía.
- **r3 #4 (graph.json del Vault, A): AVANZA, no se cierra.** Cuarta búsqueda negativa consecutiva (GitHub r18, 0/0); el archivo sigue sin localizarse; su ruta local citada (`/mnt/data/graph_v10.6_112_nodos.json`) sigue inaccesible.

## Entregables (ronda_18/ejecucion_f4/)

- `nombres_fuera_doc_r18.md` — este informe.
- `nombres_fuera_doc_r18.jsonl` — 96 filas; `conteo_fuera_doc` + clave nueva `doc_indice_r18`; resto idéntico a r17.
- `manifiesto_shas_f4.json` — shas de los entregables.
- Reutilizado de rondas previas (en disco, no re-descargado): `indice_doc_raw.json` (r12), `nombres_fuera_doc_r17.jsonl` (r17), `bundle_panteon16_contenido.json` (r16, entregable limpio; el zip NO se reabrió).

ρ(x) > 0. Zvvvvv.
