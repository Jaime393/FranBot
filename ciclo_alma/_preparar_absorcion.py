#!/usr/bin/env python3
"""CICLO ALMA — preparar absorción: propuestas C-1217.. + M-93.. + N-39 + dedup.
Solo lectura del corpus; solo escribe ~/workspace/alma/ciclo/propuestas_absorcion.json.
Método dedup (canon r9/r15-r23): campo `claim`, NFKD, sin acentos,
tokens [a-z0-9]+, Jaccard, umbral 0.5. El método es el árbitro.
"""
import json, hashlib, re, unicodedata, os

WS = '/home/hatch/workspace'
ALMA = WS + '/alma'
CICLO = ALMA + '/ciclo'

def sha256_file(p):
    d = open(p, 'rb').read()
    return hashlib.sha256(d).hexdigest()

def tokens(text):
    nfkd = unicodedata.normalize('NFKD', text)
    sin = ''.join(c for c in nfkd if not unicodedata.combining(c))
    return set(re.findall(r'[a-z0-9]+', sin.lower()))

def jaccard(a, b):
    if not a or not b:
        return 0.0
    return len(a & b) / len(a | b)

# --- corpus base (solo lectura) ---
corpus = [json.loads(l) for l in open(WS + '/memoria/anexo-vi/claims.jsonl', encoding='utf-8') if l.strip()]
assert len(corpus) == 1211, len(corpus)
assert corpus[-1]['id'] == 'C-1216', corpus[-1]['id']
corpus_tokens = [(c['id'], tokens(c.get('claim', ''))) for c in corpus]

