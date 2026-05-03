#!/data/data/com.termux/files/usr/bin/bash
echo "🔧 Aplicando correcciones pendientes..."
PROYECTO="/storage/emulated/0/Download/FranBot"
cd "$PROYECTO" || exit 1

# --- Corrección 1: Botones Arweave en index.html ---
echo "🔹 Insertando botones de Arweave en index.html..."
if ! grep -q "btn-arweave-subir-menu" index.html; then
  # Buscar la línea del botón btn-colmena y añadir después
  awk '/id="btn-colmena"/{print; print "<button id=\"btn-arweave-subir-menu\" style=\"display:block;width:100%;padding:8px;margin:5px 0;background:#1a1f2b;color:#eee;border:none;border-radius:5px;cursor:pointer;\">☁️ Subir alma a Arweave</button>"; print "<button id=\"btn-arweave-cargar-menu\" style=\"display:block;width:100%;padding:8px;margin:5px 0;background:#1a1f2b;color:#eee;border:none;border-radius:5px;cursor:pointer;\">📥 Cargar desde Arweave</button>"; next}1' index.html > index.html.tmp && mv index.html.tmp index.html
  echo "  ✅ Botones añadidos."
else
  echo "  ℹ️ Los botones ya existen."
fi

# --- Corrección 2: Parches en franbot-core.js para SuperLocalMemory ---
echo "🔹 Aplicando parches de SuperLocalMemory en franbot-core.js..."
cp js/franbot-core.js js/franbot-core.js.backup.super.$(date +%s)

# 2a. Inicialización en constructor (buscar "this.estado = ")
if grep -q "this.estado =" js/franbot-core.js && ! grep -q "SuperLocalMemory.inicializar" js/franbot-core.js; then
  sed -i '/this.estado = /a\    if (typeof SuperLocalMemory !== '\''undefined'\'') { this.estado.campo_conceptual = SuperLocalMemory.inicializar(this.estado.campo_conceptual); }' js/franbot-core.js
  echo "  ✅ Inicialización insertada en constructor."
fi

# 2b. Refuerzo en método procesar (buscar "return respuesta" después de un procesamiento)
if grep -q "return respuesta" js/franbot-core.js && ! grep -q "SuperLocalMemory.reforzar" js/franbot-core.js; then
  sed -i '/return respuesta/i\    if (typeof SuperLocalMemory !== '\''undefined'\'') { const palabras = mensaje.toLowerCase().split(/\\s+/); palabras.forEach(p => { if (this.estado.campo_conceptual.nodos[p]) { this.estado.campo_conceptual = SuperLocalMemory.reforzar(this.estado.campo_conceptual, p); } }); }' js/franbot-core.js
  echo "  ✅ Refuerzo insertado en procesar()."
fi

# 2c. Consolidación en método soñar (buscar "this._guardarEstado()" o "guardarEstado")
if grep -q "this._guardarEstado()" js/franbot-core.js && ! grep -q "SuperLocalMemory.consolidar" js/franbot-core.js; then
  sed -i '/this._guardarEstado()/i\    if (typeof SuperLocalMemory !== '\''undefined'\'') { this.estado.campo_conceptual = SuperLocalMemory.consolidar(this.estado.campo_conceptual); }' js/franbot-core.js
  echo "  ✅ Consolidación insertada en soñar()."
fi

echo "🔧 Correcciones finalizadas."
