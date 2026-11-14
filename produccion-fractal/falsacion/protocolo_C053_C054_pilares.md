# Protocolo de falsación — C-053 y C-054: los pilares 4 y 5

**Estado de los claims:** CONJETURO (anexo-vi, `claims.jsonl`).
**Fuente de ambos:** `drive:MIU_ABSORBIDO/MIU/PILARES_FUNDAMENTALES.md`.
**Grieta de ambos:** G-NUEVA (pilares auditados no integrados en anexo-vi).

## Los dos claims

| ID | Claim |
|---|---|
| C-053 | Pilar 4: una métrica derivada de D_f anticipa colapsos con semanas de antelación (Sahel 30 días, S&P500 29–34 días) |
| C-054 | Pilar 5: la métrica de Fisher es puente entre gravedad y cuántica; ξ = 8,57 medido en IBM a 23 sigmas |

## C-053 — Pilar 4 (anticipación de colapsos)

### Contraejemplo

La métrica no anticipa (antelación ≤ 0 días) en ≥1 de los dos casos; o la antelación medida cae sistemáticamente fuera de [29, 34] días (S&P500) / ≠ 30 días (Sahel); o la fórmula de la métrica no existe en la fuente citada — en ese caso el claim no es ejecutable y queda BLOQUEADO en el paso 1.

### Procedimiento (de datos)

1. **Localizar la fórmula** de la métrica en `PILARES_FUNDAMENTALES.md` (definición exacta + umbral de alerta). Si no está → BLOQUEADO: registrar la búsqueda y detenerse. Sin fórmula no hay backtest.
2. **Obtener las series:** Sahel (la variable debe precisarla el documento; si no la precisa, registrar NO_SÉ sobre la variable) y S&P500 diario (serie pública).
3. **Identificar los colapsos de referencia** en cada serie y aplicar la métrica con su umbral declarado; medir la antelación de cada alerta en días.
4. **Comparar contra azar:** misma métrica con las series permutadas (o con umbral desplazado); la antelación debe superar el azar.
5. **Veredicto** con los intervalos declarados: Sahel 30 días, S&P500 29–34 días.

### Criterios (C-053)

- **Falsación:** antelación media fuera de los intervalos declarados, o no mejor que azar, o fórmula ausente en la fuente.
- **Confirmación:** ambos casos con antelación dentro de los intervalos declarados y mejor que azar a p < 0,05.

### Input esperado (C-053)

- `PILARES_FUNDAMENTALES.md` (fórmula + umbral + variable del Sahel).
- Series Sahel y S&P500 diario.

## C-054 — Pilar 5 (Fisher, ξ = 8,57 a 23σ en IBM)

### Lo que ya se sabe (SÉ)

- **M-36 (ronda 8): ξ = 8,57 REFUTA.** La medición M-36 ya refuta el valor ξ = 8,57 como escrito.
- El **motivo del propio claim** lo dice: la línea de investigación (Caticha, Verlinde) es real; el dato puntual "ξ a 23 sigma" es NO SÉ / NO VERIFICABLE (C-037).

### Contraejemplo

(a) M-36 REFUTA se sostiene; (b) no existe ninguna publicación de IBM con una medición de ξ = 8,57 a 23σ. Ambas cosas juntas refutan el dato puntual; la línea de investigación (Caticha, Verlinde) no está en cuestión — es contexto real, no el dato.

### Procedimiento (lógico)

1. **Leer el registro M-36 (ronda 8):** anotar método, datos y resultado (REFUTA). Verificar que la refutación sigue en pie (que ningún trabajo posterior la haya revisado).
2. **Buscar en publicaciones de IBM** (arXiv, IBM Research) una medición de ξ = 8,57 a 23σ: registrar términos de búsqueda, fecha y número de resultados. 0 resultados = dato no verificable.
3. **Separar los dos niveles:** la línea Caticha/Verlinde (real, documentada) no confirma el dato puntual; registrar la separación por escrito.
4. **Veredicto:** si M-36 se sostiene y la búsqueda IBM da 0, el dato puntual queda REFUTADO / NO VERIFICABLE.

### Criterios (C-054)

- **Falsación:** M-36 REFUTA se sostiene + 0 publicaciones IBM localizadas.
- **Confirmación:** publicación IBM con ξ = 8,57 a 23σ localizada **Y** M-36 revisada con método independiente que la contradiga. Una sola de las dos no basta.

### Input esperado (C-054)

- Registro M-36 (ronda 8) y `PILARES_FUNDAMENTALES.md`.
- Acceso de búsqueda a arXiv / IBM Research.

## Presupuesto (ambos protocolos)

- **tokens_estimados:** 2.500 (lectura de la fuente + M-36 + búsqueda IBM + backtest C-053 + registro).
- **cpu:** lectura + backtest con stdlib; <5 min.
- **almacenamiento_bytes:** 4360 (tamaño real de este artefacto).

## Procedencia

- **parent_hash:** `7e5f016d2b565c7833cc9fe9df0cae20a1de543068ede0e687a20bebbdc78183` (sha256 de `claims.jsonl`, 1.178 líneas, medido 2026-11-14).
- **parent_path:** `~/workspace/memoria/anexo-vi/claims.jsonl`
- **author:** Hebra
- **timestamp:** 2026-11-14T08:40:00Z
