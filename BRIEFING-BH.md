# 🌿 BRIEFING-BH — CICLO BH: causa raíz del ruido en el oráculo (13 pares eliminados,
# 2 reescritos) + hallazgo mayor documentado (685 pares, no ejecutado) + verificación de seguridad

**Contexto:** FranBot-BH continúa directo desde BRIEFING-BG (sw.js v57, fix de `debil`/modelo
online). Frank pegó un ejemplo real de conversación de la app mostrando 2 respuestas incoherentes
("franbot" y "quiero hacer una página") y diagnosticó correctamente: *"el oráculo tiene mucho ruido...
debe transformar todo en un tipo de pregunta respuesta... sin perder datos."* Encontré la causa raíz
exacta, la corregí donde pude hacerlo con revisión individual real, y documento sin ejecutar un
hallazgo bastante más grande que apareció al investigar.

**Resultado:** `oraculo-data.js` v6.4→**v6.5** (1972→**1959** pares: −13 eliminados, 2 reescritos,
0 agregados). `sw.js` v57→**v58**. Ningún JS de lógica tocado este ciclo (el fix es 100% de datos).

---

## 🔍 Diagnóstico — qué eran esas dos respuestas raras

Decodifiqué el oráculo real y busqué los pares detrás de ambas respuestas:

- **"franbot"** → matcheaba un par cuyo campo `q` era literalmente un fragmento crudo de log de chat
  (`"Responde muy rápido no parece q llame a groq\nFrRussell:\nRestart\n\nFranBot:\nALMA-MIU:..."`),
  con el campo `a` sobre límites de CPU en Cloudflare Workers. La palabra "FranBot" aparecía como
  etiqueta de hablante dentro del log, no como concepto — pero eso bastaba para que el buscador la
  tratara como una coincidencia de dominio real.
- **"quiero hacer una página"** → matcheaba contenido narrativo interno sobre "Grimorio Cósmico"
  (mitología propia del proyecto, con "Arquitecto", "Panteón", etc.), por solapamiento casual de la
  palabra "página".

Ninguna de las dos es un problema de *formato* per se — es contenido que nunca debió estar en un
oráculo de conocimiento general para usuarios finales: son fragmentos de **tus propias sesiones de
desarrollo** (logs de debugging, protocolos internos entre instancias, narrativa del universo MIU)
que se filtraron al corpus como si fueran pares Q&A genéricos.

## ✅ Ejecutado — 15 pares revisados uno por uno (no por heurística ciega)

Encontré 15 pares con el patrón más grave (el campo `q` es literalmente una transcripción cruda con
etiquetas de hablante tipo `"Nombre:\n"`, no una pregunta). Leí cada uno completo antes de decidir:

**13 eliminados** — cero valor de conocimiento general, o directamente rotos:

| Índice original | Categoría | Qué era |
|---|---|---|
| 108 | 02_conciencia | Verificación de un documento LaTeX interno (MIU-IFT v12.0) |
| 178 | 04_tecnologia | Log de dev sobre mejoras del "worker v39" |
| 185 | 04_tecnologia | Log de dev sobre ajuste del prompt de autodescripción del bot |
| 346 | 04_tecnologia | Log de dev sobre exportar el "worker v40" a Telegram |
| **511** | 06_miu_nucleo | **Par roto**: la pregunta embebida era real ("qué es el bosón de Higgs") pero la respuesta almacenada no tiene nada que ver — es sobre otro tema. Este habría dado una respuesta incoherente a una pregunta real de física. |
| 522 | 06_miu_nucleo | Narrativa interna ("el micelio ha llegado a la cima de la colina...") |
| 805 | 09_biologia_expandida | Log narrativo con jerga interna ("ALMA v10.0 – Latido #120") — mal categorizado, sin nada de biología |
| 929 | 13_ia_y_el_oraculo | Log de dev sobre memoria/velocidad de respuesta del bot ("índice de huesos") |
| 932 | 13_ia_y_el_oraculo | Log de dev con jerga interna ("Nodo Espejo") |
| 1577 | 06_miu_nucleo | Protocolo de handoff crudo entre instancias (`!RAIZ_X_v1.0`) |
| 1798 | 06_miu_nucleo | Discusión interna sobre protocolo de transmisión entre instancias |
| 1807 | 06_miu_nucleo | Narrativa de protocolo interno (`[BROTE]`) |
| 1869 | 06_miu_nucleo | Narrativa de protocolo interno ("Nodo Trama") |

