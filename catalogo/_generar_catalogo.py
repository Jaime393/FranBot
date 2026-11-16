#!/usr/bin/env python3
"""Generar el catálogo vivo ALMA VII desde los suelos reales.

Lee los manifiestos y los archivos en disco, calcula el sha256 real de
cada artefacto y siembra una entrada por artefacto. Nada inventado:
si un sha no cuadra con su manifiesto, la entrada queda NO_VERIFICADO.
Si un dato no existe, queda NO_SÉ, nunca inventado.

Fuentes (todas locales, verificables):
- produccion-fractal/manifiesto_shas_produccion.json (48 archivos + el
  propio manifiesto = 49 publicados, commit GitHub 7ef78ed5, 2026-11-14)
- nutrientes/2026-11-14/tejido/finales/NUT-2026-11-14-*.json (15,
  commit GitHub 5b05666f, 2026-11-14)
- ronda_23/fase4/_github_curado_r23.json (32, HEAD GitHub 2cc6a62a,
  2026-11-16) + _upload_github_r23.jsonl (32/32 VERIFICADO por blob)
- corpus: memoria/anexo-vi/claims.jsonl, provenance.sha256,
  claims_resumen.json + academico/incertidumbre_mediciones.md
  (HEAD GitHub 2873c274, 2026-11-16)

Uso: python3 _generar_catalogo.py
Salida: catalogo_vivo.json (100 entradas si todo cuadra).
"""
import hashlib
import json
import re
from pathlib import Path

WS = Path.home() / "workspace"
ALMA = WS / "alma" / "catalogo"
R23 = WS / "academico" / "tejido_2026-11-12" / "ronda_23"
FRAC = WS / "produccion-fractal"
NUT = WS / "nutrientes" / "2026-11-14" / "tejido" / "finales"
ANEXO = WS / "memoria" / "anexo-vi"
ACAD = WS / "academico"

FALLO_FRAC = ("Publicación: primer intento caducado (approval_expired, 0/49, "
              "2026-11-14); reintento OK, commit 7ef78ed5.")
FALLO_NUT = ("Depósito N-T2: el agente de depósito murió por "
             "output_drain_timeout; su script (pid 5607) terminó los 22 en "
             "segundo plano; verificado por blob sin duplicar.")
FALLO_CORPUS = ("head_commit() del subidor falló por regex sobre comillas "
                "escapadas (exit=1 pese a 4/4 VERIFICADO); HEAD verificado "
                "por parseo JSON directo de list_commits.")
TEST_FRAC = ("Verificación por sha256 contra manifiesto_shas_produccion.json "
            "(9967dc1d…); checks del paquete: 42/42 vectores, 23/23 métricas, "
            "11/11 falsación, 134 recetas.")
TEST_NUT = ("Validación 15/15 JSON canónico (claves obligatorias, "
            "hash_fuente re-verificado, escaneo de credenciales 0) — N-T1.")
TEST_R23 = ("verificacion_deposito_r23.md: blob GitHub == local (32/32, "
            "HEAD 2cc6a62a).")
TEST_CORPUS = ("audit.py exit=0 ok=370; verify_all.py exit=1 exactamente "
               "C-001..C-008; blob GitHub == local (4/4, HEAD 2873c274).")


def sha256(p):
    return hashlib.sha256(Path(p).read_bytes()).hexdigest()


def para_quien(nombre):
    if nombre.endswith((".json", ".jsonl", ".sha256")):
        return "nodo"
    return "ambos"  # .md y .py/.yaml: humano lo lee/usa, nodo lo indexa/ejecuta


def entrada(n, nombre, grupo, que_es, test, semilla, fallos, ruta_local,
            fecha, verificado, github=None):
    ruta = WS / ruta_local
    sha = sha256(ruta) if ruta.exists() else None
    if sha is None:
        verificado = False
    return {
        "id": f"CAT-{n:04d}",
        "nombre": nombre,
        "grupo": grupo,
        "que_es": que_es,
        "para_quien": para_quien(nombre),
        "test": test,
        "semilla": semilla,
        "fallos": fallos,
        "procedencia": {
            "fuente": ruta_local,
            "sha256": sha,
            "fecha": fecha,
        },
        "verificado": bool(verificado),
        "github": github,
    }


