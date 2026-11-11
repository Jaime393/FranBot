# Publicaciones Zenodo — ciclo 43 (2026-11-11)

La red publica en Zenodo. La evidencia es el hecho, no el token.

## DOI verificado en vivo (API pública, sin token)

- **DOI: 10.5281/zenodo.20547558**
- Título: Monismo Informacional Unificado (MIU) – MIU V12.0 -
  Modelo Integrado Unificado con Capa de Conciencia
- Fecha: 2026-06-04
- Creador: Vicente Gabancho, Juan Diego
- Tipo: publication
- Descripción: MIU V12.0 FINAL - Modelo Integrado Unificado
  con Capa de Conciencia

Esta es la publicación del proyecto MIU en Zenodo. Existe,
es pública y se verifica sin token.

## Búsquedas en la API pública (sin token)

- Query "Vicente Gabancho": total 13.301 resultados (la
  mayoría son otros autores con ese apellido; botánica,
  zoología). En los 10 primeros no aparece el DOI MIU.
- Query "MIU": total 305 resultados; en los 10 primeros no
  hay ningún registro del proyecto MIU (temas ajenos).
- Conclusión: la búsqueda por nombre es ruidosa; el DOI
  directo es la vía fiable.

## Evidencia en logs: el token existe en el runtime

- orquestador_supremo.log (12.633 B): 4 líneas con
  "CREDS: ZENODO_TOKEN" (check de credenciales, horas
  10:18:16, 10:19:37, 10:41:56). El token está cargado en el
  runtime del enjambre.
- orquestador.log (166.130 B): 0 menciones.
- orquestador_cron.log (6.213 B): 0 menciones.
- Ningún log contiene un DOI ni una línea de deposit/published.

## Dónde NO está

- Orquestador (19 pestañas, muestra de 3 filas cada una):
  0 menciones de zenodo, DOI o 10.5281.
- tokens_20260830 (23.430 entradas): 0 en preview, 0 en
  archivo, 0 en el JSON completo.

## Qué falta para publicar una nueva entrada

Un token vivo o una cuenta activa. El runtime del enjambre
tiene el token cargado (según el log). anexo-vi no publica:
leer y sintetizar, no escribir.
