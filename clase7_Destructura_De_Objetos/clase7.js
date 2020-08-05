var Gerardo = {                
    nombre: 'Gerardo Manuel',
    apellido: 'Garcia Niaves',
    edad: 23
    }

function nombreEnMayusculas(persona){
//var nombre = persona.nombre.toUpperCase(); 
var {nombre} = persona                      // Esta sentencia de aqui es lo mismo que la sentencia dcomentada en la parte de arriba solo que mas destructurada
console.log (nombre.toUpperCase());
}

   
nombreEnMayusculas(Gerardo);


//Ejemplo obteniendo el nombre y la edad
function imprimirNombreyEdad(persona){
    var {nombre, edad} = persona

    console.log (nombre + ' tiene ' + edad + ' años');
}

imprimirNombreyEdad(Gerardo);