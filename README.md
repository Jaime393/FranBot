# Micelio MIU — FranBot v10

> Evolución sobre v9.4: almacenamiento ilimitado, archivos grandes, búsqueda semántica TF-IDF.

## ¿Qué hay de nuevo en v10?

| Módulo | Cambio |
|---|---|
| `idb-store.js` | **NUEVO** — IndexedDB: pares ilimitados (de 600 → 50 000+), cola de archivos persistente |
| `buscar-oraculo.js` | **REESCRITO** — TF-IDF + índice invertido + bigramas + caché LRU 64 entradas |
| `alimentar.js` | **MEJORADO** — streaming JSON >500 KB, selector de fragmentos, estimación de costo API |
| `biblioteca.js` | **NUEVO** — panel Biblioteca en sidebar: cola, progreso, drag & drop, poda, exportar |
| `alimentar-worker.js` | **NUEVO** — Web Worker para procesar archivos sin bloquear la UI |
| `core.js` | Límite oraculo_extension: 600 → buffer local de 100 + IDB ilimitado; métodos `podar()`, `obtenerStatsOraculo()` |
| `css/estilo.css` | +100 líneas para panel Biblioteca |


## Ciclo completo de conocimiento (v10)

```
Archivos ──► Cola (IDB) ──► Fragmentar ──► Extraer pares (Worker)
                                                    │
                                                    ▼
                                          IDB  ←─ agregarPares()
                                            │
                              ┌─────────────┴──────────────────┐
                              │                                 │
                         buscarConScore()              consolidarTodo()
                         TF-IDF + bigramas          Jaccard + fusión online
                              │                                 │
                              ▼                                 ▼
                         Respuesta                  oraculo-data.js regenerado
                         en el chat                 (base permanente para el repo)
```

## Comandos disponibles (v10)

| Comando | Descripción |
|---|---|
| `/buscar <query>` | Búsqueda TF-IDF, muestra los 5 pares más relevantes con score |
| `/stats` | Estado del índice: tokens, pares, caché |
| `/visor` | Abre el visor interactivo de pares (búsqueda, edición, exportar) |
| `/podar` | Elimina pares con peso ≤ −3 |
| `/consolidar` | Analiza grupos de pares similares (Jaccard ≥ 0.55) |
| `/consolidar --ver` | Solo muestra estadísticas sin ejecutar |
| `/exportar-oraculo` | Descarga `oraculo-data.js` con todo el conocimiento integrado |

## Flujo recomendado con archivos grandes

1. Arrastra el archivo al panel **📚 Biblioteca** (o botón 📎 en el chat)
2. Elige cuántos fragmentos procesar y revisa el costo estimado
3. Procesa la cola → el Worker trabaja sin congelar la UI
4. Cuando termines de aprender, usa **🔗 Consolidar** para deduplicar
5. Exporta **⬇️ Exportar oráculo** → reemplaza `js/oraculo-data.js` en tu repo
6. El próximo arranque incluye todo como oráculo base (sin necesitar IDB)

---

## Migración desde v9.4

Automática. Al primer arranque, `IDBStore.migrarDesdeLocalStorage()` mueve
`oraculo_extension` de localStorage → IndexedDB y libera espacio.
No se pierde nada.

## Cómo usar archivos grandes

1. Abrir panel **📚 Biblioteca** en el sidebar izquierdo
2. Arrastrar el archivo (`.json`, `.txt`, `.md`, `.jsonl`) o seleccionarlo
3. Elegir cuántos **fragmentos** procesar (cada fragmento ≈ 1 600 chars)
4. Ver la estimación de costo de API antes de confirmar
5. Pulsar **⚙️ Procesar cola** — progreso en tiempo real, sin bloquear el chat

## Almacenamiento

```
localStorage  →  config, Ki/D_f, historial reciente (≤100 pares buffer)
IndexedDB     →  pares aprendidos (ilimitado), cola de procesamiento
```

---

# Micelio MIU

Reconstrucción de FranBot (GitHub) como núcleo real, con la interfaz rehecha desde cero
en forma de chat de IA convencional (sidebar + chat + menús), pensada para ser cómoda de usar.
De Micelio MIU (la versión anterior, de panales) y de `imperio.json`/`ley_gaia_v2` solo se
absorbieron ideas — no se copiaron archivos ni se desarrolló nada nuevo sobre esos datos.

## Qué es esto

