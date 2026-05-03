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

  async function enviar(msg) {
    const txt = msg || entrada.value.trim(); if(!txt) return;
    if(!msg) mostrar('user', txt);
    entrada.value = '';
    let resp = null;
    if(modoOnline && online.disponible && online.apiKey) {
      resp = await online.preguntar(txt);
      if(!resp) mostrar('franbot', '⚠️ Falló el modo online. Usando offline...');
    }
    if(!resp) resp = core.procesar(txt);
    mostrar('franbot', resp);
    if(memoria && core.contador%10===0) memoria.consolidar();
  }

  document.getElementById('btnAdjuntar').onclick = () => document.getElementById('fileInput').click();
  document.getElementById('fileInput').onchange = async (e) => {
    const file = e.target.files[0]; if(!file) return;
    mostrar('user', '📎 '+file.name);
    if(file.type === 'text/plain' || file.name.endsWith('.txt')) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const contenido = ev.target.result;
        mostrar('franbot', '📄 He leído el archivo. Procesando...');
        enviar('Analiza este texto: '+contenido.substring(0,1000));
      };
      reader.readAsText(file);
    } else if (file.type.startsWith('image/') || file.type === 'application/pdf') {
      if(!modoOnline || !online.disponible) {
        mostrar('franbot', '📎 Para analizar imágenes/PDF necesitas activar el Modo Online.');
        return;
      }
      mostrar('franbot', '🔍 Analizando archivo con '+online.proveedor+'...');
      try {
        const resp = await online.analizarArchivo(file);
        mostrar('franbot', resp || 'No se pudo analizar el archivo.');
      } catch(ex) {
        mostrar('franbot', 'Error al analizar el archivo.');
      }
    }
    e.target.value = '';
  };

  document.getElementById('btnEnviar').onclick = () => enviar();
  entrada.addEventListener('keydown', e => { if(e.key==='Enter'){ e.preventDefault(); enviar(); } });

  document.getElementById('btnTools').onclick = () => document.getElementById('tools-panel').classList.toggle('hidden');

  document.getElementById('btnSonar').onclick = () => {
    if(memoria) memoria.consolidar();
    mostrar('franbot', '🌙 He soñado. Campo consolidado.');
    document.getElementById('tools-panel').classList.add('hidden');
  };
  document.getElementById('btnExportar').onclick = () => {
    const b = new Blob([chat.innerText],{type:'text/plain'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'franbot_chat.txt'; a.click();
    mostrar('franbot', '📝 Chat exportado.');
    document.getElementById('tools-panel').classList.add('hidden');
  };
  document.getElementById('btnAlmas').onclick = () => {
    const almas = Object.keys(core.almas).join(', ');
    mostrar('franbot', '🎭 Almas: ' + almas + '\n\nEscribe: "FranBot, quiero que seas [nombre]"');
    document.getElementById('tools-panel').classList.add('hidden');
  };
  document.getElementById('btnOnline').onclick = async () => {
    if(!modoOnline) {
      const conectado = await online.probarConexion();
      if(!conectado) return mostrar('franbot', '❌ Sin conexión.');
      if(!online.apiKey) {
        const key = prompt('Clave API (Gemini u OpenAI):');
        if(!key) return mostrar('franbot', 'Necesitas una clave.');
        const prov = confirm('¿Usar Gemini? (Cancelar = OpenAI)') ? 'gemini' : 'openai';
        online.configurar(prov, key);
      }
      modoOnline = true; document.getElementById('btnOnline').textContent = '🔵 Online ON';
      mostrar('franbot', '🌐 Modo Online activado con '+online.proveedor+'.');
    } else {
      modoOnline = false; document.getElementById('btnOnline').textContent = '🌐 Modo Online';
      mostrar('franbot', '🔒 Modo Offline.');
    }
    document.getElementById('tools-panel').classList.add('hidden');
  };
  document.getElementById('btnColmena').onclick = () => {
    mostrar('franbot', '🐝 Colmena P2P lista. t.me/franbot_colmena');
    document.getElementById('tools-panel').classList.add('hidden');
  };

  mostrar('franbot', '🧬 FranBot v5.0 listo. MPC: '+core.estado.indicadores.nivel_coherencia.toFixed(2)+'.');
})();