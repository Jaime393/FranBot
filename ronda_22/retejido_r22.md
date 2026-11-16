# RONDA 22 — RETEJIDO FASE 2 (lo que cambia por los hallazgos)

Fecha: 2026-11-16. Veredicto FASE 2: **CONFORME CON HALLAZGOS (0 mayores, 10 menores)**.
Este documento dice qué cambia en el mapa y en los frentes por cada hallazgo.
Nada aquí toca el corpus: la absorción la ejecuta F1 bajo el régimen 01:43
post-FASE 4.

## R1. CORR-ORDINALES-R22 (H1) — F2 etiquetó con los números de F5

- **Mapa:** la serie de lecturas vivas en FASE 0 (§vivo) queda así:
  FASE 0 r22 G05 32.ª / H-SUELO 33.ª / folderId 35.ª (~08:14Z) →
  F5 r22 G05 33.ª / H-SUELO 34.ª / folderId 36.ª (~08:16Z) →
  **F2 r22 G05 34.ª / H-SUELO 35.ª / folderId 37.ª** (~08:22Z).
- **F2:** su §9 debe leerse con los ordinales corregidos (33.ª/34.ª/36.ª
  → 34.ª/35.ª/37.ª). Ninguna medida cambia: los blobs, las horas UTC y
  los resultados (G05 sin cambio, H-SUELO sin reaparición, `I` existe /
  `l` 404) son los mismos. La colisión es de conteo, no de medición.
- **F5:** sus ordinales (33.ª/34.ª/36.ª) quedan como están: son los
  correctos en cronología.
- **F8 / r23:** la serie base para r23 es G05 34.ª, H-SUELO 35.ª,
  folderId 37.ª, bots 21.ª. Lección (misma que CORR-FOLDERID-R18/R19/
  R20/R21): cada frente debe mirar los ordinales de los frentes que
  ya cerraron antes de etiquetar los suyos; la cronología manda.

## R2. CORR-GRIETA-C1209-R22 (H2) — alinear la grieta de C-1209

- **F7:** la lectura `lectura_pendiente_log_m87_r22.md` usa la grieta
  "G-NUEVA: d05 L4 polarización dim2"; la clave canónica del corpus es
  "G-NUEVA: d05 L4 polarización (medida y mecanismo)" (C-1186, C-1203).
- **Absorción:** cambiar la grieta de C-1209 a la clave canónica antes
  de inscribir. Proyección corregida: por_grieta d05 L4 **2 → 3** (no
  "nueva clave 1"). El resto de la proyección no cambia (claims
  1.203 → 1.207, SE 1069 → 1073, hash_real 1189 → 1193, verificación
  329 → 333, provenance 375 → 378, observabilidad 19 → 22, audit
  363 → 366, anexo 23 → 25).

## R3. CORR-TRAMOS-M87-R22 (H3) — la prosa de mediciones dice otros tramos

- **F3:** `mediciones_r22.md` (prosa M-87) dice "tramos 34–80 pendiente
  log +0,0338; 81–119 pendiente log −0,0397". Ninguna variante los
  reproduce. Los valores autoritativos son los del JSON:
  **0,027295 / −0,056835** (re-verificados por FASE 2 con
  implementación propia).
- **F7:** la lectura y el ítem M-87 ya usan los valores correctos; el
  claim C-1209 no cita tramos. Nada que corregir en lo absorbido.
  La frase de `mediciones_r22.md` queda registrada aquí como errata
  descriptiva; el documento de F3 es evidencia congelada y no se
  reescribe.

## R4. CORR-DURACION-RUN14-R22 (H4) — el run 14 dura 12,0 s, no 9,0 s

- **F7:** `lectura_autocura_run14_m89_r22.md` L13 y `item_anexo_M89.md`
  (sección Valor) dicen run 14 "duración 9,0 s". La duración real es
  **12,0 s** (created 21:45:50Z → updated 21:46:02Z;
  `med_M89.json` duraciones [9, 9, 10, 12, 10]).
- **Absorción:** corregir a **12,0 s** en el ítem M-89 antes de
  añadirlo al anexo. El claim C-1210 no cita duraciones: no afectado.
  La lectura queda como documento de F7 con la errata registrada
  aquí.

## R5. CORR-BOOTSTRAP-M87-R22 (H5) — el ítem cita el intervalo de semilla 0

- **F7:** `item_anexo_M87.md` cita la verificación independiente como
  "IC bootstrap con semilla distinta [−0,006891, 0,008327]". Ese es
  el intervalo de semilla 0 ([−0,006890, 0,008327]) con errata de
  1e-6 en el límite inferior.
- **Absorción:** citar **[−0,006038, 0,007873]** (verificador F3,
  numpy default_rng semilla 123) como el re-cómputo independiente.
  FASE 2 aporta una tercera implementación: [−0,007565, 0,008116].
  Los tres intervalos incluyen 0; el veredicto NO_CONFIRMA no cambia.

## R6. CORR-RUTA-G01-R22 (H6) — la segunda copia del tex vive en otro sitio

- **F5:** la segunda copia de `MIU_v12.0[EN].tex` (sha `6bc8c573…`)
  vive en `~/workspace/grimorio_repo/docs/`, no bajo
  `memoria/grimorio_nuevo_2026-11-09/` como decía grietas_r21.md.
