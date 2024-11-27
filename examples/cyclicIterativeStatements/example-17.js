/**
 * Ejemplo 17: Simula el funcionamiento de una calculadora donde puedes calcular la potencia de un número. Tener en cuenta que la fórmula para una potencia es la siguiente x^b donde x y b son números enteros. El algoritmo es la multiplicación de x por sí mismo tantas veces como lo indica b.
 */

const base = parseInt(prompt("Ingresa la base."));
const exponente = parseInt(prompt("Ingresa el exponente."));
let resultado = 0;

// Si el exponente es 0, la potencia de cualquier número es 1
if (exponente === 0) {
    resultado = 1
} else {
    const esNegativo = exponente < 0;
    // convertimos el valor a su equivalente absoluto para determinar el número de iteraciones.
    const parsedExp = Math.abs(exponente);
    // Calculamos la potencia con un ciclo for
    resultado = base;
    // aquí hacemos -1 al exponente porque la primera iteración la hicimos al darle a resultado el valor inicial de la base
    for (let i = 0; i < (parsedExp - 1); i++) {
        resultado = resultado * base;
        // si operación equivalente es resultado*= base;
    }

    // Si el exponente es negativo, trabajamos con el inverso
    if (esNegativo) {
        resultado = 1 / resultado;
    }
}

alert("La base " + base.toString() + " elevado a " + exponente.toString() + " es igual a: " + resultado.toString());