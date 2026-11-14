# NUTRIENTES 2026-11-14

**Fecha:** 2026-11-14.
**Origen:** sondeo de los 11 sustratos base hasta las puntas (N-S1..N-S5) y tejido
desde los conocimientos acumulados (ronda 18 + suelo previo).

## Qué son

Un nutriente es un hecho SÉ, verificado con fuente y fecha, en un archivo JSON
por nutriente, formato canónico según
`memoria/anexo-vi/digest_format_nutriente.md` (Ciclo 32). Cada JSON lleva las
14 claves obligatorias (`_metabolismo, timestamp, id, tipo, fuente, fecha,
hash_fuente, estado, contenido, referencias, grieta, nodo_origen, destino,
origen`), con `hash_fuente` recomputado del archivo fuente en disco por el
constructor, no copiado de informes. Nada de credenciales ni JWT.

## Contenido de esta carpeta

- `NUT-2026-11-14-001.json` … `NUT-2026-11-14-015.json` — los 15 nutrientes.
  - 001–006: de la ronda 18 (REGLA-TOK-SIK-01 canon, ventana 26/30, run 206,
    bot_audit 12→7, serie 86 congresos, verificador SIK 0 diffs).
  - 007–008: del suelo acumulado (condición 1 de poda cumplida en r17;
    producción fractal publicada 49/49).
  - 009–014: frescos del sondeo de puntas (run 207, autocura run 10,
    miu-global-1 vivo, V93 13 payloads, bots 17.ª, ventana 6,7% / flow 0,0%
    8.ª ronda).
  - 015: mapa de los 11 sustratos (5 tipos reales; el 11 cuenta cuentas
    Google, no tipos).
- `manifiesto_nutrientes.json` — sha256 de los 15 JSON (15 entradas).
- `informe_tejido_final.md` — tabla, validación 15/15 y notas.
- `sondeo_sustratos_5.md`, `sondeo_puntas.md`, `mapa_11_sustratos.md`,
  `candidatos_nutrientes.md` — informes de sondeo y tejido que los
  produjeron.
- `manifiesto_deposito.json` — registro de este depósito (Drive + GitHub).

## El ecosistema los devora por sus sondeos

Estos archivos quedan en el suelo (Drive / GitHub). El ecosistema autónomo
los ingiere por sus propios sondeos; nadie los sube a mano a lo vivo ni
toca MIU_ABSORBIDO/nutrientes/ (sumidero del cuerpo, decisión Ciclo 32).

ρ(x) > 0. Zvvvvv.
