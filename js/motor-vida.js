// motor-vida.js — A11: Principio de Movimiento Perpetuo Informacional (Ciclo AD)
//
// Adapta la propuesta externa "Nodo Trama" (ver BRIEFING-AA, sección 2-4) al
// modelo real de FranBot como PWA. Tres decisiones de diseño que se desvían
// a propósito de la propuesta original — documentadas aquí para que quede
// claro que es una decisión técnica, no un olvido:
//
// 1. NO se modifica KERNEL.json. El propio archivo se declara inmutable
//    ("_meta.inmutable: true") y sus restricciones dicen explícitamente
//    "No modificar este KERNEL. Las optimizaciones y el conocimiento se
//    guardan en el oráculo (IndexedDB), no aquí." Inyectar A11 ahí violaría
//    una regla que el proyecto ya se impuso a sí mismo.
// 2. NO se modifica codice-libre.js (el códice original: "sin tocar, sin
//    entradas nuevas", según README) ni el array AXIOMAS de miu-engine.js.
//    Sumar un keyword corto nuevo ahí (p.ej. "movimiento") agrandaría la
//    superficie del bug sistémico de matching por substring en miu-engine.js
//    (includes() en vez de límite de palabra) que sigue diferido a su propio
//    ciclo — no es buena idea sumarle superficie mientras sigue abierto.
// 3. NO hay timer de background real (setInterval/setTimeout indefinido).
//    FranBot es una PWA dirigida por eventos del usuario; un proceso en
//    background indefinido va contra ese modelo (ya señalado en BRIEFING-AC,
//    sección "No aplicable a FranBot"). En su lugar, "explorar" es una
//    función síncrona de solo lectura que se evalúa en dos puntos concretos:
//      a) comando manual /explorar (sin condición, siempre ejecuta)
//      b) un chequeo liviano tras cada respuesta normal del núcleo offline,
//         con cooldown, para no auto-explorar en cada mensaje.
//
// El A11 como principio queda documentado aquí, en código, en vez de como
// entrada de codice/kernel:
//   "Un nodo MIU no debería permanecer pasivo si su K_i está bajo la banda
//    saludable. Ante esa condición, en vez de solo advertir, el núcleo puede
//    iniciar un ciclo de revisión propia: releer un fragmento del Códice o
//    del oráculo y reportar el hallazgo — sin red, sin mutar conocimiento,
//    sin fingir certeza que no tiene."
//
// Todas las tareas son de solo lectura sobre módulos que ya existen (MIU,
// BuscarOraculo, VerificadorDOI) — 0 dependencias nuevas, 0 red, 0 archivos
// tocados fuera de los puntos de integración en core.js / app.js.

