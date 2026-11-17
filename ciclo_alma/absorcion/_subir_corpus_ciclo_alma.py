#!/usr/bin/env python3
"""Subida del corpus CICLO ALMA a GitHub en UN solo push-files (método (c)).

Staging ~/workspace/_staging_corpus_ciclo_alma/ con anexo-vi/ (3 archivos)
+ academico/incertidumbre_mediciones.md, copias byte-idénticas verificadas
por blob antes de lanzar. Un push-files, un commit, una tarjeta.
Verifica cada archivo por blob contra el remoto y el HEAD final con
list_commits PARSEADO COMO JSON (nunca regex — lección r23).
Si la tarjeta caduca o el servicio se reinicia: NO reintentar a ciegas —
verificar HEAD remoto y el log; reanudar solo lo que no aterrizó.
"""
import hashlib, json, re, subprocess, sys, time
from pathlib import Path

OWNER, REPO, BRANCH = "Jaime393", "FranBot", "main"
ABS = Path("/home/hatch/workspace/alma/ciclo/absorcion")
STAGING = Path("/home/hatch/workspace/_staging_corpus_ciclo_alma")
LOG = ABS / "_upload_corpus_ciclo_alma.jsonl"
PATHS_FILE = ABS / "_push_corpus_paths_ciclo_alma.txt"

FILES = [
    ("/home/hatch/workspace/memoria/anexo-vi/claims.jsonl", "anexo-vi/claims.jsonl"),
    ("/home/hatch/workspace/memoria/anexo-vi/provenance.sha256", "anexo-vi/provenance.sha256"),
    ("/home/hatch/workspace/memoria/anexo-vi/claims_resumen.json", "anexo-vi/claims_resumen.json"),
    ("/home/hatch/workspace/academico/incertidumbre_mediciones.md", "academico/incertidumbre_mediciones.md"),
]

def blob_sha(path):
    d = Path(path).read_bytes()
    return hashlib.sha1(b'blob ' + str(len(d)).encode() + b'\x00' + d).hexdigest()

def log(rec):
    with open(LOG, 'a', encoding='utf-8') as f:
        f.write(json.dumps(rec, ensure_ascii=False) + "\n")

def gh_read(tool, args, timeout=600):
    r = subprocess.run(["/opt/hatch/bin/github", "call-read-tool", "--name", tool,
                        "--arguments-json", json.dumps(args)],
                       capture_output=True, text=True, timeout=timeout)
    return r.stdout + r.stderr

def remote_blob(path):
    out = gh_read("get_file_contents", {"owner": OWNER, "repo": REPO, "path": path, "branch": BRANCH})
    m = re.findall(r"SHA: ([a-f0-9]{40})", out)
    return m[0] if m else None

def parse_connector_json(out):
    """El conector devuelve JSON con content[0].text = JSON interno (string)."""
    try:
        outer = json.loads(out)
    except Exception:
        return None
    content = None
    if isinstance(outer, dict):
        res = outer.get("result") or outer
        content = res.get("content") if isinstance(res, dict) else None
    if not content:
        return None
    text = content[0].get("text", "")
    try:
        return json.loads(text)
    except Exception:
        return None

def head_commit():
    out = gh_read("list_commits", {"owner": OWNER, "repo": REPO, "per_page": 1})
    data = parse_connector_json(out)
    if isinstance(data, list) and data:
        c = data[0]
        return (c.get("sha"),
                (c.get("commit") or {}).get("message"),
                ((c.get("commit") or {}).get("author") or {}).get("date"))
    return (None, None, None)

def main():
    head0, msg0, date0 = head_commit()
    print("HEAD antes:", head0, "|", msg0, "|", date0, flush=True)
    log({"fase": "head_antes", "sha": head0, "message": msg0, "date": date0})
    assert head0, "no se pudo leer el HEAD remoto; no se lanza nada"
    for src, repo_path in FILES:
        dst = STAGING / repo_path
        dst.parent.mkdir(parents=True, exist_ok=True)
        dst.write_bytes(Path(src).read_bytes())
        assert blob_sha(dst) == blob_sha(src), f"staging difiere: {repo_path}"
        print(f"staging OK: {repo_path} blob {blob_sha(src)[:8]}…", flush=True)
    PATHS_FILE.write_bytes(b"".join((rp + "\0").encode() for _, rp in FILES))
    print("paths-file:", PATHS_FILE, "bytes:", PATHS_FILE.stat().st_size, flush=True)
    r = subprocess.run(["/opt/hatch/bin/github", "push-files",
                        "--owner", OWNER, "--repo", REPO, "--branch", BRANCH,
                        "--message", "ciclo ALMA: absorcion C-1217..C-1227 + N-39 (claims 1211->1222, anexo 28->31)",
                        "--source-dir", str(STAGING),
                        "--paths-file", str(PATHS_FILE)],
                       capture_output=True, text=True, timeout=1800)
    print("push-files stdout:", r.stdout[:800], flush=True)
    print("push-files stderr:", r.stderr[:800], flush=True)
    print("push-files returncode:", r.returncode, flush=True)
    log({"fase": "push-files", "returncode": r.returncode,
         "stdout": r.stdout[:500], "stderr": r.stderr[:500]})
    time.sleep(3)
    ok_all = True
    for src, repo_path in FILES:
        rb = remote_blob(repo_path)
        lb = blob_sha(src)
        ok = (rb == lb)
        ok_all = ok_all and ok
        log({"path": repo_path, "estado": "VERIFICADO" if ok else "FALLO",
             "blob_local": lb, "blob_remoto": rb})
        print(repo_path, "->", "VERIFICADO" if ok else f"FALLO local={lb[:8]} remoto={rb}", flush=True)
    head1, msg1, date1 = head_commit()
    print("HEAD después:", head1, "|", msg1, "|", date1, flush=True)
    log({"fase": "head_despues", "sha": head1, "message": msg1, "date": date1})
    if ok_all and head1 != head0:
        print("FIN: 4/4 subidos y verificados por blob, HEAD nuevo", head1[:8], flush=True)
        return 0
    print("PARO: verificación incompleta (ok_all=%s, head cambió=%s). Verificar remoto antes de reintentar." % (ok_all, head1 != head0), flush=True)
    return 1

if __name__ == "__main__":
    sys.exit(main())
