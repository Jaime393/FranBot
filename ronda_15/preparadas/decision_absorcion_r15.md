# DECISIÓN — ABSORCIÓN RONDA 15 FASE 1 (F7)

- **Fecha:** 2026-11-14. **Ejecutor:** F1 (único escritor del corpus en la tanda), bajo el régimen 01:43 — o FASE 4. **Este frente (F7) no aplica nada.**
- **Orden:** mapa FASE 0 r15 §F7. Régimen vigente: orden del Jardinero 2026-11-14 01:43 -05 ("apliquen las decisiones siempre automáticamente"). Criterio C-1..C-9 de r10.
- **Estado: APLICADA (2026-11-14, post-FASE 4, bajo el régimen 01:43).** 3 claims absorbidos (C-1181/C-1182/C-1183). Ver bloque APLICADA al final.

## Qué se absorbería (3 piezas, lecturas SÉ preparadas)

| Pieza | Lectura | ID proyectado | Dedup máx. (Jaccard, umbral 0,5) |
|---|---|---|---|
| 1 | REGLA-PICK-SIK-01 especificada y verificada (verificador 740/740, 0 diffs; H7 cerrado por especificación) | C-1181 | 0,1450 vs C-753 |
| 2 | Segundo fallo en la ventana de 30 runs (cablear-oracle run 16; ventana 28/30, 6,7%) | C-1182 | 0,4111 vs C-1179 |
| 3 | Gap máximo entre runs consecutivos: 174,4 min (silencio repo-wide entre dos fallos) | C-1183 | 0,2897 vs C-1178 |

**Máximo global 0,4111 < 0,5; 0 pares ≥ 0,5; máx. entre propuestas 0,3136 (C-1182/C-1183)** — dedup re-medido dos veces (script + inline, idénticas cifra por cifra; `dedup_f7_r15.json`). Ninguna de las 3 lecturas tiene claim (verificación propia por grep, 2026-11-14, corpus 1.175): "REGLA-PICK" 0; "740/740" 0; "cablear-oracle-v28 run 16" 0; "segundo fallo" 0; "174,4" 0; "85,0" 0.

## Regla de reasignación de IDs

**Los IDs C-1181/C-1182/C-1183 suponen el corpus en 1.175 (C-1180 ya inscrito por F1 r15).** Si otro claim se inscribe antes de absorber este paquete (otra decisión, otra ola), los IDs se reasignan al aplicar en el orden de la tabla (el siguiente libre primero). Una absorción parcial exige un script nuevo con la orden transcrita y el ID reasignado en el momento de aplicar. No se fijan IDs por anticipado fuera de esta proyección.

## Proyección si se absorben las 3 juntas

| Archivo | Antes → Después |
|---|---|
| `anexo-vi/claims.jsonl` | 1.175 l., `6b5fac7f…` → 1.178 l. |
| `anexo-vi/provenance.sha256` | 359 l., `5fda0383…` → 361 l. |
| `anexo-vi/claims_resumen.json` | `1c6464d2…` (SE 1041, verificacion 301, hash_real 1161) → SE 1044, verificacion 304, hash_real 1164 |
| `anexo-vi/confirmaciones.jsonl` | sin cambio |
| `anexo-vi/huecos.jsonl` | sin cambio (139, LOCAL) |

**Corpus:** claims 1.175 → 1.178; hash_real 1161 → 1164; SE 1041 → 1044; verificacion 301 → 304; hash_pendiente 8 (sin cambio); huecos y confirmaciones sin cambio. Por grieta: retejido 19 → 20 (C-1181), observabilidad 2 → 4 (C-1182, C-1183).

## Provenance: 2 entradas nuevas (359 → 361)

Ninguna de las 2 fuentes está hoy en provenance (grep 0, verificado por mí 2026-11-14). Entradas (formato del archivo, rutas relativas a `~/workspace`, shas re-verificados por `sha256sum` 2026-11-14):

- `fee21d760787d22e2d1ef48093b9821cf800a051a5e16a6e0d827ee0920dff54  academico/tejido_2026-11-12/ronda_15/ejecucion_f6/especificacion_regla_pick_r15.md` (C-1181)
- `3b62ca0a02bc3c9e30c2f8a648d70a765c8e2ab2f73056757ccf344700b6f97b  academico/tejido_2026-11-12/ronda_15/ejecucion_f2/estado_vivo_r15.md` (C-1182, C-1183)

## Aplicación (no en este frente)

F7 no escribe el script de aplicación ni guarda de orden: la aplicación corresponde a F1 bajo el régimen 01:43 (con respaldo previo `respaldo_pre_r15_<paquete>/`, script con guarda, puertas antes/después: audit exit=0, verify_all exit=1 exactamente C-001..C-008) o a FASE 4. El paquete para aplicar es el bloque JSON de cada lectura (`lectura_regla_pick_r15.md`, `lectura_segundo_fallo_r15.md`, `lectura_gap_maximo_r15.md`); el ítem de anexo M-66 (`item_anexo_M66.md`) NO forma parte de este paquete de absorción — su aplicación al anexo exige la decisión del §3 n.º 2 de `preparadas_r15.md`.