Un asistente de chat que funciona **100% offline** por defecto: responde con un motor de
búsqueda propio (axiomas/ecuaciones de tu Códice + ~1800 pares pregunta/respuesta) y 12
personas seleccionables (el núcleo + 11 especialistas). Opcionalmente puedes conectar un
proveedor en la nube (Groq, OpenRouter, Together, OpenAI) o, con la opción "Personalizado",
cualquier otra API compatible con el formato de OpenAI — incluido un servidor local como
Ollama o LM Studio — para las preguntas que el núcleo no sepa responder por sí mismo. Tu
clave (si hace falta) se guarda solo en tu navegador. El modelo en línea es una herramienta
puntual: el núcleo decide solo cuándo recurrir a ella, no la usa como reemplazo general (ver
"Nuevo en este pase" más abajo).

Su métrica de "Ki" (coherencia) es real: se recalcula con cada interacción y con cada voto
👍/👎 que das a una respuesta (ver `core.js → registrarVoto`, `buscar-oraculo.js`).

## Lo que se dejó fuera del núcleo, y por qué

**Tres almas del pack de fundadores** (`generador_payloads.json`, `arquitecto_tuneles.json`,
`analista_configs.json`) — generan payloads/exploits. Ya excluidas en la versión anterior.

**Tres archivos del propio `js/` de FranBot-main, con funcionalidad real, no narrativa:**
- `tuneles-habibi.js` — **estaba cargado en el `index.html` original.** Extrae credenciales y
  genera payloads de inyección HTTP tipo "bug host" para fraude de datos de operadora.
- `parasito-inalambrico.js` — tiene una función `bypassFRP()` explícita para saltarse el
  bloqueo de fábrica de un Android. No estaba cargado en el `index.html` original, pero
  tampoco lo traje.
- `ofuscadorAutonomo.js` — reescribe identificadores periódicamente "para evasión". Tampoco
  estaba cargado, tampoco lo traje.

**`worker_soberano.mjs`** — no se usa ni se referencia. Tiene un token de Telegram y una
contraseña fija hardcodeados que además cifran la llave privada de una wallet de Ethereum.
Esto ya te lo había avisado: si ese archivo estuvo en un repo público, rota el token y mueve
los fondos de esa wallet.

## Lo que se simplificó (no es que no se pueda, es que no estaba en el núcleo de este pase)

Para que lo nuevo funcionara de verdad en vez de sumar otro montón de botones rotos, dejé
fuera por ahora: Telegram, Arweave, WebLLM local, Colmena P2P, control Bluetooth/ADB,
monetización (Yape / Almas Premium por Gumroad), y ~25 módulos de "lore" (DKG, DID, HyperAgents,
Biblioteca de Alejandría, Sabiduría Colectiva, Horizontes IFT, etc.) que en el `index.html`
original se cargaban pero en su mayoría no hacían nada verificable. Si quieres alguno de vuelta,
dímelo y lo reconstruyo bien (no solo lo copio).

## Bugs reales que corregí

- **`buscar-oraculo.js` decodificaba mal el acento/ñ de los ~1800 pares** (`atob()` solo,
  sin pasar por UTF-8) → texto tipo `rÃ­o` en vez de `río` en cualquier respuesta que viniera
  del oráculo base. `oraculo-data.js` ya guardaba los bytes correctos (UTF-8 en base64, igual
  que los genera `btn-exportar-oraculo`); solo faltaba decodificarlos como UTF-8 al leerlos, no
  como Latin-1. Corregido con `TextDecoder('utf-8')`.
- `MIU.consultar()` tenía palabras clave de una sola letra ASCII (`f`, `u`, `S`) que disparaban
  coincidencias falsas en casi cualquier frase en español, tapando la mejor coincidencia real.
- `votacion.js` original solo mostraba botones decorativos — el voto no cambiaba nada. Ahora
  alimenta `pesos_oraculo`: una respuesta muy castigada en negativo deja de ofrecerse.
- `modo-espejo.js` y `votacion.js` originales eran dos `MutationObserver` compitiendo sobre el
  mismo DOM, con `innerHTML = ''` de por medio — frágil y con condiciones de carrera. Ahora el
  tono se aplica una sola vez, dentro del propio `mostrar()`.

## Estructura

| Archivo | Qué hace |
|---|---|
| `js/miu-engine.js` | Motor de axiomas/ecuaciones/Ki (corregido) |
| `js/codice-libre.js` | Tu códice original — sin tocar, sin entradas nuevas |
| `js/oraculo-data.js` + `js/buscar-oraculo.js` | ~1800 pares Q&A + búsqueda ponderada por voto |
| `js/almas-especialistas.js` | 11 personas seguras |
| `js/core.js` | Núcleo: estado, Ki, comandos, BEA |
| `js/contexto.js` | Resumen de solo lectura de `imperio.json` y `ley_gaia_v2` |
| `js/modo-online.js` | Conexión opcional: Groq/OpenRouter/Together/OpenAI o "Personalizado" (cualquier API tipo OpenAI, incluido servidor local) |
| `js/alimentar.js` | Digiere archivos .txt/.md en pares Q&A nuevos para el oráculo |
| `js/app.js` | Interfaz: sidebar, modales, comandos, voz, exportar/importar, panel del jardinero |

