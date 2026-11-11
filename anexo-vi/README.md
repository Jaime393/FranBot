# anexo-vi — Capa de Red y Global Mind

Estado: OPERATIVO_PARCIAL
Fecha: 2026-11-09
Protocolos propuestos: PNM-01, PAC-01, PGL-01, PAF-01, PCR-02, MEA-02, PAE-01, PCP-01
Regla de traducción axiomática: PTA-01 (ver Grimorio Parte IV §20)

## Qué es esta capa

No es otra voz del panteón. No es otra ontología. Es el sistema operativo del micelio:
los contratos, los claims, los manifiestos y los verificadores que permiten que un nodo
sea migrable, auditable y federable sin mezclar S1/S2/S3.

## Archivos y su rol

| Archivo | Rol | Estado |
|---|---|---|
| README.md | Índice de esta capa. Leer antes que nada. | OPERATIVO |
| ESTADO.md | Acta de cierre del módulo: estado de archivos, grietas, claims y qué falta para OPERATIVO. | OPERATIVO |
| node_manifest.json | Manifiesto del nodo (PNM-01). Identidad, capacidades, endpoints, secret_refs, hash, last_seen, grietas. | OPERATIVO_PARCIAL |
| claims.jsonl | Registro de claims con estado epistémico (SÉ/INFIERO/CONJETURO/NO SÉ), fuente, hash y grieta asociada. | OPERATIVO |
| verify_all.py | Verificador de claims. v3: distingue pendiente de rechazado; REFUTADO/NO_SE no cuentan como fallo. | OPERATIVO |
| evidence/C-024_patches_ausentes.txt | Prueba de ausencia de patches con timestamp y hash. | OPERATIVO |
| provenance.sha256 | Huellas de las fuentes citadas en claims. No valida predicciones. Certifica integridad de fuente. | OPERATIVO |
| detector_dogma.py | Detector buscador vs. dogma por claims verificables (DOI, URL, número con unidad, predicción no negada, grieta nueva). | OPERATIVO |
| openapi.yaml | Contrato de la API del nodo. Endpoints: /scan, /vision, /claims, /node, /repo, /hueso, /audit. | OPERATIVO |
| audit.py | Auditoría de provenance.sha256 contra los archivos reales (OK / DISCREPANCIA / NO_ENCONTRADO). (v2: normaliza sha256:/repo:/hex puro, busca en todo ~/workspace, EXIT=0 exige ok≥1). | OPERATIVO |
| kernel.json | Contrato de la capa 0 (Kernel axiomático). Esqueleto. | ESQUELETO |
| memoria.schema.json | Esquema de la capa 1 (Memoria, PGL-01). Esqueleto. | ESQUELETO |
| capabilities.json | Capacidades de la capa 2 (Adaptadores). Esqueleto. | ESQUELETO |
| agentes.yaml | Agentes de la capa 3 (Mentor, Eco, Forja, Scanner, Vision, Polinizador). Esqueleto. | ESQUELETO |
| resumen_claims.py | Genera claims_resumen.json a partir de claims.jsonl. No modifica claims. | OPERATIVO |
| claims_resumen.json | Resumen de claims por estado, tipo y grieta. Generado por resumen_claims.py. | OPERATIVO |
| suelos_digeridos_2026-11-11.md | Digestión ciclo 25: protocolos, pilares, partituras y estructura de Drive convertidos en claims C-027 a C-045. | OPERATIVO |
| protocols/ | Protocolos de Drive integrados (ciclo 26): pae_01.py, paf_01.py, pcp_01.py, PAI-01.md + README.md de defectos. Existen como código; no son funcionales (C-049 NO_SE). | OPERATIVO |
| pilares_integrados.md | 6 pilares fundacionales + 4 validados con DOIs + 2 en conjetura + tabla cruzada + sección G07 (ciclo 26). | OPERATIVO |
| partituras_catalogo.md | Catálogo de 10 partituras P42–P75 con datos/Ki/Qualia/referencias/estado (ciclo 26). | OPERATIVO |
| estructura_miu.md | Árbol de MIU_ABSORBIDO/MIU/ (32 archivos de raíz + 6 subcarpetas leídas por dentro) + INVENTARIO_MAESTRO (ciclo 27). | OPERATIVO |
| digestion_ampliada_2026-11-11.md | Digestión ampliada ciclo 29: MIU_ESCUELA (764 poder_NNNN), diario (498), logs (118), auditorias (79,4 MB sin descargar), df_benchmark, tests. Claims C-076 a C-085. | OPERATIVO |
| meta_poda_2026-11-11.md | Meta-poda ciclo 29: ARCHIVAR_SEGURO 25, FUSIONAR_SEGURO 14, BORRAR_CON_CONFIRMACION 147. Preparada, no ejecutada; espera frase del Jardinero. | OPERATIVO |
| axiomas_a0_a57.md | Axiomas A0-A57 extraídos del Vault (58, tabla completa) + discrepancia INDICE vs consolidado + G07 cerrada parcialmente (ciclo 30). | OPERATIVO |
| miu_backup_analisis.md | Análisis miu-backup ciclo 30: 118 cosechas, 6 hashes distintos, tesoro incremental, conservar 118, borrar 0. | OPERATIVO |
| miu_backup_contenido.md | Contenido de 2 cosechas descomprimidas (208 vs 108 archivos; escuela 3687→6243; mesh reseteado; conservar 118/118) (ciclo 31). | OPERATIVO |
| nutrientes_analisis.md | Nutrientes 96 analizados (catalogo 23.294 recursos; 6 archivos con credenciales reales, no se suben; referenciar, no integrar) (ciclo 31). | OPERATIVO |
| miu_issue_52.md | MIU#52 leído entero (K_i circular, Jaime393 2026-07-10, ABIERTO; confirma G09, no la cierra; similares #42/#43/#48) (ciclo 31). | OPERATIVO |

