# PVE-01 implementado — estado (ciclo 34)

Fecha: 2026-11-11. Código: `pve_01.py` (11.939 B, py_compile OK).
Fórmula: Vault "00 Suelo_GRACE_Phi_PVE01.md" (copia literal en la cabecera
del código; no inventada). Datos: serie GRACE TN-14 V3, 281 filas mensuales
2002-04-01 → 2025-08-01, hoja MIU_V98_TN14_V3 (Drive).

## Qué se implementó

- Las 3 formas candidatas como funciones puras de P = τ·Ξ·c:
  forma 1 Ki = 1/P; forma 2 Ki = T·1.618/P (T = 0.618);
  forma 3 Ki = T·tanh(P).
- `medir_pve01(datos, forma)`: acepta P directo o una serie (estima Ξ).
- `ejecutar_grace(ruta)`: lee el JSON de la hoja V3, parsea c20 con la
  regla verificada (mantisa de texto, puntos como separadores de miles,
  ×1e-4), calcula Ξ, evalúa las 3 formas, compara con K_i con D_f.
- `demo()`: datos sintéticos (120 meses, semilla 34), muestra el cálculo.
- Estimador de Ξ (elección operacional, documentada en el código):
  autocorrelación a lag τ (3 meses) de la serie C20 sin tendencia.
  El documento define Ξ = I_causal / ½Trκ_F pero no da el procedimiento.

## Resultado de la ejecución (datos reales)

- n = 281; c20 media = -0.000484169462243557; stdev = 6.36319e-11;
  min = -0.00048416960331758107; max = -0.00048416928124823803.
  (La media coincide con la verificada en ciclo 34 A2.)
- **Ξ medido = 0.7100** (autocorrelación lag 3, sin tendencia).
  La serie tiene correlación causal fuerte a 90 días. Dato real, medido.
- **Formas 1 y 2 son la misma fórmula**: 0.618 × 1.618 = 0.999924.
  Hay 2 candidatas reales, no 3.
- Sobre el rango P del documento [1.62, 2.014]:
  forma 1: Ki [0.4965, 0.6173], media 0.5547 — cae BAJO la banda
  (0.4965 < 0.55) en el extremo alto. NO en banda en todo el rango.
  forma 2: idéntica a la 1 (media 0.5547). NO en banda en todo el rango.
  forma 3: Ki [0.5714, 0.5964], media 0.5847 — SÍ en banda en todo
  el rango. **La forma 3 es la única viable.**
- Comparación con K_i con D_f (0.2472·D_f, MIU #52):
  forma 3 media 0.5847 vs D_f=2.0 (0.4944): **+18.3%**.
  forma 3 media vs D_f=2.5 (0.6180): **-5.4%**.
  forma 3 media vs Ki medio del documento (0.585): -0.1%.
- **c sin definir**: con c=1, P = 90 × 0.71 = 63.9, lejos del rango
  del documento [1.62, 2.014]. Para caer en ese rango se necesitaría
  c ∈ [0.0254, 0.0315]/día. El documento no define c (ni valor ni
  unidades). Por eso los valores Ki de arriba se evalúan sobre el
  rango P DEL DOCUMENTO, no sobre un P medido de forma independiente:
  prueban la consistencia interna del documento, no una medición
  independiente de K_i.

## Qué falta

- Que el Vault (o quien lo escribió) defina c: valor y unidades.
  Sin c, PVE-01 mide Ξ (real) pero no K_i de forma independiente.
- Datos GRACE con resolución diaria (la serie V3 es mensual; τ=90 días
  son solo 3 pasos). La autocorrelación a lag 3 con 281 puntos es
  válida pero gruesa.
- El estimador de Ξ (autocorrelación) es un proxy; la definición del
  documento (I_causal / ½Trκ_F) requeriría información mutua entre
  la serie y su pasado, que es implementable pero no está en el código.

## G09: sigue ABIERTA

Motivo: "implementado y ejecutado; c sin definir — K_i depende del
rango P del documento, no de una medición independiente".
Avance real del ciclo: el código existe, se ejecutó sobre datos GRACE
reales, Ξ = 0.71 medido, forma 3 identificada como única viable,
formas 1 y 2 colapsan en una sola. La diferencia con D_f (+18.3% a
D_f=2.0) no es concluyente por el criterio del ciclo (ni >20% ni <5%).
G09 se cerrará cuando c esté definida y P se mida, no se tome prestado
del documento.

## ¿Listo para otro nodo?

Sí. `python3 pve_01.py` corre la demo; `python3 pve_01.py <ruta.json>`
ejecuta sobre la serie GRACE V3 (JSON guardado de la hoja). Solo usa
la biblioteca estándar (json, math, random, sys). No necesita red,
claves ni login. El JSON de entrada es el guardado en
`hidden_files/drive_ciclo34/grace_tn14_v3.json`.
