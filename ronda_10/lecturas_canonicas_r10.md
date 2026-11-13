# LECTURAS CANÓNICAS — RONDA 10, FASE 1, AGENTE C

- **Fecha:** 2026-11-13. **Orden:** Jardinero 2026-11-13 15:07 -05 ("Decidan con coherencia...") — las decisiones canónicas fueron delegadas a los agentes.
- **Alcance:** D-07, D-08, D-10, D-11, D-12, D-13, D-14 (lecturas canónicas: qué fórmula, qué definición, qué criterio rige). Nada fuera de estas 7 (C-7).
- **Criterio aplicado:** C-1..C-9 de `ronda_10/mapa_decisiones_r10.md` (sin apartamientos; donde una recomendación inicial chocaba con el criterio, manda el criterio — ver cada decisión).
- **Sistemas (C-5):** cada lectura nombra su sistema. v10.3 = Semilla v10.3 (58 axiomas A0–A57); núcleo = semilla core (§V, §VII); FranBot = sistema FranBot (miu-engine.js, A1–A24); IIT = Integrated Information Theory (consenso externo); S1/S2/S3 = sistemas axiomáticos de la traducción SIK.
- **Estado del suelo durante la ejecución (SÉ, medido por mí):** mientras este agente ejecutaba, el agente paralelo de absorción aplicó B: claims.jsonl 1.138 → **1.152** (C-1144..C-1157, SE 1025, INFIERO 95; sha cdbaac93…), provenance.sha256 328 → **340 líneas** (sha eaab6674…). Este agente NO tocó claims.jsonl, provenance.sha256, claims_resumen.json, confirmaciones.jsonl, huecos.jsonl ni corpus_qualias.md. Puertas re-corridas por mí tras ejecutar: **verify_all exit=1 con exactamente C-001..C-008** (sin cambio); **audit exit=1, ok=326, discrepancia=2, no_encontrado=0, omitido=1**. De las 2 discrepancias, 1 es consecuencia documentada de D-07 (L246, ver abajo) y 1 es la edición paralela de D-05 (L249, no mía). L269 quedó resuelta por el agente paralelo de D-17 (no_encontrado 1 → 0).

## D-07 — K_i: φ⁻¹ canónica (sistema v10.3-A10 / núcleo §VII)

- **Lectura:** K_i = φ⁻¹ · (D_f / 2,5) · (ℓ_corr / ℓ_0), con φ⁻¹ = 0,6180339887. En el dataset, K_i = 0,2472 · D_f (ℓ_corr/ℓ_0 = 1). La banda [0,55, 0,62] ↔ D_f [2,2249, 2,5081] bajo φ⁻¹.
- **Por qué (C-3):** la sostienen 26/29 filas del dataset, la banda, P121 (D_f(CMB) = 2,305 → K_i = 0,570) y la fórmula declarada (v10.3-A10, núcleo §VII). El motor era el outlier (1 artefacto contra N documentos). M-37 (r8) ya rechazó K_i⁻ = 1 − K_i (re-etiquetado exacto, sin información). D_f sigue siendo la métrica primaria.
- **Cambio aplicado (escalonado, paso 2):** el motor `miu-engine.js` (calcKi) usaba φ. Corregido en las 2 copias locales idénticas de `~/workspace/franbot_repo/` (`js/miu-engine.js` y `app/js/miu-engine.js`): constante `phi` intacta (la usa la herencia ρ_hija y el log de arranque); añadida `phiInv: 0,6180339887498949` (L14); calcKi ahora devuelve `C.phiInv * (D_f / 2.5)` (L138-139) con docstring que cita el canon. Respaldo: `ejecucion_c/respaldo/miu-engine.js.{js,app-js}.respaldo`, sha a30d69e8… (19.987 B). Nuevo sha (ambas copias): 8d15b724dba0… (20.440 B). Remoto (GitHub) NO tocado; `git status` en franbot_repo muestra solo estas 2 modificaciones locales.
- **Verificación (node, ejecutado por mí):** calcKi(2,5) = 0,6180339887; calcKi(2,305) = 0,5698 (P121: 0,570; con φ era 1,4918); D_f 2,2249 → K_i 0,5500 y D_f 2,5081 → K_i 0,6200 (la banda cuadra exacto); calcKiNeg sin cambio (0,618; 0,1 → 0,4944); ccp01 cambia como corresponde (factor φ² ≈ 2,618): [8,8,8] KiNeg 0,8543 Resiliencia → 0,3263 Desequilibrio; [10,10,10] KiNeg 1,6180 → 0,6180. `voces_58.py` NO tocado (solo datos; su A15 es el registro fiel de FranBot-A15, y su D3-A15 ya votaba φ⁻¹); `medir_nodos.py` ya usaba φ⁻¹; `compilar_corpus.py` usa PHI solo como metadato.
- **Consecuencia documentada (C-1, C-9):** provenance L246 cita `franbot_repo/app/js/miu-engine.js` con el hash viejo (a30d69e8…): ahora es **discrepancia** (real 8d15b724dba0…). Remediación exacta para el dueño de provenance (NO la aplico yo: provenance.sha256 no es mía): actualizar L246 al sha 8d15b724dba0…. Los claims C-903/C-919/C-642/C-639/C-1104 quedan como registro histórico del estado pre-corrección (describen la fórmula φ como observada entonces); sus citas de línea se desplazaron +1 antes de calcKi (A15 L52 → L53; la fórmula A15 en sí NO cambió) y +4 tras calcKi (L134-135 → L138-139; llamadas L164 → L168, L220 → L224, L253 → L257).
- **Reversión:** copiar `respaldo/miu-engine.js.js.respaldo` sobre `franbot_repo/js/miu-engine.js` y `respaldo/miu-engine.js.app-js.respaldo` sobre `franbot_repo/app/js/miu-engine.js`; verificar sha a30d69e8… en ambas.

