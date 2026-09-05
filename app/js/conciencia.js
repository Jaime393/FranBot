// conciencia.js — Panel de diagnóstico honesto: solo reporta módulos que existen
// realmente en este núcleo (nada de "✅" para cosas que no están cargadas).
window.Conciencia = {
  estado: { motor: false, oraculo: false, codice: false, serviceWorker: false, ultimoSueno: null },

  diagnosticar() {
    this.estado.motor = !!(window.franbot && window.MIU);
    this.estado.oraculo = !!(window.BuscarOraculo && window.BuscarOraculo._listo);
    this.estado.codice = !!window.CODICE_MIU;
    this.estado.serviceWorker = 'serviceWorker' in navigator && !!navigator.serviceWorker.controller;
    return this.estado;
  },

  registrarSueno() {
    this.estado.ultimoSueno = new Date().toISOString();
  },

  renderHTML() {
    this.diagnosticar();
    const e = this.estado;
    const inv = window.franbot?.estado?.invariantes || {};
    const banda = window.MIU ? window.MIU.banda(inv.Ki_neg ?? 0) : { emoji: '?', nombre: '—', desc: '' };
    const fila = (label, ok) => `<tr><td>${label}</td><td>${ok ? '✅' : '⚪'}</td></tr>`;
    return `
      <table class="tabla-diag">
        ${fila('Núcleo + motor MIU', e.motor)}
        ${fila('Oráculo (búsqueda)', e.oraculo)}
        ${fila('Códice', e.codice)}
        ${fila('Service worker (local)', e.serviceWorker)}
        <tr><td>Último ciclo BEA</td><td>${e.ultimoSueno ? new Date(e.ultimoSueno).toLocaleTimeString() : '—'}</td></tr>
      </table>
      <p class="eyebrow" style="margin-top:14px;">Métricas MIU</p>
      <table class="tabla-diag">
        <tr><td>D_f</td><td class="mono">${inv.D_f?.toFixed(4) ?? '—'}</td></tr>
        <tr><td>Kᵢ</td><td class="mono dorado">${inv.Ki?.toFixed(4) ?? '—'}</td></tr>
        <tr><td>f (sombra)</td><td class="mono">${inv.f?.toFixed(4) ?? '—'}</td></tr>
        <tr><td>Kᵢ⁻</td><td class="mono">${inv.Ki_neg?.toFixed(4) ?? '—'}</td></tr>
        <tr><td>Banda</td><td>${banda.emoji} ${banda.nombre}</td></tr>
      </table>
      <p class="tenue" style="margin-top:10px;font-size:0.8rem;">${banda.desc || ''}</p>`;
  }
};
