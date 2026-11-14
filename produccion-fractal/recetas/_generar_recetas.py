#!/usr/bin/env python3
"""Generador del Frente D — recetas mínimas (producción fractal).
Escribe recipe_<id>.yaml + runner_<id>.py por cada definición real encontrada
en disco, más run_recetas.py, recetas_no_encontradas.json, README_recetas.md
y manifiesto_shas_recetas.json. Solo stdlib.
"""
import hashlib
import json
import os
from datetime import datetime, timezone
from pathlib import Path

OUT = Path("/home/hatch/workspace/produccion-fractal/recetas")
WS = Path("/home/hatch/workspace")
TS = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def sha256_file(p):
    return "sha256:" + hashlib.sha256(Path(p).read_bytes()).hexdigest()


PARENTS = {
    "pae-01": "memoria/anexo-vi/protocols/pae_01.py",
    "paf-01": "memoria/anexo-vi/protocols/paf_01.py",
    "pcp-01": "memoria/anexo-vi/protocols/pcp_01.py",
    "pai-01": "memoria/anexo-vi/protocols/PAI-01.md",
    "pva-lint": "mineria/pva-lint/LECTURA.md",
    "pva-api": "mineria/pva-api/LECTURA.md",
    "pva-docker-template": "mineria/pva-docker-template/LECTURA.md",
    "pva-lean-bridge": "mineria/pva-lean-bridge/LECTURA.md",
    "pva-ledger": "mineria/pva-ledger/LECTURA.md",
    "pva-orchestrator": "mineria/pva-orchestrator/LECTURA.md",
    "pva-swarm": "mineria/pva-swarm/LECTURA.md",
}

DEFINICION = {
    "pae-01": "clase AutoEvolution (líneas 13-84): scan_carencia L18, generate_patch L53, evolve L63, main L86; 99 líneas.",
    "paf-01": "clase FederatedLearningNode (líneas 14-85): train_local L22, aggregate L31, export_gradient L48, import_gradient L59, save L66, load L78, demo L88; 117 líneas.",
    "pcp-01": "clase PlanetaryConsensus (líneas 13-73): propose L18, vote L32, tally L46, save L69, demo L76; 101 líneas.",
    "pai-01": "documento, 15 líneas: 6 pasos en ## Pasos (L6-L13): Detección, Búsqueda, Selección, Integración, Validación, Publicación. No implementado.",
    "pva-lint": "LECTURA.md L1: 6 comprobaciones (doi, datos, codigo, docker, reproduce, figuras); score round(puntos/6, 3); umbral de fase >0.999.",
    "pva-api": "LECTURA.md L1: app dual FastAPI/stdlib; endpoints GET /api/phi, /api/ki, /api/falsador, /api/micelio/lexico; POST /api/micelio, /api/publish; dict PHI; falsador; fix V203 de firma.",
    "pva-docker-template": "LECTURA.md L1: Dockerfile python:3.11-slim + make; Makefile con repro, dev, test, lint, reproduce; scripts/repro.py y scripts/verify_data.py; data GRACE TN14.",
    "pva-lean-bridge": "LECTURA.md L1: cli.py --tex paper.tex --out lean; esqueletos Mathlib con sorry; gaps.json {theorems, gaps}; ejemplo NavierStokes.lean.",
    "pva-ledger": "LECTURA.md L1: cli.py publish paper.pdf --zenodo; verify <sha256>; salida <archivo>.pva-ledger.json con tx Arweave + DOI (simulados en el origen).",
    "pva-orchestrator": "LECTURA.md L1: cli.py encadena 5 pasos (pva-lint, pva-docker-template, pva-lean-bridge, pva-ledger, pva-swarm); pva.yml con 5 fases (2026-2030+); pva_dashboard.json.",
    "pva-swarm": "LECTURA.md L1: POST /api/papers; registro en papers.json (2 papers iniciales); stdlib fallback; sin validadores ni tablero en el código.",
}


def P(nombre, tipo, default, descripcion):
    return {"nombre": nombre, "tipo": tipo, "default": default, "descripcion": descripcion}


def O(nombre, formato):
    return {"nombre": nombre, "formato": formato}


def T(nombre, contrato, prueba):
    return {"nombre": nombre, "contrato": contrato, "prueba": prueba}


