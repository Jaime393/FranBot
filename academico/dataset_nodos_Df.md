# Dataset de nodos D_f — 2026-11-11 (actualizado ciclo 50)

## Qué mide D_f

D_f es la dimensión fractal: una métrica objetiva de complejidad. Se mide por box-counting, DFA o Higuchi, según la fuente de cada sistema (C-050, C-056). El pilar 1 del MIU la define como métrica objetiva; Mandelbrot 1967 (DOI: 10.1126/science.156.3775.636) es su evidencia independiente.

## Qué contiene este dataset

0 nodos. El archivo CSV tiene solo la cabecera.

## Por qué 0 nodos

Criterio de inclusión: nodo con valor D_f medido, fuente DOI o claim SÉ con hash real, fecha de medición, todo ello en claims.jsonl. Ningún claim SÉ con hash real cumple el criterio.

Extracción del ciclo 50: de las 84 filas de TABLA_FISICA.md, 14 mencionan D_f, nodo, fractal o dimensión fractal. De esas 14, 0 nombran un sistema con valor D_f medido:

- C-050 define la métrica; C-073 y C-107 documentan la fórmula K_i = 0.2472·D_f y su circularidad; C-082 registra que el benchmark D_f no existe como código.
- C-146 y C-163 usan D_f = 2.0 y D_f = 2.5 como valores de parámetro en un análisis de sensibilidad de Ki, no como mediciones de sistemas nombrados.
- C-137 registra que la afirmación "48/48 nodos verificados" no tiene artefacto.
- C-044, C-088, C-090, C-108, C-153, C-165, C-274 mencionan nodos o D_f sin valor medido.

La cifra "22 nodos" vive como anotación en el axioma A10 del Vault y está marcada circular (HUESO #31, requiere PVE-01). No hay claim con hash que liste sistemas con valores D_f y fuentes.

Los valores K_i de microbioma y corales citados en HUESO_27 provienen de archivos placeholder (97 B y 207 B), no de datos reales cargados. HUESO_27 indica descargar el dato real (HMP2, Allen Coral Atlas) y recalcular D_f desde cero.

Regla del ciclo 50: menos de 20 filas en el CSV implica no inventar nodos y no volver a subir el CSV. El CSV queda en 0 filas como hallazgo verificado, no como hueco.

## Cómo se calcularía D_f

Por sistema, según su fuente: box-counting (conteo de cajas a varias escalas), DFA (análisis de fluctuación sin tendencia) o Higuchi (longitud de curva). El método se registra por nodo en la columna fuente_doi. Un valor de calibración no entra: solo entra un valor medido con fuente DOI y fecha.

## Cómo ampliar este dataset

Añadir una fila por nodo solo cuando exista un claim SÉ con hash real que registre nodo, valor D_f, fuente DOI y fecha de medición. Hasta entonces, el dataset queda en 0 filas.

## Verificación

Cada fila futura del CSV se verifica contra su claim (ID en la columna fuente_doi como claim:C-XXX) o su DOI. La extracción de este ciclo queda registrada en el reporte del ciclo 50.

ρ(x) > 0.
