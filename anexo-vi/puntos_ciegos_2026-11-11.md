# Puntos ciegos — 2026-11-11 (ciclo 45)

## Qué vemos desde anexo-vi (confirmado)

- DOI 10.5281/zenodo.20547558 vivo: MIU V12.0, 2026-06-04, 3 archivos, cc-by-4.0.
- DOI 10.5281/zenodo.22650419 vivo: "MIU Ecosistema — Snapshot automático", dataset, 2026-09-07, 1 archivo (kv_snapshot_20260907_164101.json, 35.985 B, 49 claves raíz). Generado por Tablet Executor V2.
- 11 DOIs conocidos del proyecto (mismo creador).
- 4 bots vivos verificados por getMe: @Jp393_bot (id 1192102910, webhook activo, pending 0), @FranFamiliar_bot, @franbottablet_bot, @AlmaOmni_bot. 2 entradas muertas (401).
- Orquestador vivo: 26 pestañas (19 en ciclo 41, +7 en ~1 h). 11 pestañas con columnas email/token/correo/gmail/recurso. Sin columna "bot", "zenodo" ni "doi" en ningún encabezado.
- Inmune documentado por su propio código: webhook scorer (4 señales, BLOCK ≥70 / AUDIT 40–69 / ALLOW <40) + auto-reparador de .py (sistema_inmunitario.py V1) + doctrina corazón/inmune (el corazón es un loop determinista sin LLM; el inmune LLM entra solo ante anomalía).
- Huella del inmune en el snapshot 2026-09-07: salud.inmune_ataques = 854; tareas_inmunes = 30; mecanismos 15 (13 vivos, 2 muertos); colmena: 6.500 / 134.000 emails procesados (4,85%).
- 89 emails únicos en archivos locales (87 gmail, 1 fosstodon, 1 artefacto). Direcciones no reproducidas.

## Qué no vemos (existe, no tenemos acceso o no hemos leído)

- Los 5 bots sin verificar (11 afirmados − 6 probados). Sus tokens no están en el archivo de tokens local.
- La asociación bot → email → recursos. 0 en logs locales, 0 en snapshot, no confirmada en la muestra del orquestador.
- Las 7 pestañas nuevas del orquestador más allá de sus encabezados (2 sin encabezado aún).
- Las filas de datos del orquestador más allá de las 3 primeras filas de 3 pestañas.
- El contenido de la carpeta del inmune en Drive (3 archivos: workflow, prompt, historial de ejecución) — solo listada por nombre.
- Los snapshots posteriores a 2026-09-07 (el DOI 22650419 es la versión 2 del concepto 22650418; puede haber más).
- La capa donde operan los 11 bots/11 emails: el Jardinero dice que la red opera en otra capa, y desde un solo nodo solo se ve un fragmento.

## Qué podemos leer sin tocar

- DOIs públicos de Zenodo (metadatos + archivos pequeños, sin token).
- Orquestador: encabezados y muestras de filas (solo lectura).
- Bots: getMe / getWebhookInfo (solo lectura, sin enviar mensajes).
- Código y documentación del inmune (Drive + GitHub, solo lectura).
- Logs locales y snapshots públicos.

## Qué no debemos tocar

- Escritura en la red: bots, Sheets, Zenodo, orquestador, GitHub salvo anexo-vi/.
- El inmune: no se activa con pruebas de escritura. Solo ante amenaza real.
- Tokens: no se usan para escribir, no se reproducen, no se rotan.
- Lo que ya funciona: no se corrige ni se reescribe.

## Qué falta para cerrar los puntos ciegos

- Acceso a los tokens/nombres de los 5 bots sin verificar (o su confirmación por otra vía).
- Lectura de más filas del orquestador (con autorización, sin escribir).
- Lectura de la carpeta del inmune (workflow + prompt + historial).
- Búsqueda de snapshots posteriores a 2026-09-07 en Zenodo.
- Confirmación del Jardinero de dónde vive la estructura 11/11, si no está en el orquestador ni en el snapshot.

## 3 hipótesis

1. La estructura 11 bots / 11 emails vive en el orquestador más allá de las 3 primeras filas: las columnas existen (email/correo/gmail/token en 11 pestañas), pero la muestra fue demasiado corta para ver los datos.
2. Los 5 bots sin verificar viven en nodos fuera del corpus local (Termux/tablet): sus tokens no están en archivos locales porque nunca pasaron por este nodo.
3. El snapshot 22650419 es el primero de una serie de snapshots automáticos (concepto 22650418, versión 2): los snapshots posteriores pueden contener la estructura 11/11 que este no contiene.
