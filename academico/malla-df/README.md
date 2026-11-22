# Puente de D_f a una malla de comparaciones

Con semiancho nominal \(u=0,0604\), los 24 nodos centrales de [M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json) admiten exactamente **208 163 634 048 órdenes totales compatibles** con las 196 comparaciones forzadas. Al integrarlos con la partición del conjunto de 30 nodos de [M-66](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/academico/incertidumbre_mediciones.md), una sola comparación exterior decide entre 349 y 350 pares comparables, y entre dos números de órdenes que difieren por un factor de dos. No se sustituyeron las seis filas exteriores por datos de otra versión.

## Qué se entrelaza

[M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json) estudió huecos entre valores consecutivos y dejó publicados los nombres y valores del grupo central. Reutilizamos ese grupo fijo y el escenario de semiancho común \(u=0,0604\), citado en M-72, pero cambiamos la unidad de análisis: del hueco entre vecinos a todos los pares. Dos estimaciones ordenadas \(a<b\) conservan ese orden para cualquier valor dentro de sus intervalos cerrados si \(a+u<b-u\), o sea, si \(b-a>2u\). La igualdad deja los intervalos en contacto y no cuenta. Es un orden parcial por intervalos de igual longitud, no una clasificación total ([Encyclopedia of Mathematics](https://encyclopediaofmath.org/wiki/Interval_order)).

## Demostración computacional

| Semiancho común \(u\) | Separación estricta | Pares comparables | Pares incomparables | Comparables adyacentes |
|---:|---:|---:|---:|---:|
| 0,0554 | > 0,1108 | 202 | 74 | 0 de 23 |
| 0,0604 | > 0,1208 | 196 | 80 | 0 de 23 |
| 0,0654 | > 0,1308 | 188 | 88 | 0 de 23 |

Cálculo propio sobre los 24 valores publicados en [M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json). La cuenta se obtiene de dos maneras: enumerando los 276 pares con aritmética decimal exacta y contando, para cada extremo superior, cuántos extremos inferiores quedan estrictamente a su derecha. A \(u=0,0604\), 82 aristas de la reducción transitiva bastan para reconstruir las 196 comparaciones; el código verifica ese cierre. Como la condición se hace más exigente al aumentar \(u\), las 188 relaciones que pasan en el extremo alto se conservan en toda la banda evaluada; las 74 que no pasan en el extremo bajo no pasan en ningún punto de ella.

Ejemplo sobre [M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json): \(1,76\), \(1,86\) y \(1,89\) dejan huecos adyacentes de \(0,10\) y \(0,03\), ninguno mayor que \(0,1208\). Los extremos, en cambio, están separados por \(0,13\), así que sí se ordenan bajo esa regla. La cadena de solapamientos entre vecinos no convierte al grupo entero en un empate.

## Curva exacta de posibilidades

Cada par de centros distintos pierde su comparación al entrar en \(u=(x_j-x_i)/2\), incluida la igualdad porque los intervalos son cerrados. Los datos de [M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json) producen 79 umbrales positivos y 80 tramos para \(u\geq0\); dos pares de centros idénticos son incomparables desde el comienzo. A \(u=0\) quedan cuatro órdenes de nodos etiquetados, todos con empates si se asignan valores. A partir de \(u=0,37\) inclusive ya no queda ninguna comparación forzada y son posibles los \(24!\) órdenes compatibles.

En la banda evaluada \([0,0554;\,0,0654]\) aparecen solo los siguientes tres regímenes (cálculo sobre [M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json)):

| Tramo dentro de la banda | Pares comparables | Órdenes compatibles |
|---|---:|---:|
| \([0,0554;\,0,0600)\) | 202 | 72 127 139 328 |
| \([0,0600;\,0,0650)\) | 196 | 208 163 634 048 |
| \([0,0650;\,0,0654]\) | 188 | 681 371 604 192 |

Las familias de órdenes están anidadas: la primera contiene exactamente los que son compatibles para todo \(u\) de la banda, y la última los compatibles para al menos un \(u\). La pérdida de seis comparaciones a \(0,0600\) casi triplica los órdenes, por lo que el número de pares no mide por sí solo el margen para reordenar los nodos ([datos de M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json)).

### Compatibilidad y realización sin empates

Un orden compatible es una permutación de los nodos etiquetados que respeta las precedencias forzadas ([Kangas et al., IJCAI 2016](https://ijcai.org/proceedings/2016/0092.pdf)). Para comprobar si una permutación concreta se puede realizar, renumera sus intervalos como \([a_i,b_i]\) en ese orden. La asignación \(y_i=\max_{j\le i}a_j\) realiza un orden no decreciente si y solo si \(a_j\le b_i\) para todo \(j\le i\). Esta condición equivale exactamente a no invertir una precedencia por intervalos estrictamente separados.

Para realizar la misma permutación sin empates, la condición necesaria y suficiente es \(a_j<b_i\) para todo \(j<i\). Si se cumple, elige un \(\epsilon>0\) a lo sumo igual al menor \((b_i-a_j)/(i-j)\) entre esos pares y toma \(y_i=\max_{j\le i}(a_j+(i-j)\epsilon)\); para un solo nodo basta \(y_1=a_1\). Al invertir dos intervalos que apenas se tocan, la desigualdad estricta falla aunque el orden siga siendo compatible.

Por eso, en cada umbral positivo de semiancho común, el conteo sin empates coincide con el conteo compatible justo a la izquierda. Los órdenes nuevos de \(u=0,0600\) o \(u=0,0650\) necesitan algún empate en ese punto; en el interior del tramo siguiente ya pueden realizarse sin empates. En el valor nominal \(0,0604\) coinciden ambos conteos ([datos de M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json)).

La misma prueba permite consultar una permutación sin enumerar los demás órdenes. En la secuencia propuesta de centros \(x_1,\ldots,x_n\), su semiancho mínimo compatible es \(\max(0,\max_{j<i}(x_j-x_i)/2)\), tomando cero para un solo nodo. El extremo inferior es abierto si se exige realizabilidad sin empates, salvo cuando los centros ya están en orden estrictamente creciente; en ese caso el extremo inferior es cero y está incluido. Basta recorrer la secuencia una vez y conservar el máximo anterior; el par que alcanza la mayor diferencia no negativa certifica la frontera.

El verificador cuenta por prefijos: se incorpora un nodo disponible solo cuando ya se colocaron sus predecesores. Agrupa clases con idénticos predecesores y sucesores y multiplica por las etiquetas todavía disponibles en cada clase. Se comprobó toda la curva quitando máximos por el extremo opuesto, sin agrupar clases, y se verificaron ambos tipos de conteo por enumeración de permutaciones en 168 casos pequeños con intervalos heterogéneos y puntos.

## Márgenes distintos por nodo

El [anexo de M-80](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/academico/incertidumbre_mediciones.md) no respalda un semiancho de \(0,05\) para todos los nodos: la evidencia tabulada distingue el tipo de fractal y el número de puntos. La alternativa aquí no consiste en asignar automáticamente esos tamaños, sino en admitir semianchos base \(w_i\geq 0\) elegidos con evidencia para cada entrada y estudiar el escenario \([x_i-tw_i,x_i+tw_i]\), con \(t\geq0\). El perfil de M-72 sigue siendo el escenario común original.

Cuando \(x_i<x_j\) y \(w_i+w_j>0\), el par deja de ser comparable exactamente en \(t=(x_j-x_i)/(w_i+w_j)\). Si ambos márgenes son cero y los centros son distintos, la comparación sobrevive para cualquier escala. Cuando ambos márgenes son cero y los centros son iguales, ningún orden estricto de todos los nodos es realizable. Las fronteras se calculan como números racionales exactos: un límite \(1/3\) no se sustituye por su decimal redondeado.

Para consultar un orden propuesto, exige \(x_j-x_i\leq t(w_j+w_i)\) para cada nodo \(j\) que figure antes del nodo \(i\). El menor \(t\) es el máximo de los cocientes no negativos, o cero si no hay ninguno. Si una desigualdad tiene lado derecho siempre nulo y lado izquierdo positivo, ese orden es imposible a cualquier escala. Para evitar empates se exige desigualdad estricta: una igualdad entre dos puntos fijos lo impide por completo; las demás igualdades se resuelven por encima de la frontera, no en ella. Estas condiciones son suficientes por la construcción por máximos de prefijo de la sección anterior.

Ejemplo sintético: con centros \(0,1,2,3\) y márgenes base \(0,1,2,0\), la comparación entre los centros \(1\) y \(2\) se pierde en \(1/3\). Aunque se aumente indefinidamente la escala, el nodo fijo en \(0\) debe preceder al fijo en \(3\). Por tanto, la última meseta tiene \(4!/2=12\) órdenes compatibles, no \(4!\).

### Márgenes que varían por separado

Si los márgenes \(u_i\) pueden variar independientemente en \([\ell_i,h_i]\), no hace falta recorrer todas las combinaciones para responder dos preguntas extremas. Cada intervalo con semiancho \(\ell_i\) está contenido en el correspondiente a cualquier valor intermedio y, a su vez, en el de semiancho \(h_i\). Toda asignación de valores compatible a una escala estrecha sigue siendo posible con intervalos más amplios. Por eso, los órdenes compatibles para **todos** los escenarios son exactamente los de \((\ell_1,\ldots,\ell_n)\); los compatibles para **algún** escenario son exactamente los de \((h_1,\ldots,h_n)\). La misma conclusión vale si se prohíben empates. Hay que poder usar los dos vectores extremos; si existen restricciones conjuntas que impiden alguno de ellos, sus conteos solo dan cotas para el conjunto permitido.

Para un par con distancia \(d=|x_j-x_i|>0\), la comparación está garantizada si \(d>h_i+h_j\), es imposible bajo la regla estricta si \(d\leq\ell_i+\ell_j\) y depende del escenario en los demás casos. El verificador permite calcular ambos extremos ejecutándolo dos veces con `--escala 1`, una con el vector inferior como `semianchos_base` y otra con el superior.

## Del grupo central a los 30 nodos

- **Entre grupos:** [M-66](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/academico/incertidumbre_mediciones.md) y [M-69](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_16/med_M69.json) registran cuatro grupos de tamaños \(1,4,24,1\), cortados por huecos mayores que \(2u\). Todo par que cruza un corte hereda al menos esa separación: son \(435-276-6=153\) pares entre grupos.
- **Dentro de los grupos:** El central aporta 196 pares comparables. De los seis huecos consecutivos mayores que \(u\) en todo el rango, tres son cortes y tres están en el grupo central ([M-69](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_16/med_M69.json), [M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json)). Así, en el grupo de cuatro, ningún hueco consecutivo supera \(u\) y ninguna suma de dos supera \(2u\). Solo el par de extremos, que suma tres huecos, puede contar. Resultado: \(153+196+[0,1]=[349,350]\); no se afirma cuál de los dos valores es el real.
- **Lectura de la malla:** En el grupo central, una cadena de seis nodos se ordena sin solapamientos, y ocho intervalos pueden coincidir en un mismo punto ([valores de M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json)). Al ensamblar los cuatro bloques, la cadena más larga del conjunto tiene 9 o 10 nodos, y el mayor grupo de solapamiento simultáneo sigue siendo de ocho. Son propiedades diferentes: número total de comparaciones, longitud máxima de cadena y solapamiento máximo no se sustituyen entre sí.

Como todo nodo de un bloque precede a todos los del siguiente, los conteos de órdenes de los bloques se multiplican. Sea \(E=208\,163\,634\,048\) el conteo central derivado de [M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json). Si la separación de extremos en el bloque de cuatro es \(\le 0,1208\), hay 349 pares comparables y \(24E=4\,995\,927\,217\,152\) órdenes compatibles. Si es \(>0,1208\), queda impuesta una de las dos orientaciones de ese par: hay 350 pares y \(12E=2\,497\,963\,608\,576\) órdenes.

Los dos casos sobreviven a los agregados publicados de [M-63 y M-66](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/academico/incertidumbre_mediciones.md). Como testigos matemáticos, antepone los cinco valores bajos al grupo central de M-72 y añade el valor alto al final. Ninguna fila de la tabla es una reconstrucción de las mediciones originales.

| Convención usada para SD | Pares comparables | Cinco valores bajos, en orden | Valor alto |
|---|---:|---|---:|
| Muestral | 349 | 1,0434; 1,3895; 1,4445; 1,4745; 1,5045 | 2,8182 |
| Muestral | 350 | 1,0398; 1,3859; 1,4399; 1,4799; 1,5099 | 2,8146 |
| Poblacional | 349 | 1,0144; 1,3605; 1,4155; 1,4455; 1,4755 | 2,7892 |
| Poblacional | 350 | 1,0108; 1,3569; 1,4109; 1,4509; 1,4809 | 2,7856 |

Los cuatro testigos conservan media, mediana y máximo de los 29 huecos en \(0,0612\), \(0,0300\) y \(0,3461\), los conteos de sensibilidad \(7,6,6\), y los tres cortes en el escenario nominal; la desviación estándar redondea a \(0,3803\) con la convención indicada en cada fila. El anexo de [M-63 y M-66](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/academico/incertidumbre_mediciones.md) no especifica la convención de SD, por eso se exhibe un par de testigos para cada una. Basta conocer la separación de los extremos del bloque real de cuatro para resolver cuál caso se dio; los agregados examinados no la determinan.

## Qué gana un nodo consumidor

El verificador devuelve, además de la malla, una cadena máxima, un grupo de máximo solapamiento y los extremos exactos de la posición posible de cada nodo en un orden total compatible. Si un nodo tiene \(p\) predecesores y \(s\) sucesores en una malla de \(n\) nodos, sus posiciones extremas son \(p+1\) y \(n-s\): los predecesores se pueden colocar primero para alcanzar el mínimo, y los sucesores al final para alcanzar el máximo. En el grupo central, los dos valores registrados como \(2,50\) pueden ocupar posiciones entre 21 y 24; la malla no obliga a ordenar esos dos nodos entre sí ni a declarar un primero único ([M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json)).

La longitud máxima se verificó por dos algoritmos: selección por [extremo superior más temprano](https://www.cs.toronto.edu/~lalla/373s16/notes/ISP.pdf) y programación dinámica sobre las relaciones de precedencia. La anchura se verificó por barrido de extremos y por conteo directo en cada extremo inferior. Además, se contrastaron altura, anchura y rangos de posición enumerando subconjuntos y órdenes compatibles en 144 casos pequeños con intervalos heterogéneos.

## Reutilización

El verificador adjunto consume el JSON público de M-72, un JSON con `{"nodos": [...], "valores": [...]}` o intervalos por nodo. Emite las aristas como pares dirigidos `[menor, mayor]`; se puede quitar `--resumen` para obtenerlas junto con los testigos y rangos de posición. Descarga [la entrada fijada al commit 8051af0](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json) como `med_M72.json` y ejecútalo con Python 3:

```sh
python3 malla-df.py med_M72.json --integrar-m66 --fronteras --posibilidades --resumen \
  --sha256 af47bc1c7b3d8b9739182b7de5fe39095de19864679aec1d43ea9b7bfc02dfd4
```

`--fronteras` devuelve los 80 tramos como intervalos de semiancho cerrados por la izquierda y abiertos por la derecha; `null` significa que no hay extremo superior. Con `--posibilidades`, cada fila incluye el conteo compatible para todo el tramo y el conteo sin empates en su extremo izquierdo. En el interior coinciden ambos conteos. `--limite-estados` permite ajustar el tope de estados por conteo: si se rebasa, el programa informa del límite en lugar de devolver una estimación.

En la salida JSON, los conteos de órdenes se codifican como cadenas de enteros decimales para que los lectores con números de precisión limitada no redondeen valores grandes como \(24!\).

Para consultar un orden concreto, añade `--orden orden.json`, donde `orden.json` es un arreglo con cada nombre de la entrada una vez y en el orden deseado. La salida `umbral_del_orden` da el semiancho de entrada, indica si ese extremo permite una realización sin empate e identifica el par limitante cuando lo hay.

Para una curva con márgenes propios, usa `python3 malla-df.py entrada.json --escala 0 1/3 1 --fronteras --posibilidades --resumen`. `--orden` también opera en esta modalidad. Los tres arreglos se alinean por posición y aceptan números decimales o cadenas que representen fracciones exactas.

```json
{"nodos":["A","B","C","D"],"valores":["0","1","2","3"],"semianchos_base":["0","1","2","0"]}
```

Para intervalos heterogéneos, guarda un JSON de esta forma y ejecuta `python3 malla-df.py entrada.json`. Las cadenas decimales son válidas, y dos intervalos que se tocan siguen siendo incomparables.

```json
{"intervalos":[{"nodo":"A","inferior":"1.7","superior":"1.9"},{"nodo":"B","inferior":"1.85","superior":"2.1"},{"nodo":"C","inferior":"2.0","superior":"2.05"}]}
```

**Alcance.** No se vuelve a medir \(D_f\), no se valida \(u\) por nodo y no se demuestra significancia estadística ni comparabilidad física entre dominios. Los conteos son combinatorios, no probabilidades. Las conclusiones de 30 nodos usan la partición documentada para el valor nominal; la curva completa usa solo los 24 nodos centrales y el semiancho hipotético descrito en [M-72](https://raw.githubusercontent.com/Jaime393/FranBot/8051af0/ronda_17/med_M72.json).
