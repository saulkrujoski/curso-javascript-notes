/**
 * Ejemplo 6: Suponer que recorremos la lista de calificaciones de un estudiante y debemos calcular el promedio de calificaciones de este. Para hacerlo vamos a crear un algoritmo que solicite N números (N es un número entero que ingresamos por la interfaz) y calcularemos el promedio con los valores ingresados. Tener en cuenta que no sabemos cuántas calificaciones va a ingresar el usuario, definir cuál es la condición de corte.
 */

let calificacion = parseFloat(prompt("Calificación del estudiante"));
let sumatoria = 0;
let cantidad = 0;

while (calificacion > 0) {
    sumatoria = sumatoria + calificacion;
    cantidad++;
    calificacion = parseFloat(prompt("Calificación del estudiante"));
}
if (Boolean(cantidad)) {
    alert("El promedio de la/s " + cantidad.toString() + " calificacion/es del estudiante es de " + (sumatoria / cantidad).toFixed(2));
} else {
    alert("No hay calificaciones con que calcular el promedio.");
}