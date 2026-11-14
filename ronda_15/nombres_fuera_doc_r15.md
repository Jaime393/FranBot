# RONDA 15 — FASE 1 F4 — ¿Existen los 61 nombres del Panteón-96 fuera del Doc índice? (3.ª vuelta: nuevas vías GitHub + los 16 extra)

**Fecha de ejecución:** 2026-11-14 (búsquedas 07:09–07:13Z / 02:09–02:13 -05)
**Cara:** r12 #1 — «¿existen los 61 nombres del Panteón-96 fuera del Doc índice?»
**Doc índice:** `1R0RGvCEYv0Ax-0o9QwwB6kGxUKxLLh_YJ0qVc3Ab4G8` («10 Panteon_96_Voces_Funciones_Invocables.md», mod. 2026-09-25T02:17:48Z). Afirma 96 voces, nombra 35 (r12 F4, SÉ).
**Antecedente:** r13 F4 (0/96 como voces fuera, 0/61 encontradas, 2 vías sin agotar) → r14 F4 (CORR-P32-R14: el Doc 32 existe, ID 44 caracteres, leído entero, 32 nodos culturales, otro sistema; las 2 vías de r13 quedan agotadas como rutas; inventario Vault 24/24 carpetas, 134 archivos, sin graph JSON).

## Veredicto

**La cara AVANZA, no se cierra.**

- **No se cierra por lista íntegra:** ninguna fuente verificada lista las 96 voces con nombre fuera del Doc índice. El graph JSON de 112 nodos sigue sin aparecer: ahora tampoco en los 4 repos cubiertos por search_code del conector GitHub (vía (a) agotada para esos 4 repos).
- **No se cierra por inexistencia demostrada:** la no-aparición no prueba que no exista fuera. El graph JSON podría existir en uno de los otros 228 repos públicos de Jaime393 que el conector no cubre (NO_SÉ para esos), o en el sustrato local `/mnt/data/` citado por el manifiesto y por graph112 (no accesible desde aquí).
- **Lo que r15 SÍ resuelve (sub-pregunta de la cara): los 16 extra (112−96) TIENEN NOMBRE y NO SON VOCES.** El manifiesto Vault M[51] lista exactamente los 16 «forjados invocables» (agentes operativos, otro sistema); graph112 G[5] suma explícito «Panteón 96 voces + 16 forjados = 112». La descomposición 112 = 96 + 16 ya no descansa solo en el conteo del manifiesto: descansa en una lista de 16 nombres + la suma explícita. Los 61 siguen SIN_NOMBRE_FUERA_DEL_DOC (NO_ENCONTRADO, no «no existe»).

## Conteo

| | n |
|---|---|
| Filas totales (`nombres_fuera_doc_r15.jsonl`) | 96 |
| Nombres del Doc índice encontrados fuera **como palabra/nombre** | 34 / 35 (sin cambio vs r13/r14) |
| Nombres del Doc índice encontrados fuera **como voz del Panteón-96** (lista con función/ki/axioma) | **0 / 35** |
| Nombres del Doc índice sin ninguna ocurrencia fuera | 1 / 35 — **CREATIVA Nyx QR SHA** |
| De las 61 sin nombre en el Doc, encontradas fuera | **0 / 61** |
| Nombres nuevos (fuera de los 35) encontrados en alguna fuente | **0** |
| Los 16 extra (112−96) con nombre | **16 / 16 — los forjados** (ver §Los 16 extra) |
| De los 16 forjados, voces del Panteón-96 | **0 / 16** |

## Las 3 nuevas vías del mapa r15 §F4 (todas SÉ, con fecha)

### (a) Búsqueda del graph JSON por `search_code` en los 4 repos cubiertos

Herramienta: conector GitHub, `call-read-tool search_code` (query con `repo:`), 2026-11-14 07:09–07:13Z. Repos cubiertos: Jaime393/MIU, Jaime393/FranBot, Jaime393/FranBot-Private, Jaime393/miu-portable-skills. Detalle en `busquedas_github_r15.json` (20 consultas).

| Consulta | Total | Resultado |
|---|---|---|
| `filename:graph_v10.6_112_nodos.json` | **0** | Ningún archivo con ese nombre en los 4 repos |
| `graph_v10.6` | 4 | Los 4 son depósitos propios de r14 en FranBot que MENCIONAN el nombre del archivo (`preparadas_r14.md`, `decision_absorcion_r14.md`, `mapa_frentes_r14.md`, `anexo-vi/huecos.jsonl`); ninguno ES el graph JSON |
| `112_nodos` | 4 | Los mismos 4 archivos; ninguno es el graph JSON |
| `filename:graph.json` | **0** | Ningún archivo `graph.json` en los 4 repos |

