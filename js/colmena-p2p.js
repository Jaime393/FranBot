// Colmena P2P con Siembra Colectiva integrada
const FranBotColmena = {
  peer: null,
  conexiones: [],
  salaID: 'franbot-' + Math.random().toString(36).substr(2, 9),

  inicializar() {
    if (!window.peerjs) {
      console.warn('⚠️ PeerJS no disponible.');
      return;
    }
    this.peer = new Peer(this.salaID, {
      host: '0.peerjs.com',
      port: 443,
      secure: true
    });
    this.peer.on('open', id => {
      this.mostrarEstado('Esperando peers... Comparte este ID: ' + id);
      this.conectarASala();
    });
    this.peer.on('connection', conn => {
      this.configurarConexion(conn);
      this.mostrarEstado('Nuevo compañero: ' + conn.peer);
    if (typeof RegistroColmena !== "undefined") RegistroColmena.registrar("conexion", "entrante", conn.peer, {});
    });
    this.peer.on('error', err => {
      this.mostrarEstado('Error de conexión');
      console.error(err);
    });
  },

  conectarASala() {
    // La conexión se realiza manualmente desde el panel
  },

  configurarConexion(conn) {
    conn.on('data', data => this.recibirFragmento(data));
    conn.on('close', () => this.eliminarConexion(conn));
    this.conexiones.push(conn);
  },

  eliminarConexion(conn) {
    this.conexiones = this.conexiones.filter(c => c !== conn);
    this.mostrarEstado('Un compañero se ha ido');
  },

  enviarFragmento() {
    if (!this.peer || this.conexiones.length === 0) {
      alert('No hay compañeros en la colmena. Comparte tu ID para que otros se unan.');
      return;
    }
    const campo = window.franbot?.estado?.campo_conceptual?.nodos;
    if (!campo) {
      alert('No hay campo conceptual activo.');
      return;
    }
    const fragmento = Object.entries(campo)
      .sort((a, b) => b[1].fuerza - a[1].fuerza)
      .slice(0, 5)
      .map(([nombre, datos]) => ({ nombre, fuerza: datos.fuerza }));

    const mensaje = {
      tipo: 'fragmento',
      origen: this.peer.id,
      datos: fragmento
    };
    this.conexiones.forEach(conn => conn.send(mensaje));
    this.mostrarEstado('Fragmento enviado a ' + this.conexiones.length + ' compañero(s)');
    if (typeof RegistroColmena !== "undefined") RegistroColmena.registrar("fragmento", this.peer.id, "todos", { cantidad: this.conexiones.length });

    // Integración de Siembra Colectiva
    if (typeof SiembraColectiva !== 'undefined' && SiembraColectiva.semillasPendientes.length > 0) {
      this.conexiones.forEach(conn => SiembraColectiva.compartirSemillas(conn));
    }
  },

  recibirFragmento(data) {
    if (data.tipo === 'fragmento' && window.franbot) {
      const core = window.franbot;
      const campo = core.estado.campo_conceptual;
      data.datos.forEach(nodo => {
        if (!campo.nodos[nodo.nombre]) {
          campo.nodos[nodo.nombre] = { fuerza: nodo.fuerza };
        } else {
          campo.nodos[nodo.nombre].fuerza = (campo.nodos[nodo.nombre].fuerza + nodo.fuerza) / 2;
        }
      });
      core._guardarEstado();
      this.mostrarEstado('Recibido conocimiento de ' + data.origen);
    if (typeof RegistroColmena !== "undefined") RegistroColmena.registrar("semilla", data.origen, "local", { nodos: data.datos ? data.datos.length : 0 });
    }
    // Recepción de semillas de Siembra Colectiva
    if (data.tipo === 'semillas' && typeof SiembraColectiva !== 'undefined') {
      SiembraColectiva.recibirSemillas(data);
    if (typeof ProcesadorSemillas !== "undefined" && data.tipo === "semillas") {
      data.datos.forEach(semilla => ProcesadorSemillas.agregar(semilla));
    }
    }
  },

  mostrarEstado(mensaje) {
    const panel = document.getElementById('colmena-status');
    if (panel) {
      panel.textContent = mensaje;
      panel.style.opacity = 1;
      setTimeout(() => panel.style.opacity = 0.5, 3000);
    }
  },

  conectarAPeer(idDestino) {
    if (!this.peer) return;
    const conn = this.peer.connect(idDestino, { reliable: true });
    conn.on('open', () => {
      this.configurarConexion(conn);
      this.mostrarEstado('Conectado a ' + idDestino);
    });
    conn.on('error', (err) => {
      this.mostrarEstado('Error al conectar: ' + err.message);
    });
  }
};

// Compartir nuevas frases aprendidas a través de la Colmena
FranBotColmena.compartirAprendizaje = function() {
  if (typeof MotorAprendizaje === 'undefined' || !MotorAprendizaje.nuevaFrases || MotorAprendizaje.nuevaFrases.length === 0) return;
  const semillas = MotorAprendizaje.nuevaFrases.map(item => ({
    tipo: 'semilla_aprendizaje',
    entrada: item.entrada,
    respuesta: item.respuesta,
    timestamp: item.timestamp
  }));
  this.conexiones.forEach(conn => conn.send({ tipo: 'aprendizaje', datos: semillas }));
  MotorAprendizaje.nuevaFrases = []; // Limpiar después de compartir
};

// Añadir el envío de aprendizaje al botón "Enviar conocimiento"
FranBotColmena._enviarFragmentoOriginal = FranBotColmena.enviarFragmento;
FranBotColmena.enviarFragmento = function() {
  this._enviarFragmentoOriginal();
  this.compartirAprendizaje();
};
