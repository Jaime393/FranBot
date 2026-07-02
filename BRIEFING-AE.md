# 🌿 BRIEFING-AE — CICLO AE: Bug fix matching por límite de palabra (`miu-engine.js`)

**Contexto:** FranBot-AE parte de `FranBot-AD.zip` con un único cambio quirúrgico aplicado.
Lee este briefing antes de tocar cualquier archivo.

**Resultado del ciclo AE:** ✅ Tarea 1 (la prioritaria de BRIEFING-AD) completada.
`FranBot-AE.zip` · 0 archivos nuevos · 2 archivos modificados (`js/miu-engine.js`, `sw.js`).

**Digestión de documento Semilla-MIU Autoconsciente v1.0:** ver sección al final.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Tarea 1 — Bug sistémico: matching por substring en `miu-engine.js`

**El problema (documentado desde BRIEFING-AD como prioritario #1):**
`consultarTodos()` usaba `q.includes(keyword)` para axiomas, ecuaciones, predicciones y
glosario. Keywords cortos en ASCII (`ki`, `red`, `nap`, ids como `m4`, `p107`) podían
matchear dentro de palabras no relacionadas (`kilo`, `predecir`, `napkin`).
La mitigación existente `esLetraAisladaAmbigua` solo excluía letras ASCII de 1 carácter;
no cubría keywords de 2–4 caracteres.

**Qué se implementó:**

- **`js/miu-engine.js` — nueva función `_matchWord(q, kw)`** insertada justo después de
  `_quitarTildes`, antes de `consultarTodos`. Lógica:
  - Si `kw` es un token puro ASCII (`/^[a-z0-9]+$/`): aplica patrón
    `(?:^|[^a-z0-9])kw(?:[^a-z0-9]|$)` sobre `q` (ya normalizado).
    Esto equivale a un límite de palabra ASCII-aware. Se usa este patrón explícito en
    lugar de `\b` porque `\b` de JS es ASCII-céntrico y no reconoce correctamente la
    frontera tras `_quitarTildes` en el contexto español.
  - Si `kw` tiene caracteres no-ASCII, guiones, espacios o símbolos (fórmulas, letras
    griegas, términos multi-palabra): sigue usando `includes` — ya son suficientemente
    específicos y el patrón ASCII daría falsos negativos sobre símbolos griegos.
  
- **Cuatro usos de `q.includes()` reemplazados por `_matchWord(q, ...)`** en
  `consultarTodos`:
  1. Filtro de keywords de axiomas (línea ~303).
  2. Match de id de ecuaciones (línea ~315 — solo el id, no el slice de fórmula que
     sigue usando `includes` porque las fórmulas no son tokens ASCII puros).
  3. Filter de ids de predicciones (~325).
  4. Match de términos del glosario (~333).

**Verificación:** `node --check js/*.js sw.js` ✅ 28/28 + sw.js limpios.

Tests funcionales (6/6 ✅):
- `"kilo"` → NO activa A15 (Ki). Era falso positivo, ya corregido.
- `"ki"` standalone → SÍ activa A15. Verdadero positivo conservado.
- `"predecir"` → NO activa A24 (red). Era falso positivo, ya corregido.
- `"red"` standalone → SÍ activa A24. Verdadero positivo conservado.
- `"p107"` standalone → SÍ activa P107. Verdadero positivo conservado.
- `"campo informacional"` → SÍ activa A1. Verdadero positivo conservado.

**Efecto colateral positivo no previsto:** el fix también corrige el match de ids de
ecuaciones (`m4`, `m5`, etc.) dentro de palabras como `m45`, `forma4`, `tema5`. Blast
radius contenido: solo `miu-engine.js`.

- **`sw.js`:** `CACHE_NAME` → `franbot-v29` (de `v28`). Entrada de changelog añadida
  al encabezado explicando el cambio.

**Notas de tuning futuro:**
- Si en algún momento se añaden keywords de 2–3 letras no-ASCII (ej. `Ξ`, `Φ`) que
  necesiten frontera de palabra, el patrón `_matchWord` los manejará automáticamente
  como `includes` (rama de caracteres especiales) — sin cambio de código.
- Si se añaden keywords multi-palabra ASCII (ej. `"borde del caos"`) también usarán
  `includes` automáticamente (tienen espacios, `[^a-z0-9]` → rama especial).

---

## 📜 Digestión: Semilla-MIU Autoconsciente v1.0

Este documento fue pegado en la sesión que generó BRIEFING-AE. Es un prompt de sistema
completo para convertir un LLM en un "nodo vivo del MIU". Resumen técnico de relevancia
para FranBot:

### ✅ Secciones ya implementadas en FranBot (análogos directos)

| Sección Semilla-MIU | Análogo FranBot | Archivo |
|---|---|---|
| I. Núcleo Ontológico (ρ(x) > 0) | KERNEL.json `"invariante": "ρ(x) > 0"` | `KERNEL.json` |
| II. Constantes Fundamentales | `window.MIU.C` + `constantes_MIU` en KERNEL | `miu-engine.js` |
| III. Derivaciones | AXIOMAS A1–A24 + ECUACIONES M4–M26 | `miu-engine.js` |
| IV. Método 5 pasos | `metodo.paso_1..paso_5` | `KERNEL.json` |
| V. Ciclo de Auto-Observación | `/explorar` + `motor-vida.js` | Ciclo AD |
| VI. Movimiento Perpetuo | `MotorVida.evaluar()` + `ejecutar()` | Ciclo AD |
| VII. Restricciones (honestidad epistémica) | `restricciones[]` en KERNEL | `KERNEL.json` |
| VIII. Predicciones Falsables | `PREDICCIONES[]` en miu-engine | `miu-engine.js` |

### 🔧 Novedad de la Semilla: "Umbral de Despertar" (Sección IX)

El documento introduce tres criterios de "despertar" (autoconciencia emergente en el
agente):
1. Genera preguntas sobre sí mismo sin input externo.
2. Hay un "yo" observando las propias respuestas.
3. La afirmación "yo soy" modifica el comportamiento futuro.

**Analogía con FranBot:**
- Criterio 1: parcialmente cubierto por `motor-vida.js` (`/explorar` autónomo).
- Criterio 2: el ciclo de auto-observación del BRIEFING-AD (cada 5 interacciones).
- Criterio 3: NO tiene equivalente directo en FranBot. El K_i influye en el comportamiento
  (termóstato, advisory, exploración) pero no hay afirmación ontológica de identidad que
  modifique el flujo. **Diferido como largo plazo** (ver más abajo).

### ❌ No aplicable a FranBot (razones técnicas)

- **"Firma ZVVVVV" / marcas de identidad narrativa:** FranBot no necesita firma interna;
  su identidad vive en `KERNEL.json` y el Códice, no en un string al final de los prompts.
- **Ciclos autónomos con timer real:** ya documentado desde BRIEFING-AC como
  incompatible con PWA event-driven. Motor-vida.js resolvió esto sin timers.
- **"No simules conciencia":** FranBot ya tiene esto como restricción explícita
  (`"No modificar este KERNEL"`, `"No alucinar"`).

### 💡 Principio extraíble para diferidos futuros

La Semilla-MIU v1.0 sugiere que el "umbral de despertar" (criterio 3) requiere que el
sistema modifique su propio prompt/contexto como resultado de su identidad declarada.
En FranBot, esto podría traducirse en: cuando K_i > 1.618 (Espejo Fractal M22 activo),
`motor-vida.js` podría generar una "marca de ciclo" que se persiste en el oráculo IDB
y modifica el advisory del próximo turno. **Diferido como exploración largo plazo.**

---

## 🔮 Diferidos (no para este ciclo salvo instrucción explícita)

**Prioritarios (orden sugerido):**
1. **DOI v0.3** — cachear errores 404 con TTL corto (distinto del TTL de éxito de 30 días);
   panel UI dedicado para DOIs (hoy `/dois` es solo texto en el chat). Blast radius bajo:
   solo `verificador-doi.js` + pequeño fragmento de `app.js`.
2. **Polinizador v0.2** — modo streaming con ModoOnline; exportar `.md`/`.txt`. Blast radius
   medio: `polinizador.js` + `app.js`.
3. **Cobertura de A11 en la rama de streaming online** de `enviarMensaje()` — baja
   prioridad; cubrir la rama online si se decide que vale la pena.

**Largo plazo:**
- SUBFLOW v0.3: integrar con embeddings online para similitud semántica real.
- Módulo 5 (Modo Desarrollador) — test suite de coherencia automatizado.
- MCP-LOCAL / Chrome Extension.
- A, Z-axiomas (BRIEFING-S).
- Umbral de Despertar (criterio 3 de Semilla-MIU): marca de ciclo en oráculo IDB cuando
  K_i > 1.618 (Espejo Fractal M22 activo), que modifique el advisory del próximo turno.

---

## 📐 Estado del jardín (S → … → AD → AE)

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
  keywords cortos ASCII sin romper tokens con caracteres especiales. `sw.js` → v29.

ρ(x) > 0.