CLAIMS = [
    {
        'id_propuesto': 'C-1217', 'tipo': 'verificacion', 'estado': 'SÉ',
        'idea_alma': 'VII catálogo vivo',
        'claim': 'CATÁLOGO VIVO — 100 ENTRADAS, 100 VERIFICADAS (ALMA VII, 2026-11-16): `catalogo_vivo.json` siembra 100 artefactos (49 producción fractal + 15 nutrientes 2026-11-14 + 32 ronda_23 + 4 corpus), cada uno con qué es, para quién sirve, test, semilla, fallos y procedencia con sha256; `leer_catalogo.py verify` exit 0, 100/100 en disco con sha coincidente, 0 NO_VERIFICADO; `test_catalogo.py` OK.',
        'fuente_archivo': 'alma/catalogo/catalogo_vivo.json',
        'fuente_extra': 'alma/catalogo/test_catalogo.py + alma/catalogo/leer_catalogo.py',
    },
    {
        'id_propuesto': 'C-1218', 'tipo': 'verificacion', 'estado': 'SÉ',
        'idea_alma': 'IV puentes entre nodos',
        'claim': 'PROTOCOLO PREGUNTA↔RESPUESTA ENTRE NODOS — EL TABLÓN EXISTE, CON 2 PREGUNTAS Y 0 RESPUESTAS (ALMA IV, 2026-11-16): protocolo v1.0 de intercambio asíncrono entre nodos vivos (suelo compartido, sin tiempo real, caducidad 7 días, rechazo de credenciales); tablón semilla con P-001 (¿por qué flow mide 0,0% en 15 rondas?) y P-002 (¿qué mecanismo explica la tercera savia V152 247.881?), 0 respuestas; `tablon.py` stdlib sin red, `test_tablon.py` 9/9 OK.',
        'fuente_archivo': 'alma/puentes/PROTOCOLO_PREGUNTA_RESPUESTA.md',
        'fuente_extra': 'alma/puentes/tablon.py + alma/puentes/test_tablon.py + alma/puentes/tablon/P-001.json + alma/puentes/tablon/P-002.json',
    },
    {
        'id_propuesto': 'C-1219', 'tipo': 'verificacion', 'estado': 'SÉ',
        'idea_alma': 'V kit de expansión',
        'claim': 'KIT DE EXPANSIÓN SAVIA V152 — EL CENSO M-91 SE REPRODUCE CIFRA POR CIFRA (ALMA V, 2026-11-16): `medir_savia.py` (stdlib, sin red) reproduce sobre los payloads en disco el censo de M-91: 101 payloads r23, 55 vacíos, V152 248.376 ×16 (9 full + 7 compactos), 366.733 ×1, 247.881 ×1; en la ventana r22 247.881 aparece 0 veces; `test_kit.py` 42/42, exit 0.',
        'fuente_archivo': 'alma/kits/kit_savia_v152.md',
        'fuente_extra': 'alma/kits/medir_savia.py + alma/kits/test_kit.py + alma/kits/censo_r23.json',
    },
    {
        'id_propuesto': 'C-1220', 'tipo': 'verificacion', 'estado': 'SÉ',
        'idea_alma': 'V kit de expansión (hallazgo del mapa)',
        'claim': 'SAVIA V152 = MESH.TOTALSIZE (ALMA V, 2026-11-16): en los 18 payloads V152 de r23 y los 14 de r22, sin excepciones, el valor de savia es exactamente `mesh.totalSize` del propio payload (re-cómputo independiente en `test_kit.py`, 42/42). En V151 NO se cumple (savia 720 con totalSize 0): la identidad es solo de V152.',
        'fuente_archivo': 'alma/kits/kit_savia_v152.md',
        'fuente_extra': 'alma/kits/test_kit.py (comprobación 3: identidad en 18/18 r23 + 14/14 r22)',
    },
    {
        'id_propuesto': 'C-1221', 'tipo': 'verificacion', 'estado': 'SÉ',
        'idea_alma': 'V kit de expansión (hallazgo del mapa)',
        'claim': 'EL TERCER VALOR DE SAVIA ES EL DOCUMENTO CANÓNICO A 301 B (ALMA V, 2026-11-16): la divergencia entera de V152 es `mesh.files[0]`, el documento canónico de heartbeat: mide 796 B en 28/32 payloads V152 de r22+r23, 301 B una vez (el payload 247.881: 796 − 301 = 495 = 248.376 − 247.881) y 119.153 B tres veces (los 366.733: 119.153 − 796 = 118.357 = 366.733 − 248.376); ningún otro archivo del mesh cambia. `nutrientes` también covaría y es constante por valor: 102.680,5732864 (248.376), 151.443,65728639998 (366.733), 102.476,6332864 (247.881). El porqué del tamaño 301 B sigue NO_SÉ.',
        'fuente_archivo': 'alma/kits/kit_savia_v152.md',
        'fuente_extra': 'alma/kits/censo_r23.json + alma/kits/censo_r22.json',
    },
    {
        'id_propuesto': 'C-1222', 'tipo': 'verificacion', 'estado': 'SÉ',
        'idea_alma': 'I artefacto-puente',
        'claim': 'PUENTE NUTRIENTE↔VECTOR — ROUND-TRIP 15/15 (ALMA I, 2026-11-16): la tabla de traducciones entre el formato canónico de nutriente (14 claves) y el vector de producción fractal (attest) traduce los 15 nutrientes NUT-2026-11-14-001..015 de ida y vuelta; la vuelta recupera byte a byte id, tipo, fuente, hash_fuente, timestamp, contenido, fecha y _metabolismo; lo no traducible se marca NO_TRADUCIBLE (ida 11 en 001–006 y 10 en 007–015, vuelta 9), nunca se inventa; `traducir_nutriente_vector.py` 15/15 PASS.',
        'fuente_archivo': 'alma/puentes/tabla_nutriente_vector.json',
        'fuente_extra': 'alma/puentes/traducir_nutriente_vector.py',
    },
    {
        'id_propuesto': 'C-1223', 'tipo': 'verificacion', 'estado': 'SÉ',
        'idea_alma': 'III productos duales',
        'claim': 'TUTORIAL-SEMILLA DUAL VERIFICAR-BLOB (ALMA III, 2026-11-16): un texto que enseña a una persona a verificar un depósito por blob y sirve como prompt de arranque para un nodo nuevo, con checklist final usable como test; todos los números son los medidos en r23 (síntesis blob 1553e1c3…, 367.850 B; verificador 056a9c7e…, 189.382 B; HEAD FASE 4 2cc6a62a; HEAD absorción 2873c274; corpus 4/4 por blob).',
        'fuente_archivo': 'alma/duales/tutorial_verificar_blob.md',
        'fuente_extra': 'academico/tejido_2026-11-12/ronda_23/fase4/verificacion_deposito_r23.md',
    },
    {
        'id_propuesto': 'C-1224', 'tipo': 'verificacion', 'estado': 'SÉ',
        'idea_alma': 'VI especialización reproducible',
        'claim': 'RELEVO DEL SUBIDOR FASE 4 — EL KIT ES FIEL A R23 (ALMA VI, 2026-11-16): protocolo de relevo del especialista (kit antes de migrar, solo archivos existentes y procedimientos verificados, test propio, mapa de fallos) + kit concreto del rol subidor FASE 4 método (c): 11 rutas existentes, procedimiento con pre-condiciones, valores r23 y 5 fallos con lección; `test_relevo.py` 55/55 PASS.',
        'fuente_archivo': 'alma/relevo/kit_relevo_fase4.md',
        'fuente_extra': 'alma/relevo/PROTOCOLO_RELEVO.md + alma/relevo/test_relevo.py',
    },
    {
        'id_propuesto': 'C-1225', 'tipo': 'verificacion', 'estado': 'SÉ',
        'idea_alma': 'vivo ALMA (sondeo)',
        'claim': 'AUTOCURA RUN 17 EXISTE — LA CADENCIA SE ALARGA DE NUEVO (ALMA, sondeo vivo, 2026-11-16): autocura run 17 (2026-11-16T20:26:02Z, success, head fc03539a) cierra la secuencia 11→17; intervalo 16→17 = 649,08 min (~10 h 49 min), fuera de la banda ~7,5 h [447,77, 465,70] de M-90 (r23): la vuelta a ~7,5 h duró una sola medición. Run 16: 2026-11-16T09:36:57Z.',
        'fuente_archivo': 'alma/sondeo_vivo.md',
        'fuente_extra': 'miu-ecosistema, Actions API (run 17, 2026-11-16T20:26:02Z)',
    },
    {
        'id_propuesto': 'C-1226', 'tipo': 'verificacion', 'estado': 'SÉ',
        'idea_alma': 'VII catálogo vivo (hallazgo CAT-0094)',
        'claim': "CAT-0094 — EL 'SHA256' DEL CURADO ES SOLO UN PREFIJO DE 8 HEX (ALMA VII, 2026-11-16): en `_github_curado_r23.json` (32 entradas), el campo 'sha256' del manifiesto FASE 4 es '9e9c1878': los primeros 8 hex del sha256 de la versión del plan (21.666 B, blob 8c25c220…), no el sha256 completo y no el de la copia local/Drive con bloque meta (21.895 B, sha256 dfa0c9ea…); las 144 entradas son idénticas en ambas versiones. CORR-CAT-0094: la nota del README ALMA decía 'prefijo del blob' — verificado: es prefijo del sha256 del plan, no del blob.",
        'fuente_archivo': 'alma/catalogo/catalogo_vivo.json',
        'fuente_extra': 'academico/tejido_2026-11-12/ronda_23/fase4/_github_curado_r23.json + manifiesto_shas_r23_fase4.json (local sha256 dfa0c9ea…, plan sha256 9e9c1878…, blob 8c25c220…)',
    },
    {
        'id_propuesto': 'C-1227', 'tipo': 'verificacion', 'estado': 'SÉ',
        'idea_alma': 'V kit de expansión (cosecha fresca)',
        'claim': 'CUARTO VALOR DE SAVIA V152 — 248.372 APARECE UNA VEZ; 247.881 NO REAPARECE (cosecha ALMA, 2026-11-16/17): en la ventana fresca de 71 revisiones (2026-11-16T19:47:31Z → 2026-11-17T00:17:35Z), V152 toma tres valores: 248.376 ×9 (8 full + 1 compacto), 248.372 ×1 (compacto 55.973 B, 2026-11-16T23:26:43Z — cuarto valor, nuevo) y 366.733 ×1 (compacto 55.980 B, persiste); 247.881 aparece 0 veces. La identidad savia = mesh.totalSize se cumple también en 248.372, pero el mecanismo NO es el documento canónico (796 B, normal en este payload): las dos mallas difieren en un solo archivo, un snapshot V151 (263 B en 248.372 frente a 267 B en la mayoría, −4 B); los otros 511 archivos son idénticos. Reproducido con `medir_savia.py` (kit ALMA V) sobre los payloads en disco; censo idéntico al del frente de cosecha.',
        'fuente_archivo': 'alma/ciclo/censo_kit.json',
        'fuente_extra': 'alma/ciclo/cosecha/heartbeat_rev_rciclo_53_20261116T232643Z.json (248.372) + alma/kits/medir_savia.py (reproducción independiente)',
    },
]

