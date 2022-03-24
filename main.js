//ENTREGA JS N°1 - Nicolás Lazarte

//Definición y asignación de variables
let eM = 0; //Estatura mujeres
let eH = 0; //Estatura hombres
let sumaeM = 0; //suma de estaturas mujeres
let sumaeH = 0; //suma de estaturas hombres
let m = 0; //acumulador mujeres
let h = 0; //acumulador hombres
let i = 0; //acumulador iteración
let input;

let nombre = prompt("Ingresa tu nombre");
alert(`Hola ${nombre}. Vamos a calcular el promedio de estura por sexo en centímetros de las personas ingresadas`)
alert("Instrucciones: Recordá ingresar la estatura en centímetros (cm) e indicar el sexo con las letras h (para hombre) o m (para mujer)");

//Ciclo
do{
    i++;
    let sexo = prompt(`Ingrese el SEXO de la persona ${i}:`);
    sexo = sexo.toUpperCase();
    //Estructura Switch
    switch(sexo){
        case 'M':
            m++;
            eM = parseInt(prompt(`Estatura mujer ${m} en cm:`));
            sumaeM = sumaeM + eM;
            break;
        case 'H':
            h++;
            eH = parseInt(prompt(`Estatura hombre ${h} en cm:`));
            sumaeH = sumaeH + eH;
            break;
        default:
            alert("Debes ingresar el sexo correctamente con m o h");
            i--;
            break;
    }
    input = prompt('Quieres ingresar otro dato? (si/no)');
    input = input.toUpperCase();
} while(input=='SI')

//Muestra del Resultado

if((m==0)&&(h==0)){
    alert(`No ingresaste ningún dato. Puedes volver a intentarlo ${nombre}!!`);
}else if (m==0){
    let promedioeH = sumaeH / h;
    alert(`Resultado: ${h} hombre/s con un promedio de estatura de ${promedioeH} cm. No ingresaste datos de mujeres`);
    alert(`Gracias por participar ${nombre}!!`);
}else if (h==0){
    let promedioeM = sumaeM / m;
    alert(`Resultado: ${m} mujer/es con un promedio de estatura de ${promedioeM} cm. No igresaste datos de hombres`);
    alert(`Gracias por participar ${nombre}!!`);
}else{
    let promedioeM = sumaeM / m;
    let promedioeH = sumaeH / h;
    alert(`Resultados: ${m} mujer/es con un promedio de estatura de ${promedioeM} cm y ${h} hombre/s con un promedio de estatura de ${promedioeH} cm`);
    alert(`Gracias por participar ${nombre}!!`);
}
