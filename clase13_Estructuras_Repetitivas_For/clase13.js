var manuel = {                
    nombre: 'Jose Manuel',
    apellido: 'Venegas Garcia',
    edad: 23,
    peso: 75
    }

    const DIAS_DEL_AÑO =365;
    //aqui crearemos un par de funciones que nos arrojen el incremento o el decremento del peso 

    const INCREMENTO_O_DECREMENT_DE_PESO =0.2;

    const aumentarDePeso = persona => persona.peso += INCREMENTO_O_DECREMENT_DE_PESO;
    const bajarDePeso = persona => persona.peso -= INCREMENTO_O_DECREMENT_DE_PESO;


    console.log(`Al inicio del año ${manuel.nombre} pesaba ${manuel.peso}kg`);

    //Para ejecutar un ciclo for se utiliza la siguiente sentencia, en donde nuestro primer parametro es el inicio, el segundo su valor de comparacion y el tercero el incremento
    //dentro de nuestras llavas ira el codig a ejecutar cada que el ciclo se vaya repitiendo

 for(var i = 1; i <= DIAS_DEL_AÑO; i++){
     var random = Math.random();//la funcion random nos permitira arrojar de forma aleatoria numeros entre 0 y 1

     //Crearemos nuestras condiciones para determinar si la persona sube o baja de peso utilizando nuestro valor random creado anteriormente

     if(random <= 0.25){

         aumentarDePeso(manuel);

     }else if (random <= 0.50 && random > 0.25) {

        bajarDePeso(manuel);

     }
 }


    console.log(`Al fin  del año ${manuel.nombre} pesa ${manuel.peso.toFixed(2)}kg`);

    //Nuestro ciclo se repite 365 y cada una de esas veces un numero aleatorio se ejecuta, si este numero esta entre los valores 0 y 0.25, la funcion aumentar de peso se ejecuta sumando el peso original en el ojeto mas 0.2,
    //si el numero random obtenido se encuentra entre los valores 0.26 y 0.50 la funcion bajar de peso se ejecuta, restando 0.2 al peso original en el objeto
    //cuando los numeros son mayores a 0.5 no sucede nada