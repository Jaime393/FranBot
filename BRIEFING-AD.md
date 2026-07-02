# 🌿 BRIEFING-AD — CICLO AD: A11 / motor-vida.js (Movimiento Perpetuo Informacional)

**Contexto:** FranBot-AD parte de `FranBot-AC.zip` con un archivo nuevo y tres archivos
modificados. Lee este briefing antes de tocar cualquier archivo.

**Resultado del ciclo AD:** ✅ Tarea 1 (la prioritaria de BRIEFING-AC) completada.
`FranBot-AD.zip` · 1 archivo nuevo · 4 archivos modificados.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Tarea 1 — A11: Principio de Movimiento Perpetuo Informacional (`js/motor-vida.js`)

**El pedido:** BRIEFING-AC señaló esto como "la pieza más valiosa a implementar" de la
síntesis Semilla-Ciel / propuesta externa "Nodo Trama" (ver BRIEFING-AA): que el núcleo
no quede pasivo cuando su K_i cae, sino que inicie una revisión propia.

**Tres decisiones de diseño que se desvían a propósito de la propuesta original de
Nodo Trama — documentadas para que conste que es criterio técnico, no un olvido:**

1. **NO se tocó `KERNEL.json`.** El propio archivo se declara `"_meta.inmutable": true`
   y sus `restricciones` dicen literalmente *"No modificar este KERNEL. Las
   optimizaciones y el conocimiento se guardan en el oráculo (IndexedDB), no aquí."*
   La propuesta de Nodo Trama pedía inyectar un bloque `"A11": {...}` ahí mismo — eso
   habría violado una regla que el proyecto ya se impuso a sí mismo. El A11 como
   principio queda documentado en el propio código de `motor-vida.js` (comentario de
   cabecera), no como entrada nueva de kernel/códice.