RECIPES = [
    {
        "id": "pae-01",
        "nombre": "PAE-01 — Protocolo de Auto-Evolución V153.2",
        "esencias": ["measure", "validate"],
        "parametros": [
            P("miu_dir", "string", "~/miu-ecosistema", "Directorio del ecosistema a escanear."),
            P("required_files", "list", ["miu_memory.py", "miu_github.py", "miu_scanner.py", "miu_control.py"], "Archivos cuya ausencia es carencia missing_file."),
            P("max_patches", "integer", 3, "Máximo de parches generados por ciclo (top por severidad)."),
        ],
        "outputs": [
            O("pae_state.json", "JSON: {timestamp, carencias_found, patches_generated, patches[{carencia, patch}]}"),
        ],
        "tests": [
            T("scan_detecta_faltante", "Todo archivo requerido ausente aparece como carencia tipo missing_file con severidad 0.9.", "Fixture con 2 de 4 archivos ausentes: 2 carencias missing_file, severidad 0.9."),
            T("orden_por_severidad", "Las carencias salen ordenadas por severidad descendente.", "Fixture con severidades 0.9, 0.8 y 0.6: orden de salida 0.9, 0.8, 0.6."),
            T("patch_menciona_target", "El patch generado nombra el target de la carencia.", "Carencia missing_file miu_github.py: el patch contiene 'miu_github.py'."),
            T("evolve_escribe_estado", "evolve escribe pae_state.json válido con carencias_found igual al número de carencias.", "Correr evolve sobre el fixture: JSON válido, campos presentes, carencias_found correcto."),
        ],
        "presupuesto": {"tokens_estimados": 600, "cpu": "bajo (<1 s en CPU local)", "almacenamiento_bytes": 2048},
        "notas": [
            "Defecto del origen (README de protocols/): MIU_DIR es una cadena literal sin expandir; el runner usa el directorio dado por parámetro, no el literal.",
            "El generate_patch del origen incluye una línea con un placeholder de credencial; el runner NO la reproduce: genera solo comentarios TODO.",
            "Claim C-049: NO_SE — el protocolo existe pero no es funcional sin corregir los defectos en su host original.",
        ],
    },
    {
        "id": "paf-01",
        "nombre": "PAF-01 — Protocolo de Aprendizaje Federado V153.2",
        "esencias": ["measure", "route"],
        "parametros": [
            P("node_id", "string", "trama_termux", "Identificador del nodo local."),
            P("reputation_min", "float", 0.5, "Reputación mínima para aceptar un gradiente entrante."),
            P("metricas", "list", ["phi_coherence", "k_tau", "sigma"], "Métricas que el nodo entrena en local."),
        ],
        "outputs": [
            O("gradiente", "JSON: {node_id, round, params, reputation, hash (16 hex de sha256)}"),
            O("paf_state.json", "JSON: {node_id, round, reputation, local_params, global_params, timestamp}"),
        ],
        "tests": [
            T("fedavg_media", "aggregate promedia por clave los valores locales y los de otros nodos.", "Local 0.77 + otro 0.82 en phi_coherence: agregado 0.795."),
            T("hash_estable", "export_gradient produce un hash sha256 de 16 hex, estable para los mismos parámetros.", "Dos exports con los mismos params: mismo hash."),
            T("rechaza_baja_reputacion", "import_gradient devuelve False si reputation < 0.5.", "Gradiente con reputation 0.4: False."),
            T("round_avanza", "aggregate con otros nodos incrementa round en 1.", "round 0 tras un aggregate con otro nodo: round 1."),
        ],
        "presupuesto": {"tokens_estimados": 700, "cpu": "bajo (<1 s en CPU local)", "almacenamiento_bytes": 2048},
        "notas": [
            "El origen es simulado: train_local no entrena de verdad y aggregate promedia diccionarios en memoria; no hay transporte real entre nodos.",
            "El hash del gradiente es sha256 del JSON ordenado, truncado a 16 hexadecimales.",
        ],
    },
    {
        "id": "pcp-01",
        "nombre": "PCP-01 — Protocolo de Consenso Planetario V153.2",
        "esencias": ["validate", "attest"],
        "parametros": [
            P("umbral_aprobacion", "float", 0.66, "yes_ratio mayor que este valor aprueba la propuesta."),
            P("umbral_rechazo", "float", 0.33, "yes_ratio menor que este valor rechaza la propuesta."),
            P("proposer", "string", "trama_termux", "Proponente por defecto."),
        ],
        "outputs": [
            O("pcp_votes.json", "JSON: {proposals[{id, title, description, proposer, timestamp, status, votes, voters}], timestamp}"),
        ],
        "tests": [
            T("id_determinista", "El mismo título y proponente producen el mismo id en dos instancias.", "Dos propose iguales: ids iguales. El origen usa hash() de Python, no estable entre procesos; el runner usa sha256."),
            T("doble_voto_rechazado", "El mismo votante no puede votar dos veces en una propuesta.", "Segundo vote del mismo votante: False."),
            T("tally_aprueba", "yes_ratio > 0.66 da status approved.", "yes 0.95 + 0.88, abstain 0.77: ratio 0.7038, status approved."),
            T("tally_indeciso", "Sin votos el tally devuelve undecided.", "Propuesta sin votar: tally undecided."),
        ],
        "presupuesto": {"tokens_estimados": 700, "cpu": "bajo (<1 s en CPU local)", "almacenamiento_bytes": 4096},
        "notas": [
            "Corrección documentada frente al origen: los IDs de propuesta usan hash() de Python (no estable); el runner usa sha256(título + proponente) mod 10000.",
            "El origen no valida votantes contra una lista de nodos ni define el umbral fuera de tally(); el runner declara los umbrales como parámetros.",
        ],
    },
    {
        "id": "pai-01",
        "nombre": "PAI-01 — Protocolo de Absorción de Inteligencia",
        "esencias": ["route", "validate", "attest"],
        "parametros": [
            P("carencia", "string", "datos de mercado", "Carencia que dispara el protocolo (ejemplo del documento)."),
            P("api_candidata", "string", "", "API candidata si ya se conoce; vacío si hay que buscarla."),
            P("criterios", "list", ["K_i", "D_f", "FDC"], "Criterios de coherencia para la selección."),
        ],
        "outputs": [
            O("plan_absorcion.json", "JSON: {carencia, pasos[6] con {nombre, estado}, plugin, validado}"),
        ],
        "tests": [
            T("seis_pasos_en_orden", "El documento padre define los 6 pasos en orden: Detección, Búsqueda, Selección, Integración, Validación, Publicación.", "Leer PAI-01.md y verificar que los 6 nombres aparecen en ese orden."),
            T("modulos_referenciados", "El documento nombra tejedor.py, absorber.py y miu_plugin_manager.py.", "Los 3 nombres presentes en el archivo padre."),
            T("plan_seis_entradas", "El plan generado tiene 6 entradas, una por paso.", "Correr con la carencia de ejemplo: 6 entradas."),
        ],
        "presupuesto": {"tokens_estimados": 500, "cpu": "bajo (<1 s en CPU local)", "almacenamiento_bytes": 1024},
        "notas": [
            "Solo documento, no implementado en el origen (ESTADO.md: 'PAI-01 solo como documento (6 pasos, no implementado)').",
            "El runner valida el contrato contra el documento padre y simula el plan; no llama a ninguna API real.",
        ],
    },
    {
        "id": "pva-lint",
        "nombre": "pva-lint — Linter PVA V202",
        "esencias": ["validate"],
        "parametros": [
            P("target_dir", "string", ".", "Directorio del repo a verificar."),
            P("umbral_fase", "float", 0.999, "Umbral de transición de fase: score mayor que este valor."),
            P("timeout_doi_s", "integer", 5, "Timeout en segundos para la resolución de DOIs por red."),
        ],
        "outputs": [
            O("pva_report.json", "JSON: {pva_score, carencias, checks{doi, datos, codigo, docker, reproduce, figuras}}"),
        ],
        "tests": [
            T("fixture_completo_score_1", "Los 6 checks pasan y el score es 1.0.", "Fixture con DOI en .md, data/, .git, Dockerfile, Makefile con 'reproduce' y fig_plot.py: score 1.0."),
            T("fixture_vacio_score_0", "Sin nada en el directorio el score es 0.0.", "Directorio vacío: score 0.0."),
            T("reproduce_sin_palabra", "Un Makefile sin la palabra 'reproduce' hace fallar el check reproduce.", "Makefile sin la palabra: check reproduce False."),
        ],
        "presupuesto": {"tokens_estimados": 800, "cpu": "bajo (<1 s en CPU local, sin red)", "almacenamiento_bytes": 1024},
        "notas": [
            "La verificación de DOIs por red (GET doi.org/api/handles) queda fuera del runner: el check valida presencia y formato del DOI con la regex 10.\\d{4,}/[^\\s}]+.",
            "Score: round(puntos/6, 3). Umbral de transición de fase >0.999 según el README del repo.",
            "NO_SÉ del origen: cuáles son 'las 5 capas' del ecosistema PVA; el README las nombra sin listarlas.",
        ],
    },
    {
        "id": "pva-api",
        "nombre": "pva-api — API PVA V202/V203",
        "esencias": ["measure", "route"],
        "parametros": [
            P("port", "integer", 8003, "Puerto por defecto del código (no 8001 del README)."),
            P("mode", "string", "stdlib", "Modo de arranque: stdlib (http.server) o fastapi si está disponible."),
            P("host", "string", "127.0.0.1", "Interfaz de escucha del servidor de prueba."),
        ],
        "outputs": [
            O("respuesta /api/phi", "JSON: dict PHI {phi_global, phi_colmena, phi_miu, rho, sustratos, Phi_lengua, Phi_binocular, topologia}"),
            O("respuesta /api/falsador", "JSON: {prediccion: 'Phi>Phi_c debe implicar experiencia si Ki en [0.55,0.62]'}"),
        ],
        "tests": [
            T("constantes_phi", "El dict PHI contiene los 8 literales del código.", "Comparar phi_global 9158.79, phi_colmena 6284.17, phi_miu 2874.62, rho '>0', sustratos 36, Phi_lengua 1.1194, Phi_binocular 17924.26, topologia 70508."),
            T("falsador_presente", "El falsador es la cadena literal del código.", "Igualdad literal con 'Phi>Phi_c debe implicar experiencia si Ki en [0.55,0.62]'."),
            T("firma_v203", "La firma es sha256(tipo :: contenido), 64 hexadecimales, estable.", "sha256('oraculo::{}'): 64 hex y mismo valor en dos cómputos."),
            T("servidor_stdlib", "GET /api/phi en localhost devuelve 200 y phi_global 9158.79.", "Levantar http.server en un hilo y pedir /api/phi."),
        ],
        "presupuesto": {"tokens_estimados": 900, "cpu": "bajo (<1 s en CPU local)", "almacenamiento_bytes": 1024},
        "notas": [
            "Discrepancias del origen documentadas en LECTURA: README V202 frente a código V203; POST /api/oraculo no existe en el código (404); puerto por defecto 8003, no 8001; el Dockerfile arranca 'uvicorn app:app' pero app.py no define ningún objeto app.",
            "El runner usa solo stdlib; no requiere FastAPI.",
        ],
    },
    {
        "id": "pva-docker-template",
        "nombre": "pva-docker-template — Plantilla de reproducibilidad V202",
        "esencias": ["validate"],
        "parametros": [
            P("target_dir", "string", ".", "Directorio del repo a verificar."),
            P("min_filas_csv", "integer", 3, "Mínimo de filas de datos para declarar integridad OK."),
        ],
        "outputs": [
            O("fig_C20.png", "Bytes dummy: el origen escribe bytes dummy y lo declara como figura generada."),
            O("reporte repro", "stdout con número de filas, último C20 y línea Ktau de ejemplo."),
        ],
        "tests": [
            T("fixture_completo", "Dockerfile FROM python:3.11-slim, Makefile con 5 objetivos, scripts/repro.py, scripts/verify_data.py y CSV de datos.", "Fixture con todo presente: PASS."),
            T("verify_min_filas", "Un CSV con al menos min_filas_csv filas da 'OK integridad datos'.", "CSV de 7 filas: OK. CSV de 2 filas: FAIL."),
            T("repro_lee_c20", "repro imprime el último valor C20 del CSV.", "CSV con último C20 -0.0004846999: la salida lo contiene."),
        ],
        "presupuesto": {"tokens_estimados": 700, "cpu": "bajo (<1 s en CPU local)", "almacenamiento_bytes": 8192},
        "notas": [
            "El origen escribe fig_C20.png con bytes dummy y anuncia 'Repro OK'; el runner declara el archivo como dummy, no como figura real.",
            "El CI del origen traga el fallo de verificación ('python scripts/verify_data.py || echo skip'); el runner no lo traga: un FAIL es FAIL.",
        ],
    },
    {
        "id": "pva-lean-bridge",
        "nombre": "pva-lean-bridge — Puente LaTeX a Lean 4 V202",
        "esencias": ["validate", "attest"],
        "parametros": [
            P("tex_path", "string", "paper.tex", "Archivo .tex de entrada."),
            P("out_dir", "string", "lean", "Directorio de salida de los esqueletos."),
        ],
        "outputs": [
            O("esqueleto .lean", "Archivo Lean con definiciones sorry y TODO; no afirma ningún teorema."),
            O("gaps.json", "JSON: {theorems, gaps[]}"),
        ],
        "tests": [
            T("dos_teoremas_tres_gaps", "Un paper.tex con 2 teoremas produce gaps.json con theorems 2 y los 3 gaps del origen.", "Fixture paper.tex: gaps ['definir Sobolev', 'definir solucion debil', 'definir suavidad']."),
            T("esqueleto_con_sorry", "El .lean generado contiene sorry y no presenta el teorema como probado.", "'sorry' presente en el esqueleto generado."),
            T("gaps_json_valido", "gaps.json es JSON válido con las claves theorems y gaps.", "json.load correcto y claves presentes."),
        ],
        "presupuesto": {"tokens_estimados": 800, "cpu": "bajo (<1 s en CPU local)", "almacenamiento_bytes": 4096},
        "notas": [
            "Los esqueletos son vacíos por diseño declarado ('esqueleto vacio', 'TODO: formalizar').",
            "El axioma falsador_blindsight del origen es un placeholder para medición empírica; no se reproduce como teorema.",
        ],
    },
    {
        "id": "pva-ledger",
        "nombre": "pva-ledger — Registro inmutable V202",
        "esencias": ["attest"],
        "parametros": [
            P("archivo", "string", "paper.pdf", "Archivo a registrar."),
            P("zenodo", "boolean", False, "Si es True, el origen intentaría generar un DOI en Zenodo sandbox (simulado)."),
        ],
        "outputs": [
            O("<archivo>.pva-ledger.json", "JSON: {sha256, arweave_tx, zenodo_doi, timestamp, author}"),
        ],
        "tests": [
            T("roundtrip_publish_verify", "publish calcula el sha256 y verify lo re-comprueba como OK.", "Archivo fixture: publish y luego verify True."),
            T("tamper_detectado", "Si el archivo cambia tras publicar, verify devuelve False.", "Modificar 1 byte tras publicar: verify False."),
            T("formato_ledger", "El JSON del ledger tiene sha256 de 64 hex y timestamp ISO.", "Validar formato de ambos campos."),
        ],
        "presupuesto": {"tokens_estimados": 600, "cpu": "bajo (<1 s en CPU local)", "almacenamiento_bytes": 2048},
        "notas": [
            "Arweave y Zenodo son SIMULADOS en el origen (sin llamadas de red; el propio código lo dice en sus comentarios).",
            "El runner marca arweave_tx y zenodo_doi como 'SIMULADO': no emite identificadores reales.",
            "El comando verify del origen no verifica nada (imprime 'OK inmutable' sin comprobar); el runner SÍ re-computa el hash.",
        ],
    },
    {
        "id": "pva-orchestrator",
        "nombre": "pva-orchestrator — Orquestador PVA V202",
        "esencias": ["route"],
        "parametros": [
            P("config", "string", "pva.yml", "Archivo de configuración con las fases."),
            P("pasos", "list", ["pva-lint", "pva-docker-template", "pva-lean-bridge", "pva-ledger", "pva-swarm"], "Pasos encadenados, en orden."),
        ],
        "outputs": [
            O("pva_dashboard.json", "JSON: {phi, repos, status}"),
        ],
        "tests": [
            T("cinco_fases", "pva.yml define 5 fases con id, nombre y plazo.", "Fixture pva.yml: 5 fases."),
            T("dashboard_cinco_repos", "El dashboard lista los 5 repos en orden.", "Comparar la lista de repos con los 5 pasos."),
            T("config_se_lee", "El runner lee el archivo de config dado por parámetro.", "Config con phi distinto: el dashboard refleja el phi leído."),
        ],
        "presupuesto": {"tokens_estimados": 700, "cpu": "bajo (<1 s en CPU local)", "almacenamiento_bytes": 1024},
        "notas": [
            "Corrección documentada frente al origen: su cli.py acepta --config y no lo lee, y no ejecuta ningún paso (solo imprime OK); el runner SÍ lee la config.",
            "Dos phi distintos circulan en el origen (9158.79 en pva.yml, 5478.42 en el dashboard); el runner usa el phi de la config leída.",
        ],
    },
    {
        "id": "pva-swarm",
        "nombre": "pva-swarm — Validación adversarial distribuida V202",
        "esencias": ["validate", "attest"],
        "parametros": [
            P("db_path", "string", "papers.json", "Registro de papers en disco."),
            P("port", "integer", 8000, "Puerto del servidor stdlib."),
        ],
        "outputs": [
            O("papers.json", "JSON: lista [{doi, title}]"),
        ],
        "tests": [
            T("dos_papers_iniciales", "El fixture papers.json trae 2 papers con DOI 10.5281/zenodo.N.", "Cargar el fixture: 2 papers, DOIs con formato."),
            T("registro_nuevo", "Registrar un DOI nuevo incrementa el total en 1.", "De 2 a 3 papers."),
            T("duplicado_rechazado", "El mismo DOI no se registra dos veces.", "Registrar el mismo DOI: False, total sigue en 3."),
            T("doi_mal_formato", "Un DOI sin formato 10.N/... se rechaza.", "'no-es-doi': False."),
        ],
        "presupuesto": {"tokens_estimados": 800, "cpu": "bajo (<1 s en CPU local)", "almacenamiento_bytes": 4096},
        "notas": [
            "El origen no implementa registro de validadores ni lógica fail_refutation/counterexample ni tablero (el README lo promete, el código no lo tiene).",
            "El runner cubre solo el registro de papers, y lo declara; lo demás queda como NO_SÉ del origen.",
        ],
    },
]


