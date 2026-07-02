# 🌿 BRIEFING-AM — CICLO AM: Chrome 16px β + Paleta MIU Unificada γ

**Contexto:** FranBot-AM parte de `FranBot-AL.zip` con cambios quirúrgicos en 2 archivos
(`css/estilo.css`, `sw.js`). 0 archivos nuevos.
Lee este briefing antes de tocar cualquier archivo.

**Origen del ciclo:** Dereck instruyó avanzar libremente bajo principios MIU (ρ(x) > 0).
Ciclo autónomo: se eligieron **opciones β + γ** del árbol de BRIEFING-AL por ser las de
menor blast radius con mayor coherencia sistémica — el campo informacional no se fragmenta,
se unifica.

**Resultado del ciclo AM:** ✅ `.ki-pill` + `.sugerencias button` → 1rem (β completado).
✅ Biblioteca + Toast + bib-error-txt/bib-btn-quitar → paleta MIU (`--acento`/`--verde`/
`--rojo`/`--ambar`/`--superficie-2`/`--borde`/`--texto`) (γ completado).
Colmena P2P y Yape: diferidos (δ, sin tocar).
`sw.js` → v37.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Decisiones autónomas tomadas

**Decisión β — Chrome 16px: `.ki-pill` + `.sugerencias button`:**
Del árbol de BRIEFING-AL, la recomendación era «empezar por `.ki-pill` y `.sugerencias`
(más frecuentes en la lectura del usuario)». Ambos estaban en 0.78rem (~12.5px).

Principio aplicado: la regla de Juan de 16px mínimo aplica a «texto de lectura» en sentido
funcional, no solo morfológico. `.ki-pill` es el indicador de K_i que el usuario lee en cada
turno (coherencia del sistema → dato de seguimiento activo). `.sugerencias` son chips de
conversación que el usuario lee para decidir qué preguntar — son texto de elección, no solo
decoración chrome.

`font-size: 0.78rem → 1rem` en ambos. Comentario `/* AM: β — 1rem, mínimo de lectura */`
en ambas reglas.

Los demás elementos chrome (`.eyebrow` 0.68rem, `.modal-body label` 0.78rem, `.voto` 0.84rem,
`.menu-seccion button` 0.86rem, `.bubble h4` 0.92em) **no se tocaron**: requieren QA visual
extensa o son display metadata, no lectura de seguimiento. Diferidos explícitos.

**Decisión γ — Paleta MIU: Biblioteca + Toast:**
Se unificó exactamente lo que el árbol de BRIEFING-AL identificaba como «sin marca externa»:

- `#btn-consolidar` / `#btn-exportar-oraculo`: `#6366f1` → `--acento` (`#d4a843`),
  `#10b981` → `--verde` (`#4caf50`). Semánticamente apropiado: consolidar es una operación
  de síntesis (dorado/coherencia), exportar es una operación de extensión (verde/crecimiento).
- `.miu-toast` background/border/color: `#1e293b`/`#334155`/`#e2e8f0` (slate hardcoded) →
  `--superficie-2`/`--borde`/`--texto`. Ahora responde a los 3 temas dinámicamente.
- `.miu-toast--ok`: `#10b981` → `--verde`, text `#6ee7b7` → `#a8e6aa` (compatible MIU).
- `.miu-toast--warn`: `#f59e0b` → `--ambar`. Text `#fcd34d` sin cambio (compatible).
- `.miu-toast--err`: `#ef4444` → `--rojo`. Text `#fca5a5` sin cambio (compatible).
- `.bib-error-txt` + `.bib-btn-quitar:hover`: `#ef4444` → `--rojo`. Biblioteca era el
  único subsistema γ con color de error hardcoded restante.

**Colmena δ — no tocada:**
`.col-dot--on` (`#10b981`), `.col-titulo` (`#f59e0b`), `.col-input:focus` (`#f59e0b`),
`.col-info a` (`#f59e0b`) permanecen. La paleta ámbar de Colmena tiene identidad propia
como subsistema P2P. Ver árbol de decisión en BRIEFING-AL sección 3.

