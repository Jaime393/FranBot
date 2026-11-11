# Tokens en archivos — ciclo 40 (2026-11-11)

REGLA: este documento contiene nombres de archivos, tipos y
conteos. NUNCA contiene valores de tokens. Ningún valor se
reproduce aquí, en los claims ni en el reporte.

## tokens_20260830_4.8M.json.zlib.gz

Ubicación: MIU_ABSORBIDO/nutrientes/historicos/archivo/
(ID `1jpea1gmzqk55P5dGjSpd41tXMPufTF9A`). Descargado por primera
vez en ciclo 40 (antes: nunca descargado ni abierto).

- Comprimido: 720.412 B (gzip) → 4.930.355 B JSON.
- Estructura: lista de 23.430 entradas, claves
  archivo / linea / preview / tipo / token.
- Por tipo: generic 23.282, api_key_general 73, github_old 24,
  openai 13, groq 10, openrouter 6, **telegram 6**, github 4,
  anthropic 4, cloudflare 2, huggingface 2, groq_token 2,
  scaleway 1, google 1. Suma: 23.430.
- Conteos por prefijo (sin valores): sk- 108, ghp_ 16, xox 1,
  gsk_ 52, cfat_ 30. Menciones 'telegram': 8. Menciones 'bot':
  21.607 (la mayoría en campos genéricos, no en el tipo).
- Formato token bot Telegram (`<dígitos>:<alfanum>`): 6
  coincidencias — las mismas 6 entradas tipo telegram.
- Marcadores: REEMPLAZAR 2, PENDING 0.

## miu_brain.db.zlib — tabla token_estado

5 filas. Columnas: id, timestamp, tokens_activos,
tokens_validos, phi_tokens. Son AGREGADOS, no valores:
tokens_activos suma 15, tokens_validos suma 15. No hay columna
de servicio ni de token: no menciona telegram.

## token_metrics.db — tablas token_metrics y relay

- token_metrics: 33 filas, 21 válidas. Menciones de telegram
  en endpoint: 0. Menciones de bot en endpoint: 0.
- token_relay_log: 4 filas, 1 backend distinto. Menciones de
  telegram en backend/url: 0. Menciones de bot: 0.

## Búsqueda por grep (solo nombres de archivo)

- `zgrep` sobre el .gz: encuentra 'telegram' y el formato de
  token bot. Ningún otro archivo de drive_ciclo40/ menciona
  telegram (grep sobre .txt/.db/.pdf: 0).
- drive_ciclo39/ no existe como carpeta (el ciclo 39 guardó en
  drive_ciclo34/); el grep literal del ciclo no encontró nada
  ahí porque la ruta no existe. Corrección documentada: el
  grep solo cubre texto plano; el .gz se analizó con Python.

## Token Telegram: ENCONTRADO

En tokens_20260830: 6 entradas tipo telegram. Probadas 2 en
ciclo 40 (getMe): 1 VIVA (bot Micelio, @Jp393_bot), 1 muerta
(HTTP 401). Las 4 restantes sin probar.

## Custodia

El archivo tokens_20260830 queda en local
(`hidden_files/drive_ciclo40/`), nunca se sube a GitHub, nunca
se reproducen sus valores. Es el mismo trato que los 6 archivos
de credenciales de nutrientes (ciclo 31): referenciar, no
integrar.