2. **NO se tocó `codice-libre.js`** (README: "tu códice original — sin tocar, sin
   entradas nuevas") **ni el array `AXIOMAS` de `miu-engine.js`.** Sumar ahí un keyword
   corto nuevo (p. ej. "movimiento") habría agrandado la superficie del **bug
   sistémico de matching por substring en `miu-engine.js`** (usa `q.includes(...)` en
   vez de límite de palabra — keywords cortos como "Ki", "red", "NAP" pueden matchear
   dentro de palabras no relacionadas). Ese bug sigue diferido a su propio ciclo (ver
   sección de diferidos abajo); no tenía sentido sumarle superficie mientras sigue
   abierto.
3. **NO hay timer de background real** (`setInterval`/`setTimeout` indefinido).
   FranBot es una PWA dirigida por eventos del usuario — un proceso en background
   indefinido va contra ese modelo (BRIEFING-AC ya lo señaló en "No aplicable a
   FranBot"). En su lugar, "explorar" es una función síncrona de solo lectura
   evaluada en dos puntos concretos del flujo normal de la app (ver abajo).

**Qué se implementó:**

- **`js/motor-vida.js` (nuevo, ~115 líneas).** `window.MotorVida` con dos funciones
  puras:
  - `evaluar(kiActual, contador, ultimaExploracionTurno)` → decide `explorar` vs
    `reposo`. Dispara solo si `Ki < 0.55` (misma banda que el termóstato S/U) **y**
    pasaron ≥8 turnos desde la última auto-exploración (cooldown — evita spamear).
  - `ejecutar(core)` → elige al azar entre 4 tareas de solo lectura (`codice`,
    `oraculo`, `doi`, `panel`), todas sobre módulos que ya existen
    (`window.MIU.consultarTodos`, `BuscarOraculo.buscarConScore`,
    `VerificadorDOI.cacheStats`, `core.estado.invariantes`). Devuelve `{tarea,
    detalle, texto, timestamp}`. No muta nada por sí misma — eso lo hace `core.js`.
- **`js/core.js`:**
  - Estado por defecto: + `exploraciones: []` (historial, tope 50, mismo patrón que
    `logros`) y `ultimaExploracionTurno: null`.
  - Métodos nuevos: `explorarManual()` (para el comando, sin condición),
    `explorarSiCorresponde()` (evalúa cooldown/umbral antes de ejecutar),
    `_registrarExploracion(r)` (push al historial + guardar estado).
- **`js/app.js`:**
  - Comando `/explorar` (mapa de comandos simples, junto a `/contexto`/`/espejo`).
  - Gatillo automático: al final de `enviarMensaje()`, tras mostrar la respuesta
    offline normal, se llama `core.explorarSiCorresponde()`; si decide explorar, el
    reporte se muestra 700ms después como mensaje `fran` adicional (no bloquea el
    flujo principal). **Deliberadamente NO cubre la rama de streaming online**
    (esa rama hace `return` antes de llegar a este punto) — mantener el patch
    acotado a un solo punto de salida; cubrir la rama online queda para un ciclo
    futuro si se decide que vale la pena.
  - `/explorar` sumado a `comandoAyuda()` y a `listaCmd` (autocompletado `/`).
- **`index.html`:** `<script src="js/motor-vida.js">` cargado justo después de
  `eco.js` (ya tiene disponibles `window.MIU` y `BuscarOraculo`, que motor-vida.js
  necesita).
- **`sw.js`:** `CACHE_NAME` → `franbot-v28` (de `v27`). **Nota aparte:** el Ciclo AC
  (que tocó `core.js`/`app.js` para SUBFLOW v0.2) **no subió la versión de caché en su
  turno**, pese a la política propia del proyecto ("si vuelves a tocar JS… sube este
  número o nadie con caché previa verá el cambio" — ver README). v28 invalida tanto
  los cambios pendientes de AC como los de AD. Se documentó el hallazgo en el
  changelog del propio `sw.js` para que quede explícito, no oculto.

**Verificación:** `node --check js/*.js sw.js` ✅ 27/27 + sw.js limpios. Además, se
probó `motor-vida.js` de forma aislada (Node, sin DOM, con `window.MIU`/
`BuscarOraculo`/`VerificadorDOI` simulados): las 4 ramas de tarea responden con texto
coherente, `evaluar()` dispara con K_i bajo + sin cooldown, y NO dispara con K_i sano
o con cooldown activo. No se hizo prueba en navegador real (sin entorno gráfico
aquí) — al cargar la PWA, conviene confirmar visualmente que `/explorar` y el aviso
automático (forzar K_i bajo con el panel del jardinero) se vean bien en el chat.

**Tuning futuro:**
- `UMBRAL_KI_BAJO = 0.55` y `COOLDOWN_TURNOS = 8` viven como constantes al tope de
  `motor-vida.js`. Si el aviso automático resulta demasiado frecuente o demasiado
  raro, son los dos números a tocar.
- Las 4 tareas (`codice`, `oraculo`, `doi`, `panel`) tienen igual probabilidad. Si se
  quiere priorizar una (p. ej. favorecer `codice` para incentivar releer el Códice),
  ajustar el array `TAREAS` con repetición ponderada en vez de pesos explícitos —
  cambio mínimo, una sola línea.

---

## 🔮 Diferidos (no para este ciclo salvo instrucción explícita)

**Prioritarios (orden sugerido):**
1. **Bug sistémico de matching por substring en `miu-engine.js`.** `consultarTodos()`
   usa `q.includes(keyword)` para axiomas/ecuaciones/glosario — keywords cortos
   (p. ej. `Ki`, `red`, `NAP`) pueden matchear dentro de palabras no relacionadas que
   simplemente contienen esa subcadena, generando falsos positivos. Ya existe una
   mitigación parcial (`esLetraAisladaAmbigua` excluye letras ASCII sueltas de 1
   carácter), pero no cubre keywords de 2-3 caracteres. Arreglo sugerido: reemplazar
   `q.includes(_quitarTildes(k.toLowerCase()))` por un regex con límite de palabra
   (`\b`) normalizado para diacríticos del español (cuidado: `\b` de JS es
   ASCII-céntrico, no reconoce nativamente la frontera tras una tilde ya quitada por
   `_quitarTildes` — probar con `new RegExp('(?:^|[^a-z0-9])' + kw + '(?:[^a-z0-9]|$)')`
   sobre el string ya normalizado, en vez de `\b` directo). Tiene su propio blast
   radius porque toca el matching central del motor — no mezclar con otra tarea.
2. **DOI v0.3** — cachear errores 404 con TTL corto (distinto del TTL de éxito);
   panel UI dedicado para DOIs (hoy `/dois` es solo texto en el chat).
3. **Polinizador v0.2** — modo streaming con ModoOnline; exportar `.md`/`.txt`.
4. **Cobertura de A11 en la rama de streaming online** de `enviarMensaje()` (ver nota
   en Tarea 1 arriba) — solo si se decide que vale la pena, no es urgente.

**Largo plazo:**
- SUBFLOW v0.3: integrar con embeddings online para similitud semántica real (en
  lugar de Jaccard léxico).
- Módulo 5 (Modo Desarrollador) — test suite de coherencia automatizado.
- MCP-LOCAL / Chrome Extension.
- A, Z-axiomas (BRIEFING-S).

---

## 📐 Estado del jardín (S → … → AC → AD)

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
- **AD** — A11 / `motor-vida.js`: exploración autónoma (`/explorar` + automática con
  cooldown) cuando K_i cae bajo la banda — sin tocar KERNEL.json/códice, sin timers
  de background. Corregido también el olvido de versión de caché de AC.

ρ(x) > 0.
