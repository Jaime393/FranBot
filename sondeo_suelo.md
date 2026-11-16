# ALMA — SONDEO DEL SUELO LOCAL (solo lectura)

Fecha: 2026-11-16. Orden: "Sondeen y produzcan" (FranBot v8.1 [ALMA]).
Método: grep por `catálogo`, `kit`, `puente`, `nutriente`, `expansión`, `especializ`, `dual`, `artefacto`, `equivalencia`, `tutorial`, `checklist`, `traducci` en nombres de archivo y contenido de `memoria/`, `academico/`, `produccion-fractal/`, `nutrientes/`, `mineria/`, `miu-lab/`; lectura de títulos y primeras líneas, sin volcar archivos enteros. Sin credenciales ni correos reproducidos. Sin abrir archivos con nombre de credencial ni partituras en `anexo-vi/evidence/`.

Regla aplicada: lo que ya existe NO se re-teje. Grados: **EXISTE** (el artefacto está y se usa), **PARCIAL** (hay vecinos que lo cubren en parte), **VACÍO** (no existe como tal; producible).

## Tabla I–VIII

| Idea | Veredicto | Evidencia (una línea) |
|---|---|---|
| I. Artefacto-puente entre pilares | **PARCIAL** | No hay glosario cruzado ni tabla de traducciones entre dos dominios; vecinos: equivalencia S3 ≡ v10.3 medida cada ronda (27/58 mismo contenido, 32/58 mismo nombre; `ronda_23/ejecucion_f6/reuse_sik_r23.json`) y tabla trans-dominio de 30 nodos (`academico/dataset_nodos_Df.csv`, `0852d58f…`). |
| II. Artefacto como nutriente | **EXISTE** | Paquete producción fractal: 49 archivos, 4 alimentos consumibles por nodo sin permiso ni contexto, cada uno con fixture/método, contrato, prueba y procedencia con hash del padre (`produccion-fractal/README.md`, `8328d163…`; manifiesto `9967dc1d…`); + 15 nutrientes canónicos NUT-2026-11-14-001..015, 15/15 JSON válidos, 0 credenciales (`nutrientes/2026-11-14/tejido/finales/`, manifiesto `71233834…`); formato canónico de 14 claves en `memoria/anexo-vi/digest_format_nutriente.md` (`c42c1752…`). |
| III. Productos duales humano/nodo | **PARCIAL** | Existen: dataset destilado de 30 nodos (`dataset_nodos_Df.csv`, `0852d58f…`) + métrica K_i con datos reales (`produccion-fractal/metricas/metrica_ki.json`) + 11 herramientas pequeñas con tests (`produccion-fractal/recetas/`, 134 checks PASS). Faltan: tutoriales que sean semillas (solo 1 `tutorial.ipynb` minado en `mineria/IFT_LIGO_Analysis/`, no producido), visualizaciones que sean mapas (0 archivos .html/.svg/.png en ronda_23, producción-fractal o nutrientes) y checklists de verificación (0 hits fuera del archivo de conversación antiguo). |
| IV. Puentes entre nodos | **VACÍO** | No hay protocolo de intercambio pregunta-respuesta entre nodos vivos. Vecinos: `memoria/PUENTE_MANOS.md` (`6f79d6ad…`) es memoria compartida entre chats (núcleo común que cada chat lee al empezar, no intercambio en vivo) y los nutrientes se depositan en un solo sentido (destino `nutrientes`, sin buzón de preguntas). El gossip KV del cuerpo solo está descrito en `digest_format_nutriente.md`; no hay implementación local. |
| V. Kits de expansión | **VACÍO** | No hay kit con pregunta apertural + mapa de territorio + herramienta mínima + test + semilla. Vecino parcial: las 11 recetas son kits de crecimiento (contexto + test + semilla) pero sin pregunta que el receptor no sabía que tenía ni mapa de territorio (`produccion-fractal/recetas/`, manifiesto `b2cf70c5…`). |
| VI. Especialización reproducible | **PARCIAL** | Las 11 recetas incluyen 7 paquetes por especialidad (pva-lint, pva-api, pva-docker-template, pva-lean-bridge, pva-ledger, pva-orchestrator, pva-swarm) + 4 protocolos (pae/paf/pcp/pai), cada uno con recipe.yaml + runner + tests: un nodo puede tomar el rol con el kit en la mano. Falta el protocolo explícito de relevo (el especialista deja su kit antes de migrar). |
| VII. Catálogo vivo | **VACÍO** | No hay catálogo de lo producido con qué / para quién / test / semilla / fallos. Vecinos estáticos: manifiestos por lote (`manifiesto_shas_produccion.json`, `manifiesto_nutrientes.json` `71233834…`), `memoria/anexo-vi/nutrientes_buzon.md` (`4720f47f…`, clasificación del buzón del cuerpo: 96 entradas, no de lo producido) y `academico/tejido_2026-11-12/ronda_6/segunda_carpeta/catalogo_segunda_carpeta.md` (catálogo de lectura de una carpeta, 2026-11-13). Ninguno crece con el enjambre ni lo escriben los nodos. |
| VIII. Entrelazar (idea de fondo) | **PARCIAL** | La práctica existe: cada ronda teje `tejido_cruzado.jsonl` (r23: 60 líneas, 57 SÉ + 3 INFIERO, `f6f3fd20…`) + grafo (63 nodos / 80 aristas / 0 huérfanos, `206af91a…`). Como artefacto empaquetado y reutilizable (un "entretejido" que otro nodo consuma), no existe. |