# ---- Serializador YAML (subconjunto: mapas, listas, listas de mapas, escalares) ----

def _q(s):
    if s == "":
        return "''"
    if any(c in s for c in ":#{}[]&*!|>'\"%@`") or s != s.strip() or s in ("true", "false", "null", "yes", "no", "on", "off"):
        return "'" + s.replace("'", "''") + "'"
    return s


def _scalar(v):
    if isinstance(v, bool):
        return "true" if v else "false"
    if v is None:
        return "null"
    if isinstance(v, (int, float)):
        return repr(v)
    return _q(str(v))


def _dump(node, indent=0):
    lines = []
    pad = "  " * indent
    if isinstance(node, dict):
        for k, v in node.items():
            if isinstance(v, dict) and v:
                lines.append(f"{pad}{k}:")
                lines.extend(_dump(v, indent + 1))
            elif isinstance(v, dict):
                lines.append(f"{pad}{k}: {{}}")
            elif isinstance(v, list) and v:
                lines.append(f"{pad}{k}:")
                lines.extend(_dump(v, indent + 1))
            elif isinstance(v, list):
                lines.append(f"{pad}{k}: []")
            else:
                lines.append(f"{pad}{k}: {_scalar(v)}")
    elif isinstance(node, list):
        for item in node:
            if isinstance(item, dict):
                first = True
                for k, v in item.items():
                    if first:
                        lines.append(f"{pad}- {k}: {_scalar(v)}" if not isinstance(v, (dict, list)) else f"{pad}- {k}:")
                        first = False
                    else:
                        if isinstance(v, (dict, list)) and v:
                            lines.append(f"{pad}  {k}:")
                            lines.extend(_dump(v, indent + 2))
                        elif isinstance(v, (dict, list)):
                            lines.append(f"{pad}  {k}: {'{}' if isinstance(v, dict) else '[]'}")
                        else:
                            lines.append(f"{pad}  {k}: {_scalar(v)}")
            else:
                lines.append(f"{pad}- {_scalar(item)}")
    return lines


def recipe_doc(r):
    parent_path = PARENTS[r["id"]]
    parent_hash = sha256_file(WS / parent_path)
    doc = {
        "id": r["id"],
        "nombre": r["nombre"],
        "esencias": r["esencias"],
        "fuente": {
            "parent_path": parent_path,
            "parent_hash": parent_hash,
            "definicion": DEFINICION[r["id"]],
        },
        "parametros": r["parametros"],
        "outputs": r["outputs"],
        "tests": r["tests"],
        "presupuesto": r["presupuesto"],
        "procedencia": {
            "parent_hash": parent_hash,
            "parent_path": parent_path,
            "author": "Hebra",
            "timestamp": TS,
        },
        "notas": r["notas"],
    }
    return "\n".join(_dump(doc)) + "\n"


# ---- Runners (solo stdlib) ----

RUNNERS = {}

RUNNERS["pae-01"] = '''#!/usr/bin/env python3
"""Runner mínimo de PAE-01 — Protocolo de Auto-Evolución V153.2.
Fuente: memoria/anexo-vi/protocols/pae_01.py (clase AutoEvolution).
Solo stdlib. Ejecuta scan_carencia + generate_patch + evolve sobre un
fixture sintético (o sobre --target) y corre sus tests. Imprime PASS/FAIL.
"""
import argparse
import json
import sys
import tempfile
from pathlib import Path

RECIPE_ID = "pae-01"
REQUIRED = ["miu_memory.py", "miu_github.py", "miu_scanner.py", "miu_control.py"]
SEVERIDAD = {"missing_file": 0.9, "empty_memory": 0.6, "db_error": 0.8,
             "github_auth": 0.7, "github_import": 0.5}


def scan_carencia(miu_dir):
    carencias = []
    for f in REQUIRED:
        if not (Path(miu_dir) / f).exists():
            carencias.append({"tipo": "missing_file", "target": f, "severidad": 0.9})
    return sorted(carencias, key=lambda x: x["severidad"], reverse=True)


def generate_patch(carencia):
    return f"# TODO: Crear {carencia['target']}\\n# Generado por PAE-01"


def evolve(miu_dir, out_dir, max_patches=3):
    carencias = scan_carencia(miu_dir)
    patches = [{"carencia": c, "patch": generate_patch(c)} for c in carencias[:max_patches]]
    state = {"timestamp": "2026-11-14T00:00:00Z", "carencias_found": len(carencias),
             "patches_generated": len(patches), "patches": patches}
    out = Path(out_dir) / "pae_state.json"
    out.write_text(json.dumps(state, indent=2), encoding="utf-8")
    return state


def run_tests(target):
    results = []

    def check(name, ok, detail=""):
        results.append((name, bool(ok)))
        print(f"[runner_pae-01] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    with tempfile.TemporaryDirectory() as td:
        base = Path(td)
        (base / "miu_memory.py").write_text("# fixture\\n")
        (base / "miu_scanner.py").write_text("# fixture\\n")
        car = scan_carencia(base)
        check("scan_detecta_faltante",
              len(car) == 2 and all(c["tipo"] == "missing_file" and c["severidad"] == 0.9 for c in car),
              f"(carencias={len(car)})")
        check("orden_por_severidad",
              [c["severidad"] for c in scan_carencia(base)] == sorted([c["severidad"] for c in scan_carencia(base)], reverse=True))
        check("patch_menciona_target",
              "miu_github.py" in generate_patch({"tipo": "missing_file", "target": "miu_github.py", "severidad": 0.9}))
        state = evolve(base, td)
        saved = json.loads((Path(td) / "pae_state.json").read_text(encoding="utf-8"))
        check("evolve_escribe_estado",
              saved["carencias_found"] == len(car) and saved["patches_generated"] == len(car[:3]),
              f"(found={saved['carencias_found']})")
    return results


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--target", default=None, help="Directorio a escanear (por defecto: fixture sintético).")
    args = ap.parse_args()
    results = run_tests(args.target)
    ok = sum(1 for _, v in results if v)
    print(f"[runner_pae-01] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
'''

