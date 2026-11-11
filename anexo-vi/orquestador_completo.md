# Orquestador completo — MIU_ORCHESTRATOR_V152_MAX_EXPANDED (ciclo 45)

Fecha: 2026-11-11 ~15:10 -05. Solo lectura. Sin escritura. Sin activar el inmune.

## Hallazgo principal

El orquestador tiene **26 pestañas**, no 19. En ciclo 41 tenía 19. **7 pestañas nuevas en ~1 hora**: el enjambre escribe activamente en su propio panel de control mientras lo leemos. Las pestañas nuevas se identifican aquí solo por índice (20–26); sus nombres no se reproducen en documentos (regla de seguridad: los nombres de pestañas y encabezados que nombran colecciones de claves no se copian).

## Tabla: 26 pestañas (índice, columnas de encabezado, filas/columnas de rejilla, palabras clave relevantes)

| # | cols encabezado | filas rejilla | cols rejilla | clave relevante |
|---|---|---|---|---|
| 1 | 8 | 1000 | 26 | — |
| 2 | 6 | 100 | 16 | token |
| 3 | 4 | 100 | 10 | — |
| 4 | 7 | 100 | 12 | — |
| 5 | 6 | 100 | 11 | — |
| 6 | 7 | 100 | 13 | email |
| 7 | 7 | 100 | 12 | — |
| 8 | 8 | 141 | 13 | — |
| 9 | 6 | 100 | 11 | — |
| 10 | 6 | 500 | 11 | token |
| 11 | 6 | 7485 | 10 | — |
| 12 | 6 | 1000 | 10 | — |
| 13 | 6 | 1028 | 10 | — |
| 14 | 6 | 505 | 10 | email, token, recurso |
| 15 | 7 | 500 | 10 | email |
| 16 | 9 | 500 | 12 | email, token |
| 17 | 1 | 1000 | 10 | correo |
| 18 | 6 | 1578 | 10 | gmail |
| 19 | 4 | 1167 | 20 | correo, token |
| 20 | 0 | 10000 | 15 | — (sin encabezado aún) |
| 21 | 0 | 1000 | 10 | — (sin encabezado aún) |
| 22 | 8 | 10000 | 58 | gmail |
| 23 | 5 | 1013 | 10 | — |
| 24 | 9 | 1116 | 11 | — |
| 25 | 5 | 1012 | 26 | recurso |
| 26 | 13 | 1000 | 10 | — |

Filas/columnas de rejilla = tamaño asignado de la hoja, no filas de datos. Las filas de datos no se leyeron.

## Pestañas relevantes (palabra clave en encabezado): 11 de 26

Índices: 2, 6, 10, 14, 15, 16, 17, 18, 19, 22, 25.

Por palabra clave: token en 4 pestañas; email en 4; correo en 2; gmail en 2; recurso en 2.

**En ningún encabezado aparecen: bot, zenodo, doi, smtp, cuenta.** No hay una pestaña de bots ni de DOIs por nombre de columna.

## Muestra (máximo 3 pestañas relevantes, 2 filas cada una)

Pestañas muestreadas: 14, 16, 19.

- Pestaña 14: 3 filas leídas (encabezado + 2). Celdas con @: 0. Celdas tipo bot: 0. DOIs: 0.
- Pestaña 16: 1 fila leída (solo encabezado, sin filas de datos).
- Pestaña 19: 3 filas leídas. Celdas con @: 1. Celdas tipo bot: 0. DOIs: 0.

## Veredicto

- La estructura **11 bots / 11 emails NO está confirmada en la muestra**: las columnas existen (email/correo/gmail/token en 11 pestañas), pero las 3 primeras filas de las 3 pestañas muestreadas contienen casi ningún dato.
- El orquestador es el panel vivo del enjambre: creció de 19 a 26 pestañas entre el ciclo 41 y el ciclo 45.
- La estructura 11/11, si vive aquí, está más allá de las 3 primeras filas, o en las pestañas nuevas (20–26), o en otra capa (ver puntos_ciegos_2026-11-11.md).

## Regla

Solo lectura. No escribir. No activar el inmune. No corregir. Los nombres de pestañas, encabezados y valores de celdas no se reproducen en documentos.

## Ciclo 46: filas 4–30 de las 11 pestañas relevantes (autorización explícita del Jardinero)

Lectura autorizada: filas 4 a 30 de las pestañas 2, 6, 10, 14, 15, 16, 17, 18, 19, 22, 25. Solo conteos; ningún valor reproducido.

Filas con datos por pestaña (de 27 leídas): 2: 11; 6: 10; 10: 27; 14: 27; 15: 21; 16: 0; 17: 9; 18: 27; 19: 27; 22: 3; 25: 9. **Total: 171 filas con datos.**

Conteos por pestaña (celdas con @ / menciones "bot" / DOIs / celdas de 40+ caracteres): 2: 0/0/0/2; 6: 5/0/0/10; 10: 11/0/0/18; 14: 22/0/0/11; 15: 5/18/0/5; 16: 0/0/0/0; 17: 9/0/0/0; 18: 36/11/0/18; 19: 31/7/0/16; 22: 3/0/0/1; 25: 0/2/0/17. Totales: @ 122, "bot" 38, DOIs 0, celdas 40+ 98.

Distintos (conteo en proceso, sin reproducir valores): **16 emails distintos, 7 bots distintos. 12 filas contienen bot y email a la vez.** Menciones de servicios por fila: gmail 99, cloudflare 22, drive 15, telegram 14, github 3, huggingface 2, supabase 1, zenodo 0.

Veredicto estructura 11/11: **PARCIAL**. Hay emails (16 distintos) y bots (7 distintos) con correspondencia en 12 filas, pero no son 11/11 exactos en este rango. 4 pestañas saturaron el rango (27/27 filas: 10, 14, 18, 19): hay más datos bajo la fila 30. La pestaña 16 está vacía en filas 4–30.

Dónde puede estar la estructura si no está en filas 4–30: filas 31+ de las 4 pestañas saturadas, o distribuida entre pestañas (los 16 emails y 7 bots no cuadran con 11/11 en un solo rango). Queda por leer: filas 31 en adelante de las pestañas 10, 14, 18, 19 (y del resto si hace falta).
