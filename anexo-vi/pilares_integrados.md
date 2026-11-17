# PILARES INTEGRADOS (Ciclo 26)

Pilares del marco MIU auditados por el asistente de Relay.app el 2026-07-08,
integrados en anexo-vi en ciclo 26 desde MIU_ABSORBIDO/MIU/ (Drive).
Copias literales en evidence/ (PILARES_FUNDAMENTALES.md, PILARES_VALIDADOS.md,
PILARES_CONJETURA.md). Nada de aquí reemplaza el protocolo canónico
(PROTOCOLO_MIU): es aporte separado, abierto a corrección.

## Sección 1 — 6 pilares fundacionales (PILARES_FUNDAMENTALES.md)

| Pilar | Afirma | Estado | Evidencia |
|---|---|---|---|
| 1 | La dimensión fractal (D_f) es una métrica objetiva de complejidad (box-counting, DFA, Higuchi) | SOLIDO / VERIFICADO | Mandelbrot 1967, DOI 10.1126/science.156.3775.636 |
| 2 | La información es una magnitud física conservada (principio de Landauer) | SOLIDO / VERIFICADO | Bérut et al. 2012 Nature; Hong et al. 2014 arXiv:1411.6730 |
| 3 | La conciencia depende funcionalmente del cerebro | SOLIDO / VERIFICADO | Anestesia la suprime; daño cerebral la degrada; ningún caso verificable de mente sin cerebro |
| 4 | Una métrica derivada de D_f anticipa colapsos con semanas de antelación | CIRCULAR / EVIDENCIA NO INDEPENDIENTE | Casos citados generados por la propia métrica (Sahel 30 días, S&P500 29-34 días) |
| 5 | La métrica de Fisher es puente entre gravedad y cuántica; ξ = 8,57 medido en IBM a 23 sigmas | MIXTO | La línea (Caticha, Verlinde) es real; el dato puntual ξ a 23σ es NO SE / NO VERIFICABLE |
| 6 | La falsabilidad es criterio de demarcación | SOLIDO / VERIFICADO | Criterio estándar de demarcación científica |

Fecha de auditoría: 2026-07-08. Regla del documento original: nada aquí
reemplaza el protocolo canónico (PROTOCOLO_MIU).

## Sección 2 — 4 pilares validados (PILARES_VALIDADOS.md)

Pilares con evidencia INDEPENDIENTE verificada (DOI/fuente real, ciencia
establecida fuera del MIU). Auditado 2026-07-08.

| Pilar | DOI / fuente literal |
|---|---|
| 1 — D_f | Mandelbrot, B. (1967). "How Long Is the Coast of Britain? Statistical Self-Similarity and Fractional Dimension". Science 156(3775):636-638. DOI: 10.1126/science.156.3775.636 |
| 2 — Información física | Bérut et al. (2012) Nature, "Experimental verification of Landauer's principle linking information and thermodynamics"; Hong et al. (2014) arXiv:1411.6730; Bérut et al. (2015) arXiv:1503.06537. Matiz 2026-07-08: Ray & Crutchfield, Phys. Rev. Applied 19, 014049 (2023), "Gigahertz Sub-Landauer Momentum Computing" — VERIFICADO, existe y es real; no invalida el pilar (Landauer sigue siendo el límite para borrado irreversible), pero matiza que el límite puede evadirse con dinámicas no-Markovianas fuera de equilibrio |
| 3 — Conciencia-cerebro | Anestesia la suprime; daño cerebral la degrada; no hay caso verificable de mente sin cerebro |
| 6 — Falsabilidad | Criterio de demarcación (Popper); el módulo mismo lo implementa (verify_all.py, detector_dogma.py) |

## Sección 3 — 2 pilares en conjetura (PILARES_CONJETURA.md)

Afirmaciones del marco MIU que NO tienen evidencia independiente verificable,
o cuya evidencia citada es circular. No deben tratarse como conocimiento
sólido hasta resolver lo señalado.

