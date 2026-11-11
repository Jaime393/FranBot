# Sistema inmune de la red — ciclo 44 (2026-11-11)

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
