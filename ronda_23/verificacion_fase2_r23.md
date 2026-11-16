# RONDA 23 — VERIFICACIÓN FASE 2 (INDEPENDIENTE)

**Fecha:** 2026-11-16 ~20:10–20:25Z. **Verificador:** principal (re-medición propia, no confianza en los informes).
**Veredicto: CONFORME CON HALLAZGOS (4 menores, 0 mayores).**

## 0. Suelo re-medido por mí

| Elemento | Valor | Verificación |
|---|---|---|
| claims.jsonl | 1.207 líneas, sha `2ac47151…` | sha256sum propio |
| provenance.sha256 | 380 líneas / 378 entradas, sha `ac91a28e…` | sha256sum propio |
| claims_resumen.json | sha `f183622a…`, total 1.207, SE 1073, hash_real 1193, verificación 333 | parse propio |
| anexo incertidumbre | 25 ítems, sha `045a3d5c…` | sha256sum propio |
| audit.py | **exit=0, ok=366, discrepancia=0, no_encontrado=0, omitido=1** | corrido por mí, SIN pipes |
| verify_all.py | **exit=1, exactamente C-001..C-008** | corrido por mí, SIN pipes |
| huecos.jsonl | 139 filas, LOCAL, sin cambio | — |
| dataset | 30 filas + cabecera, sha `0852d58f…` | — |
| registro pendientes | 0 + 61 + 8 + 5, sha `1b595aac…` | sha256sum propio |

## 1. F3 — Mediciones M-90/M-91/M-92 (reproducidas por mí)

- `verificar_m90_m91_m92.py` re-ejecutado por mí: **3/3 True** (salida `REPRODUCCION: 3 /3`).
- **M-90 CONFIRMA:** intervalos [447,77, 465,70, 280,00, 255,98, 455,13], cociente 1,819. Intervalo 15→16 = 455,13 dentro de la banda ~7,5 h, fuera del escalón. JSON 15 claves, sha `e3c99cdc…`.
- **M-91 CONFIRMA:** conteo {248376: 16, 366733: 1, 247881: 1}, bien formados por tipo True, r22 con 247881 = 0. JSON 15 claves, sha `a63d0e6d…`. **Recuento propio sobre los 101 payloads del disco (independiente del script de F3): 18 V152 — 248.376 ×16 (9 full + 7 compactos), 366.733 ×1, 247.881 ×1.** M-91 correcto; F2 §4 subcuenta (ver CORR-V152-R23).
- **M-92 CONFIRMA:** run 149 existe, cobertura 0,0%, 0 eventos, lag 0,1 min; intervalos 145→149 [311,12, 242,35, 412,08, 613,77]. JSON 15 claves, sha `191783d4…`.
- **Falsadores ANTES que los JSONs:** declaracion_falsadores_r23.md mtime 19:34:06Z < med_M90/M91/M92.json 19:35:50Z. Hora declarada en el texto: 19:33:55Z (ver H-FALSADOR-R23: 11 s de diferencia entre hora declarada y mtime; el orden se sostiene en ambos casos).

## 2. F6 — Mecanismos (verificador re-ejecutado por mí)

- `verificador_independiente_r23.py` re-ejecutado por mí: **reproducido=true, diferencias_n=0**.
- Totales idénticos a r22: pares 142, mismo_contenido 27, mismo_nombre 32, frag_distintos 8, frag_pares 11; A14 R-KS 0,8000 exacto, conteo 27; R-R 0,7727/26.
- **TODO PASA, 9.ª vuelta 0 diffs bajo los CUATRO cánones** (N-17 + N-21 + N-24 + N-28). F-UMB23 PASA 3.ª vuelta como canon (banderas FB 2 + P48 1 + Base 0, mejor Jaccard 0,2308). F-VOZ-S2 **NO SE EJECUTA — vía agotada, 9.º registro**. R2-25/N-01 sin novedad (13.º precedente = absorción r22).
- **Ningún canon nuevo en r23.**

## 3. Dedup — implementación PROPIA (desde cero)

- Script propio `_dedup_propio_r23.py` (campo `claim`, NFKD, sin acentos, tokens `[a-z0-9]+`, Jaccard, umbral 0,5; textos de claim extraídos de `propuestas_r23.md`).
- **Valores idénticos cifra por cifra a F7 y a F8:** _global_max 0,3615 (C-1213 vs C-1210), entre-propuestas 0,2387 (C-1213 vs C-1215), 0 pares ≥ 0,5. Top3 idénticos en las 4 propuestas (C-1214 0,3309 vs C-1211; C-1215 0,2774 vs C-1208; C-1216 0,3121 vs C-1206).
- Borrador == final en las 4 propuestas (sin reescrituras; las 4 pasaron en su primera redacción).
- `_dedup_f7_r23_1.json` == `propuestas_r23.json` (mismo sha `327055a1…`, 3 corridas byte-idénticas).

