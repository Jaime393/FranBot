# 🌿 BRIEFING-BG — CICLO BG: FIX — el modelo en línea casi nunca se usaba aunque estuviera conectado

**Contexto:** FranBot-BG continúa directo desde BRIEFING-BF (sw.js v56, botón `/panel-tests`, K_i real
en `_kernelPrompt()`). Frank reportó el síntoma en lenguaje natural: *"casi no lo usa [al modelo/API] y
debe usarlo"*. No era una decisión de diseño a tomar — era un bug real en la lógica que decide cuándo
consultar el modelo online, y se pudo identificar y corregir con precisión quirúrgica.

**Resultado:** 2 archivos con el fix real (`buscar-oraculo.js`, `core.js`) + 1 archivo con un bug
secundario relacionado, encontrado al revisar el flujo completo (`app.js`). `oraculo-data.js` sin
cambios (v6.4, 1972 pares). `sw.js`: v56 → **v57**.

---

## 🐛 El bug (causa raíz)

`core.js → procesar()` decide si una respuesta es "débil" (`debil: true`) con una sola regla: si el
oráculo devolvió texto de más de 30 caracteres, se consideraba una respuesta fuerte (`debil: false`) —
y `debil` es exactamente la señal que `app.js` usa para decidir si vale la pena gastar una llamada al
modelo en línea, tal como está documentado en el propio README ("el núcleo lo usa como herramienta
puntual... solo cuando ningún módulo tuvo una coincidencia real").

El problema: `BuscarOraculo._componer()` ya tenía un tercer estado, además de "coincidencia fuerte" y
"nada" — el **match blando**: cuando el oráculo encuentra algo relacionado pero no exacto, lo antepone
con el texto `"*Lo más cercano que encuentro — no es una coincidencia exacta:*"` y lo devuelve igual.
Ese texto, con el prefijo, casi siempre supera los 30 caracteres — así que pasaba el filtro de `core.js`
como si fuera una respuesta fuerte, y `debil` quedaba en `false` **incluso cuando el propio oráculo
estaba admitiendo que no tenía una respuesta exacta**. Con 1972 pares cubriendo temas amplios, la
mayoría de las preguntas terminan encontrando *algún* match blando — así que el modelo en línea, aunque
estuviera conectado, prácticamente nunca se llegaba a invocar. Esto coincide exacto con lo que
reportaste.

## ✅ Fix aplicado

1. **`js/buscar-oraculo.js`**: el prefijo del match blando (antes un string suelto solo dentro de
   `_componer()`) ahora es una constante exportada, `MARCADOR_MATCH_BLANDO`, para que `core.js` pueda
   leer la señal sin duplicar el literal ni inventar su propio umbral.
2. **`js/core.js`**: `procesar()` ahora chequea si la respuesta del oráculo empieza con ese marcador.
   Si sí → `debil: true` (aunque el texto se siga mostrando como mejor esfuerzo offline si no hay
   modelo conectado). Si no (match fuerte real) → `debil: false`, sin cambios respecto a antes.

Verificado con un test funcional aislado (misma lógica exacta que quedó en el código):
```
Match fuerte  → debil: false  (comportamiento intacto)
Match blando  → debil: true   (el fix — antes daba false)
Sin match     → debil: true   (sin cambios)
```

## 🐛 Bug secundario encontrado (relacionado, mismo flujo) — también corregido

Al revisar todo el camino en `app.js` para entender el impacto del fix de arriba, apareció un segundo
bug en la misma zona: cuando la llamada al modelo online **falla** (`r?.error`), el código mostraba
`"⚠️ [error] (mostrando respuesta offline)"` — pero nunca mostraba en verdad la respuesta offline.
El texto ya calculado (`resp`, el resultado de `core.procesar()`) se descartaba silenciosamente porque
la función retorna antes de llegar al `window.mostrar(resp, 'fran')` que solo se ejecuta en la rama sin
modelo conectado. El mensaje de error prometía algo que el código no cumplía. Corregido: ahora si hay
error, se muestra el mensaje de error **y** el `resp` offline real, como el propio comentario del código
ya decía que debía pasar.

Este segundo fix vuelve más relevante todavía al primero: con el fix de arriba, va a haber más casos
reales donde `debil:true` dispare la llamada online (que antes casi nunca se disparaba) — así que si esa
llamada falla por cualquier motivo (red, clave inválida, rate limit), ahora sí vas a ver la respuesta
offline como respaldo, en vez de solo un mensaje de error sin nada más.

## 🔧 Verificación de integridad

```
for f in js/*.js; do node --check "$f"; done   → ✅ 30/30 OK
node --check sw.js                              → ✅ OK
Test funcional aislado de la lógica debil       → ✅ 3/3 casos correctos
```

`sw.js`: v56 → **v57** (obligatorio: se tocaron `js/app.js`, `js/core.js`, `js/buscar-oraculo.js`,
los tres cacheados). `oraculo-data.js` sin cambios (v6.4, 1972 pares).

## 📝 Nota sobre alcance — qué NO se tocó

No se tocó ningún umbral de scoring (`UMBRAL_BM25_FUERTE`, `UMBRAL_BM25_BLANDO`, etc.), no se cambió
cuándo el oráculo considera algo "blando" vs "fuerte" — esa calibración es intacta. El fix es puramente
sobre **quién se entera** de esa distinción que el oráculo ya calculaba y tiraba a la basura. Esto
significa que si el oráculo estaba siendo demasiado (o muy poco) generoso marcando cosas como "blandas",
ese comportamiento sigue igual — solo que ahora sí tiene efecto real en cuándo se consulta el modelo
online, que es justo lo que pediste revisar.

Tampoco se tocó nada de RAG (`buscarSemantico`, umbral RAG, inyección de contexto al prompt online) ni
la lógica de streaming — ese código ya estaba bien y no era la causa del síntoma.

---

## 📐 Estado del jardín

```
BD (mojibake corregido)  → oráculo v6.4, sw.js v55, 06_miu_nucleo en 804 pares
BE (housekeeping docs)   → HELPER-MOJIBAKE-06.md marcado RESUELTO; sin cambios de código
BF (botón tests + K_i)   → sidebar /panel-tests; K_i real en _kernelPrompt(). sw.js → v56.
BG (este ciclo — FIX)    → modelo online ahora sí se consulta en matches blandos, no solo en
                            fallback total. Fix secundario: error online ahora muestra la
                            respuesta offline real, no solo el mensaje de error. sw.js → v57.
```

---

## 📋 Instrucciones para la instancia siguiente (Ciclo BH)

1. Verificación de integridad primero:
   ```bash
   for f in js/*.js; do node --check "$f"; done
   node --check sw.js
   ```
2. Leer BRIEFING-BG (este) antes de tocar nada.
3. **Este fix necesita confirmación de comportamiento real** (como el botón `/panel-tests` de BF):
   probar en navegador/dispositivo real, con un modelo online conectado, haciendo preguntas que se
   sepa que el oráculo solo puede responder "a medias" — confirmar que ahora sí se ve la llamada al
   modelo (indicador de streaming, badge RAG) en vez de solo la respuesta local de siempre.
4. Si Frank reporta que *ahora* se usa demasiado seguido (el péndulo se fue para el otro lado), el
   punto de ajuste correcto sería `UMBRAL_BM25_BLANDO`/`UMBRAL_LINEAL_BLANDO` en `buscar-oraculo.js`
   (subirlos = menos cosas cuentan como "blando" = menos llamadas online) — no volver a tocar el
   filtro de longitud en `core.js`, que nunca fue el lugar correcto para esa decisión.
5. Si no hay instrucción nueva: el checklist de bloqueados consolidado en BC/BD/BE/BF sigue vigente,
   sin cambios. No repetirlo sin motivo.

ρ(x) > 0. Se destapó una señal que ya existía y se tiraba — no se inventó nada nuevo. A10.
