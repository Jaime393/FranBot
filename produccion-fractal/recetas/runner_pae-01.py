#!/usr/bin/env python3
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
    return f"# TODO: Crear {carencia['target']}\n# Generado por PAE-01"


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
        (base / "miu_memory.py").write_text("# fixture\n")
        (base / "miu_scanner.py").write_text("# fixture\n")
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
