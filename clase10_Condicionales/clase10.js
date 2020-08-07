var manuel = {                
    nombre: 'Jose Manuel',
    apellido: 'Venegas Garcia',
    edad: 10,
    ingeniero: true,
    cocinero: false,
    escritor: true,
    futbolista: false,
    dj: false,
    actor: false
    }

    //las condicionales lo que nos permiten es ejecutar un codigo solo si este es igual al valor que le estamos pasando como parametro, tambien existen condiciones negativas que nos permiten ejecutar nuestro codigo si la condicion es diferente de nuestro valor
    //en el siguiente ejemplo podremos ver el uso de la sentencia if y else, estas dos nos dan a entender que si un acondicion es igual a nuestro valor, en este caso true, se ejecutara un codido, de lo contrario (sentencia else), se ejecutara otro

    function imprimirProfesion(persona){
        console.log(`${persona.nombre} es:`);

        if(persona.ingeniero){
            console.log ('Ingeniero');
        }else{
            console.log ('No es ingeniero');
        }
        if(persona.cocinero){
            console.log ('Cocinero');
        }else{
            console.log ('No es cocinero');
        }
        if(persona.escritor){
            console.log ('Escritor');
        }else{
            console.log ('No es Escritor');
        }
        if(persona.futbolista){
            console.log ('Futbolista');
        }else{
            console.log ('No es Futbolista');
        }
        if(persona.dj){
            console.log ('DJ');
        }else{
            console.log ('No es DJ');
        }
        if(persona.actor){
            console.log ('Actor');
        }else{
            console.log ('No es Actor');
        }
    }

    //tambien existen comparadores numericos como lo son el mayor que >, menir que <, mayor o igual que >= y menor o igual que <=
function imprimirSiEsMayorDeEdad (persona){
    if(persona.edad >= 18){
        console.log (`${persona.nombre} es mayor de edad`);
    }else{
        console.log (`${persona.nombre} es menor de edad`);
    }
}

    imprimirProfesion(manuel);
    imprimirSiEsMayorDeEdad(manuel);