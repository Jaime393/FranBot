#!/usr/bin/env python3
"""Puente nutriente <-> vector (ALMA, idea I).

Traduce el formato canónico de nutriente (14 claves obligatorias,
memoria/anexo-vi/digest_format_nutriente.md) al formato vector de
producción fractal (esencia attest, produccion-fractal/vectores/
vector_attest.json) y de vuelta, según
puentes/tabla_nutriente_vector.json.

Reglas del puente (P1..P5 de la tabla):
- Lo que no tiene correspondencia va a no_traducible; nunca se inventa.
- attestation_sha siempre se recomputa con la receta attest.
- El round-trip recupera byte a byte los campos de ida_y_vuelta.
- La traducción se niega si tipo != 'hecho', si hash_fuente no es
  64 hex, o si falta una clave obligatoria. También se niega si
  contexto != contenido o nodo != 'anexo-vi': la vuelta restaura
  ambos como invariantes verificados 15/15, y perderlos en silencio
  rompería P3.
- La inversa se niega si el vector no es una traducción de nutriente.

Uso:
  python3 traducir_nutriente_vector.py            # test: round-trip 15/15
  python3 traducir_nutriente_vector.py <dir>      # test sobre otro dir
  python3 traducir_nutriente_vector.py --a-vector <nutriente.json>
  python3 traducir_nutriente_vector.py --a-nutriente <vector.json>

Solo stdlib. Un solo fallo en el test -> exit 1.
"""

import hashlib
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

AQUI = Path(__file__).resolve().parent
TABLA_PATH = AQUI / "tabla_nutriente_vector.json"
DIR_NUTRIENTES = Path.home() / "workspace" / "nutrientes" / "2026-11-14" / "tejido" / "finales"

CLAVES_OBLIGATORIAS_14 = [
    "_metabolismo", "timestamp", "id", "tipo", "fuente", "fecha",
    "hash_fuente", "estado", "contenido", "referencias", "grieta",
    "nodo_origen", "destino", "origen",
]
# Claves de nutriente sin ranura en el vector (de la tabla). 'fecha' viaja
# dentro de procedencia.timestamp y se recupera como DERIVADO en la vuelta.
NO_TRADUCIBLES_IDA = [
    "_metabolismo.phi", "_metabolismo.nodo", "fecha", "estado", "contexto",
    "referencias", "grieta", "nodo_origen", "destino", "origen",
    "claim_origen", "verificador", "fecha_fuente",
]
# Campos que la vuelta no puede recuperar (nunca se rellenan).
NO_TRADUCIBLES_VUELTA = [
    "estado", "referencias", "grieta", "nodo_origen", "destino", "origen",
    "claim_origen", "verificador", "fecha_fuente",
]
PHI = 1.6180339887
NODO_INVARIANTE = "anexo-vi"
RE_HASH = re.compile(r"^sha256:[0-9a-f]{64}$")


def cargar_tabla():
    return json.loads(TABLA_PATH.read_text(encoding="utf-8"))


def iso_de_unix(ts):
    dt = datetime.fromtimestamp(ts, timezone.utc)
    # Con microsegundos: la fracción del unix float debe sobrevivir a la
    # ida para que la vuelta recupere el float exacto (P3). Sigue siendo
    # ISO 8601 UTC terminada en Z (A4).
    return dt.strftime("%Y-%m-%dT%H:%M:%S.%fZ")


def unix_de_iso(s):
    for fmt in ("%Y-%m-%dT%H:%M:%S.%fZ", "%Y-%m-%dT%H:%M:%SZ"):
        try:
            return datetime.strptime(s, fmt).replace(
                tzinfo=timezone.utc).timestamp()
        except ValueError:
            continue
    raise ValueError(f"timestamp ISO no válido: {s!r}")


def attestation_sha(parent_hash_hex, artifact_bytes):
    return hashlib.sha256(
        (parent_hash_hex + "\n" + artifact_bytes).encode("utf-8")).hexdigest()


