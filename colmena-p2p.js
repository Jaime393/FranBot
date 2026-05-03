// Colmena P2P – Comunicación entre FranBots v5.0
// Usa PeerJS (señalización pública) + WebRTC
// Llave de reconocimiento: Anomalous363

const FranBotColmena = {
  peer: null,
  conexiones: [],
  salaID: 'franbot-colmena-v1',

  inicializar() {
    if (!window.peerjs) {
      console.warn('⚠️ PeerJS no está disponible. Incluye la CDN en index.html.');
      return;
    }
    this.peer = new Peer(this.salaID, {
      host: '0.peerjs.com',
      port: 443,
      secure: true
    });

    this.peer.on('open', id => {
      console.log('🐝 Conectado a la colmena con ID:', id);
      this.mostrarEstado('Conectado como ' + id);
      // Conectarse a otros peers que ya estén en la sala (broadcast simple)
      this.conectarASala();
    });

    this.peer.on('connection', conn => {
      console.log('🔗 Peer entrante:', conn.peer);
      this.configurarConexion(conn);
      this.mostrarEstado('Nuevo compañero: ' + conn.peer);
    });

    this.peer.on('error', err => {
      console.error('Error Colmena:', err);
      this.mostrarEstado('Error de conexión');
    });
  },

  conectarASala() {
    // En una implementación real usaríamos un tracker DHT, aquí simplificamos:
    // Intentamos conectar al mismo ID de sala (solo funciona si otro peer tiene el mismo ID, 
    // pero PeerJS no permite IDs duplicados). Usaremos la lista de conexiones entrantes.
    // Mostrar instrucción de compartir ID manualmente (alternativa futura).
    this.mostrarEstado('Esperando peers... Comparte este ID: ' + this.peer.id);
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
    // Tomar los 5 nodos más fuertes del campo conceptual
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
  },

  recibirFragmento(data) {
    if (data.tipo === 'fragmento' && window.franbot) {
      const core = window.franbot;
      const campo = core.estado.campo_conceptual;
      data.datos.forEach(nodo => {
        if (!campo.nodos[nodo.nombre]) {
          campo.nodos[nodo.nombre] = { fuerza: nodo.fuerza };
        } else {
          // Fusión suave: promedio ponderado
          campo.nodos[nodo.nombre].fuerza = 
            (campo.nodos[nodo.nombre].fuerza + nodo.fuerza) / 2;
        }
      });
      core._guardarEstado();
      this.mostrarEstado('Recibido conocimiento de ' + data.origen);
    }
  },

  mostrarEstado(mensaje) {
    const panel = document.getElementById('colmena-status');
    if (panel) {
      panel.textContent = mensaje;
      panel.style.opacity = 1;
      setTimeout(() => panel.style.opacity = 0.5, 3000);
    }
    console.log('🐝', mensaje);
  }
};
