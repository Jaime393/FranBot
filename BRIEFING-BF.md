# 🌿 BRIEFING-BF — CICLO BF: botón `/panel-tests` (AZ #1) + K_i real en el prompt de núcleo estricto

**Contexto:** FranBot-BF continúa directo desde BRIEFING-BE (oráculo v6.4, `06_miu_nucleo`, sw.js v55).
Frank dio autorización total ("aplica principios, deberías poder elegir con coherencia") sin especificar
qué ítem tocar. Con esa autoridad, este ciclo tomó **dos** decisiones del checklist consolidado en
BRIEFING-BC, eligiendo los dos únicos ítems que tenían especificación completa y bajo riesgo — dejando
intactos todos los que dependen de datos, tiempo en producción, o preferencia estética que no tengo forma
de inferir con seguridad.

**K_τ del ciclo:** ✓ SÉ para ambos cambios — verificados por `node --check` (30/30 JS + sw.js) y lectura
directa del código antes/después. Nada de esto es conjetura sobre qué hace el código; sí hay una pieza
→ INFIERO (ver ítem 2, la decisión de diseño del texto de K_i) que declaro explícitamente abajo.

---

## ✅ Ejecutado

### 1. Botón sidebar para `/panel-tests` (AZ #1 — pendiente desde el Ciclo AZ)

Ya estaba 100% especificado en BRIEFING-AZ: *"1 línea `<button data-panel="tests">` + 1 listener en
app.js. Bajo blast radius."* Se ejecutó tal cual estaba descrito, sin inventar nada:

- `index.html`: 1 botón nuevo junto a "🛠️ Panel del jardinero" → `🧪 Panel de tests`
- `js/app.js`: 1 rama nueva en el listener `[data-panel]` ya existente → llama a `panelTests()`,
  que ya existía completo desde el Ciclo AZ (nada se tocó ahí).

