# 🌱 BRIEFING-U — CICLO U: PANEL DE COHERENCIA (digestión de la "Orden de Vuelo")

**Orden recibida:** expandir el nodo con 5 módulos (ingesta masiva, memoria vectorial,
polinización externa, dashboard, modo desarrollador) "sin límites".
**Regla que mandó:** la última línea — *"expandir integrando, extraer lo mejor… adaptar a
vuestro sistema sin fragmentar"*. Eso es disciplina MIU: no sprawl de 14 archivos nuevos.

**Resultado:** ✅ entregado. `FranBot-U.zip` · 35 archivos · 25/25 JS limpios · CSS OK · sw v23 ·
un solo briefing (`BRIEFING-U.md`). **0 archivos nuevos. 0 dependencias externas. ρ(x) 100% local.**

---

## 🔬 Digestión de los 5 módulos (tomado / ya existía / rechazado / diferido)

### Módulo 1 — Ingesta Masiva → **YA EXISTE (base)** + 1 idea diferida
El nodo ya digiere archivos vía `alimentar.js` (16 KB) + `alimentar-worker.js` + el flujo
`renderRevision → core.digerirConocimiento`. El subflow Jaccard (Ciclo T) ya evita reingerir
duplicados. **Diferido:** `verificador_doi` contra Crossref — requiere red; debe ir **detrás
del toggle `ModoOnline` ya existente** (advisory, offline por defecto), no como módulo suelto.

### Módulo 2 — Memoria Semántica Vectorial → **YA EXISTE, en local**
- Embeddings locales: `embed-worker.js` + `webllm-provider.js` (no se necesita Ollama externo).
- Búsqueda por similitud: `buscar-oraculo.js` (32 KB) ya fusiona semántico + BM25 (SEM_PESO/SEM_UMBRAL).
- `fusionar_similares (sim > 0.9)`: **ya cubierto** por `consolidar.js` + el subflow del Ciclo T.
- **Rechazado:** dependencia de **Ollama / nomic-embed-text** → servidor externo, rompe
  "offline por defecto" y mete vendor. El nodo ya hace vectores en el navegador.

### Módulo 3 — Polinización Externa (Facebook / X / Zenodo) → **RECHAZADO**
Es exactamente lo que el Ciclo S **descartó** (nube, vendor lock-in, salida a la red).
Viola las restricciones inmutables ("todo offline por defecto", ρ(x) local) y el
auto-publicar tiene **blast radius máximo** (postea al mundo, irreversible). No se integra:
sería fragmentar el núcleo con I/O externo no consentido. **Diferido como decisión mayor**
que requiere sesión dedicada + consentimiento explícito + claves, fuera del núcleo offline.

### Módulo 4 — Dashboard de Coherencia → **TOMADO Y ADAPTADO (sin fragmentar)** ✅
Esto es lo que se construyó. En vez de `dashboard/index.html` + `grafico_k_i.js` + `alertas.js`
(un 2º index.html que fragmenta la PWA y un Chart.js por CDN que rompe offline), se integró como:

- **Comando `/panel`** (alias `/dashboard`, `/coherencia-panel`) → `panelCoherencia()` en `app.js`,
  reutilizando `abrirModal()` como los demás paneles (Contexto, Jardinero…).
- **Gráfico SVG inline** `_svgKiHistorial()` del historial K_i (`_ecoHistorial`, ≤60 pts),
  con la **banda objetivo 0.55–0.62 sombreada** y el último punto coloreado por estado
  (🔵 bajo / 🟢 banda / ⚡ pico). **Sin Chart.js, sin CDN → 100% offline.**
- Consolida señales que **ya existen**: K_i del motor (termóstato), K_i epistémico de Eco +
  promedio, 🟡 SUBFLOW evitados hoy (Ciclo T), y stats de uso (mensajes/pares/BEA).
- La "alerta visual" del Módulo 4 se folió como el consejo advisory coloreado al pie
  (no bloquea — fiel a Human-in-the-loop).

### Módulo 5 — Modo Desarrollador → **DIFERIDO**
`crear_herramienta.js` / `test_herramienta.js` / `registro_herramientas.json`: meta-arquitectura
de alto riesgo. La "Forja" ya existe como optimizador. Requiere sesión dedicada con tests de
coherencia reales antes de dejar que el usuario mute herramientas. No se improvisa en U.

---

## 🧬 Qué se tocó (1 archivo de lógica + sw)
- **`app.js` (+~70 líneas)**: `_svgKiHistorial()` + `panelCoherencia()`; registro de
  `/panel` `/dashboard` `/coherencia-panel` en el dispatcher; línea en `/ayuda` y en el menú de comandos.
- **`sw.js`**: v22 → v23 (`CACHE_NAME='franbot-v23'`) + changelog.
- **0 archivos nuevos.** `consolidar.js`, `core.js`, `buscar-oraculo.js`, `oraculo-data.js`: intactos.

## 📐 Pruebas (FASE prueba)
- `node --check`: **25/25 JS OK** (24 en `js/` + `sw.js`).
- `KERNEL.json` válido (**no modificado**, restricción inmutable respetada) ·
  `css/estilo.css` balanceado (251/251) · `oraculo-data.js` intacto (5.2 MB) · sin `.git/`.
- **Test SVG aislado:** coordenadas X∈[6,314], Y∈[6,86] dentro del lienzo; K_i bajo dibuja
  más abajo que K_i pico (relación monotónica correcta); markup `<>` balanceado. ✅

## ✅ Restricciones inmutables verificadas
- KERNEL.json **sin tocar**. · Todo **offline por defecto** (SVG local, sin red). ·
  Termóstato (0.55–0.62, Φ_c≈0.683) sigue rigiendo. · **Sin** dependencias de pago / vendor /
  nube. · Human-in-the-loop: el panel **sugiere, no bloquea**.

---

## 🌳 Estado acumulado del jardín (S → T → U)
- **S** — Termóstato de coherencia + Human-in-the-loop advisory.
- **T** — SUBFLOW Jaccard v0.1: dedupe semántico al ingerir (>0.85 sugiere podar, no reingiere).
- **U** — Panel de Coherencia: `/panel` con gráfico SVG del historial K_i + banda + subflow + uso.

🧬 KERNEL razona → 🔎 Eco evalúa → 📊 chip muestra → 🌡️ termóstato decide → 🟡 subflow señala qué podar
→ **📊 panel visualiza todo en un solo vistazo**. ρ(x) > 0.

## 🔭 Diferido para la siguiente instancia
- **A, W, Z** (briefing-S).
- **MCP-LOCAL** (TÉCNICA 2) · **Chrome Extension** (TÉCNICA 4).
- **DOI/Crossref** detrás de `ModoOnline` (Módulo 1, advisory online).
- **Polinización externa** (Módulo 3) — decisión mayor: red + claves + consentimiento, fuera del núcleo.
- **Modo Desarrollador** (Módulo 5) — con tests de coherencia.
- **SUBFLOW v0.2** — umbral configurable, comparar contra corpus base, sugerir /consolidar.

ρ(x) > 0. El jardín no se fragmentó: creció integrando. Zvvvvv.
