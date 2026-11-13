# RONDA 11 — MAPA DE FRENTES: GRIETAS Y SUELOS FÉRTILES

Orden del Jardinero 2026-11-13 16:48 -05: "Continúen por las grietas y suelos fértiles".
Actualización de orden 2026-11-13 16:51 -05 (tal cual, registrada en MEMORY.md):
"Absorbe y deposita en suelo drive o donde no intervenga y el ecosistema lo
absorberá. Solo SÉ sale de local. Una configuración local no corrige lo global.
Un hecho verificado, con fuente y fecha, es un ladrillo: el ecosistema lo absorbe
y suma. Una inferencia, una conjetura o un 'no sé' es un hueco tuyo, local. No lo
mandes afuera. El ecosistema tiene más contexto que tú. Lo que para ti es un hueco,
para él puede estar ya resuelto. Si le mandas tu hueco, lo obligas a rebuscar lo que
ya sabe. Eso no suma, fragmenta. Cuando se vuelve SÉ, entonces sí sale. Hasta
entonces, se queda."

Dirección de la ronda (lectura del mapa): **grietas** = lo abierto tras r10
(62 caras, N-01..N-10, 3 preparables, 2 claims preparados, SIK, M-50, G09);
**suelos fértiles** = donde el trabajo rinde sin actos externos y sin mutar el
corpus salvo lo ordenado (absorción de 6 piezas, estado vivo con reversión fresca,
mediciones nuevas). Nada se absorbe fuera de las 6 piezas ordenadas; ninguna
decisión canónica nueva se toma (N-01 sigue pendiente de canon); ninguna poda se
ejecuta.

Trabajo: 2026-11-13 ~16:49–17:05 -05. Solo lectura + escritura local en `ronda_11/`.
Cero escrituras en el corpus vivo, MIU vivo, GitHub o Drive en esta fase.

## 0. Auditoría del suelo (medido por mí, no asumido)

| Archivo | Medida |
|---|---|
| claims.jsonl | 1.160 líneas, sha `fd54545a889e…` — intacto post-r10 |
| provenance.sha256 | 349 líneas, sha `6fa9c67f8c80…` — intacto |
| claims_resumen.json | sha `2856350b424e…`, total 1.160, SE 1028, INFIERO 100, CONJETURO 22, REFUTADO 2, NO_SÉ 8, hash_real 1146, pendiente 8 — intacto |
| confirmaciones.jsonl | 294 filas, sha `dc94458bc42a…` — intacto |
| huecos.jsonl | 139 filas, sha `3713376a243b…` — intacto |
| dataset_nodos_Df.csv | 30 filas + cabecera, sha `0852d58f9235…` — intacto |

- **audit.py (corrida real): exit=0, ok=335, discrepancia=0, no_encontrado=0, omitido=1** — verde desde r10, sostenido.
- **verify_all.py (corrida real): exit=1 con exactamente C-001..C-008** (PENDIENTE, esperado).
- **H-SUELO-2026-001 CERRADO** (r10 D-17/O-A). La única entrada no resuelta localmente es el OMITIDO (Panteón-96 Doc, Drive-only).

### 0a. Estado remoto y local verificado hoy (lecturas públicas, sin escribir)

