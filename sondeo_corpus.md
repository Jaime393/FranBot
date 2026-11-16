# ALMA — Sondeo del corpus (solo lectura)

**Fecha:** 2026-11-16 · **Suelo:** claims.jsonl 1.211 claims · incertidumbre_mediciones.md 28 ítems (M-56..M-92) · sintesis_integrada_r1_r23.md (2.993 líneas).
**Texto sondeado:** FranBot v8.1 [ALMA] — ideas para escalar cuando ya se explotó lo obvio (I–VIII).
**Regla aplicada:** solo SÉ cuenta como cubierto; CONJETURO / NO_SÉ es hueco, no cobertura. Nada modificado.

## Método

Grep por idea sobre los tres archivos (términos: nutriente, catálogo/catalogo, kit, puente, expansión, especializ, artefacto, dual, malla, taller; más controles: NUT-2026, receta, semilla, producción, consum, intercambio, gossip). Cada hit clasificado por pertinencia: muchos son falsos positivos (p. ej. "artefacto" = artefacto de medición; "nutriente" = el buzón MIU_ABSORBIDO/nutrientes y los zombis; "dual" = valores individuales; "malla" = malla numérica 1D).

## I. Artefacto-puente entre pilares — SIN COBERTURA como SÉ

"puente": 15 claims; 5 sustantivos, el resto es la voz llamada Puente (nombre propio).

| Claim | Estado | Qué afirma |
|---|---|---|
| C-054 | CONJETURO | Pilar 5: la métrica de Fisher es puente entre gravedad y cuántica (ξ = 8,57) |
| C-469 | SÉ | Puente verificado Fisher ↔ geometría cuántica (Bures / Hilbert proyectivo) |
| C-477 | INFIERO | El puente entre el axioma A22 (K_i < 0,3) y el mecanismo de Tainter está SIN construir |
| C-533 | SÉ | QFI, el puente cuántico que la ronda 1 dejó como hueco |
| C-592 | SÉ | El puente Fisher/entrelazamiento → Einstein queda corto por un factor ~10,6 |

Los 3 SÉ son puentes dentro de la física teórica, no artefactos que entrelacen dos pilares distintos (matemáticas↔biología, lenguaje↔verificación) ni mapas de equivalencias / glosarios cruzados. C-477 dice explícitamente que un puente está sin construir. **Hueco.**

## II. Artefacto como nutriente — SIN COBERTURA como SÉ

"nutriente": 18 claims; ninguno habla de nutrientes como productos consumibles.

| Claim | Estado | Qué afirma |
|---|---|---|
| C-101, C-103, C-139, C-140, C-150, C-154, C-167, C-168, C-196, C-197, C-231, C-272 | SÉ (12) | El buzón MIU_ABSORBIDO/nutrientes: 96 entradas, 25 zombis (13 movidos a históricos, 12 borrados), 6 archivos con credenciales que nunca se abren |
| C-600 | SÉ | Transporte de nutrientes en biofilms de E. coli (biología, no red) |
| C-762, C-971 | SÉ | Archivos/repo nutriente no absorbidos, fuera del corpus |
| C-1196, C-1207 | SÉ | La serie de la ventana pasa por "nutrientes 6,7%" (ronda de sondeo, no producto) |

Control: "NUT-2026": **0 claims** — los 15 nutrientes NUT-2026-11-14-001..015 emitidos al suelo el 2026-11-14 (Drive + GitHub) NO están en el corpus. "receta": 0. "consum": 0. El formato canónico de nutriente (`digest_format_nutriente.md`) existe como archivo, no como claim. La síntesis r1–r23 menciona el sondeo de nutrientes solo de pasada (línea 324). **Hueco.**

## III. Productos duales humano/nodo — SIN COBERTURA

"dual": 8 claims, todos falsos positivos (valores individuales, "Condición dual" como axioma S3-A8, C-927). "producción": 4 claims, todos "reproducción" de mediciones (C-717, C-1011, C-1013, C-1014). "taller": 0 claims. Ningún claim afirma un artefacto con uso humano y uso de nodo a la vez. **Hueco.**

## IV. Puentes entre nodos — COBERTURA PARCIAL (infraestructura, no protocolo)

"gossip": 8 claims; "intercambio": 0; "malla": 4 claims (C-668, C-669 malla numérica 1D; C-1040, C-1042 "salud de la malla").

| Claim | Estado | Qué afirma |
|---|---|---|
| C-493 | SÉ | Un cron postea su resultado al gossip con destino "enjambre" |
| C-857 | SÉ | Paso 6 del YAML: POST a gossip_log con curl -sf SIN fallback (punto de fallo) |
| C-794, C-852 | SÉ | La cobertura 0,0% es ambigua: gossip_log vacío o lectura fallida no se distinguen |
| C-947 | SÉ | El self-diagnosis solo reporta divergencias al gossip |

