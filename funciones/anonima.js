// Funciones anonimas autoejecutables//IIFE(Immediately invoked function expressions). Siempre llevan ;
(function () {
  return console.log("Soy anonima, mi pana...");
})();

(() => {
  return console.log("Soy anonima, mi pana... pero en arrow");
})();

// IIFE CON PARAMETROS
// ¿CÒMO LE DOY ARGUMENTOS A UNA IIFE?
// CREAR FUNCION QUE SUME DOS NUMEROS

// Solucion 1. Default params
(function (a = 10, b = 20) {
  let result = a + b;
  console.log(result);
})();

// Solucion 2.
(function (a, b) {
  // let result = a+b;
  return console.log(a + b);
})(1, 2);

// Solucion 3. Arrow function
((a, b) => console.log(a + b))(530, 240);
