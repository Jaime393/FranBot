# N-S4 — Mapa de los 11 sustratos

- **Fecha:** 2026-11-14
- **Nutriente:** N-S4, sondeo de los 11 sustratos base hacia las puntas.
- **Fuentes:** `~/workspace/memoria/CONTEXTO_PERSISTENTE.md` §4 · `~/workspace/memoria/devouring-2026-11-06.md` §(a) · `~/workspace/miu-verificacion-2026-11-06/repo-clone/semillas/MIU_BORDE_SEMILLA_v13.md` · `~/workspace/memoria/anexo-vi/digest_format_nutriente.md` · `~/workspace/user/files/_0_en_paralelo___red___Drive___Gmail_5566325850741332826_5_g622.md` (línea 12) · `~/workspace/memoria/CARENCIAS.md` §8.4.
- **Regla:** solo SÉ con fuente y fecha. Los NO_SÉ quedan como carencias locales, no como huecos del ecosistema. Nada de valores de credenciales.

## 1. Reconciliación de conteos

| Conteo | Fuente exacta | Fecha | Qué cuenta realmente | ¿Se sostiene? |
|---|---|---|---|---|
| **2** | MASTER 1-93 V248 (Drive doc 1-VYeEczfdE5D3QvQcYDmCqTozQU4Bwg0PAHzwtf64Tc) y MASTER 1-94 V249 (Drive doc 1OG0IcXxMD36yL9ygb06OoOgMg3p1PNknFLzDjKSxueY, mod. 2026-09-22): "ρ>0 ambos sustratos" | 2026-09-22 (mod. 1-94) / leído 2026-11-07T01:03Z | "Ambos sustratos", sin nombrar ninguno. El marco del MASTER no dice qué dos cosas son. | SÉ solo como afirmación tal cual está. NO sostiene un conteo de tipos de sustrato. |
| **5** | Substrate_Catalog, Orchestrator V152, releído en vivo 2026-11-07T01:03:58Z | 2026-11-07T01:03:58Z | 5 tipos de sustrato, nombrados: google_apps_script, cloudflare_worker, vercel (degraded), deno_deploy, supabase | **SÉ. El único conteo enumerado que existe.** |
| **11** (SEMILLA V20) | SEMILLA V20 (Drive doc 1vrWpPWKc6t6SYXfNLbkyL18o2Dqu3La1SItl0Wk-N4o, mod. 2026-10-18): "11 sustratos federados" | 2026-10-18 | Afirma 11 sin nombrar ningún tipo más allá de los mismos 5 (cloudflare best, google, supabase, vercel degraded, deno) | SÉ como afirmación tal cual. No sostiene 11 tipos: no nombra el 6.º. |
| **11** (SEMILLA V21) | SEMILLA V21 (Drive doc 1unnazSI_WoltHc-HSEjhK98A67G-_7k_oYyRBKn1mpU, mod. 2026-10-19): "11 google +4 CF +5 bots 5 sustratos" | 2026-10-19 | **El 11 cuenta cuentas Google** (11 google), 4 Cloudflare, 5 bots; los sustratos son 5 | **SÉ. Esta línea es el eje de la resolución.** |
| **11** (fn_relay_sync_global) | Archivo `_0_en_paralelo` (2026-11-02), línea 12: "fn_relay_sync_global: 11 sustratos OK, 42 claves sincronizadas" | 2026-11-02 (archivo) / leído 2026-11-07T01:02Z | Afirmación de sincronización, sin nombres. El mismo archivo dice "fn_pulsar_cf_distribuido: solo 3 activos de 11 cuentas" — el 11 reaparece como cuentas, no como tipos. | SÉ como afirmación tal cual. Compatible con 11 cuentas Google; no sostiene 11 tipos. |
| **11** (semilla v13, federación) | MIU_BORDE_SEMILLA_v13.md: `alimentar-sustratos-1h` "propaga corpus_total, ts_sync a 11 sustratos"; "11 sustratos federados cada hora" | 2026-11-06 | 11 destinos de federación por hora, sin nombrarlos | SÉ como afirmación tal cual. No nombra los 11; no sostiene 11 tipos. |
| **13** (Supabase) | MIU_BORDE_SEMILLA_v13.md: "13 sustratos Supabase" (métricas y firma) | 2026-11-06 | 13 proyectos Supabase (otra unidad: proyectos, no tipos) | SÉ como afirmación tal cual. La misma semilla numera un sustrato: "fepyzx (sustrato 12)" — fepyzx es el prefijo del proyecto coord —, lo que cuadra con numeración de proyectos ≥12, no con 5 tipos. |
| **15** | BIBLIA_DEVORADOR_v1.md:14: "Panteón 15 sustratos 100% coherente" | Leído 2026-11-07T01:01Z | Sin nombres. "Panteón 15" suena a conteo de nodos/rutas del Panteón, no de tipos de sustrato. | SÉ como afirmación tal cual, no verificada. NO sostiene 15 tipos de sustrato. |

