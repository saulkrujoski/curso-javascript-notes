/**
 * Ejemplo 19: Simular un juego de adivinanzas donde el usuario recibirá un input en pantalla para indicar un número entero entre el 1 y el 100, si no acierta contra el generado pseudo-aleatoriamente por el algoritmo, se le debe pedir nuevamente y contar un intento como fallido, al final del proceso una vez adivine el número o alcance el límite de 10 intentos, se debe informar si adivinó o no el número generado originalmente y cuantos intentos fallidos posee si los tuviera.
 */

const MIN_LIMIT = 0;
const MAX_LIMIT = 100;
const ATTEMPTS_LIMIT = 10;
const GENERATED = Math.floor(Math.random() * (MAX_LIMIT - MIN_LIMIT + 1)) + MIN_LIMIT;;// generar un número pseudo-aleatorio
let attempts = 0;
let value;

do {
    value = parseInt(prompt("Dime un número entre el " + MIN_LIMIT.toString() + " y el " + MAX_LIMIT.toString() + "."));

    // Validar la entrada
    while (isNaN(value) || value < MIN_LIMIT || value > MAX_LIMIT) {
        alert("Por favor, ingresa un número válido entre " + MIN_LIMIT.toString() + " y " + MAX_LIMIT.toString() + ".");
        value = parseInt(prompt("Dime un número entre el " + MIN_LIMIT.toString() + " y el " + MAX_LIMIT.toString() + "."));
    }
    if (value !== GENERATED && value < GENERATED) {
        alert("Por debajo! Intenta con un número más alto.");
    } else if (value !== GENERATED && value > GENERATED) {
        alert("Por arriba! Intenta con un número más bajo.");
    }
    attempts++;
} while ((value !== GENERATED) && (attempts < ATTEMPTS_LIMIT));

if ((value === GENERATED) && (attempts < ATTEMPTS_LIMIT)) {
    alert("¡Felicidades! Adivinaste el número con " + attempts.toString() + " intentos.");
} else {
    alert("¡Lo siento! Superaste el límite de " + attempts.toString() + " intentos permitidos sin adivinarlo.\nEl número era " + GENERATED.toString());
}