## D-08 — Φ_c(MIU) = 0,6829322 = Δ_COD (sistema MIU; núcleo §V, v10.3-A7)

- **Lectura:** Φ_c(MIU) = 0,6829322 (= Δ_COD) es el umbral de la condición de consciencia del núcleo (Φ_MIU > Φ_c). Φ(IIT) — 3,4270 / consenso 3,35 → 3,65 → 3,95 — es otra cantidad de otro sistema (IIT), no el mismo umbral. Las locales 0,7 y 0,5927 quedan como valores locales no adoptados.
- **Por qué (C-5, C-2):** R2-08 distingue Phi_MIU de Phi_IIT; R2-10 registra 0,6829322 vs 3,4270; 26 claims citan 0,6829322. Mezclarlos sería colapsar dos sistemas. La condición τ·Ξ·c > 1,618 no se toca en esta decisión (C-7; su falsedad por M5 es otro asunto).
- **Cambio aplicado:** ninguno en código ni en corpus (documentaria). **Reversión:** retirar este registro.

## D-10 — D_eff: lectura R-B (sistema: Grimorio v12 / MIU)

- **Lectura:** el único 7,24 verificable en fuentes es **ε = 7,24×10⁻⁴**, parámetro de energía oscura (symmetron, ajuste DESI DR2) — otra cantidad. **D_eff = 7,24 queda como valor registrado sin derivación**, no como constante derivada. G01 se cierra en ese estado honesto.
- **Verificación propia (leído por mí, 3 copias byte-idénticas del tex, sha f27ea4d5dcb0, 1.154 líneas):** 7,24 aparece en exactamente 5 líneas, todas como ε: L88 (dark-energy evolution parameter, symmetron), L122 (tabla, Dark energy parameter (DESI)), L553 (β_MIU = ε), L567 (⟨φ⟩ ≠ 0 genera ε ~ 7,24×10⁻⁴), L628 (tabla, DESI DR2 fit). **D_eff: 0 menciones** en el tex. Su única procedencia sigue siendo `orquestador_v8.py` L451 ("Calibrado empiricamente (no derivado). Ver PDR-01") y PDR-01 como archivo no existe; A19 en `anexo-vi/axiomas_a0_a57.md` L77 da D_eff = 7,24 con intervalo [7,0, 7,5]; el rango proxy CCP-01 [1,0, 2,5] es incompatible con 7,24. R-D agotada en r8 (4 vías, 0 derivaciones).
- **Por qué (C-2, C-4):** R-A afirma sin verificar; R-C borra un valor que aparece en A19 (destructivo sin necesidad); R-B registra lo que SÉ.
- **Cambio aplicado:** ninguno en código ni en corpus (documentaria). **Reversión:** retirar este registro.

## D-11 — c: O-5 (G09 parcial por diseño) + O-1 como fallback declarado (sistema PVE-01, forma 3)

