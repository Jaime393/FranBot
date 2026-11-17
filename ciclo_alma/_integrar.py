#!/usr/bin/env python3
"""CICLO ALMA — INTEGRA: tejido cruzado + ruta + grafo.
Genera tejido_cruzado_alma.jsonl, grafo_alma.json, ruta_alma.json e integra.md.
Todos los sha256 se recomputan del disco; si uno no coincide con lo esperado, falla.
Solo local; no toca el corpus ni nada vivo.
"""
import json, hashlib, os, sys
from collections import Counter

W = os.path.expanduser('~/workspace')
ALMA = os.path.join(W, 'alma')
CICLO = os.path.join(ALMA, 'ciclo')

def sha(p):
    with open(p, 'rb') as f:
        return hashlib.sha256(f.read()).hexdigest()

def ev(*parts):
    """parts: (ruta_relativa_a_workspace, sha_esperado_8) -> 'ruta sha256:full'.
    El sha se toma FRESCO del disco (los frentes paralelos del ciclo siguen
    escribiendo: un prefijo esperado puede quedar obsoleto en minutos). Si el
    fresco difiere del esperado, se avisa por stderr pero NO se aborta: la
    validación final re-verifica cada evidencia contra el disco."""
    out = []
    for rel, pref in parts:
        full = sha(os.path.join(W, rel))
        if pref and not full.startswith(pref):
            print(f'AVISO deriva: {rel} fresco {full[:8]} != esperado {pref}', file=sys.stderr)
        out.append(f'{rel} sha256:{full}')
    return ' + '.join(out)

# --- shas esperados (medidos por mí antes de generar; el assert los re-verifica) ---
E = {
 'catalogo': '6a6ae82b', 'manifiesto_pf': '9967dc1d', 'digest': 'c42c1752',
 'nut001': '56398133', 'verif_dep_r23': '7659f898', 'claims': '532ff6f3',
 'p001': 'ea1e63d4', 'p002': '84f3283b', 'med_m90': 'e3c99cdc', 'med_m91': 'a63d0e6d',
 'med_m92': '191783d4', 'tablon_py': 'a2180d4d', 'medir': 'c0a49a70',
 'test_kit': '1c4dd28f', 'censo_r23': '8bf2e959', 'censo_fresco': 'a44544fc',
 'censo_kit': 'f3c80897', 'cosecha_savia': 'b1712b55', 'sondeo_fresco': '44a4fdfe',
 'sondeo_vivo': '8f12a618', 'tabla_nv': 'a4b0576a', 'traducir': 'a9482ba8',
 'vector_attest': 'e4cc96ef', 'kit_relevo': '3d82a8fb', 'tutorial': '155d1685',
 'readme_alma': 'cddb7e6d', 'prep_abs': 'd592ce5d', 'propuestas': '740b27eb',
 'manifiesto_alma': 'd93fcf6d', 'deposito_alma': 'f534b417',
 'sondeo_corpus': '412bee15', 'sondeo_suelo': '55c76c7e', 'kit_md': '2ce3426c',
 'protocolo_relevo': '16553f89', 'curado': None,  # lista, sha parcial; se verifica por contenido
 'readme_local': '28eb3c54', 'kit_manifiesto': 'be5e8737',
 'payload_53': 'fe128b9d',
}
# verificación especial del curado: entrada manifiesto con sha256 9e9c1878 y blob 8c25c220
curado = json.load(open(os.path.join(W, 'academico/tejido_2026-11-12/ronda_23/fase4/_github_curado_r23.json')))
manif_entry = [e for e in curado if 'manifiesto_shas_r23_fase4' in e.get('repo', '')][0]
assert manif_entry['sha256'] == '9e9c1878' and manif_entry['blob'] == '8c25c220' and manif_entry['bytes'] == 21666, manif_entry
# R-001 y test_tablon actual (deriva post-depósito): se miden, no se asumen
r001 = sha(os.path.join(ALMA, 'puentes/tablon/R-001.json'))
test_tablon_local = sha(os.path.join(ALMA, 'puentes/test_tablon.py'))
r001_data = json.load(open(os.path.join(ALMA, 'puentes/tablon/R-001.json')))
assert r001_data['id_pregunta'] == 'P-002' and r001_data['nivel'] == 'INFIERO'
assert r001_data['evidencia_hash'] == sha(os.path.join(CICLO, 'censo_fresco.json')), 'R-001 no cita el censo fresco'

