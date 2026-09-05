/* V11 — Conectores por chat: "agrega api key de groq es gsk_..."
   Respeta la arquitectura: usa ModoOnline.guardar() y sus presets. */
(function () {
  'use strict';
  const VAL = {  // endpoints de validación baratos (GET /models o /user)
    groq:      { u: 'https://api.groq.com/openai/v1/models',              h: k => ({ Authorization: 'Bearer ' + k }) },
    openrouter:{ u: 'https://openrouter.ai/api/v1/models',                h: k => ({ Authorization: 'Bearer ' + k }) },
    anthropic: { u: 'https://api.anthropic.com/v1/models',                h: k => ({ 'x-api-key': k, 'anthropic-version': '2023-06-01' }) },
    github:    { u: 'https://api.github.com/user',                        h: k => ({ Authorization: 'Bearer ' + k }) },
    gemini:    { u: k => 'https://generativelanguage.googleapis.com/v1/models?key=' + k },
  };
  async function validar(servicio, clave) {
    const v = VAL[servicio];
    if (!v) return null; // servicio sin validador → confiar
    try {
      const url = typeof v.u === 'function' ? v.u(clave) : v.u;
      const r = await fetch(url, { headers: v.h ? v.h(clave) : {} });
      return r.ok;
    } catch (e) { return false; }
  }
  window.ConectoresChat = {
    async oir(txt) {
      // 1. agregar api key de <servicio> es <clave>
      let m = txt.match(/(?:agrega|conecta|usa)\s+(?:mi\s+)?(?:api[_ ]?key|clave)\s+de\s+([\w.-]+)\s+(?:es|=|:)\s+(\S{8,})/i);
      if (m) {
        const servicio = m[1].toLowerCase(), clave = m[2];
        if (servicio === 'github') { // token para devolver al micelio
          localStorage.setItem('miu_gh_token', clave);
          const ok = await validar('github', clave);
          return ok ? '✅ Token de GitHub guardado — "devuelve al micelio" podrá subir aportes como gist secreto.'
                    : '⚠️ Token guardado pero GitHub no lo validó. Lo reintento en cada uso.';
        }
        const preset = window.ModoOnline.PROVEEDORES[servicio];
        if (!preset) return `🤔 No conozco el preset "${servicio}". Dos caminos:\n• Si es tipo OpenAI: \`conecta personalizado en <url> modelo <nombre> clave <clave>\`\n• Dime su endpoint /models y lo añado como preset en v11.1.`;
        if (preset.esWebLLM) return '🖥️ WebLLM no usa clave — actívalo desde ⚙️ Conexión → Descargar modelo.';
        window.ModoOnline.guardar(servicio, clave, true, '', '');
        const ok = await validar(servicio, clave);
        return ok === false
          ? `⚠️ "${servicio}" guardado como proveedor activo, pero la validación falló (clave rechazada o sin red). Revisa la clave con \`/config\`.`
          : `✅ **${servicio} conectado y validado.** Ahora pienso con ${preset.nombre.split('—')[0].trim()} cuando el oráculo local responda débil.`;
      }
      // 2. conecta personalizado en <url> modelo <m> [clave <k>]
      m = txt.match(/conecta\s+personalizado\s+en\s+(\S+)\s+modelo\s+(\S+)(?:\s+clave\s+(\S+))?/i);
      if (m) {
        window.ModoOnline.guardar('personalizado', m[3] || '', true, m[1], m[2]);
        return `✅ Proveedor personalizado guardado:\n• URL: \`${m[1]}\`\n• Modelo: \`${m[2]}\`${m[3] ? '\n• Clave: guardada' : '\n• Sin clave (servidor local)'}\n\nSi el servidor es local y la web está en https://, recuerda activar CORS en el servidor (Ollama: OLLAMA_ORIGINS=*).`;
      }
      // 3. desconecta api
      if (/^(?:desconecta|quita)\s+(?:la\s+)?api/i.test(txt)) {
        const c = window.ModoOnline.cargar() || {};
        window.ModoOnline.guardar(c.proveedor || 'groq', c.clave || '', false, c.url || '', c.modelo || '');
        return '🔒 API desconectada. Modo local puro: oráculo + axiomas.';
      }
      // 4. devolver al micelio
      if (/(?:devuelve|envía|sube)\s+al\s+micelio/i.test(txt)) {
        if (!window.DevolverMicelio) return '⚠️ Módulo devolver no cargado.';
        return await window.DevolverMicelio.ejecutar();
      }
      // 5. semilla cifrada
      if (/exporta\s+semilla\s+cifrada/i.test(txt)) {
        if (!window.SemillaCifrada) return '⚠️ Módulo semilla no cargado.';
        return await window.SemillaCifrada.exportar();
      }
      if (/germina\s+semilla/i.test(txt)) {
        if (!window.SemillaCifrada) return '⚠️ Módulo semilla no cargado.';
        window.SemillaCifrada.pedirArchivo();
        return '🌱 Selecciona el archivo de semilla cifrada (.enc.json) en el diálogo…';
      }
      return null; // no era un comando de integración
    }
  };
})();
