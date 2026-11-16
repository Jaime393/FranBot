# RONDA 23 — F1 GUARDIA — INFORME

**Fecha:** 2026-11-16. **Frente:** F1 GUARDIA. **Estado:** GUARDIA_EN_ESPERA.

## Corpus — IDÉNTICO al cierre de r22

| Archivo | Líneas / valor | sha256 |
|---|---|---|
| `anexo-vi/claims.jsonl` | 1.207 líneas | `2ac47151618f222c41069819bf93640b16c53e33a13dbd4c266a2563d3542971` |
| `anexo-vi/provenance.sha256` | 380 líneas / 378 entradas | `ac91a28ef5ed300443a2b2098d3ed8fedab94d648e7319b16110b61183acab08` |
| `anexo-vi/claims_resumen.json` | SE 1073 / hash_real 1193 / verificación 333 | `f183622a4d89d9dae631510d88e55c14bd1e13eb11e63504eefac015fba40905` |
| `academico/incertidumbre_mediciones.md` | 25 ítems (M-56..M-89) | sin cambio (no re-medido en FASE 1) |

**Veredicto: corpus idéntico — SÍ.** 0 líneas nuevas contra el cierre de r22.

## Puertas (corridas por mí, SIN pipes, exit code real)

- **audit.py:** exit=0. RESUMEN: ok=366, discrepancia=0, no_encontrado=0, omitido=1.
- **verify_all.py:** exit=1, exactamente C-001..C-008 (hash no reproducible, sha256:PENDIENTE — nunca se rellenan sin dato externo verificable).

## Registro de pendientes — en 0

- Archivo: `ronda_12/afirmaciones_pendientes.md`, sha `1b595aacdba6746b8477d0c094b66cef971788830b78c6d575b70812bf8028f0` (sin cambio vs FASE 5 r22).
- Cabecera §1: **0 pendientes con afirmación + 61 aplicadas + 8 cerradas + 5 que no necesitan orden**.
- Recuento por script: 37 secciones numeradas; última §37 = RONDA 22 (N-34/N-35 + C-1209..C-1212, aplicadas 2026-11-16).
- **0 decisiones nuevas llegaron sin orden en FASE 1.**

## Sin aplicación en FASE 1

Guardia no aplica nada. Ningún archivo del corpus fue modificado.

## Observación (no es hallazgo de guardia)

La línea 6 del registro (§1, actualización r22) dice que la subida del corpus a GitHub "queda pendiente de la decisión del Jardinero sobre el método" — esa nota quedó obsoleta: el corpus se subió a GitHub el 2026-11-16 (HEAD `586f8751`, 4/4 por blob) y el método (c) se decidió el mismo día. La guardia no toca el registro; queda para FASE 5 r23 si lo juzga oportuno.
