var Manuel = {
    nombre: 'Jose manuel',
    apellido: 'Venegas Garcia',
    altura: 1.76

}

var Raul = {
    nombre: 'Raul',
    apellido: ' Garcia',
    altura: 1.87

}

var Veronica = {
    nombre: 'Veronica',
    apellido: 'Aceves',
    altura: 1.67

}

var Romero = {
    nombre: 'Nick romero',
    apellido: 'Valdepeña',
    altura: 1.76

}

var Sahara = {
    nombre: 'Sahara mireya',
    apellido: 'Gomez farias',
    altura: 1.64

}

var Lesley = {
    nombre: 'Lesley',
    apellido: 'Almiran Gutierrez',
    altura: 1.73

}


var personas = [Manuel, Raul, Veronica, Romero, Sahara, Lesley];

//PAra filtar un arreglo, crearemos una funcion que nos retorne a todas aquellas personas que midan mas de 1.8m

const personaAlta = persona => persona.altura > 1.8;
const personaBaja = persona => persona.altura <1.8;
//utilizaremos la sentencia filter() para pasar el dato de nuestra funcion creada anteriormente, recordemos que los datos dentro de esta funcion tienen que ser una condicion
var personasAltas = personas.filter(personaAlta);
var personasBajas = personas. filter(personaBaja);

//La siguiente sentencia tambien es valida y eliminaria la funcion creada al principio y crearia una funcion anonima dentro de si misma
//var personasAltas = personas.filter(function (persona){
//    return persona.altura > 1.8
//});


//console.log (personasAltas);
console.log (personasBajas);