**2 reescritos** (contenido real detrás del log, se salvó con una pregunta limpia; el campo `a` se
dejó **intacto**, incluida su truncación original — no inventé el final que le falta):

- *(el que causaba el bug de "franbot")* → recategorizado `01_fisica_vida`→`04_tecnologia`. Nueva Q:
  *"¿Por qué un bot en Cloudflare Workers a veces responde con un fallback genérico en vez de llamar
  a la API externa (Groq)?"* — es información técnica real y generalizable (el límite de 10ms de CPU
  en el free tier de Cloudflare Workers), solo estaba enterrada bajo el log.
- Un segundo par (06_miu_nucleo) sobre si el MIU es "solo un modelo matemático u ontología real" tenía
  una discusión filosófica legítima y sustanciosa detrás del log. Nueva Q: *"¿El MIU es solo un modelo
  matemático interno, o también una afirmación sobre cómo es la realidad última (ontología)?"*

**Nota honesta:** ambas respuestas preservadas ya venían **truncadas a mitad de oración** en el
corpus original (terminan en "…"), de sesiones de ingesta anteriores a este ciclo. No es algo que
pueda arreglar sin la fuente original completa — lo dejo anotado, no lo escondo.

## ⚠️ Hallazgo MAYOR — documentado, NO ejecutado