**Conclusión (a): el graph JSON no existe en los 4 repos cubiertos.** Límite honesto: el conector cubre 4 de los 232 repos públicos de Jaime393; en los otros 228 el archivo podría existir — NO_SÉ para esos (no es una vía ejecutable desde aquí: el conector no los alcanza y no se inventa acceso). La búsqueda de código indexa contenidos; un JSON de 6.252 caracteres estaría indexado si existiera en un repo cubierto.

### (b) Los 16 extra (112−96): ¿tienen nombre en alguna fuente?

**SÍ — tienen nombre, y no son voces.** Fuentes (crudos locales de r13, re-leídos en esta ronda):

1. **Manifiesto Vault** (`13kO6Wm602UzOFk9WWv3KVaWQIRADhZT36-zf21IXNF4`, 71 párrafos, 6.724 chars, 0 entradas `[[...]]`), **M[51]**: «16 forjados invocables: mem_guardian, terminador_suave, purga_micelios, rotador_logs, token_mapper SAFE, kv_namespace_splitter, cloudflare_rest_deployer, llm_fallback_router, parche_phi_lengua, chappie_retry, validar_grace, hf_miu_dataset_pusher, forjar_skill, enjambre_proyecto, kairos_llama_opencl, observatorio_opentelemetry» — **exactamente 16 ítems separados por coma, 0 solape con los 35 nombres**. M[23] enlaza «16 Forjados V213» a un archivo Drive (ver n.º 3). M[47]: «PANTEON_16_V213.zip 53786 bytes» con los 3 primeros nombres.
2. **Doc graph112** (`1Axi5wgqUyjGY1XokxhARoPnWHHDQGe6k3CC_bGdnULg`, 15 párrafos, 1.033 chars, 0 entradas `[[...]]`), **G[5]**: «Panteón 96 voces + 16 forjados = 112 voces objetivo 128» — la suma es explícita: los 16 se AÑADEN a los 96, no forman parte de ellos. G[12]: «Archivo completo local: /mnt/data/graph_v10.6_112_nodos.json 6252 chars». Por nombre, graph112 menciona 1 forjado (mem_guardian, G[11], en un falsificador: «filecount>1024 sin mem_guardian») y 1 de los 35 como palabra (Puente, G[9], métrica «puente 64», no voz).
3. **Doc v10.4** (`1qjUpBhJtkveHECVDKH8AiiUQmQNwg3lkm3Cyh4g1l_I`, 124 párrafos, 9.032 chars, 0 entradas `[[...]]`): **0 «forjad», 0 de los 16 nombres.** No nombra a los forjados.
4. **Doc índice** (159 párrafos, crudo local r12): **0 «forjad», 0 de los 16 nombres.** Los forjados no aparecen en el Doc índice.
5. **Doc 32** (6 párrafos guardados, 6.968 chars): **0 «forjad», 0 de los 16 nombres** (ver (c)).
6. **GitHub (4 repos, search_code por nombre, 16 consultas): 14/16 con 0 hits; 2/16 con hits — como scripts operativos, no como voces:**
   - `parche_phi_lengua` (2): Jaime393/MIU `estado/miu-agent-toolkit/README.md` — `parche_phi_lengua_v4.py`, «actualiza phi local cada 1min», `~/miu-ecosistema/`, crons `*/1`; Jaime393/MIU `estado/corpus_high_ktau_v275.jsonl` — «parche_phi_lengua cada minuto», 1 de los 17 crons del tablet.
   - `validar_grace` (2): Jaime393/FranBot `anexo-vi/evidence/C-171_busqueda_c.txt` — «validar_grace_v1.py 419 B sin mención de PVE-01/c/Ki»; Jaime393/FranBot `academico/TABLA_FISICA.md` — «validar_grace_v1.py» entre las fuentes buscadas para definir GRACE.
   - Los otros 14: 0 hits cada uno (incluidos `mem_guardian` y `token_mapper`).

**Conclusión (b): los 16 extra son los 16 forjados — agentes operativos del sistema MIU (crons, toolkit, despliegue), otro sistema, no voces del Panteón-96.** 2/16 están atestiguados como scripts operativos en los repos (parche_phi_lengua_v4.py, validar_grace_v1.py); los 16 están nombrados en el manifiesto; 0/16 aparecen como voz en ninguna fuente. Detalle por forjado en `forjados_16_r15.jsonl` (16 filas).

