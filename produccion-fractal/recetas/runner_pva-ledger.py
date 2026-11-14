#!/usr/bin/env python3
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
        f.write_bytes(b"%PDF-1.4 fixture pva-ledger\n")
        ledger, out = publish(f)
        check("roundtrip_publish_verify", verify(f, out) is True)
        f.write_bytes(b"%PDF-1.4 fixture pva-ledger MODIFICADO\n")
        check("tamper_detectado", verify(f, out) is False)
        check("formato_ledger",
              len(ledger["sha256"]) == 64 and ledger["timestamp"].endswith("Z")
              and ledger["arweave_tx"] == "SIMULADO")
    ok = sum(results)
    print(f"[runner_pva-ledger] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
