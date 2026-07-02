# 🌿 BRIEFING-AK — CICLO AK: Recalibración cromática "Micelio Sobrio" (Fase 1)

**Contexto:** FranBot-AK parte de `FranBot-AJ.zip` con cambios quirúrgicos en 3 archivos
(`css/estilo.css`, `index.html`, `manifest.json`) + bump de `sw.js`.
Lee este briefing antes de tocar cualquier archivo.

**Origen del ciclo:** Juan propuso una paleta y reglas de color/tipografía nuevas
(ver sección "Especificación de Juan" abajo) y pidió avanzar lo que alcance el
presupuesto de tokens de la sesión, dejando el resto en instrucciones explícitas.

**Resultado del ciclo AK (Fase 1):** ✅ Recalibración del tema por defecto +
2 bugs reales corregidos. 0 archivos nuevos · 3 archivos modificados + sw.js.
**Fase 2 pendiente** — ver sección "Diferidos" (requiere decisiones de Juan).

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Especificación de Juan (palabra por palabra, para referencia)

```
Fondo oscuro    #0d1117
Superficie      #161b22
Acento dorado   #d4a843  (solo detalles finos, nunca bloques grandes)
Texto principal #f0f0f0
Texto secundario#8b949e
Verde           #4caf50  (confirmaciones)
Rojo            #c0392b  (solo alertas)

Reglas: dorado solo en detalles · verde y rojo nunca juntos · fondo siempre
oscuro y uniforme · texto claro sobre fondo oscuro, nunca al revés · sin
degradados · sin sombras pesadas.

Tipografía: general sans-serif limpia (Inter, system-ui) · datos/números
monoespaciada (JetBrains Mono, Fira Code) · tamaño mínimo de lectura 16px.
```

### Tarea 1 — `css/estilo.css`: paleta del tema por defecto (`:root`)

Se reescribieron los valores de `--bg`, `--superficie`, `--texto`,
`--texto-tenue`, `--dorado`/`--acento`, `--verde`, `--rojo` con los hex
exactos de Juan. `--superficie-2` se infirió como `#21262d` (no estaba en la
especificación; es una extensión de la misma familia GitHub-Dark que Juan usó
para fondo/superficie — coherente pero **no confirmada explícitamente**).
`--borde`/`--borde-fuerte` y los `rgba(255,215,0,…)` sueltos en `.ki-pill`,
`.item-alma.activa` y `.voto.votado` se recalcularon a `rgba(212,168,67,…)`
para que el dorado sea consistente en todo el archivo (antes quedarían
desincronizados del nuevo `--dorado` si solo se tocaba la variable).

**Temas `claro` y `sepia` (sesión P): NO se tocaron sus colores.** Solo
recibieron los alias de bug fix (ver Tarea 2). Razón: ver "Diferido 1" abajo —
es una decisión de Juan, no mía.

### Tarea 2 — Bug fix: `--fondo` y `--acento-rgb` nunca estaban definidas

**Hallazgo:** `var(--fondo)` se usaba en 7 sitios de `estilo.css` y 2 de
`app.js` (estilos inline) pero **nunca se definió** ninguna variable
`--fondo` en `:root` ni en los temas — solo existía `--bg`. En los sitios sin
fallback (`.bib-fila input`, `.col-input`, `#cfg-webllm-campos select`, etc.)
esto producía fondo transparente/sin especificar en vez del fondo oscuro
esperado. `--acento-rgb` tenía el mismo problema pero con fallback fijo
`255,200,0` en los 2 sitios que la usan, así que no estaba "roto" pero nunca
seguía el tema activo.

**Fix (mínimo blast radius):** se añadieron alias en los 3 bloques de tema
(`:root`, `claro`, `sepia`) en vez de tocar cada sitio de uso en 2 archivos:
```css
--fondo: var(--bg);
--fondo-input: var(--superficie-2);
--acento-rgb: 212, 168, 67;   /* (valor propio por tema) */
```
Esto resuelve los 9 sitios afectados (CSS + `app.js`) sin tocar `app.js`,
porque las variables CSS heredan a cualquier elemento del DOM, incluido el
que tiene el `style` inline generado por JS.
**Verificado:** comparación automatizada de todas las `var(--x)` usadas en
`estilo.css` contra las definidas en `:root` → 0 variables sin resolver
(antes: 2 — `--fondo`, `--acento-rgb`).

