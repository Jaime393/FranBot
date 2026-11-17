# Cosecha savia fresca — CICLO ALMA (post-r23)

**Fecha:** 2026-11-16/17 · **Herramienta:** kit ALMA `~/workspace/alma/kits/medir_savia.py` (sin modificar) · **Censo:** `censo_fresco.json` (15 claves, sha256 del dato `f3c80897…`).

## Ventana fresca

- **Corte:** revisiones del heartbeat canónico (`1cjBDCgK1lyyRgG5EEBSYk9P609oMzjlR`) con `modifiedTime > 2026-11-16T19:28:35Z` (fin de la ventana r23).
- **Descargados:** 71/71, 0 errores, 0 payloads con JWT (grep `eyJ` = 0). La API de revisiones listó 101 revisiones en total (17:37:53Z → 00:17:58Z).
- **Ventana:** modifiedTime 19:28:35Z → 2026-11-17T00:17:58Z; ts de payload 19:37:51Z → 00:17:58Z (~4 h 49 min, ~1 payload cada 4,1 min).
- **Versiones:** V151 20 (savia 720 ×20) · V271_DARWIN 19 · V152 11 · V270 11 · V93 10. **Vacíos de savia: 40** (V270 11 + V271 19 + V93 10).
- **Payloads:** `~/workspace/alma/ciclo/cosecha/` (solo local, nunca se depositan crudos).

## Censo V152 fresco (11 payloads)

| savia | n | tipos | tamaños | ts del divergente |
|---|---|---|---|---|
| 248.376 | 9 | 8 completo + 1 compacto | 89.466 / 55.973 B | — |
| 248.372 | 1 | 1 compacto | 55.973 B | 2026-11-16T23:26:43Z |
| 366.733 | 1 | 1 compacto | 55.980 B | 2026-11-17T00:00:29Z |
| 247.881 | 0 | — | — | — |

Todos bien formados por tipo (criterio CORR-M91-ESTRUCTURA-R23).

## Comparación con M-91 / r23 (101 payloads, 18 V152)

| | r23 | fresco | acumulado |
|---|---|---|---|
| 248.376 | 16 (9 full + 7 comp) | 9 (8 full + 1 comp) | 25 |
| 366.733 | 1 (comp) | 1 (comp) | 2 |
| 247.881 | 1 (full) | **0** | 1 |
| 248.372 | 0 | **1 (comp)** | 1 |
| V152 total | 18 | 11 | 29 |
| full / compacto | 10 / 8 | 8 / 3 | 18 / 11 |

## Veredicto

- **¿Persiste el tercer valor 247.881? NO.** 0/11 V152 frescos. Existe solo en r23 (1/18, idx 50, 16:17:39Z). Fue un evento único hasta ahora, no un valor estable.
- **¿Aparece un cuarto valor? SÍ. 248.372** (1/11, compacto, bien formado, 55.973 B, 2026-11-16T23:26:43Z). Su estabilidad es NO_SÉ hasta la próxima ventana.
- **¿Sigue valiendo savia = `mesh.totalSize`? SÍ, 11/11 en fresco, 29/29 acumulado** (18/18 r23 + 11/11 fresco). Verificado además como identidad de suma: `totalSize = Σ tamaños de los 512 archivos de mesh.files`, 3/3 valores muestreados.

## Mecanismo — las tres divergencias, explicadas cifra por cifra

| valor | desviación vs 248.376 | causa medida |
|---|---|---|
| 247.881 (r23) | −495 | documento canónico a 301 B en vez de 796 B |
| 248.372 (fresco) | −4 | rotación del rodante V151: sale `mesh_heartbeat_V151_1788326364455.json` (267 B), entra `mesh_heartbeat_V151_1794871463219.json` (263 B) |
| 366.733 (r23 + fresco) | +118.357 | documento canónico a 119.153 B en vez de 796 B; **idéntico en ambas ventanas** (mismo `nutrientes` 151443.65728639998) |

## Hallazgo nuevo de esta cosecha — ley de nutrientes (no estaba en el kit)

**`nutrientes = 0,412 × savia + 349,6612864`, residuo máximo 0,0** en los 11 V152 frescos y en los 2 divergentes de r23 (247.881 y 366.733): 4 valores distintos, 13 payloads comprobados. La covariación `nutrientes`↔savia que el kit registró como cualitativa es una ley lineal exacta.

## Qué sigue NO_SÉ

- Por qué el documento canónico midió 301 B una vez (r23) y 119.153 B dos veces (r23 + fresco), y por qué el rodante V151 alterna 263/267 B.
- Si 248.372 se repite o fue único como 247.881. La próxima ventana lo dirá.
