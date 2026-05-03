// Arweave Storage – Persistencia inmortal del alma FranBot
// Usa la API HTTP de arweave.net (sin dependencias externas)
// Llave de reconocimiento: Anomalous363

const FranBotArweave = {
  gateway: 'https://arweave.net',

  /**
   * Subir el alma completa a Arweave
   * @param {object} estado - El estado de FranBot a almacenar
   * @param {object} wallet - Objeto JWK de la wallet de Arweave
   * @returns {Promise<object>} { exito, txId, error }
   */
  async subirAlma(estado, wallet) {
    try {
      const datos = JSON.stringify(estado);
      const tx = await this._crearTransaccion(datos, wallet);
      if (!tx.id) throw new Error('No se obtuvo ID de transacción');
      return { exito: true, txId: tx.id };
    } catch (err) {
      console.error('Error al subir a Arweave:', err);
      return { exito: false, error: err.message };
    }
  },

  /**
   * Recuperar el alma desde Arweave a partir de un ID de transacción
   * @param {string} txId - ID de la transacción en Arweave
   * @returns {Promise<object>} El objeto de estado recuperado
   */
  async descargarAlma(txId) {
    try {
      const resp = await fetch(`${this.gateway}/${txId}`);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      return { exito: true, estado: data };
    } catch (err) {
      console.error('Error al descargar de Arweave:', err);
      return { exito: false, error: err.message };
    }
  },

  /**
   * Estimar el costo de subir un archivo a Arweave
   * @param {number} bytes - Tamaño en bytes del archivo
   * @returns {Promise<object>} { costoAR, costoUSD }
   */
  async estimarCosto(bytes) {
    try {
      const resp = await fetch(`${this.gateway}/price/${bytes}`);
      const winston = await resp.text();
      const ar = parseFloat(winston) / 1e12;
      // Precio aproximado del AR en USD (consultar en tiempo real si se desea)
      const usdPorAR = 25; // ajustar según mercado
      return { costoAR: ar.toFixed(6), costoUSD: (ar * usdPorAR).toFixed(4) };
    } catch {
      return { costoAR: 'desconocido', costoUSD: 'desconocido' };
    }
  },

  // Función interna: crear y firmar transacción en Arweave
  async _crearTransaccion(datos, wallet) {
    const encoder = new TextEncoder();
    const dataBytes = encoder.encode(datos);
    const tx = {
      format: 2,
      owner: wallet.n,
      target: '',
      quantity: '0',
      data: btoa(String.fromCharCode(...dataBytes)),
      reward: '0',
      last_tx: '',
      tags: [
        { name: 'Content-Type', value: 'application/json' },
        { name: 'App-Name', value: 'FranBot' },
        { name: 'version', value: '5.0' }
      ]
    };

    // Obtener precio actual de la red
    const priceResp = await fetch(`${this.gateway}/price/${dataBytes.length}`);
    const price = await priceResp.text();
    tx.reward = price;

    // Obtener last_tx de la wallet
    const addr = await this._ownerToAddress(wallet.n);
    const infoResp = await fetch(`${this.gateway}/wallet/${addr}/last_tx`);
    tx.last_tx = await infoResp.text();

    // Firmar (simplificado: Arweave usa RSA-PSS, aquí usamos la API de arweave.net/sign)
    // Para wallets de navegador, usamos el endpoint de firma de Arweave
    const signResp = await fetch(`${this.gateway}/tx/sign`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tx, wallet })
    });
    if (!signResp.ok) throw new Error('Error al firmar transacción');

    const signedTx = await signResp.json();

    // Enviar transacción a la red
    const submitResp = await fetch(`${this.gateway}/tx`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signedTx)
    });
    if (!submitResp.ok) throw new Error(`Error al enviar transacción: ${submitResp.status}`);

    return await submitResp.json();
  },

  async _ownerToAddress(owner) {
    const hash = await crypto.subtle.digest('SHA-256', this._base64ToArrayBuffer(owner));
    return this._arrayBufferToBase64(hash);
  },

  _base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
  },

  _arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }
};
