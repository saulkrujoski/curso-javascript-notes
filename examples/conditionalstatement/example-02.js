/**
 * Ejemplo 2: Este ejemplo introduce la estructura else, permitiendo que el código decida entre dos opciones. Mejoramos la lógica del ejemplo anterior para poder decidir con dos propuestas de flujos diferentes.
 */

let saldo = parseFloat(prompt("¿Cuánto es el saldo de la cuenta del cliente?"));

if (saldo > 0) {
    alert("El usuario cuenta con saldo en la cuenta!");
} else {
    alert("El usuario NO cuenta con saldo en la cuenta!");
}