// ==================== MÓDULO DE IMPORTACIÓN ROBUSTA DE ALMAS ====================
// FranBot v5.0 - Ecosistema Estable
// Resuelve: Bloqueo al cargar archivos JSON con estructura incorrecta

(function() {
  'use strict';

  // Solo ejecutar si FranBotCore está disponible
  if (!window.franbot) {
    console.error('❌ FranBotCore no encontrado. No se puede cargar el módulo de importación.');
    return;
  }

  const core = window.franbot;

  /**
   * Valida que un objeto tenga la estructura mínima de un estado de FranBot.
   * @param {object} datos - Objeto parseado del JSON.
   * @returns {object} { valido: boolean, tipo: 'estado' | 'alma' | 'desconocido' }
   */
  function validarEstructura(datos) {
    if (!datos || typeof datos !== 'object') {
      return { valido: false, tipo: 'desconocido' };
    }

    // Si tiene campo_conceptual e indicadores, es un estado completo
    if (datos.campo_conceptual && datos.indicadores) {
      return { valido: true, tipo: 'estado' };
    }

    // Si tiene "personalidad" o "tono", es un archivo de alma (solo definición)
    if (datos.personalidad || datos.tipo === 'gratuita' || datos.tipo === 'premium') {
      return { valido: true, tipo: 'alma' };
    }

    // Si no coincide con nada conocido
    return { valido: false, tipo: 'desconocido' };
  }

  /**
   * Fusiona un objeto de tipo "alma" dentro del estado actual.
   * Busca el nombre del alma en core.almas y la activa.
   * @param {object} datosAlma - Objeto con definición de alma.
   * @returns {boolean} true si se fusionó correctamente.
   */
  function fusionarAlma(datosAlma) {
    // Extraer nombre del alma desde la identidad o el nombre del archivo
    let nombreAlma = '';
    if (datosAlma.identidad) {
      // Ej: "FranBot · Sabio Callejero" -> "sabio callejero"
      nombreAlma = datosAlma.identidad.replace('FranBot · ', '').replace('FranBot ', '').toLowerCase().trim();
    } else if (datosAlma.personalidad) {
      // Usamos la primera frase de personalidad como nombre improvisado
      nombreAlma = datosAlma.personalidad.split(',')[0].toLowerCase().trim();
    }

    if (!nombreAlma) {
      console.warn('⚠️ No se pudo determinar el nombre del alma.');
      return false;
    }

    // Verificar si el alma existe en el registro de almas del core
    if (core.almas && core.almas[nombreAlma]) {
      // El alma ya existe, solo la activamos
      core.almaActiva = nombreAlma;
      core.estado.almaActiva = nombreAlma;
      core._guardarEstado();
      console.log(`✅ Alma '${nombreAlma}' activada desde archivo.`);
      return true;
    }

    // Si no existe en el registro, la registramos dinámicamente
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

  /**
   * Función principal de importación. Reemplaza al handler antiguo.
   * @param {object} datos - Objeto parseado del JSON.
   * @returns {object} { exito: boolean, mensaje: string }
   */
  function importarAlma(datos) {
    const validacion = validarEstructura(datos);

    if (!validacion.valido) {
      return { exito: false, mensaje: '❌ Archivo no válido. Estructura desconocida.' };
    }

    if (validacion.tipo === 'estado') {
      // Es un estado completo: fusión segura (mantenemos estructura base)
      try {
        // Guardar propiedades críticas que no deben perderse
        const backupIndicadores = core.estado.indicadores;
        const backupCampo = core.estado.campo_conceptual;

        // Fusionar: los datos del archivo sobreescriben el estado
        Object.assign(core.estado, datos);

        // Restaurar propiedades críticas si el archivo no las trae
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
      // Es un archivo de definición de alma
      const fusionado = fusionarAlma(datos);
      if (fusionado) {
        return { exito: true, mensaje: '✅ Alma importada y activada correctamente.' };
      } else {
        return { exito: false, mensaje: '❌ No se pudo importar el alma. Revisa el formato.' };
      }
    }

    return { exito: false, mensaje: '❌ Error desconocido.' };
  }

  // Exponer función globalmente
  window.importarAlmaSegura = importarAlma;
  console.log('✅ Módulo de importación robusta de almas cargado.');
})();
