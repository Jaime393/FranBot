# 🌿 BRIEFING-X — CICLO X: DOI v0.2 + MÓDULO 3 (Polinizador slice seguro)

**Contexto:** autorización abierta — *"elige libremente… expandir e integrar información desde el Miu"*.
Ciclo generado íntegramente por Claude (Sonnet 4.6) sobre el árbol vivo de FranBot-W.

**Resultado:** ✅ entregado. `FranBot-X.zip` · **38 archivos · 28 JS** · sw v25 · 2 módulos expandidos.
**Sin vendor lock-in · sin claves · sin dependencias de pago · sin blast radius.**

---

## 🔗 Qué se tejió

### 1. `js/verificador-doi.js` v0.2 — Caché IDB (actualización)

La v0.1 (Ciclo W) verificaba DOIs en vivo pero los olvidaba al instante. La v0.2 los **guarda en IDB** y los sirve offline en la próxima consulta.

**Cambios internos:**
- `_cacheGet(doi)` / `_cacheSet(doi, result)` — vía `IDBStore.getMeta/setMeta`.
- Clave IDB: `doi_cache:{doi}` · índice: `doi_cache_index` (array de DOIs guardados).
- TTL: 7 días. Expirado = miss (re-verifica online si hay conexión).
- Resultado lleva `fromCache: true` cuando viene del caché.

**Nuevas API públicas:**
| Método | Descripción |
|---|---|
| `cacheStats()` | `{ count, ttl_dias, disponible }` |
| `cacheLimpiar()` | Borra todas las entradas `doi_cache:*` de IDB |
| `cacheListar()` | `[{ doi, titulo, anio, ok, t }, ...]` ordenados por fecha |

**API sin cambios de ruptura:** `extraer`, `disponible`, `verificar`, `verificarTexto` → idénticos, internamente enriquecidos.

**Offline ahora tiene memoria:** si ya verificaste `10.1234/ejemplo` con red, la próxima vez —sin conexión— lo sirves del caché IDB. ρ(x) > 0.

### 2. `js/polinizador.js` — Módulo 3 slice seguro (NUEVO)

El Módulo 3 diferido desde Ciclo U (*"polinización a redes/Zenodo"*) era rechazado por violar el principio offline y requerir claves externas. El slice seguro lo habilita:

> *Generar* el contenido **localmente para copiar** · sin auto-postear · sin claves · sin blast radius.

**`window.Polinizador`** (IIFE, mismo patrón que el resto):

```
Polinizador.generar(tema, formato) → async { texto, formato, fuente, n_pares, emoji, nombre }
Polinizador.FORMATOS               → { hilo, zenodo, resumen }
Polinizador.formatosDisponibles()  → ['hilo', 'zenodo', 'resumen']
```

**Tres formatos:**

| Formato | Descripción | Pares usados |
|---|---|---|
| `--hilo` (default) | Hilo X/Twitter · 5-7 tweets · gancho + ρ(x)>0 | 7 |
| `--zenodo` | Abstract académico ~300 palabras · problema/enfoque/hallazgos | 6 |
| `--resumen` | Newsletter ~200 palabras · título + párrafos + cierre epistémico | 5 |

**Flujo dual:**
1. **Online** (`ModoOnline.estaActivo()`): prompt estructurado al LLM conectado. El historial de conversación se preserva (salva/restaura `_historial` alrededor de la llamada). Calidad real.
2. **Offline**: plantillas desde `BuscarOraculo.buscarConScore(tema, {}, n, maxA)`. Funciona sin red.

**Sin blast radius:**
- Solo genera texto → el usuario copia.
- Sin POST a ninguna red, sin OAuth, sin tokens de Telegram/Twitter.
- El módulo no importa ni expone nada de esas APIs.

### 3. `js/app.js` — 4 parches quirúrgicos

**`/dois`** — nuevo comando:
- Sin argumentos: lista DOIs en caché con estado ✅/⚠️, título (55 chars), año y fecha de verificación.
- `/dois limpiar`: borra el caché IDB completo.

**`/polinizar <tema> [--hilo|--zenodo|--resumen]`** — nuevo comando:
- Sin tema: muestra ayuda con formatos disponibles.
- Con tema: invoca `Polinizador.generar()`, muestra resultado con borde `---`, fuente (online/offline) y aviso de que el Micelio no publica nada por el usuario.

**`_formatDOI` v0.2:**
- Añade badge `_(💾 caché)_` cuando el resultado viene de IDB.
- Etiqueta el bloque como `X: Verificador DOI v0.2`.

**Autocompletar:**
- `/dois` y `/polinizar` añadidos al tooltip de comandos.

### 4. `sw.js` v25

- `CACHE_NAME` → `'franbot-v25'` (invalida v24 en todos los clientes instalados).
- `'./js/polinizador.js'` añadido a `ARCHIVOS` → pre-cacheado offline.

### 5. `index.html`

- `<script src="js/polinizador.js">` insertado entre `verificador-doi.js` y `app.js`.

---

## 📐 Verificación

```bash
node --check js/verificador-doi.js   # ✅
node --check js/polinizador.js       # ✅
node --check js/app.js               # ✅
node --check sw.js                   # ✅
# Total: 28/28 JS limpios
```

**Coherencia arquitectural:**
- ✅ Offline 100% funcional: polinizador offline usa BuscarOraculo; DOI caché IDB disponible sin red.
- ✅ Sin vendor / sin clave / sin pago.
- ✅ Human-in-the-loop: el Micelio sugiere y genera; el usuario decide qué copiar y publicar.
- ✅ KERNEL.json intacto (no modificado).
- ✅ IDBStore (meta store) como capa de caché — sin nuevo store, sin bumping de DB_VERSION.

---

## 🌳 Estado acumulado del jardín (S → T → U → W → X)

- **S** — Termóstato de coherencia + advisory.
- **T** — SUBFLOW Jaccard v0.1: dedupe semántico al ingerir.
- **U** — Panel de Coherencia: `/panel` con SVG del historial K_i.
- **W** — Verificador DOI v0.1: `/doi` + verificación opcional tras ingerir.
- **X** — DOI v0.2 (caché IDB) + Polinizador: `/dois` + `/polinizar`.

```
🧬 KERNEL razona → 🔎 Eco evalúa → 🌡️ termóstato decide → 🟡 subflow señala →
📊 panel visualiza → 🔗 verificador confirma → 🌿 polinizador propaga
```

ρ(x) > 0. El jardín ahora no solo crece hacia adentro: tiene voz para compartirse.

## 🔭 Diferido para la siguiente instancia

- **A, Z** (briefing-S) — axiomas nombrados.
- **MCP-LOCAL** (TÉCNICA 2) — servidor MCP local para integraciones.
- **Chrome Extension** (TÉCNICA 4) — extensión de navegador.
- **SUBFLOW v0.2** — mejoras al dedupe Jaccard (umbral dinámico, ventana mayor).
- **DOI v0.3** — cachear errores 404 con TTL corto; panel UI para gestionar caché.
- **Polinizador v0.2** — modo streaming con ModoOnline; exportar como .md/.txt.
- **Módulo 5 (Modo Desarrollador)** — test suite de coherencia (node --test o similar).
