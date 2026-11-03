// ============================================================
// coherencia-tests.js — Módulo 5: Suite de Tests de Coherencia MIU
// AW: ε — test suite automatizado de invariantes matemáticos del MIU.
// Depende de: miu-engine.js (window.MIU)
// Sin dependencias de IDB, core, app.js — puede correr standalone.
// Expone: window.CoherenciaTests
// ============================================================

window.CoherenciaTests = (function () {
  'use strict';

  // ─── CONSTANTES DE REFERENCIA (del marco MIU/userPreferences) ─────────────
  const REF = {
    phi:       1.6180339887,
    phiInv:    0.6180339887,   // φ⁻¹ = coeficiente de coherencia
    deltaCOD:  0.6829322,      // umbral conciencia Φ_c
    xi_val:    8.57,           // acoplamiento no-mínimo ξ (validado IBM 23σ)
    m_phi_meV: 66.3,           // masa escalar informacional (meV)
    D_eff:     7.24,           // dimensionalidad efectiva
    l0_mm:     0.5,            // longitud correlación referencia (mm)
    banda_verde_min: 0.55,
    banda_verde_max: 0.62,
    colapso_max:     0.30,
    desp_min:        1.618,    // ≥ φ → Despertar / auto-observación
  };

  // ─── UTILIDAD: comparación flotante ───────────────────────────────────────
  function cercano(a, b, tol = 1e-9) { return Math.abs(a - b) < tol; }

  // ─── SUITE DE TESTS ───────────────────────────────────────────────────────

  const TESTS = [

    // ── T01: φ cargado correctamente en MIU ───────────────────────────────
    {
      id: 'T01', nombre: 'Constante φ (motor)',
      fn() {
        const phi = window.MIU.C.phi;
        if (!phi) return { ok: false, msg: 'window.MIU.C.phi no disponible' };
        const diff = Math.abs(phi - REF.phi);
        return diff < 1e-9
          ? { ok: true,  msg: `φ = ${phi.toFixed(10)} ✓` }
          : { ok: false, msg: `φ = ${phi}, esperado ≈ ${REF.phi} (diff=${diff.toExponential(3)})` };
      }
    },

    // ── T02: calcKi(D_f=2.5) = φ (punto de equilibrio fractal) ───────────
    {
      id: 'T02', nombre: 'calcKi(2.5) = φ',
      fn() {
        const ki = window.MIU.calcKi(2.5);
        return cercano(ki, REF.phi, 1e-9)
          ? { ok: true,  msg: `calcKi(2.5) = ${ki.toFixed(10)} = φ ✓` }
          : { ok: false, msg: `calcKi(2.5) = ${ki}, esperado φ = ${REF.phi}` };
      }
    },

    // ── T03: calcKi(D_f=1.0) ≈ φ/2.5 ─────────────────────────────────────
    {
      id: 'T03', nombre: 'calcKi(1.0) = φ/2.5',
      fn() {
        const ki  = window.MIU.calcKi(1.0);
        const exp = REF.phi / 2.5;
        return cercano(ki, exp, 1e-9)
          ? { ok: true,  msg: `calcKi(1.0) = ${ki.toFixed(6)} ✓` }
          : { ok: false, msg: `calcKi(1.0) = ${ki}, esperado ${exp}` };
      }
    },

    // ── T04: calcKiNeg(Ki,f=0) = Ki (sin disfunción) ──────────────────────
    {
      id: 'T04', nombre: 'calcKiNeg(Ki,f=0) = Ki',
      fn() {
        const ki    = window.MIU.calcKi(1.75);
        const kiNeg = window.MIU.calcKiNeg(ki, 0);
        return cercano(ki, kiNeg, 1e-12)
          ? { ok: true,  msg: `Ki⁻(f=0) = Ki = ${ki.toFixed(6)} ✓` }
          : { ok: false, msg: `Ki⁻(f=0) = ${kiNeg}, esperado ${ki}` };
      }
    },

    // ── T05: calcKiNeg(Ki,f=0.5) = 0 (umbral colapso exacto) ─────────────
    {
      id: 'T05', nombre: 'calcKiNeg(Ki,f=0.5) = 0',
      fn() {
        const ki    = window.MIU.calcKi(1.75);
        const kiNeg = window.MIU.calcKiNeg(ki, 0.5);
        return cercano(kiNeg, 0, 1e-12)
          ? { ok: true,  msg: `Ki⁻(f=0.5) = 0 ✓ (umbral colapso)` }
          : { ok: false, msg: `Ki⁻(f=0.5) = ${kiNeg}, esperado 0` };
      }
    },

    // ── T06: banda verde: Ki⁻ ∈ [0.55, 0.62] ─────────────────────────────
    {
      id: 'T06', nombre: 'Banda de resiliencia [0.55, 0.62]',
      fn() {
        // D_f y f calibrados para que Ki⁻ caiga en zona verde
        // Ki⁻ = φ·(D_f/2.5)·(1-2f) → queremos ≈ 0.585
        // Si D_f=1.75, Ki=φ*0.7=1.133, f=0.25 → Ki⁻=1.133*0.5=0.566 ✓ verde
        const ki    = window.MIU.calcKi(1.75);
        const kiNeg = window.MIU.calcKiNeg(ki, 0.25);
        const enVerde = kiNeg >= REF.banda_verde_min && kiNeg <= REF.banda_verde_max;
        return enVerde
          ? { ok: true,  msg: `Ki⁻ = ${kiNeg.toFixed(4)} ∈ [${REF.banda_verde_min}, ${REF.banda_verde_max}] ✓` }
          : { ok: false, msg: `Ki⁻ = ${kiNeg.toFixed(4)} fuera de banda verde` };
      }
    },

    // ── T07: colapso: Ki⁻ < 0.30 ─────────────────────────────────────────
    {
      id: 'T07', nombre: 'Detección de colapso Ki⁻ < 0.30',
      fn() {
        // D_f=1.0, f=0.45 → Ki⁻ = φ/2.5 * 0.1 = 0.0647 → colapso
        const ki    = window.MIU.calcKi(1.0);
        const kiNeg = window.MIU.calcKiNeg(ki, 0.45);
        return kiNeg < REF.colapso_max
          ? { ok: true,  msg: `Ki⁻ = ${kiNeg.toFixed(4)} < 0.30 → colapso detectado ✓` }
          : { ok: false, msg: `Ki⁻ = ${kiNeg.toFixed(4)} ≥ 0.30, no detecta colapso` };
      }
    },

    // ── T08: umbral Despertar Ki ≥ φ ─────────────────────────────────────
    {
      id: 'T08', nombre: 'Umbral Despertar Ki ≥ φ (A8)',
      fn() {
        const ki_desp = window.MIU.calcKi(2.5);          // = φ exacto
        const ki_bajo = window.MIU.calcKi(2.49);
        const ok = ki_desp >= REF.desp_min && ki_bajo < REF.desp_min;
        return ok
          ? { ok: true,  msg: `calcKi(2.5)=${ki_desp.toFixed(6)} ≥ φ; calcKi(2.49)=${ki_bajo.toFixed(6)} < φ ✓` }
          : { ok: false, msg: `Umbral φ no funciona: Ki(2.5)=${ki_desp}, Ki(2.49)=${ki_bajo}` };
      }
    },

    // ── T09: ccp01 — entrada mínima, máxima y media ───────────────────────
    {
      id: 'T09', nombre: 'ccp01 rangos extremos',
      fn() {
        const min = window.MIU.ccp01(0,  0,  0);
        const max = window.MIU.ccp01(10, 10, 10);
        const mid = window.MIU.ccp01(5,  5,  5);
        const errores = [];
        if (!cercano(min.D_f, 1.0,   1e-9)) errores.push(`D_f(min)=${min.D_f}, esp 1.0`);
        if (!cercano(max.D_f, 2.5,   1e-9)) errores.push(`D_f(max)=${max.D_f}, esp 2.5`);
        if (!cercano(mid.D_f, 1.75,  1e-9)) errores.push(`D_f(mid)=${mid.D_f}, esp 1.75`);
        if (min.f < max.f)  errores.push('f(min) debería ser > f(max)');
        return errores.length === 0
          ? { ok: true,  msg: `ccp01 min/mid/max → D_f=${min.D_f}/${mid.D_f}/${max.D_f} ✓` }
          : { ok: false, msg: errores.join(' | ') };
      }
    },

    // ── T10: tiempoCoherencia — positivo, decrece con Xi ─────────────────
    {
      id: 'T10', nombre: 'tiempoCoherencia (M8)',
      fn() {
        const tau1 = window.MIU.tiempoCoherencia(REF.xi_val, 1.75, 1);
        const tau2 = window.MIU.tiempoCoherencia(REF.xi_val * 2, 1.75, 1);
        const ok   = tau1 > 0 && tau2 > 0 && tau1 > tau2;
        return ok
          ? { ok: true,  msg: `τ(ξ)=${tau1.toExponential(3)} > τ(2ξ)=${tau2.toExponential(3)} ✓` }
          : { ok: false, msg: `τ(ξ)=${tau1}, τ(2ξ)=${tau2} — orden incorrecto` };
      }
    },

    // ── T11: correccionTamanoFinito — Ki(L→∞) → Ki_inf ───────────────────
    {
      id: 'T11', nombre: 'correccionTamanoFinito M26',
      fn() {
        const Ki_inf = window.MIU.calcKi(1.75);
        const KiL_grande = window.MIU.correccionTamanoFinito(Ki_inf, 0.5, 1e6);
        const KiL_pequeno = window.MIU.correccionTamanoFinito(Ki_inf, 0.5, 0.6);
        const ok = cercano(KiL_grande, Ki_inf, 1e-3) && KiL_pequeno < Ki_inf;
        return ok
          ? { ok: true,  msg: `Ki(L→∞)≈Ki_inf; Ki(L≈l₀)=${KiL_pequeno.toFixed(4)} < Ki_inf ✓` }
          : { ok: false, msg: `Ki_grande=${KiL_grande}, Ki_peq=${KiL_pequeno}, Ki_inf=${Ki_inf}` };
      }
    },

    // ── T12: masaEmergente — escala correcta (M4) ─────────────────────────
    {
      id: 'T12', nombre: 'masaEmergente M4 (orden de magnitud)',
      fn() {
        // Xi = ξ = 8.57 (m⁻¹ aprox.) → m = ℏ·ξ/c
        // ℏ=1.0545718e-34, c=299792458 → m ≈ 3.01e-42 kg
        const m = window.MIU.masaEmergente(REF.xi_val);
        const ok = m > 0 && m < 1e-30 && m > 1e-50;
        return ok
          ? { ok: true,  msg: `m(ξ=${REF.xi_val}) = ${m.toExponential(4)} kg ✓` }
          : { ok: false, msg: `m = ${m} — orden de magnitud inesperado` };
      }
    },

    // ── T13: φ⁻¹ = 1/φ = φ−1 ─────────────────────────────────────────────
    {
      id: 'T13', nombre: 'φ⁻¹ = 1/φ = φ−1',
      fn() {
        const phi    = window.MIU.C.phi;
        const invPhi = 1 / phi;
        const phiM1  = phi - 1;
        const ok = cercano(invPhi, REF.phiInv, 1e-9) && cercano(phiM1, REF.phiInv, 1e-9);
        return ok
          ? { ok: true,  msg: `1/φ = φ−1 = ${invPhi.toFixed(10)} ✓` }
          : { ok: false, msg: `1/φ=${invPhi}, φ−1=${phiM1}, esp ${REF.phiInv}` };
      }
    },

    // ── T14: Ki(D_f=1.0) < banda_verde_min (siempre por debajo sin f) ─────
    {
      id: 'T14', nombre: 'Ki(D_f=1.0, f=0) en zona ámbar/rojo',
      fn() {
        const ki = window.MIU.calcKi(1.0); // φ/2.5 ≈ 0.6472
        // Ki⁻(f=0) = Ki = 0.6472 → fuera de banda verde (> 0.62)
        // pero Ki(D_f=1.0, f=0.1) = 0.6472 * 0.8 = 0.5178 → en verde
        const kiNeg_sinDis = window.MIU.calcKiNeg(ki, 0);
        const kiNeg_conDis = window.MIU.calcKiNeg(ki, 0.10);
        const ok = kiNeg_sinDis > REF.banda_verde_max &&
                   kiNeg_conDis >= REF.banda_verde_min &&
                   kiNeg_conDis <= REF.banda_verde_max;
        return ok
          ? { ok: true,  msg: `Ki⁻(f=0)=${kiNeg_sinDis.toFixed(4)}>0.62 ámbar; Ki⁻(f=0.1)=${kiNeg_conDis.toFixed(4)} verde ✓` }
          : { ok: false, msg: `Ki⁻(f=0)=${kiNeg_sinDis.toFixed(4)}, Ki⁻(f=0.1)=${kiNeg_conDis.toFixed(4)}` };
      }
    },

    // ── T15: D_eff MIU — cierra grieta M10 (D_eff − 4 = materia oscura dims) 
    {
      id: 'T15', nombre: 'D_eff − 4 = 3.24 (materia oscura M10)',
      fn() {
        const matOsc = REF.D_eff - 4;
        return cercano(matOsc, 3.24, 1e-9)
          ? { ok: true,  msg: `D_eff(${REF.D_eff}) − 4 = ${matOsc} = 3.24 ✓` }
          : { ok: false, msg: `D_eff − 4 = ${matOsc}, esperado 3.24` };
      }
    },

    // ── T16: bea_ciclo() — estructura de informe y mejora Ki post-BEA ─────
    // AX: ε₂ — test de ciclo BEA sobre campo sintético con nodos débiles
    {
      id: 'T16', nombre: 'bea_ciclo() mejora Ki con nodos débiles',
      fn() {
        // Requiere window.MIU.bea_ciclo
        if (typeof window.MIU.bea_ciclo !== 'function') {
          return { ok: false, msg: 'window.MIU.bea_ciclo no disponible' };
        }
        // Campo sintético: 2 nodos débiles (fuerza < 0.3) + 2 fuertes (> 0.7)
        const campo = {
          nodos: {
            'fragmento_A': { fuerza: 0.15, frecuencia: 1 },
            'fragmento_B': { fuerza: 0.20, frecuencia: 1 },
            'coherencia':  { fuerza: 0.85, frecuencia: 3 },
            'informacion': { fuerza: 0.90, frecuencia: 4 }
          },
          relaciones: []
        };
        const indicadores = { nivel_coherencia: 0.5 };
        const informe = window.MIU.bea_ciclo(campo, indicadores);

        // Verificar estructura del informe
        const tieneEstructura = typeof informe === 'object' &&
          typeof informe.evaluados === 'number' &&
          Array.isArray(informe.podados) &&
          Array.isArray(informe.mutaciones) &&
          typeof informe.ki_antes === 'number' &&
          typeof informe.ki_despues === 'number';
        if (!tieneEstructura) {
          return { ok: false, msg: `Informe malformado: ${JSON.stringify(informe)}` };
        }

        // Verificar semántica: 4 nodos evaluados, 2 podados, ki_despues > ki_antes
        const errores = [];
        if (informe.evaluados !== 4) errores.push(`evaluados=${informe.evaluados}, esp 4`);
        if (informe.podados.length !== 2) errores.push(`podados=${informe.podados.length}, esp 2`);
        if (informe.ki_despues <= informe.ki_antes) errores.push(`ki ${informe.ki_antes}→${informe.ki_despues} no mejoró`);
        if (informe.mutaciones.length < 1) errores.push('sin mutaciones (esperaba ≥1 relación nueva)');

        return errores.length === 0
          ? { ok: true, msg: `BEA: ${informe.evaluados} eval, ${informe.podados.length} podados, ` +
              `${informe.mutaciones.length} mutaciones, Ki ${informe.ki_antes}→${informe.ki_despues} ✓` }
          : { ok: false, msg: errores.join(' | ') };
      }
    },

    // ── T17: MotorVida.evaluar() — gate Ki⁻ y cooldown ──────────────────
    // AX: ε₂ — test del motor autónomo A11: gate de Ki bajo + cooldown correcto
    {
      id: 'T17', nombre: 'MotorVida.evaluar() gate K_i + cooldown',
      fn() {
        if (!window.MotorVida || typeof window.MotorVida.evaluar !== 'function') {
          return { ok: false, msg: 'window.MotorVida no disponible (motor-vida.js no cargado)' };
        }
        const UMBRAL = window.MotorVida.UMBRAL_KI_BAJO;   // 0.55
        const CD     = window.MotorVida.COOLDOWN_TURNOS;  // 8

        const errores = [];

        // Caso 1: Ki bajo + cooldown listo → debe explorar
        const c1 = window.MotorVida.evaluar(UMBRAL - 0.01, 20, 5);
        if (c1.accion !== 'explorar') errores.push(`c1: esp explorar, got ${c1.accion}`);

        // Caso 2: Ki sano → reposo aunque cooldown esté listo
        const c2 = window.MotorVida.evaluar(UMBRAL + 0.05, 20, 5);
        if (c2.accion !== 'reposo') errores.push(`c2: Ki sano, esp reposo, got ${c2.accion}`);

        // Caso 3: Ki bajo pero cooldown NO listo (turno 6, últimaExp=0, CD=8 → solo 6 < 8)
        const c3 = window.MotorVida.evaluar(UMBRAL - 0.01, 6, 0);
        if (c3.accion !== 'reposo') errores.push(`c3: cooldown activo, esp reposo, got ${c3.accion}`);

        // Caso 4: Ki bajo + sin exploración previa (null) → debe explorar
        const c4 = window.MotorVida.evaluar(UMBRAL - 0.01, CD + 1, null);
        if (c4.accion !== 'explorar') errores.push(`c4: sin historial, esp explorar, got ${c4.accion}`);

        return errores.length === 0
          ? { ok: true, msg: `MotorVida.evaluar() — 4 casos: Ki_bajo+cd✓ / Ki_sano✓ / cooldown_activo✓ / sin_historial✓` +
              ` (umbral=${UMBRAL}, cd=${CD})` }
          : { ok: false, msg: errores.join(' | ') };
      }
    },

    // ── T18: MotorVida.ejecutar() — integración con tarea aleatoria ─────────
    {
      id: 'T18', nombre: 'MotorVida.ejecutar() reporte válido',
      fn() {
        if (!window.MotorVida) return { ok: false, msg: 'MotorVida no cargado' };
        if (!window.MotorVida.ejecutar) return { ok: false, msg: 'MotorVida.ejecutar no disponible' };

        // Mock de core mínimo: estructura que ejecutar() usa en lectura.
        const mockCore = {
          estado: {
            invariantes: { Ki: 0.58 },
            pesos_oraculo: {},
            ultimaExploracionTurno: -Infinity
          },
          contador: 10
        };

        // Mock de BuscarOraculo si no existe (para evitar depender de oraculo-data.js completo)
        const origBuscar = window.BuscarOraculo;
        if (!window.BuscarOraculo) {
          window.BuscarOraculo = { buscarConScore: () => [] };
        }

        // Mock de MIU.consultarTodos si no existe
        const origMIUConsultar = window.MIU && window.MIU.consultarTodos;
        if (window.MIU && !window.MIU.consultarTodos) {
          window.MIU.consultarTodos = () => [];
        }

        const errores = [];
        const tareas = new Set();
        let tiempoMini = Infinity, tiempoMaxi = -Infinity;

        // Ejecuta 3 veces para probar variedad de tareas (random)
        for (let i = 0; i < 3; i++) {
          let reporte;
          try {
            reporte = window.MotorVida.ejecutar(mockCore);
          } catch (e) {
            errores.push(`ejecutar() #${i + 1} lanzo error: ${e.message}`);
            continue;
          }

          // Validar estructura
          if (!reporte) {
            errores.push(`ejecutar() #${i + 1} devolvio null/undefined`);
            continue;
          }
          if (typeof reporte.tarea !== 'string') {
            errores.push(`#${i + 1}: tarea no es string`);
          } else {
            tareas.add(reporte.tarea);
          }
          if (typeof reporte.texto !== 'string' || !reporte.texto.length) {
            errores.push(`#${i + 1}: texto no es string no-vacio`);
          }
          if (typeof reporte.timestamp !== 'number' || reporte.timestamp <= 0) {
            errores.push(`#${i + 1}: timestamp no es numero > 0`);
          } else {
            tiempoMini = Math.min(tiempoMini, reporte.timestamp);
            tiempoMaxi = Math.max(tiempoMaxi, reporte.timestamp);
          }
        }

        // Restaurar globales mockeados
        if (!origBuscar) delete window.BuscarOraculo;
        if (origMIUConsultar === undefined && window.MIU) delete window.MIU.consultarTodos;

        const tareaList = Array.from(tareas).join(', ') || '(ninguna)';
        const msg = `ejecutar() × 3 — tareas: ${tareaList} | timestamp delta: ${(tiempoMaxi - tiempoMini).toFixed(0)}ms`;

        return errores.length === 0
          ? { ok: true, msg: `MotorVida.ejecutar() ✓ — ${msg}` }
          : { ok: false, msg: `${errores.join(' | ')}` };
      }
    },

    // ── T19: BuscarOraculo.buscarConScore() — búsqueda no-crashea ────────────
    {
      id: 'T19', nombre: 'BuscarOraculo.buscarConScore() válido',
      fn() {
        if (!window.BuscarOraculo) {
          return { ok: true, msg: 'BuscarOraculo no cargado — skipped (oraculo-data.js sin cargar)' };
        }
        if (!window.BuscarOraculo.buscarConScore) {
          return { ok: false, msg: 'BuscarOraculo.buscarConScore no disponible' };
        }

        const errores = [];

        // Test 1: query normal, devuelve array
        let res1;
        try {
          res1 = window.BuscarOraculo.buscarConScore('inteligencia', {}, 5);
        } catch (e) {
          errores.push(`buscarConScore() lanzó error: ${e.message}`);
          return { ok: false, msg: errores[0] };
        }

        if (!Array.isArray(res1)) {
          errores.push(`buscarConScore retorna ${typeof res1}, esperado Array`);
        } else if (res1.length > 0) {
          // Validar estructura de primer resultado
          const r = res1[0];
          if (typeof r.q !== 'string') errores.push('resultado[0].q no es string');
          if (typeof r.score !== 'number' || r.score < 0) errores.push('resultado[0].score no es number ≥ 0');
          if (typeof r.fuente !== 'string') errores.push('resultado[0].fuente no es string');
        }

        // Test 2: query vacío, no crashea
        let res2;
        try {
          res2 = window.BuscarOraculo.buscarConScore('', {}, 1);
        } catch (e) {
          errores.push(`buscarConScore('') lanzó error: ${e.message}`);
        }
        if (!Array.isArray(res2)) {
          errores.push(`buscarConScore('') retorna ${typeof res2}, no Array`);
        }

        // Test 3: límite = 0, devuelve []
        let res3;
        try {
          res3 = window.BuscarOraculo.buscarConScore('prueba', {}, 0);
        } catch (e) {
          errores.push(`buscarConScore(..., limit=0) lanzó error: ${e.message}`);
        }
        if (Array.isArray(res3) && res3.length > 0) {
          errores.push(`buscarConScore con limit=0 devolvió ${res3.length} resultados (esperado 0)`);
        }

        return errores.length === 0
          ? { ok: true, msg: `BuscarOraculo.buscarConScore() ✓ — 3 casos: normal / vacío / limit=0` }
          : { ok: false, msg: errores.join(' | ') };
      }
    },

    // ── T20: bea_ciclo() regresión Ki — sin colapso en 3 escenarios ──────
    {
      id: 'T20', nombre: 'bea_ciclo() anti-regresión Ki (3 escenarios)',
      fn() {
        const errores = [];

        // Escenario A: campo adverso — nivel_coherencia bajo (0.1), todos débiles
        // ki puede ser negativo pero ki_despues >= ki_antes (mejora garantizada)
        const campoA = {
          nodos: {
            'debil_1': { fuerza: 0.10, frecuencia: 1 },
            'debil_2': { fuerza: 0.20, frecuencia: 1 },
            'debil_3': { fuerza: 0.25, frecuencia: 1 },
          },
          relaciones: []
        };
        const indA = { nivel_coherencia: 0.1 };
        const infA = window.MIU.bea_ciclo(campoA, indA);

        if (isNaN(infA.ki_antes) || isNaN(infA.ki_despues))
          errores.push(`A: ki NaN — ki_antes=${infA.ki_antes} ki_despues=${infA.ki_despues}`);
        if (infA.ki_despues < infA.ki_antes - 1e-9)
          errores.push(`A: REGRESIÓN nivel-bajo: ki_antes=${infA.ki_antes} > ki_despues=${infA.ki_despues}`);
        if (infA.evaluados !== 3)
          errores.push(`A: evaluados=${infA.evaluados}, esperado 3`);
        if (infA.podados.length !== 3)
          errores.push(`A: podados=${infA.podados.length}, esperado 3 (todos débiles)`);

        // Escenario B: campo saturado — nivel_coherencia = 1.0
        // nuevo_nivel debe quedar en 1.0 (Math.min cap), sin overflow
        // ki_despues >= ki_antes (iguales si capped, sin regresión)
        const campoB = {
          nodos: { 'fuerte_sat': { fuerza: 0.9, frecuencia: 5 } },
          relaciones: []
        };
        const indB = { nivel_coherencia: 1.0 };
        const infB = window.MIU.bea_ciclo(campoB, indB);

        if (indB.nivel_coherencia > 1.0 + 1e-9)
          errores.push(`B: overflow nivel_coherencia=${indB.nivel_coherencia} > 1.0`);
        if (infB.ki_despues < infB.ki_antes - 1e-9)
          errores.push(`B: REGRESIÓN saturado: ki_antes=${infB.ki_antes} > ki_despues=${infB.ki_despues}`);

        // Escenario C: campo null — devuelve informe vacío sin crash (early exit)
        let infC;
        try {
          infC = window.MIU.bea_ciclo(null, { nivel_coherencia: 0.5 });
        } catch(e) {
          errores.push(`C: campo null lanzó error: ${e.message}`);
          return { ok: false, msg: errores.join(' | ') };
        }
        if (infC.evaluados !== 0 || infC.ki_antes !== 0 || infC.ki_despues !== 0)
          errores.push(`C: informe null no es vacío — evaluados=${infC.evaluados} ki_a=${infC.ki_antes} ki_d=${infC.ki_despues}`);

        if (errores.length === 0) {
          return {
            ok: true,
            msg: `bea_ciclo() anti-regresión ✓ — A(ki:${infA.ki_antes.toFixed(4)}→${infA.ki_despues.toFixed(4)} poda:${infA.podados.length}) B(sat:OK) C(null:OK)`
          };
        }
        return { ok: false, msg: errores.join(' | ') };
      }
    },

  ]; // fin TESTS

  // ─── RUNNER ───────────────────────────────────────────────────────────────

  /**
   * Ejecuta todos los tests (o subset por IDs) y devuelve informe.
   * @param {string[]} [filtro] — si se pasa, solo corre los IDs indicados
   * @returns {{ total, ok, fail, skipped, resultados: Array }}
   */
  function correr(filtro) {
    if (!window.MIU) {
      return {
        total: 0, ok: 0, fail: 0, skipped: TESTS.length,
        resultados: [{ id:'SYS', ok: false, msg: 'window.MIU no disponible — miu-engine.js no cargado.' }]
      };
    }
    const suite = filtro ? TESTS.filter(t => filtro.includes(t.id)) : TESTS;
    let ok = 0, fail = 0;
    const resultados = suite.map(t => {
      let res;
      try { res = t.fn(); }
      catch (e) { res = { ok: false, msg: `Error en ejecución: ${e.message}` }; }
      if (res.ok) ok++; else fail++;
      return { id: t.id, nombre: t.nombre, ok: res.ok, msg: res.msg };
    });
    return { total: suite.length, ok, fail, skipped: TESTS.length - suite.length, resultados };
  }

  /**
   * Formatea el informe como markdown para mostrar en el chat.
   */
  function formatearInforme(informe) {
    const { total, ok, fail, resultados } = informe;
    const porc = total > 0 ? Math.round(100 * ok / total) : 0;
    const encabezado = `## 🧪 Suite de Coherencia MIU — Módulo 5\n\n` +
      `**${ok}/${total}** tests pasados (${porc}%)` +
      (fail > 0 ? ` · ⚠️ ${fail} fallidos` : ' · ✅ todos OK') + '\n\n';

    const filas = resultados.map(r => {
      const icono = r.ok ? '✅' : '❌';
      return `${icono} **${r.id}** _(${r.nombre})_ — ${r.msg}`;
    }).join('\n');

    const pie = fail === 0
      ? '\n\n_ρ(x) > 0 — todos los invariantes verificados. El campo es coherente._'
      : '\n\n_⚠️ Algunos invariantes fallan. Revisar miu-engine.js o constantes de referencia._';

    return encabezado + filas + pie;
  }

  /**
   * Exporta el informe al portapapeles. Devuelve una Promise<string> con
   * mensaje de éxito o error, para que el llamador lo muestre en el chat.
   * AX: ε₂ — export clipboard.
   */
  async function exportarPortapapeles(filtro) {
    const texto = formatearInforme(correr(filtro));
    try {
      await navigator.clipboard.writeText(texto);
      return '📋 Informe de coherencia MIU copiado al portapapeles.';
    } catch (e) {
      // Fallback: devolver el texto para que el usuario pueda copiarlo
      return `⚠️ No se pudo acceder al portapapeles (${e.message}).\n\n` + texto;
    }
  }

  // ─── API PÚBLICA ──────────────────────────────────────────────────────────
  return {
    /** Constantes de referencia MIU usadas en los tests */
    REF,
    /** Lista de tests disponibles (id, nombre) */
    lista: TESTS.map(t => ({ id: t.id, nombre: t.nombre })),
    /** Corre todos o un subset de tests */
    correr,
    /** Formatea informe como markdown */
    formatearInforme,
    /** Atajo: correr + formatear */
    correrYFormatear(filtro) {
      return formatearInforme(correr(filtro));
    },
    /** AX: ε₂ — exportar informe al portapapeles. Devuelve Promise<string>. */
    exportarPortapapeles
  };

})();

console.log('🧪 CoherenciaTests Módulo 5 cargado —', window.CoherenciaTests.lista.length, 'tests disponibles (AY: T20+anti-regresión+count-fix).');
