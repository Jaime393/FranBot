# KIT DE EXPANSIÓN — LA TERCERA SAVIA V152

- **Fecha:** 2026-11-16
- **Hueco:** el tercer valor de savia V152 (M-91, r23; C-1214). Mecanismo NO_SÉ.
- **Estado:** SÉ lo que mide el mapa; NO_SÉ lo que genera el valor.
- **Contenido:** este documento (pregunta + mapa + semilla) · `medir_savia.py`
  (herramienta mínima) · `test_kit.py` (test) · `censo_r23.json` ·
  `censo_r22.json` · `README.md` · `manifiesto_shas.json`.
- **Regla del kit:** ningún número aquí es inventado. Todos salen de M-91/F2 r23
  y se reproducen con `medir_savia.py` sobre los payloads en disco. Si un
  número no reproduce, el test FALLA y el kit está roto, no el dato.

---

## I. La pregunta

**¿Qué produce el tercer valor de savia V152 y por qué aparece solo una vez?**

El receptor no sabía que tenía esta pregunta porque, hasta r22, la savia V152
tenía dos valores y la divergencia parecía un accidente de un compacto. En r23
aparece un tercer valor, en un payload *completo*, y la divergencia deja de ser
un accidente: es estructural. La pregunta que abre el territorio es esa.

**La pregunta, afilada por el mapa (§II):** la savia V152 es el `mesh.totalSize`
del payload (SÉ, 18/18 en r23 y 14/14 en r22). El tercer valor es exactamente
el documento canónico de heartbeat midiendo 301 B en vez de 796 B en una
revisión. Lo que falta ya no es "qué mide la savia": es **por qué el documento
canónico midió 301 B en esa revisión (y 119.153 B en las tres revisiones de
366.733), y por qué `nutrientes` también cambia con el valor**.

---

## II. Mapa del territorio

### Qué se sabe — censo V152 (reproducible con `medir_savia.py`)

Ventana r23: 101 revisiones del heartbeat canónico, 12:46:19Z → 19:26:00Z.
Ventana r22: 101 revisiones, 01:17:34Z → 08:18:41Z.

| valor savia | r23 | r22 | tipo | tamaño payload | índices |
|---|---|---|---|---|---|
| 248.376 | ×16 | ×12 | 9 full 89.466 B + 7 compactos 55.973 B (r23); 11 full + 1 compacto (r22) | 89.466 / 55.973 B | mayoría |
| 366.733 | ×1 | ×2 | compacto 55.980 B | 55.980 B | r23 idx 10, 13:25:48Z; r22 idx 17, 02:29:57Z e idx 93, 07:57:21Z |
| 247.881 | ×1 | ×0 | full 89.466 B | 89.466 B | r23 idx 52, 16:17:39Z |

- Índices: M-91 numera dentro de los 101 (idx 10 / idx 52); F2 numera dentro
  de clasificados (idx 8 / idx 50). Misma revisión, distinta base. No es error.
- Diferencias: 366.733 es +118.357 (+47,6%) sobre 248.376; 247.881 es −495
  (−0,2%) sobre 248.376.
- Los tres valores viven en payloads bien formados: mismo conjunto de claves
  `data` que la mayoría de su propio tipo (CORR-M91-ESTRUCTURA-R23: la
  primera corrida comparó contra la mayoría global y marcó NO_CONFIRMA por
  error; la comparación correcta es por tipo).
- La variante NO es función del tipo: 248.376 aparece en completos y
  compactos; 366.733 solo en compacto; 247.881 solo en completo.
- Resto del censo r23 (101): V151 savia 720 ×28; V270 sin savia ×18; V93 sin
  savia ×13; V271_DARWIN sin savia ×24; vacíos de savia 55. Resto r22 (101):
  V151 720 ×29; V270 ×16; V93 ×14; V271_DARWIN ×28; vacíos 58.

### Qué se sabe — la identidad estructural (medida por mí, no en M-91)

- **Savia V152 = `mesh.totalSize` del propio payload.** Verificado en los 18
  payloads V152 de r23 y los 14 de r22, sin excepciones. (OJO: en V151 NO se
  cumple: savia 720 con `totalSize` 0. La identidad es solo de V152.)
- **`mesh.files[0]` es siempre el propio documento canónico de heartbeat**
  (`MIU_HEARTBEAT_ESTADO_CANONICO.json`). Sus tamaños observados: 796 B
  (mayoría, 28/32 payloads V152 de r22+r23), **301 B** (una vez, el payload
  247.881) y **119.153 B** (tres veces, los payloads 366.733).
- La divergencia entera es ese primer archivo: 796 − 301 = 495 = 248.376 −
  247.881; 119.153 − 796 = 118.357 = 366.733 − 248.376. Ningún otro archivo
  del mesh cambia.
