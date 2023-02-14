// La funcion flecha, nos da una sintaxis màs limpia y facil de leer

// Normalmente, se almacenan en constantes o en variables
// En las funciones flecha, no existe el objeto "this",
// por lo tanto, no puedes crear un prototipo con arrow functions
const sumTwoNumbersFullArrowVersion = (a = 20, b = 10) => {
  let result = a + b;
  return result;
};

// Short arrow function
// reglas de sintaxis en arrow functions
// Si mi funcion solo retorna un valor, puedo quitar el return
// explicito, las llaves y hacer uso del return implicito_
const sumTwoNumbers = (a, b) => a + b;
console.log(sumTwoNumbers(20, 9));

// short arrow functions con un parametro
// Si tienes un solo parametro, le puedes quitar los parentesis
const saludar = (nombre) => "Hola " + nombre;
console.log(saludar("Cinthya"));

// Prototipos, creados a partir de una funcion constructora.
// Esto lo puedes comprender, con la teoria del prototype chaining
function Animal() {
  this.especie;
  this.color;
  this.habilidad;
}

// Azucar sintactica. Por detras, es un prototipo
class Animal2 {
  constructor() {
    this.especie;
    this.color;
    this.habilidad;
  }
}
