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


let i = 0;
while (i < 5){  
    console.log("Hola");
    i++;
}

let x = 0;
while (i >= 2){  
    console.log("Hola");
    i++;
}

while (true){
    let pregunta = prompt("cuanto es 2 + 2");
    if (parseInt(pregunta) == 4){
        console.log("felicitaciones respuesta Correcto");
        break;
    }else{
        console.log("respuesta incorrecta");
    }
}


const array = [1,'holi',true,undefined,null,{}];

const objeto = {
    nombre: "Yakin",
    edad: 25,
    comidaFavorita: "Pizza"
}


function imprimirPrimerElemento(array){
    console.log(array[0]);
}

function imprimirTodosLosElementos(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

const objeto = {
    nombre: "Yakin",
    edad: 25,
    comidaFavorita: "Pizza"
}  

function imprimirElementosObjeto(objeto){
    for (let i in objeto){
        console.log(objeto[i]);
    }
}

function imprimirElementosPorElementoObjeto(objeto){
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

const tipoDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};
function conseguirTiposSuscripciones(suscripcion){
    if(tipoDeSuscripciones[suscripcion]){
        console.log(tipoDeSuscripciones[suscripcion]);
        return;
    }
    console.warn("No existe esa suscripcion");
}