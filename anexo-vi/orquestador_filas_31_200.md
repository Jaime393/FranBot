# Orquestador — filas 31–200 de las 4 pestañas saturadas (ciclo 47)

Fecha: 2026-11-11 ~15:52 -05. Solo lectura. Solo conteos; ningún valor reproducido.

## Tabla consolidada

| pestaña | filas con datos 31–200 | bots nuevos | emails nuevos | DOIs nuevos | estructura 11/11 |
|---|---|---|---|---|---|
| 10 | 6 | 0 | 0 | 0 | no |
| 14 | 72 | 1 | 2 | 0 | no |
| 18 | 170 (rango completo) | 1 | 2 | 0 | no |
| 19 | 170 (rango completo) | 2 | 9 | 0 | no |

Total filas 31–200 con datos: 418.

Detalle por pestaña (celdas con @ / menciones "bot" / DOIs / celdas 40+): 10: 0/0/0/6; 14: 34/0/0/61; 18: 175/0/0/143; 19: 137/0/0/158. Totales: @ 346, "bot" 0 (ver nota), DOIs 0, celdas 40+ 368.

Nota: en este rango el conteo de la subcadena "bot" dio 0 porque los handles aparecen sin la palabra "bot" como subcadena aislada en el texto plano unido (los handles se detectaron con el regex de la consolidación global). Los bots distintos se cuentan en la consolidación global, no por subcadena.

## Consolidación global (filas 4–30 de 11 pestañas + filas 31–200 de 4 pestañas)

- **Emails distintos: 18.** (16 en filas 4–30; 13 nuevos en 31–200 por pestaña: 14: +2, 18: +2, 19: +9; con solapes entre pestañas el total global es 18.)
- **Bots distintos: 8 matches** — handles: almaomni_bot, franbottablet_bot, franfamiliar_bot, fransell_bot, imperio_franbot, jp393_bot; más 2 palabras genéricas ("bot", "franbot") captadas por el regex.
- **Filas con bot y email a la vez: 54** (12 en filas 4–30 + 42 en filas 31–200: 14: 0, 18: 34, 19: 8).

## Estructura 11/11: sigue PARCIAL

Hay más emails que 11 (18 distintos) y menos bots con forma de handle que 11 (6). La correspondencia bot→email existe (54 filas con ambos). Los 11/11 exactos no aparecen en ningún rango leído hasta ahora.

## Bots nuevos (sin tokens)

- imperio_franbot: aparece en filas 31–200, sin token en el archivo local → no verificable con getMe.
- Los demás bots distintos de este rango ya estaban en filas 4–30 o son los 4 vivos verificados.

## Qué falta para tenerla completa

- Filas 201+ de las pestañas 18 y 19: ambas saturaron el rango 31–200 (170/170 filas con datos). Ahí puede haber más emails y bots.
- Pestaña 10 se agota en la fila 36 (6 filas en 31–200). Pestaña 14 se agota en la fila 102 (72 filas).
- Los 11 bots afirmados pueden incluir bots fuera de las filas leídas (filas 201+ o pestañas no leídas en profundidad).
