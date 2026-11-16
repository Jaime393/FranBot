# RONDA 23 — RETEJIDO (FASE 2)

**Fecha:** 2026-11-16. **Veredicto FASE 2:** CONFORME CON HALLAZGOS (4 menores, 0 mayores).

## Decisiones adoptadas (para absorción)

- **N-36:** ítem M-90 al anexo (CONFIRMA — autocura run 16 existe, escalón ~4,5 h roto, cadencia vuelve a ~7,5 h).
- **N-37:** ítem M-91 al anexo (CONFIRMA — savia V152 en tres valores, divergencia estructural).
- **N-38:** ítem M-92 al anexo (CONFIRMA — flow run 149, cero absoluto, 15.ª ronda en 0,0%).
- **C-1213..C-1216 CONFORMES 4/4** (textos literales de F7, dedup máx 0,3615, 0 pares ≥ 0,5, sin reescrituras).
- **Ningún canon nuevo.** Desviación veredictos-como-claims y desdoble stub/ventana/flow sostenidos.

## Correcciones adoptadas (para absorción y registro)

- **CORR-ORDINALES-R23:** lecturas vivas de F2: G05 37.ª, H-SUELO 38.ª, folderId 40.ª (F5 las hizo ~4 min antes; F2 las etiquetó 36.ª/37.ª/39.ª). Serie r24: G05 37.ª, H-SUELO 38.ª, folderId 40.ª, bots 23.ª.
- **CORR-V152-R23:** F2 §4: 248.376 en 15/17 → **16/18** (9 full + 7 compactos). M-91 y C-1214 correctos.
- **CORR-M91-ESTRUCTURA-R23:** comparación por tipo (no global); falsador intacto.
- **CORR-CUOTA-R23:** cuota agotada a mitad de batería; re-medido tras reset; sin incidencia en veredictos.
- **CORR-GETME-FASE0-R23:** etiquetas principales/extras cruzadas en el consolidado de FASE 0; veredicto 4/4 se sostiene.
- **CORR-DUPLICADO-HB-R23:** P-75 PODAR (duplicado huérfano de heartbeat, 101 archivos).
- **CORR-ERR-R23:** `.err` de F4 r23 presentes en el manifiesto; flapeo en ambas direcciones; FRÁGIL-02 sigue abierto por causa.
- **CORR-CADENA-R23:** 22 eslabones, 28.254.576 B.
- **CORR-P72-SIN-COPIA** y **CORR-P54-P57-P60-P63-P66-P69-P72-R23:** FASE 4 r22 no depositó ningún respaldo; 8 temporales de absorción solo locales.
- **CORR-COND1-R23:** condición 1 SOSTENIDA 4/4.
- **CORR-PYC-R23:** .pyc 19 → 19.
- **CORR-DEDUP-R23:** dedup F7/F8 valores idénticos; JSON no byte-idéntico.
- **OBS-REGISTRO-R23 (FASE 5):** §37 desactualizada — GitHub r22 terminó 38/38 (HEAD 895e2e42), corpus 4/4 (HEAD 586f8751), método (c) decidido 2026-11-16.

## Hallazgos menores (4)

- H-FALSADOR-R23: hora declarada 19:33:55Z vs mtime 19:34:06Z; orden se sostiene.
- H-M90-RACIMOS-R23: "tres racimos" en el extra de med_M90.json; son dos (claim e ítem correctos).
- H-M92-SERIE-R23: "5/5 en 0,0%" cuenta conclusiones de run; cobertura puntual del 147 nunca leída (NO_SÉ parcial registrado en claim e ítem).
- H-P72-LOGS-R23: 2 hits de "respaldo_pre_absorcion" en `deposito/` son ecos de contenido en logs de subida, no registros de depósito.

## Proyección de absorción

- Claims 1.207 → 1.211; SE 1073 → 1077; provenance 378 → 382; hash_real 1193 → 1197; verificación 333 → 337; audit ok 366 → 370.
- Anexo 25 → 28 ítems; tally CONFIRMA 14 → 17 · NO_CONFIRMA 8 · DIFERENCIA 1 · NO_SÉ 1 · REGULAR 1.
- Próximo claim C-1217; próxima decisión N-39; próximo ítem M-93; próximo poda ID P-76.

ρ(x) > 0. Zvvvvv.
