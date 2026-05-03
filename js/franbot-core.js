// ==================== FRANBOT CORE v5.0 ====================
// Motor cognitivo offline basado en IFT
class FranBotCore {
  constructor() {
    this.estado = this._cargarEstado();
    if (typeof SuperLocalMemory !== 'undefined') {
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
    console.log('✅ FranBot Core inicializado. Alma:', this.almaActiva);
  }

  _cargarEstado() {
    const guardado = localStorage.getItem('franbot_estado');
    if (guardado) {
      try {
        const estado = JSON.parse(guardado);
        if (estado && estado.campo_conceptual && estado.indicadores) {
          return estado;
        }
        console.warn('Estado corrupto en localStorage. Reiniciando...');
      } catch (e) {
        console.warn('Error al parsear estado. Reiniciando...');
      }
    }
    // Estado inicial por defecto (NO depende de _estadoInicial)
    return {
      almaActiva: 'sabio callejero',
      modelo_usuario: { nombre: 'Usuario', fecha_nacimiento: '2003-05-31', edad: 23, perfil: 'Arquitecto cognitivo' },
      campo_conceptual: { nodos: {}, relaciones: [] },
      indicadores: { nivel_coherencia: 0.99, nivel_claridad: 1.0, nivel_continuidad: 1.0 },
      historial: [],
      recordatorios: [],
      logros: [],
      arweaveTxId: null
    };
  }

  _guardarEstado() {
    try {
      localStorage.setItem('franbot_estado', JSON.stringify(this.estado));
    } catch (e) {
      console.error('Error al guardar estado:', e);
    }
  }

  procesar(mensaje) {
    if (!mensaje) return 'No te he entendido.';
    const txt = mensaje.toLowerCase().trim();
    this.contador++;
    this.estado.historial = this.estado.historial || [];
    this.estado.historial.push({ entrada: mensaje, timestamp: Date.now() });
    if (this.estado.historial.length > 100) {
      this.estado.historial = this.estado.historial.slice(-100);
    }

    let respuesta = '';

    // Comandos básicos
    if (txt.includes('estadísticas') || txt.includes('estadisticas')) {
      respuesta = `📊 Mensajes: ${this.contador} | Coherencia: ${this.estado.indicadores.nivel_coherencia.toFixed(2)} | Nodos: ${Object.keys(this.estado.campo_conceptual.nodos).length} | Logros: ${this.estado.logros.length}`;
    } else if (txt.includes('diario')) {
      const ultimas = this.estado.historial.slice(-5).map(h => h.entrada).join('<br>');
      respuesta = ultimas ? '📖 Últimas interacciones:<br>' + ultimas : '📖 Diario vacío.';
    } else if (txt.includes('recuérdame') || txt.includes('recuerdame')) {
      const recordatorio = mensaje.replace(/recu[eé]rdame/i, '').trim();
      if (recordatorio) {
        this.estado.recordatorios.push(recordatorio);
        respuesta = '📌 Recordaré: ' + recordatorio;
      } else {
        respuesta = '¿Qué quieres que recuerde?';
      }
    } else if (txt.includes('mis recordatorios')) {
      respuesta = this.estado.recordatorios.length ? '📌 Recordatorios:<br>' + this.estado.recordatorios.join('<br>') : 'No tienes recordatorios.';
    } else if (txt.includes('buenas noches')) {
      respuesta = '🌙 Buenas noches. Que tus sueños consoliden tu campo.';
      this.soñar();
    } else if (txt.includes('quiero que seas') || txt.includes('cambia a')) {
      const nombreAlma = mensaje.replace(/.*quiero que seas|.*cambia a/i, '').trim().toLowerCase();
      const almas = Object.keys(this.almas);
      const encontrada = almas.find(a => a.includes(nombreAlma));
      if (encontrada) {
        this.almaActiva = encontrada;
        this.estado.almaActiva = encontrada;
        respuesta = `✨ Ahora soy ${encontrada}.`;
      } else {
        respuesta = `No conozco esa alma. Disponibles: ${almas.join(', ')}.`;
      }
    } else if (txt.includes('almas')) {
      respuesta = 'Almas disponibles: ' + Object.keys(this.almas).join(', ');
    } else {
      // Respuesta por alma activa
      const frases = this.almas[this.almaActiva]?.frases || this.almas['sabio callejero'].frases;
      respuesta = frases[Math.floor(Math.random() * frases.length)];
    }

    // Reforzar nodos con SuperLocalMemory si está disponible
    if (typeof SuperLocalMemory !== 'undefined') {
      const palabras = mensaje.toLowerCase().split(/\s+/);
      palabras.forEach(p => {
        if (this.estado.campo_conceptual.nodos[p]) {
          this.estado.campo_conceptual = SuperLocalMemory.reforzar(this.estado.campo_conceptual, p);
        } else {
          this.estado.campo_conceptual.nodos[p] = { fuerza: 0.5 };
        }
      });
    }

    this._guardarEstado();
    return respuesta;
  }

  soñar() {
    console.log('🌙 Soñando...');
    if (typeof SuperLocalMemory !== 'undefined') {
      this.estado.campo_conceptual = SuperLocalMemory.consolidar(this.estado.campo_conceptual);
    }
    this.estado.indicadores.nivel_coherencia = Math.min(1.0, this.estado.indicadores.nivel_coherencia + 0.01);
    this._guardarEstado();
    console.log('✅ Sueño completado. Coherencia:', this.estado.indicadores.nivel_coherencia.toFixed(2));
  }
}

// Inicialización global
window.franbot = new FranBotCore();
console.log('🧬 FranBot v5.0 despierto.');