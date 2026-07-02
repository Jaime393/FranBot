# 🌿 BRIEFING-AL — CICLO AL: Micelio Sobrio Fase 2 (Noche Azul + 16px lectura)

**Contexto:** FranBot-AL parte de `FranBot-AK.zip` con cambios quirúrgicos en 3 archivos
(`css/estilo.css`, `js/app.js`, `sw.js`). 0 archivos nuevos.
Lee este briefing antes de tocar cualquier archivo.

**Origen del ciclo:** Dereck instruyó avanzar libremente los diferidos del BRIEFING-AK
bajo principios MIU — sin esperar cada decisión individual. Se tomaron 4 decisiones
autónomas (ver sección "Decisiones" abajo). Fase 2 completada en 2 ítems; 2 restantes
diferidos con árbol de decisión documentado.

**Resultado del ciclo AL:** ✅ Tema «Noche Azul» (los 3 temas ahora oscuros) +
`.bubble` → 1rem (16px mínimo de lectura). **Fraunces conservado** (identidad de marca).
**Subsistemas Colmena/Yape/Biblioteca/Toast** diferidos con árbol explícito.
`sw.js` → v36.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Decisiones autónomas tomadas (documentadas para no reabrir)

**Decisión A — Tema «claro» → «Noche Azul» (oscuro frío):**
El tema `claro` (fondo `#f4f1e8`, texto `#2a2620`) violaba directamente la
regla de Juan: «fondo siempre oscuro y uniforme · texto claro sobre fondo oscuro,
nunca al revés». Las opciones del BRIEFING-AK eran: (a) eliminar, (b) mantener
como excepción, (c) rediseñar como variante oscura.

**Se eligió la opción (c):** principio MIU de no-destructividad — la información
(el tercer tema) no se elimina, se reconfigura. El selector `data-tema="claro"` se
mantiene sin cambio en el DOM/localStorage (retrocompatibilidad total con usuarios
que ya tenían ese tema guardado). Solo cambian los valores CSS. La variante elegida
es **azul marino oscuro**: tres temas dan ahora tres temperaturas de color:
- 🌙 Oráculo: negro-GitHub neutro (`#0d1117`)
- 🌊 Noche Azul: azul marino frío (`#0c1521`) — ex «Claro»
- 📜 Sepia: ámbar oscuro cálido (`#2b2218`) — sin cambios

El acento dorado MIU (`#d4a843`) se conserva en los 3 temas: oro sobre azul marino
es una combinación clásica y visualmente coherente. Los bordes RGBA del tema Noche
Azul también usan el dorado MIU (mismo que `:root`) — consistencia total.

**Verificación:** Los 3 temas pasan la regla «fondo oscuro + texto claro» ✅.

**Decisión B — `.bubble` font-size: 0.92rem → 1rem (16px):**
El BRIEFING-AK preguntaba si la regla de 16px aplica «solo al texto de lectura
principal (burbujas de chat) o a *toda* la UI incluyendo metadatos/labels».

**Se eligió «solo texto de lectura»:** la regla de Juan es de *lectura*, no de
chrome de UI. Definición operativa adoptada:
- **Texto de lectura** (≥ 16px): burbujas `.bubble` (principal), texto largo de respuestas.
- **Chrome de UI** (exento): labels (`.modal-body label`, eyebrow, `.tenue`),
  indicadores de voto, tags de biblioteca, botones de sidebar, `.ki-pill`.

`.bubble` es el elemento más leído en toda la app y el caso más claro: fix aplicado.
El resto del chrome queda como está — patrón extendido en decenas de sitios, impacto
visual en pantallas pequeñas, requeriría QA visual extensa.

**Verificación:** `font-size: 1rem` en `.bubble` (línea ~189 del CSS actualizado).
El iOS fix `.barra-input input { font-size: 1rem }` ya existía — sin cambio.

**Decisión C — Fraunces se mantiene:**
BRIEFING-AK: «¿pudo ser un olvido o simplificación intencional a 2 familias?».
Principio MIU de no-destructividad: Fraunces es identidad de marca en `.marca`
(logo), `.modal-header h3` y `.col-titulo`. Eliminarlo sin confirmación explícita
sería destructivo. **No se tocó.** Quedará diferido hasta que Dereck lo pida.

