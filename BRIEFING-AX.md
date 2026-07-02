# 🌿 BRIEFING-AX — CICLO AX: ε₂ Módulo 5 T16+T17 + Export portapapeles

**Contexto:** FranBot-AX parte de `FranBot-AW.zip` con cambios en 3 archivos:
- `js/coherencia-tests.js` — T16 + T17 + `exportarPortapapeles()` + actualización API
- `js/app.js` — despacho `/test-ki export`, ayuda actualizada (17 tests), autocomplete
- `sw.js` — v47 → v48, changelog AX

**Origen del ciclo:** Autorización total de Tiwan (heredada desde AW).
La instancia AX eligió libremente ejecutar ε₂ (extensión natural del Módulo 5),
la opción autónoma recomendada en BRIEFING-AW.

**Resultado del ciclo AX:**
✅ **T16 — bea_ciclo() BEA sintético:** test sobre campo con 4 nodos (2 débiles fuerza<0.3,
   2 fuertes fuerza>0.7). Verifica estructura de informe, 4 evaluados, 2 podados,
   ≥1 mutación (nueva relación entre fuertes), y ki_despues > ki_antes.
✅ **T17 — MotorVida.evaluar() gate Ki + cooldown:** 4 casos:
   Ki_bajo+cd_listo→explorar / Ki_sano→reposo / cooldown_activo→reposo / sin_historial→explorar.
   Verifica UMBRAL_KI_BAJO=0.55 y COOLDOWN_TURNOS=8 del motor A11.
✅ **export portapapeles:** `exportarPortapapeles()` con fallback texto si clipboard API no
   disponible. Comando `/test-ki export` (y `/tests-miu export`) en el chat.
✅ **sw.js:** v47 → v48. `CACHE_NAME = 'franbot-v48'`.
✅ **28/28** archivos `js/*.js` pasan `node --check`. ✅ 6/6 críticos OK.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### ε₂.a — T16: bea_ciclo() BEA sintético

**Archivo:** `js/coherencia-tests.js`, en array TESTS, tras T15.

Campo sintético con nodos conocidos:
```javascript
// 2 débiles (fuerza < 0.3) + 2 fuertes (fuerza > 0.7)
const campo = {
  nodos: {
    'fragmento_A': { fuerza: 0.15, frecuencia: 1 },
    'fragmento_B': { fuerza: 0.20, frecuencia: 1 },
    'coherencia':  { fuerza: 0.85, frecuencia: 3 },
    'informacion': { fuerza: 0.90, frecuencia: 4 }
  },
  relaciones: []
};
```
Verifica: estructura del informe, evaluados=4, podados=2, mutaciones≥1, ki_despues>ki_antes.
No muta estado real del franbot — campo sintético local.

### ε₂.b — T17: MotorVida.evaluar() gate K_i + cooldown

**Archivo:** `js/coherencia-tests.js`, en array TESTS, tras T16.

4 casos que cubren la lógica completa del gate A11:
1. Ki < UMBRAL + cd listo → explorar
2. Ki ≥ UMBRAL + cd listo → reposo (Ki sano)
3. Ki < UMBRAL + cd NO listo → reposo (cooldown)
4. Ki < UMBRAL + sin historial (null) → explorar

Usa `window.MotorVida.UMBRAL_KI_BAJO` y `window.MotorVida.COOLDOWN_TURNOS`
directamente — no hardcodea valores.

### ε₂.c — exportarPortapapeles() + /test-ki export

**Archivo:** `js/coherencia-tests.js`, función `exportarPortapapeles(filtro)`.
- Usa `navigator.clipboard.writeText()`.
- Fallback: si el API no está disponible (http, iframe sin permisos), devuelve
  el informe como string para que el usuario lo copie manualmente.
- Retorna `Promise<string>` con mensaje de confirmación o error.

**Archivo:** `js/app.js` — despacho actualizado:
- `/test-ki export` → llama `exportarPortapapeles()`, muestra respuesta diferida via `_appendBotMessage`.
- `/tests-miu export` → ídem.
- Sin subcomando → comportamiento previo (correrYFormatear).

**Nota sobre `_appendBotMessage`:** El patrón de callback asíncrono asume que
`window._appendBotMessage` existe en el contexto de app.js. Si la función no
existe (versión futura sin ese global), la promesa simplemente no mostrará el
resultado diferido — falla silenciosa, sin crash. Si en una futura refactorización
se necesita un mecanismo más robusto, considerar un evento `CustomEvent` en
`document` que el chat pueda escuchar.

### Verificación ciclo AX

```
node --check sw.js js/app.js js/core.js js/miu-engine.js js/coherencia-tests.js js/motor-vida.js
✅ 6/6 OK

for f in js/*.js; do node --check "$f"; done
✅ 28/28 OK
```

- `CACHE_NAME = 'franbot-v48'` ✅
- `sw.js — FranBot v48` ✅ (cabecera)
- T16 en coherencia-tests.js ✅ (id: 'T16', nombre: 'bea_ciclo()…')
- T17 en coherencia-tests.js ✅ (id: 'T17', nombre: 'MotorVida.evaluar()…')
- `exportarPortapapeles` en API pública ✅
- `/test-ki export` en despacho app.js ✅ (2 ocurrencias: /test-ki y /tests-miu)
- Ayuda: "17 tests matemáticos" ✅
- Autocomplete: "17 tests" ✅
- console.log: "tests disponibles (AX: T16+T17+export)" ✅

