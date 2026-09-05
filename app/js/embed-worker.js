// embed-worker.js — Worker de indexación semántica (Phase D.2)
// Corre en background fuera del hilo principal para no bloquear la UI.
//
// Protocolo de mensajes (postMessage):
//
//   → { tipo: 'iniciar', pares: [{id, q, a}, …], yaIndexados: Set<id>? }
//       Lanza la indexación del lote de pares NO indexados aún.
//       yaIndexados puede ser undefined/vacío — el worker indexa todo lo que recibe.
//
//   ← { tipo: 'progreso', indexados: N, total: T }
//       Progreso parcial (cada CHUNK_REPORT pares).
//
//   ← { tipo: 'lote', registros: [{id, emb: ArrayBuffer}, …] }
//       Lote de embeddings listo para persistir. El hilo principal llama
//       window.IDBStore.guardarEmbeddings(registros). Transferible (ArrayBuffers).
//
//   ← { tipo: 'error', mensaje: string }
//       Fallo no recuperable (modelo no disponible, etc.).
//
//   ← { tipo: 'fin', indexados: N }
//       Indexación completa.
//
// Estrategia Float16:
//   MiniLM-L6-v2 emite Float32Array de 384 dims. Los convertimos a Float16
//   (2 bytes × 384 = 768 bytes/par) para ahorrar ~50% de espacio en IDB.
//   Al leer, BuscarOraculo convierte Float16 → Float32 para el producto punto.
//   La pérdida de precisión de float32→float16 es irrelevante para similitud coseno.
//
// Tamaño máximo estimado: 50k pares × 768 B = ~37 MB en IDB.
//
// ⚠️ Este worker NO tiene acceso a window ni a IDBStore — comunica los ArrayBuffer
//    al hilo principal vía postMessage(transferible) para que él los persista.

'use strict';

// ─────────────── Constantes ───────────────────────────────────────────────────
const MODELO_URL = 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2';
const MODELO_ID  = 'Xenova/all-MiniLM-L6-v2';
const CHUNK_EMBED   = 16;   // pares a embedear en paralelo por ciclo
const CHUNK_REPORT  = 50;   // emitir progreso cada N pares
const CHUNK_PERSIST = 200;  // enviar lote al hilo principal para persistir cada N pares

// ─────────────── Float32 → Float16 (manual, sin WASM) ────────────────────────
// Suficientemente rápido para 384 dims × 50k pares en un worker.
function float32ToFloat16(val) {
  // Convierte un número float32 a su representación uint16 (IEEE 754 half precision).
  const buf = new ArrayBuffer(4);
  new Float32Array(buf)[0] = val;
  const bits = new Uint32Array(buf)[0];
  const sign = (bits >>> 31) & 0x1;
  let exp    = (bits >>> 23) & 0xff;
  let frac   = bits & 0x7fffff;

  if (exp === 0xff) {
    // NaN o Infinity
    return (sign << 15) | 0x7c00 | (frac ? 0x200 : 0);
  }
  exp -= 127; // desenbiasado
  if (exp < -14) {
    // Subnormal (flush to zero para simplificar)
    return sign << 15;
  }
  if (exp > 15) {
    // Overflow → Infinity
    return (sign << 15) | 0x7c00;
  }
  // Normal
  return (sign << 15) | ((exp + 15) << 10) | (frac >>> 13);
}

function encodeFloat16Array(f32) {
  const u16 = new Uint16Array(f32.length);
  for (let i = 0; i < f32.length; i++) u16[i] = float32ToFloat16(f32[i]);
  return u16.buffer; // ArrayBuffer transferible
}

// ─────────────── Estado del worker ───────────────────────────────────────────
let _pipeline = null; // transformers.js pipeline, null hasta que cargue

async function _cargarModelo() {
  const { pipeline } = await import(MODELO_URL);
  _pipeline = await pipeline('feature-extraction', MODELO_ID, {
    quantized: true, // ~6 MB en vez de 23 MB
  });
}

async function _embedTexto(texto) {
  const out = await _pipeline(texto, { pooling: 'mean', normalize: true });
  return out.data; // Float32Array de 384 dims (ya normalizada)
}

// ─────────────── Indexación principal ────────────────────────────────────────
async function indexar(pares, yaIndexados) {
  // Filtrar pares que ya tienen embedding en IDB (juego de ids)
  const pendientes = yaIndexados && yaIndexados.size > 0
    ? pares.filter(p => !yaIndexados.has(p.id))
    : pares;

  const total = pendientes.length;
  if (total === 0) {
    self.postMessage({ tipo: 'fin', indexados: 0 });
    return;
  }

  // Cargar modelo si no está listo
  try {
    if (!_pipeline) await _cargarModelo();
  } catch (e) {
    self.postMessage({ tipo: 'error', mensaje: 'No se pudo cargar el modelo: ' + (e.message || e) });
    return;
  }

  let indexados = 0;
  let loteActual = [];

  for (let i = 0; i < pendientes.length; i += CHUNK_EMBED) {
    const chunk = pendientes.slice(i, i + CHUNK_EMBED);

    // Embedear el chunk en paralelo
    const resultados = await Promise.all(chunk.map(async (par) => {
      try {
        // Concatenar q + a: el embedding del par completo da mejor recall que solo q
        const f32 = await _embedTexto((par.q || '') + ' ' + (par.a || ''));
        const emb = encodeFloat16Array(f32); // ArrayBuffer Float16
        return { id: par.id, emb };
      } catch (_e) {
        // Si falla un par concreto, retornar null para saltarlo
        return null;
      }
    }));

    resultados.forEach(r => { if (r) loteActual.push(r); });
    indexados += chunk.length;

    // Emitir progreso
    if (indexados % CHUNK_REPORT < CHUNK_EMBED) {
      self.postMessage({ tipo: 'progreso', indexados, total });
    }

    // Enviar lote al hilo principal para persistir (transferir ArrayBuffers)
    if (loteActual.length >= CHUNK_PERSIST) {
      const transferibles = loteActual.map(r => r.emb);
      self.postMessage({ tipo: 'lote', registros: loteActual }, transferibles);
      loteActual = [];
    }
  }

  // Enviar el resto
  if (loteActual.length > 0) {
    const transferibles = loteActual.map(r => r.emb);
    self.postMessage({ tipo: 'lote', registros: loteActual }, transferibles);
  }

  self.postMessage({ tipo: 'fin', indexados });
}

// ─────────────── Escucha de mensajes ─────────────────────────────────────────
self.onmessage = function (e) {
  const msg = e.data;
  if (!msg || msg.tipo !== 'iniciar') return;

  const pares       = msg.pares       || [];
  const yaIndexados = msg.yaIndexados ? new Set(msg.yaIndexados) : new Set();

  indexar(pares, yaIndexados).catch(err => {
    self.postMessage({ tipo: 'error', mensaje: 'Error en indexar(): ' + (err.message || err) });
  });
};
