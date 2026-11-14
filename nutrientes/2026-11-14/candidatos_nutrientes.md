# CANDIDATOS DE NUTRIENTE — TEJIDO N-S3, 2026-11-14

- **Fecha de tejido:** 2026-11-14.
- **Estado: BORRADOR.** Candidatos, no JSON final. El JSON final por nutriente lo hace la tanda 2, con el formato canónico de `memoria/anexo-vi/digest_format_nutriente.md` (claves obligatorias `_metabolismo, timestamp, id, tipo, fuente, fecha, hash_fuente, estado, contenido, referencias, grieta, nodo_origen, destino, origen`; opcionales `claim_origen, verificador, fecha_fuente`).
- **Regla aplicada:** solo SÉ con fuente + hash sha256 recomputado del archivo en disco. Cada hash de este documento fue recomputado por el tejedor (no copiado de informes). Corpus de referencia: claims 1.189, SE 1055, hash_real 1175, verificación 315 (`memoria/anexo-vi/claims_resumen.json`).
- **Depósito:** NO depositar nada en el cuerpo (decisión ciclo 32, vigente). Estos candidatos quedan en local; la tanda 2 decide el JSON final y el Jardinero el depósito.

## Tabla

| ID propuesto | Hecho | claim_origen | Fuente (hash recomputado) | Grieta |
|---|---|---|---|---|
| NUT-2026-11-14-001 | REGLA-TOK-SIK-01 especificada, verificada y adoptada como canon (N-21) | C-1191 | ronda_18/ejecucion_f6/especificacion_regla_tok_sik_r18.md (`9eab0662…`) | G-NUEVA: retejido_2026-11-12 no integrado en anexo-vi |
| NUT-2026-11-14-002 | Ventana 26/30 (13,3%), primer descenso tras 4 escalones | C-1192 | ronda_18/ejecucion_f2/estado_vivo_r18.md (`e09feada…`) | G-NUEVA: estado vivo del ecosistema (observabilidad) |
| NUT-2026-11-14-003 | Run 206 persiste sin relevo; estado completo ausente ~26 h 16 min | C-1193 | ronda_18/ejecucion_f2/estado_vivo_r18.md (`e09feada…`) | G-NUEVA: estado vivo del ecosistema (observabilidad) |
| NUT-2026-11-14-004 | bot_audit.json 12 → 7 entradas (pool COORD), 7/7 vivos | C-1194 | ronda_18/ejecucion_f2/estado_vivo_r18.md (`e09feada…`) | G-NUEVA: estado vivo del ecosistema (observabilidad) |
| NUT-2026-11-14-005 | Serie DW-NOMINATE: 86 congresos (34..119), no 83 (CORR-SERIE-R17) | C-1186 | ronda_18/ejecucion_f3/mediciones_r18.md (`a14cca98…`) | G-NUEVA: d05 L4 polarización (medida y mecanismo) |
| NUT-2026-11-14-006 | Verificador SIK 0 diffs, 4.ª vuelta consecutiva (740/740) | C-1181 | ronda_18/ejecucion_f6/h_sik_r18.md (`3660edf7…`) | G-NUEVA: retejido_2026-11-12 no integrado en anexo-vi |
| NUT-2026-11-14-007 | Condición 1 de retiro cumplida por primera vez (60/60) | — (ningún claim la enuncia) | ronda_17/ejecucion_f9/poda_r17.md (`1637700c…`) | ninguna |
| NUT-2026-11-14-008 | Producción fractal publicada: 49/49 por blob, commit 7ef78ed5 | — (ningún claim la enuncia) | produccion-fractal/publicacion/verificacion_publicacion.md (`9f439c2a…`) | ninguna |

## Fichas (borrador para tanda 2)

### NUT-2026-11-14-001 — REGLA-TOK-SIK-01 canon

