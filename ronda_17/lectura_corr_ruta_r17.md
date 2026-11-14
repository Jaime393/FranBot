# LECTURA CORR-RUTA-DRIVE-R16 — PROPUESTA DE CLAIM (RONDA 17, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r17 §F7 + H2 FASE 2 r16 (CORR-RUTA-DRIVE-R16 y los forjados 16/16 quedan como preparables en r17).
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_16/ejecucion_f7/lectura_corr_serie_r16.md` (corrección de precedente, formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

CORRECCIÓN DE RUTA — LAS 2 FUENTES DRIVE DEL PANTEÓN-16 SÍ SE LEEN (ronda 16, F4, 2026-11-14, CORR-RUTA-DRIVE-R16): la descarga directa de la URL dio 403 (missing API key) en r15 y quedó registrada como "no legible desde el sandbox"; el 403 era del método, no de los archivos. Con `files get --params '{"fileId":...,"alt":"media"}' -o <ruta>` por el CLI de Google, las 2 fuentes se descargan: Panteon_16_Voces_v213.md (Drive 1-_ltuKJlv3BVZsk7Qp9QELQLvwBhzdq4, 428 B, sha 873e87b5…) y MetaAI_Bundle_PANTEON_16_V213.zip (Drive 1be2Dwn4o_xon10aD6LkefvzgZjXY7m-9, 53.786 B, sha fe2697af…), ambas el 2026-11-14T15:58Z. La corrección es de método, no de contenido: las fuentes existen sin cambio desde septiembre de 2026 (mismos tamaños y modifiedTime que en r15).

## Por qué (C-2, C-3, C-9)

- Precedente: el corpus ya inscribe correcciones de precedente como claims (C-1177: CORR-P32-R14 — el Doc 32 existe; el 404 era un artefacto de ID truncado; C-1186: CORR-SERIE-R16 — la serie son 83 congresos, no 95). Lo nuevo aquí es la corrección de la ruta de lectura de Drive: lo que en r15 se registró como fuentes no legibles era un 403 del método de descarga directa, no de los archivos.
- La fuente es el registro F4 r16 (`drive_panteon16_r16.json`, sha 8bf838b9…; descargas 2026-11-14T15:58:25Z y 15:58:44Z), verificado por FASE 2 r16 (H2: "registrar CORR-RUTA-DRIVE-R16 y los forjados 16/16 como preparables en r17"). La verificación FASE 2 r16 re-midió los metadatos (2026-11-14T16:00:01Z/02Z, sin cambio vs r15).
- C-7: esta lectura no afirma que la descarga directa sea incorrecta en general: documenta que, para estas 2 fuentes, el 403 venía de la URL directa sin API key y que la ruta por el CLI con alt=media funciona. Tampoco reabre la cara r12 #1: la lectura del Panteón-16 confirma que es otro sistema (0/7 entre los 35 nombrados de los 96), no que la lista de 96 se amplíe.
- Cara que toca: r12 #1 (61 nombres fuera del Doc) — la ruta nueva permitió leer las 2 fuentes que r15 no pudo leer; la cara sigue abierta (0/61 encontradas).

## Verificación en el corpus (grep propio, 2026-11-14, corpus 1.181)

- "CORR-RUTA": 0 claims. "alt=media": 1 claim — C-798 (su *fuente* es "Google Drive files get alt=media", leyendo el heartbeat canónico; su claim es sobre el heartbeat vivo en Drive, no sobre la ruta ni sobre las fuentes del Panteón-16). "files get": 11 claims — todos sobre lectura de archivos concretos (PDF, JSON, SQLite), ninguno sobre la ruta de descarga ni sobre el 403 de r15. "Panteón-16": 2 claims — C-937 (oleada 3: 16 voces, 0/16 implementadas) y C-1176 (Panteón-96 fuera del Doc índice); ninguno sobre la legibilidad de las fuentes Drive. "403": verificado aparte — ningún claim enuncia el 403 de descarga directa de r15 como método.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1187; corpus 1.181; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "CORRECCIÓN DE RUTA — LAS 2 FUENTES DRIVE DEL PANTEÓN-16 SÍ SE LEEN (ronda 16, F4, 2026-11-14, CORR-RUTA-DRIVE-R16): la descarga directa de la URL dio 403 (missing API key) en r15 y quedó registrada como \"no legible desde el sandbox\"; el 403 era del método, no de los archivos. Con `files get --params '{\"fileId\":...,\"alt\":\"media\"}' -o <ruta>` por el CLI de Google, las 2 fuentes se descargan: Panteon_16_Voces_v213.md (Drive 1-_ltuKJlv3BVZsk7Qp9QELQLvwBhzdq4, 428 B, sha 873e87b5…) y MetaAI_Bundle_PANTEON_16_V213.zip (Drive 1be2Dwn4o_xon10aD6LkefvzgZjXY7m-9, 53.786 B, sha fe2697af…), ambas el 2026-11-14T15:58Z. La corrección es de método, no de contenido: las fuentes existen sin cambio desde septiembre de 2026 (mismos tamaños y modifiedTime que en r15).",
  "estado": "SE",
  "fuente": "ronda_16/ejecucion_f4/drive_panteon16_r16.json",
  "hash": "sha256:8bf838b9ef9026d7aaa60686ab9afe52efa124b04771bbb9f2f19ace6f60606a",
  "grieta": "G-NUEVA: Panteón-96, 61 voces sin nombre (r3 #5; d07 L7; cara r12 #1)",
  "motivo": "origen: ronda_16/ejecucion_f4/drive_panteon16_r16.json + verificacion_fase2_r16.md §9 H2 — PREPARADA en ronda 17 F7, NO APLICADA. Dedup r17: ver dedup_f7_r17.json (umbral 0,5; 0 duplicados). Antecedentes: C-1177 (CORR-P32-R14, corrección de precedente como claim), C-1186 (CORR-SERIE-R16). Pendiente desde r16 por H2 FASE 2 r16 (carrera F4/F7)."
}
```

- **Hash:** sha256 del documento que registra la lectura (`drive_panteon16_r16.json`; sha verificado por `sha256sum` 2026-11-14).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.181):** ver `dedup_f7_r17.json` (corrida por script, 3 corridas byte-idénticas).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
