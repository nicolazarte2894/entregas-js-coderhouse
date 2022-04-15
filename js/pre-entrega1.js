//1° PRE-ENTREGA
//Formulario de personas

//Registro de usuario con constructor y pusheo en el array
class Usuario {
    constructor (nombre, password, email, pin){
        this.nombre = nombre,
        this.password = password,
        this.email = email,
        this.pin = pin
    }
}

//FUNCIONES DE VALIDACIÓN
//Validación nombre
function validarNombre(nombre){
    while (nombre == " " || nombre == null){
        nombre = prompt("Su ingreso no es válido. Intente ingresar su nombre de usuario nuevamente:");
    }
    return nombre;
}
//Función de validación de numero para Registro de contraseña
let numeros = "0123456789";
function validarNumero (texto){
    for(let i=0;i < texto.length;i++){
        if(numeros.indexOf(texto.charAt(i),0)!=-1){
            return true;
        }
    }
    return false;
}
//Validación Password
function validarPassword(password){
    while ((password === password.toLowerCase()) || (password.length<8) || (!validarNumero(password))){
        //Condiciones y alerts de errores
        if(password === password.toLowerCase()){
            alert("Invalido: Al menos un caracter debe ser mayúsculas");
        }
        if(password.length<8){
            alert("Inválido: La contraseña debe tener por lo menos 8 caracteres ");
        }
        if(!validarNumero(password)){
            alert("Invalido: Al menos debe contener un número");
        }
        password = prompt("Tu constraseña no cumple con los requisitos. Intente nuevamente:");  
    }
    return password; 
}
//Validar PIN
function validarPin(pin){
    while(isNaN(pin) && (pin.length !== 4)){
        pin = parseInt(prompt("Error. Su pin debe tener 4 digitos numéricos"));
    }
    return pin;
}

//Definición de lista de usuarios y la función de registro
let listaUsuarios = [];




function agregarUsuario(){
    let nombre = prompt("Indique su nombre de usuario");
    //Validación nombre
    nombre = validarNombre(nombre);
    let password = prompt("Registre su contraseña");
    //Validación nombre
    password = validarPassword(password);
    let email = prompt("Ingrese su correo electrónico");
    let pin = parseInt(prompt("Ingrese un pin de recuperación de contraseña de 4 dígitos numéticos. Ej 2578"));
    //Validar PIN
    pin = validarPin(pin);
    //CONSTRUCCION DE LA NUEVA CUENTA Y PUSHEO A LA LISTA DE USUARIOS
    let nuevoUsuario = new Usuario (nombre, password, email, pin);
    listaUsuarios.push(nuevoUsuario);
}

listaUsuarios.push(new Usuario("nicolazarte","38650136Lazy","nicolazarte2894@gmail.com", 2894));

while(confirm("¿Desea registrar un usuario?")){
    agregarUsuario();
}


//INICIO DE SESION - Uso funcion de orden superior .some
function inicioDeSesion() {
    let nombreUsuario = prompt('Bienvenido al Inicio de Sesion. Ingrese su Usuario');
    let passwordUsuario = prompt('Ingrese su contraseña');
    //Uso funcion some para evaluar si existe el usuario y contraseña en la lista de usuarios
    let confirmarUsuario = listaUsuarios.some(obj => obj.nombre == nombreUsuario);
    let confirmarPassword = listaUsuarios.some(obj => obj.password == passwordUsuario);
    if (confirmarUsuario == true && confirmarPassword == true) {
        alert('Ha iniciado sesión. Bienvenido a Coder Wallet')
    } else {
        alert('Acceso Denegado. Vuelva a intentarlo')
    }
}
//Consulta de Inicio de sesión
if(confirm("Desea iniciar sesión?")){
inicioDeSesion();
}else{
    alert("Gracias. Lo esperamos en otro momento");
}