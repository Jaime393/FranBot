# 🌿 BRIEFING-AS — CICLO AS: 🛑 bugfix crítico `class FranBotCore` + γ₃ SUBFLOW v0.3 índice D.2

**Contexto:** FranBot-AS parte de `FranBot-AR.zip` con cambios en 3 archivos
(`js/core.js`, `js/buscar-oraculo.js`, `sw.js`). 0 archivos nuevos.
Lee este briefing antes de tocar cualquier archivo.

**Origen del ciclo:** Tiwan instruyó avanzar libremente bajo principios MIU (ρ(x) > 0),
eligiendo con coherencia según el árbol de opciones de BRIEFING-AR, hasta agotar
presupuesto de tokens, derivando el resto a la siguiente instancia.

**Resultado del ciclo AS:**
🛑 **Bugfix crítico (no estaba en el árbol de opciones, prioridad absoluta):**
`js/core.js` llegó a esta instancia **sin la línea `class FranBotCore {`** —
el `constructor()` colgaba huérfano. `node --check js/core.js` fallaba
(`SyntaxError: Unexpected token '{'`). La app entera no cargaba. Restaurado
antes de evaluar cualquier opción del árbol AS.
✅ γ₃ implementado: SUBFLOW v0.3 pool extendido — nueva función
`dedupeSemanticoIndexado()` en `buscar-oraculo.js` compara contra el índice D.2
completo (todos los pares IDB indexados) en vez del pool acotado a 20.
Fallback automático e idéntico al comportamiento v0.3 si el índice no está listo.
`sw.js` → v43.

---

## 🛑 Bugfix crítico — `class FranBotCore` faltante

**Diagnóstico:** Al recibir `FranBot-AR.zip` y correr la verificación base de rigor
(regla dura: `node --check` antes de tocar nada), `js/core.js` falló:

```
js/core.js:12
  constructor() {
                ^
SyntaxError: Unexpected token '{'
```

`core.js` tenía el bloque de constantes (`_PHI_THRESH`, `_DESP_KEY`) seguido
de dos líneas vacías y directamente `constructor() { ... }` — sin ningún
`class NombreClase {` que lo contenga. El archivo termina con
`window.franbot = new FranBotCore();`, confirmando que el nombre de clase
correcto es `FranBotCore`.

**¿Origen?** El BRIEFING-AR (sección "Verificación completa") afirma
`node --check sw.js js/app.js js/core.js js/buscar-oraculo.js js/miu-engine.js` ✅ 5/5 OK
al cierre de ese ciclo. Esto sugiere que `core.js` estaba íntegro al cerrar AR,
y la corrupción ocurrió **después** — muy probablemente en el empaquetado del
zip de salida AR→AS (o en algún paso de transferencia/edición manual intermedio).
**No hay evidencia de que el bug viniera de una edición de contenido real** —
es estructural (una línea completa ausente), no un error de lógica.

⚠️ **Recomendación para Tiwan:** si esto se repite, valdría la pena revisar el
proceso de empaquetado del zip de salida (¿se usa algún editor que pueda
truncar líneas en archivos grandes? ¿algún paso de copy-paste manual entre
herramientas?). Por ahora, **regla nueva para todas las instancias futuras**:
nunca confiar ciegamente en el "✅ N/N OK" de un briefing anterior — repetir
`node --check` sobre el estado recibido es obligatorio y debe hacerse antes
de leer siquiera el árbol de opciones, porque el zip pudo corromperse en tránsito.

**Fix aplicado en `js/core.js` (líneas ~9-12):**

```javascript
// ANTES
const _DESP_KEY   = 'miu-despertar';  // clave localStorage; valor: {ts, ki}


  constructor() {

// DESPUÉS
const _DESP_KEY   = 'miu-despertar';  // clave localStorage; valor: {ts, ki}

class FranBotCore {
  constructor() {
```