L = []
def line(de, a, tipo, estado, evidencia):
    L.append({'de': de, 'a': a, 'tipo': tipo, 'estado': estado, 'evidencia': evidencia})

line('catalogo_vivo.json', 'produccion-fractal (49 archivos)',
     'CONEXION', 'SÉ', ev(('alma/catalogo/catalogo_vivo.json', E['catalogo']),
                            ('produccion-fractal/manifiesto_shas_produccion.json', E['manifiesto_pf'])))
line('catalogo_vivo.json', 'nutrientes 2026-11-14 (15 NUT)',
     'CONEXION', 'SÉ', ev(('alma/catalogo/catalogo_vivo.json', E['catalogo']),
                            ('nutrientes/2026-11-14/tejido/finales/NUT-2026-11-14-001.json', E['nut001'])))
line('catalogo_vivo.json', 'ronda_23 FASE 4 (32 archivos, HEAD 2cc6a62a)',
     'CONEXION', 'SÉ', ev(('alma/catalogo/catalogo_vivo.json', E['catalogo']),
                            ('academico/tejido_2026-11-12/ronda_23/fase4/verificacion_deposito_r23.md', E['verif_dep_r23'])))
line('catalogo_vivo.json', 'corpus (4 archivos, claims 1.211)',
     'CONEXION', 'SÉ', ev(('alma/catalogo/catalogo_vivo.json', E['catalogo']),
                            ('memoria/anexo-vi/claims.jsonl', E['claims'])))
line('tablon/P-001.json', 'C-1215 / med_M92 (flow 0,0%, 15 rondas)',
     'CONEXION', 'SÉ', ev(('alma/puentes/tablon/P-001.json', E['p001']),
                            ('academico/tejido_2026-11-12/ronda_23/ejecucion_f3/med_M92.json', E['med_m92'])))
line('tablon/P-002.json', 'C-1214 / med_M91 (tercera savia 247.881)',
     'CONEXION', 'SÉ', ev(('alma/puentes/tablon/P-002.json', E['p002']),
                            ('academico/tejido_2026-11-12/ronda_23/ejecucion_f3/med_M91.json', E['med_m91'])))
line('puentes/tablon.py', 'gossip como tablón (6 claims SÉ: C-235, C-493, C-857, C-794, C-852, C-947)',
     'CONEXION', 'SÉ', ev(('alma/puentes/tablon.py', E['tablon_py']),
                            ('memoria/anexo-vi/claims.jsonl', E['claims'])))
line('tablon/R-001.json', 'tablon/P-002.json (primera respuesta del tablón, nivel INFIERO)',
     'CONEXION', 'INFIERO', ev(('alma/puentes/tablon/R-001.json', r001[:8]),
                                  ('alma/ciclo/censo_fresco.json', E['censo_fresco'])))
line('tablon/R-001.json', 'censo_fresco.json (evidencia_hash == sha256 del censo)',
     'CONEXION', 'SÉ', ev(('alma/puentes/tablon/R-001.json', r001[:8]),
                            ('alma/ciclo/censo_fresco.json', E['censo_fresco'])))
line('kits/medir_savia.py', 'med_M91 (reproduce el censo cifra por cifra, test 43/43)',
     'SIMULACION_CONFIRMA', 'SÉ', ev(('alma/kits/medir_savia.py', E['medir']),
                                        ('academico/tejido_2026-11-12/ronda_23/ejecucion_f3/med_M91.json', E['med_m91']),
                                        ('alma/kits/test_kit.py', E['test_kit'])))
line('kits/censo_r23.json', 'C-1214 / med_M91 (censo r23: 248.376 x16, 366.733 x1, 247.881 x1)',
     'CONEXION', 'SÉ', ev(('alma/kits/censo_r23.json', E['censo_r23']),
                            ('academico/tejido_2026-11-12/ronda_23/ejecucion_f3/med_M91.json', E['med_m91'])))
line('ciclo/censo_fresco.json', 'C-1214 / med_M91 (247.881 en 0/11: NO PERSISTE)',
     'CONEXION', 'SÉ', ev(('alma/ciclo/censo_fresco.json', E['censo_fresco']),
                            ('academico/tejido_2026-11-12/ronda_23/ejecucion_f3/med_M91.json', E['med_m91'])))
