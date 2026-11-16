# RONDA 22 — MAPA DE FRENTES (FASE 0)

- **Orden:** Jardinero 2026-11-16 03:12 -05 ("Continúen") + régimen automático 2026-11-14 01:43 -05.
- **Fecha de trabajo:** 2026-11-16 ~08:13–08:15Z (03:13–03:15 -05).
- **Trabajo en:** `~/workspace/academico/tejido_2026-11-12/ronda_22/`.
- **Solo lectura + escritura local.** Solo SÉ con fuente y fecha.

## 0. Suelo medido (post-absorción r21, re-medido por mí)

| Elemento | Valor | Fuente / sha |
|---|---|---|
| claims.jsonl | **1.203 líneas** | sha `fb09179d58b876989954cfebb22ca660a972cd8001b7b3073c13c0575db8744d` |
| provenance.sha256 | **377 líneas / 375 entradas no vacías** | sha `b680af9d5394079b25935371cb7551dc826d36f2097e64991e2ea4f3387d8451` |
| claims_resumen.json | total 1.203, **SE 1069, hash_real 1189, verificación 329** | sha `76312918889c8051d41244e48d34c75e6df4827af41ad3a49b381dadd1daadde` |
| anexo incertidumbre | **23 ítems** (CONFIRMA 14 · NO_CONFIRMA 7) | sha `35d136fe645b9adf4878752caf6ac06fbdd798c52e023394759c878ba33255cd` |
| audit.py | **exit=0, ok=363, discrepancia=0, no_encontrado=0, omitido=1** | corrido por mí, sin pipes |
| verify_all.py | **exit=1, exactamente C-001..C-008** | corrido por mí, sin pipes |
| confirmaciones.jsonl | 294 filas | — |
| huecos.jsonl | 139 filas, LOCAL (no se deposita) | — |
| dataset_nodos_Df.csv | 30 filas + cabecera | sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af` |
| registro pendientes | **0 pendientes + 55 aplicadas + 8 cerradas + 5** | sha `47bcac9387bc14450fc807390b9e4887c0a09349e222571e79b79bc0d773a80c` |
| FranBot HEAD | `70bdf97c` (absorción r21, 4/4 por blob) | verificado por el principal en r21 |

Próximo claim: **C-1209**. Próxima decisión: **N-34**. Próximo ítem anexo: **M-87**. Próximo poda ID: **P-69** (ver §0b — P-67 duplicado en r21).

## 0a. Vivo al mapa (medido por mí, API contents con blob + Actions runs API)

- **HEAD miu-ecosistema `c9c926d9`** (2026-11-16T07:36:49Z) — "state: auto V270 run 213".
- **estado_vivo.json = run 213 "unreachable"** (State Writer V270, 07:36:38Z, success; ts 07:36:49Z; blob `e18b6cc9…`). El stub persiste.
- **El stub alternó 5 veces desde FASE 2 r21** (por escritor, según commits + runs API): run 172 "paused" (Pulse V2, 19:50:21Z) → run 211 State Writer (20:46:29Z) → run 173 Pulse V2 (23:33:58Z) → run 212 State Writer (00:42:11Z) → run 174 Pulse V2 (02:59:14Z) → run 213 State Writer (07:36:38Z). Contenido verificado solo del actual (run 213 "unreachable"); los intermedios siguen el patrón Pulse="paused" / State="unreachable" (r20/r21) — F2 re-verifica.
- **Estado completo ausente ~62 h 16 min** (último: run 202 V272, 2026-11-13T17:58:47Z; medido a las 08:14:32Z).
- **Flow-ID run 148** (07:00:28Z, success) — `flow_id_coverage.json` ts 07:00:33Z, **0,0% CRÍTICO, 0 eventos**, blob `1ab24264…`. Run 147 (00:08:23Z). Desde FASE 2 r21 (run 146, 12.ª ronda): dos escrituras más → la actual es la **14.ª ronda en 0,0%** (a adjudicar por F2).
- **Self-Diagnosis run 148** (03:27:58Z, success) y run 147 (23:37:14Z, success).
- **Autocura run 15 EXISTE** (02:01:49Z, success) — tercer avance desde el estancamiento en run 11 (runs 12, 13, 15). **Run 14 NO verificado** en la ventana de 30 runs (la ventana cubre desde 22:10:10Z del 15-nov; el 14 cae entre el 13 (17:05:50Z) y el 15) — F2 lo verifica.
- **Ventana: 30/0/0 = 0,0%** — los 30 runs más recientes visibles por Actions API son todos success (tercera ronda consecutiva en 0,0%; F2 re-computa formalmente con gap máx).
- Otros runs recientes: MIU Observabilidad V270 run 164 (06:14:50Z); MIU Corpus Sync Push V270 run 146 (05:22:59Z); miu-savia-bridge 112; miu-guardian-flujo 116; MIU Enjambre Pulse V269b 168; MIU Ecosystem Pulse V269 170.

## 0b. Series de conteo al mapa

| Serie | Ordinal al mapa | Última lectura |
|---|---|---|
| G05 (blob micelio.yml) | **32.ª** | ~08:14Z, blob `8c57e833…`, 1.398 B, sin cambio (solo SHA/metadatos) |
| H-SUELO (1794483713759…) | **33.ª** | 08:14:32Z, sin reaparición |
| folderId (I existe / l 404) | **35.ª** | 08:14:33–35Z, `I` = carpeta "miu-ecosistema", `l` = 404 |
| bots 4/4 VIVO | 20.ª (FASE 2 r21) | 21.ª pendiente de F2 r22 |

**CORR-PODA-P67-R21 (NUEVA, candidata para FASE 2):** el ID **P-67 fue asignado DOS veces en r21** — F9 r21 lo usó para "scripts+logs FASE 4 r20, conservar" (poda_r21.md) y la absorción r21 lo usó para el respaldo `respaldo_pre_absorcion_r21/` (manifiesto `24a0fc86…`). El respaldo de absorción r21 no está en el tally de poda (se creó después del cierre de F9). F9 r22 debe desambiguar (p. ej. re-etiquetar el respaldo como P-69) y FASE 2 adjudica. Ningún hecho del corpus cambia.

## 0c. Juicios del Jardinero 2026-11-16 ~03:11 -05 (obedecer; registrados en MEMORY.md)

1. **G03: nada que hacer.** Inserción BepiColombo 2026-11-21 (en 5 días). Solo registrar lo que pase.
2. **Panteón 402: FUERA DE ALCANCE.** Lo local no corrige ni contamina lo global; sin sesión ni API, probablemente ni verificado de varios frentes — no es asunto, solo confiar en la red. F4 sigue midiendo, no interviene.
3. **d05 L4/L7: seguir adelante en lo posible.** La opción ya está en el texto: pendiente log con regla de exclusión declarada antes de correr (candidata M-87).
4. **M-77: buscar más a fondo en todo bit y cruzar sombras;** las opciones se limitan (candidata M-88).
5. **`.err` que flapea: probablemente actividad viva del ecosistema** (no FALTA en r22).

## 1. Fertilidad de los 9 frentes

**F2 > F3 > F6 > F5 > F7 > F9 > F4 > F1 > F8** (igual que r18/r19/r20/r21).

| Frente | Fertilidad | Por qué |
|---|---|---|
| F2 estado vivo | 1.ª | El vivo se movió 5 veces desde FASE 2 r21: stub run 213, flow run 148 (14.ª ronda en 0,0%), autocura run 15 (tercer avance), Self-Diagnosis run 148, ausencia ~62 h. Bots 21.ª pendiente. |
| F3 medir | 2.ª | M-87 (log con exclusión — la opción que el Jardinero ordenó seguir), M-88 (búsqueda profunda Pilar 4 — juicio 5), M-89 (autocura 12/13/15 — el vivo da la novedad). |
| F6 mecanismos | 3.ª | 8.ª vuelta bajo los CUATRO cánones; voces→S2 agotada 7 veces; sin canon nuevo propuesto. |
| F5 grietas | 4.ª | G03 a 5 días (solo monitor); G05 32.ª; H-SUELO 33.ª; folderId 35.ª; G01/G02/G04 sin cambio esperado. |
| F7 preparar | 5.ª | Prepara lo que F2/F3 entreguen (claims desde C-1209). |
| F9 poda | 6.ª | Tally 87; temporales 10.ª prórroga; CORR-PODA-P67-R21 que desambiguar; T-4. |
| F4 Panteón-96 | 7.ª | Cara r12 #1 avanza sin cerrar (fuera de alcance por juicio 2: solo medir). Total paginado 105. |
| F1 guardia | 8.ª | Puertas re-corridas; 0 pendientes al inicio. |
| F8 conectar | 9.ª | Cierra la ronda; dedup propio. |

## 2. Tandas

- **T1:** F2, F3, F6, F5 (en paralelo, 4 agentes).
- **T2:** F7, F9, F4, F1 (en paralelo, 4 agentes).
- **T3:** F8.

## 3. Mediciones que propone F3

- **M-87 — pendiente log de P2 con regla de exclusión declarada ANTES de correr (cara d05 L4).** Falsador: filtro P2 ≥ 0,01 (el de M-78), que excluye exactamente los 4 congresos con P2 < 0,01 (45, 56, 62, 106 — incluido el 106 del cero exacto que bloqueó M-81). Sobre la subserie filtrada: pendiente log de P2 contra índice de congreso, 82 congresos. Si el IC 95% incluye 0 → NO_CONFIRMA; si lo excluye → CONFIRMA con el signo. El falsador log de M-81 sigue vigente sobre la serie completa.
- **M-88 — búsqueda profunda de la fórmula del Pilar 4 en todo bit + sombras (bloqueo de M-77).** Buscar la fórmula en todas las copias de PILARES_FUNDAMENTALES.md, en los documentos de axiomas vecinos (S1/S2/S3, P48, Libro, v10.3, v14, base, franbot), en los tex del Grimorio y en cualquier otro bit del workspace que la cite. Si aparece con fuente + hash → CONFIRMA (y M-77 queda desbloqueado para medir); si tras la búsqueda exhaustiva no aparece → NO_SÉ documentado con la lista exacta de dónde se buscó. No se inventa ninguna fórmula.
- **M-89 — secuencia de autocura 11→15: cadencia y efecto (novedad del vivo).** Verificar si existe el run 14 (entre el 13, 17:05:50Z del 15-nov, y el 15, 02:01:49Z del 16-nov), medir los intervalos entre runs 11, 12, 13, 14, 15, y registrar qué cambió tras cada run (commits, archivos de estado, HEAD). Si la autocura escribe sin dejar rastro verificable → NO_SÉ parcial con el alcance exacto.

## 4. Precedentes (CORR-MAPA-PRECEDENTES-R20/R21)

- **C-1203..C-1208 son claims derivados de F3/F2** (C-1203 M-84, C-1204 M-85, C-1205 M-86 de F3; C-1206 stub run 210, C-1207 ventana 30/0/0, C-1208 flow run 145 de F2). Los veredictos de medición como claims y el desdoble stub/flow/ventana quedan SOSTENIDOS por FASE 2 r21.
- F6: ningún canon nuevo en r21; N-28 (umbral 0,50) cumplió su 1.ª vuelta como canon en r21.
- FASE 2 r21: CONFORME CON HALLAZGOS (5 menores, 0 mayores); N-31/N-32/N-33 adoptadas; C-1203..C-1208 conformes 6/6.

## 5. Caras y decisiones al inicio

- Censo 77 caras: 19 cerradas, 58 abiertas (17 P + 41 A). 0 caras cierran en r21.
- d05 L4 canónica 1→2 (CORR-GRIETA-C1203-R21), d05 L7 1→3 (absorción r21).
- G03: inserción 2026-11-21. Panteón 402 hasta ~26-nov. Flow 0,0% 14.ª ronda. Ventana 0,0% tercera ronda seguida.

ρ(x) > 0. Zvvvvv.
