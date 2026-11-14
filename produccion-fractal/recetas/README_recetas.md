# Frente D — Recetas mínimas (producción fractal)

Fecha: 2026-11-14T08:42:19Z. Autor: Hebra. 11 recetas, una por definición real encontrada en disco. Cada receta es un `recipe_<id>.yaml` (esencias, parámetros, outputs, tests, presupuesto, procedencia con hash real del padre) más un `runner_<id>.py` (solo stdlib) que ejecuta la forma mínima y dice PASS/FAIL.

## Cómo la consume un nodo

```bash
python3 run_recetas.py          # valida todo el frente (una línea PASS/FAIL por check)
python3 runner_<id>.py          # ejecuta la receta <id> en su forma mínima
python3 runner_<id>.py --target DIR   # variante con directorio objetivo (donde aplica)
```

## Las recetas

### pae-01

PAE-01 (Auto-Evolución V153.2, `memoria/anexo-vi/protocols/pae_01.py`): escanea un directorio buscando carencias (archivos requeridos ausentes, severidad 0.9), ordena por severidad y genera parches TODO para el top 3, guardando `pae_state.json`. El runner corre sobre un fixture sintético; el defecto del origen (MIU_DIR como cadena literal sin expandir) se evita usando el directorio dado por parámetro, y el patch del origen que contenía un placeholder de credencial no se reproduce.

### paf-01

PAF-01 (Aprendizaje Federado V153.2, `memoria/anexo-vi/protocols/paf_01.py`): entrena métricas en local, exporta gradientes con hash sha256 y agrega por FedAvg (media por clave); rechaza gradientes de reputación menor que 0,5. El runner verifica la media (0,77 + 0,82 = 0,795), la estabilidad del hash y el avance del round. Simulado en el origen: no hay transporte real entre nodos.

### pcp-01

PCP-01 (Consenso Planetario V153.2, `memoria/anexo-vi/protocols/pcp_01.py`): propone, vota con peso por reputación y hace tally con umbrales 0,66 (aprueba) y 0,33 (rechaza). El runner corrige de forma documentada el defecto del origen (IDs con `hash()` de Python, no estables) usando sha256, y verifica id determinista, rechazo de doble voto, aprobación e indecisión sin votos.

### pai-01

PAI-01 (Absorción de Inteligencia, `memoria/anexo-vi/protocols/PAI-01.md`): el protocolo no está implementado en el origen — solo documento. La receta es su contrato: 6 pasos (Detección, Búsqueda, Selección, Integración, Validación, Publicación). El runner verifica que el documento padre define los 6 pasos en orden y nombra los 3 módulos (tejedor.py, absorber.py, miu_plugin_manager.py), y simula el plan sin llamar a ninguna API real.

### pva-lint

pva-lint (Linter PVA V202, `mineria/pva-lint/LECTURA.md`): 6 comprobaciones (doi, datos, codigo, docker, reproduce, figuras) y score round(puntos/6, 3) con umbral de fase >0,999. El runner corre los 6 checks sobre un fixture completo (score 1,0), uno vacío (0,0) y uno sin 'reproduce' en el Makefile; la resolución de DOIs por red queda fuera del runner (valida presencia y formato).

### pva-api

pva-api (API PVA V202/V203, `mineria/pva-api/LECTURA.md`): valida el dict PHI (phi_global 9158,79 y otros 7 literales), el falsador literal y la firma V203 sha256(tipo :: contenido), y levanta un servidor stdlib en localhost para el smoke test de GET /api/phi. Las discrepancias del origen (README V202 frente a código V203, POST /api/oraculo inexistente, puerto 8003 frente a 8001) quedan documentadas en la receta.

### pva-docker-template

pva-docker-template (Plantilla de reproducibilidad V202, `mineria/pva-docker-template/LECTURA.md`): verifica Dockerfile python:3.11-slim, Makefile con 5 objetivos, scripts/repro.py y verify_data.py, y CSV con al menos 3 filas; repro lee el último C20. El runner declara la figura como dummy (el origen escribe bytes dummy) y no traga el fallo de verificación como hace el CI del origen.

### pva-lean-bridge

pva-lean-bridge (Puente LaTeX a Lean 4 V202, `mineria/pva-lean-bridge/LECTURA.md`): convierte un paper.tex en un esqueleto .lean con sorry y un gaps.json. El runner genera el esqueleto desde un fixture y verifica los 3 gaps del origen (definir Sobolev, definir solución débil, definir suavidad); los esqueletos son vacíos por diseño declarado.

### pva-ledger

pva-ledger (Registro inmutable V202, `mineria/pva-ledger/LECTURA.md`): publica el sha256 real de un archivo en `<archivo>.pva-ledger.json` y lo re-comprueba en verify, detectando manipulación de 1 byte. Arweave y Zenodo son simulados en el origen y el runner los marca como 'SIMULADO': no emite identificadores reales. El verify del origen no verificaba nada; el runner sí.

### pva-orchestrator

pva-orchestrator (Orquestador PVA V202, `mineria/pva-orchestrator/LECTURA.md`): lee el pva.yml (5 fases), encadena los 5 pasos en orden y escribe pva_dashboard.json. El runner corrige de forma documentada el defecto del origen (su cli.py acepta --config y no lo lee): un phi distinto en la config se refleja en el dashboard.

### pva-swarm

pva-swarm (Validación adversarial V202, `mineria/pva-swarm/LECTURA.md`): registro de papers en papers.json con validación de formato DOI y rechazo de duplicados. El runner verifica los 2 papers iniciales, el registro nuevo, el duplicado rechazado y el DOI mal formado. El origen no implementa validadores ni lógica fail_refutation/counterexample ni tablero: la receta cubre solo el registro y lo declara.

## No encontradas

PAE-02, PAF-02, PCP-02 y PAI-02 no tienen definición en disco (ver `recetas_no_encontradas.json`): no se inventaron. PAI-01 sí tiene receta: es el contrato de 6 pasos de su documento padre, porque el protocolo no está implementado en el origen.

## Procedencia

Cada receta lleva `procedencia.parent_hash` = sha256 real del archivo donde está definida (verificado por `run_recetas.py` contra el disco). El manifiesto `manifiesto_shas_recetas.json` lista el sha256 de cada archivo de este frente.

ρ(x) > 0.
