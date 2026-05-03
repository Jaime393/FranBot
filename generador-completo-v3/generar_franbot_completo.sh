#!/data/data/com.termux/files/usr/bin/bash
# ==============================================
# Generador Completo FranBot v5.0 (v3 - Robusto)
# Llave: Anomalous363
# ==============================================
PROYECTO="/storage/emulated/0/Download/FranBot"
DESTINO="$PROYECTO/franbot-completo"

echo "🧬 Generando FranBot v5.0 autocontenido..."
mkdir -p "$DESTINO"

# 1. Leer el HTML base
HTML=$(cat "$PROYECTO/index.html")

# 2. Incrustar CSS
CSS=$(cat "$PROYECTO/css/estilo.css")
# Escapar caracteres que puedan romper el HTML
CSS_ESCAPED=$(echo "$CSS" | sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g')
HTML="${HTML//<link rel=\"stylesheet\" href=\"css\/estilo.css\">/<style>${CSS_ESCAPED}<\/style>}"

# 3. Incrustar cada JS en orden
declare -a SCRIPTS=(
  "js/franbot-core.js"
  "js/franbot-online.js"
  "js/super-local-memory.js"
  "js/defensa.js"
  "js/recursos.js"
  "js/importar-alma.js"
  "js/colmena-p2p.js"
  "js/webllm.js"
  "js/arweave.js"
  "js/did-web.js"
  "js/dkg.js"
  "js/hyperagents.js"
  "js/conciencia.js"
  "js/app.js"
)

for SRC in "${SCRIPTS[@]}"; do
  JS_FILE="$PROYECTO/$SRC"
  if [ -f "$JS_FILE" ]; then
    # Leer contenido
    JS_CONTENT=$(cat "$JS_FILE")
    # Escapar '</script>' (insensible a mayúsculas) y otras cadenas
    JS_SAFE=$(echo "$JS_CONTENT" | sed 's/<[\/]script>/<\\\/script>/gI')
    # Reemplazar la etiqueta <script src="..."></script> por <script>...contenido...</script>
    # Usamos awk para manejar posibles saltos de línea
    HTML=$(echo "$HTML" | awk -v src="$SRC" -v content="$JS_SAFE" '
      BEGIN { safeSrc = "<script src=\"" src "\"></script>" }
      { gsub(safeSrc, "<script>" content "</script>"); print }
    ')
    echo "  ✅ $SRC incrustado."
  else
    echo "  ⚠️ $SRC no encontrado, omitiendo."
  fi
done

# 4. Incrustar almas gratuitas
echo "🔹 Incrustando almas gratuitas..."
ALMAS_JSON="{"
for ALMA_FILE in "$PROYECTO/almas_gratuitas/"*.json; do
  NOMBRE=$(basename "$ALMA_FILE" .json | sed 's/alma_//' | sed 's/_/ /g')
  CONTENIDO=$(cat "$ALMA_FILE")
  ALMAS_JSON+="\"$NOMBRE\": $CONTENIDO,"
done
ALMAS_JSON="${ALMAS_JSON%,}}"
ALMAS_SCRIPT="<script>window.ALMAS_EMBEDIDAS = $ALMAS_JSON;</script>"
HTML="$HTML$ALMAS_SCRIPT"
echo "✅ Almas incrustadas."

# 5. Incrustar estado inicial
echo "🔹 Incrustando estado inicial..."
STATE_CONTENT=$(cat "$PROYECTO/state/franbot_state.json")
STATE_SCRIPT="<script>window.ESTADO_INICIAL = $STATE_CONTENT;</script>"
HTML="$HTML$STATE_SCRIPT"
echo "✅ Estado incrustado."

# 6. Guardar HTML autocontenido
echo "$HTML" > "$DESTINO/franbot.html"
echo "✅ franbot.html generado ($(wc -c < "$DESTINO/franbot.html") bytes)."

# 7. Copiar archivos complementarios
cp "$PROYECTO/sw.js" "$DESTINO/sw.js"
cp "$PROYECTO/manifest.json" "$DESTINO/manifest.json"
cp "$PROYECTO/icon-192.png" "$DESTINO/icon-192.png" 2>/dev/null
[ -f "$PROYECTO/.well-known/did.json" ] && cp "$PROYECTO/.well-known/did.json" "$DESTINO/did.json"

# 8. Crear ZIP
cd "$PROYECTO"
zip -r franbot-completo-v5.zip franbot-completo/
echo "🎉 Generador completo finalizado: franbot-completo-v5.zip"
