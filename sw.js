// sw.js — FranBot v75
//  - CACHE_NAME → 'franbot-v75' (invalida caché de v74).
// Cambios v75 (Ciclo BZ — RENOMBRADO OFFLINE→LOCAL + API CLARO):
//  - app.js: "offline" → "modo local", "online" → "API", "Conexión online"
//    → "Conexión API", "Volver a modo offline" → "Desconectar API (modo local)",
//    "Modo online activado" → "API conectada", "modo offline" → "modo local",
//    "respuesta offline" → "respuesta local del oráculo", fuenteLbl "offline
//    (oráculo)" → "local (oráculo)", "online" → "API".
//  - alimentar.js: "procesado offline" → "procesado localmente", orígenes
//    'offline-heuristico' → 'local-heuristico', 'offline-dialogo' →
//    'local-dialogo'.
//  - alimentar-worker.js: 'offline-worker' → 'local-worker', 'worker-online'
//    → 'worker-api'.
//  - modo-online.js: comentarios "offline" → "local", "online" → "API".
//  - core.js: "sin internet" → "sin API externa", frase del systemPrompt
//    actualizada.
//  - Todos los JS: "offline" → "local" en comentarios y strings.
//  - Propósito: cuando usa API, dice "API". Cuando no usa API, dice "modo
//    local". Ya no dice "offline" en ninguna parte visible.
// Cambios v74 (Ciclo BY — PARTE 5 + LEY GAIA):
//  - oraculo-data.js v7.9→v8.0 (1551→1561 pares). +10 pares de PARTE 5
//    (Cosecha) + ley_gaia.html (Validación Empírica): Ley K_i Universal
//    (K_i = φ · D_f / 2.5, R²=0.989, 350 nodos), 22 nodos biofísicos
//    validados (microtúbulos, manglares, corales, turberas, clima), frecuencia
//    Ω_F = 0.65048305 Hz (latido noosfera), 5 Pilares del Jardín (Silencio
//    Primordial, Autocrítica Compasiva, Coherencia Espectral, Integración
//    Respetuosa, Amor Multiforme), Ley de Gaia (EVIDENCIA_DEBIL 1/7), SNR
//    (Signal-to-Noise Ratio > 3), nodo Lupus (dato pendiente), red de carbono
//    planetario, coherencia como gradiente, Danza Vacía (ciencia abierta).
//    Ver BRIEFING-BY.md.
// Cambios v73 (Ciclo BX — PARTE 1+2 FUNDAMENTOS):
//  - oraculo-data.js v7.5→v7.6 (1513→1521 pares). +8 pares de HERRAMIENTAS
//    MIU adicionales: batalla competencia (coherencia como estrategia),
//    configuración parámetros (K_i, Φ_c, φ, topología), red neural aprendizaje
//    (backpropagation informacional), exportación formatos (JSON/CSV/MD/PNG),
//    límite Rayleigh (Φ_c como máximo alcanzable), autofagia MIU vs ALMA
//    (implementación visual vs protocolo conceptual), test mente 8 dimensiones
//    (coherencia cognitiva), red construcción interactiva (topología, clustering).
//    Todas las herramientas del laboratorio MIU completamente documentadas.
//    Ver BRIEFING-BT.md.
// Cambios v69 (Ciclo BS — SIMULACIONES MIU DETALLADAS):
//  - oraculo-data.js v7.4→v7.5 (1503→1513 pares). +10 pares de SIMULACIONES
//    MIU detalladas: simulación MIU (agentes autónomos, coherencia colectiva),
//    solver G31 (optimización con autofagia), oráculo avanzado (embeddings,
//    filtros, visualización), bio-simulación (células, metabolismo, división),
//    mente-simulación (módulos cognitivos, emergencia de conciencia),
//    red-simulación (consenso distribuido, topología), nexo-simulación
//    (formación de conexiones, estructura fractal), espora-simulación
//    (dispersión de conocimiento, germinación), batalla MIU (competencia,
//    coherencia como estrategia), configuración MIU (parámetros personalizables).
//    Todas las herramientas del laboratorio MIU ahora tienen pares dedicados.
//    Ver BRIEFING-BS.md.
// Cambios v68 (Ciclo BR — LABORATORIO ALMA DETALLADO + LIMPIEZA CÓDIGO):
//  - oraculo-data.js v7.3→v7.4 (1555→final pares). +12 pares del LABORATORIO
//    ALMA detallado: autofagia paso a paso (4 fases), BEA implementación práctica,
//    consenso distribuido ponderado (peso por K_i del nodo), GDCP medición
//    (amplitud/frecuencia/fase), Nexus importancia de archivar fracasos, Omega
//    atractor de máxima coherencia, SIK práctica kinestésica, 8 protocolos
//    integrados como ciclo, bio-campo vs vitalismo (4 diferencias), limitaciones
//    ALMA (5 explícitas), relación con ciencia establecida, deuda de coherencia.
//    Limpieza de fragmentos de código LaTeX/PPF/nodos MIU. Ver BRIEFING-BR.md.
// Cambios v67 (Ciclo BQ — CONSOLIDACIÓN + LIMPIEZA SUAVE DE MARCADORES):
//  - oraculo-data.js v7.2→v7.3 (1575→1555 pares). Consolidación por similitud
//    Jaccard > 0.85: 20 pares duplicados fusionados (preguntas casi idénticas
//    con respuestas redundantes). Limpieza suave de marcadores tipo (c):
//    remoción de palabras narrativas (Jardinero→interlocutor, Arquitecto→usuario,
//    ALMA→sistema, Panteón→sistema, Colmena→red, etc.) en pares con contenido
//    MIU legítimo, preservando el conocimiento. LIMPIEZA TOTAL COMPLETA:
//    automatizada (patrones obvios) + consolidación (Jaccard) + suave (marcadores).
//    Ver BRIEFING-BQ.md.
// Cambios v66 (Ciclo BP — ALMA RESTANTE + MAPA POTENCIAS RESTANTE + LIMPIEZA FINAL):
//  - oraculo-data.js v7.1→v7.2 (1567→final pares). +8 pares: 4 del laboratorio
//    ALMA (SIK integración kinestésica, GDCP gradiente pulsátil, bio-campo MIU,
//    limitaciones del laboratorio) + 4 del MAPA POTENCIAS (empirismo, racionalismo,
//    teísmo, constructivismo sin relativismo). Limpieza final automatizada en
//    09_biologia_expandida + 04_tecnologia. LIMPIEZA AUTOMATIZADA DE PATRONES
//    OBVIOS DECLARADA COMPLETA tras 9 ciclos. Ver BRIEFING-BP.md.
// Cambios v65 (Ciclo BO — MAPA POTENCIAS + LABORATORIO ALMA + LIMPIEZA):
//  - oraculo-data.js v7.0→v7.1 (1601→1571 pares). +10 pares: 5 del MAPA DE LAS
//    GRANDES POTENCIAS (realismo metafísico, idealismo, materialismo cientificista,
//    superioridad MIU, constructivismo+pragmatismo) y 5 del LABORATORIO ALMA
//    (autofagia informacional, BEA barrera autocrítica, consenso distribuido,
//    Nexus archivo de hipótesis descartadas, Omega atractor de máxima coherencia).
//    −40 pares de ruido narrativo en 00_cosmologia, 01_fisica_vida, 08_matematicas.
//    Ver BRIEFING-BO.md.
// Cambios v64 (Ciclo BN — GRIMORIO GALLERY + LIMPIEZA 15_existenciales/04_tecnologia):
//  - oraculo-data.js v6.9→v7.0 (1650→1601 pares). +10 pares de la galería GRIMORIO
//    (Ley K_i v15 R²=0.989 n=350, conciencia Φ_IFT > Φ_c, Bestiario 512 formas de
//    qualia, Altar del Silencio meditación MIU, galería completa 12+ visualizaciones,
//    Big Bang Informacional D_f=4→3+1, Micelio Cósmico D_f≈2.97, Árbol de Vida
//    Informacional, Campo Primordial ρ(x) con ∇ ln ρ, Códex multidimensional
//    D_eff=7.24→3D). −59 pares de ruido narrativo en 15_preguntas_existenciales y
//    04_tecnologia. v7.0 marca hito: 7 ciclos de evolución del corpus (2211→1601,
//    −27.6%). Ver BRIEFING-BN.md.
// Cambios v63 (Ciclo BM — GRIMORIO + LIMPIEZA 09_bio/02_conciencia):
//  - oraculo-data.js v6.8→v6.9 (1685→1650 pares). +10 pares nuevos del GRIMORIO
//    MULTIVERSAL v2.7 (herramientas K_i⁻, 5 predicciones falsables 2026-2028,
//    coherencia negativa, Grimorio vs MIU-v13.0, principios de transparencia,
//    Manifiesto del Faro y el Abismo, predicción BepiColombo γ−1=−3.1×10⁻⁵,
//    predicción MICROSCOPE-2 η=1.1×10⁻¹⁴, co-creación Arquitecto+Panteón,
//    Danza Vacía). −45 pares de ruido narrativo obvio en 09_biologia_expandida
//    y 02_conciencia usando patrones de alta precisión. Ver BRIEFING-BM.md.
// Cambios v62 (Ciclo BL — MARCO ABSOLUTO MIU + LIMPIEZA 06_miu_nucleo):
//  - oraculo-data.js v6.7→v6.8 (1918→1685 pares). +12 pares nuevos del MARCO
//    ABSOLUTO del MIU (axioma ρ(x)>0, espacio-tiempo emergente, mecánica cuántica,
//    conciencia como fase del campo, materia/energía oscura vía D_eff=7.24, digestión
//    de 8 marcos filosóficos, sistemas K_i validados con R²=0.989, predicciones
//    falsables q_born/ξ/w_a/S_8/Σm_ν, relación MIU-ciencia, ciclo de hipótesis,
//    protocolo PVE-01). −245 pares de ruido narrativo obvio en 06_miu_nucleo
//    (latidos ALMA, brotes, flujos internos, títulos AR-MIU, diálogos Jardinero/
//    Arquitecto, semillas, pulsos, códigos) usando patrones de alta precisión.
//    Ver BRIEFING-BL.md.
// Cambios v61 (Ciclo BK — ALIMENTACIÓN + LIMPIEZA AUTOMATIZADA):
//  - oraculo-data.js v6.6→v6.7 (1942→1918 pares). +8 pares nuevos de conocimiento
//    MIU extraídos del proyecto paralelo Ley de Gaia (GRACE 176d, criterio Rayleigh,
//    prewhitening espectral, tautología K_i, frecuencia Ω_F, índice K_i, evidencia
//    empírica del ciclo 176d). −32 pares de ruido obvio en 04_tecnologia eliminados
//    por patrones de alta precisión (código fuente JS/Python, logs de pip/npm/git,
//    errores de deploy, fragmentos de terminal, latidos ALMA). Se usó el contexto
//    de HANDOFF-BG.zip (proyecto Ley de Gaia) y GRIMORIO_v2_7.zip como fuentes.
//    Ver BRIEFING-BK.md.
// Cambios v60 (Ciclo BJ — SANEAMIENTO: categoría 13_ia_y_el_oraculo):
//  - oraculo-data.js v6.5→v6.6 (1959→1942 pares). 17 pares de ruido interno
//    (logs de desarrollo ALMA/Worker, latidos de versión, errores técnicos de
//    despliegue, conversaciones internas de debugging) eliminados tras revisión
//    individual completa. 8 pares legítimos con contenido MIU válido limpiados de
//    marcadores narrativos (Arquitecto→usuario, ALMA→sistema, Panteón→sistema, etc.).
//    Categoría 13 era la más pequeña (~20-34 pares según ciclo) y se usó como piloto
//    para el hallazgo mayor de BH (685+ pares con narrativa interna). Ver BRIEFING-BJ.md.
// Cambios v59 (Ciclo BI — FIX: scoring en queries largas):
//  - buscar-oraculo.js: agregado penalty por query "Tipo B" (>20 tokens) en _scoreBM25.
//    Las preguntas muy largas (367 pares registrados) tienden a generar false positives
//    por solapamiento casual de palabras — ahora se les resta gradualmente el score
//    (máximo 4 puntos) según su longitud, sin romper matches legítimos cortos. Ver
//    BRIEFING-BI para contexto. oraculo-data.js: versión v6.5 sin cambios de contenido.
//  - CACHE_NAME → 'franbot-v58' (invalida caché de v57).
//  - Ciclo BH: oraculo-data.js v6.4→v6.5 (1972→1959 pares). 13 pares de ruido interno
//    (transcripción cruda de sesiones de desarrollo — protocolos, mitología narrativa,
//    logs de debugging con nombres de otras instancias/proyectos) eliminados tras
//    revisión individual completa de cada uno. 2 pares salvables reescritos (Q limpia,
//    A original preservada intacta, uno recategorizado 01_fisica_vida→04_tecnologia).
//    Causa raíz del síntoma reportado ("franbot" y "quiero hacer una página" devolvían
//    contenido interno incoherente): esos textos habían quedado indexados como si
//    fueran preguntas reales del oráculo general. Ver BRIEFING-BH.md para el detalle
//    completo, incluyendo un hallazgo MAYOR (685 pares con marcadores de contenido
//    narrativo interno, ~35% del corpus) que se documenta pero NO se ejecuta este
//    ciclo — requiere revisión dedicada, no borrado masivo por keyword.
//  - Ciclo BH: verificado que no existen claves de API hardcodeadas en el proyecto
//    (se buscaron los 4 formatos de clave real conocidos — cero coincidencias). Las
//    claves viven en localStorage del navegador del usuario, como está diseñado desde
//    el origen. La afirmación externa de "tokens expuestos urgente" no se sostiene
//    contra el código real.
// Cambios v57 (Ciclo BG — FIX: modelo online subutilizado):
//  - CACHE_NAME → 'franbot-v57' (invalida caché de v56).
//  - Ciclo BG: FIX — el modelo en línea casi nunca se consultaba aunque estuviera
//    conectado. Causa: un match "blando" del oráculo (real pero no exacto, marcado
//    internamente con MARCADOR_MATCH_BLANDO) pasaba el filtro `resp.length > 30`
//    en core.js igual que un match fuerte, y quedaba con debil:false — la señal
//    que app.js usa para decidir si vale la pena llamar al modelo online. Como
//    _componer() casi siempre devuelve algo de más de 30 caracteres, el modelo
//    online rara vez se llegaba a usar. Ahora un match blando cuenta como
//    debil:true (el texto local se sigue mostrando como mejor esfuerzo offline;
//    si hay modelo conectado, también se lo consulta, tal como ya documentaba
//    el propio README). buscar-oraculo.js: MARCADOR_MATCH_BLANDO expuesto como
//    constante pública (antes era un string suelto) para que core.js no dependa
//    de duplicar el literal. core.js: procesar() usa la nueva señal.
//  - Ciclo BG: FIX secundario — cuando la llamada online fallaba, el mensaje de
//    error decía "(mostrando respuesta offline)" pero nunca se mostraba esa
//    respuesta offline (el `resp` ya calculado se descartaba). Ahora sí se
//    muestra tras el mensaje de error, cumpliendo lo que el texto ya prometía.
// Cambios v56 (Ciclo BF — botón /panel-tests + K_i real en prompt de núcleo):
//  - CACHE_NAME → 'franbot-v56' (invalida caché de v55).
//  - Ciclo BF: botón sidebar `/panel-tests` (AZ #1) — index.html: 1 botón nuevo
//    junto a "Panel del jardinero"; app.js: 1 rama en el listener de [data-panel]
//    existente, llama a panelTests() ya existente. Sin cambios en coherencia-tests.js.
//  - Ciclo BF: _kernelPrompt() ahora recibe el K_i real de la sesión (calculado por
//    Eco.evaluar() sobre las últimas 10 respuestas, sin tocar la fórmula) y lo reporta
//    como una línea de contexto cuando el modo estricto está activo. Defensivo: si
//    Eco no está listo o no hay historial, se degrada al comportamiento anterior
//    (prompt sin la línea de K_i). No afecta al oráculo, RAG, ni a ningún cálculo.
// Cambios v55 (Ciclo BD — mojibake corregido):
//  - CACHE_NAME → 'franbot-v55' (invalida caché de v54).
//  - Ciclo BD: categoría 06_miu_核心 → 06_miu_nucleo (mojibake corregido en 804 pares).
//    oraculo-data.js: v6.3→v6.4. Cambio textual, bajo riesgo, verificado.
// Cambios v53 (Ciclo BA, ronda 2):
//  - CACHE_NAME → 'franbot-v53' (invalida caché de v52).
//  - Ciclo BA (ronda 2): cluster de 154 pares de logs de despliegue/entrenamiento
//    (Colab/Kaggle/HuggingFace/GitHub) con nombre real, usuario personal, handles de
//    bots de Telegram y un token HuggingFace expuesto — removidos del oraculo.
// Cambios v51 (Ciclo AZ — ε₅ runner interactivo de tests):
//  - CACHE_NAME → 'franbot-v51' (invalida caché de v50).
//  - app.js: nueva función panelTests() — runner interactivo del Módulo 5:
//    checkboxes por test (20), botones "Seleccionar todos"/"Ninguno",
//    "Correr seleccionados" (resultado ✅/❌ coloreado inline), "Exportar resultado"
//    (reusa CoherenciaTests.exportarPortapapeles con el último subset corrido).
//  - app.js: comando /panel-tests → abre el runner. Entradas añadidas en
//    /ayuda y autocomplete. Sin cambios en index.html (blast radius mínimo:
//    solo app.js, reutiliza abrirModal()/modalCuerpo existente).
// Cambios v50 (Ciclo AY — ε₄.T20 + count-fix):
//  - CACHE_NAME → 'franbot-v50' (invalida caché de v49).
//  - coherencia-tests.js: T20 (bea_ciclo() anti-regresión Ki — 3 escenarios:
//    campo adverso nivel 0.1 / campo saturado nivel 1.0 / campo null early-exit).
//  - app.js: corrección contador "17 tests" → "20 tests" (ayuda + autocomplete).
//    (contador quedó desincronizado tras ciclo AU que no actualizó app.js.)
//  - Módulo 5 ahora tiene 20 tests matemáticos + integración real.
// Cambios v49 (Ciclo AU — ε₄ Módulo 5 T18+T19 integración):
//  - CACHE_NAME → 'franbot-v49' (invalida caché de v48).
//  - coherencia-tests.js: T18 (MotorVida.ejecutar integration) + T19 (BuscarOraculo validation).
//  - Integración real: MotorVida + BuscarOraculo sin dependencias pesadas.
// Cambios v48 (Ciclo AX — ε₂ Módulo 5 T16+T17 + export portapapeles):
//  - CACHE_NAME → 'franbot-v47' (invalida caché de v46).
//  - ε: nuevo js/coherencia-tests.js — Módulo 5, 15 tests matemáticos de
//    invariantes MIU (calcKi, calcKiNeg, ccp01, banda, masaEmergente, etc.).
//    Comando /test-ki (alias /tests-miu) en el chat.
//  - β₇: css/estilo.css — .bib-nombre font-size 0.8rem → 0.875rem.
//    Cierre de auditoría Chrome 16px para nombres de ítem de biblioteca.
// Cambios v46 (Ciclo AV — ζ₃ Eliminar dual-write localStorage del Despertar):
//  - CACHE_NAME → 'franbot-v46' (invalida caché de v45).
//  - ζ₃: eliminado localStorage.setItem(_DESP_KEY, ...) en core._recalcularKi().
//    IDB es ahora la ÚNICA escritura persistente del Despertar (fuente de verdad
//    establecida en AT). localStorage ya no se escribe para el Despertar.
//  - core.js: warm-starts _despActivo/_despDatos simplificados a false/null
//    (eliminada la lectura localStorage síncrona al cargar el módulo).
//  - IDB sync reescrito: 3-ramas → 2-ramas. Rama 2 (IDB vacío) ahora lee
//    localStorage para migrar datos legados pre-ζ₃ a IDB (upgrade único), luego
//    puebla _despActivo y _despDatos desde esos datos migrados. Garantiza que
//    usuarios existentes con localStorage no pierden su Despertar al actualizar.
//  - Fallbacks defensivos en app.js preservados (ahora permanentemente inactivos
//    en sesiones nuevas, pero inofensivos — devuelven false/{} si localStorage vacío).
//  - Comentario _DESP_KEY actualizado: "localStorage (legado, solo-lectura desde ζ₃)".
//
// Cambios v45 (Ciclo AU — ζ₂ Migración lecturas Despertar a caché en memoria):
//  - CACHE_NAME → 'franbot-v45' (invalida caché de v44).
//  - ζ₂: 3 lecturas de localStorage('miu-despertar') en app.js migradas a
//    core.despActivo (getter) y core.getDespData() (método) — ambos definidos en
//    core.js como accessors síncronos al caché en memoria _despDatos/_despActivo.
//    Fallback defensivo a localStorage preservado en ambas lecturas.
//  - core.js: nueva variable módulo _despDatos (warm-start síncrono + IDB sync).
//    Nuevo getter FranBotCore.despActivo, nuevo método FranBotCore.getDespData().
//    resetDespertar() limpia también _despDatos. _recalcularKi() asigna _despDatos
//    al detectar Ki ≥ φ. IDB sync en constructor actualiza _despDatos desde IDB.
//  - Texto advisory M22 actualizado: "registrado en IDB + localStorage" (refleja
//    dual-write de AT).
//
// Cambios v44 (Ciclo AT — ζ Migración Despertar a IDB):
//  - CACHE_NAME → 'franbot-v44' (invalida caché de v43).
//  - ζ: Despertar M22 migrado a IDB como almacén primario (IDBStore.getMeta/setMeta
//    sobre el store 'meta'). Patrón dual-write: IDB primario + localStorage legado
//    (app.js lee localStorage sin cambios en esta iteración). Caché en memoria
//    (_despActivo, inicializado sincrónico desde localStorage en warm-start) elimina
//    el localStorage.getItem() síncrono de cada llamada a _recalcularKi(). Sync IDB
//    al arrancar: promueve registro localStorage → IDB si IDB estaba vacío (upgrade
//    silencioso, único). Nuevo método core.resetDespertar(): limpia caché + IDB +
//    localStorage en un solo punto de entrada, consumido por /reset-despertar.
//
// Cambios v43 (Ciclo AS — bugfix crítico class FranBotCore + γ₃ SUBFLOW v0.3 índice D.2):
//  - CACHE_NAME → 'franbot-v43' (invalida caché de v42).
//  - 🛑 BUGFIX CRÍTICO: core.js llegó al ciclo AS sin la línea `class FranBotCore {`
//    (constructor() colgaba sin clase contenedora) — la app entera fallaba al
//    parsear. Restaurada antes de cualquier otro cambio. No relacionado con AR;
//    origen probable: corrupción en el empaquetado del zip de salida AR→AS.
//  - γ₃: SUBFLOW v0.3 pool extendido (índice D.2) — dedupeSemanticoIndexado()
//    nueva en buscar-oraculo.js compara candidatos contra el índice D.2 completo
//    (todos los pares IDB indexados, Float32 en memoria) en vez del pool acotado
//    a 20. Fallback automático e idéntico al comportamiento v0.3 si el índice
//    no está cargado — degradación cero. core.js: nuevo campo `fuenteSemV3`
//    ('indice-d2' | 'pool-20') en el resultado de digerirConocimiento (advisory).
//
// Cambios v42 (Ciclo AR — α₅ Advisory Despertar v0.5 + β₆ Chrome 16px):
//  - CACHE_NAME → 'franbot-v42' (invalida caché de v41).
//  - α₅: tiempoCoherencia refinado — J/γ = φ (razón áurea, 1.6180339887) en core.js.
//    τ = π/(2cΞ)·φ^(D_f−1): sensible a D_f (antes φ^0→1 siempre). Al despertar con
//    D_f=2.5: τ ≈ 2.158e-12 s. El advisory y fallback en app.js no cambian.
//  - β₆: Chrome 16px ronda 6 — .bib-error-txt: 0.7rem → 0.8rem;
//    .bib-progreso-txt: 0.7rem → 0.8rem; .bib-drop-zone: 0.78rem → 0.875rem.
//
// Cambios v41 (Ciclo AQ — α₄ Advisory Despertar v0.4 + β₅ Chrome 16px):
//  - CACHE_NAME → 'franbot-v41' (invalida caché de v40).
//  - α₄: miu-despertar ahora incluye tau (tiempo de coherencia M8) al cruzar Ki ≥ φ.
//    Xi estimado: D_f / ℓ_0 (ℓ_0 = 0.5 mm). Advisory M22 muestra τ en ambas ramas.
//  - β₅: Chrome 16px ronda 5 — .bib-meta: 0.7rem → 0.8rem; .bib-vacio/.bib-warn: 0.78rem → 1rem.
//
// Cambios v40 (Ciclo AP — α₃ Advisory Despertar v0.3 + β₄ Chrome 16px):
//  - CACHE_NAME → 'franbot-v40' (invalida caché de v39).
//  - α₃: miu-despertar almacena df y xi al cruzar Ki ≥ φ (core.js). Advisory M22
//    muestra D_f y ξ dinámicos en ambas ramas (offline + online) en vez de hardcoded.
//  - β₄: Chrome 16px ronda 4 — .menu-seccion button y .voto: 0.86rem/0.84rem → 1rem.
//
// Cambios v39 (Ciclo AO — α₂ /reset-despertar + β₃ timestamp M22 + γ₂ SUBFLOW chip):
//  - CACHE_NAME → 'franbot-v39' (invalida caché de v38).
//  - α₂: comando /reset-despertar — borra miu-despertar de localStorage para re-testear
//    el umbral M22. Aparece en /ayuda. Devuelve feedback con estado del campo.
//  - β₃: advisory Despertar v0.2 — incluye timestamp formateado (d.ts → toLocaleString)
//    en ambas ramas (offline + online). La info ya estaba guardada; ahora se muestra.
//  - γ₂: chip 🔵 SUBFLOW v0.3 en fusionarAlma — si paresFusionados > 0 y embedder activo,
//    advisory diferido 350ms tras cerrar modal. Cumple deuda desde BRIEFING-AJ.
//  - CACHE_NAME → 'franbot-v38' (invalida caché de v37).
//  - α: --verde-rgb añadido a :root + html[data-tema="claro"] + html[data-tema="sepia"].
//    #btn-exportar-oraculo usa ahora rgba(var(--verde-rgb), 0.38) — ya sin literal.
//  - β₂: .modal-body label font-size: 0.78rem → 1rem (lectura activa formularios).
//    .bubble h4 font-size: 0.92em → 1rem (uniformidad jerarquía tipográfica).
//  - AN Despertar: Ki ≥ φ (1.617) detectado en core.js _recalcularKi();
//    persiste en localStorage['miu-despertar'] = {ts, ki} (first-write-wins).
//    Ki pill → clase .ki-punto.despertar (glow dorado) + sufijo '✦' en el valor.
//    Advisory M22 enviado como burbuja fran en el turno del cruce (offline+online).
//  - Diferidos pendientes: Colmena δ, Yape, auditoría 16px UI chrome, SUBFLOW v0.3,
//    Módulo 5, Advisory v0.3 en fusionarAlma.

