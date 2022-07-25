//OBJETOS
class Usuario {
    constructor(nombre,email,contrasenia){
        this.nombre = nombre;
        this.email = email;
        this.contrasenia = contrasenia;
        this.activado = true;
    }
    mostrar_bienvenida(){
        alert("Bienvenido/a "+this.nombre+"\n"+
        "Sus datos se guardaron correctamente\n\n"+
        "Los datos ingresados son: \n"+
        "Nombre: "+this.nombre+"\n"+
        "E-mail: "+this.email+"\n"+
        "Su estado es "+this.activado);
    }
}
class Anillo{
    constructor(precio, tamanio){
        this.precio = precio;
        this.tamanio = tamanio;
    }
    
}
class Envio{
    constructor(precio, destino, empresa){
        this.precio = precio;
        this.destino = destino;
        this.empresa = empresa;
    }

}

//FUNCIONES
//datos que ingresa el usuario
function pedir_datos(){
    let nombre = prompt("Ingresa tu nombre?");
    while(nombre == "" || nombre === null){
        alert("Ingresa tu nombre correctamente");
        nombre = prompt("Ingresa tu nombre");
    }
    let email = prompt("Hola "+nombre+", ahora ingresa tu e-mail");
    while(email == "" || email === null){
        alert("Ingresa tu e-mail correctamente");
        email = prompt("Hola "+nombre+", ahora ingresa tu e-mail");
    }
    let contrasenia = prompt("ingresa tu contraseña");
    while(contrasenia == "" || contrasenia === null){
        alert("ingresa una contraseña valida");
        contrasenia = prompt("ingresa tu contraseña");
    }

    if(nombre && email && contrasenia){
        let validar = validar_rep_datos(nombre,email);
        if(validar){
            //se crea el objeto usuario1
            let objeto_usuario1 = new Usuario(nombre,email,contrasenia);
            console.log(objeto_usuario1);
            objeto_usuario1.mostrar_bienvenida();
        }else{
            alert("Intenta nuevamente ingresando otros datos");
        }
    }
}

//validar que los datos no se repitan
function validar_rep_datos(nombre,email){
    if(nombre == objeto_usuario0.nombre){
        alert("ya existe alguien con ese nombre de usuario");
        return false;
    }
    else if(email == objeto_usuario0.email){
        alert("el e-mail ingresado ya esta registrado");
        return false;
    }else{
        return true;
    }
}




