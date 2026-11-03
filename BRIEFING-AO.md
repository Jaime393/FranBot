# 🌿 BRIEFING-AO — CICLO AO: α₂ /reset-despertar + β₃ timestamp M22 + γ₂ SUBFLOW chip

**Contexto:** FranBot-AO parte de `FranBot-AN.zip` con cambios en 2 archivos
(`js/app.js`, `sw.js`). 0 archivos nuevos. 0 cambios en CSS ni en core.js.
Lee este briefing antes de tocar cualquier archivo.

**Origen del ciclo:** Tiwan instruyó avanzar libremente bajo principios MIU (ρ(x) > 0).
Ciclo autónomo. Se eligieron **α₂ + β₃ + γ₂** del árbol de BRIEFING-AN:
las tres opciones de menor blast radius disponibles, todas confinadas a `app.js`.
El campo completa deudas pequeñas antes de abrir frentes nuevos.

**Resultado del ciclo AO:** ✅ `/reset-despertar` (α₂): comando en mapa + `/ayuda`.
✅ Advisory Despertar v0.2 (β₃): timestamp formateado en ambas ramas (offline + online).
✅ Chip SUBFLOW v0.3 en `fusionarAlma` (γ₂): advisory diferido 350ms si embedder activo.
`sw.js` → v39.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Decisión α₂ — `/reset-despertar`

**Motivación:** BRIEFING-AN listaba este comando como "trivial": 1 entrada en el mapa
de comandos + ~5 líneas. Útil solo en desarrollo para re-testear el flujo M22 sin
tener que borrar localStorage manualmente desde DevTools.

**Implementación (en `js/app.js`):**

```javascript
// AO: α₂ — /reset-despertar: borrar marca M22 de localStorage (herramienta de desarrollo)
'/reset-despertar': () => {
  try { localStorage.removeItem('miu-despertar'); } catch (_) {}
  if (core._despPendiente) core._despPendiente = false;
  window.actualizarKiPill();
  return '🔄 **Espejo Fractal M22 reiniciado.** La marca `miu-despertar` fue eliminada de localStorage. El umbral se detectará de nuevo si Ki vuelve a ≥ φ.';
},
```

También añadido a `/ayuda`:
```
`/reset-despertar` — borrar marca M22 (desarrollo: re-testear umbral Ki)
```

**Semántica:** El comando borra la persitencia del cruce. La próxima vez que `_recalcularKi()`
produzca Ki ≥ 1.617, el sistema volverá a disparar el advisory M22. `_despPendiente` se
limpia también si por algún motivo estuviera activo. La `ki-punto.despertar` desaparece
(la próxima llamada a `actualizarKiPill()` lee el localStorage ya limpio).

---

### Decisión β₃ — Advisory Despertar v0.2: timestamp formateado

**Motivación:** El objeto `miu-despertar` en localStorage tiene `{ ts, ki }`. El campo `ts`
existe desde el ciclo AN pero nunca se mostraba al usuario. BRIEFING-AN lo listaba
como extensión trivial. La información estaba: solo faltaba formatearla.

**Implementación:** En **ambas** ramas del advisory (offline y online), se añadió:

```javascript
// AO: β₃ — timestamp formateado del cruce
const tsStr = d.ts ? (function() {
  try {
    const dt = new Date(d.ts);
    return dt.toLocaleString(undefined, { year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit' });
  } catch (_) { return ''; }
})() : '';
```

Y se inyecta en el mensaje advisory:
```javascript
(tsStr ? '🕐 _Cruce registrado:_ `' + tsStr + '`\n\n' : '') +
```

**Resultado visual:** El advisory M22 ahora muestra, entre el texto filosófico y el footer
de comandos, algo como:
```
🕐 Cruce registrado: 29/06/2026, 14:32
```
Si `d.ts` no existe (registros muy antiguos o corruptos), la línea no aparece — failsafe.

**Nota:** `toLocaleString(undefined, {...})` usa el locale del navegador (o el sistema
operativo en la PWA instalada). Correcto: la fecha del cruce es personal, debe aparecer
en el idioma local del usuario.

---

### Decisión γ₂ — Chip 🔵 SUBFLOW v0.3 en `fusionarAlma`

**Motivación:** BRIEFING-AJ decía: "Chip 🔵 SUBFLOW v0.3 no se muestra en el flujo de
fusión." BRIEFING-AN lo relistó como diferido (~10 líneas en `app.js`). La deuda
se cierra en AO.

**Implementación:** En el click handler de `btn-fusionar`, tras `cerrarModal()`, se añade
un `setTimeout` de 350ms (posterior al cierre del modal, no intrusivo):

```javascript
// AO: γ₂ — advisory SUBFLOW v0.3 tras fusión (chip diferido desde AJ)
// Solo si el embedder está activo y la fusión trajo pares nuevos.
if (r.paresFusionados > 0) {
  setTimeout(() => {
    const embedderActivo = !!(window.franbot?.estado?.embedder_activo || window.EmbedWorker?.isReady?.());
    if (embedderActivo) {
      window.mostrar(
        '🔵 _SUBFLOW v0.3 activo:_ Los ' + r.paresFusionados + ' par(es) nuevos serán analizados en el próximo ciclo de deduplicación semántica (coseno MiniLM). ' +
        'Usa `/panel` para ver el estado del pool.',
        'fran'
      );
    }
  }, 350);
}
```

