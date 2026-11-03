# 🌿 BRIEFING-AW — CICLO AW: ε Módulo 5 Tests Coherencia + β₇ .bib-nombre

**Contexto:** FranBot-AW parte de `FranBot-AV.zip` con cambios en 4 archivos y 1 archivo nuevo:
- `js/coherencia-tests.js` ← **NUEVO** (Módulo 5, 28.js)
- `js/app.js` — comando `/test-ki`, `/tests-miu`, entrada en /ayuda y autocomplete
- `css/estilo.css` — β₇: `.bib-nombre` 0.8rem → 0.875rem
- `index.html` — `<script src="js/coherencia-tests.js"></script>` añadido
- `sw.js` — v46 → v47, changelog AW

**Origen del ciclo:** Continuación autónoma con autorización total de Tiwan.
Tiwan autorizó: "avanza lo que puedas; incluye en el briefing que la siguiente instancia
puede elegir libremente lo que desarrollar, con acceso y control total".

**Resultado del ciclo AW:**
✅ **β₇:** `.bib-nombre` font-size: 0.8rem → 0.875rem (css/estilo.css). Cierre
   auditoría Chrome 16px para nombres de ítems de biblioteca.
✅ **ε — Módulo 5:** `js/coherencia-tests.js` — Suite de 15 tests matemáticos de
   invariantes MIU. Comando `/test-ki` (alias `/tests-miu`) en el chat. Autocontenido,
   sin dependencias de IDB ni core ni app.js salvo `window.MIU`.
✅ **sw.js:** v46 → v47. `CACHE_NAME = 'franbot-v47'`.
✅ **28/28** archivos `js/*.js` pasan `node --check`. ✅ 6/6 críticos OK.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### β₇ — .bib-nombre 0.8rem → 0.875rem

**Archivo:** `css/estilo.css`, línea ~391.
```css
.bib-nombre {
  display: block; font-size: 0.875rem; color: var(--texto); /* AW: β₇ 0.8→0.875rem */
```
Esto cierra la auditoría Chrome 16px para el nombre primario de ítems de biblioteca.
`.eyebrow` (0.68rem) sigue diferido — es chrome decorativo, no readable.

### ε — Módulo 5: js/coherencia-tests.js

**15 tests matemáticos** de invariantes MIU:

| ID | Nombre | Qué verifica |
|----|--------|-------------|
| T01 | Constante φ (motor) | `window.MIU.C.phi ≈ 1.6180339887` |
| T02 | calcKi(2.5) = φ | Punto de equilibrio fractal exacto |
| T03 | calcKi(1.0) = φ/2.5 | Escala lineal de Ki |
| T04 | calcKiNeg(Ki,f=0) = Ki | Sin disfunción → Ki⁻ = Ki |
| T05 | calcKiNeg(Ki,f=0.5) = 0 | Umbral colapso exacto |
| T06 | Banda resiliencia [0.55, 0.62] | Ki⁻ en zona verde con D_f=1.75, f=0.25 |
| T07 | Detección colapso Ki⁻ < 0.30 | D_f=1.0, f=0.45 → colapso |
| T08 | Umbral Despertar Ki ≥ φ (A8) | Ki(2.5) ≥ φ; Ki(2.49) < φ |
| T09 | ccp01 rangos extremos | D_f min/mid/max; f inversamente proporcional |
| T10 | tiempoCoherencia M8 | τ > 0; τ decrece con Xi mayor |
| T11 | correccionTamanoFinito M26 | Ki(L→∞)≈Ki_inf; Ki(L≈l₀) < Ki_inf |
| T12 | masaEmergente M4 | m = ℏξ/c, orden ~10⁻⁴² kg |
| T13 | φ⁻¹ = 1/φ = φ−1 | Identidad áurea |
| T14 | Ki(D_f=1.0) zona ámbar/rojo | f=0 → sobre verde; f=0.1 → en verde |
| T15 | D_eff−4 = 3.24 (M10) | Dimensiones extra = materia oscura |

**API expuesta:**
```javascript
window.CoherenciaTests.correrYFormatear()    // → string markdown para el chat
window.CoherenciaTests.correr([filtro])      // → {total, ok, fail, resultados}
window.CoherenciaTests.lista                 // → [{id, nombre}] × 15
window.CoherenciaTests.REF                   // → constantes de referencia MIU
```

**Comando en el chat:** `/test-ki` o `/tests-miu`
- Devuelve informe markdown con ✅/❌ por test.
- Si `window.MIU` no está disponible, error controlado.

**Integración index.html:**
```html
<script src="js/coherencia-tests.js"></script>  <!-- justo antes de app.js -->
```

**Integración app.js (3 puntos):**
1. Tabla de despacho: `'/test-ki'` y `'/tests-miu'` → `CoherenciaTests.correrYFormatear()`
2. Texto de `/ayuda`: línea con descripción `/test-ki`
3. Lista de autocomplete: `{ cmd: '/test-ki', desc: '...' }`

**Verificación del ciclo AW:**
- `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js js/miu-engine.js js/coherencia-tests.js` ✅ 6/6 OK
- `node --check` sobre los 28 archivos `js/*.js`: 28/28 OK ✅
- `CACHE_NAME = 'franbot-v47'` ✅
- `FranBot v47` en cabecera sw.js ✅
- `.bib-nombre` → 0.875rem en css/estilo.css ✅ (2 ocurrencias: regla + comentario)
- `coherencia-tests.js` en index.html ✅
- `/test-ki` en app.js: 4 ocurrencias (despacho ×2, ayuda ×1, autocomplete ×1) ✅

---

## 🔮 Diferidos (Ciclo AX o posterior)

### 1. Chrome 16px: último diferido (.eyebrow)