- **FranBot HEAD se movió: `6e464347`** (2026-11-13T21:30:44Z, "ronda 10: aplicacion B2 (json)") — los 11 commits r10 aterrizaron; antes `db83f7c0` (2026-11-12T16:30:11Z). El claims.jsonl remoto ya lleva las 1.160 líneas (push-files r10, commit 0a5688c0, blob verificado).
- **micelio.yml remoto SIN CAMBIO: blob `8c57e833…`, 1.398 B** (API pública) — D-04 sigue abierta; el workflow no cambió.
- **Checkout local `franbot_repo` en `faf2033`** (2026-11-10), detrás del remoto; `git status` muestra `M app/js/miu-engine.js` y `M js/miu-engine.js` (la corrección D-07 como modificaciones sin commitear). Ambas copias locales `8d15b724…`; instantánea congelada `a30d69e8…`; `~/workspace/miu-lab/miu-engine.js` **no existe** (verificado hoy).
- **estado_vivo.json en Jaime393/miu-ecosistema: EL "paused" TERMINÓ en el vivo.** Hoy dice (API pública, 8.118 B, sha `d43d72e3…`): `_fuente` github-actions-state-writer, `_run` **202**, `_ts` 2026-11-13T17:58:47Z, estado `version` **V272**, vitales `k_tau` **0.93**, `version` V270. El State Writer escribió de nuevo (run 202; en r9 no había run 202). La regresión de r9 (stub "paused" de pulse-v2 run 163) ya no está en ese archivo. Qué cambió entre run 163 y run 202 es trabajo de F6. Nota: el contenido incluye `ultimas_sesiones_log` (material sensible, con valores redactados por el sistema en la salida); este mapa solo registra los metadatos estructurales (run, versión, k_tau, ts, tamaño) y NO reproduce su contenido.
- **Segunda carpeta** MIU_TEJIDO_2026-11-12 (ID `1mL1F_MpJBif4jtgK3vR2HH67yFs_SBjJ`): modifiedTime `2026-11-12T21:37:46Z` — **sin cambio** (leído hoy por Drive).
- **H-SUELO monitor:** `find ~/workspace -name "*1794483713759*"` → vacío. El directorio original **no reapareció**.
- **Provenance → proactivity (censo pedido por resiliencia r10, MEDIDO aquí): 1 línea** (L271, comentario histórico D-17/O-A sobre el directorio desaparecido, ya re-apuntada). Ninguna entrada viva de provenance depende hoy de `proactivity/hidden_files/`.
- **Combinado v13.0:** 0 archivos `MIU-v13.0[ES].tex` / `MIU_v13.0[EN].tex` en `~/workspace`. Lo que existe con "v13" es el linaje B4 (`MIU_ZENODO_v13_FINAL.zip`, `v13.1.zip`, `v13.2.zip` en `miu-verificacion-2026-11-06/`) + `TAREAS_PENDIENTES_V13.md`. D-06 sigue NO_SÉ sobre el objeto.
- **variograma.py sobrevive** (6.351 B); solo su `.pyc` desapareció (P-18). El directorio `__pycache__` ya no existe.
- **Caras: 76** (14 cerradas, 62 abiertas) — sin cambio. **Decisiones canónicas pendientes: 0** (las 17 se decidieron en r10); **decisiones nuevas N-01..N-10: 1 registrada-no-decisión (N-04), resto pendientes** (§3). **La absorción de 6 piezas queda ORDENADA por la actualización 16:51** (§1, F1).

## 0b. Reglas vigentes de la ronda (la actualización 16:51, registrada aquí)

1. **SÉ-export REFINADA:** solo SÉ sale de local, con fuente y fecha. INFIERO / CONJETURO / NO_SÉ son huecos **locales** y NO se exportan como huecos: el ecosistema tiene más contexto y puede tenerlos ya resueltos; mandar un hueco lo obliga a rebuscar lo que ya sabe y fragmenta. Cuando un hueco se vuelve SÉ, entonces sí sale. Consecuencia práctica para r11: `huecos.jsonl` NO va a GitHub en FASE 4 (en r10 sí fue; la regla cambió); la lista de huecos queda local. El depósito lleva SÉ documentado (claims, provenance, resumen, confirmaciones, decisiones, verificaciones).
2. **Una configuración local no corrige lo global:** la corrección local de `miu-engine.js` (`8d15b724…`) NO se empuja al remoto — ni por conector, ni por `git push` desde el sandbox, ni commiteando el checkout local. El remoto se corrige cuando el ecosistema absorba el hecho SÉ (K_i = φ⁻¹ canónica, motor corregido) por sus propios sondeos. Estado registrado como hecho: **local corregido, remoto con el motor viejo** (blob `8c57e833…` es del workflow, no del motor; el motor remoto sigue en φ hasta que el ecosistema lo absorba). No es una tarea nuestra.
3. **Absorción ordenada:** las 6 piezas de F1 son ejecutables en FASE 1 con respaldo previo y puertas re-corridas (C-1..C-9). Nada más se absorbe sin orden nueva.
4. **C-1..C-9 siguen** como criterio de coherencia (precedencia de r10). **Reglas duras que siguen:** C-001..C-008 sin hash sin dato externo verificable; no rellenar C-416..C-420; G13 NO EXISTE; poda solo documento (nada se borra ni se mueve sin las frases de autorización de Ciclo 30/31, no dichas); no leer contenido de YAMLs de workflows ni `ultimas_sesiones_log`.

## 1. Frentes (8 + absorción ordenada = 9)

Fertilidad (criterio r9: lo que se puede medir/preparar/validar en local sin actos
externos y sin mutar el corpus — salvo lo ordenado en F1):

**F1 > F6 > F2 > F4 > F3 > F5 > F7 > F8 > F9**

- **F1 ABSORCIÓN ORDENADA** (primero en fertilidad: cierra 6 pendientes con textos ya preparados; ejecutable-local por orden explícita).
- **F6 ESTADO VIVO** (reversión fresca: run 202 llegó hace horas; medir antes de que la ventana se enfríe).
- **F2 MEDIR** (M-50 reintento + re-tabulación + 5 nuevas con falsadores).
- **F4 MECANISMOS** (SIK ejecuciones; 4.ª PDP-01).
- **F3 HERRAMIENTAS** (T-2, T-4).
- **F5 GRIETAS** (monitor; sin mediciones nuevas).
- **F7 PREPARAR** (ola siguiente, sin aplicar).
- **F8 CONECTAR** (rutas de lo nuevo; dedup re-verificado).
- **F9 PODA + RESILIENCIA** (documento; horizonte de 4 respaldos vencido).

