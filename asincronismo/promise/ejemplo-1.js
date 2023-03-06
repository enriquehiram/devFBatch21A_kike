// 1. FORMA DE CREAR UNA PROMESA
let x = 10;

const promesa = new Promise((resolve, reject) => {
  if (x === 10) {
    resolve("Hola");
  } else {
    reject("Promesa rechazada...");
  }
});

// 2. FORMA DE CONSUMIR UNA PROMESA
promesa
  .then((response) => {
    console.log(response);
    return 4;
  })
  .then((numero) => {
    console.log("soy un proceso intermedio");
    console.log(numero + "X" + numero + "=" + numero * numero);
  })
  .then(() => {
    console.log("Adios");
  })
  .catch((error) => {
    console.error(error);
  });
