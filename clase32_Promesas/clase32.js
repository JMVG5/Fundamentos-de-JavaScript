//PROMESAS
//podemos ver a las promesas como valores que aun no conocemos, es la promesa de que habra un valor cunado una accion asincrona se resuelva
//las promesas pueden tener 3 estados en los que pueden resolverse y son como cualquier otro objeto de javascript
//PENDING:
//este estado es cuando se inicializa o se crea una promesa
//FULFILLED:
//Es cuando una promesa se resuleve de manera exitosa, para obtener su valor podemos llamar a la funcion .then(val => ...) y dentro colocar otra funcion que recibira el parametro que nosotros esperabamos
//REJECTED:
//Es cuando ocurre un error y la promesa no puede resolverse, aqui podemos pasar un .catch(err =>...) y de igual forma, pasar una funcion en la cual vamos a obtener como parametro el error que sucedio

//La estructura de la promesa es la siguiente:

//new Promise(function (resolve, reject){
    //...
//})

//En ella se tendran que recibir 2 parametros que son el resolve y reject los cuales recibiran el .then o .catch dependiendo de la resolucion de la promesa, quedando de la sigueinte manera:

//new Promise(function (resolve, reject){
    //...
//}).then(valor=>{
    //...
//}).catch(err => {
    //...
//})


//Usaremos como ejemplo el ejercicio de la clase anterior
const API_URL = 'https://swapi.dev/api/';
const PEOPLE = 'people/:id'

const opciones = {crossDomain: true}

//modificaremos esta funcion de obtenerPersonaje para que nos retorne una promesa en lugar de que reciba un callback como parametro
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

obtenerPersonaje(1)
.then(function(personaje){
    console.log (`el personaje 1 es ${personaje.name}`);
})
.catch (onError)