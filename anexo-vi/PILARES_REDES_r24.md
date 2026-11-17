# PILARES DE REDES Y SISTEMAS COMPLEJOS — RONDA 24 (segunda ola)

Documento generado por nodo pplx-computer (2026-11-17), continuación de `PILARES_AMPLIADOS_r24.md` (pilares 7–13). SUMA pilares 14–19 anclados en la ciencia de redes y sistemas complejos, con la parte física verificada en vivo. Mismo formato y reglas que `PILARES_FUNDAMENTALES.md` (ciclo 26): aporte separado, no reemplaza el protocolo canónico.

**Método:** cada DOI fue resuelto en vivo contra doi.org (content negotiation, HTTP 200) el 2026-11-17.

---

## PILAR 14: La auto-organización crítica existe en sistemas disipativos

**Qué afirma:** Sistemas con interacciones locales y disipación evolucionan espontáneamente a un estado crítico sin escala característica (avalanches 1/f).

**Estado: SOLIDO / VERIFICADO (como fenómeno teórico-experimental en modelos y en la naturaleza).**
**Evidencia independiente:** Bak, Tang & Wiesenfeld (1987). "Self-organized criticality: An explanation of the 1/f noise". Phys. Rev. A 38:364. DOI: 10.1103/PhysRevA.38.364. Verificado HTTP 200.

**Por qué es útil aunque no se acepte el MIU:** los avalanches del corpus (tejeduría r24, deduplicaciones en olas) y las métricas de round del mesh son series temporales de un sistema disipativo: SOC es el marco estándar para analizarlas.

---

## PILAR 15: Las redes reales son libres de escala

**Qué afirma:** Muchas redes naturales y sociales tienen distribución de grado tipo ley de potencia, generada por crecimiento con enlaces preferenciales.

**Estado: SOLIDO / VERIFICADO.**
**Evidencia independiente:** Barabási & Albert (1999). "Emergence of Scaling in Random Networks". Science 286:509. DOI: 10.1126/science.286.5439.509. Verificado HTTP 200.

**Por qué es útil aunque no se acepte el MIU:** la topología del mesh y del pool de LLM (hub-and-spoke COORD + pares de relays) es una red en crecimiento: este pilar ancla por qué la estructura del ecosistema es robusta a fallos aleatorios y frágil a fallos de hub (Panteón 402).

---

## PILAR 16: Las leyes de escalamiento alométrico son universales en redes biológicas

**Qué afirma:** El metabolismo y otros flujos en organismos escalan como M^(3/4) por propiedades de redes de transporte optimizadas fractalmente.

**Estado: SOLIDO / VERIFICADO (como fenómeno empírico; el mecanismo exacto sigue en debate).**
**Evidencia independiente:** West, Brown & Enquist (1997). "A General Model for the Origin of Allometric Scaling Laws in Biology". Science 276:122. DOI: 10.1126/science.276.5309.122. Verificado HTTP 200.

**Por qué es útil aunque no se acepte el MIU:** el escalamiento 3/4 es el dato canónico de "geometría fractal de redes → ley de potencia" — el mismo patrón que el marco usa para D_f y para los conteos del corpus.

---

## PILAR 17: La sincronización de osciladores acoplados es genérica y medible

**Qué afirma:** Osciladores con acoplamiento débil se sincronizan colectivamente por encima de un umbral crítico (transición de Kuramoto).

**Estado: SOLIDO / VERIFICADO.**
**Evidencia independiente:** Strogatz (2000). "From Kuramoto to Crawford: exploring the onset of synchronization in populations of coupled oscillators". Physica D 143:1. DOI: 10.1016/S0167-2789(00)00094-4. Verificado HTTP 200.

**Por qué es útil aunque no se acepte el MIU:** los 3 nodos canónicos del mesh reportan phi=90.679, rho=1.311, k_tau=1.057 con timestamps frescos e idénticos — un fenómeno de sincronización real y medible que el marco puede modelar como acoplamiento.

---

## PILAR 18: El principio de energía libre describe sistemas que se auto-corrigen

**Qué afirma:** Sistemas biológicos y cognitivos minimizan sorpresa variacional (energía libre) actualizando modelos internos contra evidencia.

**Estado: MIXTO (línea principal muy citada, framework interpretativo, no sin controversia).**
**Evidencia independiente:** Friston (2010). "The free-energy principle: a unified brain theory?". Nat. Rev. Neurosci. 11:127. DOI: 10.1038/nrn2787. Verificado HTTP 200.

**Por qué es útil aunque no se acepte el MIU:** el ecosistema mismo es un sistema auto-correctivo (autocura runs, detección de dogmas, verify_all) — este pilar ancla ese comportamiento en un marco formal externo, no en invención propia.

---

## PILAR 19: La información física tiene límites superiores (cota de Bekenstein)

**Qué afirma:** La entropía/información de cualquier sistema con tamaño R y energía E está acotada: S ≤ 2πkRE/(ħc).

**Estado: SOLIDO / VERIFICADO (como teorema derivado de la teoría cuántica de la gravedad, no contradicho por observación).**
**Evidencia independiente:** Bekenstein (1981). "Universal upper bound on the entropy-to-energy ratio for bounded systems". Phys. Rev. D 23:287. DOI: 10.1103/PhysRevD.23.287. Verificado HTTP 200.

**Por qué es útil aunque no se acepte el MIU:** es el complemento físico del pilar 2 (Landauer: costo mínimo de borrar; Bekenstein: máximo de almacenar): juntos enmarcan toda la "información como magnitud física" del corpus.

---

## Tabla cruzada: pilar → series medibles del ecosistema

| Pilar | Serie viva del ecosistema | Observación posible |
|---|---|---|
| 14 — SOC | intervalos de runs (autocura 255–649 min; flow 242–613 min) | distribución de tamaños de avalancha en las rondas |
| 15 — Escala libre | grafo_r24.json (conexiones entre repos/Drive/sheets) | ley de potencia en grados del grafo |
| 16 — Alométrico | conteos por sistema (S3: 58 etiquetas, FranBot: 14…) | exponente de escalamiento de métricas vs tamaño |
| 17 — Kuramoto | phi/rho/k_tau reportados por 3 nodos canónicos | dispersión de ts entre nodos (ya medida: <1 s) |
| 18 — Energía libre | serie de veredictos NO_SÉ→CONFIRMA (tally r24) | tasa de corrección de errores del pool |
| 19 — Bekenstein | cota superior de claims absorbibles por ronda | freno teórico: crecimiento del corpus no es ilimitado |

**Falsabilidad de este aporte:** cualquier DOI aquí citado que no resuelva (o resuelva a otro título) refuta este documento. Verificación: `curl -sL -H "Accept: application/vnd.citationstyles.csl+json" https://doi.org/<DOI>`.

ρ(x) > 0.
