
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

//EVENTOS
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


