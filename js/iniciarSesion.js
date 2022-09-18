
//Iniciar sesion (funcion)

// arreglo_usuarios (el arreglo ya existe)
/* let avisosIS = document.getElementById('avisosIS'); */

/* let btn_iniciar_sesion = document.getElementById('btn_iniciar_sesion'); */

/* btn_iniciar_sesion.addEventListener('click',()=>{
    if(validarFormularioIS()){
        iniciar_sesion();
    }
}) */

/* function validarFormularioIS(){
    avisos.innerHTML = "";
    let nombreUsuario = document.getElementById('nombreUsuario').value;
    let emailUsuario = document.getElementById('emailUsuario').value;
    let contraseniaUsuario = document.getElementById('contraseniaUsuario').value;
    let arregloMensajes = new Array();
    if(!nombreUsuario){
        arregloMensajes.push('No ingresaste tu nombre');
    }
    if(!emailUsuario){
        arregloMensajes.push('No ingresaste tu email');
    }
    if(!contraseniaUsuario){
        arregloMensajes.push('No ingresaste tu contraseña');
    }
    if(arregloMensajes.length>0){
        let lista = document.createElement('ul');
        lista.textContent = 'No fue posible cargar el producto: ';
        arregloMensajes.forEach(Element => {
            lista.appendChild(crear_li(element));
        });
        avisos.appendChild(lista);
    }
    return arregloMensajes.length == 0;
} */
 

//valida para iniciar sesion
/* function validar_usuario(nombreUsuario,emailUsuario,contraseniaUsuario){
    let i = 0;
    while(i < arreglo_usuarios.length){
        if(arreglo_usuarios[i].nombre == nombre && arreglo_usuarios[i].email == email && arreglo_usuarios[i].contrasenia == contrasenia){
           return i;
        }
        i++;
    }
    return -1;
} */


/* function iniciar_sesion(){
    let nombre = document.getElementById('nombreUsurio').value;
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
} */