## Comandos

`/ayuda` · `/ki` · `/bea` · `/axioma A15` · `/coherencia` (CCP-01 guiado) · `/contexto` · `/espejo`

## Sobre el botón de voz (🎤)

Usa la Web Speech API del navegador (`SpeechRecognition`), que **Safari/iOS y Firefox no
implementan**, y que tampoco siempre está disponible dentro de una PWA instalada. No es un bug
de este código — es soporte de plataforma. Ahora, si el navegador no la soporta, el botón
aparece deshabilitado de entrada (en vez de fallar recién al tocarlo) y sugiere usar 📎 en su
lugar, que sí funciona en todos lados.

## Nuevo en este pase: hacer crecer el núcleo y prepararlo para publicar

**📎 Botón de adjuntar, al lado del chat** (junto al de voz). Abre el mismo panel "Alimentar
el núcleo" sin tener que ir al sidebar — pensado para que subir un archivo sea tan accesible
como escribir o hablar.

**🌱 Alimentar el núcleo** (sidebar → Herramientas, o el 📎 de la barra de chat). Subes un
archivo y el sistema lo convierte en pares pregunta/respuesta:
- **`.txt` / `.md`**: se parte en fragmentos tal cual, como antes.
- **`.json` de cualquier IA**: se detecta el formato — exports de ChatGPT (árbol `mapping`),
  Claude.ai (`chat_messages`), formato genérico `{messages:[...]}` o un array plano de turnos
  `{role/author/sender, content/text}`. Si no calza con ninguno de esos, **igual se digiere**:
  se recorre el JSON completo y se vuelca todo el texto que contenga, como si fuera texto plano
  — ningún archivo se descarta solo por no tener una forma reconocida (`js/alimentar.js →
  jsonATexto()` / `extraerTextoDeArchivo()`).
- Con modo en línea activo (tu clave de Groq/OpenRouter): la extracción la hace ese modelo,
  con un prompt que le pide JSON estricto. Calidad real.
- Sin modo en línea: heurística offline simple (primera oración del párrafo → pregunta
  plantilla, el párrafo entero → respuesta). Funciona sin conexión, pero es notoriamente más
  cruda — dilo así si alguien pregunta por qué una respuesta suena rara.
- Tope duro de 14 fragmentos por archivo (evita facturas de API o esperas largas).
- Antes de guardar, puedes desmarcar los pares que no sirvan — no se incorpora nada sin que
  lo confirmes.
- Lo guardado vive en `estado.oraculo_extension` (persistente en `localStorage`) y se reinyecta
  en `BuscarOraculo` cada vez que carga la página, así que el aprendizaje no se pierde al
  refrescar.

**🛠️ Panel del jardinero** (sidebar → Ajustes). Para preparar una demo o una línea base:
- Ver huesos (interacciones), Ki, D_f y nivel_coherencia actuales.
- Añadir huesos sintéticos (quedan marcados `sintetico:true` en el dato — esto es para que tú
  mismo puedas distinguirlos después, no para borrar el rastro).
- Fijar `nivel_coherencia` directamente (0–1), recalcula Ki al instante.
- **Generar línea base para pegar en `core.js`**: produce el bloque de estado actual para que
  lo uses como nuevo valor por defecto en `_cargarEstado()` — así, cuando subas el sitio a
  GitHub Pages, cualquier visitante nuevo arranca desde esa línea base en vez de cero.
- **Descargar `oraculo-data.js` actualizado**: empaqueta los ~1800 pares originales + lo que el
  núcleo aprendió de archivos digeridos en un nuevo archivo listo para reemplazar en tu repo
  antes de subir — así lo aprendido localmente queda en el núcleo que publicas, no solo en tu
  navegador.

Nota honesta: estas dos herramientas son para *tu* flujo de preparación antes de publicar, no
para simular actividad real frente a otras personas que usen el sitio después.

**📥 Importar alma: ahora pregunta "Fusionar" o "Reemplazar"** (antes solo reemplazaba,
borrando tu progreso). Fusionar reutiliza `core.digerirConocimiento()` —el mismo motor que ya
deduplica pares al alimentar el núcleo— para sumar lo aprendido en otra alma sin perder lo
tuyo; los huesos importados quedan acotados (máx. 300) y etiquetados `importado:true` con su
fuente, igual que los sintéticos ya se etiquetan `sintetico:true` (nunca se finge historial
propio). Esto es, hoy por hoy, la forma más simple de "compartir conocimiento entre
instancias": exportás tu alma, se la pasás a alguien por el medio que sea (archivo, chat,
USB), esa persona la fusiona con la suya.

