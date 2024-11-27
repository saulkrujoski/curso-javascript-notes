/**
 * Ejemplo 9: El gerente de una agencia de préstamos necesita un sistema para generar las cuotas para sus afiliados, para ello necesitaremos conocer el monto total del préstamo, el porcentaje de ganancia sobre el préstamo, y mediante este calcularemos cada uno de los pagos mensuales del préstamo por N meses. Dónde el valor del préstamo es un número decimal, el porcentaje es un decimal y N es el número de meses que escogió el afiliado. Para resolverlo considerar el sistema de interés compuesto.
 */

const balance = parseFloat(prompt("Monto total del préstamo"));
const interestRate = parseFloat(prompt("Porcentaje del interés expresado entre 0 y 100"));
const months = parseInt(prompt("Cantidad de meses"));

let initialFeeValue = balance / months;
const percent = interestRate / 100;

let total = 0;
for (let month = 1; month <= months; month++) {
    const increment = initialFeeValue * percent;
    initialFeeValue = initialFeeValue + increment;
    total = total + initialFeeValue;
    console.log("Valor de la cuota N° " + month.toString() + " es de $ " + initialFeeValue.toFixed(2));
}
alert("Al final de el/los " + months.toString() + " mes/es usted habrá pagado $ " + total.toFixed(2));