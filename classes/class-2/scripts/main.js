console.log("--> Bienvenidos a la clase 2 <--");

/* // estructura básica es
let diaDeLaSemana = "miércoles"
if (diaDeLaSemana == "miércoles") {//true
    // hago algo
    // es un blocke
}
diaDeLaSemana = "jueves"// el signo igual se usa como asignación de valor
if (diaDeLaSemana === "miércoles") {//false el signo igual se usa como operación de comparación
    // hago algo
    // es un blocke
} */

// Acá hablamos sobre la estructura opuesta que es el ELSE
/* const nombreUsuario = prompt("¿Cuál es tú nombre?");

if (nombreUsuario == "") {// esto está vacío (no hay nada, es una cadena sin caracteres)
    // si la pregunta resulta en verdadero
    // hago esto de acá
    alert("No ingresaste tú nombre!")
} else {
    alert("Hola " + nombreUsuario + " bienvenido!")
} */

// estructura de IF-ELSE-IF anidados
/* const montoCompra = parseFloat(prompt("¿Cuánto gastaste?"));

if (montoCompra > 10000) {
    alert("DESCUENTO DEL 13%");
} else if (montoCompra > 8000) {
    alert("DESCUENTO DEL 8%");
} else if (montoCompra > 5000) {
    alert("DESCUENTO DEL 3%");
} else {
    alert("NO TIENES DESCUENTOS");
} */

/* const numero = parseInt(prompt("Ingresa un número"));
//const limite = 29;

// esto es mayor > que esto otro
// esto es menor < que esto otro
const esMayorAOtroNumero = numero > 29//limite;

if (esMayorAOtroNumero) {
    alert("El valor que ingresaste es mayor a " + 29)// aquí podemos reemplazar el número por una constante limite.toString()
} else {
    alert("El valor ingresado no es mayor a " + 29)
} */

/* const esUsuario = true;
if (esUsuario) {
    // añadir funcionalidad para registrar contactos
}

if (esUsuario) {
    // añadir funcionalidad para listar auditorias
} */


// Aplicación del distinto para hacer lo mismo
/* const nombreUsuario = prompt("¿Cuál es tú nombre?");

if (nombreUsuario !== "") {
    alert("Hola " + nombreUsuario + " bienvenido!")
} else {
    // esto está vacío (no hay nada, es una cadena sin caracteres)
    // si la pregunta resulta en verdadero
    // hago esto de acá
    alert("No ingresaste tú nombre!")
} */

// APlicación del operador lógico AMD (&&)

/* const nombreUsuario = prompt("Nombre de usaurio");
const contrasena = prompt("Contraseña");

// ()&&() es una proposició compuesta o moleculart --> tiene dos preguntas lógicas por separado

if ((nombreUsuario != "") && (contrasena !== "")) {
    alert("Puedes ingresar al sistema");
} else {
    alert("NO puedes ingresar al sistema!");
} */


// APlicación del operador lógico OR (||)
/*let nombreIngresado = prompt("Ingresar nombre");

// CHAmaN <-> CHAMAN --> false
// CHAmaN <-> chaman --> false
if ((nombreIngresado == "CHAMAN") || (nombreIngresado == "chaman")) {
    alert("El nombre ingresado es Chaman");
} else {
    alert("El nombre ingresado NO ES Chaman");
} */

// CHAmaN <-> CHAMAN --> false
// CHAmaN <-> chaman --> false
// Para evitar estos casos donde pueden aparecer combinaciones que no contemplamos, podemos hacer lo siguiente. Y mediante esto reducir la complejidad del algoritmo.
// .trim() --> remueve todos los espacios en blanco del principio y del final de una cadena.
// .toLowerCase() --> convierte toda la cadena a minúsculas.
// .toUpperCase() --> convierte toda la cadena a mayúsculas.
/* if (nombreIngresado.trim().toLowerCase() == "chaman") {
    alert("El nombre ingresado es Chaman");
} else {
    alert("El nombre ingresado NO ES Chaman");
} */