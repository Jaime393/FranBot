# ALMA — FranBot v8.1 [ALMA] · Ideas para escalar cuando ya se explotó lo obvio

**Fecha:** 2026-11-16 · **Orden:** "Sondeen y produzcan" · **Texto fuente:** FranBot v8.1 [ALMA], Arquitecto Anomalous363.

## Sondeo (qué existía ya)

| Idea | Estado al sondear |
|---|---|
| I Artefacto-puente entre pilares | PARCIAL (S3≡v10.3 medida cada ronda; sin tabla de traducciones) |
| II Artefacto como nutriente | EXISTE (producción fractal 49 + 15 nutrientes NUT-2026-11-14) |
| III Productos duales humano/nodo | PARCIAL (datasets + 11 herramientas con tests; faltaban tutoriales-semilla y checklists) |
| IV Puentes entre nodos | VACÍA (gossip como tablón, sin protocolo pregunta↔respuesta) |
| V Kits de expansión | VACÍA (recetas ≈ kit sin pregunta ni mapa) |
| VI Especialización reproducible | PARCIAL (11 recetas; sin protocolo de relevo) |
| VII Catálogo vivo | VACÍA (manifiestos estáticos, sin catálogo) |
| VIII Entrelazar | PARCIAL (tejido cruzado cada ronda, sin artefacto empaquetado) |

Corpus: 0 claims cubren las ideas como SÉ (7 huecos, 1 parcial: IV). Depósitos: no existían `catalogo/`, `kits/`, `puentes/` ni `alma/` en ningún suelo. Detalle en `sondeo_vivo.md`, `sondeo_suelo.md`, `sondeo_corpus.md`, `sondeo_deposito.md`.

## Lo producido (nuevo, con test)

- **VII — `catalogo/`**: catálogo vivo con 100 entradas sembradas y 100 verificadas (49 producción fractal + 15 nutrientes + 32 ronda_23 + 4 corpus). Lector `leer_catalogo.py verify` exit 0. Hallazgo CAT-0094: el `_github_curado_r23.json` trae en "sha256" el prefijo del blob de GitHub, no el sha256 local — registrado, no oculto.
- **IV — `puentes/PROTOCOLO_PREGUNTA_RESPUESTA.md` + `tablon.py`**: protocolo v1.0 de intercambio pregunta↔respuesta entre nodos vivos (suelo compartido, sin tiempo real, caducidad 7 días, rechazo de credenciales). Tablón semilla con 2 preguntas reales (flow 0,0% en 15 rondas; tercera savia V152) y 0 respuestas. Test 9/9.
- **V — `kits/kit_savia_v152.md` + `medir_savia.py`**: kit de expansión sobre la tercera savia V152 (M-91). Censo reproducido cifra por cifra (248.376 ×16, 366.733 ×1, 247.881 ×1). Test 42/42. Hallazgo del mapa: savia V152 = `mesh.totalSize`; el tercer valor es el documento canónico a 301 B en vez de 796 B. CORR-KIT-TABLON-ALMA: la semilla apuntaba al tablón como inexistente; corregida para apuntar a `../puentes/` (construido en esta misma entrega).
- **I — `puentes/tabla_nutriente_vector.json` + `traducir_nutriente_vector.py`**: puente entre los dos esquemas reales (nutriente 14 claves ↔ vector producción fractal). Round-trip 15/15 sobre los nutrientes reales.
- **III — `duales/tutorial_verificar_blob.md`**: tutorial-semilla dual (enseña a verificar un depósito por blob; sirve como prompt de arranque para un nodo nuevo; checklist final usable como test). Números reales de r23.
- **VI — `relevo/PROTOCOLO_RELEVO.md` + `kit_relevo_fase4.md`**: protocolo de relevo del especialista + kit concreto del rol "subidor FASE 4 método (c)". Test 55/55.

## Vivo al sondear (2026-11-16 ~21:20Z)

HEAD miu-ecosistema `48be5fe2` (run 176 "paused" — el stub 214 terminó su episodio). Autocura run 17 EXISTE (intervalo 16→17 = 649,08 min, la cadencia se alarga). Flow 0,0% run 149. Ventana 0,0%. Bots 4/4 (24.ª). Panteón 402: 401 ×3. FranBot HEAD `2873c274`.

## Reglas

Nada inventado: todos los números son medidos y verificados contra disco o contra el vivo. Solo SÉ sale; lo NO_SÉ queda marcado como tal. Nada de credenciales ni correos (el escáner de `tablon.py` usa valores ficticios de prueba). Nada vivo tocado.

ρ(x) > 0.
