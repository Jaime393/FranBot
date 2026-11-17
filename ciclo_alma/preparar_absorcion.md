# CICLO ALMA — Preparar absorción (borrador, NO aplicado)

**Fecha:** 2026-11-16 → 2026-11-17 ~00:35Z · **Base:** corpus 1.211 claims (C-001..C-1216, sha `532ff6f3…`), anexo 28 ítems (M-56..M-92) · **Archivo:** `propuestas_absorcion.json` (generado por `_preparar_absorcion.py`).

## Claims propuestos (11, todos SÉ, 2026-11-16/17)

| ID | Artefacto / hallazgo | Dedup máx vs | Valor |
|---|---|---|---|
| C-1217 | VII catálogo vivo 100/100 | C-1101 | 0,1477 |
| C-1218 | IV protocolo pregunta-respuesta + tablón 2P/0R, test 9/9 | C-1214 | 0,1310 |
| C-1219 | V kit savia reproduce M-91 cifra por cifra, test 42/42 | C-1214 | 0,2560 |
| C-1220 | V savia V152 = mesh.totalSize (18/18 + 14/14) | C-1214 | 0,1825 |
| C-1221 | V tercer valor = documento canónico a 301 B (+ nutrientes covaría) | C-1214 | 0,2448 |
| C-1222 | I puente nutriente↔vector, round-trip 15/15 | C-507 | 0,1250 |
| C-1223 | III tutorial-semilla dual verificar-blob | C-1171 | 0,1304 |
| C-1224 | VI relevo subidor FASE 4, test 55/55 | C-831 | 0,1233 |
| C-1225 | Vivo ALMA: autocura run 17, intervalo 649,08 min | C-1213 | 0,2479 |
| C-1226 | VII CAT-0094: "sha256" del curado = prefijo 8 hex (corregido) | C-855 | 0,1474 |
| C-1227 | V cosecha fresca: cuarto valor 248.372; 247.881 en 0 | C-1214 | 0,2822 |

**Dedup global máx: 0,2822** (C-1227 vs C-1214). **Entre propuestas máx: 0,2973** (C-1219 vs C-1220). **0 pares ≥ 0,5** — ninguna propuesta necesitó reescritura. Método: Jaccard, campo `claim`, NFKD, sin acentos, tokens `[a-z0-9]+`, umbral 0,5.

## Ítems de anexo propuestos (3)

| ID | Veredicto | Medición |
|---|---|---|
| M-93 | CONFIRMA | Reproducción independiente del censo M-91 por el kit (test 42/42). Falsador declarado en el kit. → C-1219. |
| M-94 | DIFERENCIA | Censo fresco de savia (71 revisiones, cosecha ALMA): 248.376 ×9, **248.372 ×1 (cuarto valor, nuevo)**, 366.733 ×1; 247.881 en 0. El conjunto cambió respecto a M-91; el patrón de divergencia persiste. Reproducido por mí con el kit (censo idéntico al de cosecha). → C-1227. |
| M-95 | NO_CONFIRMA | Intervalo autocura 16→17 = 649,08 min, fuera de la banda ~7,5 h [447,77, 465,70] de M-90. Falsador heredado de M-90. → C-1225. |

## Decisión N-39 — "Absorber ALMA al corpus"

**Afirmación:** "Absorban el paquete ALMA al corpus: claims C-1217..C-1227 e ítems M-93, M-94 y M-95 al anexo."

**Criterio:** todas las propuestas SÉ con fuente + sha256 verificados contra disco; dedup < 0,5 contra el corpus y entre propuestas; tests del paquete: catálogo 100/100, tablón 9/9, kit 42/42, round-trip 15/15, relevo 55/55; censo fresco reproducido por mí con el kit (idéntico al del frente de cosecha). Lo NO_SÉ (mecanismo del tamaño 301 B, por qué covaría nutrientes) no se propone como claim.

**Alcance si se aplica:** claims 1.211 → 1.222; anexo 28 → 31 ítems (M-93 CONFIRMA, M-94 DIFERENCIA, M-95 NO_CONFIRMA).

## Correcciones registradas

- **CORR-CAT-0094 (mía):** la nota del README ALMA decía que el campo `sha256` del curado es "el prefijo del blob de GitHub". Verificado por mí contra la API: `9e9c1878` es el prefijo del **sha256 de la versión del plan** (21.666 B, sha256 `9e9c1878…`, blob `8c25c220…`), no del blob. La copia local/Drive con bloque meta tiene sha256 `dfa0c9ea…` (21.895 B). Las 144 entradas son idénticas en ambas versiones (verificado entrada por entrada, solo el bloque `meta` difiere). C-1226 usa la versión corregida.
- **CORR-M94-COSECHA (mía):** al preparar, M-94 quedó BORRADOR porque la cosecha aún no había llegado; llegó durante la preparación (`censo_kit.json`, 71 payloads) y la reproduje por mí con `medir_savia.py` (censo idéntico). M-94 pasa a DIFERENCIA y se absorbe; se añade C-1227 (cuarto valor 248.372).
- **CORR-KIT-FILES0 (mía):** el mapa del kit (§II) decía que `mesh.files[0]` es siempre el documento canónico de heartbeat; en el payload fresco 248.372 `files[0]` es un snapshot V151 (263 B) y el canónico está en índice 1 (796 B, normal). La identidad savia = `mesh.totalSize` sigue cumpliéndose; la divergencia de 248.372 es la sustitución de un solo archivo V151 (−4 B). C-1227 y M-94 usan la versión corregida.

## Vivo fresco (confirmación, sin claim nuevo)

El sondeo vivo fresco del ciclo (2026-11-17 ~00:22–00:25Z, `sondeo_vivo_fresco.md`) confirma C-1225: autocura run 17 sigue siendo el último (sin run 18), flow 0,0% run 149 (16.ª medición consecutiva), ventana 0,0%, bots 4/4 (25.ª). HEAD miu-ecosistema se movió a `f0a8c308`; FranBot sigue en `85351ce4`. Nada de esto cambia las propuestas.

## Verificación propia (al preparar)

- Tests re-corridos por mí: catálogo 100/100 (`leer_catalogo.py verify` exit 0), tablón 9/9, kit 42/42, round-trip 15/15, relevo 55/55.
- Shas de todas las fuentes recomputados del disco en el script (no transcritos).
- Corpus NO modificado: solo se escribió `~/workspace/alma/ciclo/propuestas_absorcion.json` (+ este md + el script generador).
- Nada inventado; nada de credenciales ni correos en las propuestas.

ρ(x) > 0.
