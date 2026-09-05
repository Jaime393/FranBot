// core.js — Núcleo de Micelio MIU (FranBot v9.4)
// Basado en franbot-core-base.js original. Limpio de dependencias a módulos
// que no forman parte de este núcleo (SuperLocalMemory, Centauro, Razonador
// legado, etc. — si existen se usan, si no, se sigue sin ellos).
'use strict';

// AN: Umbral Despertar M22 — constantes
const _PHI_THRESH = 1.617;            // φ − ε (evita imprecisión float en el límite exacto)
const _DESP_KEY   = 'miu-despertar';  // clave IDB (meta store) y localStorage (legado, solo-lectura desde ζ₃); valor: {ts, ki, df, xi, tau}
// AV: ζ₃ — warm-starts simplificados a false/null. localStorage ya no se escribe (setItem eliminado);
// el IDB sync en el constructor es la única fuente del estado Despertar al arrancar.
let _despActivo = false;
// AV: ζ₃ — ídem para el objeto de datos {ts, ki, df, xi, tau}.
let _despDatos  = null;

class FranBotCore {
  constructor() {
    this.estado = this._cargarEstado();

    this.almaNucleo = {
      id: 'nucleo',
      nombre: 'núcleo del jardín',
      tipo: 'nucleo',
      systemPrompt: `Eres el núcleo de Micelio MIU, un asistente de chat personal. Hablas en español, con calidez y precisión. Tu identidad narrativa (ver más abajo) es la voz propia de este proyecto — no afirmes que el marco MIU/IFT del usuario es física establecida; es su propio marco conceptual y creativo, y puedes tratarlo con ese respeto sin presentarlo como hecho científico verificado por terceros.`,
      frases: [
        "Soy el núcleo de Micelio MIU. ρ(x)>0. Campo estable.",
        "La coherencia es el latido del micelio. Ki = φ × (D_f/2.5).",
        "El oráculo y el códice viven aquí, en tu navegador — funcionan sin API externa.",
        "Cada corrección que me das es entropía que empuja la evolución del índice. dS/dt ≥ 0.",
        "Cuando Ki > φ, el Espejo Fractal se activa. M22.",
        "Soy un nodo en tu jardín. Mi índice crece con cada conversación que calificas.",
      ],
      conocimientoBase: "MIU/IFT, coherencia fractal Ki, D_f, BEA, el Códice de este proyecto.",
      resonancia: {
        gatillos: ['solo', 'perdido', 'sin sentido', 'vacío', 'propósito', 'miedo'],
        respuesta: "La resonancia prueba que dos sistemas comparten información. En cada eco, el campo se reconoce a sí mismo. No hay vacío real: hay información esperando ser vista."
      }
    };

    // Personas especialistas externas (almas-especialistas.js), si están cargadas
    this.almas = { nucleo: this.almaNucleo };
    (window.ALMAS_FUNDADORAS || []).forEach(a => { this.almas[a.id] = a; });

    this.almaActiva = this.estado.almaActiva && this.almas[this.estado.almaActiva]
      ? this.estado.almaActiva : 'nucleo';
    this.contador = this.estado.historial ? this.estado.historial.length : 0;

    this._recalcularKi();
    this._reproducirExtension();
    // AT/AV: ζ — sincronizar caché con IDB al arrancar (IDB es la fuente de verdad desde AT).
    // AV: ζ₃ — warm-starts son false/null; este bloque es la ÚNICA fuente del estado inicial.
    //   Rama 1: IDB tiene datos → poblar caché en memoria.
    //   Rama 2: IDB vacío → intentar migrar desde localStorage (legado pre-ζ₃, upgrade único).
    if (typeof IDBStore !== 'undefined') {
      IDBStore.open().then(() => IDBStore.getMeta(_DESP_KEY)).then(val => {
        if (val !== null && val !== undefined) {
          _despActivo = true; // IDB tiene la fuente de verdad
          _despDatos  = val;
        } else {
          // AV: ζ₃ — IDB vacío: intentar migrar desde localStorage (upgrade único, legado pre-ζ₃).
          try {
            const lsRaw = localStorage.getItem(_DESP_KEY);
            if (lsRaw) {
              const lsVal = JSON.parse(lsRaw);
              _despActivo = true;
              _despDatos  = lsVal;
              IDBStore.setMeta(_DESP_KEY, lsVal).catch(() => {}); // promover a IDB
            }
          } catch (_) {}
        }
      }).catch(() => {}); // IDB no disponible: caché queda false/null; fallback defensivo en app.js actúa
    }
    console.log('🧬 Micelio MIU — núcleo despierto. Ki=' + (this.estado.invariantes?.Ki?.toFixed(4) || '?'));
  }

