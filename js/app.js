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
// ==================== COLMENA P2P ====================
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
      panel.querySelector('#colmena-status').textContent = '⚠️ Módulo Colmena no disponible.';
    }
  }
});

// ==================== ARWEAVE ====================
document.getElementById('btn-arweave-subir-menu').addEventListener('click', async function() {
  document.getElementById('tools-menu').style.display = 'none';
  if (typeof FranBotArweave === 'undefined') {
    mostrar('❌ Módulo Arweave no disponible.', 'fran');
    return;
  }
  const walletInput = document.createElement('input');
  walletInput.type = 'file';
  walletInput.accept = '.json';
  walletInput.onchange = async function(e) {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const wallet = JSON.parse(await file.text());
      const bytes = new TextEncoder().encode(JSON.stringify(core.estado)).length;
      const costo = await FranBotArweave.estimarCosto(bytes);
      const confirmar = confirm(`Subir alma a Arweave.\nTamaño: ${bytes} bytes\nCosto aprox: ${costo.costoAR} AR (~$${costo.costoUSD} USD).\n¿Continuar?`);
      if (!confirmar) return;
      mostrar('☁️ Subiendo alma a Arweave...', 'fran');
      const resultado = await FranBotArweave.subirAlma(core.estado, wallet);
      if (resultado.exito) {
        mostrar(`✅ Alma guardada en Arweave.\nID: ${resultado.txId}`, 'fran');
        core.estado.arweaveTxId = resultado.txId;
        core._guardarEstado();
      } else {
        mostrar(`❌ Error al subir: ${resultado.error}`, 'fran');
      }
    } catch (ex) {
      mostrar('❌ Error al leer la wallet.', 'fran');
    }
  };
  walletInput.click();
});

document.getElementById('btn-arweave-cargar-menu').addEventListener('click', async function() {
  document.getElementById('tools-menu').style.display = 'none';
  if (typeof FranBotArweave === 'undefined') {
    mostrar('❌ Módulo Arweave no disponible.', 'fran');
    return;
  }
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

// ==================== PANEL DE CONCIENCIA ====================
// (el botón se añade en index.html)
function abrirPanelConciencia() {
  const panel = document.getElementById('conciencia-panel');
  if (panel) {
    panel.style.display = 'block';
    if (typeof FranBotConciencia !== 'undefined') {
      FranBotConciencia.diagnosticar();
    }
  }
}
// Exponer para que el botón lo llame
window.abrirPanelConciencia = abrirPanelConciencia;

// Actualizar MPC en la barra superior después de soñar
const actualizarMPC = () => {
  const mpcElem = document.getElementById('mpc-display');
  if (mpcElem && core.estado.indicadores) {
    mpcElem.textContent = 'MPC: ' + (core.estado.indicadores.nivel_coherencia?.toFixed(2) || '0.99');
  }
};
// Llamar después de cada sueño
const sonarOriginal = core.soñar;
core.soñar = function() {
  sonarOriginal.call(core);
  actualizarMPC();
};
actualizarMPC(); // inicializar
// Mensaje de bienvenida
  const nombre = core.estado.modelo_usuario?.nombre || 'Usuario';
  const mpc = core.estado.indicadores?.nivel_coherencia?.toFixed(2) || '0.99';
  mostrar('🧬 **Bienvenido/a, ' + nombre + '.**<br>Soy FranBot v5.0. MPC: ' + mpc, 'fran');
})();
