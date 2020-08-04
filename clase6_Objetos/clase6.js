var manuel = {                
nombre: 'Jose Manuel',
apellido: 'Venegas Garcia',
edad: 23
}

// la sentencia de codigo anterior es la forma en la que nosotros representamos un objeto en JS, nos podemos dar cuenta
//de que un objeto no es nada mas que una variable qeu contien atributos los cuales podemos tomar como clave y valor, todos ellos separados por una coma entre si

var Gerardo = {                
    nombre: 'Gerardo Manuel',
    apellido: 'Garcia Niaves',
    edad: 23
    }

function nombreEnMayusculas(persona){
var nombre = persona.nombre.toUpperCase();                  //Creamos una funcion que nos cambie el valor asignado a mayusculas, en este caso, la funcion me pide una persona la cual es mi objeto y extraigo de ella el nombre para editarlo
console.log (nombre);
}

nombreEnMayusculas(manuel);    // de esta manera mandamos a llamar un valor en especifico de nuestro objeto, en este caso el nombre y aplicamos el codigo de nuestra funcion a el.
nombreEnMayusculas(Gerardo);
nombreEnMayusculas();  // no podemos mandar a llamar la funcion sin asignarle un parametro o nos marcara un error ya que la funcion esta esperando recibir un atributo en este caso de nuestro objeto y no logra encontrarlo