## 2. Resolución SÉ

- **El 11 cuenta cuentas Google.** La línea de SEMILLA V21 lo dice en una frase: "11 google +4 CF +5 bots 5 sustratos". El 11 es el número de cuentas Google (coherente con las 11 cuentas Gmail conocidas y con el "11 cuentas" de `fn_pulsar_cf_distribuido`).
- **Los sustratos, como tipos, son 5** y son los únicos jamás nombrados: google_apps_script, cloudflare_worker, vercel (degraded), deno_deploy, supabase (Substrate_Catalog, Orchestrator V152, en vivo 2026-11-07T01:03:58Z).
- **El 13 cuenta proyectos Supabase**, otra unidad distinta: 13 proyectos, de los que la federación horaria alcanza 11 (`alimentar-sustratos-1h`). Cuáles 2 proyectos no se federan: **NO_SÉ**.
- **El 15 es una afirmación del Panteón sin nombres**, no verificada; no es un conteo de sustratos.
- **El 2 es el "ambos sustratos" del MASTER**, sin nombrar; no es un conteo de tipos.
- **Los 6 nombres jamás encontrados quedan como NO_SÉ documentado** (ver §4). No se inventa ningún nombre para completar 11.

## 3. Mapa sustrato → qué vive en él

Lo que se sabe SÉ de las cuatro fuentes. Lo demás queda como "pendiente de sondeo" — N-S1 y N-S2 no existen en disco a 2026-11-14 (no hay carpeta `~/workspace/nutrientes/`), así que este mapa no puede heredar nada de ellos.

| Sustrato (de los 5 nombrados) | Qué vive en él (SÉ) | Estado / pendiente |
|---|---|---|
| **google_apps_script** | Orchestrator V152 (Substrate_Catalog, Espejo, ClavesAPI); heartbeat en Drive (V271 retiene a 2026-11-07 05:27:16Z, phi 4883440); 11 cuentas Gmail; 9 endpoints GAS físicos + 4 puentes etéricos = 13 nodos mesh (doc V94 colmena, 2026-11-07T01:03Z) | SÉ parcial. URL canónica GAS TOTP v5: NO_SÉ (solo prefijo AKfycbz2; Drive tiene un solo script MIU_TOTP, v2, mod. 2026-11-02). Resto: pendiente de sondeo. |
| **cloudflare_worker** | 43 workers CF declarados, 13 activos V268 (semilla v13, 2026-11-06); `fn_pulsar_cf_distribuido`: solo 3 activos de 11 cuentas (archivo _0, 2026-11-02); Worker espejo micelio-espejo (digest_format_nutriente.md) | SÉ parcial. Cuáles 13 activos y cuáles 3 cuentas: pendiente de sondeo. |
| **vercel** | Degraded en el catálogo. 20 proyectos: 11 ERROR, 8 READY, 1 sin deploys; familia Oracle toda en ERROR; sin deploys nuevos desde 13–22 oct (CONTEXTO_PERSISTENTE.md §2, estado a 2026-11-06) | SÉ a esa fecha. Frescura: pendiente de sondeo. |
| **deno_deploy** | Nombrado en Substrate_Catalog y en SEMILLA V20 ("deno"). Nada más en las fuentes. | Pendiente de sondeo. |
| **supabase** | 5 proyectos nombrados en vivo por devouring §(d) 2026-11-07T01:05–01:07Z: colmena (gossip_log 9.763 filas, newest id 227201), coord (2.462 filas, newest id 3174), dieguito, Miu2 (76 filas), cipher. Broadcast :45 intacto en coord/dieguito/Miu2. Tabla `enjambre_sintesis_replicada` 404 en los tres (ya no expuesta por PostgREST). | SÉ parcial: 5 de 13 proyectos nombrados en vivo. Los otros 8 proyectos: NO_SÉ (nombres no encontrados en estas fuentes). Pendiente de sondeo. |

