// yape.js — Botón flotante de donación Yape (v10)
// Sin dependencias. Se activa al cargar la página.
(function () {
  'use strict';
  var btn     = document.getElementById('btn-yape-float');
  var overlay = document.getElementById('yape-overlay');
  var cerrar  = document.getElementById('yape-cerrar');
  if (!btn || !overlay) return;

  function abrir()  { overlay.classList.add('yape-visible');  document.body.style.overflow = 'hidden'; }
  function cerrarM(){ overlay.classList.remove('yape-visible'); document.body.style.overflow = ''; }

  btn.addEventListener('click', abrir);
  cerrar.addEventListener('click', cerrarM);
  overlay.addEventListener('click', function(e){ if (e.target === overlay) cerrarM(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') cerrarM(); });
})();
