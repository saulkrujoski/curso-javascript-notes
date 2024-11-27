/**
 * Ejemplo 14: Plantéate los procesos que ocurren en la caja de un supermercado mientras realizas una compra, suponer que llegas con tú carrito de compras con los productos escogidos. Para plantear la solución, crearás un algoritmo en el cual vamos a cargar el nombre de un producto y el precio de este siempre y cuando el nombre del producto no sea una cadena vacía. Durante el proceso se deberá imprimir por consola el nombre del producto ingresado y el precio, al final debemos conocer el total de la compra.
 */

let total = 0;
let nombre = prompt("Nombre del producto");
debugger
while (nombre.trim() !== "") {
    let precioUnitario = parseFloat(prompt("Precio unitario para " + nombre.trim()));
    while (precioUnitario <= 0) {
        precioUnitario = parseFloat(prompt("Ingrese nuevamente el precio unitario para " + nombre.trim() + ", el valor no puede ser un número negativo"));
    }
    total = total + precioUnitario;
    nombre = prompt("Nombre del próximo producto");
}

alert("Costo total de la suma de sus productos $ " + total.toFixed(2));