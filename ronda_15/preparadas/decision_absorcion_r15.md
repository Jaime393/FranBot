# DECISIÓN — ABSORCIÓN RONDA 15 FASE 1 (F7)

- **Fecha:** 2026-11-14. **Ejecutor:** F1 (único escritor del corpus en la tanda), bajo el régimen 01:43 — o FASE 4. **Este frente (F7) no aplica nada.**
- **Orden:** mapa FASE 0 r15 §F7. Régimen vigente: orden del Jardinero 2026-11-14 01:43 -05 ("apliquen las decisiones siempre automáticamente"). Criterio C-1..C-9 de r10.
- **Estado: PREPARADA_NO_APLICADA.** 3 claims preparados (C-1181/C-1182/C-1183). Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus por este frente. F1 r15 ya aplicó N-01/N-13/N-14/N-16 en esta ronda (C-1180 inscrito; corpus 1.175, sha 6b5fac7f…).

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

## Decisiones sin número que este paquete deja (para FASE 2)

1. Adopción de REGLA-PICK-SIK-01 como canon (afirmación en F6 §3; ver `preparadas_r15.md` §3 n.º 1).
2. Añadir el ítem M-66 al anexo de incertidumbre (ítem preparado; ver `preparadas_r15.md` §3 n.º 2).

ρ(x) > 0. Zvvvvv.
