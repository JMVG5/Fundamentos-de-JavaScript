//En javascript nosotros podemos enviar mas que simples datos como parametros, javascript nos permite enviar funciones tambien para poder ejecutar acciones con ellas
//Veremos un ejemplo mas abajo

class persona{
    constructor (nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    
    }
    //Comenzaremos con nuestra funcion saludar a la cual le pediremos que reciba un parametro dentro de la misma, en este caso llamado PARAM, el nombre es indiferente y puede ser cualquiera
    //Este dato sera el estamos colocando dentro de la funcion saludar al momento de ser ejecutada y se evaluara para poder crear un a accion

    saludar (PARAM){
        var {nombre, apellido} = this;

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        //El ejercicio consiste en saber si la persona es desarrolladora o no y con esto agregar algo mas al saludo por lo que aqui evaluaremos
        //si la funcion saluda recibe otro parametro dara true en nuestro if y su bloque de codigo se ejecutara modificando nuestra funcion PARAM
        //lo que enviara el nombre, apellido y un false el cual hace referencia a que esa persona no es desarrollador
        if(PARAM){
            PARAM(nombre,apellido,false)
        }
    }
    soyAlto(){
        return   this.altura >1.80 
    }
}

class desarrollador extends persona{
    constructor (nombre, apellido, altura){

        super(nombre, apellido, altura);

    }
    //En el caso de nuestra funcion desarrollador queremos que la modificacion de datos sea igual que nuestro saludo a diferencia de que el tercer parametro debera de ser un true ya que al ejecutar esta funcion
    //damos por entendido que la persona si es desarrollador, por lo que el codigo queda de la siguiente manera 
    saludar(PARAM){
       // aqui aplicaremos la desestrucuturacion para hacer mas legible el codigo 
        var {nombre, apellido} = this;
    //la sentencia anterior es lo mismo a colocar lo siguiente
      //  var nombre = this.nombre
       // var apellido = this.apellido

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(PARAM){
       //     asi podremos eliminar los this en nuestro codigo
            PARAM(nombre,apellido,true)
        }
    }
}    

//Aqui creamos nuestra funcion que nos indicara si la persona es desarrollador o no agregando ese tercer parametro el cual hace referencia al true o false que las funciones saludar y desarrollador estan evaluando
//esDes, hace referencia a ese tercer parametro el cual es una funcion previamente evaluda
    function responderSaludo (nombre, apellido, esDes){
        console.log(`Buen dia ${nombre} ${apellido}`);
        if(esDes){
            console.log(`Wow, no sabia que eras desarrollador`); 
        }
    }

//al momento de crear a nuestras personas si nosotros creamos a un desarrollador, la funcion evaluada para esDev, sera true y ejecutara el codigo dentro de PARAM para desarrollador, de lo contrario sera false
//esto nos ayuda a personalizar el saludo para cada persona 

    var manuel = new persona('manuel', 'venegas',1.82);
    var arik = new persona ('arik', 'briselo',1.90);
    var lalo = new desarrollador ('Eduardo', 'palomar', 1.56);
    
//Como repsuestas, manuel no ejecutara el codigo de ninguno ya que no recibe ningun parametro y solo se presentara
    manuel.saludar();
//arik ejecutara el codigo de presentarce y se le respondera el saludo ya que recibe como parametro nuestra funcion responder saludo, sin embargo no entrara en ejecucion esDev ya que el parametro que recibe es false
//por que creamos a una persona y no a un desarrollador
    arik.saludar(responderSaludo);
//En el caso de lalo se ejecutara lo mismo que arik, sin embargo como arik lo creamos con la clase desarrollador, la condicion sera verdadera y entrara en accion nuestro if dentro de responder saludo el cual agrega otra respuesta al codigo 
    lalo.saludar(responderSaludo);