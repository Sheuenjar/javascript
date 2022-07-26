
let objeto_usuario0 = new Usuario("sheuen","sheuenjaramillo@gmail.com","password");

let respuesta = confirm("Desea registrarse en la pagina?");
if(respuesta){
    pedir_datos();
}






//prueba funcion para pedir string
/*
function pedir_string(nombre1,contenido,error){
    nombre1 = prompt(contenido);
    while(nombre1 == "" || nombre1 === null){
        alert(error);
        nombre1 = prompt(contenido);
    }
    alert("El nombre ingresado es: "+nombre1);
}
pedir_string("nombre","Ingresa tu nombre","Ingresa tu nombre correctamente");
*/




