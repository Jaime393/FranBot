(function(){
  const chat = document.getElementById('chat');
  const entrada = document.getElementById('input');
  const core = window.franbot;
  const online = window.franbotOnline;
  const memoria = window.SuperLocalMemory ? new SuperLocalMemory() : null;
  let modoOnline = false;

  function mostrar(txt, rol) {
    const d = document.createElement('div'); d.className = 'bubble ' + (rol === 'user' ? 'user' : 'fran');
    d.innerHTML = txt.replace(/**(.+?)**/g,'<strong>$1</strong>'); chat.appendChild(d); chat.scrollTop = chat.scrollHeight;
  }

  window.enviarMensaje = async function() {
    const txt = entrada.value.trim(); if(!txt) return;
    mostrar(txt, 'user'); entrada.value = '';
    let resp = null;
    if(modoOnline && online.disponible && online.apiKey) { resp = await online.preguntar(txt); if(!resp) mostrar('Falló online. Usando offline...', 'fran'); }
    if(!resp) resp = core.procesar(txt);
    mostrar(resp, 'fran');
    if(memoria && core.contador%10===0) memoria.consolidar();
  };

  document.getElementById('send').onclick = enviarMensaje;
  entrada.addEventListener('keypress', e => { if(e.key==='Enter') enviarMensaje(); });

  document.getElementById('tools-btn').onclick = (e) => {
    e.stopPropagation();
    const menu = document.getElementById('tools-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  };
  document.addEventListener('click', () => document.getElementById('tools-menu').style.display = 'none');

  document.getElementById('btn-sonar-menu').onclick = () => {
    if(memoria) memoria.consolidar();
    mostrar('🌙 He soñado. Campo consolidado.', 'fran');
  };
  document.getElementById('btn-exportar-chat-menu').onclick = () => {
    const b = new Blob([chat.innerText],{type:'text/plain'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'franbot_chat.txt'; a.click();
  };
  document.getElementById('toggle-mode-menu').onclick = async () => {
    if(!modoOnline) {
      const conectado = await online.probarConexion();
      if(!conectado) return mostrar('❌ Sin conexión.', 'fran');
      if(!online.apiKey) {
        const key = prompt('Clave API (Gemini u OpenAI):');
        if(!key) return;
        const prov = confirm('¿Usar Gemini?') ? 'gemini' : 'openai';
        online.configurar(prov, key);
      }
      modoOnline = true;
      mostrar('🌐 Modo Online con '+online.proveedor+'.', 'fran');
    } else {
      modoOnline = false;
      mostrar('🔒 Modo Offline.', 'fran');
    }
  };
  document.getElementById('btn-colmena-menu').onclick = () => mostrar('🐝 t.me/franbot_colmena', 'fran');
  document.getElementById('btn-adjuntar-menu').onclick = () => document.getElementById('file-input').click();

  mostrar('🧬 FranBot v5.0 listo. MPC: '+core.estado.indicadores.nivel_coherencia.toFixed(2)+'.', 'fran');
})();