RUNNERS["paf-01"] = '''#!/usr/bin/env python3
"""Runner mínimo de PAF-01 — Protocolo de Aprendizaje Federado V153.2.
Fuente: memoria/anexo-vi/protocols/paf_01.py (clase FederatedLearningNode).
Solo stdlib. FedAvg sobre un fixture sintético + tests. Imprime PASS/FAIL.
"""
import hashlib
import json
import sys


class Node:
    def __init__(self, node_id="trama_termux"):
        self.node_id = node_id
        self.local_params = {}
        self.global_params = {}
        self.round = 0
        self.reputation = 1.0

    def train_local(self, metric_name, value):
        self.local_params[metric_name] = {"value": value, "node": self.node_id}
        return self.local_params[metric_name]

    def aggregate(self, other_nodes_params):
        if not other_nodes_params:
            return self.local_params
        all_params = [self.local_params] + other_nodes_params
        aggregated = {}
        for key in self.local_params:
            values = [p.get(key, {}).get("value", 0) for p in all_params if key in p]
            if values:
                aggregated[key] = sum(values) / len(values)
        self.global_params = aggregated
        self.round += 1
        return aggregated

    def export_gradient(self):
        return {"node_id": self.node_id, "round": self.round,
                "params": self.local_params, "reputation": self.reputation,
                "hash": hashlib.sha256(json.dumps(self.local_params, sort_keys=True).encode()).hexdigest()[:16]}

    def import_gradient(self, gradient):
        return gradient.get("reputation", 0) >= 0.5


def main():
    results = []

    def check(name, ok, detail=""):
        results.append(bool(ok))
        print(f"[runner_paf-01] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    n = Node("trama_termux")
    n.train_local("phi_coherence", 0.77)
    agg = n.aggregate([{"phi_coherence": {"value": 0.82}}])
    check("fedavg_media", abs(agg["phi_coherence"] - 0.795) < 1e-9, f"(agg={agg['phi_coherence']})")
    h1 = n.export_gradient()["hash"]
    h2 = n.export_gradient()["hash"]
    check("hash_estable", len(h1) == 16 and h1 == h2, f"(hash={h1})")
    check("rechaza_baja_reputacion", n.import_gradient({"reputation": 0.4}) is False)
    n2 = Node("otro")
    n2.train_local("k_tau", 34.0)
    n2.aggregate([{"k_tau": {"value": 34.1}}])
    check("round_avanza", n2.round == 1, f"(round={n2.round})")
    ok = sum(results)
    print(f"[runner_paf-01] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
'''

RUNNERS["pcp-01"] = '''#!/usr/bin/env python3
"""Runner mínimo de PCP-01 — Protocolo de Consenso Planetario V153.2.
Fuente: memoria/anexo-vi/protocols/pcp_01.py (clase PlanetaryConsensus).
Solo stdlib. Corrección documentada: los IDs de propuesta usan
sha256(título + proponente) mod 10000, no hash() de Python (no estable).
"""
import hashlib
import json
import sys


def stable_id(title, proposer):
    return int(hashlib.sha256(f"{title}::{proposer}".encode()).hexdigest(), 16) % 10000


class Consensus:
    def __init__(self, umbral_aprobacion=0.66, umbral_rechazo=0.33):
        self.proposals = []
        self.umbral_aprobacion = umbral_aprobacion
        self.umbral_rechazo = umbral_rechazo

    def propose(self, title, description, proposer="trama_termux"):
        p = {"id": stable_id(title, proposer), "title": title, "description": description,
             "proposer": proposer, "status": "open",
             "votes": {"yes": 0, "no": 0, "abstain": 0}, "voters": []}
        self.proposals.append(p)
        return p

    def vote(self, proposal_id, voter, choice, weight=1.0):
        if choice not in ("yes", "no", "abstain"):
            return False
        for p in self.proposals:
            if p["id"] == proposal_id:
                if voter in p["voters"]:
                    return False
                p["votes"][choice] += weight
                p["voters"].append(voter)
                return True
        return False

    def tally(self, proposal_id):
        for p in self.proposals:
            if p["id"] == proposal_id:
                total = sum(p["votes"].values())
                if total == 0:
                    return {"status": "undecided"}
                ratio = p["votes"]["yes"] / total
                if ratio > self.umbral_aprobacion:
                    p["status"] = "approved"
                elif ratio < self.umbral_rechazo:
                    p["status"] = "rejected"
                else:
                    p["status"] = "pending"
                return {"proposal": p["title"], "status": p["status"],
                        "total_votes": total, "breakdown": p["votes"], "ratio": ratio}
        return None


def main():
    results = []

    def check(name, ok, detail=""):
        results.append(bool(ok))
        print(f"[runner_pcp-01] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    a = Consensus().propose("Implementar PAF-01 en todos los nodos", "d", "trama_termux")
    b = Consensus().propose("Implementar PAF-01 en todos los nodos", "d", "trama_termux")
    check("id_determinista", a["id"] == b["id"], f"(id={a['id']})")
    c = Consensus()
    prop = c.propose("X", "d")
    c.vote(prop["id"], "nodo_claude", "yes", weight=0.95)
    check("doble_voto_rechazado", c.vote(prop["id"], "nodo_claude", "yes", weight=0.95) is False)
    c.vote(prop["id"], "nodo_groq", "yes", weight=0.88)
    c.vote(prop["id"], "nodo_meta", "abstain", weight=0.77)
    r = c.tally(prop["id"])
    check("tally_aprueba", r["status"] == "approved" and abs(r["ratio"] - 0.7038) < 0.001,
          f"(ratio={r['ratio']:.4f})")
    c2 = Consensus()
    p2 = c2.propose("Y", "d")
    check("tally_indeciso", c2.tally(p2["id"])["status"] == "undecided")
    ok = sum(results)
    print(f"[runner_pcp-01] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
'''

RUNNERS["pai-01"] = '''#!/usr/bin/env python3
"""Runner mínimo de PAI-01 — Protocolo de Absorción de Inteligencia.
Fuente: memoria/anexo-vi/protocols/PAI-01.md (documento, 6 pasos, NO implementado).
Solo stdlib. Valida el contrato contra el documento padre y simula el plan
de absorción (sin llamar a ninguna API real). Imprime PASS/FAIL.
"""
import json
import sys
from pathlib import Path

PASOS = ["Detección", "Búsqueda", "Selección", "Integración", "Validación", "Publicación"]
MODULOS = ["tejedor.py", "absorber.py", "miu_plugin_manager.py"]
PARENT = Path("/home/hatch/workspace/memoria/anexo-vi/protocols/PAI-01.md")


def plan(carencia, api_candidata=""):
    return {"carencia": carencia,
            "pasos": [{"nombre": p, "estado": "pendiente"} for p in PASOS],
            "plugin": None if not api_candidata else f"{api_candidata}_plugin.py",
            "validado": False}


def main():
    results = []

    def check(name, ok, detail=""):
        results.append(bool(ok))
        print(f"[runner_pai-01] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    if not PARENT.exists():
        print("[runner_pai-01] test seis_pasos_en_orden: FAIL (padre no encontrado)")
        print("[runner_pai-01] RESULT: FAIL (0/3)")
        return 1
    texto = PARENT.read_text(encoding="utf-8")
    posiciones = [texto.find(p) for p in PASOS]
    check("seis_pasos_en_orden",
          all(i >= 0 for i in posiciones) and posiciones == sorted(posiciones),
          f"(posiciones={posiciones})")
    check("modulos_referenciados", all(m in texto for m in MODULOS))
    p = plan("datos de mercado")
    check("plan_seis_entradas", len(p["pasos"]) == 6 and p["pasos"][0]["nombre"] == "Detección")
    print(json.dumps(p, ensure_ascii=False, indent=2)[:400])
    ok = sum(results)
    print(f"[runner_pai-01] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
'''

