/**
 * Ejemplo 7: requerimos proporcionar descuentos a aquellos compradores de una tienda online dependiendo del monto total de sus compras.
 */

let montoTotal = parseFloat(prompt("Ingrese el monto total de la compra"));
let descuento;

const consumoMinimo = 5000;
const consumoMedio = 15000;
const consumoAlto = 50000;

if (montoTotal <= consumoMinimo) {
    descuento = 0;
} else if (montoTotal <= consumoMedio) {
    descuento = 5;
} else if (montoTotal <= consumoAlto) {
    descuento = 10;
} else {
    descuento = 15;
}

alert("Descuento otorgado " + descuento + "%");