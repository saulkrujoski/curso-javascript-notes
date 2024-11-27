/**
 * Ejemplo 11: Plantear un algoritmo para el control sobre el consumo sobre una tarjeta de débito, donde vamos a permitir al usuario ingresar un consumo siempre que cuente con saldo disponible para consumirlo.
 */

let saldo = parseFloat(prompt("Indique el saldo inicial de la cuenta"));

let monto = parseFloat(prompt("Ingrese el consumo requerido"));

while ((monto <= saldo) && (monto > 0) && (saldo > 0)) {
    saldo = saldo - monto;
    monto = parseFloat(prompt("Ingrese el consumo requerido"));
}

alert("La cuenta ha quedado con el saldo de $ " + saldo.toFixed(2));