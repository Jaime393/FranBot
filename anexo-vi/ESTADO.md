# ESTADO — Módulo anexo-vi

Fecha del acta: 2026-11-10T04:08:43Z
Ciclo de cierre: 10
Estado del módulo: CONSOLIDADO (provenance sellada por script, predicciones pendientes por diseño)

## Qué es este archivo

No es un README. No es una guía de uso. Es un acta: fotografía el estado del módulo
en el instante del cierre. Cualquier nodo que lea este archivo sabe qué está verificado,
qué está pendiente y qué falta para OPERATIVO, sin tener que auditar 15 archivos a mano.

Si algo de lo que aquí dice cambia, este archivo debe actualizarse en el mismo ciclo.
Si no se actualiza, deja de ser un acta y se convierte en una promesa.

## Estado de los archivos del módulo

15 archivos, 0 huérfanos. Todos documentados en README.md.

| Archivo | Rol | Estado |
|---|---|---|
| README.md | Guía de uso del módulo | OPERATIVO |
| ESTADO.md | Este acta | OPERATIVO |
| node_manifest.json | Manifiesto PNM-01 | OPERATIVO_PARCIAL |
| claims.jsonl | Registro de claims (12) | OPERATIVO |
| claims_resumen.json | Resumen por estado/tipo | OPERATIVO |
| resumen_claims.py | Generador del resumen | OPERATIVO |
| verify_all.py | Verificador de claims v3: distingue pendiente de rechazado; REFUTADO/NO_SE no cuentan como fallo. | OPERATIVO |
| evidence/C-024_patches_ausentes.txt | Prueba de ausencia de patches con timestamp y hash. | OPERATIVO |
| provenance.sha256 | Huellas de fuentes | OPERATIVO (sellado) |
| audit.py | Auditor de provenance | OPERATIVO (v3) |
| detector_dogma.py | Detector buscador vs. dogma | OPERATIVO (v3) |
| openapi.yaml | Contrato de la API | OPERATIVO |
| kernel.json | Núcleo axiomático | OPERATIVO |
| memoria.schema.json | Esquema de memoria | OPERATIVO |
| capabilities.json | Adaptadores declarados | OPERATIVO |
| agentes.yaml | Agentes del nodo | OPERATIVO |

## Estado de las grietas

| Grieta | Descripción | Estado |
|---|---|---|
| G01 | D_eff = 7.24 (calibración, no derivación) | ABIERTA |
| G02 | Qualias #528–#765 sin fuente en PDFs | ABIERTA (no tocada en este módulo) |
| G03 | 5 predicciones MIU-v13.0 sin verify_all.py ni datos crudos | ABIERTA |
| G04 | DOI del Grimorio pendiente | ABIERTA (no tocada en este módulo) |
| G05 | FranBot v10 desconectado | ABIERTA |
| G06 | PTA-01 establecido, no validado por SIK | ABIERTA |
| G07 | Axiomas A0–A47 y A49–A55 no documentados | ABIERTA (no tocada en este módulo) |
| G08 | PDP-01 establecido, no ejecutado | ABIERTA |
| G09 | PVE-01 no ejecutado en sistemas reales | ABIERTA |
| G10 | Detector de dogma con falso negativo por tokens | CERRADA (v2) |
| G11 | Detector de dogma con falso positivo por negación | CERRADA (v3) |
| G12 | Repo Jaime393/Grimorio no verificado como accesible | CERRADA (git clone) |
| G13 | — | NO EXISTE |

## Estado de los claims

12 claims en total. 4 con hash real, 8 con hash pendiente por diseño.

| ID | Tipo | Estado | Hash | Grieta |
|---|---|---|---|---|
| C-001 | prediccion | CONJETURO | PENDIENTE | G03 |
| C-002 | prediccion | CONJETURO | PENDIENTE | G03 |
| C-003 | prediccion | CONJETURO | PENDIENTE | G03 |
| C-004 | prediccion | CONJETURO | PENDIENTE | G03 |
| C-005 | prediccion | CONJETURO | PENDIENTE | G03 |
| C-006 | prediccion | INFIERO | PENDIENTE | G09 |
| C-007 | prediccion | INFIERO | PENDIENTE | G09 |
| C-008 | prediccion | CONJETURO | PENDIENTE | G01 |
| C-009 | provenance | SE | sha256:537d643001af9a47fb097aa7023361f43d7263cf9f55fe18e33be787f67c4dcd | G12 |
| C-010 | provenance | SE | sha256:37e26d79740cd5aaa5c3c1e8389d392bdfd006ec71bbe6f8509c295fcd1b9caf | G12 |
| C-011 | provenance | SE | sha256:478bacd3eaecaf7be8e9c25a90a46bae953d02e0f3c2b16c485f824dbb77cf5b | G12 |
| C-012 | provenance | SE | sha256:6a8ab91cfdb2ea8af2bf7d83a2c39f2e0403f176efba8363d8cabe0ece2f9869 | G12 |

## Última auditoría

- audit.py v3: EXIT=0 — RESUMEN: ok=10 discrepancia=0 no_encontrado=0 omitido=1
- verify_all.py v3: EXIT=1 — 8 fallos de predicción (C-001 a C-008, por diseño, G03 abierta), 0 fallos de provenance, 0 fallos de rechazo.
- Publicación ciclo 20: 7/8 archivos FranBot en GitHub + 18/18 archivos anexo-vi como subcarpeta. HEAD remoto c45632c1. micelio.yml pendiente por permiso workflows de la App.
- Última ejecución: 2026-11-10T04:05:51Z

## Qué falta para OPERATIVO

El módulo está en OPERATIVO_PARCIAL. Lo que falta no es de software: es de host.

- Un host con `miu_scanner.py` instalado (Termux, VPS o equivalente).
- Un `ecosystem_map.json` generado por ese scanner.
- Un `/scan` real que devuelva datos de ese host, no un error.

Hasta que eso exista, `node_manifest.json` seguirá en OPERATIVO_PARCIAL y este acta
lo declarará como carencia de entorno, no como grieta epistémica.

## Reglas que este módulo no rompe

- C-001 a C-008 no se rellenan sin datos externos verificables.
- G01, G03, G05, G09 no se cierran desde aquí.
- No se añaden voces al panteón.
- No se añaden tokens ni claves.
- No se declara ninguna predicción como validada.
- Cada cambio en este módulo actualiza el ESTADO.md en el mismo ciclo.

ρ(x) > 0. El módulo no pide permiso. Se audita, se documenta y se declara.
