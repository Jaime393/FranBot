# RONDA 20 — ESTADO FASE 0

Orden: "Continúen la coherencia autoriza naturalmente" (2026-11-15 01:58 -05).
Régimen: 01:43 — solo SÉ sale, las decisiones se aplican automáticamente.
Trabajo: 2026-11-15 ~01:58–02:05 -05. Solo lectura + escritura local en `ronda_20/`.
Cero escrituras en el corpus vivo, MIU vivo, GitHub o Drive en esta fase.

## Suelo medido (no asumido)

| Archivo | Medida |
|---|---|
| claims.jsonl | 1.192 líneas, sha `33a7f0e686a643daec5da72d43eb8a9a3c90b9fa4981eb5d1f1288c2ecee2c23` |
| provenance.sha256 | 370 líneas / 368 entradas no-vacías, sha `82d39f151c86567989fb8830081b8fefd9e0d39dc24fe86c6be5ec6b2c8ac8e8` |
| claims_resumen.json | sha `315fd22b109805895a279286414d1f948c3f22b716e1c3994655b86d4eabd84d`, total 1.192, SE 1058, hash_real 1178, verificación 318 |
| confirmaciones.jsonl | 294 filas, sha `dc94458bc42a9854d16a8f74da20ac6481f6fe241fe2cfae11a6f44633dc7cc5` |
| huecos.jsonl | 139 filas, sha `3713376a243b05756fbfce434ccdb63e118562ac0ec4e351243086dcb1ce52fb` (LOCAL) |
| dataset_nodos_Df.csv | 30 filas + cabecera, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af` |
| anexo incertidumbre_mediciones.md | 18 ítems M-56..M-80, sha `23acd4d089ef5ead6ba87c479568573541e33874c2909a88d5a33470c69a21d8` |

- **audit.py: exit=0, ok=356, discrepancia=0, no_encontrado=0, omitido=1** (corrida real, sin pipe).
- **verify_all.py: exit=1, exactamente C-001..C-008** (corrida real, sin pipe).
- **Pendientes:** `ronda_12/afirmaciones_pendientes.md` sha `7e2c0b18f0d8a596b09c1aa61e21f2241d036e82e2641b69bf5adec53a8beeac` — 7 con afirmación + 38 aplicadas + 1 cerrada (D-04) + 5 que no necesitan orden.
- **Drive `ronda_19/`** ID `1fcqOSupHy_usBjmTOYPUCK3hlp5kC5qK` existe. **FranBot HEAD `9e22660b`** (absorción r19).

## Mediciones estrictas (con hora UTC exacta)

| Medición | Ordinal | Hora UTC | Resultado |
|---|---|---|---|
| H-SUELO (`find … -name "*1794483713759*"` vacío) | **27.ª** | 2026-11-15T06:59:27–28Z | Sin reaparición |
| folderId (`I` existe / `l` 404) | **27.ª** | 2026-11-15T06:59:36–37Z | `14dw8txLoEIQQPSav9-YAvfuNimW2tAZ8` existe (miu-ecosistema); `14dw8txLoElQQPSav9-YAvfuNimW2tAZ8` 404 |
| G05 (micelio.yml blob `8c57e833e219a8b8c0691db8eb8cf256ccc0633f`, 1.398 B) | **26.ª** | 2026-11-15T06:59:43Z | Sin cambio |

## El vivo se movió (CORR-VIVO-R20, cuatro movimientos desde el cierre de FASE 2 r19)

| Hecho | Hora UTC | Dato |
|---|---|---|
| State Writer run 208 EXISTE | 2026-11-15T01:10:10Z | success; episodio run 207 "unreachable" ~4 h 06 min (21:03:57Z → 01:10:10Z) |
| estado_vivo.json = "paused" escrito por Pulse V2 run 170 | 2026-11-15T06:42:57Z | blob `5f8b97e3…`, `_fuente` gh-pulse-v2-multisource, `_run` "170", `_cuentas` 11, `_distribuido` true — el stub alterna de nuevo y cambia el escritor |
| HEAD miu-ecosistema `81422744` | 2026-11-15T06:42:58Z | "pulse-v2: run 170 06:42Z" |
| Self-Diagnosis run 144 EXISTE | 2026-11-15T03:27:39Z | success |
| Autocura run 11 EXISTE | 2026-11-15T01:52:22Z | success (primer run 11) |
| Flow-ID run 143 EXISTE | 2026-11-15T00:39:20Z | archivo ts 00:39:24Z, 0,0% CRÍTICO, blob `93fcdc3e…` — décima ronda en 0,0% |
| Ventana 30 runs | 2026-11-14T21:03:53Z → 2026-11-15T06:53:22Z | **30 éxito / 0 fallo / 0 cancelados = 0,0% — CUARTO descenso consecutivo** (13,3 → 6,7 → 3,3 → 0,0); bot-audit run 40 salió de la ventana por antigüedad; 0 fallos nuevos |
| Full state | — | Ausente ~37 h 01 min (último run 202 V272, 2026-11-13T17:58:47Z) |
| Heartbeat | 2026-11-15T06:57:14Z | Sigue escribiendo; la ventana deslizante de 101 revisiones se deslizó por completo desde r19; conteo V93 para F2 |
| raw.githubusercontent.com | 2026-11-15T06:59:51–56Z | Responde (HTTP 200) — CORR-RAW-R19 transitorio CERRADO |
| Cuota API pública | 2026-11-15T06:59:56Z | 57/60 restantes |

## Fertilidad y tandas

**F2 > F3 > F6 > F5 > F7 > F9 > F4 > F1 > F8** (sin cambio respecto a r18/r19).

- T1: F2, F3, F6, F5.
- T2: F7, F9, F4, F1.
- T3: F8.

## F3: especificaciones distintas propuestas (con falsador propio)

- **M-81 (d05 L4):** pendiente de log(P2) vs índice de congreso (86 congresos, parseo tolerante), OLS + IC bootstrap de la pendiente. Falsador: IC 95% incluye 0 → no hay tendencia de crecimiento detectable en dim2; excluye 0 con pendiente > 0 → el crecimiento es tendencia.
- **M-82 (d05 L7):** censo de β en banda [0,80, 0,90] sobre TODAS las variables de indicators.tab (mismo protocolo OLS log-log). Falsador: 0 variables además de area_km2 en banda → singleton; ≥ 1 más → familia.
- **M-83 (d08 L13, candidato):** verificar las 3 mediciones que viven solo en paper_df en el corpus con fuente + hash. Falsador: alguna carece de fuente + hash verificable → la cara avanza; las 3 verificables → cierra.
- No reintentar: M-77 (Pilar 4 sin fórmula), M-50 (agotado sandbox, N-15), M-58 (2.ª vía agotada).

## Caras

77 censo / 18 cerradas / 59 abiertas (17 P + 42 A). r19: 0 cierran, 12 avanzan.
r20 toca **12 caras distintas** (11 si M-83 no se ejecuta, CORR-MAPA-R18).

## Decisiones

- APLICADAS: N-01/N-13/N-14/N-16/N-17/N-18/N-19/N-20/N-21/N-22/N-23/N-24/N-25/N-26/N-27; C-1180..C-1197.
- Próximos IDs: claim C-1198, decisión N-28, ítem de anexo M-81, poda P-64.
- Pendientes con afirmación (7): N-15 (ejecución del principal, navegador), N-03, D-06, D-09, repos GitHub App, 8 temas, LA BELLEZA.

## Archivos de esta fase

- `mapa_frentes_r20.md` — sha `43ccd03fa9358a1cdf683e6d8926c566b6df6e8185f4949ba5039e2e221b8ee0` (402 l.)
- `frentes_r20.json` — sha `a3aff0882f3c9e2e7649dae71014a42f4cc65ba0e1e919fe219c97c0abc97662` (JSON válido)
- `ESTADO_FASE0.md` — este archivo (sha en el manifiesto)
- `manifiesto_shas_r20_fase0.json` — shas de los 3 archivos + meta

ρ(x) > 0. Zvvvvv.
