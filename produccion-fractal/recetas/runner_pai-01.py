#!/usr/bin/env python3
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
