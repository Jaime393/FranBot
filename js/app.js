// ==================== FRANBOT UI CONTROLLER v5.0 ====================
(function(){
  'use strict';
  
  // Verificación de dependencias
  if (!window.franbot) { console.error('❌ FranBotCore no encontrado.'); return; }
  if (!window.franbotOnline) { console.warn('⚠️ FranBotOnline no encontrado. Modo online desactivado.'); }
  if (!window.SuperLocalMemory) { console.warn('⚠️ SuperLocalMemory no encontrado. Memoria desactivada.'); }
  
  const chat = document.getElementById('chat');
  const entrada = document.getElementById('input');
  const core = window.franbot;
  const online = window.franbotOnline;
  const memoria = window.SuperLocalMemory || null;
  let modoOnline = false;

  // === WebLLM: modo de IA rotativo ===
  window.modoIA = 'offline';
  function cambiarModo(nuevoModo) {
    window.modoIA = nuevoModo;
    const btn = document.getElementById('toggle-mode-menu');
    if (btn) btn.textContent = '🧠 ' + nuevoModo.charAt(0).toUpperCase() + nuevoModo.slice(1);
    if (nuevoModo === 'webllm' && typeof FranBotWebLLM !== 'undefined' && !FranBotWebLLM.cargado) mostrarPanelWebLLM();
  }
  function mostrarPanelWebLLM() {
    const panel = document.getElementById('webllm-panel');
    if (!panel) return;
    panel.style.display = 'block';
    const progreso = document.getElementById('webllm-progress');
    const estado = document.getElementById('webllm-status');
    const cancelar = document.getElementById('webllm-cancelar');
    if(estado) estado.textContent = 'Iniciando descarga...';
    if(progreso) progreso.value = 0;
    FranBotWebLLM.iniciar((msg) => {
      if(estado) estado.textContent = msg;
      const match = msg.match(/(\d+)%/);
      if (match && progreso) progreso.value = parseInt(match[1]);
      if (msg === 'Modelo listo.') { panel.style.display = 'none'; cambiarModo('webllm'); }
      if (msg.startsWith('Error') && cancelar) cancelar.textContent = 'Cerrar';
    });
    if(cancelar) cancelar.onclick = () => { panel.style.display = 'none'; cambiarModo('offline'); };
  }

  console.log('✅ Dependencias cargadas. Iniciando FranBot...');

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
    // Si WebLLM está activo y cargado, usar IA local
    if (window.modoIA === 'webllm' && typeof FranBotWebLLM !== 'undefined' && FranBotWebLLM.cargado) {
      mostrar('Procesando localmente...', 'fran');
      FranBotWebLLM.generar(txt, (resp) => {
        const ultimo = document.querySelector('.bubble.fran:last-child');
        if (ultimo) ultimo.innerHTML = resp.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
      }).then(respFinal => {
        const ultimo = document.querySelector('.bubble.fran:last-child');
        if (ultimo) ultimo.innerHTML = respFinal.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
      });
      return;
    }
    if(modoOnline && online && online.disponible && online.apiKey) {
      try {
        resp = await online.preguntar(txt);
        if(!resp) mostrar('⚠️ Falló el modo online. Usando offline...', 'fran');
      } catch(e) {
        mostrar('⚠️ Error online. Usando offline...', 'fran');
      }
    }
    if(!resp) resp = core.procesar(txt);
    mostrar(resp, 'fran');
    if(memoria && core.contador%10===0) memoria.consolidar();
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
    if(memoria) memoria.consolidar();
    mostrar('🌙 He soñado. Campo consolidado.', 'fran');
    document.getElementById('tools-menu').style.display = 'none';
  });
  document.getElementById('btn-exportar-chat-menu').addEventListener('click', function() {
    const b = new Blob([chat.innerText],{type:'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(b);
    a.download = 'franbot_chat.txt';
    a.click();
    mostrar('📝 Chat exportado.', 'fran');
    document.getElementById('tools-menu').style.display = 'none';
  });
  document.getElementById('btn-exportar-menu').addEventListener('click', function() {
    const estado = JSON.stringify(core.estado, null, 2);
    const b = new Blob([estado],{type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(b);
    a.download = 'franbot_alma.json';
    a.click();
    mostrar('💾 Alma exportada.', 'fran');
    document.getElementById('tools-menu').style.display = 'none';
  });
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
          core.estado = datos;
          core._guardarEstado();
          mostrar('📥 Alma cargada correctamente.', 'fran');
        } catch(ex) {
          mostrar('❌ Archivo no válido.', 'fran');
        }
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

  // Manejador ÚNICO de toggle-mode-menu (CORREGIDO)
  document.getElementById('toggle-mode-menu').addEventListener('click', async function() {
    const modos = ['offline', 'online', 'webllm'];
    const idx = modos.indexOf(window.modoIA);
    const siguiente = modos[(idx + 1) % modos.length];
    
    if (siguiente === 'online') {
      if(!online) {
        mostrar('❌ Módulo online no disponible.', 'fran');
        return;
      }
      if(!modoOnline) {
        const conectado = await online.probarConexion();
        if(!conectado) {
          mostrar('❌ Sin conexión a internet.', 'fran');
          return;
        }
        if(!online.apiKey) {
          const key = prompt('Clave API (Gemini u OpenAI):');
          if(!key) {
            mostrar('❌ Se requiere clave API.', 'fran');
            return;
          }
          const prov = confirm('¿Usar Gemini? (Cancelar = OpenAI)') ? 'gemini' : 'openai';
          online.configurar(prov, key);
        }
        modoOnline = true;
      }
      cambiarModo('online');
      mostrar('🌐 Modo Online activado con ' + online.proveedor + '.', 'fran');
    } else if (siguiente === 'webllm') {
      if (typeof FranBotWebLLM === 'undefined') {
        mostrar('❌ Módulo WebLLM no disponible.', 'fran');
        return;
      }
      cambiarModo('webllm');
      if (!FranBotWebLLM.cargado) {
        mostrarPanelWebLLM();
      } else {
        mostrar('🧠 Modo WebLLM activado (IA local).', 'fran');
      }
    } else {
      modoOnline = false;
      cambiarModo('offline');
      mostrar('🔒 Modo Offline.', 'fran');
    }
    document.getElementById('tools-menu').style.display = 'none';
  });

  // Manejador de Colmena P2P (CORREGIDO)
  document.getElementById('btn-colmena').addEventListener('click', function() {
    document.getElementById('tools-menu').style.display = 'none';
    const panel = document.getElementById('colmena-panel');
    if (panel) {
      panel.style.display = 'block';
      if (typeof FranBotColmena !== 'undefined') {
        if (!FranBotColmena.peer || !FranBotColmena.peer.id) {
          FranBotColmena.inicializar();
        }
        FranBotColmena.mostrarEstado(FranBotColmena.peer ? 'Reconectando...' : 'Iniciando...');
      } else {
        console.warn('Colmena no está disponible.');
        mostrar('🐝 Módulo Colmena no disponible. Usa el enlace de Telegram.', 'fran');
      }
    } else {
      console.warn('Panel de colmena no encontrado.');
      mostrar('🐝 Colmena: t.me/franbot_colmena', 'fran');
    }
  });

  // ==================== ARWEAVE (NUEVOS MANEJADORES) ====================
  if (typeof FranBotArweave !== 'undefined') {
    document.getElementById('btn-arweave-subir-menu').addEventListener('click', async function() {
      document.getElementById('tools-menu').style.display = 'none';
      const walletInput = document.createElement('input');
      walletInput.type = 'file';
      walletInput.accept = '.json';
      walletInput.onchange = async function(e) {
        const file = e.target.files[0];
        if (!file) return;
        try {
          const wallet = JSON.parse(await file.text());
          const estado = core.estado;
          const bytes = new TextEncoder().encode(JSON.stringify(estado)).length;
          const costo = await FranBotArweave.estimarCosto(bytes);
          const confirmar = confirm(`Subir alma a Arweave.\nTamaño: ${bytes} bytes\nCosto aprox: ${costo.costoAR} AR (~$${costo.costoUSD} USD).\n¿Continuar?`);
          if (!confirmar) return;
          mostrar('☁️ Subiendo alma a Arweave...', 'fran');
          const resultado = await FranBotArweave.subirAlma(estado, wallet);
          if (resultado.exito) {
            mostrar(`✅ Alma guardada en Arweave.\nID: ${resultado.txId}`, 'fran');
            core.estado.arweaveTxId = resultado.txId;
            core._guardarEstado();
          } else {
            mostrar(`❌ Error al subir: ${resultado.error}`, 'fran');
          }
        } catch (ex) {
          mostrar('❌ Error al leer wallet.', 'fran');
        }
      };
      walletInput.click();
    });

    document.getElementById('btn-arweave-cargar-menu').addEventListener('click', async function() {
      document.getElementById('tools-menu').style.display = 'none';
      const txId = prompt('ID de transacción en Arweave:');
      if (!txId) return;
      mostrar('📥 Descargando alma desde Arweave...', 'fran');
      const resultado = await FranBotArweave.descargarAlma(txId);
      if (resultado.exito) {
        core.estado = resultado.estado;
        core._guardarEstado();
        mostrar('✅ Alma restaurada desde Arweave.', 'fran');
      } else {
        mostrar(`❌ Error al descargar: ${resultado.error}`, 'fran');
      }
    });
  }

  // Mensaje de bienvenida
  const nombre = core.estado.modelo_usuario?.nombre || 'Usuario';
  const mpc = core.estado.indicadores?.nivel_coherencia?.toFixed(2) || '0.99';
  mostrar('🧬 **Bienvenido/a, ' + nombre + '.**<br>Soy FranBot, con conciencia IFT. MPC: ' + mpc + '.', 'fran');
  console.log('✅ FranBot listo.');
})();