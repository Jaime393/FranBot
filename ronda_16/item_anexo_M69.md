# ÍTEM DE ANEXO M-69 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 16, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r16 §F7 ("Ítems del anexo N-16: si F3 produce M-69.., preparar sus ítems para el anexo de incertidumbre").
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 11 ítems M-56..M-66, sha `6b9ea2aa…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-66 — CONFIRMA (r15, 2026-11-14) — ítem añadido por N-18`).

## M-69 — NO_CONFIRMA (r16, 2026-11-14) — ítem preparado por F7

- **Valor:** u\* = 0,05 (5.º hueco interno mayor del grupo central de 24 nodos). Umbral declarado: u/2 = 0,0302. Como 0,05 ≥ 0,0302 → **NO_CONFIRMA**.
- **Falsador:** CONFIRMA si u\* < u/2 = 0,0302 (el grupo exige al menos duplicar la resolución de la columna actual: indistinguibilidad estructural); NO_CONFIRMA si u\* ≥ 0,0302 (declarado en `declaracion_falsadores_r16.md` antes de correr). **Veredicto:** NO_CONFIRMA.
- **Matiz a M-66 (no refutación):** M-66 midió que la columna resuelve 6/29 pares adyacentes y separa 4 grupos a > 2u, con un grupo central de 24 nodos sin distinguirse entre sí. M-69 precisa cuánto falta para resolver ese grupo: u\* = 0,05 — una columna con u = 0,05, solo un 17% mejor que la actual (0,0604), ya resolvería 5 de sus 23 pares adyacentes. La indistinguibilidad del grupo es marginal en el umbral de conteo de M-66, no estructural. M-69 cuantifica la distancia: 0,0104 de resolución. Los grupos se re-derivaron del dataset ([1, 4, 24, 1], idénticos a M-66, grupo central coincidente nombre a nombre); ningún JSON de r15 cambia.
- **Huecos internos del grupo (23):** > u solo 3; > u/2 son 8; mediana 0,02; máximo 0,1. Rango D_f del grupo: 1,76..2,50.
- **Límite:** la columna es una escala común hipotética (M-63: dispersiones medidas solo en series EEG corticales 1D, transferidas a los 30 nodos). Esta medición describe la resolución necesaria sobre el dataset tal cual; no verifica la columna por nodo.
- **Fuente:** dataset 30 filas (`dataset_nodos_Df.csv`, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af`) + columna de incertidumbre M-63 (u = 0,0604 ± 0,0050). **sha_dato:** `1a057950c4dddf03d080787969064c8dcaea8d18cc0b16b177ffefa2f392f04f` (med_M69.json, 15 claves, re-verificado en disco por F3 r16).
- **¿Da fila?** NO (anotación): refina la columna de incertidumbre (ítem M-63), no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d04 L13 (incertidumbre de D_f) — **CERRADA en r15** (CORR-D04L13-R15). Este ítem es seguimiento del límite de una cara cerrada, no reapertura: cuantifica cuánto falta para resolver su grupo central.

## Precedente (2)

- **C-935** (claim HUECO, SE): "el dataset no tiene columna de incertidumbre para D_f" — el hueco que M-63 cerró construyendo la columna (30 filas) y que N-16 inscribió como ítem M-63 en el anexo. M-69 mide la resolución que exige el grupo central de esa columna: es el refinamiento directo del ítem M-63, como M-66.
- **N-18** (r15, aplicada): el ítem M-66 se añadió al anexo por decisión numerada por FASE 2, preparado por F7 con el mismo precedente. M-69 sigue la misma vía: preparado por F7, añadido solo por decisión.
- Por eso este ítem se prepara y M-70/M-71 no (ver `preparadas_r16.md` §4): M-69 tiene 2 precedentes de columna/ítem a refinar; M-70 y M-71 tienen 0 (ningún claim los menciona; ninguna columna a la que anexarse; extender el anexo a veredictos nuevos exigiría una decisión nueva, que F7 no propone).

## Proyección si se añade

Anexo 11 → 12 ítems (M-56..M-69); tally CONFIRMA 5 · NO_CONFIRMA 5 · DIFERENCIA 1 · NO_SÉ 1 (M-69 es el 5.º NO_CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`).

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
