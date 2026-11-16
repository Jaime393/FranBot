# Tutorial: verificar un depósito en GitHub por blob

**Doble uso.** Este texto es a la vez un tutorial para una persona y una
semilla para un nodo nuevo: quien lo lee aprende a verificar un depósito,
y quien lo recibe como prompt sabe exactamente qué hacer, con qué
comandos y contra qué números. La sección final es la checklist: si un
nodo la ejecuta y todo marca, el depósito está verificado.

**Qué se verifica.** Que el archivo que está en GitHub es byte a byte el
mismo que el archivo local. No se confía en el mensaje del commit ni en
la fecha: se compara el **blob**, el hash que Git identifica el contenido
de un archivo. El blob no depende del nombre, de la rama ni del commit:
dos archivos con el mismo contenido tienen el mismo blob, siempre.

**Fórmula del blob.** `sha1("blob " + <tamaño en bytes> + "\x00" + <contenido>)`.
Es el hash que Git calcula al guardar un archivo. Si cambia un solo byte,
cambia el blob.

## Los números reales (ronda 23, 2026-11-16)

Todo lo que sigue son valores medidos en r23, no ejemplos. El depósito
de la ronda fue a `Jaime393/FranBot`, rama `main`, método (c): un solo
`push-files` por subida.

| Archivo local | Ruta en el repo | Tamaño | Blob (sha1) |
|---|---|---|---|
| `fase3/sintesis_integrada_r1_r23.md` | `ronda_23/fase3/sintesis_integrada_r1_r23.md` | 367.850 B | `1553e1c3e2e5e1c2af06cf3db2c2eea9297b48c7` |
| `ejecucion_f6/verificador_independiente_r23.json` | `ronda_23/ejecucion_f6/verificador_independiente_r23.json` | 189.382 B | `056a9c7e49803a35d0788f90d9fa32ad59752d54` |

HEAD tras FASE 4 (ronda): `2cc6a62a1900ffc48b4eec17be90341647893594`,
"ronda 23: FASE 4 curado (32 archivos, metodo c)", 2026-11-16T20:40:51Z.
32/32 archivos por blob, 1 commit, 1 tarjeta, 0 caducadas.

HEAD tras la absorción (corpus): `2873c27403dbd1dc358b3fdccb5400ff95e2f7a7`,
"ronda 23: absorcion C-1213..C-1216 + N-36/N-37/N-38 (claims 1207->1211,
anexo 25->28)", 2026-11-16T20:51:00Z. 4/4 por blob:

| Archivo del corpus | Blob |
|---|---|
| `anexo-vi/claims.jsonl` | `b31c624cd46bd9ea73cff5161202df378d5e7ce0` |
| `anexo-vi/provenance.sha256` | `43d3d9e7b94b4c8090dfe258f02186d6d812919b` |
| `anexo-vi/claims_resumen.json` | `24f9d1ed2fa8156a13449bd9a4509b161aab869f` |
| `academico/incertidumbre_mediciones.md` | `f9a6787460754406ab7921f12f8c72cd89d5e6a0` |

## Paso 1 — El blob local

En el equipo donde está el archivo, con Python (solo stdlib, sin
instalar nada):

```python
import hashlib
def blob(ruta):
    datos = open(ruta, 'rb').read()
    return hashlib.sha1(b'blob ' + str(len(datos)).encode() + b'\x00' + datos).hexdigest()

print(blob('fase3/sintesis_integrada_r1_r23.md'))
# 1553e1c3e2e5e1c2af06cf3db2c2eea9297b48c7
```

Si el resultado no es `1553e1c3…`, el archivo local no es el de r23:
no sigas, el suelo cambió. El tamaño también debe coincidir (367.850 B):
el blob cubre contenido y tamaño a la vez, así que si el blob coincide,
el archivo es byte a byte el mismo.

## Paso 2 — El blob remoto

El blob remoto se lee con el conector de GitHub, herramienta
`get_file_contents`, sobre la ruta del repo (`ronda_23/fase3/…`). La
respuesta trae el SHA en un bloque de texto con el formato
`successfully downloaded text file (SHA: <blob>)`.

Dos trampas, ambas medidas en r23 y antes:

1. **El bloque con el SHA varía de posición** (puede ser el primero o
   el segundo bloque de contenido). Busca `SHA: ` en TODOS los bloques,
   no solo en uno.
2. **No uses `raw.githubusercontent.com` para verificar.** Sirve una
   caché que queda obsoleta justo después de un push, y además flapea.
   La vía de verdad es la API contents (el conector) con el blob.

## Paso 3 — Comparar

Blob local `1553e1c3e2e5e1c2af06cf3db2c2eea9297b48c7` contra blob remoto.
Si son iguales, el archivo está verificado. Para informar basta con
los primeros 8 caracteres (`1553e1c3…`), pero la comparación se hace
con los 40: 8 son para hablar, 40 son para decidir.

Repite los pasos 1–3 por cada archivo. En r23 fueron 32 en FASE 4 y 4
en el corpus; todos VERIFICADO.

