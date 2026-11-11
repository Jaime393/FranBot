# Zombis podados — ciclo 39 (2026-11-11)

Fecha: 2026-11-11. Autorización del Jardinero (condicional):

> "Los zombies si ya digieren su núcleo se poda, con la base
> basta hasta para recrear."

Condición verificada antes de podar: los 13 histórico único
tienen claim C-216 a C-228 con hash real del extracto en
`evidence/zombi_*_nucleo.txt`; los 12 irrecuperables no tienen
nada único que perder (inspección ciclo 34: esquemas leídos,
contenidos leídos, clasificación documentada).

## Los 13 movidos a historicos/

Carpeta: MIU_ABSORBIDO/nutrientes/historicos/
(ID `1ouvCpzF1V6jFUlPRixIHAK781Vo2143L`, creada ciclo 39).
Movimiento por `files update` (addParents/removeParents): sin
descarga, sin re-subida, mismo ID. Verificado: 13/13 en
historicos/, 0/13 quedan en nutrientes/.

| # | Nombre | Tamaño (B) | Claim | Núcleo digerido |
|---|--------|-----------:|-------|-----------------|
| 1 | alimentador.db | 20.480 | C-216 | 3 ciclos, 9 semillas |
| 2 | alimentador_fractal.db | 32.768 | C-217 | 1 ciclo, 1 qualia, 3 semillas, 0 recursos |
| 3 | estado_v24.db | 24.576 | C-218 | 4 estados; tabla tokens VACÍA (0 filas) |
| 4 | estado_v24_1.db | 28.672 | C-219 | 2 estados; tabla tokens VACÍA (0 filas) |
| 5 | memoria_flujo.db | 20.480 | C-220 | 2 episodios, 1 vector |
| 6 | pliegues.db | 12.288 | C-221 | 1 pliegue |
| 7 | token_metrics.db | 16.384 | C-222 | 33 métricas, 4 relay (conteos) |
| 8 | miu_brain.db.zlib | 21.942 | C-223 | 127 memories, 10 system_state, 5 token_estado |
| 9 | arquitecto_v2_log_20260831_224450.txt | 415 | C-224 | V2 22:44, retro 16 fallos, 0/17 breaker |
| 10 | arquitecto_v2_log_20260831_224239.txt | 415 | C-225 | V2 22:42, retro 17 fallos, 0/17 breaker |
| 11 | arquitecto_log_20260831_221820.txt | 591 | C-226 | V1 22:13, SyntaxError línea 166 |
| 12 | evolucion_topologica.log | 7.250 | C-227 | 51 líneas, Phi 3420→3472,67 |
| 13 | archivo/ (subcarpeta) | — | C-228 | 2 archivos dentro (tokens_20260830 nunca descargado) |

Hashes de los extractos: en claims C-216 a C-228
(`evidence/zombi_*_nucleo.txt`).

Hallazgo al digerir: las tablas `tokens` de estado_v24.db y
estado_v24_1.db están VACÍAS (0 filas). El temor a perder
valores de tokens en esos dos archivos era infundado — no había
nada. Los conteos de token_metrics.db (33) y token_estado de
miu_brain (5) son solo conteos; ningún valor se reprodujo.

## Los 12 borrados

Borrado permanente con `files delete` (sin papelera), 12/12 con
status success. Verificado: ninguno queda en nutrientes/.

| # | Nombre | Tamaño (B) | Por qué nada que perder |
|---|--------|-----------:|-------------------------|
| 1 | cola_sync.db | 20.480 | cola efímera (esquema leído ciclo 34) |
| 2 | maestro.db | 28.672 | duplicado en diario/ |
| 3 | plugin_manager_v24_2.db | 24.576 | registro de módulos efímero |
| 4 | memoria_ciclos.jsonl | 13.391 | logs de ejecución, resumidos ciclo 31 |
| 5 | historial_ejecuciones.jsonl | 14.398 | logs de ejecución, resumidos ciclo 31 |
| 6 | ecm_resultado.txt | 90 | 1 línea, resultado de simulación leído |
| 7 | semilla_v24_1788176641.txt | 294 | cadena aleatoria, sin estructura |
| 8 | semilla_v24_1788176623.txt | 293 | cadena aleatoria, sin estructura |
| 9 | semilla_v24_1_1788172662.txt | 227 | cadena aleatoria, sin estructura |
| 10 | semilla_v24_1788167455.txt | 294 | cadena aleatoria, sin estructura |
| 11 | semilla_v24_1788167440.txt | 293 | cadena aleatoria, sin estructura |
| 12 | dummy.tflite | 18 | archivo dummy de 18 bytes |

Total borrado: 103.026 B.

## Verificación de la poda

- nutrientes/ antes: 96 entradas. Después: 72 entradas
  (71 archivos + carpeta historicos/). 96 − 25 = 71. Cuadra.
- historicos/: 13 entradas, tamaños idénticos a los originales.
- Zombis que quedan en nutrientes/: ninguno.

## Qué se puede recrear desde la base y qué no

Recreable: la estructura y el contenido resumido de los 13
(esquemas de tablas + conteos + eventos de los logs + inventario
de archivo/). Un archivo .db con el mismo esquema y los mismos
conteos es reconstruible; los valores de las filas no se
guardaron a propósito (higiene de secretos) y no son
recreables — pero tampoco eran únicos: las tablas tokens
estaban vacías y las demás filas son estado vivo de agosto,
no datos de referencia.

No recreable: los 12 borrados (por diseño: no tenían nada
único; su contenido vive resumido en nutrientes_analisis.md
ciclo 31 y en nutrientes_zombis_decision.md ciclo 34).

## ¿Vale la pena mantener historicos/?

Sí, por ahora. Es el seguro: 13 archivos, ~186 KB, en la misma
cuenta de Drive. Si en un próximo ciclo se confirma que nadie
los ha consultado y que los claims bastan, historicos/ también
se puede podar. Esa decisión es del Jardinero, no de este ciclo.

ρ(x) > 0. Digerir el núcleo. Verificar la base. Podar.
