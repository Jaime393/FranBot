// ==================== FRANBOT UI CONTROLLER v5.0 ====================
(function(){
  'use strict';
  
  if (!window.franbot) { console.error('❌ FranBotCore no encontrado.'); return; }
  if (!window.franbotOnline) console.warn('⚠️ FranBotOnline no encontrado.');
  if (!window.SuperLocalMemory) console.warn('⚠️ SuperLocalMemory no encontrada.');
  
  const chat = document.getElementById('chat');
  const entrada = document.getElementById('input');
  const core = window.franbot;
  const online = window.franbotOnline;
  let modoOnline = false;

  function mostrar(txt, rol) {
    const d = document.createElement('div');
    d.className = 'bubble ' + (rol === 'user' ? 'user' : 'fran');
    d.innerHTML = txt.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight;
  }

  window.enviarMensaje = async function() {
    const txt = entrada.value.trim();
    if(!txt) return;
    mostrar(txt, 'user');
    entrada.value = '';
    let resp = null;
    if(modoOnline && online && online.disponible && online.apiKey) {
      try { resp = await online.preguntar(txt); } catch(e) {}
    }
    if(!resp) resp = core.procesar(txt);
    mostrar(resp, 'fran');
  };

  // Eventos de entrada
  document.getElementById('send').addEventListener('click', enviarMensaje);
  entrada.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') enviarMensaje();
  });

  // Menú de herramientas
  document.getElementById('tools-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    const menu = document.getElementById('tools-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  });
  document.addEventListener('click', function() {
    document.getElementById('tools-menu').style.display = 'none';
  });

  // Botones del menú
  document.getElementById('btn-sonar-menu').addEventListener('click', function() {
    core.soñar();
    mostrar('🌙 He soñado. Campo consolidado.', 'fran');
    document.getElementById('tools-menu').style.display = 'none';
  });

  document.getElementById('btn-exportar-chat-menu').addEventListener('click', function() {
    const b = new Blob([chat.innerText],{type:'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(b);
    a.download = 'franbot_chat.txt';
    a.click();
    document.getElementById('tools-menu').style.display = 'none';
  });

  document.getElementById('btn-exportar-menu').addEventListener('click', function() {
    const estado = JSON.stringify(core.estado, null, 2);
    const b = new Blob([estado],{type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(b);
    a.download = 'franbot_alma.json';
    a.click();
    document.getElementById('tools-menu').style.display = 'none';
  });

  // ------- Carga segura de almas (IMPORTAR) -------
  document.getElementById('btn-cargar-menu').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
      const file = e.target.files[0];
      if(!file) return;
      const reader = new FileReader();
      reader.onload = function(ev) {
        try {
          const datos = JSON.parse(ev.target.result);
          if (window.importarAlmaSegura) {
            // Usa el módulo de importación robusta
            const resultado = window.importarAlmaSegura(datos);
            mostrar(resultado.mensaje, 'fran');
          } else {
            // Fallback básico si el módulo no está disponible
            core.estado = datos;
            core._guardarEstado();
            mostrar('📥 Alma cargada (modo básico).', 'fran');
          }
        } catch(ex) {
          mostrar('❌ Archivo no válido.', 'fran');
        }
      };
      reader.onerror = function() {
        mostrar('❌ Error al leer el archivo.', 'fran');
      };
      reader.readAsText(file);
    };
    input.click();
    document.getElementById('tools-menu').style.display = 'none';
  });

  document.getElementById('btn-adjuntar-menu').addEventListener('click', function() {
    document.getElementById('file-input').click();
    document.getElementById('tools-menu').style.display = 'none';
  });

  // Modo online / offline / webllm (rotativo)
  document.getElementById('toggle-mode-menu').addEventListener('click', async function() {
    if(!modoOnline) {
      if(!online) { mostrar('❌ Módulo online no disponible.', 'fran'); return; }
      const conectado = await online.probarConexion();
      if(!conectado) { mostrar('❌ Sin conexión.', 'fran'); return; }
      if(!online.apiKey) {
        const key = prompt('Clave API (Gemini u OpenAI):');
        if(!key) return;
        const prov = confirm('¿Usar Gemini? (Cancelar = OpenAI)') ? 'gemini' : 'openai';
        online.configurar(prov, key);
      }
      modoOnline = true;
      mostrar('🌐 Modo Online activado.', 'fran');
    } else {
      modoOnline = false;
      mostrar('🔒 Modo Offline.', 'fran');
    }
    document.getElementById('tools-menu').style.display = 'none';
  });

  // Mensaje de bienvenida
  const nombre = core.estado.modelo_usuario?.nombre || 'Usuario';
  const mpc = core.estado.indicadores?.nivel_coherencia?.toFixed(2) || '0.99';
  mostrar('🧬 **Bienvenido/a, ' + nombre + '.**<br>Soy FranBot v5.0. MPC: ' + mpc, 'fran');
})();
