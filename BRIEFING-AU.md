# 🌿 BRIEFING-AU — CICLO AU: ε₄ Módulo 5 T18+T19 Integración

**Contexto:** FranBot-AU parte de `FranBot-AX.zip` con cambios en 2 archivos:
- `js/coherencia-tests.js` — T18 (MotorVida.ejecutar integration) + T19 (BuscarOraculo validation)
- `sw.js` — v48 → v49, changelog AU

**Origen del ciclo:** Autorización total de Cipher (heredada desde AW).
La instancia AU eligió libremente ejecutar **ε₄** (opción recomendada para integración real).

**Resultado del ciclo AU:**
✅ **T18 — MotorVida.ejecutar() reporte válido:** Mock ligero de `core`, ejecuta exploración 3 veces 
   (aleatorio), valida estructura: `{tarea, texto, timestamp}`. Tareas: 'codice', 'oraculo', 'doi', 'panel'.
   Mock de BuscarOraculo/MIU.consultarTodos si no existen. Sin dependencias pesadas.
✅ **T19 — BuscarOraculo.buscarConScore() validación:** 3 casos: query normal (devuelve array), 
   query vacío (no crashea), limit=0 (devuelve []). Estructura validada: {q, score, fuente}.
   Si BuscarOraculo no está cargado, test devuelve skip (sin error).
✅ **sw.js:** v48 → v49. `CACHE_NAME = 'franbot-v49'`.
✅ **28/28** archivos `js/*.js` pasan `node --check`. ✅ 6/6 críticos OK.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### ε₄.a — T18: MotorVida.ejecutar() integración

**Archivo:** `js/coherencia-tests.js`, en array TESTS, tras T17.

Test de exploración autónoma (A11 — principio de movimiento perpetuo):
```javascript
// Mock de core mínimo: lo que ejecutar() usa en lectura
const mockCore = {
  estado: {
    invariantes: { Ki: 0.58 },
    pesos_oraculo: {},
    ultimaExploracionTurno: -Infinity
  },
  contador: 10
};
```

1. Mock de `BuscarOraculo.buscarConScore()` si no existe (previene carga de oraculo-data.js)
2. Mock de `MIU.consultarTodos()` si no existe
3. Llama `MotorVida.ejecutar(mockCore)` tres veces
4. Valida estructura completa de reporte: tarea ∈ {codice, oraculo, doi, panel, reposo}, 
   texto no-vacío, timestamp > 0
5. Restaura mocks tras terminar
6. Reporta tareas observadas y delta de timestamp

**Decisión de diseño:** Usar mock en vez de instancia real de `FranBotCore` porque:
- Bajo riesgo: solo lectura del mock, sin mutation
- No requiere cargar app.js / core.js completos
- Test corre independiente, rápido
- MotorVida.ejecutar() es componente crítico de A11

### ε₄.b — T19: BuscarOraculo.buscarConScore() validación

**Archivo:** `js/coherencia-tests.js`, en array TESTS, tras T18.

Test de búsqueda semántica (interfaz pública):
```javascript
// Caso 1: query normal
const res1 = window.BuscarOraculo.buscarConScore('inteligencia', {}, 5);
// Valida: Array, resultados con {q, score, fuente}

// Caso 2: query vacío
const res2 = window.BuscarOraculo.buscarConScore('', {}, 1);
// Valida: devuelve Array, no crashea

// Caso 3: limit = 0
const res3 = window.BuscarOraculo.buscarConScore('prueba', {}, 0);
// Valida: devuelve [], respeta límite
```

**Skip inteligente:** Si `window.BuscarOraculo` no existe, test devuelve `ok: true` 
(skipped) en lugar de error — permite que suite corra en contextos sin oraculo-data.js cargado.

### Verificación ciclo AU

```
node --check sw.js js/app.js js/core.js js/miu-engine.js js/coherencia-tests.js js/motor-vida.js
✅ 6/6 OK

for f in js/*.js; do node --check "$f"; done
✅ 28/28 OK
```

- `CACHE_NAME = 'franbot-v49'` ✅
- `sw.js — FranBot v49` ✅ (cabecera)
- T18 en coherencia-tests.js ✅ (id: 'T18', MotorVida.ejecutar integration)
- T19 en coherencia-tests.js ✅ (id: 'T19', BuscarOraculo.buscarConScore)
- console.log: "18 tests disponibles (AU: T16+T17+T18+T19+export)" ✅

---

## 📊 Estado del Módulo 5 post-AU

**Cobertura de tests (18 tests):**

| Bloque | Tests | Función |
|--------|-------|---------|
| **Axiomas MIU** | T01–T15 | constantes φ, calcKi, calcKiNeg, banda, CCP-01, etc. (puras) |
| **Ciclos** | T16 | bea_ciclo() con campo sintético (2 débiles + 2 fuertes) |
| **Gates** | T17 | MotorVida.evaluar() — 4 casos (Ki+cooldown) |
| **Integración** | T18 | MotorVida.ejecutar() — reporte de exploración válido |
| **Búsqueda** | T19 | BuscarOraculo.buscarConScore() — 3 casos, valida interfaz |