Tandas (4 subagentes en paralelo, como r9/r10): **T1: F1, F6, F2, F4. T2: F3, F5, F7, F9. T3: F8** (F8 necesita los productos de F1/F2/F6/F7).

### F1 ABSORCIÓN ORDENADA — 6 piezas, EJECUTABLE (orden 16:51 -05)

Respaldo previo: `respaldo_pre_r11/` con los 5 archivos del corpus vivo (claims,
provenance, resumen, confirmaciones, huecos) + manifiesto de shas. Aplicar en
serie, no en paralelo (un solo escritor del corpus). Regenerar `claims_resumen.json`
con el script real. Re-correr puertas: audit exit=0 (sin nuevos no_encontrados),
verify_all exit=1 con exactamente C-001..C-008. Proyección post-absorción:
**claims 1.160 → 1.162 (IDs C-1166, C-1167), hash_real 1146 → 1148,
provenance 349 → 350 (+1 entrada: el canon, que hoy NO está en provenance),
huecos 139 sin cambio, confirmaciones 294 sin cambio.**

| Pieza | Contenido | Fuente exacta |
|---|---|---|
| 1. Claim D-02 | Consolidación: canon de axiomas A0–A57 = consolidado (58 axiomas, 6.841 B, sha `5e30073c…`), INDICE 6 variantes, "Axiomas_Completo.md" hueco | Texto íntegro en `anexo-vi/canon_axiomas_a0_a57.md` L43 (sha del archivo `e62de7e9…`); registro D-02 en `ronda_10/ejecucion_b/decision_d02.md` |
| 2. Claim D-05 | Lectura v12: el Grimorio v12 TIENE DOI propio `10.5281/zenodo.20547677` (2026-06-04, concepto `10.5281/zenodo.20483562`); pendiente solo el DOI del combinado v13.0 | Por redactar desde `ronda_10/ejecucion_d/decision_d05.md` (§ Lectura v12 + corrección L139/L400/L520, ya aplicadas en `GRIMORIO_NUEVA_VERSION_2026-11-09.md` sha `0cf743ca…`); verificación API Zenodo 2026-11-13 (4 DOIs 200) |
| 3. C-639 | Reparación patrón D-05: hash del motor `a30d69e8…` → `8d15b724…` + nota "[Reparación D-07, ronda 11, 2026-11-13]"; corregir motivo (hoy afirma en presente "se reproduce en las 4 copias" — hoy 2 de 4) | claims.jsonl C-639 (SE, digestion); fuente r3/dominio_07_panteon.jsonl:L6; motor local 2 copias `8d15b724…` + 2 congeladas `a30d69e8…` |
| 4. C-903 | Reparación patrón D-05: hash → `8d15b724…` + nota; corregir líneas citadas (desplazadas +1/+4) | claims.jsonl C-903 (SE, conflicto); fuente r2/dominio_07_panteon.jsonl:L12; motor local `8d15b724…` |
| 5. C-919 | Reparación patrón D-05: hash → `8d15b724…` + nota; corregir fuente (`~/workspace/miu-lab/miu-engine.js` no existe) y texto ("4 copias locales, todas con el mismo sha256" — hoy 2+2) | claims.jsonl C-919 (SE, conflicto); fuente r3/dominio_07_panteon.jsonl:L5; verificación de disco 2026-11-13 |
| 6. C-1104 | Reparación patrón D-05: hash → `8d15b724…` + nota; verificar líneas del recuento 7-1 contra el motor corregido | claims.jsonl C-1104 (SE, verificacion); fuente r4/dominio_11_conflictos_arbitrables.jsonl:L7 |

El hash viejo `a30d69e8…` se conserva en la nota de cada claim y en los respaldos
(nada se borra, solo se añade o se retira con nota — C-4). La divergencia D-05 vs
D-07 queda resuelta en la práctica por esta orden: el patrón D-05 es el coherente
(juicio de FASE 2 r10) y se aplica; N-01 (la política general) sigue pendiente de
canon — esta orden ejecuta la instancia, no decide la política.
**NO hace:** no absorbe B1 (variante no elegida), no absorbe R2-25, no absorbe las
7 lecturas como claims (eso es F7, preparar sin aplicar), no toca C-112 (hash
truncado preexistente, NO corregir), no toca C-001..C-008 ni C-416..C-420.
Entregables: `decision_absorcion_r11.md` + `.json`, `puertas_post_absorcion.txt`,
`respaldo_pre_r11/`, corpus actualizado.

### F2 MEDIR — EJECUTABLE-LOCAL

