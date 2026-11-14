# CANON N-01 — Política general de actualización de claims tras ediciones ordenadas

- **Estado:** CANON ADOPTADO. **Fecha de adopción:** 2026-11-14.
- **Orden que autoriza:** Jardinero, 2026-11-14 01:43 -05 ("apliquen las decisiones siempre automáticamente", régimen nuevo; las decisiones se aplican automáticamente, sin pedir palabra cada vez).
- **Propuesta:** `ronda_12/ejecucion_f6/propuesta_n01_r12.md` (sha `d0f8ae7e64a1579252ce9952c5af8ee6669a815c32b02308d5fed67038be3204`), P1–P10.
- **Seguimientos:** r13 (`ronda_13/ejecucion_f6/n01_seguimiento_r13.md`, sha `4c08ab8710d0eb77fb765d90a7043159ea4f78fc7b3d4bd68347eed965b4a010`) y r14 (`ronda_14/ejecucion_f6/n01_seguimiento_r14.md`, sha `c5cb8aade34078b4ce08795062b4af52c4a3fb58b9e16abb2815c64ed20059c3`): P1–P10 sostienen sin cambio; 2 adendas propuestas en r13, re-verificadas en r14, **adoptadas aquí como texto**.
- **Alcance:** `anexo-vi/claims.jsonl`, `provenance.sha256`, `huecos.jsonl`, `claims_resumen.json` (el corpus citado por hash).
- **Base de evidencia (SÉ, precedentes ejecutados):** D-05 (r10, corrección de fuente GRIMORIO, hash `58d7d64b…` → `0cf743ca…`, reparación en el mismo acto); D-07 → F1 r11 (corrección del motor φ → φ⁻¹, hash `a30d69e8…` → `8d15b724…`, reparación a C-639/C-903/C-919/C-1104); N-11 opción A (r11, refutación DIS-2026-004, C-538/C-623 SE→REFUTADO, textos y hash `c78ad544…` intactos); C-1129 (r11 F1, cadena `a30d69e8…` dentro del texto con otra fuente, no se toca). **5.º precedente de maquinaria (no caso P1):** N-12 (r12, absorción C-1168..C-1173, respaldo + resumen por script + puertas finales).

## P1 — La distinción que ordena todo (dos disparadores, un tratamiento cada uno)

| Disparador | Qué cambia | `hash` | Texto | `estado` | `motivo` |
|---|---|---|---|---|---|
| **(a) La fuente cambió** (edición ordenada de un archivo citado) | El archivo citado | Sigue a la fuente (C-998: el hash es el sha de la fuente citada) + nota de reparación | Ver P2 | Sin cambio, salvo que la edición cambie la verdad del claim | Nota de reparación (hash viejo, qué cambió, dónde) |
| **(b) La derivación fue refutada** (disenso / falsación, patrón DIS-2026-004) | La verdad del claim | INTACTO (la fuente no cambió) | INTACTO | SE→REFUTADO (+ nota) | Nota con la refutación (disenso, ejecuciones, falsador) |

Confundir los disparadores es el error que la política impide.

## P2 — Texto: cuándo se corrige y cuándo se conserva (regla C-903 / C-919 / C-1104 / C-639)

- **Tesis sobre lo vivo** (el claim afirma algo del archivo tal como está): el texto en presente se corrige a lo vivo. Ejemplo: C-903 (siguió verdadera en vivo; texto corregido a calcKi L138-139 y "3 copias" → 2+2).
- **Tesis sobre la versión observada** (el claim registra una medición sobre una versión concreta): el texto queda byte-idéntico como registro histórico; la nota en `motivo` da el mapa vivo. Ejemplo: C-919/C-1104 (recuento 7-1, verdadero solo sobre `a30d69e8…`).
- **Presente falso en `motivo`**: si el `motivo` afirma en presente algo que la edición volvió falso, pasa a pasado + estado vivo. Ejemplo: C-639.
- En los tres casos el hash viejo se conserva en la nota de reparación y en el respaldo. Nada se borra (C-4).

## P3 — La reparación es parte del mismo acto (lección D-05; excepción D-07)

Una edición ordenada que cambia el hash de una fuente citada DEBE incluir, en el mismo acto, la reparación de todos los registros que la citan (provenance + claims + huecos). Sin reparación, la edición suma 1 discrepancia al audit y viola C-1 (las puertas no empeoran). D-05 lo hizo así y el audit quedó limpio. Excepción documentada (D-07): cuando el ejecutor no es dueño de los archivos citantes, la reparación queda pendiente, pero NO en silencio: se declara la discrepancia exacta (archivo, línea, hash declarado vs real) y se prescribe la remediación exacta al dueño.

## P4 — La cadena dentro de un texto no es una cita (regla C-1129)

