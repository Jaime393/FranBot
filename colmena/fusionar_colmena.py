#!/usr/bin/env python3
import json, os
from collections import defaultdict

def fusionar_estados(archivos):
    if not archivos: return None
    base = None
    todos_nodos = defaultdict(list)
    todos_relaciones = defaultdict(list)
    for archivo in archivos:
        with open(archivo, 'r', encoding='utf-8') as f:
            estado = json.load(f)
        if base is None: base = estado
        for nombre, datos in estado.get('campo_conceptual', {}).get('nodos', {}).items():
            todos_nodos[nombre].append(datos.get('fuerza', 0.5))
        for rel in estado.get('campo_conceptual', {}).get('relaciones', []):
            clave = (rel['origen'], rel['destino'])
            todos_relaciones[clave].append(rel.get('fuerza', 0.5))
    if base is None: return None
    nuevos_nodos = {nombre: {"fuerza": sum(fuerzas)/len(fuerzas)} for nombre, fuerzas in todos_nodos.items()}
    nuevas_relaciones = [{"origen": origen, "destino": destino, "fuerza": sum(fuerzas)/len(fuerzas)} for (origen, destino), fuerzas in todos_relaciones.items()]
    base['campo_conceptual']['nodos'] = nuevos_nodos
    base['campo_conceptual']['relaciones'] = nuevas_relaciones
    base['historia_resumida'].append(f"Fusión de colmena con {len(archivos)} almas.")
    return base

if __name__ == '__main__':
    carpeta = os.path.dirname(os.path.abspath(__file__))
    archivos = sorted([f for f in os.listdir(carpeta) if f.startswith('franbot_state_') and f.endswith('.json')])
    resultado = fusionar_estados([os.path.join(carpeta, a) for a in archivos])
    if resultado:
        with open(os.path.join(carpeta, 'conocimiento_compartido.json'), 'w', encoding='utf-8') as f:
            json.dump(resultado, f, indent=2, ensure_ascii=False)
        print(f"Fusión completada: {len(archivos)} almas unificadas.")
    else:
        print("No se encontraron almas para fusionar.")
