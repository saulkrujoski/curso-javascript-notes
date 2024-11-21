// Esto es un comentario de una sola línea

/*
Esto es un comentario
de varias líneas
*/

// ------------------------------------------------------------------------------

// --> VARIABLES
// Tenemos tres formas de definir variables

// Forma 1: var nombre_variable;
/*
Este es el caso menos recomendado, ya que desde ES6 se creo la definición con la palabra reservada let, debido a qué con la versión "var" puedes cometer muchos errores
*/
// Podemos simplemente definir la variable (definición)
// var nickName;
// Luego podemos asignarle un valor (asignación)
// nickName = "Chaman";
// O podemos definirla e inicializarla "todo en una sola línea" (inicialización)
// var nickName = "John Doe"

// No recomendamos usar var ya que podemos usarlo antes de definirlo y eso está mal (hoisting)
// console.log(variableDefinidaLuego); // Aquí obtendremos como resultado undefined
// var variableDefinidaLuego = "Este valor no lo vamos a ver en el primer console.log";
// console.log(variableDefinidaLuego); // Aquí obtendremos como resultado "Este valor no lo vamos a ver en el primer console.log"


// Forma 2: let nombre_variable;
// La forma correcta de definir una variable
// Podemos simplemente definir la variable (definición)
// var nickName;
// Luego podemos asignarle un valor (asignación)
// nickName = "Chaman";
// O podemos definirla e inicializarla "todo en una sola línea" (inicialización)
// let nickName = "John Doe"


// Forma 3: const nombre_constante = nombre_constante;
// A diferencia de las variables, una "variable" definida con la palabra const NO es "variable"
// Este tipo particular de variables constante NO pueden y NO deben cambiar de valor a lo largo de la ejecución de la aplicación. Por ello es que su forma de crearlas es en una sola línea
// const API_URL = "https://api.ejemplo.com";

// ------------------------------------------------------------------------------

// --> DIFERENCIAS ENTRE VAR, LET y CONST

/* Redeclaración de variables con var
Con var, puedes declarar la misma variable varias veces en el mismo ámbito
sin errores, lo cual puede provocar sobreescrituras accidentales. */

// var nombre = "Ana";
// console.log(nombre); // Output: "Ana"
// var nombre = "Luis"; // Redeclaración de la misma variable
// console.log(nombre); // Output: "Luis"

/* Problemas de elevación (hoisting) con var
Con var, las variables son "elevadas" al principio del ámbito, y se inicializan
como undefined. Esto puede causar problemas si intentas usar la variable antes de
su declaración. */

// console.log(saludo); // Output: undefined (por hoisting)
// var saludo = "Hola";
// console.log(saludo); // Output: "Hola"

// ------------------------------------------------------------------------------

/* Para ilustrar las diferencias, el mismo comportamiento con let y const daría
errores en la mayoría de los casos. */

// let nombre = "Ana";
// nombre = "Luis"; // Reasignación permitida con "let"
// console.log(nombre); // Output: "Luis"

// Intentar redeclarar con "let" en el mismo ámbito daría un error
// let nombre = "Carlos"; // Error: Identifier "nombre" has already been declared

// const edad = 25;
// edad = 30; // Error: Assignment to constant variable

// ------------------------------------------------------------------------------

// --> INTERACTUAR CON EL USUARIO

/* En JavaScript, los métodos prompt(), alert() y confirm() se utilizan para interactuar
con el usuario. Cada uno de estos métodos tiene un propósito específico: */

// --> prompt()
/* Se utiliza para mostrar un cuadro de diálogo que solicita información al
usuario. El usuario puede escribir algo en un campo de texto y hacer clic en
"Aceptar" o "Cancelar". El valor ingresado por el usuario se devuelve como
una cadena de texto (string). */

// Sintaxis
// let nombre = prompt("¿Cómo te llamas?");
// console.log(nombre); // Muestra el valor ingresado por el usuario

// --> alert()
/* Muestra un cuadro de diálogo de alerta con un mensaje que el usuario
puede ver. Este cuadro de diálogo contiene un solo botón de "Aceptar", que
el usuario debe presionar para cerrar la alerta. */

// Sintaxis
// alert("¡Hola, bienvenido a mi página web!");

// --> confirm()
/* Para solicitudes de confirmación o preguntas de sí/no, puedes usar el método
confirm(), que devuelve un valor booleano. Este método es útil para obtener una
respuesta de tipo afirmación o negación sin agregar HTML. */

// Sintaxis
/* let respuesta = confirm("¿Quieres continuar?");
if (respuesta) {
    console.log("El usuario quiere continuar.");
} else {
    console.log("El usuario canceló la operación.");
} */