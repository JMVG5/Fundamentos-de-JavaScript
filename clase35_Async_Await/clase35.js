
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

//La ultima manera de realizar tareas asincronas en JS es la siguiente
//Crearemos una funcion que contenga todo lo realizado en la clase anterior
//y por medio de palabras reservadas le dareos uns restructuracion a nuesto codigo que se encargara de hacer lo mismo que teniamos anteriormente 

async function obtenerDatos (){
    var ids = [1,2,3,4,5,6]


    var promesas = ids.map (id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas);
        console.log(personajes)
    }catch (id){
    onError(id);
    }
}

obtenerDatos()