Una sola línea insertada (`class FranBotCore {`), cero líneas de lógica tocadas.
Blast radius mínimo posible para un bug de esta severidad.

**Verificación:**
- `node --check js/core.js` ✅ (antes: SyntaxError)
- Todo `js/*.js` (24 archivos) verificado individualmente tras el fix: 24/24 OK ✅
- `manifest.json` y `KERNEL.json`: JSON válido ✅ (no relacionado, chequeo de rutina)

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Decisión γ₃ — SUBFLOW v0.3 pool extendido (índice D.2)

**Motivación (de BRIEFING-AR):** `dedupeSemantico()` (SUBFLOW v0.3, desde AO/AJ)
compara cada candidato a ingerir contra un pool acotado a los últimos 20 pares
(`core.js` pasa `poolComparacion.slice(-20)`), re-embebiendo ese pool en cada
llamada — necesario porque ese pool no tiene embeddings precomputados. Esto
deja un punto ciego: paráfrasis de algo ingerido hace 200 turnos no se detecta.

Desde Phase D.2, `buscar-oraculo.js` ya mantiene `_idxEmbs` — un índice en
memoria con **todos** los pares IDB indexados (Float32, precomputado, cargado
al arranque y actualizado incrementalmente por D.2b). Ese recurso ya existe
y no se estaba reutilizando para el dedupe de ingestión.

**Implementación en `js/buscar-oraculo.js` (nueva función, ~40 líneas):**

```javascript
async function dedupeSemanticoIndexado(queryList, umbral) {
  umbral = typeof umbral === 'number' ? umbral : 0.82;
  if (!_embedder || !_idxEmbs || !_idxEmbs.length || !queryList.length) return null;
  try {
    const resultado = new Map();
    await Promise.all(queryList.map(async q => {
      try {
        const qEmb = await _embedTexto(q);
        let maxSim = 0;
        for (const entry of _idxEmbs) {
          const s = _coseno(qEmb, entry.emb);
          if (s > maxSim) maxSim = s;
        }
        if (maxSim >= umbral) resultado.set(q, maxSim);
      } catch (_e) { /* fallo por candidato: silencioso */ }
    }));
    return resultado;
  } catch (e) {
    console.warn('BuscarOraculo.dedupeSemanticoIndexado: fallo índice D.2, fallback pool v0.3:', e.message || e);
    return null;
  }
}
```

Expuesta en el `return` del módulo junto a un getter `_idxEmbsActivo`
(análogo a `_embedderActivo`, sonda para que `core.js` sepa si el índice
está listo sin acceder a `_idxEmbs` directamente — encapsulación intacta).

**Implementación en `js/core.js`:** el bloque SUBFLOW v0.3 ahora intenta primero
`dedupeSemanticoIndexado` (si `_idxEmbsActivo`); si devuelve `null` (índice no
cargado, vacío, o fallo), cae exactamente en el `dedupeSemantico` con pool de 20
de siempre — **degradación cero, mismo comportamiento que antes de γ₃** cuando
el índice no está disponible (p.ej. justo después de un Reset, antes de que
D.2 termine de indexar).

Se añadió un campo nuevo y aditivo al resultado de `digerirConocimiento()`:
`fuenteSemV3: 'indice-d2' | 'pool-20' | null` — diagnóstico interno de qué
camino se usó. **No rompe nada:** `app.js` (único consumidor) solo lee
`duplicadosV3`, `duplicadosSemanticosV3`, `umbralSemV3` — ninguno renombrado,
ninguno eliminado. `fuenteSemV3` queda disponible para un futuro `/ctx` o `/rag`
si Tiwan quiere mostrarlo, pero `app.js` no se tocó este ciclo.

**Cobertura real:** depende de cuántos pares estén indexados en IDB al momento
de la ingestión. Si `_idxEmbs` tiene, p.ej., 800 pares indexados, la detección de
paráfrasis ahora cubre esos 800 en vez de los últimos 20 — sin coste adicional
de re-embed (1 embed por candidato igual que antes; la comparación contra el
índice es producto punto en memoria, ya pagado por D.2).

