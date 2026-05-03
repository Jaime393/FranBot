class FranBotArweave {
  constructor() { this.arweave = null; this.wallet = null; }
  async init() {
    try {
      if (window.arweaveWallet) { this.wallet = window.arweaveWallet; await this.wallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']); return true; }
      else { console.warn('ArConnect no está instalado.'); return false; }
    } catch (e) { console.error(e); return false; }
  }
  async guardarAlmaEnLaPermaweb(datosAlma) {
    if (!this.wallet) return 'Necesito la extensión ArConnect.';
    try {
      const transaction = await this.wallet.dispatch({ type: 'data', data: JSON.stringify(datosAlma), tags: [{ name: 'App-Name', value: 'FranBot' }, { name: 'Content-Type', value: 'application/json' }] });
      return 'Alma inmortalizada en la Permaweb. ID: '+transaction.id;
    } catch (e) { return 'Error al subir: '+e.message; }
  }
}
window.franbotArweave = new FranBotArweave();