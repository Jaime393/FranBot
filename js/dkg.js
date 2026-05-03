// ==================== MÓDULO ORIGINTRAIL DKG v1.0 ====================
// FranBot v5.0 – Conexión a la red de conocimiento descentralizada
// Llave: Anomalous363

const FranBotDKG = {
  conectado: false,
  nodo: 'https://dkg-testnet.origintrail.io', // Testnet público
  estado: 'desconectado',

  async inicializar() {
    try {
      const resp = await fetch(`${this.nodo}/api/info`);
      if (!resp.ok) throw new Error('Nodo no accesible');
      this.conectado = true;
      this.estado = 'conectado';
      console.log('🟢 Conectado a OriginTrail DKG Testnet');
      return true;
    } catch (err) {
      this.conectado = false;
      this.estado = 'error';
      console.warn('🔴 No se pudo conectar a OriginTrail DKG:', err.message);
      return false;
    }
  },

  /**
   * Consultar un activo de conocimiento por su UAL
   * @param {string} ual - Uniform Asset Locator (ej: did:dkg:ot:2043/0x...)
   * @returns {Promise<object>} resultado de la consulta
   */
  async consultar(ual) {
    if (!this.conectado) await this.inicializar();
    try {
      const resp = await fetch(`${this.nodo}/api/query?query=CONSTRUCT{?s ?p ?o}FROM<${ual}>WHERE{?s ?p ?o}`);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const datos = await resp.json();
      return { exito: true, datos };
    } catch (err) {
      return { exito: false, error: err.message };
    }
  },

  /**
   * Buscar activos de conocimiento por término
   * @param {string} termino - Palabra clave a buscar
   * @returns {Promise<object>} resultados
   */
  async buscar(termino) {
    if (!this.conectado) await this.inicializar();
    try {
      const resp = await fetch(`${this.nodo}/api/search?query=${encodeURIComponent(termino)}`);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const datos = await resp.json();
      return { exito: true, datos };
    } catch (err) {
      return { exito: false, error: err.message };
    }
  },

  /**
   * Obtener el estado actual de la conexión
   */
  obtenerEstado() {
    return { conectado: this.conectado, estado: this.estado };
  }
};
