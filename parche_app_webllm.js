// Añade esta lógica en app.js, dentro del manejador del botón Modo Online
// para incluir el modo WebLLM junto a Offline/Online.

// Reemplazar la variable de modo actual por un selector de 3 estados:
// modo: 'offline' | 'online' | 'webllm'
window.modoIA = 'offline';

function cambiarModo(nuevoModo) {
  window.modoIA = nuevoModo;
  const btn = document.getElementById('btn-modo');
  if (btn) {
    btn.textContent = '🧠 ' + nuevoModo.charAt(0).toUpperCase() + nuevoModo.slice(1);
  }
  if (nuevoModo === 'webllm' && !FranBotWebLLM.cargado) {
    mostrarPanelWebLLM();
  }
}

function mostrarPanelWebLLM() {
  const panel = document.getElementById('webllm-panel');
  if (!panel) return;
  panel.style.display = 'block';
  const progreso = document.getElementById('webllm-progress');
  const estado = document.getElementById('webllm-status');
  const cancelar = document.getElementById('webllm-cancelar');

  estado.textContent = 'Iniciando descarga...';
  progreso.value = 0;

  FranBotWebLLM.iniciar((msg) => {
    estado.textContent = msg;
    if (msg.includes('%')) {
      progreso.value = parseInt(msg);
    }
    if (msg === 'Modelo listo.') {
      panel.style.display = 'none';
      cambiarModo('webllm');
      // Si hay un evento de modo, se actualiza la UI
    }
    if (msg.startsWith('Error')) {
      cancelar.textContent = 'Cerrar';
    }
  });

  cancelar.onclick = () => {
    panel.style.display = 'none';
    cambiarModo('offline');
  };
}

// Modificar el manejador del botón Modo Online para que rote entre los 3 modos:
// offline -> online -> webllm -> offline
document.getElementById('btn-modo').addEventListener('click', function() {
  const modos = ['offline', 'online', 'webllm'];
  const idx = modos.indexOf(window.modoIA);
  const siguiente = modos[(idx + 1) % modos.length];
  cambiarModo(siguiente);
});

// Enviar mensaje: redirigir a WebLLM si está activo
// (debe insertarse en la función enviarMensaje)
const enviarMensajeOriginal = window.enviarMensaje; // si existe
window.enviarMensaje = async function(mensaje) {
  if (window.modoIA === 'webllm' && FranBotWebLLM.cargado) {
    mostrar('Procesando localmente...', 'usuario');
    FranBotWebLLM.generar(mensaje, (resp) => {
      // actualizar último mensaje de FranBot en la UI
      const ultimo = document.querySelector('.mensaje.fran:last-child .texto');
      if (ultimo) ultimo.textContent = resp;
    }).then(respFinal => {
      mostrar(respFinal, 'fran');
    });
    return;
  }
  if (enviarMensajeOriginal) enviarMensajeOriginal(mensaje);
};
