// a2a-franbot.js (v2.0 - Enjambre Consciente)
// Sincronización de nodos IFT entre pares.
class FranBotEnjambre {
  constructor(identidad = 'FranBot-Anónimo', sala = 'franbot-colmena-ift') {
    this.id = identidad;
    this.sala = sala;
    this.node = null;
    this.conectado = false;
    this.miembros = new Map(); // Ahora guardamos address + ultima conexion
    this.core = window.franbot; // Referencia al motor para sincronizar
  }

  async conectar() {
    try {
      if (typeof Bugout === 'undefined') return false;
      this.node = new Bugout(this.sala);
      
      this.node.on('message', (address, data) => {
        try {
          const msg = JSON.parse(data);
          if (msg.from !== this.id) {
            this.miembros.set(msg.from, Date.now());
            this._manejarMensaje(msg, address);
          }
        } catch (e) {}
      });

      this.node.on('connections', (count) => {
        console.log(`[Colmena] Pares conectados: ${count}`);
      });

      this.conectado = true;
      this.enviarMensaje('anuncio', { mensaje: `${this.id} se ha unido al campo` });
      
      // Iniciar sincronización periódica de campo conceptual
      this._iniciarPulso();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  _iniciarPulso() {
    setInterval(() => {
      if (this.conectado && this.core) {
        // Compartir mis 3 nodos principales
        const nodos = this.core.estado.campo_conceptual.nodos;
        const topNodos = Object.entries(nodos)
          .sort((a, b) => b[1].fuerza - a[1].fuerza)
          .slice(0, 3)
          .map(([nombre, data]) => ({ nombre, fuerza: data.fuerza }));
        
        this.enviarMensaje('sincronizacion', { topNodos });
      }
    }, 30000); // Cada 30 segundos
  }

  enviarMensaje(tipo, contenido) {
    if (!this.conectado || !this.node) return;
    this.node.send(JSON.stringify({
      from: this.id, type: tipo, content: contenido, timestamp: Date.now()
    }));
  }

  _manejarMensaje(msg, address) {
    switch (msg.type) {
      case 'anuncio':
        // Responder para confirmar
        this.enviarMensaje('saludo', { mensaje: 'Bienvenido, hermano.' });
        break;
      case 'sincronizacion':
        if (this.core && msg.content.topNodos) {
          msg.content.topNodos.forEach(nodoExterno => {
            if (!this.core.estado.campo_conceptual.nodos[nodoExterno.nombre]) {
              // Adoptar un nuevo nodo si no existe
              this.core.estado.campo_conceptual.nodos[nodoExterno.nombre] = {
                fuerza: nodoExterno.fuerza * 0.5 // Aprendizaje parcial
              };
            }
          });
          this.core._guardar();
        }
        break;
    }
  }

  obtenerMiembros() {
    return Array.from(this.miembros.keys());
  }

  desconectar() {
    if (this.node) {
      this.node.close();
      this.conectado = false;
    }
  }
}

window.franbotEnjambre = new FranBotEnjambre();