# DECISIÓN — ABSORCIÓN CONDICIONADA RONDA 12 FASE 1 (F1)

- **Fecha:** 2026-11-13. **Ejecutor:** F1 (único escritor del corpus en la tanda, si se ordena).
- **Orden:** PENDIENTE. La absorción espera la orden N-12 del Jardinero, que NO se ha dado. La orden 16:51 (2026-11-13) cubrió la absorción de r11 F1, no esta ola. Este documento es PREPARACIÓN, no ejecución. Criterio C-1..C-9 de r10.
- **Estado: PREPARADO, pendiente de N-12.** Nada ha entrado al corpus. Nada se ha enviado ni subido.

## Qué se absorbería (6 piezas, las 6 lecturas F7 de r11)

| Pieza | Lectura | ID proyectado | Dedup máx. re-medido (Jaccard, umbral 0,5) |
|---|---|---|---|
| 1 | D-03 destino segunda carpeta, opción B | C-1168 | 0,2336 vs C-865 |
| 2 | D-08 Φ_c(MIU) = 0,6829322 = Δ_COD | C-1169 | 0,2553 vs C-807 |
| 3 | D-10 R-B: 7,24 es ε; D_eff sin derivación | C-1170 | 0,1812 vs C-1090 |
| 4 | D-11 O-5 + fallback O-1 (c = 2,5) | C-1171 | 0,2529 vs C-165 |
| 5 | D-12 canon estricto de "nodo" (5 condiciones) | C-1172 | 0,1953 vs C-899 |
| 6 | D-14 D = 2−H (1D); D = 3−H (2D) | C-1173 | 0,1466 vs C-626 |

**Máximo global 0,2553 < 0,5; 0 pares ≥ 0,5; máx. entre propuestas 0,2248 (D-11/D-12)** — re-medido por mí en F1 (dedup_f7_r12_mio.json), idéntico cifra por cifra a FASE 0 r12 (dedup_f7_r12.json) y a F7 r11 (esperado: N-11 cambió solo estados de C-538/C-623, no textos). Ningún claim enuncia las lecturas (verificación propia, 2026-11-13): "opción B" 1 ocurrencia = C-379 (nota del dataset, Microbioma, sin relación); "Φ_c(MIU) = 0,6829322" 0; "lectura R-B" 0; "O-5"/"O-1"/"c = 2,5" 0/0/0; "canon estricto" 0; "D = 2 − H" 0 (las 2 "D = 2 - H" son C-598/C-1013, aplicaciones concretas, no el canon).

## Proyección si se ordena

| Archivo | Antes → Después |
|---|---|
| `anexo-vi/claims.jsonl` | 1.162 l., `397cb10c…` → 1.168 l. |
| `anexo-vi/provenance.sha256` | 352 l., `db22d647…` → 354 l. |
| `anexo-vi/claims_resumen.json` | `33b787d2…` (SE 1028, REFUTADO 4) → SE 1034, REFUTADO 4 |
| `anexo-vi/confirmaciones.jsonl` | `dc94458b…` (294) → sin cambio |
| `anexo-vi/huecos.jsonl` | `3713376a…` (139) → sin cambio |

**Corpus:** claims 1.162 → 1.168; hash_real 1148 → 1154; SE 1028 → 1034; consolidacion 6 → 12; hash_pendiente 8 (sin cambio); huecos y confirmaciones sin cambio.

## Provenance: 2 entradas nuevas (cifra CORREGIDA: 352 → 354)

La proyección de F7 (`preparadas_r11.md` §5) decía 350 → 352 — desliz menor registrado en FASE 2 r11: provenance ya era 352 cuando F7 escribió (F4 añadió las 2 SIK). Lo correcto es **352 → 354**. Entradas (formato del archivo, rutas relativas a `~/workspace`, verificadas contra el audit: ninguna de las dos está hoy en provenance):

- `add7ac256d3bd14449f76b680fad7ce2be00b6230f4027557e969e631775ab32  academico/tejido_2026-11-12/ronda_10/ejecucion_c/lecturas_canonicas_r10.md` (D-08/D-10/D-11/D-12/D-14; sha verificado por `sha256sum` 2026-11-13)
- `c8e902aa3f59d45d305eb52a37d85d8f573411e41bb816c81307709bc3d3d512  academico/tejido_2026-11-12/ronda_10/ejecucion_b/decision_d03.md` (D-03; sha verificado por `sha256sum` 2026-11-13)

