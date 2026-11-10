# Configuración de secretos — FranBot

Las dos fugas del ciclo 11 ya no están en el código. Ahora hay que poner los valores reales
en los gestores de secretos. Sin esto, el worker leerá `REDACTED_PENDING_SECRET` y el CI
fallará al resolver `${{ secrets.DRIVE_FOLDER }}`.

## GitHub Actions — DRIVE_FOLDER

1. Abrir https://github.com/Jaime393/FranBot/settings/secrets/actions
2. New repository secret
   - Nombre: `DRIVE_FOLDER`
   - Valor: el ID de carpeta de Drive (el mismo que estaba literal en micelio.yml antes de la rotación)
3. Save.

Verificación: en el próximo run de `micelio.yml`, el paso que usa `secrets.DRIVE_FOLDER` no debe fallar por variable vacía.

## Cloudflare — DRIVE_FOLDER_ID

```bash
cd ~/workspace/franbot_repo
wrangler login
wrangler secret put DRIVE_FOLDER_ID
# pegar el ID cuando lo pida
```

Verificación:

```bash
wrangler secret list
```

Debe aparecer DRIVE_FOLDER_ID.

Telegram — TELEGRAM_TOKEN (solo si se reconecta)

Solo después de rotar DRIVE_FOLDER y DRIVE_FOLDER_ID:

```bash
wrangler secret put TELEGRAM_TOKEN
# pegar el token del bot
curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=<WORKER_URL>"
```

Orden obligatorio

1. GitHub Secret DRIVE_FOLDER
2. Cloudflare Secret DRIVE_FOLDER_ID
3. Test: bash scripts/test-worker.sh → debe dar 200
4. Solo entonces, evaluar reconexión Telegram

G05 permanece ABIERTA hasta que se complete el paso 3 y se verifique el ciclo
Telegram → Worker → Drive → respuesta.
