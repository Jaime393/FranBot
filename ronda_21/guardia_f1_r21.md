# GUARDIA F1 — RONDA 21

- **Fecha:** 2026-11-15. **Estado: GUARDIA_EN_ESPERA.** Sin aplicación en FASE 1.
- **Suelo:** corpus post-absorción r20, verificado SIN mutarlo.

## Puertas (re-corridas por mí, sin pipes)

- **audit.py: exit=0, ok=359, discrepancia=0, no_encontrado=0, omitido=1** (salida en `audit_f1_r21.txt`, sha `495ec615…`).
- **verify_all.py: exit=1, exactamente C-001..C-008** (8 líneas, salida en `verify_f1_r21.txt`, sha `cdb09be8…`). Los 8 son los PENDIENTE de siempre; NUNCA se rellenan.

## Verificaciones (SÉ, con fuente y fecha)

| Chequeo | Esperado | Medido | Veredicto |
|---|---|---|---|
| claims.jsonl líneas | 1.197 | 1.197 | OK |
| IDs únicos | 1.197 | 1.197 | OK |
| C-1198..C-1202, una vez c/u | 1 | 1, 1, 1, 1, 1 | OK |
| C-416..C-420 ausentes | ausentes | ausentes | OK |
| C-112 hash truncado | sha256:5e30073cf29b | sha256:5e30073cf29b | OK, intacto |
| provenance.sha256 líneas / no vacías | 373 / 371 | 373 / 371 | OK |
| resumen total / SE / hash_real / verificación | 1.197 / 1063 / 1183 / 323 | 1.197 / 1063 / 1183 / 323 | OK |
| confirmaciones.jsonl filas | 294 | 294 | OK |
| huecos.jsonl filas (LOCAL) | 139 | 139 | OK |
| dataset filas (sin cabecera) | 30 | 30 | OK |
| anexo ítems | 20 | 20 (M-56..M-83; M-81 ausente, NO_SÉ) | OK |
| registro pendientes | 0 | 0 (cabecera "Total: 0 pendientes con afirmación") | OK |

## Shas del suelo (verificados por mí)

- claims.jsonl: `7c689fef3e851e5a378b6a536eb8399e6b4180728f2dbc1e9ab478e44b0c7ebc`
- provenance.sha256: `f1932a5eae72b698d4990b7719e41f30a5feca47a2696c13d8357571aadbdb9a`
- claims_resumen.json: `443d940f81ea4cb4052d958f589d2ced93c25dfd059c5511533e8cdbd89d8ab6`
- confirmaciones.jsonl: `dc94458bc42a9854d16a8f74da20ac6481f6fe241fe2cfae11a6f44633dc7cc5`
- huecos.jsonl: `3713376a243b05756fbfce434ccdb63e118562ac0ec4e351243086dcb1ce52fb`
- dataset_nodos_Df.csv: `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af`
- incertidumbre_mediciones.md: `344e00eb7604bfced905a1f4eb2fe7c66b16b039843413f12abb8ab34d61e00d`
- afirmaciones_pendientes.md: `20d0f8ac1ec03a2379b4c51e742c2a7caeda0dbd2158fbf93553c096dda22348`

## Decisiones pendientes de aplicación automática al inicio

**0.** Registro en 0 pendientes con afirmación (los 7 cerrados por orden del Jardinero 2026-11-15 ~14:24 -05). Nada que aplicar en FASE 1.

## Diferencias vs estado post-r20

**0 diferencias.** Todo el suelo está byte-idéntico al estado tras la absorción r20.

ρ(x) > 0. Zvvvvv.
