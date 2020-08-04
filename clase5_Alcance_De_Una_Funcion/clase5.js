var nombre = 'Manuel';

function nombreEnMayusculas(){
    nombre = nombre.toUpperCase();         //Aqui estamos utilizando una funcion dentro de otra funcion para colocar la variable nombre en mayusculas, aqui no existe error alguno, sin embargo
                                            // la variable nombre es una variable globar ya que no esta definida dentro de la funcion que la esta manipulando, esto en codigo mas complejo puede llegar a traernos errores
                                            // ya que nuestra funcion esta manipulando codigo que tambien puede ser manipulado por cualquier otra sentecia que nosotrs escribamos, lo cual puede convertirse en una mala practica 
    console.log (nombre);
}

nombreEnMayusculas();


//para evitar cometer conflictos como se explica en el caso aterior lo que haremos sera crear una variable local dentro de la misma funcion para qeu su alcance pueda ser solo por esa funcin en especifico y no por el resto de nuestro codigo

function variableLocal(n){
    n = n.toUpperCase();                // de esta forma creamos una variable llamada n dentro de nuestra funcion de manera local y no puede ser modificada fuera de esta funcion 
    console.log(n);
}

variableLocal(nombre);                 // ahora la variable nombre ha sido copiada en nuestra funcion y su valor ha sido asignado a nuestra variable n, de esta forma solo modificamos la variable nombre pero no su valor.