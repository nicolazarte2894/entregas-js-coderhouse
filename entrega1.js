//FORMULARIO LOGIN PARA APP BANCARIA O WALLET

let usuarioRegistro;
let passwordRegistro;
let nombreUsuario;
let passwordUsuario;

//REGISTRO NOMBRE DE USUARIO

function registroUsuario (){
    alert("Bienvenido a Coder Wallet. Vamos a registrar tu nombre de usuario y contraseña")
    usuarioRegistro = prompt("Ingrese su nombre de usuario:");
    
    //Validación
    while (usuarioRegistro == " " || usuarioRegistro == null){
        usuarioRegistro = prompt("Su ingreso no es válido. Intente ingresar su nombre de usuario nuevamente:");
    }
}

//REGISTRO CONTRASEÑA

//Función de validación para saber si hay un número dentro de la contraseña
let numeros = "0123456789";
function validarNumero (texto){
    for(let i=0;i < texto.length;i++){
        if(numeros.indexOf(texto.charAt(i),0)!=-1){
            return true;
        }
    }
    return false;
}

function registroPassword(){
    passwordRegistro = prompt("Registre su contraseña. Debe cumplir con los siguientes requisitos:\n-Mínimo 8 caracteres\n-Una mayúscula\n-Un número");
    
    //Validación
    while ((passwordRegistro === passwordRegistro.toLowerCase()) || (passwordRegistro.length<8) || (!validarNumero(passwordRegistro))){
        if(passwordRegistro === passwordRegistro.toLowerCase()){
            alert("Invalido: Al menos un caracter debe ser mayúsculas");
        }
        if(passwordRegistro.length<8){
            alert("Inválido: La contraseña debe tener por lo menos 8 caracteres ");
        }
        if(!validarNumero(passwordRegistro)){
            alert("Invalido: Al menos debe contener un número");
        }
        passwordRegistro = prompt("Tu constraseña no cumple con los requisitos. Intente nuevamente:");  
    } 
}

//INICIO DE SESION
function inicioDeSesion() {
    nombreUsuario = prompt('Bienvenido al Inicio de Sesion. Ingrese su Usuario')
    while (nombreUsuario != usuarioRegistro) {
        nombreUsuario = prompt('El nombre de usuario ingresado es incorrecto. Intente nuevamente')
    }
    passwordUsuario = prompt('Ingrese su contraseña')
    while (passwordUsuario != passwordRegistro) {
        passwordUsuario = prompt('La contraseña ingresada es incorrecta. Intente nuevamente')
    }
    if (nombreUsuario === usuarioRegistro && passwordUsuario === passwordRegistro) {
        alert('Ha iniciado sesión. Bienvenido a Coder Wallet')
    } else {
        alert('Acceso Denegado. Vuelva a intentarlo')
    }
}

if(confirm("Desea comenzar con el proceso de Registro e inicio de sesión?")){
    registroUsuario();
    console.log(usuarioRegistro);
    registroPassword();
    console.log(passwordRegistro);
    inicioDeSesion();
}else{
    alert("Lo esperamos en otro momento")
}