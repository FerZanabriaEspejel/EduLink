import "./baldor_valor_absoluto.css"; // Importamos su CSS dedicado

export const baldorValorAbsoluto = {
  id: "baldor-valor-absoluto-y-aritmeticas",
  title: "14 al 16. Valor Absoluto, Relativo y Representación Gráfica",
  description: "Estudio del valor absoluto y relativo, diferencia entre cantidades aritméticas y algebraicas, y la representación gráfica en la recta numérica.",
  theory: 
    <div class="preliminares-container">
      
      <h3 class="section-title">14. VALOR ABSOLUTO Y RELATIVO</h3>
      <p>
        <strong>Valor absoluto</strong> de una cantidad es el número que representa la cantidad prescindiendo del signo o sentido de la misma.
      </p>
      <p>
        <strong>Valor relativo</strong> es el sentido de la cantidad, representado por su signo (+ o -).
      </p>
      <div class="example-card">
        <p><strong>Ejemplos:</strong></p>
        <p>• El valor absoluto de <code>+$8</code> es <code>$8</code>, y su valor relativo es de haber (expresado por el signo +).</p>
        <p>• El valor absoluto de <code>-$20</code> es <code>$20</code>, y su valor relativo es de deuda (expresado por el signo -).</p>
        <p>• Las cantidades <code>+7°</code> y <code>-7°</code> tienen el mismo valor absoluto (7), pero su valor relativo es opuesto.</p>
      </div>
      <p>
        El valor absoluto de una cantidad algebraica cualquiera se representa colocando el número entre dos líneas verticales. Así, el valor absoluto de <code>+8</code> se representa como <code>|8|</code>.
      </p>

      <hr class="divider" />

      <h3 class="section-title">15. CANTIDADES ARITMÉTICAS Y ALGEBRAICAS</h3>
      <p>
        De lo expuesto se deduce la diferencia fundamental entre ambos tipos de cantidades:
      </p>
      <ul class="styled-list">
        <li>
          <strong>Cantidades Aritméticas:</strong> Son las que expresan solamente el valor absoluto de las cantidades representado por los números, pero <em>no nos dicen el sentido o valor relativo</em>. (Ej. decir que una persona tiene $5 o que el termómetro marca 8° sin especificar más).
        </li>
        <li>
          <strong>Cantidades Algebraicas:</strong> Son las que expresan el valor absoluto de las cantidades y, además, su sentido o valor relativo por medio del signo (+ o -). (Ej. <code>+$5</code>, <code>-$8</code>, <code>+8°</code>, <code>-9°</code>).
        </li>
      </ul>
      <p>
        <strong>Doble aplicación de los signos + y - en Álgebra:</strong><br />
        1. Indicar operaciones de suma y resta (cuando van entre términos o expresiones incluidas en paréntesis, ej. <code>(+8) + (-4)</code>).<br />
        2. Indicar el sentido o condición de las cantidades (cuando van precediendo a un término, ej. <code>-a</code>, <code>+b</code>, <code>+7</code>, <code>-8</code>).
      </p>

      <hr class="divider" />

      <h3 class="section-title">16. REPRESENTACIÓN GRÁFICA DE LA SERIE ALGEBRAICA DE LOS NÚMEROS</h3>
      <p>
        Teniendo en cuenta que el 0 es la ausencia de cantidad, que las cantidades positivas son mayores que 0 y las negativas menores que 0, y que las distancias hacia la derecha o hacia arriba se consideran positivas y hacia la izquierda o hacia abajo negativas, la serie algebraica de los números se representa gráficamente en una recta numérica extendida en ambos sentidos a partir del origen (0), donde los valores crecen positivamente hacia la derecha y decrecen negativamente hacia la izquierda.
      </p>

    </div>
  ,
  exercises: [
    {
      id: 1,
      question: "¿Cómo se define el valor absoluto de una cantidad en el Álgebra de Baldor?",
      options: [
        "El sentido o condición de la cantidad indicado por un signo más o menos",
        "El número que representa la cantidad prescindiendo de su signo o sentido",
        "El resultado de sumar una cantidad positiva con una negativa",
        "La distancia obligatoria entre el origen y el infinito positivo"
      ],
      correctIndex: 1,
      explanation: "El valor absoluto es estrictamente el número que representa la cantidad ignorando su signo o sentido."
    },
    {
      id: 2,
      question: "¿Cómo se representa formalmente el valor absoluto de una cantidad algebraica (por ejemplo, +8)?",
      options: [
        "(8)",
        "[+8]",
        "|8|",
        "{8}"
      ],
      correctIndex: 2,
      explanation: "El valor absoluto se representa colocando el número correspondiente entre dos líneas verticales, como |8|."
    },
    {
      id: 3,
      question: "¿Cuál es la diferencia principal entre las cantidades aritméticas y las algebraicas?",
      options: [
        "Las aritméticas utilizan letras y las algebraicas únicamente números",
        "Las aritméticas solo expresan el valor absoluto sin indicar sentido, mientras que las algebraicas expresan valor absoluto y sentido mediante signos",
        "No existe ninguna diferencia teórica entre ambas",
        "Las algebraicas no pueden representar cantidades negativas bajo ninguna circunstancia"
      ],
      correctIndex: 1,
      explanation: "Las cantidades aritméticas carecen de información sobre su sentido o valor relativo, cosa que las algebraicas sí aportan mediante los signos + y -."
    },
    {
      id: 4,
      question: "Si una persona dice únicamente 'tengo $5', sin especificar más detalles, ¿nos encontramos ante una cantidad de tipo aritmético o algebraico?",
      options: [
        "Una cantidad estrictamente algebraica",
        "Una cantidad aritmética, porque solo da el valor absoluto sin saber si es haber o deuda",
        "Una ecuación de segundo grado",
        "Un número complejo"
      ],
      correctIndex: 1,
      explanation: "Al no especificar si se trata de haber (+) o deuda (-), se trata de una cantidad puramente aritmética."
    },
    {
      id: 5,
      question: "¿En qué casos los signos + y - se utilizan para indicar operaciones de suma o resta en el Álgebra?",
      options: [
        "Cuando van precediendo directamente a un término literal o numérico suelto",
        "Cuando van entre términos o expresiones incluidas en paréntesis (ej. (+8) + (-4))",
        "Cuando se calcula exclusivamente la raíz cuadrada de un número",
        "Nunca se usan para sumar o restar en álgebra"
      ],
      correctIndex: 1,
      explanation: "La doble aplicación se distingue porque cuando indican operaciones de suma o resta, van entre términos incluidos en paréntesis."
    },
    {
      id: 6,
      question: "¿Qué función cumplen los signos + o - cuando preceden a un término (como en -a o +7)?",
      options: [
        "Indican estrictamente las operaciones aritméticas de suma y división",
        "Expresan el sentido positivo o negativo (valor relativo) de la cantidad",
        "Eliminan por completo el valor absoluto del número",
        "Transforman el coeficiente en una incógnita de grado superior"
      ],
      correctIndex: 1,
      explanation: "Cuando preceden a un término sin paréntesis, indican el sentido positivo o negativo de la cantidad."
    },
    {
      id: 7,
      question: "¿Qué tienen en común las cantidades +7° y -7°?",
      options: [
        "Tienen el mismo valor relativo",
        "Tienen exactamente el mismo valor absoluto",
        "Ambas representan grados sobre cero",
        "Su suma da siempre un número positivo"
      ],
      correctIndex: 1,
      explanation: "Ambas tienen el mismo valor absoluto (7), aunque su valor relativo (sobre cero y bajo cero) es completamente opuesto."
    },
    {
      id: 8,
      question: "En la representación gráfica de la serie algebraica de los números (recta numérica), ¿hacia dónde se consideran las distancias positivas?",
      options: [
        "Hacia la izquierda o hacia abajo",
        "Hacia la derecha o hacia arriba del punto de origen",
        "Únicamente en forma circular alrededor del cero",
        "No tienen una dirección espacial definida"
      ],
      correctIndex: 1,
      explanation: "Por convención gráfica, las distancias medidas hacia la derecha o hacia arriba se consideran positivas."
    },
    {
      id: 9,
      question: "¿Qué representa el número 0 en la serie algebraica de los números?",
      options: [
        "El número máximo de la serie numérica",
        "La ausencia de cantidad y el punto de referencia u origen en la recta",
        "Una cantidad negativa de referencia",
        "El coeficiente obligatorio de todas las letras"
      ],
      correctIndex: 1,
      explanation: "El cero representa la ausencia de cantidad y actúa como origen o punto de partida en la representación gráfica."
    },
    {
      id: 10,
      question: "Si dos cantidades como -8 y -11 se comparan, ¿qué se puede afirmar respecto a su valor absoluto y relativo?",
      options: [
        "Tienen distinto valor relativo y mismo valor absoluto",
        "Tienen el mismo valor relativo (grados bajo cero o sentido negativo) y distinto valor absoluto",
        "Tienen valores absolutos idénticos y signos contrarios",
        "Ninguna de las anteriores"
      ],
      correctIndex: 1,
      explanation: "Ambas comparten el mismo valor relativo negativo, pero poseen distinto valor absoluto (8 y 11)."
    }
  ]
};