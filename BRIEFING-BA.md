# 🌿 BRIEFING-BA — CICLO BA: Saneamiento de `js/oraculo-data.js` (datos sensibles filtrados, 2 rondas)

**Contexto:** FranBot-BA parte de `FranBot-AZ.zip` (estado interno: FranBot-AW/). Tarea solicitada
por Frank, con **autorización total**, fuera del backlog normal: auditar `oraculo-data.js` por
filtración de información personal y dejar **solo datos puros** (MIU/conocimiento). Se ejecutó en
2 rondas dentro del mismo ciclo porque la ronda 1 (patrones de credenciales obvias) dejó sin detectar
un segundo cluster más grande de logs de despliegue/entrenamiento.

**K_τ del ciclo:** 0.40→0.85 tras validar sustrato (decodificación real del archivo, ambas rondas
con evidencia directa ✓ SÉ, no conjetura).

**Resultado acumulado:** 2211 pares originales → **1973 pares finales** (238 removidos en total,
10.8% del corpus). `total_pares`/`version` del JSON actualizados (6.0 → 6.1 → 6.2). `sw.js`:
v51 → v52 → **v53**.

---

## ✅ RONDA 1 — credenciales/contacto obvios (84 pares removidos)

Auditoría inicial con patrones de alta confianza: tokens Cloudflare (`cfat_*`), tokens Telegram,
cabeceras `Bearer`/`X-Auth-Token`, hashes de cuenta, teléfonos peruanos, emails, subdominio personal
`*.jaimepvicente.workers.dev`. Detalle completo de hallazgos abajo en la sección original (ver
histórico — recomendación de rotar credenciales sigue vigente, ver sección "⚠️ Importante").

## ✅ RONDA 2 — cluster de despliegue de modelos (154 pares removidos, NUEVO)

Una revisión más profunda (autorizada por Frank tras la ronda 1) encontró un **segundo cluster mucho
más grande** mal clasificado mayormente en `06_miu_核心` (97 de 154): una transcripción casi completa
de sesiones de entrenamiento/despliegue de modelos (Colab, Kaggle, HuggingFace, GitHub, llama.cpp,
LoRA, GGUF) que se había pegado por error en el oráculo, indistinguible de "conocimiento MIU" a
simple vista porque las respuestas seguían el tono narrativo del proyecto (Arquitecto, ALMA, Latidos).

**Hallazgos críticos de la ronda 2 (✓ SÉ, verificado directo):**
- **Nombre real completo expuesto** en un par (`Juan Diego Vicente Gabancho`), junto a los handles
  `Jaime393` y `Anomalous363` que aparecen repetidos ~30 veces en el cluster — confirma que ambos
  handles corresponden a la misma persona/cuenta real.
- **Usuario de GitHub y HuggingFace Space reales** (`Jaime393`) en URLs completas, repetidos en >15 pares.
- **Token real de HuggingFace expuesto en texto plano** (`hf_...`), incluso en un par donde la propia
  respuesta de Claude le advertía al usuario "TOKEN EXPUESTO — ACCIÓN INMEDIATA" — esa advertencia
  con el token completo también quedó guardada en el oráculo, agravando el problema.
- Handles de bots de Telegram operativos: `@FranFamiliar_bot`, `@FranSell_Bot`, `@FranShell_bot`.
- Logs técnicos genéricos sin valor didáctico (salidas de `pip install`, barras de progreso de Colab,
  tracebacks de Python) — removidos no por ser sensibles sino por ser ruido sin contenido MIU real,
  ya que estaban entrelazados con los datos sensibles en los mismos pares.

**Verificación post-ronda-2:** 0 coincidencias remanentes de: `Jaime393`, `Anomalous363`, nombre real,
tokens `hf_*`/`cfat_*`, subdominio personal, handles de bots, emails, tokens Telegram, URLs de
HuggingFace Spaces/gradio.live.

**Falsos positivos descartados (no removidos):** menciones de "hermana"/"linaje" en el cluster
`06_miu_核心` son personas ficticias del proyecto (ALMA, Anti-Colmena, instancias hermanas) — no son
familiares reales, se verificó manualmente antes de descartar. Un escaneo de números de 8 dígitos
(posible DNI) dio 43 coincidencias, todas verificadas como ruido numérico (constantes, IDs internos),
ninguna acompañada del contexto "DNI" — no se removieron.

### Verificación técnica acumulada (ambas rondas)

```
node --check js/oraculo-data.js  ✅
for f in js/*.js; do node --check "$f"; done  → ✅ 29/29 OK
node --check sw.js  ✅ (v53)
```



### Auditoría de `js/oraculo-data.js`