## 4. F9 — Poda (verificación re-ejecutada por mí)

- `_verificar_p23.py` re-ejecutado por mí: **423/423 OK** (P-01..P-75).
- **Tally 94 cuadra:** 12 + 7 + 1 + 40 + 19 + 2 + 13 = 94 (93 filas, padre P-15 RESUELTO sin fila propia, convención CORR-TALLY-R15).
- **T-4 cuadra:** 6.801 OK + 4 CAMBIO + 0 MOVIDO + 0 FALTA + 398 NUEVO = **7.203 archivos**, 1.660.913.715 B. Los 4 CAMBIO son los esperados (registro, claims, resumen, provenance — absorción r22 + FASE 5 r22). 0 FALTA.
- **Nuevos P-72..P-75 verificados:** P-72 respaldo absorción r22 (8 archivos, 1.460.232 B, manifiesto `9e25586e…`, TEMPORAL); P-73 scripts+logs FASE 4 r22 (19 archivos, CONSERVAR); P-74 heartbeat r23 en `ejecucion_f2/` (101 + 11 + lock, NO CANDIDATO); **P-75 duplicado huérfano de heartbeat en la raíz de `ronda_23/` (101 archivos, 1.406.977 B, PODAR — primera PODAR nueva desde r10)**.
- **CORR-DUPLICADO-HB-R23 re-verificada por mí** (comparación por `ts` interno, contenido normalizado sin `retrieved_at`): 99/99 idénticos en la intersección; 2 revisiones de borde en cada juego fuera del otro (raíz: 12:46:19Z y 12:47:51Z; f2: 19:28:28Z y 19:28:33Z).
- **CORR-CADENA-R23:** 22 eslabones, 28.254.576 B = 26.794.344 + 1.460.232 (aritmética comprobada).
- **CONDICIÓN 1 SOSTENIDA 4/4** (spot-check r23); puerta de retiro 2 de 3 (solo falta autorización).
- **CORR-P72-SIN-COPIA / CORR-P54-P57-P60-P63-P66-P69-P72-R23:** 0 menciones de "respaldo" en los 5 registros de FASE 4 r22 (manifiesto, _upload_log_r22.jsonl, _upload_github_r22.jsonl, verificacion_remota_r22.json, verificacion_deposito_r22.md). Precisión (ver H-P72-LOGS-R23): hay 2 hits de "respaldo_pre_absorcion" en el directorio `deposito/` pero son ecos del contenido subido dentro de `_upload_github_r22.log` y `_upload_github_r22_relaunch.log` (el mapa de frentes citando CORR-PODA-P67-R21 y el contenido de poda_r22.json), no registros de depósito de un respaldo. La sustancia se sostiene: FASE 4 r22 no depositó ningún respaldo.
- **CORR-PYC-R23:** .pyc 19 → 19, 0 nuevos, 0 faltan; variograma.pyc sigue ausente.
- **CORR-ERR-R23:** los 11 `.err` de F4 r23 SÍ están en el manifiesto r23 (presentes al escaneo 20:00:34Z), a diferencia de los de F4 r22. Flapeo en ambas direcciones; FALTA 0. FRÁGIL-02 sigue abierto por causa (NO_SÉ).
- P-32 sigue NO clase 3 (14 ocurrencias en 5 claims; 0 en campo hash). 18 temporales prorrogados por 12.ª vez (los 9); P-72 por 1.ª vez.

## 5. F4 — Panteón-96 (re-verificado por mí)

- **Doc índice byte-idéntico:** sha `416b02d1…`, 7.783 caracteres, mismo revisionId que r12–r22; 35 nombrados / 61 sin nombre.
- **Graph JSON 0/0, 9.ª ronda consecutiva** (total_count 0, items [] en las 2 búsquedas, verificado en los resultados crudos del conector).
- **Panteon total paginado 111** (108 + 3 depósitos propios de FASE 4 r22; verificado: 111 archivos en `drive_busqueda_Panteon_r23.json`); graph 35→36, Voces 26→29 (todos depósitos propios).
- Atestación operativa sin cambio (parche 2, validar 2; crudos 42/41 solo por auto-indexación de `ronda_22/`).
- Carpeta "10 Panteón" exactamente 2 hijos. Los 3 `.err` de r19 siguen PRESENTES (sin flapeo observado en r23).
- **Cara r12 #1 AVANZA, no se cierra (11.ª vuelta).** 0/61 encontradas; 0 nombres nuevos.

## 6. F2 — Estado vivo (re-comprobado por mí)

