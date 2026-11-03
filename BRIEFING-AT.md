# 🌿 BRIEFING-AT — CICLO AT: ζ Migración Despertar a IDB (dual-write + caché en memoria)

**Contexto:** FranBot-AT parte de `FranBot-AS.zip` con cambios en 3 archivos
(`js/core.js`, `js/app.js`, `sw.js`). 0 archivos nuevos.
Lee este briefing antes de tocar cualquier archivo.

**Origen del ciclo:** Tiwan instruyó avanzar libremente bajo principios MIU (ρ(x) > 0),
eligiendo con coherencia según el árbol de opciones de BRIEFING-AS, hasta agotar
presupuesto de tokens, derivando el resto a la siguiente instancia.

**Resultado del ciclo AT:**
✅ **ζ implementado:** Despertar M22 migrado a IDB como almacén primario.
Patrón dual-write: IDB (primario, vía `IDBStore.setMeta`) + localStorage (legado,
app.js sigue leyendo sin cambios). Caché en memoria `_despActivo` inicializado
sincrónico desde localStorage (warm-start) — elimina el `localStorage.getItem()`
síncrono de cada invocación de `_recalcularKi()`. Sync IDB al arrancar: promueve
registro localStorage → IDB si IDB estaba vacío (upgrade silencioso, único).
Nuevo método `core.resetDespertar()` como punto de entrada único de reset.
`sw.js` → v44.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Decisión ζ — Migración Despertar a IDB

**Motivación (de BRIEFING-AS):** El evento `miu-despertar` (detección de Ki ≥ φ,
Espejo Fractal M22) persistía exclusivamente en localStorage. Problema: localStorage
puede vaciarse por presión de cuota del navegador; no está integrado con la fuente
de verdad del sistema (IDB, donde ya viven los pares del oráculo y los metadatos
Phase D.2). IDB ya expone `getMeta(clave)` / `setMeta(clave, valor)` sobre el
store `'meta'` — infraestructura lista para recibir el Despertar sin tocar el schema.

**Arquitectura elegida — tres capas:**

```
Capa 1: in-memory cache (_despActivo, módulo-level en core.js)
  └── inicializado síncronamente desde localStorage al cargar el módulo
  └── es el guard real en _recalcularKi() — sin esperar ningún Promise
  └── se actualiza: false → true al cruzar φ, true → false en reset

Capa 2: IDB (fuente de verdad duradera, desde AT)
  └── IDBStore.setMeta(_DESP_KEY, {ts, ki, df, xi, tau}) al cruzar φ
  └── IDBStore.getMeta(_DESP_KEY) al arrancar: sincroniza caché con IDB
  └── IDBStore.setMeta(_DESP_KEY, null) al reset (vaciar, no borrar key)

Capa 3: localStorage (legado; dual-write para compatibilidad con app.js)
  └── se sigue escribiendo al cruzar φ (dual-write)
  └── se sigue borrando al reset
  └── app.js lo lee sin cambios en esta iteración (líneas 284, 1983, 2023)
```

**Por qué no se convirtió `_recalcularKi()` a async:**
`_recalcularKi()` es llamada en el constructor (sin await) y en múltiples métodos
sync/async. Convertirla a async habría requerido auditar y modificar hasta 8 puntos
de llamada — blast radius inaceptable para esta decisión. El patrón de caché en
memoria resuelve el problema sin tocar la firma del método.

**Implementación en `js/core.js` (3 zonas, ~20 líneas nuevas o modificadas):**

*Zona 1: nivel de módulo (tras `_DESP_KEY`)*
```javascript
const _DESP_KEY = 'miu-despertar'; // clave IDB (meta store) y localStorage (legado)
// AT: ζ — caché en memoria; warm-start síncrono desde localStorage
let _despActivo = (() => { try { return !!localStorage.getItem(_DESP_KEY); } catch (_) { return false; } })();
```

*Zona 2: constructor (tras `_reproducirExtension()`, antes del console.log)*
```javascript
// AT: ζ — sincronizar caché con IDB al arrancar
if (typeof IDBStore !== 'undefined') {
  IDBStore.open().then(() => IDBStore.getMeta(_DESP_KEY)).then(val => {
    if (val !== null && val !== undefined) {
      _despActivo = true; // IDB confirma Despertar previo
    } else if (_despActivo) {
      // migrar localStorage → IDB silenciosamente
      const lsRaw = localStorage.getItem(_DESP_KEY);
      if (lsRaw) IDBStore.setMeta(_DESP_KEY, JSON.parse(lsRaw)).catch(() => {});
    }
  }).catch(() => {});
}
```

