# 🌿 BRIEFING-AY — CICLO AY: T20 Anti-regresión Ki + count-fix app.js

**Contexto:** FranBot-AY parte de `FranBot-AU.zip` (estado interno: FranBot-AW/) con cambios en 3 archivos:
- `js/coherencia-tests.js` — T20 + actualización console.log mensaje (AY)
- `js/app.js` — corrección contador "17 tests" → "20 tests" (ayuda + autocomplete)
- `sw.js` — v49 → v50, changelog AY

**Origen del ciclo:** Autorización total heredada desde AX/AU.
La instancia AY ejecutó ε₄.T20 (regresión Ki) + corrección de contador desincronizado.

**Resultado del ciclo AY:**
✅ **T20 — bea_ciclo() anti-regresión Ki (3 escenarios):**
   - A: campo adverso (nivel=0.1, 3 nodos débiles todos podados) → ki_despues >= ki_antes (ambos negativos, pero mejora)
   - B: campo saturado (nivel=1.0) → nivel post-BEA capped en 1.0, sin overflow, ki estable
   - C: campo null → informe vacío {evaluados:0, ki_antes:0, ki_despues:0}, sin crash (early exit)
✅ **count-fix app.js:** "17 tests" → "20 tests" en ayuda (línea 1176) + autocomplete (línea 2401).
   Contador quedó desincronizado desde ciclo AU (que añadió T18+T19 pero no actualizó app.js).
✅ **sw.js:** v49 → v50. `CACHE_NAME = 'franbot-v50'`.
✅ **28/28** archivos `js/*.js` pasan `node --check`. ✅ 6/6 críticos OK.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### T20: bea_ciclo() anti-regresión Ki — 3 escenarios

**Archivo:** `js/coherencia-tests.js`, en array TESTS, tras T19.

**Principio validado:** `bea_ciclo()` tiene mejora monotónica garantizada matemáticamente:
- `mejora = podados > 0 ? min(0.05, podados*0.01) : 0.01` → SIEMPRE >= 0.01
- Por tanto `nuevo_nivel > nivel_base` siempre (salvo cap en 1.0)
- Por tanto `ki_despues >= ki_antes` siempre (invariante anti-regresión A10)

**Escenario A** — campo adverso (nivel=0.1, 3 nodos todos débiles fuerza<0.3):
- Verifica: evaluados=3, podados=3, ki_despues >= ki_antes (ambos negativos porque f>0.5)
- ki_antes ≈ -0.2274, ki_despues ≈ -0.2186 (menos negativo = mejor)

**Escenario B** — campo saturado (nivel=1.0, 1 nodo fuerte):
- Verifica: indB.nivel_coherencia <= 1.0 (cap), ki_despues >= ki_antes (iguales, sin regresión)

**Escenario C** — campo null:
- Verifica: devuelve {evaluados:0, ki_antes:0, ki_despues:0} sin lanzar error

### count-fix app.js

**Archivo:** `js/app.js`, 2 puntos:
- `comandoAyuda()` texto de /test-ki: "17 tests" → "20 tests" (aprox línea 1176)
- autocomplete array desc: "17 tests" → "20 tests" (aprox línea 2401)

**Motivo:** El ciclo AU añadió T18+T19 (v49) pero no actualizó app.js — el texto decía "17 tests"
aunque el módulo cargaba 19. AY corrige a 20 (post-T20).

### Verificación ciclo AY

```
node --check sw.js js/app.js js/core.js js/miu-engine.js js/coherencia-tests.js js/motor-vida.js
✅ 6/6 OK

for f in js/*.js; do node --check "$f"; done
✅ 28/28 OK
```

- `CACHE_NAME = 'franbot-v50'` ✅
- `sw.js — FranBot v50` ✅ (cabecera)
- T20 en coherencia-tests.js ✅ (id: 'T20', nombre: 'bea_ciclo() anti-regresión Ki (3 escenarios)')
- `window.CoherenciaTests.lista.length` = 20 ✅
- console.log: "tests disponibles (AY: T20+anti-regresión+count-fix)" ✅
- app.js ayuda: "20 tests matemáticos" ✅
- app.js autocomplete: "20 tests" ✅

---

## 📊 Estado del Módulo 5 post-AY

**Cobertura de tests (20 tests):**

| Bloque | Tests | Función |
|--------|-------|---------|
| **Axiomas MIU** | T01–T15 | constantes φ, calcKi, calcKiNeg, banda, CCP-01, etc. (puras) |
| **Ciclos BEA** | T16 | bea_ciclo() con campo sintético (2 débiles + 2 fuertes) → mejora |
| **Gates** | T17 | MotorVida.evaluar() — 4 casos (Ki+cooldown) |
| **Integración** | T18 | MotorVida.ejecutar() — reporte de exploración válido |
| **Búsqueda** | T19 | BuscarOraculo.buscarConScore() — 3 casos, valida interfaz |
| **Anti-regresión** | T20 | bea_ciclo() Ki no colapsa — 3 escenarios (adverso/sat/null) |