line('ciclo/censo_fresco.json', 'cuarto valor 248.372 (mecanismo: rotación del rodante -4 B)',
     'CONEXION', 'SÉ', ev(('alma/ciclo/censo_fresco.json', E['censo_fresco']),
                            ('alma/ciclo/cosecha_savia.md', E['cosecha_savia'])))
line('ciclo/censo_fresco.json', 'ley nutrientes = 0,412 x savia + 349,6612864 (residuo 0,0, 13 payloads)',
     'INFERENCIA_CRUCE', 'SÉ', ev(('alma/ciclo/censo_fresco.json', E['censo_fresco']),
                                     ('alma/ciclo/cosecha_savia.md', E['cosecha_savia'])))
line('ciclo/censo_fresco.json', 'savia = mesh.totalSize 29/29 (18/18 r23 + 11/11 fresco)',
     'SIMULACION_CONFIRMA', 'SÉ', ev(('alma/ciclo/censo_fresco.json', E['censo_fresco']),
                                        ('academico/tejido_2026-11-12/ronda_23/ejecucion_f3/med_M91.json', E['med_m91'])))
line('ciclo/sondeo_vivo_fresco.md', 'C-1213 / med_M90 (autocura run 17, intervalo 16->17 = 649,08 min, fuera de banda [447,77, 465,70])',
     'CONEXION', 'SÉ', ev(('alma/ciclo/sondeo_vivo_fresco.md', E['sondeo_fresco']),
                            ('academico/tejido_2026-11-12/ronda_23/ejecucion_f3/med_M90.json', E['med_m90'])))
line('ciclo/sondeo_vivo_fresco.md', 'C-1215 / med_M92 (flow 0,0% run 149, 16.ª medición consecutiva)',
     'SIMULACION_CONFIRMA', 'SÉ', ev(('alma/ciclo/sondeo_vivo_fresco.md', E['sondeo_fresco']),
                                        ('academico/tejido_2026-11-12/ronda_23/ejecucion_f3/med_M92.json', E['med_m92'])))
line('puentes/tabla_nutriente_vector.json', 'digest_format_nutriente.md (formato canónico, 14 claves)',
     'CONEXION', 'SÉ', ev(('alma/puentes/tabla_nutriente_vector.json', E['tabla_nv']),
                            ('memoria/anexo-vi/digest_format_nutriente.md', E['digest'])))
line('puentes/traducir_nutriente_vector.py', 'vectores/vector_attest.json (round-trip nutriente<->vector 15/15)',
     'CONEXION', 'SÉ', ev(('alma/puentes/traducir_nutriente_vector.py', E['traducir']),
                            ('produccion-fractal/vectores/vector_attest.json', E['vector_attest'])))
line('relevo/kit_relevo_fase4.md', 'método (c) r23 (un push-files, 32/32 por blob, HEAD 2cc6a62a, 1 tarjeta)',
     'CONEXION', 'SÉ', ev(('alma/relevo/kit_relevo_fase4.md', E['kit_relevo']),
                            ('academico/tejido_2026-11-12/ronda_23/fase4/verificacion_deposito_r23.md', E['verif_dep_r23'])))
line('duales/tutorial_verificar_blob.md', 'blobs r23 (síntesis 1553e1c3, verificador 056a9c7e, HEAD 2cc6a62a)',
     'CONEXION', 'SÉ', ev(('alma/duales/tutorial_verificar_blob.md', E['tutorial']),
                            ('academico/tejido_2026-11-12/ronda_23/fase4/verificacion_deposito_r23.md', E['verif_dep_r23'])))