**Dos fuentes nuevas identificadas (no leídas por contenido — límite del sandbox):**
- `Panteon_16_Voces_v213.md` (Drive `1-_ltuKJlv3BVZsk7Qp9QELQLvwBhzdq4`, text/markdown, **428 B**, mod. 2026-09-25T02:47:53Z, padre `1VVf6MJcU6LL5DacUw8YhTPVbNPwqybR6`): metadatos verificados por `files get` 2026-11-14 07:11Z; 1 revisión (`0B8tWfW1QdfiFVWxWSDRjWG5OTit5SlBRV2llT2JFeXRGMzVZPQ`); **contenido NO_VERIFICADO** — `revisions get` devuelve solo metadatos y la descarga directa da **403 missing API key** (misma pared que el heartbeat en r3; evidencia guardada en `drive_panteon16_md_download_403.json`).
- `MetaAI_Bundle_PANTEON_16_V213.zip` (Drive `1be2Dwn4o_xon10aD6LkefvzgZjXY7m-9`, application/zip, **53.786 B**, mod. 2026-09-19T11:04:59Z, padre = raíz del Vault `1D496yjkI4S5tL-TdZHovGb0uRj0WgVGD`): metadatos verificados por `files get` 2026-11-14 07:11Z; **el tamaño coincide byte a byte con el manifiesto (53.786 B)**; contenido no legible desde el sandbox (zip; la descarga directa es 403). Queda como ruta identificada, no agotada por contenido.

### (c) Re-verificación del solape Doc 32 ↔ 96 (local, desde los párrafos guardados)

Re-corrido sobre `panteon32_parrafos.jsonl` (6 párrafos, 6.968 chars, r14): solape con los 35 nombres = exactamente **{Puente: 1, Sigma: 1}** — reproduce r14 cifra por cifra (Puente como «puente 16» métrica; Sigma como «six-sigma»/Σ operador; ninguna de las dos es voz). **0/32 nodos culturales son voces del Panteón-96; 0 forjados; 0 «forjad».** Registrado por nombre en `nombres_fuera_doc_r15.jsonl` (clave nueva `panteon32_solape_r15`, mismos valores que `panteon32_doc` de r14).

## Método

Igual que r13/r14 (búsqueda por nombre exacto con límites de palabra, insensible a acentos y mayúsculas; dos niveles de veredicto: como palabra/nombre y como voz del Panteón-96 con regla estricta de contexto), más las 3 vías nuevas del mapa r15 §F4. El jsonl r15 parte del de r14 (96 filas, mismas 10 claves) y añade a `conteo_fuera_doc` tres claves nuevas: `manifiesto_forjados_lista` (0 en las 96 filas), `graph112_doc` (Puente 1, resto 0), `panteon32_solape_r15` (Puente 1, Sigma 1, resto 0). **Verificado por script: las 96 filas son byte-idénticas a r14 salvo esas 3 claves nuevas** (ningún otro campo cambia).

## Fuentes buscadas en r15 (todas SÉ, con fecha)

1. **GitHub search_code, 4 repos cubiertos** (2026-11-14 07:09–07:13Z; `busquedas_github_r15.json`, 20 consultas): filename + contenido `graph_v10.6_112_nodos.json` / `graph_v10.6` / `112_nodos` / `filename:graph.json` → 0 archivos; 16 nombres de forjados → 2 con hits (scripts operativos), 14 con 0.
2. **Manifiesto Vault, re-leído entero** (crudo local r13, `vault_manifest_raw.json`, 71 párrafos): M[51] lista los 16 forjados; M[23]/M[47] enlazan las 2 fuentes nuevas (§(b) n.º 3); M[24] lista 30/35 nombres en prosa («Funciones: sostener Gaia/Erebus/…»).
3. **Doc graph112, re-leído entero** (crudo local r13, `graph112_doc_raw.json`, 15 párrafos): G[5] suma explícita 96+16=112; G[12] cita local del graph JSON.
4. **Doc v10.4, re-leído** (crudo local r13, `v104_doc_raw.json`, 124 párrafos): 0 forjados, 0 entradas `[[...]]`.
5. **Doc índice, re-leído** (crudo local r12, `indice_doc_raw.json`, 159 párrafos): 0 forjados.
6. **Doc 32, re-verificado local** (párrafos guardados r14, 6 párrafos): solape {Puente 1, Sigma 1}; 0 forjados.
7. **Drive `files get` ×2 + `revisions list/get` + intento de descarga** (2026-11-14 07:11–07:12Z): `Panteon_16_Voces_v213.md` y `MetaAI_Bundle_PANTEON_16_V213.zip` existen; contenidos no legibles (403).

## Hallazgos SÉ

