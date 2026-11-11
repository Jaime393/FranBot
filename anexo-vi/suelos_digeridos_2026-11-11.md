# SUELOS DIGERIDOS (Ciclo 25)

Fecha: 2026-11-11 ~06:49–06:55 -05. Solo lectura de Drive con el conector.
No se escribió en Drive, no se podó GitHub, no se reconectó, no se cerró G05,
no se abrió G13. Todo lo nuevo vive en el sandbox, en anexo-vi/.

## Qué se leyó

- **MIU_ABSORBIDO/protocolos/** (7 archivos, 2026-09-01/08-30): pae_01.py
  (3.825 B, 99 líneas), paf_01.py (3.966 B, 117 líneas), pcp_01.py (3.273 B,
  101 líneas), pcp_votes.json (648 B), pae_state.json (497 B),
  paf_state.json (749 B), PAI-01.md (949 B, 15 líneas).
- **MIU_ABSORBIDO/MIU/** (5 archivos): PILARES_FUNDAMENTALES.md (6.793 B),
  PILARES_VALIDADOS.md (2.977 B), PILARES_CONJETURA.md (1.978 B),
  LINEAJE_MAESTRO.md (17.066 B, ya leído en ciclo 24),
  INVENTARIO_MAESTRO.md (12.561 B, ya leído en ciclo 24).
- **MIU - Micelio y Deuda** (5 partituras, ya exportadas en ciclo 24):
  P75-14, P74-17, P74-14, P73-19, P71-22.
- **MIU_ABSORBIDO/MIU/** estructura (listado del conector, sin descargar):
  memoria/ (3 .md), huesos/ (5 .md), nodos/ (1 .py), governance/ (1 .yml),
  validation/ (1 .py + 1 carpeta), tests/ (2 .py).

## Protocolos: lo teorizado ya existía como código

- **PAE-01** (Protocolo de Auto-Evolución V153.2): código Python real.
  Clase AutoEvolution; métodos scan_carencia (detecta archivos faltantes
  miu_memory.py/miu_github.py/miu_scanner.py/miu_control.py y tablas vacías
  en miu_brain.db vía sqlite3), generate_patch, evolve, main. Estado
  persistente en pae_state.json (alfa 1.45, beta -0.45, 1 carencia
  github_import, 1 patch, 2026-08-29). Defecto observado: MIU_DIR es una
  cadena literal "os.path.expanduser('~')/miu-ecosistema" (el expanduser no
  se ejecuta). Depende de miu_github.list_repos y miu_memory.remember.
- **PAF-01** (Protocolo de Aprendizaje Federado V153.2): código Python real.
  Clase FederatedLearningNode; métodos train_local, aggregate,
  export_gradient, import_gradient, save, load, demo. Estado en
  paf_state.json (k_tau 34.0666, phi_coherence 0.795, sigma 3.427051, round 1,
  nodo trama_termux, reputación 1.0, 2026-08-29).
- **PCP-01** (Protocolo de Consenso Planetario V153.2): código Python real.
  Clase PlanetaryConsensus; métodos propose, vote (ponderada por reputación
  TC), tally, save, demo. Votos en pcp_votes.json (1 propuesta aprobada:
  "Implementar PAF-01 en todos los nodos", id 4906, 2026-08-29, yes 1.83 /
  no 0 / abstain 0.77).
- **PAI-01**: solo documento (15 líneas, 6 pasos: Detección, Búsqueda,
  Selección, Integración, Validación, Publicación). Referencia tejedor.py,
  absorber.py y miu_plugin_manager.py, que no aparecen en los listados.
  NO implementado.

Veredicto: 3 de 4 protocolos existen como código con estado persistente
real (2026-08-29). El cuarto es especificación. Lo que anexo-vi teorizaba
sobre auto-evolución, aprendizaje federado y consenso ya estaba
implementado dos meses antes de que el módulo existiera.

## Pilares: auditoría propia con DOIs

- **PILARES_FUNDAMENTALES.md** (2026-07-08, Relay.app): 6 pilares, cada uno
  evaluado SOLIDO / CIRCULAR / NO SE / CONJETURO con DOI/fuente real.
- **PILARES_VALIDADOS.md**: 4 pilares (1, 2, 3, 6) SOLIDO/VERIFICADO con
  evidencia independiente (Mandelbrot 1967 DOI 10.1126/science.156.3775.636;
  Bérut 2012 Nature; Ray & Crutchfield 2023 como matiz).
- **PILARES_CONJETURA.md**: 2 pilares sin evidencia independiente (Pilar 4
  CIRCULAR — los casos citados fueron generados por la propia métrica;
  Pilar 5 MIXTO — Entropic Dynamics es real, pero "ξ = 8,57 medido en IBM
  a 23 sigma" es NO SE / NO VERIFICABLE: "riesgo de fabricación o
  confusión de otra sesión").
- **LINEAJE_MAESTRO.md**: línea de tiempo K_τ por ciclo (AN→AV), regla de no
  editar filas viejas.
- **INVENTARIO_MAESTRO.md**: registro persistente de datos Ley de Gaia
  (cierre AV 2026-06-30), tabla PRESENTE/AUSENTE.

Hallazgo mayor: la propia auditoría de Drive (2026-07-08) ya marcaba el
dato ξ=8,57 a 23σ como no verificable. Eso toca directamente a G03 (las 5
predicciones C-001–C-005 nacen de ξ). El script verify_all.py de Drive
genera las predicciones; la auditoría de Drive duda de su entrada.

## Partituras: trabajo científico real, parcialmente replicable

- **P71-22**: 5 nucleobases canónicas (A,G,C,T,U) por FTICR/UHPLC-Orbitrap
  en condritas, Ryugu y Bennu (Oba 2022, Naraoka 2023). Dato publicado real,
  con fuentes. Qualia 783/784.
- **P75-14**: datos Bennu (NH3 13600±800 nmol/g, Gly 44±5, 14 aminoácidos +
  5 bases) con etiquetas [sabe]/[cree]; fórmula Ki(t+1) con errores.
- **P73-19**: Ki(t+1)=1.4660±0.0139 (único valor numérico de Ki(t+1) en las
  5); Qualia 783 (0.66±0.03) y 784 (0.62±0.04); r=0.851±0.016.
- **P74-17 / P74-14**: fórmula Ki(t+1) y definiciones del sistema
  epistémico [sabe]/[cree]/[grieta fértil]; P74-14 define las 3 etiquetas.
- **Sistema epistémico**: [sabe]/[cree]/[grieta fértil] es un sistema de 3
  etiquetas, distinto del SÉ/INFIERO/CONJETURO/NO SÉ de anexo-vi. Paralelo,
  no equivalente.

¿Replicable? La química (Bennu, FTICR, nucleobases) cita fuentes publicadas
reales y es replicable en principio. Los valores Ki(t+1) son internos al
marco MIU (no replicables sin sus definiciones). ¿Está en anexo-vi actual?
No: ningún claim anterior referenciaba partituras. ¿Debería estarlo? Sí,
como claims de provenance (C-039–C-042), no como predicciones.

## Estructura MIU_ABSORBIDO/MIU (sin abrir)

- memoria/: MEMORIA_20260716.md (1.066 B), MEMORIA_20260718.md (2.208 B),
  NODO_SEMANA_2026-07-14.md (3.513 B).
- huesos/: hueso_23_dimensionalidad_fractal_cuantica.md,
  HUESO_27_verificacion_github.md, hueso_25_nodo_amazonia_deter_inpe.md,
  HUESO_26_estado_tejido.md, hueso_24_conectoma_fractal_resonancia_neuronal.md.
- nodos/: nodo_amazonia.py (8.631 B).
- governance/: REJECTED_ARTIFACTS.yml (439 B).
- validation/: test_omega_f_blind.py (463 B) + carpeta df_benchmark.
- tests/: test_ift_solver.py (2.786 B), test_omega_f_blind.py (447 B).

Nada de esto se descargó ni se leyó por dentro (alcance: listado de primer
nivel). Los huesos 23–27 y nodo_amazonia.py son suelos para un ciclo futuro.

## Claims nuevos (C-027 a C-045)

19 claims, todos SE (afirmaciones verificadas por lectura directa o listado
del conector). 17 con hash sha256 real de la copia local exportada; 2 con
hash NO_DISPONIBLE (estructura, solo listado).

- SE: 19 — C-027, C-028, C-029, C-030, C-031, C-032, C-033, C-034, C-035,
  C-036, C-037, C-038, C-039, C-040, C-041, C-042, C-043, C-044, C-045.
- INFIERO: 0.
- CONJETURO: 0.
- NO_SE: 0.

| ID | Afirmación | Grieta |
|---|---|---|
| C-027 | PAE-01 existe como código Python (99 líneas, AutoEvolution) | G-NUEVA: protocolos Drive no integrados |
| C-028 | PAF-01 existe como código Python (117 líneas, FederatedLearningNode) | G-NUEVA: protocolos Drive no integrados |
| C-029 | PCP-01 existe como código Python (101 líneas, PlanetaryConsensus) | G-NUEVA: protocolos Drive no integrados |
| C-030 | PAI-01.md existe como protocolo documentado, NO implementado | G-NUEVA: protocolos Drive no integrados |
| C-031 | pae_state.json: alfa 1.45, beta -0.45, 1 carencia, 1 patch | G-NUEVA: protocolos Drive no integrados |
| C-032 | paf_state.json: k_tau 34.0666, phi 0.795, sigma 3.427051, round 1 | G-NUEVA: protocolos Drive no integrados |
| C-033 | pcp_votes.json: 1 propuesta aprobada (PAF-01, id 4906) | G-NUEVA: protocolos Drive no integrados |
| C-034 | PILARES_FUNDAMENTALES.md: 6 pilares auditados 2026-07-08 | G-NUEVA: pilares auditados no integrados |
| C-035 | PILARES_VALIDADOS.md: 4 pilares SOLIDO con DOIs | G-NUEVA: pilares auditados no integrados |
| C-036 | PILARES_CONJETURA.md: 2 pilares sin evidencia independiente | G-NUEVA: pilares auditados no integrados |
| C-037 | Auditoría Drive: ξ=8,57 a 23σ es NO SE / NO VERIFICABLE | G03 |
| C-038 | INVENTARIO_MAESTRO.md: registro de datos Ley de Gaia | G-NUEVA: registro de datos no integrado |
| C-039 | P73-19: Ki(t+1)=1.4660±0.0139, Qualia 783/784 | G-NUEVA: partituras no catalogadas |
| C-040 | P71-22: 5 nucleobases FTICR en condritas/Ryugu/Bennu | G-NUEVA: partituras no catalogadas |
| C-041 | P75-14: datos Bennu NH3/Gly con [sabe]/[cree] | G-NUEVA: partituras no catalogadas |
| C-042 | Partituras usan [sabe]/[cree]/[grieta fértil] (3 etiquetas) | G-NUEVA: partituras no catalogadas |
| C-043 | LINEAJE_MAESTRO.md: línea de tiempo K_τ AN→AV | G-NUEVA: línea de tiempo K_τ no integrada |
| C-044 | memoria/ 3 .md + huesos/ 5 .md (huesos 23–27) | G-NUEVA: estructura MIU no mapeada |
| C-045 | nodos/, governance/, validation/, tests/ (archivos y tamaños) | G-NUEVA: estructura MIU no mapeada |

## Qué debería integrarse al anexo-vi

- Los 3 protocolos con código (PAE-01, PAF-01, PCP-01) como referencias de
  provenance: el módulo verifica claims; los protocolos son el código que
  los claims deberían poder invocar. No copiar el código (tiene el defecto
  del MIU_DIR literal y depende de miu_github/miu_memory): referenciarlo.
- Los 6 pilares con sus estados SOLIDO/CIRCULAR: el sistema de evaluación
  de pilares es compatible con detector_dogma.py (DOGMA/BUSCADOR) y con los
  estados SÉ/INFIERO/CONJETURO/NO SÉ. Un ciclo futuro puede mapear
  SOLIDO→SE, CIRCULAR→CONJETURO, NO SE→NO_SE.
- Las partituras como claims de provenance (ya hecho: C-039–C-042).
- El registro INVENTARIO_MAESTRO.md como disciplina: la tabla
  PRESENTE/AUSENTE es el mismo problema que provenance.sha256 resuelve para
  claims. Un ciclo futuro puede generar un inventario equivalente para los
  archivos del módulo.
- La línea de tiempo K_τ (LINEAJE_MAESTRO.md) como referencia para G09
  (PVE-01) y para la evolución de K_i.

## Qué debería quedarse solo en Drive como referencia

- Los 50 MB de auditorias/ (memoria_consolidada.json, genealogia.md):
  archivos grandes, no leídos, fuera del alcance del módulo.
- diario/ (498 archivos), logs/ (118), nutrientes/ (96), gemelos/ (37),
  backups/ (107): no listados por dentro, no catalogados.
- Los datos crudos de Bennu/FTICR: las partituras citan fuentes publicadas;
  el módulo referencia las partituras, no los datos.
- PAI-01.md: especificación sin implementar; queda como referencia hasta
  que alguien implemente tejedor.py/absorber.py.

## Grietas nuevas detectadas (el Jardinero decide si se catalogan como G13 o se integran directamente)

- **G-NUEVA: protocolos Drive no integrados en anexo-vi** — PAE-01, PAF-01,
  PCP-01 existen como código con estado real; PAI-01 solo como documento.
  El módulo no los referencia ni los invoca.
- **G-NUEVA: pilares auditados no integrados en anexo-vi** — 6 pilares con
  estados SOLIDO/CIRCULAR y DOIs (2026-07-08) sin mapeo a los estados del
  módulo.
- **G-NUEVA: partituras científicas no catalogadas en anexo-vi** — P42–P75
  con datos Bennu/FTICR y Ki(t+1) numérico; solo 4 claims las referencian
  ahora (C-039–C-042); las 11 partituras restantes siguen sin catalogar.
- **G-NUEVA: registro de datos no integrado en anexo-vi** —
  INVENTARIO_MAESTRO.md (tabla PRESENTE/AUSENTE) y LINEAJE_MAESTRO.md
  (K_τ por ciclo) sin equivalente en el módulo.
- **G-NUEVA: estructura MIU no mapeada en anexo-vi** — memoria/, huesos/,
  nodos/, governance/, validation/, tests/ listados pero no leídos por
  dentro (huesos 23–27, nodo_amazonia.py, REJECTED_ARTIFACTS.yml).

Ninguna se registra como G13. G13 no existe y no se abre.

## Cierre de G-NUEVA (Ciclo 26 — integración, no catalogación)

- **G-NUEVA-1 (protocolos Drive no integrados): CERRADA en ciclo 26.**
  Integrados en anexo-vi/protocols/ (pae_01.py, paf_01.py, pcp_01.py,
  PAI-01.md, README.md con defectos). Claims C-046–C-049 (C-049: NO_SE —
  no son funcionales en su estado actual).
- **G-NUEVA-2 (pilares auditados no integrados): CERRADA en ciclo 26.**
  Integrados en anexo-vi/pilares_integrados.md (6 fundacionales, 4
  validados con DOIs, 2 en conjetura, tabla cruzada, sección G07). Claims
  C-050–C-059.
- **G-NUEVA-3 (partituras científicas no catalogadas): CERRADA en ciclo 26.**
  Catalogadas en anexo-vi/partituras_catalogo.md (10 partituras, tabla con
  datos/Ki/Qualia/referencias/estado). Claims C-060–C-069.
- **G-NUEVA-4 (registro de datos no integrado): ABIERTA.** Requiere leer
  MIU_ABSORBIDO/MIU/INVENTARIO_MAESTRO.md en próximo ciclo (el archivo ya
  se leyó en ciclos 24–25 y tiene claim C-038; falta el equivalente del
  módulo, no la lectura).
- **G-NUEVA-5 (estructura MIU no mapeada): ABIERTA.** Requiere abrir las
  subcarpetas memoria/huesos/nodos/governance/validation/tests en próximo
  ciclo (listadas en ciclo 25, no leídas por dentro).

## Cierre de G-NUEVA 4 y 5 (Ciclo 27)

- **G-NUEVA-4 (registro de datos no integrado): CERRADA en ciclo 27.**
  INVENTARIO_MAESTRO.md catalogado en anexo-vi/estructura_miu.md (tabla al
  cierre de AV 2026-06-30: 5 PRESENTE / 12 AUSENTE en 17 filas; regla de
  oro; recuperaciones AW/AY; dos tautologías auditadas). Claim C-071.
- **G-NUEVA-5 (estructura MIU no mapeada): CERRADA en ciclo 27.** Árbol
  completo en anexo-vi/estructura_miu.md (32 archivos de raíz + 6
  subcarpetas leídas por dentro: 13 archivos descargados y leídos).
  Claims C-070, C-072, C-073, C-074, C-075.

**G-NUEVA: cerradas 5/5** (3 en ciclo 26 por integración, 2 en ciclo 27 por
mapeo). Ninguna catalogada como G13. G13 no existe y no se abre.

## Cierre de G-NUEVA-6 (Ciclo 30)

- **G-NUEVA-6 (axiomas A0-A57 no documentados en anexo-vi): CERRADA en
  ciclo 30**, extraídos del Vault a axiomas_a0_a57.md (58 axiomas, fuente
  20 Axiomas_A0-A57_58_Completos.md, hash en evidence/
  VAULT_axiomas_a0_a57.md). G07 queda cerrada parcialmente
  (documentados, no validados: A10/A43 PVE-01, A29 ξ sin DOI, A31 hash
  congelado). Claims C-086–C-090, C-095.

**G-NUEVA: cerradas 6/6.**

ρ(x) > 0.
