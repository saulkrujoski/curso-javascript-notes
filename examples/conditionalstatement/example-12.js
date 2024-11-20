/**
 * Ejemplo 12: Podemos encontrar el escenario donde debamos incorporar alertas al área de reposición de stock de una empresa. Para ello supongamos que debemos monitorear constantemente el manejo de mercadería entre el área de ventas y reposición, y tenemos parametrizado un umbral donde debemos alertar si es necesario reponer un producto y cuantas unidades son necesarias para alejarnos de este umbral.
 */

let currentStock = 100;
const unitsSold = parseInt(prompt("Cantidad de unidades vendidas"));
currentStock = currentStock - unitsSold;// Actualización del stock
const threshold = 31;// Umbral
const replacementMargin = 20;// En cuántas unidades debemos superar para evitar una alerta temprana

if (currentStock < threshold) {
    const quantity = (threshold - currentStock) + replacementMargin;
    alert("Es necesario reponer el producto en " + quantity.toString() + " unidades.");
}
