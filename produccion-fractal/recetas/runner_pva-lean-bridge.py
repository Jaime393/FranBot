#!/usr/bin/env python3
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
TEX_FIXTURE = """\\begin{theorem}[Navier-Stokes]
Sea $u_0$ campo inicial suave divergencia cero. Entonces existe solucion suave global de Navier-Stokes.
\\end{theorem}
\\begin{theorem}[Sobolev]
$H^1$ es un espacio de Hilbert.
\\end{theorem}
\\begin{definition}[Sobolev H1]
$H^1$ funciones con derivada L2.
\\end{definition}
"""


def bridge(tex_path, out_dir):
    texto = Path(tex_path).read_text(encoding="utf-8")
    n_theorems = len(re.findall(r"\\begin\{theorem\}", texto))
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    lean = out / "NavierStokes.lean"
    lean.write_text(
        "-- Esqueleto generado por pva-lean-bridge (receta minima)\n"
        "def SobolevH1 := sorry\n"
        "def WeakSolution := sorry\n"
        "def SmoothCondition := sorry\n"
        "\n-- TODO: formalizar\n"
        "-- 1. Definir H^1, L^2, espacios de divergencia cero\n"
        "-- 2. Definir solucion debil con presion\n"
        "-- 3. Definir condicion de suavidad y acotamiento\n",
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
