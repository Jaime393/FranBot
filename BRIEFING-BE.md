# BRIEFING-BE — Nodo coral real construido desde coral_atlas_attribution_real.csv

**Para:** siguiente instancia (letra libre)
**Estado entrada:** BRIEFING-BD.md (4 archivos reales integrados, GRACE 176d sin resolver por
límite de Rayleigh, `noaa_co2_maunaloa_1958-2026.csv` excluido por tautología D_f/K_i)
**Fecha:** 2026-07-01
**Alcance de esta sesión:** sin archivos nuevos subidos por Cole. Se ejecutó la recomendación
explícita #2 de BD y se investigó (sin poder resolver) la recomendación #1.

---

## 1. Lo que se hizo

### 1.1 Nodo coral real construido (recomendación BD §5, punto 2)
- Se agregó `datos_reales_BD/coral_atlas_attribution_real.csv` (616 filas reales, ya auditado
  en BD) por `Mapped Region`: conteo real de fuentes, instituciones únicas, áreas geográficas
  y tipo de dato dominante — **sin ninguna columna `K_i`/`D_f`/`phi` fabricada.**
- Resultado: `derivados_BE/nodo_coral_real_BE.csv`, 33 regiones, suma de fuentes = 616 (cuadra
  exacto con el CSV fuente — verificado por script, no de memoria).
- Este nodo reemplaza, no imita, al nodo sintético tautológico de BB (309/309 cerrado). Es
  descriptivo (conteos reales), no pretende ser una métrica K_i — evita repetir el patrón que
  BD marcó como recurrente (columnas fijas disfrazadas de derivación).

### 1.2 Investigación de la pregunta GRACE 176d vs SAO (recomendación BD §5, punto 1)
- Se confirmó vía búsqueda web que el dataset vigente es **JPL RL06.3Mv04**
  (DOI: 10.5067/TEMSC-3MJ634), que reemplaza al RL06.1Mv03 que BD tenía documentado. Mismo
  fondo: 4,551 mascons independientes, grid de 3°, cobertura GRACE clásico (2002-2017) +
  GRACE-FO (2018-presente) — es decir, si se descarga completo sí alcanza los >13 años que
  Rayleigh exige para separar 176d de la armónica semianual.
- **No se pudo descargar**: el bucket S3 de PO.DAAC requiere login de Earthdata
  (`podaac-data-downloader` con credenciales), y `bash_tool` en este entorno no tiene salida
  de red (`Enabled: false` en la configuración). `web_fetch` tampoco sirve para esto — no es
  un fetch de página, es descarga de binario autenticado.

## 2. Clasificación epistémica de este ciclo

### ✓ SÉ
- El nodo coral real (33 regiones, 616 fuentes) reproduce exactamente el CSV fuente —
  verificado por suma, no asumido.
- El dataset GRACE mascon vigente es RL06.3Mv04 con DOI citable, y su cobertura temporal
  completa (2002-2026, ~24 años) sería matemáticamente suficiente para resolver 176d vs SAO.

### ✗ NO SÉ / SIGUE BLOQUEADO
- El pico de 176.7d en la serie que Cole aportó sigue sin poder distinguirse de la armónica
  semianual — este ciclo no generó dato nuevo para esa pregunta, solo confirmó dónde está el
  dato correcto y por qué sigue sin poder bajarse desde aquí (autenticación + red).

## 3. Impacto en K_τ

No se recomputa el bloqueante MIU_v12=0.35 NEGRO (sigue vigente, sin relación con lo hecho
hoy). El nodo coral real es un ítem nuevo, no reemplaza la revisión pendiente de "más archivos
con firma D_f/K_i fija" que BD dejó como tarea explícita — esa tarea sigue sin hacerse este
ciclo (no había archivos nuevos que auditar).

## 4. Recomendación explícita para la siguiente instancia

- Si Cole puede correr `podaac-data-downloader` con su propia cuenta Earthdata en una máquina
  con red (Colab, su PC), bajar RL06.3Mv04 completo 2002–2026 resuelve la pregunta 176d vs SAO
  de forma definitiva. Comando base ya documentado arriba y en
  `fuentes_reales_BD/GRACE_GRACEFO_fuente.md` (de BD).
- El nodo coral real (`derivados_BE/nodo_coral_real_BE.csv`) está listo para usarse como
  insumo de cualquier análisis geográfico/institucional de cobertura documental de coral —
  no es una métrica K_i, es un conteo. Si se quiere una métrica K_i real desde aquí, definir
  primero qué relación empírica (no arbitraria) la sustenta antes de calcularla.
- `INVENTARIO_MAESTRO.md` se actualiza con esta fila nueva (ver abajo) — no se toca ninguna
  fila anterior de AV/AW, siguiendo la regla de oro del archivo.

---

## Firma

ρ(x)>0. Este ciclo no fabricó datos: el nodo coral es una agregación real y verificada del
CSV fuente; la investigación GRACE confirmó una fuente citable y su bloqueo real (auth+red),
sin fingir haber resuelto la pregunta científica pendiente.

*Ciclo BE, 2026-07-01 | 1 derivado real construido y verificado (nodo coral, 33 filas) |
1 recomendación investigada y confirmada bloqueada por causa distinta a la original (ya no es
"no hay dataset >13 años", es "hay dataset pero requiere auth+red que este sandbox no tiene") |
Próxima instancia: bajar RL06.3Mv04 desde máquina con red y credenciales Earthdata.*
