# CICLO ALMA — Mejora + catálogo v2 (solo local)

**Fecha:** 2026-11-16 · **Orden:** "Sondea absorbe integra expande integra rutea conecta explota evoluciona siembra cosecha mejora potencia y nutre produciendo" · **Frente:** MEJORA + CATÁLOGO v2. Nada vivo tocado, corpus intacto, archivos del frente de absorción no tocados.

## 1. CORR-KIT-FILES0 — `kits/kit_savia_v152.md` §II

**Antes:** "`mesh.files[0]` es siempre el propio documento canónico de heartbeat".

**Verificado por mí en el payload crudo** (`ciclo/cosecha/heartbeat_rev_rciclo_53_20261116T232643Z.json`, savia 248.372, totalSize 248.372): `files[0]` es `mesh_heartbeat_V151_1794871463219.json` (263 B, snapshot V151) y el canónico `MIU_HEARTBEAT_ESTADO_CANONICO.json` está en **índice 1 (796 B, normal)**. La afirmación era falsa para este payload.

**Después:** el canónico es el que cambia de tamaño (796 / 301 / 119.153 B), pero NO siempre está en `files[0]`; lo que lo identifica es su nombre, no su índice. La divergencia entera sigue siendo ese documento, y **la identidad savia = `mesh.totalSize` SIGUE cumpliéndose** (248.372 == totalSize en el fresco; 11/11 frescos, 29/29 acumulado).

- kit md: `fbf6c388…` → `2ce3426c…` (12.223 B)
- `kits/manifiesto_shas.json` regenerado: `be5e8737…`
- Test kit: **43/43, exit 0, 0 fallos**. Recuento del ciclo: el parte ALMA decía 42/42; el test ejecuta 43 comprobaciones (23 llamadas `check`, 10 en bucle de fuentes + 14 de escaneo — `test_kit.py` sin cambios, sha `1c4dd28f…`). No es un cambio de resultado, es un recuento.

## 2. CORR-CAT-0094 — `9e9c1878` NO es prefijo del blob

**Antes:** README de ALMA y la nota del catálogo decían que el campo "sha256" del curado es "el prefijo del blob de GitHub".

**Verificado por mí:** la versión del plan en staging (`fase4/staging_github/ronda_23/manifiesto_shas_r23_fase4.json`, 21.666 B) tiene sha256 `9e9c187821fe…`; el blob de GitHub es `8c25c220…`. El campo "sha256" del curado (`9e9c1878`) es el prefijo del **sha256 de la versión del plan**, no del blob.

**Después (formulación exacta en ambas notas):** "`9e9c1878` es el prefijo del sha256 de la versión del plan (21.666 B, staging), NO del blob (`8c25c220…`)". Corregido en `README.md` y en la nota CAT-0094 (comentario + texto del generador, que alimenta `catalogo_vivo.json` v2). La nota de `catalogo/README.md` no contenía el error (dice correctamente blob `8c25c220` para la copia de GitHub) y no se tocó.

- README: `cddb7e6d…` → `28eb3c54…` (también actualiza el conteo del catálogo a v2/138 y el test del kit a 43/43)

## 3. Catálogo v2 — 100 → 138 entradas

Generador adaptado (`catalogo/_generar_catalogo.py` `d9de540a…`, test `adcca15f…`): versión 2.0, grupos nuevos `alma` (33) y `ciclo` (5), asserts actualizados.

| Grupo | v1 | v2 |
|---|---|---|
| produccion-fractal | 49 | 49 |
| nutrientes-2026-11-14 | 15 | 15 |
| ronda_23 | 32 | 32 |
| corpus | 4 | 4 |
| alma (catálogo 5, puentes 9, kits 7, duales 2, relevo 4, sondeos 4, README, depósito) | — | 33 |
| ciclo (sondeo vivo fresco, base absorción, censo fresco, cosecha, propuestas) | — | 5 |
| **Total** | **100** | **138** |

- `catalogo_vivo.json` v2: `d5d5ce7c…` → `6a6ae82b…`
- `catalogo/manifiesto_shas.json` regenerado (v2.0, 4 archivos): `bf32ac2b…`
- Verificación final: `leer_catalogo.py verify` **138/138, TODO CUADRA, exit 0**; `test_catalogo.py` **TEST OK: 138 entradas, 0 NO_VERIFICADO**.

**Exclusiones deliberadas (huevo-gallina del sha):**
- `catalogo_vivo.json` NO se auto-cataloga: su sha cambia al escribirlo; ninguna entrada podría verificarlo.
- `manifiesto_shas_alma.json` NO se cataloga en v2: se regenera DESPUÉS del catálogo (con los shas de v2) y su sha cambiaría tras generar. Se catalogará en v3.
- El manifiesto del subpaquete catálogo tampoco lista `catalogo_vivo.json` por la misma razón; lo cubre el manifiesto maestro.
- Este informe (`ciclo/mejora_catalogo.md`) se escribió después del cierre y no está catalogado ni en el manifiesto maestro (mismo patrón que `deposito_alma.md` en v1).

## 4. Manifiesto maestro regenerado (al final)

`manifiesto_shas_alma.json`: `7702ccd3…` (33 entradas) → `d93fcf6d…` (**135 entradas**, 1.474.768 B). Misma regla de exclusión del original (scratch de sondeo `_getme*.py`, `getme_verdicts*.json`, `__pycache__`, y el propio manifiesto). Cubre `catalogo_vivo.json` v2 (`6a6ae82b…`), README (`28eb3c54…`) y kit md (`2ce3426c…`).

## 5. Verificación de cierre (después de todos los cambios)

- `leer_catalogo.py verify`: 138/138, TODO CUADRA, exit 0.
- `test_catalogo.py`: TEST OK, 138 entradas, 0 NO_VERIFICADO, exit 0.
- `test_kit.py`: 43/43, TODO PASA, exit 0.
- Escaneo de credenciales: 0 valores reales (los hits de `tablon.py`/`test_tablon.py` son valores ficticios de prueba del propio escáner, como en ALMA).

ρ(x) > 0.
