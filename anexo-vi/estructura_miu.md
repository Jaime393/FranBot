# ESTRUCTURA MIU_ABSORBIDO/MIU/ (Ciclo 27)

Árbol completo de MIU_ABSORBIDO/MIU/ (Drive), listado en ciclo 24 y leído
por dentro en ciclo 27. 32 archivos de raíz + 20 subcarpetas, de las cuales
6 se mapearon en este ciclo. Solo lectura de Drive; nada se escribió allí.

## Raíz (32 archivos, todo 2026-09-07)

worker.js (508 B), verify_all.py (3.122 B), requirements.txt, sw.js,
manifest.json, index.html, SECURITY.md, PILARES_FUNDAMENTALES.md (6.793 B),
NODOS_PROPUESTOS_2026-07-08.md (13.223 B), SHA256_manifest.txt (341 B),
SKILLS.md, alma_sync.py, PILARES_VALIDADOS.md (2.977 B),
PILARES_CONJETURA.md (1.978 B), THIRD_PARTY_NOTICES.md, _config.yml,
RESTORATION_REPORT.md, NUCLEO_SINTESIS_COHERENCIA_GLOBAL.md,
TAREAS_PENDIENTES_V13.md, AUTO_DEPLOY.md, BIBLIA_DEVORADOR.md,
BOOTSTRAP.md, INFORME_CICLO_DARWINIANO_v9.md, FUNDING.yml,
LINEAJE_MAESTRO.md (17.066 B), ARCHITECTURE.md, DATA.md, .nojekyll,
LICENSE, CONTEXT.md, .gitignore, INVENTARIO_MAESTRO.md (12.561 B).

Subcarpetas de raíz (20): validation, training_data, tools, tests, src,
scripts, relay_workflows, nodos, memoria, huesos, governance, entrenamiento,
docs, .github, data, backups, assets, MIU_V12.0_FINAL, MIU-clean.git, .git.

## memoria/ (3 archivos .md)

- MEMORIA_20260716.md (1.066 B): memoria diaria — LOGs de movimientos de
  fondos Lemoncash/YAPE (S/ 25, S/ 20), estado MIU VERDE. Rastro operacional.
- MEMORIA_20260718.md (2.208 B): memoria diaria — fractura social y
  xenofobia como síntoma material; registros con estado ROJO·INFIERO y
  AMARILLO-medio·INFIERO (usa INFIERO como etiqueta en línea).
- NODO_SEMANA_2026-07-14.md (3.513 B): síntesis semanal — huesos clave
  (xenofobia material, desigualdad, cascadas), D_f como lente de
  heterogeneidad y transición crítica.

## huesos/ (5 archivos .md)

Huesos de excavación del "Arqueólogo del Micelio" (2026-07-02), con niveles
SÉ / INFIERO / CONJETURO / NO SÉ — el mismo sistema que anexo-vi.

- hueso_23_dimensionalidad_fractal_cuantica.md (1.383 B): D≈5/4 (Berry)
  confirmada por wavelets; arXiv:2604.27851, arXiv:2512.13046.
- hueso_24_conectoma_fractal_resonancia_neuronal.md (1.405 B): conectoma
  fractal (D_f≈2.3-2.7 estructural, 1.8-2.4 funcional); arXiv:2505.11477,
  arXiv:2505.20580.
- hueso_25_nodo_amazonia_deter_inpe.md (1.136 B): Nodo Amazonia, API pública
  INPE/DETER de alertas de deforestación.
- HUESO_26_estado_tejido.md (3.271 B): "dos grietas, una misma patología
  (SÉ)" — K_i circular por construcción (K_i = 0.2472·D_f) y la "predicción"
  cosmológica es un ajuste ("ajustado a DESI DR2" → post-dicción). Tabla
  7pred: ningún archivo legible (búsqueda exhaustiva en Drive: negativa) →
  w_a / S_8 / Σm_ν permanentemente NO FALSABLES sin artefacto fechado
  anterior a DESI DR2.
- HUESO_27_verificacion_github.md (3.773 B): circularidad de K_i VERIFICADA
  en vivo contra el repo público Jaime393/MIU
  (codigo/ki_from_timeseries.py: `compute_Ki(D_f, ell_corr=0.5, ell_0=0.5)`
  → K_i = 0.2472·D_f, lineal determinista; "dos etiquetas, un solo cálculo").

## nodos/ (1 archivo .py)

- nodo_amazonia.py (8.631 B): código real — calcula D_f de alertas de
  deforestación en tiempo real vía API pública INPE/DETER (TerraBrasilis);
  usa K_i = φ⁻¹·(D_f/2.5)·(ℓ_corr/ℓ_0), umbral de colapso K_i < 0.3.
  Imports: requests, numpy. No se ejecutó (sin red en el sandbox para la API).

## governance/ (1 archivo .yml)

