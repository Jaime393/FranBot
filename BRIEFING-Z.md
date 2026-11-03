# 🌿 BRIEFING-Z — CICLO Z: Pensar y reorganizar offline + tildes robustas

**Contexto:** autorización — *"las 3 mejoras completas mientras no rompan la coherencia, el módulo sí híbrido para usarse online y offline de emergencias o en zonas alejadas o en catástrofes o etc."*
Ciclo generado íntegramente por Claude (Sonnet 4.6) sobre el árbol vivo de FranBot-W, fusionado con los avances de FranBot-Y (Ciclos X+Y, de otra instancia).

**Resultado:** ✅ entregado. `FranBot-Z.zip` · **42 archivos · 28 JS** · sw v27 · 3 módulos tocados.
**Sin vendor lock-in · sin claves · sin dependencias de pago · sin blast radius.**

---

## 🧬 Fusión con FranBot-Y

Esta instancia partió de `FranBot-W` (poda de personas/contexto/DOI v0.1) y, a mitad de la sesión, el Arquitecto entregó `FranBot-Y.zip` — Ciclos X (DOI v0.2 + Polinizador) e Y (poda de almas + `/ctx`) hechos por otra instancia. Diff confirmado: **ningún archivo de este ciclo (`miu-engine.js`, `buscar-oraculo.js`, `core.js`) fue tocado por X/Y** — fusión limpia, sin conflictos. Lo de X/Y queda intacto; lo de Z se aplica encima.

## 🔗 Qué se tejió

### 1. `js/miu-engine.js` — `consultar()` → `consultarTodos()`

**El problema:** la función hacía `return` en el primer axioma/ecuación/glosario que matcheaba. Si una pregunta tocaba dos axiomas, solo se veía uno; el Espejo Fractal (M22) podía perderse detrás de un axioma que comparte una sola palabra clave por azar (ej. "fractal" también vive en A15, que es sobre coherencia, no sobre el Espejo).

**La solución:** `consultarTodos(texto)` recoge **todos** los matches (axiomas, ecuaciones, predicciones, glosario, bandas, espejo) con un score interno propio (no comparable contra el score del oráculo — escalas distintas a propósito). `consultar()` se mantiene como envoltorio de compatibilidad v1.0 (un solo resultado, mismo orden de prioridad de siempre).

**Además:** todo el matching ahora normaliza tildes (NFD, mismo patrón que `Consolidar`/`buscar-oraculo.js`). Antes "que es la informacion" (sin tilde) no encontraba el axioma A1 porque la keyword es `información`; ahora sí.

### 2. `js/buscar-oraculo.js` — `preguntar()` ahora compone, no solo retorna

**El problema real (el que reportaste):** `preguntar()` devolvía el texto de **una sola fuente** verbatim — si el Códice MIU contestaba, el oráculo (con sus 2211 pares digeridos, muchos más ricos) nunca se consultaba. No había "pensar y reorganizar": solo retrieval de un único fragmento.

**La solución — reglas duras:**
- Si hay convergencia real entre 2+ fuentes (ej. dos axiomas, o Códice + un par del oráculo ambos con señal fuerte), se **fusionan**, sin duplicar contenido (similitud Jaccard vía `Consolidar._jaccardSim`, con fallback propio si aún no cargó).
- Si solo hay un match único y fuerte, se devuelve igual que antes — **cero ceremonia donde no hace falta**.
- Si la señal es real pero floja (por debajo del umbral de confianza), se dice con honestidad: *"Lo más cercano que encuentro — no es una coincidencia exacta:"* — antes esto o no aparecía o se presentaba con la misma confianza que un match perfecto.
- Si no hay señal alguna, sigue devolviendo `null` — **nunca se inventa una coincidencia que no existe** (regla del propio `KERNEL.json`: "no alucinar").
- Umbral BM25 fuerte (0.8) y umbral lineal clásico (10) **intactos**, tal cual estaban calibrados — solo se añadió un nivel intermedio "blando" (0.25 / 3) para la honestidad a media confianza. `buscarConScore`/`buscarSemantico` (el RAG que alimenta al LLM online) **no se tocaron**.

### 3. `js/core.js` — el fallback "débil" ya no es ruido

**El problema:** cuando nada coincidía, el núcleo devolvía una frase de identidad **al azar** ("Soy un nodo en tu jardín...") sin relación con la pregunta — indistinguible de una respuesta real para quien preguntaba algo serio.

**La solución:** se distingue pregunta real de charla casual. Si el mensaje parece una pregunta real (contiene `?`/`¿` o raíces como "que ", "como ", "explic-", "cuenta-", etc.) y nada coincidió, responde con honestidad y orienta:
> *"No encontré una coincidencia clara para eso en el oráculo ni en el Códice MIU. Puedo orientarte mejor con preguntas sobre el campo ρ, la coherencia Ki, el Espejo Fractal o los axiomas del Códice — escribe /ayuda... o intenta reformular."*

