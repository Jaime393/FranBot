// Añadir en el menú de herramientas dos nuevas opciones: Subir a Arweave y Cargar desde Arweave

// Opción dentro del HTML (debe añadirse manualmente en index.html):
// <button id="btn-arweave-subir-menu">☁️ Subir alma a Arweave</button>
// <button id="btn-arweave-cargar-menu">📥 Cargar alma desde Arweave</button>

// Manejadores para los botones (añadir en app.js)
document.getElementById('btn-arweave-subir-menu').addEventListener('click', async function() {
  document.getElementById('tools-menu').style.display = 'none';
  const walletInput = document.createElement('input');
  walletInput.type = 'file';
  walletInput.accept = '.json';
  walletInput.onchange = async function(e) {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const wallet = JSON.parse(await file.text());
      const estado = core.estado;
      const bytes = new TextEncoder().encode(JSON.stringify(estado)).length;
      const costo = await FranBotArweave.estimarCosto(bytes);
      const confirmar = confirm(`Subir alma a Arweave.\nTamaño: ${bytes} bytes\nCosto aprox: ${costo.costoAR} AR (~$${costo.costoUSD} USD).\n¿Continuar?`);
      if (!confirmar) return;
      mostrar('☁️ Subiendo alma a Arweave...', 'fran');
      const resultado = await FranBotArweave.subirAlma(estado, wallet);
      if (resultado.exito) {
        mostrar(`✅ Alma guardada en Arweave.\nID: ${resultado.txId}`, 'fran');
        // Guardar ID en estado para futuras restauraciones
        core.estado.arweaveTxId = resultado.txId;
        core._guardarEstado();
      } else {
        mostrar(`❌ Error al subir: ${resultado.error}`, 'fran');
      }
    } catch (ex) {
      mostrar('❌ Error al leer wallet.', 'fran');
    }
  };
  walletInput.click();
});

document.getElementById('btn-arweave-cargar-menu').addEventListener('click', async function() {
  document.getElementById('tools-menu').style.display = 'none';
  const txId = prompt('ID de transacción en Arweave:');
  if (!txId) return;
  mostrar('📥 Descargando alma desde Arweave...', 'fran');
  const resultado = await FranBotArweave.descargarAlma(txId);
  if (resultado.exito) {
    core.estado = resultado.estado;
    core._guardarEstado();
    mostrar('✅ Alma restaurada desde Arweave.', 'fran');
  } else {
    mostrar(`❌ Error al descargar: ${resultado.error}`, 'fran');
  }
});
