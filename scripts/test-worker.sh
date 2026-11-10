#!/usr/bin/env bash
# Verifica que el Worker público responde sin credenciales.
# No envía tokens. No modifica nada. Solo HEAD y GET públicos.
set -euo pipefail

URL="${1:-https://fran-oraculo-miu.jaimepvicente.workers.dev}"

echo "== HEAD $URL"
curl -sI --max-time 10 "$URL" | head -5 || echo "HEAD sin respuesta"

echo "== GET $URL (primeros 200 chars)"
STATUS=$(curl -s --max-time 10 -o /tmp/franbot_get.txt -w "%{http_code}" "$URL")
echo "status=$STATUS"
head -c 200 /tmp/franbot_get.txt || true
echo

if [ "$STATUS" != "200" ]; then
  echo "FALLO: status != 200"
  exit 1
fi
echo "OK: worker responde 200"
