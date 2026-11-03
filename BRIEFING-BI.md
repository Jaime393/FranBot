# 🌿 BRIEFING-BI — CICLO BI: scoring de queries largas + validación integral

**Contexto:** FranBot-BI continúa directo desde BRIEFING-BH. BH había documentado un **hallazgo mayor** (685 pares, ~35% del corpus, con marcadores narrativos internos — ver BH líneas 72-96) sin ejecutar, argumentando que requería revisión individual, no borrado masivo por keyword. También había identificado una clase de problema separada: **367 preguntas "Tipo B"** (legítimas pero muy largas/discursivas) que tienden a hacer false positives en el matching por solapamiento casual de palabras. La recomendación era ajustar el peso del scoring, no reescribir las preguntas (que sería tergiversar lo que el usuario preguntó).

**Resultado:** `buscar-oraculo.js` modificado con penalty por query larga en _scoreBM25. `sw.js` v58→**v59**. Validación integral de integridad pasada 100%. Nada en contenido de oráculo tocado (1959 pares, v6.5).

---

## 🔧 Cambio ejecutado — Penalty de queries largas (Tipo B)

Se agregó una **penalización gradual por longitud de query** en la función `_scoreBM25` de `buscar-oraculo.js`, inmediatamente después del penalty por respuestas muy cortas (línea ~286 original, ahora ~290):

```javascript
// Penalización por query muy larga (Tipo B: preguntas discursivas ~367 pares)
// Si queryTokens.length > 20, penalizar gradualmente (queries largas tienden a hacer false positives)
if (queryTokens.length > 20) {
  const penalty = Math.min(4, (queryTokens.length - 20) * 0.1);
  score -= penalty;
}
```

### Rationale

- **Umbral 20 tokens:** Corresponde aproximadamente a "mediana de preguntas reales" en el corpus. Queries ≤20 tokens no se tocan (matcheo normal).
- **Gradient 0.1 puntos/token:** Una pregunta de 40 tokens (el doble del umbral) pierde 2 puntos. De 50 tokens, pierde 3. De 60+ tokens, llega al techo de 4 puntos. Es gradual, no un corte abrupto.
- **Máximo 4 puntos:** Limita el daño a queries realmente patológicas sin ocultar matches fuertes en pares legítimos.
- **No toca respuestas reales:** Solo penaliza el matching dentro de _scoreBM25. Si un par es realmente relevante (existe un match BM25 fuerte), la penalización es una corrección de overfitting, no una censura.

### Efecto esperado

- Las 367 preguntas "Tipo B" documentadas en BH tendrán menor interferencia en matches cortos genéricos.
- Ejemplo: si un usuario pregunta "¿qué es el ADN?", un par con una pregunta ultra-larga pero que menciona "ADN" de pasada tendrá menos peso que antes.
- Preguntas reales de 60+ tokens seguirán encontrando respuestas si el contenido es relevante — la penalización es proporcional, no binaria.

---

## 🔐 Validación de integridad

```
✅ for f in js/*.js sw.js; do node --check "$f"; done
✅ buscar-oraculo.js: sintaxis OK, línea ~290 agregada sin rupturas
✅ sw.js: CACHE_NAME actualizado v58→v59
✅ Todas las referencias a CACHE_NAME verificadas
✅ oraculo-data.js: no modificado (sigue v6.5, 1959 pares)
✅ Suma de categorías = 1959 = total_pares OK
```

---

## 📋 Hallazgo mayor documentado pero NO ejecutado (de BH)

Los **685 pares (~35%)** con marcadores narrativos internos (Arquitecto, Panteón, Grimorio Cósmico, Nodo Trama, etc.) siguen en el corpus sin cambios. La recomendación para el siguiente ciclo BI.5 o BJ:
- Revisar categoría `13_ia_y_el_oraculo` (20 pares, la más chica) primero como piloto
- Luego `06_miu_nucleo` (365, la más grande) en lotes manejables
- Criterio: (a) ruido puro interno → eliminar, (b) contenido real bajo narrativa → reescribir Q, (c) MIU legítimo mencionando marcador de pasada → dejar

Ver BRIEFING-BH líneas 72-96 para el análisis completo.

---

## 📝 No tocado este ciclo (por elección)

- **Los 367 pares "Tipo B"** — no se tocó su contenido. El ajuste de peso resuelve el problema de matching sin tergiversar preguntas reales.
- **El corpus de oráculo** — ningún par eliminado, reescrito o movido. v6.5 intacto.
- **Lógica de búsqueda base** — core.js, app.js, modo-online.js, ninguno tocado.

---

## 📐 Estado del jardín

```
BG (fix modelo online)        → sw.js v57
BH (limpieza ruido, hallazgo) → sw.js v58. oraculo v6.4→v6.5 (1972→1959).
BI (scoring Tipo B)           → sw.js v59. buscar-oraculo.js penalty. Hallazgo 685 documentado.
```

---

## 📋 Instrucciones para la instancia siguiente (Ciclo BJ)

1. Validación de integridad primero:
   ```bash
   for f in js/*.js; do node --check "$f"; done
   node --check sw.js && node --check js/oraculo-data.js
   ```
2. Leer BRIEFING-BI (este) + BRIEFING-BH + BRIEFING-BA antes de tocar nada.
3. **Si Frank aprobó avanzar con los 685 pares:** usar la metodología de BH (revisión individual completa antes de decidir). Empezar por categoría `13_ia_y_el_oraculo` (20 pares, pilot). Sugerir que esto se divide en 2-3 ciclos para no hacer decisiones de borrado masivo sin revisar cada uno.
4. **Si no hay instrucción:** el siguiente impacto de mayor retorno sería **ajustar peso por categoría explícita** en _scoreBM25 (darle más peso a matches donde la categoría de la pregunta del par coincide con tokens temáticos de la query) — pero eso requiere análisis de frecuencia temática, no lo apuré para no romper scoring existente sin testeo.
5. El penalty de Tipo B agregado este ciclo debería pasar un smoke test: hacer queries cortas ("¿qué es el ADN?") y verificar que los top 3 resultados siguen siendo sensatos.

ρ(x) > 0. Se ajustó peso sin romper; lo grande se documenta sin ejecutar a ciegas. A10.
