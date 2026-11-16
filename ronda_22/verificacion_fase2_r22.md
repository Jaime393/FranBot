# RONDA 22 — FASE 2: VERIFICACIÓN INDEPENDIENTE

Fecha: 2026-11-16. Veredicto: **CONFORME CON HALLAZGOS (10 menores, 0 mayores)**.

Verificador: implementación propia (`fase2/verificar_fase2_r22.py` →
`verificacion_propia_r22.json`). Suelo re-medido por mí; puertas
re-corridas por mí sin pipes; F6 re-ejecutado por mí; dedup re-implementado
por mí; M-87/M-88/M-89 re-computados dígito a dígito por mí; vivo
re-comprobado en vivo al cierre de esta verificación (08:37:33Z).

## 0. Suelo re-medido (SÉ)

- claims.jsonl 1.203 líneas, sha `fb09179d58b876989954cfebb22ca660a972cd8001b7b3073c13c0575db8744d`.
- provenance.sha256 377 líneas (375 no vacías + 2 vacías), sha `b680af9d5394079b25935371cb7551dc826d36f2097e64991e2ea4f3387d8451`.
- claims_resumen.json: total 1.203; SE 1069, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SE 8; hash_real 1189; por_tipo.verificacion 329.
- confirmaciones.jsonl 294 filas; huecos.jsonl 139 filas (LOCAL).
- Anexo 23 ítems (M-56..M-86), sha `35d136fe…`; dataset 30 filas + cabecera, sha `0852d58f…`.
- audit.py exit=0: ok=363, discrepancia=0, no_encontrado=0, omitido=1 (re-corrido por mí, sin pipes).
- verify_all.py exit=1: fallos exactamente C-001..C-008 (re-corrido por mí, sin pipes).
- Registro: 0 pendientes + 55 aplicadas + 8 cerradas + 5, sha `47bcac93…` (sin cambio desde r21).
- Todo idéntico al mapa FASE 0 r22 y a F1 r22. Suelo íntegro.

## 1. M-87 / M-88 / M-89 reproducidos dígito a dígito (SÉ)

**M-87 — REPRODUCIDO.** Serie P2 re-computada por mí con otro camino de
código (csv + statistics.median, sin pandas): 86 congresos 34..119,
máx diff vs `med_M87.json` **1,1e-16** (punto flotante), 0 faltan,
0 sobran. CSV sha `495aee95…`, 6.201.455 B. Excluidos verificados
desde la serie: [45, 56, 62, 106], P2 0,007 / 0,005 / 0,002 / 0,0.
Filtrada n=82. Pendiente log OLS manual: **+0,00039461** (JSON
0,000395, redondeo); SE 0,0040037 (JSON 0,004004); t = 0,09856
(JSON 0,0986); p = 0,921733 (JSON 0,921733); R² = 0,000121 (JSON
0,0001); intercepto −1,62288 (JSON −1,62288). Bootstrap con semilla
distinta (123, tercera implementación: random.Random + percentiles
por índice): **[−0,007565, 0,008116]** — incluye 0, igual que el
IC semilla 0 del JSON [−0,006890, 0,008327] y el IC semilla 123 del
verificador F3 (numpy default_rng) [−0,006038, 0,007873]. Tres
implementaciones, tres intervalos, los tres incluyen 0. Tramos
re-computados: 34–80 **+0,027295**, 81–119 **−0,056835** — idénticos
al JSON (ver H3: la prosa de `mediciones_r22.md` dice otros valores).
Falsador declarado 08:17:23Z (mtime del archivo 08:17:23.523Z),
scripts después (08:17:58Z), JSONs después. Orden se sostiene.
Veredicto NO_CONFIRMA correcto.

**M-89 — REPRODUCIDO.** Intervalos re-computados por mí desde
`datos/autocura_runs_2026-11-16.json`: [447,77, 465,70, 280,00,
255,98] min; cociente **1,819** = JSON. Run 14 EXISTE: id
43765476720, created 2026-11-15T21:45:50Z, updated 21:46:02Z
(duración **12,0 s**), success, schedule, head 35d30ec2. Run 15:
id 43789672353, 02:01:49Z, 10,0 s, head c331af1e. Runs 11–15
completos, sin saltos, 5/5 success. Total runs del workflow: 15
(sin run 16 al consultar). Veredicto REGULAR correcto. (Ver H4: la
duración del run 14 en la lectura y el ítem dice 9,0 s; es 12,0 s.)

