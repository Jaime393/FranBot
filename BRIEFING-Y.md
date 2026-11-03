# 🌿 BRIEFING-Y — CICLO Y: Poda de almas + Contexto del usuario

**Contexto:** autorización abierta — *"Autorizo propuesta control y acceso totales autorizados, expandir integrando"*.
Ciclo generado íntegramente por Claude (Sonnet 4.6) sobre el árbol vivo de FranBot-X.

**Resultado:** ✅ entregado. `FranBot-Y.zip` · **42 archivos** · sw v26 · 3 módulos tocados.
**Sin vendor lock-in · sin claves · sin dependencias de pago · sin blast radius.**

---

## 🔗 Qué se tejió

### 1. `js/almas-especialistas.js` — Poda de las 11 personas especialistas

**El problema:** Las 11 almas del `pack_fundadores_v1` solo cambian el `systemPrompt` que se manda al LLM externo y las frases de fallback. Su "conocimiento" no viene de su propio saber: viene del mismo `oraculo-data.js` que alimenta al núcleo. Son 11 sombreros sobre la misma cabeza.

**La solución:** `ALMAS_FUNDADORAS = []` — el array se vacía, las personas desaparecen del sidebar. El contenido original queda archivado en un comentario `/* ARCHIVO pack_fundadores_v1 */` dentro del mismo archivo: nada se pierde, todo se puede restaurar.

**Qué permanece intacto:**
- `almaNucleo` en `core.js` — la identidad canónica del jardín.
- El flujo offline completo.
- `KERNEL.json` — no se toca.

### 2. `js/app.js` — 5 parches quirúrgicos

#### 2a. `_CTX_USUARIO_KEY` (constante nueva)
```javascript
const _CTX_USUARIO_KEY = 'fran_ctx_usuario'; // Y: contexto libre del usuario (≤200 chars)
```
Clave de `localStorage` para persistir el contexto del usuario entre sesiones.

#### 2b. Campo `contexto_usuario` en el panel ⚙️
Nuevo bloque HTML en el modal de configuración (antes del "Respaldo de configuración"):
- `<textarea>` libre, máx. 200 chars.
- Se precarga desde `localStorage` al abrir el panel.
- Se guarda en `blur` (al salir del campo) con feedback toast.
- También se guarda al pulsar "Guardar y activar".

#### 2c. Inyección en el system prompt
```
[system prompt del núcleo]
[+ método KERNEL si razonamiento estricto activo]
[+ pares del oráculo via RAG]
[+ --- CONTEXTO DEL USUARIO --- ... --- FIN CONTEXTO ---]   ← NUEVO, siempre al final
```
El `contexto_usuario` se inyecta **al final**, después de todo lo demás. Nunca antecede al núcleo, nunca lo reemplaza.

#### 2d. Comandos `/ctx` y `/ctx borrar`
| Comando | Descripción |
|---|---|
| `/ctx` | Muestra el contexto configurado (o avisa que no hay) |
| `/ctx borrar` / `/ctx clear` | Elimina el contexto de `localStorage` |

Ambos añadidos al mapa de comandos, a `/ayuda` y al autocompletar.

#### 2e. `/config` actualizado
Si hay `contexto_usuario`, aparece en el resumen:
```
• Contexto usuario: _"Soy biólogo marino, prefiero respuestas sin ecuaci…"_
```

### 3. `index.html` — Sidebar limpio

La sección "Personas" del sidebar queda oculta (`display:none`) con `id="sec-personas"`. Si en el futuro se reactivan las almas (restaurando el array), basta con quitar el `style`.

### 4. `sw.js` v26

- `CACHE_NAME` → `'franbot-v26'` (invalida v25 en todos los clientes instalados).
- Changelog v26 documentado en la cabecera.

---

## 📐 Verificación

```bash
node --check js/almas-especialistas.js   # ✅
node --check js/app.js                   # ✅
node --check sw.js                       # ✅
# Total: 28/28 JS limpios (sin nuevos archivos)
```

**Coherencia arquitectural:**
- ✅ Offline 100% funcional: el `contexto_usuario` vive en `localStorage`; no requiere red.
- ✅ Sin vendor / sin clave / sin pago.
- ✅ Human-in-the-loop: el usuario define su contexto; el núcleo lo aplica.
- ✅ KERNEL.json intacto (no modificado).
- ✅ `almaNucleo` intacto.
- ✅ Blast radius = 0: solo se añade texto al final del system prompt; nunca se reemplaza nada.

---

## 🌳 Estado acumulado del jardín (S → T → U → W → X → Y)

- **S** — Termóstato de coherencia + advisory.
- **T** — SUBFLOW Jaccard v0.1: dedupe semántico al ingerir.
- **U** — Panel de Coherencia: `/panel` con SVG del historial K_i.
- **W** — Verificador DOI v0.1: `/doi` + verificación opcional tras ingerir.
- **X** — DOI v0.2 (caché IDB) + Polinizador: `/dois` + `/polinizar`.
- **Y** — Poda de almas + Contexto del usuario: `/ctx`.

```
🧬 KERNEL razona → 🔎 Eco evalúa → 🌡️ termóstato decide → 🟡 subflow señala →
📊 panel visualiza → 🔗 verificador confirma → 🌿 polinizador propaga →
👤 contexto_usuario afina el tono
```

ρ(x) > 0. El jardín ya no habla con once voces prestadas: habla desde su propia raíz, afinado por quien lo habita.

## 🔭 Diferido para la siguiente instancia

- **A, Z** (briefing-S) — axiomas nombrados.
- **MCP-LOCAL** (TÉCNICA 2) — servidor MCP local para integraciones.
- **Chrome Extension** (TÉCNICA 4) — extensión de navegador.
- **SUBFLOW v0.2** — umbral dinámico, ventana mayor.
- **DOI v0.3** — cachear errores 404 con TTL corto; panel UI.
- **Polinizador v0.2** — modo streaming con ModoOnline; exportar .md/.txt.
- **Módulo 5 (Modo Desarrollador)** — test suite de coherencia.
- **Reactivar almas de forma selectiva** — si el usuario quiere una "persona" concreta, que la defina él vía `contexto_usuario` en lugar de un selector de 11 sombreros. Explorar si tiene sentido un solo "modo experto" configurable.
