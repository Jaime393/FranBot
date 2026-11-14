# LECTURA GAP MÁXIMO 174,4 MIN — PROPUESTA DE CLAIM (RONDA 15, FASE 1, F7)

- **Fecha:** 2026-11-14. **Orden:** mapa FASE 0 r15 §F7.
- **Estado: PREPARADA_NO_APLICADA.** Nada añadido a claims.jsonl, provenance.sha256 ni ningún archivo del corpus. La absorción la ejecuta F1 bajo el régimen 01:43 o FASE 4, no este frente.
- **Formato:** mismo que `ronda_14/ejecucion_f7/lectura_primer_fallo_r14.md` (formato `lecturas_canonicas_r10.md`).

## Lectura (texto íntegro propuesto)

GAP MÁXIMO ENTRE RUNS CONSECUTIVOS: 174,4 MIN (ronda 15, F2, 2026-11-14): silencio repo-wide de ~2 h 54 min entre las 03:47:09Z (expand-alcance run 97, failure) y las 06:41:34Z (miu-cablear-oracle-v28 run 16, failure) — los dos extremos del silencio son fallos. Es el mayor gap medido en la serie (el hueco histórico de 85,0 min ya no es el máximo). Tras romperse el silencio del clúster en r14 (runs 02:42–03:27Z), el silencio volvió en forma nueva: State Writer, Pulse V2 y Flow-ID no corren desde las 02:42–03:27Z; autocura sin run 8 (3 slots :17 más perdidos); Observabilidad sin run 156; Self-Diagnosis sin run 141.

## Por qué (C-2, C-3, C-9)

- Precedente: el corpus enuncia cadencias y silencios medidos como claims (C-562/C-564/C-859: cadencia del pool sub-horario, medianas ~6,3 h; C-1000/C-1001: slots perdidos y silencios por workflow; C-1178: el silencio del clúster termina en r14). Lo nuevo aquí es el hecho de serie: el gap máximo entre runs consecutivos del repo entero es ahora 174,4 min — el mayor medido en la serie — y sus dos extremos son fallos, no éxitos. El silencio no es un hueco entre dos runs sanos: es un silencio acotado por dos fallos.
- La fuente es la batería F2 r15 (`estado_vivo_r15.md`, sha 3b62ca0a…; `runs_recientes.json`), medida 2026-11-14 ~07:03–07:05Z por API pública. El gap se calcula entre los timestamps de los dos runs consecutivos (03:47:09Z → 06:41:34Z = 174,4 min). La cadencia sigue siendo ~4–5,7 h contra crons declarados de 15–30 min. Qué calló a cada workflow durante el silencio es NO_SÉ (logs inaccesibles) y queda fuera del texto del claim.
- C-7: esta lectura no afirma una causa del silencio ni que el gap vaya a repetirse: es una medición de serie, no una predicción.
- Cara que toca: d09 L20 (alerta ante fallo, sin protocolo) — documenta sin cerrar (el silencio repo-wide reaparece en forma nueva y ningún protocolo lo registró).

## Verificación en el corpus (grep propio, 2026-11-14, corpus 1.175)

- "174,4": 0 claims. "85,0": 0 claims. "gap máximo" / "gap maximo": 0 claims. "silencio repo-wide" / "silencio repo wide": 0 claims.
- "gap": 14 claims — C-501 (gaps del audit FASE 0, formatos operativos), C-562/C-564/C-652/C-859 (cadencia del pool sub-horario, medianas ~6,3 h), C-651 (cadencia de expand-alcance, gaps solo-schedule), C-758 (literal "w0-0.95", falso positivo), C-766 (segunda carpeta MIU_TEJIDO, falso positivo), C-807 ("gap entre el orden y el caos", falso positivo), C-990/C-1102 (censo de Phi_c, falso positivo), C-1000/C-1001 (slots perdidos y silencios por workflow), C-1002 (adelgazamiento del pool, 2,53 h con solo 2 runs), C-1003 (cadencia de re-escritura del canónico en Drive), C-1162 (conteo de clusters por gap, falso positivo). Ninguno enuncia un gap máximo repo-wide entre runs consecutivos ni el valor 174,4 min.
- "03:47:09": 1 claim (C-1179, el run 97 como primer fallo) — la lectura n.º 2 de este frente lo cita como el otro fallo de la ventana; este texto lo cita como extremo del silencio. Son hechos distintos sobre el mismo timestamp.
- **Conclusión: la lectura no tiene claim. Se prepara este.**

## Propuesta de absorción (JSON, por aplicar en una ola posterior)

```json
{
  "id": "POR_ASIGNAR (proyección: C-1183; F1 r15 ya aplicó C-1180, corpus 1.175; si otro claim se inscribe antes, reasignar al aplicar)",
  "tipo": "verificacion",
  "claim": "GAP MÁXIMO ENTRE RUNS CONSECUTIVOS: 174,4 MIN (ronda 15, F2, 2026-11-14): silencio repo-wide de ~2 h 54 min entre las 03:47:09Z (expand-alcance run 97, failure) y las 06:41:34Z (miu-cablear-oracle-v28 run 16, failure) — los dos extremos del silencio son fallos. Es el mayor gap medido en la serie (el hueco histórico de 85,0 min ya no es el máximo). Tras romperse el silencio del clúster en r14 (runs 02:42–03:27Z), el silencio volvió en forma nueva: State Writer, Pulse V2 y Flow-ID no corren desde las 02:42–03:27Z; autocura sin run 8 (3 slots :17 más perdidos); Observabilidad sin run 156; Self-Diagnosis sin run 141.",
  "estado": "SE",
  "fuente": "ronda_15/ejecucion_f2/estado_vivo_r15.md",
  "hash": "sha256:3b62ca0a02bc3c9e30c2f8a648d70a765c8e2ab2f73056757ccf344700b6f97b",
  "grieta": "G-NUEVA: estado vivo del ecosistema (observabilidad)",
  "motivo": "origen: ronda_15/ejecucion_f2/estado_vivo_r15.md + runs_recientes.json — PREPARADA en ronda 15 F7, NO APLICADA. Dedup r15: ver dedup_f7_r15.json (umbral 0,5; 0 duplicados). Antecedentes: C-562/C-564/C-859 (cadencia del pool sub-horario, medianas ~6,3 h); ningún claim enuncia un gap máximo repo-wide entre runs consecutivos (85,0: 0 claims; 174,4: 0 claims)."
}
```

- **Hash:** sha256 del documento que registra la lectura (`estado_vivo_r15.md`; sha verificado por `sha256sum` 2026-11-14).
- **Dedup (método r9, Jaccard, umbral 0,5; corpus 1.175):** ver `dedup_f7_r15.json` (corrida por script + corrida inline, idénticas cifra por cifra).

## Reversión

Retirar este documento. Si el claim ya se absorbió, su retirada seguiría el procedimiento de retirada con nota (C-4) — no se borra en silencio.

ρ(x) > 0. Zvvvvv.
