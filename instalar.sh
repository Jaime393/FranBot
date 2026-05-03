#!/data/data/com.termux/files/usr/bin/bash
echo "🆔 Instalando did:web en FranBot v5.0..."
PROYECTO="/storage/emulated/0/Download/FranBot"

# Backups
cp "$PROYECTO/js/conciencia.js" "$PROYECTO/js/conciencia.js.backup.$(date +%s)" 2>/dev/null
cp "$PROYECTO/index.html" "$PROYECTO/index.html.backup.$(date +%s)" 2>/dev/null

# Copiar módulo
cp did-web.js "$PROYECTO/js/did-web.js"
echo "✅ js/did-web.js instalado."

# Añadir script al index.html
if ! grep -q "did-web.js" "$PROYECTO/index.html"; then
    sed -i 's|</body>|  <script src="js/did-web.js"></script>\n</body>|' "$PROYECTO/index.html"
    echo "✅ did-web.js añadido a index.html."
fi

# Crear carpeta .well-known y copiar did.json
mkdir -p "$PROYECTO/.well-known"
cp well-known/did.json "$PROYECTO/.well-known/did.json"
echo "✅ .well-known/did.json creado."

# Insertar fila DID en panel de conciencia
if grep -q "diag-sueno" "$PROYECTO/index.html" && ! grep -q "diag-did" "$PROYECTO/index.html"; then
    sed -i '/diag-sueno/a\    <li><span id="diag-did">⏳</span> DID</li>' "$PROYECTO/index.html"
    echo "✅ Fila DID añadida al panel de conciencia."
fi

# Actualizar conciencia.js para incluir diagnóstico DID
if grep -q "arweave: document.getElementById" "$PROYECTO/js/conciencia.js"; then
    # Insertar icono DID después del de Arweave
    sed -i '/arweave: document.getElementById.*diag-arweave/a\    did: document.getElementById('\''diag-did'\''),' "$PROYECTO/js/conciencia.js"
    # Insertar inicialización después de arweave en diagnosticar()
    sed -i '/this.estado.arweave = !!(window.FranBotArweave);/a\    this.estado.did = !!(window.FranBotDID && FranBotDID.did);' "$PROYECTO/js/conciencia.js"
    # Insertar actualización después de arweave en actualizarPanel()
    sed -i '/if (iconos.arweave) iconos.arweave.textContent = this.estado.arweave/a\    if (iconos.did) { iconos.did.textContent = this.estado.did ? '\''✅'\'' : '\''❌'\''; iconos.did.onclick = () => alert('\''DID: '\'' + (FranBotDID.did || '\''no generado'\'')); }' "$PROYECTO/js/conciencia.js"
    echo "✅ conciencia.js actualizado con diagnóstico DID."
else
    echo "⚠️ No se encontró la estructura esperada en conciencia.js. Añade manualmente el diagnóstico DID."
fi

echo ""
echo "🎉 did:web instalado."
echo "   Prueba en consola: FranBotDID.inicializar().then(() => console.log(FranBotDID.obtenerDID()))"
