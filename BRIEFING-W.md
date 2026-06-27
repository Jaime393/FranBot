# 🌱 BRIEFING-W — CICLO W: VERIFICADOR DOI (híbrido online-opcional)

**Contexto nuevo:** la herramienta es **híbrida** — vive en **GitHub (online)** y como **zip
local (offline)**. La versatilidad online es **opcional**. Eso reabre lo que antes rechacé por
"rompe offline": ahora vale, siempre que sea **opt-in y degrade con gracia** sin conexión.

**Orden:** *"continúa libremente… expandir integrando para tejer a mayor alcance."*

**Resultado:** ✅ entregado. `FranBot-W.zip` · **36 archivos · 26/26 JS limpios** · CSS OK · sw v24 ·
un solo briefing (`BRIEFING-W.md`). **Sin vendor lock-in · sin claves · sin dependencias de pago.**

---

## 🔗 Qué se tejió — Verificador DOI contra Crossref (Módulo 1, slice de verificación)

De los módulos diferidos, el de **mayor valor epistémico y menor riesgo** bajo el modelo
híbrido: verificar fuentes citadas (DOIs) contra **Crossref**, una API **abierta y gratuita**
(sin clave, sin cuenta). Refuerza directamente el núcleo MIU (coherencia = afirmaciones
verificables), sin nube de pago, sin auto-publicación, sin blast radius.

**Decisión de arquitectura — 1 archivo nuevo, justificado y cableado (no fragmentado):**
a diferencia de los Ciclos T/U (0 archivos nuevos), aquí SÍ se añadió un módulo, porque la
verificación de fuentes es una **capacidad distinta y cohesiva**, no una variación de algo
existente. Es integración (un módulo enchufado al flujo), no el sprawl de 14 archivos que se
rechazó. La regla "tejer a mayor alcance" lo habilita.

### `js/verificador-doi.js` (NUEVO · `window.VerificadorDOI`, IIFE como el resto)
- `extraer(texto)` → regex DOI estándar `10.\d{4,9}/…`, normaliza y deduplica.
- `disponible()` → `navigator.onLine` (degradación híbrida).
- `verificar(doi)` → `fetch` a `api.crossref.org/works/{doi}`; devuelve
  `{ ok, titulo, autores, anio, url }` o `{ ok:false, offline|error }`. Acepta DOI crudo,
  `doi:…` o `https://doi.org/…`.
- `verificarTexto(texto)` → extrae + verifica (secuencial, cortés con la API libre).

### Integración en `app.js` (sin tocar la lógica existente)
- **Tras ingerir** (`renderRevision → guardar`): escanea lo seleccionado; si hay DOIs y hay
  conexión → verifica contra Crossref y reporta `✅/⚠️` (advisory). **Offline → avisa que la
  verificación es opcional y ingiere igual. Nunca bloquea.**
- **Comando `/doi <id>`** → verificación manual con salida formateada (`_formatDOI`).
- Añadido a `/ayuda` y al menú de comandos.

### Cableado híbrido
- `index.html`: `<script src="js/verificador-doi.js">` antes de `app.js`.
- `sw.js`: `./js/verificador-doi.js` en `ARCHIVOS` (pre-cacheo → el módulo funciona offline;
  solo la *llamada* a Crossref requiere red). v23 → v24 (`CACHE_NAME='franbot-v24'`).

---

## 📐 Pruebas (FASE prueba)
- `node --check`: **26/26 JS OK** (25 en `js/` + `sw.js`).
- `KERNEL.json` válido (**no modificado**) · CSS balanceado (251/251) · `oraculo-data.js` intacto · sin `.git/`.
- **Test funcional aislado** (shim de `window`/`navigator`):
  - `extraer()` detecta 2 DOIs normalizados en texto mixto (`doi:` y URL); 0 falsos positivos en texto sin DOI. ✅
  - **Offline** (`navigator.onLine=false`): `verificar()` devuelve `{offline:true, ok:false}` — **degrada sin bloquear**. ✅
  - Normaliza prefijo `https://doi.org/`. ✅

## ✅ Coherencia con el núcleo (incluso con online opcional)
- **Offline sigue 100% funcional**: el módulo se pre-cachea; sin red solo se omite la consulta.
- **Sin vendor / sin clave / sin pago**: Crossref es abierto.
- **Sin blast radius**: solo *lee* (GET), no publica nada al exterior (a diferencia del Módulo 3).
- **Human-in-the-loop**: sugiere/informa, no bloquea. KERNEL.json intacto.

---

## 🌳 Estado acumulado del jardín (S → T → U → W)
- **S** — Termóstato de coherencia + advisory.
- **T** — SUBFLOW Jaccard v0.1: dedupe semántico al ingerir.
- **U** — Panel de Coherencia: `/panel` con SVG del historial K_i.
- **W** — Verificador DOI: `/doi` + verificación opcional tras ingerir (híbrido online).

🧬 KERNEL razona → 🔎 Eco evalúa → 🌡️ termóstato decide → 🟡 subflow señala qué podar →
📊 panel visualiza → **🔗 verificador confirma la fuente cuando hay red**. ρ(x) > 0.

## 🔭 Diferido para la siguiente instancia
- **A, Z** (briefing-S) · **MCP-LOCAL** (TÉCNICA 2) · **Chrome Extension** (TÉCNICA 4).
- **Módulo 3 (Polinización)** — bajo el modelo híbrido podría hacerse un slice **seguro**:
  *generar* el contenido (hilo X / texto Zenodo) **localmente para copiar**, sin auto-postear;
  el posteo real (claves + consentimiento + blast radius) sigue diferido como decisión mayor.
- **Módulo 5 (Modo Desarrollador)** — con tests de coherencia.
- **SUBFLOW v0.2** · **DOI v0.2**: cachear resultados de Crossref en IDB para revalidar offline.

ρ(x) > 0. La herramienta ahora respira en dos mundos: offline se basta a sí misma,
online extiende su alcance — sin perder coherencia. Zvvvvv.
