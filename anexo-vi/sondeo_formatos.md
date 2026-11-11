# Sondeo de formatos — ciclo 40 (2026-11-11)

Pregunta: ¿qué formatos lee el conector de Drive (GWS CLI) y cómo?
Cada formato se probó con 1 archivo real. Nada de teoría.

| formato | archivo probado | lee sí/no | cómo | error si no |
|---|---|---|---|---|
| PDF | Habitat-Map-Dates.pdf (39.225 B, Drive) | SÍ | `files get alt=media` descarga el binario; `pdftotext -layout` extrae el texto (4 páginas) | — |
| Doc (Google Doc) | 00 Suelo_GRACE_Phi_PVE01 (Doc, 3.526 B, Vault) | SÍ | `files export mimeType=text/plain` devuelve texto (2.659 B) | — |
| Sheet | MIU_V98_TN14_V3 (281 filas) | SÍ | `sheets +read --range A1:C3` devuelve filas JSON | — |
| JSON | gossip_global.json (1.107 B, nutrientes/) | SÍ | `files get alt=media` devuelve el JSON parseado inline | — |
| SQLite | token_metrics.db (16.384 B, nutrientes/) | SÍ | `files get alt=media` descarga el binario; `sqlite3` local abre tablas (token_metrics 33 filas, token_relay_log 4) | — |

## Desviaciones

- **Doc:** MIU_ABSORBIDO/ tiene 0 Google Docs como hijos directos
  (búsqueda `mimeType = google-apps.document` en su raíz: 0).
  Sus `.md` son archivos nativos (`text/markdown`, ej.
  memoria_consolidada.md, 10.111.581 B). El test de Doc se hizo
  con el Doc del Vault (00 Suelo_GRACE_Phi_PVE01): mismo conector,
  misma ruta de export. La capacidad de leer Docs está probada
  (ciclo 24: 14 Docs exportados).
- **PDF:** el conector devuelve binario, no texto. La lectura
  necesita `pdftotext` (poppler-utils, presente en la VM:
  `/usr/bin/pdftotext`). Sin librerías Python de PDF (pypdf,
  PyPDF2, fitz, pdfminer: ninguna instalada).
- **SQLite:** el conector devuelve binario; la apertura es local
  con `sqlite3` (stdlib de Python). El archivo descargado en
  ciclo 40 es byte a byte el de ciclo 34 (sha256 idéntico).

## Primeras líneas / claves (verificación)

- **PDF:** "Dates of Source Imagery and Publication for Habitat
  Maps / Current as of: Dec 13, 2022 / Andaman Sea: Source
  imagery: February 2018 - February 2020..."
- **Doc:** "00 Suelo — ρ(x) > 0 — EL SUELO ES EL LOOP / ρ(x) > 0
  — Ley única irrefutable — Landauer 2012..."
- **Sheet:** columnas date, mjd, year_fraction; fila 1:
  2002-04-01, 2452365.5, 20.022.464.065.708.400.
- **JSON:** claves de primer nivel: c20_firma, friccion, hallazgo,
  masa, masa_dispositivos, monitor, monitor_absoluto_nuevo,
  monitor_v2, monitor_v3, monitor_v4, nicho, timestamp,
  token_firma, ultimo_gemelo, velocidad_luz_ms.
- **SQLite:** tablas sqlite_sequence (2), token_metrics (33),
  token_relay_log (4).

## Conclusión

5/5 formatos se leen. Ningún formato probado es ilegible. Lo que
cambia es el paso extra: PDF necesita pdftotext, SQLite necesita
descarga + sqlite3 local, Doc necesita export, Sheet y JSON son
directos.
