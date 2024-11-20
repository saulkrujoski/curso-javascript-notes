/**
 * Ejemplo 8: Suponer que en una fábrica hay incentivos otorgados a aquel personal que supera un umbral de producción, para este caso vamos a otorgar un incentivo de $ 200.000,00 a aquellos individuos que superen la producción mínima de 30.000 unidades..
 */

let producido = parseInt(prompt("Ingrese el número de unidades producidas"));
let incentivo = 200000;

const produccionMinima = 30000;

if (producido > produccionMinima) {
    alert("El personal recibe un incentivo de $ " + incentivo.toFixed(2) + " por la producción de " + producido.toString() + " unidades.");
}