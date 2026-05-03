// Reemplaza el bloque actual de 'btn-colmena' (que solo abre Telegram)
// por este código que activa la colmena P2P.

document.getElementById('btn-colmena').addEventListener('click', function() {
  document.getElementById('tools-menu').style.display = 'none';
  const panel = document.getElementById('colmena-panel');
  if (panel) {
    panel.style.display = 'block';
    // Iniciar colmena si no está activa
    if (!FranBotColmena.peer || !FranBotColmena.peer.id) {
      FranBotColmena.inicializar();
    }
    FranBotColmena.mostrarEstado(FranBotColmena.peer ? 'Reconectando...' : 'Iniciando...');
  } else {
    console.warn('Panel de colmena no encontrado.');
  }
});
