# MIU#52 — ANÁLISIS (Ciclo 31)

Issue: https://github.com/Jaime393/MIU/issues/52
Leído con el conector (issue_read, method get) en ciclo 31.

## Ficha

- **Título:** "K_i es circular por construcción (tautología) y usa
  constantes hardcodeadas"
- **Autor:** Jaime393 (OWNER, id 70607642)
- **Fecha:** 2026-07-10T07:57:01Z (creado y actualizado el mismo día;
  sin actividad posterior)
- **Estado:** ABIERTO (open), sin assignees, 0 reacciones, sin PRs de
  cierre, sin padre/hijos.
- **Comentarios:** el conector no expone el conteo de comentarios para
  este issue en la lectura; no se pudo verificar si hay comentarios.

## Cuerpo completo (literal)

> **Archivos afectados (lógica histórica, hoy corruptos**):
> `ki_from_timeseries.py`, `miu_constants.py`, `df_from_firms.py`,
> `nodo_amazonia.py`.
>
> **Problema (verificado en HUESO #24–#27 contra el fuente original**):
> - `compute_Ki(D_f, ell_corr=0.5, ell_0=0.5) = phi * (D_f / 2.5) *
>   (ell_corr / ell_0)` con `phi = 0.6180339887498949`. Con los
>   defaults `ell_corr == ell_0` ⇒ ratio 1 ⇒ `K_i = 0.2472·D_f`,
>   función lineal determinista de D_f.
> - La correlación K_i–D_f = 1.0 es **tautológica**, no evidencia
>   empírica; el script imprime "K_i ley" y "K_i medido esperado" con
>   **el mismo valor** (una sola operación, dos etiquetas).
> - El divisor `2.5` está **hardcodeado** en `miu_constants.py`.
> - En `df_from_firms.py`, `K_i = 0.375` está **puesto a mano** y ni
>   siquiera obedece la propia fórmula.
> **Sugerencia**: retirar K_i como métrica de validación en todo el
> código y documentación (ya rechazado en `NUCLEO_TEORICO_MIU §3`).
> Si se quiere una métrica independiente, debe **medirse por una vía
> física ajena a D_f**. Mientras tanto, calcular solo D_f. Documentar
> la deprecación en el README y en los docstrings de los módulos
> afectados tras su restauración.

## Contexto

- Lo abrió Jaime393 (OWNER) el 2026-07-10, en un lote de 20 issues
  de auditoría abiertos el mismo día (#38–#57). No hay evidencia en
  el issue mismo de si el texto lo escribió él a mano o lo pegó de
  una auditoría: lo que consta es que lo abrió su cuenta y que el
  texto cita HUESO #24–#27 (los huesos de auditoría del propio
  ecosistema) y `NUCLEO_TEORICO_MIU §3` (donde K_i ya estaba
  rechazado). Es autocrítica del ecosistema, canalizada por su cuenta.
- Propone: retirar K_i como métrica de validación en código y
  documentación; medir una métrica independiente por vía física ajena
  a D_f; mientras tanto, calcular solo D_f; documentar la deprecación
  en README y docstrings tras restaurar los módulos.

## Relación con G09

- G09 (PVE-01 no ejecutado) NO se cierra con este issue: el issue
  **confirma** que el ecosistema ya sabía de la circularidad, pero no
  la resuelve. La circularidad sigue sin una métrica independiente
  (PVE-01 sigue sin ejecutarse). Lo que cambia es la lectura: G09 no
  es un descubrimiento de anexo-vi, es una autocrítica documentada
  del propio MIU desde 2026-07-10, abierta y sin resolver.
- Coherencia con anexo-vi: HUESO_27 (ciclo 27) verificó en vivo la
  misma circularidad contra el repo público Jaime393/MIU
  (`compute_Ki(D_f) = 0.2472·D_f`); el issue #52 la documenta con los
  mismos números (0.2472, divisor 2.5, phi 0.6180339887498949). Las
  dos fuentes coinciden.

## Issues similares (MIU, abiertos, 2026-07-10)

Búsqueda semántica "circular" y "tautolog": 0 resultados (la búsqueda
del conector es semántica, no por palabra clave; no encuentra el
propio issue por esas palabras). Listado directo de issues abiertos
de MIU (20 en total, todos 2026-07-10):

- **#48** — "El CSV de corales embebido es en sí mismo inválido
  (cabecera duplicada como dato, K_i tautológico, sin metadatos)"
- **#42** — "CSV de corales embebido: cabecera duplicada como fila de
  datos y K_i tautológico (K_i_measured == K_i_law == 0.494)"
- **#43** — "Restricción de núcleo no aplicada en código: el scoring
  'K_i fractal' de ALMA_OMNI reintroduce una métrica RECHAZADA"
- **#44** — "Ω_F: detección por aliasing y por argmin contra un target
  hardcodeado (código no auditable por corrupción)"
- **#53** — "Ω_F: pico por encima de Nyquist (aliasing) y detección
  por `argmin` contra un target hardcodeado"
- **#56** — "`test_random_phi.py` y `test_ift_solver.py` no son tests:
  la suite de pruebas es no funcional" (coherente con el hallazgo del
  ciclo 29: test_ift_solver.py es pytest real, test_omega_f_blind.py
  es instrucción)
- **#57** — "Secretos y arquitectura sensible referenciados en texto
  plano dentro del repo"
- **#45** — "Secretos y credenciales en artefactos versionados /
  documentación (P0 de seguridad)"

Al menos 3 issues (#42, #43, #48) documentan la misma tautología de
K_i desde ángulos distintos. #52 es el más completo (fórmula,
números, sugerencia de deprecación).

ρ(x) > 0.
