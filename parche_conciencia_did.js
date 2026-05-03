// Añadir al final de FranBotConciencia.diagnosticar()
this.estado.did = !!(window.FranBotDID && FranBotDID.did);
// Añadir al actualizarPanel()
const iconoDid = document.getElementById('diag-did');
if (iconoDid) iconoDid.textContent = this.estado.did ? '✅' : '❌';
// Mostrar DID al hacer clic en el icono
if (iconoDid) iconoDid.onclick = () => alert('DID: ' + (FranBotDID.did || 'no generado'));
