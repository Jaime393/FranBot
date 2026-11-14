# DECISIÓN — ABSORCIÓN CONDICIONADA RONDA 14 FASE 1 (F1)

- **Fecha:** 2026-11-13. **Ejecutor:** F1 (único escritor del corpus en la tanda, si se ordena).
- **Orden:** APLICADA por orden del Jardinero 2026-11-14 01:43 -05: "sí y continúen con coherencia apliquen las decisiones siempre automáticamente" (régimen nuevo: las decisiones pendientes se aplican automáticamente; orden transcrita en `ORDEN_N14_AUTO.md`). N-12 cubrió solo r12; la orden 16:51 cubrió r11 F1. Criterio C-1..C-9 de r10.
- **Estado: APLICADA, 2026-11-14.** 6 claims en el corpus (C-1174..C-1179). Ver bloque APLICADA abajo.


## APLICADA — absorción automática, 6 claims (2026-11-14)

- **Orden:** Jardinero 2026-11-14 01:43 -05 (ver `ORDEN_N14_AUTO.md`). Primera aplicación del régimen de aplicación automática.
- **Script:** `aplicar_absorcion_r14_auto.py` (guarda `ORDEN_N14_AUTO.md`, probada exit=2 sin orden; `aplicar_absorcion_r14.py` queda SUPERSEDO — aplicaba solo las 3 de F1 con el texto viejo de C-1176).
- **Paquete:** `claims_nuevos_r14_auto.jsonl` (sha `652d4bba…`, 6 líneas, todas SE). Dedup re-corrido de las 6 (textos corregidos): máx. global 0,2475 (C-1179/C-856), entre propuestas 0,2919 (C-1176/C-1177), 0 pares ≥ 0,5 (`dedup_f7_r14_auto.json`).
- **Resultado:** claims 1.168 → 1.174 (sha `7deb15ff…` → `d4924c9b…`); hash_real 1154 → 1160; provenance 354 → 358 (sha `dbe4a490…` → `1ff77190…`, 4 entradas nuevas — nombres_fuera_doc_r14.md cubre C-1176+C-1177, estado_vivo_r14.md cubre C-1178+C-1179); SE 1034 → 1040; verificacion 295 → 301; resumen sha `315b80b5…` → `49f1a17e…`. Confirmaciones y huecos sin cambio.
- **Puertas post-absorción** (`puertas_post_absorcion_auto.txt`): audit exit=0 (ok=344, discrepancia=0, no_encontrado=0, omitido=1); verify_all exit=1 con exactamente C-001..C-008.
- **Reversión:** restaurar los 5 archivos desde `ronda_14/respaldo_pre_r14/` (shas en `manifiesto_shas.json`) y re-correr las puertas: vuelve claims 1.168, provenance 354, audit ok=340.

### Correcciones previas aplicadas (DICTAMEN-C1176-R14, FASE 2 r14 §10 — C-1176/C-1177 BLOQUEADAS hasta corregir)

| # | Archivo | Antes | Después |
|---|---|---|---|
| 1 | `ejecucion_f1/claims_nuevos_r14.jsonl` (C-1176, cláusula final) | "quedan dos vías sin agotar (graph_v10.6_112_nodos.json, 6.252 caracteres, no en local; Doc MIU_PANTEON_32_DETALLADO_ENDPOINTS, 404)" | "las dos vías de r13 quedan agotadas: el graph JSON no está en Drive ni en el Vault; el Doc 32 existe con ID completo y se leyó entero, 32 nodos culturales, otro sistema" — sha del archivo `85de362b…` → `37c6e742…`; C-1174/C-1175 byte-idénticas |
| 2 | `ejecucion_f4/nombres_fuera_doc_r14.md` §CORR-P32-R14 | "(33 caracteres)" / "(10 caracteres)" | "(44 caracteres)" / "(12 caracteres)" — contados desde el campo documentId del raw JSON (completo 44, truncado 12); sha `5669c1ad…` → `3068b24a…` |
| 3 | `ejecucion_f7/lectura_corr_p32_r14.md` (texto + bloque JSON) | "(33 caracteres)" / "(10 caracteres)" (×2) | "(44 caracteres)" / "(12 caracteres)" (×2) — Lectura == JSON tras corregir; sha `ec75f031…` → `0e9e84d5…` |
| 4 | C-1176 (claim absorbido) | fuente `ronda_13/ejecucion_f4/nombres_fuera_doc_r13.md`, hash `sha256:024e52c3…` | fuente `ronda_14/ejecucion_f4/nombres_fuera_doc_r14.md`, hash `sha256:3068b24a…` (el hash sigue al documento que atestigua la cláusula corregida; la medición original queda en el motivo) |
| 5 | C-1177 (claim absorbido) | hash `sha256:5669c1ad…` (documento fuente pre-corrección) | hash `sha256:3068b24a…` (documento corregido) + nota CORR-P32-NUM-R14 en el motivo |