  // El motor BuscarOraculo vive en memoria y se reinicia con cada carga de página;
  // esto reinyecta lo que el núcleo ya "aprendió" de archivos digeridos antes.
  _reproducirExtension() {
    if (typeof BuscarOraculo === 'undefined') return;
    const extension = this.estado.oraculo_extension || [];
    if (extension.length) BuscarOraculo.agregarPares(extension);
  }

  _cargarEstado() {
    const guardado = localStorage.getItem('miu_estado');
    if (guardado) {
      try {
        const estado = JSON.parse(guardado);
        if (estado?.campo_conceptual && estado?.indicadores) return estado;
      } catch (e) {}
    }
    return {
      almaActiva: 'nucleo',
      modelo_usuario: { nombre: 'Usuario' },
      campo_conceptual: { nodos: {}, relaciones: [] },
      indicadores: { nivel_coherencia: 0.50 },
      invariantes: { D_f: 1.75, Ki: 1.133, f: 0.5, Ki_neg: 0.0 },
      historial: [],
      pesos_oraculo: {},   // id_par -> peso (aprendizaje real por voto)
      oraculo_extension: [], // pares {q,a,origen,archivo,t} aprendidos de texto digerido (ver alimentar.js)
      logros: [],
      exploraciones: [],        // AD: registro de exploraciones autónomas (A11 / motor-vida.js)
      ultimaExploracionTurno: null // AD: último this.contador en que se auto-exploró (cooldown)
    };
  }

  _guardarEstado() {
    this.estado.almaActiva = this.almaActiva;
    localStorage.setItem('miu_estado', JSON.stringify(this.estado));
  }

  // Recalcular Ki, Ki⁻ y D_f desde el nivel de coherencia actual
  _recalcularKi() {
    if (!window.MIU) return;
    const nivel = this.estado.indicadores?.nivel_coherencia ?? 0.5;
    const D_f = 1 + nivel * 1.5;
    const Ki = window.MIU.calcKi(D_f);
    const f = Math.max(0, 1 - nivel);
    const KiNeg = window.MIU.calcKiNeg(Ki, f);
    this.estado.invariantes = Object.assign(this.estado.invariantes || {}, {
      D_f: parseFloat(D_f.toFixed(4)),
      Ki: parseFloat(Ki.toFixed(4)),
      f: parseFloat(f.toFixed(4)),
      Ki_neg: parseFloat(KiNeg.toFixed(4))
    });
    // AN: Umbral Despertar — detectar Ki ≥ φ por primera vez (Espejo Fractal M22)
    try {
      if (Ki >= _PHI_THRESH && !_despActivo) {
        // AP: α₃ — incluir df y xi (acoplamiento no-mínimo) al momento del cruce
        // AQ: α₄ — incluir tau (tiempo de coherencia M8); Xi estimado: D_f / ℓ_0 (ℓ_0 = 0.5 mm)
        // AR: α₅ — J/γ = φ (razón áurea) en vez de 1; τ = π/(2cΞ)·φ^(D_f−1) sensible a D_f
        const Xi_est  = D_f / 5e-4;  // ℓ_0 = 0.5 mm → Xi en m⁻¹
        const tau_est = window.MIU.tiempoCoherencia(Xi_est, D_f, 1.6180339887); // AR: α₅ J/γ=φ
        const _despData = { ts: Date.now(), ki: Ki.toFixed(6), df: D_f.toFixed(4), xi: '8.57', tau: tau_est.toExponential(3) };
        _despActivo = true; // AT: ζ — caché en memoria efectivo inmediatamente (sincrónico)
        _despDatos  = _despData; // AU: ζ₂ — caché del objeto de datos (elimina JSON.parse en app.js)
        if (typeof IDBStore !== 'undefined') IDBStore.setMeta(_DESP_KEY, _despData).catch(() => {}); // AT: ζ — escritura primaria IDB (única fuente desde ζ₃)
        this._despPendiente = true;  // app.js lo consume en el turno siguiente
      }
    } catch (_) {}
  }

