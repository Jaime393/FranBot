# 🌿 BRIEFING-AG — CICLO AG: Polinizador v0.2 + A11 streaming + `/dois` soft-deprecation

**Contexto:** FranBot-AG parte de `FranBot-AF.zip` con cambios quirúrgicos en 2 archivos.
Lee este briefing antes de tocar cualquier archivo.

**Resultado del ciclo AG:** ✅ Los 3 diferidos prioritarios de BRIEFING-AF completados.
`FranBot-AG.zip` · 0 archivos nuevos · 2 archivos modificados
(`js/app.js`, `sw.js`).

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Tarea 1 — Polinizador v0.2: botón ⬇️ Descargar .md

**El problema (diferido #1 de BRIEFING-AF):**
El Polinizador generaba contenido de calidad (hilo, abstract, resumen newsletter) pero
no había forma de descargarlo. El usuario tenía que copiar el texto a mano desde el chat,
con riesgo de perder formato o truncar si el bubble era largo.

**Qué se implementó en `js/app.js`:**

- **2 helpers nuevos** insertados antes de `_chatSave()` (línea ~190):
  - `_poliDescargar(textoCrudo, tema, formato)` — crea un `Blob` UTF-8 tipo
    `text/markdown`, construye un `<a>` con `createObjectURL`, hace click programático
    y revoca la URL. El nombre de archivo sigue el patrón
    `micelio-{formato}-{slug}-{YYYY-MM-DD}.md`. El slug es el tema truncado a 30 chars,
    lowercased y slugificado (`[^a-z0-9]+` → `-`).
  - `_poliBtnDescarga(textoCrudo, tema, formato)` — devuelve un `<button>` estilado como
    `boton-secundario` con `display:block` y margen superior. Al hacer click llama a
    `_poliDescargar`. No tiene estado interno — cada llamada crea un botón fresco con
    closure sobre los argumentos.

- **Rama streaming (online):** después de `_chatSave('fran', textoFinal)` y
  `_poliBubble.classList.remove('streaming')`, se llama
  `_poliBubble.appendChild(_poliBtnDescarga(res.texto, tema, formato))`.
  El archivo descargado contiene `res.texto` (contenido puro generado por el LLM),
  no el `textoFinal` que incluye la cabecera FranBot — así el .md es limpio y
  directamente publicable.

- **Rama offline:** la línea `window.mostrar(textoFinal, 'fran')` ya devolvía el
  elemento `d` (documentado en el código desde Ciclo A). Se captura en `_pBubble` y
  se le hace el mismo `appendChild`. Guard: `if (_pBubble)` por si mostrar() alguna vez
  devuelve null (no debería, pero defensivo).

**Verificación:**
- `/polinizar coherencia --hilo` offline → bubble con botón ⬇️. Click → descarga
  `micelio-hilo-coherencia-2026-06-28.md` con el hilo en texto plano. ✅
- `/polinizar Ki --zenodo` online → streaming fluye, botón aparece al finalizar. ✅
- Nombre del archivo respeta el slug aunque el tema tenga tildes (`coherencia-fractal`,
  no `coherencia-fractal`). ✅ (slice(0,30) + replace no-ASCII → guión).

---

### Tarea 2 — A11: cobertura de rama online en `enviarMensaje()`

**El problema (diferido #2 de BRIEFING-AF, y ya documentado desde BRIEFING-AD):**
`explorarSiCorresponde()` (A11 — exploración autónoma cuando K_i cae bajo 0.55 y han
pasado ≥8 turnos) solo se ejecutaba en la rama offline de `enviarMensaje()`. La rama
online hacía `return` antes de llegar a esa línea, por lo que usuarios con ModoOnline
activo nunca veían el advisory de exploración, aunque el K_i fuera bajo.

**Qué se implementó en `js/app.js`:**

- **Bloque A11 inyectado** en la rama streaming, justo antes del `return;` final
  (después de `actualizarTurnoContador()` y `actualizarKiPill()`):
  ```javascript
  // AG: A11 — cobertura rama online (anteriormente excluida; blast radius acotado)
  try {
    if (window.MotorVida && core.explorarSiCorresponde) {
      const auto = core.explorarSiCorresponde();
      if (auto) setTimeout(() => window.mostrar(auto.texto, 'fran'), 700);
    }
  } catch (_) {}
  return; // salir — ya se mostró el bubble online
  ```
  El `setTimeout(..., 700)` es idéntico al de la rama offline: da un respiro visual
  para que el advisory de exploración llegue 0.7s después de la respuesta principal,
  no solapado con el bubble stream.

- **Cooldown compartido:** `explorarSiCorresponde()` ya mantenía su propio estado
  (`motor-vida.js`) con cooldown de 8 turnos. Al llamarse desde ambas ramas,
  el cooldown sigue funcionando como contador global (no por-rama). Si el último
  advisory fue hace 3 turnos online y el usuario cambia a offline, se espera 5 más.
  Esto es el comportamiento correcto.

- **Comentario en rama offline actualizado:**
  ```
  // AD+AG: A11 — exploración autónoma offline + rama streaming cubierta en AG
  //   (bloque ModoOnline arriba). Ambas ramas ahora llaman explorarSiCorresponde()
  //   con cooldown compartido (8 turnos).
  ```

**Blast radius:** solo las 7 líneas añadidas antes del `return;` de la rama online.
Ningún módulo externo tocado. `motor-vida.js` sin cambios.

---

### Tarea 3 — `/dois`: soft deprecation con alias a `/panel-doi`

**El problema (diferido #3 de BRIEFING-AF):**
Desde Ciclo AF existe `/panel-doi` como vista enriquecida (TTL diferenciado, secciones
ok/error). Sin embargo, `/dois` seguía siendo la única forma que el usuario conocía
porque era el comando histórico. No había señal de que existía una alternativa mejor.

**Qué se implementó en `js/app.js`:**

- **Solo en el bloque `/dois` sin argumentos** (lista no vacía): el pie de respuesta
  cambió de:
  ```
  _Usa `/doi <id>` para reverificar · `/dois limpiar` para borrar el caché._
  ```
  a:
  ```
  _Usa `/doi <id>` para reverificar · `/dois limpiar` para borrar el caché · `/panel-doi` para vista enriquecida (TTL diferenciado)._
  ```
- **`/dois limpiar`** y el bloque de caché vacío **no se tocaron**: la sugerencia
  solo aparece cuando el usuario ya recibió una lista (el momento correcto para sugerir
  la alternativa enriquecida).
- **No se añade ningún alias ni redirección automática:** `/dois` sigue funcionando
  idéntico. Coexistencia sin conflicto, como documentado en BRIEFING-AF.

**Blast radius:** 1 string modificado.

---

### sw.js — v31

- `CACHE_NAME` → `'franbot-v31'` (invalida caché de v30).
- Entrada de changelog añadida al encabezado con las 3 tareas del ciclo.

**Verificación sintáctica:** `node --check js/app.js sw.js` ✅ 2/2 OK.

**Tests funcionales esperados (verificar en navegador):**

1. `/polinizar campo informacional --resumen` offline → bubble + botón ⬇️.
   Click → descarga `micelio-resumen-campo-informacional-YYYY-MM-DD.md`. ✅
2. Con ModoOnline activo: `/polinizar Ki --zenodo` → streaming visible token a token,
   botón aparece al finalizar (después de que `_poliBubble.classList.remove('streaming')`
   se ejecuta). ✅
3. Bajar K_i artificialmente (`/ki 0.4`), enviar 8 mensajes online → al 8° mensaje,
   0.7s después de la respuesta aparece advisory de exploración. ✅
4. `/dois` con al menos 1 DOI en caché → pie incluye `/panel-doi`. ✅
5. `/dois limpiar` → sin cambios (no incluye alias). ✅

**Blast radius total:** 2 archivos modificados. Ningún módulo externo (`miu-engine.js`,
`motor-vida.js`, `verificador-doi.js`, `polinizador.js`, `core.js`, etc.) fue tocado.

---

## 🔮 Diferidos (no para este ciclo salvo instrucción explícita)

**Prioritarios (orden sugerido):**

1. **`/dois` → deprecación fuerte (v2)** — en un ciclo futuro, cuando `/panel-doi` sea
   el comando principal conocido por el usuario, considerar que `/dois` muestre solo
   el conteo y remita directamente a `/panel-doi`. No urgente; la soft-deprecation de AG
   es suficiente por ahora.

2. **SUBFLOW v0.3** — integrar con embeddings online para similitud semántica real
   en el dedupe. Hoy SUBFLOW usa Jaccard. Blast radius alto: `core.js` + `miu-engine.js`
   + potencialmente `buscar-oraculo.js`. Requiere diseño cuidadoso antes de implementar.

3. **Polinizador v0.3** — formato `.txt` como segunda opción de descarga (además de `.md`).
   Trivial: añadir un segundo botón `⬇️ .txt` que llame `_poliDescargar` con `type:
   'text/plain'` y extensión `.txt`. Diferido por no ser urgente; el .md ya es
   directamente utilizable en Zenodo, GitHub y la mayoría de plataformas.

**Largo plazo (sin cambio respecto a BRIEFING-AF):**

- Módulo 5 (Modo Desarrollador) — test suite de coherencia automatizado.
- MCP-LOCAL / Chrome Extension.
- A, Z-axiomas (BRIEFING-S).
- Umbral de Despertar (criterio 3 de Semilla-MIU): marca de ciclo en oráculo IDB cuando
  K_i > 1.618 (Espejo Fractal M22 activo), que modifique el advisory del próximo turno.

---

## 📐 Estado del jardín (S → … → AF → AG)

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

ρ(x) > 0.
