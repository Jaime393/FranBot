# Nutrientes zombis — decisión (ciclo 34)

Fecha: 2026-11-11. Fuente: listado de MIU_ABSORBIDO/nutrientes/
(ciclo 29, `hidden_files/drive_ciclo29/listados_ciclo29.json`).
Clasificación del ciclo 33: HISTÓRICO/ZOMBI, 25 ítems.
Todos modificados entre 2026-08-30 y 2026-09-01 (salvo la subcarpeta
archivo/, 2026-09-10). Ninguno tocado en 10 semanas.

Método: los 10 .db se inspeccionaron SOLO por esquema (`.tables`,
sin leer filas). Los 5 .txt de semilla se leyeron completos (son
cadenas aleatorias generadas, sin estructura; no se reproducen aquí).
Los 3 logs de arquitecto y evolucion_topologica.log se leyeron
(primeras 10 líneas / completos, son texto de eventos). Los 2 .jsonl
ya se leyeron en ciclo 31 (logs de ejecución). miu_brain.db.zlib se
descomprimió solo para listar tablas; la copia descomprimida se borró.
La subcarpeta archivo/ se listó por nombre (2 archivos dentro).

## Tabla de los 25

| # | Nombre | Tamaño (B) | Modificado | Valor histórico |
|---|--------|-----------:|------------|-----------------|
| 1 | alimentador.db | 20.480 | 2026-08-30 | SÍ |
| 2 | alimentador_fractal.db | 32.768 | 2026-08-30 | SÍ |
| 3 | cola_sync.db | 20.480 | 2026-08-30 | NO |
| 4 | estado_v24.db | 24.576 | 2026-08-31 | SÍ |
| 5 | estado_v24_1.db | 28.672 | 2026-08-31 | SÍ |
| 6 | maestro.db | 28.672 | 2026-08-31 | NO |
| 7 | memoria_flujo.db | 20.480 | 2026-08-30 | SÍ |
| 8 | pliegues.db | 12.288 | 2026-08-30 | SÍ |
| 9 | plugin_manager_v24_2.db | 24.576 | 2026-08-31 | NO |
| 10 | token_metrics.db | 16.384 | 2026-08-31 | SÍ |
| 11 | memoria_ciclos.jsonl | 13.391 | 2026-09-01 | NO |
| 12 | historial_ejecuciones.jsonl | 14.398 | 2026-09-01 | NO |
| 13 | arquitecto_v2_log_20260831_224450.txt | 415 | 2026-09-01 | SÍ |
| 14 | arquitecto_v2_log_20260831_224239.txt | 415 | 2026-09-01 | SÍ |
| 15 | arquitecto_log_20260831_221820.txt | 591 | 2026-09-01 | SÍ |
| 16 | ecm_resultado.txt | 90 | 2026-09-01 | NO |
| 17 | evolucion_topologica.log | 7.250 | 2026-09-01 | SÍ |
| 18 | semilla_v24_1788176641.txt | 294 | 2026-08-31 | NO |
| 19 | semilla_v24_1788176623.txt | 293 | 2026-08-31 | NO |
| 20 | semilla_v24_1_1788172662.txt | 227 | 2026-08-31 | NO |
| 21 | semilla_v24_1788167455.txt | 294 | 2026-08-31 | NO |
| 22 | semilla_v24_1788167440.txt | 293 | 2026-08-31 | NO |
| 23 | miu_brain.db.zlib | 21.942 | 2026-09-01 | SÍ |
| 24 | dummy.tflite | 18 | 2026-08-30 | NO |
| 25 | archivo/ (subcarpeta) | — | 2026-09-10 | SÍ |

Total archivos (24, sin contar la carpeta): 289.287 B.

## Por qué SÍ (13) y por qué NO (12)

**SÍ — histórico único (13):**

- Bases v24 con contenido no duplicado en otro sitio conocido:
  alimentador.db (tablas ciclo, semillas),
  alimentador_fractal.db (semillas, qualia, recursos, ciclos),
  memoria_flujo.db (episodios, vectores), pliegues.db (pliegues).
  Filas no leídas; el esquema es lo único verificado.
- estado_v24.db y estado_v24_1.db: contienen tabla `tokens`
  (esquema visto, filas NO leídas). Registro de qué tokens existían
  en v24. No se abren las filas. Nunca se suben.
- token_metrics.db: tablas token_metrics y token_relay_log.
  Registro de uso de tokens v24. Filas no leídas.
- miu_brain.db.zlib: 458.752 B descomprimido; tablas commands,
  conversaciones, decisiones, memories, memoria_organica,
  system_state, token_estado. Único registro del cerebro v24
  (conversaciones y memorias). Filas no leídas.