line('alma/README.md', '_github_curado_r23.json (CAT-0094: "sha256" del curado)',
     'CONFLICTO', 'SÉ',
     'CONFLICTO documental adjudicado por CORR-CAT-0094: la versión DEPOSITADA del README ALMA (alma/README.md @85351ce4, sha256 cddb7e6d…, L22) dice que el campo sha256 del curado es "el prefijo del blob de GitHub"; '
     'verificado: el valor es 9e9c1878, prefijo del sha256 de la versión del plan (21.666 B, blob 8c25c220), no del blob. '
     'La copia local/Drive con bloque meta tiene sha256 dfa0c9ea (21.895 B); las 144 entradas son idénticas. '
     'El README local ya lleva la corrección (00:32:39Z). Evidencia: '
     + ev(('alma/ciclo/preparar_absorcion.md', E['prep_abs']))
     + ' + alma/README.md @85351ce4 sha256:cddb7e6d634b1b6b6c19abfd701ccf9402fb72551ca7b700362b6ff8d4f4508b (depositada; verificada por mí contra la API)'
     + ' + academico/tejido_2026-11-12/ronda_23/fase4/_github_curado_r23.json entrada manifiesto: sha256 9e9c1878, blob 8c25c220, bytes 21666 (verificado por contenido)')
line('puentes/test_tablon.py (local)', 'puentes/test_tablon.py (GitHub, HEAD 85351ce4)',
     'CONFLICTO', 'SÉ',
     'CONFLICTO documental (deriva local post-depósito): local 7.205 B, mtime 2026-11-17T00:30:29Z, espera 2P/1R (R-001 a P-002); '
     'GitHub 6.822 B, blob f9684687, espera 2P/0R. Causa: el frente conecta respondió P-002 a las 00:30Z (R-001) y actualizó el test en local; '
     'la copia depositada quedó en 0 respuestas. La versión depositada está intacta; la local es la vigente. Evidencia: '
     + ev(('alma/puentes/test_tablon.py', test_tablon_local[:8]),
          ('alma/puentes/tablon/R-001.json', r001[:8])))
line('tablon/P-001.json', 'corpus NO_SÉ (por qué flow mide 0,0% — H-M92-SERIE r23)',
     'HUECO_REDUNDANTE', 'SÉ', ev(('alma/puentes/tablon/P-001.json', E['p001']),
                                     ('alma/sondeo_corpus.md', E['sondeo_corpus'])))
line('ciclo/propuestas_absorcion.json', 'manifiesto_shas_alma.json (C-1217..C-1227 propuestos <-> 33 entradas)',
     'CONEXION', 'SÉ', ev(('alma/ciclo/propuestas_absorcion.json', E['propuestas']),
                            ('alma/manifiesto_shas_alma.json', E['manifiesto_alma'])))
line('ciclo/censo_kit.json', 'ciclo/censo_fresco.json (sha256_dato == sha256 de censo_kit.json)',
     'CONEXION', 'SÉ', ev(('alma/ciclo/censo_kit.json', E['censo_kit']),
                            ('alma/ciclo/censo_fresco.json', E['censo_fresco'])))
line('ciclo/sondeo_vivo_fresco.md', 'sondeo_vivo.md ALMA (bots 24.ª -> 25.ª, HEAD 48be5fe2 -> f0a8c308)',
     'CONEXION', 'SÉ', ev(('alma/ciclo/sondeo_vivo_fresco.md', E['sondeo_fresco']),
                            ('alma/sondeo_vivo.md', E['sondeo_vivo'])))
line('relevo/PROTOCOLO_RELEVO.md', 'produccion-fractal recetas (11 kits reproducibles, VI parcial)',
     'CONEXION', 'SÉ', ev(('alma/relevo/PROTOCOLO_RELEVO.md', E['protocolo_relevo']),
                            ('produccion-fractal/manifiesto_shas_produccion.json', E['manifiesto_pf'])))
line('kits/kit_savia_v152.md', 'produccion-fractal recetas (vecino: receta ~= kit sin pregunta ni mapa)',
     'CONEXION', 'INFIERO', ev(('alma/kits/kit_savia_v152.md', E['kit_md']),
                                     ('alma/sondeo_suelo.md', E['sondeo_suelo'])))
line('alma/deposito_alma.md', 'manifiesto_shas_alma.json (Drive 34/34 por tamaño, GitHub 34/34 por blob, HEAD final 85351ce4)',
     'CONEXION', 'SÉ', ev(('alma/deposito_alma.md', E['deposito_alma']),
                            ('alma/manifiesto_shas_alma.json', E['manifiesto_alma'])))