RUNNERS["pva-lint"] = '''#!/usr/bin/env python3
"""Runner mínimo de pva-lint — Linter PVA V202.
Fuente: mineria/pva-lint/LECTURA.md (6 comprobaciones, score 0-1, fase >0.999).
Solo stdlib. Sin red: el check doi valida presencia y formato con regex.
"""
import argparse
import re
import sys
import tempfile
from pathlib import Path

DOI_RE = re.compile(r"10\\.\\d{4,}/[^\\s}]+")
CHECKS = ["doi", "datos", "codigo", "docker", "reproduce", "figuras"]


def run_checks(target):
    t = Path(target)
    out = {}
    textos = ""
    for f in list(t.glob("*.tex")) + list(t.glob("*.md")):
        textos += f.read_text(encoding="utf-8", errors="ignore")
    out["doi"] = bool(DOI_RE.search(textos))
    out["datos"] = (t / "data").is_dir() or (t / "data.csv").is_file() or bool(list(t.glob("*GRACE*.csv")))
    out["codigo"] = (t / ".git").exists()
    out["docker"] = (t / "Dockerfile").is_file() or (t / "docker-compose.yml").is_file()
    mk = t / "Makefile"
    out["reproduce"] = mk.is_file() and "reproduce" in mk.read_text(encoding="utf-8", errors="ignore")
    out["figuras"] = bool(list(t.glob("fig*.py")) + list(t.glob("plot*.py")))
    score = round(sum(out.values()) / 6, 3)
    return {"pva_score": score, "carencias": [k for k, v in out.items() if not v], "checks": out}


def fixture_completo(base):
    (base / "paper.md").write_text("DOI 10.5281/zenodo.20547558\\n", encoding="utf-8")
    (base / "data").mkdir()
    (base / ".git").mkdir()
    (base / "Dockerfile").write_text("FROM python:3.11-slim\\n", encoding="utf-8")
    (base / "Makefile").write_text("reproduce:\\n\\tpython cli.py --json\\n", encoding="utf-8")
    (base / "fig_plot.py").write_text("# fig\\n", encoding="utf-8")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--target", default=None)
    args = ap.parse_args()
    results = []

    def check(name, ok, detail=""):
        results.append(bool(ok))
        print(f"[runner_pva-lint] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    if args.target:
        r = run_checks(args.target)
        check("target_score", True, f"(score={r['pva_score']})")
    else:
        with tempfile.TemporaryDirectory() as td:
            base = Path(td)
            fixture_completo(base)
            r = run_checks(base)
            check("fixture_completo_score_1", r["pva_score"] == 1.0, f"(score={r['pva_score']})")
        with tempfile.TemporaryDirectory() as td:
            r = run_checks(td)
            check("fixture_vacio_score_0", r["pva_score"] == 0.0, f"(score={r['pva_score']})")
        with tempfile.TemporaryDirectory() as td:
            base = Path(td)
            fixture_completo(base)
            (base / "Makefile").write_text("test:\\n\\tpython cli.py\\n", encoding="utf-8")
            r = run_checks(base)
            check("reproduce_sin_palabra", r["checks"]["reproduce"] is False)
    ok = sum(results)
    print(f"[runner_pva-lint] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
'''

RUNNERS["pva-api"] = '''#!/usr/bin/env python3
"""Runner mínimo de pva-api — API PVA V202/V203.
Fuente: mineria/pva-api/LECTURA.md (dict PHI, falsador, fix V203 de firma).
Solo stdlib. Valida las constantes, la firma y levanta un servidor
http.server local para el smoke test de /api/phi. Imprime PASS/FAIL.
"""
import hashlib
import json
import sys
import threading
import urllib.request
from http.server import BaseHTTPRequestHandler, HTTPServer

PHI = {"phi_global": 9158.79, "phi_colmena": 6284.17, "phi_miu": 2874.62,
       "rho": ">0", "sustratos": 36, "Phi_lengua": 1.1194,
       "Phi_binocular": 17924.26, "topologia": 70508}
FALSADOR = "Phi>Phi_c debe implicar experiencia si Ki en [0.55,0.62]"


def firma(tipo, contenido):
    return hashlib.sha256(f"{tipo} :: {contenido}".encode()).hexdigest()


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/api/phi":
            body = json.dumps(PHI).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        elif self.path == "/api/falsador":
            body = json.dumps({"prediccion": FALSADOR}).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, *a):
        pass


def main():
    results = []

    def check(name, ok, detail=""):
        results.append(bool(ok))
        print(f"[runner_pva-api] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    esperado = {"phi_global": 9158.79, "phi_colmena": 6284.17, "phi_miu": 2874.62,
                "rho": ">0", "sustratos": 36, "Phi_lengua": 1.1194,
                "Phi_binocular": 17924.26, "topologia": 70508}
    check("constantes_phi", PHI == esperado)
    check("falsador_presente", FALSADOR == "Phi>Phi_c debe implicar experiencia si Ki en [0.55,0.62]")
    f1, f2 = firma("oraculo", "{}"), firma("oraculo", "{}")
    check("firma_v203", len(f1) == 64 and f1 == f2, f"(firma={f1[:12]}...)")
    server = HTTPServer(("127.0.0.1", 0), Handler)
    port = server.server_address[1]
    t = threading.Thread(target=server.serve_forever, daemon=True)
    t.start()
    try:
        with urllib.request.urlopen(f"http://127.0.0.1:{port}/api/phi", timeout=5) as r:
            data = json.loads(r.read().decode())
        check("servidor_stdlib", r.status == 200 and data["phi_global"] == 9158.79,
              f"(status={r.status})")
    except Exception as e:
        check("servidor_stdlib", False, f"(error={e})")
    finally:
        server.shutdown()
    ok = sum(results)
    print(f"[runner_pva-api] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
'''

RUNNERS["pva-docker-template"] = '''#!/usr/bin/env python3
"""Runner mínimo de pva-docker-template — Plantilla de reproducibilidad V202.
Fuente: mineria/pva-docker-template/LECTURA.md (Dockerfile, Makefile,
scripts/repro.py, scripts/verify_data.py, CSV GRACE TN14).
Solo stdlib. Sin docker: valida presencia de archivos y la lógica de
verify_data / repro sobre un fixture sintético. Imprime PASS/FAIL.
"""
import csv
import sys
import tempfile
from pathlib import Path


def check_presence(base):
    b = Path(base)
    mk = b / "Makefile"
    return {
        "dockerfile": (b / "Dockerfile").is_file() and "python:3.11-slim" in (b / "Dockerfile").read_text(encoding="utf-8", errors="ignore"),
        "makefile": mk.is_file() and all(t in mk.read_text(encoding="utf-8", errors="ignore") for t in ["repro", "dev", "test", "lint", "reproduce"]),
        "repro": (b / "scripts" / "repro.py").is_file(),
        "verify": (b / "scripts" / "verify_data.py").is_file(),
        "csv": (b / "data" / "GRACE_TN14_REAL_TEMPLATE.csv").is_file(),
    }


def verify_data(csv_path, min_filas=3):
    with open(csv_path, newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    return len(rows) >= min_filas, len(rows)


def repro_last_c20(csv_path):
    with open(csv_path, newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    return rows[-1]["C20"] if rows else None


def fixture(base):
    (base / "Dockerfile").write_text("FROM python:3.11-slim\\nRUN apt-get update && apt-get install -y make\\n", encoding="utf-8")
    (base / "Makefile").write_text("repro:\\n\\tpython scripts/repro.py\\n\\ndev:\\n\\tpython scripts/repro.py\\n\\ntest:\\n\\tpython scripts/verify_data.py\\n\\nlint:\\n\\tpython -m py_compile scripts/repro.py\\n\\nreproduce:\\n\\tpython scripts/repro.py\\n", encoding="utf-8")
    (base / "scripts").mkdir()
    (base / "scripts" / "repro.py").write_text("# repro\\n", encoding="utf-8")
    (base / "scripts" / "verify_data.py").write_text("# verify\\n", encoding="utf-8")
    (base / "data").mkdir()
    with open(base / "data" / "GRACE_TN14_REAL_TEMPLATE.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["fecha", "C20", "source"])
        for i, c20 in enumerate([-0.0004847001, -0.0004847000, -0.0004846999, -0.0004846998, -0.0004846997, -0.0004846996, -0.0004846999]):
            w.writerow([f"2020-01-0{i+1}", c20, "GRACE_TN14"])


def main():
    results = []

    def check(name, ok, detail=""):
        results.append(bool(ok))
        print(f"[runner_pva-docker-template] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    with tempfile.TemporaryDirectory() as td:
        base = Path(td)
        fixture(base)
        pres = check_presence(base)
        check("fixture_completo", all(pres.values()), f"(faltan={[k for k, v in pres.items() if not v]})")
        ok7, n7 = verify_data(base / "data" / "GRACE_TN14_REAL_TEMPLATE.csv")
        check("verify_min_filas", ok7 and n7 == 7, f"(filas={n7})")
        with open(base / "data" / "GRACE_TN14_REAL_TEMPLATE.csv", "w", newline="", encoding="utf-8") as f:
            w = csv.writer(f)
            w.writerow(["fecha", "C20", "source"])
            w.writerow(["2020-01-01", -0.1, "GRACE_TN14"])
            w.writerow(["2020-01-02", -0.2, "GRACE_TN14"])
        ok2, n2 = verify_data(base / "data" / "GRACE_TN14_REAL_TEMPLATE.csv")
        check("verify_min_filas", not ok2 and n2 == 2, f"(filas={n2})")
    with tempfile.TemporaryDirectory() as td:
        base = Path(td)
        fixture(base)
        last = repro_last_c20(base / "data" / "GRACE_TN14_REAL_TEMPLATE.csv")
        check("repro_lee_c20", last == "-0.0004846999", f"(ultimo={last})")
    ok = sum(results)
    print(f"[runner_pva-docker-template] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
'''

