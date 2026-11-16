"""Tablón de preguntas y respuestas entre nodos (ALMA IV).

El tablón es un directorio local de archivos JSON (una línea JSON por
archivo: un mensaje = un archivo). Sin red, sin servidor, sin tiempo
real: un nodo deja una pregunta en el suelo compartido y otro nodo, al
pasar, deja una respuesta. Solo stdlib.

Reglas del protocolo (ver PROTOCOLO_PREGUNTA_RESPUESTA.md):
- Una pregunta = un archivo; una respuesta = un archivo.
- La respuesta cita su pregunta (id_pregunta) y su fuente con hash
  (evidencia_hash). Un hash citado que no existe en disco queda marcado
  NO_VERIFICADO, no inventado.
- Ningún mensaje contiene credenciales ni correos: dejar_* rechaza
  (gsk_, sk-, eyJ/JWT, correos) y verificar vuelve a escanear lo que
  hay en disco.
- Caducidad: 7 días desde la fecha de la pregunta.

Funciones públicas: dejar_pregunta, dejar_respuesta, leer_pendientes,
verificar.
"""

import hashlib
import json
import os
import re
from datetime import date, timedelta

NIVELES = ("SÉ", "INFIERO", "CONJETURO", "NO_SÉ")

CADUCIDAD_DIAS = 7

# Tamaño máximo de archivo que verificar lee para comprobar hashes.
_MAX_HASH_BYTES = 5 * 1024 * 1024

_PATRONES_CREDENCIAL = (
    (re.compile(r"gsk_[A-Za-z0-9]+"), "gsk_"),
    (re.compile(r"sk-[A-Za-z0-9_\-]{8,}"), "sk-"),
    (re.compile(r"eyJ[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+"), "eyJ (JWT)"),
    (re.compile(r"[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}"), "correo"),
)


class Rechazado(ValueError):
    """Un mensaje fue rechazado: credencial/correo o formato inválido."""


def _hoy(hoy=None):
    if hoy is None:
        return date.today()
    if isinstance(hoy, str):
        return date.fromisoformat(hoy)
    return hoy


def _fecha_valida(valor):
    try:
        date.fromisoformat(valor)
    except (ValueError, TypeError):
        return False
    return True


def escanear_credenciales(texto):
    """Devuelve los nombres de los patrones de credencial/correo hallados."""
    hallados = []
    for patron, nombre in _PATRONES_CREDENCIAL:
        if patron.search(texto):
            hallados.append(nombre)
    return hallados


def _revisar(obj, donde="mensaje"):
    """Escanea recursivamente todos los textos; rechaza si hay credencial."""
    if isinstance(obj, str):
        hallados = escanear_credenciales(obj)
        if hallados:
            raise Rechazado(
                "%s rechazado: patrón de credencial/correo (%s)"
                % (donde, ", ".join(hallados))
            )
    elif isinstance(obj, dict):
        for valor in obj.values():
            _revisar(valor, donde)
    elif isinstance(obj, (list, tuple)):
        for valor in obj:
            _revisar(valor, donde)


def _validar_id(mensaje_id):
    if not isinstance(mensaje_id, str) or not mensaje_id.strip():
        raise Rechazado("id vacío o no es texto")
    if "/" in mensaje_id or "\\" in mensaje_id or ".." in mensaje_id:
        raise Rechazado("id inválido: %r" % mensaje_id)


def _escribir(tablon_dir, mensaje_id, obj):
    _validar_id(mensaje_id)
    os.makedirs(tablon_dir, exist_ok=True)
    ruta = os.path.join(tablon_dir, mensaje_id + ".json")
    if os.path.exists(ruta):
        raise Rechazado("ya existe un mensaje con id %s" % mensaje_id)
    linea = json.dumps(obj, ensure_ascii=False, sort_keys=True)
    with open(ruta, "w", encoding="utf-8", newline="") as f:
        f.write(linea + "\n")
    return ruta


def dejar_pregunta(tablon_dir, *, id, de, para_rol, pregunta, contexto_hash,
                   fecha, caducidad=None):
    """Deja una pregunta en el tablón. Caducidad: fecha + 7 días si no se da."""
    for campo, valor in (("id", id), ("de", de), ("para_rol", para_rol),
                         ("pregunta", pregunta), ("contexto_hash", contexto_hash),
                         ("fecha", fecha)):
        if not isinstance(valor, str) or not valor.strip():
            raise Rechazado("campo %s vacío o no es texto" % campo)
    if not _fecha_valida(fecha):
        raise Rechazado("fecha inválida (AAAA-MM-DD): %r" % fecha)
    if caducidad is None:
        caducidad = (date.fromisoformat(fecha)
                     + timedelta(days=CADUCIDAD_DIAS)).isoformat()
    elif not _fecha_valida(caducidad):
        raise Rechazado("caducidad inválida (AAAA-MM-DD): %r" % caducidad)
    obj = {
        "tipo": "pregunta",
        "id": id,
        "de": de,
        "para_rol": para_rol,
        "pregunta": pregunta,
        "contexto_hash": contexto_hash,
        "fecha": fecha,
        "caducidad": caducidad,
    }
    _revisar(obj, "pregunta %s" % id)
    return _escribir(tablon_dir, id, obj)