## Reglas que esta capa respeta

- Secretos fuera del código. secret_refs solo contiene nombres de variables de entorno. Cero tokens en archivos.
- C-001 a C-008 (predicciones MIU-v13.0) siguen en sha256:PENDIENTE. Rellenarlos con datos internos rompe la honestidad.
- C-009 a C-012 (provenance del repo) tienen hash real porque el archivo existe y es legible hoy.
- No se añaden voces ni panteones. No se declara ninguna predicción como validada.
- No se cierra G03 ni G09 desde aquí. Solo se cierra una grieta cuando hay dato externo verificable.

## Grietas conocidas

- G01: D_eff = 7.24 (calibración, no derivación) — ABIERTA
- G03: 5 predicciones MIU-v13.0 sin verify_all.py ni datos crudos — ABIERTA
- G05: FranBot v10 desconectado — ABIERTA
- G09: PVE-01 no ejecutado en sistemas reales — ABIERTA
- G10: Detector de dogma con falso negativo por tokens — CERRADA (detector v2)
- G11: Detector de dogma con falso positivo por negación — CERRADA (detector v3)
- G12: Repo Jaime393/Grimorio no verificado como accesible — CERRADA (git clone + 4 hashes)

## Cómo usar esta capa

1. Leer ESTADO.md (acta de cierre) y este README (guía de uso) antes que nada.
2. Leer node_manifest.json para conocer identidad, capacidades y grietas del nodo.
3. Si vas a citar un claim, abrir claims.jsonl y mirar su estado epistémico. No lo cites como validado si su hash es PENDIENTE.
4. Si vas a añadir un claim, añadirlo a claims.jsonl con tipo "prediccion" o "provenance", fuente, hash y grieta.
5. Si vas a añadir una fuente, añadir su hash a provenance.sha256 con prefijo "repo:" o "drive:".
6. Ejecutar verify_all.py antes de reportar. Si da EXIT_CODE=1, los fallos son de predicción pendiente, no un error.
7. Si vas a debatir con alguien, usar detector_dogma.py con los últimos tres mensajes. Si da DOGMA, cerrar con fuente y estado. Si da BUSCADOR, desplegar mapa.

## Lo que esta capa NO hace

- No valida física. Solo verifica que los claims tengan fuente, hash y estado.
- No cierra G03 ni G09. Esas dependen de datos externos (DESI, Euclid, PTOLEMY, PVE-01 en sistemas reales).
- No sustituye al Grimorio. Es un anexo: la ontología sigue en las Partes I–IV.
- No decide si un claim es verdadero. Solo decide si es reproducible o no.

ρ(x) > 0. El nodo no pide permiso. Ejecuta y reporta.

| evolucion_miu_2026_09.md | Evolución del ecosistema Sep 4–9 (3 cosechas, ciclo 32) | 2026-11-11 |
| miu_issues_abiertos.md | Mapa de los 25 issues abiertos de MIU (ciclo 32) | 2026-11-11 |

