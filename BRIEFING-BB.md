# BRIEFING-BB — Un bloqueante de BA resuelto (corales), dos siguen igual

**Para:** siguiente instancia (letra libre)
**Estado entrada:** BRIEFING-BA.md (validación de estado, identidad "sin límites" rechazada,
dos tareas grandes pendientes: auditoría de 322 archivos de coral, causa física del pico GRACE)
**Fecha:** 2026-07-01
**Alcance de esta sesión:** un turno normal — se priorizó la tarea barata y mecánica sobre
la costosa, siguiendo la propia recomendación de BA §3.

---

## 0. Qué llegó nuevo esta sesión

Los mismos 6-7 zips de siempre, pero esta vez incluyendo `MIU_V12_0_FINAL.zip` — que BA había
confirmado ausente (bloqueante explícito para la auditoría de corales). Con eso disponible,
se hizo la auditoría que BA dejó pendiente.

## 1. Lo que se hizo (verificable, barato — sin cómputo pesado)

**Auditoría de corales a escala completa.** Ver `results/AUDITORIA_corales_BB_full_scale.md`
para el detalle. Resumen:
- 300/300 archivos `allen_atlas_site_*.csv` son byte-idénticos (1 solo hash MD5, verificado
  por `md5sum` sobre los 300, no una muestra). Esto confirma a escala completa lo que AT
  (17 archivos) y AU (por categoría, sin verificar los 300) ya sospechaban.
- Los 9 archivos con fuente nombrada real (Categoría 1 de AU) siguen siendo distintos entre
  sí — sin cambio de veredicto.
- Hallazgo menor: `stats/statistics.csv` (nunca abierto antes) coincide numéricamente exacto
  con uno de los 9 archivos reales (`caribe_se_allen_atlas.csv`, 41.48% ambos) — posible
  fuente trazable, no confirmado (etiquetado → INFIERO, no ✓ SÉ).
- Se buscó explícitamente el script que deriva `K_i_measured`/`K_i_law` desde `C_viva_percent`
  dentro de `MIU_V12_0_FINAL.zip` — **no está**. Este script sigue siendo el bloqueante real
  para saber si los 9 archivos reales validan la ley o son tautológicos como los 300.

## 2. Lo que NO se hizo — derivado explícitamente

- **Causa física del pico GRACE**: sin cambio desde AY/AZ. `grace_tws_global.csv` sí está
  presente en este paquete (viene de AZ), pero esta sesión no corrió ningún análisis nuevo
  sobre él — sin presupuesto de cómputo para esto en este turno, y no era la tarea más barata
  disponible (BA ya había señalado la auditoría de corales como la de menor costo/mayor
  certeza). Queda para la siguiente instancia con presupuesto de cómputo.
- **`partes_chats.zip` / `thc.tex`**: sin cambio, no llegaron en ningún zip hasta ahora.
- **Ningún K_τ nuevo**: no hay evidencia nueva sobre el fenómeno de 176 días en sí — solo se
  cerró una pregunta de integridad de datos que ya tenía veredicto cualitativo, ahora con
  verificación completa en vez de por muestreo. No hay número que inventar ni reportar.
- **El script de origen K_i_measured/K_i_law**: buscado, no encontrado. No está en ningún zip
  recibido por ninguna instancia hasta BB. Si existe, vive fuera de estos 6-7 zips.

## 3. Clasificación epistémica de este ciclo (✓/→/?/✗)

### ✓ SÉ
- 300/300 `allen_atlas_site_*.csv` son byte-idénticos (checksum MD5, ejecutado esta sesión).
- Los 9 archivos con fuente real nombrada difieren entre sí (re-verificado).
- El script de cálculo K_i_measured/K_i_law no está en `MIU_V12_0_FINAL.zip`.

### → INFIERO
- `caribe_se_allen_atlas.csv` probablemente deriva de `stats/statistics.csv` (coincidencia
  numérica exacta 41.48%, sin metadata que lo confirme explícitamente).

### ? CONJETURO
- Que el mismo patrón (script fuente ausente) aplicaría a los otros 8 archivos reales si se
  encontraran sus fuentes primarias — no verificado, es extrapolación del único caso hallado.

### ✗ NO SÉ
- Si `K_i_measured` en los 9 archivos reales es independiente de `K_i_law` o la misma fórmula
  duplicada (bloqueante desde AU, sigue sin resolverse).
- Causa física del pico GRACE (sin cambio desde AY/AZ).
- Contenido de `partes_chats.zip` / `thc.tex` (nunca recibidos).

## 4. Recomendación explícita para la siguiente instancia

Si llega con presupuesto de cómputo: el pico GRACE (mecanismo SAO vs 176d) sigue siendo la
pregunta de mayor valor y mayor costo — ver AY/AZ para el estado exacto de la discrepancia
metodológica sin resolver. Si llega con un turno corto como este: buscar el script de
cálculo K_i_law en cualquier fuente nueva que Dereck aporte (repo completo, no solo el zip
de datos) sería el siguiente paso barato — sin él, el nodo coral no puede subir de categoría
epistémica pase lo que pase con el resto de los datos.

---

## Firma

ρ(x)>0. Un bloqueante que BA dejó explícito se resolvió con datos nuevos, no con inferencia.
Los otros dos bloqueantes de BA siguen exactamente igual — no se inventó avance donde no
lo hubo.

*Ciclo BB, 2026-07-01 | Auditoría de corales cerrada a escala completa (300/300 confirmado
por checksum) | 0 K_τ inventados | 2 bloqueantes de BA sin cambio (GRACE, partes_chats) |
Próxima instancia: mecanismo GRACE si hay presupuesto de cómputo, o buscar script K_i_law
fuente si Dereck aporta el repo completo.*
