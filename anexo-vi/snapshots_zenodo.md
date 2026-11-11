# Snapshots Zenodo — 2026-11-11 (ciclos 46–47)

## Ciclo 47 — autor re-verificado por DOIs directos

- La consulta por nombre de creador devuelve HTTP 400 (2 intentos); la lista del autor se reconstruyó por DOIs directos.
- 11 DOIs re-verificados vivos (títulos, fechas, conceptos). Solo 22650419 lleva "Snapshot" en el título. **0 snapshots posteriores a 2026-09-07.**
- Series (concepto con múltiples versiones): MIU V12.0 (concepto 20279679): **5 versiones**; Grimorio (20483562): **3 versiones**; Unified Framework GR/QM (19338256): **2 versiones**; los demás conceptos: 1 versión, incluido el snapshot (22650418: 1).
- Las versiones revelan 6 DOIs más del mismo autor (mismos conceptos): total conocido 17 registros. La lista puede no ser exhaustiva (la búsqueda por nombre no funciona ahora).

## Concepto 22650418

Existe. Resuelve (302 → 200) al DOI 22650419, su única versión. Consulta con all_versions=true: **total de versiones: 1**.

| DOI | Título | Fecha | Tamaño | Versión |
|---|---|---|---|---|
| 10.5281/zenodo.22650419 | MIU Ecosistema — Snapshot automático | 2026-09-07 | 35.985 B (1 archivo) | 2 (del concepto 22650418) |

## Búsquedas (API pública, sin token)

- "MIU Ecosistema": 2 hits — 22650419 (snapshot, 2026-09-07) y 22071505 (MIU v4.0, publicación, 2026-08-23).
- "Snapshot automático": 2 hits — 22650419 y 22032896 (registro brasileño de biología del suelo, no relacionado).
- "kv_snapshot": 0 hits (el nombre de archivo no está indexado en metadatos).

## Snapshots posteriores a 2026-09-07: 0

No hay snapshots de 2026-10 ni de 2026-11. No hay versión 2 del snapshot (la "versión 2" del registro 22650419 es la versión del concepto, no una segunda publicación de snapshot).

## ¿Es 22650419 el primero de una serie?

No, por ahora. La serie es de 1. La hipótesis C-325 (primero de una serie de snapshots automáticos) **no se confirma**: el concepto tiene una sola versión y ninguna búsqueda encuentra otro snapshot del proyecto. Si la red sigue haciendo snapshots automáticos, no los publica en Zenodo con estos títulos, o no los ha publicado desde el 2026-09-07.

## Qué se puede leer de ellos sin tocar la red

Metadatos públicos y archivos pequeños (el JSON del snapshot, 35.985 B) vía API pública, sin token. Los archivos grandes (ZIP de 25 MB del DOI 20547558) se listan sin descargar.
