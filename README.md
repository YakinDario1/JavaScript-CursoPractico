# JavaScript

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

* **¿Qué es una función?**
  Las fuciones nos permite encapsular Bloque de codigo para reutilizar y ejecutar en el Futuro.
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



## Ciclos

Responde las siguientes preguntas en la sección de comentarios:

* ¿Qué es un ciclo?
* ¿Qué tipos de ciclos existen en JavaScript?
* ¿Qué es un ciclo infinito y por qué es un problema?
* ¿Puedo mezclar ciclos y condicionales?
