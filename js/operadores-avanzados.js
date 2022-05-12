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
let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

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
    localStorage.setItem("usuarios",JSON.stringify(listaUsuarios))
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
    return !(password === password.toLowerCase());
}
//4- Validar Length (Mínimo 8 caracteres)
function validarLength(password){
    return password.length>=8;
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
    /*
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
    }*/
    //OPTIMIZACIÓN OPERADOR TERNARIO - Validación Password
    validarNumero(password.value) ? req1.className = "valid" : req1.className = "no-valid";
    validarLowerCase(password.value) ? req2.className = "valid" : req2.className = "no-valid";
    validarLength(password.value) ? req3.className = "valid" : req3.className = "no-valid";
}
);
//Click Registro usuario
const registrar = document.getElementById("btn-register");
const registerForm = document.getElementById("register-form");
registrar.onclick = (e) => {
    e.preventDefault();
    //Validación
    if(validarNulo(nombre)&&validarNulo(apellido)&&validarNulo(email)&&validarNulo(usuario)&&validarNumero(password.value)&&validarLowerCase(password.value)&&validarLength(password.value)){
        agregarUsuario();
        swal({
            title: "Felicidades!",
            text: "Se ha registrado a CoderWallet!",
            icon: "success",
        });
    } else {
        swal({
            title: "Error!",
            text: "Los campos ingresados no cumplen con los requisitos!",
            icon: "error",
        });
    }
    registerForm.reset();
}

//Click Inicio Sesión
const iniciarSesion = document.getElementById("btn-login");
let usuarioLogin = document.getElementById("usuario-login");
let passwordLogin = document.getElementById("password-login");
const loginForm = document.getElementById("login-form")
iniciarSesion.onclick = (e) => {
    e.preventDefault();
    //Validación
    let confirmarUsuario = listaUsuarios.some(obj => obj.email == usuarioLogin.value || obj.usuario == usuarioLogin.value);
    let confirmarPassword = listaUsuarios.some(obj => obj.password == passwordLogin.value);
    if (confirmarUsuario && confirmarPassword ) {
        swal({
            title: "Bienvenido a CoderWallet!",
            icon: "success",
        });
    } else {
        swal({
            title: "Error en el Inicio de Sesión. Intente nuevamente!",
            icon: "error",
        });
    }
    loginForm.reset();
};



//5 - Añadir nodo
/* const loginPage = document.querySelector("#login-page")
const nuevoNodo = () =>{
    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("div-alert")
    loginPage.appendChild(nuevoDiv);
} */