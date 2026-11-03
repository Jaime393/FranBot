// votacion.js — Voto 👍/👎 en cada respuesta. Alimenta pesos_oraculo (aprendizaje real),
// no es decorativo: un par muy votado en negativo deja de ofrecerse (ver buscar-oraculo.js).
(function () {
  function adjuntarBotones(bubble) {
    if (!window.franbot || bubble.querySelector('.votacion')) return;
    const texto = bubble.dataset.textoCrudo || bubble.innerText;
    const cont = document.createElement('div');
    cont.className = 'votacion';

    const like = document.createElement('button');
    like.className = 'voto voto-up';
    like.textContent = '👍';
    like.title = 'Buena respuesta';

    const dislike = document.createElement('button');
    dislike.className = 'voto voto-down';
    dislike.textContent = '👎';
    dislike.title = 'Mejorar esta respuesta';

    function votar(tipo, btnActivo, btnOtro) {
      window.franbot.registrarVoto(window.franbot.almaActiva, texto, tipo);
      btnActivo.classList.add('votado');
      btnOtro.classList.remove('votado');
      btnActivo.disabled = true;
      setTimeout(() => { btnActivo.disabled = false; }, 600);
    }
    like.onclick = () => votar('positivo', like, dislike);
    dislike.onclick = () => votar('negativo', dislike, like);

    cont.appendChild(like);
    cont.appendChild(dislike);
    bubble.appendChild(cont);
  }

  const chat = document.getElementById('chat-interior');
  if (!chat) return;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.classList?.contains('bubble') && node.classList.contains('fran')) {
          adjuntarBotones(node);
        }
      });
    });
  });
  observer.observe(chat, { childList: true });
})();
