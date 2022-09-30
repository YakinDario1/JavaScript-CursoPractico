# JavaScript❤️

## Variables y operaciones

**Responde la siguiente preguntas:**

* ¿Qué es una variable y para qué sirve?

  Una variable es un espacio en memoria que nos permite almacenar informacion. una caja de informacion dependiendo el tipo de dato y estructura que soporta el lenguaje
* ¿Cuál es la diferencia entre declarar e inicializar una variable?

  Declara es cuando decimos a javaScript que vamos a crear una variable con un nombre.
  Mientras que inicializar es asignarle un valor a esa variable.
  Ejemplo:

  ```
  //Declara un variable
  let nombre;
  //Inicializar un variable 
  Nombre = "Yakin Dario"
  ```
* ¿Cuál es la diferencia entre sumar números y concatenar strings?
* ¿Cuál operador me permite sumar o concatenar?

  con el Operador de (+)

### Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

* Nombre: string
* Apellido: string
* Nombre de usuario en Platzi: strig (@fulanito)
* Edad: number
* Correo electrónico: string ([lala@gmail.com](mailto:lala@gmail.com))
* Mayor de edad: boolean
* Dinero ahorrado: number
* Deudas: number

### Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```let
let nombre = "Yakin Dario";
let apellido = "Mendez Muñoz";
let user = "@yakindario";
let edad = 25;
let correo = "yakin@hola.com";
let mayorEdad = edad >= 18 ? true : false; 
let ahorrado = 1000;
let deuda = 500;
```

### Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

* Nombre completo (nombre y apellido)
* Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + " " + apellido;
let dineroReal = ahorrado - deuda;
console.log(`Tu nombre completo: ${nombreCompleto}`);
console.log(`tu Dinero es: ${dineroReal}`);
```

## Funciones

Responde las siguientes preguntas en la sección de comentarios:

* **¿Qué es una función?
* **Las fuciones nos permite encapsular Bloque de codigo para reutilizar y ejecutar en el Futuro.
* **¿Cuándo me sirve usar una función en mi código?**
  Nos sirve cuando tenemos variables o bloques de codigo muy parecidos, que podemos encapsular para reutilizar mas de una vez en el futuro.
* **¿Cuál es la diferencia entre parámetros y argumentos de una función?**
* Las funciones reciben parametros cuando las creamos. Y les enviamos argumentos cuando la ejecutamos.

### Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

Resultado:

```
function nombreCompleto(nombre, apellido){
    return nombre + " " + apellido;
}
function saludo(nombre,apellido,user){
    const completo = nombreCompleto(nombre,apellido);
    console.log(`Hola ${completo} ${user}`);
}
```

## Condicionales

### Responde las siguientes preguntas en la sección de comentarios:

* ¿Qué es un condicional?
  Es una expresion que nos permite evaluar si es True o Falso
* ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
  IF( else y else if), Switch
  El condiciona if, nos permite hacer unos validaciones, completamente distinta (si queremos) en cada validacion o condicional, en cambio, en el switch todos los cases se compara en a misma variable o condiciones que definomos en el switch.
* ¿Puedo combinar funciones y condicionales?
  si

### Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

### Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```
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
```

### Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```
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
```


## Ciclos

Responde las siguientes preguntas en la sección de comentarios:

* ¿Qué es un ciclo?

  La forma de ejecutar un bloque de codigo hasta que se cumpla ciertas condiciones
* ¿Qué tipos de ciclos existen en JavaScript?

  for, do while , while
* ¿Qué es un ciclo infinito y por qué es un problema?

  Es cuando la validacion  de nuestro condicionales nunca se cumple y termina dañando nuestra aplicacion.
* ¿Puedo mezclar ciclos y condicionales?

si se puede

### Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

### Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```
while (true){
    let pregunta = prompt("cuanto es 2 + 2");
    if (parseInt(pregunta) == 4){
        console.log("felicitaciones respuesta Correcto");
        break;
    }else{
        console.log("respuesta incorrecta");
    }
}
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

* ¿Qué es un array?

  Es una lista de elementos

  ```
  const array = [1,'holi',true,undefined,null,{}];
  ```
* ¿Qué es un objeto?

  Es un lista de elementos pero cada elemento tiene un nombre cable.

  ```
  const objeto = {
      nombre: "Yakin",
      edad: 25,
      comidaFavorita: "Pizza"
  }
  ```
* ¿Cuándo es mejor usar objetos o arrays?

  Ocupamos objetos cuando el conjuto de elemento es mu grande y de distinto tipos de valores.
* ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Si. Los array pueden gurdar objetos, Y los objetos pueden guardar array entre sus propiedades.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```
function imprimirPrimerElemento(array){
    console.log(array[0]);
}
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```
function imprimirTodosLosElementos(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
function imprimirElementosPorElementoObjeto(objeto){
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```
