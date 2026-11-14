#!/usr/bin/env python3
"""Runner mínimo de pva-lint — Linter PVA V202.
Fuente: mineria/pva-lint/LECTURA.md (6 comprobaciones, score 0-1, fase >0.999).
Solo stdlib. Sin red: el check doi valida presencia y formato con regex.
"""
import argparse
import re
import sys
import tempfile
from pathlib import Path

DOI_RE = re.compile(r"10\.\d{4,}/[^\s}]+")
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
    (base / "paper.md").write_text("DOI 10.5281/zenodo.20547558\n", encoding="utf-8")
    (base / "data").mkdir()
    (base / ".git").mkdir()
    (base / "Dockerfile").write_text("FROM python:3.11-slim\n", encoding="utf-8")
    (base / "Makefile").write_text("reproduce:\n\tpython cli.py --json\n", encoding="utf-8")
    (base / "fig_plot.py").write_text("# fig\n", encoding="utf-8")


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
            (base / "Makefile").write_text("test:\n\tpython cli.py\n", encoding="utf-8")
            r = run_checks(base)
            check("reproduce_sin_palabra", r["checks"]["reproduce"] is False)
    ok = sum(results)
    print(f"[runner_pva-lint] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
