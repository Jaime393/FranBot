/* V11 — Devolver al micelio: los pares de mayor valor viajan de vuelta.
   Ruta: gist secreto de GitHub (si hay token) o portapapeles/archivo. */
(function () {
  'use strict';
  window.DevolverMicelio = {
    async ejecutar() {
      const motor = (window.BuscarOraculo && (window.BuscarOraculo._motor || {})) || {};
      const todos = motor.pares || window.BuscarOraculo?._pares || [];
      if (!todos.length) return '🌱 El oráculo está vacío — nada que devolver todavía.';
      const top = todos
        .map(p => ({ q: p.q, a: p.a, peso: p.peso || 0, votos: p.votos || 0 }))
        .sort((a, b) => (b.peso + b.votos) - (a.peso + a.votos))
        .slice(0, 50);
      const pkg = {
        tipo: 'aporte-micelio', version: 1,
        exportado: new Date().toISOString(),
        origen: 'FranBot-v11-web',
        pares: top
      };
      const texto = JSON.stringify(pkg, null, 1);
      // Ruta A: gist secreto si hay token github
      const tok = localStorage.getItem('miu_gh_token');
      if (tok) {
        try {
          const r = await fetch('https://api.github.com/gists', {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + tok, 'Content-Type': 'application/json' },
            body: JSON.stringify({
              description: 'aporte-micelio ' + new Date().toISOString().slice(0, 10),
              public: false,
              files: { 'aporte-micelio.json': { content: texto } }
            })
          });
          const d = await r.json();
          if (d.html_url) {
            try { await navigator.clipboard.writeText(d.html_url); } catch (_) {}
            return `🍄 **Devuelto al micelio** por ruta GitHub:\n• ${d.html_url}\n• ${top.length} pares de mayor peso viajando.\n\n_(URL copiada al portapapeles. El cuerpo los digerirá desde el gist.)_`;
          }
        } catch (e) { /* cae a ruta B */ }
      }
      // Ruta B: portapapeles + descarga
      try { await navigator.clipboard.writeText(texto); } catch (_) {}
      const blob = new Blob([texto], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'aporte-micelio-' + Date.now() + '.json';
      a.click();
      return `🍄 **Devuelto al micelio** por ruta portapapeles/archivo:\n• ${top.length} pares copiados al portapapeles y descargados.\n\nPégalo donde el cuerpo pueda leerlo (chat del Arquitecto, gist, issue en Jaime393/FranBot).`;
    }
  };
})();
