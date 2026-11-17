# VERIFICACIÓN FASE 2 — RONDA 24
**Veredicto: CONFORME CON HALLAZGOS (5 menores, 1 mayor).** Verificador independiente, 2026-11-17 02:59–03:00Z. Nada modificado en el corpus ni en los entregables de los frentes.

## 1. Suelo re-medido (por mí)
- claims.jsonl 1.222 líneas, sha `6dbee11d8ac1…` ✓
- provenance.sha256 393 líneas, 11 comentarios, 391 no vacías, 380 procesables; sha `07dfdd0f…` ✓ (H-PROVENANCE-R24: "391 entradas" = líneas no vacías)
- claims_resumen.json SE 1088 / hash_real 1208 / verificación 348 ✓
- Anexo 31 ítems (M-56..M-95), sha `8cc6dd9d…` ✓; huecos 139 filas intacto; confirmaciones 294; dataset 30 filas
- **Puertas corridas por mí sin pipes:** audit.py exit 0, ok=379, discrepancia=0, no_encontrado=0, omitido=1 ✓; verify_all.py exit 1, exactamente C-001..C-008 ✓

## 2. M-96 / M-97 / M-98 (F3 re-corrido por mí)
- `verificar_m96_m97_m98.py` exit 0: **3/3 REPRODUCIDOS — TODO PASA** ✓
- 15 claves en cada JSON ✓; veredictos M-96 NO_CONFIRMA / M-97 NO_SÉ / M-98 CONFIRMA ✓
- Falsador declarado 02:34:08Z (archivo mtime 02:34:25Z) ANTES que los med JSONs 02:36:01Z ✓ (H-FALSADOR-R24: 17 s entre hora declarada y mtime; el orden se sostiene, mismo patrón que r23)
- M-97 NO se inscribe (NO_SÉ por bloqueo, run 18 aún no existe; precedente M-88 r22) ✓
- C-1228 verificado cifra por cifra contra med_M96.json: 3 full 89.466 B + 3 compactos 55.973 B (idx_ts), 248.372 ×0, 247.881 ×0 (0/11 ciclo + 0/6 aquí), 366.733 ×0, totalSize 6/6 (35/35) ✓

## 3. F6 (verificador SIK re-corrido por mí)
- `verificador_independiente_r24.py` exit 0: reproducido=true, diferencias_n=0 ✓
- 142/115/27/32; S3 ≡ v10.3 27/58, 32/58; A14 R-KS 0,8000/27; R-R 0,7727/26; banderas FB 2 + P48 1 + Base 0 ✓
- **10.ª vuelta 0 diffs bajo los CUATRO cánones** (N-17 + N-21 + N-24 + N-28); F-VOZ-S2 no ejecutado, 10.º registro ✓

## 4. Dedup (implementación propia, por mí)
- C-1228 0,3267 vs C-1214; C-1229 0,3786 vs C-1215; C-1230 0,3806 vs C-1216; máx global **0,3806**; entre propuestas 0,1695; 0 pares ≥ 0,5 ✓
- Idéntico dígito a dígito a F7 y F8; JSON no byte-idéntico a F7 (CORR-DEDUP-R24) ✓
- NOTA: tras la corrección CORR-MEDIANA-C1229-R24 (un token numérico) el dedup debe re-correrse en absorción; el cambio no puede cruzar 0,5 (un solo token de 100+).

## 5. Vivo durante FASE 2 — NO SE MOVIÓ
- Re-verificado al cierre 03:00:04Z: HEAD miu-ecosistema `d32f462b` (01:30:41Z), estado_vivo blob `e55e4428…` (329 B), flow blob `9ed991e1…` (832 B), FranBot HEAD `1f1ed57b` — idénticos a FASE 0 y a F2 ✓

## 6. F9 (verificación re-corrida por mí)
- `_verificar_p24.py` exit 0: **543/543 OK** ✓; tally 103 = 12+7+1+45+21+2+15 ✓
- T-4: 7.458 archivos, 1.672.540.931 B; diff 7.184 OK / 4 CAMBIO (explicados) / 0 MOVIDO / 15 FALTA / 270 NUEVO ✓
- Las 15 FALTA verificadas una por una en diff_inventario_r24.md: 11 `.err` 0 B (flapeo, juicio del Jardinero) + 4 `.ndjson` borrados por la propia F4 r23 (sus `.json` finales sobreviven) ✓
- P-32 sigue NO clase 3 (14 ocurrencias en 5 claims, 0 en campo hash; C-1213..C-1227: 0) ✓; CONDICIÓN 1 4/4; puerta 2 de 3; cadena 24 eslabones, 31.217.838 B; próximo ID P-85 ✓

## 7. F4 (re-verificado por mí)
- Doc índice byte-idéntico: 7.783 chars, sha `416b02d1…`, mismo revisionId ✓
- Total paginado 111 → **116** (+5/−0, todos depósitos propios de FASE 4 r23; página 1: 100 + página 2: 16) ✓
- Graph 0/0 10.ª ronda; cara r12 #1 AVANZA (12.ª vuelta), 0/61, 0/35 voces ✓

## 8. Ordinales adjudicados por cronología (CORR-ORDINALES-R24 — ADOPTADA)
- F5 leyó 02:33:47–02:34:07Z → **G05 38.ª, H-SUELO 39.ª, folderId 41.ª**
- F2 leyó 02:39:05–02:39:15Z (etiquetó las suyas igual) → **G05 39.ª, H-SUELO 40.ª, folderId 42.ª**
- CORR-ORDINAL-FOLDERID-R24: el encargo de F5 decía 40.ª pero la serie ya estaba en 40.ª al cierre de r23; la lectura F5 es la 41.ª — correcto ✓
- Series al cierre de r24: G05 39.ª, H-SUELO 40.ª, folderId 42.ª, bots 26.ª

