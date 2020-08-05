var Gerardo = {                
    nombre: 'Gerardo Manuel',
    apellido: 'Garcia Niaves',
    edad: 23
    }


    function Cumpleaños(persona){ //JS a diferencia con las variables, funciona diferente con los parametros de un objeto, los parametros en este caso son pasados como referencia
                                   //esto quiere decir que si modificamos  el objeto dentro del cuerpo de un afuncion, su valor se va a ver modificado fuera de esa funcion como si estuviesemos tomando ese dato de forma global 
        
        persona.edad +=1;
    }

    
//El ejemplo anterior puede ser correcto e incorrecto dependiendo de lo que qeuramos hcer con nuestro codigo, quisa nosotros queramos aumentar la edad del objeto Gerardo cada que esa funcion es llamada, entonces la funcion anterior seria correcta
// sin embargo si nosotros queremos modificar ese paremtro dentro de la funcion y no fuera de ella, podemos hacer lo siguiente

function Cumpleaños2 (persona){
    return {
        ...persona, //en este caso estamos creando un nuevo objeto dentro de nuestra funcion pero tomando como valores los mismos valores que tenia nuestro objeto pricipal, para esos son utilizados los ..., crean una replica de ese objeto dentro de la funcion al cual podemos incluso agregarle nuevos parametros
        edad: persona.edad + 1  //DE esta forma en nuestro objeto global los valores no cambiara de valor cada que sea llamada la funcion, sin embargo el valor de edad si se vera incrementado en uno dentro de la funcion cada vez que sea llamada
    }
}