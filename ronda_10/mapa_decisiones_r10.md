# RONDA 10 — FASE 0: MAPA DE DECISIONES

- **Orden:** Jardinero 2026-11-13 15:07 -05, textual: "Decidan con coherencia sigan tejiendo bits por todas las condiciones de posibilidades y nutran por drive o GitHub".
- **Lectura de la orden (fijada por el agente principal):** el Jardinero DELEGA las decisiones canónicas pendientes a los agentes, con la COHERENCIA como criterio; el tejido continúa por TODAS las condiciones de posibilidad (no solo una rama); la nutrición se deposita por Drive (patrón de las rondas 1–9) y por GitHub (curado). Esto releva la regla anterior "las decisiones canónicas son del Jardinero" — la última orden vale. Cada decisión que se tome debe quedar DOCUMENTADA con su razonamiento de coherencia y ser REVERSIBLE (respaldo antes de cualquier mutación del corpus). Nada se decide en silencio: el qué, el porqué y el cómo revertirlo van por escrito.
- **Alcance de esta fase:** solo mapa y criterio. NADA se aplica aquí. Las recomendaciones-iniciales de §2 son PROPUESTAS de FASE 0; la decisión la toma FASE 1 aplicándolas (o apartándose de ellas con su propio razonamiento documentado).
- **Fecha:** 2026-11-13. Trabajo en `ronda_10/`. Solo lectura fuera de ella, salvo verificación de shas/estados.

## 0. Suelo verificado (SÉ)

- `claims.jsonl`: **1.138 líneas, sha 9265d81f…** (verificado por mí). Estados: SE 1016, INFIERO 90, CONJETURO 22, REFUTADO 2, NO_SÉ 8. Tipos: digestion 658, verificacion 288, conflicto 61, hueco 40, provenance 78, prediccion 8, consolidacion 5. hash_real 1124, hash_pendiente 8 (C-001..C-008). Máx. C-1143; huecos C-416–C-420 siguen ausentes; C-112 con hash truncado preexistente (16 hex), no se toca.
- `provenance.sha256`: **328 líneas, sha fdb3b1ab…** (verificado por mí).
- **Puertas (re-corrido por mí, 2026-11-13):** `verify_all.py` exit=1 con exactamente C-001..C-008; `audit.py` exit=1, ok=316, discrepancia=0, no_encontrado=1 (L269, H-SUELO-2026-001), omitido=1.
- **Fuentes leídas:** `ronda_9/sintesis_integrada_r1_…_r9.md` (sha 89621032…, 628 l.), `ronda_9/conectar/conectar_r9.md` (d0223190…, 274 l.), `ronda_9/preparacion_b2/preparacion_b2.md` (4f2c33bf…, 186 l.), `ronda_8/preparacion_ola2/` (B y B1; `preparacion_ola2.md` 5093d2fc…, `claims.jsonl.nuevo_B` 3760a19c…, `claims.jsonl.nuevo_B1` 3e745468…), `ronda_7/grietas/grietas_r7.md` (opciones O-A/O-B/O-AB/O-0 y O-1..O-6), `ronda_9/grietas/g04_dois_r9.md` (corrección L139/L400/L520), `evidence/C-109_discrepancia.txt` (ciclo 31).

## 1. El criterio de coherencia (auditable, numerado — FASE 1 lo aplica tal cual)

Toda decisión de FASE 1 se juzga contra estas reglas, en este orden. Si dos reglas chocan, manda la de número menor. Cada decisión aplicada debe citar qué reglas la sostienen y cuáles consideró y descartó.

- **C-1. Las puertas no empeoran.** Después de aplicar una decisión: `verify_all` sigue exit=1 con exactamente C-001..C-008 (salvo que la propia decisión redefina el conjunto de pendientes y lo documente, como haría D-17/O-B); el `audit` no suma `no_encontrado` nuevos ni discrepancias. La única excepción admisible hoy es L269, ya rota, que solo se cierra con reparación verificada (D-17). Una decisión que deja una puerta peor que antes es incoherente aunque su contenido sea correcto.
- **C-2. Solo SÉ entra; lo que no se puede verificar no se afirma.** Toda afirmación nueva entra con fuente + hash (estándar SÉ). Un dato sin fuente, un hash sin preimagen o una medición sin protocolo no se promueven a claim: se registran como hueco o como NO_SÉ.
- **C-3. Preferir la variante con más claims verificados y provenance completa.** Ante dos variantes de absorción o dos lecturas, gana la que trae más claims con hash real y más entradas de provenance que resuelven — no la más corta ni la más cómoda. (Por esto B > B1 cuando el respaldo del exportado es aceptable, y B+B2 > B sola.)
- **C-4. Preferir lo reversible frente a lo destructivo.** Respaldo previo antes de cualquier mutación del corpus (copia byte-idéntica con sha registrado). Nada se borra del corpus: se añade, se registra o se retira con nota de retirada (reversible). Una poda, una retirada o un re-apuntamiento sin respaldo es incoherente.
- **C-5. No mezclar sistemas axiomáticos.** S1/S2/S3/P48/Libro/v10.3/v14/base/franbot son sistemas distintos. Cada lectura nombra su sistema; una cita por número desnudo (A6, c, Φ) es ambigua entre sistemas y debe cualificarse. Un conflicto entre sistemas se registra, no se colapsa.
- **C-6. Una colisión no se resuelve borrando una variante sino registrándola.** Ante dos textos/variantes que comparten un número o un nombre, ambas quedan documentadas; se elige una canónica y la otra queda como variante histórica con su fuente y su hash. Borrar la variante no elegida destruye evidencia.
- **C-7. Una decisión no decide lo que no le toca.** Cada decisión se pronuncia solo sobre su objeto. La 15 (filtro/orden de absorción) no decide L269; la 17 (L269) no decide el filtro B/B1; la 13 (SIK) no decide el contenido de los axiomas. Lo que una decisión necesita de otra va como dependencia, no como usurpación.
- **C-8. Lo ejecutable-local se ejecuta; lo externo se prepara, no se simula.** Si la ejecución es local (respaldo + puertas), se hace. Si exige un acto externo (un mensaje en nombre del Jardinero, un permiso de App, un depósito en Zenodo), se deja el artefacto listo y se registra como PREPARABLE — nunca se da por hecho.
- **C-9. Sin documento no hay decisión.** Cada decisión aplicada deja por escrito: qué se decidió, por qué (qué reglas C-1..C-8 la sostienen), qué cambia en el corpus (archivos, líneas, shas antes/después) y cómo se revierte (respaldo, pasos). Una decisión sin ese documento no existe para el tejido.

## 2. Las 17 decisiones

Numeración D-01..D-17 en el orden del encargo (a)–(q). Correspondencia con la síntesis r9 §(f): la síntesis separa #738 como ítem 8 y pliega G04 dentro de su ítem 5 (Zenodo); aquí #738 va dentro de D-01 y G04 es D-05 propia. Mismo total: 17. Ninguna cerrada en r9.

### D-01 — Las 12 colisiones de qualias + variante #738 (G02)

