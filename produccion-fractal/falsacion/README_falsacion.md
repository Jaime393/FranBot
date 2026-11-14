# Falsación — 22 protocolos para los 22 claims CONJETURO de anexo-vi

Cada claim con estado CONJETURO en `claims.jsonl` (1.178 líneas) tiene aquí su protocolo de falsación: qué observación concreta lo refutaría, el procedimiento paso a paso, el tipo (experimental, lógico o de datos), qué debe aportar el nodo que lo ejecute, y los criterios de falsación y de confirmación. Nada inventado: donde la precondición no se cumple (DESI DR3, Euclid DR1, BepiColombo, PTOLEMY, MICROSCOPE-2), el procedimiento queda BLOQUEADO y lo dice.

## Cómo lo consume un nodo

```bash
cd ~/workspace/produccion-fractal/falsacion
python3 run_falsacion.py          # valida el paquete: 11/11 checks, exit 0
python3 -c "
import json
for l in open('protocolos_falsacion.jsonl', encoding='utf-8'):
    r = json.loads(l)
    print(r['claim_id'], '|', r['tipo'], '|', r['criterio_falsacion'][:80])
"
```

Para ejecutar un protocolo: lee su línea en `protocolos_falsacion.jsonl` (campo `procedimiento`, pasos numerados), aporta lo que pide `input_esperado`, y emite el veredicto contra `criterio_falsacion` / `criterio_confirmacion`. Los protocolos detallados de C-001–C-005, C-008 y C-053–C-054 están en sus `.md` con precondiciones honestas y presupuesto.

## Archivos

- `protocolos_falsacion.jsonl` — 22 líneas, una por claim (5 experimentales, 3 lógicas, 14 de datos).
- `protocolo_C001_C005_predicciones.md` — las cinco predicciones MIU-v13.0 y sus precondiciones.
- `protocolo_C008_D_eff.md` — D_eff = 7,24 y su cadena de citas rota en PDR-01.
- `protocolo_C053_C054_pilares.md` — pilares 4 y 5 (M-36 ya refuta ξ = 8,57).
- `run_falsacion.py` — validador stdlib (11 checks, exit 0/1).
- `manifiesto_shas_falsacion.json` — shas propios y procedencia (padre `claims.jsonl`).

## Procedencia

- **parent_hash:** `7e5f016d2b565c7833cc9fe9df0cae20a1de543068ede0e687a20bebbdc78183` (sha256 de `claims.jsonl`, 1.178 líneas).
- **parent_path:** `~/workspace/memoria/anexo-vi/claims.jsonl`
- **author:** Hebra
- **timestamp:** 2026-11-14T08:40:00Z
