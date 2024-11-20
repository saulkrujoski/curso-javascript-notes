/**
 * Ejemplo 19: Simular el funcionamiento de una agencia de recaudación de impuestos, y para ello suponemos que un contribuyente con ingresos menores a $100.000, no paga impuestos; entre $ 100.000 y $ 500.000, paga un 4.6%; más de $500.000 y menos de 1.000.000, un 6% y por encima del $ 1.000.000 un total de 8%. Se requiere devolver el monto total de impuestos a ser solicitados según el ingreso declarado.
 */

const amount = parseFloat(prompt("Ingrese el monto de ingresos mensual del contribuyente"));
const maxLimit = 1000000;
const mediumLimit = 500000;
const lowLimit = 100000;
let taxAmount = 0;
debugger
if (amount > maxLimit) {
    taxAmount = amount * 0.080;
} else if (amount > mediumLimit) {
    // ¿Por qué quí no puse el >= como en el caso siguiente?
    taxAmount = amount * 0.060;
} else if (amount >= lowLimit) {
    taxAmount = amount * 0.046;
}

alert("El monto de impuestos a abonar es $ " + taxAmount.toFixed(2) + ".");