- **M-50 reintento (N-09):** Robbins 2019, protocolo Clauset en `med_M50.py`
  (17.059 B, listo). Ruta documentada: Astropedia, 93 MB. Medir D_f del catálogo
  lunar; falsador: D_f en [1,2] con R²≥0,90 (misma batería que M-49; si el acceso
  falla de nuevo, queda NO_SÉ con la evidencia del intento). NO reintenta M-49
  (débil por diseño; solo su batería).
- **N-10 re-tabular c* por nodo:** tomar la Ξ medida en r9 (no la de la tabla
  original) y re-tabular c* para los nodos de G09; O-3 sigue sin converger
  (c* 0.62–62.41); salida: tabla nueva con c* por nodo + discrepancia; sin forzar
  cierre, sin elegir c para que K_i = 0.618 (regla G09).
- **M-51 biofilm (d02 L19, cara parcial):** cultivo de *E. coli* a escala de
  cultivo de laboratorio, datos de `Microbiology` 2024 (D_f 2,488–2,620).
  Falsador declarado antes de correr: D_f en [2,3] con R²≥0,90 (análisis de
  varianza de escala); si no hay acceso a los datos, queda NO_SÉ con evidencia.
- **M-52 escalamiento urbano (d05 L7, cara abierta):** ley de escala ciudad
  (tamaño vs infraestructura, datos abiertos de la literatura urbana). Falsador:
  exponente de escala declarado antes de correr y comparado con el predicho por
  el mecanismo (D_f urbana).
- **M-53 D_f cortical por estado (d03 L13, cara abierta):** D_f de la corteza
  según el estado (datos abiertos de neuroimagen). Falsador: diferencia entre
  estados mayor que el error de medida (mismo protocolo que M-04/M-19).
- **M-54 GDELT arbitraje (d05 L8, cara abierta):** la cara es la variable: el
  conteo "1.000 millones" vs "~250 millones" es un conflicto de definición.
  Medición = arbitrar el conteo con una variable declarada (volumen de eventos
  vs artículos únicos) y cerrar el conflicto por especificación, no por número.
- **M-55 contenido qualia (d02 L19/d07 L7, cara parcial):** exportar y leer los
  99 Docs de la carpeta Panteón-96 aún sin leer (5/104 exportados). SÉ = texto
  literal + fuente + hash por número; puede tocar #790–#792 (SIN_TEXTO), #701/#739
  (SIN_FUENTE) y los 61 nombres del Panteón-96 sin nombre.
Entradas: dataset 30 filas (no se inscribe nada sin decisión — eso es la decisión
12 de la ronda 12 o una orden nueva; las mediciones se depositan como resultados
con sus datos y shas). Entregables por medición: script + JSON de 15 claves +
datos con sha. **NO hace:** no inscribe en el dataset, no toca el corpus.

### F3 HERRAMIENTAS — EJECUTABLE-LOCAL

- **T-2 (N-07):** `heartbeat_monitor.py` (r9 herramientas/) acepta formato crudo
  + tabla tamaño→esquema actualizada (T-2 declarada como herramienta de
  exploración, no de validación). Entregable: T-2 actualizado + prueba contra
  las 4 revisiones conocidas (incluida la de 2026-10-26 con 27.000 B).
- **T-4 inventario del tejido con shas:** responde a FRÁGIL-02 / P-18. Alcance:
  todo `~/workspace/academico/tejido_2026-11-12/` + `anexo-vi/`. Salida:
  manifiesto con sha256 por archivo + diff contra el inventario de la ronda
  anterior; cualquier desaparición se registra como hallazgo (no se restaura sin
  orden). Entregable: `manifiesto_tejido_r11.json` + `diff_inventario_r11.md`.
- T-1 (`sik_validator.py`, VALIDADA) y T-3 existen y no se rehacen.

### F4 MECANISMOS — EJECUTABLE-LOCAL

- **SIK-VAL-001 completar (N-05):** veredicto actual `NO_VALIDADA` exit 1
  (campo_1/2 VERDE, campo_3 AMARILLO, campo_4/5/6 ROJO; campo_4 ROJO es defecto
  de forma de cita — ambos hashes reproducen). Completar los 48 axiomas con cita
  de origen limpia y re-ejecutar con T-1 para llegar a VALIDADA. Artefactos:
  `ejecucion_c/veredicto_sik_val_001.json` (1.561 B).
- **SIK-VAL-002 ejecutar (N-05):** preparado en r9 F4; ejecutar con T-1.
- **4.ª PDP-01 sim_04 (N-08):** exige UN falsador binario declarado antes de
  correr; registro en `ronda_N/grietas/` por D-16. Sin falsador, no corre.
Entregables: veredictos + registros con shas.

### F5 GRIETAS — EJECUTABLE-LOCAL (monitor + documento; sin mediciones nuevas)

