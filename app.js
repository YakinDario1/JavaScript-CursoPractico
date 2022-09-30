let nombre = "Yakin Dario";
let apellido = "Mendez Muñoz";
let user = "@yakindario";
let edad = 25;
let correo = "yakin@hola.com";
let mayorEdad = edad >= 18 ? true : false; 
let ahorrado = 1000;
let deuda = 500;

//Imprimir en consola

let nombreCompleto = nombre + " " + apellido;
let dineroReal = ahorrado - deuda;
console.log(`Tu nombre completo: ${nombreCompleto}`);
console.log(`tu Dinero es: ${dineroReal}`);

//funciones 
function nombreCompleto(nombre, apellido){
    return nombre + " " + apellido;
}
function saludo(nombre,apellido,user){
    const completo = nombreCompleto(nombre,apellido);
    console.log(`Hola ${completo} ${user}`);
}

//replica de switch

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion = "free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion = "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion = "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion = "Expert+"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