- **tipo:** hecho. **estado:** SE. **fecha:** 2026-11-14.
- **fuente:** `ronda_18/ejecucion_f6/especificacion_regla_tok_sik_r18.md`.
- **hash_fuente:** `sha256:9eab0662e354716c01986e21ce7dae82b6819df42646f2e46a8ea0e95eaf7c9a` (recomputado 2026-11-14; coincide con el hash del claim C-1191).
- **claim_origen:** C-1191.
- **referencias:** `ronda_18/ejecucion_f6/especificacion_regla_tok_sik_r18.md`, `memoria/anexo-vi/claims.jsonl` (C-1191).
- **grieta:** G-NUEVA: retejido_2026-11-12 no integrado en anexo-vi.
- **contenido:** La regla de tokenización R-KS quedó especificada por escrito en ronda 18: el token se conserva con sus partes por '_', se excluyen las partes vacías y se emite además la forma sin '_' en los extremos. El verificador independiente r18 la reproduce con 0 diferencias en 7/7 comprobaciones: A14 S3↔v10.3 = 0,8000 exacto bajo R-KS, conteo 27. FASE 2 r18 la adoptó como canon SIK (N-21), cerrando el hueco que FASE 2 r17 dejó registrado.

### NUT-2026-11-14-002 — Ventana 26/30, primer descenso

- **tipo:** hecho. **estado:** SE. **fecha:** 2026-11-14.
- **fuente:** `ronda_18/ejecucion_f2/estado_vivo_r18.md`.
- **hash_fuente:** `sha256:e09feadaa21ab5b63357a107da4b242fff18a5b497829f1f1b8f9a8ce2828f06` (recomputado 2026-11-14; coincide con el hash del claim C-1192).
- **claim_origen:** C-1192.
- **referencias:** `ronda_18/ejecucion_f2/estado_vivo_r18.md`, `memoria/anexo-vi/claims.jsonl` (C-1192).
- **grieta:** G-NUEVA: estado vivo del ecosistema (observabilidad).
- **contenido:** En ronda 18, 4 fallos de 30 runs (13,3%): primer descenso tras cuatro escalones seguidos de subida (r14–r17, hasta 20,0%). Las tres rachas de fallo se rompen: expand-alcance corre 100 y 101 en success tras 97/98/99, TG Webhook corre 45 tras 43/44 y cablear-oracle corre 18 tras 16/17. El único fallo nuevo es miu-bot-audit run 40 (19:05:58Z, workflow_dispatch).

### NUT-2026-11-14-003 — Run 206 persiste sin relevo

- **tipo:** hecho. **estado:** SE. **fecha:** 2026-11-14.
- **fuente:** `ronda_18/ejecucion_f2/estado_vivo_r18.md`.
- **hash_fuente:** `sha256:e09feadaa21ab5b63357a107da4b242fff18a5b497829f1f1b8f9a8ce2828f06` (recomputado 2026-11-14; coincide con el hash del claim C-1193).
- **claim_origen:** C-1193.
- **referencias:** `ronda_18/ejecucion_f2/estado_vivo_r18.md`, `memoria/anexo-vi/claims.jsonl` (C-1193).
- **grieta:** G-NUEVA: estado vivo del ecosistema (observabilidad).
- **contenido:** El State Writer no escribe run 207 y el stub del run 206 (329 B, {"error": "unreachable"}, 16:50:21Z, commit f728ad80) sigue como estado actual, con ~3 h 25 min de episodio a la medición. Ningún estado completo desde el run 202, V272, 17:58:47Z del 2026-11-13: la ausencia llega a ~26 h 16 min, quinto escalón consecutivo.

### NUT-2026-11-14-004 — bot_audit.json 12 → 7 entradas

