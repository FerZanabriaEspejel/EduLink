import "./baldor_preliminares.css"; // Importamos su CSS dedicado

export const preliminares = {
  id: "baldor-preliminares",
  title: "Preliminares",
  description: "Concepto de número en pueblos primitivos, carácter del álgebra, notación algebraica y fórmulas.",
  theory: 
  
    <div class="preliminares-container">
      
      <h3 class="section-title">CONCEPTO DE NÚMERO EN LOS PUEBLOS PRIMITIVOS (25,000-5,000 A. C.)</h3>
      <p>
        Medir y contar fueron las primeras actividades matemáticas del hombre primitivo. Haciendo marcas en los troncos de los árboles lograban, estos primeros pueblos, la medición del tiempo y el conteo del número de animales que poseían; así surgió la <strong>Aritmética</strong>.
      </p>
      <p>
        El origen del <strong>Álgebra</strong> es posterior. Pasaron cientos de siglos para que el hombre alcanzara un concepto abstracto del número, base indispensable para la formación de la ciencia algebraica.
      </p>

      <hr class="divider" />

      <h3 class="section-title">1. ÁLGEBRA</h3>
      <p>
        Álgebra es la rama de la Matemática que estudia la cantidad considerada del modo más general posible.
      </p>

      <hr class="divider" />

      <h3 class="section-title">2. CARÁCTER DEL ÁLGEBRA Y SU DIFERENCIA CON LA ARITMÉTICA</h3>
      <p>El concepto de la cantidad en Álgebra es mucho más amplio que en Aritmética.</p>
      <ul class="styled-list">
        <li>
          <strong>En Aritmética:</strong> Las cantidades se representan por números y éstos expresan valores determinados. Así, <code>20</code> expresa un solo valor: veinte; para expresar un valor mayor o menor que éste habrá que escribir un número distinto de 20.
        </li>
        <li>
          <strong>En Álgebra:</strong> Para lograr la generalización, las cantidades se representan por medio de letras, las cuales pueden representar todos los valores. Así, <em>a</em> representa el valor que nosotros le asignemos, y por tanto puede representar 20 o más de 20 o menos de 20, a nuestra elección.
        </li>
      </ul>

      <hr class="divider" />

      <h3 class="section-title">3. NOTACIÓN ALGEBRAICA</h3>
      <p>Los símbolos usados en Álgebra para representar las cantidades son los <strong>números</strong> y las <strong>letras</strong>.</p>
      <ul class="styled-list">
        <li>
          <strong>Los números:</strong> Se emplean para representar cantidades conocidas y determinadas.
        </li>
        <li>
          <strong>Las letras:</strong> Se emplean para representar toda clase de cantidades, ya sean conocidas o desconocidas.
          <ul class="sub-list">
            <li>Las cantidades conocidas se expresan por las primeras letras del alfabeto: <em>a, b, c, d...</em></li>
            <li>Las cantidades desconocidas se representan por las últimas letras del alfabeto: <em>u, v, w, x, y, z.</em></li>
          </ul>
        </li>
      </ul>
      <p>
        Una misma letra puede representar distintos valores diferenciándolos por medio de comillas (por ejemplo: <em>a', a'', a'''</em>, leídas <em>a prima, a segunda, a tercera</em>) o por medio de subíndices (por ejemplo: <em>a₁, a₂, a₃</em>, leídas <em>a subuno, a subdos, a subtres</em>).
      </p>

      <hr class="divider" />

      <h3 class="section-title">4. FÓRMULAS</h3>
      <p>
        Consecuencia de la generalización que implica la representación de las cantidades por medio de letras son las <strong>fórmulas algebraicas</strong>. Una fórmula algebraica es la representación, por medio de letras, de una regla o de un principio general.
      </p>
      
      <p>
        Así, la Geometría enseña que el área de un rectángulo es igual al producto de su base por su altura:
      </p>

      <div class="formula-display">
        Área (A) = base (b) × altura (h) &nbsp;⇒&nbsp; A = b × h
      </div>

      <div class="example-card">
        <p><strong>Ejemplo 1:</strong> Si la base de un rectángulo es 3 m y su altura 2 m, su área será:</p>
        <p><code>A = b × h = 3 m × 2 m = 6 m²</code></p>
      </div>

      <div class="example-card">
        <p><strong>Ejemplo 2:</strong> El área de otro rectángulo cuya base fuera 8 m y su altura 3.5 m sería:</p>
        <p><code>A = b × h = 8 m × 3.5 m = 28 m²</code></p>
      </div>

    </div>
  ,
  exercises: [
    {
      id: 1,
      question: "¿Cuál es la principal diferencia entre el concepto de cantidad en Aritmética y en Álgebra?",
      options: [
        "En aritmética se usan letras y en álgebra sólo números enteros.",
        "En aritmética los números expresan valores determinados, mientras que en álgebra las letras generalizan los valores.",
        "No hay diferencia, ambas emplean exclusivamente números.",
        "El álgebra utiliza exclusivamente letras minúsculas sin ningún valor numérico."
      ],
      correctIndex: 1,
      explanation: "La aritmética maneja valores fijos mediante números, mientras que el álgebra utiliza letras para generalizar y representar múltiples valores a nuestra elección."
    },
    {
      id: 2,
      question: "¿Cuáles fueron las primeras actividades matemáticas del hombre primitivo que dieron origen a la aritmética?",
      options: [
        "Resolver ecuaciones de segundo grado.",
        "Medir y contar mediante marcas en troncos de árboles.",
        "Construir fórmulas geométricas abstractas.",
        "Definir matrices y determinantes."
      ],
      correctIndex: 1,
      explanation: "El hombre primitivo medía el tiempo y contaba animales haciendo marcas en los troncos, dando origen a la aritmética."
    },
    {
      id: 3,
      question: "Un hombre cobra $130, paga una deuda de $80 y luego hace compras por valor de $95. ¿Cuánto tiene algebraicamente?",
      options: [
        "Tiene +$45",
        "Tiene -$45",
        "Tiene +$50",
        "Tiene -$95"
      ],
      correctIndex: 1,
      explanation: "Teniendo $130, paga $80 quedándose con $50. Al gastar $95, queda con un déficit de $45, expresado como -$45."
    },
    {
      id: 4,
      question: "[NOTACIÓN] ¿Qué letras del alfabeto se emplean tradicionalmente en el álgebra para representar cantidades conocidas o determinadas?",
      options: [
        "Las últimas letras: u, v, w, x, y, z",
        "Las primeras letras: a, b, c, d",
        "Únicamente números enteros positivos",
        "Las letras griegas alfa y beta"
      ],
      correctIndex: 1,
      explanation: "Por convención en la notación algebraica, las cantidades conocidas se expresan con las primeras letras del alfabeto (a, b, c, d...)."
    },
    {
      id: 5,
      question: "[NOTACIÓN] ¿Cómo se leen y qué representan los símbolos a', a'', a''' en el álgebra?",
      options: [
        "Se leen a prima, a segunda, a tercera, y sirven para diferenciar distintos valores de una misma letra.",
        "Se leen a al cuadrado, a al cubo y a a la cuarta, indicando potencias.",
        "Representan tres variables completamente independientes entre sí.",
        "Indican derivadas sucesivas de una función."
      ],
      correctIndex: 0,
      explanation: "Las comillas se utilizan para diferenciar distintos valores asignados a una misma letra, leyéndose a prima, a segunda, a tercera."
    },
    {
      id: 6,
      question: "[NOTACIÓN] ¿Qué letras del alfabeto se emplean por regla general en álgebra para representar cantidades desconocidas o incógnitas?",
      options: [
        "Las primeras letras: a, b, c, d",
        "Las vocales únicamente",
        "Las últimas letras del alfabeto: u, v, w, x, y, z",
        "Cualquier símbolo gráfico sin importar el alfabeto"
      ],
      correctIndex: 2,
      explanation: "Las cantidades desconocidas o incógnitas se representan habitualmente con las últimas letras del alfabeto (u, v, w, x, y, z)."
    },
    {
      id: 7,
      question: "[FÓRMULAS] Si la fórmula del área de un rectángulo es A = b × h, ¿cuál es el área si la base mide 5 m y la altura mide 4 m?",
      options: [
        "9 m²",
        "20 m²",
        "10 m²",
        "18 m²"
      ],
      correctIndex: 1,
      explanation: "Sustituyendo los valores en la fórmula: A = 5 m × 4 m = 20 m²."
    },
    {
      id: 8,
      question: "[FÓRMULAS] ¿Qué es una fórmula algebraica según los principios preliminares del álgebra?",
      options: [
        "Una operación aritmética exclusiva con números primos.",
        "La representación, por medio de letras, de una regla o de un principio general.",
        "Una tabla de datos estadísticos desordenados.",
        "Una ecuación sin solución numérica posible."
      ],
      correctIndex: 1,
      explanation: "Una fórmula algebraica es precisamente la representación mediante letras de una regla general aplicable a cualquier caso particular."
    },
    {
      id: 9,
      question: "¿Qué utilidad tienen los subíndices en la notación algebraica (por ejemplo: a₁, a₂, a₃)?",
      options: [
        "Indicar operaciones de división entre las variables.",
        "Representar exponentes fraccionarios.",
        "Diferenciar distintos valores o elementos de una misma letra de forma ordenada (subuno, subdos, subtres).",
        "Señalar el número de términos de un polinomio."
      ],
      correctIndex: 2,
      explanation: "Los subíndices se utilizan para diferenciar distintos valores de una misma letra (ej. a subuno, a subdos) manteniendo un orden claro."
    },
    {
      id: 10,
      question: "Si en un problema algebraico se le asigna a la letra 'a' un valor determinado de 20, ¿puede dicha letra representar otro valor distinto dentro del mismo problema?",
      options: [
        "Sí, puede cambiar de valor en cualquier momento del cálculo.",
        "No, una vez asignado un valor a una letra en un problema, no puede representar otro valor distinto en el mismo problema.",
        "Depende exclusivamente de si el número es par o impar.",
        "Sí, siempre y cuando se le añadan subíndices nuevos."
      ],
      correctIndex: 1,
      explanation: "Conviene advertir que cuando en un problema asignamos a una letra un valor determinado, esa letra no puede representar, en el mismo problema, otro valor distinto."
    }
  ]
};