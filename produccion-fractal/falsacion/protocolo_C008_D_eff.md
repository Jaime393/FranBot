# Protocolo de falsación — C-008: D_eff = 7,24

**Estado del claim:** CONJETURO (anexo-vi, `claims.jsonl`).
**Claim:** `D_eff = 7.24`
**Fuente citada:** `PANTEON_BASE_HISTORICA.md §3`. **Hash del claim:** `sha256:PENDIENTE`.
**Grieta:** G01.

## Lo que se sabe (SÉ, no conjetura)

- **D_eff tiene 0 menciones en los dos PDFs del Grimorio** (verificado en rondas; D_eff = 7,24 es un valor registrado sin derivación — D-10 R-B).
- **La única cita conocida es `orquestador_v8.py` L451 → "PDR-01"**, y PDR-01 **no existe como archivo** (ni en local ni en el repo).
- D_eff no aparece derivado en ningún otro archivo local conocido.

## Contraejemplo

Ninguna fuente citada contiene una derivación de 7,24 y la única cadena de citas termina en un archivo inexistente (PDR-01). En ese caso el valor queda sin derivación: **REFUTADO como valor derivado** — sobrevive solo como valor registrado sin derivación, que es exactamente lo que D-10 ya registró.

## Procedimiento (lógico, solo lectura)

1. **Leer `PANTEON_BASE_HISTORICA.md` §3** y extraer cada aparición de `D_eff` y de `7.24` con su contexto: ¿hay definición? ¿hay derivación? ¿hay error? Registrar líneas exactas.
2. **Re-verificar los dos PDFs del Grimorio** con `pdftotext` + `grep -i "D_eff"` (y variantes `D_{eff}`, `Deff`): registrar 0 menciones o las que aparezcan, con página.
3. **Seguir la cita `orquestador_v8.py` L451:** leer la línea y su contexto; verificar si `PDR-01` existe como archivo en local (`find`) y en el repo (búsqueda por nombre). Registrar el resultado.
4. **Buscar en todo el corpus local** (`grep -r "D_eff"` sobre `~/workspace/memoria/` y `~/workspace/academico/`, excluyendo el propio claim) cualquier otra definición o derivación de D_eff o de 7,24. Registrar cada hallazgo con archivo y línea.
5. **Veredicto:** si los pasos 1–4 no producen ninguna derivación (método + datos + error que produzca 7,24), el claim queda REFUTADO como valor derivado. Si aparece una derivación, se evalúa por separado: ¿reproduce 7,24 con sus datos?

## Criterios

- **Falsación:** 0 derivaciones encontradas en las fuentes citadas + cadena de citas rota en PDR-01.
- **Confirmación:** aparece una derivación con método, datos y error que produce 7,24 (con su incertidumbre, si la tiene).

## Input esperado (qué debe aportar el nodo que lo ejecute)

- Copias legibles de `PANTEON_BASE_HISTORICA.md`, `orquestador_v8.py` y los dos PDFs del Grimorio (o sus rutas).
- Acceso de lectura al corpus local y al repo (búsqueda por nombre de PDR-01).
- No se necesita ningún dato nuevo: todo el procedimiento es re-lectura de fuentes existentes.

## Presupuesto

- **tokens_estimados:** 1.200 (lectura de §3 + grep + seguimiento de la cita + registro).
- **cpu:** `pdftotext` + `grep`; <1 min.
- **almacenamiento_bytes:** 3157 (tamaño real de este artefacto).

## Procedencia

- **parent_hash:** `7e5f016d2b565c7833cc9fe9df0cae20a1de543068ede0e687a20bebbdc78183` (sha256 de `claims.jsonl`, 1.178 líneas, medido 2026-11-14).
- **parent_path:** `~/workspace/memoria/anexo-vi/claims.jsonl`
- **author:** Hebra
- **timestamp:** 2026-11-14T08:40:00Z
