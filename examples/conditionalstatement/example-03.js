/**
 * Ejemplo 3: necesitamos que se verifique mediante la edad de una persona, si esta posee la edad suficiente como para poder votar en las elecciones locales.
 */

let edad = parseFloat(prompt("¿Cuál es la edad de la persona?"));

const edadMinima = 18;

if (edad >= edadMinima) {
    alert("La persona puede votar");
} else {
    alert("La persona NO puede votar");
}