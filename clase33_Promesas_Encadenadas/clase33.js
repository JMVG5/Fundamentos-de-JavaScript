
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
//Para el ejemplo de esta clase intentaremos encadenar la llamada a otra promesa una vez que nuestra funcion que obtiene el primer personaje es mandada a llamar 
//Para esto lo que podemos hacer es que en nuestro .then despues de ejecutar nuestro console log, podemos mandar a llamar una promesa nueva y asi cuantas veces queramos 

obtenerPersonaje(1)
.then(personaje => {
    console.log (`el personaje 1 es ${personaje.name}`);

    return obtenerPersonaje(2);
})
.then(personaje => {
    console.log (`el personaje 2 es ${personaje.name}`);
    
    return obtenerPersonaje(3);
})
.then(personaje => {
    console.log (`el personaje 3 es ${personaje.name}`);
    
    return obtenerPersonaje(4);
})
.then(personaje => {
    console.log (`el personaje 4 es ${personaje.name}`);
    //si este es nuestro ultimo personaje, ya no mandaremos a llamar a otra prmesa
})
.catch (onError)