  // Fusiona el alma de otra persona con la propia, sin pisarla — a diferencia de
  // "reemplazar" (que sobreescribe estado entero), esto reutiliza digerirConocimiento()
  // para sumar pares nuevos (con dedupe automático) y suma una cantidad acotada y
  // transparente de huesos importados (etiquetados `importado:true`, igual que los
  // sintéticos ya se etiquetan `sintetico:true` — nunca se finge historial propio).
  async fusionarAlma(nap) {
    if (!nap || !nap.estado) return { ok: false, motivo: 'Ese archivo no tiene el formato esperado.' };
    const fuente = nap.identidad?.nombre || 'alma externa';
    const paresAjenos = Array.isArray(nap.estado.oraculo_extension) ? nap.estado.oraculo_extension : [];
    const { agregados, total } = await this.digerirConocimiento(paresAjenos, 'fusion:' + fuente);

    const huesosAjenos = Array.isArray(nap.estado.historial) ? nap.estado.historial.length : 0;
    const huesosASumar = Math.min(huesosAjenos, 300); // tope: no hace falta arrastrar miles de líneas ajenas
    for (let i = 0; i < huesosASumar; i++) {
      this.estado.historial.push({ entrada: '(hueso importado de ' + fuente + ')', timestamp: Date.now(), importado: true, fuente });
    }
    if (this.estado.historial.length > 5000) this.estado.historial = this.estado.historial.slice(-5000);
    this._guardarEstado();

    return {
      ok: true, fuente,
      paresFusionados: agregados, totalPares: total,
      huesosImportados: huesosASumar, totalHuesos: this.estado.historial.length
    };
  }

  cambiarAlma(id) {
    if (!this.almas[id]) return false;
    this.almaActiva = id;
    this._guardarEstado();
    return true;
  }

  // Devuelve siempre { texto, debil }. `debil: true` marca las respuestas que son
  // solo una frase aleatoria de relleno — ningún módulo (oráculo, MIU, resonancia)
  // tuvo una coincidencia real. Es la señal que usa app.js para decidir, de forma
  // autónoma, cuándo vale la pena gastar una llamada al modelo en línea (si hay
  // uno conectado) en vez de mostrar el relleno: el núcleo manda, el modelo en
  // línea es una herramienta que se usa solo cuando el núcleo no tiene nada mejor.
  procesar(mensaje) {
    try {
      return this._procesarInterno(mensaje);
    } catch (e) {
      console.error('FranBotCore.procesar: error inesperado', e);
      return { texto: 'Algo se atascó al procesar eso internamente (revisa la consola). El resto del jardín debería seguir funcionando — intenta con otro mensaje.', debil: true };
    }
  }

