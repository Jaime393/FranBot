// Modo online placeholder
window.FranBotOnline = class {
  constructor(apiKey, modelo = 'gpt-4') { this.apiKey = apiKey; this.modelo = modelo; }
  async preguntar(prompt) { return "Modo online no configurado."; }
};