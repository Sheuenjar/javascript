


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


//identifico el contenedor de productos
let contenedorCajasProductos = document.getElementById("contenedorCajasProductos");

for (let i = 0; i<arreglo_productos.length; i++){
    let producto = arreglo_productos[i];
    crearCajaProducto(producto);
}

function crearCajaProducto(producto){
    let cajaProducto = document.createElement("div");
    let tituloProducto = document.createElement("p");
    tituloProducto.textContent = producto.mostrar_productos();
    //cajaproducto va a ser papa de tituloproducto
    cajaProducto.appendChild(tituloProducto);
    //coloco al producto en su caja
    contenedorCajasProductos.appendChild(cajaProducto);

    //MOUSEOVER cuando paso el cursor..
    cajaProducto.addEventListener("mouseover",()=>{
        cajaProducto.style.backgroundColor = "grey";
    });
    //MOUSEOUT cuando dejo de pasar el cursor..
    cajaProducto.addEventListener("mouseout",()=>{
        cajaProducto.style.backgroundColor = "white"
    });

    //elimina el producto
    cajaProducto.addEventListener("click",()=>{
        contenedorCajasProductos.removeChild(cajaProducto);

    })
}


//event.target
let subitemList = document.getElementById("subitemList");

//event = click
subitemList.addEventListener('click', (event) => {
    //Objeto de evento
    if(event.target.className === 'item2'){
        if(event.target.children[0].style.display === "block"){
            event.target.children[0].style.display = "none";
        } else {
            event.target.children[0].style.display = "block";
        }
    }
});