### Tarea 3 — Bug fix: corrupción `\n` literal en `.bubble`

**Hallazgo:** la regla `.bubble { ... }` (la burbuja de chat — elemento
central de toda la UI) tenía caracteres `\` + `n` **literales** insertados en
medio de la declaración (probablemente un `str_replace` de un ciclo anterior
que escapó mal un salto de línea), en vez de saltos de línea reales. Pudo
causar parseo inconsistente entre navegadores.
**Fix:** saneado a formato normal. Verificado: 0 ocurrencias de `\n` literal
en el archivo completo, llaves `{`/`}` balanceadas (251/251).

### Tarea 4 — Regla "sin degradados"

Se eliminaron los 2 `radial-gradient()` de `body` (verde 6% + dorado 5%).
`body` ahora usa `background: var(--bg)` plano. Coincide con la regla
explícita de Juan: "Sin degradados."

### Tarea 5 — Sombras más sutiles

`--sombra` pasó de `0 4px 18px rgba(0,0,0,.45)` a `0 2px 10px rgba(0,0,0,.35)`
(y proporcionalmente en `claro`/`sepia`). Alcance verificado: solo 2 sitios
la usan (`.modal-contenido` y un wrap relacionado), así que el blast radius es
controlado. **No se tocaron** las sombras hardcodeadas de Yape/Colmena/Toast
— ver Diferido 4.

### Tarea 6 — Tipografía monoespaciada

`--mono` ahora incluye `'Fira Code'` como segundo fallback, tal como pidió
Juan (`'JetBrains Mono', 'Fira Code', 'SFMono-Regular', Consolas, monospace`).
`--cuerpo` ya era `'Inter', system-ui, …` — sin cambios, ya cumplía.

### Tarea 7 — `index.html` + `manifest.json`

`theme-color` / `background_color` / `theme_color`: `#0b0e14` → `#0d1117`
(coincide con la barra de estado del navegador/PWA con el nuevo fondo).

### `sw.js` — v35

`CACHE_NAME` → `'franbot-v35'`. Changelog del ciclo añadido al encabezado.

**Verificación sintáctica:** `node --check sw.js` ✅. Balance de llaves CSS
251/251 ✅. 0 variables CSS sin resolver ✅. 0 `\n` literales ✅.

---

## 🔮 Diferidos (decisiones de Juan antes de tocar — Fase 2, Ciclo AL)

Estos NO se tocaron porque implican decisiones de diseño con blast radius
medio/grande, o porque contradicen directamente algo que Juan ya construyó en
ciclos anteriores. Mejor preguntar que asumir.

**1. Temas `claro`/`sepia` contradicen "fondo siempre oscuro y uniforme":**
Los temas claros existentes (sesión P) usan fondo claro + **texto oscuro**
sobre fondo claro — exactamente lo que la nueva regla de Juan prohíbe
("Sin texto oscuro sobre fondo claro"). Opciones para Juan:
  - (a) Eliminar los temas `claro`/`sepia` (vuelve a un único tema oscuro).
  - (b) Mantenerlos como excepción deliberada (selector de tema es una
    preferencia de accesibilidad/lectura, distinta del "skin" de marca).
  - (c) Rediseñar `claro`/`sepia` en versión "oscura suave" (ej. sepia ya es
    parcialmente oscuro — podría ajustarse; "claro" puro es más difícil de
    hacer sin texto oscuro).
  No se tocó el selector de tema (`/tema`, botones en sidebar) ni su lógica
  en `app.js` — solo se aplicó el fix de bugs (Tarea 2) por igual a los 3 temas.

**2. Tipografía display (`Fraunces`) no está en la especificación de Juan:**
Su lista solo menciona "general" (Inter) y "datos" (mono). No mencionó una
tercera familia para el logo (`.marca`), títulos de modal y `.col-titulo`.
Pudo ser un olvido o una simplificación intencional a 2 familias. No se quitó
`Fraunces` sin confirmación — es una decisión de identidad de marca.