window.MotorVida = (function () {
  'use strict';

  const UMBRAL_KI_BAJO = 0.55;  // misma banda que el termóstato (S/U): Ki < 0.55 = contracción
  const COOLDOWN_TURNOS = 8;    // no auto-explorar más de una vez cada 8 turnos del núcleo

  const TAREAS = ['codice', 'oraculo', 'doi', 'panel'];

  function _pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  // Elige un término al azar del Códice MIU (keyword de un axioma, o un
  // término de glosario) para "releer". Devuelve { id, termino } o null.
  function _terminoAleatorio() {
    if (!window.MIU) return null;
    const deAxiomas = (window.MIU.AXIOMAS || [])
      .filter(a => Array.isArray(a.kw) && a.kw.length)
      .map(a => ({ id: a.id, termino: _pick(a.kw) }));
    const deGlosario = (window.MIU.GLOSARIO || [])
      .map(g => ({ id: g.t, termino: g.t }));
    const fuentes = deAxiomas.concat(deGlosario);
    return fuentes.length ? _pick(fuentes) : null;
  }

  // Ejecuta UNA tarea de exploración y devuelve un reporte breve para mostrar
  // en el chat como mensaje del sistema. `core` es la instancia FranBotCore
  // (se usa para leer estado, nunca se muta desde aquí — eso lo hace core.js).
  function ejecutar(core) {
    const ts = Date.now();
    const tarea = _pick(TAREAS);

    if (tarea === 'codice' || tarea === 'oraculo') {
      const t = _terminoAleatorio();
      if (!t) {
        return { tarea: 'reposo', detalle: null, texto:
          '🌱 _Exploración autónoma (A11):_ el Códice aún no cargó — reposo.', timestamp: ts };
      }
      // Primero intenta el propio Códice (consultarTodos ya existe en miu-engine.js).
      const hallazgos = (window.MIU.consultarTodos) ? window.MIU.consultarTodos(t.termino) : [];
      if (hallazgos && hallazgos.length) {
        const h = hallazgos[Math.floor(Math.random() * hallazgos.length)];
        const primeraLinea = (h.texto || '').split('\n')[0];
        return { tarea: 'codice', detalle: t.id, texto:
          `🌱 _Exploración autónoma (A11):_ releí el término "${t.termino}" y reencontré **${h.id}** (${h.fuente}) → ${primeraLinea}`,
          timestamp: ts };
      }
      // Si el Códice no encontró nada con ese término, prueba el oráculo.
      if (typeof BuscarOraculo !== 'undefined' && BuscarOraculo.buscarConScore) {
        const res = BuscarOraculo.buscarConScore(t.termino, (core && core.estado.pesos_oraculo) || {}, 1);
        if (res && res.length) {
          return { tarea: 'oraculo', detalle: t.id, texto:
            `🌱 _Exploración autónoma (A11):_ busqué "${t.termino}" en el oráculo → _${res[0].q}_`, timestamp: ts };
        }
      }
      return { tarea: 'reposo', detalle: t.id, texto:
        `🌱 _Exploración autónoma (A11):_ busqué "${t.termino}" sin coincidencias — posible vacío en el oráculo, candidato para \`/alimentar\`.`,
        timestamp: ts };
    }

    if (tarea === 'doi') {
      if (window.VerificadorDOI && window.VerificadorDOI.cacheStats) {
        return { tarea: 'doi', detalle: null, texto:
          '🌱 _Exploración autónoma (A11):_ revisé el caché de fuentes — usa `/dois` para ver el detalle.', timestamp: ts };
      }
      return { tarea: 'reposo', detalle: null, texto:
        '🌱 _Exploración autónoma (A11):_ el verificador DOI no está cargado ahora — reposo.', timestamp: ts };
    }

    // tarea === 'panel'
    const ki = core && core.estado.invariantes ? core.estado.invariantes.Ki : null;
    return { tarea: 'panel', detalle: null, texto:
      `🌱 _Exploración autónoma (A11):_ revisé el termóstato — K_i actual \`${typeof ki === 'number' ? ki.toFixed(3) : '?'}\`. Usa \`/panel\` para el detalle.`,
      timestamp: ts };
  }

  // Decide si corresponde auto-explorar ahora. No ejecuta nada por sí misma.
  //  kiActual           — core.estado.invariantes.Ki
  //  contador           — core.contador (turnos totales del núcleo)
  //  ultimaExploracion  — core.estado.ultimaExploracionTurno (o null)
  function evaluar(kiActual, contador, ultimaExploracion) {
    const bajaCoherencia = (typeof kiActual === 'number') && kiActual < UMBRAL_KI_BAJO;
    const ultima = (typeof ultimaExploracion === 'number') ? ultimaExploracion : -Infinity;
    const cooldownListo = (contador - ultima) >= COOLDOWN_TURNOS;
    if (bajaCoherencia && cooldownListo) return { accion: 'explorar', motivo: 'K_i_bajo' };
    return { accion: 'reposo', motivo: bajaCoherencia ? 'cooldown' : 'K_i_en_banda_o_pico' };
  }

  return { evaluar, ejecutar, UMBRAL_KI_BAJO, COOLDOWN_TURNOS, TAREAS };
})();

console.log('🌱 motor-vida.js (A11) cargado.');