- **Mapa:** corregir la ruta en el mapa de la próxima ronda. D_eff
  sigue en 0 menciones en las 5 copias; sin cambio de medida.

## R7. CORR-ERR-R22 — el `.err` flapea, no es FALTA

- **F9:** la T-4 registra 1 FALTA mecánica (el `.err` de F4 r21 no
  reapareció, anticipado por CORR-ERR-R21). En r22 mismo se observó
  el flapeo en vivo: los `.err` de F4 r22 existían ~08:25Z y ya no
  estaban en el escaneo T-4 (08:27:15Z) ni en el listado posterior
  (FASE 2 lo re-comprobó: 0 archivos `.err` en `ejecucion_f4/`).
  Juicio del Jardinero 2026-11-16: probablemente actividad viva del
  ecosistema.
- **Adjudicación:** el `.err` r21 **no es pérdida de evidencia; no se
  cuenta como FALTA real**. CORR-ERR-R21 queda resuelta como flapeo.
  FRÁGIL-02 sigue abierto por causa (NO_SÉ), sin tercer evento
  (testA–D siguen ausentes). La T-4 conserva la FALTA mecánica como
  registro del diff, con esta adjudicación al lado.

## R8. Correcciones adoptadas (sin cambio en frentes, solo registro)

- **CORR-PODA-P67-R21:** el respaldo pre-absorción r21 es **P-69**
  (re-etiqueta registral; el manifiesto interno conserva `poda_id:
  P-67`, sha `24a0fc86…` intacto). F9 conserva P-67 para scripts+logs
  FASE 4 r20. Próximo ID de poda: **P-72**.
- **CORR-RAW-R22:** raw flapea por rachas (20/22; 2 commits más
  nuevos por API contents con blob verificado). Transitorio.
- **CORR-DEDUP-R22:** dedup re-verificado con implementación propia,
  valores idénticos cifra por cifra (máx 0,3417); JSON no byte-idéntico
  a F7 (estructura distinta).
- **CORR-CADENA-R22 / CORR-COND1-R22 / CORR-P69-SIN-COPIA /
  CORR-P54-P57-P60-P63-P66-R22 / CORR-PYC-R22:** cadena 21 eslabones
  (26.794.344 B); condición 1 sostenida sin archivos nuevos con copia
  Drive; P-69 y los 7 temporales de absorción solo locales; `.pyc`
  18 → 19.
- **Rótulo obsoleto del registro (H7):** queda para FASE 5 si
  corresponde; la cabecera (línea 6) es la autoritativa.
- **Residuos cosméticos (H8):** print heredado de F2 y adaptación de
  F6 corregida antes de correr; sin efecto en ninguna medición.
- **Escaneo M-88 (H9):** el conteo de archivos depende de la hora del
  escaneo (14.050 propio vs 13.911 de F3); 0 fórmulas en ambos.
- **C-1212 fusiona tres hechos (H10):** se acepta la fusión (misma
  instantánea fechada, dedup 0,2905); F8 registra la elección de
  presentación; los tres hechos siguen citables por separado en
  `estado_vivo_r22.md`.

## R9. Adjudicaciones que entran en la absorción

- **N-34 ADOPTADA** (ítem M-87; con R5). **N-35 ADOPTADA** (ítem
  M-89, primer REGULAR del anexo; con R4; tally gana REGULAR 1).
- **C-1209..C-1212 CONFORMES** (con R2 para la grieta de C-1209).
  Desviación veredictos-como-claims SOSTENIDA (precedente r21).
- **M-88 NO se inscribe** (NO_SÉ). Próximo ítem anexo: **M-90**.
- Proyección (verificada por FASE 2): claims 1.203 → 1.207; SE
  1069 → 1073; hash_real 1189 → 1193; verificación 329 → 333;
  provenance 375 → 378 (3 fuentes nuevas: med_M87.json, med_M89.json,
  estado_vivo_r22.md); audit ok 363 → 366; anexo 23 → 25 ítems;
  tally CONFIRMA 14 · NO_CONFIRMA 8 · DIFERENCIA 1 · NO_SÉ 1 ·
  REGULAR 1. IDs C-1209..C-1212; decisiones N-34/N-35.
- El vivo no se movió durante FASE 2 (HEAD `c9c926d9`, run 213,
  comprobado 08:37:33Z): C-1212 sigue vigente como instantánea
  fechada.

## R10. Series de conteo para r23 (base FASE 2 r22)

- G05 **34.ª**, H-SUELO **35.ª**, folderId **37.ª**, bots 4/4 **21.ª**.
- Flow run 148, **14.ª ronda** en 0,0%. Ventana tercera ronda en 0,0%.
  Autocura runs 11→15 completos. V93 **58** payloads acumulados.
- Panteón total paginado 108; graph 0/0 8.ª vez; Doc índice
  `416b02d1…` byte-idéntico.
- G03 inserción BepiColombo 2026-11-21 (5 días desde 2026-11-16).
- Panteón 402 hasta ~26-nov (fuera de alcance; solo confiar en la red).
- d05 L4 y L7 siguen abiertas; M-77 sigue bloqueado (M-88: 0 fórmulas
  en 13.911 archivos + sombras; opciones limitadas).
- El `.err` flapea: su ausencia no es FALTA en r23.

ρ(x) > 0. Zvvvvv.