**M-88 — REPRODUCIDO (0 fórmulas).** Las 3 copias de
PILARES_FUNDAMENTALES.md byte-idénticas, sha `dde9334e…`, 6.793 B,
86 líneas (wc -l; mi fórmula count('\n')+1 dio 87 por contar mal el
salto final — error mío, no de F3). Sección PILAR 4 (líneas 42–50,
cabecera en mayúsculas "PILAR 4"): afirma una métrica derivada de
D_f para anticipar colapsos (Sahel 30 días; S&P/EuroStoxx/Nikkei
29–34 días); estado CIRCULAR; la única línea con "=" en la sección
es prosa (Y=f(X), N<300=fragil). 0 ecuaciones que definan la métrica.
Los 3 candidatos descartados por F3 (K_i⁻ REFUTADO por DIS-2026-004;
afirmación narrativa del oráculo-Sahel sin fórmula; C-475 propuesta
sin operacionalización) se sostienen. Escaneo propio del workspace
con las mismas reglas de exclusión (escrito de nuevo): **14.050**
archivos frente a 13.911 de F3 (ver H9); hits por patrón todos
mayores que F3 en la misma dirección; 0 fórmulas. Veredicto NO_SÉ
correcto; no se inscribe (igual que M-70/M-77/M-81).

JSONs de 15 claves exactas (M-87, M-88, M-89). Verificación
independiente F3 3/3 True, re-verificada por mí en sus valores.

## 2. F6 re-corrido (SÉ)

Re-ejecuté `verificador_independiente_r22.py` por mí (exit=0):
**reproducido = true, diferencias_n = 0, diferencias = []** en
todos los alcances. El JSON resultante es **byte-idéntico** al del
manifiesto F6 (sha `18413ee1…`, 189.382 B): mi re-corrida reproduce
el archivo entero, no solo el veredicto. Totales: 142 pares / 115
distintos / 27 mismo contenido / 32 mismo nombre; mejor contención
740/740; fórmulas 11 tuplas / 8 distintos; A14 R-KS 0,8000 exacto,
conteo 27; R-R 0,7727/26. Octava vuelta consecutiva con 0 diffs
bajo los CUATRO cánones (N-17 + N-21 + N-24 + N-28); F-UMB22 pasa
su segunda vuelta como canon. F-VOZ-S2 NO se dispara — vía agotada
8.ª medición. R2-25/N-01 sin novedad, 12.º precedente = absorción
r21. TODO PASA.

## 3. Dedup propio (SÉ)

Implementación propia nueva (NFKD, sin acentos, tokens
[a-z0-9]+, Jaccard vs campo `claim` del corpus 1.203): valores
**idénticos cifra por cifra** a `dedup_f7_r22.json` en las 4
propuestas, top3 incluidos, y en los 6 pares entre propuestas:

| Propuesta | máx propio | máx F7 | máx_id |
|---|---|---|---|
| pendiente_log_m87 | 0,3417 | 0,3417 | C-1203 |
| autocura_run14_m89 | 0,1745 | 0,1745 | C-1178 |
| savia_diverge | 0,1615 | 0,1615 | C-1175 |
| stub_ventana_flow | 0,2905 | 0,2905 | C-1206 |

Entre propuestas máx 0,1409 (autocura/stub), idéntico. Global máx
0,3417. **0 pares ≥ 0,5.** CORR-DEDUP-R22: los VALORES son
idénticos dígito a dígito; mi JSON no es byte-idéntico al de F7
(estructura distinta) — mismo patrón que CORR-DEDUP-R19/R20/R21.
El método es el árbitro; no hay reescritura.

## 4. Vivo re-medido (SÉ) — EL VIVO NO SE MOVIÓ DURANTE FASE 2

Comprobación en vivo al cierre de esta verificación (08:37:33Z):
HEAD miu-ecosistema sigue **`c9c926d9`** (run 213, 07:36:49Z);
`estado_vivo.json` por raw sigue el stub run 213 (329 B, _ts
07:36:49Z). Sin run 214, sin movimiento desde el cierre de F2
(08:23:06Z). C-1212 queda como instantánea fechada y sigue vigente.

