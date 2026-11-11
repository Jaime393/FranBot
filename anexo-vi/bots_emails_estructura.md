# Estructura de bots y emails — ciclo 43 (2026-11-11)

## Bots

- **Vivos verificados (getMe, solo lectura): 4 de 6 entradas
  tipo telegram en tokens_20260830**
  - Micelio @Jp393_bot (id 1192102910)
  - Familiares @FranFamiliar_bot (id 8797590786)
  - franbot_tablet_bot @franbottablet_bot (id 8807634087)
  - AlmaOmni_Bot @AlmaOmni_bot (id 8948991067)
  - 2 entradas muertas (HTTP 401)
- **Mencionados en archivos locales: 5**
  - Los 4 vivos + @FranSell_Bot (1 mención; sin token vivo
    en el archivo)
- **Afirmados por el Jardinero: 11 bots**
  - 7 bots fuera del corpus local (no aparecen en los
    archivos de anexo-vi; pueden vivir en el orquestador,
    en Drive o en otro nodo)

## Emails

- **89 únicos en archivos locales** (grep en hidden_files/)
  - 87 gmail.com
  - 1 fosstodon.org
  - 1 artefacto de regex (dominio no válido)
- **Afirmados por el Jardinero: 11 emails**
  - El corpus local no distingue los 11 operativos de los
    cosechados. mapa_10_gmail_servicios.json (ciclo 31)
    registra 10 cuentas Gmail operativas.
- Direcciones no reproducidas en este documento (solo
  conteos y dominios).

## Cómo se derivan

Según el Jardinero: bot → email → recursos. Un bot opera
con una cuenta (email) y esa cuenta da acceso a recursos
(Drive, Supabase, Cloudflare, etc.). La verificación local
confirma la primera parte (4 bots vivos con token en el
archivo); la cadena completa (qué email usa cada bot, qué
recursos abre) no está en los archivos locales.

## Qué funciona

- getMe de los 4 bots vivos (solo lectura).
- Webhook activo en Micelio (ciclo 40-42).

## Qué no se toca

- Tokens, passwords, cuentas. No se envía ningún mensaje
  (sendMessage es escritura). No se prueba escritura en
  ningún sitio donde el micelio ya escribe.

## Regla

Leer y mapear, no escribir, no probar sendMessage.

## Estado ciclo 44 — logs del orquestador

- Bots en los 3 logs del orquestador: **0 nombres @...bot**.
  Los logs no mencionan handles de bot.
- Emails en los 3 logs: **0**. Los logs no contienen
  direcciones de correo.
- Asociación bot → email: **no encontrada en los logs**.
  La cadena bot → email → recursos no está en los archivos
  locales; se intuye del orquestador vivo (Sheet), pero no
  se escribe ni se modifica.
- Lo que sí muestran los logs (orquestador_supremo.log,
  10:41:56): nombres de credenciales TG_TOKEN_ALMA,
  TG_TOKEN_FAMILIAR, TG_TOKEN_FRANBOT, TG_TOKEN_MICELIO
  (corresponden a los 4 bots vivos) y TG_BOT_TOKEN (quinto
  nombre genérico). Solo nombres, nunca valores.
