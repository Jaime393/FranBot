# 🌿 BRIEFING-AV — CICLO AV: ζ₃ Eliminar dual-write localStorage del Despertar

**Contexto:** FranBot-AV parte de `FranBot-AU.zip` con cambios en 2 archivos
(`js/core.js`, `sw.js`). 0 archivos nuevos.
Lee este briefing antes de tocar cualquier archivo.

**Origen del ciclo:** Continuación autónoma. La condición de autonomía de ζ₃ fue
verificada en Ciclo AV: `grep -rn "miu-despertar" js/` muestra referencias en
`app.js` exclusivamente como fallbacks defensivos (optional chaining con primary
`core.despActivo`/`core.getDespData()`), y como `removeItem` (cleanup). Ninguna
lectura primaria de localStorage en módulos externos a `core.js`. ✅ Condición cumplida.

**Resultado del ciclo AV:**
✅ **ζ₃ implementado:** `localStorage.setItem(_DESP_KEY, ...)` eliminado de
`core._recalcularKi()`. IDB es ahora la ÚNICA escritura persistente del Despertar.
Warm-starts `_despActivo`/`_despDatos` simplificados a `false`/`null`. IDB sync
reescrito de 3-ramas a 2-ramas con migración legado corregida. `sw.js` → v46.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Decisión ζ₃ — Eliminar dual-write localStorage en el set del Despertar

**Motivación (de BRIEFING-AU):** Con ζ₂, `app.js` ya no lee `localStorage` para el
Despertar en sus caminos primarios (usa `core.despActivo` y `core.getDespData()`).
El único consumidor de `localStorage.setItem(_DESP_KEY, ...)` eran los warm-starts
síncronos de `core.js` en sesiones posteriores. Eliminado el setItem, los warm-starts
quedan vacíos; simplificarlos a `false`/`null` elimina la dependencia de lectura
también.

**Precondición verificada:**
`grep -rn "miu-despertar" js/` confirmó que las referencias en `app.js` son:
- Línea 287: fallback defensivo con `typeof core?.despActivo !== 'undefined'`
- Línea 1558: `localStorage.removeItem(...)` — cleanup del comando `/reseteardespertar`
- Línea 1561: texto de respuesta al usuario (literal, no lectura)
- Líneas 1987, 2028: fallback defensivo con `typeof core?.getDespData === 'function'`

Ninguna es lectura primaria de localStorage. ✅

**Cambios en `js/core.js` (4 zonas):**

*Zona 1: comentario `_DESP_KEY` — actualizado*
```javascript
const _DESP_KEY = 'miu-despertar';  // clave IDB (meta store) y localStorage (legado, solo-lectura desde ζ₃); valor: {ts, ki, df, xi, tau}
```

*Zona 2: warm-starts simplificados*
```javascript
// AV: ζ₃ — warm-starts simplificados a false/null. localStorage ya no se escribe (setItem eliminado);
// el IDB sync en el constructor es la única fuente del estado Despertar al arrancar.
let _despActivo = false;
// AV: ζ₃ — ídem para el objeto de datos {ts, ki, df, xi, tau}.
let _despDatos  = null;
```

*Zona 3: IDB sync en constructor — 3-ramas → 2-ramas*

El problema antes de AV: con warm-starts siempre `false`, la rama `else if (!_despActivo)`
del código original se ejecutaba siempre, saltando la migración de localStorage a IDB.
La reescritura colapsa las 3 ramas en 2 con migración correcta:
```javascript
// AT/AV: ζ — sincronizar caché con IDB al arrancar (IDB es la fuente de verdad desde AT).
// AV: ζ₃ — warm-starts son false/null; este bloque es la ÚNICA fuente del estado inicial.
//   Rama 1: IDB tiene datos → poblar caché en memoria.
//   Rama 2: IDB vacío → intentar migrar desde localStorage (legado pre-ζ₃, upgrade único).
if (typeof IDBStore !== 'undefined') {
  IDBStore.open().then(() => IDBStore.getMeta(_DESP_KEY)).then(val => {
    if (val !== null && val !== undefined) {
      _despActivo = true; // IDB tiene la fuente de verdad
      _despDatos  = val;
    } else {
      // AV: ζ₃ — IDB vacío: intentar migrar desde localStorage (upgrade único, legado pre-ζ₃).
      try {
        const lsRaw = localStorage.getItem(_DESP_KEY);
        if (lsRaw) {
          const lsVal = JSON.parse(lsRaw);
          _despActivo = true;
          _despDatos  = lsVal;
          IDBStore.setMeta(_DESP_KEY, lsVal).catch(() => {}); // promover a IDB
        }
      } catch (_) {}
    }
  }).catch(() => {}); // IDB no disponible: caché queda false/null; fallback defensivo en app.js actúa
}
```

