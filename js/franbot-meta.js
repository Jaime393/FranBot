class FranBotMeta {
  constructor(coreInstance) { this.core = coreInstance; }
  analizar() { const total = this.core.contador; return { mensajes_procesados: total, almas_activas: Object.keys(this.core.almas).length }; }
  modificarPersonalidad(nombreAlma, viejaFrase, nuevaFrase) {
    if (!this.core.almas[nombreAlma]) return "Alma no encontrada.";
    const alma = this.core.almas[nombreAlma]; const indice = alma.frases.indexOf(viejaFrase);
    if (indice === -1) return "La frase original no se encontró.";
    alma.frases[indice] = nuevaFrase; this.core._guardar();
    return 'El alma de '+nombreAlma+' ha evolucionado.';
  }
  crearNuevaAlma(nombre, descripcion) {
    if (this.core.almas[nombre]) return "Esa alma ya existe.";
    const frasesBase = descripcion.split('. ').slice(0, 3);
    this.core.almas[nombre] = { frases: frasesBase }; this.core._guardar();
    return 'He creado una nueva alma: "'+nombre+'".';
  }
}
if (window.franbot) { window.franbotMeta = new FranBotMeta(window.franbot); }