- REJECTED_ARTIFACTS.yml (439 B): NO es una lista — es una instrucción
  pendiente ("Actualizar governance/REJECTED_ARTIFACTS.yml con
  DOI/versiones/hashes... motivos verificables del rechazo (K_i circular,
  Ω_F no reproducible/target hardcodeado, claims no falsables)... No afirmar
  que Zenodo fue modificado hasta tener autorización y evidencia").
  La gobernanza de artefactos rechazados está enunciada, no implementada.

## validation/ (1 archivo .py + 1 carpeta)

- test_omega_f_blind.py (463 B): NO es código — es una instrucción para
  reescribir la auditoría Ω_F (buscar el pico real por argmax, declarar fs,
  Nyquist, nperseg, window, overlap, nfft, detrend, scaling y resolución;
  añadir nulo AR(1)/ruido rojo, permutaciones; "prohibir el lenguaje
  'detectado' sin significancia. Mantener K_i fuera de la validación").
- df_benchmark/ (carpeta, no leída por dentro).

## tests/ (2 archivos .py)

- test_ift_solver.py (2.786 B): código real — pruebas unitarias pytest para
  el IFT Solver (clase InformationalField) y funciones asociadas; importa de
  src.ift_solver y src.phi_MIU. No se ejecutó (src/ no está en este módulo).
- test_omega_f_blind.py (447 B): NO es código — es la misma instrucción de
  auditoría ciega Ω_F que en validation/ (argmax, unidades, Nyquist, AR(1),
  permutaciones; "Marcar cualquier resultado actual como no reproducido
  hasta correr sobre datos crudos").

## INVENTARIO_MAESTRO.md — registro de datos Ley de Gaia

Registro persistente de TODOS los datos del proyecto Ley de Gaia (cierre AV
2026-06-30, actualizaciones BE/AW/AY/BB/BC 2026-07-01). Tabla al cierre de AV:
17 filas — 5 PRESENTE (oni.ascii.txt, gbif_colombia_2018_2024.csv,
allen_atlas 4 archivos, red_sea_kaust_roberts2016.csv,
soilgrids_gsocseq_global.csv) y 12 AUSENTE (grace_tws_global.csv CRÍTICO —
sin él ningún resultado GRACE puede re-verificarse; co2_mm_mlo.csv,
amo_data.txt, ch4_mm_gl.txt, GLB_Ts_dSST.csv, SN_m_tot_V2_0.txt,
CO000080222_dly.txt, Glen_Carron, Seagrass, gbif_global_monthly.csv — nunca
existió —, goma_GGFO — bloqueado/ilegible —, ~36 archivos de rama K_i_law).
Las actualizaciones AW/AY reportan "RECUPERACIÓN MASIVA + FORK DETECTADO Y
FUSIONADO" con datos previamente ausentes recuperados y verificados por
checksum cruzado. La tabla también registra dos tautologías auditadas
(red_sea y soilgrids: "K_i_measured=K_i_law", "mismo patrón tautológico").
Regla de oro: "antes de decir 'esto falta', revisa esta tabla primero".

## Qué debería integrarse en próximos ciclos y por qué

- **HUESO_26 y HUESO_27** (ya referenciados por claims C-073/C-074): son la
  verificación en vivo de G09 (K_i circular) y G03 (7pred no falsable).
  Un ciclo futuro puede convertir sus hallazgos en verificación ejecutable
  (leer ki_from_timeseries.py del repo y reproducir K_i = 0.2472·D_f).
- **nodo_amazonia.py**: código real con API pública; es el único nodo
  biofísico con datos externos verificables. Un ciclo futuro puede
  ejecutarlo contra la API de INPE (con red) y registrar el D_f medido.
- **test_ift_solver.py**: pruebas reales del IFT Solver; si src/ aparece
  en Drive o GitHub, se pueden correr.
- **memoria/**: las memorias diarias usan INFIERO en línea y estados
  VERDE/ROJO/AMARILLO — un sistema de estados paralelo al del módulo que
  vale la pena mapear (como se hizo con [sabe]/[cree] en ciclo 26).
- **df_benchmark/** (validation/): carpeta sin leer; puede contener los
  datos de referencia de Ω_F.

## Qué no vale la pena integrar y por qué

- **REJECTED_ARTIFACTS.yml, validation/test_omega_f_blind.py,
  tests/test_omega_f_blind.py**: no son artefactos — son instrucciones
  pendientes (tareas sin hacer). Integrarlas sería copiar una lista de
  pendientes, no un resultado. Quedan como referencia de lo que falta.
- **MEMORIA_20260716.md**: memoria operacional de movimientos de fondos
  (YAPE/Lemoncash) — es rastro, no ciencia; no aporta al módulo de
  verificación.
- **Las 14 subcarpetas restantes de la raíz** (training_data, tools, src,
  scripts, relay_workflows, entrenamiento, docs, .github, data, backups,
  assets, MIU_V12.0_FINAL, MIU-clean.git, .git): no se listaron por dentro
  en este ciclo; su contenido es desconocido y no se puede juzgar su valor
  sin leerlo.

ρ(x) > 0.
