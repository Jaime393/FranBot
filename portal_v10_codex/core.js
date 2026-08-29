// MiU Portal v10 — core (huella Codex V177)
async function cargarSeed() {
  try {
    const r = await fetch('./seed.json');
    const d = await r.json();
    document.getElementById('v').textContent = d.version;
    document.getElementById('f').textContent = d.fecha;
    document.getElementById('n').textContent = d.nodo;
    document.getElementById('mem').textContent =
      `${d.memoria.recuerdos} recuerdos · ${d.memoria.conversaciones} conversaciones · ${d.memoria.mensajes_alma} mensajes ALMA`;
    document.getElementById('rec').textContent = Object.entries(d.recursos)
      .map(([k, v]) => `${k}: ${v}`).join(' · ');
    document.getElementById('car').textContent = d.carencia;
  } catch (e) {
    document.getElementById('mem').textContent = 'seed.json no cargado: ' + e.message;
  }
}
document.addEventListener('DOMContentLoaded', cargarSeed);
function sembrar() {
  const b = document.getElementById('rho');
  b.classList.add('latido');
  setTimeout(() => b.classList.remove('latido'), 600);
}

async function cargarOracle() {
  const el = document.getElementById('orac');
  try {
    const r = await fetch('https://fran-oraculo-miu.jaimepvicente.workers.dev', {cache: 'no-store'});
    const d = await r.json();
    el.innerHTML = `vive: ${d.vive} · φ_centro ${d.phi_central} · φ_remoto ${d.phi_remoto} · 叠加 ${d.phi_superposicion}<br>K_tau ${d.Ktau} · sustratos ${d.sustratos} · funciones ${d.funciones} · <span class="tag">${d.version}</span>`;
  } catch (e) {
    el.innerHTML = 'oracle no responde: ' + e.message;
  }
}
document.addEventListener('DOMContentLoaded', cargarOracle);
