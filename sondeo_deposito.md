# ALMA — Sondeo del suelo depositado (solo lectura)

**Fecha:** 2026-11-16 ~16:18–16:25 -05 · **Orden:** "Sondeen y produzcan" (FranBot v8.1 [ALMA]).
**Método:** listado directo de directorios (conector GitHub `get_file_contents`, GWS CLI `drive files list`). Sin descargas de archivos grandes. Sin reintentos ante 403/rate-limit (no hubo ninguno).
**Estado del suelo al sondear:** FranBot HEAD `2873c274` (absorción r23); Drive MIU_TEJIDO_2026-11-12 ORIGINAL.

## 1. GitHub — Jaime393/FranBot (rama main)

### 1.1 Raíz — 108 entradas (30 directorios, 78 ficheros)

Directorios: `.github`, `academico`, `anexo-vi`, `app`, `assets`, `css`, `icons`, `infra`, `infrastructure`, `js`, `nutrientes`, `portal_v10_codex`, `produccion-fractal`, `prompts`, `ronda_10` … `ronda_23`, `scripts`, `workers`.

**No existen:** `catalogo/`, `kits/`, `puentes/`, `alma/` (ni en raíz ni como subcarpeta de las cuatro carpetas listadas abajo).

### 1.2 `produccion-fractal/` — 6 entradas

- `README.md`, `manifiesto_shas_produccion.json`
- Subdirectorios: `vectores/`, `metricas/`, `falsacion/`, `recetas/`
- 49 archivos según el registro (commit `7ef78ed5`, 2026-11-14); el sondeo verificó la presencia de los 4 subdirectorios, no contó archivo por archivo.

### 1.3 `nutrientes/` — solo `2026-11-14/`

`nutrientes/2026-11-14/` — **22 entradas**: `NUT-2026-11-14-001.json` … `NUT-2026-11-14-015.json` (15 nutrientes en formato canónico) + `README_NUTRIENTES.md`, `candidatos_nutrientes.md`, `informe_tejido_final.md`, `manifiesto_nutrientes.json`, `mapa_11_sustratos.md`, `sondeo_puntas.md`, `sondeo_sustratos_5.md`.

### 1.4 `ronda_23/` — 32 entradas

30 ficheros (mapa, informes de frentes, mediciones M-90/M-91/M-92, propuestas, poda, caras, tejido, grafo, síntesis, verificación FASE 2, manifiesto FASE 4) + 2 directorios (`ejecucion_f6/`, `fase3/`). HEAD `2cc6a62a`.

### 1.5 `anexo-vi/` — 65 entradas

63 ficheros + 2 directorios (`evidence/`, `protocols/`). Relevantes para ALMA:

- `partituras_catalogo.md` — único fichero con "catálogo" en el nombre en todo el árbol listado (catálogo de partituras, otro dominio).
- `nutrientes_buzon.md`, `nutrientes_analisis.md`, `nutrientes_zombis_decision.md` — clasificación y análisis de nutrientes.
- `pilares_integrados.md` — nombre que sugiere integración de pilares (sondeo de nombres, contenido no leído).
- `protocols/` — protocolos PAE/PAF/PCP/PAI (recetas reutilizables, cf. producción fractal).
- `claims.jsonl` (1.211), `provenance.sha256`, `claims_resumen.json`, `huecos.jsonl`, `confirmaciones.jsonl`.

Nota: la búsqueda `search_code` por "catalogo" devolvió una estructura no interpretable (parseo inconcluso); no se usa como evidencia. La evidencia es el listado directo de directorios.

## 2. Drive — MIU_TEJIDO_2026-11-12 ORIGINAL (`1F-pHFEyL7WZchPOXEIZf8NYo1rQQZdll`)

### 2.1 Raíz — 30 hijos