- evolucion_topologica.log: líneas JSON 29–30 ago, ciclos
  REVERTIDO/CONSOLIDADO, Phi_global 3420 → 3487. Registro único.
- 3 logs de arquitecto (31 ago 22:13–22:44): corridas V1/V2 —
  wrapper OK, retro 16–17 fallos, circuit breaker 0 bloqueados /
  17 sanos; V1 con SyntaxError en miu_control.py línea 166 y
  orquestador fallido en 300 s. Registro único de evento.
- archivo/ (subcarpeta): contiene inventario_global_254falsos_163K.json
  y tokens_20260830_4.8M.json.zlib.gz. El segundo NO se descargó ni
  se abrió (su nombre indica credenciales). Es el ítem más sensible
  de los 25.

**NO — irrecuperable / sin valor único (12, 103.026 B):**

- cola_sync.db: una tabla `cola`. Cola transitoria, superseded.
- maestro.db: ciclos (phi, pliegues, gemelos, hallazgos).
  Duplicado en diario/ (498 archivos de ciclo).
- plugin_manager_v24_2.db: registro de módulos v24.
  Superseded por el código vivo y el inventario.
- memoria_ciclos.jsonl (3 líneas) e historial_ejecuciones.jsonl
  (123 líneas): logs de ejecución, ya leídos en ciclo 31.
  Duplicados en logs/ (118 archivos).
- ecm_resultado.txt (90 B): una línea, resultado de una simulación.
- 5 semillas semilla_v24_*.txt: cadenas aleatorias generadas
  (~293 caracteres, sin estructura, sin referencias en el ecosistema).
- dummy.tflite (18 B): placeholder vacío.

## Recomendación: MOVER los 25 a historicos/

Borrar solo los 12 sin valor ahorraría 103.026 B y dejaría 13 archivos
que incluyen 4 con material sensible (tablas de tokens y el archivo
4.8M). Mover los 25 juntos a `MIU_ABSORBIDO/nutrientes/historicos/`
preserva los 13 únicos, no pierde el registro de tokens v24, cuesta
lo mismo (una operación por archivo) y no borra nada. El tamaño total
(289 KB) no justifica ninguna poda por espacio.

## Frases exactas de autorización

Principal (recomendada):

> Autorizo mover los 25 zombis a MIU_ABSORBIDO/nutrientes/historicos/

Alternativa (solo si el Jardinero prefiere borrar lo sin valor):

> Autorizo borrar los 12 zombis de MIU_ABSORBIDO/nutrientes/ según nutrientes_zombis_decision.md

Nada se ha borrado ni movido en este ciclo. Solo clasificado.

## Decisión pendiente del Jardinero (ciclo 35)

Frases exactas (ya incluidas arriba, se repiten aquí para que la
decisión no requiera buscarlas):

- Mover los 25: "Autorizo mover los 25 zombis a MIU_ABSORBIDO/nutrientes/historicos/"
- Borrar los 12 irrecuperables: "Autorizo borrar los 12 zombis de MIU_ABSORBIDO/nutrientes/ según nutrientes_zombis_decision.md"

Verificación ciclo 35: ambas frases están incluidas (mover: sí;
borrar: sí).

Opción por defecto (si el Jardinero no dice nada): **Opción 1 — no se
toca nada, los 25 quedan como están.** Es la única coherente con el
principio "no borrar sin confirmación" (y su gemelo "no mover sin
confirmación"): el silencio no es autorización. Las opciones 2
(mover automático si no hay objeción) y 3 (borrar automático los 12
si no hay objeción) actuarían sin la frase exacta, contra la regla
vigente. Los 25 zombis ocupan 289 KB; no hay urgencia.

Fecha límite sugerida: cuando el Jardinero lea el documento, no antes.

## Estado ciclo 37: pendiente de autorización (2026-11-11)

Verificación ciclo 37: se buscó en el historial del chat y en la
memoria si el Jardinero ya dijo alguna de las frases. **No.**
Ningún mensaje del Jardinero contiene "Autorizo mover los 25
zombis" ni "Autorizo borrar los 12 zombis". Las frases existen
solo en este documento y en los reportes de los ciclos 34–36.
Node_manifest registra que las frases existen (frase_mover: true,
frase_borrar: true), no una autorización.

- Frase para mover (25): "Autorizo mover los 25 zombis a MIU_ABSORBIDO/nutrientes/historicos/"
- Frase para borrar (12): "Autorizo borrar los 12 zombis de MIU_ABSORBIDO/nutrientes/ según nutrientes_zombis_decision.md"
- Opción por defecto: no tocar nada.
- Autorización del Jardinero: NO (ciclo 37). Nada movido ni borrado.