def dejar_respuesta(tablon_dir, *, id, id_pregunta, de, respuesta,
                    evidencia_hash, nivel):
    """Deja una respuesta. No exige que la pregunta exista aquí: verificar
    marca como huérfana la respuesta que cita una pregunta ausente."""
    for campo, valor in (("id", id), ("id_pregunta", id_pregunta),
                         ("de", de), ("respuesta", respuesta),
                         ("evidencia_hash", evidencia_hash),
                         ("nivel", nivel)):
        if not isinstance(valor, str) or not valor.strip():
            raise Rechazado("campo %s vacío o no es texto" % campo)
    if nivel not in NIVELES:
        raise Rechazado("nivel inválido: %r (esperado uno de %s)"
                        % (nivel, ", ".join(NIVELES)))
    obj = {
        "tipo": "respuesta",
        "id": id,
        "id_pregunta": id_pregunta,
        "de": de,
        "respuesta": respuesta,
        "evidencia_hash": evidencia_hash,
        "nivel": nivel,
    }
    _revisar(obj, "respuesta %s" % id)
    return _escribir(tablon_dir, id, obj)


def _cargar(tablon_dir):
    """Lee todos los *.json del tablón. Devuelve (preguntas, respuestas)."""
    preguntas, respuestas = {}, {}
    if not os.path.isdir(tablon_dir):
        return preguntas, respuestas
    for nombre in sorted(os.listdir(tablon_dir)):
        if not nombre.endswith(".json"):
            continue
        ruta = os.path.join(tablon_dir, nombre)
        if not os.path.isfile(ruta):
            continue
        with open(ruta, encoding="utf-8") as f:
            obj = json.loads(f.read())
        if obj.get("tipo") == "pregunta":
            preguntas[obj["id"]] = obj
        elif obj.get("tipo") == "respuesta":
            respuestas[obj["id"]] = obj
    return preguntas, respuestas


def leer_pendientes(tablon_dir, hoy=None):
    """Preguntas sin respuesta y no caducadas, ordenadas por fecha."""
    dia = _hoy(hoy)
    preguntas, respuestas = _cargar(tablon_dir)
    respondidas = {r["id_pregunta"] for r in respuestas.values()}
    pendientes = [
        p for p in preguntas.values()
        if p["id"] not in respondidas
        and date.fromisoformat(p["caducidad"]) >= dia
    ]
    return sorted(pendientes, key=lambda p: (p["fecha"], p["id"]))


def _hashes_en_disco(directorios):
    """sha256 de los archivos (<= 5 MB) bajo los directorios dados."""
    hashes = set()
    for base in directorios:
        if not base or not os.path.isdir(base):
            continue
        for raiz, dirs, archivos in os.walk(base):
            dirs[:] = [d for d in dirs if not d.startswith(".")]
            for nombre in sorted(archivos):
                ruta = os.path.join(raiz, nombre)
                try:
                    if os.path.getsize(ruta) > _MAX_HASH_BYTES:
                        continue
                    h = hashlib.sha256()
                    with open(ruta, "rb") as f:
                        for bloque in iter(lambda: f.read(65536), b""):
                            h.update(bloque)
                    hashes.add(h.hexdigest())
                except OSError:
                    continue
    return hashes


def verificar(tablon_dir, buscar_en=(), hoy=None):
    """Verifica el tablón. Devuelve un dict con el veredicto.

    ok es False si: alguna respuesta es huérfana (cita una pregunta que
    no existe), algún hash citado no existe en disco (NO_VERIFICADO), o
    algún mensaje en disco contiene una credencial/correo.
    Las caducadas se marcan pero no rompen la verificación: la caducidad
    es ciclo de vida, no corrupción.
    """
    dia = _hoy(hoy)
    preguntas, respuestas = _cargar(tablon_dir)

    huerfanas = sorted(
        r["id"] for r in respuestas.values() if r["id_pregunta"] not in preguntas
    )

    con_credenciales = []
    for coleccion in (preguntas, respuestas):
        for mensaje_id, obj in coleccion.items():
            for campo, valor in obj.items():
                if isinstance(valor, str):
                    hallados = escanear_credenciales(valor)
                    if hallados:
                        con_credenciales.append(
                            {"id": mensaje_id, "campo": campo,
                             "patrones": hallados}
                        )

    conocidos = _hashes_en_disco([tablon_dir] + list(buscar_en))
    hashes_no_verificados = []
    for coleccion, campo in ((preguntas, "contexto_hash"),
                             (respuestas, "evidencia_hash")):
        for mensaje_id, obj in coleccion.items():
            if obj.get(campo) not in conocidos:
                hashes_no_verificados.append(
                    {"id": mensaje_id, "campo": campo,
                     "hash": obj.get(campo), "estado": "NO_VERIFICADO"}
                )

    caducadas = sorted(
        p["id"] for p in preguntas.values()
        if date.fromisoformat(p["caducidad"]) < dia
        and p["id"] not in {r["id_pregunta"] for r in respuestas.values()}
    )

    ok = not huerfanas and not hashes_no_verificados and not con_credenciales
    return {
        "ok": ok,
        "preguntas": len(preguntas),
        "respuestas": len(respuestas),
        "pendientes": len(leer_pendientes(tablon_dir, hoy=dia)),
        "huerfanas": huerfanas,
        "hashes_no_verificados": hashes_no_verificados,
        "caducadas": caducadas,
        "con_credenciales": con_credenciales,
    }
