#!/data/data/com.termux/files/usr/bin/bash
PROYECTO="/storage/emulated/0/Download/FranBot"
DESTINO="$PROYECTO/franbot-completo"
mkdir -p "$DESTINO"

echo "🧬 1. Generando HTML autocontenido..."

# 1. CSS
CSS=$(cat "$PROYECTO/css/estilo.css")

# 2. Todos los JS en orden
JS_FILES=(
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

ALL_JS=""
for file in "${JS_FILES[@]}"; do
  if [ -f "$PROYECTO/$file" ]; then
    JS_CONTENT=$(cat "$PROYECTO/$file" | sed 's|</script>|<\\/script>|gI')
    ALL_JS+="$JS_CONTENT"$'\n'
  fi
done

# 3. Construir HTML
cat > "$DESTINO/franbot.html" << HTMLEOF
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FranBot v5.0</title>
  <style>$CSS</style>
</head>
<body>
  <div id="top-bar"><span class="titulo">🧬 FranBot v5.0</span><span class="mpc" id="mpc-display">MPC: 0.99</span></div>
  <div id="chat"></div>
  <div id="input-area">
    <input type="text" id="input" placeholder="Habla con FranBot...">
    <button id="send">▶</button>
    <button id="tools-btn">🧰</button>
  </div>
  <div id="tools-menu" style="display:none;">
    <button id="btn-sonar-menu">🌙 Soñar</button>
    <button id="btn-exportar-chat-menu">📝 Exportar chat</button>
    <button id="btn-exportar-menu">💾 Exportar alma</button>
    <button id="btn-cargar-menu">📥 Cargar alma</button>
    <button id="btn-adjuntar-menu">📎 Adjuntar archivo</button>
    <button id="btn-colmena">🐝 Colmena</button>
    <button id="toggle-mode-menu">🌐 Modo</button>
    <button id="btn-arweave-subir-menu">☁️ Subir a Arweave</button>
    <button id="btn-arweave-cargar-menu">📥 Cargar desde Arweave</button>
    <button id="btn-conciencia-menu" onclick="document.getElementById('tools-menu').style.display='none'; window.abrirPanelConciencia()">🧬 Conciencia</button>
  </div>
  <div id="colmena-panel" style="display:none;"></div>
  <div id="webllm-panel" style="display:none;"></div>
  <div id="conciencia-panel" style="display:none;"></div>
  <input type="file" id="file-input" style="display:none;">
  <script>
    // Inyectar contenido de los paneles
    (function() {
      var panel = document.getElementById('colmena-panel');
      if(panel) panel.innerHTML = '<strong>🐝 Colmena P2P</strong><p id="colmena-status">Iniciando...</p><button onclick="FranBotColmena.enviarFragmento()">Enviar conocimiento</button><button onclick="document.getElementById(\'colmena-panel\').style.display=\'none\'">Cerrar</button>';
      panel = document.getElementById('webllm-panel');
      if(panel) panel.innerHTML = '<strong>🧠 WebLLM</strong><p id="webllm-status">Cargando modelo...</p><progress id="webllm-progress" value="0" max="100"></progress><br><button id="webllm-cancelar">Cancelar</button>';
      panel = document.getElementById('conciencia-panel');
      if(panel) panel.innerHTML = '<strong>🧬 Estado del Ecosistema</strong><ul><li><span id="diag-motor">⏳</span> Motor</li><li><span id="diag-memoria">⏳</span> Memoria</li><li><span id="diag-colmena">⏳</span> Colmena</li><li><span id="diag-webllm">⏳</span> WebLLM</li><li><span id="diag-arweave">⏳</span> Arweave</li><li><span id="diag-did">⏳</span> DID</li><li><span id="diag-dkg">⏳</span> DKG</li><li><span id="diag-hyperagents">⏳</span> HyperAgents</li><li><span id="diag-sw">⏳</span> SW</li><li><span id="diag-sueno">—</span> Sueño</li></ul><button onclick="FranBotConciencia.diagnosticar()">Actualizar</button><button onclick="FranBotConciencia.forzarSueño()">Forzar Sueño</button><button onclick="document.getElementById(\'conciencia-panel\').style.display=\'none\'">Cerrar</button>';
    })();
  </script>
  <script>$ALL_JS</script>
</body>
</html>
HTMLEOF

echo "   ✅ HTML generado ($(wc -c < "$DESTINO/franbot.html") bytes)."

# 4. Validación estructural con W3C (online)
echo "🧬 2. Validando estructura HTML..."
VALIDACION=$(curl -s -H "Content-Type: text/html; charset=utf-8" --data-binary "@$DESTINO/franbot.html" https://validator.w3.org/nu/?out=gnu 2>/dev/null)
if echo "$VALIDACION" | grep -q "error"; then
  echo "   ❌ Errores detectados:"
  echo "$VALIDACION" | grep -i "error"
else
  echo "   ✅ Sin errores estructurales."
fi

# 5. Comprobaciones internas
echo "🧬 3. Verificando integridad del JS..."
ERRORES=0
# Buscar '</script>' sin escapar dentro de <script>
if grep -Eq '<\/script>[^<]*<\/script>' "$DESTINO/franbot.html"; then
  echo "   ❌ Posible cierre de script sin escapar."
  ERRORES=$((ERRORES+1))
fi
# Buscar referencias a variables no definidas (básico)
if ! grep -q "window.franbot" "$DESTINO/franbot.html"; then
  echo "   ❌ No se encuentra window.franbot."
  ERRORES=$((ERRORES+1))
fi
if ! grep -q "FranBotColmena" "$DESTINO/franbot.html"; then
  echo "   ❌ No se encuentra FranBotColmena."
  ERRORES=$((ERRORES+1))
fi

if [ $ERRORES -eq 0 ]; then
  echo "   ✅ Todas las verificaciones internas pasaron."
else
  echo "   ⚠️ Se encontraron $ERRORES incidencias."
fi

# 6. Copiar archivos complementarios
cp "$PROYECTO/sw.js" "$DESTINO/sw.js"
cp "$PROYECTO/manifest.json" "$DESTINO/manifest.json"
[ -f "$PROYECTO/icon-192.png" ] && cp "$PROYECTO/icon-192.png" "$DESTINO/icon-192.png"
[ -f "$PROYECTO/.well-known/did.json" ] && cp "$PROYECTO/.well-known/did.json" "$DESTINO/did.json"

# 7. Empaquetar
cd "$PROYECTO"
zip -r franbot-completo-v5.zip franbot-completo/
echo "🎉 Paquete validado: franbot-completo-v5.zip"