- **Lectura:** c queda **sin definir**; G09 queda **parcial por diseño** ("compatible, no confirmada"). La forma 3 se usa solo como compatibilidad (compatible con la banda para c ≥ 2,0025), no como confirmación. **Fallback declarado O-1:** para los cómputos que necesiten un valor, c = 2,5 (K_i = 0,5835, en banda), con su circularidad explícita (c se elige para caer en banda; no es una medición).
- **Por qué (C-2):** O-3 se recorrió en r9 y dispersa, no converge (Ξ por nodo medido, 13 series, −0,036 a 0,965; c* de 0,62 a 62,41; 0/13 en el rango del documento [2,2817, 2,8366]; GHCN Ξ negativo −0,0333 irreproducible con la forma 3). O-2 (c = 1/90 → K_i = 0,0049, fuera de banda; la forma 3 NO confirma), O-4 (c del router ∈ [0,1] contradice c ≥ 2,0025 y mezcla sistemas), O-6 (P = 63,9 fuera del rango del documento [1,62, 2,014]) quedan rechazadas con motivo. O-3 como sub-camino sigue NO-EJECUTABLE-AHORA (necesita una definición física de c que no existe + su prueba).
- **Cambio aplicado:** ninguno en código ni en corpus (documentaria). **Reversión:** retirar este registro.

## D-12 — "Nodo": canon estricto (sistema: dataset D_f, 30 filas)

- **Lectura:** un nodo entra al dataset solo si cumple las 5 condiciones operativas: (1) D_f medido con método y protocolo declarados y reproducibles (fuente + datos + procedimiento); (2) ajuste con R² declarado; listón operativo R² ≥ 0,90 donde el método reporta R² (el criterio que usan las propias mediciones: M-01 R² 0,9999; M-46 R² 0,9710; M-49 usa R² ≥ 0,90 como su listón); (3) cobertura: la medición cubre el sistema que nombra (una red global, no una muestra de un solo elemento; n declarado); (4) sin sesgo de selección no declarado (si solo una fracción de la muestra pasa el listón, no entra); (5) la cantidad medida es D_f, no otra (h ≠ D_f; ε ≠ D_f).
- **Caso de prueba M-24 (pasa):** GRWL global, 42.077 reaches, 3.129.821 vértices, D_f 1,4842 — red fluvial global real, no una muestra. **M-45 (no pasa, candidata débil):** anchos GRWL, D_f 1,7672 ± 0,0022, R² 0,9358, un solo río, serie espacial. **M-49 (no pasa, candidata débil):** Essen, DIFERENCIA 5,33σ, solo 5/20 melodías con R² ≥ 0,90 y sesgo de selección hacia D bajo. **M-46 (no candidata):** h = 0,5582, no D_f. Dataset queda en **30 filas**; M-45 y M-49 quedan como candidatas documentadas, no como filas.
- **Por qué (C-2, C-3):** un dataset que admite filas débiles pierde su significado como listón. El canon laxo (29/29, cobertura vacua) y el mixto (filas + candidatas) se descartan: el laxo admite lo débil, el mixto duplica el listón.
- **Cambio aplicado:** ninguno en código ni en corpus (documentaria; el dataset NO se edita). **Reversión:** retirar este registro.

## D-13 — Validación SIK: mecanismo V-A + pronunciamientos (sistema: criterio SIK r7 + T-1)

- **Lectura:** mecanismo **V-A** (validador local ejecutable: T-1 `sik_validator.py`, VALIDADA 4/4 fixtures en r9). V-B no adoptado (5 runs de autocura, 0 efectos observables; sin apoyo en artefactos legibles). V-C no adoptado. **Pronunciamientos:** el reuse de etiqueta **SÍ** cuenta como conflicto a efectos del umbral (H-SIK-001, H-SIK-002: una cita por A-número desnudo es ambigua entre sistemas — C-5); el orden **NO** cuenta como parte de la identidad de un axioma (H-SIK-003: S1→S2 reordena A4/A5 con contenido preservado; la identidad es el contenido, no la posición).
- **Primera ejecución V-A (por mí):** T-1 corrido sobre SIK-VAL-001 (`ronda_8/grietas/sik_S2_S3_A19.json`, sha ce765134da15…, S2→S3, focal A19) con claims vivo + 3 registros PDP-01 + grietas r8 + provenance vivo. **Veredicto: NO_VALIDADA, exit 1** (veredicto guardado en `ejecucion_c/veredicto_sik_val_001.json`): campo_1 VERDE, campo_2 VERDE (48/48 axiomas), campo_3 AMARILLO (chequeo completo PENDIENTE; H-SIK-001 registrado: sí; 0 conflictos nuevos no registrados), campo_4 ROJO (fuente de origen no localizable: la cita lleva sufijo en prosa "~/IDENTITY.md (semilla core, seccion X)" — defecto de forma de la cita, NO de los hashes: ambos reproducen, origen a423b1d1… = ~/IDENTITY.md verificado por mí, destino 48f6782f… = axiomas_a0_a57.md verificado), campo_5 ROJO (no ejecutada), campo_6 ROJO (no registrado en provenance). El artefacto r8 NO se modifica.
- **Qué falta para VALIDADA:** completar el chequeo de los 48 axiomas (campo 3), citar la fuente de origen con ruta pelada (campo 4), registrar la ejecución (campo 5) y registrar en provenance (campo 6). La validación real del corpus vivo queda desbloqueada por este criterio; SIK-VAL-002 (r9, S1→S2, focal A6) queda pendiente de su propia ejecución.
- **Por qué (C-5, C-8, C-2).** **Cambio aplicado:** la ejecución del validador + este registro (el artefacto r8 no se toca). **Reversión:** retirar este registro (el veredicto queda como artefacto histórico de la primera ejecución).