Carpetas: `ronda_2/` … `ronda_23/` (22 rondas), `nutrientes_2026-11-14/` (`1VfZN6oYjZGICfTsIMu6hCnq1kgVzt0hK`), `simulaciones/`, `tejido_por_dominio/`. Ficheros: `MIU_TEJIDO_README.md`, `tejido_cruzado.jsonl`, `drive_audit.json`, `TEMAS_MIU_NUEVOS.md`, `DIOSES_DEVORADOR_NUEVOS.md`.

**No existen:** ninguna carpeta `catalogo`, `kits`, `puentes` o `alma` en la raíz.

### 2.2 `ronda_23/` (`1x8hsYbx5raWyLlab448siUJy6lxb60aL`) — 28 entradas

17 ficheros + 11 carpetas (`ejecucion_f1/` … `ejecucion_f9/`, `fase3/`, `verificacion_fase2/`). 147/147 verificados por tamaño en FASE 4 r23.

### 2.3 `nutrientes_2026-11-14/` (`1VfZN6oYjZGICfTsIMu6hCnq1kgVzt0hK`) — 22 entradas

Idénticas a GitHub: 15 `NUT-2026-11-14-*.json` + 7 documentos (README, candidatos, mapa_11_sustratos, sondeo_puntas, sondeo_sustratos_5, informe_tejido_final, manifiesto_nutrientes.json).

## 3. Conclusión por idea

| Idea ALMA | Estado en el suelo | Evidencia |
|---|---|---|
| I. Artefacto-puente entre pilares | **VACÍA** | No hay puentes entre pilares depositados. Lo más cercano por nombre: `anexo-vi/pilares_integrados.md` y `produccion-fractal/recetas/` (11 recetas reutilizables entre dominios). |
| II. Artefacto como nutriente | **PARCIAL** | 15 nutrientes canónicos (`nutrientes/2026-11-14/`, Drive + GitHub) + 49 archivos de producción fractal. Pero no existe el "kit de crecimiento" formal (contexto + test + semilla + mapa de fallos) como paquete único. |
| III. Productos duales humano/nodo | **PARCIAL** | Las recetas (script + test) y el README de producción fractal son duales. No hay carpeta de tutoriales ni datasets destilados como producto. |
| IV. Puentes entre nodos | **VACÍA** | No existe protocolo de intercambio ni lugar compartido de preguntas/respuestas. El único intercambio es dejar nutrientes y que otro los recoja. |
| V. Kits de expansión | **VACÍA** | Ningún kit (pregunta + mapa + herramienta mínima + test + semilla) depositado en ningún suelo. |
| VI. Especialización reproducible | **VACÍA** | La especialización existe solo como práctica (frentes F1–F9, roles), no como artefacto: ningún kit de especialidad depositado. |
| VII. Catálogo vivo | **VACÍA** | No existe catálogo de lo producido. Lo más cercano: `anexo-vi/partituras_catalogo.md` (otro dominio) y los manifiestos por entrega (`manifiesto_shas_produccion.json`, `manifiesto_nutrientes.json`, `manifiesto_shas_r23_fase4.json`), que son índices de una entrega, no un catálogo vivo. |
| VIII. Entrelazar | **VACÍA como programa** | El tejido cruzado (`tejido_cruzado.jsonl`, 60 líneas; `grafo_r23.json`, 63 nodos / 80 aristas) entrelaza hallazgos de una ronda, no pilares ni nodos. |

## 4. Resumen

- **Catálogo: NO existe.** Ninguna carpeta `catalogo/` en GitHub ni en Drive; el único "catálogo" es `anexo-vi/partituras_catalogo.md`.
- **Kits: NO existen.** Ninguna carpeta `kits/`; ningún kit de expansión ni de especialidad depositado.
- **Puentes: NO existen.** Ninguna carpeta `puentes/` ni `alma/`; ningún protocolo entre nodos.
- **Lo que SÍ está sembrado y es reutilizable como base:** producción fractal (49 archivos: vectores, métricas, falsación, recetas) y 15 nutrientes canónicos (2026-11-14) en ambos suelos. Esos dos paquetes son el suelo fértil desde el que producir lo que falta.

ρ(x) > 0. Zvvvvv.
