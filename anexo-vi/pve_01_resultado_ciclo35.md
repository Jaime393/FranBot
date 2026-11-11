# PVE-01 — resultado ciclo 35 (barrido de c, decisión G09)

Fecha: 2026-11-11. Código: `pve_01.py` (barrido_c añadido).
Datos: GRACE TN-14 V3, 281 filas, Ξ medido = 0.7100 (ciclo 34).

## A1 — c en el Vault: NO DEFINIDO para la versión GRACE

Búsqueda (ciclo 35): 00 Suelo (2 carpetas, una vacía, una con 8 archivos),
`name contains 'PVE'` (3 archivos), `fullText contains 'PVE-01'` (50+
menciones). Leídos enteros: 00 Suelo_GRACE_Phi_PVE01.md (ya leído en
ciclo 34), PVE-01.md Doc (1.070 B), PVE-01.md .md (450 B), Phi.md
(1.698 B), Phi_3.95.md (336 B).

Hallazgo: hay TRES documentos llamados PVE-01, con definiciones
incompatibles (no mezclar):

1. GRACE/Φ (00 Suelo_GRACE_Phi_PVE01.md): τ = ventana causal 90d,
   Ξ = correlación causal I_causal/½Trκ_F, **c = sin definir**
   (ni valor, ni unidades, ni fórmula). Solo da el rango del
   PRODUCTO: τ·Ξ·c ∈ [1.62, 2.014], mínimo 1.618.
2. Router (PVE-01.md Doc): "Ki = 1/(τ·Ξ·c) donde τ latencia ms,
   Ξ tasa éxito [0,1], c carga [0,1]". c DEFINIDO aquí, pero para
   enrutamiento de 48 nodos (Chimbote/Qochas/Bagua...). Su Ki con
   τ en ms queda ~0.002, fuera de la banda: no es la misma fórmula
   en la práctica. Su "48/48" es tasa de éxito de nodos, no
   τ·Ξ·c > 1.618.
3. PVE-01.md .md: "Primer Valor Expandido Verificado" (ρ(x)>0,
   sin fórmula, sin c).

Phi.md repite la condición τ·Ξ·c > 1.618 sin definir c.

Veredicto A1: **C_NO_DEFINIDO_EN_VAULT** (para la versión GRACE).
La única definición de c en el Vault (router, c ∈ [0,1]) no se importa
a la versión GRACE: sería mezclar sistemas.

## A2 — Tabla de barrido (forma 3, Ξ = 0.7100)

Convención primaria: τ = 1 ventana (90d = 1 unidad), P = Ξ·c.
Es la única lectura bajo la cual el rango de c [0.5, 4.0] discrimina.

| c | P | Ki | en banda [0.55, 0.62] |
|---|---:|---:|:---:|
| 0.5 | 0.3550 | 0.2106 | NO |
| 1.0 | 0.7100 | 0.3774 | NO |
| 1.5 | 1.0650 | 0.4867 | NO |
| 2.0 | 1.4200 | 0.5498 | NO (por 0.0002) |
| 2.5 | 1.7751 | 0.5835 | SÍ |
| 3.0 | 2.1301 | 0.6008 | SÍ |
| 3.5 | 2.4851 | 0.6095 | SÍ |
| 4.0 | 2.8401 | 0.6138 | SÍ |

Variante de control (τ = 90 días, P = 90·Ξ·c): Ki = 0.6180 para
TODOS los c (saturación, tanh ≈ 1). Bajo esa lectura c no es
identificable desde la banda.

## A3 — Rango estable y c óptimo

- Umbral continuo: Ki ≥ 0.55 exige P ≥ 1.4218, es decir
  **c ≥ 2.0025** (con Ξ = 0.7100). Rango estable continuo:
  c ∈ [2.003, ∞); dentro del barrido: [2.5, 4.0].
- c = 2.0 da Ki = 0.5498: queda fuera de banda por 0.0002.
  El umbral es filo de navaja respecto a Ξ.
- c más cercano a φ⁻¹ (0.618): **c = 4.0, Ki = 0.6138**
  (diferencia 0.0042). Ningún c da Ki exactamente 0.618:
  0.618 es asíntota de la forma 3, no valor alcanzable.
