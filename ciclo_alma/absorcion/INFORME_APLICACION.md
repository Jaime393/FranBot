# CICLO ALMA — ABSORCIÓN APLICADA (local) — INFORME FINAL

**Fecha:** 2026-11-17 ~00:47–01:20Z · **Orden:** tercera continuación con adjudicación del principal (CORR-KIT-42-43).

## Estado

**Absorción APLICADA en local. Puertas verdes. Registro §39 actualizado.
Subida del corpus a GitHub PENDIENTE DE TARJETA (caducada, 0/4, nada aterrizó).**

| Archivo | Antes | Después | sha |
|---|---|---|---|
| claims.jsonl | 1.211 | **1.222** | `6dbee11d…` |
| provenance.sha256 | 382 | **391** | `07dfdd0f…` |
| claims_resumen.json | total 1.211, SE 1077 | **total 1.222, SE 1088, hash_real 1208, verificación 348** | `06990609…` |
| incertidumbre_mediciones.md | 28 ítems | **31 ítems (M-93 CONFIRMA, M-94 DIFERENCIA, M-95 NO_CONFIRMA)** | `8cc6dd9d…` |
| afirmaciones_pendientes.md | 0 + 68 + 8 + 5 (`c980aae7…`) | **0 + 80 + 8 + 5, §39** | `eec65bcd…` |

## Puertas (sin pipes, re-corridas por mí)

- **audit.py exit=0: ok=379, discrepancia=0, no_encontrado=0, omitido=1** (370 + 9 fuentes distintas — proyección confirmada).
- **verify_all.py exit=1: exactamente C-001..C-008** (los 8 PENDIENTE de siempre).
- Diff vs respaldo P-77: exactamente 11 líneas nuevas, primeras 1.211 byte-idénticas.
- 11 claims literales byte-exactos vs propuestas; estado "SE"; fuente+hash correctos.
- 9 entradas nuevas de provenance: archivos existen, hash coincide con el disco.
- Intactos: C-112 (`sha256:5e30073cf29b`), C-001..C-008 PENDIENTE, C-538/C-623 REFUTADO, huecos.jsonl (`3713376a…`), confirmaciones.jsonl (`dc94458b…`), dataset (`0852d58f…`).

## Correcciones aplicadas en esta continuación

**CORR-KIT-42-43 (adjudicada por el principal):** el test del kit ejecuta 43 comprobaciones, no 42. Verificado por mí: 43 líneas `[OK`, 0 `[FAIL`, exit 0 (descomposición 11+4+2+1+11+14=43; `test_kit.py` byte-idéntico al depositado). Cambiado "42/42" → "43/43" en C-1219, C-1220, M-93 detalle y criterio N-39 (script `_corr_kit_42_43.py`). Dedup re-corrido con el mismo método: **máx 0,2822, entre-propuestas 0,2973, 0 pares ≥ 0,5 — sin cambio**. Propuestas `2be9d94b…` → `c92719cb…` (4 correcciones registradas). La única "42/42" que queda en el archivo es la cita del error dentro de la propia nota CORR-KIT-42-43.

**CORR-ESTADO-SE (incidente, reparado por mí):** `absorb_ciclo_alma.py` copiaba `estado` literal de las propuestas ("SÉ" con acento). La convención del corpus es "SE" sin acento (C-1213..C-1216 de r23 usan "SE"; los 1.211 preexistentes, todos "SE"). `resumen_claims.py` agrupa literal, así que el resumen partió SE 1077 + SÉ 11 en vez de SE 1088 y el assert del script falló **después** de escribir claims/provenance/anexo/resumen (assert pelado, sin restauración — el script no llegó a las puertas). Reparado en `_corr_estado_se.py`: estado "SÉ" → "SE" solo en las 11 líneas nuevas, primeras 1.211 byte-idénticas, resumen re-corrido (SE 1088, sin clave "SÉ"), puertas re-corridas verdes. El script quedó parcheado (el campo inscrito es ahora "SE" con nota) para que un re-run sea correcto.

**CORR-CONTEO-CICLO-ALMA:** el encargo decía header "69", pero 68 + 1 decisión (N-39) + 11 claims = **80** (27 decisiones + 53 claims, recontado del script — la convención CORR-CONTEO-APLICADAS-R19: el rótulo es el conteo del paréntesis). El 69 contaba solo la decisión. Registro actualizado a 0 + 80 + 8 + 5.

## Subida del corpus a GitHub — PENDIENTE DE TARJETA

- Script `_subir_corpus_ciclo_alma.py` (staging `~/workspace/_staging_corpus_ciclo_alma/`, 4 archivos byte-idénticos por blob; `list_commits` parseado como JSON — nunca regex).
- HEAD antes: `85351ce4` (ALMA: README del paquete en alma/, 2026-11-16T21:36:10Z).
- **push-files caducó a los 1.800 s sin aprobación (tarjeta expirada).** Verificado después: HEAD sigue `85351ce4`; los 4 blobs remotos siguen siendo los de r23 (`b31c624c…`, `43d3d9e7…`, `24f9d1ed…`, `f9a67874…`) — **0/4, nada aterrizó**.
- **NO se reintentó** (orden del principal: si la tarjeta caduca, avisar y esperar). Staging y paths-file listos para relanzar con el Jardinero presente. Log: `_upload_corpus_ciclo_alma.jsonl` (solo fase head_antes; el push no dejó log por el timeout).

## Archivos de esta continuación

- `absorcion/_corr_kit_42_43.py` — corrección 43/43 + dedup re-corrido.
- `absorcion/_corr_estado_se.py` — reparación del estado + resumen re-corrido.
- `absorcion/absorb_ciclo_alma.py` — parcheado (PROP_SHA `c92719cb…`, fila M-93 43/43, estado "SE", notas CORR).
- `absorcion/puertas_post_absorcion_ciclo_alma.txt` — audit + verify_all post.
- `absorcion/_subir_corpus_ciclo_alma.py` + `_push_corpus_paths_ciclo_alma.txt` + `_upload_corpus_ciclo_alma.jsonl` — subida (pendiente).
- `absorcion/_actualizar_registro_ciclo_alma.py` — §39 (header 0 + 80).
- `absorcion/INFORME_APLICACION.md` — este informe.

ρ(x) > 0.