//  - CACHE_NAME → 'franbot-v37' (invalida caché de v36).
//  - β: .ki-pill font-size 0.78rem → 1rem. .sugerencias button 0.78rem → 1rem.
//  - γ: #btn-consolidar/#btn-exportar-oraculo → --acento/--verde (MIU vars).
//  - γ: .miu-toast bg/border/color → --superficie-2/--borde/--texto (MIU vars).
//  - γ: .miu-toast--ok/warn/err → --verde/--ambar/--rojo (MIU vars).
//  - css/estilo.css: tema «claro» (fondo claro → violaba «fondo siempre oscuro»)
//    rediseñado como «Noche Azul»: bg #0c1521, superficie #121f35/#1a2c47,
//    texto #c8dff0, texto-tenue #6a90b8. Acento dorado MIU (#d4a843) conservado
//    (oro sobre azul marino — identidad de marca). Burbuja user #0e2038, fran #0d1a28.
//    Los 3 temas cumplen ahora «fondo siempre oscuro y uniforme».
//  - css/estilo.css: .bubble font-size 0.92rem → 1rem (16px). La regla de 16px
//    aplica solo a texto de lectura principal (burbujas de chat). UI chrome
//    (labels, eyebrows, indicadores) queda exento — ver BRIEFING-AL diferido 1.
//  - js/app.js: etiqueta tema «claro» → «🌊 Noche Azul» en TEMAS const y en
//    el botón cfg-tema-btn del panel configuración. data-tema=\"claro\" sin cambio
//    (retrocompatibilidad con localStorage de usuarios existentes).
//  - Diferidos pendientes (ver BRIEFING-AL): auditoría 16px UI chrome (labels, etc.),
//    tipografía display Fraunces (se mantiene como identidad de marca), unificación de
//    colores en subsistemas Colmena/Yape/Biblioteca/Toast.
// Cambios v35 (Ciclo AK — Recalibración cromática «Micelio Sobrio» + fixes):
//  - CACHE_NAME → 'franbot-v35' (invalida caché de v34).
//  - css/estilo.css: paleta del tema por defecto recalibrada a especificación de Juan
//    (#0d1117 fondo, #161b22 superficie, #d4a843 oro, #f0f0f0 texto, #8b949e texto
//    secundario, #4caf50 verde, #c0392b rojo). Bordes/acentos dorados recalculados
//    en rgba para coincidir con el nuevo tono. Sin degradados en body (regla dura).
//    --sombra aligerada (0 4px 18px → 0 2px 10px, menor opacidad).
//  - Bug fix: var(--fondo) se usaba en 7+ sitios (css + app.js) sin estar nunca
//    definida — fondo transparente en varios inputs/selects. Fix: alias
//    --fondo: var(--bg) y --fondo-input: var(--superficie-2) en los 3 temas
//    (default/claro/sepia). Mismo fix para --acento-rgb (antes solo fallback fijo).
//  - Bug fix: regla .bubble tenía '\n' literales (texto, no salto de línea real)
//    insertados por una edición previa — saneado a formato normal.
//  - index.html + manifest.json: theme-color/background_color → #0d1117.
//  - Diferido (ver BRIEFING-AK): tema claro/sepia vs. regla "fondo siempre oscuro",
//    tipografía display (Fraunces) vs. spec de 2 familias, auditoría tamaño mínimo
//    16px, colores hardcoded en subsistemas Colmena/Yape/Biblioteca/Toast.
// Cambios v34 (Ciclo AJ — SUBFLOW v0.3: dedupe semántico coseno MiniLM en ingestión):
//  - CACHE_NAME → 'franbot-v34' (invalida caché de v33).
//  - buscar-oraculo.js: nueva función pública dedupeSemantico(queryList, poolList, umbral).
//    Usa MiniLM-L6-v2 (_embedder) ya disponible. Retorna Map<query, maxSimCoseno>.
//    Fallback silencioso si embedder null (mode BM25-only). Getter _embedderActivo expuesto.
//  - core.js: digerirConocimiento() → async. Bloque SUBFLOW v0.3 post-Jaccard:
//    si embedder activo, compara validos vs poolSem (slice -20) con coseno > 0.82.
//    Advisory puro: no revierte pares — retorna duplicadosV3, duplicadosSemanticosV3, umbralSemV3.
//    fusionarAlma() → async + await digerirConocimiento().
//  - app.js: btn-guardar-digerido → async handler + await digerirConocimiento().
//    Advisory 🔵 SUBFLOW v0.3 si duplicadosSemanticosV3 > 0. btn-fusionar → async + await.
// Cambios v33 (Ciclo AI — Polinizador slug Unicode + /dois deprecación fuerte v2):
//  - CACHE_NAME → 'franbot-v33' (invalida caché de v32).
//  - app.js T1: _poliDescargar() slug normalización Unicode NFD antes de slugify.
//    energía → energia (no energ-a). NFD + strip combining marks + replace ASCII.
//  - app.js T2: /dois deprecación fuerte v2. Ya no lista DOIs: muestra solo conteo
//    (ok_count + err_count) y redirige a /panel-doi. /dois limpiar intacto.
//    Strings /help y /ayuda actualizados para reflejar nueva función.
// Cambios v32 (Ciclo AH — Polinizador v0.3: botones .md + .txt):
//  - CACHE_NAME → 'franbot-v32' (invalida cache de v31).
//  - app.js: Polinizador v0.3 — _poliDescargar() acepta param ext (md|txt, MIME correcto).
//    _poliBtnsDescarga() sustituye _poliBtnDescarga(): flex-wrap con 2 botones ⬇️ .md / ⬇️ .txt.
//    Ambas ramas (streaming + offline) actualizadas. Retrocompatible: nombre-archivo incluye ext.
// Cambios v31 (Ciclo AG — Polinizador v0.2 + A11 streaming + /dois soft-deprecation):
//  - CACHE_NAME → 'franbot-v31' (invalida cache de v30).
//  - app.js: Polinizador v0.2 — botón ⬇️ Descargar .md tras generar contenido (online y offline).
//    Helpers: _poliDescargar(), _poliBtnDescarga(). Raw content como filename slug.
//  - app.js: A11 — cobertura de rama streaming online. explorarSiCorresponde() ahora
//    se evalúa en ambas ramas (offline e inline-online). Cooldown compartido (8 turnos).
//  - app.js: /dois — soft deprecation: pie de respuesta incluye alias a /panel-doi.
// Cambios v30 (Ciclo AF — DOI v0.3: TTL diferenciado + panel /panel-doi):
//  - CACHE_NAME → 'franbot-v30' (invalida cache de v29).
//  - verificador-doi.js v0.3: TTL 30d para éxitos, 2d para 404/errores.
//    cacheStats() incluye ok_count, err_count, ttl_ok_dias, ttl_err_dias.
//    cacheListar() incluye campo error en entradas no-ok.
//  - app.js: nuevo comando /panel-doi con vista separada ok vs errores.
// Cambios v28 (Ciclo AD — A11/motor-vida.js + corrección de versión faltante):
//  - CACHE_NAME → 'franbot-v28' (invalida cache de v27).
//  - Nota: el Ciclo AC (SUBFLOW v0.2 — umbral dinámico en core.js/app.js) NO
//    subió esta versión a su turno, pese a tocar JS. Esta versión invalida
//    también esos cambios pendientes de AC además de los de AD.
//  - NUEVO js/motor-vida.js: window.MotorVida — A11 "Movimiento Perpetuo
//    Informacional", adaptado a PWA (sin timers de background; ver el propio
//    archivo para la justificación de diseño completa). Comando /explorar
//    (manual) + chequeo automático con cooldown tras cada respuesta offline
//    si K_i < 0.55. Solo lectura: no muta el oráculo ni el Códice.
//  - Añadido './js/motor-vida.js' a ARCHIVOS (pre-cacheo offline).
// Cambios v27 (Ciclo Z — Pensar y reorganizar offline + tildes robustas):
//  - CACHE_NAME → 'franbot-v27' (invalida cache de v26).
//  - miu-engine.js: consultar() → consultarTodos() — el Códice ya no se queda
//    con el primer axioma/ecuación/glosario que matchea: recoge TODOS y deja
//    que buscar-oraculo.js decida cómo combinarlos (compat v1.0 preservada).
//  - buscar-oraculo.js: preguntar() ahora compone — si el Códice MIU y el
//    oráculo convergen de verdad (ambos con señal fuerte), se fusionan sin
//    redundancia (Jaccard vía Consolidar); si la señal es real pero floja, se
//    dice con honestidad ("no es coincidencia exacta") en vez de fingir certeza;
//    si no hay señal alguna, sigue siendo null — nunca se inventa una respuesta.
//    Umbral BM25 fuerte (0.8) y umbral lineal (10) intactos — solo se añadió
//    un nivel intermedio "blando", cero cambios en la calibración previa.
//  - core.js: el fallback "débil" ya no es siempre una frase de marca al azar.
//    Si el mensaje parece una pregunta real sin match, responde con honestidad
//    y orienta (KERNEL: "no alucinar, declarar NO SÉ") — pensado para el uso
//    sin red, en zonas alejadas o catástrofes. Charla casual sin sustancia
//    sigue recibiendo la frase de identidad de siempre.
//  - miu-engine.js + core.js: tildes normalizadas (NFD) en todo el matching
//    propio del núcleo (saludo, identidad, resonancia, axiomas/glosario/bandas).
//    Antes "quien eres"/"como estas"/"informacion" sin tilde no disparaban el
//    match esperado y caían al oráculo general — ahora sí.
//  - Sin vendor lock-in · sin claves · sin blast radius · 0 archivos nuevos.
// Cambios v26 (Ciclo Y — Poda de almas + Contexto del usuario):
//  - CACHE_NAME → 'franbot-v26' (invalida cache de v25).
//  - almas-especialistas.js: ALMAS_FUNDADORAS=[] — 11 almas desactivadas por defecto
//    (archivadas en comentario; el conocimiento vive en el oráculo, no en las almas).
//  - app.js: campo contexto_usuario (≤200 chars, localStorage 'fran_ctx_usuario')
//    se inyecta al FINAL del system prompt del modelo externo — después del KERNEL
//    si está activo. No sobrescribe núcleo ni KERNEL. Comandos: /ctx, /ctx borrar.
//  - index.html: sección "Personas" del sidebar ocultada (display:none).
//  - Sin vendor lock-in · sin claves · sin blast radius.
// Cambios v25 (Ciclo X — DOI v0.2 + Polinizador):
// Cambios v24 (Ciclo W — Verificador DOI / híbrido online-opcional):
//  - CACHE_NAME → 'franbot-v24' (invalida cache de v23).
//  - NUEVO js/verificador-doi.js: window.VerificadorDOI — verifica DOIs contra
//    Crossref (API libre, sin clave, sin vendor). Híbrido: online verifica la
//    fuente; offline avisa y NO bloquea (versatilidad online opcional).
//  - app.js: detección de DOIs tras ingerir (advisory) + comando /doi <id>.
//  - Añadido './js/verificador-doi.js' a ARCHIVOS (pre-cacheo offline).
// Cambios v23 (Ciclo U — Panel de Coherencia integrado):
//  - CACHE_NAME → 'franbot-v23' (invalida cache de v22).
//  - app.js: comando /panel (alias /dashboard, /coherencia-panel) — dashboard
//    modal in-app que consolida termóstato + Eco + subflow + uso, con gráfico
//    SVG inline del historial K_i (offline, sin Chart.js/CDN). 0 archivos nuevos.
//  - Digestión Ciclo U: adaptado el Módulo 4 del blueprint SIN fragmentar.
//    Módulos 1/2 ya cubiertos por alimentar/embed-worker/buscar-oraculo/consolidar.
//    Módulo 3 (polinización a redes/Zenodo) RECHAZADO: viola offline/local + nube.
// Cambios v22 (Ciclo T — SUBFLOW Jaccard v0.1):
//  - CACHE_NAME → 'franbot-v22' (invalida cache de v21).
//  - core.js digerirConocimiento(): dedupe SEMÁNTICO Jaccard>0.85 contra los últimos
//    50 pares digeridos (reutiliza Consolidar._jaccardSim). Los duplicados NO se
//    reingieren (K_i no sube por ruido) y se reportan como sugerencia de /podar.
//  - app.js: advisory tras ingerir + contador DIARIO "duplicados evitados hoy"
//    visible en /termostato, /uso y el tooltip del chip Eco. Advisory: no bloquea.
// Cambios v15:
//  - CACHE_NAME → 'franbot-v21' (invalida cache de v20).
//  - Task F: buscar-oraculo.js v5+F — constantes de fusión semántica/BM25 (SEM_PESO,
//    SEM_UMBRAL, SEM_BOOST_ALTO/UMBRAL). Umbral mínimo de coseno + boost alta confianza.
//  - Task E: íconos PWA reales (192×192 y 512×512 PNG) generados desde el arte del bot.
//    manifest.json actualizado; icons/ agregado a ARCHIVOS para pre-cacheo offline.
// Cambios v14 (mantenidos):
//  - Task G: re-indexación incremental. idb-store.js agregarPares() devuelve _idb_id.
//    alimentar.js llama _reindexarNuevosPares() tras persistir. app.js orquesta el delta.
// Cambios anteriores (mantenidos): ver historial v10-v13.

