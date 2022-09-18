
//Usuarios
class Usuarios{
    constructor(nombre,email,contrasenia){
        this.nombre = nombre;
        this.email = email;
        this.contrasenia = contrasenia;
        this.activado = true;
    }
    /* funcion exclusiva del Usuario */
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
let avisos_is = document.getElementById('avisosIS');
//mis USUARIOS predefinidos
arreglo_usuarios.push(new Usuarios("Sheuen","sheuen@gmail.com","password"));
arreglo_usuarios.push(new Usuarios("Lucia","lucia@gmail.com","password"));



// INICIAR SESION

//declaro boton para iniciar sesion
let btn_iniciar_sesion = document.getElementById('btn_iniciar_sesion');
btn_iniciar_sesion.addEventListener('click', ()=> {
    if(validarFormularioIs()){

            iniciarSesion();
    }
})

function validarFormularioIs(){
    avisos_is.innerHTML = "";
    let input_nombreUsuarioIs = document.getElementById('nombreUsuario').value;
    let input_emailUsuarioIs = document.getElementById('emailUsuario').value;
    let input_contraseniaUsuarioIs = document.getElementById('contraseniaUsuario').value;

    let arreglo_mensajesIs = new Array();

    if(!input_nombreUsuarioIs){
        arreglo_mensajesIs.push('No ingresaste tu nombre de usuario');
    }
    if(!input_emailUsuarioIs){
        arreglo_mensajesIs.push('No ingresaste tu e-mail');
    }
    if(!input_contraseniaUsuarioIs){
        arreglo_mensajesIs.push('No ingresaste tu contraseña');
    }
    if(arreglo_mensajesIs.length>0){
        //crea una lista
        let lista = document.createElement('ul');
        //contenido de la lista
        lista.textContent = 'No fue posible cargar el producto: ';
        // un li para cada input
        arreglo_mensajesIs.forEach(element => {
            //llama funcion crearLi()
            lista.appendChild(crearLi(element));
        });
        avisos_is.appendChild(lista);
    }
    return arreglo_mensajesIs.length == 0;
}

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


function crearLi(mensaje){
    let li = document.createElement('li');
    li.textContent = mensaje;
    return li;
}

//funcion INICIAR SESION
function iniciarSesion(){
    let nombre = document.getElementById('nombreUsuario').value;
    let email = document.getElementById('emailUsuario').value;
    let contrasenia = document.getElementById('contraseniaUsuario').value;
    let validacion = validar_usuario(nombre,email,contrasenia);
    if(validacion >= 0){
        arreglo_usuarios[validacion].mostrar_bienvenida();
        comprar();
    }
    else if(validacion < 0){
        alert("Tu usuario, e-mail y/o contraseña no existe")
    }
}


function resetear_formIs(){
    document.getElementById('nombreUsuario').value = '';
    document.getElementById('emailUsuario').value = '';
    document.getElementById('contraseniaUsuario').value = '';
}





//registro
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



//Registro nuevo Usuario (funcion)
function pedir_registro(){
    let nombre = prompt("Ingresa tu nombre");
    while(nombre == "" || parseInt(nombre) || nombre === null){
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
    }
}



