/**
 * Ejemplo 21: Suponer que eres miembro de un equipo que desarrolla y mantiene un juego popular, en este juego se puede restaurar la salud (vida) de los personajes que han peleado en batalla. Para lograr esto posees una botella de posición que cura únicamente una cantidad específica de esta “salud”, digamos 128 puntos. Se propone desarrollar un algoritmo que permita al usuario ordenar restaurar la vida completa de este personaje o bien hasta donde se pueda con la cantidad de estas botellas de las que disponga.
 */

const MEDICINE_BOTTLE_UNIT = 30;
const HEALING_CAPACITY = 128;

let totalHealth = parseInt(prompt("Salud total del personaje"));

// Validación del total de salud
while (isNaN(totalHealth) || totalHealth <= 0) {
    alert("La salud del personaje debe ser un número entero superior a 0 (cero).");
    totalHealth = parseInt(prompt("Ingresa nuevamente la salud total del personaje"));
}

let damage = parseInt(prompt("Daño recibido"));

// Validación del total de daño
while (isNaN(damage) || damage <= 0 || damage >= totalHealth) {
    alert("El daño recibido por el personaje debe ser un número entero superior a 0 (cero) e inferior a " + totalHealth.toString() + ".");
    damage = parseInt(prompt("Ingresa nuevamente el daño recibido"));
}

let health = totalHealth - damage;
const NEEDED_BOTTLES = Math.ceil(damage / HEALING_CAPACITY);// redondeamos hacia arriba

let limit = NEEDED_BOTTLES;
if (NEEDED_BOTTLES > MEDICINE_BOTTLE_UNIT) {
    limit = MEDICINE_BOTTLE_UNIT;
}

for (let dose = 0; dose < limit; dose++) {
    // Validamos que no pasemos del límite total de la slaud del personaje al aplicar la medicina
    if ((health + HEALING_CAPACITY) > totalHealth) {
        health = totalHealth;
    } else {
        health = health + HEALING_CAPACITY;
    }
    console.log("Restaurando " + health.toString() + " de " + totalHealth.toString());
    // Evaluamos que el daño registrado no sea un número negativo
    if ((damage - HEALING_CAPACITY) < 0) {
        damage = 0
    } else {
        damage = damage - HEALING_CAPACITY;
    }
}

alert("Salud del personaje restaurada al 100% con " + limit.toString() + " botella/s de medicina.");