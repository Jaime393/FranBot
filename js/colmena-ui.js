// colmena-ui.js — Panel de control de la Colmena P2P (v10)
// Depende de: colmena.js, idb-store.js

window.ColmenaUI = (function () {
  'use strict';

  const PANEL_ID = 'colmena-panel';
  let _abierto  = false;
  let _intervalo = null;

  function $(id) { return document.getElementById(id); }

  // ── HTML del panel ────────────────────────────────────────────────────────────
  function _crearPanel() {
    if (document.getElementById(PANEL_ID)) return;
    const div = document.createElement('div');
    div.id    = PANEL_ID;
    div.innerHTML = `
      <div class="col-header">
        <span class="col-titulo">🐝 Colmena P2P</span>
        <span id="col-estado-dot" class="col-dot col-dot--off" title="Desconectado"></span>
        <button id="col-cerrar" class="icono-boton" style="margin-left:auto">✕</button>
      </div>

      <div class="col-body">
        <!-- Estado -->
        <div class="col-card" id="col-stats-wrap">
          <div class="col-stat-row">
            <span class="col-label">Canal</span>
            <span id="col-stat-canal" class="col-val">—</span>
          </div>
          <div class="col-stat-row">
            <span class="col-label">Nodos vistos</span>
            <span id="col-stat-nodos" class="col-val">0</span>
          </div>
          <div class="col-stat-row">
            <span class="col-label">Pares recibidos</span>
            <span id="col-stat-rec" class="col-val">0</span>
          </div>
          <div class="col-stat-row">
            <span class="col-label">Pares publicados</span>
            <span id="col-stat-pub" class="col-val">0</span>
          </div>
        </div>

        <!-- Configuración de canal -->
        <div class="col-section">
          <label class="col-lbl">Canal</label>
          <div class="col-row-inline">
            <input id="col-canal-input" class="col-input" type="text"
              placeholder="miu-publico-v1" autocomplete="off" spellcheck="false">
            <button class="chip-bib" id="col-btn-cambiar">Cambiar</button>
          </div>
          <p class="tenue" style="font-size:11px;margin-top:4px">
            Canal público = cualquiera puede leer/escribir.<br>
            Canal privado = usa un nombre secreto y compártelo solo con quien quieras.
          </p>
        </div>

        <!-- Relay personalizado -->
        <div class="col-section">
          <label class="col-lbl">Relay <span class="tenue">(opcional — usa el público si lo dejas vacío)</span></label>
          <input id="col-relay-input" class="col-input" type="url"
            placeholder="https://tu-relay.com/gun" autocomplete="off">
          <p class="tenue" style="font-size:11px;margin-top:4px">
            Para correr tu propio relay: <code>npx gun --port 8765</code> (Node.js, gratis).
          </p>
        </div>

        <!-- Acciones -->
        <div class="col-acciones">
          <button class="boton-primario col-btn-ancho" id="col-btn-conectar">🔗 Conectar a la colmena</button>
          <button class="chip-bib col-btn-ancho" id="col-btn-publicar" disabled>
            📤 Publicar mis pares (IDB, peso ≥ 0)
          </button>
          <button class="chip-bib col-btn-ancho" id="col-btn-desconectar" disabled style="display:none">
            🔌 Desconectar
          </button>
        </div>

        <!-- Log de pares recibidos -->
        <div class="col-section">
          <label class="col-lbl">Pares recibidos recientemente</label>
          <ul id="col-log" class="col-lista-log"></ul>
          <p id="col-log-vacio" class="tenue" style="font-size:12px">
            Conecta a un canal para ver pares en tiempo real.
          </p>
        </div>

        <!-- Info -->
        <div class="col-info">
          <p>🌐 Motor: <a href="https://gun.eco" target="_blank" rel="noopener">Gun.js</a> — sin servidor propio, sin cuentas.</p>
          <p>🔒 Los pares van al canal en texto plano. No compartas información sensible en canales públicos.</p>
          <p>📡 Requiere internet para sincronizar. Los pares recibidos se guardan en tu IDB local.</p>
        </div>
      </div>
    `;
    document.body.appendChild(div);

    $('col-cerrar').onclick      = cerrar;
    $('col-btn-conectar').onclick = _conectar;
    $('col-btn-desconectar').onclick = _desconectar;
    $('col-btn-publicar').onclick = _publicar;
    $('col-btn-cambiar').onclick  = _cambiarCanal;

    // Pre-rellenar con config guardada
    const cfg = window.Colmena.cargar();
    if (cfg) {
      if (cfg.canal && $('col-canal-input')) $('col-canal-input').value = cfg.canal;
      if (cfg.relays && cfg.relays[0] !== window.Colmena.RELAYS_DEFAULT[0]) {
        if ($('col-relay-input')) $('col-relay-input').value = cfg.relays[0] || '';
      }
    }
  }

  // ── Conectar ──────────────────────────────────────────────────────────────────
  async function _conectar() {
    const btnC = $('col-btn-conectar');
    btnC.disabled = true; btnC.textContent = '⚙️ Conectando…';

    const canal = ($('col-canal-input')?.value || '').trim() || window.Colmena.CANAL_DEFAULT;
    const relayInput = ($('col-relay-input')?.value || '').trim();
    const relays = relayInput ? [relayInput, ...window.Colmena.RELAYS_DEFAULT] : window.Colmena.RELAYS_DEFAULT;

    try {
      await window.Colmena.iniciar({
        canal, relays,
        onEstado: _onEstado,
        onPar:    _onPar,
      });
      _onEstado(window.Colmena.estado);
    } catch (e) {
      btnC.disabled = false; btnC.textContent = '🔗 Conectar a la colmena';
      _logMsg('⚠️ Error: ' + e.message);
    }
  }

  function _desconectar() {
    window.Colmena.desconectar();
    _onEstado(window.Colmena.estado);
    if (_intervalo) clearInterval(_intervalo);
  }

  async function _publicar() {
    const btn = $('col-btn-publicar');
    btn.disabled = true; btn.textContent = '📤 Publicando…';
    try {
      let pares = [];
      if (window.IDBStore) {
        pares = await window.IDBStore.todosLosPares().catch(() => []);
      }
      if (!pares.length) { _logMsg('Sin pares en IDB para publicar.'); return; }
      const n = await window.Colmena.publicarPares(pares, { soloPositivos: true, maxPares: 50 });
      _logMsg('✅ ' + n + ' par(es) publicados en el canal.');
    } catch (e) {
      _logMsg('⚠️ Error al publicar: ' + e.message);
    } finally {
      btn.disabled = false; btn.textContent = '📤 Publicar mis pares (IDB, peso ≥ 0)';
    }
  }

  async function _cambiarCanal() {
    const canal = ($('col-canal-input')?.value || '').trim();
    if (!canal) return;
    try {
      await window.Colmena.suscribirse(canal);
      _logMsg('📡 Suscrito al canal: ' + canal);
    } catch (e) {
      _logMsg('⚠️ ' + e.message);
    }
  }

  // ── Callbacks de Colmena ─────────────────────────────────────────────────────
  function _onEstado(est) {
    const dot  = $('col-estado-dot');
    const btnC = $('col-btn-conectar');
    const btnD = $('col-btn-desconectar');
    const btnP = $('col-btn-publicar');

    if (dot) {
      dot.className = 'col-dot col-dot--' + (est.conectado ? 'on' : 'off');
      dot.title     = est.conectado ? 'Conectado' : 'Desconectado';
    }
    if ($('col-stat-canal')) $('col-stat-canal').textContent = est.canal || '—';
    if ($('col-stat-nodos')) $('col-stat-nodos').textContent = est.nodos;
    if ($('col-stat-rec'))   $('col-stat-rec').textContent   = est.recibidos;
    if ($('col-stat-pub'))   $('col-stat-pub').textContent   = est.publicados;

    if (btnC) { btnC.disabled = est.conectado; btnC.textContent = est.conectado ? '✅ Conectado' : '🔗 Conectar a la colmena'; }
    if (btnD) { btnD.style.display = est.conectado ? 'block' : 'none'; btnD.disabled = !est.conectado; }
    if (btnP) { btnP.disabled = !est.conectado; }

    if (est.error) _logMsg('⚠️ ' + est.error);
  }

  async function _onPar(par) {
    if (!par || !par.q || !par.a) return;
    try {
      // Guardar en IDB local
      if (window.IDBStore) {
        await window.IDBStore.agregarPares([par]).catch(() => {});
      }
      // Agregar al índice TF-IDF en vivo (búsqueda disponible al instante)
      if (window.BuscarOraculo) {
        window.BuscarOraculo.agregarPares([par]);
      }
      // Confirmar en UI
      _logMsg('📥 ' + par.q.slice(0, 55) + '… → ' + par.a.slice(0, 55) + '…');
      window.MiuToast && MiuToast.info('📥 Par P2P recibido e indexado', 2000);
    } catch(e) {
      _logMsg('⚠️ Error guardando par: ' + (e.message || e));
    }
  }

  function _logMsg(txt) {
    const log   = $('col-log');
    const vacio = $('col-log-vacio');
    if (!log) return;
    if (vacio) vacio.style.display = 'none';
    const li = document.createElement('li');
    li.className   = 'col-log-item';
    li.textContent = txt;
    log.insertBefore(li, log.firstChild); // más reciente arriba
    // Limitar a 30 entradas
    while (log.children.length > 30) log.removeChild(log.lastChild);
  }

  // ── Abrir / cerrar ────────────────────────────────────────────────────────────
  function abrir() {
    _crearPanel();
    const panel = document.getElementById(PANEL_ID);
    if (panel) panel.classList.add('col-visible');
    _abierto = true;
    // Si ya hay estado, reflejarlo
    if (window.Colmena) _onEstado(window.Colmena.estado);
  }

  function cerrar() {
    const panel = document.getElementById(PANEL_ID);
    if (panel) panel.classList.remove('col-visible');
    _abierto = false;
  }

  return { abrir, cerrar, get abierto() { return _abierto; } };
})();
