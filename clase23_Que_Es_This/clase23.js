function persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

}

//Hay que tener que siempre que coloquemos las sentecias this dentro de un aarrow funtion, este dthis hara referencia a whindow y no a nuestro objeto
//de esta forma nos daremos cuenta que nuestro codigo se ejecutara de forma incorrecta ya que nuestro objeto sera indefinido
//Este es uno de los errores mas comunes al desarrollar en JS o Node.js y sucede cada que utilizamos un arrow function ya que dentro de ella el this siempre sera window
//y para poder obtener un dato, el this debera de estar descrito fuera de la funcion como un dato global
persona.prototype.soyAlto = () => {
 debugger
    return   this.altura >1.80
}


var manuel = new persona('manuel', 'venegas',1.82);
var arik = new persona ('arik', 'briselo',1.90);
var lalo = new persona ('Eduardo', 'palomar', 1.56);