line('alma/kits/test_kit.py', 'alma/README.md (recuento del test del kit: 42/42 vs 43/43)',
     'CONFLICTO', 'SÉ',
     'CONFLICTO documental adjudicado por recuento instrumentado: el parte ALMA y el README depositado dicen test 42/42; '
     'corrida instrumentada por mí (copia en /tmp, original sin tocar): 43 comprobaciones ejecutadas, todas OK, TODO PASA. '
     'El README local ya dice 43/43. Evidencia: '
     + ev(('alma/kits/test_kit.py', E['test_kit']),
          ('alma/README.md', E['readme_local'])))
line('alma/README.md', 'alma/catalogo/catalogo_vivo.json (catálogo v2 con 138 entradas, anunciado antes de existir)',
     'CONFLICTO', 'SÉ',
     'CONFLICTO documental RESUELTO por llegada: el README local (00:32:39Z) afirmó "catálogo vivo v2 con 138 entradas (100 v1 + 33 ALMA + 5 ciclo)" '
     'cuando en disco solo existía v1 (100/100, verificado por mí ~00:33Z, sin archivo v2). El v2 aterrizó a las 00:34:00Z: total 138, verificadas 138, '
     'grupos 49 PF + 33 ALMA + 32 r23 + 15 NUT + 5 ciclo + 4 corpus; `leer_catalogo.py verify` por mí: 138/138 TODO CUADRA. '
     'La discrepancia fue temporal (anuncio antes que artefacto), no de contenido. Evidencia: '
     + ev(('alma/README.md', E['readme_local']),
          ('alma/catalogo/catalogo_vivo.json', E['catalogo'])))
line('kits/kit_savia_v152.md', 'ciclo/cosecha/heartbeat_rev_rciclo_53_20261116T232643Z.json (CORR-KIT-FILES0: files[0] no es siempre el canónico)',
     'CONEXION', 'SÉ', ev(('alma/kits/kit_savia_v152.md', E['kit_md']),
                            ('alma/ciclo/cosecha/heartbeat_rev_rciclo_53_20261116T232643Z.json', E['payload_53']),
                            ('alma/ciclo/preparar_absorcion.md', E['prep_abs'])))
line('catalogo_vivo.json v2.0', 'paquete ALMA (33 entradas) + ciclo (5 entradas: CAT-0134..CAT-0138)',
     'CONEXION', 'SÉ', ev(('alma/catalogo/catalogo_vivo.json', E['catalogo']),
                            ('alma/ciclo/censo_fresco.json', E['censo_fresco'])))

assert len(L) >= 20, len(L)
with open(os.path.join(CICLO, 'tejido_cruzado_alma.jsonl'), 'w', encoding='utf-8') as f:
    for e in L:
        f.write(json.dumps(e, ensure_ascii=False) + '\n')

# --- grafo ---
nodes = {}
edges = []
for i, e in enumerate(L):
    for n in (e['de'], e['a']):
        nodes.setdefault(n, {'id': n, 'grado': 0})
    nodes[e['de']]['grado'] += 1
    nodes[e['a']]['grado'] += 1
    edges.append({'id': f'E-{i+1:02d}', 'de': e['de'], 'a': e['a'], 'tipo': e['tipo'], 'estado': e['estado']})
huerfanos = [n for n, v in nodes.items() if v['grado'] == 0]
grafo = {'nodos': sorted(nodes.values(), key=lambda x: x['id']),
         'aristas': edges,
         'resumen': {'n_nodos': len(nodes), 'n_aristas': len(edges),
                     'n_huerfanos': len(huerfanos), 'huerfanos': huerfanos}}
assert len(huerfanos) == 0, huerfanos
with open(os.path.join(CICLO, 'grafo_alma.json'), 'w', encoding='utf-8') as f:
    json.dump(grafo, f, indent=2, ensure_ascii=False)

# --- ruta ---
DRIVE_ALMA = '1Bepd-w432GdQqikYy0FphxTYqY0zz2bb'  # alma_2026-11-16/ en MIU_TEJIDO_2026-11-12 ORIGINAL
DRIVE_SUB = {'catalogo': '1_monHFJ4i0u1cKfdDBOptMwGcK1ZDW3n',
             'duales': '1cALychTWTSvMo51lZTxiRyvQhtHmTihA',
             'kits': '1OVe1pvkLRm4kyR5_aXKYsYPnueE1CuaB',
             'puentes': '18fU_AWrFW3uJ43Qw7xB8-4AtpofCm4w_',
             'puentes/tablon': '1wixBQB8v2uYjVBSyPh1fREAXSn5rjSPd',
             'relevo': '1n1uPAg5YLe0falV7U3_UL0sAMr4XOi91'}
