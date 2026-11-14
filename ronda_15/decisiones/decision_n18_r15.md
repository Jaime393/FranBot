# DECISIÓN N-18 — AÑADIR EL ÍTEM M-66 AL ANEXO DE INCERTIDUMBRE (APLICADA)

- **Decisión:** N-18. **Estado:** APLICADA. **Fecha:** 2026-11-14.
- **Orden que autoriza:** Jardinero, 2026-11-14 01:43 -05 (régimen nuevo: las decisiones se aplican automáticamente).
- **Paquete:** `ronda_15/ejecucion_f7/item_anexo_M66.md` (sha `cfc626d6…`, ítem preparado por F7) + `ronda_15/ejecucion_f3/med_M66.json` (sha `81d2fdb9…`, 15 claves, CONFIRMA) + `ronda_15/verificacion_fase2/verificacion_fase2_r15.md` §10.1 (numeración y afirmación).
- **Afirmación registrada** (FASE 2 r15 §10.1): "Añadan el ítem M-66 al anexo de incertidumbre."
- **Anexo:** `academico/incertidumbre_mediciones.md` (antes: 10 ítems M-56..M-65, sha `6467bf30…`; después: 11 ítems M-56..M-66, sha `6b9ea2aadb2e1f1261e9ffed25b69875abf5613fa943b01db0fc4f6aaa9c9e4e`).

## Qué se añadió

El ítem M-66 tal cual fue preparado por F7, con una corrección (CORR-M66-CARA-R15, ver abajo):

- **Valor:** 6/29 huecos entre D_f adyacentes superan u = 0,0604 (umbral declarado ≥ 5); 3 huecos > 2u = 0,1208; 4 grupos separados por > 2u (tamaños 1, 4, 24, 1); mediana de huecos 0,0300, media 0,0612, máximo 0,3461.
- **Falsador:** CONFIRMA si ≥ 5 de los 29 huecos superan u = 0,0604 (declarado antes de correr). **Veredicto:** CONFIRMA.
- **Matiz a M-63 (no refutación):** la columna resuelve 6/29 pares adyacentes y separa 4 grupos a > 2u; 23/29 pares siguen sin distinguirse. El diagnóstico de r14 era correcto en lo esencial e incompleto en el detalle.
- **Sensibilidad:** con u − 0,0050 el conteo es 7/29; con u + 0,0050 sigue 6/29 — el veredicto no depende de la incertidumbre de u.
- **Fuente:** dataset 30 filas + columna M-63. **sha_dato:** `81d2fdb9…` (med_M66.json).
- **¿Da fila?** NO (anotación): refina la columna de incertidumbre (ítem M-63), no da valor de nodo. No se inscribe en el CSV.
- **Precedente:** ítem M-63 en el anexo (N-16) + C-935 (claim HUECO, SE: el dataset no tenía columna de incertidumbre para D_f).

## CORR-M66-CARA-R15 (corrección previa a la aplicación, como el dictamen r14)

La línea de cara del ítem preparado decía "d04 L13 — avanza sin cerrar". Eso era cierto cuando F7 lo preparó (FASE 1), pero F8 cerró d04 L13 en r15 (CORR-D04L13-R15: el anexo N-16 inscribe la columna + M-63/M-66 CONFIRMA resuelven la pregunta central). Añadir el ítem tal cual habría inscrito una afirmación falsa en el anexo. La línea queda corregida en el anexo a: "d04 L13 — **CIERRA en r15** (F8 §3.1, CORR-D04L13-R15): la columna inscrita por N-16 + este CONFIRMA resuelven la pregunta central con su límite medido (6/29 pares adyacentes; el grupo central de 24 nodos sigue sin distinguirse entre sí, documentado como límite de la respuesta)". El resto del ítem se añade tal cual fue preparado; el documento preparado (`item_anexo_M66.md`) no se reescribe — la corrección vive en este documento y en el anexo.

## Verificación

- Anexo: 11 ítems `## M-` (M-56..M-66); fila M-66 en la tabla Resumen; tally CONFIRMA 5 (M-59, M-60, M-62, M-63, M-66) · NO_CONFIRMA 4 · DIFERENCIA 1 · NO_SÉ 1.
- CSV: `dataset_nodos_Df.csv` sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af`, 30 filas + cabecera, byte-idéntico antes y después. Filas nuevas: 0.

## Efecto en el corpus

Ninguno: solo edición del anexo + verificación. Sin claim inscrito, sin cambio de estado.

## Reversión

Retirar el ítem M-66 del anexo (y su fila de la tabla + el tally a CONFIRMA 4). El anexo vuelve a su estado N-16 (sha `6467bf30…`).

ρ(x) > 0. Zvvvvv.