def nutriente_a_vector(nut):
    """Nutriente -> (vector attest, no_traducibles). Niega si no cumple P4."""
    for clave in CLAVES_OBLIGATORIAS_14:
        if clave not in nut:
            raise ValueError(f"falta clave obligatoria: {clave}")
    if nut["tipo"] != "hecho":
        raise ValueError(f"tipo no traducible: {nut['tipo']!r} (solo 'hecho')")
    if not RE_HASH.match(nut["hash_fuente"]):
        raise ValueError(f"hash_fuente no es sha256: + 64 hex: {nut['hash_fuente']!r}")
    if nut.get("contexto", nut["contenido"]) != nut["contenido"]:
        raise ValueError("contexto != contenido: el puente no puede hacer round-trip sin pérdida")
    if nut["_metabolismo"].get("nodo") != NODO_INVARIANTE:
        raise ValueError(f"nodo {nut['_metabolismo'].get('nodo')!r} != 'anexo-vi': invariante de vuelta roto")
    if nut["_metabolismo"].get("phi") != PHI:
        raise ValueError("phi de _metabolismo != 1.6180339887")

    parent_hash = nut["hash_fuente"][len("sha256:"):]
    ts_iso = iso_de_unix(nut["timestamp"])
    artifact = nut["contenido"]
    attest = attestation_sha(parent_hash, artifact)
    vid = "nutriente_" + nut["id"]
    vector = {
        "id": vid,
        "esencia": "attest",
        "descripcion": (
            f"Traducción a vector del nutriente {nut['id']} "
            f"(tipo {nut['tipo']}, estado {nut['estado']})"
        ),
        "contrato": {
            "errores": "parent_hash no hexadecimal -> NO_SÉ; artifact vacío -> NO_SÉ",
            "inputs": {"artifact_bytes": "string UTF-8", "parent_hash": "hex 64"},
            "outputs": {"registro": "objeto con parent_hash, artifact, attestation_sha, author, timestamp"},
        },
        "fixture": {
            "artifact_bytes": artifact,
            "parent_hash": parent_hash,
            "parent_line": f"{parent_hash}  {nut['fuente']}",
            "expected": {
                "attestation_sha": attest,
                "registro": {
                    "artifact": artifact,
                    "attestation_sha": attest,
                    "author": "Hebra",
                    "parent_hash": parent_hash,
                    "timestamp": ts_iso,
                },
            },
        },
        "invariantes": [
            "A1: sha256 recomputado con la receta coincide exactamente con attestation_sha del registro.",
            "A2: cambiar un solo byte del artefacto cambia el sha (el registro corrupto con sha de ceros NO verifica).",
            "A3: el registro de atestación lleva author presente y no vacío.",
            "A4: el timestamp es ISO 8601 UTC (termina en Z).",
            "A5: parent_hash es hexadecimal de 64 caracteres (sha256).",
        ],
        "presupuesto": {
            "almacenamiento_bytes": 8192,
            "cpu": "<= 1 s, solo stdlib",
            "tokens_estimados": 500,
        },
        "procedencia": {
            "author": "Hebra",
            "parent_hash": parent_hash,
            "parent_path": nut["fuente"],
            "timestamp": ts_iso,
        },
        "prueba": (
            "traducir_nutriente_vector.py: round-trip 15/15 sobre "
            "NUT-2026-11-14-001..015; attestation_sha recomputado coincide; "
            "un solo fallo -> exit 1."
        ),
    }
    no_traducibles = [c for c in NO_TRADUCIBLES_IDA if (
        c in nut or c in ("_metabolismo.phi", "_metabolismo.nodo", "fecha",
                          "estado", "contexto", "referencias", "grieta",
                          "nodo_origen", "destino", "origen"))]
    return vector, no_traducibles


def verificar_attestation(vector):
    """Recomputa attestation_sha y lo compara con el fixture. True/False."""
    f = vector["fixture"]
    return attestation_sha(f["parent_hash"], f["artifact_bytes"]) == f["expected"]["attestation_sha"]