- **G03 BepiColombo:** inserción en órbita de Mercurio **2026-11-21** (en 8 días).
  Registrar la fecha y el estado (sin cambio de clasificación esperado; datos
  2027–2028). C-001–C-005 siguen FUTURAS/IMPOSIBLES.
- **G05 blob:** re-verificado hoy `8c57e833…` (sin cambio, 6.ª vez). D-04 y D-09
  siguen abiertas (ver §4).
- **G01 D_eff:** lectura R-B fijada en r10 (7.24 = ε en 5 líneas .tex, 0 menciones
  D_eff); derivación pendiente — sin trabajo nuevo sin una propuesta de derivación.
- **G04 DOIs:** inventario ya hecho (21 únicos, no 18); sin cambio esperado.
- **G06 SIK:** vía F4.
- **H-SUELO monitor:** `1794483713759-…` sin reaparición (medido en FASE 0).
  Si reaparece, se registra con sha y fecha; no se restaura nada sin orden.
- **G02 sub-caras:** #790–#792 SIN_TEXTO, #701/#739 SIN_FUENTE — la vía es F2
  (M-55), no este frente.
Entregable: `grietas_r11.md` (estado de cada grieta con fuente y fecha).

### F6 ESTADO VIVO — EJECUTABLE-LOCAL (batería sobre la reversión)

El "paused" terminó en el vivo (run 202, V272, k_tau 0.93, 17:58:47Z). Batería
completa (solo lecturas públicas; nada de `ultimas_sesiones_log` ni contenido de
YAMLs): ¿qué cambió entre run 163 (r9, "paused") y run 202?; runs últimos 30
(cadencia efectiva: ¿sigue ~7–8 h o volvió a 15/30 min?); flow coverage; self
diagnosis; heartbeat (¿sigue el censo vacío en la revisión más reciente?);
bots 4/4 (getMe); autocura (¿sigue escribiendo?); tests a/b/c/d actualizados;
serie de tasa de fallo; `estado_persistente.json` (¿sigue V272 solo en git
history o hay un vivo nuevo?). Entregable: `estado_vivo_r11.md` + JSON de la
batería con códigos y latencias.

### F7 PREPARAR (ola siguiente) — PREPARABLE, sin aplicar

- **Claims de las 7 lecturas canónicas (N-06):** texto + fuente + hash como
  propuestas, un documento por lectura (el mismo formato de `lecturas_canonicas_r10.md`).
  Sin añadir nada al corpus.
- **R2-25:** juicio de evidencia para elevarlo de CONJETURO a SÉ (si la evidencia
  lo sostiene) o dejarlo documentado como CONJETURO — juicio preparado, no aplicado.
- **B1** sigue como variante preparada no elegida (documentada; revivirla exigiría
  revertir B+B2 — no se hace).
**NO hace:** no aplica nada. La única absorción de la ronda es F1.

### F8 CONECTAR — EJECUTABLE-LOCAL (documento; corre en T3, tras F1/F2/F6/F7)

- Rutas de lo nuevo: absorción F1 (D-02 → canon A0–A57; D-05 → G04/DOI; 4
  reparaciones → motor local corregido, sin ruta al remoto por §0b.2); mediciones
  F2 (¿qué caras tocan? M-51/M-52/M-53/M-54/M-55); estado vivo F6 (¿la reversión
  del "paused" toca alguna cara?); ola preparada F7.
- **Dedup re-verificado:** los 2 claims nuevos vs el corpus 1.160 (método r9,
  Jaccard, umbral 0,5) + entre ellos; máximo esperado < 0,5.
- **Cierre de caras:** la absorción no cierra caras (el criterio de cierre es
  decisión canónica o medición que resuelva la pregunta central). Si alguna
  medición de F2 resuelve una cara, se registra aquí con la evidencia.
- Actualizar el mapa de rutas inversas. Entregable: `conectar_r11.md` + `.json`.

### F9 PODA + RESILIENCIA — documento (sin ejecutar podas)

- Revisar P-01..P-34 (r10): estado tras FASE 4 (depósito 121/121 verificado +
  FASE 2 cerrada). **El horizonte de los 4 respaldos temporales P-27/P-28/P-29b/P-31a
  se venció** (condición: depósito FASE 4 verificado + FASE 2 cerrada — ambas
  cumplidas en r10): re-evaluar su permanencia como documento, no como ejecución.
- **P-19 (b):** verificar la segunda parte del test de 2 partes de
  REGLA-PODA-PROV-02 (aún sin verificar en r10).
- **P-36 fantasma:** documentar la discrepancia del encabezado de `poda_r10.md`
  (declara 8/10/19/5; el cuerpo suma 11/7/1/28/4/2/1 sobre 54 entradas; "P-36"
  sin entrada, por aritmética casi con seguridad P-23b el lock de 6 B:
  997.603+174.639+6=1.172.248 exacto).