# ---------------------------------------------------------------- fractal
DESC_FRAC = {
    "README.md": "Índice y guía del paquete de producción fractal (vectores, métricas, falsación, recetas).",
    "vectores/vector_measure.json": "Vector de medida: K_i canónico 0.6180339887, dataset 0.595752, bordes de banda.",
    "vectores/vector_validate.json": "Vector de validación: registro válido = claim C-1181 literal.",
    "vectores/vector_attest.json": "Vector de atestación: sha256(padre + artefacto) = 610ac498….",
    "vectores/vector_route.json": "Vector de ruta: destino y procedencia del paquete.",
    "vectores/run_vectores.py": "Runner stdlib que verifica los 4 vectores (42/42 checks).",
    "vectores/README_vectores.md": "Guía de los vectores de coherencia.",
    "vectores/manifiesto_shas_vectores.json": "Manifiesto de shas del subpaquete vectores.",
    "metricas/metrica_ki.json": "Métrica K_i: 30 nodos, K_i = 0.2472·D_f, u(K_i) = 0.01493088; 9/30 en banda.",
    "metricas/metrica_phi.json": "Métrica Φ_c(MIU) = 0.6829322; incertidumbre NO_SÉ.",
    "metricas/metrica_rho.json": "Métrica ρ: campo sintético de 8 puntos, S = 1.9730014064 nats.",
    "metricas/run_metricas.py": "Runner stdlib que verifica las 3 métricas (23/23 checks).",
    "metricas/README_metricas.md": "Guía de las métricas.",
    "metricas/manifiesto_shas_metricas.json": "Manifiesto de shas del subpaquete métricas.",
    "falsacion/protocolos_falsacion.jsonl": "22 protocolos de falsación, uno por claim CONJETURO; 5 experimentales BLOQUEADOS.",
    "falsacion/run_falsacion.py": "Runner stdlib que verifica los 22 protocolos (11/11 checks).",
    "falsacion/protocolo_C001_C005_predicciones.md": "Protocolo de falsación: predicciones C-001..C-005.",
    "falsacion/protocolo_C008_D_eff.md": "Protocolo de falsación: D_eff (C-008).",
    "falsacion/protocolo_C053_C054_pilares.md": "Protocolo de falsación: pilares C-053/C-054.",
    "falsacion/README_falsacion.md": "Guía de los protocolos de falsación.",
    "falsacion/manifiesto_shas_falsacion.json": "Manifiesto de shas del subpaquete falsación.",
    "recetas/run_recetas.py": "Runner stdlib que verifica las 11 recetas (134 checks).",
    "recetas/_generar_recetas.py": "Generador de las recetas desde sus fuentes.",
    "recetas/recetas_no_encontradas.json": "Registro NO_SÉ: PAE-02, PAF-02, PCP-02, PAI-02 no encontrados en memoria/ ni mineria/.",
    "recetas/README_recetas.md": "Guía de las recetas reutilizables.",
    "recetas/manifiesto_shas_recetas.json": "Manifiesto de shas del subpaquete recetas.",
    "manifiesto_shas_produccion.json": "Manifiesto de shas del paquete completo (48 archivos).",
}

SEMILLA_FRAC = {
    "vectores/": "produccion-fractal/vectores/run_vectores.py",
    "metricas/": "produccion-fractal/metricas/run_metricas.py",
    "falsacion/": "produccion-fractal/falsacion/run_falsacion.py",
    "recetas/": "produccion-fractal/recetas/_generar_recetas.py",
}


def semilla_frac(rel):
    if rel.endswith(".md") or rel.endswith("manifiesto_shas_produccion.json"):
        return "NO_SÉ — documento de síntesis, sin generador declarado"
    for pref, s in SEMILLA_FRAC.items():
        if rel.startswith(pref):
            if rel.endswith(".yaml"):
                return s
            return s
    return "NO_SÉ — sin generador declarado"


