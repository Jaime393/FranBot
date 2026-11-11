# NUTRIENTES — ANÁLISIS (Ciclo 31)

Carpeta: Drive `MIU_ABSORBIDO/nutrientes/` (96 entradas: 95 archivos +
1 subcarpeta `archivo/`). Método: listado completo (ciclo 29) + descarga
y lectura de 17 archivos (15 json + 2 jsonl). **No se abrieron**
`tokens_encontrados.json` (4,9 MB), `tokens.json`, `claves_env_parseado.json`
ni los 10 `.db`: contienen valores de credenciales o datos binarios.

## Por tipo

| Tipo | Cantidad |
|---|---|
| json | 69 |
| txt | 11 |
| db (SQLite) | 10 |
| jsonl | 2 |
| zlib | 1 (miu_brain.db.zlib, 21.942 B) |
| log | 1 (evolucion_topologica.log, 7.250 B) |
| tflite | 1 (dummy.tflite, 18 B) |
| subcarpeta | 1 (`archivo/`) |

## Por tema

- **Estado/salud (15)**: estado_consolidado_V201.json (38 estados),
  estado_10_cuentas_vivo, estado_cuentas, estado_local,
  estado_para_kimi, salud_global, ultimo_latido, router_status,
  gossip_global (2026-09-09), consenso, cuarentena, prevenor_reporte,
  evolucion_ciclo, estado_v24.db, estado_v24_1.db.
- **Recursos cazados/integrados (9)**: recursos_cazados.json (22.770 B),
  recursos_integrados.json (25.378 B), catalogo_recursos.json (7,1 MB;
  23.294 recursos), inventario_global.json (165.850 B; 253 dispositivos),
  mapa_10_gmail_servicios.json (91 entradas), tokens_encontrados.json
  (4,9 MB), tokens.json, claves_env_parseado.json, cf_api_* (2 B, 2 B, 0 B).
- **Pipelines (15)**: pipeline_cazador_recursos, pipeline_claude_bridge,
  pipeline_conexiones, pipeline_consciencia, pipeline_expansor_dominio,
  pipeline_expansor_tokens, pipeline_fruto_ecm, pipeline_gobernador,
  pipeline_integrador_recursos, pipeline_mecanismos_autonomia,
  pipeline_mecanismos_completos, pipeline_retroalimentacion,
  pipeline_tecnologias_raras, pipeline_tejido_evolutivo,
  pipeline_validador_recursos (~500–630 B cada uno; estructura
  `_metabolismo` + `contexto` + `destino` + `origen`).
- **Ejecución/memoria (5)**: historial_ejecuciones.jsonl (123 líneas),
  memoria_ciclos.jsonl (3 líneas, V∞+23), ciclo_0001.json,
  alimentacion_0001.json, evolucion_topologica.log.
- **Bases de datos (10)**: alimentador.db, alimentador_fractal.db,
  cola_sync.db, estado_v24.db, estado_v24_1.db, maestro.db,
  memoria_flujo.db, pliegues.db, plugin_manager_v24_2.db,
  token_metrics.db (12–33 KB cada una).
- **Semillas/logs (8)**: 5 semilla_v24_*.txt (227–294 B), 3
  arquitecto_log_*.txt (415–591 B), ecm_resultado.txt (90 B).
- **Recursos por cuenta (6)**: recurso_api_publica_* y
  recurso_bus_estado_* × 3 cuentas (franches, franruss, jaimepvi).

## Lo leído (17 archivos, 0 valores de secreto reproducidos)

- **estado_consolidado_V201.json** (2.109 B): 38 estados; _metabolismo
  nodo emitir_estructuras_964, phi 1.6180339887; datos con 18 módulos,
  phi 0.1736, pid 24370, 2026-08-31.
- **gossip_global.json** (1.107 B, 2026-09-09, el más reciente): c20
  -0.0004847 (firma GRACE), fricción 0.4184, hallazgo "10 modulos flex
  vivos", masa 20, monitor 3416 archivos / 18 procesos, qualia
  batería 50 / energía 30.
