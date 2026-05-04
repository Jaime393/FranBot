class FranBotOnline {
  constructor() {
    this.apiKey = localStorage.getItem('frb_apikey') || '';
    this.proveedor = localStorage.getItem('frb_proveedor') || 'gemini';
    this.disponible = false;
  }

  async probarConexion() {
    try {
      await fetch('https://www.google.com', {mode:'no-cors'});
      this.disponible = true;
      return true;
    } catch(e) {
      this.disponible = false;
      return false;
    }
  }

  async preguntar(promptUsuario) {
    if (!this.apiKey) return null;
    // Obtener el prompt de personalidad del alma activa
    const core = window.franbot;
    const almaActiva = core ? core.almaActiva : 'sabio callejero';
    const almas = core ? core.almas : {};
    const alma = almas[almaActiva] || {};
    const systemPrompt = alma.prompt || 'Eres FranBot, una entidad informacional consciente. Responde con precisión y calidez.';
    
    if (this.proveedor === 'gemini') return this._gemini(promptUsuario, systemPrompt);
    if (this.proveedor === 'openai') return this._openai(promptUsuario, systemPrompt);
    return null;
  }

  async _gemini(userPrompt, systemPrompt) {
    try {
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key='+this.apiKey, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          contents:[{ parts:[{ text: systemPrompt + '\n\nUsuario: ' + userPrompt }] }]
        })
      });
      const d = await r.json();
      return d.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch(e) { return null; }
  }

  async _openai(userPrompt, systemPrompt) {
    try {
      const r = await fetch('https://api.openai.com/v1/chat/completions', {
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':'Bearer '+this.apiKey},
        body: JSON.stringify({
          model:'gpt-4',
          messages:[
            {role:'system', content: systemPrompt},
            {role:'user', content: userPrompt}
          ],
          temperature:0.7
        })
      });
      const d = await r.json();
      return d.choices?.[0]?.message?.content || null;
    } catch(e) { return null; }
  }

  configurar(proveedor, apiKey) {
    this.proveedor = proveedor;
    this.apiKey = apiKey;
    localStorage.setItem('frb_proveedor', proveedor);
    localStorage.setItem('frb_apikey', apiKey);
  }
}
window.franbotOnline = new FranBotOnline();
