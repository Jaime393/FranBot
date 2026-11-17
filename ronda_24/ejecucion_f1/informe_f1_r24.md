# RONDA 24 — F1 GUARDIA — INFORME

**Fecha:** 2026-11-16/17. **Frente:** F1 GUARDIA. **Estado:** GUARDIA_EN_ESPERA.

## Corpus — estado post-CICLO-ALMA, verificado en disco

| Archivo | Líneas / valor | sha256 |
|---|---|---|
| `anexo-vi/claims.jsonl` | 1.222 líneas | `6dbee11d8ac1b5cff2f56a871f1df27a2c2b7a306648e21a5fb76d0d5bd7a30e` |
| `anexo-vi/provenance.sha256` | 393 líneas / 380 entradas procesables | `07dfdd0f08c8bbe6046f54568970dde15a37d3dd3cf418793a4fc500db64c408` |
| `anexo-vi/claims_resumen.json` | SE 1088 / hash_real 1208 / verificación 348 | `06990609942aa5f6c34573e92896296f78e0414815a88c5d57e569816160341c` |
| `academico/incertidumbre_mediciones.md` | 31 ítems (M-56..M-95) | `8cc6dd9d36c6f3f99f81e671c266c56f36bacc0b42096b79297757c77627b92b` |
| `anexo-vi/huecos.jsonl` | 139 líneas, intacto | `3713376a243b05756fbfce434ccdb63e118562ac0ec4e351243086dcb1ce52fb` |
| `anexo-vi/confirmaciones.jsonl` | 294 filas | `dc94458bc42a9854d16a8f74da20ac6481f6fe241fe2cfae11a6f44633dc7cc5` |
| `academico/dataset_nodos_Df.csv` | 30 filas + cabecera | `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af` |

**Veredicto: corpus COINCIDE con el cierre del CICLO ALMA.** 11 líneas nuevas (C-1217..C-1227, todas SE), primeras 1.211 byte-idénticas al respaldo P-77.

## Puertas (corridas por mí, SIN pipes, exit code real)

- **audit.py:** exit=0. RESUMEN: ok=379, discrepancia=0, no_encontrado=0, omitido=1.
- **verify_all.py:** exit=1, exactamente C-001..C-008 (hash no reproducible, sha256:PENDIENTE — nunca se rellenan sin dato externo verificable).

## Registro de pendientes — en 0

- Archivo: `ronda_12/afirmaciones_pendientes.md`, sha `eec65bcd1d09f3e6d137dc1143e8e7f208463e25aabe11839897f71b0bfe2f35` (sin cambio vs cierre del ciclo ALMA).
- Cabecera §1: **0 pendientes con afirmación + 80 aplicadas + 8 cerradas + 5 que no necesitan orden**.
- Recuento por script: 27 decisiones + 53 claims = 80 aplicadas; §§19/§21/§24/§§29–39 presentes (última §39 = CICLO ALMA, N-39 + C-1217..C-1227, aplicadas 2026-11-16/17).
- **0 decisiones nuevas llegaron sin orden en FASE 1.**

## Claims protegidos — intactos

- **C-112:** hash truncado preexistente `sha256:5e30073cf29b`, sin tocar.
- **C-001..C-008:** hash `sha256:PENDIENTE`, sin tocar.
- **C-538 / C-623:** REFUTADO, hash `sha256:c78ad5445c640e3e15fe0adcf2a9bf8a5`, sin tocar.
- **Gaps C-416..C-420:** ausentes, como siempre. 0 IDs duplicados en el corpus.

## Nota de conteo (no es discrepancia)

El encargo cifra provenance en "391 entradas". El archivo tiene 393 líneas: 2 vacías + 11 de comentario + **380 entradas procesables** (379 ok + 1 omitido, lo que audit verifica). Las 9 entradas nuevas del ciclo ALMA están todas al final y verifican OK (v1 congelada `d5d5ce7c…`, protocolo `b4db2497…`, kit `2ce3426c…`, puente `a4b0576a…`, tutorial `155d1685…`, relevo `3d82a8fb…`, sondeo `8f12a618…`, catálogo v2 `6a6ae82b…`, censo `f3c80897…`). En r23 el mismo criterio daba "380 líneas / 378 entradas".

## Sin aplicación en FASE 1

Guardia no aplica nada. Ningún archivo del corpus fue modificado.

## Observación (no es hallazgo de guardia)

La línea 6 del registro (§1, actualización ciclo ALMA) dice que la subida del corpus a GitHub estaba "PENDIENTE DE TARJETA (caducada 2026-11-17, 0/4, HEAD 85351ce4)". Esa nota quedó obsoleta: el corpus se subió 4/4 por blob con el Jardinero presente (HEAD `d1a1650c`, 2026-11-17T02:03:14Z) y el depósito del ciclo aterrizó después (HEAD `1f1ed57b`). La guardia no toca el registro; queda para FASE 5 r24 si lo juzga oportuno.