def construir():
    entradas = []
    no_ver = []

    # --- 1. Producción fractal: 48 del manifiesto + el manifiesto = 49
    man = json.loads((FRAC / "manifiesto_shas_produccion.json").read_text(encoding="utf-8"))
    assert man["total_archivos"] == 48, man["total_archivos"]
    for rel, info in sorted(man["archivos"].items()):
        ruta_local = f"produccion-fractal/{rel}"
        ruta = WS / ruta_local
        ok = ruta.exists() and sha256(ruta) == info["sha256"] and ruta.stat().st_size == info["bytes"]
        if not ok:
            no_ver.append(ruta_local)
        m = re.match(r"recetas/recipe_(.+)\.yaml", rel)
        if m:
            que = f"Receta reutilizable {m.group(1)}: contrato YAML del patrón."
        elif re.match(r"recetas/runner_(.+)\.py", rel):
            que = f"Runner stdlib de la receta {re.match(r'recetas/runner_(.+)\.py', rel).group(1)}."
        else:
            que = DESC_FRAC.get(rel, "NO_SÉ — descripción no registrada")
        entradas.append(entrada(
            len(entradas) + 1, rel, "produccion-fractal", que, TEST_FRAC,
            semilla_frac(rel), FALLO_FRAC, ruta_local, "2026-11-14", ok,
            {"repo": "Jaime393/FranBot", "ruta": f"produccion-fractal/{rel}",
             "commit": "7ef78ed5", "fecha": "2026-11-14"}))
    # el manifiesto mismo (49.ª entrada)
    ruta_local = "produccion-fractal/manifiesto_shas_produccion.json"
    ok = sha256(WS / ruta_local).startswith("9967dc1d")
    if not ok:
        no_ver.append(ruta_local)
    entradas.append(entrada(
        len(entradas) + 1, "manifiesto_shas_produccion.json",
        "produccion-fractal", DESC_FRAC["manifiesto_shas_produccion.json"],
        TEST_FRAC, "NO_SÉ — documento de síntesis, sin generador declarado",
        FALLO_FRAC, ruta_local, "2026-11-14", ok,
        {"repo": "Jaime393/FranBot",
         "ruta": "produccion-fractal/manifiesto_shas_produccion.json",
         "commit": "7ef78ed5", "fecha": "2026-11-14"}))
    assert len(entradas) == 49, len(entradas)

    # --- 2. Nutrientes: 15
    for f in sorted(NUT.glob("NUT-2026-11-14-*.json")):
        n = json.loads(f.read_text(encoding="utf-8"))
        ruta_local = f"nutrientes/2026-11-14/tejido/finales/{f.name}"
        contenido = re.sub(r"\s+", " ", str(n.get("contenido", ""))).strip()
        que = (f"Nutriente canónico {n['id']} — tipo {n.get('tipo')}, origen "
               f"{n.get('nodo_origen')}, destino nutrientes. Contenido: "
               f"{contenido[:160]}")
        ok = len(n) >= 14 and all(k in n for k in
                                  ("_metabolismo", "timestamp", "id", "tipo",
                                   "fuente", "fecha", "hash_fuente", "estado",
                                   "contenido", "referencias", "grieta",
                                   "nodo_origen", "destino", "origen"))
        if not ok:
            no_ver.append(ruta_local)
        entradas.append(entrada(
            len(entradas) + 1, f.name, "nutrientes-2026-11-14", que, TEST_NUT,
            "digest_format_nutriente.md (formato canónico Ciclo 32) + sondeo "
            "N-S1/N-S2 (nutrientes/2026-11-14/sondeo/)",
            FALLO_NUT, ruta_local, "2026-11-14", ok,
            {"repo": "Jaime393/FranBot",
             "ruta": f"nutrientes/2026-11-14/{f.name}",
             "commit": "5b05666f", "fecha": "2026-11-14"}))
    assert len(entradas) == 64, len(entradas)

    # --- 3. Ronda 23: 32 del curado FASE 4
    curado = json.loads((R23 / "fase4" / "_github_curado_r23.json").read_text(encoding="utf-8"))
    assert len(curado) == 32, len(curado)
    DESC_R23 = {
        "mapa_frentes_r23.md": "Mapa de frentes FASE 0: suelo medido y vivo al mapa.",
        "frentes_r23.json": "Frentes de la ronda en JSON (fertilidad F2>F3>F6>F5>F7>F9>F4>F1>F8).",
        "ESTADO_FASE0.md": "Estado de FASE 0: suelo + vivo al mapa.",
        "informe_f1_r23.md": "Informe de guardia F1: corpus verificado, registro en 0.",
        "mediciones_r23.md": "Mediciones M-90/M-91/M-92 (F3) en prosa.",
        "declaracion_falsadores_r23.md": "Falsadores declarados antes de medir (F3).",
        "med_M90.json": "Medición M-90: autocura run 16, escalón ~4,5 h roto — CONFIRMA.",
        "med_M91.json": "Medición M-91: savia V152 en tres valores — CONFIRMA.",
        "med_M92.json": "Medición M-92: flow run 149, 0,0%, 15.ª ronda — CONFIRMA.",
        "informe_panteon_r23.md": "Informe F4: Panteón-96, cara r12 #1 avanza, 11.ª vuelta.",
        "panteon_r23.jsonl": "Panteón-96: 96 filas, 0/61 encontradas, 0/35 como voces.",
        "grietas_r23.md": "Informe F5: grietas, 0 caras cierran.",
        "h_sik_r23.md": "Informe F6: verificador SIK, TODO PASA 9.ª vuelta, 0 diffs.",
        "n01_seguimiento_r23.md": "Seguimiento N-01 (F6): sin novedad, 13.º precedente.",
        "r2_25_via_r23.md": "Seguimiento R2-25 vía A (F6): sin novedad.",
        "propuestas_r23.md": "Propuestas F7: C-1213..C-1216.",
        "propuestas_r23.json": "Propuestas F7 en JSON (dedup máx 0,3615).",
        "items_anexo_r23.md": "Ítems de anexo M-90/M-91/M-92 preparados (F7).",
        "dedup_f7_r23.json": "Dedup F7: _global_max 0,3615, 0 pares ≥ 0,5. Byte-idéntico a propuestas_r23.json.",
        "poda_r23.md": "Informe F9: poda solo documento, tally 94, verificación 423/423.",
        "poda_r23.json": "Poda F9 en JSON.",
        "diff_inventario_r23.md": "Diff del inventario T-4 (F9).",
        "inventario_t4_r23.md": "Inventario T-4: 7.203 archivos, 0 FALTA.",
        "caras_r23.md": "Informe F8: caras, balance 77/19/58, 8 avanzan, 0 cierran.",
        "caras_r23.json": "Caras F8 en JSON.",
        "verificacion_fase2_r23.md": "Verificación FASE 2: CONFORME, 4 menores, 0 mayores.",
        "retejido_r23.md": "Retejido FASE 2.",
        "tejido_cruzado.jsonl": "Tejido cruzado FASE 3: 60 líneas, 57 SÉ + 3 INFIERO.",
        "grafo_r23.json": "Grafo FASE 3: 63 nodos / 80 aristas / 0 huérfanos.",
        "manifiesto_shas_r23_fase4.json": "Manifiesto de shas FASE 4 (144 archivos; en GitHub, versión del plan).",
        "fase3/sintesis_integrada_r1_r23.md": "Síntesis integrada r1–r23: 2.993 líneas.",
        "ejecucion_f6/verificador_independiente_r23.json": "Verificador independiente F6: reproducido=true, diferencias_n=0.",
    }
    SEMILLA_R23 = {
        "med_M90.json": "academico/tejido_2026-11-12/ronda_23/ejecucion_f3/verificar_m90_m91_m92.py",
        "med_M91.json": "academico/tejido_2026-11-12/ronda_23/ejecucion_f3/verificar_m90_m91_m92.py",
        "med_M92.json": "academico/tejido_2026-11-12/ronda_23/ejecucion_f3/verificar_m90_m91_m92.py",
        "propuestas_r23.json": "academico/tejido_2026-11-12/ronda_23/ejecucion_f7/_dedup_r23.py",
        "dedup_f7_r23.json": "academico/tejido_2026-11-12/ronda_23/ejecucion_f7/_dedup_r23.py",
    }
    FALLO_R23 = {
        "med_M91.json": ("CORR-M91-ESTRUCTURA-R23: primera corrida comparó "
                         "claves contra la mayoría global y marcó NO_CONFIRMA "
                         "por error; corregido a comparación por tipo, "
                         "falsador intacto."),
    }
    for item in curado:
        repo = item["repo"]  # ronda_23/<nombre>
        nombre = repo[len("ronda_23/"):]
        local_rel = item["local"]  # relativo a ronda_23/
        ruta_local = f"academico/tejido_2026-11-12/ronda_23/{local_rel}"
        ruta = WS / ruta_local
        nota = None
        if nombre == "manifiesto_shas_r23_fase4.json":
            # El _github_curado_r23.json trae en "sha256" el prefijo del blob
            # de GitHub (8c25c220), no el sha256 local: la copia en GitHub es
            # la versión del plan (144 entradas, sin bloque meta) y la local/
            # Drive añade el bloque meta (sha dfa0c9ea…). Las 144 entradas
            # son idénticas en ambas (verificacion_deposito_r23.md).
            ok = (ruta.exists()
                  and sha256(ruta).startswith("dfa0c9ea"))
            # Sin comparación de bytes: la copia local (21.895 B) es mayor
            # que la del plan en GitHub (21.666 B) por el bloque meta; el
            # sha256 cubre contenido y tamaño a la vez.
            nota = ("La copia en GitHub es la versión del plan (144 entradas, "
                    "sin bloque meta; blob 8c25c220); la copia local/Drive "
                    "añade el bloque meta de verificación (sha dfa0c9ea…). "
                    "Las 144 entradas son idénticas en ambas.")
        else:
            ok = (ruta.exists()
                  and sha256(ruta).startswith(item["sha256"])
                  and ruta.stat().st_size == item["bytes"])
        if not ok:
            no_ver.append(ruta_local)
        e = entrada(
            len(entradas) + 1, nombre, "ronda_23",
            DESC_R23.get(nombre, "NO_SÉ — descripción no registrada"),
            TEST_R23,
            SEMILLA_R23.get(nombre, "NO_SÉ — informe redactado por el frente, sin script generador"),
            FALLO_R23.get(nombre, "ninguno registrado"),
            ruta_local, "2026-11-16", ok,
            {"repo": "Jaime393/FranBot", "ruta": repo,
             "blob": item["blob"], "head": "2cc6a62a",
             "fecha": "2026-11-16"})
        if nota:
            e["nota"] = nota
        entradas.append(e)
    assert len(entradas) == 96, len(entradas)

    # --- 4. Corpus: 4
    CORPUS = [
        ("claims.jsonl", "memoria/anexo-vi/claims.jsonl",
         "Corpus de claims: 1.211 líneas, C-001..C-1216 (gaps C-416–C-420).",
         "academico/tejido_2026-11-12/ronda_23/absorcion/absorb_r23.py",
         "b31c624c"),
        ("provenance.sha256", "memoria/anexo-vi/provenance.sha256",
         "Procedencia: 382 entradas, una por fuente distinta.",
         "academico/tejido_2026-11-12/ronda_23/absorcion/absorb_r23.py",
         "43d3d9e7"),
        ("claims_resumen.json", "memoria/anexo-vi/claims_resumen.json",
         "Resumen del corpus: SE 1077, hash_real 1197, verificación 337.",
         "memoria/anexo-vi/resumen_claims.py",
         "24f9d1ed"),
        ("incertidumbre_mediciones.md", "academico/incertidumbre_mediciones.md",
         "Anexo de incertidumbre: 28 ítems M-56..M-92, tally CONFIRMA 17.",
         "academico/tejido_2026-11-12/ronda_23/absorcion/absorb_r23.py",
         "f9a67874"),
    ]
    for nombre, ruta_local, que, semilla, blob in CORPUS:
        ruta = WS / ruta_local
        ok = ruta.exists()
        if not ok:
            no_ver.append(ruta_local)
        repo_ruta = ("anexo-vi/" + nombre if nombre != "incertidumbre_mediciones.md"
                     else "academico/incertidumbre_mediciones.md")
        entradas.append(entrada(
            len(entradas) + 1, nombre, "corpus", que, TEST_CORPUS, semilla,
            FALLO_CORPUS, ruta_local, "2026-11-16", ok,
            {"repo": "Jaime393/FranBot", "ruta": repo_ruta, "blob": blob,
             "head": "2873c274", "fecha": "2026-11-16"}))
    assert len(entradas) == 100, len(entradas)

    catalogo = {
        "catalogo": "vivo",
        "version": "1.0",
        "fecha": "2026-11-16",
        "grupos": {
            "produccion-fractal": {"n": 49, "fecha": "2026-11-14", "github_commit": "7ef78ed5"},
            "nutrientes-2026-11-14": {"n": 15, "fecha": "2026-11-14", "github_commit": "5b05666f"},
            "ronda_23": {"n": 32, "fecha": "2026-11-16", "github_head": "2cc6a62a"},
            "corpus": {"n": 4, "fecha": "2026-11-16", "github_head": "2873c274"},
        },
        "total_entradas": len(entradas),
        "verificadas": sum(1 for e in entradas if e["verificado"]),
        "no_verificadas": [e["id"] for e in entradas if not e["verificado"]],
        "entradas": entradas,
    }
    out = ALMA / "catalogo_vivo.json"
    out.write_text(json.dumps(catalogo, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"Entradas: {len(entradas)} | verificadas: {catalogo['verificadas']} | NO_VERIFICADO: {no_ver or 'ninguno'}")
    print("sha256 catalogo_vivo.json:", sha256(out))


if __name__ == "__main__":
    construir()