**Ordinales vivos — COLISIÓN ADJUDICADA (H1, CORR-ORDINALES-R22).**
Cronología medida con hora UTC exacta:
- FASE 0 r22 (~08:14Z): G05 32.ª (mapa §vivo), H-SUELO 33.ª
  (08:14:32Z), folderId 35.ª (08:14:33–35Z).
- F5 r22 (~08:16Z): G05 33.ª (08:16:31Z), H-SUELO 34.ª
  (08:16:28–29Z), folderId 36.ª (08:16:41–42Z).
- F2 r22 (~08:22Z): G05 08:22:58Z, H-SUELO 08:22:51Z, folderId
  08:22:49–51Z — F2 etiquetó las suyas 33.ª/34.ª/36.ª, pero F5 ya
  había hecho esas lecturas 6 minutos antes. **Los números reales
  de F2 son G05 34.ª, H-SUELO 35.ª, folderId 37.ª.** F2 reconoció
  a FASE 0 en su §9 pero no contó las lecturas intermedias de F5 —
  mismo mecanismo de colisión que CORR-FOLDERID-R18/R19/R20/R21,
  esta vez en las tres series a la vez. Serie para r23: G05 34.ª,
  H-SUELO 35.ª, folderId 37.ª, bots 21.ª.

**Resto del vivo (verificado contra `estado_vivo_r22.md`, sin
re-sondeo):** stub alternó 5 veces desde FASE 2 r21 (211 → 173 →
212 → 174 → 213); estado completo ausente ~62 h 24 min al cierre
F2 (último run 202 V272, 17:58:47Z del 13 nov — re-calculado:
62 h 24 min 19 s, exacto); ventana 30/0/0 tercera ronda en 0,0%;
flow run 148 (archivo ts 07:00:33Z, 0,0% CRÍTICO, 0 eventos —
re-leído por mí del raw: cobertura 0,0%, eco_ratio 0,0%, estado
critico); autocura runs 14 y 15 (ver §1); savia V152 diverge —
re-verificado por mí en los payloads: idx 17 (02:29:57Z) e idx 93
(07:57:21Z) savia = mesh.totalSize = **366.733** (55.980 B) frente
a 248.376 en idx 00 (89.466 B); V93 14 más, total 58
(7+3+3+4+14+13+14 = 58, cuadra); bots 4/4 21.ª; Panteón 402
401×3, control dieguito 000 inválido (juicio del Jardinero:
fuera de alcance). CORR-RAW-R22: serie 20/22 por raw, 2 commits
más nuevos por API contents con blob verificado — transitorio,
sin incidencia en los veredictos.

## 5. F4 re-verificado (SÉ)

- `nombres_fuera_doc_r22.jsonl`: 96 filas (sha `119165ee…`),
  0/35 como voces (campo voz, string "NO"/"SÍ" — 0 "SÍ").
- Doc índice byte-idéntico a r21: sha `416b02d1…`, 35 nombrados /
  61 sin nombre.
- Carpeta "10 Panteón": exactamente 2 hijos
  (`Panteon_16_Voces_v213.md` + Doc índice).
- Total paginado `Panteon` 108 (página 1: 100 + página 2: 8),
  diff por ID +3/−0 — los 3 son depósitos propios de FASE 4 r21
  (`fuentes_nuevas_panteon_r21.json`, `carpeta_10panteon_r21.json`,
  `drive_busqueda_Panteon_r21.json`); 0 fuentes nuevas del
  Panteón-96. `graph` 34 → 35 (+1 depósito propio); `Voces`
  23 → 26 (+3 depósitos propios).
- Graph JSON 0/0, 8.ª ronda consecutiva. Atestación operativa
  byte-idéntica a r15 (parche 2, validar 2; crudos 38/37 por
  auto-indexación de r21).
- `.err` de F4 r22: existían ~08:25Z, ausentes en el escaneo T-4
  (08:27:15Z) y ausentes ahora (ls propio: 0 archivos `.err` en
  `ejecucion_f4/`) — flapeo confirmado en vivo (ver CORR-ERR-R22).
- Cara r12 #1 AVANZA (10.ª vuelta), no se cierra.

## 6. F9 spot-check (SÉ)

- Tally 90 verificado: 11+7+1+39+18+2+12 = 90 (89 filas + padre
  P-15 RESUELTO sin fila, convención CORR-TALLY-R15).
