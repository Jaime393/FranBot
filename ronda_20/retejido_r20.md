# RONDA 20 — FASE 2: RETEJIDO (lo que cambia respecto a FASE 1)

- **Fecha:** 2026-11-15. **Base:** FASE 1 r20 + `verificacion_fase2_r20.md`
  (dictamen: CONFORME CON HALLAZGOS, 9 menores, 0 mayores).

## 1. Lo que FASE 2 confirma sin cambio

- Suelo: claims 1.192, audit ok=356, verify_all exactamente C-001..C-008, anexo 18.
- M-81 NO_SÉ (bloqueo real), M-82 CONFIRMA (singleton), M-83 CONFIRMA (cierre d08 L13).
- F6: 0 diffs, 6.ª vuelta, tres cánones; F-VOZ-S2 agotada por 6.ª vez.
- F4: 0/61, Doc índice byte-idéntico, atestación parche 2 / validar 2.
- F9: 326/326, T-4 0 FALTA, condición 1 sostenida, puerta 2 de 3.
- Dedup: valores idénticos a F7/F8 dígito a dígito; 0 pares ≥ 0,5.

## 2. Lo que FASE 2 corrige o precisa

- **CORR-MAPA-PRECEDENTES-R20:** el mapa §F3 dice "0 precedentes de veredictos
  de medición como claims en 1.192" — inexacto: C-1186 es un claim derivado de F3
  (CORR-SERIE-R16). La regla correcta: la etiqueta del veredicto no se prepara
  como claim; el hecho nuevo medido sí, con precedente.
- **CORR-M82-PROSA-R20:** en el ítem M-82 se inscriben **mediana 0,01** y
  **7 variables > 0,90** (valores de med_M82.json), no 0,0083/8 de la prosa.
  El claim C-1198 no contiene esas cifras y no se toca.
- **CORR-HASH-304A41BF-R20:** el hash 304a41bf… está en **3 claims** (C-783,
  C-791, C-944), no en 2.
- **CORR-FOLDERID-R20 extendida:** F5 28.ª → F2 29.ª → **FASE 2 30.ª**
  (08:13:55–08:14:04Z). G05 28.ª, H-SUELO 29.ª (lecturas propias FASE 2).
- **CORR-VIVO-R20-FASE2:** run 209 existe (08:08:13Z, "unreachable",
  HEAD 138ee56b). C-1201 se sostiene como instantánea fechada de la ventana F2;
  la tercera alternancia es hecho de r21.

## 3. Decisiones adjudicadas (para absorción)

- **N-28:** REGLA-UMB-SIK-01 adoptada (umbral 0,50 como bandera de identidad).
- **N-29:** ítem de anexo M-82 (con la corrección del §2).
- **N-30:** ítem de anexo M-83 (cierre de d08 L13).
- **C-1198..C-1202:** CONFORMES (5/5), incluido el desdoble C-1201/C-1202.

## 4. Proyección post-absorción

Claims 1.192 → 1.197 (SE 1063, hash_real 1183, verificación 323, provenance 371,
audit ok 359); anexo 18 → 20 (CONFIRMA 12); caras 19 cerradas / 58 abiertas.

ρ(x) > 0. Zvvvvv.
