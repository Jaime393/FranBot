# Catálogo vivo ALMA VII

El catálogo de lo producido: cada artefacto que existe en el suelo,
con qué es, para quién sirve, qué test lo verifica, qué semilla lo
reproduce y qué fallos tuvo. No es un índice estático: es el suelo
donde cada nodo siembra lo que produce y lee lo que necesita.

**Fecha:** 2026-11-16 · **Versión:** 1.0 · **Entradas:** 100 (todas verificadas)
**Grupos:** producción fractal 49 · nutrientes 2026-11-14 15 · ronda_23 32 · corpus 4

## Uso humano: cómo buscar

El catálogo es un JSON legible: `catalogo_vivo.json`. Cada entrada tiene
`id` (CAT-0001..CAT-0100), `nombre`, `grupo`, `qué es`, `para_quién`,
`test`, `semilla`, `fallos` y `procedencia` (fuente + sha256 + fecha).

```bash
# listar todo
python3 leer_catalogo.py

# solo lo que sirve a nodos (datos, nutrientes, corpus)
python3 leer_catalogo.py --para-quien nodo

# solo lo dual (humano y nodo: informes, recetas, scripts)
python3 leer_catalogo.py --para-quien ambos

# un grupo entero
python3 leer_catalogo.py --grupo ronda_23

# ficha completa de una entrada
python3 leer_catalogo.py show CAT-0094
```

Regla de `para_quién`: los datos (`.json`, `.jsonl`, `.sha256`) son
para nodos; la prosa (`.md`) y las herramientas (`.py`, `.yaml`) son
para ambos — el humano las lee o las usa, el nodo las indexa o las
ejecuta. Ninguna entrada es solo para humanos: todo lo que se escribe
aquí lo lee también un nodo (idea III: dual por diseño).

## Uso nodo: cómo consumirlo como índice

```python
import json
cat = json.load(open("catalogo_vivo.json"))
# 1. Buscar por grupo y uso
for e in cat["entradas"]:
    if e["grupo"] == "nutrientes-2026-11-14" and e["para_quien"] == "nodo":
        print(e["id"], e["procedencia"]["fuente"])
# 2. Verificar antes de consumir: el sha256 de la procedencia debe
#    coincidir con el archivo en disco (o usar el lector):
#    python3 leer_catalogo.py verify   (exit 0 = todo cuadra)
# 3. Reproducir con la semilla cuando existe; si la semilla es NO_SÉ,
#    el artefacto es un documento de síntesis, no un generado.
# 4. Leer los fallos antes de reutilizar: ahí está el mapa de errores.
```

Esquema por entrada:

| Campo | Contenido |
|---|---|
| `id` | CAT-NNNN, estable |
| `nombre` | nombre del artefacto |
| `grupo` | producción-fractal / nutrientes-2026-11-14 / ronda_23 / corpus |
| `que_es` | qué es, en una frase |
| `para_quien` | humano / nodo / ambos |
| `test` | qué test lo verifica |
| `semilla` | qué lo reproduce (o NO_SÉ con el motivo) |
| `fallos` | qué fallos tuvo (o "ninguno registrado") |
| `procedencia` | fuente (ruta local) + sha256 real + fecha |
| `verificado` | true solo si el sha se comprobó en disco |
| `github` | repo, ruta, blob, head/commit |
| `nota` | solo cuando la copia en GitHub difiere de la local por diseño |

## Cómo crece: sembrar una entrada nueva

1. El artefacto debe existir en disco (o en GitHub con blob verificado).
2. Su sha256 se lee del archivo, nunca se inventa. Si no se puede
   verificar, la entrada se siembra con `verificado: false` y queda en
   `no_verificadas` hasta que alguien la verifique.
3. Se regenera con `_generar_catalogo.py` (o se añade a mano siguiendo
   el esquema) y se corre `python3 test_catalogo.py` (exit 0).
4. El catálogo no re-teje lo publicado: cada entrada apunta al artefacto,
   no lo copia.

## Verificación

```bash
python3 test_catalogo.py   # 100 entradas, 0 NO_VERIFICADO, lector verify exit=0
```

Nota documentada (no un error): la entrada CAT-0094
(`manifiesto_shas_r23_fase4.json`) tiene dos versiones por diseño — la
de GitHub es la del plan (144 entradas, sin bloque meta; blob 8c25c220)
y la local/Drive añade el bloque meta de verificación (sha dfa0c9ea…).
Las 144 entradas son idénticas en ambas.

ρ(x) > 0. Zvvvvv.
