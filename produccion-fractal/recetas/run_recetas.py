#!/usr/bin/env python3
"""run_recetas.py — Validador del Frente D (recetas mínimas).
Solo stdlib. Por cada recipe_<id>.yaml:
  1. existe y parsea (mini-YAML del subconjunto usado por el generador),
  2. campos requeridos presentes (id, nombre, esencias, parametros, outputs,
     tests, presupuesto, procedencia),
  3. esencias válidas y no vacías (subset de measure/validate/attest/route),
  4. procedencia: parent_hash == sha256 real del archivo padre, author Hebra,
     timestamp ISO válido,
  5. tests no vacíos, cada uno con contrato y prueba,
  6. presupuesto con tokens_estimados > 0, cpu y almacenamiento_bytes > 0,
  7. runner_<id>.py existe, compila (py_compile) y ejecuta con exit 0.
Una línea PASS/FAIL por check. Exit 0 si todo pasa, 1 si algo falla.
Uso: python3 run_recetas.py [directorio]
"""
import hashlib
import json
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path

ESENCIAS_VALIDAS = {"measure", "validate", "attest", "route"}
REQUERIDOS = ["id", "nombre", "esencias", "parametros", "outputs", "tests",
              "presupuesto", "procedencia"]
WS = Path("/home/hatch/workspace")


def _scalar(tok):
    tok = tok.strip()
    if tok in ("true", "True"):
        return True
    if tok in ("false", "False"):
        return False
    if tok in ("null", "~"):
        return None
    if tok.startswith("[") and tok.endswith("]"):
        inner = tok[1:-1].strip()
        if not inner:
            return []
        return [_scalar(x) for x in _split_inline(inner)]
    if tok.startswith("{") and tok.endswith("}"):
        return {}
    if (tok.startswith('"') and tok.endswith('"')) or (tok.startswith("'") and tok.endswith("'")):
        return tok[1:-1].replace("''", "'")
    try:
        return int(tok)
    except ValueError:
        pass
    try:
        return float(tok)
    except ValueError:
        pass
    return tok


def _split_inline(s):
    out, cur, depth, quote = [], "", 0, None
    for ch in s:
        if quote:
            cur += ch
            if ch == quote:
                quote = None
        elif ch in "\"'":
            quote = ch
            cur += ch
        elif ch == "[":
            depth += 1
            cur += ch
        elif ch == "]":
            depth -= 1
            cur += ch
        elif ch == "," and depth == 0:
            out.append(cur)
            cur = ""
        else:
            cur += ch
    if cur.strip():
        out.append(cur)
    return out


def parse_yaml(text):
    lines = []
    for raw in text.splitlines():
        if raw.strip() == "" or raw.lstrip().startswith("#"):
            continue
        indent = len(raw) - len(raw.lstrip(" "))
        lines.append((indent, raw.strip()))
    pos = [0]

    def parse_block(indent):
        if pos[0] >= len(lines):
            return None
        ind, content = lines[pos[0]]
        if content.startswith("- "):
            return parse_seq(indent)
        return parse_map(indent)

    def parse_map(indent):
        obj = {}
        while pos[0] < len(lines):
            ind, content = lines[pos[0]]
            if ind < indent or content.startswith("- "):
                break
            if ind > indent:
                break
            m = re.match(r"^([^:]+):\s*(.*)$", content)
            if not m:
                raise ValueError(f"línea no parseable: {content!r}")
            key, val = m.group(1).strip(), m.group(2).strip()
            pos[0] += 1
            if val == "":
                if pos[0] < len(lines) and lines[pos[0]][0] > indent:
                    obj[key] = parse_block(lines[pos[0]][0])
                else:
                    obj[key] = None
            else:
                obj[key] = _scalar(val)
        return obj

    def parse_seq(indent):
        arr = []
        while pos[0] < len(lines):
            ind, content = lines[pos[0]]
            if ind != indent or not content.startswith("- "):
                break
            rest = content[2:].strip()
            if rest == "":
                pos[0] += 1
                arr.append(parse_block(lines[pos[0]][0]) if pos[0] < len(lines) else None)
                continue
            m = re.match(r"^([^:]+):\s*(.*)$", rest)
            if m and ":" in rest:
                first_key, first_val = m.group(1).strip(), m.group(2).strip()
                item = {}
                if first_val == "":
                    pos[0] += 1
                    if pos[0] < len(lines) and lines[pos[0]][0] > indent:
                        item[first_key] = parse_block(lines[pos[0]][0])
                    else:
                        item[first_key] = None
                else:
                    item[first_key] = _scalar(first_val)
                    pos[0] += 1
                while pos[0] < len(lines):
                    ind2, content2 = lines[pos[0]]
                    if ind2 != indent + 2 or content2.startswith("- "):
                        break
                    m2 = re.match(r"^([^:]+):\s*(.*)$", content2)
                    if not m2:
                        break
                    k2, v2 = m2.group(1).strip(), m2.group(2).strip()
                    pos[0] += 1
                    if v2 == "":
                        if pos[0] < len(lines) and lines[pos[0]][0] > ind2:
                            item[k2] = parse_block(lines[pos[0]][0])
                        else:
                            item[k2] = None
                    else:
                        item[k2] = _scalar(v2)
                arr.append(item)
            else:
                arr.append(_scalar(rest))
                pos[0] += 1
        return arr

    return parse_block(lines[0][0]) if lines else None


