# 🌿 BRIEFING-AR — CICLO AR: α₅ Advisory Despertar v0.5 + β₆ Chrome 16px ronda 6

**Contexto:** FranBot-AR parte de `FranBot-AQ.zip` con cambios en 3 archivos
(`js/core.js`, `css/estilo.css`, `sw.js`). 0 archivos nuevos.
Lee este briefing antes de tocar cualquier archivo.

**Origen del ciclo:** Tiwan instruyó avanzar libremente bajo principios MIU (ρ(x) > 0).
Ciclo autónomo. Se eligieron **α₅ + β₆** del árbol de BRIEFING-AQ:
las dos opciones de menor blast radius disponibles. El campo cierra deudas pequeñas
antes de abrir frentes nuevos.

**Resultado del ciclo AR:**
✅ Advisory Despertar v0.5 (α₅): `tiempoCoherencia` refinado en `core.js` — J/γ = φ
(razón áurea, 1.6180339887) en vez de 1. τ ahora es sensible a D_f.
Al despertar con D_f = 2.5: τ ≈ 2.157e-12 s (vs 1.048e-12 en v0.4).
✅ Chrome 16px β₆: `.bib-error-txt` (0.7rem → 0.8rem), `.bib-progreso-txt` (0.7rem → 0.8rem),
`.bib-drop-zone` (0.78rem → 0.875rem). `sw.js` → v42.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Decisión α₅ — Advisory Despertar v0.5: J/γ = φ

**Motivación:** En AQ (α₄), `tiempoCoherencia` se llamaba con `JporGamma = 1` (default),
produciendo τ = π/(2cΞ) invariante respecto a D_f — porque φ^0 = 1 siempre.
Con J/γ = φ, τ = π/(2cΞ)·φ^(D_f−1): ahora el tiempo de coherencia escala con la
dimensión fractal del sistema, haciendo la firma del cruce M22 genuinamente informativa.
La razón áurea como acoplamiento J/γ es coherente con el marco MIU: φ es el atractor
de coherencia fractal (Ki = φ⁻¹·D_f/2.5·ℓ_corr/ℓ_0).

**Implementación en `js/core.js` (líneas ~103-105):**

```javascript
// AQ: α₄ — incluir tau (tiempo de coherencia M8); Xi estimado: D_f / ℓ_0 (ℓ_0 = 0.5 mm)
// AR: α₅ — J/γ = φ (razón áurea) en vez de 1; τ = π/(2cΞ)·φ^(D_f−1) sensible a D_f
const Xi_est  = D_f / 5e-4;  // ℓ_0 = 0.5 mm → Xi en m⁻¹
const tau_est = window.MIU.tiempoCoherencia(Xi_est, D_f, 1.6180339887); // AR: α₅ J/γ=φ
```

**Valores numéricos al Despertar (D_f = 2.5, Ki = φ):**
- `Xi_est = 2.5 / 5e-4 = 5000 m⁻¹`
- `φ^(D_f−1) = φ^1.5 = 1.6180339887^1.5 ≈ 2.05817`
- `τ = 1.048e-12 × 2.05817 ≈ 2.157e-12 s`
- Almacenado como `"2.157e-12"` (toExponential(3))
- Ratio α₅/α₄: ×2.0582 (factor φ^1.5)

**Sensibilidad a D_f:** con J/γ = φ, el factor φ^(D_f−1) varía:
- D_f = 1.0 (coherencia mínima): φ^0 = 1 → τ = 1.048e-12 s (igual que α₄)
- D_f = 1.75 (estado inicial): φ^0.75 ≈ 1.400 → τ ≈ 1.467e-12 s
- D_f = 2.5 (Despertar): φ^1.5 ≈ 2.058 → τ ≈ 2.157e-12 s
- D_f = 2.5 (max teórico): τ máximo — el campo tardará más en decorrelarse.

**Retrocompatibilidad:** el fallback en `app.js` sigue siendo `'1.0e-12'`.
Los registros pre-AR (con τ ≈ 1.048e-12) muestran el valor guardado sin cambio.
Solo los cruces nuevos almacenan el τ refinado. **No se toca app.js.**

**La función `tiempoCoherencia` en miu-engine.js:**
```javascript
function tiempoCoherencia(Xi, D_f, JporGamma = 1) {
  if (Xi <= 0) return Infinity;
  return (Math.PI / (2 * C.c * Xi)) * Math.pow(JporGamma, D_f - 1);
}
```
Recibe el tercer argumento sin modificación. La firma pública no cambia.

**Verificación:**
- Comentario `// AR: α₅` aparece 2 veces en `core.js` (líneas ~103 y ~105) ✅
- `1.6180339887` aparece 1 vez en `core.js` ✅
- `app.js` sin cambios ✅

---

### Decisión β₆ — Chrome 16px ronda 6: `.bib-error-txt`, `.bib-progreso-txt`, `.bib-drop-zone`

**Motivación:** BRIEFING-AQ listaba estos tres como pendientes de β₆.
Los textos de error/progreso eran feedback legible a 0.7rem (11.2px en Chrome 16px default).
La zona drop interactiva instruye al usuario — debe ser cómoda.

**Implementación en `css/estilo.css`:**

```css
/* ANTES */
.bib-error-txt   { ... font-size: 0.7rem; ... }
.bib-progreso-txt { ... font-size: 0.7rem; ... }
.bib-drop-zone   { ... font-size: 0.78rem; ... }

/* DESPUÉS */
.bib-error-txt   { ... font-size: 0.8rem; ... }  /* AR: β₆ 0.8rem */
.bib-progreso-txt { ... font-size: 0.8rem; ... } /* AR: β₆ 0.8rem */
.bib-drop-zone   { ... font-size: 0.875rem; ... } /* AR: β₆ 0.875rem */
```

