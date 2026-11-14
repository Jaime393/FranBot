# DECISIÓN N-19 — AÑADIR EL ÍTEM M-69 AL ANEXO DE INCERTIDUMBRE (APLICADA)

- **Decisión:** N-19. **Estado:** APLICADA. **Fecha:** 2026-11-14.
- **Orden que autoriza:** Jardinero, 2026-11-14 01:43 -05 (régimen nuevo: las decisiones se aplican automáticamente).
- **Paquete:** `ronda_16/ejecucion_f7/item_anexo_M69.md` (sha `a6fabe60…`, ítem preparado por F7) + `ronda_16/ejecucion_f3/med_M69.json` (sha `1a057950…`, 15 claves, NO_CONFIRMA) + `ronda_16/verificacion/verificacion_fase2_r16.md` §10.1 (numeración y afirmación).
- **Afirmación registrada** (FASE 2 r16 §10.1): "Añadan el ítem M-69 al anexo de incertidumbre."
- **Anexo:** `academico/incertidumbre_mediciones.md` (antes: 11 ítems M-56..M-66, sha `6b9ea2aadb2e1f1261e9ffed25b69875abf5613fa943b01db0fc4f6aaa9c9e4e`; después: 12 ítems M-56..M-69, sha `acdde423cf757724fcef35f49c796628c6ee27caed52450cecd894a52eecf206`).

## Qué se añadió

El ítem M-69 tal cual fue preparado por F7 (sin corrección: su línea de cara ya dice CERRADA en r15, correcta — es seguimiento del límite de una cara cerrada, no reapertura):

- **Valor:** u* = 0,05 (5.º hueco interno mayor del grupo central de 24 nodos). Umbral declarado: u/2 = 0,0302. Como 0,05 ≥ 0,0302 → **NO_CONFIRMA**.
- **Falsador:** CONFIRMA si u* < u/2 = 0,0302; NO_CONFIRMA si u* ≥ 0,0302 (declarado antes de correr). **Veredicto:** NO_CONFIRMA.
- **Matiz a M-66 (no refutación):** M-66 midió que la columna resuelve 6/29 pares adyacentes y separa 4 grupos a > 2u, con un grupo central de 24 nodos sin distinguirse entre sí. M-69 precisa cuánto falta para resolver ese grupo: u* = 0,05 — una columna con u = 0,05, solo un 17% mejor que la actual (0,0604), ya resolvería 5 de sus 23 pares adyacentes. La indistinguibilidad del grupo es marginal en el umbral de conteo de M-66, no estructural. M-69 cuantifica la distancia: 0,0104 de resolución. Los grupos se re-derivaron del dataset ([1, 4, 24, 1], idénticos a M-66, grupo central coincidente nombre a nombre); ningún JSON de r15 cambia.
- **Huecos internos del grupo (23):** > u solo 3; > u/2 son 8; mediana 0,02; máximo 0,1. Rango D_f del grupo: 1,76..2,50.
- **Fuente:** dataset 30 filas + columna M-63. **sha_dato:** `1a057950…` (med_M69.json).
- **¿Da fila?** NO (anotación): refina la columna de incertidumbre (ítem M-63), no da valor de nodo. No se inscribe en el CSV.
- **Precedente:** ítem M-63 en el anexo (N-16) + ítem M-66 (N-18) + C-935 (claim HUECO, SE: el dataset no tenía columna de incertidumbre para D_f).

## Verificación

- Anexo: 12 ítems `## M-` (M-56..M-69); fila M-69 en la tabla Resumen; tally CONFIRMA 5 (M-59, M-60, M-62, M-63, M-66) · NO_CONFIRMA 5 (M-57, M-61, M-64, M-65, M-69) · DIFERENCIA 1 · NO_SÉ 1.
- CSV: `dataset_nodos_Df.csv` sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af`, 30 filas + cabecera, byte-idéntico antes y después. Filas nuevas: 0.

## Efecto en el corpus

Ninguno: solo edición del anexo + verificación. Sin claim inscrito, sin cambio de estado.

## Reversión

Retirar el ítem M-69 del anexo (y su fila de la tabla + el tally a NO_CONFIRMA 4). El anexo vuelve a su estado N-18 (sha `6b9ea2aa…`).

ρ(x) > 0. Zvvvvv.
