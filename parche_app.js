// ---- REEMPLAZO PARA EL EVENTO 'btn-cargar-menu' EN app.js ----
// Busca la línea: document.getElementById('btn-cargar-menu').addEventListener(...)
// Reemplaza todo ese bloque con este código.

document.getElementById('btn-cargar-menu').addEventListener('click', function() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(ev) {
      try {
        const datos = JSON.parse(ev.target.result);

        // Usar el nuevo módulo de importación robusta
        if (window.importarAlmaSegura) {
          const resultado = window.importarAlmaSegura(datos);
          mostrar(resultado.mensaje, 'fran');

          // Si fue exitoso y es un alma, mostrar un mensaje adicional
          if (resultado.exito) {
            // Recargar el estado interno para reflejar cambios
            if (core._cargarEstado) {
              core.estado = core._cargarEstado();
            }
          }
        } else {
          // Fallback al método antiguo si el módulo no se cargó
          core.estado = datos;
          core._guardarEstado();
          mostrar('⚠️ Alma cargada (método básico).', 'fran');
        }
      } catch (ex) {
        mostrar('❌ Archivo no válido. Error de formato JSON.', 'fran');
        console.error('Error al parsear JSON:', ex);
      }
    };
    reader.onerror = function() {
      mostrar('❌ Error al leer el archivo.', 'fran');
    };
    reader.readAsText(file);
  };
  input.click();
  document.getElementById('tools-menu').style.display = 'none';
});