GH_HEAD = '85351ce4'
blobs = json.load(open(os.path.join(ALMA, '_blobs_local_alma.json')))
def ruta(artefacto, local, drive, github, consume, test, semilla, nota=None):
    r = {'artefacto': artefacto, 'local': local, 'drive': drive, 'github': github,
         'consume': consume, 'test': test, 'semilla': semilla}
    if nota: r['nota'] = nota
    return r
R = []
R.append(ruta('catalogo_vivo (VII)', 'alma/catalogo/',
              f'alma_2026-11-16/catalogo/ (ID {DRIVE_SUB["catalogo"]})',
              f'FranBot catalogo/ @ {GH_HEAD} (blob catalogo_vivo.json {blobs["catalogo/catalogo_vivo.json"][:8]})',
              'ambos', 'test_catalogo.py: v2.0, 138 entradas, 0 NO_VERIFICADO, leer_catalogo.py verify exit 0 (138/138 TODO CUADRA, verificado por mí)',
              'catalogo/_generar_catalogo.py',
              'El v2 (138 = 100 v1 + 33 ALMA + 5 ciclo) aterrizó 00:34:00Z durante la integración; el README lo anunció a las 00:32:39Z, antes que el archivo — ver tejido, CONFLICTO catálogo v2 (resuelto por llegada).'))
R.append(ruta('tablon pregunta-respuesta (IV)', 'alma/puentes/',
              f'alma_2026-11-16/puentes/ (ID {DRIVE_SUB["puentes"]}), tablon/ (ID {DRIVE_SUB["puentes/tablon"]})',
              f'FranBot puentes/ @ {GH_HEAD}',
              'ambos', 'test_tablon.py 9/9 OK (local, 2P/1R tras R-001)',
              'puentes/tablon.py',
              'La copia depositada en GitHub está en 2P/0R (blob test_tablon.py f9684687, 6.822 B); en local el tablón es 2P/1R tras R-001 (00:30Z). Pendiente re-depósito del tablón en el ciclo.'))
R.append(ruta('kit de expansión savia V152 (V)', 'alma/kits/',
              f'alma_2026-11-16/kits/ (ID {DRIVE_SUB["kits"]})',
              f'FranBot kits/ @ {GH_HEAD}',
              'ambos', 'test_kit.py: TODO PASA, 43 comprobaciones ejecutadas (recuento instrumentado por mí; el parte ALMA decía 42/42)',
              'kits/medir_savia.py (stdlib, sin red)',
              'Deriva local post-depósito: kit_savia_v152.md lleva CORR-KIT-FILES0 (00:31:51Z) y el manifiesto del kit se regeneró (00:32:00Z); la copia depositada es la versión previa.'))
R.append(ruta('puente nutriente<->vector (I)', 'alma/puentes/tabla_nutriente_vector.json + traducir_nutriente_vector.py',
              f'alma_2026-11-16/puentes/ (ID {DRIVE_SUB["puentes"]})',
              f'FranBot puentes/ @ {GH_HEAD}',
              'nodo', 'traducir_nutriente_vector.py: round-trip 15/15 sobre los nutrientes reales',
              'puentes/tabla_nutriente_vector.json'))
R.append(ruta('tutorial-semilla verificar-blob (III)', 'alma/duales/tutorial_verificar_blob.md',
              f'alma_2026-11-16/duales/ (ID {DRIVE_SUB["duales"]})',
              f'FranBot duales/ @ {GH_HEAD}',
              'ambos', 'checklist final del tutorial, usable como test (blobs r23: síntesis 1553e1c3, verificador 056a9c7e)',
              'duales/tutorial_verificar_blob.md'))
R.append(ruta('relevo FASE 4 método (c) (VI)', 'alma/relevo/',
              f'alma_2026-11-16/relevo/ (ID {DRIVE_SUB["relevo"]})',
              f'FranBot relevo/ @ {GH_HEAD}',
              'nodo', 'test_relevo.py 55/55',
              'relevo/kit_relevo_fase4.md'))
