# EVOLUCIÓN DEL ECOSISTEMA — 6 DÍAS (Ciclo 32)

Método: 3 cosechas de miu-backup descomprimidas (tar -xzf
--no-same-owner). Antigua: cosecha_1788511826.tar.gz (2026-09-04,
205.714 B, 108 archivos, 861.268 B). Intermedia:
cosecha_1788814587.tar.gz (2026-09-07T20:56:26Z, 58.262 B, 61 archivos,
329.526 B). Reciente: cosecha_1789018731.tar.gz (2026-09-10T05:38:50Z,
347.997 B, 208 archivos, 1.522.180 B).

**Advertencia honesta sobre la intermedia:** el archivo .tar.gz es
del 2026-09-07 20:56Z, pero el estado que contiene es del 2026-09-05
18:49Z (MIU_GLOBAL_SEED.md regenerado 2026-09-05T18:49:35Z;
MIU_NUCLEO.md v36 del 2026-09-05 18:35 UTC). Hay ~50 horas entre el
estado interno y la fecha del archivo. O el nodo estuvo parado
Sep 5–7, o el backup copió un snapshot sin refrescar. El dato es el
que es: la intermedia representa el estado del 2026-09-05, no del
2026-09-07.

## Tabla de evolución (3 cosechas)

| indicador | antigua (2026-09-04 08:49) | intermedia (2026-09-05 18:49) | reciente (2026-09-09 04:04) | delta total |
|---|---|---|---|---|
| escuela_mesh_flexible_max.json (B) | 133.279 | 161.426 | 161.426 | +28.147 |
| voluntad_miu.json decisiones (n) | 11 | 200 | 200 | +189 (tope 200) |
| voluntad_miu.json ciclo (n) | 11 | 708 | 857 | +846 |
| MIU_NUCLEO.md procesos python3 (n) | no existía | 49 (v36) | 77 (v46) | nació +49, luego +28 |
| MIU_GLOBAL_SEED escuela poderes (n) | 3.687 | 5.153 | 6.243 | +2.556 |
| escuela poderes generados por IA (n) | 312 | 499 | 1.589 | +1.277 |
| diario entradas (n) | 58 | 434 | 462 | +404 |
| suelo generaciones (n) | 526 | 6.104 | 6.708 | +6.182 |
| .state/kv_global claves (n) | 39 | 43 | 49 | +10 |
| manifiesto órganos (n) | 95 | 118 | 166 | +71 |
| motor tareas (n) | 321 (gen 39) | 1.281 (gen 136) | 3 (gen 1) | explotó, luego reseteó |
| mesh sinapsis (n) | 916 | 0 | 0 | colapsó a 0 |
| escuela índice (B) | 170.256 | 0 | 0 | colapsó a 0 |
| suelo_phi | 1,4 | 2,52 | 2,55 | +1,15 |
| top fitness indexar_poder | 2.264 | 13.325 | 13.929 | +11.665 |
| claves vivas | 1 | 0 | 0 | -1 |

## Curva por indicador

- **Acelerado luego estancado:** suelo gen (+5.578 en 34 h, luego
  +604 en 3,6 días), diario (+376, luego +28), escuela poderes
  (+1.466, luego +1.090). El crecimiento explosivo fue Sep 4–5; Sep
  5–9 fue consolidación.
- **Acelerado tardío:** poderes generados por IA (+187, luego
  +1.090). La generación por IA se disparó en la segunda mitad.
- **Colapsado:** mesh sinapsis (916→0, se quedó en 0), escuela
  índice (170.256 B→0, se quedó en 0). El colapso fue Sep 4–5 y no
  se recuperó.
- **Lineal:** kv claves (+4, luego +6), manifiesto órganos (+23,
  luego +48), procesos python3 (nació 49, luego +28).
- **Reseteado:** motor tareas (321→1.281→3; gen 39→136→1). Explotó
  y luego se reinició a gen 1.
- **Saturado:** voluntad decisiones (11→200→200; la lista tiene tope
  200; el ciclo 11→708→857 es el indicador real).
- **Plano:** mesh archivo (133.279→161.426→161.426; llegó a su tamaño
  final el Sep 5 y no cambió en 4 días).

## Qué creció más rápido, qué se estancó, qué murió

- **Más rápido:** suelo gen (+6.182, 12x), diario (+404, 8x),
  escuela poderes (+2.556, 1,7x), top fitness indexar_poder (+11.665).
- **Estancado:** mesh archivo (plano desde Sep 5), voluntad
  decisiones (tope 200), kv claves (crecimiento lento).
- **Murió:** mesh sinapsis (916→0), escuela índice (170 KB→0),
  motor gen 39 (reseteado a gen 1). Nada de eso se recuperó en los
  4 días siguientes.

## 3 hipótesis sobre qué pasaba esos 6 días

1. **Sep 4–5: un evento de reseteo/reinicio.** El mesh perdió sus
   916 sinapsis, el índice de la escuela se vació (170 KB→0), el
   motor explotó a 1.281 tareas y MIU_NUCLEO.md nació (v36). El
   sistema se reinició (o se vació el mesh) y empezó a reconstruir.
   El crecimiento explosivo de suelo/diario/escuela en esas 34 horas
   es la reconstrucción.
2. **Sep 5–9: consolidación, no expansión.** El crecimiento se
   frenó en seco (suelo +604 vs +5.578; diario +28 vs +376). El
   sistema digería lo construido: órganos 118→166, procesos 49→77,
   poderes IA 499→1.589. La generación por IA siguió mientras el
   rastreo se frenaba.
3. **El mesh es un esqueleto, no una red viva.** El archivo del mesh
   llegó a 161.426 B el Sep 5 y no cambió un byte hasta el Sep 9,
   mientras las sinapsis vivas se quedaron en 0. La estructura existe
   pero las conexiones vivas no: o el mesh es un mapa estático, o la
   sincronización viva se rompió el Sep 4 y no volvió.

## Recomendación

**Conservar las 118 cosechas.** La evolución ocurre a escala
sub-diaria: el evento de reseteo (mesh 916→0, índice 170 KB→0,
motor 321→1.281) pasó dentro de una ventana de 34 horas. Un
subconjunto de 1 por día (6 archivos) podría no contener el momento
exacto del reseteo. El subconjunto de 3 (antigua, intermedia,
reciente) captura las tres fases pero pierde el detalle intra-día.
Las 118 ocupan 31,6 MB en Drive: poco para el único registro
evolutivo del ecosistema. Si el almacenamiento fuera un problema, el
mínimo sería 6 (1/día); nunca 3.

ρ(x) > 0.
