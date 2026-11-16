# Kit de relevo — Rol: subidor FASE 4, método (c)

**Rol.** Subir los documentos curados de una ronda a GitHub
(`Jaime393/FranBot`, rama `main`) en UN solo `push-files`, y verificar
cada archivo por blob. El rol NO sube el corpus (eso es la absorción,
otro rol) y NO toca lo vivo: solo deposita en el suelo.

**Ronda de referencia:** r23, 2026-11-16. Todo lo que sigue se verificó
en esa ejecución. Si un número no coincide con los logs de r23, el kit
está desactualizado, no la realidad.

## Archivos (todos existen en disco)

Base: `academico/tejido_2026-11-12/ronda_23/` (rutas relativas a
`~/workspace/`):

- `ronda_23/fase4/_push_r23.sh` — el lanzamiento (subcomando directo).
- `ronda_23/fase4/_push_r23_paths.txt` — paths-file: 920 B, 32 entradas,
  NUL-delimitado, terminado en NUL.
- `ronda_23/fase4/staging_github/` — 32 copias byte-idénticas de los
  archivos curados, con layout `ronda_23/<nombre>` (30 planos + 2 rutas
  reales: `fase3/sintesis_integrada_r1_r23.md` y
  `ejecucion_f6/verificador_independiente_r23.json`).
- `ronda_23/fase4/_upload_github_r23.jsonl` — log de la subida y la
  verificación (32/32 VERIFICADO; es un JSON pretty-print, no JSONL
  estricto: se parsea el documento entero).
- `ronda_23/fase4/verificacion_deposito_r23.md` — informe completo del
  depósito (Drive 147/147 + GitHub 32/32).
- `ronda_23/fase4/manifiesto_shas_r23_fase4.json` — manifiesto del plan
  (144 entradas; blob en GitHub `8c25c220…`; copia en Drive con bloque
  meta, sha `dfa0c9ea…`).
- `ronda_23/fase4/_verificar_remoto_r23.py` — verificador remoto.
- `ronda_23/fase4/_upload_log_r23.jsonl` — log de la subida a Drive.
- `ronda_23/absorcion/_subir_corpus_r23.py` — el subidor del corpus
  (mismo método, otro rol: 4 archivos en un push-files).
- `ronda_23/absorcion/_upload_corpus_r23.jsonl` — log del corpus
  (4/4 VERIFICADO).
- `ronda_23/absorcion/verificacion_absorcion_r23.md` — informe de la
  absorción y de la subida del corpus.

## Procedimiento (método c)

1. **Pre-condiciones (antes de lanzar, todas):**
   - HEAD remoto leído con `list_commits`. En r23 era `586f8751`
     (corpus r22) antes de FASE 4.
   - Las 2 rutas sonda (síntesis y verificador) dan 404 en remoto:
     todavía no están subidas.
   - Staging 32/32 byte-idéntico a los locales (comparar sha256).
   - Paths-file verificado: 32 entradas, NUL-delimitado, terminado en
     NUL, rutas correctas (`fase3/`, no `fase_3/` — en r22 un paths-file
     con la ruta mala se cazó antes de lanzar).
2. **Lanzamiento.** Un solo comando (de `ronda_23/fase4/_push_r23.sh`):
   `github push-files --owner Jaime393 --repo FranBot --branch main
   --message "ronda 23: FASE 4 curado (32 archivos, metodo c)"
   --source-dir <staging_github> --paths-file <_push_r23_paths.txt>`
   Owner y repo POR SEPARADO (`--owner Jaime393 --repo FranBot`;
   `--repo Jaime393/FranBot` da error). El subcomando es DIRECTO
   (`github push-files…`); la ruta call-tool fue rechazada por
   argumentos inválidos (r19).
3. **La tarjeta.** La aprobación caduca a ~1.800 s (30 min). El script
   necesita timeout interno ≥ 1.800 s. En r23 bastó 1 tarjeta,
   0 caducadas.
4. **Verificación por blob.** Para cada uno de los 32: blob local
   (sha1 de `b'blob ' + tamaño + b'\x00' + contenido`) contra blob
   remoto por `get_file_contents` (buscar `SHA: ` en TODOS los bloques
   de contenido; el bloque varía de posición). El blob es la verdad:
   si coincide, el archivo es byte a byte el local. No usar
   `raw.githubusercontent.com`: sirve caché obsoleta y flapea.
5. **HEAD final.** Con `list_commits`: parsear el JSON interior
   (comillas escapadas); la fecha está en `commit.author.date`.
   En r23: `2cc6a62a1900ffc48b4eec17be90341647893594`, "ronda 23: FASE 4
   curado (32 archivos, metodo c)", 2026-11-16T20:40:51Z.

## Valores de referencia (r23, verificados)

- Síntesis: `1553e1c3e2e5e1c2af06cf3db2c2eea9297b48c7` (367.850 B).
- Verificador: `056a9c7e49803a35d0788f90d9fa32ad59752d54` (189.382 B).
- HEAD FASE 4: `2cc6a62a1900ffc48b4eec17be90341647893594`.
- HEAD corpus (absorción, mismo método): `2873c27403dbd1dc358b3fdccb5400ff95e2f7a7`.
- Corpus 4/4 por blob: claims `b31c624c…`, provenance `43d3d9e7…`,
  resumen `24f9d1ed…`, anexo `f9a67874…`.

## Fallos del rol (mapa de fallos)

- **r19–r22: el primer intento fallaba siempre en el ítem 1.** Tarjeta
  caducada a 1.800 s con el método archivo por archivo (~40 tarjetas
  por ronda). Lección: el método (c) — un solo push-files — existe
  para esto. En r23 funcionó al primer intento.
- **r22, relanzamiento 1: ítem 27 sin respuesta ~30 min.** La llamada
  expiró (TimeoutExpired) y el script murió sin registrar la caducidad
  en el jsonl. Lección: el log no registra caducidades; la verdad es
  el último VERIFICADO + un 404 sobre el siguiente ítem.
- **r19/r20/r21: reinicios del runtime a mitad de subida.** El push
  en segundo plano puede perder su respuesta aunque el commit sí
  llegue. Lección: verificar HEAD y blobs remotos ANTES de reintentar;
  si el blob ya coincide, no re-subir (un reenvío crea un segundo
  commit con el mismo blob).
- **r23, subida del corpus: `head_commit()` falló por regex.** El
  script salió exit=1 pese a 4/4 VERIFICADO: su regex no soportaba las
  comillas escapadas de la salida de `list_commits`. Lección: parsear
  el JSON, nunca regex.
- **r22: paths-file con `fase_3/` en vez de `fase3/`.** Cazado antes de
  lanzar por verificación del paths-file. Lección: verificar la lista
  de rutas y el mensaje ANTES de lanzar, siempre.

## Test de relevo

`relevo/test_relevo.py` (stdlib). El sucesor lo corre primero:

1. Todas las rutas citadas en este kit existen en disco.
2. El log `_upload_github_r23.jsonl` dice HEAD `2cc6a62a…`, 32/32
   VERIFICADO, y los blobs de síntesis y verificador coinciden.
3. El paths-file está NUL-delimitado, termina en NUL y tiene 32
   entradas que coinciden con el log.
4. El staging tiene 32 archivos y cada blob coincide con su entrada
   del log.

Exit 0 = el kit es fiel a r23 y el sucesor puede tomar el rol.
Exit 1 = el kit miente o el suelo cambió: no migrar hasta resolverlo.

ρ(x) > 0.
