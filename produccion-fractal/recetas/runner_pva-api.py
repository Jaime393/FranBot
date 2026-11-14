#!/usr/bin/env python3
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
