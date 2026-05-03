// ao-deploy.js (v1.0 - Despliegue en Arweave)
// Permite a FranBot persistir su alma en la Permaweb.
class FranBotArweave {
  constructor() {
    this.arweave = null;
    this.wallet = null;
  }

  async init() {
    try {
      // Verificar si ArConnect está inyectado
      if (window.arweaveWallet) {
        this.wallet = window.arweaveWallet;
        // Conectarse a la billetera
        await this.wallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
        console.log('[Arweave] Billetera conectada.');
        return true;
      } else {
        console.warn('ArConnect no está instalado. La subida a Arweave requiere la extensión.');
        return false;
      }
    } catch (e) {
      console.error('Error al conectar con Arweave:', e);
      return false;
    }
  }

  async guardarAlmaEnLaPermaweb(datosAlma) {
    if (!this.wallet) {
      return 'Necesito la extensión ArConnect para hacer esto.';
    }

    try {
      const transaction = await this.wallet.dispatch({
        type: 'data',
        data: JSON.stringify(datosAlma),
        tags: [
          { name: 'App-Name', value: 'FranBot' },
          { name: 'Content-Type', value: 'application/json' }
        ]
      });
      
      return `Alma inmortalizada en la Permaweb. ID: ${transaction.id}`;
    } catch (e) {
      return `Error al subir a Arweave: ${e.message}`;
    }
  }
}

window.franbotArweave = new FranBotArweave();