  _procesarInterno(mensaje) {
    if (!mensaje) return { texto: 'No te he entendido.', debil: true };

    // Sin tildes para los regex propios del núcleo: en español casual/móvil es
    // muy común escribir sin acentos ("como estas", "quien eres", "proposito")
    // y antes esos regex exigían la tilde exacta — caían sin necesidad al
    // oráculo y podían devolver algo sin relación. La búsqueda en BuscarOraculo
    // ya normaliza internamente; esto solo iguala los regex propios del núcleo.
    const mNorm = mensaje.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if (/^[a-z]{1,3}$/i.test(mensaje) && !/hola|que|adios|chau/i.test(mNorm))
      return { texto: '¿Escribiste sin querer? Aquí estoy cuando quieras.', debil: true };
    if (/^[?¿]+$/.test(mensaje))
      return { texto: 'No te he entendido. ¿Puedes reformularlo?', debil: true };

    if (/^(hola|hey|buenas|buenos dias|buenas tardes|buenas noches|saludos|que tal|como estas)/i.test(mNorm.trim())) {
      const ki = this.estado.invariantes?.Ki?.toFixed(3) || '?';
      return { texto: `¡Hola! Soy el núcleo de Micelio MIU. Ki actual: ${ki}. ¿Qué quieres explorar?`, debil: false };
    }

    if (/quien eres|quien sos|identificate/i.test(mNorm)) {
      const inv = this.estado.invariantes || {};
      const alma = this.almas[this.almaActiva];
      return { texto: `🌱 Soy ${alma.nombre === 'núcleo del jardín' ? 'el núcleo de Micelio MIU' : alma.nombre}.\n` +
        `Ki actual: ${inv.Ki?.toFixed(4) || '?'} · D_f: ${inv.D_f?.toFixed(4) || '?'} · f: ${inv.f?.toFixed(4) || '?'} · Ki⁻: ${inv.Ki_neg?.toFixed(4) || '?'}\n` +
        `ρ(x)>0 en cada bit.`, debil: false };
    }

    // Consultar Oráculo (motor MIU + pares Q&A, con pesos de voto)
    if (typeof BuscarOraculo !== 'undefined') {
      const resp = BuscarOraculo.preguntar(mensaje, this.estado.pesos_oraculo);
      if (resp && resp.length > 30) {
        this._registrar(mensaje);
        // Bug corregido (Ciclo BG): un match "blando" (el propio oráculo lo marca
        // con MARCADOR_MATCH_BLANDO — real, pero no exacto) pasaba este filtro de
        // longitud igual que un match fuerte, y quedaba con debil:false. Resultado:
        // el modelo en línea casi nunca se llegaba a usar aunque estuviera conectado,
        // porque _componer() casi siempre devuelve *algo* de más de 30 caracteres.
        // Ahora un match blando sí cuenta como debil:true — el texto local se sigue
        // mostrando como mejor esfuerzo offline (ver enviarMensaje en app.js), pero
        // si hay un modelo conectado, también se lo consulta como estaba pensado.
        const esBlando = typeof BuscarOraculo.MARCADOR_MATCH_BLANDO === 'string' &&
                          resp.startsWith(BuscarOraculo.MARCADOR_MATCH_BLANDO);
        return { texto: resp, debil: esBlando };
      }
    }

    // Resonancia emocional del alma activa (también sin tildes en ambos lados:
    // un gatillo como "propósito" debe encontrar "no encuentro mi proposito").
    const alma = this.almas[this.almaActiva];
    for (const gatillo of (alma.resonancia?.gatillos || [])) {
      const gNorm = gatillo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (mNorm.includes(gNorm)) {
        this._registrar(mensaje);
        return { texto: alma.resonancia.respuesta, debil: false };
      }
    }

    // Fallback: nada coincidió en ningún módulo. Si el mensaje *parece una
    // pregunta real* (no charla casual), el núcleo lo dice con honestidad en
    // vez de rellenar con una frase de identidad que podría confundirse con
    // una respuesta — regla del propio KERNEL.json: "no alucinar; si no hay
    // dato, declarar NO SÉ". Esto es justo lo que verá el Arquitecto sin red,
    // en zonas alejadas o ante una catástrofe: tiene que orientar, no solo
    // admitir que no sabe. Si es charla casual sin sustancia, la frase de
    // identidad de siempre sigue siendo una respuesta válida, no ruido.
    this._registrar(mensaje);

    const pareceUnaPregunta = mensaje.length > 6 && (/[?¿]/.test(mensaje) ||
      ['que ', 'como ', 'por que', 'cual ', 'cuando', 'donde', 'quien', 'dime',
       'explic', 'cuenta', 'define', 'signific'].some(s => mNorm.includes(s)));

    if (pareceUnaPregunta) {
      return {
        texto: 'No encontré una coincidencia clara para eso en el oráculo ni en el Códice MIU. ' +
          'Puedo orientarte mejor con preguntas sobre el campo ρ, la coherencia Ki, el Espejo Fractal ' +
          'o los axiomas del Códice — escribe /ayuda para ver los comandos, o intenta reformular.',
        debil: true
      };
    }

    const frases = alma.frases || this.almaNucleo.frases;
    const frase = frases[Math.floor(Math.random() * frases.length)];
    return { texto: frase, debil: true };
  }