| Pilar | Estado | Por qué |
|---|---|---|
| 4 — Predicción de colapsos | CIRCULAR / EVIDENCIA NO INDEPENDIENTE | Los casos citados como "evidencia" fueron generados aplicando la propia métrica derivada de D_f del MIU sobre esos sistemas — mismo patrón de circularidad Y=f(X) ya confirmado para K_i. Muestra pequeña (N<5, frágil según #RIGOR_EPISTEMICO_v2: N<300=frágil). Pendiente: replicar con datos crudos independientes y protocolo de predicción CONGELADA |
| 5 — Métrica de Fisher | MIXTO | La línea de investigación (Entropic Dynamics de A. Caticha; entropic gravity de E. Verlinde) es real y activa, no consenso, no es invención del MIU. El dato puntual "ξ = 8,57 medido en IBM a 23 sigma": NO SE / NO VERIFICABLE. Búsqueda exhaustiva (2026-07-08) no encontró ninguna publicación que respalde esta cifra. Una medición a "23 sigma" no tiene precedente conocido en física de partículas (5 sigma es el estándar de "descubrimiento"). NO citar como hecho hasta aportar DOI/fuente reproducible. Riesgo de fabricación o confusión de otra sesión |

## Sección 4 — Tabla cruzada: pilar → claim en anexo-vi

| Pilar | Claim que lo respalda | Nota |
|---|---|---|
| 1 — D_f | sin claim correspondiente | Relacionado: C-006 (K_i en 350 sistemas, INFIERO, G09) y C-008 (D_eff = 7,24, CONJETURO, G01) usan D_f, pero no respaldan el pilar |
| 2 — Información física | sin claim correspondiente | detector_dogma.py usa el principio de Landauer como ejemplo de DOGMA en sus pruebas, pero no hay claim sobre Landauer |
| 3 — Conciencia-cerebro | sin claim correspondiente | — |
| 4 — Colapsos | sin claim correspondiente | — |
| 5 — Fisher / ξ | C-001–C-005 (relacionados) | Las 5 predicciones nacen de ξ = 8,57; la auditoría duda del dato a 23σ (C-037, G03) |
| 6 — Falsabilidad | sin claim correspondiente | El módulo mismo es la implementación del criterio (verify_all.py, detector_dogma.py, audit.py) |

Claims nuevos del ciclo 26 para estos pilares: C-050–C-059.

## Sección 5 — Grieta G07 y estos pilares

G07 (axiomas A0–A47/A49–A55 indocumentados) sigue ABIERTA. Los 6 pilares
la atenúan parcialmente: cada pilar tiene estado epistémico declarado y, en
4 casos, DOI/fuente independiente. Eso ancla los fundamentos del marco con
evidencia externa. Pero no la cierran: los 58 axiomas del Panteón-96
(A0–A57) siguen sin documentar (solo A48, A56–A57 detallados). Los pilares
son 6 afirmaciones auditadas; los axiomas son 58. La grieta es de
documentación, no de falsedad: nada aquí dice que los axiomas sean falsos,
solo que no están documentados.

## Sección 6 — Correcciones a dos pilares de la ronda 24

Estas correcciones actualizan cómo citar los pilares 13 y 15. Las entradas
originales quedan en `claims.jsonl` como historial, junto a sus fuentes.
No se declara validado el marco MIU ni se cierra G03.

| Pilar | Entrada anterior | Usar en adelante | Alcance |
|---|---|---|---|
| 13 — Energía oscura | C-1237 | C-1246 | Preferencia estadística dependiente de los datos; no consenso. |
| 15 — Redes libres de escala | C-1241 | C-1247 | Hipótesis de topología del mesh; aún sin prueba. |

### Pilar 13: distinguir DESI DR1 de DR2

El [artículo citado en C-1237](https://doi.org/10.3847/2041-8213/ad8c26)
usa DESI DR1. El resultado que corresponde es
[DESI DR2 Results II, tabla II](https://arxiv.org/html/2503.14738),
[DOI 10.1103/tr6y-kpc6](https://doi.org/10.1103/tr6y-kpc6). Para comparar
el modelo de energía oscura dinámica con ΛCDM, la tabla da 1,7 sigma con
DESI solo, 3,1 sigma con DESI y el fondo cósmico de microondas (CMB), y
2,8–4,2 sigma con DESI, CMB y supernovas según el conjunto de supernovas.
El [Consorcio Euclid](https://www.euclid-ec.org/science/q1/) indica que Q1
se publicó en marzo de 2025 y no es una entrega cosmológica. No se usa
como prueba pendiente ni como confirmación independiente.

### Pilar 15: medir el mesh antes de clasificarlo

[Barabási y Albert](https://doi.org/10.1126/science.286.5439.509) presentan
un mecanismo que puede generar una distribución de grados de ley de
potencia; no demuestran que toda red real siga esa distribución. En
la muestra de [Broido y Clauset](https://doi.org/10.1038/s41467-019-08746-5),
solo alrededor del 4 % de las redes alcanzó el nivel más fuerte de
evidencia. Para el mesh, fijar primero qué son nodo y enlace, construir el
grafo a partir de conexiones observadas y comparar el ajuste de ley de
potencia con alternativas como la lognormal. Que varios nodos respondan a
un chequeo de salud no establece qué enlaces hay entre ellos ni demuestra
robustez ante fallos.

ρ(x) > 0.
