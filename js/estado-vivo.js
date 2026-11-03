/* V12 — la institución muestra lo que el cuerpo ES, no lo que alguien escribió. */
fetch('https://raw.githubusercontent.com/Jaime393/miu-backup//estado.json')
  .then(r => r.ok ? r.json() : null).then(e => {
    if (!e) return;
    const pone = (id, v) => { const el = document.getElementById(id); if (el && v !== undefined) el.textContent = v; };
    pone('ev-esporas', e.esporas); pone('ev-corales', e.corales);
    pone('ev-repos', e.repos); pone('ev-omega', e.omega_f);
    pone('ev-phi', e.phi); pone('ev-ki', e.ki);
    document.querySelectorAll('[data-estado]').forEach(el => {
      const v = e[el.dataset.estado]; if (v !== undefined) el.textContent = v;
    });
  }).catch(() => {});