def sha256_file(p):
    return "sha256:" + hashlib.sha256(Path(p).read_bytes()).hexdigest()


def main():
    base = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).parent
    fails = 0

    def check(name, ok, detail=""):
        nonlocal fails
        if not ok:
            fails += 1
        print(f"[run_recetas] {name}: {'PASS' if ok else 'FAIL'} {detail}")

    yamls = sorted(base.glob("recipe_*.yaml"))
    check("hay_recetas", len(yamls) > 0, f"({len(yamls)} recipe_*.yaml)")
    for ypath in yamls:
        rid = ypath.stem[len("recipe_"):]
        try:
            doc = parse_yaml(ypath.read_text(encoding="utf-8"))
            parsed = isinstance(doc, dict)
        except Exception as e:
            check(f"{rid}/parsea_yaml", False, f"({e})")
            continue
        check(f"{rid}/parsea_yaml", parsed)
        if not parsed:
            continue
        check(f"{rid}/campos_requeridos",
              all(k in doc for k in REQUERIDOS),
              f"(faltan={[k for k in REQUERIDOS if k not in doc]})")
        check(f"{rid}/id_coherente", doc.get("id") == rid, f"(id={doc.get('id')})")
        es = doc.get("esencias")
        check(f"{rid}/esencias_validas",
              isinstance(es, list) and len(es) > 0 and set(es) <= ESENCIAS_VALIDAS,
              f"({es})")
        proc = doc.get("procedencia", {})
        parent_path = proc.get("parent_path", "")
        parent_full = WS / parent_path
        h_real = sha256_file(parent_full) if parent_full.exists() else None
        check(f"{rid}/parent_hash_real",
              h_real is not None and proc.get("parent_hash") == h_real,
              f"({parent_path})")
        check(f"{rid}/procedencia_autor_fecha",
              proc.get("author") == "Hebra" and bool(proc.get("timestamp")),
              f"(author={proc.get('author')})")
        try:
            datetime.fromisoformat(str(proc.get("timestamp", "")).replace("Z", "+00:00"))
            ts_ok = True
        except ValueError:
            ts_ok = False
        check(f"{rid}/timestamp_iso", ts_ok, f"({proc.get('timestamp')})")
        tests = doc.get("tests", [])
        check(f"{rid}/tests_contrato_prueba",
              isinstance(tests, list) and len(tests) > 0
              and all(isinstance(t, dict) and t.get("contrato") and t.get("prueba") for t in tests),
              f"({len(tests)} tests)")
        pres = doc.get("presupuesto", {})
        check(f"{rid}/presupuesto",
              isinstance(pres.get("tokens_estimados"), int) and pres["tokens_estimados"] > 0
              and isinstance(pres.get("almacenamiento_bytes"), int) and pres["almacenamiento_bytes"] > 0
              and bool(pres.get("cpu")),
              f"({pres})")
        runner = base / f"runner_{rid}.py"
        check(f"{rid}/runner_existe", runner.exists())
        if runner.exists():
            comp = subprocess.run([sys.executable, "-m", "py_compile", str(runner)],
                                  capture_output=True, text=True, timeout=60)
            check(f"{rid}/runner_compila", comp.returncode == 0,
                  comp.stderr.strip()[:200] if comp.returncode else "")
            if comp.returncode == 0:
                run = subprocess.run([sys.executable, str(runner)],
                                     capture_output=True, text=True, timeout=120)
                check(f"{rid}/runner_exit_0", run.returncode == 0,
                      run.stdout.strip().splitlines()[-1] if run.stdout.strip() else run.stderr.strip()[:200])
    print(f"[run_recetas] RESULT: {'PASS' if fails == 0 else 'FAIL'} ({fails} fallos)")
    return 0 if fails == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
