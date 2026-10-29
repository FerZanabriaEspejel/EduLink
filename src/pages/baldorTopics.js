export const baldorTopics = [
  {
    id: "introduccion-algebra",
    title: "1. Conceptos Fundamentales del Álgebra",
    description: "Notación algebraica, variables, constantes y expresión de términos.",
    theory: `
      El Álgebra es la rama de la Matemática que estudia la cantidad considerada del modo más general posible.
      
      • Término Algebraico: Es una expresión que consta de cuatro elementos: signo, coeficiente, parte literal y exponente.
        Ejemplo: en -5x², el signo es (-), el coeficiente es (5), la parte literal es (x) y el exponente es (2).
      • Grado de un término: Puede ser absoluto o con relación a una letra.
    `,
    exercises: [
      {
        id: 1,
        question: "¿Cuál es el coeficiente numérico en el término -7a²b³?",
        options: ["7", "-7", "2", "3"],
        correctIndex: 1,
        explanation: "El coeficiente numérico incluye el signo que acompaña a la parte literal. Por tanto, es -7."
      },
      {
        id: 2,
        question: "¿Qué elemento representa la variable o incógnita en una expresión algebraica?",
        options: ["El signo", "El coeficiente", "La parte literal", "El exponente"],
        correctIndex: 2,
        explanation: "La parte literal (las letras) representa las cantidades desconocidas o variables."
      }
    ]
  },
  {
    id: "terminos-semejantes",
    title: "2. Reducción de Términos Semejantes",
    description: "Simplificación de expresiones sumando o restando términos con las mismas letras y exponentes.",
    theory: `
      Dos o más términos son semejantes cuando tienen la misma parte literal, es decir, las mismas letras afectadas de los mismos exponentes.
      
      Reglas para reducir:
      1. Se suman o restan los coeficientes numéricos.
      2. Se conserva la misma parte literal.
      
      Ejemplo: 3a + 5a = 8a | 7x² - 3x² = 4x²
    `,
    exercises: [
      {
        id: 1,
        question: "Reduce la siguiente expresión: 5x + 3x - 2x",
        options: ["10x", "6x", "6", "8x²"],
        correctIndex: 1,
        explanation: "(5 + 3 - 2)x = 6x."
      },
      {
        id: 2,
        question: "Al reducir 4a²b - 9a²b, ¿cuál es el resultado?",
        options: ["-5a²b", "5a²b", "-13a²b", "5ab"],
        correctIndex: 0,
        explanation: "4 - 9 = -5, conservando la misma parte literal a²b, da -5a²b."
      }
    ]
  },
  {
    id: "operaciones-basicas",
    title: "3. Operaciones Básicas (Suma y Resta)",
    description: "Suma y resta de polinomios aplicando ley de signos y paréntesis.",
    theory: `
      Para sumar polinomios, se escriben unos a continuación de otros con sus propios signos y se reducen los términos semejantes.
      
      Para restar, se cambia el signo a todos los términos del sustraendo y luego se reducen los términos semejantes.
      
      Ley de Signos (Suma):
      • Signos iguales se suman y mantienen el signo.
      • Signos diferentes se restan y se conserva el signo del número con mayor valor absoluto.
    `,
    exercises: [
      {
        id: 1,
        question: "Resta (3x + 2) de (7x + 5):",
        options: ["4x + 3", "10x + 7", "4x - 3", "-4x - 3"],
        correctIndex: 0,
        explanation: "(7x + 5) - (3x + 2) = 7x + 5 - 3x - 2 = 4x + 3."
      }
    ]
  },
  {
    id: "factorizacion",
    title: "4. Factorización (Caso I y II)",
    description: "Factor común monomio y factor común por agrupación de términos.",
    theory: `
      Factorizar es descomponer una expresión algebraica en el producto de sus factores.
      
      • Caso I (Factor Común Monomio): Se busca el Máximo Común Divisor (MCD) de los coeficientes y las letras comunes con el menor exponente.
        Ejemplo: a² + ab = a(a + b)
    `,
    exercises: [
      {
        id: 1,
        question: "Factoriza la expresión: 6x² + 12x",
        options: ["6(x² + 2x)", "6x(x + 2)", "x(6x + 12)", "12x(x + 1)"],
        correctIndex: 1,
        explanation: "El factor común numérico es 6 y de la letra es x. Por ende, 6x(x + 2)."
      }
    ]
  }
]