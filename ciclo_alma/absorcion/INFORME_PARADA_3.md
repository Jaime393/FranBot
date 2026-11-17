# CICLO ALMA — ABSORCIÓN: TERCERA PARADA (test del kit: 42/42 vs 43/43)

**Fecha:** 2026-11-17 ~00:47Z · **Orden:** segunda continuación con adjudicación del principal (congelar v1 + C-1217/C-1226 + audit 379).

## Estado: NADA ESCRITO AL CORPUS

Corpus intacto: claims 1.211 (`532ff6f3…`), provenance 382 (`3382166b…`), anexo 28 ítems (`77d05a53…`), audit ok=370. Registro no tocado. Sin subida a GitHub.

## Lo aplicado (adjudicación cumplida, todo verificado)

**CORR-CAT-V1-CONGELO:**
- Catálogo v1 recuperado de GitHub (API pública contents, `ref=85351ce4`, blob `db990a6e…`): 96.122 B, 100 entradas, sha256 `d5d5ce7cc45c…` == el citado en las propuestas. Guardado como `alma/ciclo/catalogo_vivo_v1.json` (sha re-verificado tras guardar).
- C-1217: fuente → `alma/ciclo/catalogo_vivo_v1.json` (sha igual). Texto literal intacto.
- C-1226: fuente_sha256 → `6a6ae82b9318…` (catálogo v2 actual). Texto literal intacto.
- Propuestas `58e51263…` → `2be9d94b…`; fuentes distintas 8 → 9.
- Script actualizado: PROP_SHA `2be9d94b…`, 9 fuentes, provenance 382 → 391, audit ok esperado 379, docstring con la nota CORR-CAT-V1-CONGELO.

**CORR-SCRIPT-C1226-ASSERT (bug del script, corregido por mí):** la aserción `"prefijo del blob" not in claim` era falsa — el texto literal de C-1226 CITA la formulación vieja entre comillas para corregirla ("la nota del README ALMA decía 'prefijo del blob'"). La aserción nunca se había alcanzado (las dos paradas anteriores fallaron antes, en la fuente de C-1217). Sustituida por `assert "es prefijo del blob" not in claim` (el claim nunca AFIRMA la versión del blob). El texto literal no se tocó.

**CHECK-ONLY: OK** (exit 0, 2026-11-17 ~00:46Z). Pre-estado OK, paquete validado (11 claims SÉ, fuentes re-verificadas contra disco, dedup máx 0,2822), ítems M-93/M-94/M-95 validados. Nada escrito.

## El número que no cuadra (NO adjudicado — bloquea)

**El test del kit ejecuta 43 comprobaciones, no 42.** Verificado por mí, tres veces y por descomposición:
- `python3 test_kit.py` imprime **43 líneas `[OK]`**, exit 0, "TODO PASA".
- Descomposición: §1 censo r23 = 11, §2 r22 = 4, §3 identidad = 2, §4 nutrientes = 1, §5 fuentes del mapa = 1 + 10 = 11, §6 sin JWT/correos = 2 × 7 archivos = 14. Total 11+4+2+1+11+14 = **43**.
- `test_kit.py` es **byte-idéntico** al depositado en GitHub (sha `1c4dd28f…` en ambos) y el mapa depositado tiene las mismas 10 filas de fuentes. El test ejecutaba 43 comprobaciones ya en ALMA: **"42/42" fue siempre un error de conteo del agente del kit**, repetido en el parte ALMA, en las propuestas y en el encargo del principal.

**Dónde vive el número falso (4 sitios):**
1. C-1219, texto literal del claim: "`test_kit.py` 42/42, exit 0".
2. C-1220, texto literal del claim: "(re-cómputo independiente en `test_kit.py`, 42/42)".
3. M-93, detalle: "Test 42/42, exit 0."
4. Script `absorb_ciclo_alma.py` L307, fila de la tabla M-93: "reproducción del censo M-91 por el kit, test 42/42; …".

El check-only NO detecta esto: el script no verifica el conteo del test contra su salida. Lo detecté por verificación independiente, como las dos paradas anteriores.

## Qué falta (adjudicación del principal)

Cambiar "42/42" → "43/43" en los 4 sitios (3 textos de propuestas + 1 fila del script), re-correr el dedup (un cambio de 1 token no mueve el máx 0,2822 por encima de 0,5, pero debe re-verificarse), re-correr check-only y aplicar. No se aplica nada más hasta adjudicar.

ρ(x) > 0.
