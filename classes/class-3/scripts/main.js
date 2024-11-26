console.log("--> Bienvenidos a la clase 3: Ciclos e Iteraciones <--");

// # FOR
// Ejemplo de ciclo for básico: construimos una tabla de multiplicar
//const numero = parseInt(prompt("Un número"));

//  (desde,               hasta,          actualización)
/* for (let pasoActual = 1; pasoActual <= 10; pasoActual++) {
    // Acá va el bloque de código
    console.log(pasoActual.toString() + " * " + numero.toString() + " = " + (pasoActual * numero).toString())
} */

// # BREAK
// Sentencia break (uso dentro del ciclo for)
/* const numero = parseInt(prompt("Un número"));
for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual al valor ingresado por el usuario, interrumpo el for.
    if (i == numero) {
        break;
    }
    console.log(i);

} */
// acá al final (salto o break)

// # CONTINUE
// Sentencia continue (uso dentro del ciclo for)
/* for (let i = 1; i <= 20; i++) {
    //Si la variable i es igual 5 interrumpo el for.
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
} */
// no hay salto

// # WHILE
// Ejemplo de uso de ciclo while para pedir una contraseña limite+1 veces (si no quieres que sea limite+1 veces, debes inicializar intentos en 1)

// Simulamos la contraseña recuperada del servicio y la llamaremos recuperada.
/* const recuperada = "F3rnet";// chaman$56
const limite = 3;// límite de intentos para REPETIR solicitud de la contraseña
let intentos = 0;// representa el número de intento al repetir la contraseña

let ingreso = prompt("Ingrese su contraseña");

// Condición de corte --> que la contraseña sea correcta
// ¿Qué hace correcta a la contraseña? --> contraseña ingresada sea igual a la contraseña recuperada (password === real_password)
// Para ingresar debemos negar la condición original !(password === real_password)
// Por la ley de DeMorgan !(password === real_password) --> password !== real_password

console.log("--> Vamos a solicitar una contraseña");

while ((ingreso !== recuperada) && (intentos < limite)) {
    // Acá va el bloque de código
    console.log("--> Es necesario volver a pedir contraseña. Error: Contraseña incorrecta.");
    ingreso = prompt("¡Ingrese su contraseña nuevamente!");
    intentos = intentos + 1;// intentos++
}

console.log("--> Fin del proceso de validación"); */

// Aquí te invito a añadir un proceso más para determinar si al final del proceso de pedir la contraseña, ésta fué válida o no y permitir el acceso al sistema dependiendo de esto.

// DO-WHILE
// Aprovecharemos el mismo ejemplo anterior pero su comportamiento será distinto
/* const recuperada = "F3rnet";// chaman$56
const limite = 3;// límite de intentos para REPETIR solicitud de la contraseña
let intentos = 0;// representa el número de intento al repetir la contraseña
let ingreso;
do {
    // Acá va el bloque de código
    ingreso = prompt("¡Ingrese su contraseña!");
    intentos = intentos + 1;// intentos++
} while ((ingreso !== recuperada) && (intentos < limite))

console.log("Estoy al final del algoritmo"); */

// --> Comparación entre ciclo WHILE y ciclo DO-WHILE
// WHILE: se ejecuta 0 (CERO) o más veces.
// Evalua la condición de corte PRIMERO y luego ejecuta el BLOQUE de código.

// DO-WHILE: se ejecuta AL MENOS 1 (UNA) o más veces.
// Ejecuta el BLOQUE de código PRIMERO y evalua la condición de corte después.


// SWITCH
// Lo usamos para reemplazar aquellas estructuras complejas con más de un caso (como por ejemplo estructuras de if-else-if anidadas).

// Suponer que recibimos el error de un operación, y dependiendo del tipo de error vamos a tomar una u otra medida.
/* let entrada = prompt("Ingrese el tipo de error obtenido").toUpperCase();
switch (entrada) {
    case "SISTEMA":
        alert("Intente más tarde");
        break;
    case "SESIÓN":
        alert("Contacte con su administrador de credenciales");
        break;
    default:
        alert("No conzco el tipo de error. ¡No tengo acciones para esto!")
        break;
} */

// En un switch de JavaScript no puedes usar directamente operadores como <, >, <=, >= o incluso negaciones (!) para comparar valores. Esto se debe a que los case de un switch realizan una comparación estricta (===) con el valor proporcionado.

// Uso del SWITCH combinado con el ciclo WHILE para solicitar reiteradas veces un dato
/* let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while (entrada != "ESC") {
    switch (entrada) {
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        default:
            alert("¿QUIÉN SOS?")
            break;
    }
    entrada = prompt("Ingresar un nombre");
} */
