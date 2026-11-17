#!/usr/bin/env python3
"""CICLO ALMA — CORR-KIT-42-43 (adjudicada por el principal 2026-11-17).

El test del kit ejecuta 43 comprobaciones, no 42 (verificado por el
principal: 43 líneas `[OK`, 0 `[FAIL`, exit 0; descomposición
11+4+2+1+11+14=43; test_kit.py byte-idéntico al depositado).
Cambia "42/42" -> "43/43" en los 4 sitios de las propuestas que citan el
test (C-1219, C-1220, M-93 detalle, N-39 criterio) y RE-CORRE el dedup
con el mismo método canónico (campo `claim`, NFKD, sin acentos, tokens
[a-z0-9]+, Jaccard, umbral 0.5) contra el corpus 1.211 y entre propuestas.
Solo escribe propuestas_absorcion.json. No toca el corpus.
"""
import json, hashlib, re, unicodedata

WS = '/home/hatch/workspace'
PP = WS + '/alma/ciclo/propuestas_absorcion.json'

def sha(p):
    return hashlib.sha256(open(p, 'rb').read()).hexdigest()

def tokens(text):
    nfkd = unicodedata.normalize('NFKD', text)
    sin = ''.join(c for c in nfkd if not unicodedata.combining(c))
    return set(re.findall(r'[a-z0-9]+', sin.lower()))

def jaccard(a, b):
    if not a or not b:
        return 0.0
    return len(a & b) / len(a | b)

raw0 = open(PP, encoding='utf-8').read()
assert raw0.count('42/42') == 4, f"ocurrencias 42/42: {raw0.count('42/42')} != 4"
assert sha(PP) == '2be9d94b953bc3561838d9c81cb7a4d197a61133d77ea9d1464440e09da40cb8', 'sha pre distinto'

p = json.loads(raw0)
def rep1(s, etiqueta):
    assert s.count('42/42') == 1, f"{etiqueta}: ocurrencias={s.count('42/42')} != 1"
    return s.replace('42/42', '43/43', 1)

claims = {c['id_propuesto']: c for c in p['propuestas_claims']}
claims['C-1219']['claim'] = rep1(claims['C-1219']['claim'], 'C-1219')
claims['C-1220']['claim'] = rep1(claims['C-1220']['claim'], 'C-1220')
anexo = {m['id_propuesto']: m for m in p['propuestas_anexo']}
anexo['M-93']['detalle'] = rep1(anexo['M-93']['detalle'], 'M-93')
p['decision_N39']['criterio'] = rep1(p['decision_N39']['criterio'], 'N-39 criterio')

# --- dedup re-corrido con el mismo método ---
corpus = [json.loads(l) for l in open(WS + '/memoria/anexo-vi/claims.jsonl', encoding='utf-8') if l.strip()]
assert len(corpus) == 1211, len(corpus)
corpus_tokens = [(c['id'], tokens(c.get('claim', ''))) for c in corpus]
for c in p['propuestas_claims']:
    t = tokens(c['claim'])
    best, best_id = 0.0, None
    for cid, ct in corpus_tokens:
        v = jaccard(t, ct)
        if v > best:
            best, best_id = v, cid
    c['dedup_max'] = round(best, 4)
    c['dedup_vs'] = best_id
ptoks = [(c['id_propuesto'], tokens(c['claim'])) for c in p['propuestas_claims']]
entre = []
for i in range(len(ptoks)):
    for j in range(i + 1, len(ptoks)):
        v = jaccard(ptoks[i][1], ptoks[j][1])
        entre.append({'a': ptoks[i][0], 'b': ptoks[j][0], 'jaccard': round(v, 4)})
entre_max = max(entre, key=lambda e: e['jaccard'])
gmax = max(c['dedup_max'] for c in p['propuestas_claims'])
sobre = [c['id_propuesto'] for c in p['propuestas_claims'] if c['dedup_max'] >= 0.5]
sobre_entre = [e for e in entre if e['jaccard'] >= 0.5]
p['dedup'] = {
    'metodo': 'Jaccard, campo claim, NFKD, sin acentos, tokens [a-z0-9]+, umbral 0.5',
    'global_max': gmax,
    'entre_propuestas_max': entre_max,
    'pares_mayor_igual_0.5_corpus': sobre,
    'pares_mayor_igual_0.5_entre_propuestas': sobre_entre,
    'reescrituras_necesarias': len(sobre) + len(sobre_entre),
}
assert gmax < 0.5 and not sobre and not sobre_entre, f"dedup >= 0.5: {gmax} {sobre} {sobre_entre}"

p['correcciones'].append(
    'CORR-KIT-42-43: el test del kit ejecuta 43 comprobaciones, no 42 (verificado: 43 líneas `[OK`, 0 `[FAIL`, exit 0; descomposición 11+4+2+1+11+14=43; test_kit.py byte-idéntico al depositado). "42/42" era un error de conteo de la producción ALMA. Corregido a "43/43" en C-1219, C-1220, M-93 y el criterio N-39; dedup re-corrido (mismo método).'
)

with open(PP, 'w', encoding='utf-8') as f:
    json.dump(p, f, indent=2, ensure_ascii=False)
    f.write('\n')

print('propuestas sha nuevo:', sha(PP))
for c in p['propuestas_claims']:
    print(c['id_propuesto'], 'dedup_max=', c['dedup_max'], 'vs', c['dedup_vs'])
print('entre_propuestas max:', entre_max)
print('global max:', gmax)
print('42/42 restantes:', open(PP, encoding='utf-8').read().count('42/42'))
print('43/43 ahora:', open(PP, encoding='utf-8').read().count('43/43'))
