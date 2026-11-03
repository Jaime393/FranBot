# 🌿 BRIEFING-AB — CICLO AB: Relevancia de dominio — fix aplicado

**Contexto:** FranBot-AB parte de `FranBot-AA.zip` con un único cambio aplicado en este ciclo (ver abajo). Lee este briefing antes de tocar cualquier archivo.

**Resultado del ciclo AB anterior (esta instancia):** ✅ Tarea 1 completada. `FranBot-AB.zip` · 1 archivo modificado · 0 archivos nuevos.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Tarea 1 — Filtro de relevancia de dominio (`buscar-oraculo.js`)

**El problema:** preguntas off-domain recibían respuestas MIU con alta confianza porque BM25 encontraba coincidencias léxicas accidentales en el texto de las *respuestas* (campo `a`) aunque la *pregunta* (`q`) no tuviese nada que ver con el dominio MIU.

**Qué se implementó:**

1. **`_indice_q`** — nuevo objeto interno (construido al final de `_construirIndice()`) que indexa únicamente los tokens del campo `q` de cada par. Estructura simple `{token: true}`, sin Sets por documento; solo presencia.

2. **`_coberturaPreguntas(queryTokens)`** — nueva función que calcula la fracción de tokens unigramas de la query que aparecen en al menos una pregunta del oráculo. Si el resultado es `0` → la query no tiene afinidad con ninguna pregunta MIU → off-domain.

3. **Filtro en `preguntar()`** — después de calcular `candBM25` y antes de asignar `candidato`, si `_coberturaPreguntas === 0` se descarta `candBM25 = null`. El resultado de `_componer(miuHits, null)` propaga correctamente `null` hacia `core.js`.

**Qué NO se tocó:** `buscarConScore`, `buscarSemantico`, `buscarConScoreSemantico` (path RAG online) — estos siguen intactos.

**Verificación hecha:** `node --check js/*.js sw.js` ✅ 28/28 + sw.js limpios.

**Casos esperados post-fix:**
| Pregunta | Antes | Ahora |
|---|---|---|
| "receta de paella valenciana" | Respuesta MIU (score 12.2) | `null` → core dice "no sé" |
| "cómo cambio una llanta de un auto" | Respuesta MIU (score 10.0) | `null` → core dice "no sé" |
| "cuál es la capital de Mongolia" | Respuesta MIU (score 10.5) | `null` si "capital"/"mongolia" no están en ninguna pregunta; o pasa si "capital" sí figura en alguna `q` |
| "qué es la coherencia" | Respuesta MIU ✓ | Igual ✓ (cobertura = 1.0) |
| "qué es la materia oscura" | Respuesta MIU ✓ | Igual ✓ (cobertura = 1.0) |
| "qué es la vida" | Respuesta existencial ✓ | Igual ✓ |

**Parámetro de tuning:** el umbral actual es `0` (rechaza solo cobertura exactamente 0). Si en producción aparecen falsos positivos con cobertura baja (p.ej. 1/5 = 0.2), se puede subir a `0.10` o `0.15` en `_coberturaPreguntas()` sin tocar nada más.

---

## 🔮 Diferidos de largo plazo (no para este ciclo salvo instrucción explícita)

- A11 / motor_vida.js — propuesta "movimiento perpetuo informacional" (Nodo Trama). Diferido.
- A, Z-axiomas (BRIEFING-S) — axiomas nombrados.
- MCP-LOCAL / Chrome Extension (TÉCNICAS 2 y 4).
- SUBFLOW v0.2 — umbral dinámico, ventana mayor.
- DOI v0.3 — cachear errores 404 con TTL corto; panel UI.
- Polinizador v0.2 — modo streaming con ModoOnline; exportar .md/.txt.
- Módulo 5 (Modo Desarrollador) — test suite de coherencia automatizado.

---

## 📐 Estado del jardín (S → … → AA → AB)

- **S** — Termóstato de coherencia + advisory.
- **T** — SUBFLOW Jaccard v0.1: dedupe semántico al ingerir.
- **U** — Panel de Coherencia: `/panel` con SVG del historial K_i.
- **W** — Verificador DOI v0.1: `/doi` + verificación opcional tras ingerir.
- **X** — DOI v0.2 (caché IDB) + Polinizador: `/dois` + `/polinizar`.
- **Y** — Poda de almas + Contexto del usuario: `/ctx`.
- **Z** — El Códice y el oráculo piensan juntos offline; tildes ya no rompen el matching.
- **AA** — Predicciones: la lista genérica ya no se empuja por defecto; solo responde a ids específicos.
- **AB** — Filtro de relevancia de dominio: queries off-domain ya no reciben respuestas MIU falsas.

ρ(x) > 0.