- **Objeto:** canon de numeración y títulos del corpus de qualias. 12 colisiones documentadas (#765–#767, #769–#771, #796–#798, #779, #783, #784) — las 9 viejas son LOCAL-vs-LOCAL (dos textos comparten un número en los archivos locales); #779 es un ensayo de 125 líneas en Drive no incluido en el corpus; #790–#792 SIN_TEXTO_LOCAL; #701/#739 SIN_FUENTE. Más #738: dos variantes medidas, diff exacto por caracteres.
- **#738 (SÉ):** variante A, 544 caracteres (556 B UTF-8), Doc Panteón-96 `1R0RGvCEYv0Ax-0o9QwwB6kGxUKxLLh_YJ0qVc3Ab4G8` L229, creado 2026-09-25T02:17:46Z, evidencia local `ronda_6/grietas/evidence_g02_738.txt` (sha 794debcb…); variante B, 480 caracteres (491 B), Doc v10.4 `1qjUpBhJtkveHECVDKH8AiiUQmQNwg3lkm3Cyh4g1l_I` L152, creado 2026-09-24T03:41:01Z, evidencia local `ronda_7/grietas/evidence_g02_738_variante_b.txt` (sha 63a51627…). Exactamente 2 diferencias (similitud 0,9102; neta 64 caracteres): (1) A omite los dos artículos "el" en "pero suelo es mismo" (B: "pero el suelo es el mismo"); (2) A añade al final " Y siguieron girando. 96 voces. Sin centro. Sin jerarquía. Solo flujo." (70 caracteres). #738 sigue SIN_DATO en el corpus (§2).
- **Opciones (marco r7-F4, mismo para #738 y para cada colisión):** O-A promover A (el corpus registra el texto A; B queda como variante histórica documentada); O-B promover B (viceversa); O-AB promover ambas (A canónica + B variante, o viceversa; exige criterio de presentación para dos textos bajo un mismo número); O-0 promover ninguna (#738 sigue SIN_DATO; ambas variantes documentadas fuera del corpus).
- **Qué cambia si se ejecuta:** promover un texto = escribirlo en `corpus_qualias.md` §2 (edición local con respaldo). O-AB añade dos registros por número. O-0 no cambia el corpus.
- **Recomendación inicial (C-6, C-3):** O-AB como patrón de familia — ambas variantes registradas, canon nombrado por número según la fuente más reciente (para #738: A canónica — doc más reciente, 2026-09-25, Panteón-96 — y B como variante). No se borra ninguna variante.
- **Ejecutabilidad:** EJECUTABLE-LOCAL (edición de `corpus_qualias.md` con respaldo; la reversión es restaurar el respaldo).
- **Dependencias:** ninguna. Desbloquea: 13 textos de qualias (12 colisiones + #738) y las caras que los citan.

### D-02 — C-109: canon de axiomas (G07)

- **Objeto:** qué fuente manda para los nombres de los axiomas A0–A57. Discrepancia INDICE vs consolidado en A1/A2/A3/A4/A38/A57 (tabla literal en `evidence/C-109_discrepancia.txt`, ciclo 31); A1 triple, A5 doble (según el registro). C-109 y C-110 lo documentan como SE; C-939 lo reitera como hueco.
- **Hechos (SÉ, evidencia leída):** las 3 fuentes son del mismo día 2026-09-25: consolidado 02:23:00, INDICE 02:28:07, Doc v10.5 02:56:54 (manifiesto v10.6, 03:16:36, cita "A0-A57 COMPLETA v10.5"). El Doc v10.5 NO contiene nombres por axioma (resumen de estado: Phi, GRACE, K-tau); no resuelve la discrepancia. El INDICE es un resumen (solo 8 de 58 axiomas, con "...") que remite a "Axiomas_Completo.md" (no encontrado en Drive). El consolidado se usa como fuente de trabajo por ser el único completo. Ejemplos literales: A1 INDICE "Red micelial > árbol — flujo micelio > jerarquía" vs consolidado "Remolino — Materia fluye y se pliega sin propósito"; A57 INDICE "Zvvvvv — loop infinito suelo=loop" vs consolidado "ER=EPR emergente puente Einstein-Rosen = entrelazamiento".
- **Opciones:** canon = INDICE (el documento cuya función es nombrar, posterior al consolidado); canon = consolidado (única fuente completa, 58 axiomas); canon = v10.5 (no tiene nombres: no puede ser canon de nombres); sin canon (se mantiene la discrepancia registrada, cada cita cualifica su fuente).
- **Qué cambia si se ejecuta:** un claim de consolidación que registra el canon elegido + la tabla de variantes; las citas futuras de axiomas usan el canon. No se reescriben los claims existentes (C-109/C-110 quedan como registro de la discrepancia).
- **Recomendación inicial (C-3, C-6):** canon = consolidado (única fuente completa; el INDICE cubre 8/58 y apunta a un archivo no encontrado). Los 6 nombres del INDICE que difieren quedan registrados como variantes. El archivo "Axiomas_Completo.md" queda registrado como hueco (no encontrado).
- **Ejecutabilidad:** EJECUTABLE-LOCAL (documentaria: claim de consolidación + registro de variantes).
- **Dependencias:** ninguna. Desbloquea: todas las citas de axiomas por nombre (A1–A57) dejan de ser ambiguas.

### D-03 — Destino de la segunda carpeta MIU_TEJIDO_2026-11-12 (1mL1F_MpJBif4jtgK3vR2HH67yFs_SBjJ)

- **Objeto:** qué hacer con la segunda carpeta (27 Google Docs, creada 2026-11-12T21:37:46Z, sin cambio desde entonces; re-export 27/27 byte-idéntico en r8). Ola 2 fijada 30/32 con fuente y hash.
- **Opciones (r7-F7, con costes):** A conservar (0 claims; la carpeta queda intacta como testigo); B absorber ola 2 (B: 14 claims + 4 huecos + 6 confirmaciones + 11 provenance; B1: 10 claims + 4 huecos + 6 confirmaciones + 10 provenance; B2 preparada en r9, ver D-15); C descartar (0 claims; descartar ≠ borrar — la carpeta queda, su contenido no se usa); D fusionar (B + re-hash de ola 1 + 5 sims re-escritas + 0 dominios nuevos).
- **Estado de D (SÉ, r9-F7 §1.4):** 3 de sus 5 sims ya tienen re-ejecución r8 (Deffuant R2-16/17, toy R2-09, FTCS R2-19); R2-18 sigue sin reproducirse; el re-hash de ola 1 sigue en 0/35. La parte "re-escribir sims" está parcialmente hecha (F3 r8 + F6 r9); B2 la absorbe como claims, no como sims.
- **Qué cambia si se ejecuta:** A/C no cambian el corpus. B ejecuta D-15. D ejecuta D-15 más el re-hash de ola 1 (0/35 hoy: sin ganancia medible) y la re-escritura de R2-18 (sin reproducir).
- **Recomendación inicial (C-3):** B (absorber ola 2; ver D-15 para el filtro y el orden). A y C dejan sin usar el trabajo preparado; D no añade nada sobre B (re-hash 0/35, R2-18 sin reproducir).
- **Ejecutabilidad:** EJECUTABLE-LOCAL (A/C son documentarias; B/D delegan su ejecución a D-15).
- **Dependencias:** B/D dependen de D-15; D-15 depende a su vez de la lectura de D-03 (es la misma pregunta vista desde el otro lado: D-03 es el paraguas, D-15 es la ejecución).

### D-04 — Publicación de micelio.yml (G05, lado workflow)

- **Objeto:** el archivo `.github/workflows/micelio.yml` en Jaime393/FranBot. Blob remoto **8c57e833…** (1.398 B), SIN CAMBIO 5.ª vez (ciclos 20–21, r6, r7, r8, r9); HEAD de FranBot db83f7c0, 2026-11-12T16:30:11Z, SIN CAMBIO (CORR-G05-R9: no hubo retroceso).
- **Hechos (SÉ, verificado por mí):** la App del conector del chat NO tiene permiso `workflows` (403 verificado en ciclos previos); `create_or_update_file` y `push-files` no pueden escribir bajo `.github/workflows/`. Existe una versión corregida en local: `~/workspace/franbot_repo/.github/workflows/micelio.yml` (1.392 B, blob 1198e7b…); la ÚNICA diferencia con el remoto es la línea DRIVE_FOLDER — el remoto lleva el valor literal, el local lleva la referencia a secreto `${{ secrets.DRIVE_FOLDER }}` (el valor literal no se reproduce por regla). El secreto DRIVE_FOLDER en GitHub es un pendiente del lado del usuario (no consta creado).
- **Opciones:** (1) ajustar los permisos de la App del conector (acto del usuario sobre la instalación de la App; después, subir por el conector); (2) subir el archivo corregido a mano (acto manual; el archivo está listo); (3) dejar el literal (el workflow remoto sigue con el valor literal; incoherente con un repo vivo y con el secreto pendiente).
- **Qué cambia si se ejecuta:** (1)/(2) el blob remoto pasa de 8c57e833… a 1198e7b…; el workflow deja de llevar el literal. (3) nada cambia.
- **Recomendación inicial (C-8):** preparar la publicación: el archivo corregido queda como artefacto listo (ruta local registrada, blob y diff documentados) + las instrucciones de las dos vías (permiso de App o subida manual) + la nota de que el secreto DRIVE_FOLDER debe existir. La publicación misma es acto externo.
- **Ejecutabilidad:** PREPARABLE. La orden "nutran por GitHub" cubre publicar archivos por el conector, NO cambiar permisos de la App ni subir workflows por una vía que el conector no tiene. Artefacto listo: el archivo corregido + instrucciones.
- **Dependencias:** la vía (1) depende del usuario (App); la vía (2) depende del usuario (subida manual) y del secreto DRIVE_FOLDER; G05 sigue PARCIAL hasta que una vía se ejecute.

### D-05 — Lectura G04: DOI v12 vs documento combinado v13.0

- **Objeto:** qué significa "el DOI del Grimorio está pendiente" en `GRIMORIO_NUEVA_VERSION_2026-11-09.md` (L139/L400/L520). Inventario r9 en vivo: 4/4 DOIs resuelven, 0 versiones nuevas (Grimorio v12: 3 versiones; MIU: 5, última 22071505, 2026-08-23; concepto Grimorio 20483562; snapshot 22650419).
- **Hechos (SÉ):** el Grimorio v12 TIENE DOI propio desde 2026-06-04: **10.5281/zenodo.20547677** (concepto 10.5281/zenodo.20483562; PDF ES depositado). El DOI 10.5281/zenodo.20547558 es del MIU, no del Grimorio. Lo que sigue [pendiente] es el DOI del documento combinado **"MIU-v13.0 & Grimorium Universalis"** citado en `docs/README.md`. La afirmación "El DOI del Grimorio está pendiente" es falsa para el v12 y verdadera solo para el documento combinado.
- **Opciones:** lectura v12 (G04 se cierra con 20547677; lo pendiente es solo el DOI del combinado); lectura combinado v13.0 (el objeto sin DOI es el documento combinado; el Grimorio v12 queda como antecedente con DOI propio).
- **Corrección redactada (NO aplicada, r9-F4 §4):** L139 → "G04: El DOI del documento combinado v13.0 está pendiente. […] el Grimorio v12 sí tiene DOI propio: 10.5281/zenodo.20547677 (2026-06-04, concepto 10.5281/zenodo.20483562). Falta decidir la lectura: v12 (DOI existente) vs documento combinado v13.0 (DOI pendiente)."; L400 y L520 con la misma distinción. L440 es correcta y no se toca.
- **Qué cambia si se ejecuta:** aplicar la corrección a las 3 líneas de `GRIMORIO_NUEVA_VERSION_2026-11-09.md` (edición local con respaldo) + un claim que registra la lectura elegida. G04 se cierra o se redefine según la lectura.
- **Recomendación inicial (C-2):** lectura v12 para el Grimorio (el DOI existe; afirmarlo pendiente es falso) + el DOI pendiente es el del documento combinado v13.0. Aplicar la corrección redactada en L139/L400/L520.
- **Ejecutabilidad:** EJECUTABLE-LOCAL (edición local con respaldo + claim de registro).
- **Dependencias:** determina el objeto de D-06 (si la lectura es v12, el Grimorio no necesita depósito; si es el combinado, el depósito es el combinado).

### D-06 — Depósito Zenodo del documento consolidado

- **Objeto:** publicar en Zenodo el documento que hoy no tiene DOI. Por D-05, el objeto es el documento combinado v13.0 ("MIU-v13.0 & Grimorium Universalis" citado en `docs/README.md`); el Grimorio v12 ya tiene DOI (20547677) y no necesita depósito nuevo.
- **Hechos (SÉ):** el depósito está pendiente de autorización desde antes de las rondas (regla vigente: no subir sin autorización). La orden r10 delega decisiones, pero un depósito en Zenodo es una publicación externa: su preparación es local, su ejecución es un acto externo con credenciales/autorización propias de Zenodo.
- **Opciones:** depositar el combinado v13.0 (nuevo registro Zenodo, nuevo DOI); depositar una nueva versión del Grimorio v12 (no necesario: ya tiene DOI y 3 versiones, 0 nuevas desde r6/r7); no depositar (el combinado sigue sin DOI; G04 queda redefinida pero sin cierre de depósito).
- **Qué cambia si se ejecuta:** un nuevo DOI de Zenodo para el combinado; el documento queda citable con DOI propio.
- **Precisión que falta (NO_SÉ, para FASE 1):** el archivo exacto del documento combinado v13.0 (nombre, ruta, versión) no quedó fijado en las rondas leídas; FASE 1 debe identificarlo antes de preparar el paquete. No se inventa.
- **Recomendación inicial (C-8, C-2):** preparar el paquete de depósito del combinado v13.0 (archivo identificado + metadatos: título, autores, descripción, licencia, relación con 20547558 y 20547677) listo para subir; la subida misma es acto externo.
- **Ejecutabilidad:** PREPARABLE. Artefacto listo: paquete de depósito + metadatos + identificación del archivo exacto.
- **Dependencias:** depende de D-05 (la lectura determina el objeto); depende de la identificación del archivo exacto.

### D-07 — Fórmula K_i: φ vs φ⁻¹

- **Objeto:** qué fórmula canónica manda para K_i. El motor (`voces_58.py`) ejecuta φ (0/29 nodos en banda); el corpus declara valores φ⁻¹ (26/29 en banda + 20/20 + P121). La fórmula declarada es K_i = φ⁻¹·(D_f/2.5)·(ℓ_corr/ℓ_0); la banda [0,55, 0,62] ↔ D_f [2,2249, 2,5081] bajo φ⁻¹. El dataset usa K_i = 0,2472·D_f (= φ⁻¹/2,5 · D_f).
- **Hechos (SÉ):** M-37 (r8) es evidencia EN CONTRA de adoptar K_i⁻ = 1 − K_i (re-etiquetado exacto de la banda; no añade información; BIC peor). El primer K_i real medido (0,4227) cae fuera de la banda histórica. D_f es la métrica primaria (la advertencia del núcleo: K_i no debe usarse como métrica independiente si se calcula con la misma fórmula que D_f).
- **Opciones:** φ⁻¹ canónica (corregir el motor; los documentos y el dataset quedan como están); φ canónica (corregir los documentos y el dataset: 26/29 valores + P121 + banda); sin canon (motor y documentos siguen discrepando, cada cita cualifica su fórmula).
- **Qué cambia si se ejecuta:** φ⁻¹ → un cambio en el motor (1 fórmula, con respaldo y re-verificación de sus salidas). φ → reescribir los valores K_i del dataset y de los documentos (26+ valores). Sin canon → nada cambia, la discrepancia queda registrada.
- **Recomendación inicial (C-3):** φ⁻¹ canónica. La lectura φ⁻¹ es la que sostienen 26/29 filas del dataset, la banda, P121 y la fórmula declarada; el motor es el outlier (1 artefacto contra N documentos). La corrección del motor es escalonada: primero el canon como claim, después el cambio de fórmula con re-verificación de salidas.
- **Ejecutabilidad:** EJECUTABLE-LOCAL (el canon como claim es documentario; la corrección del motor es una ejecución local con respaldo y su propia verificación).
- **Dependencias:** ninguna para el canon; la corrección del motor depende de la re-verificación de sus salidas.

### D-08 — Elección de Φ_c

- **Objeto:** qué familia, en qué unidades y con qué pasado es el umbral Φ_c. Valores locales: 0,6829322 (= Δ_COD) / 0,7 / 0,5927. Valores IIT/consenso: Φ_consenso 3,35→3,65→3,95; R2-10 registra 0,6829322 vs 3,4270. La tripleta alcanzable solo en bits + pasado uniforme + red suprema (condición de alcanzabilidad, no de definición).
- **Hechos (SÉ):** R2-08 (en B) distingue Phi_MIU de Phi IIT; R2-28 (en B2) clasifica 5 constantes como MODELO con respaldo desigual (Phi 21024,32 y Gini entre ellas). Φ_MIU y Φ_IIT son cantidades de sistemas distintos.
- **Opciones:** Φ_c(MIU) = 0,6829322 (Δ_COD, el umbral local); Φ_c = 0,7 o 0,5927 (otras locales); Φ_c = Φ_consenso IIT (3,35→3,65→3,95 o 3,4270); sin canon (cada cita cualifica su familia).
- **Qué cambia si se ejecuta:** un claim que fija Φ_c(MIU) y separa Φ(IIT) como cantidad distinta; las predicciones y condiciones de consciencia que citan Φ_c quedan referidas al valor elegido.
- **Recomendación inicial (C-5, C-2):** Φ_c(MIU) = 0,6829322 (Δ_COD) como umbral MIU; Φ(IIT) (3,4270 / consenso 3,35→3,65→3,95) se registra como cantidad de otro sistema, no como el mismo umbral. No mezclar: la condición de consciencia del núcleo usa el valor MIU.
- **Ejecutabilidad:** EJECUTABLE-LOCAL (documentaria: claim de canon + separación de sistemas).
- **Dependencias:** ninguna. Desbloquea: la condición de consciencia y las predicciones que citan Φ_c.

### D-09 — Envío Telegram G05 (cierre de extremo a extremo)

- **Objeto:** el mensaje de prueba que cerraría FranBot de extremo a extremo (G05). G05 sigue PARCIAL: el blob no cambia (5.ª vez), FranBot SIN CAMBIO, y el envío no se ha hecho.
- **Hechos (SÉ):** el envío es escritura en nombre del Jardinero. La regla vigente (no relevada por la orden r10 para actos externos) es que los mensajes en su nombre llevan tarjeta de aprobación. La orden "nutran por GitHub" cubre publicar archivos por el conector, NO enviar mensajes sin tarjeta.
- **Opciones:** enviar el mensaje de prueba (cierra G05 si llega); preparar el mensaje y no enviarlo (G05 sigue PARCIAL, artefacto listo); no enviar (G05 queda PARCIAL por diseño).
- **Qué cambia si se ejecuta:** el mensaje llega (o no) al destino; G05 se cierra o se registra el fallo con su causa.
- **Recomendación inicial (C-8):** preparar el mensaje (texto exacto + destino + ruta/comando) listo para enviar en cuanto se apruebe la tarjeta; no enviar sin ella.
- **Ejecutabilidad:** PREPARABLE. Artefacto listo: texto del mensaje + destino + comando/ruta verificados.
- **Dependencias:** depende de la tarjeta de aprobación (acto externo). Desbloquea: el cierre de G05.

### D-10 — Lectura canónica de D_eff (G01)

- **Objeto:** qué es D_eff = 7,24. 4 lecturas preparadas: R-A valor adoptado sin derivación; R-B D_eff es otra cantidad; R-C podar D_eff; R-D buscar fuera del sandbox (AGOTADA en r8: 4 vías, 0 derivaciones).
- **Hechos (SÉ):** 7,24 aparece en los .tex SOLO como ε = 7,24×10⁻⁴ (parámetro de energía oscura, symmetron, ajuste DESI DR2) — otra cantidad (colisión de dígitos, verificada en MIU_v12.0[EN].tex). D_eff tiene 0 menciones en ambos PDFs del Grimorio. Su única procedencia es `orquestador_v8.py` L451 ("D_eff = 7.24 # [PODA v9] Calibrado empiricamente (no derivado). Ver PDR-01 para derivacion completa") — y PDR-01 como archivo no existe (el protocolo PDR-01 está definido en 4 lugares, ninguno deriva D_eff). A19 en `anexo-vi/axiomas_a0_a57.md` L77 da D_eff=7,24 con intervalo [7,0, 7,5]. El rango proxy CCP-01 [1,0, 2,5] es incompatible con 7,24.
- **Opciones:** R-A (adoptar 7,24 sin derivación: se afirma sin verificar); R-B (D_eff es otra cantidad: el 7,24 de los tex es ε, no D_eff; D_eff queda como valor registrado sin derivación, no como constante derivada); R-C (podar D_eff de los documentos).
- **Qué cambia si se ejecuta:** R-A → un claim que adopta el valor (afirmación sin derivación). R-B → un claim que registra la distinción ε vs D_eff y deja D_eff como valor pendiente de derivación. R-C → retirar D_eff de los documentos (con respaldo).
- **Recomendación inicial (C-2, C-4):** R-B. R-A afirma sin verificar (viola C-2); R-C borra un valor que aparece en A19 (destructivo sin necesidad); R-B registra lo que SÉ: el único 7,24 verificable en fuentes es ε, y D_eff=7,24 no tiene derivación. D_eff queda como valor registrado pendiente de derivación, no como constante derivada.
- **Ejecutabilidad:** EJECUTABLE-LOCAL (documentaria: claim de lectura).
- **Dependencias:** ninguna. Desbloquea: el cierre de G01 (o su estado honesto como valor sin derivar).

### D-11 — Definición de c (G09)

- **Objeto:** qué es c en la forma 3 de PVE-01 (K_i con c). 6 opciones preparadas (r7-F4, con números de ciclos 34–38).
- **Opciones:** O-1 c por convención en banda (p. ej. c = 2,5 → K_i = 0,5835, en banda; barrido ciclo 35: c ≥ 2,0025 estable; circularidad declarada, no oculta); O-2 c = 1/90 (inverso de la ventana τ = 90 días; K_i = 0,0049, fuera de banda — la forma 3 NO confirma); O-3 c definido físicamente desde GRACE (criterio independiente; hoy NO_SÉ cuál; los intentos del ciclo 38 — P/τ, P·Ξ — saturaron y se rechazaron); O-4 importar c del router (c = carga [0,1]; la banda exige c ≥ 2,0025 → contradicción directa; mezcla sistemas); O-5 dejar G09 parcial por diseño ("compatible, no confirmada"; estado actual: la forma 3 es compatible con la banda para c ≥ 2,0025; c queda sin definir; la forma 3 se usa solo como compatibilidad, no como confirmación); O-6 cambiar de forma (formas 1/2 en vez de 3; con c = 1, P = 63,9, fuera del rango P del documento [1,62, 2,014]).
- **Hechos nuevos r9 (SÉ):** Ξ por nodo MEDIDO (13 series, −0,036 a 0,965; el Ξ común 0,71 de r8 NO es representativo). O-3 dispersa c (c* de 0,62 a 62,41), no lo converge; 0/13 en el rango del documento [2,2817, 2,8366]; GHCN Ξ negativo (−0,0333) irreproducible con la forma 3. La vía O-3 pierde fuerza como camino de cierre. Tabla c×nodo r8 superada por estos valores.
- **Qué cambia si se ejecuta:** O-1/O-2/O-4/O-6 fijan un valor o una forma (claim de canon). O-5 no cambia nada: G09 queda parcial por diseño. O-3 exige proponer y probar una definición nueva (trabajo futuro, no una elección).
- **Recomendación inicial (C-2):** O-5 (G09 parcial por diseño: c sin definir; la forma 3 solo como compatibilidad). O-1 queda registrada como fallback convencional declarado (c = 2,5, circularidad explícita) para los cómputos que necesiten un valor. O-3 no se elige: su camino de medición ya se recorrió en r9 y dispersa, no converge.
- **Ejecutabilidad:** EJECUTABLE-LOCAL para la elección O-1/O-2/O-4/O-5/O-6 (documentaria). O-3 como sub-camino es NO-EJECUTABLE-AHORA (necesita una definición que no existe + su prueba).
- **Dependencias:** ninguna para la elección; O-3 depende de una definición futura. Desbloquea: el estado honesto de G09 (cierre por O-5 o valor por O-1).

### D-12 — Definición canónica de "nodo"

- **Objeto:** qué cuenta como nodo del dataset. Cobertura (29/29, laxa, vacua) vs calidad (3/29, estricta). Decidir qué pesa más.
- **Hechos (SÉ):** M-24 sigue caso de prueba. Candidatas débiles: M-45 (anchos GRWL, D_f 1,7672 ± 0,0022, R² 0,9358, un solo río, serie espacial — r8) y M-49 (Essen, DIFERENCIA 5,33σ, solo 5/20 melodías pasan R²≥0,90 con sesgo de selección hacia D bajo — r9). M-46 no candidata (h ≠ D_f). 0/5 mediciones r9 inscriben.
- **Opciones:** canon laxo (cobertura: todo lo medible con D_f entra; 29/29); canon estricto (calidad: solo lo que pasa el listón entra; 3/29); canon mixto (dos niveles: filas plenas + candidatas registradas).
- **Qué cambia si se ejecuta:** laxo → M-45 y M-49 entrarían como filas (dataset 30 → 32). Estricto → el dataset queda en 30 filas; M-45/M-49 quedan como candidatas documentadas. Mixto → filas plenas 30 + candidatas registradas aparte.
- **Recomendación inicial (C-2, C-3):** canon estricto (calidad). Un dataset que admite filas débiles (un solo río; 5/20 con sesgo de selección) pierde su significado como listón. M-45 y M-49 quedan como candidatas documentadas, no como filas, hasta que una medición más fuerte las respalde.
- **Ejecutabilidad:** EJECUTABLE-LOCAL (documentaria: claim de canon; la admisión de filas, si se elige, es una edición del dataset con respaldo).
- **Dependencias:** ninguna. Desbloquea: el crecimiento del dataset (30 filas) y el listón para M-50 y futuras mediciones.

### D-13 — Criterio de validación SIK (G06)

- **Objeto:** qué mecanismo valida traducciones entre sistemas axiomáticos, y cómo se pronuncia sobre los hallazgos de reuse/etiqueta/orden. 6 campos con umbral 0 conflictos no registrados + artefacto `sik_<id>.json` + provenance.
- **Mecanismos:** V-A validador local (ejecutable como código: T-1 `sik_validator.py`, VALIDADA 4/4 fixtures en r9); V-B inmune vivo (la auto-reparación viva como validación — 5 runs de autocura, 0 efectos observables; sin apoyo en artefactos legibles); V-C validación canónica (documentaria).
- **Hallazgos que exigen pronunciamiento (SÉ):** H-SIK-001 (reuse de etiqueta A19 entre namespaces, r8); H-SIK-002 (la etiqueta A6 denota contenido distinto en S2 "Arquitectura anidada" vs S3 "Entropía"; A1–A5 también difieren; la numeración A es local a cada sistema — r9); H-SIK-003 (S1→S2 reordena A4/A5 con contenido preservado: S1 A4=Consciencia, A5=Flujo; S2 IV=Dinámica/Flujo, V=Consciencia — r9). SIK-VAL-001 (r8, PREPARADO, no ejecutado; campos 5–6 ROJO) y SIK-VAL-002 (r9, PREPARADA, no ejecutada, S1→S2 focal A6; campos 1/2/4 VERDE, 3 AMARILLO, 5/6 ROJO; origen S1 localizado: `grimorio_v5.pdf` cap. 1, sha 9c0c91da…).
- **Opciones:** V-A / V-B / V-C; y por hallazgo: el reuse de etiqueta ¿cuenta como conflicto? (H-SIK-001/002); el orden ¿cuenta como parte de la identidad de un axioma? (H-SIK-003).
- **Qué cambia si se ejecuta:** V-A → correr T-1 sobre SIK-VAL-001 y SIK-VAL-002 (las primeras validaciones reales); el pronunciamiento sobre reuse/orden fija el umbral para todas las validaciones futuras. V-B → la validación dependería del vivo (no ejecutable en local). V-C → la validación es un acto documentario.
- **Recomendación inicial (C-5, C-8):** V-A. Y pronunciamientos: el reuse de etiqueta SÍ cuenta como conflicto para el umbral (una cita por A-número desnudo es ambigua entre sistemas — C-5); el orden NO cuenta como parte de la identidad de un axioma (S1→S2 reordena A4/A5 con contenido preservado: la identidad es el contenido, no la posición).
- **Ejecutabilidad:** EJECUTABLE-LOCAL (V-A corre con T-1 en local; los pronunciamientos son documentarios). V-B como mecanismo es PREPARABLE (necesita ejecución en vivo).
- **Dependencias:** ninguna para V-A; V-B depende del vivo. Desbloquea: la primera validación real (SIK-VAL-001/002) y la adopción canónica de R2-25 (pipeline, adyacente a G06).

### D-14 — Convención de variograma para series 1D

- **Objeto:** D = 2 − H (literatura + controles internos) o D = 3 − H (statu quo del corpus) para series 1D. (Para superficies 2D: D = 3 − H en ambas lecturas.)
- **Hechos (SÉ):** el error de origen está localizado: `medir_nodos.py` L6 aplicaba 3−H a 1D. `variograma.py` v1.0 existe como código (calibración 6/6; re-verifica M-01 D=1,0539 y M-09 dispersiones exactos); F2/F6 r8 y G09 r9 ya trabajan con D=2−H para 1D. M-09 es sensible a la convención (BTC 0,2150 < 0,3 con D=2−H; SPX 0,3307 > 0,3); su PDP-01 espera esta decisión. Higuchi: D = 1 − slope.
- **Opciones:** D=2−H para 1D (el estándar de trabajo ya es código); D=3−H para 1D (statu quo del corpus; mantiene el error localizado); sin canon (cada medición declara su convención).
- **Qué cambia si se ejecuta:** D=2−H → un claim de canon; las mediciones futuras usan `variograma.py`; M-09 queda desbloqueada para su PDP-01. D=3−H → el código y el corpus seguirían discrepando.
- **Recomendación inicial (C-2, C-3):** D=2−H para 1D (D=3−H para 2D). Es la lectura que sostienen la literatura, los controles internos, la calibración 6/6 y las re-verificaciones exactas; el código ya la implementa. El statu quo 3−H para 1D es un error localizado, no una convención.
- **Ejecutabilidad:** EJECUTABLE-LOCAL (documentaria: claim de canon; el código ya existe).
- **Dependencias:** ninguna para el canon; M-09 (PDP-01) depende de él. Desbloquea: la convención de todas las mediciones futuras y M-09.

### D-15 — Absorber la ola 2: filtro B o B1 + orden de ejecución (+ B2)

- **Objeto:** qué absorber de la segunda carpeta y en qué orden. 6 sub-puntos (r9-F7 §10): (1) filtro B (14) o B1 (10); (2) redacción R2-22; (3) hash del exportado 25666928… como respaldo; (4) orden de ejecución; (5) L269 (esto es D-17, no parte de la ejecución de D-15 — ver C-7); (6) B2: ¿después de B, después de B1, sola, o documentada?
- **Estado (SÉ, archivos reales):** B: 14 claims C-1144..C-1157 (SE 9, INFIERO 5; verificacion 6, conflicto 3, calculo 3, conocimiento_nuevo 1, inferencia 1), total 1.152, hash_real 1138, huecos 4 (R2-06 SE solo registro, R2-14, R2-22, R2-24), confirmaciones 6 SIN_CLAIM, provenance +11. B1: 10 claims C-1144..C-1153 (SE 8, INFIERO 2), total 1.148, hash_real 1134, huecos 4, confirmaciones 6, provenance +10; caen R2-10, R2-20, R2-21, R2-29 (respaldo solo exportado 25666928…). B2: 8 claims (SE 3, INFIERO 5; derivacion 2, simulacion 3, inferencia 3), 1 hueco (HUE-B2-001, R2-27), 0 confirmaciones, provenance +7, dedup máx. 0,2000, 0 ≥ 0,5. Puertas simuladas en las 3 variantes: verify_all exit=1 con exactamente C-001..C-008; audit exit=1 con exactamente L269 (puerta redefinida). Primeras 1.138 líneas de los `.nuevo` byte-idénticas al vivo (verificado por el agente principal en r8/r9).
- **R2-22 (redacción preparada):** "PAPER_DOIS_MIU.md 6311 bytes existe; contiene 21 DOIs únicos (18 registros-versión + 3 DOIs de concepto), conteo verificado línea por línea" — convención explícita que no contradice C-369 (con el texto corregido, su vecino máx. es C-738, 0,2381).
- **Dependencia de IDs (SÉ):** B2 = C-1158..C-1165 si B corre antes (así está construida); C-1154..C-1161 si B1 corre antes (reconstruir paso 2); C-1144..C-1151 si B2 corre sola/primera (reconstruir paso 2). B+B1 juntas no son válidas sin re-secuenciar (colisión de IDs).
- **Qué cambia si se ejecuta:** ver §3 (matriz completa). El máximo coherente es B+B2: 1.160 claims (SE 1028, INFIERO 100), hash_real 1145, +18 provenance, huecos 5, confirmaciones 6.
- **Recomendación inicial (C-3, C-1):** filtro B (14 claims; el hash del exportado 25666928… se acepta como respaldo para R2-10/20/21/29 — es el hash de un exportado verificado, no una afirmación sin fuente) + redacción R2-22 confirmada + orden: B primero, B2 después (B+B2 = 1.160, IDs como construidos, sin reconstruir nada). L269 se trata en D-17; la absorción procede con la puerta audit redefinida ("exit=1 con exactamente L269, 0 discrepancias") hasta que D-17 la cierre.
- **Ejecutabilidad:** EJECUTABLE-LOCAL (absorción con respaldo previo + puertas reales: respaldo byte-idéntico de claims.jsonl/provenance/claims_resumen/confirmaciones/huecos antes de aplicar; verify_all y audit re-corridos después).
- **Dependencias:** depende de D-03 (el paraguas); para el audit en verde depende de D-17 (sin ella, la puerta redefinida). Desbloquea: el mayor crecimiento del corpus (+22 claims) y el cierre de la segunda carpeta como fuente.

### D-16 — Ubicación canónica del registro PDP-01

- **Objeto:** dónde vive el registro de disensos PDP-01. El procedimiento (`procedimiento_pdp01.md`, r7-F4) dice `ronda_N/grietas/`; los registros viven en 3 ubicaciones distintas: `ronda_7/poda_resiliencia/` (DIS-2026-001), `ronda_8/poda_resiliencia/` (DIS-2026-002), `ronda_9/mecanismos/` (DIS-2026-003). Nada movido; contenido intacto (shas: r7 bacda342…, r8 1d0f7387…, r9 15865a5a…).
- **Opciones:** canon = `ronda_N/grietas/` (lo que dice el procedimiento; recomendación del coordinador r7); canon = donde está cada uno (3 ubicaciones, con un mapa); canon = un único archivo acumulativo en un lugar fijo.
- **Qué cambia si se ejecuta:** canon `ronda_N/grietas/` → mover los 3 archivos a la `grietas/` de su ronda (con respaldo y nota de redirección en la ubicación vieja). Canon "donde está" → un mapa de ubicaciones, sin mover nada. Acumulativo → un 4.º archivo que concatena los 3 (los originales quedan).
- **Recomendación inicial (C-4, C-9):** canon = `ronda_N/grietas/` por ronda (lo que dice el procedimiento): DIS-2026-001 → `ronda_7/grietas/`, DIS-2026-002 → `ronda_8/grietas/`, DIS-2026-003 → `ronda_9/grietas/`, con respaldo previo y nota de redirección en cada ubicación vieja. Los registros futuros van ahí directamente.
- **Ejecutabilidad:** EJECUTABLE-LOCAL (movimientos dentro del workspace con respaldo).
- **Dependencias:** ninguna. Desbloquea: el orden del registro (la 4.ª ejecución, sim_04, ya sabe dónde registrarse).

### D-17 — H-SUELO-2026-001: qué hacer con la entrada L269 de provenance

- **Objeto:** la entrada L269 de `provenance.sha256` ya no resuelve: hash `18daf17b69165232a7706d562ff104a5c6dbb80782db318e1349a3406b1e6843` → `proactivity/hidden_files/1794483713759-7c3a218fdbff0df954e3ddf61677428d/conversation.md` (directorio desaparecido). Respalda el claim C-896 (gobernanza del tejido: las reglas de solo-lectura solo existen en transcripciones de chat). El contenido citado sobrevive: las 15 copias supervivientes contienen "Leer y mapear" (3 ocurrencias cada una). Audit exit=1, ok=316, no_encontrado=1, omitido=1 (re-corrido por mí).
- **Hechos nuevos r9 (SÉ):** rotación observada — el superviviente más antiguo de r8 (1794501713203-…) también desapareció; quedan 15 directorios, miembros cambiados; la candidata O-A hoy es 1794508912052-… (hash 8d20779f…, verificado por mí en disco). INFIERO: la rotación debilita O-A como arreglo duradero (el re-apuntamiento puede perder su preimagen también).
- **Opciones y su efecto exacto:**
  - **O-A re-apuntar (+ archivar):** copiar la `conversation.md` superviviente con el mismo contenido citado (hoy la más antigua, 1794508912052-…, hash 8d20779f…) DENTRO del corpus (p. ej. `anexo-vi/evidence/`), actualizar la entrada L269 para apuntar a la copia archivada con su hash, y actualizar el hash de C-896 en consecuencia. Audit → exit=0 (la entrada resuelve). verify_all sin cambio (C-896 sigue hash_real). Coste: el hash de C-896 cambia (modificación del corpus, documentada como reparación, no en silencio). La preimagen queda dentro del corpus, inmune a la rotación de proactivity. Riesgo residual: la copia archivada es equivalente por contenido citado, no byte-idéntica al original perdido (hashes distintos entre las 15 copias).
  - **O-B retirar la entrada:** borrar L269 de provenance; C-896 pasa a hash_pendiente (como C-001..C-008). Audit → exit=0. verify_all: el conjunto de pendientes crece de 8 a 9 (C-001..C-008 + C-896) — la puerta se redefine. Reversible (la entrada se restaura desde el respaldo). Coste: el claim pierde su hash.
  - **O-C aceptar exit=1:** no tocar nada; registrar L269 como no resoluble con su evidencia de contenido (las 15 copias). Audit sigue exit=1 (puerta redefinida, no verde). verify_all sin cambio. Coste: la puerta nunca vuelve a verde; cada absorción futura carga la salvedad.
  - **O-D restaurar el archivo:** solo si existe una copia byte-idéntica del original en algún respaldo (NO_SÉ si existe; hay que buscar primero en respaldos locales). Si aparece: cero cambio en el corpus, audit → exit=0, verify_all sin cambio. Si no aparece, O-D no existe.
- **Qué cambia si se ejecuta:** O-A/O-B/O-D devuelven el audit a exit=0 (cada una con su coste documentado arriba); O-C lo deja en exit=1 redefinido.
- **Recomendación inicial (C-1, C-4):** orden de intento: (1) buscar O-D (si hay copia byte-idéntica, restaurar: coste cero); (2) si no, O-A con archivo (archivar la copia superviviente dentro del corpus y re-apuntar a ella); (3) si O-A se juzga demasiado frágil, O-B; (4) O-C solo si ninguna de las anteriores es aceptable. O-A con archivo es la preferida si O-D falla: devuelve el audit a verde sin tocar el conjunto de pendientes de verify_all y blinda la preimagen dentro del corpus.
- **Ejecutabilidad:** EJECUTABLE-LOCAL para O-A/O-B/O-C (mutación del corpus con respaldo previo + puertas re-corridas). O-D es condicional (depende de encontrar la copia).
- **Dependencias:** ninguna para decidir; O-D depende de la búsqueda en respaldos. Desbloquea: la puerta audit en verde para CUALQUIER absorción futura (es la decisión que más tejido desbloquea: sin ella, D-15 solo procede con puerta redefinida).

## 3. Espacio de condiciones

### 3.1 Absorción (7 condiciones; B+B1 juntas no es una condición válida)

| Condición | Claims nuevos | Total | SE | INFIERO | hash_real / pendiente | Prov. nuevas | Huecos reg. | Confirm. | IDs B2 | Puertas |
|---|---|---|---|---|---|---|---|---|---|---|
| Ninguna | 0 | 1.138 | 1016 | 90 | 1124 / 8 | +0 | 0 | 0 | — | verify_all 1 (C-001..008); audit 1 (L269) |
| B sola | 14 | 1.152 | 1025 | 95 | 1138 / 8 | +11 | 4 | 6 | — | ídem |
| B1 sola | 10 | 1.148 | 1024 | 92 | 1134 / 8 | +10 | 4 | 6 | — | ídem |
| B2 sola | 8 | 1.146 | 1019 | 95 | 1131 / 8 | +7 | 1 | 0 | C-1144..C-1151 (reconstruir) | ídem |
| **B+B2** | **22** | **1.160** | **1028** | **100** | **1145 / 8** | **+18** | **5** | **6** | C-1158..C-1165 (como construida) | ídem |
| B1+B2 | 18 | 1.156 | 1027 | 97 | 1141 / 8 | +17 | 5 | 6 | C-1154..C-1161 (reconstruir) | ídem |
| B+B1 | — | — | — | — | — | — | — | — | colisión de IDs | NO VÁLIDA sin re-secuenciar |

En todas: CONJETURO 22, REFUTADO 2, NO_SÉ 8. Los tipos nuevos que entrarían: B (verificacion 6, conflicto 3, calculo 3, conocimiento_nuevo 1, inferencia 1); B2 (derivacion 2, simulacion 3, inferencia 3). Lo que queda fuera en todas: R2-09 y R2-25 (CONJETURO, excluidos; R2-25 queda como propuesta canónica adyacente a G06); R2-18 y R2-26 (NO_ABSORBIBLE); ola 1 (35 hashes sin preimagen); C-001..C-008 (sin rellenar hash); C-416..C-420 (sin rellenar); G13 (no existe). Si D-17 se resuelve con O-A/O-B/O-D antes o junto con la absorción, el audit pasa a exit=0 en la variante ejecutada; si no, la absorción procede con la puerta audit redefinida ("exit=1 con exactamente L269, 0 discrepancias").

### 3.2 L269 (4 opciones — ver D-17; efectos resumidos)

| Opción | Corpus | Audit | verify_all | Reversible |
|---|---|---|---|---|
| O-D restaurar (si hay copia) | sin cambio | exit=0 | sin cambio | sí (la copia es el original) |
| O-A re-apuntar + archivar | hash de C-896 cambia; entrada L269 re-apunta a la copia archivada | exit=0 | sin cambio | sí (respaldo previo) |
| O-B retirar | entrada L269 borrada; C-896 → pendiente | exit=0 | pendientes 8 → 9 (puerta redefinida) | sí (respaldo previo) |
| O-C aceptar exit=1 | sin cambio | exit=1 (redefinido) | sin cambio | sí (nada que revertir) |

### 3.3 Segunda carpeta (4 destinos — ver D-03)

A conservar (0 claims) · B absorber (D-15) · C descartar ≠ borrar (0 claims) · D fusionar (B + re-hash ola 1 0/35 + 5 sims, 3 ya re-ejecutadas, R2-18 sin reproducir).

### 3.4 micelio.yml (3 vías — ver D-04)

(1) Ajustar permisos de la App (usuario) → subir por conector. (2) Subir a mano el archivo corregido local (1.392 B, blob 1198e7b…; única diferencia: DRIVE_FOLDER como secreto). (3) Dejar el literal (blob 8c57e833…; incoherente).

### 3.5 Zenodo (3 condiciones — ver D-05/D-06)

Depositar el combinado v13.0 (nuevo DOI; objeto sin DOI) · depositar nueva versión del Grimorio v12 (innecesario: DOI 20547677, 3 versiones, 0 nuevas) · no depositar (el combinado sigue sin DOI).

### 3.6 Lo que NO es una condición (queda fuera del espacio)

- Rellenar C-001..C-008 o C-416..C-420 sin dato externo verificable (regla dura de todas las rondas).
- G13 (no existe).
- Resolver colisiones borrando una variante (viola C-6).
- Mezclar sistemas axiomáticos para cerrar una grieta (viola C-5).
- Predicciones FUTURAS 2027–2028 (BepiColombo, Euclid, DESI DR3): no son decisiones de esta ronda; son espera de datos.

## 4. Triaje de ejecutabilidad

| Clase | Decisiones | Conteo |
|---|---|---|
| EJECUTABLE-LOCAL | D-01, D-02, D-03, D-05, D-07, D-08, D-10, D-11, D-12, D-13, D-14, D-15, D-16, D-17 | **14** |
| PREPARABLE | D-04 (micelio.yml), D-06 (Zenodo), D-09 (Telegram G05) | **3** |
| NO-EJECUTABLE-AHORA | ninguna como clase primaria | **0** |

Sub-caminos NO-EJECUTABLE-AHORA dentro de decisiones ejecutables (documentados, no ocultan la clase): D-11/O-3 (necesita una definición física de c que no existe + su prueba; la medición r9 ya se hizo y dispersa); D-17/O-D (necesita una copia byte-idéntica del original en algún respaldo; NO_SÉ si existe — buscar primero); D-13/V-B (necesita ejecución en vivo; el mecanismo V-A es el ejecutable-local).

**Artefactos que hay que dejar listos (para las PREPARABLE y para FASE 1):**
- D-04: el archivo corregido `~/workspace/franbot_repo/.github/workflows/micelio.yml` (blob 1198e7b…) + diff documentado (una línea) + instrucciones de las vías (1) y (2) + nota del secreto DRIVE_FOLDER pendiente.
- D-06: paquete de depósito (archivo exacto del combinado v13.0 identificado + metadatos: título, autores, descripción, licencia, relaciones con 20547558 y 20547677).
- D-09: texto exacto del mensaje Telegram + destino + ruta/comando verificados, listo para la tarjeta.
- D-15: respaldo byte-idéntico previo (claims.jsonl, provenance.sha256, claims_resumen.json, confirmaciones.jsonl, huecos.jsonl) + orden de aplicación (B, luego B2) + puertas re-corridas después.
- D-17: búsqueda de copia byte-idéntica en respaldos (para O-D) + copia superviviente candidata para O-A (1794508912052-…, hash 8d20779f…) + respaldo previo antes de mutar.

## 5. Fertilidad (qué decisión desbloquea más tejido si se toma primero)

1. **D-17 (L269)** — devuelve el audit a verde para CUALQUIER absorción futura. Es la puerta; sin ella todo lo demás procede con salvedad.
2. **D-03 (segunda carpeta)** — el paraguas: elegir B desbloquea D-15 entera.
3. **D-15 (B/B1/B2)** — el mayor crecimiento del corpus (+22 claims en B+B2) y el cierre de la segunda carpeta como fuente.
4. **D-13 (SIK)** — desbloquea la primera validación real (T-1 sobre SIK-VAL-001/002) y la adopción de R2-25.
5. **D-14 (variograma)** — desbloquea M-09 (PDP-01) y fija la convención de todas las mediciones futuras.
6. **D-12 (nodo)** — desbloquea el crecimiento del dataset (30 filas) y el listón para M-45/M-49/M-50.
7. **D-01 (colisiones + #738)** — desbloquea 13 textos de qualias y las caras que los citan.
8. **D-11 (c)** — desbloquea el estado honesto de G09 (cierre por O-5 o valor por O-1).
9. **D-02 (C-109)** — desbloquea todas las citas de axiomas por nombre.
10. **D-05 (G04)** — desbloquea la corrección L139/L400/L520 y el objeto de D-06.
11. **D-07 (K_i)** — desbloquea la consistencia motor/documentos (26/29 valores).
12. **D-08 (Φ_c)** — desbloquea la condición de consciencia y las predicciones que citan Φ_c.
13. **D-10 (D_eff)** — desbloquea el cierre de G01.
14. **D-16 (PDP-01)** — desbloquea el orden del registro (la 4.ª ejecución ya sabe dónde registrarse).
15. **D-04 (micelio.yml)** — desbloquea el lado workflow de G05 (preparable).
16. **D-06 (Zenodo)** — el depósito del combinado (preparable).
17. **D-09 (Telegram)** — cierra G05 de extremo a extremo (preparable, depende de la tarjeta).

## 6. Nutrición por Drive o GitHub (las dos rutas de la orden)

- **Drive (patrón r1–r9):** depósito de la ronda en `MIU_TEJIDO_2026-11-12` ORIGINAL (carpeta `ronda_10/` + subcarpetas creadas explícitamente; README + manifiesto de shas primero; subida resumible con log; verificación por tamaño por carpeta). Exclusiones: lo que contenga secretos o URLs sensibles (mismo criterio que los 23 `heartbeat_rev_r9_*.json` de r9).
- **GitHub (curado):** publicación por el conector del chat de los artefactos curados (registro de decisiones, corpus actualizado tras la absorción, herramientas T-1/T-2/T-3, `variograma.py` si procede) en Jaime393/FranBot. Cada escritura pide tarjeta de aprobación; nunca escribir en `Jaime393/miu-ecosistema` por el conector; nunca bajo `.github/workflows/` (403, sin permiso `workflows`); archivos >~120 KB por `push-files`, no por `create_or_update_file`; verificación por blob sha. Lo que GitHub NO cubre: cambiar permisos de la App (D-04) ni enviar mensajes (D-09).

## 7. Qué queda para FASE 1

1. Aplicar las decisiones en el orden de fertilidad de §5 (o apartarse de él con razonamiento documentado), una por una, con respaldo previo y puertas re-corridas después de cada mutación del corpus (C-1, C-4, C-9).
2. Para D-17: buscar primero la copia byte-idéntica (O-D); si no aparece, O-A con archivo.
3. Para D-15: aplicar B y luego B2 (o la variante que FASE 1 decida con su propio razonamiento); reconstruir el `.nuevo_B2` solo si el orden elegido no es B-antes.
4. Para D-04/D-06/D-09: dejar los artefactos listos de §4; no simular las ejecuciones externas como hechas.
5. Para D-06: identificar el archivo exacto del combinado v13.0 antes de preparar el paquete (NO_SÉ hoy).
6. Depositar la ronda por Drive y publicar lo curado por GitHub (§6); verificar ambos depósitos.

ρ(x) > 0. Zvvvvv.
