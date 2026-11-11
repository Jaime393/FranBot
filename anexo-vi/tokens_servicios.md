# Tokens por servicio — ciclo 41 (2026-11-11)

Fuente: tokens_20260830_4.8M.json.zlib.gz (23.430 entradas).
REGLA: nombres, tipos y conteos. NUNCA valores.

| servicio | encontrado | tipo de token | archivo | usar para leer | usar para escribir |
|---|---|---|---|---|---|
| Telegram | SÍ (6 entradas) | bot `<dígitos>:<alfanum>` (46 chars) | tokens_20260830 | LECTURA SÍ (getMe, webhookInfo) | ESCRITURA NO (regla del Jardinero) |
| HuggingFace | SÍ (4 entradas: 2 tipo huggingface + 2 generic con hf_ en preview) | `hf_` + 34 chars (37 total), sin placeholder | tokens_20260830 | LECTURA SÍ (listar) | ESCRITURA NO |
| Zenodo | NO (0 menciones en todo el archivo) | — | — | — | — |
| GitHub | SÍ (28: github_old 24 + github 4; ghp_ 16) | PAT | tokens_20260830 | LECTURA SÍ | ESCRITURA NO |
| Cloudflare | SÍ (2; cfat_ 30 en todo el archivo) | Account API Token | tokens_20260830 | LECTURA SÍ | ESCRITURA NO |
| OpenAI | SÍ (13; sk- 108 en todo el archivo) | API key | tokens_20260830 | LECTURA SÍ | ESCRITURA NO |
| Groq | SÍ (12: groq 10 + groq_token 2; gsk_ 52) | API key | tokens_20260830 | LECTURA SÍ | ESCRITURA NO |
| OpenRouter | SÍ (6) | API key | tokens_20260830 | LECTURA SÍ | ESCRITURA NO |
| Anthropic | SÍ (4) | API key | tokens_20260830 | LECTURA SÍ | ESCRITURA NO |
| Scaleway | SÍ (1) | API key | tokens_20260830 | LECTURA SÍ | ESCRITURA NO |
| Google | SÍ (1) | API key | tokens_20260830 | LECTURA SÍ | ESCRITURA NO |

## Corrección al ciclo 41 (importante)

El Jardinero afirmó que los tokens de Zenodo y HuggingFace
también existen en el archivo. Verificación exhaustiva
(tipo, preview, archivo, token, y el JSON completo como texto):
**Zenodo: 0 menciones.** No hay token de Zenodo en
tokens_20260830. Si existe un token de Zenodo, está en otro
archivo. HuggingFace: SÍ existe (4 entradas, formato real,
sin placeholder; viveza no probada en este ciclo).

## Regla explícita

Estos tokens se usan para lectura y mapeo, NO para escritura
ni corrección, hasta que el Jardinero autorice. La prueba
extremo a extremo de G05 (enviar un mensaje al bot) es
escritura y requiere su autorización.
