

//declaro carrito arreglo
let arreglo_carrito = new Array();
//declaro avisos
let avisos = document.getElementById('avisos');
//declaro boton para crear
let btn_crear_producto = document.getElementById('btn_crear_producto');

btn_crear_producto.addEventListener('click',()=>{
    if (validar_formulario()){
        generarProducto();
    }
})

function validar_formulario(){
    avisos.innerHTML = "";
    let input_nombre = document.getElementById('nombreProducto').value;
    let input_piedra = document.getElementById('piedraProducto').value;
    let input_categoria = document.getElementById('categoriaProducto').value;
    let input_precio = document.getElementById('precioProducto').value;
    //arreglo mensajes de error
    let arreglo_mensajes = new Array();
    //pushea al arreglo cada mensaje si la condicion se cumple
    if (!input_nombre){
        arreglo_mensajes.push('No ingresaste el nombre del producto');
    }
    if (!input_piedra){
        arreglo_mensajes.push('No ingresaste el nombre de la piedra');
    }
    if(!input_categoria){
        arreglo_mensajes.push('No ingresaste la categoria del producto');
    }
    if (!input_precio){
        arreglo_mensajes.push('No ingresaste el precio del producto');
    }
    if (arreglo_mensajes.length>0){
        //creo una lista
        let lista = document.createElement('ul');
        //indico el contenido
        lista.textContent = 'No fue posible cargar el producto: ';
        //crea un li para cada mensaje del array
        arreglo_mensajes.forEach(element => {
            //llama a la funcion crear li
            lista.appendChild(crear_li(element));
        });
        avisos.appendChild(lista);
    }
    return arreglo_mensajes.length == 0;
}

function crear_li(mensaje){
    let li = document.createElement('li');
    li.textContent = mensaje;
    return li;
}

function generarProducto(){
    let nombre = document.getElementById('nombreProducto').value;
    let piedra = document.getElementById('piedraProducto').value;
    let categoria = document.getElementById('categoriaProducto').value;
    let precio = document.getElementById('precioProducto').value;

    //crea el objeto
    let producto = new Productos(nombre,piedra,categoria,precio);
    //pusheo el objeto al array
    arreglo_productos.push(producto);

    crearCajaProducto(producto);
    resetear_form();
}



function resetear_form(){
    document.getElementById('nombreProducto').value = '';
    document.getElementById('piedraProducto').value = '';
    document.getElementById('categoriaProducto').value = '';
    document.getElementById('precioProducto').value = '';
}