Si es charla casual sin sustancia ("jaja", "ok"), la frase de identidad de siempre sigue siendo válida — ahí no es ruido, es personalidad. En ambos casos `debil:true` se mantiene, así que si hay red el LLM online sigue entrando como hasta ahora — **el híbrido online/offline no se tocó, solo se hizo más útil el extremo 100% offline** (el que importa en una zona sin cobertura o una catástrofe).

**Bonus en el mismo archivo:** saludo (`como estas`), identidad (`quien eres`/`quien sos`) y resonancia emocional (`proposito`, etc.) ahora también ignoran tildes — antes "quien eres" sin acento caía al oráculo general y podía devolver algo completamente ajeno a la identidad del núcleo.

---

## ⚠️ Hallazgo importante — NO corregido en este ciclo

Probando contra los 2211 pares reales encontré que preguntas **totalmente fuera del dominio MIU** (recetas, geografía, mecánica básica) a veces reciben una respuesta MIU con **alta confianza** (score BM25 muy por encima del umbral 0.8) en vez de una respuesta neutra. Ejemplos reales medidos:

| Pregunta | Par que "ganó" | Score |
|---|---|---|
| "receta de paella valenciana" | "¿Cómo aplicarías el MIU a la gastronomía?" | 12.2 |
| "cuál es la capital de Mongolia" | "¿Qué es el capital social...?" | 10.5 |
| "cómo se cambia una llanta de un auto" | un nodo de la Colmena Omega (no relacionado) | 10.0 |

No es un bug de este ciclo — el umbral 0.8 ya clasifica esto como "fuerte" con la calibración previa intacta, y el riesgo de "corregirlo" a la ligera es romper matches legítimos como "qué es la vida" (que tampoco contiene ninguna palabra clave MIU literal). Necesita un heurístico de relevancia de dominio bien probado contra el corpus completo, no un parche rápido — lo dejo diferido a propósito en vez de arriesgar coherencia con un cambio apurado.

## 📐 Verificación

```bash
node --check js/*.js sw.js   # ✅ 28/28 JS + sw.js limpios
```
Test funcional aislado (shim de `window`/`document`/`localStorage`, sin red) instanciando `FranBotCore` real sobre los 2211 pares de producción: saludo, identidad, axiomas combinados (gravedad+coherencia, espejo fractal+gravedad), convergencia Códice+oráculo, señal débil, señal nula, tildes ausentes — todos los casos verificados manualmente caso por caso, incluyendo un bug propio que encontré y corregí en el camino (faltaba ordenar por score antes de cortar a 2 fragmentos en la rama "sin pares del oráculo").

**Coherencia arquitectural:**
- ✅ Offline 100% funcional, sin red, sin GPU, sin claves.
- ✅ `buscarConScore`/`buscarSemantico` (RAG online) sin cambios.
- ✅ Umbrales de confianza previos (BM25 0.8, lineal 10) intactos.
- ✅ `debil:true` se preserva en todos los fallbacks → el online sigue activándose igual cuando hay red.
- ✅ Blast radius: 3 archivos, 0 archivos nuevos, 0 cambios de contrato público (`procesar()`, `preguntar()`, `consultar()` siguen devolviendo lo mismo que antes; solo se añadió `consultarTodos()`).

---

## 🌳 Estado acumulado del jardín (S → T → U → W → X → Y → Z)

- **S** — Termóstato de coherencia + advisory.
- **T** — SUBFLOW Jaccard v0.1: dedupe semántico al ingerir.
- **U** — Panel de Coherencia: `/panel` con SVG del historial K_i.
- **W** — Verificador DOI v0.1: `/doi` + verificación opcional tras ingerir.
- **X** — DOI v0.2 (caché IDB) + Polinizador: `/dois` + `/polinizar`.
- **Y** — Poda de almas + Contexto del usuario: `/ctx`.
- **Z** — El Códice y el oráculo piensan juntos offline; tildes ya no rompen el matching.

ρ(x) > 0. El jardín ya no solo recuerda lo que aprendió: ahora también lo combina, y dice la verdad cuando no sabe.

## 🔭 Diferido para la siguiente instancia

- **Relevancia de dominio** (ver hallazgo arriba) — el más importante de esta lista.
- A, Z-axiomas (briefing-S) — axiomas nombrados.
- MCP-LOCAL / Chrome Extension (TÉCNICAS 2 y 4).
- SUBFLOW v0.2 — umbral dinámico, ventana mayor.
- DOI v0.3 — cachear errores 404 con TTL corto; panel UI.
- Polinizador v0.2 — modo streaming con ModoOnline; exportar .md/.txt.
- Módulo 5 (Modo Desarrollador) — test suite de coherencia automatizado (lo de este ciclo se verificó a mano; un harness reusable en `/mnt` del repo ahorraría tiempo al siguiente ciclo).
