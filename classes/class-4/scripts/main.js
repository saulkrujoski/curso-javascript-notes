console.log("--> Bienvenidos a la clase 4: Funciones <--");

// Por qué necesitamos una función
// Aquí tenemos una cantidad de líneas de código que hacen lo mismo y se repiten, podemos implementar la funcionalidad en una "caja" para reducir la cantidad de líneas de código dentro de nuestros archivos y si la funcionalidad cambia, poder mantenerla con facilidad.
/* let multiplicador = 3;

console.log("1 * 3 = " + (multiplicador * 1).toString());
console.log("2 * 3 = " + (multiplicador * 2).toString());
console.log("3 * 3 = " + (multiplicador * 3).toString());
console.log("4 * 3 = " + (multiplicador * 4).toString());
console.log("5 * 3 = " + (multiplicador * 5).toString());
console.log("6 * 3 = " + (multiplicador * 6).toString());
console.log("7 * 3 = " + (multiplicador * 7).toString());
console.log("8 * 3 = " + (multiplicador * 8).toString());
console.log("9 * 3 = " + (multiplicador * 9).toString());
console.log("10 * 3 = " + (multiplicador * 10).toString()); */


/* // --> Definición de una función
function saludar() {
    alert("Hola, bienvenidos a la clase de hoy, veremos funciones.")
}

// Invocación (llamado de una función)
saludar(); */

/* // --> Definición de función para pedir nombre
function solicitarNombre() {
    let nombreIngresado = prompt("Ingresar nombre")
    alert("El nombre ingresado es " + nombreIngresado)
} 

solicitarNombre()
solicitarNombre()
solicitarNombre() */


// --> Función para saludar con un nombre
/* function mostrarSaludo(nombreIngresado) {
    alert("Hola, " + nombreIngresado + " bienvenido a la clase 4.")
}

let nombre = prompt("Ingresar nombre");
mostrarSaludo(nombre); */

// --> Función para saludar con un nombre y un curso personalizado (uso de varios parámetros)
/* function mostrarSaludoPorCurso(nombreEstudiante, nombreCurso) {
    alert("Hola, " + nombreEstudiante + " bienvenido al curso de " + nombreCurso)
}

let studentName = prompt("Ingresar nombre del estudiante");
let capacityName = prompt("Ingresar nombre del curso");
mostrarSaludoPorCurso(studentName, capacityName); */

// --> Uso de funciones y el retorno de valores (sin return)
//Declaración de variable para guardar el resultado de la suma
/* let resultado;

//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}

//Función que muestra resultado por consola
function mostrar(mensaje) {
    alert(mensaje)
}

//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);
mostrar(resultado); */

// --> Usamos la misma función anteriormente definida pero ahora con RETURN
/* let resultado;

//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero
}

//Función que muestra resultado por consola
function mostrar(mensaje) {
    alert(mensaje)
}

//Llamamos primero a sumar y luego a mostrar
resultado = sumar(10, 30);
mostrar(resultado); */


// --> Variables Globales: pueden accederse a estas desde cualquier parte del programa (tanto dentro de este archivo javascript como en los que son incluidos en el html luego de este)
/* let resultado = 0

function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}

sumar(5,6);
//Se puede acceder a la variable resultado porque es global
console.log(resultado); */


// --> Variables locales: solo viven dentro del bloque de código donde fueron definidas, no pueden ser usados fuera de estos (por ejemplo si se definen dentro de una función no existen fuera de esta)
/* function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
}

//No se puede acceder a la variable resultado fuera del bloque
sumar(20,15)
console.log(resultado); */
