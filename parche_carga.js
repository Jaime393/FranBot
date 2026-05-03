// Reemplaza el bloque de btn-cargar-menu por este
document.getElementById('btn-cargar-menu').addEventListener('click', function() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = function(e) {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
      try {
        const datos = JSON.parse(ev.target.result);
        if (window.importarAlmaSegura) {
          const resultado = window.importarAlmaSegura(datos);
          mostrar(resultado.mensaje, 'fran');
        } else {
          core.estado = datos;
          core._guardarEstado();
          mostrar('📥 Alma cargada (método básico).', 'fran');
        }
      } catch(ex) {
        mostrar('❌ Archivo no válido.', 'fran');
      }
    };
    reader.readAsText(file);
  };
  input.click();
  document.getElementById('tools-menu').style.display = 'none';
});
