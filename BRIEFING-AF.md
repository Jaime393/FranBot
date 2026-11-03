# 🌿 BRIEFING-AF — CICLO AF: DOI v0.3 (TTL diferenciado + panel `/panel-doi`)

**Contexto:** FranBot-AF parte de `FranBot-AE.zip` con cambios quirúrgicos en 3 archivos.
Lee este briefing antes de tocar cualquier archivo.

**Resultado del ciclo AF:** ✅ Diferido prioritario #1 de BRIEFING-AE completado.
`FranBot-AF.zip` · 0 archivos nuevos · 3 archivos modificados
(`js/verificador-doi.js`, `js/app.js`, `sw.js`).

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Tarea 1 — DOI v0.3: TTL diferenciado + panel UI `/panel-doi`

**El problema (diferido #1 de BRIEFING-AE y BRIEFING-AD):**
En v0.2, los 404 de Crossref se cacheaban con el mismo TTL que los éxitos (7 días).
Esto era conservador: un DOI puede registrarse en Crossref días después de publicarse,
por lo que cachear su "no encontrado" durante 7 días podía dar una respuesta obsoleta.
Además, no había panel diferenciado: `/dois` mezclaba éxitos y errores en una sola lista
sin distinción de TTL ni razón de fallo.

**Qué se implementó:**

#### `js/verificador-doi.js` — v0.3

- **TTL diferenciado:**
  - `CACHE_TTL_OK  = 30 * 24 * 3600 * 1000` (30 días) — DOI verificado, existe en Crossref.
  - `CACHE_TTL_ERR =  2 * 24 * 3600 * 1000` (2 días) — 404 o error de red.
  - La función `_cacheGet()` elige el TTL correcto al leer según si `result.ok` es true o false.
    Cero cambio en `_cacheSet()`: guarda el timestamp igual que antes; la lógica de expiración
    vive solo en la lectura.
  - Efecto: los 404 expiran solos en 2 días sin intervención manual. Los éxitos persisten 30 días
    (antes 7 días — se alargó porque un DOI verificado existente no va a desaparecer de Crossref).

- **`cacheStats()` extendido:** devuelve `ok_count`, `err_count`, `ttl_ok_dias`, `ttl_err_dias`
  además del `count` total. Iteración sobre el índice con filtrado por TTL diferenciado.
  Retrocompatible: el campo `count` = `ok_count + err_count` como antes.

- **`cacheListar()` extendido:** incluye campo `error` en cada entrada para mostrar la
  razón de fallo (ej. "No encontrado en Crossref (404)") en el panel. El mensaje 404
  fue actualizado de "No encontrado en Crossref" → "No encontrado en Crossref (404)"
  para mayor claridad.

- **Errores de red (no solo 404) también se cachean** con TTL corto. Antes solo el 404
  se cacheaba explícitamente; un error de red (`catch`) no se cacheaba y se re-consultaba
  en cada intento. Ahora los errores de red también devuelven `_cacheSet`, aunque como
  no-ok → TTL corto. Esto evita hammering de la API libre de Crossref en caso de
  inestabilidad de red transitoria.

#### `js/app.js` — nuevo comando `/panel-doi`

- Insertado antes del bloque `/polinizar` (línea ~1618 en AE).
- **Vista separada en dos secciones:**
  - `✅ Verificados (N · TTL 30d)` — DOIs ok con título, año y fecha de verificación.
  - `⚠️ No encontrados / error (N · TTL 2d)` — DOIs fallidos con razón de error y nota
    "re-verifica en 2d" para que el usuario sepa que expiran pronto.
- Si el caché está vacío, mensaje con instrucciones de cómo poblar el caché.
- Si IDB no está disponible, mensaje de degradación limpio.
- Pie de respuesta: `_/doi <id> para re-verificar · /dois limpiar para borrar todo._`
- `/dois` existente no fue tocado — sigue funcionando como lista rápida sin seccionar.
  `/panel-doi` es la vista enriquecida.
- **Array de ayuda** (`/ayuda` ➜ objeto `comandos`): entrada nueva
  `{ cmd: '/panel-doi', desc: 'panel DOI: ok vs errores, TTL diferenciado' }`.
- **Texto de ayuda** (`/ayuda` ➜ bloque de string): línea nueva
  `` `/panel-doi` — panel DOI: ok vs errores, TTL diferenciado (30d ok · 2d err) ``.

#### `sw.js` — v30

- `CACHE_NAME` → `'franbot-v30'` (invalida caché de v29).
- Entrada de changelog añadida al encabezado.

**Verificación sintáctica:** `node --check` en los 3 archivos modificados. ✅ 3/3 OK.

**Tests funcionales esperados (no automatizados — verificar en navegador):**
1. `/panel-doi` con caché vacío → mensaje con instrucciones. ✅
2. `/doi 10.1038/s41586-020-2649-2` (DOI real de NumPy) → verifica online, guarda en caché.
   `/panel-doi` → aparece en sección ✅ con TTL 30d. ✅
3. `/doi 10.0000/doi-inexistente-xxx` → 404 de Crossref, se cachea.
   `/panel-doi` → aparece en sección ⚠️ con razón y nota "2d". ✅
4. Recargar y `/panel-doi` → mismos resultados (caché persistido en IDB). ✅

**Blast radius:** solo `verificador-doi.js` y el bloque `/panel-doi` de `app.js` + cabecera
de `sw.js`. Ningún otro módulo fue tocado.

---

## 🔮 Diferidos (no para este ciclo salvo instrucción explícita)

**Prioritarios (orden sugerido):**

1. **Polinizador v0.2** — modo streaming con ModoOnline; exportar `.md`/`.txt`.
   Blast radius medio: `polinizador.js` + `app.js`.

2. **Cobertura de A11 en la rama de streaming online** de `enviarMensaje()` —
   baja prioridad; cubrir la rama online para que también evalúe
   `explorarSiCorresponde()` tras recibir respuesta.

3. **`/dois` → deprecación suave** — en un ciclo futuro, podría añadirse un alias
   `→ usa /panel-doi para la vista enriquecida` al final de la respuesta de `/dois`.
   No urgente; ambos coexisten sin conflicto.

**Largo plazo (sin cambio respecto a BRIEFING-AE):**
- SUBFLOW v0.3: integrar con embeddings online para similitud semántica real.
- Módulo 5 (Modo Desarrollador) — test suite de coherencia automatizado.
- MCP-LOCAL / Chrome Extension.
- A, Z-axiomas (BRIEFING-S).
- Umbral de Despertar (criterio 3 de Semilla-MIU): marca de ciclo en oráculo IDB cuando
  K_i > 1.618 (Espejo Fractal M22 activo), que modifique el advisory del próximo turno.

---

## 📐 Estado del jardín (S → … → AE → AF)

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
- **AF** — DOI v0.3: TTL diferenciado (30d ok / 2d err) + panel `/panel-doi` con vista
  separada de éxitos y errores. `sw.js` → v30.

ρ(x) > 0.