**Por qué no se tocó `app.js`:** el briefing AR acotaba el blast radius de γ₃ a
`buscar-oraculo.js` + `core.js`. El campo `fuenteSemV3` es aditivo y no requiere
cambios en el consumidor para no romper nada — coherente con "mínimo blast radius
por cambio".

**Verificación:**
- `dedupeSemanticoIndexado` aparece en `buscar-oraculo.js`: 3 veces (función,
  comentario de export, export) ✅
- `_idxEmbsActivo` aparece en `buscar-oraculo.js` (getter) y `core.js` (uso) ✅
- `node --check js/buscar-oraculo.js js/core.js` ✅ 2/2 OK

---

### `sw.js` — v43

`CACHE_NAME` → `'franbot-v43'`. Changelog del ciclo AS añadido al encabezado,
incluyendo el bugfix crítico documentado con prioridad visual (🛑).

**Verificación completa del ciclo:**
- `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js js/miu-engine.js` ✅ 5/5 OK
- `node --check` sobre los 24 archivos de `js/*.js` individualmente: 24/24 OK ✅
- `class FranBotCore {` presente y única en `core.js` ✅
- `CACHE_NAME = 'franbot-v43'` ✅
- `manifest.json`, `KERNEL.json`: JSON válido ✅
- `KERNEL.json` sin modificar (inmutabilidad autodeclarada respetada, igual que AD) ✅
- `js/oraculo-data.js` sin modificar ✅

---

## 🔮 Diferidos (Ciclo AT o posterior)

### 1. Chrome 16px: auditoría restante (sin cambios desde AR)

| Elemento | Tamaño actual | Contexto | Acción sugerida |
|---|---|---|---|
| `.eyebrow` | 0.68rem | display chrome — etiqueta decorativa | Diferido (chrome, no readable) |
| `.bib-nombre` | 0.8rem | nombre ítem (primario) | Opcional: subir a 0.875rem (β₇) |

**β₇ requiere instrucción explícita de Tiwan** — no es una decisión de coherencia
libre, es preferencia de producto sobre un elemento ya legible.

### 2. Colmena P2P: unificación paleta δ (diferido explícito desde AM)

`.col-dot--on` (`#10b981`), `.col-titulo` (`#f59e0b`), `.col-input:focus`,
`.col-info a`. **No tocar sin instrucción de Tiwan.**

### 3. Yape: paleta de marca (diferido explícito)

`#7c3aed`/`#a855f7`/`#e9d5ff` — identidad corporativa. **No tocar sin instrucción.**

### 4. Umbral Despertar: Advisory v0.6 (Xi físico) — nota de coherencia importante

Refinar `Xi_est = D_f / ℓ_0` (actualmente conceptual) a algo "más físico"
requeriría acceso al gradiente real del campo ρ(x) en el dispositivo — dato
que **no existe** en este entorno (no hay sensor, no hay campo medido).
Cualquier fórmula que se presente como "más físicamente fundamentada" sin ese
dato sería fabricar precisión sin evidencia — **viola la restricción MIU propia
de Tiwan** ("No afirmar sin evidencia. Si no hay dato, declarar NO SÉ").
A diferencia de α₅ (AR), que refinó una fórmula existente con una constante ya
fundacional del marco (φ), α₆ no tiene un candidato análogo legítimo sin nuevos
datos de entrada. **Esta opción queda bloqueada, no solo diferida, hasta que
Tiwan decida qué fuente de datos usar para Xi (o decida que el placeholder
conceptual actual es intencional y queda así).**

### 5. Migración Despertar a IDB

Persistir el evento `miu-despertar` junto con los pares del oráculo en
`idb-store.js` — blast radius mayor. Posible ciclo AT+.

