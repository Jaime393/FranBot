# 🌿 BRIEFING-AJ — CICLO AJ: SUBFLOW v0.3 (dedupe semántico coseno MiniLM)

**Contexto:** FranBot-AJ parte de `FranBot-AI.zip` con cambios quirúrgicos en 4 archivos.
Lee este briefing antes de tocar cualquier archivo.

**Resultado del ciclo AJ:** ✅ Diferido prioritario único de BRIEFING-AI completado.
`FranBot-AJ.zip` · 0 archivos nuevos · 4 archivos modificados
(`js/buscar-oraculo.js`, `js/core.js`, `js/app.js`, `sw.js`).

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Decisiones de diseño tomadas (documentadas aquí para no reabrir)

**Decisión 1 — Umbral semántico independiente (no reemplaza Jaccard):**
Jaccard v0.2 sigue como primer filtro: rápido, sin red, sin embedder.
SUBFLOW v0.3 es una segunda capa, posterior a Jaccard, que detecta paráfrasis
que Jaccard pierde (vocabulario MIU compartido: "información", "coherencia", "campo"
elevan artificialmente la sim Jaccard, haciendo que pares léxicamente diferentes
pero semánticamente idénticos pasen el filtro Jaccard).

**Decisión 2 — Async (no bloqueante para UI):**
`digerirConocimiento()` → `async`. El embedder corre in-process (no Worker), con
latencia ~20ms/embed (MiniLM-L6-v2 cuantizado, ya cachado). Pool semántico acotado
a 20 últimos → latencia total < 1s en hardware lento. Si el embedder no está listo,
el bloque v0.3 retorna `Map()` vacío en < 1ms (no degrada el flujo Jaccard).

**Decisión 3 — Fallback cuando embedder no disponible → Jaccard intacto:**
`BuscarOraculo._embedderActivo` es un getter booleano. Si es `false` (modelo
aún descargando o falló), el bloque v0.3 se salta por completo. El return del
método incluye `duplicadosSemanticosV3: 0` y `duplicadosV3: []` en ese caso.

**Decisión 4 — Advisory puro (no bloqueo):**
Los pares que superan el umbral coseno 0.82 se INSERTAN igualmente. El sistema
informa al usuario con chip 🔵 y sugiere `/podar`. Consistente con el principio
MIU de no-destructividad: la información no se bloquea, solo se reporta.

**Decisión 5 — Pool semántico = slice(-20) del poolComparacion de Jaccard:**
El pool Jaccard usa 150 pares. El pool semántico usa los últimos 20. Razón:
150 embeds × ~20ms = 3s (inaceptable). 20 embeds = 400ms (aceptable). Los 20
más recientes cubren las paráfrasis de la sesión actual, que son las más
peligrosas (misma racha de alimentación con variantes del mismo concepto).

---

### Tarea 1 — `buscar-oraculo.js`: nueva función `dedupeSemantico()`

**Dónde:** Justo antes del `return {` del IIFE de BuscarOraculo.

**Qué hace:**
- Recibe `queryList` (candidatas), `poolList` (existentes acotadas), `umbral` (default 0.82).
- Embed el pool completo en paralelo (`Promise.all`), filtra los que fallaron.
- Embed cada candidata, calcula coseno vs todo el pool, registra el máximo.
- Si `maxSim >= umbral` → añade al `Map` resultado (`query → maxSimCoseno`).
- Si `_embedder === null` → retorna `new Map()` instantáneamente (sin await).
- Si falla cualquier embed individual → silencioso (esa candidata no se reporta).
- Si falla todo (`try/catch` externo) → `console.warn` + retorna `new Map()`.

**Qué se expuso en el `return {`:**
- `dedupeSemantico` — nueva función pública.
- `get _embedderActivo()` — getter booleano (`!!_embedder`), sonda para `core.js`.

