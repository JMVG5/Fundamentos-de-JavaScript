//Aqui estableceremos un par de consantes que nos direccionaran a la url a donde haremos nuestros recuest

const API_URL = 'https://swapi.dev/api/';
const PEOPLE = 'people/:id'

const opciones = {crossDomain: true}

//para poder traer los datos de un servidor remoto y poder mostrarlos en el orden que nosotros estamos estableciendo, necesitaremos llamar a un segundo parametro que sera otra funcion dentro de nuestra funcion llamado callback
function obtenerPersonaje(id, callback){
const url = `${API_URL}${PEOPLE.replace(':id', id)}`
//para esto vamos hacer que nuestro primer callback el cual es onResponse, el cual se ejecuta cuando se termina el request, en lugar de ponerlo en otra funcion, lo pondremos directamente dentro de esta funcion 
//con el callback aun no se hace nada
$.get(url, opciones, function(data){
    console.log(`hola, yo soy ${data.name}`);

    //para mandar a llamar a nuestra funcion callbak y seriar nuestros datos tendremos que colocar un if que nos ejecutara nuestros parametros si la funcion se esta llamando 
    //y esto queda de la siguiente manera
    if(callback){
        callback();
    }
    //de esta manera si al ejecutar obtenerPersonaje obtenemos como segundo parametro la funcion de callback, la ejecutaremos
});
}

//ahora es que usaremos nuestro callback y para obtener los datos en el orden que los estamos pidiendo, tendremos que ir llamando a cada funcion que queramos obtener por medio de callbacks
//como podemos ver el primer parametro es nuestro id y en segundo parametro mandamos a llamar una funcion anonima, un afuncion que no se este ejecutando, simplemente sera la declaracion de una funcion
//de esta forma al obtener el primer personaje, se estara llamando un callback dentro de esa misma peticion la cual nos mandara a traer el personaje dos y dentro de la ejecucion de personaje dos, se mandara un callback para el presonaje tres
//asi sera sucesivamente hasta terminar el codigo.

//es necesario saber que aqui se perdera el paralelismo de los request ya que se estan mandando a llamar de forma seriada
//para terminar con esto tendremos que mandar a llamar ese callbak en la funcion encargada de traer los datos, en este caso sera la obtener personaje ->
obtenerPersonaje(1, function (){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4,function(){
                obtenerPersonaje(5,function(){
                    obtenerPersonaje(6,function(){
                        obtenerPersonaje(8,function (){
                            obtenerPersonaje(9,function (){
                                obtenerPersonaje(10);
                            });
                        });
                    });
                });
            });
        });
    });
});


//algo muy importante que sucede al aplicar la solucion anterior es que podemos crear un proceso conocido como 
//callbackHell lo que significa que esteticamente nuestro codigo se comenzara a formar en sentido verticalizado
//y es dificil saber donde termina cada uno de los callbacks, esto termina siendo poco estetico y crea un codigo poco limpio
//es saber que solo deberemos hacer esto cuando sea sumamente necesario, mas adelante veremos como solucionar este detalle