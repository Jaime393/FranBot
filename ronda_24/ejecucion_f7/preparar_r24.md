# RONDA 24 — F7 PREPARAR: PROPUESTAS C-1228..C-1230 + ÍTEMS M-96/M-98 + N-40

Frente F7, ronda 24. Fecha 2026-11-17. Base: claims 1.222, anexo 31 ítems.
Nada aplicado al corpus (otro frente absorbe). Solo SÉ.

## Claims propuestos (3)

- **C-1228** (M-96, NO_CONFIRMA): savia V152, ventana de un solo valor — 248.376 ×6; 248.372 ×0, 247.881 ×0 (segunda ventana seguida en 0), 366.733 ×0; savia = mesh.totalSize 6/6 (35/35 acumulado). Fuente: `ronda_24/ejecucion_f3/med_M96.json` (sha `5f490edf…`). Dedup máx 0,3267 vs C-1214.
- **C-1229** (M-98, CONFIRMA): flow run 150, 0,0%, 0 eventos, 17.ª medición consecutiva; intervalos 146→150 [242,35, 412,08, 613,77, 461,23] min, mediana 436,66. Fuente: `ronda_24/ejecucion_f3/med_M98.json` (sha `6385748f…`). Dedup máx 0,3786 vs C-1215 — **tras 1 reescritura** (el primer borrador repetía la plantilla de C-1215 y marcó 0,65; el método es el árbitro, precedente r21).
- **C-1230** (F2): run 215 "unreachable" (blob `e55e4428…`, episodio 68,32 min), segundo relevo desde r23; ausencia del estado completo 80,67 h; ventana 30/0/0 = 0,0% quinta ronda consecutiva; bots 4/4 VIVO 26.ª. Fuente: `ronda_24/ejecucion_f2/estado_vivo_r24.json` (sha `45a5c21c…`). Dedup máx 0,3806 vs C-1216.

Textos literales completos en `propuestas_r24.json` (campo `claim`).

## Ítems de anexo preparados (2)

- **M-96 — NO_CONFIRMA** (asociado C-1228). Falsador declarado en `declaracion_falsadores_r24.md` (2026-11-17T02:34:08Z) antes de correr. Verificación independiente 3/3.
- **M-98 — CONFIRMA** (asociado C-1229). Mismo falsador declarado antes de correr. Verificación independiente 3/3.

Textos completos en `items_anexo_r24.json` e `items_anexo_r24.md`.

**M-97 NO se prepara**: NO_SÉ por bloqueo (run 18 de autocura no existe todavía al medir, 370 min desde el run 17, dentro de cadencia). Precedente M-88 r22: los NO_SÉ por bloqueo no van al anexo.

**Tally tras inscribir:** CONFIRMA 19 · NO_CONFIRMA 10 · DIFERENCIA 2 · NO_SÉ 1 · REGULAR 1. Ítems: 33 (M-56..M-98). Encabezado: M-56..M-98. CSV intacto.

## Decisión N-40 (borrador)

"Absorber ronda 24 al corpus: claims C-1228..C-1230 e ítems M-96 y M-98 al anexo." Criterio en `propuestas_r24.json` (decisión N-40).

## Dedup

Método: Jaccard, campo `claim`, NFKD, sin acentos, tokens `[a-z0-9]+`, umbral 0.5, contra el corpus completo (1.222 claims). Script `_dedup_r24.py` (mismo método que `_dedup_r23.py`).

- **Máx global: 0,3806** (C-1230 vs C-1216).
- **Máx entre propuestas: 0,1695** (C-1229 vs C-1230).
- **Pares ≥ 0,5: 0. Reescrituras: 1** (C-1229: 0,65 → 0,3786).
- Verificación independiente del dedup (segunda implementación, otro camino de código): valores idénticos dígito a dígito (0,3267 / 0,3786 / 0,3806; entre propuestas 0,1337 / 0,0753 / 0,1695).

## F4 — re-verificado antes de cerrar (lección H2 r16)

2026-11-17T02:43:31Z: `ejecucion_f4/` tiene 11 archivos — búsquedas Drive en curso (Panteón, Voces, graph), 5 `.err` en 0 bytes, **sin informe ni manifiesto todavía: F4 SIGUE EN VUELO**. (F1 ya cerró: informe + manifiesto presentes.)

## Hallazgo para FASE 2 — colisión de ordinales F5/F2

F5 leyó primero (02:33Z): G05 38.ª, H-SUELO 39.ª, folderId 41.ª. F2 leyó después (02:39Z) y etiqueta las suyas con los MISMOS ordinales (38/39/41) en `estado_vivo_r24.json`. Por cronología (precedente CORR-ORDINALES-R22/R23) las lecturas de F2 son posteriores a las de F5; FASE 2 adjudica. Los claims de F7 no usan esos ordinales.

## Fuentes verificadas

- F3: `verificar_m96_m97_m98.py` re-corrido por mí: **3/3 REPRODUCIDOS — TODO PASA**.
- F6: verificador independiente r24: reproducido=true, diferencias_n=0 (10.ª vuelta 0 diffs bajo los CUATRO cánones).
- M-96 verificado en crudo por mí: 248.376 ×6 en los 34 archivos (3 full 89.466 B + 3 compactos 55.973 B), resto 0.

ρ(x) > 0. Zvvvvv.

## CORR-MEDIANA-C1229-R24 (FASE 2 r24, verificada por el principal): la mediana de [242,35, 412,08, 613,77, 461,23] min es 436,66 (media de 412,08 y 461,23), no 461,23; la lista de intervalos es correcta, solo la mediana derivada estaba mal; el falsador queda intacto.