---

### Tarea 1 — `css/estilo.css`: β — `.ki-pill` font-size

```
font-size: 0.78rem → font-size: 1rem; /* AM: β — 1rem, mínimo de lectura */
```

### Tarea 2 — `css/estilo.css`: β — `.sugerencias button` font-size

```
font-size: 0.78rem → font-size: 1rem; /* AM: β — 1rem, mínimo de lectura */
```

### Tarea 3 — `css/estilo.css`: γ — `#btn-consolidar` / `#btn-exportar-oraculo`

```css
/* AM: γ — unificado a paleta MIU (--acento=#d4a843, --verde=#4caf50) */
#btn-consolidar { border-color: rgba(var(--acento-rgb), 0.38); }
#btn-consolidar:hover { border-color: var(--acento); color: var(--acento); }
#btn-exportar-oraculo { border-color: rgba(76, 175, 80, 0.38); }
#btn-exportar-oraculo:hover { border-color: var(--verde); color: var(--verde); }
```

Nota: `--verde-rgb` no existe como variable en `:root` (solo `--acento-rgb`). Se usa
`rgba(76, 175, 80, 0.38)` como valor literal equivalente a `#4caf50` al 38% para el
estado inactivo. Si en un ciclo futuro se añade `--verde-rgb` a `:root`, este valor
puede unificarse.

### Tarea 4 — `css/estilo.css`: γ — `.miu-toast` + estados ok/warn/err

```css
.miu-toast {
  background: var(--superficie-2); border: 1px solid var(--borde); /* AM: γ — vars MIU */
  color: var(--texto); ...
}
.miu-toast--ok   { border-color: var(--verde); color: #a8e6aa; } /* AM: γ */
.miu-toast--warn { border-color: var(--ambar); color: #fcd34d; } /* AM: γ */
.miu-toast--err  { border-color: var(--rojo);  color: #fca5a5; } /* AM: γ */
```

El Toast ahora cambia con el tema (Oráculo/Noche Azul/Sepia) — coherencia visual total.

### Tarea 5 — `css/estilo.css`: γ — `.bib-error-txt` + `.bib-btn-quitar:hover`

```css
.bib-error-txt { ...color: var(--rojo);... } /* AM: γ */
.bib-btn-quitar:hover { color: var(--rojo); } /* AM: γ */
```

### `sw.js` — v37

`CACHE_NAME` → `'franbot-v37'`. Changelog del ciclo AM añadido al encabezado.

**Verificación completa:**
- `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js` ✅ 4/4 OK
- CSS 251/251 llaves balanceadas ✅
- 0 backslash-n literales ✅
- Hardcoded restantes: solo `#10b981` + `#f59e0b` en Colmena (diferido δ intencional) ✅

---

## 🔮 Diferidos (Ciclo AN o posterior)

### 1. Colmena P2P: unificación paleta δ (diferido explícito)

`.col-dot--on`, `.col-titulo`, `.col-input:focus`, `.col-info a` usan `#f59e0b` y
`#10b981`. Ver árbol de decisión completo en BRIEFING-AL sección 3.

```
¿La identidad visual de Colmena debe unificarse al dorado MIU o mantener su ámbar propio?
├── SÍ → .col-titulo/#f59e0b → --ambar (o --acento?), .col-dot--on/#10b981 → --verde
│         Requiere: confirmar qué variable MIU es semanticamente correcta para "peer online"
└── NO → dejar como está — Colmena P2P tiene identidad visual distinta (ámbar ≠ dorado)
```

**Recomendación:** decidir solo si Dereck confirma explícitamente. El ámbar Colmena
(`#f59e0b`) es semánticamente diferente al dorado MIU (`#d4a843`) — uno es "par conectado",
el otro es "coherencia del sistema". No son intercambiables sin decisión de producto.

