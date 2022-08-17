

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


