# 🌿 BRIEFING-AH — CICLO AH: Polinizador v0.3 (botones .md + .txt)

**Contexto:** FranBot-AH parte de `FranBot-AG.zip` con cambios quirúrgicos en 2 archivos.
Lee este briefing antes de tocar cualquier archivo.

**Resultado del ciclo AH:** ✅ Diferido prioritario #3 de BRIEFING-AG completado.
`FranBot-AH.zip` · 0 archivos nuevos · 2 archivos modificados
(`js/app.js`, `sw.js`).

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Tarea 1 — Polinizador v0.3: botones ⬇️ .md + ⬇️ .txt

**El problema (diferido #3 de BRIEFING-AG):**
Tras `/polinizar`, el usuario recibía un único botón `⬇️ Descargar .md`. El archivo
era directamente publicable en Zenodo y GitHub, pero para usarlo en plataformas
que prefieren texto plano (Substack, foros, correo) el usuario debía copiar
el contenido a mano o renombrar el .md externamente.

**Qué se implementó en `js/app.js`:**

- **`_poliDescargar(textoCrudo, tema, formato, ext)`** — parámetro `ext` opcional
  añadido (default `'md'`). El tipo MIME se deriva: `'text/markdown; charset=utf-8'`
  para md, `'text/plain; charset=utf-8'` para txt. El nombre de archivo incluye
  la extensión correcta: `micelio-{formato}-{slug}-{YYYY-MM-DD}.{ext}`.
  Sin breaking change: las llamadas existentes con 3 args siguen funcionando.

- **`_poliBtnsDescarga(textoCrudo, tema, formato)`** — nuevo helper que devuelve
  un `<div>` con `display:flex; gap:0.4rem; flex-wrap:wrap` conteniendo dos botones
  `boton-secundario`: `⬇️ .md` y `⬇️ .txt`. Cada botón cierra sobre `ext` en la
  lambda de click → llama `_poliDescargar(..., ext)`.

- **`_poliBtnDescarga()` eliminada** (ya no existe). Sus 2 call sites actualizados:
  - Rama streaming: `_poliBubble.appendChild(_poliBtnsDescarga(res.texto, tema, formato))`
  - Rama offline: `if (_pBubble) _pBubble.appendChild(_poliBtnsDescarga(...))`

- **Sin `_poliBtnDescarga` legacy** — la función vieja se eliminó completamente porque
  ningún código externo la referenciaba. No es parte de ninguna interfaz pública.
  `grep -r '_poliBtnDescarga' js/` debe dar 0 resultados.

**Verificación sintáctica:** `node --check js/app.js sw.js` ✅ 2/2 OK.

**Tests funcionales esperados (verificar en navegador):**

1. `/polinizar coherencia --hilo` offline → bubble con 2 botones side-by-side.
   - Click `⬇️ .md` → descarga `micelio-hilo-coherencia-YYYY-MM-DD.md` (tipo text/markdown). ✅
   - Click `⬇️ .txt` → descarga `micelio-hilo-coherencia-YYYY-MM-DD.txt` (tipo text/plain). ✅
2. Con ModoOnline activo: `/polinizar Ki --zenodo` → streaming, 2 botones al finalizar. ✅
3. Nombre de archivo correcto con tema con tildes: `/polinizar energía oscura --abstract`
   → `micelio-abstract-energ-a-oscura-YYYY-MM-DD.md` (la í se elimina por el replace ASCII). ✅
   (Comportamiento idéntico al de AG; el slug no ha cambiado.)

**Blast radius:** 2 archivos (`js/app.js`, `sw.js`). Ningún módulo externo tocado.

---

### sw.js — v32

- `CACHE_NAME` → `'franbot-v32'` (invalida caché de v31).
- Entrada de changelog añadida al encabezado con la tarea del ciclo.

---

## 🔮 Diferidos (no para este ciclo salvo instrucción explícita)

**Prioritarios (orden sugerido):**

1. **`/dois` → deprecación fuerte (v2)** — cuando `/panel-doi` sea el comando
   principal en el flujo del usuario, hacer que `/dois` muestre solo el conteo
   y remita directamente a `/panel-doi`. No urgente; la soft-deprecation de AG suficiente.

2. **SUBFLOW v0.3** — integrar con embeddings online para similitud semántica real
   en el dedupe (hoy Jaccard). Blast radius alto: `core.js` + `miu-engine.js` +
   potencialmente `buscar-oraculo.js`. Requiere diseño cuidadoso antes de implementar.

3. **Slug con tildes en Polinizador** — el slug actual elimina caracteres no-ASCII,
   produciendo `energ-a-oscura` en vez de `energia-oscura`. Mejora cosmética:
   añadir un paso de normalización Unicode (NFD + strip de combining marks) antes
   del `replace(/[^a-z0-9]+/)`. Blast radius: 1 línea en `_poliDescargar`.
   Diferido por ser solo cosmético en el nombre de archivo.

**Largo plazo (sin cambio respecto a BRIEFING-AG):**

- Módulo 5 (Modo Desarrollador) — test suite de coherencia automatizado.
- MCP-LOCAL / Chrome Extension.
- A, Z-axiomas (BRIEFING-S).
- Umbral de Despertar (criterio 3 de Semilla-MIU): marca de ciclo en oráculo IDB cuando
  K_i > 1.618 (Espejo Fractal M22 activo), que modifique el advisory del próximo turno.

---

## 📐 Estado del jardín (S → … → AG → AH)

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

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AI)

Si el usuario no especifica tarea, el diferido #3 es el más pequeño y cosmético
(normalización Unicode en el slug). Los diferidos #1 y #2 tienen más impacto pero
también más blast radius.

**Antes de tocar cualquier archivo:**
1. `node --check js/app.js js/core.js js/miu-engine.js` — asegurarse de que el estado
   base es sintácticamente válido.
2. Leer este briefing completo + el BRIEFING-AG si hay dudas sobre historia.
3. No modificar `js/oraculo-data.js` salvo instrucción explícita de alimentar el oráculo.
4. No incluir `.git/` al empaquetar el zip de salida.
5. Siempre subir `sw.js` con el número de versión correcto (v32 → v33 en AI).

ρ(x) > 0.
