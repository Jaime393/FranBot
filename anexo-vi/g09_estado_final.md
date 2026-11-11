# G09 — Estado final (ciclo 36)

Fecha: 2026-11-11. Grieta G09: "PVE-01 — validación de K_i sin D_f".

## Decisión: CERRADA PARCIALMENTE

Motivo: PVE-01 está implementado (`pve_01.py`) y ejecutado sobre
datos GRACE reales (281 filas, Ξ = 0.7100 medido). La forma 3
(Ki = T·tanh(τ·Ξ·c)) mantiene Ki en banda [0.55, 0.62] para un rango
continuo de c (c ≥ 2.0025), con diferencia <20% frente a la ruta
D_f (+18.0% a D_f=2.0, -5.6% a D_f=2.5), y su asíntota es 0.618 =
φ⁻¹ exacto (verificado con c=10, 100, 1000). PVE-01 es COMPATIBLE
con K_i. Pero NO la confirma: `c` no está definido para la versión
GRACE en ninguna fuente buscada (Vault, issues, commits, otras
carpetas — ciclo 36, C_NO_DEFINIDO_PARA_GRACE), y la única
definición de c en el Vault (router, c ∈ [0,1]) contradice la
región en banda. Sin `c`, el valor de Ki depende de un parámetro
libre. Por eso el cierre es parcial, no total.

## Rango de Ki según c (forma 3, Ξ = 0.7100, τ = 1 ventana)

- Mínimo barrido: c=0.5 → Ki=0.2106.
- En banda desde: c ≥ 2.0025 (c=2.0 da 0.5498, fuera por 0.0002).
- c=2.5 → 0.5835; c=4.0 → 0.6138; c=10 → 0.6180; c→∞ → 0.618.
- Rango: [0.2106, 0.618). Banda [0.55, 0.62] para c ≥ 2.0025.

## Asíntota: 0.618 (corrección al ciclo 35)

El ciclo 35 llamó 0.6138 a la asíntota. Es Ki en c=4.0, no el límite.
El límite es T = 0.618, verificado por cálculo (c=10 → 0.617999,
c=100 → 0.618 exacto). La ley K_i llega a φ⁻¹ en el límite c→∞.
No hay techo estructural en 0.6138.

## Qué significa para la ley K_i

Compatible, no confirmada. El mecanismo (forma 3 + Ξ medido)
funciona sin usar D_f en ningún paso — no hay circularidad en el
cómputo. El valor de Ki depende del parámetro libre c. La hipótesis
de que K_i = φ⁻¹·(D_f/2.5) sea caso particular de una ley más
general queda compatible (solapan en [0.55, 0.618]), sin confirmar.

## Qué haría falta para cerrarla totalmente

1. Que el Vault defina `c` para la versión GRACE (valor, rango o
   fórmula), con un criterio independiente (no elegir el c que da
   el resultado deseado).
2. O un criterio independiente para fijar `c` (medición, experimento,
   calibración externa) que no use el rango P del documento.
3. Resolver el conflicto de nombres: tres documentos PVE-01 con
   definiciones incompatibles (GRACE / router / Primer Valor),
   más los hostnames Proxmox "pve-01" que contaminan las búsquedas
   globales.

Mientras tanto, G09 queda CERRADA PARCIALMENTE: el código existe,
la ejecución existe, el resultado es compatible y la asíntota es
0.618. Lo que falta es una definición, no un resultado.

## Actualización ciclo 37 (2026-11-11): sigue parcial

- Papers revisados (paper.md, paper.bib, MIU_PAPER_V2, RAIZ_X):
  ninguno define `c`; ninguno menciona la asíntota 0.618.
- Candidatos físicos calculados con GRACE real: c1=1/90 → Ki=0.0049
  (no banda); c2=1 → Ki=0.3774 (no banda); c3 dimensionalmente
  inválida. Ninguno razonable da Ki en banda.
- `c` no se puede definir sin más información. G09 SIGUE
  PARCIALMENTE CERRADA. Detalle en `c_definicion.md`.

## Actualización ciclo 38 (2026-11-11): sigue parcial (C20)

- C20 analizada (`c20_periodo.py`): 281 filas, sin periodo
  dominante (DFT sin pico: top 5 en 42–58 meses dentro del 8%;
  anual al 8.3% del máximo; autocorrelación decae monótona).
- Candidatos: c=1/C20 literal → Ki=−0.618 (error de categoría);
  c=1/P formal → 0.0231 (no banda); c=P/τ=19 y c=P·Ξ=13.49 →
  0.618 saturado pero RECHAZADOS (P=57 meses es deriva, no
  periodo; usarlos sería ajustar ruido al resultado).
- G09 SIGUE PARCIALMENTE CERRADA. Detalle en `c20_definicion.md`.