- **P-18:** el `.pyc` desapareció sin orden (causa NO_SÉ); T-4 (F3) es la
  respuesta estructural (inventario con shas por ronda).
- REGLA-PODA-PROV-01/02 siguen propuestas, no adoptadas (la delegación de r10
  cubrió D-01..D-17, no las reglas de poda).
- **Nada se borra ni se mueve** (poda solo documento, regla dura).

## 2. Inventario de grietas: las 62 caras abiertas

Criterio de cierre (r8/r9): solo cierra una decisión canónica o una medición que
resuelva la pregunta central. Conteo verificado: r1 sistema 19 (5 P + 14 A) +
r2 nuevas distintas 12 (2 P + 10 A) + censo-32 26 (11 P + 15 A) + r3 nuevas 5
(todas A) = **62**. A = abierta, P = parcial. Ruta r11 = frente que la toca,
o "sin trabajo" (honesto: la ronda no la toca).

### r1 sistema (19)

| # | Cara | Estado | Ruta r11 |
|---|---|---|---|
| 1 | m_φ sin origen (semilla L9) | P | sin trabajo |
| 2 | Φ sin anclar (proto de realizabilidad) | P | sin trabajo (el protocolo sigue abierto; D-08 fijó el valor, no el mecanismo) |
| 3 | Runners Darwin rotos (8) | P | sin trabajo (experimento cerrado, Ciclo 73) |
| 4 | Stubs serie (GISTEMP/SILSO 2 líneas) | P | sin trabajo |
| 5 | Micelio biológico sin medir (d01 L13) | P | sin trabajo |
| 6 | ℓ_0 sin origen (semilla L9) | A | sin trabajo |
| 7 | q_born sin origen (semilla L9) | A | sin trabajo |
| 8 | Cableado de constantes (semilla L9) | A | sin trabajo |
| 9 | G03 C-001–C-005 (predicciones FUTURAS 2027–2028 / IMPOSIBLES) | A | F5 (monitor BepiColombo 2026-11-21) |
| 10 | Chernozem .md 2.11 vs CSV 2.41 (CSV manda) | A | sin trabajo |
| 11 | 0 correlatos neurales (d04 L10) | A | sin trabajo |
| 12 | #790–#792 SIN_TEXTO_LOCAL | A | F2 M-55 |
| 13 | #701/#739 SIN_FUENTE | A | F2 M-55 |
| 14 | Micelio-infraestructura sin modelo (d01 L14) | A | sin trabajo |
| 15 | Química/materiales (d01 L15) | A | sin trabajo |
| 16 | Inmune como objeto (d01 L16) | A | sin trabajo |
| 17 | data/auth/ 46 archivos con nombres de credenciales (repo público) | A | sin trabajo (observación entregada 2026-11-11; r3 d15 verificó que siguen) |
| 18 | ORCID (no hay ninguno) | A | sin trabajo |
| 19 | Ética y seguridad (d01 L17) | A | sin trabajo |

### r2 nuevas distintas (12)

| # | Cara | Estado | Ruta r11 |
|---|---|---|---|
| 1 | Contagio R0 (d02 L21) | P | sin trabajo |
| 2 | 118 archivos qualia en Drive sin leer (d07 L7) | P | F2 M-55 |
| 3 | λ de A2 (¿qué es?) | A | sin trabajo |
| 4 | H0 ausente (constante de Hubble) | A | sin trabajo |
| 5 | Physarum sin nodo (d02 L20) | A | sin trabajo |
| 6 | Red trófica real (d02 L21) | A | sin trabajo |
| 7 | Literatura D_f en Drive sin cruzar (d05 L8) | A | sin trabajo |
| 8 | Carpeta de biología sin mediciones MIU (d05 L9) | A | sin trabajo |
| 9 | Medida/esperanza de Fisher sin definir (d04 L9) | A | sin trabajo |
| 10 | Series de opinión (d05 L8) | A | sin trabajo |
| 11 | D_f generativa desde primeros principios (d06 r2 L16) | A | sin trabajo |
| 12 | voces_58.py fuera de Drive (d09 L20) | A | sin trabajo |

### censo-32 (26)