- **Provenance verificada:** nombres_fuera_doc_r13.md NO entra (C-1176 ya no lo cita); las 4 entradas nuevas son las de la tabla de resultado. La proyección F1/F7 (354→357/359) queda superada por la cifra real 354→358: C-1176 comparte fuente con C-1177.
- **GitHub:** claims.jsonl, provenance.sha256, claims_resumen.json + estos 3 documentos actualizados se suben en PASO 3 (el Jardinero presente, tarjetas). El relanzamiento pendiente de FASE 4 (decision .json + preparadas) queda subsumido: se suben las versiones APLICADA.

## Qué se absorbería (3 piezas, lecturas SÉ preparadas)

| Pieza | Lectura | ID proyectado | Dedup máx. re-medido (Jaccard, umbral 0,5) |
|---|---|---|---|
| 1 | Panteón-96: 35 con nombre + 61 sin nombre en el Doc índice | C-1174 | 0,1689 vs C-838 |
| 2 | Causa del censo vacío: V151 → folderId `l` (404); V152 → `I` (existe) | C-1175 | 0,1641 vs C-1171 |
| 3 | Panteón-96 fuera del Doc: 0/96 como voces fuera; 0/61 encontradas | C-1176 | 0,1761 vs C-936 |

**Máximo global 0,1761 < 0,5; 0 pares ≥ 0,5; máx. entre propuestas 0,2500 (C-1174/C-1176)** — re-medido por mí en F1 (dedup_f7_r14.json), idéntico cifra por cifra a FASE 0 r14 (esperado: el corpus no cambió desde N-12). Ninguna de las 3 lecturas tiene claim (verificación propia, 2026-11-13): "EXTRACCIÓN PANTEÓN-96" 0 ocurrencias; "CAUSA DEL CENSO VACÍO" 0; "FUERA DEL DOC ÍNDICE" 0; "0/96" 0; "14dw8tx" 0 en claims.jsonl (1.168 líneas).

## Regla de reasignación del ID C-1176

**C-1176 supone F1 aplicada con C-1174/C-1175 (1.168→1.171).** Si la orden futura absorbe solo C-1176 (o un subconjunto de las 3), el ID se reasigna al aplicar: `aplicar_absorcion_r14.py` aplica las 3 juntas; una absorción parcial exige un script nuevo (o una revisión de este) con la orden parcial transcrita en `ORDEN_N14.md` y el ID reasignado en el momento de aplicar. La absorción de C-1176 sola sería 1.168→1.169 (ID reasignado entonces, no C-1176 fijo). La absorción de C-1174/C-1175 solas sería 1.168→1.170 con esos IDs (sin reasignación: son los siguientes libres).

## Proyección si se ordena (las 3 juntas)

| Archivo | Antes → Después |
|---|---|
| `anexo-vi/claims.jsonl` | 1.168 l., `7deb15ff…` → 1.171 l. |
| `anexo-vi/provenance.sha256` | 354 l., `dbe4a490…` → 357 l. |
| `anexo-vi/claims_resumen.json` | `315b80b5…` (SE 1034, REFUTADO 4) → SE 1037, REFUTADO 4 |
| `anexo-vi/confirmaciones.jsonl` | `dc94458b…` (294) → sin cambio |
| `anexo-vi/huecos.jsonl` | `3713376a…` (139) → sin cambio |

**Corpus:** claims 1.168 → 1.171; hash_real 1154 → 1157; SE 1034 → 1037; verificacion 295 → 298; hash_pendiente 8 (sin cambio); huecos y confirmaciones sin cambio.

## Provenance: 3 entradas nuevas (354 → 357)

Ninguna de las 3 fuentes está hoy en provenance (grep 0, verificado por mí 2026-11-13). Entradas (formato del archivo, rutas relativas a `~/workspace`, shas re-verificados por `sha256sum` 2026-11-13):

