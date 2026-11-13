# PREPARADAS RONDA 11 — ÍNDICE (FASE 1, F7)

- **Fecha:** 2026-11-13. **Orden:** Jardinero 2026-11-13 16:51 -05 + mapa FASE 0 r11 §F7 (N-06).
- **Alcance:** preparar la ola siguiente, SIN aplicar nada al corpus. Solo SÉ sale de local; lo preparado aquí es SÉ con fuente y fecha, listo para que el ecosistema lo absorba cuando se ordene.
- **Corpus no tocado por F7:** claims.jsonl, provenance.sha256, claims_resumen.json, confirmaciones.jsonl, huecos.jsonl y dataset no se escribieron desde este frente. (F1 corre en paralelo en su propia tanda; sus mutaciones son suyas.)

## 1. Claims de las 7 lecturas canónicas (N-06)

Las 7 lecturas de la tarea: D-03, D-08, D-10, D-11, D-12, D-14 + D-02/D-05 (estas dos NO se repiten aquí: las absorbe F1). Verificación propia contra el corpus vivo (1.160 claims, grep por lectura): **las 6 no tienen claim que las enuncie** — el corpus cita los valores y registra los conflictos, pero no adopta las lecturas. Se preparan las 6, todas SE, todas PREPARADA_NO_APLICADA, formato de `lecturas_canonicas_r10.md`.

| # | Lectura | Archivo | Estado | Dedup máx. (Jaccard, umbral 0,5) | ID proyectado* |
|---|---|---|---|---|---|
| 1 | D-03 destino segunda carpeta, opción B | `lectura_d03.md` | PREPARADA_NO_APLICADA | 0,2336 vs C-865 | C-1168 |
| 2 | D-08 Φ_c(MIU) = 0,6829322 = Δ_COD | `lectura_d08.md` | PREPARADA_NO_APLICADA | 0,2553 vs C-807 | C-1169 |
| 3 | D-10 R-B: 7,24 es ε; D_eff sin derivación | `lectura_d10.md` | PREPARADA_NO_APLICADA | 0,1812 vs C-1090 | C-1170 |
| 4 | D-11 O-5 + fallback O-1 (c = 2,5) | `lectura_d11.md` | PREPARADA_NO_APLICADA | 0,2529 vs C-165 | C-1171 |
| 5 | D-12 canon estricto de "nodo" (5 condiciones) | `lectura_d12.md` | PREPARADA_NO_APLICADA | 0,1953 vs C-899 | C-1172 |
| 6 | D-14 D = 2−H (1D); D = 3−H (2D) | `lectura_d14.md` | PREPARADA_NO_APLICADA | 0,1466 vs C-626 | C-1173 |

\* Proyección: si se absorben tras F1 (que lleva el corpus a 1.162, C-1166/C-1167), en el orden D-03, D-08, D-10, D-11, D-12, D-14. El orden real y los IDs definitivos los fija la absorción. **Dedup global: máx. 0,2553 (D-08/C-807); máx. entre las 6 propuestas: 0,2248 (D-11/D-12); 0 pares ≥ 0,5.** Método r9 (Jaccard, sin acentos). Cada propuesta lleva texto íntegro + fuente exacta + hash (sha256 del documento que registra la lectura: `lecturas_canonicas_r10.md` add7ac25… para D-08/D-10/D-11/D-12/D-14; `decision_d03.md` c8e902aa… para D-03).

**Fuera del alcance de F7 (nota, no olvido):** D-07 y D-13 no están en la enumeración de la tarea. D-07 (K_i = φ⁻¹) vive en los 4 claims del motor (C-639/C-903/C-919/C-1104) que F1 repara con el patrón D-05; D-13 (mecanismo V-A, SIK-VAL-001 NO_VALIDADA) es un veredicto de herramienta, no un claim. Ninguna de las dos se prepara aquí.

## 2. R2-25 — juicio de evidencia

