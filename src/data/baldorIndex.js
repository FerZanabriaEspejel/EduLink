import { preliminares } from "./matematicas/baldor_preliminares.jsx";
import { baldorSignos } from "./matematicas/baldor_signos.jsx";
import { baldorCantidades } from "./matematicas/baldor_cantidades.jsx"; // <-- 1. Importamos el nuevo tema

export const baldorTopics = [
  preliminares,
  baldorSignos,
  baldorCantidades // <-- 2. Lo agregamos al arreglo principal
];