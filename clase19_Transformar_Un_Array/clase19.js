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

//Cuando nuestra funcion lo que va a hacer es devolver un arreglo, podemos utilizar la funcion de flecha y colocar nuetro cuerpo de la funcion entre parentesis, de esta forma sabemos que estamos
//dando a entender que esa funcion devovera un objeto y tendra un codigo mas limpi, sin embargo tambien se puede realizar de la forma tradicional como se comenta debajo
const pasarAlturaACms = persona =>({
    ...persona,
    altura: persona.altura * 100

})

//const pasarAlturaACms = persona =>{ 
   //return {
    //...persona,
    //altura: persona.altura * 100
//}


//la funcion map, nos permite recorrer cada uno de nuestros valores en un arreglo, en este ejemplo estmos recorriendo a cada persona y dentro de map le estamos asignando un afuncion
// la cual modifica su altura en cm, hay que recordar que nuestra funcion map va a modificar nuestro arreglo original por lo que la alutura dentro del arreglo personas quedara modificada de m a cm

var personaEnCMS = personas.map(pasarAlturaACms);

//Si nosotros no queremos que nuestro array original se modifique lo que tendremos que hacer sera crear un array nuevo al momento de la convercion, osea un nuestra funcion y hacer que esta funcion retorne ese nuevo array
//para esto veamos el ejemplo en uestra funcion  pasarAlturaACms en la parte de arriba

console.log(personaEnCMS);