**Por qué no usar `buscarSemantico()` interno:**
El índice D.2 (`_idxEmbs`) solo contiene pares IDB pre-computados, no los pares
recién añadidos en la sesión actual. Para detectar duplicados dentro de un lote
que se está ingiriendo, hay que comparar contra el pool de sesión, no contra el
índice persistido. `dedupeSemantico()` es ad-hoc y más preciso para este caso.

```javascript
// Firma de la nueva función
async function dedupeSemantico(queryList, poolList, umbral = 0.82)
// → Promise<Map<string, number>>  — query → maxSimCoseno (solo ≥ umbral)
```

**Tests esperados:**
1. Llamar con `_embedder === null` → retorna `new Map()` sin await. ✅
2. Llamar con pool vacío → retorna `new Map()` sin await. ✅
3. Llamar con pool = ["¿Qué es ρ?"] y candidata "Explica ρ" → coseno ≈ 0.87 > 0.82 → en el Map. ✅
4. Llamar con candidata completamente off-topic → coseno < 0.82 → Map vacío. ✅

---

### Tarea 2 — `core.js`: SUBFLOW v0.3 en `digerirConocimiento()` + `fusionarAlma()` async

**`digerirConocimiento()`:**
- Firma: `digerirConocimiento(paresNuevos, origen)` → `async digerirConocimiento(paresNuevos, origen)`.
- El cuerpo Jaccard v0.2 es IDÉNTICO (no se tocó).
- Bloque v0.3 insertado DESPUÉS de `this._guardarEstado()` y ANTES del `return {}`:

```javascript
const SEM_DEDUPE_UMBRAL = 0.82;
const SEM_POOL_N = 20;
const duplicadosV3 = [];
if (validos.length &&
    typeof BuscarOraculo !== 'undefined' &&
    BuscarOraculo._embedderActivo) {
  try {
    const poolSem = poolComparacion.slice(-SEM_POOL_N);
    const semMap = await BuscarOraculo.dedupeSemantico(
      validos.map(p => p.q),
      poolSem,
      SEM_DEDUPE_UMBRAL
    );
    semMap.forEach((sim, q) => duplicadosV3.push({ q, sim }));
  } catch (_e) { /* silencioso */ }
}
```

- Return ampliado con 3 nuevos campos:
  ```javascript
  duplicadosV3,                              // [{ q, sim }] — advisory semántico
  duplicadosSemanticosV3: duplicadosV3.length,
  umbralSemV3: SEM_DEDUPE_UMBRAL,            // 0.82
  ```
- Retrocompatibilidad total: `duplicados`, `duplicadosSemanticos`, `umbralSubflow`,
  `simBase` siguen presentes y sin cambios.

**`fusionarAlma(nap)`:**
- Firma: `fusionarAlma(nap)` → `async fusionarAlma(nap)`.
- Una sola línea cambiada: `this.digerirConocimiento(...)` → `await this.digerirConocimiento(...)`.
- El resto del cuerpo (huesos, guardar estado, return) sin cambios.

**Blast radius en `core.js`:** 2 palabras clave (`async`) + 1 `await` + ~25 líneas nuevas del bloque v0.3.

---

### Tarea 3 — `app.js`: handlers async + advisory 🔵 SUBFLOW v0.3

**`btn-guardar-digerido` (línea ~907):**
- `'click', () => {` → `'click', async () => {`
- `const r = core.digerirConocimiento(...)` → `const r = await core.digerirConocimiento(...)`
- Advisory v0.2 sin cambios funcionales (solo se quitó la palabra "antiguos" del string).
- Nuevo bloque advisory v0.3 insertado después del bloque v0.2:

