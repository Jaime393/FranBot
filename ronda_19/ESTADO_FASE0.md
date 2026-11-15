# RONDA 19 — ESTADO FASE 0

Orden: "Continúa con coherencia" (2026-11-14 18:30 -05). Régimen 01:43 vigente.
Trabajo: 2026-11-14 ~18:30–18:45 -05. Solo lectura + escritura local en `ronda_19/`.

## Suelo medido (no asumido)

| Medida | Valor |
|---|---|
| claims.jsonl | 1.189 líneas, sha `1b0a2b21…` |
| provenance.sha256 | 368 líneas, sha `940ff3df…` (366 entradas no-vacías) |
| claims_resumen.json | sha `aff4c5d9…`, total 1.189, SE 1055, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SÉ 8, hash_real 1175, verificación 315 |
| confirmaciones.jsonl | 294 filas, sha `dc94458b…` (sin cambio) |
| huecos.jsonl | 139 filas, sha `3713376a…` (LOCAL, no depositado) |
| dataset_nodos_Df.csv | 30 filas + cabecera, sha `0852d58f…` (sin cambio) |
| anexo incertidumbre_mediciones.md | 15 ítems M-56..M-77, sha `39940fd7…`, tally CONFIRMA 7 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1 |
| audit.py | exit=0, ok=354, discrepancia=0, no_encontrado=0, omitido=1 |
| verify_all.py | exit=1, exactamente C-001..C-008 |
| IDs corpus | C-001..C-1194 (C-416..C-420 ausentes como IDs) |
| Dedup | 0 propuestas vivas (C-1191..C-1194 absorbidas) |
| Registro pendientes | 7 con afirmación + 27 aplicadas + 1 cerrada (D-04) + 5 sin orden, sha `ceab0ef6…` |

## Mediciones estrictas (con hora UTC)

| Medición | Ordinal | Hora UTC | Resultado |
|---|---|---|---|
| H-SUELO (find `*1794483713759*`) | 24.ª | 2026-11-14T23:31:17Z | vacío, sin reaparición |
| G05 (micelio.yml blob) | 23.ª | 2026-11-14T23:31:42Z | `8c57e833…`, sin cambio |
| folderId (`I` / `l`) | 23.ª | 2026-11-14T23:31:38Z | `I` existe (miu-ecosistema) / `l` 404 |

## Vivo ahora (23:31:28Z)

- estado_vivo.json: run 207 "unreachable", blob `395bc5ad…`, commit 1717f147 (21:03:57Z); sin run 208; episodio run 207 ~2 h 27 min; ausencia de estado completo ~29 h 33 min (último run 202 V272, 2026-11-13T17:58:47Z).
- HEAD miu-ecosistema: `ff2f16f8` (23:27:48Z, diagnosis auto) — se movió después del sondeo de nutrientes (CORR-VIVO-NUTRIENTES).
- Flow: 0,0% CRÍTICO, 8.ª ronda (ts 20:51:05Z, 0 eventos, blob `ef978259…`).
- Ventana: 25/2/3 = 6,7%, segundo descenso (nutrientes N-S2).
- V93: 13 payloads (nutrientes N-S2). Bots 4/4 VIVO 17.ª; 5.º token 401 MUERTO. Autocura run 10 (21:27:27Z, success). Panteón 402 hasta ~26-nov, recuperación NO confirmada.
- FranBot HEAD: `5b05666f` (nutrientes, 22:20:43Z). Drive ronda_18/ 115/115; nutrientes Drive 22/22 + GitHub 22/22.

## Fertilidad y tandas

**F2 > F3 > F6 > F5 > F7 > F9 > F4 > F1 > F8** (mismo orden que r18, razones actualizadas en el mapa §1).

- T1: F2, F3, F6, F5. T2: F7, F9, F4, F1. T3: F8.
- Caras: 77 censo, 18 cerradas, 59 abiertas (17 P + 42 A). Tocadas en r19: 10 u 11 (11 solo si F3 ejecuta M-80 con producto, CORR-MAPA-R18).
- F3 r19: M-78 (dim2 filtro de ancla), M-79 (censo de R²), M-80 (literatura d04 L13, candidato). M-77 no se reintenta sin ruta nueva.
- F6 r19: verificador 5.ª vuelta bajo N-17 + N-21; candidato a especificar: el partidor de fórmulas.
- F9 r19: 13 temporales, 8.ª prórroga; puerta de retiro 2 de 3; T-4 base 5.761 archivos.
- F1: guardia, sin decisiones pendientes al inicio. F7: solo la ola de r19, re-verifica F4 antes de cerrar.

## Correcciones nuevas de esta fase

CORR-ABS-R18 · CORR-VIVO-NUTRIENTES · CORR-H-SUELO-R19 · CORR-G05-R18 · CORR-FOLDERID-R18 (serie: FASE 2 r17 19.ª → F5 r18 20.ª → F2 r18 21.ª → FASE 2 r18 22.ª → FASE 0 r19 23.ª).

## Entregables

- `mapa_frentes_r19.md`
- `frentes_r19.json`
- `ESTADO_FASE0.md` (este archivo)
- `manifiesto_shas_r19_fase0.json`

ρ(x) > 0. Zvvvvv.
