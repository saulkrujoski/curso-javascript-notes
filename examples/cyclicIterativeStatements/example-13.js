/**
 * Ejemplo 13: Suponer que trabajas sobre el módulo de autenticación de usuarios sobre un sistema y para el control de accesos se pide un número limitado de intentos de acceso por credenciales incorrectas. Para ello vamos a crear un algoritmo que simule esta operación y que cuente el número de intentos fallidos y nos impida el acceso definitivamente una vez alcanzado este límite (por ejemplo 3 intentos).
 */

const RESTORED = "ILoveYou&2001";
const attemptsLimit = 3;
let intent = 1;
let password = prompt("¿Cuál es su contraseña?");

// Procesamos la contraseña
while ((password !== RESTORED) && (intent < attemptsLimit)) {
    console.error("Contraseña incorrecta, le restan " + (attemptsLimit - intent).toString() + " intentos.");
    intent++;
    password = prompt("¿Cuál es su contraseña?");
}

// Evaluamos si damos ingreso al sistema
if (password === RESTORED && intent < attemptsLimit) {
    alert("Bienvenido al sistema, ya puedes operar.");
} else {
    alert("Bloqueamos tú cuenta por alcanzar el límite de intentos, contacta con tú administrador.");
}