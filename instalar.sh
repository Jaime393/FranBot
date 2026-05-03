#!/data/data/com.termux/files/usr/bin/bash
echo "🧠 Instalando WebLLM en FranBot v5.0..."

if [ ! -f "index.html" ]; then
    echo "❌ No estás en la raíz de FranBot."
    exit 1
fi

# Backups
cp js/app.js js/app.js.backup.$(date +%s) 2>/dev/null
cp index.html index.html.backup.$(date +%s) 2>/dev/null

# Copiar nuevo módulo
cp webllm.js js/webllm.js
echo "✅ js/webllm.js instalado."

# Añadir scripts al index.html
if ! grep -q "webllm.js" index.html; then
    sed -i 's|</body>|  <script src="js/webllm.js"></script>\n</body>|' index.html
    echo "✅ webllm.js añadido a index.html."
fi

# Insertar panel de WebLLM antes de </body>
if ! grep -q "webllm-panel" index.html; then
    sed -i '/<\/body>/{
        r panel_webllm.html
    }' index.html
    echo "✅ Panel WebLLM insertado."
fi

# Insertar el parche de app.js manualmente (damos instrucción)
echo "⚠️  Para completar la instalación:"
echo "   1. Abre js/app.js en tu editor."
echo "   2. Busca el manejador del botón 'Modo online' (btn-modo)."
echo "   3. Reemplázalo por el código de parche_app_webllm.js"
echo "   4. Añade la función cambiarModo() y mostrarPanelWebLLM() según el parche."
echo "   5. Guarda y recarga FranBot."
echo ""
echo "🎉 Estructura base instalada. El resto es ajuste manual en app.js."
