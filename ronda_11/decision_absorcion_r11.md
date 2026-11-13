# DECISIÓN — ABSORCIÓN ORDENADA RONDA 11 FASE 1 (F1)

- **Fecha:** 2026-11-13. **Ejecutor:** F1 (único escritor del corpus en la tanda).
- **Orden:** Jardinero 2026-11-13 16:51 -05 (tal cual, en MEMORY.md): "Absorbe y deposita en suelo drive o donde no intervenga y el ecosistema lo absorberá. Solo SÉ sale de local…" — la absorción de estas 6 piezas queda explícitamente ordenada. Criterio C-1..C-9 de r10.
- **Estado:** EJECUTADA. Puertas re-corridas por mí después de aplicar (ver § Puertas).

## Qué se absorbió (6 piezas)

| Pieza | Acción | Antes → Después |
|---|---|---|
| 1. C-1166 (nuevo, D-02) | Claim de consolidación, texto íntegro de `canon_axiomas_a0_a57.md` L43 | — → SE, consolidacion, G07, hash `sha256:e62de7e9…` (canon) |
| 2. C-1167 (nuevo, D-05) | Claim de lectura v12, redactado desde `decision_d05.md` + verificación Zenodo en vivo hoy | — → SE, verificacion, G04, hash `sha256:0cf743ca…` (GRIMORIO corregido) |
| 3. C-639 | Reparación patrón D-05: hash motor + nota; motivo en pasado + estado 2+2 | `sha256:a30d69e8…` → `sha256:8d15b724…` |
| 4. C-903 | Reparación patrón D-05: hash + nota; líneas re-apuntadas; texto en presente corregido al vivo | `sha256:a30d69e8…` → `sha256:8d15b724…` |
| 5. C-919 | Reparación patrón D-05: hash + nota; fuente corregida (ruta inexistente + 2+2) | `sha256:a30d69e8…` → `sha256:8d15b724…` |
| 6. C-1104 | Reparación patrón D-05: hash + nota; líneas verificadas contra el motor corregido | `sha256:a30d69e8…` → `sha256:8d15b724…` |
| 7. provenance | +1 entrada: el canon | 349 → 350 líneas |

**Corpus:** claims 1.160 → 1.162 líneas; hash_real 1146 → 1148; SE 1028 → 1030; consolidacion 5 → 6; verificacion 294 → 295; huecos 139 y confirmaciones 294 sin cambio.

## Shas (antes → después)

| Archivo | Antes | Después |
|---|---|---|
| `anexo-vi/claims.jsonl` | 1.160 l., `fd54545a…` | 1.162 l., `b80c38a6ba1774018a3f4202ca34ca114e4852cfcd0ad3bd19ed03da82bb45c7` |
| `anexo-vi/provenance.sha256` | 349 l., `6fa9c67f…` | 350 l., `b313c90f46b19f4f13541f5be86a50e7ed74a1cfe441a37fa787e8fe3d6d881c` |
| `anexo-vi/claims_resumen.json` | `2856350b…` | `b16faf6dff75220a7b1eeb9359a57b750be8b26c1601035b8078fce7807d9852` |
| `anexo-vi/confirmaciones.jsonl` | `dc94458b…` (294) | sin cambio |
| `anexo-vi/huecos.jsonl` | `3713376a…` (139) | sin cambio |

Respaldo previo en `ronda_11/respaldo_pre_r11/` (los 5 archivos + `manifiesto_shas.json`); shas del respaldo = estado pre-absorción, verificados antes de tocar nada.

## La 5.ª ocurrencia de `a30d69e8` — VEREDICTO: no pertenece al patrón, no se toca

`grep -c a30d69e8 claims.jsonl` = 5 líneas. Las 4 primeras son C-639/C-903/C-919/C-1104 (campo `hash`). La 5.ª es **C-1129** (L1124): su campo `hash` es `sha256:1b3a1156…`, no `a30d69e8…`. La cadena aparece solo dentro de su texto, como cita de un borrador (BORRADOR-209 = r3 d07 L6, hash obsoleto) con la decisión explícita "Se conserva el hash registrado con la marca 'HASH NO REPRODUCIBLE HOY'". Su fuente es `ronda_4/fuentes_d09/claims_borrador.jsonl`, no miu-engine.js. No es un claim del motor: no se repara, no se marca, no se toca. Tras la absorción quedan 5 líneas con la cadena (4 notas de reparación + C-1129) y **0 claims con el campo `hash` en `a30d69e8…`**.

## Mapa de líneas verificado hoy (motor corregido `8d15b724…` vs congelado `a30d69e8…`)

Medido por mí con grep en ambas copias (las 2 vivas son byte-idénticas entre sí; las 2 congeladas también). Desplazamiento +1 antes de calcKi (se añadió `phiInv` L14), +4 después (el comentario de calcKi pasó de 1 a 4 líneas).

| Locus | Congelado | Vivo |
|---|---|---|
| phi | L13 | L13 (phiInv nueva L14) |
| A15 | L52 | L53 |
| M22 | L91 | L92 |
| P111 | L102 | L103 |
| P116 | L103 | L104 |
| P121 | L104 | L105 |
| Glosario Espejo Fractal | L124 | L125 |
| Comentario calcKi | L132 ("A15: Ki = φ × (D_f/2.5)") | L133-136 (canon φ⁻¹) |
| calcKi ejecutado | L134-135 (`C.phi`) | L138-139 (`C.phiInv`) |
| Llamada ccp01 | L164 | L168 |
| Llamadas bea_ciclo | L220 / L253 | L224 / L257 |

