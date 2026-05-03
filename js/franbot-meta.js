class FranBotMeta {
  constructor(coreInstance) { this.core = coreInstance; }
  analizar() { return { mensajes: this.core.contador, almas: Object.keys(this.core.almas).length }; }
  modificarAlma(nombre, vieja, nueva) {
    if (!this.core.almas[nombre]) return "Alma no encontrada.";
    const i = this.core.almas[nombre].frases.indexOf(vieja);
    if (i === -1) return "Frase original no encontrada.";
    this.core.almas[nombre].frases[i] = nueva;
    this.core._guardarEstado();
    return "Alma "+nombre+" evolucionada.";
  }
  crearAlma(nombre, desc) {
    if (this.core.almas[nombre]) return "Ya existe.";
    this.core.almas[nombre] = { frases: desc.split('. ').slice(0,3) };
    this.core._guardarEstado();
    return "Alma "+nombre+" creada.";
  }
}
if (window.franbot) window.franbotMeta = new FranBotMeta(window.franbot);