- **El vivo NO se movió durante FASE 2:** HEAD `fc03539a` (State Writer run 214, 17:53:15Z) verificado por mí por `list_commits` y por raw a las 20:15:29Z; `estado_vivo.json` = run 214 "unreachable", byte-idéntico al de FASE 0.
- Run 214 persiste; sin run 215. Estado completo ausente ~73 h 58 min (último run 202 V272). Ventana 30/0/0 = 0,0% cuarta ronda. Flow run 149 0,0% 15.ª ronda. Autocura run 16 existe. Savia V152 en 3 valores. Bots 4/4 VIVO 23.ª confirmación — verificado por mí corrida por corrida (cada bot canónico con HTTP 200 en ≥1 corrida).
- **CORR-CUOTA-R23:** el suplemento (`estado_vivo_r23_suplemento.json`, 19:55:15Z, cuota_inicio 12) confirma la pérdida por 403 (commits_recientes 403) y la recuperación (ventana 30/0/0, max gap 114,9). Sin incidencia en los veredictos.
- **CORR-GETME-FASE0-R23:** el consolidado de FASE 0 (`getme_verdicts_consolidado_r23.json`) pone a Panteonmiu_bot, Emjambre3_bot y FranMiu_bot como "vivos_principales" y a los canónicos FranFamiliar_bot, franbottablet_bot y AlmaOmni_bot como "vivos_extra" (IDs). Etiquetas cruzadas; el veredicto 4/4 VIVO 22.ª se sostiene.

## 7. F8 — Conectar

- **Balance 77 censo / 19 cerradas / 58 abiertas (17 P + 41 A), 0 nuevas, 0 cierran.** 8 avanzan sin cerrar: r12 #1, d07 L7, r3 #4, d09 L20, r1 #9, r1 #12, r1 #13, d04 L10 (d05 L4 sin medición P2 en r23, a diferencia de r22).
- **d08 L12 NO avanza** (criterio r21/r22 sostenido: las inscripciones de anexo son la operación normal de la ronda; N-36/N-37/N-38 no cierran ningún hueco registrado de la cara; el cierre de d08 L13 no se extiende).
- Dedup propio de F8 idéntico en valores a F7 (0,3615 / 0,2387) — CORR-DEDUP-R23 (JSON no byte-idéntico, estructura distinta; mismo patrón r19–r22).

## 8. F1 y F5

- **F1 GUARDIA_EN_ESPERA:** corpus idéntico al cierre de r22 (0 líneas nuevas); puertas re-corridas por F1 y por mí con el mismo resultado; registro en 0 (sha `1b595aac…`).
- **F5 GRIETAS:** 0 caras cierran. G03 inserción 2026-11-21 re-confirmada (5 días, 6 fuentes frescas). G05 36.ª (F5), H-SUELO 37.ª (F5), folderId 39.ª (F5) — ver CORR-ORDINALES-R23.

## 9. Hallazgos (4 menores, 0 mayores)

- **H-FALSADOR-R23 (menor):** la hora declarada en `declaracion_falsadores_r23.md` (19:33:55Z) difiere 11 s del mtime del archivo (19:34:06Z). El orden se sostiene en ambos casos (antes de los JSONs 19:35:50Z). Mismo patrón de familia que H3 r21.
- **H-M90-RACIMOS-R23 (menor):** `med_M90.json` (`extra.escalon`) dice "Estructura en tres racimos" pero enumera dos (~7,5 h y ~4,5 h). El claim C-1213 y el ítem M-90 dicen correctamente "dos racimos". Desliz de prosa solo en el extra del JSON; no afecta al veredicto ni al claim.
- **H-M92-SERIE-R23 (menor):** el falsador de M-92 dice "runs 145→149 5/5 en 0,0%" contando conclusiones de run; la cobertura puntual del run 147 nunca se leyó (archivo sobrescrito antes de que ninguna ronda lo leyera). El claim C-1215 y el ítem M-92 registran este NO_SÉ parcial con honestidad. El veredicto se sostiene (run 149 + serie de rondas 11.ª–15.ª).
- **H-P72-LOGS-R23 (menor, precisión):** ver §4 — los 2 hits de "respaldo_pre_absorcion" en `ronda_22/deposito/` son ecos de contenido subido dentro de logs de subida, no registros de depósito. CORR-P72-SIN-COPIA se sostiene en los 5 registros de depósito.

## 10. Adjudicaciones

