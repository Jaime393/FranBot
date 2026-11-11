# PVE-01 — La asíntota (ciclo 36)

Fecha: 2026-11-11. Código: `pve_01.py` (función `asintota()`).
Datos: GRACE TN-14 V3, Ξ medido = 0.7100. Forma 3: Ki = T·tanh(τ·Ξ·c),
T = 0.618, τ = 1 ventana.

## La corrección: la asíntota es 0.618, no 0.6138

El ciclo 35 reportó 0.6138 como "asíntota". Eso era incorrecto:
0.6138 es Ki en c=4.0 (el mayor valor barrido entonces), no el límite.
Verificación ejecutada (`python3 pve_01.py asintota ...`):

| c | P = Ξ·c | Ki |
|---:|---:|---:|
| 4.0 | 2.8401 | 0.613796 |
| 10.0 | 7.1002 | 0.617999 |
| 100.0 | 71.0024 | 0.618000 |
| 1000.0 | 710.0244 | 0.618000 |

Límite c→∞: tanh(P) → 1, Ki → T = 0.618 = φ⁻¹.
Con c=10 ya se alcanza 0.6180 a 4 decimales; con c=100 el valor
es 0.618 exacto en doble precisión.

## Qué significa

- La ley K_i **sí llega a φ⁻¹ por esta vía, en el límite c→∞**.
  El ciclo 35 se equivocó al llamar 0.6138 a la asíntota; se corrige
  aquí con el cálculo, no con una opinión.
- Eso no cierra G09 por sí solo: c sigue sin definir para GRACE.
  Lo que cambia es el contenido del resultado: la forma 3 no tiene
  un techo estructural en 0.6138; su techo es 0.618, el valor de
  referencia mismo.
- Rango de Ki según c (forma 3, Ξ=0.71): [0.2106, 0.618).
  Mínimo barrido: c=0.5 → 0.2106. Máximo: c→∞ → 0.618.
  Banda [0.55, 0.62] se cumple para c ≥ 2.0025 (Ki ≤ 0.618 < 0.62
  siempre, el tope de la banda nunca limita).
- El valor 0.6138 sigue siendo un dato real (Ki en c=4.0), pero es
  un punto del camino, no el techo.