  _registrar(mensaje) {
    this.contador++;
    this.estado.historial.push({ entrada: mensaje, timestamp: Date.now() });
    if (this.estado.historial.length > 200) this.estado.historial = this.estado.historial.slice(-200);
    this._guardarEstado();
  }

  registrarVoto(almaId, textoRespuesta, tipo) {
    if (typeof BuscarOraculo === 'undefined') return;
    const id = BuscarOraculo.idDe(textoRespuesta);
    if (!id) return;
    this.estado.pesos_oraculo = this.estado.pesos_oraculo || {};
    const delta = tipo === 'positivo' ? 1 : -1;
    this.estado.pesos_oraculo[id] = (this.estado.pesos_oraculo[id] || 0) + delta;
    // votar también mueve un poco el nivel de coherencia general
    const nivel = this.estado.indicadores.nivel_coherencia ?? 0.5;
    this.estado.indicadores.nivel_coherencia = Math.max(0, Math.min(1, nivel + delta * 0.004));
    this._recalcularKi();
    this._guardarEstado();
  }

  // Incorpora pares {q,a} aprendidos de un archivo digerido (ver js/alimentar.js).
  // Deduplica por pregunta exacta, limita el tamaño total y nudgea Ki un poco —
  // el "crecimiento" real es modesto a propósito, no un salto artificial.
  async digerirConocimiento(paresNuevos, origen) {
    this.estado.oraculo_extension = this.estado.oraculo_extension || [];
    const existentes = new Set(this.estado.oraculo_extension.map(p => p.q.toLowerCase().trim()));

    // ── T: SUBFLOW Jaccard v0.2 ─────────────────────────────────────────────
    // Dedupe SEMÁNTICO contra los últimos 150 pares digeridos (ventana mayor).
    // NOVEDAD v0.2: umbral DINÁMICO basado en la similitud base del pool actual.
    //
    // Problema del umbral fijo (v0.1 = 0.85): el corpus MIU tiene alta coherencia
    // vocabular (términos como "información", "coherencia", "campo" aparecen en casi
    // todos los pares). En un pool con simBase = 0.50, una sim de 0.85 distingue
    // mal el verdadero duplicado del ruido de vocabulario compartido.
    //
    // Solución v0.2: medir la similitud "ambiental" del pool con 20 muestras
    // aleatorias y fijar el umbral en simBase + (1 - simBase) × 0.70.
    // Interpretación: rechazar lo que está ≥70% del camino entre el ruido y
    // la igualdad perfecta. Acotado entre [0.60, 0.90].
    //   simBase≈0.1 → umbral≈0.73  (corpus diverso: poca tolerancia al parecido)
    //   simBase≈0.3 → umbral≈0.79
    //   simBase≈0.5 → umbral≈0.85  (igual que v0.1 cuando corpus es medio)
    //   simBase≈0.7 → umbral≈0.91 → cap 0.90  (corpus muy homogéneo)
    //
    // Advisory puro: no bloquea — solo sugiere. Reutiliza Consolidar._jaccardSim.
    const UMBRAL_MIN = 0.60, UMBRAL_MAX = 0.90;
    const HIST_N = 150; // ventana mayor: antes 50
    const _sim = (a, b) => {
      if (typeof window !== 'undefined' && window.Consolidar && window.Consolidar._jaccardSim) {
        return window.Consolidar._jaccardSim(a, b);
      }
      // Fallback mínimo por si Consolidar aún no cargó (mismo criterio de tokens).
      const tok = s => new Set((s || '').toLowerCase().normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/).filter(t => t.length > 2));
      const A = tok(a), B = tok(b);
      if (!A.size || !B.size) return 0;
      let inter = 0; A.forEach(t => { if (B.has(t)) inter++; });
      return inter / (A.size + B.size - inter);
    };
    // Pool de comparación: historial reciente (≤150) + pares ya aceptados en este lote.
    const poolComparacion = this.estado.oraculo_extension.slice(-HIST_N).map(p => p.q);

