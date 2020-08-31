const API_URL = 'https://swapi.dev/api/';
const PEOPLE = 'people/:id'

const opciones = {crossDomain: true}

//En este ejemplo se restrucurara un poco el codigo haciendo que la funcion que manda a imprimir el personaje se genere dentro de cada callback para cada caso y dentro de los paramentros, en lugar de llamar a esa funcion llamaremos simplemente al callback que recibe ese parametro

function obtenerPersonaje(id, callback){
const url = `${API_URL}${PEOPLE.replace(':id', id)}`

//para saber cuando sucede un error, la funcion get nos permite concatenar tambien la funcion fail, la cual nos permitira realizar una accion al momento de que ocurra algun error en la comunicacion con la obtencion de datos a nuestro jQuery, veamos como se implementa

$.get(url, opciones, callback).fail(function(){
    console.log(`sucedio un error al intentar obtener el personaje ${id}`);
    //como podemos observar si nosotros interrumpimos la obtencion de datos el programa arrjora este error y la cadena se detendra en el personaje por obtener, es decir que si el error
    //ocuerrio al obtener el personaje 4, todos los demas ids o personajes nunca se mandaran a llamar, ya que cada personaje tiene un callback que llama al proximo y al no poder obtener la info de uno, los datos de los demas se pierd
});
}
obtenerPersonaje(1, function (data){
    console.log(`hola, yo soy ${data.name}`);

    obtenerPersonaje(2, function(data){
        console.log(`hola, yo soy ${data.name}`);

        obtenerPersonaje(3, function(data){
            console.log(`hola, yo soy ${data.name}`);

            obtenerPersonaje(4,function(data){
                console.log(`hola, yo soy ${data.name}`);

                obtenerPersonaje(5,function(data){
                    console.log(`hola, yo soy ${data.name}`);

                    obtenerPersonaje(6,function(data){
                        console.log(`hola, yo soy ${data.name}`);

                        obtenerPersonaje(8,function (data){
                            console.log(`hola, yo soy ${data.name}`);

                            obtenerPersonaje(9,function (data){
                                console.log(`hola, yo soy ${data.name}`);

                                obtenerPersonaje(10,function (data){
                                    console.log(`hola, yo soy ${data.name}`);

                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
