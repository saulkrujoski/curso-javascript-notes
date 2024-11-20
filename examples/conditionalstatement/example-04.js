/**
 * Ejemplo 4: necesitamos calcular el costo de envío de un paquete, y este costo depende de la distancia recorrida desde el lugar de despacho al de recepción. Para ello distancias entre 0-500km el costo es de $ 5.000, entre 500-1000km es de $ 7.250 y superior a este es $ 10.000.
 */

const distanciaMinima = 500;
const distanciaMedia = 1000;

let distancia = parseFloat(prompt("¿Cuál es la distancia medida en kilometros?"));
let costoDelEnvio;

if (distancia <= distanciaMinima) {
    // Lo usaremos para representar la distancia recorrida de hasta un máximo de 500km
    costoDelEnvio = parseFloat(5000);
} else if (distancia <= distanciaMedia) {
    // Lo usaremos para representar una distancia recorrida superior a 500km y hasta 100km
    costoDelEnvio = parseFloat(7250);
} else {
    // Si la distancia recorrida supera los 1000km
    costoDelEnvio = parseFloat(10000);
}

alert("Costo del envío para " + distancia + " kilometros es $ " + costoDelEnvio.toFixed(2));