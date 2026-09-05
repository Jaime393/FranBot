// alimentar-worker.js — Web Worker para procesamiento de archivos en background
// No bloquea el hilo principal. Se comunica con app.js via postMessage.
//
// Mensajes entrantes { tipo:'procesar', texto, archivo, maxTrozos, cfgOnline }
// Mensajes salientes:
//   { tipo:'progreso',  i, total }
//   { tipo:'completo',  pares, trozosProcesados, totalOriginal }
//   { tipo:'error',     mensaje }

'use strict';

const TAM_TROZO = 1600;

function partirEnTrozos(texto) {
  const parrafos = texto.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
  const trozos = []; let actual = '';
  parrafos.forEach(p => {
    if ((actual + '\n\n' + p).length > TAM_TROZO && actual) {
      trozos.push(actual.trim()); actual = p;
    } else { actual = actual ? actual + '\n\n' + p : p; }
  });
  if (actual.trim()) trozos.push(actual.trim());
  return trozos;
}

function extraerOffline(trozo) {
  const oraciones = trozo.split(/(?<=[.!?])\s+/).filter(s => s.length > 25);
  if (!oraciones.length) return [];
  const primeras = oraciones[0].split(/\s+/).slice(0, 9).join(' ').replace(/[.,;:]$/,'');
  return [{ q: `¿Qué dice el texto sobre "${primeras}..."?`,
            a: trozo.length > 700 ? trozo.slice(0,700)+'…' : trozo,
            origen: 'local-worker' }];
}

async function extraerConAPI(trozo, archivo, cfg) {
  if (!cfg || !cfg.activo || !cfg.endpoint) return extraerOffline(trozo);
  const body = {
    model: cfg.modelo || 'llama3-8b-8192',
    max_tokens: 512,
    messages: [{
      role: 'user',
      content: 'Archivo: ' + (archivo||'') + '\n\nExtraes pares Q/A del texto. Responde SOLO con JSON array: [{"q":"...","a":"..."}].\n\nTexto:\n"""' + trozo + '"""'
    }]
  };
  if (cfg.systemPrompt) body.messages.unshift({ role:'system', content: cfg.systemPrompt });

  const headers = { 'Content-Type':'application/json' };
  if (cfg.apiKey) headers['Authorization'] = 'Bearer ' + cfg.apiKey;

  const resp = await fetch(cfg.endpoint, { method:'POST', headers, body: JSON.stringify(body) });
  if (!resp.ok) return extraerOffline(trozo);
  const data  = await resp.json();
  const texto = (data.choices?.[0]?.message?.content || data.content?.[0]?.text || '').trim();
  const limpio = texto.replace(/^```(json)?/i,'').replace(/```$/,'').trim();
  try {
    const arr = JSON.parse(limpio);
    if (!Array.isArray(arr)) return extraerOffline(trozo);
    return arr.filter(p => p && typeof p.q==='string' && typeof p.a==='string')
              .map(p => ({ q:p.q.trim(), a:p.a.trim(), origen:'worker-api' }));
  } catch(e) { return extraerOffline(trozo); }
}

self.onmessage = async function(e) {
  const { tipo, texto, archivo, maxTrozos, cfgOnline } = e.data || {};
  if (tipo !== 'procesar') return;

  try {
    let trozos = partirEnTrozos(texto || '');
    const totalOriginal = trozos.length;
    trozos = trozos.slice(0, maxTrozos || 14);

    const todos = [];
    for (let i = 0; i < trozos.length; i++) {
      self.postMessage({ tipo:'progreso', i: i+1, total: trozos.length });
      const pares = await extraerConAPI(trozos[i], archivo, cfgOnline);
      pares.forEach(p => todos.push(Object.assign({ archivo, t: Date.now() }, p)));
    }
    self.postMessage({ tipo:'completo', pares: todos,
                       trozosProcesados: trozos.length, totalOriginal });
  } catch(err) {
    self.postMessage({ tipo:'error', mensaje: err.message || String(err) });
  }
};
