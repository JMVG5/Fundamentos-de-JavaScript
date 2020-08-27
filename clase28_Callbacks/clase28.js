//Aqui estableceremos un par de consantes que nos direccionaran a la url a donde haremos nuestros recuest

const API_URL = 'https://swapi.dev/api/';
const PEOPLE = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE.replace(':id', 1)}`
const opciones = {crossDomain: true}
const onResponse = function(data){
    console.log(`hola yo soy ${data.name}`);
}

//para hacer un recuest con jQuery colocaremos el signo de $.y la accion a relizar, ejemplo:

//el metodo get nos permitira obtener la informacion solicitada desde el sitio web donde se almacena la api, dentro de get se proporcionaran las url y añadimos la funcion replace para cambiar el id por un numero, en este caso el numero de la persona de la cual queremos ibtener datos
//el segundo parametro que se necesita es indicar a JQuery se hara hacia otra pagina y eso se hace con el objeto crossDomain
//por ultimo nuestro tercer parametro sera nuestro callback, esto es una funcion que se ejecutara en algun futuro, no sbaemos cuando se ejecutara pero la sentencia .get se encargara de llamarla 
//esta funcion nos retorna los argumentos que la sentencia .get obtiene, estos argumentos son la data, un texto diciendonos el estatus del recuest y por ultimo el request que realizo JS, a nosotros nos interesa el primeo que es la data asi que sera este al que llamemos en nuestra funcion de callback
$.get(lukeUrl, opciones, onResponse)