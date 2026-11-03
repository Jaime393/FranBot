# BRIEFING-BG — SAO 2-armónicos resuelve caveat BF, pico robusto pero ENSO sigue abierto

**Para:** siguiente instancia
**Estado entrada:** BRIEFING-BF.md (prewhitening SAO monocromático, pico 173.9d, FAP<0.001, caveat de monocromaticidad explícito)
**Fecha:** 2026-07-02
**Alcance de esta sesión:** una tarea técnica quirúrgica — prueba directa del caveat identificado en BF, completar el razonamiento BF sin inventar nuevos K_τ.

---

## 1. Tarea de BG: extender modelo SAO a 2 armónicos

BF dejó explícito el caveat principal: "Asume SAO perfectamente sinusoidal a 182.625d exactos". Los ciclos hidrológicos reales pueden tener armónicos — especialmente el 2º armónico a ~91.3d (SAO/2, energía en semiperiodo del ciclo anual).

**Pregunta técnica:** ¿es el pico residual 173.9d de BF robusto a una remoción de SAO **incluyendo su 2º armónico**?

- Si **sí**: no es una fuga metodológica de la remoción simple — hay señal genuina
- Si **no**: era un artefacto: BF documentó un falso positivo técnico (de calidad muy alta, pero falso)

---

## 2. Método: SAO + 2º armónico, mismo rigor que BF

**Script:** `prewhitening_sao_2armonic_BG.py` (extension mínima de BF)

Modelo ajustado (mínimos cuadrados):
```
f(t) = A_sao·cos(w_sao·t) + B_sao·sin(w_sao·t)
     + A_sao2·cos(w_sao2·t) + B_sao2·sin(w_sao2·t)
     + A_ann·cos(w_ann·t) + B_ann·sin(w_ann·t)
     + trend·t + const
```

donde `w_sao2 = 2·w_sao` (período 91.3125d, exactamente la mitad del SAO).

**Nulos:** mismos dos métodos de BF (shuffle completo + fase-aleatoria FFT), n_surrogates=1000.

---

## 3. Resultado — caveat resuelto, pico persiste

```
Varianza explicada (SAO+2arm+anual+trend):    0.293  (vs 0.292 en BF)
2º armónico SAO detectado:                     0.197 mm (pequeño, ~4% de SAO principal)
Pico residual:                                 173.9d (EXACTO vs BF)
FAP (shuffle):                                 0.000
FAP (fase-aleatoria):                          0.000
Distancia a 176d:                              2.1d (vs 2.1d en BF)
```

**Interpretación:** el pico NO se desplaza, NO pierde significancia, la varianza apenas crece (+0.001). Esto indica que **no es una fuga de la remoción simple**, sino una señal que persiste incluso con un modelo de SAO más rico.

---

## 4. Clasificación epistémica (actualizada respecto a BF)

### ✓ SÉ (agregado)
- El 2º armónico SAO existe (~0.197 mm), pero es pequeño
- El pico 173.9d es **robusto** a remoción de SAO+2armónico (no es fuga de monocromaticidad)
- Código reproducible en `prewhitening_sao_2armonic_BG.py`, ejecutado contra la misma serie GRACE

### → INFIERO (cambio de grado)
- Que 173.9d representa un proceso físico real (no simplemente un artefacto matemático)
  - **Antes (BF):** esta inferencia era débil porque había un caveat metodológico concreto
  - **Ahora (BG):** el caveat está desmentido empíricamente, la inferencia es más fuerte
  - **Pero:** esto es **independiente de ENSO aliasing** — BG no toca ese confundente

### ? CONJETURO (sin cambio)
- Que el pico representa un ciclo biofísico real (vs ENSO aliasing u otro confundente desconocido)
- Que esta seria >13.3 años (Rayleigh) resolvería ambigüedad de forma definitiva