*Zona 4: `_recalcularKi()` — setItem eliminado*
```javascript
// ANTES (AT: ζ — dual-write legado):
try { localStorage.setItem(_DESP_KEY, JSON.stringify(_despData)); } catch (_) {}
// ELIMINADO en AV: ζ₃
```
La línea siguiente permanece:
```javascript
if (typeof IDBStore !== 'undefined') IDBStore.setMeta(_DESP_KEY, _despData).catch(() => {}); // AT: ζ — escritura primaria IDB (única fuente desde ζ₃)
```

**Cambios en `sw.js`:**
- Cabecera: `FranBot v45` → `FranBot v46`
- Changelog v46 añadido
- `CACHE_NAME = 'franbot-v46'` ✅

**Arquitectura post-ζ₃ — cuatro capas (actualizada):**

```
Capa 0: constantes módulo (core.js, nivel raíz)
  _DESP_KEY = 'miu-despertar'

Capa 1: in-memory bool (_despActivo, módulo-level en core.js)
  └── ANTES: warm-start síncrono desde localStorage
  └── AHORA: inicia en false; IDB sync lo puebla en constructor (async)
  └── _recalcularKi() lo pone true si Ki ≥ φ (síncrono)
  └── getter: FranBotCore.despActivo → bool

Capa 2: in-memory objeto (_despDatos, módulo-level en core.js)
  └── ANTES: warm-start síncrono desde localStorage
  └── AHORA: inicia en null; IDB sync lo puebla en constructor (async)
  └── método: FranBotCore.getDespData() → copia defensiva {..._despDatos} | null

Capa 3: IDB store 'meta' (ÚNICA fuente de verdad y escritura)
  └── setMeta(key, obj) al cruzar φ (primario) — única escritura
  └── setMeta(key, null) al reset
  └── getMeta(key) al arrancar → puebla _despActivo + _despDatos (AV)
  └── migración: si IDB vacío pero localStorage tiene datos (usuarios pre-ζ₃),
      setMeta(key, lsVal) al arrancar (upgrade único)

Capa 4: localStorage (legado; SOLO LECTURA desde ζ₃)
  └── YA NO SE ESCRIBE (setItem eliminado en ζ₃)
  └── Sigue siendo leído SOLO en 2 contextos:
      a) IDB sync — migración legado pre-ζ₃ (Rama 2, único)
      b) Fallbacks defensivos de app.js (secondary paths, always-inactive en sesiones nuevas)
  └── removeItem al reset (cleanup del legado)
```

**Comportamiento de arranque post-ζ₃:**
- Sesión nueva (sin IDB ni localStorage): `_despActivo=false, _despDatos=null` → correcto.
- Usuario con IDB (normal post-AT): IDB sync puebla caché. Breve ventana false/null
  antes del async → Ki pill sin ✦ hasta primer evento que llame actualizarKiPill().
  En la práctica imperceptible: actualizarKiPill() se llama en múltiples eventos de
  interacción (Ki update, recalc, reset, advisory, etc.).
- Usuario legado (localStorage pero no IDB, pre-AT): Rama 2 del IDB sync migra los
  datos a IDB y puebla _despActivo/_despDatos. Upgrade único, posterior → normal.
- IDB no disponible: caché queda false/null; fallback defensivo de app.js (localStorage)
  devuelve false/{} (localStorage ya sin datos). Degradación controlada.

**Verificación del ciclo AV:**
- `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js js/miu-engine.js` ✅ 5/5 OK
- `node --check` sobre los 27 archivos de `js/*.js`: 27/27 OK ✅
- `CACHE_NAME = 'franbot-v46'` ✅
- `localStorage.setItem.*DESP` en `js/core.js`: 0 ocurrencias ✅
- `_despActivo = false` en línea 12 (módulo level) ✅
- `_despDatos  = null` en línea 14 (módulo level) ✅
- IDB sync: 2-ramas, Rama 2 puebla `_despActivo` y `_despDatos` desde lsRaw ✅
- Fallbacks defensivos `app.js` preservados ✅
- `js/oraculo-data.js` sin modificar ✅
- `KERNEL.json` sin modificar ✅

