#!/usr/bin/env python3
"""Aplicar la absorción CICLO ALMA (11 claims: C-1217..C-1227 + N-39).

Orden del Jardinero 2026-11-16 ~19:23 -05 ("absorbe") + régimen 2026-11-14
01:43 -05 (las decisiones pendientes se aplican automáticamente).
Propuestas: ~/workspace/alma/ciclo/propuestas_absorcion.json (sha 58e51263...,
11 claims SÉ, dedup máx 0,2822, 0 pares >= 0,5; 3 ítems M-93/M-94/M-95).
CORR-PROP-KIT-SHA (adjudicada por el principal 2026-11-17): fuente_sha256 del kit
actualizado fbf6c388... -> 2ce3426c... en C-1219/C-1220/C-1221 y en el ítem M-93
(mismo archivo, mismo hash obsoleto; textos literales intactos). Propuestas
740b27eb... -> 58e51263... .

Patrón absorción r23 (absorb_r23.py): respaldo P-77 PRIMERO, validación
estructural con restauración ante fallo, diff exacto, puertas sin pipes.
Corrección frente al encargo: el encargo dice "audit ok debe ser 370+11=381",
pero la regla que el propio encargo fija (paso 2) es UNA ENTRADA POR FUENTE
DISTINTA (precedente r22 adjudicado: provenance 378 no 379; FASE 2 r23 lo
confirmó con 4 entradas para 4 claims/4 fuentes). Las 11 propuestas usan
9 fuentes distintas -> provenance 382 -> 391 y audit ok 370 -> 379
(370 OK + 1 omitido + 11 comentarios = 382 líneas no vacías pre; post:
379 OK + 1 omitido + 11 comentarios = 391). El script exige ok=379 y
documenta la discrepancia en el informe; NO se inventan entradas
duplicadas para llegar a 381. CORR-CAT-V1-CONGELO (adjudicada por el
principal 2026-11-17): C-1217 cita la instantánea v1 congelada
alma/ciclo/catalogo_vivo_v1.json (sha d5d5ce7c…, 100 entradas, recuperada
de GitHub ref=85351ce4 y verificada byte a byte) y C-1226 cita el
catálogo v2 actual (sha 6a6ae82b…, 138 entradas); la partición añade una
fuente distinta (8 -> 9). CORR-KIT-42-43 (adjudicada por el principal
2026-11-17): el test del kit ejecuta 43 comprobaciones, no 42
(43 líneas `[OK`, 0 `[FAIL`, exit 0; "42/42" era un error de conteo de
la producción ALMA). Corregido a "43/43" en C-1219, C-1220, M-93 y el
criterio N-39; dedup re-corrido con el mismo método (máx 0,2822,
sin cambio). Propuestas 2be9d94b... -> c92719cb... . CORR-ESTADO-SE
(incidente 2026-11-17, reparado en _corr_estado_se.py): el script
copiaba `estado` literal de las propuestas ("SÉ"); la convención del
corpus es "SE" sin acento. El resumen partió SE 1077 + SÉ 11 y el
assert falló DESPUÉS de escribir (sin restauración); reparado a "SE"
en las 11 líneas nuevas, primeras 1.211 byte-idénticas, resumen
re-corrido (SE 1088), puertas re-corridas: audit ok=379, verify_all
exactamente C-001..C-008. El campo inscrito es ahora "SE" (ver arriba).

Grietas: 10 claims de artefactos ALMA -> "G-NUEVA: producción ALMA
(FranBot v8.1)"; C-1225 (autocura run 17, vivo) -> "G-NUEVA: estado vivo
del ecosistema (observabilidad)" (misma grieta que C-1213, su predecesor
directo). Motivos compuestos solo con campos de las propuestas (origen,
dedup, N-39); ningún dato inventado.

GUARDA DE ORDEN: se niega a correr sin ORDEN_CICLO_ALMA.md en este
directorio. Uso: python3 absorb_ciclo_alma.py [--check-only]
"""
import hashlib
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