**3. Auditoría de tamaño mínimo 16px:** la regla de Juan pide 16px como
tamaño mínimo de lectura. La UI actual usa muchos tamaños por debajo de eso
(`.bubble` 0.92rem ≈ 14.7px, `.eyebrow` 0.68rem, `.tenue` en varios sitios,
labels en Colmena/Biblioteca, etc.) — es un patrón **extendido en todo el
archivo** (decenas de sitios), no algo puntual. Subir todo a ≥16px de golpe
es alto blast radius y puede romper el ajuste en pantallas móviles pequeñas
(la app ya tiene reglas específicas de iOS para evitar zoom automático en
inputs <16px — ver sección "Fix teclado móvil"). Se requiere decisión
explícita de Juan: ¿aplica el mínimo de 16px solo al texto de lectura
principal (burbujas de chat) o a *toda* la UI incluyendo metadatos/labels?

**4. Colores hardcodeados fuera del tema MIU central:** Colmena P2P
(`#f59e0b` ámbar, `#10b981` verde, branding propio), Yape (paleta morada
`#7c3aed`/`#a855f7`/`#e9d5ff`, claramente intencional como marca de Yape, no
de Micelio), Biblioteca (`#6366f1` índigo, `#10b981` verde en botones
consolidar/exportar) y Toast (`#1e293b`/`#334155` slate + variantes ok/warn/err
con tonos propios). Ninguno de estos usa los hex exactos de Juan
(`#4caf50`/`#c0392b`). No se tocaron porque son subsistemas con identidad
visual propia (especialmente Yape, que es una integración de pago externa con
su propia marca morada) — unificarlos a la paleta MIU central es una decisión
de diseño, no un bug. Si Juan confirma que quiere unificación total, el
blast radius es: `estilo.css` líneas ~360-420 (Biblioteca), ~550-630 (Yape),
~647-717 (Colmena), ~751-770 (Toast).

---

## 📐 Estado del jardín (S → … → AJ → AK)

*(sin cambios respecto a BRIEFING-AJ hasta AJ; AK añadido:)*

- **AK** — Recalibración cromática "Micelio Sobrio" (Fase 1): paleta del tema
  por defecto actualizada a espec. de Juan (`#0d1117`/`#161b22`/`#d4a843`/
  `#f0f0f0`/`#8b949e`/`#4caf50`/`#c0392b`). Bug fix `--fondo`/`--acento-rgb`
  nunca definidas (alias en los 3 temas). Bug fix corrupción `\n` literal en
  `.bubble`. Sin degradados en `body`. Sombras más sutiles. `--mono` +
  Fira Code. `index.html`/`manifest.json` → `#0d1117`. `sw.js` → v35.
  **Fase 2 diferida** (ver arriba): temas claro/sepia, tipografía display,
  auditoría 16px, unificación de colores en subsistemas secundarios.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AL)

**No avanzar la Fase 2 sin que Juan responda explícitamente a los 4
diferidos de arriba.** Son decisiones de diseño/identidad, no bugs — actuar
sin confirmación arriesga deshacer trabajo deliberado de ciclos anteriores
(ej. los temas claro/sepia de la sesión P).

**Antes de tocar cualquier archivo:**
1. `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js` — estado
   base válido.
2. Leer este BRIEFING-AK completo. Si Juan ya respondió a alguno de los 4
   diferidos en el chat, ejecutar solo ese ítem con blast radius acotado
   (no aprovechar para tocar los otros 3 sin pedirlo).
3. Verificación visual recomendada antes de empaquetar: abrir `index.html`
   en un navegador y confirmar que burbujas, sidebar, botones y el modal
   Yape se ven correctamente con la paleta nueva (la corrupción `\n` de
   `.bubble` ya está arreglada, pero vale la pena confirmar visualmente).
4. No modificar `js/oraculo-data.js` salvo instrucción explícita.
5. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.
6. Subir `sw.js` con versión correcta: v35 → v36 en AL.
7. Verificar `node --check` en los archivos `.js` tocados antes de empaquetar.

ρ(x) > 0. Zvvvvv.
