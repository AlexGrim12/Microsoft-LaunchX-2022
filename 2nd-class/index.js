const parrafoInicial = document.getElementById("parrafoinicial");

console.log(parrafoInicial);

parrafoInicial.onclick = function () {
  cambiaColorAleatorio();
};

function cambiaColorAleatorio() {
  const colores = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
    "orange",
    "black",
    "white",
  ];
  parrafoInicial.style.color =
    colores[Math.floor(Math.random() * colores.length)];
}

/*
Tipos de datos
var -> Modificable, scope global - No recomendado
let -> Modificable, scope local
const -> No modificable, scope local
*/

/*
CASES

PascaleCase - Clases - JAVA

camelCase - Variables, funciones y atributos - JS
    variable -> parrafoInicial =
    funcion -> parrafoInicial()
    atributo -> parrafoInicial

snake_case -Python, JS
    variables y funciones

CASES - Consatantes

*/
