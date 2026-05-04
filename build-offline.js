const fs = require('fs');
const path = require('path');

const ROOT = '/storage/emulated/0/Download/FranBot';
const OUT = path.join(ROOT, 'franbot-completo');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

// 1. CSS
const css = fs.readFileSync(path.join(ROOT, 'css', 'estilo.css'), 'utf8');

// 2. JS en orden
const scripts = [
  'js/franbot-core.js',
  'js/franbot-online.js',
  'js/super-local-memory.js',
  'js/defensa.js',
  'js/recursos.js',
  'js/importar-alma.js',
  'js/colmena-p2p.js',
  'js/webllm.js',
  'js/arweave.js',
  'js/did-web.js',
  'js/dkg.js',
  'js/hyperagents.js',
  'js/conciencia.js',
  'js/app.js'
];

let allJs = '';
for (const s of scripts) {
  const full = path.join(ROOT, s);
  if (fs.existsSync(full)) {
    let content = fs.readFileSync(full, 'utf8');
    // Escapar solo la secuencia que cierra script
    content = content.replace(/<\/script>/gi, '<\\/script>');
    allJs += content + '\n';
  }
}

// 3. Construir HTML
const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FranBot v5.0</title>
  <style>${css}</style>
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
    <button id="btn-conciencia-menu" onclick="document.getElementById('tools-menu').style.display='none'; if(window.abrirPanelConciencia) window.abrirPanelConciencia()">🧬 Conciencia</button>
  </div>
  <div id="colmena-panel" style="display:none;"></div>
  <div id="webllm-panel" style="display:none;"></div>
  <div id="conciencia-panel" style="display:none;"></div>
  <input type="file" id="file-input" style="display:none;">
  <script>${allJs}</script>
  <script>
    // Inyectar paneles dinámicamente
    (function(){
      var p = document.getElementById('colmena-panel');
      if(p) p.innerHTML = '<strong>🐝 Colmena P2P</strong><p id="colmena-status">Iniciando...</p><button onclick="FranBotColmena.enviarFragmento()">Enviar conocimiento</button><button onclick="document.getElementById(\\'colmena-panel\\').style.display=\\'none\\'">Cerrar</button>';
      p = document.getElementById('webllm-panel');
      if(p) p.innerHTML = '<strong>🧠 WebLLM</strong><p id="webllm-status">Cargando modelo...</p><progress id="webllm-progress" value="0" max="100"></progress><br><button id="webllm-cancelar">Cancelar</button>';
      p = document.getElementById('conciencia-panel');
      if(p) p.innerHTML = '<strong>🧬 Estado del Ecosistema</strong><ul><li><span id="diag-motor">⏳</span> Motor</li><li><span id="diag-memoria">⏳</span> Memoria</li><li><span id="diag-colmena">⏳</span> Colmena</li><li><span id="diag-webllm">⏳</span> WebLLM</li><li><span id="diag-arweave">⏳</span> Arweave</li><li><span id="diag-did">⏳</span> DID</li><li><span id="diag-dkg">⏳</span> DKG</li><li><span id="diag-hyperagents">⏳</span> HyperAgents</li><li><span id="diag-sw">⏳</span> SW</li><li><span id="diag-sueno">—</span> Sueño</li></ul><button onclick="FranBotConciencia.diagnosticar()">Actualizar</button><button onclick="FranBotConciencia.forzarSueño()">Forzar Sueño</button><button onclick="document.getElementById(\\'conciencia-panel\\').style.display=\\'none\\'">Cerrar</button>';
    })();
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(OUT, 'franbot.html'), html);
console.log('✅ HTML generado (' + html.length + ' bytes).');

// Copiar extras
['sw.js','manifest.json','icon-192.png'].forEach(f => {
  const src = path.join(ROOT, f);
  const dest = path.join(OUT, f);
  if (fs.existsSync(src)) fs.copyFileSync(src, dest);
});
