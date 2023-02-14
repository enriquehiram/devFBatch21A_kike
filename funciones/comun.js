// parametro
// function name(a, b) {}

// argumento
// name(3, 8);

// Las funciones, siempre retornan un valor. Por defecto es "undefined"
// Buena practica: Toda funcion, debe realizar una cosa especifica
// y retornar un valor
function sumTwoNumbers(a = 20, b = 10) {
  let result = a + b;
  return result;
}

console.log(sumTwoNumbers());