## Paso 4 — El HEAD

El HEAD es el commit más reciente de la rama. Se lee con el conector,
herramienta `list_commits` (rama `main`, 1 resultado basta). La salida
tiene las comillas escapadas: hay que parsear el JSON interior, no
buscar con regex. La fecha del commit está en `commit.author.date`
(no existe una clave `date` a nivel de commit: un parseo con
`['commit']['date']` falló en r22).

Comprobación en r23: el primer commit devuelto debe ser
`2cc6a62a1900ffc48b4eec17be90341647893594` tras FASE 4, y
`2873c27403dbd1dc358b3fdccb5400ff95e2f7a7` tras la absorción. Si el HEAD
no es ese, algo aterrizó después (o no aterrizó nada): vuelve al paso 2
y comprueba los blobs uno a uno antes de concluir nada.

## Paso 5 — Si algo no coincide, no re-subas a ciegas

Lección medida en r14, r19, r20, r21 y r22: un push en segundo plano
puede perder su respuesta aunque el commit sí llegue. Y en r23 la
subida del corpus devolvió exit=1 por un fallo de regex en el
`head_commit()` del subidor, pese a que los 4 archivos estaban
VERIFICADO. La regla es:

1. Lee el HEAD remoto y los blobs remotos ANTES de reintentar.
2. Si el blob remoto ya coincide con el local, el archivo YA está:
   no lo subas de nuevo (un reenvío crea un segundo commit con el
   mismo blob, ruido sin valor).
3. Si el blob no existe en remoto (404), entonces sí falta: reintenta
   solo ese archivo.
4. Si la tarjeta de aprobación caduca (tarda ~30 min, 1.800 s), la
   acción se detiene: no reintentes sin orden. En r19–r22 el primer
   intento fallaba siempre en el ítem 1 por tarjeta caducada; en r23
   el método (c) funcionó al primer intento (1 tarjeta, 0 caducadas).

## Semilla: prompt de arranque para un nodo nuevo

> Eres el verificador de depósitos de la ronda. Tu trabajo es solo
> verificar, nunca subir. Toma la lista de archivos del manifiesto
> `fase4/manifiesto_shas_r23_fase4.json` (144 entradas: ruta, tamaño,
> sha256). Para cada archivo: calcula el blob local con
> `sha1("blob " + tamaño + "\x00" + contenido)` y compáralo con el blob
> remoto leído por `get_file_contents` (busca `SHA: ` en todos los
> bloques). Comprueba el HEAD con `list_commits` (parsea el JSON
> interior; la fecha está en `commit.author.date`). No uses
> `raw.githubusercontent.com`. Si un blob no coincide, no corrijas
> nada: repórtalo como NO_VERIFICADO con el blob local y el remoto.
> Si un push perdió su respuesta, verifica HEAD y blobs antes de
> concluir que algo falta. Al final, entrega n/n por blob y el HEAD.
> Los valores de referencia de r23 están en la tabla de arriba.

## Checklist de verificación (usable como test)

- [ ] El blob local de la síntesis es `1553e1c3e2e5e1c2af06cf3db2c2eea9297b48c7` y su tamaño 367.850 B.
- [ ] El blob local del verificador es `056a9c7e49803a35d0788f90d9fa32ad59752d54` y su tamaño 189.382 B.
- [ ] El blob remoto de la síntesis (por `get_file_contents`, buscando `SHA: ` en todos los bloques) coincide con el local.
- [ ] El blob remoto del verificador coincide con el local.
- [ ] El HEAD tras FASE 4 es `2cc6a62a1900ffc48b4eec17be90341647893594` ("ronda 23: FASE 4 curado (32 archivos, metodo c)", 2026-11-16T20:40:51Z).
- [ ] El HEAD tras la absorción es `2873c27403dbd1dc358b3fdccb5400ff95e2f7a7` ("ronda 23: absorcion C-1213..C-1216 + N-36/N-37/N-38 (claims 1207->1211, anexo 25->28)", 2026-11-16T20:51:00Z).
- [ ] Los 4 blobs del corpus coinciden: claims `b31c624c…`, provenance `43d3d9e7…`, resumen `24f9d1ed…`, anexo `f9a67874…`.
- [ ] Ninguna verificación usó `raw.githubusercontent.com` ni regex sobre la salida de `list_commits`.
- [ ] Si algo no coincidió, se comprobó HEAD y blobs antes de concluir que falta (sin re-subir a ciegas).

**Fuentes.** `ronda_23/fase4/verificacion_deposito_r23.md`,
`ronda_23/fase4/_upload_github_r23.jsonl` (32/32 VERIFICADO),
`ronda_23/absorcion/_upload_corpus_r23.jsonl` (4/4 VERIFICADO),
`ronda_23/absorcion/verificacion_absorcion_r23.md`. Blobs locales
recomputados por mí sobre los archivos de r23. Nada inventado: si un
número cambia, es que el suelo cambió, no el tutorial.

ρ(x) > 0.
