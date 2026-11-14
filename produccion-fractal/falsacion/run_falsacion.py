#!/usr/bin/env python3
"""run_falsacion.py — valida protocolos_falsacion.jsonl (solo stdlib).

Checks (una línea PASS/FAIL por check; exit 0 si todo pasa, 1 si algo falla):
  1. el archivo existe y es JSONL válido (una entrada por línea)
  2. exactamente 22 líneas
  3. los 22 IDs CONJETURO esperados están presentes, sin duplicados
  4. cada línea tiene claim_id, claim, estado CONJETURO, contraejemplo,
     procedimiento, tipo, input_esperado, criterio_falsacion,
     criterio_confirmacion y fuente
  5. contraejemplo, procedimiento y ambos criterios no vacíos
  6. procedimiento es una lista de pasos numerados (>= 2 pasos)
  7. tipo válido: experimental | logico | datos | NO_SÉ
  8. el claim coincide byte a byte con claims.jsonl (padre)
  9. procedencia.parent_hash == sha256 real de claims.jsonl
 10. presupuesto presente con tokens_estimados, cpu y almacenamiento_bytes

Uso: python3 run_falsacion.py [--jsonl RUTA] [--claims RUTA]
"""
import hashlib
import json
import pathlib
import sys

DEFAULT_JSONL = pathlib.Path(__file__).resolve().parent / "protocolos_falsacion.jsonl"
DEFAULT_CLAIMS = pathlib.Path("/home/hatch/workspace/memoria/anexo-vi/claims.jsonl")

EXPECTED_IDS = [
    "C-001", "C-002", "C-003", "C-004", "C-005", "C-008", "C-053", "C-054",
    "C-060", "C-061", "C-065", "C-066", "C-067", "C-068", "C-069", "C-131",
    "C-323", "C-324", "C-325", "C-341", "C-345", "C-360",
]
TIPOS_VALIDOS = {"experimental", "logico", "datos", "NO_SÉ"}
CAMPOS = ["claim_id", "claim", "estado", "contraejemplo", "procedimiento",
          "tipo", "input_esperado", "criterio_falsacion",
          "criterio_confirmacion", "fuente"]


def main() -> int:
    args = sys.argv[1:]
    jsonl_path = pathlib.Path(args[args.index("--jsonl") + 1]) if "--jsonl" in args else DEFAULT_JSONL
    claims_path = pathlib.Path(args[args.index("--claims") + 1]) if "--claims" in args else DEFAULT_CLAIMS
    results = []

    def check(name, ok, detail=""):
        results.append((name, bool(ok), detail))
        print(f"{'PASS' if ok else 'FAIL'}  {name}" + (f" — {detail}" if detail else ""))

    # 1. JSONL válido
    rows = []
    try:
        for i, line in enumerate(jsonl_path.read_text(encoding="utf-8").splitlines(), 1):
            if line.strip():
                rows.append(json.loads(line))
        check("jsonl_valido", True, f"{len(rows)} líneas parseadas")
    except Exception as e:  # noqa: BLE001
        check("jsonl_valido", False, str(e))
        print(f"TOTAL: {sum(1 for _, ok, _ in results if ok)}/{len(results)} checks PASS")
        return 1

    # 2. exactamente 22 líneas
    check("n_lineas_22", len(rows) == 22, f"n={len(rows)}")

    # 3. los 22 IDs, sin duplicados
    ids = [r.get("claim_id") for r in rows]
    check("ids_22_presentes", sorted(ids) == sorted(EXPECTED_IDS),
          f"faltan={sorted(set(EXPECTED_IDS) - set(ids)) or 'ninguno'} "
          f"extra={sorted(set(ids) - set(EXPECTED_IDS)) or 'ninguno'}")
    check("ids_sin_duplicados", len(ids) == len(set(ids)), f"n={len(ids)}")

    # 4. campos presentes
    faltantes = [(r.get("claim_id"), [c for c in CAMPOS if c not in r]) for r in rows]
    faltantes = [(i, c) for i, c in faltantes if c]
    check("campos_presentes", not faltantes, str(faltantes) if faltantes else "22/22 completos")

    # 5. contraejemplo, procedimiento y criterios no vacíos
    vacios = []
    for r in rows:
        for campo in ("contraejemplo", "criterio_falsacion", "criterio_confirmacion"):
            if not str(r.get(campo) or "").strip():
                vacios.append((r.get("claim_id"), campo))
        if not r.get("procedimiento"):
            vacios.append((r.get("claim_id"), "procedimiento"))
    check("campos_no_vacios", not vacios, str(vacios) if vacios else "22/22 no vacíos")

    # 6. procedimiento: lista de pasos numerados, >= 2
    malos = []
    for r in rows:
        p = r.get("procedimiento")
        if not isinstance(p, list) or len(p) < 2 or not all(isinstance(s, str) and s.strip() for s in p):
            malos.append(r.get("claim_id"))
    check("procedimiento_pasos", not malos, str(malos) if malos else "22/22 con >=2 pasos")

    # 7. tipo válido
    malos = [r.get("claim_id") for r in rows if r.get("tipo") not in TIPOS_VALIDOS]
    check("tipo_valido", not malos, str(malos) if malos else "22/22 válidos")

    # 8. claim coincide con claims.jsonl
    try:
        padre = {json.loads(l)["id"]: json.loads(l)["claim"]
                 for l in claims_path.read_text(encoding="utf-8").splitlines() if l.strip()}
        distintos = [r["claim_id"] for r in rows if padre.get(r["claim_id"]) != r.get("claim")]
        check("claim_igual_padre", not distintos, str(distintos) if distintos else "22/22 idénticos")
    except Exception as e:  # noqa: BLE001
        check("claim_igual_padre", False, str(e))

    # 9. parent_hash == sha256 real de claims.jsonl
    real = hashlib.sha256(claims_path.read_bytes()).hexdigest()
    malos = [r["claim_id"] for r in rows
             if (r.get("procedencia") or {}).get("parent_hash") != real]
    check("parent_hash_real", not malos, str(malos) if malos else f"sha256 {real[:16]}…")

    # 10. presupuesto presente
    malos = []
    for r in rows:
        b = r.get("presupuesto") or {}
        if not all(k in b for k in ("tokens_estimados", "cpu", "almacenamiento_bytes")):
            malos.append(r.get("claim_id"))
    check("presupuesto_presente", not malos, str(malos) if malos else "22/22 con presupuesto")

    n_ok = sum(1 for _, ok, _ in results if ok)
    print(f"TOTAL: {n_ok}/{len(results)} checks PASS")
    return 0 if n_ok == len(results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
