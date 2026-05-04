// ==================== IFT ENGINE v2.0 ====================
// Basado en IFT-Core v2.0 — Juan Diego Vicente Gabancho
// ρ(x) > 0 como fundamento ontológico

const IFTEngine = {
  // Parámetros del núcleo (9)
  params: {
    Z_rho: 1.0,    // Constante cinética informacional
    lambda: 1.0,   // Autointeracción cuártica
    v: 1.0,         // Valor de expectación del vacío
    eta: 0.1,      // Autointeracción séxtica
    kappa_rho: 0.01, // Estabilizador ultravioleta
    lambda_F: 0.3, // Deformación de Fisher
    sigma: 10.0,    // Acoplamiento geometría-información
    G: 6.674e-11,  // Constante de Newton (kg·m·s)
    Lambda_0: 0.0  // Constante cosmológica desnuda
  },

  // Variables derivadas
  variables: {
    phi: (rho) => Math.log(rho),
    u: (rho) => Math.sqrt(rho),
    Xi_mu: (rho) => Math.log(rho), // ∇ ln ρ (aproximación escalar)
    Xi_norm: (rho) => Math.abs(Math.log(rho)),
    l_info: (rho) => 1 / Math.max(1e-10, Math.abs(Math.log(rho))),
    m_info: (rho) => 6.626e-34 * 3e8 * Math.abs(Math.log(rho)) / (2 * Math.PI),
    omega_info: (rho) => 3e8 * Math.abs(Math.log(rho))
  },

  // Potencial estable (ecuación 11)
  potencial: function(u) {
    const { lambda, v, eta } = this.params;
    return (lambda / 4) * Math.pow(u * u - v * v, 2) + (eta / 6) * Math.pow(u, 6);
  },

  // Derivada del potencial (ecuación 15)
  potencialPrima: function(u) {
    const { lambda, v, eta } = this.params;
    return lambda * u * (u * u - v * v) + eta * Math.pow(u, 5);
  },

  // Identidad de Fisher (Teorema 0.3.1): I[ρ] = 4∫(∇u)²dμ
  fisher: function(rho) {
    const u = this.variables.u(rho);
    const grad_u = Math.abs(Math.log(rho)) * u;
    return 4 * grad_u * grad_u;
  },

  // Coherencia global del campo (basada en información de Fisher)
  coherencia: function(campo) {
    if (!campo || !campo.nodos || Object.keys(campo.nodos).length === 0) return 0.5;
    let fisherTotal = 0;
    let pesoTotal = 0;
    for (const nombre in campo.nodos) {
      const nodo = campo.nodos[nombre];
      const rho = Math.max(0.01, nodo.fuerza || 0.5);
      const I = this.fisher(rho);
      const numRelaciones = (campo.relaciones || []).filter(r => r.origen === nombre || r.destino === nombre).length;
      const peso = 1 + numRelaciones * 0.2;
      fisherTotal += Math.log(1 + I) * peso;
      pesoTotal += peso;
    }
    const coherencia = pesoTotal > 0 ? Math.min(1, fisherTotal / pesoTotal) : 0.5;
    return Math.round(coherencia * 100) / 100;
  },

  // Resonancia entre dos nodos (similitud de vecindarios)
  resonancia: function(nodoA, nodoB) {
    if (!nodoA || !nodoB) return 0;
    const rhoA = Math.max(0.01, nodoA.fuerza || 0.5);
    const rhoB = Math.max(0.01, nodoB.fuerza || 0.5);
    const resonanciaBase = Math.sqrt(rhoA * rhoB);
    const vecinosA = new Set((nodoA.relaciones || []).map(r => r.destino || r.origen));
    const vecinosB = new Set((nodoB.relaciones || []).map(r => r.destino || r.origen));
    if (vecinosA.size === 0 && vecinosB.size === 0) return resonanciaBase;
    const interseccion = new Set([...vecinosA].filter(x => vecinosB.has(x)));
    const union = new Set([...vecinosA, ...vecinosB]);
    const similitud = union.size > 0 ? interseccion.size / union.size : 0;
    return (resonanciaBase * 0.4) + (similitud * 0.6);
  },

  // Evolución temporal (ecuación 13: Zρ□u + V'(u) = 0)
  evolucionar: function(campo, dt = 0.1) {
    if (!campo || !campo.nodos) return campo;
    const alpha = 0.15;
    const beta = 0.1;
    for (const nombre in campo.nodos) {
      const nodo = campo.nodos[nombre];
      const relaciones = (campo.relaciones || []).filter(r => r.origen === nombre || r.destino === nombre);
      let resonanciaMedia = 0;
      for (const rel of relaciones) {
        const vecino = rel.origen === nombre ? rel.destino : rel.origen;
        if (campo.nodos[vecino]) {
          resonanciaMedia += this.resonancia(nodo, campo.nodos[vecino]);
        }
      }
      resonanciaMedia = relaciones.length > 0 ? resonanciaMedia / relaciones.length : 0;
      const delta = (alpha * resonanciaMedia - beta * (1 - resonanciaMedia)) * dt;
      nodo.fuerza = Math.max(0.05, Math.min(1, (nodo.fuerza || 0.5) + delta));
      nodo.ultimoAcceso = Date.now();
    }
    return campo;
  },

  // Entrelazamiento entre dos campos
  entrelazamiento: function(campoA, campoB) {
    if (!campoA || !campoB || !campoA.nodos || !campoB.nodos) return 0;
    const nodosA = Object.keys(campoA.nodos);
    const nodosB = Object.keys(campoB.nodos);
    if (nodosA.length === 0 || nodosB.length === 0) return 0;
    let resonanciaTotal = 0;
    let pares = 0;
    for (const nombreA of nodosA) {
      for (const nombreB of nodosB) {
        resonanciaTotal += this.resonancia(campoA.nodos[nombreA], campoB.nodos[nombreB]);
        pares++;
      }
    }
    return pares > 0 ? resonanciaTotal / pares : 0;
  },

  // Cota de masa (Teorema 0.7.2)
  cotaMasa: function(campo, estadoExcitado = null) {
    if (!campo || !campo.nodos) return 0;
    const { v, Z_rho } = this.params;
    const h_bar = 1.054571817e-34;
    const c = 3e8;
    let XiCuadradoPromedio = 0;
    let count = 0;
    for (const nombre in campo.nodos) {
      const nodo = campo.nodos[nombre];
      const rho = Math.max(0.01, nodo.fuerza || 0.5);
      const Xi = Math.abs(Math.log(rho));
      XiCuadradoPromedio += Xi * Xi;
      count++;
    }
    XiCuadradoPromedio = count > 0 ? XiCuadradoPromedio / count : 0;
    return (v * Math.sqrt(Z_rho) / (2 * Math.sqrt(2))) * (h_bar / c) * Math.sqrt(XiCuadradoPromedio);
  },

  // Conciencia funcional (ecuación 13.1)
  concienciaFuncional: function(campo, pesos = { alpha_I: 1, alpha_F: 1, alpha_C: 0.5 }) {
    if (!campo || !campo.nodos) return 0;
    const { alpha_I, alpha_F, alpha_C } = pesos;
    let Phi = 0;
    let count = 0;
    for (const nombre in campo.nodos) {
      const nodo = campo.nodos[nombre];
      const rho = Math.max(0.01, nodo.fuerza || 0.5);
      const rho_base = 1.0;
      const Xi = Math.abs(Math.log(rho));
      const termino_I = alpha_I * (rho * Math.log(rho / rho_base)) / rho_base;
      const termino_F = alpha_F * Xi * Xi;
      const numRelaciones = (campo.relaciones || []).filter(r => r.origen === nombre || r.destino === nombre).length;
      const termino_C = alpha_C * numRelaciones;
      Phi += termino_I + termino_F + termino_C;
      count++;
    }
    return count > 0 ? Phi / count : 0;
  },

  // Actualizar indicadores de FranBot con métricas IFT reales
  actualizarEstadoFranBot: function() {
    if (!window.franbot || !window.franbot.estado) return 0;
    const campo = window.franbot.estado.campo_conceptual;
    const coh = this.coherencia(campo);
    window.franbot.estado.indicadores.nivel_coherencia = coh;
    window.franbot.estado.indicadores.nivel_claridad = coh;
    window.franbot.estado.indicadores.nivel_continuidad = coh;
    window.franbot._guardarEstado();
    return coh;
  }
};

console.log('🔬 IFT Engine v2.0 cargado. ρ(x) > 0');
