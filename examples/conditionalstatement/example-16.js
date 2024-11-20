/**
 * Ejemplo 16: Forma parte de un proyecto de desarrollo para el Sistema Operativo de un dispositivo móvil, y uno de los subsistemas es el control y gestión energética del dispositivo. Para esto debemos considerar el nivel de carga de la batería, si este está por debajo del 15%, se debe poner el dispositivo en modo ahorro de batería; si está entre 15% y 20%, se debe mantener una alerta de batería baja; si es superior no se debe hacer nada.
 */

const batteryLevel = parseInt(prompt("¿Cuál es el nivel de la baterìa del dispositivo?"));
const criticalLevel = 15;
const lowLevel = 20;

if (batteryLevel < criticalLevel) {
    alert("Poner el dispositivo en modo ahorro de energía.");
} else if (batteryLevel <= lowLevel) {
    alert("Alerta de batería baja!");
}