- **tipo:** hecho. **estado:** SE. **fecha:** 2026-11-14.
- **fuente:** `ronda_18/ejecucion_f2/estado_vivo_r18.md`.
- **hash_fuente:** `sha256:e09feadaa21ab5b63357a107da4b242fff18a5b497829f1f1b8f9a8ce2828f06` (recomputado 2026-11-14; coincide con el hash del claim C-1194).
- **claim_origen:** C-1194.
- **referencias:** `ronda_18/ejecucion_f2/estado_vivo_r18.md`, `memoria/anexo-vi/claims.jsonl` (C-1194).
- **grieta:** G-NUEVA: estado vivo del ecosistema (observabilidad).
- **contenido:** resultados/bot_audit.json pasa de 12 entradas con claves tg_* (fuente Panteón) a 7 entradas con claves tg_pool_0..6 (pool COORD), las 7 vivo: true. Los runs 41/42/43 salen en success y el HEAD 2b90b592 registra 'bot audit 2026-11-14: 7/7 vivos'. El Panteón sigue en exceed_egress_quota (402) hasta ~26-nov.

### NUT-2026-11-14-005 — Serie DW-NOMINATE: 86 congresos

- **tipo:** hecho. **estado:** SE. **fecha:** 2026-11-14.
- **fuente:** `ronda_18/ejecucion_f3/mediciones_r18.md`.
- **hash_fuente:** `sha256:a14cca98931442772b5e6c9101b9cf32a48d981a35fd0ebad127a9c5f5beef9e` (recomputado 2026-11-14).
- **claim_origen:** C-1186 (el claim que registraba 83 congresos y que esta corrección refina; CORR-SERIE-R17).
- **referencias:** `ronda_18/ejecucion_f3/mediciones_r18.md` (M-75), `ronda_17/ejecucion_f3/mediciones_r17.md` (M-74, CORR-SERIE-R17), `memoria/anexo-vi/claims.jsonl` (C-1186).
- **grieta:** G-NUEVA: d05 L4 polarización (medida y mecanismo).
- **contenido:** La serie DW-NOMINATE 25..119 cubre 86 congresos (34..119), no 83: el parseo tolerante restaura los Congresos 115–117, cuyo party_code viene como cadena flotante ('100.0'/'200.0'). CORR-SERIE-R17 corrige a C-1186, que registraba 83 congresos por el descarte de esas filas con int(). La serie se re-midió en M-74 (r17) y se re-confirma en M-75 (r18).

### NUT-2026-11-14-006 — Verificador SIK 0 diffs, 4.ª vuelta

- **tipo:** hecho. **estado:** SE. **fecha:** 2026-11-14.
- **fuente:** `ronda_18/ejecucion_f6/h_sik_r18.md`.
- **hash_fuente:** `sha256:3660edf75cc60e6abb6ac3f6bf677029ca81f94bbe62a71abeac7335def3da1f` (recomputado 2026-11-14).
- **claim_origen:** C-1181 (REGLA-PICK-SIK-01, la regla canónica cuya estabilidad mide el verificador; canon N-17).
- **referencias:** `ronda_18/ejecucion_f6/h_sik_r18.md`, `memoria/anexo-vi/claims.jsonl` (C-1181).
- **grieta:** G-NUEVA: retejido_2026-11-12 no integrado en anexo-vi.
- **contenido:** El verificador independiente SIK reproduce las mediciones con 0 diferencias por cuarta vuelta consecutiva (r15–r18) bajo el canon N-17. En r18 reproduce mejor-contención 740/740 y mejor correspondencia 740/740. La regla que verifica es REGLA-PICK-SIK-01, especificada en r15 y adoptada como canon por N-17.

### NUT-2026-11-14-007 — Condición 1 de retiro cumplida (sin claim_origen)

