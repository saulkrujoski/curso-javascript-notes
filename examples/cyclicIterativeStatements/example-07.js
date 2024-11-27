/**
 * Ejemplo 7: Imaginar que estamos haciendo las cuentas de fin de mes para evaluar nuestros ingresos y egresos, para este caso vamos a realizar un ciclo repetitivo donde ingresamos por ejemplo, 10 números, positivos o negativos, y el algoritmo debe calcular el resultado final de sumar o restar estos valores y decirnos cuánto es el resultado final.
 */

let total = 0;

for (let index = 0; index < 10; index++) {
    const monto = parseFloat(prompt("Ingrese el monto del ingreso o egreso número " + (index + 1).toString()));
    total = total + monto;
}
alert("El monto resultante del balance es $ " + total.toFixed(2));