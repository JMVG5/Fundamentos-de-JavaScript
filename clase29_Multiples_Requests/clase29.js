//Aqui estableceremos un par de consantes que nos direccionaran a la url a donde haremos nuestros recuest

const API_URL = 'https://swapi.dev/api/';
const PEOPLE = 'people/:id'

const opciones = {crossDomain: true}
const onResponse = function(data){
    console.log(`hola, yo soy ${data.name}`);
}

function obtenerPersonaje(id){
const url = `${API_URL}${PEOPLE.replace(':id', id)}`
$.get(url, opciones, onResponse);
}
//para finalizar con el asincronismo crearemos este ejercicio en donde mandaremos multiples reques a jQuery y traeremos
//varios personages de nuestra API
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4);

//Como podemos observar en nuestra consola, todas estas llamadas se fueron a la cola de tareas y JS las mando a llamar una vez que el odigo termino de ejecutarse, sin embargo
//podemos observar que las funciones no fueron llamdas en el orden que se encuentran
//dependera del servidor y el tiempo de respuesta de nuestro programa
//en la siguiente clase, veremos un forma de obtener estos paramaetros en el rden que nosotros los pedimos