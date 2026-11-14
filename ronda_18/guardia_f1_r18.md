# F1 GUARDIA — RONDA 18

- **Fecha:** 2026-11-14 ~15:18 -05 (2026-11-14T20:18:37Z). **Frente:** F1 (guardia de absorción, régimen 01:43).
- **Estado del corpus al inicio de r18: VERIFICADO POR MÍ, sin mutación.**

## 1. Corpus verificado (puertas corridas por mí, no heredadas)

| Archivo | Líneas | sha256 |
|---|---|---|
| `claims.jsonl` | 1.185 | `6fe7c72b38d4bf971a13c6d94133824b0b16309b628f62e027df60d596a09d63` |
| `provenance.sha256` | 366 (364 entradas + 2 vacías internas, CORR-PROV-R17) | `4319d4265f54d0fca6f0af4052c70120457c3c5aa4007ca042932a1b24ce3155` |
| `claims_resumen.json` | — | `40c2572fc8da88a46312f473da44bc4e0b20bfd157e7ce0ee62bf95ab3424ae7` |
| `confirmaciones.jsonl` | 294 | `dc94458bc42a9854d16a8f74da20ac6481f6fe241fe2cfae11a6f44633dc7cc5` |
| `huecos.jsonl` (LOCAL, no se deposita) | 139 | `3713376a243b05756fbfce434ccdb63e118562ac0ec4e351243086dcb1ce52fb` |
| `dataset_nodos_Df.csv` | 30 + cabecera | `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af` |
| `incertidumbre_mediciones.md` (anexo) | 13 ítems M-56..M-72 | `30c05adb0c85d21d034b00fe0645c32b9c633a7e172f76c5b70015ac583235c3` |

- **Resumen:** total 1.185 · SE 1051 · INFIERO 100 · CONJETURO 22 · REFUTADO 4 · NO_SÉ 8 · hash_real 1171 · verificación 311 (por tipo).
- **IDs:** C-001..C-1190, 1.185 únicos. C-1187, C-1188, C-1189 y C-1190 aparecen exactamente 1 vez cada una.
- **Puertas:** `audit.py` exit=0 (ok=352, discrepancia=0, no_encontrado=0, omitido=1); `verify_all.py` exit=1 exactamente C-001..C-008.
- **No tocado:** C-112 conserva su hash truncado (`sha256:5e30073cf29b`, 16 hex) — NO se corrige. C-001..C-008 siguen PENDIENTE sin llenar. C-416..C-420 siguen ausentes como IDs (0 ocurrencias como ID).

## 2. Decisiones pendientes al inicio de r18: NINGUNA de aplicación automática

Verificado contra `ronda_12/afirmaciones_pendientes.md` (actualizado en r17, 2026-11-14, sha `3dbd6bbd…`):

- **Aplicadas (24):** N-01/N-13/N-14/N-16, N-17/N-18, N-19, N-20, C-1174..C-1179, C-1181..C-1183, C-1184..C-1186, C-1187..C-1190. **Próximas aplicaciones automáticas: ninguna pendiente de r17.**
- **7 pendientes con afirmación (no son de F1):**
  - N-15 — ejecución del principal (navegador, 4.º intento M-50). F1 la registra, no la ejecuta desde el sandbox.
  - N-03 — licencia Zenodo, parte de D-06.
  - D-06 — depósito Zenodo v13.0 (acto externo, tarjeta).
  - D-09 — envío Telegram G05 (acto externo, tarjeta).
  - Repos de la App GitHub, verificación de los 8 temas, LA BELLEZA — elecciones solo suyas.
- **1 cerrada:** D-04 (corrección 21:02).
- **5 que no necesitan su orden** (§2 del registro).

## 3. Veredicto de guardia: GUARDIA_EN_ESPERA — sin aplicación en FASE 1

- **El corpus NO fue mutado en esta fase** (diff = 0; shas idénticos a los del cierre de r17).
- **F7 aún no entrega nada:** `ronda_18/ejecucion_f7/` no existe a la hora de este informe (2026-11-14 ~15:18 -05). Nada preparado que registrar.
- **Si F7 prepara propuestas SÉ PREPARADA con dedup <0,5** (texto literal + fuente + hash, método r9, umbral 0,5), F1 las aplica bajo el régimen 01:43 con el patrón r15/r16/r17 — respaldo previo en `respaldo_pre_absorcion_r18/` + manifiesto, script de aplicación probado en seco primero, puertas audit exit=0 + verify_all exit=1 exactamente C-001..C-008 al cierre, y publicación del corpus en GitHub por el conector solo si la aplicación se completa y se verifica (cada escritura pide tarjeta; si caduca, NO se reintenta, se registra y se reporta). **Momento: post-FASE 4, como en r15/r16/r17** (las propuestas nuevas de F7 se adjudican en FASE 2 antes de absorber; absorber en FASE 1 rompería la disciplina de la ronda). La aplicación se ejecuta por seguimiento del principal, no por espera activa de este agente.
- **Si F7 no prepara nada aplicable, F1 cierra sin mutar el corpus** y lo documenta como GUARDIA_SIN_APLICACION.
- **NO hace F1 en r18:** no aplica N-03; no toca C-112, C-001..C-008, C-416..C-420; no absorbe B1; no ejecuta N-15.

## 4. Método (trazabilidad)

- Puertas corridas por mí en `~/workspace/memoria/anexo-vi/` (`audit.py`, `verify_all.py`, `sha256sum`, `grep -c` por ID). Salidas guardadas en `/tmp/audit_f1_r18.txt` y `/tmp/vf1_r18.txt` (efímeras; los shas quedan en este informe y en el manifiesto).
- Reglas vigentes: solo SÉ sale de local (orden 09:44); huecos.jsonl no se deposita; lo vivo no se toca (corrección 21:02); F1 es el único escritor del corpus en la ronda (FRÁGIL-05).