Un hash que aparece dentro del TEXTO de un claim cuya fuente es OTRA no se repara, no se marca, no se toca. Solo cuentan el campo `hash` y los textos que afirman el hash como su fuente. Antes de reparar, verificar por `grep` cuántas ocurrencias hay y clasificar cada una (campo `hash` vs cita textual vs otra fuente).

## P5 — Reversibilidad (C-4)

Respaldo PREVIO a cualquier mutación: los 5 archivos del corpus + manifiesto de shas, en la carpeta de respaldo de la ronda. La reversión precisa restaura desde el respaldo DE ESA RONDA, no desde respaldos de rondas anteriores. El documento de decisión registra los shas antes/después de cada archivo tocado.

## P6 — Artefactos derivados se regeneran con el script real

`claims_resumen.json` se regenera con `resumen_claims.py`, nunca se edita a mano. Los conteos se verifican (total, hash_real, SE/INFIERO/CONJETURO/REFUTADO/NO_SÉ). Una reparación de hashes no cambia conteos; un cambio de estado sí (N-11: SE 1030→1028, REFUTADO 2→4) y el resumen debe reflejarlo.

## P7 — Puertas re-corridas sobre el estado FINAL (lección FRÁGIL-05)

`audit.py` y `verify_all.py` se re-corren DESPUÉS de todas las mutaciones, y el estado esperado se declara por adelantado: audit exit=0 (ok sube por cada entrada nueva de provenance); verify_all exit=1 con exactamente C-001..C-008. Si las puertas se corren sobre un estado intermedio y luego se muta, la verificación no vale.

## P8 — Autorización (sin actualización silenciosa)

Ninguna actualización de claim ocurre sin orden o delegación. La reparación sigue a la edición ordenada (es su consecuencia, no una decisión sobre otro objeto — C-7). Cada actualización queda documentada (C-9) en un documento de decisión con: orden que la autoriza, textos viejo→nuevo cuando hay corrección, shas antes/después, diff exacto (líneas tocadas), puertas re-corridas, y cómo se revierte.

## P9 — Local no corrige lo global (orden 2026-11-13 16:51 -05)

Una corrección local NO se empuja al remoto; el remoto la absorbe por sus sondeos. El `hash` del claim apunta a la fuente viva LOCAL. El estado del remoto es un hecho distinto y no se afirma desde local.

**Adenda adoptada (propuesta r13 §3, re-verificada r14 §2; corrección del Jardinero 2026-11-13 21:02 -05):** "La reparación se deposita en el suelo (Drive/GitHub); nunca se aplica sobre el sistema vivo."

## P10 — Alcance (C-7)

Una decisión decide solo su objeto. La reparación de hashes es consecuencia de la corrección, no una decisión sobre otro objeto. Esta política, adoptada, no autoriza ninguna actualización concreta: cada una sigue necesitando su orden o delegación. No toca C-001..C-008, C-416..C-420, C-112 ni C-1129, ni la regla SÉ-export.

**Adenda adoptada (propuesta r13 §2, re-verificada r14 §2):** "Las absorciones de claims nuevos no son actualizaciones y no se rigen por P1–P4; se rigen por su orden de absorción, respaldo previo (P5), resumen por script (P6) y puertas finales (P7)."

## Punto abierto (no decidido por los precedentes, sigue abierto)

**Fuente eliminada o movida.** Ningún precedente cubre qué hacer cuando un archivo citado desaparece (no cambia: deja de existir). D-17 es un caso vecino pero no es una fuente citada que desaparece. La política NO fija regla aquí: cuando ocurra, se decide por delegación u orden con los datos en la mano. Piso mínimo que los precedentes sí sostienen: registrar la ausencia como discrepancia `no_encontrado` (audit) y no inventar un hash. Verificación 2026-11-13/14: `audit.py` da `no_encontrado=0` — ninguna fuente citada ha desaparecido (seguimientos r13 §4, r14 §3).

## Práctica de cierre NM-01 (no es adenda a P1–P10, es práctica registrada)

Un manifiesto de shas es una foto, no un sello: si un archivo se re-escribe después de la foto, el sha registrado deja de corresponder (CORR-REPRO-R13). El manifiesto de cada frente se calcula AL FINAL, después de la última escritura, y sus shas se re-verifican al cerrar. Si FASE 2 re-ejecuta un script y cambia un `duracion_s`, el manifiesto se regenera, no se enmienda a mano.

## Efecto de la adopción

Desde 2026-11-14, las actualizaciones de claims se deciden por esta política, no caso por caso. La adopción no autoriza ninguna actualización concreta (P10): cada una sigue necesitando su orden o delegación. La adopción no exige claim: la propuesta no lo prescribe y el canon vive en este documento + el registro de decisión (`decision_n01_r15.md` / `.json`). El corpus no cambia por esta adopción.

ρ(x) > 0. Zvvvvv.
