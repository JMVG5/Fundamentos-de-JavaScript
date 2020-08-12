var signo = prompt ('Cual es tu signo ?'); // la funcion prompt nos permite desplegar un cuadro tipo formulario en nuestro navegador en el cual se tiene que ingresar un texto referente a lo que se pregunta en dicho cuadro

//Los switch nos sirven cuando queremos realizas multiples comparaciones a una misma variable, en este ejemplo se pregunta por el signo zodical
//nuestro prompt pregunta por un signo y tenemos que decir su horoscopo dependiendo el dato ingresado, es asi como la variable signo se tiene que comparar multiples veces

//los switch funcionan por casos y en el supuesto de que un caso se cumpla, se ejecutara su codigo contenido dentro del mismo
//para terminar la ejecucion del switch, debemos siempre de colocar un breake ya que de no hacer, el codigo seguira ejecutandose hasta encontrar un break y esto puede generar problemas en el resultado


switch (signo){

    case 'aries': 
    console.log ('Podrá sentir que las cosas no salen como usted las planeó y terminar irritado. Deberá moderar su temperamento y verá que de a poco las cosas mejorarán.');
    break;

    case 'tauro': 
    console.log ('Sepa que teniendo una postura más dinámica, podrá conquistar nuevas oportunidades y dejar atrás una etapa que fue poco satisfactoria para usted.');
    break;

    case 'geminis': 
    console.log ('Entienda que no es momento para que se proponga grandes logros, sepa que lo ideal sería ir resolviendo de a poco las pequeñas cuestiones pendientes.');
    break;

    case 'cancer': 
    console.log ('Aunque le duela en el alma, sepa que tendrá que rechazar ese proyecto que le ofrecieron hace días. No es un buen momento para invertir todo su capital.');
    break;

    case 'leo': 
    console.log ('En este día, podría enfrentarse con situaciones difíciles que le exigirán al máximo su atención. Sea paciente y antes de actuar piense bien los movimientos.');
    break;

    case 'virgo': 
    console.log ('Aunque no se sienta totalmente feliz, procure que la melancolía no lo atrape en estos momentos. Modifique el estilo de su vida y todo mejorará pronto.');
    break;

    case 'libra': 
    console.log ('Comprenda que muchas veces es bueno realizar un balance en la vida. Aprenda de los errores cometidos para poder mejorar las cosas y no cometerlos nuevamente.');
    break;

    case 'escorpio': 
    console.log ('En este día, deberá hablar menos y escuchar más. De esta manera, mejorará la comunicación y aprenderá a mantener un mejor vínculo con los demás.');
    break;

    case 'sagitario': 
    console.log ('Intente sincerarse con usted mismo. Debería aprender a reconocer sus comportamientos erróneos y buscarle la solución a cada una de las situaciones');
    break;

    case 'capricornio': 
    console.log ('Sepa que hoy su dinamismo y energía estarán en alza durante la jornada. Aproveche, ya que podrá poner en marcha todos los proyectos postergados.');
    break;

    case 'acuario': 
    console.log ('Entienda que el rencor no es un buen consejero en la vida. Sepa que debe actuar sin que el sentimiento oscurezca su razón. Actúe de forma prudente.');
    break;

    case 'piscis': 
    console.log ('En este día deberá extremar su paciencia al máximo. Sepa que no debe desesperarse si hoy siente que las obligaciones lo superan más de lo habitual.');
    break;

    default: 
    console.log ('no se encontro su signo, favor de verificar sus datos');
    break;

    //utilizamos defautl para ejecutar un codigo en el supuesto de que ninguno de los casos dentro del switch se aya ejecutado
}