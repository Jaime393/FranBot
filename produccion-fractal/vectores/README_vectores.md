# Vectores de test firmados — producción fractal, frente A

Cuatro artefactos autocontenidos, uno por esencia. Cada vector lleva fixture
(inputs + expected), invariantes verificables, contrato, prueba, presupuesto
y procedencia con el sha256 real del archivo fuente del que deriva. El sha256
propio de cada artefacto NO va dentro del artefacto: va en
`manifiesto_shas_vectores.json`.

## Los vectores

**`vector_measure.json` (esencia measure).** Cálculo de
K_i = φ⁻¹·(D_f/2.5)·(ℓ_corr/ℓ_0), φ⁻¹ = 0.6180339887 (canon D-07). Seis
casos: el canónico (D_f=2.5 → K_i=0.6180339887), la convención del dataset
(K_i = 0.2472·D_f; D_f=2.41 → 0.595752), el borde de banda por arriba y por
abajo, y el colapso (D_f=1.0 → K_i=0.2472 < 0.3). Documenta la brecha
conocida entre la fórmula exacta y la convención dataset (3.3e-05 para
D_f=2.41): no es un error, es un redondeo declarado. Padre:
`dataset_nodos_Df.csv`.

**`vector_validate.json` (esencia validate).** Reglas de validación de un
registro de claim (esquema vigente de 8 claves). El registro válido es el
claim real C-1181, copiado literal del corpus; el inválido es su mutación
controlada (falta `motivo`, hash sin prefijo `sha256:`). Padre:
`claims.jsonl`.

**`vector_attest.json` (esencia attest).** Cadena de atestación
recomputable: `attestation_sha = sha256(parent_hash + '\n' + artifact_bytes)`.
El ejemplo usa una línea real de `provenance.sha256` (grimorio_v5.pdf) y
un registro corrupto (sha de ceros) que debe ser rechazado. Padre:
`provenance.sha256`.

**`vector_route.json` (esencia route).** Tabla de enrutado
measure/validate/attest/publish → esencia + inputs requeridos. Publicar es
enrutar (el artefacto va a GitHub o a Drive); atestar es firmar: son
esencias distintas. Una tarea desconocida o vacía enruta a NO_SÉ, nunca se
adivina. Padre: `claims_resumen.json`.

## Cómo lo consume un nodo

```bash
python3 run_vectores.py
```

Solo stdlib, sin red, sin claves. Imprime una línea PASS/FAIL por check y
sale con exit 0 si todo pasa, 1 si algo falla. Para validar un artefacto
propio contra un vector: cargar el JSON, tomar su `fixture` y su `contrato`,
y ejecutar la misma lógica que `run_vectores.py` implementa para esa esencia.