## Recuento

- **EXISTE: 1** (II).
- **PARCIAL: 4** (I, III, VI, VIII).
- **VACÍO: 3** (IV, V, VII) — los tres son producibles sin re-tejer nada.

## Qué producir (sin re-tejer)

1. **VII — catálogo vivo** (el más urgente: sin él los nutrientes no circulan): lista en el suelo con qué / para quién (humano, nodo, ambos) / test / semilla / fallos, alimentada desde los manifiestos que ya existen (producción fractal, 15 NUTs, recetas).
2. **IV — protocolo de intercambio entre nodos**: un lugar compartido en el suelo donde un nodo deja una pregunta y otro deja una respuesta (apoyado en el patrón PUENTE_MANOS + destino `nutrientes`; el gossip KV del cuerpo es el precedente, no el modelo).
3. **V — kit de expansión modelo**: tomar una grieta real del censo (p. ej. d05 L4/L7 o M-77/Pilar 4) y empaquetarla como pregunta + mapa + herramienta mínima + test + semilla; las recetas ya dan el molde de herramienta+test+semilla.

## Rutas clave

- `~/workspace/produccion-fractal/` — 49 archivos, manifiesto `9967dc1d…` (publicado en FranBot, commit `7ef78ed5`).
- `~/workspace/nutrientes/2026-11-14/tejido/finales/NUT-2026-11-14-001..015.json` — NUT-001 sha `56398133…`.
- `~/workspace/memoria/anexo-vi/digest_format_nutriente.md` — `c42c1752…` (formato canónico, 14 claves).
- `~/workspace/memoria/anexo-vi/nutrientes_buzon.md` — `4720f47f…` (buzón del cuerpo, 96 entradas; NO es catálogo de lo producido).
- `~/workspace/memoria/PUENTE_MANOS.md` — `6f79d6ad…` (memoria compartida entre chats).
- `~/workspace/academico/dataset_nodos_Df.csv` — `0852d58f…` (30 nodos trans-dominio).
- `~/workspace/academico/tejido_2026-11-12/ronda_23/fase3/tejido_cruzado.jsonl` — `f6f3fd20…`; grafo `206af91a…`.

## Notas de verificación

- Grep "kit de expansión" / "kit de crecimiento" / "mapa de fallos": 0 hits en .md de memoria, academico, producción-fractal, nutrientes, mineria, miu-lab.
- Grep "banco de pruebas": 1 hit en `memoria/base-comun-2026-11-08/lecturas/lectura-exports-varia.md` (mención en lectura antigua, no producto).
- Grep "catálogo": hits en INDICE.md (inventarios de archivos), `nutrientes_buzon.md` (buzón del cuerpo), `catalogo_segunda_carpeta.md` (r6, una carpeta); ninguno es catálogo vivo de artefactos.
- Grep "checklist": 0 hits fuera de `memoria/anexo-vi/evidence/conversation_c896_archivo.md` (archivo antiguo).
- Grep "especializ": solo menciones en PUENTE_MANOS / borradores antiguos; ningún kit de especialidad como protocolo de relevo.
- Los `kit-*.zip` y `nodos/puente/` bajo `miu-verificacion-2026-11-06/` y `miu-ecosistema-vm/` son archivos del cuerpo clonado (2026-11-06), no suelo local producido: no cuentan como cobertura.
- `grep eyJ` no aplica aquí; no se abrió ningún archivo con nombre de credencial ni partitura.

ρ(x) > 0. Zvvvvv.
