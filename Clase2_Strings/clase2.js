var nombre = 'Mane';
var apellido = 'Venegas';

var nombreEnMayusculas = nombre.toUpperCase();

var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt (0);

var cantidadDeLetrasDelNombre = nombre.length;

var nombreCompleto = nombre + ' ' + apellido;

var nombreCompletoInterpolacion = `${nombre} ${apellido.toUpperCase()}`; // es lo mismo que el ejemplo anterior, sin embargo, dentro de las llaves podemos escribir codigo JSr, sin embargo, dentro de las llaves podemos escribir codigo JS

var str = nombre.substr (1, 3);

//EJERCICIO MOSTRAR AL USUARIO LA ULTIMA LETRA DE SU NOMBRE

var Ejercicio = nombre.charAt (3);