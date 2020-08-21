
function persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

}


var manuel = new persona('manuel', 'venegas',1.82);
var arik = new persona ('arik', 'briselo',1.90);
var lalo = new persona ('Eduardo', 'palomar', 1.56);

//Es importante saber en dnde colocamos las funciones que ejecutara nuestro prototipo ya que en este ejemplo nuestro codigo marcaria un error
//al no encontrar los datos las personas de este ejemplo no podran er creadas ya que son llamadas antes de que se cree nuestra funcion
//Lo mas recomendable sera crear todos nuestros prototipos juntos y al inicio y psteriormente irlos usando

manuel.saludar()
arik.saludar()
arturo.saludar()


persona.prototype.saludar= function(){
    if(this.altura > 1.80){
        console.log (`hola, soy ${this.nombre} y soy alto`)
    } else{
        console.log (`hola, soy ${this.nombre} y soy bajo`)
      
    }
    }