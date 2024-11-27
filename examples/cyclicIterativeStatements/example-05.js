/**
 * Ejemplo 5: Simular el proceso de control de inventario en una tienda de venta de productos, para este proceso vamos a permitir al usuario ingresar el número de unidades de un producto vendido siempre y cuando queden existencias.
 */

let existencias = 100;

let cantidad = parseInt(prompt("Cantidad de productos vendidos"));

while (cantidad < existencias) {
    existencias = existencias - cantidad;
    console.log("Existencias reducida en " + cantidad.toString() + " unidades.");
    cantidad = parseInt(prompt("Cantidad de productos vendidos"));
}

alert("La existencias quedó con " + existencias.toString() + " unidades.");