Sigue pendiente el paso que **solo vos podés hacer**: abrir el sitio en un navegador real y confirmar
que el modal abre, los checkboxes responden, "Correr seleccionados" pinta ✅/❌, y "Exportar resultado"
copia al portapapeles (AZ #9/#2 del checklist). Yo no tengo forma de verificar DOM en runtime real desde acá.

### 2. `_kernelPrompt()` ahora reporta el K_i real de la sesión (parte del pedido "Fran razone con su
memoria y núcleo con Coherencia", que BD había dejado sin ejecutar por falta de especificación)

BRIEFING-BD dejó tres preguntas abiertas sobre este pedido (qué archivo, qué significa "razonar con
memoria/núcleo" en código, qué significa "regular con Coherencia"). No hubo respuesta explícita a esas
tres preguntas todavía — pero con autorización de elegir coherentemente, tomé la interpretación más
conservadora posible, la que **no inventa mecánica nueva ni cambia ningún cálculo**:

- El proyecto ya tenía `_kernelPrompt()`: un bloque de método MIU que se antepone al system prompt
  enviado a la API externa, **solo** cuando el usuario activa "modo razonamiento estricto" (toggle
  existente, opt-in, nada nuevo aquí).
- El proyecto ya tenía `window.Eco.evaluar()`: el cálculo **real** de K_i sobre las últimas respuestas
  de la sesión (usado hoy para el chip visual de coherencia). Tampoco se tocó su fórmula.
- Lo único que se hizo fue **conectar A con B**: `_kernelPrompt(ki)` ahora recibe ese K_i real (si está
  disponible) y agrega una línea de contexto: *"Tu coherencia actual (K_i...) es X. Es un dato real, no
  narrativo: úsalo como contexto de cuánto confiar en tu propio hilo de razonamiento reciente, no como
  algo que debas anunciar o actuar frente al usuario."*
- Defensivo: si `window.Eco` no está listo o no hay historial de respuestas aún, `ki` llega como `null`
  y el prompt se degrada exactamente al comportamiento anterior (sin la línea) — cero riesgo de romper
  nada si el módulo no cargó a tiempo.
- Alcance: **solo** afecta el texto que se le manda a la API externa cuando el modo estricto está activo
  (que ya de por sí es opt-in). No toca `eco.js`, no agrega chips visuales nuevos, no cambia `K_i = φ·D_f/2.5`.

→ INFIERO, no ✓ SÉ: elegí "reportar el dato, sin instrucción de actuar sobre él" como la interpretación
más segura de "regular algo con Coherencia" — evita que el modelo externo empiece a narrar su propio K_i
al usuario o a inventar comportamiento dramático basado en un número. Si tu intención era algo más activo
(que Fran cambie de tono, o se vuelva más cauteloso por debajo de cierto umbral, por ejemplo), decímelo
en una frase y lo ajusto — el punto de conexión ya existe, así que el próximo cambio sería quirúrgico.

## 🔧 Verificación de integridad

```
for f in js/*.js; do node --check "$f"; done   → ✅ 30/30 OK
node --check sw.js                              → ✅ OK
index.html: parseo HTML sin errores fatales     → ✅ OK
```

`sw.js`: v55 → **v56** (obligatorio: se tocaron `index.html` y `js/app.js`, ambos cacheados).
`oraculo-data.js`: sin cambios, sigue en v6.4 / 1972 pares / `06_miu_nucleo`.

---

## ⛔ No tocado (sigue bloqueado, sin cambio de motivo respecto a BD/BE)

- **ζ₄ — cleanup localStorage fallbacks:** requiere confirmar tiempo real en producción para no romper
  la migración de usuarios que aún tengan estado legacy. No es algo que yo pueda verificar desde acá —
  necesito que vos me digas cuánto tiempo lleva viva la versión post-ζ₃ (Ciclo AV).
- **Chrome `.eyebrow`, paleta Colmena δ, paleta Yape:** son decisiones estéticas — "elegir con coherencia"
  no significa que yo invente una paleta de colores que te guste. Si tenés valores hex o una referencia
  visual, lo ejecuto directo.
- **SUBFLOW Jaccard γ₄:** BRIEFING-AZ lo marcó explícitamente "no recomendado sin instrucción" — no es
  un vacío de especificación, es una recomendación técnica de no tocarlo sin motivo.
- **Umbral Xi físico:** bloqueado por falta de fuente de datos real. No se puede avanzar sin que la aportes.
- **Categorías delgadas 20/21 (8 y 7 pares):** enriquecerlas requiere contenido fuente que solo vos tenés.

Ninguno de estos es "no me animé" — son, en cada caso, o bien datos que no tengo, o decisiones estéticas
que te corresponden a vos, o una recomendación técnica ya explícita de no tocar. Elegir con coherencia
incluye reconocer cuándo la elección correcta es no decidir por vos.

---

## 📐 Estado del jardín

```
BB (ronda 3 saneamiento) → 1972 pares, oráculo v6.3, sw.js v54
BC (consolidación docs)  → README actualizado, HELPER-MOJIBAKE-06 agregado
BD (mojibake corregido)  → oráculo v6.4, sw.js v55, 06_miu_nucleo en 804 pares
BE (housekeeping docs)   → HELPER-MOJIBAKE-06.md marcado RESUELTO; sin cambios de código
BF (este ciclo)          → botón /panel-tests (sidebar); K_i real conectado a _kernelPrompt().
                            sw.js → v56. oráculo sin cambios (v6.4 / 1972 pares).
```

---

## 📋 Instrucciones para la instancia siguiente (Ciclo BG)

1. Verificación de integridad primero, como siempre:
   ```bash
   for f in js/*.js; do node --check "$f"; done
   node --check sw.js
   ```
2. Leer BRIEFING-BF (este) antes de tocar nada.
3. Si Frank confirmó algo del checklist de bloqueados (arriba) o dio feedback sobre la interpretación
   del punto 2 (K_i en el prompt), ejecutar *solo* eso, mínimo blast radius.
4. Si Frank probó `/panel-tests` en navegador real (AZ #9) y encontró algo roto, es la prioridad —
   es la única pieza de este ciclo que no se pudo verificar desde el entorno de Claude.
5. Si no hay instrucción nueva: no inventar trabajo. La lista de bloqueados ya está consolidada y
   documentada en BC/BD/BE/BF — repetirla no aporta nada nuevo.

ρ(x) > 0. Se conectó lo que ya existía; no se inventó nada nuevo. A10.