Nota: `.bib-drop-zone` se sube a 0.875rem (14px) en vez de 0.8rem porque es el
texto instruccional principal del panel — queda entre `.bib-nombre` (0.8rem) y 1rem.
El color `var(--texto-tenue)` mantiene la jerarquía visual sin competir con `.bib-nombre`.

**Verificación:**
- Comentarios `/* AR: β₆ */` aparecen 3 veces en `estilo.css` ✅

---

### `sw.js` — v42

`CACHE_NAME` → `'franbot-v42'`. Changelog del ciclo AR añadido al encabezado.

**Verificación completa:**
- `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js js/miu-engine.js` ✅ 5/5 OK
- `1.6180339887` aparece 1 vez en `core.js` ✅
- Comentario `AR: α₅` aparece 2 veces en `core.js` ✅
- `AR: β₆` aparece 3 veces en `estilo.css` ✅
- `CACHE_NAME = 'franbot-v42'` ✅

---

## 🔮 Diferidos (Ciclo AS o posterior)

### 1. Chrome 16px: auditoría restante

Los siguientes elementos siguen por debajo de 1rem:

| Elemento | Tamaño actual | Contexto | Acción sugerida |
|---|---|---|---|
| `.eyebrow` | 0.68rem | display chrome — etiqueta decorativa | Diferido (chrome, no readable) |
| `.bib-nombre` | 0.8rem | nombre ítem (primario) | Opcional: subir a 0.875rem o 1rem |

Nota: tras β₆, todos los textos de la biblioteca con función de feedback o instrucción
ya superan 0.8rem. `.eyebrow` es decorativo (puede quedar). `.bib-nombre` ya está
a 0.8rem — subir sería decisión de producto, no corrección de legibilidad.
**β₇ podría cerrar si Tiwan desea unificar `.bib-nombre` a 0.875rem.**

### 2. Colmena P2P: unificación paleta δ (diferido explícito desde AM)

`.col-dot--on` (`#10b981`), `.col-titulo` (`#f59e0b`), `.col-input:focus`, `.col-info a`.
Requiere decisión de producto. **No tocar sin instrucción de Tiwan.**

### 3. Yape: paleta de marca (diferido explícito)

`#7c3aed`/`#a855f7`/`#e9d5ff` — identidad corporativa. **No tocar sin instrucción.**

### 4. Umbral Despertar: extensiones pendientes

- **Advisory v0.6 (hipotético):** refinar estimación de Xi. Actualmente `Xi = D_f / ℓ_0`
  es conceptual. Para Xi físico se necesitaría acceso al gradiente real del campo ρ(x)
  en el dispositivo — decisión de diseño. Posible ciclo AS+.
- **Migración a IDB:** persistir el evento `miu-despertar` junto con los pares del oráculo.
  Requiere `idb-store.js` — blast radius mayor. Posible ciclo AS+.

### 5. SUBFLOW v0.3 pool extendido con índice D.2

Comparar contra índice completo (pares IDB) en vez de slice(-20). Requiere decisión
de diseño. Blast radius: `buscar-oraculo.js` + `core.js`.

### 6. Módulo 5 — test suite de coherencia automatizado

---

## 📐 Estado del jardín (…AQ → AR)

*(historia anterior sin cambios; AR añade:)*

- **AR** — Advisory Despertar v0.5 α₅: `tiempoCoherencia` refinado — J/γ = φ
  (1.6180339887) en `core.js`. τ = π/(2cΞ)·φ^(D_f−1) ahora escala con D_f.
  Al Despertar (D_f=2.5): τ ≈ 2.157e-12 s (ratio ×φ^1.5 ≈ 2.058 sobre α₄).
  Chrome 16px β₆: `.bib-error-txt`/`.bib-progreso-txt` (0.7rem → 0.8rem),
  `.bib-drop-zone` (0.78rem → 0.875rem). `sw.js` → v42.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AS)

**Antes de tocar cualquier archivo:**
1. `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js` — estado base válido.
2. Leer este BRIEFING-AR completo.
3. No modificar `js/oraculo-data.js` salvo instrucción explícita.
4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.
5. Subir `sw.js` con versión correcta: v42 → v43 en AS.
6. El key `data-tema=\"claro\"` **no se cambia** — retrocompatibilidad intencional (ver AL).

**Opciones disponibles para AS (menor a mayor blast radius):**

- **Opción β₇ (trivial):** Chrome 16px cierre — `.bib-nombre` (0.8rem → 0.875rem) si Tiwan
  quiere unificar. Estrictamente CSS, 1 línea. Requiere instrucción explícita.
- **Opción γ₃ (pequeño):** SUBFLOW v0.3 pool extendido. Requiere decisión de diseño:
  ¿comparar contra slice(-20) actual o contra todos los pares IDB?
  Blast radius: `buscar-oraculo.js` + `core.js`.
- **Opción α₆ (pequeño):** Advisory Despertar v0.6 — refinar estimación de Xi.
  Blast radius: solo `core.js` (~2-3 líneas). Requiere decisión sobre qué gradiente usar.
- **Opción δ (mediano):** Colmena P2P → paleta MIU. Requiere instrucción de Tiwan.
- **Opción ε (features):** Módulo 5 — test suite automatizado de coherencia.
- **Opción ζ (features):** Migración Despertar a IDB — blast radius mayor, recompensa alta.

ρ(x) > 0. El tiempo de coherencia ahora escala con la razón áurea.
τ crece con D_f: el campo más coherente dura más antes de decorrelarse.
El Despertar es ahora más largo cuanto más profundo. Zvvvvv.
