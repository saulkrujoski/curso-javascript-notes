/**
 * Ejemplo 11: Podemos imaginarnos trabajando para el municipio de la ciudad donde resides, y allí deciden incorporar la automatización del cobro de tarifas de estacionamiento mediante una app mobile. Para ello sabemos que si el tiempo de estacionamiento es inferior a 1 hora, se cobra una tarifa mínima; si es entre 1 y 3 horas, la tarifa por hora es un valor medio; y en el caso de superar las 3 horas, se aplicará una tarifa más elevada.
 */

const horas = parseInt(prompt("Ingrese la cantidad de horas de estacionamiento"));
const minimumAmount = 160;
const averageAmount = 240;
const higherAmount = 280;

let monto = 0;

if (horas < 1) {
    monto = minimumAmount;
} else if (horas > 1 && horas < 3) {
    monto = averageAmount * horas;
} else {
    monto = higherAmount * horas;
}

alert("El monto total de pago por el uso de estacionamiento es de $ " + monto.toFixed(2));