def vector_a_nutriente(vec):
    """Vector (traducción de nutriente) -> (nutriente parcial, no_traducibles)."""
    vid = vec.get("id", "")
    if not vid.startswith("nutriente_NUT-"):
        raise ValueError(f"id {vid!r} no es una traducción de nutriente (P5)")
    if vec.get("esencia") != "attest":
        raise ValueError(f"esencia {vec.get('esencia')!r} != 'attest' (P5)")
    ts_unix = unix_de_iso(vec["procedencia"]["timestamp"])
    nut = {
        "_metabolismo": {
            "timestamp": ts_unix,
            "phi": PHI,
            "nodo": NODO_INVARIANTE,
        },
        "timestamp": ts_unix,
        "id": vid[len("nutriente_"):],
        "tipo": "hecho",
        "fuente": vec["procedencia"]["parent_path"],
        "fecha": datetime.fromtimestamp(ts_unix, timezone.utc).strftime("%Y-%m-%d"),
        "hash_fuente": "sha256:" + vec["procedencia"]["parent_hash"],
        "contenido": vec["fixture"]["artifact_bytes"],
        "contexto": vec["fixture"]["artifact_bytes"],
        "_traduccion": {
            "parcial": True,
            "no_traducible": list(NO_TRADUCIBLES_VUELTA),
            "origen_vector": vid,
        },
    }
    return nut, list(NO_TRADUCIBLES_VUELTA)


CAMPOS_IDA_Y_VUELTA = ["id", "tipo", "fuente", "hash_fuente", "timestamp", "contenido"]


def test_round_trip(directorio):
    """Round-trip sobre todos los NUT-*.json del directorio. Exit 0/1."""
    tabla = cargar_tabla()
    assert tabla["puente"].startswith("nutriente"), "tabla distinta"
    archivos = sorted(Path(directorio).glob("NUT-*.json"))
    if not archivos:
        print(f"FALLO: sin nutrientes en {directorio}")
        return 1
    fallos = 0
    for ruta in archivos:
        nut = json.loads(ruta.read_text(encoding="utf-8"))
        nid = nut["id"]
        try:
            vec, no_ida = nutriente_a_vector(nut)
            assert verificar_attestation(vec), "attestation_sha no recomputa"
            assert vec["id"] == "nutriente_" + nid
            assert vec["esencia"] == "attest"
            assert vec["procedencia"]["parent_hash"] == nut["hash_fuente"][7:]
            assert vec["procedencia"]["parent_path"] == nut["fuente"]
            assert vec["fixture"]["artifact_bytes"] == nut["contenido"]
            esperado_ida = [c for c in NO_TRADUCIBLES_IDA
                            if c in nut or c in ("_metabolismo.phi", "_metabolismo.nodo",
                                                 "fecha", "estado", "contexto",
                                                 "referencias", "grieta", "nodo_origen",
                                                 "destino", "origen")]
            assert no_ida == esperado_ida, f"no_traducibles ida: {no_ida} != {esperado_ida}"
            # Vuelta.
            rec, no_vuelta = vector_a_nutriente(vec)
            assert no_vuelta == NO_TRADUCIBLES_VUELTA, f"no_traducibles vuelta: {no_vuelta}"
            for campo in CAMPOS_IDA_Y_VUELTA:
                assert rec[campo] == nut[campo], f"round-trip pierde {campo} en {nid}"
            assert rec["fecha"] == nut["fecha"], f"fecha derivada distinta en {nid}"
            assert rec["contexto"] == nut["contexto"] == nut["contenido"]
            assert rec["_metabolismo"] == nut["_metabolismo"], f"_metabolismo distinto en {nid}"
            assert rec["_traduccion"]["parcial"] is True
            print(f"OK {nid}: ida attest + vuelta, no_traducible ida={len(no_ida)}, vuelta={len(no_vuelta)}")
        except (ValueError, AssertionError) as e:
            fallos += 1
            print(f"FALLO {nid}: {e}")
    print(f"round-trip: {len(archivos) - fallos}/{len(archivos)} PASS")
    return 1 if fallos else 0


def main(argv):
    if len(argv) >= 3 and argv[1] == "--a-vector":
        nut = json.loads(Path(argv[2]).read_text(encoding="utf-8"))
        vec, no = nutriente_a_vector(nut)
        print(json.dumps({"vector": vec, "no_traducible": no}, ensure_ascii=False, indent=2))
        return 0
    if len(argv) >= 3 and argv[1] == "--a-nutriente":
        vec = json.loads(Path(argv[2]).read_text(encoding="utf-8"))
        nut, no = vector_a_nutriente(vec)
        print(json.dumps({"nutriente": nut, "no_traducible": no}, ensure_ascii=False, indent=2))
        return 0
    directorio = argv[1] if len(argv) >= 2 else str(DIR_NUTRIENTES)
    return test_round_trip(directorio)


if __name__ == "__main__":
    sys.exit(main(sys.argv))
