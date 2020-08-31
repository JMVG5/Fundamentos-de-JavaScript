"use strict";

//Aqui estableceremos un par de consantes que nos direccionaran a la url a donde haremos nuestros recuest
var API_URL = 'https://swapi.dev/api/';
var PEOPLE = 'people/:id';
var opciones = {
  crossDomain: true
};

var onResponse = function onResponse(data) {
  console.log("hola, yo soy ".concat(data.name));
};

function obtenerPersonaje(id) {
  var url = "".concat(API_URL).concat(PEOPLE.replace(':id', id));
  $.get(url, opciones, onResponse);
} //para finalizar con el asincronismo crearemos este ejercicio en donde mandaremos multiples reques a jQuery y traeremos
//varios personages de nuestra API


obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4); //Como podemos observar en nuestra consola, todas estas llamadas se fueron a la cola de tareas y JS las mando a llamar una vez que el odigo termino de ejecutarse, sin embargo
//podemos observar que las funciones no fueron llamdas en el orden que se encuentran
//dependera del servidor y el tiempo de respuesta de nuestro programa
//en la siguiente clase, veremos un forma de obtener estos paramaetros en el rden que nosotros los pedimos