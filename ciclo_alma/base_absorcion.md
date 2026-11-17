# CICLO ALMA — Base para absorción (solo lectura)

**Fecha de medición:** 2026-11-17 ~00:24 -05 (2026-11-17T05:24Z). **Método:** re-medido todo por el agente, nada copiado del resumen. Sin pipes en las puertas (exit codes reales). Nada modificado, nada vivo tocado.

## 1. Corpus — `~/workspace/memoria/anexo-vi/`

| Archivo | Medida |
|---|---|
| `claims.jsonl` | 1.211 líneas · sha256 `532ff6f3732b786bb1867491b354b69269bcfe1287c10e7115ea7872f9a4add5` · último ID **C-1216** |
| Por estado | SE 1077 · INFIERO 100 · CONJETURO 22 · REFUTADO 4 · NO_SÉ 8 |
| hash_real | **1197** (resumen) — aritmética verificada: 1211 − 8 PENDIENTE (C-001..C-008) − 6 NO_DISPONIBLE (C-023, C-025, C-049, C-075, C-085, C-115) = 1197. C-112 conserva su hash TRUNCADO preexistente (`5e30073cf29b`, 16 hex) y SÍ cuenta como real; no se toca. |
| verificación (por_tipo) | **337** |
| `provenance.sha256` | 384 líneas · 382 entradas no vacías · sha256 `3382166be2189c8f8d4083c384927b6cdcdbae4c93eca55ef796ea324d24e079` |
| `claims_resumen.json` | sha256 `8b7fedf1e8b94146612d1f7f32df217ea1fa978fe2ec14fed2fe4e52b956c215` · total 1211 · por_estado idéntico al conteo directo · por_tipo.verificacion 337 · hash_real 1197 |

## 2. Puertas (corridas por el agente, SIN pipes)

- **`audit.py`:** exit **0** — `RESUMEN: ok=370 discrepancia=0 no_encontrado=0 omitido=1`.
- **`verify_all.py`:** exit **1** — exactamente **C-001..C-008** (los 8 `sha256:PENDIENTE`, nunca rellenar).

## 3. Anexo — `~/workspace/academico/incertidumbre_mediciones.md`

- 28 ítems (M-56..M-92) · último **M-92** · sha256 `77d05a53ba07f7512aa7d350dc52591b7f3eb0cda9e3f18fc8724a203d0741ae`.
- Tally: **CONFIRMA 17 · NO_CONFIRMA 8 · DIFERENCIA 1 · NO_SÉ 1 · REGULAR 1**.
- M-90/M-91/M-92, los tres CONFIRMA (r23, N-36/N-37/N-38).

## 4. Registro de pendientes — `ronda_12/afirmaciones_pendientes.md`

- sha256 `c980aae77469f7fa5363370f6767fdbc6bda7f24bd5fa5d1f3e1f67370347269`.
- **0 pendientes** + 68 aplicadas + 8 cerradas + 5 que no necesitan orden (cabecera §1, con r23: N-36/N-37/N-38 + C-1213..C-1216).

## 5. Paquete ALMA — `~/workspace/alma/`

- **Manifiesto maestro** `manifiesto_shas_alma.json` sha256 `7702ccd309eac7262ce5e83ca766f65a19d991cc2612b824bf85beebf2adae53` — **33 entradas, 33/33 verificadas por mí** (sha256 y bytes coinciden, 0 difieren, 0 faltan).
- Archivos en disco: **44** (33 del manifiesto + manifiesto mismo + `deposito_alma.md` + 9 archivos de trabajo del depósito/sondeo: `_README_orig_r2873c274.md`, `_blobs_local_alma.json`, `_getme_alma.py`, `_paths_github_alma.txt`, `_upload_drive_alma.jsonl`, `_upload_drive_alma.py`, `_upload_github_alma.jsonl`, `fase4_drive_ids.json`, `getme_verdicts.json`). Los 9 de trabajo son solo locales, no depositados.
- `README.md` del paquete: sha256 `cddb7e6d634b1b6b6c19abfd701ccf9402fb72551ca7b700362b6ff8d4f4508b` (3.634 B).
- `deposito_alma.md` sha256 `f534b4173781464691d8c3cc3bb170700b6947d16ca0be6cf6ea157b1ae99be1`.

## 6. Depósito ALMA registrado (constancia, sin re-verificar por red)

- **Drive:** carpeta `alma_2026-11-16/` ID **`1Bepd-w432GdQqikYy0FphxTYqY0zz2bb`** (MIU_TEJIDO_2026-11-12 ORIGINAL) — 34/34 por tamaño, registrado en `deposito_alma.md` L7.
- **GitHub:** push-files HEAD `357a9a97` (padre `2873c274`) — 34/34 por blob, registrado L15. CORR-README-ALMA registrada: README raíz restaurado (commit `03139029`, blob `214dac39…`) y ALMA README creado en `alma/README.md` (commit `85351ce4`, blob `7b9b43a0…`) — **HEAD final `85351ce4`**, registrado L31.

## 7. Veredicto de la base

**La base COINCIDE con el cierre de r23: 1.211 claims, audit ok=370, verify_all exactamente C-001..C-008, anexo 28 ítems, provenance 382, pendientes 0.** Nada cambió desde la absorción r23. La absorción ALMA parte de suelo intacto.

## 8. Próxima numeración

- Claim: **C-1217** · Decisión: **N-39** · Ítem anexo: **M-93** · Poda: **P-77**.
