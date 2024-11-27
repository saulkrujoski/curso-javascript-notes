/**
 * Ejemplo 10: suponer que trabajamos para el mantenimiento de un sistema de consultorios médicos, y una de las nuevas características que quieren añadir es la posibilidad de sugerir horarios de citas tomando en cuenta un horario de inicio, un horario de finalización y un intervalo. Para este caso vamos a suponer una atención de 08:00hs a 16:00hs y un intervalo de 20 minutos por consulta.
 */

const inicioEnHoras = prompt("Hora de inicio de intervalo expresado en formato ##:##. Dónde # es un número entero entre el 0 y el 9, por ejemplo para decir 08:00 escribiremos 08:00");
const finEnHoras = prompt("Hora de finalización de intervalo expresado en formato ##:##. Dónde # es un número entero entre el 0 y el 9, por ejemplo para decir 16:00 escribiremos 16:00");
const intervaloEnMinutos = parseInt(prompt("Intervalo expresado en minutos de 0 a 60"));

// Convertiremos los intervalos en minutos
const [horasInicio, minutosInicio] = inicioEnHoras.split(":").map(Number);
const inicioEnMinutos = horasInicio * 60 + minutosInicio;

const [horasFin, minutosFin] = finEnHoras.split(":").map(Number);
const finEnMinutos = horasFin * 60 + minutosFin;

// Generamos la lista propuesta de horarios
for (let tiempo = inicioEnMinutos; tiempo < finEnMinutos; tiempo += intervaloEnMinutos) {
    const horas = Math.floor(tiempo / 60);
    const minutos = tiempo % 60;
    console.log("--> " + horas.toString().padStart(2, '0') + ":" + minutos.toString().padStart(2, '0'));
}