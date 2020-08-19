var Manuel = {
    nombre: 'Jose manuel',
    apellido: 'Venegas Garcia',
    altura: 1.76,
    cantidadDeLibros: 34

}

var Raul = {
    nombre: 'Raul',
    apellido: ' Garcia',
    altura: 1.87,
    cantidadDeLibros: 56

}

var Veronica = {
    nombre: 'Veronica',
    apellido: 'Aceves',
    altura: 1.67,
    cantidadDeLibros: 90

}

var Romero = {
    nombre: 'Nick romero',
    apellido: 'Valdepeña',
    altura: 1.76,
    cantidadDeLibros: 63

}

var Sahara = {
    nombre: 'Sahara mireya',
    apellido: 'Gomez farias',
    altura: 1.64,
    cantidadDeLibros: 12

}

var Lesley = {
    nombre: 'Lesley',
    apellido: 'Almiran Gutierrez',
    altura: 1.73,
    cantidadDeLibros: 53

}


var personas = [Manuel, Raul, Veronica, Romero, Sahara, Lesley];

//Esta funcion retornara la suma de libros que nuestra funcin reduce nos esta solicitando

const reducer = (acum, persona) => acum + persona.cantidadDeLibros

//La funcion reduce nos permite reducir (sumar) varios datos a un solo valor, para esto la funcion reduce debera de recibir dos parametros el cual sera una funcion que retorne esa suma y el valor con el que sera inicializado
//ariba encontraremos la funcion que nos retorna ese valor 

var totalDeLibros = personas.reduce(reducer,0);

//el resultado en nuestra consola sera la suma de libros de todos nuestros objetos almacenados en nuestro arreglo
console.log(`El total de libros es de ${totalDeLibros}`);