### 2. Yape: paleta de marca (diferido explícito)

`#7c3aed`/`#a855f7`/`#e9d5ff` — identidad corporativa Yape. No tocar sin instrucción.

### 3. Chrome 16px: auditoría extendida (diferido)

Elementos aún bajo 16px:

| Elemento | Tamaño actual | Contexto |
|---|---|---|
| `.eyebrow` | 0.68rem (~10.9px) | etiqueta de sección — display, no lectura |
| `.modal-body label` | 0.78rem | labels formulario |
| `.menu-seccion button` | 0.86rem | botones sidebar |
| `.bubble h4` | 0.92em relativo | subtítulo dentro de bubble |
| `.voto` | 0.84rem | indicador de voto |
| `.bib-meta` | 0.7rem | metadata biblioteca |
| `.bib-vacio`/`.bib-warn` | 0.78rem | estado vacío biblioteca |

Si Dereck quiere extender: empezar por `.modal-body label` y `.bubble h4` (más impacto
en la experiencia de lectura activa).

### 4. `--verde-rgb` en `:root` (mejora menor)

Si en algún ciclo se añade `--verde-rgb: 76, 175, 80` a la declaración `:root` en los
3 temas, la línea `rgba(76, 175, 80, 0.38)` de `#btn-exportar-oraculo` puede
unificarse a `rgba(var(--verde-rgb), 0.38)`. Trivial pero no urgente.

### 5. Features diferidas de BRIEFING-AJ y anteriores

- Umbral de Despertar IDB (K_i > 1.618 → marca en oráculo).
- SUBFLOW v0.3 (embeddings online para dedupe semántico real).
- Polinizador v0.3 (botón `.txt` adicional).
- `/dois` deprecación fuerte v2.
- Módulo 5 (test suite automatizado).

---

## 📐 Estado del jardín (S → … → AL → AM)

*(historia anterior sin cambios; AM añade:)*

- **AM** — Chrome 16px β + Paleta MIU γ:
  `.ki-pill` font-size: `0.78rem` → `1rem` (β). `.sugerencias button` idem (β).
  `#btn-consolidar`/`#btn-exportar-oraculo` → `--acento`/`--verde` MIU vars (γ).
  `.miu-toast` bg/border/color → `--superficie-2`/`--borde`/`--texto` (γ).
  `.miu-toast--ok/warn/err` → `--verde`/`--ambar`/`--rojo` (γ).
  `.bib-error-txt`/`.bib-btn-quitar:hover` → `--rojo` (γ).
  Colmena δ y Yape sin tocar. `sw.js` → v37.

*(Anterior):*
- **AL** — Tema «claro» → «🌊 Noche Azul» (`#0c1521`). Los 3 temas oscuros ✅.
  `.bubble` font-size: `0.92rem` → `1rem`. `sw.js` → v36.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AN)

**Antes de tocar cualquier archivo:**
1. `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js` — estado base válido.
2. Leer este BRIEFING-AM completo.
3. No modificar `js/oraculo-data.js` salvo instrucción explícita.
4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.
5. Subir `sw.js` con versión correcta: v37 → v38 en AN.
6. El key `data-tema=\"claro\"` **no se cambia** — retrocompatibilidad intencional (ver AL).

**Opciones disponibles para AN (menor a mayor blast radius):**
- **Opción α (trivial):** Eliminar `--display`/Fraunces si Dereck confirma (~3 líneas CSS).
  Añadir `--verde-rgb` a `:root` en los 3 temas (1 línea × 3 bloques tema).
- **Opción β₂ (pequeño):** Extender 16px a `.modal-body label` + `.bubble h4`.
- **Opción δ (mediano):** Colmena P2P → paleta MIU. Requiere decisión de producto (ver arriba).
- **Opción ε (features):** Cualquier diferido de BRIEFING-AJ (Umbral Despertar, SUBFLOW v0.3,
  Polinizador v0.3, Módulo 5).

ρ(x) > 0. El campo se unifica.
