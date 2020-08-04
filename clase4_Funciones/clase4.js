var nombre = 'Manuel', edad = 23;

function imprimirEdad(){                                
    console.log (`${nombre} tiene ${edad} años`);      // asi es como declaramos una funcion que no lleve parametros
}                                              

imprimirEdad();                                      // aqui mandamos a llamar a esa funcion 


function imprimirEdad2(n, e){
    console.log (`${n} tiene ${e} años`);            // asi declaramos una funcion que requiera parametros 
}

imprimirEdad2('Raul', 33);                     
imprimirEdad2 (23, 'lala');               //hay que tenr en cuenta siempre que JS es un lenguaje debilmente tipado por lo que si te permitira
                                        // seguir imprimendo valores si lanzar un error, sin embargos estos pueden mostrarse en el resultado final como invertidos o bien como no definidos