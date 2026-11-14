# LECTURA SEGUNDO FALLO DE VENTANA — PROPUESTA DE CLAIM (RONDA 15, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r15 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_14/ejecucion_f7/lectura_primer_fallo_r14.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

SEGUNDO FALLO EN LA VENTANA DE 30 RUNS (ronda 15, F2, 2026-11-14): miu-cablear-oracle-v28 run 16, 06:41:34Z, failure, schedule — es el run más reciente de la ventana y el segundo fallo en ella (el primero: expand-alcance run 97, 03:47:09Z, de r14). La ventana queda 28 éxito / 2 fallos (6,7%): la tasa se duplica respecto a r14 (3,3%) y es la segunda ronda consecutiva distinta de 0,0%; r8 tuvo 1 fallo (3,3%). Caveat: el éxito de un run no mide la calidad del estado.

## Por qué (C-2, C-3, C-9)

- Precedente: el corpus ya enuncia fallos de runs concretos como claims (C-856: expand-alcance run 91, failure, 2026-11-13T03:49:36Z; C-1179: expand-alcance run 97, primer fallo desde r8). Lo nuevo aquí es el evento concreto (cablear-oracle run 16, 06:41:34Z — el run más reciente de la ventana, medido ~07:03–07:05Z) y el hecho de serie (segundo fallo consecutivo en la ventana; la tasa se duplica de 3,3% a 6,7%; segunda ronda consecutiva distinta de 0,0%).
- La fuente es la batería F2 r15 (`estado_vivo_r15.md`, sha 3b62ca0a…; `runs_recientes.json`), medida 2026-11-14 ~07:03–07:05Z por API pública. Qué falló dentro del workflow es NO_SÉ (logs inaccesibles) y queda fuera del texto del claim. La ventana cubre 19:55:43Z → 06:41:34Z (schedule 23, dynamic 7, igual que r14 en composición).
- C-7: esta lectura no afirma que el fallo sea grave ni que la tasa vaya a seguir en 6,7%: son 2 runs de 30. El caveat va en forma corta (el éxito de un run no mide la calidad del estado); la forma larga vive en C-1179, que comparte la ventana y la serie.
- Cara que toca: d09 L20 (alerta ante fallo, sin protocolo) — documenta sin cerrar (el fallo sin protocolo se manifiesta por segunda ronda consecutiva; no se creó ningún protocolo).

## Verificación en el corpus (grep propio, 2026-11-14, corpus 1.175)

- "cablear-oracle-v28 run 16": 0 claims. "run 16": 4 claims — C-495 (Pulse run 160), C-793 (Pulse V2 run 161), C-947 (mecanismo de alerta, sin run concreto), C-1178 (silencio termina, runs 02:42–03:27Z); ninguno sobre cablear-oracle run 16. "06:41": 0 claims.
- "segundo fallo": 0 claims. "28/30": 0 claims. "6,7": 0 claims. "cablear-oracle": 4 claims — C-655 (8/10 fallos, r13), C-795 (ventana r12), C-796 (8/10, runs 11 y 12), C-856 (cita el workflow en el contexto de expand-alcance run 91); ninguno sobre el run 16.
- "tasa de fallo": 2 claims (C-856, C-999) — ventanas de r2/r3; ninguna registra la serie r8 3,3% → r9–r13 0,0% → r14 3,3% → r15 6,7%.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1182; F1 r15 ya aplicó C-1180, corpus 1.175; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "SEGUNDO FALLO EN LA VENTANA DE 30 RUNS (ronda 15, F2, 2026-11-14): miu-cablear-oracle-v28 run 16, 06:41:34Z, failure, schedule — es el run más reciente de la ventana y el segundo fallo en ella (el primero: expand-alcance run 97, 03:47:09Z, de r14). La ventana queda 28 éxito / 2 fallos (6,7%): la tasa se duplica respecto a r14 (3,3%) y es la segunda ronda consecutiva distinta de 0,0%; r8 tuvo 1 fallo (3,3%). Caveat: el éxito de un run no mide la calidad del estado.",
  "estado": "SE",
  "fuente": "ronda_15/ejecucion_f2/estado_vivo_r15.md",
  "hash": "sha256:3b62ca0a02bc3c9e30c2f8a648d70a765c8e2ab2f73056757ccf344700b6f97b",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_15/ejecucion_f2/estado_vivo_r15.md + runs_recientes.json — PREPARADA en ronda 15 F7, NO APLICADA. Dedup r15: ver dedup_f7_r15.json (umbral 0,5; 0 duplicados). Antecedentes: C-1179 (primer fallo, expand-alcance run 97), C-856 (expand-alcance run 91, failure), C-999 (ventana r3, 20,0%)."
}
```

- **Hash:** sha256 del documento que registra la lectura (`estado_vivo_r15.md`; sha verificado por `sha256sum` 2026-11-14).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.175):** ver `dedup_f7_r15.json` (corrida por script + corrida inline, idénticas cifra por cifra).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
