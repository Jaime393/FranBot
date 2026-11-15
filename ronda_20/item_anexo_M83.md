# ÍTEM DE ANEXO M-83 — PREPARADO PARA EL ANEXO DE INCERTIDUMBRE (RONDA 20, FASE 1, F7)

- **Fecha:** 2026-11-15. **Orden:** mapa FASE 0 r20 §F7 ("Ítems del anexo N-16: si F3 produce M-81.., preparar sus ítems para el anexo de incertidumbre") + encargo F7 r20 (ítem de anexo para M-83).
- **Estado: PREPARADO, NO APLICADO AL ANEXO.** El anexo (`academico/incertidumbre_mediciones.md`, 18 ítems, sha `23acd4d0…`) no se toca en este frente. Añadir este ítem exige una decisión (la numera FASE 2); F7 solo lo prepara.
- **Formato:** mismo que los ítems del anexo (`## M-78 — CONFIRMA formal (r19, 2026-11-14) — ítem añadido por N-25`).

## M-83 — CONFIRMA (r20, 2026-11-15) — ítem preparado por F7

- **Valor:** las 3 mediciones fuera del dataset — **Topografía andina SRTM (D_f 2,20), Dosel amazónico GLAD (D_f 2,79), Porosidad del suelo SoilGrids bdod (D_f 2,82)** — **son verificables en el corpus con fuente + hash**: **C-791** (verificacion, SE) y **C-944** (hueco, SE) las nombran a las 3 con sus D_f y citan paper_df.md con hash `sha256:304a41bf…`, que **coincide byte a byte con el paper_df.md local** (sha256 directo). Las 3 siguen fuera del dataset CSV (**0 coincidencias** SRTM/GLAD/bdod en 30 filas) por exclusión deliberada (fuera de banda), como registran ambos claims. Control: las 3 están en mediciones_informe.md (ciclo 74, M1/M2/M5). → **CONFIRMA: la cara d08 L13 CIERRA** (primera cara que cierra desde d04 L13 en r15).
- **Falsador:** CONFIRMA si las 3 mediciones son verificables en el corpus con fuente + hash (claim SE que las nombra a las 3, con hash de archivo que coincide con el archivo local) — la cara cierra; NO_CONFIRMA si alguna de las 3 carece de fuente + hash verificable en el corpus (la cara avanza, sigue paper-only); NO_SÉ si el hash no se puede verificar o el corpus es ilegible. Declarado en `declaracion_falsadores_r20.md` (2026-11-15T07:06:00Z) antes de correr. **Veredicto:** CONFIRMA (cierre de cara).
- **Matiz — cierre por verificación, no por re-medición:** el hueco era de existencia en el corpus, no de medida: los D_f 2,20/2,79/2,82 se toman como publicados, sin re-correrlos. Que las 3 estén en el corpus no las convierte en filas del dataset: la distinción 32/29 se preserva por orden (C-944 la registra explícitamente). El cierre es de la cara d08 L13 como hueco de integración corpus↔paper; el dataset sigue en 30 filas.
- **Secundarios (NO decisorios):** C-791 aparece 1 vez, C-944 1 vez en claims.jsonl; 'topografía andina' 2 líneas, 'dosel' 2, 'bdod' 2 (las 2 son C-791 y C-944 en cada caso); paper_df.md en Drive ID 1yucWNIXOtp8NRW-kliJj41UC3WlsyaJt (Consulta v4, citado por C-791).
- **Lección para la próxima vuelta:** el cierre de d08 L13 no abre trabajo nuevo — es un cierre. La lección es de método: una cara "solo en paper" se cierra verificando fuente + hash en el corpus, no re-midiendo. El patrón vale para otras caras paper-only si aparecen (hoy no hay otra cara paper-only en el censo).
- **Fuente:** claims.jsonl (1.192 líneas, corpus post-r19) + paper_df.md local (sha en este ítem) + dataset_nodos_Df.csv (30 filas + cabecera) + academico/inbox/mediciones/mediciones_informe.md (control, ciclo 74). **sha_dato:** `c80b15b74bdf06f07ab093e40752593685554ea4ac2667ced42e7dd59f47e41f` (med_M83.json, 15 claves; verificación independiente por re-búsqueda con grep -n y sha256sum directo, idéntica).
- **¿Da fila?** NO (anotación): registra el cierre de la cara d08 L13 como hueco de integración corpus↔paper; las 3 mediciones siguen fuera del dataset por exclusión deliberada. No se inscribe en el CSV.
- **Cara:** d08 L13 (3 mediciones solo en paper_df) — **CERRADA en r20**. Caras: 18 cerradas → 19 si FASE 2 adopta; 59 abiertas → 58. Primera cara que cierra desde d04 L13 en r15.

## Precedente (3)

- **M-80** (ítem añadido por N-27, r19): seguimiento de una cara cerrada (d04 L13, r15) con producto — el precedente directo de un ítem de anexo que registra trabajo sobre una cara ya cerrada. M-83 es el caso simétrico: el ítem que registra el cierre mismo de una cara.
- **N-16** (r15, aplicada): el anexo existe con ítems M-56..M-76 por inscripción; la vía de inscripción de mediciones en el anexo es la decisión numerada por FASE 2, preparada por F7. M-83 sigue la misma vía.
- **N-18 / N-19 / N-20 / N-22 / N-23 / N-25 / N-26 / N-27** (r15/r16/r17/r18/r19, aplicadas): los ítems M-66, M-69, M-72, M-75, M-76, M-78, M-79, M-80 se añadieron al anexo por decisión numerada por FASE 2, preparados por F7 con el mismo formato. M-83 sigue la misma vía: preparado por F7, añadido solo por decisión.

## Proyección si se añade

Anexo 18 → 19 ítems (M-56..M-80 + M-83); tally CONFIRMA 11 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1 (M-83 es el 11.º CONFIRMA). CSV byte-idéntico (30 filas, sha `0852d58f…`). Si se añaden M-82 y M-83 juntos: anexo 18 → 20 ítems; tally CONFIRMA 12 · NO_CONFIRMA 6 · DIFERENCIA 1 · NO_SÉ 1.

## Reversión

Retirar este documento. El anexo no se tocó; nada que revertir en él.

ρ(x) > 0. Zvvvvv.
