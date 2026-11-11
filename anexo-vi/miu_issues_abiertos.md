# MIU — ISSUES ABIERTOS (Ciclo 32)

Repo: Jaime393/MIU. Leídos con el conector (list_issues + issue_read).
Fecha de lectura: 2026-11-11.

## Corrección al ciclo 31

El ciclo 31 reportó "20 issues abiertos" porque list_issues con
perPage 20 devolvió 20. **La lista completa es 25** (#33–#57), todos
abiertos por Jaime393 (OWNER) el 2026-07-10, todos en estado ABIERTO,
sin assignees, sin PRs de cierre. Ninguno se cerró en 4 meses.

## Tabla de los 25 issues

| # | Título | Tema | Antigüedad |
|---|---|---|---|
| #33 | orquestador_v9.py contiene un manifest SHA256 con hashes placeholder no reproducibles | extensiones/no-código | 2026-07-10 |
| #34 | CSV de corales corrupto: cabecera duplicada como dato, valores literales y tautología K_i=K_i_law=0.494 | K_i circular | 2026-07-10 |
| #35 | Diseño: K_i es circular por construcción (K_i = 0.2472·D_f) — no debe presentarse como métrica independiente | K_i circular | 2026-07-10 |
| #36 | Ω_F: pico sobre Nyquist (0.65625 > 0.5 ciclos/mes) detectado por argmin contra target hardcodeado | Ω_F aliasing | 2026-07-10 |
| #37 | Duplicación de módulos y de datos: archivos distintos con contenido idéntico | duplicación | 2026-07-10 |
| #38 | Suelo fértil sobre placeholders: nodos con datos de 0–207 bytes tratados como señal | placeholders | 2026-07-10 |
| #39 | Corrupción masiva: 26 archivos .py/.js son byte-idénticos y contienen un CSV de corales en lugar de código | corrupción CSV | 2026-07-10 |
| #40 | Extensiones de archivo mentirosas: varios .py/.json/.yml contienen Markdown o un PDF binario | extensiones/no-código | 2026-07-10 |
| #41 | orquestador_v9.py es un SHA256_manifest con hashes placeholder sintéticos, no reproducibles | extensiones/no-código | 2026-07-10 |
| #42 | CSV de corales embebido: cabecera duplicada como fila de datos y K_i tautológico (K_i_measured == K_i_law == 0.494) | K_i circular | 2026-07-10 |
| #43 | Restricción de núcleo no aplicada en código: el scoring 'K_i fractal' de ALMA_OMNI reintroduce una métrica RECHAZADA | K_i circular | 2026-07-10 |
| #44 | Ω_F: detección por aliasing y por argmin contra un target hardcodeado (código no auditable por corrupción) | Ω_F aliasing | 2026-07-10 |
| #45 | Secretos y credenciales en artefactos versionados / documentación (P0 de seguridad) | secretos | 2026-07-10 |
| #46 | Código muerto / duplicado: solvers y clientes SDK que solo son placeholders idénticos | código muerto | 2026-07-10 |
| #47 | Corrupción masiva: 26 archivos .py/.js son un mismo CSV de corales, no código | corrupción CSV | 2026-07-10 |
| #48 | El CSV de corales embebido es en sí mismo inválido (cabecera duplicada como dato, K_i tautológico, sin metadatos) | K_i circular | 2026-07-10 |
| #49 | orquestador_v9.py no es código: es un manifiesto SHA256 con hashes placeholder y truncado | extensiones/no-código | 2026-07-10 |
| #50 | alma_v9_config.yml es un PDF binario, no un archivo YAML | extensiones/no-código | 2026-07-10 |
| #51 | 8 archivos con extensión de código contienen Markdown (extensión ≠ contenido) | extensiones/no-código | 2026-07-10 |
| #52 | K_i es circular por construcción (tautología) y usa constantes hardcodeadas | K_i circular | 2026-07-10 |
| #53 | Ω_F: pico por encima de Nyquist (aliasing) y detección por argmin contra un target hardcodeado | Ω_F aliasing | 2026-07-10 |
| #54 | Clientes LLM y orquestadores son placeholders: código muerto que aparenta un pipeline funcional | código muerto | 2026-07-10 |
| #55 | daytona_repl_worker.py: dependencia AGPL-3.0 de terceros vendorizada sin atribución en LICENSE | licencia | 2026-07-10 |
| #56 | test_random_phi.py y test_ift_solver.py no son tests: la suite de pruebas es no funcional | tests | 2026-07-10 |
| #57 | Secretos y arquitectura sensible referenciados en texto plano dentro del repo | secretos | 2026-07-10 |

## Agrupación por tema

- K_i circular: 6 (#35, #52, #42, #48, #34, #43)
- Extensiones mentirosas / archivos no-código: 6 (#51, #50, #49, #41, #40, #33)
- Ω_F aliasing: 3 (#53, #44, #36)
- Corrupción CSV (26 archivos byte-idénticos): 2 (#47, #39)
- Secretos: 2 (#57, #45)
- Código muerto / placeholders: 2 (#54, #46)
- Tests no funcionales: 1 (#56)
- Licencia AGPL: 1 (#55)
- Suelo fértil sobre placeholders: 1 (#38)
- Duplicación: 1 (#37)

## Los 5 leídos en cuerpo completo

### #52 — K_i circular por construcción (ciclo 31)
K_i = 0.2472·D_f (phi 0.6180339887498949, divisor 2.5 hardcodeado);
K_i = 0.375 puesto a mano en df_from_firms.py. Propuesta: retirar
K_i como métrica de validación; medir por vía física ajena a D_f;
calcular solo D_f. Sigue vigente (ABIERTO, sin actividad desde
2026-07-10).

### #35 — Diseño: K_i circular (leído ciclo 32)
Misma fórmula y números que #52, pero enmarcado como DISEÑO (no
construcción). Propuesta concreta: eliminar K_i del núcleo; si se
conserva, medir por vía física INDEPENDIENTE y comparar contra
nulo/permutación; retirar la etiqueta 'K_i medido esperado';
congelar el README a 'D_f legítimo; K_i/Ω_F en auditoría' (ver
NUCLEO_TEORICO §3). Sigue vigente.

### #48 — CSV de corales inválido (leído ciclo 32)
Contenido íntegro del CSV (2 líneas: cabecera + 1 fila): la fila
repite la cabecera como valores literales (Region/Country);
K_i_measured == K_i_law == 0.494; una sola fila, sin N_points, sin
sha256, DOI_URL a la home del portal, CRLF, D_f=2.0 sospechoso.
Propuesta: reemplazar por dato crudo real (Allen Coral Atlas) con D_f
medido por box-counting/DFA, columnas SCHEMA_ESPERADO §2, y ELIMINAR
las columnas K_i_* del esquema. Sigue vigente.

### #43 — ALMA_OMNI reintroduce K_i RECHAZADA (leído ciclo 32)
El scoring 'K_i fractal' de ALMA_OMNI mete la métrica rechazada en
el pipeline de inferencia, contradiciendo NUCLEO_TEORICO_MIU §3 y el
test anti-circularidad de PROTOCOLO_MIU §5. Propuesta: reemplazar por
D_f medido o desactivarlo; prohibir Ω_F hasta cerrar el aliasing
(pico 0.65625 c/mes > Nyquist 0.5); añadir test unitario que falle si
aparece K_i/Omega_F como métrica de validación (CI). Sigue vigente.

### #56 — Tests no funcionales (leído ciclo 32)
test_ift_solver.py y test_random_phi.py SON el CSV de corales de 207
B: no hay aserciones ni framework; cobertura efectiva 0. HUESO #24:
test_random_phi.py reportaba p<10⁻⁴⁸, imposible con n_perm=100000
(mínimo ~1e-5). Propuesta: reescribir con pytest (import/compila,
permutación con p acotado por 1/(n_perm+1), anti-circularidad que
falle si corr(K_i, D_f)==1.0), conectar a GitHub Actions. Sigue
vigente. **Distinción honesta:** el test_ift_solver.py de DRIVE
(MIU_ABSORBIDO/MIU/tests/, 2.786 B, leído en ciclo 29) SÍ es pytest
real; el del REPO MIU es el CSV corrupto. Son dos archivos distintos
con el mismo nombre.

### #45 — Secretos P0 (leído ciclo 32)
clavesnew.txt + "archivos con claves.zip" contienen en texto plano
API keys (Gemini, OpenRouter, Mistral, Groq, Cohere, DeepSeek,
NewsAPI), tokens de ≥3 bots de Telegram y una contraseña de email,
expuestos desde 2026-07-03, sin resolver >6 días. Contradice
PROTOCOLO_MIU §7. Propuesta: rotar TODAS las claves, migrar bindings
de Cloudflare a tipo secret, purgar del historial (git filter-repo /
BFG), añadir scanner (gitleaks/trufflehog) a CI. Sigue vigente.
(No se buscó ni se abrió ninguno de esos archivos; solo se reporta
lo que el issue dice. Sin valores.)

## Qué autocríticas siguen vigentes y bloquean qué

- **#52/#35/#48/#42/#34/#43 (K_i, 6 issues)** bloquean G09: sin
  PVE-01 (medir K_i por vía independiente) no hay métrica de
  validación. #43 además bloquea el pipeline de inferencia (ALMA_OMNI).
- **#53/#44/#36 (Ω_F, 3)** bloquean G03: las predicciones que usan
  Ω_F (y el pico 0.65625 > Nyquist) no son auditables.
- **#49/#41/#33 (orquestador_v9, 3)** bloquean G03: los artefactos de
  predicción (manifiesto SHA256 con hashes placeholder) no son
  reproducibles.
- **#56 (tests, 1)** bloquea todo: cobertura efectiva 0, sin CI que
  verifique nada.
- **#45/#57 (secretos, 2)** bloquean la publicación segura: P0
  abierto desde 2026-07-03.
- **#47/#39 (corrupción CSV, 2)** + **#51/#50/#40 (extensiones, 3)**
  bloquean la lectura del repo: 26 archivos no son código.
- **#38 (placeholders, 1)** + **#37 (duplicación, 1)** bloquean el
  censo: no se sabe qué es señal y qué es plantilla.

## Relación con grietas G01–G12 y G-NUEVA

- G09 (PVE-01/K_i): #35, #52, #42, #48, #34, #43 (6).
- G03 (predicciones sin datos): #44, #53, #36 (Ω_F), #49, #41, #33
  (manifiesto placeholder).
- G01 (D_eff calibración): #48 (D_f=2.0 placeholder), #38 (0–207 B
  como señal).
- G-NUEVA (estructura): #37 (duplicación), #38 (placeholders).
- G05 (FranBot), G02 (qualias), G04 (DOI), G06 (PTA-01), G08
  (PDP-01), G07 (axiomas): ningún issue de los 25.

## Duplicadas de anexo-vi vs autocríticas nuevas

- **Duplican hallazgos de anexo-vi (5):** #35, #52, #42, #48, #34
  (cluster K_i/CSV: HUESO_26/27, ciclos 27 y 31, mismos números
  0.2472 / 0.494 / 2.5). #56 es parcial: el Drive test_ift_solver.py
  es pytest real; el del repo es CSV.
- **Autocríticas nuevas (19):** #43 (ALMA_OMNI reintroduce K_i en
  inferencia), #44/#53/#36 (Ω_F aliasing con 0.65625 > Nyquist),
  #45/#57 (secretos P0, clavesnew.txt), #47/#39 (26 archivos
  byte-idénticos), #51/#50/#49/#41/#40/#33 (extensiones mentirosas:
  .py con Markdown, .yml con PDF, manifiesto SHA placeholder),
  #55 (AGPL sin atribución), #54/#46 (código muerto), #38 (suelo
  fértil sobre placeholders), #37 (duplicación).
- **#56 parcial (1).** Total: 5 + 19 + 1 = 25.

ρ(x) > 0.
