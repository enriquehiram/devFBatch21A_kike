// XHR, se suele utilzar con callbacks.

"use strict";

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// url que falla
const url = "https://pokeapi.co/api/v2/pkemon/pikachu";
// url que tiene èxito
const url2 = "https://pokeapi.co/api/v2/pokemon/squirtle";

function getData(url, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", url, true);

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(JSON.parse(xhttp.responseText), null);
      } else {
        callback(null, "Algo salio mal intente mas tarde");
      }
    }
  };
  xhttp.send();
}

getData(url, (data, error) => {
  console.log(data, error);
  getData(url2, (data2, error2) => {
    console.log(data2, error2);
  });
});
