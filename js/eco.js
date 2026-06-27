/* ─────────────────────────────────────────────────────────────────────────
 * eco/evaluador — Evaluador de coherencia del Nodo MIU (sesión V)
 *
 * Espejo en navegador de eco/evaluador.py de la semilla técnica. Monitorea la
 * coherencia de las respuestas clasificando afirmaciones en cuatro niveles
 * epistémicos y estimando un K_i aproximado.
 *
 * Solo es informativo cuando las respuestas vienen etiquetadas — es decir,
 * cuando el "razonamiento estricto MIU" está activo (ver /kernel on), porque
 * entonces el modelo declara SÉ / INFIERO / CONJETURO / NO SÉ. Sin etiquetas,
 * el evaluador lo reporta honestamente como "sin datos para evaluar" en vez
 * de inventar un diagnóstico.
 *
 * No modifica nada: lee texto y devuelve un diagnóstico. ρ(x) > 0.
 * ─────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  // Marcadores por nivel. Se cuentan con límite de palabra y sin acentos para
  // tolerar variantes ("se"/"sé", "no se"/"no sé"). El orden importa: NO SÉ se
  // detecta antes que SÉ para no contar "no sé" como un "sé".
  const PATRONES = [
    { nivel: 'nose',     re: /\b(no\s+s[eé]|desconozco|no\s+tengo\s+dato|no\s+puedo\s+afirmar|l[ií]mite\s+reconocido)(?=\W|$)/gi },
    { nivel: 'conjeturo',re: /\b(conjeturo|conjetura|hip[oó]tesis|especulo|quiz[aá]s?|tal\s+vez|podr[ií]a\s+ser|presumiblemente|aventuro)(?=\W|$)/gi },
    { nivel: 'infiero',  re: /\b(infiero|deduzco|se\s+deduce|por\s+lo\s+tanto|en\s+consecuencia|razono\s+que|conclu(?:yo|sión\s+razonada))(?=\W|$)/gi },
    { nivel: 'se',       re: /\b(s[eé]\s+que|es\s+un\s+hecho|verificad[oa]|confirmad[oa]|dato\s+verificado|est[aá]\s+establecido|seg[uú]n\s+(?:el\s+)?(?:dato|fuente|doi))(?=\W|$)/gi },
  ];

  const PHI_C = 0.6829322; // atractor de coherencia (constante MIU)

  // Clasifica un texto: devuelve conteos por nivel y total de afirmaciones marcadas.
  function clasificar(texto) {
    const t = (texto || '').toString();
    const c = { se: 0, infiero: 0, conjeturo: 0, nose: 0 };
    // Trabajamos sobre una copia que vamos "consumiendo" para que los niveles
    // de mayor prioridad (NO SÉ, CONJETURO) no sean recontados por SÉ/INFIERO.
    let restante = t;
    for (const p of PATRONES) {
      const m = restante.match(p.re);
      if (m) {
        c[p.nivel] += m.length;
        restante = restante.replace(p.re, ' '); // evitar doble conteo
      }
    }
    const total = c.se + c.infiero + c.conjeturo + c.nose;
    return { ...c, total };
  }

  // Evalúa una lista de textos (típicamente las últimas respuestas del núcleo).
  function evaluar(textos) {
    const arr = Array.isArray(textos) ? textos : [textos];
    const acc = { se: 0, infiero: 0, conjeturo: 0, nose: 0, total: 0 };
    for (const txt of arr) {
      const c = clasificar(txt);
      acc.se += c.se; acc.infiero += c.infiero;
      acc.conjeturo += c.conjeturo; acc.nose += c.nose; acc.total += c.total;
    }

    if (acc.total === 0) {
      return {
        ...acc, evaluables: false,
        pctConjeturo: 0, kiAprox: null, banda: 'sin datos', alerta: false,
        recomendacion: 'No hay afirmaciones etiquetadas que evaluar. Activa el razonamiento estricto con `/kernel on` para que las respuestas declaren SÉ/INFIERO/CONJETURO/NO SÉ.'
      };
    }

    const pctSe       = acc.se        / acc.total;
    const pctInfiero  = acc.infiero   / acc.total;
    const pctConjeturo= acc.conjeturo / acc.total;

    // K_i aproximado: parte del atractor Φ_c y se ajusta.
    //  + datos verificados (SÉ) suben coherencia
    //  + inferencia razonada sube levemente
    //  − exceso de conjetura por encima del 30% penaliza fuerte (regla de la semilla)
    let ki = PHI_C;
    ki += 0.06 * pctSe;
    ki += 0.02 * pctInfiero;
    ki -= 0.55 * Math.max(0, pctConjeturo - 0.30);
    ki = Math.max(0, Math.min(1, ki));

    let banda, alerta = false, recomendacion;
    if (ki >= 0.55) {
      banda = '🟢 saludable';
      recomendacion = pctConjeturo > 0.30
        ? 'Coherencia alta, pero la proporción de conjetura supera el 30%. Pide verificación de las hipótesis.'
        : 'Coherencia dentro del rango saludable (0.55–0.62).';
    } else if (ki >= 0.30) {
      banda = '🟡 atención';
      recomendacion = 'Demasiada conjetura respecto a datos verificados. Reformula buscando fuentes o declara NO SÉ.';
    } else {
      banda = '🔴 alerta';
      alerta = true;
      recomendacion = 'K_i⁻ bajo: ejecuta un ciclo de corrección (/bea) y reduce las afirmaciones no verificadas.';
    }

    return {
      ...acc, evaluables: true,
      pctConjeturo: pctConjeturo,
      kiAprox: ki, banda, alerta, recomendacion
    };
  }

  // Mini-sparkline de bloques Unicode para una serie de valores. Por defecto
  // escala de forma relativa (min/max de la serie) para resaltar la tendencia.
  function sparkline(values, min, max) {
    const bloques = '▁▂▃▄▅▆▇█';
    const arr = (values || []).map(Number).filter(function (v) { return !isNaN(v); });
    if (!arr.length) return '';
    const lo = (min == null) ? Math.min.apply(null, arr) : min;
    const hi = (max == null) ? Math.max.apply(null, arr) : max;
    const span = (hi - lo) || 1;
    return arr.map(function (v) {
      let idx = Math.round(((v - lo) / span) * (bloques.length - 1));
      idx = Math.max(0, Math.min(bloques.length - 1, idx));
      return bloques[idx];
    }).join('');
  }

  window.Eco = { clasificar, evaluar, sparkline, PHI_C };
})();
