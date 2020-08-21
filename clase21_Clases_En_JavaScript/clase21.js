// las clases en javaScript no existen como tal al igual que otros lenguajes en donde existe la herencia, aqui las clases se inician con prototipos los cuales se declaran de la siguiente manera
//para crear un prototipo lo que tenemos que definir sera una funcion 

function persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

    //a palabra reservada this hace referencia al objet que se esta creando , en este caso el this.nombre es un atributo del objeto que se esta creando y nombre es el parametro que se le esta asignando 
}

persona.prototype.saludar= function(){
if(this.altura > 1.80){
    console.log (`hola, soy ${this.nombre} y soy alto`)
} else{
    console.log (`hola, soy ${this.nombre} y soy bajo`)
  
}
}

//la funcion anterior sera ejecutada cuando nosotros creemos a una nueva persona como lo haremos a continuacion

var manuel = new persona('manuel', 'venegas',1.82);

//Cuando ejecutamos nuestro codigo y mandamos a llamar a la variable manuel, nuestra consola nos dira cual es el prototipo que esa variable eta utilizando, en este caso es persona, nuestra funcion

//La palabra new, seguida del prototipo hace que se cree un nuevo objeto y se le asignara como prototipo,el prototipo que nosotros indiquemos despues de ella, acto seguido se ejecutara el codigo dentro de esa funcion
//implicitamente lo que esto hace es retornar ese objeto que se acaba de construir 

//Estos prototipos nos permiten crear a nuevas personas utilizando los atributos creados en nuestro objeto dentro de nuestra funcion 
//Ejemplo:

var arik = new persona ('arik', 'briselo',1.90);
var lalo = new persona ('Eduardo', 'palomar', 1.56);

