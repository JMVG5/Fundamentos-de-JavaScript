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

//Si queremos agrupar un grupo de datos o variables dentro de una coleccion lo que utilizamos son los arrays, estos se definen colocando una variable
//con el nombre de nuestro array y entre corchetes, todos los nombres de las variables que queremos alamcenar, ejemplo:

var personas = [Manuel, Raul, Veronica, Romero, Sahara, Lesley];

//PAra ver el contenido de este arreglo, se pueden crear sentencias como personas[0], que nos dara la informacion de nuestra primer persona que este caso es manuel o bien utilizar personas [2]. nombre que nos
//regresara un dato en especifico como lo es el nombre, a continuacion un ejemplo en el cual imprimiremos en consola la altura de cada persona


//los arreglos cuentan con la propiedad length que nos permite saber cuantos elementos tiene nuestro arreglo 
for (i=0; i < personas.length; i++){

    //aqui guardamos en otra variable a cada persona que va pasando por el ciclo for
var persona = personas [i];
console.log(`${persona.nombre} mide ${persona.altura}cm`);
}