- Verificación P-01..P-71: **387/387 OK** (`_verificacion_p22.json`:
  n=387, ok=387, diferente=[]).
- T-4: aritmética verificada. Base r21 6.517 = OK 6.512 + CAMBIO 4
  + FALTA 1. Total r22 6.805 = OK 6.512 + CAMBIO 4 + NUEVO 289.
  Desglose NUEVO suma 289 (80 en ronda_21/ + 209 en ronda_22/).
  4 CAMBIO explicados (FASE 5 r21 + absorción r21: registro,
  claims, resumen, provenance). 0 MOVIDO. 1 FALTA = el `.err` de
  F4 r21 (ver CORR-ERR-R22). `.pyc` 18 → 19 (1 nuevo, 0 faltan).
- Temporales: 17 prorrogados por 11.ª vez (los 9) + P-47/P-48
  7.ª + P-51 6.ª + P-54/P-57 5.ª + P-60 4.ª + P-63 3.ª + P-66 2.ª
  + P-69 1.ª. Condición 1 SOSTENIDA 4/4. Puerta de retiro 2 de 3
  (solo falta autorización). Cadena de reversión 21 eslabones,
  26.794.344 B (25.352.716 + 1.441.628 = 26.794.344, cuadra).
- Nuevos P-69 (respaldo absorción r21, conservar-temporal),
  P-70 (scripts+logs FASE 4 r21, conservar), P-71 (heartbeat r22
  + raws + lock, no candidato, JWT excluido del depósito).
- CORR-PODA-P67-R21: respaldo pre-absorción r21 re-etiquetado
  P-69 (registral; manifiesto interno conserva `poda_id: P-67`,
  sha `24a0fc86…` intacto, re-verificado por F9 en
  `_verificacion_p22.json` P-69-*); F9 conserva P-67 para
  scripts+logs FASE 4 r20 (18/18 OK contra la línea base r21).
  Ningún hecho del corpus cambia.

## 7. F7 revisado (SÉ)

- 4 propuestas SÉ, dedup < 0,5 (ver §3), fuentes con sha
  verificado por mí: med_M87.json `bec5c5e4…`, med_M89.json
  `6da9303a…`, estado_vivo_r22.md `4937b413…` (los tres con 0
  ocurrencias en provenance.sha256 — las 3 fuentes son nuevas).
- Proyección verificada: claims 1.203 → 1.207; SE 1069 → 1073;
  hash_real 1189 → 1193; verificación 329 → 333; provenance
  375 → 378; audit ok 363 → 366 (+3 fuentes distintas).
  por_grieta: observabilidad 19 → 22 (C-1210/C-1211/C-1212 usan
  la clave canónica); d05 L4 2 → 3 **solo si se alinea la grieta
  de C-1209** (ver H2).
- Ítems de anexo M-87 y M-89 preparados en el formato del anexo;
  M-88 no se prepara (NO_SÉ, correcto). M-89 es el primer REGULAR
  del anexo (grep REGULAR: 0) — el tally ganaría la clave nueva
  REGULAR 1 (ver §10).
