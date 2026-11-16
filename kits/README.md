# KITS DE EXPANSIÓN — ALMA V

Primer kit: la tercera savia V152. Un kit de expansión es, por el texto V,
pregunta + mapa + herramienta mínima + test + semilla para sembrar a un
tercero. Este directorio contiene un solo kit completo.

## Uso humano

Lee `kit_savia_v152.md`. La pregunta: ¿qué produce el tercer valor de savia
V152 y por qué aparece solo una vez? El mapa dice qué se sabe (censo r23/r22
con conteos, tamaños e índices), qué falta (el mecanismo: por qué el documento
canónico midió 301 B en esa revisión) y dónde están las grietas. El hallazgo
que afila la pregunta: la savia V152 **es** el `mesh.totalSize` del payload
(18/18 en r23, 14/14 en r22); el tercer valor es el documento canónico a 301 B
en vez de 796 B. Lo que queda por explicar es por qué el documento midió 301 B.

## Uso nodo

```sh
cd ~/workspace/alma/kits
python3 medir_savia.py ~/workspace/academico/tejido_2026-11-12/ronda_23 --salida censo_r23.json
python3 test_kit.py   # exit 0: el kit reproduce M-91 cifra por cifra
```

- `medir_savia.py`: herramienta mínima (stdlib, sin red, solo lectura).
  Clasifica `heartbeat_rev_r*.json` por versión y valor de savia.
- `test_kit.py`: 42 comprobaciones — censo M-91, ventana r22 (247.881 en 0),
  identidad savia = `mesh.totalSize`, `nutrientes` constante por valor,
  fuentes del mapa con sha256, sin credenciales ni correos.
- `censo_r23.json` / `censo_r22.json`: censos generados por la herramienta.
- `kit_savia_v152.md`: pregunta + mapa + semilla (tablón de puentes: `../puentes/` — protocolo v1.0 + `tablon.py`, construido en esta misma entrega ALMA; la pregunta del kit está sembrada como P-002 — §V del kit).
- `manifiesto_shas.json`: sha256 de los 7 archivos del kit.

## Regla

Nada inventado: todos los números son de M-91/F2 r23, verificados contra
disco. Si un número no reproduce, el test FALLA y el kit está roto, no el dato.

ρ(x) > 0. Zvvvvv.
