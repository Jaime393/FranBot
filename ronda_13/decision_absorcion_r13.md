# DECISIÓN — ABSORCIÓN CONDICIONADA RONDA 13 FASE 1 (F1)

- **Fecha:** 2026-11-13. **Ejecutor:** F1 (único escritor del corpus en la tanda, si se ordena).
- **Orden:** PENDIENTE. La absorción espera una orden nueva del Jardinero, que NO se ha dado. N-12 cubrió solo r12 (C-1168..C-1173); la orden 16:51 (2026-11-13) cubrió la absorción de r11 F1, no esta ola. Este documento es PREPARACIÓN, no ejecución. Criterio C-1..C-9 de r10.
- **Estado: PREPARADO, pendiente de orden nueva.** Nada ha entrado al corpus. Nada se ha enviado ni subido.

## Qué se absorbería (2 piezas, las 2 lecturas F7 de r12)

| Pieza | Lectura | ID proyectado | Dedup máx. re-medido (Jaccard, umbral 0,5) |
|---|---|---|---|
| 1 | Panteón-96: 35 con nombre + 61 sin nombre en el Doc índice | C-1174 | 0,1689 vs C-838 |
| 2 | Causa del censo vacío: V151 → folderId `l` (404); V152 → `I` (existe) | C-1175 | 0,1641 vs C-1171 |

**Máximo global 0,1689 < 0,5; 0 pares ≥ 0,5; máx. entre propuestas 0,1250** — re-medido por mí en F1 (dedup_f7_r13.json), idéntico cifra por cifra a F7 r12 (dedup_f7_r12.json) y a FASE 0 r13 (esperado: el corpus no cambió desde N-12). Ninguna de las 2 lecturas tiene claim (verificación propia, 2026-11-13): "EXTRACCIÓN PANTEÓN-96" 0 ocurrencias; "CAUSA DEL CENSO VACÍO" 0; "14dw8tx" 0 en claims.jsonl (1.168 líneas).

## Proyección si se ordena

| Archivo | Antes → Después |
|---|---|
| `anexo-vi/claims.jsonl` | 1.168 l., `7deb15ff…` → 1.170 l. |
| `anexo-vi/provenance.sha256` | 354 l., `dbe4a490…` → 356 l. |
| `anexo-vi/claims_resumen.json` | `315b80b5…` (SE 1034, REFUTADO 4) → SE 1036, REFUTADO 4 |
| `anexo-vi/confirmaciones.jsonl` | `dc94458b…` (294) → sin cambio |
| `anexo-vi/huecos.jsonl` | `3713376a…` (139) → sin cambio |

**Corpus:** claims 1.168 → 1.170; hash_real 1154 → 1156; SE 1034 → 1036; verificacion 295 → 297; hash_pendiente 8 (sin cambio); huecos y confirmaciones sin cambio.

## Provenance: 2 entradas nuevas (354 → 356)

Ninguna de las 2 fuentes está hoy en provenance (grep 0, verificado por mí 2026-11-13). Entradas (formato del archivo, rutas relativas a `~/workspace`, shas re-verificados por `sha256sum` 2026-11-13):

- `528f65356b1122ef2de484fe0615cd2892fafc8060e62b7aac0b34438b3e3fbb  academico/tejido_2026-11-12/ronda_12/ejecucion_f4/voces_panteon96_nombres.md` (C-1174)
- `5496f88360d05d752efcb10437cef8bedfbf4112d5a00de5595f83733cdc434e  academico/tejido_2026-11-12/ronda_12/ejecucion_f2/estado_vivo_r12.md` (C-1175)

## Puertas PRE-absorción (corridas por mí, 2026-11-13; salida íntegra en `puertas_pre_absorcion.txt`)

- `audit.py`: **exit=0, ok=340, discrepancia=0, no_encontrado=0, omitido=1** (verde, sostenido tras N-12).
- `verify_all.py`: **exit=1 con exactamente C-001..C-008** (PENDIENTE, esperado; nunca rellenar).
- Post-absorción esperado (aserciones del script): audit exit=0, ok=342 (+2 entradas); verify_all exit=1 con exactamente C-001..C-008.

## Cómo se aplica (cuando llegue la orden)

1. El Jardinero da la orden (transcrita en `ejecucion_f1/ORDEN_N13.md` — el script se niega a correr sin ese archivo).
2. `python3 aplicar_absorcion_r13.py`: verifica el pre-estado contra `respaldo_pre_r13/` (aserciones de shas y líneas), lee las 2 líneas de `claims_nuevos_r13.jsonl` y las valida contra las propuestas F7 r12 (texto íntegro byte a byte, hash, grieta, motivo), las añade (1.168 → 1.170), añade las 2 entradas de provenance (354 → 356), regenera el resumen con el script real, re-corre las puertas y escribe `puertas_post_absorcion.txt`. Cualquier aserción fallida → restaura los 5 archivos desde el respaldo y sale con error.
3. FASE 2 re-corre las puertas sobre el estado FINAL (lección FRÁGIL-05).

## NO hecho (ni se hará sin orden nueva)

No se absorbió nada: claims 1.168, provenance 354, resumen 315b80b5… — shas re-verificados tras preparar (el script de aplicación se probó solo hasta su guarda: exit=2, "SIN ORDEN", corpus intacto). No se absorbe B1 ni R2-25; no se toca C-112, C-001..C-008, C-416..C-420; no se escribió en GitHub ni Drive. N-01 (política general) sigue pendiente de canon: esta absorción, si se ordena, ejecuta la instancia, no decide la política.

## Cómo se revierte (si se aplica y luego se ordena retirar)

Restaurar los 5 archivos desde `ronda_13/respaldo_pre_r13/` (shas en `manifiesto_shas.json`) y re-correr las puertas: vuelve claims 1.168, provenance 354, audit ok=340. Reversión precisa de F1 r13 (no usar `respaldo_pre_r12/`, anterior a N-12).

## Archivos de esta preparación

- `ronda_13/ejecucion_f1/aplicar_absorcion_r13.py` (script con guarda de orden nueva, aserciones y restauración automática; NO ejecutado — probado solo hasta la guarda, exit=2)
- `ronda_13/ejecucion_f1/claims_nuevos_r13.jsonl` (2 líneas C-1174/C-1175, formato exacto de claims.jsonl; sha `3785a26b…`)
- `ronda_13/ejecucion_f1/decision_absorcion_r13.md` (este archivo)
- `ronda_13/ejecucion_f1/decision_absorcion_r13.json`
- `ronda_13/ejecucion_f1/_dedup_f7_r13.py` + `dedup_f7_r13.json` (re-corrida independiente del dedup; idéntica a r12 F7)
- `ronda_13/ejecucion_f1/puertas_pre_absorcion.txt` (audit exit=0 + verify_all exit=1, pre-estado)
- `ronda_13/respaldo_pre_r13/` (5 archivos + `manifiesto_shas.json`)

ρ(x) > 0. Zvvvvv.