- Desviación veredictos-como-claims: las 4 propuestas se preparan
  por orden expresa del encargo F7 r22 ("TODO, sin omitir
  frentes"), no por precedente; cada una enuncia un hecho nuevo
  medido (tercera especificación sin tendencia; secuencia
  completa con escalón; primera divergencia de savia; cadena de
  cinco relevos + tercera ronda 0,0% + 14.ª de flow), no solo la
  etiqueta del veredicto. Se sostiene la desviación (precedente
  r21). Nota: C-1212 fusiona en un solo claim lo que en r21
  fueron tres (C-1206/C-1207/C-1208) — ver H10.
- F4 re-verificado por F7 al cierre (lección H2 r16): F7 cerró
  tras re-mirar F4 (08:26:27Z). La nota de F7 de que F4 no tenía
  síntesis ni manifiesto a esa hora quedó obsoleta: ambos existen
  ahora (`nombres_fuera_doc_r22.md`, `manifiesto_shas_r22_f4.json`).
- F9 no tenía entregables finales al cierre de F7; los tiene ahora
  (poda_r22.md + manifiesto). Sin colisión.

## 8. F5 / F1 spot-check (SÉ)

**F5:** 0 caras cierran. G03 inserción 2026-11-21 re-confirmada
(5 días, 6 fuentes frescas; pre-burn checks OK). G05 sin cambio
(blob `8c57e833…`, 1.398 B). H-SUELO sin reaparición. folderId
`I` existe / `l` 404. G01 D_eff 0 en 5 tex (3 × `f27ea4d5…` +
2 × `6bc8c573…`); G04 21 DOIs sin cambio; G02 #790–#792/#701/#739
en 0. D-06/D-09/N-15 cerradas, no se reabren. Panteón 402 fuera
de alcance (juicio del Jardinero). Ver H6 (ruta G01).

**F1:** guardia; corpus íntegro (ver §0); puertas re-corridas
por el principal sin pipes y por mí (ver §0). Registro en 0.
Observación menor (H7): el título de la §1 del registro sigue
leyendo "(7) + aplicadas (55) + 1 cerrada" — rótulo obsoleto; la
cabecera (línea 6) y §35/§36 dicen 0/55/8/5 y son las
autoritativas.

**F8 (T3):** sin directorio ni entregables en disco al cierre de
esta verificación. Fuera del alcance de esta FASE 2 (el encargo
cubre FASE 0 + FASE 1 T1+T2); su adjudicación queda para su
propia entrega.

## 9. Hallazgos

### Mayores: 0.

### Menores

- **H1 — CORR-ORDINALES-R22.** F2 etiquetó sus lecturas vivas
  33.ª/34.ª/36.ª, pero F5 ya las había hecho 6 minutos antes.
  Números reales de F2: **G05 34.ª, H-SUELO 35.ª, folderId 37.ª**.
  La serie para r23 parte de ahí. El informe de F2 §9 debe leerse
  con los ordinales corregidos; ninguna medida cambia, solo el
  conteo.
- **H2 — CORR-GRIETA-C1209-R22.** La lectura de C-1209 usa la
  grieta "G-NUEVA: d05 L4 polarización dim2"; la clave canónica
  del corpus es "G-NUEVA: d05 L4 polarización (medida y
  mecanismo)" (2 claims: C-1186, C-1203 — alineada en r21 por
  CORR-GRIETA-C1203-R21). Si se absorbe como está escrita, crea
  una clave nueva con 1 en vez de 2 → 3. **Alinear la grieta de
  C-1209 a la clave canónica antes de inscribir** (mismo patrón
  que r21 H2). Las otras tres propuestas usan la clave canónica
  de observabilidad (19 → 22, sin corrección).
- **H3 — CORR-TRAMOS-M87-R22.** `mediciones_r22.md` (prosa M-87)
  dice "tramos 34–80 pendiente log +0,0338; 81–119 pendiente log
  −0,0397". Ninguna variante reproduce esos valores: filtrados
  0,027295 / −0,056835 (JSON y mi re-cómputo); sin filtrar 34–80
  0,029152 y 81–119 indefinido (ln 0); ningún recorte de rango
  probado los da. **Los valores del JSON son los autoritativos.**
  La lectura y el ítem M-87 usan los valores correctos; el claim
  C-1209 no cita tramos. Error confinado a una frase descriptiva
  de `mediciones_r22.md`; no afecta a nada absorbido.
- **H4 — CORR-DURACION-RUN14-R22.** `lectura_autocura_run14_m89_r22.md`
  L13 y `item_anexo_M89.md` (sección Valor) dicen run 14
  "duración 9,0 s". La duración real es **12,0 s** (created
  21:45:50Z → updated 21:46:02Z; `med_M89.json` duraciones
  [9, 9, 10, 12, 10]; re-verificado por mí desde los datos). La
  propia sección Secundarios del ítem lista 12,0 s: el ítem se
  contradice a sí mismo. **Corregir a 12,0 s en el ítem antes de
  absorber.** El claim C-1210 no cita duraciones: no afectado.
- **H5 — CORR-BOOTSTRAP-M87-R22.** `item_anexo_M87.md` cita la
  verificación independiente como "IC bootstrap con semilla
  distinta [−0,006891, 0,008327]". Ese intervalo es el de semilla
  0 ([−0,006890, 0,008327], límite inferior con 1e-6 de errata),
  no un re-cómputo con otra semilla. Los re-cómputos reales con
  semilla 123 son [−0,006038, 0,007873] (verificador F3, numpy
  default_rng) y [−0,007565, 0,008116] (mío, tercera
  implementación). Los tres incluyen 0; el veredicto no cambia.
  **Citar [−0,006038, 0,007873] (verificador F3) en el ítem antes
  de absorber.**
