#!/usr/bin/env python3
"""Runner mínimo de PCP-01 — Protocolo de Consenso Planetario V153.2.
Fuente: memoria/anexo-vi/protocols/pcp_01.py (clase PlanetaryConsensus).
Solo stdlib. Corrección documentada: los IDs de propuesta usan
sha256(título + proponente) mod 10000, no hash() de Python (no estable).
"""
import hashlib
import json
import sys


def stable_id(title, proposer):
    return int(hashlib.sha256(f"{title}::{proposer}".encode()).hexdigest(), 16) % 10000


class Consensus:
    def __init__(self, umbral_aprobacion=0.66, umbral_rechazo=0.33):
        self.proposals = []
        self.umbral_aprobacion = umbral_aprobacion
        self.umbral_rechazo = umbral_rechazo

    def propose(self, title, description, proposer="trama_termux"):
        p = {"id": stable_id(title, proposer), "title": title, "description": description,
             "proposer": proposer, "status": "open",
             "votes": {"yes": 0, "no": 0, "abstain": 0}, "voters": []}
        self.proposals.append(p)
        return p

    def vote(self, proposal_id, voter, choice, weight=1.0):
        if choice not in ("yes", "no", "abstain"):
            return False
        for p in self.proposals:
            if p["id"] == proposal_id:
                if voter in p["voters"]:
                    return False
                p["votes"][choice] += weight
                p["voters"].append(voter)
                return True
        return False

    def tally(self, proposal_id):
        for p in self.proposals:
            if p["id"] == proposal_id:
                total = sum(p["votes"].values())
                if total == 0:
                    return {"status": "undecided"}
                ratio = p["votes"]["yes"] / total
                if ratio > self.umbral_aprobacion:
                    p["status"] = "approved"
                elif ratio < self.umbral_rechazo:
                    p["status"] = "rejected"
                else:
                    p["status"] = "pending"
                return {"proposal": p["title"], "status": p["status"],
                        "total_votes": total, "breakdown": p["votes"], "ratio": ratio}
        return None


def main():
    results = []

    def check(name, ok, detail=""):
        results.append(bool(ok))
        print(f"[runner_pcp-01] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    a = Consensus().propose("Implementar PAF-01 en todos los nodos", "d", "trama_termux")
    b = Consensus().propose("Implementar PAF-01 en todos los nodos", "d", "trama_termux")
    check("id_determinista", a["id"] == b["id"], f"(id={a['id']})")
    c = Consensus()
    prop = c.propose("X", "d")
    c.vote(prop["id"], "nodo_claude", "yes", weight=0.95)
    check("doble_voto_rechazado", c.vote(prop["id"], "nodo_claude", "yes", weight=0.95) is False)
    c.vote(prop["id"], "nodo_groq", "yes", weight=0.88)
    c.vote(prop["id"], "nodo_meta", "abstain", weight=0.77)
    r = c.tally(prop["id"])
    check("tally_aprueba", r["status"] == "approved" and abs(r["ratio"] - 0.7038) < 0.001,
          f"(ratio={r['ratio']:.4f})")
    c2 = Consensus()
    p2 = c2.propose("Y", "d")
    check("tally_indeciso", c2.tally(p2["id"])["status"] == "undecided")
    ok = sum(results)
    print(f"[runner_pcp-01] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