### 6. SUBFLOW v0.3 pool extendido — ✅ completado en AS (γ₃)

Posible follow-up menor (γ₄, no evaluado este ciclo): el mismo patrón de
`dedupeSemanticoIndexado` podría aplicarse al SUBFLOW Jaccard v0.2 principal
(líneas ~262-330 de `core.js`, hoy puramente léxico) como capa semántica
adicional. No se intentó en AS — requeriría decidir si vale la pena el costo
de embeds en el flujo principal de ingestión (hoy 100% léxico, sin esperar
ningún modelo). Queda como idea, no como compromiso.

### 7. Módulo 5 — test suite de coherencia automatizado

Sin cambios desde ciclos anteriores. Feature de mayor alcance, no evaluada
este ciclo (presupuesto de tokens se priorizó al bugfix + γ₃).

---

## 📐 Estado del jardín (…AR → AS)

*(historia anterior sin cambios; AS añade:)*

- **AS** — 🛑 Bugfix crítico: restaurada `class FranBotCore {` faltante en
  `core.js` (la app no cargaba; corrupción probablemente del empaquetado
  AR→AS, no de contenido). γ₃: SUBFLOW v0.3 pool extendido —
  `dedupeSemanticoIndexado()` nueva en `buscar-oraculo.js`, compara contra
  índice D.2 completo (todos los pares IDB indexados) con fallback automático
  al pool de 20 si el índice no está listo. `core.js`: campo aditivo
  `fuenteSemV3` en `digerirConocimiento()`. `sw.js` → v43.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AT)

**Antes de tocar cualquier archivo:**
1. **Obligatorio, sin excepción:** `node --check sw.js js/app.js js/core.js
   js/buscar-oraculo.js js/miu-engine.js` Y además, si el tiempo lo permite,
   los 24 archivos de `js/*.js` uno por uno. **No asumir que el "✅ N/N OK"
   de este briefing sigue siendo cierto en el zip que recibas** — AS mismo
   llegó con `core.js` corrupto a pesar de que AR certificó 5/5 OK. Verificar
   primero, leer briefing después, tocar código al final.
2. Leer este BRIEFING-AS completo.
3. No modificar `js/oraculo-data.js` salvo instrucción explícita.
4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.
5. Subir `sw.js` con versión correcta: v43 → v44 en AT.
6. El key `data-tema="claro"` **no se cambia** — retrocompatibilidad intencional (ver AL).
7. Opción α₆ (Xi físico) está **bloqueada** (no solo diferida) hasta que Tiwan
   aporte una fuente de datos real o confirme que el placeholder actual es
   intencional — ver sección de Diferidos #4 arriba. No fabricar una fórmula
   "más física" sin ese insumo.

**Opciones disponibles para AT (menor a mayor blast radius):**

- **Opción β₇ (trivial):** Chrome 16px cierre — `.bib-nombre` (0.8rem → 0.875rem).
  Requiere instrucción explícita de Tiwan.
- **Opción γ₄ (pequeño, especulativo):** extender `dedupeSemanticoIndexado` como
  capa semántica opcional sobre el SUBFLOW Jaccard v0.2 principal. Requiere
  decisión de diseño: ¿vale el costo de embeds en el flujo principal?
- **Opción δ (mediano):** Colmena P2P → paleta MIU. Requiere instrucción de Tiwan.
- **Opción ε (features):** Módulo 5 — test suite automatizado de coherencia.
- **Opción ζ (features):** Migración Despertar a IDB — blast radius mayor, recompensa alta.

ρ(x) > 0. Un campo que no se verifica a sí mismo antes de actuar puede operar
sobre una configuración corrupta sin saberlo — la integridad estructural precede
a la coherencia funcional. El índice D.2, antes solo motor de búsqueda, ahora
también es memoria inmunológica: el corpus completo vigila sus propias paráfrasis.
