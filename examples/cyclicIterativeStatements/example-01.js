/**
 * Ejemplo1: Suponer que necesitamos validar el saldo de la cuenta bancaria de un cliente, si el cliente posee un saldo positivo (superior a cero) puede continuar con la transacción requerida.
 */

let saldo = parseFloat(prompt("¿Cuánto es el saldo de la cuenta del cliente?"));

if (saldo > 0) {
    alert("El usuario cuenta con saldo en la cuenta!");
}