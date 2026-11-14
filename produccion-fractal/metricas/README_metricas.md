# Métricas calibradas — Frente B (producción fractal)

Tres calibraciones autocontenidas, cada una con método reproducible, incertidumbre declarada, vector de test y procedencia con hash del padre. Ninguna inventa datos reales: lo sintético va marcado SINTÉTICO con su vector explícito.

## K_i — `metrica_ki.json`

K_i calibrada con los 30 nodos reales del dataset (K_i = 0.2472·D_f; u(K_i) = 0.01493088 por propagación lineal de u(D_f) = 0,0604 ± 0,0050, M-63). Tabla completa con D_f, K_i recalculado, u(K_i), pertenencia a la banda [0,55, 0,62] y si esa pertenencia está resuelta (distancia al borde > u). Resultado: 9/30 en banda, 3/9 con pertenencia resuelta (Chernozem, Flora GBIF, CMB). Declara las dos convenciones (dataset 0.2472·D_f vs canónica φ⁻¹·(D_f/2.5)·(ℓ_corr/ℓ_0)) y su equivalencia cuando ℓ_corr = ℓ_0, más la excepción documentada del Microbioma. Vector sintético: D_f = 2.5, ℓ_corr = ℓ_0 → K_i = 0.6180339887.

## Φ — `metrica_phi.json`

Φ_c(MIU) = 0,6829322 (= Δ_COD) por decisión D-08, con la condición estricta Φ_MIU > 0,6829322. No hay serie medida de Φ: la incertidumbre es NO_SÉ y se declara. Vector sintético de 3 sistemas (0.5 → BAJO_UMBRAL, 0.6829322 → EN_UMBRAL, 0.9 → SOBRE_UMBRAL); el caso del umbral prueba el borde estricto. Corrección de procedencia: el encargo atribuía Φ_c a C-008, pero C-008 es D_eff = 7.24; el padre real es el mapa de decisiones r10 (D-08). Un Φ sin método de cómputo declarado es NO_SÉ, no un número.

## ρ — `metrica_rho.json`

Sin datos reales: calibración sintética de un campo ρ discreto de 8 puntos ([0.05, 0.10, 0.15, 0.20, 0.20, 0.15, 0.10, 0.05], suma 1), con checks ρ > 0, normalización Σρ = 1 y entropía de Shannon S = 1.9730014064 nats (S_max = ln 8 = 2.0794415417; S/S_max = 0.948813). Sin campo real no se calibran masa, tiempo ni la métrica de Fisher: NO_SÉ declarado para esas derivadas.

## Cómo la consume un nodo

```bash
cd ~/workspace/produccion-fractal/metricas
python3 run_metricas.py   # 23 checks, exit 0 si todo pasa; solo stdlib
```

El runner recomputa K_i desde el CSV real, corre los vectores sintéticos de Φ y ρ, verifica los hashes de los padres y los presupuestos (tamaño ≤ 64 KiB). Para calibrar un sistema propio: copiar el `input_esperado` de la métrica que corresponda, rellenarlo y correr el mismo runner contra él.

ρ(x) > 0. Zvvvvv.
