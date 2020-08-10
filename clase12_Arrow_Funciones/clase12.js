var manuel = {                
    nombre: 'Jose Manuel',
    apellido: 'Venegas Garcia',
    edad: 23,
    ingeniero: true,
    cocinero: false,
    escritor: true,
    futbolista: false,
    dj: false,
    actor: false
    }

   var juan = {
       nombre: 'Juan Ramon',
       apellido: 'Solorzano',
       edad: 13
   }

   const MAYORIA_DE_EDAD = 18;

//LAs funciones tipo arrow nos permiten simplificar el codigo y se comportan de la misma maera que una declaracion de una funcion normal, a continuacion se creara una funcion tipo flecha y se tratara de simplificar aun mas
  //  const esMayorDeEdad = persona => {

    //    return persona.edad >= MAYORIA_DE_EDAD;

    //}

//Cuando nuestra funcion flecha solo esta creada para devolver un retur, lo que hacemos para limpiar mas nuestro codigo es lo siguiente
//const esMayorDeEdad = persona =>  persona.edad >= MAYORIA_DE_EDAD;

//Aun podemos hacer algo mas con nuestra funcion y es desestructurarla como se muestra acontinuacion

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;


function imprimirSiEsMayorDeEdad (persona){
    if(esMayorDeEdad(persona)){
        console.log (`${persona.nombre} es mayor de edad`);
    }else{
        console.log (`${persona.nombre} es menor de edad`);
    }
}

//Para poner en practica nuestro ejemplo anterior haremos una funcion que nos permita el acceso si es mayor de edad

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log ('ACCESO DENEGADO');
    }else{
        console.log ('ACCESO PERMITIDO');
    }
}