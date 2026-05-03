#!/data/data/com.termux/files/usr/bin/bash
echo "🎨 Instalando mejoras de interfaz..."
PROYECTO="/storage/emulated/0/Download/FranBot"

# Backups
cp "$PROYECTO/css/estilo.css" "$PROYECTO/css/estilo.css.backup.$(date +%s)" 2>/dev/null
cp "$PROYECTO/index.html" "$PROYECTO/index.html.backup.$(date +%s)" 2>/dev/null

# Reemplazar archivos
cp estilo.css "$PROYECTO/css/estilo.css"
cp index.html "$PROYECTO/index.html"

echo "✅ estilo.css actualizado."
echo "✅ index.html actualizado con barra superior."
echo "🎉 Interfaz mejorada instalada. Recarga FranBot."