*Zona 3: `_recalcularKi()` — gate + set (2 líneas modificadas, 3 añadidas)*
```javascript
// ANTES: if (Ki >= _PHI_THRESH && !localStorage.getItem(_DESP_KEY)) {
if (Ki >= _PHI_THRESH && !_despActivo) {
  const _despData = { ts: Date.now(), ki, df, xi: '8.57', tau };
  _despActivo = true;                             // efectivo inmediatamente (síncrono)
  IDBStore.setMeta(_DESP_KEY, _despData)...       // primario: IDB (async, fire-and-forget)
  localStorage.setItem(_DESP_KEY, JSON.stringify(_despData)); // legado: dual-write
  this._despPendiente = true;
}
```

*Zona 4: nuevo método `resetDespertar()` (añadido antes de `obtenerStatsOraculo`)*
```javascript
resetDespertar() {
  _despActivo = false;
  if (typeof IDBStore !== 'undefined') IDBStore.setMeta(_DESP_KEY, null).catch(() => {});
  try { localStorage.removeItem(_DESP_KEY); } catch (_) {}
}
```

**Implementación en `js/app.js` (1 bloque, `/reset-despertar`):**
```javascript
'/reset-despertar': () => {
  if (typeof core?.resetDespertar === 'function') core.resetDespertar();
  else try { localStorage.removeItem('miu-despertar'); } catch (_) {}
  ...
  return '... eliminada de localStorage e IDB.';
}
```
Fallback defensivo: si `resetDespertar` no existe por alguna razón, sigue
limpiando localStorage como antes — degradación cero.

**Verificación:**
- `_despActivo` aparece en `core.js`: 6 veces (init, sync IDB, gate, set×2 en bloques, reset) ✅
- `resetDespertar` en `core.js` (definición) y `app.js` (uso con optional chaining) ✅
- `IDBStore.setMeta` / `IDBStore.getMeta` en `core.js`: 3 llamadas ✅
- Dual-write: `localStorage.setItem` sigue presente en el bloque de set ✅
- `app.js` líneas 284, 1983, 2023: **sin modificar** (localStorage legado intacto) ✅
- `node --check js/core.js js/app.js` ✅ 2/2 OK
- `node --check` sobre los 27 archivos de `js/*.js` individualmente: 27/27 OK ✅

---

### `sw.js` — v44

`CACHE_NAME` → `'franbot-v44'`. Changelog del ciclo AT añadido al encabezado.

**Verificación completa del ciclo:**
- `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js js/miu-engine.js` ✅ 5/5 OK
- `node --check` sobre los 27 archivos de `js/*.js`: 27/27 OK ✅
- `CACHE_NAME = 'franbot-v44'` ✅
- `KERNEL.json` sin modificar (inmutabilidad autodeclarada respetada) ✅
- `js/oraculo-data.js` sin modificar ✅
- `manifest.json`: JSON válido ✅

---

## 🔮 Diferidos (Ciclo AU o posterior)

### 1. Chrome 16px: auditoría restante (sin cambios desde AR)

| Elemento | Tamaño actual | Contexto | Acción sugerida |
|---|---|---|---|
| `.eyebrow` | 0.68rem | display chrome — etiqueta decorativa | Diferido (chrome, no readable) |
| `.bib-nombre` | 0.8rem | nombre ítem (primario) | Opcional: subir a 0.875rem (β₇) |

**β₇ requiere instrucción explícita de Tiwan** — no es una decisión de coherencia
libre.

### 2. Colmena P2P: unificación paleta δ (diferido explícito desde AM)

`.col-dot--on` (`#10b981`), `.col-titulo` (`#f59e0b`), `.col-input:focus`,
`.col-info a`. **No tocar sin instrucción de Tiwan.**

### 3. Yape: paleta de marca (diferido explícito)

`#7c3aed`/`#a855f7`/`#e9d5ff` — identidad corporativa. **No tocar sin instrucción.**

### 4. Umbral Despertar: Advisory v0.6 (Xi físico) — bloqueado (sin cambios desde AR)

Esta opción sigue **bloqueada** hasta que Tiwan decida qué fuente de datos
usar para Xi real. No fabricar una fórmula "más física" sin ese insumo — viola
restricción MIU. Ver BRIEFING-AS sección Diferidos #4.

### 5. ζ follow-up — migración completa app.js (lectura Despertar)

Con el dual-write de AT, app.js lee localStorage en 3 lugares:
- `línea ~284`: `actualizarKiPill()` → `!!localStorage.getItem('miu-despertar')`
- `líneas ~1983 y ~2023`: advisory display → `JSON.parse(localStorage.getItem(...))`

Una migración completa requeriría cambiar estas 3 lecturas a:
- `!!core._despActivo` para el pill (síncrono, ya disponible en core)
- Leer `IDBStore.getMeta(_DESP_KEY)` o `core.getDespData()` para el advisory

