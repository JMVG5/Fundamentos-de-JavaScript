
const API_URL = 'https://swapi.dev/api/';
const PEOPLE = 'people/:id'

const opciones = {crossDomain: true}

function obtenerPersonaje(id){
 return new Promise ((resolve, reject)=>{
    const url = `${API_URL}${PEOPLE.replace(':id', id)}`
    $.get(url, opciones, function(data){
        resolve (data)
    })
    .fail (()=> reject (id))
 })
}

function onError (id){
    console.log (`Ocurrio un error al intentar obtener los datos del personaje ${id}`);
}
//Para poder mandar a llamar varias promesas en paralelo y no en serie como anteriormente hacimos, lo que tenemod que hacer es colocar en un array
//todos los ids opersonamejes que queremos obtener y generar un nuevo array con multiples promesas de cada elemento del array de ids
//para esto usaremos la funcion ya conocida .map qu enos permitira modificar a cada elemento de un array, en este se le agregara una promesa a cada elemento cada que map recorra todo mi arreglo 

var ids = [1,2,3,4,5,6]

/* var promesas = ids.map (function (id){
    return obtenerPersonaje(id);
}) */

//otra forma mas limpia de obtenerlo es la siguiente
var promesas = ids.map (id => obtenerPersonaje(id))
//para btener los valores de las proesas cuando se resulevan tenemos que llamar el siguiente metodo 
Promise.all(promesas)
.then(personajes => console.log(personajes))
.catch (onError)