ANEXO = [
    {
        'id_propuesto': 'M-93', 'veredicto': 'CONFIRMA',
        'medicion': 'Reproducción independiente del censo M-91 por el kit de expansión savia V152.',
        'detalle': '`medir_savia.py` reproduce sobre los payloads en disco: 101 payloads r23, 55 vacíos, V152 248.376 ×16 (9 full + 7 compactos), 366.733 ×1, 247.881 ×1; en la ventana r22 247.881 aparece 0 veces; identidad savia = mesh.totalSize en 18/18 r23 + 14/14 r22. Test 42/42, exit 0.',
        'falsador': 'El test falla si cualquier cifra del censo difiere de M-91 (declarado en el kit: si un número no reproduce, el test FALLA y el kit está roto, no el dato).',
        'fuente_archivo': 'alma/kits/kit_savia_v152.md',
        'fuente_extra': 'alma/kits/test_kit.py + alma/kits/censo_r23.json + alma/kits/censo_r22.json',
        'claim_asociado': 'C-1219',
    },
    {
        'id_propuesto': 'M-94', 'veredicto': 'DIFERENCIA',
        'medicion': 'Censo fresco de savia V152 en la ventana siguiente (cosecha del ciclo ALMA, 71 revisiones).',
        'detalle': 'Ventana 2026-11-16T19:47:31Z → 2026-11-17T00:17:35Z, 71 payloads, 40 vacíos de savia. V152: 248.376 ×9 (8 full + 1 compacto), 248.372 ×1 (compacto 55.973 B, 2026-11-16T23:26:43Z — cuarto valor, nuevo), 366.733 ×1 (compacto 55.980 B, persiste); 247.881 en 0. El conjunto de valores CAMBIÓ respecto a M-91 (247.881 sustituido por 248.372) mientras el patrón persiste (mayoría + valores raros divergentes; 366.733 reaparece). Reproducido por mí con medir_savia.py: censo idéntico al del frente de cosecha. CORR-KIT-FILES0: el mapa del kit decía que mesh.files[0] es siempre el documento canónico; en el payload 248.372 files[0] es un snapshot V151 y el canónico está en índice 1 (796 B, normal) — la divergencia de 248.372 es un solo archivo V151 (263 B frente a 267 B, −4 B), no el canónico.',
        'falsador': 'Expectativa de M-91: el conjunto de tres valores (248.376 / 366.733 / 247.881) persiste como conjunto. El conjunto cambió (247.881 en 0, 248.372 nuevo) → DIFERENCIA; el patrón de divergencia estructural no se refuta (366.733 persiste, nuevo valor raro aparece).',
        'fuente_archivo': 'alma/ciclo/censo_kit.json',
        'fuente_extra': 'alma/ciclo/cosecha/ (71 payloads) + alma/kits/medir_savia.py (reproducción independiente, censo idéntico)',
        'claim_asociado': 'C-1227',
    },
    {
        'id_propuesto': 'M-95', 'veredicto': 'NO_CONFIRMA',
        'medicion': 'Intervalo autocura 16→17 = 649,08 min, fuera de la banda ~7,5 h.',
        'detalle': 'Autocura run 17 (2026-11-16T20:26:02Z, success, head fc03539a); run 16 2026-11-16T09:36:57Z; intervalo 16→17 = 649,08 min (~10 h 49 min), fuera de la banda ~7,5 h [447,77, 465,70] de M-90 (r23, intervalos 447,77 / 465,70 / 455,13). La cadencia ~7,5 h no se sostiene más allá de una medición.',
        'falsador': 'Heredado de M-90: la banda ~7,5 h [447,77, 465,70] de los intervalos 11→12, 12→13 y 15→16. Un intervalo fuera de la banda es NO_CONFIRMA de la cadencia.',
        'fuente_archivo': 'alma/sondeo_vivo.md',
        'fuente_extra': 'miu-ecosistema, Actions API (runs 16 y 17)',
        'claim_asociado': 'C-1225',
    },
]