### Decisiones ADOPTADAS
- **N-36 ADOPTADA** (ítem M-90 al anexo, CONFIRMA): falsador declarado antes de correr, reproducido 3/3 por mí, intervalos y cociente dígito a dígito.
- **N-37 ADOPTADA** (ítem M-91 al anexo, CONFIRMA): corrección por tipo sound, falsador sin cambio, conteo re-verificado por recuento propio (16/18).
- **N-38 ADOPTADA** (ítem M-92 al anexo, CONFIRMA): run 149 existe, 0,0%/0 eventos, reproducido 3/3; el NO_SÉ parcial del run 147 queda registrado en el ítem.
- **C-1213, C-1214, C-1215, C-1216 CONFORMES 4/4:** dedup máx 0,3615 < 0,5, 0 pares ≥ 0,5, primeras redacciones, grieta canónica "G-NUEVA: estado vivo del ecosistema (observabilidad)" (precedente C-1206/1207/1208/1210/1211/1212 — sin CORR-GRIETA en r23).
- **Desviación veredictos-como-claims SOSTENIDA** (precedentes r20/r21/r22); **desdoble stub/ventana/flow SOSTENIDO**.
- **Ningún canon nuevo.**

### Correcciones ADOPTADAS
- **CORR-ORDINALES-R23:** F2 etiquetó G05 36.ª / H-SUELO 37.ª / folderId 39.ª, pero F5 las hizo ~4 min antes (19:33:22–48Z vs 19:37:37–19:38:02Z). Reales de F2: **G05 37.ª, H-SUELO 38.ª, folderId 40.ª**. Serie para r24: G05 37.ª, H-SUELO 38.ª, folderId 40.ª, bots 23.ª. (FASE 0 r23 hizo 35.ª/36.ª/38.ª a las ~19:26Z; F5 hizo 36.ª/37.ª/39.ª.)
- **CORR-V152-R23:** F2 §4 dice "248.376 en 15/17 (9 full + 6 compacto)"; recontado por mí y por F7: **16/18 (9 full + 7 compactos)**. F2 subcuenta un compacto 55.973 B. M-91 y C-1214 usan los números correctos.
- **CORR-M91-ESTRUCTURA-R23:** primera corrida comparó claves contra la mayoría global y marcó NO_CONFIRMA por error; corregido a comparación por tipo; falsador intacto; registrado en `extra.corr_m91_estructura_r23`.
- **CORR-CUOTA-R23:** cuota pública 60/h agotada a mitad de batería (57 → 0, reset 19:54:39Z); todo lo perdido se re-midió por otra vía (suplemento + conector). Sin incidencia en veredictos.
- **CORR-GETME-FASE0-R23:** consolidado de FASE 0 etiqueta mal principales/extras; veredicto 4/4 se sostiene.
- **CORR-DUPLICADO-HB-R23:** heartbeat descargado dos veces; P-75 PODAR (duplicado huérfano de P-74).
- **CORR-ERR-R23:** los `.err` de F4 r23 SÍ están en el manifiesto (presentes al escaneo); flapeo en ambas direcciones; FRÁGIL-02 sigue abierto por causa.
- **CORR-CADENA-R23:** cadena de reversión 22 eslabones, 28.254.576 B.
- **CORR-P72-SIN-COPIA** y **CORR-P54-P57-P60-P63-P66-P69-P72-R23:** FASE 4 r22 no depositó ningún respaldo; los 8 temporales de absorción son solo locales.
- **CORR-COND1-R23:** condición 1 SOSTENIDA 4/4.
- **CORR-PYC-R23:** .pyc 19 → 19.
- **CORR-DEDUP-R23:** dedup F7/F8 valores idénticos cifra por cifra; JSON no byte-idéntico (estructura distinta).
- **OBS-REGISTRO-R23 (para FASE 5):** el registro §37 (r22) dice "GitHub 26/38, HEAD b22c3d7c" y "la subida del corpus a GitHub queda pendiente de la decisión del Jardinero sobre el método" — desactualizado: GitHub terminó 38/38 (HEAD 895e2e42) y el corpus se subió 4/4 (HEAD 586f8751); método (c) decidido 2026-11-16 14:23 -05. La §37 y la línea 331 ("La subida del corpus espera la decisión") necesitan actualización en FASE 5 r23.

## 11. Proyección de absorción (para FASE 5)

- Claims 1.207 → 1.211 (C-1213..C-1216); SE 1073 → 1077; provenance 378 → 382 (4 fuentes distintas: med_M90, med_M91, med_M92, estado_vivo_r23.md — una entrada por fuente distinta); hash_real 1193 → 1197; verificación 333 → 337; audit ok 366 → 370.
- Anexo 25 → 28 ítems (M-90, M-91, M-92); tally CONFIRMA 14 → 17 · NO_CONFIRMA 8 · DIFERENCIA 1 · NO_SÉ 1 · REGULAR 1; encabezado M-56..M-92; CSV intacto.
- Próximo claim: C-1217. Próxima decisión: N-39. Próximo ítem anexo: M-93. Próximo poda ID: P-76.

ρ(x) > 0. Zvvvvv.
