# FranBot — Configuración pendiente antes de reconectar

Estado: ABIERTO (funcional, no incidente).
Esto no es un problema de seguridad. Es una lista de pasos para que el bot funcione cuando se decida activarlo.

## Lo que ya está hecho en el código

- [x] `.github/workflows/micelio.yml` lee `DRIVE_FOLDER` desde `${{ secrets.DRIVE_FOLDER }}`.
- [x] `worker.js` lee `DRIVE_FOLDER_ID` desde `env.DRIVE_FOLDER_ID` con fallback `REDACTED_PENDING_SECRET`.
- [x] `.gitignore` excluye `.dev.vars`, `.env`, `node_modules`, `.wrangler`.
- [x] `wrangler.toml` sin tokens.
- [x] `scripts/test-worker.sh` verifica el Worker público sin credenciales.

## Lo que falta para que funcione cuando se decida activar

1. [ ] GitHub Actions → Settings → Secrets → Actions → New: `DRIVE_FOLDER` con el ID de carpeta de Drive.
2. [ ] Cloudflare → `wrangler secret put DRIVE_FOLDER_ID` con el mismo ID.
3. [ ] Ejecutar `bash scripts/test-worker.sh` → debe dar 200.
4. [ ] (Opcional, solo si se decide activar el bot) `wrangler secret put TELEGRAM_TOKEN` y `setWebhook`.

Cuando 1–3 estén hechos, el Worker dejará de devolver `REDACTED_PENDING_SECRET` y podrá leer la carpeta real. Nada de esto requiere rotar la carpeta ni reescribir historial.

## Nota sobre el folder ID

Un folder ID de Drive no es una credencial. Es un identificador. Si algún día se publica el repo con su historial, el folder ID visible no otorga acceso: sin token de Google no se puede leer. Por eso no se rota ni se reescribe historial. Se mueve a secreto y se sigue.

G05 sigue ABIERTA por funcionalidad (el bot no está conectado), no por seguridad.