## D-14 — Variograma 1D: D = 2 − H (2D: D = 3 − H) (sistema: literatura + variograma.py v1.0)

- **Lectura:** series 1D: **D = 2 − H**; superficies 2D: **D = 3 − H**. Higuchi: D = 1 − slope.
- **Por qué (C-2, C-3):** la sostienen la literatura, los controles internos, la calibración 6/6 de variograma.py y las re-verificaciones exactas (M-01, M-09). F2/F6 r8 y G09 r9 ya trabajan con D = 2−H para 1D. El statu quo 3−H para 1D es un error localizado, no una convención.
- **Cambio aplicado:** corrección en `medir_nodos.py` L6 (docstring): la línea decía "Superficies (M1, M2, M3, M5): variograma, D = 3 - H" sin alcance — esa formulación es el origen del error 3−H-para-1D. Ahora dice: "Superficies 2D (M1, M2, M3, M5): variograma, D = 3 - H ... SOLO 2D: las series 1D usan D = 2 - H (canon D-14, ronda 10 FASE 1; vease variograma.py)". La aritmética de `fit_d` (3 − sl/2) NO cambia: es correcta para superficies 2D, que es todo lo que el script mide (M1/M2/M3/M5 + M4 box-counting); cambiarla rompería las mediciones 2D. Respaldo: `ejecucion_c/respaldo/medir_nodos.py.respaldo`, sha 4c4f3042… (4.331 B). Nuevo sha: c14bce51… (diff: solo las líneas 6-9 del docstring; compila OK).
- **Verificación (por mí):** M-01 re-verificado con variograma.py: **D = 1,0539 exacto** (H = 0,9461, R² = 0,9999, N = 17.836, ventana 1970-01-01..2018-10-31, serie streamflow_m3s de `ronda_6/mediciones_a/datos/camels_br_17050001_obidos.txt`), idéntico a la fila del dataset. `medir_nodos.py` NO está en provenance (solo `medir_nodos_v2.py`, no tocado): D-14 tiene cero impacto en puertas. M-09 queda desbloqueada para su PDP-01 (BTC 0,2150 < 0,3; SPX 0,3307 > 0,3 con D = 2−H).
- **Reversión:** copiar `respaldo/medir_nodos.py.respaldo` sobre `academico/inbox/mediciones/scripts/medir_nodos.py`; verificar sha 4c4f3042….

## Tabla de reversión (resumen)

| Decisión | Lectura | Cambio aplicado | Reversión |
|---|---|---|---|
| D-07 | K_i = φ⁻¹ (v10.3-A10) | calcKi φ→φ⁻¹ en 2 copias (a30d69e8… → 8d15b724dba0…) | restaurar respaldos, verificar a30d69e8… |
| D-08 | Φ_c(MIU) = 0,6829322 | ninguno (documentaria) | retirar el registro |
| D-10 | R-B: ε ≠ D_eff; D_eff sin derivación | ninguno (documentaria) | retirar el registro |
| D-11 | O-5 + fallback O-1 (c = 2,5) | ninguno (documentaria) | retirar el registro |
| D-12 | canon estricto (5 condiciones) | ninguno (documentaria; dataset en 30 filas) | retirar el registro |
| D-13 | V-A; reuse SÍ, orden NO | 1.ª ejecución T-1 sobre SIK-VAL-001 → NO_VALIDADA | retirar el registro |
| D-14 | D = 2−H (1D); D = 3−H (2D) | docstring medir_nodos.py L6 (4c4f3042… → c14bce51…) | restaurar respaldo, verificar 4c4f3042… |

ρ(x) > 0. Zvvvvv.
