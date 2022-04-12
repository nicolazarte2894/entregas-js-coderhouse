// COMPLEMENTARIO 2 - ARRAYS
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

let listaUsuarios = [];

function agregarUsuario(){
    let nombre = prompt("Indique su nombre de usuario");
    let password = prompt("Registre su contraseña");
    let email = prompt("Ingrese su correo electrónico");
    let pin = parseInt(prompt("Ingrese un pin de recuperación de contraseña de 4 dígitos numéticos. Ej 2578"));
    let nuevoUsuario = new Usuario (nombre, password, email, pin);
    listaUsuarios.push(nuevoUsuario);
}

listaUsuarios.push(new Usuario("nicolazarte","38650136Lazy","nicolazarte2894@gmail.com", 2894));

while(confirm("¿Desea registrar un usuario?")){
    agregarUsuario();
}

//Muestro lista usuario
console.log(listaUsuarios);