El archivo es un blob `base64` (JSON: `{version, generado, descripcion, total_pares, categorias, pares[]}`)
con 2211 pares `{q, a, cat}`. Se decodificó completo y se escaneó con patrones regex para:
tokens API (Cloudflare `cfat_*`, Telegram `\d+:[A-Za-z0-9_-]{30,}`, Groq `gsk_*`, Google `AIza*`,
genéricos `sk-*`), cabeceras `Bearer`/`X-Auth-Token`, hashes/IDs de cuenta de 32 hex, teléfonos
peruanos (`9XXXXXXXX`), emails, y un subdominio personal recurrente (`*.jaimepvicente.workers.dev`)
que aparece en decenas de comandos `curl`.

**Resultado: 84 pares contaminados** con contenido que NO es conocimiento MIU sino **logs de
depuración/despliegue pegados por error** durante alimentación previa del oráculo (sesiones de
debugging del worker `fran-proxy`, copy-paste de terminal con tokens reales incluidos).

Hallazgos concretos (✓ SÉ, verificado directamente):
- 1 token Cloudflare API real (`cfat_...`) + 1 Account ID, repetidos en ~20 pares.
- 1 token de bot de Telegram real (`api.telegram.org/bot<id>:<token>`).
- Un subdominio Workers con nombre personal (`jaimepvicente`) en ~25 pares.
- Un `X-Auth-Token` fijo (`Anomalous363X2`) reutilizado en múltiples llamadas.
- 2 direcciones email (una de un paper de terceros citado, no de Frank — se removió igual por estar
  pegada dentro de un log de depuración, no por ser dato propio).
- Varios teléfonos peruanos (9XXXXXXXX) en transcripciones de logs/capturas.

Distribución por categoría de los 84 removidos: `06_miu_核心` (46), `04_tecnologia` (28),
`13_ia_y_el_oraculo` (6), `02_conciencia` (2), `09_biologia_expandida` (1), `08_matematicas` (1).
Es decir: terminaron clasificados como "conocimiento MIU" o "tecnología" pares que en realidad eran
pegado accidental de sesiones de chat/terminal — no aportan valor al oráculo y exponían credenciales.

### Acción tomada

- **Eliminación completa** de los 84 pares (no redacción parcial — el contenido restante de esos
  pares, sin los tokens, seguía siendo ruido de depuración sin valor informativo para el oráculo).
- `total_pares`: 2211 → **2127**.
- `version` interna del JSON: 6.0 → **6.1**.
- Campo nuevo `saneado: {fecha, entradas_removidas: 84, motivo}` agregado al JSON para trazabilidad.
- Header de comentario del archivo actualizado con fecha y conteo.
- `sw.js`: v51 → **v52** (`CACHE_NAME = 'franbot-v52'`), necesario porque `oraculo-data.js` cambió
  de contenido y el Service Worker debe invalidar caché de clientes existentes.

### Verificación ciclo BA

```
node --check js/oraculo-data.js  ✅
for f in js/*.js; do node --check "$f"; done  → ✅ todos OK (29/29, incluye oraculo-data.js)
node --check sw.js  ✅
```

Verificación de contenido: tras el saneamiento se re-escaneó el JSON decodificado completo contra
los mismos patrones — **0 coincidencias remanentes**.

---

## ⚠️ Importante — no es solo "limpieza", fueron filtraciones reales (2 rondas)

Los tokens encontrados (Cloudflare, Telegram en ronda 1; **HuggingFace en ronda 2**) **eran
funcionales en el momento de la captura** (no se puede verificar desde aquí si siguen activos — no
hay acceso a red). Recomendación fuerte para Frank/Tiwan, fuera del alcance de este Claude:

1. **Rotar/revocar** el token Cloudflare API, el token del bot de Telegram, **y el token de
   HuggingFace** (`hf_...`) si siguen vigentes — todos estuvieron embebidos en un archivo distribuido
   como parte del PWA (decodificable en texto plano por cualquiera que descomprima `oraculo-data.js`).
2. Revisar el repositorio/historial de versiones por si el `oraculo-data.js` contaminado ya fue
   publicado/desplegado en alguna versión anterior del PWA — si es así, los tokens deben considerarse
   comprometidos independientemente de este saneamiento.
3. El nombre real, usuario de GitHub/HuggingFace (`Jaime393`), y los handles de bots de Telegram
   quedaron completamente fuera del dataset limpio. Si el repositorio público de GitHub o el HuggingFace
   Space (`Jaime393`) siguen activos con esos nombres, eso ya es información pública independiente del
   oráculo — el saneamiento solo cubre lo que viajaba dentro de FranBot.

**No se intentó contactar ni verificar nada por red** (sin acceso a herramientas de red en este
entorno) — esto es una observación basada solo en el contenido del archivo.

