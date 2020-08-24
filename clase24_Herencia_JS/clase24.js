//Como se menciono anteriormente, las herencias enJS se dan por medio de funciones y para ellos crearemos una funcion propia
//lo que tendremos que describir dentro de nuestra funcion, es describisrle al prototipo hijo, quien va a ser su prototipo padre
//ejemplo

function heredaDe (prototipoHijo, prototipoPadre){
var fn = function(){}

fn.prototype = prototipoPadre.prototype
prototipoHijo.prototype = new fn 
prototipoHijo.prototype.constructor = prototipoHijo
}


function persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

}

persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function (){
    return   this.altura >1.80
}

function desarrollador (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

//Aqui mandaremos a llamar nuestra funcion de herencia en donde colocaremos como paramentros primero nuestra clase hija y luego la clase padre
//Este mecanismo de herencia debera de ser llamado inmediatamente despues de crear nuestra funcion
//o el codigo entrara en conflicto con al sobre escribir la funcin saludar
heredaDe (desarrollador, persona)


desarrollador.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
  
}



//var manuel = new persona('manuel', 'venegas',1.82);
//var arik = new persona ('arik', 'briselo',1.90);
//var lalo = new persona ('Eduardo', 'palomar', 1.56);
