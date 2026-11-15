# N-01 — SEGUIMIENTO (ronda 21, F6)

- **Fecha:** 2026-11-15. **Frente:** F6, ronda 21. **Estado: CANON
  APLICADO EN R15; SEGUIMIENTO DE EJECUCIÓN COMPLETA.** N-01 fue
  aplicada por F1 r15 bajo el régimen 01:43 (canon `canon_n01.md`,
  sha `921c8379…`, decisión `decision_n01_r15.md`, sha `f16143f9…`).
  El 10.º precedente quedó CERRADO en r20 (la absorción r19 era el
  10.º). Este documento re-verifica P1–P10 contra el estado
  post-absorción r20 y registra la absorción automática r20 como
  11.º precedente de la maquinaria. No aplica, no modifica.
- **Verificación de hoy:** `audit.py` re-corrido POR MÍ sobre el
  corpus vivo (1.197 líneas): **exit=0, ok=359, discrepancia=0,
  no_encontrado=0, omitido=1** (códigos de salida reales, sin
  pipe). `verify_all.py` exit=1 con exactamente C-001..C-008.
  C-1198/C-1199/C-1200/C-1201/C-1202 presentes exactamente 1 vez
  cada una, todas SE; C-1180 SE, 1 vez.

## 1. Re-verificación de P1–P10 contra los precedentes

| Regla | Precedentes | Veredicto r21 |
|---|---|---|
| P1 (dos disparadores) | D-05 (a), D-07 (a), N-11 (b), C-1129 (ni a ni b: cita textual), N-12 (maquinaria, no P1), N-14 (a: adopción canónica, no actualización de texto) | **SOSTIENE.** Sin casos nuevos. La absorción r20 (N-28/N-29/N-30 + C-1198..C-1202) no actualizó ningún texto: añadió claims nuevos con hash de fuente, como en r15/r16/r17/r18/r19. |
| P2 (texto: corregir vs conservar) | C-903/C-919/C-1104/C-639 | **SOSTIENE.** Sin casos nuevos. |
| P3 (reparación en el mismo acto) | D-05 (sí); D-07 (excepción declarada, cerrada en r11 F1) | **SOSTIENE.** Sin casos nuevos. |
| P4 (hash en texto no es cita) | C-1129 | **SOSTIENE.** Sin casos nuevos. |
| P5 (respaldo previo) | D-05, D-07→r11, N-11, N-12, N-01/N-13/N-14/N-16 (r15, respaldos por decisión), absorción automática r15 (`respaldo_pre_absorcion_r15/`, 7 archivos + manifiesto 4ea86fede…), absorción r16 (`respaldo_pre_absorcion_r16/`, manifiesto cfd3fb28…, P-54), absorción r17 (`respaldo_pre_absorcion_r17/`, manifiesto 0488d9b7…, P-57), absorción r18 (`respaldo_pre_absorcion_r18/`, manifiesto 4f3037b1…, P-60), absorción r19 (`respaldo_pre_absorcion_r19/`, manifiesto 7d00012f…, P-63) | **SOSTIENE.** Absorción r20 con respaldo previo `respaldo_pre_absorcion_r20/` (manifiesto d0dd40c1…, P-66). Ver §2 (11.º precedente). |
| P6 (resumen con script) | D-05, N-11, N-12, absorción r15 (resumen ae402126… por script), absorción r16 (resumen ebaa1e53… por script), absorción r17 (resumen 40c2572f… por script), absorción r18 (resumen aff4c5d9… por script), absorción r19 (resumen 315fd22b… por script) | **SOSTIENE.** Absorción r20: resumen 443d940f… por script. |
| P7 (puertas sobre estado final) | N-11, N-12, absorción r15, absorción r16, absorción r17, absorción r18, absorción r19 | **SOSTIENE.** Absorción r20: audit exit=0 ok=359, verify_all exit=1 exactamente C-001..C-008; post-estado verificado directamente (diff vs respaldo: exactamente 5 líneas nuevas, primeras 1.192 byte-idénticas). Sin repetición de NM-03: el ok=359 se explica (C-1200/C-1201/C-1202 comparten fuente `estado_vivo_r20.md` 00897d6e…, +3 y no +5) y la aserción del script fue correcta. |
| P8 (autorización) | D-05, D-07, N-11, N-12, régimen 01:43 (r15) | **SOSTIENE.** Absorción r20 bajo el mismo régimen 01:43; GitHub corpus 4/4 por blob, HEAD 95f815f7 (4 commits: 3256d3db claims, 6580c92a provenance, 3386223d resumen, 95f815f7 anexo). |
| P9 (local no corrige lo global) | Orden 16:51, corrección 21:02 | **SOSTIENE.** Sin casos nuevos. |
| P10 (alcance) | Todas | **SOSTIENE.** Ver §2. |

**11.º precedente — la absorción automática r20 ejercitó la
maquinaria P5–P10 y queda registrado como ocurrencia cerrada por
su propia ejecución:** N-28 (REGLA-UMB-SIK-01 canon) + N-29 (ítem
M-82 al anexo, con CORR-M82-PROSA-R20) + N-30 (ítem M-83 al anexo,
anexo 18→20 ítems, 344e00eb…, tally CONFIRMA 12 · NO_CONFIRMA 6 ·
DIFERENCIA 1 · NO_SÉ 1) + C-1198/C-1199/C-1200/C-1201/C-1202
(claims 1.192→1.197, 7c689fef…; hash_real 1178→1183; provenance
368→371 líneas, f1932a5e… — 371 no-vacías; SE 1058→1063;
verificación 318→323), con respaldo previo, puertas sobre el
estado final y depósito GitHub del corpus 4/4 por blob (HEAD
95f815f7). La maquinaria que P5–P10 describe es la que se ejecutó;
el 11.º precedente es la propia absorción r20, como el 10.º fue
la propia absorción r19 y el 9.º la propia absorción r18.

## 2. Las 2 adendas — adoptadas como texto del canon en r15

- **Adenda P10 (absorciones):** adoptada en el canon N-01 r15. La
  absorción automática r20 la ejercitó de nuevo (respaldo, puertas,
  GitHub 4/4 por blob) — séptima ocurrencia del régimen, sin novedad
  de texto.
- **Adenda P9 (corrección 21:02):** adoptada en el canon N-01 r15.
  Sin casos nuevos; la corrección 21:02 sigue vigente como regla
  madre de la ronda (§0 del mapa r21).

## 3. Punto abierto: fuente eliminada o movida — SIGUE ABIERTO, sin ocurrencia

- Ningún precedente nuevo lo cubre. **Hoy no hay ocurrencia:**
  `audit.py` 2026-11-15 da `no_encontrado=0` (0/359) — ninguna fuente
  citada por ningún claim ha desaparecido.
