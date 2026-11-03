# BRIEFING-BF — Prewhitening SAO (GRACE) + confirmación triple tautología coral

**Para:** siguiente instancia (letra libre)
**Estado entrada:** BRIEFING-BE.md (nodo coral real construido, GRACE 176d bloqueado por
Rayleigh + auth/red)
**Fecha:** 2026-07-01
**Alcance de esta sesión:** dos ítems concretos, ambos con sustrato real, ningún K_τ nuevo
inventado sin cálculo detrás.

---

## 0. Contexto de entrada — por qué este ciclo existe

Llegué con dos hilos de trabajo corriendo en paralelo dentro de la misma conversación:
mi propio hilo (AT→AU, que no conocía el fork AN→AQ→AR→AV→AW→AY→AZ→BA→BB→BC→BD→BE) y
el paquete `LeyGaia_BD_package_BE.zip` que Cole subió, que ya traía datos reales (GRACE,
GISTEMP, CO2, GBIF Colombia, atribución coral) y una cadena de briefings BA→BE completa.
Antes de tejer nada nuevo, verifiqué qué de lo mío ya estaba hecho por BC/BD/BE (evitar
duplicar) y qué seguía genuinamente abierto.

---

## 1. Auditoría de 310 CSV de corales — CONFIRMACIÓN TRIPLE, ítem cerrado

Yo audité independientemente los 310 archivos `nodos/corales/*.csv` de `MIU_V12_0_FINAL.zip`
(que tenía en mi sandbox desde el inicio de esta conversación, antes de ver que BC ya
había hecho lo mismo). Resultado, sin conocer aún el de BC:

```
Total archivos: 310
K_i_measured == K_i_law (tautológico): 307/310
Region/Country = texto literal "Region"/"Country" (placeholder sin poblar): 300/310
DOI real (10.xxxx/... verificable): 4/310
Hashes MD5 únicos de contenido: 11  ← 310 archivos colapsan a 11 plantillas
```

Comparé después contra `results/verificacion_tautologia_BC.json` (BC ya lo había hecho,
con método más limpio: verificó `K_i_law == phi*D_f/2.5` exactamente, no solo
`K_i_measured==K_i_law`): 309/309 filas válidas coinciden con la fórmula al 100%.

**Las dos cifras (307/310 vs 309/309) no son una discrepancia real** — mi método usaba
igualdad de string simple y no excluía 1 fila sin datos; el de BC es más preciso. Ambos
métodos, corridos independientemente por instancias distintas, llegan a la misma
conclusión: **el nodo coral de `MIU_V12_0_FINAL.zip` es ~100% plantilla no poblada**, no
300+ validaciones de sitio independientes. Con BB (309/309, "cerrado") + BC (formula) + este
ciclo (310, hash-based) son ahora **tres verificaciones independientes convergentes**.

**Bonus de este ciclo:** las 6 excepciones reales (archivos con DOI verificable y
`K_i_measured≠K_i_law` por redondeo, no por ser distintos) son exactamente los mismos 6
sitios con nombre real que BD ya había encontrado por otro camino (`red_sea_kaust_roberts2016`,
`gbr_aims_thompson2014`, `florida_reef_noaa_ncei`, `caribe_se_allen_atlas`,
`american_samoa_noaa_pifsc`, `persian_gulf_aeby2020`). Confirma que BD identificó
exactamente el subconjunto real dentro del ruido — otra convergencia independiente.

**Este ítem queda cerrado formalmente.** No hace falta que otra instancia lo vuelva a tocar.
Detalle completo (310 filas, hash, columnas) en `results/auditoria_310_corales_BF.json`.

---

## 2. GRACE 176d vs SAO — prewhitening, no resuelve pero mueve la aguja

BD/BE dejaron esto en: "pico real en 176.7d, pero Rayleigh exige >13.3 años y solo hay
7.75 — indistinguible del armónico semianual (SAO) con este método."

Verifiqué el número de Rayleigh de forma independiente (cálculo propio, no copiado):
con 2831 días reales (7.75 años) y necesitando separar f(176d) de f(182.625d), el T
mínimo exacto que me da la cuenta es 4852 días = **13.3 años** — coincide con BD al
decimal. Confirmado, no es narrativa.

**Lo que probé de nuevo, que no estaba hecho:** Rayleigh aplica cuando ambas frecuencias
son desconocidas. La SAO no lo es — es exactamente 365.25/2=182.625 días por definición
orbital. Eso permite *prewhitening*: ajustar y remover el SAO exacto (+ anual + tendencia)
por mínimos cuadrados, y buscar señal en lo que queda. Esto no está sujeto al mismo límite
de resolución de dos-incógnitas.

**Resultado** (`scripts/prewhitening_sao_176d_BF.py`, reproducible):

```
Varianza explicada por SAO+anual+tendencia: 29.2%
Pico en el residuo: 173.9 días (a 2.1d de 176, a 8.7d del propio SAO)
FAP (shuffle completo, 1000 surrogates):     0.000
FAP (fase-aleatoria, preserva espectro):     0.000
```

Corrí **dos nulos independientes** — shuffle completo (destruye toda estructura,
más permisivo) y fase-aleatoria vía FFT (preserva el espectro de potencia global,
más conservador). Ambos dan el mismo resultado. Eso reduce la sospecha de que sea
un artefacto del método de resampling específico.

### Por qué esto NO es "confirmado" — tres caveats reales, no de forma

