# F1 — GUARDIA_EN_ESPERA — RONDA 22

- **Fecha de verificación:** 2026-11-16 08:24 UTC (03:24 -05). Solo lectura. Sin pipes en las puertas.
- **Estado:** GUARDIA_EN_ESPERA. Sin aplicación en FASE 1.

## Corpus verificado (fuente: disco local, `~/workspace/memoria/anexo-vi/`)

| Archivo | Medida | Esperado | Veredicto |
|---|---|---|---|
| claims.jsonl | 1.203 líneas, sha `fb09179d58b876989954cfebb22ca660a972cd8001b7b3073c13c0575db8744d` | 1.203, `fb09179d…` | SÉ ✓ |
| provenance.sha256 | 377 líneas (375 no vacías + 2 vacías), sha `b680af9d5394079b25935371cb7551dc826d36f2097e64991e2ea4f3387d8451` | 375, `b680af9d…` | SÉ ✓ |
| claims_resumen.json | total 1.203; SE 1069, INFIERO 100, CONJETURO 22, REFUTADO 4, NO_SÉ 8; hash_real 1189; por_tipo.verificacion 329 | SE 1069 / hash_real 1189 / verificación 329 | SÉ ✓ |
| confirmaciones.jsonl | 294 filas | 294 | SÉ ✓ |
| Anexo incertidumbre (`~/workspace/academico/incertidumbre_mediciones.md`) | 23 ítems `## M-` (M-56..M-86); tally CONFIRMA 14 · NO_CONFIRMA 7 · DIFERENCIA 1 · NO_SÉ 1 | 23 ítems | SÉ ✓ |

Última modificación de claims.jsonl: 2026-11-15 21:31:17 UTC (absorción r21). Sin cambios desde el cierre de r21.

## Puertas, re-corridas por mí sin pipes

- **audit.py:** exit=0. `RESUMEN: ok=363 discrepancia=0 no_encontrado=0 omitido=1`. Salida completa en `salida_audit_r22.txt` (sha `bb4a9b05…`).
- **verify_all.py:** exit=1. Fallos exactamente C-001..C-008 (hash `sha256:PENDIENTE`, nunca rellenar sin dato externo verificable). Ningún otro fallo. Salida completa en `salida_verify_all_r22.txt` (sha `cdb09be8…`).

## Registro de pendientes

- `ronda_12/afirmaciones_pendientes.md`, sha `47bcac93…` (sin cambios desde 2026-11-15 21:36 UTC).
- Cabecera (línea 6): **0 pendientes con afirmación + 55 aplicadas + 8 cerradas (D-04 + N-15 + N-03 + D-06 + D-09 + repos GitHub App + 8 temas + LA BELLEZA) + 5 que no necesitan su orden**.
- Última actualización registrada: r21 (N-31/N-32/N-33 + C-1203..C-1208; 0 pendientes).
- **Ninguna decisión nueva llegó sin orden.** 0 decisiones pendientes al inicio de r22.

## Observación menor (no bloquea)

- El título de la §1 del registro sigue leyendo "Pendientes con afirmación (7) + aplicadas (55) + 1 cerrada" — rótulo obsoleto de antes del cierre de los 7 el 2026-11-15. La cabecera (línea 6) y las actualizaciones §35/§36 dicen 0/55/8/5 y son las autoritativas. No se edita el registro desde F1 (guardia, solo lectura); se deja a FASE 5 si corresponde.

## Veredicto F1 r22

Corpus íntegro e idéntico al cierre de r21. Puertas verdes. Registro en 0. Nada que guardar.
