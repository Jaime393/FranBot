// Añadir al final de FranBotConciencia.diagnosticar()
this.estado.dkg = !!(window.FranBotDKG && FranBotDKG.conectado);
// Añadir al objeto iconos en actualizarPanel()
dkg: document.getElementById('diag-dkg'),
// Añadir en actualizarPanel() después del bloque de Arweave
if (iconos.dkg) iconos.dkg.textContent = this.estado.dkg ? '✅' : '❌';