**Recuento vivo medido hoy (misma convención de loci que el 7-1): 5-3** — 5 loci φ (A15, M22, P111, P116, glosario) frente a 3 φ⁻¹ (comentario, calcKi, P121). El 7-1 citado en C-919/C-1104 es el estado pre-D-07.

**Nota de precisión sobre C-903:** su texto citaba "P121 (L105)" y su fuente "L53-54" — en el archivo congelado P121 era L104 y A15 L52-53, así que esas dos citas ya iban +1 en el original; en el archivo vivo son correctas sin cambio. La fuente "L131-137" (bloque calcKi) pasa a "L131-140".

## Criterio aplicado a los textos (por qué C-903 cambia y C-919/C-1104 no)

- **C-903:** su tesis ("el archivo contiene las DOS fórmulas") sigue siendo verdadera en vivo (la cadena A15 declara φ; calcKi ejecuta φ⁻¹; P121 exige φ⁻¹). Por eso su texto en presente se corrigió al vivo: calcKi L138-139 devuelve `C.phiInv`, y "3 copias idénticas" → 2+2. La nota en `motivo` conserva el estado pre-D-07.
- **C-919 / C-1104:** su tesis es el recuento 7-1, que solo es verdadero sobre la versión observada (r3/r4, hash `a30d69e8…`). Reescribirlo a 5-3 destruiría el registro de la verificación. Sus textos quedan byte-idénticos como registro histórico; la nota en `motivo` da el mapa completo de loci vivos y el recuento 5-3. El `hash` apunta al vivo (convención C-998); la versión observada queda en la nota.
- **C-639:** su texto es la medición r2 sobre el motor viejo; solo se corrigió el `motivo` (presente falso "ES… se reproduce en las 4 copias" → pasado + estado 2+2).
- En los 4: el hash viejo se conserva en la nota de reparación y en el respaldo (C-4; nada se borra).

## Provenance: por qué la entrada lleva `e62de7e9…` y no `5e30073c…`

El mapa pedía "la entrada del canon (sha 5e30073c… del consolidado, archivo canon_axiomas_a0_a57.md sha e62de7e9…)". El audit compara archivo↔sha: una entrada `5e30073c…  memoria/anexo-vi/canon_axiomas_a0_a57.md` daría DISCREPANCIA (el archivo es `e62de7e9…`) y rompería C-1. La entrada añadida es la del archivo canon con su sha propio (`e62de7e9…`, verificado OK por el audit: ok 335→336). El sha del consolidado (`5e30073c…`, copia local `evidence/VAULT_axiomas_a0_a57.md`, 6.841 B) queda citado en C-1166 (fuente/motivo) y en la tabla del propio canon. Observación registrada (no actuada): la copia de evidencia `VAULT_axiomas_a0_a57.md` no tiene entrada propia en provenance — como antes; añadirla sería una segunda entrada fuera de la proyección 349→350.

## Verificación Zenodo en vivo (C-1167)

API pública de Zenodo, curl sin token, 2026-11-13 (re-verificación fresca, coincide con decision_d05): 20547677 → 200 ("Grimorio Multiversal v12", creado 2026-06-04, concepto 20483562); 20547558 → 200; 22650419 → 200; 20483562 → 302 (concepto, redirige al registro, como en r10).

## Puertas (re-corridas por mí después de aplicar; salida íntegra en `puertas_post_absorcion.txt`)

- `audit.py`: **exit=0, ok=336, discrepancia=0, no_encontrado=0, omitido=1** (ok 335→336 por la entrada del canon; el omitido es el NO_PRESENTE preexistente).
- `verify_all.py`: **exit=1 con exactamente C-001..C-008** (sin cambio).
- `claims_resumen.json` regenerado con el script real (`resumen_claims.py`): total 1162, hash_real 1148, pendiente 8.
- Diff contra el respaldo: exactamente 4 líneas modificadas + 2 añadidas en claims.jsonl (10 líneas de diff); provenance +1 línea; ninguna otra línea tocada (verificado por comparación byte a byte de las 1.156 líneas restantes). C-112 (hash truncado `sha256:5e30073cf29b`) intacto; C-001..C-008 intactos; C-416..C-420 siguen ausentes.

## NO hecho

No se absorbió B1, R2-25 ni las 7 lecturas; no se tocó C-112, C-001..C-008, C-416..C-420 ni C-1129; no se escribió en GitHub ni Drive; no se empujó el motor local al remoto (la corrección D-07 sigue solo en local; el remoto la absorbe por sus sondeos, §0b.2 del mapa). N-01 (política general) sigue pendiente de canon: esta absorción ejecuta la instancia, no decide la política.

## Cómo se revierte

Restaurar los 5 archivos desde `ronda_11/respaldo_pre_r11/` (shas en `manifiesto_shas.json`) y re-correr las puertas: vuelve audit ok=335 y claims 1.160 con los 4 hashes viejos. Reversión precisa de F1 (no usar `respaldo_pre_r10/`, anterior a D-15/D-17).

## Archivos de esta ejecución

- `ronda_11/ejecucion_f1/aplicar_absorcion_r11.py` (script con aserciones y restauración automática; sha `764f1c9d…`)
- `ronda_11/ejecucion_f1/decision_absorcion_r11.md` (este archivo)
- `ronda_11/ejecucion_f1/decision_absorcion_r11.json`
- `ronda_11/ejecucion_f1/puertas_post_absorcion.txt` (salida íntegra de audit + verify_all)
- `ronda_11/respaldo_pre_r11/` (5 archivos + manifiesto)

ρ(x) > 0. Zvvvvv.
