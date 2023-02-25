// async, nos permite convertir una funcion sincrona en asincrona, porque
// todo lo que retorne una funcion async, lo va a retornar como una promesa

const nombre = async () => {
  return "Cinthya";
};

// las funciones async, nos permiten retornar promesas y esperar el resultado de
// otras promesas con la palabra reservada "await"
const saludar = async () => {
  let nombreRecibido = await nombre();
  console.log("Hola " + nombreRecibido + " que bueno que si llegaste");
};

saludar();

// - async puede estar sola, pero await forzosamente necesita de async.
// - puedes tener un async y una n cantidad de awaits por funcion, pero no al reves
