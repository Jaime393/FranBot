# Protocolo de falsación — C-001 a C-005: las cinco predicciones MIU-v13.0

**Estado de los claims:** CONJETURO (anexo-vi, `claims.jsonl`, 1.178 líneas).
**Fuente de los claims:** `docs/README.md`, Grimorio.zip. **Hash del claim en el corpus:** `sha256:PENDIENTE` (los cinco; nunca se llenó — ver C-001..C-008, regla dura: no se rellena sin dato externo verificable).

## Los cinco claims

| ID | Claim | Instrumento / fecha declarada |
|---|---|---|
| C-001 | w_a = −0,21 ± 0,07 | DESI DR3, 2027 |
| C-002 | S_8 = 0,790 ± 0,016 | Euclid DR1, 2027 |
| C-003 | γ−1 = −3,1e-5 | BepiColombo (MORE), inserción en Mercurio 2026-11-21, datos 2027–2028 |
| C-004 | Σm_ν = 60,8 ± 0,5 meV | PTOLEMY, 2028 |
| C-005 | η = 1,1e-14 | MICROSCOPE-2, 2027 |

## Precondiciones honestas (se verifican ANTES de medir nada)

1. **C-001 — DESI DR3 no existe aún** (2026-11-14). DESI publica por data releases; DR3 es el resultado de 5 años, previsto 2027. Sin DR3 no hay w_a que comparar.
2. **C-002 — Euclid DR1 no existe aún.** Previsto 2027. Sin DR1 no hay S_8 que comparar.
3. **C-003 — La inserción de BepiColombo en Mercurio es el 2026-11-21** (7 días desde hoy). Los datos de radio-ciencia (MORE, que mide γ) llegan 2027–2028. Hoy solo se puede verificar que la inserción ocurrió.
4. **C-004 — PTOLEMY no opera aún** (previsto 2028) **y la precisión escrita es ~100× más fina que su resolución de diseño.** El claim como escrito (una medición con ±0,5 meV) es imposible como enunciado de medición: ese chequeo es lógico y se puede ejecutar hoy contra la documentación de diseño.
5. **C-005 — MICROSCOPE-2 no existe como misión.** MICROSCOPE voló 2016–2018; no hay sucesor con ese nombre en ESA/CNES/NASA. Sin misión no hay instrumento que mida η.

**Regla:** si la precondición no se cumple, el procedimiento queda **BLOQUEADO** — se registra la fecha de la comprobación y se detiene. No se inventa ningún dato.

## Procedimiento (común, con la precondición por claim)

1. **Comprobar la precondición** (fuente pública: desi.lbl.gov / arXiv para DESI; ESA Euclid para DR1; ESA BepiColombo para la inserción y MORE; documentación de diseño PTOLEMY; catálogos de misiones ESA/CNES/NASA para MICROSCOPE-2). Registrar fecha y resultado. Si no se cumple → BLOQUEADO, fin.
2. **Obtener el valor publicado** con su incertidumbre, del análisis oficial, mismo modelo (w0wa para C-001; S_8 de lente débil + CMB para C-002; MORE para C-003; espectro de captura de neutrinos relictos para C-004; prueba del principio de equivalencia para C-005).
3. **Comparar** con el intervalo declarado: |medido − declarado| ≤ √(σ_medido² + σ_declarado²) → compatible.
4. **Registrar** fuente, fecha, valores y veredicto en un registro con hash.

## Contraejemplos (qué refuta cada uno)

- **C-001:** DESI DR3 publica w_a fuera de [−0,28, −0,14] a >2σ combinada, o con signo contrario.
- **C-002:** Euclid DR1 publica S_8 fuera de [0,774, 0,806] a >2σ combinada.
- **C-003:** MORE publica γ−1 compatible con 0 dentro de su incertidumbre, o de signo contrario fuera de 2σ.
- **C-004:** PTOLEMY (o combinación equivalente) mide Σm_ν fuera de [60,3, 61,3] meV a >2σ; **o** la resolución de diseño de PTOLEMY es >5 meV (10× la declarada) → la precisión escrita es imposible como medición.
- **C-005:** una misión de prueba del principio de equivalencia con sensibilidad ≤1e-14 publica η incompatible con 1,1e-14 a 2σ; o se demuestra que ninguna misión así existe ni está planificada → el claim no tiene vía de medición.

## Criterios

- **Falsación:** el intervalo de confianza del 95% del instrumento no contiene el valor declarado; o la precondición de existencia/resolución falla de forma definitiva (C-004 precisión, C-005 misión).
- **Confirmación:** el valor medido cae dentro del intervalo declarado combinado con su incertidumbre, con instrumento, fecha y publicación registrados.

## Presupuesto

- **tokens_estimados:** 4.000 (lectura de 5 publicaciones + comparación + registro).
- **cpu:** lectura y comparación; <5 min de cómputo, sin GPU.
- **almacenamiento_bytes:** 4498 (tamaño real de este artefacto).

## Procedencia

- **parent_hash:** `7e5f016d2b565c7833cc9fe9df0cae20a1de543068ede0e687a20bebbdc78183` (sha256 de `claims.jsonl`, 1.178 líneas, medido 2026-11-14).
- **parent_path:** `~/workspace/memoria/anexo-vi/claims.jsonl`
- **author:** Hebra
- **timestamp:** 2026-11-14T08:40:00Z