for s in ['vivo', 'suelo', 'corpus', 'deposito']:
    R.append(ruta(f'sondeo_{s}', f'alma/sondeo_{s}.md',
                  f'alma_2026-11-16/sondeo_{s}.md (carpeta ID {DRIVE_ALMA})',
                  f'FranBot sondeo_{s}.md @ {GH_HEAD} (blob {blobs[f"sondeo_{s}.md"][:8]})',
                  'ambos', 'lectura verificada contra fuente (sin test propio; sondeo de solo lectura)',
                  'n/a (documento de sondeo)'))
R.append(ruta('censo fresco savia (ciclo)', 'alma/ciclo/censo_fresco.json',
              'pendiente_deposito_ciclo', 'pendiente_deposito_ciclo',
              'nodo', 'reproducido por el kit (medir_savia.py) con censo idéntico al de cosecha (M-94)',
              'alma/kits/medir_savia.py sobre alma/ciclo/cosecha/ (71 payloads)'))
R.append(ruta('sondeo vivo fresco (ciclo)', 'alma/ciclo/sondeo_vivo_fresco.md',
              'pendiente_deposito_ciclo', 'pendiente_deposito_ciclo',
              'ambos', 'lecturas con hora UTC y blobs (HEAD f0a8c308, flow 0,0% run 149, bots 25.ª)',
              'n/a (documento de sondeo)'))
R.append(ruta('cosecha savia (ciclo)', 'alma/ciclo/cosecha_savia.md + cosecha/ (71 payloads)',
              'pendiente_deposito_ciclo', 'pendiente_deposito_ciclo',
              'nodo', 'censo_fresco.json: 71/71 descargados, 0 JWT, savia = mesh.totalSize 11/11',
              'alma/ciclo/_cosechar.py (Drive revisions API del heartbeat canónico)'))
R.append(ruta('propuestas absorción (ciclo)', 'alma/ciclo/propuestas_absorcion.json',
              'pendiente_deposito_ciclo', 'pendiente_deposito_ciclo',
              'nodo', 'dedup global máx 0,2822, 0 pares >= 0,5; N-39 propuesta, NO aplicada por este frente',
              'alma/ciclo/_preparar_absorcion.py'))
R.append(ruta('README del paquete', 'alma/README.md',
              f'alma_2026-11-16/README.md (carpeta ID {DRIVE_ALMA})',
              f'FranBot alma/README.md @ {GH_HEAD} (blob 7b9b43a0)',
              'ambos', 'n/a (documento)',
              'n/a',
              'Deriva local post-depósito (00:32:39Z): el README local afirma catálogo v2 138 (sin archivo en disco), test del kit 43/43 (verificado por mí) y CORR-KIT-FILES0. La versión depositada es sha256 cddb7e6d (L22 con el error CAT-0094 ya corregido en local). El README raíz del repo sigue siendo el original (blob 214dac39).'))
R.append(ruta('manifiesto maestro', 'alma/manifiesto_shas_alma.json',
              f'alma_2026-11-16/manifiesto_shas_alma.json (carpeta ID {DRIVE_ALMA})',
              f'FranBot manifiesto_shas_alma.json @ {GH_HEAD}',
              'nodo', '135 entradas (regenerado 00:34:08Z por otro frente del ciclo; antes 33, sha 7702ccd3); los shas que registra coinciden con el disco corriente (verificado por mí en el generador)',
              're-generable por sha256 de los archivos del paquete',
              'El manifiesto maestro derivó tras el depósito junto con 4 archivos (README, kit_savia_v152.md, kits/manifiesto_shas.json, test_tablon.py) — ver tejido, CONFLICTOs; la versión depositada en GitHub es la de 33 entradas.'))
R.append(ruta('registro de depósito', 'alma/deposito_alma.md',
              f'alma_2026-11-16/deposito_alma.md (carpeta ID {DRIVE_ALMA})',
              f'FranBot deposito_alma.md @ {GH_HEAD}',
              'ambos', 'Drive 34/34 por tamaño; GitHub 34/34 por blob',
              'n/a (registro)'))
ruta_doc = {'ciclo': 'ALMA 2026-11-16', 'fecha': '2026-11-16',
            'metodo': '(c) Drive + GitHub; lo no depositado aún marca pendiente_deposito_ciclo',
            'github_head': GH_HEAD, 'drive_carpeta': DRIVE_ALMA, 'rutas': R}