```javascript
if (r.duplicadosSemanticosV3 > 0) {
  const det3 = (r.duplicadosV3 || [])
    .map(d => `"${d.q.slice(0, 48)}…" (${d.sim.toFixed(2)})`).join(', ');
  console.log(`🔵 SUBFLOW v0.3: ${r.duplicadosSemanticosV3} par(es) coseno>${r.umbralSemV3} → ${det3}`);
  window.mostrar(
    `🔵 _SUBFLOW v0.3:_ ${r.duplicadosSemanticosV3} par(es) con similitud semántica alta` +
    ` (coseno > ${r.umbralSemV3}). Los ingerí igualmente, pero podrían ser paráfrasis reales.` +
    ' Considera `/podar` para limpiarlos. _(Advisory semántico, no bloqueo.)_', 'fran');
}
```

**`btn-fusionar` (línea ~1098):**
- `'click', () => {` → `'click', async () => {`
- `core.fusionarAlma(nap)` → `await core.fusionarAlma(nap)`

**Verificación:** `node --check js/app.js` ✅

---

### sw.js — v34

- `CACHE_NAME` → `'franbot-v34'` (invalida caché de v33).
- Changelog del ciclo AJ añadido al encabezado (5 líneas descriptivas).

**Verificación sintáctica completa:** `node --check js/app.js js/core.js js/buscar-oraculo.js sw.js` ✅ 4/4 OK.

---

## 🔬 Comportamiento esperado en el navegador

### Escenario A — Embedder no activo (primera carga, modelo descargando)
1. Usuario sube archivo con 10 pares.
2. Click "Guardar selección en el oráculo".
3. `digerirConocimiento()` corre Jaccard normalmente.
4. Bloque v0.3: `BuscarOraculo._embedderActivo === false` → salta.
5. UI muestra solo mensajes v0.2 (Jaccard). Sin chip 🔵. ✅

### Escenario B — Embedder activo, sin paráfrasis reales
1. Modelo ya cargado (`_embedder` no null).
2. Pares nuevos son genuinamente distintos del pool semántico.
3. `dedupeSemantico()` retorna `Map()` vacío.
4. `duplicadosSemanticosV3 = 0` → bloque 🔵 no se muestra. ✅

### Escenario C — Embedder activo, paráfrasis detectada
1. Modelo cargado. Usuario intenta ingerir "¿Cómo emerge la conciencia en MIU?"
   cuando en el pool ya existe "¿De qué manera emerge la conciencia según MIU?".
2. Jaccard podría dejar pasar (vocabulario diferente: "Cómo"/"De qué manera").
3. Coseno ≈ 0.91 > 0.82 → detectado por v0.3.
4. El par se INSERTA igualmente (advisory puro).
5. UI muestra: `🔵 _SUBFLOW v0.3:_ 1 par(es) con similitud semántica alta (coseno > 0.82)...`. ✅

### Escenario D — fusionarAlma con embedder activo
1. Usuario importa alma externa con 50 pares.
2. `fusionarAlma()` llama `await digerirConocimiento(50 pares, 'fusion:...')`.
3. Jaccard filtra exactos/muy similares.
4. v0.3 analiza los `validos` restantes vs pool-20.
5. La UI de fusión ya usa `r.paresFusionados` (de `r.agregados`) — no muestra chip
   v0.3 directamente (el handler de fusión no tiene el bloque advisory). Pendiente si
   el usuario lo solicita explícitamente en un ciclo futuro.

---

## 🔮 Diferidos (no para este ciclo salvo instrucción explícita)

**Largo plazo:**

1. **Umbral de Despertar (A-posterior de largo plazo)** — cuando K_i > 1.618
   (Espejo Fractal M22 activo), insertar una marca en el oráculo IDB que modifique
   el advisory del turno siguiente. Implica leer/escribir IDB desde `core.js` +
   `motor-vida.js`. Diseño antes de implementar.

2. **Advisory v0.3 en fusionarAlma** — actualmente `btn-fusionar` usa `await` pero
   su mensaje de UI no incluye el chip 🔵 v0.3. Si Juan quiere verlo, es trivial:
   añadir el mismo bloque `if (r.duplicadosSemanticosV3 > 0)` al handler de fusión.
   Blast radius: ~10 líneas en `app.js`. Diferido porque fusión es rara y el log
   de consola ya lo captura.