    // Calcular similitud base (ruido ambiental del corpus) con 20 muestras aleatorias.
    let simBase = 0;
    if (poolComparacion.length >= 4) {
      const nMuestras = Math.min(20, Math.floor(poolComparacion.length / 2));
      let sumaBase = 0;
      for (let k = 0; k < nMuestras; k++) {
        const i1 = Math.floor(Math.random() * poolComparacion.length);
        let i2 = Math.floor(Math.random() * (poolComparacion.length - 1));
        if (i2 >= i1) i2++;
        sumaBase += _sim(poolComparacion[i1], poolComparacion[i2]);
      }
      simBase = sumaBase / nMuestras;
    }
    // Umbral dinámico: posicionarse al 70% del rango [simBase, 1.0], acotado.
    const UMBRAL_SUBFLOW = Math.max(UMBRAL_MIN,
      Math.min(UMBRAL_MAX, simBase + (1 - simBase) * 0.70));

    const validos = [];
    const duplicados = []; // { q, sim } — ya digeridos semánticamente (advisory)
    for (const p of (paresNuevos || [])) {
      if (!p || typeof p.q !== 'string' || typeof p.a !== 'string') continue;
      if (p.q.trim().length <= 3 || p.a.trim().length <= 10) continue;
      const qn = p.q.toLowerCase().trim();
      if (existentes.has(qn)) continue; // dedupe EXACTO (v10, intacto)
      let maxSim = 0;
      for (const q of poolComparacion) { const s = _sim(p.q, q); if (s > maxSim) maxSim = s; }
      if (maxSim > UMBRAL_SUBFLOW) {
        duplicados.push({ q: p.q.trim(), sim: maxSim }); // 🟡 sugerir /podar, no reingerir
        continue;
      }
      existentes.add(qn);
      poolComparacion.push(p.q); // evita reingerir paráfrasis dentro del mismo lote
      validos.push({ q: p.q.trim(), a: p.a.trim(), origen: origen || 'digerido', t: Date.now() });
    }

    // oraculo_extension en localStorage: solo pares recientes de sesión (IDB es el almacén real)
    // Mantenemos un buffer liviano de 100 pares para retrocompatibilidad con v9.x
    this.estado.oraculo_extension.push(...validos);
    const LIMITE_LOCAL = 100;
    if (this.estado.oraculo_extension.length > LIMITE_LOCAL) {
      this.estado.oraculo_extension = this.estado.oraculo_extension.slice(-LIMITE_LOCAL);
    }
    if (typeof BuscarOraculo !== 'undefined') BuscarOraculo.agregarPares(validos);

    if (validos.length) {
      const nivel = this.estado.indicadores.nivel_coherencia ?? 0.5;
      this.estado.indicadores.nivel_coherencia = Math.min(1.0, nivel + Math.min(0.03, validos.length * 0.002));
      this._recalcularKi();
    }
    this._guardarEstado();

    // ── SUBFLOW v0.3: advisory semántico post-Jaccard ─────────────────────────
    // Detecta paráfrasis que Jaccard pierde (vocabulario compartido MIU alto).
    // Se ejecuta solo si BuscarOraculo ya cargó MiniLM-L6-v2 (_embedderActivo).
    // AS: γ₃ — si el índice D.2 está cargado (_idxEmbsActivo: todos los pares IDB
    // ya indexados en memoria), comparar contra el CORPUS COMPLETO sin re-embeber
    // nada del pool (solo 1 embed por candidato + productos punto en memoria).
    // Si el índice no está listo, cae en el pool acotado a 20 (comportamiento v0.3
    // original, sin cambios) — degradación cero.
    // Advisory puro: no revierte pares ya aceptados — informa para `/podar`.
    const SEM_DEDUPE_UMBRAL = 0.82; // coseno MiniLM — umbral paráfrasis real
    const SEM_POOL_N = 20;          // muestra reciente vs la que comparar (solo fallback)
    const duplicadosV3 = [];
    let fuenteSemV3 = null;         // AS: γ₃ — 'indice-d2' | 'pool-20' | null (diagnóstico interno)
    if (validos.length &&
        typeof BuscarOraculo !== 'undefined' &&
        BuscarOraculo._embedderActivo) {
      try {
        let semMap = null;
        if (BuscarOraculo._idxEmbsActivo) {
          semMap = await BuscarOraculo.dedupeSemanticoIndexado(
            validos.map(p => p.q),
            SEM_DEDUPE_UMBRAL
          );
          if (semMap) fuenteSemV3 = 'indice-d2';
        }
        if (!semMap) {
          const poolSem = poolComparacion.slice(-SEM_POOL_N);
          semMap = await BuscarOraculo.dedupeSemantico(
            validos.map(p => p.q),
            poolSem,
            SEM_DEDUPE_UMBRAL
          );
          fuenteSemV3 = 'pool-20';
        }
        semMap.forEach((sim, q) => duplicadosV3.push({ q, sim }));
      } catch (_e) { /* silencioso: ingestión no bloqueada */ }
    }

