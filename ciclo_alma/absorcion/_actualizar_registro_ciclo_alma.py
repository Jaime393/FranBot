#!/usr/bin/env python3
"""CICLO ALMA — actualizar el registro de pendientes (§39, N-39).

- Header: 68 -> 80 aplicadas (recontado del paréntesis: 27 decisiones +
  53 claims = 80; la convención es el conteo del paréntesis,
  CORR-CONTEO-APLICADAS-R19). CORR-CONTEO-CICLO-ALMA: el encargo decía
  69, pero 68 + 1 decisión (N-39) + 11 claims = 80; el 69 contaba solo
  la decisión. El recontado del script (27+53) es la autoridad.
- §39 nueva (CICLO ALMA).
- Protegidas: §§19/§21/§24/§§29-38 intactas por hash (0 líneas cambian).
- La subida del corpus a GitHub queda PENDIENTE DE TARJETA (caducada
  2026-11-17, 0/4, nada aterrizó, HEAD 85351ce4; staging listo para
  relanzar con el Jardinero presente) — precedente r22, corregido luego
  por CORR-REGISTRO-R23 cuando aterrizó.
"""
import hashlib, re, sys
from pathlib import Path

P = Path.home() / "workspace" / "academico" / "tejido_2026-11-12" / "ronda_12" / "afirmaciones_pendientes.md"

