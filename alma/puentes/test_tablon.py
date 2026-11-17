"""Tests del tablón de preguntas y respuestas (ALMA IV). Test-first:
pregunta -> respuesta -> verificación pasa; huérfana falla; credencial
rechazada; caducada marcada. Solo stdlib.
"""

import hashlib
import json
import os
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import tablon
from tablon import Rechazado

R23_F3 = os.path.expanduser(
    "~/workspace/academico/tejido_2026-11-12/ronda_23/ejecucion_f3")


def _sha_bytes(data):
    return hashlib.sha256(data).hexdigest()


class TestTablon(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.dir = os.path.join(self.tmp.name, "tablon")
        os.makedirs(self.dir)
        # Archivo de evidencia real en disco para citar con hash.
        self.evidencia = os.path.join(self.tmp.name, "evidencia.txt")
        with open(self.evidencia, "w", encoding="utf-8") as f:
            f.write("medición de prueba\n")
        self.hash_evidencia = _sha_bytes("medición de prueba\n".encode("utf-8"))

    def tearDown(self):
        self.tmp.cleanup()

    def _pregunta(self, pid="P-001", fecha="2026-11-16"):
        return tablon.dejar_pregunta(
            self.dir, id=pid, de="nodo_prueba", para_rol="cualquier_nodo",
            pregunta="¿Pregunta de prueba?", contexto_hash=self.hash_evidencia,
            fecha=fecha)

    def test_pregunta_respuesta_verificacion_pasa(self):
        self._pregunta()
        tablon.dejar_respuesta(
            self.dir, id="R-001", id_pregunta="P-001", de="nodo_prueba",
            respuesta="Respuesta con evidencia.", evidencia_hash=self.hash_evidencia,
            nivel="SÉ")
        veredicto = tablon.verificar(self.dir, buscar_en=[self.tmp.name])
        self.assertTrue(veredicto["ok"])
        self.assertEqual(veredicto["preguntas"], 1)
        self.assertEqual(veredicto["respuestas"], 1)
        self.assertEqual(veredicto["huerfanas"], [])
        self.assertEqual(veredicto["hashes_no_verificados"], [])
        self.assertEqual(veredicto["con_credenciales"], [])
        self.assertEqual(tablon.leer_pendientes(self.dir, hoy="2026-11-16"), [])

    def test_respuesta_huerfana_falla(self):
        tablon.dejar_respuesta(
            self.dir, id="R-001", id_pregunta="P-999", de="nodo_prueba",
            respuesta="Respuesta sin pregunta.", evidencia_hash=self.hash_evidencia,
            nivel="CONJETURO")
        veredicto = tablon.verificar(self.dir, buscar_en=[self.tmp.name])
        self.assertFalse(veredicto["ok"])
        self.assertEqual(veredicto["huerfanas"], ["R-001"])

    def test_mensaje_con_credencial_rechazado(self):
        casos = {
            "gsk_": "la clave es gsk_abc123def456",
            "sk-": "la clave es sk-abcdefgh12345678",
            "eyJ": "token eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIn0.firma",
            "correo": "escríbeme a alguien@example.com",
        }
        for nombre, texto in casos.items():
            with self.subTest(patron=nombre):
                with self.assertRaises(Rechazado):
                    tablon.dejar_pregunta(
                        self.dir, id="P-001", de="nodo_prueba",
                        para_rol="cualquier_nodo", pregunta=texto,
                        contexto_hash=self.hash_evidencia, fecha="2026-11-16")
        self.assertEqual(os.listdir(self.dir), [])

    def test_respuesta_con_credencial_rechazada(self):
        self._pregunta()
        with self.assertRaises(Rechazado):
            tablon.dejar_respuesta(
                self.dir, id="R-001", id_pregunta="P-001", de="nodo_prueba",
                respuesta="mira sk-abcdefgh12345678", evidencia_hash=self.hash_evidencia,
                nivel="SÉ")
        self.assertEqual(os.listdir(self.dir), ["P-001.json"])

    def test_caducada_se_marca(self):
        # Fecha 2026-11-16 + 7 días = caducidad 2026-11-23.
        ruta = self._pregunta()
        with open(ruta, encoding="utf-8") as f:
            obj = json.loads(f.read())
        self.assertEqual(obj["caducidad"], "2026-11-23")
        veredicto = tablon.verificar(self.dir, buscar_en=[self.tmp.name],
                                     hoy="2026-11-24")
        self.assertIn("P-001", veredicto["caducadas"])
        self.assertEqual(tablon.leer_pendientes(self.dir, hoy="2026-11-24"), [])
        # Antes de caducar sigue pendiente.
        self.assertEqual(len(tablon.leer_pendientes(self.dir, hoy="2026-11-20")), 1)

    def test_hash_no_verificado(self):
        self._pregunta()
        tablon.dejar_respuesta(
            self.dir, id="R-001", id_pregunta="P-001", de="nodo_prueba",
            respuesta="Respuesta sin archivo detrás.",
            evidencia_hash="0" * 64, nivel="INFIERO")
        veredicto = tablon.verificar(self.dir, buscar_en=[self.tmp.name])
        self.assertFalse(veredicto["ok"])
        self.assertEqual(len(veredicto["hashes_no_verificados"]), 1)
        self.assertEqual(veredicto["hashes_no_verificados"][0]["estado"],
                         "NO_VERIFICADO")

    def test_nivel_invalido_rechazado(self):
        self._pregunta()
        with self.assertRaises(Rechazado):
            tablon.dejar_respuesta(
                self.dir, id="R-001", id_pregunta="P-001", de="nodo_prueba",
                respuesta="Respuesta.", evidencia_hash=self.hash_evidencia,
                nivel="SEGURO")

    def test_id_duplicado_rechazado(self):
        self._pregunta()
        with self.assertRaises(Rechazado):
            self._pregunta()

    def test_tablon_semilla_real(self):
        """El tablón: 2 preguntas reales de r23, 1 respuesta (R-001 a P-002)."""
        semilla = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                               "tablon")
        preguntas, respuestas = tablon._cargar(semilla)
        self.assertEqual(sorted(preguntas), ["P-001", "P-002"])
        self.assertEqual(sorted(respuestas), ["R-001"])
        self.assertEqual(respuestas["R-001"]["id_pregunta"], "P-002")
        self.assertEqual(respuestas["R-001"]["nivel"], "INFIERO")
        self.assertEqual(respuestas["R-001"]["evidencia_hash"],
                         "a44544fcbaee50fa8dc0485a9dae7679e3ff718bb379172bea2e4e9b8befeff0")
        self.assertIn("flow mide 0,0%", preguntas["P-001"]["pregunta"])
        self.assertIn("247.881", preguntas["P-002"]["pregunta"])
        self.assertEqual(preguntas["P-001"]["contexto_hash"],
                         "191783d4a5dffc6fc979936309e38cc2ecb4909ed23cb3aa77b00023ad6fa612")
        self.assertEqual(preguntas["P-002"]["contexto_hash"],
                         "a63d0e6d55b22a0976645c54a7075cbb9ea505e8df338f91188680268d4e1cb5")
        ciclo = os.path.expanduser("~/workspace/alma/ciclo")
        veredicto = tablon.verificar(semilla, buscar_en=[R23_F3, ciclo],
                                     hoy="2026-11-16")
        self.assertTrue(veredicto["ok"], veredicto)
        self.assertEqual(veredicto["preguntas"], 2)
        self.assertEqual(veredicto["respuestas"], 1)
        self.assertEqual(veredicto["pendientes"], 1)
        self.assertEqual(veredicto["hashes_no_verificados"], [])


if __name__ == "__main__":
    unittest.main(verbosity=2)