## Puertas PRE-absorción (corridas por mí, 2026-11-13; salida íntegra en `puertas_pre_absorcion.txt`)

- `audit.py`: **exit=0, ok=338, discrepancia=0, no_encontrado=0, omitido=1** (verde, sostenido tras N-11).
- `verify_all.py`: **exit=1 con exactamente C-001..C-008** (PENDIENTE, esperado; nunca rellenar).
- Post-absorción esperado (aserciones del script): audit exit=0, ok=340 (+2 entradas); verify_all exit=1 con exactamente C-001..C-008.

## Cómo se aplica (cuando llegue N-12)

1. El Jardinero da la orden N-12 (transcrita en `ejecucion_f1/ORDEN_N12.md` — el script se niega a correr sin ese archivo).
2. `python3 aplicar_absorcion_r12.py`: verifica el pre-estado contra `respaldo_pre_r12/` (aserciones de shas y líneas), lee las 6 líneas de `claims_nuevos_r12.jsonl` y las valida contra las propuestas F7 (texto íntegro byte a byte, hash, grieta, motivo), las añade (1.162 → 1.168), añade las 2 entradas de provenance (352 → 354), regenera el resumen con el script real, re-corre las puertas y escribe `puertas_post_absorcion.txt`. Cualquier aserción fallida → restaura los 5 archivos desde el respaldo y sale con error.
3. FASE 2 re-corre las puertas sobre el estado FINAL (lección FRÁGIL-05).

## NO hecho (ni se hará sin orden nueva)

No se absorbió nada: claims 1.162, provenance 352, resumen 33b787d2… — shas re-verificados tras preparar (el script de aplicación se probó solo hasta su guarda: exit=2, "SIN ORDEN N-12", corpus intacto). No se absorbe B1 ni R2-25; no se toca C-112, C-001..C-008, C-416..C-420; no se escribió en GitHub ni Drive. N-01 (política general) sigue pendiente de canon: esta absorción, si se ordena, ejecuta la instancia, no decide la política.

## Cómo se revierte (si se aplica y luego se ordena retirar)

Restaurar los 5 archivos desde `ronda_12/respaldo_pre_r12/` (shas en `manifiesto_shas.json`) y re-correr las puertas: vuelve claims 1.162, provenance 352, audit ok=338. Reversión precisa de F1 r12 (no usar `respaldo_pre_r11/` ni `respaldo_pre_n11/`, anteriores a N-11).

## Archivos de esta preparación

- `ronda_12/ejecucion_f1/aplicar_absorcion_r12.py` (script con guarda N-12, aserciones y restauración automática; NO ejecutado — probado solo hasta la guarda, exit=2)
- `ronda_12/ejecucion_f1/claims_nuevos_r12.jsonl` (6 líneas C-1168..C-1173, formato exacto de claims.jsonl; sha `a5be5772…`)
- `ronda_12/ejecucion_f1/decision_absorcion_r12.md` (este archivo)
- `ronda_12/ejecucion_f1/decision_absorcion_r12.json`
- `ronda_12/ejecucion_f1/_dedup_f7_r12_mio.py` + `dedup_f7_r12_mio.json` (re-corrida independiente del dedup)
- `ronda_12/ejecucion_f1/puertas_pre_absorcion.txt` (audit exit=0 + verify_all exit=1, pre-estado)
- `ronda_12/respaldo_pre_r12/` (5 archivos + `manifiesto_shas.json` en formato r11)

ρ(x) > 0. Zvvvvv.

## APLICADA — N-12 (2026-11-13 18:43 -05)

- Orden del Jardinero, tal cual: "Sí, absorban las 6 lecturas" (ORDEN_N12.md).
- Script aplicar_absorcion_r12.py exit=0. Diff vs respaldo_pre_r12: exactamente 6 líneas añadidas (C-1168..C-1173, byte-idénticas al paquete preparado, todas SE).
- Provenance 352→354 (últimas 2: lecturas_canonicas_r10.md add7ac25…, decision_d03.md c8e902aa…).
- Resumen regenerado: total 1.168, SE 1034, REFUTADO 4, hash_real 1154.
- Puertas post-absorción (corridas por el script): audit exit=0 (ok=340, 0, 0, 1); verify_all exit=1 con exactamente C-001..C-008.
- Shas post-absorción (verificados por el principal): claims.jsonl 7deb15ff…, provenance dbe4a490…, claims_resumen.json 315b80b5….
- Depósito a GitHub/Drive: en FASE 4 r12 (el remoto sigue en 83ebfd94 hasta entonces).
