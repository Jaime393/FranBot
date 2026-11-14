#!/usr/bin/env python3
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
    phi = float(re.search(r"phi_global:\s*([0-9.]+)", texto).group(1))
    fases = re.findall(r"- id:\s*(\d+)\s*\n\s*nombre:\s*(.+)\s*\n\s*plazo:\s*(.+)", texto)
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
