#!/usr/bin/env python3
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

DOI_RE = re.compile(r"^10\.\d{4,}/\S+$")
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
