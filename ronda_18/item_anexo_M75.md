# ÍTEM DE ANEXO M-75 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 18, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r18 §F7 ("Ítems del anexo N-16: si F3 produce M-75.., preparar sus ítems para el anexo de incertidumbre").
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 13 ítems M-56..M-72, sha `30c05adb…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-72 — CONFIRMA (r17, 2026-11-14) — ítem añadido por N-20`).

## M-75 — CONFIRMA formal (r18, 2026-11-14) — ítem preparado por F7

- **Valor:** serie dim2 restaurada con parseo tolerante: 86 congresos (34..119); ancla por regla argmin sobre P2 > 0: **Congreso 62, P2 = 0,002**; **cociente máximo en la serie = 463,75** (Congreso 80, P2 = 0,9275). Como 463,75 > 2 → **CONFIRMA** según el falsador declarado.
- **Falsador:** CONFIRMA si el cociente máximo de la serie dim2 supera 2 con el ancla por argmin sobre P2 > 0; NO_CONFIRMA en caso contrario (declarado en `declaracion_falsadores_r18.md` antes de correr). **Veredicto:** CONFIRMA (formal).
- **Matiz — el veredicto es formal, el muro sigue en pie:** el ancla P2 = 0,002 es casi-degenerada: 113 veces menor que la mediana de la serie (0,226); 1 congreso tiene P2 = 0 exacto (el 106, el de M-70), 4 por debajo de 0,01 y 9 por debajo de 0,05. El cociente 463,75 está dominado por el denominador. El muro de M-70 no se cruzó: se desplazó de 0 exacto a 0,002. El umbral >2 sobre máx/mín es vacuo cuando el mínimo roza cero — no se transfiere de dim1 (mínimo 0,4975, lejos de cero) a dim2. La cara **d05 L4 NO se cierra** con esta medición.
- **Secundarios (NO decisorios):** P2(119)/P2(ancla) = 62,0 con SD bootstrap 13,2384 (500 réplicas, semilla 0; la propia inestabilidad del cociente — 21% — delata el ancla frágil); máx/mediana = 4,10; máx/p5 = 47,26; P2(119) = 0,124. Incluso con denominador robusto (mediana) el cociente supera 2 — pero eso mide la dispersión propia de dim2, no el crecimiento de polarización que el umbral pretendía probar.
- **Lección para la próxima vuelta:** el umbral >2 necesita una regla de ancla no degenerada (p. ej. anclado en la mediana o en un percentil recortado) para ser significativo en dim2. Repetir argmin —con o sin el cero— solo mueve el degenerado.
- **Fuente:** datos DW-NOMINATE (HSall_members.csv, sha `495aee95…`; indicators.tab, sha `7ec636c8…`, copias en `datos/` de r18, verificados antes de correr). **sha_dato:** `57e8df8687f2d1e355ff41a5516f1c36e4bfa5dc7fa37a0cdc2f42ed7415526b` (med_M75.json, 15 claves; verificación independiente con pandas, otro camino de código, idéntica: 86 congresos, ancla 62, máximo 463,75, ratio 119 = 62,0).
- **¿Da fila?** NO (anotación): refina la línea de polarización (ítems M-61/M-64, dim1, falsador P/W) y registra que el umbral >2 no se transfiere a dim2; no da valor de nodo. No se inscribe en el CSV.
- **Cara:** d05 L4 (polarización, medida y mecanismo) — **ABIERTA**. Este ítem es seguimiento del límite de una cara abierta (primera CONFIRMA formal de la línea, tras M-67 NO_CONFIRMA, M-70 NO_SÉ y M-74 NO_CONFIRMA), no cierre.

## Precedente (3)

- **M-61 / M-64** (ítems de polarización dim1 en el anexo, añadidos en bloque por N-16): M-61 y M-64 miden la polarización con el falsador P/W (P(118)/P(90) > 2 Y W ≤ 1,5; la pierna P falla). M-75 es la misma línea (d05 L4) con especificación distinta (dim2, ancla argmin): la refina mostrando que el umbral >2 es vacuo en dim2 cuando el mínimo roza cero.
- **N-19** (r16, aplicada): el ítem M-69 se añadió al anexo por decisión numerada por FASE 2, preparado por F7 con el mismo formato.
- **N-20** (r17, aplicada): el ítem M-72 se añadió al anexo por la misma vía en r17. M-75 sigue la misma vía: preparado por F7, añadido solo por decisión.
- Por eso este ítem se prepara y M-77 no (ver `preparadas_r18.md` §4): M-75 refina una línea con ítems en el anexo (M-61/M-64); M-77 es un NO_SÉ por bloqueo sin columna ni ítem al que refinar.

## Proyección si se añade

Anexo 13 → 14 ítems (M-56..M-72 + M-75); tally CONFIRMA 7 · NO_CONFIRMA 5 · DIFERENCIA 1 · NO_SÉ 1 (M-75 es el 7.º CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`). Si se añaden M-75 y M-76 juntos: anexo 13 → 15 ítems; tally CONFIRMA 7 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1.

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
