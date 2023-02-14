// Es cuando una funcion, de orden mayor o no, ejecuta otra funcion
// en su interior y se genera un efecto de "llamado de vuelta"

// Ejemplo con funcion de orden mayor
// function otraFuncion() {
//   code...
// }

// function ordenMayor(otraFuncion) {
//   return otraFuncion()
// }

// Ejemplo con funciones comunes
// function otraFuncion() {
//   return code...
// }

// function unaFuncion() {
//   return otraFuncion()
// }

// Una funcion generalista
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

const calculadora = (a, b, operacion) => {
  return operacion(a, b);
};

console.log(calculadora(2, 7, suma));
console.log(calculadora(2, 7, resta));
console.log(calculadora(2, 7, multiplicacion));
console.log(calculadora(2, 7, division));
