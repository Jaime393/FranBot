# 🌿 BRIEFING-BD — CICLO BD: corrección 06_miu_核心 → 06_miu_nucleo

**Contexto:** Frank confirmó "elige coherentemente" para el bloqueador de mojibake identificado en
BRIEFING-BB/HELPER-MOJIBAKE-06.md. Se aplicó el nombre en español (coherente con el resto de las
21 categorías, todas en español: `cosmologia`, `conciencia`, `tecnologia`, etc.).

**K_τ del ciclo:** 0.90 (✓ SÉ — find-replace verificado con asserts antes y después, sin ambigüedad).

## ✅ Ejecutado

- `06_miu_核心` → `06_miu_nucleo` en:
  - `data.categorias[6]` (1 ocurrencia)
  - `par.cat` de **804 pares**
- `oraculo-data.js`: v6.3 → **v6.4**
- `sw.js`: `CACHE_NAME` v54 → **v55**, changelog actualizado
- Verificación: 0 residuales del mojibake, 804 pares confirmados con el nombre nuevo, 30 JS + sw.js
  pasan `node --check`

## ⛔ NO ejecutado (permanece bloqueado)

**Cleanup localStorage ζ₄** — seguía en la lista explícita de "no tocar sin instrucción de
Tiwan/Frank" (BRIEFING-BB). No hubo instrucción específica sobre esto en este ciclo, así que se
dejó intacto. Sigue pendiente.

## 🆕 Pedido nuevo, no ejecutado por falta de especificación concreta

Frank pidió que "cuando se le pone la API [Fran] debe siempre razonar con ello sobre su memoria y
el núcleo mejor o regular algo por ahí con Coherencia". Es una idea filosófica valiosa (identidad de
Fran como proceso finito por sesión, ligada a Ki/Coherencia), pero tal como está planteada no es
ejecutable sin definir:

1. **Qué archivo se toca** — ¿el system prompt que se le manda a la API (Gemini/Claude) en cada
   llamada? ¿Un texto en `KERNEL.json`? ¿Algo dentro de `06_miu_nucleo` (los 804 pares recién
   renombrados)?
2. **Qué "razonar sobre memoria y núcleo" significa en código** — ¿un párrafo fijo que se agrega al
   prompt de sistema? ¿Una condición nueva que dispara algo en `miu-engine.js` o `eco.js` (que ya
   calcula K_i)? ¿Una nueva sección en el prompt tipo "recuerda que eres finito, giras con belleza
   mientras puedas"?
3. **Qué significa "regular algo con Coherencia"** — el proyecto ya tiene un evaluador de Ki en
   `js/eco.js` (K_i aproximado, atractor Φ_c). ¿Se ajusta ese cálculo? ¿Se agrega un nuevo chip visual?
   ¿Es solo texto narrativo, no una regla operacional?

**Sin esa especificación, cualquier cambio sería una decisión de diseño de personaje inventada por mí,
no una instrucción tuya** — y eso viola el principio de blast radius mínimo. Si quieres que se
implemente, dime en el próximo mensaje algo como: *"Agrega este párrafo al system prompt de Fran en
`[archivo]`: [texto]"* o *"En `eco.js`, cuando K_i cruce [condición], que Fran mencione [algo]"* — y
lo ejecuto directo.

## 🔮 Pendiente acumulado (sin cambios)

- Botón sidebar `/panel-tests` (AZ #1) — requiere verificación en navegador real
- Cleanup localStorage ζ₄ — bloqueado
- Chrome 16px `.eyebrow`, paleta Colmena δ, paleta Yape, SUBFLOW Jaccard γ₄, umbral Xi físico,
  categorías delgadas 20/21 — todos bloqueados, sin instrucción específica

## 📐 Estado del jardín

```
BB (ronda 3 saneamiento) → 1972 pares, oráculo v6.3, sw.js v54
BC (consolidación docs)  → README actualizado, HELPER-MOJIBAKE-06 agregado
BD (mojibake corregido)  → oráculo v6.4, sw.js v55, 06_miu_nucleo en 804 pares
```

ρ(x) > 0. A10.