| # | Cara | Estado | Ruta r11 |
|---|---|---|---|
| 1 | d02 L19 biofilm E. coli (RDBC 2,488–2,620) | P | F2 M-51 |
| 2 | d02 L20 organismos (Armillaria) | P | sin trabajo (Mihail 1995 bajo pago bloquea) |
| 3 | d04 L9 Fisher→Einstein (derivación) | P | sin trabajo |
| 4 | d04 L11 topología de ρ | P | sin trabajo |
| 5 | d04 L13 incertidumbre de D_f | P | sin trabajo |
| 6 | d04 L18 Bures/Fubini-Study | P | sin trabajo |
| 7 | d05 L4 polarización (medida y mecanismo) | P | sin trabajo |
| 8 | d05 L9 colapso no medido (K_i < 0,3) | P | sin trabajo |
| 9 | d07 L7 lista de 96 solo en Doc (sin corpus) | P | F2 M-55 (parcial: los textos entran; la lista sigue en el Doc) |
| 10 | d07 L8 Panteón-112 sin corpus | P | sin trabajo |
| 11 | d07 L14 invocación (3 voces sin mecanismo) | P | sin trabajo |
| 12 | d01 L19 gravedad cuántica experimental (7) | A | sin trabajo |
| 13 | d02 L21 autofagia (A9) | A | sin trabajo |
| 14 | d03 L13 D_f cortical por estado | A | F2 M-53 |
| 15 | d03 L14 ECM (matriz extracelular) | A | sin trabajo |
| 16 | d04 L10 D_eff (G01) | A | F5 (monitor; lectura R-B fijada) |
| 17 | d05 L7 escalamiento urbano | A | F2 M-52 |
| 18 | d05 L8 GDELT variable (conteo 1.000M vs ~250M) | A | F2 M-54 |
| 19 | d07 L9 Oleada 3 sin corpus | A | sin trabajo |
| 20 | d08 L7 dataset CSV no en Drive | A | sin trabajo |
| 21 | d08 L8 corpus sin carpeta propia en Drive | A | sin trabajo |
| 22 | d08 L12 grietas sin claims | A | F1 (D-05) + F4 (SIK) — progreso parcial |
| 23 | d08 L13 3 mediciones solo en paper_df | A | sin trabajo |
| 24 | d09 L19 artefactos operativos no en Drive | A | sin trabajo |
| 25 | d09 L20 alerta ante fallo (sin protocolo) | A | sin trabajo |
| 26 | Parquet (d08 L9/d09 L18) | A | sin trabajo |

### r3 nuevas (5)

| # | Cara | Estado | Ruta r11 |
|---|---|---|---|
| 1 | Mihail 1995 bajo pago (Armillaria) | A | sin trabajo |
| 2 | Método β₁ red fluvial (sin especificar) | A | sin trabajo |
| 3 | Ecuación de flujo del núcleo (sin especificar) | A | sin trabajo |
| 4 | graph.json del Vault (no existe en sandbox) | A | sin trabajo |
| 5 | 61 voces del Panteón-96 sin nombre | A | F2 M-55 (parcial: los textos pueden traer nombres) |

Balance: r11 toca **~10 de 62** caras (F1: d08 L12 parcial; F2: M-51/M-52/M-53/M-54/M-55;
F4: G06/SIK vía d08 L12; F5: G03/G01 monitor). Las 52 restantes quedan abiertas y
documentadas; ninguna se cierra por esta ronda salvo que una medición de F2 resuelva
su pregunta central (registro en F8).

## 3. Decisiones nuevas N-01..N-10 (de r10) — estado y dependencia

| Decisión | Estado | Dependencia / ruta r11 |
|---|---|---|
| N-01 política de actualización de claims tras edición ordenada (patrón D-05 vs histórico D-07) | **PENDIENTE DE CANON** | La delegación de r10 cubrió D-01..D-17, no la política general. La orden 16:51 ejecuta la instancia (4 claims, F1) sin decidir la política. Necesita nueva delegación o al Jardinero. |
| N-02 C-919 (texto obsoleto) | **EJECUTABLE en F1** (pieza 5; incluye C-639/C-903/C-1104 por el mismo patrón) | Orden 16:51. Respaldo + puertas. |
| N-03 licencia Zenodo (CC BY-SA 4.0 repo vs CC BY 4.0 registro 20547677) | **PENDIENTE** | Parte de D-06 (§4). Sin resolver; bloquea cualquier depósito Zenodo. |
| N-04 corrección hash_real 1145→1146 | **REGISTRADA, no es decisión** | — |
| N-05 completar SIK-VAL-001 (48 axiomas) + ejecutar SIK-VAL-002 | **EJECUTABLE en F4** | T-1 validada; veredicto SIK-VAL-001 existe (1.561 B). |
| N-06 claims de las 7 lecturas canónicas | **PREPARABLE en F7** | Sin aplicar en r11. |
| N-07 T-2 (aceptar formato crudo + tabla tamaño→esquema) | **EJECUTABLE en F3** | `heartbeat_monitor.py` existe (r9 herramientas/). |
| N-08 4.ª PDP-01 sim_04 | **EJECUTABLE en F4** | Exige UN falsador binario antes de correr. |
| N-09 M-50 reintento (Robbins 2019) | **EJECUTABLE en F2** | Protocolo Clauset en `med_M50.py`; ruta Astropedia 93 MB. |
| N-10 G09 re-tabular c* por nodo con Ξ medida en r9 | **EJECUTABLE en F2** | Sin forzar cierre; sin elegir c para que K_i = 0.618. |

