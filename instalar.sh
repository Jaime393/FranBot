#!/data/data/com.termux/files/usr/bin/bash
echo "🧬 Instalando OriginTrail DKG en FranBot v5.0..."
PROYECTO="/storage/emulated/0/Download/FranBot"

# Backups
cp "$PROYECTO/js/conciencia.js" "$PROYECTO/js/conciencia.js.backup.$(date +%s)" 2>/dev/null
cp "$PROYECTO/index.html" "$PROYECTO/index.html.backup.$(date +%s)" 2>/dev/null

# Copiar módulo
cp dkg.js "$PROYECTO/js/dkg.js"
echo "✅ js/dkg.js instalado."

# Añadir script al index.html
if ! grep -q "dkg.js" "$PROYECTO/index.html"; then
    sed -i 's|</body>|  <script src="js/dkg.js"></script>\n</body>|' "$PROYECTO/index.html"
    echo "✅ dkg.js añadido a index.html."
fi

# Insertar fila DKG en panel de conciencia
if grep -q "diag-did" "$PROYECTO/index.html" && ! grep -q "diag-dkg" "$PROYECTO/index.html"; then
    sed -i '/diag-did/a\    <li><span id="diag-dkg">⏳</span> OriginTrail DKG</li>' "$PROYECTO/index.html"
    echo "✅ Fila DKG añadida al panel de conciencia."
fi

# Actualizar conciencia.js con el nuevo módulo
if grep -q "this.estado.did = " "$PROYECTO/js/conciencia.js"; then
    # Insertar estado DKG después de DID
    sed -i '/this.estado.did = /a\    this.estado.dkg = !!(window.FranBotDKG && FranBotDKG.conectado);' "$PROYECTO/js/conciencia.js"
    echo "✅ Estado DKG insertado en diagnosticar()."
fi
if grep -q "did: document.getElementById('diag-did')" "$PROYECTO/js/conciencia.js"; then
    # Insertar icono DKG después de DID
    sed -i "/did: document.getElementById('diag-did')/a\    dkg: document.getElementById('diag-dkg')," "$PROYECTO/js/conciencia.js"
    echo "✅ Icono DKG insertado en actualizarPanel()."
fi
if grep -q "if (iconos.did)" "$PROYECTO/js/conciencia.js"; then
    # Insertar actualización DKG después del bloque DID
    sed -i '/if (iconos.did) {/a\    if (iconos.dkg) iconos.dkg.textContent = this.estado.dkg ? '\''✅'\'' : '\''❌'\'';' "$PROYECTO/js/conciencia.js"
    echo "✅ Lógica de actualización DKG insertada."
fi

echo ""
echo "🎉 OriginTrail DKG instalado."
echo "   Prueba en consola: FranBotDKG.inicializar().then(() => console.log(FranBotDKG.obtenerEstado()))"