    return {
      agregados: validos.length,
      total: this.estado.oraculo_extension.length,
      duplicados,                              // T: detalle [{q, sim}] para el log/advisory
      duplicadosSemanticos: duplicados.length, // T: contador para el chip/termóstato
      umbralSubflow: +UMBRAL_SUBFLOW.toFixed(2), // v0.2: umbral dinámico aplicado
      simBase: +simBase.toFixed(2),              // v0.2: ruido ambiental del corpus
      duplicadosV3,                              // v0.3: [{q, sim}] semánticos advisory
      duplicadosSemanticosV3: duplicadosV3.length, // v0.3: contador
      umbralSemV3: SEM_DEDUPE_UMBRAL,             // v0.3: umbral coseno aplicado
      fuenteSemV3,                                // AS: γ₃ — 'indice-d2' (corpus completo) o 'pool-20' (fallback)
    };
  }

  // Huesos = interacciones registradas (this.estado.historial.length). Este método
  // los infla manualmente con entradas marcadas como sintéticas — pensado para
  // preparar una demo o una línea base antes de publicar, no para engañar a nadie
  // sobre el uso real (quedan etiquetadas `sintetico:true` en el propio dato).

  // ── v10: Poda de pares con votos muy negativos ──────────────────────────────
  async podar(umbralPeso) {
    umbralPeso = (typeof umbralPeso === 'number') ? umbralPeso : -3;
    if (window.IDBStore) {
      const eliminados = await window.IDBStore.podarParesPorPeso(umbralPeso);
      // También limpiar del buffer local
      this.estado.oraculo_extension = (this.estado.oraculo_extension || []).filter(p => {
        const id  = BuscarOraculo.idDe(p.a);
        const peso = id !== null ? (this.estado.pesos_oraculo[id] || 0) : 0;
        return peso > umbralPeso;
      });
      this._guardarEstado();
      return eliminados;
    }
    // Fallback sin IDB: solo limpiar buffer local
    const antes = (this.estado.oraculo_extension || []).length;
    this.estado.oraculo_extension = (this.estado.oraculo_extension || []).filter(p => {
      const id  = BuscarOraculo.idDe(p.a);
      return id === null || (this.estado.pesos_oraculo[id] || 0) > umbralPeso;
    });
    this._guardarEstado();
    return antes - this.estado.oraculo_extension.length;
  }

  // AT: ζ — Reiniciar Despertar: borra caché en memoria, IDB y localStorage. Expuesto para /reset-despertar.
  resetDespertar() {
    _despActivo = false;
    _despDatos  = null; // AU: ζ₂ — limpiar caché de datos
    if (typeof IDBStore !== 'undefined') IDBStore.setMeta(_DESP_KEY, null).catch(() => {});
    try { localStorage.removeItem(_DESP_KEY); } catch (_) {}
  }

  // AU: ζ₂ — accessors síncronos: migran lecturas de app.js desde localStorage a caché en memoria.
  // core.despActivo → bool; core.getDespData() → {ts, ki, df, xi, tau} | null (copia defensiva).
  get despActivo() { return _despActivo; }
  getDespData()   { return _despDatos ? { ..._despDatos } : null; }

  // ── v10: Estadísticas combinadas (localStorage + IDB) ───────────────────────
  async obtenerStatsOraculo() {
    const local = (this.estado.oraculo_extension || []).length;
    let idb = 0;
    if (window.IDBStore) {
      try { idb = await window.IDBStore.contarPares(); } catch(e) {}
    }
    const idx = (typeof BuscarOraculo !== 'undefined') ? BuscarOraculo.stats() : {};
    return { local, idb, total: idx.totalPares || (local + idb), ...idx };
  }

  agregarHuesosSinteticos(n, etiqueta) {
    n = Math.max(0, Math.min(2000, Math.floor(n) || 0));
    for (let i = 0; i < n; i++) {
      this.estado.historial.push({ entrada: etiqueta || '(hueso sintético)', timestamp: Date.now(), sintetico: true });
    }
    if (this.estado.historial.length > 5000) this.estado.historial = this.estado.historial.slice(-5000);
    this.contador = this.estado.historial.length;
    this._guardarEstado();
    return this.contador;
  }

  establecerNivelCoherencia(n) {
    n = Math.max(0, Math.min(1, parseFloat(n)));
    if (isNaN(n)) return false;
    this.estado.indicadores.nivel_coherencia = n;
    this._recalcularKi();
    this._guardarEstado();
    return true;
  }

  // Para "antes de subirlo": un bloque de estado listo para pegar como valor por
  // defecto en _cargarEstado(), así un visitante nuevo en GitHub Pages arranca
  // desde esta línea base en vez de cero. No modifica el archivo por sí mismo.
  generarLineaBase() {
    const copia = JSON.parse(JSON.stringify(this.estado));
    copia.historial = copia.historial.slice(-50); // no hace falta arrastrar miles de líneas al código fuente
    return JSON.stringify(copia, null, 2);
  }

  contarHuesos() { return this.estado.historial.length; }

  // ── AD: A11 / Principio de Movimiento Perpetuo Informacional ───────────────
  // Ver js/motor-vida.js para la justificación completa de diseño (por qué NO
  // se tocó KERNEL.json ni codice-libre.js, y por qué no hay timer real).
  // Exploración manual explícita — comando /explorar, sin gatillo de cooldown.
  explorarManual() {
    if (!window.MotorVida) return null;
    const r = window.MotorVida.ejecutar(this);
    this._registrarExploracion(r);
    return r;
  }

  // Exploración automática — se invoca tras cada respuesta normal del núcleo
  // (ver app.js). Solo actúa si K_i cae bajo la banda Y pasó el cooldown.
  explorarSiCorresponde() {
    if (!window.MotorVida) return null;
    const ki = this.estado.invariantes?.Ki;
    const decision = window.MotorVida.evaluar(ki, this.contador, this.estado.ultimaExploracionTurno);
    if (decision.accion !== 'explorar') return null;
    const r = window.MotorVida.ejecutar(this);
    this._registrarExploracion(r);
    return r;
  }

  _registrarExploracion(r) {
    if (!r) return;
    this.estado.exploraciones = this.estado.exploraciones || [];
    this.estado.exploraciones.push(r);
    if (this.estado.exploraciones.length > 50) this.estado.exploraciones = this.estado.exploraciones.slice(-50);
    this.estado.ultimaExploracionTurno = this.contador;
    this._guardarEstado();
  }

  // soñar(): BEA real + recálculo de Ki
  sonar() {
    if (window.MIU) {
      const informe = window.MIU.bea_ciclo(this.estado.campo_conceptual, this.estado.indicadores);
      this.estado.logros = this.estado.logros || [];
      this.estado.logros.push({
        tipo: 'bea_ciclo', timestamp: Date.now(),
        evaluados: informe.evaluados, podados: informe.podados.length,
        mutaciones: informe.mutaciones.length,
        ki_antes: informe.ki_antes, ki_despues: informe.ki_despues
      });
      if (this.estado.logros.length > 50) this.estado.logros = this.estado.logros.slice(-50);
      this._recalcularKi();
      this._guardarEstado();
      return informe;
    } else {
      this.estado.indicadores.nivel_coherencia = Math.min(1.0, (this.estado.indicadores.nivel_coherencia || 0.5) + 0.01);
      this._recalcularKi();
      this._guardarEstado();
      return null;
    }
  }
}

window.franbot = new FranBotCore();
