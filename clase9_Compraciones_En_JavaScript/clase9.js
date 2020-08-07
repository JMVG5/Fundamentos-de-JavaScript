// = funciona para asignar un valor
// == funciona para comparar si un valor es igual a otro
// === (remonendado) sfunciona para preguntar si un dato tiene el mismo valor que otro y si son del mismo tipo de variable

//los operadores anteriores funcionan a la perfeccion cuando queremos comprar datos primitivos como lo son las letras y los numeros
//sin embargo cuando queremos comprar un objeto los comparadores se comportan diferente 
//Ejemplo:

var Manuel = {

nombre:'Manuel'

}

var otraPersona = {
    nombre: 'Manuel'
}

//si usamos un comparador para preguntar si un objeto es igual a otro siempre obtendremos un false, ya que javaScript siempre
//va a preguntar por la referencia a la variable que estamos usando osea manuel y otraPersona, los cuales son espacios de memoria recervados para estas dos variables
// si nosotro queremos hacer que la respuesta a la compracion sea verdadera, tenemos que hacer lo siguiente:

var otraPersona=Manuel;

//Esto hace que la variable otraPersona apunte a la misma referencia de la variable Manuel, es decir al mismo espacio de memoria en donde la variable con el objeto Manuel esta almacenado

//Sin embargo tendremos que tener cuidad al utilizar esta sentencia de codigo ya que si yo modifico los atributos del objeto otraPersona, los atributos en Manuel tambien seran modificados
//esto se debe a que ambas variables pueden sobreescribir el mismo espacio de memoria RAM en el que estan almacenados