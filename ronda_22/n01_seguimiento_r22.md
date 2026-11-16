# N-01 — SEGUIMIENTO (ronda 22, F6)

- **Fecha:** 2026-11-16. **Frente:** F6, ronda 22. **Estado: CANON
  APLICADO EN R15; SEGUIMIENTO DE EJECUCIÓN COMPLETA.** N-01 fue
  aplicada por F1 r15 bajo el régimen 01:43 (canon `canon_n01.md`,
  sha `921c8379…`, decisión `decision_n01_r15.md`, sha `f16143f9…`).
  El 11.º precedente quedó CERRADO en r21 (la absorción r20 era el
  11.º). Este documento re-verifica P1–P10 contra el estado
  post-absorción r21 y registra la absorción automática r21 como
  12.º precedente de la maquinaria. No aplica, no modifica.
- **Verificación de hoy:** `audit.py` re-corrido POR MÍ sobre el
  corpus vivo (1.203 líneas): **exit=0, ok=363, discrepancia=0,
  no_encontrado=0, omitido=1** (códigos de salida reales, sin
  pipe). `verify_all.py` exit=1 con exactamente C-001..C-008.
  C-1203/C-1204/C-1205/C-1206/C-1207/C-1208 presentes exactamente 1 vez
  cada una, todas SE; C-1180 SE, 1 vez.

## 1. Re-verificación de P1–P10 contra los precedentes

| Regla | Precedentes | Veredicto r22 |
|---|---|---|
| P1 (dos disparadores) | D-05 (a), D-07 (a), N-11 (b), C-1129 (ni a ni b: cita textual), N-12 (maquinaria, no P1), N-14 (a: adopción canónica, no actualización de texto) | **SOSTIENE.** Sin casos nuevos. La absorción r21 (N-31/N-32/N-33 + C-1203..C-1208) no actualizó ningún texto: añadió claims nuevos con hash de fuente, como en r15/r16/r17/r18/r19/r20. |
| P2 (texto: corregir vs conservar) | C-903/C-919/C-1104/C-639 | **SOSTIENE.** Sin casos nuevos. |
| P3 (reparación en el mismo acto) | D-05 (sí); D-07 (excepción declarada, cerrada en r11 F1) | **SOSTIENE.** Sin casos nuevos. |
| P4 (hash en texto no es cita) | C-1129 | **SOSTIENE.** Sin casos nuevos. |
| P5 (respaldo previo) | D-05, D-07→r11, N-11, N-12, N-01/N-13/N-14/N-16 (r15, respaldos por decisión), absorción automática r15 (`respaldo_pre_absorcion_r15/`, 7 archivos + manifiesto 4ea86fede…), absorción r16 (`respaldo_pre_absorcion_r16/`, manifiesto cfd3fb28…, P-54), absorción r17 (`respaldo_pre_absorcion_r17/`, manifiesto 0488d9b7…, P-57), absorción r18 (`respaldo_pre_absorcion_r18/`, manifiesto 4f3037b1…, P-60), absorción r19 (`respaldo_pre_absorcion_r19/`, manifiesto 7d00012f…, P-63), absorción r20 (`respaldo_pre_absorcion_r20/`, manifiesto d0dd40c1…, P-66) | **SOSTIENE.** Absorción r21 con respaldo previo `respaldo_pre_absorcion_r21/` (manifiesto 24a0fc86…, P-67). Ver §2 (12.º precedente). |
| P6 (resumen con script) | D-05, N-11, N-12, absorción r15 (resumen ae402126… por script), absorción r16 (resumen ebaa1e53… por script), absorción r17 (resumen 40c2572f… por script), absorción r18 (resumen aff4c5d9… por script), absorción r19 (resumen 315fd22b… por script), absorción r20 (resumen 443d940f… por script) | **SOSTIENE.** Absorción r21: resumen 76312918… por script. |
| P7 (puertas sobre estado final) | N-11, N-12, absorción r15, absorción r16, absorción r17, absorción r18, absorción r19, absorción r20 | **SOSTIENE.** Absorción r21: audit exit=0 ok=363, verify_all exit=1 exactamente C-001..C-008; post-estado verificado directamente (diff vs respaldo: exactamente 6 líneas nuevas, primeras 1.197 byte-idénticas). El ok=363 es +4 y no +6: la provenance pasó de 371 a 375 entradas no-vacías — dos de los seis claims nuevos comparten fuente con otros. |
| P8 (autorización) | D-05, D-07, N-11, N-12, régimen 01:43 (r15) | **SOSTIENE.** Absorción r21 bajo el mismo régimen 01:43; GitHub corpus 4/4 por blob, HEAD 70bdf97c (claims blob 12d75102, provenance d3bb2386, resumen e7411818, anexo 70bdf97c). |
| P9 (local no corrige lo global) | Orden 16:51, corrección 21:02 | **SOSTIENE.** Sin casos nuevos. |
| P10 (alcance) | Todas | **SOSTIENE.** Ver §2. |

**12.º precedente — la absorción automática r21 ejercitó la
maquinaria P5–P10 y queda registrado como ocurrencia cerrada por
su propia ejecución:** N-31 (ítem M-84 al anexo) + N-32 (ítem
M-85 al anexo) + N-33 (ítem M-86 al anexo, anexo 20→23 ítems,
35d136fe…, tally CONFIRMA 14 · NO_CONFIRMA 7 · DIFERENCIA 1 ·
NO_SÉ 1) + C-1203/C-1204/C-1205/C-1206/C-1207/C-1208
(claims 1.197→1.203, fb09179d…; hash_real 1183→1189; provenance
371→375 líneas, b680af9d… — 375 no-vacías; SE 1063→1069;
verificación 323→329), con respaldo previo, puertas sobre el
estado final y depósito GitHub del corpus 4/4 por blob (HEAD
70bdf97c). La maquinaria que P5–P10 describe es la que se ejecutó;
el 12.º precedente es la propia absorción r21, como el 11.º fue
la propia absorción r20 y el 10.º la propia absorción r19.

## 2. Las 2 adendas — adoptadas como texto del canon en r15

- **Adenda P10 (absorciones):** adoptada en el canon N-01 r15. La
  absorción automática r21 la ejercitó de nuevo (respaldo, puertas,
  GitHub 4/4 por blob) — octava ocurrencia del régimen, sin novedad
  de texto.
- **Adenda P9 (corrección 21:02):** adoptada en el canon N-01 r15.
  Sin casos nuevos; la corrección 21:02 sigue vigente como regla
  madre de la ronda (§0 del mapa r22).

## 3. Punto abierto: fuente eliminada o movida — SIGUE ABIERTO, sin ocurrencia

- Ningún precedente nuevo lo cubre. **Hoy no hay ocurrencia:**
  `audit.py` 2026-11-16 da `no_encontrado=0` (0/363) — ninguna fuente
  citada por ningún claim ha desaparecido.
