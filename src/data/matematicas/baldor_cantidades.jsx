import "./baldor_cantidades.css"; // Importamos su CSS dedicado

export const baldorCantidades = {
  id: "baldor-cantidades-positivas-negativas",
  title: "Puntos 10 al 13",
  description: "Diferencia entre métodos aritméticos y algebraicos, uso de cantidades relativas, elección del sentido positivo y concepto de cero.",
  theory: (
    <div className="preliminares-container">
      
      <h3 className="section-title">10. MODO DE RESOLVER LOS PROBLEMAS EN ARITMÉTICA Y EN ÁLGEBRA</h3>
      <p>
        Para notar la diferencia entre el método aritmético y el algebraico en la resolución de problemas (fundado este último en la notación algebraica y la generalización), consideremos el siguiente ejemplo:
      </p>
      <p><em>Las edades de A y B suman 48 años. Si la edad de B es 5 veces la edad de A, ¿qué edad tiene cada uno?</em></p>

      <div className="example-card">
        <p><strong>Método Aritmético:</strong></p>
        <p>Edad de A + edad de B = 48 años.<br />
           Como la edad de B es 5 veces la de A: <br />
           Edad de A + 5 veces la edad de A = 48 años <br />
           6 veces la edad de A = 48 años <br />
           <strong>Edad de A = 8 años. R.</strong><br />
           <strong>Edad de B = 8 × 5 = 40 años. R.</strong>
        </p>
      </div>

      <div className="example-card">
        <p><strong>Método Algebraico:</strong></p>
        <p>Como la edad de A es desconocida, la representamos por $x$:</p>
        <p>
          Sea <em>x</em> = edad de A.<br />
          Entonces <em>5x</em> = edad de B.<br />
          Como ambas edades suman 48 años: <em>x + 5x = 48</em> o sea <em>6x = 48</em>.<br />
          Despejando: <em>x = 48 / 6 = 8</em> años (Edad de A).<br />
          Por tanto, <em>5x = 8 × 5 = 40</em> años (Edad de B).
        </p>
      </div>

      <hr className="divider" />

      <h3 className="section-title">11. CANTIDADES POSITIVAS Y NEGATIVAS</h3>
      <p>
        En Álgebra, cuando se estudian cantidades que pueden tomarse en dos sentidos opuestos (condición o modo de ser opuestos), se expresa su valor relativo por medio de los signos <strong>+</strong> y <strong>-</strong>.
      </p>
      <ul className="styled-list">
        <li><strong>Cantidades Positivas:</strong> Se antepone el signo + a las cantidades tomadas en un sentido determinado (ej. haber, grados sobre cero, camino a la derecha/arriba, después de Cristo, latitud norte).</li>
        <li><strong>Cantidades Negativas:</strong> Se antepone el signo - a las cantidades tomadas en sentido opuesto (ej. deudas, grados bajo cero, camino a la izquierda/abajo, antes de Cristo, latitud sur).</li>
      </ul>

      <hr className="divider" />

      <h3 className="section-title">12. ELECCIÓN DEL SENTIDO POSITIVO</h3>
      <p>
        La fijación del sentido positivo en cantidades opuestas es <strong>arbitraria</strong> (depende de nuestra voluntad). Una vez fijado el sentido positivo, el sentido opuesto será automáticamente el negativo. No obstante, en la práctica se aceptan generalmente los sentidos positivos convencionales (derecha, arriba, haber, después de Cristo).
      </p>

      <hr className="divider" />

      <h3 className="section-title">13. CERO</h3>
      <p>
        <strong>El cero (0) es la ausencia de cantidad.</strong> Por ejemplo, representar el estado económico de una persona por 0 significa que no tiene haber ni deudas.
      </p>
      <p>
        Las cantidades positivas son mayores que 0 y las negativas menores que 0 (ej. $+3$ es mayor que $0$, mientras que $-3$ es menor que $0$).
      </p>
      <p>
        <strong>Comparación de signos:</strong> De dos cantidades positivas, es mayor la de mayor valor absoluto (ej. $+5$ es mayor que $+3$). En cambio, de dos cantidades negativas, es mayor la de <em>menor valor absoluto</em> (ej. $-3$ es mayor que $-5$; $-4$ es mayor que $-9$).
      </p>

    </div>
  ),
  exercises: [
    {
      id: 1,
      question: "¿Cuál es la principal ventaja metodológica del método algebraico frente al aritmético en la resolución de problemas?",
      options: [
        "Utiliza únicamente números enteros positivos sin variables",
        "Se funda en la notación algebraica y la generalización mediante incógnitas",
        "Evita por completo el uso de operaciones de multiplicación y división",
        "No requiere realizar comprobaciones de resultados"
      ],
      correctIndex: 1,
      explanation: "El método algebraico se apoya en la notación algebraica y letras para representar cantidades desconocidas (incógnitas), facilitando la resolución general."
    },
    {
      id: 2,
      question: "En el problema clásico de las edades donde A y B suman 48 años y B es 5 veces la edad de A, ¿cómo se expresa algebraicamente la ecuación resultante?",
      options: [
        "x + 5 = 48",
        "x + 5x = 48",
        "5x - x = 48",
        "x(5x) = 48"
      ],
      correctIndex: 1,
      explanation: "Si la edad de A es x y la de B es 5x, al sumarlas se obtiene la ecuación x + 5x = 48, es decir, 6x = 48."
    },
    {
      id: 3,
      question: "¿Cómo se representan en álgebra las cantidades que se consideran en sentidos opuestos o de condición contraria?",
      options: [
        "Utilizando exclusivamente letras mayúsculas y minúsculas",
        "Anteponiendo los signos + (para un sentido) y - (para el sentido opuesto)",
        "Multiplicándolas siempre por el factor cero",
        "Empleando únicamente corchetes y llaves"
      ],
      correctIndex: 1,
      explanation: "Se expresan mediante los signos + y -, designando un sentido como positivo y el opuesto como negativo."
    },
    {
      id: 4,
      question: "Si se define convencionalmente que el haber de una persona se representa con el signo +, ¿cómo se debe denotar una deuda de $100?",
      options: [
        "+$100",
        "-$100",
        "0",
        "±$100"
      ],
      correctIndex: 1,
      explanation: "Las deudas representan un sentido opuesto al haber, por lo que se antepone el signo negativo (-$100)."
    },
    {
      id: 5,
      question: "En el estudio de cantidades con sentidos opuestos, ¿cómo se determina cuál debe ser el sentido positivo?",
      options: [
        "Es obligatorio que el sentido positivo sea siempre hacia la izquierda",
        "Es estrictamente fijo por leyes matemáticas universales inalterables",
        "Es arbitrario y depende de nuestra voluntad, aunque en la práctica se usan convenciones",
        "Siempre debe coincidir con el tiempo transcurrido antes de Cristo"
      ],
      correctIndex: 2,
      explanation: "La fijación del sentido positivo es arbitraria y depende de lo que elijamos, aunque por práctica se adoptan ciertos estándares (derecha, arriba, etc.)."
    },
    {
      id: 6,
      question: "¿Cómo se define conceptualmente el número cero (0) en el Álgebra de Baldor?",
      options: [
        "El número entero más grande de la recta numérica",
        "La ausencia de cantidad",
        "Una cantidad negativa de valor absoluto máximo",
        "El coeficiente obligatorio de todas las variables"
      ],
      correctIndex: 1,
      explanation: "El cero representa estrictamente la ausencia de cantidad (por ejemplo, no tener deudas ni haber)."
    },
    {
      id: 7,
      question: "De acuerdo con las reglas de comparación entre números negativos, ¿cuál de las siguientes afirmaciones es correcta?",
      options: [
        "-3 es menor que -5",
        "-9 es mayor que -4",
        "-3 es mayor que -5",
        "-5 es igual a -3"
      ],
      correctIndex: 2,
      explanation: "De dos cantidades negativas, es mayor la que tiene menor valor absoluto. Por ello, -3 es mayor que -5 porque está más cerca del cero."
    },
    {
      id: 8,
      question: "Si el termómetro marca 8 grados bajo cero, ¿cómo se expresa algebraicamente dicha temperatura?",
      options: [
        "+8°",
        "-8°",
        "0°",
        "8°"
      ],
      correctIndex: 1,
      explanation: "Los grados bajo cero se consideran un sentido opuesto a los grados sobre cero, por lo que se representan con el signo menos (-8°)."
    },
    {
      id: 9,
      question: "Si un punto geográfico se encuentra a 45° de longitud este y 15° de latitud sur, ¿cómo se representa con su respectivo signo algebraico?",
      options: [
        "+45° de longitud y +15° de latitud",
        "-45° de longitud y -15° de latitud",
        "+45° de longitud y -15° de latitud",
        "-45° de longitud y +15° de latitud"
      ],
      correctIndex: 2,
      explanation: "La longitud este es positiva (+45°) y la latitud sur es negativa (-15°)."
    },
    {
      id: 10,
      question: "¿Cómo se comparan dos cantidades positivas (por ejemplo, +5 y +3)?",
      options: [
        "Es mayor la que tiene menor valor absoluto (+3)",
        "Es mayor la de mayor valor absoluto (+5)",
        "Ambas son exactamente iguales porque son positivas",
        "El cero siempre es mayor que ambas"
      ],
      correctIndex: 1,
      explanation: "De dos cantidades positivas, es mayor la que posee mayor valor absoluto (+5 es mayor que +3)."
    }
  ]
};