import "./baldor_expresiones_terminos.css"; // Importamos su CSS dedicado

export const baldorExpresionesTerminos = {
  id: "baldor-expresiones-y-terminos",
  title: "17 al 20. Expresión Algebraica, Términos y Clases",
  description: "Estudio de las expresiones algebraicas, elementos de un término (nomenclatura, signo, coeficiente, parte literal, grado) y clasificación de términos.",
  theory: 
    <div class="preliminares-container">
      
      <h3 class="section-title">17. EXPRESIÓN ALGEBRAICA</h3>
      <p>
        Es la representación de un símbolo algebraico o de una o más operaciones algebraicas.
      </p>
      <div class="example-card">
        <p><strong>Ejemplos:</strong> <code>a</code>, <code>5x</code>, <code>√(4a)</code>, <code>(a + b)c</code>, <code>(5x - 3y)a</code>.</p>
      </div>

      <hr class="divider" />

      <h3 class="section-title">18. TÉRMINO Y NOMENCLATURA ALGEBRAICA</h3>
      <p>
        <strong>Término</strong> es una expresión algebraica que consta de un solo símbolo o de varios símbolos no separados entre sí por el signo <code>+</code> o <code>-</code>. (Ej. <code>a</code>, <code>3b</code>, <code>2xy</code>, <code>4a / 3x</code>).
      </p>
      <p>
        <strong>Elementos de un término:</strong> Son cuatro: el <em>signo</em>, el <em>coeficiente</em>, la <em>parte literal</em> y el <em>grado</em>.
      </p>
      <ul class="styled-list">
        <li><strong>Signo:</strong> Positivos si van precedidos de <code>+</code> y negativos si van precedidos de <code>-</code>. El signo <code>+</code> suele omitirse delante de los términos positivos (ej. <code>a</code> equivale a <code>+a</code>).</li>
        <li><strong>Coeficiente:</strong> Es uno cualquiera, generalmente el primero, de los factores del término (ej. en <code>5a</code> el coeficiente es 5; en <code>-3a²x³</code> el coeficiente es -3).</li>
        <li><strong>Parte literal:</strong> La constituyen las letras que hay en el término (ej. en <code>5xy</code> es <code>xy</code>).</li>
      </ul>

      <hr class="divider" />

      <h3 class="section-title">19. EL GRADO DE UN TÉRMINO</h3>
      <p>Puede ser de dos clases: <strong>absoluto</strong> y con <strong>relación a una letra</strong>.</p>
      <ul class="styled-list">
        <li><strong>Grado absoluto:</strong> Es la suma de los exponentes de sus factores literales (ej. <code>ab</code> es de 2° grado por 1 + 1; <code>5a⁴b³c²</code> es de 9° grado por 4 + 3 + 2 = 9).</li>
        <li><strong>Grado con relación a una letra:</strong> Es el exponente de dicha letra (ej. en <code>bx³</code> es de 1° grado respecto a <em>b</em> y de 3° grado respecto a <em>x</em>).</li>
      </ul>

      <hr class="divider" />

      <h3 class="section-title">20. CLASES DE TÉRMINOS</h3>
      <ul class="styled-list">
        <li><strong>Entero:</strong> El que no tiene denominador literal (ej. <code>5a</code>, <code>6a⁴b³</code>).</li>
        <li><strong>Fraccionario:</strong> El que tiene denominador literal (ej. <code>2a / 3b</code>).</li>
        <li><strong>Racional:</strong> El que no tiene radical (ej. los anteriores).</li>
        <li><strong>Irracional:</strong> El que tiene radical (ej. <code>√(ab)</code>, <code>3√(b)</code>).</li>
        <li><strong>Homogéneos:</strong> Los que tienen el mismo grado absoluto (ej. <code>4x⁴y</code> y <code>6x²y³</code>, ambos de 5° grado).</li>
        <li><strong>Heterogéneos:</strong> Los de distinto grado absoluto.</li>
      </ul>

    </div>
  ,
  exercises: [
    {
      id: 1,
      question: "¿Cómo se define una expresión algebraica según el Álgebra de Baldor?",
      options: [
        "Un número entero positivo sin letras",
        "La representación de un símbolo algebraico o de una o más operaciones algebraicas",
        "Una línea recta sin origen ni fin",
        "La suma exclusiva de dos cantidades aritméticas"
      ],
      correctIndex: 1,
      explanation: "Una expresión algebraica es la representación de un símbolo algebraico o de una o más operaciones algebraicas."
    },
    {
      id: 2,
      question: "¿Qué es un término algebraico?",
      options: [
        "Una expresión cuyos componentes están separados obligatoriamente por sumas y restas",
        "Una expresión algebraica que consta de un solo símbolo o varios no separados por + o -",
        "Cualquier número irracional con exponente fraccionario",
        "El resultado final de una ecuación de segundo grado"
      ],
      correctIndex: 1,
      explanation: "Un término es una expresión algebraica cuyos componentes no están separados entre sí por los signos + o -."
    },
    {
      id: 3,
      question: "¿Cuáles son los cuatro elementos fundamentales que componen un término algebraico?",
      options: [
        "Base, exponente, radical y cociente",
        "Signo, coeficiente, parte literal y grado",
        "Paréntesis, corchetes, llaves y barra",
        "Numerador, denominador, entero y fraccionario"
      ],
      correctIndex: 1,
      explanation: "Los elementos de un término son cuatro: el signo, el coeficiente, la parte literal y el grado."
    },
    {
      id: 4,
      question: "En el término algebraico -3a²x³, ¿cuál es el coeficiente numérico?",
      options: [
        "a",
        "x",
        "-3",
        "5"
      ],
      correctIndex: 2,
      explanation: "El coeficiente es el factor numérico que encabeza el término, en este caso -3."
    },
    {
      id: 5,
      question: "¿Cómo se determina el grado absoluto de un término algebraico?",
      options: [
        "Multiplicando todos los coeficientes numéricos entre sí",
        "Sumando los exponentes de sus factores literales",
        "Tomando únicamente el exponente de la primera letra del abecedario",
        "Restando el denominador del numerador"
      ],
      correctIndex: 1,
      explanation: "El grado absoluto es la suma de los exponentes de todos sus factores literales."
    },
    {
      id: 6,
      question: "Si tenemos el término 5a⁴b³c², ¿cuál es su grado absoluto?",
      options: [
        "4",
        "7",
        "9",
        "12"
      ],
      correctIndex: 2,
      explanation: "Sumando los exponentes de sus factores literales: 4 + 3 + 2 = 9."
    },
    {
      id: 7,
      question: "¿Qué es un término fraccionario?",
      options: [
        "Aquel que tiene un coeficiente numérico expresado en fracción",
        "Aquel que tiene denominador literal (contiene letras en el denominador)",
        "Aquel que carece por completo de parte literal",
        "Aquel cuyo exponente es negativo"
      ],
      correctIndex: 1,
      explanation: "Un término es fraccionario cuando tiene denominador literal (letras en la parte inferior de la división)."
    },
    {
      id: 8,
      question: "¿Cuándo se dice que dos o más términos son homogéneos?",
      options: [
        "Cuando tienen exactamente el mismo coeficiente numérico y distinto signo",
        "Cuando tienen el mismo grado absoluto",
        "Cuando pertenecen a capítulos diferentes del libro de Baldor",
        "Cuando no tienen parte literal"
      ],
      correctIndex: 1,
      explanation: "Los términos homogéneos son aquellos que comparten el mismo grado absoluto."
    },
    {
      id: 9,
      question: "¿Qué diferencia a un término racional de uno irracional?",
      options: [
        "El término racional tiene radical y el irracional no",
        "El término racional no tiene radical, mientras que el irracional contiene un signo radical",
        "Los términos racionales solo existen en la aritmética",
        "Los irracionales no pueden tener coeficientes negativos"
      ],
      correctIndex: 1,
      explanation: "Un término racional carece de radicales, mientras que el irracional incluye signos de raíz (radicales)."
    },
    {
      id: 10,
      question: "En el término bx³, ¿cuál es su grado con relación a la letra x?",
      options: [
        "Primer grado",
        "Segundo grado",
        "Tercer grado",
        "Cuarto grado"
      ],
      correctIndex: 2,
      explanation: "El grado con relación a una letra es el exponente de dicha letra. En x³, el exponente es 3."
    }
  ]
};