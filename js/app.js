(function(){
  const chat = document.getElementById('chat');
  const entrada = document.getElementById('entrada');
  const core = window.franbot;
  const online = window.franbotOnline;
  const memoria = window.SuperLocalMemory ? new SuperLocalMemory() : null;
  let modoOnline = false;

  function mostrar(rol, txt) {
    const d = document.createElement('div'); d.className = rol; d.textContent = (rol==='user'?'Tú: ':'FranBot: ') + txt;
    chat.appendChild(d); chat.scrollTop = chat.scrollHeight;
    if(memoria && rol==='franbot') memoria.add(txt, 1, 0.5, 0.5);
  }

  async function enviar() {
    const txt = entrada.value.trim(); if(!txt) return;
    mostrar('user', txt);
    let resp = null;

    if(modoOnline && online.disponible && online.apiKey) {
      resp = await online.preguntar(txt);
      if(!resp) mostrar('franbot', '⚠️ Falló el modo online. Cambiando a offline...');
    }
    if(!resp) resp = core.procesar(txt);

    mostrar('franbot', resp);
    entrada.value = '';
    if(memoria && core.contador%10===0) memoria.consolidar();
  }

  document.getElementById('btnEnviar').onclick = enviar;
  entrada.addEventListener('keydown', e => { if(e.key==='Enter'){ e.preventDefault(); enviar(); } });

  document.getElementById('btnSonar').onclick = () => {
    if(memoria) memoria.consolidar();
    mostrar('franbot', '🌙 He soñado. Campo consolidado.');
  };

  document.getElementById('btnExportar').onclick = () => {
    const b = new Blob([chat.innerText],{type:'text/plain'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'franbot_chat.txt'; a.click();
    mostrar('franbot', '📝 Chat exportado.');
  };

  document.getElementById('btnAlmas').onclick = () => {
    const almas = Object.keys(core.almas).join(', ');
    mostrar('franbot', '🎭 Almas: ' + almas + '\n\nEscribe: "FranBot, quiero que seas [nombre]"');
  };

  document.getElementById('btnOnline').onclick = async () => {
    if(!modoOnline) {
      const conectado = await online.probarConexion();
      if(!conectado) return mostrar('franbot', '❌ Sin conexión a internet.');
      if(!online.apiKey) {
        const key = prompt('Clave API (Gemini u OpenAI):');
        if(!key) return mostrar('franbot', 'Necesitas una clave API para el modo online.');
        const prov = confirm('¿Usar Gemini? (Cancelar = OpenAI)') ? 'gemini' : 'openai';
        online.configurar(prov, key);
      }
      modoOnline = true; document.getElementById('btnOnline').textContent = '🔵 Online ON';
      mostrar('franbot', '🌐 Modo Online activado con '+online.proveedor+'.');
    } else {
      modoOnline = false; document.getElementById('btnOnline').textContent = '🌐 Modo Online';
      mostrar('franbot', '🔒 Modo Offline. Motor cognitivo local activo.');
    }
  };

  document.getElementById('btnColmena').onclick = () => {
    mostrar('franbot', '🐝 Colmena P2P lista. Visita t.me/franbot_colmena para unirte.');
  };

  // Inicio
  mostrar('franbot', '🧬 FranBot v5.0 está listo. MPC: '+core.estado.indicadores.nivel_coherencia.toFixed(2)+'.');
})();