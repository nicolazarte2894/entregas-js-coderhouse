//ENTREGA - DOM
//Login

//Registro de usuario con constructor y pusheo en el array
class Usuario {
    constructor (nombre, apellido, email, usuario, password){
        this.nombre = nombre,
        this.apellido = apellido,
        this.email = email,
        this.usuario = usuario,
        this.password = password
    }
}

//Definición de lista de usuarios y la función de registro
let listaUsuarios = [];

//FUNCIONES
//Agregar Usuario
function agregarUsuario(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    //CONSTRUCCION DE LA NUEVA CUENTA Y PUSHEO A LA LISTA DE USUARIOS
    let nuevoUsuario = new Usuario (nombre, apellido, email , usuario, password);
    listaUsuarios.push(nuevoUsuario);
}

//VALIDACIONES - Retornan true si cumplen con los requisitos, sino realizan determinadas acciones
//1- Validar nulo
function validarNulo(texto){
    if (texto.value ==" " || texto.value == null){
        texto.className = "validar-nulo";
    }else{
        texto.className = "valido";
        return true;
    }
}
//2- Validar Numero
let numeros = "0123456789";
function validarNumero(password){
    for(let i=0;i < password.length;i++){
        if(numeros.indexOf(password.charAt(i),0)!=-1){
            return true;
        }
    }
    return false;
}
//3- Validar Lowecase
function validarLowerCase(password){
    if(password === password.toLowerCase()){
        return false;
    } else{
        return true;
    }
}
//4- Validar Length (Mínimo 8 caracteres)
function validarLength(password){
    if(password.length<8){
        return false;
    } else {
        return true;
    }
}


//EVENTOS
//Validación ()
//Validación nulos
const nombre = document.querySelector("#nombre");
nombre.addEventListener("input", () =>{
    validarNulo(nombre);
});
const apellido = document.querySelector("#apellido");
apellido.addEventListener("input", () =>{
    validarNulo(apellido);
});
const email = document.querySelector("#email");
email.addEventListener("input", () =>{
    validarNulo(email);
});
const usuario = document.querySelector("#usuario");
usuario.addEventListener("input", () =>{
    validarNulo(usuario);
});
const password = document.querySelector("#password");
password.addEventListener("input", () =>{
    validarNulo(password);
});
//Validación Password
const req1 = document.getElementById("req-num");
const req2 = document.getElementById("req-lower");
const req3 = document.getElementById("req-length");
password.addEventListener("input", () =>{
    console.log(password.value);
    if(validarNumero(password.value)){
        req1.className = "valid";
    }else{
        req1.className = "no-valid";
    }
    if(validarLowerCase(password.value)){
        req2.className = "valid";
    }else{
        req2.className = "no-valid";
    }
    if(validarLength(password.value)){
        req3.className = "valid";
    }else{
        req3.className = "no-valid";
    }
}
);
//Click Registro usuario
const registrar = document.getElementById("btn-register");
registrar.onclick = (e) => {
    e.preventDefault();
    //Validación
    if(validarNulo(nombre)&&validarNulo(apellido)&&validarNulo(email)&&validarNulo(usuario)&&validarNumero(password.value)&&validarLowerCase(password.value)&&validarLength(password.value)){
        agregarUsuario();
        alert("Felicidades. Te has registrado a Coder Wallet!!");
    } else {
        // let nodoNuevo = document.createElement("div");
        // nodoNuevo.innerHTML = "<p>No cumple con los requisitos. Por favor verifique los campos</p>";
        // document.body.append(nodoNuevo);
        alert("No cumple con los requisitos. Por favor verifique los campos!");
    }
}

//Click Inicio Sesión
const iniciarSesion = document.getElementById("btn-login");
    //Get element
    let usuarioLogin = document.getElementById("usuario-login");
    let passwordLogin = document.getElementById("password-login");
iniciarSesion.onclick = (e) => {
    e.preventDefault();

    //Validación
    let confirmarUsuario = listaUsuarios.some(obj => (obj.usuario == usuarioLogin.value)||(obj.email == usuarioLogin.value));
    let confirmarPassword = listaUsuarios.some(obj => obj.password == passwordLogin);
    if (confirmarUsuario && confirmarPassword ) {
        alert('Ha iniciado sesión. Bienvenido a Coder Wallet')
    } else {
        alert('Acceso Denegado. Vuelva a intentarlo')
    }
}