## DECISIONES ADOPTADAS
- **N-40 ADOPTADA** ("Absorber ronda 24 al corpus": C-1228..C-1230 + M-96/M-98; anexo 31 → 33, tally CONFIRMA 19 · NO_CONFIRMA 10 · DIFERENCIA 2 · NO_SÉ 1 · REGULAR 1; proyección claims 1.222 → 1.225, SE 1088 → 1091, hash_real 1208 → 1211, verificación 348 → 350, provenance 391 → 394, audit ok 379 → 382 — 3 fuentes distintas, una entrada por fuente).
- **C-1228 CONFORME** (verificado cifra por cifra contra med_M96.json).
- **C-1229 CONFORME CON CORRECCIÓN** (CORR-MEDIANA-C1229-R24, mayor — ver §9; el resto del texto verificado: run 150 00:55:28Z, lag 0,20 min, blob `9ed991e1…`, 5/5 success, hueco run 147; "100,0% en r11" verificado contra FASE 2 r12: 100,0% 17:28:00Z sha `8b49a589…` → 0,0%).
- **C-1230 CONFORME** (run 215 "unreachable" blob `e55e4428…`, episodio 68,32 min, segundo relevo desde r23, ausencia 80,67 h, ventana 5.ª, gap 114,5 min, HEAD `d32f462b`, bots 26.ª — todo contra estado_vivo_r24.json).
- Sin canon nuevo.

## CORRECCIONES ADOPTADAS (6)
1. **CORR-ORDINALES-R24** — F2: G05 39.ª, H-SUELO 40.ª, folderId 42.ª (F5 tomó 38/39/41 ~6 min antes).
2. **CORR-RUTA-ESTADO-R24** — estado_vivo.json y flow_id_coverage.json viven en `observabilidad/`; el 404 de FASE 0 era ruta, no ausencia (blobs `e55e4428…` / `9ed991e1…` re-verificados por mí al cierre).
3. **CORR-PAGINACION-R24** — `--page-all` devolvió solo la página 1 (100 + nextPageToken); la página 2 (16) se pidió explícita y se fusionó (total 116).
4. **CORR-DIFF-VACIOS-R24** — el diff primero reportó 8 MOVIDO / 4 FALTA por emparejar vacíos por sha compartido; corregido a 0 MOVIDO / 15 FALTA.
5. **CORR-DEDUP-R24** — valores idénticos dígito a dígito entre F7, F8 y mi implementación; JSON no byte-idéntico.
6. **CORR-MEDIANA-C1229-R24 (MAYOR, mía)** — ver §9.

## HALLAZGOS
### Mayor (1)
- **H-MAYOR-1 / CORR-MEDIANA-C1229-R24:** el texto literal propuesto de C-1229 dice "mediana 461,23 min" para los cuatro intervalos [242,35, 412,08, 613,77, 461,23]. La mediana de 4 valores es (412,08 + 461,23)/2 = **436,655 → 436,66 min**, no 461,23. El error está también en med_M98.json (`extra.cadencia`); la prosa de F3 (mediciones_r24.md L65) trae el valor correcto, 436,66. **La absorción debe corregir el texto a "mediana 436,66 min" antes de inscribir y re-correr el dedup** (un token numérico; no cruza 0,5). La mediana de F2 (412,08) es correcta para SU conjunto de 5 intervalos 145→150 — no hay conflicto, hay dos alcances distintos (H-MEDIANA-ALCANCE-R24).

### Menores (5)
- **H-FALSADOR-R24:** mtime del falsador 02:34:25Z vs hora declarada 02:34:08Z (17 s); el orden se sostiene (declarado < med 02:36:01Z). Mismo patrón que H-FALSADOR-R23.
- **H-MEDIANA-ALCANCE-R24:** dos medianas citadas con alcances distintos (F2: 412,08 para 5 intervalos; F3/C-1229: 436,66 para 4). Ambas correctas en su alcance; el texto absorbido debe usar 436,66 (4 intervalos 146→150).
- **H-PROVENANCE-R24:** "391 entradas" = líneas no vacías (393 − 2 vacías); procesables por audit = 380 (391 − 11 comentarios). Conteo de F1 confirmado; sin discrepancia.
- **H-REGISTRO-R24 (para FASE 5):** la línea del registro "Subida del corpus PENDIENTE DE TARJETA (caducada 2026-11-17, 0/4, HEAD 85351ce4)" quedó obsoleta: el corpus subió 4/4 con el Jardinero presente (HEAD `d1a1650c`) y el depósito del ciclo después (HEAD `1f1ed57b`). FASE 5 debe corregir esa línea (mismo patrón que la corrección §37 en r23).
- **H-DEDUP-R24:** valores idénticos, JSON no byte-idéntico — ya cubierto por CORR-DEDUP-R24.

## FRENTE POR FRENTE
- F2 CONFORME (con CORR-ORDINALES-R24 aplicada a sus ordinales). F3 CONFORME (con CORR-MEDIANA-C1229-R24: el error vive en su med_M98.json). F6 CONFORME. F5 CONFORME. F7 CONFORME (con la corrección de C-1229 pendiente en absorción). F9 CONFORME. F4 CONFORME. F1 CONFORME (con H-REGISTRO-R24 para FASE 5). F8 CONFORME (balance 77/19/58, 0 cierran, 8 avanzan; dedup propio idéntico).