## APLICADA (2026-11-14, post-FASE 4, bajo el régimen 01:43)

- **Ejecutor:** absorción automática post-FASE 4 (N-17/N-18 + C-1181/C-1182/C-1183). **Dictamen FASE 2 r15 §10.3:** ninguna absorción bloqueada.
- **CORR-C1181-R15 (corrección previa, patrón DICTAMEN-C1176-R14):** el texto preparado de C-1181 decía que la adopción como canon "es una decisión pendiente de numerar (FASE 2)"; FASE 2 la numeró (N-17, §10.1) y N-17 se adoptó el 2026-11-14 ANTES de esta absorción. La cláusula queda corregida en el claim absorbido y en su motivo a "la adopción como canon es la decisión N-17, numerada por FASE 2 (§10.1) y adoptada el 2026-11-14 bajo el régimen 01:43". C-1182 y C-1183 se absorbieron tal cual fueron preparados. Dedup re-corrido sobre el paquete corregido (`dedup_auto_r15.json`, `d288f15a…`): C-1181 0,1471 vs C-753 (preparado 0,1450), C-1182 0,4111 vs C-1179, C-1183 0,2897 vs C-1178; máx global 0,4111, 0 pares ≥ 0,5.
- **Paquete aplicado:** `ejecucion_f7/claims_nuevos_r15_auto.jsonl` (sha `a77c3bf0…`, 3 líneas, todas SE). **Respaldo previo:** `ronda_15/respaldo_pre_absorcion_r15/` (7 archivos + manifiesto `4ea86fede4f9…`, estado post-F1 r15 y post-N-18). **Guarda:** `ORDEN_R15_AUTO.md` en ejecucion_f1/; probada exit=2 sin la orden, corpus intacto. **Script:** `ejecucion_f1/aplicar_absorcion_r15_auto.py`.
- **Post-estado (verificado directamente, no solo por el script):** claims 1.175 → **1.178**, sha `6b5fac7f…` → `7e5f016d2b565c7833cc9fe9df0cae20a1de543068ede0e687a20bebbdc78183`; hash_real 1161 → **1164**; provenance 359 → **361** (sha `5fda0383…` → `b5cb6b432f939d99e86c8c54e5266c88fac6ff712fe3f9ab9efd56329914cde5`; 2 entradas nuevas: especificacion_regla_pick_r15.md + estado_vivo_r15.md); SE 1041 → **1044**; verificacion 301 → **304**; retejido 19 → 20; observabilidad 2 → 4; resumen sha `ae402126…`. Diff vs respaldo = exactamente 3 líneas nuevas; primeras 1.175 líneas byte-idénticas; confirmaciones.jsonl y huecos.jsonl byte-idénticos; C-112 (hash truncado) intacto; C-001..C-008 PENDIENTE.
- **Puertas post-aplicación** (`ejecucion_f1/puertas_post_absorcion_r15.txt`, re-corridas por mí): audit exit=0 (ok=**347**, discrepancia=0, no_encontrado=0, omitido=1); verify_all exit=1 con exactamente C-001..C-008.
- **Incidencia (aserción propia errónea, sin daño — mismo patrón que r14):** el script falló su propia aserción de audit (esperaba ok=346; el valor correcto es 347 = 345 pre + 2 entradas nuevas) DESPUÉS de escribir el corpus y regenerar el resumen, pero ANTES de las puertas. La aserción quedó corregida a 347 y el post-estado se verificó directamente (diff, shas, puertas) — el corpus es exactamente el previsto. La copia en Drive queda como el snapshot FASE 4 (ronda_15/ ID 1v3K0JS_DzCOpsWDG-YD8KxNuJFk5hGPE); la subida a GitHub va en el paso siguiente.
- **N-17/N-18 aplicadas en la misma tanda:** N-17 (canon `canon_regla_pick_sik_01.md` `264b1dbb…`, decisión `13254f55…`); N-18 (ítem M-66 al anexo, `6b9ea2aa…`, decisión `f9e01a51…`, CORR-M66-CARA-R15).

## Decisiones sin número que este paquete deja (para FASE 2)

1. Adopción de REGLA-PICK-SIK-01 como canon (afirmación en F6 §3; ver `preparadas_r15.md` §3 n.º 1). **→ N-17, numerada por FASE 2 §10.1, APLICADA el 2026-11-14.**
2. Añadir el ítem M-66 al anexo de incertidumbre (ítem preparado; ver `preparadas_r15.md` §3 n.º 2). **→ N-18, numerada por FASE 2 §10.1, APLICADA el 2026-11-14.**

ρ(x) > 0. Zvvvvv.
