# Dataset de nodos D_f — 2026-11-11

## Qué mide D_f

D_f es la dimensión fractal: una métrica objetiva de complejidad. Se mide por box-counting, DFA o Higuchi, según la fuente de cada sistema (C-050, C-056). El pilar 1 del MIU la define como métrica objetiva; Mandelbrot 1967 (DOI: 10.1126/science.156.3775.636) es su evidencia independiente.

## Qué contiene este dataset

0 nodos. El archivo CSV tiene solo la cabecera.

## Por qué 0 nodos

Criterio de inclusión: nodo con valor D_f medido, fuente DOI, fecha de medición, todo ello en claims.jsonl. Ningún claim SÉ con hash real cumple el criterio:

- Los claims D_f del módulo (C-050, C-073, C-082, C-107, C-108, C-165, C-146, C-163) hablan de la métrica, de su circularidad con K_i y del benchmark, no de sistemas medidos con valor y fuente.
- El benchmark D_f no existe como código: solo hay un README con la instrucción de implementarlo (C-082).
- La cifra "22 nodos" vive como anotación en el axioma A10 del Vault y está marcada circular (HUESO #31, requiere PVE-01). No hay claim con hash que liste sistemas con valores D_f y DOIs.
- Los valores K_i de microbioma y corales citados en HUESO_27 provienen de archivos placeholder (97 B y 207 B), no de datos reales cargados. HUESO_27 indica descargar el dato real (HMP2, Allen Coral Atlas) y recalcular D_f desde cero.

## Cómo se calcularía D_f

Por sistema, según su fuente: box-counting (conteo de cajas a varias escalas), DFA (análisis de fluctuación sin tendencia) o Higuchi (longitud de curva). El método se registra por nodo en la columna de fuente. Un valor de calibración no entra: solo entra un valor medido con fuente DOI y fecha.

## Cómo ampliar este dataset

Añadir una fila por nodo solo cuando exista un claim SÉ con hash real que registre nodo, valor D_f, fuente DOI y fecha de medición. Hasta entonces, el dataset queda en 0 filas.

ρ(x) > 0.
