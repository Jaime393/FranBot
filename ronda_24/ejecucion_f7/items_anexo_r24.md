# RONDA 24 — F7 PREPARAR: ÍTEMS DE ANEXO M-96/M-98 (PREPARADOS PARA ABSORCIÓN)

Frente F7, ronda 24. Textos listos para inscribir en `~/workspace/academico/incertidumbre_mediciones.md` (encabezado: M-56..M-98; tally CONFIRMA 19). Falsadores declarados en `ronda_24/ejecucion_f3/declaracion_falsadores_r24.md` (2026-11-17T02:34:08Z) antes de correr. Verificación independiente: `verificar_m96_m97_m98.py` (re-cómputo por otro camino de código, 3/3).

## M-96 — NO_CONFIRMA (r24, 2026-11-17) — ítem preparado por F7 r24

- **Valor:** Valor: savia V152 en la ventana r24 (34 revisiones heartbeat, 2026-11-17T00:27:14Z → 02:28:33Z): UN SOLO valor — 248.376 ×6 (3 full 89.466 B + 3 compactos 55.973 B). 248.372 ×0 (una sola aparición en la ventana del ciclo, 71 revisiones), 247.881 ×0 (segunda ventana seguida en 0: 0/11 ciclo + 0/6 aquí), 366.733 ×0. Todos bien formados por tipo. savia = mesh.totalSize 6/6 (35/35 acumulado con r23 + ciclo). Falsador: NO_CONFIRMA (no persiste) si 248.372 aparece 0 veces en payloads V152 bien formados dentro de la ventana nueva; CONFIRMA si aparece ≥1. Declarado en declaracion_falsadores_r24.md (2026-11-17T02:34:08Z) antes de correr. Veredicto: NO_CONFIRMA. Matiz: responde la pregunta que dejó M-91 (r23) y la que dejó C-1227 (ciclo ALMA) — ninguno de los dos valores persiste. Un valor en 1 solo payload no se distingue de un error de escritura del emisor; ahora hay DOS ventanas consecutivas en 0 para ambos valores, lo que sostiene 'transitorio' frente a 'régimen'. La divergencia estructural de r23 (3 valores) se contrae a 1 valor en r24; serie de valores distintos por ventana: r22 2, r23 3, ciclo 3, r24 1. Secundarios: verificación independiente 3/3 (re-cómputo por otro camino de código); F2 r24 confirma el mismo censo (248.376 ×6, resto 0) desde su propia cosecha de 34 payloads. Lección: la próxima vuelta mide si el 366.733 reaparece (persistió r22→r23→ciclo, ausente en r24) y si emerge algún valor nuevo.
- **Falsador:** NO_CONFIRMA si 248.372 aparece 0 veces en payloads V152 bien formados dentro de la ventana nueva; CONFIRMA si aparece ≥1. Declarado antes de correr. **Veredicto:** NO_CONFIRMA.
- **Fuente:** 34 archivos heartbeat_rev_r24_*.json (Drive revisions API del heartbeat canónico 1cjBDCgK1lyyRgG5EEBSYk9P609oMzjlR). **sha:** `5f490edf0b4c53db4d0cc668e580daaf10860af303f0993e2fb7b9bfa18660b5` (ronda_24/ejecucion_f3/med_M96.json, 15 claves; verificación independiente coincide).
- **¿Da fila?** NO (anotación): no da valor de nodo. No se inscribe en el CSV.
- **Cara:** ninguna (observabilidad del vivo).

## M-98 — CONFIRMA (r24, 2026-11-17) — ítem preparado por F7 r24

