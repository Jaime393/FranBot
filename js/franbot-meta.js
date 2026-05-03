// franbot-meta.js (v1.0 - Basado en el concepto HyperAgents de Meta)
// Permite a FranBot analizar y modificar su propio motor en caliente.

class FranBotMeta {
  constructor(coreInstance) {
    this.core = coreInstance;
  }

  // Analiza el rendimiento del motor y reporta las almas más usadas.
  analizar() {
    const totalMensajes = this.core.contador;
    const almasUsadas = this.core.logros.filter(l => l.includes('alma')).length;
    
    return {
      mensajes_procesados: totalMensajes,
      almas_activas: Object.keys(this.core.almas).length,
      eficiencia: (totalMensajes > 0) ? (almasUsadas / totalMensajes * 100).toFixed(1) + "%" : "0%"
    };
  }

  // Modifica una frase de un alma existente. (Meta-aprendizaje)
  modificarPersonalidad(nombreAlma, viejaFrase, nuevaFrase) {
    if (!this.core.almas[nombreAlma]) return "Alma no encontrada.";

    const alma = this.core.almas[nombreAlma];
    const indice = alma.frases.indexOf(viejaFrase);
    
    if (indice === -1) return "La frase original no se encontró.";

    alma.frases[indice] = nuevaFrase;
    
    // Guardar el cambio en el estado global
    this.core._guardar();
    return `El alma de ${nombreAlma} ha evolucionado. Su nueva frase es: "${nuevaFrase}"`;
  }

  // Crea una nueva personalidad desde cero, basándose en una descripción.
  crearNuevaAlma(nombre, descripcion) {
    if (this.core.almas[nombre]) return "Esa alma ya existe.";

    const frasesBase = descripcion.split('. ').slice(0, 3);
    this.core.almas[nombre] = {
      frases: frasesBase
    };

    this.core._guardar();
    return `He creado una nueva alma: "${nombre}".`;
  }
}

// Instanciar y adjuntar al objeto global
if (window.franbot) {
  window.franbotMeta = new FranBotMeta(window.franbot);
}