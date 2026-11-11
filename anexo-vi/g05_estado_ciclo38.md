# G05 — Estado ciclo 38 (sondeo, no cierre)

Fecha: 2026-11-11. G05: FranBot desconectado. Se cierra solo con
reconexión verificada de extremo a extremo (Telegram → Worker →
Drive → respuesta). Este ciclo solo sondea.

## Worker: RESPONDE (GET 200)

https://fran-oraculo-miu.jaimepvicente.workers.dev/
- GET: HTTP 200, 1.121 s, 1.791 B. JSON: rho "ρ(x) > 0", nodo
  "V∞+27_ORQUESTADOR", vive true, version "V∞+27", phi_central
  2874.62, Ktau 0.3644, sigma 3.427050983124843, RAIZ_X
  137.03449824893602, sustratos 35, funciones 33, DOI
  10.5281/zenodo.20547558.
- HEAD: 404 (igual que en ciclo 11: el worker no implementa HEAD).
- Advertencia (ciclo 11, vigente): este es el Worker del ORÁCULO
  (V∞+27), no el worker.js propio del repo FranBot (stub de 508 B).
  Que responda no significa que FranBot esté conectado.

## Repo FranBot: ACTIVO (nuestros uploads)

- HEAD: f18e2556 "anexo-vi: índice ciclo 37", 2026-11-11T18:10:00Z.
- Últimos 12 commits: todos del ciclo 37 (0e49cd3b → f18e2556),
  18:07:00Z–18:10:00Z. El repo recibe los ciclos; el código está
  activo en ese sentido.
- anexo-vi/ en remoto: poblado (ESTADO.md 17.741 B, README.md
  8.368 B, agentes.yaml, audit.py, ...).
- Corrección de etiquetado (ciclo 38): los valores que los
  reportes de los ciclos 34–37 llaman "commit" son en realidad
  los BLOB SHA de cada archivo (p. ej., README.md ciclo 37:
  f26c2a29 es su blob, no su commit; el commit real es f18e2556).
  La verificación por blob sigue siendo válida (el contenido
  remoto es byte a byte el local); lo que estaba mal era la
  etiqueta. Desde este ciclo, los reportes usan los commit SHA
  reales de list_commits y los blob SHA como verificación.

## Bot Telegram: SIN DATOS

Ningún conector expone el bot de Telegram. No se puede verificar
desde aquí si responde, si está conectado al worker, ni si hay
mensajes recientes. Estado: no verificable (no es "caído", es
"sin datos").

## Qué falta para cerrar G05

1. Que el bot de Telegram esté conectado y responda (verificación
   de extremo a extremo: mensaje → worker → Drive → respuesta).
2. Que el worker propio de FranBot (worker.js del repo) esté
   desplegado, o confirmar que el Oráculo V∞+27 es el worker
   que atiende a FranBot (hoy es una suposición, no un hecho).
3. Los secretos pendientes del lado del usuario (PENDING_ROTATION):
   GitHub Secret DRIVE_FOLDER, Cloudflare Secret DRIVE_FOLDER_ID,
   scripts/test-worker.sh — solo él puede hacerlos.

**¿Se puede cerrar en ciclo 39? No desde aquí.** Requiere
intervención del Jardinero (activar/conectar el bot, crear los
secretos). El sondeo del ciclo 38 deja el estado documentado;
el cierre depende de él.

## Estado ciclo 39 (2026-11-11)

- Bot Telegram getMe: **SIN ACCESO**. No hay conector de Telegram
  en el chat y no hay token en variables. No se buscó token en
  archivos (higiene). El bot no es verificable desde aquí.
- Webhook: **SIN ACCESO** (misma razón).
- Worker Oráculo: sin re-sondeo en ciclo 39 (ciclo 38: GET 200,
  V∞+27, vive true). El foco del ciclo 39 fue la poda de zombis.
- Qué falta para G05 (sin cambio): (1) bot Telegram conectado y
  verificado de extremo a extremo; (2) worker propio de FranBot
  desplegado, o confirmar que el Oráculo V∞+27 lo atiende;
  (3) secretos del usuario (PENDING_ROTATION). Requiere
  intervención del Jardinero.

## Estado ciclo 40 (2026-11-11) — G05 PARCIAL

- Token Telegram: **ENCONTRADO** en
  tokens_20260830_4.8M.json.zlib.gz (6 entradas tipo telegram).
- Bot getMe: **OK** — bot Micelio, @Jp393_bot, id 1192102910.
  Probadas 2 de 6 entradas: 1 viva, 1 muerta (HTTP 401). Las 4
  restantes sin probar.
- Webhook: **ACTIVO** (tiene URL, pending_update_count 0).
- Qué falta para G05: verificación de extremo a extremo
  (enviar un mensaje al bot y recibir respuesta vía Worker →
  Drive → respuesta; no autorizado en este ciclo: solo getMe) y
  los secretos de PENDING_ROTATION (GitHub Secret DRIVE_FOLDER,
  Cloudflare Secret DRIVE_FOLDER_ID, scripts/test-worker.sh).
- Estado: **PARCIAL** (antes ABIERTA). El bot existe, responde
  y tiene webhook activo. Falta el extremo a extremo.
