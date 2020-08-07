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

   //para evitar que un avaribale sea editable a traves del codigo la deberemos definir como una constante y por convencion, esta debera de llevar su nombre en mayusculas separado por guiones bajos de la siguinete forma:
   const MAYORIA_DE_EDAD = 18;

    //Nosotros podemos crear funciones que nos retornen un valor especifico para despues poder compararlas dentro de otra funcion
    //esto con la finalidad de crear buenas practicas y codigos mas limpios ya que tal vez una operacion no deba de ir mesclada dentro de una funcion que no realiza operaciones si no preguntas, ejemplo :

    function esMayorDeEdad(persona){

        return persona.edad >= MAYORIA_DE_EDAD;

    }
function imprimirSiEsMayorDeEdad (persona){
    if(esMayorDeEdad(persona)){
        console.log (`${persona.nombre} es mayor de edad`);
    }else{
        console.log (`${persona.nombre} es menor de edad`);
    }
}

    imprimirSiEsMayorDeEdad(juan);