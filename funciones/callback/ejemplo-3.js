const hola = () => {
  setTimeout(() => {
    console.log("Hola");
  }, 1500);
};

const adios = () => {
  return setTimeout(() => {
    console.log("Adios");
  }, 1000);
};

hola();
adios();
// ¿CÒMO RESOLVERIAS ESTO CON CALLBACKS?
// CON AYUDA DE CALLBACKS, CONSIGUE QUE ESTE PROGRAMA SIEMPRE
// SALUDE PRIMERO, SIN IMPORTAR QUE LA FUNCION "ADIOS", SE
// EJECUTE ANTES
