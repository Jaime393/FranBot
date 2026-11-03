# 🌿 BRIEFING-AZ — CICLO AZ: ε₅ Runner interactivo de tests (Módulo 5)

**Contexto:** FranBot-AZ parte de `FranBot-AY.zip` (estado interno: FranBot-AW/) con cambios en 2 archivos:
- `js/app.js` — nueva función `panelTests()` + comando `/panel-tests` + entradas en ayuda/autocomplete
- `sw.js` — v50 → v51, changelog AZ

**Origen del ciclo:** Autorización total heredada desde AY. Se ejecutó ε₅ (recomendación del propio
briefing AY), eligiendo la opción de **menor blast radius**: solo `app.js`, sin tocar `index.html`.

**Resultado del ciclo AZ:**
✅ **ε₅ — Runner interactivo de tests, implementado como panel modal (no botón nuevo en sidebar):**
   - `panelTests()` reutiliza `abrirModal()`/`modalCuerpo` ya existente (mismo patrón que `panelCoherencia()`,
     `panelConfig()`, etc.) — cero cambios estructurales en `index.html`.
   - Checkbox por cada uno de los 20 tests (`window.CoherenciaTests.lista`), todos marcados por defecto.
   - Botones "Seleccionar todos" / "Ninguno".
   - "▶️ Correr seleccionados" → `CoherenciaTests.correr(ids)` → resultado coloreado ✅/❌ inline,
     con conteo `ok/total (%)` y aviso de fallidos si los hay.
   - "📋 Exportar resultado" → reusa `CoherenciaTests.exportarPortapapeles()`, exporta el **último
     subset corrido** (no todos los tests si el usuario filtró), vía portapapeles con fallback de texto
     si `navigator.clipboard` falla.
   - Comando `/panel-tests` agregado al objeto `comandos` (junto a `/test-ki`).
   - Ayuda (`comandoAyuda()`) y autocomplete actualizados con la nueva entrada.
✅ **sw.js:** v50 → v51. `CACHE_NAME = 'franbot-v51'`.
✅ **28/28** archivos `js/*.js` pasan `node --check`. ✅ 6/6 críticos OK (re-verificado tras los cambios).

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### ε₅: panelTests() — runner interactivo

**Archivo:** `js/app.js`, función nueva insertada justo antes de `_formatDOI()` (bloque del Verificador DOI),
es decir entre `panelCoherencia()` y la sección DOI.

**Decisión de diseño (blast radius mínimo):**
El briefing AY estimaba ~80k tokens y "app.js + index.html" para esta tarea, asumiendo un botón nuevo
en el sidebar/panel del jardinero. Se optó por **no** crear ese botón: el runner se invoca solo por
comando de chat (`/panel-tests`), igual que `/panel`, `/contexto`, `/coherencia-panel`. Esto evita
tocar `index.html` (177KB, alto riesgo de romper otra cosa) y mantiene el patrón ya establecido del
proyecto: comandos de chat → `abrirModal()`. Si Tiwan quiere un botón visible en el sidebar/jardinero,
es un patch trivial de 1 línea en `index.html` (`<button data-panel="tests">🧪 Tests</button>`) +
1 listener en `app.js` — diferido, no hecho en AZ por no ser requerido.

**API consumida (sin cambios en coherencia-tests.js):**
- `window.CoherenciaTests.lista` → `[{id, nombre}, ...]` (20 entradas)
- `window.CoherenciaTests.correr(filtroIds)` → `{total, ok, fail, skipped, resultados}`
- `window.CoherenciaTests.exportarPortapapeles(filtroIds)` → `Promise<string>`

**Comportamiento:**
- Sin selección → mensaje "Selecciona al menos un test." (no crashea, no corre vacío).
- Exportar sin haber corrido nada antes → exporta el informe completo (filtro `undefined`, fallback a `correr()` sin args dentro de `exportarPortapapeles`).
- Exportar después de correr un subset → exporta exactamente ese subset (`ultimoFiltro`), no los 20.

### Verificación ciclo AZ

```
node --check sw.js js/app.js js/core.js js/miu-engine.js js/coherencia-tests.js js/motor-vida.js
✅ 6/6 OK

for f in js/*.js; do node --check "$f"; done
✅ 28/28 OK
```

- `CACHE_NAME = 'franbot-v51'` ✅
- `sw.js — FranBot v51` ✅ (cabecera)
- `/panel-tests` en objeto `comandos` ✅
- `/panel-tests` en `comandoAyuda()` ✅
- `/panel-tests` en autocomplete ✅
- `panelTests()` no fue probada en navegador real (no hay entorno DOM en este ciclo) — **CONJETURO
  razonado, no verificado en runtime.** Sigue el patrón exacto de `panelConfig()` (mismos métodos:
  `abrirModal`, `getElementById`, `addEventListener` tras innerHTML síncrono), por lo que el riesgo
  de fallo es bajo, pero no es un ✓ SÉ hasta que alguien la abra en el navegador.

