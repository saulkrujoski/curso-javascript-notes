/**
 * Ejemplo 3: Permitir al usuario ingresar una frase que represente una tarea a realizar, el algoritmo nos debe permitir cargar tareas siempre que el usuario no ingrese una cadena de texto vacía. Durante el proceso de carga debemos mostrar por consola la tarea cargada y el orden en el que fue creada. Al final del proceso mostrar en un alert la cantidad de tareas proporcionadas.
 */

let tarea = prompt("Ingresa la tarea que quieres agregar a la lista");

let contador = 0;
while (tarea !== "") {
    contador++;
    console.log("Tarea " + String(contador) + ": " + tarea);
    // esta expresión es equivalente a
    // contador = contador + 1;
    // es muy importante volver a pedir el input del usuario sino caeremos en un bucle infinito
    tarea = prompt("Ingresa la tarea que quieres agregar a la lista");
}

alert("Tareas pendientes en la lista " + String(contador));