**Decisión D — Colores hardcodeados en subsistemas: diferidos con árbol:**
Ver sección «Diferidos» abajo. Ninguno se tocó.

---

### Tarea 1 — `css/estilo.css`: Noche Azul (ex-claro)

Reemplazado el bloque completo `html[data-tema="claro"] { ... }` con los nuevos
valores oscuros (azul marino). Variables completas:

```
--bg: #0c1521          --superficie: #121f35       --superficie-2: #1a2c47
--texto: #c8dff0       --texto-tenue: #6a90b8
--dorado: #d4a843      --dorado-tenue: #b3873a     (=  Oráculo — marca MIU)
--acento: #d4a843      --acento-rgb: 212, 168, 67
--borde: rgba(212,168,67,0.12)  --borde-fuerte: rgba(212,168,67,0.28)
--glass: rgba(12,21,33,0.85)    --bio: #57d9b0
--verde: #4caf50       --rojo: #c0392b              --ambar: #ffaa20
--burbuja-user: #0e2038  --burbuja-fran: #0d1a28
--sombra: 0 2px 10px rgba(0,0,0,0.45)
```

`--fondo` y `--fondo-input` (aliases del ciclo AK) incluidos en el nuevo bloque.

### Tarea 2 — `css/estilo.css`: `.bubble` font-size

`font-size: 0.92rem` → `font-size: 1rem` en la regla `.bubble { … }`.
Añadido comentario `/* AL: 1rem = 16px, mínimo de lectura */` en esa línea.

### Tarea 3 — `js/app.js`: etiqueta de tema en UI

- Línea `const TEMAS = { … }`: `claro: '☀️ Claro'` → `claro: '🌊 Noche Azul'`
- Botón `cfg-tema-btn data-tema="claro"`: `☀️ Claro` → `🌊 Noche Azul`

El key `data-tema="claro"` en el DOM y en localStorage **no se cambió** — usuarios
con ese tema guardado recibirán automáticamente el nuevo skin Noche Azul sin
configurar nada.

### `sw.js` — v36

`CACHE_NAME` → `'franbot-v36'`. Changelog del ciclo AL añadido al encabezado.

**Verificación completa:**
- `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js` ✅ 4/4 OK
- CSS 251/251 llaves balanceadas ✅
- 0 backslash-n literales en estilo.css ✅
- 0 variables CSS sin resolver ✅

---

## 🔮 Diferidos (Ciclo AM o posterior)

### 1. Chrome de UI: auditoría 16px (diferido explícito)

La decisión B fijó `.bubble` a 1rem pero dejó el chrome exento. Si Dereck quiere
extender el mínimo de 16px al chrome, el blast radius es alto. Los elementos más
relevantes bajo 16px son:

| Elemento | Tamaño actual | Contexto |
|---|---|---|
| `.eyebrow` | 0.68rem (~10.9px) | etiqueta superior de sección |
| `.ki-pill` | 0.78rem (~12.5px) | indicador K_i en sidebar |
| `.modal-body label` | 0.78rem | labels de formulario |
| `.menu-seccion button` | 0.86rem | botones sidebar |
| `.bubble h4` | 0.92em relativo | subtítulo dentro de bubble |
| `.voto` | 0.84rem | indicador de voto |
| `.sugerencias button` | 0.78rem | chips de sugerencia |

Recomendación si Dereck decide extender: abordarlo por subsistema, no en masa.
Empezar por `.ki-pill` y `.sugerencias` (más frecuentes en la lectura del usuario).

### 2. Tipografía display (Fraunces)

Fraunces se usa en 3 sitios: `.marca` (logo), `.modal-header h3`, `.col-titulo`.
Si Dereck quiere unificar a 2 familias (Inter + mono, sin display), el fix es:
reemplazar `var(--display)` por `var(--cuerpo)` con `font-weight: 700` en esos 3 sitios.
Blast radius: 3 líneas en estilo.css + eliminar la variable `--display` de `:root`.
**No mover sin instrucción explícita** — es una decisión de identidad de marca.

### 3. Colores hardcodeados en subsistemas — Árbol de decisión

