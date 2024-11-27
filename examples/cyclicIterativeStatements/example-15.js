/**
 * Ejemplo 15: Suponer que eres uno de los devs de un equipo dentro de un banco y estás a cargo de desarrollar el algoritmo que calcule y re-estructure la deuda sobre la deuda de una tarjeta de crédito. Para simular el cálculo de intereses acumulados mes a mes hasta que se pague vamos a necesitar conocer el saldo inicial y el porcentaje de incremento mediante el sistema compuesto (se calcula sobre el último ya calculado y actualizado sobre el saldo) si la deuda no se salda por completo.
 */

let saldo = parseFloat(prompt("Saldo de la cuenta"));
const interestRate = parseFloat(prompt("Porcentaje del interés por mes, expresado entre 0 y 100"));
const percent = interestRate / 100;
let pago = parseFloat(prompt("¿Cuánto quiere abonar de la deuda?"));

while (pago > 0 && pago < saldo && saldo > 0) {
    saldo = saldo - pago;
    const incremento = saldo * percent;
    saldo = saldo + incremento;
    console.log("Se ha añadido un incremento de $ " + incremento.toString() + " a su cuenta, quedando en un saldo de $ " + saldo.toFixed(2));
    pago = parseFloat(prompt("¿Cuánto quiere abonar de la deuda?"));
}

alert("El saldo final de la cuenta es de $ " + saldo.toFixed(2));