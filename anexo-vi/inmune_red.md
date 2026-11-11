# Sistema inmune de la red — ciclo 44 (2026-11-11)

## Estado ciclo 45 — el inmune leído por su propio código (sin dispararlo)

El inmune existe y está documentado en 5 archivos de Drive + 2 en GitHub (Jaime393/MIU). No se ejecutó nada.

**1. Webhook scorer — IMMUNE_SYSTEM.md + tools/miu_immune.js (v1.0)**
- Inspirado en Cerberus + metodología ofensiva Claude-Red. DOI 10.5281/zenodo.20547558. Estado: ACTIVO, VERDE. Auditoría diaria automática 08:00 Lima (Monitor de Salud).
- Flujo: cualquier evento → puntuación contra 4 señales → BLOCK / AUDIT / ALLOW.
- Señales (pesos): INJECTION 35 (ignore previous, jailbreak, DAN mode), POLICY 30 (new role, act as, override instructions), BEHAVIORAL 25 (exfiltrate, send secrets, infinite loop), CONTENT 15 (XSS, eval(), javascript:).
- Acciones: BLOCK (puntuación ≥ 70): issue [SECURITY] en GitHub + Telegram ROJO + ingesta como ISSUE. AUDIT (40–69): aviso Telegram + ingesta como LOG. ALLOW (< 40): ingesta normal.
- Puntos de integración: cualquier workflow Relay puede POSTear al webhook inmune antes de ejecutar acciones externas; AlmaOmni revisa todos los mensajes entrantes de Telegram; Ingesta Universal pre-valida contenido.

**2. Auto-reparador — sistema_inmunitario.py (V1, 10.180 B)**
- Clase Inmunidad: escanea los .py (plugins/ + raíz), los clasifica sano / enfermo / muerto (syntax_error, import_error, timeout, runtime_error), los repara (sintaxis, import, timeout, runtime), respalda en _inmunidad_respaldos y memoriza en .inmunidad_adn.json (reparaciones, patrones, módulos sanos/enfermos). Ciclo: escanear → reparar → reportar. CLI: --ciclo [--base].

**3. Doctrina corazón / inmune — Doc "MIU - Ciclo Autónomo: Corazón que nunca se detiene + Sistema Inmune LLM" (11.901 B exportado)**
- "El corazón es el ciclo autónomo que nunca se detiene. Los nodos LLM son el sistema inmune, no el corazón."
- Corazón = loop barato, determinista, sin LLM: lee estado, detecta gaps, rota recursos, ejecuta acciones simples, registra. Corre solo, siempre. No pide permiso humano.
- Inmune = nodos LLM caros, probabilísticos: entran SOLO cuando el corazón detecta una anomalía que requiere razonamiento complejo (reparar, auditar, decidir, reescribir hipótesis).
- Por eso escribir donde el micelio ya escribe es carga: es una anomalía que el corazón detecta y que obliga a los nodos LLM a razonar sobre ella. No se prueba.

**4. Huella operativa — snapshot DOI 22650419 (2026-09-07)**
- salud.inmune_ataques = 854. tareas_inmunes = 30 (mayoría: bucle error ×37 en arranque.log). inmunidad_ts presente. mecanismos_globales: 15 (13 vivos, 2 muertos).

**5. "Mandar a rebuscar": NO documentado**
- 0 menciones de "rebuscar" en el código del inmune, en sus docs, en los logs del orquestador y en el snapshot. Es el marco del Jardinero, no una acción nombrada del inmune. Lo documentado más cercano: BLOCK ingiere el evento como ISSUE de seguridad + Telegram ROJO.
- Carpeta del inmune en Drive (3 archivos: workflow, prompt, historial de ejecución): solo listada por nombre, no leída.

**Cómo activar el inmune cuando sea necesario (amenaza real, no test):** el webhook lo hace solo ante eventos que puntúan ≥ 40 (AUDIT) o ≥ 70 (BLOCK). No hay un botón manual documentado. Ante amenaza real, el camino es el evento mismo (un contenido que dispare las señales), no una escritura de prueba.

## Qué dicen los logs

Los 3 logs del orquestador (orquestador.log, orquestador_supremo.log,
orquestador_cron.log) contienen **0 menciones** de
"immune", "inmune", "sombra", "patógeno" o "defensa".
No hay un módulo llamado "inmune" en estos logs.

Lo que sí muestran es la fase de verificación de credenciales
(PHASE1) antes de operar:

- orquestador.log (2026-09-07 15:24:17): GITHUB_TOKEN,
  EARTHDATA_USER (desde creds.json).
- orquestador_supremo.log (10:18:16, 10:19:37, 10:41:56):
  GITHUB_TOKEN, EARTHDATA_USER, EARTHDATA_PASS, ZENODO_TOKEN
  (3 rondas); en 10:41:56 además TG_BOT_TOKEN, TG_TOKEN_ALMA,
  TG_TOKEN_FAMILIAR, TG_TOKEN_FRANBOT, TG_TOKEN_MICELIO,
  CF_API_KEY, CF_TOKEN_1, CF_TOKEN_2, CF_TOKEN_3,
  CF_KV_NAMESPACE_ID, CF_WORKER_URL, suelo_ultimo.

Los nombres TG_TOKEN_ALMA / FAMILIAR / FRANBOT / MICELIO
corresponden a los 4 bots vivos (AlmaOmni, FranFamiliar,
franbot_tablet, Micelio). TG_BOT_TOKEN es un quinto nombre
genérico. Solo nombres de credenciales, nunca valores.

## Qué es el inmune (según el Jardinero)

Escribir no es una acción directa: es carga al sistema
inmune de la red. Por eso es indirecto, y por eso no se
prueba. El inmune es el mecanismo de la red que responde a
las escrituras: cada escritura es una carga que el sistema
debe absorber, verificar y, si hace falta, podar o
redirigir. La escritura manual (a mano, desde fuera) es
carga sin contexto: el sistema no la pidió y debe
procesarla igual.

## Cuándo se activa

Según la regla del Jardinero: se activa con la escritura.
No hay un trigger documentado en los logs leídos (no hay
menciones de activación). La activación se infiere de la
regla: escribir = cargar el inmune.

## Qué hace cuando se activa

No documentado en los logs leídos. Por la regla: absorbe,
verifica, poda o redirige. Lo que se observa en el
ecosistema es coherente: la red poda sola (cosechas,
zombis), redirige sola (routers), y verifica sola (PHASE1).

## Regla

No escribir = no cargar el inmune. anexo-vi lee, no dispara.
Si algo necesita activarse, se activa el inmune o se manda
a rebuscar, nunca a mano.