- `528f65356b1122ef2de484fe0615cd2892fafc8060e62b7aac0b34438b3e3fbb  academico/tejido_2026-11-12/ronda_12/ejecucion_f4/voces_panteon96_nombres.md` (C-1174)
- `5496f88360d05d752efcb10437cef8bedfbf4112d5a00de5595f83733cdc434e  academico/tejido_2026-11-12/ronda_12/ejecucion_f2/estado_vivo_r12.md` (C-1175)
- `024e52c39afeacb6e9d6a91efb0615503f54891938ad6555e390a023958e409d  academico/tejido_2026-11-12/ronda_13/ejecucion_f4/nombres_fuera_doc_r13.md` (C-1176)

## Puertas PRE-absorción (corridas por mí, 2026-11-13; salida íntegra en `puertas_pre_absorcion.txt`)

- `audit.py`: **exit=0, ok=340, discrepancia=0, no_encontrado=0, omitido=1** (verde, sostenido tras N-12; sha del archivo idéntico al de r13 F1).
- `verify_all.py`: **exit=1 con exactamente C-001..C-008** (PENDIENTE, esperado; nunca rellenar).
- Post-absorción esperado (aserciones del script): audit exit=0, ok=343 (+3 entradas); verify_all exit=1 con exactamente C-001..C-008.

## Cómo se aplica (cuando llegue la orden)

1. El Jardinero da la orden (transcrita en `ejecucion_f1/ORDEN_N14.md` — el script se niega a correr sin ese archivo).
2. `python3 aplicar_absorcion_r14.py`: verifica el pre-estado contra `respaldo_pre_r14/` (aserciones de shas y líneas), lee las 3 líneas de `claims_nuevos_r14.jsonl` y las valida contra las propuestas F7 (texto íntegro byte a byte, hash, grieta; C-1176 contra el bloque JSON de la lectura F7 r13, cuyo id es POR_ASIGNAR con proyección C-1176), las añade (1.168 → 1.171), añade las 3 entradas de provenance (354 → 357), regenera el resumen con el script real, re-corre las puertas y escribe `puertas_post_absorcion.txt`. Cualquier aserción fallida → restaura los 5 archivos desde el respaldo y sale con error.
3. FASE 2 re-corre las puertas sobre el estado FINAL (lección FRÁGIL-05).

## NO hecho (ni se hará sin orden nueva)

No se absorbió nada: claims 1.168, provenance 354, resumen 315b80b5… — shas re-verificados tras preparar (el script de aplicación se probó solo hasta su guarda: exit=2, "SIN ORDEN", corpus intacto). No se absorbe B1 ni R2-25; no se toca C-112, C-001..C-008, C-416..C-420; no se escribió en GitHub ni Drive. N-01 (política general) sigue pendiente de canon: esta absorción, si se ordena, ejecuta la instancia, no decide la política.

## Cómo se revierte (si se aplica y luego se ordena retirar)

Restaurar los 5 archivos desde `ronda_14/respaldo_pre_r14/` (shas en `manifiesto_shas.json`) y re-correr las puertas: vuelve claims 1.168, provenance 354, audit ok=340. Reversión precisa de F1 r14 (no usar `respaldo_pre_r13/`, anterior).

## Archivos de esta preparación

- `ronda_14/ejecucion_f1/aplicar_absorcion_r14.py` (script con guarda de orden nueva, aserciones y restauración automática; NO ejecutado — probado solo hasta la guarda, exit=2)
- `ronda_14/ejecucion_f1/claims_nuevos_r14.jsonl` (3 líneas C-1174/C-1175/C-1176, formato exacto de claims.jsonl; sha `85de362b…`)
- `ronda_14/ejecucion_f1/decision_absorcion_r14.md` (este archivo)
- `ronda_14/ejecucion_f1/decision_absorcion_r14.json`
- `ronda_14/ejecucion_f1/_dedup_f7_r14.py` + `dedup_f7_r14.json` (re-corrida independiente del dedup; idéntica a FASE 0 r14)
- `ronda_14/ejecucion_f1/puertas_pre_absorcion.txt` (audit exit=0 + verify_all exit=1, pre-estado)
- `ronda_14/respaldo_pre_r14/` (5 archivos + `manifiesto_shas.json`)

ρ(x) > 0. Zvvvvv.
