// modo-online.js — Modo online opcional: el usuario pega su propia clave de un
// proveedor en la nube, o conecta cualquier servidor compatible con el formato
// de OpenAI (/v1/chat/completions) — incluida una opción "Personalizado" genérica
// que cubre proveedores no listados (Mistral, DeepSeek, Perplexity, Azure OpenAI...)
// y servidores locales sin clave (Ollama, LM Studio, llama.cpp, vLLM, koboldcpp...).
// Todo se guarda solo en este navegador y se usa solo para llamar directo a la
// API elegida — nunca pasa por ningún servidor intermedio propio.
window.ModoOnline = {
  _activo: false,

  // Tabla de proveedores. Añadir uno nuevo es agregar una entrada aquí — app.js
  // construye el <select> de panelConfig() a partir de esto, no a mano.
  // 'requiereClave: false' es lo que distingue a 'personalizado': sin eso, un
  // servidor local sin autenticación (la mayoría) nunca podría activarse, porque
  // estaActivo() exigiría una clave que no existe ni hace falta.
  PROVEEDORES: {
    groq: {
      nombre: 'Groq — Llama 3.3 70B (gratis, rápido)',
      url: 'https://api.groq.com/openai/v1/chat/completions',
      modelo: 'llama-3.3-70b-versatile',
      requiereClave: true
    },
    openrouter: {
      nombre: 'OpenRouter — GPT-4o mini',
      url: 'https://openrouter.ai/api/v1/chat/completions',
      modelo: 'openai/gpt-4o-mini',
      requiereClave: true
    },
    together: {
      nombre: 'Together AI — Llama 3.3 70B',
      url: 'https://api.together.xyz/v1/chat/completions',
      modelo: 'meta-llama/Llama-3.3-70B-Instruct-Turbo',
      requiereClave: true
    },
    openai: {
      nombre: 'OpenAI — GPT-4o mini',
      url: 'https://api.openai.com/v1/chat/completions',
      modelo: 'gpt-4o-mini',
      requiereClave: true
    },
    webllm: {
      nombre: '🖥️ WebLLM — IA local en el navegador (sin API, sin internet tras la descarga)',
      url: '__webllm__', modelo: '__webllm__',
      requiereClave: false, esWebLLM: true
    },
    personalizado: {
      nombre: 'Personalizado — cualquier API tipo OpenAI / servidor local',
      url: '', modelo: '', requiereClave: false, esPersonalizado: true
    }
  },

  // Atajos para rellenar URL+modelo de un click cuando el proveedor es
  // 'personalizado' (app.js los usa para los botones rápidos). No son
  // proveedores aparte: siguen guardándose como 'personalizado'.
  ATAJOS_LOCALES: {
    ollama:   { nombre: 'Ollama (local)',    url: 'http://localhost:11434/v1/chat/completions', modeloEjemplo: 'llama3.2' },
    lmstudio: { nombre: 'LM Studio (local)', url: 'http://localhost:1234/v1/chat/completions',   modeloEjemplo: 'el modelo que tengas cargado en LM Studio' }
  },

  cargar() {
    const cfg = JSON.parse(localStorage.getItem('miu_online') || 'null');
    if (cfg?.proveedor) {
      this._proveedor = cfg.proveedor;
      this._clave = cfg.clave || '';
      this._url = cfg.url || '';
      this._modelo = cfg.modelo || '';
      this._activo = !!cfg.activo;
    }
    return cfg;
  },

  guardar(proveedor, clave, activo, urlPersonalizada, modeloPersonalizado) {
    this._proveedor = proveedor;
    this._clave = (clave || '').trim();
    this._url = (urlPersonalizada || '').trim();
    this._modelo = (modeloPersonalizado || '').trim();
    this._activo = activo;
    localStorage.setItem('miu_online', JSON.stringify({
      proveedor, clave: this._clave, activo, url: this._url, modelo: this._modelo
    }));
  },

  // Resuelve a dónde llamar y con qué modelo, según el proveedor activo.
  _conexion() {
    if (this._proveedor === 'webllm')       return { url: '__webllm__', modelo: '__webllm__' };
    if (this._proveedor === 'personalizado') return { url: this._url, modelo: this._modelo };
    const preset = this.PROVEEDORES[this._proveedor];
    return preset ? { url: preset.url, modelo: preset.modelo } : { url: '', modelo: '' };
  },

  estaActivo() {
    if (!this._activo) return false;
    if (this._proveedor === 'webllm') {
      return !!(window.WebLLMProvider && window.WebLLMProvider.modeloCargado);
    }
    const { url, modelo } = this._conexion();
    if (!url || !modelo) return false;
    const preset = this.PROVEEDORES[this._proveedor];
    if (preset && preset.requiereClave && !this._clave) return false;
    return true;
  },

  async preguntar(mensaje, systemPrompt) {
    if (!this._activo) return null;
    // Ruta WebLLM — inferencia local sin red
    if (this._proveedor === 'webllm') {
      if (!window.WebLLMProvider || !window.WebLLMProvider.modeloCargado) {
        return { error: 'Modelo local no cargado. Abre ⚙️ Conexión → WebLLM y carga un modelo primero.' };
      }
      return window.WebLLMProvider.preguntar(mensaje, systemPrompt);
    }
    if (!this.estaActivo()) return null;
    const { url, modelo } = this._conexion();
    const headers = { 'Content-Type': 'application/json' };
    if (this._clave) headers['Authorization'] = `Bearer ${this._clave}`;
    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          model: modelo,
          messages: [
            { role: 'system', content: systemPrompt || 'Eres un asistente útil. Responde en español.' },
            { role: 'user', content: mensaje }
          ],
          temperature: 0.7,
          max_tokens: 600
        })
      });
      const data = await resp.json().catch(() => null);
      if (!data) return { error: `Respuesta no válida del servidor (HTTP ${resp.status}).` };
      if (data.error) {
        const msg = typeof data.error === 'string' ? data.error : (data.error.message || JSON.stringify(data.error));
        return { error: msg };
      }
      return { texto: data.choices?.[0]?.message?.content || null };
    } catch (e) {
      const esLocal = /localhost|127\.0\.0\.1|0\.0\.0\.0|192\.168\.|10\.\d+\.\d+\.\d+/.test(url);
      const pista = esLocal
        ? ' Revisa que el servidor local esté corriendo y que acepte conexiones de este origen (CORS) — en Ollama, por ejemplo, eso es la variable de entorno OLLAMA_ORIGINS=*.'
        : ' Revisa tu conexión, la URL y la clave.';
      return { error: 'No se pudo conectar.' + pista };
    }
  }
};
window.ModoOnline.cargar();