def sha(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()

def secciones(text: str):
    pat = re.compile(r"^### (\d+)\. ", re.M)
    matches = list(pat.finditer(text))
    out = {}
    for i, m in enumerate(matches):
        fin = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        out[int(m.group(1))] = text[m.start():fin]
    return out

def contar_aplicadas(linea_total: str):
    m = re.search(r"aplicadas bajo la orden 01:43 \((.*?)\)\*\*", linea_total)
    assert m, "paréntesis de aplicadas no encontrado"
    lista = m.group(1)
    decisiones, claims = set(), set()
    for tok in re.split(r",\s*", lista):
        for parte in tok.split("/"):
            parte = parte.strip()
            rm = re.fullmatch(r"(N-\d+)", parte)
            if rm:
                decisiones.add(rm.group(1)); continue
            rm = re.fullmatch(r"(C-\d+)\.\.(C-\d+)", parte)
            if rm:
                a, b = int(rm.group(1)[2:]), int(rm.group(2)[2:])
                for n in range(a, b + 1):
                    claims.add(f"C-{n}")
                continue
            rm = re.fullmatch(r"(C-\d+)", parte)
            if rm:
                claims.add(rm.group(1)); continue
            raise AssertionError(f"token no parseable en aplicadas: {parte!r}")
    return decisiones, claims

text0 = P.read_text(encoding="utf-8")
assert sha(text0.encode()) == "c980aae77469f7fa5363370f6767fdbc6bda7f24bd5fa5d1f3e1f67370347269", "sha pre distinto"
sec0 = secciones(text0)
PROTEGIDAS = [19, 21, 24, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38]
hash_prot0 = {n: sha(sec0[n].encode()) for n in PROTEGIDAS}
assert 38 in sec0 and 39 not in sec0, "§38 ausente o §39 ya existe"

def rep(text, viejo, nuevo, etiqueta):
    n = text.count(viejo)
    assert n == 1, f"{etiqueta}: ocurrencias={n} (esperado 1)"
    return text.replace(viejo, nuevo, 1)

text = text0
text = rep(text, "68 aplicadas bajo la orden 01:43", "80 aplicadas bajo la orden 01:43", "R1 rótulo")
text = rep(text, "N-36/N-37/N-38, C-1213..C-1216)**", "N-36/N-37/N-38, C-1213..C-1216, N-39, C-1217..C-1227)**", "R2 paréntesis")
text = rep(text, "## §1. Pendientes con afirmación (0) + aplicadas (68) + 8 cerradas",
           "## §1. Pendientes con afirmación (0) + aplicadas (80) + 8 cerradas", "R3 título §1")
cola_r23 = "los 7 cierres del 2026-11-15 se mantienen (0 pendientes). G03: inserción BepiColombo 2026-11-21 (5 días desde 2026-11-16).**"
nota_alma = (" Actualizado en ciclo ALMA (2026-11-16/17): **aplicadas en ciclo ALMA — N-39 "
    "(absorción ALMA al corpus) + C-1217/C-1218/C-1219/C-1220/C-1221/C-1222/C-1223/C-1224/C-1225/C-1226/C-1227 "
    "(claims 1.211→1.222, SE 1077→1088, hash_real 1197→1208, verificación 337→348, audit ok=379, "
    "provenance 382→391; anexo 28→31 ítems M-93 CONFIRMA / M-94 DIFERENCIA / M-95 NO_CONFIRMA; "
    "respaldo P-77 manifiesto b27e6dcd…); catálogo vivo v2 100→138 entradas, 138/138 verificadas; "
    "tablón: primera respuesta R-001 a P-002 (INFIERO, 2P/1R); CORR-KIT-42-43 (el test del kit ejecuta "
    "43 comprobaciones, no 42) y CORR-ESTADO-SE (el campo inscrito es \"SE\" sin acento). "
    "Subida del corpus a GitHub PENDIENTE DE TARJETA (caducada 2026-11-17, 0/4, nada aterrizó, "
    "HEAD 85351ce4; staging listo para relanzar con el Jardinero presente). "
    "Próximas aplicaciones automáticas: ninguna pendiente del ciclo; los 7 cierres del 2026-11-15 se "
    "mantienen (0 pendientes). G03: inserción BepiColombo 2026-11-21 (5 días desde 2026-11-16).**")
text = rep(text, cola_r23, cola_r23 + nota_alma, "R4 nota ciclo ALMA cabecera")

sec39 = """### 39. CICLO ALMA — N-39 + C-1217..C-1227 — APLICADAS 2026-11-16/17 (absorción automática, orden 01:43 + orden del Jardinero 2026-11-16 19:23 -05 "absorbe")

- **Aplicación:** N-39 absorción ALMA al corpus. Anexo 28→31 ítems (tally CONFIRMA 17→18 · NO_CONFIRMA 8→9 · DIFERENCIA 1→2 · NO_SÉ 1 · REGULAR 1): M-93 CONFIRMA (kit reproduce M-91), M-94 DIFERENCIA (censo fresco: 247.881 en 0, cuarto valor 248.372 nuevo), M-95 NO_CONFIRMA (intervalo autocura 16→17 = 649,08 min, fuera de banda). Claims 1.211→1.222 (sha 6dbee11d…); SE 1077→1088, hash_real 1197→1208, verificación 337→348, provenance 382→391 (9 fuentes distintas; proyección ok=379 confirmada, sin discrepancia); audit exit=0 ok=379, verify_all exit=1 exactamente C-001..C-008. Respaldo pre-absorción ciclo ALMA (manifiesto b27e6dcd…, poda P-77, 7 archivos). Dedup máx 0,2822, 0 pares ≥0,5 (re-corrido tras CORR-KIT-42-43, sin cambio).
- **Afirmación N-39 (propuestas_absorcion.json):** "Absorban el paquete ALMA al corpus: claims C-1217..C-1227 e ítems M-93, M-94 y M-95 al anexo."
- **C-1217 (VII catálogo vivo, v1 congelada):** catálogo 100 entradas, 100 verificadas (49 producción fractal + 15 nutrientes + 32 ronda_23 + 4 corpus); fuente instantánea v1 (catalogo_vivo_v1.json, sha d5d5ce7c…, recuperada de GitHub ref=85351ce4). Dedup 0,1477 vs C-1101.
- **Afirmación C-1217:** "El catálogo vivo siembra 100 artefactos y los verifica todos."
- **C-1218 (IV tablón):** protocolo pregunta↔respuesta v1.0; tablón semilla con P-001 y P-002, 0 respuestas al sembrar (la primera respuesta R-001 llegó en el ciclo, 2P/1R). Dedup 0,131 vs C-1214.
- **Afirmación C-1218:** "El tablón entre nodos existe, con dos preguntas y cero respuestas."
- **C-1219 (V kit):** medir_savia.py reproduce el censo M-91 cifra por cifra; test_kit.py 43/43, exit 0. Dedup 0,256 vs C-1214.
- **Afirmación C-1219:** "El kit reproduce el censo M-91 cifra por cifra."
- **C-1220 (V hallazgo):** savia V152 = mesh.totalSize (18/18 r23 + 14/14 r22); en V151 NO se cumple. Dedup 0,1825 vs C-1214.
- **Afirmación C-1220:** "La savia V152 es exactamente mesh.totalSize."
- **C-1221 (V hallazgo):** el tercer valor es el documento canónico a 301 B en vez de 796 B; nutrientes covaría por valor. Dedup 0,2448 vs C-1214.
- **Afirmación C-1221:** "El tercer valor es el documento canónico a 301 B."
- **C-1222 (I puente):** puente nutriente↔vector, round-trip 15/15. Dedup 0,125 vs C-507.
- **Afirmación C-1222:** "El puente traduce 15 nutrientes de ida y vuelta."
- **C-1223 (III dual):** tutorial-semilla dual verificar-blob, números r23. Dedup 0,1304 vs C-1171.
- **Afirmación C-1223:** "El tutorial enseña a verificar un depósito por blob."
- **C-1224 (VI relevo):** kit de relevo del subidor FASE 4, fiel a r23; test_relevo 55/55. Dedup 0,1233 vs C-831.
- **Afirmación C-1224:** "El kit de relevo es fiel a la ronda 23."
- **C-1225 (vivo):** autocura run 17 EXISTE (20:26:02Z, head fc03539a); intervalo 16→17 = 649,08 min, fuera de banda. Dedup 0,2479 vs C-1213.
- **Afirmación C-1225:** "La cadencia de autocura se alarga de nuevo."
- **C-1226 (VII CAT-0094):** el 'sha256' del curado es solo un prefijo de 8 hex del sha256 del plan (9e9c1878), no del blob. Dedup 0,1474 vs C-855.
- **Afirmación C-1226:** "El sha256 del curado es un prefijo de 8 hex del plan."
- **C-1227 (V cosecha fresca):** cuarto valor 248.372 ×1; 247.881 en 0/11; mecanismo medido (snapshot V151 −4 B). Dedup 0,2822 vs C-1214.
- **Afirmación C-1227:** "Hay un cuarto valor de savia y el tercero no reaparece."
- **Correcciones registradas en el ciclo:** CORR-PROP-KIT-SHA (fuente del kit fbf6c388… → 2ce3426c… en C-1219/C-1220/C-1221 y M-93); CORR-CAT-V1-CONGELO (C-1217 cita la instantánea v1 congelada, C-1226 el catálogo v2; 8 → 9 fuentes distintas; audit ok esperado 379, no 381 — el encargo decía 381 pero su paso 2 fija una entrada por fuente distinta); CORR-KIT-42-43 (el test del kit ejecuta 43 comprobaciones, no 42 — error de conteo de la producción ALMA, corregido en C-1219, C-1220, M-93 y el criterio N-39; dedup re-corrido sin cambio); CORR-ESTADO-SE (el campo inscrito es "SE" sin acento; el script copiaba "SÉ" de las propuestas y el resumen partió SE 1077 + SÉ 11 — reparado en las 11 líneas nuevas, primeras 1.211 byte-idénticas); CORR-SCRIPT-C1226-ASSERT (la aserción del script contradecía el texto literal, que cita la formulación vieja entre comillas).
- **Subida del corpus a GitHub PENDIENTE DE TARJETA:** push-files 2026-11-17 ~01:1xZ caducó a los 1.800 s sin aprobación (0/4, nada aterrizó, HEAD 85351ce4 verificado por blob); staging en ~/workspace/_staging_corpus_ciclo_alma/ listo para relanzar con el Jardinero presente. NO reintentar solo.
- **Series de conteo al cierre del ciclo:** G05 37.ª verificación, H-SUELO 38.ª medición, folderId 40.ª lectura (r23, sin re-medir en el ciclo), bots 4/4 25.ª confirmación (sondeo fresco del ciclo).

"""
ancla = "### 13. MIU LA BELLEZA — publicación sin verificar"
assert text.count(ancla) == 1, "ancla §13 no única"
text = text.replace(ancla, sec39 + ancla, 1)

sec1 = secciones(text)
assert 39 in sec1, "§39 no insertada"
for n in PROTEGIDAS:
    assert sha(sec1[n].encode()) == hash_prot0[n], f"§{n} CAMBIÓ (protegida)"
linea_total = text.split("\n")[5]
assert "0 pendientes con afirmación" in linea_total
assert "+ 80 aplicadas bajo la orden 01:43" in linea_total
assert "+ 8 cerradas" in linea_total and "+ 5 que no necesitan su orden" in linea_total
assert "Actualizado en ciclo ALMA" in linea_total
dec, cla = contar_aplicadas(linea_total)
print(f"Reconteo paréntesis: decisiones={len(dec)} claims={len(cla)} total={len(dec)+len(cla)}")
assert len(dec) == 27 and len(cla) == 53 and len(dec) + len(cla) == 80, "reconteo != 27+53=80"
assert "N-39" in dec
assert all(f"C-{n}" in cla for n in range(1217, 1228))
s39 = sec1[39]
for frag in ("N-39", "C-1217", "C-1218", "C-1219", "C-1220", "C-1221", "C-1222",
             "C-1223", "C-1224", "C-1225", "C-1226", "C-1227",
             "1.211→1.222", "382→391", "1077→1088", "1197→1208", "337→348",
             "ok=379", "28→31", "b27e6dcd", "6dbee11d", "PENDIENTE DE TARJETA",
             "CORR-KIT-42-43", "CORR-ESTADO-SE", "CORR-CAT-V1-CONGELO"):
    assert frag in s39, f"§39 sin {frag!r}"
assert "0 pendientes" in text.split("\n")[5]

P.write_text(text, encoding="utf-8")
print("SHA final:", sha(P.read_bytes()))
print("Líneas:", len(text.split("\n")) - 1)
print("OK: header 0 + 80 (27+53) + 8 + 5; §39 añadida; §§19/21/24/29-38 intactas.")