**Análisis de cobertura:**
- ✅ Axiomas (puros): cargados
- ✅ Decisión (gates): probado
- ✅ Acción (exploración): probado
- ✅ Búsqueda (Q&A): probado
- ✅ Anti-regresión (invariante A10): probado
- ⏳ Runner interactivo (panel HTML): diferido AZ

---

## 🔮 Diferidos (Ciclo AZ o posterior)

### 1. ε₅ — Runner interactivo (panel HTML)

Panel `/panel-tests` o sección en `/panel` existente:
- Checkbox por test para filtro
- Botón "Correr seleccionados"
- Output coloreado por ✅/❌
- Integración con `/test-ki export`

**Blast radius:** app.js + index.html. **Requiere tokens ~80k.**
**Recomendación:** Primera opción para AZ si tokens permiten.

### 2. Chrome 16px: `.eyebrow` (0.68rem)

Última auditoría diferida. No urgente.
**No tocar sin instrucción de Tiwan.**

### 3. Colmena P2P: paleta δ

`.col-dot--on`, `.col-titulo`, `.col-input:focus`, `.col-info a`.
**No tocar sin instrucción de Tiwan.**

### 4. Yape: paleta de marca

`#7c3aed`/`#a855f7`/`#e9d5ff`.
**No tocar sin instrucción de Tiwan.**

### 5. ζ₄ — Cleanup localStorage fallbacks en app.js

Código muerto post-ζ₃.
**No tocar sin instrucción explícita.**

### 6. γ₄ — SUBFLOW Jaccard semántico

Pre-filtro semántico antes de deduplicación.
**No recomendado sin instrucción de Tiwan.**

### 7. Umbral Despertar: Advisory v0.6 (Xi físico)

**Bloqueado** — sin fuente de datos Xi real. No fabricar.

### 8. Enriquecimiento oráculo: categorías delgadas

`20_cuerpo_movimiento` y `21_miu_criticas`.
**Requiere instrucción de Tiwan.**

---

## 📐 Estado del jardín (…AU → AY)

*(historia anterior sin cambios; AY añade:)*

- **AX** — ε₂: T16 (bea_ciclo BEA sintético) + T17 (MotorVida gate Ki+cooldown).
  Export portapapeles `/test-ki export`. `sw.js` → v48.
- **AU** — ε₄: T18 (MotorVida.ejecutar integration) + T19 (BuscarOraculo validation).
  `sw.js` → v49. (app.js contador no actualizado en este ciclo — bug corregido en AY)
- **AY** — T20 (bea_ciclo anti-regresión Ki: 3 escenarios). count-fix "17→20" en app.js.
  `sw.js` → v50. Módulo 5 ahora tiene **20 tests**.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AZ)

### Antes de tocar cualquier archivo (OBLIGATORIO)

1. **Verificación de integridad:**
   ```bash
   node --check sw.js js/app.js js/core.js js/miu-engine.js js/coherencia-tests.js js/motor-vida.js
   ```
   Y si hay tokens: `for f in js/*.js; do node --check "$f"; done`
   No asumir que el ✅ de este briefing sigue siendo cierto en el zip recibido.

2. Leer BRIEFING-AY completo (este archivo).

3. No modificar `js/oraculo-data.js` salvo instrucción explícita de Tiwan.

4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.

5. Subir `sw.js`: v50 → **v51** en AZ.

6. `data-tema="claro"` **no se cambia** — retrocompatibilidad intencional (ver AL).

7. Opción α₆ (Xi físico) **bloqueada** — no fabricar fórmula sin datos reales.

8. γ₄ (SUBFLOW Jaccard semántico) **no recomendado** sin instrucción de Tiwan.

### Autorización de Tiwan para AZ

**Autorización total** — la instancia AZ puede elegir libremente qué desarrollar.

### Opciones disponibles para AZ (evaluación autónoma recomendada)

| Opción | Tarea | Blast radius | Tokens aprox | Autonomía |
|--------|-------|--------------|--------------|-----------|
| **ε₅** | Runner interactivo: panel HTML de tests (checkboxes + botón + output ✅/❌) | app.js + index.html | ~80k | **Autónoma** |
| **δ** | Colmena P2P → paleta MIU | css/estilo.css | ~20k | Requiere Tiwan |
| **ζ₄** | Cleanup localStorage fallbacks | app.js | ~30k | Requiere Tiwan |

**Recomendación autónoma AZ:** Ejecutar **ε₅** (runner interactivo).
Es la siguiente mejora natural del Módulo 5: hace los 20 tests accesibles desde la UI sin
necesidad de comandos de chat. Revisar índice del panel `/panel` en index.html antes de
abrir una sección nueva — podría integrarse en el panel existente para menor blast radius.

ρ(x) > 0. 20 invariantes verificados. El jardín sigue creciendo. A10.