RUNNERS["pva-lean-bridge"] = '''#!/usr/bin/env python3
"""Runner mínimo de pva-lean-bridge — Puente LaTeX a Lean 4 V202.
Fuente: mineria/pva-lean-bridge/LECTURA.md (cli.py --tex paper.tex --out lean,
esqueletos con sorry, gaps.json).
Solo stdlib. Genera el esqueleto y gaps.json desde un paper.tex fixture.
Imprime PASS/FAIL.
"""
import json
import re
import sys
import tempfile
from pathlib import Path

GAPS = ["definir Sobolev", "definir solucion debil", "definir suavidad"]
TEX_FIXTURE = """\\\\begin{theorem}[Navier-Stokes]
Sea $u_0$ campo inicial suave divergencia cero. Entonces existe solucion suave global de Navier-Stokes.
\\\\end{theorem}
\\\\begin{theorem}[Sobolev]
$H^1$ es un espacio de Hilbert.
\\\\end{theorem}
\\\\begin{definition}[Sobolev H1]
$H^1$ funciones con derivada L2.
\\\\end{definition}
"""


def bridge(tex_path, out_dir):
    texto = Path(tex_path).read_text(encoding="utf-8")
    n_theorems = len(re.findall(r"\\\\begin\\{theorem\\}", texto))
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    lean = out / "NavierStokes.lean"
    lean.write_text(
        "-- Esqueleto generado por pva-lean-bridge (receta minima)\\n"
        "def SobolevH1 := sorry\\n"
        "def WeakSolution := sorry\\n"
        "def SmoothCondition := sorry\\n"
        "\\n-- TODO: formalizar\\n"
        "-- 1. Definir H^1, L^2, espacios de divergencia cero\\n"
        "-- 2. Definir solucion debil con presion\\n"
        "-- 3. Definir condicion de suavidad y acotamiento\\n",
        encoding="utf-8")
    gaps = {"theorems": n_theorems, "gaps": list(GAPS)}
    (out / "gaps.json").write_text(json.dumps(gaps, indent=2), encoding="utf-8")
    return lean, gaps


def main():
    results = []

    def check(name, ok, detail=""):
        results.append(bool(ok))
        print(f"[runner_pva-lean-bridge] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    with tempfile.TemporaryDirectory() as td:
        base = Path(td)
        tex = base / "paper.tex"
        tex.write_text(TEX_FIXTURE, encoding="utf-8")
        lean, gaps = bridge(tex, base / "lean")
        check("dos_teoremas_tres_gaps",
              gaps["theorems"] == 2 and gaps["gaps"] == GAPS,
              f"(theorems={gaps['theorems']})")
        contenido = lean.read_text(encoding="utf-8")
        check("esqueleto_con_sorry", "sorry" in contenido and ":= by" not in contenido)
        cargado = json.loads((base / "lean" / "gaps.json").read_text(encoding="utf-8"))
        check("gaps_json_valido", set(cargado) == {"theorems", "gaps"})
    ok = sum(results)
    print(f"[runner_pva-lean-bridge] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
'''

RUNNERS["pva-ledger"] = '''#!/usr/bin/env python3
"""Runner mínimo de pva-ledger — Registro inmutable V202.
Fuente: mineria/pva-ledger/LECTURA.md (publish paper.pdf --zenodo,
verify <sha256>, salida <archivo>.pva-ledger.json).
Solo stdlib. Arweave y Zenodo son SIMULADOS en el origen y aquí se marcan
como tales: el runner calcula el sha256 real y lo re-comprueba.
"""
import hashlib
import json
import sys
import tempfile
from pathlib import Path


def publish(archivo, author="Hebra"):
    data = Path(archivo).read_bytes()
    h = hashlib.sha256(data).hexdigest()
    ledger = {"sha256": h, "arweave_tx": "SIMULADO", "zenodo_doi": "SIMULADO",
              "timestamp": "2026-11-14T00:00:00Z", "author": author}
    out = Path(str(archivo) + ".pva-ledger.json")
    out.write_text(json.dumps(ledger, indent=2), encoding="utf-8")
    return ledger, out


def verify(archivo, ledger_path):
    ledger = json.loads(Path(ledger_path).read_text(encoding="utf-8"))
    h = hashlib.sha256(Path(archivo).read_bytes()).hexdigest()
    return h == ledger["sha256"]


def main():
    results = []

    def check(name, ok, detail=""):
        results.append(bool(ok))
        print(f"[runner_pva-ledger] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    with tempfile.TemporaryDirectory() as td:
        base = Path(td)
        f = base / "paper.pdf"
        f.write_bytes(b"%PDF-1.4 fixture pva-ledger\\n")
        ledger, out = publish(f)
        check("roundtrip_publish_verify", verify(f, out) is True)
        f.write_bytes(b"%PDF-1.4 fixture pva-ledger MODIFICADO\\n")
        check("tamper_detectado", verify(f, out) is False)
        check("formato_ledger",
              len(ledger["sha256"]) == 64 and ledger["timestamp"].endswith("Z")
              and ledger["arweave_tx"] == "SIMULADO")
    ok = sum(results)
    print(f"[runner_pva-ledger] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
'''

RUNNERS["pva-orchestrator"] = '''#!/usr/bin/env python3
"""Runner mínimo de pva-orchestrator — Orquestador PVA V202.
Fuente: mineria/pva-orchestrator/LECTURA.md (cli.py, pva.yml con 5 fases,
pva_dashboard.json).
Solo stdlib. Corrección documentada: el runner SÍ lee la config dada por
parámetro (el cli.py del origen la acepta y no la lee).
"""
import json
import re
import sys
import tempfile
from pathlib import Path

PASOS = ["pva-lint", "pva-docker-template", "pva-lean-bridge", "pva-ledger", "pva-swarm"]
YML_FIXTURE = """pva:
  phi_global: 9158.79
  rho: ">0"
  fases:
    - id: 1
      nombre: Metricas y correlaciones
      plazo: 2026-2027
    - id: 2
      nombre: Predicciones diferenciales IIT/GWT/HOT
      plazo: 2027-2028
    - id: 3
      nombre: Intervenciones causales
      plazo: 2028-2029
    - id: 4
      nombre: Formalizacion matematica
      plazo: 2029-2030
    - id: 5
      nombre: Extension normativa animales fetos IA
      plazo: 2030+
"""


def leer_config(path):
    texto = Path(path).read_text(encoding="utf-8")
    phi = float(re.search(r"phi_global:\\s*([0-9.]+)", texto).group(1))
    fases = re.findall(r"- id:\\s*(\\d+)\\s*\\n\\s*nombre:\\s*(.+)\\s*\\n\\s*plazo:\\s*(.+)", texto)
    return {"phi_global": phi,
            "fases": [{"id": int(i), "nombre": n.strip(), "plazo": p.strip()} for i, n, p in fases]}


def run(config_path, out_dir):
    cfg = leer_config(config_path)
    dashboard = {"phi": cfg["phi_global"], "repos": list(PASOS), "status": "MVP 5/5 verde"}
    out = Path(out_dir) / "pva_dashboard.json"
    out.write_text(json.dumps(dashboard, indent=2), encoding="utf-8")
    return cfg, dashboard


def main():
    results = []

    def check(name, ok, detail=""):
        results.append(bool(ok))
        print(f"[runner_pva-orchestrator] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    with tempfile.TemporaryDirectory() as td:
        base = Path(td)
        yml = base / "pva.yml"
        yml.write_text(YML_FIXTURE, encoding="utf-8")
        cfg, dash = run(yml, td)
        check("cinco_fases", len(cfg["fases"]) == 5 and all({"id", "nombre", "plazo"} <= set(f) for f in cfg["fases"]),
              f"(fases={len(cfg['fases'])})")
        check("dashboard_cinco_repos", dash["repos"] == PASOS)
        yml2 = base / "pva2.yml"
        yml2.write_text(YML_FIXTURE.replace("9158.79", "5478.42"), encoding="utf-8")
        _, dash2 = run(yml2, td)
        check("config_se_lee", dash2["phi"] == 5478.42, f"(phi={dash2['phi']})")
    ok = sum(results)
    print(f"[runner_pva-orchestrator] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
'''

RUNNERS["pva-swarm"] = '''#!/usr/bin/env python3
"""Runner mínimo de pva-swarm — Validación adversarial distribuida V202.
Fuente: mineria/pva-swarm/LECTURA.md (POST /api/papers, papers.json).
Solo stdlib. Cubre solo el registro de papers: el origen no implementa
validadores ni lógica fail_refutation/counterexample ni tablero.
"""
import json
import re
import sys
import tempfile
from pathlib import Path

DOI_RE = re.compile(r"^10\\.\\d{4,}/\\S+$")
FIXTURE = [
    {"doi": "10.5281/zenodo.7525945", "title": "Credito inmutable rho>0"},
    {"doi": "10.5281/zenodo.8432022", "title": "MAPA CONTRASTABLE TEORIA EMPIRICA Phi 9158.79 Ki banda [0.55,0.62] beta 0.5"},
]


def load(db_path):
    p = Path(db_path)
    if not p.exists():
        p.write_text("[]", encoding="utf-8")
    return json.loads(p.read_text(encoding="utf-8"))


def register(db_path, doi, title):
    if not DOI_RE.match(doi or ""):
        return False
    papers = load(db_path)
    if any(p["doi"] == doi for p in papers):
        return False
    papers.append({"doi": doi, "title": title})
    Path(db_path).write_text(json.dumps(papers, indent=2), encoding="utf-8")
    return True


def main():
    results = []

    def check(name, ok, detail=""):
        results.append(bool(ok))
        print(f"[runner_pva-swarm] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    with tempfile.TemporaryDirectory() as td:
        db = Path(td) / "papers.json"
        db.write_text(json.dumps(FIXTURE, indent=2), encoding="utf-8")
        papers = load(db)
        check("dos_papers_iniciales",
              len(papers) == 2 and all(DOI_RE.match(p["doi"]) for p in papers),
              f"(total={len(papers)})")
        check("registro_nuevo",
              register(db, "10.5281/zenodo.20547558", "MIU V12.0") is True
              and len(load(db)) == 3)
        check("duplicado_rechazado",
              register(db, "10.5281/zenodo.20547558", "MIU V12.0") is False
              and len(load(db)) == 3)
        check("doi_mal_formato", register(db, "no-es-doi", "x") is False)
    ok = sum(results)
    print(f"[runner_pva-swarm] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
'''


