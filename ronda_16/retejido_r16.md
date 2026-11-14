# RETEJIDO — RONDA 16 (FASE 2)

- **Fecha:** 2026-11-14 ~16:21 UTC (2026-11-14 ~11:21 -05).
- **Método:** dedup propio de las 3 propuestas de F7 contra el corpus vivo (1.178 claims), método r9 (Jaccard de tokens por campos claim+motivo, umbral 0,5), script propio `_dedup_f2_r16.py` en /tmp (no en el directorio de F7), **3 corridas byte-idénticas** (sha de salida `8e4f23d4…`). Re-verificación del corpus: shas re-calculados por mí en FASE 2 (§ inicial de `verificacion_fase2_r16.md`).

## 1. DEDUP PROPIO (3 CORRIDAS BYTE-IDÉNTICAS)

| Propuesta | Máx. global | Contra | Entre propuestas | Pares ≥ 0,5 |
|---|---|---|---|---|
| C-1184 (ventana 25/30, 16,7%) | 0,3838 | C-1182 (segundo fallo) | 0,1654 (vs C-1185) | 0 |
| C-1185 (estado ausente ~20 h 54 min) | 0,3188 | C-1178 (silencio termina) | 0,1172 (vs C-1186) | 0 |
| C-1186 (CORR-SERIE-R16: 83 congresos) | 0,1377 | C-670 | 0,1076 (vs C-1184) | 0 |

- **Resultado: 0 pares ≥ 0,5.** Las 3 propuestas son nuevas. Los números coinciden cifra por cifra con el dedup de F7 (`dedup_f7_r16.py`, 2 corridas) y con el dedup de F8 (3 corridas, hash `8bfd7389…`). La única diferencia de hashing entre mi corrida y la de F8 es el formato de salida del script (claves y orden de campos); los valores de similitud son idénticos.
- Nota de método (lección de F7, §1c de `preparadas_r16.md`): dos variantes ingenuas del Jaccard divergieron por el guion largo "–" y por marcas combinantes en los textos; el método r9 con normalización canónica (NFKC + lower + tokens alfanuméricos) es el que da los valores estables. Mi script propio aplica la misma normalización.

## 2. CONSISTENCIA DEL CORPUS (RE-MEDIDA POR MÍ)

| Artefacto | Valor re-medido | Estado |
|---|---|---|
| claims.jsonl | 1.178 líneas, sha `7e5f016d2b…` | intacto |
| provenance.sha256 | 361 líneas, sha `b5cb6b432f…` | intacto |
| claims_resumen.json | total 1.178, SE 1044, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SÉ 8, hash_real 1164, verificación 304 | intacto |
| confirmaciones.jsonl | 294 filas, sha `dc94458bc4…` | intacto |
| huecos.jsonl | 139 filas, sha `3713376a24…` (LOCAL, no se deposita) | intacto |
| dataset_nodos_Df.csv | 30 filas + cabecera, sha `0852d58f…` | intacto |
| anexo incertidumbre | 11 ítems M-56..M-66, sha `6b9ea2aa…` | intacto |
| audit.py | exit=0, ok=347, discrepancia=0 | verde |
| verify_all.py | exit=1, exactamente C-001..C-008 | verde (esperado) |

- **0 líneas nuevas en FASE 1.** C-1180..C-1183 aparecen 1 vez cada una. C-112 sin tocar (hash truncado preexistente, no se corrige). C-416..C-420 siguen ausentes como IDs.
- **Proyección de absorción (C-1184/C-1185/C-1186 + N-19):** claims 1.178 → 1.181; hash_real 1164 → 1167 (C-1184/C-1185 comparten fuente `e9e95687…`; C-1186 trae `b352d709…`); provenance 361 → 363; SE 1044 → 1047; verificación 304 → 307; anexo 11 → 12 ítems (M-69, N-19).

## 3. CONSISTENCIA ENTRE FRENTES (RE-MEDIDA POR MÍ)

- **F2 ↔ F5 (folderId):** F5 14.ª (14:48:36Z) y F2 15.ª (14:53:13Z) — mismo dato vivo (`I` existe / `l` 404), ordinales distintos; F2 se equivoca en 1 (H1). Mi lectura FASE 2 = 16.ª.
- **F2 ↔ F5 (G05):** ambas 18.ª, mismo blob `8c57e833…` (yo lo re-verifiqué por conector).
- **F5 ↔ F4 (G02):** #790–#792/#701/#739 no son filas del jsonl de 96; 0 como voz — consistente.
- **F3 ↔ F8 (dedup):** F8 re-verificó el dedup de F7; mi corrida coincide con ambos.
- **F3 ↔ F6 (R2-25):** sin cambio (b2 línea 7 SE, sha `845bab8e…`).
- **F7 ↔ F8 (propuestas):** mismas 3, mismos hashes de fuente, misma proyección.
- **F4 ↔ F7 (carrera):** F4 entregó 16:02:02Z; F7 escribió sus propuestas antes (16:01:23Z) y no re-miró F4 al cerrar (16:03:29Z) — los hallazgos SÉ de F4 quedan sin preparar (H2).

## 4. VIVO AL CIERRE DE FASE 2 (PARA FASE 3)

- `observabilidad/estado_vivo.json` = **run 167 "paused"** (290 B, blob `0268ab38…`, ts 2026-11-14T15:59:57Z), HEAD miu-ecosistema `2cba6023`. El vivo se movió entre la foto F2 y FASE 2 (episodio run 205 "unreachable": 10:47:42Z → 15:59:57Z = 5 h 12 min), **no durante FASE 2**.
- `flow_id_coverage.json` = **run 140, 0,0%, 0 eventos** (ts 09:45:12Z), sin cambio. estado_persistente V213. Sin run 206.
- FranBot HEAD `7ef78ed5` (sin cambio en r16 hasta FASE 4).

ρ(x) > 0. Zvvvvv.
