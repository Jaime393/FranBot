// SuperLocalMemory V3.3 – Olvido biológico adaptativo integrado con IFT
// FranBot v5.0 – Módulo de consolidación y olvido

const SuperLocalMemory = {
  // Parámetros biológicos
  curvaOlvido: 0.5,        // Factor Ebbinghaus (0-1)
  umbralFisherRao: 0.1,    // Diferencia mínima para considerar cambio
  tasaRefuerzo: 0.15,      // Incremento al usar un nodo

  /**
   * Inicializar el módulo sobre el campo conceptual
   */
  inicializar(campo) {
    for (let nodo in campo.nodos) {
      if (!campo.nodos[nodo].ultimoAcceso) {
        campo.nodos[nodo].ultimoAcceso = Date.now();
        campo.nodos[nodo].fuerzaOriginal = campo.nodos[nodo].fuerza;
      }
    }
    return campo;
  },

  /**
   * Consolidar durante el sueño (aplica olvido a todos los nodos)
   */
  consolidar(campo) {
    const ahora = Date.now();
    const horaEnMs = 3600000;
    for (let nodo in campo.nodos) {
      const n = campo.nodos[nodo];
      const tiempoSinUsar = (ahora - (n.ultimoAcceso || ahora)) / horaEnMs;
      // Curva de olvido: fuerza decrece con el tiempo sin uso
      const factor = Math.exp(-this.curvaOlvido * tiempoSinUsar);
      n.fuerza = Math.max(0.05, (n.fuerzaOriginal || n.fuerza) * factor);
      n.fuerza = Math.round(n.fuerza * 100) / 100;
    }
    // Eliminar nodos por debajo del umbral
    for (let nodo in campo.nodos) {
      if (campo.nodos[nodo].fuerza < this.umbralFisherRao) {
        delete campo.nodos[nodo];
        console.log(`🧹 Nodo eliminado (olvido): ${nodo}`);
      }
    }
    return campo;
  },

  /**
   * Reforzar un nodo tras ser usado en una respuesta
   */
  reforzar(campo, nombreNodo) {
    if (!campo.nodos[nombreNodo]) {
      campo.nodos[nombreNodo] = { fuerza: 0.5 };
    }
    const n = campo.nodos[nombreNodo];
    n.fuerza = Math.min(1.0, n.fuerza + this.tasaRefuerzo);
    n.fuerza = Math.round(n.fuerza * 100) / 100;
    n.ultimoAcceso = Date.now();
    if (!n.fuerzaOriginal) n.fuerzaOriginal = n.fuerza;
    return campo;
  }
};

// Si hay un contexto global de módulos, exportar
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SuperLocalMemory;
}