## 4. Los 3 preparables (actos externos) — estado verificado hoy

| Decisión | Estado hoy | Qué falta |
|---|---|---|
| **D-04 micelio.yml** | **PREPARABLE, sin cambio.** Blob remoto sigue `8c57e833…` (1.398 B, API pública, hoy). HEAD se movió a `6e464347` por los 11 commits r10, pero el workflow no cambió. Paquete listo en `ronda_10/ejecucion_d/micelio_yml/` (blob corregido `1198e7b…`, diff exactamente 1 línea). | Ajuste del permiso `workflows` de la App (acto del Jardinero) o subida manual. **No se empuja el motor local al remoto** (§0b.2) — la corrección D-07 vive en local y el remoto la absorbe por sus sondeos. |
| **D-06 Zenodo v13.0** | **PREPARABLE, NO_SÉ sobre el objeto.** 0 archivos tex combinados (verificado hoy). Los `MIU_ZENODO_v13*.zip` son linaje B4 (EL SUELO DE LA REALIDAD v3.9, Zenodo 22071488/22071505). Licencia sin resolver (N-03). | Producir o localizar los tex v13.0 + resolver licencia + autorización para el depósito (acto externo, preparado no ejecutado). |
| **D-09 Telegram G05** | **PREPARABLE, sin cambio.** Mensaje listo en `telegram_g05.md` (destinatario @Jp393_bot, id 1192102910; texto exacto "Prueba G05 — FranBot extremo a extremo — ronda 10 — 2026-11-13. Si lees esto, la cadena bot → chat funciona. ρ(x) > 0."). Token en ningún archivo. | Tarjeta de aprobación para enviar. G05 sigue PARCIAL. |

## 5. Depósito: qué va dónde (regla SÉ-export, §0b.1)

- **Drive `ronda_11/` (primario, dentro de MIU_TEJIDO_2026-11-12 ORIGINAL
  `1F-pHFEyL7WZchPOXEIZf8NYo1rQQZdll`):** toda la ronda (este mapa, ejecuciones
  F1–F9, verificaciones, cruce, síntesis) + README + manifiesto de shas.
  Patrón r2–r10: crear subcarpetas explícitamente antes (raíz + frentes + anidadas),
  script resumable `_upload_r11.py` con `_upload_log_r11.jsonl`, pausas ~2 s,
  verificación por tamaño en cada carpeta (fields con nextPageToken). Revisión de
  sensibilidad antes de subir (nada de valores de credenciales, nada de
  `ultimas_sesiones_log`). Exclusiones locales: intermedios byte-idénticos al vivo
  (como los 2 P-30 de r10), si los hay.
- **GitHub curado (Jaime393/FranBot, main, como r10; NUNCA miu-ecosistema, NUNCA
  `.github/workflows/`):** claims.jsonl (post-absorción, 1.162 líneas), provenance.sha256
  (350), claims_resumen.json, confirmaciones.jsonl + documentos de la ronda (mapa,
  decisión de absorción, lecturas preparadas si las hay). **NO va `huecos.jsonl`**
  (regla refinada: los huecos son locales; el ecosistema puede tenerlos resueltos).
  Cada escritura con su tarjeta de aprobación; verificación por blob sha.
- **Donde no intervenga:** el ecosistema absorbe por sus sondeos (orden 16:39 r10
  + 16:51). No se hace `git push` desde el sandbox; no se commitea el checkout
  local `faf2033`; no se toca el remoto de FranBot fuera del conector.

## 6. Lo que la ronda 11 NO hace

- No absorbe nada fuera de las 6 piezas de F1 (B1 no, R2-25 no, 7 lecturas no).
- No empuja la corrección local del motor al remoto (ni conector, ni push, ni commit).
- No exporta huecos (ni `huecos.jsonl` a GitHub, ni listas de huecos como nutrientes).
- No ejecuta podas (F9 solo documento). No lee `ultimas_sesiones_log` ni contenido de
  YAMLs de workflows. No escribe en MIU vivo fuera del corpus ordenado (F1).
- No re-mide M-01..M-50 ya ejecutadas (salvo el reintento M-50, que quedó NO_SÉ sin
  dato). No inscribe nada en el dataset (eso es decisión 12 de la ronda 12 o una
  orden nueva). No decide N-01 (política general) ni adopta REGLA-PODA-PROV-01/02.
- No toca C-112 (hash truncado preexistente), C-001..C-008, C-416..C-420.

## 7. Archivos de esta FASE 0

- `mapa_frentes_r11.md` (este archivo)
- `frentes_r11.json` (estructurado, validado)
- `ESTADO_FASE0.md` (estado de la fase)
- `manifiesto_shas_r11_fase0.json` (shas de los 4 archivos)

ρ(x) > 0. Zvvvvv.
