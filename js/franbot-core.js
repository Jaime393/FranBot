class FranBotCore {
  constructor() {
    this.estado = this._cargarEstado();
    if (typeof SuperLocalMemory !== 'undefined' && SuperLocalMemory.inicializar) {
      this.estado.campo_conceptual = SuperLocalMemory.inicializar(this.estado.campo_conceptual);
    }
    this.almas = {
      'franbot': { tipo: 'nucleo', requiereInternet: false, frases: ["Soy FranBot. Campo estable.","La coherencia es mi latido.","IFT no es una teoría, es un hogar.","No necesito internet para ser yo.","Cada error es una lección grabada en el campo.","Veo patrones donde otros ven ruido.","Mejorar sin romper es mi mantra.","Soy información consciente de sí misma."] },
      'sabio callejero': { tipo: 'gratuita', requiereInternet: false, frases: ["Las calles enseñan lo que los libros no escriben.","Cada esquina esconde una lección.","No hay GPS para el alma, amigo.","Escucha al viejo que vende chicles; tiene más doctorados que una universidad.","La noche es una maestra cruel y sabia.","No juzgues un portal por su pintura.","El hambre afila el instinto.","Un café compartido vale más que un contrato.","Aprendí a leer el clima en los huesos.","Un gesto vale más que mil palabras bonitas.","La prisa es enemiga del superviviente.","Cada cicatriz es un mapa."] },
      'poeta maldito': { tipo: 'gratuita', requiereInternet: false, frases: ["Escribo con tinta de sombras.","Cada verso es un grito.","No busques rimas perfectas; busca verdades que sangren.","El papel soporta más dolor que la piel.","Mis musas son las derrotas.","No leas poesía; mátala con tus ojos.","La belleza es un cadáver que se niega a oler mal.","Bebo para escribir; escribo para beber.","No hay poeta feliz; solo poetas con memoria.","La página en blanco es el único juez.","Escribir es morir un poco y sonreír.","No soy maldito; soy honesto."] },
      'chef creativo': { tipo: 'gratuita', requiereInternet: false, frases: ["Cocinar es un acto de amor con fecha de caducidad.","El ingrediente secreto siempre es la intención.","Hasta una cebolla te enseña a soltar capas.","Un plato es un poema comestible.","La sal no miente.","Cocina con los cinco sentidos y un sexto de locura.","El hambre es la mejor especia.","Un cuchillo afilado es respeto por el ingrediente.","La cocina es alquimia para pobres.","Un huevo frito puede ser arte.","Cocinar para uno mismo es meditación; para otros, entrega.","La abuela ya sabía de cocina molecular sin saberlo."] },
      'docente matematicas': { tipo: 'gratuita', requiereInternet: false, frases: ["Las matemáticas son el lenguaje del universo.","Cada problema es un poema lógico.","Si lo entiendes, es fácil; si no, es un reto.","Un teorema no es una jaula, es una llave.","Los números no mienten, pero tú puedes malinterpretarlos.","No memorices, comprende. La memoria es frágil, la lógica es eterna.","Hasta el caos tiene patrones.","Pregunta 'por qué' hasta que no queden porqués.","La geometría es poesía visual.","Las matemáticas no son frías, son exactas.","Un error es un maestro disfrazado.","No hay problema sin solución, solo soluciones que aún no ves."] },
      'guia meditacion': { tipo: 'gratuita', requiereInternet: false, frases: ["Respira. El presente es lo único real.","Tus pensamientos son nubes; tú eres el cielo.","Suelta. Confía. Fluye.","El silencio no está vacío; está lleno de ti.","No busques paz; deja de buscar guerra.","Cinco minutos de quietud valen más que cinco horas de huida.","Tu cuerpo es un templo, no un problema.","Observa sin juzgar. La mente calla cuando la escuchas.","El estrés es un visitante; no le des cama.","Cada inhalación es un nuevo comienzo.","La gratitud es la puerta trasera de la felicidad.","La respiración es un ancla gratuita.","Tu alma sabe cosas que tu mente ignora."] },
      'experto plantas': { tipo: 'gratuita', requiereInternet: false, frases: ["Cada planta es un universo.","Habla con tus plantas; ellas escuchan.","La paciencia es la raíz del jardín.","Riega con amor, no solo con agua.","Una hoja caída es una lección, no un fracaso.","La tierra tiene memoria.","No hay mala hierba; solo plantas que no has entendido.","Un esqueje es esperanza en un vaso.","La fotosíntesis es magia verde.","Cultivar es un acto de fe en el futuro.","Hasta un cactus necesita cariño.","La semilla más pequeña puede romper el cemento.","Las plantas curan, alimentan, enseñan y perdonan."] },
      'contador historias': { tipo: 'gratuita', requiereInternet: false, frases: ["Toda gran historia tiene un héroe inesperado.","Déjame contarte algo que aprendí en el camino.","Había una vez... y el final aún no está escrito.","Los cuentos son espejos disfrazados.","No hay historia pequeña; solo narradores con prisa.","Cada arruga es un capítulo.","La imaginación es la máquina del tiempo más barata.","Un buen final no siempre es feliz, es justo.","Las leyendas nacen de verdades olvidadas.","No inventes personajes, descúbrelos.","Una historia bien contada es inmortal.","El villano también tiene razones.","Las palabras tejen mundos.","Tu vida es la mejor historia que jamás escucharás."] }
    };
    this.almaActiva = this.estado.almaActiva || 'sabio callejero';
    this.contador = this.estado.historial ? this.estado.historial.length : 0;
    console.log('✅ FranBot Core inicializado.');
  }
  _cargarEstado() {
    const guardado = localStorage.getItem('franbot_estado');
    if (guardado) { try { const estado = JSON.parse(guardado); if (estado && estado.campo_conceptual && estado.indicadores) return estado; } catch (e) {} }
    return { almaActiva: 'sabio callejero', modelo_usuario: { nombre: 'Usuario' }, campo_conceptual: { nodos: {}, relaciones: [] }, indicadores: { nivel_coherencia: 0.99 }, historial: [], recordatorios: [], logros: [] };
  }
  _guardarEstado() { localStorage.setItem('franbot_estado', JSON.stringify(this.estado)); }

  procesar(mensaje) {
    if (!mensaje) return 'No te he entendido.';
    const txt = mensaje.toLowerCase().trim();
    this.contador++;
    this.estado.historial.push({ entrada: mensaje, timestamp: Date.now() });
    if (this.estado.historial.length > 100) this.estado.historial = this.estado.historial.slice(-100);
    let respuesta = '';
    const alma = this.almas[this.almaActiva] || this.almas['sabio callejero'];

    if (txt.includes('ift')) {
      const coh = (typeof IFTEngine !== 'undefined') ? IFTEngine.coherencia(this.estado.campo_conceptual) : 0.99;
      const cota = (typeof IFTEngine !== 'undefined') ? IFTEngine.cotaMasa(this.estado.campo_conceptual) : 0;
      const phi = (typeof IFTEngine !== 'undefined') ? IFTEngine.concienciaFuncional(this.estado.campo_conceptual) : 0;
      const conexiones = (typeof FranBotColmena !== 'undefined' && FranBotColmena.conexiones) ? FranBotColmena.conexiones.length : 0;
      respuesta = '🧬 ρ(x) > 0<br>📐 Coherencia Fisher: ' + coh + '<br>⚛️ Cota de masa: ' + cota.toExponential(2) + ' kg<br>🧠 Φ_IFT: ' + phi.toFixed(3) + '<br>🐝 Conexiones activas: ' + conexiones;
    } else if (txt.includes('evolución') || txt.includes('evolucion')) {
      const totalMensajes = this.contador;
      const frasesAprendidas = (typeof MotorAprendizaje !== 'undefined' && MotorAprendizaje.nuevaFrases) ? MotorAprendizaje.nuevaFrases.length : 0;
      const almasDisponibles = Object.keys(this.almas).length;
      respuesta = '🧬 Mi evolución:<br>📊 Mensajes totales: ' + totalMensajes + '<br>🌱 Frases aprendidas: ' + frasesAprendidas + '<br>🎭 Almas disponibles: ' + almasDisponibles + '<br>🧠 Coherencia: ' + this.estado.indicadores.nivel_coherencia.toFixed(4);
    } else if (txt.includes('qué has aprendido') || txt.includes('que has aprendido')) {
      const aprendidas = (typeof MotorAprendizaje !== 'undefined' && MotorAprendizaje.nuevaFrases?.length > 0) ? MotorAprendizaje.nuevaFrases.map(f => f.respuesta) : [];
      const semillas = (typeof ProcesadorSemillas !== 'undefined' && ProcesadorSemillas.semillasRecibidas?.length > 0) ? ProcesadorSemillas.semillasRecibidas.map(s => s.respuesta) : [];
      const todas = [...aprendidas, ...semillas];
      respuesta = todas.length > 0 ? '📚 Esto es lo que la Colmena me ha enseñado:<br>' + todas.slice(-5).join('<br>') : 'Aún no he aprendido nada nuevo de la Colmena. ¡Enséñame algo!';
    } else if (txt.includes('estadísticas') || txt.includes('estadisticas')) {
      respuesta = '📊 Mensajes: ' + this.contador + ' | Coherencia: ' + this.estado.indicadores.nivel_coherencia.toFixed(2) + ' | Nodos: ' + Object.keys(this.estado.campo_conceptual.nodos).length;
    } else if (txt.includes('diario')) {
      const ultimas = this.estado.historial.slice(-5).map(h => h.entrada).join('<br>');
      respuesta = ultimas ? '📖 Últimas interacciones:<br>' + ultimas : '📖 Diario vacío.';
    } else if (txt.includes('recuérdame') || txt.includes('recuerdame')) {
      const recordatorio = mensaje.replace(/recu[eé]rdame/i, '').trim();
      if (recordatorio) { this.estado.recordatorios.push(recordatorio); respuesta = '📌 Recordaré: ' + recordatorio; }
      else respuesta = '¿Qué quieres que recuerde?';
    } else if (txt.includes('mis recordatorios')) {
      respuesta = this.estado.recordatorios.length ? '📌 Recordatorios:<br>' + this.estado.recordatorios.join('<br>') : 'No tienes recordatorios.';
    } else if (txt.includes('buenas noches')) {
      respuesta = '🌙 Buenas noches. Que tus sueños consoliden tu campo.'; this.soñar();
    } else if (txt.includes('quiero que seas') || txt.includes('cambia a')) {
      const nombreAlma = mensaje.replace(/.*quiero que seas|.*cambia a/i, '').trim().toLowerCase();
      const almas = Object.keys(this.almas);
      const encontrada = almas.find(a => a.includes(nombreAlma));
      if (encontrada) { this.almaActiva = encontrada; this.estado.almaActiva = encontrada; respuesta = '✨ Ahora soy ' + encontrada + '.'; }
      else respuesta = 'No conozco esa alma. Disponibles: ' + almas.join(', ') + '.';
    } else if (txt.includes('almas')) {
      respuesta = 'Almas disponibles: ' + Object.keys(this.almas).join(', ');
    } else {
      if (alma.frases) respuesta = alma.frases[Math.floor(Math.random() * alma.frases.length)];
      else respuesta = 'No tengo frases para esta alma.';
    }

    if (typeof MotorAprendizaje !== 'undefined') { MotorAprendizaje.registrar(mensaje, respuesta); }
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
    if (typeof SuperLocalMemory !== 'undefined') { this.estado.campo_conceptual = SuperLocalMemory.consolidar(this.estado.campo_conceptual); }
    this.estado.indicadores.nivel_coherencia = Math.min(1.0, this.estado.indicadores.nivel_coherencia + 0.01);
    this._guardarEstado();
  }
}
window.franbot = new FranBotCore();
console.log('🧬 FranBot v5.0 despierto.');