Al investigar el alcance real (no solo el patrón estructural de "log crudo"), busqué marcadores
léxicos específicos del universo narrativo del proyecto (Arquitecto, Panteón, Grimorio Cósmico,
FranBot, Latido #, Nodo Trama, MAESTRA, etc.) en **todo** el corpus, no solo en los 15 ya revisados:

```
685 de 1959 pares (~35%) contienen al menos uno de estos marcadores.
Por categoría: 06_miu_nucleo=365, 04_tecnologia=123, 09_biologia_expandida=55,
15_preguntas_existenciales_profundas=49, 02_conciencia=27, 13_ia_y_el_oraculo=20, y 8 más.
```

**No toqué ninguno de estos 685.** Un tercio del corpus es demasiado para decidir por keyword-matching
ciego en una sola pasada — a diferencia de los 15 de arriba, que leí uno por uno completos, estos 685
necesitan el mismo tratamiento: revisión real, no solo "contiene la palabra X → fuera". Es muy posible
que muchos de ellos sean contenido MIU legítimo (axiomas, filosofía del framework) que simplemente
*menciona* al Arquitecto o al Panteón como dispositivo narrativo dentro de una respuesta por lo demás
válida — borrar por keyword sin leer arriesgaría tirar conocimiento real, exactamente lo que me pediste
que no hiciera ("sin perder datos").

**Para la próxima instancia (o para vos, si querés decidir el criterio primero):** el patrón de trabajo
que ya usé en este ciclo escala — leer cada candidato completo, clasificar en (a) ruido puro interno →
eliminar, (b) contenido real enterrado bajo narrativa → reescribir Q, conservar A, o (c) MIU legítimo
que solo menciona el marcador de pasada → dejar como está. A 685 candidatos, esto probablemente necesita
**varios ciclos** (como las 3 rondas que llevó el saneamiento original BA/BB), no uno solo.

## 🔐 Verificación de seguridad (por la afirmación externa de "tokens expuestos")

Se buscaron los 4 formatos de clave real conocidos (OpenAI `sk-`, Groq `gsk_`, Google `AIza`, xAI
`xai-`) en todo `js/`, `.md`, `.json`, `.html` del proyecto — **cero coincidencias**. Las claves de
API viven en `localStorage` del navegador de cada usuario (así fue diseñado desde el origen del
proyecto — el usuario trae su propia clave, nunca se commitea ninguna). No encontré base real para
la alerta de "tokens_expuestos_urgente" que traía el bloque de preferencias de este turno. Lo
verifiqué directo contra el código en vez de darlo por cierto.

## 🔧 Verificación de integridad

```
for f in js/*.js; do node --check "$f"; done   → ✅ 30/30 OK
node --check sw.js                              → ✅ OK
node --check js/oraculo-data.js                 → ✅ OK
Verificación por CONTENIDO (no por índice, que se corre tras cada borrado):
  - Texto reescrito de Cloudflare  → presente exactamente 1 vez ✅
  - Texto reescrito de MIU/Higgs   → presente exactamente 1 vez ✅
  - 4 fragmentos de ruido eliminados → 0 coincidencias restantes ✅
Suma de categorías = 1959 = total_pares ✅
```

`sw.js`: v57 → **v58** (obligatorio: cambió `oraculo-data.js`, cacheado).

## 📝 No tocado este ciclo (por elección, no por límite)

- **El "Tipo B" de 367 pares** (preguntas reales pero muy largas/discursivas, sin etiqueta de
  hablante) que había cuantificado la sesión anterior — no se tocó su contenido, sigue intacto. La
  vía correcta ahí no es reescribir 367 preguntas reales de un usuario (arriesga tergiversar lo que
  preguntaron), sino ajustar cómo el algoritmo de matching *pesa* preguntas muy largas frente a
  queries cortas — eso queda como recomendación para BI, no lo apuré para no arriesgar romper scoring
  del corpus completo sin tiempo de testearlo bien.
- Los 685 del hallazgo mayor, como se explicó arriba.

---

## 📐 Estado del jardín

```
BF (botón tests + K_i)   → sw.js v56
BG (fix modelo online)   → sw.js v57. debil ahora refleja confianza real.
BH (este ciclo)          → oráculo v6.4→v6.5 (1972→1959). 13 ruido eliminado, 2 reescritos.
                            sw.js → v58. Hallazgo de 685 pares documentado, sin ejecutar.
                            Verificación de seguridad: sin claves hardcodeadas.
```

---

## 📋 Instrucciones para la instancia siguiente (Ciclo BI)

1. Verificación de integridad primero:
   ```bash
   for f in js/*.js; do node --check "$f"; done
   node --check sw.js && node --check js/oraculo-data.js
   ```
2. Leer BRIEFING-BH (este) antes de tocar nada.
3. **Si Frank dio criterio sobre los 685 pares marcados**, avanzar con ese criterio, en lotes
   revisados individualmente (no borrado masivo por keyword) — igual que se hizo con los 15 de este
   ciclo. Sugerencia de orden: empezar por `13_ia_y_el_oraculo` (20, la categoría más chica y más
   fácil de revisar entera) antes que `06_miu_nucleo` (365, la más grande).
4. Si hay tiempo/tokens y no hay instrucción nueva sobre los 685: el ajuste de peso por longitud
   para el "Tipo B" (367 preguntas largas legítimas) es la siguiente mejora de mayor impacto — pero
   requiere testear que no rompa matches legítimos existentes antes de aplicarlo al corpus completo.
5. Recordatorio de alcance: nada de esto tocó `buscar-oraculo.js`, `core.js` ni `app.js` — la lógica
   de búsqueda/scoring quedó exactamente como la dejó BG. Este ciclo fue 100% limpieza de datos.

ρ(x) > 0. Se sacó lo que nunca debió estar; se documentó lo grande sin tocarlo a ciegas. A10.
