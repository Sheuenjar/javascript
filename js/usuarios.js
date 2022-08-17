
//Usuarios
class Usuarios{
    constructor(nombre,email,contrasenia){
        this.nombre = nombre;
        this.email = email;
        this.contrasenia = contrasenia;
        this.activado = true;
    }
    mostrar_bienvenida(){
        alert("Bienvenido/a "+this.nombre+"\n"+
        "Tus datos fueron guardados correctamente\n\n"+
        "Los datos ingresados son: \n"+
        "Nombre: "+this.nombre+"\n"+
        "E-mail: "+this.email+"\n"+
        "Su estado es "+this.activado);
    }
}
// nuevo arreglo usuarios
let arreglo_usuarios = new Array();
arreglo_usuarios.push(new Usuarios("Sheuen","sheuen@gmail.com","password"));
arreglo_usuarios.push(new Usuarios("Lucia","lucia@gmail.com","password"));

//valida para iniciar sesion
function validar_usuario(nombre,email,contrasenia){
    let i = 0;
    while(i < arreglo_usuarios.length){
        if(arreglo_usuarios[i].nombre == nombre && arreglo_usuarios[i].email == email && arreglo_usuarios[i].contrasenia == contrasenia){
           return i;
        }
        i++;
    }
    return -1;
}

//busca que no exista ya el usuario para el registro
function buscar_usuario(nombre,email){
    let i = 0;
    while(i < arreglo_usuarios.length){
        if(arreglo_usuarios[i].nombre == nombre || arreglo_usuarios[i].email == email){
           return i; 
        }
        i++;
    }
    return -1;
}



//Iniciar sesion (funcion)
function iniciar_sesion(){
    let nombre = prompt("Para iniciar sesion ingresa tu nombre");
    while(nombre == "" || nombre === null || parseInt(nombre)){
        alert("Ingresa tu nombre correctamente");
        nombre = prompt("Para iniciar sesion ingresa tu nombre");
    }
    let email = prompt("Hola "+nombre+", ahora ingresa tu e-mail");
    while(email == "" || email === null || parseInt(email)){
        alert("Ingresa tu e-mail correctamente");
        email = prompt("Hola "+nombre+", ahora ingresa tu e-mail");
    }
    let contrasenia = prompt("ingresa tu contraseña");
    while(contrasenia == "" || contrasenia === null){
        alert("ingresa una contraseña valida");
        contrasenia = prompt("ingresa tu contraseña");
    }
    let validacion = validar_usuario(nombre,email,contrasenia);
    if(validacion >= 0){
        arreglo_usuarios[validacion].mostrar_bienvenida();
        comprar();
    }
    else if(validacion < 0){
        alert("Tu usuario, e-mail y/o contraseña no existe")
    }
}




//Registro nuevo Usuario (funcion)
function pedir_registro(){
    let nombre = prompt("Ingresa tu nombre");
    while(nombre == "" || nombre === null || parseInt(nombre)){
        alert("Ingresa tu nombre correctamente");
        nombre = prompt("Ingresa tu nombre");
    }
    let email = prompt("Hola "+nombre+", ahora ingresa tu e-mail");
    while(email == "" || email === null || parseInt(email)){
        alert("Ingresa tu e-mail correctamente");
        email = prompt("Hola "+nombre+", ahora ingresa tu e-mail");
    }
    let contrasenia = prompt("ingresa una contraseña");
    while(contrasenia == "" || contrasenia === null){
        alert("ingresa una contraseña valida");
        contrasenia = prompt("ingresa una contraseña");
    }
    let validacion = buscar_usuario(nombre, email);
    if(validacion >= 0){
        alert("El usuario o el e-mail ya fueron registrados, inicia sesion o volvete a registrar con otros datos");
    }else if(validacion < 0) {
        arreglo_usuarios.push(new Usuarios(nombre,email,contrasenia));
        alert("Te registraste correctamente, a continuacion inicia sesion para confirmar tu cuenta");
        iniciar_sesion();
    }
}