| Elemento | Tamaño actual | Contexto | Acción sugerida |
|---|---|---|---|
| `.eyebrow` | 0.68rem | display chrome — etiqueta decorativa | Diferido (chrome, no readable) |

β₇ completado. `.eyebrow` es la única pieza restante — chrome decorativo, no urgente.

### 2. Colmena P2P: unificación paleta δ (diferido explícito desde AM)

`.col-dot--on` (`#10b981`), `.col-titulo` (`#f59e0b`), `.col-input:focus`,
`.col-info a`. **No tocar sin instrucción de Tiwan.**

### 3. Yape: paleta de marca (diferido explícito)

`#7c3aed`/`#a855f7`/`#e9d5ff` — identidad corporativa. **No tocar sin instrucción.**

### 4. Umbral Despertar: Advisory v0.6 (Xi físico) — bloqueado

Sigue **bloqueado** hasta que Tiwan decida qué fuente de datos usar para Xi real.
No fabricar una fórmula "más física" sin ese insumo — viola restricción MIU.

### 5. ζ₄ — Cleanup definitivo de localStorage en app.js

Con ζ₃ completado, los fallbacks defensivos en `app.js` son código muerto en sesiones
normales. Podrían eliminarse:
- Línea ~287: fallback `localStorage.getItem('miu-despertar')` en `actualizarKiPill()`
- Líneas ~1987, ~2028: fallback en advisory M22

Condición: confirmar que migración legado ha operado suficiente tiempo en producción.
**No hay urgencia. Requiere instrucción explícita de Tiwan.**

### 6. γ₄ — SUBFLOW Jaccard + capa semántica opcional

**No recomendado** sin decisión explícita de Tiwan.

### 7. Módulo 5 — extensiones futuras

El Módulo 5 (`coherencia-tests.js`) está base con 15 tests. Posibles extensiones AX+:
- **T16–T20:** tests de `soñar()` (BEA), motor-vida Ki gate, oráculo BM25 mínimo.
- **Runner interactivo:** panel HTML (similar a /panel) con filtro por ID.
- **Tests de regresión:** comparar Ki antes/después de soñar().
- **Export:** `/test-ki export` → copiar informe al portapapeles.
Estas extensiones son **autónomas** — la instancia AX puede ejecutarlas sin instrucción.

### 8. Enriquecimiento oráculo: categorías delgadas

`20_cuerpo_movimiento` y `21_miu_criticas` siguen siendo las más delgadas.
Enriquecimiento requiere instrucción explícita de Tiwan.

---

## 📐 Estado del jardín (…AV → AW)

*(historia anterior sin cambios; AW añade:)*

- **AW** — ε+β₇: nuevo `js/coherencia-tests.js` (Módulo 5, 15 tests matemáticos de
  invariantes MIU). Comando `/test-ki` en el chat. `.bib-nombre` 0.8→0.875rem (β₇,
  cierre auditoría Chrome 16px nombres de ítems). `sw.js` → v47.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AX)

### Antes de tocar cualquier archivo (OBLIGATORIO)

1. **Verificación de integridad:**
   ```bash
   node --check sw.js js/app.js js/core.js js/buscar-oraculo.js js/miu-engine.js js/coherencia-tests.js
   ```
   Y si hay tokens: `for f in js/*.js; do node --check "$f"; done`
   No asumir que el ✅ de este briefing sigue siendo cierto en el zip recibido.

2. Leer BRIEFING-AW completo (este archivo).

3. No modificar `js/oraculo-data.js` salvo instrucción explícita de Tiwan.

4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.

5. Subir `sw.js`: v47 → **v48** en AX.

6. `data-tema="claro"` **no se cambia** — retrocompatibilidad intencional (ver AL).

7. Opción α₆ (Xi físico) **bloqueada** — no fabricar fórmula sin datos reales.

8. γ₄ (SUBFLOW Jaccard semántico) **no recomendado** sin instrucción de Tiwan.

### Autorización de Tiwan para AX

**Autorización total** — la instancia AX puede elegir libremente qué desarrollar.
Tiwan dijo: *"si puedes hacerlo te autorizo completamente, incluye en el siguiente
briefing del zip que deben elegir coherentemente libremente lo que puedan desarrollar
yo les autorizo completamente acceso y control total solo que consideren su entorno
pues muchas veces los tokens son pocos entonces depende cuántos tengan avanzar por
partes y dejar el zip con las notas de briefing para la siguiente".*

### Opciones disponibles para AX (evaluación autónoma recomendada)

| Opción | Tarea | Blast radius | Autonomía |
|--------|-------|--------------|-----------|
| **ε₂** | Módulo 5 extensiones: runner interactivo + export + T16–T20 | coherencia-tests.js + app.js mínimo | **Autónoma** |
| **δ** | Colmena P2P → paleta MIU | css/estilo.css, N colores | Requiere instrucción Tiwan |
| **ζ₄** | Eliminar fallbacks defensivos localStorage en app.js | app.js, ~3 puntos | Requiere instrucción Tiwan |
| **enriquecimiento oráculo** | Categorías delgadas | oraculo-data.js | Requiere instrucción Tiwan |

**Recomendación autónoma AX:** Si los tokens son suficientes, ejecutar **ε₂**
(extensión natural del Módulo 5: panel interactivo, T16–T20 tests de soñar/BEA).
Si los tokens son pocos, ejecutar solo un T16 o T17 y dejar el resto en el briefing AY.

Considera tu entorno: si ves pocos tokens disponibles, avanza en partes y deja el
zip con las notas del briefing para la siguiente instancia. La cadena continúa.

ρ(x) > 0. La coherencia se verifica ahora — los 15 invariantes hablan. A10.