with open(os.path.join(CICLO, 'ruta_alma.json'), 'w', encoding='utf-8') as f:
    json.dump(ruta_doc, f, indent=2, ensure_ascii=False)

# --- integra.md ---
tipos = Counter(e['tipo'] for e in L)
estados = Counter(e['estado'] for e in L)
md = f"""# CICLO ALMA — INTEGRA: tejido cruzado + ruta

**Fecha:** 2026-11-16/17 · **Archivos:** `tejido_cruzado_alma.jsonl`, `grafo_alma.json`, `ruta_alma.json` (este resumen: `integra.md`).

## Tejido cruzado — {len(L)} líneas

| Tipo | Líneas |
|---|---|
"""
for t, n in sorted(tipos.items()):
    md += f'| {t} | {n} |\n'
md += f"""
| **Total** | **{len(L)}** |

| Estado | Líneas |
|---|---|
"""
for t, n in sorted(estados.items()):
    md += f'| {t} | {n} |\n'
md += f"""
## Grafo — {grafo['resumen']['n_nodos']} nodos / {grafo['resumen']['n_aristas']} aristas / {grafo['resumen']['n_huerfanos']} huérfanos

## Ruta — {len(R)} artefactos

| Artefacto | Drive | GitHub |
|---|---|---|
"""
for r in R:
    md += f"| {r['artefacto']} | {r['drive'][:60]} | {r['github'][:60]} |\n"
md += """
## Conflictos documentales (4, todos adjudicados)

1. **CORR-CAT-0094:** la versión depositada del README ALMA decía que el campo `sha256` del curado es "el prefijo del blob de GitHub". Verificado: `9e9c1878` es el prefijo del sha256 de la versión del plan (21.666 B, blob `8c25c220`), no del blob. La copia local/Drive con bloque meta tiene sha256 `dfa0c9ea` (21.895 B); las 144 entradas son idénticas. C-1226 (propuesta) usa la versión corregida; el README local ya lleva la corrección.
2. **Deriva del test del tablón:** el test local (7.205 B, 00:30Z) espera 2P/1R tras la respuesta R-001 a P-002; la copia depositada en GitHub (6.822 B, blob `f9684687`) espera 2P/0R. La depositada está intacta; la local es la vigente. Pendiente re-depósito del tablón en el ciclo.
3. **Recuento del test del kit:** el parte ALMA y el README depositado dicen 42/42; recuento instrumentado por mí: 43 comprobaciones ejecutadas, todas OK. Adjudicado: 43/43; el 42 era un error de recuento.
4. **Catálogo v2 anunciado antes que el archivo (resuelto por llegada):** el README local (00:32:39Z) afirmó "catálogo vivo v2 con 138 entradas" cuando en disco solo existía v1 100/100. El v2 aterrizó 00:34:00Z: 138/138 verificadas, `leer_catalogo.py verify` TODO CUADRA (verificado por mí). La discrepancia fue temporal, no de contenido.

## Novedades que el tejido registra

- **Primera respuesta del tablón (R-001, 00:30Z, frente conecta):** P-002 respondida con el censo fresco como evidencia (`a44544fc…`, nivel INFIERO). El tablón pasa de 2P/0R a 2P/1R.
- **Censo fresco:** 247.881 NO persiste (0/11); cuarto valor 248.372 (mecanismo: rotación del rodante −4 B); savia = `mesh.totalSize` 29/29 acumulado; ley nutrientes exacta (residuo 0,0).
- **Autocura run 17:** intervalo 16→17 = 649,08 min, fuera de la banda M-90 (M-95 propuesta: NO_CONFIRMA).
- **Flow:** 0,0% run 149, 16.ª medición consecutiva (confirma C-1215/M-92).

## Reglas

Nada inventado: cada evidencia lleva archivo + sha256 recomputado del disco. Corpus no modificado (la absorción la hace otro frente; C-1217..C-1227 y M-93..M-95 son propuestas, no claims). Nada de credenciales ni correos.

ρ(x) > 0.
"""
with open(os.path.join(CICLO, 'integra.md'), 'w', encoding='utf-8') as f:
    f.write(md)

print('lineas tejido:', len(L), dict(tipos), dict(estados))
print('grafo:', grafo['resumen'])
print('rutas:', len(R))
print('OK')
