// ==================== MÓDULO DE IMPORTACIÓN ROBUSTA DE ALMAS ====================
// FranBot v5.0 - Ecosistema Estable
// Resuelve: Bloqueo al cargar archivos JSON con estructura incorrecta

(function() {
  'use strict';

  if (!window.franbot) {
    console.error('❌ FranBotCore no encontrado. No se puede cargar el módulo de importación.');
    return;
  }

  const core = window.franbot;

  function validarEstructura(datos) {
    if (!datos || typeof datos !== 'object') {
      return { valido: false, tipo: 'desconocido' };
    }
    if (datos.campo_conceptual && datos.indicadores) {
      return { valido: true, tipo: 'estado' };
    }
    if (datos.personalidad || datos.tipo === 'gratuita' || datos.tipo === 'premium') {
      return { valido: true, tipo: 'alma' };
    }
    return { valido: false, tipo: 'desconocido' };
  }

  function fusionarAlma(datosAlma) {
    let nombreAlma = '';
    if (datosAlma.nombre) {
      nombreAlma = datosAlma.nombre.toLowerCase().trim();
    } else if (datosAlma.identidad) {
      nombreAlma = datosAlma.identidad.replace('FranBot · ', '').replace('FranBot ', '').toLowerCase().trim();
    } else if (datosAlma.personalidad) {
      nombreAlma = datosAlma.personalidad.split(',')[0].toLowerCase().trim();
    }

    if (!nombreAlma) {
      console.warn('⚠️ No se pudo determinar el nombre del alma.');
      return false;
    }

    if (core.almas && core.almas[nombreAlma]) {
      core.almaActiva = nombreAlma;
      core.estado.almaActiva = nombreAlma;
      core._guardarEstado();
      console.log(`✅ Alma '${nombreAlma}' activada desde archivo.`);
      return true;
    }

    if (datosAlma.frases && Array.isArray(datosAlma.frases)) {
      core.almas = core.almas || {};
      core.almas[nombreAlma] = {
        frases: datosAlma.frases,
        conocimientos: datosAlma.conocimientos || [],
        personalidad: datosAlma.personalidad || '',
        tono: datosAlma.tono || ''
      };
      core.almaActiva = nombreAlma;
      core.estado.almaActiva = nombreAlma;
      core._guardarEstado();
      console.log(`✅ Alma '${nombreAlma}' registrada y activada desde archivo.`);
      return true;
    }

    console.warn(`⚠️ El archivo de alma no contiene frases válidas.`);
    return false;
  }

  function importarAlma(datos) {
    const validacion = validarEstructura(datos);

    if (!validacion.valido) {
      return { exito: false, mensaje: '❌ Archivo no válido. Estructura desconocida.' };
    }

    if (validacion.tipo === 'estado') {
      try {
        const backupIndicadores = core.estado.indicadores;
        const backupCampo = core.estado.campo_conceptual;
        Object.assign(core.estado, datos);
        if (!core.estado.indicadores) core.estado.indicadores = backupIndicadores;
        if (!core.estado.campo_conceptual) core.estado.campo_conceptual = backupCampo;
        core._guardarEstado();
        console.log('✅ Estado completo importado correctamente.');
        return { exito: true, mensaje: '✅ Estado completo importado correctamente.' };
      } catch (e) {
        console.error('❌ Error al fusionar estado:', e);
        return { exito: false, mensaje: '❌ Error al fusionar estado.' };
      }
    }

    if (validacion.tipo === 'alma') {
      const fusionado = fusionarAlma(datos);
      if (fusionado) {
        return { exito: true, mensaje: '✅ Alma importada y activada correctamente.' };
      } else {
        return { exito: false, mensaje: '❌ No se pudo importar el alma. Revisa el formato.' };
      }
    }

    return { exito: false, mensaje: '❌ Error desconocido.' };
  }

  window.importarAlmaSegura = importarAlma;
  console.log('✅ Módulo de importación robusta de almas cargado.');
})();