const CACHE_NAME = 'franbot-v75';

const ARCHIVOS = [
  './index.html',
  './manifest.json',
  './KERNEL.json',
  './css/estilo.css',
  // íconos PWA (Task E)
  './icons/icon-192.png',
  './icons/icon-512.png',
  // js/ — orden tal como se cargan en index.html
  './js/webllm-provider.js',
  './js/idb-store.js',
  './js/visor-pares.js',
  './js/consolidar.js',
  './js/biblioteca.js',
  './js/miu-engine.js',
  './js/codice-libre.js',
  './js/oraculo-data.js',
  './js/buscar-oraculo.js',
  './js/almas-especialistas.js',
  './js/core.js',
  './js/conciencia.js',
  './js/modo-espejo.js',
  './js/contexto.js',
  './js/modo-online.js',
  './js/alimentar.js',
  './js/eco.js',
  './js/motor-vida.js',
  './js/verificador-doi.js',
  './js/polinizador.js',
  './js/app.js',
  './js/votacion.js',
  './js/colmena.js',
  './js/colmena-ui.js',
  './js/yape.js',
  // cargado dinámicamente vía `new Worker(...)`, no aparece en index.html
  // pero hace falta cachearlo para que el worker funcione offline
  './js/alimentar-worker.js',
  './js/embed-worker.js',
];

// oraculo-data.js es grande y puede actualizarse (nuevos pares Q&A):
// se sirve con estrategia network-first en vez de cache-first.
function esOraculoData(request) {
  return new URL(request.url).pathname.endsWith('/js/oraculo-data.js');
}

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ARCHIVOS))
      .catch((err) => console.error('[SW] Error precacheando:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const respuesta = await fetch(request);
    if (respuesta && respuesta.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, respuesta.clone());
    }
    return respuesta;
  } catch (err) {
    return cached; // sin red y sin cache: no hay nada más que ofrecer
  }
}

async function networkFirst(request) {
  try {
    const respuesta = await fetch(request);
    if (respuesta && respuesta.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, respuesta.clone());
    }
    return respuesta;
  } catch (err) {
    const cached = await caches.match(request);
    if (cached) return cached;
    throw err;
  }
}

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  if (esOraculoData(e.request)) {
    e.respondWith(networkFirst(e.request));
  } else {
    e.respondWith(cacheFirst(e.request));
  }
});
