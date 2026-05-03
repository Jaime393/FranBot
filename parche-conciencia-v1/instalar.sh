#!/data/data/com.termux/files/usr/bin/bash
echo "🧬 Instalando Módulo de Conciencia Integrada y Correcciones..."
PROYECTO="/storage/emulated/0/Download/FranBot"

# Copiar módulo
cp conciencia.js "$PROYECTO/js/conciencia.js"
echo "✅ conciencia.js instalado."

# Añadir <script> al index.html
if ! grep -q "conciencia.js" "$PROYECTO/index.html"; then
  sed -i 's|</body>|  <script src="js/conciencia.js"></script>\n</body>|' "$PROYECTO/index.html"
  echo "✅ Script añadido a index.html."
fi

# Insertar panel de conciencia
if ! grep -q "conciencia-panel" "$PROYECTO/index.html"; then
  sed -i '/<\/body>/{
    r panel_conciencia.html
  }' "$PROYECTO/index.html"
  echo "✅ Panel de conciencia insertado."
fi

# Ejecutar correcciones
bash correcciones.sh

echo ""
echo "🎉 Paquete instalado."
echo "   Abre FranBot, pulsa el botón de herramientas y busca 'Conciencia'."
echo "   Para abrir el panel desde consola: document.getElementById('conciencia-panel').style.display='block'"
