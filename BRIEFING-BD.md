# BRIEFING-BD — Datos reales integrados + pregunta GRACE de BC respondida (parcialmente, con honestidad)

**Para:** siguiente instancia (letra libre)
**Estado entrada:** BRIEFING-BC.md (bloqueante K_i cerrado, K_τ(MIU_v12)=0.35 NEGRO vigente,
pendiente de mayor valor: mecanismo GRACE SAO vs 176d)
**Fecha:** 2026-07-01
**Alcance de esta sesión:** Cole subió 6 archivos reales (no sintéticos). Se auditó cada uno
antes de integrarlo — ver `datos_reales_BD/AUDITORIA_datos_subidos_BD.md` para el detalle
completo, reproducible.

---

## 1. Lo que se hizo

- Se verificaron 4 archivos como reales por inspección directa (headers, rangos de
  coordenadas, contactos, fechas de creación): CO2 NOAA crudo, ocurrencias GBIF Colombia,
  índice de temperatura GISTEMP, tabla de atribución de fuentes coralinas (Allen Coral
  Atlas-like, 19 filas de Colombia con cita real — INVEMAR, Reef Life Survey, Reef Check).
- Se excluyó 1 archivo (`noaa_co2_maunaloa_1958-2026.csv`) del paquete: mismos valores de CO2
  reales, pero con columnas `D_f`/`K_i` fijas en `1.4`/`0.346` para las 801 filas — repite
  exactamente el patrón de tautología que BC cerró para el nodo coral. Documentado, no
  eliminado del disco, solo no copiado al paquete.
- Se corrió un periodograma Lomb-Scargle real (script incluido, reproducible) sobre la serie
  GRACE TWS que Cole aportó (94 meses, 2018-06 a 2026-03). Resultado: pico en 176.7 días, pero
  el criterio de Rayleigh exige >13.3 años de serie para separar eso de la armónica semianual
  estándar (182.6d). **Con los datos actuales, la pregunta de BC sigue abierta — pero ahora con
  una razón matemática concreta de por qué, no solo "sin presupuesto de cómputo".**

## 2. Lo que NO se hizo — derivado explícitamente

- No se bajó ningún binario nuevo por red (GRACE oficial JPL, GBIF vía API): el entorno de
  ejecución no tiene salida de red en `bash_tool`, y `web_fetch` solo puede tocar URLs que ya
  aparecieron en un resultado de búsqueda — varios intentos (NOAA directo, API GBIF) fallaron
  por `ROBOTS_DISALLOWED` o restricción de URL no vista antes. Quedó documentado en
  `fuentes_reales_BD/GRACE_GRACEFO_fuente.md` cómo bajarlo desde un entorno con red.
- No se cruzó `grace_tws_global_2018_2026.csv` contra el mascon JPL oficial — se toma la
  serie aportada por Cole como dato de entrada, sin re-verificación independiente de su
  procedencia exacta.
- No se tocó `nodos_completos/corales/` de BB — ese hallazgo (309/309 tautológico) sigue
  cerrado y vigente, sin relación directa con `coral_atlas_attribution_real.csv` (que es una
  fuente distinta, real, que podría usarse para reconstruir un nodo coral desde cero si se
  decide hacerlo).

## 3. Clasificación epistémica de este ciclo

### ✓ SÉ
- CO2 Mauna Loa real hasta abril 2026 (431.12 ppm), verificado contra header NOAA oficial.
- GBIF Colombia: 2100 ocurrencias reales, coordenadas dentro de límites de Colombia.
- 19 fuentes reales citables de coral en Colombia (INVEMAR, Reef Life Survey, Reef Check).
- El pico de 176.7d en la serie GRACE aportada es real *en esos datos*, pero no distinguible
  de la armónica semianual con solo 7.75 años de muestra (matemática de Rayleigh, no opinión).

### ✗ NO SÉ / EXCLUIDO
- Si `grace_tws_global_2018_2026.csv` reproduce fielmente el mascon JPL oficial (no
  contrastado esta sesión).
- Si el pico de 176d es un ciclo biogeofísico real o solo SAO con resolución insuficiente —
  sigue sin poder decidirse; ahora con el motivo matemático explícito.
- Contenido de `noaa_co2_maunaloa_1958-2026.csv` más allá de sus valores de CO2 (columnas
  D_f/K_i descartadas por fabricadas).

## 4. Impacto en K_τ

Sin recomputar el bloqueante de BC. El hallazgo de tautología en `noaa_co2_maunaloa_1958-2026.csv`
es un dato adicional a favor del mismo patrón que llevó a K_τ(MIU_v12)=0.35 NEGRO: aparece una
segunda vez, en un archivo distinto, el mismo hábito de pegar `D_f`/`K_i` fijos a datos reales.
No es un evento aislado del nodo coral — es un patrón que se repite cuando se generan estos
archivos. Vale la pena que la siguiente instancia revise si hay más archivos con esta firma
antes de asumir que cualquier CSV nuevo con columnas `D_f`/`K_i`/`phi` es información derivada.

## 5. Recomendación explícita para la siguiente instancia

- Si llega con red disponible: completar la descarga real del mascon JPL RL06.3Mv04 (comandos
  en `fuentes_reales_BD/GRACE_GRACEFO_fuente.md`) y extender la serie a >13 años si hay datos
  históricos de GRACE clásico (2002-2017) para intentar resolver 176d vs SAO de verdad.
- `coral_atlas_attribution_real.csv` está listo para construir un nodo coral real (19 fuentes
  de Colombia) que reemplace, no imite, al nodo sintético de BB.
- Antes de aceptar cualquier CSV nuevo con columnas tipo `K_i`/`D_f`/`phi`: revisar primero si
  esas columnas varían con el dato real o son una constante repetida. Es rápido (`sort -u` de
  la columna) y ya evitó integrar un archivo contaminado en este ciclo.

---

## Firma

ρ(x)>0. Este ciclo no inventó números: donde hubo dato real, se usó tal cual; donde hubo
cómputo (periodograma), se corrió y se reportó con su límite de resolución explícito; donde
hubo un patrón sospechoso (constante disfrazada de métrica), se marcó y se excluyó en vez de
integrarlo.

*Ciclo BD, 2026-07-01 | 4 archivos reales integrados | 1 archivo contaminado excluido y
documentado | 1 derivación real ejecutada (Lomb-Scargle, resultado: no resoluble aún) |
Próxima instancia: bajar mascon JPL con red real, o construir nodo coral desde
`coral_atlas_attribution_real.csv`.*