- **tipo:** hecho. **estado:** SE. **fecha:** 2026-11-14.
- **fuente:** `ronda_17/ejecucion_f9/poda_r17.md`.
- **hash_fuente:** `sha256:1637700c1cdf0c23944b363960a53f5e25930a6814a96a4ad1c9fe555312f160` (recomputado 2026-11-14).
- **claim_origen:** — (ninguno; ningún claim del corpus enuncia la condición 1 de retiro; verificado por grep en claims.jsonl 2026-11-14).
- **referencias:** `ronda_17/ejecucion_f9/poda_r17.md` (§2, CORR-COND1-R17).
- **grieta:** ninguna.
- **contenido:** La condición 1 de retiro de la poda se cumplió por primera vez en r17: las copias Drive de los temporales se re-verificaron por descarga y comparación de contenido, 60/60 archivos con copia verificados (39 por descarga byte-idéntica + 21 por md5 + contenido JSON). La puerta de retiro queda en 2 de 3; el único bloqueo restante es la autorización.

### NUT-2026-11-14-008 — Producción fractal publicada (sin claim_origen)

- **tipo:** hecho. **estado:** SE. **fecha:** 2026-11-14.
- **fuente:** `produccion-fractal/publicacion/verificacion_publicacion.md`.
- **hash_fuente:** `sha256:9f439c2a0d9d7fd29dd10ff9e7fc13efb72e9a308ecbe14e72ad7ce87c9defb2` (recomputado 2026-11-14).
- **claim_origen:** — (ninguno; ningún claim del corpus enuncia la producción fractal; verificado por grep en claims.jsonl 2026-11-14).
- **referencias:** `produccion-fractal/publicacion/verificacion_publicacion.md`, `produccion-fractal/manifiesto_shas_produccion.json` (`sha256:9967dc1de455a027a661683f26f19def20fef9df22d1e78d4a3570e4b47d5272`, recomputado).
- **grieta:** ninguna.
- **contenido:** El paquete de producción fractal (49 archivos, 258.482 B) se publicó en Jaime393/FranBot el 2026-11-14: 49/49 archivos verificados por blob, commit 7ef78ed5. El paquete contiene vectores (42/42 comprobaciones), métricas (23/23), 22 protocolos de falsación (11/11) y 11 recetas (134 comprobaciones).

## Carencias locales (NO propuestas)

- **M-77 (Pilar 4, C-053):** NO_SÉ por bloqueo — la fórmula no existe en PILARES_FUNDAMENTALES.md; no hay hecho que tejer, solo la carencia registrada en `med_M77.json`. No se propone nutriente.
- **V93 (esquema de heartbeat):** medición de F2 sin claim que lo enuncie y sin precedente de claim sobre esquemas nuevos (igual que en r17). Queda como carencia local, no como nutriente.
- **CORR-SERIE-R17 como claim propio:** no existe claim que enuncie los 86 congresos (grep "86 congresos" en claims.jsonl: 0); el nutriente 005 usa como claim_origen a C-1186, el claim corregido, y lo dice explícitamente.
- **Condición 1 y producción fractal sin claim_origen:** hechos SÉ con fuente verificable, pero sin claim que los enuncie; la tanda 2 decide si el nutriente va sin `claim_origen` o si queda en espera de inscripción.

## Verificación de hashes (recomputados por el tejedor, 2026-11-14)

| Archivo fuente | sha256 (primeros 8) |
|---|---|
| ronda_18/ejecucion_f6/especificacion_regla_tok_sik_r18.md | 9eab0662… |
| ronda_18/ejecucion_f2/estado_vivo_r18.md | e09feada… |
| ronda_18/ejecucion_f3/mediciones_r18.md | a14cca98… |
| ronda_18/ejecucion_f6/h_sik_r18.md | 3660edf7… |
| ronda_17/ejecucion_f9/poda_r17.md | 1637700c… |
| produccion-fractal/publicacion/verificacion_publicacion.md | 9f439c2a… |
| produccion-fractal/manifiesto_shas_produccion.json | 9967dc1d… |
| memoria/anexo-vi/claims.jsonl (1.189 líneas) | 1b0a2b21… |

Los hashes de C-1191..C-1194 en claims.jsonl coinciden con los recomputados (9eab0662… para C-1191; e09feada… para C-1192/C-1193/C-1194).

ρ(x) > 0. Zvvvvv.