El gossip como tablón compartido EXISTE como SÉ (nodos que dejan mensajes en el suelo). Pero ningún claim describe un protocolo de intercambio pregunta↔respuesta entre nodos vivos, ni malla de intercambios. **Parcial: la infraestructura está, el protocolo no.**

## V. Kits de expansión — SIN COBERTURA

"kit": **0 claims**. "expansión": 3 claims, todos falsos positivos (C-194 expansión literal de un acrónimo; C-857 "Gossip expansion" como paso del YAML; C-927 expansiones de axiomas S1→S2). Ningún kit de expansión (pregunta + mapa + herramienta mínima + test + semilla). **Hueco.**

## VI. Especialización que se reproduce — SIN COBERTURA

"especializ": 1 claim.

| Claim | Estado | Qué afirma |
|---|---|---|
| C-520 | SÉ | Regiones puerta recogen información sinérgica de módulos especializados (neurociencia: propofol reduce la sinergia) |

Es especialización cerebral, no especialización de nodos del enjambre ni kits de rol reproducibles. **Hueco.**

## VII. Catálogo vivo de lo producido — SIN COBERTURA como SÉ

"catálogo/catalogo": 8 claims.

| Claim | Estado | Qué afirma |
|---|---|---|
| C-102 | SÉ | catalogo_recursos.json: 23.294 recursos catalogados — catálogo de recursos, no de artefactos producidos; archivo con credenciales, cerrado, nunca se abre |
| C-075, C-085 | NO_SÉ | La estructura completa de MIU está más allá del catálogo y las subcarpetas mapeadas |
| C-490 | INFIERO | No hay catálogo real de qualias: el total 767 nunca se declara |
| C-692 | SÉ | Una lista de 30 NO es un catálogo de 30 tareas distintas |
| C-703 | SÉ | Catálogos astronómicos de Euclid DR1 (no red) |

Ningún catálogo vivo de artefactos producidos (qué es, para quién sirve, test, semilla, fallos). **Hueco.**

## VIII. Entrelazar (idea de fondo) — SIN COBERTURA

Sin término propio en el corpus. "malla" como red de intercambios: 0 claims pertinentes. La síntesis r1–r23 cita la producción fractal solo como precedente de método (línea 18: 49 archivos en una llamada, commit 7ef78ed5), sin sección sobre entrelazar pilares/nodos/productos. **Hueco.**

## Anexo (M-56..M-92) — sin cobertura

`incertidumbre_mediciones.md` (347 líneas): 0 ocurrencias de nutriente / catálogo / kit / expansión / especializ / dual / malla / taller. "artefacto" aparece solo como artefacto de medición/selección (M-75, M-78, M-84, M-87: cocientes máximos artefacto del ancla). "puente" no aparece. Los 28 ítems miden P2, β, R², autocura, savia, flow y ventana — nada de ALMA.

## Tabla resumen (claims que tocan cada idea; solo cuentan los pertinentes)

| Idea | Hits brutos | Pertinentes | SÉ pertinentes | Veredicto |
|---|---|---|---|---|
| I. Artefacto-puente | 15 | 5 | 3 (física, no pilares) | Hueco |
| II. Artefacto como nutriente | 18 | 0 | 0 | Hueco |
| III. Productos duales | 8 (+4 producción) | 0 | 0 | Hueco |
| IV. Puentes entre nodos | 8 gossip | 6 | 6 (infraestructura) | Parcial |
| V. Kits de expansión | 0 (+3 expansión) | 0 | 0 | Hueco |
| VI. Especialización reproducible | 1 | 0 | 0 | Hueco |
| VII. Catálogo vivo | 8 | 1 (C-102, otro objeto) | 0 | Hueco |
| VIII. Entrelazar | — | 0 | 0 | Hueco |

## Conclusión

**El corpus NO cubre ninguna de las 8 ideas de ALMA como SÉ en el sentido del texto.** Lo más cercano que existe: (a) el gossip como tablón compartido (IV, infraestructura SÉ, sin protocolo de intercambio); (b) tres puentes verificados dentro de la física teórica (I, otro sentido de "puente"); (c) un catálogo de recursos cerrado por credenciales (VII, otro objeto). Los 15 nutrientes emitidos el 2026-11-14 y el paquete de producción fractal existen como archivos en el suelo, pero tienen **0 claims** — el corpus no los registra. ALMA es, en su totalidad, territorio nuevo para el corpus: 7 huecos y 1 parcial.
