# ÍTEM DE ANEXO M-78 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 19, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r19 §F7 ("Ítems del anexo N-16: si F3 produce M-78.., preparar sus ítems para el anexo de incertidumbre").
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 15 ítems, sha `39940fd7…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-75 — CONFIRMA formal (r18, 2026-11-14) — ítem añadido por N-22`).

## M-78 — CONFIRMA formal (r19, 2026-11-14) — ítem preparado por F7

- **Valor:** serie dim2 restaurada con parseo tolerante: 86 congresos (34..119); filtro de ancla P2 ≥ 0,01 excluye 4 congresos (45, 56, 62, 106); ancla filtrada por regla argmin: **Congreso 60, P2 = 0,0185**; **cociente máximo filtrado = 50,1351** (Congreso 80, P2 = 0,9275); **IC bootstrap 95% [38,0194, 95,3462]** (500 réplicas, semilla 0), excluye 2 → **CONFIRMA** según el falsador declarado.
- **Falsador:** CONFIRMA si el cociente máximo filtrado ≥ 2 con el IC bootstrap 95% excluyendo 2 (el muro se cruza); NO_CONFIRMA si el cociente máximo filtrado < 2 (el muro se sostiene; M-75 queda como artefacto de ancla casi-degenerada). Declarado en `declaracion_falsadores_r19.md` (2026-11-14T23:36:05Z) antes de correr. **Veredicto:** CONFIRMA (formal).
- **Matiz — el CONFIRMA sobrevive al filtro, pero el umbral no discrimina en dim2:** el ancla filtrada sigue siendo pequeña (12× bajo la mediana de la serie, 0,226; en M-75 era 113×). El cociente es un extremo máx/mín con sesgo de selección: el ancla es el mínimo de la serie por regla. El bootstrap del cociente temporal P2(119)/P2(ancla) lo delata: punto 6,7027, pero mediana bootstrap 2,9032, IQR [1,798, 5,8571], solo el 70,14% de las réplicas supera 2 (499/500 válidas; 1 excluida por denominador 0 exacto). La SD bootstrap del cociente secundario (1,35e15) está dominada por 1-2 réplicas con denominador casi nulo y no se interpreta; la dispersión interpretable es la mediana y el IQR. Cualquier ancla por debajo de 0,46 da cociente > 2 (máx/mediana solo ya es 4,10): en dim2 el umbral >2 se supera por el rango histórico propio de la serie — dim2 parte de casi cero en el siglo XIX y llega a 0,9275 — no por un crecimiento que el umbral distinga. La cara **d05 L4 NO se cierra** con esta medición (el veredicto es formal; la pregunta central — si el umbral >2 se transfiere a dim2 como prueba de crecimiento — queda respondida en negativo por el propio diseño: el umbral no discrimina).
- **Secundarios (NO decisorios):** P2(119)/P2(ancla) = 6,7027; máx/mediana = 4,10; P2(119) = 0,124. Bootstrap independiente con semilla 1 (otra corriente): IC 95% [37,6042, 97,9487], excluye 2.
- **Lección para la próxima vuelta:** el umbral >2 sobre máx/mín no es la herramienta para dim2. Una próxima especificación distinta tendría que abandonar el cociente de extremos (p. ej. medir el crecimiento temporal con una regla de ancla fija en el tiempo, no el mínimo de la serie). Repetir argmin con otro filtro solo mueve el degenerado.
- **Fuente:** datos DW-NOMINATE (HSall_members.csv, sha `495aee95…`; copias en `datos/` de r19, verificados antes de correr). **sha_dato:** `0863a3060fe5e5a02e32505c7917763f0d73868b112089cdf7e69d605c181735` (med_M78.json, 15 claves; verificación independiente con pandas groupby + medianas, otro camino de código, idéntica dígito a dígito: 86 congresos, ancla 60, cociente 50,1351, ratio 119 = 6,7027).
- **¿Da fila?** NO (anotación): refina la línea de polarización (ítems M-61/M-64, dim1, y M-75, dim2 sin filtro) y registra que el CONFIRMA sobrevive al filtro pero el umbral no discrimina en dim2; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L4 (polarización, medida y mecanismo) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (segunda CONFIRMA formal de la línea, tras M-75), no cierre.

## Precedente (3)

- **M-61 / M-64** (ítems de polarización dim1 en el anexo, añadidos en bloque por N-16): M-61 y M-64 miden la polarización con el falsador P/W (P(118)/P(90) > 2 Y W ≤ 1,5; la pierna P falla). M-78 es la misma línea (d05 L4) con especificación distinta (dim2, ancla con filtro P2 ≥ 0,01): la refina mostrando que el CONFIRMA sobrevive al filtro pero el umbral no discrimina.
- **M-75** (ítem añadido por N-22, r18): primera CONFIRMA formal de d05 L4 (dim2, ancla casi-degenerada Congreso 62, P2 = 0,002, cociente 463,75). M-78 responde directamente a su matiz H2 (ancla 113× bajo la mediana) con el filtro de ancla.
- **N-19 / N-20 / N-22 / N-23** (r16/r17/r18, aplicadas): los ítems M-69, M-72, M-75, M-76 se añadieron al anexo por decisión numerada por FASE 2, preparados por F7 con el mismo formato. M-78 sigue la misma vía: preparado por F7, añadido solo por decisión.

## Proyección si se añade

Anexo 15 → 16 ítems (M-56..M-76 + M-78); tally CONFIRMA 8 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1 (M-78 es el 8.º CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`). Si se añaden M-78, M-79 y M-80 juntos: anexo 15 → 18 ítems; tally CONFIRMA 10 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1.

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
