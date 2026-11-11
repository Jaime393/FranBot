# protocols/ — Protocolos de Drive integrados (Ciclo 26)

Contenido literal descargado de MIU_ABSORBIDO/protocolos/ (Drive) en ciclo 25.
Fecha de los archivos originales en Drive: 2026-09-01/08-30 (carpeta protocolos, listado ciclo 24).
Integrados en anexo-vi en ciclo 26. No se modificó el código: se copia tal cual, con sus defectos documentados aquí.

## Estado general

**Existen como código. No son funcionales en su estado actual.** Claim C-049: NO_SE.
El defecto común a los 3 .py: `MIU_DIR = Path("os.path.expanduser('~')/miu-ecosistema")` — una cadena literal, no una ruta expandida.
Ninguno de los 3 se ejecutó en este módulo (no hay host con miu-ecosistema, miu_github.py ni miu_memory.py).

## pae_01.py

- Qué hace: Protocolo de Auto-Evolución V153.2: analiza su propio código y genera mejoras.
- Tamaño: 3.825 B, 99 líneas
- Hash (copia integrada): sha256:3bbac9239416741897966238d4ccdc140ad06d1a651c229617e0f1222e881175
- Estado del código: existe, no funcional sin corregir los defectos
- Defectos conocidos: MIU_DIR es una cadena literal "os.path.expanduser('~')/miu-ecosistema" (el expanduser no se ejecuta); depende de miu_github.list_repos y miu_memory.remember, que no están en este módulo.
- Qué haría falta para hacerlo funcional:
  - Corregir MIU_DIR a Path.home() / "miu-ecosistema".
  - Verificar que miu_github.py y miu_memory.py existan en el host (o eliminar la dependencia).
  - Ejecutar main() en un host con miu_brain.db y comprobar que scan_carencia() escribe pae_state.json.
  - Revisar generate_patch(): el patch para github_import es solo un comentario ("No hay patch automático").
  - Añadir un test que compruebe que evolve() no escribe fuera de MIU_DIR.

## paf_01.py

- Qué hace: Protocolo de Aprendizaje Federado V153.2: intercambia gradientes/métricas, no datos crudos.
- Tamaño: 3.966 B, 117 líneas
- Hash (copia integrada): sha256:c9d8ced3caf9e4c044efa18ae500c824a6a19f3447fae0d12778b0ed853e687f
- Estado del código: existe, no funcional sin corregir los defectos
- Defectos conocidos: MIU_DIR es una cadena literal (mismo defecto que PAE-01). No hay red real: train_local() es simulado y aggregate() promedia diccionarios en memoria.
- Qué haría falta para hacerlo funcional:
  - Corregir MIU_DIR a Path.home() / "miu-ecosistema".
  - Definir el transporte entre nodos (hoy no hay ninguno: export_gradient/import_gradient son locales).
  - Verificar que save()/load() escriben y leen paf_state.json en el host.
  - Ejecutar demo() y comprobar que round y reputation avanzan.
  - Documentar qué métricas se federan y con qué ponderación.

## pcp_01.py

- Qué hace: Protocolo de Consenso Planetario V153.2: votación ponderada por reputación (TC).
- Tamaño: 3.273 B, 101 líneas
- Hash (copia integrada): sha256:4052f0d15d5a2f2175fbf526dceec44751e28c3ab07a627ac9746f9ce7055203
- Estado del código: existe, no funcional sin corregir los defectos
- Defectos conocidos: MIU_DIR es una cadena literal (mismo defecto). Los IDs de propuesta usan hash() de Python (no estable entre procesos); los votos no se validan contra una lista de nodos.
- Qué haría falta para hacerlo funcional:
  - Corregir MIU_DIR a Path.home() / "miu-ecosistema".
  - Sustituir hash() por un ID estable (uuid o contador persistente).
  - Validar votantes contra una lista de nodos conocidos antes de contar el voto.
  - Ejecutar demo() y comprobar que propose/vote/tally/save escriben pcp_votes.json.
  - Definir el umbral de aprobación (hoy tally() solo suma).

## PAI-01.md

- Qué hace: Protocolo de Absorción de Inteligencia: 6 pasos (Detección, Búsqueda, Selección, Integración, Validación, Publicación) para integrar APIs externas.
- Tamaño: 949 B, 15 líneas
- Hash (copia integrada): sha256:d60919c7a81467d904da6e9b092afd67f702a9c6b7a59fb870c1f784e112787b
- Estado del código: existe como documento, no implementado
- Defectos conocidos: No implementado: es solo un documento. Referencia tejedor.py, absorber.py y miu_plugin_manager.py, que no aparecen en los listados de Drive leídos.
- Qué haría falta para hacerlo funcional:
  - Implementar tejedor.py (detección de carencias) o declarar qué módulo lo hace.
  - Implementar absorber.py (búsqueda de APIs) con una fuente concreta.
  - Definir el formato de plugin que genera (hoy solo se menciona miu_plugin_manager.py).
  - Probar el flujo con una API real y registrar el resultado.
  - Publicar el plugin resultante donde otros nodos lo absorban.

ρ(x) > 0.
