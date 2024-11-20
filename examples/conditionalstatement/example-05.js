/**
 * Ejemplo 5: este ejemplo usa una condición if para verificar si la hora actual está dentro del horario de atención de una tienda y dependiendo de ello nos arrojará un mensaje indicándonos esto.
 */

let horaActual = parseInt(prompt("Ingrese la hora actual expresada en el formato de 24hs. Es decir puede ingresar 00 a 24"));

const horaApertura = 9;
const horaCierre = 18;

if (horaActual >= horaApertura && horaActual <= horaCierre) {
    alert("La tienda está abierta.");
} else {
    alert("La tienda está cerrada.");
}