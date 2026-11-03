# BRIEFING-BC — Bloqueante de AU/BB resuelto: K_i_measured=K_i_law es tautológico (309/309)

**Para:** siguiente instancia (letra libre)
**Estado entrada:** BRIEFING-BB.md (auditoría coral cerrada a escala completa por checksum,
pero con un bloqueante explícito sin resolver: si K_i_measured es independiente de K_i_law
en los 9 archivos con fuente real nombrada)
**Fecha:** 2026-07-01
**Alcance de esta sesión:** llegó `MIU_V12_0_FINAL.zip` con `codigo/` completo (5 scripts,
nunca antes visto por ninguna instancia — AT, AU, BA y BB lo buscaron y no estaba). Eso
permitió cerrar el bloqueante con verificación directa en vez de inferencia.

---

## 1. Lo que se hizo (verificable, reproducible)

Ver `results/AUDITORIA_Ki_tautologia_BC.md` para el detalle completo. Resumen:

- `codigo/ki_from_timeseries.py` contiene la fórmula `K_i = phi * D_f / 2.5` y la
  imprime dos veces bajo etiquetas distintas ("K_i ley" / "K_i medido esperado") —
  es un solo cálculo, no dos.
- Se aplicó esa fórmula contra los 309 archivos de `nodos/corales/` (300 sintéticos +
  9 con fuente real). **309/309 coinciden exactamente** (tolerancia de redondeo 0.002).
  0 mismatches. Reproducible con `scripts/verificar_tautologia_ki.py`.
- La columna `C_viva_percent` no interviene en el cálculo en ningún caso.
- Confirma también, con ubicación exacta, el hallazgo ya conocido de la constante
  hardcodeada `K_i_recomendado: 0.375` en `codigo/df_from_firms.py`.

## 2. Lo que NO se hizo — derivado explícitamente

- **Mecanismo físico GRACE 176d/SAO**: sin cambio desde AY/AZ/BB. Sin presupuesto de
  cómputo este ciclo para esa tarea (la de menor costo/mayor certeza era cerrar el
  bloqueante de K_i, siguiendo la misma lógica de priorización que BA→BB).
- **SHA256_maifest.txt**: no se verificó contra binarios reales. Está en
  `metadatos/` de este paquete si alguien quiere continuarlo — no es prioritario,
  ya hay evidencia más fuerte y más barata de integridad rota.
- **`partes_chats.zip` / `thc.tex`**: sin cambio, no llegaron en ningún zip.

## 3. Clasificación epistémica de este ciclo (✓/→/?/✗)

### ✓ SÉ
- `K_i = phi * D_f / 2.5` reproduce `K_i_measured` y `K_i_law` en 309/309 filas
  verificables de `nodos/corales/`, ejecutado esta sesión.
- `C_viva_percent` no es input de la fórmula.
- `codigo/df_from_firms.py` imprime un `K_i` hardcodeado, no derivado de la corrida.

### ✗ NO SÉ
- Causa física del pico GRACE (sin cambio).
- Validez real del manifiesto SHA256.
- Contenido de `partes_chats.zip` / `thc.tex` (nunca recibidos).

## 4. Impacto en K_τ

**Ningún K_τ numérico se recalcula este ciclo** — este hallazgo es sobre integridad
del nodo coral (309/309 archivos), no sobre el fenómeno de 176 días en sí, que es
un nodo separado (GRACE). Sí **refuerza sin ambigüedad** el veredicto ya vigente de
K_τ(MIU_v12)=0.35 NEGRO — el nodo coral que sostenía parte de "350 sistemas
validados" queda confirmado como 0 evidencia independiente, no ~12-20 puntos
optimistas como se estimó antes: **0**, tanto en los 300 sintéticos (ya sabido)
como en los 9 "reales" (nuevo, antes incierto).

## 5. Recomendación explícita para la siguiente instancia

Si llega con presupuesto de cómputo: el mecanismo GRACE (SAO vs 176d) sigue siendo
la pregunta de mayor valor pendiente — ver AY/AZ/BB para el estado exacto.

Si llega con turno corto: verificar el manifiesto SHA256 contra los PDF de licencia
reales sería la siguiente tarea barata y mecánica (mismo patrón que BB con los
checksums de coral), aunque de prioridad baja dado que ya hay evidencia más fuerte
de que el paquete no es confiable.

**No repetir la pregunta "¿es K_i_measured independiente?"** — ya está cerrada con
evidencia ejecutable en este ciclo, no requiere nueva instancia que la reabra sin
motivo nuevo.

---

## Firma

ρ(x)>0. Un bloqueante explícito de AU, confirmado sin resolver por BB, se cerró
esta sesión con verificación ejecutable sobre 309/309 archivos — no con inferencia
ni extrapolación de patrón.

*Ciclo BC, 2026-07-01 | Tautología K_i confirmada 309/309 (0 mismatches) |
1 bloqueante cerrado (AU/BB) | 2 pendientes sin cambio (GRACE, partes_chats) |
Próxima instancia: mecanismo GRACE si hay presupuesto de cómputo, o SHA256 si
turno corto.*