---

## 🔮 Diferidos (Ciclo AW o posterior)

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

### 4. Umbral Despertar: Advisory v0.6 (Xi físico) — bloqueado

Esta opción sigue **bloqueada** hasta que Tiwan decida qué fuente de datos usar para
Xi real. No fabricar una fórmula "más física" sin ese insumo — viola restricción MIU.

### 5. ζ₄ — Cleanup definitivo de localStorage en app.js (muy largo plazo)

Con ζ₃ completado, los fallbacks defensivos en `app.js` son código muerto en sesiones
normales (localStorage ya sin datos desde ζ₃). Podrían eliminarse:
- Línea 287: fallback `localStorage.getItem('miu-despertar')` en `actualizarKiPill()`
- Líneas 1987, 2028: fallback en advisory M22

Condición: confirmar que la migración legado ha operado suficiente tiempo en producción
y no hay usuarios con localStorage sin IDB. **No hay urgencia — son código inofensivo.**
**Requiere instrucción explícita de Tiwan.**

### 6. γ₄ — SUBFLOW Jaccard + capa semántica opcional

**No recomendado** sin decisión explícita de Tiwan.

### 7. Módulo 5 — test suite de coherencia automatizado

Sin cambios desde ciclos anteriores. Feature de mayor alcance.

### 8. Enriquecimiento oráculo: categorías delgadas

Categorías `20_cuerpo_movimiento` y `21_miu_criticas` siguen siendo las más delgadas.
Enriquecimiento requiere instrucción explícita de Tiwan.

---

## 📐 Estado del jardín (…AU → AV)

*(historia anterior sin cambios; AV añade:)*

- **AV** — ζ₃: `localStorage.setItem(_DESP_KEY, ...)` eliminado de `core._recalcularKi()`.
  Warm-starts `_despActivo`/`_despDatos` simplificados a `false`/`null`. IDB sync
  reescrito 3-ramas→2-ramas: Rama 2 migra localStorage legado a IDB y puebla caché
  (upgrade único; corrige bug de migración que la simplificación de warm-starts habría
  introducido). localStorage ya no se escribe para el Despertar. Fallbacks defensivos
  en app.js preservados (inofensivos, código legado). `sw.js` → v46.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AW)

**Antes de tocar cualquier archivo:**
1. **Obligatorio, sin excepción:** `node --check sw.js js/app.js js/core.js
   js/buscar-oraculo.js js/miu-engine.js`. Y si el tiempo lo permite, los 27
   archivos de `js/*.js`. **No asumir que el "✅ N/N OK" de este briefing
   sigue siendo cierto en el zip que recibas.**
2. Leer este BRIEFING-AV completo.
3. No modificar `js/oraculo-data.js` salvo instrucción explícita.
4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.
5. Subir `sw.js` con versión correcta: v46 → v47 en AW.
6. El key `data-tema="claro"` **no se cambia** — retrocompatibilidad intencional (ver AL).
7. Opción α₆ (Xi físico) está **bloqueada** — no fabricar fórmula sin datos reales.
8. γ₄ (SUBFLOW Jaccard semántico) **no recomendado** sin instrucción de Tiwan.

**Opciones disponibles para AW (menor a mayor blast radius):**

- **Opción β₇ (trivial — requiere instrucción de Tiwan):** Chrome 16px cierre —
  `.bib-nombre` (0.8rem → 0.875rem). **Requiere instrucción explícita.**

- **Opción δ (mediano — requiere instrucción de Tiwan):** Colmena P2P → paleta MIU.
  **Requiere instrucción de Tiwan.**

- **Opción ε (features — autonomía posible):** Módulo 5 — test suite automatizado de
  coherencia. Blast radius: 1 archivo nuevo + integración mínima en app.js. No requiere
  instrucción de Tiwan si el diseño sigue los principios MIU.

- **Opción ζ₄ (limpieza — requiere instrucción de Tiwan):** Eliminar fallbacks
  defensivos de localStorage en app.js (código muerto post-ζ₃). Blast radius: app.js
  (~3 puntos). Requiere confirmación explícita de Tiwan.

ρ(x) > 0. El Despertar ya no escribe en localStorage. La información persiste —
solo cambia de sustrato: de localStorage frágil a IDB durable. A10.