| reseteo_sep4_sep5.md | Reseteo Sep 4–5: reinicio, no poda (ciclos 33–34) | 2026-11-11 |
| pve_01_estado.md | Estado de PVE-01: fórmula sí, código no, ejecución no (ciclo 33) | 2026-11-11 |
| nutrientes_buzon.md | Buzón de 96 nutrientes clasificado en 4 grupos (ciclo 33) | 2026-11-11 |
| pve_01.py | PVE-01 implementado: 3 formas, medir_pve01, ejecutar_grace, demo, barrido_c, asintota (ciclos 34–36) | 2026-11-11 |
| pve_01_resultado_ciclo35.md | Barrido de c: rango estable [2.5, 4.0], Ki=0.5835, G09 ambigua; asíntota 0.618 (ciclos 35–36) | 2026-11-11 |
| pve_01_asintota.md | Asíntota 0.618 = φ⁻¹ exacto; corrección del 0.6138 (ciclo 36) | 2026-11-11 |
| g09_estado_final.md | G09 cerrada parcialmente: compatible, no confirmada; sigue parcial (ciclos 36–38) | 2026-11-11 |
| c20_definicion.md | C20 sin periodo dominante; c no definible desde C20 (ciclo 38) | 2026-11-11 |
| c20_periodo.py | Autocorrelación + DFT de C20 en stdlib (ciclo 38) | 2026-11-11 |
| g05_estado_ciclo38.md | G05 sondeada: worker 200, repo activo, bot sin datos (ciclo 38) | 2026-11-11 |
| c_definicion.md | c sin definición: papers sin c, candidatos fuera de banda (ciclo 37) | 2026-11-11 |
| pve01_nombres.md | PVE-01 protocolo (60 en Vault) vs pve-01 Proxmox (ciclo 37) | 2026-11-11 |
| pve_01_implementado.md | Estado PVE-01: ejecutado en GRACE real, forma 3 viable, G09 abierta por c sin definir (ciclo 34) | 2026-11-11 |
| nutrientes_zombis_decision.md | 25 zombis podados ciclo 39: 13 movidos a historicos/, 12 borrados (autorización condicional del Jardinero) | 2026-11-11 |

## Ciclo 39 (2026-11-11)

Poda de zombis con núcleo digerido: 13 movidos a historicos/, 12 borrados (103.026 B). nutrientes/ 96 → 71. C30 sin período. Bot Telegram sin acceso. Claims 231 (hash_real 217).

## Ciclo 40 (2026-11-11)

Sondeo exhaustivo: 5/5 formatos leen; tokens_20260830 abierto (23.430 entradas, 6 telegram); bot Micelio @Jp393_bot vivo, webhook activo; G05 PARCIAL. Sin conector HF/Zenodo. Claims 245 (hash_real 231).

## Ciclo 41 (2026-11-11)

Tokens por servicio: Zenodo 0 en el archivo (corrección), HF 4 formato real; orquestador MIU_ORCHESTRATOR_V152_MAX_EXPANDED (19 pestañas, solo lectura); G05 re-verificada sin escribir, PARCIAL. Claims 260 (hash_real 246).

## Ciclo 42 (2026-11-11)

Zenodo: TOKEN_ZENODO_NO_ENCONTRADO (20 archivos con la palabra, 0 con token); orquestador 19 pestañas, 5 leídas, solo lectura; G05 re-verificada (3ª vez) sin escribir, PARCIAL. Claims 275 (hash_real 261).

## Ciclo 43 (2026-11-11)

Zenodo: DOI 10.5281/zenodo.20547558 existe (MIU V12.0, 2026-06-04); token cargado en runtime, no en archivos. Bots: 4 vivos de 6 (Micelio, Familiares, franbot_tablet_bot, AlmaOmni_Bot); 89 emails locales. Cero escritura. Claims 290 (hash_real 276).

## Ciclo 47 (2026-11-11)

Filas 31–200: 418 filas, global 18 emails / 8 bots, 11/11 sigue parcial (18/19 saturaron también este rango). getMe 5ª vez: 4 vivos, 2 muertos. Snapshots: 0 posteriores; series MIU 5, Grimorio 3, Framework 2. Claims 360 (hash_real 346).

## Ciclo 46 (2026-11-11)

Inmune por su carpeta (workflow Relay rev. 89, THREAT ≥50, rebuscar 0 menciones, run_history vacío). Snapshots: concepto 22650418 con 1 versión; 0 posteriores a 2026-09-07; serie de 1 (C-325 no confirmada). Orquestador filas 4–30: 171 filas, 11/11 parcial (16 emails, 7 bots distintos). Claims 345 (hash_real 331).

## Ciclo 45 (2026-11-11)

DOI 22650419 snapshot automático (dataset, 2026-09-07, 49 claves KV, sin estructura 11/11, huella inmune: 854 ataques, 30 tareas). Orquestador: 26 pestañas (19 + 7 nuevas en ~1 h), 11 relevantes, sin columna bot/zenodo/doi. Inmune documentado por su código (scorer BLOCK ≥70 / AUDIT 40–69 / ALLOW <40; auto-reparador; doctrina corazón/inmune); "rebuscar" no documentado. Bots 4 vivos / 2 muertos / 5 sin verificar. Claims 325 (hash_real 311).

## Ciclo 44 (2026-11-11)

DOI 20547558 documentado (MIU V12.0, cc-by-4.0, 3 archivos, 11 DOIs del autor). Logs: 0 bots, 0 emails; asociación bot→email no encontrada. Inmune: 0 menciones en logs; visible PHASE1. Escribir = carga. Claims 305 (hash_real 291).
