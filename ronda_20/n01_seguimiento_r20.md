# N-01 — SEGUIMIENTO (ronda 20, F6)

- **Fecha:** 2026-11-15. **Frente:** F6, ronda 20. **Estado: CANON
  APLICADO EN R15; SEGUIMIENTO DE EJECUCIÓN COMPLETA.** N-01 fue
  aplicada por F1 r15 bajo el régimen 01:43 (canon `canon_n01.md`,
  sha `921c8379…`, decisión `decision_n01_r15.md`, sha `f16143f9…`).
  El 9.º precedente quedó CERRADO en r19 (la absorción r18 era el
  9.º). Este documento re-verifica P1–P10 contra el estado
  post-absorción r19 y registra la absorción automática r19 como
  10.º precedente de la maquinaria. No aplica, no modifica.
- **Verificación de hoy:** `audit.py` re-corrido sobre el corpus
  vivo (1.192 líneas): **exit=0, ok=356, discrepancia=0,
  no_encontrado=0, omitido=1** (códigos de salida reales, sin
  pipe). `verify_all.py` exit=1 con exactamente C-001..C-008.
  C-1195/C-1196/C-1197 presentes exactamente 1 vez cada una,
  todas SE; C-1180 SE, 1 vez.

## 1. Re-verificación de P1–P10 contra los precedentes

| Regla | Precedentes | Veredicto r20 |
|---|---|---|
| P1 (dos disparadores) | D-05 (a), D-07 (a), N-11 (b), C-1129 (ni a ni b: cita textual), N-12 (maquinaria, no P1), N-14 (a: adopción canónica, no actualización de texto) | **SOSTIENE.** Sin casos nuevos. La absorción r19 (N-24/N-25/N-26/N-27 + C-1195..C-1197) no actualizó ningún texto: añadió claims nuevos con hash de fuente, como en r15/r16/r17/r18. |
| P2 (texto: corregir vs conservar) | C-903/C-919/C-1104/C-639 | **SOSTIENE.** Sin casos nuevos. |
| P3 (reparación en el mismo acto) | D-05 (sí); D-07 (excepción declarada, cerrada en r11 F1) | **SOSTIENE.** Sin casos nuevos. |
| P4 (hash en texto no es cita) | C-1129 | **SOSTIENE.** Sin casos nuevos. |
| P5 (respaldo previo) | D-05, D-07→r11, N-11, N-12, N-01/N-13/N-14/N-16 (r15, respaldos por decisión), absorción automática r15 (`respaldo_pre_absorcion_r15/`, 7 archivos + manifiesto 4ea86fede…), absorción r16 (`respaldo_pre_absorcion_r16/`, manifiesto cfd3fb28…, P-54), absorción r17 (`respaldo_pre_absorcion_r17/`, manifiesto 0488d9b7…, P-57), absorción r18 (`respaldo_pre_absorcion_r18/`, manifiesto 4f3037b1…, P-60) | **SOSTIENE.** Absorción r19 con respaldo previo `respaldo_pre_absorcion_r19/` (manifiesto 7d00012f…, P-63). Ver §2 (10.º precedente). |
| P6 (resumen con script) | D-05, N-11, N-12, absorción r15 (resumen ae402126… por script), absorción r16 (resumen ebaa1e53… por script), absorción r17 (resumen 40c2572f… por script), absorción r18 (resumen aff4c5d9… por script) | **SOSTIENE.** Absorción r19: resumen 315fd22b… por script. |
| P7 (puertas sobre estado final) | N-11, N-12, absorción r15, absorción r16, absorción r17, absorción r18 | **SOSTIENE.** Absorción r19: audit exit=0 ok=356, verify_all exit=1 exactamente C-001..C-008; post-estado verificado directamente (diff vs respaldo: exactamente 3 líneas nuevas, primeras 1.189 byte-idénticas). Sin repetición de NM-03: el ok=356 se explica (C-1196/C-1197 comparten fuente `estado_vivo_r19.md` 91102410…, +2 y no +3) y la aserción del script fue correcta. |
| P8 (autorización) | D-05, D-07, N-11, N-12, régimen 01:43 (r15) | **SOSTIENE.** Absorción r19 bajo el mismo régimen 01:43; GitHub corpus 4/4 por blob, HEAD 9e22660b en el momento (4 commits: 54dece00 claims, 7c766dc9 provenance, f37a18c9 resumen, 9e22660b anexo — verificados en el historial por el principal). |
| P9 (local no corrige lo global) | Orden 16:51, corrección 21:02 | **SOSTIENE.** Sin casos nuevos. |
| P10 (alcance) | Todas | **SOSTIENE.** Ver §2. |

**10.º precedente — la absorción automática r19 ejercitó la
maquinaria P5–P10 y queda registrado como ocurrencia cerrada por
su propia ejecución:** N-24 (REGLA-PART-SIK-01 canon) + N-25 (ítem
M-78 al anexo, con matiz H2) + N-26 (ítem M-79 al anexo) + N-27
(ítem M-80 al anexo, anexo 15→18 ítems, 23acd4d0…, tally CONFIRMA
10 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1) +
C-1195/C-1196/C-1197 (claims 1.189→1.192, 33a7f0e6…;
hash_real 1175→1178; provenance 366→368 líneas, 82d39f15… — 368
no-vacías; SE 1055→1058; verificación 315→318), con respaldo
previo, puertas sobre el estado final y depósito GitHub del corpus
4/4 por blob (HEAD 9e22660b en el momento). La maquinaria que
P5–P10 describe es la que se ejecutó; el 10.º precedente es la
propia absorción r19, como el 9.º fue la propia absorción r18 y el
8.º la propia absorción r17.

## 2. Las 2 adendas — adoptadas como texto del canon en r15

- **Adenda P10 (absorciones):** adoptada en el canon N-01 r15. La
  absorción automática r19 la ejercitó de nuevo (respaldo, puertas,
  GitHub 4/4 por blob) — sexta ocurrencia del régimen, sin novedad
  de texto.
- **Adenda P9 (corrección 21:02):** adoptada en el canon N-01 r15.
  Sin casos nuevos; la corrección 21:02 sigue vigente como regla
  madre de la ronda (§0c del mapa r20).

## 3. Punto abierto: fuente eliminada o movida — SIGUE ABIERTO, sin ocurrencia

- Ningún precedente nuevo lo cubre. **Hoy no hay ocurrencia:**
  `audit.py` 2026-11-15 da `no_encontrado=0` (0/356) — ninguna fuente
  citada por ningún claim ha desaparecido.