El BRIEFING-AK documentó 4 subsistemas con colores propios. Árbol para AM:

```
¿Quieres unificación total al palette MIU central (#d4a843/#4caf50/#c0392b)?
├── SÍ (todo) → modificar los 4 subsistemas
│   ├── Biblioteca (~líneas 360-420 estilo.css): #6366f1 → --acento, #10b981 → --verde
│   ├── Toast (~líneas 751-770): slate → --superficie-2, ok/warn/err con verde/ambar/rojo MIU
│   ├── Colmena P2P (~líneas 647-717): #f59e0b → --ambar, #10b981 → --verde
│   └── Yape (~líneas 550-630): paleta morada #7c3aed — VER NOTA YAPE abajo
└── PARCIALMENTE → especificar cuáles subsistemas (Yape es caso especial)
    └── Recomendación: Biblioteca + Toast primero (sin marca externa)
        Colmena después (identidad propia pero no marca externa)
        Yape: decisión separada (es integración de pago con marca corporativa)
```

**NOTA YAPE:** La paleta morada de Yape (`#7c3aed`/`#a855f7`/`#e9d5ff`) no es un
«error de diseño» — es la marca corporativa de Yape (empresa de pagos). Unificarla
al dorado MIU requiere una decisión de producto (¿el widget Yape debe verse como
Yape o como Micelio?). No se toca sin instrucción explícita.

---

## 📐 Estado del jardín (S → … → AK → AL)

*(historia de AK para atrás sin cambios; AL añade:)*

- **AL** — Micelio Sobrio Fase 2:
  Tema «claro» rediseñado como «🌊 Noche Azul» (azul marino oscuro, `#0c1521`).
  Los 3 temas cumplen «fondo siempre oscuro». Selector `data-tema="claro"` conservado
  (retrocompat localStorage). Etiqueta UI: «☀️ Claro» → «🌊 Noche Azul».
  `.bubble` font-size: `0.92rem` → `1rem` (16px, mínimo de lectura principal).
  Fraunces conservado (identidad de marca — diferido). `sw.js` → v36.

*(Anterior para referencia rápida):*

- **AK** — Recalibración cromática «Micelio Sobrio» Fase 1: paleta del tema por
  defecto (`#0d1117`/`#161b22`/`#d4a843`/`#f0f0f0`). Bugs `--fondo`/`--acento-rgb`
  (aliases en 3 temas). Bug `\n` literal en `.bubble`. Sin degradados en `body`.
  Sombras más sutiles. `--mono` + Fira Code. `index.html`/`manifest.json` → `#0d1117`.
  `sw.js` → v35.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo AM)

**Antes de tocar cualquier archivo:**
1. `node --check sw.js js/app.js js/core.js js/buscar-oraculo.js` — estado base válido.
2. Leer este BRIEFING-AL completo. Si Dereck ya respondió en el chat sobre
   Fraunces, auditoría 16px UI chrome, o subsistemas de color → ejecutar
   solo ese ítem con blast radius acotado.
3. No modificar `js/oraculo-data.js` salvo instrucción explícita.
4. No incluir `.git/` ni `*.bak` al empaquetar el zip de salida.
5. Subir `sw.js` con versión correcta: v36 → v37 en AM.
6. Verificar `node --check` en los archivos `.js` tocados antes de empaquetar.
7. El key `data-tema="claro"` **no se cambia** aunque la etiqueta diga «Noche Azul» —
   es retrocompatibilidad intencional.

**Opciones disponibles para AM (menor a mayor blast radius):**
- **Opción α (trivial):** Eliminar `--display`/Fraunces si Dereck lo confirma (~3 líneas).
- **Opción β (pequeño):** Auditoría 16px chrome — `.ki-pill` + `.sugerencias` primero.
- **Opción γ (mediano):** Unificación Biblioteca + Toast a paleta MIU central.
- **Opción δ (grande):** Unificación Colmena P2P + decisión sobre Yape.
- **Opción ε (features):** Cualquier diferido de feature de BRIEFING-AJ (Umbral de
  Despertar IDB, pool extendido SUBFLOW v0.3, advisory v0.3 en fusionarAlma, Módulo 5).

ρ(x) > 0. Zvvvvv.