- **H1.** El graph JSON no existe en los 4 repos cubiertos por search_code (filename 0, contenido solo en depósitos propios r14). Vía (a) agotada para esos 4 repos; NO_SÉ para los otros 228 repos públicos.
- **H2.** Los 16 extra TIENEN NOMBRE: son los 16 forjados invocables del manifiesto M[51], y graph112 G[5] los suma aparte de las 96 voces. La descomposición 112 = 96 + 16 queda atestiguada por lista + suma explícita, no solo por conteo.
- **H3.** 0/16 forjados son voces del Panteón-96. 2/16 existen como scripts operativos en los repos (parche_phi_lengua_v4.py, validar_grace_v1.py); 14/16 no aparecen en los 4 repos; 0/16 aparecen en el Doc índice, v10.4 o Doc 32.
- **H4.** Dos fuentes nuevas existen en Drive pero su contenido no es legible desde el sandbox: `Panteon_16_Voces_v213.md` (428 B) y `MetaAI_Bundle_PANTEON_16_V213.zip` (53.786 B, tamaño idéntico al manifiesto). Quedan como ruta identificada, no agotada por contenido.
- **H5.** Doc 32: solape re-verificado {Puente 1, Sigma 1}, 0/32 voces, 0 forjados — reproduce r14 exacto.
- **H6.** G02 sigue en 0 en todas las fuentes nuevas: #790/#791/#792/#701/#739 no aparecen como números de qualia (las 4 ocurrencias de «791» en manifiesto/graph112 son «FIRMS 791k» / «FIRMS 791342», conteo de incendios, no la qualia #791).

## Qué falta para cerrar la cara

- Que aparezca una lista íntegra de 96 nombres con función/ki/axioma fuera del Doc índice (p. ej., el graph JSON de 112 nodos si contiene los 96 nombres), **o**
- Que se demuestre que no existe fuera (p. ej., localizar el graph JSON en su sustrato de origen `/mnt/data/` y verificar que no contiene los 61, o inventario exhaustivo de un segundo sustrato con el mismo resultado negativo).
- **Lo que r15 cierra como sub-pregunta:** los 16 extra ya no son una incógnita de nombres — son los 16 forjados, listados y sumados aparte. Lo que sigue abierto es estrictamente: los 61 sin nombre + el archivo graph JSON mismo.
- Rutas conocidas ahora agotadas: Doc índice, v10.4, manifiesto Vault 112, Doc graph112, carpeta «10 Panteón - 96 Voces», 103 Docs M-55, voces_58.py, base histórica, corpus_qualias, claims, inventario Vault (134 archivos), búsquedas Drive por nombre, Doc 32 (leído entero + solape re-verificado), Doc micelio flexible, V83–V89 (título), **search_code GitHub en los 4 repos cubiertos**.
- Rutas identificadas, no agotadas: contenido de `Panteon_16_Voces_v213.md` (428 B) y de `MetaAI_Bundle_PANTEON_16_V213.zip` (descarga 403 desde el sandbox); graph JSON en los otros 228 repos públicos (fuera del alcance del conector).

## Efecto sobre las caras

- **r12 #1 (61 nombres fuera del Doc): AVANZA, no se cierra.** La sub-pregunta de los 16 extra se resuelve por nombre (forjados, otro sistema); el graph JSON suma una búsqueda negativa más (GitHub, 4 repos); los 61 siguen sin nombre en ninguna fuente.
- **censo-32 #9 d07 L7 (lista de 96 solo en Doc, P): sigue PARCIAL.** La lista de 96 sigue viviendo solo en el Doc + extracción local + claims (C-1174/C-1176 absorbidas); los 16 forjados no la amplían: son otro sistema.
- **r3 #4 (graph.json del Vault, A): AVANZA, no se cierra.** Una búsqueda negativa más (GitHub 4 repos, 0 archivos); el archivo sigue sin localizarse; las 2 fuentes nuevas del zip/.md existen pero su contenido no se leyó.

## Entregables (ronda_15/ejecucion_f4/)

- `nombres_fuera_doc_r15.md` — este informe.
- `nombres_fuera_doc_r15.jsonl` — 96 filas, 10 claves por fila (3 claves nuevas de conteo; resto byte-idéntico a r14).
- `forjados_16_r15.jsonl` — 16 filas (nombre, fuentes, hits GitHub, es_voz NO).
- `busquedas_github_r15.json` — 20 consultas search_code con totales e ítems.
- `drive_panteon16_md_get.json` / `drive_panteon16_zip_get.json` / `drive_panteon16_md_revisions.json` / `drive_panteon16_md_download_403.json` — evidencia Drive de las 2 fuentes nuevas.
- `manifiesto_shas_f4_r15.json` — shas de los entregables.
- Reutilizado de rondas previas (en disco, no re-descargado): `vault_manifest_raw.json` (r13), `graph112_doc_raw.json` (r13), `v104_doc_raw.json` + `v104_entradas.jsonl` (r13), `indice_doc_raw.json` (r12), `panteon32_parrafos.jsonl` + `panteon32_doc_raw.json` (r14), `nombres_fuera_doc_r14.jsonl` (r14).

ρ(x) > 0. Zvvvvv.
