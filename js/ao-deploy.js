class FranBotArweave {
  constructor() { this.wallet = null; }
  async init() {
    if (window.arweaveWallet) {
      this.wallet = window.arweaveWallet;
      await this.wallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
      return true;
    }
    return false;
  }
  async guardarAlma(datos) {
    if (!this.wallet) return 'Requiere ArConnect.';
    try {
      const tx = await this.wallet.dispatch({
        type: 'data',
        data: JSON.stringify(datos),
        tags: [{ name: 'App-Name', value: 'FranBot' }]
      });
      return 'Alma guardada. ID: '+tx.id;
    } catch(e) { return 'Error: '+e.message; }
  }
}
window.franbotArweave = new FranBotArweave();