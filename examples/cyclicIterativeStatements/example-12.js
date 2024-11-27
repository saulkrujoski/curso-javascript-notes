/**
 * Ejemplo 12: Plantear la solución para un algoritmo que permita el control sobre la carga de combustible de un surtidor en una estación de servicio. Este planteo puede hacerse tanto en unidades cargadas o en monto de la compra, entonces el planteo es el siguiente, solicitar al operador que accione el gatillo del dispensador siempre que no haya llegado al límite de lo solicitado (ya sea unidades en centímetros cúbicos o monto de moneda), además para completar la tarea primero debemos solicitar al usuario este primer dato que nos ofrece el límite de la carga (de nuevo ya sea unidades en centímetros cúbicos o monto de moneda).
 */

const litros = parseFloat(prompt("Indique la cantidad de litros a cargar."));
let centrimetrosCubicos = litros * 1000;
let volumen = parseFloat(prompt("Ingrese el volumen en cc a cargar."));
debugger
while ((volumen <= centrimetrosCubicos) && (volumen > 0) && (centrimetrosCubicos > 0)) {
    centrimetrosCubicos = centrimetrosCubicos - volumen;
    volumen = parseFloat(prompt("Ingrese el volumen en cc a cargar."));
}

alert("Cargaste un total de " + ((litros * 1000) - centrimetrosCubicos).toFixed(2) + "cc");