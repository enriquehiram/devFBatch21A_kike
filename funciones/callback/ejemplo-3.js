// ¿CÒMO RESOLVERIAS ESTO CON CALLBACKS?
// CON AYUDA DE CALLBACKS, CONSIGUE QUE ESTE PROGRAMA SIEMPRE
// SALUDE PRIMERO, SIN IMPORTAR QUE LA FUNCION "ADIOS", SE
// EJECUTE ANTES
const hola = (otraFuncion) => {
  setTimeout(() => {
    console.log("Hola");
    otraFuncion();
  }, 1500);
};

const adios = () => {
  setTimeout(() => {
    console.log("Adios");
  }, 1000);
};

hola(adios);
