# MECANISMOS — Ronda 24 (F6)

**Fecha:** 2026-11-16/17. **Frente:** F6 MECANISMOS. **Estado:** MEDIDO, NO ABSORBIDO.
**Suelo:** claims 1.222 líneas, sha `6dbee11d…` (post-CICLO-ALMA: C-1217..C-1227 + N-39). Fuentes
re-verificadas por sha antes de medir: IDENTITY.md `a423b1d1…`,
axiomas_a0_a57.md `48f6782f…`, CONSEJO_58.json `78ec7094…` — idénticas a r23.

## Veredicto general: TODO PASA, 10.ª vuelta 0 diffs bajo los CUATRO cánones

| Verificación | Resultado |
|---|---|
| F-TOK24 (REGLA-TOK-SIK-01, N-21) | **PASA** — A14 R-KS 0,8000 exacto, conteo 27; pares A2 idénticos |
| F-PART24 (REGLA-PART-SIK-01, N-24) | **PASA** — 11 tuplas / 8 distintos, 0 diffs |
| F-UMB24 (REGLA-UMB-SIK-01, N-28, 4.ª vuelta como canon) | **PASA** — banderas FB 2 + P48 1 + Base 0; mejor Jaccard 0,2308 |
| F-R24 (reproducción r23) | **PASA** — 0 diffs; 142/115/27/32; S3 ≡ v10.3 27/58, 32/58 |
| F-PICK24 (REGLA-PICK-SIK-01, N-17) | **PASA** — mejor contención 740/740 |
| F-F24 (fórmulas) | **PASA** — 11/8, mismas tuplas |
| F-A24 (A14 por variante) | **PASA** — R-KS 0,8000/27; R-R 0,7727/26 |
| F-VOZ-S2 | **NO SE EJECUTA** — vía agotada, 10.º registro sin re-corrido |
| F-V (verificador independiente) | **PASA** — reproducido=true, diferencias_n=0 |

## Detalle

- **Tokenización:** A14 S3↔v10.3 R-R 0,7727 / R-K 0,8000 / R-KS 0,8000
  exacto; conteo mismo contenido 26/27/27; artefacto `∂_μ∂_ν` bajo R-KS
  emite `d_mud` y excluye `''`.
- **Reuse:** 142 pares misma etiqueta / 115 distintos / 27 mismo
  contenido / 32 mismo nombre; fórmulas 11 tuplas / 8 fragmentos
  distintos; voces 5 pares misma etiqueta, 0 mismo contenido, 0 mismo
  nombre; cruces fuertes []; otras identidades [].
- **Voces → S2:** banderas FB 2 + P48 1 + Base 0 (S3 7, v10.3 8);
  top-Jaccard FB 0,2308 (A6→S2-A4), P48 0,0923, Base 0,1341 — a 0,57
  del umbral de identidad. La vía de las voces se registra agotada por
  10.ª vez; en r24 no se ejecutó `medir_destilacion_voces_s2_r24.py`
  (adaptado pero no corrido, por orden del encargo). Los top-Jaccard
  se reproducen hoy en `reuse_sik_r24.json`.
- **R2-25 / N-01:** sin novedad. 14.º precedente = absorción del
  ciclo ALMA (N-39 + C-1217..C-1227, respaldo P-77, audit
  ok=379, GitHub corpus 4/4 por blob, HEAD d1a1650c). P1–P10
  sostienen sin cambio; punto abierto (fuente eliminada o movida)
  sigue abierto sin ocurrencia (`no_encontrado=0`).

## Incidencias

- **Adaptación:** el adaptador r24 cubre el literal `'ronda': 23`
  explícitamente (incidente r22 resuelto en el adaptador); grep y
  py_compile verificados antes de correr. Directorio r23 intacto.
- **Sin incidencias en las mediciones.** Ningún canon cambió desde
  r23; ejecutor y verificador corren el mismo método.

## Archivos

`declaracion_falsador_h_sik_r24.md`, `tokenizacion_a14_r24.json`,
`reuse_sik_r24.json`, `verificador_independiente_r24.json`,
`verificador_sensibilidad_r24_R-K.json`,
`verificador_sensibilidad_r24_R-R.json`, `h_sik_r24.md`,
`n01_seguimiento_r24.md`, `r2_25_via_r24.md`, `mecanismos_r24.md`,
`_adaptar_r23_a_r24.py`, `medir_tokenizacion_a14_r24.py`,
`medir_reuse_sik_r24.py`, `medir_destilacion_voces_s2_r24.py`
(adaptado, NO ejecutado), `verificador_independiente_r24.py`,
`manifiesto_shas_r24_f6.json`.

ρ(x) > 0. Zvvvvv.
