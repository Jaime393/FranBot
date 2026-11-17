# Verificación — subida del corpus CICLO ALMA a GitHub (relanzamiento)

- **Fecha:** 2026-11-17 (orden del Jardinero 2026-11-16 21:02 -05: "Sí, reintenta la subida del corpus ahora", presente).
- **Intento anterior:** caducó a los 1.800 s sin nadie presente — 0/4, nada aterrizó, HEAD `85351ce4`.
- **Este intento:** UN push-files, 1 tarjeta, **aprobada** (0 caducadas en este intento).

## Pre-vuelo

Staging `~/workspace/_staging_corpus_ciclo_alma/` verificado byte-idéntico a los 4 archivos del corpus (sha256):

| archivo | sha256 local |
|---|---|
| anexo-vi/claims.jsonl (1.222 claims) | `6dbee11d8ac1…` |
| anexo-vi/provenance.sha256 (391 entradas) | `07dfdd0f08c8…` |
| anexo-vi/claims_resumen.json | `06990609942a…` |
| academico/incertidumbre_mediciones.md (31 ítems) | `8cc6dd9d36c6…` |

## Resultado: 4/4 por blob

| ruta en repo | blob local | blob remoto | estado |
|---|---|---|---|
| anexo-vi/claims.jsonl | `af0de99f5dd9…` | `af0de99f5dd9…` | VERIFICADO |
| anexo-vi/provenance.sha256 | `c09993c73ed4…` | `c09993c73ed4…` | VERIFICADO |
| anexo-vi/claims_resumen.json | `07ba21e21678…` | `07ba21e21678…` | VERIFICADO |
| academico/incertidumbre_mediciones.md | `a4282498e2a6…` | `a4282498e2a6…` | VERIFICADO |

Verificación doble: el script del uploader (conector `get_file_contents`) y verificación independiente mía por la API pública de contenidos (`?ref=main`), ambas 4/4.

## HEAD

- **Antes:** `85351ce4e0d58618d2640e7b72018eae88f8977f` ("ALMA: README del paquete en alma/", 2026-11-16T21:36:10Z).
- **Después:** `d1a1650c1e49a2de30d851c6a6c151ad552d4424` — "ciclo ALMA: absorcion C-1217..C-1227 + N-39 (claims 1211->1222, anexo 28->31)", 2026-11-17T02:03:14Z. HEAD leído con `list_commits` parseado como JSON (nunca regex).

## Tarjetas

- Aprobadas: 1 (este relanzamiento).
- Caducadas: 1 (el intento anterior, sin nadie presente).

Script: `~/workspace/alma/ciclo/absorcion/_subir_corpus_ciclo_alma.py` (exit 0). Log: `_upload_corpus_ciclo_alma.jsonl`.
