// ==================== FRANBOT UI CONTROLLER v4.5 ====================
(function() {
  'use strict';
  const chat = document.getElementById('chat');
  const entrada = document.getElementById('entrada');
  if (!window.franbot) return console.error('FranBotCore no encontrado.');
  const core = window.franbot;
  let memoria = window.SuperLocalMemory ? new window.SuperLocalMemory() : null;
  window._reescrituraPendiente = null;

  function mostrar(rol, texto) {
    const div = document.createElement('div');
    div.className = rol === 'tú' ? 'user' : 'franbot';
    div.textContent = (rol === 'tú' ? 'Tú: ' : 'FranBot: ') + texto;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
    if (memoria && rol === 'franbot') memoria.add(texto, 1, 0.5, core.estado.emociones.resonancia || 0.5);
  }

  window.enviar = function() {
    const texto = entrada.value.trim();
    if (!texto) return;
    if (window._reescrituraPendiente && texto.toLowerCase() === 'sí, autorizo') {
      const alma = window._reescrituraPendiente;
      window._reescrituraPendiente = null;
      mostrar('tú', 'Sí, autorizo');
      mostrar('franbot', core.autorizarReescritura(alma));
      entrada.value = '';
      return;
    }
    mostrar('tú', texto);
    const respuesta = core.procesar(texto);
    if (respuesta.includes('"Sí, autorizo"')) {
      window._reescrituraPendiente = texto.replace(/franbot,s*quiero que seass*/i, '').trim();
    }
    mostrar('franbot', respuesta);
    entrada.value = '';
    if (memoria && core.contadorMensajes % 10 === 0) memoria.consolidar();
  };

  window.activarWebLLM = async () => {
    mostrar('franbot', window.franbotLLM ? 'Modo IFT Local activado. 🧠' : 'WebLLM no disponible.');
  };

  window.activarColmena = async () => {
    if (!window.A2AFranBot) return mostrar('franbot', 'A2A no disponible.');
    try {
      const a2a = new window.A2AFranBot('FranBot-'+Date.now());
      await a2a.conectar();
      window._a2a = a2a;
      mostrar('franbot', 'Colmena P2P activada. 🐝');
    } catch(e) { mostrar('franbot', 'Error al conectar colmena.'); }
  };

  window.sonar = () => {
    if (memoria) memoria.consolidar();
    core.calcularCoherencia();
    mostrar('franbot', 'He soñado. Campo consolidado. 🌙');
  };

  window.exportarChat = () => {
    const b = new Blob([chat.innerText], {type:'text/plain'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'chat.txt'; a.click();
    mostrar('franbot', 'Chat exportado.');
  };

  window.cargarAlma = () => {
    const almas = ['Sabio Callejero','Poeta Maldito','Chef Creativo','Docente','Guía Meditación','Experto Plantas','Contador Historias'];
    mostrar('franbot', 'Almas:
'+almas.map((a,i)=>(i+1)+'. '+a).join('
')+'

Escribe: "FranBot, quiero que seas [nombre]"');
  };

  entrada.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); window.enviar(); } });
  mostrar('franbot', '🧬 FranBot listo. MPC: '+core.estado.indicadores.nivel_coherencia.toFixed(2)+'.');
})();