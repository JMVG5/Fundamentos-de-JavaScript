var edad = 23;     // declaracion de variable numerica
edad += 5;         // incremento en la variable, tambien se puede hacer de la forma edad = edad +1;

var peso = 76;
peso -= 3;         // decremento en la variable, es lo mismo que hacer peso = peso -3;

var galleta = 4;

peso += galleta; // asi sumamos dos variables numericas, siguiendo el orden cronologico de peso, el resultado deberia de ser 77

var deporte = 5;

peso -= deporte;      // asi restamos variables numericas, siguiendo la cronologria de peso en el codigo el resultado seria 72 

var precioDeVino = 200.3; // asi se asignan valores con decimales a una variable numerica

var total = precioDeVino * 3; // asi es como se realiza una multiplicacion de una variable numerica
                              //hay que tener en cuneta que JS no es muy preciso con las  decimales por lo que el resultado anterior arrojarioa 600.9000001
                              //Tener esto en cuneta al trabajar con decimales

// para resolver ese problema sin uso de librerias tendremos que convertir las decimales a enteros y de nuevo a decimal con la siguiente operacion
// var var total = precioDeVino * 100 * 3 / 100; esto funcionara si las decimales son pocas, en caso de no ser asi se utilizara un modulo matematico integrado en JS
// dicho modulo es el siguiente var total = Math.round(precioDeVino * 100 * 3) / 100 ; con esto el resultado sera mas preciso.

var totalStr = total.toFixed(3); // Con esta sentencia le decimos al programa cuantos decimales queremos que nos tome en cuenta, en este caso 3, sin embargo ahora nuestro resultado sera un String
var totalDec = parseFloat(totalStr); // de esta manera podemos volve la sentencia anterior de un numero string a un decimal

var pizza = 8;
var personas = 3;

var pedazosDePizzaPorPersona = pizza / personas ; // asi es como utilizamso las diviciones numericas en JS
