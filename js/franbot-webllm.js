// WebLLM para inferencia local
(async () => {
  if (!window.mlc || !navigator.gpu) return;
  const engine = await mlc.createMLCEngine({ model: 'gemma-2b-it-q4f16_1', temperature: 0.7 });
  window.franbotLLM = async (p) => (await engine.chat.completions.create({ messages: [{ role: 'user', content: p }] })).choices[0].message.content;
})();