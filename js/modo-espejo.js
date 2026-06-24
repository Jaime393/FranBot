// modo-espejo.js — Analiza el tono del usuario y, si está activo, adapta el prefijo
// de la respuesta. Utilidad pura: app.js decide cuándo aplicarla (un solo punto de
// renderizado, sin observers compitiendo entre sí).
window.ModoEspejo = (function () {
  let activo = false;

  function analizarTono(mensaje) {
    const texto = (mensaje || '').toLowerCase();
    if (/(triste|deprimido|llorar|solo|fracaso|dolor|sufro|melancol|angustia)/i.test(texto)) return 'triste';
    if (/(feliz|alegre|genial|excelente|maravilloso|risa|contento|gozo)/i.test(texto)) return 'feliz';
    if (/(enojo|rabia|odio|maldición|inútil|fastidio)/i.test(texto) || texto.includes('!')) return 'enojado';
    if (/(claro que sí|por supuesto que no|qué bien)/i.test(texto)) return 'sarcastico';
    if (/(gracias|ayuda|comprender|escuchar|apoyo)/i.test(texto)) return 'empatico';
    return 'neutral';
  }

  function transformar(respuesta, tono) {
    if (!respuesta) return respuesta;
    switch (tono) {
      case 'triste': return `*(con tono suave)* ${respuesta}`;
      case 'feliz': return `😊 ${respuesta}`;
      case 'enojado': return `*(con calma)* ${respuesta}`;
      case 'sarcastico': return `${respuesta} *(¿es así como lo sientes?)*`;
      case 'empatico': return `*(con cercanía)* ${respuesta}`;
      default: return respuesta;
    }
  }

  return {
    estaActivo: () => activo,
    toggle: () => { activo = !activo; return activo; },
    aplicar: (respuesta, ultimoMensajeUsuario) => {
      if (!activo) return respuesta;
      return transformar(respuesta, analizarTono(ultimoMensajeUsuario));
    }
  };
})();
