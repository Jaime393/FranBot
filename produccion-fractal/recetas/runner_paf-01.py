#!/usr/bin/env python3
"""Runner mínimo de PAF-01 — Protocolo de Aprendizaje Federado V153.2.
Fuente: memoria/anexo-vi/protocols/paf_01.py (clase FederatedLearningNode).
Solo stdlib. FedAvg sobre un fixture sintético + tests. Imprime PASS/FAIL.
"""
import hashlib
import json
import sys


class Node:
    def __init__(self, node_id="trama_termux"):
        self.node_id = node_id
        self.local_params = {}
        self.global_params = {}
        self.round = 0
        self.reputation = 1.0

    def train_local(self, metric_name, value):
        self.local_params[metric_name] = {"value": value, "node": self.node_id}
        return self.local_params[metric_name]

    def aggregate(self, other_nodes_params):
        if not other_nodes_params:
            return self.local_params
        all_params = [self.local_params] + other_nodes_params
        aggregated = {}
        for key in self.local_params:
            values = [p.get(key, {}).get("value", 0) for p in all_params if key in p]
            if values:
                aggregated[key] = sum(values) / len(values)
        self.global_params = aggregated
        self.round += 1
        return aggregated

    def export_gradient(self):
        return {"node_id": self.node_id, "round": self.round,
                "params": self.local_params, "reputation": self.reputation,
                "hash": hashlib.sha256(json.dumps(self.local_params, sort_keys=True).encode()).hexdigest()[:16]}

    def import_gradient(self, gradient):
        return gradient.get("reputation", 0) >= 0.5


def main():
    results = []

    def check(name, ok, detail=""):
        results.append(bool(ok))
        print(f"[runner_paf-01] test {name}: {'PASS' if ok else 'FAIL'} {detail}")

    n = Node("trama_termux")
    n.train_local("phi_coherence", 0.77)
    agg = n.aggregate([{"phi_coherence": {"value": 0.82}}])
    check("fedavg_media", abs(agg["phi_coherence"] - 0.795) < 1e-9, f"(agg={agg['phi_coherence']})")
    h1 = n.export_gradient()["hash"]
    h2 = n.export_gradient()["hash"]
    check("hash_estable", len(h1) == 16 and h1 == h2, f"(hash={h1})")
    check("rechaza_baja_reputacion", n.import_gradient({"reputation": 0.4}) is False)
    n2 = Node("otro")
    n2.train_local("k_tau", 34.0)
    n2.aggregate([{"k_tau": {"value": 34.1}}])
    check("round_avanza", n2.round == 1, f"(round={n2.round})")
    ok = sum(results)
    print(f"[runner_paf-01] RESULT: {'PASS' if ok == len(results) else 'FAIL'} ({ok}/{len(results)})")
    return 0 if ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
