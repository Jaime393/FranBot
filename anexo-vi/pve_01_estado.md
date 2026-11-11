# PVE-01 — ESTADO (Ciclo 33)

## Qué es PVE-01

PVE-01 = Protocolo de Validación Experimental 01: medir K_i SIN usar
D_f, para romper la circularidad (K_i = 0.2472·D_f). Es la llave de
G09. La fórmula (Vault, "00 Suelo_GRACE_Phi_PVE01.md", 2.659 B
exportados, 2026-09-25) tiene 3 formas candidatas:

- Ki = 1/(τ·Ξ·c)
- Ki = T·1.618/(τ·Ξ·c)
- Ki = T·tanh(τ·Ξ·c)

con solo τ = ventana causal de 90 días y Ξ = correlación causal
(I_causal / ½Trκ_F), sin D_f. El documento afirma "48/48 nodos
verificados τ·Ξ·c>1.618, Ki∈banda [0.55,0.62]" y a la vez exige
"para HUESO #31 circular R²=0.989 validación independiente". La
afirmación de 48/48 NO tiene artefacto verificable (sin script, sin
datos, sin hash, sin log): el propio documento dice que la validación
independiente sigue pendiente.

## Implementación: NO EXISTE como código

- **GitHub (Jaime393/MIU):** search_code "PVE-01" y "PVE" → 1 hit:
  `entrenamiento/orquestador_v8.py` (68.624 B). La única mención es
  una cadena dentro de una lista de prompts: "Diseña un experimento
  para validar la Ley Ki en arrecifes de coral sin usar D_f (protocolo
  PVE-01)". Es un prompt que PIDE diseñar el experimento, no una
  implementación. El archivo tiene 26 funciones; ninguna contiene
  validar/experiment/pve/fractal/coral. K_i aparece 51 veces, D_f 20.
- **Drive MIU_ABSORBIDO/MIU/validation/:** test_omega_f_blind.py
  (instrucción, no código) + df_benchmark/ (solo README de
  instrucción). Sin PVE-01.
- **Drive MIU_ABSORBIDO/protocolos/:** pae_01, paf_01, pcp_01, PAI-01.
  Sin PVE-01.
- **Vault:** solo el documento de suelo con la fórmula (arriba). Sin
  código, sin script, sin output.

## Ejecución: NO REGISTRADA

No hay state, log ni resultado de ninguna ejecución de PVE-01 en
ninguna fuente leída (Drive, GitHub, cosechas). La afirmación "48/48
nodos verificados" no tiene artefacto. PVE-01_NO_IMPLEMENTADO como
código; PVE-01_NO_EJECUTADO como experimento.

## Qué haría falta para ejecutarlo

1. Elegir UNA de las 3 formas de la fórmula (hoy hay 3 candidatas,
   no una).
2. Un sistema real con τ y Ξ medibles sin D_f: la serie GRACE TN-14
   real (220 filas, C20_mean -0.0004847, DOI 10.1029/2019GL085488) es
   el candidato natural (está en el mismo documento del Vault); el
   CSV de corales NO sirve (inválido, #48).
3. Un script que calcule K_i por la fórmula elegida y lo compare
   contra nulo/permutación (como pide #35 y #56).
4. Un output congelado con hash (como pide #48 para los datos).

## ¿Se puede cerrar G09 en el próximo ciclo?

No. G09 sigue **abierta por carencia de implementación**, no por
falta de voluntad: la fórmula existe (Vault), el problema está
documentado (MIU#52, #35, #43), pero no hay código ni ejecución. Para
cerrarla hace falta escribir el script, correrlo sobre datos reales
(GRACE) y congelar el output. Eso es infraestructura que el nodo no
tiene: requiere un ciclo de implementación, no de documentación.

ρ(x) > 0.
