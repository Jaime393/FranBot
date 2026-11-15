# N-01 — SEGUIMIENTO (ronda 19, F6)

- **Fecha:** 2026-11-14. **Frente:** F6, ronda 19. **Estado: CANON
  APLICADO EN R15; SEGUIMIENTO DE EJECUCIÓN COMPLETA.** N-01 fue
  aplicada por F1 r15 bajo el régimen 01:43 (canon `canon_n01.md`,
  sha `921c8379…`, decisión `decision_n01_r15.md`, sha `f16143f9…`).
  El 8.º precedente quedó CERRADO en r18 (la absorción r17 era el
  8.º). Este documento re-verifica P1–P10 contra el estado
  post-absorción r18 y registra la absorción automática r18 como
  9.º precedente de la maquinaria. No aplica, no modifica.
- **Verificación de hoy:** `audit.py` re-corrido sobre el corpus
  vivo (1.189 líneas): **exit=0, ok=354, discrepancia=0,
  no_encontrado=0, omitido=1** (códigos de salida reales, sin
  pipe). `verify_all.py` exit=1 con exactamente C-001..C-008.
  C-1191/C-1192/C-1193/C-1194 presentes exactamente 1 vez cada una,
  todas SE; C-1180 SE, 1 vez.

## 1. Re-verificación de P1–P10 contra los precedentes

| Regla | Precedentes | Veredicto r19 |
|---|---|---|
| P1 (dos disparadores) | D-05 (a), D-07 (a), N-11 (b), C-1129 (ni a ni b: cita textual), N-12 (maquinaria, no P1), N-14 (a: adopción canónica, no actualización de texto) | **SOSTIENE.** Sin casos nuevos. La absorción r18 (N-21/N-22/N-23 + C-1191..C-1194) no actualizó ningún texto: añadió claims nuevos con hash de fuente, como en r15/r16/r17. |
| P2 (texto: corregir vs conservar) | C-903/C-919/C-1104/C-639 | **SOSTIENE.** Sin casos nuevos. |
| P3 (reparación en el mismo acto) | D-05 (sí); D-07 (excepción declarada, cerrada en r11 F1) | **SOSTIENE.** Sin casos nuevos. |
| P4 (hash en texto no es cita) | C-1129 | **SOSTIENE.** Sin casos nuevos. |
| P5 (respaldo previo) | D-05, D-07→r11, N-11, N-12, N-01/N-13/N-14/N-16 (r15, respaldos por decisión), absorción automática r15 (`respaldo_pre_absorcion_r15/`, 7 archivos + manifiesto 4ea86fede…), absorción r16 (`respaldo_pre_absorcion_r16/`, manifiesto cfd3fb28…, P-54), absorción r17 (`respaldo_pre_absorcion_r17/`, manifiesto 0488d9b7…, P-57) | **SOSTIENE.** Absorción r18 con respaldo previo `respaldo_pre_absorcion_r18/` (manifiesto 4f3037b1…, P-60). Ver §2 (9.º precedente). |
| P6 (resumen con script) | D-05, N-11, N-12, absorción r15 (resumen ae402126… por script), absorción r16 (resumen ebaa1e53… por script), absorción r17 (resumen 40c2572f… por script) | **SOSTIENE.** Absorción r18: resumen aff4c5d9… por script. |
| P7 (puertas sobre estado final) | N-11, N-12, absorción r15, absorción r16, absorción r17 | **SOSTIENE.** Absorción r18: audit exit=0 ok=354, verify_all exit=1 exactamente C-001..C-008; post-estado verificado directamente (diff vs respaldo: exactamente 4 líneas nuevas, primeras 1.185 byte-idénticas). Sin repetición de NM-03: el ok=354 se explica (C-1192/C-1193/C-1194 comparten fuente `estado_vivo_r18.md` e09feada…, +2 y no +4) y la aserción del script fue correcta. |
| P8 (autorización) | D-05, D-07, N-11, N-12, régimen 01:43 (r15) | **SOSTIENE.** Absorción r18 bajo el mismo régimen 01:43; GitHub corpus 4/4 por blob, HEAD cab649e3 en el momento (4 commits: 6b719381 claims, 98bf0e73 provenance, 4897aac1 resumen, cab649e3 anexo — verificados en el historial; el HEAD actual 5b05666f es posterior, por el depósito de nutrientes 2026-11-14, 22 commits encima). |
| P9 (local no corrige lo global) | Orden 16:51, corrección 21:02 | **SOSTIENE.** Sin casos nuevos. |
| P10 (alcance) | Todas | **SOSTIENE.** Ver §2. |

**9.º precedente — la absorción automática r18 ejercitó la
maquinaria P5–P10 y queda registrado como ocurrencia cerrada por
su propia ejecución:** N-21 (REGLA-TOK-SIK-01 canon) + N-22 (ítem
M-75 al anexo, con matiz H2) + N-23 (ítem M-76 al anexo, anexo
13→15 ítems, 39940fd7…, tally CONFIRMA 7 · NO_CONFIRMA 6) +
C-1191/C-1192/C-1193/C-1194 (claims 1.185→1.189, 1b0a2b21…;
hash_real 1171→1175; provenance 366→368 líneas, 940ff3df… — 366
no-vacías; SE 1051→1055; verificación 311→315), con respaldo
previo, puertas sobre el estado final y depósito GitHub del corpus
4/4 por blob (HEAD cab649e3 en el momento). La maquinaria que
P5–P10 describe es la que se ejecutó; el 9.º precedente es la
propia absorción r18, como el 8.º fue la propia absorción r17 y el
7.º la propia absorción r16.

## 2. Las 2 adendas — adoptadas como texto del canon en r15

- **Adenda P10 (absorciones):** adoptada en el canon N-01 r15. La
  absorción automática r18 la ejercitó de nuevo (respaldo, puertas,
  GitHub 4/4 por blob) — quinta ocurrencia del régimen, sin novedad
  de texto.
- **Adenda P9 (corrección 21:02):** adoptada en el canon N-01 r15.
  Sin casos nuevos; la corrección 21:02 sigue vigente como regla
  madre de la ronda (§0c del mapa r19).

## 3. Punto abierto: fuente eliminada o movida — SIGUE ABIERTO, sin ocurrencia

- Ningún precedente nuevo lo cubre. **Hoy no hay ocurrencia:**
  `audit.py` 2026-11-14 da `no_encontrado=0` (0/354) — ninguna fuente
  citada por ningún claim ha desaparecido.