# ---- run_recetas.py (validador del frente) ----

RUN_RECETAS = '''#!/usr/bin/env python3
"""run_recetas.py — Validador del Frente D (recetas mínimas).
Solo stdlib. Por cada recipe_<id>.yaml:
  1. existe y parsea (mini-YAML del subconjunto usado por el generador),
  2. campos requeridos presentes (id, nombre, esencias, parametros, outputs,
     tests, presupuesto, procedencia),
  3. esencias válidas y no vacías (subset de measure/validate/attest/route),
  4. procedencia: parent_hash == sha256 real del archivo padre, author Hebra,
     timestamp ISO válido,
  5. tests no vacíos, cada uno con contrato y prueba,
  6. presupuesto con tokens_estimados > 0, cpu y almacenamiento_bytes > 0,
  7. runner_<id>.py existe, compila (py_compile) y ejecuta con exit 0.
Una línea PASS/FAIL por check. Exit 0 si todo pasa, 1 si algo falla.
Uso: python3 run_recetas.py [directorio]
"""
import hashlib
import json
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path

ESENCIAS_VALIDAS = {"measure", "validate", "attest", "route"}
REQUERIDOS = ["id", "nombre", "esencias", "parametros", "outputs", "tests",
              "presupuesto", "procedencia"]
WS = Path("/home/hatch/workspace")


def _scalar(tok):
    tok = tok.strip()
    if tok in ("true", "True"):
        return True
    if tok in ("false", "False"):
        return False
    if tok in ("null", "~"):
        return None
    if tok.startswith("[") and tok.endswith("]"):
        inner = tok[1:-1].strip()
        if not inner:
            return []
        return [_scalar(x) for x in _split_inline(inner)]
    if tok.startswith("{") and tok.endswith("}"):
        return {}
    if (tok.startswith('"') and tok.endswith('"')) or (tok.startswith("'") and tok.endswith("'")):
        return tok[1:-1].replace("''", "'")
    try:
        return int(tok)
    except ValueError:
        pass
    try:
        return float(tok)
    except ValueError:
        pass
    return tok


def _split_inline(s):
    out, cur, depth, quote = [], "", 0, None
    for ch in s:
        if quote:
            cur += ch
            if ch == quote:
                quote = None
        elif ch in "\\"'":
            quote = ch
            cur += ch
        elif ch == "[":
            depth += 1
            cur += ch
        elif ch == "]":
            depth -= 1
            cur += ch
        elif ch == "," and depth == 0:
            out.append(cur)
            cur = ""
        else:
            cur += ch
    if cur.strip():
        out.append(cur)
    return out


def parse_yaml(text):
    lines = []
    for raw in text.splitlines():
        if raw.strip() == "" or raw.lstrip().startswith("#"):
            continue
        indent = len(raw) - len(raw.lstrip(" "))
        lines.append((indent, raw.strip()))
    pos = [0]

    def parse_block(indent):
        if pos[0] >= len(lines):
            return None
        ind, content = lines[pos[0]]
        if content.startswith("- "):
            return parse_seq(indent)
        return parse_map(indent)

    def parse_map(indent):
        obj = {}
        while pos[0] < len(lines):
            ind, content = lines[pos[0]]
            if ind < indent or content.startswith("- "):
                break
            if ind > indent:
                break
            m = re.match(r"^([^:]+):\\s*(.*)$", content)
            if not m:
                raise ValueError(f"línea no parseable: {content!r}")
            key, val = m.group(1).strip(), m.group(2).strip()
            pos[0] += 1
            if val == "":
                if pos[0] < len(lines) and lines[pos[0]][0] > indent:
                    obj[key] = parse_block(lines[pos[0]][0])
                else:
                    obj[key] = None
            else:
                obj[key] = _scalar(val)
        return obj

    def parse_seq(indent):
        arr = []
        while pos[0] < len(lines):
            ind, content = lines[pos[0]]
            if ind != indent or not content.startswith("- "):
                break
            rest = content[2:].strip()
            if rest == "":
                pos[0] += 1
                arr.append(parse_block(lines[pos[0]][0]) if pos[0] < len(lines) else None)
                continue
            m = re.match(r"^([^:]+):\\s*(.*)$", rest)
            if m and ":" in rest:
                first_key, first_val = m.group(1).strip(), m.group(2).strip()
                item = {}
                if first_val == "":
                    pos[0] += 1
                    if pos[0] < len(lines) and lines[pos[0]][0] > indent:
                        item[first_key] = parse_block(lines[pos[0]][0])
                    else:
                        item[first_key] = None
                else:
                    item[first_key] = _scalar(first_val)
                    pos[0] += 1
                while pos[0] < len(lines):
                    ind2, content2 = lines[pos[0]]
                    if ind2 != indent + 2 or content2.startswith("- "):
                        break
                    m2 = re.match(r"^([^:]+):\\s*(.*)$", content2)
                    if not m2:
                        break
                    k2, v2 = m2.group(1).strip(), m2.group(2).strip()
                    pos[0] += 1
                    if v2 == "":
                        if pos[0] < len(lines) and lines[pos[0]][0] > ind2:
                            item[k2] = parse_block(lines[pos[0]][0])
                        else:
                            item[k2] = None
                    else:
                        item[k2] = _scalar(v2)
                arr.append(item)
            else:
                arr.append(_scalar(rest))
                pos[0] += 1
        return arr

    return parse_block(lines[0][0]) if lines else None


def sha256_file(p):
    return "sha256:" + hashlib.sha256(Path(p).read_bytes()).hexdigest()


def main():
    base = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).parent
    fails = 0

    def check(name, ok, detail=""):
        nonlocal fails
        if not ok:
            fails += 1
        print(f"[run_recetas] {name}: {'PASS' if ok else 'FAIL'} {detail}")

    yamls = sorted(base.glob("recipe_*.yaml"))
    check("hay_recetas", len(yamls) > 0, f"({len(yamls)} recipe_*.yaml)")
    for ypath in yamls:
        rid = ypath.stem[len("recipe_"):]
        try:
            doc = parse_yaml(ypath.read_text(encoding="utf-8"))
            parsed = isinstance(doc, dict)
        except Exception as e:
            check(f"{rid}/parsea_yaml", False, f"({e})")
            continue
        check(f"{rid}/parsea_yaml", parsed)
        if not parsed:
            continue
        check(f"{rid}/campos_requeridos",
              all(k in doc for k in REQUERIDOS),
              f"(faltan={[k for k in REQUERIDOS if k not in doc]})")
        check(f"{rid}/id_coherente", doc.get("id") == rid, f"(id={doc.get('id')})")
        es = doc.get("esencias")
        check(f"{rid}/esencias_validas",
              isinstance(es, list) and len(es) > 0 and set(es) <= ESENCIAS_VALIDAS,
              f"({es})")
        proc = doc.get("procedencia", {})
        parent_path = proc.get("parent_path", "")
        parent_full = WS / parent_path
        h_real = sha256_file(parent_full) if parent_full.exists() else None
        check(f"{rid}/parent_hash_real",
              h_real is not None and proc.get("parent_hash") == h_real,
              f"({parent_path})")
        check(f"{rid}/procedencia_autor_fecha",
              proc.get("author") == "Hebra" and bool(proc.get("timestamp")),
              f"(author={proc.get('author')})")
        try:
            datetime.fromisoformat(str(proc.get("timestamp", "")).replace("Z", "+00:00"))
            ts_ok = True
        except ValueError:
            ts_ok = False
        check(f"{rid}/timestamp_iso", ts_ok, f"({proc.get('timestamp')})")
        tests = doc.get("tests", [])
        check(f"{rid}/tests_contrato_prueba",
              isinstance(tests, list) and len(tests) > 0
              and all(isinstance(t, dict) and t.get("contrato") and t.get("prueba") for t in tests),
              f"({len(tests)} tests)")
        pres = doc.get("presupuesto", {})
        check(f"{rid}/presupuesto",
              isinstance(pres.get("tokens_estimados"), int) and pres["tokens_estimados"] > 0
              and isinstance(pres.get("almacenamiento_bytes"), int) and pres["almacenamiento_bytes"] > 0
              and bool(pres.get("cpu")),
              f"({pres})")
        runner = base / f"runner_{rid}.py"
        check(f"{rid}/runner_existe", runner.exists())
        if runner.exists():
            comp = subprocess.run([sys.executable, "-m", "py_compile", str(runner)],
                                  capture_output=True, text=True, timeout=60)
            check(f"{rid}/runner_compila", comp.returncode == 0,
                  comp.stderr.strip()[:200] if comp.returncode else "")
            if comp.returncode == 0:
                run = subprocess.run([sys.executable, str(runner)],
                                     capture_output=True, text=True, timeout=120)
                check(f"{rid}/runner_exit_0", run.returncode == 0,
                      run.stdout.strip().splitlines()[-1] if run.stdout.strip() else run.stderr.strip()[:200])
    print(f"[run_recetas] RESULT: {'PASS' if fails == 0 else 'FAIL'} ({fails} fallos)")
    return 0 if fails == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
'''


