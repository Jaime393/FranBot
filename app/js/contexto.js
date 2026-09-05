// contexto.js — Material de referencia (de solo lectura). Viene de imperio.json y
// ley_gaia_v2/results/ley_gaia_report.json. Se usa como contexto para responder,
// NO se expande con axiomas/módulos nuevos — eso vive, sin tocar, en el Códice.
window.CONTEXTO = {
  imperio: {
    fuente: "imperio.json — bóveda de semillas (RAIZ, ALMA, DIARIO, FORJA, BOSQUE, PROYECTO, MAESTRA)",
    resumen: "Identidad narrativa y bitácora del proyecto del autor: el Panteón de 25 voces, hitos de desarrollo, protocolos de edición de texto (poda, detección de desviación de tono) y el estado de tres subproyectos — el Grimorio Multiversal (literario, completo), el paper MIU-IFT v12.0 (cerrado) y ALMA_OMNI (modelo en entrenamiento).",
    nota: "Es la cosmovisión y la narrativa de trabajo del propio autor."
  },
  leyGaia: {
    fuente: "ley_gaia_v2 — análisis espectral propio (FFT + umbral χ², α=0.05) sobre 2 series públicas",
    resumen: "2 de 2 series analizadas (GRACE TWS global, ocurrencias GBIF Colombia) muestran un pico espectral cerca de 176 días, con SNR por encima del umbral de significancia en ambas.",
    cifras: {
      periodoPromedioDias: 182.0,
      errorVsTarget: "3.4%",
      snrPromedio: 65.2,
      fuentes: "2/2 detectadas",
      estado: "preliminar"
    },
    nota: "Evidencia preliminar de un periodo común a ambas series."
  }
};