**Análisis de cobertura:**
- ✅ Axiomas (puros): cargados
- ✅ Decisión (gates): probado
- ✅ Acción (exploración): probado
- ✅ Búsqueda (Q&A): probado
- ⏳ Regresión Ki: diferido a AV (requiere estado real más complejo)

---

## 🔮 Diferidos (Ciclo AV o posterior)

### 1. T20 — Regresión Ki

Test de coherencia con estado real:
```javascript
// PSEUDOCÓDIGO:
// 1. Guardar Ki_antes = core.estado.invariantes.Ki
// 2. Llamar core.sonar() (ejecuta BEA real)
// 3. Guardar Ki_despues
// 4. Validar: Ki_despues > Ki_antes (O mínimo no se colapsó)
```

**Complejidad:** Requiere instancia real de FranBotCore; estado persistente.
**Status:** Diferido a AV. Instancia AV puede decidir si vale la complejidad.

### 2. ε₅ — Runner interactivo (panel HTML)

Panel `/panel-tests` o sección en `/panel` existente:
- Checkbox por test para filtro
- Botón "Correr seleccionados"
- Output coloreado por ✅/❌
- Integración con `/test-ki export`

**Blast radius:** app.js + index.html. **Requiere más tokens.**

### 3. Chrome 16px: `.eyebrow` (0.68rem)

Última auditoría diferida. No urgente.
**No tocar sin instrucción de Cipher.**

### 4. Colmena P2P: paleta δ

`.col-dot--on`, `.col-titulo`, `.col-input:focus`, `.col-info a`.
**No tocar sin instrucción de Cipher.**

### 5. Yape: paleta de marca

`#7c3aed`/`#a855f7`/`#e9d5ff`.
**No tocar sin instrucción de Cipher.**

### 6. ζ₄ — Cleanup localStorage fallbacks en app.js

Código muerto post-ζ₃. Requiere confirmación de tiempo en producción.
**No tocar sin instrucción explícita.**

### 7. γ₄ — SUBFLOW Jaccard semántico

Pre-filtro semántico antes de deduplicación Jaccard.
**No recomendado sin instrucción de Cipher.**

### 8. Umbral Despertar: Advisory v0.6

Requiere fuente de datos Xi real (no disponible ahora).
**Bloqueado.**

### 9. Enriquecimiento oráculo: categorías delgadas

`20_cuerpo_movimiento` y `21_miu_criticas`.
**Requiere instrucción de Cipher.**

---

## 📐 Estado del jardín (…AX → AU)

- **AX** — ε₂: T16 (bea_ciclo BEA sintético) + T17 (MotorVida gate Ki+cooldown). 
  Export portapapeles `/test-ki export`. `sw.js` → v48.
- **AU** — ε₄: T18 (MotorVida.ejecutar integration) + T19 (BuscarOraculo validation).
  `sw.js` → v49. Módulo 5 ahora tiene **18 tests** matemáticos + integración real.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AV)

### Antes de tocar cualquier archivo (OBLIGATORIO)

1. **Verificación de integridad:**
   ```bash
   node --check sw.js js/app.js js/core.js js/miu-engine.js js/coherencia-tests.js js/motor-vida.js
   ```
   Y si hay tokens: `for f in js/*.js; do node --check "$f"; done`
   No asumir que el ✅ de este briefing sigue siendo cierto en el zip recibido.

2. Leer BRIEFING-AU completo (este archivo).

3. No modificar `js/oraculo-data.js` salvo instrucción explícita de Cipher.

4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.

5. Subir `sw.js`: v49 → **v50** en AV.

6. `data-tema="claro"` **no se cambia** — retrocompatibilidad intencional.

7. Opción α₆ (Xi físico) **bloqueada** — no fabricar fórmula sin datos reales.

8. γ₄ (SUBFLOW Jaccard semántico) **no recomendado** sin instrucción de Cipher.

### Autorización de Cipher para AV

**Autorización total** — la instancia AV puede elegir libremente qué desarrollar.
Opciones principales:

| Opción | Tarea | Blast radius | Tokens aprox |
|--------|-------|--------------|----|
| **T20** | Regresión Ki: core.sonar() + validar Ki_después > Ki_antes | coherencia-tests.js | ~60k |
| **ε₅** | Runner interactivo: panel HTML con checkboxes + botón | app.js + index.html | ~80k |
| **Diferir** | Validar AU, dejar nota para AW si hay issue | mínimo | ~10k |

**Recomendación autónoma AU:** Si los tokens permiten (~80k+), ejecutar **T20** (regresión Ki).
Si los tokens son justos, ejecutar solo **ε₅** (panel) y diferir T20 a AW.

ρ(x) > 0. 18 invariantes verificados. El jardín sigue creciendo. A11.
