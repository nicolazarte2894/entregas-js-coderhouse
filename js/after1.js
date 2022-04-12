//EJERCICIO 1: Mostrar lista 54321, 4321, 321, 21, 1

/*let lista = "Lista de números:";
let numero = parseInt(prompt("Ingrese un número para mostrar la lista"));
for(let i = numero; i >=1 ; i--){
    lista += `\n${i}`;
    for(let j=i; j>=2;j--){
        lista+=`${j-1}`;
    }   
}
alert(lista); */

//EJERCICIO 2: Tabla de multiplicar de un numero
/*let numero = parseInt(prompt("Ingrese un número para obtener la tabla de multiplicación"))
let tabla = `Tabla de multiplicación de ${numero}:`;
for (let i = 1; i <= numero ; i++){
    tabla += `\n${i} x ${numero} = ${i*numero}`;
}
alert(tabla);*/

//EJERCICIO 3: Obtener el factorial de un numero ingresado

/*let factorial = 1;
let numero = prompt("Ingrese un número para calcular el factorial o ingrese ESC para salir");

while ((isNaN(numero))&&(numero!="ESC")){
    numero = prompt("Ingrese un número para calcular el factorial o ingrese ESC para salir");
}
if (numero == "ESC") {
    alert ("Hasta pronto")
} else {
    numero = parseInt(numero); //En este paso recién parseo el numero ya que respete la lógica de los ciclos y condiciones anteriores
    for (let i=1; i<=numero;i++){
        factorial*=i;
    }
    alert(`El factorial de ${numero} es ${factorial}`);
}*/