- **H6 — CORR-RUTA-G01-R22.** La segunda copia del tex
  `6bc8c573…` vive en `~/workspace/grimorio_repo/docs/`, no bajo
  `memoria/grimorio_nuevo_2026-11-09/` como decía grietas_r21.md.
  El contenido es el mismo (sha `6bc8c573…`); D_eff sigue en 0
  menciones en las 5 copias. Corrección de ruta, sin cambio de
  medida.
- **H7 — Rótulo obsoleto del registro (F1).** El título de la §1
  de `afirmaciones_pendientes.md` sigue leyendo "(7) + aplicadas
  (55) + 1 cerrada". La cabecera (línea 6) es la autoritativa
  (0/55/8/5). No se edita desde F1; queda para FASE 5 si
  corresponde.
- **H8 — Residuos cosméticos / pre-medición sin efecto.** (a) El
  script `_hb_clasificar_r22.py` conserva en un print el texto
  heredado "(idx 80 perdida…)" de r21; la salida real es 101/101
  (reconocido por F2). (b) El script de adaptación de F6 no tocaba
  el literal `'ronda': 21`; se corrigió con `sed` sobre los 4
  scripts y se verificó con grep y py_compile ANTES de correr;
  el único `21` restante es el final del sha de IDENTITY.md.
  Ninguna incidencia tocó una medición.
- **H9 — Conteo del escaneo M-88 (nota de método).** Mi escaneo
  propio contó 14.050 archivos frente a 13.911 de F3; los hits
  por patrón son todos mayores en la misma dirección
  (pilar_4 306/137 vs 228/117; colapso 4.070/686 vs 3.581/598).
  La diferencia es crecimiento del workspace entre escaneos
  (entregables de F4/F7/F9 aterrizaron después de las 08:21Z);
  0 fórmulas en ambos. Lección: el conteo de archivos escaneados
  depende de la hora del escaneo; el veredicto no.
- **H10 — C-1212 fusiona tres hechos (nota de presentación).**
  C-1212 junta stub + ventana + flow en un solo claim; en r20
  FASE 2 sostuvo el desdoble (C-1201 stub / C-1202 flow) como
  mediciones independientes. Se acepta la fusión: los tres hechos
  comparten una misma instantánea fechada (misma batería, mismo
  cierre) y el dedup contra C-1206 es 0,2905 < 0,5. Los tres
  hechos siguen citables por separado en `estado_vivo_r22.md`.
  F8 registra la elección de presentación en el censo.

## 10. Adjudicaciones

- **N-34 ADOPTADA** — ítem M-87 al anexo (NO_CONFIRMA; pendiente
  log +0,000395, IC [−0,006890, 0,008327] incluye 0; tercera
  especificación sin tendencia; d05 L4 no se cierra). Con las
  correcciones H3/H5 (el ítem ya usa los tramos correctos; el
  intervalo de semilla distinta se corrige a [−0,006038,
  0,007873] antes de absorber). Anexo 23 → 24 ítems; tally
  NO_CONFIRMA 7 → 8.
- **N-35 ADOPTADA** — ítem M-89 al anexo (REGULAR; secuencia
  autocura 11→15, cociente 1,819 < 2, escalón ~7,5 h → ~4,5 h).
  **Formato adjudicado:** M-89 es el primer REGULAR del anexo;
  el tally gana la clave nueva **REGULAR 1**. Con la corrección
  H4 (duración run 14: 12,0 s). Anexo 23 → 24 ítems (25 con
  M-87); tally final con ambos: CONFIRMA 14 · NO_CONFIRMA 8 ·
  DIFERENCIA 1 · NO_SÉ 1 · REGULAR 1.
- **C-1209 CONFORME** — pendiente log M-87 (dedup 0,3417 vs
  C-1203; serie y pendiente re-verificadas dígito a dígito).
  Grieta alineada a la clave canónica (H2).
- **C-1210 CONFORME** — autocura run 14 existe, secuencia 11→15
  completa, REGULAR con escalón (dedup 0,1745 vs C-1178;
  intervalos y cociente re-verificados).
