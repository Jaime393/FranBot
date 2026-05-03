#!/data/data/com.termux/files/usr/bin/bash
echo "🧬 Instalando parche de importación robusta de almas..."
echo ""

# Verificar raíz del proyecto
if [ ! -f "index.html" ] || [ ! -f "js/app.js" ]; then
    echo "❌ No estás en la carpeta raíz de FranBot."
    exit 1
fi

# Backup de app.js
cp js/app.js js/app.js.backup.$(date +%s)
echo "✅ Backup de app.js creado."

# Copiar nuevo módulo
cp importar-alma.js js/importar-alma.js
echo "✅ Módulo importar-alma.js instalado."

# Añadir <script> al index.html si no existe
if ! grep -q "importar-alma.js" index.html; then
    # Insertar antes del cierre de </body>
    sed -i 's|</body>|  <script src="js/importar-alma.js"></script>\n</body>|' index.html
    echo "✅ Script añadido a index.html."
else
    echo "ℹ️ El script ya existe en index.html."
fi

# Parchear app.js: reemplazar el manejador antiguo de 'btn-cargar-menu'
# Buscamos el bloque desde 'btn-cargar-menu' hasta el cierre del listener
if grep -q "btn-cargar-menu" js/app.js; then
    # Método simple: eliminar todo lo relacionado con btn-cargar-menu
    # y luego insertar el nuevo bloque antes del siguiente evento
    # Usamos sed para eliminar entre 'btn-cargar-menu' y el siguiente 'document.getElementById'
    # (esto es frágil, por eso damos instrucción manual como alternativa)
    echo "⚠️ El parche automático de app.js es delicado."
    echo "   Se recomienda reemplazar manualmente el bloque 'btn-cargar-menu'."
    echo "   El nuevo código está en el archivo: parche_app.js"
else
    echo "❌ No se encontró 'btn-cargar-menu' en app.js."
fi

echo ""
echo "🎉 Parche instalado."
echo "   Revisa app.js y reemplaza el bloque 'btn-cargar-menu' con el contenido de parche_app.js"
echo "   Luego sube los cambios a GitHub."