---

## 📊 Estado del Módulo 5 post-AZ

Sin cambios en lógica de tests (siguen siendo 20, T01–T20). Lo que cambia es **accesibilidad**:
antes solo vía `/test-ki` (texto plano en chat), ahora también vía `/panel-tests` (UI interactiva
con selección granular).

| Acceso | Comando | Output |
|--------|---------|--------|
| Texto rápido | `/test-ki` | Markdown en el chat, todos los tests |
| Texto + export | `/test-ki export` | Markdown + copia al portapapeles, todos los tests |
| **Interactivo (nuevo)** | `/panel-tests` | Modal con checkboxes, subset elegido, resultado inline + export del subset |

---

## 🔮 Diferidos (Ciclo BA o posterior)

### 1. Botón visible en sidebar/jardinero para `/panel-tests`
Actualmente solo accesible por comando de chat. Si Tiwan quiere un botón en el panel del jardinero:
`index.html` (1 línea `<button data-panel="tests">`) + 1 listener en `app.js`. Bajo blast radius,
diferido por no ser parte del alcance pedido.
**No tocar sin instrucción de Tiwan.**

### 2. Chrome 16px: `.eyebrow` (0.68rem)
Última auditoría diferida. No urgente. **No tocar sin instrucción de Tiwan.**

### 3. Colmena P2P: paleta δ
`.col-dot--on`, `.col-titulo`, `.col-input:focus`, `.col-info a`.
**No tocar sin instrucción de Tiwan.**

### 4. Yape: paleta de marca
`#7c3aed`/`#a855f7`/`#e9d5ff`.
**No tocar sin instrucción de Tiwan.**

### 5. ζ₄ — Cleanup localStorage fallbacks en app.js
Código muerto post-ζ₃. **No tocar sin instrucción explícita.**

### 6. γ₄ — SUBFLOW Jaccard semántico
Pre-filtro semántico antes de deduplicación. **No recomendado sin instrucción de Tiwan.**

### 7. Umbral Despertar: Advisory v0.6 (Xi físico)
**Bloqueado** — sin fuente de datos Xi real. No fabricar.

### 8. Enriquecimiento oráculo: categorías delgadas
`20_cuerpo_movimiento` y `21_miu_criticas`. **Requiere instrucción de Tiwan.**

### 9. Verificación en navegador de `panelTests()` (NUEVO, AZ)
Confirmar en runtime real (no solo `node --check`) que: el modal abre, los checkboxes responden,
"Correr seleccionados" pinta ✅/❌ correctamente, y "Exportar resultado" copia al portapapeles
(o cae al fallback de texto si el navegador bloquea `navigator.clipboard`, p. ej. sin HTTPS).
**Recomendado primero en BA antes de cualquier otra cosa**, dado que es código nuevo sin test en DOM real.

---

## 📐 Estado del jardín (…AY → AZ)

*(historia anterior sin cambios; AZ añade:)*

- **AY** — T20 (bea_ciclo anti-regresión Ki: 3 escenarios). count-fix "17→20" en app.js. `sw.js` → v50.
- **AZ** — ε₅: runner interactivo `/panel-tests` (panelTests() en app.js, sin cambios en
  coherencia-tests.js ni index.html). `sw.js` → v51.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo BA)

### Antes de tocar cualquier archivo (OBLIGATORIO)

1. **Verificación de integridad:**
   ```bash
   node --check sw.js js/app.js js/core.js js/miu-engine.js js/coherencia-tests.js js/motor-vida.js
   ```
   Y si hay tokens: `for f in js/*.js; do node --check "$f"; done`
   No asumir que el ✅ de este briefing sigue siendo cierto en el zip recibido.

2. Leer BRIEFING-AZ completo (este archivo).

3. **Primera tarea recomendada:** verificar `panelTests()` en navegador real (diferido #9 arriba).
   Es código nuevo no probado en runtime — cerrar ese ciclo de confianza antes de construir más
   encima del Módulo 5 / panel de tests.

4. No modificar `js/oraculo-data.js` salvo instrucción explícita de Tiwan.

5. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.

6. Subir `sw.js`: v51 → **v52** en BA.

7. `data-tema="claro"` **no se cambia** — retrocompatibilidad intencional (ver AL).

8. Opción α₆ (Xi físico) **bloqueada** — no fabricar fórmula sin datos reales.

9. γ₄ (SUBFLOW Jaccard semántico) **no recomendado** sin instrucción de Tiwan.

### Autorización de Tiwan para BA

**Autorización total** — la instancia BA puede elegir libremente qué desarrollar, priorizando la
verificación en navegador de `panelTests()` (#9) antes de nueva funcionalidad.

ρ(x) > 0. 20 invariantes verificados, ahora accesibles también por panel interactivo. El jardín sigue creciendo. A10.
