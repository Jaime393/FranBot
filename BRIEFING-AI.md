# 🌿 BRIEFING-AI — CICLO AI: Polinizador slug Unicode + `/dois` deprecación fuerte v2

**Contexto:** FranBot-AI parte de `FranBot-AH.zip` con cambios quirúrgicos en 2 archivos.
Lee este briefing antes de tocar cualquier archivo.

**Resultado del ciclo AI:** ✅ Diferidos prioritarios #3 y #1 de BRIEFING-AH completados.
`FranBot-AI.zip` · 0 archivos nuevos · 2 archivos modificados
(`js/app.js`, `sw.js`).

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Tarea 1 — Slug Unicode en Polinizador (`_poliDescargar`)

**El problema (diferido #3 de BRIEFING-AH):**
El slug del nombre de archivo del Polinizador eliminaba caracteres no-ASCII con
`replace(/[^a-z0-9]+/g, '-')` sin normalizar previamente. Resultado: `energía` →
`energ-a-oscura` (la `í` produce un guión porque es un char multi-byte sin
lowercase ASCII equivalente).

**Qué se implementó en `js/app.js` (línea ~194):**

```javascript
// Antes (AH):
const slug  = (tema || 'micelio').slice(0, 30).toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Después (AI):
const slug  = (tema || 'micelio').toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // tildes → ASCII base
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 30);
```

Diferencias de comportamiento:
- `.normalize('NFD')` descompone cada letra con tilde en letra-base + combining mark.
- `.replace(/[\u0300-\u036f]/g, '')` elimina solo los combining marks (rango Unicode
  estándar de diacríticos). Letras como `ñ` → `n` (NFD: `n` + `̃`).
- `.slice(0,30)` se movió al final: opera sobre el resultado ya normalizado, no
  sobre el string original con tildes. Sin diferencia práctica (1 char = 1 code point
  en el rango latino), pero semánticamente más correcto.
- Retrocompatible: temas sin tildes producen el mismo slug que antes.

**Tests esperados:**
1. `/polinizar energía oscura --hilo` → `micelio-hilo-energia-oscura-YYYY-MM-DD.md` ✅
2. `/polinizar coherencia fractal --zenodo` → `micelio-zenodo-coherencia-fractal-YYYY-MM-DD.md` ✅
3. `/polinizar Ki --resumen` → `micelio-resumen-ki-YYYY-MM-DD.md` ✅
4. `/polinizar ñoño --hilo` → `micelio-hilo-nono-YYYY-MM-DD.md` ✅

**Blast radius:** 3 líneas en `_poliDescargar`. Ningún módulo externo tocado.

---

### Tarea 2 — `/dois` deprecación fuerte v2

**El problema (diferido #1 de BRIEFING-AH):**
`/dois` mostraba la lista completa de DOIs (título, fecha, estado). Desde Ciclo AF
existe `/panel-doi` con la misma información y más (TTL diferenciado por estado,
secciones ok vs error). La soft-deprecation de AG añadió un pie de texto sugiriendo
`/panel-doi`, pero `/dois` seguía siendo el punto de entrada de facto por costumbre.

**Qué se implementó en `js/app.js`:**

El bloque `if (cmd === '/dois')` se simplificó radicalmente:

```javascript
// AI: /dois deprecación fuerte v2
if (cmd === '/dois') {
  window.mostrar(txt, 'user'); entrada.value = ''; entrada.focus({ preventScroll: true });
  if (!window.VerificadorDOI) { window.mostrar('...no disponible...', 'fran'); return; }
  window.VerificadorDOI.cacheStats().then(stats => {
    if (!stats.count) {
      window.mostrar('🔗 _Caché DOI vacío._ ...', 'fran');
      return;
    }
    window.mostrar(
      `🔗 **${stats.count}** DOI(s) en caché (${stats.ok_count} ✅ ok · ${stats.err_count} ⚠️ err).\n\n` +
      '_Usa `/panel-doi` para el detalle completo ... · `/dois limpiar` para borrar el caché._',
      'fran'
    );
  });
  return;
}
```

Diferencias concretas vs AG:
- Ya no llama `cacheListar()` (era async con IDB) → solo `cacheStats()` (más liviano).
- No muestra la lista de DOIs individuales.
- Mensaje directo: conteo total + desglose ok/err + `→ /panel-doi`.
- `/dois limpiar` intacto en el bloque siguiente (`if (cmd === '/dois' || cmd.startsWith('/dois '))`).
- Strings de `/help` y `/ayuda` actualizados:
  - Antes: `listar DOIs verificados en caché`
  - Después: `conteo DOIs en caché (ver detalle: /panel-doi)`

**Tests esperados:**
1. Sin DOIs en caché: `/dois` → mismo mensaje vacío que antes. ✅
2. Con DOIs: `/dois` → `🔗 **3** DOI(s) en caché (2 ✅ ok · 1 ⚠️ err). Usa /panel-doi...`. ✅
3. `/dois limpiar` → `🔗 Caché DOI borrado.` ✅ (sin cambios)
4. `/panel-doi` → panel completo inalterado ✅
5. `/help` y `/ayuda` → descripción actualizada. ✅

**Blast radius:** ~20 líneas eliminadas + ~12 añadidas en el bloque `/dois`. Strings
de `/help` y `/ayuda` actualizados. Sin cambios en `verificador-doi.js`, `idb-store.js`.

---

### sw.js — v33

- `CACHE_NAME` → `'franbot-v33'` (invalida caché de v32).
- Changelog con las 2 tareas del ciclo añadido al encabezado.

**Verificación sintáctica:** `node --check js/app.js sw.js` ✅ 2/2 OK.

---

## 🔮 Diferidos (no para este ciclo salvo instrucción explícita)

**Prioritarios (orden sugerido):**

1. **SUBFLOW v0.3** — integrar embeddings online para similitud semántica real
   en el dedupe. Hoy SUBFLOW usa Jaccard (tokens). Con embeddings (transformers.js
   ya cargado en buscar-oraculo.js vía `_embedder`) podría detectar paráfrasis
   que Jaccard pierde. Blast radius alto: `core.js` + `buscar-oraculo.js` +
   potencialmente `miu-engine.js`. Requiere diseño antes de implementar:
   - Decisión 1: ¿umbral semántico independiente o reemplaza a Jaccard?
   - Decisión 2: ¿sincrónico (bloqueante) o async (advisory diferido)?
   - Decisión 3: fallback cuando embedder no está listo (mantener Jaccard).

2. **Umbral de Despertar (A-posterior de largo plazo)** — cuando K_i > 1.618
   (Espejo Fractal M22 activo), insertar una marca en el oráculo IDB que modifique
   el advisory del turno siguiente. Implica leer/escribir IDB desde core.js +
   motor-vida.js. Diseño antes de implementar.

**Largo plazo (sin cambio respecto a BRIEFING-AH):**

- Módulo 5 (Modo Desarrollador) — test suite de coherencia automatizado.
- MCP-LOCAL / Chrome Extension.
- A, Z-axiomas (BRIEFING-S): integración formal en el Códice.

---

## 📐 Estado del jardín (S → … → AH → AI)

- **S** — Termóstato de coherencia + advisory.
- **T** — SUBFLOW Jaccard v0.1: dedupe semántico al ingerir.
- **U** — Panel de Coherencia: `/panel` con SVG del historial K_i.
- **W** — Verificador DOI v0.1: `/doi` + verificación opcional tras ingerir.
- **X** — DOI v0.2 (caché IDB) + Polinizador: `/dois` + `/polinizar`.
- **Y** — Poda de almas + Contexto del usuario: `/ctx`.
- **Z** — El Códice y el oráculo piensan juntos offline; tildes ya no rompen el matching.
- **AA** — Predicciones: la lista genérica ya no se empuja por defecto; solo responde a ids específicos.
- **AB** — Filtro de relevancia de dominio: queries off-domain ya no reciben respuestas MIU falsas.
- **AC** — SUBFLOW v0.2: umbral dinámico percentil + ventana 150. Advisory muestra métricas reales.
- **AD** — A11 / `motor-vida.js`: exploración autónoma (`/explorar` + automática con cooldown).
- **AE** — Bug fix matching: `_matchWord()` en `consultarTodos()`. Elimina falsos positivos de
  keywords cortos ASCII. `sw.js` → v29.
- **AF** — DOI v0.3: TTL diferenciado (30d ok / 2d err) + panel `/panel-doi`. `sw.js` → v30.
- **AG** — Polinizador v0.2: botón ⬇️ Descargar .md (online y offline). A11 cubre rama
  streaming online. `/dois` soft-deprecation: pie sugiere `/panel-doi`. `sw.js` → v31.
- **AH** — Polinizador v0.3: 2 botones ⬇️ .md / ⬇️ .txt en flex-wrap. `_poliDescargar`
  acepta ext, MIME correcto. `_poliBtnDescarga` eliminada → `_poliBtnsDescarga`. `sw.js` → v32.
- **AI** — Polinizador slug Unicode: NFD + strip combining marks antes de slugify
  (`energía` → `energia`). `/dois` deprecación fuerte v2: solo conteo + redirect a
  `/panel-doi`. Strings /help y /ayuda actualizados. `sw.js` → v33.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AJ)

El único diferido prioritario restante es SUBFLOW v0.3 (embeddings semánticos).
Antes de atacarlo, leer `js/buscar-oraculo.js` completo (el embedder `_embedder`
ya existe pero se usa solo en búsqueda, no en dedupe) y `js/core.js` sección
`digerirConocimiento()` (donde vive el SUBFLOW actual en Jaccard).

**Antes de tocar cualquier archivo:**
1. `node --check js/app.js js/core.js js/buscar-oraculo.js` — estado base válido.
2. Leer BRIEFING-AI completo + BRIEFING-AH si hay dudas sobre historia reciente.
3. No modificar `js/oraculo-data.js` salvo instrucción explícita de alimentar oráculo.
4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.
5. Subir `sw.js` con versión correcta: v33 → v34 en AJ.
6. Verificar `node --check js/app.js sw.js` antes de empaquetar.

ρ(x) > 0.