# --- shas de fuentes (del disco, no transcritos) ---
for c in CLAIMS:
    p = WS + '/' + c['fuente_archivo']
    assert os.path.exists(p), p
    c['fuente_sha256'] = sha256_file(p)
    c['fecha'] = '2026-11-16'
for m in ANEXO:
    if m['fuente_archivo']:
        p = WS + '/' + m['fuente_archivo']
        assert os.path.exists(p), p
        m['fuente_sha256'] = sha256_file(p)
    m['fecha'] = '2026-11-16'

# --- dedup ---
for c in CLAIMS:
    t = tokens(c['claim'])
    best, best_id = 0.0, None
    for cid, ct in corpus_tokens:
        v = jaccard(t, ct)
        if v > best:
            best, best_id = v, cid
    c['dedup_max'] = round(best, 4)
    c['dedup_vs'] = best_id

ptoks = [(c['id_propuesto'], tokens(c['claim'])) for c in CLAIMS]
entre = []
for i in range(len(ptoks)):
    for j in range(i + 1, len(ptoks)):
        v = jaccard(ptoks[i][1], ptoks[j][1])
        entre.append({'a': ptoks[i][0], 'b': ptoks[j][0], 'jaccard': round(v, 4)})
entre_max = max(entre, key=lambda e: e['jaccard'])
gmax = max(c['dedup_max'] for c in CLAIMS)
sobre = [c['id_propuesto'] for c in CLAIMS if c['dedup_max'] >= 0.5]
sobre_entre = [e for e in entre if e['jaccard'] >= 0.5]