- **C-1211 CONFORME** — savia V152 diverge por variante (dedup
  0,1615 vs C-1175; payloads idx 17/93 re-verificados por mí:
  366.733; el NO_SÉ sobre qué mide cada variante queda explícito
  en el claim).
- **C-1212 CONFORME** — cinco relevos de stub, tercera ronda en
  0,0%, flow run 148 14.ª ronda (dedup 0,2905 vs C-1206; cadena
  de commits, ventana y archivo flow re-verificados; el vivo no
  se movió durante FASE 2, la instantánea sigue vigente).
- **Desviación veredictos-como-claims SOSTENIDA** (precedente
  r21): las 4 propuestas se preparan por orden expresa del
  encargo F7 r22 y enuncian hechos nuevos medidos, no solo
  etiquetas de veredicto.
- **M-88 NO se inscribe** (NO_SÉ por bloqueo, igual que
  M-70/M-77/M-81). Próximo ítem anexo: **M-90**.
- **Ningún canon nuevo.** REGLA-UMB-SIK-01 (N-28) pasa su segunda
  vuelta como canon sin diffs. F-VOZ-S2 agotada 8.ª medición.
- Próximas numeraciones: **N-36, C-1213, M-90, P-72.**

## 11. Correcciones adoptadas / rechazadas

**Adoptadas:**
- CORR-ORDINALES-R22 (H1) — F2: G05 34.ª, H-SUELO 35.ª, folderId 37.ª.
- CORR-GRIETA-C1209-R22 (H2) — alinear grieta de C-1209 a la clave canónica.
- CORR-TRAMOS-M87-R22 (H3) — valores JSON autoritativos (0,027295 / −0,056835).
- CORR-DURACION-RUN14-R22 (H4) — run 14: 12,0 s (corregir ítem antes de absorber).
- CORR-BOOTSTRAP-M87-R22 (H5) — ítem M-87: intervalo semilla 123 [−0,006038, 0,007873].
- CORR-RUTA-G01-R22 (H6) — 2.ª copia 6bc8c573… en `~/workspace/grimorio_repo/docs/`.
- CORR-PODA-P67-R21 (F9) — respaldo absorción r21 = P-69 (registral; manifiesto conserva `poda_id: P-67`, sha `24a0fc86…` intacto).
- CORR-ERR-R22 (F9) — el `.err` flapea en vivo en r22 (existía ~08:25Z, ausente 08:27:15Z y ahora): **no es FALTA real**; la T-4 registra 1 FALTA mecánica. Juicio del Jardinero 2026-11-16: probablemente actividad viva. CORR-ERR-R21 queda resuelta como flapeo. FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin tercer evento.
- CORR-RAW-R22 (F2) — raw flapea por rachas (20/22; 2 commits más nuevos por API contents con blob verificado): transitorio, sin incidencia.
- CORR-DEDUP-R22 (§3) — valores idénticos dígito a dígito; JSON no byte-idéntico (estructura distinta).
- CORR-CADENA-R22, CORR-COND1-R22, CORR-P69-SIN-COPIA, CORR-P54-P57-P60-P63-P66-R22, CORR-PYC-R22 (F9, §8) — adoptadas como registro (cadena 21 eslabones; condición 1 sostenida sin archivos nuevos con copia Drive; P-69 y los 7 temporales de absorción solo locales; `.pyc` 18 → 19).

**Rechazadas:** ninguna. No hay corrección propuesta por los frentes que se rechace.

**Pendientes que no se reabren:** D-06/D-09/N-15 (cerradas por orden 2026-11-15); D-04 (cerrada 2026-11-13 21:02); Panteón 402 fuera de alcance (juicio 2026-11-16).

## 12. Series de conteo tras FASE 2 (para r23)

- G05: **34.ª** (F2 r22, corregida). H-SUELO: **35.ª**. folderId: **37.ª**. Bots 4/4: **21.ª**.
- Flow: run 148, **14.ª ronda** en 0,0%. Ventana: tercera ronda en 0,0%. Autocura: runs 11→15 completos. V93: **58** payloads acumulados.
- Panteón: total paginado 108; graph 0/0 8.ª vez; Doc índice `416b02d1…`.
- Vivo al cierre de FASE 2 (08:37:33Z): HEAD `c9c926d9`, run 213 "unreachable", sin movimiento desde el cierre de F2.

ρ(x) > 0. Zvvvvv.