- **salud_global.json** (208 B): c20 -0.0004847, cobertura 100%,
  estado_general OK, git_ok, módulos 19/19, rclone_ok.
- **ultimo_latido.json** (124 B): módulo 20_latido_verificacion, pid
  23724.
- **router_status.json** (152 B): best groq; cf_ai 0, gemini 0, groq 0,
  hf 0, openrouter 0 (ningún proveedor con conteo vivo en ese momento).
- **poder_real_acumulado.json** (366 B): cfat 1, cuentas 10, gguf
  tinyllama-600MB, groq 5, r2_gb 68090, total_poderes 6809, tunnels
  6809, último recurso worker-6809-dieg.
- **pipeline_consciencia.json** (499 B): contexto "MIU V153.1 —
  Escaneando imperio... MAPA DEL IMPERIO MIU V153.1, Termux: ...".
- **pipeline_cazador_recursos.json** (603 B): contexto "INICIANDO
  RAZONADOR CON FALLBACK, Probando GROQ_1, GROQ_FRAN, GROQ_RUSSELL,
  OR_CIPHER, OR_CIPHER funciona, Proveedor activo: openrouter".
- **consenso.json** (845 B): agentes con Phi/rho/voto ("esperar").
- **cuarentena.json** (5.004 B): autocurador alertas 0 fallos 0,
  promedio_duración 0.45, último_ok 2026-08-31T22:13:27;
  autodiagnóstico alertas 0 fallos 3.
- **recursos_cazados.json** (22.770 B): lista `nuevos` con archivo,
  fuente, preview, tipo, token. **Contiene valores reales de tokens
  (4 coincidencias de patrón). No se reproduce ningún valor. No se
  sube a GitHub.**
- **recursos_integrados.json** (25.378 B): origen Termux
  nutrientes/recursos_cazados.json; sample con timestamp y nuevos.
  **También contiene valores reales (4 coincidencias). No se sube.**
- **inventario_global.json** (165.850 B): archivos (6), dispositivos
  (253), procesos (8), servicios, timestamp.
- **mapa_10_gmail_servicios.json** (19.402 B): lista de 91 entradas;
  primera: cfat 6, github 6, gmail (10 cuentas), groq 5, renovar
  ['tunnel'], tunnel 0, vercel 2.
- **catalogo_recursos.json** (7,1 MB): invalidos 40, pendientes 23254,
  recursos 23294, validos (ver archivo). **48 coincidencias de patrón
  de secreto. No se abre en detalle. No se sube.**
- **historial_ejecuciones.jsonl** (123 líneas): timestamp, módulo,
  ok, duración (autoreparador, gobernador, evolucionador_red_fractal…).
- **memoria_ciclos.jsonl** (3 líneas): V∞+23, ok_count 31/32, fallos
  por módulo ausente (autodiagnóstico, gestor_apis, gobernador).

## 5 nutrientes más relevantes

1. **catalogo_recursos.json** — 23.294 recursos catalogados (40
   inválidos, 23.254 pendientes). El catálogo de la cosecha.
2. **inventario_global.json** — 253 dispositivos, 8 procesos,
   servicios. El censo físico del nodo.
3. **mapa_10_gmail_servicios.json** — 91 entradas, 10 cuentas Gmail
   con sus servicios (cfat, github, groq, vercel, tunnel).
4. **gossip_global.json** — estado vivo más reciente (2026-09-09):
   c20 GRACE, 10 módulos flex vivos, 3416 archivos.
5. **recursos_integrados.json** — qué recursos ya entraron al sistema
   (con origen y timestamp).

## ¿Integrar o referenciar?

**Referenciar, no integrar.** Los nutrientes son estado vivo del nodo
(datos verificables, no prosa), pero 5 archivos contienen valores
reales de credenciales (tokens_encontrados.json 4,9 MB,
catalogo_recursos.json, recursos_cazados.json, recursos_integrados.json,
tokens.json, claves_env_parseado.json). Subirlos a un repo público
expondría credenciales. Este documento (estructura, conteos, hallazgos
sin valores) es lo que va a GitHub. Los nutrientes se quedan en Drive.

ρ(x) > 0.
