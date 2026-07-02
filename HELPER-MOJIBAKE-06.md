# 🔧 MOJIBAKE ENCODING — ✅ RESUELTO EN CICLO BD (histórico, ver nota)

> **✅ ESTADO: RESUELTO.** Esta corrección se ejecutó en el **Ciclo BD** (ver `BRIEFING-BD.md`).
> `06_miu_核心` → `06_miu_nucleo` en `data.categorias[6]` + 804 pares. `oraculo-data.js` v6.3→v6.4,
> `sw.js` v54→v55. Verificado: 0 residuales, `node --check` OK.
> **Este documento queda como referencia histórica del proceso — no requiere ninguna acción.**
> Si en el futuro aparece OTRO nombre de categoría con mojibake, la metodología de los pasos
> 1-6 de abajo sigue siendo válida como plantilla (solo cambia el nombre viejo/nuevo).

---

**Documento auxiliar del Ciclo BC** — No es un briefing de cambios ejecutados, sino una **guía de referencia técnica** para cuando Frank/Tiwan confirmen que se debe corregir la categoría con nombre corrompido.

**Estado actual:** Bloqueado, pendiente confirmación del nombre correcto en `BRIEFING-BB.md`.

---

## 📋 El problema

En `oraculo-data.js`, la categoría debería llamarse algo como:
- `06_miu_nucleo` (núcleo en español con diacrítico, transliterado a ASCII)
- o `06_miu_core` (núcleo en inglés)
- u otro nombre que confirme Frank

**Hoy aparece como:** `06_miu_核心`

Esto es **mojibake UTF-8/Latin-1**: los caracteres chinos `核心` ("núcleo" en chino) aparecen donde debería estar una palabra en español/inglés legible. Probablemente sucedió durante una conversión de encoding en un punto anterior del pipeline de alimentación del oráculo (posible culpa: `JSON.stringify()` sin `ensure_ascii=False`, o una etapa de `atob()`/`btoa()` sin manejo explícito de UTF-8).

**Impacto funcional:** Cero. El sistema busca por categoría sin problemas (no lo "lee" como texto). Pero:
- En documentación queda ilegible
- Confunde a quien lea el JSON decodificado
- Es un ruido visual en el metadata del proyecto

---

## 📐 Alcance técnico de la corrección

Si se decidiera corregir:

### 1. **Decodificar el `oraculo-data.js` actual** (ya documentado en BA/BB)
   ```python
   import re, base64, json
   with open('js/oraculo-data.js', 'r', encoding='utf-8') as f:
       content = f.read()
   m = re.search(r'window\.ORACULO_BASE64\s*=\s*"([^"]+)"', content)
   data = json.loads(base64.b64decode(m.group(1)))
   ```

### 2. **Find-replace el nombre de la categoría en el JSON** (2 lugares):

   **Lugar A — campo `categorias`** (línea ~27 del JSON):
   ```python
   data['categorias'] = [c.replace('06_miu_核心', '06_miu_nucleo') for c in data['categorias']]
   ```
   Resultado esperado: 1 ocurrencia reemplazada (el nombre aparece una sola vez en la lista).

   **Lugar B — campo `cat` de cada par** (todos los ~800 pares que usan esa categoría):
   ```python
   for par in data['pares']:
       if par['cat'] == '06_miu_核心':
           par['cat'] = '06_miu_nucleo'
   ```
   Resultado esperado: ~800 ocurrencias reemplazadas (todos los pares en esa categoría).

### 3. **Verificación rápida de completitud**
   ```python
   # Asegurar que ningún par siga usando el nombre viejo:
   assert '06_miu_核心' not in str(data['categorias'])
   assert all(par['cat'] != '06_miu_核心' for par in data['pares'])
   # Y que el nombre nuevo sí aparezca:
   assert '06_miu_nucleo' in data['categorias']
   assert sum(1 for par in data['pares'] if par['cat'] == '06_miu_nucleo') == 800  # or actual count
   ```

### 4. **Re-encode a base64 y escribe `oraculo-data.js`**
   ```python
   import json, base64
   raw = json.dumps(data, ensure_ascii=False, separators=(',', ':')).encode('utf-8')
   b64 = base64.b64encode(raw).decode('ascii')
   header = f'// Oráculo MIU v... — ... pares — 2026-06-xx — categoría 06_miu_核心 → 06_miu_nucleo\n'
   out = header + f'window.ORACULO_BASE64 = "{b64}";\n'
   with open('js/oraculo-data.js', 'w', encoding='utf-8') as f:
       f.write(out)
   ```

