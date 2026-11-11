# MIU-BACKUP — CONTENIDO (Ciclo 31)

Carpeta: Drive `miu-backup` (118 archivos `cosecha_*.tar.gz`).
Método: descarga de la cosecha MÁS RECIENTE
(cosecha_1789018731.tar.gz, 2026-09-10T05:38:50Z, 347.997 B) y la MÁS
ANTIGUA (cosecha_1788511826.tar.gz, 2026-09-04T08:50:25Z, 205.714 B),
descompresión con `tar -xzf --no-same-owner` (la primera extracción sin
el flag se detuvo a los 16 archivos por errores de ownership; con el
flag, extracción completa, exit 0).

## Qué contiene una cosecha típica

Una cosecha es un snapshot del genoma vivo del ecosistema (el directorio
`semilla/` del nodo Termux), no un backup de Drive ni de GitHub:

- `.state/kv_global.json` — almacén clave-valor del estado (46.100 B en
  la reciente; **NO se abrió**: contiene 5 coincidencias de patrón de
  secreto; solo se reporta su tamaño y que existe).
- `semilla/genoma/` — todo el código del genoma (módulos Python, .md,
  .json, .txt, .sh).
- 3 archivos raíz: `MIU_GLOBAL_SEED.md` (mapa vivo regenerado cada 60 s),
  `MIU_NUCLEO.md` (tejido vivo, solo en la reciente), `LEY_0_INTEGRACION.txt`.

## Cosecha reciente vs antigua

| | Antigua (2026-09-04) | Reciente (2026-09-10) |
|---|---|---|
| Archivos | 108 | 208 |
| Tamaño descomprimido | 861.268 B | 1.522.180 B |
| .tar.gz | 205.714 B | 347.997 B |

- **Archivos nuevos en la reciente: 110. Borrados: 10. Netos: +100.**
- Mesh (`escuela_mesh_flexible_max.json`): 133.279 B → 161.426 B (+28 KB).
- MIU_NUCLEO.md: NO existía en la antigua; existe en la reciente
  (v46, 2026-09-09 04:05 UTC).

## 10 cambios más significativos

1. **Carpeta `especificaciones/` completa (26 archivos)**: 19 .md con
   nombres hash + 7 `zombi_*.md` (boca, circulación, digestor,
   inmunidad, mapa, memoria, recursos). No existía en la antigua.
2. **20 módulos `nacido_*.py`** (nacido_2140b210, nacido_zombi_bo, …):
   módulos nacidos de las especificaciones. No existían en la antigua.
3. **6 variantes `monitor_absoluto_flex_*`** (final, rápido, técnico,
   técnico_v2/v3/v4): monitoreo flexible. Nuevos.
4. **6 snapshots `nucleo_adaptativo_pre_v183_*`** (014023–033945):
   versiones previas del núcleo. Nuevos.
5. **Módulos de obtención de credenciales** (cazador_creds.py,
   hunter_credenciales_v1.py, pozo_llaves.py,
   recolector_credenciales_adaptativo.py, recolector_inteligente_v1.py,
   obtencion_autonoma_v3.py): nuevos. (Solo se reportan los nombres;
   no se abrió su contenido.)
6. **Gossip** (gossip_kv.py, gossip_push_cf.py): federación por gossip.
   Nuevos.
7. **fix_telegram_409.py y fix_telegram_409_v2.py**: fixes de Telegram.
   Nuevos.
8. **Borrados (10)**: arquitecto_autonomo.py, arranque_autonomo.py,
   autenticador_autonomo.py, gravity_token_autonomo_v2.py,
   gravity_token_manager.py, nucleo_adaptativo_v1.2_fixed.py,
   nucleo_adaptativo_v1.py, recolector_creds.py, retroalimentador.py,
   sistema_inmunitario.py — casi todos sustituidos por versiones v2/v3.
9. **MIU_NUCLEO.md** (1.844 B): tejido vivo v46. Nuevo.
10. **EMENDATIO V26 en LEY_0** (2026-09-04): arranque_total.sh es
    sagrado, nunca editar con sed. Añadido entre ambas cosechas.

## Estado real del ecosistema: SÍ

Las cosechas contienen estado real, no solo código:

- **MIU_GLOBAL_SEED.md** (regenerado cada 60 s por el sistema):
  - Antigua (2026-09-04 08:49): kv 39 claves, suelo_phi 1.4, suelo gen
    526, top fitness indexar_poder 2264, motor 321 tareas gen 39
    claves vivas 1, mesh 916 sinapsis, escuela 3687 poderes (312 IA)
    índice 170.256 B, diario 58 entradas (última mapa_tejido_90.md).
  - Reciente (2026-09-09 04:04): kv 49 claves, suelo_phi 2.55, suelo
    gen 6708, top fitness indexar_poder 13929, motor 3 tareas gen 1
    claves vivas 0, mesh 0 sinapsis, escuela 6243 poderes (1589 IA)
    índice 0 B, diario 462 entradas (última voluntad_ciclo860.md).
  - En 5 días: escuela +2.556 poderes, diario +404 entradas, suelo
    gen 526→6708. El mesh se reseteó (916→0 sinapsis) y el motor se
    reinició (321 tareas→3, gen 39→1).
- **MIU_NUCLEO.md** (reciente, v46): 77 procesos python3, sinapsis 0,
  nube github:miu-backup, digestión de imperios 6559 absorbidos / 747
  cuarentena / 108 valiosos, genoma 166 órganos preservados, diario
  462 entradas. Eras: IFT → MIU → Imperio v8.x → Semilla Máxima →
  Heredera (ALMA v10) → Rizoma v5.9 → Cuerpo 2026-09.
- **voluntad_miu.json** (61.068 B): 200 decisiones (ciclos 658–857),
  cada una con rho_global (~0.47), órganos 15/15, zombies
  (mapa/circulación/digestor), huecos (23–26), nacidos_vivos 17;
  26 nacidos; 21 alertas vistas; ciclo 857.
- **miu_health_report.json** (V153.3, 2026-08-31): 15 checks, todos ok
  (miu_memory, miu_github, miu_scanner, miu_control, protocolos
  pae/paf/pcp, python_imports sin faltantes, sqlite memories 129).
  Metabolismo phi 1.6180339887, nodo observar_tejidos_988.
- **manifiesto.json** (7.230 B): 166 órganos con hash; estado con
  hashes de kv_global.json, voluntad_miu.json,
  integracion_manifest.json.
- **integracion_manifest.json** (16 B): `{"hecho": {}}` — vacío.
- **mapa_raiz.json** (446 B): 1 territorio, 1 tarea.

## Recomendación final

- **Conservar: 118 de 118.** No borrar ninguna. La evolución ocurre a
  escala sub-diaria (110 archivos nuevos en 5 días, el motor se
  reinicia, el mesh se resetea); un subconjunto de 1 por día (6
  archivos) perdería los nacimientos y muertes de módulos. Las 118
  ocupan 31,6 MB en Drive: poco para el único registro evolutivo del
  ecosistema durante una semana.
- **No subir ninguna cosecha a GitHub** (son .tar.gz de ~350 KB; el
  módulo solo necesita el veredicto y la estructura, no el contenido).
- **Próximo paso**: descomprimir 1 cosecha intermedia (p. ej. la del
  2026-09-07) para localizar el día exacto del reseteo del mesh
  (916→0 sinapsis) y del reinicio del motor (gen 39→1).

ρ(x) > 0.