BASE = Path.home() / "workspace"
ANEXO = BASE / "memoria" / "anexo-vi"
ACAD = BASE / "academico"
ALMA = BASE / "alma"
CICLO = ALMA / "ciclo"
ABS = CICLO / "absorcion"
RESP = BASE / "academico" / "tejido_2026-11-12" / "ronda_23" / "respaldo_pre_absorcion_ciclo_alma"

PROP_SHA = "c92719cbca1558ba2103a89f15d78c79aaadacf6b95f29dd8db81ad77aa90d18"
GRIETA_ALMA = "G-NUEVA: producción ALMA (FranBot v8.1)"
GRIETA_VIVO = "G-NUEVA: estado vivo del ecosistema (observabilidad)"

FILES_BACKUP = ["claims.jsonl", "provenance.sha256", "claims_resumen.json",
                "confirmaciones.jsonl", "huecos.jsonl"]


def sha(p):
    return hashlib.sha256(Path(p).read_bytes()).hexdigest()


def restaurar():
    for f in FILES_BACKUP:
        shutil.copy2(RESP / f, ANEXO / f)
    shutil.copy2(RESP / "incertidumbre_mediciones.md", ACAD / "incertidumbre_mediciones.md")
    shutil.copy2(RESP / "dataset_nodos_Df.csv", ACAD / "dataset_nodos_Df.csv")
    print("RESTAURADO desde respaldo_pre_absorcion_ciclo_alma/")


def fail(msg):
    print(f"FALLO: {msg}")
    restaurar()
    sys.exit(1)


def check_only():
    return "--check-only" in sys.argv


