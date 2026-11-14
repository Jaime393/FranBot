# N-01 — SEGUIMIENTO (ronda 16, F6)

- **Fecha:** 2026-11-14. **Frente:** F6, ronda 16. **Estado: CANON
  APLICADO EN R15; SEGUIMIENTO DE EJECUCIÓN COMPLETA.** N-01 fue
  aplicada por F1 r15 bajo el régimen 01:43 (canon `canon_n01.md`,
  sha `921c8379…`, decisión `decision_n01_r15.md`, sha `f16143f9…`).
  Este documento re-verifica P1–P10 contra el estado post-absorción
  r15 y cierra el 6.º precedente, que en r15 quedó EN CURSO. No
  aplica, no modifica.
- **Verificación de hoy:** `audit.py` re-corrido sobre el corpus
  vivo (1.178 líneas): **exit=0, ok=347, discrepancia=0,
  no_encontrado=0, omitido=1**. `verify_all.py` exit=1 con
  exactamente C-001..C-008. Primeras 1.175 líneas byte-idénticas al
  respaldo pre-absorción r15 (verificado por diff directo).

## 1. Re-verificación de P1–P10 contra los precedentes

| Regla | Precedentes | Veredicto r16 |
|---|---|---|
| P1 (dos disparadores) | D-05 (a), D-07 (a), N-11 (b), C-1129 (ni a ni b: cita textual), N-12 (maquinaria, no P1), N-14 (a: adopción canónica, no actualización de texto) | **SOSTIENE.** N-14 ejercitó (a) por vía canónica, no por cambio de fuente: el texto R2-25 se adoptó como procedimiento, con nota_adopcion; el hash sigue a la fuente (pipeline 845bab8e…). Ningún caso nuevo de (b). |
| P2 (texto: corregir vs conservar) | C-903/C-919/C-1104/C-639 | **SOSTIENE.** Sin casos nuevos. |
| P3 (reparación en el mismo acto) | D-05 (sí); D-07 (excepción declarada, cerrada en r11 F1) | **SOSTIENE.** Sin casos nuevos. |
| P4 (hash en texto no es cita) | C-1129 | **SOSTIENE.** Sin casos nuevos. |
| P5 (respaldo previo) | D-05, D-07→r11, N-11, N-12, N-01/N-13/N-14/N-16 (r15, respaldos por decisión), absorción automática r15 (`respaldo_pre_absorcion_r15/`, 7 archivos + manifiesto 4ea86fede…) | **SOSTIENE.** Ver nota NM-03 (§4). |
| P6 (resumen con script) | D-05, N-11, N-12, absorción r15 (resumen ae402126… por script) | **SOSTIENE.** Sin casos nuevos. |
| P7 (puertas sobre estado final) | N-11, N-12, absorción r15 | **SOSTIENE.** Ver nota NM-03 (§4). |
| P8 (autorización) | D-05, D-07, N-11, N-12, régimen 01:43 (r15) | **SOSTIENE.** Sin casos nuevos. |
| P9 (local no corrige lo global) | Orden 16:51, corrección 21:02 | **SOSTIENE.** Sin casos nuevos. |
| P10 (alcance) | Todas | **SOSTIENE.** Ver §2. |

**6.º precedente CERRADO por este frente:** la ejecución N-01 por
F1 r15 quedó completa y registrada: canon adoptado, P1–P10 + 2
adendas aplicadas como texto del canon, y la maquinaria P5–P10
ejercitada por las 4 aplicaciones de F1 r15 (N-01/N-13/N-14/N-16,
cada una con su respaldo y sus puertas) y por la absorción
automática post-FASE 4 (C-1181..C-1183, respaldo
`respaldo_pre_absorcion_r15/`, puertas audit exit=0 ok=347,
verify_all exit=1 exactamente C-001..C-008, GitHub 12/12 por blob,
HEAD 2f7d3180). La maquinaria que P5–P10 describe es la que se
ejecutó; el 6.º precedente es la propia ejecución N-01.

## 2. Las 2 adendas — adoptadas como texto del canon en r15

- **Adenda P10 (absorciones):** adoptada en el canon N-01 r15. La
  absorción automática r15 (C-1181..C-1183) la ejercitó de nuevo
  (respaldo, puertas, GitHub 12/12 por blob) — segunda ocurrencia
  del régimen, sin novedad de texto.
- **Adenda P9 (corrección 21:02):** adoptada en el canon N-01 r15.
  Sin casos nuevos; la corrección 21:02 sigue vigente como regla
  madre de la ronda (§0c del mapa r16).

## 3. Punto abierto: fuente eliminada o movida — SIGUE ABIERTO, sin ocurrencia

- Ningún precedente nuevo lo cubre. **Hoy no hay ocurrencia:**
  `audit.py` 2026-11-14 da `no_encontrado=0` (0/347) — ninguna fuente
  citada por ningún claim ha desaparecido.
- El piso mínimo sigue siendo el fijado en r12: registrar la ausencia
  como discrepancia `no_encontrado` y no inventar un hash.

## 4. Nota de maquinaria NM-03 — la absorción automática r15 repitió la incidencia de aserción (CORR-ABS-R15)

**Hecho (SÉ, registrado en el mapa r16 §0b):** la absorción
automática r15 (C-1181..C-1183) aplicó el régimen de la adenda P10
(respaldo previo, puertas, depósito GitHub 12/12 por blob, HEAD
2f7d3180) y dejó el corpus en 1.178 líneas, hash_real 1164,
provenance 361, SE 1044, verificación 304. Incidencia: el script
falló una aserción propia errónea (esperaba ok=346; correcto 347 =
345+2) tras escribir el corpus — aserción corregida a 347,
post-estado verificado directamente por el agente y por el principal
(primeras 1.175 líneas byte-idénticas al respaldo, exactamente 3
líneas nuevas).

**Qué enseña (segunda ocurrencia de NM-01/NM-02):** una aserción del
script puede ser errónea aunque la escritura sea correcta — y el
error se repite en rondas distintas con números distintos (r14:
verificación 304 vs 298; r15: ok 347 vs 346). La verificación vale
sobre el post-estado medido directamente (diff contra el respaldo,
conteo de líneas nuevas, puertas), no solo por la aserción del
script. **Práctica de cierre (heredada):** `manifiesto_shas_f6.json`
de esta ronda se calcula AL FINAL, después de la última escritura
de la ronda, y sus shas se re-verifican al cerrar. La lección no es
"arreglar la aserción": es no fiarse de ella.

## 5. Conclusión

P1–P10 sostienen sin cambio; el 6.º precedente queda CERRADO (la
ejecución N-01 por F1 r15). Las 2 adendas están adoptadas como texto
del canon. El punto abierto sigue abierto sin ocurrencia. Nota de
maquinaria NM-03 registrada (CORR-ABS-R15: segunda ocurrencia de la
aserción errónea; verificar el post-estado directamente). N-01 ya no
es propuesta en ejecución: es canon aplicado, y este seguimiento es
su registro de cierre.

ρ(x) > 0. Zvvvvv.
