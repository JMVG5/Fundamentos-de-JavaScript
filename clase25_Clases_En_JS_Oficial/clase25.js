//Con las actualizaciones de JS nos hemos encontrado con que es cada vez mas facil crear clases a diferencia de nuestro ejemplo anterior
//A pesar de que estaremos utilizando la palabra clase, no tenemos que olvidar que por debajo de todo esto, siguen siendo funciones integradas dentro de si misma
//Para crearla utilizaremos la palabra reservada class y dentro colocaremos un costructur el cual sera quien se ejecute al mandar a llamar a nuestra clase
//asi mismo podemos agragar cualquier codigo adicional el cual tambien ejecutaremos al llamarla, por ejemplo nuestra accion saludar

class persona{
    constructor (nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    
    }
    //Como podemos ver, aqui ya no es necesario colocar la palabra function para crear nuestras funciones, la estructura entiende por defecto qe estamoa hablando de una funcion 
    saludar (){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        return   this.altura >1.80 
    }
}

//Para hacer que una clase, en este ejemplo, desarrollador herede de otra, tendremos que crear nuestra clase y colocar la palabra
// extends que nos inica que esa clase que estamos creando hereda a otra y accion seguida crearemos nuestro constructor al igual que en nuestra clase padre
//ejemplo

class desarrollador extends persona{
    constructor (nombre, apellido, altura){
        //tenemos que tener en cuenta que por si solo este codigo arrojara error ya que no estamos mandando a llamar al constructor super antes de acceder al this de este constructor
        //en otras palabras no podemos usar this dentro de este constructor hasta no haber llamado al constructor padre
        //para esto utilizaremos la palabra super

        super(nombre, apellido, altura);

        //de esta manera no olvidamos de repetir la misma estructura siempre
        //this.nombre = nombre
        //this.apellido = apellido
        //this.altura = altura
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)

    }
}    
    
    //var manuel = new persona('manuel', 'venegas',1.82);
    //var arik = new persona ('arik', 'briselo',1.90);
    //var lalo = new persona ('Eduardo', 'palomar', 1.56);
    