def main():
    orden = ABS / "ORDEN_CICLO_ALMA.md"
    if not orden.exists():
        print("SIN ORDEN: no existe ORDEN_CICLO_ALMA.md en absorcion/. No se aplica nada.")
        sys.exit(2)
    print("Orden presente:", orden.read_text(encoding="utf-8").splitlines()[0][:120])

    # --- 0. Pre-estado (post-r23; corpus 1.211) ---
    claims_path = ANEXO / "claims.jsonl"
    anexo_path = ACAD / "incertidumbre_mediciones.md"
    dataset_path = ACAD / "dataset_nodos_Df.csv"
    raw = open(claims_path, encoding="utf-8", newline="").read()
    lines = raw.split("\n")
    assert lines[-1] == "", "claims.jsonl debe terminar en nueva línea"
    body = lines[:-1]
    assert len(body) == 1211, f"claims pre: {len(body)} != 1211"
    assert sha(claims_path) == "532ff6f3732b786bb1867491b354b69269bcfe1287c10e7115ea7872f9a4add5"
    assert sha(ANEXO / "provenance.sha256") == "3382166be2189c8f8d4083c384927b6cdcdbae4c93eca55ef796ea324d24e079"
    assert sha(ANEXO / "claims_resumen.json") == "8b7fedf1e8b94146612d1f7f32df217ea1fa978fe2ec14fed2fe4e52b956c215"
    assert sha(ANEXO / "confirmaciones.jsonl") == "dc94458bc42a9854d16a8f74da20ac6481f6fe241fe2cfae11a6f44633dc7cc5"
    assert sha(ANEXO / "huecos.jsonl") == "3713376a243b05756fbfce434ccdb63e118562ac0ec4e351243086dcb1ce52fb"
    assert sha(anexo_path) == "77d05a53ba07f7512aa7d350dc52591b7f3eb0cda9e3f18fc8724a203d0741ae"
    assert sha(dataset_path) == "0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af"
    if not check_only():
        for f in FILES_BACKUP:
            assert sha(RESP / f) == sha(ANEXO / f), f"respaldo {f} no coincide con vivo"
        assert sha(RESP / "incertidumbre_mediciones.md") == sha(anexo_path), "respaldo anexo no coincide"
        assert sha(RESP / "dataset_nodos_Df.csv") == sha(dataset_path), "respaldo dataset no coincide"
    prov_text = open(ANEXO / "provenance.sha256", encoding="utf-8", newline="").read()
    prov_lines = [l for l in prov_text.split("\n") if l]
    assert len(prov_lines) == 382, f"provenance pre no-vacías: {len(prov_lines)} != 382"
    assert len([l for l in prov_lines if l.startswith("#")]) == 11, "comentarios provenance != 11"
    r0 = subprocess.run([sys.executable, str(ANEXO / "audit.py")], capture_output=True, text=True)
    assert r0.returncode == 0, f"audit pre exit={r0.returncode}"
    m0 = re.search(r"ok=(\d+)", r0.stdout)
    assert m0 and int(m0.group(1)) == 370, f"audit pre ok != 370: {r0.stdout[-200:]}"
    print("Pre-estado OK: claims 1.211, provenance 382 no-vacías (370 OK + 1 omitido + 11 comentarios), audit ok=370.")

    # --- 1. Fidelidad de re-serialización ---
    objs = []
    for i, ln in enumerate(body):
        o = json.loads(ln)
        redump = json.dumps(o, ensure_ascii=False)
        if redump != ln:
            fail(f"re-serialización difiere en línea {i+1} ({o.get('id')})")
        objs.append(o)
    by_id = {o["id"]: (i, o) for i, o in enumerate(objs)}
    assert "C-416" not in by_id and "C-420" not in by_id
    for cid in [f"C-121{i}" for i in range(7, 10)] + ["C-1220", "C-1221", "C-1222",
                "C-1223", "C-1224", "C-1225", "C-1226", "C-1227"]:
        assert cid not in by_id, f"{cid} ya existe"
    assert by_id["C-112"][1]["hash"] == "sha256:5e30073cf29b", "C-112 tocado o distinto"
    for cid in [f"C-00{i}" for i in range(1, 9)]:
        assert "PENDIENTE" in by_id[cid][1]["hash"], f"{cid} sin PENDIENTE"
    for cid in ("C-538", "C-623"):
        assert by_id[cid][1]["estado"] == "REFUTADO", f"{cid} no está REFUTADO (N-11)"
    assert by_id["C-1216"][1]["estado"] == "SE", "C-1216 (r23) no está SE"

    # --- 2. Claims nuevos: leídos de las propuestas, validados ---
    prop_path = CICLO / "propuestas_absorcion.json"
    assert sha(prop_path) == PROP_SHA, f"propuestas sha distinto: {sha(prop_path)}"
    prop = json.loads(open(prop_path, encoding="utf-8").read())
    props = prop["propuestas_claims"]
    assert len(props) == 11, f"propuestas: {len(props)} != 11"
    assert [p["id_propuesto"] for p in props] == [f"C-121{i}" for i in range(7, 10)] + [
        "C-1220", "C-1221", "C-1222", "C-1223", "C-1224", "C-1225", "C-1226", "C-1227"]
    assert prop["dedup"]["global_max"] == 0.2822
    assert prop["dedup"]["pares_mayor_igual_0.5_corpus"] == []
    assert prop["dedup"]["pares_mayor_igual_0.5_entre_propuestas"] == []
    nuevos = []
    for p in props:
        assert p["tipo"] == "verificacion" and p["estado"] == "SÉ", p["id_propuesto"]
        # fuente_sha256 recomputado del disco, no transcrito
        fpath = BASE / p["fuente_archivo"]
        assert fpath.is_file(), f"fuente no existe: {p['fuente_archivo']}"
        real = sha(fpath)
        assert real == p["fuente_sha256"], f"{p['id_propuesto']} fuente sha distinto: {real} != {p['fuente_sha256']}"
        grieta = GRIETA_VIVO if p["id_propuesto"] == "C-1225" else GRIETA_ALMA
        motivo = (
            f"origen: {p['fuente_archivo']} + {p['fuente_extra']} — PREPARADA en ciclo ALMA, "
            f"NO APLICADA. Dedup ALMA: ver propuestas_absorcion.json (umbral 0,5; máx {p['dedup_max']} "
            f"vs {p['dedup_vs']}; 0 duplicados). Decisión N-39 (absorción ALMA, régimen 2026-11-14 01:43)."
        )
        nuevos.append({
            "id": p["id_propuesto"],
            "tipo": "verificacion",
            "claim": p["claim"],
            "estado": "SE",  # CORR-ESTADO-SE: convención del corpus SIN acento
            # (r23: C-1213..C-1216 usan "SE"); las propuestas dicen "SÉ" y
            # el assert de arriba lo valida, pero el campo que se inscribe
            # es "SE" — resumen_claims.py agrupa literal y con "SÉ" partía
            # SE 1077 + SÉ 11 en vez de SE 1088 (fallo 2026-11-17, reparado).
            "fuente": p["fuente_archivo"],
            "hash": f"sha256:{p['fuente_sha256']}",
            "grieta": grieta,
            "motivo": motivo,
        })
    # Verificación puntual del texto literal (primeras palabras de cada claim)
    inicios = {
        "C-1217": "CATÁLOGO VIVO — 100 ENTRADAS, 100 VERIFICADAS",
        "C-1218": "PROTOCOLO PREGUNTA↔RESPUESTA ENTRE NODOS",
        "C-1219": "KIT DE EXPANSIÓN SAVIA V152 — EL CENSO M-91 SE REPRODUCE CIFRA POR CIFRA",
        "C-1220": "SAVIA V152 = MESH.TOTALSIZE",
        "C-1221": "EL TERCER VALOR DE SAVIA ES EL DOCUMENTO CANÓNICO A 301 B",
        "C-1222": "PUENTE NUTRIENTE↔VECTOR — ROUND-TRIP 15/15",
        "C-1223": "TUTORIAL-SEMILLA DUAL VERIFICAR-BLOB",
        "C-1224": "RELEVO DEL SUBIDOR FASE 4 — EL KIT ES FIEL A R23",
        "C-1225": "AUTOCURA RUN 17 EXISTE — LA CADENCIA SE ALARGA DE NUEVO",
        "C-1226": "CAT-0094 — EL 'SHA256' DEL CURADO ES SOLO UN PREFIJO DE 8 HEX",
        "C-1227": "CUARTO VALOR DE SAVIA V152 — 248.372 APARECE UNA VEZ",
    }
    for n in nuevos:
        assert n["claim"].startswith(inicios[n["id"]]), f"{n['id']} texto distinto"
        assert list(n.keys()) == ["id", "tipo", "claim", "estado", "fuente",
                                  "hash", "grieta", "motivo"], (n["id"], list(n.keys()))
    # CORR-CAT-0094: el claim usa la versión corregida (prefijo del sha256 del plan, no del blob)
    assert "prefijo del sha256 del plan, no del blob" in nuevos[9]["claim"]
    # CORR-SCRIPT-C1226-ASSERT (2026-11-17, esta continuación): la aserción
    # anterior ("prefijo del blob" not in claim) era falsa — el texto literal
    # CITA la formulación vieja entre comillas para corregirla ("decía
    # 'prefijo del blob'"). Lo que debe excluirse es AFIRMAR la versión del
    # blob como hecho, no citarla. La aserción nunca se había alcanzado
    # (las dos paradas anteriores fallaron antes, en la fuente de C-1217).
    assert "es prefijo del blob" not in nuevos[9]["claim"]
    # CORR-KIT-FILES0: C-1227/M-94 usan la versión corregida (files[0] snapshot V151)
    assert "snapshot V151" in nuevos[10]["claim"]
    print("Paquete validado: 11 claims SE, fuentes re-verificadas contra disco, dedup máx 0,2822.")

    # --- 2b. Ítems M-93 (N-39), M-94, M-95: compuestos con campos de las propuestas ---
    items = prop["propuestas_anexo"]
    assert [it["id_propuesto"] for it in items] == ["M-93", "M-94", "M-95"]
    assert [it["veredicto"] for it in items] == ["CONFIRMA", "DIFERENCIA", "NO_CONFIRMA"]
    for it in items:
        fpath = BASE / it["fuente_archivo"]
        assert fpath.is_file(), f"fuente ítem no existe: {it['fuente_archivo']}"
        assert sha(fpath) == it["fuente_sha256"], f"{it['id_propuesto']} fuente sha distinto"

    def seccion(it):
        mid, ver = it["id_propuesto"], it["veredicto"]
        cara = "observabilidad"
        extra = ""
        if mid == "M-94":
            extra = ("\n- **Corrección CORR-KIT-FILES0:** el mapa del kit (§II) decía que `mesh.files[0]` es "
                     "siempre el documento canónico de heartbeat; en el payload fresco 248.372 `files[0]` es "
                     "un snapshot V151 (263 B) y el canónico está en índice 1 (796 B, normal). La identidad "
                     "savia = `mesh.totalSize` sigue cumpliéndose; la divergencia de 248.372 es la sustitución "
                     "de un solo archivo V151 (−4 B).")
        if mid == "M-93":
            extra = ("\n- **Hallazgo del mapa (medido por el kit, no en M-91):** savia V152 = `mesh.totalSize` "
                     "(18/18 r23 + 14/14 r22); el tercer valor es el documento canónico a 301 B en vez de "
                     "796 B, y `nutrientes` también covaría por valor. Lo que sigue NO_SÉ: por qué el "
                     "documento midió 301 B.")
        return (
            f"## {mid} — {ver} (ciclo ALMA, 2026-11-16) — ítem añadido por N-39\n\n"
            f"- **Valor:** {it['medicion']} {it['detalle']}\n"
            f"- **Falsador:** {it['falsador']} **Veredicto:** {ver}.\n"
            f"- **Fuente:** {it['fuente_archivo']} (+ {it['fuente_extra']}). "
            f"**sha:** `{it['fuente_sha256']}`.\n"
            f"- **¿Da fila?** NO (anotación): no entrega un D_f de nodo. No se inscribe en el CSV.{extra}\n"
            f"- **Cara:** {cara} — claim asociado {it['claim_asociado']}."
        )

    sec_m93, sec_m94, sec_m95 = (seccion(it) for it in items)
    anexo_text = open(anexo_path, encoding="utf-8", newline="").read()
    for mid in ("## M-93", "## M-94", "## M-95"):
        assert mid not in anexo_text, f"{mid} ya en el anexo"
    assert "# ANEXO DE INCERTIDUMBRE DEL DATASET — MEDICIONES M-56..M-92" in anexo_text, "título anexo distinto"
    assert "| M-92 | CONFIRMA | flow run 149, 0,0%, 0 eventos, 15.ª ronda; intervalos 145→149 [311,12, 242,35, 412,08, 613,77] min | NO (anotación) | d09 L20 |" in anexo_text, "fila M-92 distinta"
    assert "**Tally:** CONFIRMA 17 (M-59, M-60, M-62, M-63, M-66, M-72, M-75, M-78, M-79, M-80, M-82, M-83, M-85, M-86, M-90, M-91, M-92) · NO_CONFIRMA 8 (M-57, M-61, M-64, M-65, M-69, M-76, M-84, M-87) · DIFERENCIA 1 (M-56) · NO_SÉ 1 (M-58) · REGULAR 1 (M-89). Ítems: 28 (M-56..M-72, M-75, M-76, M-78, M-79, M-80, M-82, M-83, M-84, M-85, M-86, M-87, M-89, M-90, M-91, M-92)." in anexo_text, "tally anexo distinto"
    assert anexo_text.count("## M-") == 28, f"ítems anexo pre: {anexo_text.count('## M-')} != 28"
    print("Ítems M-93/M-94/M-95 validados (fuentes re-verificadas contra disco).")

    if check_only():
        print("CHECK-ONLY OK: todas las validaciones previas pasan. Nada escrito.")
        return

    objs.extend(nuevos)

    # --- 3. Escritura claims.jsonl ---
    new_text = "\n".join(json.dumps(o, ensure_ascii=False) for o in objs) + "\n"
    open(claims_path, "w", encoding="utf-8", newline="").write(new_text)
    post = open(claims_path, encoding="utf-8", newline="").read().split("\n")[:-1]
    assert len(post) == 1222, f"claims post: {len(post)} != 1222"
    post_objs = [json.loads(ln) for ln in post]
    pre_lines = open(RESP / "claims.jsonl", encoding="utf-8", newline="").read().split("\n")[:-1]
    for i, (a, b) in enumerate(zip(pre_lines, post[:1211])):
        assert a == b, f"línea {i+1} cambió sin orden"
    for k, cid in enumerate([f"C-121{i}" for i in range(7, 10)] + [
            "C-1220", "C-1221", "C-1222", "C-1223", "C-1224", "C-1225", "C-1226", "C-1227"]):
        assert post_objs[1211 + k]["id"] == cid, f"posición {1211+k} no es {cid}"
    for ln in post:
        o = json.loads(ln)
        if o["id"] == "C-112":
            assert o["hash"] == "sha256:5e30073cf29b"
        if o["id"] in [f"C-00{i}" for i in range(1, 9)]:
            assert "PENDIENTE" in o["hash"]
    print("claims.jsonl: 1.211 → 1.222 (exactamente 11 líneas nuevas).")

    # --- 4. Provenance +8 (una entrada por fuente distinta) ---
    prov_path = ANEXO / "provenance.sha256"
    assert prov_text.endswith("\n")
    fuentes_distintas = []
    vistos = set()
    for p in props:
        if p["fuente_archivo"] not in vistos:
            vistos.add(p["fuente_archivo"])
            fuentes_distintas.append((p["fuente_sha256"], p["fuente_archivo"]))
    assert len(fuentes_distintas) == 9, f"fuentes distintas: {len(fuentes_distintas)} != 9"
    for h, f in fuentes_distintas:
        assert not any(f in l for l in prov_lines), f"{f} ya en provenance"
    entries = "".join(f"{h}  {f}\n" for h, f in fuentes_distintas)
    open(prov_path, "w", encoding="utf-8", newline="").write(prov_text + entries)
    prov_post = [l for l in open(prov_path, encoding="utf-8", newline="").read().split("\n") if l]
    assert len(prov_post) == 391, f"provenance post no-vacías: {len(prov_post)} != 391"
    print("provenance.sha256: 382 → 391 no-vacías (9 fuentes distintas).")

    # --- 4b. Anexo N-39 (M-93 + M-94 + M-95) ---
    nuevo_anexo = anexo_text.replace(
        "# ANEXO DE INCERTIDUMBRE DEL DATASET — MEDICIONES M-56..M-92",
        "# ANEXO DE INCERTIDUMBRE DEL DATASET — MEDICIONES M-56..M-95", 1)
    nuevo_anexo = nuevo_anexo.replace(
        "\n## Resumen\n",
        "\n" + sec_m93 + "\n\n" + sec_m94 + "\n\n" + sec_m95 + "\n\n## Resumen\n", 1)
    nuevo_anexo = nuevo_anexo.replace(
        "| M-92 | CONFIRMA | flow run 149, 0,0%, 0 eventos, 15.ª ronda; intervalos 145→149 [311,12, 242,35, 412,08, 613,77] min | NO (anotación) | d09 L20 |\n",
        "| M-92 | CONFIRMA | flow run 149, 0,0%, 0 eventos, 15.ª ronda; intervalos 145→149 [311,12, 242,35, 412,08, 613,77] min | NO (anotación) | d09 L20 |\n"
        "| M-93 | CONFIRMA | reproducción del censo M-91 por el kit, test 43/43; identidad savia = mesh.totalSize 18/18 + 14/14 | NO (anotación) | observabilidad |\n"
        "| M-94 | DIFERENCIA | censo fresco 71 revs: 248.376 ×9, 248.372 ×1 (nuevo), 366.733 ×1; 247.881 en 0; conjunto cambió, patrón persiste | NO (anotación) | observabilidad |\n"
        "| M-95 | NO_CONFIRMA | intervalo autocura 16→17 = 649,08 min, fuera de la banda ~7,5 h [447,77, 465,70]; cadencia no se sostiene | NO (anotación) | observabilidad |\n", 1)
    nuevo_anexo = nuevo_anexo.replace(
        "**Tally:** CONFIRMA 17 (M-59, M-60, M-62, M-63, M-66, M-72, M-75, M-78, M-79, M-80, M-82, M-83, M-85, M-86, M-90, M-91, M-92) · NO_CONFIRMA 8 (M-57, M-61, M-64, M-65, M-69, M-76, M-84, M-87) · DIFERENCIA 1 (M-56) · NO_SÉ 1 (M-58) · REGULAR 1 (M-89). Ítems: 28 (M-56..M-72, M-75, M-76, M-78, M-79, M-80, M-82, M-83, M-84, M-85, M-86, M-87, M-89, M-90, M-91, M-92).",
        "**Tally:** CONFIRMA 18 (M-59, M-60, M-62, M-63, M-66, M-72, M-75, M-78, M-79, M-80, M-82, M-83, M-85, M-86, M-90, M-91, M-92, M-93) · NO_CONFIRMA 9 (M-57, M-61, M-64, M-65, M-69, M-76, M-84, M-87, M-95) · DIFERENCIA 2 (M-56, M-94) · NO_SÉ 1 (M-58) · REGULAR 1 (M-89). Ítems: 31 (M-56..M-72, M-75, M-76, M-78, M-79, M-80, M-82, M-83, M-84, M-85, M-86, M-87, M-89, M-90, M-91, M-92, M-93, M-94, M-95).", 1)
    assert nuevo_anexo.count("## M-") == 31, f"ítems anexo post: {nuevo_anexo.count('## M-')} != 31"
    assert "## M-93 — CONFIRMA (ciclo ALMA, 2026-11-16) — ítem añadido por N-39" in nuevo_anexo
    assert "## M-94 — DIFERENCIA (ciclo ALMA, 2026-11-16) — ítem añadido por N-39" in nuevo_anexo
    assert "## M-95 — NO_CONFIRMA (ciclo ALMA, 2026-11-16) — ítem añadido por N-39" in nuevo_anexo
    assert "M-56..M-95" in nuevo_anexo
    open(anexo_path, "w", encoding="utf-8", newline="").write(nuevo_anexo)
    assert sha(dataset_path) == "0852d58f92356eee572dc7a9141d195efe2a2adcef0d91b0e03c4aeeb42bf0af", "CSV cambió"
    assert sha(ANEXO / "confirmaciones.jsonl") == "dc94458bc42a9854d16a8f74da20ac6481f6fe241fe2cfae11a6f44633dc7cc5", "confirmaciones cambió"
    assert sha(ANEXO / "huecos.jsonl") == "3713376a243b05756fbfce434ccdb63e118562ac0ec4e351243086dcb1ce52fb", "huecos cambió"
    print("Anexo N-39: 28 → 31 ítems (M-93, M-94, M-95); CSV byte-idéntico.")

    # --- 5. Resumen con el script real ---
    r = subprocess.run([sys.executable, str(ANEXO / "resumen_claims.py")],
                       capture_output=True, text=True)
    print(r.stdout)
    if r.returncode != 0:
        fail(f"resumen_claims.py exit={r.returncode}: {r.stderr}")
    resumen = json.loads(open(ANEXO / "claims_resumen.json", encoding="utf-8").read())
    assert resumen["total"] == 1222, resumen["total"]
    assert resumen["hash_real"] == 1208, resumen["hash_real"]
    assert resumen["hash_pendiente"] == 8, resumen["hash_pendiente"]
    assert resumen["por_estado"]["SE"] == 1088, resumen["por_estado"]
    assert resumen["por_tipo"]["verificacion"] == 348, resumen["por_tipo"]
    assert resumen["por_grieta"][GRIETA_ALMA] == 10, resumen["por_grieta"]
    assert resumen["por_grieta"][GRIETA_VIVO] == 27, resumen["por_grieta"]

    # --- 6. Puertas ---
    out = []
    r1 = subprocess.run([sys.executable, str(ANEXO / "audit.py")], capture_output=True, text=True)
    out.append("=== audit.py ===")
    out.append(f"exit={r1.returncode}")
    out.append(r1.stdout.strip())
    if r1.stderr:
        out.append("STDERR: " + r1.stderr.strip())
    r2 = subprocess.run([sys.executable, str(ANEXO / "verify_all.py")], capture_output=True, text=True)
    out.append("\n=== verify_all.py ===")
    out.append(f"exit={r2.returncode}")
    out.append(r2.stdout.strip())
    if r2.stderr:
        out.append("STDERR: " + r2.stderr.strip())
    puertas = "\n".join(out) + "\n"
    open(ABS / "puertas_post_absorcion_ciclo_alma.txt", "w", encoding="utf-8", newline="").write(puertas)
    print(puertas)
    if r1.returncode != 0:
        fail(f"audit.py exit={r1.returncode}")
    if r2.returncode != 1 or "C-001" not in r2.stdout or "C-009" in r2.stdout:
        fail(f"verify_all.py inesperado: exit={r2.returncode}")
    fallos = [l for l in r2.stdout.splitlines() if l.strip().startswith("- C-")]
    assert len(fallos) == 8 and all(f"C-00{i}" in f for i, f in zip(range(1, 9), fallos)), fallos
    assert "discrepancia=0" in r1.stdout and "no_encontrado=0" in r1.stdout
    # COMPROBACIÓN ok (sin restauración automática — lección NM-03).
    # Esperado 379 = 370 + 9 (una entrada por fuente distinta), NO 381:
    # el encargo paso 3 decía 381 pero su paso 2 fija la regla de fuente
    # distinta (precedente r22 adjudicado). Ver informe.
    m1 = re.search(r"ok=(\d+)", r1.stdout)
    ok_post = int(m1.group(1)) if m1 else None
    print(f"audit ok pre=370, post={ok_post} (esperado 379 = 370 + 9 fuentes distintas).")
    if ok_post != 379:
        print(f"AVISO ok={ok_post} != 379: NO se restaura (NM-03). Verificar el post-estado directamente.")
        print("ABSORCIÓN ESCRITA, PENDIENTE DE VERIFICACIÓN DIRECTA DEL ok.")
        sys.exit(3)

    print("ABSORCIÓN CICLO ALMA OK: claims 1211→1222, hash_real 1197→1208, provenance 382→391, anexo 28→31 ítems")
    print("claims.jsonl sha:", sha(claims_path))
    print("provenance.sha256 sha:", sha(prov_path))
    print("claims_resumen.json sha:", sha(ANEXO / "claims_resumen.json"))
    print("anexo sha:", sha(anexo_path))


if __name__ == "__main__":
    main()
