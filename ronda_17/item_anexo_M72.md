# ÍTEM DE ANEXO M-72 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 17, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r17 §F7 ("Ítems del anexo N-16: si F3 produce M-72.., preparar sus ítems para el anexo de incertidumbre").
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 12 ítems M-56..M-69, sha `acdde423…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-69 — NO_CONFIRMA (r16, 2026-11-14) — ítem añadido por N-19`).

## M-72 — CONFIRMA (r17, 2026-11-14) — ítem preparado por F7

- **Valor:** 5 huecos ≥ 0,05 de 23 (conteo principal, frontera inclusiva, como enuncia M-69). Sensibilidad: conteo ≥ u = 5, 5, 4 para u = 0,045 / 0,05 / 0,055 (u\* ± SE(u) = 0,0050), dentro de [4, 6]. **CONFIRMA** (las dos piernas del falsador pasan).
- **Falsador:** CONFIRMA si (a) el método Decimal da exactamente 5 huecos ≥ 0,05 en el grupo central Y (b) el conteo se mantiene en [4, 6] en toda la banda [0,045, 0,055]; NO_CONFIRMA en caso contrario (declarado en `declaracion_falsadores_r17.md` antes de correr). **Veredicto:** CONFIRMA.
- **Matiz a M-69 (no refutación):** M-69 predijo con float + redondeo a 4 decimales que una columna con u = 0,05 resolvería 5 de los 23 pares adyacentes del grupo central. M-72 re-mide esa cuenta con aritmética exacta Decimal y la sostiene: 5 con la frontera inclusiva, 4 con la estricta — el 5.º hueco mayor ES 0,05 exacto, así que la predicción de M-69 vale tal como se enunció. La cuenta es robusta a ±SE(u) (4–5 en la banda) y el método entero reproduce M-66: el re-conteo con Decimal da 6/29 huecos > u = 0,0604 en todo el rango, idéntico al publicado. Los grupos se re-derivaron del dataset ([1, 4, 24, 1], idénticos a M-66 y M-69, grupo central coincidente nombre a nombre); ningún JSON de r16 cambia. La indistinguibilidad del grupo central sigue siendo marginal en el umbral de conteo, no estructural (M-69), ahora con la cuenta verificada por un segundo método.
- **Huecos internos del grupo (23):** ordenados 0,1 / 0,1 / 0,07 / 0,06 / 0,05 / 0,04 ×3 / 0,03 ×2 / 0,025 / 0,02 ×5 / 0,01 ×3 / 0,005 / 0,0 ×2; mediana 0,02; máximo 0,1. Rango D_f del grupo: 1,76..2,50.
- **Límite:** la columna es una escala común hipotética (M-63: dispersiones medidas solo en series EEG corticales 1D, transferidas a los 30 nodos). Esta medición describe la resolución sobre el dataset tal cual; no verifica la columna por nodo. El conteo es determinista sobre el dataset (error 0); la sensibilidad ±SE(u) mide la robustez de la cuenta, no un error de muestreo.
- **Fuente:** dataset 30 filas (`dataset_nodos_Df.csv`, sha `0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af`) + columna de incertidumbre M-63 (u = 0,0604 ± 0,0050) + predicción de M-69 (r16). **sha_dato:** `af47bc1c7b3d8b9739182b7de5fe39095de19864679aec1d43ea9b7bfc02dfd4` (med_M72.json, 15 claves, re-verificado en disco por F3 r17; verificación independiente con numpy, idéntica).
- **¿Da fila?** NO (anotación): refina la columna de incertidumbre (ítem M-63) y verifica la predicción del ítem M-69, no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d04 L13 (incertidumbre de D_f) — **CERRADA en r15** (CORR-D04L13-R15). Este ítem es seguimiento del límite de una cara cerrada, no reapertura: verifica por un segundo método la predicción que M-69 enunció sobre su grupo central.

## Precedente (3)

- **C-935** (claim HUECO, SE): "el dataset no tiene columna de incertidumbre para D_f" — el hueco que M-63 cerró construyendo la columna (30 filas) y que N-16 inscribió como ítem M-63 en el anexo. M-72 verifica la predicción del ítem M-69 sobre esa columna: es el refinamiento directo del ítem M-69, como M-69 lo fue del M-63.
- **N-18** (r15, aplicada): el ítem M-66 se añadió al anexo por decisión numerada por FASE 2, preparado por F7 con el mismo precedente.
- **N-19** (r16, aplicada): el ítem M-69 se añadió al anexo por la misma vía en r16. M-72 sigue la misma vía: preparado por F7, añadido solo por decisión.
- Por eso este ítem se prepara y M-73/M-74 no (ver `preparadas_r17.md` §4): M-72 tiene 3 precedentes de columna/ítem a refinar; M-73 y M-74 tienen 0 (ningún claim los menciona; ninguna columna a la que anexarse; extender el anexo a veredictos nuevos exigiría una decisión nueva, que F7 no propone).

## Proyección si se añade

Anexo 12 → 13 ítems (M-56..M-72); tally CONFIRMA 6 · NO_CONFIRMA 5 · DIFERENCIA 1 · NO_SÉ 1 (M-72 es el 6.º CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`).

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
