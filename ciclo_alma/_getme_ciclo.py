#!/usr/bin/env python3
"""RONDA 23 F2 — getMe/getWebhookInfo read-only. Escrito nuevo r21.
Lee los tokens del pool local EN PROCESO, nunca los imprime ni los guarda.
Solo veredictos: id, username, HTTP, webhook, pending."""
import json, re, urllib.request, urllib.error

POOL = "/home/hatch/workspace/user/files/MIU_CLAVES_FULL_20261106_0047_3_nujn.txt"
OUT = "/home/hatch/workspace/alma/ciclo/getme_verdicts_ciclo.json"
PAT = re.compile(r"^\d{9,10}:[\w-]{35}$")

def call(token, method):
    url = f"https://api.telegram.org/bot{token}/{method}"
    req = urllib.request.Request(url, headers={"User-Agent": "alma-sondeo-getme-readonly"})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            return r.status, json.loads(r.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        return e.code, None
    except Exception as e:
        return f"ERR:{type(e).__name__}", None

def main():
    lines = open(POOL, encoding="utf-8", errors="ignore").read().splitlines()
    pool = {}
    for ln in lines:
        ln = ln.strip()
        if PAT.match(ln):
            bid = ln.split(":")[0]
            pool.setdefault(bid, [])
            if ln not in pool[bid]:
                pool[bid].append(ln)
    out = []
    for bid in sorted(pool):
        toks = pool[bid]
        vivo = None
        last_http = None
        for i, tok in enumerate(toks, 1):
            st, me = call(tok, "getMe")
            last_http = st
            if st == 200 and me and me.get("ok"):
                res = me["result"]
                st2, wh = call(tok, "getWebhookInfo")
                pend = wh["result"].get("pending_update_count") if st2 == 200 and wh else None
                has_wh = bool(wh["result"].get("url")) if st2 == 200 and wh else None
                vivo = {"id": int(bid), "token_n": i, "http": 200, "estado": "VIVO",
                        "username": res.get("username"), "first_name": res.get("first_name"),
                        "webhook": has_wh, "pending": pend}
                print(f"{bid} token#{i}: HTTP 200 VIVO username=@{res.get('username')} webhook={has_wh} pending={pend}")
                break
        if vivo:
            out.append(vivo)
        else:
            print(f"{bid}: HTTP {last_http} MUERTO ({len(toks)} tokens probados)")
            out.append({"id": int(bid), "http": last_http, "estado": "MUERTO", "tokens_probados": len(toks)})
    json.dump(out, open(OUT, "w"), indent=2)
    print("OK getme ->", OUT)

if __name__ == "__main__":
    main()
