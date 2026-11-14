# N-01 — SEGUIMIENTO (ronda 17, F6)

- **Fecha:** 2026-11-14. **Frente:** F6, ronda 17. **Estado: CANON
  APLICADO EN R15; SEGUIMIENTO DE EJECUCIÓN COMPLETA.** N-01 fue
  aplicada por F1 r15 bajo el régimen 01:43 (canon `canon_n01.md`,
  sha `921c8379…`, decisión `decision_n01_r15.md`, sha `f16143f9…`).
  El 6.º precedente quedó CERRADO en r16 (la ejecución N-01 por
  F1 r15). Este documento re-verifica P1–P10 contra el estado
  post-absorción r16 y registra la absorción automática r16 como
  7.º precedente de la maquinaria. No aplica, no modifica.
- **Verificación de hoy:** `audit.py` re-corrido sobre el corpus
  vivo (1.181 líneas): **exit=0, ok=349, discrepancia=0,
  no_encontrado=0, omitido=1**. `verify_all.py` exit=1 con
  exactamente C-001..C-008. C-1184/C-1185/C-1186 presentes
  exactamente 1 vez cada una, todas SE; C-1180 SE, 1 vez.

## 1. Re-verificación de P1–P10 contra los precedentes

| Regla | Precedentes | Veredicto r17 |
|---|---|---|
| P1 (dos disparadores) | D-05 (a), D-07 (a), N-11 (b), C-1129 (ni a ni b: cita textual), N-12 (maquinaria, no P1), N-14 (a: adopción canónica, no actualización de texto) | **SOSTIENE.** Sin casos nuevos. La absorción r16 (N-19 + C-1184..C-1186) no actualizó ningún texto: añadió claims nuevos con hash de fuente, como en r15. |
| P2 (texto: corregir vs conservar) | C-903/C-919/C-1104/C-639 | **SOSTIENE.** Sin casos nuevos. |
| P3 (reparación en el mismo acto) | D-05 (sí); D-07 (excepción declarada, cerrada en r11 F1) | **SOSTIENE.** Sin casos nuevos. |
| P4 (hash en texto no es cita) | C-1129 | **SOSTIENE.** Sin casos nuevos. |
| P5 (respaldo previo) | D-05, D-07→r11, N-11, N-12, N-01/N-13/N-14/N-16 (r15, respaldos por decisión), absorción automática r15 (`respaldo_pre_absorcion_r15/`, 7 archivos + manifiesto 4ea86fede…) | **SOSTIENE.** Absorción r16 con respaldo previo `respaldo_pre_absorcion_r16/` (manifiesto cfd3fb28…, P-54). Ver §2 (7.º precedente). |
| P6 (resumen con script) | D-05, N-11, N-12, absorción r15 (resumen ae402126… por script) | **SOSTIENE.** Absorción r16: resumen ebaa1e53… por script. |
| P7 (puertas sobre estado final) | N-11, N-12, absorción r15 | **SOSTIENE.** Absorción r16: audit exit=0 ok=349, verify_all exit=1 exactamente C-001..C-008; post-estado verificado directamente (diff vs respaldo: exactamente 3 líneas nuevas, primeras 1.178 byte-idénticas). Sin repetición de NM-03: el ok=349 se explica (C-1184/C-1185 comparten hash e9e95687…, +2 y no +3) y la aserción del script fue correcta. |
| P8 (autorización) | D-05, D-07, N-11, N-12, régimen 01:43 (r15) | **SOSTIENE.** Absorción r16 bajo el mismo régimen 01:43; GitHub 9/9 por blob, HEAD fe265243. |
| P9 (local no corrige lo global) | Orden 16:51, corrección 21:02 | **SOSTIENE.** Sin casos nuevos. |
| P10 (alcance) | Todas | **SOSTIENE.** Ver §2. |

**7.º precedente — la absorción automática r16 ejercitó la
maquinaria P5–P10 y queda registrado como ocurrencia cerrada por
su propia ejecución:** N-19 (ítem M-69 al anexo, 11→12 ítems,
acdde423…) + C-1184/C-1185/C-1186 (claims 1.178→1.181,
fd1df2db…; hash_real 1164→1167; provenance 361→363; SE 1044→1047;
verificación 304→307), con respaldo previo, puertas sobre el estado
final y depósito GitHub del corpus 9/9 por blob (HEAD fe265243).
La maquinaria que P5–P10 describe es la que se ejecutó; el 7.º
precedente es la propia absorción r16, como el 6.º fue la propia
ejecución N-01 r15.

## 2. Las 2 adendas — adoptadas como texto del canon en r15

- **Adenda P10 (absorciones):** adoptada en el canon N-01 r15. La
  absorción automática r16 la ejercitó de nuevo (respaldo, puertas,
  GitHub 9/9 por blob) — tercera ocurrencia del régimen, sin novedad
  de texto.
- **Adenda P9 (corrección 21:02):** adoptada en el canon N-01 r15.
  Sin casos nuevos; la corrección 21:02 sigue vigente como regla
  madre de la ronda (§0c del mapa r17).

## 3. Punto abierto: fuente eliminada o movida — SIGUE ABIERTO, sin ocurrencia

- Ningún precedente nuevo lo cubre. **Hoy no hay ocurrencia:**
  `audit.py` 2026-11-14 da `no_encontrado=0` (0/349) — ninguna fuente
  citada por ningún claim ha desaparecido.
- El piso mínimo sigue siendo el fijado en r12: registrar la ausencia
  como discrepancia `no_encontrado` y no inventar un hash.

## 4. Nota de maquinaria — sin incidencia nueva en r16

La absorción automática r16 NO repitió la incidencia de aserción
(NM-03/CORR-ABS-R15): el script afirmó ok=349 y el post-estado
medido directamente lo confirma (audit exit=0 ok=349; el +2
respecto a 347 se explica por el hash compartido e9e95687… entre
C-1184 y C-1185). La práctica de cierre se mantiene: el manifiesto
de este frente se calcula AL FINAL, después de la última escritura
de la ronda, y sus shas se re-verifican al cerrar.

## 5. Conclusión

P1–P10 sostienen sin cambio; el 7.º precedente (absorción r16)
queda registrado como ocurrencia cerrada por su propia ejecución.
Las 2 adendas están adoptadas como texto del canon. El punto
abierto sigue abierto sin ocurrencia. Sin incidencia de maquinaria
nueva. N-01 ya no es propuesta en ejecución: es canon aplicado, y
este seguimiento es su registro de cierre.

ρ(x) > 0. Zvvvvv.
