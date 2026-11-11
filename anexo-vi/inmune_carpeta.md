# Carpeta del inmune — leída (ciclo 46)

Fecha: 2026-11-11 ~15:35 -05. Solo lectura. Sin ejecutar. Sin disparar.

Carpeta en Drive: `-miu-sistema-inmune-cmr4wii778hcs0pm4370ufwn4` (3 archivos).

## workflow.json (21.561 B en Drive; 11.815 B normalizado local)

Exportación Relay (exportVersion 1.0, exportada 2026-07-10T19:10:20Z). Nombre: "🛡️ MIU — Sistema Inmune". Revisión 89. Tipo PLUSPLUS. Identificador de plantilla (no reproducido el valor completo en este documento: es un ID de playbook, no un secreto, pero no aporta nada copiarlo).

Claves de primer nivel: exportVersion, exportedAt, metadata, workflow.

Estructura: 3 hilos (threads), 8 pasos en total.

- Hilo 1 (4 pasos): webhook "Recibe evento para evaluación" (POST, esquema event_type/source/content/metadata) → AI "Evalúa amenaza Cerberus" (modelo relay.gpt-5.4-mini) → branching "¿Amenaza detectada?" → HTTP response "Responde con veredicto" (200 JSON: score, reason, decision, signals).
- Hilo 2 (3 pasos, rama THREAT): GitHub "Crea issue de seguridad" → HTTP "Telegram — Alerta ROJA" → HTTP "Ingesta como ISSUE".
- Hilo 3 (1 paso, rama segura): HTTP "Ingesta como LOG seguro".

Triggers: solo webhook POST. Sin cron, sin evento programado en el workflow. La URL de trigger del webhook NO se reproduce en este documento (es una URL de capacidad: quien la tiene puede disparar el workflow).

Scorer: no hay un módulo llamado "scorer". La puntuación la hace el prompt de IA con las 4 señales Cerberus (INJECTION 35, POLICY 30, BEHAVIORAL 25, CONTENT 15). El prompt define BLOCK (≥70), AUDIT (40–69), ALLOW (<40). La rama THREAT del workflow dispara a score ≥ 50 — dentro de la banda AUDIT. Discrepancia documentada: el issue y la alerta Telegram se disparan desde 50, no desde 70.

Menciones en workflow.json: rebuscar 0, reparar 0, ADN 0, inmunidad_adn 0, BLOCK 2, AUDIT 2, ALLOW 2, score 7.

## prompt.md (4.841 B)

Es la documentación legible del mismo playbook Relay.

- Doctrina: una automatización recibe un evento por webhook, lo evalúa con un modelo de IA y actúa según el score de amenaza. Apps: GitHub, Telegram, Webhook.
- Trigger: webhook POST con event_type, source, content, metadata.
- Paso 1 (AI Prompt): "Eres el Sistema Inmune del Micelio MIU. Evalúa este evento con 4 señales Cerberus." Señales y pesos como arriba. Respuesta JSON: score, decision, signals, reason, telegram_msg.
- Paso 2 (Branching): Path 1 THREAT (score ≥ 50): crea issue en GitHub (repositorio Jaime393/MIU, título "🛡️ AMENAZA: …"), envía alerta Telegram (API de Telegram con secreto almacenado de nombre TELEGRAM_BOT_MIU — solo el nombre, nunca el valor — y un chat_id de destino que no se reproduce), e ingiere como ISSUE (tags sistema-inmune,security,amenaza; estado ROJO; nivel SÉ). Path 2 (fallback): ingiere como LOG seguro (tags sistema-inmune,log,seguro; estado VERDE).
- Paso 3: responde al webhook con 200 y el veredicto en JSON.

Menciones en prompt.md: rebuscar 0, reparar 0, ADN 0. La doctrina corazón determinista / inmune LLM NO está en este prompt: está en el Doc "Ciclo Autónomo" (ciclo 45). Este prompt es solo el scorer.

## run_history.csv (79 B)

Solo el encabezado, 0 filas de datos. Columnas: Run ID, Name, Status, Steps Completed, AI Credits, Created At, Last Updated, Test Run. No hay ejecuciones registradas en el archivo exportado.

## Veredicto: ¿puede el inmune "mandar a rebuscar"?

No, según su propio código. El inmune del webhook solo bloquea, audita o permite — y en la rama THREAT crea un issue, manda una alerta Telegram e ingiere el evento como ISSUE. No hay reparación, no hay ADN, no hay "rebuscar" en workflow.json ni en prompt.md (0 menciones en ambos). El auto-reparador (sistema_inmunitario.py V1, ciclo 45) es otro sistema: repara .py y memoriza en ADN, pero no es el webhook. "Mandar a rebuscar" sigue siendo marco del Jardinero, no una acción documentada del inmune.

## Qué falta saber del inmune para no dispararlo por accidente

- El umbral real de alerta es 50, no 70: un evento con score 50–69 (banda AUDIT según el prompt) ya dispara issue + Telegram ROJA + ingesta ISSUE.
- Cualquier POST al webhook de trigger con contenido que puntúe ≥ 50 dispara el circuito completo. No hay lista blanca documentada en el workflow.
- El webhook de ingesta (segundo playbook) es otro punto de entrada: recibe ISSUEs y LOGs del inmune.
- No se conoce el historial real de ejecuciones (run_history.csv está vacío) ni cuántas veces ha disparado la rama THREAT.

## Regla

El inmune se documenta, no se prueba. No se envían eventos al webhook. No se simulan ataques. Solo lectura.