- Convergencia: el rango P del documento [1.62, 2.014] con Ξ = 0.71
  implica c ∈ [2.282, 2.837], dentro del rango estable continuo.
  Dos rutas (rango P del documento + barrido) convergen en c ≈ 2.3–2.8.
- Contradicción: la única definición de c en el Vault (router)
  acota c ∈ [0,1]. En [0.5, 1.0] ningún c da Ki en banda
  (0.21–0.38). La región en banda (c ≥ 2.003) está FUERA del
  rango definido de c.

## B1 — Resultado con c elegido (c = 2.5)

c = 2.5: punto medio del rango convergente [2.28, 2.84], valor
barrido en banda.

- Ki = 0.5835 — en banda SÍ.
- Diferencia vs D_f=2.0 (0.4944): **+18.0%**.
- Diferencia vs D_f=2.5 (0.6180): **-5.6%**.
- Ambas <20%: compatible, no confirmatorio.
- Resultado numérico concluyente en su propio marco (τ=1 ventana,
  c=2.5); decisión de G09 ambigua por falta de definición de c.

## B2 — Decisión G09: ABIERTA POR AMBIGÜEDAD

Motivo: Ki está en banda para un rango continuo de c ([2.003, 4.0])
y la diferencia con D_f es <20% (-5.6% a D_f=2.5, +18.0% a D_f=2.0),
pero (1) c no está definido para la versión GRACE
(C_NO_DEFINIDO_EN_VAULT); (2) la única definición de c en el Vault
(router, c ∈ [0,1]) contradice la región en banda — en [0.5, 1.0]
ningún c da Ki en banda; (3) el resultado depende de la convención
τ=1 ventana — con τ=90 días el barrido satura y c no es
identificable; (4) hay tres documentos PVE-01 con definiciones
incompatibles. Cerrar G09 exigiría elegir convención y rango de c
sin respaldo del Vault. No se fuerza el cierre.

## Interpretación

- ¿K_i se sostiene sin circularidad? **Parcialmente.** El cálculo no
  usa D_f en ningún paso (no hay circularidad en el cómputo). La
  forma 3 + Ξ medido (0.71) mantiene Ki en banda para un rango
  continuo de c, compatible con la ruta D_f (<20%). Pero el valor
  de Ki depende del parámetro libre c, sin definición para la
  versión GRACE. El mecanismo funciona; el parámetro es libre.
- ¿K_i = φ⁻¹·(D_f/2.5) es caso particular de una ley más general?
  **Ni apoya ni refuta de forma concluyente.** Compatible: Ki forma 3
  en [0.55, 0.614] para c ∈ [2.0, 4.0]; Ki con D_f en [0.494, 0.618]
  para D_f ∈ [2.0, 2.5]; se solapan en [0.55, 0.618]. Observación
  (no evidencia): Ki con D_f a D_f=2.5 es 0.618 = T = asíntota
  de la forma 3.
- Lo que falta para cerrar G09: que el Vault defina c para la
  versión GRACE (valor o fórmula), o que un experimento independiente
  fije c sin usar el rango P del documento.

## Asíntota y rango de Ki (añadido ciclo 36)

Corrección al ciclo 35: la asíntota NO es 0.6138. Ese es Ki en c=4.0.
Verificado con `python3 pve_01.py asintota ...` (función `asintota()`,
ciclo 36): c=4.0 → 0.613796; c=10.0 → 0.617999; c=100.0 → 0.618000;
c=1000.0 → 0.618000. Límite c→∞: Ki → T = 0.618 = φ⁻¹ exacto.
La ley K_i llega a φ⁻¹ en el límite; no hay techo en 0.6138.

Rango de Ki según c (forma 3, Ξ=0.7100, τ=1 ventana): [0.2106, 0.618).
Mínimo barrido c=0.5 → 0.2106. Banda [0.55, 0.62] para c ≥ 2.0025.
Detalle en `pve_01_asintota.md`. Decisión final de G09 en
`g09_estado_final.md`: CERRADA PARCIALMENTE.