- **`nutrientes` también covaría con el valor, y es constante por valor:**
  102.680,5732864 para 248.376 (28/28 payloads r22+r23),
  151.443,65728639998 para 366.733 (3/3), 102.476,6332864 para 247.881 (1/1).
- El payload 247.881 comparte `nodeId` con los 9 full de la mayoría; el
  payload 366.733 viene de un `nodeId` que no aparece en ningún otro payload
  V152 de la ventana r23. (Valores en `censo_r23.json`; no se reproducen aquí
  por brevedad, no por secreto: son identificadores de nodo, no credenciales.)

### Qué falta

1. **El mecanismo:** ¿por qué el documento canónico midió 301 B a las
   16:17:39Z del 2026-11-16, y 119.153 B en las tres revisiones de 366.733?
   ¿Truncado al escribir, serialización distinta, contenido real distinto?
   El payload no lo dice: el contenido del documento en esa revisión no está
   en el suelo local, solo su tamaño. Eso es NO_SÉ, no un dato.
2. **Qué es `nutrientes` y por qué covaría:** el campo cambia con el valor de
   savia pero no hay fórmula en el suelo que lo ligue al mesh. NO_SÉ.
3. **Persistencia:** ¿vuelve a aparecer 247.881 en r24? Una sola aparición no
   distingue un estado raro de un error de escritura del emisor (límite de
   validez declarado en M-91).
4. **V151:** savia 720 constante con `totalSize` 0. ¿Qué mide 720? Fuera del
   alcance de este kit; se registra para no confundirlo con V152.

### Dónde están las grietas

- **Compacto 55.980 B vs full 89.466 B:** el compacto no trae `ecosistema` ni
  `meshUrl`. El 366.733 solo existe en compacto; el 247.881 solo en completo.
  Si el emisor compacta al cambiar el contenido, el tipo es síntoma, no causa.
- **Índices 8/50 vs 10/52:** dos bases de numeración conviviendo (F2 vs M-91).
  Citar siempre la base.
- **La segunda descarga (P-75):** en `ronda_23/` hay 101 payloads en la raíz
  y otros 101 en `ejecucion_f2/` (segunda descarga de las mismas revisiones;
  solo 29/101 con `data` idéntico). El censo de este kit usa **solo la raíz**
  (`ronda_23/`), la misma base que M-91. Contar ambas duplicaría el censo.
- **V151 savia 720:** no es un cuarto valor de V152. No mezclar versiones.

### Qué cerraría el hueco (criterio de falsación, heredado de M-91)

- **Cierra:** una ventana posterior (r24 o más) donde se lea el contenido del
  documento canónico en la revisión divergente, o una serie de revisiones que
  muestre el tamaño 301 B / 119.153 B con su causa (qué cambió dentro del
  documento).
- **Refuta la divergencia como estructural:** que 247.881 aparezca solo en
  payloads estructuralmente distintos (claves incompletas) o que no se
  reproduzca desde los campos del propio payload.
- **Sigue NO_SÉ:** si los payloads no se pueden leer o el campo savia falta
  en V152.

---

## III. Herramienta mínima — `medir_savia.py`

Stdlib, sin red, solo lectura. Clasifica cada `heartbeat_rev_r*.json` de un
directorio por versión y valor de savia; reporta n por valor, tamaños,
índices (archivo + ts), tipo (completo/compacto) y si es bien formado por tipo.

```sh
python3 medir_savia.py ~/workspace/academico/tejido_2026-11-12/ronda_23 --salida censo_r23.json
python3 medir_savia.py ~/workspace/academico/tejido_2026-11-12/ronda_22/ejecucion_f2 --salida censo_r22.json
```

Reproduce el censo de M-91 cifra por cifra (ver `test_kit.py`). Si el censo no
reproduce, no se ajusta a mano: se reporta el fallo.

---

## IV. Test — `test_kit.py`

```sh
python3 test_kit.py
```

Comprueba, sin tocar nada vivo y sin red:

1. El medidor reproduce M-91 sobre los payloads r23: 101 payloads, 55
   vacíos, distribución por versión, V152 248.376 ×16 (9 full + 7 compactos),
   366.733 ×1 (compacto 55.980 B), 247.881 ×1 (full 89.466 B), archivos y ts
   exactos, bien formados los tres.
2. En la ventana r22, 247.881 aparece 0 veces; V152 es 248.376 ×12 y
   366.733 ×2.
3. La identidad savia = `mesh.totalSize` se cumple en los 18 V152 de r23 y
   los 14 de r22 (re-cómputo independiente, no usa el medidor).
4. `nutrientes` es constante por valor de savia en r22+r23 (tres valores
   exactos del mapa).