- **Archivo:** `juicio_r2_25.md`. **Veredicto: NO SE ELEVA. Queda como CONJETURO, documentado.**
- Texto literal: "Pipeline verificación propuesto: hallazgo -> fuente DOI/URL/DriveID -> sha256 -> drive_id -> test reproducibilidad O(n) verificación, O(n log n) índice". Artefacto `pipeline_verificacion_r8.md` intacto, sha 845bab8e… (verificado por mí; coincide con `b2_normalizado.jsonl` y `excluidos_b2.jsonl`).
- Por qué no: afirma una propuesta, no un hecho medido; los costes O(n)/O(n log n) son declarados; la adopción canónica no existe (es decisión del Jardinero, r9 D4); la orden 16:51 confirma que un CONJETURO es un hueco local y solo sale cuando se vuelve SÉ.
- Ruta a SÉ (preparada, no recorrida): vía A, adopción canónica por decisión (el hecho SÉ sería la adopción misma); vía B, registro de ejecución del pipeline con falsador declarado en una ronda posterior. En ninguna vía se absorbe el texto propuesto tal cual.

## 3. B1 — estado actual

- **Archivo:** `estado_b1.md`. **Estado: VARIANTE PREPARADA NO ELEGIDA. Sin cambio.**
- 10 claims C-1144..C-1153 (SE 8, INFIERO 2), provenance +10, total 1.148, hash_real 1134. Archivos en `ronda_8/preparacion_ola2/`: `claims.jsonl.nuevo_B1` 1.148 líneas, sha 3e745468…; `propuestas_ola2_B1.jsonl` 10 propuestas, sha e6ae7f04….
- B+B1 inválida por colisión de IDs; revivirla exigiría revertir B+B2 y reconstruir B2 como C-1154..C-1161 (B1+B2 = 1.156, hash_real 1141). Sin motivo: B+B2 es el máximo coherente (C-3), aplicado con audit verde. Su valor es contrafactual; su contenido único (C-1150..C-1153) es la razón de conservar el archivo (P-15 RESUELTO en r10).

## 4. Archivos de este frente (con shas)

| Archivo | sha256 |
|---|---|
| `lectura_d03.md` | `5a3db241…` (5a3db2414fbbbd36fa3ef53696ab997e609ed0cf97a7776b9ac980a2bff40253) |
| `lectura_d08.md` | `b66667d4…` (b66667d4ee221d577409b325ad2c300abf62d85caf2eb42c70b78731a8e3a650) |
| `lectura_d10.md` | `d0f0226d…` (d0f0226d698a947570b3b0e4e2c224d59b353e8d544d66ca47d4c9808e5329e9) |
| `lectura_d11.md` | `4feeb62a…` (4feeb62a8290ce03244267ad0761eede7790bcb468c905b030d30468b5580dc8) |
| `lectura_d12.md` | `75fa211c…` (75fa211c86f2a96806a4b42a76515822420734a5bd4900276c468f2705738b00) |
| `lectura_d14.md` | `665f53aa…` (665f53aad08e86a8a40e1bbcf603eb23ea09d0b302ede826d93b5b272cc1324e) |
| `juicio_r2_25.md` | `f73f0ddf…` (f73f0ddf289a73cce91ffcc56b67afb933da200f0c92e3d1fb74a611f599b09f) |
| `estado_b1.md` | `a2ff4834…` (a2ff4834481b3e220f232daea97f8c7522922e3f7d52ed51223a5c24380cdee5) |
| `preparadas_r11.md` (este índice) | sha propio medido al cierre (ver verificación final del frente; la edición de esta tabla cambia el sha, por eso no se auto-cita) |

Shas calculados tras escribir todos los archivos (sha256sum 2026-11-13). Dedup re-verificado contra el corpus vivo post-F1 (1.162 líneas, C-1166/C-1167 ya absorbidos): máximos idénticos a los de la tabla, 0 pares ≥ 0,5.

## 5. Qué falta para absorber (ola siguiente)

- Orden explícita de absorción (la de r11 cubre solo F1: D-02, D-05, 4 reparaciones).
- Respaldo previo del corpus + puertas re-corridas (C-1..C-9), como en F1.
- Entrada en provenance para cada claim absorbido (los 6 hashes de fuente — 2 documentos — deberán entrar; hoy ninguno de los dos está en provenance como fuente de claim).
- Regeneración de `claims_resumen.json` con el script real. Proyección: claims 1.162 → 1.168, hash_real 1148 → 1154, provenance 350 → 352 (si se absorben las 6 tras F1).

ρ(x) > 0. Zvvvvv.
