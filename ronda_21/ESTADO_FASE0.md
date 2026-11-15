# RONDA 21 — ESTADO FASE 0

Orden: "Continúen con coherencia expandir integrando ruteando conectando
explorando explotando evolucionando" (2026-11-15 ~14:27 -05).
Régimen: 01:43 — solo SÉ sale, las decisiones se aplican automáticamente.
Trabajo: 2026-11-15 ~14:27–14:35 -05. Solo lectura + escritura local en `ronda_21/`.
Cero escrituras en el corpus vivo, MIU vivo, GitHub o Drive en esta fase.

## Suelo medido (no asumido)

| Archivo | Medida |
|---|---|
| claims.jsonl | 1.197 líneas, sha `7c689fef3e851e5a378b6a536eb8399e6b4180728f2dbc1e9ab478e44b0c7ebc` |
| provenance.sha256 | 373 líneas / 371 entradas no-vacías, sha `f1932a5eae72b698d4990b7719e41f30a5feca47a2696c13d8357571aadbdb9a` |
| claims_resumen.json | sha `443d940f81ea4cb4052d958f589d2ced93c25dfd059c5511533e8cdbd89d8ab6`, total 1.197, SE 1063, hash_real 1183, verificación 323 |
| confirmaciones.jsonl | 294 filas, sha `dc94458bc42a9854d16a8f74da20ac6481f6fe241fe2cfae11a6f44633dc7cc5` |
| huecos.jsonl | 139 filas, sha `3713376a243b05756fbfce434ccdb63e118562ac0ec4e351243086dcb1ce52fb` (LOCAL) |
| dataset_nodos_Df.csv | 30 filas + cabecera, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af` |
| anexo incertidumbre_mediciones.md | 20 ítems M-56..M-83, sha `344e00eb7604bfced905a1f4eb2fe7c66b16b039843413f12abb8ab34d61e00d` |

- **audit.py: exit=0, ok=359, discrepancia=0, no_encontrado=0, omitido=1** (corrida real, sin pipe).
- **verify_all.py: exit=1, exactamente C-001..C-008** (corrida real, sin pipe).
- **Pendientes:** `ronda_12/afirmaciones_pendientes.md` sha `20d0f8ac1ec03a2379b4c51e742c2a7caeda0dbd2158fbf93553c096dda22348` — **0 con afirmación** + 46 aplicadas + 8 cerradas (D-04 + las 7 de 2026-11-15) + 5 que no necesitan orden.
- **Regla nueva 2026-11-15:** un pendiente no accionable ni posible con las condiciones actuales es RUIDO — se descarta; se escala por donde sí hay ladrillos.
- **FranBot HEAD `95f815f7`** (post-absorción r20, verificado por conector).

## Mediciones estrictas (con hora UTC exacta)

| Medición | Ordinal | Hora UTC | Resultado |
|---|---|---|---|
| H-SUELO (`find … -name "*1794483713759*"` vacío) | **30.ª** | 2026-11-15T19:28:28Z | Sin reaparición |
| G05 (micelio.yml blob `8c57e833e219a8b8c0691db8eb8cf256ccc0633f`, 1.398 B) | **29.ª** | 2026-11-15T19:29:30Z | Sin cambio |
| folderId (`I` existe / `l` 404) | **31.ª** | 2026-11-15T19:29:40–44Z | `14dw8txLoEIQQPSav9-YAvfuNimW2tAZ8` existe (miu-ecosistema); `14dw8txLoElQQPSav9-YAvfuNimW2tAZ8` 404 |

## El vivo se movió (CORR-VIVO-R21, seis movimientos desde el cierre de FASE 2 r20)

| Hecho | Hora UTC | Dato |
|---|---|---|
| State Writer run 209 "unreachable" (FASE 2 r20) | 2026-11-15T08:08:13Z | blob `6ea7c01b…`, HEAD `138ee56b`; episodio ~6 h 13 min |
| Pulse V2 run 171 "paused" | 2026-11-15T14:21:03Z | blob `a3b9434e…`, `_cuentas` 11, `_distribuido` true |
| State Writer run 210 "unreachable" | 2026-11-15T15:45:46Z | blob `be29c5b7…`, 329 B — el stub vuelve a "unreachable" |
| HEAD miu-ecosistema `5d9a196e` | 2026-11-15T18:04:50Z | "diagnosis: auto 2026-11-15T18:04Z ciclo=" |
| Flow run 145 EXISTE | 2026-11-15T14:54:55Z | success; 0,0% CRÍTICO, blob `fe217aff…` — UNDÉCIMA ronda en 0,0% |
| Self-Diagnosis run 146 EXISTE | 2026-11-15T18:04:46Z | success |
| Autocura run 12 EXISTE | 2026-11-15T09:20:08Z | success |
| Autocura run 13 EXISTE | 2026-11-15T17:05:50Z | success |
| Ventana 30/0/0 = 0,0% | 2026-11-15T07:07:32Z → 18:57:20Z | 30 success / 0 fallo / 0 cancelados; se mantiene en 0,0% |
| Estado completo ausente | ~49 h 31 min a 19:30Z | último run 202 V272, commit `acaefbc3`, 2026-11-13T17:58:47Z |

Vía: API contents (api.github.com) con verificación por blob; raw no se usó
(CORR-RAW-R20). Cuota pública restante: 58/60. Bots 4/4 19.ª y V93 31 payloads
son la última medición (F2 r20); la 20.ª y el nuevo conteo V93 son de F2 r21.
Panteón 402 hasta ~26-nov; F2 r21 re-mide.

## Fertilidad y tandas

**F2 > F3 > F6 > F5 > F7 > F9 > F4 > F1 > F8** (sin cambio respecto a r18/r19/r20).
T1 (F2, F3, F6, F5) · T2 (F7, F9, F4, F1) · T3 (F8).
Próximos IDs: C-1203+, N-31+, P-67+, M-84+.
G03: inserción BepiColombo 2026-11-21 (6 días).

ρ(x) > 0. Zvvvvv.