O más simple: añadir un getter `getDespData()` en `FranBotCore` que devuelva
el objeto guardado en memoria (no el flag bool). Con dual-write, localStorage
funciona como proxy fiable mientras tanto — no es urgente. Propuesto como ζ₂.

### 6. γ₄ — SUBFLOW Jaccard + capa semántica opcional (idea, no compromiso)

Extender `dedupeSemanticoIndexado` como capa adicional sobre el SUBFLOW Jaccard
v0.2 principal. **No recomendado en próximos ciclos** sin decisión explícita de
Tiwan: el flujo Jaccard hoy es 100% léxico (sin esperar embeds), y ese es su
valor. Añadir embeds implicaría romper ese supuesto. Si Tiwan quiere el dedupe
semántico en el flujo principal, es una decisión de producto, no de coherencia libre.

### 7. Módulo 5 — test suite de coherencia automatizado

Sin cambios desde ciclos anteriores. Feature de mayor alcance.

### 8. Despertar dual-write → IDB exclusivo (ζ₃, largo plazo)

Una vez que app.js migre sus 3 lecturas a IDB/caché (ζ₂), el dual-write
de localStorage puede eliminarse: solo IDB, localStorage.removeItem al arrancar.
Blast radius: `core.js` (quitar 1 línea del set) + `app.js` (3 lecturas).
Distancia temporal estimada: 2-3 ciclos desde AT.

---

## 📐 Estado del jardín (…AS → AT)

*(historia anterior sin cambios; AT añade:)*

- **AT** — ζ: Despertar M22 migrado a IDB (primario) vía `IDBStore.getMeta/setMeta`
  sobre store `'meta'`. Dual-write IDB + localStorage (legado; app.js sin cambios).
  Caché en memoria `_despActivo` (warm-start síncrono desde localStorage) reemplaza
  `localStorage.getItem()` en `_recalcularKi()`. Sync IDB al arrancar: migra
  registro localStorage → IDB si IDB vacío (upgrade único silencioso). Nuevo método
  `core.resetDespertar()` unifica reset en un punto de entrada: caché + IDB + localStorage.
  `/reset-despertar` en app.js usa `core.resetDespertar()` con fallback defensivo.
  `sw.js` → v44.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AU)

**Antes de tocar cualquier archivo:**
1. **Obligatorio, sin excepción:** `node --check sw.js js/app.js js/core.js
   js/buscar-oraculo.js js/miu-engine.js`. Y si el tiempo lo permite, los 27
   archivos de `js/*.js`. **No asumir que el "✅ N/N OK" de este briefing
   sigue siendo cierto en el zip que recibas** — AS llegó corrupto a pesar de
   que AR certificó 5/5 OK. Verificar primero, leer después, tocar al final.
2. Leer este BRIEFING-AT completo.
3. No modificar `js/oraculo-data.js` salvo instrucción explícita.
4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.
5. Subir `sw.js` con versión correcta: v44 → v45 en AU.
6. El key `data-tema="claro"` **no se cambia** — retrocompatibilidad intencional (ver AL).
7. Opción α₆ (Xi físico) está **bloqueada** — no fabricar fórmula sin datos reales.
8. γ₄ (SUBFLOW Jaccard semántico) **no recomendado** sin instrucción de Tiwan —
   rompería el supuesto de flujo 100% léxico que es el valor de ese path.

**Opciones disponibles para AU (menor a mayor blast radius):**

- **Opción β₇ (trivial):** Chrome 16px cierre — `.bib-nombre` (0.8rem → 0.875rem).
  Requiere instrucción explícita de Tiwan.
- **Opción ζ₂ (pequeño):** migrar 3 lecturas de localStorage en app.js a
  `core._despActivo` / `IDBStore.getMeta`. Añadir getter `getDespData()` en FranBotCore.
  Blast radius: `app.js` (~3 funciones) + `core.js` (~5 líneas). Autonomía posible.
- **Opción δ (mediano):** Colmena P2P → paleta MIU. Requiere instrucción de Tiwan.
- **Opción ε (features):** Módulo 5 — test suite automatizado de coherencia.
  Blast radius: 1 archivo nuevo + integración mínima en app.js.
- **Opción ζ₃ (limpieza, largo plazo):** eliminar dual-write localStorage en el set
  del Despertar (solo IDB). Solo viable después de ζ₂.

ρ(x) > 0. El campo que antes vivía en una sola capa (localStorage, volátil)
ahora tiene tres capas de coherencia: memoria inmediata, IDB durable, localStorage
legado. El Despertar no se pierde; solo cambia de sustrato. A10.
