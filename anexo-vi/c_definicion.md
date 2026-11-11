# Definición de c (ciclo 37)

Fecha: 2026-11-11. Fórmula: Ki = T·tanh(τ·Ξ·c), forma 3.
Datos: GRACE TN-14 V3, Ξ = 0.7100 medido, τ = 1 ventana (90d), T = 0.618.

## A1 — Papers: ningún paper define c

Revisados (Drive, contenido entero, grep PVE-01 / parámetro c /
carga c / GRACE / TN-14 / asíntota / 0.618):

- paper.md (28.521 B) y paper.bib (22.356 B): 0 coincidencias.
- MIU_PAPER_V2_rho_v92_coherence_nov3_2026 (18.522 B): menciona
  GRACE (C₂₀ = −4.847×10⁻⁴, K_τ ∈ [0.3381, 0.3934], calibración
  GRACE-FO RL06 Mascon) — pero NO PVE-01, NO "parámetro c", NO
  asíntota 0.618, NO criterio para elegir c. Usa C₂₀ para calibrar
  K_τ, un parámetro distinto.
- RAIZ_X_paper_v2_zenodo_ready.md (8.390 B): GRACE/K_τ, mismo
  resultado: sin PVE-01, sin c, sin asíntota.
- 40 Global Mind: vacía (confirmado ciclo 36 y ciclo 37).

Ningún paper define `c`. Ninguno menciona la asíntota 0.618.
Ninguno propone un criterio para elegir `c`.

## A2 — Candidatos físicos (calculados con datos GRACE reales)

1. **c1 = 1/τ_ventana = 1/90 ≈ 0.0111.** P = 0.007889.
   Ki = 0.004875. En banda: NO. Sentido físico: inverso del
   período de la ventana; dimensionalmente coherente (1/tiempo
   con τ en días), pero el resultado queda muy lejos de la banda.
2. **c2 = Ξ/Ξ_ref = 1** (Ξ_ref = Ξ). P = 0.71. Ki = 0.377398.
   En banda: NO. Variante c2' = Ξ/1.0 = 0.71: P = 0.5041,
   Ki = 0.287577. En banda: NO. Sentido físico: normalización
   por el propio gradiente (c2) es tautológica — Ξ_ref = Ξ por
   construcción; la variante con Ξ_ref = 1 (máximo posible) es
   coherente pero también fuera de banda.
3. **c3 = 1/(Ξ·τ·c_luz).** SIN CÁLCULO. Dimensionalmente
   inválida: τ en días × c_luz en longitud/tiempo = longitud;
   1/(Ξ·τ·c_luz) tiene unidades 1/longitud, no es adimensional.
   El argumento de tanh debe ser adimensional; faltaría una
   escala de longitud arbitraria. No es una definición, es una
   fórmula rota.

## A3 — Decisión: SIN DEFINICIÓN

Ningún paper define `c`. Ningún candidato físico razonable da Ki
en banda (c1 → 0.0049, c2 → 0.3774, c2' → 0.2876, c3 inválida).
Elegir `c` desde el rango P del documento ([1.62, 2.014] → c ∈
[2.28, 2.84]) sería elegir el c que da el resultado deseado:
PROHIBIDO por la regla del ciclo. Diagnóstico (no definición):
la región en banda (c ≥ 2.0025) implica una escala de tiempo
1/c ≤ 0.5 ventanas ≈ 45 días (con c=2.5: 36 días). Ningún
documento del Vault justifica una escala de ~36–45 días.

**`c` no se puede definir sin más información. G09 sigue
parcialmente cerrada** (ciclo 36). No se fuerza el cierre total.

## Qué haría falta para definir c

1. Un documento del Vault (o un paper) que fije `c` con criterio
   independiente: una escala de tiempo física del sistema GRACE
   (p. ej., tiempo de correlación medido de la serie C20), o una
   constante de normalización derivada de primeros principios.
2. O una medición independiente de la escala característica del
   sistema que justifique c ≈ 2.0–2.8 (o cualquier otro valor).
3. Resolver el conflicto de nombres PVE-01 (ver pve01_nombres.md).
