function soyCien() {
  return 100;
}
function soyDoscientos() {
  return 200;
}

// Esperar el resultado de varias funciones
// y hacer una operacion con esos resultados
function sumaDosFunciones(unaFuncion, otraFuncion) {
  const suma = unaFuncion() + otraFuncion();
  return suma;
}

console.log(sumaDosFunciones(soyCien, soyDoscientos));