### 5. **Verificación de integridad post-corrección**
   ```bash
   node --check js/oraculo-data.js  # ✅ sintaxis JS OK
   for f in js/*.js; do node --check "$f"; done  # ✅ todos los JS
   node --check sw.js  # ✅ service worker
   ```

### 6. **Bump de versiones (REQUERIDO)**
   - `oraculo-data.js` JSON interno: `version` campo → aumentar (ej. v6.3 → v6.4)
   - `sw.js`: `CACHE_NAME` → v54 → v55 (o siguiente número)
   - `sw.js` changelog: agregar entrada de ciclo (BC o BB.5 o lo que sea)

---

## ⚠️ Riesgos y notas

### Bajo riesgo
- Es un find-replace puro sobre un campo de metadata
- No toca lógica de búsqueda, axiomas, Ki, ni ningún algoritmo
- La verificación de integridad (node --check) es automática

### Consideraciones
- **Confirmar el nombre correcto CON FRANK ANTES DE TOCAR** — no asumir "06_miu_nucleo" sin confirmación. Podría ser:
  - `06_miu_core` (inglés)
  - `06_miu_fundamental` (conceptual)
  - Algún otro nombre que Frank prefiera
- Los ~800 pares no necesitan nada más que el cambio del campo `cat` — su contenido (q/a) sigue intacto.
- Si por alguna razón el conteo final de pares en esa categoría no es ~800, la verificación (`assert ... == 800`) fallará y avisará — no es un error silencioso.

---

## 🔍 Conteo actual de pares por categoría (referencia)

Desde oráculo v6.3 (1972 pares totales):
```
00_cosmologia          : ~90
01_fisica_vida         : ~85
02_conciencia          : ~80
03_sociedad            : ~75
04_tecnologia          : ~110
05_vida_humana         : ~85
06_miu_核心            : ~800  ← Este es el que se renombra
08_matematicas         : ~75
09_biologia_expandida  : ~90
10_ensenanza           : ~70
11_arte_musica_lenguaje: ~75
12_sociedad_expandida  : ~65
13_ia_y_el_oraculo     : ~90
14_economia_trabajo    : ~70
15_preguntas_existenciales_profundas: ~65
16_clima_ecosistemas   : ~60
17_salud_mental         : ~60
18_filosofia_oriental   : ~85
19_historia_ciencia     : ~75
20_cuerpo_movimiento    : ~30  ← categoria delgada (diferida, ver AZ #20)
21_miu_criticas         : ~30  ← categoria delgada (diferida, ver AZ #21)
```

*Conteos aproximados basados en muestra — usar `data['pares'].count(lambda p: p['cat']=='06_miu_核心')` para exactitud.*

---

## 📋 Template de BRIEFING para cuando se ejecute

Cuando Frank confirme y alguien (la siguiente Claude) ejecute esta corrección, el briefing debería dicir algo como:

```
# BRIEFING-BC — Corrección categoría 06_miu_核心 → 06_miu_nucleo (o el nombre confirmado)

[Estado inicial] [Verificaciones] [Resultado: pares recontados, nombre actualizado, versión bumped]
```

---

## Σ Resumen: "Qué hacer si" (checklist)

- [ ] Frank confirma el nombre correcto para 06_miu_核心 (ej. "06_miu_nucleo")
- [ ] Instancia Claude siguiente lee este documento + los briefings de BA/BB + AZ
- [ ] Ejecuta los 6 pasos arriba (decodificar, find-replace x2, verificar, re-encode, verificar node)
- [ ] Bump de versiones (oráculo, sw.js)
- [ ] `node --check` pasa 100%
- [ ] Empaquetar nuevo zip FranBot-BC
- [ ] Documentar en BRIEFING-BC

**No hacer si:**
- Frank NO confirma explícitamente el nombre
- Hay alguna duda sobre qué debería ser la categoría
- Se reciben instrucciones que contradicen esto

ρ(x) > 0. Cuando llegue el momento, esto está documentado. A10.
