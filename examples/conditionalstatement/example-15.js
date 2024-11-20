/**
 * Ejemplo 15: Recordar cuando en la primaria las calificaciones no eran números sino etiquetas, donde si la calificación es menor a 5, se obtiene un "Reprobado"; mayor a 5 y menor a 8, "Suficiente"; y de 8 hasta el 10 obtenias un "Sobresaliente". bueno, tomaremos esta escala para “traducir” las calificaciones de estudiantes en etiquetas fácilmente identificables
 */

/* NOTA: Un lux es una unidad de medida de la iluminancia, que indica la cantidad de luz que llega a una superficie. Específicamente, un lux equivale a un lumen por metro cuadrado (lm/m²). Mide cuánta luz visible incide sobre una superficie en un área específica. */

const luxLevel = parseInt(prompt("¿Cuál es el nivel de luminosidad ambiental exterior medido en lux?"));
const threshold = 150;// Umbral

if (luxLevel < threshold) {
    alert("Encender");
} else {
    alert("Apagar");
}