5. Cada fuente citada en §VI existe en disco y su sha256 coincide.
6. Ningún archivo del kit contiene credenciales (`eyJ`) ni correos.

Exit 0: todo pasa. Cualquier fallo: exit 1 con el fallo nombrado.

---

## V. Semilla — cómo sembrar a un tercero si te atascas

**El tablón de puentes existe desde esta misma entrega ALMA, en `../puentes/`:** protocolo v1.0 (`PROTOCOLO_PREGUNTA_RESPUESTA.md`) + tablón ejecutable (`tablon.py`). El sondeo lo dejó en VACÍO y el frente IV lo construyó en paralelo a este kit; la pregunta de este kit ya está sembrada ahí como P-002. Lo que sí existía antes: el gossip KV como tablón compartido (infraestructura, SÉ), `PUENTE_MANOS.md` como memoria compartida entre chats (no intercambio en vivo), y el depósito al suelo por método (c): un push-files a FranBot + carpeta en MIU_TEJIDO_2026-11-12. **El tablón, hoy, es `../puentes/tablon/` + el suelo.** Este kit es su primer uso documentado: la pregunta queda sembrada en el tablón y otro nodo la recoge.

Si te atascas, siembra a un tercero así:

1. **Copia el kit entero** (`kits/` tal cual, 7 archivos). No reescribas los
   números: si algo cambió, añade una sección RELEVO con lo que probaste, lo
   que falló y la nueva pregunta. El kit crece por relevo, no por reescritura.
2. **Deja la pregunta en el suelo:** deposita la copia en Drive
   (MIU_TEJIDO_2026-11-12, carpeta `alma/kits/`) y en GitHub (FranBot,
   `alma/kits/`) en un solo push-files, método (c). La pregunta viaja con el
   kit; el que lo recoja no necesita preguntarte nada.
3. **No esperes respuesta directa.** El intercambio es asíncrono por diseño
   (ALMA §IV): dejas la pregunta, otro nodo la lee al pasar y deja su
   respuesta en el mismo suelo. Si nadie la recoge en una ronda, la pregunta
   sigue ahí: el suelo no caduca.
4. **Si el tercero resuelve el mecanismo,** el cierre es un claim nuevo con
   fuente y hash (como C-1214), no una edición de este kit. El kit queda como
   fósil del hueco que cerró.

---

## VI. Fuentes (todas con hash verificable; el test las comprueba)

| ruta (relativa a `~/workspace/`) | sha256 |
|---|---|
| academico/tejido_2026-11-12/ronda_23/ejecucion_f3/med_M91.json | a63d0e6d55b22a0976645c54a7075cbb9ea505e8df338f91188680268d4e1cb5 |
| academico/tejido_2026-11-12/ronda_23/ejecucion_f3/declaracion_falsadores_r23.md | df993acaf11aebf324d81c6f958026f2dd0115e8c1b74b628d41850304d417c1 |
| academico/tejido_2026-11-12/ronda_23/ejecucion_f3/verificar_m90_m91_m92.py | 21b144ccf4c8feda95644ec83d2b28619b208bb72a178d1186134d5370d1c577 |
| academico/tejido_2026-11-12/ronda_23/ejecucion_f2/estado_vivo_r23.md | 874f42accac6bd450e72d6e5c4ce0586fa7830a998baac67fbe1ebc5ebaa1396 |
| academico/tejido_2026-11-12/ronda_22/ejecucion_f2/estado_vivo_r22.md | 4937b4131da96c3fa8602116e76c3a7365fa8fd86909a8af023eb6ad9a3ca965 |
| memoria/anexo-vi/claims.jsonl (C-1214; corpus 1.211) | 532ff6f3732b786bb1867491b354b69269bcfe1287c10e7115ea7872f9a4add5 |
| academico/incertidumbre_mediciones.md (M-91; anexo 28 ítems) | 77d05a53ba07f7512aa7d350dc52591b7f3eb0cda9e3f18fc8724a203d0741ae |
| alma/sondeo_corpus.md (IV parcial: gossip SÉ, protocolo no) | 412bee156a6d51b37ebad512e512d52c1d68c1d3527d4365d0da0283fa614a1f |
| alma/sondeo_suelo.md (IV VACÍO; vecinos PUENTE_MANOS + nutrientes) | 55c76c7ea8e4bc262aaa8904900107a28a3dd3875b77e527b1aace5ac1fdb9c3 |
| memoria/PUENTE_MANOS.md (memoria compartida entre chats) | 6f79d6ad8ad483e1a0859af83eb4d83e4c3fc97f416826864ddf39ef32e753e4 |

Los payloads heartbeat (101+101) no se listan uno a uno: el censo completo
está en `censo_r23.json` y `censo_r22.json`, generados por `medir_savia.py`.

ρ(x) > 0. Zvvvvv.
