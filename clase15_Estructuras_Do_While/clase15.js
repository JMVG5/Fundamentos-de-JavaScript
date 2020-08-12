var contador = 0 ;

//funcion que retorna datos menores a 0.25
const llueve = () => Math.random() < 0.25

//los ciclos do while funcionan de manera muy parecida a los ciclos while, sin embargo los ciclos do while, simepre van a ejecutar el codigo al menos 1 vez antes de preguntar
//por la condicion y el ciclo no se rompera hasta que la funcion se deje de cumplir
do{
contador ++
}while(!llueve())

if(contador === 1){
    console.log(`fui a ver si llovia ${contador} vez`)
}else{
    console.log(`fui a ver si llovia ${contador} veces`)
}
