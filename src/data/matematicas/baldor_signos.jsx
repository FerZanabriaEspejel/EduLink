import "./baldor_signos.css";

export const baldorSignos = {
  id: "baldor-signos-y-coeficientes",
  title: "5 al 9. Signos, Operaciones, Coeficientes y Agrupación",
  description: "Estudio detallado de los signos de operación, relación y agrupación, así como los coeficientes y exponentes en el Álgebra de Baldor.",
  theory: 
    <div className="preliminares-container">
      
      <h3 className="section-title">5. SIGNOS DEL ÁLGEBRA</h3>
      <p>
        Los signos empleados en Álgebra son de tres clases: <strong>Signos de Operación</strong>, <strong>Signos de Relación</strong> y <strong>Signos de Agrupación</strong>.
      </p>

      <hr className="divider" />

      <h3 className="section-title">6. SIGNOS DE OPERACIÓN</h3>
      <p>
        En Álgebra se verifican con las cantidades las mismas operaciones que en Aritmética: <strong>Suma, Resta, Multiplicación, División, Elevación a Potencia y Extracción de Raíces</strong>, que se indican con los signos siguientes:
      </p>
      
      <ul className="styled-list">
        <li>
          <strong>El Signo de la Suma es +</strong>, que se lee <em>más</em>. Así, <code>a + b</code> se lee "a más b".
        </li>
        <li>
          <strong>El Signo de la Resta es -</strong>, que se lee <em>menos</em>. Así, <code>a - b</code> se lee "a menos b".
        </li>
        <li>
          <strong>El Signo de la Multiplicación es ×</strong>, que se lee <em>multiplicado por</em>. Así, <code>a × b</code> se lee "a multiplicado por b".
          <p style={{ marginTop: "5px" }}>
            En lugar del signo × suele emplearse un punto entre los factores y también se indica la multiplicación colocando los factores entre paréntesis. Así, <code>a · b</code> y <code>(a)(b)</code> equivalen a <code>a × b</code>.
          </p>
          <p>
            Entre factores literales o entre un factor numérico y uno literal el signo de multiplicación <strong>suele omitirse</strong>. Así, <code>abc</code> equivale a <code>a × b × c</code>; <code>5xy</code> equivale a <code>5 × x × y</code>.
          </p>
        </li>
        <li>
          <strong>El Signo de la División es ÷</strong>, que se lee <em>dividido entre</em>. Así, <code>a ÷ b</code> se lee "a dividido entre b". También se indica la división separando el dividendo y el divisor por una raya horizontal. Así, <code>m/n</code> equivale a <code>m ÷ n</code>.
        </li>
        <li>
          <strong>El Signo de la Elevación a Potencia es el exponente</strong>, que es un número pequeño colocado arriba y a la derecha de una cantidad, el cual indica las veces que dicha cantidad, llamada <em>base</em>, se toma como factor. Así, <code>a³ = a · a · a</code>; <code>b⁶ = b · b · b · b · b · b</code>.
          <p style={{ marginTop: "5px" }}>
            Cuando una letra no tiene exponente, su exponente es la unidad. Así, <code>a</code> equivale a <code>a¹</code>; <code>mnx</code> equivale a <code>m¹n¹x¹</code>.
          </p>
        </li>
        <li>
          <strong>El Signo de Raíz es √</strong>, llamado signo radical, y bajo este signo se coloca la cantidad a la cual se le extrae la raíz. Así, <code>√a</code> equivale a <em>raíz cuadrada de a</em>; <code>∛b</code> equivale a <em>raíz cúbica de b</em>.
        </li>
      </ul>

      <hr className="divider" />

      <h3 className="section-title">7. COEFICIENTE</h3>
      <p>
        En el producto de dos factores, cualquiera de los factores es llamado <strong>coeficiente</strong> del otro factor.
      </p>
      <p>
        Así, en el producto <code>3a</code> el factor 3 es coeficiente del factor <em>a</em> e indica que el factor <em>a</em> se toma como sumando tres veces, o sea <code>3a = a + a + a</code>; en el producto <code>5b</code>, el factor 5 es coeficiente de <em>b</em>. Estos son <strong>coeficientes numéricos</strong>.
      </p>
      <p>
        En el producto <code>ab</code>, el factor <em>a</em> es coeficiente del factor <em>b</em>, e indica que el factor <em>b</em> se toma como sumando <em>a</em> veces. Este es un <strong>coeficiente literal</strong>.
      </p>
      <p>
        Cuando una cantidad no tiene coeficiente numérico, su coeficiente es <strong>la unidad</strong>. Así, <code>b</code> equivale a <code>1b</code>; <code>abc</code> equivale a <code>1abc</code>.
      </p>

      <hr className="divider" />

      <h3 className="section-title">8. SIGNOS DE RELACIÓN</h3>
      <p>Se emplean estos signos para indicar la relación que existe entre dos cantidades. Los principales son:</p>
      <ul className="styled-list">
        <li><strong>=</strong>, que se lee <em>igual a</em>. Así, <code>a = b</code> se lee "a igual a b".</li>
        <li><strong>&gt;</strong>, que se lee <em>mayor que</em>. Así, <code>x + y &gt; m</code> se lee "x + y mayor que m".</li>
        <li><strong>&lt;</strong>, que se lee <em>menor que</em>. Así, <code>a &lt; b + c</code> se lee "a menor que b + c".</li>
      </ul>

      <hr className="divider" />

      <h3 className="section-title">9. SIGNOS DE AGRUPACIÓN</h3>
      <p>
        Los signos de agrupación son: el paréntesis ordinario <strong>( )</strong>, el paréntesis angular o corchete <strong>[ ]</strong>, las llaves <strong>{ }</strong> y la barra o vínculo <strong>¯</strong>.
      </p>
      <p>
        Estos signos indican que la operación colocada entre ellos debe efectuarse primero. 
      </p>
      
      <div className="example-card">
        <p><strong>Ejemplo de uso:</strong></p>
        <p><code>(a + b)c</code> indica que el resultado de la suma de <em>a</em> y <em>b</em> debe multiplicarse por <em>c</em>.</p>
        <p><code>[a - b]m</code> indica que la diferencia entre <em>a</em> y <em>b</em> debe multiplicarse por <em>m</em>.</p>
      </div>

    </div>
  ,
  exercises: [
    {
      id: 1,
      question: "¿Cómo se clasifican los signos empleados en el Álgebra según el texto de Baldor?",
      options: [
        "Signos positivos, negativos y neutros",
        "Signos de Operación, Signos de Relación y Signos de Agrupación",
        "Signos numéricos, literales y exponenciales",
        "Signos aritméticos y geométricos"
      ],
      correctIndex: 1,
      explanation: "El texto establece claramente que los signos empleados en Álgebra son de tres clases: Signos de Operación, Signos de Relación y Signos de Agrupación."
    },
    {
      id: 2,
      question: "En la multiplicación algebraica, ¿de qué otra forma se puede indicar el producto de dos factores a y b sin usar el signo tradicional (×)?",
      options: [
        "Colocando un punto entre ellos (a·b) o escribiéndolos entre paréntesis (a)(b)",
        "Separándolos obligatoriamente con una barra horizontal",
        "Elevándolos al exponente cero",
        "Convirtiéndolos en un signo de relación (=)"
      ],
      correctIndex: 0,
      explanation: "El producto se puede indicar mediante un punto (a·b), entre paréntesis ((a)(b)), o bien omitiendo el signo entre factores literales (ab)."
    },
    {
      id: 3,
      question: "¿Qué representa el exponente en una cantidad algebraica (por ejemplo, en a³)?",
      options: [
        "El coeficiente numérico que multiplica a la base",
        "Las veces que la cantidad llamada base se toma como factor",
        "La cantidad de veces que se debe sumar la base consigo misma",
        "El orden jerárquico de los signos de agrupación"
      ],
      correctIndex: 1,
      explanation: "El exponente es un número pequeño que indica las veces que dicha cantidad (base) se toma como factor (ej. a³ = a · a · a)."
    },
    {
      id: 4,
      question: "Si una letra o variable no tiene un exponente escrito visible (como en la letra 'a'), ¿cuál es el valor de su exponente por convención?",
      options: [
        "Cero (0)",
        "Dos (2)",
        "La unidad (1)",
        "El infinito"
      ],
      correctIndex: 2,
      explanation: "Cuando una letra no tiene exponente escrito, su exponente implícito es la unidad (a equivale a a¹)."
    },
    {
      id: 5,
      question: "En el producto algebraico '3a', ¿qué papel cumple el número 3?",
      options: [
        "Es un exponente de la base a",
        "Es un coeficiente numérico que indica que a se toma como sumando tres veces",
        "Es un signo de relación de desigualdad",
        "Es un factor literal independiente"
      ],
      correctIndex: 1,
      explanation: "El 3 es un coeficiente numérico e indica que 3a = a + a + a."
    },
    {
      id: 6,
      question: "Cuando una cantidad algebraica no tiene escrito un coeficiente numérico (por ejemplo, 'b' o 'abc'), ¿cuál es su coeficiente implícito?",
      options: [
        "Cero",
        "La unidad (1)",
        "Diez",
        "No tiene coeficiente"
      ],
      correctIndex: 1,
      explanation: "Por regla general, cuando una cantidad no tiene coeficiente numérico explícito, su coeficiente es la unidad (b equivale a 1b)."
    },
    {
      id: 7,
      question: "¿Qué indica el signo de relación '&gt;' en una expresión algebraica?",
      options: [
        "Igual a",
        "Menor que",
        "Mayor que",
        "División exacta"
      ],
      correctIndex: 2,
      explanation: "El símbolo '&gt;' pertenece a los signos de relación y se lee estrictamente como 'mayor que'."
    },
    {
      id: 8,
      question: "¿Cuáles son los cuatro principales signos de agrupación utilizados en el Álgebra?",
      options: [
        "Suma, resta, multiplicación y división",
        "Paréntesis ordinario ( ), corchetes [ ], llaves { } y la barra o vínculo ¯",
        "Radicales, exponentes, bases y coeficientes",
        "Igual, mayor que, menor que y distinto"
      ],
      correctIndex: 1,
      explanation: "Los signos de agrupación oficiales son el paréntesis ( ), el corchete [ ], las llaves { } y la barra o vínculo."
    },
    {
      id: 9,
      question: "¿Qué orden o propósito cumplen los signos de agrupación en una operación algebraica?",
      options: [
        "Indican que la operación colocada entre ellos debe efectuarse primero",
        "Sirven exclusivamente para indicar coeficientes literales",
        "Sustituyen por completo a los signos de operación de la aritmética",
        "Transforman automáticamente cualquier potencia en una raíz"
      ],
      correctIndex: 0,
      explanation: "Los signos de agrupación señalan prioridad, indicando que las operaciones contenidas en su interior deben realizarse primero."
    },
    {
      id: 10,
      question: "¿Cómo se interpreta la expresión algebraica `[a - b]m` según las reglas de agrupación y operación?",
      options: [
        "La suma de a y b multiplicada por m",
        "La diferencia entre a y b debe multiplicarse por m",
        "La división de a entre b elevada a la potencia m",
        "El producto de a por b dividido entre m"
      ],
      correctIndex: 1,
      explanation: "Los corchetes agrupan la diferencia (a - b) indicando que el resultado de esa resta debe multiplicarse por m."
    }
  ]
};