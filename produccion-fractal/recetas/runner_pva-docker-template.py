#!/usr/bin/env python3
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
    (base / "Dockerfile").write_text("FROM python:3.11-slim\nRUN apt-get update && apt-get install -y make\n", encoding="utf-8")
    (base / "Makefile").write_text("repro:\n\tpython scripts/repro.py\n\ndev:\n\tpython scripts/repro.py\n\ntest:\n\tpython scripts/verify_data.py\n\nlint:\n\tpython -m py_compile scripts/repro.py\n\nreproduce:\n\tpython scripts/repro.py\n", encoding="utf-8")
    (base / "scripts").mkdir()
    (base / "scripts" / "repro.py").write_text("# repro\n", encoding="utf-8")
    (base / "scripts" / "verify_data.py").write_text("# verify\n", encoding="utf-8")
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