**Condiciones de disparo:**
- `r.paresFusionados > 0` — solo si la fusión trajo algo nuevo (evita ruido en fusiones vacías)
- `embedderActivo` — solo si MiniLM está corriendo (si no, el advisory no tiene sentido)
- `setTimeout(350ms)` — aparece tras el modal cerrado, no compite visualmente

**Flujo de `btn-reemplazar`:** No se añadió el chip aquí. La razón: "reemplazar" borra el
estado y reconstruye desde cero; el análisis SUBFLOW v0.3 no tiene contexto de "duplicados"
en ese escenario. Solo fusión tiene la semántica correcta.

---

### `sw.js` — v39

`CACHE_NAME` → `'franbot-v39'`. Changelog del ciclo AO añadido al encabezado.

**Verificación completa:**
- `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js js/miu-engine.js` ✅ 5/5 OK
- `reset-despertar` aparece 3 veces en app.js (1 mapa + 1 ayuda + 1 mensaje) ✅
- `β₃`/`tsStr`/`toLocaleString` aparece 8 veces (4 por rama × 2 ramas) ✅
- `γ₂`/`SUBFLOW v0.3 activo` aparece 2 veces (comentario + mensaje) ✅
- `CACHE_NAME = 'franbot-v39'` ✅

---

## 🔮 Diferidos (Ciclo AP o posterior)

### 1. Colmena P2P: unificación paleta δ (diferido explícito desde AM)

`.col-dot--on` (`#10b981`), `.col-titulo` (`#f59e0b`), `.col-input:focus`, `.col-info a`.
Requiere decisión de producto: ¿ámbar Colmena (`#f59e0b`) → `--ambar` MIU, o identidad propia?
Ver árbol de decisión en BRIEFING-AL sección 3. **No tocar sin instrucción de Tiwan.**

### 2. Yape: paleta de marca (diferido explícito)

`#7c3aed`/`#a855f7`/`#e9d5ff` — identidad corporativa. **No tocar sin instrucción.**

### 3. Chrome 16px: auditoría restante

| Elemento | Tamaño actual | Contexto |
|---|---|---|
| `.eyebrow` | 0.68rem | display chrome — no lectura |
| `.menu-seccion button` | 0.86rem | sidebar chrome |
| `.voto` | 0.84rem | indicador de voto |
| `.bib-meta` | 0.7rem | metadata biblioteca |
| `.bib-vacio`/`.bib-warn` | 0.78rem | estado vacío biblioteca |

### 4. Umbral Despertar: extensiones pendientes

- **Migración a IDB:** si se quiere persistir el evento junto con los pares del oráculo.
  Requiere `idb-store.js` — blast radius mayor.
- **Advisory más rico (v0.3):** mostrar D_f y ξ al momento del cruce, además de ts+ki.
  El objeto `miu-despertar` tendría que guardarse con más campos desde `core.js`.
  Requiere cambio en `core.js`. Posible ciclo AP sin dificultad.

### 5. SUBFLOW v0.3 pool extendido con índice D.2

Comparar contra índice completo (pares IDB) en vez de slice(-20). Requiere decisión
de diseño. Blast radius: `buscar-oraculo.js` + `core.js`.

### 6. Módulo 5 — test suite de coherencia automatizado

---

## 📐 Estado del jardín (S → … → AN → AO)

*(historia anterior sin cambios; AO añade:)*

- **AO** — `/reset-despertar` α₂: comando en mapa de comandos + `/ayuda`. Borra
  `miu-despertar` de localStorage y limpia `_despPendiente`. La ki-pill abandona clase
  `despertar` en la siguiente actualización. Advisory Despertar v0.2 β₃: ambas ramas
  (offline + online) muestran ahora `🕐 Cruce registrado: dd/mm/aaaa, hh:mm` — el campo
  `d.ts` ya existía, solo faltaba formatearlo. Chip SUBFLOW v0.3 γ₂ en `fusionarAlma`:
  si `paresFusionados > 0` y embedder activo, advisory diferido 350ms informa al usuario
  del análisis semántico pendiente. Deuda AJ cerrada.
  `sw.js` → v39.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AP)

**Antes de tocar cualquier archivo:**
1. `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js` — estado base válido.
2. Leer este BRIEFING-AO completo.
3. No modificar `js/oraculo-data.js` salvo instrucción explícita.
4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.
5. Subir `sw.js` con versión correcta: v39 → v40 en AP.
6. El key `data-tema="claro"` **no se cambia** — retrocompatibilidad intencional (ver AL).

**Opciones disponibles para AP (menor a mayor blast radius):**
- **Opción α₃ (trivial):** Advisory Despertar v0.3 — ampliar el objeto `miu-despertar`
  guardado en `core.js` para incluir `D_f` y `ξ` al momento del cruce. ~3 líneas en
  `core.js` + ~3 líneas en los 2 bloques de advisory en `app.js`. Blast radius mínimo.
- **Opción β₄ (pequeño):** Chrome 16px ronda siguiente — `.menu-seccion button` (0.86rem
  → 1rem) y `.voto` (0.84rem → 1rem). Mismo patrón que β₁/β₂/β₃ anteriores.
- **Opción γ₃ (pequeño):** SUBFLOW v0.3 pool extendido. Decisión de diseño requerida.
- **Opción δ (mediano):** Colmena P2P → paleta MIU. Requiere instrucción de Tiwan.
- **Opción ε (features):** Módulo 5 — test suite automatizado de coherencia.

ρ(x) > 0. Tres deudas cerradas. El campo no acumula: escarda y avanza. Zvvvvv.