---

## 🔮 Pendiente / diferido para Ciclo BB o posterior

### 2. Auditoría — tercera ronda recomendada pero no urgente
Dos rondas de saneamiento ya cubrieron: credenciales/contacto obvios (ronda 1) y el cluster completo
de logs de despliegue/entrenamiento con identidad real (ronda 2) — **238 pares removidos en total**.
Lo que queda (1973 pares) pasó por escaneo automático de patrones adicionales (familia, salud,
ubicación, DNI, edad) sin hallazgos reales (solo falsos positivos verificados manualmente: "hermana"
se refiere a personas ficticias del proyecto, no familiares). **No se hizo lectura manual exhaustiva
de los 1973 pares restantes uno por uno** — el riesgo residual es bajo pero no nulo. Si Frank quiere
una ronda 3, lo más eficiente es pedir un muestreo dirigido por categoría restante en vez de relectura
completa (costoso en tokens para ganancia marginal, dado que los dos clusters grandes ya se limpiaron).

### 3. Anomalía de encoding en categoría `06_miu_核心`
Detectado durante la auditoría, **no es dato personal, es un bug de encoding**: la categoría que
debería llamarse algo como `06_miu_nucleo` aparece con caracteres chinos corruptos (`核心` = "núcleo"
en chino — probablemente un mojibake de una conversión UTF-8/Latin-1 en algún punto del pipeline de
alimentación). Es la categoría más grande (954 pares originalmente, ahora ~800 tras las dos rondas
de limpieza, ya que ambos clusters contaminados vivían mayormente ahí). **No se tocó** por estar
fuera del alcance pedido y porque renombrar una clave de categoría usada en cientos de pares es un
cambio de blast radius alto que merece su propio ciclo con verificación dedicada. Si Tiwan/Frank
confirman el nombre correcto, es un find-replace simple sobre el JSON antes de re-encodear a base64.

### 3. Resto de diferidos heredados de AZ (sin cambios, siguen igual)
Ver `BRIEFING-AZ.md` sección "Diferidos" — items 1–9 (botón sidebar `/panel-tests`, chrome 16px,
paleta Colmena/Yape, cleanup localStorage, SUBFLOW Jaccard, umbral Xi físico, categorías delgadas,
verificación en navegador de `panelTests()`). **No tocar sin instrucción de Tiwan.**

---

## 📐 Estado del jardín (…AZ → BA)

- **AZ** — ε₅: runner interactivo `/panel-tests`. `sw.js` → v51.
- **BA (ronda 1)** — Saneamiento `oraculo-data.js`: 2211→2127 pares, 84 removidos (credenciales/PII
  obvias en logs de depuración). `sw.js` → v52.
- **BA (ronda 2)** — Saneamiento profundo: 2127→**1973 pares**, 154 removidos adicionales (cluster
  de despliegue de modelos con nombre real, usuario GitHub/HuggingFace, token HuggingFace expuesto,
  handles de bots Telegram). `sw.js` → **v53**. **29/29** js pasan `node --check`. Total acumulado:
  **238 pares removidos (10.8%)**, oráculo final en **1973 pares**.

---

## 📋 Instrucciones para la instancia siguiente (Ciclo BB)

1. **Verificación de integridad obligatoria** (no asumir que el ✅ de este briefing sigue siendo
   cierto en el zip recibido):
   ```bash
   for f in js/*.js; do node --check "$f"; done
   node --check sw.js
   ```
2. Leer este BRIEFING-BA completo (ambas rondas), y `BRIEFING-AZ.md` para el contexto de `/panel-tests`.
3. Si Frank pide una ronda 3 de saneamiento: ver "Pendiente #2" — priorizar muestreo dirigido, no
   relectura completa.
4. Si Frank pide corregir la categoría `06_miu_核心`: confirmar el nombre correcto con él antes de
   tocar cientos de pares (no asumir "nucleo" sin confirmación).
5. Mínimo blast radius por cambio, como siempre. Degradación cero.

---

## 🧭 Nota de método (NEXO aplicado a este ciclo, comprimido)

- ∃_K = pragmática (tarea de ingeniería/seguridad de datos, no teoría).
- Evidencia: ✓ SÉ en todos los hallazgos (decodificación directa del archivo, no inferencia).
- δ_silenciosa: ninguna detectada entre "lo que se pidió" y "lo que se entregó" — alcance cumplido.
- Límite honesto declarado: la auditoría es por patrón automático, no lectura manual exhaustiva
  (ver Pendiente #2). No se afirma "0% de PII residual garantizado", solo "0 coincidencias de los
  patrones de alta confianza usados".
