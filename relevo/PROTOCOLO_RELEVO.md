# Protocolo de relevo del especialista

**Idea.** La especialización emerge: un nodo se vuelve bueno en un rol
porque lo repite. El riesgo es que se vuelva insustituible. La solución
no es impedir la especialización: es que cada especialista deje su kit
ANTES de migrar, de forma que otro nodo pueda tomar el rol con el kit en
la mano. La especialización se reproduce, no se hereda.

## Reglas

1. **El kit se escribe antes de migrar, nunca después.** El especialista
   escribe el kit mientras todavía ocupa el rol, con los archivos y los
   fallos frescos. Un kit escrito de memoria, semanas después, es un
   rumor.
2. **El kit cita solo archivos que existen y procedimientos verificados.**
   Cada ruta que el kit nombra debe existir en disco. Cada número que el
   kit afirma (un blob, un HEAD, un conteo) debe estar verificado en el
   log de la última ejecución real. Nada de memoria, nada de "creo que".
3. **El kit trae su propio test.** El sucesor no confía en el kit: lo
   ejecuta. El test verifica que las rutas existen y que los números
   citados coinciden con los logs reales. Si el test falla, el relevo no
   está completo y el especialista no migra.
4. **El kit trae el mapa de fallos del rol.** No solo qué hacer: qué
   salió mal antes, con fecha y ronda. El sucesor hereda los errores
   para no repetirlos, no solo los aciertos.
5. **El relevo se verifica sin tocar lo vivo.** La prueba del sucesor
   es solo lectura: recomputar blobs, releer logs, comprobar el HEAD.
   Ninguna subida, ninguna escritura en lo vivo, forma parte del test
   de relevo.
6. **El kit vive en el suelo, no en la cabeza del especialista.**
   El kit es un archivo en el paquete, con manifiesto de shas. Si el
   especialista desaparece sin dejarlo, el rol se reconstruye desde los
   logs, no desde su memoria.

## Estructura de un kit

| Sección | Contenido |
|---|---|
| Rol | Qué hace el rol, en una frase, y qué NO hace |
| Archivos | Rutas exactas (existentes) que el rol usa y produce |
| Procedimiento | Pasos numerados, con los comandos exactos |
| Pre-condiciones | Qué debe ser verdad antes de lanzar (HEAD, 404, staging) |
| Verificación | Cómo se comprueba el resultado (blob, HEAD, conteo) |
| Fallos | Qué salió mal antes, con ronda y lección |
| Test de relevo | El script que verifica el kit; el sucesor lo corre primero |

## Cómo se ejecuta un relevo

1. El especialista escribe el kit y corre su test (`test_relevo.py`):
   exit 0.
2. El sucesor lee el kit, corre el test por su cuenta: exit 0.
3. El sucesor ejecuta el procedimiento UNA vez en modo verificación
   (solo lectura: recomputa los blobs del último depósito y el HEAD).
   Si todo coincide, el relevo está completo.
4. La primera ejecución real del sucesor se hace con el kit abierto:
   si algo diverge del kit, el sucesor lo anota y el kit se actualiza.
   El kit es vivo: cada relevo lo mejora.

**Kit concreto de referencia:** `relevo/kit_relevo_fase4.md` — el rol
"subidor FASE 4, método (c)", con su test `relevo/test_relevo.py`.

ρ(x) > 0.