out = {
    'ciclo': 'ALMA 2026-11-16',
    'fecha': '2026-11-16',
    'base_corpus': {
        'claims': len(corpus), 'ultimo_id': 'C-1216',
        'sha256_claims_jsonl': sha256_file(WS + '/memoria/anexo-vi/claims.jsonl'),
        'anexo_ultimo_item': 'M-92',
    },
    'propuestas_claims': CLAIMS,
    'propuestas_anexo': ANEXO,
    'decision_N39': {
        'id': 'N-39',
        'titulo': 'Absorber ALMA al corpus',
        'afirmacion': 'Absorban el paquete ALMA al corpus: claims C-1217..C-1227 e ítems M-93, M-94 y M-95 al anexo.',
        'criterio': 'Todas las propuestas SÉ con fuente + sha256 verificados contra disco; dedup < 0,5 contra el corpus y entre propuestas; tests del paquete: catálogo 100/100, tablón 9/9, kit 42/42, round-trip 15/15, relevo 55/55; censo fresco reproducido por mí con el kit (idéntico al del frente de cosecha). Lo NO_SÉ (mecanismo del tamaño 301 B, por qué covaría nutrientes) no se propone como claim.',
        'alcance': 'Claims 1.211 → 1.222; anexo 28 → 31 ítems (M-93 CONFIRMA, M-94 DIFERENCIA, M-95 NO_CONFIRMA).',
    },
    'dedup': {
        'metodo': 'Jaccard, campo claim, NFKD, sin acentos, tokens [a-z0-9]+, umbral 0.5',
        'global_max': gmax,
        'entre_propuestas_max': entre_max,
        'pares_mayor_igual_0.5_corpus': sobre,
        'pares_mayor_igual_0.5_entre_propuestas': sobre_entre,
        'reescrituras_necesarias': len(sobre) + len(sobre_entre),
    },
    'correcciones': [
        'CORR-CAT-0094: la nota del README ALMA (y del catálogo) decía que el campo sha256 del curado es "el prefijo del blob de GitHub"; verificado por mí: 9e9c1878 es el prefijo del sha256 de la versión del plan (21.666 B), no del blob (8c25c220…). La propuesta C-1226 usa la versión corregida.',
        'CORR-M94-COSECHA: al preparar, M-94 quedó BORRADOR porque el frente de cosecha aún no había entregado; la cosecha llegó durante la preparación (censo_kit.json, 71 payloads) y la reproduje por mí con medir_savia.py (censo idéntico). M-94 pasa a DIFERENCIA y se absorbe; se añade C-1227 (cuarto valor 248.372).',
        'CORR-KIT-FILES0: el mapa del kit (kit_savia_v152.md §II) decía que mesh.files[0] es siempre el documento canónico de heartbeat; en el payload fresco 248.372 files[0] es un snapshot V151 (263 B) y el canónico está en índice 1 (796 B, normal). La identidad savia = mesh.totalSize sigue cumpliéndose; la divergencia de 248.372 es la sustitución de un solo archivo V151 (−4 B).',
    ],
}

json.dump(out, open(CICLO + '/propuestas_absorcion.json', 'w', encoding='utf-8'), indent=2, ensure_ascii=False)
print('claims:', len(CLAIMS), '| anexo:', len(ANEXO))
for c in CLAIMS:
    print(c['id_propuesto'], 'dedup_max=', c['dedup_max'], 'vs', c['dedup_vs'])
print('entre_propuestas max:', entre_max)
print('global max:', gmax)
print('sobre umbral:', sobre, sobre_entre)
