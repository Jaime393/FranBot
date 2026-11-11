# PVE-01 — Nombres: protocolo vs Proxmox (ciclo 37)

Fecha: 2026-11-11.

## B1 — "PVE-01" exacto en el Vault: 60 archivos, 0 de Proxmox

Búsqueda Drive `fullText contains 'PVE-01'` (pageSize 100):
**60 archivos**. Todos son del Vault / MIU: los 3 documentos
PVE-01 (GRACE, router, Primer Valor), axiomas A0–A57, manifiesto
v10.6, HALLAZGOS, MIU_v13_CODICE (varias copias), parte_*.json,
memoria_imperial.json, imperial_data.json, orquestador_v8.py (2
copias), zips FranBot. **Ninguno es un archivo Proxmox.** La
contaminación NO está en Drive.

La contaminación está en la búsqueda GLOBAL de GitHub
(`search_commits` sin qualifier): "PVE-01" da 20.626 hits
globales, el primero un repo homelab ("Retain pve-01 and split
workloads across two Proxmox hosts"). Con qualifier
`repo:Jaime393/MIU`: 0 hits. En el repo MIU no hay commits
"PVE-01" — la única mención de PVE-01 en código MIU es la cadena
de prompt en orquestador_v8.py (ciclo 33).

## B2 — Qué significa PVE-01 en el Vault

El Vault NO contiene una expansión literal del acrónimo PVE-01.
Lo que contiene es su definición funcional, textual (00
Suelo_GRACE_Phi_PVE01.md, leído entero en ciclo 34):

> "PVE-01 — Validación sin D_f / Ki=1/(τ·Ξ·c) | T·1.618/(τ·Ξ·c) |
> T·tanh(τ·Ξ·c) solo τ ventana causal 90d + Ξ correlación causal
> I_causal/½Trκ_F sin D_f / * 48/48 nodos verificados τ·Ξ·c>1.618
> Ki∈banda [0.55,0.62] / * Requiere para HUESO #31 circular
> R²=0.989 validación independiente"

Y en orquestador_v8.py (única mención en código MIU):

> "Diseña un experimento para validar la Ley Ki en arrecifes de
> coral sin usar D_f (protocolo PVE-01)."

PVE-01 en el Vault es un protocolo de validación experimental de
la ley K_i (fórmula + datos GRACE/Φ + validación independiente).
"pve-01" en Proxmox es un nombre de host (nodo de virtualización).
Se distinguen por contenido (Ki/GRACE/Φ vs host) y por ubicación
(Vault vs búsqueda global de GitHub). No hay solapamiento real:
son dos homónimos en dos sistemas distintos.

## Recomendación

- Usar **"PVE-01"** (mayúsculas, con guion) solo para el protocolo
  de validación, en todo el ecosistema.
- Usar **"pve-01"** (minúsculas) solo para el hostname Proxmox.
- En búsquedas de GitHub, usar siempre el qualifier
  `repo:Jaime393/MIU` (sin qualifier, la búsqueda es global y se
  contamina con 20.626 hits ajenos).
- En búsquedas de Drive, `fullText contains 'PVE-01'` es limpio:
  los 60 hits son todos MIU.