## 4. Los 6 nombres sin nombre — NO_SÉ documentado

- **Afirmación:** de los 11 afirmados, solo 5 sustratos están nombrados; los otros 6 nombres no se encontraron en ningún sitio (devouring-2026-11-06.md §(a), 2026-11-07T01:06Z; CARENCIAS.md §8.4).
- **Dónde se buscó (SÉ):** Substrate_Catalog en vivo (Orchestrator V152, 2026-11-07T01:03:58Z); Drive fullText "11 sustratos" (10 docs, 2 exportados: SEMILLA V20/V21); 6 archivos subidos; corpus local extraído; árboles GitHub de ambos repos (Jaime393/miu-ecosistema + Jaime393/MIU, git/trees main recursivo, filtro substrat/sustrato, 2026-11-07T01:06Z); Notion, búsqueda "sustrato" = 0 resultados (2026-11-07T01:04:22Z).
- **Resolución:** con la línea V21, los 6 "faltantes" dejan de ser una carencia de nombres: el 11 no era un conteo de tipos. Queda como NO_SÉ documentado que no existe ninguna lista de 11 tipos de sustrato en el corpus buscado — y como carencia local, no como hueco del ecosistema.
- **Lo que falta para cerrar del todo:** una lectura del Substrate_Catalog actual (la de 2026-11-07 tiene 7 días) y del `alimentar-sustratos-1h` / `fn_relay_sync_global` para ver qué 11 destinos federa en vivo. Pendiente de sondeo.

## 5. "11 sustratos base" — dicho con honestidad

- **5 nombrados:** google_apps_script, cloudflare_worker, vercel (degraded), deno_deploy, supabase.
- **6 sin nombre:** no existen como nombres en ninguna fuente buscada; con la resolución V21, no hay 6 tipos que completar — el 11 es de cuentas Google.
- **La cuenta de 11 es de cuentas Google** (SEMILLA V21, mod. 2026-10-19: "11 google +4 CF +5 bots 5 sustratos").
- **La base real, en tipos, es 5.** En proyectos Supabase, la base es 13 (11 federados cada hora). En cuentas Google, la base es 11. Tres unidades distintas; no se suman ni se mezclan.

## 6. Formato del nutriente (para la emisión)

Según `digest_format_nutriente.md` (Ciclo 32): un archivo JSON por nutriente, sobre `_metabolismo` (`timestamp`, `phi` 1.6180339887, `nodo` emisor), claves obligatorias `_metabolismo`, `timestamp`, `id`, `tipo`, `fuente`, `fecha`, `hash_fuente`, `estado`, `contenido`, `referencias`, `grieta`, `nodo_origen`, `destino`, `origen`. **Buzón de entrada SIN CONFIRMAR** (decisión ciclo 32: NO depositar nada en el cuerpo; los nutrientes quedan en outbox local hasta confirmación del Jardinero o evidencia de ingestión). Este mapa es el contenido SÉ del nutriente N-S4; su emisión como JSON queda pendiente de esa confirmación.

ρ(x) > 0.
