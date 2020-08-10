var manuel = {                
    nombre: 'Jose Manuel',
    apellido: 'Venegas Garcia',
    edad: 23,
    peso: 75
    }

    const DIAS_DEL_AÑO =365;
    const META = manuel.peso - 3;
    var dias = 0;
    //aqui crearemos un par de funciones que nos arrojen el incremento o el decremento del peso 

    const INCREMENTO_O_DECREMENT_DE_PESO =0.2;

    const aumentarDePeso = persona => persona.peso += INCREMENTO_O_DECREMENT_DE_PESO;
    const bajarDePeso = persona => persona.peso -= INCREMENTO_O_DECREMENT_DE_PESO;

    const comeMucho = () => Math.random ()< 0.3; // aqui crearemos dos funciones que almacenen nuestros numeros random las cuales usaremos como condiciones en nuestro ciclo while
    const haceDeporte = () => Math.random ()< 0.4;

    console.log(`Al inicio del año ${manuel.nombre} pesaba ${manuel.peso}kg`);

    //aqui crearemos un ciclo while en el que nuestra persona tendra que bajar 3 kg 
    //los ciclos while se ejcutaran mientras que nuestra condicion sea verdadera, una vez que la condicion establecida sea falsa, el cilo terminara y el codigo continuara su ejecucion del codigo en la linea siguiente
    //ejemplo:

    while(manuel.peso > META){
        
        //debugger --> est sentencia nos permite parar el codigo e ir a la consola del navegador para inspeccionarlo de linea en linea, se utiliza para encontrar errores en la ejecucion o bien simplemente para ver paso a paso la ejecucion del mismo, aqui encontramos el error de que la funcion math.random no tenia sus ()

        if(comeMucho()){
            aumentarDePeso(manuel);
        }

        if(haceDeporte()){
            bajarDePeso(manuel);
        }
        dias += 1; //En esta sentencia incrementaremos en 1 hasta que la sentencia while deje de ser verdadera, en este caso hasta que el peso establecido en el objeto de 75 sea menor a la meta de 73
    }
 

    console.log(`pasaron ${dias} dias, hasta que ${manuel.nombre} logro la meta de bajar 3 kg`);

    //Nuestro ciclo se repite las veces que sean necesarias mientras que la sentencia while siga siendo verdadera, una ves que esto se rompe el codigo continua y como nuestro codigo lo menciona nos da la cantidad de dias hasta que peso es igual a 72