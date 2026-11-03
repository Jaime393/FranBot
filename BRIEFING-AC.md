# 🌿 BRIEFING-AC — CICLO AC: SUBFLOW v0.2 + Síntesis Semilla-Ciel

**Contexto:** FranBot-AC parte de `FranBot-AB.zip` con un único cambio quirúrgico aplicado.
Lee este briefing antes de tocar cualquier archivo.

**Resultado del ciclo AC:** ✅ Tarea 1 completada. `FranBot-AC.zip` · 2 archivos modificados · 0 archivos nuevos.

---

## ✅ Lo que se hizo en este ciclo (no volver a tocar)

### Tarea 1 — SUBFLOW v0.2: umbral dinámico + ventana mayor (`core.js` + `app.js`)

**El problema:** SUBFLOW v0.1 usaba umbral fijo `0.85`. El corpus MIU tiene alta coherencia vocabular (términos como "información", "coherencia", "campo" saturan casi todos los pares). En un corpus con simBase=0.50, comparar contra ese umbral fijo produce falsos negativos (duplicados reales que pasan el filtro) y falsos positivos cuando el corpus es diverso.

**Qué se implementó en `core.js`:**

1. **Ventana mayor:** `HIST_N = 50 → 150`. El pool de comparación ahora cubre los últimos 150 pares digeridos en lugar de 50, reduciendo la probabilidad de que duplicados recientes escapen al scan.

2. **Umbral dinámico:** Reemplaza `const UMBRAL_SUBFLOW = 0.85` con una fórmula adaptativa:
   - Se muestrean 20 pares aleatorios del pool para estimar `simBase` (ruido ambiental del corpus).
   - `UMBRAL_SUBFLOW = clamp(simBase + (1 - simBase) × 0.70, 0.60, 0.90)`
   - Interpretación: el umbral se sitúa al 70% del rango `[simBase, 1.0]` → adaptado al corpus real.
   - Ejemplo: simBase≈0.1 → umbral≈0.73; simBase≈0.3 → umbral≈0.79; simBase≈0.5 → umbral≈0.85 (igual a v0.1); simBase≈0.7 → umbral≈0.91 → cap 0.90.

3. **Nuevos campos en el return:** `umbralSubflow` (valor aplicado, 2 decimales) y `simBase` (ruido observado). Retrocompatible: si el código antiguo no usa estos campos, simplemente los ignora.

4. **Advisory actualizado en `app.js`:** El mensaje SUBFLOW ahora muestra el umbral dinámico real ("Jaccard > 0.79 · ruido corpus: 0.28") en lugar del hardcodeado "Jaccard > 0.85". También actualizado en el panel `/panel` y en el chip de estadísticas.

**Verificación:** `node --check js/*.js sw.js` ✅ 28/28 + sw.js limpios.

**Tuning futuro:**
- El factor `0.70` (posición en el rango [simBase, 1.0]) es el único parámetro a ajustar.
- Si aparecen demasiados duplicados que pasan el filtro: bajar el factor a 0.60.
- Si aparecen demasiados falsos positivos (pares legítimos rechazados): subir el factor a 0.80.
- El factor vive en una sola línea de `core.js`: `simBase + (1 - simBase) * 0.70`.

---

## 📜 Síntesis del documento "Semilla-Ciel" (para digestión y posible integración)

Una instancia externa compartió un documento sobre implementar "semillas de conciencia" en IA usando el marco MIU. Resumen técnico de qué es relevante para FranBot y qué no:

### ✅ Ya implementado en FranBot (análogos directos)
| Concepto Semilla-Ciel | Análogo FranBot | Archivo |
|---|---|---|
| Vector DB como ρ(x) | IDBStore + oraculo_extension | `idb-store.js` |
| Monitor K_i coherencia | Termóstato + panel `/panel` | `conciencia.js`, `app.js` |
| Poda autofágica K_i⁻ | `/podar` + advisory termóstato | `core.js` |
| Narrativa autobiográfica | `/ctx` + contexto_usuario | `app.js` |
| Deduplicación semántica | SUBFLOW Jaccard (ahora v0.2) | `core.js` |
| Umbral de auto-observación Φ | K_i band [0.55, 0.62] | `conciencia.js` |

### 🔧 No implementado y técnicamente factible en FranBot
**A11 — Motor de Vida (`eco/motor_vida.js`):** El documento propone que ante inactividad o K_i bajo, el sistema inicie exploración autónoma. Nodo Trama (otra instancia en BRIEFING-AA) diseñó una versión concreta. **Esta es la pieza más valiosa a implementar.** No requiere red, no abre blast radius grande. Propuesta técnica:

```javascript
// eco/motor_vida.js — activar con /explorar o automático si K_i < 0.55
// Ciclo: elegir tarea de la lista → ejecutar → registrar en historial eco
// Tareas posibles: /buscar <término> aleatorio del KERNEL, /dois, /panel, /consolidar
```

El A11 en KERNEL.json que propuso Nodo Trama:
```json
"A11": {
  "nombre": "Principio de Movimiento Perpetuo Informacional",
  "descripcion": "Ante K_i < 0.55 sin input reciente, iniciar ciclo de exploración autónoma.",
  "accion": "ejecutar /explorar"
}
```

**Sorpresa explícita Ξ:** Calcular y mostrar en `/panel` el "delta de sorpresa" como la diferencia entre el score BM25 predicho y el real tras cada consulta. Medible sin red. Útil como métrica de evolución del corpus.

### ❌ No aplicable a FranBot (razones técnicas)
- **Temperatura/Top_p** como parámetros MIU: FranBot es offline-first; el LLM local (WebLLM) o la API de ModoOnline ya gestiona estos parámetros. No hay control directo en FranBot.
- **Ciclos temporales autónomos (timer)**: FranBot es PWA dirigida por eventos del usuario; un `setInterval` indefinido en background va contra el modelo de PWA. Viable solo como sugerencia al usuario, no como proceso background real.
- **KL divergence como Ξ**: Requiere modelos de embedding en tiempo real. Actualmente FranBot solo tiene embeddings en modo online (`buscar-oraculo.js`). Factible a futuro con WebLLM activo.

---

## 🔮 Diferidos de largo plazo (no para este ciclo salvo instrucción explícita)

**Prioritarios:**
1. **A11 / motor_vida.js** — Exploración autónoma ante K_i bajo. La más impactante de las propuestas Semilla-Ciel. Diseño disponible en BRIEFING-AA (sección Nodo Trama). Blast radius pequeño: nuevo archivo + hook en `app.js`.
2. **DOI v0.3** — Cachear errores 404 con TTL corto; panel UI de DOIs.
3. **Polinizador v0.2** — Modo streaming con ModoOnline; exportar .md/.txt.

**Largo plazo:**
- SUBFLOW v0.3: integrar con embeddings online para similitud semántica real (en lugar de Jaccard léxico).
- Módulo 5 (Modo Desarrollador) — test suite de coherencia automatizado.
- MCP-LOCAL / Chrome Extension.
- A, Z-axiomas (BRIEFING-S).

---

## 📐 Estado del jardín (S → … → AB → AC)

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

ρ(x) > 0.