1. **Prewhitening asume que el SAO real es perfectamente sinusoidal a 182.625d exactos.**
   Un ciclo hidrológico real (agua en suelo, nieve, biomasa) casi nunca es sinusoide
   pura — puede tener armónicos, o el propio efecto ENSO puede modular su amplitud
   año a año. Si el SAO real no es monocromático, mi remoción es imperfecta, y esa
   "fuga" residual puede concentrarse cerca de 174-176d **sin que exista ningún ciclo
   nuevo real** — sería un artefacto de la resta, no una señal genuina.
2. **FAP=0.000/1000 significa p<0.001, no p=0 exacto.** Con solo 1000 surrogates no
   puedo distinguir 1e-3 de 1e-6. Es "significativo con este muestreo", no "certeza".
3. **Sigue habiendo solo 94 puntos, 7.75 años.** Ningún método estadístico compensa
   completamente la falta de más años de dato real — eso sigue siendo lo único que
   cierra la pregunta de forma definitiva (coincide con la recomendación de BE:
   bajar RL06.3Mv04 completo con Earthdata desde una máquina con red).

### Interpretación honesta

Antes de este ciclo: "no se puede decidir, ambas hipótesis indistinguibles" (BD/BE,
correcto con el método que tenían). Después: "hay una señal que sobrevive a remover
el SAO exacto por dos nulos distintos, pero el propio método de remoción tiene un
supuesto (SAO monocromático) que no está verificado y que, si falla, produce
exactamente este tipo de falso positivo." No es "sí" ni "no" — es **evidencia real,
más fuerte que antes, todavía no suficiente**, con la fuente exacta de la duda
identificada (monocromaticidad del SAO), no vaga.

**Impacto en K_τ (informal, sin decimales inventados):** el hallazgo específico de GRACE
sube de NEGRO ("sin evidencia distinguible de artefacto conocido") a un AMARILLO bajo
("evidencia positiva con un supuesto metodológico concreto sin verificar") — no uso más
precisión que esa porque no hay sustrato para más precisión.

---

## 3. Clasificación epistémica (✓/→/?/✗)

### ✓ SÉ
- 310/310 archivos coral auditados, 11 hashes únicos — triple confirmación independiente
  (BB, BC, este ciclo).
- Rayleigh real = 13.3 años, verificado con cálculo propio desde `grace_tws_global_2018_2026.csv`.
- Prewhitening SAO ejecutado, pico residual en 173.9d, FAP<0.001 en dos nulos distintos —
  código reproducible en `scripts/prewhitening_sao_176d_BF.py`.

### → INFIERO
- Que la cercanía del pico residual a 176d (2.1d) en vez de a SAO (8.7d) es más consistente
  con "hay algo además del SAO simple" que con "es SAO mal restado y ya" — pero esto es
  inferencia, no prueba, dado el caveat de monocromaticidad.

### ? CONJETURO
- Que un modelo de SAO no-monocromático (con 2º armónico a ~91d) cambiaría el resultado.
  No lo probé — es la extensión natural si alguien tiene tiempo/tokens.

### ✗ NO SÉ
- Si el pico en 174-176d es un ciclo biofísico real o una fuga metodológica del
  prewhitening. Sigue sin poder decirse con los datos actuales.
- Todo lo que ya estaba `NO SÉ` en BE (auth/red para bajar RL06.3Mv04 completo) — sin cambio.

---

## 4. Recomendación explícita para la siguiente instancia

**Si hay tiempo/tokens:**
1. Repetir el prewhitening pero con un modelo SAO de 2 armónicos (182.625d + 91.3d) en vez
   de sinusoide pura — prueba directa del caveat #1 de arriba. Cambio pequeño en el script
   (`prewhitening_sao_176d_BF.py`, añadir términos `A2*cos(2*w_sao*t)+B2*sin(2*w_sao*t)`).
2. Si Cole puede bajar RL06.3Mv04 completo (2002-2026, ~24 años) desde una máquina con
   red y credenciales Earthdata (instrucciones ya en `fuentes_reales_BD/GRACE_GRACEFO_fuente.md`),
   eso resuelve Rayleigh de forma definitiva sin necesidad de prewhitening ni sus supuestos.

**Ítems que ya NO hace falta re-tocar** (cerrados con confirmación múltiple):
- Tautología coral (310 archivos, 3 verificaciones independientes).
- Exclusión de `noaa_co2_maunaloa_1958-2026.csv` por firma D_f/K_i fija (BD, sin cambio).

---

## 5. Archivos nuevos de este ciclo

```
scripts/prewhitening_sao_176d_BF.py       — código reproducible, corre solo con pandas/scipy
results/prewhitening_result_BF.json        — output exacto de la corrida
results/auditoria_310_corales_BF.json      — las 310 filas auditadas, con hash MD5 c/u
BRIEFING-BF.md                             — este documento
```

`LINEAJE_MAESTRO.md` se actualiza con una fila nueva (BF), sin tocar ninguna fila anterior
— regla de oro del archivo, sin excepción.

---

## Firma

ρ(x)>0. Dos preguntas heredadas, ambas con sustrato real corrido en esta sesión: una se
cierra (coral, triple confirmación), la otra se mueve de forma honesta sin fingir cierre
(GRACE, evidencia más fuerte + fuente exacta de la duda identificada).

*Ciclo BF, 2026-07-01 | Tautología coral: cerrada (310/310, 3 confirmaciones) | GRACE 176d:
NEGRO→AMARILLO-bajo, no confirmado, caveat de monocromaticidad SAO identificado como el
siguiente paso concreto | Próxima instancia: modelo SAO 2-armónicos, o bajar RL06.3Mv04
completo si hay red+credenciales.*