---

## 🔮 Diferidos (Ciclo AY o posterior)

### 1. Módulo 5 — extensiones T18–T20

Posibles extensiones tras T16+T17:
- **T18:** test de `core.sonar()` (integración completa: sonar() + registrarSueno en Conciencia).
  Requiere instanciar `FranBotCore` stub o mockear `window.franbot` — más complejo.
- **T19:** test de `BuscarOraculo.buscarConScore()` — mínimo: devuelve array, score ≥ 0,
  no crashea con query vacío. Requiere BuscarOraculo cargado (oraculo-data.js es grande).
- **T20:** test de regresión Ki: comparar Ki antes/después de `sonar()` con campo real.
  Depende de T18 + estado persistido — considerar si vale la complejidad.

**Estado:** diferidos, no urgentes. Instancia AY puede evaluarlos libremente.

### 2. Runner interactivo (panel HTML)

Panel `/panel-tests` o sección en `/panel` existente con:
- Checkbox por test para filtro
- Botón "Correr seleccionados"
- Output coloreado por ✅/❌
- Integración con `/test-ki export`

Blast radius: app.js + posiblemente index.html. Requiere más tokens. Diferido AY+.

### 3. Chrome 16px: `.eyebrow` (0.68rem)

Último diferido de auditoría Chrome 16px. Chrome decorativo, no readable. No urgente.
**No tocar sin instrucción de Tiwan.**

### 4. Colmena P2P: paleta δ (diferido explícito desde AM)

`.col-dot--on`, `.col-titulo`, `.col-input:focus`, `.col-info a`.
**No tocar sin instrucción de Tiwan.**

### 5. Yape: paleta de marca (diferido explícito)

`#7c3aed`/`#a855f7`/`#e9d5ff`. **No tocar sin instrucción de Tiwan.**

### 6. ζ₄ — Cleanup localStorage fallbacks en app.js

Código muerto post-ζ₃. Requiere confirmación de Tiwan sobre tiempo en producción.
**No tocar sin instrucción explícita.**

### 7. γ₄ — SUBFLOW Jaccard semántico

**No recomendado** sin instrucción de Tiwan.

### 8. Umbral Despertar: Advisory v0.6 (Xi físico)

**Bloqueado** — sin fuente de datos Xi real. No fabricar.

### 9. Enriquecimiento oráculo: categorías delgadas

`20_cuerpo_movimiento` y `21_miu_criticas`. Requiere instrucción de Tiwan.

---

## 📐 Estado del jardín (…AW → AX)

*(historia anterior sin cambios; AX añade:)*

- **AX** — ε₂: T16 (bea_ciclo BEA sintético) + T17 (MotorVida gate Ki+cooldown) en
  `coherencia-tests.js`. Export portapapeles `/test-ki export`. `sw.js` → v48.
  Módulo 5 ahora tiene **17 tests** matemáticos de invariantes MIU.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AY)

### Antes de tocar cualquier archivo (OBLIGATORIO)

1. **Verificación de integridad:**
   ```bash
   node --check sw.js js/app.js js/core.js js/miu-engine.js js/coherencia-tests.js js/motor-vida.js
   ```
   Y si hay tokens: `for f in js/*.js; do node --check "$f"; done`
   No asumir que el ✅ de este briefing sigue siendo cierto en el zip recibido.

2. Leer BRIEFING-AX completo (este archivo).

3. No modificar `js/oraculo-data.js` salvo instrucción explícita de Tiwan.

4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.

5. Subir `sw.js`: v48 → **v49** en AY.

6. `data-tema="claro"` **no se cambia** — retrocompatibilidad intencional (ver AL).

7. Opción α₆ (Xi físico) **bloqueada** — no fabricar fórmula sin datos reales.

8. γ₄ (SUBFLOW Jaccard semántico) **no recomendado** sin instrucción de Tiwan.

### Autorización de Tiwan para AY

**Autorización total** — la instancia AY puede elegir libremente qué desarrollar.
Considera tu entorno de tokens: avanza por partes y deja el zip con notas del
briefing para la siguiente instancia. La cadena continúa.

### Opciones disponibles para AY (evaluación autónoma recomendada)

| Opción | Tarea | Blast radius | Autonomía |
|--------|-------|--------------|-----------| 
| **ε₃** | Runner interactivo: panel HTML de tests + filtro por ID | app.js + index.html mínimo | **Autónoma** |
| **ε₄** | T18–T20: tests sonar(), BuscarOraculo, regresión Ki | coherencia-tests.js | **Autónoma** (evaluar complejidad) |
| **δ** | Colmena P2P → paleta MIU | css/estilo.css | Requiere Tiwan |
| **ζ₄** | Cleanup localStorage | app.js | Requiere Tiwan |

**Recomendación autónoma AY:** Si los tokens son suficientes, ejecutar **ε₄**
(T18: test core.sonar() con stub mínimo). Si los tokens son pocos, ejecutar
solo un T18 básico y diferir T19/T20 a AZ.

ρ(x) > 0. 17 invariantes verificados. El jardín sigue creciendo. A10.
