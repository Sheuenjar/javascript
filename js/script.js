//puedo pushear este comentario

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

//busca no repeticiones para el registro
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


//Productos
class Productos{
    constructor(nombre, piedra, categoria, precio, id){
        this.nombre = nombre;
        this.piedra = piedra;
        this.categoria = categoria;
        this.precio = precio;
        this.id = id;
    }
    mostrar_productos(){
        return this.id+") "+this.categoria+" "+this.nombre+" con "+this.piedra+" valor: $"+this.precio;
    }
}
let arreglo_productos = new Array();
arreglo_productos.push(new Productos("Africa", "Amatista", "Anillo", "4540", 1));
arreglo_productos.push(new Productos("Tunes", "Lapislazuli", "Pulsera", "14500", 2));
arreglo_productos.push(new Productos("California", "Aventurina", "Dije", "7400", 3));
arreglo_productos.push(new Productos("Costa Rica", "Ambar", "Esclava", "13000", 4));
arreglo_productos.push(new Productos("Amazonas", "Piedra Luna", "Aros", "9299", 5));

//pendiente carrito
let arreglo_carrito = new Array();

//funcion mostrar arreglo
function mostrar_stock(){
    let mensaje = "Los productos en stock son: \n";
    // para cada producto aplica ese mensaje 
    arreglo_productos.forEach((producto) => {
        mensaje += "\n"+producto.mostrar_productos();
    })
    return mensaje;
}

//funcion seleccionar producto del arreglo
function comprar(){
    let compra = prompt(mostrar_stock()+"\n\nElegi el producto ingresando su numero");
    while(compra == "" || isNaN(compra)){
        alert("Ingresa un numero para elegir un producto")
        compra = prompt(mostrar_stock()+"\n\nElegi el producto ingresando su numero");
    }
    alert(arreglo_productos[compra-1].mostrar_productos());
}

function validar_stock_productos(arreglo){
if (arreglo.length == 0){
    alert("No hay productos en el array")
    return false;
    }
    return true;
}


//Envios a todo el pais
class Envio{
    constructor(empresa, destino, precio){
        this.empresa = empresa;
        this.destino = destino;
        this.precio = precio;
    }
}
let arreglo_envios = new Array();
arreglo_envios.push(new Envio("Andreani","domicilio","900"));
arreglo_envios.push(new Envio("Andreani","sucursal","700"));
arreglo_envios.push(new Envio("Correo Argentino","domicilio","600"));
arreglo_envios.push(new Envio("Correo Argentino","sucursal","400"));







//APLICA FUNCIONES - aca empieza a interactuar con el usuario
let menu = true;
while (menu){
    let opciones = "Que te gustaria realizar?";
    opciones += "\n1) Iniciar sesion";
    opciones += "\n2) Registrarme";
    opciones += "\n3) Ingresar como invitado";
    opciones += "\n4) Salir";

    let respuesta = prompt(opciones);

    switch (respuesta){
        case "1":
            iniciar_sesion();
            break;
        case "2":
            pedir_registro();
            break;
        case "3":
            comprar();
            break;
        case "4":
            alert("Gracias por utilizar mi sitio web");
            menu = false;
            break;
        case null:
            alert("Gracias por utilizar mi sitio web");
            menu = false;
            break;
        default:
            alert("No ingresaste una opcion valida");
    }
}











