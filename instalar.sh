#!/data/data/com.termux/files/usr/bin/bash
echo "☁️ Instalando Arweave en FranBot v5.0..."

if [ ! -f "index.html" ]; then
    echo "❌ No estás en la raíz de FranBot."
    exit 1
fi

# Backups
cp js/app.js js/app.js.backup.$(date +%s) 2>/dev/null
cp index.html index.html.backup.$(date +%s) 2>/dev/null

# Copiar nuevo módulo
cp arweave.js js/arweave.js
echo "✅ js/arweave.js instalado."

# Añadir script al index.html
if ! grep -q "arweave.js" index.html; then
    sed -i 's|</body>|  <script src="js/arweave.js"></script>\n</body>|' index.html
    echo "✅ arweave.js añadido a index.html."
fi

# Insertar botones en el menú de herramientas
if ! grep -q "btn-arweave-subir-menu" index.html; then
    sed -i '/id="btn-colmena"/a\
        '"$(sed 's/"/\\"/g' parche_menu_arweave.html)"'
    ' index.html
    echo "✅ Botones de Arweave insertados en el menú."
fi

echo ""
echo "⚠️  Para completar la instalación manualmente:"
echo "   1. Abre js/app.js"
echo "   2. Busca el final de los manejadores del menú (cerca de 'btn-colmena')"
echo "   3. Pega el contenido de parche_app_arweave.js justo después."
echo "   4. Guarda y recarga."
echo ""
echo "🎉 Módulo Arweave instalado."
