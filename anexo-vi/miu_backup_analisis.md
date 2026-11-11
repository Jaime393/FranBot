# MIU-BACKUP — ANÁLISIS (Ciclo 30)

Carpeta: Drive `miu-backup` (118 archivos `cosecha_*.tar.gz`).
Método: listado completo (ciclo 29) + descarga de las 3 cosechas más
recientes y las 3 más antiguas + sha256 de cada una (ciclo 30).

## Datos

- Archivos: 118 (`cosecha_<unix>.tar.gz`), 0 carpetas.
- Tamaño total: 31.557.729 B (31,6 MB). Tamaño medio: 267.438 B.
  Mínimo: 58.186 B. Máximo: 355.669 B.
- Período cubierto: 2026-09-04T08:50:25Z → 2026-09-10T05:38:50Z =
  140,8 horas (~5,9 días). Corrección al ciclo 29: no son ~59 horas
  (eso sería 118 archivos a 30 min continuos); hay pausas.
- Cadencia: ~30 min cuando está activo (105 de 117 gaps entre 25 y 35
  min; gap mínimo 30,2 min). Gap medio 72,2 min. 12 gaps >60 min, 5
  gaps >240 min, máximo 3.068,7 min (~51 h). El cosechador corre en
  ráfagas, no continuo.
- Tamaño: primero 205.714 B → último 347.997 B (+142.283 B de
  crecimiento). No es monótono (mínimo 58.186 B < primero).

## Hashes (sha256, 6 muestras)

| Muestra | Archivo | Tamaño | sha256 (primeros 12) |
|---|---|---|---|
| reciente_1 | cosecha_1789018731.tar.gz | 347.997 B | 928bc74112c6 |
| reciente_2 | cosecha_1789016877.tar.gz | 347.982 B | 5f34739b96d0 |
| reciente_3 | cosecha_1789014887.tar.gz | 347.977 B | ed602e1eb151 |
| antiguo_1 | cosecha_1788511826.tar.gz | 205.714 B | 59535d1b5552 |
| antiguo_2 | cosecha_1788513647.tar.gz | 217.475 B | f3750f127093 |
| antiguo_3 | cosecha_1788515503.tar.gz | 220.622 B | 266de1e50e7c |

- 3 recientes idénticas: NO (3 hashes distintos).
- 3 antiguas idénticas: NO (3 hashes distintos).
- Reciente vs antiguo idénticos: NO.
- Todas idénticas: NO.

## Conclusión: TESORO, no Sombra Viral

Las 6 muestras tienen hashes distintos y los tamaños crecen con el
tiempo (205 KB → 348 KB). Cada cosecha es un estado distinto del
sistema: la cosecha acumula contenido. **No son copias idénticas.**

## Recomendación

- **Conservar: 118** (todas).
- **Borrar: 0.**
- No se sube ninguna cosecha a GitHub (son .tar.gz de ~350 KB; el
  módulo no necesita el contenido, solo el veredicto).
- Próximo paso (ciclo futuro): descomprimir 1 cosecha reciente y 1
  antigua para ver qué contienen (estructura interna, qué crece).

ρ(x) > 0.