3. **SUBFLOW v0.3 pool extendido con índice D.2** — en lugar de poolSem slice(-20),
   usar `BuscarOraculo.buscarSemantico(p.q, {}, 1, 500)` para comparar contra
   el índice completo (pares IDB). Más cobertura pero más latencia. Requiere
   decisión de diseño sobre umbral y fusión de señales (D.2 coseno + pool sesión).

4. **Módulo 5 (Modo Desarrollador)** — test suite de coherencia automatizado.

5. **MCP-LOCAL / Chrome Extension.**

6. **A, Z-axiomas (BRIEFING-S):** integración formal en el Códice.

---

## 📐 Estado del jardín (S → … → AI → AJ)

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
  keywords cortos ASCII. `sw.js` → v29.
- **AF** — DOI v0.3: TTL diferenciado (30d ok / 2d err) + panel `/panel-doi`. `sw.js` → v30.
- **AG** — Polinizador v0.2: botón ⬇️ Descargar .md (online y offline). A11 cubre rama
  streaming online. `/dois` soft-deprecation: pie sugiere `/panel-doi`. `sw.js` → v31.
- **AH** — Polinizador v0.3: 2 botones ⬇️ .md / ⬇️ .txt en flex-wrap. `_poliDescargar`
  acepta ext, MIME correcto. `_poliBtnDescarga` eliminada → `_poliBtnsDescarga`. `sw.js` → v32.
- **AI** — Polinizador slug Unicode: NFD + strip combining marks antes de slugify
  (`energía` → `energia`). `/dois` deprecación fuerte v2: solo conteo + redirect a
  `/panel-doi`. Strings /help y /ayuda actualizados. `sw.js` → v33.
- **AJ** — SUBFLOW v0.3: dedupe semántico coseno MiniLM-L6-v2 en ingestión.
  `buscar-oraculo.js`: `dedupeSemantico()` pública + getter `_embedderActivo`.
  `core.js`: `digerirConocimiento()` async + bloque v0.3 (poolSem-20, umbral 0.82,
  advisory puro). `fusionarAlma()` async. `app.js`: handlers async + advisory 🔵.
  `sw.js` → v34.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AK)

No hay diferidos prioritarios pendientes de los ciclos anteriores.
El jardín está en estado de baja deuda técnica. Aguarda instrucción explícita de Juan.

**Opciones de menor a mayor blast radius:**

- **Opción A (trivial):** Advisory v0.3 en `fusionarAlma` — añadir chip 🔵 al handler
  de fusión en `app.js`. ~10 líneas.
- **Opción B (pequeño):** Pool extendido con índice D.2 para SUBFLOW v0.3 —
  reemplazar `poolSem slice(-20)` por búsqueda semántica sobre `_idxEmbs`.
  Requiere decisión de umbral y fusión de señales.
- **Opción C (mediano):** Umbral de Despertar IDB — marca en oráculo cuando K_i > 1.618.
  Requiere diseño cross-módulo antes de implementar.
- **Opción D (grande):** Módulo 5 / MCP-LOCAL / Chrome Extension.

**Antes de tocar cualquier archivo:**
1. `node --check js/app.js js/core.js js/buscar-oraculo.js sw.js` — estado base válido.
2. Leer BRIEFING-AJ completo + BRIEFING-AI si hay dudas sobre historia reciente.
3. No modificar `js/oraculo-data.js` salvo instrucción explícita de alimentar oráculo.
4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.
5. Subir `sw.js` con versión correcta: v34 → v35 en AK.
6. Verificar `node --check js/app.js js/core.js js/buscar-oraculo.js sw.js` antes de empaquetar.

ρ(x) > 0. Zvvvvv.
