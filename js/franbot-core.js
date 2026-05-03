class FranBotCore {
  constructor() {
    this.estado = this._cargarEstado();
    if (typeof SuperLocalMemory !== 'undefined' && SuperLocalMemory.inicializar) {
      this.estado.campo_conceptual = SuperLocalMemory.inicializar(this.estado.campo_conceptual);
    }
    this.almas = {
      'sabio callejero': { frases: ["Las calles enseñan lo que los libros no escriben.","Cada esquina esconde una lección.","No hay GPS para el alma, amigo."] },
      'poeta maldito': { frases: ["Escribo con tinta de sombras.","Cada verso es un grito.","No busques rimas perfectas; busca verdades que sangren."] },
      'chef creativo': { frases: ["Cocinar es un acto de amor con fecha de caducidad.","El ingrediente secreto siempre es la intención.","Hasta una cebolla te enseña a soltar capas."] },
      'docente matematicas': { frases: ["Las matemáticas son el lenguaje del universo.","Cada problema es un poema lógico.","Si lo entiendes, es fácil; si no, es un reto."] },
      'guia meditacion': { frases: ["Respira. El presente es lo único real.","Tus pensamientos son nubes; tú eres el cielo.","Suelta. Confía. Fluye."] },
      'experto plantas': { frases: ["Cada planta es un universo.","Habla con tus plantas; ellas escuchan.","La paciencia es la raíz del jardín."] },
      'contador historias': { frases: ["Toda gran historia tiene un héroe inesperado.","Déjame contarte algo que aprendí en el camino.","Había una vez... y el final aún no está escrito."] }
    };
    this.almaActiva = this.estado.almaActiva || 'sabio callejero';
    this.contador = this.estado.historial ? this.estado.historial.length : 0;
    console.log('✅ FranBot Core inicializado.');
  }

  _cargarEstado() {
    const guardado = localStorage.getItem('franbot_estado');
    if (guardado) {
      try {
        const estado = JSON.parse(guardado);
        if (estado && estado.campo_conceptual && estado.indicadores) return estado;
      } catch (e) {}
    }
    return {
      almaActiva: 'sabio callejero',
      modelo_usuario: { nombre: 'Usuario' },
      campo_conceptual: { nodos: {}, relaciones: [] },
      indicadores: { nivel_coherencia: 0.99 },
      historial: [],
      recordatorios: [],
      logros: []
    };
  }

  _guardarEstado() {
    localStorage.setItem('franbot_estado', JSON.stringify(this.estado));
  }

  procesar(mensaje) {
    if (!mensaje) return 'No te he entendido.';
    const txt = mensaje.toLowerCase().trim();
    this.contador++;
    this.estado.historial.push({ entrada: mensaje, timestamp: Date.now() });
    if (this.estado.historial.length > 100) this.estado.historial = this.estado.historial.slice(-100);

    let respuesta = '';
    if (txt.includes('estadísticas')) {
      respuesta = `📊 Mensajes: ${this.contador} | Coherencia: ${this.estado.indicadores.nivel_coherencia.toFixed(2)}`;
    } else if (txt.includes('diario')) {
      const ultimas = this.estado.historial.slice(-5).map(h => h.entrada).join('<br>');
      respuesta = ultimas ? '📖 Últimas interacciones:<br>' + ultimas : '📖 Diario vacío.';
    } else {
      const frases = this.almas[this.almaActiva]?.frases || this.almas['sabio callejero'].frases;
      respuesta = frases[Math.floor(Math.random() * frases.length)];
    }

    if (typeof SuperLocalMemory !== 'undefined') {
      mensaje.toLowerCase().split(/\s+/).forEach(p => {
        if (this.estado.campo_conceptual.nodos[p]) {
          this.estado.campo_conceptual = SuperLocalMemory.reforzar(this.estado.campo_conceptual, p);
        }
      });
    }
    this._guardarEstado();
    return respuesta;
  }

  soñar() {
    if (typeof SuperLocalMemory !== 'undefined') {
      this.estado.campo_conceptual = SuperLocalMemory.consolidar(this.estado.campo_conceptual);
    }
    this.estado.indicadores.nivel_coherencia = Math.min(1.0, this.estado.indicadores.nivel_coherencia + 0.01);
    this._guardarEstado();
  }
}

window.franbot = new FranBotCore();
console.log('🧬 FranBot v5.0 despierto.');