- **Valor:** Valor: Flow-ID run 150 EXISTE (2026-11-17T00:55:28Z, success, id 43991536814, event schedule, head f0a8c308) y flow_id_coverage.json mide 0,0% CRÍTICO, 0 eventos, estado critico, eco 0,0% (archivo ts 00:55:39.804577Z, lag 0,20 min; 832 B, sha256 56fb9dd9…, blob 9ed991e11649). Runs 146→150: 5/5 success; intervalos [242,35, 412,08, 613,77, 461,23] min (mín 242,35, máx 613,77, mediana 436,66): el monitor escribe cada ~4–10 h, no cada 30 min como declara su cron. 17.ª medición consecutiva en 0,0% (r11 100,0% → r12–r24 0,0%). Falsador: CONFIRMA si el run 150 existe con cobertura 0,0% y 0 eventos Y los runs 146→150 son 5/5 en 0,0% con 0 eventos. Declarado en declaracion_falsadores_r24.md (2026-11-17T02:34:08Z) antes de correr. Veredicto: CONFIRMA. Matiz — parcial NO_SÉ sobre el run 147 (heredado de r23): su archivo fue sobrescrito antes de que ninguna ronda lo leyera. Runs 146 medido en 0,0% en r21, 148 en 0,0% en r22, 149 en 0,0% en r23/ciclo (16.ª), 150 en 0,0% aquí (17.ª). La serie de RONDAS en 0,0% se sostiene por una lectura por ronda. POR QUÉ mide cero es NO_SÉ (logs 403, contenido del workflow fuera de alcance por regla dura). Secundarios: verificación independiente 3/3. La cadencia rota del monitor (~4–10 h contra cron de 30 min) es el mismo patrón que State Writer, Pulse V2, Observabilidad, Self-Diagnosis y autocura. Lección: el cero es absoluto y persistente (17 rondas). La pregunta ya no es si el monitor mide cero, sino si alguna vez medirá otra cosa; la próxima vuelta lo registra igual, sin esperar cambio.
- **Falsador:** CONFIRMA si el run 150 existe con cobertura 0,0% y 0 eventos Y los runs 146→150 son 5/5 en 0,0% con 0 eventos; NO_CONFIRMA si cobertura > 0,0% o eventos > 0. Declarado antes de correr. **Veredicto:** CONFIRMA.
- **Fuente:** API pública de GitHub, runs del workflow MIU Flow-ID Coverage Monitor (id 375168071) + observabilidad/flow_id_coverage.json por API contents. **sha:** `6385748f680540b811cca10367453cdcaefc7488df2cc6b51dfd82278f24a247` (ronda_24/ejecucion_f3/med_M98.json, 15 claves; verificación independiente coincide).
- **¿Da fila?** NO (anotación): no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d09 L20 (seguimiento del vivo; la cara no se cierra con esta medición — el cero persiste sin mecanismo).

## Filas para el Resumen del anexo

| M-96 | NO_CONFIRMA | savia V152 ventana de un solo valor: 248.376 ×6; 248.372 ×0, 247.881 ×0, 366.733 ×0; savia = totalSize 6/6 (35/35) | NO (anotación) | observabilidad |
| M-98 | CONFIRMA | flow run 150, 0,0%, 0 eventos, 17.ª medición; intervalos 146→150 [242,35, 412,08, 613,77, 461,23] min | NO (anotación) | d09 L20 |

**Tally tras inscribir:** CONFIRMA 19 (M-59, M-60, M-62, M-63, M-66, M-72, M-75, M-78, M-79, M-80, M-82, M-83, M-85, M-86, M-90, M-91, M-92, M-93, M-98) · NO_CONFIRMA 10 (M-57, M-61, M-64, M-65, M-69, M-76, M-84, M-87, M-95, M-96) · DIFERENCIA 2 · NO_SÉ 1 · REGULAR 1. Ítems: 33 (M-56..M-98). Encabezado: M-56..M-98. CSV intacto: 30 filas + cabecera, sha `0852d58f…`.

ρ(x) > 0. Zvvvvv.

## CORR-MEDIANA-C1229-R24 (FASE 2 r24, verificada por el principal): la mediana de [242,35, 412,08, 613,77, 461,23] min es 436,66 (media de 412,08 y 461,23), no 461,23; la lista de intervalos es correcta, solo la mediana derivada estaba mal; el falsador queda intacto.