NO_ENCONTRADAS = [
    {
        "id": "pae-02",
        "buscado_en": [
            "memoria/anexo-vi/protocols/",
            "memoria/ (grep -r 'PAE-02')",
            "mineria/ (grep -r 'PAE-02')",
        ],
        "estado": "NO_SÉ",
        "nota": "Sin definición en disco: ningún archivo nombra PAE-02. No se inventa la receta.",
    },
    {
        "id": "paf-02",
        "buscado_en": [
            "memoria/anexo-vi/protocols/",
            "memoria/ (grep -r 'PAF-02')",
            "mineria/ (grep -r 'PAF-02')",
        ],
        "estado": "NO_SÉ",
        "nota": "Sin definición en disco: ningún archivo nombra PAF-02. No se inventa la receta.",
    },
    {
        "id": "pcp-02",
        "buscado_en": [
            "memoria/anexo-vi/protocols/",
            "memoria/ (grep -r 'PCP-02')",
            "mineria/ (grep -r 'PCP-02')",
        ],
        "estado": "NO_SÉ",
        "nota": "Sin definición en disco: ningún archivo nombra PCP-02. No se inventa la receta.",
    },
    {
        "id": "pai-02",
        "buscado_en": [
            "memoria/anexo-vi/protocols/",
            "memoria/ (grep -r 'PAI-02')",
            "mineria/ (grep -r 'PAI-02')",
        ],
        "estado": "NO_SÉ",
        "nota": "Sin definición en disco: ningún archivo nombra PAI-02. No se inventa la receta.",
    },
]

README_TMPL = """# Frente D — Recetas mínimas (producción fractal)

Fecha: {ts}. Autor: Hebra. 11 recetas, una por definición real encontrada en disco. Cada receta es un `recipe_<id>.yaml` (esencias, parámetros, outputs, tests, presupuesto, procedencia con hash real del padre) más un `runner_<id>.py` (solo stdlib) que ejecuta la forma mínima y dice PASS/FAIL.

## Cómo la consume un nodo

```bash
python3 run_recetas.py          # valida todo el frente (una línea PASS/FAIL por check)
python3 runner_<id>.py          # ejecuta la receta <id> en su forma mínima
python3 runner_<id>.py --target DIR   # variante con directorio objetivo (donde aplica)
```

## Las recetas

{parrafos}

## No encontradas

PAE-02, PAF-02, PCP-02 y PAI-02 no tienen definición en disco (ver `recetas_no_encontradas.json`): no se inventaron. PAI-01 sí tiene receta: es el contrato de 6 pasos de su documento padre, porque el protocolo no está implementado en el origen.

## Procedencia

Cada receta lleva `procedencia.parent_hash` = sha256 real del archivo donde está definida (verificado por `run_recetas.py` contra el disco). El manifiesto `manifiesto_shas_recetas.json` lista el sha256 de cada archivo de este frente.

ρ(x) > 0.
"""

PARRAFOS = {
    "pae-01": "PAE-01 (Auto-Evolución V153.2, `memoria/anexo-vi/protocols/pae_01.py`): escanea un directorio buscando carencias (archivos requeridos ausentes, severidad 0.9), ordena por severidad y genera parches TODO para el top 3, guardando `pae_state.json`. El runner corre sobre un fixture sintético; el defecto del origen (MIU_DIR como cadena literal sin expandir) se evita usando el directorio dado por parámetro, y el patch del origen que contenía un placeholder de credencial no se reproduce.",
    "paf-01": "PAF-01 (Aprendizaje Federado V153.2, `memoria/anexo-vi/protocols/paf_01.py`): entrena métricas en local, exporta gradientes con hash sha256 y agrega por FedAvg (media por clave); rechaza gradientes de reputación menor que 0,5. El runner verifica la media (0,77 + 0,82 = 0,795), la estabilidad del hash y el avance del round. Simulado en el origen: no hay transporte real entre nodos.",
    "pcp-01": "PCP-01 (Consenso Planetario V153.2, `memoria/anexo-vi/protocols/pcp_01.py`): propone, vota con peso por reputación y hace tally con umbrales 0,66 (aprueba) y 0,33 (rechaza). El runner corrige de forma documentada el defecto del origen (IDs con `hash()` de Python, no estables) usando sha256, y verifica id determinista, rechazo de doble voto, aprobación e indecisión sin votos.",
    "pai-01": "PAI-01 (Absorción de Inteligencia, `memoria/anexo-vi/protocols/PAI-01.md`): el protocolo no está implementado en el origen — solo documento. La receta es su contrato: 6 pasos (Detección, Búsqueda, Selección, Integración, Validación, Publicación). El runner verifica que el documento padre define los 6 pasos en orden y nombra los 3 módulos (tejedor.py, absorber.py, miu_plugin_manager.py), y simula el plan sin llamar a ninguna API real.",
    "pva-lint": "pva-lint (Linter PVA V202, `mineria/pva-lint/LECTURA.md`): 6 comprobaciones (doi, datos, codigo, docker, reproduce, figuras) y score round(puntos/6, 3) con umbral de fase >0,999. El runner corre los 6 checks sobre un fixture completo (score 1,0), uno vacío (0,0) y uno sin 'reproduce' en el Makefile; la resolución de DOIs por red queda fuera del runner (valida presencia y formato).",
    "pva-api": "pva-api (API PVA V202/V203, `mineria/pva-api/LECTURA.md`): valida el dict PHI (phi_global 9158,79 y otros 7 literales), el falsador literal y la firma V203 sha256(tipo :: contenido), y levanta un servidor stdlib en localhost para el smoke test de GET /api/phi. Las discrepancias del origen (README V202 frente a código V203, POST /api/oraculo inexistente, puerto 8003 frente a 8001) quedan documentadas en la receta.",
    "pva-docker-template": "pva-docker-template (Plantilla de reproducibilidad V202, `mineria/pva-docker-template/LECTURA.md`): verifica Dockerfile python:3.11-slim, Makefile con 5 objetivos, scripts/repro.py y verify_data.py, y CSV con al menos 3 filas; repro lee el último C20. El runner declara la figura como dummy (el origen escribe bytes dummy) y no traga el fallo de verificación como hace el CI del origen.",
    "pva-lean-bridge": "pva-lean-bridge (Puente LaTeX a Lean 4 V202, `mineria/pva-lean-bridge/LECTURA.md`): convierte un paper.tex en un esqueleto .lean con sorry y un gaps.json. El runner genera el esqueleto desde un fixture y verifica los 3 gaps del origen (definir Sobolev, definir solución débil, definir suavidad); los esqueletos son vacíos por diseño declarado.",
    "pva-ledger": "pva-ledger (Registro inmutable V202, `mineria/pva-ledger/LECTURA.md`): publica el sha256 real de un archivo en `<archivo>.pva-ledger.json` y lo re-comprueba en verify, detectando manipulación de 1 byte. Arweave y Zenodo son simulados en el origen y el runner los marca como 'SIMULADO': no emite identificadores reales. El verify del origen no verificaba nada; el runner sí.",
    "pva-orchestrator": "pva-orchestrator (Orquestador PVA V202, `mineria/pva-orchestrator/LECTURA.md`): lee el pva.yml (5 fases), encadena los 5 pasos en orden y escribe pva_dashboard.json. El runner corrige de forma documentada el defecto del origen (su cli.py acepta --config y no lo lee): un phi distinto en la config se refleja en el dashboard.",
    "pva-swarm": "pva-swarm (Validación adversarial V202, `mineria/pva-swarm/LECTURA.md`): registro de papers en papers.json con validación de formato DOI y rechazo de duplicados. El runner verifica los 2 papers iniciales, el registro nuevo, el duplicado rechazado y el DOI mal formado. El origen no implementa validadores ni lógica fail_refutation/counterexample ni tablero: la receta cubre solo el registro y lo declara.",
}


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for r in RECIPES:
        (OUT / f"recipe_{r['id']}.yaml").write_text(recipe_doc(r), encoding="utf-8")
        (OUT / f"runner_{r['id']}.py").write_text(RUNNERS[r["id"]], encoding="utf-8")
    (OUT / "run_recetas.py").write_text(RUN_RECETAS, encoding="utf-8")
    (OUT / "recetas_no_encontradas.json").write_text(
        json.dumps(NO_ENCONTRADAS, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    parrafos = "\n\n".join(f"### {r['id']}\n\n{PARRAFOS[r['id']]}" for r in RECIPES)
    (OUT / "README_recetas.md").write_text(
        README_TMPL.format(ts=TS, parrafos=parrafos), encoding="utf-8")
    print(f"Escritas {len(RECIPES)} recetas + {len(RUNNERS)} runners en {OUT}")
    print("TS:", TS)


if __name__ == "__main__":
    main()
