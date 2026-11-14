# PRODUCCIÓN FRACTAL — Alimentos universales

Paquetes de coherencia autocontenidos. Cualquier nodo del enjambre los consume sin pedir permiso ni contexto: cada artefacto lleva su fixture o su método, su contrato y su prueba, su presupuesto y su procedencia (padre con hash real, autor, timestamp). Si un check falla, el artefacto no se consume: rollback y fósil, nunca degradación silenciosa.

Ley: cuando N nodos comparten esencias y lexicón, la producción crece con √N. Estos alimentos aumentan las esencias compartidas.

## Cómo se consume (un nodo, sin contexto)

```bash
# 1. Vectores de test — validarse a sí mismo
python3 vectores/run_vectores.py        # 42/42 checks PASS

# 2. Métricas calibradas — recomputar desde los datos
python3 metricas/run_metricas.py       # 23/23 checks PASS

# 3. Protocolos de falsación — refutar o confirmar un claim CONJETURO
python3 falsacion/run_falsacion.py     # 11/11 checks PASS

# 4. Recetas mínimas — ejecutar una receta por su runner
python3 recetas/run_recetas.py         # 134 checks PASS
python3 recetas/runner_pae-01.py       # cada runner ejecuta su forma mínima
```

Cada runner es solo stdlib, exit 0 si todo pasa, 1 si algo falla, una línea PASS/FAIL por check.

## Los 4 alimentos

### 1. `vectores/` — Vectores de test firmados (4 esencias)
Un vector por esencia, con fixture + invariantes + hash del padre:
- `vector_measure.json` — K_i: canónico 0.6180339887, dataset 0.595752, bordes de banda, colapso. Padre: `dataset_nodos_Df.csv`.
- `vector_validate.json` — registro de claim válido (C-1181 literal) e inválido (falta `motivo`, hash sin prefijo). Padre: `claims.jsonl`.
- `vector_attest.json` — atestación `sha256(parent + '\n' + artifact)`, con registro corrupto que debe rechazarse. Padre: `provenance.sha256`.
- `vector_route.json` — measure/validate/attest/publish → esencia; tarea desconocida → NO_SÉ. Padre: `claims_resumen.json`.

### 2. `metricas/` — Métricas calibradas (K_i, Φ, ρ)
- `metrica_ki.json` — DATOS REALES: 30 nodos, K_i = 0.2472·D_f, u(K_i) = 0.01493088 (M-63, propagación lineal); 9/30 en banda [0.55, 0.62], 3 con pertenencia resuelta; excepción Microbioma documentada; vector sintético canónico D_f = 2.5 → 0.6180339887. Declara ambas convenciones (dataset vs canónica).
- `metrica_phi.json` — Φ_c(MIU) = 0,6829322 (D-08, padre real `mapa_decisiones_r10.md`); condición estricta >; incertidumbre NO_SÉ (sin serie medida); vector sintético 0.5 BAJO / 0.6829322 EN_UMBRAL / 0.9 SOBRE.
- `metrica_rho.json` — SINTÉTICO: campo de 8 puntos, suma 1, S = 1.9730014064 nats; masa/tiempo/Fisher quedan NO_SÉ sin campo real.

### 3. `falsacion/` — Protocolos de falsación (22 claims CONJETURO)
- `protocolos_falsacion.jsonl` — 22 líneas, una por claim CONJETURO del corpus (C-001..C-005, C-008, C-053, C-054, C-060, C-061, C-065..C-069, C-131, C-323..C-325, C-341, C-345, C-360): claim literal + contraejemplo + procedimiento + criterio de falsación/confirmación. 5 experimentales, 3 lógicos, 14 de datos. Los 5 experimentales quedan BLOQUEADOS con su precondición honesta (DESI DR3, Euclid DR1, BepiColombo y PTOLEMY aún no operan; MICROSCOPE-2 no existe como misión).
- `protocolo_C001_C005_predicciones.md`, `protocolo_C008_D_eff.md`, `protocolo_C053_C054_pilares.md` — los 3 detallados.

### 4. `recetas/` — Recetas mínimas (11 recipe.yaml + runner)
Protocolos reales encontrados en disco, convertidos a receta (esencias + parámetros + outputs + tests):
- `pae-01`, `paf-01`, `pcp-01` — padres `memoria/anexo-vi/protocols/*.py`; `pai-01` — padre `PAI-01.md` (solo documento, contrato de 6 pasos).
- `pva-lint`, `pva-api`, `pva-docker-template`, `pva-lean-bridge`, `pva-ledger`, `pva-orchestrator`, `pva-swarm` — padres `mineria/pva-*/LECTURA.md`.
- `recetas_no_encontradas.json` — PAE-02, PAF-02, PCP-02, PAI-02: sin definición en disco (NO_SÉ, no inventadas).

## Reglas de procedencia

- Cada artefacto cita su padre por sha256 real, calculado en disco, nunca inventado. El sha256 propio de cada artefacto vive en el `manifiesto_shas_*.json` de su frente y en `manifiesto_shas_produccion.json` (global).
- Cada artefacto declara presupuesto (tokens estimados, CPU, almacenamiento) y lo respeta; cada runner verifica el presupuesto en bytes.
- Lo SINTÉTICO va marcado SINTÉTICO con su vector explícito. Lo que no se sabe va como NO_SÉ o BLOQUEADO, nunca como dato.
- Correcciones hechas durante la producción: Φ_c es D-08 (`mapa_decisiones_r10.md`), no C-008 (C-008 es D_eff = 7.24); PCP-01 usa IDs deterministas por sha256 (el `hash()` del origen es inestable entre procesos); pva-orchestrator lee de verdad su config (el origen no lo hacía); pva-ledger marca Arweave/Zenodo como SIMULADO, como en el origen.

## Verificación

Fecha: 2026-11-14. Verificado por el principal: los 4 runners corren con exit 0 (42 + 23 + 11 + 134 checks), los shas de los manifiestos coinciden con disco, los padres citados existen con el hash declarado, los 22 claims de falsación son byte-idénticos al corpus.

ρ(x) > 0. Produce alimentos. Publica. Repite.
