


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



/* EVENTOS */
//identifico al parrafo sobre los input
let titulo = document.getElementById("titulo");
//le cambio su contenido
titulo.textContent = "Selecciona los Productos";