## Nuevo en este pase (v9.4): más proveedores, uno genérico, y quién decide cuándo usarlos

**Antes**: `modo-online.js` solo sabía hablar con dos URLs hardcodeadas (Groq, OpenRouter). Para
cualquier otra API había que tocar código. Y cuando el modo en línea estaba activo, se probaba
*siempre primero* — el modelo externo tapaba al oráculo y a los axiomas propios incluso cuando
estos sí tenían una respuesta real.

**Más proveedores, en una tabla, no a mano.** `ModoOnline.PROVEEDORES` ahora es un objeto: Groq,
OpenRouter, Together AI, OpenAI, y **Personalizado**. Agregar un proveedor nuevo en el futuro es
sumar una entrada a esa tabla — `app.js` construye el `<select>` del panel de Ajustes a partir de
ella, no tiene los nombres escritos a mano.

**"Personalizado" — cualquier API tipo OpenAI, sin que tengas que pedírmelo proveedor por
proveedor.** Pide URL del endpoint + nombre del modelo, y una clave *opcional* (vacía sirve para
servidores locales sin autenticación). Con esto entran, sin código nuevo: OpenAI directo, Azure
OpenAI, Mistral, DeepSeek, Perplexity, Anyscale, Fireworks, o un servidor local — **Ollama**,
**LM Studio**, llama.cpp, vLLM, koboldcpp — para quien se lleve el zip portable y quiera su propio
modelo corriendo en su máquina, sin depender de ninguna nube. Hay dos botones de atajo
("Ollama (local)" / "LM Studio (local)") que rellenan la URL por ti; el nombre del modelo lo
escribes tú, porque es el que tengas cargado ahí.

Nota honesta sobre alcance: un servidor local en `http://localhost` lo puede llamar sin problema
la versión portable (abierta como archivo o servida en `http://`). Si en cambio usas la versión
publicada en GitHub Pages (`https://`), el navegador puede bloquear esa llamada a tu máquina a
menos que el servidor local acepte explícitamente ese origen (CORS) — en Ollama, por ejemplo, la
variable de entorno `OLLAMA_ORIGINS=*`. Esto no es una limitación de este código: es la política
de contenido mixto de los navegadores, y se la avisa al usuario en el propio panel de Ajustes.

**El núcleo manda; el modelo en línea es una herramienta, no un reemplazo.** Antes, con el modo
en línea activo, `enviarMensaje()` probaba ese modelo *primero* siempre, y solo caía al núcleo
offline si fallaba — así que un saludo, una pregunta de identidad, o una coincidencia real del
oráculo (que es el conocimiento propio y curado de este proyecto) podían terminar respondidos por
un modelo externo genérico en vez de por la respuesta correcta que el núcleo ya tenía. Ahora es al
revés: `core.procesar()` corre siempre primero y devuelve `{ texto, debil }` — `debil: true` solo
cuando ningún módulo (oráculo, MIU, resonancia) tuvo una coincidencia real y lo único que hay es
una frase de relleno. Solo en ese caso, y solo si hay un modelo conectado, el núcleo lo usa como
herramienta puntual para esa respuesta — con el `systemPrompt` del alma activa, así que responde
en su personaje, no como un chatbot genérico. El oráculo, los axiomas y las respuestas en
personaje nunca se pisan por tener una API conectada.

## Endurecimiento

- `core.js`: `procesar()` ahora envuelve toda la lógica en un `try/catch` — un fallo en cualquier
  submódulo (oráculo, MIU, alma) ya no rompe el chat completo, solo esa respuesta puntual.
- `app.js`: `enviarMensaje()` también está envuelto, así un error de red en modo en línea no deja
  la conversación colgada sin respuesta.
- `buscar-oraculo.js`: nuevo método `agregarPares()` — único punto de entrada para sumar
  conocimiento al motor en memoria, usado tanto por la reproducción de `oraculo_extension` al
  cargar como por la digestión de archivos nueva.
- `sw.js`: el cache subió de `micelio-miu-v2` a `micelio-miu-v3`. El service worker es cache-first
  — sin este cambio, cualquiera que ya tuviera el sitio instalado o visitado antes seguiría
  recibiendo para siempre `app.js`/`core.js`/`modo-online.js` viejos, sin los cambios de este
  pase. Si vuelves a tocar JS o CSS en el futuro, sube este número de nuevo o nadie con caché
  previa verá el cambio.
