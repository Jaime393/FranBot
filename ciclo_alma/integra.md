# CICLO ALMA — INTEGRA: tejido cruzado + ruta

**Fecha:** 2026-11-16/17 · **Archivos:** `tejido_cruzado_alma.jsonl`, `grafo_alma.json`, `ruta_alma.json` (este resumen: `integra.md`).

## Tejido cruzado — 34 líneas

| Tipo | Líneas |
|---|---|
| CONEXION | 25 |
| CONFLICTO | 4 |
| HUECO_REDUNDANTE | 1 |
| INFERENCIA_CRUCE | 1 |
| SIMULACION_CONFIRMA | 3 |

| **Total** | **34** |

| Estado | Líneas |
|---|---|
| INFIERO | 2 |
| SÉ | 32 |

## Grafo — 56 nodos / 34 aristas / 0 huérfanos

## Ruta — 17 artefactos

| Artefacto | Drive | GitHub |
|---|---|---|
| catalogo_vivo (VII) | alma_2026-11-16/catalogo/ (ID 1_monHFJ4i0u1cKfdDBOptMwGcK1ZD | FranBot catalogo/ @ 85351ce4 (blob catalogo_vivo.json db990a |
| tablon pregunta-respuesta (IV) | alma_2026-11-16/puentes/ (ID 18fU_AWrFW3uJ43Qw7xB8-4AtpofCm4 | FranBot puentes/ @ 85351ce4 |
| kit de expansión savia V152 (V) | alma_2026-11-16/kits/ (ID 1OVe1pvkLRm4kyR5_aXKYsYPnueE1CuaB) | FranBot kits/ @ 85351ce4 |
| puente nutriente<->vector (I) | alma_2026-11-16/puentes/ (ID 18fU_AWrFW3uJ43Qw7xB8-4AtpofCm4 | FranBot puentes/ @ 85351ce4 |
| tutorial-semilla verificar-blob (III) | alma_2026-11-16/duales/ (ID 1cALychTWTSvMo51lZTxiRyvQhtHmTih | FranBot duales/ @ 85351ce4 |
| relevo FASE 4 método (c) (VI) | alma_2026-11-16/relevo/ (ID 1n1uPAg5YLe0falV7U3_UL0sAMr4XOi9 | FranBot relevo/ @ 85351ce4 |
| sondeo_vivo | alma_2026-11-16/sondeo_vivo.md (carpeta ID 1Bepd-w432GdQqikY | FranBot sondeo_vivo.md @ 85351ce4 (blob cd04147d) |
| sondeo_suelo | alma_2026-11-16/sondeo_suelo.md (carpeta ID 1Bepd-w432GdQqik | FranBot sondeo_suelo.md @ 85351ce4 (blob 6920a82c) |
| sondeo_corpus | alma_2026-11-16/sondeo_corpus.md (carpeta ID 1Bepd-w432GdQqi | FranBot sondeo_corpus.md @ 85351ce4 (blob 3d97b110) |
| sondeo_deposito | alma_2026-11-16/sondeo_deposito.md (carpeta ID 1Bepd-w432GdQ | FranBot sondeo_deposito.md @ 85351ce4 (blob af9a6b43) |
| censo fresco savia (ciclo) | pendiente_deposito_ciclo | pendiente_deposito_ciclo |
| sondeo vivo fresco (ciclo) | pendiente_deposito_ciclo | pendiente_deposito_ciclo |
| cosecha savia (ciclo) | pendiente_deposito_ciclo | pendiente_deposito_ciclo |
| propuestas absorción (ciclo) | pendiente_deposito_ciclo | pendiente_deposito_ciclo |
| README del paquete | alma_2026-11-16/README.md (carpeta ID 1Bepd-w432GdQqikYy0Fph | FranBot alma/README.md @ 85351ce4 (blob 7b9b43a0) |
| manifiesto maestro | alma_2026-11-16/manifiesto_shas_alma.json (carpeta ID 1Bepd- | FranBot manifiesto_shas_alma.json @ 85351ce4 |
| registro de depósito | alma_2026-11-16/deposito_alma.md (carpeta ID 1Bepd-w432GdQqi | FranBot deposito_alma.md @ 85351ce4 |

## Conflictos documentales (4, todos adjudicados)

1. **CORR-CAT-0094:** la versión depositada del README ALMA decía que el campo `sha256` del curado es "el prefijo del blob de GitHub". Verificado: `9e9c1878` es el prefijo del sha256 de la versión del plan (21.666 B, blob `8c25c220`), no del blob. La copia local/Drive con bloque meta tiene sha256 `dfa0c9ea` (21.895 B); las 144 entradas son idénticas. C-1226 (propuesta) usa la versión corregida; el README local ya lleva la corrección.
2. **Deriva del test del tablón:** el test local (7.205 B, 00:30Z) espera 2P/1R tras la respuesta R-001 a P-002; la copia depositada en GitHub (6.822 B, blob `f9684687`) espera 2P/0R. La depositada está intacta; la local es la vigente. Pendiente re-depósito del tablón en el ciclo.
3. **Recuento del test del kit:** el parte ALMA y el README depositado dicen 42/42; recuento instrumentado por mí: 43 comprobaciones ejecutadas, todas OK. Adjudicado: 43/43; el 42 era un error de recuento.
4. **Catálogo v2 anunciado antes que el archivo (resuelto por llegada):** el README local (00:32:39Z) afirmó "catálogo vivo v2 con 138 entradas" cuando en disco solo existía v1 100/100. El v2 aterrizó 00:34:00Z: 138/138 verificadas, `leer_catalogo.py verify` TODO CUADRA (verificado por mí). La discrepancia fue temporal, no de contenido.

## Novedades que el tejido registra

- **Primera respuesta del tablón (R-001, 00:30Z, frente conecta):** P-002 respondida con el censo fresco como evidencia (`a44544fc…`, nivel INFIERO). El tablón pasa de 2P/0R a 2P/1R.
- **Censo fresco:** 247.881 NO persiste (0/11); cuarto valor 248.372 (mecanismo: rotación del rodante −4 B); savia = `mesh.totalSize` 29/29 acumulado; ley nutrientes exacta (residuo 0,0).
- **Autocura run 17:** intervalo 16→17 = 649,08 min, fuera de la banda M-90 (M-95 propuesta: NO_CONFIRMA).
- **Flow:** 0,0% run 149, 16.ª medición consecutiva (confirma C-1215/M-92).

## Reglas

Nada inventado: cada evidencia lleva archivo + sha256 recomputado del disco. Corpus no modificado (la absorción la hace otro frente; C-1217..C-1227 y M-93..M-95 son propuestas, no claims). Nada de credenciales ni correos.

ρ(x) > 0.