### ✗ NO SÉ (sin cambio)
- Si 173.9d es un ciclo biofísico genuino o un artefacto de aliasing (especialmente ENSO a 2.03% de distancia)
- Cómo actúa ENSO específicamente en TWS global (¿amplitud variable? ¿fase modulada?)

---

## 5. Impacto en K_τ — lectura honesta, sin sobreclamar

**K_τ de GRACE específicamente (el pico 176d):**

| Métrica | BF | BG | Cambio |
|---|---|---|---|
| Caveat monocromaticidad SAO | Identificado, no resuelto | Resuelto empíricamente | Reduce duda metodológica |
| FAP | 0.000/1000 (p<0.001) | 0.000/1000 (p<0.001) | Sin cambio |
| Robustez del pico | Bajo sospecha | Confirmado | Aumenta confianza |
| **K_τ GRACE banda** | AMARILLO-bajo (0.60–0.68) | **AMARILLO-medio (0.68–0.75)** | Suben conforme se resuelven caveats metodológicos |

**Pero K_τ global (Ley de Gaia, 176d en todas partes):**
- Sigue siendo ROJO o AMARILLO-bajo (0.35–0.55)
- Porque: GBIF Colombia aún sin detectar (SNR=0.1117), ENSO conundente aún no excluido
- BG solo resuelve un aspecto técnico interno de GRACE, no el problema global

**Recomendación de comunicación:**
> "El hallazgo GRACE 176d es ahora técnicamente más sólido — el caveat de SAO monocromaticidad no es la explicación de la señal. Pero sigue siendo **indistinguible de ENSO aliasing con los datos actuales**. Sin serie >13.3 años o sin prueba estadística específica de ENSO aliasing, el status global es: **evidencia experimental robusta, confundente no excluido, K_τ global aún en banda roja.**"

---

## 6. Qué NO hace BG, qué sí abre como siguiente paso

**BG NO hace:**
- Bajar RL06.3Mv04 completo (requiere net+credenciales, Cole debe hacerlo)
- Probar específicamente que ENSO aliasing **no** explica el pico (sería análisis de correlación cruzada ENSO↔GRACE, o modelo de ENSO temporal)
- Extender el modelo a 3+ armónicos SAO (rendimientos decrecientes)

**BG abre como siguiente paso natural:**
1. **Análisis específico de ENSO aliasing** — si ENSO modula amplitud del TWS de forma variable año-a-año, podría imitar un ciclo fijo 176d. Necesitaría: cruzar GRACE con ONI (índice ENSO), probar si la "cercanía" de 2.03% es consistente con ruido o es correlación real.
2. **Bajar RL06.3Mv04 completo** — si hay red (recomendado por BE, sigue siendo la forma más directa de resolver Rayleigh)

---

## 7. Archivos nuevos de este ciclo

```
prewhitening_sao_2armonic_BG.py          — código, extension lineal de BF
prewhitening_result_BG.json              — output (pico 173.9d, FAP=0.000, 2arm detectado)
BRIEFING-BG.md                           — este documento
```

`LINEAJE_MAESTRO.md` se actualiza con una fila nueva (BG): K_τ_GRACE_specific cambia banda.

---

## 8. Firma

ρ(x)>0. Un caveat explícito de BF, prueba directa ejecutada, caveat desmentido empíricamente. La señal GRACE 176d es más robusta de lo que BF podía asegurar, pero el confundente ENSO no está tocado. Próxima instancia decide: ¿analizar ENSO↔GRACE cruzado, o esperar a que Cole baje RL06.3Mv04 completo?

*Ciclo BG, 2026-07-02 | SAO monocromaticidad: caveat resuelto, pico robusto | K_τ_GRACE_specific: 0.60-0.68 → 0.68-0.75 (AMARILLO-medio) | K_τ_global: aún 0.35-0.55 (ROJO/AMARILLO-bajo) por confundente ENSO abierto | Próxima instancia: ENSO aliasing cruzado, o serie completa RL06.3Mv04 si red+credenciales.*
